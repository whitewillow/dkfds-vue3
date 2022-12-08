var R = Object.defineProperty;
var S = (n, e, t) => e in n ? R(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var d = (n, e, t) => (S(n, typeof e != "symbol" ? e + "" : e, t), t);
import { ref as x, inject as O, computed as N } from "vue";
function U(n, e = !1) {
  var l;
  const t = x((l = O("formid", null)) != null ? l : n), o = `fid_${B().replaceAll("-", "")}`;
  return { formid: N(() => {
    var r;
    if (!t.value && !e)
      throw Error("Form id is not set. Did you forget formgroup");
    return (r = t == null ? void 0 : t.value) != null ? r : o;
  }) };
}
function B() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (n) => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)
  );
}
function j(n) {
  const e = RegExp("data:([0-9a-z/.-]+);base64,", "g");
  return e.test(n) ? n.slice(e.lastIndex) : n;
}
function V(n, e = "download") {
  const t = window.URL.createObjectURL(n), o = document.createElement("a");
  o.href = t, o.download = e, o.click(), window.URL.revokeObjectURL(t);
}
function X(n, e) {
  return new Blob([n], { type: e });
}
function z(n) {
  let e = n, t = 0;
  const o = 1024;
  for (; e >= o || -e >= o; )
    e /= o, t += 1;
  return `${(t ? `${e.toFixed(1)} ` : e) + " KMGTPEZY"[t]}B`;
}
function Z(n) {
  return decodeURIComponent(escape(window.atob(n)));
}
function Y(...n) {
  return (e) => {
    const t = n.map((o) => o(e)).filter((o) => o !== null);
    return t && t.length > 0 ? t : [];
  };
}
function D(n) {
  return (e) => e <= n ? null : `Feltet m\xE5 overstige ${n}.`;
}
function J(n) {
  return (e) => e > n ? null : `Feltet m\xE5 ikke v\xE6re mindre end ${n}.`;
}
function Q(n) {
  return (e) => e.length <= n ? null : `Feltet m\xE5 ikke v\xE6re l\xE6ngere end ${n} tegn.`;
}
function F(n) {
  return (e) => e.length >= n ? null : `Feltet m\xE5 ikke v\xE6re kortere end ${n} tegn.`;
}
function K(n, e = "tegn") {
  return (t) => t.length === n ? null : `Feltet skal v\xE6re n\xF8jagtigt ${n} ${e}.`;
}
function _(n) {
  return /^[1-9][0-9]{7}$/.test(n) ? null : "CVR nummer er ikke korrekt angivet";
}
function ee(n) {
  return /((?:(?:31(?:0[13578]|1[02])|(?:30|29)(?:0[13-9]|1[0-2])|(?:0[1-9]|1[0-9]|2[0-8])(?:0[1-9]|1[0-2]))[0-9]{2}|2902(?:[02468][048]|[13579][26])))-?[0-9]{4}/.test(n) ? null : "CPR nummer er ikke korrekt angivet";
}
function te(n) {
  return RegExp(
    /^[AXB][0-9]{2}-[A-Z]{2}-[0-9]{2}-[A-Z]{2}(-[0-9]{2}$|-[0-9]{2}-[A-Z]{2})*$/,
    "g"
  ).test(n.toUpperCase()) ? null : "Sagsnummer ikke korrekt angivet";
}
function oe(n) {
  return n !== null && n.replace(/\s+/g, "").length > 0 ? null : "Feltet m\xE5 ikke v\xE6re tomt.";
}
function ne(n) {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(n) ? null : "Email er ikke korrekt angivet";
}
function ie(n) {
  return n.indexOf(" ") !== -1 ? "Feltet m\xE5 ikke har mellemrum." : null;
}
function se(...n) {
  return n.every((e) => e.trim().length > 0);
}
function re(n) {
  return Array.isArray(n) ? n.some((t) => t.checked === !0) ? null : "Angiv venligst et valg" : "Ukendt indhold";
}
function le(n) {
  const e = n != null ? n : `fid_${B().replaceAll("-", "")}`;
  return x(e);
}
const C = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}, u = class {
  constructor(e) {
    d(this, "buttonElement");
    d(this, "targetEl");
    d(this, "responsiveListCollapseEnabled", !1);
    if (!e)
      throw new Error("Could not find button for overflow menu component.");
    this.buttonElement = e;
    const t = this.buttonElement.getAttribute(u.TARGET);
    if (!t)
      throw new Error(
        `Attribute could not be found on overflow menu component: ${u.TARGET}`
      );
    const o = document.getElementById(t.replace("#", ""));
    if (!o)
      throw new Error("Panel for overflow menu component could not be found.");
    this.targetEl = o;
  }
  init() {
    var e, t, o, i;
    if (this.buttonElement && this.targetEl) {
      (((t = (e = this.buttonElement) == null ? void 0 : e.parentNode) == null ? void 0 : t.classList.contains(
        "overflow-menu--md-no-responsive"
      )) || ((i = (o = this.buttonElement) == null ? void 0 : o.parentNode) == null ? void 0 : i.classList.contains(
        "overflow-menu--lg-no-responsive"
      ))) && (this.responsiveListCollapseEnabled = !0), document.getElementsByTagName("body")[0].removeEventListener("click", this.outsideClose), document.getElementsByTagName("body")[0].addEventListener("click", this.outsideClose), this.buttonElement.removeEventListener("click", (s) => this.toggleDropdown(s)), this.buttonElement.addEventListener("click", (s) => this.toggleDropdown(s));
      const l = this.targetEl, r = this.buttonElement;
      window.IntersectionObserver && new IntersectionObserver(
        (a) => {
          a[0].intersectionRatio ? r.getAttribute("aria-expanded") === "false" && l.setAttribute("aria-hidden", "true") : l.getAttribute("aria-hidden") === "true" && l.setAttribute("aria-hidden", "false");
        },
        {
          root: document.body
        }
      ).observe(r), document.removeEventListener("keyup", (s) => this.closeOnEscape(s)), document.addEventListener("keyup", (s) => this.closeOnEscape(s));
    }
  }
  hide() {
    this.toggle(this.buttonElement);
  }
  show() {
    this.toggle(this.buttonElement);
  }
  closeOnEscape(e) {
    e.key === "Escape" && this.closeAll();
  }
  closeAll(e) {
    var i;
    let t = !1;
    const o = document.getElementsByClassName("overflow-menu");
    for (let l = 0; l < o.length; l += 1) {
      const r = o[l], s = r.querySelector(
        `${u.BUTTONCLASS}[aria-expanded="true"]`
      );
      if (s) {
        t = !0;
        const a = r.querySelector(
          `#${(i = s.getAttribute(u.TARGET)) == null ? void 0 : i.replace("#", "")}`
        );
        if (a && u.doResponsiveCollapse(s)) {
          if (s.getAttribute("aria-expanded")) {
            const c = new Event("fds.dropdown.close");
            s.dispatchEvent(c);
          }
          s.setAttribute("aria-expanded", "false"), a.classList.add("collapsed"), a.setAttribute("aria-hidden", "true");
        }
      }
    }
    t && e && e.stopImmediatePropagation();
  }
  offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop;
    return { top: t.top + i, left: t.left + o };
  }
  toggleDropdown(e, t = !1) {
    e.stopPropagation(), e.preventDefault(), this.toggle(this.buttonElement, t);
  }
  toggle(e, t = !1) {
    const o = e;
    let i = null;
    if (o != null) {
      const l = o.getAttribute(u.TARGET);
      l != null && (i = document.getElementById(l.replace("#", "")));
    }
    if (o && i)
      if (i.style.left = "", i.style.right = "", o.getAttribute("aria-expanded") === "true" || t) {
        o.setAttribute("aria-expanded", "false"), i.classList.add("collapsed"), i.setAttribute("aria-hidden", "true");
        const l = new Event("fds.dropdown.close");
        o.dispatchEvent(l);
      } else {
        document.getElementsByTagName("body")[0].classList.contains("mobile_nav-active") || this.closeAll(), o.setAttribute("aria-expanded", "true"), i.classList.remove("collapsed"), i.setAttribute("aria-hidden", "false");
        const l = new Event("fds.dropdown.open");
        o.dispatchEvent(l);
        const r = this.offset(i);
        r.left < 0 && (i.style.left = "0px", i.style.right = "auto");
        let s = r.left + i.offsetWidth;
        s > window.innerWidth && (i.style.left = "auto", i.style.right = "0px");
        const a = this.offset(i);
        a.left < 0 && (i.style.left = "0px", i.style.right = "auto"), s = a.left + i.offsetWidth, s > window.innerWidth && (i.style.left = "auto", i.style.right = "0px");
      }
  }
  hasParent(e, t) {
    var o, i;
    return ((o = e.parentElement) == null ? void 0 : o.tagName) === t ? !0 : t !== "BODY" && e.parentElement && ((i = e.parentElement) == null ? void 0 : i.tagName) !== "BODY" ? this.hasParent(e.parentElement, t) : !1;
  }
  outsideClose(e) {
    var t, o;
    if (!document.getElementsByTagName("body")[0].classList.contains("mobile_nav-active") && document.querySelector("body.mobile_nav-active") === null && !((t = e.target) != null && t.classList.contains("button-menu-close"))) {
      const i = document.querySelectorAll(
        `${u.BUTTONCLASS}[aria-expanded=true]`
      );
      for (let l = 0; l < i.length; l += 1) {
        const r = i[l];
        let s = null, a = r.getAttribute(u.TARGET);
        if (a && (a.indexOf("#") !== -1 && (a = a.replace("#", "")), s = document.getElementById(a)), (u.doResponsiveCollapse(r) || this.hasParent(r, "HEADER") && !((o = e.target) != null && o.classList.contains("overlay"))) && e.target !== r) {
          r.setAttribute("aria-expanded", "false"), s == null || s.classList.add("collapsed"), s == null || s.setAttribute("aria-hidden", "true");
          const c = new Event("fds.dropdown.close");
          r.dispatchEvent(c);
        }
      }
    }
  }
  static doResponsiveCollapse(e) {
    var t, o;
    if (!e.classList.contains(u.jsDropdownCollapseModifier))
      if (((t = e.parentElement) == null ? void 0 : t.classList.contains("overflow-menu--md-no-responsive")) || ((o = e.parentElement) == null ? void 0 : o.classList.contains("overflow-menu--lg-no-responsive"))) {
        if (window.innerWidth <= u.getTringuideBreakpoint(e))
          return !0;
      } else
        return !0;
    return !1;
  }
  static getTringuideBreakpoint(e) {
    var t;
    return (t = e.parentElement) != null && t.classList.contains("overflow-menu--lg-no-responsive") ? C.lg : C.md;
  }
};
let g = u;
d(g, "BUTTONCLASS", ".button-overflow-menu"), d(g, "jsDropdownCollapseModifier", "js-dropdown--responsive-collapse"), d(g, "TARGET", "data-js-target");
const T = ".nav", $ = `${T} a`, k = ".js-menu-open", L = ".js-menu-close", I = ".overlay", P = `${L}, .overlay`, G = [T, I].join(", "), A = "mobile_nav-active", q = "is-visible";
let w;
const f = class {
  static focusTrapInit(e) {
    console.warn("focusTrapInit", e);
    const t = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', o = e.querySelectorAll(t), [i] = o;
    function l(r) {
      const { key: s } = r;
      if (s === "Tab") {
        let a = null;
        for (let c = 0; c < o.length; c += 1) {
          const h = o.length - 1, m = o[h - c];
          if (m.offsetWidth > 0 && m.offsetHeight > 0) {
            a = m;
            break;
          }
        }
        r.shiftKey ? document.activeElement === i && (r.preventDefault(), a == null || a.focus()) : document.activeElement === a && (r.preventDefault(), i.focus());
      }
      r.key === "Escape" && f.toggleNav(!1);
    }
    return {
      enable() {
        i.focus(), document.addEventListener("keydown", l);
      },
      release() {
        document.removeEventListener("keydown", l);
      }
    };
  }
  static toggleNav(e) {
    const { body: t } = document;
    console.warn("incActive", e);
    const o = typeof e == "boolean" ? e : !f.isActive();
    t.classList.toggle(A, o), console.warn("toggleNav", A, o), f.selectStuff(G).forEach((r) => r.classList.toggle(q, o)), o ? w.enable() : w.release();
    const i = t.querySelector(L), l = t.querySelector(k);
    return o && i ? i.focus() : !o && document.activeElement === i && l && l.focus(), o;
  }
  mobileMenu() {
    let e = !1;
    const t = document.querySelectorAll(k);
    for (let i = 0; i < t.length; i += 1)
      window.getComputedStyle(t[i], null).display !== "none" && (t[i].addEventListener("click", f.toggleNav), e = !0);
    if (e) {
      const i = document.querySelectorAll(P);
      for (let s = 0; s < i.length; s += 1)
        i[s].addEventListener("click", f.toggleNav);
      const l = document.querySelectorAll($);
      l.forEach((s, a) => {
        l[a].addEventListener("click", () => {
          f.isActive() && f.toggleNav(!1);
        });
      });
      const r = document.querySelectorAll(T);
      for (let s = 0; s < r.length; s += 1)
        w = f.focusTrapInit(r[s]);
    }
    const o = document.body.querySelector(L);
    f.isActive() && o && o.getBoundingClientRect().width === 0 && f.toggleNav.call(o, !1);
  }
  init() {
    window.addEventListener("resize", this.mobileMenu, !1), this.mobileMenu();
  }
  teardown() {
    window.removeEventListener("resize", this.mobileMenu, !1);
  }
};
let v = f;
d(v, "selectStuff", (e) => [...window.document.querySelectorAll(e)]), d(v, "isActive", () => document.body.classList.contains(A));
class ae {
  constructor(e) {
    d(this, "TOGGLE_ATTRIBUTE", "data-controls");
    d(this, "radioGroup");
    d(this, "radioEls");
    if (!e)
      throw new Error("Could not find panel element. Verify value of attribute");
    this.radioGroup = e, this.radioEls = [
      ...this.radioGroup.querySelectorAll('input[type="radio"]')
    ], this.init();
  }
  init() {
    if (this.radioEls.length === 0)
      throw new Error("No radiobuttons found in radiobutton group.");
    this.radioEls.forEach((e) => {
      e.addEventListener("change", () => {
        for (let t = 0; t < this.radioEls.length; t += 1)
          this.toggle(this.radioEls[t]);
      }), this.toggle(e);
    });
  }
  toggle(e) {
    const t = e.getAttribute(this.TOGGLE_ATTRIBUTE);
    if (t != null && t !== "") {
      const o = document.querySelector(t);
      if (o == null)
        throw new Error(
          `Could not find panel element. Verify value of attribute ${this.TOGGLE_ATTRIBUTE}`
        );
      e.checked ? this.expand(e, o) : this.collapse(e, o);
    }
  }
  expand(e, t) {
    if (e != null && t !== null && t !== void 0) {
      e.setAttribute("data-expanded", "true"), t.setAttribute("aria-hidden", "false");
      const o = new Event("fds.radio.expanded");
      e.dispatchEvent(o);
    }
  }
  collapse(e, t) {
    if (e != null && t !== null && t !== void 0) {
      e.setAttribute("data-expanded", "false"), t.setAttribute("aria-hidden", "true");
      const o = new Event("fds.radio.collapsed");
      e.dispatchEvent(o);
    }
  }
}
class p {
  constructor(e) {
    d(this, "element");
    if (!e)
      throw new Error("Tooltip newElement is missing.");
    if (this.element = e, this.element.getAttribute("data-tooltip") === null)
      throw new Error(
        "Tooltip text is missing. Add attribute data-tooltip and the content of the tooltip as value."
      );
  }
  init() {
    this.element.addEventListener("mouseenter", (e) => {
      const t = e.target;
      t.classList.contains("tooltip-hover") === !1 && t.classList.contains("tooltip-focus") === !1 && (this.closeAllTooltips(e), t.classList.add("tooltip-hover"), setTimeout(() => {
        if (t.classList.contains("tooltip-hover")) {
          const o = e.target;
          if (o.getAttribute("aria-describedby") !== null)
            return;
          this.addTooltip(o);
        }
      }, 300));
    }), this.element.addEventListener("mouseleave", (e) => {
      const t = e.target;
      if (t.classList.contains("tooltip-hover")) {
        t.classList.remove("tooltip-hover");
        const o = t.getAttribute("aria-describedby");
        if (!o)
          return;
        document.getElementById(o) !== null && p.closeHoverTooltip(t);
      }
    }), this.element.addEventListener("keyup", (e) => {
      const t = e.target;
      if (e.key === "Escape") {
        const o = t.getAttribute("aria-describedby");
        if (!o)
          return;
        const i = document.getElementById(o);
        o && i && document.body.removeChild(i), t.classList.remove("active"), t.removeAttribute("aria-describedby");
      }
    }), this.element.getAttribute("data-tooltip-trigger") === "click" && this.element.addEventListener("click", (e) => {
      const t = e.target;
      this.closeAllTooltips(e), t.classList.add("tooltip-focus"), t.classList.remove("tooltip-hover"), t.getAttribute("aria-describedby") === null && this.addTooltip(t);
    }), document.getElementsByTagName("body")[0].removeEventListener("click", this.closeAllTooltips), document.getElementsByTagName("body")[0].addEventListener("click", this.closeAllTooltips);
  }
  closeAll() {
    const e = document.querySelectorAll(".js-tooltip[aria-describedby]");
    for (let t = 0; t < e.length; t += 1) {
      const o = e[t].getAttribute("aria-describedby");
      if (!o)
        return;
      e[t].removeAttribute("aria-describedby"), document.body.removeChild(document.getElementById(o));
    }
  }
  addTooltip(e) {
    const t = e.getAttribute("data-tooltip-position") || "top", o = this.createTooltip(e, t);
    document.body.appendChild(o), this.positionAt(e, o, t);
  }
  createTooltip(e, t) {
    var c;
    const o = document.createElement("div");
    o.className = "tooltip-popper";
    const l = `tooltip-${document.getElementsByClassName("tooltip-popper").length + 1}`;
    o.setAttribute("id", l), o.setAttribute("role", "tooltip"), o.setAttribute("x-placement", t), e.setAttribute("aria-describedby", l);
    const r = document.createElement("div");
    r.className = "tooltip";
    const s = document.createElement("div");
    s.className = "tooltip-arrow", r.appendChild(s);
    const a = document.createElement("div");
    return a.className = "tooltip-content", a.innerHTML = (c = e.getAttribute("data-tooltip")) != null ? c : "", r.appendChild(a), o.appendChild(r), o;
  }
  positionAt(e, t, o) {
    const i = e, l = e.getBoundingClientRect(), r = e.getBoundingClientRect(), s = 12;
    let a, c = r.top - t.offsetHeight - s;
    const h = t.offsetWidth;
    let m = "down";
    if (a = r.left + (e.offsetWidth - t.offsetWidth) / 2, o === "bottom" && (c = r.bottom + s, m = "up"), a < 0) {
      a = s;
      const b = l.left + i.offsetWidth / 2, E = 8, y = b - s - E;
      t.getElementsByClassName("tooltip-arrow")[0].style.left = `${y}px`;
    }
    if (c + t.offsetHeight >= window.innerHeight && (c = r.top - t.offsetHeight - s, m = "down"), c < 0 && (c = r.bottom + s, m = "up"), window.innerWidth < a + h) {
      t.style.right = `${s}px`;
      const b = l.right - i.offsetWidth / 2, E = 8, y = window.innerWidth - b - s - E;
      t.getElementsByClassName("tooltip-arrow")[0].style.right = `${y}px`, t.getElementsByClassName("tooltip-arrow")[0].style.left = "auto";
    } else
      t.style.left = `${a}px`;
    t.style.top = `${c + pageYOffset}px`, t.getElementsByClassName("tooltip-arrow")[0].classList.add(m);
  }
  closeAllTooltips(e, t = !1) {
    var i, l;
    const o = (l = (i = e.target) == null ? void 0 : i.classList) != null ? l : new DOMTokenList();
    if (t || !o.contains("js-tooltip") && !o.contains("tooltip") && !o.contains("tooltip-content")) {
      const r = document.querySelectorAll(".tooltip-popper");
      for (let s = 0; s < r.length; s += 1) {
        const a = document.querySelector(
          `[aria-describedby=${r[s].getAttribute("id")}]`
        );
        if (!a)
          return;
        a.removeAttribute("data-tooltip-active"), a.removeAttribute("aria-describedby"), a.classList.remove("tooltip-focus"), a.classList.remove("tooltip-hover"), document.body.removeChild(r[s]);
      }
    }
  }
  static onTooltipHover(e) {
    const t = e.target, o = document.querySelector(
      `[aria-describedby=${t.getAttribute("id")}]`
    );
    !o || (o.classList.add("tooltip-hover"), t.addEventListener("mouseleave", () => {
      const i = document.querySelector(
        `[aria-describedby=${t.getAttribute("id")}]`
      );
      i !== null && (i.classList.remove("tooltip-hover"), p.closeHoverTooltip(i));
    }));
  }
  static closeHoverTooltip(e) {
    const t = e.getAttribute("aria-describedby");
    if (!t)
      return;
    const o = document.getElementById(t);
    !o || (o.removeEventListener("mouseenter", p.onTooltipHover), o.addEventListener("mouseenter", p.onTooltipHover), setTimeout(() => {
      document.getElementById(t) !== null && (e.classList.contains("tooltip-hover") || p.removeTooltip(e));
    }, 300));
  }
  static removeTooltip(e) {
    const t = e.getAttribute("aria-describedby");
    if (!t)
      return;
    const o = document.getElementById(t);
    t !== null && o !== null && document.body.removeChild(o), e.removeAttribute("aria-describedby"), e.classList.remove("tooltip-hover"), e.classList.remove("tooltip-focus");
  }
}
var M = /* @__PURE__ */ ((n) => (n.primary = "primary", n.secondary = "secondary", n.tertiary = "tertiary", n.quaternary = "quaternary", n.info = "info", n.success = "success", n.warning = "warning", n.error = "error", n))(M || {});
export {
  M as FdsVariantEnum,
  re as arrayHasItems,
  Z as base64Decode,
  C as breakpoints,
  K as charactersEqualsLength,
  Q as charactersMaxLength,
  F as charactersMinLength,
  V as downloadBlob,
  g as dropdown,
  U as formId,
  le as generateId,
  oe as hasContent,
  v as navigation,
  ie as noSpace,
  se as notEmpty,
  D as numberMax,
  J as numberMin,
  ae as radioToggleContent,
  z as readableFileSize,
  j as removeBrowserFileContentHeaders,
  p as tooltip,
  X as updateBlobType,
  B as uuid,
  ee as validCPR,
  _ as validCVR,
  ne as validEmail,
  te as validSagsnummer,
  Y as validateAllErrorMessage
};
