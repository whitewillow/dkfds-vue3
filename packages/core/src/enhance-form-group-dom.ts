export function enhanceFormGroupDOM(formFieldElement: HTMLElement, isControlValid : boolean): void {
  const controlElement = formFieldElement.querySelector(".form-input");
  console.log("control", controlElement);
  controlElement.id = controlElement.id || window.crypto.randomUUID();
  controlElement.setAttribute("aria-invalid", String(!isControlValid));

  const labelElement = formFieldElement.querySelector(".form-label");
  console.log("label", labelElement);
  labelElement.setAttribute("for", controlElement.id);

  const hintElement = formFieldElement.querySelector(".form-hint");
  console.log("hint", hintElement);
  if (hintElement) {
    hintElement.id = hintElement.id || window.crypto.randomUUID();
    controlElement.setAttribute("aria-describedby", hintElement.id);
    //TODO append til describedby istedet, med mindre den allerede er der
  }

  const errorMessageElement = formFieldElement.querySelector(".form-error-message");
  console.log("error message", errorMessageElement);
  if (errorMessageElement) {
    errorMessageElement.id = errorMessageElement.id || window.crypto.randomUUID();
    controlElement.setAttribute("aria-errormessage", errorMessageElement.id);
    //TODO append til errormessage istedet, med mindre den allerede er der
    errorMessageElement.setAttribute("aria-live", "polite");
    errorMessageElement.setAttribute("aria-atomic", "true");
  }

  //TODO enhance tooltip
  //TODO enhange prefix
  //TODO enhange suffix
  //TODO enhange search-button
  //TODO enhance input-limit
}
