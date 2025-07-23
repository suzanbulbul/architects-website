var TS = Object.defineProperty;
var CS = (gt, na, we) =>
  na in gt
    ? TS(gt, na, { enumerable: !0, configurable: !0, writable: !0, value: we })
    : (gt[na] = we);
var $e = (gt, na, we) => CS(gt, typeof na != "symbol" ? na + "" : na, we);
(function () {
  "use strict";
  function gt(n) {
    return n &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, "default")
      ? n.default
      : n;
  }
  var na = { exports: {} },
    we = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var uf;
  function w0() {
    if (uf) return we;
    uf = 1;
    var n = Symbol.for("react.transitional.element"),
      l = Symbol.for("react.portal"),
      i = Symbol.for("react.fragment"),
      o = Symbol.for("react.strict_mode"),
      u = Symbol.for("react.profiler"),
      f = Symbol.for("react.consumer"),
      d = Symbol.for("react.context"),
      g = Symbol.for("react.forward_ref"),
      m = Symbol.for("react.suspense"),
      p = Symbol.for("react.memo"),
      b = Symbol.for("react.lazy"),
      w = Symbol.iterator;
    function v(S) {
      return S === null || typeof S != "object"
        ? null
        : ((S = (w && S[w]) || S["@@iterator"]),
          typeof S == "function" ? S : null);
    }
    var C = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      A = Object.assign,
      _ = {};
    function B(S, V, ee) {
      (this.props = S),
        (this.context = V),
        (this.refs = _),
        (this.updater = ee || C);
    }
    (B.prototype.isReactComponent = {}),
      (B.prototype.setState = function (S, V) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, S, V, "setState");
      }),
      (B.prototype.forceUpdate = function (S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      });
    function M() {}
    M.prototype = B.prototype;
    function Q(S, V, ee) {
      (this.props = S),
        (this.context = V),
        (this.refs = _),
        (this.updater = ee || C);
    }
    var P = (Q.prototype = new M());
    (P.constructor = Q), A(P, B.prototype), (P.isPureReactComponent = !0);
    var J = Array.isArray,
      $ = { H: null, A: null, T: null, S: null, V: null },
      W = Object.prototype.hasOwnProperty;
    function ae(S, V, ee, Z, re, Ce) {
      return (
        (ee = Ce.ref),
        {
          $$typeof: n,
          type: S,
          key: V,
          ref: ee !== void 0 ? ee : null,
          props: Ce,
        }
      );
    }
    function I(S, V) {
      return ae(S.type, V, void 0, void 0, void 0, S.props);
    }
    function de(S) {
      return typeof S == "object" && S !== null && S.$$typeof === n;
    }
    function Ee(S) {
      var V = { "=": "=0", ":": "=2" };
      return (
        "$" +
        S.replace(/[=:]/g, function (ee) {
          return V[ee];
        })
      );
    }
    var Re = /\/+/g;
    function ce(S, V) {
      return typeof S == "object" && S !== null && S.key != null
        ? Ee("" + S.key)
        : V.toString(36);
    }
    function Se() {}
    function Te(S) {
      switch (S.status) {
        case "fulfilled":
          return S.value;
        case "rejected":
          throw S.reason;
        default:
          switch (
            (typeof S.status == "string"
              ? S.then(Se, Se)
              : ((S.status = "pending"),
                S.then(
                  function (V) {
                    S.status === "pending" &&
                      ((S.status = "fulfilled"), (S.value = V));
                  },
                  function (V) {
                    S.status === "pending" &&
                      ((S.status = "rejected"), (S.reason = V));
                  }
                )),
            S.status)
          ) {
            case "fulfilled":
              return S.value;
            case "rejected":
              throw S.reason;
          }
      }
      throw S;
    }
    function me(S, V, ee, Z, re) {
      var Ce = typeof S;
      (Ce === "undefined" || Ce === "boolean") && (S = null);
      var pe = !1;
      if (S === null) pe = !0;
      else
        switch (Ce) {
          case "bigint":
          case "string":
          case "number":
            pe = !0;
            break;
          case "object":
            switch (S.$$typeof) {
              case n:
              case l:
                pe = !0;
                break;
              case b:
                return (pe = S._init), me(pe(S._payload), V, ee, Z, re);
            }
        }
      if (pe)
        return (
          (re = re(S)),
          (pe = Z === "" ? "." + ce(S, 0) : Z),
          J(re)
            ? ((ee = ""),
              pe != null && (ee = pe.replace(Re, "$&/") + "/"),
              me(re, V, ee, "", function (ot) {
                return ot;
              }))
            : re != null &&
              (de(re) &&
                (re = I(
                  re,
                  ee +
                    (re.key == null || (S && S.key === re.key)
                      ? ""
                      : ("" + re.key).replace(Re, "$&/") + "/") +
                    pe
                )),
              V.push(re)),
          1
        );
      pe = 0;
      var ze = Z === "" ? "." : Z + ":";
      if (J(S))
        for (var He = 0; He < S.length; He++)
          (Z = S[He]), (Ce = ze + ce(Z, He)), (pe += me(Z, V, ee, Ce, re));
      else if (((He = v(S)), typeof He == "function"))
        for (S = He.call(S), He = 0; !(Z = S.next()).done; )
          (Z = Z.value), (Ce = ze + ce(Z, He++)), (pe += me(Z, V, ee, Ce, re));
      else if (Ce === "object") {
        if (typeof S.then == "function") return me(Te(S), V, ee, Z, re);
        throw (
          ((V = String(S)),
          Error(
            "Objects are not valid as a React child (found: " +
              (V === "[object Object]"
                ? "object with keys {" + Object.keys(S).join(", ") + "}"
                : V) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      }
      return pe;
    }
    function N(S, V, ee) {
      if (S == null) return S;
      var Z = [],
        re = 0;
      return (
        me(S, Z, "", "", function (Ce) {
          return V.call(ee, Ce, re++);
        }),
        Z
      );
    }
    function K(S) {
      if (S._status === -1) {
        var V = S._result;
        (V = V()),
          V.then(
            function (ee) {
              (S._status === 0 || S._status === -1) &&
                ((S._status = 1), (S._result = ee));
            },
            function (ee) {
              (S._status === 0 || S._status === -1) &&
                ((S._status = 2), (S._result = ee));
            }
          ),
          S._status === -1 && ((S._status = 0), (S._result = V));
      }
      if (S._status === 1) return S._result.default;
      throw S._result;
    }
    var Y =
      typeof reportError == "function"
        ? reportError
        : function (S) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var V = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == "object" &&
                  S !== null &&
                  typeof S.message == "string"
                    ? String(S.message)
                    : String(S),
                error: S,
              });
              if (!window.dispatchEvent(V)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", S);
              return;
            }
            console.error(S);
          };
    function ge() {}
    return (
      (we.Children = {
        map: N,
        forEach: function (S, V, ee) {
          N(
            S,
            function () {
              V.apply(this, arguments);
            },
            ee
          );
        },
        count: function (S) {
          var V = 0;
          return (
            N(S, function () {
              V++;
            }),
            V
          );
        },
        toArray: function (S) {
          return (
            N(S, function (V) {
              return V;
            }) || []
          );
        },
        only: function (S) {
          if (!de(S))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return S;
        },
      }),
      (we.Component = B),
      (we.Fragment = i),
      (we.Profiler = u),
      (we.PureComponent = Q),
      (we.StrictMode = o),
      (we.Suspense = m),
      (we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
      (we.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (S) {
          return $.H.useMemoCache(S);
        },
      }),
      (we.cache = function (S) {
        return function () {
          return S.apply(null, arguments);
        };
      }),
      (we.cloneElement = function (S, V, ee) {
        if (S == null)
          throw Error(
            "The argument must be a React element, but you passed " + S + "."
          );
        var Z = A({}, S.props),
          re = S.key,
          Ce = void 0;
        if (V != null)
          for (pe in (V.ref !== void 0 && (Ce = void 0),
          V.key !== void 0 && (re = "" + V.key),
          V))
            !W.call(V, pe) ||
              pe === "key" ||
              pe === "__self" ||
              pe === "__source" ||
              (pe === "ref" && V.ref === void 0) ||
              (Z[pe] = V[pe]);
        var pe = arguments.length - 2;
        if (pe === 1) Z.children = ee;
        else if (1 < pe) {
          for (var ze = Array(pe), He = 0; He < pe; He++)
            ze[He] = arguments[He + 2];
          Z.children = ze;
        }
        return ae(S.type, re, void 0, void 0, Ce, Z);
      }),
      (we.createContext = function (S) {
        return (
          (S = {
            $$typeof: d,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (S.Provider = S),
          (S.Consumer = { $$typeof: f, _context: S }),
          S
        );
      }),
      (we.createElement = function (S, V, ee) {
        var Z,
          re = {},
          Ce = null;
        if (V != null)
          for (Z in (V.key !== void 0 && (Ce = "" + V.key), V))
            W.call(V, Z) &&
              Z !== "key" &&
              Z !== "__self" &&
              Z !== "__source" &&
              (re[Z] = V[Z]);
        var pe = arguments.length - 2;
        if (pe === 1) re.children = ee;
        else if (1 < pe) {
          for (var ze = Array(pe), He = 0; He < pe; He++)
            ze[He] = arguments[He + 2];
          re.children = ze;
        }
        if (S && S.defaultProps)
          for (Z in ((pe = S.defaultProps), pe))
            re[Z] === void 0 && (re[Z] = pe[Z]);
        return ae(S, Ce, void 0, void 0, null, re);
      }),
      (we.createRef = function () {
        return { current: null };
      }),
      (we.forwardRef = function (S) {
        return { $$typeof: g, render: S };
      }),
      (we.isValidElement = de),
      (we.lazy = function (S) {
        return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: K };
      }),
      (we.memo = function (S, V) {
        return { $$typeof: p, type: S, compare: V === void 0 ? null : V };
      }),
      (we.startTransition = function (S) {
        var V = $.T,
          ee = {};
        $.T = ee;
        try {
          var Z = S(),
            re = $.S;
          re !== null && re(ee, Z),
            typeof Z == "object" &&
              Z !== null &&
              typeof Z.then == "function" &&
              Z.then(ge, Y);
        } catch (Ce) {
          Y(Ce);
        } finally {
          $.T = V;
        }
      }),
      (we.unstable_useCacheRefresh = function () {
        return $.H.useCacheRefresh();
      }),
      (we.use = function (S) {
        return $.H.use(S);
      }),
      (we.useActionState = function (S, V, ee) {
        return $.H.useActionState(S, V, ee);
      }),
      (we.useCallback = function (S, V) {
        return $.H.useCallback(S, V);
      }),
      (we.useContext = function (S) {
        return $.H.useContext(S);
      }),
      (we.useDebugValue = function () {}),
      (we.useDeferredValue = function (S, V) {
        return $.H.useDeferredValue(S, V);
      }),
      (we.useEffect = function (S, V, ee) {
        var Z = $.H;
        if (typeof ee == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return Z.useEffect(S, V);
      }),
      (we.useId = function () {
        return $.H.useId();
      }),
      (we.useImperativeHandle = function (S, V, ee) {
        return $.H.useImperativeHandle(S, V, ee);
      }),
      (we.useInsertionEffect = function (S, V) {
        return $.H.useInsertionEffect(S, V);
      }),
      (we.useLayoutEffect = function (S, V) {
        return $.H.useLayoutEffect(S, V);
      }),
      (we.useMemo = function (S, V) {
        return $.H.useMemo(S, V);
      }),
      (we.useOptimistic = function (S, V) {
        return $.H.useOptimistic(S, V);
      }),
      (we.useReducer = function (S, V, ee) {
        return $.H.useReducer(S, V, ee);
      }),
      (we.useRef = function (S) {
        return $.H.useRef(S);
      }),
      (we.useState = function (S) {
        return $.H.useState(S);
      }),
      (we.useSyncExternalStore = function (S, V, ee) {
        return $.H.useSyncExternalStore(S, V, ee);
      }),
      (we.useTransition = function () {
        return $.H.useTransition();
      }),
      (we.version = "19.1.0"),
      we
    );
  }
  var cf;
  function rs() {
    return cf || ((cf = 1), (na.exports = w0())), na.exports;
  }
  var H = rs();
  const U = gt(H);
  var ls = { exports: {} },
    Br = {},
    is = { exports: {} },
    os = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ff;
  function x0() {
    return (
      ff ||
        ((ff = 1),
        (function (n) {
          function l(N, K) {
            var Y = N.length;
            N.push(K);
            e: for (; 0 < Y; ) {
              var ge = (Y - 1) >>> 1,
                S = N[ge];
              if (0 < u(S, K)) (N[ge] = K), (N[Y] = S), (Y = ge);
              else break e;
            }
          }
          function i(N) {
            return N.length === 0 ? null : N[0];
          }
          function o(N) {
            if (N.length === 0) return null;
            var K = N[0],
              Y = N.pop();
            if (Y !== K) {
              N[0] = Y;
              e: for (var ge = 0, S = N.length, V = S >>> 1; ge < V; ) {
                var ee = 2 * (ge + 1) - 1,
                  Z = N[ee],
                  re = ee + 1,
                  Ce = N[re];
                if (0 > u(Z, Y))
                  re < S && 0 > u(Ce, Z)
                    ? ((N[ge] = Ce), (N[re] = Y), (ge = re))
                    : ((N[ge] = Z), (N[ee] = Y), (ge = ee));
                else if (re < S && 0 > u(Ce, Y))
                  (N[ge] = Ce), (N[re] = Y), (ge = re);
                else break e;
              }
            }
            return K;
          }
          function u(N, K) {
            var Y = N.sortIndex - K.sortIndex;
            return Y !== 0 ? Y : N.id - K.id;
          }
          if (
            ((n.unstable_now = void 0),
            typeof performance == "object" &&
              typeof performance.now == "function")
          ) {
            var f = performance;
            n.unstable_now = function () {
              return f.now();
            };
          } else {
            var d = Date,
              g = d.now();
            n.unstable_now = function () {
              return d.now() - g;
            };
          }
          var m = [],
            p = [],
            b = 1,
            w = null,
            v = 3,
            C = !1,
            A = !1,
            _ = !1,
            B = !1,
            M = typeof setTimeout == "function" ? setTimeout : null,
            Q = typeof clearTimeout == "function" ? clearTimeout : null,
            P = typeof setImmediate < "u" ? setImmediate : null;
          function J(N) {
            for (var K = i(p); K !== null; ) {
              if (K.callback === null) o(p);
              else if (K.startTime <= N)
                o(p), (K.sortIndex = K.expirationTime), l(m, K);
              else break;
              K = i(p);
            }
          }
          function $(N) {
            if (((_ = !1), J(N), !A))
              if (i(m) !== null) (A = !0), W || ((W = !0), ce());
              else {
                var K = i(p);
                K !== null && me($, K.startTime - N);
              }
          }
          var W = !1,
            ae = -1,
            I = 5,
            de = -1;
          function Ee() {
            return B ? !0 : !(n.unstable_now() - de < I);
          }
          function Re() {
            if (((B = !1), W)) {
              var N = n.unstable_now();
              de = N;
              var K = !0;
              try {
                e: {
                  (A = !1), _ && ((_ = !1), Q(ae), (ae = -1)), (C = !0);
                  var Y = v;
                  try {
                    t: {
                      for (
                        J(N), w = i(m);
                        w !== null && !(w.expirationTime > N && Ee());

                      ) {
                        var ge = w.callback;
                        if (typeof ge == "function") {
                          (w.callback = null), (v = w.priorityLevel);
                          var S = ge(w.expirationTime <= N);
                          if (
                            ((N = n.unstable_now()), typeof S == "function")
                          ) {
                            (w.callback = S), J(N), (K = !0);
                            break t;
                          }
                          w === i(m) && o(m), J(N);
                        } else o(m);
                        w = i(m);
                      }
                      if (w !== null) K = !0;
                      else {
                        var V = i(p);
                        V !== null && me($, V.startTime - N), (K = !1);
                      }
                    }
                    break e;
                  } finally {
                    (w = null), (v = Y), (C = !1);
                  }
                  K = void 0;
                }
              } finally {
                K ? ce() : (W = !1);
              }
            }
          }
          var ce;
          if (typeof P == "function")
            ce = function () {
              P(Re);
            };
          else if (typeof MessageChannel < "u") {
            var Se = new MessageChannel(),
              Te = Se.port2;
            (Se.port1.onmessage = Re),
              (ce = function () {
                Te.postMessage(null);
              });
          } else
            ce = function () {
              M(Re, 0);
            };
          function me(N, K) {
            ae = M(function () {
              N(n.unstable_now());
            }, K);
          }
          (n.unstable_IdlePriority = 5),
            (n.unstable_ImmediatePriority = 1),
            (n.unstable_LowPriority = 4),
            (n.unstable_NormalPriority = 3),
            (n.unstable_Profiling = null),
            (n.unstable_UserBlockingPriority = 2),
            (n.unstable_cancelCallback = function (N) {
              N.callback = null;
            }),
            (n.unstable_forceFrameRate = function (N) {
              0 > N || 125 < N
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (I = 0 < N ? Math.floor(1e3 / N) : 5);
            }),
            (n.unstable_getCurrentPriorityLevel = function () {
              return v;
            }),
            (n.unstable_next = function (N) {
              switch (v) {
                case 1:
                case 2:
                case 3:
                  var K = 3;
                  break;
                default:
                  K = v;
              }
              var Y = v;
              v = K;
              try {
                return N();
              } finally {
                v = Y;
              }
            }),
            (n.unstable_requestPaint = function () {
              B = !0;
            }),
            (n.unstable_runWithPriority = function (N, K) {
              switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  N = 3;
              }
              var Y = v;
              v = N;
              try {
                return K();
              } finally {
                v = Y;
              }
            }),
            (n.unstable_scheduleCallback = function (N, K, Y) {
              var ge = n.unstable_now();
              switch (
                (typeof Y == "object" && Y !== null
                  ? ((Y = Y.delay),
                    (Y = typeof Y == "number" && 0 < Y ? ge + Y : ge))
                  : (Y = ge),
                N)
              ) {
                case 1:
                  var S = -1;
                  break;
                case 2:
                  S = 250;
                  break;
                case 5:
                  S = 1073741823;
                  break;
                case 4:
                  S = 1e4;
                  break;
                default:
                  S = 5e3;
              }
              return (
                (S = Y + S),
                (N = {
                  id: b++,
                  callback: K,
                  priorityLevel: N,
                  startTime: Y,
                  expirationTime: S,
                  sortIndex: -1,
                }),
                Y > ge
                  ? ((N.sortIndex = Y),
                    l(p, N),
                    i(m) === null &&
                      N === i(p) &&
                      (_ ? (Q(ae), (ae = -1)) : (_ = !0), me($, Y - ge)))
                  : ((N.sortIndex = S),
                    l(m, N),
                    A || C || ((A = !0), W || ((W = !0), ce()))),
                N
              );
            }),
            (n.unstable_shouldYield = Ee),
            (n.unstable_wrapCallback = function (N) {
              var K = v;
              return function () {
                var Y = v;
                v = K;
                try {
                  return N.apply(this, arguments);
                } finally {
                  v = Y;
                }
              };
            });
        })(os)),
      os
    );
  }
  var df;
  function S0() {
    return df || ((df = 1), (is.exports = x0())), is.exports;
  }
  var ss = { exports: {} },
    At = {};
  /**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var hf;
  function E0() {
    if (hf) return At;
    hf = 1;
    var n = rs();
    function l(m) {
      var p = "https://react.dev/errors/" + m;
      if (1 < arguments.length) {
        p += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var b = 2; b < arguments.length; b++)
          p += "&args[]=" + encodeURIComponent(arguments[b]);
      }
      return (
        "Minified React error #" +
        m +
        "; visit " +
        p +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function i() {}
    var o = {
        d: {
          f: i,
          r: function () {
            throw Error(l(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      u = Symbol.for("react.portal");
    function f(m, p, b) {
      var w =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: u,
        key: w == null ? null : "" + w,
        children: m,
        containerInfo: p,
        implementation: b,
      };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(m, p) {
      if (m === "font") return "";
      if (typeof p == "string") return p === "use-credentials" ? p : "";
    }
    return (
      (At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
      (At.createPortal = function (m, p) {
        var b =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
          throw Error(l(299));
        return f(m, p, null, b);
      }),
      (At.flushSync = function (m) {
        var p = d.T,
          b = o.p;
        try {
          if (((d.T = null), (o.p = 2), m)) return m();
        } finally {
          (d.T = p), (o.p = b), o.d.f();
        }
      }),
      (At.preconnect = function (m, p) {
        typeof m == "string" &&
          (p
            ? ((p = p.crossOrigin),
              (p =
                typeof p == "string"
                  ? p === "use-credentials"
                    ? p
                    : ""
                  : void 0))
            : (p = null),
          o.d.C(m, p));
      }),
      (At.prefetchDNS = function (m) {
        typeof m == "string" && o.d.D(m);
      }),
      (At.preinit = function (m, p) {
        if (typeof m == "string" && p && typeof p.as == "string") {
          var b = p.as,
            w = g(b, p.crossOrigin),
            v = typeof p.integrity == "string" ? p.integrity : void 0,
            C = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
          b === "style"
            ? o.d.S(
                m,
                typeof p.precedence == "string" ? p.precedence : void 0,
                { crossOrigin: w, integrity: v, fetchPriority: C }
              )
            : b === "script" &&
              o.d.X(m, {
                crossOrigin: w,
                integrity: v,
                fetchPriority: C,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
              });
        }
      }),
      (At.preinitModule = function (m, p) {
        if (typeof m == "string")
          if (typeof p == "object" && p !== null) {
            if (p.as == null || p.as === "script") {
              var b = g(p.as, p.crossOrigin);
              o.d.M(m, {
                crossOrigin: b,
                integrity:
                  typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
              });
            }
          } else p == null && o.d.M(m);
      }),
      (At.preload = function (m, p) {
        if (
          typeof m == "string" &&
          typeof p == "object" &&
          p !== null &&
          typeof p.as == "string"
        ) {
          var b = p.as,
            w = g(b, p.crossOrigin);
          o.d.L(m, b, {
            crossOrigin: w,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            type: typeof p.type == "string" ? p.type : void 0,
            fetchPriority:
              typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
            referrerPolicy:
              typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
            imageSrcSet:
              typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
            imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
            media: typeof p.media == "string" ? p.media : void 0,
          });
        }
      }),
      (At.preloadModule = function (m, p) {
        if (typeof m == "string")
          if (p) {
            var b = g(p.as, p.crossOrigin);
            o.d.m(m, {
              as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
              crossOrigin: b,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            });
          } else o.d.m(m);
      }),
      (At.requestFormReset = function (m) {
        o.d.r(m);
      }),
      (At.unstable_batchedUpdates = function (m, p) {
        return m(p);
      }),
      (At.useFormState = function (m, p, b) {
        return d.H.useFormState(m, p, b);
      }),
      (At.useFormStatus = function () {
        return d.H.useHostTransitionStatus();
      }),
      (At.version = "19.1.0"),
      At
    );
  }
  var gf;
  function mf() {
    if (gf) return ss.exports;
    gf = 1;
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (l) {
          console.error(l);
        }
    }
    return n(), (ss.exports = E0()), ss.exports;
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var pf;
  function k0() {
    if (pf) return Br;
    pf = 1;
    var n = S0(),
      l = rs(),
      i = mf();
    function o(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
          t += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function u(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function f(e) {
      var t = e,
        a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function d(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function g(e) {
      if (f(e) !== e) throw Error(o(188));
    }
    function m(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = f(e)), t === null)) throw Error(o(188));
        return t !== e ? null : e;
      }
      for (var a = e, r = t; ; ) {
        var s = a.return;
        if (s === null) break;
        var c = s.alternate;
        if (c === null) {
          if (((r = s.return), r !== null)) {
            a = r;
            continue;
          }
          break;
        }
        if (s.child === c.child) {
          for (c = s.child; c; ) {
            if (c === a) return g(s), e;
            if (c === r) return g(s), t;
            c = c.sibling;
          }
          throw Error(o(188));
        }
        if (a.return !== r.return) (a = s), (r = c);
        else {
          for (var h = !1, y = s.child; y; ) {
            if (y === a) {
              (h = !0), (a = s), (r = c);
              break;
            }
            if (y === r) {
              (h = !0), (r = s), (a = c);
              break;
            }
            y = y.sibling;
          }
          if (!h) {
            for (y = c.child; y; ) {
              if (y === a) {
                (h = !0), (a = c), (r = s);
                break;
              }
              if (y === r) {
                (h = !0), (r = c), (a = s);
                break;
              }
              y = y.sibling;
            }
            if (!h) throw Error(o(189));
          }
        }
        if (a.alternate !== r) throw Error(o(190));
      }
      if (a.tag !== 3) throw Error(o(188));
      return a.stateNode.current === a ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var b = Object.assign,
      w = Symbol.for("react.element"),
      v = Symbol.for("react.transitional.element"),
      C = Symbol.for("react.portal"),
      A = Symbol.for("react.fragment"),
      _ = Symbol.for("react.strict_mode"),
      B = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      Q = Symbol.for("react.consumer"),
      P = Symbol.for("react.context"),
      J = Symbol.for("react.forward_ref"),
      $ = Symbol.for("react.suspense"),
      W = Symbol.for("react.suspense_list"),
      ae = Symbol.for("react.memo"),
      I = Symbol.for("react.lazy"),
      de = Symbol.for("react.activity"),
      Ee = Symbol.for("react.memo_cache_sentinel"),
      Re = Symbol.iterator;
    function ce(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Re && e[Re]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var Se = Symbol.for("react.client.reference");
    function Te(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case B:
          return "Profiler";
        case _:
          return "StrictMode";
        case $:
          return "Suspense";
        case W:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            return "Portal";
          case P:
            return (e.displayName || "Context") + ".Provider";
          case Q:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case ae:
            return (
              (t = e.displayName || null), t !== null ? t : Te(e.type) || "Memo"
            );
          case I:
            (t = e._payload), (e = e._init);
            try {
              return Te(e(t));
            } catch {}
        }
      return null;
    }
    var me = Array.isArray,
      N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Y = { pending: !1, data: null, method: null, action: null },
      ge = [],
      S = -1;
    function V(e) {
      return { current: e };
    }
    function ee(e) {
      0 > S || ((e.current = ge[S]), (ge[S] = null), S--);
    }
    function Z(e, t) {
      S++, (ge[S] = e.current), (e.current = t);
    }
    var re = V(null),
      Ce = V(null),
      pe = V(null),
      ze = V(null);
    function He(e, t) {
      switch ((Z(pe, t), Z(Ce, e), Z(re, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? $p(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            (t = $p(t)), (e = Fp(t, e));
          else
            switch (e) {
              case "svg":
                e = 1;
                break;
              case "math":
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      ee(re), Z(re, e);
    }
    function ot() {
      ee(re), ee(Ce), ee(pe);
    }
    function Dt(e) {
      e.memoizedState !== null && Z(ze, e);
      var t = re.current,
        a = Fp(t, e.type);
      t !== a && (Z(Ce, e), Z(re, a));
    }
    function Kt(e) {
      Ce.current === e && (ee(re), ee(Ce)),
        ze.current === e && (ee(ze), (Jl._currentValue = Y));
    }
    var le = Object.prototype.hasOwnProperty,
      Pe = n.unstable_scheduleCallback,
      We = n.unstable_cancelCallback,
      ft = n.unstable_shouldYield,
      rl = n.unstable_requestPaint,
      Zt = n.unstable_now,
      Nh = n.unstable_getCurrentPriorityLevel,
      ll = n.unstable_ImmediatePriority,
      E = n.unstable_UserBlockingPriority,
      z = n.unstable_NormalPriority,
      q = n.unstable_LowPriority,
      ne = n.unstable_IdlePriority,
      te = n.log,
      F = n.unstable_setDisableYieldValue,
      fe = null,
      ke = null;
    function _e(e) {
      if (
        (typeof te == "function" && F(e),
        ke && typeof ke.setStrictMode == "function")
      )
        try {
          ke.setStrictMode(fe, e);
        } catch {}
    }
    var Ke = Math.clz32 ? Math.clz32 : Js,
      Pn = Math.log,
      da = Math.LN2;
    function Js(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((Pn(e) / da) | 0)) | 0;
    }
    var Qa = 256,
      Ka = 4194304;
    function Ta(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
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
          return 64;
        case 128:
          return 128;
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function En(e, t, a) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var s = 0,
        c = e.suspendedLanes,
        h = e.pingedLanes;
      e = e.warmLanes;
      var y = r & 134217727;
      return (
        y !== 0
          ? ((r = y & ~c),
            r !== 0
              ? (s = Ta(r))
              : ((h &= y),
                h !== 0
                  ? (s = Ta(h))
                  : a || ((a = y & ~e), a !== 0 && (s = Ta(a)))))
          : ((y = r & ~c),
            y !== 0
              ? (s = Ta(y))
              : h !== 0
              ? (s = Ta(h))
              : a || ((a = r & ~e), a !== 0 && (s = Ta(a)))),
        s === 0
          ? 0
          : t !== 0 &&
            t !== s &&
            (t & c) === 0 &&
            ((c = s & -s),
            (a = t & -t),
            c >= a || (c === 32 && (a & 4194048) !== 0))
          ? t
          : s
      );
    }
    function kn(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ki(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function zh() {
      var e = Qa;
      return (Qa <<= 1), (Qa & 4194048) === 0 && (Qa = 256), e;
    }
    function Mh() {
      var e = Ka;
      return (Ka <<= 1), (Ka & 62914560) === 0 && (Ka = 4194304), e;
    }
    function Is(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function il(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function gx(e, t, a, r, s, c) {
      var h = e.pendingLanes;
      (e.pendingLanes = a),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= a),
        (e.entangledLanes &= a),
        (e.errorRecoveryDisabledLanes &= a),
        (e.shellSuspendCounter = 0);
      var y = e.entanglements,
        x = e.expirationTimes,
        R = e.hiddenUpdates;
      for (a = h & ~a; 0 < a; ) {
        var j = 31 - Ke(a),
          X = 1 << j;
        (y[j] = 0), (x[j] = -1);
        var D = R[j];
        if (D !== null)
          for (R[j] = null, j = 0; j < D.length; j++) {
            var L = D[j];
            L !== null && (L.lane &= -536870913);
          }
        a &= ~X;
      }
      r !== 0 && Dh(e, r, 0),
        c !== 0 &&
          s === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= c & ~(h & ~t));
    }
    function Dh(e, t, a) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - Ke(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (a & 4194090));
    }
    function Lh(e, t) {
      var a = (e.entangledLanes |= t);
      for (e = e.entanglements; a; ) {
        var r = 31 - Ke(a),
          s = 1 << r;
        (s & t) | (e[r] & t) && (e[r] |= t), (a &= ~s);
      }
    }
    function Ps(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ws(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function _h() {
      var e = K.p;
      return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : g0(e.type));
    }
    function mx(e, t) {
      var a = K.p;
      try {
        return (K.p = e), t();
      } finally {
        K.p = a;
      }
    }
    var Za = Math.random().toString(36).slice(2),
      Ct = "__reactFiber$" + Za,
      Lt = "__reactProps$" + Za,
      Wn = "__reactContainer$" + Za,
      eu = "__reactEvents$" + Za,
      px = "__reactListeners$" + Za,
      bx = "__reactHandles$" + Za,
      Uh = "__reactResources$" + Za,
      ol = "__reactMarker$" + Za;
    function tu(e) {
      delete e[Ct], delete e[Lt], delete e[eu], delete e[px], delete e[bx];
    }
    function er(e) {
      var t = e[Ct];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if ((t = a[Wn] || a[Ct])) {
          if (
            ((a = t.alternate),
            t.child !== null || (a !== null && a.child !== null))
          )
            for (e = Wp(e); e !== null; ) {
              if ((a = e[Ct])) return a;
              e = Wp(e);
            }
          return t;
        }
        (e = a), (a = e.parentNode);
      }
      return null;
    }
    function tr(e) {
      if ((e = e[Ct] || e[Wn])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function sl(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(o(33));
    }
    function ar(e) {
      var t = e[Uh];
      return (
        t ||
          (t = e[Uh] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function bt(e) {
      e[ol] = !0;
    }
    var Hh = new Set(),
      Bh = {};
    function An(e, t) {
      nr(e, t), nr(e + "Capture", t);
    }
    function nr(e, t) {
      for (Bh[e] = t, e = 0; e < t.length; e++) Hh.add(t[e]);
    }
    var yx = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
      ),
      Vh = {},
      jh = {};
    function vx(e) {
      return le.call(jh, e)
        ? !0
        : le.call(Vh, e)
        ? !1
        : yx.test(e)
        ? (jh[e] = !0)
        : ((Vh[e] = !0), !1);
    }
    function Zi(e, t, a) {
      if (vx(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var r = t.toLowerCase().slice(0, 5);
              if (r !== "data-" && r !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, "" + a);
        }
    }
    function $i(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + a);
      }
    }
    function Ca(e, t, a, r) {
      if (r === null) e.removeAttribute(a);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        e.setAttributeNS(t, a, "" + r);
      }
    }
    var au, qh;
    function rr(e) {
      if (au === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          (au = (t && t[1]) || ""),
            (qh =
              -1 <
              a.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
        }
      return (
        `
` +
        au +
        e +
        qh
      );
    }
    var nu = !1;
    function ru(e, t) {
      if (!e || nu) return "";
      nu = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var X = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(X.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(X, []);
                  } catch (L) {
                    var D = L;
                  }
                  Reflect.construct(e, [], X);
                } else {
                  try {
                    X.call();
                  } catch (L) {
                    D = L;
                  }
                  e.call(X.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (L) {
                  D = L;
                }
                (X = e()) &&
                  typeof X.catch == "function" &&
                  X.catch(function () {});
              }
            } catch (L) {
              if (L && D && typeof L.stack == "string")
                return [L.stack, D.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var s = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          "name"
        );
        s &&
          s.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var c = r.DetermineComponentFrameRoot(),
          h = c[0],
          y = c[1];
        if (h && y) {
          var x = h.split(`
`),
            R = y.split(`
`);
          for (
            s = r = 0;
            r < x.length && !x[r].includes("DetermineComponentFrameRoot");

          )
            r++;
          for (
            ;
            s < R.length && !R[s].includes("DetermineComponentFrameRoot");

          )
            s++;
          if (r === x.length || s === R.length)
            for (
              r = x.length - 1, s = R.length - 1;
              1 <= r && 0 <= s && x[r] !== R[s];

            )
              s--;
          for (; 1 <= r && 0 <= s; r--, s--)
            if (x[r] !== R[s]) {
              if (r !== 1 || s !== 1)
                do
                  if ((r--, s--, 0 > s || x[r] !== R[s])) {
                    var j =
                      `
` + x[r].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        j.includes("<anonymous>") &&
                        (j = j.replace("<anonymous>", e.displayName)),
                      j
                    );
                  }
                while (1 <= r && 0 <= s);
              break;
            }
        }
      } finally {
        (nu = !1), (Error.prepareStackTrace = a);
      }
      return (a = e ? e.displayName || e.name : "") ? rr(a) : "";
    }
    function wx(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return rr(e.type);
        case 16:
          return rr("Lazy");
        case 13:
          return rr("Suspense");
        case 19:
          return rr("SuspenseList");
        case 0:
        case 15:
          return ru(e.type, !1);
        case 11:
          return ru(e.type.render, !1);
        case 1:
          return ru(e.type, !0);
        case 31:
          return rr("Activity");
        default:
          return "";
      }
    }
    function Yh(e) {
      try {
        var t = "";
        do (t += wx(e)), (e = e.return);
        while (e);
        return t;
      } catch (a) {
        return (
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack
        );
      }
    }
    function $t(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Gh(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function xx(e) {
      var t = Gh(e) ? "checked" : "value",
        a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof a < "u" &&
        typeof a.get == "function" &&
        typeof a.set == "function"
      ) {
        var s = a.get,
          c = a.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return s.call(this);
            },
            set: function (h) {
              (r = "" + h), c.call(this, h);
            },
          }),
          Object.defineProperty(e, t, { enumerable: a.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (h) {
              r = "" + h;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function Fi(e) {
      e._valueTracker || (e._valueTracker = xx(e));
    }
    function Xh(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(),
        r = "";
      return (
        e && (r = Gh(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== a ? (t.setValue(e), !0) : !1
      );
    }
    function Ji(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Sx = /[\n"\\]/g;
    function Ft(e) {
      return e.replace(Sx, function (t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function lu(e, t, a, r, s, c, h, y) {
      (e.name = ""),
        h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean"
          ? (e.type = h)
          : e.removeAttribute("type"),
        t != null
          ? h === "number"
            ? ((t === 0 && e.value === "") || e.value != t) &&
              (e.value = "" + $t(t))
            : e.value !== "" + $t(t) && (e.value = "" + $t(t))
          : (h !== "submit" && h !== "reset") || e.removeAttribute("value"),
        t != null
          ? iu(e, h, $t(t))
          : a != null
          ? iu(e, h, $t(a))
          : r != null && e.removeAttribute("value"),
        s == null && c != null && (e.defaultChecked = !!c),
        s != null &&
          (e.checked = s && typeof s != "function" && typeof s != "symbol"),
        y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean"
          ? (e.name = "" + $t(y))
          : e.removeAttribute("name");
    }
    function Qh(e, t, a, r, s, c, h, y) {
      if (
        (c != null &&
          typeof c != "function" &&
          typeof c != "symbol" &&
          typeof c != "boolean" &&
          (e.type = c),
        t != null || a != null)
      ) {
        if (!((c !== "submit" && c !== "reset") || t != null)) return;
        (a = a != null ? "" + $t(a) : ""),
          (t = t != null ? "" + $t(t) : a),
          y || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r = r ?? s),
        (r = typeof r != "function" && typeof r != "symbol" && !!r),
        (e.checked = y ? e.checked : !!r),
        (e.defaultChecked = !!r),
        h != null &&
          typeof h != "function" &&
          typeof h != "symbol" &&
          typeof h != "boolean" &&
          (e.name = h);
    }
    function iu(e, t, a) {
      (t === "number" && Ji(e.ownerDocument) === e) ||
        e.defaultValue === "" + a ||
        (e.defaultValue = "" + a);
    }
    function lr(e, t, a, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var s = 0; s < a.length; s++) t["$" + a[s]] = !0;
        for (a = 0; a < e.length; a++)
          (s = t.hasOwnProperty("$" + e[a].value)),
            e[a].selected !== s && (e[a].selected = s),
            s && r && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + $t(a), t = null, s = 0; s < e.length; s++) {
          if (e[s].value === a) {
            (e[s].selected = !0), r && (e[s].defaultSelected = !0);
            return;
          }
          t !== null || e[s].disabled || (t = e[s]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Kh(e, t, a) {
      if (
        t != null &&
        ((t = "" + $t(t)), t !== e.value && (e.value = t), a == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + $t(a) : "";
    }
    function Zh(e, t, a, r) {
      if (t == null) {
        if (r != null) {
          if (a != null) throw Error(o(92));
          if (me(r)) {
            if (1 < r.length) throw Error(o(93));
            r = r[0];
          }
          a = r;
        }
        a == null && (a = ""), (t = a);
      }
      (a = $t(t)),
        (e.defaultValue = a),
        (r = e.textContent),
        r === a && r !== "" && r !== null && (e.value = r);
    }
    function ir(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Ex = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function $h(e, t, a) {
      var r = t.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === ""
        ? r
          ? e.setProperty(t, "")
          : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
        : r
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Ex.has(t)
        ? t === "float"
          ? (e.cssFloat = a)
          : (e[t] = ("" + a).trim())
        : (e[t] = a + "px");
    }
    function Fh(e, t, a) {
      if (t != null && typeof t != "object") throw Error(o(62));
      if (((e = e.style), a != null)) {
        for (var r in a)
          !a.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf("--") === 0
              ? e.setProperty(r, "")
              : r === "float"
              ? (e.cssFloat = "")
              : (e[r] = ""));
        for (var s in t)
          (r = t[s]), t.hasOwnProperty(s) && a[s] !== r && $h(e, s, r);
      } else for (var c in t) t.hasOwnProperty(c) && $h(e, c, t[c]);
    }
    function ou(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
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
    var kx = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      Ax =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ii(e) {
      return Ax.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
    }
    var su = null;
    function uu(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var or = null,
      sr = null;
    function Jh(e) {
      var t = tr(e);
      if (t && (e = t.stateNode)) {
        var a = e[Lt] || null;
        e: switch (((e = t.stateNode), t.type)) {
          case "input":
            if (
              (lu(
                e,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name
              ),
              (t = a.name),
              a.type === "radio" && t != null)
            ) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (
                a = a.querySelectorAll(
                  'input[name="' + Ft("" + t) + '"][type="radio"]'
                ),
                  t = 0;
                t < a.length;
                t++
              ) {
                var r = a[t];
                if (r !== e && r.form === e.form) {
                  var s = r[Lt] || null;
                  if (!s) throw Error(o(90));
                  lu(
                    r,
                    s.value,
                    s.defaultValue,
                    s.defaultValue,
                    s.checked,
                    s.defaultChecked,
                    s.type,
                    s.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                (r = a[t]), r.form === e.form && Xh(r);
            }
            break e;
          case "textarea":
            Kh(e, a.value, a.defaultValue);
            break e;
          case "select":
            (t = a.value), t != null && lr(e, !!a.multiple, t, !1);
        }
      }
    }
    var cu = !1;
    function Ih(e, t, a) {
      if (cu) return e(t, a);
      cu = !0;
      try {
        var r = e(t);
        return r;
      } finally {
        if (
          ((cu = !1),
          (or !== null || sr !== null) &&
            (Ho(), or && ((t = or), (e = sr), (sr = or = null), Jh(t), e)))
        )
          for (t = 0; t < e.length; t++) Jh(e[t]);
      }
    }
    function ul(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var r = a[Lt] || null;
      if (r === null) return null;
      a = r[t];
      e: switch (t) {
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
            ((e = e.type),
            (r = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function") throw Error(o(231, t, typeof a));
      return a;
    }
    var Oa = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      fu = !1;
    if (Oa)
      try {
        var cl = {};
        Object.defineProperty(cl, "passive", {
          get: function () {
            fu = !0;
          },
        }),
          window.addEventListener("test", cl, cl),
          window.removeEventListener("test", cl, cl);
      } catch {
        fu = !1;
      }
    var $a = null,
      du = null,
      Pi = null;
    function Ph() {
      if (Pi) return Pi;
      var e,
        t = du,
        a = t.length,
        r,
        s = "value" in $a ? $a.value : $a.textContent,
        c = s.length;
      for (e = 0; e < a && t[e] === s[e]; e++);
      var h = a - e;
      for (r = 1; r <= h && t[a - r] === s[c - r]; r++);
      return (Pi = s.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Wi(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function eo() {
      return !0;
    }
    function Wh() {
      return !1;
    }
    function _t(e) {
      function t(a, r, s, c, h) {
        (this._reactName = a),
          (this._targetInst = s),
          (this.type = r),
          (this.nativeEvent = c),
          (this.target = h),
          (this.currentTarget = null);
        for (var y in e)
          e.hasOwnProperty(y) && ((a = e[y]), (this[y] = a ? a(c) : c[y]));
        return (
          (this.isDefaultPrevented = (
            c.defaultPrevented != null
              ? c.defaultPrevented
              : c.returnValue === !1
          )
            ? eo
            : Wh),
          (this.isPropagationStopped = Wh),
          this
        );
      }
      return (
        b(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a &&
              (a.preventDefault
                ? a.preventDefault()
                : typeof a.returnValue != "unknown" && (a.returnValue = !1),
              (this.isDefaultPrevented = eo));
          },
          stopPropagation: function () {
            var a = this.nativeEvent;
            a &&
              (a.stopPropagation
                ? a.stopPropagation()
                : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
              (this.isPropagationStopped = eo));
          },
          persist: function () {},
          isPersistent: eo,
        }),
        t
      );
    }
    var Tn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      to = _t(Tn),
      fl = b({}, Tn, { view: 0, detail: 0 }),
      Tx = _t(fl),
      hu,
      gu,
      dl,
      ao = b({}, fl, {
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
        getModifierState: pu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== dl &&
                (dl && e.type === "mousemove"
                  ? ((hu = e.screenX - dl.screenX),
                    (gu = e.screenY - dl.screenY))
                  : (gu = hu = 0),
                (dl = e)),
              hu);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : gu;
        },
      }),
      eg = _t(ao),
      Cx = b({}, ao, { dataTransfer: 0 }),
      Ox = _t(Cx),
      Rx = b({}, fl, { relatedTarget: 0 }),
      mu = _t(Rx),
      Nx = b({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      zx = _t(Nx),
      Mx = b({}, Tn, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Dx = _t(Mx),
      Lx = b({}, Tn, { data: 0 }),
      tg = _t(Lx),
      _x = {
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
      Ux = {
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
      Hx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Bx(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Hx[e])
        ? !!t[e]
        : !1;
    }
    function pu() {
      return Bx;
    }
    var Vx = b({}, fl, {
        key: function (e) {
          if (e.key) {
            var t = _x[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? Ux[e.keyCode] || "Unidentified"
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
        getModifierState: pu,
        charCode: function (e) {
          return e.type === "keypress" ? Wi(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? Wi(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
        },
      }),
      jx = _t(Vx),
      qx = b({}, ao, {
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
      }),
      ag = _t(qx),
      Yx = b({}, fl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: pu,
      }),
      Gx = _t(Yx),
      Xx = b({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Qx = _t(Xx),
      Kx = b({}, ao, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Zx = _t(Kx),
      $x = b({}, Tn, { newState: 0, oldState: 0 }),
      Fx = _t($x),
      Jx = [9, 13, 27, 32],
      bu = Oa && "CompositionEvent" in window,
      hl = null;
    Oa && "documentMode" in document && (hl = document.documentMode);
    var Ix = Oa && "TextEvent" in window && !hl,
      ng = Oa && (!bu || (hl && 8 < hl && 11 >= hl)),
      rg = " ",
      lg = !1;
    function ig(e, t) {
      switch (e) {
        case "keyup":
          return Jx.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function og(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var ur = !1;
    function Px(e, t) {
      switch (e) {
        case "compositionend":
          return og(t);
        case "keypress":
          return t.which !== 32 ? null : ((lg = !0), rg);
        case "textInput":
          return (e = t.data), e === rg && lg ? null : e;
        default:
          return null;
      }
    }
    function Wx(e, t) {
      if (ur)
        return e === "compositionend" || (!bu && ig(e, t))
          ? ((e = Ph()), (Pi = du = $a = null), (ur = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ng && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var e2 = {
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
    function sg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!e2[e.type] : t === "textarea";
    }
    function ug(e, t, a, r) {
      or ? (sr ? sr.push(r) : (sr = [r])) : (or = r),
        (t = Go(t, "onChange")),
        0 < t.length &&
          ((a = new to("onChange", "change", null, a, r)),
          e.push({ event: a, listeners: t }));
    }
    var gl = null,
      ml = null;
    function t2(e) {
      Gp(e, 0);
    }
    function no(e) {
      var t = sl(e);
      if (Xh(t)) return e;
    }
    function cg(e, t) {
      if (e === "change") return t;
    }
    var fg = !1;
    if (Oa) {
      var yu;
      if (Oa) {
        var vu = "oninput" in document;
        if (!vu) {
          var dg = document.createElement("div");
          dg.setAttribute("oninput", "return;"),
            (vu = typeof dg.oninput == "function");
        }
        yu = vu;
      } else yu = !1;
      fg = yu && (!document.documentMode || 9 < document.documentMode);
    }
    function hg() {
      gl && (gl.detachEvent("onpropertychange", gg), (ml = gl = null));
    }
    function gg(e) {
      if (e.propertyName === "value" && no(ml)) {
        var t = [];
        ug(t, ml, e, uu(e)), Ih(t2, t);
      }
    }
    function a2(e, t, a) {
      e === "focusin"
        ? (hg(), (gl = t), (ml = a), gl.attachEvent("onpropertychange", gg))
        : e === "focusout" && hg();
    }
    function n2(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return no(ml);
    }
    function r2(e, t) {
      if (e === "click") return no(t);
    }
    function l2(e, t) {
      if (e === "input" || e === "change") return no(t);
    }
    function i2(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Vt = typeof Object.is == "function" ? Object.is : i2;
    function pl(e, t) {
      if (Vt(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var a = Object.keys(e),
        r = Object.keys(t);
      if (a.length !== r.length) return !1;
      for (r = 0; r < a.length; r++) {
        var s = a[r];
        if (!le.call(t, s) || !Vt(e[s], t[s])) return !1;
      }
      return !0;
    }
    function mg(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function pg(e, t) {
      var a = mg(e);
      e = 0;
      for (var r; a; ) {
        if (a.nodeType === 3) {
          if (((r = e + a.textContent.length), e <= t && r >= t))
            return { node: a, offset: t - e };
          e = r;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = mg(a);
      }
    }
    function bg(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? bg(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function yg(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Ji(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Ji(e.document);
      }
      return t;
    }
    function wu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    var o2 = Oa && "documentMode" in document && 11 >= document.documentMode,
      cr = null,
      xu = null,
      bl = null,
      Su = !1;
    function vg(e, t, a) {
      var r =
        a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Su ||
        cr == null ||
        cr !== Ji(r) ||
        ((r = cr),
        "selectionStart" in r && wu(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (bl && pl(bl, r)) ||
          ((bl = r),
          (r = Go(xu, "onSelect")),
          0 < r.length &&
            ((t = new to("onSelect", "select", null, t, a)),
            e.push({ event: t, listeners: r }),
            (t.target = cr))));
    }
    function Cn(e, t) {
      var a = {};
      return (
        (a[e.toLowerCase()] = t.toLowerCase()),
        (a["Webkit" + e] = "webkit" + t),
        (a["Moz" + e] = "moz" + t),
        a
      );
    }
    var fr = {
        animationend: Cn("Animation", "AnimationEnd"),
        animationiteration: Cn("Animation", "AnimationIteration"),
        animationstart: Cn("Animation", "AnimationStart"),
        transitionrun: Cn("Transition", "TransitionRun"),
        transitionstart: Cn("Transition", "TransitionStart"),
        transitioncancel: Cn("Transition", "TransitionCancel"),
        transitionend: Cn("Transition", "TransitionEnd"),
      },
      Eu = {},
      wg = {};
    Oa &&
      ((wg = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete fr.animationend.animation,
        delete fr.animationiteration.animation,
        delete fr.animationstart.animation),
      "TransitionEvent" in window || delete fr.transitionend.transition);
    function On(e) {
      if (Eu[e]) return Eu[e];
      if (!fr[e]) return e;
      var t = fr[e],
        a;
      for (a in t) if (t.hasOwnProperty(a) && a in wg) return (Eu[e] = t[a]);
      return e;
    }
    var xg = On("animationend"),
      Sg = On("animationiteration"),
      Eg = On("animationstart"),
      s2 = On("transitionrun"),
      u2 = On("transitionstart"),
      c2 = On("transitioncancel"),
      kg = On("transitionend"),
      Ag = new Map(),
      ku =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    ku.push("scrollEnd");
    function ia(e, t) {
      Ag.set(e, t), An(t, [e]);
    }
    var Tg = new WeakMap();
    function Jt(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Tg.get(e);
        return a !== void 0
          ? a
          : ((t = { value: e, source: t, stack: Yh(t) }), Tg.set(e, t), t);
      }
      return { value: e, source: t, stack: Yh(t) };
    }
    var It = [],
      dr = 0,
      Au = 0;
    function ro() {
      for (var e = dr, t = (Au = dr = 0); t < e; ) {
        var a = It[t];
        It[t++] = null;
        var r = It[t];
        It[t++] = null;
        var s = It[t];
        It[t++] = null;
        var c = It[t];
        if (((It[t++] = null), r !== null && s !== null)) {
          var h = r.pending;
          h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
            (r.pending = s);
        }
        c !== 0 && Cg(a, s, c);
      }
    }
    function lo(e, t, a, r) {
      (It[dr++] = e),
        (It[dr++] = t),
        (It[dr++] = a),
        (It[dr++] = r),
        (Au |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r);
    }
    function Tu(e, t, a, r) {
      return lo(e, t, a, r), io(e);
    }
    function hr(e, t) {
      return lo(e, null, null, t), io(e);
    }
    function Cg(e, t, a) {
      e.lanes |= a;
      var r = e.alternate;
      r !== null && (r.lanes |= a);
      for (var s = !1, c = e.return; c !== null; )
        (c.childLanes |= a),
          (r = c.alternate),
          r !== null && (r.childLanes |= a),
          c.tag === 22 &&
            ((e = c.stateNode), e === null || e._visibility & 1 || (s = !0)),
          (e = c),
          (c = c.return);
      return e.tag === 3
        ? ((c = e.stateNode),
          s &&
            t !== null &&
            ((s = 31 - Ke(a)),
            (e = c.hiddenUpdates),
            (r = e[s]),
            r === null ? (e[s] = [t]) : r.push(t),
            (t.lane = a | 536870912)),
          c)
        : null;
    }
    function io(e) {
      if (50 < Yl) throw ((Yl = 0), (Mc = null), Error(o(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var gr = {};
    function f2(e, t, a, r) {
      (this.tag = e),
        (this.key = a),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function jt(e, t, a, r) {
      return new f2(e, t, a, r);
    }
    function Cu(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Ra(e, t) {
      var a = e.alternate;
      return (
        a === null
          ? ((a = jt(e.tag, t, e.key, e.mode)),
            (a.elementType = e.elementType),
            (a.type = e.type),
            (a.stateNode = e.stateNode),
            (a.alternate = e),
            (e.alternate = a))
          : ((a.pendingProps = t),
            (a.type = e.type),
            (a.flags = 0),
            (a.subtreeFlags = 0),
            (a.deletions = null)),
        (a.flags = e.flags & 65011712),
        (a.childLanes = e.childLanes),
        (a.lanes = e.lanes),
        (a.child = e.child),
        (a.memoizedProps = e.memoizedProps),
        (a.memoizedState = e.memoizedState),
        (a.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (a.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (a.sibling = e.sibling),
        (a.index = e.index),
        (a.ref = e.ref),
        (a.refCleanup = e.refCleanup),
        a
      );
    }
    function Og(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return (
        a === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = a.childLanes),
            (e.lanes = a.lanes),
            (e.child = a.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = a.memoizedProps),
            (e.memoizedState = a.memoizedState),
            (e.updateQueue = a.updateQueue),
            (e.type = a.type),
            (t = a.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function oo(e, t, a, r, s, c) {
      var h = 0;
      if (((r = e), typeof e == "function")) Cu(e) && (h = 1);
      else if (typeof e == "string")
        h = hS(e, a, re.current)
          ? 26
          : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
      else
        e: switch (e) {
          case de:
            return (
              (e = jt(31, a, t, s)), (e.elementType = de), (e.lanes = c), e
            );
          case A:
            return Rn(a.children, s, c, t);
          case _:
            (h = 8), (s |= 24);
            break;
          case B:
            return (
              (e = jt(12, a, t, s | 2)), (e.elementType = B), (e.lanes = c), e
            );
          case $:
            return (e = jt(13, a, t, s)), (e.elementType = $), (e.lanes = c), e;
          case W:
            return (e = jt(19, a, t, s)), (e.elementType = W), (e.lanes = c), e;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case M:
                case P:
                  h = 10;
                  break e;
                case Q:
                  h = 9;
                  break e;
                case J:
                  h = 11;
                  break e;
                case ae:
                  h = 14;
                  break e;
                case I:
                  (h = 16), (r = null);
                  break e;
              }
            (h = 29),
              (a = Error(o(130, e === null ? "null" : typeof e, ""))),
              (r = null);
        }
      return (
        (t = jt(h, a, t, s)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = c),
        t
      );
    }
    function Rn(e, t, a, r) {
      return (e = jt(7, e, r, t)), (e.lanes = a), e;
    }
    function Ou(e, t, a) {
      return (e = jt(6, e, null, t)), (e.lanes = a), e;
    }
    function Ru(e, t, a) {
      return (
        (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = a),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var mr = [],
      pr = 0,
      so = null,
      uo = 0,
      Pt = [],
      Wt = 0,
      Nn = null,
      Na = 1,
      za = "";
    function zn(e, t) {
      (mr[pr++] = uo), (mr[pr++] = so), (so = e), (uo = t);
    }
    function Rg(e, t, a) {
      (Pt[Wt++] = Na), (Pt[Wt++] = za), (Pt[Wt++] = Nn), (Nn = e);
      var r = Na;
      e = za;
      var s = 32 - Ke(r) - 1;
      (r &= ~(1 << s)), (a += 1);
      var c = 32 - Ke(t) + s;
      if (30 < c) {
        var h = s - (s % 5);
        (c = (r & ((1 << h) - 1)).toString(32)),
          (r >>= h),
          (s -= h),
          (Na = (1 << (32 - Ke(t) + s)) | (a << s) | r),
          (za = c + e);
      } else (Na = (1 << c) | (a << s) | r), (za = e);
    }
    function Nu(e) {
      e.return !== null && (zn(e, 1), Rg(e, 1, 0));
    }
    function zu(e) {
      for (; e === so; )
        (so = mr[--pr]), (mr[pr] = null), (uo = mr[--pr]), (mr[pr] = null);
      for (; e === Nn; )
        (Nn = Pt[--Wt]),
          (Pt[Wt] = null),
          (za = Pt[--Wt]),
          (Pt[Wt] = null),
          (Na = Pt[--Wt]),
          (Pt[Wt] = null);
    }
    var zt = null,
      et = null,
      Ve = !1,
      Mn = null,
      ha = !1,
      Mu = Error(o(519));
    function Dn(e) {
      var t = Error(o(418, ""));
      throw (wl(Jt(t, e)), Mu);
    }
    function Ng(e) {
      var t = e.stateNode,
        a = e.type,
        r = e.memoizedProps;
      switch (((t[Ct] = e), (t[Lt] = r), a)) {
        case "dialog":
          Le("cancel", t), Le("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Le("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Xl.length; a++) Le(Xl[a], t);
          break;
        case "source":
          Le("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Le("error", t), Le("load", t);
          break;
        case "details":
          Le("toggle", t);
          break;
        case "input":
          Le("invalid", t),
            Qh(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            ),
            Fi(t);
          break;
        case "select":
          Le("invalid", t);
          break;
        case "textarea":
          Le("invalid", t), Zh(t, r.value, r.defaultValue, r.children), Fi(t);
      }
      (a = r.children),
        (typeof a != "string" &&
          typeof a != "number" &&
          typeof a != "bigint") ||
        t.textContent === "" + a ||
        r.suppressHydrationWarning === !0 ||
        Zp(t.textContent, a)
          ? (r.popover != null && (Le("beforetoggle", t), Le("toggle", t)),
            r.onScroll != null && Le("scroll", t),
            r.onScrollEnd != null && Le("scrollend", t),
            r.onClick != null && (t.onclick = Xo),
            (t = !0))
          : (t = !1),
        t || Dn(e);
    }
    function zg(e) {
      for (zt = e.return; zt; )
        switch (zt.tag) {
          case 5:
          case 13:
            ha = !1;
            return;
          case 27:
          case 3:
            ha = !0;
            return;
          default:
            zt = zt.return;
        }
    }
    function yl(e) {
      if (e !== zt) return !1;
      if (!Ve) return zg(e), (Ve = !0), !1;
      var t = e.tag,
        a;
      if (
        ((a = t !== 3 && t !== 27) &&
          ((a = t === 5) &&
            ((a = e.type),
            (a =
              !(a !== "form" && a !== "button") ||
              $c(e.type, e.memoizedProps))),
          (a = !a)),
        a && et && Dn(e),
        zg(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(o(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8)
              if (((a = e.data), a === "/$")) {
                if (t === 0) {
                  et = sa(e.nextSibling);
                  break e;
                }
                t--;
              } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
            e = e.nextSibling;
          }
          et = null;
        }
      } else
        t === 27
          ? ((t = et),
            fn(e.type) ? ((e = Pc), (Pc = null), (et = e)) : (et = t))
          : (et = zt ? sa(e.stateNode.nextSibling) : null);
      return !0;
    }
    function vl() {
      (et = zt = null), (Ve = !1);
    }
    function Mg() {
      var e = Mn;
      return (
        e !== null &&
          (Bt === null ? (Bt = e) : Bt.push.apply(Bt, e), (Mn = null)),
        e
      );
    }
    function wl(e) {
      Mn === null ? (Mn = [e]) : Mn.push(e);
    }
    var Du = V(null),
      Ln = null,
      Ma = null;
    function Fa(e, t, a) {
      Z(Du, t._currentValue), (t._currentValue = a);
    }
    function Da(e) {
      (e._currentValue = Du.current), ee(Du);
    }
    function Lu(e, t, a) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
            : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === a)
        )
          break;
        e = e.return;
      }
    }
    function _u(e, t, a, r) {
      var s = e.child;
      for (s !== null && (s.return = e); s !== null; ) {
        var c = s.dependencies;
        if (c !== null) {
          var h = s.child;
          c = c.firstContext;
          e: for (; c !== null; ) {
            var y = c;
            c = s;
            for (var x = 0; x < t.length; x++)
              if (y.context === t[x]) {
                (c.lanes |= a),
                  (y = c.alternate),
                  y !== null && (y.lanes |= a),
                  Lu(c.return, a, e),
                  r || (h = null);
                break e;
              }
            c = y.next;
          }
        } else if (s.tag === 18) {
          if (((h = s.return), h === null)) throw Error(o(341));
          (h.lanes |= a),
            (c = h.alternate),
            c !== null && (c.lanes |= a),
            Lu(h, a, e),
            (h = null);
        } else h = s.child;
        if (h !== null) h.return = s;
        else
          for (h = s; h !== null; ) {
            if (h === e) {
              h = null;
              break;
            }
            if (((s = h.sibling), s !== null)) {
              (s.return = h.return), (h = s);
              break;
            }
            h = h.return;
          }
        s = h;
      }
    }
    function xl(e, t, a, r) {
      e = null;
      for (var s = t, c = !1; s !== null; ) {
        if (!c) {
          if ((s.flags & 524288) !== 0) c = !0;
          else if ((s.flags & 262144) !== 0) break;
        }
        if (s.tag === 10) {
          var h = s.alternate;
          if (h === null) throw Error(o(387));
          if (((h = h.memoizedProps), h !== null)) {
            var y = s.type;
            Vt(s.pendingProps.value, h.value) ||
              (e !== null ? e.push(y) : (e = [y]));
          }
        } else if (s === ze.current) {
          if (((h = s.alternate), h === null)) throw Error(o(387));
          h.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
            (e !== null ? e.push(Jl) : (e = [Jl]));
        }
        s = s.return;
      }
      e !== null && _u(t, e, a, r), (t.flags |= 262144);
    }
    function co(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Vt(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function _n(e) {
      (Ln = e),
        (Ma = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null);
    }
    function Ot(e) {
      return Dg(Ln, e);
    }
    function fo(e, t) {
      return Ln === null && _n(e), Dg(e, t);
    }
    function Dg(e, t) {
      var a = t._currentValue;
      if (((t = { context: t, memoizedValue: a, next: null }), Ma === null)) {
        if (e === null) throw Error(o(308));
        (Ma = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else Ma = Ma.next = t;
      return a;
    }
    var d2 =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (a, r) {
                    e.push(r);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (a) {
                    return a();
                  });
              };
            },
      h2 = n.unstable_scheduleCallback,
      g2 = n.unstable_NormalPriority,
      dt = {
        $$typeof: P,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Uu() {
      return { controller: new d2(), data: new Map(), refCount: 0 };
    }
    function Sl(e) {
      e.refCount--,
        e.refCount === 0 &&
          h2(g2, function () {
            e.controller.abort();
          });
    }
    var El = null,
      Hu = 0,
      br = 0,
      yr = null;
    function m2(e, t) {
      if (El === null) {
        var a = (El = []);
        (Hu = 0),
          (br = Vc()),
          (yr = {
            status: "pending",
            value: void 0,
            then: function (r) {
              a.push(r);
            },
          });
      }
      return Hu++, t.then(Lg, Lg), t;
    }
    function Lg() {
      if (--Hu === 0 && El !== null) {
        yr !== null && (yr.status = "fulfilled");
        var e = El;
        (El = null), (br = 0), (yr = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function p2(e, t) {
      var a = [],
        r = {
          status: "pending",
          value: null,
          reason: null,
          then: function (s) {
            a.push(s);
          },
        };
      return (
        e.then(
          function () {
            (r.status = "fulfilled"), (r.value = t);
            for (var s = 0; s < a.length; s++) (0, a[s])(t);
          },
          function (s) {
            for (r.status = "rejected", r.reason = s, s = 0; s < a.length; s++)
              (0, a[s])(void 0);
          }
        ),
        r
      );
    }
    var _g = N.S;
    N.S = function (e, t) {
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        m2(e, t),
        _g !== null && _g(e, t);
    };
    var Un = V(null);
    function Bu() {
      var e = Un.current;
      return e !== null ? e : Ze.pooledCache;
    }
    function ho(e, t) {
      t === null ? Z(Un, Un.current) : Z(Un, t.pool);
    }
    function Ug() {
      var e = Bu();
      return e === null ? null : { parent: dt._currentValue, pool: e };
    }
    var kl = Error(o(460)),
      Hg = Error(o(474)),
      go = Error(o(542)),
      Vu = { then: function () {} };
    function Bg(e) {
      return (e = e.status), e === "fulfilled" || e === "rejected";
    }
    function mo() {}
    function Vg(e, t, a) {
      switch (
        ((a = e[a]),
        a === void 0 ? e.push(t) : a !== t && (t.then(mo, mo), (t = a)),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw ((e = t.reason), qg(e), e);
        default:
          if (typeof t.status == "string") t.then(mo, mo);
          else {
            if (((e = Ze), e !== null && 100 < e.shellSuspendCounter))
              throw Error(o(482));
            (e = t),
              (e.status = "pending"),
              e.then(
                function (r) {
                  if (t.status === "pending") {
                    var s = t;
                    (s.status = "fulfilled"), (s.value = r);
                  }
                },
                function (r) {
                  if (t.status === "pending") {
                    var s = t;
                    (s.status = "rejected"), (s.reason = r);
                  }
                }
              );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw ((e = t.reason), qg(e), e);
          }
          throw ((Al = t), kl);
      }
    }
    var Al = null;
    function jg() {
      if (Al === null) throw Error(o(459));
      var e = Al;
      return (Al = null), e;
    }
    function qg(e) {
      if (e === kl || e === go) throw Error(o(483));
    }
    var Ja = !1;
    function ju(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function qu(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function Ia(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Pa(e, t, a) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), (je & 2) !== 0)) {
        var s = r.pending;
        return (
          s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
          (r.pending = t),
          (t = io(e)),
          Cg(e, null, a),
          t
        );
      }
      return lo(e, r, t, a), io(e);
    }
    function Tl(e, t, a) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (a & 4194048) !== 0))
      ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (a |= r), (t.lanes = a), Lh(e, a);
      }
    }
    function Yu(e, t) {
      var a = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), a === r)) {
        var s = null,
          c = null;
        if (((a = a.firstBaseUpdate), a !== null)) {
          do {
            var h = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null,
            };
            c === null ? (s = c = h) : (c = c.next = h), (a = a.next);
          } while (a !== null);
          c === null ? (s = c = t) : (c = c.next = t);
        } else s = c = t;
        (a = {
          baseState: r.baseState,
          firstBaseUpdate: s,
          lastBaseUpdate: c,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = a);
        return;
      }
      (e = a.lastBaseUpdate),
        e === null ? (a.firstBaseUpdate = t) : (e.next = t),
        (a.lastBaseUpdate = t);
    }
    var Gu = !1;
    function Cl() {
      if (Gu) {
        var e = yr;
        if (e !== null) throw e;
      }
    }
    function Ol(e, t, a, r) {
      Gu = !1;
      var s = e.updateQueue;
      Ja = !1;
      var c = s.firstBaseUpdate,
        h = s.lastBaseUpdate,
        y = s.shared.pending;
      if (y !== null) {
        s.shared.pending = null;
        var x = y,
          R = x.next;
        (x.next = null), h === null ? (c = R) : (h.next = R), (h = x);
        var j = e.alternate;
        j !== null &&
          ((j = j.updateQueue),
          (y = j.lastBaseUpdate),
          y !== h &&
            (y === null ? (j.firstBaseUpdate = R) : (y.next = R),
            (j.lastBaseUpdate = x)));
      }
      if (c !== null) {
        var X = s.baseState;
        (h = 0), (j = R = x = null), (y = c);
        do {
          var D = y.lane & -536870913,
            L = D !== y.lane;
          if (L ? (Ue & D) === D : (r & D) === D) {
            D !== 0 && D === br && (Gu = !0),
              j !== null &&
                (j = j.next =
                  {
                    lane: 0,
                    tag: y.tag,
                    payload: y.payload,
                    callback: null,
                    next: null,
                  });
            e: {
              var ve = e,
                be = y;
              D = t;
              var Xe = a;
              switch (be.tag) {
                case 1:
                  if (((ve = be.payload), typeof ve == "function")) {
                    X = ve.call(Xe, X, D);
                    break e;
                  }
                  X = ve;
                  break e;
                case 3:
                  ve.flags = (ve.flags & -65537) | 128;
                case 0:
                  if (
                    ((ve = be.payload),
                    (D = typeof ve == "function" ? ve.call(Xe, X, D) : ve),
                    D == null)
                  )
                    break e;
                  X = b({}, X, D);
                  break e;
                case 2:
                  Ja = !0;
              }
            }
            (D = y.callback),
              D !== null &&
                ((e.flags |= 64),
                L && (e.flags |= 8192),
                (L = s.callbacks),
                L === null ? (s.callbacks = [D]) : L.push(D));
          } else
            (L = {
              lane: D,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null,
            }),
              j === null ? ((R = j = L), (x = X)) : (j = j.next = L),
              (h |= D);
          if (((y = y.next), y === null)) {
            if (((y = s.shared.pending), y === null)) break;
            (L = y),
              (y = L.next),
              (L.next = null),
              (s.lastBaseUpdate = L),
              (s.shared.pending = null);
          }
        } while (!0);
        j === null && (x = X),
          (s.baseState = x),
          (s.firstBaseUpdate = R),
          (s.lastBaseUpdate = j),
          c === null && (s.shared.lanes = 0),
          (on |= h),
          (e.lanes = h),
          (e.memoizedState = X);
      }
    }
    function Yg(e, t) {
      if (typeof e != "function") throw Error(o(191, e));
      e.call(t);
    }
    function Gg(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++) Yg(a[e], t);
    }
    var vr = V(null),
      po = V(0);
    function Xg(e, t) {
      (e = ja), Z(po, e), Z(vr, t), (ja = e | t.baseLanes);
    }
    function Xu() {
      Z(po, ja), Z(vr, vr.current);
    }
    function Qu() {
      (ja = po.current), ee(vr), ee(po);
    }
    var Wa = 0,
      Ne = null,
      Ye = null,
      st = null,
      bo = !1,
      wr = !1,
      Hn = !1,
      yo = 0,
      Rl = 0,
      xr = null,
      b2 = 0;
    function nt() {
      throw Error(o(321));
    }
    function Ku(e, t) {
      if (t === null) return !1;
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Vt(e[a], t[a])) return !1;
      return !0;
    }
    function Zu(e, t, a, r, s, c) {
      return (
        (Wa = c),
        (Ne = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (N.H = e === null || e.memoizedState === null ? Cm : Om),
        (Hn = !1),
        (c = a(r, s)),
        (Hn = !1),
        wr && (c = Kg(t, a, r, s)),
        Qg(e),
        c
      );
    }
    function Qg(e) {
      N.H = ko;
      var t = Ye !== null && Ye.next !== null;
      if (
        ((Wa = 0), (st = Ye = Ne = null), (bo = !1), (Rl = 0), (xr = null), t)
      )
        throw Error(o(300));
      e === null ||
        yt ||
        ((e = e.dependencies), e !== null && co(e) && (yt = !0));
    }
    function Kg(e, t, a, r) {
      Ne = e;
      var s = 0;
      do {
        if ((wr && (xr = null), (Rl = 0), (wr = !1), 25 <= s))
          throw Error(o(301));
        if (((s += 1), (st = Ye = null), e.updateQueue != null)) {
          var c = e.updateQueue;
          (c.lastEffect = null),
            (c.events = null),
            (c.stores = null),
            c.memoCache != null && (c.memoCache.index = 0);
        }
        (N.H = k2), (c = t(a, r));
      } while (wr);
      return c;
    }
    function y2() {
      var e = N.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == "function" ? Nl(t) : t),
        (e = e.useState()[0]),
        (Ye !== null ? Ye.memoizedState : null) !== e && (Ne.flags |= 1024),
        t
      );
    }
    function $u() {
      var e = yo !== 0;
      return (yo = 0), e;
    }
    function Fu(e, t, a) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
    }
    function Ju(e) {
      if (bo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        bo = !1;
      }
      (Wa = 0), (st = Ye = Ne = null), (wr = !1), (Rl = yo = 0), (xr = null);
    }
    function Ut() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return st === null ? (Ne.memoizedState = st = e) : (st = st.next = e), st;
    }
    function ut() {
      if (Ye === null) {
        var e = Ne.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ye.next;
      var t = st === null ? Ne.memoizedState : st.next;
      if (t !== null) (st = t), (Ye = e);
      else {
        if (e === null)
          throw Ne.alternate === null ? Error(o(467)) : Error(o(310));
        (Ye = e),
          (e = {
            memoizedState: Ye.memoizedState,
            baseState: Ye.baseState,
            baseQueue: Ye.baseQueue,
            queue: Ye.queue,
            next: null,
          }),
          st === null ? (Ne.memoizedState = st = e) : (st = st.next = e);
      }
      return st;
    }
    function Iu() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Nl(e) {
      var t = Rl;
      return (
        (Rl += 1),
        xr === null && (xr = []),
        (e = Vg(xr, e, t)),
        (t = Ne),
        (st === null ? t.memoizedState : st.next) === null &&
          ((t = t.alternate),
          (N.H = t === null || t.memoizedState === null ? Cm : Om)),
        e
      );
    }
    function vo(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Nl(e);
        if (e.$$typeof === P) return Ot(e);
      }
      throw Error(o(438, String(e)));
    }
    function Pu(e) {
      var t = null,
        a = Ne.updateQueue;
      if ((a !== null && (t = a.memoCache), t == null)) {
        var r = Ne.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (s) {
                  return s.slice();
                }),
                index: 0,
              })));
      }
      if (
        (t == null && (t = { data: [], index: 0 }),
        a === null && ((a = Iu()), (Ne.updateQueue = a)),
        (a.memoCache = t),
        (a = t.data[t.index]),
        a === void 0)
      )
        for (a = t.data[t.index] = Array(e), r = 0; r < e; r++) a[r] = Ee;
      return t.index++, a;
    }
    function La(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wo(e) {
      var t = ut();
      return Wu(t, Ye, e);
    }
    function Wu(e, t, a) {
      var r = e.queue;
      if (r === null) throw Error(o(311));
      r.lastRenderedReducer = a;
      var s = e.baseQueue,
        c = r.pending;
      if (c !== null) {
        if (s !== null) {
          var h = s.next;
          (s.next = c.next), (c.next = h);
        }
        (t.baseQueue = s = c), (r.pending = null);
      }
      if (((c = e.baseState), s === null)) e.memoizedState = c;
      else {
        t = s.next;
        var y = (h = null),
          x = null,
          R = t,
          j = !1;
        do {
          var X = R.lane & -536870913;
          if (X !== R.lane ? (Ue & X) === X : (Wa & X) === X) {
            var D = R.revertLane;
            if (D === 0)
              x !== null &&
                (x = x.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: R.action,
                    hasEagerState: R.hasEagerState,
                    eagerState: R.eagerState,
                    next: null,
                  }),
                X === br && (j = !0);
            else if ((Wa & D) === D) {
              (R = R.next), D === br && (j = !0);
              continue;
            } else
              (X = {
                lane: 0,
                revertLane: R.revertLane,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
                x === null ? ((y = x = X), (h = c)) : (x = x.next = X),
                (Ne.lanes |= D),
                (on |= D);
            (X = R.action),
              Hn && a(c, X),
              (c = R.hasEagerState ? R.eagerState : a(c, X));
          } else
            (D = {
              lane: X,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              x === null ? ((y = x = D), (h = c)) : (x = x.next = D),
              (Ne.lanes |= X),
              (on |= X);
          R = R.next;
        } while (R !== null && R !== t);
        if (
          (x === null ? (h = c) : (x.next = y),
          !Vt(c, e.memoizedState) && ((yt = !0), j && ((a = yr), a !== null)))
        )
          throw a;
        (e.memoizedState = c),
          (e.baseState = h),
          (e.baseQueue = x),
          (r.lastRenderedState = c);
      }
      return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function ec(e) {
      var t = ut(),
        a = t.queue;
      if (a === null) throw Error(o(311));
      a.lastRenderedReducer = e;
      var r = a.dispatch,
        s = a.pending,
        c = t.memoizedState;
      if (s !== null) {
        a.pending = null;
        var h = (s = s.next);
        do (c = e(c, h.action)), (h = h.next);
        while (h !== s);
        Vt(c, t.memoizedState) || (yt = !0),
          (t.memoizedState = c),
          t.baseQueue === null && (t.baseState = c),
          (a.lastRenderedState = c);
      }
      return [c, r];
    }
    function Zg(e, t, a) {
      var r = Ne,
        s = ut(),
        c = Ve;
      if (c) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else a = t();
      var h = !Vt((Ye || s).memoizedState, a);
      h && ((s.memoizedState = a), (yt = !0)), (s = s.queue);
      var y = Jg.bind(null, r, s, e);
      if (
        (zl(2048, 8, y, [e]),
        s.getSnapshot !== t || h || (st !== null && st.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Sr(9, xo(), Fg.bind(null, r, s, a, t), null),
          Ze === null)
        )
          throw Error(o(349));
        c || (Wa & 124) !== 0 || $g(r, t, a);
      }
      return a;
    }
    function $g(e, t, a) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: a }),
        (t = Ne.updateQueue),
        t === null
          ? ((t = Iu()), (Ne.updateQueue = t), (t.stores = [e]))
          : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
    }
    function Fg(e, t, a, r) {
      (t.value = a), (t.getSnapshot = r), Ig(t) && Pg(e);
    }
    function Jg(e, t, a) {
      return a(function () {
        Ig(t) && Pg(e);
      });
    }
    function Ig(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Vt(e, a);
      } catch {
        return !0;
      }
    }
    function Pg(e) {
      var t = hr(e, 2);
      t !== null && Qt(t, e, 2);
    }
    function tc(e) {
      var t = Ut();
      if (typeof e == "function") {
        var a = e;
        if (((e = a()), Hn)) {
          _e(!0);
          try {
            a();
          } finally {
            _e(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: La,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Wg(e, t, a, r) {
      return (e.baseState = a), Wu(e, Ye, typeof r == "function" ? r : La);
    }
    function v2(e, t, a, r, s) {
      if (Eo(e)) throw Error(o(485));
      if (((e = t.action), e !== null)) {
        var c = {
          payload: s,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (h) {
            c.listeners.push(h);
          },
        };
        N.T !== null ? a(!0) : (c.isTransition = !1),
          r(c),
          (a = t.pending),
          a === null
            ? ((c.next = t.pending = c), em(t, c))
            : ((c.next = a.next), (t.pending = a.next = c));
      }
    }
    function em(e, t) {
      var a = t.action,
        r = t.payload,
        s = e.state;
      if (t.isTransition) {
        var c = N.T,
          h = {};
        N.T = h;
        try {
          var y = a(s, r),
            x = N.S;
          x !== null && x(h, y), tm(e, t, y);
        } catch (R) {
          ac(e, t, R);
        } finally {
          N.T = c;
        }
      } else
        try {
          (c = a(s, r)), tm(e, t, c);
        } catch (R) {
          ac(e, t, R);
        }
    }
    function tm(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function"
        ? a.then(
            function (r) {
              am(e, t, r);
            },
            function (r) {
              return ac(e, t, r);
            }
          )
        : am(e, t, a);
    }
    function am(e, t, a) {
      (t.status = "fulfilled"),
        (t.value = a),
        nm(t),
        (e.state = a),
        (t = e.pending),
        t !== null &&
          ((a = t.next),
          a === t
            ? (e.pending = null)
            : ((a = a.next), (t.next = a), em(e, a)));
    }
    function ac(e, t, a) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do (t.status = "rejected"), (t.reason = a), nm(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }
    function nm(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function rm(e, t) {
      return t;
    }
    function lm(e, t) {
      if (Ve) {
        var a = Ze.formState;
        if (a !== null) {
          e: {
            var r = Ne;
            if (Ve) {
              if (et) {
                t: {
                  for (var s = et, c = ha; s.nodeType !== 8; ) {
                    if (!c) {
                      s = null;
                      break t;
                    }
                    if (((s = sa(s.nextSibling)), s === null)) {
                      s = null;
                      break t;
                    }
                  }
                  (c = s.data), (s = c === "F!" || c === "F" ? s : null);
                }
                if (s) {
                  (et = sa(s.nextSibling)), (r = s.data === "F!");
                  break e;
                }
              }
              Dn(r);
            }
            r = !1;
          }
          r && (t = a[0]);
        }
      }
      return (
        (a = Ut()),
        (a.memoizedState = a.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rm,
          lastRenderedState: t,
        }),
        (a.queue = r),
        (a = km.bind(null, Ne, r)),
        (r.dispatch = a),
        (r = tc(!1)),
        (c = oc.bind(null, Ne, !1, r.queue)),
        (r = Ut()),
        (s = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = s),
        (a = v2.bind(null, Ne, s, c, a)),
        (s.dispatch = a),
        (r.memoizedState = e),
        [t, a, !1]
      );
    }
    function im(e) {
      var t = ut();
      return om(t, Ye, e);
    }
    function om(e, t, a) {
      if (
        ((t = Wu(e, t, rm)[0]),
        (e = wo(La)[0]),
        typeof t == "object" && t !== null && typeof t.then == "function")
      )
        try {
          var r = Nl(t);
        } catch (h) {
          throw h === kl ? go : h;
        }
      else r = t;
      t = ut();
      var s = t.queue,
        c = s.dispatch;
      return (
        a !== t.memoizedState &&
          ((Ne.flags |= 2048), Sr(9, xo(), w2.bind(null, s, a), null)),
        [r, c, e]
      );
    }
    function w2(e, t) {
      e.action = t;
    }
    function sm(e) {
      var t = ut(),
        a = Ye;
      if (a !== null) return om(t, a, e);
      ut(), (t = t.memoizedState), (a = ut());
      var r = a.queue.dispatch;
      return (a.memoizedState = e), [t, r, !1];
    }
    function Sr(e, t, a, r) {
      return (
        (e = { tag: e, create: a, deps: r, inst: t, next: null }),
        (t = Ne.updateQueue),
        t === null && ((t = Iu()), (Ne.updateQueue = t)),
        (a = t.lastEffect),
        a === null
          ? (t.lastEffect = e.next = e)
          : ((r = a.next), (a.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function xo() {
      return { destroy: void 0, resource: void 0 };
    }
    function um() {
      return ut().memoizedState;
    }
    function So(e, t, a, r) {
      var s = Ut();
      (r = r === void 0 ? null : r),
        (Ne.flags |= e),
        (s.memoizedState = Sr(1 | t, xo(), a, r));
    }
    function zl(e, t, a, r) {
      var s = ut();
      r = r === void 0 ? null : r;
      var c = s.memoizedState.inst;
      Ye !== null && r !== null && Ku(r, Ye.memoizedState.deps)
        ? (s.memoizedState = Sr(t, c, a, r))
        : ((Ne.flags |= e), (s.memoizedState = Sr(1 | t, c, a, r)));
    }
    function cm(e, t) {
      So(8390656, 8, e, t);
    }
    function fm(e, t) {
      zl(2048, 8, e, t);
    }
    function dm(e, t) {
      return zl(4, 2, e, t);
    }
    function hm(e, t) {
      return zl(4, 4, e, t);
    }
    function gm(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function () {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function mm(e, t, a) {
      (a = a != null ? a.concat([e]) : null), zl(4, 4, gm.bind(null, t, e), a);
    }
    function nc() {}
    function pm(e, t) {
      var a = ut();
      t = t === void 0 ? null : t;
      var r = a.memoizedState;
      return t !== null && Ku(t, r[1]) ? r[0] : ((a.memoizedState = [e, t]), e);
    }
    function bm(e, t) {
      var a = ut();
      t = t === void 0 ? null : t;
      var r = a.memoizedState;
      if (t !== null && Ku(t, r[1])) return r[0];
      if (((r = e()), Hn)) {
        _e(!0);
        try {
          e();
        } finally {
          _e(!1);
        }
      }
      return (a.memoizedState = [r, t]), r;
    }
    function rc(e, t, a) {
      return a === void 0 || (Wa & 1073741824) !== 0
        ? (e.memoizedState = t)
        : ((e.memoizedState = a), (e = wp()), (Ne.lanes |= e), (on |= e), a);
    }
    function ym(e, t, a, r) {
      return Vt(a, t)
        ? a
        : vr.current !== null
        ? ((e = rc(e, a, r)), Vt(e, t) || (yt = !0), e)
        : (Wa & 42) === 0
        ? ((yt = !0), (e.memoizedState = a))
        : ((e = wp()), (Ne.lanes |= e), (on |= e), t);
    }
    function vm(e, t, a, r, s) {
      var c = K.p;
      K.p = c !== 0 && 8 > c ? c : 8;
      var h = N.T,
        y = {};
      (N.T = y), oc(e, !1, t, a);
      try {
        var x = s(),
          R = N.S;
        if (
          (R !== null && R(y, x),
          x !== null && typeof x == "object" && typeof x.then == "function")
        ) {
          var j = p2(x, r);
          Ml(e, t, j, Xt(e));
        } else Ml(e, t, r, Xt(e));
      } catch (X) {
        Ml(e, t, { then: function () {}, status: "rejected", reason: X }, Xt());
      } finally {
        (K.p = c), (N.T = h);
      }
    }
    function x2() {}
    function lc(e, t, a, r) {
      if (e.tag !== 5) throw Error(o(476));
      var s = wm(e).queue;
      vm(
        e,
        s,
        t,
        Y,
        a === null
          ? x2
          : function () {
              return xm(e), a(r);
            }
      );
    }
    function wm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Y,
        baseState: Y,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: La,
          lastRenderedState: Y,
        },
        next: null,
      };
      var a = {};
      return (
        (t.next = {
          memoizedState: a,
          baseState: a,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: La,
            lastRenderedState: a,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function xm(e) {
      var t = wm(e).next.queue;
      Ml(e, t, {}, Xt());
    }
    function ic() {
      return Ot(Jl);
    }
    function Sm() {
      return ut().memoizedState;
    }
    function Em() {
      return ut().memoizedState;
    }
    function S2(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var a = Xt();
            e = Ia(a);
            var r = Pa(t, e, a);
            r !== null && (Qt(r, t, a), Tl(r, t, a)),
              (t = { cache: Uu() }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function E2(e, t, a) {
      var r = Xt();
      (a = {
        lane: r,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Eo(e)
          ? Am(t, a)
          : ((a = Tu(e, t, a, r)), a !== null && (Qt(a, e, r), Tm(a, t, r)));
    }
    function km(e, t, a) {
      var r = Xt();
      Ml(e, t, a, r);
    }
    function Ml(e, t, a, r) {
      var s = {
        lane: r,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Eo(e)) Am(t, s);
      else {
        var c = e.alternate;
        if (
          e.lanes === 0 &&
          (c === null || c.lanes === 0) &&
          ((c = t.lastRenderedReducer), c !== null)
        )
          try {
            var h = t.lastRenderedState,
              y = c(h, a);
            if (((s.hasEagerState = !0), (s.eagerState = y), Vt(y, h)))
              return lo(e, t, s, 0), Ze === null && ro(), !1;
          } catch {
          } finally {
          }
        if (((a = Tu(e, t, s, r)), a !== null))
          return Qt(a, e, r), Tm(a, t, r), !0;
      }
      return !1;
    }
    function oc(e, t, a, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: Vc(),
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Eo(e))
      ) {
        if (t) throw Error(o(479));
      } else (t = Tu(e, a, r, 2)), t !== null && Qt(t, e, 2);
    }
    function Eo(e) {
      var t = e.alternate;
      return e === Ne || (t !== null && t === Ne);
    }
    function Am(e, t) {
      wr = bo = !0;
      var a = e.pending;
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (e.pending = t);
    }
    function Tm(e, t, a) {
      if ((a & 4194048) !== 0) {
        var r = t.lanes;
        (r &= e.pendingLanes), (a |= r), (t.lanes = a), Lh(e, a);
      }
    }
    var ko = {
        readContext: Ot,
        use: vo,
        useCallback: nt,
        useContext: nt,
        useEffect: nt,
        useImperativeHandle: nt,
        useLayoutEffect: nt,
        useInsertionEffect: nt,
        useMemo: nt,
        useReducer: nt,
        useRef: nt,
        useState: nt,
        useDebugValue: nt,
        useDeferredValue: nt,
        useTransition: nt,
        useSyncExternalStore: nt,
        useId: nt,
        useHostTransitionStatus: nt,
        useFormState: nt,
        useActionState: nt,
        useOptimistic: nt,
        useMemoCache: nt,
        useCacheRefresh: nt,
      },
      Cm = {
        readContext: Ot,
        use: vo,
        useCallback: function (e, t) {
          return (Ut().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ot,
        useEffect: cm,
        useImperativeHandle: function (e, t, a) {
          (a = a != null ? a.concat([e]) : null),
            So(4194308, 4, gm.bind(null, t, e), a);
        },
        useLayoutEffect: function (e, t) {
          return So(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          So(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var a = Ut();
          t = t === void 0 ? null : t;
          var r = e();
          if (Hn) {
            _e(!0);
            try {
              e();
            } finally {
              _e(!1);
            }
          }
          return (a.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, a) {
          var r = Ut();
          if (a !== void 0) {
            var s = a(t);
            if (Hn) {
              _e(!0);
              try {
                a(t);
              } finally {
                _e(!1);
              }
            }
          } else s = t;
          return (
            (r.memoizedState = r.baseState = s),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: s,
            }),
            (r.queue = e),
            (e = e.dispatch = E2.bind(null, Ne, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Ut();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: function (e) {
          e = tc(e);
          var t = e.queue,
            a = km.bind(null, Ne, t);
          return (t.dispatch = a), [e.memoizedState, a];
        },
        useDebugValue: nc,
        useDeferredValue: function (e, t) {
          var a = Ut();
          return rc(a, e, t);
        },
        useTransition: function () {
          var e = tc(!1);
          return (
            (e = vm.bind(null, Ne, e.queue, !0, !1)),
            (Ut().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, a) {
          var r = Ne,
            s = Ut();
          if (Ve) {
            if (a === void 0) throw Error(o(407));
            a = a();
          } else {
            if (((a = t()), Ze === null)) throw Error(o(349));
            (Ue & 124) !== 0 || $g(r, t, a);
          }
          s.memoizedState = a;
          var c = { value: a, getSnapshot: t };
          return (
            (s.queue = c),
            cm(Jg.bind(null, r, c, e), [e]),
            (r.flags |= 2048),
            Sr(9, xo(), Fg.bind(null, r, c, a, t), null),
            a
          );
        },
        useId: function () {
          var e = Ut(),
            t = Ze.identifierPrefix;
          if (Ve) {
            var a = za,
              r = Na;
            (a = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + a),
              (t = "«" + t + "R" + a),
              (a = yo++),
              0 < a && (t += "H" + a.toString(32)),
              (t += "»");
          } else (a = b2++), (t = "«" + t + "r" + a.toString(32) + "»");
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: ic,
        useFormState: lm,
        useActionState: lm,
        useOptimistic: function (e) {
          var t = Ut();
          t.memoizedState = t.baseState = e;
          var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = a),
            (t = oc.bind(null, Ne, !0, a)),
            (a.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Pu,
        useCacheRefresh: function () {
          return (Ut().memoizedState = S2.bind(null, Ne));
        },
      },
      Om = {
        readContext: Ot,
        use: vo,
        useCallback: pm,
        useContext: Ot,
        useEffect: fm,
        useImperativeHandle: mm,
        useInsertionEffect: dm,
        useLayoutEffect: hm,
        useMemo: bm,
        useReducer: wo,
        useRef: um,
        useState: function () {
          return wo(La);
        },
        useDebugValue: nc,
        useDeferredValue: function (e, t) {
          var a = ut();
          return ym(a, Ye.memoizedState, e, t);
        },
        useTransition: function () {
          var e = wo(La)[0],
            t = ut().memoizedState;
          return [typeof e == "boolean" ? e : Nl(e), t];
        },
        useSyncExternalStore: Zg,
        useId: Sm,
        useHostTransitionStatus: ic,
        useFormState: im,
        useActionState: im,
        useOptimistic: function (e, t) {
          var a = ut();
          return Wg(a, Ye, e, t);
        },
        useMemoCache: Pu,
        useCacheRefresh: Em,
      },
      k2 = {
        readContext: Ot,
        use: vo,
        useCallback: pm,
        useContext: Ot,
        useEffect: fm,
        useImperativeHandle: mm,
        useInsertionEffect: dm,
        useLayoutEffect: hm,
        useMemo: bm,
        useReducer: ec,
        useRef: um,
        useState: function () {
          return ec(La);
        },
        useDebugValue: nc,
        useDeferredValue: function (e, t) {
          var a = ut();
          return Ye === null ? rc(a, e, t) : ym(a, Ye.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ec(La)[0],
            t = ut().memoizedState;
          return [typeof e == "boolean" ? e : Nl(e), t];
        },
        useSyncExternalStore: Zg,
        useId: Sm,
        useHostTransitionStatus: ic,
        useFormState: sm,
        useActionState: sm,
        useOptimistic: function (e, t) {
          var a = ut();
          return Ye !== null
            ? Wg(a, Ye, e, t)
            : ((a.baseState = e), [e, a.queue.dispatch]);
        },
        useMemoCache: Pu,
        useCacheRefresh: Em,
      },
      Er = null,
      Dl = 0;
    function Ao(e) {
      var t = Dl;
      return (Dl += 1), Er === null && (Er = []), Vg(Er, e, t);
    }
    function Ll(e, t) {
      (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
    }
    function To(e, t) {
      throw t.$$typeof === w
        ? Error(o(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            o(
              31,
              e === "[object Object]"
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e
            )
          ));
    }
    function Rm(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Nm(e) {
      function t(T, k) {
        if (e) {
          var O = T.deletions;
          O === null ? ((T.deletions = [k]), (T.flags |= 16)) : O.push(k);
        }
      }
      function a(T, k) {
        if (!e) return null;
        for (; k !== null; ) t(T, k), (k = k.sibling);
        return null;
      }
      function r(T) {
        for (var k = new Map(); T !== null; )
          T.key !== null ? k.set(T.key, T) : k.set(T.index, T), (T = T.sibling);
        return k;
      }
      function s(T, k) {
        return (T = Ra(T, k)), (T.index = 0), (T.sibling = null), T;
      }
      function c(T, k, O) {
        return (
          (T.index = O),
          e
            ? ((O = T.alternate),
              O !== null
                ? ((O = O.index), O < k ? ((T.flags |= 67108866), k) : O)
                : ((T.flags |= 67108866), k))
            : ((T.flags |= 1048576), k)
        );
      }
      function h(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function y(T, k, O, G) {
        return k === null || k.tag !== 6
          ? ((k = Ou(O, T.mode, G)), (k.return = T), k)
          : ((k = s(k, O)), (k.return = T), k);
      }
      function x(T, k, O, G) {
        var se = O.type;
        return se === A
          ? j(T, k, O.props.children, G, O.key)
          : k !== null &&
            (k.elementType === se ||
              (typeof se == "object" &&
                se !== null &&
                se.$$typeof === I &&
                Rm(se) === k.type))
          ? ((k = s(k, O.props)), Ll(k, O), (k.return = T), k)
          : ((k = oo(O.type, O.key, O.props, null, T.mode, G)),
            Ll(k, O),
            (k.return = T),
            k);
      }
      function R(T, k, O, G) {
        return k === null ||
          k.tag !== 4 ||
          k.stateNode.containerInfo !== O.containerInfo ||
          k.stateNode.implementation !== O.implementation
          ? ((k = Ru(O, T.mode, G)), (k.return = T), k)
          : ((k = s(k, O.children || [])), (k.return = T), k);
      }
      function j(T, k, O, G, se) {
        return k === null || k.tag !== 7
          ? ((k = Rn(O, T.mode, G, se)), (k.return = T), k)
          : ((k = s(k, O)), (k.return = T), k);
      }
      function X(T, k, O) {
        if (
          (typeof k == "string" && k !== "") ||
          typeof k == "number" ||
          typeof k == "bigint"
        )
          return (k = Ou("" + k, T.mode, O)), (k.return = T), k;
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case v:
              return (
                (O = oo(k.type, k.key, k.props, null, T.mode, O)),
                Ll(O, k),
                (O.return = T),
                O
              );
            case C:
              return (k = Ru(k, T.mode, O)), (k.return = T), k;
            case I:
              var G = k._init;
              return (k = G(k._payload)), X(T, k, O);
          }
          if (me(k) || ce(k))
            return (k = Rn(k, T.mode, O, null)), (k.return = T), k;
          if (typeof k.then == "function") return X(T, Ao(k), O);
          if (k.$$typeof === P) return X(T, fo(T, k), O);
          To(T, k);
        }
        return null;
      }
      function D(T, k, O, G) {
        var se = k !== null ? k.key : null;
        if (
          (typeof O == "string" && O !== "") ||
          typeof O == "number" ||
          typeof O == "bigint"
        )
          return se !== null ? null : y(T, k, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case v:
              return O.key === se ? x(T, k, O, G) : null;
            case C:
              return O.key === se ? R(T, k, O, G) : null;
            case I:
              return (se = O._init), (O = se(O._payload)), D(T, k, O, G);
          }
          if (me(O) || ce(O)) return se !== null ? null : j(T, k, O, G, null);
          if (typeof O.then == "function") return D(T, k, Ao(O), G);
          if (O.$$typeof === P) return D(T, k, fo(T, O), G);
          To(T, O);
        }
        return null;
      }
      function L(T, k, O, G, se) {
        if (
          (typeof G == "string" && G !== "") ||
          typeof G == "number" ||
          typeof G == "bigint"
        )
          return (T = T.get(O) || null), y(k, T, "" + G, se);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case v:
              return (
                (T = T.get(G.key === null ? O : G.key) || null), x(k, T, G, se)
              );
            case C:
              return (
                (T = T.get(G.key === null ? O : G.key) || null), R(k, T, G, se)
              );
            case I:
              var Me = G._init;
              return (G = Me(G._payload)), L(T, k, O, G, se);
          }
          if (me(G) || ce(G))
            return (T = T.get(O) || null), j(k, T, G, se, null);
          if (typeof G.then == "function") return L(T, k, O, Ao(G), se);
          if (G.$$typeof === P) return L(T, k, O, fo(k, G), se);
          To(k, G);
        }
        return null;
      }
      function ve(T, k, O, G) {
        for (
          var se = null, Me = null, he = k, ye = (k = 0), wt = null;
          he !== null && ye < O.length;
          ye++
        ) {
          he.index > ye ? ((wt = he), (he = null)) : (wt = he.sibling);
          var Be = D(T, he, O[ye], G);
          if (Be === null) {
            he === null && (he = wt);
            break;
          }
          e && he && Be.alternate === null && t(T, he),
            (k = c(Be, k, ye)),
            Me === null ? (se = Be) : (Me.sibling = Be),
            (Me = Be),
            (he = wt);
        }
        if (ye === O.length) return a(T, he), Ve && zn(T, ye), se;
        if (he === null) {
          for (; ye < O.length; ye++)
            (he = X(T, O[ye], G)),
              he !== null &&
                ((k = c(he, k, ye)),
                Me === null ? (se = he) : (Me.sibling = he),
                (Me = he));
          return Ve && zn(T, ye), se;
        }
        for (he = r(he); ye < O.length; ye++)
          (wt = L(he, T, ye, O[ye], G)),
            wt !== null &&
              (e &&
                wt.alternate !== null &&
                he.delete(wt.key === null ? ye : wt.key),
              (k = c(wt, k, ye)),
              Me === null ? (se = wt) : (Me.sibling = wt),
              (Me = wt));
        return (
          e &&
            he.forEach(function (pn) {
              return t(T, pn);
            }),
          Ve && zn(T, ye),
          se
        );
      }
      function be(T, k, O, G) {
        if (O == null) throw Error(o(151));
        for (
          var se = null,
            Me = null,
            he = k,
            ye = (k = 0),
            wt = null,
            Be = O.next();
          he !== null && !Be.done;
          ye++, Be = O.next()
        ) {
          he.index > ye ? ((wt = he), (he = null)) : (wt = he.sibling);
          var pn = D(T, he, Be.value, G);
          if (pn === null) {
            he === null && (he = wt);
            break;
          }
          e && he && pn.alternate === null && t(T, he),
            (k = c(pn, k, ye)),
            Me === null ? (se = pn) : (Me.sibling = pn),
            (Me = pn),
            (he = wt);
        }
        if (Be.done) return a(T, he), Ve && zn(T, ye), se;
        if (he === null) {
          for (; !Be.done; ye++, Be = O.next())
            (Be = X(T, Be.value, G)),
              Be !== null &&
                ((k = c(Be, k, ye)),
                Me === null ? (se = Be) : (Me.sibling = Be),
                (Me = Be));
          return Ve && zn(T, ye), se;
        }
        for (he = r(he); !Be.done; ye++, Be = O.next())
          (Be = L(he, T, ye, Be.value, G)),
            Be !== null &&
              (e &&
                Be.alternate !== null &&
                he.delete(Be.key === null ? ye : Be.key),
              (k = c(Be, k, ye)),
              Me === null ? (se = Be) : (Me.sibling = Be),
              (Me = Be));
        return (
          e &&
            he.forEach(function (AS) {
              return t(T, AS);
            }),
          Ve && zn(T, ye),
          se
        );
      }
      function Xe(T, k, O, G) {
        if (
          (typeof O == "object" &&
            O !== null &&
            O.type === A &&
            O.key === null &&
            (O = O.props.children),
          typeof O == "object" && O !== null)
        ) {
          switch (O.$$typeof) {
            case v:
              e: {
                for (var se = O.key; k !== null; ) {
                  if (k.key === se) {
                    if (((se = O.type), se === A)) {
                      if (k.tag === 7) {
                        a(T, k.sibling),
                          (G = s(k, O.props.children)),
                          (G.return = T),
                          (T = G);
                        break e;
                      }
                    } else if (
                      k.elementType === se ||
                      (typeof se == "object" &&
                        se !== null &&
                        se.$$typeof === I &&
                        Rm(se) === k.type)
                    ) {
                      a(T, k.sibling),
                        (G = s(k, O.props)),
                        Ll(G, O),
                        (G.return = T),
                        (T = G);
                      break e;
                    }
                    a(T, k);
                    break;
                  } else t(T, k);
                  k = k.sibling;
                }
                O.type === A
                  ? ((G = Rn(O.props.children, T.mode, G, O.key)),
                    (G.return = T),
                    (T = G))
                  : ((G = oo(O.type, O.key, O.props, null, T.mode, G)),
                    Ll(G, O),
                    (G.return = T),
                    (T = G));
              }
              return h(T);
            case C:
              e: {
                for (se = O.key; k !== null; ) {
                  if (k.key === se)
                    if (
                      k.tag === 4 &&
                      k.stateNode.containerInfo === O.containerInfo &&
                      k.stateNode.implementation === O.implementation
                    ) {
                      a(T, k.sibling),
                        (G = s(k, O.children || [])),
                        (G.return = T),
                        (T = G);
                      break e;
                    } else {
                      a(T, k);
                      break;
                    }
                  else t(T, k);
                  k = k.sibling;
                }
                (G = Ru(O, T.mode, G)), (G.return = T), (T = G);
              }
              return h(T);
            case I:
              return (se = O._init), (O = se(O._payload)), Xe(T, k, O, G);
          }
          if (me(O)) return ve(T, k, O, G);
          if (ce(O)) {
            if (((se = ce(O)), typeof se != "function")) throw Error(o(150));
            return (O = se.call(O)), be(T, k, O, G);
          }
          if (typeof O.then == "function") return Xe(T, k, Ao(O), G);
          if (O.$$typeof === P) return Xe(T, k, fo(T, O), G);
          To(T, O);
        }
        return (typeof O == "string" && O !== "") ||
          typeof O == "number" ||
          typeof O == "bigint"
          ? ((O = "" + O),
            k !== null && k.tag === 6
              ? (a(T, k.sibling), (G = s(k, O)), (G.return = T), (T = G))
              : (a(T, k), (G = Ou(O, T.mode, G)), (G.return = T), (T = G)),
            h(T))
          : a(T, k);
      }
      return function (T, k, O, G) {
        try {
          Dl = 0;
          var se = Xe(T, k, O, G);
          return (Er = null), se;
        } catch (he) {
          if (he === kl || he === go) throw he;
          var Me = jt(29, he, null, T.mode);
          return (Me.lanes = G), (Me.return = T), Me;
        } finally {
        }
      };
    }
    var kr = Nm(!0),
      zm = Nm(!1),
      ea = V(null),
      ga = null;
    function en(e) {
      var t = e.alternate;
      Z(ht, ht.current & 1),
        Z(ea, e),
        ga === null &&
          (t === null || vr.current !== null || t.memoizedState !== null) &&
          (ga = e);
    }
    function Mm(e) {
      if (e.tag === 22) {
        if ((Z(ht, ht.current), Z(ea, e), ga === null)) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (ga = e);
        }
      } else tn();
    }
    function tn() {
      Z(ht, ht.current), Z(ea, ea.current);
    }
    function _a(e) {
      ee(ea), ga === e && (ga = null), ee(ht);
    }
    var ht = V(0);
    function Co(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (
            a !== null &&
            ((a = a.dehydrated), a === null || a.data === "$?" || Ic(a))
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function sc(e, t, a, r) {
      (t = e.memoizedState),
        (a = a(r, t)),
        (a = a == null ? t : b({}, t, a)),
        (e.memoizedState = a),
        e.lanes === 0 && (e.updateQueue.baseState = a);
    }
    var uc = {
      enqueueSetState: function (e, t, a) {
        e = e._reactInternals;
        var r = Xt(),
          s = Ia(r);
        (s.payload = t),
          a != null && (s.callback = a),
          (t = Pa(e, s, r)),
          t !== null && (Qt(t, e, r), Tl(t, e, r));
      },
      enqueueReplaceState: function (e, t, a) {
        e = e._reactInternals;
        var r = Xt(),
          s = Ia(r);
        (s.tag = 1),
          (s.payload = t),
          a != null && (s.callback = a),
          (t = Pa(e, s, r)),
          t !== null && (Qt(t, e, r), Tl(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var a = Xt(),
          r = Ia(a);
        (r.tag = 2),
          t != null && (r.callback = t),
          (t = Pa(e, r, a)),
          t !== null && (Qt(t, e, a), Tl(t, e, a));
      },
    };
    function Dm(e, t, a, r, s, c, h) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(r, c, h)
          : t.prototype && t.prototype.isPureReactComponent
          ? !pl(a, r) || !pl(s, c)
          : !0
      );
    }
    function Lm(e, t, a, r) {
      (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(a, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(a, r),
        t.state !== e && uc.enqueueReplaceState(t, t.state, null);
    }
    function Bn(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var r in t) r !== "ref" && (a[r] = t[r]);
      }
      if ((e = e.defaultProps)) {
        a === t && (a = b({}, a));
        for (var s in e) a[s] === void 0 && (a[s] = e[s]);
      }
      return a;
    }
    var Oo =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          };
    function _m(e) {
      Oo(e);
    }
    function Um(e) {
      console.error(e);
    }
    function Hm(e) {
      Oo(e);
    }
    function Ro(e, t) {
      try {
        var a = e.onUncaughtError;
        a(t.value, { componentStack: t.stack });
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    function Bm(e, t, a) {
      try {
        var r = e.onCaughtError;
        r(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (s) {
        setTimeout(function () {
          throw s;
        });
      }
    }
    function cc(e, t, a) {
      return (
        (a = Ia(a)),
        (a.tag = 3),
        (a.payload = { element: null }),
        (a.callback = function () {
          Ro(e, t);
        }),
        a
      );
    }
    function Vm(e) {
      return (e = Ia(e)), (e.tag = 3), e;
    }
    function jm(e, t, a, r) {
      var s = a.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var c = r.value;
        (e.payload = function () {
          return s(c);
        }),
          (e.callback = function () {
            Bm(t, a, r);
          });
      }
      var h = a.stateNode;
      h !== null &&
        typeof h.componentDidCatch == "function" &&
        (e.callback = function () {
          Bm(t, a, r),
            typeof s != "function" &&
              (sn === null ? (sn = new Set([this])) : sn.add(this));
          var y = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: y !== null ? y : "",
          });
        });
    }
    function A2(e, t, a, r, s) {
      if (
        ((a.flags |= 32768),
        r !== null && typeof r == "object" && typeof r.then == "function")
      ) {
        if (
          ((t = a.alternate),
          t !== null && xl(t, a, s, !0),
          (a = ea.current),
          a !== null)
        ) {
          switch (a.tag) {
            case 13:
              return (
                ga === null
                  ? Lc()
                  : a.alternate === null && tt === 0 && (tt = 3),
                (a.flags &= -257),
                (a.flags |= 65536),
                (a.lanes = s),
                r === Vu
                  ? (a.flags |= 16384)
                  : ((t = a.updateQueue),
                    t === null ? (a.updateQueue = new Set([r])) : t.add(r),
                    Uc(e, r, s)),
                !1
              );
            case 22:
              return (
                (a.flags |= 65536),
                r === Vu
                  ? (a.flags |= 16384)
                  : ((t = a.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (a.updateQueue = t))
                      : ((a = t.retryQueue),
                        a === null ? (t.retryQueue = new Set([r])) : a.add(r)),
                    Uc(e, r, s)),
                !1
              );
          }
          throw Error(o(435, a.tag));
        }
        return Uc(e, r, s), Lc(), !1;
      }
      if (Ve)
        return (
          (t = ea.current),
          t !== null
            ? ((t.flags & 65536) === 0 && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = s),
              r !== Mu && ((e = Error(o(422), { cause: r })), wl(Jt(e, a))))
            : (r !== Mu && ((t = Error(o(423), { cause: r })), wl(Jt(t, a))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (s &= -s),
              (e.lanes |= s),
              (r = Jt(r, a)),
              (s = cc(e.stateNode, r, s)),
              Yu(e, s),
              tt !== 4 && (tt = 2)),
          !1
        );
      var c = Error(o(520), { cause: r });
      if (
        ((c = Jt(c, a)),
        ql === null ? (ql = [c]) : ql.push(c),
        tt !== 4 && (tt = 2),
        t === null)
      )
        return !0;
      (r = Jt(r, a)), (a = t);
      do {
        switch (a.tag) {
          case 3:
            return (
              (a.flags |= 65536),
              (e = s & -s),
              (a.lanes |= e),
              (e = cc(a.stateNode, r, e)),
              Yu(a, e),
              !1
            );
          case 1:
            if (
              ((t = a.type),
              (c = a.stateNode),
              (a.flags & 128) === 0 &&
                (typeof t.getDerivedStateFromError == "function" ||
                  (c !== null &&
                    typeof c.componentDidCatch == "function" &&
                    (sn === null || !sn.has(c)))))
            )
              return (
                (a.flags |= 65536),
                (s &= -s),
                (a.lanes |= s),
                (s = Vm(s)),
                jm(s, e, a, r),
                Yu(a, s),
                !1
              );
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    var qm = Error(o(461)),
      yt = !1;
    function St(e, t, a, r) {
      t.child = e === null ? zm(t, null, a, r) : kr(t, e.child, a, r);
    }
    function Ym(e, t, a, r, s) {
      a = a.render;
      var c = t.ref;
      if ("ref" in r) {
        var h = {};
        for (var y in r) y !== "ref" && (h[y] = r[y]);
      } else h = r;
      return (
        _n(t),
        (r = Zu(e, t, a, h, c, s)),
        (y = $u()),
        e !== null && !yt
          ? (Fu(e, t, s), Ua(e, t, s))
          : (Ve && y && Nu(t), (t.flags |= 1), St(e, t, r, s), t.child)
      );
    }
    function Gm(e, t, a, r, s) {
      if (e === null) {
        var c = a.type;
        return typeof c == "function" &&
          !Cu(c) &&
          c.defaultProps === void 0 &&
          a.compare === null
          ? ((t.tag = 15), (t.type = c), Xm(e, t, c, r, s))
          : ((e = oo(a.type, null, r, t, t.mode, s)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((c = e.child), !yc(e, s))) {
        var h = c.memoizedProps;
        if (
          ((a = a.compare),
          (a = a !== null ? a : pl),
          a(h, r) && e.ref === t.ref)
        )
          return Ua(e, t, s);
      }
      return (
        (t.flags |= 1),
        (e = Ra(c, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Xm(e, t, a, r, s) {
      if (e !== null) {
        var c = e.memoizedProps;
        if (pl(c, r) && e.ref === t.ref)
          if (((yt = !1), (t.pendingProps = r = c), yc(e, s)))
            (e.flags & 131072) !== 0 && (yt = !0);
          else return (t.lanes = e.lanes), Ua(e, t, s);
      }
      return fc(e, t, a, r, s);
    }
    function Qm(e, t, a) {
      var r = t.pendingProps,
        s = r.children,
        c = e !== null ? e.memoizedState : null;
      if (r.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (((r = c !== null ? c.baseLanes | a : a), e !== null)) {
            for (s = t.child = e.child, c = 0; s !== null; )
              (c = c | s.lanes | s.childLanes), (s = s.sibling);
            t.childLanes = c & ~r;
          } else (t.childLanes = 0), (t.child = null);
          return Km(e, t, r, a);
        }
        if ((a & 536870912) !== 0)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && ho(t, c !== null ? c.cachePool : null),
            c !== null ? Xg(t, c) : Xu(),
            Mm(t);
        else
          return (
            (t.lanes = t.childLanes = 536870912),
            Km(e, t, c !== null ? c.baseLanes | a : a, a)
          );
      } else
        c !== null
          ? (ho(t, c.cachePool), Xg(t, c), tn(), (t.memoizedState = null))
          : (e !== null && ho(t, null), Xu(), tn());
      return St(e, t, s, a), t.child;
    }
    function Km(e, t, a, r) {
      var s = Bu();
      return (
        (s = s === null ? null : { parent: dt._currentValue, pool: s }),
        (t.memoizedState = { baseLanes: a, cachePool: s }),
        e !== null && ho(t, null),
        Xu(),
        Mm(t),
        e !== null && xl(e, t, r, !0),
        null
      );
    }
    function No(e, t) {
      var a = t.ref;
      if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(o(284));
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function fc(e, t, a, r, s) {
      return (
        _n(t),
        (a = Zu(e, t, a, r, void 0, s)),
        (r = $u()),
        e !== null && !yt
          ? (Fu(e, t, s), Ua(e, t, s))
          : (Ve && r && Nu(t), (t.flags |= 1), St(e, t, a, s), t.child)
      );
    }
    function Zm(e, t, a, r, s, c) {
      return (
        _n(t),
        (t.updateQueue = null),
        (a = Kg(t, r, a, s)),
        Qg(e),
        (r = $u()),
        e !== null && !yt
          ? (Fu(e, t, c), Ua(e, t, c))
          : (Ve && r && Nu(t), (t.flags |= 1), St(e, t, a, c), t.child)
      );
    }
    function $m(e, t, a, r, s) {
      if ((_n(t), t.stateNode === null)) {
        var c = gr,
          h = a.contextType;
        typeof h == "object" && h !== null && (c = Ot(h)),
          (c = new a(r, c)),
          (t.memoizedState =
            c.state !== null && c.state !== void 0 ? c.state : null),
          (c.updater = uc),
          (t.stateNode = c),
          (c._reactInternals = t),
          (c = t.stateNode),
          (c.props = r),
          (c.state = t.memoizedState),
          (c.refs = {}),
          ju(t),
          (h = a.contextType),
          (c.context = typeof h == "object" && h !== null ? Ot(h) : gr),
          (c.state = t.memoizedState),
          (h = a.getDerivedStateFromProps),
          typeof h == "function" &&
            (sc(t, a, h, r), (c.state = t.memoizedState)),
          typeof a.getDerivedStateFromProps == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function" ||
            (typeof c.UNSAFE_componentWillMount != "function" &&
              typeof c.componentWillMount != "function") ||
            ((h = c.state),
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" &&
              c.UNSAFE_componentWillMount(),
            h !== c.state && uc.enqueueReplaceState(c, c.state, null),
            Ol(t, r, c, s),
            Cl(),
            (c.state = t.memoizedState)),
          typeof c.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !0);
      } else if (e === null) {
        c = t.stateNode;
        var y = t.memoizedProps,
          x = Bn(a, y);
        c.props = x;
        var R = c.context,
          j = a.contextType;
        (h = gr), typeof j == "object" && j !== null && (h = Ot(j));
        var X = a.getDerivedStateFromProps;
        (j =
          typeof X == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function"),
          (y = t.pendingProps !== y),
          j ||
            (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
              typeof c.componentWillReceiveProps != "function") ||
            ((y || R !== h) && Lm(t, c, r, h)),
          (Ja = !1);
        var D = t.memoizedState;
        (c.state = D),
          Ol(t, r, c, s),
          Cl(),
          (R = t.memoizedState),
          y || D !== R || Ja
            ? (typeof X == "function" &&
                (sc(t, a, X, r), (R = t.memoizedState)),
              (x = Ja || Dm(t, a, x, r, D, R, h))
                ? (j ||
                    (typeof c.UNSAFE_componentWillMount != "function" &&
                      typeof c.componentWillMount != "function") ||
                    (typeof c.componentWillMount == "function" &&
                      c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" &&
                      c.UNSAFE_componentWillMount()),
                  typeof c.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof c.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = R)),
              (c.props = r),
              (c.state = R),
              (c.context = h),
              (r = x))
            : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
              (r = !1));
      } else {
        (c = t.stateNode),
          qu(e, t),
          (h = t.memoizedProps),
          (j = Bn(a, h)),
          (c.props = j),
          (X = t.pendingProps),
          (D = c.context),
          (R = a.contextType),
          (x = gr),
          typeof R == "object" && R !== null && (x = Ot(R)),
          (y = a.getDerivedStateFromProps),
          (R =
            typeof y == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function") ||
            (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
              typeof c.componentWillReceiveProps != "function") ||
            ((h !== X || D !== x) && Lm(t, c, r, x)),
          (Ja = !1),
          (D = t.memoizedState),
          (c.state = D),
          Ol(t, r, c, s),
          Cl();
        var L = t.memoizedState;
        h !== X ||
        D !== L ||
        Ja ||
        (e !== null && e.dependencies !== null && co(e.dependencies))
          ? (typeof y == "function" && (sc(t, a, y, r), (L = t.memoizedState)),
            (j =
              Ja ||
              Dm(t, a, j, r, D, L, x) ||
              (e !== null && e.dependencies !== null && co(e.dependencies)))
              ? (R ||
                  (typeof c.UNSAFE_componentWillUpdate != "function" &&
                    typeof c.componentWillUpdate != "function") ||
                  (typeof c.componentWillUpdate == "function" &&
                    c.componentWillUpdate(r, L, x),
                  typeof c.UNSAFE_componentWillUpdate == "function" &&
                    c.UNSAFE_componentWillUpdate(r, L, x)),
                typeof c.componentDidUpdate == "function" && (t.flags |= 4),
                typeof c.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof c.componentDidUpdate != "function" ||
                  (h === e.memoizedProps && D === e.memoizedState) ||
                  (t.flags |= 4),
                typeof c.getSnapshotBeforeUpdate != "function" ||
                  (h === e.memoizedProps && D === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = L)),
            (c.props = r),
            (c.state = L),
            (c.context = x),
            (r = j))
          : (typeof c.componentDidUpdate != "function" ||
              (h === e.memoizedProps && D === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (h === e.memoizedProps && D === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (c = r),
        No(e, t),
        (r = (t.flags & 128) !== 0),
        c || r
          ? ((c = t.stateNode),
            (a =
              r && typeof a.getDerivedStateFromError != "function"
                ? null
                : c.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = kr(t, e.child, null, s)),
                (t.child = kr(t, null, a, s)))
              : St(e, t, a, s),
            (t.memoizedState = c.state),
            (e = t.child))
          : (e = Ua(e, t, s)),
        e
      );
    }
    function Fm(e, t, a, r) {
      return vl(), (t.flags |= 256), St(e, t, a, r), t.child;
    }
    var dc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function hc(e) {
      return { baseLanes: e, cachePool: Ug() };
    }
    function gc(e, t, a) {
      return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= ta), e;
    }
    function Jm(e, t, a) {
      var r = t.pendingProps,
        s = !1,
        c = (t.flags & 128) !== 0,
        h;
      if (
        ((h = c) ||
          (h =
            e !== null && e.memoizedState === null
              ? !1
              : (ht.current & 2) !== 0),
        h && ((s = !0), (t.flags &= -129)),
        (h = (t.flags & 32) !== 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (Ve) {
          if ((s ? en(t) : tn(), Ve)) {
            var y = et,
              x;
            if ((x = y)) {
              e: {
                for (x = y, y = ha; x.nodeType !== 8; ) {
                  if (!y) {
                    y = null;
                    break e;
                  }
                  if (((x = sa(x.nextSibling)), x === null)) {
                    y = null;
                    break e;
                  }
                }
                y = x;
              }
              y !== null
                ? ((t.memoizedState = {
                    dehydrated: y,
                    treeContext: Nn !== null ? { id: Na, overflow: za } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (x = jt(18, null, null, 0)),
                  (x.stateNode = y),
                  (x.return = t),
                  (t.child = x),
                  (zt = t),
                  (et = null),
                  (x = !0))
                : (x = !1);
            }
            x || Dn(t);
          }
          if (
            ((y = t.memoizedState),
            y !== null && ((y = y.dehydrated), y !== null))
          )
            return Ic(y) ? (t.lanes = 32) : (t.lanes = 536870912), null;
          _a(t);
        }
        return (
          (y = r.children),
          (r = r.fallback),
          s
            ? (tn(),
              (s = t.mode),
              (y = zo({ mode: "hidden", children: y }, s)),
              (r = Rn(r, s, a, null)),
              (y.return = t),
              (r.return = t),
              (y.sibling = r),
              (t.child = y),
              (s = t.child),
              (s.memoizedState = hc(a)),
              (s.childLanes = gc(e, h, a)),
              (t.memoizedState = dc),
              r)
            : (en(t), mc(t, y))
        );
      }
      if (
        ((x = e.memoizedState), x !== null && ((y = x.dehydrated), y !== null))
      ) {
        if (c)
          t.flags & 256
            ? (en(t), (t.flags &= -257), (t = pc(e, t, a)))
            : t.memoizedState !== null
            ? (tn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (tn(),
              (s = r.fallback),
              (y = t.mode),
              (r = zo({ mode: "visible", children: r.children }, y)),
              (s = Rn(s, y, a, null)),
              (s.flags |= 2),
              (r.return = t),
              (s.return = t),
              (r.sibling = s),
              (t.child = r),
              kr(t, e.child, null, a),
              (r = t.child),
              (r.memoizedState = hc(a)),
              (r.childLanes = gc(e, h, a)),
              (t.memoizedState = dc),
              (t = s));
        else if ((en(t), Ic(y))) {
          if (((h = y.nextSibling && y.nextSibling.dataset), h)) var R = h.dgst;
          (h = R),
            (r = Error(o(419))),
            (r.stack = ""),
            (r.digest = h),
            wl({ value: r, source: null, stack: null }),
            (t = pc(e, t, a));
        } else if (
          (yt || xl(e, t, a, !1), (h = (a & e.childLanes) !== 0), yt || h)
        ) {
          if (
            ((h = Ze),
            h !== null &&
              ((r = a & -a),
              (r = (r & 42) !== 0 ? 1 : Ps(r)),
              (r = (r & (h.suspendedLanes | a)) !== 0 ? 0 : r),
              r !== 0 && r !== x.retryLane))
          )
            throw ((x.retryLane = r), hr(e, r), Qt(h, e, r), qm);
          y.data === "$?" || Lc(), (t = pc(e, t, a));
        } else
          y.data === "$?"
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = x.treeContext),
              (et = sa(y.nextSibling)),
              (zt = t),
              (Ve = !0),
              (Mn = null),
              (ha = !1),
              e !== null &&
                ((Pt[Wt++] = Na),
                (Pt[Wt++] = za),
                (Pt[Wt++] = Nn),
                (Na = e.id),
                (za = e.overflow),
                (Nn = t)),
              (t = mc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return s
        ? (tn(),
          (s = r.fallback),
          (y = t.mode),
          (x = e.child),
          (R = x.sibling),
          (r = Ra(x, { mode: "hidden", children: r.children })),
          (r.subtreeFlags = x.subtreeFlags & 65011712),
          R !== null
            ? (s = Ra(R, s))
            : ((s = Rn(s, y, a, null)), (s.flags |= 2)),
          (s.return = t),
          (r.return = t),
          (r.sibling = s),
          (t.child = r),
          (r = s),
          (s = t.child),
          (y = e.child.memoizedState),
          y === null
            ? (y = hc(a))
            : ((x = y.cachePool),
              x !== null
                ? ((R = dt._currentValue),
                  (x = x.parent !== R ? { parent: R, pool: R } : x))
                : (x = Ug()),
              (y = { baseLanes: y.baseLanes | a, cachePool: x })),
          (s.memoizedState = y),
          (s.childLanes = gc(e, h, a)),
          (t.memoizedState = dc),
          r)
        : (en(t),
          (a = e.child),
          (e = a.sibling),
          (a = Ra(a, { mode: "visible", children: r.children })),
          (a.return = t),
          (a.sibling = null),
          e !== null &&
            ((h = t.deletions),
            h === null ? ((t.deletions = [e]), (t.flags |= 16)) : h.push(e)),
          (t.child = a),
          (t.memoizedState = null),
          a);
    }
    function mc(e, t) {
      return (
        (t = zo({ mode: "visible", children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function zo(e, t) {
      return (
        (e = jt(22, e, null, t)),
        (e.lanes = 0),
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        e
      );
    }
    function pc(e, t, a) {
      return (
        kr(t, e.child, null, a),
        (e = mc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Im(e, t, a) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), Lu(e.return, t, a);
    }
    function bc(e, t, a, r, s) {
      var c = e.memoizedState;
      c === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: a,
            tailMode: s,
          })
        : ((c.isBackwards = t),
          (c.rendering = null),
          (c.renderingStartTime = 0),
          (c.last = r),
          (c.tail = a),
          (c.tailMode = s));
    }
    function Pm(e, t, a) {
      var r = t.pendingProps,
        s = r.revealOrder,
        c = r.tail;
      if ((St(e, t, r.children, a), (r = ht.current), (r & 2) !== 0))
        (r = (r & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && Im(e, a, t);
            else if (e.tag === 19) Im(e, a, t);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      switch ((Z(ht, r), s)) {
        case "forwards":
          for (a = t.child, s = null; a !== null; )
            (e = a.alternate),
              e !== null && Co(e) === null && (s = a),
              (a = a.sibling);
          (a = s),
            a === null
              ? ((s = t.child), (t.child = null))
              : ((s = a.sibling), (a.sibling = null)),
            bc(t, !1, s, a, c);
          break;
        case "backwards":
          for (a = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && Co(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = a), (a = s), (s = e);
          }
          bc(t, !0, a, null, c);
          break;
        case "together":
          bc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ua(e, t, a) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (on |= t.lanes),
        (a & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((xl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(o(153));
      if (t.child !== null) {
        for (
          e = t.child, a = Ra(e, e.pendingProps), t.child = a, a.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (a = a.sibling = Ra(e, e.pendingProps)),
            (a.return = t);
        a.sibling = null;
      }
      return t.child;
    }
    function yc(e, t) {
      return (e.lanes & t) !== 0
        ? !0
        : ((e = e.dependencies), !!(e !== null && co(e)));
    }
    function T2(e, t, a) {
      switch (t.tag) {
        case 3:
          He(t, t.stateNode.containerInfo),
            Fa(t, dt, e.memoizedState.cache),
            vl();
          break;
        case 27:
        case 5:
          Dt(t);
          break;
        case 4:
          He(t, t.stateNode.containerInfo);
          break;
        case 10:
          Fa(t, t.type, t.memoizedProps.value);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated !== null
              ? (en(t), (t.flags |= 128), null)
              : (a & t.child.childLanes) !== 0
              ? Jm(e, t, a)
              : (en(t), (e = Ua(e, t, a)), e !== null ? e.sibling : null);
          en(t);
          break;
        case 19:
          var s = (e.flags & 128) !== 0;
          if (
            ((r = (a & t.childLanes) !== 0),
            r || (xl(e, t, a, !1), (r = (a & t.childLanes) !== 0)),
            s)
          ) {
            if (r) return Pm(e, t, a);
            t.flags |= 128;
          }
          if (
            ((s = t.memoizedState),
            s !== null &&
              ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
            Z(ht, ht.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), Qm(e, t, a);
        case 24:
          Fa(t, dt, e.memoizedState.cache);
      }
      return Ua(e, t, a);
    }
    function Wm(e, t, a) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) yt = !0;
        else {
          if (!yc(e, a) && (t.flags & 128) === 0) return (yt = !1), T2(e, t, a);
          yt = (e.flags & 131072) !== 0;
        }
      else (yt = !1), Ve && (t.flags & 1048576) !== 0 && Rg(t, uo, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          e: {
            e = t.pendingProps;
            var r = t.elementType,
              s = r._init;
            if (((r = s(r._payload)), (t.type = r), typeof r == "function"))
              Cu(r)
                ? ((e = Bn(r, e)), (t.tag = 1), (t = $m(null, t, r, e, a)))
                : ((t.tag = 0), (t = fc(null, t, r, e, a)));
            else {
              if (r != null) {
                if (((s = r.$$typeof), s === J)) {
                  (t.tag = 11), (t = Ym(null, t, r, e, a));
                  break e;
                } else if (s === ae) {
                  (t.tag = 14), (t = Gm(null, t, r, e, a));
                  break e;
                }
              }
              throw ((t = Te(r) || r), Error(o(306, t, "")));
            }
          }
          return t;
        case 0:
          return fc(e, t, t.type, t.pendingProps, a);
        case 1:
          return (r = t.type), (s = Bn(r, t.pendingProps)), $m(e, t, r, s, a);
        case 3:
          e: {
            if ((He(t, t.stateNode.containerInfo), e === null))
              throw Error(o(387));
            r = t.pendingProps;
            var c = t.memoizedState;
            (s = c.element), qu(e, t), Ol(t, r, null, a);
            var h = t.memoizedState;
            if (
              ((r = h.cache),
              Fa(t, dt, r),
              r !== c.cache && _u(t, [dt], a, !0),
              Cl(),
              (r = h.element),
              c.isDehydrated)
            )
              if (
                ((c = { element: r, isDehydrated: !1, cache: h.cache }),
                (t.updateQueue.baseState = c),
                (t.memoizedState = c),
                t.flags & 256)
              ) {
                t = Fm(e, t, r, a);
                break e;
              } else if (r !== s) {
                (s = Jt(Error(o(424)), t)), wl(s), (t = Fm(e, t, r, a));
                break e;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (
                  et = sa(e.firstChild),
                    zt = t,
                    Ve = !0,
                    Mn = null,
                    ha = !0,
                    a = zm(t, null, r, a),
                    t.child = a;
                  a;

                )
                  (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
              }
            else {
              if ((vl(), r === s)) {
                t = Ua(e, t, a);
                break e;
              }
              St(e, t, r, a);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            No(e, t),
            e === null
              ? (a = n0(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = a)
                : Ve ||
                  ((a = t.type),
                  (e = t.pendingProps),
                  (r = Qo(pe.current).createElement(a)),
                  (r[Ct] = t),
                  (r[Lt] = e),
                  kt(r, a, e),
                  bt(r),
                  (t.stateNode = r))
              : (t.memoizedState = n0(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            Dt(t),
            e === null &&
              Ve &&
              ((r = t.stateNode = e0(t.type, t.pendingProps, pe.current)),
              (zt = t),
              (ha = !0),
              (s = et),
              fn(t.type) ? ((Pc = s), (et = sa(r.firstChild))) : (et = s)),
            St(e, t, t.pendingProps.children, a),
            No(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              Ve &&
              ((s = r = et) &&
                ((r = eS(r, t.type, t.pendingProps, ha)),
                r !== null
                  ? ((t.stateNode = r),
                    (zt = t),
                    (et = sa(r.firstChild)),
                    (ha = !1),
                    (s = !0))
                  : (s = !1)),
              s || Dn(t)),
            Dt(t),
            (s = t.type),
            (c = t.pendingProps),
            (h = e !== null ? e.memoizedProps : null),
            (r = c.children),
            $c(s, c) ? (r = null) : h !== null && $c(s, h) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((s = Zu(e, t, y2, null, null, a)), (Jl._currentValue = s)),
            No(e, t),
            St(e, t, r, a),
            t.child
          );
        case 6:
          return (
            e === null &&
              Ve &&
              ((e = a = et) &&
                ((a = tS(a, t.pendingProps, ha)),
                a !== null
                  ? ((t.stateNode = a), (zt = t), (et = null), (e = !0))
                  : (e = !1)),
              e || Dn(t)),
            null
          );
        case 13:
          return Jm(e, t, a);
        case 4:
          return (
            He(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = kr(t, null, r, a)) : St(e, t, r, a),
            t.child
          );
        case 11:
          return Ym(e, t, t.type, t.pendingProps, a);
        case 7:
          return St(e, t, t.pendingProps, a), t.child;
        case 8:
          return St(e, t, t.pendingProps.children, a), t.child;
        case 12:
          return St(e, t, t.pendingProps.children, a), t.child;
        case 10:
          return (
            (r = t.pendingProps),
            Fa(t, t.type, r.value),
            St(e, t, r.children, a),
            t.child
          );
        case 9:
          return (
            (s = t.type._context),
            (r = t.pendingProps.children),
            _n(t),
            (s = Ot(s)),
            (r = r(s)),
            (t.flags |= 1),
            St(e, t, r, a),
            t.child
          );
        case 14:
          return Gm(e, t, t.type, t.pendingProps, a);
        case 15:
          return Xm(e, t, t.type, t.pendingProps, a);
        case 19:
          return Pm(e, t, a);
        case 31:
          return (
            (r = t.pendingProps),
            (a = t.mode),
            (r = { mode: r.mode, children: r.children }),
            e === null
              ? ((a = zo(r, a)),
                (a.ref = t.ref),
                (t.child = a),
                (a.return = t),
                (t = a))
              : ((a = Ra(e.child, r)),
                (a.ref = t.ref),
                (t.child = a),
                (a.return = t),
                (t = a)),
            t
          );
        case 22:
          return Qm(e, t, a);
        case 24:
          return (
            _n(t),
            (r = Ot(dt)),
            e === null
              ? ((s = Bu()),
                s === null &&
                  ((s = Ze),
                  (c = Uu()),
                  (s.pooledCache = c),
                  c.refCount++,
                  c !== null && (s.pooledCacheLanes |= a),
                  (s = c)),
                (t.memoizedState = { parent: r, cache: s }),
                ju(t),
                Fa(t, dt, s))
              : ((e.lanes & a) !== 0 && (qu(e, t), Ol(t, null, null, a), Cl()),
                (s = e.memoizedState),
                (c = t.memoizedState),
                s.parent !== r
                  ? ((s = { parent: r, cache: r }),
                    (t.memoizedState = s),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = s),
                    Fa(t, dt, r))
                  : ((r = c.cache),
                    Fa(t, dt, r),
                    r !== s.cache && _u(t, [dt], a, !0))),
            St(e, t, t.pendingProps.children, a),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function Ha(e) {
      e.flags |= 4;
    }
    function ep(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
        e.flags &= -16777217;
      else if (((e.flags |= 16777216), !s0(t))) {
        if (
          ((t = ea.current),
          t !== null &&
            ((Ue & 4194048) === Ue
              ? ga !== null
              : ((Ue & 62914560) !== Ue && (Ue & 536870912) === 0) || t !== ga))
        )
          throw ((Al = Vu), Hg);
        e.flags |= 8192;
      }
    }
    function Mo(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag !== 22 ? Mh() : 536870912), (e.lanes |= t), (Or |= t));
    }
    function _l(e, t) {
      if (!Ve)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), (t = t.sibling);
            a === null ? (e.tail = null) : (a.sibling = null);
            break;
          case "collapsed":
            a = e.tail;
            for (var r = null; a !== null; )
              a.alternate !== null && (r = a), (a = a.sibling);
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Ie(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        a = 0,
        r = 0;
      if (t)
        for (var s = e.child; s !== null; )
          (a |= s.lanes | s.childLanes),
            (r |= s.subtreeFlags & 65011712),
            (r |= s.flags & 65011712),
            (s.return = e),
            (s = s.sibling);
      else
        for (s = e.child; s !== null; )
          (a |= s.lanes | s.childLanes),
            (r |= s.subtreeFlags),
            (r |= s.flags),
            (s.return = e),
            (s = s.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = a), t;
    }
    function C2(e, t, a) {
      var r = t.pendingProps;
      switch ((zu(t), t.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ie(t), null;
        case 1:
          return Ie(t), null;
        case 3:
          return (
            (a = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Da(dt),
            ot(),
            a.pendingContext &&
              ((a.context = a.pendingContext), (a.pendingContext = null)),
            (e === null || e.child === null) &&
              (yl(t)
                ? Ha(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                  ((t.flags |= 1024), Mg())),
            Ie(t),
            null
          );
        case 26:
          return (
            (a = t.memoizedState),
            e === null
              ? (Ha(t),
                a !== null
                  ? (Ie(t), ep(t, a))
                  : (Ie(t), (t.flags &= -16777217)))
              : a
              ? a !== e.memoizedState
                ? (Ha(t), Ie(t), ep(t, a))
                : (Ie(t), (t.flags &= -16777217))
              : (e.memoizedProps !== r && Ha(t), Ie(t), (t.flags &= -16777217)),
            null
          );
        case 27:
          Kt(t), (a = pe.current);
          var s = t.type;
          if (e !== null && t.stateNode != null) e.memoizedProps !== r && Ha(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(o(166));
              return Ie(t), null;
            }
            (e = re.current),
              yl(t) ? Ng(t) : ((e = e0(s, r, a)), (t.stateNode = e), Ha(t));
          }
          return Ie(t), null;
        case 5:
          if ((Kt(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ha(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(o(166));
              return Ie(t), null;
            }
            if (((e = re.current), yl(t))) Ng(t);
            else {
              switch (((s = Qo(pe.current)), e)) {
                case 1:
                  e = s.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  e = s.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = s.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      e = s.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        a
                      );
                      break;
                    case "script":
                      (e = s.createElement("div")),
                        (e.innerHTML = "<script></script>"),
                        (e = e.removeChild(e.firstChild));
                      break;
                    case "select":
                      (e =
                        typeof r.is == "string"
                          ? s.createElement("select", { is: r.is })
                          : s.createElement("select")),
                        r.multiple
                          ? (e.multiple = !0)
                          : r.size && (e.size = r.size);
                      break;
                    default:
                      e =
                        typeof r.is == "string"
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              (e[Ct] = t), (e[Lt] = r);
              e: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  (s.child.return = s), (s = s.child);
                  continue;
                }
                if (s === t) break e;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break e;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
              t.stateNode = e;
              e: switch ((kt(e, a, r), a)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!r.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Ha(t);
            }
          }
          return Ie(t), (t.flags &= -16777217), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ha(t);
          else {
            if (typeof r != "string" && t.stateNode === null)
              throw Error(o(166));
            if (((e = pe.current), yl(t))) {
              if (
                ((e = t.stateNode),
                (a = t.memoizedProps),
                (r = null),
                (s = zt),
                s !== null)
              )
                switch (s.tag) {
                  case 27:
                  case 5:
                    r = s.memoizedProps;
                }
              (e[Ct] = t),
                (e = !!(
                  e.nodeValue === a ||
                  (r !== null && r.suppressHydrationWarning === !0) ||
                  Zp(e.nodeValue, a)
                )),
                e || Dn(t);
            } else
              (e = Qo(e).createTextNode(r)), (e[Ct] = t), (t.stateNode = e);
          }
          return Ie(t), null;
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((s = yl(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(o(318));
                if (
                  ((s = t.memoizedState),
                  (s = s !== null ? s.dehydrated : null),
                  !s)
                )
                  throw Error(o(317));
                s[Ct] = t;
              } else
                vl(),
                  (t.flags & 128) === 0 && (t.memoizedState = null),
                  (t.flags |= 4);
              Ie(t), (s = !1);
            } else
              (s = Mg()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = s),
                (s = !0);
            if (!s) return t.flags & 256 ? (_a(t), t) : (_a(t), null);
          }
          if ((_a(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
          if (
            ((a = r !== null), (e = e !== null && e.memoizedState !== null), a)
          ) {
            (r = t.child),
              (s = null),
              r.alternate !== null &&
                r.alternate.memoizedState !== null &&
                r.alternate.memoizedState.cachePool !== null &&
                (s = r.alternate.memoizedState.cachePool.pool);
            var c = null;
            r.memoizedState !== null &&
              r.memoizedState.cachePool !== null &&
              (c = r.memoizedState.cachePool.pool),
              c !== s && (r.flags |= 2048);
          }
          return (
            a !== e && a && (t.child.flags |= 8192),
            Mo(t, t.updateQueue),
            Ie(t),
            null
          );
        case 4:
          return ot(), e === null && Gc(t.stateNode.containerInfo), Ie(t), null;
        case 10:
          return Da(t.type), Ie(t), null;
        case 19:
          if ((ee(ht), (s = t.memoizedState), s === null)) return Ie(t), null;
          if (((r = (t.flags & 128) !== 0), (c = s.rendering), c === null))
            if (r) _l(s, !1);
            else {
              if (tt !== 0 || (e !== null && (e.flags & 128) !== 0))
                for (e = t.child; e !== null; ) {
                  if (((c = Co(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        _l(s, !1),
                        e = c.updateQueue,
                        t.updateQueue = e,
                        Mo(t, e),
                        t.subtreeFlags = 0,
                        e = a,
                        a = t.child;
                      a !== null;

                    )
                      Og(a, e), (a = a.sibling);
                    return Z(ht, (ht.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                Zt() > _o &&
                ((t.flags |= 128), (r = !0), _l(s, !1), (t.lanes = 4194304));
            }
          else {
            if (!r)
              if (((e = Co(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Mo(t, e),
                  _l(s, !0),
                  s.tail === null &&
                    s.tailMode === "hidden" &&
                    !c.alternate &&
                    !Ve)
                )
                  return Ie(t), null;
              } else
                2 * Zt() - s.renderingStartTime > _o &&
                  a !== 536870912 &&
                  ((t.flags |= 128), (r = !0), _l(s, !1), (t.lanes = 4194304));
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((e = s.last),
                e !== null ? (e.sibling = c) : (t.child = c),
                (s.last = c));
          }
          return s.tail !== null
            ? ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = Zt()),
              (t.sibling = null),
              (e = ht.current),
              Z(ht, r ? (e & 1) | 2 : e & 1),
              t)
            : (Ie(t), null);
        case 22:
        case 23:
          return (
            _a(t),
            Qu(),
            (r = t.memoizedState !== null),
            e !== null
              ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
              : r && (t.flags |= 8192),
            r
              ? (a & 536870912) !== 0 &&
                (t.flags & 128) === 0 &&
                (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Ie(t),
            (a = t.updateQueue),
            a !== null && Mo(t, a.retryQueue),
            (a = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (a = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== a && (t.flags |= 2048),
            e !== null && ee(Un),
            null
          );
        case 24:
          return (
            (a = null),
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Da(dt),
            Ie(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, t.tag));
    }
    function O2(e, t) {
      switch ((zu(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Da(dt),
            ot(),
            (e = t.flags),
            (e & 65536) !== 0 && (e & 128) === 0
              ? ((t.flags = (e & -65537) | 128), t)
              : null
          );
        case 26:
        case 27:
        case 5:
          return Kt(t), null;
        case 13:
          if (
            (_a(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(o(340));
            vl();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return ee(ht), null;
        case 4:
          return ot(), null;
        case 10:
          return Da(t.type), null;
        case 22:
        case 23:
          return (
            _a(t),
            Qu(),
            e !== null && ee(Un),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return Da(dt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function tp(e, t) {
      switch ((zu(t), t.tag)) {
        case 3:
          Da(dt), ot();
          break;
        case 26:
        case 27:
        case 5:
          Kt(t);
          break;
        case 4:
          ot();
          break;
        case 13:
          _a(t);
          break;
        case 19:
          ee(ht);
          break;
        case 10:
          Da(t.type);
          break;
        case 22:
        case 23:
          _a(t), Qu(), e !== null && ee(Un);
          break;
        case 24:
          Da(dt);
      }
    }
    function Ul(e, t) {
      try {
        var a = t.updateQueue,
          r = a !== null ? a.lastEffect : null;
        if (r !== null) {
          var s = r.next;
          a = s;
          do {
            if ((a.tag & e) === e) {
              r = void 0;
              var c = a.create,
                h = a.inst;
              (r = c()), (h.destroy = r);
            }
            a = a.next;
          } while (a !== s);
        }
      } catch (y) {
        Qe(t, t.return, y);
      }
    }
    function an(e, t, a) {
      try {
        var r = t.updateQueue,
          s = r !== null ? r.lastEffect : null;
        if (s !== null) {
          var c = s.next;
          r = c;
          do {
            if ((r.tag & e) === e) {
              var h = r.inst,
                y = h.destroy;
              if (y !== void 0) {
                (h.destroy = void 0), (s = t);
                var x = a,
                  R = y;
                try {
                  R();
                } catch (j) {
                  Qe(s, x, j);
                }
              }
            }
            r = r.next;
          } while (r !== c);
        }
      } catch (j) {
        Qe(t, t.return, j);
      }
    }
    function ap(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        try {
          Gg(t, a);
        } catch (r) {
          Qe(e, e.return, r);
        }
      }
    }
    function np(e, t, a) {
      (a.props = Bn(e.type, e.memoizedProps)), (a.state = e.memoizedState);
      try {
        a.componentWillUnmount();
      } catch (r) {
        Qe(e, t, r);
      }
    }
    function Hl(e, t) {
      try {
        var a = e.ref;
        if (a !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof a == "function" ? (e.refCleanup = a(r)) : (a.current = r);
        }
      } catch (s) {
        Qe(e, t, s);
      }
    }
    function ma(e, t) {
      var a = e.ref,
        r = e.refCleanup;
      if (a !== null)
        if (typeof r == "function")
          try {
            r();
          } catch (s) {
            Qe(e, t, s);
          } finally {
            (e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            a(null);
          } catch (s) {
            Qe(e, t, s);
          }
        else a.current = null;
    }
    function rp(e) {
      var t = e.type,
        a = e.memoizedProps,
        r = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && r.focus();
            break e;
          case "img":
            a.src ? (r.src = a.src) : a.srcSet && (r.srcset = a.srcSet);
        }
      } catch (s) {
        Qe(e, e.return, s);
      }
    }
    function vc(e, t, a) {
      try {
        var r = e.stateNode;
        F2(r, e.type, a, t), (r[Lt] = t);
      } catch (s) {
        Qe(e, e.return, s);
      }
    }
    function lp(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && fn(e.type)) ||
        e.tag === 4
      );
    }
    function wc(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || lp(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && fn(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function xc(e, t, a) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode),
          t
            ? (a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
              ).insertBefore(e, t)
            : ((t =
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
              t.appendChild(e),
              (a = a._reactRootContainer),
              a != null || t.onclick !== null || (t.onclick = Xo));
      else if (
        r !== 4 &&
        (r === 27 && fn(e.type) && ((a = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (xc(e, t, a), e = e.sibling; e !== null; )
          xc(e, t, a), (e = e.sibling);
    }
    function Do(e, t, a) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (
        r !== 4 &&
        (r === 27 && fn(e.type) && (a = e.stateNode), (e = e.child), e !== null)
      )
        for (Do(e, t, a), e = e.sibling; e !== null; )
          Do(e, t, a), (e = e.sibling);
    }
    function ip(e) {
      var t = e.stateNode,
        a = e.memoizedProps;
      try {
        for (var r = e.type, s = t.attributes; s.length; )
          t.removeAttributeNode(s[0]);
        kt(t, r, a), (t[Ct] = e), (t[Lt] = a);
      } catch (c) {
        Qe(e, e.return, c);
      }
    }
    var Ba = !1,
      rt = !1,
      Sc = !1,
      op = typeof WeakSet == "function" ? WeakSet : Set,
      vt = null;
    function R2(e, t) {
      if (((e = e.containerInfo), (Kc = Io), (e = yg(e)), wu(e))) {
        if ("selectionStart" in e)
          var a = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            a = ((a = e.ownerDocument) && a.defaultView) || window;
            var r = a.getSelection && a.getSelection();
            if (r && r.rangeCount !== 0) {
              a = r.anchorNode;
              var s = r.anchorOffset,
                c = r.focusNode;
              r = r.focusOffset;
              try {
                a.nodeType, c.nodeType;
              } catch {
                a = null;
                break e;
              }
              var h = 0,
                y = -1,
                x = -1,
                R = 0,
                j = 0,
                X = e,
                D = null;
              t: for (;;) {
                for (
                  var L;
                  X !== a || (s !== 0 && X.nodeType !== 3) || (y = h + s),
                    X !== c || (r !== 0 && X.nodeType !== 3) || (x = h + r),
                    X.nodeType === 3 && (h += X.nodeValue.length),
                    (L = X.firstChild) !== null;

                )
                  (D = X), (X = L);
                for (;;) {
                  if (X === e) break t;
                  if (
                    (D === a && ++R === s && (y = h),
                    D === c && ++j === r && (x = h),
                    (L = X.nextSibling) !== null)
                  )
                    break;
                  (X = D), (D = X.parentNode);
                }
                X = L;
              }
              a = y === -1 || x === -1 ? null : { start: y, end: x };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (
        Zc = { focusedElem: e, selectionRange: a }, Io = !1, vt = t;
        vt !== null;

      )
        if (
          ((t = vt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
        )
          (e.return = t), (vt = e);
        else
          for (; vt !== null; ) {
            switch (((t = vt), (c = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((e & 1024) !== 0 && c !== null) {
                  (e = void 0),
                    (a = t),
                    (s = c.memoizedProps),
                    (c = c.memoizedState),
                    (r = a.stateNode);
                  try {
                    var ve = Bn(a.type, s, a.elementType === a.type);
                    (e = r.getSnapshotBeforeUpdate(ve, c)),
                      (r.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (be) {
                    Qe(a, a.return, be);
                  }
                }
                break;
              case 3:
                if ((e & 1024) !== 0) {
                  if (
                    ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                  )
                    Jc(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Jc(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((e & 1024) !== 0) throw Error(o(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (vt = e);
              break;
            }
            vt = t.return;
          }
    }
    function sp(e, t, a) {
      var r = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          nn(e, a), r & 4 && Ul(5, a);
          break;
        case 1:
          if ((nn(e, a), r & 4))
            if (((e = a.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (h) {
                Qe(a, a.return, h);
              }
            else {
              var s = Bn(a.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  s,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (h) {
                Qe(a, a.return, h);
              }
            }
          r & 64 && ap(a), r & 512 && Hl(a, a.return);
          break;
        case 3:
          if ((nn(e, a), r & 64 && ((e = a.updateQueue), e !== null))) {
            if (((t = null), a.child !== null))
              switch (a.child.tag) {
                case 27:
                case 5:
                  t = a.child.stateNode;
                  break;
                case 1:
                  t = a.child.stateNode;
              }
            try {
              Gg(e, t);
            } catch (h) {
              Qe(a, a.return, h);
            }
          }
          break;
        case 27:
          t === null && r & 4 && ip(a);
        case 26:
        case 5:
          nn(e, a), t === null && r & 4 && rp(a), r & 512 && Hl(a, a.return);
          break;
        case 12:
          nn(e, a);
          break;
        case 13:
          nn(e, a),
            r & 4 && fp(e, a),
            r & 64 &&
              ((e = a.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((a = B2.bind(null, a)), aS(e, a))));
          break;
        case 22:
          if (((r = a.memoizedState !== null || Ba), !r)) {
            (t = (t !== null && t.memoizedState !== null) || rt), (s = Ba);
            var c = rt;
            (Ba = r),
              (rt = t) && !c
                ? rn(e, a, (a.subtreeFlags & 8772) !== 0)
                : nn(e, a),
              (Ba = s),
              (rt = c);
          }
          break;
        case 30:
          break;
        default:
          nn(e, a);
      }
    }
    function up(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), up(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && tu(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var Je = null,
      Ht = !1;
    function Va(e, t, a) {
      for (a = a.child; a !== null; ) cp(e, t, a), (a = a.sibling);
    }
    function cp(e, t, a) {
      if (ke && typeof ke.onCommitFiberUnmount == "function")
        try {
          ke.onCommitFiberUnmount(fe, a);
        } catch {}
      switch (a.tag) {
        case 26:
          rt || ma(a, t),
            Va(e, t, a),
            a.memoizedState
              ? a.memoizedState.count--
              : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
          break;
        case 27:
          rt || ma(a, t);
          var r = Je,
            s = Ht;
          fn(a.type) && ((Je = a.stateNode), (Ht = !1)),
            Va(e, t, a),
            Kl(a.stateNode),
            (Je = r),
            (Ht = s);
          break;
        case 5:
          rt || ma(a, t);
        case 6:
          if (
            ((r = Je),
            (s = Ht),
            (Je = null),
            Va(e, t, a),
            (Je = r),
            (Ht = s),
            Je !== null)
          )
            if (Ht)
              try {
                (Je.nodeType === 9
                  ? Je.body
                  : Je.nodeName === "HTML"
                  ? Je.ownerDocument.body
                  : Je
                ).removeChild(a.stateNode);
              } catch (c) {
                Qe(a, t, c);
              }
            else
              try {
                Je.removeChild(a.stateNode);
              } catch (c) {
                Qe(a, t, c);
              }
          break;
        case 18:
          Je !== null &&
            (Ht
              ? ((e = Je),
                Pp(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                  a.stateNode
                ),
                ei(e))
              : Pp(Je, a.stateNode));
          break;
        case 4:
          (r = Je),
            (s = Ht),
            (Je = a.stateNode.containerInfo),
            (Ht = !0),
            Va(e, t, a),
            (Je = r),
            (Ht = s);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          rt || an(2, a, t), rt || an(4, a, t), Va(e, t, a);
          break;
        case 1:
          rt ||
            (ma(a, t),
            (r = a.stateNode),
            typeof r.componentWillUnmount == "function" && np(a, t, r)),
            Va(e, t, a);
          break;
        case 21:
          Va(e, t, a);
          break;
        case 22:
          (rt = (r = rt) || a.memoizedState !== null), Va(e, t, a), (rt = r);
          break;
        default:
          Va(e, t, a);
      }
    }
    function fp(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          ei(e);
        } catch (a) {
          Qe(t, t.return, a);
        }
    }
    function N2(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new op()), t;
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new op()),
            t
          );
        default:
          throw Error(o(435, e.tag));
      }
    }
    function Ec(e, t) {
      var a = N2(e);
      t.forEach(function (r) {
        var s = V2.bind(null, e, r);
        a.has(r) || (a.add(r), r.then(s, s));
      });
    }
    function qt(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var r = 0; r < a.length; r++) {
          var s = a[r],
            c = e,
            h = t,
            y = h;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (fn(y.type)) {
                  (Je = y.stateNode), (Ht = !1);
                  break e;
                }
                break;
              case 5:
                (Je = y.stateNode), (Ht = !1);
                break e;
              case 3:
              case 4:
                (Je = y.stateNode.containerInfo), (Ht = !0);
                break e;
            }
            y = y.return;
          }
          if (Je === null) throw Error(o(160));
          cp(c, h, s),
            (Je = null),
            (Ht = !1),
            (c = s.alternate),
            c !== null && (c.return = null),
            (s.return = null);
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; ) dp(t, e), (t = t.sibling);
    }
    var oa = null;
    function dp(e, t) {
      var a = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qt(t, e),
            Yt(e),
            r & 4 && (an(3, e, e.return), Ul(3, e), an(5, e, e.return));
          break;
        case 1:
          qt(t, e),
            Yt(e),
            r & 512 && (rt || a === null || ma(a, a.return)),
            r & 64 &&
              Ba &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((a = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = a === null ? r : a.concat(r)))));
          break;
        case 26:
          var s = oa;
          if (
            (qt(t, e),
            Yt(e),
            r & 512 && (rt || a === null || ma(a, a.return)),
            r & 4)
          ) {
            var c = a !== null ? a.memoizedState : null;
            if (((r = e.memoizedState), a === null))
              if (r === null)
                if (e.stateNode === null) {
                  e: {
                    (r = e.type),
                      (a = e.memoizedProps),
                      (s = s.ownerDocument || s);
                    t: switch (r) {
                      case "title":
                        (c = s.getElementsByTagName("title")[0]),
                          (!c ||
                            c[ol] ||
                            c[Ct] ||
                            c.namespaceURI === "http://www.w3.org/2000/svg" ||
                            c.hasAttribute("itemprop")) &&
                            ((c = s.createElement(r)),
                            s.head.insertBefore(
                              c,
                              s.querySelector("head > title")
                            )),
                          kt(c, r, a),
                          (c[Ct] = e),
                          bt(c),
                          (r = c);
                        break e;
                      case "link":
                        var h = i0("link", "href", s).get(r + (a.href || ""));
                        if (h) {
                          for (var y = 0; y < h.length; y++)
                            if (
                              ((c = h[y]),
                              c.getAttribute("href") ===
                                (a.href == null || a.href === ""
                                  ? null
                                  : a.href) &&
                                c.getAttribute("rel") ===
                                  (a.rel == null ? null : a.rel) &&
                                c.getAttribute("title") ===
                                  (a.title == null ? null : a.title) &&
                                c.getAttribute("crossorigin") ===
                                  (a.crossOrigin == null
                                    ? null
                                    : a.crossOrigin))
                            ) {
                              h.splice(y, 1);
                              break t;
                            }
                        }
                        (c = s.createElement(r)),
                          kt(c, r, a),
                          s.head.appendChild(c);
                        break;
                      case "meta":
                        if (
                          (h = i0("meta", "content", s).get(
                            r + (a.content || "")
                          ))
                        ) {
                          for (y = 0; y < h.length; y++)
                            if (
                              ((c = h[y]),
                              c.getAttribute("content") ===
                                (a.content == null ? null : "" + a.content) &&
                                c.getAttribute("name") ===
                                  (a.name == null ? null : a.name) &&
                                c.getAttribute("property") ===
                                  (a.property == null ? null : a.property) &&
                                c.getAttribute("http-equiv") ===
                                  (a.httpEquiv == null ? null : a.httpEquiv) &&
                                c.getAttribute("charset") ===
                                  (a.charSet == null ? null : a.charSet))
                            ) {
                              h.splice(y, 1);
                              break t;
                            }
                        }
                        (c = s.createElement(r)),
                          kt(c, r, a),
                          s.head.appendChild(c);
                        break;
                      default:
                        throw Error(o(468, r));
                    }
                    (c[Ct] = e), bt(c), (r = c);
                  }
                  e.stateNode = r;
                } else o0(s, e.type, e.stateNode);
              else e.stateNode = l0(s, r, e.memoizedProps);
            else
              c !== r
                ? (c === null
                    ? a.stateNode !== null &&
                      ((a = a.stateNode), a.parentNode.removeChild(a))
                    : c.count--,
                  r === null
                    ? o0(s, e.type, e.stateNode)
                    : l0(s, r, e.memoizedProps))
                : r === null &&
                  e.stateNode !== null &&
                  vc(e, e.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          qt(t, e),
            Yt(e),
            r & 512 && (rt || a === null || ma(a, a.return)),
            a !== null && r & 4 && vc(e, e.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (
            (qt(t, e),
            Yt(e),
            r & 512 && (rt || a === null || ma(a, a.return)),
            e.flags & 32)
          ) {
            s = e.stateNode;
            try {
              ir(s, "");
            } catch (L) {
              Qe(e, e.return, L);
            }
          }
          r & 4 &&
            e.stateNode != null &&
            ((s = e.memoizedProps), vc(e, s, a !== null ? a.memoizedProps : s)),
            r & 1024 && (Sc = !0);
          break;
        case 6:
          if ((qt(t, e), Yt(e), r & 4)) {
            if (e.stateNode === null) throw Error(o(162));
            (r = e.memoizedProps), (a = e.stateNode);
            try {
              a.nodeValue = r;
            } catch (L) {
              Qe(e, e.return, L);
            }
          }
          break;
        case 3:
          if (
            (($o = null),
            (s = oa),
            (oa = Ko(t.containerInfo)),
            qt(t, e),
            (oa = s),
            Yt(e),
            r & 4 && a !== null && a.memoizedState.isDehydrated)
          )
            try {
              ei(t.containerInfo);
            } catch (L) {
              Qe(e, e.return, L);
            }
          Sc && ((Sc = !1), hp(e));
          break;
        case 4:
          (r = oa),
            (oa = Ko(e.stateNode.containerInfo)),
            qt(t, e),
            Yt(e),
            (oa = r);
          break;
        case 12:
          qt(t, e), Yt(e);
          break;
        case 13:
          qt(t, e),
            Yt(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (a !== null && a.memoizedState !== null) &&
              (Rc = Zt()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), Ec(e, r)));
          break;
        case 22:
          s = e.memoizedState !== null;
          var x = a !== null && a.memoizedState !== null,
            R = Ba,
            j = rt;
          if (
            ((Ba = R || s),
            (rt = j || x),
            qt(t, e),
            (rt = j),
            (Ba = R),
            Yt(e),
            r & 8192)
          )
            e: for (
              t = e.stateNode,
                t._visibility = s ? t._visibility & -2 : t._visibility | 1,
                s && (a === null || x || Ba || rt || Vn(e)),
                a = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  x = a = t;
                  try {
                    if (((c = x.stateNode), s))
                      (h = c.style),
                        typeof h.setProperty == "function"
                          ? h.setProperty("display", "none", "important")
                          : (h.display = "none");
                    else {
                      y = x.stateNode;
                      var X = x.memoizedProps.style,
                        D =
                          X != null && X.hasOwnProperty("display")
                            ? X.display
                            : null;
                      y.style.display =
                        D == null || typeof D == "boolean"
                          ? ""
                          : ("" + D).trim();
                    }
                  } catch (L) {
                    Qe(x, x.return, L);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  x = t;
                  try {
                    x.stateNode.nodeValue = s ? "" : x.memoizedProps;
                  } catch (L) {
                    Qe(x, x.return, L);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break e;
                a === t && (a = null), (t = t.return);
              }
              a === t && (a = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((a = r.retryQueue),
              a !== null && ((r.retryQueue = null), Ec(e, a))));
          break;
        case 19:
          qt(t, e),
            Yt(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), Ec(e, r)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          qt(t, e), Yt(e);
      }
    }
    function Yt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var a, r = e.return; r !== null; ) {
            if (lp(r)) {
              a = r;
              break;
            }
            r = r.return;
          }
          if (a == null) throw Error(o(160));
          switch (a.tag) {
            case 27:
              var s = a.stateNode,
                c = wc(e);
              Do(e, c, s);
              break;
            case 5:
              var h = a.stateNode;
              a.flags & 32 && (ir(h, ""), (a.flags &= -33));
              var y = wc(e);
              Do(e, y, h);
              break;
            case 3:
            case 4:
              var x = a.stateNode.containerInfo,
                R = wc(e);
              xc(e, R, x);
              break;
            default:
              throw Error(o(161));
          }
        } catch (j) {
          Qe(e, e.return, j);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function hp(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          hp(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling);
        }
    }
    function nn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) sp(e, t.alternate, t), (t = t.sibling);
    }
    function Vn(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            an(4, t, t.return), Vn(t);
            break;
          case 1:
            ma(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && np(t, t.return, a),
              Vn(t);
            break;
          case 27:
            Kl(t.stateNode);
          case 26:
          case 5:
            ma(t, t.return), Vn(t);
            break;
          case 22:
            t.memoizedState === null && Vn(t);
            break;
          case 30:
            Vn(t);
            break;
          default:
            Vn(t);
        }
        e = e.sibling;
      }
    }
    function rn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          s = e,
          c = t,
          h = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            rn(s, c, a), Ul(4, c);
            break;
          case 1:
            if (
              (rn(s, c, a),
              (r = c),
              (s = r.stateNode),
              typeof s.componentDidMount == "function")
            )
              try {
                s.componentDidMount();
              } catch (R) {
                Qe(r, r.return, R);
              }
            if (((r = c), (s = r.updateQueue), s !== null)) {
              var y = r.stateNode;
              try {
                var x = s.shared.hiddenCallbacks;
                if (x !== null)
                  for (
                    s.shared.hiddenCallbacks = null, s = 0;
                    s < x.length;
                    s++
                  )
                    Yg(x[s], y);
              } catch (R) {
                Qe(r, r.return, R);
              }
            }
            a && h & 64 && ap(c), Hl(c, c.return);
            break;
          case 27:
            ip(c);
          case 26:
          case 5:
            rn(s, c, a), a && r === null && h & 4 && rp(c), Hl(c, c.return);
            break;
          case 12:
            rn(s, c, a);
            break;
          case 13:
            rn(s, c, a), a && h & 4 && fp(s, c);
            break;
          case 22:
            c.memoizedState === null && rn(s, c, a), Hl(c, c.return);
            break;
          case 30:
            break;
          default:
            rn(s, c, a);
        }
        t = t.sibling;
      }
    }
    function kc(e, t) {
      var a = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (a = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++, a != null && Sl(a));
    }
    function Ac(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && Sl(e));
    }
    function pa(e, t, a, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) gp(e, t, a, r), (t = t.sibling);
    }
    function gp(e, t, a, r) {
      var s = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          pa(e, t, a, r), s & 2048 && Ul(9, t);
          break;
        case 1:
          pa(e, t, a, r);
          break;
        case 3:
          pa(e, t, a, r),
            s & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && Sl(e)));
          break;
        case 12:
          if (s & 2048) {
            pa(e, t, a, r), (e = t.stateNode);
            try {
              var c = t.memoizedProps,
                h = c.id,
                y = c.onPostCommit;
              typeof y == "function" &&
                y(
                  h,
                  t.alternate === null ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0
                );
            } catch (x) {
              Qe(t, t.return, x);
            }
          } else pa(e, t, a, r);
          break;
        case 13:
          pa(e, t, a, r);
          break;
        case 23:
          break;
        case 22:
          (c = t.stateNode),
            (h = t.alternate),
            t.memoizedState !== null
              ? c._visibility & 2
                ? pa(e, t, a, r)
                : Bl(e, t)
              : c._visibility & 2
              ? pa(e, t, a, r)
              : ((c._visibility |= 2),
                Ar(e, t, a, r, (t.subtreeFlags & 10256) !== 0)),
            s & 2048 && kc(h, t);
          break;
        case 24:
          pa(e, t, a, r), s & 2048 && Ac(t.alternate, t);
          break;
        default:
          pa(e, t, a, r);
      }
    }
    function Ar(e, t, a, r, s) {
      for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
        var c = e,
          h = t,
          y = a,
          x = r,
          R = h.flags;
        switch (h.tag) {
          case 0:
          case 11:
          case 15:
            Ar(c, h, y, x, s), Ul(8, h);
            break;
          case 23:
            break;
          case 22:
            var j = h.stateNode;
            h.memoizedState !== null
              ? j._visibility & 2
                ? Ar(c, h, y, x, s)
                : Bl(c, h)
              : ((j._visibility |= 2), Ar(c, h, y, x, s)),
              s && R & 2048 && kc(h.alternate, h);
            break;
          case 24:
            Ar(c, h, y, x, s), s && R & 2048 && Ac(h.alternate, h);
            break;
          default:
            Ar(c, h, y, x, s);
        }
        t = t.sibling;
      }
    }
    function Bl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e,
            r = t,
            s = r.flags;
          switch (r.tag) {
            case 22:
              Bl(a, r), s & 2048 && kc(r.alternate, r);
              break;
            case 24:
              Bl(a, r), s & 2048 && Ac(r.alternate, r);
              break;
            default:
              Bl(a, r);
          }
          t = t.sibling;
        }
    }
    var Vl = 8192;
    function Tr(e) {
      if (e.subtreeFlags & Vl)
        for (e = e.child; e !== null; ) mp(e), (e = e.sibling);
    }
    function mp(e) {
      switch (e.tag) {
        case 26:
          Tr(e),
            e.flags & Vl &&
              e.memoizedState !== null &&
              mS(oa, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Tr(e);
          break;
        case 3:
        case 4:
          var t = oa;
          (oa = Ko(e.stateNode.containerInfo)), Tr(e), (oa = t);
          break;
        case 22:
          e.memoizedState === null &&
            ((t = e.alternate),
            t !== null && t.memoizedState !== null
              ? ((t = Vl), (Vl = 16777216), Tr(e), (Vl = t))
              : Tr(e));
          break;
        default:
          Tr(e);
      }
    }
    function pp(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }
    function jl(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (vt = r), yp(r, e);
          }
        pp(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) bp(e), (e = e.sibling);
    }
    function bp(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          jl(e), e.flags & 2048 && an(9, e, e.return);
          break;
        case 3:
          jl(e);
          break;
        case 12:
          jl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Lo(e))
            : jl(e);
          break;
        default:
          jl(e);
      }
    }
    function Lo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (vt = r), yp(r, e);
          }
        pp(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            an(8, t, t.return), Lo(t);
            break;
          case 22:
            (a = t.stateNode),
              a._visibility & 2 && ((a._visibility &= -3), Lo(t));
            break;
          default:
            Lo(t);
        }
        e = e.sibling;
      }
    }
    function yp(e, t) {
      for (; vt !== null; ) {
        var a = vt;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            an(8, a, t);
            break;
          case 23:
          case 22:
            if (
              a.memoizedState !== null &&
              a.memoizedState.cachePool !== null
            ) {
              var r = a.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            Sl(a.memoizedState.cache);
        }
        if (((r = a.child), r !== null)) (r.return = a), (vt = r);
        else
          e: for (a = e; vt !== null; ) {
            r = vt;
            var s = r.sibling,
              c = r.return;
            if ((up(r), r === a)) {
              vt = null;
              break e;
            }
            if (s !== null) {
              (s.return = c), (vt = s);
              break e;
            }
            vt = c;
          }
      }
    }
    var z2 = {
        getCacheForType: function (e) {
          var t = Ot(dt),
            a = t.data.get(e);
          return a === void 0 && ((a = e()), t.data.set(e, a)), a;
        },
      },
      M2 = typeof WeakMap == "function" ? WeakMap : Map,
      je = 0,
      Ze = null,
      De = null,
      Ue = 0,
      qe = 0,
      Gt = null,
      ln = !1,
      Cr = !1,
      Tc = !1,
      ja = 0,
      tt = 0,
      on = 0,
      jn = 0,
      Cc = 0,
      ta = 0,
      Or = 0,
      ql = null,
      Bt = null,
      Oc = !1,
      Rc = 0,
      _o = 1 / 0,
      Uo = null,
      sn = null,
      Et = 0,
      un = null,
      Rr = null,
      Nr = 0,
      Nc = 0,
      zc = null,
      vp = null,
      Yl = 0,
      Mc = null;
    function Xt() {
      if ((je & 2) !== 0 && Ue !== 0) return Ue & -Ue;
      if (N.T !== null) {
        var e = br;
        return e !== 0 ? e : Vc();
      }
      return _h();
    }
    function wp() {
      ta === 0 && (ta = (Ue & 536870912) === 0 || Ve ? zh() : 536870912);
      var e = ea.current;
      return e !== null && (e.flags |= 32), ta;
    }
    function Qt(e, t, a) {
      ((e === Ze && (qe === 2 || qe === 9)) ||
        e.cancelPendingCommit !== null) &&
        (zr(e, 0), cn(e, Ue, ta, !1)),
        il(e, a),
        ((je & 2) === 0 || e !== Ze) &&
          (e === Ze &&
            ((je & 2) === 0 && (jn |= a), tt === 4 && cn(e, Ue, ta, !1)),
          ba(e));
    }
    function xp(e, t, a) {
      if ((je & 6) !== 0) throw Error(o(327));
      var r = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || kn(e, t),
        s = r ? _2(e, t) : _c(e, t, !0),
        c = r;
      do {
        if (s === 0) {
          Cr && !r && cn(e, t, 0, !1);
          break;
        } else {
          if (((a = e.current.alternate), c && !D2(a))) {
            (s = _c(e, t, !1)), (c = !1);
            continue;
          }
          if (s === 2) {
            if (((c = t), e.errorRecoveryDisabledLanes & c)) var h = 0;
            else
              (h = e.pendingLanes & -536870913),
                (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
            if (h !== 0) {
              t = h;
              e: {
                var y = e;
                s = ql;
                var x = y.current.memoizedState.isDehydrated;
                if (
                  (x && (zr(y, h).flags |= 256), (h = _c(y, h, !1)), h !== 2)
                ) {
                  if (Tc && !x) {
                    (y.errorRecoveryDisabledLanes |= c), (jn |= c), (s = 4);
                    break e;
                  }
                  (c = Bt),
                    (Bt = s),
                    c !== null &&
                      (Bt === null ? (Bt = c) : Bt.push.apply(Bt, c));
                }
                s = h;
              }
              if (((c = !1), s !== 2)) continue;
            }
          }
          if (s === 1) {
            zr(e, 0), cn(e, t, 0, !0);
            break;
          }
          e: {
            switch (((r = e), (c = s), c)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                cn(r, t, ta, !ln);
                break e;
              case 2:
                Bt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((t & 62914560) === t && ((s = Rc + 300 - Zt()), 10 < s)) {
              if ((cn(r, t, ta, !ln), En(r, 0, !0) !== 0)) break e;
              r.timeoutHandle = Jp(
                Sp.bind(null, r, a, Bt, Uo, Oc, t, ta, jn, Or, ln, c, 2, -0, 0),
                s
              );
              break e;
            }
            Sp(r, a, Bt, Uo, Oc, t, ta, jn, Or, ln, c, 0, -0, 0);
          }
        }
        break;
      } while (!0);
      ba(e);
    }
    function Sp(e, t, a, r, s, c, h, y, x, R, j, X, D, L) {
      if (
        ((e.timeoutHandle = -1),
        (X = t.subtreeFlags),
        (X & 8192 || (X & 16785408) === 16785408) &&
          ((Fl = { stylesheets: null, count: 0, unsuspend: gS }),
          mp(t),
          (X = pS()),
          X !== null))
      ) {
        (e.cancelPendingCommit = X(
          Rp.bind(null, e, t, c, a, r, s, h, y, x, j, 1, D, L)
        )),
          cn(e, c, h, !R);
        return;
      }
      Rp(e, t, c, a, r, s, h, y, x);
    }
    function D2(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if (
          (a === 0 || a === 11 || a === 15) &&
          t.flags & 16384 &&
          ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
        )
          for (var r = 0; r < a.length; r++) {
            var s = a[r],
              c = s.getSnapshot;
            s = s.value;
            try {
              if (!Vt(c(), s)) return !1;
            } catch {
              return !1;
            }
          }
        if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
          (a.return = t), (t = a);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function cn(e, t, a, r) {
      (t &= ~Cc),
        (t &= ~jn),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var s = t; 0 < s; ) {
        var c = 31 - Ke(s),
          h = 1 << c;
        (r[c] = -1), (s &= ~h);
      }
      a !== 0 && Dh(e, a, t);
    }
    function Ho() {
      return (je & 6) === 0 ? (Gl(0), !1) : !0;
    }
    function Dc() {
      if (De !== null) {
        if (qe === 0) var e = De.return;
        else (e = De), (Ma = Ln = null), Ju(e), (Er = null), (Dl = 0), (e = De);
        for (; e !== null; ) tp(e.alternate, e), (e = e.return);
        De = null;
      }
    }
    function zr(e, t) {
      var a = e.timeoutHandle;
      a !== -1 && ((e.timeoutHandle = -1), I2(a)),
        (a = e.cancelPendingCommit),
        a !== null && ((e.cancelPendingCommit = null), a()),
        Dc(),
        (Ze = e),
        (De = a = Ra(e.current, null)),
        (Ue = t),
        (qe = 0),
        (Gt = null),
        (ln = !1),
        (Cr = kn(e, t)),
        (Tc = !1),
        (Or = ta = Cc = jn = on = tt = 0),
        (Bt = ql = null),
        (Oc = !1),
        (t & 8) !== 0 && (t |= t & 32);
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var s = 31 - Ke(r),
            c = 1 << s;
          (t |= e[s]), (r &= ~c);
        }
      return (ja = t), ro(), a;
    }
    function Ep(e, t) {
      (Ne = null),
        (N.H = ko),
        t === kl || t === go
          ? ((t = jg()), (qe = 3))
          : t === Hg
          ? ((t = jg()), (qe = 4))
          : (qe =
              t === qm
                ? 8
                : t !== null &&
                  typeof t == "object" &&
                  typeof t.then == "function"
                ? 6
                : 1),
        (Gt = t),
        De === null && ((tt = 1), Ro(e, Jt(t, e.current)));
    }
    function kp() {
      var e = N.H;
      return (N.H = ko), e === null ? ko : e;
    }
    function Ap() {
      var e = N.A;
      return (N.A = z2), e;
    }
    function Lc() {
      (tt = 4),
        ln || ((Ue & 4194048) !== Ue && ea.current !== null) || (Cr = !0),
        ((on & 134217727) === 0 && (jn & 134217727) === 0) ||
          Ze === null ||
          cn(Ze, Ue, ta, !1);
    }
    function _c(e, t, a) {
      var r = je;
      je |= 2;
      var s = kp(),
        c = Ap();
      (Ze !== e || Ue !== t) && ((Uo = null), zr(e, t)), (t = !1);
      var h = tt;
      e: do
        try {
          if (qe !== 0 && De !== null) {
            var y = De,
              x = Gt;
            switch (qe) {
              case 8:
                Dc(), (h = 6);
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                ea.current === null && (t = !0);
                var R = qe;
                if (((qe = 0), (Gt = null), Mr(e, y, x, R), a && Cr)) {
                  h = 0;
                  break e;
                }
                break;
              default:
                (R = qe), (qe = 0), (Gt = null), Mr(e, y, x, R);
            }
          }
          L2(), (h = tt);
          break;
        } catch (j) {
          Ep(e, j);
        }
      while (!0);
      return (
        t && e.shellSuspendCounter++,
        (Ma = Ln = null),
        (je = r),
        (N.H = s),
        (N.A = c),
        De === null && ((Ze = null), (Ue = 0), ro()),
        h
      );
    }
    function L2() {
      for (; De !== null; ) Tp(De);
    }
    function _2(e, t) {
      var a = je;
      je |= 2;
      var r = kp(),
        s = Ap();
      Ze !== e || Ue !== t
        ? ((Uo = null), (_o = Zt() + 500), zr(e, t))
        : (Cr = kn(e, t));
      e: do
        try {
          if (qe !== 0 && De !== null) {
            t = De;
            var c = Gt;
            t: switch (qe) {
              case 1:
                (qe = 0), (Gt = null), Mr(e, t, c, 1);
                break;
              case 2:
              case 9:
                if (Bg(c)) {
                  (qe = 0), (Gt = null), Cp(t);
                  break;
                }
                (t = function () {
                  (qe !== 2 && qe !== 9) || Ze !== e || (qe = 7), ba(e);
                }),
                  c.then(t, t);
                break e;
              case 3:
                qe = 7;
                break e;
              case 4:
                qe = 5;
                break e;
              case 7:
                Bg(c)
                  ? ((qe = 0), (Gt = null), Cp(t))
                  : ((qe = 0), (Gt = null), Mr(e, t, c, 7));
                break;
              case 5:
                var h = null;
                switch (De.tag) {
                  case 26:
                    h = De.memoizedState;
                  case 5:
                  case 27:
                    var y = De;
                    if (!h || s0(h)) {
                      (qe = 0), (Gt = null);
                      var x = y.sibling;
                      if (x !== null) De = x;
                      else {
                        var R = y.return;
                        R !== null ? ((De = R), Bo(R)) : (De = null);
                      }
                      break t;
                    }
                }
                (qe = 0), (Gt = null), Mr(e, t, c, 5);
                break;
              case 6:
                (qe = 0), (Gt = null), Mr(e, t, c, 6);
                break;
              case 8:
                Dc(), (tt = 6);
                break e;
              default:
                throw Error(o(462));
            }
          }
          U2();
          break;
        } catch (j) {
          Ep(e, j);
        }
      while (!0);
      return (
        (Ma = Ln = null),
        (N.H = r),
        (N.A = s),
        (je = a),
        De !== null ? 0 : ((Ze = null), (Ue = 0), ro(), tt)
      );
    }
    function U2() {
      for (; De !== null && !ft(); ) Tp(De);
    }
    function Tp(e) {
      var t = Wm(e.alternate, e, ja);
      (e.memoizedProps = e.pendingProps), t === null ? Bo(e) : (De = t);
    }
    function Cp(e) {
      var t = e,
        a = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Zm(a, t, t.pendingProps, t.type, void 0, Ue);
          break;
        case 11:
          t = Zm(a, t, t.pendingProps, t.type.render, t.ref, Ue);
          break;
        case 5:
          Ju(t);
        default:
          tp(a, t), (t = De = Og(t, ja)), (t = Wm(a, t, ja));
      }
      (e.memoizedProps = e.pendingProps), t === null ? Bo(e) : (De = t);
    }
    function Mr(e, t, a, r) {
      (Ma = Ln = null), Ju(t), (Er = null), (Dl = 0);
      var s = t.return;
      try {
        if (A2(e, s, t, a, Ue)) {
          (tt = 1), Ro(e, Jt(a, e.current)), (De = null);
          return;
        }
      } catch (c) {
        if (s !== null) throw ((De = s), c);
        (tt = 1), Ro(e, Jt(a, e.current)), (De = null);
        return;
      }
      t.flags & 32768
        ? (Ve || r === 1
            ? (e = !0)
            : Cr || (Ue & 536870912) !== 0
            ? (e = !1)
            : ((ln = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = ea.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
          Op(t, e))
        : Bo(t);
    }
    function Bo(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Op(t, ln);
          return;
        }
        e = t.return;
        var a = C2(t.alternate, t, ja);
        if (a !== null) {
          De = a;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          De = t;
          return;
        }
        De = t = e;
      } while (t !== null);
      tt === 0 && (tt = 5);
    }
    function Op(e, t) {
      do {
        var a = O2(e.alternate, e);
        if (a !== null) {
          (a.flags &= 32767), (De = a);
          return;
        }
        if (
          ((a = e.return),
          a !== null &&
            ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          De = e;
          return;
        }
        De = e = a;
      } while (e !== null);
      (tt = 6), (De = null);
    }
    function Rp(e, t, a, r, s, c, h, y, x) {
      e.cancelPendingCommit = null;
      do Vo();
      while (Et !== 0);
      if ((je & 6) !== 0) throw Error(o(327));
      if (t !== null) {
        if (t === e.current) throw Error(o(177));
        if (
          ((c = t.lanes | t.childLanes),
          (c |= Au),
          gx(e, a, c, h, y, x),
          e === Ze && ((De = Ze = null), (Ue = 0)),
          (Rr = t),
          (un = e),
          (Nr = a),
          (Nc = c),
          (zc = s),
          (vp = r),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              j2(z, function () {
                return Lp(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || r)
        ) {
          (r = N.T), (N.T = null), (s = K.p), (K.p = 2), (h = je), (je |= 4);
          try {
            R2(e, t, a);
          } finally {
            (je = h), (K.p = s), (N.T = r);
          }
        }
        (Et = 1), Np(), zp(), Mp();
      }
    }
    function Np() {
      if (Et === 1) {
        Et = 0;
        var e = un,
          t = Rr,
          a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
          (a = N.T), (N.T = null);
          var r = K.p;
          K.p = 2;
          var s = je;
          je |= 4;
          try {
            dp(t, e);
            var c = Zc,
              h = yg(e.containerInfo),
              y = c.focusedElem,
              x = c.selectionRange;
            if (
              h !== y &&
              y &&
              y.ownerDocument &&
              bg(y.ownerDocument.documentElement, y)
            ) {
              if (x !== null && wu(y)) {
                var R = x.start,
                  j = x.end;
                if ((j === void 0 && (j = R), "selectionStart" in y))
                  (y.selectionStart = R),
                    (y.selectionEnd = Math.min(j, y.value.length));
                else {
                  var X = y.ownerDocument || document,
                    D = (X && X.defaultView) || window;
                  if (D.getSelection) {
                    var L = D.getSelection(),
                      ve = y.textContent.length,
                      be = Math.min(x.start, ve),
                      Xe = x.end === void 0 ? be : Math.min(x.end, ve);
                    !L.extend && be > Xe && ((h = Xe), (Xe = be), (be = h));
                    var T = pg(y, be),
                      k = pg(y, Xe);
                    if (
                      T &&
                      k &&
                      (L.rangeCount !== 1 ||
                        L.anchorNode !== T.node ||
                        L.anchorOffset !== T.offset ||
                        L.focusNode !== k.node ||
                        L.focusOffset !== k.offset)
                    ) {
                      var O = X.createRange();
                      O.setStart(T.node, T.offset),
                        L.removeAllRanges(),
                        be > Xe
                          ? (L.addRange(O), L.extend(k.node, k.offset))
                          : (O.setEnd(k.node, k.offset), L.addRange(O));
                    }
                  }
                }
              }
              for (X = [], L = y; (L = L.parentNode); )
                L.nodeType === 1 &&
                  X.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
              for (
                typeof y.focus == "function" && y.focus(), y = 0;
                y < X.length;
                y++
              ) {
                var G = X[y];
                (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
              }
            }
            (Io = !!Kc), (Zc = Kc = null);
          } finally {
            (je = s), (K.p = r), (N.T = a);
          }
        }
        (e.current = t), (Et = 2);
      }
    }
    function zp() {
      if (Et === 2) {
        Et = 0;
        var e = un,
          t = Rr,
          a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
          (a = N.T), (N.T = null);
          var r = K.p;
          K.p = 2;
          var s = je;
          je |= 4;
          try {
            sp(e, t.alternate, t);
          } finally {
            (je = s), (K.p = r), (N.T = a);
          }
        }
        Et = 3;
      }
    }
    function Mp() {
      if (Et === 4 || Et === 3) {
        (Et = 0), rl();
        var e = un,
          t = Rr,
          a = Nr,
          r = vp;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? (Et = 5)
          : ((Et = 0), (Rr = un = null), Dp(e, e.pendingLanes));
        var s = e.pendingLanes;
        if (
          (s === 0 && (sn = null),
          Ws(a),
          (t = t.stateNode),
          ke && typeof ke.onCommitFiberRoot == "function")
        )
          try {
            ke.onCommitFiberRoot(
              fe,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {}
        if (r !== null) {
          (t = N.T), (s = K.p), (K.p = 2), (N.T = null);
          try {
            for (var c = e.onRecoverableError, h = 0; h < r.length; h++) {
              var y = r[h];
              c(y.value, { componentStack: y.stack });
            }
          } finally {
            (N.T = t), (K.p = s);
          }
        }
        (Nr & 3) !== 0 && Vo(),
          ba(e),
          (s = e.pendingLanes),
          (a & 4194090) !== 0 && (s & 42) !== 0
            ? e === Mc
              ? Yl++
              : ((Yl = 0), (Mc = e))
            : (Yl = 0),
          Gl(0);
      }
    }
    function Dp(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), Sl(t)));
    }
    function Vo(e) {
      return Np(), zp(), Mp(), Lp();
    }
    function Lp() {
      if (Et !== 5) return !1;
      var e = un,
        t = Nc;
      Nc = 0;
      var a = Ws(Nr),
        r = N.T,
        s = K.p;
      try {
        (K.p = 32 > a ? 32 : a), (N.T = null), (a = zc), (zc = null);
        var c = un,
          h = Nr;
        if (((Et = 0), (Rr = un = null), (Nr = 0), (je & 6) !== 0))
          throw Error(o(331));
        var y = je;
        if (
          ((je |= 4),
          bp(c.current),
          gp(c, c.current, h, a),
          (je = y),
          Gl(0, !1),
          ke && typeof ke.onPostCommitFiberRoot == "function")
        )
          try {
            ke.onPostCommitFiberRoot(fe, c);
          } catch {}
        return !0;
      } finally {
        (K.p = s), (N.T = r), Dp(e, t);
      }
    }
    function _p(e, t, a) {
      (t = Jt(a, t)),
        (t = cc(e.stateNode, t, 2)),
        (e = Pa(e, t, 2)),
        e !== null && (il(e, 2), ba(e));
    }
    function Qe(e, t, a) {
      if (e.tag === 3) _p(e, e, a);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            _p(t, e, a);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof r.componentDidCatch == "function" &&
                (sn === null || !sn.has(r)))
            ) {
              (e = Jt(a, e)),
                (a = Vm(2)),
                (r = Pa(t, a, 2)),
                r !== null && (jm(a, r, t, e), il(r, 2), ba(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function Uc(e, t, a) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new M2();
        var s = new Set();
        r.set(t, s);
      } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
      s.has(a) ||
        ((Tc = !0), s.add(a), (e = H2.bind(null, e, t, a)), t.then(e, e));
    }
    function H2(e, t, a) {
      var r = e.pingCache;
      r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & a),
        (e.warmLanes &= ~a),
        Ze === e &&
          (Ue & a) === a &&
          (tt === 4 || (tt === 3 && (Ue & 62914560) === Ue && 300 > Zt() - Rc)
            ? (je & 2) === 0 && zr(e, 0)
            : (Cc |= a),
          Or === Ue && (Or = 0)),
        ba(e);
    }
    function Up(e, t) {
      t === 0 && (t = Mh()), (e = hr(e, t)), e !== null && (il(e, t), ba(e));
    }
    function B2(e) {
      var t = e.memoizedState,
        a = 0;
      t !== null && (a = t.retryLane), Up(e, a);
    }
    function V2(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            s = e.memoizedState;
          s !== null && (a = s.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      r !== null && r.delete(t), Up(e, a);
    }
    function j2(e, t) {
      return Pe(e, t);
    }
    var jo = null,
      Dr = null,
      Hc = !1,
      qo = !1,
      Bc = !1,
      qn = 0;
    function ba(e) {
      e !== Dr &&
        e.next === null &&
        (Dr === null ? (jo = Dr = e) : (Dr = Dr.next = e)),
        (qo = !0),
        Hc || ((Hc = !0), Y2());
    }
    function Gl(e, t) {
      if (!Bc && qo) {
        Bc = !0;
        do
          for (var a = !1, r = jo; r !== null; ) {
            if (e !== 0) {
              var s = r.pendingLanes;
              if (s === 0) var c = 0;
              else {
                var h = r.suspendedLanes,
                  y = r.pingedLanes;
                (c = (1 << (31 - Ke(42 | e) + 1)) - 1),
                  (c &= s & ~(h & ~y)),
                  (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
              }
              c !== 0 && ((a = !0), jp(r, c));
            } else
              (c = Ue),
                (c = En(
                  r,
                  r === Ze ? c : 0,
                  r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                )),
                (c & 3) === 0 || kn(r, c) || ((a = !0), jp(r, c));
            r = r.next;
          }
        while (a);
        Bc = !1;
      }
    }
    function q2() {
      Hp();
    }
    function Hp() {
      qo = Hc = !1;
      var e = 0;
      qn !== 0 && (J2() && (e = qn), (qn = 0));
      for (var t = Zt(), a = null, r = jo; r !== null; ) {
        var s = r.next,
          c = Bp(r, t);
        c === 0
          ? ((r.next = null),
            a === null ? (jo = s) : (a.next = s),
            s === null && (Dr = a))
          : ((a = r), (e !== 0 || (c & 3) !== 0) && (qo = !0)),
          (r = s);
      }
      Gl(e);
    }
    function Bp(e, t) {
      for (
        var a = e.suspendedLanes,
          r = e.pingedLanes,
          s = e.expirationTimes,
          c = e.pendingLanes & -62914561;
        0 < c;

      ) {
        var h = 31 - Ke(c),
          y = 1 << h,
          x = s[h];
        x === -1
          ? ((y & a) === 0 || (y & r) !== 0) && (s[h] = Ki(y, t))
          : x <= t && (e.expiredLanes |= y),
          (c &= ~y);
      }
      if (
        ((t = Ze),
        (a = Ue),
        (a = En(
          e,
          e === t ? a : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (r = e.callbackNode),
        a === 0 ||
          (e === t && (qe === 2 || qe === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && We(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if ((a & 3) === 0 || kn(e, a)) {
        if (((t = a & -a), t === e.callbackPriority)) return t;
        switch ((r !== null && We(r), Ws(a))) {
          case 2:
          case 8:
            a = E;
            break;
          case 32:
            a = z;
            break;
          case 268435456:
            a = ne;
            break;
          default:
            a = z;
        }
        return (
          (r = Vp.bind(null, e)),
          (a = Pe(a, r)),
          (e.callbackPriority = t),
          (e.callbackNode = a),
          t
        );
      }
      return (
        r !== null && r !== null && We(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function Vp(e, t) {
      if (Et !== 0 && Et !== 5)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var a = e.callbackNode;
      if (Vo() && e.callbackNode !== a) return null;
      var r = Ue;
      return (
        (r = En(
          e,
          e === Ze ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        r === 0
          ? null
          : (xp(e, r, t),
            Bp(e, Zt()),
            e.callbackNode != null && e.callbackNode === a
              ? Vp.bind(null, e)
              : null)
      );
    }
    function jp(e, t) {
      if (Vo()) return null;
      xp(e, t, !0);
    }
    function Y2() {
      P2(function () {
        (je & 6) !== 0 ? Pe(ll, q2) : Hp();
      });
    }
    function Vc() {
      return qn === 0 && (qn = zh()), qn;
    }
    function qp(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean"
        ? null
        : typeof e == "function"
        ? e
        : Ii("" + e);
    }
    function Yp(e, t) {
      var a = t.ownerDocument.createElement("input");
      return (
        (a.name = t.name),
        (a.value = t.value),
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        (e = new FormData(e)),
        a.parentNode.removeChild(a),
        e
      );
    }
    function G2(e, t, a, r, s) {
      if (t === "submit" && a && a.stateNode === s) {
        var c = qp((s[Lt] || null).action),
          h = r.submitter;
        h &&
          ((t = (t = h[Lt] || null)
            ? qp(t.formAction)
            : h.getAttribute("formAction")),
          t !== null && ((c = t), (h = null)));
        var y = new to("action", "action", null, r, s);
        e.push({
          event: y,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (qn !== 0) {
                    var x = h ? Yp(s, h) : new FormData(s);
                    lc(
                      a,
                      { pending: !0, data: x, method: s.method, action: c },
                      null,
                      x
                    );
                  }
                } else
                  typeof c == "function" &&
                    (y.preventDefault(),
                    (x = h ? Yp(s, h) : new FormData(s)),
                    lc(
                      a,
                      { pending: !0, data: x, method: s.method, action: c },
                      c,
                      x
                    ));
              },
              currentTarget: s,
            },
          ],
        });
      }
    }
    for (var jc = 0; jc < ku.length; jc++) {
      var qc = ku[jc],
        X2 = qc.toLowerCase(),
        Q2 = qc[0].toUpperCase() + qc.slice(1);
      ia(X2, "on" + Q2);
    }
    ia(xg, "onAnimationEnd"),
      ia(Sg, "onAnimationIteration"),
      ia(Eg, "onAnimationStart"),
      ia("dblclick", "onDoubleClick"),
      ia("focusin", "onFocus"),
      ia("focusout", "onBlur"),
      ia(s2, "onTransitionRun"),
      ia(u2, "onTransitionStart"),
      ia(c2, "onTransitionCancel"),
      ia(kg, "onTransitionEnd"),
      nr("onMouseEnter", ["mouseout", "mouseover"]),
      nr("onMouseLeave", ["mouseout", "mouseover"]),
      nr("onPointerEnter", ["pointerout", "pointerover"]),
      nr("onPointerLeave", ["pointerout", "pointerover"]),
      An(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      An(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      An(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      An(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      An(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var Xl =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      K2 = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(Xl)
      );
    function Gp(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var r = e[a],
          s = r.event;
        r = r.listeners;
        e: {
          var c = void 0;
          if (t)
            for (var h = r.length - 1; 0 <= h; h--) {
              var y = r[h],
                x = y.instance,
                R = y.currentTarget;
              if (((y = y.listener), x !== c && s.isPropagationStopped()))
                break e;
              (c = y), (s.currentTarget = R);
              try {
                c(s);
              } catch (j) {
                Oo(j);
              }
              (s.currentTarget = null), (c = x);
            }
          else
            for (h = 0; h < r.length; h++) {
              if (
                ((y = r[h]),
                (x = y.instance),
                (R = y.currentTarget),
                (y = y.listener),
                x !== c && s.isPropagationStopped())
              )
                break e;
              (c = y), (s.currentTarget = R);
              try {
                c(s);
              } catch (j) {
                Oo(j);
              }
              (s.currentTarget = null), (c = x);
            }
        }
      }
    }
    function Le(e, t) {
      var a = t[eu];
      a === void 0 && (a = t[eu] = new Set());
      var r = e + "__bubble";
      a.has(r) || (Xp(t, e, 2, !1), a.add(r));
    }
    function Yc(e, t, a) {
      var r = 0;
      t && (r |= 4), Xp(a, e, r, t);
    }
    var Yo = "_reactListening" + Math.random().toString(36).slice(2);
    function Gc(e) {
      if (!e[Yo]) {
        (e[Yo] = !0),
          Hh.forEach(function (a) {
            a !== "selectionchange" &&
              (K2.has(a) || Yc(a, !1, e), Yc(a, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Yo] || ((t[Yo] = !0), Yc("selectionchange", !1, t));
      }
    }
    function Xp(e, t, a, r) {
      switch (g0(t)) {
        case 2:
          var s = vS;
          break;
        case 8:
          s = wS;
          break;
        default:
          s = nf;
      }
      (a = s.bind(null, t, a, e)),
        (s = void 0),
        !fu ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (s = !0),
        r
          ? s !== void 0
            ? e.addEventListener(t, a, { capture: !0, passive: s })
            : e.addEventListener(t, a, !0)
          : s !== void 0
          ? e.addEventListener(t, a, { passive: s })
          : e.addEventListener(t, a, !1);
    }
    function Xc(e, t, a, r, s) {
      var c = r;
      if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e: for (;;) {
          if (r === null) return;
          var h = r.tag;
          if (h === 3 || h === 4) {
            var y = r.stateNode.containerInfo;
            if (y === s) break;
            if (h === 4)
              for (h = r.return; h !== null; ) {
                var x = h.tag;
                if ((x === 3 || x === 4) && h.stateNode.containerInfo === s)
                  return;
                h = h.return;
              }
            for (; y !== null; ) {
              if (((h = er(y)), h === null)) return;
              if (((x = h.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
                r = c = h;
                continue e;
              }
              y = y.parentNode;
            }
          }
          r = r.return;
        }
      Ih(function () {
        var R = c,
          j = uu(a),
          X = [];
        e: {
          var D = Ag.get(e);
          if (D !== void 0) {
            var L = to,
              ve = e;
            switch (e) {
              case "keypress":
                if (Wi(a) === 0) break e;
              case "keydown":
              case "keyup":
                L = jx;
                break;
              case "focusin":
                (ve = "focus"), (L = mu);
                break;
              case "focusout":
                (ve = "blur"), (L = mu);
                break;
              case "beforeblur":
              case "afterblur":
                L = mu;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                L = eg;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                L = Ox;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                L = Gx;
                break;
              case xg:
              case Sg:
              case Eg:
                L = zx;
                break;
              case kg:
                L = Qx;
                break;
              case "scroll":
              case "scrollend":
                L = Tx;
                break;
              case "wheel":
                L = Zx;
                break;
              case "copy":
              case "cut":
              case "paste":
                L = Dx;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                L = ag;
                break;
              case "toggle":
              case "beforetoggle":
                L = Fx;
            }
            var be = (t & 4) !== 0,
              Xe = !be && (e === "scroll" || e === "scrollend"),
              T = be ? (D !== null ? D + "Capture" : null) : D;
            be = [];
            for (var k = R, O; k !== null; ) {
              var G = k;
              if (
                ((O = G.stateNode),
                (G = G.tag),
                (G !== 5 && G !== 26 && G !== 27) ||
                  O === null ||
                  T === null ||
                  ((G = ul(k, T)), G != null && be.push(Ql(k, G, O))),
                Xe)
              )
                break;
              k = k.return;
            }
            0 < be.length &&
              ((D = new L(D, ve, null, a, j)),
              X.push({ event: D, listeners: be }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (
              ((D = e === "mouseover" || e === "pointerover"),
              (L = e === "mouseout" || e === "pointerout"),
              D &&
                a !== su &&
                (ve = a.relatedTarget || a.fromElement) &&
                (er(ve) || ve[Wn]))
            )
              break e;
            if (
              (L || D) &&
              ((D =
                j.window === j
                  ? j
                  : (D = j.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
              L
                ? ((ve = a.relatedTarget || a.toElement),
                  (L = R),
                  (ve = ve ? er(ve) : null),
                  ve !== null &&
                    ((Xe = f(ve)),
                    (be = ve.tag),
                    ve !== Xe || (be !== 5 && be !== 27 && be !== 6)) &&
                    (ve = null))
                : ((L = null), (ve = R)),
              L !== ve)
            ) {
              if (
                ((be = eg),
                (G = "onMouseLeave"),
                (T = "onMouseEnter"),
                (k = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((be = ag),
                  (G = "onPointerLeave"),
                  (T = "onPointerEnter"),
                  (k = "pointer")),
                (Xe = L == null ? D : sl(L)),
                (O = ve == null ? D : sl(ve)),
                (D = new be(G, k + "leave", L, a, j)),
                (D.target = Xe),
                (D.relatedTarget = O),
                (G = null),
                er(j) === R &&
                  ((be = new be(T, k + "enter", ve, a, j)),
                  (be.target = O),
                  (be.relatedTarget = Xe),
                  (G = be)),
                (Xe = G),
                L && ve)
              )
                t: {
                  for (be = L, T = ve, k = 0, O = be; O; O = Lr(O)) k++;
                  for (O = 0, G = T; G; G = Lr(G)) O++;
                  for (; 0 < k - O; ) (be = Lr(be)), k--;
                  for (; 0 < O - k; ) (T = Lr(T)), O--;
                  for (; k--; ) {
                    if (be === T || (T !== null && be === T.alternate)) break t;
                    (be = Lr(be)), (T = Lr(T));
                  }
                  be = null;
                }
              else be = null;
              L !== null && Qp(X, D, L, be, !1),
                ve !== null && Xe !== null && Qp(X, Xe, ve, be, !0);
            }
          }
          e: {
            if (
              ((D = R ? sl(R) : window),
              (L = D.nodeName && D.nodeName.toLowerCase()),
              L === "select" || (L === "input" && D.type === "file"))
            )
              var se = cg;
            else if (sg(D))
              if (fg) se = l2;
              else {
                se = n2;
                var Me = a2;
              }
            else
              (L = D.nodeName),
                !L ||
                L.toLowerCase() !== "input" ||
                (D.type !== "checkbox" && D.type !== "radio")
                  ? R && ou(R.elementType) && (se = cg)
                  : (se = r2);
            if (se && (se = se(e, R))) {
              ug(X, se, a, j);
              break e;
            }
            Me && Me(e, D, R),
              e === "focusout" &&
                R &&
                D.type === "number" &&
                R.memoizedProps.value != null &&
                iu(D, "number", D.value);
          }
          switch (((Me = R ? sl(R) : window), e)) {
            case "focusin":
              (sg(Me) || Me.contentEditable === "true") &&
                ((cr = Me), (xu = R), (bl = null));
              break;
            case "focusout":
              bl = xu = cr = null;
              break;
            case "mousedown":
              Su = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Su = !1), vg(X, a, j);
              break;
            case "selectionchange":
              if (o2) break;
            case "keydown":
            case "keyup":
              vg(X, a, j);
          }
          var he;
          if (bu)
            e: {
              switch (e) {
                case "compositionstart":
                  var ye = "onCompositionStart";
                  break e;
                case "compositionend":
                  ye = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ye = "onCompositionUpdate";
                  break e;
              }
              ye = void 0;
            }
          else
            ur
              ? ig(e, a) && (ye = "onCompositionEnd")
              : e === "keydown" &&
                a.keyCode === 229 &&
                (ye = "onCompositionStart");
          ye &&
            (ng &&
              a.locale !== "ko" &&
              (ur || ye !== "onCompositionStart"
                ? ye === "onCompositionEnd" && ur && (he = Ph())
                : (($a = j),
                  (du = "value" in $a ? $a.value : $a.textContent),
                  (ur = !0))),
            (Me = Go(R, ye)),
            0 < Me.length &&
              ((ye = new tg(ye, e, null, a, j)),
              X.push({ event: ye, listeners: Me }),
              he
                ? (ye.data = he)
                : ((he = og(a)), he !== null && (ye.data = he)))),
            (he = Ix ? Px(e, a) : Wx(e, a)) &&
              ((ye = Go(R, "onBeforeInput")),
              0 < ye.length &&
                ((Me = new tg("onBeforeInput", "beforeinput", null, a, j)),
                X.push({ event: Me, listeners: ye }),
                (Me.data = he))),
            G2(X, e, R, a, j);
        }
        Gp(X, t);
      });
    }
    function Ql(e, t, a) {
      return { instance: e, listener: t, currentTarget: a };
    }
    function Go(e, t) {
      for (var a = t + "Capture", r = []; e !== null; ) {
        var s = e,
          c = s.stateNode;
        if (
          ((s = s.tag),
          (s !== 5 && s !== 26 && s !== 27) ||
            c === null ||
            ((s = ul(e, a)),
            s != null && r.unshift(Ql(e, s, c)),
            (s = ul(e, t)),
            s != null && r.push(Ql(e, s, c))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Lr(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Qp(e, t, a, r, s) {
      for (var c = t._reactName, h = []; a !== null && a !== r; ) {
        var y = a,
          x = y.alternate,
          R = y.stateNode;
        if (((y = y.tag), x !== null && x === r)) break;
        (y !== 5 && y !== 26 && y !== 27) ||
          R === null ||
          ((x = R),
          s
            ? ((R = ul(a, c)), R != null && h.unshift(Ql(a, R, x)))
            : s || ((R = ul(a, c)), R != null && h.push(Ql(a, R, x)))),
          (a = a.return);
      }
      h.length !== 0 && e.push({ event: t, listeners: h });
    }
    var Z2 = /\r\n?/g,
      $2 = /\u0000|\uFFFD/g;
    function Kp(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          Z2,
          `
`
        )
        .replace($2, "");
    }
    function Zp(e, t) {
      return (t = Kp(t)), Kp(e) === t;
    }
    function Xo() {}
    function Ge(e, t, a, r, s, c) {
      switch (a) {
        case "children":
          typeof r == "string"
            ? t === "body" || (t === "textarea" && r === "") || ir(e, r)
            : (typeof r == "number" || typeof r == "bigint") &&
              t !== "body" &&
              ir(e, "" + r);
          break;
        case "className":
          $i(e, "class", r);
          break;
        case "tabIndex":
          $i(e, "tabindex", r);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          $i(e, a, r);
          break;
        case "style":
          Fh(e, r, c);
          break;
        case "data":
          if (t !== "object") {
            $i(e, "data", r);
            break;
          }
        case "src":
        case "href":
          if (r === "" && (t !== "a" || a !== "href")) {
            e.removeAttribute(a);
            break;
          }
          if (
            r == null ||
            typeof r == "function" ||
            typeof r == "symbol" ||
            typeof r == "boolean"
          ) {
            e.removeAttribute(a);
            break;
          }
          (r = Ii("" + r)), e.setAttribute(a, r);
          break;
        case "action":
        case "formAction":
          if (typeof r == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof c == "function" &&
              (a === "formAction"
                ? (t !== "input" && Ge(e, t, "name", s.name, s, null),
                  Ge(e, t, "formEncType", s.formEncType, s, null),
                  Ge(e, t, "formMethod", s.formMethod, s, null),
                  Ge(e, t, "formTarget", s.formTarget, s, null))
                : (Ge(e, t, "encType", s.encType, s, null),
                  Ge(e, t, "method", s.method, s, null),
                  Ge(e, t, "target", s.target, s, null)));
          if (r == null || typeof r == "symbol" || typeof r == "boolean") {
            e.removeAttribute(a);
            break;
          }
          (r = Ii("" + r)), e.setAttribute(a, r);
          break;
        case "onClick":
          r != null && (e.onclick = Xo);
          break;
        case "onScroll":
          r != null && Le("scroll", e);
          break;
        case "onScrollEnd":
          r != null && Le("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (r != null) {
            if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
            if (((a = r.__html), a != null)) {
              if (s.children != null) throw Error(o(60));
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = r && typeof r != "function" && typeof r != "symbol";
          break;
        case "muted":
          e.muted = r && typeof r != "function" && typeof r != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            r == null ||
            typeof r == "function" ||
            typeof r == "boolean" ||
            typeof r == "symbol"
          ) {
            e.removeAttribute("xlink:href");
            break;
          }
          (a = Ii("" + r)),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          r != null && typeof r != "function" && typeof r != "symbol"
            ? e.setAttribute(a, "" + r)
            : e.removeAttribute(a);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          r && typeof r != "function" && typeof r != "symbol"
            ? e.setAttribute(a, "")
            : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          r === !0
            ? e.setAttribute(a, "")
            : r !== !1 &&
              r != null &&
              typeof r != "function" &&
              typeof r != "symbol"
            ? e.setAttribute(a, r)
            : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          r != null &&
          typeof r != "function" &&
          typeof r != "symbol" &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(a, r)
            : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          isNaN(r)
            ? e.removeAttribute(a)
            : e.setAttribute(a, r);
          break;
        case "popover":
          Le("beforetoggle", e), Le("toggle", e), Zi(e, "popover", r);
          break;
        case "xlinkActuate":
          Ca(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
          break;
        case "xlinkArcrole":
          Ca(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
          break;
        case "xlinkRole":
          Ca(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
          break;
        case "xlinkShow":
          Ca(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
          break;
        case "xlinkTitle":
          Ca(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
          break;
        case "xlinkType":
          Ca(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
          break;
        case "xmlBase":
          Ca(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
          break;
        case "xmlLang":
          Ca(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
          break;
        case "xmlSpace":
          Ca(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
          break;
        case "is":
          Zi(e, "is", r);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) ||
            (a[0] !== "o" && a[0] !== "O") ||
            (a[1] !== "n" && a[1] !== "N")) &&
            ((a = kx.get(a) || a), Zi(e, a, r));
      }
    }
    function Qc(e, t, a, r, s, c) {
      switch (a) {
        case "style":
          Fh(e, r, c);
          break;
        case "dangerouslySetInnerHTML":
          if (r != null) {
            if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
            if (((a = r.__html), a != null)) {
              if (s.children != null) throw Error(o(60));
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof r == "string"
            ? ir(e, r)
            : (typeof r == "number" || typeof r == "bigint") && ir(e, "" + r);
          break;
        case "onScroll":
          r != null && Le("scroll", e);
          break;
        case "onScrollEnd":
          r != null && Le("scrollend", e);
          break;
        case "onClick":
          r != null && (e.onclick = Xo);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Bh.hasOwnProperty(a))
            e: {
              if (
                a[0] === "o" &&
                a[1] === "n" &&
                ((s = a.endsWith("Capture")),
                (t = a.slice(2, s ? a.length - 7 : void 0)),
                (c = e[Lt] || null),
                (c = c != null ? c[a] : null),
                typeof c == "function" && e.removeEventListener(t, c, s),
                typeof r == "function")
              ) {
                typeof c != "function" &&
                  c !== null &&
                  (a in e
                    ? (e[a] = null)
                    : e.hasAttribute(a) && e.removeAttribute(a)),
                  e.addEventListener(t, r, s);
                break e;
              }
              a in e
                ? (e[a] = r)
                : r === !0
                ? e.setAttribute(a, "")
                : Zi(e, a, r);
            }
      }
    }
    function kt(e, t, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Le("error", e), Le("load", e);
          var r = !1,
            s = !1,
            c;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var h = a[c];
              if (h != null)
                switch (c) {
                  case "src":
                    r = !0;
                    break;
                  case "srcSet":
                    s = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(137, t));
                  default:
                    Ge(e, t, c, h, a, null);
                }
            }
          s && Ge(e, t, "srcSet", a.srcSet, a, null),
            r && Ge(e, t, "src", a.src, a, null);
          return;
        case "input":
          Le("invalid", e);
          var y = (c = h = s = null),
            x = null,
            R = null;
          for (r in a)
            if (a.hasOwnProperty(r)) {
              var j = a[r];
              if (j != null)
                switch (r) {
                  case "name":
                    s = j;
                    break;
                  case "type":
                    h = j;
                    break;
                  case "checked":
                    x = j;
                    break;
                  case "defaultChecked":
                    R = j;
                    break;
                  case "value":
                    c = j;
                    break;
                  case "defaultValue":
                    y = j;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (j != null) throw Error(o(137, t));
                    break;
                  default:
                    Ge(e, t, r, j, a, null);
                }
            }
          Qh(e, c, y, x, R, h, s, !1), Fi(e);
          return;
        case "select":
          Le("invalid", e), (r = h = c = null);
          for (s in a)
            if (a.hasOwnProperty(s) && ((y = a[s]), y != null))
              switch (s) {
                case "value":
                  c = y;
                  break;
                case "defaultValue":
                  h = y;
                  break;
                case "multiple":
                  r = y;
                default:
                  Ge(e, t, s, y, a, null);
              }
          (t = c),
            (a = h),
            (e.multiple = !!r),
            t != null ? lr(e, !!r, t, !1) : a != null && lr(e, !!r, a, !0);
          return;
        case "textarea":
          Le("invalid", e), (c = s = r = null);
          for (h in a)
            if (a.hasOwnProperty(h) && ((y = a[h]), y != null))
              switch (h) {
                case "value":
                  r = y;
                  break;
                case "defaultValue":
                  s = y;
                  break;
                case "children":
                  c = y;
                  break;
                case "dangerouslySetInnerHTML":
                  if (y != null) throw Error(o(91));
                  break;
                default:
                  Ge(e, t, h, y, a, null);
              }
          Zh(e, r, s, c), Fi(e);
          return;
        case "option":
          for (x in a)
            if (a.hasOwnProperty(x) && ((r = a[x]), r != null))
              switch (x) {
                case "selected":
                  e.selected =
                    r && typeof r != "function" && typeof r != "symbol";
                  break;
                default:
                  Ge(e, t, x, r, a, null);
              }
          return;
        case "dialog":
          Le("beforetoggle", e),
            Le("toggle", e),
            Le("cancel", e),
            Le("close", e);
          break;
        case "iframe":
        case "object":
          Le("load", e);
          break;
        case "video":
        case "audio":
          for (r = 0; r < Xl.length; r++) Le(Xl[r], e);
          break;
        case "image":
          Le("error", e), Le("load", e);
          break;
        case "details":
          Le("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Le("error", e), Le("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (R in a)
            if (a.hasOwnProperty(R) && ((r = a[R]), r != null))
              switch (R) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ge(e, t, R, r, a, null);
              }
          return;
        default:
          if (ou(t)) {
            for (j in a)
              a.hasOwnProperty(j) &&
                ((r = a[j]), r !== void 0 && Qc(e, t, j, r, a, void 0));
            return;
          }
      }
      for (y in a)
        a.hasOwnProperty(y) &&
          ((r = a[y]), r != null && Ge(e, t, y, r, a, null));
    }
    function F2(e, t, a, r) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var s = null,
            c = null,
            h = null,
            y = null,
            x = null,
            R = null,
            j = null;
          for (L in a) {
            var X = a[L];
            if (a.hasOwnProperty(L) && X != null)
              switch (L) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  x = X;
                default:
                  r.hasOwnProperty(L) || Ge(e, t, L, null, r, X);
              }
          }
          for (var D in r) {
            var L = r[D];
            if (((X = a[D]), r.hasOwnProperty(D) && (L != null || X != null)))
              switch (D) {
                case "type":
                  c = L;
                  break;
                case "name":
                  s = L;
                  break;
                case "checked":
                  R = L;
                  break;
                case "defaultChecked":
                  j = L;
                  break;
                case "value":
                  h = L;
                  break;
                case "defaultValue":
                  y = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(o(137, t));
                  break;
                default:
                  L !== X && Ge(e, t, D, L, r, X);
              }
          }
          lu(e, h, y, x, R, j, c, s);
          return;
        case "select":
          L = h = y = D = null;
          for (c in a)
            if (((x = a[c]), a.hasOwnProperty(c) && x != null))
              switch (c) {
                case "value":
                  break;
                case "multiple":
                  L = x;
                default:
                  r.hasOwnProperty(c) || Ge(e, t, c, null, r, x);
              }
          for (s in r)
            if (
              ((c = r[s]),
              (x = a[s]),
              r.hasOwnProperty(s) && (c != null || x != null))
            )
              switch (s) {
                case "value":
                  D = c;
                  break;
                case "defaultValue":
                  y = c;
                  break;
                case "multiple":
                  h = c;
                default:
                  c !== x && Ge(e, t, s, c, r, x);
              }
          (t = y),
            (a = h),
            (r = L),
            D != null
              ? lr(e, !!a, D, !1)
              : !!r != !!a &&
                (t != null ? lr(e, !!a, t, !0) : lr(e, !!a, a ? [] : "", !1));
          return;
        case "textarea":
          L = D = null;
          for (y in a)
            if (
              ((s = a[y]),
              a.hasOwnProperty(y) && s != null && !r.hasOwnProperty(y))
            )
              switch (y) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Ge(e, t, y, null, r, s);
              }
          for (h in r)
            if (
              ((s = r[h]),
              (c = a[h]),
              r.hasOwnProperty(h) && (s != null || c != null))
            )
              switch (h) {
                case "value":
                  D = s;
                  break;
                case "defaultValue":
                  L = s;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (s != null) throw Error(o(91));
                  break;
                default:
                  s !== c && Ge(e, t, h, s, r, c);
              }
          Kh(e, D, L);
          return;
        case "option":
          for (var ve in a)
            if (
              ((D = a[ve]),
              a.hasOwnProperty(ve) && D != null && !r.hasOwnProperty(ve))
            )
              switch (ve) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  Ge(e, t, ve, null, r, D);
              }
          for (x in r)
            if (
              ((D = r[x]),
              (L = a[x]),
              r.hasOwnProperty(x) && D !== L && (D != null || L != null))
            )
              switch (x) {
                case "selected":
                  e.selected =
                    D && typeof D != "function" && typeof D != "symbol";
                  break;
                default:
                  Ge(e, t, x, D, r, L);
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var be in a)
            (D = a[be]),
              a.hasOwnProperty(be) &&
                D != null &&
                !r.hasOwnProperty(be) &&
                Ge(e, t, be, null, r, D);
          for (R in r)
            if (
              ((D = r[R]),
              (L = a[R]),
              r.hasOwnProperty(R) && D !== L && (D != null || L != null))
            )
              switch (R) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null) throw Error(o(137, t));
                  break;
                default:
                  Ge(e, t, R, D, r, L);
              }
          return;
        default:
          if (ou(t)) {
            for (var Xe in a)
              (D = a[Xe]),
                a.hasOwnProperty(Xe) &&
                  D !== void 0 &&
                  !r.hasOwnProperty(Xe) &&
                  Qc(e, t, Xe, void 0, r, D);
            for (j in r)
              (D = r[j]),
                (L = a[j]),
                !r.hasOwnProperty(j) ||
                  D === L ||
                  (D === void 0 && L === void 0) ||
                  Qc(e, t, j, D, r, L);
            return;
          }
      }
      for (var T in a)
        (D = a[T]),
          a.hasOwnProperty(T) &&
            D != null &&
            !r.hasOwnProperty(T) &&
            Ge(e, t, T, null, r, D);
      for (X in r)
        (D = r[X]),
          (L = a[X]),
          !r.hasOwnProperty(X) ||
            D === L ||
            (D == null && L == null) ||
            Ge(e, t, X, D, r, L);
    }
    var Kc = null,
      Zc = null;
    function Qo(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function $p(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Fp(e, t) {
      if (e === 0)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function $c(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        typeof t.children == "bigint" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Fc = null;
    function J2() {
      var e = window.event;
      return e && e.type === "popstate"
        ? e === Fc
          ? !1
          : ((Fc = e), !0)
        : ((Fc = null), !1);
    }
    var Jp = typeof setTimeout == "function" ? setTimeout : void 0,
      I2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Ip = typeof Promise == "function" ? Promise : void 0,
      P2 =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Ip < "u"
          ? function (e) {
              return Ip.resolve(null).then(e).catch(W2);
            }
          : Jp;
    function W2(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function fn(e) {
      return e === "head";
    }
    function Pp(e, t) {
      var a = t,
        r = 0,
        s = 0;
      do {
        var c = a.nextSibling;
        if ((e.removeChild(a), c && c.nodeType === 8))
          if (((a = c.data), a === "/$")) {
            if (0 < r && 8 > r) {
              a = r;
              var h = e.ownerDocument;
              if ((a & 1 && Kl(h.documentElement), a & 2 && Kl(h.body), a & 4))
                for (a = h.head, Kl(a), h = a.firstChild; h; ) {
                  var y = h.nextSibling,
                    x = h.nodeName;
                  h[ol] ||
                    x === "SCRIPT" ||
                    x === "STYLE" ||
                    (x === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                    a.removeChild(h),
                    (h = y);
                }
            }
            if (s === 0) {
              e.removeChild(c), ei(t);
              return;
            }
            s--;
          } else
            a === "$" || a === "$?" || a === "$!"
              ? s++
              : (r = a.charCodeAt(0) - 48);
        else r = 0;
        a = c;
      } while (a);
      ei(t);
    }
    function Jc(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (((t = t.nextSibling), a.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Jc(a), tu(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function eS(e, t, a, r) {
      for (; e.nodeType === 1; ) {
        var s = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (r) {
          if (!e[ol])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (
                  ((c = e.getAttribute("rel")),
                  c === "stylesheet" && e.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  c !== s.rel ||
                  e.getAttribute("href") !==
                    (s.href == null || s.href === "" ? null : s.href) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin) ||
                  e.getAttribute("title") !== (s.title == null ? null : s.title)
                )
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (
                  ((c = e.getAttribute("src")),
                  (c !== (s.src == null ? null : s.src) ||
                    e.getAttribute("type") !==
                      (s.type == null ? null : s.type) ||
                    e.getAttribute("crossorigin") !==
                      (s.crossOrigin == null ? null : s.crossOrigin)) &&
                    c &&
                    e.hasAttribute("async") &&
                    !e.hasAttribute("itemprop"))
                )
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          var c = s.name == null ? null : "" + s.name;
          if (s.type === "hidden" && e.getAttribute("name") === c) return e;
        } else return e;
        if (((e = sa(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function tS(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== "INPUT" ||
            e.type !== "hidden") &&
            !a) ||
          ((e = sa(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function Ic(e) {
      return (
        e.data === "$!" ||
        (e.data === "$?" && e.ownerDocument.readyState === "complete")
      );
    }
    function aS(e, t) {
      var a = e.ownerDocument;
      if (e.data !== "$?" || a.readyState === "complete") t();
      else {
        var r = function () {
          t(), a.removeEventListener("DOMContentLoaded", r);
        };
        a.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
      }
    }
    function sa(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          )
            break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    var Pc = null;
    function Wp(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === "$" || a === "$!" || a === "$?") {
            if (t === 0) return e;
            t--;
          } else a === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function e0(e, t, a) {
      switch (((t = Qo(a)), e)) {
        case "html":
          if (((e = t.documentElement), !e)) throw Error(o(452));
          return e;
        case "head":
          if (((e = t.head), !e)) throw Error(o(453));
          return e;
        case "body":
          if (((e = t.body), !e)) throw Error(o(454));
          return e;
        default:
          throw Error(o(451));
      }
    }
    function Kl(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      tu(e);
    }
    var aa = new Map(),
      t0 = new Set();
    function Ko(e) {
      return typeof e.getRootNode == "function"
        ? e.getRootNode()
        : e.nodeType === 9
        ? e
        : e.ownerDocument;
    }
    var qa = K.d;
    K.d = { f: nS, r: rS, D: lS, C: iS, L: oS, m: sS, X: cS, S: uS, M: fS };
    function nS() {
      var e = qa.f(),
        t = Ho();
      return e || t;
    }
    function rS(e) {
      var t = tr(e);
      t !== null && t.tag === 5 && t.type === "form" ? xm(t) : qa.r(e);
    }
    var _r = typeof document > "u" ? null : document;
    function a0(e, t, a) {
      var r = _r;
      if (r && typeof t == "string" && t) {
        var s = Ft(t);
        (s = 'link[rel="' + e + '"][href="' + s + '"]'),
          typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
          t0.has(s) ||
            (t0.add(s),
            (e = { rel: e, crossOrigin: a, href: t }),
            r.querySelector(s) === null &&
              ((t = r.createElement("link")),
              kt(t, "link", e),
              bt(t),
              r.head.appendChild(t)));
      }
    }
    function lS(e) {
      qa.D(e), a0("dns-prefetch", e, null);
    }
    function iS(e, t) {
      qa.C(e, t), a0("preconnect", e, t);
    }
    function oS(e, t, a) {
      qa.L(e, t, a);
      var r = _r;
      if (r && e && t) {
        var s = 'link[rel="preload"][as="' + Ft(t) + '"]';
        t === "image" && a && a.imageSrcSet
          ? ((s += '[imagesrcset="' + Ft(a.imageSrcSet) + '"]'),
            typeof a.imageSizes == "string" &&
              (s += '[imagesizes="' + Ft(a.imageSizes) + '"]'))
          : (s += '[href="' + Ft(e) + '"]');
        var c = s;
        switch (t) {
          case "style":
            c = Ur(e);
            break;
          case "script":
            c = Hr(e);
        }
        aa.has(c) ||
          ((e = b(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t,
            },
            a
          )),
          aa.set(c, e),
          r.querySelector(s) !== null ||
            (t === "style" && r.querySelector(Zl(c))) ||
            (t === "script" && r.querySelector($l(c))) ||
            ((t = r.createElement("link")),
            kt(t, "link", e),
            bt(t),
            r.head.appendChild(t)));
      }
    }
    function sS(e, t) {
      qa.m(e, t);
      var a = _r;
      if (a && e) {
        var r = t && typeof t.as == "string" ? t.as : "script",
          s =
            'link[rel="modulepreload"][as="' +
            Ft(r) +
            '"][href="' +
            Ft(e) +
            '"]',
          c = s;
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            c = Hr(e);
        }
        if (
          !aa.has(c) &&
          ((e = b({ rel: "modulepreload", href: e }, t)),
          aa.set(c, e),
          a.querySelector(s) === null)
        ) {
          switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector($l(c))) return;
          }
          (r = a.createElement("link")),
            kt(r, "link", e),
            bt(r),
            a.head.appendChild(r);
        }
      }
    }
    function uS(e, t, a) {
      qa.S(e, t, a);
      var r = _r;
      if (r && e) {
        var s = ar(r).hoistableStyles,
          c = Ur(e);
        t = t || "default";
        var h = s.get(c);
        if (!h) {
          var y = { loading: 0, preload: null };
          if ((h = r.querySelector(Zl(c)))) y.loading = 5;
          else {
            (e = b({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
              (a = aa.get(c)) && Wc(e, a);
            var x = (h = r.createElement("link"));
            bt(x),
              kt(x, "link", e),
              (x._p = new Promise(function (R, j) {
                (x.onload = R), (x.onerror = j);
              })),
              x.addEventListener("load", function () {
                y.loading |= 1;
              }),
              x.addEventListener("error", function () {
                y.loading |= 2;
              }),
              (y.loading |= 4),
              Zo(h, t, r);
          }
          (h = { type: "stylesheet", instance: h, count: 1, state: y }),
            s.set(c, h);
        }
      }
    }
    function cS(e, t) {
      qa.X(e, t);
      var a = _r;
      if (a && e) {
        var r = ar(a).hoistableScripts,
          s = Hr(e),
          c = r.get(s);
        c ||
          ((c = a.querySelector($l(s))),
          c ||
            ((e = b({ src: e, async: !0 }, t)),
            (t = aa.get(s)) && ef(e, t),
            (c = a.createElement("script")),
            bt(c),
            kt(c, "link", e),
            a.head.appendChild(c)),
          (c = { type: "script", instance: c, count: 1, state: null }),
          r.set(s, c));
      }
    }
    function fS(e, t) {
      qa.M(e, t);
      var a = _r;
      if (a && e) {
        var r = ar(a).hoistableScripts,
          s = Hr(e),
          c = r.get(s);
        c ||
          ((c = a.querySelector($l(s))),
          c ||
            ((e = b({ src: e, async: !0, type: "module" }, t)),
            (t = aa.get(s)) && ef(e, t),
            (c = a.createElement("script")),
            bt(c),
            kt(c, "link", e),
            a.head.appendChild(c)),
          (c = { type: "script", instance: c, count: 1, state: null }),
          r.set(s, c));
      }
    }
    function n0(e, t, a, r) {
      var s = (s = pe.current) ? Ko(s) : null;
      if (!s) throw Error(o(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string"
            ? ((t = Ur(a.href)),
              (a = ar(s).hoistableStyles),
              (r = a.get(t)),
              r ||
                ((r = { type: "style", instance: null, count: 0, state: null }),
                a.set(t, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            a.rel === "stylesheet" &&
            typeof a.href == "string" &&
            typeof a.precedence == "string"
          ) {
            e = Ur(a.href);
            var c = ar(s).hoistableStyles,
              h = c.get(e);
            if (
              (h ||
                ((s = s.ownerDocument || s),
                (h = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                c.set(e, h),
                (c = s.querySelector(Zl(e))) &&
                  !c._p &&
                  ((h.instance = c), (h.state.loading = 5)),
                aa.has(e) ||
                  ((a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy,
                  }),
                  aa.set(e, a),
                  c || dS(s, e, a, h.state))),
              t && r === null)
            )
              throw Error(o(528, ""));
            return h;
          }
          if (t && r !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return (
            (t = a.async),
            (a = a.src),
            typeof a == "string" &&
            t &&
            typeof t != "function" &&
            typeof t != "symbol"
              ? ((t = Hr(a)),
                (a = ar(s).hoistableScripts),
                (r = a.get(t)),
                r ||
                  ((r = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  a.set(t, r)),
                r)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(o(444, e));
      }
    }
    function Ur(e) {
      return 'href="' + Ft(e) + '"';
    }
    function Zl(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function r0(e) {
      return b({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function dS(e, t, a, r) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]")
        ? (r.loading = 1)
        : ((t = e.createElement("link")),
          (r.preload = t),
          t.addEventListener("load", function () {
            return (r.loading |= 1);
          }),
          t.addEventListener("error", function () {
            return (r.loading |= 2);
          }),
          kt(t, "link", a),
          bt(t),
          e.head.appendChild(t));
    }
    function Hr(e) {
      return '[src="' + Ft(e) + '"]';
    }
    function $l(e) {
      return "script[async]" + e;
    }
    function l0(e, t, a) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case "style":
            var r = e.querySelector('style[data-href~="' + Ft(a.href) + '"]');
            if (r) return (t.instance = r), bt(r), r;
            var s = b({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement("style")),
              bt(r),
              kt(r, "style", s),
              Zo(r, a.precedence, e),
              (t.instance = r)
            );
          case "stylesheet":
            s = Ur(a.href);
            var c = e.querySelector(Zl(s));
            if (c) return (t.state.loading |= 4), (t.instance = c), bt(c), c;
            (r = r0(a)),
              (s = aa.get(s)) && Wc(r, s),
              (c = (e.ownerDocument || e).createElement("link")),
              bt(c);
            var h = c;
            return (
              (h._p = new Promise(function (y, x) {
                (h.onload = y), (h.onerror = x);
              })),
              kt(c, "link", r),
              (t.state.loading |= 4),
              Zo(c, a.precedence, e),
              (t.instance = c)
            );
          case "script":
            return (
              (c = Hr(a.src)),
              (s = e.querySelector($l(c)))
                ? ((t.instance = s), bt(s), s)
                : ((r = a),
                  (s = aa.get(c)) && ((r = b({}, a)), ef(r, s)),
                  (e = e.ownerDocument || e),
                  (s = e.createElement("script")),
                  bt(s),
                  kt(s, "link", r),
                  e.head.appendChild(s),
                  (t.instance = s))
            );
          case "void":
            return null;
          default:
            throw Error(o(443, t.type));
        }
      else
        t.type === "stylesheet" &&
          (t.state.loading & 4) === 0 &&
          ((r = t.instance), (t.state.loading |= 4), Zo(r, a.precedence, e));
      return t.instance;
    }
    function Zo(e, t, a) {
      for (
        var r = a.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]'
          ),
          s = r.length ? r[r.length - 1] : null,
          c = s,
          h = 0;
        h < r.length;
        h++
      ) {
        var y = r[h];
        if (y.dataset.precedence === t) c = y;
        else if (c !== s) break;
      }
      c
        ? c.parentNode.insertBefore(e, c.nextSibling)
        : ((t = a.nodeType === 9 ? a.head : a),
          t.insertBefore(e, t.firstChild));
    }
    function Wc(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title);
    }
    function ef(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity);
    }
    var $o = null;
    function i0(e, t, a) {
      if ($o === null) {
        var r = new Map(),
          s = ($o = new Map());
        s.set(a, r);
      } else (s = $o), (r = s.get(a)), r || ((r = new Map()), s.set(a, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), a = a.getElementsByTagName(e), s = 0;
        s < a.length;
        s++
      ) {
        var c = a[s];
        if (
          !(
            c[ol] ||
            c[Ct] ||
            (e === "link" && c.getAttribute("rel") === "stylesheet")
          ) &&
          c.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var h = c.getAttribute(t) || "";
          h = e + h;
          var y = r.get(h);
          y ? y.push(c) : r.set(h, [c]);
        }
      }
      return r;
    }
    function o0(e, t, a) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(
          a,
          t === "title" ? e.querySelector("head > title") : null
        );
    }
    function hS(e, t, a) {
      if (a === 1 || t.itemProp != null) return !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            typeof t.precedence != "string" ||
            typeof t.href != "string" ||
            t.href === ""
          )
            break;
          return !0;
        case "link":
          if (
            typeof t.rel != "string" ||
            typeof t.href != "string" ||
            t.href === "" ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case "stylesheet":
              return (
                (e = t.disabled), typeof t.precedence == "string" && e == null
              );
            default:
              return !0;
          }
        case "script":
          if (
            t.async &&
            typeof t.async != "function" &&
            typeof t.async != "symbol" &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function s0(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    var Fl = null;
    function gS() {}
    function mS(e, t, a) {
      if (Fl === null) throw Error(o(475));
      var r = Fl;
      if (
        t.type === "stylesheet" &&
        (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
        (t.state.loading & 4) === 0
      ) {
        if (t.instance === null) {
          var s = Ur(a.href),
            c = e.querySelector(Zl(s));
          if (c) {
            (e = c._p),
              e !== null &&
                typeof e == "object" &&
                typeof e.then == "function" &&
                (r.count++, (r = Fo.bind(r)), e.then(r, r)),
              (t.state.loading |= 4),
              (t.instance = c),
              bt(c);
            return;
          }
          (c = e.ownerDocument || e),
            (a = r0(a)),
            (s = aa.get(s)) && Wc(a, s),
            (c = c.createElement("link")),
            bt(c);
          var h = c;
          (h._p = new Promise(function (y, x) {
            (h.onload = y), (h.onerror = x);
          })),
            kt(c, "link", a),
            (t.instance = c);
        }
        r.stylesheets === null && (r.stylesheets = new Map()),
          r.stylesheets.set(t, e),
          (e = t.state.preload) &&
            (t.state.loading & 3) === 0 &&
            (r.count++,
            (t = Fo.bind(r)),
            e.addEventListener("load", t),
            e.addEventListener("error", t));
      }
    }
    function pS() {
      if (Fl === null) throw Error(o(475));
      var e = Fl;
      return (
        e.stylesheets && e.count === 0 && tf(e, e.stylesheets),
        0 < e.count
          ? function (t) {
              var a = setTimeout(function () {
                if ((e.stylesheets && tf(e, e.stylesheets), e.unsuspend)) {
                  var r = e.unsuspend;
                  (e.unsuspend = null), r();
                }
              }, 6e4);
              return (
                (e.unsuspend = t),
                function () {
                  (e.unsuspend = null), clearTimeout(a);
                }
              );
            }
          : null
      );
    }
    function Fo() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) tf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var Jo = null;
    function tf(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Jo = new Map()),
          t.forEach(bS, e),
          (Jo = null),
          Fo.call(e));
    }
    function bS(e, t) {
      if (!(t.state.loading & 4)) {
        var a = Jo.get(e);
        if (a) var r = a.get(null);
        else {
          (a = new Map()), Jo.set(e, a);
          for (
            var s = e.querySelectorAll(
                "link[data-precedence],style[data-precedence]"
              ),
              c = 0;
            c < s.length;
            c++
          ) {
            var h = s[c];
            (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
              (a.set(h.dataset.precedence, h), (r = h));
          }
          r && a.set(null, r);
        }
        (s = t.instance),
          (h = s.getAttribute("data-precedence")),
          (c = a.get(h) || r),
          c === r && a.set(null, s),
          a.set(h, s),
          this.count++,
          (r = Fo.bind(this)),
          s.addEventListener("load", r),
          s.addEventListener("error", r),
          c
            ? c.parentNode.insertBefore(s, c.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(s, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var Jl = {
      $$typeof: P,
      Provider: null,
      Consumer: null,
      _currentValue: Y,
      _currentValue2: Y,
      _threadCount: 0,
    };
    function yS(e, t, a, r, s, c, h, y) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Is(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Is(0)),
        (this.hiddenUpdates = Is(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = s),
        (this.onCaughtError = c),
        (this.onRecoverableError = h),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = y),
        (this.incompleteTransitions = new Map());
    }
    function u0(e, t, a, r, s, c, h, y, x, R, j, X) {
      return (
        (e = new yS(e, t, a, h, y, x, R, X)),
        (t = 1),
        c === !0 && (t |= 24),
        (c = jt(3, null, null, t)),
        (e.current = c),
        (c.stateNode = e),
        (t = Uu()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (c.memoizedState = { element: r, isDehydrated: a, cache: t }),
        ju(c),
        e
      );
    }
    function c0(e) {
      return e ? ((e = gr), e) : gr;
    }
    function f0(e, t, a, r, s, c) {
      (s = c0(s)),
        r.context === null ? (r.context = s) : (r.pendingContext = s),
        (r = Ia(t)),
        (r.payload = { element: a }),
        (c = c === void 0 ? null : c),
        c !== null && (r.callback = c),
        (a = Pa(e, r, t)),
        a !== null && (Qt(a, e, t), Tl(a, e, t));
    }
    function d0(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function af(e, t) {
      d0(e, t), (e = e.alternate) && d0(e, t);
    }
    function h0(e) {
      if (e.tag === 13) {
        var t = hr(e, 67108864);
        t !== null && Qt(t, e, 67108864), af(e, 67108864);
      }
    }
    var Io = !0;
    function vS(e, t, a, r) {
      var s = N.T;
      N.T = null;
      var c = K.p;
      try {
        (K.p = 2), nf(e, t, a, r);
      } finally {
        (K.p = c), (N.T = s);
      }
    }
    function wS(e, t, a, r) {
      var s = N.T;
      N.T = null;
      var c = K.p;
      try {
        (K.p = 8), nf(e, t, a, r);
      } finally {
        (K.p = c), (N.T = s);
      }
    }
    function nf(e, t, a, r) {
      if (Io) {
        var s = rf(r);
        if (s === null) Xc(e, t, r, Po, a), m0(e, r);
        else if (SS(s, e, t, a, r)) r.stopPropagation();
        else if ((m0(e, r), t & 4 && -1 < xS.indexOf(e))) {
          for (; s !== null; ) {
            var c = tr(s);
            if (c !== null)
              switch (c.tag) {
                case 3:
                  if (
                    ((c = c.stateNode), c.current.memoizedState.isDehydrated)
                  ) {
                    var h = Ta(c.pendingLanes);
                    if (h !== 0) {
                      var y = c;
                      for (y.pendingLanes |= 2, y.entangledLanes |= 2; h; ) {
                        var x = 1 << (31 - Ke(h));
                        (y.entanglements[1] |= x), (h &= ~x);
                      }
                      ba(c), (je & 6) === 0 && ((_o = Zt() + 500), Gl(0));
                    }
                  }
                  break;
                case 13:
                  (y = hr(c, 2)), y !== null && Qt(y, c, 2), Ho(), af(c, 2);
              }
            if (((c = rf(r)), c === null && Xc(e, t, r, Po, a), c === s)) break;
            s = c;
          }
          s !== null && r.stopPropagation();
        } else Xc(e, t, r, null, a);
      }
    }
    function rf(e) {
      return (e = uu(e)), lf(e);
    }
    var Po = null;
    function lf(e) {
      if (((Po = null), (e = er(e)), e !== null)) {
        var t = f(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (((e = d(t)), e !== null)) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (Po = e), null;
    }
    function g0(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (Nh()) {
            case ll:
              return 2;
            case E:
              return 8;
            case z:
            case q:
              return 32;
            case ne:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var of = !1,
      dn = null,
      hn = null,
      gn = null,
      Il = new Map(),
      Pl = new Map(),
      mn = [],
      xS =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " "
        );
    function m0(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          dn = null;
          break;
        case "dragenter":
        case "dragleave":
          hn = null;
          break;
        case "mouseover":
        case "mouseout":
          gn = null;
          break;
        case "pointerover":
        case "pointerout":
          Il.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pl.delete(t.pointerId);
      }
    }
    function Wl(e, t, a, r, s, c) {
      return e === null || e.nativeEvent !== c
        ? ((e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: r,
            nativeEvent: c,
            targetContainers: [s],
          }),
          t !== null && ((t = tr(t)), t !== null && h0(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          s !== null && t.indexOf(s) === -1 && t.push(s),
          e);
    }
    function SS(e, t, a, r, s) {
      switch (t) {
        case "focusin":
          return (dn = Wl(dn, e, t, a, r, s)), !0;
        case "dragenter":
          return (hn = Wl(hn, e, t, a, r, s)), !0;
        case "mouseover":
          return (gn = Wl(gn, e, t, a, r, s)), !0;
        case "pointerover":
          var c = s.pointerId;
          return Il.set(c, Wl(Il.get(c) || null, e, t, a, r, s)), !0;
        case "gotpointercapture":
          return (
            (c = s.pointerId),
            Pl.set(c, Wl(Pl.get(c) || null, e, t, a, r, s)),
            !0
          );
      }
      return !1;
    }
    function p0(e) {
      var t = er(e.target);
      if (t !== null) {
        var a = f(t);
        if (a !== null) {
          if (((t = a.tag), t === 13)) {
            if (((t = d(a)), t !== null)) {
              (e.blockedOn = t),
                mx(e.priority, function () {
                  if (a.tag === 13) {
                    var r = Xt();
                    r = Ps(r);
                    var s = hr(a, r);
                    s !== null && Qt(s, a, r), af(a, r);
                  }
                });
              return;
            }
          } else if (
            t === 3 &&
            a.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Wo(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = rf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var r = new a.constructor(a.type, a);
          (su = r), a.target.dispatchEvent(r), (su = null);
        } else return (t = tr(a)), t !== null && h0(t), (e.blockedOn = a), !1;
        t.shift();
      }
      return !0;
    }
    function b0(e, t, a) {
      Wo(e) && a.delete(t);
    }
    function ES() {
      (of = !1),
        dn !== null && Wo(dn) && (dn = null),
        hn !== null && Wo(hn) && (hn = null),
        gn !== null && Wo(gn) && (gn = null),
        Il.forEach(b0),
        Pl.forEach(b0);
    }
    function es(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        of ||
          ((of = !0),
          n.unstable_scheduleCallback(n.unstable_NormalPriority, ES)));
    }
    var ts = null;
    function y0(e) {
      ts !== e &&
        ((ts = e),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
          ts === e && (ts = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t],
              r = e[t + 1],
              s = e[t + 2];
            if (typeof r != "function") {
              if (lf(r || a) === null) continue;
              break;
            }
            var c = tr(a);
            c !== null &&
              (e.splice(t, 3),
              (t -= 3),
              lc(
                c,
                { pending: !0, data: s, method: a.method, action: r },
                r,
                s
              ));
          }
        }));
    }
    function ei(e) {
      function t(x) {
        return es(x, e);
      }
      dn !== null && es(dn, e),
        hn !== null && es(hn, e),
        gn !== null && es(gn, e),
        Il.forEach(t),
        Pl.forEach(t);
      for (var a = 0; a < mn.length; a++) {
        var r = mn[a];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < mn.length && ((a = mn[0]), a.blockedOn === null); )
        p0(a), a.blockedOn === null && mn.shift();
      if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
        for (r = 0; r < a.length; r += 3) {
          var s = a[r],
            c = a[r + 1],
            h = s[Lt] || null;
          if (typeof c == "function") h || y0(a);
          else if (h) {
            var y = null;
            if (c && c.hasAttribute("formAction")) {
              if (((s = c), (h = c[Lt] || null))) y = h.formAction;
              else if (lf(s) !== null) continue;
            } else y = h.action;
            typeof y == "function"
              ? (a[r + 1] = y)
              : (a.splice(r, 3), (r -= 3)),
              y0(a);
          }
        }
    }
    function sf(e) {
      this._internalRoot = e;
    }
    (as.prototype.render = sf.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(o(409));
        var a = t.current,
          r = Xt();
        f0(a, r, e, t, null, null);
      }),
      (as.prototype.unmount = sf.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            f0(e.current, 2, null, e, null, null), Ho(), (t[Wn] = null);
          }
        });
    function as(e) {
      this._internalRoot = e;
    }
    as.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = _h();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < mn.length && t !== 0 && t < mn[a].priority; a++);
        mn.splice(a, 0, e), a === 0 && p0(e);
      }
    };
    var v0 = l.version;
    if (v0 !== "19.1.0") throw Error(o(527, v0, "19.1.0"));
    K.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (
        (e = m(t)),
        (e = e !== null ? p(e) : null),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var kS = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: N,
      reconcilerVersion: "19.1.0",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ns.isDisabled && ns.supportsFiber)
        try {
          (fe = ns.inject(kS)), (ke = ns);
        } catch {}
    }
    return (
      (Br.createRoot = function (e, t) {
        if (!u(e)) throw Error(o(299));
        var a = !1,
          r = "",
          s = _m,
          c = Um,
          h = Hm,
          y = null;
        return (
          t != null &&
            (t.unstable_strictMode === !0 && (a = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
            t.onCaughtError !== void 0 && (c = t.onCaughtError),
            t.onRecoverableError !== void 0 && (h = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 &&
              (y = t.unstable_transitionCallbacks)),
          (t = u0(e, 1, !1, null, null, a, r, s, c, h, y, null)),
          (e[Wn] = t.current),
          Gc(e),
          new sf(t)
        );
      }),
      (Br.hydrateRoot = function (e, t, a) {
        if (!u(e)) throw Error(o(299));
        var r = !1,
          s = "",
          c = _m,
          h = Um,
          y = Hm,
          x = null,
          R = null;
        return (
          a != null &&
            (a.unstable_strictMode === !0 && (r = !0),
            a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
            a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
            a.onCaughtError !== void 0 && (h = a.onCaughtError),
            a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
            a.unstable_transitionCallbacks !== void 0 &&
              (x = a.unstable_transitionCallbacks),
            a.formState !== void 0 && (R = a.formState)),
          (t = u0(e, 1, !0, t, a ?? null, r, s, c, h, y, x, R)),
          (t.context = c0(null)),
          (a = t.current),
          (r = Xt()),
          (r = Ps(r)),
          (s = Ia(r)),
          (s.callback = null),
          Pa(a, s, r),
          (a = r),
          (t.current.lanes = a),
          il(t, a),
          ba(t),
          (e[Wn] = t.current),
          Gc(e),
          new as(t)
        );
      }),
      (Br.version = "19.1.0"),
      Br
    );
  }
  var bf;
  function A0() {
    if (bf) return ls.exports;
    bf = 1;
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (l) {
          console.error(l);
        }
    }
    return n(), (ls.exports = k0()), ls.exports;
  }
  var T0 = A0(),
    us = { exports: {} },
    Vr = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var yf;
  function C0() {
    if (yf) return Vr;
    yf = 1;
    var n = Symbol.for("react.transitional.element"),
      l = Symbol.for("react.fragment");
    function i(o, u, f) {
      var d = null;
      if (
        (f !== void 0 && (d = "" + f),
        u.key !== void 0 && (d = "" + u.key),
        "key" in u)
      ) {
        f = {};
        for (var g in u) g !== "key" && (f[g] = u[g]);
      } else f = u;
      return (
        (u = f.ref),
        { $$typeof: n, type: o, key: d, ref: u !== void 0 ? u : null, props: f }
      );
    }
    return (Vr.Fragment = l), (Vr.jsx = i), (Vr.jsxs = i), Vr;
  }
  var vf;
  function O0() {
    return vf || ((vf = 1), (us.exports = C0())), us.exports;
  }
  var Rt = O0();
  const R0 =
      /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    N0 = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
      "&nbsp;": " ",
      "&#160;": " ",
      "&copy;": "©",
      "&#169;": "©",
      "&reg;": "®",
      "&#174;": "®",
      "&hellip;": "…",
      "&#8230;": "…",
      "&#x2F;": "/",
      "&#47;": "/",
    },
    z0 = (n) => N0[n];
  let wf = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: (n) => n.replace(R0, z0),
  };
  const M0 = (n = {}) => {
      wf = { ...wf, ...n };
    },
    D0 = {
      type: "3rdParty",
      init(n) {
        M0(n.options.react);
      },
    },
    xe = (n) => typeof n == "string",
    jr = () => {
      let n, l;
      const i = new Promise((o, u) => {
        (n = o), (l = u);
      });
      return (i.resolve = n), (i.reject = l), i;
    },
    xf = (n) => (n == null ? "" : "" + n),
    L0 = (n, l, i) => {
      n.forEach((o) => {
        l[o] && (i[o] = l[o]);
      });
    },
    _0 = /###/g,
    Sf = (n) => (n && n.indexOf("###") > -1 ? n.replace(_0, ".") : n),
    Ef = (n) => !n || xe(n),
    qr = (n, l, i) => {
      const o = xe(l) ? l.split(".") : l;
      let u = 0;
      for (; u < o.length - 1; ) {
        if (Ef(n)) return {};
        const f = Sf(o[u]);
        !n[f] && i && (n[f] = new i()),
          Object.prototype.hasOwnProperty.call(n, f) ? (n = n[f]) : (n = {}),
          ++u;
      }
      return Ef(n) ? {} : { obj: n, k: Sf(o[u]) };
    },
    kf = (n, l, i) => {
      const { obj: o, k: u } = qr(n, l, Object);
      if (o !== void 0 || l.length === 1) {
        o[u] = i;
        return;
      }
      let f = l[l.length - 1],
        d = l.slice(0, l.length - 1),
        g = qr(n, d, Object);
      for (; g.obj === void 0 && d.length; )
        (f = `${d[d.length - 1]}.${f}`),
          (d = d.slice(0, d.length - 1)),
          (g = qr(n, d, Object)),
          g && g.obj && typeof g.obj[`${g.k}.${f}`] < "u" && (g.obj = void 0);
      g.obj[`${g.k}.${f}`] = i;
    },
    U0 = (n, l, i, o) => {
      const { obj: u, k: f } = qr(n, l, Object);
      (u[f] = u[f] || []), u[f].push(i);
    },
    ti = (n, l) => {
      const { obj: i, k: o } = qr(n, l);
      if (i) return i[o];
    },
    H0 = (n, l, i) => {
      const o = ti(n, i);
      return o !== void 0 ? o : ti(l, i);
    },
    Af = (n, l, i) => {
      for (const o in l)
        o !== "__proto__" &&
          o !== "constructor" &&
          (o in n
            ? xe(n[o]) ||
              n[o] instanceof String ||
              xe(l[o]) ||
              l[o] instanceof String
              ? i && (n[o] = l[o])
              : Af(n[o], l[o], i)
            : (n[o] = l[o]));
      return n;
    },
    Yn = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  var B0 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
  };
  const V0 = (n) => (xe(n) ? n.replace(/[&<>"'\/]/g, (l) => B0[l]) : n);
  class j0 {
    constructor(l) {
      (this.capacity = l),
        (this.regExpMap = new Map()),
        (this.regExpQueue = []);
    }
    getRegExp(l) {
      const i = this.regExpMap.get(l);
      if (i !== void 0) return i;
      const o = new RegExp(l);
      return (
        this.regExpQueue.length === this.capacity &&
          this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(l, o),
        this.regExpQueue.push(l),
        o
      );
    }
  }
  const q0 = [" ", ",", "?", "!", ";"],
    Y0 = new j0(20),
    G0 = (n, l, i) => {
      (l = l || ""), (i = i || "");
      const o = q0.filter((d) => l.indexOf(d) < 0 && i.indexOf(d) < 0);
      if (o.length === 0) return !0;
      const u = Y0.getRegExp(
        `(${o.map((d) => (d === "?" ? "\\?" : d)).join("|")})`
      );
      let f = !u.test(n);
      if (!f) {
        const d = n.indexOf(i);
        d > 0 && !u.test(n.substring(0, d)) && (f = !0);
      }
      return f;
    },
    cs = function (n, l) {
      let i =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
      if (!n) return;
      if (n[l]) return n[l];
      const o = l.split(i);
      let u = n;
      for (let f = 0; f < o.length; ) {
        if (!u || typeof u != "object") return;
        let d,
          g = "";
        for (let m = f; m < o.length; ++m)
          if ((m !== f && (g += i), (g += o[m]), (d = u[g]), d !== void 0)) {
            if (
              ["string", "number", "boolean"].indexOf(typeof d) > -1 &&
              m < o.length - 1
            )
              continue;
            f += m - f + 1;
            break;
          }
        u = d;
      }
      return u;
    },
    ai = (n) => n && n.replace("_", "-"),
    X0 = {
      type: "logger",
      log(n) {
        this.output("log", n);
      },
      warn(n) {
        this.output("warn", n);
      },
      error(n) {
        this.output("error", n);
      },
      output(n, l) {
        console && console[n] && console[n].apply(console, l);
      },
    };
  class ni {
    constructor(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.init(l, i);
    }
    init(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (this.prefix = i.prefix || "i18next:"),
        (this.logger = l || X0),
        (this.options = i),
        (this.debug = i.debug);
    }
    log() {
      for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      return this.forward(i, "log", "", !0);
    }
    warn() {
      for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      return this.forward(i, "warn", "", !0);
    }
    error() {
      for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      return this.forward(i, "error", "");
    }
    deprecate() {
      for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      return this.forward(i, "warn", "WARNING DEPRECATED: ", !0);
    }
    forward(l, i, o, u) {
      return u && !this.debug
        ? null
        : (xe(l[0]) && (l[0] = `${o}${this.prefix} ${l[0]}`),
          this.logger[i](l));
    }
    create(l) {
      return new ni(this.logger, {
        prefix: `${this.prefix}:${l}:`,
        ...this.options,
      });
    }
    clone(l) {
      return (
        (l = l || this.options),
        (l.prefix = l.prefix || this.prefix),
        new ni(this.logger, l)
      );
    }
  }
  var ua = new ni();
  class ri {
    constructor() {
      this.observers = {};
    }
    on(l, i) {
      return (
        l.split(" ").forEach((o) => {
          this.observers[o] || (this.observers[o] = new Map());
          const u = this.observers[o].get(i) || 0;
          this.observers[o].set(i, u + 1);
        }),
        this
      );
    }
    off(l, i) {
      if (this.observers[l]) {
        if (!i) {
          delete this.observers[l];
          return;
        }
        this.observers[l].delete(i);
      }
    }
    emit(l) {
      for (
        var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1;
        u < i;
        u++
      )
        o[u - 1] = arguments[u];
      this.observers[l] &&
        Array.from(this.observers[l].entries()).forEach((d) => {
          let [g, m] = d;
          for (let p = 0; p < m; p++) g(...o);
        }),
        this.observers["*"] &&
          Array.from(this.observers["*"].entries()).forEach((d) => {
            let [g, m] = d;
            for (let p = 0; p < m; p++) g.apply(g, [l, ...o]);
          });
    }
  }
  class Tf extends ri {
    constructor(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : { ns: ["translation"], defaultNS: "translation" };
      super(),
        (this.data = l || {}),
        (this.options = i),
        this.options.keySeparator === void 0 &&
          (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 &&
          (this.options.ignoreJSONStructure = !0);
    }
    addNamespaces(l) {
      this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
    }
    removeNamespaces(l) {
      const i = this.options.ns.indexOf(l);
      i > -1 && this.options.ns.splice(i, 1);
    }
    getResource(l, i, o) {
      let u =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const f =
          u.keySeparator !== void 0
            ? u.keySeparator
            : this.options.keySeparator,
        d =
          u.ignoreJSONStructure !== void 0
            ? u.ignoreJSONStructure
            : this.options.ignoreJSONStructure;
      let g;
      l.indexOf(".") > -1
        ? (g = l.split("."))
        : ((g = [l, i]),
          o &&
            (Array.isArray(o)
              ? g.push(...o)
              : xe(o) && f
              ? g.push(...o.split(f))
              : g.push(o)));
      const m = ti(this.data, g);
      return (
        !m &&
          !i &&
          !o &&
          l.indexOf(".") > -1 &&
          ((l = g[0]), (i = g[1]), (o = g.slice(2).join("."))),
        m || !d || !xe(o)
          ? m
          : cs(this.data && this.data[l] && this.data[l][i], o, f)
      );
    }
    addResource(l, i, o, u) {
      let f =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { silent: !1 };
      const d =
        f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
      let g = [l, i];
      o && (g = g.concat(d ? o.split(d) : o)),
        l.indexOf(".") > -1 && ((g = l.split(".")), (u = i), (i = g[1])),
        this.addNamespaces(i),
        kf(this.data, g, u),
        f.silent || this.emit("added", l, i, o, u);
    }
    addResources(l, i, o) {
      let u =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : { silent: !1 };
      for (const f in o)
        (xe(o[f]) || Array.isArray(o[f])) &&
          this.addResource(l, i, f, o[f], { silent: !0 });
      u.silent || this.emit("added", l, i, o);
    }
    addResourceBundle(l, i, o, u, f) {
      let d =
          arguments.length > 5 && arguments[5] !== void 0
            ? arguments[5]
            : { silent: !1, skipCopy: !1 },
        g = [l, i];
      l.indexOf(".") > -1 && ((g = l.split(".")), (u = o), (o = i), (i = g[1])),
        this.addNamespaces(i);
      let m = ti(this.data, g) || {};
      d.skipCopy || (o = JSON.parse(JSON.stringify(o))),
        u ? Af(m, o, f) : (m = { ...m, ...o }),
        kf(this.data, g, m),
        d.silent || this.emit("added", l, i, o);
    }
    removeResourceBundle(l, i) {
      this.hasResourceBundle(l, i) && delete this.data[l][i],
        this.removeNamespaces(i),
        this.emit("removed", l, i);
    }
    hasResourceBundle(l, i) {
      return this.getResource(l, i) !== void 0;
    }
    getResourceBundle(l, i) {
      return (
        i || (i = this.options.defaultNS),
        this.options.compatibilityAPI === "v1"
          ? { ...this.getResource(l, i) }
          : this.getResource(l, i)
      );
    }
    getDataByLanguage(l) {
      return this.data[l];
    }
    hasLanguageSomeTranslations(l) {
      const i = this.getDataByLanguage(l);
      return !!((i && Object.keys(i)) || []).find(
        (u) => i[u] && Object.keys(i[u]).length > 0
      );
    }
    toJSON() {
      return this.data;
    }
  }
  var Cf = {
    processors: {},
    addPostProcessor(n) {
      this.processors[n.name] = n;
    },
    handle(n, l, i, o, u) {
      return (
        n.forEach((f) => {
          this.processors[f] && (l = this.processors[f].process(l, i, o, u));
        }),
        l
      );
    },
  };
  const Of = {};
  class li extends ri {
    constructor(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(),
        L0(
          [
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils",
          ],
          l,
          this
        ),
        (this.options = i),
        this.options.keySeparator === void 0 &&
          (this.options.keySeparator = "."),
        (this.logger = ua.create("translator"));
    }
    changeLanguage(l) {
      l && (this.language = l);
    }
    exists(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : { interpolation: {} };
      if (l == null) return !1;
      const o = this.resolve(l, i);
      return o && o.res !== void 0;
    }
    extractFromKey(l, i) {
      let o =
        i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
      o === void 0 && (o = ":");
      const u =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
      let f = i.ns || this.options.defaultNS || [];
      const d = o && l.indexOf(o) > -1,
        g =
          !this.options.userDefinedKeySeparator &&
          !i.keySeparator &&
          !this.options.userDefinedNsSeparator &&
          !i.nsSeparator &&
          !G0(l, o, u);
      if (d && !g) {
        const m = l.match(this.interpolator.nestingRegexp);
        if (m && m.length > 0) return { key: l, namespaces: xe(f) ? [f] : f };
        const p = l.split(o);
        (o !== u || (o === u && this.options.ns.indexOf(p[0]) > -1)) &&
          (f = p.shift()),
          (l = p.join(u));
      }
      return { key: l, namespaces: xe(f) ? [f] : f };
    }
    translate(l, i, o) {
      if (
        (typeof i != "object" &&
          this.options.overloadTranslationOptionHandler &&
          (i = this.options.overloadTranslationOptionHandler(arguments)),
        typeof i == "object" && (i = { ...i }),
        i || (i = {}),
        l == null)
      )
        return "";
      Array.isArray(l) || (l = [String(l)]);
      const u =
          i.returnDetails !== void 0
            ? i.returnDetails
            : this.options.returnDetails,
        f =
          i.keySeparator !== void 0
            ? i.keySeparator
            : this.options.keySeparator,
        { key: d, namespaces: g } = this.extractFromKey(l[l.length - 1], i),
        m = g[g.length - 1],
        p = i.lng || this.language,
        b = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (p && p.toLowerCase() === "cimode") {
        if (b) {
          const J = i.nsSeparator || this.options.nsSeparator;
          return u
            ? {
                res: `${m}${J}${d}`,
                usedKey: d,
                exactUsedKey: d,
                usedLng: p,
                usedNS: m,
                usedParams: this.getUsedParamsDetails(i),
              }
            : `${m}${J}${d}`;
        }
        return u
          ? {
              res: d,
              usedKey: d,
              exactUsedKey: d,
              usedLng: p,
              usedNS: m,
              usedParams: this.getUsedParamsDetails(i),
            }
          : d;
      }
      const w = this.resolve(l, i);
      let v = w && w.res;
      const C = (w && w.usedKey) || d,
        A = (w && w.exactUsedKey) || d,
        _ = Object.prototype.toString.apply(v),
        B = ["[object Number]", "[object Function]", "[object RegExp]"],
        M = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays,
        Q = !this.i18nFormat || this.i18nFormat.handleAsObject,
        P = !xe(v) && typeof v != "boolean" && typeof v != "number";
      if (Q && v && P && B.indexOf(_) < 0 && !(xe(M) && Array.isArray(v))) {
        if (!i.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler ||
            this.logger.warn(
              "accessing an object - but returnObjects options is not enabled!"
            );
          const J = this.options.returnedObjectHandler
            ? this.options.returnedObjectHandler(C, v, { ...i, ns: g })
            : `key '${d} (${this.language})' returned an object instead of string.`;
          return u
            ? ((w.res = J), (w.usedParams = this.getUsedParamsDetails(i)), w)
            : J;
        }
        if (f) {
          const J = Array.isArray(v),
            $ = J ? [] : {},
            W = J ? A : C;
          for (const ae in v)
            if (Object.prototype.hasOwnProperty.call(v, ae)) {
              const I = `${W}${f}${ae}`;
              ($[ae] = this.translate(I, { ...i, joinArrays: !1, ns: g })),
                $[ae] === I && ($[ae] = v[ae]);
            }
          v = $;
        }
      } else if (Q && xe(M) && Array.isArray(v))
        (v = v.join(M)), v && (v = this.extendTranslation(v, l, i, o));
      else {
        let J = !1,
          $ = !1;
        const W = i.count !== void 0 && !xe(i.count),
          ae = li.hasDefaultValue(i),
          I = W ? this.pluralResolver.getSuffix(p, i.count, i) : "",
          de =
            i.ordinal && W
              ? this.pluralResolver.getSuffix(p, i.count, { ordinal: !1 })
              : "",
          Ee =
            W &&
            !i.ordinal &&
            i.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          Re =
            (Ee && i[`defaultValue${this.options.pluralSeparator}zero`]) ||
            i[`defaultValue${I}`] ||
            i[`defaultValue${de}`] ||
            i.defaultValue;
        !this.isValidLookup(v) && ae && ((J = !0), (v = Re)),
          this.isValidLookup(v) || (($ = !0), (v = d));
        const Se =
            (i.missingKeyNoValueFallbackToKey ||
              this.options.missingKeyNoValueFallbackToKey) &&
            $
              ? void 0
              : v,
          Te = ae && Re !== v && this.options.updateMissing;
        if ($ || J || Te) {
          if (
            (this.logger.log(
              Te ? "updateKey" : "missingKey",
              p,
              m,
              d,
              Te ? Re : v
            ),
            f)
          ) {
            const Y = this.resolve(d, { ...i, keySeparator: !1 });
            Y &&
              Y.res &&
              this.logger.warn(
                "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
              );
          }
          let me = [];
          const N = this.languageUtils.getFallbackCodes(
            this.options.fallbackLng,
            i.lng || this.language
          );
          if (this.options.saveMissingTo === "fallback" && N && N[0])
            for (let Y = 0; Y < N.length; Y++) me.push(N[Y]);
          else
            this.options.saveMissingTo === "all"
              ? (me = this.languageUtils.toResolveHierarchy(
                  i.lng || this.language
                ))
              : me.push(i.lng || this.language);
          const K = (Y, ge, S) => {
            const V = ae && S !== v ? S : Se;
            this.options.missingKeyHandler
              ? this.options.missingKeyHandler(Y, m, ge, V, Te, i)
              : this.backendConnector &&
                this.backendConnector.saveMissing &&
                this.backendConnector.saveMissing(Y, m, ge, V, Te, i),
              this.emit("missingKey", Y, m, ge, v);
          };
          this.options.saveMissing &&
            (this.options.saveMissingPlurals && W
              ? me.forEach((Y) => {
                  const ge = this.pluralResolver.getSuffixes(Y, i);
                  Ee &&
                    i[`defaultValue${this.options.pluralSeparator}zero`] &&
                    ge.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                    ge.push(`${this.options.pluralSeparator}zero`),
                    ge.forEach((S) => {
                      K([Y], d + S, i[`defaultValue${S}`] || Re);
                    });
                })
              : K(me, d, Re));
        }
        (v = this.extendTranslation(v, l, i, w, o)),
          $ &&
            v === d &&
            this.options.appendNamespaceToMissingKey &&
            (v = `${m}:${d}`),
          ($ || J) &&
            this.options.parseMissingKeyHandler &&
            (this.options.compatibilityAPI !== "v1"
              ? (v = this.options.parseMissingKeyHandler(
                  this.options.appendNamespaceToMissingKey ? `${m}:${d}` : d,
                  J ? v : void 0
                ))
              : (v = this.options.parseMissingKeyHandler(v)));
      }
      return u
        ? ((w.res = v), (w.usedParams = this.getUsedParamsDetails(i)), w)
        : v;
    }
    extendTranslation(l, i, o, u, f) {
      var d = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        l = this.i18nFormat.parse(
          l,
          { ...this.options.interpolation.defaultVariables, ...o },
          o.lng || this.language || u.usedLng,
          u.usedNS,
          u.usedKey,
          { resolved: u }
        );
      else if (!o.skipInterpolation) {
        o.interpolation &&
          this.interpolator.init({
            ...o,
            interpolation: {
              ...this.options.interpolation,
              ...o.interpolation,
            },
          });
        const p =
          xe(l) &&
          (o && o.interpolation && o.interpolation.skipOnVariables !== void 0
            ? o.interpolation.skipOnVariables
            : this.options.interpolation.skipOnVariables);
        let b;
        if (p) {
          const v = l.match(this.interpolator.nestingRegexp);
          b = v && v.length;
        }
        let w = o.replace && !xe(o.replace) ? o.replace : o;
        if (
          (this.options.interpolation.defaultVariables &&
            (w = { ...this.options.interpolation.defaultVariables, ...w }),
          (l = this.interpolator.interpolate(
            l,
            w,
            o.lng || this.language || u.usedLng,
            o
          )),
          p)
        ) {
          const v = l.match(this.interpolator.nestingRegexp),
            C = v && v.length;
          b < C && (o.nest = !1);
        }
        !o.lng &&
          this.options.compatibilityAPI !== "v1" &&
          u &&
          u.res &&
          (o.lng = this.language || u.usedLng),
          o.nest !== !1 &&
            (l = this.interpolator.nest(
              l,
              function () {
                for (
                  var v = arguments.length, C = new Array(v), A = 0;
                  A < v;
                  A++
                )
                  C[A] = arguments[A];
                return f && f[0] === C[0] && !o.context
                  ? (d.logger.warn(
                      `It seems you are nesting recursively key: ${C[0]} in key: ${i[0]}`
                    ),
                    null)
                  : d.translate(...C, i);
              },
              o
            )),
          o.interpolation && this.interpolator.reset();
      }
      const g = o.postProcess || this.options.postProcess,
        m = xe(g) ? [g] : g;
      return (
        l != null &&
          m &&
          m.length &&
          o.applyPostProcessor !== !1 &&
          (l = Cf.handle(
            m,
            l,
            i,
            this.options && this.options.postProcessPassResolved
              ? {
                  i18nResolved: {
                    ...u,
                    usedParams: this.getUsedParamsDetails(o),
                  },
                  ...o,
                }
              : o,
            this
          )),
        l
      );
    }
    resolve(l) {
      let i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        o,
        u,
        f,
        d,
        g;
      return (
        xe(l) && (l = [l]),
        l.forEach((m) => {
          if (this.isValidLookup(o)) return;
          const p = this.extractFromKey(m, i),
            b = p.key;
          u = b;
          let w = p.namespaces;
          this.options.fallbackNS && (w = w.concat(this.options.fallbackNS));
          const v = i.count !== void 0 && !xe(i.count),
            C =
              v &&
              !i.ordinal &&
              i.count === 0 &&
              this.pluralResolver.shouldUseIntlApi(),
            A =
              i.context !== void 0 &&
              (xe(i.context) || typeof i.context == "number") &&
              i.context !== "",
            _ = i.lngs
              ? i.lngs
              : this.languageUtils.toResolveHierarchy(
                  i.lng || this.language,
                  i.fallbackLng
                );
          w.forEach((B) => {
            this.isValidLookup(o) ||
              ((g = B),
              !Of[`${_[0]}-${B}`] &&
                this.utils &&
                this.utils.hasLoadedNamespace &&
                !this.utils.hasLoadedNamespace(g) &&
                ((Of[`${_[0]}-${B}`] = !0),
                this.logger.warn(
                  `key "${u}" for languages "${_.join(
                    ", "
                  )}" won't get resolved as namespace "${g}" was not yet loaded`,
                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                )),
              _.forEach((M) => {
                if (this.isValidLookup(o)) return;
                d = M;
                const Q = [b];
                if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                  this.i18nFormat.addLookupKeys(Q, b, M, B, i);
                else {
                  let J;
                  v && (J = this.pluralResolver.getSuffix(M, i.count, i));
                  const $ = `${this.options.pluralSeparator}zero`,
                    W = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                  if (
                    (v &&
                      (Q.push(b + J),
                      i.ordinal &&
                        J.indexOf(W) === 0 &&
                        Q.push(b + J.replace(W, this.options.pluralSeparator)),
                      C && Q.push(b + $)),
                    A)
                  ) {
                    const ae = `${b}${this.options.contextSeparator}${i.context}`;
                    Q.push(ae),
                      v &&
                        (Q.push(ae + J),
                        i.ordinal &&
                          J.indexOf(W) === 0 &&
                          Q.push(
                            ae + J.replace(W, this.options.pluralSeparator)
                          ),
                        C && Q.push(ae + $));
                  }
                }
                let P;
                for (; (P = Q.pop()); )
                  this.isValidLookup(o) ||
                    ((f = P), (o = this.getResource(M, B, P, i)));
              }));
          });
        }),
        { res: o, usedKey: u, exactUsedKey: f, usedLng: d, usedNS: g }
      );
    }
    isValidLookup(l) {
      return (
        l !== void 0 &&
        !(!this.options.returnNull && l === null) &&
        !(!this.options.returnEmptyString && l === "")
      );
    }
    getResource(l, i, o) {
      let u =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource
        ? this.i18nFormat.getResource(l, i, o, u)
        : this.resourceStore.getResource(l, i, o, u);
    }
    getUsedParamsDetails() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const i = [
          "defaultValue",
          "ordinal",
          "context",
          "replace",
          "lng",
          "lngs",
          "fallbackLng",
          "ns",
          "keySeparator",
          "nsSeparator",
          "returnObjects",
          "returnDetails",
          "joinArrays",
          "postProcess",
          "interpolation",
        ],
        o = l.replace && !xe(l.replace);
      let u = o ? l.replace : l;
      if (
        (o && typeof l.count < "u" && (u.count = l.count),
        this.options.interpolation.defaultVariables &&
          (u = { ...this.options.interpolation.defaultVariables, ...u }),
        !o)
      ) {
        u = { ...u };
        for (const f of i) delete u[f];
      }
      return u;
    }
    static hasDefaultValue(l) {
      const i = "defaultValue";
      for (const o in l)
        if (
          Object.prototype.hasOwnProperty.call(l, o) &&
          i === o.substring(0, i.length) &&
          l[o] !== void 0
        )
          return !0;
      return !1;
    }
  }
  const fs = (n) => n.charAt(0).toUpperCase() + n.slice(1);
  class Rf {
    constructor(l) {
      (this.options = l),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = ua.create("languageUtils"));
    }
    getScriptPartFromCode(l) {
      if (((l = ai(l)), !l || l.indexOf("-") < 0)) return null;
      const i = l.split("-");
      return i.length === 2 || (i.pop(), i[i.length - 1].toLowerCase() === "x")
        ? null
        : this.formatLanguageCode(i.join("-"));
    }
    getLanguagePartFromCode(l) {
      if (((l = ai(l)), !l || l.indexOf("-") < 0)) return l;
      const i = l.split("-");
      return this.formatLanguageCode(i[0]);
    }
    formatLanguageCode(l) {
      if (xe(l) && l.indexOf("-") > -1) {
        if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
          try {
            let u = Intl.getCanonicalLocales(l)[0];
            if ((u && this.options.lowerCaseLng && (u = u.toLowerCase()), u))
              return u;
          } catch {}
        const i = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        let o = l.split("-");
        return (
          this.options.lowerCaseLng
            ? (o = o.map((u) => u.toLowerCase()))
            : o.length === 2
            ? ((o[0] = o[0].toLowerCase()),
              (o[1] = o[1].toUpperCase()),
              i.indexOf(o[1].toLowerCase()) > -1 &&
                (o[1] = fs(o[1].toLowerCase())))
            : o.length === 3 &&
              ((o[0] = o[0].toLowerCase()),
              o[1].length === 2 && (o[1] = o[1].toUpperCase()),
              o[0] !== "sgn" &&
                o[2].length === 2 &&
                (o[2] = o[2].toUpperCase()),
              i.indexOf(o[1].toLowerCase()) > -1 &&
                (o[1] = fs(o[1].toLowerCase())),
              i.indexOf(o[2].toLowerCase()) > -1 &&
                (o[2] = fs(o[2].toLowerCase()))),
          o.join("-")
        );
      }
      return this.options.cleanCode || this.options.lowerCaseLng
        ? l.toLowerCase()
        : l;
    }
    isSupportedCode(l) {
      return (
        (this.options.load === "languageOnly" ||
          this.options.nonExplicitSupportedLngs) &&
          (l = this.getLanguagePartFromCode(l)),
        !this.supportedLngs ||
          !this.supportedLngs.length ||
          this.supportedLngs.indexOf(l) > -1
      );
    }
    getBestMatchFromCodes(l) {
      if (!l) return null;
      let i;
      return (
        l.forEach((o) => {
          if (i) return;
          const u = this.formatLanguageCode(o);
          (!this.options.supportedLngs || this.isSupportedCode(u)) && (i = u);
        }),
        !i &&
          this.options.supportedLngs &&
          l.forEach((o) => {
            if (i) return;
            const u = this.getLanguagePartFromCode(o);
            if (this.isSupportedCode(u)) return (i = u);
            i = this.options.supportedLngs.find((f) => {
              if (f === u) return f;
              if (
                !(f.indexOf("-") < 0 && u.indexOf("-") < 0) &&
                ((f.indexOf("-") > 0 &&
                  u.indexOf("-") < 0 &&
                  f.substring(0, f.indexOf("-")) === u) ||
                  (f.indexOf(u) === 0 && u.length > 1))
              )
                return f;
            });
          }),
        i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]),
        i
      );
    }
    getFallbackCodes(l, i) {
      if (!l) return [];
      if (
        (typeof l == "function" && (l = l(i)),
        xe(l) && (l = [l]),
        Array.isArray(l))
      )
        return l;
      if (!i) return l.default || [];
      let o = l[i];
      return (
        o || (o = l[this.getScriptPartFromCode(i)]),
        o || (o = l[this.formatLanguageCode(i)]),
        o || (o = l[this.getLanguagePartFromCode(i)]),
        o || (o = l.default),
        o || []
      );
    }
    toResolveHierarchy(l, i) {
      const o = this.getFallbackCodes(i || this.options.fallbackLng || [], l),
        u = [],
        f = (d) => {
          d &&
            (this.isSupportedCode(d)
              ? u.push(d)
              : this.logger.warn(
                  `rejecting language code not found in supportedLngs: ${d}`
                ));
        };
      return (
        xe(l) && (l.indexOf("-") > -1 || l.indexOf("_") > -1)
          ? (this.options.load !== "languageOnly" &&
              f(this.formatLanguageCode(l)),
            this.options.load !== "languageOnly" &&
              this.options.load !== "currentOnly" &&
              f(this.getScriptPartFromCode(l)),
            this.options.load !== "currentOnly" &&
              f(this.getLanguagePartFromCode(l)))
          : xe(l) && f(this.formatLanguageCode(l)),
        o.forEach((d) => {
          u.indexOf(d) < 0 && f(this.formatLanguageCode(d));
        }),
        u
      );
    }
  }
  let Q0 = [
      {
        lngs: [
          "ach",
          "ak",
          "am",
          "arn",
          "br",
          "fil",
          "gun",
          "ln",
          "mfe",
          "mg",
          "mi",
          "oc",
          "pt",
          "pt-BR",
          "tg",
          "tl",
          "ti",
          "tr",
          "uz",
          "wa",
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          "af",
          "an",
          "ast",
          "az",
          "bg",
          "bn",
          "ca",
          "da",
          "de",
          "dev",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fi",
          "fo",
          "fur",
          "fy",
          "gl",
          "gu",
          "ha",
          "hi",
          "hu",
          "hy",
          "ia",
          "it",
          "kk",
          "kn",
          "ku",
          "lb",
          "mai",
          "ml",
          "mn",
          "mr",
          "nah",
          "nap",
          "nb",
          "ne",
          "nl",
          "nn",
          "no",
          "nso",
          "pa",
          "pap",
          "pms",
          "ps",
          "pt-PT",
          "rm",
          "sco",
          "se",
          "si",
          "so",
          "son",
          "sq",
          "sv",
          "sw",
          "ta",
          "te",
          "tk",
          "ur",
          "yo",
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          "ay",
          "bo",
          "cgg",
          "fa",
          "ht",
          "id",
          "ja",
          "jbo",
          "ka",
          "km",
          "ko",
          "ky",
          "lo",
          "ms",
          "sah",
          "su",
          "th",
          "tt",
          "ug",
          "vi",
          "wo",
          "zh",
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
      { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
      { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ["fr"], nr: [1, 2], fc: 9 },
      { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ["is"], nr: [1, 2], fc: 12 },
      { lngs: ["jv"], nr: [0, 1], fc: 13 },
      { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
      { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
      { lngs: ["mk"], nr: [1, 2], fc: 17 },
      { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
      { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ["or"], nr: [2, 1], fc: 2 },
      { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
      { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
    ],
    K0 = {
      1: (n) => +(n > 1),
      2: (n) => +(n != 1),
      3: (n) => 0,
      4: (n) =>
        n % 10 == 1 && n % 100 != 11
          ? 0
          : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2,
      5: (n) =>
        n == 0
          ? 0
          : n == 1
          ? 1
          : n == 2
          ? 2
          : n % 100 >= 3 && n % 100 <= 10
          ? 3
          : n % 100 >= 11
          ? 4
          : 5,
      6: (n) => (n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
      7: (n) =>
        n == 1
          ? 0
          : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2,
      8: (n) => (n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3),
      9: (n) => +(n >= 2),
      10: (n) => (n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4),
      11: (n) =>
        n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3,
      12: (n) => +(n % 10 != 1 || n % 100 == 11),
      13: (n) => +(n !== 0),
      14: (n) => (n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3),
      15: (n) =>
        n % 10 == 1 && n % 100 != 11
          ? 0
          : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2,
      16: (n) => (n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2),
      17: (n) => (n == 1 || (n % 10 == 1 && n % 100 != 11) ? 0 : 1),
      18: (n) => (n == 0 ? 0 : n == 1 ? 1 : 2),
      19: (n) =>
        n == 1
          ? 0
          : n == 0 || (n % 100 > 1 && n % 100 < 11)
          ? 1
          : n % 100 > 10 && n % 100 < 20
          ? 2
          : 3,
      20: (n) => (n == 1 ? 0 : n == 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2),
      21: (n) =>
        n % 100 == 1
          ? 1
          : n % 100 == 2
          ? 2
          : n % 100 == 3 || n % 100 == 4
          ? 3
          : 0,
      22: (n) =>
        n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3,
    };
  const Z0 = ["v1", "v2", "v3"],
    $0 = ["v4"],
    Nf = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
    F0 = () => {
      const n = {};
      return (
        Q0.forEach((l) => {
          l.lngs.forEach((i) => {
            n[i] = { numbers: l.nr, plurals: K0[l.fc] };
          });
        }),
        n
      );
    };
  class J0 {
    constructor(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (this.languageUtils = l),
        (this.options = i),
        (this.logger = ua.create("pluralResolver")),
        (!this.options.compatibilityJSON ||
          $0.includes(this.options.compatibilityJSON)) &&
          (typeof Intl > "u" || !Intl.PluralRules) &&
          ((this.options.compatibilityJSON = "v3"),
          this.logger.error(
            "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
          )),
        (this.rules = F0()),
        (this.pluralRulesCache = {});
    }
    addRule(l, i) {
      this.rules[l] = i;
    }
    clearCache() {
      this.pluralRulesCache = {};
    }
    getRule(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        const o = ai(l === "dev" ? "en" : l),
          u = i.ordinal ? "ordinal" : "cardinal",
          f = JSON.stringify({ cleanedCode: o, type: u });
        if (f in this.pluralRulesCache) return this.pluralRulesCache[f];
        let d;
        try {
          d = new Intl.PluralRules(o, { type: u });
        } catch {
          if (!l.match(/-|_/)) return;
          const m = this.languageUtils.getLanguagePartFromCode(l);
          d = this.getRule(m, i);
        }
        return (this.pluralRulesCache[f] = d), d;
      }
      return (
        this.rules[l] ||
        this.rules[this.languageUtils.getLanguagePartFromCode(l)]
      );
    }
    needsPlural(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const o = this.getRule(l, i);
      return this.shouldUseIntlApi()
        ? o && o.resolvedOptions().pluralCategories.length > 1
        : o && o.numbers.length > 1;
    }
    getPluralFormsOfKey(l, i) {
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(l, o).map((u) => `${i}${u}`);
    }
    getSuffixes(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const o = this.getRule(l, i);
      return o
        ? this.shouldUseIntlApi()
          ? o
              .resolvedOptions()
              .pluralCategories.sort((u, f) => Nf[u] - Nf[f])
              .map(
                (u) =>
                  `${this.options.prepend}${
                    i.ordinal ? `ordinal${this.options.prepend}` : ""
                  }${u}`
              )
          : o.numbers.map((u) => this.getSuffix(l, u, i))
        : [];
    }
    getSuffix(l, i) {
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const u = this.getRule(l, o);
      return u
        ? this.shouldUseIntlApi()
          ? `${this.options.prepend}${
              o.ordinal ? `ordinal${this.options.prepend}` : ""
            }${u.select(i)}`
          : this.getSuffixRetroCompatible(u, i)
        : (this.logger.warn(`no plural rule found for: ${l}`), "");
    }
    getSuffixRetroCompatible(l, i) {
      const o = l.noAbs ? l.plurals(i) : l.plurals(Math.abs(i));
      let u = l.numbers[o];
      this.options.simplifyPluralSuffix &&
        l.numbers.length === 2 &&
        l.numbers[0] === 1 &&
        (u === 2 ? (u = "plural") : u === 1 && (u = ""));
      const f = () =>
        this.options.prepend && u.toString()
          ? this.options.prepend + u.toString()
          : u.toString();
      return this.options.compatibilityJSON === "v1"
        ? u === 1
          ? ""
          : typeof u == "number"
          ? `_plural_${u.toString()}`
          : f()
        : this.options.compatibilityJSON === "v2" ||
          (this.options.simplifyPluralSuffix &&
            l.numbers.length === 2 &&
            l.numbers[0] === 1)
        ? f()
        : this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString();
    }
    shouldUseIntlApi() {
      return !Z0.includes(this.options.compatibilityJSON);
    }
  }
  const zf = function (n, l, i) {
      let o =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
        u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        f = H0(n, l, i);
      return (
        !f &&
          u &&
          xe(i) &&
          ((f = cs(n, i, o)), f === void 0 && (f = cs(l, i, o))),
        f
      );
    },
    ds = (n) => n.replace(/\$/g, "$$$$");
  class I0 {
    constructor() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (this.logger = ua.create("interpolator")),
        (this.options = l),
        (this.format =
          (l.interpolation && l.interpolation.format) || ((i) => i)),
        this.init(l);
    }
    init() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      l.interpolation || (l.interpolation = { escapeValue: !0 });
      const {
        escape: i,
        escapeValue: o,
        useRawValueToEscape: u,
        prefix: f,
        prefixEscaped: d,
        suffix: g,
        suffixEscaped: m,
        formatSeparator: p,
        unescapeSuffix: b,
        unescapePrefix: w,
        nestingPrefix: v,
        nestingPrefixEscaped: C,
        nestingSuffix: A,
        nestingSuffixEscaped: _,
        nestingOptionsSeparator: B,
        maxReplaces: M,
        alwaysFormat: Q,
      } = l.interpolation;
      (this.escape = i !== void 0 ? i : V0),
        (this.escapeValue = o !== void 0 ? o : !0),
        (this.useRawValueToEscape = u !== void 0 ? u : !1),
        (this.prefix = f ? Yn(f) : d || "{{"),
        (this.suffix = g ? Yn(g) : m || "}}"),
        (this.formatSeparator = p || ","),
        (this.unescapePrefix = b ? "" : w || "-"),
        (this.unescapeSuffix = this.unescapePrefix ? "" : b || ""),
        (this.nestingPrefix = v ? Yn(v) : C || Yn("$t(")),
        (this.nestingSuffix = A ? Yn(A) : _ || Yn(")")),
        (this.nestingOptionsSeparator = B || ","),
        (this.maxReplaces = M || 1e3),
        (this.alwaysFormat = Q !== void 0 ? Q : !1),
        this.resetRegExp();
    }
    reset() {
      this.options && this.init(this.options);
    }
    resetRegExp() {
      const l = (i, o) =>
        i && i.source === o ? ((i.lastIndex = 0), i) : new RegExp(o, "g");
      (this.regexp = l(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
        (this.regexpUnescape = l(
          this.regexpUnescape,
          `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
        )),
        (this.nestingRegexp = l(
          this.nestingRegexp,
          `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
        ));
    }
    interpolate(l, i, o, u) {
      let f, d, g;
      const m =
          (this.options &&
            this.options.interpolation &&
            this.options.interpolation.defaultVariables) ||
          {},
        p = (C) => {
          if (C.indexOf(this.formatSeparator) < 0) {
            const M = zf(
              i,
              m,
              C,
              this.options.keySeparator,
              this.options.ignoreJSONStructure
            );
            return this.alwaysFormat
              ? this.format(M, void 0, o, { ...u, ...i, interpolationkey: C })
              : M;
          }
          const A = C.split(this.formatSeparator),
            _ = A.shift().trim(),
            B = A.join(this.formatSeparator).trim();
          return this.format(
            zf(
              i,
              m,
              _,
              this.options.keySeparator,
              this.options.ignoreJSONStructure
            ),
            B,
            o,
            { ...u, ...i, interpolationkey: _ }
          );
        };
      this.resetRegExp();
      const b =
          (u && u.missingInterpolationHandler) ||
          this.options.missingInterpolationHandler,
        w =
          u && u.interpolation && u.interpolation.skipOnVariables !== void 0
            ? u.interpolation.skipOnVariables
            : this.options.interpolation.skipOnVariables;
      return (
        [
          { regex: this.regexpUnescape, safeValue: (C) => ds(C) },
          {
            regex: this.regexp,
            safeValue: (C) => (this.escapeValue ? ds(this.escape(C)) : ds(C)),
          },
        ].forEach((C) => {
          for (g = 0; (f = C.regex.exec(l)); ) {
            const A = f[1].trim();
            if (((d = p(A)), d === void 0))
              if (typeof b == "function") {
                const B = b(l, f, u);
                d = xe(B) ? B : "";
              } else if (u && Object.prototype.hasOwnProperty.call(u, A))
                d = "";
              else if (w) {
                d = f[0];
                continue;
              } else
                this.logger.warn(
                  `missed to pass in variable ${A} for interpolating ${l}`
                ),
                  (d = "");
            else !xe(d) && !this.useRawValueToEscape && (d = xf(d));
            const _ = C.safeValue(d);
            if (
              ((l = l.replace(f[0], _)),
              w
                ? ((C.regex.lastIndex += d.length),
                  (C.regex.lastIndex -= f[0].length))
                : (C.regex.lastIndex = 0),
              g++,
              g >= this.maxReplaces)
            )
              break;
          }
        }),
        l
      );
    }
    nest(l, i) {
      let o =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        u,
        f,
        d;
      const g = (m, p) => {
        const b = this.nestingOptionsSeparator;
        if (m.indexOf(b) < 0) return m;
        const w = m.split(new RegExp(`${b}[ ]*{`));
        let v = `{${w[1]}`;
        (m = w[0]), (v = this.interpolate(v, d));
        const C = v.match(/'/g),
          A = v.match(/"/g);
        ((C && C.length % 2 === 0 && !A) || A.length % 2 !== 0) &&
          (v = v.replace(/'/g, '"'));
        try {
          (d = JSON.parse(v)), p && (d = { ...p, ...d });
        } catch (_) {
          return (
            this.logger.warn(
              `failed parsing options string in nesting for key ${m}`,
              _
            ),
            `${m}${b}${v}`
          );
        }
        return (
          d.defaultValue &&
            d.defaultValue.indexOf(this.prefix) > -1 &&
            delete d.defaultValue,
          m
        );
      };
      for (; (u = this.nestingRegexp.exec(l)); ) {
        let m = [];
        (d = { ...o }),
          (d = d.replace && !xe(d.replace) ? d.replace : d),
          (d.applyPostProcessor = !1),
          delete d.defaultValue;
        let p = !1;
        if (u[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(u[1])) {
          const b = u[1].split(this.formatSeparator).map((w) => w.trim());
          (u[1] = b.shift()), (m = b), (p = !0);
        }
        if (
          ((f = i(g.call(this, u[1].trim(), d), d)), f && u[0] === l && !xe(f))
        )
          return f;
        xe(f) || (f = xf(f)),
          f ||
            (this.logger.warn(`missed to resolve ${u[1]} for nesting ${l}`),
            (f = "")),
          p &&
            (f = m.reduce(
              (b, w) =>
                this.format(b, w, o.lng, {
                  ...o,
                  interpolationkey: u[1].trim(),
                }),
              f.trim()
            )),
          (l = l.replace(u[0], f)),
          (this.regexp.lastIndex = 0);
      }
      return l;
    }
  }
  const P0 = (n) => {
      let l = n.toLowerCase().trim();
      const i = {};
      if (n.indexOf("(") > -1) {
        const o = n.split("(");
        l = o[0].toLowerCase().trim();
        const u = o[1].substring(0, o[1].length - 1);
        l === "currency" && u.indexOf(":") < 0
          ? i.currency || (i.currency = u.trim())
          : l === "relativetime" && u.indexOf(":") < 0
          ? i.range || (i.range = u.trim())
          : u.split(";").forEach((d) => {
              if (d) {
                const [g, ...m] = d.split(":"),
                  p = m
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  b = g.trim();
                i[b] || (i[b] = p),
                  p === "false" && (i[b] = !1),
                  p === "true" && (i[b] = !0),
                  isNaN(p) || (i[b] = parseInt(p, 10));
              }
            });
      }
      return { formatName: l, formatOptions: i };
    },
    Gn = (n) => {
      const l = {};
      return (i, o, u) => {
        let f = u;
        u &&
          u.interpolationkey &&
          u.formatParams &&
          u.formatParams[u.interpolationkey] &&
          u[u.interpolationkey] &&
          (f = { ...f, [u.interpolationkey]: void 0 });
        const d = o + JSON.stringify(f);
        let g = l[d];
        return g || ((g = n(ai(o), u)), (l[d] = g)), g(i);
      };
    };
  class W0 {
    constructor() {
      let l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (this.logger = ua.create("formatter")),
        (this.options = l),
        (this.formats = {
          number: Gn((i, o) => {
            const u = new Intl.NumberFormat(i, { ...o });
            return (f) => u.format(f);
          }),
          currency: Gn((i, o) => {
            const u = new Intl.NumberFormat(i, { ...o, style: "currency" });
            return (f) => u.format(f);
          }),
          datetime: Gn((i, o) => {
            const u = new Intl.DateTimeFormat(i, { ...o });
            return (f) => u.format(f);
          }),
          relativetime: Gn((i, o) => {
            const u = new Intl.RelativeTimeFormat(i, { ...o });
            return (f) => u.format(f, o.range || "day");
          }),
          list: Gn((i, o) => {
            const u = new Intl.ListFormat(i, { ...o });
            return (f) => u.format(f);
          }),
        }),
        this.init(l);
    }
    init(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : { interpolation: {} };
      this.formatSeparator = i.interpolation.formatSeparator || ",";
    }
    add(l, i) {
      this.formats[l.toLowerCase().trim()] = i;
    }
    addCached(l, i) {
      this.formats[l.toLowerCase().trim()] = Gn(i);
    }
    format(l, i, o) {
      let u =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const f = i.split(this.formatSeparator);
      if (
        f.length > 1 &&
        f[0].indexOf("(") > 1 &&
        f[0].indexOf(")") < 0 &&
        f.find((g) => g.indexOf(")") > -1)
      ) {
        const g = f.findIndex((m) => m.indexOf(")") > -1);
        f[0] = [f[0], ...f.splice(1, g)].join(this.formatSeparator);
      }
      return f.reduce((g, m) => {
        const { formatName: p, formatOptions: b } = P0(m);
        if (this.formats[p]) {
          let w = g;
          try {
            const v =
                (u && u.formatParams && u.formatParams[u.interpolationkey]) ||
                {},
              C = v.locale || v.lng || u.locale || u.lng || o;
            w = this.formats[p](g, C, { ...b, ...u, ...v });
          } catch (v) {
            this.logger.warn(v);
          }
          return w;
        } else this.logger.warn(`there was no format function for ${p}`);
        return g;
      }, l);
    }
  }
  const eb = (n, l) => {
    n.pending[l] !== void 0 && (delete n.pending[l], n.pendingCount--);
  };
  class tb extends ri {
    constructor(l, i, o) {
      let u =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      super(),
        (this.backend = l),
        (this.store = i),
        (this.services = o),
        (this.languageUtils = o.languageUtils),
        (this.options = u),
        (this.logger = ua.create("backendConnector")),
        (this.waitingReads = []),
        (this.maxParallelReads = u.maxParallelReads || 10),
        (this.readingCalls = 0),
        (this.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5),
        (this.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350),
        (this.state = {}),
        (this.queue = []),
        this.backend && this.backend.init && this.backend.init(o, u.backend, u);
    }
    queueLoad(l, i, o, u) {
      const f = {},
        d = {},
        g = {},
        m = {};
      return (
        l.forEach((p) => {
          let b = !0;
          i.forEach((w) => {
            const v = `${p}|${w}`;
            !o.reload && this.store.hasResourceBundle(p, w)
              ? (this.state[v] = 2)
              : this.state[v] < 0 ||
                (this.state[v] === 1
                  ? d[v] === void 0 && (d[v] = !0)
                  : ((this.state[v] = 1),
                    (b = !1),
                    d[v] === void 0 && (d[v] = !0),
                    f[v] === void 0 && (f[v] = !0),
                    m[w] === void 0 && (m[w] = !0)));
          }),
            b || (g[p] = !0);
        }),
        (Object.keys(f).length || Object.keys(d).length) &&
          this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: u,
          }),
        {
          toLoad: Object.keys(f),
          pending: Object.keys(d),
          toLoadLanguages: Object.keys(g),
          toLoadNamespaces: Object.keys(m),
        }
      );
    }
    loaded(l, i, o) {
      const u = l.split("|"),
        f = u[0],
        d = u[1];
      i && this.emit("failedLoading", f, d, i),
        !i &&
          o &&
          this.store.addResourceBundle(f, d, o, void 0, void 0, {
            skipCopy: !0,
          }),
        (this.state[l] = i ? -1 : 2),
        i && o && (this.state[l] = 0);
      const g = {};
      this.queue.forEach((m) => {
        U0(m.loaded, [f], d),
          eb(m, l),
          i && m.errors.push(i),
          m.pendingCount === 0 &&
            !m.done &&
            (Object.keys(m.loaded).forEach((p) => {
              g[p] || (g[p] = {});
              const b = m.loaded[p];
              b.length &&
                b.forEach((w) => {
                  g[p][w] === void 0 && (g[p][w] = !0);
                });
            }),
            (m.done = !0),
            m.errors.length ? m.callback(m.errors) : m.callback());
      }),
        this.emit("loaded", g),
        (this.queue = this.queue.filter((m) => !m.done));
    }
    read(l, i, o) {
      let u =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
        f =
          arguments.length > 4 && arguments[4] !== void 0
            ? arguments[4]
            : this.retryTimeout,
        d = arguments.length > 5 ? arguments[5] : void 0;
      if (!l.length) return d(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: l,
          ns: i,
          fcName: o,
          tried: u,
          wait: f,
          callback: d,
        });
        return;
      }
      this.readingCalls++;
      const g = (p, b) => {
          if ((this.readingCalls--, this.waitingReads.length > 0)) {
            const w = this.waitingReads.shift();
            this.read(w.lng, w.ns, w.fcName, w.tried, w.wait, w.callback);
          }
          if (p && b && u < this.maxRetries) {
            setTimeout(() => {
              this.read.call(this, l, i, o, u + 1, f * 2, d);
            }, f);
            return;
          }
          d(p, b);
        },
        m = this.backend[o].bind(this.backend);
      if (m.length === 2) {
        try {
          const p = m(l, i);
          p && typeof p.then == "function"
            ? p.then((b) => g(null, b)).catch(g)
            : g(null, p);
        } catch (p) {
          g(p);
        }
        return;
      }
      return m(l, i, g);
    }
    prepareLoading(l, i) {
      let o =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return (
          this.logger.warn(
            "No backend was added via i18next.use. Will not load resources."
          ),
          u && u()
        );
      xe(l) && (l = this.languageUtils.toResolveHierarchy(l)),
        xe(i) && (i = [i]);
      const f = this.queueLoad(l, i, o, u);
      if (!f.toLoad.length) return f.pending.length || u(), null;
      f.toLoad.forEach((d) => {
        this.loadOne(d);
      });
    }
    load(l, i, o) {
      this.prepareLoading(l, i, {}, o);
    }
    reload(l, i, o) {
      this.prepareLoading(l, i, { reload: !0 }, o);
    }
    loadOne(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      const o = l.split("|"),
        u = o[0],
        f = o[1];
      this.read(u, f, "read", void 0, void 0, (d, g) => {
        d &&
          this.logger.warn(
            `${i}loading namespace ${f} for language ${u} failed`,
            d
          ),
          !d &&
            g &&
            this.logger.log(`${i}loaded namespace ${f} for language ${u}`, g),
          this.loaded(l, d, g);
      });
    }
    saveMissing(l, i, o, u, f) {
      let d =
          arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
        g =
          arguments.length > 6 && arguments[6] !== void 0
            ? arguments[6]
            : () => {};
      if (
        this.services.utils &&
        this.services.utils.hasLoadedNamespace &&
        !this.services.utils.hasLoadedNamespace(i)
      ) {
        this.logger.warn(
          `did not save key "${o}" as the namespace "${i}" was not yet loaded`,
          "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
        );
        return;
      }
      if (!(o == null || o === "")) {
        if (this.backend && this.backend.create) {
          const m = { ...d, isUpdate: f },
            p = this.backend.create.bind(this.backend);
          if (p.length < 6)
            try {
              let b;
              p.length === 5 ? (b = p(l, i, o, u, m)) : (b = p(l, i, o, u)),
                b && typeof b.then == "function"
                  ? b.then((w) => g(null, w)).catch(g)
                  : g(null, b);
            } catch (b) {
              g(b);
            }
          else p(l, i, o, u, g, m);
        }
        !l || !l[0] || this.store.addResource(l[0], i, o, u);
      }
    }
  }
  const Mf = () => ({
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !1,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: (n) => {
        let l = {};
        if (
          (typeof n[1] == "object" && (l = n[1]),
          xe(n[1]) && (l.defaultValue = n[1]),
          xe(n[2]) && (l.tDescription = n[2]),
          typeof n[2] == "object" || typeof n[3] == "object")
        ) {
          const i = n[3] || n[2];
          Object.keys(i).forEach((o) => {
            l[o] = i[o];
          });
        }
        return l;
      },
      interpolation: {
        escapeValue: !0,
        format: (n) => n,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0,
      },
    }),
    Df = (n) => (
      xe(n.ns) && (n.ns = [n.ns]),
      xe(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]),
      xe(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]),
      n.supportedLngs &&
        n.supportedLngs.indexOf("cimode") < 0 &&
        (n.supportedLngs = n.supportedLngs.concat(["cimode"])),
      n
    ),
    ii = () => {},
    ab = (n) => {
      Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((i) => {
        typeof n[i] == "function" && (n[i] = n[i].bind(n));
      });
    };
  class Yr extends ri {
    constructor() {
      let l =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        i = arguments.length > 1 ? arguments[1] : void 0;
      if (
        (super(),
        (this.options = Df(l)),
        (this.services = {}),
        (this.logger = ua),
        (this.modules = { external: [] }),
        ab(this),
        i && !this.isInitialized && !l.isClone)
      ) {
        if (!this.options.initImmediate) return this.init(l, i), this;
        setTimeout(() => {
          this.init(l, i);
        }, 0);
      }
    }
    init() {
      var l = this;
      let i =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        o = arguments.length > 1 ? arguments[1] : void 0;
      (this.isInitializing = !0),
        typeof i == "function" && ((o = i), (i = {})),
        !i.defaultNS &&
          i.defaultNS !== !1 &&
          i.ns &&
          (xe(i.ns)
            ? (i.defaultNS = i.ns)
            : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
      const u = Mf();
      (this.options = { ...u, ...this.options, ...Df(i) }),
        this.options.compatibilityAPI !== "v1" &&
          (this.options.interpolation = {
            ...u.interpolation,
            ...this.options.interpolation,
          }),
        i.keySeparator !== void 0 &&
          (this.options.userDefinedKeySeparator = i.keySeparator),
        i.nsSeparator !== void 0 &&
          (this.options.userDefinedNsSeparator = i.nsSeparator);
      const f = (b) => (b ? (typeof b == "function" ? new b() : b) : null);
      if (!this.options.isClone) {
        this.modules.logger
          ? ua.init(f(this.modules.logger), this.options)
          : ua.init(null, this.options);
        let b;
        this.modules.formatter
          ? (b = this.modules.formatter)
          : typeof Intl < "u" && (b = W0);
        const w = new Rf(this.options);
        this.store = new Tf(this.options.resources, this.options);
        const v = this.services;
        (v.logger = ua),
          (v.resourceStore = this.store),
          (v.languageUtils = w),
          (v.pluralResolver = new J0(w, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix,
          })),
          b &&
            (!this.options.interpolation.format ||
              this.options.interpolation.format === u.interpolation.format) &&
            ((v.formatter = f(b)),
            v.formatter.init(v, this.options),
            (this.options.interpolation.format = v.formatter.format.bind(
              v.formatter
            ))),
          (v.interpolator = new I0(this.options)),
          (v.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
          }),
          (v.backendConnector = new tb(
            f(this.modules.backend),
            v.resourceStore,
            v,
            this.options
          )),
          v.backendConnector.on("*", function (C) {
            for (
              var A = arguments.length, _ = new Array(A > 1 ? A - 1 : 0), B = 1;
              B < A;
              B++
            )
              _[B - 1] = arguments[B];
            l.emit(C, ..._);
          }),
          this.modules.languageDetector &&
            ((v.languageDetector = f(this.modules.languageDetector)),
            v.languageDetector.init &&
              v.languageDetector.init(v, this.options.detection, this.options)),
          this.modules.i18nFormat &&
            ((v.i18nFormat = f(this.modules.i18nFormat)),
            v.i18nFormat.init && v.i18nFormat.init(this)),
          (this.translator = new li(this.services, this.options)),
          this.translator.on("*", function (C) {
            for (
              var A = arguments.length, _ = new Array(A > 1 ? A - 1 : 0), B = 1;
              B < A;
              B++
            )
              _[B - 1] = arguments[B];
            l.emit(C, ..._);
          }),
          this.modules.external.forEach((C) => {
            C.init && C.init(this);
          });
      }
      if (
        ((this.format = this.options.interpolation.format),
        o || (o = ii),
        this.options.fallbackLng &&
          !this.services.languageDetector &&
          !this.options.lng)
      ) {
        const b = this.services.languageUtils.getFallbackCodes(
          this.options.fallbackLng
        );
        b.length > 0 && b[0] !== "dev" && (this.options.lng = b[0]);
      }
      !this.services.languageDetector &&
        !this.options.lng &&
        this.logger.warn(
          "init: no languageDetector is used and no lng is defined"
        ),
        [
          "getResource",
          "hasResourceBundle",
          "getResourceBundle",
          "getDataByLanguage",
        ].forEach((b) => {
          this[b] = function () {
            return l.store[b](...arguments);
          };
        }),
        [
          "addResource",
          "addResources",
          "addResourceBundle",
          "removeResourceBundle",
        ].forEach((b) => {
          this[b] = function () {
            return l.store[b](...arguments), l;
          };
        });
      const m = jr(),
        p = () => {
          const b = (w, v) => {
            (this.isInitializing = !1),
              this.isInitialized &&
                !this.initializedStoreOnce &&
                this.logger.warn(
                  "init: i18next is already initialized. You should call init just once!"
                ),
              (this.isInitialized = !0),
              this.options.isClone ||
                this.logger.log("initialized", this.options),
              this.emit("initialized", this.options),
              m.resolve(v),
              o(w, v);
          };
          if (
            this.languages &&
            this.options.compatibilityAPI !== "v1" &&
            !this.isInitialized
          )
            return b(null, this.t.bind(this));
          this.changeLanguage(this.options.lng, b);
        };
      return (
        this.options.resources || !this.options.initImmediate
          ? p()
          : setTimeout(p, 0),
        m
      );
    }
    loadResources(l) {
      let o =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ii;
      const u = xe(l) ? l : this.language;
      if (
        (typeof l == "function" && (o = l),
        !this.options.resources || this.options.partialBundledLanguages)
      ) {
        if (
          u &&
          u.toLowerCase() === "cimode" &&
          (!this.options.preload || this.options.preload.length === 0)
        )
          return o();
        const f = [],
          d = (g) => {
            if (!g || g === "cimode") return;
            this.services.languageUtils.toResolveHierarchy(g).forEach((p) => {
              p !== "cimode" && f.indexOf(p) < 0 && f.push(p);
            });
          };
        u
          ? d(u)
          : this.services.languageUtils
              .getFallbackCodes(this.options.fallbackLng)
              .forEach((m) => d(m)),
          this.options.preload && this.options.preload.forEach((g) => d(g)),
          this.services.backendConnector.load(f, this.options.ns, (g) => {
            !g &&
              !this.resolvedLanguage &&
              this.language &&
              this.setResolvedLanguage(this.language),
              o(g);
          });
      } else o(null);
    }
    reloadResources(l, i, o) {
      const u = jr();
      return (
        typeof l == "function" && ((o = l), (l = void 0)),
        typeof i == "function" && ((o = i), (i = void 0)),
        l || (l = this.languages),
        i || (i = this.options.ns),
        o || (o = ii),
        this.services.backendConnector.reload(l, i, (f) => {
          u.resolve(), o(f);
        }),
        u
      );
    }
    use(l) {
      if (!l)
        throw new Error(
          "You are passing an undefined module! Please check the object you are passing to i18next.use()"
        );
      if (!l.type)
        throw new Error(
          "You are passing a wrong module! Please check the object you are passing to i18next.use()"
        );
      return (
        l.type === "backend" && (this.modules.backend = l),
        (l.type === "logger" || (l.log && l.warn && l.error)) &&
          (this.modules.logger = l),
        l.type === "languageDetector" && (this.modules.languageDetector = l),
        l.type === "i18nFormat" && (this.modules.i18nFormat = l),
        l.type === "postProcessor" && Cf.addPostProcessor(l),
        l.type === "formatter" && (this.modules.formatter = l),
        l.type === "3rdParty" && this.modules.external.push(l),
        this
      );
    }
    setResolvedLanguage(l) {
      if (!(!l || !this.languages) && !(["cimode", "dev"].indexOf(l) > -1))
        for (let i = 0; i < this.languages.length; i++) {
          const o = this.languages[i];
          if (
            !(["cimode", "dev"].indexOf(o) > -1) &&
            this.store.hasLanguageSomeTranslations(o)
          ) {
            this.resolvedLanguage = o;
            break;
          }
        }
    }
    changeLanguage(l, i) {
      var o = this;
      this.isLanguageChangingTo = l;
      const u = jr();
      this.emit("languageChanging", l);
      const f = (m) => {
          (this.language = m),
            (this.languages =
              this.services.languageUtils.toResolveHierarchy(m)),
            (this.resolvedLanguage = void 0),
            this.setResolvedLanguage(m);
        },
        d = (m, p) => {
          p
            ? (f(p),
              this.translator.changeLanguage(p),
              (this.isLanguageChangingTo = void 0),
              this.emit("languageChanged", p),
              this.logger.log("languageChanged", p))
            : (this.isLanguageChangingTo = void 0),
            u.resolve(function () {
              return o.t(...arguments);
            }),
            i &&
              i(m, function () {
                return o.t(...arguments);
              });
        },
        g = (m) => {
          !l && !m && this.services.languageDetector && (m = []);
          const p = xe(m)
            ? m
            : this.services.languageUtils.getBestMatchFromCodes(m);
          p &&
            (this.language || f(p),
            this.translator.language || this.translator.changeLanguage(p),
            this.services.languageDetector &&
              this.services.languageDetector.cacheUserLanguage &&
              this.services.languageDetector.cacheUserLanguage(p)),
            this.loadResources(p, (b) => {
              d(b, p);
            });
        };
      return (
        !l &&
        this.services.languageDetector &&
        !this.services.languageDetector.async
          ? g(this.services.languageDetector.detect())
          : !l &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(g)
            : this.services.languageDetector.detect(g)
          : g(l),
        u
      );
    }
    getFixedT(l, i, o) {
      var u = this;
      const f = function (d, g) {
        let m;
        if (typeof g != "object") {
          for (
            var p = arguments.length, b = new Array(p > 2 ? p - 2 : 0), w = 2;
            w < p;
            w++
          )
            b[w - 2] = arguments[w];
          m = u.options.overloadTranslationOptionHandler([d, g].concat(b));
        } else m = { ...g };
        (m.lng = m.lng || f.lng),
          (m.lngs = m.lngs || f.lngs),
          (m.ns = m.ns || f.ns),
          m.keyPrefix !== "" && (m.keyPrefix = m.keyPrefix || o || f.keyPrefix);
        const v = u.options.keySeparator || ".";
        let C;
        return (
          m.keyPrefix && Array.isArray(d)
            ? (C = d.map((A) => `${m.keyPrefix}${v}${A}`))
            : (C = m.keyPrefix ? `${m.keyPrefix}${v}${d}` : d),
          u.t(C, m)
        );
      };
      return (
        xe(l) ? (f.lng = l) : (f.lngs = l), (f.ns = i), (f.keyPrefix = o), f
      );
    }
    t() {
      return this.translator && this.translator.translate(...arguments);
    }
    exists() {
      return this.translator && this.translator.exists(...arguments);
    }
    setDefaultNamespace(l) {
      this.options.defaultNS = l;
    }
    hasLoadedNamespace(l) {
      let i =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return (
          this.logger.warn(
            "hasLoadedNamespace: i18next was not initialized",
            this.languages
          ),
          !1
        );
      if (!this.languages || !this.languages.length)
        return (
          this.logger.warn(
            "hasLoadedNamespace: i18n.languages were undefined or empty",
            this.languages
          ),
          !1
        );
      const o = i.lng || this.resolvedLanguage || this.languages[0],
        u = this.options ? this.options.fallbackLng : !1,
        f = this.languages[this.languages.length - 1];
      if (o.toLowerCase() === "cimode") return !0;
      const d = (g, m) => {
        const p = this.services.backendConnector.state[`${g}|${m}`];
        return p === -1 || p === 0 || p === 2;
      };
      if (i.precheck) {
        const g = i.precheck(this, d);
        if (g !== void 0) return g;
      }
      return !!(
        this.hasResourceBundle(o, l) ||
        !this.services.backendConnector.backend ||
        (this.options.resources && !this.options.partialBundledLanguages) ||
        (d(o, l) && (!u || d(f, l)))
      );
    }
    loadNamespaces(l, i) {
      const o = jr();
      return this.options.ns
        ? (xe(l) && (l = [l]),
          l.forEach((u) => {
            this.options.ns.indexOf(u) < 0 && this.options.ns.push(u);
          }),
          this.loadResources((u) => {
            o.resolve(), i && i(u);
          }),
          o)
        : (i && i(), Promise.resolve());
    }
    loadLanguages(l, i) {
      const o = jr();
      xe(l) && (l = [l]);
      const u = this.options.preload || [],
        f = l.filter(
          (d) =>
            u.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d)
        );
      return f.length
        ? ((this.options.preload = u.concat(f)),
          this.loadResources((d) => {
            o.resolve(), i && i(d);
          }),
          o)
        : (i && i(), Promise.resolve());
    }
    dir(l) {
      if (
        (l ||
          (l =
            this.resolvedLanguage ||
            (this.languages && this.languages.length > 0
              ? this.languages[0]
              : this.language)),
        !l)
      )
        return "rtl";
      const i = [
          "ar",
          "shu",
          "sqr",
          "ssh",
          "xaa",
          "yhd",
          "yud",
          "aao",
          "abh",
          "abv",
          "acm",
          "acq",
          "acw",
          "acx",
          "acy",
          "adf",
          "ads",
          "aeb",
          "aec",
          "afb",
          "ajp",
          "apc",
          "apd",
          "arb",
          "arq",
          "ars",
          "ary",
          "arz",
          "auz",
          "avl",
          "ayh",
          "ayl",
          "ayn",
          "ayp",
          "bbz",
          "pga",
          "he",
          "iw",
          "ps",
          "pbt",
          "pbu",
          "pst",
          "prp",
          "prd",
          "ug",
          "ur",
          "ydd",
          "yds",
          "yih",
          "ji",
          "yi",
          "hbo",
          "men",
          "xmn",
          "fa",
          "jpr",
          "peo",
          "pes",
          "prs",
          "dv",
          "sam",
          "ckb",
        ],
        o = (this.services && this.services.languageUtils) || new Rf(Mf());
      return i.indexOf(o.getLanguagePartFromCode(l)) > -1 ||
        l.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
    }
    static createInstance() {
      let l =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        i = arguments.length > 1 ? arguments[1] : void 0;
      return new Yr(l, i);
    }
    cloneInstance() {
      let l =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ii;
      const o = l.forkResourceStore;
      o && delete l.forkResourceStore;
      const u = { ...this.options, ...l, isClone: !0 },
        f = new Yr(u);
      return (
        (l.debug !== void 0 || l.prefix !== void 0) &&
          (f.logger = f.logger.clone(l)),
        ["store", "services", "language"].forEach((g) => {
          f[g] = this[g];
        }),
        (f.services = { ...this.services }),
        (f.services.utils = {
          hasLoadedNamespace: f.hasLoadedNamespace.bind(f),
        }),
        o &&
          ((f.store = new Tf(this.store.data, u)),
          (f.services.resourceStore = f.store)),
        (f.translator = new li(f.services, u)),
        f.translator.on("*", function (g) {
          for (
            var m = arguments.length, p = new Array(m > 1 ? m - 1 : 0), b = 1;
            b < m;
            b++
          )
            p[b - 1] = arguments[b];
          f.emit(g, ...p);
        }),
        f.init(u, i),
        (f.translator.options = u),
        (f.translator.backendConnector.services.utils = {
          hasLoadedNamespace: f.hasLoadedNamespace.bind(f),
        }),
        f
      );
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage,
      };
    }
  }
  const Tt = Yr.createInstance();
  (Tt.createInstance = Yr.createInstance),
    Tt.createInstance,
    Tt.dir,
    Tt.init,
    Tt.loadResources,
    Tt.reloadResources,
    Tt.use,
    Tt.changeLanguage,
    Tt.getFixedT,
    Tt.t,
    Tt.exists,
    Tt.setDefaultNamespace,
    Tt.hasLoadedNamespace,
    Tt.loadNamespaces,
    Tt.loadLanguages;
  const nb = {
    en: {
      translation: {
        "storybook-components": {
          common: { cancel: "Cancel", save: "Save", loading: "Loading..." },
          "accordion-panel": {
            completed: "Completed",
            "not-completed": "Not Completed",
            active: "Active",
            inactive: "Inactive",
          },
          "action-menu": {
            title: "Actions",
            "not-authorized": "You are not authorized.",
          },
          "add-header": { step: "Step {{step}}" },
          combobox: { "nothing-found": "Nothing found." },
          "drone-calendar": {
            "no-mission": "There is no mission on this date.",
          },
          "error-page": {
            heading: "Page not found",
            subheading: "Sorry, we couldn’t find the page you’re looking for.",
            "go-back": "Go back home",
            "privacy-policy": "Privacy Policy",
          },
          "filter-dropdown": {
            clear: "Clear",
            apply: "Apply",
            search: "Search...",
          },
          "input-file": {
            heading: "Choose a file or drag & drop it here.",
            subheading: "Only PDF format and up to 2 MB.",
            "browse-file": "Browse File",
          },
          "layout-head": {
            "account-settings": "Account settings",
            "privacy-policy": "Privacy policy",
            logout: "Logout",
          },
          "list-box": { "select-all": "Select All" },
          map: {
            "location-placeholder": "Enter Location",
            "allow-location-access":
              "Please allow location access to use this feature.",
            latitude: "Latitude",
            longitude: "Longitude",
            "ground-distance": "Ground Distance",
            speed: "Speed",
            styles: {
              light: "Light",
              dark: "Dark",
              satellite: "Satellite",
              "light-v11": "Light V2",
            },
          },
          "member-section": {
            "not-authorized": "You are not authorized.",
            name: "Name",
            "invited-date": "Invited Date",
            status: "Status",
            "show-more": "Show More",
          },
          "mission-calendar": {
            mon: "MON",
            tue: "TUE",
            wed: "WED",
            thu: "THU",
            fri: "FRI",
            sat: "SAT",
            sun: "SUN",
            "prev-month": "Previous month",
            "next-month": "Next month",
          },
          "mission-calendar-type": { edit: "Edit", delete: "Delete" },
          notification: {
            notifications: "Notifications",
            alerts: "Alerts",
            "no-data": "You have no new {{type}}",
            "see-all": "See All {{type}}",
          },
          "print-modal": {
            download: "Download",
            print: "Print",
            "horizontal-view": "Horizontal View",
            "vertical-view": "Vertical View",
          },
          "protected-route": {
            "no-access": "You are not authorized to access this page",
          },
          sidebar: { search: "Search", main: "MAIN", other: "OTHER" },
          "step-tour": {
            back: "Back",
            skip: "Skip",
            next: "Next",
            finish: "Finish",
          },
          table: {
            "not-authorized": "You are not authorized.",
            actions: "Actions",
            "empty-text": "No data found.",
          },
          pagination: {
            page: "Page",
            of: "of",
            prev: "Previous",
            next: "Next",
          },
          tabs: { "select-tab": "Select a tab" },
          "welcome-modal": {
            skip: "Skip",
            back: "Back",
            next: "Next",
            start: "Start",
          },
          "mission-status": {
            EXPRESS: "Express",
            IN_PROGRESS: "In Progress",
            IN_TRANSIT: "In Transit",
            COMPLETED: "Completed",
            FAILED: "Failed",
            LATE: "Late",
            EXCEPTION: "Exception",
            SCHEDULED: "Scheduled",
            AT_TERMINAL: "At Terminal",
            FLAG: "Flag",
            PENDING: "Pending",
            CANCELLED: "Cancelled",
            CHECKED_IN: "Checked In",
            AT_ORIGIN: "At Origin",
            AT_DESTINATION: "At Destination",
            LOADED: "Loaded",
            LOST: "Lost",
            MISSING: "Missing",
            STARTED: "Started",
            DELAY: "Delay",
            PARTIALLY_COMPLETED: "Partially Completed",
            PARTIALLY_FAILED: "Partially Failed",
            EXPIRED: "Expired",
            LOST_BATTERY: "Lost Battery",
            ON_DRONE: "On Drone",
            OFF_DRONE: "Off Drone",
            PICKED_UP: "Picked Up",
            READY_FOR_TAKE_OFF: "Ready For Take Off",
            AT_TRANSFER_TERMINAL: "At Transfer Terminal",
            AT_TRANSFER: "At Transfer",
          },
          status: {
            SCHEDULED: "Scheduled",
            ACTIVE: "Active",
            PENDING: "Pending",
            DEACTIVATED: "Deactivated",
            CANCELLED: "Cancelled",
            EXPIRED: "Expired",
            INACTIVE: "In-active",
            APPROVED: "Approved",
            REJECTED: "Rejected",
            WAITING_APPROVAL: "Waiting Approval",
            SUCCESS: "Success",
            FAIL: "Failed",
            SKIP_FOR_ALREADY_CREATED: "Skipped (Already Created)",
            SKIP_FOR_PAST_TIME: "Skipped (Past Time)",
            CREATED: "Created",
          },
          "date-picker": { placeholder: "Select Date" },
          "range-picker": {
            placeholder: { start: "Start Date", end: "End Date" },
          },
          calendar: {
            today: "Today",
            day: "Day",
            week: "Week",
            month: "Month",
            agenda: "Agenda",
            min: "min",
            days: {
              sun: "Sun",
              mon: "Mon",
              tue: "Tue",
              wed: "Wed",
              thu: "Thu",
              fri: "Fri",
              sat: "Sat",
            },
          },
          "base-modal": { cancel: "Cancel", save: "Save" },
        },
      },
    },
    tr: {
      translation: {
        "storybook-components": {
          common: { cancel: "İptal", save: "Kaydet", loadin: "Yükleniyor..." },
          "accordion-panel": {
            completed: "Tamamlandı",
            "not-completed": "Tamamlanmadı",
            active: "Aktif",
            inactive: "Pasif",
          },
          "action-menu": {
            title: "İşlemler",
            "not-authorized": "Yetkiniz bulunmamaktadır.",
          },
          "add-header": { step: "Adım {{step}}" },
          combobox: { "nothing-found": "Sonuç bulunamadı." },
          "drone-calendar": {
            "no-mission": "Bu tarihte görev bulunmamaktadır.",
          },
          "error-page": {
            heading: "Sayfa bulunamadı",
            subheading: "Üzgünüz, aradığınız sayfayı bulamadık.",
            "go-back": "Ana sayfaya dön",
            "privacy-policy": "Gizlilik Politikası",
          },
          "filter-dropdown": {
            clear: "Temizle",
            apply: "Uygula",
            search: "Ara...",
          },
          "input-file": {
            heading: "Bir dosya seçin veya buraya sürükleyip bırakın.",
            subheading: "Sadece PDF formatı ve en fazla 2 MB.",
            "browse-file": "Dosya Seç",
          },
          "layout-head": {
            "account-settings": "Hesap ayarları",
            "privacy-policy": "Gizlilik politikası",
            logout: "Çıkış",
          },
          "list-box": { "select-all": "Tümünü Seç" },
          map: {
            "location-placeholder": "Konum Girin",
            "allow-location-access":
              "Bu özelliği kullanmak için lütfen konum erişimine izin verin.",
            latitude: "Enlem",
            longitude: "Boylam",
            "ground-distance": "Yer Mesafesi",
            speed: "Hız",
            styles: {
              light: "Açık",
              dark: "Koyu",
              satellite: "Uydu",
              "light-v11": "Açık V2",
            },
          },
          "member-section": {
            "not-authorized": "Yetkiniz bulunmamaktadır.",
            name: "İsim",
            "invited-date": "Davet Tarihi",
            status: "Durum",
            "show-more": "Daha Fazla Göster",
          },
          "mission-calendar": {
            mon: "PZT",
            tue: "SAL",
            wed: "ÇAR",
            thu: "PER",
            fri: "CUM",
            sat: "CMT",
            sun: "PAZ",
            "prev-month": "Önceki ay",
            "next-month": "Sonraki ay",
          },
          "mission-calendar-type": { edit: "Düzenle", delete: "Sil" },
          notification: {
            notifications: "Bildirimler",
            alerts: "Uyarılar",
            "no-data": "Yeni {{type}} bulunmamaktadır",
            "see-all": "Tüm {{type}} Gör",
          },
          "print-modal": {
            download: "İndir",
            print: "Yazdır",
            "horizontal-view": "Yatay Görünüm",
            "vertical-view": "Dikey Görünüm",
          },
          "protected-route": {
            "no-access": "Bu sayfaya erişim yetkiniz bulunmamaktadır",
          },
          sidebar: { search: "Ara", main: "ANA", other: "DİĞER" },
          "step-tour": {
            back: "Geri",
            skip: "Atla",
            next: "İleri",
            finish: "Bitir",
          },
          table: {
            "not-authorized": "Yetkiniz bulunmamaktadır.",
            actions: "İşlemler",
            "empty-text": "Veri bulunamadı.",
          },
          pagination: {
            page: "Sayfa",
            of: "/",
            prev: "Önceki",
            next: "Sonraki",
          },
          tabs: { "select-tab": "Bir sekme seçin" },
          "welcome-modal": {
            skip: "Atla",
            back: "Geri",
            next: "İleri",
            start: "Başla",
          },
          "mission-status": {
            EXPRESS: "Ekspres",
            IN_PROGRESS: "Devam Ediyor",
            IN_TRANSIT: "Taşınıyor",
            COMPLETED: "Tamamlandı",
            FAILED: "Başarısız",
            LATE: "Geç",
            EXCEPTION: "İstisna",
            SCHEDULED: "Planlandı",
            AT_TERMINAL: "Terminalde",
            FLAG: "İşaret",
            PENDING: "Beklemede",
            CANCELLED: "İptal Edildi",
            CHECKED_IN: "Giriş Yapıldı",
            AT_ORIGIN: "Başlangıç Noktasında",
            AT_DESTINATION: "Varış Noktasında",
            LOADED: "Yüklendi",
            LOST: "Kayıp",
            MISSING: "Eksik",
            STARTED: "Başladı",
            DELAY: "Gecikme",
            PARTIALLY_COMPLETED: "Kısmen Tamamlandı",
            PARTIALLY_FAILED: "Kısmen Başarısız",
            EXPIRED: "Süresi Doldu",
            LOST_BATTERY: "Batarya Bitti",
            ON_DRONE: "Drone Üzerinde",
            OFF_DRONE: "Drone Dışında",
            PICKED_UP: "Alındı",
            READY_FOR_TAKE_OFF: "Kalkışa Hazır",
            AT_TRANSFER_TERMINAL: "Transfer Terminalinde",
            AT_TRANSFER: "Transfer Noktasında",
          },
          status: {
            SCHEDULED: "Planlandı",
            ACTIVE: "Aktif",
            PENDING: "Beklemede",
            DEACTIVATED: "Devre Dışı",
            CANCELLED: "İptal Edildi",
            EXPIRED: "Süresi Doldu",
            INACTIVE: "Pasif",
            APPROVED: "Onaylandı",
            REJECTED: "Reddedildi",
            WAITING_APPROVAL: "Onay Bekliyor",
            SUCCESS: "Başarılı",
            FAIL: "Başarısız",
            SKIP_FOR_ALREADY_CREATED: "Atlandı (Zaten Oluşturuldu)",
            SKIP_FOR_PAST_TIME: "Atlandı (Geçmiş Zaman)",
            CREATED: "Oluşturuldu",
          },
          "date-picker": { placeholder: "Tarih Seçin" },
          "range-picker": {
            placeholder: { start: "Başlangıç Tarihi", end: "Bitiş Tarihi" },
          },
          calendar: {
            today: "Bugün",
            day: "Gün",
            week: "Hafta",
            month: "Ay",
            agenda: "Ajanda",
            min: "dk",
            days: {
              sun: "Paz",
              mon: "Pzt",
              tue: "Sal",
              wed: "Çar",
              thu: "Per",
              fri: "Cum",
              sat: "Cmt",
            },
          },
          "base-modal": { cancel: "İptal", save: "Kaydet" },
        },
      },
    },
  };
  Tt.use(D0).init({
    resources: nb,
    supportedLngs: ["en", "tr"],
    fallbackLng: "tr",
    debug: !0,
    interpolation: { escapeValue: !1 },
  });
  const Lf = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
    oi = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
    hs = Object.freeze({ ...Lf, ...oi }),
    gs = Object.freeze({ ...hs, body: "", hidden: !1 });
  function rb(n, l) {
    const i = {};
    !n.hFlip != !l.hFlip && (i.hFlip = !0),
      !n.vFlip != !l.vFlip && (i.vFlip = !0);
    const o = ((n.rotate || 0) + (l.rotate || 0)) % 4;
    return o && (i.rotate = o), i;
  }
  function _f(n, l) {
    const i = rb(n, l);
    for (const o in gs)
      o in oi
        ? o in n && !(o in i) && (i[o] = oi[o])
        : o in l
        ? (i[o] = l[o])
        : o in n && (i[o] = n[o]);
    return i;
  }
  function lb(n, l) {
    const i = n.icons,
      o = n.aliases || Object.create(null),
      u = Object.create(null);
    function f(d) {
      if (i[d]) return (u[d] = []);
      if (!(d in u)) {
        u[d] = null;
        const g = o[d] && o[d].parent,
          m = g && f(g);
        m && (u[d] = [g].concat(m));
      }
      return u[d];
    }
    return Object.keys(i).concat(Object.keys(o)).forEach(f), u;
  }
  function ib(n, l, i) {
    const o = n.icons,
      u = n.aliases || Object.create(null);
    let f = {};
    function d(g) {
      f = _f(o[g] || u[g], f);
    }
    return d(l), i.forEach(d), _f(n, f);
  }
  function Uf(n, l) {
    const i = [];
    if (typeof n != "object" || typeof n.icons != "object") return i;
    n.not_found instanceof Array &&
      n.not_found.forEach((u) => {
        l(u, null), i.push(u);
      });
    const o = lb(n);
    for (const u in o) {
      const f = o[u];
      f && (l(u, ib(n, u, f)), i.push(u));
    }
    return i;
  }
  const ob = { provider: "", aliases: {}, not_found: {}, ...Lf };
  function ms(n, l) {
    for (const i in l) if (i in n && typeof n[i] != typeof l[i]) return !1;
    return !0;
  }
  function Hf(n) {
    if (typeof n != "object" || n === null) return null;
    const l = n;
    if (
      typeof l.prefix != "string" ||
      !n.icons ||
      typeof n.icons != "object" ||
      !ms(n, ob)
    )
      return null;
    const i = l.icons;
    for (const u in i) {
      const f = i[u];
      if (!u || typeof f.body != "string" || !ms(f, gs)) return null;
    }
    const o = l.aliases || Object.create(null);
    for (const u in o) {
      const f = o[u],
        d = f.parent;
      if (!u || typeof d != "string" || (!i[d] && !o[d]) || !ms(f, gs))
        return null;
    }
    return l;
  }
  const Bf = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    si = (n, l, i, o = "") => {
      const u = n.split(":");
      if (n.slice(0, 1) === "@") {
        if (u.length < 2 || u.length > 3) return null;
        o = u.shift().slice(1);
      }
      if (u.length > 3 || !u.length) return null;
      if (u.length > 1) {
        const g = u.pop(),
          m = u.pop(),
          p = { provider: u.length > 0 ? u[0] : o, prefix: m, name: g };
        return l && !ui(p) ? null : p;
      }
      const f = u[0],
        d = f.split("-");
      if (d.length > 1) {
        const g = { provider: o, prefix: d.shift(), name: d.join("-") };
        return l && !ui(g) ? null : g;
      }
      if (i && o === "") {
        const g = { provider: o, prefix: "", name: f };
        return l && !ui(g, i) ? null : g;
      }
      return null;
    },
    ui = (n, l) =>
      n ? !!(((l && n.prefix === "") || n.prefix) && n.name) : !1,
    Vf = Object.create(null);
  function sb(n, l) {
    return {
      provider: n,
      prefix: l,
      icons: Object.create(null),
      missing: new Set(),
    };
  }
  function Xn(n, l) {
    const i = Vf[n] || (Vf[n] = Object.create(null));
    return i[l] || (i[l] = sb(n, l));
  }
  function jf(n, l) {
    return Hf(l)
      ? Uf(l, (i, o) => {
          o ? (n.icons[i] = o) : n.missing.add(i);
        })
      : [];
  }
  function ub(n, l, i) {
    try {
      if (typeof i.body == "string") return (n.icons[l] = { ...i }), !0;
    } catch {}
    return !1;
  }
  let Gr = !1;
  function qf(n) {
    return typeof n == "boolean" && (Gr = n), Gr;
  }
  function Yf(n) {
    const l = typeof n == "string" ? si(n, !0, Gr) : n;
    if (l) {
      const i = Xn(l.provider, l.prefix),
        o = l.name;
      return i.icons[o] || (i.missing.has(o) ? null : void 0);
    }
  }
  function cb(n, l) {
    const i = si(n, !0, Gr);
    if (!i) return !1;
    const o = Xn(i.provider, i.prefix);
    return l ? ub(o, i.name, l) : (o.missing.add(i.name), !0);
  }
  function fb(n, l) {
    if (typeof n != "object") return !1;
    if (
      (typeof l != "string" && (l = n.provider || ""), Gr && !l && !n.prefix)
    ) {
      let u = !1;
      return (
        Hf(n) &&
          ((n.prefix = ""),
          Uf(n, (f, d) => {
            cb(f, d) && (u = !0);
          })),
        u
      );
    }
    const i = n.prefix;
    if (!ui({ prefix: i, name: "a" })) return !1;
    const o = Xn(l, i);
    return !!jf(o, n);
  }
  const Gf = Object.freeze({ width: null, height: null }),
    Xf = Object.freeze({ ...Gf, ...oi }),
    db = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    hb = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function Qf(n, l, i) {
    if (l === 1) return n;
    if (((i = i || 100), typeof n == "number")) return Math.ceil(n * l * i) / i;
    if (typeof n != "string") return n;
    const o = n.split(db);
    if (o === null || !o.length) return n;
    const u = [];
    let f = o.shift(),
      d = hb.test(f);
    for (;;) {
      if (d) {
        const g = parseFloat(f);
        isNaN(g) ? u.push(f) : u.push(Math.ceil(g * l * i) / i);
      } else u.push(f);
      if (((f = o.shift()), f === void 0)) return u.join("");
      d = !d;
    }
  }
  function gb(n, l = "defs") {
    let i = "";
    const o = n.indexOf("<" + l);
    for (; o >= 0; ) {
      const u = n.indexOf(">", o),
        f = n.indexOf("</" + l);
      if (u === -1 || f === -1) break;
      const d = n.indexOf(">", f);
      if (d === -1) break;
      (i += n.slice(u + 1, f).trim()),
        (n = n.slice(0, o).trim() + n.slice(d + 1));
    }
    return { defs: i, content: n };
  }
  function mb(n, l) {
    return n ? "<defs>" + n + "</defs>" + l : l;
  }
  function pb(n, l, i) {
    const o = gb(n);
    return mb(o.defs, l + o.content + i);
  }
  const bb = (n) => n === "unset" || n === "undefined" || n === "none";
  function yb(n, l) {
    const i = { ...hs, ...n },
      o = { ...Xf, ...l },
      u = { left: i.left, top: i.top, width: i.width, height: i.height };
    let f = i.body;
    [i, o].forEach((_) => {
      const B = [],
        M = _.hFlip,
        Q = _.vFlip;
      let P = _.rotate;
      M
        ? Q
          ? (P += 2)
          : (B.push(
              "translate(" +
                (u.width + u.left).toString() +
                " " +
                (0 - u.top).toString() +
                ")"
            ),
            B.push("scale(-1 1)"),
            (u.top = u.left = 0))
        : Q &&
          (B.push(
            "translate(" +
              (0 - u.left).toString() +
              " " +
              (u.height + u.top).toString() +
              ")"
          ),
          B.push("scale(1 -1)"),
          (u.top = u.left = 0));
      let J;
      switch ((P < 0 && (P -= Math.floor(P / 4) * 4), (P = P % 4), P)) {
        case 1:
          (J = u.height / 2 + u.top),
            B.unshift("rotate(90 " + J.toString() + " " + J.toString() + ")");
          break;
        case 2:
          B.unshift(
            "rotate(180 " +
              (u.width / 2 + u.left).toString() +
              " " +
              (u.height / 2 + u.top).toString() +
              ")"
          );
          break;
        case 3:
          (J = u.width / 2 + u.left),
            B.unshift("rotate(-90 " + J.toString() + " " + J.toString() + ")");
          break;
      }
      P % 2 === 1 &&
        (u.left !== u.top && ((J = u.left), (u.left = u.top), (u.top = J)),
        u.width !== u.height &&
          ((J = u.width), (u.width = u.height), (u.height = J))),
        B.length && (f = pb(f, '<g transform="' + B.join(" ") + '">', "</g>"));
    });
    const d = o.width,
      g = o.height,
      m = u.width,
      p = u.height;
    let b, w;
    d === null
      ? ((w = g === null ? "1em" : g === "auto" ? p : g), (b = Qf(w, m / p)))
      : ((b = d === "auto" ? m : d),
        (w = g === null ? Qf(b, p / m) : g === "auto" ? p : g));
    const v = {},
      C = (_, B) => {
        bb(B) || (v[_] = B.toString());
      };
    C("width", b), C("height", w);
    const A = [u.left, u.top, m, p];
    return (v.viewBox = A.join(" ")), { attributes: v, viewBox: A, body: f };
  }
  const vb = /\sid="(\S+)"/g,
    wb =
      "IconifyId" +
      Date.now().toString(16) +
      ((Math.random() * 16777216) | 0).toString(16);
  let xb = 0;
  function Sb(n, l = wb) {
    const i = [];
    let o;
    for (; (o = vb.exec(n)); ) i.push(o[1]);
    if (!i.length) return n;
    const u = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
    return (
      i.forEach((f) => {
        const d = typeof l == "function" ? l(f) : l + (xb++).toString(),
          g = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        n = n.replace(
          new RegExp('([#;"])(' + g + ')([")]|\\.[a-z])', "g"),
          "$1" + d + u + "$3"
        );
      }),
      (n = n.replace(new RegExp(u, "g"), "")),
      n
    );
  }
  const ps = Object.create(null);
  function Eb(n, l) {
    ps[n] = l;
  }
  function bs(n) {
    return ps[n] || ps[""];
  }
  function ys(n) {
    let l;
    if (typeof n.resources == "string") l = [n.resources];
    else if (((l = n.resources), !(l instanceof Array) || !l.length))
      return null;
    return {
      resources: l,
      path: n.path || "/",
      maxURL: n.maxURL || 500,
      rotate: n.rotate || 750,
      timeout: n.timeout || 5e3,
      random: n.random === !0,
      index: n.index || 0,
      dataAfterTimeout: n.dataAfterTimeout !== !1,
    };
  }
  const vs = Object.create(null),
    Xr = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    ci = [];
  for (; Xr.length > 0; )
    Xr.length === 1 || Math.random() > 0.5
      ? ci.push(Xr.shift())
      : ci.push(Xr.pop());
  vs[""] = ys({ resources: ["https://api.iconify.design"].concat(ci) });
  function kb(n, l) {
    const i = ys(l);
    return i === null ? !1 : ((vs[n] = i), !0);
  }
  function ws(n) {
    return vs[n];
  }
  let Kf = (() => {
    let n;
    try {
      if (((n = fetch), typeof n == "function")) return n;
    } catch {}
  })();
  function Ab(n, l) {
    const i = ws(n);
    if (!i) return 0;
    let o;
    if (!i.maxURL) o = 0;
    else {
      let u = 0;
      i.resources.forEach((d) => {
        u = Math.max(u, d.length);
      });
      const f = l + ".json?icons=";
      o = i.maxURL - u - i.path.length - f.length;
    }
    return o;
  }
  function Tb(n) {
    return n === 404;
  }
  const Cb = (n, l, i) => {
    const o = [],
      u = Ab(n, l),
      f = "icons";
    let d = { type: f, provider: n, prefix: l, icons: [] },
      g = 0;
    return (
      i.forEach((m, p) => {
        (g += m.length + 1),
          g >= u &&
            p > 0 &&
            (o.push(d),
            (d = { type: f, provider: n, prefix: l, icons: [] }),
            (g = m.length)),
          d.icons.push(m);
      }),
      o.push(d),
      o
    );
  };
  function Ob(n) {
    if (typeof n == "string") {
      const l = ws(n);
      if (l) return l.path;
    }
    return "/";
  }
  const Rb = {
    prepare: Cb,
    send: (n, l, i) => {
      if (!Kf) {
        i("abort", 424);
        return;
      }
      let o = Ob(l.provider);
      switch (l.type) {
        case "icons": {
          const f = l.prefix,
            g = l.icons.join(","),
            m = new URLSearchParams({ icons: g });
          o += f + ".json?" + m.toString();
          break;
        }
        case "custom": {
          const f = l.uri;
          o += f.slice(0, 1) === "/" ? f.slice(1) : f;
          break;
        }
        default:
          i("abort", 400);
          return;
      }
      let u = 503;
      Kf(n + o)
        .then((f) => {
          const d = f.status;
          if (d !== 200) {
            setTimeout(() => {
              i(Tb(d) ? "abort" : "next", d);
            });
            return;
          }
          return (u = 501), f.json();
        })
        .then((f) => {
          if (typeof f != "object" || f === null) {
            setTimeout(() => {
              f === 404 ? i("abort", f) : i("next", u);
            });
            return;
          }
          setTimeout(() => {
            i("success", f);
          });
        })
        .catch(() => {
          i("next", u);
        });
    },
  };
  function Nb(n) {
    const l = { loaded: [], missing: [], pending: [] },
      i = Object.create(null);
    n.sort((u, f) =>
      u.provider !== f.provider
        ? u.provider.localeCompare(f.provider)
        : u.prefix !== f.prefix
        ? u.prefix.localeCompare(f.prefix)
        : u.name.localeCompare(f.name)
    );
    let o = { provider: "", prefix: "", name: "" };
    return (
      n.forEach((u) => {
        if (
          o.name === u.name &&
          o.prefix === u.prefix &&
          o.provider === u.provider
        )
          return;
        o = u;
        const f = u.provider,
          d = u.prefix,
          g = u.name,
          m = i[f] || (i[f] = Object.create(null)),
          p = m[d] || (m[d] = Xn(f, d));
        let b;
        g in p.icons
          ? (b = l.loaded)
          : d === "" || p.missing.has(g)
          ? (b = l.missing)
          : (b = l.pending);
        const w = { provider: f, prefix: d, name: g };
        b.push(w);
      }),
      l
    );
  }
  function Zf(n, l) {
    n.forEach((i) => {
      const o = i.loaderCallbacks;
      o && (i.loaderCallbacks = o.filter((u) => u.id !== l));
    });
  }
  function zb(n) {
    n.pendingCallbacksFlag ||
      ((n.pendingCallbacksFlag = !0),
      setTimeout(() => {
        n.pendingCallbacksFlag = !1;
        const l = n.loaderCallbacks ? n.loaderCallbacks.slice(0) : [];
        if (!l.length) return;
        let i = !1;
        const o = n.provider,
          u = n.prefix;
        l.forEach((f) => {
          const d = f.icons,
            g = d.pending.length;
          (d.pending = d.pending.filter((m) => {
            if (m.prefix !== u) return !0;
            const p = m.name;
            if (n.icons[p]) d.loaded.push({ provider: o, prefix: u, name: p });
            else if (n.missing.has(p))
              d.missing.push({ provider: o, prefix: u, name: p });
            else return (i = !0), !0;
            return !1;
          })),
            d.pending.length !== g &&
              (i || Zf([n], f.id),
              f.callback(
                d.loaded.slice(0),
                d.missing.slice(0),
                d.pending.slice(0),
                f.abort
              ));
        });
      }));
  }
  let Mb = 0;
  function Db(n, l, i) {
    const o = Mb++,
      u = Zf.bind(null, i, o);
    if (!l.pending.length) return u;
    const f = { id: o, icons: l, callback: n, abort: u };
    return (
      i.forEach((d) => {
        (d.loaderCallbacks || (d.loaderCallbacks = [])).push(f);
      }),
      u
    );
  }
  function Lb(n, l = !0, i = !1) {
    const o = [];
    return (
      n.forEach((u) => {
        const f = typeof u == "string" ? si(u, l, i) : u;
        f && o.push(f);
      }),
      o
    );
  }
  var _b = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1,
  };
  function Ub(n, l, i, o) {
    const u = n.resources.length,
      f = n.random ? Math.floor(Math.random() * u) : n.index;
    let d;
    if (n.random) {
      let W = n.resources.slice(0);
      for (d = []; W.length > 1; ) {
        const ae = Math.floor(Math.random() * W.length);
        d.push(W[ae]), (W = W.slice(0, ae).concat(W.slice(ae + 1)));
      }
      d = d.concat(W);
    } else d = n.resources.slice(f).concat(n.resources.slice(0, f));
    const g = Date.now();
    let m = "pending",
      p = 0,
      b,
      w = null,
      v = [],
      C = [];
    typeof o == "function" && C.push(o);
    function A() {
      w && (clearTimeout(w), (w = null));
    }
    function _() {
      m === "pending" && (m = "aborted"),
        A(),
        v.forEach((W) => {
          W.status === "pending" && (W.status = "aborted");
        }),
        (v = []);
    }
    function B(W, ae) {
      ae && (C = []), typeof W == "function" && C.push(W);
    }
    function M() {
      return {
        startTime: g,
        payload: l,
        status: m,
        queriesSent: p,
        queriesPending: v.length,
        subscribe: B,
        abort: _,
      };
    }
    function Q() {
      (m = "failed"),
        C.forEach((W) => {
          W(void 0, b);
        });
    }
    function P() {
      v.forEach((W) => {
        W.status === "pending" && (W.status = "aborted");
      }),
        (v = []);
    }
    function J(W, ae, I) {
      const de = ae !== "success";
      switch (((v = v.filter((Ee) => Ee !== W)), m)) {
        case "pending":
          break;
        case "failed":
          if (de || !n.dataAfterTimeout) return;
          break;
        default:
          return;
      }
      if (ae === "abort") {
        (b = I), Q();
        return;
      }
      if (de) {
        (b = I), v.length || (d.length ? $() : Q());
        return;
      }
      if ((A(), P(), !n.random)) {
        const Ee = n.resources.indexOf(W.resource);
        Ee !== -1 && Ee !== n.index && (n.index = Ee);
      }
      (m = "completed"),
        C.forEach((Ee) => {
          Ee(I);
        });
    }
    function $() {
      if (m !== "pending") return;
      A();
      const W = d.shift();
      if (W === void 0) {
        if (v.length) {
          w = setTimeout(() => {
            A(), m === "pending" && (P(), Q());
          }, n.timeout);
          return;
        }
        Q();
        return;
      }
      const ae = {
        status: "pending",
        resource: W,
        callback: (I, de) => {
          J(ae, I, de);
        },
      };
      v.push(ae), p++, (w = setTimeout($, n.rotate)), i(W, l, ae.callback);
    }
    return setTimeout($), M;
  }
  function $f(n) {
    const l = { ..._b, ...n };
    let i = [];
    function o() {
      i = i.filter((g) => g().status === "pending");
    }
    function u(g, m, p) {
      const b = Ub(l, g, m, (w, v) => {
        o(), p && p(w, v);
      });
      return i.push(b), b;
    }
    function f(g) {
      return i.find((m) => g(m)) || null;
    }
    return {
      query: u,
      find: f,
      setIndex: (g) => {
        l.index = g;
      },
      getIndex: () => l.index,
      cleanup: o,
    };
  }
  function Ff() {}
  const xs = Object.create(null);
  function Hb(n) {
    if (!xs[n]) {
      const l = ws(n);
      if (!l) return;
      const i = $f(l),
        o = { config: l, redundancy: i };
      xs[n] = o;
    }
    return xs[n];
  }
  function Bb(n, l, i) {
    let o, u;
    if (typeof n == "string") {
      const f = bs(n);
      if (!f) return i(void 0, 424), Ff;
      u = f.send;
      const d = Hb(n);
      d && (o = d.redundancy);
    } else {
      const f = ys(n);
      if (f) {
        o = $f(f);
        const d = n.resources ? n.resources[0] : "",
          g = bs(d);
        g && (u = g.send);
      }
    }
    return !o || !u ? (i(void 0, 424), Ff) : o.query(l, u, i)().abort;
  }
  function Jf() {}
  function Vb(n) {
    n.iconsLoaderFlag ||
      ((n.iconsLoaderFlag = !0),
      setTimeout(() => {
        (n.iconsLoaderFlag = !1), zb(n);
      }));
  }
  function jb(n) {
    const l = [],
      i = [];
    return (
      n.forEach((o) => {
        (o.match(Bf) ? l : i).push(o);
      }),
      { valid: l, invalid: i }
    );
  }
  function Qr(n, l, i) {
    function o() {
      const u = n.pendingIcons;
      l.forEach((f) => {
        u && u.delete(f), n.icons[f] || n.missing.add(f);
      });
    }
    if (i && typeof i == "object")
      try {
        if (!jf(n, i).length) {
          o();
          return;
        }
      } catch (u) {
        console.error(u);
      }
    o(), Vb(n);
  }
  function If(n, l) {
    n instanceof Promise
      ? n
          .then((i) => {
            l(i);
          })
          .catch(() => {
            l(null);
          })
      : l(n);
  }
  function qb(n, l) {
    n.iconsToLoad
      ? (n.iconsToLoad = n.iconsToLoad.concat(l).sort())
      : (n.iconsToLoad = l),
      n.iconsQueueFlag ||
        ((n.iconsQueueFlag = !0),
        setTimeout(() => {
          n.iconsQueueFlag = !1;
          const { provider: i, prefix: o } = n,
            u = n.iconsToLoad;
          if ((delete n.iconsToLoad, !u || !u.length)) return;
          const f = n.loadIcon;
          if (n.loadIcons && (u.length > 1 || !f)) {
            If(n.loadIcons(u, o, i), (b) => {
              Qr(n, u, b);
            });
            return;
          }
          if (f) {
            u.forEach((b) => {
              const w = f(b, o, i);
              If(w, (v) => {
                const C = v ? { prefix: o, icons: { [b]: v } } : null;
                Qr(n, [b], C);
              });
            });
            return;
          }
          const { valid: d, invalid: g } = jb(u);
          if ((g.length && Qr(n, g, null), !d.length)) return;
          const m = o.match(Bf) ? bs(i) : null;
          if (!m) {
            Qr(n, d, null);
            return;
          }
          m.prepare(i, o, d).forEach((b) => {
            Bb(i, b, (w) => {
              Qr(n, b.icons, w);
            });
          });
        }));
  }
  const Yb = (n, l) => {
    const i = Lb(n, !0, qf()),
      o = Nb(i);
    if (!o.pending.length) {
      let m = !0;
      return (
        l &&
          setTimeout(() => {
            m && l(o.loaded, o.missing, o.pending, Jf);
          }),
        () => {
          m = !1;
        }
      );
    }
    const u = Object.create(null),
      f = [];
    let d, g;
    return (
      o.pending.forEach((m) => {
        const { provider: p, prefix: b } = m;
        if (b === g && p === d) return;
        (d = p), (g = b), f.push(Xn(p, b));
        const w = u[p] || (u[p] = Object.create(null));
        w[b] || (w[b] = []);
      }),
      o.pending.forEach((m) => {
        const { provider: p, prefix: b, name: w } = m,
          v = Xn(p, b),
          C = v.pendingIcons || (v.pendingIcons = new Set());
        C.has(w) || (C.add(w), u[p][b].push(w));
      }),
      f.forEach((m) => {
        const p = u[m.provider][m.prefix];
        p.length && qb(m, p);
      }),
      l ? Db(l, o, f) : Jf
    );
  };
  function Gb(n, l) {
    const i = { ...n };
    for (const o in l) {
      const u = l[o],
        f = typeof u;
      o in Gf
        ? (u === null || (u && (f === "string" || f === "number"))) &&
          (i[o] = u)
        : f === typeof i[o] && (i[o] = o === "rotate" ? u % 4 : u);
    }
    return i;
  }
  const Xb = /[\s,]+/;
  function Qb(n, l) {
    l.split(Xb).forEach((i) => {
      switch (i.trim()) {
        case "horizontal":
          n.hFlip = !0;
          break;
        case "vertical":
          n.vFlip = !0;
          break;
      }
    });
  }
  function Kb(n, l = 0) {
    const i = n.replace(/^-?[0-9.]*/, "");
    function o(u) {
      for (; u < 0; ) u += 4;
      return u % 4;
    }
    if (i === "") {
      const u = parseInt(n);
      return isNaN(u) ? 0 : o(u);
    } else if (i !== n) {
      let u = 0;
      switch (i) {
        case "%":
          u = 25;
          break;
        case "deg":
          u = 90;
      }
      if (u) {
        let f = parseFloat(n.slice(0, n.length - i.length));
        return isNaN(f) ? 0 : ((f = f / u), f % 1 === 0 ? o(f) : 0);
      }
    }
    return l;
  }
  function Zb(n, l) {
    let i =
      n.indexOf("xlink:") === -1
        ? ""
        : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const o in l) i += " " + o + '="' + l[o] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + n + "</svg>";
  }
  function $b(n) {
    return n
      .replace(/"/g, "'")
      .replace(/%/g, "%25")
      .replace(/#/g, "%23")
      .replace(/</g, "%3C")
      .replace(/>/g, "%3E")
      .replace(/\s+/g, " ");
  }
  function Fb(n) {
    return "data:image/svg+xml," + $b(n);
  }
  function Jb(n) {
    return 'url("' + Fb(n) + '")';
  }
  let Kr;
  function Ib() {
    try {
      Kr = window.trustedTypes.createPolicy("iconify", {
        createHTML: (n) => n,
      });
    } catch {
      Kr = null;
    }
  }
  function Pb(n) {
    return Kr === void 0 && Ib(), Kr ? Kr.createHTML(n) : n;
  }
  const Pf = { ...Xf, inline: !1 },
    Wb = {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": !0,
      role: "img",
    },
    ey = { display: "inline-block" },
    Ss = { backgroundColor: "currentColor" },
    Wf = { backgroundColor: "transparent" },
    ed = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
    td = { WebkitMask: Ss, mask: Ss, background: Wf };
  for (const n in td) {
    const l = td[n];
    for (const i in ed) l[n + i] = ed[i];
  }
  const ty = { ...Pf, inline: !0 };
  function ad(n) {
    return n + (n.match(/^[-0-9.]+$/) ? "px" : "");
  }
  const ay = (n, l, i) => {
    const o = l.inline ? ty : Pf,
      u = Gb(o, l),
      f = l.mode || "svg",
      d = {},
      g = l.style || {},
      m = { ...(f === "svg" ? Wb : {}) };
    if (i) {
      const B = si(i, !1, !0);
      if (B) {
        const M = ["iconify"],
          Q = ["provider", "prefix"];
        for (const P of Q) B[P] && M.push("iconify--" + B[P]);
        m.className = M.join(" ");
      }
    }
    for (let B in l) {
      const M = l[B];
      if (M !== void 0)
        switch (B) {
          case "icon":
          case "style":
          case "children":
          case "onLoad":
          case "mode":
          case "ssr":
            break;
          case "_ref":
            m.ref = M;
            break;
          case "className":
            m[B] = (m[B] ? m[B] + " " : "") + M;
            break;
          case "inline":
          case "hFlip":
          case "vFlip":
            u[B] = M === !0 || M === "true" || M === 1;
            break;
          case "flip":
            typeof M == "string" && Qb(u, M);
            break;
          case "color":
            d.color = M;
            break;
          case "rotate":
            typeof M == "string"
              ? (u[B] = Kb(M))
              : typeof M == "number" && (u[B] = M);
            break;
          case "ariaHidden":
          case "aria-hidden":
            M !== !0 && M !== "true" && delete m["aria-hidden"];
            break;
          default:
            o[B] === void 0 && (m[B] = M);
        }
    }
    const p = yb(n, u),
      b = p.attributes;
    if ((u.inline && (d.verticalAlign = "-0.125em"), f === "svg")) {
      (m.style = { ...d, ...g }), Object.assign(m, b);
      let B = 0,
        M = l.id;
      return (
        typeof M == "string" && (M = M.replace(/-/g, "_")),
        (m.dangerouslySetInnerHTML = {
          __html: Pb(Sb(p.body, M ? () => M + "ID" + B++ : "iconifyReact")),
        }),
        H.createElement("svg", m)
      );
    }
    const { body: w, width: v, height: C } = n,
      A = f === "mask" || (f === "bg" ? !1 : w.indexOf("currentColor") !== -1),
      _ = Zb(w, { ...b, width: v + "", height: C + "" });
    return (
      (m.style = {
        ...d,
        "--svg": Jb(_),
        width: ad(b.width),
        height: ad(b.height),
        ...ey,
        ...(A ? Ss : Wf),
        ...g,
      }),
      H.createElement("span", m)
    );
  };
  if ((qf(!0), Eb("", Rb), typeof document < "u" && typeof window < "u")) {
    const n = window;
    if (n.IconifyPreload !== void 0) {
      const l = n.IconifyPreload,
        i = "Invalid IconifyPreload syntax.";
      typeof l == "object" &&
        l !== null &&
        (l instanceof Array ? l : [l]).forEach((o) => {
          try {
            (typeof o != "object" ||
              o === null ||
              o instanceof Array ||
              typeof o.icons != "object" ||
              typeof o.prefix != "string" ||
              !fb(o)) &&
              console.error(i);
          } catch {
            console.error(i);
          }
        });
    }
    if (n.IconifyProviders !== void 0) {
      const l = n.IconifyProviders;
      if (typeof l == "object" && l !== null)
        for (let i in l) {
          const o = "IconifyProviders[" + i + "] is invalid.";
          try {
            const u = l[i];
            if (typeof u != "object" || !u || u.resources === void 0) continue;
            kb(i, u) || console.error(o);
          } catch {
            console.error(o);
          }
        }
    }
  }
  function nd(n) {
    const [l, i] = H.useState(!!n.ssr),
      [o, u] = H.useState({});
    function f(C) {
      if (C) {
        const A = n.icon;
        if (typeof A == "object") return { name: "", data: A };
        const _ = Yf(A);
        if (_) return { name: A, data: _ };
      }
      return { name: "" };
    }
    const [d, g] = H.useState(f(!!n.ssr));
    function m() {
      const C = o.callback;
      C && (C(), u({}));
    }
    function p(C) {
      if (JSON.stringify(d) !== JSON.stringify(C)) return m(), g(C), !0;
    }
    function b() {
      var C;
      const A = n.icon;
      if (typeof A == "object") {
        p({ name: "", data: A });
        return;
      }
      const _ = Yf(A);
      if (p({ name: A, data: _ }))
        if (_ === void 0) {
          const B = Yb([A], b);
          u({ callback: B });
        } else _ && ((C = n.onLoad) === null || C === void 0 || C.call(n, A));
    }
    H.useEffect(() => (i(!0), m), []),
      H.useEffect(() => {
        l && b();
      }, [n.icon, l]);
    const { name: w, data: v } = d;
    return v
      ? ay({ ...hs, ...v }, n, w)
      : n.children
      ? n.children
      : n.fallback
      ? n.fallback
      : H.createElement("span", {});
  }
  const mt = H.forwardRef((n, l) => nd({ ...n, _ref: l }));
  H.forwardRef((n, l) => nd({ inline: !0, ...n, _ref: l }));
  var Es = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var rd;
  function ny() {
    return (
      rd ||
        ((rd = 1),
        (function (n) {
          (function () {
            var l = {}.hasOwnProperty;
            function i() {
              for (var f = "", d = 0; d < arguments.length; d++) {
                var g = arguments[d];
                g && (f = u(f, o(g)));
              }
              return f;
            }
            function o(f) {
              if (typeof f == "string" || typeof f == "number") return f;
              if (typeof f != "object") return "";
              if (Array.isArray(f)) return i.apply(null, f);
              if (
                f.toString !== Object.prototype.toString &&
                !f.toString.toString().includes("[native code]")
              )
                return f.toString();
              var d = "";
              for (var g in f) l.call(f, g) && f[g] && (d = u(d, g));
              return d;
            }
            function u(f, d) {
              return d ? (f ? f + " " + d : f + d) : f;
            }
            n.exports
              ? ((i.default = i), (n.exports = i))
              : (window.classNames = i);
          })();
        })(Es)),
      Es.exports
    );
  }
  var ry = ny();
  const Ae = gt(ry);
  function Zr(n, l) {
    var i = {};
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) &&
        l.indexOf(o) < 0 &&
        (i[o] = n[o]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
      for (var u = 0, o = Object.getOwnPropertySymbols(n); u < o.length; u++)
        l.indexOf(o[u]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(n, o[u]) &&
          (i[o[u]] = n[o[u]]);
    return i;
  }
  typeof SuppressedError == "function" && SuppressedError;
  const ly = {
    blue: "bg-blue-600",
    red: "bg-red-600",
    neutral: "bg-gray-600",
    green: "bg-emerald-600",
    yellow: "bg-amber-600",
  };
  var fi = {},
    ld;
  function iy() {
    if (ld) return fi;
    ld = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>',
    };
    return (fi.__esModule = !0), (fi.default = n), fi;
  }
  var oy = iy();
  const di = gt(oy);
  var hi = {},
    id;
  function sy() {
    if (id) return hi;
    id = 1;
    const n = {
      width: 20,
      height: 20,
      body: '<path fill="currentColor" fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd"/>',
    };
    return (hi.__esModule = !0), (hi.default = n), hi;
  }
  sy();
  var gi = {},
    od;
  function uy() {
    if (od) return gi;
    od = 1;
    const n = {
      width: 20,
      height: 20,
      body: '<path fill="currentColor" fill-rule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clip-rule="evenodd"/>',
    };
    return (gi.__esModule = !0), (gi.default = n), gi;
  }
  uy();
  var mi = {},
    sd;
  function cy() {
    if (sd) return mi;
    sd = 1;
    const n = {
      width: 20,
      height: 20,
      body: '<path fill="currentColor" d="M10 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm1.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"/>',
    };
    return (mi.__esModule = !0), (mi.default = n), mi;
  }
  cy();
  var pi = {},
    ud;
  function fy() {
    if (ud) return pi;
    ud = 1;
    const n = {
      width: 20,
      height: 20,
      body: '<path fill="currentColor" fill-rule="evenodd" d="M14.77 12.79a.75.75 0 0 1-1.06-.02L10 8.832L6.29 12.77a.75.75 0 1 1-1.08-1.04l4.25-4.5a.75.75 0 0 1 1.08 0l4.25 4.5a.75.75 0 0 1-.02 1.06Z" clip-rule="evenodd"/>',
    };
    return (pi.__esModule = !0), (pi.default = n), pi;
  }
  fy();
  var bi = {},
    cd;
  function dy() {
    if (cd) return bi;
    cd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="currentColor" d="M20 21H4V10h2v9h12v-9h2v11M3 3h18v6H3V3m6.5 8h5c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5M5 5v2h14V5H5Z"/>',
    };
    return (bi.__esModule = !0), (bi.default = n), bi;
  }
  dy();
  var yi = {},
    fd;
  function hy() {
    if (fd) return yi;
    fd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"/>',
    };
    return (yi.__esModule = !0), (yi.default = n), yi;
  }
  hy();
  var vi = {},
    dd;
  function gy() {
    if (dd) return vi;
    dd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/>',
    };
    return (vi.__esModule = !0), (vi.default = n), vi;
  }
  gy();
  var wi = {},
    hd;
  function my() {
    if (hd) return wi;
    hd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/>',
    };
    return (wi.__esModule = !0), (wi.default = n), wi;
  }
  var py = my();
  const by = gt(py);
  var xi = {},
    gd;
  function yy() {
    if (gd) return xi;
    gd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178c.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g>',
    };
    return (xi.__esModule = !0), (xi.default = n), xi;
  }
  var vy = yy();
  const wy = gt(vy);
  var Si = {},
    md;
  function xy() {
    if (md) return Si;
    md = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>',
    };
    return (Si.__esModule = !0), (Si.default = n), Si;
  }
  var Sy = xy();
  const Ey = gt(Sy);
  var Ei = {},
    pd;
  function ky() {
    if (pd) return Ei;
    pd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>',
    };
    return (Ei.__esModule = !0), (Ei.default = n), Ei;
  }
  var Ay = ky();
  const Qn = gt(Ay);
  var ki = {},
    bd;
  function Ty() {
    if (bd) return ki;
    bd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>',
    };
    return (ki.__esModule = !0), (ki.default = n), ki;
  }
  var Cy = Ty();
  const Oy = gt(Cy);
  var Ai = {},
    yd;
  function Ry() {
    if (yd) return Ai;
    yd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>',
    };
    return (Ai.__esModule = !0), (Ai.default = n), Ai;
  }
  var Ny = Ry();
  const zy = gt(Ny);
  var Ti = {},
    vd;
  function My() {
    if (vd) return Ti;
    vd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"/>',
    };
    return (Ti.__esModule = !0), (Ti.default = n), Ti;
  }
  var Dy = My();
  const Ly = gt(Dy);
  var Ci = {},
    wd;
  function _y() {
    if (wd) return Ci;
    wd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15"/>',
    };
    return (Ci.__esModule = !0), (Ci.default = n), Ci;
  }
  var Uy = _y();
  const Hy = gt(Uy);
  var Oi = {},
    xd;
  function By() {
    if (xd) return Oi;
    xd = 1;
    const n = {
      width: 24,
      height: 24,
      body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>',
    };
    return (Oi.__esModule = !0), (Oi.default = n), Oi;
  }
  By();
  function Vy({ icon: n, enabled: l }) {
    return U.createElement(
      U.Fragment,
      null,
      U.createElement(
        "span",
        {
          className: Ae(
            l
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          ),
          "aria-hidden": "true",
        },
        n
      ),
      U.createElement(
        "span",
        {
          className: Ae(
            l
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          ),
          "aria-hidden": "true",
        },
        n
      )
    );
  }
  const jy = H.forwardRef((n, l) => {
    const {
        icon: i,
        label: o,
        value: u,
        onChange: f,
        variant: d = "blue",
        labelPosition: g = "right",
        disabled: m = !1,
        hasError: p,
        errorMessage: b,
      } = n,
      w = Zr(n, [
        "icon",
        "label",
        "value",
        "onChange",
        "variant",
        "labelPosition",
        "disabled",
        "hasError",
        "errorMessage",
      ]),
      [v, C] = H.useState(u ?? !1),
      A = () => {
        if (m) return;
        const Q = !v;
        C(Q), f?.(Q);
      },
      _ = (Q) => {
        m ||
          ((Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), A()));
      },
      B = u !== void 0 ? u : v,
      M = () =>
        o
          ? U.createElement(
              "span",
              { className: "text-sm font-medium text-slate-950" },
              o
            )
          : null;
    return U.createElement(
      "div",
      { className: "flex flex-col items-start gap-1" },
      g === "top" && M(),
      U.createElement(
        "div",
        { className: "flex cursor-pointer flex-row items-center gap-3" },
        g === "left" && M(),
        U.createElement(
          "button",
          Object.assign(
            {
              type: "button",
              role: "switch",
              "aria-checked": B,
              onClick: A,
              onKeyDown: _,
              ref: l,
              disabled: m,
              className: Ae(
                "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
                B ? ly[d] : "bg-slate-200",
                m ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                { "border-red-600": p },
                { "border-gray-300 hover:border-gray-400": !p }
              ),
            },
            w
          ),
          U.createElement(
            "span",
            {
              "aria-hidden": "true",
              className: Ae(
                B ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              ),
            },
            i && U.createElement(Vy, { icon: i, enabled: B })
          )
        ),
        g === "right" && M()
      ),
      p &&
        U.createElement(
          "div",
          { className: "mt-1 flex gap-1 " },
          U.createElement(
            "div",
            { className: "flex h-4 w-4 items-center justify-center" },
            U.createElement(mt, { icon: di, className: "h-3 w-3 text-red-600" })
          ),
          U.createElement(
            "span",
            { id: "email-error", className: "text-xs text-error" },
            b
          )
        )
    );
  });
  jy.displayName = "Switch";
  const Sd = H.forwardRef(
    (
      {
        children: n,
        className: l,
        padding: i = "md",
        rounded: o = "md",
        shadow: u = "md",
        disabled: f = !1,
        onClick: d,
        hoverEffect: g = !0,
      },
      m
    ) => {
      const p = { none: "p-0", sm: "p-2", md: "p-4", lg: "p-6" },
        b = {
          none: "rounded-none",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-lg",
          full: "rounded-full",
        },
        w = {
          none: "shadow-none",
          sm: "shadow-sm",
          md: "shadow-md",
          lg: "shadow-lg",
        },
        v = (B) =>
          ({
            "shadow-none": "hover:shadow-sm",
            "shadow-sm": "hover:shadow-md",
            "shadow-md": "hover:shadow-lg",
            "shadow-lg": "hover:shadow-xl",
          }[B] || "hover:shadow-md"),
        C = () => {
          !f && d && d();
        },
        A = f ? "shadow-none" : w[u],
        _ = g && d && !f ? v(A) : "";
      return U.createElement(
        "div",
        {
          ref: m,
          className: Ae(
            "bg-white",
            p[i],
            b[o],
            A,
            {
              "cursor-pointer transition-shadow duration-200": d && !f,
              "cursor-not-allowed opacity-60": f,
            },
            _,
            l
          ),
          onClick: C,
          "aria-disabled": f,
        },
        n
      );
    }
  );
  Sd.displayName = "WhiteBox";
  var $r = {},
    Ed;
  function qy() {
    if (Ed) return $r;
    (Ed = 1),
      Object.defineProperty($r, "__esModule", { value: !0 }),
      ($r.parse = d),
      ($r.serialize = p);
    const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
      l = /^[\u0021-\u003A\u003C-\u007E]*$/,
      i =
        /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      o = /^[\u0020-\u003A\u003D-\u007E]*$/,
      u = Object.prototype.toString,
      f = (() => {
        const v = function () {};
        return (v.prototype = Object.create(null)), v;
      })();
    function d(v, C) {
      const A = new f(),
        _ = v.length;
      if (_ < 2) return A;
      const B = C?.decode || b;
      let M = 0;
      do {
        const Q = v.indexOf("=", M);
        if (Q === -1) break;
        const P = v.indexOf(";", M),
          J = P === -1 ? _ : P;
        if (Q > J) {
          M = v.lastIndexOf(";", Q - 1) + 1;
          continue;
        }
        const $ = g(v, M, Q),
          W = m(v, Q, $),
          ae = v.slice($, W);
        if (A[ae] === void 0) {
          let I = g(v, Q + 1, J),
            de = m(v, J, I);
          const Ee = B(v.slice(I, de));
          A[ae] = Ee;
        }
        M = J + 1;
      } while (M < _);
      return A;
    }
    function g(v, C, A) {
      do {
        const _ = v.charCodeAt(C);
        if (_ !== 32 && _ !== 9) return C;
      } while (++C < A);
      return A;
    }
    function m(v, C, A) {
      for (; C > A; ) {
        const _ = v.charCodeAt(--C);
        if (_ !== 32 && _ !== 9) return C + 1;
      }
      return A;
    }
    function p(v, C, A) {
      const _ = A?.encode || encodeURIComponent;
      if (!n.test(v)) throw new TypeError(`argument name is invalid: ${v}`);
      const B = _(C);
      if (!l.test(B)) throw new TypeError(`argument val is invalid: ${C}`);
      let M = v + "=" + B;
      if (!A) return M;
      if (A.maxAge !== void 0) {
        if (!Number.isInteger(A.maxAge))
          throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);
        M += "; Max-Age=" + A.maxAge;
      }
      if (A.domain) {
        if (!i.test(A.domain))
          throw new TypeError(`option domain is invalid: ${A.domain}`);
        M += "; Domain=" + A.domain;
      }
      if (A.path) {
        if (!o.test(A.path))
          throw new TypeError(`option path is invalid: ${A.path}`);
        M += "; Path=" + A.path;
      }
      if (A.expires) {
        if (!w(A.expires) || !Number.isFinite(A.expires.valueOf()))
          throw new TypeError(`option expires is invalid: ${A.expires}`);
        M += "; Expires=" + A.expires.toUTCString();
      }
      if (
        (A.httpOnly && (M += "; HttpOnly"),
        A.secure && (M += "; Secure"),
        A.partitioned && (M += "; Partitioned"),
        A.priority)
      )
        switch (
          typeof A.priority == "string" ? A.priority.toLowerCase() : void 0
        ) {
          case "low":
            M += "; Priority=Low";
            break;
          case "medium":
            M += "; Priority=Medium";
            break;
          case "high":
            M += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${A.priority}`);
        }
      if (A.sameSite)
        switch (
          typeof A.sameSite == "string" ? A.sameSite.toLowerCase() : A.sameSite
        ) {
          case !0:
          case "strict":
            M += "; SameSite=Strict";
            break;
          case "lax":
            M += "; SameSite=Lax";
            break;
          case "none":
            M += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${A.sameSite}`);
        }
      return M;
    }
    function b(v) {
      if (v.indexOf("%") === -1) return v;
      try {
        return decodeURIComponent(v);
      } catch {
        return v;
      }
    }
    function w(v) {
      return u.call(v) === "[object Date]";
    }
    return $r;
  }
  qy();
  /**
   * react-router v7.6.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function xt(n, l) {
    if (n === !1 || n === null || typeof n > "u") throw new Error(l);
  }
  function ya(n, l) {
    if (!n) {
      typeof console < "u" && console.warn(l);
      try {
        throw new Error(l);
      } catch {}
    }
  }
  function ks({ pathname: n = "/", search: l = "", hash: i = "" }) {
    return (
      l && l !== "?" && (n += l.charAt(0) === "?" ? l : "?" + l),
      i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i),
      n
    );
  }
  function As(n) {
    let l = {};
    if (n) {
      let i = n.indexOf("#");
      i >= 0 && ((l.hash = n.substring(i)), (n = n.substring(0, i)));
      let o = n.indexOf("?");
      o >= 0 && ((l.search = n.substring(o)), (n = n.substring(0, o))),
        n && (l.pathname = n);
    }
    return l;
  }
  function kd(n, l, i = "/") {
    return Yy(n, l, i, !1);
  }
  function Yy(n, l, i, o) {
    let u = typeof l == "string" ? As(l) : l,
      f = Ya(u.pathname || "/", i);
    if (f == null) return null;
    let d = Ad(n);
    Gy(d);
    let g = null;
    for (let m = 0; g == null && m < d.length; ++m) {
      let p = e1(f);
      g = Py(d[m], p, o);
    }
    return g;
  }
  function Ad(n, l = [], i = [], o = "") {
    let u = (f, d, g) => {
      let m = {
        relativePath: g === void 0 ? f.path || "" : g,
        caseSensitive: f.caseSensitive === !0,
        childrenIndex: d,
        route: f,
      };
      m.relativePath.startsWith("/") &&
        (xt(
          m.relativePath.startsWith(o),
          `Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        ),
        (m.relativePath = m.relativePath.slice(o.length)));
      let p = va([o, m.relativePath]),
        b = i.concat(m);
      f.children &&
        f.children.length > 0 &&
        (xt(
          f.index !== !0,
          `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
        ),
        Ad(f.children, l, b, p)),
        !(f.path == null && !f.index) &&
          l.push({ path: p, score: Jy(p, f.index), routesMeta: b });
    };
    return (
      n.forEach((f, d) => {
        if (f.path === "" || !f.path?.includes("?")) u(f, d);
        else for (let g of Td(f.path)) u(f, d, g);
      }),
      l
    );
  }
  function Td(n) {
    let l = n.split("/");
    if (l.length === 0) return [];
    let [i, ...o] = l,
      u = i.endsWith("?"),
      f = i.replace(/\?$/, "");
    if (o.length === 0) return u ? [f, ""] : [f];
    let d = Td(o.join("/")),
      g = [];
    return (
      g.push(...d.map((m) => (m === "" ? f : [f, m].join("/")))),
      u && g.push(...d),
      g.map((m) => (n.startsWith("/") && m === "" ? "/" : m))
    );
  }
  function Gy(n) {
    n.sort((l, i) =>
      l.score !== i.score
        ? i.score - l.score
        : Iy(
            l.routesMeta.map((o) => o.childrenIndex),
            i.routesMeta.map((o) => o.childrenIndex)
          )
    );
  }
  var Xy = /^:[\w-]+$/,
    Qy = 3,
    Ky = 2,
    Zy = 1,
    $y = 10,
    Fy = -2,
    Cd = (n) => n === "*";
  function Jy(n, l) {
    let i = n.split("/"),
      o = i.length;
    return (
      i.some(Cd) && (o += Fy),
      l && (o += Ky),
      i
        .filter((u) => !Cd(u))
        .reduce((u, f) => u + (Xy.test(f) ? Qy : f === "" ? Zy : $y), o)
    );
  }
  function Iy(n, l) {
    return n.length === l.length && n.slice(0, -1).every((o, u) => o === l[u])
      ? n[n.length - 1] - l[l.length - 1]
      : 0;
  }
  function Py(n, l, i = !1) {
    let { routesMeta: o } = n,
      u = {},
      f = "/",
      d = [];
    for (let g = 0; g < o.length; ++g) {
      let m = o[g],
        p = g === o.length - 1,
        b = f === "/" ? l : l.slice(f.length) || "/",
        w = Ri(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: p },
          b
        ),
        v = m.route;
      if (
        (!w &&
          p &&
          i &&
          !o[o.length - 1].route.index &&
          (w = Ri(
            { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
            b
          )),
        !w)
      )
        return null;
      Object.assign(u, w.params),
        d.push({
          params: u,
          pathname: va([f, w.pathname]),
          pathnameBase: r1(va([f, w.pathnameBase])),
          route: v,
        }),
        w.pathnameBase !== "/" && (f = va([f, w.pathnameBase]));
    }
    return d;
  }
  function Ri(n, l) {
    typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
    let [i, o] = Wy(n.path, n.caseSensitive, n.end),
      u = l.match(i);
    if (!u) return null;
    let f = u[0],
      d = f.replace(/(.)\/+$/, "$1"),
      g = u.slice(1);
    return {
      params: o.reduce((p, { paramName: b, isOptional: w }, v) => {
        if (b === "*") {
          let A = g[v] || "";
          d = f.slice(0, f.length - A.length).replace(/(.)\/+$/, "$1");
        }
        const C = g[v];
        return (
          w && !C ? (p[b] = void 0) : (p[b] = (C || "").replace(/%2F/g, "/")), p
        );
      }, {}),
      pathname: f,
      pathnameBase: d,
      pattern: n,
    };
  }
  function Wy(n, l = !1, i = !0) {
    ya(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      `Route path "${n}" will be treated as if it were "${n.replace(
        /\*$/,
        "/*"
      )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
        /\*$/,
        "/*"
      )}".`
    );
    let o = [],
      u =
        "^" +
        n
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (d, g, m) => (
              o.push({ paramName: g, isOptional: m != null }),
              m ? "/?([^\\/]+)?" : "/([^\\/]+)"
            )
          );
    return (
      n.endsWith("*")
        ? (o.push({ paramName: "*" }),
          (u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : i
        ? (u += "\\/*$")
        : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
      [new RegExp(u, l ? void 0 : "i"), o]
    );
  }
  function e1(n) {
    try {
      return n
        .split("/")
        .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
        .join("/");
    } catch (l) {
      return (
        ya(
          !1,
          `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
        ),
        n
      );
    }
  }
  function Ya(n, l) {
    if (l === "/") return n;
    if (!n.toLowerCase().startsWith(l.toLowerCase())) return null;
    let i = l.endsWith("/") ? l.length - 1 : l.length,
      o = n.charAt(i);
    return o && o !== "/" ? null : n.slice(i) || "/";
  }
  function t1(n, l = "/") {
    let {
      pathname: i,
      search: o = "",
      hash: u = "",
    } = typeof n == "string" ? As(n) : n;
    return {
      pathname: i ? (i.startsWith("/") ? i : a1(i, l)) : l,
      search: l1(o),
      hash: i1(u),
    };
  }
  function a1(n, l) {
    let i = l.replace(/\/+$/, "").split("/");
    return (
      n.split("/").forEach((u) => {
        u === ".." ? i.length > 1 && i.pop() : u !== "." && i.push(u);
      }),
      i.length > 1 ? i.join("/") : "/"
    );
  }
  function Ts(n, l, i, o) {
    return `Cannot include a '${n}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
      o
    )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function n1(n) {
    return n.filter(
      (l, i) => i === 0 || (l.route.path && l.route.path.length > 0)
    );
  }
  function Od(n) {
    let l = n1(n);
    return l.map((i, o) => (o === l.length - 1 ? i.pathname : i.pathnameBase));
  }
  function Rd(n, l, i, o = !1) {
    let u;
    typeof n == "string"
      ? (u = As(n))
      : ((u = { ...n }),
        xt(
          !u.pathname || !u.pathname.includes("?"),
          Ts("?", "pathname", "search", u)
        ),
        xt(
          !u.pathname || !u.pathname.includes("#"),
          Ts("#", "pathname", "hash", u)
        ),
        xt(!u.search || !u.search.includes("#"), Ts("#", "search", "hash", u)));
    let f = n === "" || u.pathname === "",
      d = f ? "/" : u.pathname,
      g;
    if (d == null) g = i;
    else {
      let w = l.length - 1;
      if (!o && d.startsWith("..")) {
        let v = d.split("/");
        for (; v[0] === ".."; ) v.shift(), (w -= 1);
        u.pathname = v.join("/");
      }
      g = w >= 0 ? l[w] : "/";
    }
    let m = t1(u, g),
      p = d && d !== "/" && d.endsWith("/"),
      b = (f || d === ".") && i.endsWith("/");
    return !m.pathname.endsWith("/") && (p || b) && (m.pathname += "/"), m;
  }
  var va = (n) => n.join("/").replace(/\/\/+/g, "/"),
    r1 = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
    l1 = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
    i1 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
  function o1(n) {
    return (
      n != null &&
      typeof n.status == "number" &&
      typeof n.statusText == "string" &&
      typeof n.internal == "boolean" &&
      "data" in n
    );
  }
  var Nd = ["POST", "PUT", "PATCH", "DELETE"];
  new Set(Nd);
  var s1 = ["GET", ...Nd];
  new Set(s1);
  var Kn = H.createContext(null);
  Kn.displayName = "DataRouter";
  var Ni = H.createContext(null);
  Ni.displayName = "DataRouterState";
  var zd = H.createContext({ isTransitioning: !1 });
  zd.displayName = "ViewTransition";
  var u1 = H.createContext(new Map());
  u1.displayName = "Fetchers";
  var c1 = H.createContext(null);
  c1.displayName = "Await";
  var wa = H.createContext(null);
  wa.displayName = "Navigation";
  var Cs = H.createContext(null);
  Cs.displayName = "Location";
  var xa = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  xa.displayName = "Route";
  var Os = H.createContext(null);
  Os.displayName = "RouteError";
  function f1(n, { relative: l } = {}) {
    xt(
      zi(),
      "useHref() may be used only in the context of a <Router> component."
    );
    let { basename: i, navigator: o } = H.useContext(wa),
      { hash: u, pathname: f, search: d } = Fr(n, { relative: l }),
      g = f;
    return (
      i !== "/" && (g = f === "/" ? i : va([i, f])),
      o.createHref({ pathname: g, search: d, hash: u })
    );
  }
  function zi() {
    return H.useContext(Cs) != null;
  }
  function bn() {
    return (
      xt(
        zi(),
        "useLocation() may be used only in the context of a <Router> component."
      ),
      H.useContext(Cs).location
    );
  }
  var Md =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Dd(n) {
    H.useContext(wa).static || H.useLayoutEffect(n);
  }
  function d1() {
    let { isDataRoute: n } = H.useContext(xa);
    return n ? A1() : h1();
  }
  function h1() {
    xt(
      zi(),
      "useNavigate() may be used only in the context of a <Router> component."
    );
    let n = H.useContext(Kn),
      { basename: l, navigator: i } = H.useContext(wa),
      { matches: o } = H.useContext(xa),
      { pathname: u } = bn(),
      f = JSON.stringify(Od(o)),
      d = H.useRef(!1);
    return (
      Dd(() => {
        d.current = !0;
      }),
      H.useCallback(
        (m, p = {}) => {
          if ((ya(d.current, Md), !d.current)) return;
          if (typeof m == "number") {
            i.go(m);
            return;
          }
          let b = Rd(m, JSON.parse(f), u, p.relative === "path");
          n == null &&
            l !== "/" &&
            (b.pathname = b.pathname === "/" ? l : va([l, b.pathname])),
            (p.replace ? i.replace : i.push)(b, p.state, p);
        },
        [l, i, f, u, n]
      )
    );
  }
  H.createContext(null);
  function Fr(n, { relative: l } = {}) {
    let { matches: i } = H.useContext(xa),
      { pathname: o } = bn(),
      u = JSON.stringify(Od(i));
    return H.useMemo(() => Rd(n, JSON.parse(u), o, l === "path"), [n, u, o, l]);
  }
  function g1(n, l, i, o) {
    xt(
      zi(),
      "useRoutes() may be used only in the context of a <Router> component."
    );
    let { navigator: u } = H.useContext(wa),
      { matches: f } = H.useContext(xa),
      d = f[f.length - 1],
      g = d ? d.params : {},
      m = d ? d.pathname : "/",
      p = d ? d.pathnameBase : "/",
      b = d && d.route;
    {
      let M = (b && b.path) || "";
      _d(
        m,
        !b || M.endsWith("*") || M.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${
          M === "/" ? "*" : `${M}/*`
        }">.`
      );
    }
    let w = bn(),
      v;
    v = w;
    let C = v.pathname || "/",
      A = C;
    if (p !== "/") {
      let M = p.replace(/^\//, "").split("/");
      A = "/" + C.replace(/^\//, "").split("/").slice(M.length).join("/");
    }
    let _ = kd(n, { pathname: A });
    return (
      ya(
        b || _ != null,
        `No routes matched location "${v.pathname}${v.search}${v.hash}" `
      ),
      ya(
        _ == null ||
          _[_.length - 1].route.element !== void 0 ||
          _[_.length - 1].route.Component !== void 0 ||
          _[_.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      ),
      v1(
        _ &&
          _.map((M) =>
            Object.assign({}, M, {
              params: Object.assign({}, g, M.params),
              pathname: va([
                p,
                u.encodeLocation
                  ? u.encodeLocation(M.pathname).pathname
                  : M.pathname,
              ]),
              pathnameBase:
                M.pathnameBase === "/"
                  ? p
                  : va([
                      p,
                      u.encodeLocation
                        ? u.encodeLocation(M.pathnameBase).pathname
                        : M.pathnameBase,
                    ]),
            })
          ),
        f,
        i,
        o
      )
    );
  }
  function m1() {
    let n = k1(),
      l = o1(n)
        ? `${n.status} ${n.statusText}`
        : n instanceof Error
        ? n.message
        : JSON.stringify(n),
      i = n instanceof Error ? n.stack : null,
      o = "rgba(200,200,200, 0.5)",
      u = { padding: "0.5rem", backgroundColor: o },
      f = { padding: "2px 4px", backgroundColor: o },
      d = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", n),
      (d = H.createElement(
        H.Fragment,
        null,
        H.createElement("p", null, "💿 Hey developer 👋"),
        H.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          H.createElement("code", { style: f }, "ErrorBoundary"),
          " or",
          " ",
          H.createElement("code", { style: f }, "errorElement"),
          " prop on your route."
        )
      )),
      H.createElement(
        H.Fragment,
        null,
        H.createElement("h2", null, "Unexpected Application Error!"),
        H.createElement("h3", { style: { fontStyle: "italic" } }, l),
        i ? H.createElement("pre", { style: u }, i) : null,
        d
      )
    );
  }
  var p1 = H.createElement(m1, null),
    b1 = class extends H.Component {
      constructor(n) {
        super(n),
          (this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error,
          });
      }
      static getDerivedStateFromError(n) {
        return { error: n };
      }
      static getDerivedStateFromProps(n, l) {
        return l.location !== n.location ||
          (l.revalidation !== "idle" && n.revalidation === "idle")
          ? {
              error: n.error,
              location: n.location,
              revalidation: n.revalidation,
            }
          : {
              error: n.error !== void 0 ? n.error : l.error,
              location: l.location,
              revalidation: n.revalidation || l.revalidation,
            };
      }
      componentDidCatch(n, l) {
        console.error(
          "React Router caught the following error during render",
          n,
          l
        );
      }
      render() {
        return this.state.error !== void 0
          ? H.createElement(
              xa.Provider,
              { value: this.props.routeContext },
              H.createElement(Os.Provider, {
                value: this.state.error,
                children: this.props.component,
              })
            )
          : this.props.children;
      }
    };
  function y1({ routeContext: n, match: l, children: i }) {
    let o = H.useContext(Kn);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (l.route.errorElement || l.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = l.route.id),
      H.createElement(xa.Provider, { value: n }, i)
    );
  }
  function v1(n, l = [], i = null, o = null) {
    if (n == null) {
      if (!i) return null;
      if (i.errors) n = i.matches;
      else if (l.length === 0 && !i.initialized && i.matches.length > 0)
        n = i.matches;
      else return null;
    }
    let u = n,
      f = i?.errors;
    if (f != null) {
      let m = u.findIndex((p) => p.route.id && f?.[p.route.id] !== void 0);
      xt(
        m >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          f
        ).join(",")}`
      ),
        (u = u.slice(0, Math.min(u.length, m + 1)));
    }
    let d = !1,
      g = -1;
    if (i)
      for (let m = 0; m < u.length; m++) {
        let p = u[m];
        if (
          ((p.route.HydrateFallback || p.route.hydrateFallbackElement) &&
            (g = m),
          p.route.id)
        ) {
          let { loaderData: b, errors: w } = i,
            v =
              p.route.loader &&
              !b.hasOwnProperty(p.route.id) &&
              (!w || w[p.route.id] === void 0);
          if (p.route.lazy || v) {
            (d = !0), g >= 0 ? (u = u.slice(0, g + 1)) : (u = [u[0]]);
            break;
          }
        }
      }
    return u.reduceRight((m, p, b) => {
      let w,
        v = !1,
        C = null,
        A = null;
      i &&
        ((w = f && p.route.id ? f[p.route.id] : void 0),
        (C = p.route.errorElement || p1),
        d &&
          (g < 0 && b === 0
            ? (_d(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
              ),
              (v = !0),
              (A = null))
            : g === b &&
              ((v = !0), (A = p.route.hydrateFallbackElement || null))));
      let _ = l.concat(u.slice(0, b + 1)),
        B = () => {
          let M;
          return (
            w
              ? (M = C)
              : v
              ? (M = A)
              : p.route.Component
              ? (M = H.createElement(p.route.Component, null))
              : p.route.element
              ? (M = p.route.element)
              : (M = m),
            H.createElement(y1, {
              match: p,
              routeContext: { outlet: m, matches: _, isDataRoute: i != null },
              children: M,
            })
          );
        };
      return i && (p.route.ErrorBoundary || p.route.errorElement || b === 0)
        ? H.createElement(b1, {
            location: i.location,
            revalidation: i.revalidation,
            component: C,
            error: w,
            children: B(),
            routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          })
        : B();
    }, null);
  }
  function Rs(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function w1(n) {
    let l = H.useContext(Kn);
    return xt(l, Rs(n)), l;
  }
  function x1(n) {
    let l = H.useContext(Ni);
    return xt(l, Rs(n)), l;
  }
  function S1(n) {
    let l = H.useContext(xa);
    return xt(l, Rs(n)), l;
  }
  function Ns(n) {
    let l = S1(n),
      i = l.matches[l.matches.length - 1];
    return (
      xt(
        i.route.id,
        `${n} can only be used on routes that contain a unique "id"`
      ),
      i.route.id
    );
  }
  function E1() {
    return Ns("useRouteId");
  }
  function k1() {
    let n = H.useContext(Os),
      l = x1("useRouteError"),
      i = Ns("useRouteError");
    return n !== void 0 ? n : l.errors?.[i];
  }
  function A1() {
    let { router: n } = w1("useNavigate"),
      l = Ns("useNavigate"),
      i = H.useRef(!1);
    return (
      Dd(() => {
        i.current = !0;
      }),
      H.useCallback(
        async (u, f = {}) => {
          ya(i.current, Md),
            i.current &&
              (typeof u == "number"
                ? n.navigate(u)
                : await n.navigate(u, { fromRouteId: l, ...f }));
        },
        [n, l]
      )
    );
  }
  var Ld = {};
  function _d(n, l, i) {
    !l && !Ld[n] && ((Ld[n] = !0), ya(!1, i));
  }
  H.memo(T1);
  function T1({ routes: n, future: l, state: i }) {
    return g1(n, void 0, i, l);
  }
  var Mi = "get",
    Di = "application/x-www-form-urlencoded";
  function Li(n) {
    return n != null && typeof n.tagName == "string";
  }
  function C1(n) {
    return Li(n) && n.tagName.toLowerCase() === "button";
  }
  function O1(n) {
    return Li(n) && n.tagName.toLowerCase() === "form";
  }
  function R1(n) {
    return Li(n) && n.tagName.toLowerCase() === "input";
  }
  function N1(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
  }
  function z1(n, l) {
    return n.button === 0 && (!l || l === "_self") && !N1(n);
  }
  var _i = null;
  function M1() {
    if (_i === null)
      try {
        new FormData(document.createElement("form"), 0), (_i = !1);
      } catch {
        _i = !0;
      }
    return _i;
  }
  var D1 = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function zs(n) {
    return n != null && !D1.has(n)
      ? (ya(
          !1,
          `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`
        ),
        null)
      : n;
  }
  function L1(n, l) {
    let i, o, u, f, d;
    if (O1(n)) {
      let g = n.getAttribute("action");
      (o = g ? Ya(g, l) : null),
        (i = n.getAttribute("method") || Mi),
        (u = zs(n.getAttribute("enctype")) || Di),
        (f = new FormData(n));
    } else if (
      C1(n) ||
      (R1(n) && (n.type === "submit" || n.type === "image"))
    ) {
      let g = n.form;
      if (g == null)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let m = n.getAttribute("formaction") || g.getAttribute("action");
      if (
        ((o = m ? Ya(m, l) : null),
        (i = n.getAttribute("formmethod") || g.getAttribute("method") || Mi),
        (u =
          zs(n.getAttribute("formenctype")) ||
          zs(g.getAttribute("enctype")) ||
          Di),
        (f = new FormData(g, n)),
        !M1())
      ) {
        let { name: p, type: b, value: w } = n;
        if (b === "image") {
          let v = p ? `${p}.` : "";
          f.append(`${v}x`, "0"), f.append(`${v}y`, "0");
        } else p && f.append(p, w);
      }
    } else {
      if (Li(n))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (i = Mi), (o = null), (u = Di), (d = n);
    }
    return (
      f && u === "text/plain" && ((d = f), (f = void 0)),
      { action: o, method: i.toLowerCase(), encType: u, formData: f, body: d }
    );
  }
  function Ms(n, l) {
    if (n === !1 || n === null || typeof n > "u") throw new Error(l);
  }
  async function _1(n, l) {
    if (n.id in l) return l[n.id];
    try {
      let i = await import(n.module);
      return (l[n.id] = i), i;
    } catch (i) {
      return (
        console.error(
          `Error loading route module \`${n.module}\`, reloading page...`
        ),
        console.error(i),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function U1(n) {
    return n == null
      ? !1
      : n.href == null
      ? n.rel === "preload" &&
        typeof n.imageSrcSet == "string" &&
        typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string";
  }
  async function H1(n, l, i) {
    let o = await Promise.all(
      n.map(async (u) => {
        let f = l.routes[u.route.id];
        if (f) {
          let d = await _1(f, i);
          return d.links ? d.links() : [];
        }
        return [];
      })
    );
    return q1(
      o
        .flat(1)
        .filter(U1)
        .filter((u) => u.rel === "stylesheet" || u.rel === "preload")
        .map((u) =>
          u.rel === "stylesheet"
            ? { ...u, rel: "prefetch", as: "style" }
            : { ...u, rel: "prefetch" }
        )
    );
  }
  function Ud(n, l, i, o, u, f) {
    let d = (m, p) => (i[p] ? m.route.id !== i[p].route.id : !0),
      g = (m, p) =>
        i[p].pathname !== m.pathname ||
        (i[p].route.path?.endsWith("*") && i[p].params["*"] !== m.params["*"]);
    return f === "assets"
      ? l.filter((m, p) => d(m, p) || g(m, p))
      : f === "data"
      ? l.filter((m, p) => {
          let b = o.routes[m.route.id];
          if (!b || !b.hasLoader) return !1;
          if (d(m, p) || g(m, p)) return !0;
          if (m.route.shouldRevalidate) {
            let w = m.route.shouldRevalidate({
              currentUrl: new URL(
                u.pathname + u.search + u.hash,
                window.origin
              ),
              currentParams: i[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof w == "boolean") return w;
          }
          return !0;
        })
      : [];
  }
  function B1(n, l, { includeHydrateFallback: i } = {}) {
    return V1(
      n
        .map((o) => {
          let u = l.routes[o.route.id];
          if (!u) return [];
          let f = [u.module];
          return (
            u.clientActionModule && (f = f.concat(u.clientActionModule)),
            u.clientLoaderModule && (f = f.concat(u.clientLoaderModule)),
            i &&
              u.hydrateFallbackModule &&
              (f = f.concat(u.hydrateFallbackModule)),
            u.imports && (f = f.concat(u.imports)),
            f
          );
        })
        .flat(1)
    );
  }
  function V1(n) {
    return [...new Set(n)];
  }
  function j1(n) {
    let l = {},
      i = Object.keys(n).sort();
    for (let o of i) l[o] = n[o];
    return l;
  }
  function q1(n, l) {
    let i = new Set();
    return (
      new Set(l),
      n.reduce((o, u) => {
        let f = JSON.stringify(j1(u));
        return i.has(f) || (i.add(f), o.push({ key: f, link: u })), o;
      }, [])
    );
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var Y1 = new Set([100, 101, 204, 205]);
  function G1(n, l) {
    let i =
      typeof n == "string"
        ? new URL(
            n,
            typeof window > "u"
              ? "server://singlefetch/"
              : window.location.origin
          )
        : n;
    return (
      i.pathname === "/"
        ? (i.pathname = "_root.data")
        : l && Ya(i.pathname, l) === "/"
        ? (i.pathname = `${l.replace(/\/$/, "")}/_root.data`)
        : (i.pathname = `${i.pathname.replace(/\/$/, "")}.data`),
      i
    );
  }
  function Hd() {
    let n = H.useContext(Kn);
    return (
      Ms(
        n,
        "You must render this element inside a <DataRouterContext.Provider> element"
      ),
      n
    );
  }
  function X1() {
    let n = H.useContext(Ni);
    return (
      Ms(
        n,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      ),
      n
    );
  }
  var Ds = H.createContext(void 0);
  Ds.displayName = "FrameworkContext";
  function Bd() {
    let n = H.useContext(Ds);
    return (
      Ms(n, "You must render this element inside a <HydratedRouter> element"), n
    );
  }
  function Q1(n, l) {
    let i = H.useContext(Ds),
      [o, u] = H.useState(!1),
      [f, d] = H.useState(!1),
      {
        onFocus: g,
        onBlur: m,
        onMouseEnter: p,
        onMouseLeave: b,
        onTouchStart: w,
      } = l,
      v = H.useRef(null);
    H.useEffect(() => {
      if ((n === "render" && d(!0), n === "viewport")) {
        let _ = (M) => {
            M.forEach((Q) => {
              d(Q.isIntersecting);
            });
          },
          B = new IntersectionObserver(_, { threshold: 0.5 });
        return (
          v.current && B.observe(v.current),
          () => {
            B.disconnect();
          }
        );
      }
    }, [n]),
      H.useEffect(() => {
        if (o) {
          let _ = setTimeout(() => {
            d(!0);
          }, 100);
          return () => {
            clearTimeout(_);
          };
        }
      }, [o]);
    let C = () => {
        u(!0);
      },
      A = () => {
        u(!1), d(!1);
      };
    return i
      ? n !== "intent"
        ? [f, v, {}]
        : [
            f,
            v,
            {
              onFocus: Jr(g, C),
              onBlur: Jr(m, A),
              onMouseEnter: Jr(p, C),
              onMouseLeave: Jr(b, A),
              onTouchStart: Jr(w, C),
            },
          ]
      : [!1, v, {}];
  }
  function Jr(n, l) {
    return (i) => {
      n && n(i), i.defaultPrevented || l(i);
    };
  }
  function K1({ page: n, ...l }) {
    let { router: i } = Hd(),
      o = H.useMemo(
        () => kd(i.routes, n, i.basename),
        [i.routes, n, i.basename]
      );
    return o ? H.createElement($1, { page: n, matches: o, ...l }) : null;
  }
  function Z1(n) {
    let { manifest: l, routeModules: i } = Bd(),
      [o, u] = H.useState([]);
    return (
      H.useEffect(() => {
        let f = !1;
        return (
          H1(n, l, i).then((d) => {
            f || u(d);
          }),
          () => {
            f = !0;
          }
        );
      }, [n, l, i]),
      o
    );
  }
  function $1({ page: n, matches: l, ...i }) {
    let o = bn(),
      { manifest: u, routeModules: f } = Bd(),
      { basename: d } = Hd(),
      { loaderData: g, matches: m } = X1(),
      p = H.useMemo(() => Ud(n, l, m, u, o, "data"), [n, l, m, u, o]),
      b = H.useMemo(() => Ud(n, l, m, u, o, "assets"), [n, l, m, u, o]),
      w = H.useMemo(() => {
        if (n === o.pathname + o.search + o.hash) return [];
        let A = new Set(),
          _ = !1;
        if (
          (l.forEach((M) => {
            let Q = u.routes[M.route.id];
            !Q ||
              !Q.hasLoader ||
              ((!p.some((P) => P.route.id === M.route.id) &&
                M.route.id in g &&
                f[M.route.id]?.shouldRevalidate) ||
              Q.hasClientLoader
                ? (_ = !0)
                : A.add(M.route.id));
          }),
          A.size === 0)
        )
          return [];
        let B = G1(n, d);
        return (
          _ &&
            A.size > 0 &&
            B.searchParams.set(
              "_routes",
              l
                .filter((M) => A.has(M.route.id))
                .map((M) => M.route.id)
                .join(",")
            ),
          [B.pathname + B.search]
        );
      }, [d, g, o, u, p, l, n, f]),
      v = H.useMemo(() => B1(b, u), [b, u]),
      C = Z1(b);
    return H.createElement(
      H.Fragment,
      null,
      w.map((A) =>
        H.createElement("link", {
          key: A,
          rel: "prefetch",
          as: "fetch",
          href: A,
          ...i,
        })
      ),
      v.map((A) =>
        H.createElement("link", { key: A, rel: "modulepreload", href: A, ...i })
      ),
      C.map(({ key: A, link: _ }) => H.createElement("link", { key: A, ..._ }))
    );
  }
  function F1(...n) {
    return (l) => {
      n.forEach((i) => {
        typeof i == "function" ? i(l) : i != null && (i.current = l);
      });
    };
  }
  var Vd =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u";
  try {
    Vd && (window.__reactRouterVersion = "7.6.3");
  } catch {}
  var jd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ls = H.forwardRef(function (
      {
        onClick: l,
        discover: i = "render",
        prefetch: o = "none",
        relative: u,
        reloadDocument: f,
        replace: d,
        state: g,
        target: m,
        to: p,
        preventScrollReset: b,
        viewTransition: w,
        ...v
      },
      C
    ) {
      let { basename: A } = H.useContext(wa),
        _ = typeof p == "string" && jd.test(p),
        B,
        M = !1;
      if (typeof p == "string" && _ && ((B = p), Vd))
        try {
          let de = new URL(window.location.href),
            Ee = p.startsWith("//") ? new URL(de.protocol + p) : new URL(p),
            Re = Ya(Ee.pathname, A);
          Ee.origin === de.origin && Re != null
            ? (p = Re + Ee.search + Ee.hash)
            : (M = !0);
        } catch {
          ya(
            !1,
            `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      let Q = f1(p, { relative: u }),
        [P, J, $] = Q1(o, v),
        W = W1(p, {
          replace: d,
          state: g,
          target: m,
          preventScrollReset: b,
          relative: u,
          viewTransition: w,
        });
      function ae(de) {
        l && l(de), de.defaultPrevented || W(de);
      }
      let I = H.createElement("a", {
        ...v,
        ...$,
        href: B || Q,
        onClick: M || f ? l : ae,
        ref: F1(C, J),
        target: m,
        "data-discover": !_ && i === "render" ? "true" : void 0,
      });
      return P && !_
        ? H.createElement(H.Fragment, null, I, H.createElement(K1, { page: Q }))
        : I;
    });
  Ls.displayName = "Link";
  var J1 = H.forwardRef(function (
    {
      "aria-current": l = "page",
      caseSensitive: i = !1,
      className: o = "",
      end: u = !1,
      style: f,
      to: d,
      viewTransition: g,
      children: m,
      ...p
    },
    b
  ) {
    let w = Fr(d, { relative: p.relative }),
      v = bn(),
      C = H.useContext(Ni),
      { navigator: A, basename: _ } = H.useContext(wa),
      B = C != null && rv(w) && g === !0,
      M = A.encodeLocation ? A.encodeLocation(w).pathname : w.pathname,
      Q = v.pathname,
      P =
        C && C.navigation && C.navigation.location
          ? C.navigation.location.pathname
          : null;
    i ||
      ((Q = Q.toLowerCase()),
      (P = P ? P.toLowerCase() : null),
      (M = M.toLowerCase())),
      P && _ && (P = Ya(P, _) || P);
    const J = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let $ = Q === M || (!u && Q.startsWith(M) && Q.charAt(J) === "/"),
      W =
        P != null &&
        (P === M || (!u && P.startsWith(M) && P.charAt(M.length) === "/")),
      ae = { isActive: $, isPending: W, isTransitioning: B },
      I = $ ? l : void 0,
      de;
    typeof o == "function"
      ? (de = o(ae))
      : (de = [
          o,
          $ ? "active" : null,
          W ? "pending" : null,
          B ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Ee = typeof f == "function" ? f(ae) : f;
    return H.createElement(
      Ls,
      {
        ...p,
        "aria-current": I,
        className: de,
        ref: b,
        style: Ee,
        to: d,
        viewTransition: g,
      },
      typeof m == "function" ? m(ae) : m
    );
  });
  J1.displayName = "NavLink";
  var I1 = H.forwardRef(
    (
      {
        discover: n = "render",
        fetcherKey: l,
        navigate: i,
        reloadDocument: o,
        replace: u,
        state: f,
        method: d = Mi,
        action: g,
        onSubmit: m,
        relative: p,
        preventScrollReset: b,
        viewTransition: w,
        ...v
      },
      C
    ) => {
      let A = av(),
        _ = nv(g, { relative: p }),
        B = d.toLowerCase() === "get" ? "get" : "post",
        M = typeof g == "string" && jd.test(g),
        Q = (P) => {
          if ((m && m(P), P.defaultPrevented)) return;
          P.preventDefault();
          let J = P.nativeEvent.submitter,
            $ = J?.getAttribute("formmethod") || d;
          A(J || P.currentTarget, {
            fetcherKey: l,
            method: $,
            navigate: i,
            replace: u,
            state: f,
            relative: p,
            preventScrollReset: b,
            viewTransition: w,
          });
        };
      return H.createElement("form", {
        ref: C,
        method: B,
        action: _,
        onSubmit: o ? m : Q,
        ...v,
        "data-discover": !M && n === "render" ? "true" : void 0,
      });
    }
  );
  I1.displayName = "Form";
  function P1(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function qd(n) {
    let l = H.useContext(Kn);
    return xt(l, P1(n)), l;
  }
  function W1(
    n,
    {
      target: l,
      replace: i,
      state: o,
      preventScrollReset: u,
      relative: f,
      viewTransition: d,
    } = {}
  ) {
    let g = d1(),
      m = bn(),
      p = Fr(n, { relative: f });
    return H.useCallback(
      (b) => {
        if (z1(b, l)) {
          b.preventDefault();
          let w = i !== void 0 ? i : ks(m) === ks(p);
          g(n, {
            replace: w,
            state: o,
            preventScrollReset: u,
            relative: f,
            viewTransition: d,
          });
        }
      },
      [m, g, p, i, o, l, n, u, f, d]
    );
  }
  var ev = 0,
    tv = () => `__${String(++ev)}__`;
  function av() {
    let { router: n } = qd("useSubmit"),
      { basename: l } = H.useContext(wa),
      i = E1();
    return H.useCallback(
      async (o, u = {}) => {
        let {
          action: f,
          method: d,
          encType: g,
          formData: m,
          body: p,
        } = L1(o, l);
        if (u.navigate === !1) {
          let b = u.fetcherKey || tv();
          await n.fetch(b, i, u.action || f, {
            preventScrollReset: u.preventScrollReset,
            formData: m,
            body: p,
            formMethod: u.method || d,
            formEncType: u.encType || g,
            flushSync: u.flushSync,
          });
        } else
          await n.navigate(u.action || f, {
            preventScrollReset: u.preventScrollReset,
            formData: m,
            body: p,
            formMethod: u.method || d,
            formEncType: u.encType || g,
            replace: u.replace,
            state: u.state,
            fromRouteId: i,
            flushSync: u.flushSync,
            viewTransition: u.viewTransition,
          });
      },
      [n, l, i]
    );
  }
  function nv(n, { relative: l } = {}) {
    let { basename: i } = H.useContext(wa),
      o = H.useContext(xa);
    xt(o, "useFormAction must be used inside a RouteContext");
    let [u] = o.matches.slice(-1),
      f = { ...Fr(n || ".", { relative: l }) },
      d = bn();
    if (n == null) {
      f.search = d.search;
      let g = new URLSearchParams(f.search),
        m = g.getAll("index");
      if (m.some((b) => b === "")) {
        g.delete("index"),
          m.filter((w) => w).forEach((w) => g.append("index", w));
        let b = g.toString();
        f.search = b ? `?${b}` : "";
      }
    }
    return (
      (!n || n === ".") &&
        u.route.index &&
        (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
      i !== "/" && (f.pathname = f.pathname === "/" ? i : va([i, f.pathname])),
      ks(f)
    );
  }
  function rv(n, l = {}) {
    let i = H.useContext(zd);
    xt(
      i != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename: o } = qd("useViewTransitionState"),
      u = Fr(n, { relative: l.relative });
    if (!i.isTransitioning) return !1;
    let f = Ya(i.currentLocation.pathname, o) || i.currentLocation.pathname,
      d = Ya(i.nextLocation.pathname, o) || i.nextLocation.pathname;
    return Ri(u.pathname, d) != null || Ri(u.pathname, f) != null;
  }
  [...Y1];
  var lv = mf();
  const Yd = gt(lv),
    _s = "-",
    iv = (n) => {
      const l = sv(n),
        { conflictingClassGroups: i, conflictingClassGroupModifiers: o } = n;
      return {
        getClassGroupId: (d) => {
          const g = d.split(_s);
          return g[0] === "" && g.length !== 1 && g.shift(), Gd(g, l) || ov(d);
        },
        getConflictingClassGroupIds: (d, g) => {
          const m = i[d] || [];
          return g && o[d] ? [...m, ...o[d]] : m;
        },
      };
    },
    Gd = (n, l) => {
      if (n.length === 0) return l.classGroupId;
      const i = n[0],
        o = l.nextPart.get(i),
        u = o ? Gd(n.slice(1), o) : void 0;
      if (u) return u;
      if (l.validators.length === 0) return;
      const f = n.join(_s);
      return l.validators.find(({ validator: d }) => d(f))?.classGroupId;
    },
    Xd = /^\[(.+)\]$/,
    ov = (n) => {
      if (Xd.test(n)) {
        const l = Xd.exec(n)[1],
          i = l?.substring(0, l.indexOf(":"));
        if (i) return "arbitrary.." + i;
      }
    },
    sv = (n) => {
      const { theme: l, classGroups: i } = n,
        o = { nextPart: new Map(), validators: [] };
      for (const u in i) Us(i[u], o, u, l);
      return o;
    },
    Us = (n, l, i, o) => {
      n.forEach((u) => {
        if (typeof u == "string") {
          const f = u === "" ? l : Qd(l, u);
          f.classGroupId = i;
          return;
        }
        if (typeof u == "function") {
          if (uv(u)) {
            Us(u(o), l, i, o);
            return;
          }
          l.validators.push({ validator: u, classGroupId: i });
          return;
        }
        Object.entries(u).forEach(([f, d]) => {
          Us(d, Qd(l, f), i, o);
        });
      });
    },
    Qd = (n, l) => {
      let i = n;
      return (
        l.split(_s).forEach((o) => {
          i.nextPart.has(o) ||
            i.nextPart.set(o, { nextPart: new Map(), validators: [] }),
            (i = i.nextPart.get(o));
        }),
        i
      );
    },
    uv = (n) => n.isThemeGetter,
    cv = (n) => {
      if (n < 1) return { get: () => {}, set: () => {} };
      let l = 0,
        i = new Map(),
        o = new Map();
      const u = (f, d) => {
        i.set(f, d), l++, l > n && ((l = 0), (o = i), (i = new Map()));
      };
      return {
        get(f) {
          let d = i.get(f);
          if (d !== void 0) return d;
          if ((d = o.get(f)) !== void 0) return u(f, d), d;
        },
        set(f, d) {
          i.has(f) ? i.set(f, d) : u(f, d);
        },
      };
    },
    Hs = "!",
    Bs = ":",
    fv = Bs.length,
    dv = (n) => {
      const { prefix: l, experimentalParseClassName: i } = n;
      let o = (u) => {
        const f = [];
        let d = 0,
          g = 0,
          m = 0,
          p;
        for (let A = 0; A < u.length; A++) {
          let _ = u[A];
          if (d === 0 && g === 0) {
            if (_ === Bs) {
              f.push(u.slice(m, A)), (m = A + fv);
              continue;
            }
            if (_ === "/") {
              p = A;
              continue;
            }
          }
          _ === "["
            ? d++
            : _ === "]"
            ? d--
            : _ === "("
            ? g++
            : _ === ")" && g--;
        }
        const b = f.length === 0 ? u : u.substring(m),
          w = hv(b),
          v = w !== b,
          C = p && p > m ? p - m : void 0;
        return {
          modifiers: f,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: C,
        };
      };
      if (l) {
        const u = l + Bs,
          f = o;
        o = (d) =>
          d.startsWith(u)
            ? f(d.substring(u.length))
            : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: d,
                maybePostfixModifierPosition: void 0,
              };
      }
      if (i) {
        const u = o;
        o = (f) => i({ className: f, parseClassName: u });
      }
      return o;
    },
    hv = (n) =>
      n.endsWith(Hs)
        ? n.substring(0, n.length - 1)
        : n.startsWith(Hs)
        ? n.substring(1)
        : n,
    gv = (n) => {
      const l = Object.fromEntries(
        n.orderSensitiveModifiers.map((o) => [o, !0])
      );
      return (o) => {
        if (o.length <= 1) return o;
        const u = [];
        let f = [];
        return (
          o.forEach((d) => {
            d[0] === "[" || l[d]
              ? (u.push(...f.sort(), d), (f = []))
              : f.push(d);
          }),
          u.push(...f.sort()),
          u
        );
      };
    },
    mv = (n) => ({
      cache: cv(n.cacheSize),
      parseClassName: dv(n),
      sortModifiers: gv(n),
      ...iv(n),
    }),
    pv = /\s+/,
    bv = (n, l) => {
      const {
          parseClassName: i,
          getClassGroupId: o,
          getConflictingClassGroupIds: u,
          sortModifiers: f,
        } = l,
        d = [],
        g = n.trim().split(pv);
      let m = "";
      for (let p = g.length - 1; p >= 0; p -= 1) {
        const b = g[p],
          {
            isExternal: w,
            modifiers: v,
            hasImportantModifier: C,
            baseClassName: A,
            maybePostfixModifierPosition: _,
          } = i(b);
        if (w) {
          m = b + (m.length > 0 ? " " + m : m);
          continue;
        }
        let B = !!_,
          M = o(B ? A.substring(0, _) : A);
        if (!M) {
          if (!B) {
            m = b + (m.length > 0 ? " " + m : m);
            continue;
          }
          if (((M = o(A)), !M)) {
            m = b + (m.length > 0 ? " " + m : m);
            continue;
          }
          B = !1;
        }
        const Q = f(v).join(":"),
          P = C ? Q + Hs : Q,
          J = P + M;
        if (d.includes(J)) continue;
        d.push(J);
        const $ = u(M, B);
        for (let W = 0; W < $.length; ++W) {
          const ae = $[W];
          d.push(P + ae);
        }
        m = b + (m.length > 0 ? " " + m : m);
      }
      return m;
    };
  function yv() {
    let n = 0,
      l,
      i,
      o = "";
    for (; n < arguments.length; )
      (l = arguments[n++]) && (i = Kd(l)) && (o && (o += " "), (o += i));
    return o;
  }
  const Kd = (n) => {
    if (typeof n == "string") return n;
    let l,
      i = "";
    for (let o = 0; o < n.length; o++)
      n[o] && (l = Kd(n[o])) && (i && (i += " "), (i += l));
    return i;
  };
  function vv(n, ...l) {
    let i,
      o,
      u,
      f = d;
    function d(m) {
      const p = l.reduce((b, w) => w(b), n());
      return (i = mv(p)), (o = i.cache.get), (u = i.cache.set), (f = g), g(m);
    }
    function g(m) {
      const p = o(m);
      if (p) return p;
      const b = bv(m, i);
      return u(m, b), b;
    }
    return function () {
      return f(yv.apply(null, arguments));
    };
  }
  const ct = (n) => {
      const l = (i) => i[n] || [];
      return (l.isThemeGetter = !0), l;
    },
    Zd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    $d = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    wv = /^\d+\/\d+$/,
    xv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Sv =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Ev = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    kv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Av =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Zn = (n) => wv.test(n),
    Oe = (n) => !!n && !Number.isNaN(Number(n)),
    Ga = (n) => !!n && Number.isInteger(Number(n)),
    Vs = (n) => n.endsWith("%") && Oe(n.slice(0, -1)),
    Sa = (n) => xv.test(n),
    Tv = () => !0,
    Cv = (n) => Sv.test(n) && !Ev.test(n),
    Fd = () => !1,
    Ov = (n) => kv.test(n),
    Rv = (n) => Av.test(n),
    Nv = (n) => !ie(n) && !oe(n),
    zv = (n) => $n(n, eh, Fd),
    ie = (n) => Zd.test(n),
    yn = (n) => $n(n, th, Cv),
    js = (n) => $n(n, Uv, Oe),
    Jd = (n) => $n(n, Pd, Fd),
    Mv = (n) => $n(n, Wd, Rv),
    Ui = (n) => $n(n, ah, Ov),
    oe = (n) => $d.test(n),
    Ir = (n) => Fn(n, th),
    Dv = (n) => Fn(n, Hv),
    Id = (n) => Fn(n, Pd),
    Lv = (n) => Fn(n, eh),
    _v = (n) => Fn(n, Wd),
    Hi = (n) => Fn(n, ah, !0),
    $n = (n, l, i) => {
      const o = Zd.exec(n);
      return o ? (o[1] ? l(o[1]) : i(o[2])) : !1;
    },
    Fn = (n, l, i = !1) => {
      const o = $d.exec(n);
      return o ? (o[1] ? l(o[1]) : i) : !1;
    },
    Pd = (n) => n === "position" || n === "percentage",
    Wd = (n) => n === "image" || n === "url",
    eh = (n) => n === "length" || n === "size" || n === "bg-size",
    th = (n) => n === "length",
    Uv = (n) => n === "number",
    Hv = (n) => n === "family-name",
    ah = (n) => n === "shadow",
    Bv = vv(() => {
      const n = ct("color"),
        l = ct("font"),
        i = ct("text"),
        o = ct("font-weight"),
        u = ct("tracking"),
        f = ct("leading"),
        d = ct("breakpoint"),
        g = ct("container"),
        m = ct("spacing"),
        p = ct("radius"),
        b = ct("shadow"),
        w = ct("inset-shadow"),
        v = ct("text-shadow"),
        C = ct("drop-shadow"),
        A = ct("blur"),
        _ = ct("perspective"),
        B = ct("aspect"),
        M = ct("ease"),
        Q = ct("animate"),
        P = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        J = () => [
          "center",
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "left-top",
          "top-right",
          "right-top",
          "bottom-right",
          "right-bottom",
          "bottom-left",
          "left-bottom",
        ],
        $ = () => [...J(), oe, ie],
        W = () => ["auto", "hidden", "clip", "visible", "scroll"],
        ae = () => ["auto", "contain", "none"],
        I = () => [oe, ie, m],
        de = () => [Zn, "full", "auto", ...I()],
        Ee = () => [Ga, "none", "subgrid", oe, ie],
        Re = () => ["auto", { span: ["full", Ga, oe, ie] }, Ga, oe, ie],
        ce = () => [Ga, "auto", oe, ie],
        Se = () => ["auto", "min", "max", "fr", oe, ie],
        Te = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
          "baseline",
          "center-safe",
          "end-safe",
        ],
        me = () => [
          "start",
          "end",
          "center",
          "stretch",
          "center-safe",
          "end-safe",
        ],
        N = () => ["auto", ...I()],
        K = () => [
          Zn,
          "auto",
          "full",
          "dvw",
          "dvh",
          "lvw",
          "lvh",
          "svw",
          "svh",
          "min",
          "max",
          "fit",
          ...I(),
        ],
        Y = () => [n, oe, ie],
        ge = () => [...J(), Id, Jd, { position: [oe, ie] }],
        S = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
        V = () => ["auto", "cover", "contain", Lv, zv, { size: [oe, ie] }],
        ee = () => [Vs, Ir, yn],
        Z = () => ["", "none", "full", p, oe, ie],
        re = () => ["", Oe, Ir, yn],
        Ce = () => ["solid", "dashed", "dotted", "double"],
        pe = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        ze = () => [Oe, Vs, Id, Jd],
        He = () => ["", "none", A, oe, ie],
        ot = () => ["none", Oe, oe, ie],
        Dt = () => ["none", Oe, oe, ie],
        Kt = () => [Oe, oe, ie],
        le = () => [Zn, "full", ...I()];
      return {
        cacheSize: 500,
        theme: {
          animate: ["spin", "ping", "pulse", "bounce"],
          aspect: ["video"],
          blur: [Sa],
          breakpoint: [Sa],
          color: [Tv],
          container: [Sa],
          "drop-shadow": [Sa],
          ease: ["in", "out", "in-out"],
          font: [Nv],
          "font-weight": [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
          ],
          "inset-shadow": [Sa],
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
          perspective: [
            "dramatic",
            "near",
            "normal",
            "midrange",
            "distant",
            "none",
          ],
          radius: [Sa],
          shadow: [Sa],
          spacing: ["px", Oe],
          text: [Sa],
          "text-shadow": [Sa],
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", Zn, ie, oe, B] }],
          container: ["container"],
          columns: [{ columns: [Oe, ie, oe, g] }],
          "break-after": [{ "break-after": P() }],
          "break-before": [{ "break-before": P() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          sr: ["sr-only", "not-sr-only"],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: $() }],
          overflow: [{ overflow: W() }],
          "overflow-x": [{ "overflow-x": W() }],
          "overflow-y": [{ "overflow-y": W() }],
          overscroll: [{ overscroll: ae() }],
          "overscroll-x": [{ "overscroll-x": ae() }],
          "overscroll-y": [{ "overscroll-y": ae() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: de() }],
          "inset-x": [{ "inset-x": de() }],
          "inset-y": [{ "inset-y": de() }],
          start: [{ start: de() }],
          end: [{ end: de() }],
          top: [{ top: de() }],
          right: [{ right: de() }],
          bottom: [{ bottom: de() }],
          left: [{ left: de() }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: [Ga, "auto", oe, ie] }],
          basis: [{ basis: [Zn, "full", "auto", g, ...I()] }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
          flex: [{ flex: [Oe, Zn, "auto", "initial", "none", ie] }],
          grow: [{ grow: ["", Oe, oe, ie] }],
          shrink: [{ shrink: ["", Oe, oe, ie] }],
          order: [{ order: [Ga, "first", "last", "none", oe, ie] }],
          "grid-cols": [{ "grid-cols": Ee() }],
          "col-start-end": [{ col: Re() }],
          "col-start": [{ "col-start": ce() }],
          "col-end": [{ "col-end": ce() }],
          "grid-rows": [{ "grid-rows": Ee() }],
          "row-start-end": [{ row: Re() }],
          "row-start": [{ "row-start": ce() }],
          "row-end": [{ "row-end": ce() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": Se() }],
          "auto-rows": [{ "auto-rows": Se() }],
          gap: [{ gap: I() }],
          "gap-x": [{ "gap-x": I() }],
          "gap-y": [{ "gap-y": I() }],
          "justify-content": [{ justify: [...Te(), "normal"] }],
          "justify-items": [{ "justify-items": [...me(), "normal"] }],
          "justify-self": [{ "justify-self": ["auto", ...me()] }],
          "align-content": [{ content: ["normal", ...Te()] }],
          "align-items": [{ items: [...me(), { baseline: ["", "last"] }] }],
          "align-self": [
            { self: ["auto", ...me(), { baseline: ["", "last"] }] },
          ],
          "place-content": [{ "place-content": Te() }],
          "place-items": [{ "place-items": [...me(), "baseline"] }],
          "place-self": [{ "place-self": ["auto", ...me()] }],
          p: [{ p: I() }],
          px: [{ px: I() }],
          py: [{ py: I() }],
          ps: [{ ps: I() }],
          pe: [{ pe: I() }],
          pt: [{ pt: I() }],
          pr: [{ pr: I() }],
          pb: [{ pb: I() }],
          pl: [{ pl: I() }],
          m: [{ m: N() }],
          mx: [{ mx: N() }],
          my: [{ my: N() }],
          ms: [{ ms: N() }],
          me: [{ me: N() }],
          mt: [{ mt: N() }],
          mr: [{ mr: N() }],
          mb: [{ mb: N() }],
          ml: [{ ml: N() }],
          "space-x": [{ "space-x": I() }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": I() }],
          "space-y-reverse": ["space-y-reverse"],
          size: [{ size: K() }],
          w: [{ w: [g, "screen", ...K()] }],
          "min-w": [{ "min-w": [g, "screen", "none", ...K()] }],
          "max-w": [
            {
              "max-w": [g, "screen", "none", "prose", { screen: [d] }, ...K()],
            },
          ],
          h: [{ h: ["screen", "lh", ...K()] }],
          "min-h": [{ "min-h": ["screen", "lh", "none", ...K()] }],
          "max-h": [{ "max-h": ["screen", "lh", ...K()] }],
          "font-size": [{ text: ["base", i, Ir, yn] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [{ font: [o, oe, js] }],
          "font-stretch": [
            {
              "font-stretch": [
                "ultra-condensed",
                "extra-condensed",
                "condensed",
                "semi-condensed",
                "normal",
                "semi-expanded",
                "expanded",
                "extra-expanded",
                "ultra-expanded",
                Vs,
                ie,
              ],
            },
          ],
          "font-family": [{ font: [Dv, ie, l] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          tracking: [{ tracking: [u, oe, ie] }],
          "line-clamp": [{ "line-clamp": [Oe, "none", oe, js] }],
          leading: [{ leading: [f, ...I()] }],
          "list-image": [{ "list-image": ["none", oe, ie] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "list-style-type": [{ list: ["disc", "decimal", "none", oe, ie] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "placeholder-color": [{ placeholder: Y() }],
          "text-color": [{ text: Y() }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...Ce(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: [Oe, "from-font", "auto", oe, yn] },
          ],
          "text-decoration-color": [{ decoration: Y() }],
          "underline-offset": [{ "underline-offset": [Oe, "auto", oe, ie] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: I() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                oe,
                ie,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", oe, ie] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: ge() }],
          "bg-repeat": [{ bg: S() }],
          "bg-size": [{ bg: V() }],
          "bg-image": [
            {
              bg: [
                "none",
                {
                  linear: [
                    { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                    Ga,
                    oe,
                    ie,
                  ],
                  radial: ["", oe, ie],
                  conic: [Ga, oe, ie],
                },
                _v,
                Mv,
              ],
            },
          ],
          "bg-color": [{ bg: Y() }],
          "gradient-from-pos": [{ from: ee() }],
          "gradient-via-pos": [{ via: ee() }],
          "gradient-to-pos": [{ to: ee() }],
          "gradient-from": [{ from: Y() }],
          "gradient-via": [{ via: Y() }],
          "gradient-to": [{ to: Y() }],
          rounded: [{ rounded: Z() }],
          "rounded-s": [{ "rounded-s": Z() }],
          "rounded-e": [{ "rounded-e": Z() }],
          "rounded-t": [{ "rounded-t": Z() }],
          "rounded-r": [{ "rounded-r": Z() }],
          "rounded-b": [{ "rounded-b": Z() }],
          "rounded-l": [{ "rounded-l": Z() }],
          "rounded-ss": [{ "rounded-ss": Z() }],
          "rounded-se": [{ "rounded-se": Z() }],
          "rounded-ee": [{ "rounded-ee": Z() }],
          "rounded-es": [{ "rounded-es": Z() }],
          "rounded-tl": [{ "rounded-tl": Z() }],
          "rounded-tr": [{ "rounded-tr": Z() }],
          "rounded-br": [{ "rounded-br": Z() }],
          "rounded-bl": [{ "rounded-bl": Z() }],
          "border-w": [{ border: re() }],
          "border-w-x": [{ "border-x": re() }],
          "border-w-y": [{ "border-y": re() }],
          "border-w-s": [{ "border-s": re() }],
          "border-w-e": [{ "border-e": re() }],
          "border-w-t": [{ "border-t": re() }],
          "border-w-r": [{ "border-r": re() }],
          "border-w-b": [{ "border-b": re() }],
          "border-w-l": [{ "border-l": re() }],
          "divide-x": [{ "divide-x": re() }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": re() }],
          "divide-y-reverse": ["divide-y-reverse"],
          "border-style": [{ border: [...Ce(), "hidden", "none"] }],
          "divide-style": [{ divide: [...Ce(), "hidden", "none"] }],
          "border-color": [{ border: Y() }],
          "border-color-x": [{ "border-x": Y() }],
          "border-color-y": [{ "border-y": Y() }],
          "border-color-s": [{ "border-s": Y() }],
          "border-color-e": [{ "border-e": Y() }],
          "border-color-t": [{ "border-t": Y() }],
          "border-color-r": [{ "border-r": Y() }],
          "border-color-b": [{ "border-b": Y() }],
          "border-color-l": [{ "border-l": Y() }],
          "divide-color": [{ divide: Y() }],
          "outline-style": [{ outline: [...Ce(), "none", "hidden"] }],
          "outline-offset": [{ "outline-offset": [Oe, oe, ie] }],
          "outline-w": [{ outline: ["", Oe, Ir, yn] }],
          "outline-color": [{ outline: Y() }],
          shadow: [{ shadow: ["", "none", b, Hi, Ui] }],
          "shadow-color": [{ shadow: Y() }],
          "inset-shadow": [{ "inset-shadow": ["none", w, Hi, Ui] }],
          "inset-shadow-color": [{ "inset-shadow": Y() }],
          "ring-w": [{ ring: re() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: Y() }],
          "ring-offset-w": [{ "ring-offset": [Oe, yn] }],
          "ring-offset-color": [{ "ring-offset": Y() }],
          "inset-ring-w": [{ "inset-ring": re() }],
          "inset-ring-color": [{ "inset-ring": Y() }],
          "text-shadow": [{ "text-shadow": ["none", v, Hi, Ui] }],
          "text-shadow-color": [{ "text-shadow": Y() }],
          opacity: [{ opacity: [Oe, oe, ie] }],
          "mix-blend": [
            { "mix-blend": [...pe(), "plus-darker", "plus-lighter"] },
          ],
          "bg-blend": [{ "bg-blend": pe() }],
          "mask-clip": [
            {
              "mask-clip": [
                "border",
                "padding",
                "content",
                "fill",
                "stroke",
                "view",
              ],
            },
            "mask-no-clip",
          ],
          "mask-composite": [
            { mask: ["add", "subtract", "intersect", "exclude"] },
          ],
          "mask-image-linear-pos": [{ "mask-linear": [Oe] }],
          "mask-image-linear-from-pos": [{ "mask-linear-from": ze() }],
          "mask-image-linear-to-pos": [{ "mask-linear-to": ze() }],
          "mask-image-linear-from-color": [{ "mask-linear-from": Y() }],
          "mask-image-linear-to-color": [{ "mask-linear-to": Y() }],
          "mask-image-t-from-pos": [{ "mask-t-from": ze() }],
          "mask-image-t-to-pos": [{ "mask-t-to": ze() }],
          "mask-image-t-from-color": [{ "mask-t-from": Y() }],
          "mask-image-t-to-color": [{ "mask-t-to": Y() }],
          "mask-image-r-from-pos": [{ "mask-r-from": ze() }],
          "mask-image-r-to-pos": [{ "mask-r-to": ze() }],
          "mask-image-r-from-color": [{ "mask-r-from": Y() }],
          "mask-image-r-to-color": [{ "mask-r-to": Y() }],
          "mask-image-b-from-pos": [{ "mask-b-from": ze() }],
          "mask-image-b-to-pos": [{ "mask-b-to": ze() }],
          "mask-image-b-from-color": [{ "mask-b-from": Y() }],
          "mask-image-b-to-color": [{ "mask-b-to": Y() }],
          "mask-image-l-from-pos": [{ "mask-l-from": ze() }],
          "mask-image-l-to-pos": [{ "mask-l-to": ze() }],
          "mask-image-l-from-color": [{ "mask-l-from": Y() }],
          "mask-image-l-to-color": [{ "mask-l-to": Y() }],
          "mask-image-x-from-pos": [{ "mask-x-from": ze() }],
          "mask-image-x-to-pos": [{ "mask-x-to": ze() }],
          "mask-image-x-from-color": [{ "mask-x-from": Y() }],
          "mask-image-x-to-color": [{ "mask-x-to": Y() }],
          "mask-image-y-from-pos": [{ "mask-y-from": ze() }],
          "mask-image-y-to-pos": [{ "mask-y-to": ze() }],
          "mask-image-y-from-color": [{ "mask-y-from": Y() }],
          "mask-image-y-to-color": [{ "mask-y-to": Y() }],
          "mask-image-radial": [{ "mask-radial": [oe, ie] }],
          "mask-image-radial-from-pos": [{ "mask-radial-from": ze() }],
          "mask-image-radial-to-pos": [{ "mask-radial-to": ze() }],
          "mask-image-radial-from-color": [{ "mask-radial-from": Y() }],
          "mask-image-radial-to-color": [{ "mask-radial-to": Y() }],
          "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
          "mask-image-radial-size": [
            {
              "mask-radial": [
                { closest: ["side", "corner"], farthest: ["side", "corner"] },
              ],
            },
          ],
          "mask-image-radial-pos": [{ "mask-radial-at": J() }],
          "mask-image-conic-pos": [{ "mask-conic": [Oe] }],
          "mask-image-conic-from-pos": [{ "mask-conic-from": ze() }],
          "mask-image-conic-to-pos": [{ "mask-conic-to": ze() }],
          "mask-image-conic-from-color": [{ "mask-conic-from": Y() }],
          "mask-image-conic-to-color": [{ "mask-conic-to": Y() }],
          "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
          "mask-origin": [
            {
              "mask-origin": [
                "border",
                "padding",
                "content",
                "fill",
                "stroke",
                "view",
              ],
            },
          ],
          "mask-position": [{ mask: ge() }],
          "mask-repeat": [{ mask: S() }],
          "mask-size": [{ mask: V() }],
          "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
          "mask-image": [{ mask: ["none", oe, ie] }],
          filter: [{ filter: ["", "none", oe, ie] }],
          blur: [{ blur: He() }],
          brightness: [{ brightness: [Oe, oe, ie] }],
          contrast: [{ contrast: [Oe, oe, ie] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", C, Hi, Ui] }],
          "drop-shadow-color": [{ "drop-shadow": Y() }],
          grayscale: [{ grayscale: ["", Oe, oe, ie] }],
          "hue-rotate": [{ "hue-rotate": [Oe, oe, ie] }],
          invert: [{ invert: ["", Oe, oe, ie] }],
          saturate: [{ saturate: [Oe, oe, ie] }],
          sepia: [{ sepia: ["", Oe, oe, ie] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none", oe, ie] }],
          "backdrop-blur": [{ "backdrop-blur": He() }],
          "backdrop-brightness": [{ "backdrop-brightness": [Oe, oe, ie] }],
          "backdrop-contrast": [{ "backdrop-contrast": [Oe, oe, ie] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": ["", Oe, oe, ie] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Oe, oe, ie] }],
          "backdrop-invert": [{ "backdrop-invert": ["", Oe, oe, ie] }],
          "backdrop-opacity": [{ "backdrop-opacity": [Oe, oe, ie] }],
          "backdrop-saturate": [{ "backdrop-saturate": [Oe, oe, ie] }],
          "backdrop-sepia": [{ "backdrop-sepia": ["", Oe, oe, ie] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": I() }],
          "border-spacing-x": [{ "border-spacing-x": I() }],
          "border-spacing-y": [{ "border-spacing-y": I() }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "",
                "all",
                "colors",
                "opacity",
                "shadow",
                "transform",
                "none",
                oe,
                ie,
              ],
            },
          ],
          "transition-behavior": [{ transition: ["normal", "discrete"] }],
          duration: [{ duration: [Oe, "initial", oe, ie] }],
          ease: [{ ease: ["linear", "initial", M, oe, ie] }],
          delay: [{ delay: [Oe, oe, ie] }],
          animate: [{ animate: ["none", Q, oe, ie] }],
          backface: [{ backface: ["hidden", "visible"] }],
          perspective: [{ perspective: [_, oe, ie] }],
          "perspective-origin": [{ "perspective-origin": $() }],
          rotate: [{ rotate: ot() }],
          "rotate-x": [{ "rotate-x": ot() }],
          "rotate-y": [{ "rotate-y": ot() }],
          "rotate-z": [{ "rotate-z": ot() }],
          scale: [{ scale: Dt() }],
          "scale-x": [{ "scale-x": Dt() }],
          "scale-y": [{ "scale-y": Dt() }],
          "scale-z": [{ "scale-z": Dt() }],
          "scale-3d": ["scale-3d"],
          skew: [{ skew: Kt() }],
          "skew-x": [{ "skew-x": Kt() }],
          "skew-y": [{ "skew-y": Kt() }],
          transform: [{ transform: [oe, ie, "", "none", "gpu", "cpu"] }],
          "transform-origin": [{ origin: $() }],
          "transform-style": [{ transform: ["3d", "flat"] }],
          translate: [{ translate: le() }],
          "translate-x": [{ "translate-x": le() }],
          "translate-y": [{ "translate-y": le() }],
          "translate-z": [{ "translate-z": le() }],
          "translate-none": ["translate-none"],
          accent: [{ accent: Y() }],
          appearance: [{ appearance: ["none", "auto"] }],
          "caret-color": [{ caret: Y() }],
          "color-scheme": [
            {
              scheme: [
                "normal",
                "dark",
                "light",
                "light-dark",
                "only-dark",
                "only-light",
              ],
            },
          ],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                oe,
                ie,
              ],
            },
          ],
          "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
          "pointer-events": [{ "pointer-events": ["auto", "none"] }],
          resize: [{ resize: ["none", "", "y", "x"] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": I() }],
          "scroll-mx": [{ "scroll-mx": I() }],
          "scroll-my": [{ "scroll-my": I() }],
          "scroll-ms": [{ "scroll-ms": I() }],
          "scroll-me": [{ "scroll-me": I() }],
          "scroll-mt": [{ "scroll-mt": I() }],
          "scroll-mr": [{ "scroll-mr": I() }],
          "scroll-mb": [{ "scroll-mb": I() }],
          "scroll-ml": [{ "scroll-ml": I() }],
          "scroll-p": [{ "scroll-p": I() }],
          "scroll-px": [{ "scroll-px": I() }],
          "scroll-py": [{ "scroll-py": I() }],
          "scroll-ps": [{ "scroll-ps": I() }],
          "scroll-pe": [{ "scroll-pe": I() }],
          "scroll-pt": [{ "scroll-pt": I() }],
          "scroll-pr": [{ "scroll-pr": I() }],
          "scroll-pb": [{ "scroll-pb": I() }],
          "scroll-pl": [{ "scroll-pl": I() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            {
              "will-change": [
                "auto",
                "scroll",
                "contents",
                "transform",
                oe,
                ie,
              ],
            },
          ],
          fill: [{ fill: ["none", ...Y()] }],
          "stroke-w": [{ stroke: [Oe, Ir, yn, js] }],
          stroke: [{ stroke: ["none", ...Y()] }],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-x",
            "border-w-y",
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-x",
            "border-color-y",
            "border-color-s",
            "border-color-e",
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          translate: ["translate-x", "translate-y", "translate-none"],
          "translate-none": [
            "translate",
            "translate-x",
            "translate-y",
            "translate-z",
          ],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
        orderSensitiveModifiers: [
          "*",
          "**",
          "after",
          "backdrop",
          "before",
          "details-content",
          "file",
          "first-letter",
          "first-line",
          "marker",
          "placeholder",
          "selection",
        ],
      };
    }),
    Vv = {
      neutral: {
        filled: "text-slate-900 bg-slate-100",
        stroke:
          "bg-white text-slate-900 outline outline-1 outline-offset-[-1px] outline-slate-200  hover:bg-slate-100",
        ghost:
          "bg-transparent text-slate-900 hover:border-slate-900 transition-colors duration-200",
      },
      blue: {
        filled: "text-white bg-blue-600",
        stroke:
          "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
        ghost:
          "bg-transparent text-blue-600 hover:border-blue-600 transition-colors duration-200",
      },
      red: {
        filled: "text-white bg-red-600",
        stroke: "bg-white text-red-600 border border-red-600 hover:bg-red-50",
        ghost:
          "bg-transparent text-red-600 hover:border-red-600 transition-colors duration-200",
      },
      green: {
        filled: "text-white bg-emerald-600",
        stroke:
          "bg-white text-emerald-600 border border-emerald-600 hover:bg-green-50",
        ghost:
          "bg-transparent text-emerald-600 hover:border-emerald-600 transition-colors duration-200",
      },
      yellow: {
        filled: "text-white bg-amber-600",
        stroke:
          "bg-white text-amber-600 border border-amber-600 hover:bg-amber-50",
        ghost:
          "bg-transparent text-amber-600 hover:border-amber-600 transition-colors duration-200",
      },
    },
    jv = {
      xs: "p-1.5 text-sm font-semibold",
      md: "p-2 text-sm font-semibold",
      lg: "p-2.5 text-base font-bold",
    },
    qv = {
      nano: "rounded-none",
      full: "rounded-full",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    Bi = (n) => {
      var {
          children: l,
          size: i = "md",
          variant: o = "blue",
          styles: u = "filled",
          rounded: f = "md",
          href: d,
          loading: g,
          loadingText: m = "Loading...",
          className: p,
          disabled: b,
        } = n,
        w = Zr(n, [
          "children",
          "size",
          "variant",
          "styles",
          "rounded",
          "href",
          "loading",
          "loadingText",
          "className",
          "disabled",
        ]);
      const v = Bv(
        Ae(
          "focus:outline-none transition-colors duration-200 ease-in-out text-sm leading-5 inline-flex items-center justify-center gap-1.5  hover:opacity-90",
          jv[i],
          Vv[o][u],
          qv[f],
          b &&
            "disabled:opacity-50 disabled:text-icon-soft-400 cursor-not-allowed"
        ),
        p
      );
      return d
        ? U.createElement(
            Ls,
            Object.assign({ to: b || g ? "#" : d, className: v }, w, {
              onClick: b || g ? (C) => C.preventDefault() : w.onClick,
            }),
            g ? m : l
          )
        : U.createElement(
            "button",
            Object.assign({ disabled: b || g, className: v }, w),
            g ? m : l
          );
    },
    Yv = {
      neutral: {
        ring: "checked:ring-neutral-600",
        bg: "bg-neutral-600",
        border: "checked:border-neutral-600",
        text: "text-neutral-600",
        accent: "accent-neutral-600",
      },
      red: {
        ring: "checked:ring-red-600",
        bg: "bg-red-600",
        border: "checked:border-red-600",
        text: "text-red-600",
        accent: "accent-red-600",
      },
      blue: {
        ring: "checked:ring-blue-600",
        bg: "bg-blue-600",
        border: "checked:border-blue-600",
        text: "text-blue-600",
        accent: "accent-blue-600",
      },
      green: {
        ring: "checked:ring-emerald-600",
        bg: "bg-emerald-600",
        border: "checked:border-emerald-600",
        text: "text-emerald-600",
        accent: "accent-emerald-600",
      },
      yellow: {
        ring: "checked:ring-amber-600",
        bg: "bg-amber-600",
        border: "checked:border-amber-600",
        text: "text-amber-600",
        accent: "accent-amber-600",
      },
    },
    Gv = {
      sm: { checkbox: "h-3 w-3", label: "text-xs", errorIcon: "h-2.5 w-2.5" },
      md: { checkbox: "h-4 w-4", label: "text-sm", errorIcon: "h-3 w-3" },
      lg: { checkbox: "h-5 w-5", label: "text-base", errorIcon: "h-3.5 w-3.5" },
    },
    Xv = `
  input[type="checkbox"]:checked {
    background-size: 85%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  }
`,
    Qv = { nano: "rounded-none", md: "rounded", full: "rounded-full" },
    Kv = H.forwardRef((n, l) => {
      var {
          label: i,
          variant: o = "blue",
          size: u = "md",
          rounded: f = "md",
          hasError: d = !1,
          errorMessage: g,
          checked: m,
        } = n,
        p = Zr(n, [
          "label",
          "variant",
          "size",
          "rounded",
          "hasError",
          "errorMessage",
          "checked",
        ]);
      const b = p?.id || "checkbox",
        w = Yv[o],
        v = Gv[u];
      return U.createElement(
        "div",
        { className: "w-full" },
        U.createElement("style", null, Xv),
        U.createElement(
          "div",
          { className: "relative flex items-start" },
          U.createElement(
            "div",
            { className: "flex h-5 items-center" },
            U.createElement(
              "input",
              Object.assign(
                {
                  id: b,
                  autoComplete: "off",
                  ref: l,
                  type: "checkbox",
                  checked: m,
                  className: Ae(
                    "mr-2 focus:ring-0 appearance-none border-2",
                    "relative cursor-pointer",
                    v.checkbox,
                    Qv[f],
                    m
                      ? [w.bg, "border-transparent"]
                      : d
                      ? "border-red-500"
                      : "border-gray-300 hover:border-gray-400"
                  ),
                },
                p
              )
            )
          ),
          i &&
            U.createElement(
              "div",
              { className: v.label },
              U.createElement(
                "label",
                {
                  htmlFor: b,
                  className: Ae(
                    "font-medium",
                    d ? "text-red-500" : "text-gray-700"
                  ),
                },
                i
              )
            )
        ),
        d &&
          g &&
          U.createElement(
            "div",
            { className: "mt-1 flex gap-1" },
            U.createElement(
              "div",
              { className: "flex h-4 w-4 items-center justify-center" },
              U.createElement(mt, {
                icon: Qn,
                className: Ae("text-red-500", v.errorIcon),
              })
            ),
            U.createElement(
              "span",
              { className: "text-xs text-red-500", id: `${b}-error` },
              g
            )
          )
      );
    });
  Kv.displayName = "Checkbox";
  function Zv({ content: n, placement: l, children: i, className: o }) {
    return U.createElement(
      "div",
      { tabIndex: -1, className: "group relative inline-block w-max" },
      i || U.createElement(mt, { icon: di, className: "text-gray-400" }),
      U.createElement(
        "div",
        {
          className: Ae(
            "invisible absolute z-50 flex items-center rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-lg group-hover:visible sm:group-focus-within:visible",
            {
              "right-0 mt-2": l === "bottom-left",
              "left-0 mt-2": l === "bottom-right",
              "left-1/2 mt-2 -translate-x-1/2 transform": l === "bottom-center",
              "right-full top-1/2 mr-2 -translate-y-1/2 transform":
                l === "left",
              "bottom-full left-1/2 mb-2 -translate-x-1/2 transform":
                l === "top",
              "left-full top-1/2 ml-2 -translate-y-1/2 transform":
                l === "right",
            },
            o
          ),
        },
        typeof n == "string"
          ? U.createElement(
              "p",
              {
                className:
                  "max-w-xs whitespace-pre-wrap break-words text-center text-xs font-semibold text-gray-700",
              },
              n
            )
          : n,
        U.createElement(
          "svg",
          {
            className: Ae("absolute h-4 text-white ", {
              "bottom-full right-0.5 rotate-180": l === "bottom-left",
              "bottom-full left-0.5 rotate-180": l === "bottom-right",
              "bottom-full left-1/2 -translate-x-1/2 rotate-180 transform":
                l === "bottom-center",
              "left-full -rotate-90": l === "left",
              "left-1/2 top-full -translate-x-1/2 transform": l === "top",
              "right-full rotate-90": l === "right",
            }),
            x: "0px",
            y: "0px",
            viewBox: "0 0 255 255",
          },
          U.createElement("polygon", {
            className: "fill-current stroke-gray-100 drop-shadow-xl",
            points: "0,0 127.5,127.5 255,0",
          })
        )
      )
    );
  }
  const nh = H.forwardRef((n, l) => {
    const {
        label: i,
        labelTooltip: o,
        value: u,
        onChange: f,
        hasError: d,
        errorMessage: g,
        name: m,
        append: p,
        prepend: b,
        inline: w,
        type: v,
        disabled: C,
        rows: A = 3,
      } = n,
      _ = Zr(n, [
        "label",
        "labelTooltip",
        "value",
        "onChange",
        "hasError",
        "errorMessage",
        "name",
        "append",
        "prepend",
        "inline",
        "type",
        "disabled",
        "rows",
      ]),
      [B, M] = H.useState(!1);
    return (
      H.useEffect(() => {
        l && "current" in l && l.current && l.current.focus();
      }, [l]),
      U.createElement(
        "div",
        { className: "flex w-full flex-col gap-1" },
        U.createElement(
          "div",
          {
            className: Ae("relative flex flex-col", {
              "items-center justify-between": w,
            }),
          },
          i &&
            U.createElement(
              "div",
              { className: "flex items-center gap-0.5 mb-1" },
              U.createElement(
                "label",
                {
                  htmlFor: m,
                  className: Ae(
                    "inline-flex items-center bg-white px-1 text-sm font-medium text-gray-700"
                  ),
                },
                typeof i == "string" && i.includes("*")
                  ? U.createElement(
                      U.Fragment,
                      null,
                      i.split("*")[0],
                      U.createElement(
                        "span",
                        { className: "text-red-400" },
                        "*"
                      )
                    )
                  : i
              ),
              o &&
                U.createElement(Zv, {
                  content: o.content,
                  placement: o.placement,
                  className: o.className,
                })
            ),
          U.createElement(
            "div",
            {
              className: Ae(
                "relative flex items-center rounded-md border px-3 shadow-sm hover:border-gray-400",
                {
                  "border-gray-300 focus-within:border-gray-500": !d,
                  "border-red-300 text-red-900 hover:border-red-500 focus:border-red-500 focus:outline-none":
                    d,
                  "border-transparent bg-weak-100 text-icon-soft-400": C,
                  "bg-white": !C,
                }
              ),
            },
            b &&
              U.createElement(
                "div",
                {
                  className:
                    "pointer-events-none inset-y-0 inline-flex cursor-pointer items-center pr-2",
                },
                U.createElement(
                  "span",
                  {
                    className: Ae("sm:text-sm", {
                      "group-focus-within:text-icon-sub-500 group-[&:not(:focus-within)]:hover:text-icon-sub-500":
                        !d,
                      "text-red-500": d,
                      "text-icon-disabled-300": C,
                      "text-icon-soft-400": !C && !d,
                    }),
                  },
                  b
                )
              ),
            v === "textarea"
              ? U.createElement(
                  "textarea",
                  Object.assign(
                    {
                      name: m,
                      value: u,
                      onChange: f,
                      disabled: C,
                      rows: A,
                      className: Ae(
                        "block w-full flex-1 appearance-none border-0 px-0 py-2 text-sm outline-none focus:border-none focus:ring-0 resize-none",
                        {
                          "placeholder-gray-400 group-focus-within:placeholder-gray-900 group-[&:not(:focus-within)]:hover:placeholder-gray-500":
                            !d,
                          "placeholder-red-300": d,
                        }
                      ),
                      ref: l,
                    },
                    _
                  )
                )
              : U.createElement(
                  "input",
                  Object.assign(
                    {
                      onWheel: (Q) => Q.currentTarget.blur(),
                      autoComplete: "off",
                      type: v === "password" ? (B ? "text" : "password") : v,
                      name: m,
                      value: u,
                      onChange: f,
                      disabled: C,
                      className: Ae(
                        "block w-full flex-1 appearance-none border-0 px-0 py-2 text-sm outline-none focus:border-none focus:ring-0",
                        {
                          "placeholder-gray-400 group-focus-within:placeholder-gray-900 group-[&:not(:focus-within)]:hover:placeholder-gray-500":
                            !d,
                          "placeholder-red-300": d,
                        }
                      ),
                      ref: l,
                    },
                    _
                  )
                ),
            (p || v === "password") &&
              U.createElement(
                "div",
                { className: "flex items-center gap-2" },
                p &&
                  U.createElement(
                    "div",
                    {
                      className:
                        "pointer-events-none inset-y-0 inline-flex items-center pl-2",
                    },
                    U.createElement(
                      "span",
                      {
                        className: Ae("text-sm", {
                          "text-red-400": d,
                          "text-icon-disabled-300": C,
                          "text-icon-disabled-400": !C && !d,
                        }),
                      },
                      p
                    )
                  ),
                v === "password" &&
                  U.createElement(
                    "div",
                    { className: "flex items-center" },
                    B
                      ? U.createElement(mt, {
                          icon: Ey,
                          onClick: () => {
                            M(!1);
                          },
                          className: Ae("h-5 w-5 cursor-pointer", {
                            "text-gray-400": !d,
                            "text-red-400": d,
                          }),
                        })
                      : U.createElement(mt, {
                          icon: wy,
                          className: Ae("h-5 w-5 cursor-pointer ", {
                            "text-gray-400": !d,
                            "text-red-400": d,
                          }),
                          onClick: () => {
                            M(!0);
                          },
                        })
                  )
              )
          )
        ),
        d &&
          U.createElement(
            "div",
            { className: "flex gap-1" },
            U.createElement(
              "div",
              { className: "flex h-4 w-4 items-center justify-center" },
              U.createElement(mt, {
                icon: Qn,
                className: "h-3 w-3 text-red-500",
              })
            ),
            U.createElement(
              "span",
              Object.assign({ className: "text-xs text-red-500" }, _),
              g
            )
          )
      )
    );
  });
  nh.displayName = "Input";
  var vn;
  (function (n) {
    (n.SM = "sm"),
      (n.MD = "md"),
      (n.LG = "lg"),
      (n.XL = "xl"),
      (n.FULL = "full");
  })(vn || (vn = {}));
  var Pr;
  (function (n) {
    (n.TOP = "top"), (n.CENTER = "center"), (n.BOTTOM = "bottom");
  })(Pr || (Pr = {}));
  var wn;
  (function (n) {
    (n.NONE = "none"),
      (n.SM = "sm"),
      (n.MD = "md"),
      (n.LG = "lg"),
      (n.FULL = "full");
  })(wn || (wn = {}));
  var Jn;
  (function (n) {
    (n.LEFT = "left"),
      (n.CENTER = "center"),
      (n.RIGHT = "right"),
      (n.STRETCH = "stretch");
  })(Jn || (Jn = {})),
    vn.SM + "",
    vn.MD + "",
    vn.LG + "",
    vn.XL + "",
    vn.FULL + "",
    Pr.TOP + "",
    Pr.CENTER + "",
    Pr.BOTTOM + "",
    wn.NONE + "",
    wn.SM + "",
    wn.MD + "",
    wn.LG + "",
    wn.FULL + "",
    Jn.LEFT + "",
    Jn.CENTER + "",
    Jn.RIGHT + "",
    Jn.STRETCH + "";
  const $v = {
      neutral: {
        ring: "checked:ring-neutral-600",
        bg: "bg-neutral-600",
        border: "checked:border-neutral-600",
        text: "text-neutral-600",
        accent: "accent-neutral-600",
      },
      red: {
        ring: "checked:ring-red-600",
        bg: "bg-red-600",
        border: "checked:border-red-600",
        text: "text-red-600",
        accent: "accent-red-600",
      },
      blue: {
        ring: "checked:ring-blue-600",
        bg: "bg-blue-600",
        border: "checked:border-blue-600",
        text: "text-blue-600",
        accent: "accent-blue-600",
      },
      yellow: {
        ring: "checked:ring-yellow-600",
        bg: "bg-yellow-600",
        border: "checked:border-yellow-600",
        text: "text-yellow-600",
        accent: "accent-yellow-600",
      },
      green: {
        ring: "checked:ring-green-600",
        bg: "bg-green-600",
        border: "checked:border-green-600",
        text: "text-green-600",
        accent: "accent-green-600",
      },
    },
    Fv = {
      sm: { radio: "h-3 w-3", label: "text-xs", errorIcon: "h-2.5 w-2.5" },
      md: { radio: "h-4 w-4", label: "text-sm", errorIcon: "h-3 w-3" },
      lg: { radio: "h-5 w-5", label: "text-base", errorIcon: "h-3.5 w-3.5" },
    },
    Jv = {
      ring: 'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[40%] after:h-[40%] after:rounded-full after:bg-white',
      check:
        'after:content-[""] after:absolute after:w-[70%] after:h-[70%] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-no-repeat after:bg-center after:bg-contain after:bg-[url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27white%27%20stroke-width=%274%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpolyline%20points=%2720%206%209%2017%204%2012%27%3E%3C/polyline%3E%3C/svg%3E")]',
    },
    Iv = { nano: "rounded-none", md: "rounded", full: "rounded-full" },
    Pv = H.forwardRef((n, l) => {
      var {
          label: i,
          color: o = "blue",
          size: u = "md",
          rounded: f = "full",
          checkStyle: d = "ring",
          hasError: g = !1,
          errorMessage: m,
          checked: p,
          className: b,
        } = n,
        w = Zr(n, [
          "label",
          "color",
          "size",
          "rounded",
          "checkStyle",
          "hasError",
          "errorMessage",
          "checked",
          "className",
        ]);
      const v = w?.id || "radio",
        C = $v[o],
        A = Fv[u];
      return U.createElement(
        "div",
        { className: Ae("w-full", b) },
        U.createElement(
          "div",
          { className: "relative flex items-start" },
          U.createElement(
            "div",
            { className: "flex h-5 items-center" },
            U.createElement(
              "input",
              Object.assign(
                {
                  id: v,
                  autoComplete: "off",
                  ref: l,
                  type: "radio",
                  checked: p,
                  className: Ae(
                    "mr-2 focus:ring-0 appearance-none border-2 relative cursor-pointer",
                    A.radio,
                    Iv[f],
                    p && Jv[d],
                    p
                      ? [C.bg, "border-transparent"]
                      : g
                      ? "border-red-500"
                      : "border-gray-300 hover:border-gray-400"
                  ),
                },
                w
              )
            )
          ),
          i &&
            U.createElement(
              "div",
              { className: A.label },
              U.createElement(
                "label",
                {
                  htmlFor: v,
                  className: Ae(
                    "font-medium",
                    g ? "text-red-500" : "text-gray-700"
                  ),
                },
                i
              )
            )
        ),
        g &&
          m &&
          U.createElement(
            "div",
            { className: "mt-1 flex gap-1" },
            U.createElement(
              "div",
              { className: "flex h-4 w-4 items-center justify-center" },
              U.createElement(mt, {
                icon: Qn,
                className: Ae("text-red-500", A.errorIcon),
              })
            ),
            U.createElement(
              "span",
              { className: "text-xs text-red-500", id: `${v}-error` },
              m
            )
          )
      );
    });
  Pv.displayName = "Radio";
  const qs = { sm: "text-xs h-8", md: "text-sm h-10" },
    Wv = { sm: "text-xs py-0.5 px-1.5 my-0.5", md: "text-xs py-0.5 px-2 my-1" },
    Vi = {
      blue: {
        selected: "bg-blue-100 text-blue-900",
        active: "bg-blue-600 text-white",
        icon: "text-blue-600",
        badge: "bg-blue-500 text-white",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      red: {
        selected: "bg-red-100 text-red-900",
        active: "bg-red-600 text-white",
        icon: "text-red-600",
        badge: "bg-red-500 text-white",
        button: "bg-red-600 hover:bg-red-700",
      },
      neutral: {
        selected: "bg-gray-100 text-gray-900",
        active: "bg-gray-600 text-white",
        icon: "text-gray-600",
        badge: "bg-gray-500 text-white",
        button: "bg-gray-600 hover:bg-gray-700",
      },
      yellow: {
        selected: "bg-amber-100 text-amber-900",
        active: "bg-amber-600 text-white",
        icon: "text-amber-600",
        badge: "bg-amber-500 text-white",
        button: "bg-amber-600 hover:bg-amber-700",
      },
      green: {
        selected: "bg-emerald-100 text-emerald-900",
        active: "bg-emerald-600 text-white",
        icon: "text-emerald-600",
        badge: "bg-emerald-500 text-white",
        button: "bg-emerald-600 hover:bg-emerald-700",
      },
    },
    ew = H.forwardRef(
      (
        {
          label: n,
          options: l,
          value: i,
          defaultValue: o,
          onChange: u,
          onClick: f,
          placeholder: d = "Seçiniz",
          hasError: g = !1,
          errorMessage: m,
          disabled: p = !1,
          className: b,
          size: w = "md",
          multiple: v = !1,
          maxItems: C,
          color: A = "blue",
          searchable: _ = !1,
          showTags: B = !0,
          allowAddItem: M = !1,
          addItemPlaceholder: Q = "Yeni öğe ekle...",
          onAddItem: P,
          dropDirection: J = "auto",
        },
        $
      ) => {
        const W = i !== void 0 ? i : o,
          [ae, I] = H.useState(!1),
          [de, Ee] = H.useState(""),
          [Re, ce] = H.useState(""),
          [Se, Te] = H.useState(J === "up"),
          me = H.useRef(null),
          N = H.useRef(null),
          K = H.useRef(null),
          Y = H.useRef(null),
          [ge, S] = H.useState(
            !v && typeof W == "string" ? l.find((le) => le.value === W) : void 0
          ),
          [V, ee] = H.useState(
            v && Array.isArray(W) ? l.filter((le) => W.includes(le.value)) : []
          ),
          Z =
            de.trim() === ""
              ? l
              : l.filter((le) =>
                  le.label.toLowerCase().includes(de.toLowerCase())
                );
        H.useEffect(() => {
          !v && typeof W == "string"
            ? S(l.find((le) => le.value === W))
            : v &&
              Array.isArray(W) &&
              ee(l.filter((le) => W.includes(le.value)));
        }, [W, l, v]),
          H.useEffect(() => {
            const le = (Pe) => {
              me.current &&
                !me.current.contains(Pe.target) &&
                (I(!1), Ee(""), ce(""));
            };
            return (
              document.addEventListener("mousedown", le),
              () => document.removeEventListener("mousedown", le)
            );
          }, []),
          H.useEffect(() => {
            ae && _ && K.current && K.current.focus();
          }, [ae, _]),
          H.useEffect(() => {
            if (ae && J === "auto" && me.current && N.current) {
              const le = me.current.getBoundingClientRect(),
                Pe = N.current.offsetHeight,
                rl = window.innerHeight - le.bottom < Pe && le.top > Pe;
              Te(rl);
            } else Te(J === "up");
          }, [ae, J]);
        const re = () => {
            p || (I(!ae), ae || (Ee(""), ce("")), f && f({}));
          },
          Ce = (le) => {
            if (!le.disabled)
              if (v) {
                const Pe = V.some((ft) => ft.value === le.value);
                let We;
                if (Pe) We = V.filter((ft) => ft.value !== le.value);
                else {
                  if (C && V.length >= C) return;
                  We = [...V, le];
                }
                ee(We),
                  u && u(We.map((ft) => ft.value)),
                  _ && (Ee(""), K.current && K.current.focus());
              } else S(le), I(!1), Ee(""), ce(""), u && u(le.value);
          },
          pe = (le, Pe) => {
            if ((Pe.stopPropagation(), !v)) return;
            const We = V.filter((ft) => ft.value !== le);
            ee(We), u && u(We.map((ft) => ft.value));
          },
          ze = (le) => {
            Ee(le.target.value);
          },
          He = (le) => {
            ce(le.target.value);
          },
          ot = () => {
            if (!Re.trim()) return;
            const Pe = {
              value: `new-item-${new Date().getTime()}`,
              label: Re.trim(),
            };
            if ((P && P(Re.trim()), !v)) S(Pe), u && u(Pe.value);
            else {
              if (C && V.length >= C) return;
              const We = [...V, Pe];
              ee(We), u && u(We.map((ft) => ft.value));
            }
            ce(""), v || I(!1);
          },
          Dt = (le) => {
            le.key === "Enter" && (le.preventDefault(), ot());
          },
          Kt = () => {
            if (v) {
              if (V.length > 0)
                return B
                  ? U.createElement(
                      "div",
                      { className: "flex flex-wrap gap-1.5 items-center" },
                      V.map((le) =>
                        U.createElement(
                          "div",
                          {
                            key: le.value,
                            className: Ae(
                              "inline-flex items-center rounded",
                              Wv[w],
                              Vi[A].selected,
                              { "opacity-50": p }
                            ),
                          },
                          le.icon &&
                            U.createElement(
                              "span",
                              { className: "mr-1" },
                              typeof le.icon == "string"
                                ? U.createElement(mt, {
                                    icon: le.icon,
                                    className: "h-4 w-4",
                                  })
                                : le.icon
                            ),
                          U.createElement(
                            "span",
                            { className: "max-w-[150px] truncate" },
                            le.label
                          ),
                          !p &&
                            U.createElement(
                              "button",
                              {
                                onClick: (Pe) => pe(le.value, Pe),
                                className: Ae(
                                  "ml-1 hover:opacity-80",
                                  A === "blue"
                                    ? "text-blue-700"
                                    : A === "red"
                                    ? "text-red-700"
                                    : "text-gray-700"
                                ),
                                type: "button",
                              },
                              U.createElement(mt, {
                                icon: Oy,
                                className: "h-3 w-3",
                              })
                            )
                        )
                      )
                    )
                  : U.createElement(
                      "div",
                      { className: "flex items-center gap-2" },
                      V.length === 1 &&
                        V[0].icon &&
                        U.createElement(
                          "span",
                          { className: "mr-1" },
                          typeof V[0].icon == "string"
                            ? U.createElement(mt, {
                                icon: V[0].icon,
                                className: "h-4 w-4",
                              })
                            : V[0].icon
                        ),
                      U.createElement(
                        "span",
                        { className: "truncate text-gray-700" },
                        V.length === 1 ? V[0].label : `${V.length} öğe seçildi`
                      )
                    );
            } else if (ge)
              return U.createElement(
                "div",
                { className: "flex items-center" },
                ge.icon &&
                  U.createElement(
                    "span",
                    { className: "mr-1" },
                    typeof ge.icon == "string"
                      ? U.createElement(mt, {
                          icon: ge.icon,
                          className: "h-4 w-4",
                        })
                      : ge.icon
                  ),
                U.createElement(
                  "span",
                  {
                    className: Ae("block truncate", {
                      "text-gray-500": !p,
                      "text-gray-400 opacity-75": p,
                    }),
                  },
                  ge.label
                )
              );
            return U.createElement(
              "span",
              { className: "block truncate text-gray-400" },
              d
            );
          };
        return U.createElement(
          "div",
          { className: Ae("inline-block", b), ref: $ },
          n &&
            U.createElement(
              "label",
              { className: "mb-1 block text-sm font-medium text-gray-700" },
              n
            ),
          U.createElement(
            "div",
            { ref: me, className: Ae("relative") },
            U.createElement(
              "div",
              {
                onClick: re,
                className: Ae(
                  "flex items-center justify-between rounded-md border px-3 overflow-hidden",
                  qs[w],
                  {
                    "border-gray-300 hover:border-gray-400 focus:border-gray-500":
                      !g && !p,
                    "border-red-300 text-red-900 hover:border-red-500": g && !p,
                    "cursor-not-allowed bg-gray-100 border-gray-300 opacity-75":
                      p,
                    "cursor-pointer": !p,
                  }
                ),
              },
              U.createElement(
                "div",
                {
                  className: Ae("flex items-center flex-grow overflow-hidden", {
                    "flex-wrap gap-1": v && B,
                  }),
                },
                Kt()
              ),
              U.createElement(
                "div",
                { className: "flex-shrink-0 ml-1" },
                U.createElement(mt, {
                  icon: by,
                  className: Ae("h-5 w-5", {
                    "text-gray-400": !g,
                    "text-red-500": g,
                    "transform rotate-180": ae,
                  }),
                })
              )
            ),
            ae &&
              U.createElement(
                "div",
                {
                  ref: N,
                  className: Ae(
                    "absolute z-50 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
                    "max-h-60 overflow-auto",
                    "min-w-full",
                    { "mt-1": !Se, "bottom-full mb-1": Se }
                  ),
                },
                _ &&
                  U.createElement(
                    "div",
                    {
                      className: "px-3 pt-2 pb-1 border-b border-gray-100",
                      onClick: (le) => le.stopPropagation(),
                    },
                    U.createElement(nh, {
                      type: "text",
                      value: de,
                      onChange: ze,
                      placeholder: "Ara...",
                      prepend: U.createElement(mt, {
                        icon: zy,
                        className: "h-4 w-4",
                      }),
                      hasError: !1,
                    })
                  ),
                U.createElement(
                  "ul",
                  {
                    className: Ae(
                      "max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none",
                      { "py-0": Z.length === 0 && !M }
                    ),
                  },
                  Z.length === 0 && !M
                    ? U.createElement(
                        "li",
                        { className: "px-3 py-2 text-gray-500 text-center" },
                        "Sonuç bulunamadı"
                      )
                    : U.createElement(
                        U.Fragment,
                        null,
                        Z.map((le, Pe) => {
                          const We = v
                            ? V.some((ft) => ft.value === le.value)
                            : ge?.value === le.value;
                          return U.createElement(
                            "li",
                            {
                              key: Pe,
                              onClick: () => Ce(le),
                              className: Ae(
                                "relative cursor-pointer select-none px-3 py-2 flex items-center",
                                qs[w].split(" ")[0],
                                {
                                  [Vi[A].selected]: We,
                                  "text-gray-900 hover:bg-gray-100":
                                    !We && !le.disabled,
                                  "opacity-50 cursor-not-allowed": le.disabled,
                                }
                              ),
                            },
                            le.icon &&
                              U.createElement(
                                "span",
                                { className: "mr-1" },
                                typeof le.icon == "string"
                                  ? U.createElement(mt, {
                                      icon: le.icon,
                                      className: "h-4 w-4",
                                    })
                                  : le.icon
                              ),
                            le.label,
                            We &&
                              U.createElement(
                                "span",
                                {
                                  className:
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                },
                                U.createElement(
                                  "svg",
                                  {
                                    className: Ae("h-5 w-5", Vi[A].icon),
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                  },
                                  U.createElement("path", {
                                    fillRule: "evenodd",
                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                    clipRule: "evenodd",
                                  })
                                )
                              )
                          );
                        }),
                        M &&
                          U.createElement(
                            "li",
                            {
                              className: "border-t border-gray-100 px-3 py-2",
                              onClick: (le) => le.stopPropagation(),
                            },
                            U.createElement(
                              "div",
                              { className: "flex items-center" },
                              U.createElement("input", {
                                ref: Y,
                                type: "text",
                                value: Re,
                                onChange: He,
                                onKeyDown: Dt,
                                placeholder: Q,
                                className: Ae(
                                  "w-full py-1 px-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-blue-500 focus:ring-blue-500",
                                  qs[w].split(" ")[0]
                                ),
                              }),
                              U.createElement(
                                "button",
                                {
                                  onClick: ot,
                                  disabled: !Re.trim(),
                                  className: Ae(
                                    "ml-2 p-1 rounded-full",
                                    Vi[A].button,
                                    {
                                      "opacity-50 cursor-not-allowed":
                                        !Re.trim(),
                                    }
                                  ),
                                },
                                U.createElement(mt, {
                                  icon: Hy,
                                  className: "h-4 w-4 text-white",
                                })
                              )
                            )
                          )
                      )
                )
              )
          ),
          g &&
            m &&
            U.createElement(
              "div",
              { className: "mt-1 flex gap-1" },
              U.createElement(
                "div",
                { className: "flex h-4 w-4 items-center justify-center" },
                U.createElement(mt, {
                  icon: Qn,
                  className: "h-3 w-3 text-red-500",
                })
              ),
              U.createElement("span", { className: "text-xs text-red-500" }, m)
            )
        );
      }
    );
  ew.displayName = "SelectBox";
  var rh;
  (function (n) {
    (n.ASC = "asc"), (n.DESC = "desc");
  })(rh || (rh = {}));
  const lh = {
      base: { base: "text-slate-900", stroke: "text-slate-600" },
      success: {
        base: "text-slate-900",
        stroke: "border-emerald-200 text-emerald-600 bg-emerald-50",
      },
      error: {
        base: "text-slate-900",
        stroke: "border-red-200  text-red-600 bg-red-50",
      },
      warning: {
        base: "text-slate-900",
        stroke: "border-amber-200 text-amber-600 bg-amber-50",
      },
      info: {
        base: "text-slate-900",
        stroke: "border-blue-200 text-blue-600 bg-blue-50",
      },
    },
    tw = { base: di, success: Ly, error: Qn, warning: Qn, info: di },
    aw = {
      base: "blue",
      success: "green",
      error: "red",
      warning: "yellow",
      info: "blue",
    },
    nw = {
      base: "text-neutral-900",
      success: "text-emerald-600",
      error: "text-red-600",
      warning: "text-amber-600",
      info: "text-blue-600",
    },
    rw = ({
      children: n,
      type: l = { variant: "info", styles: "base" },
      duration: i = 3e3,
      onClose: o,
      className: u,
      showAction: f = !0,
      showProgress: d = !0,
    }) => {
      const [g, m] = H.useState(0),
        b =
          f === !0
            ? { onClick: o, text: "Kapat" }
            : typeof f == "object"
            ? f
            : !1;
      H.useEffect(() => {
        if (i && i > 0) {
          const _ = setTimeout(() => {
            o?.();
          }, i);
          let B = null;
          if (d) {
            const M = Date.now();
            B = setInterval(() => {
              const P = Date.now() - M,
                J = Math.min((P / i) * 100, 100);
              m(J), J >= 100 && B && clearInterval(B);
            }, 50);
          }
          return () => {
            clearTimeout(_), B && clearInterval(B);
          };
        }
      }, [i, o, d]);
      const w = typeof l == "object",
        v = w && l.variant ? l.variant : "info",
        C = w && l.styles ? l.styles : "base",
        A = () => {
          if (!w || v === "base") return "bg-neutral-500";
          switch (v) {
            case "success":
              return "bg-emerald-500";
            case "error":
              return "bg-red-500";
            case "warning":
              return "bg-amber-500";
            case "info":
              return "bg-blue-500";
            default:
              return "bg-neutral-500";
          }
        };
      return U.createElement(
        "div",
        { className: "relative" },
        U.createElement(
          "div",
          {
            className: Ae(
              "w-96 p-4 shadow-md rounded-lg inline-flex justify-start items-center gap-2 overflow-hidden border",
              "h-14",
              w ? lh[v][C] : lh.base.base,
              u
            ),
          },
          l &&
            w &&
            U.createElement(mt, {
              icon: tw[v],
              className: Ae("w-6 h-6", C === "base" ? "text-slate-900" : nw[v]),
            }),
          U.createElement(
            "div",
            { className: "flex-1 text-sm font-medium leading-tight" },
            n
          ),
          b &&
            U.createElement(
              Bi,
              {
                size: "xs",
                variant: C === "base" ? "blue" : aw[v],
                onClick: () => {
                  b.onClick ? b.onClick() : o?.();
                },
              },
              b.text || "Kapat"
            )
        ),
        d &&
          i &&
          i > 0 &&
          U.createElement(
            "div",
            {
              className:
                "absolute overflow-hidden bottom-0 left-0 w-full rounded-b-lg",
            },
            U.createElement("div", {
              className: `h-1 transition-all ${A()}`,
              style: { width: `${g}%`, borderBottomLeftRadius: "0.5rem" },
            })
          )
      );
    };
  class lw {
    constructor() {
      (this.container = null),
        typeof document < "u" &&
          ((this.container = document.createElement("div")),
          (this.container.id = "toast-container"),
          (this.container.style.position = "fixed"),
          (this.container.style.top = "20px"),
          (this.container.style.right = "20px"),
          (this.container.style.zIndex = "9999"),
          (this.container.style.display = "flex"),
          (this.container.style.flexDirection = "column"),
          (this.container.style.gap = "10px"),
          document.body.appendChild(this.container));
    }
    createToastId() {
      return `toast-${Math.random().toString(36).substr(2, 9)}`;
    }
    show(l, i, o = {}) {
      if (!this.container) return;
      const u = this.createToastId(),
        f = document.createElement("div");
      (f.id = u), this.container.appendChild(f);
      const d = () => {
        Yd.unmountComponentAtNode(f),
          f.parentNode && f.parentNode.removeChild(f);
      };
      return (
        Yd.render(
          U.createElement(
            rw,
            {
              type: { variant: i, styles: "stroke" },
              duration: o.duration,
              onClose: d,
              showAction: o.showAction,
              showProgress: o.showProgress,
            },
            l
          ),
          f
        ),
        { close: d }
      );
    }
    success(l, i) {
      return this.show(l, "success", i);
    }
    error(l, i) {
      return this.show(l, "error", i);
    }
    warning(l, i) {
      return this.show(l, "warning", i);
    }
    info(l, i) {
      return this.show(l, "info", i);
    }
    base(l, i) {
      return this.show(l, "base", i);
    }
  }
  new lw();
  const iw = {
      sm: {
        title: "text-sm font-semibold",
        description: "text-sm font-normal",
      },
      md: {
        title: "text-lg font-semibold",
        description: "text-sm font-normal",
      },
      lg: {
        title: "text-2xl font-semibold",
        description: "text-base	 font-normal",
      },
    },
    ih = ({
      title: n,
      description: l,
      element: i,
      size: o = "lg",
      alignment: u = "left",
    }) => {
      const { title: f, description: d } = iw[o];
      return U.createElement(
        "div",
        { className: "flex" },
        U.createElement(
          "div",
          { className: `grid gap-1 text-${u}` },
          U.createElement("h2", { className: Ae(f, "text-gray-900") }, n),
          U.createElement("p", { className: Ae(d, "text-gray-600") }, l)
        ),
        i && U.createElement("div", { className: "ml-auto" }, i)
      );
    };
  var Wr = (n) => n.type === "checkbox",
    xn = (n) => n instanceof Date,
    Nt = (n) => n == null;
  const oh = (n) => typeof n == "object";
  var at = (n) => !Nt(n) && !Array.isArray(n) && oh(n) && !xn(n),
    ow = (n) =>
      at(n) && n.target
        ? Wr(n.target)
          ? n.target.checked
          : n.target.value
        : n,
    sw = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
    uw = (n, l) => n.has(sw(l)),
    cw = (n) => {
      const l = n.constructor && n.constructor.prototype;
      return at(l) && l.hasOwnProperty("isPrototypeOf");
    },
    Ys =
      typeof window < "u" &&
      typeof window.HTMLElement < "u" &&
      typeof document < "u";
  function pt(n) {
    let l;
    const i = Array.isArray(n),
      o = typeof FileList < "u" ? n instanceof FileList : !1;
    if (n instanceof Date) l = new Date(n);
    else if (!(Ys && (n instanceof Blob || o)) && (i || at(n)))
      if (((l = i ? [] : {}), !i && !cw(n))) l = n;
      else for (const u in n) n.hasOwnProperty(u) && (l[u] = pt(n[u]));
    else return n;
    return l;
  }
  var ji = (n) => /^\w*$/.test(n),
    lt = (n) => n === void 0,
    Gs = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
    Xs = (n) => Gs(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
    ue = (n, l, i) => {
      if (!l || !at(n)) return i;
      const o = (ji(l) ? [l] : Xs(l)).reduce((u, f) => (Nt(u) ? u : u[f]), n);
      return lt(o) || o === n ? (lt(n[l]) ? i : n[l]) : o;
    },
    ca = (n) => typeof n == "boolean",
    Fe = (n, l, i) => {
      let o = -1;
      const u = ji(l) ? [l] : Xs(l),
        f = u.length,
        d = f - 1;
      for (; ++o < f; ) {
        const g = u[o];
        let m = i;
        if (o !== d) {
          const p = n[g];
          m = at(p) || Array.isArray(p) ? p : isNaN(+u[o + 1]) ? {} : [];
        }
        if (g === "__proto__" || g === "constructor" || g === "prototype")
          return;
        (n[g] = m), (n = n[g]);
      }
    };
  const sh = { BLUR: "blur", FOCUS_OUT: "focusout" },
    ra = {
      onBlur: "onBlur",
      onChange: "onChange",
      onSubmit: "onSubmit",
      onTouched: "onTouched",
      all: "all",
    },
    Ea = {
      max: "max",
      min: "min",
      maxLength: "maxLength",
      minLength: "minLength",
      pattern: "pattern",
      required: "required",
      validate: "validate",
    },
    fw = U.createContext(null);
  fw.displayName = "HookFormContext";
  var dw = (n, l, i, o = !0) => {
    const u = { defaultValues: l._defaultValues };
    for (const f in n)
      Object.defineProperty(u, f, {
        get: () => {
          const d = f;
          return (
            l._proxyFormState[d] !== ra.all &&
              (l._proxyFormState[d] = !o || ra.all),
            n[d]
          );
        },
      });
    return u;
  };
  const hw = typeof window < "u" ? H.useLayoutEffect : H.useEffect;
  var fa = (n) => typeof n == "string",
    gw = (n, l, i, o, u) =>
      fa(n)
        ? (o && l.watch.add(n), ue(i, n, u))
        : Array.isArray(n)
        ? n.map((f) => (o && l.watch.add(f), ue(i, f)))
        : (o && (l.watchAll = !0), i),
    mw = (n, l, i, o, u) =>
      l
        ? {
            ...i[n],
            types: { ...(i[n] && i[n].types ? i[n].types : {}), [o]: u || !0 },
          }
        : {},
    el = (n) => (Array.isArray(n) ? n : [n]),
    uh = () => {
      let n = [];
      return {
        get observers() {
          return n;
        },
        next: (u) => {
          for (const f of n) f.next && f.next(u);
        },
        subscribe: (u) => (
          n.push(u),
          {
            unsubscribe: () => {
              n = n.filter((f) => f !== u);
            },
          }
        ),
        unsubscribe: () => {
          n = [];
        },
      };
    },
    Qs = (n) => Nt(n) || !oh(n);
  function Xa(n, l, i = new WeakSet()) {
    if (Qs(n) || Qs(l)) return n === l;
    if (xn(n) && xn(l)) return n.getTime() === l.getTime();
    const o = Object.keys(n),
      u = Object.keys(l);
    if (o.length !== u.length) return !1;
    if (i.has(n) || i.has(l)) return !0;
    i.add(n), i.add(l);
    for (const f of o) {
      const d = n[f];
      if (!u.includes(f)) return !1;
      if (f !== "ref") {
        const g = l[f];
        if (
          (xn(d) && xn(g)) ||
          (at(d) && at(g)) ||
          (Array.isArray(d) && Array.isArray(g))
            ? !Xa(d, g, i)
            : d !== g
        )
          return !1;
      }
    }
    return !0;
  }
  var Mt = (n) => at(n) && !Object.keys(n).length,
    Ks = (n) => n.type === "file",
    la = (n) => typeof n == "function",
    qi = (n) => {
      if (!Ys) return !1;
      const l = n ? n.ownerDocument : 0;
      return (
        n instanceof
        (l && l.defaultView ? l.defaultView.HTMLElement : HTMLElement)
      );
    },
    ch = (n) => n.type === "select-multiple",
    Zs = (n) => n.type === "radio",
    pw = (n) => Zs(n) || Wr(n),
    $s = (n) => qi(n) && n.isConnected;
  function bw(n, l) {
    const i = l.slice(0, -1).length;
    let o = 0;
    for (; o < i; ) n = lt(n) ? o++ : n[l[o++]];
    return n;
  }
  function yw(n) {
    for (const l in n) if (n.hasOwnProperty(l) && !lt(n[l])) return !1;
    return !0;
  }
  function it(n, l) {
    const i = Array.isArray(l) ? l : ji(l) ? [l] : Xs(l),
      o = i.length === 1 ? n : bw(n, i),
      u = i.length - 1,
      f = i[u];
    return (
      o && delete o[f],
      u !== 0 &&
        ((at(o) && Mt(o)) || (Array.isArray(o) && yw(o))) &&
        it(n, i.slice(0, -1)),
      n
    );
  }
  var fh = (n) => {
    for (const l in n) if (la(n[l])) return !0;
    return !1;
  };
  function Yi(n, l = {}) {
    const i = Array.isArray(n);
    if (at(n) || i)
      for (const o in n)
        Array.isArray(n[o]) || (at(n[o]) && !fh(n[o]))
          ? ((l[o] = Array.isArray(n[o]) ? [] : {}), Yi(n[o], l[o]))
          : Nt(n[o]) || (l[o] = !0);
    return l;
  }
  function dh(n, l, i) {
    const o = Array.isArray(n);
    if (at(n) || o)
      for (const u in n)
        Array.isArray(n[u]) || (at(n[u]) && !fh(n[u]))
          ? lt(l) || Qs(i[u])
            ? (i[u] = Array.isArray(n[u]) ? Yi(n[u], []) : { ...Yi(n[u]) })
            : dh(n[u], Nt(l) ? {} : l[u], i[u])
          : (i[u] = !Xa(n[u], l[u]));
    return i;
  }
  var tl = (n, l) => dh(n, l, Yi(l));
  const hh = { value: !1, isValid: !1 },
    gh = { value: !0, isValid: !0 };
  var mh = (n) => {
      if (Array.isArray(n)) {
        if (n.length > 1) {
          const l = n
            .filter((i) => i && i.checked && !i.disabled)
            .map((i) => i.value);
          return { value: l, isValid: !!l.length };
        }
        return n[0].checked && !n[0].disabled
          ? n[0].attributes && !lt(n[0].attributes.value)
            ? lt(n[0].value) || n[0].value === ""
              ? gh
              : { value: n[0].value, isValid: !0 }
            : gh
          : hh;
      }
      return hh;
    },
    ph = (n, { valueAsNumber: l, valueAsDate: i, setValueAs: o }) =>
      lt(n)
        ? n
        : l
        ? n === ""
          ? NaN
          : n && +n
        : i && fa(n)
        ? new Date(n)
        : o
        ? o(n)
        : n;
  const bh = { isValid: !1, value: null };
  var yh = (n) =>
    Array.isArray(n)
      ? n.reduce(
          (l, i) =>
            i && i.checked && !i.disabled ? { isValid: !0, value: i.value } : l,
          bh
        )
      : bh;
  function vh(n) {
    const l = n.ref;
    return Ks(l)
      ? l.files
      : Zs(l)
      ? yh(n.refs).value
      : ch(l)
      ? [...l.selectedOptions].map(({ value: i }) => i)
      : Wr(l)
      ? mh(n.refs).value
      : ph(lt(l.value) ? n.ref.value : l.value, n);
  }
  var vw = (n, l, i, o) => {
      const u = {};
      for (const f of n) {
        const d = ue(l, f);
        d && Fe(u, f, d._f);
      }
      return {
        criteriaMode: i,
        names: [...n],
        fields: u,
        shouldUseNativeValidation: o,
      };
    },
    Gi = (n) => n instanceof RegExp,
    al = (n) =>
      lt(n)
        ? n
        : Gi(n)
        ? n.source
        : at(n)
        ? Gi(n.value)
          ? n.value.source
          : n.value
        : n,
    wh = (n) => ({
      isOnSubmit: !n || n === ra.onSubmit,
      isOnBlur: n === ra.onBlur,
      isOnChange: n === ra.onChange,
      isOnAll: n === ra.all,
      isOnTouch: n === ra.onTouched,
    });
  const xh = "AsyncFunction";
  var ww = (n) =>
      !!n &&
      !!n.validate &&
      !!(
        (la(n.validate) && n.validate.constructor.name === xh) ||
        (at(n.validate) &&
          Object.values(n.validate).find((l) => l.constructor.name === xh))
      ),
    xw = (n) =>
      n.mount &&
      (n.required ||
        n.min ||
        n.max ||
        n.maxLength ||
        n.minLength ||
        n.pattern ||
        n.validate),
    Sh = (n, l, i) =>
      !i &&
      (l.watchAll ||
        l.watch.has(n) ||
        [...l.watch].some(
          (o) => n.startsWith(o) && /^\.\w+/.test(n.slice(o.length))
        ));
  const nl = (n, l, i, o) => {
    for (const u of i || Object.keys(n)) {
      const f = ue(n, u);
      if (f) {
        const { _f: d, ...g } = f;
        if (d) {
          if (d.refs && d.refs[0] && l(d.refs[0], u) && !o) return !0;
          if (d.ref && l(d.ref, d.name) && !o) return !0;
          if (nl(g, l)) break;
        } else if (at(g) && nl(g, l)) break;
      }
    }
  };
  function Eh(n, l, i) {
    const o = ue(n, i);
    if (o || ji(i)) return { error: o, name: i };
    const u = i.split(".");
    for (; u.length; ) {
      const f = u.join("."),
        d = ue(l, f),
        g = ue(n, f);
      if (d && !Array.isArray(d) && i !== f) return { name: i };
      if (g && g.type) return { name: f, error: g };
      if (g && g.root && g.root.type)
        return { name: `${f}.root`, error: g.root };
      u.pop();
    }
    return { name: i };
  }
  var Sw = (n, l, i, o) => {
      i(n);
      const { name: u, ...f } = n;
      return (
        Mt(f) ||
        Object.keys(f).length >= Object.keys(l).length ||
        Object.keys(f).find((d) => l[d] === (!o || ra.all))
      );
    },
    Ew = (n, l, i) =>
      !n ||
      !l ||
      n === l ||
      el(n).some(
        (o) => o && (i ? o === l : o.startsWith(l) || l.startsWith(o))
      ),
    kw = (n, l, i, o, u) =>
      u.isOnAll
        ? !1
        : !i && u.isOnTouch
        ? !(l || n)
        : (i ? o.isOnBlur : u.isOnBlur)
        ? !n
        : (i ? o.isOnChange : u.isOnChange)
        ? n
        : !0,
    Aw = (n, l) => !Gs(ue(n, l)).length && it(n, l),
    Tw = (n, l, i) => {
      const o = el(ue(n, i));
      return Fe(o, "root", l[i]), Fe(n, i, o), n;
    },
    Xi = (n) => fa(n);
  function kh(n, l, i = "validate") {
    if (Xi(n) || (Array.isArray(n) && n.every(Xi)) || (ca(n) && !n))
      return { type: i, message: Xi(n) ? n : "", ref: l };
  }
  var In = (n) => (at(n) && !Gi(n) ? n : { value: n, message: "" }),
    Ah = async (n, l, i, o, u, f) => {
      const {
          ref: d,
          refs: g,
          required: m,
          maxLength: p,
          minLength: b,
          min: w,
          max: v,
          pattern: C,
          validate: A,
          name: _,
          valueAsNumber: B,
          mount: M,
        } = n._f,
        Q = ue(i, _);
      if (!M || l.has(_)) return {};
      const P = g ? g[0] : d,
        J = (ce) => {
          u &&
            P.reportValidity &&
            (P.setCustomValidity(ca(ce) ? "" : ce || ""), P.reportValidity());
        },
        $ = {},
        W = Zs(d),
        ae = Wr(d),
        I = W || ae,
        de =
          ((B || Ks(d)) && lt(d.value) && lt(Q)) ||
          (qi(d) && d.value === "") ||
          Q === "" ||
          (Array.isArray(Q) && !Q.length),
        Ee = mw.bind(null, _, o, $),
        Re = (ce, Se, Te, me = Ea.maxLength, N = Ea.minLength) => {
          const K = ce ? Se : Te;
          $[_] = {
            type: ce ? me : N,
            message: K,
            ref: d,
            ...Ee(ce ? me : N, K),
          };
        };
      if (
        f
          ? !Array.isArray(Q) || !Q.length
          : m &&
            ((!I && (de || Nt(Q))) ||
              (ca(Q) && !Q) ||
              (ae && !mh(g).isValid) ||
              (W && !yh(g).isValid))
      ) {
        const { value: ce, message: Se } = Xi(m)
          ? { value: !!m, message: m }
          : In(m);
        if (
          ce &&
          (($[_] = {
            type: Ea.required,
            message: Se,
            ref: P,
            ...Ee(Ea.required, Se),
          }),
          !o)
        )
          return J(Se), $;
      }
      if (!de && (!Nt(w) || !Nt(v))) {
        let ce, Se;
        const Te = In(v),
          me = In(w);
        if (!Nt(Q) && !isNaN(Q)) {
          const N = d.valueAsNumber || (Q && +Q);
          Nt(Te.value) || (ce = N > Te.value),
            Nt(me.value) || (Se = N < me.value);
        } else {
          const N = d.valueAsDate || new Date(Q),
            K = (S) => new Date(new Date().toDateString() + " " + S),
            Y = d.type == "time",
            ge = d.type == "week";
          fa(Te.value) &&
            Q &&
            (ce = Y
              ? K(Q) > K(Te.value)
              : ge
              ? Q > Te.value
              : N > new Date(Te.value)),
            fa(me.value) &&
              Q &&
              (Se = Y
                ? K(Q) < K(me.value)
                : ge
                ? Q < me.value
                : N < new Date(me.value));
        }
        if (
          (ce || Se) &&
          (Re(!!ce, Te.message, me.message, Ea.max, Ea.min), !o)
        )
          return J($[_].message), $;
      }
      if ((p || b) && !de && (fa(Q) || (f && Array.isArray(Q)))) {
        const ce = In(p),
          Se = In(b),
          Te = !Nt(ce.value) && Q.length > +ce.value,
          me = !Nt(Se.value) && Q.length < +Se.value;
        if ((Te || me) && (Re(Te, ce.message, Se.message), !o))
          return J($[_].message), $;
      }
      if (C && !de && fa(Q)) {
        const { value: ce, message: Se } = In(C);
        if (
          Gi(ce) &&
          !Q.match(ce) &&
          (($[_] = {
            type: Ea.pattern,
            message: Se,
            ref: d,
            ...Ee(Ea.pattern, Se),
          }),
          !o)
        )
          return J(Se), $;
      }
      if (A) {
        if (la(A)) {
          const ce = await A(Q, i),
            Se = kh(ce, P);
          if (Se && (($[_] = { ...Se, ...Ee(Ea.validate, Se.message) }), !o))
            return J(Se.message), $;
        } else if (at(A)) {
          let ce = {};
          for (const Se in A) {
            if (!Mt(ce) && !o) break;
            const Te = kh(await A[Se](Q, i), P, Se);
            Te &&
              ((ce = { ...Te, ...Ee(Se, Te.message) }),
              J(Te.message),
              o && ($[_] = ce));
          }
          if (!Mt(ce) && (($[_] = { ref: P, ...ce }), !o)) return $;
        }
      }
      return J(!0), $;
    };
  const Cw = {
    mode: ra.onSubmit,
    reValidateMode: ra.onChange,
    shouldFocusError: !0,
  };
  function Ow(n = {}) {
    let l = { ...Cw, ...n },
      i = {
        submitCount: 0,
        isDirty: !1,
        isReady: !1,
        isLoading: la(l.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: l.errors || {},
        disabled: l.disabled || !1,
      },
      o = {},
      u =
        at(l.defaultValues) || at(l.values)
          ? pt(l.defaultValues || l.values) || {}
          : {},
      f = l.shouldUnregister ? {} : pt(u),
      d = { action: !1, mount: !1, watch: !1 },
      g = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
      },
      m,
      p = 0;
    const b = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    };
    let w = { ...b };
    const v = { array: uh(), state: uh() },
      C = l.criteriaMode === ra.all,
      A = (E) => (z) => {
        clearTimeout(p), (p = setTimeout(E, z));
      },
      _ = async (E) => {
        if (!l.disabled && (b.isValid || w.isValid || E)) {
          const z = l.resolver ? Mt((await ae()).errors) : await de(o, !0);
          z !== i.isValid && v.state.next({ isValid: z });
        }
      },
      B = (E, z) => {
        !l.disabled &&
          (b.isValidating ||
            b.validatingFields ||
            w.isValidating ||
            w.validatingFields) &&
          ((E || Array.from(g.mount)).forEach((q) => {
            q && (z ? Fe(i.validatingFields, q, z) : it(i.validatingFields, q));
          }),
          v.state.next({
            validatingFields: i.validatingFields,
            isValidating: !Mt(i.validatingFields),
          }));
      },
      M = (E, z = [], q, ne, te = !0, F = !0) => {
        if (ne && q && !l.disabled) {
          if (((d.action = !0), F && Array.isArray(ue(o, E)))) {
            const fe = q(ue(o, E), ne.argA, ne.argB);
            te && Fe(o, E, fe);
          }
          if (F && Array.isArray(ue(i.errors, E))) {
            const fe = q(ue(i.errors, E), ne.argA, ne.argB);
            te && Fe(i.errors, E, fe), Aw(i.errors, E);
          }
          if (
            (b.touchedFields || w.touchedFields) &&
            F &&
            Array.isArray(ue(i.touchedFields, E))
          ) {
            const fe = q(ue(i.touchedFields, E), ne.argA, ne.argB);
            te && Fe(i.touchedFields, E, fe);
          }
          (b.dirtyFields || w.dirtyFields) && (i.dirtyFields = tl(u, f)),
            v.state.next({
              name: E,
              isDirty: Re(E, z),
              dirtyFields: i.dirtyFields,
              errors: i.errors,
              isValid: i.isValid,
            });
        } else Fe(f, E, z);
      },
      Q = (E, z) => {
        Fe(i.errors, E, z), v.state.next({ errors: i.errors });
      },
      P = (E) => {
        (i.errors = E), v.state.next({ errors: i.errors, isValid: !1 });
      },
      J = (E, z, q, ne) => {
        const te = ue(o, E);
        if (te) {
          const F = ue(f, E, lt(q) ? ue(u, E) : q);
          lt(F) || (ne && ne.defaultChecked) || z
            ? Fe(f, E, z ? F : vh(te._f))
            : Te(E, F),
            d.mount && _();
        }
      },
      $ = (E, z, q, ne, te) => {
        let F = !1,
          fe = !1;
        const ke = { name: E };
        if (!l.disabled) {
          if (!q || ne) {
            (b.isDirty || w.isDirty) &&
              ((fe = i.isDirty),
              (i.isDirty = ke.isDirty = Re()),
              (F = fe !== ke.isDirty));
            const _e = Xa(ue(u, E), z);
            (fe = !!ue(i.dirtyFields, E)),
              _e ? it(i.dirtyFields, E) : Fe(i.dirtyFields, E, !0),
              (ke.dirtyFields = i.dirtyFields),
              (F = F || ((b.dirtyFields || w.dirtyFields) && fe !== !_e));
          }
          if (q) {
            const _e = ue(i.touchedFields, E);
            _e ||
              (Fe(i.touchedFields, E, q),
              (ke.touchedFields = i.touchedFields),
              (F = F || ((b.touchedFields || w.touchedFields) && _e !== q)));
          }
          F && te && v.state.next(ke);
        }
        return F ? ke : {};
      },
      W = (E, z, q, ne) => {
        const te = ue(i.errors, E),
          F = (b.isValid || w.isValid) && ca(z) && i.isValid !== z;
        if (
          (l.delayError && q
            ? ((m = A(() => Q(E, q))), m(l.delayError))
            : (clearTimeout(p),
              (m = null),
              q ? Fe(i.errors, E, q) : it(i.errors, E)),
          (q ? !Xa(te, q) : te) || !Mt(ne) || F)
        ) {
          const fe = {
            ...ne,
            ...(F && ca(z) ? { isValid: z } : {}),
            errors: i.errors,
            name: E,
          };
          (i = { ...i, ...fe }), v.state.next(fe);
        }
      },
      ae = async (E) => {
        B(E, !0);
        const z = await l.resolver(
          f,
          l.context,
          vw(E || g.mount, o, l.criteriaMode, l.shouldUseNativeValidation)
        );
        return B(E), z;
      },
      I = async (E) => {
        const { errors: z } = await ae(E);
        if (E)
          for (const q of E) {
            const ne = ue(z, q);
            ne ? Fe(i.errors, q, ne) : it(i.errors, q);
          }
        else i.errors = z;
        return z;
      },
      de = async (E, z, q = { valid: !0 }) => {
        for (const ne in E) {
          const te = E[ne];
          if (te) {
            const { _f: F, ...fe } = te;
            if (F) {
              const ke = g.array.has(F.name),
                _e = te._f && ww(te._f);
              _e && b.validatingFields && B([ne], !0);
              const Ke = await Ah(
                te,
                g.disabled,
                f,
                C,
                l.shouldUseNativeValidation && !z,
                ke
              );
              if (
                (_e && b.validatingFields && B([ne]),
                Ke[F.name] && ((q.valid = !1), z))
              )
                break;
              !z &&
                (ue(Ke, F.name)
                  ? ke
                    ? Tw(i.errors, Ke, F.name)
                    : Fe(i.errors, F.name, Ke[F.name])
                  : it(i.errors, F.name));
            }
            !Mt(fe) && (await de(fe, z, q));
          }
        }
        return q.valid;
      },
      Ee = () => {
        for (const E of g.unMount) {
          const z = ue(o, E);
          z &&
            (z._f.refs ? z._f.refs.every((q) => !$s(q)) : !$s(z._f.ref)) &&
            ze(E);
        }
        g.unMount = new Set();
      },
      Re = (E, z) => !l.disabled && (E && z && Fe(f, E, z), !Xa(S(), u)),
      ce = (E, z, q) =>
        gw(
          E,
          g,
          { ...(d.mount ? f : lt(z) ? u : fa(E) ? { [E]: z } : z) },
          q,
          z
        ),
      Se = (E) =>
        Gs(ue(d.mount ? f : u, E, l.shouldUnregister ? ue(u, E, []) : [])),
      Te = (E, z, q = {}) => {
        const ne = ue(o, E);
        let te = z;
        if (ne) {
          const F = ne._f;
          F &&
            (!F.disabled && Fe(f, E, ph(z, F)),
            (te = qi(F.ref) && Nt(z) ? "" : z),
            ch(F.ref)
              ? [...F.ref.options].forEach(
                  (fe) => (fe.selected = te.includes(fe.value))
                )
              : F.refs
              ? Wr(F.ref)
                ? F.refs.forEach((fe) => {
                    (!fe.defaultChecked || !fe.disabled) &&
                      (Array.isArray(te)
                        ? (fe.checked = !!te.find((ke) => ke === fe.value))
                        : (fe.checked = te === fe.value || !!te));
                  })
                : F.refs.forEach((fe) => (fe.checked = fe.value === te))
              : Ks(F.ref)
              ? (F.ref.value = "")
              : ((F.ref.value = te),
                F.ref.type || v.state.next({ name: E, values: pt(f) })));
        }
        (q.shouldDirty || q.shouldTouch) &&
          $(E, te, q.shouldTouch, q.shouldDirty, !0),
          q.shouldValidate && ge(E);
      },
      me = (E, z, q) => {
        for (const ne in z) {
          if (!z.hasOwnProperty(ne)) return;
          const te = z[ne],
            F = E + "." + ne,
            fe = ue(o, F);
          (g.array.has(E) || at(te) || (fe && !fe._f)) && !xn(te)
            ? me(F, te, q)
            : Te(F, te, q);
        }
      },
      N = (E, z, q = {}) => {
        const ne = ue(o, E),
          te = g.array.has(E),
          F = pt(z);
        Fe(f, E, F),
          te
            ? (v.array.next({ name: E, values: pt(f) }),
              (b.isDirty || b.dirtyFields || w.isDirty || w.dirtyFields) &&
                q.shouldDirty &&
                v.state.next({
                  name: E,
                  dirtyFields: tl(u, f),
                  isDirty: Re(E, F),
                }))
            : ne && !ne._f && !Nt(F)
            ? me(E, F, q)
            : Te(E, F, q),
          Sh(E, g) && v.state.next({ ...i }),
          v.state.next({ name: d.mount ? E : void 0, values: pt(f) });
      },
      K = async (E) => {
        d.mount = !0;
        const z = E.target;
        let q = z.name,
          ne = !0;
        const te = ue(o, q),
          F = (_e) => {
            ne =
              Number.isNaN(_e) ||
              (xn(_e) && isNaN(_e.getTime())) ||
              Xa(_e, ue(f, q, _e));
          },
          fe = wh(l.mode),
          ke = wh(l.reValidateMode);
        if (te) {
          let _e, Ke;
          const Pn = z.type ? vh(te._f) : ow(E),
            da = E.type === sh.BLUR || E.type === sh.FOCUS_OUT,
            Js =
              (!xw(te._f) && !l.resolver && !ue(i.errors, q) && !te._f.deps) ||
              kw(da, ue(i.touchedFields, q), i.isSubmitted, ke, fe),
            Qa = Sh(q, g, da);
          Fe(f, q, Pn),
            da
              ? (te._f.onBlur && te._f.onBlur(E), m && m(0))
              : te._f.onChange && te._f.onChange(E);
          const Ka = $(q, Pn, da),
            Ta = !Mt(Ka) || Qa;
          if (
            (!da && v.state.next({ name: q, type: E.type, values: pt(f) }), Js)
          )
            return (
              (b.isValid || w.isValid) &&
                (l.mode === "onBlur" ? da && _() : da || _()),
              Ta && v.state.next({ name: q, ...(Qa ? {} : Ka) })
            );
          if ((!da && Qa && v.state.next({ ...i }), l.resolver)) {
            const { errors: En } = await ae([q]);
            if ((F(Pn), ne)) {
              const kn = Eh(i.errors, o, q),
                Ki = Eh(En, o, kn.name || q);
              (_e = Ki.error), (q = Ki.name), (Ke = Mt(En));
            }
          } else
            B([q], !0),
              (_e = (
                await Ah(te, g.disabled, f, C, l.shouldUseNativeValidation)
              )[q]),
              B([q]),
              F(Pn),
              ne &&
                (_e
                  ? (Ke = !1)
                  : (b.isValid || w.isValid) && (Ke = await de(o, !0)));
          ne && (te._f.deps && ge(te._f.deps), W(q, Ke, _e, Ka));
        }
      },
      Y = (E, z) => {
        if (ue(i.errors, z) && E.focus) return E.focus(), 1;
      },
      ge = async (E, z = {}) => {
        let q, ne;
        const te = el(E);
        if (l.resolver) {
          const F = await I(lt(E) ? E : te);
          (q = Mt(F)), (ne = E ? !te.some((fe) => ue(F, fe)) : q);
        } else
          E
            ? ((ne = (
                await Promise.all(
                  te.map(async (F) => {
                    const fe = ue(o, F);
                    return await de(fe && fe._f ? { [F]: fe } : fe);
                  })
                )
              ).every(Boolean)),
              !(!ne && !i.isValid) && _())
            : (ne = q = await de(o));
        return (
          v.state.next({
            ...(!fa(E) || ((b.isValid || w.isValid) && q !== i.isValid)
              ? {}
              : { name: E }),
            ...(l.resolver || !E ? { isValid: q } : {}),
            errors: i.errors,
          }),
          z.shouldFocus && !ne && nl(o, Y, E ? te : g.mount),
          ne
        );
      },
      S = (E) => {
        const z = { ...(d.mount ? f : u) };
        return lt(E) ? z : fa(E) ? ue(z, E) : E.map((q) => ue(z, q));
      },
      V = (E, z) => ({
        invalid: !!ue((z || i).errors, E),
        isDirty: !!ue((z || i).dirtyFields, E),
        error: ue((z || i).errors, E),
        isValidating: !!ue(i.validatingFields, E),
        isTouched: !!ue((z || i).touchedFields, E),
      }),
      ee = (E) => {
        E && el(E).forEach((z) => it(i.errors, z)),
          v.state.next({ errors: E ? i.errors : {} });
      },
      Z = (E, z, q) => {
        const ne = (ue(o, E, { _f: {} })._f || {}).ref,
          te = ue(i.errors, E) || {},
          { ref: F, message: fe, type: ke, ..._e } = te;
        Fe(i.errors, E, { ..._e, ...z, ref: ne }),
          v.state.next({ name: E, errors: i.errors, isValid: !1 }),
          q && q.shouldFocus && ne && ne.focus && ne.focus();
      },
      re = (E, z) =>
        la(E)
          ? v.state.subscribe({ next: (q) => E(ce(void 0, z), q) })
          : ce(E, z, !0),
      Ce = (E) =>
        v.state.subscribe({
          next: (z) => {
            Ew(E.name, z.name, E.exact) &&
              Sw(z, E.formState || b, Zt, E.reRenderRoot) &&
              E.callback({ values: { ...f }, ...i, ...z });
          },
        }).unsubscribe,
      pe = (E) => (
        (d.mount = !0),
        (w = { ...w, ...E.formState }),
        Ce({ ...E, formState: w })
      ),
      ze = (E, z = {}) => {
        for (const q of E ? el(E) : g.mount)
          g.mount.delete(q),
            g.array.delete(q),
            z.keepValue || (it(o, q), it(f, q)),
            !z.keepError && it(i.errors, q),
            !z.keepDirty && it(i.dirtyFields, q),
            !z.keepTouched && it(i.touchedFields, q),
            !z.keepIsValidating && it(i.validatingFields, q),
            !l.shouldUnregister && !z.keepDefaultValue && it(u, q);
        v.state.next({ values: pt(f) }),
          v.state.next({ ...i, ...(z.keepDirty ? { isDirty: Re() } : {}) }),
          !z.keepIsValid && _();
      },
      He = ({ disabled: E, name: z }) => {
        ((ca(E) && d.mount) || E || g.disabled.has(z)) &&
          (E ? g.disabled.add(z) : g.disabled.delete(z));
      },
      ot = (E, z = {}) => {
        let q = ue(o, E);
        const ne = ca(z.disabled) || ca(l.disabled);
        return (
          Fe(o, E, {
            ...(q || {}),
            _f: {
              ...(q && q._f ? q._f : { ref: { name: E } }),
              name: E,
              mount: !0,
              ...z,
            },
          }),
          g.mount.add(E),
          q
            ? He({
                disabled: ca(z.disabled) ? z.disabled : l.disabled,
                name: E,
              })
            : J(E, !0, z.value),
          {
            ...(ne ? { disabled: z.disabled || l.disabled } : {}),
            ...(l.progressive
              ? {
                  required: !!z.required,
                  min: al(z.min),
                  max: al(z.max),
                  minLength: al(z.minLength),
                  maxLength: al(z.maxLength),
                  pattern: al(z.pattern),
                }
              : {}),
            name: E,
            onChange: K,
            onBlur: K,
            ref: (te) => {
              if (te) {
                ot(E, z), (q = ue(o, E));
                const F =
                    (lt(te.value) &&
                      te.querySelectorAll &&
                      te.querySelectorAll("input,select,textarea")[0]) ||
                    te,
                  fe = pw(F),
                  ke = q._f.refs || [];
                if (fe ? ke.find((_e) => _e === F) : F === q._f.ref) return;
                Fe(o, E, {
                  _f: {
                    ...q._f,
                    ...(fe
                      ? {
                          refs: [
                            ...ke.filter($s),
                            F,
                            ...(Array.isArray(ue(u, E)) ? [{}] : []),
                          ],
                          ref: { type: F.type, name: E },
                        }
                      : { ref: F }),
                  },
                }),
                  J(E, !1, void 0, F);
              } else
                (q = ue(o, E, {})),
                  q._f && (q._f.mount = !1),
                  (l.shouldUnregister || z.shouldUnregister) &&
                    !(uw(g.array, E) && d.action) &&
                    g.unMount.add(E);
            },
          }
        );
      },
      Dt = () => l.shouldFocusError && nl(o, Y, g.mount),
      Kt = (E) => {
        ca(E) &&
          (v.state.next({ disabled: E }),
          nl(
            o,
            (z, q) => {
              const ne = ue(o, q);
              ne &&
                ((z.disabled = ne._f.disabled || E),
                Array.isArray(ne._f.refs) &&
                  ne._f.refs.forEach((te) => {
                    te.disabled = ne._f.disabled || E;
                  }));
            },
            0,
            !1
          ));
      },
      le = (E, z) => async (q) => {
        let ne;
        q && (q.preventDefault && q.preventDefault(), q.persist && q.persist());
        let te = pt(f);
        if ((v.state.next({ isSubmitting: !0 }), l.resolver)) {
          const { errors: F, values: fe } = await ae();
          (i.errors = F), (te = pt(fe));
        } else await de(o);
        if (g.disabled.size) for (const F of g.disabled) it(te, F);
        if ((it(i.errors, "root"), Mt(i.errors))) {
          v.state.next({ errors: {} });
          try {
            await E(te, q);
          } catch (F) {
            ne = F;
          }
        } else z && (await z({ ...i.errors }, q)), Dt(), setTimeout(Dt);
        if (
          (v.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: Mt(i.errors) && !ne,
            submitCount: i.submitCount + 1,
            errors: i.errors,
          }),
          ne)
        )
          throw ne;
      },
      Pe = (E, z = {}) => {
        ue(o, E) &&
          (lt(z.defaultValue)
            ? N(E, pt(ue(u, E)))
            : (N(E, z.defaultValue), Fe(u, E, pt(z.defaultValue))),
          z.keepTouched || it(i.touchedFields, E),
          z.keepDirty ||
            (it(i.dirtyFields, E),
            (i.isDirty = z.defaultValue ? Re(E, pt(ue(u, E))) : Re())),
          z.keepError || (it(i.errors, E), b.isValid && _()),
          v.state.next({ ...i }));
      },
      We = (E, z = {}) => {
        const q = E ? pt(E) : u,
          ne = pt(q),
          te = Mt(E),
          F = te ? u : ne;
        if ((z.keepDefaultValues || (u = q), !z.keepValues)) {
          if (z.keepDirtyValues) {
            const fe = new Set([...g.mount, ...Object.keys(tl(u, f))]);
            for (const ke of Array.from(fe))
              ue(i.dirtyFields, ke) ? Fe(F, ke, ue(f, ke)) : N(ke, ue(F, ke));
          } else {
            if (Ys && lt(E))
              for (const fe of g.mount) {
                const ke = ue(o, fe);
                if (ke && ke._f) {
                  const _e = Array.isArray(ke._f.refs)
                    ? ke._f.refs[0]
                    : ke._f.ref;
                  if (qi(_e)) {
                    const Ke = _e.closest("form");
                    if (Ke) {
                      Ke.reset();
                      break;
                    }
                  }
                }
              }
            if (z.keepFieldsRef) for (const fe of g.mount) N(fe, ue(F, fe));
            else o = {};
          }
          (f = l.shouldUnregister ? (z.keepDefaultValues ? pt(u) : {}) : pt(F)),
            v.array.next({ values: { ...F } }),
            v.state.next({ values: { ...F } });
        }
        (g = {
          mount: z.keepDirtyValues ? g.mount : new Set(),
          unMount: new Set(),
          array: new Set(),
          disabled: new Set(),
          watch: new Set(),
          watchAll: !1,
          focus: "",
        }),
          (d.mount = !b.isValid || !!z.keepIsValid || !!z.keepDirtyValues),
          (d.watch = !!l.shouldUnregister),
          v.state.next({
            submitCount: z.keepSubmitCount ? i.submitCount : 0,
            isDirty: te
              ? !1
              : z.keepDirty
              ? i.isDirty
              : !!(z.keepDefaultValues && !Xa(E, u)),
            isSubmitted: z.keepIsSubmitted ? i.isSubmitted : !1,
            dirtyFields: te
              ? {}
              : z.keepDirtyValues
              ? z.keepDefaultValues && f
                ? tl(u, f)
                : i.dirtyFields
              : z.keepDefaultValues && E
              ? tl(u, E)
              : z.keepDirty
              ? i.dirtyFields
              : {},
            touchedFields: z.keepTouched ? i.touchedFields : {},
            errors: z.keepErrors ? i.errors : {},
            isSubmitSuccessful: z.keepIsSubmitSuccessful
              ? i.isSubmitSuccessful
              : !1,
            isSubmitting: !1,
          });
      },
      ft = (E, z) => We(la(E) ? E(f) : E, z),
      rl = (E, z = {}) => {
        const q = ue(o, E),
          ne = q && q._f;
        if (ne) {
          const te = ne.refs ? ne.refs[0] : ne.ref;
          te.focus &&
            (te.focus(), z.shouldSelect && la(te.select) && te.select());
        }
      },
      Zt = (E) => {
        i = { ...i, ...E };
      },
      ll = {
        control: {
          register: ot,
          unregister: ze,
          getFieldState: V,
          handleSubmit: le,
          setError: Z,
          _subscribe: Ce,
          _runSchema: ae,
          _focusError: Dt,
          _getWatch: ce,
          _getDirty: Re,
          _setValid: _,
          _setFieldArray: M,
          _setDisabledField: He,
          _setErrors: P,
          _getFieldArray: Se,
          _reset: We,
          _resetDefaultValues: () =>
            la(l.defaultValues) &&
            l.defaultValues().then((E) => {
              ft(E, l.resetOptions), v.state.next({ isLoading: !1 });
            }),
          _removeUnmounted: Ee,
          _disableForm: Kt,
          _subjects: v,
          _proxyFormState: b,
          get _fields() {
            return o;
          },
          get _formValues() {
            return f;
          },
          get _state() {
            return d;
          },
          set _state(E) {
            d = E;
          },
          get _defaultValues() {
            return u;
          },
          get _names() {
            return g;
          },
          set _names(E) {
            g = E;
          },
          get _formState() {
            return i;
          },
          get _options() {
            return l;
          },
          set _options(E) {
            l = { ...l, ...E };
          },
        },
        subscribe: pe,
        trigger: ge,
        register: ot,
        handleSubmit: le,
        watch: re,
        setValue: N,
        getValues: S,
        reset: ft,
        resetField: Pe,
        clearErrors: ee,
        unregister: ze,
        setError: Z,
        setFocus: rl,
        getFieldState: V,
      };
    return { ...ll, formControl: ll };
  }
  function Rw(n = {}) {
    const l = U.useRef(void 0),
      i = U.useRef(void 0),
      [o, u] = U.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: la(n.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: n.errors || {},
        disabled: n.disabled || !1,
        isReady: !1,
        defaultValues: la(n.defaultValues) ? void 0 : n.defaultValues,
      });
    if (!l.current)
      if (n.formControl)
        (l.current = { ...n.formControl, formState: o }),
          n.defaultValues &&
            !la(n.defaultValues) &&
            n.formControl.reset(n.defaultValues, n.resetOptions);
      else {
        const { formControl: d, ...g } = Ow(n);
        l.current = { ...g, formState: o };
      }
    const f = l.current.control;
    return (
      (f._options = n),
      hw(() => {
        const d = f._subscribe({
          formState: f._proxyFormState,
          callback: () => u({ ...f._formState }),
          reRenderRoot: !0,
        });
        return (
          u((g) => ({ ...g, isReady: !0 })), (f._formState.isReady = !0), d
        );
      }, [f]),
      U.useEffect(() => f._disableForm(n.disabled), [f, n.disabled]),
      U.useEffect(() => {
        n.mode && (f._options.mode = n.mode),
          n.reValidateMode && (f._options.reValidateMode = n.reValidateMode);
      }, [f, n.mode, n.reValidateMode]),
      U.useEffect(() => {
        n.errors && (f._setErrors(n.errors), f._focusError());
      }, [f, n.errors]),
      U.useEffect(() => {
        n.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
      }, [f, n.shouldUnregister]),
      U.useEffect(() => {
        if (f._proxyFormState.isDirty) {
          const d = f._getDirty();
          d !== o.isDirty && f._subjects.state.next({ isDirty: d });
        }
      }, [f, o.isDirty]),
      U.useEffect(() => {
        n.values && !Xa(n.values, i.current)
          ? (f._reset(n.values, {
              keepFieldsRef: !0,
              ...f._options.resetOptions,
            }),
            (i.current = n.values),
            u((d) => ({ ...d })))
          : f._resetDefaultValues();
      }, [f, n.values]),
      U.useEffect(() => {
        f._state.mount || (f._setValid(), (f._state.mount = !0)),
          f._state.watch &&
            ((f._state.watch = !1),
            f._subjects.state.next({ ...f._formState })),
          f._removeUnmounted();
      }),
      (l.current.formState = dw(o, f)),
      l.current
    );
  }
  function Th(n) {
    var l,
      i,
      o = "";
    if (typeof n == "string" || typeof n == "number") o += n;
    else if (typeof n == "object")
      if (Array.isArray(n)) {
        var u = n.length;
        for (l = 0; l < u; l++)
          n[l] && (i = Th(n[l])) && (o && (o += " "), (o += i));
      } else for (i in n) n[i] && (o && (o += " "), (o += i));
    return o;
  }
  function Fs() {
    for (var n, l, i = 0, o = "", u = arguments.length; i < u; i++)
      (n = arguments[i]) && (l = Th(n)) && (o && (o += " "), (o += l));
    return o;
  }
  class ka {}
  $e(ka, "VARIANT_CLASSES", {
    biggerText: ["efl-text-1", "efl-text-2", "efl-text-3"],
    lineHeight: [
      "efl-leading-normal",
      "efl-leading-relaxed",
      "efl-leading-loose",
    ],
    brightness: ["efl-brightness-low", "efl-brightness-high"],
    contrast: ["efl-contrast-low", "efl-contrast-high"],
    saturation: [
      "efl-saturation-100",
      "efl-saturation-200",
      "efl-saturation-300",
    ],
    speechReader: [
      "efl-speech-reader-1",
      "efl-speech-reader-2",
      "efl-speech-reader-3",
    ],
  }),
    $e(ka, "TOTAL_STEPS", {
      biggerText: 3,
      lineHeight: 3,
      brightness: 2,
      contrast: 2,
      saturation: 2,
      speechReader: 3,
    });
  const Nw = { 1: 1, 2: 1.5, 3: 2 },
    zw = {
      h1: 2.25,
      h2: 1.875,
      h3: 1.5,
      h4: 1.25,
      h5: 1.125,
      h6: 1,
      p: 1,
      span: 1,
      a: 1,
    };
  class Mw {
    constructor() {
      $e(this, "widgetId", "efl-acc-widget");
    }
    setTextSize(l) {
      document
        .querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a")
        .forEach((o) => {
          if (!this.isInWidget(o)) {
            const u = o.tagName.toLowerCase();
            if (l === 0) o.style.removeProperty("font-size");
            else {
              const f = Nw[l],
                d = zw[u],
                g = f * d;
              o.style.fontSize = `${g}rem`;
            }
          }
        });
    }
    isInWidget(l) {
      return !!l.closest(`#${this.widgetId}`);
    }
  }
  const Dw = new Mw(),
    Lw = (n) => {
      Dw.setTextSize(n);
    },
    _w = { 1: 1.5, 2: 1.75, 3: 2 },
    Uw = {
      h1: 1.2,
      h2: 1.2,
      h3: 1.3,
      h4: 1.3,
      h5: 1.4,
      h6: 1.4,
      p: 1,
      span: 1,
      a: 1,
    };
  class Hw {
    constructor() {
      $e(this, "widgetId", "efl-acc-widget");
    }
    setLineHeight(l) {
      document
        .querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a")
        .forEach((o) => {
          if (!this.isInWidget(o)) {
            const u = o.tagName.toLowerCase();
            if (l === 0) o.style.removeProperty("line-height");
            else {
              const f = _w[l],
                d = Uw[u],
                g = f * d;
              if (((o.style.lineHeight = g.toString()), u === "p")) {
                const m = g * 1.5;
                o.style.marginBottom = `${m}em`;
              }
            }
          }
        });
    }
    isInWidget(l) {
      return !!l.closest(`#${this.widgetId}`);
    }
  }
  const Bw = new Hw(),
    Vw = (n) => {
      console.log("Setting line height to step:", n), Bw.setLineHeight(n);
    };
  class jw {
    constructor() {
      $e(this, "widgetId", "efl-acc-widget");
      $e(this, "className", "efl-large-cursor");
      this.createStyleSheet();
    }
    createStyleSheet() {
      const l = document.createElement("style");
      (l.innerHTML = `
        /* Widget ve içeriği hariç tüm elementlere uygula */
        body.${this.className} > *:not(#${this.widgetId}),
        body.${this.className} > *:not(#${this.widgetId}) * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'%3E%3C!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --%3E%3Cpath fill='currentColor' d='M13.64 21.97a.99.99 0 0 1-1.33-.47l-2.18-4.74l-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1c.24 0 .47.09.64.23l.01-.01l11.49 9.64a1.001 1.001 0 0 1-.44 1.75l-3.16.62l2.2 4.73c.26.5.02 1.09-.48 1.32z'/%3E%3C/svg%3E"), pointer !important;
        }
  
        /* Widget'ı özellikle hariç tut */
        body.${this.className} #${this.widgetId},
        body.${this.className} #${this.widgetId} * {
          cursor: default !important;
        }
      `),
        document.head.appendChild(l);
    }
    setCursor(l) {
      l
        ? document.body.classList.add(this.className)
        : document.body.classList.remove(this.className);
    }
  }
  const qw = new jw(),
    Yw = (n) => {
      console.log("Setting large cursor:", n), qw.setCursor(n);
    };
  class Gw {
    constructor() {
      $e(this, "widgetId", "efl-acc-widget");
      $e(this, "className", "efl-hide-images");
      this.createStyleSheet();
    }
    createStyleSheet() {
      const l = document.createElement("style");
      (l.innerHTML = `
          /* Görüntüleri gizle ama erişilebilirliği ve boyutları koru */
          body.${this.className} img:not(#${this.widgetId} img),
          body.${this.className} picture:not(#${this.widgetId} picture),
          body.${this.className} svg:not(#${this.widgetId} svg),
          body.${this.className} video:not(#${this.widgetId} video),
          body.${this.className} canvas:not(#${this.widgetId} canvas),
          body.${this.className} [role="img"]:not(#${this.widgetId} [role="img"]) {
            position: relative !important;
            visibility: hidden !important;
            background: none !important;
            display: inline-block !important;
            /* Orijinal boyutları koru ama içeriği gizle */
            color: transparent !important;
            /* Ekran okuyucular için erişilebilirliği koru */
            clip: auto !important;
            clip-path: none !important;
          }
    
          /* Alt text görünürlüğünü sağla */
          body.${this.className} img:not(#${this.widgetId} img)::after,
          body.${this.className} [role="img"]:not(#${this.widgetId} [role="img"])::after {
            content: attr(alt);
            visibility: visible !important;
            display: block !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            padding: 0.5rem;
            border: 1px dashed #666;
            background: #f5f5f5;
            color: #333;
            font-style: italic;
            text-align: center;
            min-width: 100px;
            max-width: 100%;
            word-wrap: break-word;
            box-sizing: border-box !important;
            /* WCAG 2.2 kontrast gereksinimleri için */
            color: #333333;
            z-index: 1;
          }
  
          /* Arka plan görüntülerini gizle ama boyutları koru */
          body.${this.className} *:not(#${this.widgetId} *) {
            background-image: none !important;
          }
    
          /* SVG içeriğini gizle ama boyutları ve erişilebilirliği koru */
          body.${this.className} svg:not(#${this.widgetId} svg) {
            position: relative !important;
            visibility: hidden !important;
          }
          
          body.${this.className} svg:not(#${this.widgetId} svg)::after {
            content: attr(aria-label);
            visibility: visible !important;
            display: block !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            color: #333333;
            font-style: italic;
            padding: 0.5rem;
          }
        `),
        document.head.appendChild(l);
    }
    setImageVisibility(l) {
      l
        ? (document.body.classList.add(this.className),
          this.announceImageStatus(!0))
        : (document.body.classList.remove(this.className),
          this.announceImageStatus(!1));
    }
    announceImageStatus(l) {
      const i = document.createElement("div");
      i.setAttribute("role", "status"),
        i.setAttribute("aria-live", "polite"),
        (i.style.position = "absolute"),
        (i.style.width = "1px"),
        (i.style.height = "1px"),
        (i.style.padding = "0"),
        (i.style.margin = "-1px"),
        (i.style.overflow = "hidden"),
        (i.style.clip = "rect(0, 0, 0, 0)"),
        (i.style.whiteSpace = "nowrap"),
        (i.style.border = "0"),
        (i.textContent = l
          ? "Görüntüler gizlendi. Alt metinler görüntüleniyor."
          : "Görüntüler tekrar görünür yapıldı."),
        document.body.appendChild(i),
        setTimeout(() => i.remove(), 3e3);
    }
  }
  const Xw = new Gw(),
    Qw = (n) => {
      Xw.setImageVisibility(n);
    };
  class Sn {
    static updateBodyClass(l, i) {
      const o = document.body;
      i ? o.classList.add(l) : o.classList.remove(l);
    }
    static updateBodyClassStep(l) {
      const i = l.type;
      if (
        (ka.VARIANT_CLASSES[i].forEach((o) => {
          this.updateBodyClass(o, !1);
        }),
        l.step > 0 && l.step <= ka.TOTAL_STEPS[i])
      ) {
        const o = ka.VARIANT_CLASSES[i][l.step - 1];
        this.updateBodyClass(o, !0);
      }
    }
    static handleBionicFont(l, i) {
      if (
        (document.querySelectorAll("span[data-original-text]").forEach((o) => {
          const u = o.getAttribute("data-original-text");
          if (u !== null && o.parentNode) {
            const f = document.createTextNode(u);
            o.parentNode.replaceChild(f, o);
          }
        }),
        !l)
      ) {
        const o = (u) => {
          if (
            !(u.nodeType === Node.ELEMENT_NODE && u.closest("#efl-acc-root"))
          ) {
            if (u.nodeType === Node.TEXT_NODE && u.parentNode) {
              const f = u.textContent || "";
              if (f.trim().length > 0) {
                const g = f
                    .split(/(\s+)/)
                    .map((p) => {
                      if (/^\s+$/.test(p)) return p;
                      if (p.length === 0) return "";
                      const b = Math.ceil(p.length * 0.4),
                        w = p.slice(0, b),
                        v = p.slice(b);
                      return `<span><strong style="color: black; font-weight: bold;">${w}</strong>${v}</span>`;
                    })
                    .join(""),
                  m = document.createElement("span");
                (m.innerHTML = g),
                  m.setAttribute("data-original-text", f),
                  u.parentNode.replaceChild(m, u);
              }
            } else if (u.nodeType === Node.ELEMENT_NODE) {
              const f = u.tagName.toLowerCase();
              if (
                [
                  "script",
                  "style",
                  "noscript",
                  "iframe",
                  "canvas",
                  "svg",
                  "math",
                ].includes(f)
              )
                return;
              Array.from(u.childNodes).forEach((d) => o(d));
            }
          }
        };
        o(document.body);
      }
      i(!l), this.updateBodyClass("efl-bionic-font", !l);
    }
  }
  $e(Sn, "handleStep", (l, i) => {
    const o = l.type,
      u = l.step >= ka.TOTAL_STEPS[o] ? 0 : l.step + 1;
    i(o, { status: u !== 0, step: u, type: o, totalSteps: ka.TOTAL_STEPS[o] });
  });
  const Ch = { 1: "efl-contrast-low", 2: "efl-contrast-high" };
  class Kw {
    setContrastLevel(l) {
      this.removeAllContrastClasses(),
        l !== 0 &&
          (document.body.classList.add(Ch[l]),
          document.documentElement.setAttribute(
            "data-efl-contrast",
            l.toString()
          ));
    }
    removeAllContrastClasses() {
      Object.values(Ch).forEach((l) => {
        document.body.classList.remove(l);
      }),
        document.documentElement.removeAttribute("data-efl-contrast");
    }
  }
  const Zw = new Kw(),
    $w = (n) => {
      Zw.setContrastLevel(n);
    },
    Oh = { 1: "efl-brightness-low", 2: "efl-brightness-high" };
  class Fw {
    setBrightnessLevel(l) {
      this.removeAllBrightnessClasses(),
        l !== 0 &&
          (document.body.classList.add(Oh[l]),
          document.documentElement.setAttribute(
            "data-efl-brightness",
            l.toString()
          ));
    }
    removeAllBrightnessClasses() {
      Object.values(Oh).forEach((l) => {
        document.body.classList.remove(l);
      }),
        document.documentElement.removeAttribute("data-efl-brightness");
    }
  }
  const Jw = new Fw(),
    Iw = (n) => {
      Jw.setBrightnessLevel(n);
    },
    Rh = { 1: "efl-saturation-low", 2: "efl-saturation-high" };
  class Pw {
    setSaturationLevel(l) {
      this.removeAllSaturationClasses(),
        l !== 0 &&
          (document.body.classList.add(Rh[l]),
          document.documentElement.setAttribute(
            "data-efl-saturation",
            l.toString()
          ));
    }
    removeAllSaturationClasses() {
      Object.values(Rh).forEach((l) => {
        document.body.classList.remove(l);
      }),
        document.documentElement.removeAttribute("data-efl-saturation");
    }
  }
  const Ww = new Pw(),
    ex = (n) => {
      Ww.setSaturationLevel(n);
    };
  class tx {
    constructor() {
      $e(this, "topMask", null);
      $e(this, "bottomMask", null);
      $e(this, "isActive", !1);
      $e(this, "styleElement", null);
      $e(this, "updateMasks", (l) => {
        if (!this.topMask || !this.bottomMask) return;
        const i = l.clientY,
          u = 80 / 2;
        (this.topMask.style.height = `${Math.max(0, i - u)}px`),
          (this.bottomMask.style.height = `${Math.max(
            0,
            window.innerHeight - i - u
          )}px`);
      });
    }
    setReadingMask(l) {
      l ? this.create() : this.destroy();
    }
    create() {
      this.isActive ||
        (this.createStyles(),
        (this.topMask = this.createMaskElement("efl-reading-mask-top")),
        (this.bottomMask = this.createMaskElement("efl-reading-mask-bottom")),
        document.body.append(this.topMask, this.bottomMask),
        document.addEventListener("mousemove", this.updateMasks),
        (this.isActive = !0));
    }
    createStyles() {
      (this.styleElement = document.createElement("style")),
        (this.styleElement.textContent = `
        .efl-reading-mask-top {
             display: block !important;
            position: fixed;
            top: 0;
            bottom: auto;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: 0;
            pointer-events: none;
            background-color: rgba(0, 0, 0, .5);
            z-index: 100000000000000020000;
        }
        .efl-reading-mask-bottom {
           display: block !important;
            position: fixed;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: 0;
            pointer-events: none;
            background-color: rgba(0, 0, 0, .5);
            z-index: 100000000000000020000;
        }
      `),
        document.head.appendChild(this.styleElement);
    }
    createMaskElement(l) {
      const i = document.createElement("div");
      return (i.className = l), (i.style.height = "0px"), i;
    }
    destroy() {
      this.isActive &&
        (document.removeEventListener("mousemove", this.updateMasks),
        this.topMask?.remove(),
        this.bottomMask?.remove(),
        this.styleElement?.remove(),
        (this.topMask = null),
        (this.bottomMask = null),
        (this.styleElement = null),
        (this.isActive = !1));
    }
  }
  const ax = new tx(),
    nx = (n) => {
      ax.setReadingMask(n);
    };
  class rx {
    constructor() {
      $e(this, "guide", null);
      $e(this, "isActive", !1);
      $e(this, "styleElement", null);
      $e(this, "updateGuide", (l) => {
        this.guide && (this.guide.style.top = `${l.clientY}px`);
      });
    }
    setReadingGuide(l) {
      l ? this.create() : this.destroy();
    }
    create() {
      this.isActive ||
        (this.createStyles(),
        (this.guide = this.createGuideElement()),
        document.body.appendChild(this.guide),
        document.addEventListener("mousemove", this.updateGuide),
        (this.isActive = !0));
    }
    createStyles() {
      (this.styleElement = document.createElement("style")),
        (this.styleElement.textContent = `
        .efl-reading-guide {
           background: #000;
            width: 100% !important;
            min-width: 100% !important;
            top: 20px;
            left: 0;
            box-sizing: border-box;
            height: 12px !important;
            border: solid 3px #fff300;
            border-radius: 5px;
            position: absolute;
            z-index: 99998;
            display: block !important;
            pointer-events: none;
        }
      `),
        document.head.appendChild(this.styleElement);
    }
    createGuideElement() {
      const l = document.createElement("div");
      return (l.className = "efl-reading-guide"), (l.style.top = "20px"), l;
    }
    destroy() {
      this.isActive &&
        (document.removeEventListener("mousemove", this.updateGuide),
        this.guide?.remove(),
        this.styleElement?.remove(),
        (this.guide = null),
        (this.styleElement = null),
        (this.isActive = !1));
    }
  }
  const lx = new rx(),
    ix = (n) => {
      lx.setReadingGuide(n);
    };
  class ox {
    constructor() {
      $e(this, "isActive", !1);
      $e(this, "currentSpeed", 0);
      $e(this, "synthesis");
      $e(this, "currentUtterance", null);
      $e(this, "handleClick", (l) => {
        const i = l.target;
        if (this.isInWidget(i)) return;
        this.stopSpeaking();
        const o = this.extractText(i);
        o && o.trim().length > 0 && (this.speak(o), this.highlightElement(i));
      });
      this.synthesis = window.speechSynthesis;
    }
    setSpeechReader(l) {
      (this.currentSpeed = l), l === 0 ? this.deactivate() : this.activate();
    }
    activate() {
      this.isActive ||
        (document.addEventListener("click", this.handleClick),
        (this.isActive = !0),
        this.speak(
          "Sesli okuma etkinleştirildi. Okumak istediğiniz metne tıklayın."
        ));
    }
    deactivate() {
      this.isActive &&
        (document.removeEventListener("click", this.handleClick),
        this.stopSpeaking(),
        (this.isActive = !1),
        this.speak("Sesli okuma kapatıldı."));
    }
    extractText(l) {
      if (l.tagName === "INPUT" || l.tagName === "TEXTAREA") {
        const o = l;
        return o.value || o.placeholder || "";
      }
      if (l.tagName === "IMG") return l.alt || "Görsel";
      if (l.tagName === "BUTTON") return l.textContent?.trim() || "";
      let i = "";
      for (const o of l.childNodes)
        o.nodeType === Node.TEXT_NODE && (i += o.textContent || "");
      return !i.trim() && l.textContent && (i = l.textContent.trim()), i.trim();
    }
    speak(l) {
      !l ||
        l.length === 0 ||
        (this.stopSpeaking(),
        setTimeout(() => {
          this.currentUtterance = new SpeechSynthesisUtterance(l);
          const i = { 0: 1, 1: 0.7, 2: 1, 3: 1.3 };
          (this.currentUtterance.rate = i[this.currentSpeed]),
            (this.currentUtterance.pitch = 1),
            (this.currentUtterance.volume = 1);
          const u = this.synthesis
            .getVoices()
            .find((f) => f.lang.startsWith("tr") || f.lang.startsWith("TR"));
          u && (this.currentUtterance.voice = u),
            (this.currentUtterance.onend = () => {
              this.removeHighlight();
            }),
            (this.currentUtterance.onerror = () => {
              this.removeHighlight();
            }),
            this.synthesis.speak(this.currentUtterance);
        }, 50));
    }
    stopSpeaking() {
      (this.synthesis.speaking || this.synthesis.pending) &&
        this.synthesis.cancel(),
        this.currentUtterance &&
          ((this.currentUtterance.onend = null),
          (this.currentUtterance.onerror = null),
          (this.currentUtterance = null)),
        this.removeHighlight();
    }
    highlightElement(l) {
      this.removeHighlight(),
        (l.style.outline = "3px solid #ff6b35"),
        (l.style.outlineOffset = "2px"),
        l.setAttribute("data-speech-highlight", "true");
    }
    removeHighlight() {
      document.querySelectorAll("[data-speech-highlight]").forEach((i) => {
        (i.style.outline = ""),
          (i.style.outlineOffset = ""),
          i.removeAttribute("data-speech-highlight");
      });
    }
    isInWidget(l) {
      return !!l.closest("#efl-acc-widget");
    }
    changeSpeed(l) {
      this.setSpeechReader(l);
    }
    stop() {
      this.stopSpeaking();
    }
  }
  const sx = new ox(),
    ux = (n) => {
      sx.setSpeechReader(n);
    },
    Aa = class Aa {
      static createStyles() {
        this.styleElement ||
          ((this.styleElement = document.createElement("style")),
          (this.styleElement.textContent = `
      .custom-tooltip {
        position: fixed;
        background: #fff;
        color: white;
        padding: 16px 20px;
        border-radius: 5px;
        font-size: 19px;
        font-weight: 500;
        z-index: 10000;
        pointer-events: none;
        line-height: 1.4;
        word-wrap: break-word;
        border: 3px solid;
        color: #000;
      }
      
    `),
          document.head.appendChild(this.styleElement));
      }
      static show(l) {
        const i = l.target,
          o = i.getAttribute("alt");
        if (o && o.trim()) {
          this.createStyles();
          const u = document.createElement("div");
          (u.className = "custom-tooltip"),
            (u.textContent = o),
            document.body.appendChild(u);
          const f = (g) => {
              const b = u.getBoundingClientRect();
              let w = g.clientX + 10,
                v = g.clientY + 30;
              const C = 10;
              w + b.width > window.innerWidth - C &&
                (w = g.clientX - b.width - 10),
                v + b.height > window.innerHeight - C &&
                  (v = g.clientY - b.height - 30),
                w < C && (w = C),
                v < C && (v = g.clientY + 30),
                (u.style.left = w + "px"),
                (u.style.top = v + "px");
            },
            d = (g) => f(g);
          i.addEventListener("mousemove", d),
            f(l),
            (u._mouseMoveHandler = d),
            (u._element = i);
        }
      }
      static hide() {
        document.querySelectorAll(".custom-tooltip").forEach((i) => {
          const o = i._element,
            u = i._mouseMoveHandler;
          o && u && o.removeEventListener("mousemove", u), i.remove();
        });
      }
      static removeListeners() {
        document.body
          .querySelectorAll('img[alt], area[alt], input[type="image"][alt]')
          .forEach((i) => {
            const o = i._showTooltipHandler;
            o &&
              (i.removeEventListener("mouseover", o),
              i.removeEventListener("mouseout", Aa.hide),
              delete i._showTooltipHandler);
          }),
          Aa.hide();
      }
      static init() {
        Aa.removeListeners(),
          document.body
            .querySelectorAll('img[alt], area[alt], input[type="image"][alt]')
            .forEach((i) => {
              const o = (u) => Aa.show(u);
              i.addEventListener("mouseover", o),
                i.addEventListener("mouseout", Aa.hide),
                (i._showTooltipHandler = o);
            });
      }
      static cleanup() {
        Aa.removeListeners(),
          this.styleElement &&
            (this.styleElement.remove(), (this.styleElement = null));
      }
    };
  $e(Aa, "styleElement", null);
  let Qi = Aa;
  const cx = () => {
      const { setValue: n, watch: l } = Rw({
        defaultValues: {
          biggerText: { status: !1, step: 0 },
          lineHeight: { status: !1, step: 0 },
          cursorLarge: { status: !1 },
          hideImages: { status: !1 },
          readableFonts: { status: !1 },
          dyslexicFont: { status: !1 },
          fonts: { status: !1, step: 0 },
          bionicFont: { status: !1 },
          contrast: { status: !1, step: 0 },
          invertColor: { status: !1 },
          brightness: { status: !1, step: 0 },
          saturation: { status: !1, step: 0 },
          readingMask: { status: !1 },
          readingGuide: { status: !1 },
          speechReader: { status: !1, step: 0 },
          tooltip: { status: !1 },
        },
      });
      let i;
      ((b) => {
        (b[(b.Dyslexia = 1)] = "Dyslexia"),
          (b[(b.Bionic = 2)] = "Bionic"),
          (b[(b.Readable = 3)] = "Readable");
      })(i || (i = {}));
      let o;
      ((b) => {
        (b[(b.Slow = 1)] = "Slow"),
          (b[(b.Normal = 2)] = "Normal"),
          (b[(b.Fast = 3)] = "Fast");
      })(o || (o = {}));
      const u = {
          0: "Yavaş, Normal, Hızlı",
          1: "Yavaş",
          2: "Normal",
          3: "Hızlı",
        },
        f = {
          0: "Disleksi Biyonik Okunabilir",
          1: "Disleksi",
          2: "Biyonik",
          3: "Okunabilir",
        },
        d = {
          1: "efl-dyslexia-font",
          2: "efl-bionic-font",
          3: "efl-readable-font",
        },
        g = {
          0: "mdi:volume-medium",
          1: "mdi:volume-low",
          2: "mdi:volume-medium",
          3: "mdi:volume-high",
        },
        m = {
          0: "mdi:format-text",
          1: "mdi:alphabetical-variant",
          2: "mdi:format-bold",
          3: "mdi:format-font",
        },
        p = [
          {
            id: "biggerText",
            name: "Metin Boyutu",
            onClick: () => {
              l("biggerText").step < 3
                ? n("biggerText", {
                    status: !0,
                    step: l("biggerText").step + 1,
                  })
                : n("biggerText", { status: !1, step: 0 }),
                Lw(l("biggerText").step);
            },
            icon: "mdi:magnify-plus",
            isActive: l("biggerText").status,
            progress: l("biggerText").step || 0,
            ariaLabel: `Metin boyutu ${
              l("biggerText").status
                ? `seviye ${l("biggerText").step}`
                : "normal"
            }`,
          },
          {
            id: "lineHeight",
            name: "Satır Aralığı",
            onClick: () => {
              l("lineHeight").step < 3
                ? n("lineHeight", {
                    status: !0,
                    step: l("lineHeight").step + 1,
                  })
                : n("lineHeight", { status: !1, step: 0 }),
                Vw(l("lineHeight").step);
            },
            icon: "mdi:format-line-spacing",
            isActive: l("lineHeight").status,
            progress: l("lineHeight").step || 0,
            ariaLabel: `Metin boyutu ${
              l("lineHeight").status
                ? `seviye ${l("lineHeight").step}`
                : "normal"
            }`,
          },
          {
            id: "cursorLarge",
            name: "Büyük İmleç",
            onClick: () => {
              const b = !l("cursorLarge").status;
              n("cursorLarge", { status: b }), Yw(b);
            },
            icon: "mdi:cursor-default",
            isActive: l("cursorLarge").status,
            ariaLabel: `${
              l("cursorLarge").status ? "Devre dışı bırak" : "Etkinleştir"
            } büyük imleç`,
          },
          {
            id: "hideImages",
            name: "Resimleri Gizle",
            onClick: () => {
              const b = !l("hideImages").status;
              n("hideImages", { status: b }), Qw(b);
            },
            icon: "mdi:image-off",
            isActive: l("hideImages").status,
            ariaLabel: `${
              l("hideImages").status ? "Göster" : "Gizle"
            } resimleri`,
          },
          {
            id: "fonts",
            name: f[l("fonts").step],
            onClick: () => {
              const { step: b } = l("fonts"),
                w = b < 3 ? b + 1 : 0,
                v = w > 0;
              Object.values(d).forEach((A) => {
                Sn.updateBodyClass(A, !1);
              });
              const C = w === 2;
              Sn.handleBionicFont(!C, () => {}),
                n("fonts", { status: v, step: w });
            },
            icon: m[l("fonts").step],
            isActive: l("fonts").status,
            progress: l("fonts").step || 0,
            ariaLabel:
              l("fonts").step > 0
                ? `${i[l("fonts").step]} okunabilir yazı tipi`
                : "Etkinleştir okunabilir yazı tipi",
          },
          {
            id: "bionicFont",
            name: "Hızlı Okuma",
            onClick: () => {
              const b = !l("bionicFont").status;
              Sn.handleBionicFont(!b, () => {}), n("bionicFont", { status: b });
            },
            icon: "mdi:format-bold",
            ariaLabel: `${
              l("bionicFont").status ? "Devre dışı bırak" : "Etkinleştir"
            } hızlı okuma formatı`,
            isActive: l("bionicFont").status,
          },
          {
            id: "contrast",
            name: "Kontrast",
            onClick: () => {
              l("contrast").step < 2
                ? n("contrast", { status: !0, step: l("contrast").step + 1 })
                : n("contrast", { status: !1, step: 0 }),
                $w(l("contrast").step);
            },
            icon: "mdi:contrast-circle",
            isActive: l("contrast").status,
            ariaLabel: `Kontrast seviyesi ${l("contrast").step}`,
            progress: l("contrast").step,
          },
          {
            id: "invertColor",
            name: "Renkleri Ters Çevir",
            onClick: () => {
              const b = !l("invertColor").status;
              Sn.updateBodyClass("efl-invert-color", b),
                n("invertColor", { status: b });
            },
            icon: "mdi:invert-colors",
            isActive: l("invertColor").status,
            ariaLabel: `${
              l("invertColor").status ? "Devre dışı bırak" : "Etkinleştir"
            } renkleri ters çevir`,
          },
          {
            id: "brightness",
            name: "Parlaklık",
            onClick: () => {
              l("brightness").step < 2
                ? n("brightness", {
                    status: !0,
                    step: l("brightness").step + 1,
                  })
                : n("brightness", { status: !1, step: 0 }),
                Iw(l("brightness").step);
            },
            icon: "mdi:brightness-6",
            isActive: l("brightness").status,
            ariaLabel: `Parlaklık seviyesi ${l("brightness").step}`,
            progress: l("brightness").step,
          },
          {
            id: "saturation",
            name: "Doygunluk",
            onClick: () => {
              l("saturation").step < 2
                ? n("saturation", {
                    status: !0,
                    step: l("saturation").step + 1,
                  })
                : n("saturation", { status: !1, step: 0 }),
                ex(l("saturation").step);
            },
            icon: "mdi:palette",
            isActive: l("saturation").status,
            ariaLabel: `Doygunluk seviyesi ${l("saturation").step}`,
            progress: l("saturation").step,
          },
          {
            id: "readingMask",
            name: "Okuma Maskesi",
            onClick: () => {
              const b = !l("readingMask").status;
              n("readingMask", { status: b }), nx(b);
            },
            icon: "mdi:eye-outline",
            isActive: l("readingMask").status,
            ariaLabel: `${
              l("readingMask").status ? "Devre dışı bırak" : "Etkinleştir"
            } okuma maskesi`,
          },
          {
            id: "readingGuide",
            name: "Satır Okuma",
            onClick: () => {
              const b = !l("readingGuide").status;
              n("readingGuide", { status: b }), ix(b);
            },
            icon: "mdi:book-open-page-variant",
            isActive: l("readingGuide").status,
            ariaLabel: `${
              l("readingGuide").status ? "Devre dışı bırak" : "Etkinleştir"
            } okuma kılavuzu`,
          },
          {
            id: "speechReader",
            name: u[l("speechReader").step],
            onClick: () => {
              l("speechReader").step < 3
                ? n("speechReader", {
                    status: !0,
                    step: l("speechReader").step + 1,
                  })
                : n("speechReader", { status: !1, step: 0 }),
                ux(l("speechReader").step);
            },
            icon: g[l("speechReader").step],
            isActive: l("speechReader").status,
            ariaLabel:
              l("fonts").step > 0
                ? `Doygunluk seviyesi ${o[l("speechReader").step]}`
                : "`Doygunluk seviyesi normal`",
            progress: l("speechReader").step,
          },
          {
            id: "tooltip",
            name: "Araç İpuçları",
            onClick: () => {
              const b = !l("tooltip").status;
              n("tooltip", { status: b }),
                b ? setTimeout(() => Qi.init(), 100) : Qi.cleanup();
            },
            icon: "mdi:tooltip-text",
            isActive: l("tooltip").status,
            ariaLabel: `${
              l("tooltip").status ? "Devre dışı bırak" : "Etkinleştir"
            } araç ipuçları`,
          },
        ];
      return Rt.jsxs("div", {
        className: "grid gap-2",
        children: [
          Rt.jsx(ih, { title: "İçerik Ayarları", size: "sm" }),
          Rt.jsx("div", {
            className: "grid grid-cols-3 gap-3.5",
            children: p.map((b) =>
              Rt.jsx(
                "div",
                {
                  className: "relative",
                  children: Rt.jsxs(Bi, {
                    variant: b.isActive ? "blue" : "neutral",
                    onClick: b.onClick,
                    className: Fs(
                      "col-span-1 flex flex-col w-full h-full min-h-[115px] focus-visible",
                      b.isActive ? "text-white" : "text-blue-600"
                    ),
                    role: "button",
                    "aria-label": b.ariaLabel,
                    "aria-pressed": b.isActive,
                    children: [
                      Rt.jsx(mt, {
                        className: Fs(
                          b.isActive ? "text-white" : "text-blue-600",
                          "w-5 h-5"
                        ),
                        icon: b.icon,
                        "aria-hidden": "true",
                      }),
                      b.name,
                      ka.TOTAL_STEPS[b.id] &&
                        Rt.jsx("span", {
                          className: Fs(
                            b.isActive ? "text-white" : "text-blue-600",
                            "text-sm"
                          ),
                          children: `${b.progress}/${ka.TOTAL_STEPS[b.id]}`,
                        }),
                    ],
                  }),
                },
                b.id
              )
            ),
          }),
        ],
      });
    },
    fx = () => {
      const [n, l] = H.useState(!1);
      return Rt.jsxs(Rt.Fragment, {
        children: [
          n &&
            Rt.jsx("div", {
              className:
                "fixed top-0 right-0 w-[445px] h-full min-h-screen z-[99999]",
              role: "dialog",
              "aria-label": "Erişilebilirlik Ayarları",
              "aria-modal": "true",
              tabIndex: -1,
              children: Rt.jsxs(Sd, {
                className: "flex flex-col gap-3 h-full w-full overflow-y-auto",
                shadow: "lg",
                children: [
                  Rt.jsx(ih, {
                    title: "EFL ACC",
                    size: "lg",
                    element: Rt.jsx(Bi, {
                      className: "w-8 h-8 focus-visible",
                      rounded: "full",
                      variant: "neutral",
                      onClick: () => {
                        Sn.updateBodyClass("overflow-hidden", !1), l(!1);
                      },
                      "aria-label": "Paneli Kapat",
                      children: "X",
                    }),
                  }),
                  Rt.jsx(cx, {}),
                ],
              }),
            }),
          Rt.jsx(Bi, {
            className:
              "fixed bottom-[10px] right-[10px] w-[55px] min-w-[55px] max-w-[55px] h-[55px] min-h-[55px] max-h-[55px] z-[99998] focus-visible",
            rounded: "full",
            onClick: () => {
              l(!n), Sn.updateBodyClass("overflow-hidden", !0);
            },
            "aria-label": "Erişilebilirlik menüsünü aç",
            "aria-expanded": n,
            children: "LOGO",
          }),
        ],
      });
    },
    dx = `@charset "UTF-8";@import url("https://fonts.cdnfonts.com/css/open-dyslexic");*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }
/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/fieldset,legend{padding:0}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.invisible{visibility:hidden}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0}.inset-y-0{top:0;bottom:0}.-right-full{right:-100%}.bottom-0{bottom:0}.bottom-full{bottom:100%}.left-0{left:0}.left-0\\.5{left:.125rem}.left-1\\/2{left:50%}.left-full{left:100%}.right-0{right:0}.right-0\\.5{right:.125rem}.right-full{right:100%}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:1rem}.top-full{top:100%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[1000\\]{z-index:1000}.col-span-2{grid-column:span 2/span 2}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0\\.5{margin-top:.125rem;margin-bottom:.125rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.grid{display:grid}.hidden{display:none}.h-0\\.5{height:.125rem}.h-1{height:.25rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-24{height:6rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-32{height:8rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-0{max-height:0}.max-h-60{max-height:15rem}.max-h-64{max-height:16rem}.max-h-\\[1000px\\]{max-height:1000px}.min-h-\\[400px\\]{min-height:400px}.min-h-\\[50px\\]{min-height:50px}.min-h-\\[520px\\]{min-height:520px}.w-0{width:0}.w-0\\.5{width:.125rem}.w-1{width:.25rem}.w-1\\/3{width:33.333333%}.w-11{width:2.75rem}.w-16{width:4rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-24{width:6rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-32{width:8rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-56{width:14rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-80{width:20rem}.w-96{width:24rem}.w-\\[240px\\]{width:240px}.w-\\[300px\\]{width:300px}.w-\\[400px\\]{width:400px}.w-\\[600px\\]{width:600px}.w-\\[80px\\]{width:80px}.w-\\[95\\%\\]{width:95%}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-px{width:1px}.min-w-\\[120px\\]{min-width:120px}.min-w-full{min-width:100%}.max-w-2xl{max-width:42rem}.max-w-\\[150px\\]{max-width:150px}.max-w-\\[95\\%\\]{max-width:95%}.max-w-full{max-width:100%}.max-w-max{max-width:-moz-max-content;max-width:max-content}.max-w-md{max-width:28rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.table-auto{table-layout:auto}.border-separate{border-collapse:separate}.border-spacing-0{--tw-border-spacing-x:0px;--tw-border-spacing-y:0px;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y)}.origin-top-right{transform-origin:top right}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-x-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x:-100%}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-1\\/2,.translate-x-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x:0px}.translate-x-5{--tw-translate-x:1.25rem}.translate-x-5,.translate-y-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y:0px}.translate-y-\\[-10px\\]{--tw-translate-y:-10px}.-rotate-90,.translate-y-\\[-10px\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-90{--tw-rotate:-90deg}.rotate-180{--tw-rotate:180deg}.rotate-180,.rotate-90{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate:90deg}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-bounce{animation:bounce 1s infinite}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-all{-webkit-user-select:all;-moz-user-select:all;user-select:all}.resize-none{resize:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[1fr\\2c auto\\]{grid-template-columns:1fr auto}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem*var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem*var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px*var(--tw-divide-y-reverse))}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(229 231 235/var(--tw-divide-opacity,1))}.self-stretch{align-self:stretch}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-sm{border-radius:.125rem}.rounded-b-lg{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-solid{border-style:solid}.border-dashed{border-style:dashed}.border-dotted{border-style:dotted}.border-none{border-style:none}.border-amber-200{--tw-border-opacity:1;border-color:rgb(253 230 138/var(--tw-border-opacity,1))}.border-amber-600{--tw-border-opacity:1;border-color:rgb(217 119 6/var(--tw-border-opacity,1))}.border-blue-100{--tw-border-opacity:1;border-color:rgb(219 234 254/var(--tw-border-opacity,1))}.border-blue-200{--tw-border-opacity:1;border-color:rgb(191 219 254/var(--tw-border-opacity,1))}.border-blue-600{--tw-border-opacity:1;border-color:rgb(37 99 235/var(--tw-border-opacity,1))}.border-emerald-200{--tw-border-opacity:1;border-color:rgb(167 243 208/var(--tw-border-opacity,1))}.border-emerald-600{--tw-border-opacity:1;border-color:rgb(5 150 105/var(--tw-border-opacity,1))}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity,1))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity,1))}.border-gray-500{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1))}.border-red-200{--tw-border-opacity:1;border-color:rgb(254 202 202/var(--tw-border-opacity,1))}.border-red-300{--tw-border-opacity:1;border-color:rgb(252 165 165/var(--tw-border-opacity,1))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity,1))}.border-red-600{--tw-border-opacity:1;border-color:rgb(220 38 38/var(--tw-border-opacity,1))}.border-transparent{border-color:transparent}.bg-amber-100{--tw-bg-opacity:1;background-color:rgb(254 243 199/var(--tw-bg-opacity,1))}.bg-amber-50{--tw-bg-opacity:1;background-color:rgb(255 251 235/var(--tw-bg-opacity,1))}.bg-amber-500{--tw-bg-opacity:1;background-color:rgb(245 158 11/var(--tw-bg-opacity,1))}.bg-amber-600{--tw-bg-opacity:1;background-color:rgb(217 119 6/var(--tw-bg-opacity,1))}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity,1))}.bg-black\\/50{background-color:rgba(0,0,0,.5)}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity,1))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255/var(--tw-bg-opacity,1))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.bg-emerald-100{--tw-bg-opacity:1;background-color:rgb(209 250 229/var(--tw-bg-opacity,1))}.bg-emerald-50{--tw-bg-opacity:1;background-color:rgb(236 253 245/var(--tw-bg-opacity,1))}.bg-emerald-500{--tw-bg-opacity:1;background-color:rgb(16 185 129/var(--tw-bg-opacity,1))}.bg-emerald-600{--tw-bg-opacity:1;background-color:rgb(5 150 105/var(--tw-bg-opacity,1))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity,1))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity,1))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94/var(--tw-bg-opacity,1))}.bg-green-600{--tw-bg-opacity:1;background-color:rgb(22 163 74/var(--tw-bg-opacity,1))}.bg-neutral-500{--tw-bg-opacity:1;background-color:rgb(115 115 115/var(--tw-bg-opacity,1))}.bg-neutral-600{--tw-bg-opacity:1;background-color:rgb(82 82 82/var(--tw-bg-opacity,1))}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity,1))}.bg-red-50{--tw-bg-opacity:1;background-color:rgb(254 242 242/var(--tw-bg-opacity,1))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity,1))}.bg-red-600{--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity,1))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity,1))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity,1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.bg-white\\/5{background-color:hsla(0,0%,100%,.05)}.bg-white\\/60{background-color:hsla(0,0%,100%,.6)}.bg-white\\/95{background-color:hsla(0,0%,100%,.95)}.bg-yellow-50{--tw-bg-opacity:1;background-color:rgb(254 252 232/var(--tw-bg-opacity,1))}.bg-yellow-600{--tw-bg-opacity:1;background-color:rgb(202 138 4/var(--tw-bg-opacity,1))}.bg-opacity-45{--tw-bg-opacity:0.45}.bg-opacity-80{--tw-bg-opacity:0.8}.fill-current{fill:currentColor}.stroke-gray-100{stroke:#f3f4f6}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-3\\.5{padding:.875rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.pb-4{padding-bottom:1rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pl-5{padding-left:1.25rem}.pr-0{padding-right:0}.pr-2{padding-right:.5rem}.pr-24{padding-right:6rem}.pr-4{padding-right:1rem}.pt-2{padding-top:.5rem}.text-left{text-align:left}.text-center{text-align:center}.font-\\[\\\\\\'Inter\\\\\\'\\]{font-family:\\'Inter\\'}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-5{line-height:1.25rem}.leading-7{line-height:1.75rem}.leading-tight{line-height:1.25}.text-amber-600{--tw-text-opacity:1;color:rgb(217 119 6/var(--tw-text-opacity,1))}.text-amber-900{--tw-text-opacity:1;color:rgb(120 53 15/var(--tw-text-opacity,1))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity,1))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity,1))}.text-blue-800{--tw-text-opacity:1;color:rgb(30 64 175/var(--tw-text-opacity,1))}.text-blue-900{--tw-text-opacity:1;color:rgb(30 58 138/var(--tw-text-opacity,1))}.text-emerald-600{--tw-text-opacity:1;color:rgb(5 150 105/var(--tw-text-opacity,1))}.text-emerald-900{--tw-text-opacity:1;color:rgb(6 78 59/var(--tw-text-opacity,1))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity,1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.text-neutral-600{--tw-text-opacity:1;color:rgb(82 82 82/var(--tw-text-opacity,1))}.text-neutral-900{--tw-text-opacity:1;color:rgb(23 23 23/var(--tw-text-opacity,1))}.text-red-400{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity,1))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28/var(--tw-text-opacity,1))}.text-red-900{--tw-text-opacity:1;color:rgb(127 29 29/var(--tw-text-opacity,1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105/var(--tw-text-opacity,1))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity,1))}.text-slate-950{--tw-text-opacity:1;color:rgb(2 6 23/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.text-yellow-600{--tw-text-opacity:1;color:rgb(202 138 4/var(--tw-text-opacity,1))}.text-yellow-800{--tw-text-opacity:1;color:rgb(133 77 14/var(--tw-text-opacity,1))}.underline{text-decoration-line:underline}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity,1))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity,1))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.placeholder-red-300::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165/var(--tw-placeholder-opacity,1))}.placeholder-red-300::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165/var(--tw-placeholder-opacity,1))}.accent-amber-600{accent-color:#d97706}.accent-blue-600{accent-color:#2563eb}.accent-emerald-600{accent-color:#059669}.accent-green-600{accent-color:#16a34a}.accent-neutral-600{accent-color:#525252}.accent-red-600{accent-color:#dc2626}.accent-yellow-600{accent-color:#ca8a04}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-75{opacity:.75}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-md,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-sm,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-1{outline-width:1px}.outline-offset-\\[-1px\\]{outline-offset:-1px}.outline-slate-200{outline-color:#e2e8f0}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring,.ring-0{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-1,.ring-2{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-black{--tw-ring-opacity:1;--tw-ring-color:rgb(0 0 0/var(--tw-ring-opacity,1))}.ring-white{--tw-ring-opacity:1;--tw-ring-color:rgb(255 255 255/var(--tw-ring-opacity,1))}.ring-opacity-5{--tw-ring-opacity:0.05}.blur{--tw-blur:blur(8px)}.blur,.drop-shadow-xl{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-xl{--tw-drop-shadow:drop-shadow(0 20px 13px rgba(0,0,0,.03)) drop-shadow(0 8px 5px rgba(0,0,0,.08))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}:host,:root{--rem:16}html{scroll-behavior:smooth;font-size:1rem}body::-webkit-scrollbar{display:none}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-right-5:after{content:var(--tw-content);right:-1.25rem}.after\\:left-1\\/2:after{content:var(--tw-content);left:50%}.after\\:top-0:after{content:var(--tw-content);top:0}.after\\:top-1\\/2:after{content:var(--tw-content);top:50%}.after\\:hidden:after{content:var(--tw-content);display:none}.after\\:h-\\[40\\%\\]:after{content:var(--tw-content);height:40%}.after\\:h-\\[70\\%\\]:after{content:var(--tw-content);height:70%}.after\\:h-full:after{content:var(--tw-content);height:100%}.after\\:w-10:after{content:var(--tw-content);width:2.5rem}.after\\:w-\\[40\\%\\]:after{content:var(--tw-content);width:40%}.after\\:w-\\[70\\%\\]:after{content:var(--tw-content);width:70%}.after\\:-translate-x-1\\/2:after{--tw-translate-x:-50%}.after\\:-translate-x-1\\/2:after,.after\\:-translate-y-1\\/2:after{content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\\:-translate-y-1\\/2:after{--tw-translate-y:-50%}.after\\:rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:bg-white:after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.after\\:bg-\\[url\\(\\"data\\:image\\/svg\\+xml\\2c \\%3Csvg\\%20xmlns\\=\\%27http\\:\\/\\/www\\.w3\\.org\\/2000\\/svg\\%27\\%20viewBox\\=\\%270\\%200\\%2024\\%2024\\%27\\%20fill\\=\\%27none\\%27\\%20stroke\\=\\%27white\\%27\\%20stroke-width\\=\\%274\\%27\\%20stroke-linecap\\=\\%27round\\%27\\%20stroke-linejoin\\=\\%27round\\%27\\%3E\\%3Cpolyline\\%20points\\=\\%2720\\%206\\%209\\%2017\\%204\\%2012\\%27\\%3E\\%3C\\/polyline\\%3E\\%3C\\/svg\\%3E\\"\\)\\]:after{content:var(--tw-content);background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4' viewBox='0 0 24 24'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E")}.after\\:bg-contain:after{content:var(--tw-content);background-size:contain}.after\\:bg-center:after{content:var(--tw-content);background-position:50%}.after\\:bg-no-repeat:after{content:var(--tw-content);background-repeat:no-repeat}.after\\:content-\\[\\"\\"\\]:after{--tw-content:"";content:var(--tw-content)}.after\\:last\\:hidden:last-child:after{content:var(--tw-content);display:none}.checked\\:border-amber-600:checked{--tw-border-opacity:1;border-color:rgb(217 119 6/var(--tw-border-opacity,1))}.checked\\:border-blue-600:checked{--tw-border-opacity:1;border-color:rgb(37 99 235/var(--tw-border-opacity,1))}.checked\\:border-emerald-600:checked{--tw-border-opacity:1;border-color:rgb(5 150 105/var(--tw-border-opacity,1))}.checked\\:border-green-600:checked{--tw-border-opacity:1;border-color:rgb(22 163 74/var(--tw-border-opacity,1))}.checked\\:border-neutral-600:checked{--tw-border-opacity:1;border-color:rgb(82 82 82/var(--tw-border-opacity,1))}.checked\\:border-red-600:checked{--tw-border-opacity:1;border-color:rgb(220 38 38/var(--tw-border-opacity,1))}.checked\\:border-yellow-600:checked{--tw-border-opacity:1;border-color:rgb(202 138 4/var(--tw-border-opacity,1))}.checked\\:ring-amber-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(217 119 6/var(--tw-ring-opacity,1))}.checked\\:ring-blue-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(37 99 235/var(--tw-ring-opacity,1))}.checked\\:ring-emerald-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(5 150 105/var(--tw-ring-opacity,1))}.checked\\:ring-green-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(22 163 74/var(--tw-ring-opacity,1))}.checked\\:ring-neutral-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(82 82 82/var(--tw-ring-opacity,1))}.checked\\:ring-red-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(220 38 38/var(--tw-ring-opacity,1))}.checked\\:ring-yellow-600:checked{--tw-ring-opacity:1;--tw-ring-color:rgb(202 138 4/var(--tw-ring-opacity,1))}.focus-within\\:border-gray-500:focus-within{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1))}.hover\\:border-amber-600:hover{--tw-border-opacity:1;border-color:rgb(217 119 6/var(--tw-border-opacity,1))}.hover\\:border-blue-600:hover{--tw-border-opacity:1;border-color:rgb(37 99 235/var(--tw-border-opacity,1))}.hover\\:border-emerald-600:hover{--tw-border-opacity:1;border-color:rgb(5 150 105/var(--tw-border-opacity,1))}.hover\\:border-gray-400:hover{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity,1))}.hover\\:border-red-500:hover{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity,1))}.hover\\:border-red-600:hover{--tw-border-opacity:1;border-color:rgb(220 38 38/var(--tw-border-opacity,1))}.hover\\:border-slate-900:hover{--tw-border-opacity:1;border-color:rgb(15 23 42/var(--tw-border-opacity,1))}.hover\\:bg-amber-50:hover{--tw-bg-opacity:1;background-color:rgb(255 251 235/var(--tw-bg-opacity,1))}.hover\\:bg-amber-700:hover{--tw-bg-opacity:1;background-color:rgb(180 83 9/var(--tw-bg-opacity,1))}.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgb(239 246 255/var(--tw-bg-opacity,1))}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity,1))}.hover\\:bg-emerald-700:hover{--tw-bg-opacity:1;background-color:rgb(4 120 87/var(--tw-bg-opacity,1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.hover\\:bg-green-50:hover{--tw-bg-opacity:1;background-color:rgb(240 253 244/var(--tw-bg-opacity,1))}.hover\\:bg-red-50:hover{--tw-bg-opacity:1;background-color:rgb(254 242 242/var(--tw-bg-opacity,1))}.hover\\:bg-red-700:hover{--tw-bg-opacity:1;background-color:rgb(185 28 28/var(--tw-bg-opacity,1))}.hover\\:bg-slate-100:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity,1))}.hover\\:bg-white\\/5:hover{background-color:hsla(0,0%,100%,.05)}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.hover\\:text-blue-800:hover{--tw-text-opacity:1;color:rgb(30 64 175/var(--tw-text-opacity,1))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.hover\\:text-gray-600:hover{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.hover\\:text-neutral-600:hover{--tw-text-opacity:1;color:rgb(82 82 82/var(--tw-text-opacity,1))}.hover\\:text-red-600:hover{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity,1))}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-90:hover{opacity:.9}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.hover\\:shadow-lg:hover,.hover\\:shadow-md:hover{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.hover\\:shadow-sm:hover,.hover\\:shadow-xl:hover{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.focus\\:border-none:focus{border-style:none}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity,1))}.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1))}.focus\\:border-red-500:focus{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity,1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-0:focus,.focus\\:ring-1:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity,1))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus\\:ring-offset-gray-100:focus{--tw-ring-offset-color:#f3f4f6}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:placeholder-gray-900::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(17 24 39/var(--tw-placeholder-opacity,1))}.group:focus-within .group-focus-within\\:placeholder-gray-900::placeholder{--tw-placeholder-opacity:1;color:rgb(17 24 39/var(--tw-placeholder-opacity,1))}.group:hover .group-hover\\:visible{visibility:visible}.group:hover .group-hover\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.group:focus .group-focus\\:visible{visibility:visible}.group:not(:focus-within) .group-\\[\\&\\:not\\(\\:focus-within\\)\\]\\:hover\\:placeholder-gray-500:hover::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.group:not(:focus-within) .group-\\[\\&\\:not\\(\\:focus-within\\)\\]\\:hover\\:placeholder-gray-500:hover::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}@media (min-width:640px){.sm\\:ml-2{margin-left:.5rem}.sm\\:block{display:block}.sm\\:hidden{display:none}.sm\\:w-96{width:24rem}.sm\\:w-\\[32rem\\]{width:32rem}.sm\\:w-\\[40rem\\]{width:40rem}.sm\\:w-\\[48rem\\]{width:48rem}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-3{padding-left:.75rem;padding-right:.75rem}.sm\\:py-1{padding-top:.25rem;padding-bottom:.25rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.group:focus-within .sm\\:group-focus-within\\:visible{visibility:visible}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:px-3{padding-left:.75rem;padding-right:.75rem}}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}.lg\\:p-5{padding:1.25rem}}@media (min-width:1280px){.xl\\:table-cell{display:table-cell}}@media (min-width:1536px){.\\32xl\\:table-cell{display:table-cell}}.\\[\\&\\>\\*\\:first-child\\]\\:rounded-l-lg>:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.\\[\\&\\>\\*\\:last-child\\]\\:rounded-r-lg>:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.\\[\\&\\>button\\]\\:flex-1>button{flex:1 1 0%}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }
/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media (min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.bottom-4{bottom:1rem}.bottom-\\[10px\\]{bottom:10px}.right-0{right:0}.right-4{right:1rem}.right-\\[10px\\]{right:10px}.top-0{top:0}.z-\\[99998\\]{z-index:99998}.z-\\[99999\\]{z-index:99999}.col-span-1{grid-column:span 1/span 1}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-14{height:3.5rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-\\[55px\\]{height:55px}.h-full{height:100%}.max-h-\\[55px\\]{max-height:55px}.min-h-\\[115px\\]{min-height:115px}.min-h-\\[55px\\]{min-height:55px}.min-h-screen{min-height:100vh}.w-14{width:3.5rem}.w-5{width:1.25rem}.w-8{width:2rem}.w-\\[445px\\]{width:445px}.w-\\[55px\\]{width:55px}.w-full{width:100%}.min-w-\\[55px\\]{min-width:55px}.max-w-\\[55px\\]{max-width:55px}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-3\\.5{gap:.875rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border{border-width:1px}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.p-0{padding:0}.text-sm{font-size:.875rem;line-height:1.25rem}.italic{font-style:italic}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.outline{outline-style:solid}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:root{--min-target-size:24px;--focus-offset:8px;--focus-outline-width:3px;--focus-color:#005fcc;--contrast-aa:4.5;--contrast-aaa:7.0;--base-font-size:16px}#efl-acc-root,#efl-acc-root *,.efl-widget-container,.efl-widget-container *{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important;font-size:medium!important;line-height:normal!important;letter-spacing:normal!important;word-spacing:normal!important}.efl-cursor-large{cursor:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M13.64 21.97a.99.99 0 0 1-1.33-.47l-2.18-4.74-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1c.24 0 .47.09.64.23l.01-.01 11.49 9.64a1.001 1.001 0 0 1-.44 1.75l-3.16.62 2.2 4.73c.26.5.02 1.09-.48 1.32z'/%3E%3C/svg%3E"),pointer!important}body.efl-hide-images img,body.efl-hide-images video,html.efl-hide-images img,html.efl-hide-images video{visibility:hidden!important}body.efl-readable-font,body.efl-readable-font :not(#efl-acc-root):not(#efl-acc-root *),html.efl-readable-font,html.efl-readable-font :not(#efl-acc-root):not(#efl-acc-root *){font-family:Arial,Verdana,Tahoma,Trebuchet MS,Segoe UI,"sans-serif"!important;letter-spacing:.02em!important;word-spacing:.05em!important}body.efl-dyslexia-font,body.efl-dyslexia-font :not(#efl-acc-root):not(#efl-acc-root *),html.efl-dyslexia-font,html.efl-dyslexia-font :not(#efl-acc-root):not(#efl-acc-root *){font-family:Open-Dyslexic,Arial,sans-serif!important}body.efl-stop-animation,body.efl-stop-animation *,html.efl-stop-animation,html.efl-stop-animation *{animation:none!important;transition:none!important}.efl-invert-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:999999;background-color:#fff;mix-blend-mode:difference;display:none}#efl-acc-root{isolation:isolate;mix-blend-mode:normal;position:relative;z-index:1000000}body.efl-high-contrast,body.efl-high-contrast :not(#efl-acc-root):not(#efl-acc-root *),html.efl-high-contrast,html.efl-high-contrast :not(#efl-acc-root):not(#efl-acc-root *){background-color:#000!important;color:#fff!important;border-color:#fff!important}body.efl-dark-contrast,body.efl-dark-contrast :not(#efl-acc-root):not(#efl-acc-root *),html.efl-dark-contrast,html.efl-dark-contrast :not(#efl-acc-root):not(#efl-acc-root *){background-color:#1a1a1a!important;color:#fff!important;border-color:#fff!important}body.efl-light-contrast,body.efl-light-contrast :not(#efl-acc-root):not(#efl-acc-root *),html.efl-light-contrast,html.efl-light-contrast :not(#efl-acc-root):not(#efl-acc-root *){background-color:#fff!important;color:#000!important;border-color:#000!important}body.efl-monochrome,body.efl-monochrome :not(#efl-acc-root):not(#efl-acc-root *),html.efl-monochrome,html.efl-monochrome :not(#efl-acc-root):not(#efl-acc-root *){filter:grayscale(100%)!important}body.efl-brightness-100,html.efl-brightness-100{filter:brightness(1.2)!important}body.efl-brightness-200,html.efl-brightness-200{filter:brightness(1.4)!important}body.efl-brightness-300,html.efl-brightness-300{filter:brightness(1.6)!important}body.efl-contrast-100,html.efl-contrast-100{filter:contrast(1.2)!important}body.efl-contrast-200,html.efl-contrast-200{filter:contrast(1.4)!important}body.efl-contrast-300,html.efl-contrast-300{filter:contrast(1.6)!important}body.efl-saturation-100,html.efl-saturation-100{filter:saturate(1.2)!important}body.efl-saturation-200,html.efl-saturation-200{filter:saturate(1.4)!important}body.efl-saturation-300,html.efl-saturation-300{filter:saturate(1.6)!important}body.efl-text-sm :not(#efl-acc-root):not(#efl-acc-root *),html.efl-text-sm :not(#efl-acc-root):not(#efl-acc-root *){font-size:calc(var(--base-font-size)*1.125)!important;line-height:1.5!important}body.efl-text-md :not(#efl-acc-root):not(#efl-acc-root *),html.efl-text-md :not(#efl-acc-root):not(#efl-acc-root *){font-size:calc(var(--base-font-size)*1.25)!important;line-height:1.5!important}body.efl-text-lg :not(#efl-acc-root):not(#efl-acc-root *),html.efl-text-lg :not(#efl-acc-root):not(#efl-acc-root *){font-size:calc(var(--base-font-size)*1.5)!important;line-height:1.6!important}body.efl-text-xl :not(#efl-acc-root):not(#efl-acc-root *),html.efl-text-xl :not(#efl-acc-root):not(#efl-acc-root *){font-size:calc(var(--base-font-size)*1.75)!important;line-height:1.6!important}body.efl-text-2xl :not(#efl-acc-root):not(#efl-acc-root *),html.efl-text-2xl :not(#efl-acc-root):not(#efl-acc-root *){font-size:calc(var(--base-font-size)*2)!important;line-height:1.7!important}body.efl-leading-normal :not(#efl-acc-root):not(#efl-acc-root *),html.efl-leading-normal :not(#efl-acc-root):not(#efl-acc-root *){line-height:1.5!important}body.efl-leading-relaxed :not(#efl-acc-root):not(#efl-acc-root *),html.efl-leading-relaxed :not(#efl-acc-root):not(#efl-acc-root *){line-height:1.625!important}body.efl-leading-loose :not(#efl-acc-root):not(#efl-acc-root *),html.efl-leading-loose :not(#efl-acc-root):not(#efl-acc-root *){line-height:1.75!important}body.efl-leading-extra-loose :not(#efl-acc-root):not(#efl-acc-root *),html.efl-leading-extra-loose :not(#efl-acc-root):not(#efl-acc-root *){line-height:2!important}.efl-min-target{min-width:var(--min-target-size)!important;min-height:var(--min-target-size)!important}[role=button],button,input[type=button],input[type=reset],input[type=submit]{min-width:var(--min-target-size);min-height:var(--min-target-size)}.focus-visible,.focus-visible:focus-visible,[role=button]:focus-visible,[tabindex]:focus-visible,a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:var(--focus-outline-width) solid var(--focus-color)!important;outline-offset:2px!important;border-radius:4px!important;z-index:999999!important;position:relative!important}:focus-visible{outline-width:2px!important;outline-style:solid!important;outline-color:var(--focus-color)!important;outline-offset:2px!important}[role=button],[tabindex]:not([tabindex="-1"]),a[href],area[href],button,input,select,textarea{position:relative}@media (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.custom-tooltip{position:fixed!important;background-color:#333!important;color:#fff!important;padding:8px 12px!important;border-radius:6px!important;font-size:14px!important;line-height:1.4!important;max-width:300px!important;min-width:120px!important;z-index:999999!important;box-shadow:0 4px 16px rgba(0,0,0,.3)!important;border:1px solid #555!important;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif!important;word-wrap:break-word!important;pointer-events:none!important;opacity:0!important;transform:translateY(10px)!important;transition:opacity .2s ease,transform .2s ease!important}.custom-tooltip.show{opacity:1!important;transform:translateY(0)!important}.custom-tooltip:before{content:"";position:absolute;top:-6px;left:20px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #333}.efl-reading-mask{position:relative!important}body.efl-reading-mask:after,body.efl-reading-mask:before,html.efl-reading-mask:after,html.efl-reading-mask:before{content:"";position:fixed;left:0;right:0;background-color:rgba(0,0,0,.8);z-index:999998;pointer-events:none;transition:transform .1s ease}body.efl-reading-mask-25:after,body.efl-reading-mask-25:before,html.efl-reading-mask-25:after,html.efl-reading-mask-25:before{height:calc(50vh - 50px)}body.efl-reading-mask-25:before,html.efl-reading-mask-25:before{top:0;transform:translateY(calc(var(--mask-y, 0)*1px - 50vh + 50px))}body.efl-reading-mask-25:after,html.efl-reading-mask-25:after{bottom:0;transform:translateY(calc(50vh - 50px - var(--mask-y, 0)*1px))}.efl-help-button{background-color:#06c!important;color:#fff!important;border:2px solid #049!important;border-radius:50%!important;width:32px!important;height:32px!important;font-size:16px!important;font-weight:700!important;display:flex!important;align-items:center!important;justify-content:center!important;cursor:pointer!important;transition:all .2s ease!important}.efl-help-button:focus,.efl-help-button:hover{background-color:#049!important;transform:scale(1.1)!important}.efl-help-tooltip{position:absolute;background-color:#333!important;color:#fff!important;padding:8px 12px!important;border-radius:4px!important;font-size:14px!important;line-height:1.4!important;max-width:250px!important;z-index:999999!important;box-shadow:0 4px 12px rgba(0,0,0,.3)!important;border:1px solid #555!important}.efl-help-tooltip:before{content:"";position:absolute;top:-6px;left:20px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #333}@media (prefers-contrast:high){.focus-visible:focus-visible{outline-width:4px!important;outline-color:currentColor!important}.efl-help-button{border-width:3px!important}}.efl-draggable-alternative{position:relative}.efl-draggable-alternative:after{content:"Çift tıklayarak da kullanabilirsiniz";position:absolute;bottom:-20px;left:0;font-size:12px;color:#666;font-style:italic}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity,1))}
/*# sourceMappingURL=build.css.map */`;
  class hx extends HTMLElement {
    constructor() {
      super();
      $e(this, "root", null);
      if (!document.getElementById("efl-acc-styles")) {
        const o = document.createElement("style");
        (o.id = "efl-acc-styles"),
          (o.textContent = dx),
          document.head.appendChild(o);
      }
    }
    connectedCallback() {
      this.render();
    }
    disconnectedCallback() {
      if (this.root) {
        try {
          this.root.unmount();
        } catch (i) {
          console.warn("Unmount error:", i);
        }
        this.root = null;
      }
    }
    render() {
      if (this.root) return;
      const i = document.createElement("div");
      (i.id = "efl-acc-widget"), this.appendChild(i);
      const o = H.createElement(H.StrictMode, {}, H.createElement(fx));
      (this.root = T0.createRoot(i)), this.root.render(o);
    }
  }
  customElements.get("efl-acc-widget") ||
    customElements.define("efl-acc-widget", hx),
    (window.EflAcc = {
      init: () => {
        if (document.querySelector("efl-acc-widget")) return;
        const n = document.createElement("efl-acc-widget");
        document.body.appendChild(n);
      },
    });
})();
