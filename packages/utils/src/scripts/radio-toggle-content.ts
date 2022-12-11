export default class DKFDSToggle {
  TOGGLE_ATTRIBUTE = "data-controls";

  radioGroup: HTMLElement;

  radioEls: Array<HTMLInputElement>;

  /**
   * Adds click functionality to radiobutton collapse list
   * @param {HTMLElement} containerElement
   */
  constructor(containerElement: HTMLElement | null) {
    if (!containerElement) {
      throw new Error("Could not find panel element. Verify value of attribute");
    }
    this.radioGroup = containerElement;
    this.radioEls = [
      ...(this.radioGroup.querySelectorAll<HTMLInputElement>('input[type="radio"]') as any),
    ];
    this.init();
  }

  /**
   * Set events
   */
  init() {
    if (this.radioEls.length === 0) {
      throw new Error("No radiobuttons found in radiobutton group.");
    }

    this.radioEls.forEach((radio) => {
      radio.addEventListener("change", () => {
        for (let a = 0; a < this.radioEls.length; a += 1) {
          this.toggle(this.radioEls[a]);
        }
      });
      this.toggle(radio);
    });
  }

  /**
   * Toggle radiobutton content
   * @param {HTMLInputElement} radioInputElement
   */
  toggle(radioInputElement: HTMLInputElement) {
    const contentId = radioInputElement.getAttribute(this.TOGGLE_ATTRIBUTE);
    if (contentId !== null && contentId !== undefined && contentId !== "") {
      const contentElement = document.querySelector<HTMLElement>(contentId);
      if (contentElement === null || contentElement === undefined) {
        throw new Error(
          `Could not find panel element. Verify value of attribute ${this.TOGGLE_ATTRIBUTE}`
        );
      }
      if (radioInputElement.checked) {
        this.expand(radioInputElement, contentElement);
      } else {
        this.collapse(radioInputElement, contentElement);
      }
    }
  }

  /**
   * Expand radio button content
   * @param {} radioInputElement Radio Input element
   * @param {*} contentElement Content element
   */
  expand(radioInputElement: HTMLInputElement, contentElement: HTMLElement) {
    if (
      radioInputElement !== null &&
      radioInputElement !== undefined &&
      contentElement !== null &&
      contentElement !== undefined
    ) {
      radioInputElement.setAttribute("data-expanded", "true");
      contentElement.setAttribute("aria-hidden", "false");
      const eventOpen = new Event("fds.radio.expanded");
      radioInputElement.dispatchEvent(eventOpen);
    }
  }

  /**
   * Collapse radio button content
   * @param {} radioInputElement Radio Input element
   * @param {*} contentElement Content element
   */
  collapse(radioInputElement: HTMLInputElement, contentElement: HTMLElement) {
    if (
      radioInputElement !== null &&
      radioInputElement !== undefined &&
      contentElement !== null &&
      contentElement !== undefined
    ) {
      radioInputElement.setAttribute("data-expanded", "false");
      contentElement.setAttribute("aria-hidden", "true");
      const eventClose = new Event("fds.radio.collapsed");
      radioInputElement.dispatchEvent(eventClose);
    }
  }
} // Class end
