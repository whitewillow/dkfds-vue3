import { init } from 'dkfds';
import breakpoints from './breakpoints';

/**
 * Set tooltip on element
 * @param {HTMLElement} element Element which has tooltip
 */
export default class DKFDSDropdown {
  buttonElement: HTMLElement;

  targetEl: HTMLElement;

  responsiveListCollapseEnabled = false;

  BUTTON = '.button-overflow-menu';

  jsDropdownCollapseModifier = 'js-dropdown--responsive-collapse'; // option: make dropdown behave as the collapse component when on small screens (used by submenus in the header and step-dropdown).

  TARGET = 'data-js-target';

  constructor (newButtonElement: HTMLElement | null | undefined) {
    if (!newButtonElement) {
      throw new Error('Could not find button for overflow menu component.');
    }

    this.buttonElement = newButtonElement;

    const targetAttr = this.buttonElement.getAttribute(this.TARGET);
    if (!targetAttr) {
      throw new Error(`Attribute could not be found on overflow menu component: ${this.TARGET}`);
    }
    const targetEl = document.getElementById(targetAttr.replace('#', ''));
    if (!targetEl) {
      throw new Error('Panel for overflow menu component could not be found.');
    }
    this.targetEl = targetEl;
  }

  init () {
    if (this.buttonElement && this.targetEl) {
      if (
        (<Element> this.buttonElement?.parentNode)?.classList.contains(
          'overflow-menu--md-no-responsive',
        )
        || (<Element> this.buttonElement?.parentNode)?.classList.contains(
          'overflow-menu--lg-no-responsive',
        )
      ) {
        this.responsiveListCollapseEnabled = true;
      }

      // Clicked outside dropdown -> close it
      document.getElementsByTagName('body')[0].removeEventListener('click', this.outsideClose);
      document.getElementsByTagName('body')[0].addEventListener('click', this.outsideClose);
      // Clicked on dropdown open button --> toggle it
      this.buttonElement.removeEventListener('click', (e) => this.toggleDropdown(e));
      this.buttonElement.addEventListener('click', (e) => this.toggleDropdown(e));

      const $module = this.targetEl;
      // set aria-hidden correctly for screenreaders (Tringuide responsive)
      const element = this.buttonElement;
      if (window.IntersectionObserver) {
        // trigger event when button changes visibility
        const observer = new IntersectionObserver(
          (entries) => {
            // button is visible
            if (entries[0].intersectionRatio) {
              if (element.getAttribute('aria-expanded') === 'false') {
                $module.setAttribute('aria-hidden', 'true');
              }
            } else {
              // button is not visible
              // eslint-disable-next-line no-lonely-if
              if ($module.getAttribute('aria-hidden') === 'true') {
                $module.setAttribute('aria-hidden', 'false');
              }
            }
          },
          {
            root: document.body,
          },
        );
        observer.observe(element);
      }

      document.removeEventListener('keyup', (e) => this.closeOnEscape(e));
      document.addEventListener('keyup', (e) => this.closeOnEscape(e));
    }
  }

  hide () {
    this.toggle(this.buttonElement);
  }

  show () {
    this.toggle(this.buttonElement);
  }

  closeOnEscape (event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeAll();
    }
  }

  closeAll (event?: Event) {
    let changed = false;

    const overflowMenuEl = document.getElementsByClassName('overflow-menu');
    for (let oi = 0; oi < overflowMenuEl.length; oi += 1) {
      const currentOverflowMenuEL = overflowMenuEl[oi];
      const triggerEl = currentOverflowMenuEL.querySelector(`${this.BUTTON}[aria-expanded="true"]`);
      if (triggerEl) {
        changed = true;
        const targetEl = currentOverflowMenuEL.querySelector(
          `#${triggerEl.getAttribute(this.TARGET)?.replace('#', '')}`,
        );

        if (targetEl) {
          if (this.doResponsiveCollapse(triggerEl)) {
            if (triggerEl.getAttribute('aria-expanded')) {
              const eventClose = new Event('fds.dropdown.close');
              triggerEl.dispatchEvent(eventClose);
            }
            triggerEl.setAttribute('aria-expanded', 'false');
            targetEl.classList.add('collapsed');
            targetEl.setAttribute('aria-hidden', 'true');
          }
        }
      }
    }

    if (changed && event) {
      event.stopImmediatePropagation();
    }
  }

  offset (el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  toggleDropdown (event: Event, forceClose = false) {
    event.stopPropagation();
    event.preventDefault();

    this.toggle(this.buttonElement, forceClose);
  }

  toggle (button: HTMLElement, forceClose = false) {
    const triggerEl = button;
    let targetEl = null;
    if (triggerEl !== null && triggerEl !== undefined) {
      const targetAttr = triggerEl.getAttribute(this.TARGET);
      if (targetAttr !== null && targetAttr !== undefined) {
        targetEl = document.getElementById(targetAttr.replace('#', ''));
      }
    }
    if (triggerEl && targetEl) {
      // change state

      targetEl.style.left = '';
      targetEl.style.right = '';

      if (triggerEl.getAttribute('aria-expanded') === 'true' || forceClose) {
        // close
        triggerEl.setAttribute('aria-expanded', 'false');
        targetEl.classList.add('collapsed');
        targetEl.setAttribute('aria-hidden', 'true');
        const eventClose = new Event('fds.dropdown.close');
        triggerEl.dispatchEvent(eventClose);
      } else {
        if (!document.getElementsByTagName('body')[0].classList.contains('mobile_nav-active')) {
          this.closeAll();
        }
        // open
        triggerEl.setAttribute('aria-expanded', 'true');
        targetEl.classList.remove('collapsed');
        targetEl.setAttribute('aria-hidden', 'false');
        const eventOpen = new Event('fds.dropdown.open');
        triggerEl.dispatchEvent(eventOpen);
        const targetOffset = this.offset(targetEl);

        if (targetOffset.left < 0) {
          targetEl.style.left = '0px';
          targetEl.style.right = 'auto';
        }
        let right = targetOffset.left + targetEl.offsetWidth;
        if (right > window.innerWidth) {
          targetEl.style.left = 'auto';
          targetEl.style.right = '0px';
        }

        const offsetAgain = this.offset(targetEl);

        if (offsetAgain.left < 0) {
          targetEl.style.left = '0px';
          targetEl.style.right = 'auto';
        }
        right = offsetAgain.left + targetEl.offsetWidth;
        if (right > window.innerWidth) {
          targetEl.style.left = 'auto';
          targetEl.style.right = '0px';
        }
      }
    }
  }

  hasParent (child: Element, parentTagName: string): boolean {
    if (child.parentElement?.tagName === parentTagName) {
      return true;
    }
    if (
      parentTagName !== 'BODY'
      && child.parentElement
      && child.parentElement?.tagName !== 'BODY'
    ) {
      return this.hasParent(child.parentElement, parentTagName);
    }
    return false;
  }

  outsideClose (evt: Event) {
    if (!document.getElementsByTagName('body')[0].classList.contains('mobile_nav-active')) {
      if (
        document.querySelector('body.mobile_nav-active') === null
        && !(<Element>evt.target)?.classList.contains('button-menu-close')
      ) {
        const openDropdowns = document.querySelectorAll(`${this.BUTTON}[aria-expanded=true]`);
        for (let i = 0; i < openDropdowns.length; i += 1) {
          const triggerEl = openDropdowns[i];
          let targetEl = null;
          let targetAttr = triggerEl.getAttribute(this.TARGET);
          if (targetAttr !== null && targetAttr !== undefined) {
            if (targetAttr.indexOf('#') !== -1) {
              targetAttr = targetAttr.replace('#', '');
            }
            targetEl = document.getElementById(targetAttr);
          }
          if (
            this.doResponsiveCollapse(triggerEl)
            || (this.hasParent(triggerEl, 'HEADER')
              && !(<Element>evt.target)?.classList.contains('overlay'))
          ) {
            // closes dropdown when clicked outside
            if (evt.target !== triggerEl) {
              // clicked outside trigger, force close
              triggerEl.setAttribute('aria-expanded', 'false');
              this.targetEl.classList.add('collapsed');
              this.targetEl.setAttribute('aria-hidden', 'true');
              const eventClose = new Event('fds.dropdown.close');
              triggerEl.dispatchEvent(eventClose);
            }
          }
        }
      }
    }
  }

  doResponsiveCollapse (triggerEl: Element) {
    if (!triggerEl.classList.contains(this.jsDropdownCollapseModifier)) {
      // not nav overflow menu
      if (
        triggerEl.parentElement?.classList.contains('overflow-menu--md-no-responsive')
        || triggerEl.parentElement?.classList.contains('overflow-menu--lg-no-responsive')
      ) {
        // trinindikator overflow menu
        if (window.innerWidth <= this.getTringuideBreakpoint(triggerEl)) {
          // overflow menu på responsiv tringuide aktiveret
          return true;
        }
      } else {
        // normal overflow menu
        return true;
      }
    }

    return false;
  }

  getTringuideBreakpoint (button: Element) {
    if (button.parentElement?.classList.contains('overflow-menu--lg-no-responsive')) {
      return breakpoints.lg;
    }
    return breakpoints.md;
  }
} // Class end