import { defineComponent as v, ref as M, computed as w, provide as q, openBlock as d, createElementBlock as r, renderSlot as p, createCommentVNode as b, createElementVNode as a, inject as j, createBlock as O, resolveDynamicComponent as ue, withCtx as N, normalizeClass as x, unref as u, createTextVNode as L, toDisplayString as z, Transition as me, pushScopeId as pe, popScopeId as ve, normalizeProps as te, guardReactiveProps as oe, useAttrs as Z, watch as G, mergeProps as R, resolveComponent as ie, createVNode as W, withDirectives as T, vModelText as I, onMounted as P, Fragment as F, useSlots as K, createStaticVNode as fe, vModelDynamic as ye, renderList as de, Teleport as be } from "vue";
const ge = { class: "accordion-group" }, ze = /* @__PURE__ */ v({
  __name: "fds-accordion-group",
  props: {
    collapsedText: {
      type: String,
      default: "\xC5bn alle"
    },
    expandedText: {
      type: String,
      default: "Luk alle"
    }
  },
  setup(e) {
    const o = M(!1), t = w(() => o.value);
    return q("provideGroupExpanded", t), (l, s) => (d(), r("div", null, [
      p(l.$slots, "header", {}, () => [
        b("", !0)
      ]),
      a("div", ge, [
        p(l.$slots, "default", { groupActive: o.value })
      ])
    ]));
  }
});
var He = Object.defineProperty, Ve = (e, o, t) => o in e ? He(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, S = (e, o, t) => (Ve(e, typeof o != "symbol" ? o + "" : o, t), t);
function _(e, o = !1) {
  var t;
  const l = M((t = j("formid", null)) != null ? t : e), s = `fid_${Q().replaceAll("-", "")}`;
  return { formid: w(() => {
    var n;
    if (!l.value && !o)
      throw Error("Form id is not set. Did you forget formgroup");
    return (n = l == null ? void 0 : l.value) != null ? n : s;
  }) };
}
function Q() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
  );
}
function Me(e) {
  const o = RegExp("data:([0-9a-z/.-]+);base64,", "g");
  return o.test(e) ? e.slice(o.lastIndex) : e;
}
function re(e) {
  const o = e != null ? e : `fid_${Q().replaceAll("-", "")}`;
  return M(o);
}
const le = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}, C = class {
  constructor(e) {
    if (S(this, "buttonElement"), S(this, "targetEl"), S(this, "responsiveListCollapseEnabled", !1), !e)
      throw new Error("Could not find button for overflow menu component.");
    this.buttonElement = e;
    const o = this.buttonElement.getAttribute(C.TARGET);
    if (!o)
      throw new Error(
        `Attribute could not be found on overflow menu component: ${C.TARGET}`
      );
    const t = document.getElementById(o.replace("#", ""));
    if (!t)
      throw new Error("Panel for overflow menu component could not be found.");
    this.targetEl = t;
  }
  init() {
    var e, o, t, l;
    if (this.buttonElement && this.targetEl) {
      (((o = (e = this.buttonElement) == null ? void 0 : e.parentNode) == null ? void 0 : o.classList.contains(
        "overflow-menu--md-no-responsive"
      )) || ((l = (t = this.buttonElement) == null ? void 0 : t.parentNode) == null ? void 0 : l.classList.contains(
        "overflow-menu--lg-no-responsive"
      ))) && (this.responsiveListCollapseEnabled = !0), document.getElementsByTagName("body")[0].removeEventListener("click", this.outsideClose), document.getElementsByTagName("body")[0].addEventListener("click", this.outsideClose), this.buttonElement.removeEventListener("click", (i) => this.toggleDropdown(i)), this.buttonElement.addEventListener("click", (i) => this.toggleDropdown(i));
      const s = this.targetEl, n = this.buttonElement;
      window.IntersectionObserver && new IntersectionObserver(
        (i) => {
          i[0].intersectionRatio ? n.getAttribute("aria-expanded") === "false" && s.setAttribute("aria-hidden", "true") : s.getAttribute("aria-hidden") === "true" && s.setAttribute("aria-hidden", "false");
        },
        {
          root: document.body
        }
      ).observe(n), document.removeEventListener("keyup", (i) => this.closeOnEscape(i)), document.addEventListener("keyup", (i) => this.closeOnEscape(i));
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
    var o;
    let t = !1;
    const l = document.getElementsByClassName("overflow-menu");
    for (let s = 0; s < l.length; s += 1) {
      const n = l[s], i = n.querySelector(
        `${C.BUTTONCLASS}[aria-expanded="true"]`
      );
      if (i) {
        t = !0;
        const c = n.querySelector(
          `#${(o = i.getAttribute(C.TARGET)) == null ? void 0 : o.replace("#", "")}`
        );
        if (c && C.doResponsiveCollapse(i)) {
          if (i.getAttribute("aria-expanded")) {
            const h = new Event("fds.dropdown.close");
            i.dispatchEvent(h);
          }
          i.setAttribute("aria-expanded", "false"), c.classList.add("collapsed"), c.setAttribute("aria-hidden", "true");
        }
      }
    }
    t && e && e.stopImmediatePropagation();
  }
  offset(e) {
    const o = e.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, l = window.pageYOffset || document.documentElement.scrollTop;
    return { top: o.top + l, left: o.left + t };
  }
  toggleDropdown(e, o = !1) {
    e.stopPropagation(), e.preventDefault(), this.toggle(this.buttonElement, o);
  }
  toggle(e, o = !1) {
    const t = e;
    let l = null;
    if (t != null) {
      const s = t.getAttribute(C.TARGET);
      s != null && (l = document.getElementById(s.replace("#", "")));
    }
    if (t && l)
      if (l.style.left = "", l.style.right = "", t.getAttribute("aria-expanded") === "true" || o) {
        t.setAttribute("aria-expanded", "false"), l.classList.add("collapsed"), l.setAttribute("aria-hidden", "true");
        const s = new Event("fds.dropdown.close");
        t.dispatchEvent(s);
      } else {
        document.getElementsByTagName("body")[0].classList.contains("mobile_nav-active") || this.closeAll(), t.setAttribute("aria-expanded", "true"), l.classList.remove("collapsed"), l.setAttribute("aria-hidden", "false");
        const s = new Event("fds.dropdown.open");
        t.dispatchEvent(s);
        const n = this.offset(l);
        n.left < 0 && (l.style.left = "0px", l.style.right = "auto");
        let i = n.left + l.offsetWidth;
        i > window.innerWidth && (l.style.left = "auto", l.style.right = "0px");
        const c = this.offset(l);
        c.left < 0 && (l.style.left = "0px", l.style.right = "auto"), i = c.left + l.offsetWidth, i > window.innerWidth && (l.style.left = "auto", l.style.right = "0px");
      }
  }
  hasParent(e, o) {
    var t, l;
    return ((t = e.parentElement) == null ? void 0 : t.tagName) === o ? !0 : o !== "BODY" && e.parentElement && ((l = e.parentElement) == null ? void 0 : l.tagName) !== "BODY" ? this.hasParent(e.parentElement, o) : !1;
  }
  outsideClose(e) {
    var o, t;
    if (!document.getElementsByTagName("body")[0].classList.contains("mobile_nav-active") && document.querySelector("body.mobile_nav-active") === null && !((o = e.target) != null && o.classList.contains("button-menu-close"))) {
      const l = document.querySelectorAll(
        `${C.BUTTONCLASS}[aria-expanded=true]`
      );
      for (let s = 0; s < l.length; s += 1) {
        const n = l[s];
        let i = null, c = n.getAttribute(C.TARGET);
        if (c && (c.indexOf("#") !== -1 && (c = c.replace("#", "")), i = document.getElementById(c)), (C.doResponsiveCollapse(n) || this.hasParent(n, "HEADER") && !((t = e.target) != null && t.classList.contains("overlay"))) && e.target !== n) {
          n.setAttribute("aria-expanded", "false"), i == null || i.classList.add("collapsed"), i == null || i.setAttribute("aria-hidden", "true");
          const h = new Event("fds.dropdown.close");
          n.dispatchEvent(h);
        }
      }
    }
  }
  static doResponsiveCollapse(e) {
    var o, t;
    if (!e.classList.contains(C.jsDropdownCollapseModifier))
      if (((o = e.parentElement) == null ? void 0 : o.classList.contains("overflow-menu--md-no-responsive")) || ((t = e.parentElement) == null ? void 0 : t.classList.contains("overflow-menu--lg-no-responsive"))) {
        if (window.innerWidth <= C.getTringuideBreakpoint(e))
          return !0;
      } else
        return !0;
    return !1;
  }
  static getTringuideBreakpoint(e) {
    var o;
    return (o = e.parentElement) != null && o.classList.contains("overflow-menu--lg-no-responsive") ? le.lg : le.md;
  }
};
let D = C;
S(D, "BUTTONCLASS", ".button-overflow-menu"), S(D, "jsDropdownCollapseModifier", "js-dropdown--responsive-collapse"), S(D, "TARGET", "data-js-target");
const X = ".nav", $e = `${X} a`, se = ".js-menu-open", J = ".js-menu-close", we = ".overlay", _e = `${J}, .overlay`, xe = [X, we].join(", "), Y = "mobile_nav-active", Le = "is-visible";
let U;
const B = class {
  static focusTrapInit(e) {
    console.warn("focusTrapInit", e);
    const o = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', t = e.querySelectorAll(o), [l] = t;
    function s(n) {
      const { key: i } = n;
      if (i === "Tab") {
        let c = null;
        for (let h = 0; h < t.length; h += 1) {
          const m = t.length - 1, f = t[m - h];
          if (f.offsetWidth > 0 && f.offsetHeight > 0) {
            c = f;
            break;
          }
        }
        n.shiftKey ? document.activeElement === l && (n.preventDefault(), c == null || c.focus()) : document.activeElement === c && (n.preventDefault(), l.focus());
      }
      n.key === "Escape" && B.toggleNav(!1);
    }
    return {
      enable() {
        l.focus(), document.addEventListener("keydown", s);
      },
      release() {
        document.removeEventListener("keydown", s);
      }
    };
  }
  static toggleNav(e) {
    const { body: o } = document;
    console.warn("incActive", e);
    const t = typeof e == "boolean" ? e : !B.isActive();
    o.classList.toggle(Y, t), console.warn("toggleNav", Y, t), B.selectStuff(xe).forEach((n) => n.classList.toggle(Le, t)), t ? U.enable() : U.release();
    const l = o.querySelector(J), s = o.querySelector(se);
    return t && l ? l.focus() : !t && document.activeElement === l && s && s.focus(), t;
  }
  mobileMenu() {
    let e = !1;
    const o = document.querySelectorAll(se);
    for (let l = 0; l < o.length; l += 1)
      window.getComputedStyle(o[l], null).display !== "none" && (o[l].addEventListener("click", B.toggleNav), e = !0);
    if (e) {
      const l = document.querySelectorAll(_e);
      for (let i = 0; i < l.length; i += 1)
        l[i].addEventListener("click", B.toggleNav);
      const s = document.querySelectorAll($e);
      s.forEach((i, c) => {
        s[c].addEventListener("click", () => {
          B.isActive() && B.toggleNav(!1);
        });
      });
      const n = document.querySelectorAll(X);
      for (let i = 0; i < n.length; i += 1)
        U = B.focusTrapInit(n[i]);
    }
    const t = document.body.querySelector(J);
    B.isActive() && t && t.getBoundingClientRect().width === 0 && B.toggleNav.call(t, !1);
  }
  init() {
    window.addEventListener("resize", this.mobileMenu, !1), this.mobileMenu();
  }
  teardown() {
    window.removeEventListener("resize", this.mobileMenu, !1);
  }
};
let ne = B;
S(ne, "selectStuff", (e) => [...window.document.querySelectorAll(e)]), S(ne, "isActive", () => document.body.classList.contains(Y));
class A {
  constructor(o) {
    if (S(this, "element"), !o)
      throw new Error("Tooltip newElement is missing.");
    if (this.element = o, this.element.getAttribute("data-tooltip") === null)
      throw new Error(
        "Tooltip text is missing. Add attribute data-tooltip and the content of the tooltip as value."
      );
  }
  init() {
    this.element.addEventListener("mouseenter", (o) => {
      const t = o.target;
      t.classList.contains("tooltip-hover") === !1 && t.classList.contains("tooltip-focus") === !1 && (this.closeAllTooltips(o), t.classList.add("tooltip-hover"), setTimeout(() => {
        if (t.classList.contains("tooltip-hover")) {
          const l = o.target;
          if (l.getAttribute("aria-describedby") !== null)
            return;
          this.addTooltip(l);
        }
      }, 300));
    }), this.element.addEventListener("mouseleave", (o) => {
      const t = o.target;
      if (t.classList.contains("tooltip-hover")) {
        t.classList.remove("tooltip-hover");
        const l = t.getAttribute("aria-describedby");
        if (!l)
          return;
        document.getElementById(l) !== null && A.closeHoverTooltip(t);
      }
    }), this.element.addEventListener("keyup", (o) => {
      const t = o.target;
      if (o.key === "Escape") {
        const l = t.getAttribute("aria-describedby");
        if (!l)
          return;
        const s = document.getElementById(l);
        l && s && document.body.removeChild(s), t.classList.remove("active"), t.removeAttribute("aria-describedby");
      }
    }), this.element.getAttribute("data-tooltip-trigger") === "click" && this.element.addEventListener("click", (o) => {
      const t = o.target;
      this.closeAllTooltips(o), t.classList.add("tooltip-focus"), t.classList.remove("tooltip-hover"), t.getAttribute("aria-describedby") === null && this.addTooltip(t);
    }), document.getElementsByTagName("body")[0].removeEventListener("click", this.closeAllTooltips), document.getElementsByTagName("body")[0].addEventListener("click", this.closeAllTooltips);
  }
  closeAll() {
    const o = document.querySelectorAll(".js-tooltip[aria-describedby]");
    for (let t = 0; t < o.length; t += 1) {
      const l = o[t].getAttribute("aria-describedby");
      if (!l)
        return;
      o[t].removeAttribute("aria-describedby"), document.body.removeChild(document.getElementById(l));
    }
  }
  addTooltip(o) {
    const t = o.getAttribute("data-tooltip-position") || "top", l = this.createTooltip(o, t);
    document.body.appendChild(l), this.positionAt(o, l, t);
  }
  createTooltip(o, t) {
    var l;
    const s = document.createElement("div");
    s.className = "tooltip-popper";
    const n = `tooltip-${document.getElementsByClassName("tooltip-popper").length + 1}`;
    s.setAttribute("id", n), s.setAttribute("role", "tooltip"), s.setAttribute("x-placement", t), o.setAttribute("aria-describedby", n);
    const i = document.createElement("div");
    i.className = "tooltip";
    const c = document.createElement("div");
    c.className = "tooltip-arrow", i.appendChild(c);
    const h = document.createElement("div");
    return h.className = "tooltip-content", h.innerHTML = (l = o.getAttribute("data-tooltip")) != null ? l : "", i.appendChild(h), s.appendChild(i), s;
  }
  positionAt(o, t, l) {
    const s = o, n = o.getBoundingClientRect(), i = o.getBoundingClientRect(), c = 12;
    let h, m = i.top - t.offsetHeight - c;
    const f = t.offsetWidth;
    let y = "down";
    if (h = i.left + (o.offsetWidth - t.offsetWidth) / 2, l === "bottom" && (m = i.bottom + c, y = "up"), h < 0) {
      h = c;
      const H = n.left + s.offsetWidth / 2, V = 8, g = H - c - V;
      t.getElementsByClassName("tooltip-arrow")[0].style.left = `${g}px`;
    }
    if (m + t.offsetHeight >= window.innerHeight && (m = i.top - t.offsetHeight - c, y = "down"), m < 0 && (m = i.bottom + c, y = "up"), window.innerWidth < h + f) {
      t.style.right = `${c}px`;
      const H = n.right - s.offsetWidth / 2, V = 8, g = window.innerWidth - H - c - V;
      t.getElementsByClassName("tooltip-arrow")[0].style.right = `${g}px`, t.getElementsByClassName("tooltip-arrow")[0].style.left = "auto";
    } else
      t.style.left = `${h}px`;
    t.style.top = `${m + pageYOffset}px`, t.getElementsByClassName("tooltip-arrow")[0].classList.add(y);
  }
  closeAllTooltips(o, t = !1) {
    var l, s;
    const n = (s = (l = o.target) == null ? void 0 : l.classList) != null ? s : new DOMTokenList();
    if (t || !n.contains("js-tooltip") && !n.contains("tooltip") && !n.contains("tooltip-content")) {
      const i = document.querySelectorAll(".tooltip-popper");
      for (let c = 0; c < i.length; c += 1) {
        const h = document.querySelector(
          `[aria-describedby=${i[c].getAttribute("id")}]`
        );
        if (!h)
          return;
        h.removeAttribute("data-tooltip-active"), h.removeAttribute("aria-describedby"), h.classList.remove("tooltip-focus"), h.classList.remove("tooltip-hover"), document.body.removeChild(i[c]);
      }
    }
  }
  static onTooltipHover(o) {
    const t = o.target, l = document.querySelector(
      `[aria-describedby=${t.getAttribute("id")}]`
    );
    !l || (l.classList.add("tooltip-hover"), t.addEventListener("mouseleave", () => {
      const s = document.querySelector(
        `[aria-describedby=${t.getAttribute("id")}]`
      );
      s !== null && (s.classList.remove("tooltip-hover"), A.closeHoverTooltip(s));
    }));
  }
  static closeHoverTooltip(o) {
    const t = o.getAttribute("aria-describedby");
    if (!t)
      return;
    const l = document.getElementById(t);
    !l || (l.removeEventListener("mouseenter", A.onTooltipHover), l.addEventListener("mouseenter", A.onTooltipHover), setTimeout(() => {
      document.getElementById(t) !== null && (o.classList.contains("tooltip-hover") || A.removeTooltip(o));
    }, 300));
  }
  static removeTooltip(o) {
    const t = o.getAttribute("aria-describedby");
    if (!t)
      return;
    const l = document.getElementById(t);
    t !== null && l !== null && document.body.removeChild(l), o.removeAttribute("aria-describedby"), o.classList.remove("tooltip-hover"), o.classList.remove("tooltip-focus");
  }
}
var ce = /* @__PURE__ */ ((e) => (e.primary = "primary", e.secondary = "secondary", e.tertiary = "tertiary", e.quaternary = "quaternary", e.info = "info", e.success = "success", e.warning = "warning", e.error = "error", e))(ce || {});
const Ce = { class: "accordion-single" }, ke = ["aria-expanded", "id", "aria-controls"], Be = {
  key: 0,
  class: "accordion-icon"
}, Se = {
  key: 0,
  class: "icon_text"
}, Ee = {
  class: "icon-svg",
  focusable: "false",
  "aria-hidden": "true"
}, Ae = ["xlink:href"], Te = ["id", "aria-labelledby", "aria-hidden"], Fe = /* @__PURE__ */ v({
  __name: "fds-accordion",
  props: {
    header: {
      type: String
    },
    hint: {
      type: String,
      default: ""
    },
    expanded: {
      type: Boolean,
      default: !1
    },
    headerLevel: {
      type: String,
      default: "h2",
      validator(e) {
        return ["h2", "h3", "h4", "h5", "h6"].includes(e);
      }
    },
    variant: {
      type: String,
      default: null
    },
    variantText: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const o = e, t = M(o.expanded), { formid: l } = _(void 0, !0), s = {
      success: "check-circle",
      warning: "report-problem",
      error: "highlight-off"
    }, n = {
      success: "Success",
      warning: "Advarsel",
      error: "Fejl"
    }, i = w(() => o.variant ? `accordion-${o.variant}` : ""), c = w(() => s[o.variant]), h = w(() => n[o.variant]);
    return (m, f) => (d(), r("div", Ce, [
      (d(), O(ue(e.headerLevel), null, {
        default: N(() => [
          a("button", {
            class: x(["accordion-button", u(i)]),
            "aria-expanded": `${t.value ? "true" : "false"}`,
            id: u(l),
            onClick: f[0] || (f[0] = (y) => t.value = !t.value),
            "aria-controls": `acc_${u(l)}`
          }, [
            p(m.$slots, "header", {}, () => [
              L(z(e.header) + " ", 1),
              e.variant && ["error", "warning", "success"].includes(e.variant) ? (d(), r("span", Be, [
                e.variantText !== null ? (d(), r("span", Se, z(e.variantText === "" ? u(h) : e.variantText), 1)) : b("", !0),
                (d(), r("svg", Ee, [
                  a("use", {
                    "xlink:href": `#${u(c)}`
                  }, null, 8, Ae)
                ]))
              ])) : b("", !0)
            ])
          ], 10, ke)
        ]),
        _: 3
      })),
      a("div", {
        id: `acc_${u(l)}`,
        role: "region",
        "aria-labelledby": u(l),
        "aria-hidden": `${t.value ? "false" : "true"}`,
        class: "accordion-content"
      }, [
        p(m.$slots, "default")
      ], 8, Te)
    ]));
  }
}), Ie = (e) => (pe("data-v-0ac80d4f"), e = e(), ve(), e), je = ["role", "aria-atomic"], Ne = { class: "alert-body align-text-left" }, De = { class: "alert-heading" }, qe = { class: "alert-text" }, Re = /* @__PURE__ */ Ie(() => /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true",
  focusable: "false"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#close" })
], -1)), Pe = /* @__PURE__ */ v({
  __name: "fds-alert",
  props: {
    header: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: "info"
    },
    showIcon: {
      type: Boolean,
      default: !1
    },
    closeable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const t = e, l = M(!0), s = w(() => ["warning", "error"].includes(t.variant)), n = () => {
      l.value = !l.value, o("close", !0);
    };
    return (i, c) => (d(), O(me, { name: "fade" }, {
      default: N(() => [
        l.value ? (d(), r("div", {
          key: 0,
          role: u(s) ? "alert" : "",
          "aria-atomic": u(s),
          class: x(["alert has-close", [{ "alert--show-icon": e.showIcon }, `alert-${e.variant}`]])
        }, [
          a("div", Ne, [
            i.$slots.header || e.header ? p(i.$slots, "header", { key: 0 }, () => [
              a("p", De, z(e.header), 1)
            ], !0) : b("", !0),
            a("div", qe, [
              p(i.$slots, "default", {}, void 0, !0)
            ]),
            e.closeable ? (d(), r("button", {
              key: 1,
              class: "alert-close",
              onClick: n
            }, [
              p(i.$slots, "button", {}, () => [
                Re,
                L("Luk ")
              ], !0)
            ])) : b("", !0)
          ])
        ], 10, je)) : b("", !0)
      ]),
      _: 3
    }));
  }
});
const E = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, s] of o)
    t[l] = s;
  return t;
}, he = /* @__PURE__ */ E(Pe, [["__scopeId", "data-v-0ac80d4f"]]), Oe = /* @__PURE__ */ v({
  __name: "fds-badge",
  props: {
    size: {
      type: String,
      default: "large"
    },
    variant: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const o = e, t = w(() => `badge-${o.size}`), l = w(() => o.variant ? `badge-${o.variant}` : "");
    return (s, n) => (d(), r("span", {
      class: x(["badge", `${u(t)} ${u(l)}`])
    }, [
      p(s.$slots, "default")
    ], 2));
  }
}), Ze = {
  key: 0,
  class: "icon-svg",
  focusable: "false",
  "aria-hidden": "true"
}, Ge = {
  key: 1,
  class: "icon-svg rightside-icon",
  focusable: "false",
  "aria-hidden": "true"
}, Ue = /* @__PURE__ */ v({
  __name: "fds-button-icon",
  props: {
    variant: {
      type: String,
      default: "secondary"
    },
    icon: {
      type: String,
      default: "pencil"
    },
    right: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (o, t) => (d(), r("button", {
      class: x(["button", `button-${e.variant}`])
    }, [
      !e.right && e.icon ? (d(), r("svg", Ze, [
        a("use", te(oe({ "xlink:href": `#${e.icon}` })), null, 16)
      ])) : b("", !0),
      p(o.$slots, "default"),
      e.right ? (d(), r("svg", Ge, [
        a("use", te(oe({ "xlink:href": `#${e.icon}` })), null, 16)
      ])) : b("", !0)
    ], 2));
  }
}), We = /* @__PURE__ */ v({
  __name: "fds-button",
  props: {
    variant: {
      type: String,
      default: () => ce.primary
    }
  },
  setup(e) {
    return (o, t) => (d(), r("button", {
      class: x(["button", `button-${e.variant}`])
    }, [
      p(o.$slots, "default")
    ], 2));
  }
}), Je = /* @__PURE__ */ v({
  __name: "fds-card-group",
  props: {
    type: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const o = e, t = w(() => {
      var l;
      return (l = o.type) != null ? l : "normal";
    });
    return (l, s) => (d(), r("div", {
      class: x(["card-group", u(t)])
    }, [
      p(l.$slots, "default")
    ], 2));
  }
}), Ye = { class: "card" }, Ke = {
  key: 0,
  class: "card-content"
}, Qe = {
  key: 1,
  class: "card-header"
}, Xe = { class: "header-title" }, et = {
  key: 0,
  class: "sub-header"
}, tt = { class: "card-text" }, ot = {
  key: 2,
  class: "card-footer card-action"
}, lt = { class: "action-buttons" }, st = /* @__PURE__ */ v({
  __name: "fds-card",
  props: {
    header: {
      type: String,
      default: null
    },
    subheader: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (o, t) => (d(), r("div", Ye, [
      p(o.$slots, "custom"),
      o.$slots.content ? (d(), r("div", Ke, [
        p(o.$slots, "content")
      ])) : b("", !0),
      o.$slots.header || e.header ? (d(), r("div", Qe, [
        p(o.$slots, "header", {}, () => [
          a("h2", Xe, z(e.header), 1),
          e.subheader ? (d(), r("p", et, z(e.subheader), 1)) : b("", !0)
        ])
      ])) : b("", !0),
      a("div", tt, [
        p(o.$slots, "default")
      ]),
      o.$slots.actions ? (d(), r("div", ot, [
        a("div", lt, [
          p(o.$slots, "actions")
        ])
      ])) : b("", !0)
    ]));
  }
}), nt = ["id", "checked"], at = ["for"], it = ["id", "aria-hidden"], dt = /* @__PURE__ */ v({
  __name: "fds-checkbox",
  props: {
    id: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "large"
    }
  },
  emits: ["update:modelValue", "dirty"],
  setup(e, { emit: o }) {
    const t = e, l = Z(), { formid: s } = _(t.id, !0), n = M(t.modelValue), i = (c) => o("update:modelValue", (c == null ? void 0 : c.target).checked);
    return G(
      () => [t.modelValue],
      () => {
        n.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (c, h) => (d(), r("fieldset", null, [
      a("input", R({
        type: "checkbox",
        class: ["form-checkbox", { "checkbox-large": e.size === "large" }],
        id: u(s),
        checked: n.value,
        onInput: i,
        onBlur: h[0] || (h[0] = (m) => c.$emit("dirty", !0))
      }, u(l)), null, 16, nt),
      a("label", {
        for: u(s),
        class: "hand"
      }, [
        p(c.$slots, "default", {
          id: u(s),
          class: "hand"
        })
      ], 8, at),
      c.$slots.content ? (d(), r("div", {
        key: 0,
        id: `collapse-${u(s)}`,
        "aria-hidden": !n.value,
        class: "checkbox-content checkbox-content-large"
      }, [
        p(c.$slots, "content")
      ], 8, it)) : b("", !0)
    ]));
  }
}), rt = {
  class: "cookie-container",
  role: "complementary",
  "aria-labelledby": "cookie-message-heading",
  "aria-describedby": "cookie-message-text"
}, ct = { class: "cookie-message" }, ht = { class: "cookie-text" }, ut = {
  class: "h3 mt-0 mb-3",
  id: "cookie-message-heading"
}, mt = /* @__PURE__ */ a("p", {
  class: "mt-0",
  id: "cookie-message-text"
}, [
  /* @__PURE__ */ L(" Vi indsamler statistik ved hj\xE6lp af cookies. Alle indsamlede data anonymiseres. "),
  /* @__PURE__ */ a("a", { href: "#" }, " L\xE6s mere om vores brug af cookies. ")
], -1), pt = { class: "cookie-actions" }, vt = { class: "inline-list" }, ft = { class: "ml-4" }, yt = /* @__PURE__ */ v({
  __name: "fds-cookiemeddelelse",
  props: {
    header: {
      type: String,
      default: "Fort\xE6l os om du accepterer cookies"
    }
  },
  setup(e) {
    return (o, t) => {
      const l = ie("fds-button");
      return d(), r("div", rt, [
        a("div", ct, [
          a("div", ht, [
            p(o.$slots, "header", {}, () => [
              a("div", ut, z(e.header), 1)
            ]),
            p(o.$slots, "default", {}, () => [
              mt
            ])
          ]),
          a("div", pt, [
            p(o.$slots, "actions", {}, () => [
              a("ul", vt, [
                a("li", null, [
                  W(l, {
                    variant: "secondary",
                    onClick: t[0] || (t[0] = (s) => o.$emit("accept", !0))
                  }, {
                    default: N(() => [
                      L(" Accepter cookies ")
                    ]),
                    _: 1
                  })
                ]),
                a("li", ft, [
                  W(l, {
                    variant: "secondary",
                    onClick: t[1] || (t[1] = (s) => o.$emit("cancel", !0))
                  }, {
                    default: N(() => [
                      L(" Nej tak til cookies ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), bt = { class: "date-group js-calendar-group mt-3" }, gt = { class: "form-group form-group-day" }, zt = ["for"], Ht = ["id"], Vt = { class: "form-group form-group-month" }, Mt = ["for"], $t = ["id"], wt = { class: "form-group form-group-year" }, _t = ["for"], xt = ["id"], Lt = /* @__PURE__ */ v({
  __name: "fds-dato-felter",
  props: {
    id: {
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "dirty", "valid"],
  setup(e, { emit: o }) {
    const t = e, l = M(null), s = M(null), n = M(null), i = (V) => {
      const g = Date.parse(V);
      return !Number.isNaN(g);
    }, c = (V) => {
      if (i(t.modelValue)) {
        const g = new Date(V);
        return {
          day: g.getDate().toString(),
          month: g.getMonth().toString(),
          year: g.getFullYear().toString()
        };
      }
      return { day: "", month: "", year: "" };
    }, { formid: h } = _(t.id, !0), m = M(c(t.modelValue)), f = () => o("update:modelValue", [m.value.year, m.value.month, m.value.day].join("-")), y = () => o(
      "valid",
      i([m.value.year, m.value.month, m.value.day].join("-"))
    ), H = (V, g) => {
      const $ = V.target;
      !$.selectionEnd || $.selectionEnd < 2 || (g === "day" && s.value.focus(), g === "month" && n.value.focus(), f(), y());
    };
    return (V, g) => (d(), r("div", bt, [
      a("div", gt, [
        a("label", {
          class: "form-label",
          for: `day_${u(h)}`
        }, " Dag ", 8, zt),
        T(a("input", {
          class: "form-input js-calendar-day-input",
          ref_key: "day",
          ref: l,
          onInput: g[0] || (g[0] = ($) => H($, "day")),
          onBlur: g[1] || (g[1] = ($) => V.$emit("dirty", !0)),
          onFocus: g[2] || (g[2] = ($) => {
            var k;
            return (k = $.target) == null ? void 0 : k.select();
          }),
          id: `day_${u(h)}`,
          "onUpdate:modelValue": g[3] || (g[3] = ($) => m.value.day = $),
          type: "tel",
          "data-min": "1",
          "data-max": "31",
          maxlength: "2",
          pattern: "^[0-9]{0,2}$",
          "data-input-regex": "^[0-9]{0,2}$",
          title: "Indskriv dag p\xE5 m\xE5neden som tal"
        }, null, 40, Ht), [
          [I, m.value.day]
        ])
      ]),
      a("div", Vt, [
        a("label", {
          class: "form-label",
          for: `month_${u(h)}`
        }, " M\xE5ned ", 8, Mt),
        T(a("input", {
          class: "form-input js-calendar-month-input",
          ref_key: "month",
          ref: s,
          onInput: g[4] || (g[4] = ($) => H($, "month")),
          onBlur: g[5] || (g[5] = ($) => V.$emit("dirty", !0)),
          onFocus: g[6] || (g[6] = ($) => {
            var k;
            return (k = $.target) == null ? void 0 : k.select();
          }),
          id: `month_${u(h)}`,
          "onUpdate:modelValue": g[7] || (g[7] = ($) => m.value.month = $),
          type: "tel",
          "data-min": "1",
          "data-max": "12",
          maxlength: "2",
          pattern: "^[0-9]{0,2}$",
          "data-input-regex": "^[0-9]{0,2}$",
          title: "Indskriv m\xE5nedens nummer"
        }, null, 40, $t), [
          [I, m.value.month]
        ])
      ]),
      a("div", wt, [
        a("label", {
          class: "form-label",
          for: `year_${u(h)}`
        }, " \xC5r ", 8, _t),
        T(a("input", {
          class: "form-input js-calendar-year-input",
          onBlur: g[8] || (g[8] = ($) => V.$emit("dirty", !0)),
          onInput: g[9] || (g[9] = ($) => H($, "year")),
          onFocus: g[10] || (g[10] = ($) => {
            var k;
            return (k = $.target) == null ? void 0 : k.select();
          }),
          ref_key: "year",
          ref: n,
          id: `year_${u(h)}`,
          "onUpdate:modelValue": g[11] || (g[11] = ($) => m.value.year = $),
          type: "tel",
          "data-min": "1900",
          "data-max": "3000",
          maxlength: "4",
          pattern: "^[0-9]{0,4}$",
          "data-input-regex": "^[0-9]{0,4}$",
          title: "Indskriv \xE5rstal"
        }, null, 40, xt), [
          [I, m.value.year]
        ])
      ])
    ]));
  }
}), Ct = ["id", "name"], kt = /* @__PURE__ */ v({
  __name: "fds-dato-vaelger",
  props: {
    id: {
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "dirty", "valid"],
  setup(e, { emit: o }) {
    const t = e, { formid: l } = _(t.id), s = M(t.modelValue), n = (h) => {
      const m = Date.parse(h);
      return !Number.isNaN(m);
    }, i = () => o("valid", n(s.value)), c = () => {
      i(), o("update:modelValue", s.value);
    };
    return (h, m) => T((d(), r("input", {
      type: "date",
      class: "form-input form-input-date",
      onInput: c,
      onBlur: m[0] || (m[0] = (f) => h.$emit("dirty", !0)),
      id: u(l),
      name: u(l),
      "onUpdate:modelValue": m[1] || (m[1] = (f) => s.value = f)
    }, null, 40, Ct)), [
      [I, s.value]
    ]);
  }
}), Bt = { class: "details" }, St = { class: "details-summary" }, Et = { class: "details-text" }, At = /* @__PURE__ */ v({
  __name: "fds-detaljer",
  props: {
    header: {
      type: String,
      default: "Mere information"
    }
  },
  setup(e) {
    return (o, t) => (d(), r("details", Bt, [
      a("summary", St, [
        p(o.$slots, "header", {}, () => [
          L(z(e.header), 1)
        ])
      ]),
      a("div", Et, [
        p(o.$slots, "default")
      ])
    ]));
  }
}), Tt = ["name", "id"], Ft = /* @__PURE__ */ v({
  __name: "fds-dropdown",
  props: {
    id: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      required: !1,
      default: ""
    }
  },
  emits: ["update:modelValue", "dirty", "change"],
  setup(e, { emit: o }) {
    const t = e, { formid: l } = _(t.id, !0), s = M(null), n = M(t.modelValue), i = M(!1), c = (m) => o("update:modelValue", (m == null ? void 0 : m.target).value), h = () => {
      i.value = !0, o("dirty", !0);
    };
    return P(() => {
      s.value.dispatchEvent(new Event("change"));
    }), (m, f) => (d(), r("select", R({
      class: ["form-select", { dirty: i.value }],
      name: u(l),
      ref_key: "refElement",
      ref: s,
      id: u(l)
    }, n.value, {
      onChange: c,
      onBlur: h
    }), [
      p(m.$slots, "default")
    ], 16, Tt));
  }
}), It = ["aria-controls", "id", "aria-selected"], jt = ["aria-hidden", "id", "aria-labelledby"], Nt = /* @__PURE__ */ v({
  __name: "fds-faneblad-item",
  props: {
    selected: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      required: !0
    },
    header: {
      type: String,
      default: "Fane"
    }
  },
  emits: ["click", "navigate"],
  setup(e, { emit: o }) {
    var n;
    const t = e, l = () => {
      o("click", t.id), o("navigate", t.id);
    }, s = M((n = t.id) != null ? n : Q());
    return (i, c) => (d(), r(F, null, [
      a("button", {
        "aria-controls": `tabpanel_${s.value}`,
        id: `tab_${s.value}`,
        onClick: l,
        class: x(["tabnav-item", [{ active: e.selected }]]),
        role: "tab",
        "aria-selected": e.selected
      }, [
        p(i.$slots, "header", {}, () => [
          a("span", null, z(e.header), 1)
        ])
      ], 10, It),
      a("section", {
        tabindex: "0",
        class: "tabnav-panel",
        role: "tabpanel",
        "aria-hidden": !e.selected,
        id: `tabpanel_${s.value}`,
        "aria-labelledby": `tab_${s.value}`
      }, [
        p(i.$slots, "default")
      ], 8, jt)
    ], 64));
  }
}), Dt = {}, qt = {
  class: "tabnav",
  role: "tablist"
};
function Rt(e, o) {
  return d(), r("div", qt, [
    p(e.$slots, "default")
  ]);
}
const Pt = /* @__PURE__ */ E(Dt, [["render", Rt]]), Ot = {
  key: 0,
  class: "form-error-message"
}, Zt = /* @__PURE__ */ v({
  __name: "fds-fejlmeddelelse",
  props: {
    auto: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const o = e, t = K(), l = M(j("provideErrorMessage", null)), s = M(j("provideIsValid", !0)), n = w(() => o.auto ? s.value ? null : l.value : null), i = w(() => t.default || n);
    return (c, h) => u(i) ? (d(), r("div", Ot, [
      p(c.$slots, "default", {}, () => [
        L(z(u(n)), 1)
      ])
    ])) : b("", !0);
  }
}), Gt = { class: "alert-heading" }, Ut = /* @__PURE__ */ v({
  __name: "fds-fejlopsummering",
  props: {
    header: {
      type: String,
      default: "Fejlopsummering"
    }
  },
  setup(e) {
    return (o, t) => (d(), O(he, {
      class: "top-space",
      role: "alert",
      "aria-atomic": "true",
      variant: "error",
      showIcon: "",
      closeable: !1
    }, {
      default: N(() => [
        o.$slots.header || e.header ? p(o.$slots, "header", { key: 0 }, () => [
          a("p", Gt, z(e.header), 1)
        ]) : b("", !0),
        p(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Wt = ["id", "name", "accept"], Jt = /* @__PURE__ */ v({
  __name: "fds-file-upload",
  props: {
    id: {
      type: String,
      default: null
    },
    contenttypes: {
      type: Array,
      default: () => ["image/png", "image/jpg", "image/jpeg", ".pdf", ".doc", ".docx", ".odt"]
    },
    removeContentHeaders: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["dirty", "upload", "error"],
  setup(e, { emit: o }) {
    const t = e, { formid: l } = _(t.id), s = M(), n = () => o("dirty", !0), i = () => {
      s.value = null;
    }, c = (h) => {
      n();
      const m = h.target, { files: f } = m;
      if (!f || f.length === 0)
        return;
      [s.value] = f;
      const y = new FileReader();
      y.readAsDataURL(s.value), y.onload = async () => {
        var g, $, k;
        const H = t.removeContentHeaders ? Me(($ = (g = y.result) == null ? void 0 : g.toString()) != null ? $ : "") : (k = y.result) == null ? void 0 : k.toString(), V = {
          filename: f[0].name,
          type: f[0].type,
          size: f[0].size,
          data: H
        };
        try {
          o("upload", V);
        } catch (ee) {
          console.error(ee), o("error", ee);
        }
        i();
      };
    };
    return (h, m) => (d(), r("input", {
      type: "file",
      id: u(l),
      name: u(l),
      onBlur: n,
      onChange: c,
      accept: e.contenttypes.join(",")
    }, null, 40, Wt));
  }
}), Yt = /* @__PURE__ */ v({
  __name: "fds-formgroup",
  props: {
    id: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const o = e, { formid: t } = _(o.id, !0);
    q("formid", t);
    const l = M(j("provideIsValid", null)), s = w(() => {
      var n;
      return (n = l.value) != null ? n : o.isValid;
    });
    return (n, i) => (d(), r("div", {
      class: x(["form-group", { "form-error": u(s) === !1 }]),
      key: u(t)
    }, [
      p(n.$slots, "default", { formid: u(t) })
    ], 2));
  }
}), Kt = {
  href: "javascript:void(0);",
  class: "function-link"
}, Qt = {
  key: 0,
  class: "icon-svg",
  focusable: "false",
  "aria-hidden": "true"
}, Xt = ["xlink:href"], e1 = /* @__PURE__ */ v({
  __name: "fds-funktionslink",
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (o, t) => (d(), r("a", Kt, [
      e.icon && e.icon.length > 0 ? (d(), r("svg", Qt, [
        a("use", {
          "xlink:href": "#" + e.icon
        }, null, 8, Xt)
      ])) : b("", !0),
      p(o.$slots, "default")
    ]));
  }
}), t1 = {}, o1 = { class: "form-hint" };
function l1(e, o) {
  return d(), r("span", o1, [
    p(e.$slots, "default")
  ]);
}
const s1 = /* @__PURE__ */ E(t1, [["render", l1]]), n1 = {}, a1 = { class: "hide-base-svg" }, i1 = /* @__PURE__ */ fe('<svg xmlns="http://www.w3.org/2000/svg"><symbol id="open-in-new" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></symbol><symbol id="home" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path></symbol><symbol id="print" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"></path><circle cx="18" cy="11.5" r="1"></circle></symbol><symbol id="delete" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path></symbol><symbol id="trash-can" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"></path></symbol><symbol id="search" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></symbol><symbol id="report-problem" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></symbol><symbol id="highlight-off" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></symbol><symbol id="info" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></symbol><symbol id="help" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></symbol><symbol id="check-circle" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path></symbol><symbol id="more-horiz" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id="arrow-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 17l5-5-5-5v10z"></path></symbol><symbol id="menu" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></symbol><symbol id="more-vert" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id="chevron-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"></path></symbol><symbol id="first-page" viewBox="0 0 24 24"><path d="M24 0v24H0V0h24z" fill="none" opacity=".87"></path><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"></path></symbol><symbol id="chevron-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></symbol><symbol id="last-page" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"></path><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"></path></symbol><symbol id="arrow-forward" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path></symbol><symbol id="arrow-downward" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></symbol><symbol id="arrow-upward" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></symbol><symbol id="arrow-back" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></symbol><symbol id="arrow-left" viewBox="0 0 24 24"><path d="M24 0v24H0V0h24z" fill="none" opacity=".87"></path><path d="M14 7l-5 5 5 5V7z"></path></symbol><symbol id="subdirectory-arrow-right" viewBox="0 0 24 24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></symbol><symbol id="subdirectory-arrow-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></symbol><symbol id="arrow-drop-down" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 10l5 5 5-5H7z"></path></symbol><symbol id="arrow-drop-up" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 14l5-5 5 5H7z"></path></symbol><symbol id="zoom-in" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"></path></symbol><symbol id="zoom-out" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></symbol><symbol id="fullscreen" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></symbol><symbol id="remove" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 13H5v-2h14v2z"></path></symbol><symbol id="fullscreen-exit" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></symbol><symbol id="sort" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></symbol><symbol id="lock" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0V0z"></path><path d="M0 0h24v24H0V0z" opacity=".87"></path></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></symbol><symbol id="lock-open" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></symbol><symbol id="visibility-off" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"></path></symbol><symbol id="sort-by-alpha" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></symbol><symbol id="expand-less" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"></path></symbol><symbol id="expand-more" viewBox="0 0 24 24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></symbol><symbol id="visibility" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></symbol><symbol id="add" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></symbol><symbol id="sort-table-descending" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M6.1,13.5l5.9,5.9l5.9-5.9H6.1z"></path></symbol><symbol id="sort-table-ascending" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M17.9,10.5L12,4.6l-5.9,5.9H17.9z"></path></symbol><symbol id="sort-table-none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" fill="#1A1A1A" d="M17.9,10.5L12,4.6l-5.9,5.9H17.9z M12,6.7L14.3,9H9.7L12,6.7z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#1A1A1A" d="M6.1,13.5l5.9,5.9l5.9-5.9H6.1z M12,17.3L9.7,15h4.7L12,17.3z"></path></symbol><symbol id="sort-default" viewBox="0 0 24 24"><path d="M13 18H17V16H13V18ZM13 6V8H23V6H13ZM13 13H20V11H13V13Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6L6 2L10 6L7 6L7 18L10 18L7 21L6 22L5 21L2 18L5 18L5 6L2 6Z" fill="black"></path></symbol><symbol id="sort-ascending" viewBox="0 0 24 24"><path d="M13 18H17V16H13V18ZM13 6V8H23V6H13ZM13 13H20V11H13V13Z" fill="black"></path><path d="M6 2L2 6L5 6L5 21L7 21L7 6L10 6L6 2Z" fill="black"></path></symbol><symbol id="sort-descending" viewBox="0 0 24 24"><path d="M13 18H17V16H13V18ZM13 6V8H23V6H13ZM13 13H20V11H13V13Z" fill="black"></path><path d="M6 22L10 18L7 18L7 3L5 3L5 18L2 18L6 22Z" fill="black"></path></symbol><symbol id="file-excel" viewBox="0 0 24 24"><path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M12.9 14.5L15.8 19H14L12 15.6L10 19H8.2L11.1 14.5L8.2 10H10L12 13.4L14 10H15.8L12.9 14.5Z"></path></symbol><symbol id="file-image" viewBox="0 0 24 24"><path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M17,13V19H7L12,14L14,16M10,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,9A1.5,1.5 0 0,1 10,10.5Z"></path></symbol><symbol id="file-pdf" viewBox="0 0 24 24"><path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.9,12.35 10.92,12.31M11.57,13.15C11.17,14.45 10.37,15.84 10.37,15.84C11.22,15.5 13.08,15.11 13.08,15.11C11.94,14.11 11.59,13.16 11.57,13.15M14.71,15.32C14.71,15.32 16.46,15.97 16.5,15.71C16.57,15.44 15.17,15.2 14.71,15.32M9.05,16.81C8.28,17.11 7.54,18.39 7.72,18.39C7.9,18.4 8.63,17.79 9.05,16.81M11.57,11.26C11.57,11.21 12,9.58 11.57,9.53C11.27,9.5 11.56,11.22 11.57,11.26Z"></path></symbol><symbol id="file-word" viewBox="0 0 24 24"><path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M17.35 10L15.25 19H13.85L12.05 12.21L10.25 19H8.85L6.65 10H8.15L9.55 16.81L11.35 10H12.65L14.45 16.81L15.85 10H17.35Z"></path></symbol><symbol id="close" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></symbol><symbol id="hourglass-empty" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></symbol><symbol id="calculator" viewBox="0 0 24 24"><path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z"></path></symbol><symbol id="reply" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></symbol><symbol id="chat" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"></path></symbol><symbol id="insert-invitation" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2 5h-5v5h5v-5z"></path></symbol><symbol id="share" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></symbol><symbol id="file-download" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"></path></g></symbol><symbol id="download-done" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"></path></symbol><symbol id="email" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></symbol><symbol id="feedback" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"></path></symbol><symbol id="person-remove" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M14,8c0-2.21-1.79-4-4-4C7.79,4,6,5.79,6,8c0,2.21,1.79,4,4,4C12.21,12,14,10.21,14,8z M12,8c0,1.1-0.9,2-2,2 c-1.1,0-2-0.9-2-2s0.9-2,2-2C11.1,6,12,6.9,12,8z"></path><path d="M2,18v2h16v-2c0-2.66-5.33-4-8-4C7.33,14,2,15.34,2,18z M4,18c0.2-0.71,3.3-2,6-2c2.69,0,5.77,1.28,6,2H4z"></path><rect height="2" width="6" x="17" y="10"></rect></g></g></symbol><symbol id="flag" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></symbol><symbol id="outlined-flag" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"></path></symbol><symbol id="open-with" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></symbol><symbol id="credit-card" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></symbol><symbol id="settings" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></symbol><symbol id="photo-camera" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></symbol><symbol id="card-text" viewBox="0 0 24 24"><path d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z"></path></symbol><symbol id="content-copy" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></symbol><symbol id="playlist-add-check" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><rect height="2" width="11" x="3" y="10"></rect><rect height="2" width="11" x="3" y="6"></rect><rect height="2" width="7" x="3" y="14"></rect><polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34"></polygon></g></g></symbol><symbol id="folder" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></symbol><symbol id="notifications" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></symbol><symbol id="refresh" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></symbol><symbol id="create-new-folder" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"></path></symbol><symbol id="apps" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></symbol><symbol id="location-on" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></symbol><symbol id="mode" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></symbol><symbol id="send" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"></path></symbol><symbol id="language" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></symbol><symbol id="grade-outline" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"></path></symbol><symbol id="grade" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></symbol><symbol id="contact-support" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path></symbol><symbol id="cached" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></symbol><symbol id="query-builder" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></symbol><symbol id="add-a-photo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"></path></symbol><symbol id="note-add" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path></symbol><symbol id="playlist-add" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z"></path></g></symbol><symbol id="person-add-alt-1" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M11,8c0,1.1-0.9,2-2,2S7,9.1,7,8s0.9-2,2-2S11,6.9,11,8z M1,18v2h16v-2c0-2.66-5.33-4-8-4S1,15.34,1,18z M3,18c0.2-0.71,3.3-2,6-2c2.69,0,5.78,1.28,6,2H3z M20,15v-3h3v-2h-3V7h-2v3h-3v2 h3v3H20z"></path></g></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></symbol><symbol id="upload" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"></path></symbol><symbol id="attach-file" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></symbol><symbol id="forward" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></symbol><symbol id="view-headline" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></symbol><symbol id="vertical-split" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z"></path></symbol><symbol id="palette" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"></path><circle cx="6.5" cy="11.5" r="1.5"></circle><circle cx="9.5" cy="7.5" r="1.5"></circle><circle cx="14.5" cy="7.5" r="1.5"></circle><circle cx="17.5" cy="11.5" r="1.5"></circle></symbol><symbol id="folder-open" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></symbol><symbol id="coronavirus" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"></rect><path d="M9.5,12c0,0.55-0.45,1-1,1s-1-0.45-1-1c0-0.55,0.45-1,1-1S9.5,11.45,9.5,12z M13.75,10c0.55,0,1-0.45,1-1s-0.45-1-1-1 s-1,0.45-1,1S13.2,10,13.75,10z M10.25,10c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S9.7,10,10.25,10z M10.25,14 c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1C11.25,14.45,10.8,14,10.25,14z M22,11.25v1.5c0,0.41-0.34,0.75-0.75,0.75 c-0.41,0-0.75-0.34-0.75-0.75h-1.54c-0.15,1.37-0.69,2.63-1.52,3.65l1.09,1.09l0.01-0.01c0.29-0.29,0.77-0.29,1.06,0 c0.29,0.29,0.29,0.77,0,1.06l-1.06,1.06c-0.29,0.29-0.77,0.29-1.06,0c-0.29-0.29-0.29-0.76-0.01-1.05l-1.09-1.09 c-1.02,0.82-2.27,1.36-3.64,1.51v1.54h0.01c0.41,0,0.75,0.34,0.75,0.75c0,0.41-0.34,0.75-0.75,0.75h-1.5 c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.33-0.74,0.74-0.75v-1.55c-1.37-0.15-2.62-0.69-3.63-1.51l-1.09,1.09l0.01,0.01 c0.29,0.29,0.29,0.77,0,1.06c-0.29,0.29-0.77,0.29-1.06,0L4.4,18.54c-0.29-0.29-0.29-0.77,0-1.06c0.29-0.29,0.76-0.29,1.05-0.01 l1.09-1.09c-0.82-1.02-1.36-2.26-1.5-3.63H3.5c0,0.41-0.34,0.75-0.75,0.75C2.34,13.5,2,13.16,2,12.75v-1.5 c0-0.41,0.34-0.75,0.75-0.75c0.41,0,0.75,0.34,0.75,0.75h1.54c0.15-1.37,0.69-2.61,1.5-3.63L5.45,6.53C5.16,6.81,4.69,6.81,4.4,6.52 c-0.29-0.29-0.29-0.77,0-1.06L5.46,4.4c0.29-0.29,0.77-0.29,1.06,0c0.29,0.29,0.29,0.77,0,1.06L6.51,5.47L7.6,6.56 c1.02-0.82,2.26-1.36,3.63-1.51V3.5c-0.41-0.01-0.74-0.34-0.74-0.75C10.5,2.34,10.84,2,11.25,2h1.5c0.41,0,0.75,0.34,0.75,0.75 c0,0.41-0.34,0.75-0.75,0.75h-0.01v1.54c1.37,0.14,2.62,0.69,3.64,1.51l1.09-1.09c-0.29-0.29-0.28-0.76,0.01-1.05 c0.29-0.29,0.77-0.29,1.06,0l1.06,1.06c0.29,0.29,0.29,0.77,0,1.06s-0.77,0.29-1.06,0l-0.01-0.01L17.44,7.6 c0.82,1.02,1.37,2.27,1.52,3.65h1.54c0-0.41,0.34-0.75,0.75-0.75C21.66,10.5,22,10.84,22,11.25z M17,12c0-2.76-2.24-5-5-5 s-5,2.24-5,5s2.24,5,5,5S17,14.76,17,12z M12,11c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1C13,11.45,12.55,11,12,11z M15.5,11c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1C16.5,11.45,16.05,11,15.5,11z M13.75,14c-0.55,0-1,0.45-1,1 c0,0.55,0.45,1,1,1s1-0.45,1-1C14.75,14.45,14.3,14,13.75,14z"></path></symbol><symbol id="list-alt" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"></path></symbol><symbol id="assignment" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path></symbol><symbol id="payments" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect><path d="M19,14V6c0-1.1-0.9-2-2-2H3C1.9,4,1,4.9,1,6v8c0,1.1,0.9,2,2,2h14C18.1,16,19,15.1,19,14z M17,14H3V6h14V14z M10,7 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S11.66,7,10,7z M23,7v11c0,1.1-0.9,2-2,2H4c0-1,0-0.9,0-2h17V7C22.1,7,22,7,23,7z"></path></g></symbol><symbol id="database" viewBox="0 0 24 24"><path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z"></path></symbol><symbol id="assessment" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></path></symbol><symbol id="map" viewBox="0 0 24 24"><path d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"></path></symbol><symbol id="link" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"></path></symbol><symbol id="person" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></symbol><symbol id="shopping-cart" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id="videocam" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"></path></symbol><symbol id="headphones" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,3c-4.97,0-9,4.03-9,9v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-4v8h4c1.1,0,2-0.9,2-2v-7 C21,7.03,16.97,3,12,3z M7,15v4H5v-4H7z M19,19h-2v-4h2V19z"></path></g></symbol><symbol id="desktop-windows" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"></path></symbol><symbol id="laptop" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><g><path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"></path></g></g></symbol><symbol id="phone-iphone" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></symbol><symbol id="mouse" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"></path></symbol><symbol id="accessibility-new" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></symbol><symbol id="format-list-checks" viewBox="0 0 24 24"><path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"></path></symbol><symbol id="bookmark-border" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></symbol><symbol id="bookmarks" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"></path></symbol><symbol id="card-account-details" viewBox="0 0 24 24"><path d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14"></path></symbol><symbol id="people-alt" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"></path><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"></path><path d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"></path><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"></path></g></g></symbol><symbol id="groups" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"></rect><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"></path></g></symbol><symbol id="forum" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path></symbol><symbol id="insert-drive-file" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"></path></symbol><symbol id="domain" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></symbol><symbol id="face" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"></path></symbol><symbol id="engineering" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z M3,19c0.22-0.72,3.31-2,6-2c2.7,0,5.8,1.29,6,2H3z"></path><path d="M4.74,9H5c0,2.21,1.79,4,4,4s4-1.79,4-4h0.26c0.27,0,0.49-0.22,0.49-0.49V8.49c0-0.27-0.22-0.49-0.49-0.49H13 c0-1.48-0.81-2.75-2-3.45V5.5C11,5.78,10.78,6,10.5,6S10,5.78,10,5.5V4.14C9.68,4.06,9.35,4,9,4S8.32,4.06,8,4.14V5.5 C8,5.78,7.78,6,7.5,6S7,5.78,7,5.5V4.55C5.81,5.25,5,6.52,5,8H4.74C4.47,8,4.25,8.22,4.25,8.49v0.03C4.25,8.78,4.47,9,4.74,9z M11,9c0,1.1-0.9,2-2,2s-2-0.9-2-2H11z"></path><path d="M21.98,6.23l0.93-0.83l-0.75-1.3l-1.19,0.39c-0.14-0.11-0.3-0.2-0.47-0.27L20.25,3h-1.5L18.5,4.22 c-0.17,0.07-0.33,0.16-0.48,0.27L16.84,4.1l-0.75,1.3l0.93,0.83C17,6.4,17,6.58,17.02,6.75L16.09,7.6l0.75,1.3l1.2-0.38 c0.13,0.1,0.28,0.18,0.43,0.25L18.75,10h1.5l0.27-1.22c0.16-0.07,0.3-0.15,0.44-0.25l1.19,0.38l0.75-1.3l-0.93-0.85 C22,6.57,21.99,6.4,21.98,6.23z M19.5,7.75c-0.69,0-1.25-0.56-1.25-1.25s0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25 S20.19,7.75,19.5,7.75z"></path><path d="M19.4,10.79l-0.85,0.28c-0.1-0.08-0.21-0.14-0.33-0.19L18.04,10h-1.07l-0.18,0.87c-0.12,0.05-0.24,0.12-0.34,0.19 l-0.84-0.28l-0.54,0.93l0.66,0.59c-0.01,0.13-0.01,0.25,0,0.37l-0.66,0.61l0.54,0.93l0.86-0.27c0.1,0.07,0.2,0.13,0.31,0.18 L16.96,15h1.07l0.19-0.87c0.11-0.05,0.22-0.11,0.32-0.18l0.85,0.27l0.54-0.93l-0.66-0.61c0.01-0.13,0.01-0.25,0-0.37l0.66-0.59 L19.4,10.79z M17.5,13.39c-0.49,0-0.89-0.4-0.89-0.89c0-0.49,0.4-0.89,0.89-0.89s0.89,0.4,0.89,0.89 C18.39,12.99,17.99,13.39,17.5,13.39z"></path></g></g></symbol><symbol id="account-circle" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></symbol><symbol id="how-to-reg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"></path></symbol><symbol id="support-agent" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"></path></g></g></symbol><symbol id="local-shipping" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></symbol><symbol id="agriculture" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M4,9h5c0-1.1-0.9-2-2-2H4C3.45,7,3,7.45,3,8C3,8.55,3.45,9,4,9z"></path><path d="M22,14.06V8c0-1.1-0.9-2-2-2h-6.29l-1.06-1.06l1.41-1.41l-0.71-0.71L9.82,6.35l0.71,0.71l1.41-1.41L13,6.71V9 c0,1.1-0.9,2-2,2H8.96c-0.22-0.16-0.45-0.3-0.69-0.43l-0.4,0.89l-0.46-0.21l0.4-0.9C7.26,10.13,6.64,10,6,10 c-0.53,0-1.04,0.11-1.52,0.26l0.34,0.91l-0.47,0.18L4,10.42c-1.06,0.46-1.91,1.28-2.43,2.31l0.89,0.4l-0.21,0.46l-0.9-0.4 C1.13,13.74,1,14.36,1,15c0,0.53,0.11,1.04,0.26,1.52l0.91-0.34l0.18,0.47L1.42,17c0.46,1.06,1.28,1.91,2.31,2.43l0.4-0.89 l0.46,0.21l-0.4,0.9C4.74,19.87,5.36,20,6,20c0.53,0,1.04-0.11,1.52-0.26l-0.34-0.91l0.47-0.18L8,19.58 c1.06-0.46,1.91-1.28,2.43-2.31l-0.89-0.4l0.21-0.46l0.9,0.4c0.1-0.26,0.18-0.54,0.24-0.82h5.16C16.03,16.16,16,16.33,16,16.5 c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5C23,15.55,22.62,14.69,22,14.06z M6,18c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S7.66,18,6,18z M10.87,14c-0.04-0.18-0.08-0.35-0.13-0.52l-0.91,0.34l-0.18-0.47L10.58,13c0,0,0.42,0,0.42,0c2.21,0,4-1.79,4-4V8 h5v5.05C19.84,13.03,19.67,13,19.5,13c-0.95,0-1.81,0.38-2.44,1H10.87z M19.5,18c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5S20.33,18,19.5,18z"></path></g></g></symbol><symbol id="school" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></symbol><symbol id="construction" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><rect height="8.48" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)" width="3" x="16.34" y="12.87"></rect><path d="M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z"></path></g></g></symbol><symbol id="science" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M13,11.33L18,18H6l5-6.67V6h2 M15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4C2.71,19.06,3.18,20,4,20h16 c0.82,0,1.29-0.94,0.8-1.6L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4L15.96,4z"></path></g></symbol><symbol id="drive-eta" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l.12-.34h13.77l.11.34V16z"></path><circle cx="7.5" cy="13.5" r="1.5"></circle><circle cx="16.5" cy="13.5" r="1.5"></circle></symbol><symbol id="tune" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></symbol><symbol id="text-format" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></symbol><symbol id="format-size" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"></path></symbol><symbol id="format-bold" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></symbol><symbol id="format-italic" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"></path></symbol><symbol id="format-underlined" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></symbol><symbol id="format-color-text" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M2,20h20v4H2V20z M5.49,17h2.42l1.27-3.58h5.65L16.09,17h2.42L13.25,3h-2.5L5.49,17z M9.91,11.39l2.03-5.79h0.12l2.03,5.79 H9.91z"></path></g></symbol><symbol id="format-color-fill" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16.56,8.94L7.62,0L6.21,1.41l2.38,2.38L3.44,8.94c-0.59,0.59-0.59,1.54,0,2.12l5.5,5.5C9.23,16.85,9.62,17,10,17 s0.77-0.15,1.06-0.44l5.5-5.5C17.15,10.48,17.15,9.53,16.56,8.94z M5.21,10L10,5.21L14.79,10H5.21z M19,11.5c0,0-2,2.17-2,3.5 c0,1.1,0.9,2,2,2s2-0.9,2-2C21,13.67,19,11.5,19,11.5z M2,20h20v4H2V20z"></path></g></symbol><symbol id="format-clear" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 8V5H6.39l3 3h1.83l-.55 1.28 2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"></path></symbol><symbol id="format-list-bulleted" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path></symbol><symbol id="format-list-numbered" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></symbol><symbol id="format-indent-increase" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></symbol><symbol id="format-indent-decrease" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></symbol><symbol id="format-align-center" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></symbol><symbol id="format-align-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></symbol><symbol id="format-align-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></symbol><symbol id="format-align-justify" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></symbol></svg>', 1), d1 = [
  i1
];
function r1(e, o, t, l, s, n) {
  return d(), r("div", a1, d1);
}
const c1 = /* @__PURE__ */ E(n1, [["render", r1]]), h1 = {
  id: "input-type-character-limit-message",
  class: "sr-only"
}, u1 = {
  key: 0,
  class: "form-hint character-limit",
  "aria-hidden": "true"
}, m1 = {
  class: "character-limit-sr-only sr-only",
  "aria-live": "polite"
}, p1 = {
  class: "form-hint character-limit",
  "aria-hidden": "true"
}, v1 = {
  class: "form-hint character-limit limit-exceeded",
  "aria-live": "polite"
}, f1 = {
  class: "character-limit-sr-only sr-only",
  "aria-live": "polite"
}, y1 = /* @__PURE__ */ v({
  __name: "fds-input-limit",
  props: {
    modelValue: {
      type: String,
      default: null
    },
    limit: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    return (o, t) => (d(), r(F, null, [
      a("span", h1, "Du kan indtaste op til " + z(e.limit) + " tegn", 1),
      e.modelValue === null || e.modelValue.length === 0 ? (d(), r("span", u1, " Du kan indtaste op til " + z(e.limit) + " tegn ", 1)) : b("", !0),
      e.modelValue && e.modelValue.length > 0 && e.modelValue.length <= e.limit ? (d(), r(F, { key: 1 }, [
        a("span", m1, " Du har " + z(` ${e.limit - e.modelValue.length}`) + " tegn tilbage ", 1),
        a("span", p1, " Du har " + z(` ${e.limit - e.modelValue.length}`) + " tegn tilbage ", 1)
      ], 64)) : b("", !0),
      e.modelValue && e.modelValue.length > e.limit ? (d(), r(F, { key: 2 }, [
        a("span", v1, " Du har " + z(`${e.modelValue.length - e.limit}`) + " tegn for meget ", 1),
        a("span", f1, " Du har " + z(`${e.modelValue.length - e.limit}`) + " tegn for meget ", 1)
      ], 64)) : b("", !0)
    ], 64));
  }
});
const b1 = {
  key: 0,
  class: "form-input-prefix",
  "aria-hidden": "true"
}, g1 = ["id", "name"], z1 = {
  key: 1,
  class: "form-input-suffix",
  "aria-hidden": "true"
}, H1 = /* @__PURE__ */ v({
  __name: "fds-input-number",
  props: {
    id: {
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
  emits: ["update:modelValue", "dirty", "input"],
  setup(e, { emit: o }) {
    const t = e, l = Z(), { formid: s } = _(t.id, !0), n = M(Number.isNaN(t.modelValue) ? 0 : t.modelValue), i = w(() => t.suffix ? "form-input-wrapper form-input-wrapper--suffix" : t.prefix ? "form-input-wrapper form-input-wrapper--prefix" : "flex-items-center"), c = () => o("update:modelValue", n.value);
    return (h, m) => (d(), r("div", {
      class: x(`${u(i)}`)
    }, [
      e.prefix ? (d(), r("div", b1, z(e.prefix), 1)) : b("", !0),
      T(a("input", R({ class: "form-input d-flex" }, u(l), {
        "onUpdate:modelValue": m[0] || (m[0] = (f) => n.value = f),
        id: u(s),
        name: u(s),
        type: "number",
        onInput: c,
        onBlur: m[1] || (m[1] = (f) => h.$emit("dirty", !0)),
        onFocus: m[2] || (m[2] = (f) => f.target.select())
      }), null, 16, g1), [
        [I, n.value]
      ]),
      e.suffix ? (d(), r("div", z1, z(e.suffix), 1)) : b("", !0)
    ], 2));
  }
}), V1 = {
  key: 0,
  class: "form-input-prefix",
  "aria-hidden": "true"
}, M1 = ["id", "name"], $1 = {
  key: 1,
  class: "form-input-suffix",
  "aria-hidden": "true"
}, w1 = /* @__PURE__ */ v({
  __name: "fds-input",
  props: {
    id: {
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
  emits: ["update:modelValue", "dirty", "input"],
  setup(e, { emit: o }) {
    const t = e, l = Z(), s = K(), { formid: n } = _(t.id, !0), i = M(t.modelValue), c = w(() => t.suffix ? "form-input-wrapper form-input-wrapper--suffix" : t.prefix ? "form-input-wrapper form-input-wrapper--prefix" : s.button ? "search" : "flex-items-center"), h = () => o("update:modelValue", i.value);
    return G(
      () => [t.modelValue],
      () => {
        i.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (m, f) => (d(), r("div", {
      class: x(`${u(c)}`)
    }, [
      e.prefix ? (d(), r("div", V1, z(e.prefix), 1)) : b("", !0),
      T(a("input", R({ class: "form-input d-flex" }, u(l), {
        "onUpdate:modelValue": f[0] || (f[0] = (y) => i.value = y),
        id: u(n),
        name: u(n),
        onInput: h,
        onBlur: f[1] || (f[1] = (y) => m.$emit("dirty", !0))
      }), null, 16, M1), [
        [ye, i.value]
      ]),
      e.suffix ? (d(), r("div", $1, z(e.suffix), 1)) : b("", !0),
      p(m.$slots, "button")
    ], 2));
  }
}), _1 = ["for"], x1 = /* @__PURE__ */ v({
  __name: "fds-label",
  props: {
    forId: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const o = e, { formid: t } = _(o.forId);
    return (l, s) => (d(), r("label", {
      class: "form-label",
      for: u(t)
    }, [
      p(l.$slots, "default")
    ], 8, _1));
  }
}), L1 = /* @__PURE__ */ v({
  __name: "fds-list",
  props: {
    variant: {
      type: String,
      default: null
    },
    ordered: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const o = e, t = w(() => o.variant ? `${o.variant}-list` : "");
    return (l, s) => e.ordered ? (d(), r("ol", {
      key: 1,
      class: x(u(t))
    }, [
      p(l.$slots, "default")
    ], 2)) : (d(), r("ul", {
      key: 0,
      class: x(u(t))
    }, [
      p(l.$slots, "default")
    ], 2));
  }
}), C1 = ["href"], k1 = { key: 0 }, B1 = {
  key: 1,
  class: "sidenav-icon"
}, S1 = {
  class: "icon-svg",
  focusable: "false",
  "aria-hidden": "true"
}, E1 = ["xlink:href"], A1 = {
  key: 2,
  class: "sidenav-information"
}, ae = /* @__PURE__ */ v({
  __name: "fds-menu-item",
  props: {
    id: {
      type: String,
      required: !0
    },
    active: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    index: {
      type: Number,
      default: null
    }
  },
  emits: ["update:modelValue", "navigate"],
  setup(e, { emit: o }) {
    const t = (l, s) => {
      l.preventDefault(), o("navigate", s);
    };
    return (l, s) => (d(), r("li", {
      role: "none",
      class: x([{ "active current": e.active }])
    }, [
      a("a", {
        href: `${e.href ? e.href : "#"}`,
        role: "menuitem",
        class: "d-block menuitem hand",
        onClick: s[0] || (s[0] = (n) => t(n, e.id))
      }, [
        e.index !== null ? (d(), r("span", k1, z(`${e.index}. `), 1)) : b("", !0),
        p(l.$slots, "default"),
        e.icon ? (d(), r("span", B1, [
          (d(), r("svg", S1, [
            a("use", {
              "xlink:href": `#${e.icon}`
            }, null, 8, E1)
          ]))
        ])) : b("", !0),
        e.hint && e.hint.length > 0 ? (d(), r("p", A1, z(e.hint), 1)) : b("", !0)
      ], 8, C1),
      p(l.$slots, "submenu")
    ], 2));
  }
}), T1 = /* @__PURE__ */ v({
  __name: "fds-menu",
  props: {
    variant: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const o = e, t = w(() => o.variant === "submenu" ? "sidenav-sub_list" : "sidenav-list");
    return (l, s) => (d(), r("ul", {
      class: x(u(t)),
      role: "menu"
    }, [
      p(l.$slots, "default")
    ], 2));
  }
}), F1 = ["id", "aria-labelledby"], I1 = ["id"], j1 = { class: "modal-content" }, N1 = { class: "modal-header" }, D1 = ["id"], q1 = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  focusable: "false",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#close" })
], -1), R1 = { class: "modal-body" }, P1 = { class: "modal-footer" }, O1 = /* @__PURE__ */ v({
  __name: "fds-modal",
  props: {
    header: {
      type: String
    },
    id: {
      type: String
    },
    closeable: {
      type: Boolean,
      default: !0
    },
    acceptText: {
      type: String,
      default: "Godkend"
    },
    cancelText: {
      type: String,
      default: "Annuller"
    }
  },
  emits: ["close", "accept", "cancel"],
  setup(e, { expose: o, emit: t }) {
    const l = e, s = M(null), n = re(l.id), i = w(() => s.value), c = () => {
      i.value.showModal();
    }, h = () => {
      i.value.close(), t("close");
    };
    o({
      hideModal: h,
      showModal: c
    }), P(() => {
      l.closeable && i.value.addEventListener("cancel", () => {
        h();
      });
    });
    const m = () => {
      t("accept"), h();
    }, f = () => {
      h(), t("cancel");
    };
    return (y, H) => (d(), r("dialog", {
      id: `${u(n)}`,
      "aria-labelledby": `modal_${u(n)}_title`,
      ref_key: "refDialog",
      ref: s
    }, [
      a("div", {
        class: "fds-modal",
        id: `modal_${u(n)}`,
        "aria-hidden": "false",
        "aria-modal": "true"
      }, [
        a("div", j1, [
          a("div", N1, [
            p(y.$slots, "header", {}, () => [
              a("h2", {
                class: "modal-title",
                id: `modal_${u(n)}_title`
              }, z(e.header), 9, D1),
              e.closeable ? (d(), r("button", {
                key: 0,
                class: "modal-close function-link",
                onClick: h
              }, [
                q1,
                L("Luk ")
              ])) : b("", !0)
            ])
          ]),
          a("div", R1, [
            p(y.$slots, "default")
          ]),
          a("div", P1, [
            p(y.$slots, "footer", {}, () => [
              a("button", {
                class: "button button-primary",
                onClick: m
              }, z(e.acceptText), 1),
              a("button", {
                class: "button button-secondary",
                onClick: f
              }, z(e.cancelText), 1)
            ])
          ])
        ])
      ], 8, I1)
    ], 8, F1));
  }
}), Z1 = {
  key: 1,
  class: "nav-link nav-link-disabled disabled"
}, G1 = /* @__PURE__ */ v({
  __name: "fds-nav-link",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (o, t) => e.disabled ? (d(), r("div", Z1, [
      p(o.$slots, "default")
    ])) : (d(), r("a", {
      key: 0,
      href: "#",
      onClick: t[0] || (t[0] = (l) => l.preventDefault()),
      class: "nav-link",
      role: "menuitem"
    }, [
      a("span", null, [
        p(o.$slots, "default")
      ])
    ]));
  }
}), U1 = { class: "overflow-menu" }, W1 = ["id", "data-js-target"], J1 = {
  class: "icon-svg",
  "aria-hidden": "true",
  focusable: "false"
}, Y1 = ["xlink:href"], K1 = ["id"], Q1 = /* @__PURE__ */ v({
  __name: "fds-overflow-menu",
  props: {
    header: {
      type: String
    },
    id: {
      type: String
    },
    icon: {
      type: String,
      default: "more-vert"
    }
  },
  setup(e) {
    const o = e, { formid: t } = _(o.id, !0);
    return P(async () => {
      new D(document.getElementById(`button_${t.value}`)).init();
    }), (l, s) => (d(), r("div", U1, [
      a("button", {
        class: "button-overflow-menu js-dropdown",
        id: `button_${u(t)}`,
        "data-js-target": `${u(t)}`,
        "aria-haspopup": "true",
        "aria-expanded": !1
      }, [
        a("span", null, [
          L(z(e.header) + " ", 1),
          (d(), r("svg", J1, [
            a("use", {
              "xlink:href": `#${e.icon}`
            }, null, 8, Y1)
          ]))
        ])
      ], 8, W1),
      a("div", {
        class: "overflow-menu-inner collapsed",
        id: u(t),
        "aria-hidden": !0
      }, [
        p(l.$slots, "default")
      ], 8, K1)
    ]));
  }
}), X1 = {
  key: 0,
  class: "pagination",
  id: "pagination-ID",
  "aria-label": "Pagineringseksempel med 12 sider"
}, e2 = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#first-page" })
], -1), t2 = /* @__PURE__ */ a("span", { class: "sr-only" }, " F\xF8rste side ", -1), o2 = [
  e2,
  t2
], l2 = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#chevron-left" })
], -1), s2 = /* @__PURE__ */ a("span", { class: "pagination-nav-link" }, " Forrige ", -1), n2 = [
  l2,
  s2
], a2 = { class: "pagination-mobile" }, i2 = { class: "pagination__items" }, d2 = ["role"], r2 = ["aria-label"], c2 = ["onClick", "aria-label"], h2 = { key: 2 }, u2 = /* @__PURE__ */ a("span", { class: "pagination-nav-link" }, " N\xE6ste ", -1), m2 = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#chevron-right" })
], -1), p2 = [
  u2,
  m2
], v2 = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#last-page" })
], -1), f2 = /* @__PURE__ */ a("span", { class: "sr-only" }, " Sidste side ", -1), y2 = [
  v2,
  f2
], b2 = /* @__PURE__ */ v({
  __name: "fds-paginering",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    skip: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    maxElements: {
      type: Number,
      default: 7
    }
  },
  emits: ["filteredPage", "skip"],
  setup(e, { emit: o }) {
    const t = e, l = M(1), s = M(!0), n = w(() => {
      const f = Math.abs(Math.ceil(t.list.length / t.pageSize));
      return [...Array(f)].map((y) => y + 1);
    }), i = w(() => n.value.length), c = (f = 0) => {
      o("filteredPage", t.list.length > 0 ? t.list.slice(f, f + t.pageSize) : []), o("skip", t.skip > 0 ? t.skip : f);
    }, h = (f, y) => {
      f.preventDefault();
      const H = t.pageSize * (y - 1);
      c(H), l.value = y;
    }, m = () => {
      const f = n.value, y = [], H = Math.ceil(t.maxElements / 2) + 1;
      return f.forEach((V) => {
        if (V === 1 || V === i.value || V === l.value) {
          y.push({ index: V, dotted: !1 });
          return;
        }
        if (l.value < H && V <= H) {
          y.push({ index: V, dotted: !1 });
          return;
        }
        if (l.value - 1 <= V && V <= l.value + 1) {
          y.push({ index: V, dotted: !1 });
          return;
        }
        if (i.value - H < l.value - 1 && i.value - H < V) {
          y.push({ index: V, dotted: !1 });
          return;
        }
        const g = !0;
        y.slice(-1)[0].dotted || y.push({ index: V, dotted: g });
      }), y;
    };
    return G(
      () => t.skip,
      () => {
        t.skip > 0 ? l.value = t.skip / t.pageSize + 1 : l.value = 1, s.value = t.list && t.list.length > t.pageSize, c();
      },
      {
        immediate: !0
      }
    ), (f, y) => s.value ? (d(), r("nav", X1, [
      a("a", {
        href: "javascript:void(0);",
        onClick: y[0] || (y[0] = (H) => h(H, 1)),
        class: "button button-arrow button-first"
      }, o2),
      l.value > 1 ? (d(), r("a", {
        key: 0,
        href: "javascript:void(0);",
        onClick: y[1] || (y[1] = (H) => h(H, l.value - 1)),
        class: "button button-arrow button-previous",
        "aria-label": "Forrige side"
      }, n2)) : b("", !0),
      a("span", a2, " Side " + z(l.value) + " af " + z(u(i)), 1),
      a("ul", i2, [
        (d(!0), r(F, null, de(m(), (H) => (d(), r("li", {
          key: H.index,
          class: x(["pagination-item", [{ "pagination-number": !H.dotted }, { " pagination-overflow": H.dotted }]]),
          role: `${H.dotted ? "presentation" : "list"}`
        }, [
          l.value === H.index ? (d(), r("a", {
            key: 0,
            href: "#",
            onClick: y[2] || (y[2] = (V) => V.preventDefault()),
            class: "button current-page",
            "aria-label": `Side ${H.index}`,
            "aria-current": "page"
          }, z(H.index), 9, r2)) : b("", !0),
          l.value !== H.index && !H.dotted ? (d(), r("a", {
            key: 1,
            href: "#",
            onClick: (V) => h(V, H.index),
            class: "button button-secondary",
            "aria-label": `Side ${H.index}`
          }, z(H.index), 9, c2)) : b("", !0),
          H.dotted ? (d(), r("span", h2, " ... ")) : b("", !0)
        ], 10, d2))), 128))
      ]),
      l.value !== u(i) ? (d(), r("a", {
        key: 1,
        href: "#",
        onClick: y[3] || (y[3] = (H) => h(H, l.value + 1)),
        class: "button button-arrow button-next",
        "aria-label": "N\xE6ste side"
      }, p2)) : b("", !0),
      a("a", {
        href: "#",
        onClick: y[4] || (y[4] = (H) => h(H, u(i))),
        class: "button button-arrow button-last"
      }, y2)
    ])) : b("", !0);
  }
}), g2 = { class: "code" }, z2 = {
  key: 0,
  for: ""
}, H2 = ["textContent"], V2 = ["textContent"], M2 = {
  key: 3,
  class: "code"
}, $2 = {
  key: 4,
  class: "pl-4 pb-0 small-text"
}, w2 = /* @__PURE__ */ v({
  __name: "fds-pre",
  props: {
    json: {
      type: Object,
      default: null
    },
    code: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: "Kode eksempel"
    }
  },
  setup(e) {
    return (o, t) => (d(), r("fieldset", g2, [
      e.header ? (d(), r("legend", z2, z(e.header), 1)) : b("", !0),
      e.json ? (d(), r("pre", {
        key: 1,
        class: "code",
        textContent: z(JSON.stringify(e.json, void 0, 2))
      }, null, 8, H2)) : e.code ? (d(), r("pre", {
        key: 2,
        class: "code",
        textContent: z(e.code)
      }, null, 8, V2)) : (d(), r("pre", M2, [
        L("    "),
        p(o.$slots, "default"),
        L(`
  `)
      ])),
      e.json && JSON.stringify(e.json, void 0, 2).length > 65535 ? (d(), r("span", $2, " JSON indeholder elementer over 65535 tegn og noget data vil ikke blive vist ")) : b("", !0)
    ]));
  }
}), _2 = {
  class: "component-code",
  "aria-hidden": "true"
}, x2 = { key: 0 }, L2 = /* @__PURE__ */ v({
  __name: "fds-preview-code",
  props: {
    header: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (o, t) => (d(), r("div", _2, [
      e.header ? (d(), r("legend", x2, z(e.header), 1)) : b("", !0),
      p(o.$slots, "default")
    ]));
  }
}), C2 = {}, k2 = {
  class: "component-example",
  "aria-label": "Eksempel"
};
function B2(e, o) {
  return d(), r("div", k2, [
    p(e.$slots, "default")
  ]);
}
const S2 = /* @__PURE__ */ E(C2, [["render", B2]]), E2 = {}, A2 = { class: "component-description" };
function T2(e, o) {
  return d(), r("div", A2, [
    p(e.$slots, "default")
  ]);
}
const F2 = /* @__PURE__ */ E(E2, [["render", T2]]), I2 = ["aria-label"], j2 = { class: "component-link" }, N2 = ["href"], D2 = /* @__PURE__ */ v({
  __name: "fds-preview",
  props: {
    header: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    linkText: {
      type: String,
      default: "Design System"
    }
  },
  setup(e) {
    return (o, t) => (d(), r("div", {
      class: "component-preview component-preview-details mb-4",
      "aria-label": e.header
    }, [
      a("div", j2, [
        L(z(e.header) + " ", 1),
        e.href ? (d(), r("a", {
          key: 0,
          href: e.href,
          target: "designsystem"
        }, z(e.linkText), 9, N2)) : b("", !0)
      ]),
      p(o.$slots, "default")
    ], 8, I2));
  }
}), q2 = { class: "form-label" }, R2 = ["id"], P2 = /* @__PURE__ */ v({
  __name: "fds-radio-group",
  props: {
    modelValue: {
      type: String
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
  setup(e, { emit: o }) {
    const t = e, { formid: l } = _(t.id), s = w(() => t.modelValue);
    return q("provideGroupEmit", (i) => {
      o("update:modelValue", i);
    }), q("provideGroupValue", s), (i, c) => (d(), r("fieldset", null, [
      a("legend", q2, [
        p(i.$slots, "label", {}, () => [
          L(z(e.label), 1)
        ])
      ]),
      a("ul", {
        class: "nobullet-list",
        id: u(l)
      }, [
        p(i.$slots, "default")
      ], 8, R2)
    ]));
  }
}), O2 = ["id", "name", "value", "checked"], Z2 = ["for"], G2 = {
  key: 0,
  class: "radio-content mt-2 ml-4 py-4"
}, U2 = /* @__PURE__ */ v({
  __name: "fds-radio-item",
  props: {
    value: {
      type: String,
      required: !0
    },
    index: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  },
  emits: ["dirty"],
  setup(e, { emit: o }) {
    const t = e, l = j("provideGroupEmit"), s = j("provideGroupValue"), { formid: n } = _(t.id), i = re(t.index), c = (h) => {
      o("dirty", !0), l && l((h == null ? void 0 : h.target).value);
    };
    return (h, m) => (d(), r("li", null, [
      a("input", {
        id: "radio-" + u(n) + "-" + u(i),
        type: "radio",
        name: "radio" + u(n),
        value: e.value,
        checked: e.value === u(s),
        onChange: c,
        onBlur: m[0] || (m[0] = (f) => h.$emit("dirty", !0)),
        class: "form-radio radio-large"
      }, null, 40, O2),
      a("label", {
        for: "radio-" + u(n) + "-" + u(i)
      }, [
        p(h.$slots, "default")
      ], 8, Z2),
      h.$slots.content && u(s) === e.value.toString() ? (d(), r("div", G2, [
        p(h.$slots, "content")
      ])) : b("", !0)
    ]));
  }
}), W2 = {
  key: 0,
  class: "spinner-status",
  role: "status"
}, J2 = /* @__PURE__ */ v({
  __name: "fds-spinner",
  props: {
    variant: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const o = Z();
    return (t, l) => (d(), r(F, null, [
      a("div", R({ class: "spinner" }, u(o)), null, 16),
      t.$slots.default ? (d(), r("div", W2, [
        p(t.$slots, "default")
      ])) : b("", !0)
    ], 64));
  }
}), Y2 = { class: "language-switcher" }, K2 = { class: "container" }, Q2 = { "aria-label": "V\xE6lg sprog fra listen " }, X2 = ["onClick", "lang", "aria-label"], eo = {
  key: 0,
  class: "icon-svg",
  focusable: "false",
  "aria-hidden": "true"
}, to = /* @__PURE__ */ a("use", { "xlink:href": "#done" }, null, -1), oo = [
  to
], lo = /* @__PURE__ */ v({
  __name: "fds-sprogvaelger",
  props: {
    modelValue: {
      type: Array,
      required: !0,
      default: () => []
    },
    autoSetLang: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "lang"],
  setup(e, { emit: o }) {
    const t = e, l = M(t.modelValue), s = (n) => {
      l.value = l.value.map((i) => ({ ...i, active: n.lang === i.lang })), t.autoSetLang && document.documentElement.setAttribute("lang", n.lang), o("lang", n.lang), o("update:modelValue", l.value);
    };
    return (n, i) => (d(), r("div", Y2, [
      a("div", K2, [
        a("ul", Q2, [
          (d(!0), r(F, null, de(l.value, (c, h) => (d(), r("li", { key: h }, [
            a("a", {
              href: "javascript:void(0);",
              onClick: (m) => s(c),
              lang: c.lang,
              "aria-label": c.ariaLabel
            }, [
              c.active ? (d(), r("svg", eo, oo)) : b("", !0),
              L(z(c.title), 1)
            ], 8, X2)
          ]))), 128))
        ])
      ])
    ]));
  }
}), so = { class: "row row-bordered no-gutters" }, no = {
  key: 0,
  class: "col-12 col-md-4"
}, ao = { class: "weight-semibold" }, io = {
  key: 1,
  class: "col-12 col-md-2 align-text-md-right"
}, ro = /* @__PURE__ */ v({
  __name: "fds-strukturerede-liste",
  props: {
    header: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const o = e, { formid: t } = _(o.id, !0);
    return q("formid", t), (l, s) => (d(), r("div", so, [
      l.$slots.header || e.header ? (d(), r("div", no, [
        p(l.$slots, "header", {}, () => [
          a("span", ao, z(e.header), 1)
        ])
      ])) : b("", !0),
      a("div", {
        class: x(["col-12", [{ "col-md-6": l.$slots.button }, { "col-md-8": !l.$slots.button }]])
      }, [
        p(l.$slots, "default")
      ], 2),
      l.$slots.button ? (d(), r("div", io, [
        p(l.$slots, "button")
      ])) : b("", !0)
    ]));
  }
}), co = ["id"], ho = ["xlink:href"], uo = /* @__PURE__ */ v({
  __name: "fds-tag",
  props: {
    icon: {
      type: String
    },
    id: {
      type: String
    }
  },
  emits: ["iconClick"],
  setup(e, { emit: o }) {
    const t = e, { formid: l } = _(t.id, !0), s = () => {
      o("iconClick", l.value);
    };
    return (n, i) => (d(), r("button", {
      class: x(["tag", { "tag-icon": e.icon }]),
      id: u(l)
    }, [
      p(n.$slots, "default"),
      e.icon ? (d(), r("svg", {
        key: 0,
        onClick: s,
        class: "icon-svg",
        "aria-hidden": "true"
      }, [
        a("use", {
          "xlink:href": `#${e.icon}`
        }, null, 8, ho)
      ])) : b("", !0)
    ], 10, co));
  }
}), mo = ["maxlength", "rows", "name", "id"], po = /* @__PURE__ */ v({
  __name: "fds-textarea",
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
    maxRows: {
      type: Number,
      default: 10
    },
    rowlength: {
      type: Number,
      default: 80
    },
    maxlength: {
      type: Number,
      default: 4e3
    }
  },
  emits: ["update:modelValue", "dirty", "input"],
  setup(e, { emit: o }) {
    const t = e, { formid: l } = _(t.id, !0), s = M(t.modelValue), n = () => o("update:modelValue", s.value), i = w(() => {
      if (!s.value)
        return t.rows;
      const c = s.value.split(/\r?\n/).length, h = Math.floor(s.value.length / t.rowlength) + 1, m = c > h ? c : h;
      return m < t.maxRows ? m < t.rows ? t.rows : m : t.maxRows;
    });
    return G(
      () => [t.modelValue],
      () => {
        s.value = t.modelValue;
      },
      {
        immediate: !0
      }
    ), (c, h) => T((d(), r("textarea", {
      class: "form-input",
      "onUpdate:modelValue": h[0] || (h[0] = (m) => s.value = m),
      maxlength: e.maxlength,
      rows: u(i),
      name: u(l),
      id: u(l),
      onInput: n,
      onBlur: h[1] || (h[1] = (m) => c.$emit("dirty", !0))
    }, null, 40, mo)), [
      [I, s.value]
    ]);
  }
}), vo = {
  class: "back-to-top-button button button-tertiary d-print-none",
  href: "#top"
}, fo = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#arrow-upward" })
], -1), yo = { class: "d-none d-md-inline-block" }, bo = /* @__PURE__ */ v({
  __name: "fds-til-top",
  setup(e) {
    return (o, t) => (d(), r("a", vo, [
      fo,
      a("span", yo, [
        p(o.$slots, "default", {}, () => [
          L(" Til toppen ")
        ])
      ])
    ]));
  }
}), go = {}, zo = {
  href: "javascript:void(0);",
  class: "back-link"
};
function Ho(e, o) {
  return d(), r("a", zo, [
    p(e.$slots, "default", {}, () => [
      L(" Tilbage ")
    ])
  ]);
}
const Vo = /* @__PURE__ */ E(go, [["render", Ho]]), Mo = ["id"], $o = /* @__PURE__ */ v({
  __name: "fds-toast-container",
  props: {
    id: {
      type: String,
      default: "main-toaster"
    },
    position: {
      type: String,
      default: "top-right"
    }
  },
  setup(e) {
    return (o, t) => (d(), r("div", {
      class: "toast-container",
      id: e.id
    }, null, 8, Mo));
  }
}), wo = /* @__PURE__ */ a("div", {
  class: "toast toast-info show",
  role: "status"
}, [
  /* @__PURE__ */ a("div", { class: "toast-icon" }),
  /* @__PURE__ */ a("div", { class: "toast-message" }, [
    /* @__PURE__ */ a("p", { class: "bold" }, " Du har f\xE5et en besked "),
    /* @__PURE__ */ a("button", { class: "toast-close" }, " Luk "),
    /* @__PURE__ */ a("p", null, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. ")
  ])
], -1), _o = /* @__PURE__ */ v({
  __name: "fds-toast",
  props: {
    target: {
      type: String,
      default: "main-toaster"
    }
  },
  setup(e) {
    return (o, t) => (d(), O(be, {
      to: `#${e.target}`
    }, [
      wo
    ], 8, ["to"]));
  }
}), xo = { class: "form-group mb-4" }, Lo = ["id", "checked", "disabled"], Co = ["for", "data-toggle-off-text", "data-toggle-on-text"], ko = { class: "pl-2 hand" }, Bo = /* @__PURE__ */ v({
  __name: "fds-toggle-switch",
  props: {
    id: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    offText: {
      type: String,
      default: "Fra"
    },
    onText: {
      type: String,
      default: "Til"
    }
  },
  emits: ["update:modelValue", "input"],
  setup(e, { emit: o }) {
    const t = e, l = (n) => o("update:modelValue", (n == null ? void 0 : n.target).checked), { formid: s } = _(t.id, !0);
    return (n, i) => (d(), r("div", xo, [
      a("input", {
        id: u(s),
        type: "checkbox",
        name: "toggle-example",
        checked: e.modelValue,
        onInput: l,
        disabled: e.disabled,
        class: "form-toggle"
      }, null, 40, Lo),
      a("label", {
        for: u(s),
        class: "form-toggle-label",
        "data-toggle-off-text": e.offText,
        "data-toggle-on-text": e.onText
      }, [
        a("section", ko, [
          p(n.$slots, "default", {
            id: u(s),
            class: "hand"
          }, void 0, !0)
        ])
      ], 8, Co)
    ]));
  }
});
const So = /* @__PURE__ */ E(Bo, [["__scopeId", "data-v-895954c8"]]), Eo = ["id", "data-tooltip"], Ao = /* @__PURE__ */ a("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ a("use", { "xlink:href": "#help" })
], -1), To = /* @__PURE__ */ v({
  __name: "fds-tooltip",
  setup(e) {
    const { formid: o } = _(void 0, !0), t = M(null), l = K(), s = w(() => {
      var n;
      try {
        if (l.default && t.value)
          return (n = t.value.innerHTML) != null ? n : "";
      } catch {
        return "";
      }
      return "";
    });
    return P(() => {
      new A(document.getElementById(`tip_${o.value}`)).init();
    }), (n, i) => (d(), r("button", {
      class: "js-tooltip button-unstyled",
      id: `tip_${u(o)}`,
      "data-tooltip": u(s),
      "data-tooltip-trigger": "click"
    }, [
      Ao,
      a("span", {
        class: "sr-only",
        ref_key: "slotText",
        ref: t
      }, [
        p(n.$slots, "default")
      ], 512)
    ], 8, Eo));
  }
}), Fo = { class: "overflow-menu overflow-menu--open-right" }, Io = ["id", "data-js-target"], jo = {
  class: "icon-svg",
  "aria-hidden": "true",
  focusable: "false"
}, No = ["xlink:href"], Do = ["id"], qo = /* @__PURE__ */ v({
  __name: "fds-trinindikator-group",
  props: {
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
  setup(e) {
    const o = e, { formid: t } = _(o.id, !0);
    return P(async () => {
      new D(document.getElementById(`button_${t.value}`)).init();
    }), (l, s) => {
      const n = ie("fds-menu");
      return d(), r("div", Fo, [
        a("button", {
          class: "button-overflow-menu js-dropdown",
          id: `button_${u(t)}`,
          "data-js-target": `#${u(t)}`,
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }, [
          p(l.$slots, "header", {}, () => [
            L(z(e.header), 1)
          ]),
          (d(), r("svg", jo, [
            a("use", {
              "xlink:href": `#${e.icon}`
            }, null, 8, No)
          ]))
        ], 8, Io),
        a("div", {
          class: "overflow-menu-inner",
          id: u(t),
          "aria-hidden": "true"
        }, [
          a("nav", null, [
            W(n, null, {
              default: N(() => [
                p(l.$slots, "default")
              ]),
              _: 3
            })
          ])
        ], 8, Do)
      ]);
    };
  }
});
function Po(e) {
  e.component("fds-trinindikator-group", qo), e.component("fds-modal", O1), e.component("fds-cookiemeddelelse", yt), e.component("fds-overflow-menu", Q1), e.component("fds-strukturerede-liste", ro), e.component("fds-dato-felter", Lt), e.component("fds-dato-vaelger", kt), e.component("fds-toast-container", $o), e.component("fds-toast", _o), e.component("fds-alert", he), e.component("fds-spinner", J2), e.component("fds-faneblad-item", Nt), e.component("fds-faneblade", Pt), e.component("fds-pre", w2), e.component("fds-hint", s1), e.component("fds-list", L1), e.component("fds-badge", Oe), e.component("fds-tag", uo), e.component("fds-til-top", bo), e.component("fds-sprogvaelger", lo), e.component("fds-card", st), e.component("fds-card-group", Je), e.component("fds-input", w1), e.component("fds-input-number", H1), e.component("fds-textarea", po), e.component("fds-icon-collection", c1), e.component("fds-checkbox", dt), e.component("fds-radio-group", P2), e.component("fds-radio-item", U2), e.component("fds-dropdown", Ft), e.component("fds-label", x1), e.component("fds-input-limit", y1), e.component("fds-formgroup", Yt), e.component("fds-fejlmeddelelse", Zt), e.component("fds-fejlopsummering", Ut), e.component("fds-button", We), e.component("fds-button-icon", Ue), e.component("fds-toggle-switch", So), e.component("fds-accordion", Fe), e.component("fds-accordion-group", ze), e.component("fds-file-upload", Jt), e.component("fds-nav-link", G1), e.component("fds-funktionslink", e1), e.component("fds-menu", T1), e.component("fds-menu-item", ae), e.component("fds-trinindikator-item", ae), e.component("fds-tooltip", To), e.component("fds-detaljer", At), e.component("fds-tilbage-link", Vo), e.component("fds-paginering", b2), e.component("fds-preview", D2), e.component("fds-preview-code", L2), e.component("fds-preview-item", F2), e.component("fds-preview-example", S2);
}
export {
  Fe as FdsAccordion,
  ze as FdsAccordionGroup,
  he as FdsAlert,
  Oe as FdsBadge,
  We as FdsButton,
  Ue as FdsButtonIcon,
  st as FdsCard,
  Je as FdsCardGroup,
  dt as FdsCheckbox,
  yt as FdsCookiemeddelelse,
  Lt as FdsDatoFelter,
  kt as FdsDatoVaelger,
  At as FdsDetaljer,
  Ft as FdsDropdown,
  Nt as FdsFanebladItem,
  Pt as FdsFaneblade,
  Zt as FdsFejlmeddelelse,
  Ut as FdsFejlopsummering,
  Jt as FdsFileUpload,
  Yt as FdsFormgroup,
  e1 as FdsFunktionslink,
  s1 as FdsHint,
  c1 as FdsIconCollection,
  w1 as FdsInput,
  y1 as FdsInputLimit,
  H1 as FdsInputNumber,
  x1 as FdsLabel,
  L1 as FdsList,
  T1 as FdsMenu,
  ae as FdsMenuItem,
  O1 as FdsModal,
  G1 as FdsNavLink,
  Q1 as FdsOverflowMenu,
  b2 as FdsPaginering,
  w2 as FdsPre,
  D2 as FdsPreview,
  L2 as FdsPreviewCode,
  S2 as FdsPreviewExample,
  F2 as FdsPreviewItem,
  P2 as FdsRadioGroup,
  U2 as FdsRadioItem,
  J2 as FdsSpinner,
  lo as FdsSprogVaelger,
  ro as FdsStruktureredeListe,
  uo as FdsTag,
  po as FdsTextarea,
  bo as FdsTilTop,
  Vo as FdsTilbageLink,
  _o as FdsToast,
  $o as FdsToastContainer,
  So as FdsToggleSwitch,
  To as FdsTooltip,
  qo as FdsTrinindikatorGroup,
  Po as default
};
