/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
const clickOutside = {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: any) => {
      if (el.ariaHidden && el !== event.target) {
        console.log('ariaHidden', el.ariaHidden, event.target);
        return;
      }
      // here I check that click was outside the el and his children
      console.log('outsude', el, event.target);
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el: any) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};
export default clickOutside;