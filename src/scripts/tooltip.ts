/* eslint-disable no-param-reassign */

/**
 * Set tooltip on element
 * @param {HTMLElement} element Element which has tooltip
 */
export default class DKFSTooltip {
  element: HTMLElement;

  constructor (newElement: HTMLElement | undefined | null) {
    if (!newElement) {
      throw new Error('Tooltip newElement is missing.');
    }
    this.element = newElement;
    if (this.element.getAttribute('data-tooltip') === null) {
      throw new Error(
        'Tooltip text is missing. Add attribute data-tooltip and the content of the tooltip as value.',
      );
    }
  }

  init () {
    this.element.addEventListener('mouseenter', (e) => {
      const trigger = e.target as HTMLElement;
      if (
        trigger.classList.contains('tooltip-hover') === false
        && trigger.classList.contains('tooltip-focus') === false
      ) {
        this.closeAllTooltips(e);
        trigger.classList.add('tooltip-hover');
        setTimeout(() => {
          if (trigger.classList.contains('tooltip-hover')) {
            const elementTarget = e.target as HTMLElement;

            if (elementTarget.getAttribute('aria-describedby') !== null) return;
            this.addTooltip(elementTarget);
          }
        }, 300);
      }
    });

    this.element.addEventListener('mouseleave', (e) => {
      const trigger = e.target as HTMLElement;
      if (trigger.classList.contains('tooltip-hover')) {
        trigger.classList.remove('tooltip-hover');
        const tooltipId = trigger.getAttribute('aria-describedby');
        if (!tooltipId) {
          return; // new
        }
        const tooltipElement = document.getElementById(tooltipId);
        if (tooltipElement !== null) {
          DKFSTooltip.closeHoverTooltip(trigger);
        }
      }
    });

    this.element.addEventListener('keyup', (e) => {
      const trigger = e.target as HTMLElement;
      if (e.key === 'Escape') {
        const tooltip = trigger.getAttribute('aria-describedby');
        if (!tooltip) {
          return;
        }
        const elementTooltip = document.getElementById(tooltip);
        if (tooltip && elementTooltip) {
          document.body.removeChild(elementTooltip);
        }
        trigger.classList.remove('active');
        trigger.removeAttribute('aria-describedby');
      }
    });

    if (this.element.getAttribute('data-tooltip-trigger') === 'click') {
      this.element.addEventListener('click', (e) => {
        const trigger = e.target as HTMLElement;
        this.closeAllTooltips(e);
        trigger.classList.add('tooltip-focus');
        trigger.classList.remove('tooltip-hover');
        if (trigger.getAttribute('aria-describedby') !== null) {
          return;
        }
        this.addTooltip(trigger);
      });
    }

    document.getElementsByTagName('body')[0].removeEventListener('click', this.closeAllTooltips);
    document.getElementsByTagName('body')[0].addEventListener('click', this.closeAllTooltips);
  }

  /**
   * Close all tooltips
   */
  closeAll () {
    const elements = document.querySelectorAll('.js-tooltip[aria-describedby]');
    for (let i = 0; i < elements.length; i += 1) {
      const popper = elements[i].getAttribute('aria-describedby');
      if (!popper) {
        return;
      }
      elements[i].removeAttribute('aria-describedby');
      document.body.removeChild(document.getElementById(popper) as Node);
    }
  }

  addTooltip (trigger: HTMLElement) {
    const pos = trigger.getAttribute('data-tooltip-position') || 'top';

    const tooltip = this.createTooltip(trigger, pos);

    document.body.appendChild(tooltip);

    this.positionAt(trigger, tooltip, pos);
  }

  /**
   * Create tooltip element
   * @param {HTMLElement} element Element which the tooltip is attached
   * @param {string} pos Position of tooltip (top | bottom)
   * @returns
   */
  createTooltip (element: HTMLElement, pos: string): HTMLDivElement {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-popper';
    const poppers = document.getElementsByClassName('tooltip-popper');
    const id = `tooltip-${poppers.length + 1}`;
    tooltip.setAttribute('id', id);
    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('x-placement', pos);
    element.setAttribute('aria-describedby', id);

    const tooltipInner = document.createElement('div');
    tooltipInner.className = 'tooltip';

    const tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'tooltip-arrow';
    tooltipInner.appendChild(tooltipArrow);

    const tooltipContent = document.createElement('div');
    tooltipContent.className = 'tooltip-content';
    tooltipContent.innerHTML = element.getAttribute('data-tooltip') ?? '';
    tooltipInner.appendChild(tooltipContent);
    tooltip.appendChild(tooltipInner);

    return tooltip;
  }

  /**
   * Positions the tooltip.
   *
   * @param {object} parent - The trigger of the tooltip.
   * @param {object} tooltip - The tooltip itself.
   * @param {string} posHorizontal - Desired horizontal position of the
   * tooltip relatively to the trigger (left/center/right)
   * @param {string} posVertical - Desired vertical position of the
   * tooltip relatively to the trigger (top/center/bottom)
   *
   */
  positionAt (parent: HTMLElement, tooltip: HTMLDivElement, pos: string) {
    const trigger = parent;
    const triggerPosition = parent.getBoundingClientRect();

    const parentCoords = parent.getBoundingClientRect();
    const dist = 12;

    let left;
    let top = parentCoords.top - tooltip.offsetHeight - dist;

    const tooltipWidth = tooltip.offsetWidth;

    let arrowDirection = 'down';
    left = parentCoords.left + (parent.offsetWidth - tooltip.offsetWidth) / 2;

    if (pos === 'bottom') {
      top = parentCoords.bottom + dist;
      arrowDirection = 'up';
    }

    // if tooltip is out of bounds on left side
    if (left < 0) {
      left = dist;
      const endPositionOnPage = triggerPosition.left + trigger.offsetWidth / 2;
      const tooltipArrowHalfWidth = 8;
      const arrowLeftPosition = endPositionOnPage - dist - tooltipArrowHalfWidth;
      (
        tooltip.getElementsByClassName('tooltip-arrow')[0] as HTMLElement
      ).style.left = `${arrowLeftPosition}px`;
    }

    // if tooltip is out of bounds on the bottom of the page
    if (top + tooltip.offsetHeight >= window.innerHeight) {
      top = parentCoords.top - tooltip.offsetHeight - dist;
      arrowDirection = 'down';
    }

    // if tooltip is out of bounds on the top of the page
    if (top < 0) {
      top = parentCoords.bottom + dist;
      arrowDirection = 'up';
    }

    if (window.innerWidth < left + tooltipWidth) {
      // eslint-disable-next-line no-param-reassign
      tooltip.style.right = `${dist}px`;
      const endPositionOnPage = triggerPosition.right - trigger.offsetWidth / 2;
      const tooltipArrowHalfWidth = 8;
      // eslint-disable-next-line max-len
      const arrowRightPosition = window.innerWidth - endPositionOnPage - dist - tooltipArrowHalfWidth;
      // eslint-disable-next-line no-param-reassign
      (
        tooltip.getElementsByClassName('tooltip-arrow')[0] as HTMLElement
      ).style.right = `${arrowRightPosition}px`;
      // eslint-disable-next-line no-param-reassign
      (tooltip.getElementsByClassName('tooltip-arrow')[0] as HTMLElement).style.left = 'auto';
    } else {
      // eslint-disable-next-line no-param-reassign
      tooltip.style.left = `${left}px`;
    }
    // eslint-disable-next-line no-param-reassign, no-restricted-globals
    tooltip.style.top = `${top + pageYOffset}px`;
    tooltip.getElementsByClassName('tooltip-arrow')[0].classList.add(arrowDirection);
  }

  closeAllTooltips (event: Event, force = false) {
    const targetClassList = (event.target as HTMLElement)?.classList ?? new DOMTokenList();
    if (
      force
      || (!targetClassList.contains('js-tooltip')
        && !targetClassList.contains('tooltip')
        && !targetClassList.contains('tooltip-content'))
    ) {
      const elements = document.querySelectorAll('.tooltip-popper');
      for (let i = 0; i < elements.length; i += 1) {
        const trigger = document.querySelector(
          `[aria-describedby=${elements[i].getAttribute('id')}]`,
        );
        if (!trigger) {
          return;
        }
        trigger.removeAttribute('data-tooltip-active');
        trigger.removeAttribute('aria-describedby');
        trigger.classList.remove('tooltip-focus');
        trigger.classList.remove('tooltip-hover');
        document.body.removeChild(elements[i]);
      }
    }
  }

  static onTooltipHover (e: Event) {
    const tooltipElement = e.target as HTMLElement;

    const trigger = document.querySelector(
      `[aria-describedby=${tooltipElement.getAttribute('id')}]`,
    );
    if (!trigger) {
      return;
    }
    trigger.classList.add('tooltip-hover');

    tooltipElement.addEventListener('mouseleave', () => {
      const triggerInner = document.querySelector(
        `[aria-describedby=${tooltipElement.getAttribute('id')}]`,
      ) as HTMLElement;
      if (triggerInner !== null) {
        triggerInner.classList.remove('tooltip-hover');
        DKFSTooltip.closeHoverTooltip(triggerInner);
      }
    });
  }

  static closeHoverTooltip (trigger: HTMLElement) {
    const tooltipId = trigger.getAttribute('aria-describedby');
    if (!tooltipId) {
      return;
    }
    const tooltipElement = document.getElementById(tooltipId);
    if (!tooltipElement) {
      return;
    }
    tooltipElement.removeEventListener('mouseenter', DKFSTooltip.onTooltipHover);
    tooltipElement.addEventListener('mouseenter', DKFSTooltip.onTooltipHover);
    setTimeout(() => {
      const tooltipElementInner = document.getElementById(tooltipId);
      if (tooltipElementInner !== null) {
        if (!trigger.classList.contains('tooltip-hover')) {
          DKFSTooltip.removeTooltip(trigger);
        }
      }
    }, 300);
  }

  static removeTooltip (trigger: HTMLElement) {
    const tooltipId = trigger.getAttribute('aria-describedby');
    if (!tooltipId) {
      return;
    }
    const tooltipElement = document.getElementById(tooltipId);

    if (tooltipId !== null && tooltipElement !== null) {
      document.body.removeChild(tooltipElement);
    }
    trigger.removeAttribute('aria-describedby');
    trigger.classList.remove('tooltip-hover');
    trigger.classList.remove('tooltip-focus');
  }
} // Class end