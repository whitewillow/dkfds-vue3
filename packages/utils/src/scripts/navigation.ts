const NAV = '.nav';
const NAV_LINKS = `${NAV} a`;
const OPENERS = '.js-menu-open';
const CLOSE_BUTTON = '.js-menu-close';
const OVERLAY = '.overlay';
const CLOSERS = `${CLOSE_BUTTON}, .overlay`;
const TOGGLES = [NAV, OVERLAY].join(', ');

const ACTIVE_CLASS = 'mobile_nav-active';
const VISIBLE_CLASS = 'is-visible';
let focusTrap: {
  enable(): void;
  release(): void;
};
/**
 * Add mobile menu functionality
 */
class Navigation {
  static selectStuff = (selector: string) => {
    const sel = window.document.querySelectorAll(selector);
    return [...(sel as unknown as any[])];
  };

  /**
   * Check if mobile menu is active
   * @returns true if mobile menu is active and false if not active
   */
  static isActive = () => document.body.classList.contains(ACTIVE_CLASS);

  /**
   * Trap focus in mobile menu if active
   * @param {HTMLElement} trapContainer
   */
  static focusTrapInit(trapContainer: HTMLElement) {
    console.warn('focusTrapInit', trapContainer);

    // Find all focusable children
    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const focusableElements = trapContainer.querySelectorAll<HTMLElement>(focusableElementsString);
    const [firstTabStop] = focusableElements as unknown as any[];

    function trapTabKey(e: KeyboardEvent) {
      const { key } = e;
      // Check for TAB key press
      if (key === 'Tab') {
        let lastTabStop = null;
        for (let i = 0; i < focusableElements.length; i += 1) {
          const number = focusableElements.length - 1;
          const element = focusableElements[number - i];
          if (element.offsetWidth > 0 && element.offsetHeight > 0) {
            lastTabStop = element;
            break;
          }
        }

        // SHIFT + TAB
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop?.focus();
          }

          // TAB
        } else if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }

      // ESCAPE
      if (e.key === 'Escape') {
        // toggleNav.call(e, false);
        Navigation.toggleNav(false);
      }
    }

    return {
      enable() {
        // Focus first child
        firstTabStop.focus();
        // Listen for and trap the keyboard
        document.addEventListener('keydown', trapTabKey);
      },

      release() {
        document.removeEventListener('keydown', trapTabKey);
      },
    };
  }

  static toggleNav(incActive: boolean | Event) {
    const { body } = document;
    console.warn('incActive', incActive);

    const active: boolean = typeof incActive === 'boolean' ? incActive : !Navigation.isActive();

    body.classList.toggle(ACTIVE_CLASS, active);
    console.warn('toggleNav', ACTIVE_CLASS, active);

    Navigation.selectStuff(TOGGLES).forEach((el) => el.classList.toggle(VISIBLE_CLASS, active));

    if (active) {
      focusTrap.enable();
    } else {
      focusTrap.release();
    }

    const closeButton = body.querySelector<HTMLElement>(CLOSE_BUTTON);
    const menuButton = body.querySelector<HTMLElement>(OPENERS);

    if (active && closeButton) {
      // The mobile nav was just activated, so focus on the close button,
      // which is just before all the nav elements in the tab order.
      closeButton.focus();
    } else if (!active && document.activeElement === closeButton && menuButton) {
      // The mobile nav was just deactivated, and focus was on the close
      // button, which is no longer visible. We don't want the focus to
      // disappear into the void, so focus on the menu button if it's
      // visible (this may have been what the user was just focused on,
      // if they triggered the mobile nav by mistake).
      menuButton.focus();
    }

    return active;
  }

  /**
   * Add functionality to mobile menu
   */
  mobileMenu() {
    let mobile = false;
    const openers = document.querySelectorAll<HTMLElement>(OPENERS);
    for (let o = 0; o < openers.length; o += 1) {
      if (window.getComputedStyle(openers[o], null).display !== 'none') {
        openers[o].addEventListener('click', Navigation.toggleNav);
        mobile = true;
      }
    }

    // if mobile
    if (mobile) {
      const closers = document.querySelectorAll<HTMLElement>(CLOSERS);
      for (let c = 0; c < closers.length; c += 1) {
        closers[c].addEventListener('click', Navigation.toggleNav);
      }

      const navLinks = document.querySelectorAll(NAV_LINKS);
      navLinks.forEach((nav, i) => {
        navLinks[i].addEventListener('click', () => {
          // A navigation link has been clicked! We want to collapse any
          // hierarchical navigation UI it's a part of, so that the user
          // can focus on whatever they've just selected.

          // Some navigation links are inside dropdowns; when they're
          // clicked, we want to collapse those dropdowns.

          // If the mobile navigation menu is active, we want to hide it.
          if (Navigation.isActive()) {
            Navigation.toggleNav(false);
          }
        });
      });

      const trapContainers = document.querySelectorAll<HTMLElement>(NAV);
      for (let i = 0; i < trapContainers.length; i += 1) {
        focusTrap = Navigation.focusTrapInit(trapContainers[i]);
      }
    }

    const closer = document.body.querySelector(CLOSE_BUTTON);

    if (Navigation.isActive() && closer && closer.getBoundingClientRect().width === 0) {
      // The mobile nav is active, but the close box isn't visible, which
      // means the user's viewport has been resized so that it is no longer
      // in mobile mode. Let's make the page state consistent by
      // deactivating the mobile nav.
      Navigation.toggleNav.call(closer, false);
    }
  }

  /**
   * Set events
   */
  init() {
    window.addEventListener('resize', this.mobileMenu, false);
    this.mobileMenu();
  }

  /**
   * Remove events
   */
  teardown() {
    window.removeEventListener('resize', this.mobileMenu, false);
  }
}

export default Navigation;
