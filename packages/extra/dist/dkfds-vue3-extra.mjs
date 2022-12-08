var ae = Object.defineProperty;
var se = (e, l, t) => l in e ? ae(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
var N = (e, l, t) => (se(e, typeof l != "symbol" ? l + "" : l, t), t);
import { ref as g, inject as G, computed as M, defineComponent as S, openBlock as u, createElementBlock as f, Fragment as E, createElementVNode as y, normalizeClass as D, createCommentVNode as V, renderSlot as w, toDisplayString as b, unref as v, renderList as B, withDirectives as te, vModelCheckbox as le, mergeProps as X, resolveComponent as _, createBlock as x, withCtx as k, createTextVNode as $, pushScopeId as ie, popScopeId as re, watch as T, normalizeProps as j, guardReactiveProps as U, useAttrs as P, createVNode as R, createSlots as de, onMounted as H, Transition as ue, normalizeStyle as ce, provide as J } from "vue";
var fe = Object.defineProperty, me = (e, l, t) => l in e ? fe(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t, I = (e, l, t) => (me(e, typeof l != "symbol" ? l + "" : l, t), t);
function q(e, l = !1) {
  var t;
  const n = g((t = G("formid", null)) != null ? t : e), o = `fid_${ne().replaceAll("-", "")}`;
  return { formid: M(() => {
    var s;
    if (!n.value && !l)
      throw Error("Form id is not set. Did you forget formgroup");
    return (s = n == null ? void 0 : n.value) != null ? s : o;
  }) };
}
function ne() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
  );
}
function pe(...e) {
  return (l) => {
    const t = e.map((n) => n(l)).filter((n) => n !== null);
    return t && t.length > 0 ? t : [];
  };
}
function ve(e) {
  const l = e != null ? e : `fid_${ne().replaceAll("-", "")}`;
  return g(l);
}
const Q = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}, A = class {
  constructor(e) {
    if (I(this, "buttonElement"), I(this, "targetEl"), I(this, "responsiveListCollapseEnabled", !1), !e)
      throw new Error("Could not find button for overflow menu component.");
    this.buttonElement = e;
    const l = this.buttonElement.getAttribute(A.TARGET);
    if (!l)
      throw new Error(
        `Attribute could not be found on overflow menu component: ${A.TARGET}`
      );
    const t = document.getElementById(l.replace("#", ""));
    if (!t)
      throw new Error("Panel for overflow menu component could not be found.");
    this.targetEl = t;
  }
  init() {
    var e, l, t, n;
    if (this.buttonElement && this.targetEl) {
      (((l = (e = this.buttonElement) == null ? void 0 : e.parentNode) == null ? void 0 : l.classList.contains(
        "overflow-menu--md-no-responsive"
      )) || ((n = (t = this.buttonElement) == null ? void 0 : t.parentNode) == null ? void 0 : n.classList.contains(
        "overflow-menu--lg-no-responsive"
      ))) && (this.responsiveListCollapseEnabled = !0), document.getElementsByTagName("body")[0].removeEventListener("click", this.outsideClose), document.getElementsByTagName("body")[0].addEventListener("click", this.outsideClose), this.buttonElement.removeEventListener("click", (a) => this.toggleDropdown(a)), this.buttonElement.addEventListener("click", (a) => this.toggleDropdown(a));
      const o = this.targetEl, s = this.buttonElement;
      window.IntersectionObserver && new IntersectionObserver(
        (a) => {
          a[0].intersectionRatio ? s.getAttribute("aria-expanded") === "false" && o.setAttribute("aria-hidden", "true") : o.getAttribute("aria-hidden") === "true" && o.setAttribute("aria-hidden", "false");
        },
        {
          root: document.body
        }
      ).observe(s), document.removeEventListener("keyup", (a) => this.closeOnEscape(a)), document.addEventListener("keyup", (a) => this.closeOnEscape(a));
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
    var l;
    let t = !1;
    const n = document.getElementsByClassName("overflow-menu");
    for (let o = 0; o < n.length; o += 1) {
      const s = n[o], a = s.querySelector(
        `${A.BUTTONCLASS}[aria-expanded="true"]`
      );
      if (a) {
        t = !0;
        const r = s.querySelector(
          `#${(l = a.getAttribute(A.TARGET)) == null ? void 0 : l.replace("#", "")}`
        );
        if (r && A.doResponsiveCollapse(a)) {
          if (a.getAttribute("aria-expanded")) {
            const i = new Event("fds.dropdown.close");
            a.dispatchEvent(i);
          }
          a.setAttribute("aria-expanded", "false"), r.classList.add("collapsed"), r.setAttribute("aria-hidden", "true");
        }
      }
    }
    t && e && e.stopImmediatePropagation();
  }
  offset(e) {
    const l = e.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, n = window.pageYOffset || document.documentElement.scrollTop;
    return { top: l.top + n, left: l.left + t };
  }
  toggleDropdown(e, l = !1) {
    e.stopPropagation(), e.preventDefault(), this.toggle(this.buttonElement, l);
  }
  toggle(e, l = !1) {
    const t = e;
    let n = null;
    if (t != null) {
      const o = t.getAttribute(A.TARGET);
      o != null && (n = document.getElementById(o.replace("#", "")));
    }
    if (t && n)
      if (n.style.left = "", n.style.right = "", t.getAttribute("aria-expanded") === "true" || l) {
        t.setAttribute("aria-expanded", "false"), n.classList.add("collapsed"), n.setAttribute("aria-hidden", "true");
        const o = new Event("fds.dropdown.close");
        t.dispatchEvent(o);
      } else {
        document.getElementsByTagName("body")[0].classList.contains("mobile_nav-active") || this.closeAll(), t.setAttribute("aria-expanded", "true"), n.classList.remove("collapsed"), n.setAttribute("aria-hidden", "false");
        const o = new Event("fds.dropdown.open");
        t.dispatchEvent(o);
        const s = this.offset(n);
        s.left < 0 && (n.style.left = "0px", n.style.right = "auto");
        let a = s.left + n.offsetWidth;
        a > window.innerWidth && (n.style.left = "auto", n.style.right = "0px");
        const r = this.offset(n);
        r.left < 0 && (n.style.left = "0px", n.style.right = "auto"), a = r.left + n.offsetWidth, a > window.innerWidth && (n.style.left = "auto", n.style.right = "0px");
      }
  }
  hasParent(e, l) {
    var t, n;
    return ((t = e.parentElement) == null ? void 0 : t.tagName) === l ? !0 : l !== "BODY" && e.parentElement && ((n = e.parentElement) == null ? void 0 : n.tagName) !== "BODY" ? this.hasParent(e.parentElement, l) : !1;
  }
  outsideClose(e) {
    var l, t;
    if (!document.getElementsByTagName("body")[0].classList.contains("mobile_nav-active") && document.querySelector("body.mobile_nav-active") === null && !((l = e.target) != null && l.classList.contains("button-menu-close"))) {
      const n = document.querySelectorAll(
        `${A.BUTTONCLASS}[aria-expanded=true]`
      );
      for (let o = 0; o < n.length; o += 1) {
        const s = n[o];
        let a = null, r = s.getAttribute(A.TARGET);
        if (r && (r.indexOf("#") !== -1 && (r = r.replace("#", "")), a = document.getElementById(r)), (A.doResponsiveCollapse(s) || this.hasParent(s, "HEADER") && !((t = e.target) != null && t.classList.contains("overlay"))) && e.target !== s) {
          s.setAttribute("aria-expanded", "false"), a == null || a.classList.add("collapsed"), a == null || a.setAttribute("aria-hidden", "true");
          const i = new Event("fds.dropdown.close");
          s.dispatchEvent(i);
        }
      }
    }
  }
  static doResponsiveCollapse(e) {
    var l, t;
    if (!e.classList.contains(A.jsDropdownCollapseModifier))
      if (((l = e.parentElement) == null ? void 0 : l.classList.contains("overflow-menu--md-no-responsive")) || ((t = e.parentElement) == null ? void 0 : t.classList.contains("overflow-menu--lg-no-responsive"))) {
        if (window.innerWidth <= A.getTringuideBreakpoint(e))
          return !0;
      } else
        return !0;
    return !1;
  }
  static getTringuideBreakpoint(e) {
    var l;
    return (l = e.parentElement) != null && l.classList.contains("overflow-menu--lg-no-responsive") ? Q.lg : Q.md;
  }
};
let O = A;
I(O, "BUTTONCLASS", ".button-overflow-menu"), I(O, "jsDropdownCollapseModifier", "js-dropdown--responsive-collapse"), I(O, "TARGET", "data-js-target");
const Y = ".nav", ge = `${Y} a`, Z = ".js-menu-open", W = ".js-menu-close", ye = ".overlay", he = `${W}, .overlay`, be = [Y, ye].join(", "), z = "mobile_nav-active", Ve = "is-visible";
let K;
const L = class {
  static focusTrapInit(e) {
    console.warn("focusTrapInit", e);
    const l = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', t = e.querySelectorAll(l), [n] = t;
    function o(s) {
      const { key: a } = s;
      if (a === "Tab") {
        let r = null;
        for (let i = 0; i < t.length; i += 1) {
          const d = t.length - 1, c = t[d - i];
          if (c.offsetWidth > 0 && c.offsetHeight > 0) {
            r = c;
            break;
          }
        }
        s.shiftKey ? document.activeElement === n && (s.preventDefault(), r == null || r.focus()) : document.activeElement === r && (s.preventDefault(), n.focus());
      }
      s.key === "Escape" && L.toggleNav(!1);
    }
    return {
      enable() {
        n.focus(), document.addEventListener("keydown", o);
      },
      release() {
        document.removeEventListener("keydown", o);
      }
    };
  }
  static toggleNav(e) {
    const { body: l } = document;
    console.warn("incActive", e);
    const t = typeof e == "boolean" ? e : !L.isActive();
    l.classList.toggle(z, t), console.warn("toggleNav", z, t), L.selectStuff(be).forEach((s) => s.classList.toggle(Ve, t)), t ? K.enable() : K.release();
    const n = l.querySelector(W), o = l.querySelector(Z);
    return t && n ? n.focus() : !t && document.activeElement === n && o && o.focus(), t;
  }
  mobileMenu() {
    let e = !1;
    const l = document.querySelectorAll(Z);
    for (let n = 0; n < l.length; n += 1)
      window.getComputedStyle(l[n], null).display !== "none" && (l[n].addEventListener("click", L.toggleNav), e = !0);
    if (e) {
      const n = document.querySelectorAll(he);
      for (let a = 0; a < n.length; a += 1)
        n[a].addEventListener("click", L.toggleNav);
      const o = document.querySelectorAll(ge);
      o.forEach((a, r) => {
        o[r].addEventListener("click", () => {
          L.isActive() && L.toggleNav(!1);
        });
      });
      const s = document.querySelectorAll(Y);
      for (let a = 0; a < s.length; a += 1)
        K = L.focusTrapInit(s[a]);
    }
    const t = document.body.querySelector(W);
    L.isActive() && t && t.getBoundingClientRect().width === 0 && L.toggleNav.call(t, !1);
  }
  init() {
    window.addEventListener("resize", this.mobileMenu, !1), this.mobileMenu();
  }
  teardown() {
    window.removeEventListener("resize", this.mobileMenu, !1);
  }
};
let ee = L;
I(ee, "selectStuff", (e) => [...window.document.querySelectorAll(e)]), I(ee, "isActive", () => document.body.classList.contains(z));
var oe = /* @__PURE__ */ ((e) => (e.primary = "primary", e.secondary = "secondary", e.tertiary = "tertiary", e.quaternary = "quaternary", e.info = "info", e.success = "success", e.warning = "warning", e.error = "error", e))(oe || {});
const _e = ["disabled"], ke = {
  key: 1,
  class: "icon-svg rightside-icon",
  focusable: "false",
  "aria-hidden": "true"
}, Se = ["xlink:href"], we = { key: 3 }, xe = {
  key: 0,
  class: "spinneroverlay"
}, $e = /* @__PURE__ */ S({
  __name: "xfds-button-spinner",
  props: {
    variant: {
      type: String,
      default: () => oe.secondary
    },
    showSpinner: {
      type: Boolean,
      default: !1
    },
    spinnerText: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    useoverlay: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    return (t, n) => (u(), f(E, null, [
      y("button", {
        class: D(["button mr-4", [`button-${e.variant}`]]),
        onClick: n[0] || (n[0] = (o) => l("click", o)),
        disabled: e.showSpinner
      }, [
        e.showSpinner ? (u(), f("div", {
          key: 0,
          class: D([{ "inner-spinner-white": e.variant === "primary" }, "inner-spinner mr-4 icon-svg"])
        }, null, 2)) : V("", !0),
        e.icon && !e.showSpinner ? (u(), f("svg", ke, [
          y("use", {
            "xlink:href": `#${e.icon}`
          }, null, 8, Se)
        ])) : V("", !0),
        e.showSpinner && !e.spinnerText ? w(t.$slots, "default", { key: 2 }) : V("", !0),
        e.showSpinner && e.spinnerText ? (u(), f("span", we, b(e.spinnerText), 1)) : V("", !0),
        e.showSpinner ? V("", !0) : w(t.$slots, "default", { key: 4 })
      ], 10, _e),
      e.showSpinner && e.useoverlay ? (u(), f("div", xe)) : V("", !0)
    ], 64));
  }
}), Ee = ["id"], Ae = ["onUpdate:modelValue", "id", "name", "disabled", "aria-disabled"], Le = ["for"], Be = {
  key: 0,
  class: "checkbox-content mt-2 ml-4 py-4"
}, Ce = /* @__PURE__ */ S({
  __name: "xfds-checkbox-list",
  props: {
    id: {
      type: String,
      default: null
    },
    modelValue: {
      type: Array,
      required: !0,
      default: () => []
    }
  },
  emits: ["update:modelValue", "dirty"],
  setup(e, { emit: l }) {
    const t = e, n = g(t.modelValue), { formid: o } = q(t.id, !0), s = () => {
      l("dirty", !0);
    }, a = () => {
      l("update:modelValue", n.value);
    };
    return (r, i) => (u(), f("ul", {
      class: "nobullet-list",
      id: v(o)
    }, [
      (u(!0), f(E, null, B(n.value, (d, c) => (u(), f("li", { key: c }, [
        te(y("input", {
          "onUpdate:modelValue": (p) => d.checked = p,
          type: "checkbox",
          class: "form-checkbox checkbox-large",
          id: "checkbox-" + v(o) + "-" + c,
          name: "checkbox" + v(o),
          disabled: d.disabled,
          "aria-disabled": d.ariaDisabled,
          onChange: a,
          onBlur: s
        }, null, 40, Ae), [
          [le, d.checked]
        ]),
        y("label", {
          for: "checkbox-" + v(o) + "-" + c
        }, b(d.title), 9, Le),
        r.$slots[d.value] && d.checked ? (u(), f("div", Be, [
          w(r.$slots, d.value, { checkboxvalue: n.value })
        ])) : V("", !0)
      ]))), 128))
    ], 8, Ee));
  }
}), Ie = ["name", "id"], Me = ["value"], Te = ["value", "disabled", "selected"], Ne = /* @__PURE__ */ S({
  __name: "xfds-dropdown",
  props: {
    id: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      required: !1,
      default: ""
    },
    optionHeader: {
      type: String,
      default: "V\xE6lg"
    },
    options: {
      type: Array
    }
  },
  emits: ["update:modelValue", "dirty", "change"],
  setup(e, { emit: l }) {
    const t = e, n = g(t.modelValue), { formid: o } = q(t.id, !0), s = () => {
      l("dirty", !0);
    }, a = (r) => l("update:modelValue", (r == null ? void 0 : r.target).value);
    return (r, i) => (u(), f("select", X({
      class: "form-select",
      name: v(o),
      id: v(o)
    }, n.value, {
      onChange: a,
      onBlur: s
    }), [
      e.optionHeader ? (u(), f("option", {
        key: 0,
        value: n.value
      }, b(e.optionHeader), 9, Me)) : V("", !0),
      (u(!0), f(E, null, B(e.options, (d, c) => (u(), f("option", {
        value: d.value,
        key: c,
        disabled: d.disabled,
        selected: d.value === n.value
      }, b(d.title), 9, Te))), 128))
    ], 16, Ie));
  }
}), De = (e) => (ie("data-v-6a19ee65"), e = e(), re(), e), qe = { class: "bordered-list" }, Fe = {
  key: 1,
  for: "",
  class: "disabled"
}, je = {
  class: "icon-svg mr-3",
  focusable: "false",
  "aria-hidden": "true"
}, Ue = ["xlink:href"], Re = ["onClick"], Xe = /* @__PURE__ */ De(() => /* @__PURE__ */ y("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ y("use", { "xlink:href": "#trash-can" })
], -1)), Oe = /* @__PURE__ */ S({
  __name: "xfds-file-list",
  props: {
    list: {
      type: Array,
      required: !0,
      default: () => []
    },
    icons: {
      type: Object,
      default: () => ({
        pdf: "file-pdf",
        image: "file-image",
        doc: "file-word",
        odt: "file-word",
        xls: "file-excel"
      })
    },
    defaultIcon: {
      type: String,
      default: "insert-drive-file"
    },
    canDelete: {
      type: Boolean,
      default: !0
    },
    canDownload: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["download", "delete"],
  setup(e, { emit: l }) {
    const t = e, n = Object.keys(t.icons), o = (r) => l("delete", r), s = (r) => l("download", r), a = (r) => {
      const i = n.find((d) => r.type.includes(d));
      return i ? t.icons[i] : t.defaultIcon;
    };
    return (r, i) => {
      const d = _("fds-funktionslink");
      return u(), f("ul", qe, [
        (u(!0), f(E, null, B(e.list, (c, p) => (u(), f("li", {
          key: p,
          class: "d-flex justify-content-between"
        }, [
          e.canDownload ? (u(), x(d, {
            key: 0,
            icon: a(c),
            onClick: (m) => s(c)
          }, {
            default: k(() => [
              $(b(c.filename), 1)
            ]),
            _: 2
          }, 1032, ["icon", "onClick"])) : V("", !0),
          e.canDownload ? V("", !0) : (u(), f("label", Fe, [
            (u(), f("svg", je, [
              y("use", {
                "xlink:href": `#${a(c)}`
              }, null, 8, Ue)
            ])),
            c.label ? (u(), f(E, { key: 0 }, [
              $(b(c.label), 1)
            ], 64)) : (u(), f(E, { key: 1 }, [
              $(b(c.filename), 1)
            ], 64))
          ])),
          e.canDelete ? (u(), f("button", {
            key: 2,
            class: "function-link",
            onClick: (m) => o(c)
          }, [
            Xe,
            $("Slet ")
          ], 8, Re)) : V("", !0)
        ]))), 128))
      ]);
    };
  }
});
const Pe = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Ke = /* @__PURE__ */ Pe(Oe, [["__scopeId", "data-v-6a19ee65"]]), Ge = ["id"], We = ["onUpdate:modelValue", "id", "name", "disabled"], ze = ["for"], He = {
  key: 0,
  class: "checkbox-content mt-2 ml-4 py-4"
}, Ye = /* @__PURE__ */ S({
  __name: "xfds-form-checkbox-list",
  props: {
    modelValue: {
      type: Array,
      required: !0,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "dirty", "valid", "input"],
  setup(e, { emit: l }) {
    const t = e, n = g(!1), o = () => {
      n.value = !0, l("dirty", !0);
    }, s = g(t.modelValue), { formid: a } = q(void 0, !0), r = () => {
      l("update:modelValue", s.value);
    };
    return T(
      () => [t.modelValue],
      () => {
        s.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (i, d) => {
      const c = _("xfds-form-group");
      return u(), x(c, j(U({
        label: e.label,
        hint: e.hint,
        tooltip: e.tooltip,
        isValid: e.isValid,
        errorMessage: e.errorMessage
      })), {
        default: k(() => [
          y("ul", {
            class: "nobullet-list",
            id: v(a)
          }, [
            (u(!0), f(E, null, B(s.value, (p, m) => (u(), f("li", { key: m }, [
              te(y("input", {
                "onUpdate:modelValue": (h) => p.checked = h,
                type: "checkbox",
                class: "form-checkbox checkbox-large",
                id: "checkbox-" + v(a) + "-" + m,
                name: "checkbox" + v(a),
                disabled: p.disabled,
                onChange: r,
                onBlur: o
              }, null, 40, We), [
                [le, p.checked]
              ]),
              y("label", {
                for: "checkbox-" + v(a) + "-" + m
              }, b(p.title), 9, ze),
              i.$slots[p.value] && p.checked ? (u(), f("div", He, [
                w(i.$slots, p.value, { checkboxvalue: s.value })
              ])) : V("", !0)
            ]))), 128))
          ], 8, Ge)
        ]),
        _: 3
      }, 16);
    };
  }
}), Je = /* @__PURE__ */ S({
  __name: "xfds-form-dropdown",
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "dirty", "valid", "input"],
  setup(e, { emit: l }) {
    const t = e, n = P(), o = g(t.modelValue), s = g(!1), a = () => {
      s.value = !0, l("dirty", !0);
    }, r = () => l("update:modelValue", o.value);
    return T(
      () => [t.modelValue],
      () => {
        o.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (i, d) => {
      const c = _("xfds-dropdown"), p = _("xfds-form-group");
      return u(), x(p, j(U({
        label: e.label,
        hint: e.hint,
        tooltip: e.tooltip,
        isValid: e.isValid,
        errorMessage: e.errorMessage
      })), {
        default: k(() => [
          R(c, X(v(n), {
            options: e.options,
            modelValue: o.value,
            "onUpdate:modelValue": [
              d[0] || (d[0] = (m) => o.value = m),
              r
            ],
            onDirty: a
          }), null, 16, ["options", "modelValue"])
        ]),
        _: 1
      }, 16);
    };
  }
}), Qe = /* @__PURE__ */ S({
  __name: "xfds-form-group",
  props: {
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const l = e, t = g(G("provideIsValid", null)), n = g(G("provideErrorMessage", null)), o = M(() => {
      var a;
      return (a = t.value) != null ? a : l.isValid;
    }), s = M(() => {
      var a;
      return (a = n.value) != null ? a : l.errorMessage;
    });
    return (a, r) => {
      const i = _("fds-label"), d = _("fds-tooltip"), c = _("fds-fejlmeddelelse"), p = _("fds-hint"), m = _("fds-formgroup");
      return u(), x(m, { "is-valid": v(o) }, {
        default: k(() => [
          w(a.$slots, "label", {}, () => [
            e.label ? (u(), x(i, { key: 0 }, {
              default: k(() => [
                $(b(e.label), 1)
              ]),
              _: 1
            })) : V("", !0)
          ]),
          w(a.$slots, "tooltip", {}, () => [
            e.tooltip ? (u(), x(d, {
              key: 0,
              class: "ml-2"
            }, {
              default: k(() => [
                $(b(e.tooltip), 1)
              ]),
              _: 1
            })) : V("", !0)
          ]),
          w(a.$slots, "fejlmeddelelse", {}, () => [
            v(o) ? V("", !0) : (u(), x(c, { key: 0 }, {
              default: k(() => [
                $(b(v(s)), 1)
              ]),
              _: 1
            }))
          ]),
          w(a.$slots, "hint", {}, () => [
            R(p, null, {
              default: k(() => [
                $(b(e.hint), 1)
              ]),
              _: 1
            })
          ]),
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["is-valid"]);
    };
  }
}), Ze = /* @__PURE__ */ S({
  __name: "xfds-form-input-number",
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    },
    modelValue: {
      default: 0
    },
    suffix: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "dirty", "valid", "input"],
  setup(e, { emit: l }) {
    const t = e, n = P(), o = g(t.modelValue), s = g(!1), a = () => {
      s.value = !0;
    }, r = () => l("update:modelValue", o.value);
    return (i, d) => {
      const c = _("fds-input-number"), p = _("xfds-form-group");
      return u(), x(p, j(U({
        label: e.label,
        hint: e.hint,
        tooltip: e.tooltip,
        isValid: e.isValid,
        errorMessage: e.errorMessage
      })), {
        default: k(() => [
          R(c, X({
            modelValue: o.value,
            "onUpdate:modelValue": d[0] || (d[0] = (m) => o.value = m),
            type: "number"
          }, {
            attrs: v(n),
            suffix: e.suffix,
            prefix: e.prefix
          }, {
            "onUpdate:modelValue": r,
            onDirty: a
          }), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 16);
    };
  }
}), et = /* @__PURE__ */ S({
  __name: "xfds-form-input",
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "dirty", "valid", "input"],
  setup(e, { emit: l }) {
    const t = e, n = P(), o = g(t.modelValue), s = g(!1), a = () => {
      s.value = !0, l("dirty", !0);
    }, r = () => l("update:modelValue", o.value);
    return T(
      () => [t.modelValue],
      () => {
        o.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (i, d) => {
      const c = _("fds-input"), p = _("xfds-form-group");
      return u(), x(p, j(U({
        label: e.label,
        hint: e.hint,
        tooltip: e.tooltip,
        isValid: e.isValid,
        errorMessage: e.errorMessage
      })), {
        default: k(() => [
          R(c, X({
            modelValue: o.value,
            "onUpdate:modelValue": d[0] || (d[0] = (m) => o.value = m),
            type: "text"
          }, {
            attrs: v(n),
            suffix: e.suffix,
            prefix: e.prefix
          }, {
            "onUpdate:modelValue": r,
            onDirty: a
          }), de({ _: 2 }, [
            i.$slots.button ? {
              name: "button",
              fn: k(() => [
                w(i.$slots, "button")
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue"])
        ]),
        _: 3
      }, 16);
    };
  }
}), tt = ["id"], lt = ["id", "name", "value", "disabled", "checked"], nt = ["for"], ot = {
  key: 0,
  class: "radio-content mt-2 ml-4 py-4"
}, at = /* @__PURE__ */ S({
  __name: "xfds-form-radio",
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "dirty", "valid", "input"],
  setup(e, { emit: l }) {
    const t = e, n = g(t.modelValue), o = g(!1), s = () => {
      o.value = !0;
    }, { formid: a } = q(t.id, !0), r = (i) => l("update:modelValue", (i == null ? void 0 : i.target).value);
    return T(
      () => [t.modelValue],
      () => {
        n.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (i, d) => {
      const c = _("xfds-form-group");
      return u(), x(c, j(U({
        label: e.label,
        hint: e.hint,
        tooltip: e.tooltip,
        isValid: e.isValid,
        errorMessage: e.errorMessage
      })), {
        default: k(() => [
          y("ul", {
            class: "nobullet-list",
            id: v(a)
          }, [
            (u(!0), f(E, null, B(e.options, (p, m) => (u(), f("li", { key: m }, [
              y("input", {
                type: "radio",
                class: "form-radio radio-large",
                id: "radio-" + v(a) + "-" + m,
                name: "radio" + v(a),
                value: p.value,
                disabled: p.disabled,
                checked: n.value === p.value.toString(),
                onChange: r,
                onBlur: s
              }, null, 40, lt),
              y("label", {
                for: "radio-" + v(a) + "-" + m
              }, b(p.title), 9, nt),
              i.$slots[p.value] && e.modelValue === p.value.toString() ? (u(), f("div", ot, [
                w(i.$slots, p.value, { radiovalue: n.value })
              ])) : V("", !0)
            ]))), 128))
          ], 8, tt)
        ]),
        _: 3
      }, 16);
    };
  }
}), st = /* @__PURE__ */ S({
  __name: "xfds-form-textarea",
  props: {
    modelValue: {
      type: String,
      default: "",
      required: !0
    },
    id: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 5
    },
    rowlength: {
      type: Number,
      default: 80
    },
    maxlength: {
      type: Number,
      default: 4e3
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    },
    errorMessage: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "dirty", "valid", "input"],
  setup(e, { emit: l }) {
    const t = e, n = P(), o = g(t.modelValue), s = g(!1), a = () => {
      s.value = !0;
    }, r = () => l("update:modelValue", o.value);
    return T(
      () => [t.modelValue],
      () => {
        o.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (i, d) => {
      const c = _("fds-textarea"), p = _("xfds-form-group");
      return u(), x(p, j(U({
        label: e.label,
        hint: e.hint,
        tooltip: e.tooltip,
        isValid: e.isValid,
        errorMessage: e.errorMessage
      })), {
        default: k(() => [
          R(c, X({
            modelValue: o.value,
            "onUpdate:modelValue": d[0] || (d[0] = (m) => o.value = m)
          }, v(n), {
            maxlength: e.maxlength,
            rowlength: e.rowlength,
            rows: e.rows,
            "onUpdate:modelValue": r,
            onDirty: a
          }), null, 16, ["modelValue", "maxlength", "rowlength", "rows"])
        ]),
        _: 1
      }, 16);
    };
  }
});
class it {
  constructor() {
    N(this, "getParent", (l, t) => t.find((n) => {
      var o;
      return (o = n.children) == null ? void 0 : o.some((s) => s.key === l);
    }));
    N(this, "resolveKey", (l, t) => {
      const [n] = l.split("/"), o = this.getParent(n, t);
      return o ? `${o.key}/${l}` : l;
    });
    N(this, "resolveActiveKey", (l) => {
      const [t] = l.split("/").reverse();
      return t;
    });
    N(this, "clearChildren", (l) => l && l.map((t) => ({ ...t, active: !1, children: this.clearChildren(t.children) })));
    N(this, "setActive", (l, t) => l.map((n) => ({
      ...n,
      active: n.key === t,
      children: this.clearChildren(n.children)
    })));
    N(this, "findFirstActiveItem", (l, t = !1) => {
      const n = l.find((o) => !o.disabled && o.active);
      if (n)
        return n;
      if (t)
        return l.find((o) => !o.disabled);
    });
  }
}
const F = new it(), rt = {
  class: "sidenav-sub_list",
  role: "menu"
}, dt = ["href", "title", "onClick"], ut = /* @__PURE__ */ S({
  __name: "xfds-menu-sub",
  props: {
    modelValue: {
      type: Array,
      required: !0
    }
  },
  emits: ["update:modelValue", "navigate"],
  setup(e, { emit: l }) {
    const t = e, n = (s) => {
      l("navigate", F.resolveKey(s, t.modelValue));
    }, o = (s) => {
      if (s.disabled)
        return;
      const a = t.modelValue.map((r) => ({ ...r, active: r.key === s.key }));
      l("update:modelValue", a), l("navigate", s.key);
    };
    return (s, a) => {
      const r = _("xfds-menu-sub", !0);
      return u(), f("ul", rt, [
        (u(!0), f(E, null, B(t.modelValue, (i) => (u(), f("li", {
          role: "none",
          key: i.key,
          class: D([{ active: i.active }, { disabled: i.disabled }])
        }, [
          y("a", {
            href: `${i.href ? i.href : "javascript:void(0);"}`,
            title: i.title,
            onClick: (d) => o(i),
            role: "menuitem"
          }, b(i.title), 9, dt),
          i.active && i.children && i.children.length > 0 ? (u(), x(r, {
            key: 0,
            onNavigate: n,
            modelValue: i.children,
            "onUpdate:modelValue": (d) => i.children = d
          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), ct = {
  class: "sidenav-list mb-6",
  role: "menu"
}, ft = /* @__PURE__ */ S({
  __name: "xfds-menu",
  props: {
    modelValue: {
      type: Array,
      default: () => [],
      required: !0
    },
    showIndex: {
      type: Boolean,
      default: !1
    },
    navigateFirst: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "navigate"],
  setup(e, { emit: l }) {
    const t = e, n = M(() => t.modelValue.filter((i) => !i.ignore)), o = g(""), s = g(n.value), a = (i) => {
      l("navigate", F.resolveKey(i, t.modelValue));
    }, r = (i) => {
      i.disabled || (s.value = F.setActive(s.value, i.key), o.value = i.key, l("update:modelValue", s.value), l("navigate", o.value));
    };
    return H(() => {
      const i = F.findFirstActiveItem(s.value, t.navigateFirst);
      i && r(i);
    }), T(
      () => [t.modelValue],
      () => {
        s.value = n.value;
      },
      {
        immediate: !0
      }
    ), (i, d) => {
      const c = _("xfds-menu-sub"), p = _("fds-menu-item");
      return u(), f("ul", ct, [
        (u(!0), f(E, null, B(s.value, (m, h) => (u(), x(p, {
          class: D([{ disabled: m.disabled }]),
          key: m.key,
          id: m.key,
          active: m.active,
          icon: m.icon,
          hint: m.hint,
          index: e.showIndex ? h : null,
          onNavigate: (C) => r(m)
        }, {
          submenu: k(() => [
            m.active && m.children && m.children.length > 0 ? (u(), x(c, {
              key: 0,
              onNavigate: a,
              modelValue: m.children,
              "onUpdate:modelValue": (C) => m.children = C
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : V("", !0)
          ]),
          default: k(() => [
            $(b(m.title) + " ", 1)
          ]),
          _: 2
        }, 1032, ["class", "id", "active", "icon", "hint", "index", "onNavigate"]))), 128))
      ]);
    };
  }
}), mt = { class: "progress-bar" }, pt = ["aria-valuenow"], vt = /* @__PURE__ */ S({
  __name: "xfds-progressbar",
  props: {
    procent: {
      type: [Number, String],
      default: 0
    },
    variant: {
      type: String,
      default: "primary"
    },
    showProgress: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const l = e, t = M(() => {
      if (typeof l.procent == "string")
        return 0;
      const n = Math.floor(Math.abs(l.procent));
      return n > 100 ? 100 : n;
    });
    return (n, o) => (u(), x(ue, { name: "progress" }, {
      default: k(() => [
        y("div", mt, [
          y("div", {
            class: D(["progress-bar-fill", `progress-${e.variant}`]),
            style: ce(`width: ${v(t)}%;`),
            "aria-valuenow": v(t),
            "aria-valuemin": "0",
            "aria-valuemax": "100"
          }, [
            e.showProgress ? w(n.$slots, "default", { key: 0 }, () => [
              $(b(v(t)) + "% ", 1)
            ]) : V("", !0)
          ], 14, pt)
        ])
      ]),
      _: 3
    }));
  }
}), gt = { class: "form-label" }, yt = { class: "nobullet-list" }, ht = ["id", "name", "value", "disabled", "checked"], bt = ["for"], Vt = /* @__PURE__ */ S({
  __name: "xfds-radio-toggle",
  props: {
    modelValue: {
      type: Boolean
    },
    trueLabel: {
      type: String,
      default: "Ja"
    },
    falseLabel: {
      type: String,
      default: "Nej"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: !0,
      validator(e) {
        return (e == null ? void 0 : e.length) > 0;
      }
    }
  },
  emits: ["update:modelValue", "dirty"],
  setup(e, { emit: l }) {
    const t = e, n = [
      {
        title: t.trueLabel,
        value: "true",
        disabled: t.disabled
      },
      {
        title: t.falseLabel,
        value: "false",
        disabled: t.disabled
      }
    ], { formid: o } = q(t.id, !0), s = M(() => t.modelValue !== void 0 && t.modelValue !== null), a = (r) => l("update:modelValue", (r == null ? void 0 : r.target).value === "true");
    return (r, i) => (u(), f("fieldset", null, [
      y("legend", gt, [
        w(r.$slots, "label", {}, () => [
          $(b(e.label), 1)
        ])
      ]),
      y("ul", yt, [
        (u(), f(E, null, B(n, (d, c) => {
          var p, m, h;
          return y("li", { key: c }, [
            y("input", {
              id: "radio-" + v(o) + "-" + c,
              type: "radio",
              name: "radio" + v(o),
              value: d.value,
              disabled: d.disabled,
              checked: v(s) && ((p = e.modelValue) == null ? void 0 : p.toString()) === d.value.toString(),
              onChange: a,
              class: "form-radio radio-large"
            }, null, 40, ht),
            y("label", {
              for: "radio-" + v(o) + "-" + c
            }, b(d.title), 9, bt),
            v(s) && r.$slots[d.value.toString()] && ((m = e.modelValue) == null ? void 0 : m.toString()) === d.value.toString() ? (u(), f("div", {
              key: 0,
              class: D(["radio-content mt-2 ml-4 py-4", { disabled: e.disabled }])
            }, [
              w(r.$slots, d.value.toString(), {
                radiovalue: (h = e.modelValue) == null ? void 0 : h.toString()
              })
            ], 2)) : V("", !0)
          ]);
        }), 64))
      ])
    ]));
  }
}), _t = { class: "form-label" }, kt = ["id"], St = ["id", "name", "value", "disabled", "aria-disabled", "checked"], wt = ["for"], xt = {
  key: 0,
  class: "radio-content mt-2 ml-4 py-4"
}, $t = /* @__PURE__ */ S({
  __name: "xfds-radio",
  props: {
    modelValue: {
      type: String
    },
    list: {
      type: Array,
      required: !0,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: !0,
      validator(e) {
        return (e == null ? void 0 : e.length) > 0;
      }
    }
  },
  emits: ["update:modelValue", "dirty"],
  setup(e, { emit: l }) {
    const t = e, { formid: n } = q(t.id), o = g(t.modelValue), s = (a) => l("update:modelValue", (a == null ? void 0 : a.target).value);
    return (a, r) => (u(), f("fieldset", null, [
      y("legend", _t, [
        w(a.$slots, "label", {}, () => [
          $(b(e.label), 1)
        ])
      ]),
      y("ul", {
        class: "nobullet-list",
        id: v(n)
      }, [
        (u(!0), f(E, null, B(e.list, (i, d) => (u(), f("li", { key: d }, [
          y("input", {
            id: "radio-" + v(n) + "-" + d,
            type: "radio",
            name: "radio" + v(n),
            value: i.value,
            disabled: i.disabled,
            "aria-disabled": i.ariaDisabled,
            checked: o.value === i.value.toString(),
            onChange: s,
            onBlur: r[0] || (r[0] = (c) => a.$emit("dirty", !0)),
            class: "form-radio radio-large"
          }, null, 40, St),
          y("label", {
            for: "radio-" + v(n) + "-" + d
          }, b(i.title), 9, wt),
          a.$slots[i.value] && e.modelValue === i.value.toString() ? (u(), f("div", xt, [
            w(a.$slots, i.value, { radiovalue: o.value })
          ])) : V("", !0)
        ]))), 128))
      ], 8, kt)
    ]));
  }
}), Et = { class: "overflow-menu overflow-menu--open-right" }, At = ["id", "data-js-target"], Lt = {
  class: "icon-svg",
  "aria-hidden": "true",
  focusable: "false"
}, Bt = ["xlink:href"], Ct = ["id"], It = /* @__PURE__ */ S({
  __name: "xfds-trinindikator",
  props: {
    modelValue: {
      type: Array,
      default: () => [],
      required: !0
    },
    showIndex: {
      type: Boolean,
      default: !1
    },
    navigateFirst: {
      type: Boolean,
      default: !1
    },
    header: {
      type: String,
      default: "Trin"
    },
    id: {
      type: String
    },
    icon: {
      type: String,
      default: "arrow-drop-down"
    }
  },
  emits: ["update:modelValue", "navigate"],
  setup(e, { emit: l }) {
    const t = e, { formid: n } = q(t.id, !0), o = M(() => {
      var d;
      return (d = t.modelValue) != null ? d : [];
    }), s = g(""), a = g(o.value.filter((d) => !d.ignore)), r = g(0), i = (d) => {
      d.disabled || (a.value = F.setActive(a.value, d.key), s.value = d.key, r.value = a.value.findIndex((c) => c.key === d.key), l("update:modelValue", a.value), l("navigate", s.value));
    };
    return H(async () => {
      const d = F.findFirstActiveItem(a.value, t.navigateFirst);
      d && i(d), new O(document.getElementById(`button_${n.value}`)).init();
    }), (d, c) => {
      const p = _("fds-menu-item"), m = _("fds-menu");
      return u(), f("div", Et, [
        y("button", {
          class: "button-overflow-menu js-dropdown",
          id: `button_${v(n)}`,
          "data-js-target": `#${v(n)}`,
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }, [
          $(b(e.header) + " " + b(r.value + 1) + " af " + b(v(o).length) + " ", 1),
          (u(), f("svg", Lt, [
            y("use", {
              "xlink:href": `#${e.icon}`
            }, null, 8, Bt)
          ]))
        ], 8, At),
        y("div", {
          class: "overflow-menu-inner",
          id: v(n),
          "aria-hidden": "true"
        }, [
          y("nav", null, [
            R(m, null, {
              default: k(() => [
                (u(!0), f(E, null, B(a.value, (h, C) => (u(), x(p, {
                  role: "none",
                  class: D([{ disabled: h.disabled }]),
                  key: h.key,
                  id: h.key,
                  active: h.active,
                  icon: h.icon,
                  hint: h.hint,
                  href: h.href,
                  index: C + 1,
                  onNavigate: (Nt) => i(h)
                }, {
                  default: k(() => [
                    $(b(h.title), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "id", "active", "icon", "hint", "href", "index", "onNavigate"]))), 128))
              ]),
              _: 1
            })
          ])
        ], 8, Ct)
      ]);
    };
  }
}), Mt = ["id"], Tt = /* @__PURE__ */ S({
  __name: "xfds-validate",
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: null
    },
    id: {
      type: String,
      default: null
    },
    validateFlow: {
      type: String,
      default: "normal"
    },
    dirty: {
      type: Boolean,
      default: !1
    },
    useAutoDirty: {
      type: Boolean,
      default: !0
    },
    validations: {
      type: Array,
      default: () => [
        (e) => e ? null : "Indtast data"
      ]
    }
  },
  emits: ["valid", "validated"],
  setup(e, { emit: l }) {
    const t = e, n = g(!1), o = g(!0), s = g(""), a = g([]), r = g(null), i = g(!1), d = ve(t.id);
    J("provideIsValid", o), J("provideErrorMessage", s), H(() => {
      var h;
      !r.value || !t.useAutoDirty || (h = r.value.querySelector("input, select")) == null || h.addEventListener("blur", () => {
        i.value = !0;
      });
    });
    const c = () => {
      const h = {
        key: d.value,
        type: "",
        valid: n.value,
        reasons: a.value,
        dirty: i.value
      };
      l("validated", h);
    }, p = M(() => i.value || t.dirty), m = () => {
      if (n.value = !0, o.value = !0, s.value = "", a.value = [], t.validations) {
        const h = [...t.validations], C = pe(...h)(t.modelValue);
        C.length > 0 && ([s.value] = C, a.value = C, n.value = !1, p.value && (o.value = !1));
      }
      c(), l("valid", n.value);
    };
    return T(
      () => t.modelValue,
      () => {
        m();
      },
      {
        immediate: !0,
        deep: !0
      }
    ), T(
      () => i,
      () => {
        m();
      },
      {
        deep: !0
      }
    ), (h, C) => (u(), f("section", {
      ref_key: "refElement",
      ref: r,
      class: "validate-form-group",
      id: v(d)
    }, [
      w(h.$slots, "default", {
        isValid: n.value,
        isValidWaitForDirty: o.value,
        errorMessage: s.value
      })
    ], 8, Mt));
  }
});
function Ft(e) {
  e.component("xfds-button-spinner", $e), e.component("xfds-checkbox-list", Ce), e.component("xfds-dropdown", Ne), e.component("xfds-file-list", Ke), e.component("xfds-form-checkbox-list", Ye), e.component("xfds-form-dropdown", Je), e.component("xfds-form-group", Qe), e.component("xfds-form-input-number", Ze), e.component("xfds-form-input", et), e.component("xfds-form-radio", at), e.component("xfds-form-textarea", st), e.component("xfds-menu-sub", ut), e.component("xfds-menu", ft), e.component("xfds-progressbar", vt), e.component("xfds-radio-toggle", Vt), e.component("xfds-radio", $t), e.component("xfds-trinindikator", It), e.component("xfds-validate", Tt);
}
export {
  $e as XfdsButtonSpinner,
  Ce as XfdsCheckboxList,
  Ne as XfdsDropdown,
  Ke as XfdsFileList,
  Ye as XfdsFormCheckboxList,
  Je as XfdsFormDropdown,
  Qe as XfdsFormGroup,
  et as XfdsFormInput,
  Ze as XfdsFormInputNumber,
  at as XfdsFormRadio,
  st as XfdsFormTextarea,
  ft as XfdsMenu,
  ut as XfdsMenuSub,
  vt as XfdsProgressbar,
  $t as XfdsRadio,
  Vt as XfdsRadioToggle,
  It as XfdsTrinindikator,
  Tt as XfdsValidate,
  Ft as default
};
