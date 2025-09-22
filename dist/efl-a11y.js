var t = Object.defineProperty,
  e = (e, n, i) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i),
  n = (t, n, i) => e(t, "symbol" != typeof n ? n + "" : n, i);
!(function () {
  "use strict";
  var t,
    e,
    i = { exports: {} },
    r = {};
  function o() {
    if (t) return r;
    t = 1;
    var e = Symbol.for("react.element"),
      n = Symbol.for("react.portal"),
      i = Symbol.for("react.fragment"),
      o = Symbol.for("react.strict_mode"),
      l = Symbol.for("react.profiler"),
      a = Symbol.for("react.provider"),
      s = Symbol.for("react.context"),
      u = Symbol.for("react.forward_ref"),
      c = Symbol.for("react.suspense"),
      f = Symbol.for("react.memo"),
      d = Symbol.for("react.lazy"),
      h = Symbol.iterator,
      p = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      m = {};
    function v(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = m),
        (this.updater = n || p);
    }
    function b() {}
    function w(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = m),
        (this.updater = n || p);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (t, e) {
        if ("object" != typeof t && "function" != typeof t && null != t)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (v.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (b.prototype = v.prototype);
    var y = (w.prototype = new b());
    (y.constructor = w), g(y, v.prototype), (y.isPureReactComponent = !0);
    var k = Array.isArray,
      x = {}.hasOwnProperty,
      S = { current: null },
      M = { key: !0, ref: !0, i: !0, o: !0 };
    function E(t, n, i) {
      var r,
        o = {},
        l = null,
        a = null;
      if (null != n)
        for (r in (void 0 !== n.ref && (a = n.ref),
        void 0 !== n.key && (l = "" + n.key),
        n))
          x.call(n, r) && !M.hasOwnProperty(r) && (o[r] = n[r]);
      var s = arguments.length - 2;
      if (1 === s) o.children = i;
      else if (s > 1) {
        for (var u = Array(s), c = 0; s > c; c++) u[c] = arguments[c + 2];
        o.children = u;
      }
      if (t && t.defaultProps)
        for (r in (s = t.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
      return { $$typeof: e, type: t, key: l, ref: a, props: o, l: S.current };
    }
    function C(t) {
      return "object" == typeof t && null !== t && t.$$typeof === e;
    }
    var A = /\/+/g;
    function I(t, e) {
      return "object" == typeof t && null !== t && null != t.key
        ? (function (t) {
            var e = { "=": "=0", ":": "=2" };
            return (
              "$" +
              t.replace(/[=:]/g, function (t) {
                return e[t];
              })
            );
          })("" + t.key)
        : e.toString(36);
    }
    function T(t, i, r, o, l) {
      var a = typeof t;
      ("undefined" !== a && "boolean" !== a) || (t = null);
      var s = !1;
      if (null === t) s = !0;
      else
        switch (a) {
          case "string":
          case "number":
            s = !0;
            break;
          case "object":
            switch (t.$$typeof) {
              case e:
              case n:
                s = !0;
            }
        }
      if (s)
        return (
          (l = l((s = t))),
          (t = "" === o ? "." + I(s, 0) : o),
          k(l)
            ? ((r = ""),
              null != t && (r = t.replace(A, "$&/") + "/"),
              T(l, i, r, "", function (t) {
                return t;
              }))
            : null != l &&
              (C(l) &&
                (l = (function (t, n) {
                  return {
                    $$typeof: e,
                    type: t.type,
                    key: n,
                    ref: t.ref,
                    props: t.props,
                    l: t.l,
                  };
                })(
                  l,
                  r +
                    (!l.key || (s && s.key === l.key)
                      ? ""
                      : ("" + l.key).replace(A, "$&/") + "/") +
                    t
                )),
              i.push(l)),
          1
        );
      if (((s = 0), (o = "" === o ? "." : o + ":"), k(t)))
        for (var u = 0; u < t.length; u++) {
          var c = o + I((a = t[u]), u);
          s += T(a, i, r, c, l);
        }
      else if (
        ((c = (function (t) {
          return null === t || "object" != typeof t
            ? null
            : "function" == typeof (t = (h && t[h]) || t["@@iterator"])
            ? t
            : null;
        })(t)),
        "function" == typeof c)
      )
        for (t = c.call(t), u = 0; !(a = t.next()).done; )
          s += T((a = a.value), i, r, (c = o + I(a, u++)), l);
      else if ("object" === a)
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" == (i = t + "")
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : i) +
            "). If you meant to render a collection of children, use an array instead."
        );
      return s;
    }
    function L(t, e, n) {
      if (null == t) return t;
      var i = [],
        r = 0;
      return (
        T(t, i, "", "", function (t) {
          return e.call(n, t, r++);
        }),
        i
      );
    }
    function z(t) {
      if (-1 === t.u) {
        var e = t.h;
        (e = e()).then(
          function (e) {
            (0 !== t.u && -1 !== t.u) || ((t.u = 1), (t.h = e));
          },
          function (e) {
            (0 !== t.u && -1 !== t.u) || ((t.u = 2), (t.h = e));
          }
        ),
          -1 === t.u && ((t.u = 0), (t.h = e));
      }
      if (1 === t.u) return t.h.default;
      throw t.h;
    }
    var O = { current: null },
      j = { transition: null },
      F = {
        ReactCurrentDispatcher: O,
        ReactCurrentBatchConfig: j,
        ReactCurrentOwner: S,
      };
    function P() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return (
      (r.Children = {
        map: L,
        forEach: function (t, e, n) {
          L(
            t,
            function () {
              e.apply(this, arguments);
            },
            n
          );
        },
        count: function (t) {
          var e = 0;
          return (
            L(t, function () {
              e++;
            }),
            e
          );
        },
        toArray: function (t) {
          return (
            L(t, function (t) {
              return t;
            }) || []
          );
        },
        only: function (t) {
          if (!C(t))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return t;
        },
      }),
      (r.Component = v),
      (r.Fragment = i),
      (r.Profiler = l),
      (r.PureComponent = w),
      (r.StrictMode = o),
      (r.Suspense = c),
      (r.m = F),
      (r.act = P),
      (r.cloneElement = function (t, n, i) {
        if (null == t)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              t +
              "."
          );
        var r = g({}, t.props),
          o = t.key,
          l = t.ref,
          a = t.l;
        if (null != n) {
          if (
            (void 0 !== n.ref && ((l = n.ref), (a = S.current)),
            void 0 !== n.key && (o = "" + n.key),
            t.type && t.type.defaultProps)
          )
            var s = t.type.defaultProps;
          for (u in n)
            x.call(n, u) &&
              !M.hasOwnProperty(u) &&
              (r[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = i;
        else if (u > 1) {
          s = Array(u);
          for (var c = 0; u > c; c++) s[c] = arguments[c + 2];
          r.children = s;
        }
        return { $$typeof: e, type: t.type, key: o, ref: l, props: r, l: a };
      }),
      (r.createContext = function (t) {
        return (
          ((t = {
            $$typeof: s,
            v: t,
            k: t,
            S: 0,
            Provider: null,
            Consumer: null,
            M: null,
            C: null,
          }).Provider = { $$typeof: a, A: t }),
          (t.Consumer = t)
        );
      }),
      (r.createElement = E),
      (r.createFactory = function (t) {
        var e = E.bind(null, t);
        return (e.type = t), e;
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (t) {
        return { $$typeof: u, render: t };
      }),
      (r.isValidElement = C),
      (r.lazy = function (t) {
        return { $$typeof: d, I: { u: -1, h: t }, T: z };
      }),
      (r.memo = function (t, e) {
        return { $$typeof: f, type: t, compare: void 0 === e ? null : e };
      }),
      (r.startTransition = function (t) {
        var e = j.transition;
        j.transition = {};
        try {
          t();
        } finally {
          j.transition = e;
        }
      }),
      (r.unstable_act = P),
      (r.useCallback = function (t, e) {
        return O.current.useCallback(t, e);
      }),
      (r.useContext = function (t) {
        return O.current.useContext(t);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (t) {
        return O.current.useDeferredValue(t);
      }),
      (r.useEffect = function (t, e) {
        return O.current.useEffect(t, e);
      }),
      (r.useId = function () {
        return O.current.useId();
      }),
      (r.useImperativeHandle = function (t, e, n) {
        return O.current.useImperativeHandle(t, e, n);
      }),
      (r.useInsertionEffect = function (t, e) {
        return O.current.useInsertionEffect(t, e);
      }),
      (r.useLayoutEffect = function (t, e) {
        return O.current.useLayoutEffect(t, e);
      }),
      (r.useMemo = function (t, e) {
        return O.current.useMemo(t, e);
      }),
      (r.useReducer = function (t, e, n) {
        return O.current.useReducer(t, e, n);
      }),
      (r.useRef = function (t) {
        return O.current.useRef(t);
      }),
      (r.useState = function (t) {
        return O.current.useState(t);
      }),
      (r.useSyncExternalStore = function (t, e, n) {
        return O.current.useSyncExternalStore(t, e, n);
      }),
      (r.useTransition = function () {
        return O.current.useTransition();
      }),
      (r.version = "18.3.1"),
      r
    );
  }
  function l() {
    return e || ((e = 1), (i.exports = o())), i.exports;
  }
  var a = l();
  const s = (function (t) {
    return t && t.L && {}.hasOwnProperty.call(t, "default") ? t.default : t;
  })(a);
  var u,
    c,
    f,
    d,
    h,
    p = {},
    g = { exports: {} },
    m = {},
    v = { exports: {} },
    b = {};
  function w() {
    if (f) return m;
    f = 1;
    var t = l(),
      e = (function () {
        return (
          c ||
            ((c = 1),
            (v.exports = (function () {
              return (
                u ||
                  ((u = 1),
                  (function (t) {
                    function e(t, e) {
                      var n = t.length;
                      t.push(e);
                      t: for (; n > 0; ) {
                        var i = (n - 1) >>> 1,
                          o = t[i];
                        if (0 >= r(o, e)) break t;
                        (t[i] = e), (t[n] = o), (n = i);
                      }
                    }
                    function n(t) {
                      return 0 === t.length ? null : t[0];
                    }
                    function i(t) {
                      if (0 === t.length) return null;
                      var e = t[0],
                        n = t.pop();
                      if (n !== e) {
                        t[0] = n;
                        t: for (var i = 0, o = t.length, l = o >>> 1; l > i; ) {
                          var a = 2 * (i + 1) - 1,
                            s = t[a],
                            u = a + 1,
                            c = t[u];
                          if (0 > r(s, n))
                            o > u && 0 > r(c, s)
                              ? ((t[i] = c), (t[u] = n), (i = u))
                              : ((t[i] = s), (t[a] = n), (i = a));
                          else {
                            if (u >= o || r(c, n) >= 0) break t;
                            (t[i] = c), (t[u] = n), (i = u);
                          }
                        }
                      }
                      return e;
                    }
                    function r(t, e) {
                      var n = t.sortIndex - e.sortIndex;
                      return 0 !== n ? n : t.id - e.id;
                    }
                    if (
                      "object" == typeof performance &&
                      "function" == typeof performance.now
                    ) {
                      var o = performance;
                      t.unstable_now = function () {
                        return o.now();
                      };
                    } else {
                      var l = Date,
                        a = l.now();
                      t.unstable_now = function () {
                        return l.now() - a;
                      };
                    }
                    var s = [],
                      u = [],
                      c = 1,
                      f = null,
                      d = 3,
                      h = !1,
                      p = !1,
                      g = !1,
                      m = "function" == typeof setTimeout ? setTimeout : null,
                      v =
                        "function" == typeof clearTimeout ? clearTimeout : null,
                      b =
                        "undefined" != typeof setImmediate
                          ? setImmediate
                          : null;
                    function w(t) {
                      for (var r = n(u); null !== r; ) {
                        if (null === r.callback) i(u);
                        else {
                          if (r.startTime > t) break;
                          i(u), (r.sortIndex = r.expirationTime), e(s, r);
                        }
                        r = n(u);
                      }
                    }
                    function y(t) {
                      if (((g = !1), w(t), !p))
                        if (null !== n(s)) (p = !0), O(k);
                        else {
                          var e = n(u);
                          null !== e && j(y, e.startTime - t);
                        }
                    }
                    function k(e, r) {
                      (p = !1), g && ((g = !1), v(E), (E = -1)), (h = !0);
                      var o = d;
                      try {
                        for (
                          w(r), f = n(s);
                          null !== f && (f.expirationTime <= r || (e && !I()));

                        ) {
                          var l = f.callback;
                          if ("function" == typeof l) {
                            (f.callback = null), (d = f.priorityLevel);
                            var a = l(f.expirationTime <= r);
                            (r = t.unstable_now()),
                              "function" == typeof a
                                ? (f.callback = a)
                                : f === n(s) && i(s),
                              w(r);
                          } else i(s);
                          f = n(s);
                        }
                        if (null !== f) var c = !0;
                        else {
                          var m = n(u);
                          null !== m && j(y, m.startTime - r), (c = !1);
                        }
                        return c;
                      } finally {
                        (f = null), (d = o), (h = !1);
                      }
                    }
                    "undefined" != typeof navigator &&
                      void 0 !== navigator.scheduling &&
                      void 0 !== navigator.scheduling.isInputPending &&
                      navigator.scheduling.isInputPending.bind(
                        navigator.scheduling
                      );
                    var x,
                      S = !1,
                      M = null,
                      E = -1,
                      C = 5,
                      A = -1;
                    function I() {
                      return t.unstable_now() - A >= C;
                    }
                    function T() {
                      if (null !== M) {
                        var e = t.unstable_now();
                        A = e;
                        var n = !0;
                        try {
                          n = M(!0, e);
                        } finally {
                          n ? x() : ((S = !1), (M = null));
                        }
                      } else S = !1;
                    }
                    if ("function" == typeof b)
                      x = function () {
                        b(T);
                      };
                    else if ("undefined" != typeof MessageChannel) {
                      var L = new MessageChannel(),
                        z = L.port2;
                      (L.port1.onmessage = T),
                        (x = function () {
                          z.postMessage(null);
                        });
                    } else
                      x = function () {
                        m(T, 0);
                      };
                    function O(t) {
                      (M = t), S || ((S = !0), x());
                    }
                    function j(e, n) {
                      E = m(function () {
                        e(t.unstable_now());
                      }, n);
                    }
                    (t.unstable_IdlePriority = 5),
                      (t.unstable_ImmediatePriority = 1),
                      (t.unstable_LowPriority = 4),
                      (t.unstable_NormalPriority = 3),
                      (t.unstable_Profiling = null),
                      (t.unstable_UserBlockingPriority = 2),
                      (t.unstable_cancelCallback = function (t) {
                        t.callback = null;
                      }),
                      (t.unstable_continueExecution = function () {
                        p || h || ((p = !0), O(k));
                      }),
                      (t.unstable_forceFrameRate = function (t) {
                        0 > t || t > 125
                          ? void 0
                          : (C = t > 0 ? Math.floor(1e3 / t) : 5);
                      }),
                      (t.unstable_getCurrentPriorityLevel = function () {
                        return d;
                      }),
                      (t.unstable_getFirstCallbackNode = function () {
                        return n(s);
                      }),
                      (t.unstable_next = function (t) {
                        switch (d) {
                          case 1:
                          case 2:
                          case 3:
                            var e = 3;
                            break;
                          default:
                            e = d;
                        }
                        var n = d;
                        d = e;
                        try {
                          return t();
                        } finally {
                          d = n;
                        }
                      }),
                      (t.unstable_pauseExecution = function () {}),
                      (t.unstable_requestPaint = function () {}),
                      (t.unstable_runWithPriority = function (t, e) {
                        switch (t) {
                          case 1:
                          case 2:
                          case 3:
                          case 4:
                          case 5:
                            break;
                          default:
                            t = 3;
                        }
                        var n = d;
                        d = t;
                        try {
                          return e();
                        } finally {
                          d = n;
                        }
                      }),
                      (t.unstable_scheduleCallback = function (i, r, o) {
                        var l = t.unstable_now();
                        switch (
                          ((o =
                            "object" == typeof o &&
                            null !== o &&
                            "number" == typeof (o = o.delay) &&
                            o > 0
                              ? l + o
                              : l),
                          i)
                        ) {
                          case 1:
                            var a = -1;
                            break;
                          case 2:
                            a = 250;
                            break;
                          case 5:
                            a = 1073741823;
                            break;
                          case 4:
                            a = 1e4;
                            break;
                          default:
                            a = 5e3;
                        }
                        return (
                          (i = {
                            id: c++,
                            callback: r,
                            priorityLevel: i,
                            startTime: o,
                            expirationTime: (a = o + a),
                            sortIndex: -1,
                          }),
                          o > l
                            ? ((i.sortIndex = o),
                              e(u, i),
                              null === n(s) &&
                                i === n(u) &&
                                (g ? (v(E), (E = -1)) : (g = !0), j(y, o - l)))
                            : ((i.sortIndex = a),
                              e(s, i),
                              p || h || ((p = !0), O(k))),
                          i
                        );
                      }),
                      (t.unstable_shouldYield = I),
                      (t.unstable_wrapCallback = function (t) {
                        var e = d;
                        return function () {
                          var n = d;
                          d = e;
                          try {
                            return t.apply(this, arguments);
                          } finally {
                            d = n;
                          }
                        };
                      });
                  })(b)),
                b
              );
            })())),
          v.exports
        );
      })();
    function n(t) {
      for (
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
          n = 1;
        arguments.length > n;
        n++
      )
        e += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var i = new Set(),
      r = {};
    function o(t, e) {
      a(t, e), a(t + "Capture", e);
    }
    function a(t, e) {
      for (r[t] = e, t = 0; t < e.length; t++) i.add(e[t]);
    }
    var s = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      d = {}.hasOwnProperty,
      h =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      p = {},
      g = {};
    function w(t, e, n, i, r, o, l) {
      (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
        (this.attributeName = i),
        (this.attributeNamespace = r),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l);
    }
    var y = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (t) {
        y[t] = new w(t, 0, !1, t, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (t) {
        var e = t[0];
        y[e] = new w(e, 1, !1, t[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        t
      ) {
        y[t] = new w(t, 2, !1, t.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (t) {
        y[t] = new w(t, 2, !1, t, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (t) {
          y[t] = new w(t, 3, !1, t.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (t) {
        y[t] = new w(t, 3, !0, t, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (t) {
        y[t] = new w(t, 4, !1, t, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (t) {
        y[t] = new w(t, 6, !1, t, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (t) {
        y[t] = new w(t, 5, !1, t.toLowerCase(), null, !1, !1);
      });
    var k = /[\-:]([a-z])/g;
    function x(t) {
      return t[1].toUpperCase();
    }
    function S(t, e, n, i) {
      var r = y.hasOwnProperty(e) ? y[e] : null;
      (null !== r
        ? 0 !== r.type
        : i ||
          2 >= e.length ||
          ("o" !== e[0] && "O" !== e[0]) ||
          ("n" !== e[1] && "N" !== e[1])) &&
        ((function (t, e, n, i) {
          if (
            null == e ||
            (function (t, e, n, i) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof e) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !i &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (t = t.toLowerCase().slice(0, 5)) &&
                        "aria-" !== t)
                  );
                default:
                  return !1;
              }
            })(t, e, n, i)
          )
            return !0;
          if (i) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !e;
              case 4:
                return !1 === e;
              case 5:
                return isNaN(e);
              case 6:
                return isNaN(e) || 1 > e;
            }
          return !1;
        })(e, n, r, i) && (n = null),
        i || null === r
          ? (function (t) {
              return (
                !!d.call(g, t) ||
                (!d.call(p, t) && (h.test(t) ? (g[t] = !0) : ((p[t] = !0), !1)))
              );
            })(e) &&
            (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
          : r.mustUseProperty
          ? (t[r.propertyName] = null === n ? 3 !== r.type && "" : n)
          : ((e = r.attributeName),
            (i = r.attributeNamespace),
            null === n
              ? t.removeAttribute(e)
              : ((n =
                  3 === (r = r.type) || (4 === r && !0 === n) ? "" : "" + n),
                i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (t) {
        var e = t.replace(k, x);
        y[e] = new w(e, 1, !1, t, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (t) {
          var e = t.replace(k, x);
          y[e] = new w(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
        var e = t.replace(k, x);
        y[e] = new w(
          e,
          1,
          !1,
          t,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (t) {
        y[t] = new w(t, 1, !1, t.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new w(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (t) {
        y[t] = new w(t, 1, !1, t.toLowerCase(), null, !0, !0);
      });
    var M = t.m,
      E = Symbol.for("react.element"),
      C = Symbol.for("react.portal"),
      A = Symbol.for("react.fragment"),
      I = Symbol.for("react.strict_mode"),
      T = Symbol.for("react.profiler"),
      L = Symbol.for("react.provider"),
      z = Symbol.for("react.context"),
      O = Symbol.for("react.forward_ref"),
      j = Symbol.for("react.suspense"),
      F = Symbol.for("react.suspense_list"),
      P = Symbol.for("react.memo"),
      R = Symbol.for("react.lazy"),
      _ = Symbol.for("react.offscreen"),
      D = Symbol.iterator;
    function N(t) {
      return null === t || "object" != typeof t
        ? null
        : "function" == typeof (t = (D && t[D]) || t["@@iterator"])
        ? t
        : null;
    }
    var $,
      H = Object.assign;
    function V(t) {
      if (void 0 === $)
        try {
          throw Error();
        } catch (n) {
          var e = n.stack.trim().match(/\n( *(at )?)/);
          $ = (e && e[1]) || "";
        }
      return "\n" + $ + t;
    }
    var B = !1;
    function G(t, e) {
      if (!t || B) return "";
      B = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (e)
          if (
            (Object.defineProperty(
              (e = function () {
                throw Error();
              }).prototype,
              "props",
              {
                set: function () {
                  throw Error();
                },
              }
            ),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(e, []);
            } catch (u) {
              var i = u;
            }
            Reflect.construct(t, [], e);
          } else {
            try {
              e.call();
            } catch (u) {
              i = u;
            }
            t.call(e.prototype);
          }
        else {
          try {
            throw Error();
          } catch (u) {
            i = u;
          }
          t();
        }
      } catch (u) {
        if (u && i && "string" == typeof u.stack) {
          for (
            var r = u.stack.split("\n"),
              o = i.stack.split("\n"),
              l = r.length - 1,
              a = o.length - 1;
            l >= 1 && a >= 0 && r[l] !== o[a];

          )
            a--;
          for (; l >= 1 && a >= 0; l--, a--)
            if (r[l] !== o[a]) {
              if (1 !== l || 1 !== a)
                do {
                  if ((l--, 0 > --a || r[l] !== o[a])) {
                    var s = "\n" + r[l].replace(" at new ", " at ");
                    return (
                      t.displayName &&
                        s.includes("<anonymous>") &&
                        (s = s.replace("<anonymous>", t.displayName)),
                      s
                    );
                  }
                } while (l >= 1 && a >= 0);
              break;
            }
        }
      } finally {
        (B = !1), (Error.prepareStackTrace = n);
      }
      return (t = t ? t.displayName || t.name : "") ? V(t) : "";
    }
    function K(t) {
      switch (t.tag) {
        case 5:
          return V(t.type);
        case 16:
          return V("Lazy");
        case 13:
          return V("Suspense");
        case 19:
          return V("SuspenseList");
        case 0:
        case 2:
        case 15:
          return G(t.type, !1);
        case 11:
          return G(t.type.render, !1);
        case 1:
          return G(t.type, !0);
        default:
          return "";
      }
    }
    function U(t) {
      if (null == t) return null;
      if ("function" == typeof t) return t.displayName || t.name || null;
      if ("string" == typeof t) return t;
      switch (t) {
        case A:
          return "Fragment";
        case C:
          return "Portal";
        case T:
          return "Profiler";
        case I:
          return "StrictMode";
        case j:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if ("object" == typeof t)
        switch (t.$$typeof) {
          case z:
            return (t.displayName || "Context") + ".Consumer";
          case L:
            return (t.A.displayName || "Context") + ".Provider";
          case O:
            var e = t.render;
            return (
              (t = t.displayName) ||
                (t =
                  "" !== (t = e.displayName || e.name || "")
                    ? "ForwardRef(" + t + ")"
                    : "ForwardRef"),
              t
            );
          case P:
            return null !== (e = t.displayName || null)
              ? e
              : U(t.type) || "Memo";
          case R:
            (e = t.I), (t = t.T);
            try {
              return U(t(e));
            } catch (n) {}
        }
      return null;
    }
    function W(t) {
      var e = t.type;
      switch (t.tag) {
        case 24:
          return "Cache";
        case 9:
          return (e.displayName || "Context") + ".Consumer";
        case 10:
          return (e.A.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (t = (t = e.render).displayName || t.name || ""),
            e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return U(e);
        case 8:
          return e === I ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
      }
      return null;
    }
    function Y(t) {
      switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return t;
        default:
          return "";
      }
    }
    function q(t) {
      var e = t.type;
      return (
        (t = t.nodeName) &&
        "input" === t.toLowerCase() &&
        ("checkbox" === e || "radio" === e)
      );
    }
    function X(t) {
      t.O ||
        (t.O = (function (t) {
          var e = q(t) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            i = "" + t[e];
          if (
            !t.hasOwnProperty(e) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var r = n.get,
              o = n.set;
            return (
              Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                  return r.call(this);
                },
                set: function (t) {
                  (i = "" + t), o.call(this, t);
                },
              }),
              Object.defineProperty(t, e, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return i;
                },
                setValue: function (t) {
                  i = "" + t;
                },
                stopTracking: function () {
                  (t.O = null), delete t[e];
                },
              }
            );
          }
        })(t));
    }
    function Z(t) {
      if (!t) return !1;
      var e = t.O;
      if (!e) return !0;
      var n = e.getValue(),
        i = "";
      return (
        t && (i = q(t) ? (t.checked ? "true" : "false") : t.value),
        (t = i) !== n && (e.setValue(t), !0)
      );
    }
    function J(t) {
      if (
        void 0 ===
        (t = t || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch (e) {
        return t.body;
      }
    }
    function Q(t, e) {
      var n = e.checked;
      return H({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : t.j.initialChecked,
      });
    }
    function tt(t, e) {
      var n = null == e.defaultValue ? "" : e.defaultValue,
        i = null != e.checked ? e.checked : e.defaultChecked;
      (n = Y(null != e.value ? e.value : n)),
        (t.j = {
          initialChecked: i,
          initialValue: n,
          controlled:
            "checkbox" === e.type || "radio" === e.type
              ? null != e.checked
              : null != e.value,
        });
    }
    function et(t, e) {
      null != (e = e.checked) && S(t, "checked", e, !1);
    }
    function nt(t, e) {
      et(t, e);
      var n = Y(e.value),
        i = e.type;
      if (null != n)
        "number" === i
          ? ((0 === n && "" === t.value) || t.value != n) && (t.value = "" + n)
          : t.value !== "" + n && (t.value = "" + n);
      else if ("submit" === i || "reset" === i)
        return t.removeAttribute("value"), void 0;
      e.hasOwnProperty("value")
        ? rt(t, e.type, n)
        : e.hasOwnProperty("defaultValue") && rt(t, e.type, Y(e.defaultValue)),
        null == e.checked &&
          null != e.defaultChecked &&
          (t.defaultChecked = !!e.defaultChecked);
    }
    function it(t, e, n) {
      if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (
          !(
            ("submit" !== i && "reset" !== i) ||
            (void 0 !== e.value && null !== e.value)
          )
        )
          return;
        (e = "" + t.j.initialValue),
          n || e === t.value || (t.value = e),
          (t.defaultValue = e);
      }
      "" !== (n = t.name) && (t.name = ""),
        (t.defaultChecked = !!t.j.initialChecked),
        "" !== n && (t.name = n);
    }
    function rt(t, e, n) {
      ("number" === e && J(t.ownerDocument) === t) ||
        (null == n
          ? (t.defaultValue = "" + t.j.initialValue)
          : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
    }
    var ot = Array.isArray;
    function lt(t, e, n, i) {
      if (((t = t.options), e)) {
        e = {};
        for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
        for (n = 0; n < t.length; n++)
          (r = e.hasOwnProperty("$" + t[n].value)),
            t[n].selected !== r && (t[n].selected = r),
            r && i && (t[n].defaultSelected = !0);
      } else {
        for (n = "" + Y(n), e = null, r = 0; r < t.length; r++) {
          if (t[r].value === n)
            return (
              (t[r].selected = !0), i && (t[r].defaultSelected = !0), void 0
            );
          null !== e || t[r].disabled || (e = t[r]);
        }
        null !== e && (e.selected = !0);
      }
    }
    function at(t, e) {
      if (null != e.dangerouslySetInnerHTML) throw Error(n(91));
      return H({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t.j.initialValue,
      });
    }
    function st(t, e) {
      var i = e.value;
      if (null == i) {
        if (((i = e.children), (e = e.defaultValue), null != i)) {
          if (null != e) throw Error(n(92));
          if (ot(i)) {
            if (i.length > 1) throw Error(n(93));
            i = i[0];
          }
          e = i;
        }
        null == e && (e = ""), (i = e);
      }
      t.j = { initialValue: Y(i) };
    }
    function ut(t, e) {
      var n = Y(e.value),
        i = Y(e.defaultValue);
      null != n &&
        ((n = "" + n) !== t.value && (t.value = n),
        null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)),
        null != i && (t.defaultValue = "" + i);
    }
    function ct(t) {
      var e = t.textContent;
      e === t.j.initialValue && "" !== e && null !== e && (t.value = e);
    }
    function ft(t) {
      switch (t) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function dt(t, e) {
      return null == t || "http://www.w3.org/1999/xhtml" === t
        ? ft(e)
        : "http://www.w3.org/2000/svg" === t && "foreignObject" === e
        ? "http://www.w3.org/1999/xhtml"
        : t;
    }
    var ht,
      pt,
      gt =
        ((pt = function (t, e) {
          if (
            "http://www.w3.org/2000/svg" !== t.namespaceURI ||
            "innerHTML" in t
          )
            t.innerHTML = e;
          else {
            for (
              (ht = ht || document.createElement("div")).innerHTML =
                "<svg>" + e.valueOf().toString() + "</svg>",
                e = ht.firstChild;
              t.firstChild;

            )
              t.removeChild(t.firstChild);
            for (; e.firstChild; ) t.appendChild(e.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, e, n, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return pt(t, e);
              });
            }
          : pt);
    function mt(t, e) {
      if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && 3 === n.nodeType)
          return (n.nodeValue = e), void 0;
      }
      t.textContent = e;
    }
    var vt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      bt = ["Webkit", "ms", "Moz", "O"];
    function wt(t, e, n) {
      return null == e || "boolean" == typeof e || "" === e
        ? ""
        : n ||
          "number" != typeof e ||
          0 === e ||
          (vt.hasOwnProperty(t) && vt[t])
        ? ("" + e).trim()
        : e + "px";
    }
    function yt(t, e) {
      for (var n in ((t = t.style), e))
        if (e.hasOwnProperty(n)) {
          var i = 0 === n.indexOf("--"),
            r = wt(n, e[n], i);
          "float" === n && (n = "cssFloat"),
            i ? t.setProperty(n, r) : (t[n] = r);
        }
    }
    Object.keys(vt).forEach(function (t) {
      bt.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (vt[e] = vt[t]);
      });
    });
    var kt = H(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function xt(t, e) {
      if (e) {
        if (kt[t] && (null != e.children || null != e.dangerouslySetInnerHTML))
          throw Error(n(137, t));
        if (null != e.dangerouslySetInnerHTML) {
          if (null != e.children) throw Error(n(60));
          if (
            "object" != typeof e.dangerouslySetInnerHTML ||
            !("F" in e.dangerouslySetInnerHTML)
          )
            throw Error(n(61));
        }
        if (null != e.style && "object" != typeof e.style) throw Error(n(62));
      }
    }
    function St(t, e) {
      if (-1 === t.indexOf("-")) return "string" == typeof e.is;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Mt = null;
    function Et(t) {
      return (
        (t = t.target || t.srcElement || window).correspondingUseElement &&
          (t = t.correspondingUseElement),
        3 === t.nodeType ? t.parentNode : t
      );
    }
    var Ct = null,
      At = null,
      It = null;
    function Tt(t) {
      if ((t = Sr(t))) {
        if ("function" != typeof Ct) throw Error(n(280));
        var e = t.stateNode;
        e && ((e = Er(e)), Ct(t.stateNode, t.type, e));
      }
    }
    function Lt(t) {
      At ? (It ? It.push(t) : (It = [t])) : (At = t);
    }
    function zt() {
      if (At) {
        var t = At,
          e = It;
        if (((It = At = null), Tt(t), e))
          for (t = 0; t < e.length; t++) Tt(e[t]);
      }
    }
    function Ot(t, e) {
      return t(e);
    }
    function jt() {}
    var Ft = !1;
    function Pt(t, e, n) {
      if (Ft) return t(e, n);
      Ft = !0;
      try {
        return Ot(t, e, n);
      } finally {
        (Ft = !1), (null !== At || null !== It) && (jt(), zt());
      }
    }
    function Rt(t, e) {
      var i = t.stateNode;
      if (null === i) return null;
      var r = Er(i);
      if (null === r) return null;
      i = r[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (t = t.type) ||
              "input" === t ||
              "select" === t ||
              "textarea" === t
            )),
            (t = !r);
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (i && "function" != typeof i) throw Error(n(231, e, typeof i));
      return i;
    }
    var _t = !1;
    if (s)
      try {
        var Dt = {};
        Object.defineProperty(Dt, "passive", {
          get: function () {
            _t = !0;
          },
        }),
          window.addEventListener("test", Dt, Dt),
          window.removeEventListener("test", Dt, Dt);
      } catch (pt) {
        _t = !1;
      }
    function Nt(t, e, n, i, r, o, l, a, s) {
      var u = [].slice.call(arguments, 3);
      try {
        e.apply(n, u);
      } catch (c) {
        this.onError(c);
      }
    }
    var $t = !1,
      Ht = null,
      Vt = !1,
      Bt = null,
      Gt = {
        onError: function (t) {
          ($t = !0), (Ht = t);
        },
      };
    function Kt(t, e, n, i, r, o, l, a, s) {
      ($t = !1), (Ht = null), Nt.apply(Gt, arguments);
    }
    function Ut(t, e, i, r, o, l, a, s, u) {
      if ((Kt.apply(this, arguments), $t)) {
        if (!$t) throw Error(n(198));
        var c = Ht;
        ($t = !1), (Ht = null), Vt || ((Vt = !0), (Bt = c));
      }
    }
    function Wt(t) {
      var e = t,
        n = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do {
          !!(4098 & (e = t).flags) && (n = e.return), (t = e.return);
        } while (t);
      }
      return 3 === e.tag ? n : null;
    }
    function Yt(t) {
      if (13 === t.tag) {
        var e = t.memoizedState;
        if (
          (null === e && null !== (t = t.alternate) && (e = t.memoizedState),
          null !== e)
        )
          return e.dehydrated;
      }
      return null;
    }
    function qt(t) {
      if (Wt(t) !== t) throw Error(n(188));
    }
    function Xt(t) {
      return null !==
        (t = (function (t) {
          var e = t.alternate;
          if (!e) {
            if (null === (e = Wt(t))) throw Error(n(188));
            return e !== t ? null : t;
          }
          for (var i = t, r = e; ; ) {
            var o = i.return;
            if (null === o) break;
            var l = o.alternate;
            if (null === l) {
              if (null !== (r = o.return)) {
                i = r;
                continue;
              }
              break;
            }
            if (o.child === l.child) {
              for (l = o.child; l; ) {
                if (l === i) return qt(o), t;
                if (l === r) return qt(o), e;
                l = l.sibling;
              }
              throw Error(n(188));
            }
            if (i.return !== r.return) (i = o), (r = l);
            else {
              for (var a = !1, s = o.child; s; ) {
                if (s === i) {
                  (a = !0), (i = o), (r = l);
                  break;
                }
                if (s === r) {
                  (a = !0), (r = o), (i = l);
                  break;
                }
                s = s.sibling;
              }
              if (!a) {
                for (s = l.child; s; ) {
                  if (s === i) {
                    (a = !0), (i = l), (r = o);
                    break;
                  }
                  if (s === r) {
                    (a = !0), (r = l), (i = o);
                    break;
                  }
                  s = s.sibling;
                }
                if (!a) throw Error(n(189));
              }
            }
            if (i.alternate !== r) throw Error(n(190));
          }
          if (3 !== i.tag) throw Error(n(188));
          return i.stateNode.current === i ? t : e;
        })(t))
        ? Zt(t)
        : null;
    }
    function Zt(t) {
      if (5 === t.tag || 6 === t.tag) return t;
      for (t = t.child; null !== t; ) {
        var e = Zt(t);
        if (null !== e) return e;
        t = t.sibling;
      }
      return null;
    }
    var Jt = e.unstable_scheduleCallback,
      Qt = e.unstable_cancelCallback,
      te = e.unstable_shouldYield,
      ee = e.unstable_requestPaint,
      ne = e.unstable_now,
      ie = e.unstable_getCurrentPriorityLevel,
      re = e.unstable_ImmediatePriority,
      oe = e.unstable_UserBlockingPriority,
      le = e.unstable_NormalPriority,
      ae = e.unstable_LowPriority,
      se = e.unstable_IdlePriority,
      ue = null,
      ce = null,
      fe = Math.clz32
        ? Math.clz32
        : function (t) {
            return 0 == (t >>>= 0) ? 32 : (31 - ((de(t) / he) | 0)) | 0;
          },
      de = Math.log,
      he = Math.LN2,
      pe = 64,
      ge = 4194304;
    function me(t) {
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & t;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & t;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return t;
      }
    }
    function ve(t, e) {
      var n = t.pendingLanes;
      if (0 === n) return 0;
      var i = 0,
        r = t.suspendedLanes,
        o = t.pingedLanes,
        l = 268435455 & n;
      if (0 !== l) {
        var a = l & ~r;
        0 !== a ? (i = me(a)) : 0 !== (o &= l) && (i = me(o));
      } else 0 !== (l = n & ~r) ? (i = me(l)) : 0 !== o && (i = me(o));
      if (0 === i) return 0;
      if (
        0 !== e &&
        e !== i &&
        0 === (e & r) &&
        ((r = i & -i) >= (o = e & -e) || (16 === r && 4194240 & o))
      )
        return e;
      if ((4 & i && (i |= 16 & n), 0 !== (e = t.entangledLanes)))
        for (t = t.entanglements, e &= i; e > 0; )
          (r = 1 << (n = 31 - fe(e))), (i |= t[n]), (e &= ~r);
      return i;
    }
    function be(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
          return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        default:
          return -1;
      }
    }
    function we(t) {
      return 0 != (t = -1073741825 & t.pendingLanes)
        ? t
        : 1073741824 & t
        ? 1073741824
        : 0;
    }
    function ye() {
      var t = pe;
      return !(4194240 & (pe <<= 1)) && (pe = 64), t;
    }
    function ke(t) {
      for (var e = [], n = 0; 31 > n; n++) e.push(t);
      return e;
    }
    function xe(t, e, n) {
      (t.pendingLanes |= e),
        536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        ((t = t.eventTimes)[(e = 31 - fe(e))] = n);
    }
    function Se(t, e) {
      var n = (t.entangledLanes |= e);
      for (t = t.entanglements; n; ) {
        var i = 31 - fe(n),
          r = 1 << i;
        (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
      }
    }
    var Me = 0;
    function Ee(t) {
      return (t &= -t) > 1 ? (t > 4 ? (268435455 & t ? 16 : 536870912) : 4) : 1;
    }
    var Ce,
      Ae,
      Ie,
      Te,
      Le,
      ze = !1,
      Oe = [],
      je = null,
      Fe = null,
      Pe = null,
      Re = new Map(),
      _e = new Map(),
      De = [],
      Ne =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function $e(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          je = null;
          break;
        case "dragenter":
        case "dragleave":
          Fe = null;
          break;
        case "mouseover":
        case "mouseout":
          Pe = null;
          break;
        case "pointerover":
        case "pointerout":
          Re.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          _e.delete(e.pointerId);
      }
    }
    function He(t, e, n, i, r, o) {
      return null === t || t.nativeEvent !== o
        ? ((t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: o,
            targetContainers: [r],
          }),
          null !== e && null !== (e = Sr(e)) && Ae(e),
          t)
        : ((t.eventSystemFlags |= i),
          (e = t.targetContainers),
          null !== r && -1 === e.indexOf(r) && e.push(r),
          t);
    }
    function Ve(t) {
      var e = xr(t.target);
      if (null !== e) {
        var n = Wt(e);
        if (null !== n)
          if (13 === (e = n.tag)) {
            if (null !== (e = Yt(n)))
              return (
                (t.blockedOn = e),
                Le(t.priority, function () {
                  Ie(n);
                }),
                void 0
              );
          } else if (3 === e && n.stateNode.current.memoizedState.isDehydrated)
            return (
              (t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null),
              void 0
            );
      }
      t.blockedOn = null;
    }
    function Be(t) {
      if (null !== t.blockedOn) return !1;
      for (var e = t.targetContainers; e.length > 0; ) {
        var n = tn(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (null !== n)
          return null !== (e = Sr(n)) && Ae(e), (t.blockedOn = n), !1;
        var i = new (n = t.nativeEvent).constructor(n.type, n);
        (Mt = i), n.target.dispatchEvent(i), (Mt = null), e.shift();
      }
      return !0;
    }
    function Ge(t, e, n) {
      Be(t) && n.delete(e);
    }
    function Ke() {
      (ze = !1),
        null !== je && Be(je) && (je = null),
        null !== Fe && Be(Fe) && (Fe = null),
        null !== Pe && Be(Pe) && (Pe = null),
        Re.forEach(Ge),
        _e.forEach(Ge);
    }
    function Ue(t, n) {
      t.blockedOn === n &&
        ((t.blockedOn = null),
        ze ||
          ((ze = !0),
          e.unstable_scheduleCallback(e.unstable_NormalPriority, Ke)));
    }
    function We(t) {
      function e(e) {
        return Ue(e, t);
      }
      if (Oe.length > 0) {
        Ue(Oe[0], t);
        for (var n = 1; Oe.length > n; n++) {
          var i = Oe[n];
          i.blockedOn === t && (i.blockedOn = null);
        }
      }
      for (
        null !== je && Ue(je, t),
          null !== Fe && Ue(Fe, t),
          null !== Pe && Ue(Pe, t),
          Re.forEach(e),
          _e.forEach(e),
          n = 0;
        n < De.length;
        n++
      )
        (i = De[n]).blockedOn === t && (i.blockedOn = null);
      for (; De.length > 0 && null === (n = De[0]).blockedOn; )
        Ve(n), null === n.blockedOn && De.shift();
    }
    var Ye = M.ReactCurrentBatchConfig,
      qe = !0;
    function Xe(t, e, n, i) {
      var r = Me,
        o = Ye.transition;
      Ye.transition = null;
      try {
        (Me = 1), Je(t, e, n, i);
      } finally {
        (Me = r), (Ye.transition = o);
      }
    }
    function Ze(t, e, n, i) {
      var r = Me,
        o = Ye.transition;
      Ye.transition = null;
      try {
        (Me = 4), Je(t, e, n, i);
      } finally {
        (Me = r), (Ye.transition = o);
      }
    }
    function Je(t, e, n, i) {
      if (qe) {
        var r = tn(t, e, n, i);
        if (null === r) qi(t, e, i, Qe, n), $e(t, i);
        else if (
          (function (t, e, n, i, r) {
            switch (e) {
              case "focusin":
                return (je = He(je, t, e, n, i, r)), !0;
              case "dragenter":
                return (Fe = He(Fe, t, e, n, i, r)), !0;
              case "mouseover":
                return (Pe = He(Pe, t, e, n, i, r)), !0;
              case "pointerover":
                var o = r.pointerId;
                return Re.set(o, He(Re.get(o) || null, t, e, n, i, r)), !0;
              case "gotpointercapture":
                return (
                  (o = r.pointerId),
                  _e.set(o, He(_e.get(o) || null, t, e, n, i, r)),
                  !0
                );
            }
            return !1;
          })(r, t, e, n, i)
        )
          i.stopPropagation();
        else if (($e(t, i), 4 & e && Ne.indexOf(t) > -1)) {
          for (; null !== r; ) {
            var o = Sr(r);
            if (
              (null !== o && Ce(o),
              null === (o = tn(t, e, n, i)) && qi(t, e, i, Qe, n),
              o === r)
            )
              break;
            r = o;
          }
          null !== r && i.stopPropagation();
        } else qi(t, e, i, null, n);
      }
    }
    var Qe = null;
    function tn(t, e, n, i) {
      if (((Qe = null), null !== (t = xr((t = Et(i))))))
        if (null === (e = Wt(t))) t = null;
        else if (13 === (n = e.tag)) {
          if (null !== (t = Yt(e))) return t;
          t = null;
        } else if (3 === n) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return 3 === e.tag ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      return (Qe = t), null;
    }
    function en(t) {
      switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ie()) {
            case re:
              return 1;
            case oe:
              return 4;
            case le:
            case ae:
              return 16;
            case se:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var nn = null,
      rn = null,
      on = null;
    function ln() {
      if (on) return on;
      var t,
        e,
        n = rn,
        i = n.length,
        r = "value" in nn ? nn.value : nn.textContent,
        o = r.length;
      for (t = 0; i > t && n[t] === r[t]; t++);
      var l = i - t;
      for (e = 1; l >= e && n[i - e] === r[o - e]; e++);
      return (on = r.slice(t, e > 1 ? 1 - e : void 0));
    }
    function an(t) {
      var e = t.keyCode;
      return (
        "charCode" in t
          ? 0 === (t = t.charCode) && 13 === e && (t = 13)
          : (t = e),
        10 === t && (t = 13),
        32 > t && 13 !== t ? 0 : t
      );
    }
    function sn() {
      return !0;
    }
    function un() {
      return !1;
    }
    function cn(t) {
      function e(e, n, i, r, o) {
        for (var l in ((this.P = e),
        (this.R = i),
        (this.type = n),
        (this.nativeEvent = r),
        (this.target = o),
        (this.currentTarget = null),
        t))
          t.hasOwnProperty(l) && ((e = t[l]), (this[l] = e ? e(r) : r[l]));
        return (
          (this.isDefaultPrevented = (
            null != r.defaultPrevented
              ? r.defaultPrevented
              : !1 === r.returnValue
          )
            ? sn
            : un),
          (this.isPropagationStopped = un),
          this
        );
      }
      return (
        H(e.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t &&
              (t.preventDefault
                ? t.preventDefault()
                : "unknown" != typeof t.returnValue && (t.returnValue = !1),
              (this.isDefaultPrevented = sn));
          },
          stopPropagation: function () {
            var t = this.nativeEvent;
            t &&
              (t.stopPropagation
                ? t.stopPropagation()
                : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0),
              (this.isPropagationStopped = sn));
          },
          persist: function () {},
          isPersistent: sn,
        }),
        e
      );
    }
    var fn,
      dn,
      hn,
      pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      gn = cn(pn),
      mn = H({}, pn, { view: 0, detail: 0 }),
      vn = cn(mn),
      bn = H({}, mn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ln,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
          return void 0 === t.relatedTarget
            ? t.fromElement === t.srcElement
              ? t.toElement
              : t.fromElement
            : t.relatedTarget;
        },
        movementX: function (t) {
          return "movementX" in t
            ? t.movementX
            : (t !== hn &&
                (hn && "mousemove" === t.type
                  ? ((fn = t.screenX - hn.screenX),
                    (dn = t.screenY - hn.screenY))
                  : (dn = fn = 0),
                (hn = t)),
              fn);
        },
        movementY: function (t) {
          return "movementY" in t ? t.movementY : dn;
        },
      }),
      wn = cn(bn),
      yn = cn(H({}, bn, { dataTransfer: 0 })),
      kn = cn(H({}, mn, { relatedTarget: 0 })),
      xn = cn(
        H({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Sn = H({}, pn, {
        clipboardData: function (t) {
          return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
      }),
      Mn = cn(Sn),
      En = cn(H({}, pn, { data: 0 })),
      Cn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      An = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      In = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Tn(t) {
      var e = this.nativeEvent;
      return e.getModifierState
        ? e.getModifierState(t)
        : !!(t = In[t]) && !!e[t];
    }
    function Ln() {
      return Tn;
    }
    var zn = H({}, mn, {
        key: function (t) {
          if (t.key) {
            var e = Cn[t.key] || t.key;
            if ("Unidentified" !== e) return e;
          }
          return "keypress" === t.type
            ? 13 === (t = an(t))
              ? "Enter"
              : String.fromCharCode(t)
            : "keydown" === t.type || "keyup" === t.type
            ? An[t.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ln,
        charCode: function (t) {
          return "keypress" === t.type ? an(t) : 0;
        },
        keyCode: function (t) {
          return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
        },
        which: function (t) {
          return "keypress" === t.type
            ? an(t)
            : "keydown" === t.type || "keyup" === t.type
            ? t.keyCode
            : 0;
        },
      }),
      On = cn(zn),
      jn = cn(
        H({}, bn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Fn = cn(
        H({}, mn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Ln,
        })
      ),
      Pn = cn(H({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Rn = H({}, bn, {
        deltaX: function (t) {
          return "deltaX" in t
            ? t.deltaX
            : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
        },
        deltaY: function (t) {
          return "deltaY" in t
            ? t.deltaY
            : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      _n = cn(Rn),
      Dn = [9, 13, 27, 32],
      Nn = s && "CompositionEvent" in window,
      $n = null;
    s && "documentMode" in document && ($n = document.documentMode);
    var Hn = s && "TextEvent" in window && !$n,
      Vn = s && (!Nn || ($n && $n > 8 && 11 >= $n)),
      Bn = " ",
      Gn = !1;
    function Kn(t, e) {
      switch (t) {
        case "keyup":
          return -1 !== Dn.indexOf(e.keyCode);
        case "keydown":
          return 229 !== e.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Un(t) {
      return "object" == typeof (t = t.detail) && "data" in t ? t.data : null;
    }
    var Wn = !1,
      Yn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function qn(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return "input" === e ? !!Yn[t.type] : "textarea" === e;
    }
    function Xn(t, e, n, i) {
      Lt(i),
        (e = Zi(e, "onChange")).length > 0 &&
          ((n = new gn("onChange", "change", null, n, i)),
          t.push({ event: n, listeners: e }));
    }
    var Zn = null,
      Jn = null;
    function Qn(t) {
      Bi(t, 0);
    }
    function ti(t) {
      if (Z(Mr(t))) return t;
    }
    function ei(t, e) {
      if ("change" === t) return e;
    }
    var ni = !1;
    if (s) {
      var ii;
      if (s) {
        var ri = "oninput" in document;
        if (!ri) {
          var oi = document.createElement("div");
          oi.setAttribute("oninput", "return;"),
            (ri = "function" == typeof oi.oninput);
        }
        ii = ri;
      } else ii = !1;
      ni = ii && (!document.documentMode || document.documentMode > 9);
    }
    function li() {
      Zn && (Zn.detachEvent("onpropertychange", ai), (Jn = Zn = null));
    }
    function ai(t) {
      if ("value" === t.propertyName && ti(Jn)) {
        var e = [];
        Xn(e, Jn, t, Et(t)), Pt(Qn, e);
      }
    }
    function si(t, e, n) {
      "focusin" === t
        ? (li(), (Jn = n), (Zn = e).attachEvent("onpropertychange", ai))
        : "focusout" === t && li();
    }
    function ui(t) {
      if ("selectionchange" === t || "keyup" === t || "keydown" === t)
        return ti(Jn);
    }
    function ci(t, e) {
      if ("click" === t) return ti(e);
    }
    function fi(t, e) {
      if ("input" === t || "change" === t) return ti(e);
    }
    var di =
      "function" == typeof Object.is
        ? Object.is
        : function (t, e) {
            return (
              (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
            );
          };
    function hi(t, e) {
      if (di(t, e)) return !0;
      if (
        "object" != typeof t ||
        null === t ||
        "object" != typeof e ||
        null === e
      )
        return !1;
      var n = Object.keys(t),
        i = Object.keys(e);
      if (n.length !== i.length) return !1;
      for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!d.call(e, r) || !di(t[r], e[r])) return !1;
      }
      return !0;
    }
    function pi(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function gi(t, e) {
      var n,
        i = pi(t);
      for (t = 0; i; ) {
        if (3 === i.nodeType) {
          if (((n = t + i.textContent.length), e >= t && n >= e))
            return { node: i, offset: e - t };
          t = n;
        }
        t: {
          for (; i; ) {
            if (i.nextSibling) {
              i = i.nextSibling;
              break t;
            }
            i = i.parentNode;
          }
          i = void 0;
        }
        i = pi(i);
      }
    }
    function mi(t, e) {
      return (
        !(!t || !e) &&
        (t === e ||
          ((!t || 3 !== t.nodeType) &&
            (e && 3 === e.nodeType
              ? mi(t, e.parentNode)
              : "contains" in t
              ? t.contains(e)
              : !!t.compareDocumentPosition &&
                !!(16 & t.compareDocumentPosition(e)))))
      );
    }
    function vi() {
      for (var t = window, e = J(); e instanceof t.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof e.contentWindow.location.href;
        } catch (i) {
          n = !1;
        }
        if (!n) break;
        e = J((t = e.contentWindow).document);
      }
      return e;
    }
    function bi(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        e &&
        (("input" === e &&
          ("text" === t.type ||
            "search" === t.type ||
            "tel" === t.type ||
            "url" === t.type ||
            "password" === t.type)) ||
          "textarea" === e ||
          "true" === t.contentEditable)
      );
    }
    function wi(t) {
      var e = vi(),
        n = t.focusedElem,
        i = t.selectionRange;
      if (
        e !== n &&
        n &&
        n.ownerDocument &&
        mi(n.ownerDocument.documentElement, n)
      ) {
        if (null !== i && bi(n))
          if (
            ((e = i.start),
            void 0 === (t = i.end) && (t = e),
            "selectionStart" in n)
          )
            (n.selectionStart = e),
              (n.selectionEnd = Math.min(t, n.value.length));
          else if (
            (t = ((e = n.ownerDocument || document) && e.defaultView) || window)
              .getSelection
          ) {
            t = t.getSelection();
            var r = n.textContent.length,
              o = Math.min(i.start, r);
            (i = void 0 === i.end ? o : Math.min(i.end, r)),
              !t.extend && o > i && ((r = i), (i = o), (o = r)),
              (r = gi(n, o));
            var l = gi(n, i);
            r &&
              l &&
              (1 !== t.rangeCount ||
                t.anchorNode !== r.node ||
                t.anchorOffset !== r.offset ||
                t.focusNode !== l.node ||
                t.focusOffset !== l.offset) &&
              ((e = e.createRange()).setStart(r.node, r.offset),
              t.removeAllRanges(),
              o > i
                ? (t.addRange(e), t.extend(l.node, l.offset))
                : (e.setEnd(l.node, l.offset), t.addRange(e)));
          }
        for (e = [], t = n; (t = t.parentNode); )
          1 === t.nodeType &&
            e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
        for (
          "function" == typeof n.focus && n.focus(), n = 0;
          n < e.length;
          n++
        )
          ((t = e[n]).element.scrollLeft = t.left),
            (t.element.scrollTop = t.top);
      }
    }
    var yi = s && "documentMode" in document && 11 >= document.documentMode,
      ki = null,
      xi = null,
      Si = null,
      Mi = !1;
    function Ei(t, e, n) {
      var i =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      Mi ||
        null == ki ||
        ki !== J(i) ||
        ((i =
          "selectionStart" in (i = ki) && bi(i)
            ? { start: i.selectionStart, end: i.selectionEnd }
            : {
                anchorNode: (i = (
                  (i.ownerDocument && i.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: i.anchorOffset,
                focusNode: i.focusNode,
                focusOffset: i.focusOffset,
              }),
        (Si && hi(Si, i)) ||
          ((Si = i),
          (i = Zi(xi, "onSelect")).length > 0 &&
            ((e = new gn("onSelect", "select", null, e, n)),
            t.push({ event: e, listeners: i }),
            (e.target = ki))));
    }
    function Ci(t, e) {
      var n = {};
      return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n["Webkit" + t] = "webkit" + e),
        (n["Moz" + t] = "moz" + e),
        n
      );
    }
    var Ai = {
        animationend: Ci("Animation", "AnimationEnd"),
        animationiteration: Ci("Animation", "AnimationIteration"),
        animationstart: Ci("Animation", "AnimationStart"),
        transitionend: Ci("Transition", "TransitionEnd"),
      },
      Ii = {},
      Ti = {};
    function Li(t) {
      if (Ii[t]) return Ii[t];
      if (!Ai[t]) return t;
      var e,
        n = Ai[t];
      for (e in n) if (n.hasOwnProperty(e) && e in Ti) return (Ii[t] = n[e]);
      return t;
    }
    s &&
      ((Ti = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Ai.animationend.animation,
        delete Ai.animationiteration.animation,
        delete Ai.animationstart.animation),
      "TransitionEvent" in window || delete Ai.transitionend.transition);
    var zi = Li("animationend"),
      Oi = Li("animationiteration"),
      ji = Li("animationstart"),
      Fi = Li("transitionend"),
      Pi = new Map(),
      Ri =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function _i(t, e) {
      Pi.set(t, e), o(e, [t]);
    }
    for (var Di = 0; Di < Ri.length; Di++) {
      var Ni = Ri[Di];
      _i(Ni.toLowerCase(), "on" + (Ni[0].toUpperCase() + Ni.slice(1)));
    }
    _i(zi, "onAnimationEnd"),
      _i(Oi, "onAnimationIteration"),
      _i(ji, "onAnimationStart"),
      _i("dblclick", "onDoubleClick"),
      _i("focusin", "onFocus"),
      _i("focusout", "onBlur"),
      _i(Fi, "onTransitionEnd"),
      a("onMouseEnter", ["mouseout", "mouseover"]),
      a("onMouseLeave", ["mouseout", "mouseover"]),
      a("onPointerEnter", ["pointerout", "pointerover"]),
      a("onPointerLeave", ["pointerout", "pointerover"]),
      o(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      o(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      o("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      o(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      o(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      o(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var $i =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Hi = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat($i)
      );
    function Vi(t, e, n) {
      var i = t.type || "unknown-event";
      (t.currentTarget = n), Ut(i, e, void 0, t), (t.currentTarget = null);
    }
    function Bi(t, e) {
      e = !!(4 & e);
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = i.event;
        i = i.listeners;
        t: {
          var o = void 0;
          if (e)
            for (var l = i.length - 1; l >= 0; l--) {
              var a = i[l],
                s = a.instance,
                u = a.currentTarget;
              if (((a = a.listener), s !== o && r.isPropagationStopped()))
                break t;
              Vi(r, a, u), (o = s);
            }
          else
            for (l = 0; l < i.length; l++) {
              if (
                ((s = (a = i[l]).instance),
                (u = a.currentTarget),
                (a = a.listener),
                s !== o && r.isPropagationStopped())
              )
                break t;
              Vi(r, a, u), (o = s);
            }
        }
      }
      if (Vt) throw ((t = Bt), (Vt = !1), (Bt = null), t);
    }
    function Gi(t, e) {
      var n = e[wr];
      void 0 === n && (n = e[wr] = new Set());
      var i = t + "__bubble";
      n.has(i) || (Yi(e, t, 2, !1), n.add(i));
    }
    function Ki(t, e, n) {
      var i = 0;
      e && (i |= 4), Yi(n, t, i, e);
    }
    var Ui = "_reactListening" + Math.random().toString(36).slice(2);
    function Wi(t) {
      if (!t[Ui]) {
        (t[Ui] = !0),
          i.forEach(function (e) {
            "selectionchange" !== e &&
              (Hi.has(e) || Ki(e, !1, t), Ki(e, !0, t));
          });
        var e = 9 === t.nodeType ? t : t.ownerDocument;
        null === e || e[Ui] || ((e[Ui] = !0), Ki("selectionchange", !1, e));
      }
    }
    function Yi(t, e, n, i) {
      switch (en(e)) {
        case 1:
          var r = Xe;
          break;
        case 4:
          r = Ze;
          break;
        default:
          r = Je;
      }
      (n = r.bind(null, e, n, t)),
        (r = void 0),
        !_t ||
          ("touchstart" !== e && "touchmove" !== e && "wheel" !== e) ||
          (r = !0),
        i
          ? void 0 !== r
            ? t.addEventListener(e, n, { capture: !0, passive: r })
            : t.addEventListener(e, n, !0)
          : void 0 !== r
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1);
    }
    function qi(t, e, n, i, r) {
      var o = i;
      if (!(1 & e || 2 & e || null === i))
        t: for (;;) {
          if (null === i) return;
          var l = i.tag;
          if (3 === l || 4 === l) {
            var a = i.stateNode.containerInfo;
            if (a === r || (8 === a.nodeType && a.parentNode === r)) break;
            if (4 === l)
              for (l = i.return; null !== l; ) {
                var s = l.tag;
                if (
                  (3 === s || 4 === s) &&
                  ((s = l.stateNode.containerInfo) === r ||
                    (8 === s.nodeType && s.parentNode === r))
                )
                  return;
                l = l.return;
              }
            for (; null !== a; ) {
              if (null === (l = xr(a))) return;
              if (5 === (s = l.tag) || 6 === s) {
                i = o = l;
                continue t;
              }
              a = a.parentNode;
            }
          }
          i = i.return;
        }
      Pt(function () {
        var i = o,
          r = Et(n),
          l = [];
        t: {
          var a = Pi.get(t);
          if (void 0 !== a) {
            var s = gn,
              u = t;
            switch (t) {
              case "keypress":
                if (0 === an(n)) break t;
              case "keydown":
              case "keyup":
                s = On;
                break;
              case "focusin":
                (u = "focus"), (s = kn);
                break;
              case "focusout":
                (u = "blur"), (s = kn);
                break;
              case "beforeblur":
              case "afterblur":
                s = kn;
                break;
              case "click":
                if (2 === n.button) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                s = wn;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                s = yn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                s = Fn;
                break;
              case zi:
              case Oi:
              case ji:
                s = xn;
                break;
              case Fi:
                s = Pn;
                break;
              case "scroll":
                s = vn;
                break;
              case "wheel":
                s = _n;
                break;
              case "copy":
              case "cut":
              case "paste":
                s = Mn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                s = jn;
            }
            var c = !!(4 & e),
              f = !c && "scroll" === t,
              d = c ? (null !== a ? a + "Capture" : null) : a;
            c = [];
            for (var h, p = i; null !== p; ) {
              var g = (h = p).stateNode;
              if (
                (5 === h.tag &&
                  null !== g &&
                  ((h = g),
                  null !== d && null != (g = Rt(p, d)) && c.push(Xi(p, g, h))),
                f)
              )
                break;
              p = p.return;
            }
            c.length > 0 &&
              ((a = new s(a, u, null, n, r)),
              l.push({ event: a, listeners: c }));
          }
        }
        if (!(7 & e)) {
          if (
            ((s = "mouseout" === t || "pointerout" === t),
            (!(a = "mouseover" === t || "pointerover" === t) ||
              n === Mt ||
              !(u = n.relatedTarget || n.fromElement) ||
              (!xr(u) && !u[br])) &&
              (s || a) &&
              ((a =
                r.window === r
                  ? r
                  : (a = r.ownerDocument)
                  ? a.defaultView || a.parentWindow
                  : window),
              s
                ? ((s = i),
                  null !==
                    (u = (u = n.relatedTarget || n.toElement) ? xr(u) : null) &&
                    (u !== (f = Wt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                    (u = null))
                : ((s = null), (u = i)),
              s !== u))
          ) {
            if (
              ((c = wn),
              (g = "onMouseLeave"),
              (d = "onMouseEnter"),
              (p = "mouse"),
              ("pointerout" !== t && "pointerover" !== t) ||
                ((c = jn),
                (g = "onPointerLeave"),
                (d = "onPointerEnter"),
                (p = "pointer")),
              (f = null == s ? a : Mr(s)),
              (h = null == u ? a : Mr(u)),
              ((a = new c(g, p + "leave", s, n, r)).target = f),
              (a.relatedTarget = h),
              (g = null),
              xr(r) === i &&
                (((c = new c(d, p + "enter", u, n, r)).target = h),
                (c.relatedTarget = f),
                (g = c)),
              (f = g),
              s && u)
            )
              t: {
                for (d = u, p = 0, h = c = s; h; h = Ji(h)) p++;
                for (h = 0, g = d; g; g = Ji(g)) h++;
                for (; p - h > 0; ) (c = Ji(c)), p--;
                for (; h - p > 0; ) (d = Ji(d)), h--;
                for (; p--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break t;
                  (c = Ji(c)), (d = Ji(d));
                }
                c = null;
              }
            else c = null;
            null !== s && Qi(l, a, s, c, !1),
              null !== u && null !== f && Qi(l, f, u, c, !0);
          }
          if (
            "select" ===
              (s =
                (a = i ? Mr(i) : window).nodeName &&
                a.nodeName.toLowerCase()) ||
            ("input" === s && "file" === a.type)
          )
            var m = ei;
          else if (qn(a))
            if (ni) m = fi;
            else {
              m = ui;
              var v = si;
            }
          else
            (s = a.nodeName) &&
              "input" === s.toLowerCase() &&
              ("checkbox" === a.type || "radio" === a.type) &&
              (m = ci);
          switch (
            (m && (m = m(t, i))
              ? Xn(l, m, n, r)
              : (v && v(t, a, i),
                "focusout" === t &&
                  (v = a.j) &&
                  v.controlled &&
                  "number" === a.type &&
                  rt(a, "number", a.value)),
            (v = i ? Mr(i) : window),
            t)
          ) {
            case "focusin":
              (qn(v) || "true" === v.contentEditable) &&
                ((ki = v), (xi = i), (Si = null));
              break;
            case "focusout":
              Si = xi = ki = null;
              break;
            case "mousedown":
              Mi = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Mi = !1), Ei(l, n, r);
              break;
            case "selectionchange":
              if (yi) break;
            case "keydown":
            case "keyup":
              Ei(l, n, r);
          }
          var b;
          if (Nn)
            t: {
              switch (t) {
                case "compositionstart":
                  var w = "onCompositionStart";
                  break t;
                case "compositionend":
                  w = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  w = "onCompositionUpdate";
                  break t;
              }
              w = void 0;
            }
          else
            Wn
              ? Kn(t, n) && (w = "onCompositionEnd")
              : "keydown" === t &&
                229 === n.keyCode &&
                (w = "onCompositionStart");
          w &&
            (Vn &&
              "ko" !== n.locale &&
              (Wn || "onCompositionStart" !== w
                ? "onCompositionEnd" === w && Wn && (b = ln())
                : ((rn = "value" in (nn = r) ? nn.value : nn.textContent),
                  (Wn = !0))),
            (v = Zi(i, w)).length > 0 &&
              ((w = new En(w, t, null, n, r)),
              l.push({ event: w, listeners: v }),
              (b || null !== (b = Un(n))) && (w.data = b))),
            (b = Hn
              ? (function (t, e) {
                  switch (t) {
                    case "compositionend":
                      return Un(e);
                    case "keypress":
                      return 32 !== e.which ? null : ((Gn = !0), Bn);
                    case "textInput":
                      return (t = e.data) === Bn && Gn ? null : t;
                    default:
                      return null;
                  }
                })(t, n)
              : (function (t, e) {
                  if (Wn)
                    return "compositionend" === t || (!Nn && Kn(t, e))
                      ? ((t = ln()), (on = rn = nn = null), (Wn = !1), t)
                      : null;
                  switch (t) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(e.ctrlKey || e.altKey || e.metaKey) ||
                        (e.ctrlKey && e.altKey)
                      ) {
                        if (e.char && e.char.length > 1) return e.char;
                        if (e.which) return String.fromCharCode(e.which);
                      }
                      return null;
                    case "compositionend":
                      return Vn && "ko" !== e.locale ? null : e.data;
                  }
                })(t, n)) &&
              (i = Zi(i, "onBeforeInput")).length > 0 &&
              ((r = new En("onBeforeInput", "beforeinput", null, n, r)),
              l.push({ event: r, listeners: i }),
              (r.data = b));
        }
        Bi(l, e);
      });
    }
    function Xi(t, e, n) {
      return { instance: t, listener: e, currentTarget: n };
    }
    function Zi(t, e) {
      for (var n = e + "Capture", i = []; null !== t; ) {
        var r = t,
          o = r.stateNode;
        5 === r.tag &&
          null !== o &&
          ((r = o),
          null != (o = Rt(t, n)) && i.unshift(Xi(t, o, r)),
          null != (o = Rt(t, e)) && i.push(Xi(t, o, r))),
          (t = t.return);
      }
      return i;
    }
    function Ji(t) {
      if (null === t) return null;
      do {
        t = t.return;
      } while (t && 5 !== t.tag);
      return t || null;
    }
    function Qi(t, e, n, i, r) {
      for (var o = e.P, l = []; null !== n && n !== i; ) {
        var a = n,
          s = a.alternate,
          u = a.stateNode;
        if (null !== s && s === i) break;
        5 === a.tag &&
          null !== u &&
          ((a = u),
          r
            ? null != (s = Rt(n, o)) && l.unshift(Xi(n, s, a))
            : r || (null != (s = Rt(n, o)) && l.push(Xi(n, s, a)))),
          (n = n.return);
      }
      0 !== l.length && t.push({ event: e, listeners: l });
    }
    var tr = /\r\n?/g;
    function er(t) {
      return ("string" == typeof t ? t : "" + t)
        .replace(tr, "\n")
        .replace(/\u0000|\uFFFD/g, "");
    }
    function nr(t, e, i) {
      if (((e = er(e)), er(t) !== e && i)) throw Error(n(425));
    }
    function ir() {}
    var rr = null,
      or = null;
    function lr(t, e) {
      return (
        "textarea" === t ||
        "noscript" === t ||
        "string" == typeof e.children ||
        "number" == typeof e.children ||
        ("object" == typeof e.dangerouslySetInnerHTML &&
          null !== e.dangerouslySetInnerHTML &&
          null != e.dangerouslySetInnerHTML.F)
      );
    }
    var ar = "function" == typeof setTimeout ? setTimeout : void 0,
      sr = "function" == typeof clearTimeout ? clearTimeout : void 0,
      ur = "function" == typeof Promise ? Promise : void 0,
      cr =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== ur
          ? function (t) {
              return ur.resolve(null).then(t).catch(fr);
            }
          : ar;
    function fr(t) {
      setTimeout(function () {
        throw t;
      });
    }
    function dr(t, e) {
      var n = e,
        i = 0;
      do {
        var r = n.nextSibling;
        if ((t.removeChild(n), r && 8 === r.nodeType))
          if ("/$" === (n = r.data)) {
            if (0 === i) return t.removeChild(r), We(e), void 0;
            i--;
          } else ("$" !== n && "$?" !== n && "$!" !== n) || i++;
        n = r;
      } while (n);
      We(e);
    }
    function hr(t) {
      for (; null != t; t = t.nextSibling) {
        var e = t.nodeType;
        if (1 === e || 3 === e) break;
        if (8 === e) {
          if ("$" === (e = t.data) || "$!" === e || "$?" === e) break;
          if ("/$" === e) return null;
        }
      }
      return t;
    }
    function pr(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (8 === t.nodeType) {
          var n = t.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === e) return t;
            e--;
          } else "/$" === n && e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    var gr = Math.random().toString(36).slice(2),
      mr = "__reactFiber$" + gr,
      vr = "__reactProps$" + gr,
      br = "__reactContainer$" + gr,
      wr = "__reactEvents$" + gr,
      yr = "__reactListeners$" + gr,
      kr = "__reactHandles$" + gr;
    function xr(t) {
      var e = t[mr];
      if (e) return e;
      for (var n = t.parentNode; n; ) {
        if ((e = n[br] || n[mr])) {
          if (
            ((n = e.alternate),
            null !== e.child || (null !== n && null !== n.child))
          )
            for (t = pr(t); null !== t; ) {
              if ((n = t[mr])) return n;
              t = pr(t);
            }
          return e;
        }
        n = (t = n).parentNode;
      }
      return null;
    }
    function Sr(t) {
      return !(t = t[mr] || t[br]) ||
        (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
        ? null
        : t;
    }
    function Mr(t) {
      if (5 === t.tag || 6 === t.tag) return t.stateNode;
      throw Error(n(33));
    }
    function Er(t) {
      return t[vr] || null;
    }
    var Cr = [],
      Ar = -1;
    function Ir(t) {
      return { current: t };
    }
    function Tr(t) {
      0 > Ar || ((t.current = Cr[Ar]), (Cr[Ar] = null), Ar--);
    }
    function Lr(t, e) {
      Ar++, (Cr[Ar] = t.current), (t.current = e);
    }
    var zr = {},
      Or = Ir(zr),
      jr = Ir(!1),
      Fr = zr;
    function Pr(t, e) {
      var n = t.type.contextTypes;
      if (!n) return zr;
      var i = t.stateNode;
      if (i && i._ === e) return i.D;
      var r,
        o = {};
      for (r in n) o[r] = e[r];
      return i && (((t = t.stateNode)._ = e), (t.D = o)), o;
    }
    function Rr(t) {
      return null != t.childContextTypes;
    }
    function _r() {
      Tr(jr), Tr(Or);
    }
    function Dr(t, e, i) {
      if (Or.current !== zr) throw Error(n(168));
      Lr(Or, e), Lr(jr, i);
    }
    function Nr(t, e, i) {
      var r = t.stateNode;
      if (((e = e.childContextTypes), "function" != typeof r.getChildContext))
        return i;
      for (var o in (r = r.getChildContext()))
        if (!(o in e)) throw Error(n(108, W(t) || "Unknown", o));
      return H({}, i, r);
    }
    function $r(t) {
      return (
        (t = ((t = t.stateNode) && t.N) || zr),
        (Fr = Or.current),
        Lr(Or, t),
        Lr(jr, jr.current),
        !0
      );
    }
    function Hr(t, e, i) {
      var r = t.stateNode;
      if (!r) throw Error(n(169));
      i ? ((t = Nr(t, e, Fr)), (r.N = t), Tr(jr), Tr(Or), Lr(Or, t)) : Tr(jr),
        Lr(jr, i);
    }
    var Vr = null,
      Br = !1,
      Gr = !1;
    function Kr(t) {
      null === Vr ? (Vr = [t]) : Vr.push(t);
    }
    function Ur() {
      if (!Gr && null !== Vr) {
        Gr = !0;
        var t = 0,
          e = Me;
        try {
          var n = Vr;
          for (Me = 1; t < n.length; t++) {
            var i = n[t];
            do {
              i = i(!0);
            } while (null !== i);
          }
          (Vr = null), (Br = !1);
        } catch (r) {
          throw (null !== Vr && (Vr = Vr.slice(t + 1)), Jt(re, Ur), r);
        } finally {
          (Me = e), (Gr = !1);
        }
      }
      return null;
    }
    var Wr = [],
      Yr = 0,
      qr = null,
      Xr = 0,
      Zr = [],
      Jr = 0,
      Qr = null,
      to = 1,
      eo = "";
    function no(t, e) {
      (Wr[Yr++] = Xr), (Wr[Yr++] = qr), (qr = t), (Xr = e);
    }
    function io(t, e, n) {
      (Zr[Jr++] = to), (Zr[Jr++] = eo), (Zr[Jr++] = Qr), (Qr = t);
      var i = to;
      t = eo;
      var r = 32 - fe(i) - 1;
      (i &= ~(1 << r)), (n += 1);
      var o = 32 - fe(e) + r;
      if (o > 30) {
        var l = r - (r % 5);
        (o = (i & ((1 << l) - 1)).toString(32)),
          (i >>= l),
          (r -= l),
          (to = (1 << (32 - fe(e) + r)) | (n << r) | i),
          (eo = o + t);
      } else (to = (1 << o) | (n << r) | i), (eo = t);
    }
    function ro(t) {
      null !== t.return && (no(t, 1), io(t, 1, 0));
    }
    function oo(t) {
      for (; t === qr; )
        (qr = Wr[--Yr]), (Wr[Yr] = null), (Xr = Wr[--Yr]), (Wr[Yr] = null);
      for (; t === Qr; )
        (Qr = Zr[--Jr]),
          (Zr[Jr] = null),
          (eo = Zr[--Jr]),
          (Zr[Jr] = null),
          (to = Zr[--Jr]),
          (Zr[Jr] = null);
    }
    var lo = null,
      ao = null,
      so = !1,
      uo = null;
    function co(t, e) {
      var n = Pu(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.stateNode = e),
        (n.return = t),
        null === (e = t.deletions)
          ? ((t.deletions = [n]), (t.flags |= 16))
          : e.push(n);
    }
    function fo(t, e) {
      switch (t.tag) {
        case 5:
          var n = t.type;
          return (
            null !==
              (e =
                1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase()
                  ? null
                  : e) &&
            ((t.stateNode = e), (lo = t), (ao = hr(e.firstChild)), !0)
          );
        case 6:
          return (
            null !==
              (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) &&
            ((t.stateNode = e), (lo = t), (ao = null), !0)
          );
        case 13:
          return (
            null !== (e = 8 !== e.nodeType ? null : e) &&
            ((n = null !== Qr ? { id: to, overflow: eo } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            ((n = Pu(18, null, null, 0)).stateNode = e),
            (n.return = t),
            (t.child = n),
            (lo = t),
            (ao = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function ho(t) {
      return !(!(1 & t.mode) || 128 & t.flags);
    }
    function po(t) {
      if (so) {
        var e = ao;
        if (e) {
          var i = e;
          if (!fo(t, e)) {
            if (ho(t)) throw Error(n(418));
            e = hr(i.nextSibling);
            var r = lo;
            e && fo(t, e)
              ? co(r, i)
              : ((t.flags = (-4097 & t.flags) | 2), (so = !1), (lo = t));
          }
        } else {
          if (ho(t)) throw Error(n(418));
          (t.flags = (-4097 & t.flags) | 2), (so = !1), (lo = t);
        }
      }
    }
    function go(t) {
      for (
        t = t.return;
        null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

      )
        t = t.return;
      lo = t;
    }
    function mo(t) {
      if (t !== lo) return !1;
      if (!so) return go(t), (so = !0), !1;
      var e;
      if (
        ((e = 3 !== t.tag) &&
          !(e = 5 !== t.tag) &&
          (e =
            "head" !== (e = t.type) &&
            "body" !== e &&
            !lr(t.type, t.memoizedProps)),
        e && (e = ao))
      ) {
        if (ho(t)) throw (vo(), Error(n(418)));
        for (; e; ) co(t, e), (e = hr(e.nextSibling));
      }
      if ((go(t), 13 === t.tag)) {
        if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
          throw Error(n(317));
        t: {
          for (t = t.nextSibling, e = 0; t; ) {
            if (8 === t.nodeType) {
              var i = t.data;
              if ("/$" === i) {
                if (0 === e) {
                  ao = hr(t.nextSibling);
                  break t;
                }
                e--;
              } else ("$" !== i && "$!" !== i && "$?" !== i) || e++;
            }
            t = t.nextSibling;
          }
          ao = null;
        }
      } else ao = lo ? hr(t.stateNode.nextSibling) : null;
      return !0;
    }
    function vo() {
      for (var t = ao; t; ) t = hr(t.nextSibling);
    }
    function bo() {
      (ao = lo = null), (so = !1);
    }
    function wo(t) {
      null === uo ? (uo = [t]) : uo.push(t);
    }
    var yo = M.ReactCurrentBatchConfig;
    function ko(t, e, i) {
      if (
        null !== (t = i.ref) &&
        "function" != typeof t &&
        "object" != typeof t
      ) {
        if (i.l) {
          if ((i = i.l)) {
            if (1 !== i.tag) throw Error(n(309));
            var r = i.stateNode;
          }
          if (!r) throw Error(n(147, t));
          var o = r,
            l = "" + t;
          return null !== e &&
            null !== e.ref &&
            "function" == typeof e.ref &&
            e.ref.$ === l
            ? e.ref
            : (((e = function (t) {
                var e = o.refs;
                null === t ? delete e[l] : (e[l] = t);
              }).$ = l),
              e);
        }
        if ("string" != typeof t) throw Error(n(284));
        if (!i.l) throw Error(n(290, t));
      }
      return t;
    }
    function xo(t, e) {
      throw (
        ((t = {}.toString.call(e)),
        Error(
          n(
            31,
            "[object Object]" === t
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ))
      );
    }
    function So(t) {
      return (0, t.T)(t.I);
    }
    function Mo(t) {
      function e(e, n) {
        if (t) {
          var i = e.deletions;
          null === i ? ((e.deletions = [n]), (e.flags |= 16)) : i.push(n);
        }
      }
      function i(n, i) {
        if (!t) return null;
        for (; null !== i; ) e(n, i), (i = i.sibling);
        return null;
      }
      function r(t, e) {
        for (t = new Map(); null !== e; )
          null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
        return t;
      }
      function o(t, e) {
        return ((t = _u(t, e)).index = 0), (t.sibling = null), t;
      }
      function l(e, n, i) {
        return (
          (e.index = i),
          t
            ? null !== (i = e.alternate)
              ? n > (i = i.index)
                ? ((e.flags |= 2), n)
                : i
              : ((e.flags |= 2), n)
            : ((e.flags |= 1048576), n)
        );
      }
      function a(e) {
        return t && null === e.alternate && (e.flags |= 2), e;
      }
      function s(t, e, n, i) {
        return null === e || 6 !== e.tag
          ? (((e = Hu(n, t.mode, i)).return = t), e)
          : (((e = o(e, n)).return = t), e);
      }
      function u(t, e, n, i) {
        var r = n.type;
        return r === A
          ? f(t, e, n.props.children, i, n.key)
          : null !== e &&
            (e.elementType === r ||
              ("object" == typeof r &&
                null !== r &&
                r.$$typeof === R &&
                So(r) === e.type))
          ? (((i = o(e, n.props)).ref = ko(t, e, n)), (i.return = t), i)
          : (((i = Du(n.type, n.key, n.props, null, t.mode, i)).ref = ko(
              t,
              e,
              n
            )),
            (i.return = t),
            i);
      }
      function c(t, e, n, i) {
        return null === e ||
          4 !== e.tag ||
          e.stateNode.containerInfo !== n.containerInfo ||
          e.stateNode.implementation !== n.implementation
          ? (((e = Vu(n, t.mode, i)).return = t), e)
          : (((e = o(e, n.children || [])).return = t), e);
      }
      function f(t, e, n, i, r) {
        return null === e || 7 !== e.tag
          ? (((e = Nu(n, t.mode, i, r)).return = t), e)
          : (((e = o(e, n)).return = t), e);
      }
      function d(t, e, n) {
        if (("string" == typeof e && "" !== e) || "number" == typeof e)
          return ((e = Hu("" + e, t.mode, n)).return = t), e;
        if ("object" == typeof e && null !== e) {
          switch (e.$$typeof) {
            case E:
              return (
                ((n = Du(e.type, e.key, e.props, null, t.mode, n)).ref = ko(
                  t,
                  null,
                  e
                )),
                (n.return = t),
                n
              );
            case C:
              return ((e = Vu(e, t.mode, n)).return = t), e;
            case R:
              return d(t, (0, e.T)(e.I), n);
          }
          if (ot(e) || N(e))
            return ((e = Nu(e, t.mode, n, null)).return = t), e;
          xo(t, e);
        }
        return null;
      }
      function h(t, e, n, i) {
        var r = null !== e ? e.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n)
          return null !== r ? null : s(t, e, "" + n, i);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case E:
              return n.key === r ? u(t, e, n, i) : null;
            case C:
              return n.key === r ? c(t, e, n, i) : null;
            case R:
              return h(t, e, (r = n.T)(n.I), i);
          }
          if (ot(n) || N(n)) return null !== r ? null : f(t, e, n, i, null);
          xo(t, n);
        }
        return null;
      }
      function p(t, e, n, i, r) {
        if (("string" == typeof i && "" !== i) || "number" == typeof i)
          return s(e, (t = t.get(n) || null), "" + i, r);
        if ("object" == typeof i && null !== i) {
          switch (i.$$typeof) {
            case E:
              return u(
                e,
                (t = t.get(null === i.key ? n : i.key) || null),
                i,
                r
              );
            case C:
              return c(
                e,
                (t = t.get(null === i.key ? n : i.key) || null),
                i,
                r
              );
            case R:
              return p(t, e, n, (0, i.T)(i.I), r);
          }
          if (ot(i) || N(i)) return f(e, (t = t.get(n) || null), i, r, null);
          xo(e, i);
        }
        return null;
      }
      return function s(u, c, f, g) {
        if (
          ("object" == typeof f &&
            null !== f &&
            f.type === A &&
            null === f.key &&
            (f = f.props.children),
          "object" == typeof f && null !== f)
        ) {
          switch (f.$$typeof) {
            case E:
              t: {
                for (var m = f.key, v = c; null !== v; ) {
                  if (v.key === m) {
                    if ((m = f.type) === A) {
                      if (7 === v.tag) {
                        i(u, v.sibling),
                          ((c = o(v, f.props.children)).return = u),
                          (u = c);
                        break t;
                      }
                    } else if (
                      v.elementType === m ||
                      ("object" == typeof m &&
                        null !== m &&
                        m.$$typeof === R &&
                        So(m) === v.type)
                    ) {
                      i(u, v.sibling),
                        ((c = o(v, f.props)).ref = ko(u, v, f)),
                        (c.return = u),
                        (u = c);
                      break t;
                    }
                    i(u, v);
                    break;
                  }
                  e(u, v), (v = v.sibling);
                }
                f.type === A
                  ? (((c = Nu(f.props.children, u.mode, g, f.key)).return = u),
                    (u = c))
                  : (((g = Du(f.type, f.key, f.props, null, u.mode, g)).ref =
                      ko(u, c, f)),
                    (g.return = u),
                    (u = g));
              }
              return a(u);
            case C:
              t: {
                for (v = f.key; null !== c; ) {
                  if (c.key === v) {
                    if (
                      4 === c.tag &&
                      c.stateNode.containerInfo === f.containerInfo &&
                      c.stateNode.implementation === f.implementation
                    ) {
                      i(u, c.sibling),
                        ((c = o(c, f.children || [])).return = u),
                        (u = c);
                      break t;
                    }
                    i(u, c);
                    break;
                  }
                  e(u, c), (c = c.sibling);
                }
                ((c = Vu(f, u.mode, g)).return = u), (u = c);
              }
              return a(u);
            case R:
              return s(u, c, (v = f.T)(f.I), g);
          }
          if (ot(f))
            return (function (n, o, a, s) {
              for (
                var u = null, c = null, f = o, g = (o = 0), m = null;
                null !== f && g < a.length;
                g++
              ) {
                f.index > g ? ((m = f), (f = null)) : (m = f.sibling);
                var v = h(n, f, a[g], s);
                if (null === v) {
                  null === f && (f = m);
                  break;
                }
                t && f && null === v.alternate && e(n, f),
                  (o = l(v, o, g)),
                  null === c ? (u = v) : (c.sibling = v),
                  (c = v),
                  (f = m);
              }
              if (g === a.length) return i(n, f), so && no(n, g), u;
              if (null === f) {
                for (; g < a.length; g++)
                  null !== (f = d(n, a[g], s)) &&
                    ((o = l(f, o, g)),
                    null === c ? (u = f) : (c.sibling = f),
                    (c = f));
                return so && no(n, g), u;
              }
              for (f = r(n, f); g < a.length; g++)
                null !== (m = p(f, n, g, a[g], s)) &&
                  (t &&
                    null !== m.alternate &&
                    f.delete(null === m.key ? g : m.key),
                  (o = l(m, o, g)),
                  null === c ? (u = m) : (c.sibling = m),
                  (c = m));
              return (
                t &&
                  f.forEach(function (t) {
                    return e(n, t);
                  }),
                so && no(n, g),
                u
              );
            })(u, c, f, g);
          if (N(f))
            return (function (o, a, s, u) {
              var c = N(s);
              if ("function" != typeof c) throw Error(n(150));
              if (null == (s = c.call(s))) throw Error(n(151));
              for (
                var f = (c = null), g = a, m = (a = 0), v = null, b = s.next();
                null !== g && !b.done;
                m++, b = s.next()
              ) {
                g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
                var w = h(o, g, b.value, u);
                if (null === w) {
                  null === g && (g = v);
                  break;
                }
                t && g && null === w.alternate && e(o, g),
                  (a = l(w, a, m)),
                  null === f ? (c = w) : (f.sibling = w),
                  (f = w),
                  (g = v);
              }
              if (b.done) return i(o, g), so && no(o, m), c;
              if (null === g) {
                for (; !b.done; m++, b = s.next())
                  null !== (b = d(o, b.value, u)) &&
                    ((a = l(b, a, m)),
                    null === f ? (c = b) : (f.sibling = b),
                    (f = b));
                return so && no(o, m), c;
              }
              for (g = r(o, g); !b.done; m++, b = s.next())
                null !== (b = p(g, o, m, b.value, u)) &&
                  (t &&
                    null !== b.alternate &&
                    g.delete(null === b.key ? m : b.key),
                  (a = l(b, a, m)),
                  null === f ? (c = b) : (f.sibling = b),
                  (f = b));
              return (
                t &&
                  g.forEach(function (t) {
                    return e(o, t);
                  }),
                so && no(o, m),
                c
              );
            })(u, c, f, g);
          xo(u, f);
        }
        return ("string" == typeof f && "" !== f) || "number" == typeof f
          ? ((f = "" + f),
            null !== c && 6 === c.tag
              ? (i(u, c.sibling), ((c = o(c, f)).return = u), (u = c))
              : (i(u, c), ((c = Hu(f, u.mode, g)).return = u), (u = c)),
            a(u))
          : i(u, c);
      };
    }
    var Eo = Mo(!0),
      Co = Mo(!1),
      Ao = Ir(null),
      Io = null,
      To = null,
      Lo = null;
    function zo() {
      Lo = To = Io = null;
    }
    function Oo(t) {
      var e = Ao.current;
      Tr(Ao), (t.v = e);
    }
    function jo(t, e, n) {
      for (; null !== t; ) {
        var i = t.alternate;
        if (
          ((t.childLanes & e) !== e
            ? ((t.childLanes |= e), null !== i && (i.childLanes |= e))
            : null !== i && (i.childLanes & e) !== e && (i.childLanes |= e),
          t === n)
        )
          break;
        t = t.return;
      }
    }
    function Fo(t, e) {
      (Io = t),
        (Lo = To = null),
        null !== (t = t.dependencies) &&
          null !== t.firstContext &&
          (0 !== (t.lanes & e) && (Sa = !0), (t.firstContext = null));
    }
    function Po(t) {
      var e = t.v;
      if (Lo !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), null === To)) {
          if (null === Io) throw Error(n(308));
          (To = t), (Io.dependencies = { lanes: 0, firstContext: t });
        } else To = To.next = t;
      return e;
    }
    var Ro = null;
    function _o(t) {
      null === Ro ? (Ro = [t]) : Ro.push(t);
    }
    function Do(t, e, n, i) {
      var r = e.interleaved;
      return (
        null === r ? ((n.next = n), _o(e)) : ((n.next = r.next), (r.next = n)),
        (e.interleaved = n),
        No(t, i)
      );
    }
    function No(t, e) {
      t.lanes |= e;
      var n = t.alternate;
      for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t; )
        (t.childLanes |= e),
          null !== (n = t.alternate) && (n.childLanes |= e),
          (n = t),
          (t = t.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    var $o = !1;
    function Ho(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Vo(t, e) {
      (t = t.updateQueue),
        e.updateQueue === t &&
          (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects,
          });
    }
    function Bo(t, e) {
      return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function Go(t, e, n) {
      var i = t.updateQueue;
      if (null === i) return null;
      if (((i = i.shared), 2 & Os)) {
        var r = i.pending;
        return (
          null === r ? (e.next = e) : ((e.next = r.next), (r.next = e)),
          (i.pending = e),
          No(t, n)
        );
      }
      return (
        null === (r = i.interleaved)
          ? ((e.next = e), _o(i))
          : ((e.next = r.next), (r.next = e)),
        (i.interleaved = e),
        No(t, n)
      );
    }
    function Ko(t, e, n) {
      if (null !== (e = e.updateQueue) && ((e = e.shared), 4194240 & n)) {
        var i = e.lanes;
        (n |= i &= t.pendingLanes), (e.lanes = n), Se(t, n);
      }
    }
    function Uo(t, e) {
      var n = t.updateQueue,
        i = t.alternate;
      if (null !== i && n === (i = i.updateQueue)) {
        var r = null,
          o = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var l = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            null === o ? (r = o = l) : (o = o.next = l), (n = n.next);
          } while (null !== n);
          null === o ? (r = o = e) : (o = o.next = e);
        } else r = o = e;
        return (
          (n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: o,
            shared: i.shared,
            effects: i.effects,
          }),
          (t.updateQueue = n),
          void 0
        );
      }
      null === (t = n.lastBaseUpdate) ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e);
    }
    function Wo(t, e, n, i) {
      var r = t.updateQueue;
      $o = !1;
      var o = r.firstBaseUpdate,
        l = r.lastBaseUpdate,
        a = r.shared.pending;
      if (null !== a) {
        r.shared.pending = null;
        var s = a,
          u = s.next;
        (s.next = null), null === l ? (o = u) : (l.next = u), (l = s);
        var c = t.alternate;
        null !== c &&
          (a = (c = c.updateQueue).lastBaseUpdate) !== l &&
          (null === a ? (c.firstBaseUpdate = u) : (a.next = u),
          (c.lastBaseUpdate = s));
      }
      if (null !== o) {
        var f = r.baseState;
        for (l = 0, c = u = s = null, a = o; ; ) {
          var d = a.lane,
            h = a.eventTime;
          if ((i & d) === d) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: h,
                  lane: 0,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                });
            t: {
              var p = t,
                g = a;
              switch (((d = e), (h = n), g.tag)) {
                case 1:
                  if ("function" == typeof (p = g.payload)) {
                    f = p.call(h, f, d);
                    break t;
                  }
                  f = p;
                  break t;
                case 3:
                  p.flags = (-65537 & p.flags) | 128;
                case 0:
                  if (
                    null ==
                    (d =
                      "function" == typeof (p = g.payload)
                        ? p.call(h, f, d)
                        : p)
                  )
                    break t;
                  f = H({}, f, d);
                  break t;
                case 2:
                  $o = !0;
              }
            }
            null !== a.callback &&
              0 !== a.lane &&
              ((t.flags |= 64),
              null === (d = r.effects) ? (r.effects = [a]) : d.push(a));
          } else
            (h = {
              eventTime: h,
              lane: d,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            }),
              null === c ? ((u = c = h), (s = f)) : (c = c.next = h),
              (l |= d);
          if (null === (a = a.next)) {
            if (null === (a = r.shared.pending)) break;
            (a = (d = a).next),
              (d.next = null),
              (r.lastBaseUpdate = d),
              (r.shared.pending = null);
          }
          1;
        }
        if (
          (null === c && (s = f),
          (r.baseState = s),
          (r.firstBaseUpdate = u),
          (r.lastBaseUpdate = c),
          null !== (e = r.shared.interleaved))
        ) {
          r = e;
          do {
            (l |= r.lane), (r = r.next);
          } while (r !== e);
        } else null === o && (r.shared.lanes = 0);
        ($s |= l), (t.lanes = l), (t.memoizedState = f);
      }
    }
    function Yo(t, e, i) {
      if (((t = e.effects), (e.effects = null), null !== t))
        for (e = 0; e < t.length; e++) {
          var r = t[e],
            o = r.callback;
          if (null !== o) {
            if (((r.callback = null), (r = i), "function" != typeof o))
              throw Error(n(191, o));
            o.call(r);
          }
        }
    }
    var qo = {},
      Xo = Ir(qo),
      Zo = Ir(qo),
      Jo = Ir(qo);
    function Qo(t) {
      if (t === qo) throw Error(n(174));
      return t;
    }
    function tl(t, e) {
      switch ((Lr(Jo, e), Lr(Zo, t), Lr(Xo, qo), (t = e.nodeType))) {
        case 9:
        case 11:
          e = (e = e.documentElement) ? e.namespaceURI : dt(null, "");
          break;
        default:
          e = dt(
            (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
            (t = t.tagName)
          );
      }
      Tr(Xo), Lr(Xo, e);
    }
    function el() {
      Tr(Xo), Tr(Zo), Tr(Jo);
    }
    function nl(t) {
      Qo(Jo.current);
      var e = Qo(Xo.current),
        n = dt(e, t.type);
      e !== n && (Lr(Zo, t), Lr(Xo, n));
    }
    function il(t) {
      Zo.current === t && (Tr(Xo), Tr(Zo));
    }
    var rl = Ir(0);
    function ol(t) {
      for (var e = t; null !== e; ) {
        if (13 === e.tag) {
          var n = e.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
          )
            return e;
        } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
          if (128 & e.flags) return e;
        } else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) return null;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
      return null;
    }
    var ll = [];
    function al() {
      for (var t = 0; t < ll.length; t++) ll[t].H = null;
      ll.length = 0;
    }
    var sl = M.ReactCurrentDispatcher,
      ul = M.ReactCurrentBatchConfig,
      cl = 0,
      fl = null,
      dl = null,
      hl = null,
      pl = !1,
      gl = !1,
      ml = 0,
      vl = 0;
    function bl() {
      throw Error(n(321));
    }
    function wl(t, e) {
      if (null === e) return !1;
      for (var n = 0; n < e.length && n < t.length; n++)
        if (!di(t[n], e[n])) return !1;
      return !0;
    }
    function yl(t, e, i, r, o, l) {
      if (
        ((cl = l),
        (fl = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (sl.current = null === t || null === t.memoizedState ? ia : ra),
        (t = i(r, o)),
        gl)
      ) {
        l = 0;
        do {
          if (((gl = !1), (ml = 0), l >= 25)) throw Error(n(301));
          (l += 1),
            (hl = dl = null),
            (e.updateQueue = null),
            (sl.current = oa),
            (t = i(r, o));
        } while (gl);
      }
      if (
        ((sl.current = na),
        (e = null !== dl && null !== dl.next),
        (cl = 0),
        (hl = dl = fl = null),
        (pl = !1),
        e)
      )
        throw Error(n(300));
      return t;
    }
    function kl() {
      var t = 0 !== ml;
      return (ml = 0), t;
    }
    function xl() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === hl ? (fl.memoizedState = hl = t) : (hl = hl.next = t), hl;
    }
    function Sl() {
      if (null === dl) {
        var t = fl.alternate;
        t = null !== t ? t.memoizedState : null;
      } else t = dl.next;
      var e = null === hl ? fl.memoizedState : hl.next;
      if (null !== e) (hl = e), (dl = t);
      else {
        if (null === t) throw Error(n(310));
        (t = {
          memoizedState: (dl = t).memoizedState,
          baseState: dl.baseState,
          baseQueue: dl.baseQueue,
          queue: dl.queue,
          next: null,
        }),
          null === hl ? (fl.memoizedState = hl = t) : (hl = hl.next = t);
      }
      return hl;
    }
    function Ml(t, e) {
      return "function" == typeof e ? e(t) : e;
    }
    function El(t) {
      var e = Sl(),
        i = e.queue;
      if (null === i) throw Error(n(311));
      i.lastRenderedReducer = t;
      var r = dl,
        o = r.baseQueue,
        l = i.pending;
      if (null !== l) {
        if (null !== o) {
          var a = o.next;
          (o.next = l.next), (l.next = a);
        }
        (r.baseQueue = o = l), (i.pending = null);
      }
      if (null !== o) {
        (l = o.next), (r = r.baseState);
        var s = (a = null),
          u = null,
          c = l;
        do {
          var f = c.lane;
          if ((cl & f) === f)
            null !== u &&
              (u = u.next =
                {
                  lane: 0,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
              (r = c.hasEagerState ? c.eagerState : t(r, c.action));
          else {
            var d = {
              lane: f,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            };
            null === u ? ((s = u = d), (a = r)) : (u = u.next = d),
              (fl.lanes |= f),
              ($s |= f);
          }
          c = c.next;
        } while (null !== c && c !== l);
        null === u ? (a = r) : (u.next = s),
          di(r, e.memoizedState) || (Sa = !0),
          (e.memoizedState = r),
          (e.baseState = a),
          (e.baseQueue = u),
          (i.lastRenderedState = r);
      }
      if (null !== (t = i.interleaved)) {
        o = t;
        do {
          (l = o.lane), (fl.lanes |= l), ($s |= l), (o = o.next);
        } while (o !== t);
      } else null === o && (i.lanes = 0);
      return [e.memoizedState, i.dispatch];
    }
    function Cl(t) {
      var e = Sl(),
        i = e.queue;
      if (null === i) throw Error(n(311));
      i.lastRenderedReducer = t;
      var r = i.dispatch,
        o = i.pending,
        l = e.memoizedState;
      if (null !== o) {
        i.pending = null;
        var a = (o = o.next);
        do {
          (l = t(l, a.action)), (a = a.next);
        } while (a !== o);
        di(l, e.memoizedState) || (Sa = !0),
          (e.memoizedState = l),
          null === e.baseQueue && (e.baseState = l),
          (i.lastRenderedState = l);
      }
      return [l, r];
    }
    function Al() {}
    function Il(t, e) {
      var i = fl,
        r = Sl(),
        o = e(),
        l = !di(r.memoizedState, o);
      if (
        (l && ((r.memoizedState = o), (Sa = !0)),
        (r = r.queue),
        $l(zl.bind(null, i, r, t), [t]),
        r.getSnapshot !== e || l || (null !== hl && 1 & hl.memoizedState.tag))
      ) {
        if (
          ((i.flags |= 2048),
          Pl(9, Ll.bind(null, i, r, o, e), void 0, null),
          null === js)
        )
          throw Error(n(349));
        30 & cl || Tl(i, e, o);
      }
      return o;
    }
    function Tl(t, e, n) {
      (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        null === (e = fl.updateQueue)
          ? ((e = { lastEffect: null, stores: null }),
            (fl.updateQueue = e),
            (e.stores = [t]))
          : null === (n = e.stores)
          ? (e.stores = [t])
          : n.push(t);
    }
    function Ll(t, e, n, i) {
      (e.value = n), (e.getSnapshot = i), Ol(e) && jl(t);
    }
    function zl(t, e, n) {
      return n(function () {
        Ol(e) && jl(t);
      });
    }
    function Ol(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var n = e();
        return !di(t, n);
      } catch (i) {
        return !0;
      }
    }
    function jl(t) {
      var e = No(t, 1);
      null !== e && lu(e, t, 1, -1);
    }
    function Fl(t) {
      var e = xl();
      return (
        "function" == typeof t && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ml,
          lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = Jl.bind(null, fl, t)),
        [e.memoizedState, t]
      );
    }
    function Pl(t, e, n, i) {
      return (
        (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
        null === (e = fl.updateQueue)
          ? ((e = { lastEffect: null, stores: null }),
            (fl.updateQueue = e),
            (e.lastEffect = t.next = t))
          : null === (n = e.lastEffect)
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
        t
      );
    }
    function Rl() {
      return Sl().memoizedState;
    }
    function _l(t, e, n, i) {
      var r = xl();
      (fl.flags |= t),
        (r.memoizedState = Pl(1 | e, n, void 0, void 0 === i ? null : i));
    }
    function Dl(t, e, n, i) {
      var r = Sl();
      i = void 0 === i ? null : i;
      var o = void 0;
      if (null !== dl) {
        var l = dl.memoizedState;
        if (((o = l.destroy), null !== i && wl(i, l.deps)))
          return (r.memoizedState = Pl(e, n, o, i)), void 0;
      }
      (fl.flags |= t), (r.memoizedState = Pl(1 | e, n, o, i));
    }
    function Nl(t, e) {
      return _l(8390656, 8, t, e);
    }
    function $l(t, e) {
      return Dl(2048, 8, t, e);
    }
    function Hl(t, e) {
      return Dl(4, 2, t, e);
    }
    function Vl(t, e) {
      return Dl(4, 4, t, e);
    }
    function Bl(t, e) {
      return "function" == typeof e
        ? ((t = t()),
          e(t),
          function () {
            e(null);
          })
        : null != e
        ? ((t = t()),
          (e.current = t),
          function () {
            e.current = null;
          })
        : void 0;
    }
    function Gl(t, e, n) {
      return (
        (n = null != n ? n.concat([t]) : null), Dl(4, 4, Bl.bind(null, e, t), n)
      );
    }
    function Kl() {}
    function Ul(t, e) {
      var n = Sl();
      e = void 0 === e ? null : e;
      var i = n.memoizedState;
      return null !== i && null !== e && wl(e, i[1])
        ? i[0]
        : ((n.memoizedState = [t, e]), t);
    }
    function Wl(t, e) {
      var n = Sl();
      e = void 0 === e ? null : e;
      var i = n.memoizedState;
      return null !== i && null !== e && wl(e, i[1])
        ? i[0]
        : ((t = t()), (n.memoizedState = [t, e]), t);
    }
    function Yl(t, e, n) {
      return 21 & cl
        ? (di(n, e) ||
            ((n = ye()), (fl.lanes |= n), ($s |= n), (t.baseState = !0)),
          e)
        : (t.baseState && ((t.baseState = !1), (Sa = !0)),
          (t.memoizedState = n));
    }
    function ql(t, e) {
      var n = Me;
      (Me = 0 !== n && 4 > n ? n : 4), t(!0);
      var i = ul.transition;
      ul.transition = {};
      try {
        t(!1), e();
      } finally {
        (Me = n), (ul.transition = i);
      }
    }
    function Xl() {
      return Sl().memoizedState;
    }
    function Zl(t, e, n) {
      var i = ou(t);
      (n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Ql(t)
          ? ta(e, n)
          : null !== (n = Do(t, e, n, i)) && (lu(n, t, i, ru()), ea(n, e, i));
    }
    function Jl(t, e, n) {
      var i = ou(t),
        r = {
          lane: i,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (Ql(t)) ta(e, r);
      else {
        var o = t.alternate;
        if (
          0 === t.lanes &&
          (null === o || 0 === o.lanes) &&
          null !== (o = e.lastRenderedReducer)
        )
          try {
            var l = e.lastRenderedState,
              a = o(l, n);
            if (((r.hasEagerState = !0), (r.eagerState = a), di(a, l))) {
              var s = e.interleaved;
              return (
                null === s
                  ? ((r.next = r), _o(e))
                  : ((r.next = s.next), (s.next = r)),
                (e.interleaved = r),
                void 0
              );
            }
          } catch (u) {}
        null !== (n = Do(t, e, r, i)) && (lu(n, t, i, (r = ru())), ea(n, e, i));
      }
    }
    function Ql(t) {
      var e = t.alternate;
      return t === fl || (null !== e && e === fl);
    }
    function ta(t, e) {
      gl = pl = !0;
      var n = t.pending;
      null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (t.pending = e);
    }
    function ea(t, e, n) {
      if (4194240 & n) {
        var i = e.lanes;
        (n |= i &= t.pendingLanes), (e.lanes = n), Se(t, n);
      }
    }
    var na = {
        readContext: Po,
        useCallback: bl,
        useContext: bl,
        useEffect: bl,
        useImperativeHandle: bl,
        useInsertionEffect: bl,
        useLayoutEffect: bl,
        useMemo: bl,
        useReducer: bl,
        useRef: bl,
        useState: bl,
        useDebugValue: bl,
        useDeferredValue: bl,
        useTransition: bl,
        useMutableSource: bl,
        useSyncExternalStore: bl,
        useId: bl,
        unstable_isNewReconciler: !1,
      },
      ia = {
        readContext: Po,
        useCallback: function (t, e) {
          return (xl().memoizedState = [t, void 0 === e ? null : e]), t;
        },
        useContext: Po,
        useEffect: Nl,
        useImperativeHandle: function (t, e, n) {
          return (
            (n = null != n ? n.concat([t]) : null),
            _l(4194308, 4, Bl.bind(null, e, t), n)
          );
        },
        useLayoutEffect: function (t, e) {
          return _l(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
          return _l(4, 2, t, e);
        },
        useMemo: function (t, e) {
          var n = xl();
          return (
            (e = void 0 === e ? null : e),
            (t = t()),
            (n.memoizedState = [t, e]),
            t
          );
        },
        useReducer: function (t, e, n) {
          var i = xl();
          return (
            (e = void 0 !== n ? n(e) : e),
            (i.memoizedState = i.baseState = e),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: e,
            }),
            (i.queue = t),
            (t = t.dispatch = Zl.bind(null, fl, t)),
            [i.memoizedState, t]
          );
        },
        useRef: function (t) {
          return (t = { current: t }), (xl().memoizedState = t);
        },
        useState: Fl,
        useDebugValue: Kl,
        useDeferredValue: function (t) {
          return (xl().memoizedState = t);
        },
        useTransition: function () {
          var t = Fl(!1),
            e = t[0];
          return (t = ql.bind(null, t[1])), (xl().memoizedState = t), [e, t];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (t, e, i) {
          var r = fl,
            o = xl();
          if (so) {
            if (void 0 === i) throw Error(n(407));
            i = i();
          } else {
            if (((i = e()), null === js)) throw Error(n(349));
            30 & cl || Tl(r, e, i);
          }
          o.memoizedState = i;
          var l = { value: i, getSnapshot: e };
          return (
            (o.queue = l),
            Nl(zl.bind(null, r, l, t), [t]),
            (r.flags |= 2048),
            Pl(9, Ll.bind(null, r, l, i, e), void 0, null),
            i
          );
        },
        useId: function () {
          var t = xl(),
            e = js.identifierPrefix;
          if (so) {
            var n = eo;
            (e =
              ":" +
              e +
              "R" +
              (n = (to & ~(1 << (32 - fe(to) - 1))).toString(32) + n)),
              (n = ml++) > 0 && (e += "H" + n.toString(32)),
              (e += ":");
          } else e = ":" + e + "r" + (n = vl++).toString(32) + ":";
          return (t.memoizedState = e);
        },
        unstable_isNewReconciler: !1,
      },
      ra = {
        readContext: Po,
        useCallback: Ul,
        useContext: Po,
        useEffect: $l,
        useImperativeHandle: Gl,
        useInsertionEffect: Hl,
        useLayoutEffect: Vl,
        useMemo: Wl,
        useReducer: El,
        useRef: Rl,
        useState: function () {
          return El(Ml);
        },
        useDebugValue: Kl,
        useDeferredValue: function (t) {
          return Yl(Sl(), dl.memoizedState, t);
        },
        useTransition: function () {
          return [El(Ml)[0], Sl().memoizedState];
        },
        useMutableSource: Al,
        useSyncExternalStore: Il,
        useId: Xl,
        unstable_isNewReconciler: !1,
      },
      oa = {
        readContext: Po,
        useCallback: Ul,
        useContext: Po,
        useEffect: $l,
        useImperativeHandle: Gl,
        useInsertionEffect: Hl,
        useLayoutEffect: Vl,
        useMemo: Wl,
        useReducer: Cl,
        useRef: Rl,
        useState: function () {
          return Cl(Ml);
        },
        useDebugValue: Kl,
        useDeferredValue: function (t) {
          var e = Sl();
          return null === dl
            ? (e.memoizedState = t)
            : Yl(e, dl.memoizedState, t);
        },
        useTransition: function () {
          return [Cl(Ml)[0], Sl().memoizedState];
        },
        useMutableSource: Al,
        useSyncExternalStore: Il,
        useId: Xl,
        unstable_isNewReconciler: !1,
      };
    function la(t, e) {
      if (t && t.defaultProps) {
        for (var n in ((e = H({}, e)), (t = t.defaultProps)))
          void 0 === e[n] && (e[n] = t[n]);
        return e;
      }
      return e;
    }
    function aa(t, e, n, i) {
      (n = null == (n = n(i, (e = t.memoizedState))) ? e : H({}, e, n)),
        (t.memoizedState = n),
        0 === t.lanes && (t.updateQueue.baseState = n);
    }
    var sa = {
      isMounted: function (t) {
        return !!(t = t.V) && Wt(t) === t;
      },
      enqueueSetState: function (t, e, n) {
        t = t.V;
        var i = ru(),
          r = ou(t),
          o = Bo(i, r);
        (o.payload = e),
          null != n && (o.callback = n),
          null !== (e = Go(t, o, r)) && (lu(e, t, r, i), Ko(e, t, r));
      },
      enqueueReplaceState: function (t, e, n) {
        t = t.V;
        var i = ru(),
          r = ou(t),
          o = Bo(i, r);
        (o.tag = 1),
          (o.payload = e),
          null != n && (o.callback = n),
          null !== (e = Go(t, o, r)) && (lu(e, t, r, i), Ko(e, t, r));
      },
      enqueueForceUpdate: function (t, e) {
        t = t.V;
        var n = ru(),
          i = ou(t),
          r = Bo(n, i);
        (r.tag = 2),
          null != e && (r.callback = e),
          null !== (e = Go(t, r, i)) && (lu(e, t, i, n), Ko(e, t, i));
      },
    };
    function ua(t, e, n, i, r, o, l) {
      return "function" == typeof (t = t.stateNode).shouldComponentUpdate
        ? t.shouldComponentUpdate(i, o, l)
        : !(
            e.prototype &&
            e.prototype.isPureReactComponent &&
            hi(n, i) &&
            hi(r, o)
          );
    }
    function ca(t, e, n) {
      var i = !1,
        r = zr,
        o = e.contextType;
      return (
        "object" == typeof o && null !== o
          ? (o = Po(o))
          : ((r = Rr(e) ? Fr : Or.current),
            (o = (i = null != (i = e.contextTypes)) ? Pr(t, r) : zr)),
        (e = new e(n, o)),
        (t.memoizedState =
          null !== e.state && void 0 !== e.state ? e.state : null),
        (e.updater = sa),
        (t.stateNode = e),
        (e.V = t),
        i && (((t = t.stateNode)._ = r), (t.D = o)),
        e
      );
    }
    function fa(t, e, n, i) {
      (t = e.state),
        "function" == typeof e.componentWillReceiveProps &&
          e.componentWillReceiveProps(n, i),
        "function" == typeof e.UNSAFE_componentWillReceiveProps &&
          e.UNSAFE_componentWillReceiveProps(n, i),
        e.state !== t && sa.enqueueReplaceState(e, e.state, null);
    }
    function da(t, e, n, i) {
      var r = t.stateNode;
      (r.props = n), (r.state = t.memoizedState), (r.refs = {}), Ho(t);
      var o = e.contextType;
      "object" == typeof o && null !== o
        ? (r.context = Po(o))
        : ((o = Rr(e) ? Fr : Or.current), (r.context = Pr(t, o))),
        (r.state = t.memoizedState),
        "function" == typeof (o = e.getDerivedStateFromProps) &&
          (aa(t, e, o, n), (r.state = t.memoizedState)),
        "function" == typeof e.getDerivedStateFromProps ||
          "function" == typeof r.getSnapshotBeforeUpdate ||
          ("function" != typeof r.UNSAFE_componentWillMount &&
            "function" != typeof r.componentWillMount) ||
          ((e = r.state),
          "function" == typeof r.componentWillMount && r.componentWillMount(),
          "function" == typeof r.UNSAFE_componentWillMount &&
            r.UNSAFE_componentWillMount(),
          e !== r.state && sa.enqueueReplaceState(r, r.state, null),
          Wo(t, n, r, i),
          (r.state = t.memoizedState)),
        "function" == typeof r.componentDidMount && (t.flags |= 4194308);
    }
    function ha(t, e) {
      try {
        var n = "",
          i = e;
        do {
          (n += K(i)), (i = i.return);
        } while (i);
        var r = n;
      } catch (o) {
        r = "\nError generating stack: " + o.message + "\n" + o.stack;
      }
      return { value: t, source: e, stack: r, digest: null };
    }
    function pa(t, e, n) {
      return {
        value: t,
        source: null,
        stack: null != n ? n : null,
        digest: null != e ? e : null,
      };
    }
    function ga(t, e) {
      try {
        void 0;
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    var ma = "function" == typeof WeakMap ? WeakMap : Map;
    function va(t, e, n) {
      ((n = Bo(-1, n)).tag = 3), (n.payload = { element: null });
      var i = e.value;
      return (
        (n.callback = function () {
          Ys || ((Ys = !0), (qs = i)), ga();
        }),
        n
      );
    }
    function ba(t, e, n) {
      (n = Bo(-1, n)).tag = 3;
      var i = t.type.getDerivedStateFromError;
      if ("function" == typeof i) {
        var r = e.value;
        (n.payload = function () {
          return i(r);
        }),
          (n.callback = function () {
            ga();
          });
      }
      var o = t.stateNode;
      return (
        null !== o &&
          "function" == typeof o.componentDidCatch &&
          (n.callback = function () {
            ga(),
              "function" != typeof i &&
                (null === Xs ? (Xs = new Set([this])) : Xs.add(this));
            var t = e.stack;
            this.componentDidCatch(e.value, {
              componentStack: null !== t ? t : "",
            });
          }),
        n
      );
    }
    function wa(t, e, n) {
      var i = t.pingCache;
      if (null === i) {
        i = t.pingCache = new ma();
        var r = new Set();
        i.set(e, r);
      } else void 0 === (r = i.get(e)) && ((r = new Set()), i.set(e, r));
      r.has(n) || (r.add(n), (t = Tu.bind(null, t, e, n)), e.then(t, t));
    }
    function ya(t) {
      do {
        var e;
        if (
          ((e = 13 === t.tag) &&
            (e = null === (e = t.memoizedState) || null !== e.dehydrated),
          e)
        )
          return t;
        t = t.return;
      } while (null !== t);
      return null;
    }
    function ka(t, e, n, i, r) {
      return 1 & t.mode
        ? ((t.flags |= 65536), (t.lanes = r), t)
        : (t === e
            ? (t.flags |= 65536)
            : ((t.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate
                  ? (n.tag = 17)
                  : (((e = Bo(-1, 1)).tag = 2), Go(n, e, 1))),
              (n.lanes |= 1)),
          t);
    }
    var xa = M.ReactCurrentOwner,
      Sa = !1;
    function Ma(t, e, n, i) {
      e.child = null === t ? Co(e, null, n, i) : Eo(e, t.child, n, i);
    }
    function Ea(t, e, n, i, r) {
      n = n.render;
      var o = e.ref;
      return (
        Fo(e, r),
        (i = yl(t, e, n, i, o, r)),
        (n = kl()),
        null === t || Sa
          ? (so && n && ro(e), (e.flags |= 1), Ma(t, e, i, r), e.child)
          : ((e.updateQueue = t.updateQueue),
            (e.flags &= -2053),
            (t.lanes &= ~r),
            Ya(t, e, r))
      );
    }
    function Ca(t, e, n, i, r) {
      if (null === t) {
        var o = n.type;
        return "function" != typeof o ||
          Ru(o) ||
          void 0 !== o.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((t = Du(n.type, null, i, e, e.mode, r)).ref = e.ref),
            (t.return = e),
            (e.child = t))
          : ((e.tag = 15), (e.type = o), Aa(t, e, o, i, r));
      }
      if (((o = t.child), 0 === (t.lanes & r))) {
        var l = o.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : hi)(l, i) && t.ref === e.ref)
          return Ya(t, e, r);
      }
      return (
        (e.flags |= 1),
        ((t = _u(o, i)).ref = e.ref),
        (t.return = e),
        (e.child = t)
      );
    }
    function Aa(t, e, n, i, r) {
      if (null !== t) {
        var o = t.memoizedProps;
        if (hi(o, i) && t.ref === e.ref) {
          if (((Sa = !1), (e.pendingProps = i = o), 0 === (t.lanes & r)))
            return (e.lanes = t.lanes), Ya(t, e, r);
          131072 & t.flags && (Sa = !0);
        }
      }
      return La(t, e, n, i, r);
    }
    function Ia(t, e, n) {
      var i = e.pendingProps,
        r = i.children,
        o = null !== t ? t.memoizedState : null;
      if ("hidden" === i.mode)
        if (1 & e.mode) {
          if (!(1073741824 & n))
            return (
              (t = null !== o ? o.baseLanes | n : n),
              (e.lanes = e.childLanes = 1073741824),
              (e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null,
              }),
              (e.updateQueue = null),
              Lr(_s, Rs),
              (Rs |= t),
              null
            );
          (e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (i = null !== o ? o.baseLanes : n),
            Lr(_s, Rs),
            (Rs |= i);
        } else
          (e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            Lr(_s, Rs),
            (Rs |= n);
      else
        null !== o
          ? ((i = o.baseLanes | n), (e.memoizedState = null))
          : (i = n),
          Lr(_s, Rs),
          (Rs |= i);
      return Ma(t, e, r, n), e.child;
    }
    function Ta(t, e) {
      var n = e.ref;
      ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
        ((e.flags |= 512), (e.flags |= 2097152));
    }
    function La(t, e, n, i, r) {
      var o = Rr(n) ? Fr : Or.current;
      return (
        (o = Pr(e, o)),
        Fo(e, r),
        (n = yl(t, e, n, i, o, r)),
        (i = kl()),
        null === t || Sa
          ? (so && i && ro(e), (e.flags |= 1), Ma(t, e, n, r), e.child)
          : ((e.updateQueue = t.updateQueue),
            (e.flags &= -2053),
            (t.lanes &= ~r),
            Ya(t, e, r))
      );
    }
    function za(t, e, n, i, r) {
      if (Rr(n)) {
        var o = !0;
        $r(e);
      } else o = !1;
      if ((Fo(e, r), null === e.stateNode))
        Wa(t, e), ca(e, n, i), da(e, n, i, r), (i = !0);
      else if (null === t) {
        var l = e.stateNode,
          a = e.memoizedProps;
        l.props = a;
        var s = l.context,
          u = n.contextType;
        u =
          "object" == typeof u && null !== u
            ? Po(u)
            : Pr(e, (u = Rr(n) ? Fr : Or.current));
        var c = n.getDerivedStateFromProps,
          f =
            "function" == typeof c ||
            "function" == typeof l.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
            "function" != typeof l.componentWillReceiveProps) ||
          ((a !== i || s !== u) && fa(e, l, i, u)),
          ($o = !1);
        var d = e.memoizedState;
        (l.state = d),
          Wo(e, i, l, r),
          (s = e.memoizedState),
          a !== i || d !== s || jr.current || $o
            ? ("function" == typeof c &&
                (aa(e, n, c, i), (s = e.memoizedState)),
              (a = $o || ua(e, n, a, i, d, s, u))
                ? (f ||
                    ("function" != typeof l.UNSAFE_componentWillMount &&
                      "function" != typeof l.componentWillMount) ||
                    ("function" == typeof l.componentWillMount &&
                      l.componentWillMount(),
                    "function" == typeof l.UNSAFE_componentWillMount &&
                      l.UNSAFE_componentWillMount()),
                  "function" == typeof l.componentDidMount &&
                    (e.flags |= 4194308))
                : ("function" == typeof l.componentDidMount &&
                    (e.flags |= 4194308),
                  (e.memoizedProps = i),
                  (e.memoizedState = s)),
              (l.props = i),
              (l.state = s),
              (l.context = u),
              (i = a))
            : ("function" == typeof l.componentDidMount && (e.flags |= 4194308),
              (i = !1));
      } else {
        (l = e.stateNode),
          Vo(t, e),
          (a = e.memoizedProps),
          (u = e.type === e.elementType ? a : la(e.type, a)),
          (l.props = u),
          (f = e.pendingProps),
          (d = l.context),
          (s =
            "object" == typeof (s = n.contextType) && null !== s
              ? Po(s)
              : Pr(e, (s = Rr(n) ? Fr : Or.current)));
        var h = n.getDerivedStateFromProps;
        (c =
          "function" == typeof h ||
          "function" == typeof l.getSnapshotBeforeUpdate) ||
          ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
            "function" != typeof l.componentWillReceiveProps) ||
          ((a !== f || d !== s) && fa(e, l, i, s)),
          ($o = !1),
          (d = e.memoizedState),
          (l.state = d),
          Wo(e, i, l, r);
        var p = e.memoizedState;
        a !== f || d !== p || jr.current || $o
          ? ("function" == typeof h && (aa(e, n, h, i), (p = e.memoizedState)),
            (u = $o || ua(e, n, u, i, d, p, s) || !1)
              ? (c ||
                  ("function" != typeof l.UNSAFE_componentWillUpdate &&
                    "function" != typeof l.componentWillUpdate) ||
                  ("function" == typeof l.componentWillUpdate &&
                    l.componentWillUpdate(i, p, s),
                  "function" == typeof l.UNSAFE_componentWillUpdate &&
                    l.UNSAFE_componentWillUpdate(i, p, s)),
                "function" == typeof l.componentDidUpdate && (e.flags |= 4),
                "function" == typeof l.getSnapshotBeforeUpdate &&
                  (e.flags |= 1024))
              : ("function" != typeof l.componentDidUpdate ||
                  (a === t.memoizedProps && d === t.memoizedState) ||
                  (e.flags |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (a === t.memoizedProps && d === t.memoizedState) ||
                  (e.flags |= 1024),
                (e.memoizedProps = i),
                (e.memoizedState = p)),
            (l.props = i),
            (l.state = p),
            (l.context = s),
            (i = u))
          : ("function" != typeof l.componentDidUpdate ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            "function" != typeof l.getSnapshotBeforeUpdate ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (i = !1));
      }
      return Oa(t, e, n, i, o, r);
    }
    function Oa(t, e, n, i, r, o) {
      Ta(t, e);
      var l = !!(128 & e.flags);
      if (!i && !l) return r && Hr(e, n, !1), Ya(t, e, o);
      (i = e.stateNode), (xa.current = e);
      var a =
        l && "function" != typeof n.getDerivedStateFromError
          ? null
          : i.render();
      return (
        (e.flags |= 1),
        null !== t && l
          ? ((e.child = Eo(e, t.child, null, o)), (e.child = Eo(e, null, a, o)))
          : Ma(t, e, a, o),
        (e.memoizedState = i.state),
        r && Hr(e, n, !0),
        e.child
      );
    }
    function ja(t) {
      var e = t.stateNode;
      e.pendingContext
        ? Dr(0, e.pendingContext, e.pendingContext !== e.context)
        : e.context && Dr(0, e.context, !1),
        tl(t, e.containerInfo);
    }
    function Fa(t, e, n, i, r) {
      return bo(), wo(r), (e.flags |= 256), Ma(t, e, n, i), e.child;
    }
    var Pa,
      Ra,
      _a,
      Da,
      Na = { dehydrated: null, treeContext: null, retryLane: 0 };
    function $a(t) {
      return { baseLanes: t, cachePool: null, transitions: null };
    }
    function Ha(t, e, i) {
      var r,
        o = e.pendingProps,
        l = rl.current,
        a = !1,
        s = !!(128 & e.flags);
      if (
        ((r = s) || (r = (null === t || null !== t.memoizedState) && !!(2 & l)),
        r
          ? ((a = !0), (e.flags &= -129))
          : (null !== t && null === t.memoizedState) || (l |= 1),
        Lr(rl, 1 & l),
        null === t)
      )
        return (
          po(e),
          null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
            ? (1 & e.mode
                ? "$!" === t.data
                  ? (e.lanes = 8)
                  : (e.lanes = 1073741824)
                : (e.lanes = 1),
              null)
            : ((s = o.children),
              (t = o.fallback),
              a
                ? ((o = e.mode),
                  (a = e.child),
                  (s = { mode: "hidden", children: s }),
                  1 & o || null === a
                    ? (a = $u(s, o, 0, null))
                    : ((a.childLanes = 0), (a.pendingProps = s)),
                  (t = Nu(t, o, i, null)),
                  (a.return = e),
                  (t.return = e),
                  (a.sibling = t),
                  (e.child = a),
                  (e.child.memoizedState = $a(i)),
                  (e.memoizedState = Na),
                  t)
                : Va(e, s))
        );
      if (null !== (l = t.memoizedState) && null !== (r = l.dehydrated))
        return (function (t, e, i, r, o, l, a) {
          if (i)
            return 256 & e.flags
              ? ((e.flags &= -257), Ba(t, e, a, (r = pa(Error(n(422))))))
              : null !== e.memoizedState
              ? ((e.child = t.child), (e.flags |= 128), null)
              : ((l = r.fallback),
                (o = e.mode),
                (r = $u({ mode: "visible", children: r.children }, o, 0, null)),
                ((l = Nu(l, o, a, null)).flags |= 2),
                (r.return = e),
                (l.return = e),
                (r.sibling = l),
                (e.child = r),
                1 & e.mode && Eo(e, t.child, null, a),
                (e.child.memoizedState = $a(a)),
                (e.memoizedState = Na),
                l);
          if (!(1 & e.mode)) return Ba(t, e, a, null);
          if ("$!" === o.data) {
            if ((r = o.nextSibling && o.nextSibling.dataset)) var s = r.dgst;
            return (
              (r = s), Ba(t, e, a, (r = pa((l = Error(n(419))), r, void 0)))
            );
          }
          if (((s = 0 !== (a & t.childLanes)), Sa || s)) {
            if (null !== (r = js)) {
              switch (a & -a) {
                case 4:
                  o = 2;
                  break;
                case 16:
                  o = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  o = 32;
                  break;
                case 536870912:
                  o = 268435456;
                  break;
                default:
                  o = 0;
              }
              0 !== (o = 0 !== (o & (r.suspendedLanes | a)) ? 0 : o) &&
                o !== l.retryLane &&
                ((l.retryLane = o), No(t, o), lu(r, t, o, -1));
            }
            return wu(), Ba(t, e, a, (r = pa(Error(n(421)))));
          }
          return "$?" === o.data
            ? ((e.flags |= 128),
              (e.child = t.child),
              (e = zu.bind(null, t)),
              (o.B = e),
              null)
            : ((t = l.treeContext),
              (ao = hr(o.nextSibling)),
              (lo = e),
              (so = !0),
              (uo = null),
              null !== t &&
                ((Zr[Jr++] = to),
                (Zr[Jr++] = eo),
                (Zr[Jr++] = Qr),
                (to = t.id),
                (eo = t.overflow),
                (Qr = e)),
              ((e = Va(e, r.children)).flags |= 4096),
              e);
        })(t, e, s, o, r, l, i);
      if (a) {
        (a = o.fallback), (s = e.mode), (r = (l = t.child).sibling);
        var u = { mode: "hidden", children: o.children };
        return (
          1 & s || e.child === l
            ? ((o = _u(l, u)).subtreeFlags = 14680064 & l.subtreeFlags)
            : (((o = e.child).childLanes = 0),
              (o.pendingProps = u),
              (e.deletions = null)),
          null !== r ? (a = _u(r, a)) : ((a = Nu(a, s, i, null)).flags |= 2),
          (a.return = e),
          (o.return = e),
          (o.sibling = a),
          (e.child = o),
          (o = a),
          (a = e.child),
          (s =
            null === (s = t.child.memoizedState)
              ? $a(i)
              : {
                  baseLanes: s.baseLanes | i,
                  cachePool: null,
                  transitions: s.transitions,
                }),
          (a.memoizedState = s),
          (a.childLanes = t.childLanes & ~i),
          (e.memoizedState = Na),
          o
        );
      }
      return (
        (t = (a = t.child).sibling),
        (o = _u(a, { mode: "visible", children: o.children })),
        !(1 & e.mode) && (o.lanes = i),
        (o.return = e),
        (o.sibling = null),
        null !== t &&
          (null === (i = e.deletions)
            ? ((e.deletions = [t]), (e.flags |= 16))
            : i.push(t)),
        (e.child = o),
        (e.memoizedState = null),
        o
      );
    }
    function Va(t, e) {
      return (
        ((e = $u({ mode: "visible", children: e }, t.mode, 0, null)).return =
          t),
        (t.child = e)
      );
    }
    function Ba(t, e, n, i) {
      return (
        null !== i && wo(i),
        Eo(e, t.child, null, n),
        ((t = Va(e, e.pendingProps.children)).flags |= 2),
        (e.memoizedState = null),
        t
      );
    }
    function Ga(t, e, n) {
      t.lanes |= e;
      var i = t.alternate;
      null !== i && (i.lanes |= e), jo(t.return, e, n);
    }
    function Ka(t, e, n, i, r) {
      var o = t.memoizedState;
      null === o
        ? (t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: r,
          })
        : ((o.isBackwards = e),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = i),
          (o.tail = n),
          (o.tailMode = r));
    }
    function Ua(t, e, n) {
      var i = e.pendingProps,
        r = i.revealOrder,
        o = i.tail;
      if ((Ma(t, e, i.children, n), 2 & (i = rl.current)))
        (i = (1 & i) | 2), (e.flags |= 128);
      else {
        if (null !== t && 128 & t.flags)
          t: for (t = e.child; null !== t; ) {
            if (13 === t.tag) null !== t.memoizedState && Ga(t, n, e);
            else if (19 === t.tag) Ga(t, n, e);
            else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break t;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) break t;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        i &= 1;
      }
      if ((Lr(rl, i), 1 & e.mode))
        switch (r) {
          case "forwards":
            for (n = e.child, r = null; null !== n; )
              null !== (t = n.alternate) && null === ol(t) && (r = n),
                (n = n.sibling);
            null === (n = r)
              ? ((r = e.child), (e.child = null))
              : ((r = n.sibling), (n.sibling = null)),
              Ka(e, !1, r, n, o);
            break;
          case "backwards":
            for (n = null, r = e.child, e.child = null; null !== r; ) {
              if (null !== (t = r.alternate) && null === ol(t)) {
                e.child = r;
                break;
              }
              (t = r.sibling), (r.sibling = n), (n = r), (r = t);
            }
            Ka(e, !0, n, null, o);
            break;
          case "together":
            Ka(e, !1, null, null, void 0);
            break;
          default:
            e.memoizedState = null;
        }
      else e.memoizedState = null;
      return e.child;
    }
    function Wa(t, e) {
      !(1 & e.mode) &&
        null !== t &&
        ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
    }
    function Ya(t, e, i) {
      if (
        (null !== t && (e.dependencies = t.dependencies),
        ($s |= e.lanes),
        0 === (i & e.childLanes))
      )
        return null;
      if (null !== t && e.child !== t.child) throw Error(n(153));
      if (null !== e.child) {
        for (
          i = _u((t = e.child), t.pendingProps), e.child = i, i.return = e;
          null !== t.sibling;

        )
          (t = t.sibling), ((i = i.sibling = _u(t, t.pendingProps)).return = e);
        i.sibling = null;
      }
      return e.child;
    }
    function qa(t, e) {
      if (!so)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var n = null; null !== e; )
              null !== e.alternate && (n = e), (e = e.sibling);
            null === n ? (t.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = t.tail;
            for (var i = null; null !== n; )
              null !== n.alternate && (i = n), (n = n.sibling);
            null === i
              ? e || null === t.tail
                ? (t.tail = null)
                : (t.tail.sibling = null)
              : (i.sibling = null);
        }
    }
    function Xa(t) {
      var e = null !== t.alternate && t.alternate.child === t.child,
        n = 0,
        i = 0;
      if (e)
        for (var r = t.child; null !== r; )
          (n |= r.lanes | r.childLanes),
            (i |= 14680064 & r.subtreeFlags),
            (i |= 14680064 & r.flags),
            (r.return = t),
            (r = r.sibling);
      else
        for (r = t.child; null !== r; )
          (n |= r.lanes | r.childLanes),
            (i |= r.subtreeFlags),
            (i |= r.flags),
            (r.return = t),
            (r = r.sibling);
      return (t.subtreeFlags |= i), (t.childLanes = n), e;
    }
    function Za(t, e, i) {
      var o = e.pendingProps;
      switch ((oo(e), e.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Xa(e), null;
        case 1:
        case 17:
          return Rr(e.type) && _r(), Xa(e), null;
        case 3:
          return (
            (o = e.stateNode),
            el(),
            Tr(jr),
            Tr(Or),
            al(),
            o.pendingContext &&
              ((o.context = o.pendingContext), (o.pendingContext = null)),
            (null !== t && null !== t.child) ||
              (mo(e)
                ? (e.flags |= 4)
                : null === t ||
                  (t.memoizedState.isDehydrated && !(256 & e.flags)) ||
                  ((e.flags |= 1024), null !== uo && (cu(uo), (uo = null)))),
            Ra(t, e),
            Xa(e),
            null
          );
        case 5:
          il(e);
          var l = Qo(Jo.current);
          if (((i = e.type), null !== t && null != e.stateNode))
            _a(t, e, i, o, l),
              t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
          else {
            if (!o) {
              if (null === e.stateNode) throw Error(n(166));
              return Xa(e), null;
            }
            if (((t = Qo(Xo.current)), mo(e))) {
              (o = e.stateNode), (i = e.type);
              var a = e.memoizedProps;
              switch (((o[mr] = e), (o[vr] = a), (t = !!(1 & e.mode)), i)) {
                case "dialog":
                  Gi("cancel", o), Gi("close", o);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Gi("load", o);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < $i.length; l++) Gi($i[l], o);
                  break;
                case "source":
                  Gi("error", o);
                  break;
                case "img":
                case "image":
                case "link":
                  Gi("error", o), Gi("load", o);
                  break;
                case "details":
                  Gi("toggle", o);
                  break;
                case "input":
                  tt(o, a), Gi("invalid", o);
                  break;
                case "select":
                  (o.j = { wasMultiple: !!a.multiple }), Gi("invalid", o);
                  break;
                case "textarea":
                  st(o, a), Gi("invalid", o);
              }
              for (var s in (xt(i, a), (l = null), a))
                if (a.hasOwnProperty(s)) {
                  var u = a[s];
                  "children" === s
                    ? "string" == typeof u
                      ? o.textContent !== u &&
                        (!0 !== a.suppressHydrationWarning &&
                          nr(o.textContent, u, t),
                        (l = ["children", u]))
                      : "number" == typeof u &&
                        o.textContent !== "" + u &&
                        (!0 !== a.suppressHydrationWarning &&
                          nr(o.textContent, u, t),
                        (l = ["children", "" + u]))
                    : r.hasOwnProperty(s) &&
                      null != u &&
                      "onScroll" === s &&
                      Gi("scroll", o);
                }
              switch (i) {
                case "input":
                  X(o), it(o, a, !0);
                  break;
                case "textarea":
                  X(o), ct(o);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof a.onClick && (o.onclick = ir);
              }
              (o = l), (e.updateQueue = o), null !== o && (e.flags |= 4);
            } else {
              (s = 9 === l.nodeType ? l : l.ownerDocument),
                "http://www.w3.org/1999/xhtml" === t && (t = ft(i)),
                "http://www.w3.org/1999/xhtml" === t
                  ? "script" === i
                    ? (((t = s.createElement("div")).innerHTML =
                        "<script></script>"),
                      (t = t.removeChild(t.firstChild)))
                    : "string" == typeof o.is
                    ? (t = s.createElement(i, { is: o.is }))
                    : ((t = s.createElement(i)),
                      "select" === i &&
                        ((s = t),
                        o.multiple
                          ? (s.multiple = !0)
                          : o.size && (s.size = o.size)))
                  : (t = s.createElementNS(t, i)),
                (t[mr] = e),
                (t[vr] = o),
                Pa(t, e, !1, !1),
                (e.stateNode = t);
              t: {
                switch (((s = St(i, o)), i)) {
                  case "dialog":
                    Gi("cancel", t), Gi("close", t), (l = o);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Gi("load", t), (l = o);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < $i.length; l++) Gi($i[l], t);
                    l = o;
                    break;
                  case "source":
                    Gi("error", t), (l = o);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Gi("error", t), Gi("load", t), (l = o);
                    break;
                  case "details":
                    Gi("toggle", t), (l = o);
                    break;
                  case "input":
                    tt(t, o), (l = Q(t, o)), Gi("invalid", t);
                    break;
                  case "option":
                  default:
                    l = o;
                    break;
                  case "select":
                    (t.j = { wasMultiple: !!o.multiple }),
                      (l = H({}, o, { value: void 0 })),
                      Gi("invalid", t);
                    break;
                  case "textarea":
                    st(t, o), (l = at(t, o)), Gi("invalid", t);
                }
                for (a in (xt(i, l), (u = l)))
                  if (u.hasOwnProperty(a)) {
                    var c = u[a];
                    "style" === a
                      ? yt(t, c)
                      : "dangerouslySetInnerHTML" === a
                      ? null != (c = c ? c.F : void 0) && gt(t, c)
                      : "children" === a
                      ? "string" == typeof c
                        ? ("textarea" !== i || "" !== c) && mt(t, c)
                        : "number" == typeof c && mt(t, "" + c)
                      : "suppressContentEditableWarning" !== a &&
                        "suppressHydrationWarning" !== a &&
                        "autoFocus" !== a &&
                        (r.hasOwnProperty(a)
                          ? null != c && "onScroll" === a && Gi("scroll", t)
                          : null != c && S(t, a, c, s));
                  }
                switch (i) {
                  case "input":
                    X(t), it(t, o, !1);
                    break;
                  case "textarea":
                    X(t), ct(t);
                    break;
                  case "option":
                    null != o.value && t.setAttribute("value", "" + Y(o.value));
                    break;
                  case "select":
                    (t.multiple = !!o.multiple),
                      null != (a = o.value)
                        ? lt(t, !!o.multiple, a, !1)
                        : null != o.defaultValue &&
                          lt(t, !!o.multiple, o.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof l.onClick && (t.onclick = ir);
                }
                switch (i) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o = !!o.autoFocus;
                    break t;
                  case "img":
                    o = !0;
                    break t;
                  default:
                    o = !1;
                }
              }
              o && (e.flags |= 4);
            }
            null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
          }
          return Xa(e), null;
        case 6:
          if (t && null != e.stateNode) Da(t, e, t.memoizedProps, o);
          else {
            if ("string" != typeof o && null === e.stateNode)
              throw Error(n(166));
            if (((i = Qo(Jo.current)), Qo(Xo.current), mo(e))) {
              if (
                ((o = e.stateNode),
                (i = e.memoizedProps),
                (o[mr] = e),
                (a = o.nodeValue !== i) && null !== (t = lo))
              )
                switch (t.tag) {
                  case 3:
                    nr(o.nodeValue, i, !!(1 & t.mode));
                    break;
                  case 5:
                    !0 !== t.memoizedProps.suppressHydrationWarning &&
                      nr(o.nodeValue, i, !!(1 & t.mode));
                }
              a && (e.flags |= 4);
            } else
              ((o = (9 === i.nodeType ? i : i.ownerDocument).createTextNode(o))[
                mr
              ] = e),
                (e.stateNode = o);
          }
          return Xa(e), null;
        case 13:
          if (
            (Tr(rl),
            (o = e.memoizedState),
            null === t ||
              (null !== t.memoizedState && null !== t.memoizedState.dehydrated))
          ) {
            if (so && null !== ao && 1 & e.mode && !(128 & e.flags))
              vo(), bo(), (e.flags |= 98560), (a = !1);
            else if (((a = mo(e)), null !== o && null !== o.dehydrated)) {
              if (null === t) {
                if (!a) throw Error(n(318));
                if (!(a = null !== (a = e.memoizedState) ? a.dehydrated : null))
                  throw Error(n(317));
                a[mr] = e;
              } else
                bo(),
                  !(128 & e.flags) && (e.memoizedState = null),
                  (e.flags |= 4);
              Xa(e), (a = !1);
            } else null !== uo && (cu(uo), (uo = null)), (a = !0);
            if (!a) return 65536 & e.flags ? e : null;
          }
          return 128 & e.flags
            ? ((e.lanes = i), e)
            : ((o = null !== o) != (null !== t && null !== t.memoizedState) &&
                o &&
                ((e.child.flags |= 8192),
                1 & e.mode &&
                  (null === t || 1 & rl.current ? 0 === Ds && (Ds = 3) : wu())),
              null !== e.updateQueue && (e.flags |= 4),
              Xa(e),
              null);
        case 4:
          return (
            el(),
            Ra(t, e),
            null === t && Wi(e.stateNode.containerInfo),
            Xa(e),
            null
          );
        case 10:
          return Oo(e.type.A), Xa(e), null;
        case 19:
          if ((Tr(rl), null === (a = e.memoizedState))) return Xa(e), null;
          if (((o = !!(128 & e.flags)), null === (s = a.rendering)))
            if (o) qa(a, !1);
            else {
              if (0 !== Ds || (null !== t && 128 & t.flags))
                for (t = e.child; null !== t; ) {
                  if (null !== (s = ol(t))) {
                    for (
                      e.flags |= 128,
                        qa(a, !1),
                        null !== (o = s.updateQueue) &&
                          ((e.updateQueue = o), (e.flags |= 4)),
                        e.subtreeFlags = 0,
                        o = i,
                        i = e.child;
                      null !== i;

                    )
                      (t = o),
                        ((a = i).flags &= 14680066),
                        null === (s = a.alternate)
                          ? ((a.childLanes = 0),
                            (a.lanes = t),
                            (a.child = null),
                            (a.subtreeFlags = 0),
                            (a.memoizedProps = null),
                            (a.memoizedState = null),
                            (a.updateQueue = null),
                            (a.dependencies = null),
                            (a.stateNode = null))
                          : ((a.childLanes = s.childLanes),
                            (a.lanes = s.lanes),
                            (a.child = s.child),
                            (a.subtreeFlags = 0),
                            (a.deletions = null),
                            (a.memoizedProps = s.memoizedProps),
                            (a.memoizedState = s.memoizedState),
                            (a.updateQueue = s.updateQueue),
                            (a.type = s.type),
                            (t = s.dependencies),
                            (a.dependencies =
                              null === t
                                ? null
                                : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext,
                                  })),
                        (i = i.sibling);
                    return Lr(rl, (1 & rl.current) | 2), e.child;
                  }
                  t = t.sibling;
                }
              null !== a.tail &&
                ne() > Us &&
                ((e.flags |= 128), (o = !0), qa(a, !1), (e.lanes = 4194304));
            }
          else {
            if (!o)
              if (null !== (t = ol(s))) {
                if (
                  ((e.flags |= 128),
                  (o = !0),
                  null !== (i = t.updateQueue) &&
                    ((e.updateQueue = i), (e.flags |= 4)),
                  qa(a, !0),
                  null === a.tail &&
                    "hidden" === a.tailMode &&
                    !s.alternate &&
                    !so)
                )
                  return Xa(e), null;
              } else
                2 * ne() - a.renderingStartTime > Us &&
                  1073741824 !== i &&
                  ((e.flags |= 128), (o = !0), qa(a, !1), (e.lanes = 4194304));
            a.isBackwards
              ? ((s.sibling = e.child), (e.child = s))
              : (null !== (i = a.last) ? (i.sibling = s) : (e.child = s),
                (a.last = s));
          }
          return null !== a.tail
            ? ((e = a.tail),
              (a.rendering = e),
              (a.tail = e.sibling),
              (a.renderingStartTime = ne()),
              (e.sibling = null),
              (i = rl.current),
              Lr(rl, o ? (1 & i) | 2 : 1 & i),
              e)
            : (Xa(e), null);
        case 22:
        case 23:
          return (
            gu(),
            (o = null !== e.memoizedState),
            null !== t && (null !== t.memoizedState) !== o && (e.flags |= 8192),
            o && 1 & e.mode
              ? !!(1073741824 & Rs) &&
                (Xa(e), 6 & e.subtreeFlags && (e.flags |= 8192))
              : Xa(e),
            null
          );
        case 24:
        case 25:
          return null;
      }
      throw Error(n(156, e.tag));
    }
    function Ja(t, e) {
      switch ((oo(e), e.tag)) {
        case 1:
          return (
            Rr(e.type) && _r(),
            65536 & (t = e.flags) ? ((e.flags = (-65537 & t) | 128), e) : null
          );
        case 3:
          return (
            el(),
            Tr(jr),
            Tr(Or),
            al(),
            65536 & (t = e.flags) && !(128 & t)
              ? ((e.flags = (-65537 & t) | 128), e)
              : null
          );
        case 5:
          return il(e), null;
        case 13:
          if (
            (Tr(rl), null !== (t = e.memoizedState) && null !== t.dehydrated)
          ) {
            if (null === e.alternate) throw Error(n(340));
            bo();
          }
          return 65536 & (t = e.flags)
            ? ((e.flags = (-65537 & t) | 128), e)
            : null;
        case 19:
          return Tr(rl), null;
        case 4:
          return el(), null;
        case 10:
          return Oo(e.type.A), null;
        case 22:
        case 23:
          return gu(), null;
        default:
          return null;
      }
    }
    (Pa = function (t, e) {
      for (var n = e.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (Ra = function () {}),
      (_a = function (t, e, n, i) {
        var o = t.memoizedProps;
        if (o !== i) {
          (t = e.stateNode), Qo(Xo.current);
          var l,
            a = null;
          switch (n) {
            case "input":
              (o = Q(t, o)), (i = Q(t, i)), (a = []);
              break;
            case "select":
              (o = H({}, o, { value: void 0 })),
                (i = H({}, i, { value: void 0 })),
                (a = []);
              break;
            case "textarea":
              (o = at(t, o)), (i = at(t, i)), (a = []);
              break;
            default:
              "function" != typeof o.onClick &&
                "function" == typeof i.onClick &&
                (t.onclick = ir);
          }
          for (c in (xt(n, i), (n = null), o))
            if (!i.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
              if ("style" === c) {
                var s = o[c];
                for (l in s)
                  s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
              } else
                "dangerouslySetInnerHTML" !== c &&
                  "children" !== c &&
                  "suppressContentEditableWarning" !== c &&
                  "suppressHydrationWarning" !== c &&
                  "autoFocus" !== c &&
                  (r.hasOwnProperty(c)
                    ? a || (a = [])
                    : (a = a || []).push(c, null));
          for (c in i) {
            var u = i[c];
            if (
              ((s = null != o ? o[c] : void 0),
              i.hasOwnProperty(c) && u !== s && (null != u || null != s))
            )
              if ("style" === c)
                if (s) {
                  for (l in s)
                    !s.hasOwnProperty(l) ||
                      (u && u.hasOwnProperty(l)) ||
                      (n || (n = {}), (n[l] = ""));
                  for (l in u)
                    u.hasOwnProperty(l) &&
                      s[l] !== u[l] &&
                      (n || (n = {}), (n[l] = u[l]));
                } else n || (a || (a = []), a.push(c, n)), (n = u);
              else
                "dangerouslySetInnerHTML" === c
                  ? ((u = u ? u.F : void 0),
                    (s = s ? s.F : void 0),
                    null != u && s !== u && (a = a || []).push(c, u))
                  : "children" === c
                  ? ("string" != typeof u && "number" != typeof u) ||
                    (a = a || []).push(c, "" + u)
                  : "suppressContentEditableWarning" !== c &&
                    "suppressHydrationWarning" !== c &&
                    (r.hasOwnProperty(c)
                      ? (null != u && "onScroll" === c && Gi("scroll", t),
                        a || s === u || (a = []))
                      : (a = a || []).push(c, u));
          }
          n && (a = a || []).push("style", n);
          var c = a;
          (e.updateQueue = c) && (e.flags |= 4);
        }
      }),
      (Da = function (t, e, n, i) {
        n !== i && (e.flags |= 4);
      });
    var Qa = !1,
      ts = !1,
      es = "function" == typeof WeakSet ? WeakSet : Set,
      ns = null;
    function is(t, e) {
      var n = t.ref;
      if (null !== n)
        if ("function" == typeof n)
          try {
            n(null);
          } catch (i) {
            Iu(t, e, i);
          }
        else n.current = null;
    }
    function rs(t, e, n) {
      try {
        n();
      } catch (i) {
        Iu(t, e, i);
      }
    }
    var os = !1;
    function ls(t, e, n) {
      var i = e.updateQueue;
      if (null !== (i = null !== i ? i.lastEffect : null)) {
        var r = (i = i.next);
        do {
          if ((r.tag & t) === t) {
            var o = r.destroy;
            (r.destroy = void 0), void 0 !== o && rs(e, n, o);
          }
          r = r.next;
        } while (r !== i);
      }
    }
    function as(t, e) {
      if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
        var n = (e = e.next);
        do {
          if ((n.tag & t) === t) {
            var i = n.create;
            n.destroy = i();
          }
          n = n.next;
        } while (n !== e);
      }
    }
    function ss(t) {
      var e = t.ref;
      if (null !== e) {
        var n = t.stateNode;
        t.tag, (t = n), "function" == typeof e ? e(t) : (e.current = t);
      }
    }
    function us(t) {
      var e = t.alternate;
      null !== e && ((t.alternate = null), us(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        5 === t.tag &&
          null !== (e = t.stateNode) &&
          (delete e[mr],
          delete e[vr],
          delete e[wr],
          delete e[yr],
          delete e[kr]),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
    }
    function cs(t) {
      return 5 === t.tag || 3 === t.tag || 4 === t.tag;
    }
    function fs(t) {
      t: for (;;) {
        for (; null === t.sibling; ) {
          if (null === t.return || cs(t.return)) return null;
          t = t.return;
        }
        for (
          t.sibling.return = t.return, t = t.sibling;
          5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

        ) {
          if (2 & t.flags) continue t;
          if (null === t.child || 4 === t.tag) continue t;
          (t.child.return = t), (t = t.child);
        }
        if (!(2 & t.flags)) return t.stateNode;
      }
    }
    function ds(t, e, n) {
      var i = t.tag;
      if (5 === i || 6 === i)
        (t = t.stateNode),
          e
            ? 8 === n.nodeType
              ? n.parentNode.insertBefore(t, e)
              : n.insertBefore(t, e)
            : (8 === n.nodeType
                ? (e = n.parentNode).insertBefore(t, n)
                : (e = n).appendChild(t),
              null != (n = n.G) || null !== e.onclick || (e.onclick = ir));
      else if (4 !== i && null !== (t = t.child))
        for (ds(t, e, n), t = t.sibling; null !== t; )
          ds(t, e, n), (t = t.sibling);
    }
    function hs(t, e, n) {
      var i = t.tag;
      if (5 === i || 6 === i)
        (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
      else if (4 !== i && null !== (t = t.child))
        for (hs(t, e, n), t = t.sibling; null !== t; )
          hs(t, e, n), (t = t.sibling);
    }
    var ps = null,
      gs = !1;
    function ms(t, e, n) {
      for (n = n.child; null !== n; ) vs(t, e, n), (n = n.sibling);
    }
    function vs(t, e, n) {
      if (ce && "function" == typeof ce.onCommitFiberUnmount)
        try {
          ce.onCommitFiberUnmount(ue, n);
        } catch (a) {}
      switch (n.tag) {
        case 5:
          ts || is(n, e);
        case 6:
          var i = ps,
            r = gs;
          (ps = null),
            ms(t, e, n),
            (gs = r),
            null !== (ps = i) &&
              (gs
                ? ((t = ps),
                  (n = n.stateNode),
                  8 === t.nodeType
                    ? t.parentNode.removeChild(n)
                    : t.removeChild(n))
                : ps.removeChild(n.stateNode));
          break;
        case 18:
          null !== ps &&
            (gs
              ? ((t = ps),
                (n = n.stateNode),
                8 === t.nodeType
                  ? dr(t.parentNode, n)
                  : 1 === t.nodeType && dr(t, n),
                We(t))
              : dr(ps, n.stateNode));
          break;
        case 4:
          (i = ps),
            (r = gs),
            (ps = n.stateNode.containerInfo),
            (gs = !0),
            ms(t, e, n),
            (ps = i),
            (gs = r);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !ts &&
            null !== (i = n.updateQueue) &&
            null !== (i = i.lastEffect)
          ) {
            r = i = i.next;
            do {
              var o = r,
                l = o.destroy;
              (o = o.tag),
                void 0 !== l && (2 & o || 4 & o) && rs(n, e, l),
                (r = r.next);
            } while (r !== i);
          }
          ms(t, e, n);
          break;
        case 1:
          if (
            !ts &&
            (is(n, e),
            "function" == typeof (i = n.stateNode).componentWillUnmount)
          )
            try {
              (i.props = n.memoizedProps),
                (i.state = n.memoizedState),
                i.componentWillUnmount();
            } catch (a) {
              Iu(n, e, a);
            }
          ms(t, e, n);
          break;
        case 21:
          ms(t, e, n);
          break;
        case 22:
          1 & n.mode
            ? ((ts = (i = ts) || null !== n.memoizedState),
              ms(t, e, n),
              (ts = i))
            : ms(t, e, n);
          break;
        default:
          ms(t, e, n);
      }
    }
    function bs(t) {
      var e = t.updateQueue;
      if (null !== e) {
        t.updateQueue = null;
        var n = t.stateNode;
        null === n && (n = t.stateNode = new es()),
          e.forEach(function (e) {
            var i = Ou.bind(null, t, e);
            n.has(e) || (n.add(e), e.then(i, i));
          });
      }
    }
    function ws(t, e) {
      var i = e.deletions;
      if (null !== i)
        for (var r = 0; r < i.length; r++) {
          var o = i[r];
          try {
            var l = t,
              a = e,
              s = a;
            t: for (; null !== s; ) {
              switch (s.tag) {
                case 5:
                  (ps = s.stateNode), (gs = !1);
                  break t;
                case 3:
                case 4:
                  (ps = s.stateNode.containerInfo), (gs = !0);
                  break t;
              }
              s = s.return;
            }
            if (null === ps) throw Error(n(160));
            vs(l, a, o), (ps = null), (gs = !1);
            var u = o.alternate;
            null !== u && (u.return = null), (o.return = null);
          } catch (c) {
            Iu(o, e, c);
          }
        }
      if (12854 & e.subtreeFlags)
        for (e = e.child; null !== e; ) ys(e, t), (e = e.sibling);
    }
    function ys(t, e) {
      var i = t.alternate,
        r = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((ws(e, t), ks(t), 4 & r)) {
            try {
              ls(3, t, t.return), as(3, t);
            } catch (m) {
              Iu(t, t.return, m);
            }
            try {
              ls(5, t, t.return);
            } catch (m) {
              Iu(t, t.return, m);
            }
          }
          break;
        case 1:
          ws(e, t), ks(t), 512 & r && null !== i && is(i, i.return);
          break;
        case 5:
          if (
            (ws(e, t),
            ks(t),
            512 & r && null !== i && is(i, i.return),
            32 & t.flags)
          ) {
            var o = t.stateNode;
            try {
              mt(o, "");
            } catch (m) {
              Iu(t, t.return, m);
            }
          }
          if (4 & r && null != (o = t.stateNode)) {
            var l = t.memoizedProps,
              a = null !== i ? i.memoizedProps : l,
              s = t.type,
              u = t.updateQueue;
            if (((t.updateQueue = null), null !== u))
              try {
                "input" === s &&
                  "radio" === l.type &&
                  null != l.name &&
                  et(o, l),
                  St(s, a);
                var c = St(s, l);
                for (a = 0; a < u.length; a += 2) {
                  var f = u[a],
                    d = u[a + 1];
                  "style" === f
                    ? yt(o, d)
                    : "dangerouslySetInnerHTML" === f
                    ? gt(o, d)
                    : "children" === f
                    ? mt(o, d)
                    : S(o, f, d, c);
                }
                switch (s) {
                  case "input":
                    nt(o, l);
                    break;
                  case "textarea":
                    ut(o, l);
                    break;
                  case "select":
                    var h = o.j.wasMultiple;
                    o.j.wasMultiple = !!l.multiple;
                    var p = l.value;
                    null != p
                      ? lt(o, !!l.multiple, p, !1)
                      : h !== !!l.multiple &&
                        (null != l.defaultValue
                          ? lt(o, !!l.multiple, l.defaultValue, !0)
                          : lt(o, !!l.multiple, l.multiple ? [] : "", !1));
                }
                o[vr] = l;
              } catch (m) {
                Iu(t, t.return, m);
              }
          }
          break;
        case 6:
          if ((ws(e, t), ks(t), 4 & r)) {
            if (null === t.stateNode) throw Error(n(162));
            (o = t.stateNode), (l = t.memoizedProps);
            try {
              o.nodeValue = l;
            } catch (m) {
              Iu(t, t.return, m);
            }
          }
          break;
        case 3:
          if (
            (ws(e, t),
            ks(t),
            4 & r && null !== i && i.memoizedState.isDehydrated)
          )
            try {
              We(e.containerInfo);
            } catch (m) {
              Iu(t, t.return, m);
            }
          break;
        case 4:
        default:
          ws(e, t), ks(t);
          break;
        case 13:
          ws(e, t),
            ks(t),
            8192 & (o = t.child).flags &&
              ((l = null !== o.memoizedState),
              (o.stateNode.isHidden = l),
              !l ||
                (null !== o.alternate && null !== o.alternate.memoizedState) ||
                (Ks = ne())),
            4 & r && bs(t);
          break;
        case 22:
          if (
            ((f = null !== i && null !== i.memoizedState),
            1 & t.mode ? ((ts = (c = ts) || f), ws(e, t), (ts = c)) : ws(e, t),
            ks(t),
            8192 & r)
          ) {
            if (
              ((c = null !== t.memoizedState),
              (t.stateNode.isHidden = c) && !f && 1 & t.mode)
            )
              for (ns = t, f = t.child; null !== f; ) {
                for (d = ns = f; null !== ns; ) {
                  switch (((p = (h = ns).child), h.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ls(4, h, h.return);
                      break;
                    case 1:
                      is(h, h.return);
                      var g = h.stateNode;
                      if ("function" == typeof g.componentWillUnmount) {
                        (r = h), (i = h.return);
                        try {
                          (e = r),
                            (g.props = e.memoizedProps),
                            (g.state = e.memoizedState),
                            g.componentWillUnmount();
                        } catch (m) {
                          Iu(r, i, m);
                        }
                      }
                      break;
                    case 5:
                      is(h, h.return);
                      break;
                    case 22:
                      if (null !== h.memoizedState) {
                        Es(d);
                        continue;
                      }
                  }
                  null !== p ? ((p.return = h), (ns = p)) : Es(d);
                }
                f = f.sibling;
              }
            t: for (f = null, d = t; ; ) {
              if (5 === d.tag) {
                if (null === f) {
                  f = d;
                  try {
                    (o = d.stateNode),
                      c
                        ? "function" == typeof (l = o.style).setProperty
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none")
                        : ((s = d.stateNode),
                          (a =
                            null != (u = d.memoizedProps.style) &&
                            u.hasOwnProperty("display")
                              ? u.display
                              : null),
                          (s.style.display = wt("display", a)));
                  } catch (m) {
                    Iu(t, t.return, m);
                  }
                }
              } else if (6 === d.tag) {
                if (null === f)
                  try {
                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                  } catch (m) {
                    Iu(t, t.return, m);
                  }
              } else if (
                ((22 !== d.tag && 23 !== d.tag) ||
                  null === d.memoizedState ||
                  d === t) &&
                null !== d.child
              ) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === t) break t;
              for (; null === d.sibling; ) {
                if (null === d.return || d.return === t) break t;
                f === d && (f = null), (d = d.return);
              }
              f === d && (f = null),
                (d.sibling.return = d.return),
                (d = d.sibling);
            }
          }
          break;
        case 19:
          ws(e, t), ks(t), 4 & r && bs(t);
        case 21:
      }
    }
    function ks(t) {
      var e = t.flags;
      if (2 & e) {
        try {
          t: {
            for (var i = t.return; null !== i; ) {
              if (cs(i)) {
                var r = i;
                break t;
              }
              i = i.return;
            }
            throw Error(n(160));
          }
          switch (r.tag) {
            case 5:
              var o = r.stateNode;
              32 & r.flags && (mt(o, ""), (r.flags &= -33)), hs(t, fs(t), o);
              break;
            case 3:
            case 4:
              var l = r.stateNode.containerInfo;
              ds(t, fs(t), l);
              break;
            default:
              throw Error(n(161));
          }
        } catch (a) {
          Iu(t, t.return, a);
        }
        t.flags &= -3;
      }
      4096 & e && (t.flags &= -4097);
    }
    function xs(t, e, n) {
      (ns = t), Ss(t);
    }
    function Ss(t, e, n) {
      for (var i = !!(1 & t.mode); null !== ns; ) {
        var r = ns,
          o = r.child;
        if (22 === r.tag && i) {
          var l = null !== r.memoizedState || Qa;
          if (!l) {
            var a = r.alternate,
              s = (null !== a && null !== a.memoizedState) || ts;
            a = Qa;
            var u = ts;
            if (((Qa = l), (ts = s) && !u))
              for (ns = r; null !== ns; )
                (s = (l = ns).child),
                  22 === l.tag && null !== l.memoizedState
                    ? Cs(r)
                    : null !== s
                    ? ((s.return = l), (ns = s))
                    : Cs(r);
            for (; null !== o; ) (ns = o), Ss(o), (o = o.sibling);
            (ns = r), (Qa = a), (ts = u);
          }
          Ms(t);
        } else
          8772 & r.subtreeFlags && null !== o
            ? ((o.return = r), (ns = o))
            : Ms(t);
      }
    }
    function Ms(t) {
      for (; null !== ns; ) {
        var e = ns;
        if (8772 & e.flags) {
          var i = e.alternate;
          try {
            if (8772 & e.flags)
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  ts || as(5, e);
                  break;
                case 1:
                  var r = e.stateNode;
                  if (4 & e.flags && !ts)
                    if (null === i) r.componentDidMount();
                    else {
                      var o =
                        e.elementType === e.type
                          ? i.memoizedProps
                          : la(e.type, i.memoizedProps);
                      r.componentDidUpdate(o, i.memoizedState, r.K);
                    }
                  var l = e.updateQueue;
                  null !== l && Yo(e, l, r);
                  break;
                case 3:
                  var a = e.updateQueue;
                  if (null !== a) {
                    if (((i = null), null !== e.child))
                      switch (e.child.tag) {
                        case 5:
                        case 1:
                          i = e.child.stateNode;
                      }
                    Yo(e, a, i);
                  }
                  break;
                case 5:
                  var s = e.stateNode;
                  if (null === i && 4 & e.flags) {
                    i = s;
                    var u = e.memoizedProps;
                    switch (e.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        u.autoFocus && i.focus();
                        break;
                      case "img":
                        u.src && (i.src = u.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === e.memoizedState) {
                    var c = e.alternate;
                    if (null !== c) {
                      var f = c.memoizedState;
                      if (null !== f) {
                        var d = f.dehydrated;
                        null !== d && We(d);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(n(163));
              }
            ts || (512 & e.flags && ss(e));
          } catch (h) {
            Iu(e, e.return, h);
          }
        }
        if (e === t) {
          ns = null;
          break;
        }
        if (null !== (i = e.sibling)) {
          (i.return = e.return), (ns = i);
          break;
        }
        ns = e.return;
      }
    }
    function Es(t) {
      for (; null !== ns; ) {
        var e = ns;
        if (e === t) {
          ns = null;
          break;
        }
        var n = e.sibling;
        if (null !== n) {
          (n.return = e.return), (ns = n);
          break;
        }
        ns = e.return;
      }
    }
    function Cs(t) {
      for (; null !== ns; ) {
        var e = ns;
        try {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              var n = e.return;
              try {
                as(4, e);
              } catch (s) {
                Iu(e, n, s);
              }
              break;
            case 1:
              var i = e.stateNode;
              if ("function" == typeof i.componentDidMount) {
                var r = e.return;
                try {
                  i.componentDidMount();
                } catch (s) {
                  Iu(e, r, s);
                }
              }
              var o = e.return;
              try {
                ss(e);
              } catch (s) {
                Iu(e, o, s);
              }
              break;
            case 5:
              var l = e.return;
              try {
                ss(e);
              } catch (s) {
                Iu(e, l, s);
              }
          }
        } catch (s) {
          Iu(e, e.return, s);
        }
        if (e === t) {
          ns = null;
          break;
        }
        var a = e.sibling;
        if (null !== a) {
          (a.return = e.return), (ns = a);
          break;
        }
        ns = e.return;
      }
    }
    var As,
      Is = Math.ceil,
      Ts = M.ReactCurrentDispatcher,
      Ls = M.ReactCurrentOwner,
      zs = M.ReactCurrentBatchConfig,
      Os = 0,
      js = null,
      Fs = null,
      Ps = 0,
      Rs = 0,
      _s = Ir(0),
      Ds = 0,
      Ns = null,
      $s = 0,
      Hs = 0,
      Vs = 0,
      Bs = null,
      Gs = null,
      Ks = 0,
      Us = Infinity,
      Ws = null,
      Ys = !1,
      qs = null,
      Xs = null,
      Zs = !1,
      Js = null,
      Qs = 0,
      tu = 0,
      eu = null,
      nu = -1,
      iu = 0;
    function ru() {
      return 6 & Os ? ne() : -1 !== nu ? nu : (nu = ne());
    }
    function ou(t) {
      return 1 & t.mode
        ? 2 & Os && 0 !== Ps
          ? Ps & -Ps
          : null !== yo.transition
          ? (0 === iu && (iu = ye()), iu)
          : 0 !== (t = Me)
          ? t
          : (t = void 0 === (t = window.event) ? 16 : en(t.type))
        : 1;
    }
    function lu(t, e, i, r) {
      if (tu > 50) throw ((tu = 0), (eu = null), Error(n(185)));
      xe(t, i, r),
        (2 & Os && t === js) ||
          (t === js && (!(2 & Os) && (Hs |= i), 4 === Ds && fu(t, Ps)),
          au(t, r),
          1 === i &&
            0 === Os &&
            !(1 & e.mode) &&
            ((Us = ne() + 500), Br && Ur()));
    }
    function au(t, e) {
      var n = t.callbackNode;
      !(function (t, e) {
        for (
          var n = t.suspendedLanes,
            i = t.pingedLanes,
            r = t.expirationTimes,
            o = t.pendingLanes;
          o > 0;

        ) {
          var l = 31 - fe(o),
            a = 1 << l,
            s = r[l];
          -1 === s
            ? (0 !== (a & n) && 0 === (a & i)) || (r[l] = be(a, e))
            : e >= s && (t.expiredLanes |= a),
            (o &= ~a);
        }
      })(t, e);
      var i = ve(t, t === js ? Ps : 0);
      if (0 === i)
        null !== n && Qt(n), (t.callbackNode = null), (t.callbackPriority = 0);
      else if (((e = i & -i), t.callbackPriority !== e)) {
        if ((null != n && Qt(n), 1 === e))
          0 === t.tag
            ? (function (t) {
                (Br = !0), Kr(t);
              })(du.bind(null, t))
            : Kr(du.bind(null, t)),
            cr(function () {
              !(6 & Os) && Ur();
            }),
            (n = null);
        else {
          switch (Ee(i)) {
            case 1:
              n = re;
              break;
            case 4:
              n = oe;
              break;
            case 16:
            default:
              n = le;
              break;
            case 536870912:
              n = se;
          }
          n = ju(n, su.bind(null, t));
        }
        (t.callbackPriority = e), (t.callbackNode = n);
      }
    }
    function su(t, e) {
      if (((nu = -1), (iu = 0), 6 & Os)) throw Error(n(327));
      var i = t.callbackNode;
      if (Cu() && t.callbackNode !== i) return null;
      var r = ve(t, t === js ? Ps : 0);
      if (0 === r) return null;
      if (30 & r || 0 !== (r & t.expiredLanes) || e) e = yu(t, r);
      else {
        e = r;
        var o = Os;
        Os |= 2;
        var l = bu();
        for (
          (js === t && Ps === e) || ((Ws = null), (Us = ne() + 500), mu(t, e));
          ;

        ) {
          try {
            xu();
            break;
          } catch (s) {
            vu(t, s);
          }
          1;
        }
        zo(),
          (Ts.current = l),
          (Os = o),
          null !== Fs ? (e = 0) : ((js = null), (Ps = 0), (e = Ds));
      }
      if (0 !== e) {
        if (
          (2 === e && 0 !== (o = we(t)) && ((r = o), (e = uu(t, o))), 1 === e)
        )
          throw ((i = Ns), mu(t, 0), fu(t, r), au(t, ne()), i);
        if (6 === e) fu(t, r);
        else {
          if (
            ((o = t.current.alternate),
            !(
              30 & r ||
              (function (t) {
                for (var e = t; ; ) {
                  if (16384 & e.flags) {
                    var n = e.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var i = 0; i < n.length; i++) {
                        var r = n[i],
                          o = r.getSnapshot;
                        r = r.value;
                        try {
                          if (!di(o(), r)) return !1;
                        } catch (a) {
                          return !1;
                        }
                      }
                  }
                  if (((n = e.child), 16384 & e.subtreeFlags && null !== n))
                    (n.return = e), (e = n);
                  else {
                    if (e === t) break;
                    for (; null === e.sibling; ) {
                      if (null === e.return || e.return === t) return !0;
                      e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                  }
                }
                return !0;
              })(o) ||
              ((e = yu(t, r)),
              2 === e && ((l = we(t)), 0 !== l && ((r = l), (e = uu(t, l)))),
              1 !== e)
            ))
          )
            throw ((i = Ns), mu(t, 0), fu(t, r), au(t, ne()), i);
          switch (((t.finishedWork = o), (t.finishedLanes = r), e)) {
            case 0:
            case 1:
              throw Error(n(345));
            case 2:
            case 5:
              Eu(t, Gs, Ws);
              break;
            case 3:
              if (
                (fu(t, r), (130023424 & r) === r && (e = Ks + 500 - ne()) > 10)
              ) {
                if (0 !== ve(t, 0)) break;
                if (((o = t.suspendedLanes) & r) !== r) {
                  ru(), (t.pingedLanes |= t.suspendedLanes & o);
                  break;
                }
                t.timeoutHandle = ar(Eu.bind(null, t, Gs, Ws), e);
                break;
              }
              Eu(t, Gs, Ws);
              break;
            case 4:
              if ((fu(t, r), (4194240 & r) === r)) break;
              for (e = t.eventTimes, o = -1; r > 0; ) {
                var a = 31 - fe(r);
                (l = 1 << a), (a = e[a]) > o && (o = a), (r &= ~l);
              }
              if (
                ((r = o),
                (r =
                  (120 > (r = ne() - r)
                    ? 120
                    : 480 > r
                    ? 480
                    : 1080 > r
                    ? 1080
                    : 1920 > r
                    ? 1920
                    : 3e3 > r
                    ? 3e3
                    : 4320 > r
                    ? 4320
                    : 1960 * Is(r / 1960)) - r) > 10)
              ) {
                t.timeoutHandle = ar(Eu.bind(null, t, Gs, Ws), r);
                break;
              }
              Eu(t, Gs, Ws);
              break;
            default:
              throw Error(n(329));
          }
        }
      }
      return au(t, ne()), t.callbackNode === i ? su.bind(null, t) : null;
    }
    function uu(t, e) {
      var n = Bs;
      return (
        t.current.memoizedState.isDehydrated && (mu(t, e).flags |= 256),
        2 !== (t = yu(t, e)) && ((e = Gs), (Gs = n), null !== e && cu(e)),
        t
      );
    }
    function cu(t) {
      null === Gs ? (Gs = t) : Gs.push.apply(Gs, t);
    }
    function fu(t, e) {
      for (
        e &= ~Vs,
          e &= ~Hs,
          t.suspendedLanes |= e,
          t.pingedLanes &= ~e,
          t = t.expirationTimes;
        e > 0;

      ) {
        var n = 31 - fe(e),
          i = 1 << n;
        (t[n] = -1), (e &= ~i);
      }
    }
    function du(t) {
      if (6 & Os) throw Error(n(327));
      Cu();
      var e = ve(t, 0);
      if (!(1 & e)) return au(t, ne()), null;
      var i = yu(t, e);
      if (0 !== t.tag && 2 === i) {
        var r = we(t);
        0 !== r && ((e = r), (i = uu(t, r)));
      }
      if (1 === i) throw ((i = Ns), mu(t, 0), fu(t, e), au(t, ne()), i);
      if (6 === i) throw Error(n(345));
      return (
        (t.finishedWork = t.current.alternate),
        (t.finishedLanes = e),
        Eu(t, Gs, Ws),
        au(t, ne()),
        null
      );
    }
    function hu(t, e) {
      var n = Os;
      Os |= 1;
      try {
        return t(e);
      } finally {
        0 === (Os = n) && ((Us = ne() + 500), Br && Ur());
      }
    }
    function pu(t) {
      null !== Js && 0 === Js.tag && !(6 & Os) && Cu();
      var e = Os;
      Os |= 1;
      var n = zs.transition,
        i = Me;
      try {
        if (((zs.transition = null), (Me = 1), t)) return t();
      } finally {
        (Me = i), (zs.transition = n), !(6 & (Os = e)) && Ur();
      }
    }
    function gu() {
      (Rs = _s.current), Tr(_s);
    }
    function mu(t, e) {
      (t.finishedWork = null), (t.finishedLanes = 0);
      var n = t.timeoutHandle;
      if ((-1 !== n && ((t.timeoutHandle = -1), sr(n)), null !== Fs))
        for (n = Fs.return; null !== n; ) {
          var i = n;
          switch ((oo(i), i.tag)) {
            case 1:
              null != (i = i.type.childContextTypes) && _r();
              break;
            case 3:
              el(), Tr(jr), Tr(Or), al();
              break;
            case 5:
              il(i);
              break;
            case 4:
              el();
              break;
            case 13:
            case 19:
              Tr(rl);
              break;
            case 10:
              Oo(i.type.A);
              break;
            case 22:
            case 23:
              gu();
          }
          n = n.return;
        }
      if (
        ((js = t),
        (Fs = t = _u(t.current, null)),
        (Ps = Rs = e),
        (Ds = 0),
        (Ns = null),
        (Vs = Hs = $s = 0),
        (Gs = Bs = null),
        null !== Ro)
      ) {
        for (e = 0; e < Ro.length; e++)
          if (null !== (i = (n = Ro[e]).interleaved)) {
            n.interleaved = null;
            var r = i.next,
              o = n.pending;
            if (null !== o) {
              var l = o.next;
              (o.next = r), (i.next = l);
            }
            n.pending = i;
          }
        Ro = null;
      }
      return t;
    }
    function vu(t, e) {
      for (;;) {
        var i = Fs;
        try {
          if ((zo(), (sl.current = na), pl)) {
            for (var r = fl.memoizedState; null !== r; ) {
              var o = r.queue;
              null !== o && (o.pending = null), (r = r.next);
            }
            pl = !1;
          }
          if (
            ((cl = 0),
            (hl = dl = fl = null),
            (gl = !1),
            (ml = 0),
            (Ls.current = null),
            null === i || null === i.return)
          ) {
            (Ds = 1), (Ns = e), (Fs = null);
            break;
          }
          t: {
            var l = t,
              a = i.return,
              s = i,
              u = e;
            if (
              ((e = Ps),
              (s.flags |= 32768),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var c = u,
                f = s,
                d = f.tag;
              if (!(1 & f.mode || (0 !== d && 11 !== d && 15 !== d))) {
                var h = f.alternate;
                h
                  ? ((f.updateQueue = h.updateQueue),
                    (f.memoizedState = h.memoizedState),
                    (f.lanes = h.lanes))
                  : ((f.updateQueue = null), (f.memoizedState = null));
              }
              var p = ya(a);
              if (null !== p) {
                (p.flags &= -257),
                  ka(p, a, s, 0, e),
                  1 & p.mode && wa(l, c, e),
                  (u = c);
                var g = (e = p).updateQueue;
                if (null === g) {
                  var m = new Set();
                  m.add(u), (e.updateQueue = m);
                } else g.add(u);
                break t;
              }
              if (!(1 & e)) {
                wa(l, c, e), wu();
                break t;
              }
              u = Error(n(426));
            } else if (so && 1 & s.mode) {
              var v = ya(a);
              if (null !== v) {
                !(65536 & v.flags) && (v.flags |= 256),
                  ka(v, a, s, 0, e),
                  wo(ha(u, s));
                break t;
              }
            }
            (l = u = ha(u, s)),
              4 !== Ds && (Ds = 2),
              null === Bs ? (Bs = [l]) : Bs.push(l),
              (l = a);
            do {
              switch (l.tag) {
                case 3:
                  (l.flags |= 65536),
                    (e &= -e),
                    (l.lanes |= e),
                    Uo(l, va(0, u, e));
                  break t;
                case 1:
                  s = u;
                  var b = l.type,
                    w = l.stateNode;
                  if (
                    !(
                      128 & l.flags ||
                      ("function" != typeof b.getDerivedStateFromError &&
                        (null === w ||
                          "function" != typeof w.componentDidCatch ||
                          (null !== Xs && Xs.has(w))))
                    )
                  ) {
                    (l.flags |= 65536),
                      (e &= -e),
                      (l.lanes |= e),
                      Uo(l, ba(l, s, e));
                    break t;
                  }
              }
              l = l.return;
            } while (null !== l);
          }
          Mu(i);
        } catch (y) {
          (e = y), Fs === i && null !== i && (Fs = i = i.return);
          continue;
        }
        break;
      }
    }
    function bu() {
      var t = Ts.current;
      return (Ts.current = na), null === t ? na : t;
    }
    function wu() {
      (0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
        null === js || (!(268435455 & $s) && !(268435455 & Hs)) || fu(js, Ps);
    }
    function yu(t, e) {
      var i = Os;
      Os |= 2;
      var r = bu();
      for ((js === t && Ps === e) || ((Ws = null), mu(t, e)); ; ) {
        try {
          ku();
          break;
        } catch (o) {
          vu(t, o);
        }
        1;
      }
      if ((zo(), (Os = i), (Ts.current = r), null !== Fs)) throw Error(n(261));
      return (js = null), (Ps = 0), Ds;
    }
    function ku() {
      for (; null !== Fs; ) Su(Fs);
    }
    function xu() {
      for (; null !== Fs && !te(); ) Su(Fs);
    }
    function Su(t) {
      var e = As(t.alternate, t, Rs);
      (t.memoizedProps = t.pendingProps),
        null === e ? Mu(t) : (Fs = e),
        (Ls.current = null);
    }
    function Mu(t) {
      var e = t;
      do {
        var n = e.alternate;
        if (((t = e.return), 32768 & e.flags)) {
          if (null !== (n = Ja(n, e)))
            return (n.flags &= 32767), (Fs = n), void 0;
          if (null === t) return (Ds = 6), (Fs = null), void 0;
          (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
        } else if (null !== (n = Za(n, e, Rs))) return (Fs = n), void 0;
        if (null !== (e = e.sibling)) return (Fs = e), void 0;
        Fs = e = t;
      } while (null !== e);
      0 === Ds && (Ds = 5);
    }
    function Eu(t, e, i) {
      var r = Me,
        o = zs.transition;
      try {
        (zs.transition = null),
          (Me = 1),
          (function (t, e, i, r) {
            do {
              Cu();
            } while (null !== Js);
            if (6 & Os) throw Error(n(327));
            i = t.finishedWork;
            var o = t.finishedLanes;
            if (null === i) return null;
            if (
              ((t.finishedWork = null), (t.finishedLanes = 0), i === t.current)
            )
              throw Error(n(177));
            (t.callbackNode = null), (t.callbackPriority = 0);
            var l = i.lanes | i.childLanes;
            if (
              ((function (t, e) {
                var n = t.pendingLanes & ~e;
                (t.pendingLanes = e),
                  (t.suspendedLanes = 0),
                  (t.pingedLanes = 0),
                  (t.expiredLanes &= e),
                  (t.mutableReadLanes &= e),
                  (t.entangledLanes &= e),
                  (e = t.entanglements);
                var i = t.eventTimes;
                for (t = t.expirationTimes; n > 0; ) {
                  var r = 31 - fe(n),
                    o = 1 << r;
                  (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~o);
                }
              })(t, l),
              t === js && ((Fs = js = null), (Ps = 0)),
              (!(2064 & i.subtreeFlags) && !(2064 & i.flags)) ||
                Zs ||
                ((Zs = !0),
                ju(le, function () {
                  return Cu(), null;
                })),
              (l = !!(15990 & i.flags)),
              15990 & i.subtreeFlags || l)
            ) {
              (l = zs.transition), (zs.transition = null);
              var a = Me;
              Me = 1;
              var s = Os;
              (Os |= 4),
                (Ls.current = null),
                (function (t, e) {
                  if (((rr = qe), bi((t = vi())))) {
                    if ("selectionStart" in t)
                      var i = { start: t.selectionStart, end: t.selectionEnd };
                    else {
                      var r =
                        (i = ((i = t.ownerDocument) && i.defaultView) || window)
                          .getSelection && i.getSelection();
                      if (r && 0 !== r.rangeCount) {
                        i = r.anchorNode;
                        var o = r.anchorOffset,
                          l = r.focusNode;
                        r = r.focusOffset;
                        var a = 0,
                          s = -1,
                          u = -1,
                          c = 0,
                          f = 0,
                          d = t,
                          h = null;
                        t: for (;;) {
                          for (
                            var p;
                            d !== i ||
                              (0 !== o && 3 !== d.nodeType) ||
                              (s = a + o),
                              d !== l ||
                                (0 !== r && 3 !== d.nodeType) ||
                                (u = a + r),
                              3 === d.nodeType && (a += d.nodeValue.length),
                              null !== (p = d.firstChild);

                          )
                            (h = d), (d = p);
                          for (;;) {
                            if (d === t) break t;
                            if (
                              (h === i && ++c === o && (s = a),
                              h === l && ++f === r && (u = a),
                              null !== (p = d.nextSibling))
                            )
                              break;
                            h = (d = h).parentNode;
                          }
                          d = p;
                        }
                        i = -1 === s || -1 === u ? null : { start: s, end: u };
                      } else i = null;
                    }
                    i = i || { start: 0, end: 0 };
                  } else i = null;
                  for (
                    or = { focusedElem: t, selectionRange: i }, qe = !1, ns = e;
                    null !== ns;

                  )
                    if (
                      ((t = (e = ns).child),
                      1028 & e.subtreeFlags && null !== t)
                    )
                      (t.return = e), (ns = t);
                    else
                      for (; null !== ns; ) {
                        e = ns;
                        try {
                          var g = e.alternate;
                          if (1024 & e.flags)
                            switch (e.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break;
                              case 1:
                                if (null !== g) {
                                  var m = g.memoizedProps,
                                    v = g.memoizedState,
                                    b = e.stateNode,
                                    w = b.getSnapshotBeforeUpdate(
                                      e.elementType === e.type
                                        ? m
                                        : la(e.type, m),
                                      v
                                    );
                                  b.K = w;
                                }
                                break;
                              case 3:
                                var y = e.stateNode.containerInfo;
                                1 === y.nodeType
                                  ? (y.textContent = "")
                                  : 9 === y.nodeType &&
                                    y.documentElement &&
                                    y.removeChild(y.documentElement);
                                break;
                              default:
                                throw Error(n(163));
                            }
                        } catch (k) {
                          Iu(e, e.return, k);
                        }
                        if (null !== (t = e.sibling)) {
                          (t.return = e.return), (ns = t);
                          break;
                        }
                        ns = e.return;
                      }
                  (g = os), (os = !1);
                })(t, i),
                ys(i, t),
                wi(or),
                (qe = !!rr),
                (or = rr = null),
                (t.current = i),
                xs(i),
                ee(),
                (Os = s),
                (Me = a),
                (zs.transition = l);
            } else t.current = i;
            if (
              (Zs && ((Zs = !1), (Js = t), (Qs = o)),
              0 === (l = t.pendingLanes) && (Xs = null),
              (function (t) {
                if (ce && "function" == typeof ce.onCommitFiberRoot)
                  try {
                    ce.onCommitFiberRoot(
                      ue,
                      t,
                      void 0,
                      !(128 & ~t.current.flags)
                    );
                  } catch (e) {}
              })(i.stateNode),
              au(t, ne()),
              null !== e)
            )
              for (r = t.onRecoverableError, i = 0; i < e.length; i++)
                r((o = e[i]).value, {
                  componentStack: o.stack,
                  digest: o.digest,
                });
            if (Ys) throw ((Ys = !1), (t = qs), (qs = null), t);
            return (
              !!(1 & Qs) && 0 !== t.tag && Cu(),
              1 & (l = t.pendingLanes)
                ? t === eu
                  ? tu++
                  : ((tu = 0), (eu = t))
                : (tu = 0),
              Ur(),
              null
            );
          })(t, e, i, r);
      } finally {
        (zs.transition = o), (Me = r);
      }
      return null;
    }
    function Cu() {
      if (null !== Js) {
        var t = Ee(Qs),
          e = zs.transition,
          i = Me;
        try {
          if (((zs.transition = null), (Me = 16 > t ? 16 : t), null === Js))
            var r = !1;
          else {
            if (((t = Js), (Js = null), (Qs = 0), 6 & Os)) throw Error(n(331));
            var o = Os;
            for (Os |= 4, ns = t.current; null !== ns; ) {
              var l = ns,
                a = l.child;
              if (16 & ns.flags) {
                var s = l.deletions;
                if (null !== s) {
                  for (var u = 0; u < s.length; u++) {
                    var c = s[u];
                    for (ns = c; null !== ns; ) {
                      var f = ns;
                      switch (f.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ls(8, f, l);
                      }
                      var d = f.child;
                      if (null !== d) (d.return = f), (ns = d);
                      else
                        for (; null !== ns; ) {
                          var h = (f = ns).sibling,
                            p = f.return;
                          if ((us(f), f === c)) {
                            ns = null;
                            break;
                          }
                          if (null !== h) {
                            (h.return = p), (ns = h);
                            break;
                          }
                          ns = p;
                        }
                    }
                  }
                  var g = l.alternate;
                  if (null !== g) {
                    var m = g.child;
                    if (null !== m) {
                      g.child = null;
                      do {
                        var v = m.sibling;
                        (m.sibling = null), (m = v);
                      } while (null !== m);
                    }
                  }
                  ns = l;
                }
              }
              if (2064 & l.subtreeFlags && null !== a) (a.return = l), (ns = a);
              else
                t: for (; null !== ns; ) {
                  if (2048 & (l = ns).flags)
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ls(9, l, l.return);
                    }
                  var b = l.sibling;
                  if (null !== b) {
                    (b.return = l.return), (ns = b);
                    break t;
                  }
                  ns = l.return;
                }
            }
            var w = t.current;
            for (ns = w; null !== ns; ) {
              var y = (a = ns).child;
              if (2064 & a.subtreeFlags && null !== y) (y.return = a), (ns = y);
              else
                t: for (a = w; null !== ns; ) {
                  if (2048 & (s = ns).flags)
                    try {
                      switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                          as(9, s);
                      }
                    } catch (x) {
                      Iu(s, s.return, x);
                    }
                  if (s === a) {
                    ns = null;
                    break t;
                  }
                  var k = s.sibling;
                  if (null !== k) {
                    (k.return = s.return), (ns = k);
                    break t;
                  }
                  ns = s.return;
                }
            }
            if (
              ((Os = o),
              Ur(),
              ce && "function" == typeof ce.onPostCommitFiberRoot)
            )
              try {
                ce.onPostCommitFiberRoot(ue, t);
              } catch (x) {}
            r = !0;
          }
          return r;
        } finally {
          (Me = i), (zs.transition = e);
        }
      }
      return !1;
    }
    function Au(t, e, n) {
      (t = Go(t, (e = va(0, (e = ha(n, e)), 1)), 1)),
        (e = ru()),
        null !== t && (xe(t, 1, e), au(t, e));
    }
    function Iu(t, e, n) {
      if (3 === t.tag) Au(t, t, n);
      else
        for (; null !== e; ) {
          if (3 === e.tag) {
            Au(e, t, n);
            break;
          }
          if (1 === e.tag) {
            var i = e.stateNode;
            if (
              "function" == typeof e.type.getDerivedStateFromError ||
              ("function" == typeof i.componentDidCatch &&
                (null === Xs || !Xs.has(i)))
            ) {
              (e = Go(e, (t = ba(e, (t = ha(n, t)), 1)), 1)),
                (t = ru()),
                null !== e && (xe(e, 1, t), au(e, t));
              break;
            }
          }
          e = e.return;
        }
    }
    function Tu(t, e, n) {
      var i = t.pingCache;
      null !== i && i.delete(e),
        (e = ru()),
        (t.pingedLanes |= t.suspendedLanes & n),
        js === t &&
          (Ps & n) === n &&
          (4 === Ds || (3 === Ds && (130023424 & Ps) === Ps && 500 > ne() - Ks)
            ? mu(t, 0)
            : (Vs |= n)),
        au(t, e);
    }
    function Lu(t, e) {
      0 === e &&
        (1 & t.mode
          ? ((e = ge), !(130023424 & (ge <<= 1)) && (ge = 4194304))
          : (e = 1));
      var n = ru();
      null !== (t = No(t, e)) && (xe(t, e, n), au(t, n));
    }
    function zu(t) {
      var e = t.memoizedState,
        n = 0;
      null !== e && (n = e.retryLane), Lu(t, n);
    }
    function Ou(t, e) {
      var i = 0;
      switch (t.tag) {
        case 13:
          var r = t.stateNode,
            o = t.memoizedState;
          null !== o && (i = o.retryLane);
          break;
        case 19:
          r = t.stateNode;
          break;
        default:
          throw Error(n(314));
      }
      null !== r && r.delete(e), Lu(t, i);
    }
    function ju(t, e) {
      return Jt(t, e);
    }
    function Fu(t, e, n, i) {
      (this.tag = t),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = i),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Pu(t, e, n, i) {
      return new Fu(t, e, n, i);
    }
    function Ru(t) {
      return !(!(t = t.prototype) || !t.isReactComponent);
    }
    function _u(t, e) {
      var n = t.alternate;
      return (
        null === n
          ? (((n = Pu(t.tag, e, t.key, t.mode)).elementType = t.elementType),
            (n.type = t.type),
            (n.stateNode = t.stateNode),
            (n.alternate = t),
            (t.alternate = n))
          : ((n.pendingProps = e),
            (n.type = t.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 14680064 & t.flags),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies =
          null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
      );
    }
    function Du(t, e, i, r, o, l) {
      var a = 2;
      if (((r = t), "function" == typeof t)) Ru(t) && (a = 1);
      else if ("string" == typeof t) a = 5;
      else
        t: switch (t) {
          case A:
            return Nu(i.children, o, l, e);
          case I:
            (a = 8), (o |= 8);
            break;
          case T:
            return (
              ((t = Pu(12, i, e, 2 | o)).elementType = T), (t.lanes = l), t
            );
          case j:
            return ((t = Pu(13, i, e, o)).elementType = j), (t.lanes = l), t;
          case F:
            return ((t = Pu(19, i, e, o)).elementType = F), (t.lanes = l), t;
          case _:
            return $u(i, o, l, e);
          default:
            if ("object" == typeof t && null !== t)
              switch (t.$$typeof) {
                case L:
                  a = 10;
                  break t;
                case z:
                  a = 9;
                  break t;
                case O:
                  a = 11;
                  break t;
                case P:
                  a = 14;
                  break t;
                case R:
                  (a = 16), (r = null);
                  break t;
              }
            throw Error(n(130, null == t ? t : typeof t, ""));
        }
      return (
        ((e = Pu(a, i, e, o)).elementType = t), (e.type = r), (e.lanes = l), e
      );
    }
    function Nu(t, e, n, i) {
      return ((t = Pu(7, t, i, e)).lanes = n), t;
    }
    function $u(t, e, n, i) {
      return (
        ((t = Pu(22, t, i, e)).elementType = _),
        (t.lanes = n),
        (t.stateNode = { isHidden: !1 }),
        t
      );
    }
    function Hu(t, e, n) {
      return ((t = Pu(6, t, null, e)).lanes = n), t;
    }
    function Vu(t, e, n) {
      return (
        ((e = Pu(4, null !== t.children ? t.children : [], t.key, e)).lanes =
          n),
        (e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation,
        }),
        e
      );
    }
    function Bu(t, e, n, i, r) {
      (this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ke(0)),
        (this.expirationTimes = ke(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ke(0)),
        (this.identifierPrefix = i),
        (this.onRecoverableError = r),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Gu(t, e, n, i, r, o, l, a, s) {
      return (
        (t = new Bu(t, e, n, a, s)),
        1 === e ? ((e = 1), !0 === o && (e |= 8)) : (e = 0),
        (o = Pu(3, null, null, e)),
        (t.current = o),
        (o.stateNode = t),
        (o.memoizedState = {
          element: i,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Ho(o),
        t
      );
    }
    function Ku(t) {
      if (!t) return zr;
      t: {
        if (Wt((t = t.V)) !== t || 1 !== t.tag) throw Error(n(170));
        var e = t;
        do {
          switch (e.tag) {
            case 3:
              e = e.stateNode.context;
              break t;
            case 1:
              if (Rr(e.type)) {
                e = e.stateNode.N;
                break t;
              }
          }
          e = e.return;
        } while (null !== e);
        throw Error(n(171));
      }
      if (1 === t.tag) {
        var i = t.type;
        if (Rr(i)) return Nr(t, i, e);
      }
      return e;
    }
    function Uu(t, e, n, i, r, o, l, a, s) {
      return (
        ((t = Gu(n, i, !0, t, 0, o, 0, a, s)).context = Ku(null)),
        (n = t.current),
        ((o = Bo((i = ru()), (r = ou(n)))).callback = null != e ? e : null),
        Go(n, o, r),
        (t.current.lanes = r),
        xe(t, r, i),
        au(t, i),
        t
      );
    }
    function Wu(t, e, n, i) {
      var r = e.current,
        o = ru(),
        l = ou(r);
      return (
        (n = Ku(n)),
        null === e.context ? (e.context = n) : (e.pendingContext = n),
        ((e = Bo(o, l)).payload = { element: t }),
        null !== (i = void 0 === i ? null : i) && (e.callback = i),
        null !== (t = Go(r, e, l)) && (lu(t, r, l, o), Ko(t, r, l)),
        l
      );
    }
    function Yu(t) {
      return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null;
    }
    function qu(t, e) {
      if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
        var n = t.retryLane;
        t.retryLane = 0 !== n && e > n ? n : e;
      }
    }
    function Xu(t, e) {
      qu(t, e), (t = t.alternate) && qu(t, e);
    }
    As = function (t, e, i) {
      if (null !== t)
        if (t.memoizedProps !== e.pendingProps || jr.current) Sa = !0;
        else {
          if (0 === (t.lanes & i) && !(128 & e.flags))
            return (
              (Sa = !1),
              (function (t, e, n) {
                switch (e.tag) {
                  case 3:
                    ja(e), bo();
                    break;
                  case 5:
                    nl(e);
                    break;
                  case 1:
                    Rr(e.type) && $r(e);
                    break;
                  case 4:
                    tl(e, e.stateNode.containerInfo);
                    break;
                  case 10:
                    var i = e.type.A,
                      r = e.memoizedProps.value;
                    Lr(Ao, i.v), (i.v = r);
                    break;
                  case 13:
                    if (null !== (i = e.memoizedState))
                      return null !== i.dehydrated
                        ? (Lr(rl, 1 & rl.current), (e.flags |= 128), null)
                        : 0 !== (n & e.child.childLanes)
                        ? Ha(t, e, n)
                        : (Lr(rl, 1 & rl.current),
                          null !== (t = Ya(t, e, n)) ? t.sibling : null);
                    Lr(rl, 1 & rl.current);
                    break;
                  case 19:
                    if (((i = 0 !== (n & e.childLanes)), 128 & t.flags)) {
                      if (i) return Ua(t, e, n);
                      e.flags |= 128;
                    }
                    if (
                      (null !== (r = e.memoizedState) &&
                        ((r.rendering = null),
                        (r.tail = null),
                        (r.lastEffect = null)),
                      Lr(rl, rl.current),
                      i)
                    )
                      break;
                    return null;
                  case 22:
                  case 23:
                    return (e.lanes = 0), Ia(t, e, n);
                }
                return Ya(t, e, n);
              })(t, e, i)
            );
          Sa = !!(131072 & t.flags);
        }
      else (Sa = !1), so && 1048576 & e.flags && io(e, Xr, e.index);
      switch (((e.lanes = 0), e.tag)) {
        case 2:
          var r = e.type;
          Wa(t, e), (t = e.pendingProps);
          var o = Pr(e, Or.current);
          Fo(e, i), (o = yl(null, e, r, t, o, i));
          var l = kl();
          return (
            (e.flags |= 1),
            "object" == typeof o &&
            null !== o &&
            "function" == typeof o.render &&
            void 0 === o.$$typeof
              ? ((e.tag = 1),
                (e.memoizedState = null),
                (e.updateQueue = null),
                Rr(r) ? ((l = !0), $r(e)) : (l = !1),
                (e.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                Ho(e),
                (o.updater = sa),
                (e.stateNode = o),
                (o.V = e),
                da(e, r, t, i),
                (e = Oa(null, e, r, !0, l, i)))
              : ((e.tag = 0),
                so && l && ro(e),
                Ma(null, e, o, i),
                (e = e.child)),
            e
          );
        case 16:
          r = e.elementType;
          t: {
            switch (
              (Wa(t, e),
              (t = e.pendingProps),
              (r = (o = r.T)(r.I)),
              (e.type = r),
              (o = e.tag =
                (function (t) {
                  if ("function" == typeof t) return Ru(t) ? 1 : 0;
                  if (null != t) {
                    if ((t = t.$$typeof) === O) return 11;
                    if (t === P) return 14;
                  }
                  return 2;
                })(r)),
              (t = la(r, t)),
              o)
            ) {
              case 0:
                e = La(null, e, r, t, i);
                break t;
              case 1:
                e = za(null, e, r, t, i);
                break t;
              case 11:
                e = Ea(null, e, r, t, i);
                break t;
              case 14:
                e = Ca(null, e, r, la(r.type, t), i);
                break t;
            }
            throw Error(n(306, r, ""));
          }
          return e;
        case 0:
          return (
            (r = e.type),
            (o = e.pendingProps),
            La(t, e, r, (o = e.elementType === r ? o : la(r, o)), i)
          );
        case 1:
          return (
            (r = e.type),
            (o = e.pendingProps),
            za(t, e, r, (o = e.elementType === r ? o : la(r, o)), i)
          );
        case 3:
          t: {
            if ((ja(e), null === t)) throw Error(n(387));
            (r = e.pendingProps),
              (o = (l = e.memoizedState).element),
              Vo(t, e),
              Wo(e, r, null, i);
            var a = e.memoizedState;
            if (((r = a.element), l.isDehydrated)) {
              if (
                ((l = {
                  element: r,
                  isDehydrated: !1,
                  cache: a.cache,
                  pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                  transitions: a.transitions,
                }),
                (e.updateQueue.baseState = l),
                (e.memoizedState = l),
                256 & e.flags)
              ) {
                e = Fa(t, e, r, i, (o = ha(Error(n(423)), e)));
                break t;
              }
              if (r !== o) {
                e = Fa(t, e, r, i, (o = ha(Error(n(424)), e)));
                break t;
              }
              for (
                ao = hr(e.stateNode.containerInfo.firstChild),
                  lo = e,
                  so = !0,
                  uo = null,
                  i = Co(e, null, r, i),
                  e.child = i;
                i;

              )
                (i.flags = (-3 & i.flags) | 4096), (i = i.sibling);
            } else {
              if ((bo(), r === o)) {
                e = Ya(t, e, i);
                break t;
              }
              Ma(t, e, r, i);
            }
            e = e.child;
          }
          return e;
        case 5:
          return (
            nl(e),
            null === t && po(e),
            (r = e.type),
            (o = e.pendingProps),
            (l = null !== t ? t.memoizedProps : null),
            (a = o.children),
            lr(r, o) ? (a = null) : null !== l && lr(r, l) && (e.flags |= 32),
            Ta(t, e),
            Ma(t, e, a, i),
            e.child
          );
        case 6:
          return null === t && po(e), null;
        case 13:
          return Ha(t, e, i);
        case 4:
          return (
            tl(e, e.stateNode.containerInfo),
            (r = e.pendingProps),
            null === t ? (e.child = Eo(e, null, r, i)) : Ma(t, e, r, i),
            e.child
          );
        case 11:
          return (
            (r = e.type),
            (o = e.pendingProps),
            Ea(t, e, r, (o = e.elementType === r ? o : la(r, o)), i)
          );
        case 7:
          return Ma(t, e, e.pendingProps, i), e.child;
        case 8:
        case 12:
          return Ma(t, e, e.pendingProps.children, i), e.child;
        case 10:
          t: {
            if (
              ((r = e.type.A),
              (o = e.pendingProps),
              (l = e.memoizedProps),
              (a = o.value),
              Lr(Ao, r.v),
              (r.v = a),
              null !== l)
            )
              if (di(l.value, a)) {
                if (l.children === o.children && !jr.current) {
                  e = Ya(t, e, i);
                  break t;
                }
              } else
                for (null !== (l = e.child) && (l.return = e); null !== l; ) {
                  var s = l.dependencies;
                  if (null !== s) {
                    a = l.child;
                    for (var u = s.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === l.tag) {
                          (u = Bo(-1, i & -i)).tag = 2;
                          var c = l.updateQueue;
                          if (null !== c) {
                            var f = (c = c.shared).pending;
                            null === f
                              ? (u.next = u)
                              : ((u.next = f.next), (f.next = u)),
                              (c.pending = u);
                          }
                        }
                        (l.lanes |= i),
                          null !== (u = l.alternate) && (u.lanes |= i),
                          jo(l.return, i, e),
                          (s.lanes |= i);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (10 === l.tag)
                    a = l.type === e.type ? null : l.child;
                  else if (18 === l.tag) {
                    if (null === (a = l.return)) throw Error(n(341));
                    (a.lanes |= i),
                      null !== (s = a.alternate) && (s.lanes |= i),
                      jo(a, i, e),
                      (a = l.sibling);
                  } else a = l.child;
                  if (null !== a) a.return = l;
                  else
                    for (a = l; null !== a; ) {
                      if (a === e) {
                        a = null;
                        break;
                      }
                      if (null !== (l = a.sibling)) {
                        (l.return = a.return), (a = l);
                        break;
                      }
                      a = a.return;
                    }
                  l = a;
                }
            Ma(t, e, o.children, i), (e = e.child);
          }
          return e;
        case 9:
          return (
            (o = e.type),
            (r = e.pendingProps.children),
            Fo(e, i),
            (r = r((o = Po(o)))),
            (e.flags |= 1),
            Ma(t, e, r, i),
            e.child
          );
        case 14:
          return (
            (o = la((r = e.type), e.pendingProps)),
            Ca(t, e, r, (o = la(r.type, o)), i)
          );
        case 15:
          return Aa(t, e, e.type, e.pendingProps, i);
        case 17:
          return (
            (r = e.type),
            (o = e.pendingProps),
            (o = e.elementType === r ? o : la(r, o)),
            Wa(t, e),
            (e.tag = 1),
            Rr(r) ? ((t = !0), $r(e)) : (t = !1),
            Fo(e, i),
            ca(e, r, o),
            da(e, r, o, i),
            Oa(null, e, r, !0, t, i)
          );
        case 19:
          return Ua(t, e, i);
        case 22:
          return Ia(t, e, i);
      }
      throw Error(n(156, e.tag));
    };
    var Zu =
      "function" == typeof reportError
        ? reportError
        : function (t) {
            void 0;
          };
    function Ju(t) {
      this.U = t;
    }
    function Qu(t) {
      this.U = t;
    }
    function tc(t) {
      return !(
        !t ||
        (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
      );
    }
    function ec(t) {
      return !(
        !t ||
        (1 !== t.nodeType &&
          9 !== t.nodeType &&
          11 !== t.nodeType &&
          (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
      );
    }
    function nc() {}
    function ic(t, e, n, i, r) {
      var o = n.G;
      if (o) {
        var l = o;
        if ("function" == typeof r) {
          var a = r;
          r = function () {
            var t = Yu(l);
            a.call(t);
          };
        }
        Wu(e, l, t, r);
      } else
        l = (function (t, e, n, i, r) {
          if (r) {
            if ("function" == typeof i) {
              var o = i;
              i = function () {
                var t = Yu(l);
                o.call(t);
              };
            }
            var l = Uu(e, i, t, 0, null, !1, 0, "", nc);
            return (
              (t.G = l),
              (t[br] = l.current),
              Wi(8 === t.nodeType ? t.parentNode : t),
              pu(),
              l
            );
          }
          for (; (r = t.lastChild); ) t.removeChild(r);
          if ("function" == typeof i) {
            var a = i;
            i = function () {
              var t = Yu(s);
              a.call(t);
            };
          }
          var s = Gu(t, 0, !1, null, 0, !1, 0, "", nc);
          return (
            (t.G = s),
            (t[br] = s.current),
            Wi(8 === t.nodeType ? t.parentNode : t),
            pu(function () {
              Wu(e, s, n, i);
            }),
            s
          );
        })(n, e, t, r, i);
      return Yu(l);
    }
    (Qu.prototype.render = Ju.prototype.render =
      function (t) {
        var e = this.U;
        if (null === e) throw Error(n(409));
        Wu(t, e, null, null);
      }),
      (Qu.prototype.unmount = Ju.prototype.unmount =
        function () {
          var t = this.U;
          if (null !== t) {
            this.U = null;
            var e = t.containerInfo;
            pu(function () {
              Wu(null, t, null, null);
            }),
              (e[br] = null);
          }
        }),
      (Qu.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
          var e = Te();
          t = { blockedOn: null, target: t, priority: e };
          for (var n = 0; n < De.length && 0 !== e && e < De[n].priority; n++);
          De.splice(n, 0, t), 0 === n && Ve(t);
        }
      }),
      (Ce = function (t) {
        switch (t.tag) {
          case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
              var n = me(e.pendingLanes);
              0 !== n &&
                (Se(e, 1 | n),
                au(e, ne()),
                !(6 & Os) && ((Us = ne() + 500), Ur()));
            }
            break;
          case 13:
            pu(function () {
              var e = No(t, 1);
              if (null !== e) {
                var n = ru();
                lu(e, t, 1, n);
              }
            }),
              Xu(t, 1);
        }
      }),
      (Ae = function (t) {
        if (13 === t.tag) {
          var e = No(t, 134217728);
          null !== e && lu(e, t, 134217728, ru()), Xu(t, 134217728);
        }
      }),
      (Ie = function (t) {
        if (13 === t.tag) {
          var e = ou(t),
            n = No(t, e);
          null !== n && lu(n, t, e, ru()), Xu(t, e);
        }
      }),
      (Te = function () {
        return Me;
      }),
      (Le = function (t, e) {
        var n = Me;
        try {
          return (Me = t), e();
        } finally {
          Me = n;
        }
      }),
      (Ct = function (t, e, i) {
        switch (e) {
          case "input":
            if ((nt(t, i), (e = i.name), "radio" === i.type && null != e)) {
              for (i = t; i.parentNode; ) i = i.parentNode;
              for (
                i = i.querySelectorAll(
                  "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
                ),
                  e = 0;
                e < i.length;
                e++
              ) {
                var r = i[e];
                if (r !== t && r.form === t.form) {
                  var o = Er(r);
                  if (!o) throw Error(n(90));
                  Z(r), nt(r, o);
                }
              }
            }
            break;
          case "textarea":
            ut(t, i);
            break;
          case "select":
            null != (e = i.value) && lt(t, !!i.multiple, e, !1);
        }
      }),
      (Ot = hu),
      (jt = pu);
    var rc = { usingClientEntryPoint: !1, Events: [Sr, Mr, Er, Lt, zt, hu] },
      oc = {
        findFiberByHostInstance: xr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      lc = {
        bundleType: oc.bundleType,
        version: oc.version,
        rendererPackageName: oc.rendererPackageName,
        rendererConfig: oc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: M.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
          return null === (t = Xt(t)) ? null : t.stateNode;
        },
        findFiberByHostInstance:
          oc.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ac.isDisabled && ac.supportsFiber)
        try {
          (ue = ac.inject(lc)), (ce = ac);
        } catch (pt) {}
    }
    return (
      (m.m = rc),
      (m.createPortal = function (t, e) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!tc(e)) throw Error(n(200));
        return (function (t, e, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: C,
            key: null == i ? null : "" + i,
            children: t,
            containerInfo: e,
            implementation: n,
          };
        })(t, e, null, i);
      }),
      (m.createRoot = function (t, e) {
        if (!tc(t)) throw Error(n(299));
        var i = !1,
          r = "",
          o = Zu;
        return (
          null != e &&
            (!0 === e.unstable_strictMode && (i = !0),
            void 0 !== e.identifierPrefix && (r = e.identifierPrefix),
            void 0 !== e.onRecoverableError && (o = e.onRecoverableError)),
          (e = Gu(t, 1, !1, null, 0, i, 0, r, o)),
          (t[br] = e.current),
          Wi(8 === t.nodeType ? t.parentNode : t),
          new Ju(e)
        );
      }),
      (m.findDOMNode = function (t) {
        if (null == t) return null;
        if (1 === t.nodeType) return t;
        var e = t.V;
        if (void 0 === e) {
          if ("function" == typeof t.render) throw Error(n(188));
          throw ((t = Object.keys(t).join(",")), Error(n(268, t)));
        }
        return null === (t = Xt(e)) ? null : t.stateNode;
      }),
      (m.flushSync = function (t) {
        return pu(t);
      }),
      (m.hydrate = function (t, e, i) {
        if (!ec(e)) throw Error(n(200));
        return ic(null, t, e, !0, i);
      }),
      (m.hydrateRoot = function (t, e, i) {
        if (!tc(t)) throw Error(n(405));
        var r = (null != i && i.hydratedSources) || null,
          o = !1,
          l = "",
          a = Zu;
        if (
          (null != i &&
            (!0 === i.unstable_strictMode && (o = !0),
            void 0 !== i.identifierPrefix && (l = i.identifierPrefix),
            void 0 !== i.onRecoverableError && (a = i.onRecoverableError)),
          (e = Uu(e, null, t, 1, null != i ? i : null, o, 0, l, a)),
          (t[br] = e.current),
          Wi(t),
          r)
        )
          for (t = 0; t < r.length; t++)
            (o = (o = (i = r[t]).W)(i.Y)),
              null == e.mutableSourceEagerHydrationData
                ? (e.mutableSourceEagerHydrationData = [i, o])
                : e.mutableSourceEagerHydrationData.push(i, o);
        return new Qu(e);
      }),
      (m.render = function (t, e, i) {
        if (!ec(e)) throw Error(n(200));
        return ic(null, t, e, !1, i);
      }),
      (m.unmountComponentAtNode = function (t) {
        if (!ec(t)) throw Error(n(40));
        return (
          !!t.G &&
          (pu(function () {
            ic(null, null, t, !1, function () {
              (t.G = null), (t[br] = null);
            });
          }),
          !0)
        );
      }),
      (m.unstable_batchedUpdates = hu),
      (m.unstable_renderSubtreeIntoContainer = function (t, e, i, r) {
        if (!ec(i)) throw Error(n(200));
        if (null == t || void 0 === t.V) throw Error(n(38));
        return ic(t, e, i, !1, r);
      }),
      (m.version = "18.3.1-next-f1338f8080-20240426"),
      m
    );
  }
  var y,
    k,
    x = (function () {
      if (h) return p;
      h = 1;
      var t = (function () {
        return (
          d ||
            ((d = 1),
            !(function t() {
              if (
                "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
              )
                try {
                  __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
                } catch (e) {
                  void 0;
                }
            })(),
            (g.exports = w())),
          g.exports
        );
      })();
      return (p.createRoot = t.createRoot), (p.hydrateRoot = t.hydrateRoot), p;
    })(),
    S = { exports: {} },
    M = {},
    E = (function () {
      return (
        k ||
          ((k = 1),
          (S.exports = (function () {
            if (y) return M;
            y = 1;
            var t = l(),
              e = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              i = {}.hasOwnProperty,
              r = t.m.ReactCurrentOwner,
              o = { key: !0, ref: !0, i: !0, o: !0 };
            function a(t, n, l) {
              var a,
                s = {},
                u = null,
                c = null;
              for (a in (void 0 !== l && (u = "" + l),
              void 0 !== n.key && (u = "" + n.key),
              void 0 !== n.ref && (c = n.ref),
              n))
                i.call(n, a) && !o.hasOwnProperty(a) && (s[a] = n[a]);
              if (t && t.defaultProps)
                for (a in (n = t.defaultProps))
                  void 0 === s[a] && (s[a] = n[a]);
              return {
                $$typeof: e,
                type: t,
                key: u,
                ref: c,
                props: s,
                l: r.current,
              };
            }
            return (M.Fragment = n), (M.jsx = a), (M.jsxs = a), M;
          })())),
        S.exports
      );
    })();
  const C = {
      primary:
        "border border-solid min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-white bg-brand-600 border-brand-600 text-white hover:bg-brand-700 hover:text-white focus:shadow-[0px_0px_0px_4px_rgba(65,109,234,1.00)] rounded-md",
      link: "text-brand-700 bg-transparent min-h-[44px] min-w-[44px] focus:outline-2 focus:outline-white focus:outline-offset-2",
    },
    A = ({ children: t, className: e, variant: n = "primary", ...i }) =>
      E.jsx("button", {
        className: `\n    inline-flex justify-center items-center gap-1 \n    overflow-visible leading-tight text-white\n    px-3.5 py-2.5 text-sm\n      ,\n    ${C[n]}\n    ${e}\n  `,
        ...i,
        children: t,
      });
  class I {}
  n(I, "VARIANT_CLASSES", {
    lineHeight: [
      "efl-leading-normal",
      "efl-leading-relaxed",
      "efl-leading-loose",
    ],
    brightness: ["efl-brightness-low", "efl-brightness-high"],
    smartContrast: ["efl-smart-contrast-low", "efl-smart-contrast-high"],
    saturation: ["efl-saturation-low", "efl-saturation-high"],
    speechReader: [
      "efl-speech-reader-1",
      "efl-speech-reader-2",
      "efl-speech-reader-3",
    ],
    textSpacing: [
      "efl-text-spacing-low",
      "efl-text-spacing-medium",
      "efl-text-spacing-high",
    ],
    contrast: ["efl-invert-color", "efl-contrast-dark", "efl-contrast-light"],
    textAlignment: [
      "efl-alignment-left",
      "efl-alignment-right",
      "efl-alignment-center",
    ],
  }),
    n(I, "WidgetType", {
      Content: "content",
      Color: "color",
      Navigation: "navigation",
    }),
    n(I, "TOTAL_STEPS", {
      biggerText: 3,
      lineHeight: 3,
      textSpacing: 3,
      brightness: 2,
      contrast: 3,
      saturation: 2,
      speechReader: 3,
      fonts: 3,
      smartContrast: 2,
      textAlignment: 3,
    });
  const T = {
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 20,
      h5: 18,
      h6: 16,
      p: 16,
      span: 16,
      a: 16,
    },
    L = new (class {
      constructor() {
        n(this, "widgetId", "efl-a11y-widget"),
          n(this, "originalSizes", new Map()),
          n(this, "currentStep", 0);
      }
      setTextSize(t) {
        if (this.currentStep === t) return;
        const e =
          "Text size changed to " +
          ["Normal", "Small increase", "Medium increase", "Large increase"][t];
        "undefined" != typeof window &&
          window.AccessibilityHelper &&
          window.AccessibilityHelper.announceToScreenReader(e),
          document
            .querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a")
            .forEach((e) => {
              if (!this.isInWidget(e)) {
                const n = e.tagName.toLowerCase();
                if (0 === t) {
                  const t = this.originalSizes.get(e);
                  t
                    ? (e.style.fontSize = t)
                    : e.style.removeProperty("font-size");
                } else {
                  if (!this.originalSizes.has(e)) {
                    const t = window.getComputedStyle(e);
                    this.originalSizes.set(e, t.fontSize);
                  }
                  const i =
                      this.originalSizes.get(e) ||
                      window.getComputedStyle(e).fontSize,
                    r = parseFloat(i),
                    o = ((t, e) => {
                      if (0 === e) return 1;
                      let n;
                      return (
                        (n =
                          t > 16
                            ? t > 48
                              ? 1 === e
                                ? 1.05
                                : 2 === e
                                ? 1.1
                                : 1.15
                              : 1 === e
                              ? 1.1
                              : 2 === e
                              ? 1.2
                              : 1.3
                            : 1 === e
                            ? 1.15
                            : 2 === e
                            ? 1.3
                            : 1.45),
                        n
                      );
                    })(r, t),
                    l = Math.max(r * o, T[n]);
                  e.style.fontSize = l + "px";
                }
              }
            }),
          (this.currentStep = t);
      }
      isInWidget(t) {
        return !!t.closest("#" + this.widgetId);
      }
      cleanup() {
        this.originalSizes.clear();
      }
    })(),
    z = (t) => {
      L.setTextSize(t);
    },
    O = { 1: 1.5, 2: 1.75, 3: 2 },
    j = {
      h1: 1.2,
      h2: 1.2,
      h3: 1.3,
      h4: 1.3,
      h5: 1.4,
      h6: 1.4,
      p: 1,
      span: 1,
      a: 1,
    },
    F = new (class {
      constructor() {
        n(this, "widgetId", "efl-a11y-widget");
      }
      setLineHeight(t) {
        document
          .querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a")
          .forEach((e) => {
            if (!this.isInWidget(e)) {
              const n = e.tagName.toLowerCase();
              if (0 === t)
                e.style.removeProperty("line-height"),
                  "p" === n && e.style.removeProperty("margin-bottom");
              else {
                const i = O[t] * j[n];
                if (((e.style.lineHeight = i.toString()), "p" === n)) {
                  const t = 1.5 * i;
                  e.style.marginBottom = t + "em";
                }
              }
            }
          });
      }
      isInWidget(t) {
        return !!t.closest("#" + this.widgetId);
      }
    })(),
    P = (t) => {
      F.setLineHeight(t);
    },
    R = {
      1: { letterSpacing: 0.12, wordSpacing: 0.16, paragraphSpacing: 2 },
      2: { letterSpacing: 0.24, wordSpacing: 0.32, paragraphSpacing: 2.5 },
      3: { letterSpacing: 0.36, wordSpacing: 0.48, paragraphSpacing: 3 },
    },
    _ = {
      h1: 1.2,
      h2: 1.2,
      h3: 1.3,
      h4: 1.3,
      h5: 1.4,
      h6: 1.4,
      p: 1,
      span: 1,
      a: 1,
    },
    D = new (class {
      constructor() {
        n(this, "widgetId", "efl-a11y-widget");
      }
      setTextSpacing(t) {
        document
          .querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a")
          .forEach((e) => {
            if (!this.isInWidget(e)) {
              const n = e.tagName.toLowerCase();
              if (0 === t)
                e.style.removeProperty("letter-spacing"),
                  e.style.removeProperty("word-spacing"),
                  "p" === n && e.style.removeProperty("margin-bottom");
              else {
                const i = _[n],
                  r = R[t];
                if (
                  ((e.style.letterSpacing = r.letterSpacing * i + "em"),
                  (e.style.wordSpacing = r.wordSpacing * i + "em"),
                  "p" === n)
                ) {
                  const t =
                    parseFloat(getComputedStyle(e).lineHeight) *
                    r.paragraphSpacing;
                  e.style.marginBottom = t + "px";
                }
              }
            }
          });
      }
      isInWidget(t) {
        return !!t.closest("#" + this.widgetId);
      }
    })(),
    N = (t) => {
      D.setTextSpacing(t);
    },
    $ = new (class {
      constructor() {
        n(this, "tooltip", null),
          n(this, "isActive", !1),
          n(this, "currentMouseX", 0),
          n(this, "currentMouseY", 0),
          n(this, "handleReset", () => {
            (this.isActive = !1),
              (this.tooltip = null),
              (this.currentMouseX = 0),
              (this.currentMouseY = 0);
          }),
          n(this, "handleMouseOver", (t) => {
            try {
              const e = t.target;
              if (!(e && e instanceof HTMLElement)) return;
              if (e.closest("#efl-a11y-widget") || e.closest("#efl-a11y-root"))
                return;
              if ("IMG" === e.tagName) {
                const n = e.getAttribute("alt");
                n?.trim() && this.showTooltip(n.trim(), t);
              } else if (this.isOverlayElement(e)) {
                const n = e.parentElement;
                if (n) {
                  const e = n.querySelector("img");
                  if (e) {
                    const n = e.getAttribute("alt");
                    n?.trim() && this.showTooltip(n.trim(), t);
                  }
                }
              }
              if ("AREA" === e.tagName) {
                const n = e.getAttribute("alt");
                n?.trim() && this.showTooltip(n.trim(), t);
              } else if ("INPUT" === e.tagName && "image" === e.type) {
                const n = e.getAttribute("alt");
                n?.trim() && this.showTooltip(n.trim(), t);
              }
            } catch (e) {
              void 0;
            }
          }),
          n(this, "handleMouseOut", (t) => {
            try {
              const e = t.target;
              if (!e) return;
              if ("IMG" === e.tagName) this.hideTooltip();
              else if (this.isOverlayElement(e)) {
                const t = e.parentElement;
                t && t.querySelector("img") && this.hideTooltip();
              }
              ("AREA" === e.tagName ||
                ("INPUT" === e.tagName && "image" === e.type)) &&
                this.hideTooltip();
            } catch (e) {
              void 0;
            }
          }),
          n(this, "updateTooltip", (t) => {
            (this.currentMouseX = t.clientX),
              (this.currentMouseY = t.clientY),
              this.tooltip &&
                this.tooltip.classList.contains("show") &&
                this.updateTooltipPosition(t);
          }),
          n(this, "handleViewportChange", () => {
            if (this.tooltip && this.tooltip.classList.contains("show")) {
              const t = {
                clientX: this.currentMouseX,
                clientY: this.currentMouseY,
              };
              this.updateTooltipPosition(t);
            }
          }),
          n(this, "handleScroll", () => {
            if (this.tooltip && this.tooltip.classList.contains("show")) {
              const t = {
                clientX: this.currentMouseX,
                clientY: this.currentMouseY,
              };
              this.updateTooltipPosition(t);
            }
          }),
          window.addEventListener("efl-widget-reset", this.handleReset);
      }
      setTooltip(t) {
        t ? this.create() : this.destroy();
      }
      create() {
        this.isActive ||
          ((this.tooltip = this.createTooltipElement()),
          document.body.appendChild(this.tooltip),
          document.addEventListener("mouseenter", this.handleMouseOver, !0),
          document.addEventListener("mouseleave", this.handleMouseOut, !0),
          document.addEventListener("mousemove", this.updateTooltip),
          window.addEventListener("resize", this.handleViewportChange),
          window.addEventListener("scroll", this.handleScroll),
          (this.isActive = !0));
      }
      createTooltipElement() {
        const t = document.createElement("div");
        return (
          (t.className = "efl-custom-tooltip"),
          t.setAttribute("role", "tooltip"),
          t.setAttribute("aria-live", "polite"),
          t.setAttribute("aria-atomic", "true"),
          (t.style.left = "0px"),
          (t.style.top = "0px"),
          t
        );
      }
      showTooltip(t, e) {
        this.tooltip &&
          ((this.tooltip.textContent = t),
          this.updateTooltipPosition(e),
          this.tooltip.classList.add("show"));
      }
      hideTooltip() {
        this.tooltip && this.tooltip.classList.remove("show");
      }
      updateTooltipPosition(t) {
        if (!this.tooltip) return;
        const e = this.tooltip.getBoundingClientRect();
        let n = t.clientX + 12,
          i = t.clientY + 30;
        const r = window.innerWidth,
          o = window.innerHeight;
        n + e.width > r - 12 && (n = t.clientX - e.width - 12),
          i + e.height > o - 12 && (i = t.clientY - e.height - 30),
          12 > n && (n = 12),
          12 > i && (i = t.clientY + 30),
          (this.tooltip.style.left = n + "px"),
          (this.tooltip.style.top = i + "px");
      }
      showCustomTooltip(t, e, n, i = 0) {
        this.tooltip ||
          ((this.tooltip = this.createTooltipElement()),
          document.body.appendChild(this.tooltip)),
          (this.tooltip.textContent = t),
          (this.tooltip.style.left = e + "px"),
          (this.tooltip.style.top = n + "px"),
          this.tooltip.classList.add("show"),
          i > 0 && setTimeout(() => this.hideTooltip(), i);
      }
      destroy() {
        this.isActive &&
          (document.removeEventListener("mouseenter", this.handleMouseOver, !0),
          document.removeEventListener("mouseleave", this.handleMouseOut, !0),
          document.removeEventListener("mousemove", this.updateTooltip),
          window.removeEventListener("resize", this.handleViewportChange),
          window.removeEventListener("scroll", this.handleScroll),
          this.tooltip?.remove(),
          (this.tooltip = null),
          (this.isActive = !1));
      }
      isOverlayElement(t) {
        try {
          if (!(t && t instanceof HTMLElement)) return !1;
          const e = window.getComputedStyle(t),
            n = e.position,
            i = e.zIndex;
          if (
            ("absolute" === n || "fixed" === n) &&
            ("auto" === i ? 0 : parseInt(i) || 0) > 0
          ) {
            const t = parseFloat(e.opacity) || 1,
              n = e.background || "";
            if (1 > t || n.includes("gradient")) return !0;
          }
          return !1;
        } catch (e) {
          return void 0, !1;
        }
      }
    })(),
    H = (t) => {
      $.setTooltip(t);
    };
  function V(t, e) {
    if (
      (document.querySelectorAll("span[data-original-text]").forEach((t) => {
        const e = t.getAttribute("data-original-text");
        if (null !== e && t.parentNode) {
          const n = document.createTextNode(e);
          t.parentNode.replaceChild(n, t);
        }
      }),
      !t)
    ) {
      const t = (e) => {
        if (
          e.nodeType !== Node.ELEMENT_NODE ||
          (!e.closest("#efl-a11y-widget") && !e.closest("#efl-a11y-root"))
        )
          if (e.nodeType === Node.TEXT_NODE && e.parentNode) {
            const t = e.parentNode;
            if (
              t.closest &&
              (t.closest("#efl-a11y-widget") || t.closest("#efl-a11y-root"))
            )
              return;
            const n = e.textContent || "";
            if (n.trim().length > 0) {
              const t = n
                  .split(/(\s+)/)
                  .map((t) => {
                    if (/^\s+$/.test(t)) return t;
                    if (0 === t.length) return "";
                    const e = Math.ceil(0.4 * t.length);
                    return `<span><strong style="color: black; font-weight: bold;">${t.slice(
                      0,
                      e
                    )}</strong>${t.slice(e)}</span>`;
                  })
                  .join(""),
                i = document.createElement("span");
              (i.innerHTML = t),
                i.setAttribute("data-original-text", n),
                e.parentNode.replaceChild(i, e);
            }
          } else if (e.nodeType === Node.ELEMENT_NODE) {
            const n = e.tagName.toLowerCase();
            if (
              [
                "script",
                "style",
                "noscript",
                "iframe",
                "canvas",
                "svg",
                "math",
              ].includes(n)
            )
              return;
            Array.from(e.childNodes).forEach((e) => t(e));
          }
      };
      t(document.body);
    }
    const n = !t;
    return e("efl-bionic-font", n), n;
  }
  class B {
    static stopAnimations() {
      (this.isAnimationStopped = !0),
        window.dispatchEvent(
          new CustomEvent("efl-stop-animations", { detail: { stopped: !0 } })
        ),
        document.documentElement.style.setProperty(
          "--efl-motion-disabled",
          "1"
        ),
        this.processExistingElements(),
        this.startObserver();
    }
    static resumeAnimations() {
      (this.isAnimationStopped = !1),
        window.dispatchEvent(
          new CustomEvent("efl-resume-animations", { detail: { stopped: !1 } })
        ),
        document.documentElement.style.removeProperty("--efl-motion-disabled"),
        this.stopObserver(),
        this.clearStyleOverrides();
    }
    static processExistingElements() {
      document
        .querySelectorAll(
          '[data-framer-motion], [style*="transform"], [style*="animation"]'
        )
        .forEach((t) => {
          this.disableElementAnimations(t);
        }),
        document
          .querySelectorAll(
            '.animate-pulse, .animate-ping, .animate-spin, .animate-bounce, [class*="animate-"]'
          )
          .forEach((t) => {
            this.disableElementAnimations(t);
          });
    }
    static disableElementAnimations(t) {
      if (!t) return;
      const e =
        t.getAttribute("data-efl-original-style") ||
        t.getAttribute("style") ||
        "";
      t.hasAttribute("data-efl-original-style") ||
        t.setAttribute("data-efl-original-style", e),
        (t.style.cssText =
          e +
          "; \n      animation: none !important;\n      transition: none !important;\n      transform: none !important;\n      animation-play-state: paused !important;\n    ");
    }
    static clearStyleOverrides() {
      document.querySelectorAll("[data-efl-original-style]").forEach((t) => {
        const e = t.getAttribute("data-efl-original-style") || "";
        (t.style.cssText = e), t.removeAttribute("data-efl-original-style");
      });
    }
    static startObserver() {
      this.mutationObserver ||
        ((this.mutationObserver = new MutationObserver((t) => {
          this.isAnimationStopped &&
            t.forEach((t) => {
              t.addedNodes.forEach((t) => {
                if (t.nodeType === Node.ELEMENT_NODE) {
                  const e = t;
                  this.hasAnimation(e) && this.disableElementAnimations(e),
                    e
                      .querySelectorAll(
                        '[data-framer-motion], [style*="transform"], [style*="animation"], .animate-pulse, .animate-ping, .animate-spin, .animate-bounce, [class*="animate-"]'
                      )
                      .forEach((t) => {
                        this.disableElementAnimations(t);
                      });
                }
              });
            });
        })),
        this.mutationObserver.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["style", "class"],
        }));
    }
    static stopObserver() {
      this.mutationObserver &&
        (this.mutationObserver.disconnect(), (this.mutationObserver = null));
    }
    static hasAnimation(t) {
      if (!t) return !1;
      if (t.hasAttribute("data-framer-motion")) return !0;
      const e = t.getAttribute("style") || "";
      if (e.includes("transform") || e.includes("animation")) return !0;
      const n = t.className;
      return !("string" != typeof n || !n.includes("animate-"));
    }
    static cleanup() {
      this.stopObserver(),
        this.clearStyleOverrides(),
        (this.isAnimationStopped = !1);
    }
  }
  n(B, "isAnimationStopped", !1), n(B, "mutationObserver", null);
  var G = ((t) => (
    (t.fileIcon = "mdi:file-document-box"),
    (t.settingsIcon = "mdi:cog"),
    (t.plusIcon = "mdi:plus"),
    (t.featuredIcon = "mdi:star"),
    (t.logoutIcon = "mdi:logout"),
    (t.logoIcon = "mdi:alpha-l-box"),
    (t.userIcon = "mdi:account"),
    (t.domainIcon = "mdi:domain"),
    (t.registerCodeIcon = "mdi:key"),
    (t.copyIcon = "mdi:content-copy"),
    (t.eyeIcon = "mdi:eye-outline"),
    (t.homeIcon = "mdi:home"),
    (t.organizationIcon = "mdi:account-group"),
    (t.closeIcon = "mdi:close"),
    (t.codeTags = "mdi:code-tags"),
    (t.deleteOutline = "mdi:delete-outline"),
    (t.pencilOutline = "mdi:pencil-outline"),
    (t.magic = "mdi:magic"),
    (t.contrast = "mdi:contrast"),
    (t.invertColors = "mdi:invert-colors"),
    (t.weatherNight = "mdi:weather-night"),
    (t.whiteBalanceSunny = "mdi:white-balance-sunny"),
    (t.fonts = "mdi:format-font-size-increase"),
    (t.formatFont = "mdi:format-font"),
    (t.formatBold = "mdi:format-bold"),
    (t.formatAlignLeft = "mdi:format-align-left"),
    (t.formatAlignCenter = "mdi:format-align-center"),
    (t.formatAlignRight = "mdi:format-align-right"),
    (t.volumeLow = "mdi:volume-low"),
    (t.volumeMedium = "mdi:volume-medium"),
    (t.volumeHigh = "mdi:volume-high"),
    (t.biggerText = "mdi:format-size"),
    (t.lineHeight = "mdi:format-line-spacing"),
    (t.textSpacing = "mdi:format-letter-spacing"),
    (t.cursorLarge = "mdi:cursor-default"),
    (t.hideImages = "mdi:image-off"),
    (t.stopAnimation = "mdi:animation-outline"),
    (t.tooltip = "mdi:tooltip-text"),
    (t.highlightLinks = "mdi:link"),
    (t.readMode = "mdi:book-open-page-variant"),
    (t.muteSound = "mdi:volume-mute"),
    (t.highlightFocus = "mdi:cursor-default-click"),
    (t.oldAgeMode = "mdi:account-outline"),
    (t.dyslexiaMode = "mdi:alphabetical-variant"),
    (t.adhdMode = "mdi:lightbulb-on"),
    (t.visionImpairedProfile = "mdi:eye-check"),
    (t.seizureSafeProfile = "mdi:flash-off"),
    (t.wheelchair = "mdi:wheelchair-accessibility"),
    (t.universalAccess = "fa6-solid:universal-access"),
    (t.accessibilityNew = "material-symbols:accessibility-new-rounded"),
    t
  ))(G || {});
  const K = {
      1: "efl-dyslexia-font",
      2: "efl-readable-font",
      3: "efl-bionic-font",
    },
    U = { 0: G.fonts, 1: G.dyslexiaMode, 2: G.formatFont, 3: G.formatBold },
    W = {
      0: G.formatAlignCenter,
      1: G.formatAlignLeft,
      2: G.formatAlignCenter,
      3: G.formatAlignRight,
    },
    Y = new (class {
      constructor() {
        n(this, "topMask", null),
          n(this, "bottomMask", null),
          n(this, "isActive", !1),
          n(this, "currentMouseY", 0),
          n(this, "READING_HEIGHT", 80),
          n(this, "handleReset", () => {
            (this.isActive = !1),
              (this.topMask = null),
              (this.bottomMask = null),
              (this.currentMouseY = 0);
          }),
          n(this, "updateMasks", (t) => {
            (this.currentMouseY = t.clientY),
              this.updateMasksAt(this.currentMouseY);
          }),
          n(this, "handleViewportChange", () => {
            this.isActive &&
              this.currentMouseY &&
              this.updateMasksAt(this.currentMouseY);
          }),
          n(this, "handleScroll", () => {
            this.isActive &&
              this.currentMouseY &&
              this.updateMasksAt(this.currentMouseY);
          }),
          window.addEventListener("efl-widget-reset", this.handleReset);
      }
      setReadingMask(t) {
        t ? this.create() : this.destroy();
      }
      create() {
        this.isActive ||
          ((this.topMask = this.createMaskElement("efl-reading-mask-top")),
          (this.bottomMask = this.createMaskElement("efl-reading-mask-bottom")),
          document.body.append(this.topMask, this.bottomMask),
          this.updateMasksAt(this.currentMouseY || window.innerHeight / 2),
          document.addEventListener("mousemove", this.updateMasks),
          window.addEventListener("resize", this.handleViewportChange),
          window.addEventListener("scroll", this.handleScroll),
          (this.isActive = !0));
      }
      createMaskElement(t) {
        const e = document.createElement("div");
        return (
          (e.className = t),
          (e.style.height = "0px"),
          (e.style.isolation = "isolate"),
          (e.style.willChange = "height"),
          e.setAttribute("aria-hidden", "true"),
          e.setAttribute("role", "presentation"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      updateMasksAt(t) {
        if (!this.topMask || !this.bottomMask) return;
        const e = this.READING_HEIGHT / 2,
          n = Math.max(e, Math.min(t, window.innerHeight - e)),
          i = Math.max(0, n - e),
          r = Math.max(0, window.innerHeight - n - e);
        (this.topMask.style.height = i + "px"),
          (this.bottomMask.style.height = r + "px"),
          (this.currentMouseY = t);
      }
      destroy() {
        this.isActive &&
          (document.removeEventListener("mousemove", this.updateMasks),
          window.removeEventListener("resize", this.handleViewportChange),
          window.removeEventListener("scroll", this.handleScroll),
          this.topMask?.remove(),
          this.bottomMask?.remove(),
          (this.topMask = null),
          (this.bottomMask = null),
          (this.isActive = !1));
      }
    })(),
    q = (t) => {
      Y.setReadingMask(t);
    },
    X = new (class {
      constructor() {
        n(this, "guide", null),
          n(this, "isActive", !1),
          n(this, "currentMouseY", 0),
          n(this, "handleReset", () => {
            (this.isActive = !1), (this.guide = null), (this.currentMouseY = 0);
          }),
          n(this, "updateGuide", (t) => {
            (this.currentMouseY = t.clientY),
              this.updateGuideAt(this.currentMouseY);
          }),
          n(this, "handleViewportChange", () => {
            this.guide &&
              this.currentMouseY &&
              this.updateGuideAt(this.currentMouseY);
          }),
          n(this, "handleScroll", () => {
            this.guide &&
              this.currentMouseY &&
              this.updateGuideAt(this.currentMouseY);
          }),
          window.addEventListener("efl-widget-reset", this.handleReset);
      }
      setReadingGuide(t) {
        t ? this.create() : this.destroy();
      }
      create() {
        this.isActive ||
          ((this.guide = this.createGuideElement()),
          document.body.appendChild(this.guide),
          this.updateGuideAt(this.currentMouseY || window.innerHeight / 2),
          document.addEventListener("mousemove", this.updateGuide),
          window.addEventListener("resize", this.handleViewportChange),
          window.addEventListener("scroll", this.handleScroll),
          (this.isActive = !0));
      }
      createGuideElement() {
        const t = document.createElement("div");
        return (
          (t.className = "efl-reading-guide"),
          (t.style.top = "0px"),
          t.setAttribute("aria-hidden", "true"),
          t.setAttribute("role", "presentation"),
          t.setAttribute("aria-label", "Reading guide line"),
          (t.style.pointerEvents = "none"),
          t
        );
      }
      updateGuideAt(t) {
        if (!this.guide) return;
        const e = Math.max(6, Math.min(t - 6, window.innerHeight - 18));
        (this.guide.style.top = e + "px"), (this.currentMouseY = t);
      }
      destroy() {
        this.isActive &&
          (document.removeEventListener("mousemove", this.updateGuide),
          window.removeEventListener("resize", this.handleViewportChange),
          window.removeEventListener("scroll", this.handleScroll),
          this.guide?.remove(),
          (this.guide = null),
          (this.isActive = !1));
      }
    })(),
    Z = (t) => {
      X.setReadingGuide(t);
    },
    J = new (class {
      constructor() {
        n(this, "isActive", !1),
          n(this, "currentSpeed", 0),
          n(this, "currentLanguage", "tr"),
          n(this, "synthesis"),
          n(this, "currentUtterance", null),
          n(this, "voices", []),
          n(this, "messages", {
            tr: {
              activated:
                "Sesli okuma etkinleştirildi. Okumak istediğiniz metne tıklayın.",
              deactivated: "Sesli okuma kapatıldı.",
              image: "Görsel",
            },
            en: {
              activated:
                "Speech reader activated. Click on the text you want to read.",
              deactivated: "Speech reader deactivated.",
              image: "Image",
            },
          }),
          n(this, "handleClick", (t) => {
            const e = t.target;
            if (this.isInWidget(e)) return;
            this.stopSpeaking();
            const n = this.extractText(e);
            n &&
              n.trim().length > 0 &&
              (this.speak(n), this.highlightElement(e));
          }),
          (this.synthesis = window.speechSynthesis),
          this.loadVoices(),
          this.synthesis.addEventListener("voiceschanged", () => {
            this.loadVoices();
          });
      }
      getCurrentLanguage() {
        try {
          const t = ot.getLanguage() || "tr";
          t !== this.currentLanguage && (this.currentLanguage = t);
        } catch (t) {
          void 0, (this.currentLanguage = "tr");
        }
        return this.currentLanguage;
      }
      loadVoices() {
        this.voices = this.synthesis.getVoices();
      }
      setSpeechReader(t) {
        (this.currentSpeed = t),
          this.getCurrentLanguage(),
          0 === t ? this.deactivate() : this.activate();
      }
      activate() {
        this.isActive ||
          (document.addEventListener("click", this.handleClick),
          (this.isActive = !0),
          this.speak(this.messages[this.getCurrentLanguage()].activated));
      }
      deactivate() {
        this.isActive &&
          (document.removeEventListener("click", this.handleClick),
          this.stopSpeaking(),
          (this.isActive = !1));
      }
      extractText(t) {
        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName) {
          const e = t;
          return e.value || e.placeholder || "";
        }
        if ("IMG" === t.tagName)
          return t.alt || this.messages[this.getCurrentLanguage()].image;
        if ("BUTTON" === t.tagName) return t.textContent?.trim() || "";
        const e = t.textContent?.trim() || "";
        if (e) return e;
        let n = "";
        const i = (t) =>
          t.nodeType === Node.TEXT_NODE
            ? t.textContent || ""
            : t.nodeType === Node.ELEMENT_NODE
            ? Array.from(t.childNodes).map(i).join("")
            : "";
        for (const r of t.childNodes) n += i(r);
        return n.trim();
      }
      getVoiceByLanguage(t) {
        const e = {
          tr: ["tr-TR", "tr", "TR", "Turkish", "Türkçe", "Turkey", "Turk"],
          en: [
            "en-US",
            "en-GB",
            "en",
            "EN",
            "English",
            "United States",
            "US",
            "GB",
            "UK",
          ],
        }[t];
        for (const n of e) {
          const t = this.voices.find((t) => t.lang === n);
          if (t) return t;
        }
        for (const n of e) {
          const t = this.voices.find(
            (t) => t.lang.includes(n) || t.name.includes(n)
          );
          if (t) return t;
        }
        return null;
      }
      speak(t) {
        if (t) {
          if ((this.stopSpeaking(), 0 === this.voices.length))
            return (
              this.loadVoices(), setTimeout(() => this.speak(t), 100), void 0
            );
          setTimeout(() => {
            (this.currentUtterance = new SpeechSynthesisUtterance(t)),
              (this.currentUtterance.rate = { 0: 1, 1: 0.7, 2: 1, 3: 1.2 }[
                this.currentSpeed
              ]),
              (this.currentUtterance.pitch = 1),
              (this.currentUtterance.volume = 0.9);
            const e = this.getCurrentLanguage(),
              n = this.getVoiceByLanguage(e);
            n
              ? ((this.currentUtterance.voice = n),
                (this.currentUtterance.lang = e))
              : (void 0,
                this.voices.length > 0 &&
                  (this.currentUtterance.voice = this.voices[0] ?? null)),
              (this.currentUtterance.onend = () => {
                this.removeHighlight();
              }),
              (this.currentUtterance.onerror = () => {
                this.removeHighlight();
              }),
              this.synthesis.paused && this.synthesis.resume(),
              this.synthesis.speak(this.currentUtterance);
            const i = setInterval(() => {
              this.synthesis.speaking
                ? this.synthesis.resume()
                : clearInterval(i);
            }, 14e3);
            this.currentUtterance.onend = () => {
              clearInterval(i), this.removeHighlight();
            };
          }, 100);
        }
      }
      stopSpeaking() {
        (this.synthesis.speaking || this.synthesis.pending) &&
          this.synthesis.cancel(),
          this.currentUtterance &&
            ((this.currentUtterance.onend = null),
            (this.currentUtterance.onerror = null),
            (this.currentUtterance.onstart = null),
            (this.currentUtterance = null)),
          this.removeHighlight();
      }
      highlightElement(t) {
        this.removeHighlight(),
          (t.style.outline = "3px solid #ff6b35"),
          (t.style.outlineOffset = "2px"),
          t.setAttribute("data-speech-highlight", "true");
      }
      removeHighlight() {
        document.querySelectorAll("[data-speech-highlight]").forEach((t) => {
          (t.style.outline = ""),
            (t.style.outlineOffset = ""),
            t.removeAttribute("data-speech-highlight");
        });
      }
      isInWidget(t) {
        return !!t.closest("#efl-a11y-widget");
      }
      changeSpeed(t) {
        this.setSpeechReader(t);
      }
      stop() {
        this.stopSpeaking();
      }
      updateLanguage(t) {
        if (((this.currentLanguage = t), this.loadVoices(), this.isActive)) {
          const e = this.currentSpeed;
          this.stopSpeaking(),
            (this.isActive = !1),
            document.removeEventListener("click", this.handleClick),
            this.deactivate(),
            setTimeout(() => {
              (this.currentLanguage = t), this.setSpeechReader(e);
            }, 150);
        }
      }
    })(),
    Q = (t) => {
      J.setSpeechReader(t);
    },
    tt = (t) => {
      J.updateLanguage(t);
    };
  class et {
    constructor() {
      n(this, "muteSound", null),
        n(this, "isActive", !1),
        n(this, "mediaElements", new Set()),
        n(this, "prevStates", new WeakMap()),
        n(this, "observer", null),
        n(this, "audioContexts", new Set()),
        n(this, "handleReset", () => {
          this.setMuteSound(!1);
        }),
        window.addEventListener("efl-widget-reset", this.handleReset),
        this.patchAudioContext();
    }
    setMuteSound(t) {
      t ? this.create() : this.destroy();
    }
    create() {
      this.isActive ||
        (this.collectMediaElements(),
        this.applyMute(),
        this.observeDom(),
        (this.isActive = !0));
    }
    destroy() {
      this.isActive &&
        (this.restoreMedia(),
        this.disconnectObserver(),
        this.muteSound?.remove(),
        (this.muteSound = null),
        (this.isActive = !1));
    }
    collectMediaElements() {
      document
        .querySelectorAll("audio, video")
        .forEach((t) => this.trackMedia(t));
    }
    trackMedia(t) {
      this.mediaElements.has(t) ||
        (this.mediaElements.add(t),
        this.prevStates.set(t, {
          volume: t.volume,
          muted: t.muted,
          paused: t.paused,
        }),
        (t.muted = !0),
        (t.volume = 0),
        t.paused || t.pause());
    }
    applyMute() {
      this.mediaElements.forEach((t) => {
        this.prevStates.has(t) ||
          this.prevStates.set(t, {
            volume: t.volume,
            muted: t.muted,
            paused: t.paused,
          }),
          (t.muted = !0),
          (t.volume = 0),
          t.paused || t.pause();
      }),
        this.audioContexts.forEach((t) => {
          "closed" !== t.state && t.suspend().catch(() => {});
        });
    }
    restoreMedia() {
      this.mediaElements.forEach((t) => {
        const e = this.prevStates.get(t);
        e && ((t.muted = e.muted), (t.volume = e.volume));
      }),
        this.audioContexts.forEach((t) => {
          "suspended" === t.state && t.resume().catch(() => {});
        }),
        this.mediaElements.clear(),
        (this.prevStates = new WeakMap());
    }
    observeDom() {
      (this.observer = new MutationObserver((t) => {
        for (const e of t)
          e.addedNodes.forEach((t) => {
            t instanceof HTMLMediaElement
              ? this.trackMedia(t)
              : t instanceof HTMLElement &&
                t.querySelectorAll?.("audio, video").forEach((t) => {
                  this.trackMedia(t);
                });
          });
      })),
        this.observer.observe(document.body, { childList: !0, subtree: !0 });
    }
    disconnectObserver() {
      this.observer?.disconnect(), (this.observer = null);
    }
    patchAudioContext() {
      const t = window.AudioContext || window.webkitAudioContext;
      if (!t) return;
      const e = class extends t {
        constructor(t) {
          super(t), et.prototype.audioContexts.add(this);
        }
      };
      (window.AudioContext = e),
        "webkitAudioContext" in window && (window.webkitAudioContext = e);
    }
  }
  const nt = new et(),
    it = class t {
      static announceToScreenReader(t, e = "polite") {
        const n = document.getElementById("accessibility-announcements");
        n &&
          (n.setAttribute("aria-live", e),
          (n.textContent = t),
          setTimeout(() => {
            n.textContent = "";
          }, 1e3));
      }
      static resetAllAccessibilitySettings() {
        ot.clearWidgetState(),
          window.dispatchEvent(new Event("efl-widget-reset")),
          [
            "seizureSafeProfile",
            "visionImpairedProfile",
            "adhdMode",
            "blindMode",
            "dyslexiaMode",
            "oldAgeMode",
          ].forEach((t) => {
            window.dispatchEvent(
              new CustomEvent("efl-switch-reset", { detail: { id: t } })
            );
          }),
          setTimeout(() => {
            document.body.className = document.body.className
              .split(" ")
              .filter((t) => !t.startsWith("efl-"))
              .join(" ");
            const e = document.documentElement;
            (e.className = e.className
              .split(" ")
              .filter((t) => !t.startsWith("efl-"))
              .join(" ")),
              Array.from(e.attributes).forEach((t) => {
                t.name.startsWith("data-efl-") && e.removeAttribute(t.name);
              }),
              document
                .querySelectorAll(
                  ".efl-reading-guide, .efl-reading-mask-top, .efl-reading-mask-bottom, .efl-custom-tooltip"
                )
                .forEach((t) => t.remove()),
              B.cleanup(),
              L.cleanup(),
              document
                .querySelectorAll(
                  "h1[style], h2[style], h3[style], h4[style], h5[style], h6[style], p[style], span[style], a[style]"
                )
                .forEach((t) => {
                  t.closest("#efl-a11y-widget") || t.removeAttribute("style");
                }),
              document
                .querySelectorAll("span[data-original-text]")
                .forEach((t) => {
                  const e = t.getAttribute("data-original-text");
                  if (null !== e && t.parentNode) {
                    const n = document.createTextNode(e);
                    t.parentNode.replaceChild(n, t);
                  }
                }),
              J.stop(),
              Q(0),
              ["color", "content", "navigation"].forEach((e) => {
                const n = ot.getDefaultState(e);
                n && t.processState(n, e);
              });
          }, 0);
      }
      static updateBodyClass(t, e) {
        const n = document.body;
        e ? n.classList.add(t) : n.classList.remove(t);
      }
      static updateAttributeClass(t) {
        const e = document.documentElement,
          { type: n, status: i, step: r } = t,
          o = "data-efl-" + n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          l = r ? t.step.toString() : "true";
        i ? e.setAttribute(o, l) : e.removeAttribute(o);
      }
      static updateHTMLClass(t, e) {
        const n = document.documentElement;
        e ? n.classList.add(t) : n.classList.remove(t);
      }
      static updateHTMLClassStep(t) {
        if (!t || !t.type) return;
        const e = t.type;
        if (!I.VARIANT_CLASSES[e]) return void 0, void 0;
        if (
          (I.VARIANT_CLASSES[e].forEach((t) => {
            this.updateHTMLClass(t, !1);
          }),
          t.step > 0 && t.step <= I.TOTAL_STEPS[e])
        ) {
          const n = I.VARIANT_CLASSES[e][t.step - 1];
          n && this.updateHTMLClass(n, !0);
        }
      }
      static processState(t, e) {
        t &&
          Object.keys(t).forEach((n) => {
            const i = t[n];
            if (i && i.status)
              switch (e) {
                case "content":
                  this.handleContentKey(n, i);
                  break;
                case "color":
                  this.handleColorKey(n, i);
                  break;
                case "navigation":
                  this.handleNavigationKey(n, i);
                  break;
                case "specialMode":
                  this.handleSpecialModeKey(n, i);
              }
          });
      }
      static handleContentKey(e, n) {
        switch (e) {
          case "biggerText":
            z(n.step);
            break;
          case "lineHeight":
            P(n.step);
            break;
          case "textSpacing":
            N(n.step);
            break;
          case "cursorLarge":
            t.updateBodyClass("efl-cursor-large", !0);
            break;
          case "hideImages":
            t.updateBodyClass("efl-hide-images", !0);
            break;
          case "tooltip":
            H(!0);
            break;
          case "fonts":
            if ("number" == typeof n.step && n.step > 0)
              if (3 === n.step) V(!1, () => {});
              else {
                const e = K[n.step];
                t.updateBodyClass(e, !0);
              }
            break;
          case "stopAnimation":
            t.updateBodyClass("efl-stop-animation", !0), B.stopAnimations();
            break;
          case "textAlignment": {
            const e = "efl-text-alignment-" + n.step;
            t.updateBodyClass(e, !0);
            break;
          }
        }
      }
      static handleColorKey(e, n) {
        switch (e) {
          case "brightness":
          case "contrast":
          case "saturation":
          case "smartContrast":
            t.updateHTMLClassStep(n);
            break;
          case "monochrome":
            t.updateHTMLClass("efl-monochrome-color", n.status);
        }
      }
      static handleNavigationKey(e, n) {
        switch (e) {
          case "readingMask":
            q(!0);
            break;
          case "readingGuide":
            Z(!0);
            break;
          case "speechReader":
            Q(n.step);
            break;
          case "readMode":
            t.updateBodyClass("efl-read-mode", n.status);
            break;
          case "highlightLinks":
            t.updateBodyClass("efl-highlight-links", n.status);
        }
      }
      static handleSpecialModeKey(t, e) {
        switch (t) {
          case "seizureSafeProfile":
          case "visionImpairedProfile":
          case "adhdMode":
          case "blindMode":
          case "dyslexiaMode":
          case "oldAgeMode":
            window.dispatchEvent(
              new CustomEvent("efl-switch", {
                detail: { id: t, status: e.status },
              })
            );
        }
      }
      static getPreviewButtonPositioning(t = "bottom-right") {
        return {
          "top-right": "top-4 right-4",
          "top-left": "top-4 left-4",
          "bottom-right": "bottom-4 right-4",
          "bottom-left": "bottom-4 left-4",
        }[t];
      }
      static getPreviewWidgetPositioning(t = "bottom-right") {
        return {
          "top-right": "top-0 right-0",
          "top-left": "top-0 left-0",
          "bottom-right": "bottom-0 right-0",
          "bottom-left": "bottom-0 left-0",
        }[t];
      }
    };
  n(it, "handleStep", (t, e) => {
    const n = t.type,
      i = t.step < I.TOTAL_STEPS[n] ? t.step + 1 : 0,
      r = { status: 0 !== i, step: i, type: n, totalSteps: I.TOTAL_STEPS[n] };
    e("" + t.type, r);
  }),
    n(it, "getFilteredAndOrderedItems", (t, e) =>
      e
        ? t
            .filter((t) => !0 === e[t.id]?.enabled)
            .sort((t, n) => (e[t.id]?.order || 0) - (e[n.id]?.order || 0))
        : t
    ),
    n(it, "getSortedSections", (t) =>
      t
        ? Object.entries(t)
            .filter(
              ([, t]) =>
                "enabled" in t &&
                t.enabled &&
                Object.values(t.items).some((t) => t.enabled)
            )
            .sort(([, t], [, e]) =>
              "order" in t && "order" in e ? t.order - e.order : 0
            )
        : []
    ),
    n(it, "getThemeColor", (t) => ({
      primary: t.primary,
      background: t.background,
      secondary: t.secondary,
      accent: t.accent,
    })),
    n(it, "initializeAccessibilityStates", () => {
      const t = ot.getWidgetState();
      Object.values(I.WidgetType).forEach((e) => {
        const n = t?.[e];
        n && it.processState(n, e);
      });
    });
  let rt = it;
  class ot {
    static getStorageKey() {
      try {
        const t = window.location.hostname.replace(/^www\./, "");
        return `${this.STORAGE_KEY}-${t}`;
      } catch {
        return this.STORAGE_KEY;
      }
    }
    static getWidgetState() {
      try {
        const t = localStorage.getItem(this.getStorageKey());
        return t ? JSON.parse(t) : {};
      } catch {
        return {};
      }
    }
    static clearWidgetState() {
      try {
        localStorage.removeItem(this.getStorageKey());
      } catch (t) {
        void 0;
      }
    }
    static saveWidgetStateByType(t, e, n) {
      try {
        const i = this.getWidgetState(),
          r = i[t] || {},
          o = { ...i, [t]: { ...r, ...e }, ...(n ? { language: n } : {}) };
        localStorage.setItem(this.getStorageKey(), JSON.stringify(o));
      } catch (i) {
        void 0;
      }
    }
    static getWidgetStateByType(t) {
      return this.getWidgetState()[t] || null;
    }
    static getDefaultState(t) {
      return {
        color: {
          monochrome: { status: !1, type: "monochrome" },
          brightness: {
            status: !1,
            step: 0,
            type: "brightness",
            totalSteps: 3,
          },
          contrast: { status: !1, step: 0, type: "contrast", totalSteps: 3 },
          saturation: {
            status: !1,
            step: 0,
            type: "saturation",
            totalSteps: 3,
          },
          smartContrast: {
            status: !1,
            step: 0,
            type: "smartContrast",
            totalSteps: 3,
          },
        },
        content: {
          biggerText: {
            status: !1,
            step: 0,
            type: "biggerText",
            totalSteps: 3,
          },
          lineHeight: {
            status: !1,
            step: 0,
            type: "lineHeight",
            totalSteps: 3,
          },
          textSpacing: {
            status: !1,
            step: 0,
            type: "textSpacing",
            totalSteps: 3,
          },
          cursorLarge: { status: !1, type: "cursorLarge" },
          hideImages: { status: !1, type: "hideImages" },
          stopAnimation: { status: !1, type: "stopAnimation" },
          tooltip: { status: !1, type: "tooltip" },
          fonts: { status: !1, step: 0, type: "fonts", totalSteps: 3 },
          textAlignment: {
            status: !1,
            step: 0,
            type: "textAlignment",
            totalSteps: 3,
          },
        },
        navigation: {
          speechReader: {
            status: !1,
            step: 0,
            type: "speechReader",
            totalSteps: 3,
          },
          readingGuide: { status: !1, type: "readingGuide" },
          readingMask: { status: !1, type: "readingMask" },
          highlightLinks: { status: !1, type: "highlightLinks" },
          readMode: { status: !1, type: "readMode" },
          muteSound: { status: !1, type: "muteSound" },
          highlightFocus: { status: !1, type: "highlightFocus" },
        },
        specialMode: {
          oldAgeMode: { status: !1, type: "oldAgeMode" },
          dyslexiaMode: { status: !1, type: "dyslexiaMode" },
          blindMode: { status: !1, type: "blindMode" },
          adhdMode: { status: !1, type: "adhdMode" },
          visionImpairedProfile: { status: !1, type: "visionImpairedProfile" },
          seizureSafeProfile: { status: !1, type: "seizureSafeProfile" },
        },
      }[t];
    }
    static onLanguageChange(t) {
      this.languageListeners.push(t);
    }
    static setLanguage(t) {
      const e = { ...this.getWidgetState(), language: t };
      localStorage.setItem(this.getStorageKey(), JSON.stringify(e)),
        this.languageListeners.forEach((e) => e(t));
    }
    static getLanguage() {
      try {
        const t = this.getWidgetState();
        return "string" == typeof t.language ? t.language : null;
      } catch {
        return null;
      }
    }
  }
  n(ot, "STORAGE_KEY", "efl-a11y-widget-state"), n(ot, "languageListeners", []);
  class lt {
    constructor() {
      n(this, "container", null),
        n(this, "firstFocusableElement", null),
        n(this, "lastFocusableElement", null),
        n(this, "previousActiveElement", null),
        n(
          this,
          "focusableSelectors",
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'
        ),
        n(this, "handleKeyDown", (t) => {
          "Tab" === t.key &&
            this.firstFocusableElement &&
            this.lastFocusableElement &&
            (t.shiftKey
              ? document.activeElement === this.firstFocusableElement &&
                (t.preventDefault(), this.lastFocusableElement.focus())
              : document.activeElement === this.lastFocusableElement &&
                (t.preventDefault(), this.firstFocusableElement.focus()));
        });
    }
    activate(t) {
      (this.container = t),
        (this.previousActiveElement = document.activeElement);
      const e = Array.from(t.querySelectorAll(this.focusableSelectors));
      0 !== e.length &&
        ((this.firstFocusableElement = e[0] || null),
        (this.lastFocusableElement = e[e.length - 1] || null),
        t.addEventListener("keydown", this.handleKeyDown),
        this.firstFocusableElement && this.firstFocusableElement.focus());
    }
    deactivate() {
      this.container &&
        this.container.removeEventListener("keydown", this.handleKeyDown),
        this.previousActiveElement &&
          "focus" in this.previousActiveElement &&
          this.previousActiveElement.focus(),
        (this.container = null),
        (this.firstFocusableElement = null),
        (this.lastFocusableElement = null),
        (this.previousActiveElement = null);
    }
  }
  const at = {
      en: {
        clearSelections: "Clear Selections",
        accessibilityMenu: "Accessibility Menu",
        specialMode: "Special Mode",
        colorItems: {
          monochrome: "Monochrome",
          brightness: "Brightness",
          contrast: "Contrast",
          saturation: "Saturation",
          smartContrast: "Contrast +",
          invertColor: "Invert Color",
          darkContrast: "Dark Contrast",
          lightContrast: "Light Contrast",
        },
        contentItems: {
          biggerText: "Bigger Text",
          lineHeight: "Line Height",
          textSpacing: "Text Spacing",
          cursorLarge: "Bigger Cursor",
          hideImages: "Hide Images",
          stopAnimation: "Stop Animations",
          tooltip: "Tooltip",
          fonts: "Fonts",
          dyslexia: "Dyslexia",
          readable: "Readable",
          bionic: "Bionic",
          textAlignment: "Text Alignment",
          left: "Left",
          center: "Center",
          right: "Right",
        },
        specialModeItems: {
          dyslexiaMode: "Dyslexia Profile",
          seizureSafeProfile: "Seizure Safe Profile",
          visionImpairedProfile: "Vision Impaired Profile",
          adhdMode: "ADHD Profile",
          cognitive: "Cognitive Accessibility Profile",
          blindMode: "Blind Profile",
          oldAgeMode: "Old Age Profile",
        },
        navigationItems: {
          speechReader: "Speech Reader",
          slow: "Low",
          medium: "Medium",
          fast: "Fast",
          readingGuide: "Reading Guide",
          readingMask: "Reading Mask",
          highlightLinks: "Highlight Links",
          readMode: "Read Mode",
          muteSound: "Mute Sound",
          highlightFocus: "Highlight Focus",
        },
        direction: {
          "bottom-right": "Bottom Right",
          "bottom-left": "Bottom Left",
          "top-right": "Top Right",
          "top-left": "Top Left",
        },
        sections: {
          contentSettings: "Content Settings",
          navigationSettings: "Navigation",
          colorSettings: "Color",
        },
        accessibility: {
          closeMenu: "Close accessibility menu",
          openMenu: "Open accessibility menu",
          closeMenuEsc: "Close accessibility menu (ESC)",
          openMenuShortcut: "Open accessibility menu (O key)",
          skipToMenu: "Skip to accessibility menu",
          dialogDescription:
            "This dialog contains accessibility settings. You can close it with ESC key and navigate with Tab.",
          logoDescription:
            "This accessibility widget is developed by EFL and makes websites more accessible for everyone.",
          logoAlt: "EFL Accessibility Widget - Powered by EFL",
          toggleSwitch: "Toggle Switch",
          active: "Active",
          inactive: "Inactive",
          activate: "activate",
          deactivate: "deactivate",
          level: "level",
          selectOption: "Select an option",
        },
      },
      tr: {
        clearSelections: "Seçimleri Temizle",
        accessibilityMenu: "Erişilebilirlik Menüsü",
        specialMode: "Özel Mod",
        colorItems: {
          monochrome: "Monokrom",
          brightness: "Parlaklık",
          contrast: "Kontrast",
          saturation: "Doygunluk",
          smartContrast: "Kontrast +",
          invertColor: "Renk Ters Çevir",
          darkContrast: "Koyu Kontrast",
          lightContrast: "Açık Kontrast",
        },
        contentItems: {
          biggerText: "Metin Boyutu",
          lineHeight: "Satır Aralığı",
          textSpacing: "Metin Aralığı",
          cursorLarge: "Büyük İmleç",
          hideImages: "Resimleri Gizle",
          stopAnimation: "Animasyonları Durdur",
          tooltip: "İpucu",
          fonts: "Fontlar",
          dyslexia: "Disleksi",
          readable: "Okunabilirlik",
          bionic: "Biyonik Yazı",
          textAlignment: "Metin Hizalama",
          left: "Sola Hizala",
          center: "Ortala",
          right: "Sağa Hizala",
        },
        navigationItems: {
          speechReader: "Konuşma Okuyucu",
          slow: "Yavaş",
          medium: "Normal",
          fast: "Hızlı",
          readingGuide: "Okuma Kılavuzu",
          readingMask: "Okuma Maskesi",
          highlightLinks: "Bağlantıları Vurgula",
          readMode: "Okuma Profili",
          muteSound: "Sesi Kapat",
          highlightFocus: "Odak Vurgusu",
        },
        specialModeItems: {
          dyslexiaMode: "Disleksi Profili",
          seizureSafeProfile: "Nöbet Güvenli Profili",
          visionImpairedProfile: "Kısıtlı Görme Profili",
          adhdMode: "Dikkat Eksikliği Profili",
          cognitive: "Kognitif Zorluklar Profili",
          blindMode: "Görme Engelli Profili",
          oldAgeMode: "Yaşlılık Profili",
        },
        direction: {
          "bottom-right": "Sağ Alt",
          "bottom-left": "Sol Alt",
          "top-right": "Sağ Üst",
          "top-left": "Sol Üst",
        },
        sections: {
          contentSettings: "İçerik Ayarları",
          navigationSettings: "Navigasyon",
          colorSettings: "Renk",
        },
        accessibility: {
          closeMenu: "Erişilebilirlik menüsünü kapat",
          openMenu: "Erişilebilirlik menüsünü aç",
          closeMenuEsc: "Erişilebilirlik menüsünü kapat (ESC)",
          openMenuShortcut: "Erişilebilirlik menüsünü aç (O tuşu)",
          skipToMenu: "Erişilebilirlik menüsüne git",
          dialogDescription:
            "Bu dialog erişilebilirlik ayarlarını içerir. ESC tuşu ile kapatabilir, Tab ile gezinebilirsiniz.",
          logoDescription:
            "Bu erişilebilirlik widget'ı EFL tarafından geliştirilmiştir ve web sitelerini herkes için daha erişilebilir hale getirir.",
          logoAlt: "EFL Erişilebilirlik Widget'ı - Powered by EFL",
          toggleSwitch: "Anahtar",
          active: "Aktif",
          inactive: "Pasif",
          activate: "aktive et",
          deactivate: "deaktive et",
          level: "seviye",
          selectOption: "Seçenek seç",
        },
      },
    },
    st = (t = "tr") => {
      const e = ot.getWidgetState(),
        n = e?.language || t,
        [i, r] = a.useState(n);
      a.useEffect(() => {
        const t = () => {
          const t = ot.getWidgetState();
          t?.language && t.language !== i && r(t.language);
        };
        return (
          window.addEventListener("storage", t),
          window.addEventListener("efl-storage-change", t),
          () => {
            window.removeEventListener("storage", t),
              window.removeEventListener("efl-storage-change", t);
          }
        );
      }, [i]);
      const o = a.useCallback(
          (t) => {
            const e = t.split(".");
            let n = at[i];
            for (const i of e) {
              if (void 0 === n[i]) return t;
              n = n[i];
            }
            return "string" == typeof n ? n : t;
          },
          [i]
        ),
        l = a.useCallback(
          (t) => {
            t !== i &&
              (r(t),
              ot.setLanguage(t),
              tt(t),
              window.dispatchEvent(new Event("efl-storage-change")));
          },
          [i]
        );
      return { t: o, lang: i, changeLanguage: l };
    },
    ut = async (t, e = {}) => {
      if (
        e.required &&
        (null == t || "" === t || (Array.isArray(t) && 0 === t.length))
      )
        return {
          type: "required",
          message:
            "string" == typeof e.required ? e.required : "Bu alan zorunludur",
        };
      if ("string" == typeof t) {
        if (e.minLength) {
          const n =
              "number" == typeof e.minLength ? e.minLength : e.minLength.value,
            i =
              "number" == typeof e.minLength
                ? `En az ${n} karakter olmalıdır`
                : e.minLength.message;
          if (t.length < n) return { type: "minLength", message: i };
        }
        if (e.maxLength) {
          const n =
              "number" == typeof e.maxLength ? e.maxLength : e.maxLength.value,
            i =
              "number" == typeof e.maxLength
                ? `En fazla ${n} karakter olmalıdır`
                : e.maxLength.message;
          if (t.length > n) return { type: "maxLength", message: i };
        }
        if (e.pattern) {
          const n = e.pattern instanceof RegExp ? e.pattern : e.pattern.value,
            i =
              e.pattern instanceof RegExp
                ? "Geçersiz format"
                : e.pattern.message;
          if (!n.test(t)) return { type: "pattern", message: i };
        }
      }
      if ("number" == typeof t) {
        if (void 0 !== e.min) {
          const n = "number" == typeof e.min ? e.min : e.min.value,
            i =
              "number" == typeof e.min ? `En az ${n} olmalıdır` : e.min.message;
          if (n > t) return { type: "min", message: i };
        }
        if (void 0 !== e.max) {
          const n = "number" == typeof e.max ? e.max : e.max.value,
            i =
              "number" == typeof e.max
                ? `En fazla ${n} olmalıdır`
                : e.max.message;
          if (t > n) return { type: "max", message: i };
        }
      }
      if (e.validate)
        try {
          const n = await e.validate(t);
          if (!0 !== n)
            return {
              type: "validate",
              message: "string" == typeof n ? n : "Geçersiz değer",
            };
        } catch {
          return { type: "validate", message: "Validation hatası" };
        }
      return null;
    };
  function ct(t, e = {}) {
    let n;
    n = t && "defaultValues" in t ? t.defaultValues : t || {};
    const [i, r] = a.useState(n),
      [o, l] = a.useState({}),
      [s, u] = a.useState({}),
      [c, f] = a.useState(!1),
      d = a.useMemo(() => Object.keys(n).some((t) => i[t] !== n[t]), [i, n]),
      h = a.useMemo(() => 0 === Object.keys(o).length, [o]),
      p = a.useMemo(
        () => ({
          values: i,
          errors: o,
          touched: s,
          isDirty: d,
          isValid: h,
          isSubmitting: c,
        }),
        [i, o, s, d, h, c]
      ),
      g = a.useCallback(
        async (t, n) => {
          const i = e[t],
            r = await ut(n, i);
          return (
            l((e) => {
              const n = { ...e };
              return r ? (n[t] = r) : delete n[t], n;
            }),
            !r
          );
        },
        [e]
      ),
      m = a.useCallback(
        (t, n) => (
          n && (e[t] = n),
          {
            name: t + "",
            value: i[t] || "",
            onChange: (e) => {
              const n =
                "checkbox" === e.target.type
                  ? e.target.checked
                  : "number" === e.target.type
                  ? +e.target.value
                  : e.target.value;
              r((e) => ({ ...e, [t]: n })), s[t] && g(t, n);
            },
            onBlur: (e) => {
              u((e) => ({ ...e, [t]: !0 }));
              const n =
                "checkbox" === e.target.type
                  ? e.target.checked
                  : "number" === e.target.type
                  ? +e.target.value
                  : e.target.value;
              g(t, n);
            },
          }
        ),
        [i, e, s, g]
      ),
      v = a.useCallback(
        (t) => async (n) => {
          n?.preventDefault(), f(!0);
          try {
            const n = Object.keys(i).map(async (t) => {
                const n = t,
                  r = e[n];
                return { field: n, error: await ut(i[n], r) };
              }),
              r = await Promise.all(n),
              o = {};
            r.forEach(({ field: t, error: e }) => {
              e && (o[t] = e);
            }),
              l(o),
              0 === Object.keys(o).length && (await t(i));
          } catch (r) {
            void 0;
          } finally {
            f(!1);
          }
        },
        [i, e]
      ),
      b = a.useCallback((t) => (t ? i[t] : i), [i]),
      w = a.useCallback(
        (t, e, n = {}) => {
          r((n) => ({ ...n, [t]: e })),
            n.shouldTouch && u((e) => ({ ...e, [t]: !0 })),
            n.shouldValidate && g(t, e);
        },
        [g]
      ),
      y = a.useCallback((t) => (t ? i[t] : i), [i]),
      k = a.useCallback(
        (t) => {
          const e = t ? { ...n, ...t } : n;
          r(e), l({}), u({}), f(!1);
        },
        [n]
      ),
      x = a.useCallback(
        async (t) => {
          if (t) return await g(t, i[t]);
          {
            const t = Object.keys(i).map(async (t) => {
              const e = t;
              return await g(e, i[e]);
            });
            return (await Promise.all(t)).every((t) => !0 === t);
          }
        },
        [i, g]
      ),
      S = a.useCallback((t) => {
        l(
          t
            ? (e) => {
                const n = { ...e };
                return delete n[t], n;
              }
            : {}
        );
      }, []),
      M = a.useCallback((t, e) => {
        l((n) => ({ ...n, [t]: e }));
      }, []),
      E = a.useMemo(
        () => ({ watch: b, setValue: w, getValues: y, formState: p }),
        [b, w, y, p]
      );
    return {
      register: m,
      handleSubmit: v,
      watch: b,
      setValue: w,
      getValues: y,
      reset: k,
      trigger: x,
      clearErrors: S,
      setError: M,
      formState: p,
      control: E,
    };
  }
  const ft = a.forwardRef((t, e) => {
    const { t: n } = st(),
      {
        style: i,
        value: r,
        onChange: o,
        color: l = "bg-brand-600",
        "aria-label": s,
        "aria-labelledby": u,
        "aria-describedby": c,
        ...f
      } = t,
      [d, h] = a.useState(r ?? !1);
    a.useEffect(() => {
      void 0 !== r && h(r);
    }, [r]);
    const p = () => {
        const t = !(void 0 !== r ? r : d);
        void 0 !== r ? o?.(t) : (h(t), o?.(t));
      },
      g = void 0 !== r ? r : d;
    return E.jsx("div", {
      className: "flex flex-col items-start gap-1",
      children: E.jsx("div", {
        className: "flex items-center gap-3",
        children: E.jsx("button", {
          type: "button",
          role: "switch",
          "aria-checked": g,
          onClick: (t) => {
            t.stopPropagation(), p();
          },
          onKeyDown: (t) => {
            ("Enter" !== t.key && " " !== t.key) || (t.preventDefault(), p());
          },
          ref: e,
          style: { backgroundColor: g ? l : "#E2E8F0", ...i },
          className:
            "relative inline-flex flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 h-5 w-10 hover:border-gray-400 cursor-pointer ",
          ...f,
          "aria-label": s || n("accessibility.toggleSwitch"),
          "aria-labelledby": u,
          "aria-describedby": c,
          children: E.jsx("span", {
            "aria-hidden": "true",
            className: `pointer-events-none inline-block transform rounded-full bg-white shadow transition duration-200 ease-in-out\n                h-4 w-4\n                ${
              g ? "translate-x-5" : "translate-x-0"
            }\n              `,
          }),
        }),
      }),
    });
  });
  function dt(t) {
    var e,
      n,
      i = "";
    if ("string" == typeof t || "number" == typeof t) i += t;
    else if ("object" == typeof t)
      if (Array.isArray(t)) {
        var r = t.length;
        for (e = 0; r > e; e++)
          t[e] && (n = dt(t[e])) && (i && (i += " "), (i += n));
      } else for (n in t) t[n] && (i && (i += " "), (i += n));
    return i;
  }
  function ht() {
    for (var t, e, n = 0, i = "", r = arguments.length; r > n; n++)
      (t = arguments[n]) && (e = dt(t)) && (i && (i += " "), (i += e));
    return i;
  }
  ft.displayName = "Switch";
  const pt = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
    gt = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
    mt = Object.freeze({ ...pt, ...gt }),
    vt = Object.freeze({ ...mt, body: "", hidden: !1 });
  function bt(t, e) {
    const n = (function (t, e) {
      const n = {};
      !t.hFlip != !e.hFlip && (n.hFlip = !0),
        !t.vFlip != !e.vFlip && (n.vFlip = !0);
      const i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
      return i && (n.rotate = i), n;
    })(t, e);
    for (const i in vt)
      i in gt
        ? i in t && !(i in n) && (n[i] = gt[i])
        : i in e
        ? (n[i] = e[i])
        : i in t && (n[i] = t[i]);
    return n;
  }
  function wt(t, e, n) {
    const i = t.icons,
      r = t.aliases || Object.create(null);
    let o = {};
    function l(t) {
      o = bt(i[t] || r[t], o);
    }
    return l(e), n.forEach(l), bt(t, o);
  }
  function yt(t, e) {
    const n = [];
    if ("object" != typeof t || "object" != typeof t.icons) return n;
    t.not_found instanceof Array &&
      t.not_found.forEach((t) => {
        e(t, null), n.push(t);
      });
    const i = (function (t) {
      const e = t.icons,
        n = t.aliases || Object.create(null),
        i = Object.create(null);
      return (
        Object.keys(e)
          .concat(Object.keys(n))
          .forEach(function t(r) {
            if (e[r]) return (i[r] = []);
            if (!(r in i)) {
              i[r] = null;
              const e = n[r] && n[r].parent,
                o = e && t(e);
              o && (i[r] = [e].concat(o));
            }
            return i[r];
          }),
        i
      );
    })(t);
    for (const r in i) {
      const o = i[r];
      o && (e(r, wt(t, r, o)), n.push(r));
    }
    return n;
  }
  const kt = { provider: "", aliases: {}, not_found: {}, ...pt };
  function xt(t, e) {
    for (const n in e) if (n in t && typeof t[n] != typeof e[n]) return !1;
    return !0;
  }
  function St(t) {
    if ("object" != typeof t || null === t) return null;
    const e = t;
    if ("string" != typeof e.prefix || !t.icons || "object" != typeof t.icons)
      return null;
    if (!xt(t, kt)) return null;
    const n = e.icons;
    for (const r in n) {
      const t = n[r];
      if (!r || "string" != typeof t.body || !xt(t, vt)) return null;
    }
    const i = e.aliases || Object.create(null);
    for (const r in i) {
      const t = i[r],
        e = t.parent;
      if (!r || "string" != typeof e || (!n[e] && !i[e]) || !xt(t, vt))
        return null;
    }
    return e;
  }
  const Mt = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    Et = (t, e, n, i = "") => {
      const r = t.split(":");
      if ("@" === t.slice(0, 1)) {
        if (2 > r.length || r.length > 3) return null;
        i = r.shift().slice(1);
      }
      if (r.length > 3 || !r.length) return null;
      if (r.length > 1) {
        const t = r.pop(),
          n = r.pop(),
          o = { provider: r.length > 0 ? r[0] : i, prefix: n, name: t };
        return e && !Ct(o) ? null : o;
      }
      const o = r[0],
        l = o.split("-");
      if (l.length > 1) {
        const t = { provider: i, prefix: l.shift(), name: l.join("-") };
        return e && !Ct(t) ? null : t;
      }
      if (n && "" === i) {
        const t = { provider: i, prefix: "", name: o };
        return e && !Ct(t, n) ? null : t;
      }
      return null;
    },
    Ct = (t, e) => !!t && !(!((e && "" === t.prefix) || t.prefix) || !t.name),
    At = Object.create(null);
  function It(t, e) {
    const n = At[t] || (At[t] = Object.create(null));
    return (
      n[e] ||
      (n[e] = (function (t, e) {
        return {
          provider: t,
          prefix: e,
          icons: Object.create(null),
          missing: new Set(),
        };
      })(t, e))
    );
  }
  function Tt(t, e) {
    return St(e)
      ? yt(e, (e, n) => {
          n ? (t.icons[e] = n) : t.missing.add(e);
        })
      : [];
  }
  let Lt = !1;
  function zt(t) {
    return "boolean" == typeof t && (Lt = t), Lt;
  }
  function Ot(t) {
    const e = "string" == typeof t ? Et(t, !0, Lt) : t;
    if (e) {
      const t = It(e.provider, e.prefix),
        n = e.name;
      return t.icons[n] || (t.missing.has(n) ? null : void 0);
    }
  }
  const jt = Object.freeze({ width: null, height: null }),
    Ft = Object.freeze({ ...jt, ...gt }),
    Pt = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    Rt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function _t(t, e, n) {
    if (1 === e) return t;
    if (((n = n || 100), "number" == typeof t)) return Math.ceil(t * e * n) / n;
    if ("string" != typeof t) return t;
    const i = t.split(Pt);
    if (null === i || !i.length) return t;
    const r = [];
    let o = i.shift(),
      l = Rt.test(o);
    for (;;) {
      if (l) {
        const t = parseFloat(o);
        isNaN(t) ? r.push(o) : r.push(Math.ceil(t * e * n) / n);
      } else r.push(o);
      if (((o = i.shift()), void 0 === o)) return r.join("");
      l = !l;
    }
  }
  const Dt = /\sid="(\S+)"/g,
    Nt =
      "IconifyId" +
      Date.now().toString(16) +
      ((16777216 * Math.random()) | 0).toString(16);
  let $t = 0;
  function Ht(t, e = Nt) {
    const n = [];
    let i;
    for (; (i = Dt.exec(t)); ) n.push(i[1]);
    if (!n.length) return t;
    const r = "suffix" + ((16777216 * Math.random()) | Date.now()).toString(16);
    return (
      n.forEach((n) => {
        const i = "function" == typeof e ? e(n) : e + "" + $t++,
          o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        t = t.replace(
          RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"),
          "$1" + i + r + "$3"
        );
      }),
      (t = t.replace(RegExp(r, "g"), ""))
    );
  }
  const Vt = Object.create(null);
  function Bt(t) {
    return Vt[t] || Vt[""];
  }
  function Gt(t) {
    let e;
    if ("string" == typeof t.resources) e = [t.resources];
    else if (((e = t.resources), !(e instanceof Array && e.length)))
      return null;
    return {
      resources: e,
      path: t.path || "/",
      maxURL: t.maxURL || 500,
      rotate: t.rotate || 750,
      timeout: t.timeout || 5e3,
      random: !0 === t.random,
      index: t.index || 0,
      dataAfterTimeout: !1 !== t.dataAfterTimeout,
    };
  }
  const Kt = Object.create(null),
    Ut = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    Wt = [];
  for (; Ut.length > 0; )
    1 === Ut.length || Math.random() > 0.5
      ? Wt.push(Ut.shift())
      : Wt.push(Ut.pop());
  function Yt(t, e) {
    const n = Gt(e);
    return null !== n && ((Kt[t] = n), !0);
  }
  function qt(t) {
    return Kt[t];
  }
  Kt[""] = Gt({ resources: ["https://api.iconify.design"].concat(Wt) });
  let Xt = (() => {
    let t;
    try {
      if (((t = fetch), "function" == typeof t)) return t;
    } catch (e) {}
  })();
  const Zt = {
    prepare: (t, e, n) => {
      const i = [],
        r = (function (t, e) {
          const n = qt(t);
          if (!n) return 0;
          let i;
          if (n.maxURL) {
            let t = 0;
            n.resources.forEach((e) => {
              t = Math.max(t, e.length);
            });
            const r = e + ".json?icons=";
            i = n.maxURL - t - n.path.length - r.length;
          } else i = 0;
          return i;
        })(t, e),
        o = "icons";
      let l = { type: o, provider: t, prefix: e, icons: [] },
        a = 0;
      return (
        n.forEach((n, s) => {
          (a += n.length + 1),
            a >= r &&
              s > 0 &&
              (i.push(l),
              (l = { type: o, provider: t, prefix: e, icons: [] }),
              (a = n.length)),
            l.icons.push(n);
        }),
        i.push(l),
        i
      );
    },
    send: (t, e, n) => {
      if (!Xt) return n("abort", 424), void 0;
      let i = (function (t) {
        if ("string" == typeof t) {
          const e = qt(t);
          if (e) return e.path;
        }
        return "/";
      })(e.provider);
      switch (e.type) {
        case "icons": {
          const t = e.prefix,
            n = e.icons.join(",");
          i += t + ".json?" + new URLSearchParams({ icons: n }).toString();
          break;
        }
        case "custom": {
          const t = e.uri;
          i += "/" === t.slice(0, 1) ? t.slice(1) : t;
          break;
        }
        default:
          return n("abort", 400), void 0;
      }
      let r = 503;
      Xt(t + i)
        .then((t) => {
          const e = t.status;
          return 200 !== e
            ? (setTimeout(() => {
                n(
                  (function (t) {
                    return 404 === t;
                  })(e)
                    ? "abort"
                    : "next",
                  e
                );
              }),
              void 0)
            : ((r = 501), t.json());
        })
        .then((t) => {
          if ("object" != typeof t || null === t)
            return (
              setTimeout(() => {
                404 === t ? n("abort", t) : n("next", r);
              }),
              void 0
            );
          setTimeout(() => {
            n("success", t);
          });
        })
        .catch(() => {
          n("next", r);
        });
    },
  };
  function Jt(t, e) {
    t.forEach((t) => {
      const n = t.loaderCallbacks;
      n && (t.loaderCallbacks = n.filter((t) => t.id !== e));
    });
  }
  let Qt = 0;
  var te = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1,
  };
  function ee(t) {
    const e = { ...te, ...t };
    let n = [];
    function i() {
      n = n.filter((t) => "pending" === t().status);
    }
    return {
      query: function (t, r, o) {
        const l = (function (t, e, n, i) {
          const r = t.resources.length,
            o = t.random ? Math.floor(Math.random() * r) : t.index;
          let l;
          if (t.random) {
            let e = t.resources.slice(0);
            for (l = []; e.length > 1; ) {
              const t = Math.floor(Math.random() * e.length);
              l.push(e[t]), (e = e.slice(0, t).concat(e.slice(t + 1)));
            }
            l = l.concat(e);
          } else l = t.resources.slice(o).concat(t.resources.slice(0, o));
          const a = Date.now();
          let s,
            u = "pending",
            c = 0,
            f = null,
            d = [],
            h = [];
          function p() {
            f && (clearTimeout(f), (f = null));
          }
          function g() {
            "pending" === u && (u = "aborted"),
              p(),
              d.forEach((t) => {
                "pending" === t.status && (t.status = "aborted");
              }),
              (d = []);
          }
          function m(t, e) {
            e && (h = []), "function" == typeof t && h.push(t);
          }
          function v() {
            (u = "failed"),
              h.forEach((t) => {
                t(void 0, s);
              });
          }
          function b() {
            d.forEach((t) => {
              "pending" === t.status && (t.status = "aborted");
            }),
              (d = []);
          }
          return (
            !0,
            h.push(i),
            setTimeout(function i() {
              if ("pending" !== u) return;
              p();
              const r = l.shift();
              if (void 0 === r)
                return d.length
                  ? ((f = setTimeout(() => {
                      p(), "pending" === u && (b(), v());
                    }, t.timeout)),
                    void 0)
                  : (v(), void 0);
              const o = {
                status: "pending",
                resource: r,
                callback: (e, n) => {
                  !(function (e, n, r) {
                    const o = "success" !== n;
                    switch (((d = d.filter((t) => t !== e)), u)) {
                      case "pending":
                        break;
                      case "failed":
                        if (o || !t.dataAfterTimeout) return;
                        break;
                      default:
                        return;
                    }
                    if ("abort" === n) return (s = r), v(), void 0;
                    if (o)
                      return (
                        (s = r), d.length || (l.length ? i() : v()), void 0
                      );
                    if ((p(), b(), !t.random)) {
                      const n = t.resources.indexOf(e.resource);
                      -1 !== n && n !== t.index && (t.index = n);
                    }
                    (u = "completed"),
                      h.forEach((t) => {
                        t(r);
                      });
                  })(o, e, n);
                },
              };
              d.push(o),
                c++,
                (f = setTimeout(i, t.rotate)),
                n(r, e, o.callback);
            }),
            function () {
              return {
                startTime: a,
                payload: e,
                status: u,
                queriesSent: c,
                queriesPending: d.length,
                subscribe: m,
                abort: g,
              };
            }
          );
        })(e, t, r, (t, e) => {
          i(), o && o(t, e);
        });
        return n.push(l), l;
      },
      find: function (t) {
        return n.find((e) => t(e)) || null;
      },
      setIndex: (t) => {
        e.index = t;
      },
      getIndex: () => e.index,
      cleanup: i,
    };
  }
  function ne() {}
  const ie = Object.create(null);
  function re() {}
  function oe(t, e, n) {
    function i() {
      const n = t.pendingIcons;
      e.forEach((e) => {
        n && n.delete(e), t.icons[e] || t.missing.add(e);
      });
    }
    if (n && "object" == typeof n)
      try {
        if (!Tt(t, n).length) return i(), void 0;
      } catch (r) {
        void 0;
      }
    i(),
      (function (t) {
        t.iconsLoaderFlag ||
          ((t.iconsLoaderFlag = !0),
          setTimeout(() => {
            (t.iconsLoaderFlag = !1),
              (function (t) {
                t.pendingCallbacksFlag ||
                  ((t.pendingCallbacksFlag = !0),
                  setTimeout(() => {
                    t.pendingCallbacksFlag = !1;
                    const e = t.loaderCallbacks
                      ? t.loaderCallbacks.slice(0)
                      : [];
                    if (!e.length) return;
                    let n = !1;
                    const i = t.provider,
                      r = t.prefix;
                    e.forEach((e) => {
                      const o = e.icons,
                        l = o.pending.length;
                      (o.pending = o.pending.filter((e) => {
                        if (e.prefix !== r) return !0;
                        const l = e.name;
                        if (t.icons[l])
                          o.loaded.push({ provider: i, prefix: r, name: l });
                        else {
                          if (!t.missing.has(l)) return (n = !0), !0;
                          o.missing.push({ provider: i, prefix: r, name: l });
                        }
                        return !1;
                      })),
                        o.pending.length !== l &&
                          (n || Jt([t], e.id),
                          e.callback(
                            o.loaded.slice(0),
                            o.missing.slice(0),
                            o.pending.slice(0),
                            e.abort
                          ));
                    });
                  }));
              })(t);
          }));
      })(t);
  }
  function le(t, e) {
    t instanceof Promise
      ? t
          .then((t) => {
            e(t);
          })
          .catch(() => {
            e(null);
          })
      : e(t);
  }
  const ae = /[\s,]+/;
  function se(t, e) {
    e.split(ae).forEach((e) => {
      switch (e.trim()) {
        case "horizontal":
          t.hFlip = !0;
          break;
        case "vertical":
          t.vFlip = !0;
      }
    });
  }
  function ue(t, e = 0) {
    const n = t.replace(/^-?[0-9.]*/, "");
    function i(t) {
      for (; 0 > t; ) t += 4;
      return t % 4;
    }
    if ("" === n) {
      const e = parseInt(t);
      return isNaN(e) ? 0 : i(e);
    }
    if (n !== t) {
      let e = 0;
      switch (n) {
        case "%":
          e = 25;
          break;
        case "deg":
          e = 90;
      }
      if (e) {
        let r = parseFloat(t.slice(0, t.length - n.length));
        return isNaN(r) ? 0 : ((r /= e), r % 1 == 0 ? i(r) : 0);
      }
    }
    return e;
  }
  let ce;
  function fe(t) {
    return (
      void 0 === ce &&
        !(function () {
          try {
            ce = window.trustedTypes.createPolicy("iconify", {
              createHTML: (t) => t,
            });
          } catch (t) {
            ce = null;
          }
        })(),
      ce ? ce.createHTML(t) : t
    );
  }
  const de = { ...Ft, inline: !1 },
    he = {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": !0,
      role: "img",
    },
    pe = { display: "inline-block" },
    ge = { backgroundColor: "currentColor" },
    me = { backgroundColor: "transparent" },
    ve = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
    be = { WebkitMask: ge, mask: ge, background: me };
  for (const n in be) {
    const t = be[n];
    for (const e in ve) t[n + e] = ve[e];
  }
  const we = { ...de, inline: !0 };
  function ye(t) {
    return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
  }
  var ke;
  if (
    (zt(!0),
    (ke = Zt),
    (Vt[""] = ke),
    "undefined" != typeof document && "undefined" != typeof window)
  ) {
    const t = window;
    if (void 0 !== t.IconifyPreload) {
      const e = t.IconifyPreload;
      "object" == typeof e &&
        null !== e &&
        (e instanceof Array ? e : [e]).forEach((t) => {
          try {
            "object" != typeof t ||
              null === t ||
              t instanceof Array ||
              "object" != typeof t.icons ||
              "string" != typeof t.prefix ||
              !(function (t, e) {
                if ("object" != typeof t) return !1;
                if (
                  ("string" != typeof e && (e = t.provider || ""),
                  Lt && !e && !t.prefix)
                ) {
                  let e = !1;
                  return (
                    St(t) &&
                      ((t.prefix = ""),
                      yt(t, (t, n) => {
                        (function (t, e) {
                          const n = Et(t, !0, Lt);
                          if (!n) return !1;
                          const i = It(n.provider, n.prefix);
                          return e
                            ? (function (t, e, n) {
                                try {
                                  if ("string" == typeof n.body)
                                    return (t.icons[e] = { ...n }), !0;
                                } catch (i) {}
                                return !1;
                              })(i, n.name, e)
                            : (i.missing.add(n.name), !0);
                        })(t, n) && (e = !0);
                      })),
                    e
                  );
                }
                const n = t.prefix;
                return !!Ct({ prefix: n, name: "a" }) && !!Tt(It(e, n), t);
              })(t),
              0;
          } catch (e) {
            void 0;
          }
        });
    }
    if (void 0 !== t.IconifyProviders) {
      const e = t.IconifyProviders;
      if ("object" == typeof e && null !== e)
        for (let t in e)
          try {
            const n = e[t];
            if ("object" != typeof n || !n || void 0 === n.resources) continue;
            Yt(t, n);
          } catch (qe) {
            void 0;
          }
    }
  }
  function xe(t) {
    const [e, n] = a.useState(!!t.ssr),
      [i, r] = a.useState({}),
      [o, l] = a.useState(
        (function (e) {
          if (e) {
            const e = t.icon;
            if ("object" == typeof e) return { name: "", data: e };
            const n = Ot(e);
            if (n) return { name: e, data: n };
          }
          return { name: "" };
        })(!!t.ssr)
      );
    function s() {
      const t = i.callback;
      t && (t(), r({}));
    }
    function u(t) {
      if (JSON.stringify(o) !== JSON.stringify(t)) return s(), l(t), !0;
    }
    function c() {
      var e;
      const n = t.icon;
      if ("object" == typeof n) return u({ name: "", data: n }), void 0;
      const i = Ot(n);
      if (u({ name: n, data: i }))
        if (void 0 === i) {
          const t = ((t, e) => {
            const n = (function (t) {
              const e = { loaded: [], missing: [], pending: [] },
                n = Object.create(null);
              t.sort((t, e) =>
                t.provider !== e.provider
                  ? t.provider.localeCompare(e.provider)
                  : t.prefix !== e.prefix
                  ? t.prefix.localeCompare(e.prefix)
                  : t.name.localeCompare(e.name)
              );
              let i = { provider: "", prefix: "", name: "" };
              return (
                t.forEach((t) => {
                  if (
                    i.name === t.name &&
                    i.prefix === t.prefix &&
                    i.provider === t.provider
                  )
                    return;
                  i = t;
                  const r = t.provider,
                    o = t.prefix,
                    l = t.name,
                    a = n[r] || (n[r] = Object.create(null)),
                    s = a[o] || (a[o] = It(r, o));
                  let u;
                  u =
                    l in s.icons
                      ? e.loaded
                      : "" === o || s.missing.has(l)
                      ? e.missing
                      : e.pending;
                  const c = { provider: r, prefix: o, name: l };
                  u.push(c);
                }),
                e
              );
            })(
              (function (t, e = !0, n = !1) {
                const i = [];
                return (
                  t.forEach((t) => {
                    const r = "string" == typeof t ? Et(t, e, n) : t;
                    r && i.push(r);
                  }),
                  i
                );
              })(t, !0, zt())
            );
            if (!n.pending.length) {
              let t = !0;
              return (
                e &&
                  setTimeout(() => {
                    t && e(n.loaded, n.missing, n.pending, re);
                  }),
                () => {
                  t = !1;
                }
              );
            }
            const i = Object.create(null),
              r = [];
            let o, l;
            return (
              n.pending.forEach((t) => {
                const { provider: e, prefix: n } = t;
                if (n === l && e === o) return;
                (o = e), (l = n), r.push(It(e, n));
                const a = i[e] || (i[e] = Object.create(null));
                a[n] || (a[n] = []);
              }),
              n.pending.forEach((t) => {
                const { provider: e, prefix: n, name: r } = t,
                  o = It(e, n),
                  l = o.pendingIcons || (o.pendingIcons = new Set());
                l.has(r) || (l.add(r), i[e][n].push(r));
              }),
              r.forEach((t) => {
                const e = i[t.provider][t.prefix];
                e.length &&
                  (function (t, e) {
                    t.iconsToLoad
                      ? (t.iconsToLoad = t.iconsToLoad.concat(e).sort())
                      : (t.iconsToLoad = e),
                      t.iconsQueueFlag ||
                        ((t.iconsQueueFlag = !0),
                        setTimeout(() => {
                          t.iconsQueueFlag = !1;
                          const { provider: e, prefix: n } = t,
                            i = t.iconsToLoad;
                          if ((delete t.iconsToLoad, !i || !i.length)) return;
                          const r = t.loadIcon;
                          if (t.loadIcons && (i.length > 1 || !r))
                            return (
                              le(t.loadIcons(i, n, e), (e) => {
                                oe(t, i, e);
                              }),
                              void 0
                            );
                          if (r)
                            return (
                              i.forEach((i) => {
                                le(r(i, n, e), (e) => {
                                  oe(
                                    t,
                                    [i],
                                    e ? { prefix: n, icons: { [i]: e } } : null
                                  );
                                });
                              }),
                              void 0
                            );
                          const { valid: o, invalid: l } = (function (t) {
                            const e = [],
                              n = [];
                            return (
                              t.forEach((t) => {
                                (t.match(Mt) ? e : n).push(t);
                              }),
                              { valid: e, invalid: n }
                            );
                          })(i);
                          if ((l.length && oe(t, l, null), !o.length)) return;
                          const a = n.match(Mt) ? Bt(e) : null;
                          if (!a) return oe(t, o, null), void 0;
                          a.prepare(e, n, o).forEach((n) => {
                            !(function (t, e, n) {
                              let i, r;
                              if ("string" == typeof t) {
                                const e = Bt(t);
                                if (!e) return n(void 0), ne;
                                r = e.send;
                                const o = (function (t) {
                                  if (!ie[t]) {
                                    const e = qt(t);
                                    if (!e) return;
                                    const n = { config: e, redundancy: ee(e) };
                                    ie[t] = n;
                                  }
                                  return ie[t];
                                })(t);
                                o && (i = o.redundancy);
                              } else {
                                const e = Gt(t);
                                if (e) {
                                  i = ee(e);
                                  const n = Bt(
                                    t.resources ? t.resources[0] : ""
                                  );
                                  n && (r = n.send);
                                }
                              }
                              return i && r
                                ? i.query(e, r, n)().abort
                                : (n(void 0), ne);
                            })(e, n, (e) => {
                              oe(t, n.icons, e);
                            });
                          });
                        }));
                  })(t, e);
              }),
              e
                ? (function (t, e, n) {
                    const i = Qt++,
                      r = Jt.bind(null, n, i);
                    if (!e.pending.length) return r;
                    const o = { id: i, icons: e, callback: t, abort: r };
                    return (
                      n.forEach((t) => {
                        (t.loaderCallbacks || (t.loaderCallbacks = [])).push(o);
                      }),
                      r
                    );
                  })(e, n, r)
                : re
            );
          })([n], c);
          r({ callback: t });
        } else
          i &&
            (null === (e = t.onLoad) || void 0 === e ? void 0 : e.call(t, n));
    }
    a.useEffect(() => (n(!0), s), []),
      a.useEffect(() => {
        e && c();
      }, [t.icon, e]);
    const { name: f, data: d } = o;
    return d
      ? ((t, e, n) => {
          const i = e.inline ? we : de,
            r = (function (t, e) {
              const n = { ...t };
              for (const i in e) {
                const t = e[i],
                  r = typeof t;
                i in jt
                  ? (null === t || (t && ("string" === r || "number" === r))) &&
                    (n[i] = t)
                  : r === typeof n[i] && (n[i] = "rotate" === i ? t % 4 : t);
              }
              return n;
            })(i, e),
            o = e.mode || "svg",
            l = {},
            s = e.style || {},
            u = { ...("svg" === o ? he : {}) };
          if (n) {
            const t = Et(n, !1, !0);
            if (t) {
              const e = ["iconify"],
                n = ["provider", "prefix"];
              for (const i of n) t[i] && e.push("iconify--" + t[i]);
              u.className = e.join(" ");
            }
          }
          for (let a in e) {
            const t = e[a];
            if (void 0 !== t)
              switch (a) {
                case "icon":
                case "style":
                case "children":
                case "onLoad":
                case "mode":
                case "ssr":
                  break;
                case "_ref":
                  u.ref = t;
                  break;
                case "className":
                  u[a] = (u[a] ? u[a] + " " : "") + t;
                  break;
                case "inline":
                case "hFlip":
                case "vFlip":
                  r[a] = !0 === t || "true" === t || 1 === t;
                  break;
                case "flip":
                  "string" == typeof t && se(r, t);
                  break;
                case "color":
                  l.color = t;
                  break;
                case "rotate":
                  "string" == typeof t
                    ? (r[a] = ue(t))
                    : "number" == typeof t && (r[a] = t);
                  break;
                case "ariaHidden":
                case "aria-hidden":
                  !0 !== t && "true" !== t && delete u["aria-hidden"];
                  break;
                default:
                  void 0 === i[a] && (u[a] = t);
              }
          }
          const c = (function (t, e) {
              const n = { ...mt, ...t },
                i = { ...Ft, ...e },
                r = {
                  left: n.left,
                  top: n.top,
                  width: n.width,
                  height: n.height,
                };
              let o = n.body;
              [n, i].forEach((t) => {
                const e = [],
                  n = t.hFlip,
                  i = t.vFlip;
                let l,
                  a = t.rotate;
                switch (
                  (n
                    ? i
                      ? (a += 2)
                      : (e.push(
                          "translate(" +
                            (r.width + r.left) +
                            " " +
                            (0 - r.top) +
                            ")"
                        ),
                        e.push("scale(-1 1)"),
                        (r.top = r.left = 0))
                    : i &&
                      (e.push(
                        "translate(" +
                          (0 - r.left) +
                          " " +
                          (r.height + r.top) +
                          ")"
                      ),
                      e.push("scale(1 -1)"),
                      (r.top = r.left = 0)),
                  0 > a && (a -= 4 * Math.floor(a / 4)),
                  (a %= 4),
                  a)
                ) {
                  case 1:
                    (l = r.height / 2 + r.top),
                      e.unshift(
                        "rotate(90 " + l.toString() + " " + l.toString() + ")"
                      );
                    break;
                  case 2:
                    e.unshift(
                      "rotate(180 " +
                        (r.width / 2 + r.left) +
                        " " +
                        (r.height / 2 + r.top) +
                        ")"
                    );
                    break;
                  case 3:
                    (l = r.width / 2 + r.left),
                      e.unshift(
                        "rotate(-90 " + l.toString() + " " + l.toString() + ")"
                      );
                }
                a % 2 == 1 &&
                  (r.left !== r.top &&
                    ((l = r.left), (r.left = r.top), (r.top = l)),
                  r.width !== r.height &&
                    ((l = r.width), (r.width = r.height), (r.height = l))),
                  e.length &&
                    (o = (function (t, e) {
                      const n = (function (t, e = "defs") {
                        let n = "";
                        const i = t.indexOf("<" + e);
                        for (; i >= 0; ) {
                          const r = t.indexOf(">", i),
                            o = t.indexOf("</" + e);
                          if (-1 === r || -1 === o) break;
                          const l = t.indexOf(">", o);
                          if (-1 === l) break;
                          (n += t.slice(r + 1, o).trim()),
                            (t = t.slice(0, i).trim() + t.slice(l + 1));
                        }
                        return { defs: n, content: t };
                      })(t);
                      return (
                        (i = n.defs),
                        (r = e + n.content + "</g>"),
                        i ? "<defs>" + i + "</defs>" + r : r
                      );
                      var i, r;
                    })(o, '<g transform="' + e.join(" ") + '">'));
              });
              const l = i.width,
                a = i.height,
                s = r.width,
                u = r.height;
              let c, f;
              null === l
                ? ((f = null === a ? "1em" : "auto" === a ? u : a),
                  (c = _t(f, s / u)))
                : ((c = "auto" === l ? s : l),
                  (f = null === a ? _t(c, u / s) : "auto" === a ? u : a));
              const d = {},
                h = (t, e) => {
                  ((t) => "unset" === t || "undefined" === t || "none" === t)(
                    e
                  ) || (d[t] = e.toString());
                };
              h("width", c), h("height", f);
              const p = [r.left, r.top, s, u];
              return (
                (d.viewBox = p.join(" ")),
                { attributes: d, viewBox: p, body: o }
              );
            })(t, r),
            f = c.attributes;
          if ((r.inline && (l.verticalAlign = "-0.125em"), "svg" === o)) {
            (u.style = { ...l, ...s }), Object.assign(u, f);
            let t = 0,
              n = e.id;
            return (
              "string" == typeof n && (n = n.replace(/-/g, "_")),
              (u.dangerouslySetInnerHTML = {
                F: fe(Ht(c.body, n ? () => n + "ID" + t++ : "iconifyReact")),
              }),
              a.createElement("svg", u)
            );
          }
          const { body: d, width: h, height: p } = t,
            g =
              "mask" === o || ("bg" !== o && -1 !== d.indexOf("currentColor")),
            m = (function (t, e) {
              let n =
                -1 === t.indexOf("xlink:")
                  ? ""
                  : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
              for (const i in e) n += " " + i + '="' + e[i] + '"';
              return (
                '<svg xmlns="http://www.w3.org/2000/svg"' +
                n +
                ">" +
                t +
                "</svg>"
              );
            })(d, { ...f, width: h + "", height: p + "" });
          var v;
          return (
            (u.style = {
              ...l,
              "--svg":
                ((v = m),
                'url("' +
                  (function (t) {
                    return (
                      "data:image/svg+xml," +
                      (function (t) {
                        return t
                          .replace(/"/g, "'")
                          .replace(/%/g, "%25")
                          .replace(/#/g, "%23")
                          .replace(/</g, "%3C")
                          .replace(/>/g, "%3E")
                          .replace(/\s+/g, " ");
                      })(t)
                    );
                  })(v) +
                  '")'),
              width: ye(f.width),
              height: ye(f.height),
              ...pe,
              ...(g ? ge : me),
              ...s,
            }),
            a.createElement("span", u)
          );
        })({ ...mt, ...d }, t, f)
      : t.children
      ? t.children
      : t.fallback
      ? t.fallback
      : a.createElement("span", {});
  }
  const Se = a.forwardRef((t, e) => xe({ ...t, q: e }));
  a.forwardRef((t, e) => xe({ inline: !0, ...t, q: e }));
  const Me = a.forwardRef(
    ({ options: t, value: e, defaultValue: n, onChange: i }, r) => {
      const { t: o } = st(),
        l = void 0 !== e ? e : n,
        [s, u] = a.useState(!1),
        [c, f] = a.useState(""),
        d = a.useRef(null),
        [h, p] = a.useState(t.find((t) => t.value === l)),
        g =
          "" === c.trim()
            ? t
            : t.filter((t) => t.label.toLowerCase().includes(c.toLowerCase()));
      a.useEffect(() => {
        p(t.find((t) => t.value === l));
      }, [l, t]),
        a.useEffect(() => {
          const t = (t) => {
            d.current && !d.current.contains(t.target) && (u(!1), f(""));
          };
          return (
            document.addEventListener("mousedown", t),
            () => document.removeEventListener("mousedown", t)
          );
        }, []);
      const m = () => u(!s),
        v = (t) => {
          p(t), u(!1), f(""), i && i(t.value);
        };
      return E.jsx("div", {
        className: "inline-block ",
        ref: r,
        children: E.jsxs("div", {
          ref: d,
          className: "relative",
          children: [
            E.jsx("button", {
              type: "button",
              onClick: m,
              onKeyDown: (t) => {
                "Enter" === t.key || " " === t.key
                  ? (t.preventDefault(), m())
                  : "ArrowDown" !== t.key || s
                  ? "Escape" === t.key && s && (t.preventDefault(), u(!1))
                  : (t.preventDefault(), u(!0));
              },
              className:
                "text-xs bg-white h-8 flex items-center justify-between rounded-md border-neutral-100 px-3 cursor-pointer overflow-hidden hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "aria-expanded": s,
              "aria-haspopup": "listbox",
              "aria-label": h
                ? "Selected: " + (h.label || h.value)
                : o("accessibility.selectOption"),
              role: "combobox",
              children:
                h && h.icon
                  ? "string" == typeof h.icon
                    ? E.jsx(Se, { icon: h.icon })
                    : h.icon
                  : null,
            }),
            s &&
              E.jsx("div", {
                className:
                  "absolute z-50 rounded-md bg-white shadow-lg ring-1 max-h-60 border-neutral-100  overflow-auto min-w-full mt-1",
                role: "listbox",
                "aria-label": "Options",
                children: E.jsx("ul", {
                  className:
                    "max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none",
                  children: g.map((t, e) => {
                    const n = h?.value === t.value;
                    return E.jsxs(
                      "li",
                      {
                        onClick: () => v(t),
                        onKeyDown: (e) => {
                          ("Enter" !== e.key && " " !== e.key) ||
                            (e.preventDefault(), v(t));
                        },
                        className: ht(
                          "relative cursor-pointer select-none px-3 py-2 flex items-center focus:outline-none focus:bg-blue-100",
                          {
                            "bg-brand-100 text-brand-900": n,
                            "text-gray-900 hover:bg-gray-100": !n,
                          }
                        ),
                        role: "option",
                        "aria-selected": n,
                        tabIndex: 0,
                        children: [
                          t.icon &&
                            E.jsx("span", {
                              className: "mr-1",
                              "aria-hidden": "true",
                              children:
                                "string" == typeof t.icon
                                  ? E.jsx(Se, {
                                      icon: t.icon,
                                      className: "h-4 w-4",
                                    })
                                  : t.icon,
                            }),
                          t.label,
                        ],
                      },
                      e
                    );
                  }),
                }),
              }),
          ],
        }),
      });
    }
  );
  var Ee = ((t) => (
      (t.biggerText = "mdi:format-size"),
      (t.lineHeight = "mdi:format-line-spacing"),
      (t.textSpacing = "mdi:format-letter-spacing"),
      (t.cursorLarge = "mdi:cursor-default"),
      (t.hideImages = "mdi:image-off"),
      (t.stopAnimation = "mdi:animation-outline"),
      (t.tooltip = "mdi:tooltip-text"),
      (t.fonts = "mdi:format-font-size-increase"),
      (t.textAlignment = "mdi:format-align-center"),
      t
    ))(Ee || {}),
    Ce = ((t) => (
      (t.monochrome = "mdi:palette-outline"),
      (t.brightness = "mdi:brightness-6"),
      (t.contrast = "mdi:contrast"),
      (t.saturation = "mdi:palette-swatch"),
      (t.smartContrast = "mdi:contrast-circle"),
      t
    ))(Ce || {}),
    Ae = ((t) => (
      (t.oldAgeMode = "mdi:account-outline"),
      (t.dyslexiaMode = "mdi:alphabetical-variant"),
      (t.blindMode = "mdi:volume-high"),
      (t.adhdMode = "mdi:lightbulb-on"),
      (t.visionImpairedProfile = "mdi:eye-check"),
      (t.seizureSafeProfile = "mdi:flash-off"),
      t
    ))(Ae || {}),
    Ie = ((t) => (
      (t.speechReader = "mdi:volume-high"),
      (t.readingGuide = "mdi:format-align-center"),
      (t.readingMask = "mdi:eye-outline"),
      (t.highlightLinks = "mdi:link"),
      (t.readMode = "mdi:book-open-page-variant"),
      (t.muteSound = "mdi:volume-mute"),
      (t.highlightFocus = "mdi:cursor-default-click"),
      t
    ))(Ie || {}),
    Te = ((t) => (
      (t.Wheelchair = "mdi:wheelchair-accessibility"),
      (t.UniversalAccess = "fa6-solid:universal-access"),
      (t.AccessibilityNew = "material-symbols:accessibility-new-rounded"),
      t
    ))(Te || {});
  const Le = {
      monochrome: "colorItems.monochrome",
      brightness: "colorItems.brightness",
      saturation: "colorItems.saturation",
      smartContrast: "colorItems.smartContrast",
      contrast: {
        0: "colorItems.contrast",
        1: "colorItems.invertColor",
        2: "colorItems.darkContrast",
        3: "colorItems.lightContrast",
      },
      speechReader: {
        0: "navigationItems.speechReader",
        1: "navigationItems.slow",
        2: "navigationItems.medium",
        3: "navigationItems.fast",
      },
      readingGuide: "navigationItems.readingGuide",
      readingMask: "navigationItems.readingMask",
      highlightLinks: "navigationItems.highlightLinks",
      readMode: "navigationItems.readMode",
      muteSound: "navigationItems.muteSound",
      highlightFocus: "navigationItems.highlightFocus",
      biggerText: "contentItems.biggerText",
      lineHeight: "contentItems.lineHeight",
      textSpacing: "contentItems.textSpacing",
      cursorLarge: "contentItems.cursorLarge",
      hideImages: "contentItems.hideImages",
      stopAnimation: "contentItems.stopAnimation",
      tooltip: "contentItems.tooltip",
      fonts: {
        0: "contentItems.fonts",
        1: "contentItems.dyslexia",
        2: "contentItems.readable",
        3: "contentItems.bionic",
      },
      textAlignment: {
        0: "contentItems.textAlignment",
        1: "contentItems.left",
        2: "contentItems.center",
        3: "contentItems.right",
      },
      seizureSafeProfile: "specialModeItems.seizureSafeProfile",
      visionImpairedProfile: "specialModeItems.visionImpairedProfile",
      adhdMode: "specialModeItems.adhdMode",
      blindMode: "specialModeItems.blindMode",
      dyslexiaMode: "specialModeItems.dyslexiaMode",
      oldAgeMode: "specialModeItems.oldAgeMode",
    },
    ze = (t, e, n) => {
      const i = Le[t];
      return "object" == typeof i && void 0 !== e && "function" != typeof e
        ? (n || ((t) => t))(i[e])
        : (("function" == typeof e ? e : n) || ((t) => t))(
            "string" == typeof i ? i : ""
          );
    },
    Oe = [
      { value: "tr", label: "TR", icon: "twemoji:flag-turkey" },
      { value: "en", label: "EN", icon: "twemoji:flag-united-states" },
    ],
    je = {
      logo: Te.AccessibilityNew,
      direction: "bottom-right",
      theme: {
        primary: "#4147EA",
        background: "#F9F9F9",
        secondary: "#FFFFFF",
        accent: "#0F1396",
      },
      sections: {
        specialMode: {
          enabled: !0,
          order: 1,
          items: {
            seizureSafeProfile: { enabled: !0, order: 1 },
            visionImpairedProfile: { enabled: !0, order: 2 },
            adhdMode: { enabled: !0, order: 3 },
            blindMode: { enabled: !0, order: 4 },
            dyslexiaMode: { enabled: !0, order: 5 },
            oldAgeMode: { enabled: !0, order: 6 },
          },
        },
        content: {
          enabled: !0,
          order: 2,
          items: {
            lineHeight: { enabled: !0, order: 1, active: !0 },
            biggerText: { enabled: !0, order: 2 },
            cursorLarge: { enabled: !0, order: 3 },
            hideImages: { enabled: !0, order: 4 },
            stopAnimation: { enabled: !0, order: 5 },
            tooltip: { enabled: !0, order: 6 },
            fonts: { enabled: !0, order: 7 },
            textSpacing: { enabled: !0, order: 8 },
            textAlignment: { enabled: !0, order: 9 },
          },
        },
        navigation: {
          enabled: !0,
          order: 3,
          items: {
            speechReader: { enabled: !0, order: 1 },
            readingGuide: { enabled: !0, order: 2 },
            readingMask: { enabled: !0, order: 3 },
            highlightLinks: { enabled: !0, order: 4 },
            readMode: { enabled: !0, order: 5 },
            muteSound: { enabled: !0, order: 6 },
            highlightFocus: { enabled: !0, order: 7 },
          },
        },
        color: {
          enabled: !0,
          order: 4,
          items: {
            monochrome: { enabled: !0, order: 1 },
            saturation: { enabled: !0, order: 2 },
            smartContrast: { enabled: !0, order: 3 },
            brightness: { enabled: !0, order: 4 },
            contrast: { enabled: !0, order: 5 },
          },
        },
      },
    };
  var Fe = ((t) => (
    (t[(t.Left = 1)] = "Left"),
    (t[(t.Center = 2)] = "Center"),
    (t[(t.Right = 3)] = "Right"),
    t
  ))(Fe || {});
  const Pe = ({ itemConfig: t, isPreview: e, themeColor: n }) => {
      const { t: i, lang: r } = st(),
        o = a.useMemo(
          () => ({
            biggerText: {
              status: !1,
              step: 0,
              type: "biggerText",
              totalSteps: I.TOTAL_STEPS.biggerText,
            },
            lineHeight: {
              status: !1,
              step: 0,
              type: "lineHeight",
              totalSteps: I.TOTAL_STEPS.lineHeight,
            },
            textSpacing: {
              status: !1,
              step: 0,
              type: "textSpacing",
              totalSteps: I.TOTAL_STEPS.textSpacing,
            },
            cursorLarge: { status: !1, type: "cursorLarge" },
            hideImages: { status: !1, type: "hideImages" },
            fonts: {
              status: !1,
              step: 0,
              type: "fonts",
              totalSteps: I.TOTAL_STEPS.fonts,
            },
            tooltip: { status: !1, type: "tooltip" },
            stopAnimation: { status: !1, type: "stopAnimation" },
            textAlignment: {
              status: !1,
              step: 0,
              type: "textAlignment",
              totalSteps: I.TOTAL_STEPS.textAlignment,
            },
          }),
          []
        ),
        l = a.useMemo(() => {
          const t = ot.getWidgetStateByType("content");
          return t ? { ...o, ...t } : o;
        }, [o]),
        { setValue: s, reset: u, formState: c } = ct({ defaultValues: l }),
        {
          biggerText: f,
          lineHeight: d,
          textSpacing: h,
          cursorLarge: p,
          hideImages: g,
          fonts: m,
          tooltip: v,
          stopAnimation: b,
          textAlignment: w,
        } = c.values;
      a.useEffect(() => {
        const t = () => {
          const t = ot.getWidgetStateByType("content");
          t &&
            (u(t),
            setTimeout(() => {
              rt.processState(t, "content");
            }, 50));
        };
        return (
          t(),
          window.addEventListener("efl-storage-change", t),
          window.addEventListener("storage", t),
          () => {
            window.removeEventListener("efl-storage-change", t),
              window.removeEventListener("storage", t);
          }
        );
      }, [u]),
        a.useEffect(() => {
          const t = () => {
            u(o);
          };
          return (
            window.addEventListener("efl-widget-reset", t),
            () => window.removeEventListener("efl-widget-reset", t)
          );
        }, [u, o]);
      const y = a.useMemo(
          () => [
            {
              id: "biggerText",
              name: ze("biggerText", i),
              onClick: () => {
                const t = 3 > f.step ? f.step + 1 : 0,
                  n = 3 > f.step,
                  i = { ...f, status: n, step: t };
                if ((s("biggerText", i), !e)) {
                  const t = { ...c.values, biggerText: i };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateAttributeClass(i), z(t);
              },
              icon: Ee.biggerText,
              isActive: f.status,
              progress: f.step || 0,
              ariaLabel:
                "Metin boyutu " + (f.status ? "seviye " + f.step : "normal"),
            },
            {
              id: "lineHeight",
              name: ze("lineHeight", i),
              onClick: () => {
                const t = 3 > d.step ? d.step + 1 : 0,
                  n = 3 > d.step,
                  i = { ...d, status: n, step: t };
                if ((s("lineHeight", i), !e)) {
                  const t = { ...c.values, lineHeight: i };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateAttributeClass(i), P(t);
              },
              icon: Ee.lineHeight,
              isActive: d.status,
              progress: d.step || 0,
              ariaLabel:
                "Satır yüksekliği " +
                (d.status ? "seviye " + d.step : "normal"),
            },
            {
              id: "textSpacing",
              name: ze("textSpacing", i),
              onClick: () => {
                const t = 3 > h.step ? h.step + 1 : 0,
                  n = 3 > h.step,
                  i = { ...h, status: n, step: t };
                if ((s("textSpacing", i), !e)) {
                  const t = { ...c.values, textSpacing: i };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateAttributeClass(i), N(t);
              },
              icon: Ee.textSpacing,
              isActive: h.status,
              progress: h.step || 0,
              ariaLabel:
                "Metin aralığı " + (h.status ? "seviye " + h.step : "normal"),
            },
            {
              id: "cursorLarge",
              name: ze("cursorLarge", i),
              onClick: () => {
                const t = { ...p, status: !p.status };
                if ((s("cursorLarge", t), !e)) {
                  const e = { ...c.values, cursorLarge: t };
                  ot.saveWidgetStateByType("content", e, r);
                }
                rt.updateBodyClass("efl-cursor-large", t.status),
                  rt.updateAttributeClass(t);
              },
              icon: Ee.cursorLarge,
              isActive: p.status,
              ariaLabel:
                (p.status ? "Devre dışı bırak" : "Etkinleştir") +
                " büyük imleç",
            },
            {
              id: "hideImages",
              name: ze("hideImages", i),
              onClick: () => {
                const t = { ...g, status: !g.status };
                if ((s("hideImages", t), !e)) {
                  const e = { ...c.values, hideImages: t };
                  ot.saveWidgetStateByType("content", e, r);
                }
                rt.updateBodyClass("efl-hide-images", t.status),
                  rt.updateAttributeClass(t);
              },
              icon: Ee.hideImages,
              isActive: g.status,
              ariaLabel: (g.status ? "Göster" : "Gizle") + " resimleri",
            },
            {
              id: "fonts",
              name: ze("fonts", m.step, i),
              onClick: () => {
                const t = 3 > m.step ? m.step + 1 : 0,
                  n = t > 0;
                if (
                  (Object.values(K).forEach((t) => {
                    rt.updateBodyClass(t, !1);
                  }),
                  3 === m.step && V(!0, () => {}),
                  t > 0)
                )
                  if (3 === t) V(!1, () => {});
                  else {
                    const e = K[t];
                    rt.updateBodyClass(e, !0);
                  }
                const i = { ...m, status: n, step: t };
                if ((s("fonts", i), !e)) {
                  const t = { ...c.values, fonts: i };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateAttributeClass(i);
              },
              icon: U[m.step],
              isActive: m.status,
              progress: m.step || 0,
              ariaLabel:
                m.step > 0
                  ? ze("fonts", m.step, i) + " yazı tipi"
                  : "Etkinleştir yazı tipi seçenekleri",
            },
            {
              id: "tooltip",
              name: ze("tooltip", i),
              onClick: () => {
                const t = !v.status,
                  n = { ...v, status: t };
                if ((s("tooltip", n), !e)) {
                  const t = { ...c.values, tooltip: n };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateAttributeClass(n), H(t);
              },
              icon: Ee.tooltip,
              isActive: v.status,
              ariaLabel:
                (v.status ? "Devre dışı bırak" : "Etkinleştir") +
                " Alan Adı ipuçları",
            },
            {
              id: "stopAnimation",
              name: ze("stopAnimation", i),
              onClick: () => {
                const t = !b.status,
                  n = { ...b, status: t };
                if ((s("stopAnimation", n), !e)) {
                  const t = { ...c.values, stopAnimation: n };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateBodyClass("efl-stop-animation", t),
                  rt.updateAttributeClass(n),
                  t ? B.stopAnimations() : B.resumeAnimations();
              },
              icon: Ee.stopAnimation,
              isActive: b.status,
              ariaLabel:
                (b.status ? "Devre dışı bırak" : "Etkinleştir") +
                " animasyonları durdur",
            },
            {
              id: "textAlignment",
              name: ze("textAlignment", w.step, i),
              onClick: () => {
                const t = 3 > w.step ? w.step + 1 : 0,
                  n = t > 0;
                rt.updateBodyClass("efl-alignment-" + w.step, !1),
                  t > 0 && rt.updateBodyClass("efl-alignment-" + t, !0);
                const i = { ...w, status: n, step: t };
                if ((s("textAlignment", i), !e)) {
                  const t = { ...c.values, textAlignment: i };
                  ot.saveWidgetStateByType("content", t, r);
                }
                rt.updateAttributeClass(i);
              },
              icon: W[w.step],
              isActive: w.status,
              ariaLabel:
                w.step > 0
                  ? Fe[w.step] + " metin hizalaması"
                  : "Etkinleştir metin hizalama",
              progress: w.step,
            },
          ],
          [i, f, d, h, p, g, m, v, b, w, s, c.values, r, e]
        ),
        k = a.useMemo(() => rt.getFilteredAndOrderedItems(y, t), [y, t]);
      return E.jsx(Ve, {
        title: i("sections.contentSettings"),
        items: k,
        themeColor: n,
        isPreview: e,
      });
    },
    Re = {
      0: Ce.contrast,
      1: G.invertColors,
      2: G.weatherNight,
      3: G.whiteBalanceSunny,
    };
  var _e = ((t) => (
    (t[(t.Invert = 1)] = "Invert"),
    (t[(t.Dark = 2)] = "Dark"),
    (t[(t.Light = 3)] = "Light"),
    t
  ))(_e || {});
  const De = ({ itemConfig: t, isPreview: e, themeColor: n }) => {
    const { t: i, lang: r } = st(),
      o = a.useMemo(
        () => ({
          monochrome: { status: !1, type: "monochrome" },
          brightness: {
            status: !1,
            step: 0,
            type: "brightness",
            totalSteps: I.TOTAL_STEPS.brightness,
          },
          contrast: {
            status: !1,
            step: 0,
            type: "contrast",
            totalSteps: I.TOTAL_STEPS.contrast,
          },
          saturation: {
            status: !1,
            step: 0,
            type: "saturation",
            totalSteps: I.TOTAL_STEPS.saturation,
          },
          smartContrast: {
            status: !1,
            step: 0,
            type: "smartContrast",
            totalSteps: I.TOTAL_STEPS.smartContrast,
          },
        }),
        []
      ),
      l = a.useMemo(() => {
        const t = ot.getWidgetStateByType("color");
        return t ? { ...o, ...t } : o;
      }, [o]),
      { setValue: s, reset: u, formState: c } = ct({ defaultValues: l }),
      {
        monochrome: f,
        brightness: d,
        contrast: h,
        saturation: p,
        smartContrast: g,
      } = c.values;
    a.useEffect(() => {
      const t = () => {
        const t = ot.getWidgetStateByType("color");
        t && (u(t), rt.processState(t, "content"));
      };
      return (
        t(),
        window.addEventListener("efl-storage-change", t),
        window.addEventListener("storage", t),
        () => {
          window.removeEventListener("efl-storage-change", t),
            window.removeEventListener("storage", t);
        }
      );
    }, [u]),
      a.useEffect(() => {
        e || ot.saveWidgetStateByType("color", c.values, r);
      }, [c.values, r, e]),
      a.useEffect(() => {
        const t = () => {
          u(o);
        };
        return (
          window.addEventListener("efl-widget-reset", t),
          () => window.removeEventListener("efl-widget-reset", t)
        );
      }, [u, o]);
    const m = a.useMemo(
      () => [
        {
          id: "contrast",
          name: ze("contrast", h.step, i),
          onClick: () => {
            const t = h;
            rt.handleStep(t, s);
            const e = { ...h, status: !h.status };
            rt.updateHTMLClassStep({
              status: e.status,
              step: e.step,
              totalSteps: I.TOTAL_STEPS.contrast,
              type: "contrast",
            });
          },
          icon: Re[h.step],
          isActive: h.status,
          ariaLabel: "Kontrast Mod " + _e[h.step],
          progress: h.step,
        },
        {
          id: "brightness",
          name: ze("brightness", i),
          onClick: () => {
            const t = d;
            rt.handleStep(t, s);
            const e = { ...d, status: !d.status };
            rt.updateHTMLClassStep({
              status: e.status,
              step: e.step,
              totalSteps: I.TOTAL_STEPS.brightness,
              type: "brightness",
            });
          },
          icon: Ce.brightness,
          isActive: d.status,
          progress: d.step || 0,
          ariaLabel: "Parlaklık seviyesi " + d.step,
        },
        {
          id: "smartContrast",
          name: ze("smartContrast", i),
          onClick: () => {
            const t = g;
            rt.handleStep(t, s);
            const e = { ...g, status: !g.status };
            rt.updateHTMLClassStep({
              status: e.status,
              step: e.step,
              totalSteps: I.TOTAL_STEPS.smartContrast,
              type: "smartContrast",
            });
          },
          icon: Ce.smartContrast,
          isActive: g.status,
          ariaLabel: "Kontrast seviyesi " + g.step,
          progress: g.step,
        },
        {
          id: "saturation",
          name: ze("saturation", i),
          onClick: () => {
            const t = p;
            rt.handleStep(t, s);
            const e = { ...p, status: !p.status };
            rt.updateHTMLClassStep({
              status: e.status,
              step: e.step,
              totalSteps: I.TOTAL_STEPS.saturation,
              type: "saturation",
            });
          },
          icon: Ce.saturation,
          isActive: p.status,
          ariaLabel: "Doygunluk seviyesi " + p.step,
          progress: p.step,
        },
        {
          id: "monochrome",
          name: ze("monochrome", i),
          onClick: () => {
            const t = { ...f, status: !f.status };
            s("monochrome", t),
              rt.updateHTMLClass("efl-monochrome-color", t.status),
              rt.updateAttributeClass(t);
          },
          icon: Ce.monochrome,
          isActive: f.status,
          ariaLabel:
            (f.status ? "Devre dışı bırak" : "Etkinleştir") + " monokrom",
        },
      ],
      [i, f, d, h, p, g, s]
    );
    a.useEffect(() => {
      rt.updateHTMLClassStep({
        ...d,
        totalSteps: I.TOTAL_STEPS.brightness,
        type: "brightness",
      });
    }, [d]),
      a.useEffect(() => {
        rt.updateHTMLClassStep({
          ...h,
          totalSteps: I.TOTAL_STEPS.contrast,
          type: "contrast",
        });
      }, [h]),
      a.useEffect(() => {
        rt.updateHTMLClassStep({
          ...p,
          totalSteps: I.TOTAL_STEPS.saturation,
          type: "saturation",
        });
      }, [p]),
      a.useEffect(() => {
        rt.updateHTMLClassStep({
          ...g,
          totalSteps: I.TOTAL_STEPS.smartContrast,
          type: "smartContrast",
        });
      }, [g]);
    const v = a.useMemo(() => rt.getFilteredAndOrderedItems(m, t), [m, t]);
    return E.jsx(Ve, {
      title: i("sections.colorSettings"),
      items: v,
      themeColor: n,
      isPreview: e,
    });
  };
  var Ne = ((t) => (
    (t[(t.Slow = 1)] = "Slow"),
    (t[(t.Normal = 2)] = "Normal"),
    (t[(t.Fast = 3)] = "Fast"),
    t
  ))(Ne || {});
  const $e = {
      0: G.volumeHigh,
      1: G.volumeLow,
      2: G.volumeMedium,
      3: G.volumeHigh,
    },
    He = ({ setActive: t, totalSteps: e, currentState: n, themeColor: i }) => {
      const { t: r } = st(),
        o = I.TOTAL_STEPS[e];
      if (!e) return null;
      if (void 0 === n) return E.jsx("span", { className: "h-1" });
      const l = Array.from({ length: o });
      return E.jsx("div", {
        className: "flex gap-2",
        role: "progressbar",
        "aria-label": `${r("accessibility.level")} ${n} / ${o}`,
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": o,
        children: l.map((e, r) => {
          const o = t ? (n > r ? i.secondary : i.accent) : "#D5D7DA";
          return E.jsx(
            "span",
            {
              className: "w-[26px] h-1 rounded",
              style: { backgroundColor: o },
              "aria-hidden": "true",
            },
            r
          );
        }),
      });
    },
    Ve = ({ title: t, items: e, themeColor: n, isPreview: i = !1 }) => {
      const { t: r } = st(),
        o = "section-" + t.replace(/\s+/g, "-").toLowerCase();
      return E.jsxs("section", {
        className: "grid gap-1",
        "aria-labelledby": o,
        children: [
          E.jsx("h2", {
            id: o,
            className: "text-left text-xs font-semibold leading-[12px]",
            children: t,
          }),
          E.jsx("div", {
            className: "grid grid-cols-3 gap-3 items-center",
            role: "group",
            "aria-labelledby": o,
            children: e?.map((t) => {
              const e = t.isActive ? n.primary : n.secondary,
                o = t.isActive ? n.secondary : n.primary;
              return E.jsxs(
                A,
                {
                  variant: t.isActive ? "primary" : "link",
                  onClick: i
                    ? void 0
                    : () => t.onClick && t.onClick(t.isActive),
                  className: `col-span-1 flex flex-col w-full h-[104px] justify-end px-2 py-2 border border-neutral-200 hover:border-[${n.accent}]`,
                  style: {
                    backgroundColor: e,
                    color: o,
                    "--tw-ring-color": n.accent,
                  },
                  "aria-label": `${t.name}${
                    t.isActive
                      ? " - " + r("accessibility.active")
                      : " - " + r("accessibility.inactive")
                  }${
                    t.progress
                      ? ` - ${r("accessibility.level")} ${t.progress}`
                      : ""
                  }`,
                  "aria-pressed": t.isActive,
                  role: "button",
                  tabIndex: 0,
                  children: [
                    E.jsxs("div", {
                      className: "flex flex-col items-center gap-1",
                      children: [
                        E.jsx(Se, {
                          className: "w-7 h-7",
                          icon: t.icon,
                          "aria-hidden": "true",
                        }),
                        E.jsx("span", {
                          "aria-hidden": "true",
                          children: t.name,
                        }),
                      ],
                    }),
                    E.jsx(He, {
                      setActive: t.isActive,
                      totalSteps: t.id,
                      currentState: t.progress,
                      themeColor: n,
                    }),
                  ],
                },
                t.id
              );
            }),
          }),
        ],
      });
    },
    Be = ({ itemConfig: t, isPreview: e, themeColor: n }) => {
      const { t: i, lang: r } = st(),
        o = a.useMemo(
          () => ({
            readingMask: { status: !1, type: "readingMask" },
            readingGuide: { status: !1, type: "readingGuide" },
            speechReader: {
              status: !1,
              type: "speechReader",
              step: 0,
              totalSteps: I.TOTAL_STEPS.speechReader,
            },
            highlightLinks: { status: !1, type: "highlightLinks" },
            readMode: { status: !1, type: "readMode" },
            muteSound: { status: !1, type: "muteSound" },
            highlightFocus: { status: !1, type: "highlightFocus" },
          }),
          []
        ),
        l = a.useMemo(() => {
          const t = ot.getWidgetStateByType("navigation");
          return t ? { ...o, ...t } : o;
        }, [o]),
        { setValue: s, reset: u, formState: c } = ct({ defaultValues: l }),
        {
          readingMask: f,
          readingGuide: d,
          speechReader: h,
          highlightLinks: p,
          readMode: g,
          muteSound: m,
          highlightFocus: v,
        } = c.values;
      a.useEffect(() => {
        const t = () => {
          const t = ot.getWidgetStateByType("navigation");
          t &&
            (u(t),
            setTimeout(() => {
              rt.processState(t, "navigation");
            }, 50));
        };
        return (
          t(),
          window.addEventListener("efl-storage-change", t),
          window.addEventListener("storage", t),
          () => {
            window.removeEventListener("efl-storage-change", t),
              window.removeEventListener("storage", t);
          }
        );
      }, [u]),
        a.useEffect(() => {
          const t = () => {
            u(o);
          };
          return (
            window.addEventListener("efl-widget-reset", t),
            () => window.removeEventListener("efl-widget-reset", t)
          );
        }, [u, o]);
      const b = a.useMemo(
          () => [
            {
              id: "readingMask",
              name: ze("readingMask", i),
              onClick: () => {
                const t = !f.status,
                  e = { ...f, status: t };
                s("readingMask", e);
                const n = { ...c.values, readingMask: e };
                ot.saveWidgetStateByType("navigation", n, r),
                  rt.updateAttributeClass(e),
                  q(t);
              },
              icon: Ie.readingMask,
              isActive: f.status,
              ariaLabel:
                (f.status ? "Devre dışı bırak" : "Etkinleştir") +
                " okuma maskesi",
            },
            {
              id: "readingGuide",
              name: ze("readingGuide", i),
              onClick: () => {
                const t = !d.status,
                  e = { ...d, status: t };
                s("readingGuide", e);
                const n = { ...c.values, readingGuide: e };
                ot.saveWidgetStateByType("navigation", n, r),
                  rt.updateAttributeClass(e),
                  Z(t);
              },
              icon: Ie.readingGuide,
              isActive: d.status,
              ariaLabel:
                (d.status ? "Devre dışı bırak" : "Etkinleştir") +
                " okuma kılavuzu",
            },
            {
              id: "speechReader",
              name: ze("speechReader", h.step, i),
              onClick: () => {
                const t = 3 > h.step ? h.step + 1 : 0,
                  e = 3 > h.step,
                  n = { ...h, status: e, step: t };
                s("speechReader", n), rt.updateAttributeClass(n), Q(t);
              },
              icon: $e[h.step],
              isActive: h.status,
              ariaLabel:
                h.step > 0
                  ? Ne[h.step] + " konuşma okuyucu"
                  : "Etkinleştir konuşma okuyucu",
              progress: h.step,
            },
            {
              id: "highlightLinks",
              name: ze("highlightLinks", i),
              onClick: () => {
                const t = { ...p, status: !p.status };
                s("highlightLinks", t);
                const e = { ...c.values, highlightLinks: t };
                ot.saveWidgetStateByType("navigation", e, r),
                  rt.updateBodyClass("efl-highlight-links", t.status),
                  rt.updateAttributeClass(t);
              },
              icon: Ie.highlightLinks,
              isActive: p.status,
              ariaLabel:
                (p.status ? "Devre dışı bırak" : "Etkinleştir") +
                " bağlantıları vurgula",
            },
            {
              id: "readMode",
              name: ze("readMode", i),
              onClick: () => {
                const t = { ...g, status: !g.status };
                s("readMode", t);
                const e = { ...c.values, readMode: t };
                ot.saveWidgetStateByType("navigation", e, r),
                  rt.updateBodyClass("efl-read-mode", t.status),
                  rt.updateAttributeClass(t);
              },
              icon: Ie.readMode,
              isActive: g.status,
              ariaLabel:
                (g.status ? "Devre dışı bırak" : "Etkinleştir") + " okuma modu",
            },
            {
              id: "muteSound",
              name: ze("muteSound", i),
              onClick: () => {
                const t = !m.status,
                  e = { ...m, status: t };
                s("muteSound", e);
                const n = { ...c.values, muteSound: e };
                var i;
                ot.saveWidgetStateByType("navigation", n, r),
                  rt.updateAttributeClass(e),
                  (i = t),
                  nt.setMuteSound(i);
              },
              icon: Ie.muteSound,
              isActive: m.status,
              ariaLabel:
                (m.status ? "Devre dışı bırak" : "Etkinleştir") +
                " sesleri kapat",
            },
            {
              id: "highlightFocus",
              name: ze("highlightFocus", i),
              onClick: () => {
                const t = { ...v, status: !v.status };
                s("highlightFocus", t);
                const e = { ...c.values, highlightFocus: t };
                ot.saveWidgetStateByType("navigation", e, r),
                  rt.updateBodyClass("efl-highlight-focus", t.status),
                  rt.updateAttributeClass(t);
              },
              icon: Ie.highlightFocus,
              isActive: v.status,
              ariaLabel:
                (v.status ? "Devre dışı bırak" : "Etkinleştir") +
                " sesleri kapat",
            },
          ],
          [i, f, d, h, p, g, m, v, s, c.values, r]
        ),
        w = a.useMemo(() => rt.getFilteredAndOrderedItems(b, t), [b, t]);
      return E.jsx(Ve, {
        title: i("sections.navigationSettings"),
        items: w,
        themeColor: n,
        isPreview: e,
      });
    },
    Ge = ({ itemConfig: t, isPreview: e, themeColor: n }) => {
      const { t: i, lang: r } = st(),
        o = a.useMemo(
          () => ({
            seizureSafeProfile: { status: !1, type: "seizureSafeProfile" },
            visionImpairedProfile: {
              status: !1,
              type: "visionImpairedProfile",
            },
            adhdMode: { status: !1, type: "adhdMode" },
            dyslexiaMode: { status: !1, type: "dyslexiaMode" },
            oldAgeMode: { status: !1, type: "oldAgeMode" },
            blindMode: { status: !1, type: "blindMode" },
          }),
          []
        ),
        l = a.useMemo(() => {
          const t = ot.getWidgetStateByType("specialMode");
          return t ? { ...o, ...t } : o;
        }, [o]),
        { setValue: s, reset: u, formState: c } = ct({ defaultValues: l }),
        {
          seizureSafeProfile: f,
          visionImpairedProfile: d,
          adhdMode: h,
          dyslexiaMode: p,
          oldAgeMode: g,
          blindMode: m,
        } = c.values;
      a.useEffect(() => {
        const t = () => {
          const t = ot.getWidgetStateByType("specialMode");
          t &&
            (u(t),
            setTimeout(() => {
              rt.processState(t, "specialMode");
            }, 50));
        };
        return (
          t(),
          window.addEventListener("efl-storage-change", t),
          window.addEventListener("storage", t),
          () => {
            window.removeEventListener("efl-storage-change", t),
              window.removeEventListener("storage", t);
          }
        );
      }, [u]),
        a.useEffect(() => {
          const t = () => {
            u(o);
          };
          return (
            window.addEventListener("efl-widget-reset", t),
            () => window.removeEventListener("efl-widget-reset", t)
          );
        }, [u, o]);
      const v = [
          {
            id: "seizureSafeProfile",
            name: ze("seizureSafeProfile", i),
            icon: Ae.seizureSafeProfile,
            onClick: (t) => {
              if (
                (s("seizureSafeProfile", { ...f, status: t }),
                rt.updateBodyClass("efl-stop-animation", t),
                rt.updateBodyClass("efl-hide-images", t),
                rt.updateHTMLClassStep({
                  status: t,
                  step: t ? 1 : 0,
                  totalSteps: I.TOTAL_STEPS.brightness,
                  type: "brightness",
                }),
                rt.updateHTMLClassStep({
                  status: t,
                  step: t ? 1 : 0,
                  totalSteps: I.TOTAL_STEPS.saturation,
                  type: "saturation",
                }),
                H(t),
                !e)
              ) {
                const e = ot.getDefaultState("color");
                ot.saveWidgetStateByType("color", {
                  ...e,
                  brightness: {
                    status: t,
                    step: t ? 1 : 0,
                    type: "brightness",
                    totalSteps: I.TOTAL_STEPS.brightness,
                  },
                  saturation: {
                    status: t,
                    step: t ? 1 : 0,
                    type: "saturation",
                    totalSteps: I.TOTAL_STEPS.saturation,
                  },
                });
              }
              if (!e) {
                const e = ot.getDefaultState("content");
                ot.saveWidgetStateByType("content", {
                  ...e,
                  stopAnimation: { status: t, type: "stopAnimation" },
                  hideImages: { status: t, type: "hideImages" },
                });
              }
            },
            isActive: f?.status || !1,
            ariaLabel: "seizureSafeProfile",
          },
          {
            id: "visionImpairedProfile",
            name: ze("visionImpairedProfile", i),
            icon: Ae.visionImpairedProfile,
            onClick: (t) => {
              if (
                (s("visionImpairedProfile", { ...d, status: t }),
                rt.updateBodyClass("efl-highlight-focus", t),
                rt.updateBodyClass("efl-highlight-links", t),
                rt.updateHTMLClassStep({
                  status: t,
                  step: t ? 2 : 0,
                  totalSteps: I.TOTAL_STEPS.saturation,
                  type: "saturation",
                }),
                z(t ? 2 : 0),
                Object.values(K).forEach((t) => rt.updateBodyClass(t, !1)),
                t && rt.updateBodyClass(K[2], !0),
                H(t),
                !e)
              ) {
                const e = ot.getDefaultState("color");
                ot.saveWidgetStateByType("color", {
                  ...e,
                  saturation: {
                    status: t,
                    step: t ? 2 : 0,
                    type: "saturation",
                    totalSteps: I.TOTAL_STEPS.saturation,
                  },
                });
              }
              if (!e) {
                const e = ot.getDefaultState("navigation");
                ot.saveWidgetStateByType("navigation", {
                  ...e,
                  highlightLinks: { status: t, type: "highlightLinks" },
                  highlightFocus: { status: t, type: "highlightFocus" },
                });
              }
              if (!e) {
                const e = ot.getDefaultState("content");
                ot.saveWidgetStateByType("content", {
                  ...e,
                  biggerText: {
                    status: t,
                    step: t ? 2 : 0,
                    type: "biggerText",
                    totalSteps: I.TOTAL_STEPS.biggerText,
                  },
                  stopAnimation: { status: t, type: "stopAnimation" },
                  tooltip: { status: t, type: "tooltip" },
                });
              }
            },
            isActive: d?.status || !1,
            ariaLabel: "visionImpairedProfile",
          },
          {
            id: "adhdMode",
            name: ze("adhdMode", i),
            icon: Ae.adhdMode,
            onClick: (t) => {
              if (
                (s("adhdMode", { ...h, status: t }),
                q(t),
                rt.updateBodyClass("efl-stop-animation", t),
                rt.updateBodyClass("efl-stop-animation", t),
                rt.updateHTMLClassStep({
                  status: t,
                  step: t ? 2 : 0,
                  totalSteps: I.TOTAL_STEPS.saturation,
                  type: "saturation",
                }),
                !e)
              ) {
                const e = ot.getDefaultState("color");
                ot.saveWidgetStateByType("color", {
                  ...e,
                  saturation: {
                    status: t,
                    step: t ? 2 : 0,
                    type: "saturation",
                    totalSteps: I.TOTAL_STEPS.saturation,
                  },
                });
                const n = ot.getDefaultState("content");
                ot.saveWidgetStateByType("content", {
                  ...n,
                  stopAnimation: { status: t, type: "stopAnimation" },
                });
                const i = ot.getDefaultState("navigation");
                ot.saveWidgetStateByType("navigation", {
                  ...i,
                  readingMask: { status: t, type: "readingMask" },
                });
              }
            },
            isActive: h?.status || !1,
            ariaLabel: "adhdMode",
          },
          {
            id: "blindMode",
            name: ze("blindMode", i),
            icon: Ae.blindMode,
            onClick: (t) => {
              if ((s("blindMode", { ...m, status: t }), Q(t ? 1 : 0), !e)) {
                const e = ot.getDefaultState("navigation");
                ot.saveWidgetStateByType("navigation", {
                  ...e,
                  speechReader: {
                    status: t,
                    step: t ? 1 : 0,
                    type: "speechReader",
                    totalSteps: I.TOTAL_STEPS.speechReader,
                  },
                });
              }
            },
            isActive: m?.status || !1,
            ariaLabel: "blindMode",
          },
          {
            id: "dyslexiaMode",
            name: ze("dyslexiaMode", i),
            icon: Ae.dyslexiaMode,
            onClick: (t) => {
              if (
                (s("dyslexiaMode", { ...p, status: t }),
                Object.values(K).forEach((t) => rt.updateBodyClass(t, !1)),
                t && rt.updateBodyClass(K[1], !0),
                !e)
              ) {
                const e = ot.getDefaultState("content");
                ot.saveWidgetStateByType("content", {
                  ...e,
                  fonts: {
                    status: t,
                    step: t ? 1 : 0,
                    type: "fonts",
                    totalSteps: I.TOTAL_STEPS.fonts,
                  },
                });
              }
            },
            isActive: p?.status || !1,
            ariaLabel: "dyslexiaMode",
          },
          {
            id: "oldAgeMode",
            name: ze("oldAgeMode", i),
            icon: Ae.oldAgeMode,
            onClick: (t) => {
              if (
                (s("oldAgeMode", { ...g, status: t }),
                Object.values(K).forEach((t) => rt.updateBodyClass(t, !1)),
                t && rt.updateBodyClass(K[2], !0),
                rt.updateBodyClass("efl-cursor-large", t),
                N(t ? 2 : 0),
                P(t ? 2 : 0),
                z(t ? 2 : 0),
                !e)
              ) {
                const e = ot.getDefaultState("content");
                ot.saveWidgetStateByType("content", {
                  ...e,
                  biggerText: {
                    status: t,
                    step: t ? 2 : 0,
                    type: "biggerText",
                    totalSteps: I.TOTAL_STEPS.biggerText,
                  },
                  textSpacing: {
                    status: t,
                    step: t ? 2 : 0,
                    type: "textSpacing",
                    totalSteps: I.TOTAL_STEPS.textSpacing,
                  },
                  lineHeight: {
                    status: t,
                    step: t ? 2 : 0,
                    type: "lineHeight",
                    totalSteps: I.TOTAL_STEPS.lineHeight,
                  },
                  cursorLarge: { status: t, type: "cursorLarge" },
                });
              }
            },
            isActive: g?.status || !1,
            ariaLabel: "oldAgeMode",
          },
        ],
        b = rt.getFilteredAndOrderedItems(v, t);
      return E.jsxs("section", {
        className: "grid gap-1",
        "aria-labelledby": "special-mode-heading",
        children: [
          E.jsx("h2", {
            id: "special-mode-heading",
            className: "text-left text-xs font-semibold leading-[12px]",
            children: i("specialMode"),
          }),
          E.jsx("div", {
            className: "grid gap-3 items-center",
            children: b.map((t) => {
              const o = () => {
                if (e) return;
                const n = !c.values[t.id]?.status,
                  i = { ...c.values[t.id], status: n };
                if ((s(t.id, i), !e)) {
                  const e = { ...c.values, [t.id]: i };
                  ot.saveWidgetStateByType("specialMode", e, r);
                }
                t.onClick?.(n),
                  setTimeout(() => {
                    window.dispatchEvent(new Event("efl-storage-change"));
                  }, 10),
                  window.dispatchEvent(new Event("efl-storage-change"));
              };
              return E.jsxs(
                "div",
                {
                  className:
                    "shadow-sm p-2 rounded-lg bg-white cursor-pointer flex items-start gap-2.5 h-full",
                  onClick: o,
                  style: { backgroundColor: n.secondary },
                  children: [
                    E.jsx("span", {
                      className: "p-1",
                      children: E.jsx(Se, {
                        className: "w-5 h-5",
                        icon: t.icon,
                        "aria-hidden": "true",
                      }),
                    }),
                    E.jsxs("div", {
                      className: "flex justify-between items-center w-full",
                      children: [
                        E.jsxs("div", {
                          className: "flex-1",
                          children: [
                            E.jsx("h2", {
                              className:
                                "text-left text-xs font-semibold leading-[12px]",
                              children: t.name?.toString(),
                            }),
                            E.jsxs("span", {
                              id: t.id + "-description",
                              className: "sr-only",
                              children: [
                                t.name?.toString(),
                                " -",
                                " ",
                                c.values[t.id]?.status
                                  ? i("accessibility.deactivate")
                                  : i("accessibility.activate"),
                              ],
                            }),
                          ],
                        }),
                        E.jsx(ft, {
                          value: c.values[t.id]?.status || !1,
                          color: rt.getThemeColor(n).accent,
                          onChange: o,
                          "aria-label": `${t.name?.toString()} - ${
                            c.values[t.id]?.status
                              ? i("accessibility.active")
                              : i("accessibility.inactive")
                          }`,
                          "aria-describedby": t.id + "-description",
                        }),
                      ],
                    }),
                  ],
                },
                t.id
              );
            }),
          }),
        ],
      });
    },
    Ke = ({ data: t, isPreview: e = !1, isOpen: n = !1, zoomLevel: i = 1 }) => {
      const { t: r, lang: o, changeLanguage: l } = st(),
        [u, c] = a.useState(n),
        [f] = a.useState(() => new lt()),
        d = s.useRef(null),
        h = {
          content: s.memo(Pe),
          color: s.memo(De),
          navigation: s.memo(Be),
          specialMode: s.memo(Ge),
        };
      return (
        a.useEffect(() => {
          if (null === ot.getLanguage()) {
            const t = window.location.pathname.startsWith("/en") ? "en" : "tr";
            l(t);
          }
        }, [l]),
        a.useEffect(() => {
          tt(o);
        }, [o]),
        a.useEffect(
          () => (
            u && d.current && !e ? f.activate(d.current) : f.deactivate(),
            () => {
              f.deactivate();
            }
          ),
          [u, e, f]
        ),
        a.useEffect(() => {
          if (e) return;
          const t = (t) => {
            if ("Escape" === t.key && u)
              return t.preventDefault(), c(!1), void 0;
            u ||
              t.target instanceof HTMLInputElement ||
              t.target instanceof HTMLTextAreaElement ||
              "true" === t.target?.contentEditable ||
              "o" !== t.key ||
              t.ctrlKey ||
              t.metaKey ||
              (t.preventDefault(), c(!u));
          };
          return (
            document.addEventListener("keydown", t),
            () => document.removeEventListener("keydown", t)
          );
        }, [u, e]),
        a.useEffect(() => {
          e || rt.initializeAccessibilityStates(),
            e ||
              (() => {
                const t = ot.getWidgetState();
                Object.values(I.WidgetType).forEach((e) => {
                  const n = t?.[e];
                  n && rt.processState(n, e);
                });
              })();
        }, [e]),
        E.jsxs("div", {
          id: "efl-a11y-widget",
          className:
            (e
              ? "absolute w-full h-full"
              : "fixed inset-0 z-[99999] pointer-events-none") +
            " [&_*]:!font-[Helvetica] [&_*]:!text-base [&_*]:!leading-normal [&_*]:!tracking-normal [&_*]:!cursor-default",
          style: e ? { zoom: i } : {},
          children: [
            !e &&
              E.jsx("a", {
                href: "#efl-a11y-dialog",
                className: "efl-skip-link",
                onClick: (t) => {
                  t.preventDefault(),
                    c(!0),
                    setTimeout(() => {
                      d.current?.focus();
                    }, 100);
                },
                children: r("accessibility.skipToMenu"),
              }),
            u &&
              E.jsxs("div", {
                ref: d,
                id: "efl-a11y-dialog",
                role: "dialog",
                "aria-label": r("accessibilityMenu"),
                "aria-modal": "true",
                "aria-describedby": "dialog-description",
                tabIndex: -1,
                className: `${e ? "absolute" : "fixed"} ${
                  e ? "h-full" : "h-screen"
                } sm:w-[445px] w-full z-[99999] transform-none shadow-lg flex flex-col pointer-events-auto rounded-lg ${rt.getPreviewWidgetPositioning(
                  t.direction
                )}`,
                style: {
                  backgroundColor: rt.getThemeColor(t.theme).background,
                },
                children: [
                  E.jsxs("header", {
                    className:
                      "sticky top-0 flex justify-between items-center p-4 rounded-lg shrink-0 z-[999999] w-full",
                    style: {
                      backgroundColor: rt.getThemeColor(t.theme).primary,
                      color: rt.getThemeColor(t.theme).secondary,
                    },
                    children: [
                      E.jsx("h1", {
                        className:
                          "text-left text-xs font-semibold leading-[12px]",
                        children: r("accessibilityMenu"),
                      }),
                      E.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          E.jsx(Me, {
                            options: Oe?.map((t) => ({
                              value: t.value,
                              label: "",
                              icon: t.icon,
                            })),
                            onChange: (t) => {
                              ((t) => {
                                ("tr" !== t && "en" !== t) || l(t);
                              })(t);
                            },
                            value: o,
                          }),
                          E.jsx(A, {
                            variant: "link",
                            onClick: () => {
                              c(!1);
                            },
                            "aria-label": r("accessibility.closeMenu"),
                            children: E.jsx(Se, {
                              className: "w-5 h-5",
                              icon: G.closeIcon,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  E.jsxs("main", {
                    className: "flex-1 overflow-y-auto p-6",
                    role: "main",
                    "aria-label": r("accessibility.mainContent"),
                    children: [
                      E.jsx("div", {
                        id: "dialog-description",
                        className: "sr-only",
                        children: r("accessibility.dialogDescription"),
                      }),
                      E.jsx("div", {
                        id: "accessibility-announcements",
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        className: "sr-only",
                      }),
                      E.jsx("div", {
                        className: "grid gap-6",
                        children: rt
                          .getSortedSections(t.sections)
                          .map(([n, i]) => {
                            const r = h[n];
                            return r
                              ? E.jsx(
                                  r,
                                  {
                                    itemConfig: i.items,
                                    isPreview: e,
                                    themeColor: rt.getThemeColor(t.theme),
                                  },
                                  n
                                )
                              : null;
                          }),
                      }),
                    ],
                  }),
                  E.jsxs("footer", {
                    children: [
                      E.jsx("div", {
                        className: "p-2",
                        children: E.jsx(A, {
                          className: "w-full",
                          onClick: e
                            ? () => {}
                            : rt.resetAllAccessibilitySettings,
                          style: {
                            backgroundColor: rt.getThemeColor(t.theme).primary,
                            color: rt.getThemeColor(t.theme).secondary,
                            borderColor: rt.getThemeColor(t.theme).primary,
                          },
                          "aria-label": r("accessibility.clearAllSelections"),
                          children: r("clearSelections"),
                        }),
                      }),
                      E.jsxs("div", {
                        className: "shadow-lg p-1 rounded-lg bg-white",
                        children: [
                          E.jsx("img", {
                            className: "ml-auto h-4 w-auto",
                            alt: r("accessibility.logoAlt"),
                            src: "https://cdn.prod.website-files.com/62c19781783b8f4f71e0726e/685549b53fcf893c64c036c2_EFL-Logo.svg",
                            role: "img",
                            "aria-describedby": "efl-logo-description",
                          }),
                          E.jsx("span", {
                            id: "efl-logo-description",
                            className: "sr-only",
                            children: r("accessibility.logoDescription"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            E.jsx(A, {
              className: `${
                e ? "absolute" : "fixed"
              } rounded-full w-[55px] min-w-[55px] max-w-[55px] h-[55px] min-h-[55px] max-h-[55px] z-[99998] transform-none pointer-events-auto ${rt.getPreviewButtonPositioning(
                t.direction
              )}`,
              variant: "primary",
              style: {
                backgroundColor: t.theme?.primary,
                color: t.theme?.secondary,
                borderColor: t.theme?.secondary,
                position: e ? "absolute" : "fixed",
                borderRadius: "50%",
              },
              onClick: () => {
                c(!u);
              },
              onKeyDown: (t) => {
                ("Enter" !== t.key && " " !== t.key) ||
                  (t.preventDefault(), c(!u));
              },
              "aria-label": r(
                u ? "accessibility.closeMenu" : "accessibility.openMenu"
              ),
              "aria-expanded": u,
              "aria-controls": u ? "efl-a11y-dialog" : void 0,
              title: r(
                u
                  ? "accessibility.closeMenuEsc"
                  : "accessibility.openMenuShortcut"
              ),
              role: "button",
              tabIndex: 0,
              children: E.jsx(Se, {
                icon: t.logo,
                width: 24,
                height: 24,
                "aria-hidden": "true",
              }),
            }),
          ],
        })
      );
    },
    Ue =
      '/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-tracking:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-blue-100:#d5edff;--color-blue-500:#1e91ff;--color-gray-100:#f5f5f5;--color-gray-400:#a4a7ae;--color-gray-900:#181d27;--color-neutral-100:#f2f4f7;--color-neutral-200:#eaecf0;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-semibold:600;--tracking-normal:0em;--leading-tight:1.25;--leading-normal:1.5;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-brand-100:#d7e0f5;--color-brand-600:#4147ea;--color-brand-700:#3437ce;--color-brand-900:#2b2f84}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-4{top:calc(var(--spacing)*4)}.right-0{right:calc(var(--spacing)*0)}.right-4{right:calc(var(--spacing)*4)}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-4{bottom:calc(var(--spacing)*4)}.left-0{left:calc(var(--spacing)*0)}.left-4{left:calc(var(--spacing)*4)}.isolate{isolation:isolate}.z-50{z-index:50}.z-\\[99998\\]{z-index:99998}.z-\\[99999\\]{z-index:99999}.z-\\[999999\\]{z-index:999999}.col-span-1{grid-column:span 1/span 1}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mt-1{margin-top:calc(var(--spacing)*1)}.mr-1{margin-right:calc(var(--spacing)*1)}.ml-auto{margin-left:auto}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.h-1{height:calc(var(--spacing)*1)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-\\[55px\\]{height:55px}.h-\\[104px\\]{height:104px}.h-full{height:100%}.h-screen{height:100vh}.max-h-60{max-height:calc(var(--spacing)*60)}.max-h-\\[55px\\]{max-height:55px}.min-h-\\[44px\\]{min-height:44px}.min-h-\\[55px\\]{min-height:55px}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-7{width:calc(var(--spacing)*7)}.w-10{width:calc(var(--spacing)*10)}.w-\\[26px\\]{width:26px}.w-\\[55px\\]{width:55px}.w-auto{width:auto}.w-full{width:100%}.max-w-\\[55px\\]{max-width:55px}.min-w-\\[44px\\]{min-width:44px}.min-w-\\[55px\\]{min-width:55px}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-5{--tw-translate-x:calc(var(--spacing)*5);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.transform-none{transform:none}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\.5{gap:calc(var(--spacing)*2.5)}.gap-3{gap:calc(var(--spacing)*3)}.gap-6{gap:calc(var(--spacing)*6)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-solid{--tw-border-style:solid;border-style:solid}.border-brand-600{border-color:var(--color-brand-600)}.border-neutral-100{border-color:var(--color-neutral-100)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-transparent{border-color:#0000}.bg-brand-100{background-color:var(--color-brand-100)}.bg-brand-600{background-color:var(--color-brand-600)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-gradient-to-tl{--tw-gradient-position:to top left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\.5{padding-inline:calc(var(--spacing)*3.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.text-left{text-align:left}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-\\[12px\\]{--tw-leading:12px;line-height:12px}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-brand-700{color:var(--color-brand-700)}.text-brand-900{color:var(--color-brand-900)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-brand-700:hover{background-color:var(--color-brand-700)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:text-white:hover{color:var(--color-white)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:bg-blue-100:focus{background-color:var(--color-blue-100)}.focus\\:shadow-\\[0px_0px_0px_4px_rgba\\(65\\,109\\,234\\,1\\.00\\)\\]:focus{--tw-shadow:0px 0px 0px 4px var(--tw-shadow-color,#416dea);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-brand-600:focus{--tw-ring-color:var(--color-brand-600)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:ring-offset-white:focus{--tw-ring-offset-color:var(--color-white)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:outline-offset-2:focus{outline-offset:2px}.focus\\:outline-white:focus{outline-color:var(--color-white)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media (min-width:40rem){.sm\\:w-\\[445px\\]{width:445px}}.\\[\\&_\\*\\]\\:\\!cursor-default *{cursor:default!important}.\\[\\&_\\*\\]\\:\\!font-\\[Helvetica\\] *{font-family:Helvetica!important}.\\[\\&_\\*\\]\\:\\!text-base *{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.\\[\\&_\\*\\]\\:\\!leading-normal *{--tw-leading:var(--leading-normal)!important;line-height:var(--leading-normal)!important}.\\[\\&_\\*\\]\\:\\!tracking-normal *{--tw-tracking:var(--tracking-normal)!important;letter-spacing:var(--tracking-normal)!important}}.efl-highlight-links a,.efl-highlight-links button,.efl-highlight-links [role=button],.efl-highlight-links input[type=button],.efl-highlight-links input[type=submit]{outline-offset:2px;border-radius:3px;transition:background-color .3s,color .3s,outline .3s;color:#f7ff00!important;background:#000!important;text-decoration:none!important}.efl-highlight-links a:focus,.efl-highlight-links a:hover,.efl-highlight-links button:focus,.efl-highlight-links button:hover,.efl-highlight-links [role=button]:focus,.efl-highlight-links [role=button]:hover,.efl-highlight-links input[type=button]:focus,.efl-highlight-links input[type=button]:hover,.efl-highlight-links input[type=submit]:focus,.efl-highlight-links input[type=submit]:hover{outline-offset:2px;outline:3px solid #ffd54f;color:#ff3!important;background:#222!important;text-decoration:underline!important}.efl-highlight-links a svg,.efl-highlight-links button svg,.efl-highlight-links [role=button] svg,.efl-highlight-links input[type=button] svg,.efl-highlight-links input[type=submit] svg{fill:#f7ff00!important}.efl-highlight-links a.bg-gradient-to-r,.efl-highlight-links a.bg-gradient-to-l,.efl-highlight-links a.bg-gradient-to-t,.efl-highlight-links a.bg-gradient-to-b,.efl-highlight-links a.bg-gradient-to-br,.efl-highlight-links a.bg-gradient-to-bl,.efl-highlight-links a.bg-gradient-to-tr,.efl-highlight-links a.bg-gradient-to-tl,.efl-highlight-links button.bg-gradient-to-r,.efl-highlight-links button.bg-gradient-to-l,.efl-highlight-links button.bg-gradient-to-t,.efl-highlight-links button.bg-gradient-to-b,.efl-highlight-links button.bg-gradient-to-br,.efl-highlight-links button.bg-gradient-to-bl,.efl-highlight-links button.bg-gradient-to-tr,.efl-highlight-links button.bg-gradient-to-tl{background:#000!important}.efl-highlight-links a.bg-gradient-to-r:hover,.efl-highlight-links a.bg-gradient-to-r:focus,.efl-highlight-links a.bg-gradient-to-l:hover,.efl-highlight-links a.bg-gradient-to-l:focus,.efl-highlight-links a.bg-gradient-to-t:hover,.efl-highlight-links a.bg-gradient-to-t:focus,.efl-highlight-links a.bg-gradient-to-b:hover,.efl-highlight-links a.bg-gradient-to-b:focus,.efl-highlight-links a.bg-gradient-to-br:hover,.efl-highlight-links a.bg-gradient-to-br:focus,.efl-highlight-links a.bg-gradient-to-bl:hover,.efl-highlight-links a.bg-gradient-to-bl:focus,.efl-highlight-links a.bg-gradient-to-tr:hover,.efl-highlight-links a.bg-gradient-to-tr:focus,.efl-highlight-links a.bg-gradient-to-tl:hover,.efl-highlight-links a.bg-gradient-to-tl:focus,.efl-highlight-links button.bg-gradient-to-r:hover,.efl-highlight-links button.bg-gradient-to-r:focus,.efl-highlight-links button.bg-gradient-to-l:hover,.efl-highlight-links button.bg-gradient-to-l:focus,.efl-highlight-links button.bg-gradient-to-t:hover,.efl-highlight-links button.bg-gradient-to-t:focus,.efl-highlight-links button.bg-gradient-to-b:hover,.efl-highlight-links button.bg-gradient-to-b:focus,.efl-highlight-links button.bg-gradient-to-br:hover,.efl-highlight-links button.bg-gradient-to-br:focus,.efl-highlight-links button.bg-gradient-to-bl:hover,.efl-highlight-links button.bg-gradient-to-bl:focus,.efl-highlight-links button.bg-gradient-to-tr:hover,.efl-highlight-links button.bg-gradient-to-tr:focus,.efl-highlight-links button.bg-gradient-to-tl:hover,.efl-highlight-links button.bg-gradient-to-tl:focus{background:#222!important}.efl-cursor-large{cursor:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'3em\' height=\'3em\' viewBox=\'0 0 24 24\'%3E%3C!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --%3E%3Cpath fill=\'currentColor\' d=\'M13.64 21.97a.99.99 0 0 1-1.33-.47l-2.18-4.74l-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1c.24 0 .47.09.64.23l.01-.01l11.49 9.64a1.001 1.001 0 0 1-.44 1.75l-3.16.62l2.2 4.73c.26.5.02 1.09-.48 1.32z\'/%3E%3C/svg%3E"),pointer!important}.efl-alignment-1 p,.efl-alignment-1 h1,.efl-alignment-1 h2,.efl-alignment-1 h3,.efl-alignment-1 h4,.efl-alignment-1 h5,.efl-alignment-1 h6,.efl-alignment-1 li,.efl-alignment-1 span:not(#efl-a11y-widget *),.efl-alignment-1 div:not(#efl-a11y-widget *):not([class*=grid]):not([class*=flex]){text-align:start!important}.efl-alignment-2 p,.efl-alignment-2 h1,.efl-alignment-2 h2,.efl-alignment-2 h3,.efl-alignment-2 h4,.efl-alignment-2 h5,.efl-alignment-2 h6,.efl-alignment-2 li,.efl-alignment-2 span:not(#efl-a11y-widget *),.efl-alignment-2 div:not(#efl-a11y-widget *):not([class*=grid]):not([class*=flex]){text-align:center!important}.efl-alignment-3 p,.efl-alignment-3 h1,.efl-alignment-3 h2,.efl-alignment-3 h3,.efl-alignment-3 h4,.efl-alignment-3 h5,.efl-alignment-3 h6,.efl-alignment-3 li,.efl-alignment-3 span:not(#efl-a11y-widget *),.efl-alignment-3 div:not(#efl-a11y-widget *):not([class*=grid]):not([class*=flex]){text-align:end!important}.efl-read-mode{color:#222;letter-spacing:.12em;word-spacing:.16em;background-color:#f2f3f8;max-width:600px;margin:auto;padding:50px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:1.125rem;line-height:1.75}.efl-read-mode a{color:#0645ad;text-decoration:underline}.efl-read-mode a:hover,.efl-read-mode a:focus{outline-offset:3px;background-color:#cfd8e2;outline:2px dashed #000}.efl-read-mode nav,.efl-read-mode aside,.efl-read-mode .advertisement,.efl-read-mode .popup,.efl-read-mode .background-video{aria-hidden:true;visibility:hidden!important;pointer-events:none!important;width:0!important;height:0!important;position:absolute!important;overflow:hidden!important}.efl-read-mode p,.efl-read-mode li,.efl-read-mode h1,.efl-read-mode h2,.efl-read-mode h3,.efl-read-mode h4{max-width:65ch;margin-bottom:1em}.efl-read-mode p,.efl-read-mode li{letter-spacing:.12em;word-spacing:.16em}.efl-read-mode :focus{outline-offset:2px;outline:2px solid #000}.efl-read-mode img{max-width:100%;box-sizing:border-box!important;background:0 0!important;height:auto!important;display:block!important;position:static!important}.efl-read-mode button,.efl-read-mode a.button,.efl-read-mode input[type=button],.efl-read-mode input[type=submit]{cursor:pointer;min-width:44px;min-height:44px;padding:10px 16px;font-size:1rem}.efl-read-mode button:focus,.efl-read-mode a.button:focus,.efl-read-mode input[type=button]:focus,.efl-read-mode input[type=submit]:focus{outline-offset:2px;outline:2px solid #000}@media (max-width:600px){.efl-read-mode{padding:20px;font-size:1rem}}.efl-readable-font{letter-spacing:.02em!important;word-spacing:.05em!important;font-family:Arial,Verdana,Tahoma,Trebuchet MS,Segoe UI,sans-serif!important;font-size:max(16px,1rem)!important;line-height:1.5!important}.efl-dyslexia-font,.efl-dyslexia-font p,.efl-dyslexia-font h1,.efl-dyslexia-font h2,.efl-dyslexia-font h3,.efl-dyslexia-font h4,.efl-dyslexia-font h5,.efl-dyslexia-font h6,.efl-dyslexia-font span,.efl-dyslexia-font div,.efl-dyslexia-font a,.efl-dyslexia-font li,.efl-dyslexia-font td,.efl-dyslexia-font th,.efl-dyslexia-font label,.efl-dyslexia-font input,.efl-dyslexia-font textarea,.efl-dyslexia-font button,.efl-dyslexia-font select{font-family:Open-Dyslexic,Arial,sans-serif!important}.efl-smart-contrast-low{filter:contrast(50%)!important}.efl-smart-contrast-high{filter:contrast(150%)!important}.efl-brightness-low{filter:brightness(50%)!important}.efl-brightness-high{filter:brightness(150%)!important}.efl-saturation-low{filter:saturate(.5)!important}.efl-saturation-high{filter:saturate(1.5)!important}.efl-invert-color{filter:invert()!important}.efl-monochrome-color{filter:grayscale()!important}.efl-contrast-dark{color:#fff!important;background:#000!important;border-color:#fff!important;transition:all!important}.efl-contrast-light{color:#fff!important;background:#fff!important;border-color:#000!important;transition:all!important}html.efl-contrast-dark,html.efl-contrast-dark :not(#efl-a11y-widget):not(#efl-a11y-widget *),html.efl-contrast-dark body,html.efl-contrast-dark body :not(#efl-a11y-widget):not(#efl-a11y-widget *),html.efl-contrast-dark div,html.efl-contrast-dark p,html.efl-contrast-dark h1,html.efl-contrast-dark h2,html.efl-contrast-dark h3,html.efl-contrast-dark h4,html.efl-contrast-dark h5,html.efl-contrast-dark h6,html.efl-contrast-dark span,html.efl-contrast-dark a,html.efl-contrast-dark button,html.efl-contrast-dark input,html.efl-contrast-dark textarea,html.efl-contrast-dark select{color:#fff!important;background:#000!important;border-color:#fff!important}html.efl-contrast-light,html.efl-contrast-light :not(#efl-a11y-widget):not(#efl-a11y-widget *),html.efl-contrast-light body,html.efl-contrast-light body :not(#efl-a11y-widget):not(#efl-a11y-widget *),html.efl-contrast-light div,html.efl-contrast-light p,html.efl-contrast-light h1,html.efl-contrast-light h2,html.efl-contrast-light h3,html.efl-contrast-light h4,html.efl-contrast-light h5,html.efl-contrast-light h6,html.efl-contrast-light span,html.efl-contrast-light a,html.efl-contrast-light button,html.efl-contrast-light input,html.efl-contrast-light textarea,html.efl-contrast-light select{color:#fff!important;background:#fff!important;border-color:#000!important}.efl-reading-mask,.efl-reading-mask-bottom,.efl-reading-mask-top{pointer-events:none;z-index:2147483640;isolation:isolate;will-change:height;backface-visibility:hidden;background-color:#00000080;width:100%;height:0;margin:auto;position:fixed;left:0;right:0;transform:translateZ(0);filter:none!important;display:block!important}.efl-reading-mask-top{top:0;bottom:auto}.efl-reading-mask-bottom{top:auto;bottom:0}.efl-reading-guide{box-sizing:border-box;z-index:99997;pointer-events:none;isolation:isolate;will-change:top;backface-visibility:hidden;background:#000;border:3px solid #fff300;border-radius:5px;position:fixed;top:20px;left:0;transform:translateZ(0);filter:none!important;width:100%!important;min-width:100%!important;height:12px!important;display:block!important}.efl-highlight-focus a,.efl-highlight-focus button,.efl-highlight-focus input,.efl-highlight-focus textarea,.efl-highlight-focus select,.efl-highlight-focus [tabindex]{outline-offset:4px;border-radius:4px;outline:3px solid #fff;transition:outline .2s ease-in-out;box-shadow:0 0 0 6px #005fcc}.efl-highlight-focus a:hover,.efl-highlight-focus button:hover,.efl-highlight-focus input:hover,.efl-highlight-focus textarea:hover,.efl-highlight-focus select:hover,.efl-highlight-focus [tabindex]:hover{outline-color:#06d}.efl-highlight-focus a:focus,.efl-highlight-focus button:focus,.efl-highlight-focus input:focus,.efl-highlight-focus textarea:focus,.efl-highlight-focus select:focus,.efl-highlight-focus [tabindex]:focus{outline-width:4px;outline-color:#049}.efl-enhanced-focus a:focus,.efl-enhanced-focus button:focus,.efl-enhanced-focus input:focus,.efl-enhanced-focus textarea:focus,.efl-enhanced-focus select:focus,.efl-enhanced-focus [tabindex]:focus,.efl-enhanced-focus [role=button]:focus,.efl-enhanced-focus [role=link]:focus{outline-offset:2px!important;border-radius:4px!important;outline:4px solid #ffbf00!important;transition:all .2s ease-in-out!important;box-shadow:0 0 0 6px #ffbf004d!important}.efl-enhanced-focus a:focus-visible,.efl-enhanced-focus button:focus-visible,.efl-enhanced-focus input:focus-visible,.efl-enhanced-focus textarea:focus-visible,.efl-enhanced-focus select:focus-visible,.efl-enhanced-focus [tabindex]:focus-visible,.efl-enhanced-focus [role=button]:focus-visible,.efl-enhanced-focus [role=link]:focus-visible{outline-offset:2px!important;outline:4px solid #ffbf00!important;box-shadow:0 0 0 6px #ffbf004d!important}.efl-high-contrast-focus a:focus,.efl-high-contrast-focus button:focus,.efl-high-contrast-focus input:focus,.efl-high-contrast-focus textarea:focus,.efl-high-contrast-focus select:focus,.efl-high-contrast-focus [tabindex]:focus,.efl-high-contrast-focus [role=button]:focus,.efl-high-contrast-focus [role=link]:focus{outline-offset:3px!important;border-radius:6px!important;outline:5px solid #fff!important;box-shadow:0 0 0 8px #000,0 0 0 10px #fff!important}.efl-skip-link{color:#fff;z-index:999999;background:#000;border-radius:4px;padding:8px 16px;font-weight:700;text-decoration:none;transition:top .3s;position:absolute;top:-40px;left:6px}.efl-skip-link:focus{outline-offset:2px;outline:3px solid #ffbf00;top:6px}.efl-hide-images img,.efl-hide-images video{visibility:hidden!important}.efl-stop-animation,.efl-stop-animation *{transition:none step-end!important;animation:none!important;transform:none!important}.efl-stop-animation [data-framer-motion],.efl-stop-animation [style*=transform],.efl-stop-animation [style*=opacity],.efl-stop-animation [style*=animation]{transition:none!important;animation:none!important;transform:none!important}.efl-stop-animation .animate-pulse,.efl-stop-animation .animate-ping,.efl-stop-animation .animate-spin,.efl-stop-animation .animate-bounce,.efl-stop-animation svg{animation:none!important}.efl-stop-animation *{animation-name:none!important}html.efl-contrast-dark img:not(#efl-a11y-widget img):not(#efl-a11y-widget * img),html.efl-contrast-light img:not(#efl-a11y-widget img):not(#efl-a11y-widget * img){z-index:999!important;display:inline-block!important;position:relative!important}html.efl-contrast-dark picture img:not(#efl-a11y-widget img):not(#efl-a11y-widget * img),html.efl-contrast-dark figure img:not(#efl-a11y-widget img):not(#efl-a11y-widget * img),html.efl-contrast-light picture img:not(#efl-a11y-widget img):not(#efl-a11y-widget * img),html.efl-contrast-light figure img:not(#efl-a11y-widget img):not(#efl-a11y-widget * img){z-index:999!important;display:block!important;position:relative!important}html.efl-contrast-dark [style*=background-image]:not(#efl-a11y-widget):not(#efl-a11y-widget *),html.efl-contrast-light [style*=background-image]:not(#efl-a11y-widget):not(#efl-a11y-widget *){z-index:998!important;position:relative!important}.efl-custom-tooltip{color:#000;z-index:2147483647;pointer-events:none;word-wrap:break-word;white-space:nowrap;text-overflow:ellipsis;opacity:0;visibility:hidden;will-change:opacity,visibility;background:#fff;border:3px solid #555;border-radius:5px;max-width:280px;padding:16px 20px;font-size:19px;font-weight:500;line-height:1.3;transition:opacity .15s ease-out,visibility .15s ease-out;position:fixed;overflow:hidden;transform:translateZ(0);box-shadow:0 2px 8px #0006;text-align:left!important;text-transform:none!important;letter-spacing:normal!important;word-spacing:normal!important;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif!important}@media (prefers-color-scheme:dark){.efl-custom-tooltip{color:#fff!important;background:#333!important;border-color:#666!important}}.efl-custom-tooltip.show{opacity:1;visibility:visible}html.efl-contrast-dark .efl-custom-tooltip{color:#000!important;background:#fff!important;border-color:#000!important}html.efl-contrast-light .efl-custom-tooltip{color:#fff!important;background:#000!important;border-color:#fff!important}.efl-custom-tooltip[role=tooltip]{aria-live:polite;border-width:2px;min-height:32px}.efl-custom-tooltip[role=tooltip]:focus-within{opacity:1!important;visibility:visible!important}:host,:root{--rem:16}*{box-sizing:border-box}html{scroll-behavior:smooth;font-size:1rem}#efl-a11y-root{z-index:2147483647;direction:ltr;display:block}efl-a11y-widget{z-index:2147483647}.sr-only{clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;overflow:hidden!important}.sr-only:focus{width:auto!important;height:auto!important;padding:inherit!important;margin:inherit!important;clip:auto!important;white-space:inherit!important;position:static!important;overflow:visible!important}@media (prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (prefers-contrast:high){*{border-width:2px!important;outline-width:3px!important}}@media screen and (max-width:768px){#efl-a11y-dialog header{visibility:visible!important;opacity:1!important;z-index:999999!important;flex-shrink:0!important;width:100%!important;min-height:60px!important;display:flex!important;position:sticky!important;top:0!important;transform:none!important}#efl-a11y-dialog{flex-direction:column!important;width:100%!important;height:100vh!important;max-height:100vh!important;display:flex!important;position:fixed!important;inset:0!important;transform:none!important}#efl-a11y-dialog main{-webkit-overflow-scrolling:touch!important;flex:auto!important;overflow-y:auto!important}}@supports (-webkit-touch-callout:none){@media screen and (max-width:768px){#efl-a11y-widget header{backface-visibility:hidden!important;transform:translateZ(0)!important}#efl-a11y-dialog{height:100vh!important;height:-webkit-fill-available!important;position:fixed!important}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}';
  window.config = {
    data: { ...je, ...(window.config?.data || {}) },
    isActive: window.config?.isActive ?? !0,
  };
  class We extends HTMLElement {
    constructor(t) {
      super(),
        n(this, "root", null),
        n(this, "config"),
        (function () {
          if (document.getElementById("open-dyslexic-font-link")) return;
          const t = document.createElement("link");
          (t.id = "open-dyslexic-font-link"),
            (t.rel = "stylesheet"),
            (t.href = "https://fonts.cdnfonts.com/css/open-dyslexic"),
            document.head.appendChild(t);
        })(),
        (this.config = { ...window.config.data, ...t }),
        this.attachShadow({ mode: "open" });
      const e =
        document.getElementById("efl-a11y-styles") ||
        document.createElement("style");
      if (
        (e.id ||
          ((e.id = "efl-a11y-styles"),
          (e.textContent = Ue),
          document.head.appendChild(e)),
        this.shadowRoot)
      ) {
        const t = document.createElement("style");
        (t.textContent = Ue), this.shadowRoot.appendChild(t);
      }
    }
    connectedCallback() {
      this.render();
    }
    disconnectedCallback() {
      this.root?.unmount(), (this.root = null);
    }
    render() {
      if (this.root || !this.shadowRoot) return;
      const t = document.createElement("div");
      (t.id = "efl-a11y-root"),
        (t.className = "efl-a11y-widget"),
        t.addEventListener("mousedown", (t) => t.stopPropagation()),
        this.shadowRoot.appendChild(t);
      const e = a.createElement(
        a.StrictMode,
        {},
        a.createElement(Ke, {
          data: this.config,
          isPreview: !1,
          isOpen: !1,
          zoomLevel: 1,
        })
      );
      (this.root = x.createRoot(t)), this.root.render(e);
    }
  }
  customElements.get("efl-a11y-widget") ||
    customElements.define("efl-a11y-widget", We),
    (window.EflA11y = {
      init: (t) => {
        if (!document.querySelector("efl-a11y-widget")) {
          if (!(t?.isActive ?? window.config.isActive)) return void 0, void 0;
          document.body.appendChild(new We(t?.data));
        }
      },
    });
  const Ye = () => {
    if (!document.querySelector("efl-a11y-widget"))
      return window.config.isActive
        ? (document.body.appendChild(new We()), void 0)
        : (void 0, void 0);
  };
  "loading" === document.readyState
    ? document.addEventListener("DOMContentLoaded", Ye)
    : Ye();
})();
