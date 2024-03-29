/*! For license information please see viewer.min.js.LICENSE.txt */
(() => {
  var t = {
      287: () => {
        var t, e;
        (window.requestAnimFrame =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (t, e) {
            window.setTimeout(t, 1e3 / 60);
          }),
          (jQuery.support.cors = !0),
          $.ajaxTransport
            ? ($.ajaxSetup({ flatOptions: { renderer: !0 } }),
              $.ajaxTransport("+binary", function (t, e, i) {
                if (
                  window.FormData &&
                  ((t.dataType && "binary" == t.dataType) ||
                    (t.data &&
                      ((window.ArrayBuffer && t.data instanceof ArrayBuffer) ||
                        (window.Blob && t.data instanceof Blob))))
                )
                  return {
                    send: function (e, i) {
                      var r = new XMLHttpRequest(),
                        n = t.url,
                        s = t.type,
                        a = t.responseType || "blob",
                        o = t.data || null;
                      t.renderer &&
                        r.addEventListener("progress", function (e) {
                          e.lengthComputable &&
                            (t.renderer.downloads[this.responseURL]
                              ? (t.renderer.downloads[this.responseURL].loaded =
                                  e.loaded)
                              : (t.renderer.downloads[this.responseURL] = {
                                  loaded: e.loaded,
                                  total: e.total,
                                }),
                            t.renderer.updateProgress());
                        }),
                        r.addEventListener("load", function () {
                          t.renderer &&
                            (delete t.renderer.downloads[this.responseURL],
                            t.renderer.updateProgress());
                          var e = {};
                          (e[t.dataType] = r.response),
                            i(
                              r.status,
                              r.statusText,
                              e,
                              r.getAllResponseHeaders()
                            );
                        }),
                        r.open(s, n, !0),
                        (r.responseType = a),
                        r.send(o);
                    },
                    abort: function () {
                      i.abort();
                    },
                  };
              }))
            : ((t = $.httpData),
              ($.httpData = function (e, i, r) {
                return "binary" == i ? e.response : t(e, i, r);
              }),
              $.ajaxSetup({
                beforeSend: function (t, e) {
                  "binary" == e.dataType &&
                    ((t.responseType = e.responseType || "arraybuffer"),
                    t.addEventListener(
                      "progress",
                      function (t) {
                        e.renderer &&
                          t.lengthComputable &&
                          (e.renderer.downloads[this.responseURL]
                            ? (e.renderer.downloads[this.responseURL].loaded =
                                t.loaded)
                            : (e.renderer.downloads[this.responseURL] = {
                                loaded: t.loaded,
                                total: t.total,
                              }),
                          e.renderer.updateProgress());
                      },
                      !1
                    ),
                    t.addEventListener(
                      "load",
                      function () {
                        e.renderer &&
                          (delete e.renderer.downloads[this.responseURL],
                          e.renderer.updateProgress());
                      },
                      !1
                    ));
                },
              })),
          (Math.randomInt =
            Math.randomInt ||
            function (t, e) {
              return Math.floor(Math.random() * (e - t)) + t;
            }),
          "function" != typeof Object.create &&
            (Object.create =
              ((e = function () {}),
              function (t) {
                if (arguments.length > 1)
                  throw Error("Second argument not supported");
                if ("object" != typeof t)
                  throw TypeError("Argument must be an object");
                e.prototype = t;
                var i = new e();
                return (e.prototype = null), i;
              })),
          (window.console = window.console || {
            log: function () {},
            error: function () {},
            warn: function () {},
          });
      },
    },
    e = {};
  function i(r) {
    var n = e[r];
    if (void 0 !== n) return n.exports;
    var s = (e[r] = { exports: {} });
    return t[r](s, s.exports, i), s.exports;
  }
  (() => {
    "use strict";
    i(287);
    let t = Float32Array;
    function e(e, i, r) {
      const n = new t(3);
      return e && (n[0] = e), i && (n[1] = i), r && (n[2] = r), n;
    }
    function r(e, i, r) {
      return (
        ((r = r || new t(3))[0] = e[0] + i[0]),
        (r[1] = e[1] + i[1]),
        (r[2] = e[2] + i[2]),
        r
      );
    }
    function n(e, i, r) {
      return (
        ((r = r || new t(3))[0] = e[0] * i[0]),
        (r[1] = e[1] * i[1]),
        (r[2] = e[2] * i[2]),
        r
      );
    }
    let s = Float32Array;
    function a(t) {
      return (
        ((t = t || new s(16))[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    }
    function o(t, e) {
      e = e || new s(16);
      const i = t[0],
        r = t[1],
        n = t[2],
        a = t[3],
        o = t[4],
        l = t[5],
        h = t[6],
        u = t[7],
        c = t[8],
        f = t[9],
        d = t[10],
        b = t[11],
        g = t[12],
        _ = t[13],
        p = t[14],
        m = t[15],
        v = d * m,
        x = p * b,
        T = h * m,
        w = p * u,
        y = h * b,
        A = d * u,
        E = n * m,
        M = p * a,
        C = n * b,
        S = d * a,
        k = n * u,
        D = h * a,
        F = c * _,
        R = g * f,
        I = o * _,
        U = g * l,
        P = o * f,
        O = c * l,
        z = i * _,
        B = g * r,
        L = i * f,
        H = c * r,
        N = i * l,
        G = o * r,
        j = v * l + w * f + y * _ - (x * l + T * f + A * _),
        W = x * r + E * f + S * _ - (v * r + M * f + C * _),
        V = T * r + M * l + k * _ - (w * r + E * l + D * _),
        q = A * r + C * l + D * f - (y * r + S * l + k * f),
        Y = 1 / (i * j + o * W + c * V + g * q);
      return (
        (e[0] = Y * j),
        (e[1] = Y * W),
        (e[2] = Y * V),
        (e[3] = Y * q),
        (e[4] = Y * (x * o + T * c + A * g - (v * o + w * c + y * g))),
        (e[5] = Y * (v * i + M * c + C * g - (x * i + E * c + S * g))),
        (e[6] = Y * (w * i + E * o + D * g - (T * i + M * o + k * g))),
        (e[7] = Y * (y * i + S * o + k * c - (A * i + C * o + D * c))),
        (e[8] = Y * (F * u + U * b + P * m - (R * u + I * b + O * m))),
        (e[9] = Y * (R * a + z * b + H * m - (F * a + B * b + L * m))),
        (e[10] = Y * (I * a + B * u + N * m - (U * a + z * u + G * m))),
        (e[11] = Y * (O * a + L * u + G * b - (P * a + H * u + N * b))),
        (e[12] = Y * (I * d + O * p + R * h - (P * p + F * h + U * d))),
        (e[13] = Y * (L * p + F * n + B * d - (z * d + H * p + R * n))),
        (e[14] = Y * (z * h + G * p + U * n - (N * p + I * n + B * h))),
        (e[15] = Y * (N * d + P * n + H * h - (L * h + G * d + O * n))),
        e
      );
    }
    function l(t, i, r) {
      r = r || e();
      const n = i[0],
        s = i[1],
        a = i[2],
        o = n * t[3] + s * t[7] + a * t[11] + t[15];
      return (
        (r[0] = (n * t[0] + s * t[4] + a * t[8] + t[12]) / o),
        (r[1] = (n * t[1] + s * t[5] + a * t[9] + t[13]) / o),
        (r[2] = (n * t[2] + s * t[6] + a * t[10] + t[14]) / o),
        r
      );
    }
    function h(t, i, r) {
      r = r || e();
      const n = i[0],
        s = i[1],
        a = i[2];
      return (
        (r[0] = n * t[0] + s * t[4] + a * t[8]),
        (r[1] = n * t[1] + s * t[5] + a * t[9]),
        (r[2] = n * t[2] + s * t[6] + a * t[10]),
        r
      );
    }
    const u = 5120,
      c = 5121,
      f = 5122,
      d = 5123,
      b = 5124,
      g = 5125,
      _ = 5126,
      p = {};
    {
      const t = p;
      (t[u] = Int8Array),
        (t[c] = Uint8Array),
        (t[f] = Int16Array),
        (t[d] = Uint16Array),
        (t[b] = Int32Array),
        (t[g] = Uint32Array),
        (t[_] = Float32Array),
        (t[32819] = Uint16Array),
        (t[32820] = Uint16Array),
        (t[33635] = Uint16Array),
        (t[5131] = Uint16Array),
        (t[33640] = Uint32Array),
        (t[35899] = Uint32Array),
        (t[35902] = Uint32Array),
        (t[36269] = Uint32Array),
        (t[34042] = Uint32Array);
    }
    function m(t) {
      if (t instanceof Int8Array) return u;
      if (t instanceof Uint8Array) return c;
      if (t instanceof Uint8ClampedArray) return c;
      if (t instanceof Int16Array) return f;
      if (t instanceof Uint16Array) return d;
      if (t instanceof Int32Array) return b;
      if (t instanceof Uint32Array) return g;
      if (t instanceof Float32Array) return _;
      throw new Error("unsupported typed array type");
    }
    function v(t) {
      if (t === Int8Array) return u;
      if (t === Uint8Array) return c;
      if (t === Uint8ClampedArray) return c;
      if (t === Int16Array) return f;
      if (t === Uint16Array) return d;
      if (t === Int32Array) return b;
      if (t === Uint32Array) return g;
      if (t === Float32Array) return _;
      throw new Error("unsupported typed array type");
    }
    function x(t) {
      const e = p[t];
      if (!e) throw new Error("unknown gl type");
      return e;
    }
    const T =
      "undefined" != typeof SharedArrayBuffer
        ? function (t) {
            return (
              t &&
              t.buffer &&
              (t.buffer instanceof ArrayBuffer ||
                t.buffer instanceof SharedArrayBuffer)
            );
          }
        : function (t) {
            return t && t.buffer && t.buffer instanceof ArrayBuffer;
          };
    function w(...t) {
      console.error(...t);
    }
    const y = new Map();
    function A(t, e) {
      if (!t || "object" != typeof t) return !1;
      let i = y.get(e);
      i || ((i = new WeakMap()), y.set(e, i));
      let r = i.get(t);
      if (void 0 === r) {
        const n = Object.prototype.toString.call(t);
        (r = n.substring(8, n.length - 1) === e), i.set(t, r);
      }
      return r;
    }
    function E(t, e) {
      return "undefined" != typeof WebGLTexture && A(e, "WebGLTexture");
    }
    const M = 35044,
      C = 34962,
      S = 34963,
      k = 34660,
      D = 5120,
      F = 5121,
      R = 5122,
      I = 5123,
      U = 5124,
      P = 5125,
      O = 5126,
      z = { attribPrefix: "" };
    function B(t, e, i, r, n) {
      t.bindBuffer(e, i), t.bufferData(e, r, n || M);
    }
    function L(t, e, i, r) {
      if (((n = e), "undefined" != typeof WebGLBuffer && A(n, "WebGLBuffer")))
        return e;
      var n;
      i = i || C;
      const s = t.createBuffer();
      return B(t, i, s, e, r), s;
    }
    function H(t) {
      return "indices" === t;
    }
    function N(t) {
      return t.length ? t : t.data;
    }
    const G = /coord|texture/i,
      j = /color|colour/i;
    function W(t, e, i) {
      return (
        t.numComponents ||
        t.size ||
        (function (t, e) {
          let i;
          if (((i = G.test(t) ? 2 : j.test(t) ? 4 : 3), e % i > 0))
            throw new Error(
              `Can not guess numComponents for attribute '${t}'. Tried ${i} but ${e} values is not evenly divisible by ${i}. You should specify it.`
            );
          return i;
        })(e, i || N(t).length)
      );
    }
    function V(t, e) {
      if (T(t)) return t;
      if (T(t.data)) return t.data;
      Array.isArray(t) && (t = { data: t });
      let i = t.type ? q(t.type) : void 0;
      return i || (i = H(e) ? Uint16Array : Float32Array), new i(t.data);
    }
    function q(t) {
      return "number" == typeof t ? x(t) : t || Float32Array;
    }
    function Y(t, e) {
      return {
        buffer: e.buffer,
        numValues: 24,
        type: ((i = e.type), "number" == typeof i ? i : i ? v(i) : O),
        arrayType: q(e.type),
      };
      var i;
    }
    function X(t, e) {
      const i = e.data || e,
        r = q(e.type),
        n = i * r.BYTES_PER_ELEMENT,
        s = t.createBuffer();
      return (
        t.bindBuffer(C, s),
        t.bufferData(C, n, e.drawType || M),
        { buffer: s, numValues: i, type: v(r), arrayType: r }
      );
    }
    function Z(t, e, i) {
      const r = V(e, i);
      return {
        arrayType: r.constructor,
        buffer: L(t, r, void 0, e.drawType),
        type: m(r),
        numValues: 0,
      };
    }
    function J(t, e) {
      const i = {};
      return (
        Object.keys(e).forEach(function (r) {
          if (!H(r)) {
            const s = e[r],
              a = s.attrib || s.name || s.attribName || z.attribPrefix + r;
            if (s.value) {
              if (!Array.isArray(s.value) && !T(s.value))
                throw new Error("array.value is not array or typedarray");
              i[a] = { value: s.value };
            } else {
              let e;
              e =
                s.buffer && s.buffer instanceof WebGLBuffer
                  ? Y
                  : "number" == typeof s || "number" == typeof s.data
                  ? X
                  : Z;
              const {
                  buffer: o,
                  type: l,
                  numValues: h,
                  arrayType: u,
                } = e(t, s, r),
                c =
                  void 0 !== s.normalize
                    ? s.normalize
                    : (n = u) === Int8Array || n === Uint8Array,
                f = W(s, r, h);
              i[a] = {
                buffer: o,
                numComponents: f,
                type: l,
                normalize: c,
                stride: s.stride || 0,
                offset: s.offset || 0,
                divisor: void 0 === s.divisor ? void 0 : s.divisor,
                drawType: s.drawType,
              };
            }
          }
          var n;
        }),
        t.bindBuffer(C, null),
        i
      );
    }
    const K = ["position", "positions", "a_position"];
    function Q(t, e) {
      let i, r;
      for (
        r = 0;
        r < K.length &&
        ((i = K[r]), !(i in e)) &&
        ((i = z.attribPrefix + i), !(i in e));
        ++r
      );
      r === K.length && (i = Object.keys(e)[0]);
      const n = e[i];
      if (!n.buffer) return 1;
      t.bindBuffer(C, n.buffer);
      const s = t.getBufferParameter(C, k);
      t.bindBuffer(C, null);
      var a;
      const o =
          s /
          ((a = n.type) === D || a === F
            ? 1
            : a === R || a === I
            ? 2
            : a === U || a === P || a === O
            ? 4
            : 0),
        l = n.numComponents || n.size,
        h = o / l;
      if (h % 1 != 0)
        throw new Error(`numComponents ${l} not correct for length ${length}`);
      return h;
    }
    function tt(t, e, i) {
      const r = J(t, e),
        n = Object.assign({}, i || {});
      n.attribs = Object.assign({}, i ? i.attribs : {}, r);
      const s = e.indices;
      if (s) {
        const e = V(s, "indices");
        (n.indices = L(t, e, S)),
          (n.numElements = e.length),
          (n.elementType = m(e));
      } else n.numElements || (n.numElements = Q(t, n.attribs));
      return n;
    }
    function et(t, e, i) {
      const r = "indices" === i ? S : C;
      return L(t, V(e, i), r);
    }
    function it(t, e) {
      const i = {};
      return (
        Object.keys(e).forEach(function (r) {
          i[r] = et(t, e[r], r);
        }),
        e.indices
          ? ((i.numElements = e.indices.length),
            (i.elementType = m(V(e.indices))))
          : (i.numElements = (function (t) {
              let e, i;
              for (i = 0; i < K.length && ((e = K[i]), !(e in t)); ++i);
              i === K.length && (e = Object.keys(t)[0]);
              const r = t[e],
                n = N(r).length;
              if (void 0 === n) return 1;
              const s = W(r, e),
                a = n / s;
              if (n % s > 0)
                throw new Error(
                  `numComponents ${s} not correct for length ${n}`
                );
              return a;
            })(e)),
        i
      );
    }
    function rt(t, e) {
      let i = 0;
      return (
        (t.push = function () {
          for (let e = 0; e < arguments.length; ++e) {
            const r = arguments[e];
            if (r instanceof Array || T(r))
              for (let e = 0; e < r.length; ++e) t[i++] = r[e];
            else t[i++] = r;
          }
        }),
        (t.reset = function (t) {
          i = t || 0;
        }),
        (t.numComponents = e),
        Object.defineProperty(t, "numElements", {
          get: function () {
            return (this.length / this.numComponents) | 0;
          },
        }),
        t
      );
    }
    function nt(t, e, i) {
      return rt(new (i || Float32Array)(t * e), t);
    }
    function st(t, e, i) {
      const r = t.length,
        n = new Float32Array(3);
      for (let s = 0; s < r; s += 3)
        i(e, [t[s], t[s + 1], t[s + 2]], n),
          (t[s] = n[0]),
          (t[s + 1] = n[1]),
          (t[s + 2] = n[2]);
    }
    function at(t, i, r) {
      r = r || e();
      const n = i[0],
        s = i[1],
        a = i[2];
      return (
        (r[0] = n * t[0] + s * t[1] + a * t[2]),
        (r[1] = n * t[4] + s * t[5] + a * t[6]),
        (r[2] = n * t[8] + s * t[9] + a * t[10]),
        r
      );
    }
    function ot(t, e) {
      return st(t, e, h), t;
    }
    function lt(t, e) {
      return st(t, o(e), at), t;
    }
    function ht(t, e) {
      return st(t, e, l), t;
    }
    function ut(t, e) {
      return (
        Object.keys(t).forEach(function (i) {
          const r = t[i];
          i.indexOf("pos") >= 0
            ? ht(r, e)
            : i.indexOf("tan") >= 0 || i.indexOf("binorm") >= 0
            ? ot(r, e)
            : i.indexOf("norm") >= 0 && lt(r, e);
        }),
        t
      );
    }
    function ct(t, e, i) {
      return (
        (t = t || 2),
        {
          position: {
            numComponents: 2,
            data: [
              (e = e || 0) + -1 * (t *= 0.5),
              (i = i || 0) + -1 * t,
              e + 1 * t,
              i + -1 * t,
              e + -1 * t,
              i + 1 * t,
              e + 1 * t,
              i + 1 * t,
            ],
          },
          normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
          texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
          indices: [0, 1, 2, 2, 1, 3],
        }
      );
    }
    function ft(t, e, i, r, n) {
      (t = t || 1), (e = e || 1), (i = i || 1), (r = r || 1), (n = n || a());
      const s = (i + 1) * (r + 1),
        o = nt(3, s),
        l = nt(3, s),
        h = nt(2, s);
      for (let n = 0; n <= r; n++)
        for (let s = 0; s <= i; s++) {
          const a = s / i,
            u = n / r;
          o.push(t * a - 0.5 * t, 0, e * u - 0.5 * e),
            l.push(0, 1, 0),
            h.push(a, u);
        }
      const u = i + 1,
        c = nt(3, i * r * 2, Uint16Array);
      for (let t = 0; t < r; t++)
        for (let e = 0; e < i; e++)
          c.push((t + 0) * u + e, (t + 1) * u + e, (t + 0) * u + e + 1),
            c.push((t + 1) * u + e, (t + 1) * u + e + 1, (t + 0) * u + e + 1);
      return ut({ position: o, normal: l, texcoord: h, indices: c }, n);
    }
    function dt(t, e, i, r, n, s, a) {
      if (e <= 0 || i <= 0)
        throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
      (r = r || 0), (s = s || 0);
      const o = (n = n || Math.PI) - r,
        l = (a = a || 2 * Math.PI) - s,
        h = (e + 1) * (i + 1),
        u = nt(3, h),
        c = nt(3, h),
        f = nt(2, h);
      for (let n = 0; n <= i; n++)
        for (let a = 0; a <= e; a++) {
          const h = a / e,
            d = n / i,
            b = l * h + s,
            g = o * d + r,
            _ = Math.sin(b),
            p = Math.cos(b),
            m = Math.sin(g),
            v = p * m,
            x = Math.cos(g),
            T = _ * m;
          u.push(t * v, t * x, t * T), c.push(v, x, T), f.push(1 - h, d);
        }
      const d = e + 1,
        b = nt(3, e * i * 2, Uint16Array);
      for (let t = 0; t < e; t++)
        for (let e = 0; e < i; e++)
          b.push((e + 0) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t),
            b.push((e + 1) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t + 1);
      return { position: u, normal: c, texcoord: f, indices: b };
    }
    const bt = [
      [3, 7, 5, 1],
      [6, 2, 0, 4],
      [6, 7, 3, 2],
      [0, 1, 5, 4],
      [7, 6, 4, 5],
      [2, 3, 1, 0],
    ];
    function gt(t) {
      const e = (t = t || 1) / 2,
        i = [
          [-e, -e, -e],
          [+e, -e, -e],
          [-e, +e, -e],
          [+e, +e, -e],
          [-e, -e, +e],
          [+e, -e, +e],
          [-e, +e, +e],
          [+e, +e, +e],
        ],
        r = [
          [1, 0, 0],
          [-1, 0, 0],
          [0, 1, 0],
          [0, -1, 0],
          [0, 0, 1],
          [0, 0, -1],
        ],
        n = [
          [1, 0],
          [0, 0],
          [0, 1],
          [1, 1],
        ],
        s = nt(3, 24),
        a = nt(3, 24),
        o = nt(2, 24),
        l = nt(3, 12, Uint16Array);
      for (let t = 0; t < 6; ++t) {
        const e = bt[t];
        for (let l = 0; l < 4; ++l) {
          const h = i[e[l]],
            u = r[t],
            c = n[l];
          s.push(h), a.push(u), o.push(c);
        }
        const h = 4 * t;
        l.push(h + 0, h + 1, h + 2), l.push(h + 0, h + 2, h + 3);
      }
      return { position: s, normal: a, texcoord: o, indices: l };
    }
    function _t(t, e, i, r, n, s, a) {
      if (r < 3) throw new Error("radialSubdivisions must be 3 or greater");
      if (n < 1) throw new Error("verticalSubdivisions must be 1 or greater");
      const o = void 0 === s || s,
        l = void 0 === a || a,
        h = (o ? 2 : 0) + (l ? 2 : 0),
        u = (r + 1) * (n + 1 + h),
        c = nt(3, u),
        f = nt(3, u),
        d = nt(2, u),
        b = nt(3, r * (n + h / 2) * 2, Uint16Array),
        g = r + 1,
        _ = Math.atan2(t - e, i),
        p = Math.cos(_),
        m = Math.sin(_),
        v = n + (l ? 2 : 0);
      for (let s = o ? -2 : 0; s <= v; ++s) {
        let a,
          o = s / n,
          l = i * o;
        s < 0
          ? ((l = 0), (o = 1), (a = t))
          : s > n
          ? ((l = i), (o = 1), (a = e))
          : (a = t + (s / n) * (e - t)),
          (-2 !== s && s !== n + 2) || ((a = 0), (o = 0)),
          (l -= i / 2);
        for (let t = 0; t < g; ++t) {
          const e = Math.sin((t * Math.PI * 2) / r),
            i = Math.cos((t * Math.PI * 2) / r);
          c.push(e * a, l, i * a),
            s < 0
              ? f.push(0, -1, 0)
              : s > n
              ? f.push(0, 1, 0)
              : 0 === a
              ? f.push(0, 0, 0)
              : f.push(e * p, m, i * p),
            d.push(t / r, 1 - o);
        }
      }
      for (let t = 0; t < n + h; ++t)
        if (!((1 === t && o) || (t === n + h - 2 && l)))
          for (let e = 0; e < r; ++e)
            b.push(
              g * (t + 0) + 0 + e,
              g * (t + 0) + 1 + e,
              g * (t + 1) + 1 + e
            ),
              b.push(
                g * (t + 0) + 0 + e,
                g * (t + 1) + 1 + e,
                g * (t + 1) + 0 + e
              );
      return { position: c, normal: f, texcoord: d, indices: b };
    }
    function pt(t, e) {
      e = e || [];
      const i = [];
      for (let r = 0; r < t.length; r += 4) {
        const n = t[r],
          s = t.slice(r + 1, r + 4);
        s.push.apply(s, e);
        for (let t = 0; t < n; ++t) i.push.apply(i, s);
      }
      return i;
    }
    function mt() {
      const t = [
          0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0,
          0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0,
          30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30,
          0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100,
          0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30,
          67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0,
          100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100,
          30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30,
          30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0,
          30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0,
          67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0,
          67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0,
          30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0,
          30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150,
          0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0,
          0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0,
        ],
        e = pt([
          18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1,
          0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6,
          -1, 0, 0,
        ]),
        i = pt(
          [
            18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70,
            6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210,
            6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220,
          ],
          [255]
        ),
        r = t.length / 3,
        n = {
          position: nt(3, r),
          texcoord: nt(2, r),
          normal: nt(3, r),
          color: nt(4, r, Uint8Array),
          indices: nt(3, r / 3, Uint16Array),
        };
      n.position.push(t),
        n.texcoord.push([
          0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34,
          0.19, 0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31,
          0.62, 0.19, 0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49,
          0.55, 0.49, 0.43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0,
          1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0,
          1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0,
          1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0,
          1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0,
          0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,
          0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1,
          0,
        ]),
        n.normal.push(e),
        n.color.push(i);
      for (let t = 0; t < r; ++t) n.indices.push(t);
      return n;
    }
    function vt(t, e, i, s, a, o, l) {
      if (a <= 0) throw new Error("subdivisionDown must be > 0");
      const h = 2,
        u = (l = l || 1) - (o = o || 0),
        c = 2 * (a + 1) * (2 + h),
        f = nt(3, c),
        d = nt(3, c),
        b = nt(2, c);
      function g(t, e, i) {
        return t + (e - t) * i;
      }
      function _(e, i, l, c, _, p) {
        for (let m = 0; m <= a; m++) {
          const v = i / (h - 1),
            x = m / a,
            T = 2 * (v - 0.5),
            w = (o + x * u) * Math.PI,
            y = Math.sin(w),
            A = Math.cos(w),
            E = g(t, e, y),
            M = T * s,
            C = A * t,
            S = y * E;
          f.push(M, C, S);
          const k = r(n([0, y, A], l), c);
          d.push(k), b.push(v * _ + p, x);
        }
      }
      for (let t = 0; t < h; t++) {
        const r = 2 * (t / (h - 1) - 0.5);
        _(e, t, [1, 1, 1], [0, 0, 0], 1, 0),
          _(e, t, [0, 0, 0], [r, 0, 0], 0, 0),
          _(i, t, [1, 1, 1], [0, 0, 0], 1, 0),
          _(i, t, [0, 0, 0], [r, 0, 0], 0, 1);
      }
      const p = nt(3, 2 * a * (2 + h), Uint16Array);
      function m(t, e) {
        for (let i = 0; i < a; ++i)
          p.push(t + i + 0, t + i + 1, e + i + 0),
            p.push(t + i + 1, e + i + 1, e + i + 0);
      }
      const v = a + 1;
      return (
        m(0 * v, 4 * v),
        m(5 * v, 7 * v),
        m(6 * v, 2 * v),
        m(3 * v, 1 * v),
        { position: f, normal: d, texcoord: b, indices: p }
      );
    }
    function xt(t, e, i, r, n, s) {
      return _t(t, t, e, i, r, n, s);
    }
    function Tt(t, e, i, r, n, s) {
      if (i < 3) throw new Error("radialSubdivisions must be 3 or greater");
      if (r < 3) throw new Error("verticalSubdivisions must be 3 or greater");
      n = n || 0;
      const a = (s = s || 2 * Math.PI) - n,
        o = i + 1,
        l = r + 1,
        h = o * l,
        u = nt(3, h),
        c = nt(3, h),
        f = nt(2, h),
        d = nt(3, i * r * 2, Uint16Array);
      for (let s = 0; s < l; ++s) {
        const l = s / r,
          h = l * Math.PI * 2,
          d = Math.sin(h),
          b = t + d * e,
          g = Math.cos(h),
          _ = g * e;
        for (let t = 0; t < o; ++t) {
          const e = t / i,
            r = n + e * a,
            s = Math.sin(r),
            o = Math.cos(r),
            h = s * b,
            p = o * b,
            m = s * d,
            v = o * d;
          u.push(h, _, p), c.push(m, g, v), f.push(e, 1 - l);
        }
      }
      for (let t = 0; t < r; ++t)
        for (let e = 0; e < i; ++e) {
          const i = 1 + e,
            r = 1 + t;
          d.push(o * t + e, o * r + e, o * t + i),
            d.push(o * r + e, o * r + i, o * t + i);
        }
      return { position: u, normal: c, texcoord: f, indices: d };
    }
    function wt(t, e, i, r, n) {
      if (e < 3) throw new Error("divisions must be at least 3");
      (n = n || 1), (r = r || 0);
      const s = (e + 1) * ((i = i || 1) + 1),
        a = nt(3, s),
        o = nt(3, s),
        l = nt(2, s),
        h = nt(3, i * e * 2, Uint16Array);
      let u = 0;
      const c = t - r,
        f = e + 1;
      for (let t = 0; t <= i; ++t) {
        const s = r + c * Math.pow(t / i, n);
        for (let r = 0; r <= e; ++r) {
          const n = (2 * Math.PI * r) / e,
            c = s * Math.cos(n),
            d = s * Math.sin(n);
          if (
            (a.push(c, 0, d),
            o.push(0, 1, 0),
            l.push(1 - r / e, t / i),
            t > 0 && r !== e)
          ) {
            const t = u + (r + 1),
              e = u + r,
              i = u + r - f,
              n = u + (r + 1) - f;
            h.push(t, e, i), h.push(t, i, n);
          }
        }
        u += e + 1;
      }
      return { position: a, normal: o, texcoord: l, indices: h };
    }
    function yt(t) {
      return function (e) {
        return it(e, t.apply(this, Array.prototype.slice.call(arguments, 1)));
      };
    }
    function At(t) {
      return function (e) {
        return tt(e, t.apply(null, Array.prototype.slice.call(arguments, 1)));
      };
    }
    At(mt),
      yt(mt),
      At(gt),
      yt(gt),
      At(ft),
      yt(ft),
      At(dt),
      yt(dt),
      At(_t),
      yt(_t),
      At(ct),
      yt(ct),
      At(vt),
      yt(vt),
      At(xt),
      yt(xt),
      At(Tt),
      yt(Tt),
      At(wt),
      yt(wt);
    function Et(t) {
      return !!t.texStorage2D;
    }
    const Mt = (function () {
      const t = {},
        e = {};
      return function (i, r) {
        return (
          (function (i) {
            const r = i.constructor.name;
            if (!t[r]) {
              for (const t in i)
                if ("number" == typeof i[t]) {
                  const r = e[i[t]];
                  e[i[t]] = r ? `${r} | ${t}` : t;
                }
              t[r] = !0;
            }
          })(i),
          e[r] || ("number" == typeof r ? `0x${r.toString(16)}` : r)
        );
      };
    })();
    new Uint8Array([128, 192, 255, 255]),
      (function () {
        let t;
      })();
    const Ct = 6406,
      St = 6407,
      kt = 6408,
      Dt = 6409,
      Ft = 6410,
      Rt = 6402,
      It = 34041,
      Ut = 33319,
      Pt = 33320,
      Ot = 6403,
      zt = 36244,
      Bt = 36248,
      Lt = 36249,
      Ht = {};
    {
      const t = Ht;
      (t[Ct] = { numColorComponents: 1 }),
        (t[Dt] = { numColorComponents: 1 }),
        (t[Ft] = { numColorComponents: 2 }),
        (t[St] = { numColorComponents: 3 }),
        (t[kt] = { numColorComponents: 4 }),
        (t[Ot] = { numColorComponents: 1 }),
        (t[zt] = { numColorComponents: 1 }),
        (t[Ut] = { numColorComponents: 2 }),
        (t[Pt] = { numColorComponents: 2 }),
        (t[St] = { numColorComponents: 3 }),
        (t[Bt] = { numColorComponents: 3 }),
        (t[kt] = { numColorComponents: 4 }),
        (t[Lt] = { numColorComponents: 4 }),
        (t[Rt] = { numColorComponents: 1 }),
        (t[It] = { numColorComponents: 2 });
    }
    const Nt = w;
    function Gt(t) {
      return "undefined" != typeof document && document.getElementById
        ? document.getElementById(t)
        : null;
    }
    const jt = 33984,
      Wt = 34962,
      Vt = 35713,
      qt = 35714,
      Yt = 35632,
      Xt = 35633,
      Zt = 35981,
      Jt = 35718,
      Kt = 35721,
      $t = 35971,
      Qt = 35382,
      te = 35396,
      ee = 35398,
      ie = 35392,
      re = 35395,
      ne = 5126,
      se = 5124,
      ae = 5125,
      oe = 3553,
      le = 34067,
      he = 32879,
      ue = 35866,
      ce = {};
    function fe(t, e) {
      return ce[e].bindPoint;
    }
    function de(t, e) {
      return function (i) {
        t.uniform1i(e, i);
      };
    }
    function be(t, e) {
      return function (i) {
        t.uniform1iv(e, i);
      };
    }
    function ge(t, e) {
      return function (i) {
        t.uniform2iv(e, i);
      };
    }
    function _e(t, e) {
      return function (i) {
        t.uniform3iv(e, i);
      };
    }
    function pe(t, e) {
      return function (i) {
        t.uniform4iv(e, i);
      };
    }
    function me(t, e, i, r) {
      const n = fe(0, e);
      return Et(t)
        ? function (e) {
            let s, a;
            !e || E(0, e)
              ? ((s = e), (a = null))
              : ((s = e.texture), (a = e.sampler)),
              t.uniform1i(r, i),
              t.activeTexture(jt + i),
              t.bindTexture(n, s),
              t.bindSampler(i, a);
          }
        : function (e) {
            t.uniform1i(r, i), t.activeTexture(jt + i), t.bindTexture(n, e);
          };
    }
    function ve(t, e, i, r, n) {
      const s = fe(0, e),
        a = new Int32Array(n);
      for (let t = 0; t < n; ++t) a[t] = i + t;
      return Et(t)
        ? function (e) {
            t.uniform1iv(r, a),
              e.forEach(function (e, r) {
                let n, o;
                t.activeTexture(jt + a[r]),
                  !e || E(0, e)
                    ? ((n = e), (o = null))
                    : ((n = e.texture), (o = e.sampler)),
                  t.bindSampler(i, o),
                  t.bindTexture(s, n);
              });
          }
        : function (e) {
            t.uniform1iv(r, a),
              e.forEach(function (e, i) {
                t.activeTexture(jt + a[i]), t.bindTexture(s, e);
              });
          };
    }
    function xe(t, e) {
      return function (i) {
        if (i.value)
          switch ((t.disableVertexAttribArray(e), i.value.length)) {
            case 4:
              t.vertexAttrib4fv(e, i.value);
              break;
            case 3:
              t.vertexAttrib3fv(e, i.value);
              break;
            case 2:
              t.vertexAttrib2fv(e, i.value);
              break;
            case 1:
              t.vertexAttrib1fv(e, i.value);
              break;
            default:
              throw new Error(
                "the length of a float constant value must be between 1 and 4!"
              );
          }
        else
          t.bindBuffer(Wt, i.buffer),
            t.enableVertexAttribArray(e),
            t.vertexAttribPointer(
              e,
              i.numComponents || i.size,
              i.type || ne,
              i.normalize || !1,
              i.stride || 0,
              i.offset || 0
            ),
            t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0);
      };
    }
    function Te(t, e) {
      return function (i) {
        if (i.value) {
          if ((t.disableVertexAttribArray(e), 4 !== i.value.length))
            throw new Error(
              "The length of an integer constant value must be 4!"
            );
          t.vertexAttrib4iv(e, i.value);
        } else
          t.bindBuffer(Wt, i.buffer),
            t.enableVertexAttribArray(e),
            t.vertexAttribIPointer(
              e,
              i.numComponents || i.size,
              i.type || se,
              i.stride || 0,
              i.offset || 0
            ),
            t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0);
      };
    }
    function we(t, e) {
      return function (i) {
        if (i.value) {
          if ((t.disableVertexAttribArray(e), 4 !== i.value.length))
            throw new Error(
              "The length of an unsigned integer constant value must be 4!"
            );
          t.vertexAttrib4uiv(e, i.value);
        } else
          t.bindBuffer(Wt, i.buffer),
            t.enableVertexAttribArray(e),
            t.vertexAttribIPointer(
              e,
              i.numComponents || i.size,
              i.type || ae,
              i.stride || 0,
              i.offset || 0
            ),
            t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0);
      };
    }
    function ye(t, e, i) {
      const r = i.size,
        n = i.count;
      return function (i) {
        t.bindBuffer(Wt, i.buffer);
        const s = i.size || i.numComponents || r,
          a = s / n,
          o = i.type || ne,
          l = ce[o].size * s,
          h = i.normalize || !1,
          u = i.offset || 0,
          c = l / n;
        for (let r = 0; r < n; ++r)
          t.enableVertexAttribArray(e + r),
            t.vertexAttribPointer(e + r, a, o, h, l, u + c * r),
            t.vertexAttribDivisor &&
              t.vertexAttribDivisor(e + r, i.divisor || 0);
      };
    }
    (ce[5126] = {
      Type: Float32Array,
      size: 4,
      setter: function (t, e) {
        return function (i) {
          t.uniform1f(e, i);
        };
      },
      arraySetter: function (t, e) {
        return function (i) {
          t.uniform1fv(e, i);
        };
      },
    }),
      (ce[35664] = {
        Type: Float32Array,
        size: 8,
        setter: function (t, e) {
          return function (i) {
            t.uniform2fv(e, i);
          };
        },
        cols: 2,
      }),
      (ce[35665] = {
        Type: Float32Array,
        size: 12,
        setter: function (t, e) {
          return function (i) {
            t.uniform3fv(e, i);
          };
        },
        cols: 3,
      }),
      (ce[35666] = {
        Type: Float32Array,
        size: 16,
        setter: function (t, e) {
          return function (i) {
            t.uniform4fv(e, i);
          };
        },
        cols: 4,
      }),
      (ce[se] = { Type: Int32Array, size: 4, setter: de, arraySetter: be }),
      (ce[35667] = { Type: Int32Array, size: 8, setter: ge, cols: 2 }),
      (ce[35668] = { Type: Int32Array, size: 12, setter: _e, cols: 3 }),
      (ce[35669] = { Type: Int32Array, size: 16, setter: pe, cols: 4 }),
      (ce[5125] = {
        Type: Uint32Array,
        size: 4,
        setter: function (t, e) {
          return function (i) {
            t.uniform1ui(e, i);
          };
        },
        arraySetter: function (t, e) {
          return function (i) {
            t.uniform1uiv(e, i);
          };
        },
      }),
      (ce[36294] = {
        Type: Uint32Array,
        size: 8,
        setter: function (t, e) {
          return function (i) {
            t.uniform2uiv(e, i);
          };
        },
        cols: 2,
      }),
      (ce[36295] = {
        Type: Uint32Array,
        size: 12,
        setter: function (t, e) {
          return function (i) {
            t.uniform3uiv(e, i);
          };
        },
        cols: 3,
      }),
      (ce[36296] = {
        Type: Uint32Array,
        size: 16,
        setter: function (t, e) {
          return function (i) {
            t.uniform4uiv(e, i);
          };
        },
        cols: 4,
      }),
      (ce[35670] = { Type: Uint32Array, size: 4, setter: de, arraySetter: be }),
      (ce[35671] = { Type: Uint32Array, size: 8, setter: ge, cols: 2 }),
      (ce[35672] = { Type: Uint32Array, size: 12, setter: _e, cols: 3 }),
      (ce[35673] = { Type: Uint32Array, size: 16, setter: pe, cols: 4 }),
      (ce[35674] = {
        Type: Float32Array,
        size: 32,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix2fv(e, !1, i);
          };
        },
        rows: 2,
        cols: 2,
      }),
      (ce[35675] = {
        Type: Float32Array,
        size: 48,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix3fv(e, !1, i);
          };
        },
        rows: 3,
        cols: 3,
      }),
      (ce[35676] = {
        Type: Float32Array,
        size: 64,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix4fv(e, !1, i);
          };
        },
        rows: 4,
        cols: 4,
      }),
      (ce[35685] = {
        Type: Float32Array,
        size: 32,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix2x3fv(e, !1, i);
          };
        },
        rows: 2,
        cols: 3,
      }),
      (ce[35686] = {
        Type: Float32Array,
        size: 32,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix2x4fv(e, !1, i);
          };
        },
        rows: 2,
        cols: 4,
      }),
      (ce[35687] = {
        Type: Float32Array,
        size: 48,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix3x2fv(e, !1, i);
          };
        },
        rows: 3,
        cols: 2,
      }),
      (ce[35688] = {
        Type: Float32Array,
        size: 48,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix3x4fv(e, !1, i);
          };
        },
        rows: 3,
        cols: 4,
      }),
      (ce[35689] = {
        Type: Float32Array,
        size: 64,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix4x2fv(e, !1, i);
          };
        },
        rows: 4,
        cols: 2,
      }),
      (ce[35690] = {
        Type: Float32Array,
        size: 64,
        setter: function (t, e) {
          return function (i) {
            t.uniformMatrix4x3fv(e, !1, i);
          };
        },
        rows: 4,
        cols: 3,
      }),
      (ce[35678] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: oe,
      }),
      (ce[35680] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: le,
      }),
      (ce[35679] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: he,
      }),
      (ce[35682] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: oe,
      }),
      (ce[36289] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: ue,
      }),
      (ce[36292] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: ue,
      }),
      (ce[36293] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: le,
      }),
      (ce[36298] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: oe,
      }),
      (ce[36299] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: he,
      }),
      (ce[36300] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: le,
      }),
      (ce[36303] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: ue,
      }),
      (ce[36306] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: oe,
      }),
      (ce[36307] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: he,
      }),
      (ce[36308] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: le,
      }),
      (ce[36311] = {
        Type: null,
        size: 0,
        setter: me,
        arraySetter: ve,
        bindPoint: ue,
      });
    const Ae = {};
    (Ae[5126] = { size: 4, setter: xe }),
      (Ae[35664] = { size: 8, setter: xe }),
      (Ae[35665] = { size: 12, setter: xe }),
      (Ae[35666] = { size: 16, setter: xe }),
      (Ae[se] = { size: 4, setter: Te }),
      (Ae[35667] = { size: 8, setter: Te }),
      (Ae[35668] = { size: 12, setter: Te }),
      (Ae[35669] = { size: 16, setter: Te }),
      (Ae[5125] = { size: 4, setter: we }),
      (Ae[36294] = { size: 8, setter: we }),
      (Ae[36295] = { size: 12, setter: we }),
      (Ae[36296] = { size: 16, setter: we }),
      (Ae[35670] = { size: 4, setter: Te }),
      (Ae[35671] = { size: 8, setter: Te }),
      (Ae[35672] = { size: 12, setter: Te }),
      (Ae[35673] = { size: 16, setter: Te }),
      (Ae[35674] = { size: 4, setter: ye, count: 2 }),
      (Ae[35675] = { size: 9, setter: ye, count: 3 }),
      (Ae[35676] = { size: 16, setter: ye, count: 4 });
    const Ee = /ERROR:\s*\d+:(\d+)/gi;
    const Me = /^[ \t]*\n/;
    function Ce(t) {
      let e = 0;
      return (
        Me.test(t) && ((e = 1), (t = t.replace(Me, ""))),
        { lineOffset: e, shaderSource: t }
      );
    }
    function Se(t, e) {
      return (
        t.errorCallback(e),
        t.callback &&
          setTimeout(() => {
            t.callback(`${e}\n${t.errors.join("\n")}`);
          }),
        null
      );
    }
    function ke(t, e, i, r) {
      r = r || Nt;
      if (!t.getShaderParameter(i, Vt)) {
        const n = t.getShaderInfoLog(i),
          { lineOffset: s, shaderSource: a } = Ce(t.getShaderSource(i)),
          o = `${(function (t, e = "", i = 0) {
            const r = [...e.matchAll(Ee)],
              n = new Map(
                r.map((t, i) => {
                  const n = parseInt(t[1]),
                    s = r[i + 1],
                    a = s ? s.index : e.length;
                  return [n - 1, e.substring(t.index, a)];
                })
              );
            return t
              .split("\n")
              .map((t, e) => {
                const r = n.get(e);
                return `${e + 1 + i}: ${t}${r ? `\n\n^^^ ${r}` : ""}`;
              })
              .join("\n");
          })(a, n, s)}\nError compiling ${Mt(t, e)}: ${n}`;
        return r(o), o;
      }
      return "";
    }
    function De(t, e, i) {
      let r, n, s;
      if (
        ("function" == typeof e && ((i = e), (e = void 0)),
        "function" == typeof t)
      )
        (i = t), (t = void 0);
      else if (t && !Array.isArray(t)) {
        const e = t;
        (i = e.errorCallback),
          (t = e.attribLocations),
          (r = e.transformFeedbackVaryings),
          (n = e.transformFeedbackMode),
          (s = e.callback);
      }
      const a = i || Nt,
        o = [],
        l = {
          errorCallback(t, ...e) {
            o.push(t), a(t, ...e);
          },
          transformFeedbackVaryings: r,
          transformFeedbackMode: n,
          callback: s,
          errors: o,
        };
      {
        let i = {};
        Array.isArray(t)
          ? t.forEach(function (t, r) {
              i[t] = e ? e[r] : r;
            })
          : (i = t || {}),
          (l.attribLocations = i);
      }
      return l;
    }
    const Fe = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
    const Re = (t = 0) => new Promise((e) => setTimeout(e, t));
    function Ie(t, e, i) {
      const r = t.createProgram(),
        {
          attribLocations: n,
          transformFeedbackVaryings: s,
          transformFeedbackMode: a,
        } = De(i);
      for (let i = 0; i < e.length; ++i) {
        let n = e[i];
        if ("string" == typeof n) {
          const e = Gt(n),
            s = e ? e.text : n;
          let a = t[Fe[i]];
          e &&
            e.type &&
            (a =
              ((o = e.type).indexOf("frag") >= 0
                ? Yt
                : o.indexOf("vert") >= 0
                ? Xt
                : void 0) || a),
            (n = t.createShader(a)),
            t.shaderSource(n, Ce(s).shaderSource),
            t.compileShader(n),
            t.attachShader(r, n);
        }
      }
      var o;
      Object.entries(n).forEach(([e, i]) => t.bindAttribLocation(r, i, e));
      {
        let e = s;
        e &&
          (e.attribs && (e = e.attribs),
          Array.isArray(e) || (e = Object.keys(e)),
          t.transformFeedbackVaryings(r, e, a || Zt));
      }
      return t.linkProgram(r), r;
    }
    function Ue(t, e, i, r, n) {
      const s = De(i, r, n),
        a = new Set(e),
        o = Ie(t, e, s);
      function l(t, e) {
        const i = ze(t, e, s.errorCallback);
        return (
          i &&
            (function (t, e, i) {
              const r = t.getAttachedShaders(e);
              for (const e of r) i.has(e) && t.deleteShader(e);
              t.deleteProgram(e);
            })(t, e, a),
          i
        );
      }
      if (!s.callback) return l(t, o) ? void 0 : o;
      Oe(t, o).then(() => {
        const e = l(t, o);
        s.callback(e, e ? void 0 : o);
      });
    }
    function Pe(t) {
      return function (e, i, ...r) {
        return new Promise((n, s) => {
          const a = De(...r);
          (a.callback = (t, e) => {
            t ? s(t) : n(e);
          }),
            t(e, i, a);
        });
      };
    }
    Pe(Ue), Pe(Ke);
    async function Oe(t, e) {
      const i = t.getExtension("KHR_parallel_shader_compile"),
        r = i
          ? (t, e) => t.getProgramParameter(e, i.COMPLETION_STATUS_KHR)
          : () => !0;
      let n = 0;
      do {
        await Re(n), (n = 1e3 / 60);
      } while (!r(t, e));
    }
    function ze(t, e, i) {
      i = i || Nt;
      if (!t.getProgramParameter(e, qt)) {
        const r = t.getProgramInfoLog(e);
        i(`Error in program linking: ${r}`);
        return `${r}\n${t
          .getAttachedShaders(e)
          .map((e) => ke(t, t.getShaderParameter(e, t.SHADER_TYPE), e, i))
          .filter((t) => t)
          .join("\n")}`;
      }
    }
    function Be(t, e, i, r, n) {
      return Ue(t, e, i, r, n);
    }
    function Le(t) {
      const e = t.name;
      return e.startsWith("gl_") || e.startsWith("webgl_");
    }
    const He = /(\.|\[|]|\w+)/g,
      Ne = (t) => t >= "0" && t <= "9";
    function Ge(t, e, i, r) {
      const n = t.split(He).filter((t) => "" !== t);
      let s = 0,
        a = "";
      for (;;) {
        const t = n[s++];
        a += t;
        const o = Ne(t[0]),
          l = o ? parseInt(t) : t;
        o && (a += n[s++]);
        if (s === n.length) {
          i[l] = e;
          break;
        }
        {
          const t = n[s++],
            e = "[" === t,
            o = i[l] || (e ? [] : {});
          (i[l] = o),
            (i = o),
            (r[a] =
              r[a] ||
              (function (t) {
                return function (e) {
                  qe(t, e);
                };
              })(o)),
            (a += t);
        }
      }
    }
    function je(t, e) {
      let i = 0;
      function r(e, r, n) {
        const s = r.name.endsWith("[0]"),
          a = r.type,
          o = ce[a];
        if (!o) throw new Error(`unknown type: 0x${a.toString(16)}`);
        let l;
        if (o.bindPoint) {
          const e = i;
          (i += r.size),
            (l = s
              ? o.arraySetter(t, a, e, n, r.size)
              : o.setter(t, a, e, n, r.size));
        } else l = o.arraySetter && s ? o.arraySetter(t, n) : o.setter(t, n);
        return (l.location = n), l;
      }
      const n = {},
        s = {},
        a = t.getProgramParameter(e, Jt);
      for (let i = 0; i < a; ++i) {
        const a = t.getActiveUniform(e, i);
        if (Le(a)) continue;
        let o = a.name;
        o.endsWith("[0]") && (o = o.substr(0, o.length - 3));
        const l = t.getUniformLocation(e, a.name);
        if (l) {
          const t = r(0, a, l);
          (n[o] = t), Ge(o, t, s, n);
        }
      }
      return n;
    }
    function We(t, e) {
      const i = {},
        r = t.getProgramParameter(e, $t);
      for (let n = 0; n < r; ++n) {
        const r = t.getTransformFeedbackVarying(e, n);
        i[r.name] = { index: n, type: r.type, size: r.size };
      }
      return i;
    }
    function Ve(t, e) {
      const i = t.getProgramParameter(e, Jt),
        r = [],
        n = [];
      for (let s = 0; s < i; ++s) {
        n.push(s), r.push({});
        const i = t.getActiveUniform(e, s);
        r[s].name = i.name;
      }
      [
        ["UNIFORM_TYPE", "type"],
        ["UNIFORM_SIZE", "size"],
        ["UNIFORM_BLOCK_INDEX", "blockNdx"],
        ["UNIFORM_OFFSET", "offset"],
      ].forEach(function (i) {
        const s = i[0],
          a = i[1];
        t.getActiveUniforms(e, n, t[s]).forEach(function (t, e) {
          r[e][a] = t;
        });
      });
      const s = {},
        a = t.getProgramParameter(e, Qt);
      for (let i = 0; i < a; ++i) {
        const r = t.getActiveUniformBlockName(e, i),
          n = {
            index: t.getUniformBlockIndex(e, r),
            usedByVertexShader: t.getActiveUniformBlockParameter(e, i, te),
            usedByFragmentShader: t.getActiveUniformBlockParameter(e, i, ee),
            size: t.getActiveUniformBlockParameter(e, i, ie),
            uniformIndices: t.getActiveUniformBlockParameter(e, i, re),
          };
        (n.used = n.usedByVertexShader || n.usedByFragmentShader), (s[r] = n);
      }
      return { blockSpecs: s, uniformData: r };
    }
    function qe(t, e) {
      for (const i in e) {
        const r = t[i];
        "function" == typeof r ? r(e[i]) : qe(t[i], e[i]);
      }
    }
    function Ye(t, ...e) {
      const i = t.uniformSetters || t,
        r = e.length;
      for (let t = 0; t < r; ++t) {
        const r = e[t];
        if (Array.isArray(r)) {
          const t = r.length;
          for (let e = 0; e < t; ++e) Ye(i, r[e]);
        } else
          for (const t in r) {
            const e = i[t];
            e && e(r[t]);
          }
      }
    }
    function Xe(t, e) {
      const i = {},
        r = t.getProgramParameter(e, Kt);
      for (let n = 0; n < r; ++n) {
        const r = t.getActiveAttrib(e, n);
        if (Le(r)) continue;
        const s = t.getAttribLocation(e, r.name),
          a = Ae[r.type],
          o = a.setter(t, s, a);
        (o.location = s), (i[r.name] = o);
      }
      return i;
    }
    function Ze(t, e) {
      const i = {
        program: e,
        uniformSetters: je(t, e),
        attribSetters: Xe(t, e),
      };
      return (
        Et(t) &&
          ((i.uniformBlockSpec = Ve(t, e)),
          (i.transformFeedbackInfo = We(t, e))),
        i
      );
    }
    const Je = /\s|{|}|;/;
    function Ke(t, e, i, r, n) {
      const s = De(i, r, n),
        a = [];
      if (
        ((e = e.map(function (t) {
          if (!Je.test(t)) {
            const e = Gt(t);
            if (e) t = e.text;
            else {
              const e = `no element with id: ${t}`;
              s.errorCallback(e), a.push(e);
            }
          }
          return t;
        })),
        a.length)
      )
        return Se(s, "");
      const o = s.callback;
      o &&
        (s.callback = (e, i) => {
          o(e, e ? void 0 : Ze(t, i));
        });
      const l = Be(t, e, s);
      return l ? Ze(t, l) : null;
    }
    function $e(t, e, i, r, n) {
      for (const [s, a] of Object.entries(e)) {
        const o = { ...n },
          l = i[s];
        Array.isArray(l) || Object.assign(o, l);
        const h = ze(t, a, o.errorCallback);
        if (h) {
          for (const i of Object.values(e)) {
            const e = t.getAttachedShaders(i);
            t.deleteProgram(i);
            for (const i of e) r.has(i) || t.deleteShader(i);
          }
          return h;
        }
      }
    }
    function Qe(t, e, i = {}) {
      const r = new Set(),
        n = Object.fromEntries(
          Object.entries(e).map(([e, n]) => {
            const s = { ...i },
              a = Array.isArray(n) ? n : n.shaders;
            return (
              Array.isArray(n) || Object.assign(s, n),
              a.forEach(r.add, r),
              [e, Ie(t, a, s)]
            );
          })
        );
      if (i.callback)
        return void (async function (t, e) {
          for (const i of Object.values(e)) await Oe(t, i);
        })(t, n).then(() => {
          const s = $e(t, n, e, r, i);
          i.callback(s, s ? void 0 : n);
        });
      return $e(t, n, e, r, i) ? void 0 : n;
    }
    function ti(t, e, i) {
      function r(t, e) {
        return Object.fromEntries(
          Object.entries(e).map(([e, i]) => [e, Ze(t, i)])
        );
      }
      const n = (i = De(i)).callback;
      n &&
        (i.callback = (e, i) => {
          n(e, e ? void 0 : r(t, i));
        });
      const s = Qe(t, e, i);
      if (!n && s) return r(t, s);
    }
    Pe(Qe), Pe(ti);
    const ei = 36096,
      ii = 33306,
      ri = {};
    (ri[34041] = ii),
      (ri[6401] = 36128),
      (ri[36168] = 36128),
      (ri[6402] = ei),
      (ri[33189] = ei),
      (ri[33190] = ei),
      (ri[36012] = ei),
      (ri[35056] = ii),
      (ri[36013] = ii);
    const ni = {};
    (ni[32854] = !0),
      (ni[32855] = !0),
      (ni[36194] = !0),
      (ni[34041] = !0),
      (ni[33189] = !0),
      (ni[6401] = !0),
      (ni[36168] = !0);
    var si = {};
    const ai = {
      position: 3,
      normal: 3,
      tangent: 3,
      texcoord: 2,
      texcoord0: 2,
      texcoord1: 2,
      texcoord2: 2,
    };
    var oi = {};
    class li {
      constructor() {
        this.attribs = {};
      }
      disableAll() {
        for (let t in this.attribs)
          this.gl.disableVertexAttribArray(this.attribs[t]);
        this.attribs = {};
      }
      enable(t, e) {
        this.gl = t;
        var i = {};
        for (let n in e) {
          var r = e[n];
          void 0 !== r.loc &&
            (void 0 === this.attribs[r.loc] && t.enableVertexAttribArray(r.loc),
            t.vertexAttribPointer(
              r.loc,
              r.size,
              r.type,
              !1,
              r.stride,
              r.offset
            ),
            (i[r.loc] = r.loc),
            (this.attribs[n] = null));
        }
        for (let t in this.attribs);
        this.attribs = i;
      }
    }
    class hi {
      static CreateProgramAttributes(t, e) {
        var i = {},
          r = 0;
        for (let a in e) {
          var n = e[a],
            s = ai[a];
          (i[n] = { type: t.FLOAT, size: s, offset: 4 * r }), (r += s);
        }
        for (let t in i) i[t].stride = 4 * r;
        return i;
      }
      CleanUpPrograms() {
        oi = {};
      }
      ReleaseProgram(t) {}
      static _GetProgram(t) {
        return oi[t];
      }
      static RegisterProgram(t, e) {
        if (!oi[t]) {
          var i = e.shaders;
          oi[t] = { shaders: [i[0], i[1]], attributes: e.attributes };
        }
        return oi[t];
      }
      static GetProgram(t, e, i, r) {
        var n = oi[e],
          s = "";
        for (var a in i) s += a + ":" + i[a] + "-";
        if (!n) {
          var o = e.split("."),
            l = si[o[0]][o[1]];
          l && (n = hi.RegisterProgram(e, l));
        }
        if (!n) throw "Program not registered: " + o;
        n.programInfo || (n.programInfo = {}),
          (n.programInfo[s] = hi.CompileProgram(t, n.shaders, i)),
          (r =
            r || (n.attributes && hi.CreateProgramAttributes(t, n.attributes)));
        var h = n.programInfo[s];
        if (r)
          for (var a in r) {
            var u = h.attribSetters[a];
            u && ((r[a] = r[a] || {}), (r[a].loc = u.location));
          }
        return (h.attributes = r), h;
      }
      static CompileProgram(t, e, i, r) {
        var n = "";
        for (var s in i) {
          var a = i[s];
          n = "#define " + s + " " + (null === a ? "" : a) + "\n";
        }
        var o = {};
        const l = Ke(t, [n + e[0], n + e[1]], null, null);
        if (r)
          for (var s in r) {
            var h = l.attribSetters[s];
            h && ((r[s] = r[s] || {}), (r[s].loc = h.location));
          }
        for (var s in l.uniformSetters) o[s] = l.uniformSetters[s].location;
        return (l.uniforms = o), l;
      }
    }
    var ui = new hi(),
      ci = 1e-6,
      fi = "undefined" != typeof Float32Array ? Float32Array : Array;
    Math.random;
    Math.PI;
    function di() {
      var t = new fi(3);
      return fi != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
    }
    function bi(t) {
      var e = new fi(3);
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
    }
    function gi(t) {
      var e = t[0],
        i = t[1],
        r = t[2];
      return Math.hypot(e, i, r);
    }
    function _i(t, e, i) {
      var r = new fi(3);
      return (r[0] = t), (r[1] = e), (r[2] = i), r;
    }
    function pi(t, e) {
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
    }
    function mi(t, e, i, r) {
      return (t[0] = e), (t[1] = i), (t[2] = r), t;
    }
    function vi(t, e, i) {
      return (
        (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t
      );
    }
    function xi(t, e, i) {
      return (
        (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t
      );
    }
    function Ti(t, e, i) {
      return (
        (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), (t[2] = e[2] * i[2]), t
      );
    }
    function wi(t, e, i) {
      return (
        (t[0] = Math.min(e[0], i[0])),
        (t[1] = Math.min(e[1], i[1])),
        (t[2] = Math.min(e[2], i[2])),
        t
      );
    }
    function yi(t, e, i) {
      return (
        (t[0] = Math.max(e[0], i[0])),
        (t[1] = Math.max(e[1], i[1])),
        (t[2] = Math.max(e[2], i[2])),
        t
      );
    }
    function Ai(t, e, i) {
      return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t;
    }
    function Ei(t, e, i, r) {
      return (
        (t[0] = e[0] + i[0] * r),
        (t[1] = e[1] + i[1] * r),
        (t[2] = e[2] + i[2] * r),
        t
      );
    }
    function Mi(t) {
      var e = t[0],
        i = t[1],
        r = t[2];
      return e * e + i * i + r * r;
    }
    function Ci(t, e) {
      return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
    }
    function Si(t, e) {
      var i = e[0],
        r = e[1],
        n = e[2],
        s = i * i + r * r + n * n;
      return (
        s > 0 && (s = 1 / Math.sqrt(s)),
        (t[0] = e[0] * s),
        (t[1] = e[1] * s),
        (t[2] = e[2] * s),
        t
      );
    }
    function ki(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
    }
    function Di(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2],
        a = i[0],
        o = i[1],
        l = i[2];
      return (
        (t[0] = n * l - s * o),
        (t[1] = s * a - r * l),
        (t[2] = r * o - n * a),
        t
      );
    }
    function Fi(t, e, i, r) {
      var n = e[0],
        s = e[1],
        a = e[2];
      return (
        (t[0] = n + r * (i[0] - n)),
        (t[1] = s + r * (i[1] - s)),
        (t[2] = a + r * (i[2] - a)),
        t
      );
    }
    function Ri(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2],
        a = i[3] * r + i[7] * n + i[11] * s + i[15];
      return (
        (a = a || 1),
        (t[0] = (i[0] * r + i[4] * n + i[8] * s + i[12]) / a),
        (t[1] = (i[1] * r + i[5] * n + i[9] * s + i[13]) / a),
        (t[2] = (i[2] * r + i[6] * n + i[10] * s + i[14]) / a),
        t
      );
    }
    function Ii(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2];
      return (
        (t[0] = r * i[0] + n * i[3] + s * i[6]),
        (t[1] = r * i[1] + n * i[4] + s * i[7]),
        (t[2] = r * i[2] + n * i[5] + s * i[8]),
        t
      );
    }
    Math.hypot ||
      (Math.hypot = function () {
        for (var t = 0, e = arguments.length; e--; )
          t += arguments[e] * arguments[e];
        return Math.sqrt(t);
      });
    var Ui,
      Pi = xi,
      Oi = gi;
    Ui = di();
    function zi() {
      var t = new fi(16);
      return (
        fi != Float32Array &&
          ((t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0)),
        (t[0] = 1),
        (t[5] = 1),
        (t[10] = 1),
        (t[15] = 1),
        t
      );
    }
    function Bi(t, e) {
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        t
      );
    }
    function Li(t, e, i, r, n, s, a, o, l, h, u, c, f, d, b, g) {
      var _ = new fi(16);
      return (
        (_[0] = t),
        (_[1] = e),
        (_[2] = i),
        (_[3] = r),
        (_[4] = n),
        (_[5] = s),
        (_[6] = a),
        (_[7] = o),
        (_[8] = l),
        (_[9] = h),
        (_[10] = u),
        (_[11] = c),
        (_[12] = f),
        (_[13] = d),
        (_[14] = b),
        (_[15] = g),
        _
      );
    }
    function Hi(t) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    }
    function Ni(t, e) {
      if (t === e) {
        var i = e[1],
          r = e[2],
          n = e[3],
          s = e[6],
          a = e[7],
          o = e[11];
        (t[1] = e[4]),
          (t[2] = e[8]),
          (t[3] = e[12]),
          (t[4] = i),
          (t[6] = e[9]),
          (t[7] = e[13]),
          (t[8] = r),
          (t[9] = s),
          (t[11] = e[14]),
          (t[12] = n),
          (t[13] = a),
          (t[14] = o);
      } else
        (t[0] = e[0]),
          (t[1] = e[4]),
          (t[2] = e[8]),
          (t[3] = e[12]),
          (t[4] = e[1]),
          (t[5] = e[5]),
          (t[6] = e[9]),
          (t[7] = e[13]),
          (t[8] = e[2]),
          (t[9] = e[6]),
          (t[10] = e[10]),
          (t[11] = e[14]),
          (t[12] = e[3]),
          (t[13] = e[7]),
          (t[14] = e[11]),
          (t[15] = e[15]);
      return t;
    }
    function Gi(t, e) {
      var i = e[0],
        r = e[1],
        n = e[2],
        s = e[3],
        a = e[4],
        o = e[5],
        l = e[6],
        h = e[7],
        u = e[8],
        c = e[9],
        f = e[10],
        d = e[11],
        b = e[12],
        g = e[13],
        _ = e[14],
        p = e[15],
        m = i * o - r * a,
        v = i * l - n * a,
        x = i * h - s * a,
        T = r * l - n * o,
        w = r * h - s * o,
        y = n * h - s * l,
        A = u * g - c * b,
        E = u * _ - f * b,
        M = u * p - d * b,
        C = c * _ - f * g,
        S = c * p - d * g,
        k = f * p - d * _,
        D = m * k - v * S + x * C + T * M - w * E + y * A;
      return D
        ? ((D = 1 / D),
          (t[0] = (o * k - l * S + h * C) * D),
          (t[1] = (n * S - r * k - s * C) * D),
          (t[2] = (g * y - _ * w + p * T) * D),
          (t[3] = (f * w - c * y - d * T) * D),
          (t[4] = (l * M - a * k - h * E) * D),
          (t[5] = (i * k - n * M + s * E) * D),
          (t[6] = (_ * x - b * y - p * v) * D),
          (t[7] = (u * y - f * x + d * v) * D),
          (t[8] = (a * S - o * M + h * A) * D),
          (t[9] = (r * M - i * S - s * A) * D),
          (t[10] = (b * w - g * x + p * m) * D),
          (t[11] = (c * x - u * w - d * m) * D),
          (t[12] = (o * E - a * C - l * A) * D),
          (t[13] = (i * C - r * E + n * A) * D),
          (t[14] = (g * v - b * T - _ * m) * D),
          (t[15] = (u * T - c * v + f * m) * D),
          t)
        : null;
    }
    function ji(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2],
        a = e[3],
        o = e[4],
        l = e[5],
        h = e[6],
        u = e[7],
        c = e[8],
        f = e[9],
        d = e[10],
        b = e[11],
        g = e[12],
        _ = e[13],
        p = e[14],
        m = e[15],
        v = i[0],
        x = i[1],
        T = i[2],
        w = i[3];
      return (
        (t[0] = v * r + x * o + T * c + w * g),
        (t[1] = v * n + x * l + T * f + w * _),
        (t[2] = v * s + x * h + T * d + w * p),
        (t[3] = v * a + x * u + T * b + w * m),
        (v = i[4]),
        (x = i[5]),
        (T = i[6]),
        (w = i[7]),
        (t[4] = v * r + x * o + T * c + w * g),
        (t[5] = v * n + x * l + T * f + w * _),
        (t[6] = v * s + x * h + T * d + w * p),
        (t[7] = v * a + x * u + T * b + w * m),
        (v = i[8]),
        (x = i[9]),
        (T = i[10]),
        (w = i[11]),
        (t[8] = v * r + x * o + T * c + w * g),
        (t[9] = v * n + x * l + T * f + w * _),
        (t[10] = v * s + x * h + T * d + w * p),
        (t[11] = v * a + x * u + T * b + w * m),
        (v = i[12]),
        (x = i[13]),
        (T = i[14]),
        (w = i[15]),
        (t[12] = v * r + x * o + T * c + w * g),
        (t[13] = v * n + x * l + T * f + w * _),
        (t[14] = v * s + x * h + T * d + w * p),
        (t[15] = v * a + x * u + T * b + w * m),
        t
      );
    }
    function Wi(t, e, i) {
      var r,
        n,
        s,
        a,
        o,
        l,
        h,
        u,
        c,
        f,
        d,
        b,
        g = i[0],
        _ = i[1],
        p = i[2];
      return (
        e === t
          ? ((t[12] = e[0] * g + e[4] * _ + e[8] * p + e[12]),
            (t[13] = e[1] * g + e[5] * _ + e[9] * p + e[13]),
            (t[14] = e[2] * g + e[6] * _ + e[10] * p + e[14]),
            (t[15] = e[3] * g + e[7] * _ + e[11] * p + e[15]))
          : ((r = e[0]),
            (n = e[1]),
            (s = e[2]),
            (a = e[3]),
            (o = e[4]),
            (l = e[5]),
            (h = e[6]),
            (u = e[7]),
            (c = e[8]),
            (f = e[9]),
            (d = e[10]),
            (b = e[11]),
            (t[0] = r),
            (t[1] = n),
            (t[2] = s),
            (t[3] = a),
            (t[4] = o),
            (t[5] = l),
            (t[6] = h),
            (t[7] = u),
            (t[8] = c),
            (t[9] = f),
            (t[10] = d),
            (t[11] = b),
            (t[12] = r * g + o * _ + c * p + e[12]),
            (t[13] = n * g + l * _ + f * p + e[13]),
            (t[14] = s * g + h * _ + d * p + e[14]),
            (t[15] = a * g + u * _ + b * p + e[15])),
        t
      );
    }
    function Vi(t, e, i) {
      var r = i[0],
        n = i[1],
        s = i[2];
      return (
        (t[0] = e[0] * r),
        (t[1] = e[1] * r),
        (t[2] = e[2] * r),
        (t[3] = e[3] * r),
        (t[4] = e[4] * n),
        (t[5] = e[5] * n),
        (t[6] = e[6] * n),
        (t[7] = e[7] * n),
        (t[8] = e[8] * s),
        (t[9] = e[9] * s),
        (t[10] = e[10] * s),
        (t[11] = e[11] * s),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        t
      );
    }
    function qi(t, e, i) {
      var r = Math.sin(i),
        n = Math.cos(i),
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[7],
        h = e[8],
        u = e[9],
        c = e[10],
        f = e[11];
      return (
        e !== t &&
          ((t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[12] = e[12]),
          (t[13] = e[13]),
          (t[14] = e[14]),
          (t[15] = e[15])),
        (t[4] = s * n + h * r),
        (t[5] = a * n + u * r),
        (t[6] = o * n + c * r),
        (t[7] = l * n + f * r),
        (t[8] = h * n - s * r),
        (t[9] = u * n - a * r),
        (t[10] = c * n - o * r),
        (t[11] = f * n - l * r),
        t
      );
    }
    function Yi(t, e, i) {
      var r = Math.sin(i),
        n = Math.cos(i),
        s = e[0],
        a = e[1],
        o = e[2],
        l = e[3],
        h = e[8],
        u = e[9],
        c = e[10],
        f = e[11];
      return (
        e !== t &&
          ((t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[12] = e[12]),
          (t[13] = e[13]),
          (t[14] = e[14]),
          (t[15] = e[15])),
        (t[0] = s * n - h * r),
        (t[1] = a * n - u * r),
        (t[2] = o * n - c * r),
        (t[3] = l * n - f * r),
        (t[8] = s * r + h * n),
        (t[9] = a * r + u * n),
        (t[10] = o * r + c * n),
        (t[11] = l * r + f * n),
        t
      );
    }
    function Xi(t, e, i) {
      var r = Math.sin(i),
        n = Math.cos(i),
        s = e[0],
        a = e[1],
        o = e[2],
        l = e[3],
        h = e[4],
        u = e[5],
        c = e[6],
        f = e[7];
      return (
        e !== t &&
          ((t[8] = e[8]),
          (t[9] = e[9]),
          (t[10] = e[10]),
          (t[11] = e[11]),
          (t[12] = e[12]),
          (t[13] = e[13]),
          (t[14] = e[14]),
          (t[15] = e[15])),
        (t[0] = s * n + h * r),
        (t[1] = a * n + u * r),
        (t[2] = o * n + c * r),
        (t[3] = l * n + f * r),
        (t[4] = h * n - s * r),
        (t[5] = u * n - a * r),
        (t[6] = c * n - o * r),
        (t[7] = f * n - l * r),
        t
      );
    }
    function Zi(t, e) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = e[0]),
        (t[13] = e[1]),
        (t[14] = e[2]),
        (t[15] = 1),
        t
      );
    }
    function Ji(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2],
        a = e[3],
        o = r + r,
        l = n + n,
        h = s + s,
        u = r * o,
        c = r * l,
        f = r * h,
        d = n * l,
        b = n * h,
        g = s * h,
        _ = a * o,
        p = a * l,
        m = a * h;
      return (
        (t[0] = 1 - (d + g)),
        (t[1] = c + m),
        (t[2] = f - p),
        (t[3] = 0),
        (t[4] = c - m),
        (t[5] = 1 - (u + g)),
        (t[6] = b + _),
        (t[7] = 0),
        (t[8] = f + p),
        (t[9] = b - _),
        (t[10] = 1 - (u + d)),
        (t[11] = 0),
        (t[12] = i[0]),
        (t[13] = i[1]),
        (t[14] = i[2]),
        (t[15] = 1),
        t
      );
    }
    function Ki(t, e) {
      return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
    }
    function $i(t, e) {
      var i = e[0],
        r = e[1],
        n = e[2],
        s = e[4],
        a = e[5],
        o = e[6],
        l = e[8],
        h = e[9],
        u = e[10];
      return (
        (t[0] = Math.hypot(i, r, n)),
        (t[1] = Math.hypot(s, a, o)),
        (t[2] = Math.hypot(l, h, u)),
        t
      );
    }
    var Qi = function (t, e, i, r, n) {
      var s,
        a = 1 / Math.tan(e / 2);
      return (
        (t[0] = a / i),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = a),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[15] = 0),
        null != n && n !== 1 / 0
          ? ((s = 1 / (r - n)), (t[10] = (n + r) * s), (t[14] = 2 * n * r * s))
          : ((t[10] = -1), (t[14] = -2 * r)),
        t
      );
    };
    var tr = ji;
    const er = { 147259: !0 },
      ir = {
        28060: !0,
        28063: !0,
        28082: !0,
        41903: !0,
        42147: !0,
        44808: !0,
        45271: !0,
      },
      rr = {
        2: { GeosetType: 15, Original: 2, Override: 11 },
        3: { GeosetType: 15, Original: 3, Override: 12 },
        4: { GeosetType: 15, Original: 4, Override: 13 },
        5: { GeosetType: 15, Original: 5, Override: 14 },
        6: { GeosetType: 15, Original: 6, Override: 15 },
        7: { GeosetType: 15, Original: 7, Override: 16 },
        8: { GeosetType: 15, Original: 8, Override: 17 },
        9: { GeosetType: 15, Original: 9, Override: 18 },
        10: { GeosetType: 15, Original: 10, Override: 19 },
        11: { GeosetType: 12, Original: 2, Override: 0 },
        12: { GeosetType: 12, Original: 3, Override: 0 },
        13: { GeosetType: 12, Original: 1, Override: 5 },
        14: { GeosetType: 12, Original: 2, Override: 3 },
        15: { GeosetType: 12, Original: 2, Override: 2 },
        16: { GeosetType: 22, Original: 2, Override: 1 },
        17: { GeosetType: 22, Original: 1, Override: 2 },
        18: { GeosetType: 22, Original: 1, Override: 3 },
        19: { GeosetType: 22, Original: 2, Override: 3 },
        20: { GeosetType: 12, Original: 1, Override: 1 },
        21: { GeosetType: 12, Original: 1, Override: 9 },
        22: { GeosetType: 12, Original: 2, Override: 10 },
        23: { GeosetType: 12, Original: 2, Override: 6 },
        24: { GeosetType: 12, Original: 1, Override: 5 },
        25: { GeosetType: 27, Original: 0, Override: 1 },
        26: { GeosetType: 27, Original: 0, Override: 1 },
        27: { GeosetType: 27, Original: 0, Override: 1 },
        28: { GeosetType: 13, Original: 1, Override: 0 },
        31: { GeosetType: 12, Original: 1, Override: 13 },
        32: { GeosetType: 12, Original: 2, Override: 14 },
        33: { GeosetType: 42, Original: 11, Override: 1 },
      },
      nr = {
        ITEM: 1,
        HELM: 2,
        SHOULDER: 4,
        NPC: 8,
        CHARACTER: 16,
        HUMANOIDNPC: 32,
        OBJECT: 64,
        ARMOR: 128,
        PATH: 256,
        ITEMVISUAL: 512,
        COLLECTION: 1024,
      },
      sr = [
        0, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 21, 22, 22, 16, 21, 0, 19, 5,
        21, 22, 22, 0, 21, 21, 27,
      ],
      ar = [
        0, 16, 0, 15, 1, 8, 10, 5, 6, 6, 7, 0, 0, 17, 18, 19, 14, 20, 0, 9, 8,
        21, 22, 23, 0, 24, 25, 0,
      ],
      or = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
      ],
      lr = [
        0, 2, 0, 4, 128, 128, 128, 128, 128, 128, 128, 0, 0, 1, 1, 1, 128, 1, 0,
        128, 128, 1, 1, 1, 0, 1, 1, 2,
      ],
      hr = [13, 14, 15, 16, 17, 88, 89],
      ur = [8, 9, 10, 11, 12, 86, 87],
      cr = {
        77: [5, 1, 0, -1, 5, 0, 0, -1],
        76: [10, 0, 1, 1, 10, 0, 1, 1],
        75: [10, 0, 1, 1, 10, 0, 1, 1],
        74: [5, 1, 0, -1, 5, 0, 0, -1],
        73: [5, 1, 0, -1, 5, 0, 0, -1],
        72: [5, 1, 0, -1, 5, 0, 0, -1],
        71: [5, 1, 0, -1, 5, 0, 0, -1],
        37: [7, 0, 7, 1, 7, 0, 7, 1],
        36: [2, 0, 2, 1, 2, 0, 2, 1],
        34: [3, 0, 3, 1, 3, 0, 3, 1],
        33: [5, 1, 0, -1, 5, 0, 0, -1],
        31: [0, -1, 8, 1, 0, -1, 8, 1],
        30: [11, 0, 11, 1, 11, 0, 11, 1],
        29: [10, 0, 10, 1, 10, 0, 10, 1],
        28: [6, 0, 6, 1, 6, 0, 6, 1],
        27: [4, 0, 4, 1, 4, 0, 4, 1],
        26: [24, 0, 24, 1, 24, 0, 24, 1],
        25: [24, 0, 24, 1, 24, 0, 24, 1],
        23: [1, 0, 1, 1, 1, 0, 1, 1],
        15: [5, 0, 5, 1, 5, 0, 5, 1],
      },
      fr = {
        21: 26,
        22: 27,
        15: 28,
        17: 26,
        25: 32,
        13: 32,
        23: 33,
        14: 28,
        26: 26,
      },
      dr = {
        0: { 21: 26, 22: 27 },
        1: { 21: 26, 22: 27 },
        2: { 21: 30, 22: 31 },
        3: { 21: 32, 22: 33 },
        4: { 21: 26, 22: 27, 15: 28 },
        5: { 21: 26 },
        6: { 21: 26, 22: 27 },
        7: { 21: 26, 22: 27 },
        8: { 21: 26, 22: 27 },
        9: { 21: 33, 22: 28 },
      };
    function br() {
      var t = new fi(4);
      return (
        fi != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)),
        t
      );
    }
    function gr(t) {
      var e = new fi(4);
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
    }
    function _r(t, e, i, r) {
      var n = new fi(4);
      return (n[0] = t), (n[1] = e), (n[2] = i), (n[3] = r), n;
    }
    function pr(t, e) {
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
    }
    function mr(t, e, i) {
      return (
        (t[0] = e[0] + i[0]),
        (t[1] = e[1] + i[1]),
        (t[2] = e[2] + i[2]),
        (t[3] = e[3] + i[3]),
        t
      );
    }
    function vr(t, e, i) {
      return (
        (t[0] = e[0] - i[0]),
        (t[1] = e[1] - i[1]),
        (t[2] = e[2] - i[2]),
        (t[3] = e[3] - i[3]),
        t
      );
    }
    function xr(t, e, i) {
      return (
        (t[0] = e[0] * i),
        (t[1] = e[1] * i),
        (t[2] = e[2] * i),
        (t[3] = e[3] * i),
        t
      );
    }
    function Tr(t) {
      var e = t[0],
        i = t[1],
        r = t[2],
        n = t[3];
      return Math.hypot(e, i, r, n);
    }
    function wr(t, e) {
      var i = e[0],
        r = e[1],
        n = e[2],
        s = e[3],
        a = i * i + r * r + n * n + s * s;
      return (
        a > 0 && (a = 1 / Math.sqrt(a)),
        (t[0] = i * a),
        (t[1] = r * a),
        (t[2] = n * a),
        (t[3] = s * a),
        t
      );
    }
    function yr(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2],
        a = e[3];
      return (
        (t[0] = i[0] * r + i[4] * n + i[8] * s + i[12] * a),
        (t[1] = i[1] * r + i[5] * n + i[9] * s + i[13] * a),
        (t[2] = i[2] * r + i[6] * n + i[10] * s + i[14] * a),
        (t[3] = i[3] * r + i[7] * n + i[11] * s + i[15] * a),
        t
      );
    }
    var Ar = Tr;
    !(function () {
      var t = br();
    })();
    const Er = class {
      constructor(t) {
        var e = this;
        (e.a = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (e.b = _r(t.getFloat(), t.getFloat(), t.getFloat(), 0)),
          (e.c = t.getFloat()),
          (e.d = t.getFloat()),
          (e.e = t.getFloat()),
          (e.f = t.getFloat()),
          (e.g = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()]),
          (e.h = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()]),
          (e.i = bi(e.a)),
          (e.j = gr(e.b));
      }
      l() {
        var t = this;
        (t.a = null),
          (t.b = null),
          (t.g = null),
          (t.h = null),
          (t.i = null),
          (t.j = null);
      }
    };
    const Mr = class {
      constructor(t) {
        var e = this;
        (e.a = t.getUint16()),
          (e.b = t.getUint16()),
          (e.g = t.getUint32()),
          (e.c = t.getUint32()),
          (e.d = t.getUint16()),
          (e.e = t.getUint16()),
          (e.f = t.getUint16()),
          (e.h = t.getInt16()),
          (e.i = t.getUint16()),
          t.getBool() && (e.j = t.getString());
      }
      k() {}
    };
    function Cr() {
      var t = new fi(2);
      return fi != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
    }
    function Sr(t, e) {
      var i = new fi(2);
      return (i[0] = t), (i[1] = e), i;
    }
    function kr(t, e, i) {
      return (t[0] = e), (t[1] = i), t;
    }
    function Dr(t, e, i) {
      return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), t;
    }
    function Fr(t, e, i) {
      return (t[0] = e[0] * i), (t[1] = e[1] * i), t;
    }
    !(function () {
      var t = Cr();
    })();
    function Rr() {
      var t = new fi(9);
      return (
        fi != Float32Array &&
          ((t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0)),
        (t[0] = 1),
        (t[4] = 1),
        (t[8] = 1),
        t
      );
    }
    function Ir(t, e) {
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[4]),
        (t[4] = e[5]),
        (t[5] = e[6]),
        (t[6] = e[8]),
        (t[7] = e[9]),
        (t[8] = e[10]),
        t
      );
    }
    function Ur(t, e, i) {
      var r = e[0],
        n = e[1],
        s = e[2],
        a = e[3],
        o = e[4],
        l = e[5],
        h = e[6],
        u = e[7],
        c = e[8],
        f = i[0],
        d = i[1],
        b = i[2],
        g = i[3],
        _ = i[4],
        p = i[5],
        m = i[6],
        v = i[7],
        x = i[8];
      return (
        (t[0] = f * r + d * a + b * h),
        (t[1] = f * n + d * o + b * u),
        (t[2] = f * s + d * l + b * c),
        (t[3] = g * r + _ * a + p * h),
        (t[4] = g * n + _ * o + p * u),
        (t[5] = g * s + _ * l + p * c),
        (t[6] = m * r + v * a + x * h),
        (t[7] = m * n + v * o + x * u),
        (t[8] = m * s + v * l + x * c),
        t
      );
    }
    function Pr() {
      var t = new fi(4);
      return (
        fi != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)),
        (t[3] = 1),
        t
      );
    }
    function Or(t, e, i) {
      i *= 0.5;
      var r = Math.sin(i);
      return (
        (t[0] = r * e[0]),
        (t[1] = r * e[1]),
        (t[2] = r * e[2]),
        (t[3] = Math.cos(i)),
        t
      );
    }
    function zr(t, e, i, r) {
      var n,
        s,
        a,
        o,
        l,
        h = e[0],
        u = e[1],
        c = e[2],
        f = e[3],
        d = i[0],
        b = i[1],
        g = i[2],
        _ = i[3];
      return (
        (s = h * d + u * b + c * g + f * _) < 0 &&
          ((s = -s), (d = -d), (b = -b), (g = -g), (_ = -_)),
        1 - s > ci
          ? ((n = Math.acos(s)),
            (a = Math.sin(n)),
            (o = Math.sin((1 - r) * n) / a),
            (l = Math.sin(r * n) / a))
          : ((o = 1 - r), (l = r)),
        (t[0] = o * h + l * d),
        (t[1] = o * u + l * b),
        (t[2] = o * c + l * g),
        (t[3] = o * f + l * _),
        t
      );
    }
    var Br,
      Lr,
      Hr,
      Nr,
      Gr,
      jr,
      Wr = pr,
      Vr = function (t, e, i, r, n) {
        return (t[0] = e), (t[1] = i), (t[2] = r), (t[3] = n), t;
      },
      qr = wr;
    (Br = di()),
      (Lr = _i(1, 0, 0)),
      (Hr = _i(0, 1, 0)),
      (Nr = Pr()),
      (Gr = Pr()),
      (jr = Rr());
    class Yr {
      constructor() {
        (this.a = -1), (this.b = null), (this.c = 0);
      }
    }
    class Xr {
      constructor() {
        (this.a = new Yr()), (this.b = new Yr()), (this.c = 0), (this.d = !1);
      }
    }
    class Zr {
      f() {
        var t = this;
        if (t.b) for (var e = 0; e < t.b.length; ++e) t.b[e] = null;
        return (t.a = null), (t.b = null), null;
      }
      k(t, e, i, r) {
        let n = this;
        if (
          (null == r && (r = this.g()),
          this.d >= 0 && (t = this.d < e.length ? e[this.d] : e[0]),
          0 != n.c || n.b.length > 1)
        ) {
          if (n.a.length > 1) {
            var s = n.a[n.a.length - 1];
            s > 0 && t > s && this.d < 0 && (t %= s);
            for (var a = 0, o = n.a.length, l = 0; l < o; ++l)
              if (t >= n.a[l] && t < n.a[l + 1]) {
                a = l;
                break;
              }
            var h = n.a[a],
              u = n.a[a + 1],
              c = 0;
            return (
              h != u && (c = (t - h) / (u - h)),
              1 == n.c ? n.h(n.b[a], n.b[a + 1], c, r) : (r = n.i(r, n.b[a]))
            );
          }
          return n.b.length > 0 ? (r = n.i(r, n.b[0])) : i;
        }
        return 0 == n.b.length ? r : (r = n.i(r, n.b[0]));
      }
      l(t) {
        var e,
          i = this;
        (i.c = t.getInt16()), (i.d = t.getInt16()), (i.e = t.getBool());
        var r = t.getInt32();
        for (i.a = new Array(r), e = 0; e < r; ++e) i.a[e] = t.getInt32();
        var n = t.getInt32();
        for (i.b = new Array(n), e = 0; e < n; ++e) i.b[e] = i.j(t);
      }
    }
    class Jr extends Zr {
      constructor(t) {
        super();
        (this.ba = di()), this.l(t);
      }
      g() {
        return di();
      }
      h(t, e, i, r) {
        return Fi(r, t, e, i);
      }
      i(t, e) {
        return pi(t, e), t;
      }
      j(t) {
        return mi(di(), t.getFloat(), t.getFloat(), t.getFloat());
      }
    }
    class Kr extends Zr {
      constructor(t) {
        super();
        this.l(t), (this.ba = Pr());
      }
      g() {
        return Pr();
      }
      h(t, e, i, r) {
        return zr(r, t, e, i);
      }
      i(t, e) {
        return Wr(t, e), t;
      }
      j(t) {
        return Vr(
          Pr(),
          -t.getFloat(),
          -t.getFloat(),
          -t.getFloat(),
          t.getFloat()
        );
      }
    }
    class $r extends Zr {
      constructor(t) {
        super();
        this.l(t);
      }
      j(t) {
        return t.getUint16();
      }
      g() {
        return 0;
      }
      h(t, e, i, r) {
        return t + (e - t) * i;
      }
      i(t, e) {
        return e;
      }
    }
    class Qr extends $r {
      j(t) {
        return t.getFloat();
      }
    }
    class tn extends $r {
      j(t) {
        return t.getUint8();
      }
    }
    class en {
      d() {
        for (var t = this, e = 0; e < t.b.length; ++e) t.b[e] = null;
        return (t.a = null), (t.b = null), (t.c = null), null;
      }
      i(t, e, i, r) {
        let n = this;
        i || (i = this.e());
        let s = r || n.b;
        if (n.b.length > 1 && n.a.length > 1) {
          var a = n.a[n.a.length - 1];
          a > 0 && t > a && (t %= a);
          for (var o = 0, l = n.a.length, h = 0; h < l - 1; ++h)
            if (t > n.a[h] && t <= n.a[h + 1]) {
              o = h;
              break;
            }
          var u = n.a[o],
            c = n.a[o + 1],
            f = 0;
          return u != c && (f = (t - u) / (c - u)), n.f(s[o], s[o + 1], f, i);
        }
        return s.length > 0 ? (i = n.g(i, s[0])) : e;
      }
      j(t) {
        var e,
          i = this,
          r = t.getInt32();
        for (i.a = new Array(r), e = 0; e < r; ++e)
          i.a[e] = t.getInt16() / 32767;
        var n = t.getInt32();
        for (i.b = new Array(n), e = 0; e < n; ++e) i.b[e] = i.h(t);
      }
    }
    class rn extends en {
      constructor(t) {
        super();
        (this.ba = Cr()), this.j(t);
      }
      e() {
        return Cr();
      }
      f(t, e, i, r) {
        return (
          (n = r),
          (a = e),
          (o = i),
          (l = (s = t)[0]),
          (h = s[1]),
          (n[0] = l + o * (a[0] - l)),
          (n[1] = h + o * (a[1] - h)),
          n
        );
        var n, s, a, o, l, h;
      }
      g(t, e) {
        var i, r;
        return (r = e), ((i = t)[0] = r[0]), (i[1] = r[1]), t;
      }
      h(t) {
        return kr(Cr(), t.getFloat(), t.getFloat());
      }
    }
    class nn extends en {
      constructor(t) {
        super();
        this.j(t);
      }
      e() {
        return di();
      }
      f(t, e, i, r) {
        return Fi(r, t, e, i);
      }
      g(t, e) {
        return pi(t, e), t;
      }
      h(t) {
        return mi(di(), t.getFloat(), t.getFloat(), t.getFloat());
      }
    }
    class sn extends en {
      constructor(t) {
        super();
        this.j(t);
      }
      e() {
        return 0;
      }
      f(t, e, i, r) {
        return t + (e - t) * i;
      }
      g(t, e) {
        return t;
      }
      h(t) {
        return t.getUint16();
      }
    }
    class an {
      constructor(t, e) {
        this.b(t, e);
      }
      b(t, e) {
        var i = t.getInt32();
        this.a = new Array(i);
        for (let r = 0; r < i; ++r) this.a[r] = new e(t);
      }
      c(t) {
        return (
          !(!this.a || 0 == this.a.length) &&
          (t >= this.a.length && (t = 0), this.a[t].e)
        );
      }
      d(t, e, i, r) {
        if (!this.a || 0 == this.a.length) return i;
        let n = t.a.a;
        n >= this.a.length && (n = 0);
        let s = this.a[n].k(t.a.c, e, i, r);
        if (t.c > 0 && t.c < 1) {
          let n = this.a[0].g(),
            a = t.b.a;
          a >= this.a.length && (a = 0);
          let o = this.a[a].k(t.b.c, e, i, n);
          o || (o = n),
            (n = this.a[0].g()),
            (s = this.a[0].h(o, s, t.c, n)),
            r && this.a[0].i(r, n);
        }
        return s;
      }
      e() {
        if (this.a && 0 != this.a.length) {
          for (var t = 0; t < this.a.length; ++t)
            this.a[t].f(), (this.a[t] = null);
          return null;
        }
      }
    }
    function on(t, e) {
      return _r(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2], 0);
    }
    function ln(t, e, i) {
      for (let r = 0; r < 4; r++) t[4 * e + r] = i[r];
    }
    const hn = class {
      constructor(t, e, i) {
        (this.v = null), (this.w = null), (this.x = null);
        var r = this;
        (r.a = t),
          (r.b = e),
          (r.c = i.getInt32()),
          (r.d = i.getUint32()),
          (r.e = i.getInt16()),
          (r.f = i.getUint16()),
          (r.g = i.getUint32()),
          (r.h = _i(i.getFloat(), i.getFloat(), i.getFloat())),
          (r.i = new an(i, Jr)),
          (r.j = new an(i, Kr)),
          (r.k = new an(i, Jr)),
          (r.l = di()),
          (r.m = zi()),
          (r.n = zi()),
          (r.o = zi()),
          (r.p = di()),
          (r.q = Pr()),
          (r.r = zi()),
          (r.s = !1),
          (r.t = !1),
          (r.u = !1);
      }
      A() {
        var t = this;
        (t.a = null),
          (t.h = null),
          (t.l = null),
          (t.m = null),
          (t.p = null),
          (t.q = null),
          (t.r = null),
          t.i.e(),
          t.j.e(),
          t.k.e(),
          (t.i = null),
          (t.j = null),
          (t.k = null);
      }
      B() {
        this.s = !0;
        for (var t = 0; t < 16; ++t) this.m[t] = 0;
      }
      C(t) {
        t
          ? (null == this.v && (this.v = new Xr()), this.a.bv(t, this.v))
          : (this.v = null);
        let e = this.a.ak[this.b];
        for (let i = 0; i < e.length; i++) this.a.ar[e[i]].C(t);
      }
      D(t) {
        t
          ? (null == this.w && (this.w = new Xr()), this.a.bv(t, this.w))
          : (this.w = null);
        let e = this.a.ak[this.b];
        for (let i = 0; i < e.length; i++) this.a.ar[e[i]].D(t);
      }
      E(t) {
        var e = this;
        if (e.s) return void e.B();
        if ((null != this.v && this.a.cd(this.v, t), e.t || e.u)) return;
        if (((e.t = !0), !e.a)) return;
        Hi(e.m);
        var i = e.a.T;
        if (!i) return;
        let r = zi();
        if (
          (ji(r, r, this.a.aT.viewMatrix),
          ji(r, r, this.a.W),
          ji(e.m, e.m, r),
          e.e > -1)
        ) {
          e.a.ar[e.e].E(t);
          let i = zi();
          if (
            (Bi(i, e.a.ar[e.e].m), ji(i, r, i), 1 & e.d || 2 & e.d || 4 & e.d)
          ) {
            if (4 & e.d && 2 & e.d)
              ln(i, 0, on(r, 0)), ln(i, 1, on(r, 1)), ln(i, 2, on(r, 2));
            else if (4 & e.d) {
              {
                let t = on(r, 0),
                  e = Tr(t);
                xr(t, t, Tr(on(i, 0)) / e), ln(i, 0, t);
              }
              {
                let t = on(r, 1),
                  e = Tr(t);
                xr(t, t, Tr(on(i, 1)) / e), ln(i, 1, t);
              }
              {
                let t = on(r, 2),
                  e = Tr(t);
                xr(t, t, Tr(on(i, 2)) / e), ln(i, 2, t);
              }
            } else if (2 & e.d) {
              {
                let t = on(r, 0);
                xr(t, t, 1 / Tr(on(i, 0))), xr(t, t, Tr(on(r, 0))), ln(i, 0, t);
              }
              {
                let t = on(r, 1);
                xr(t, t, 1 / Tr(on(i, 1))), xr(t, t, Tr(on(r, 1))), ln(i, 1, t);
              }
              {
                let t = on(r, 2);
                xr(t, t, 1 / Tr(on(i, 2))), xr(t, t, Tr(on(r, 2))), ln(i, 2, t);
              }
            }
            if (1 & e.d) ln(i, 3, on(r, 3));
            else {
              let t = _r(e.h[0], e.h[1], e.h[2], 1),
                n = br();
              pr(n, t), (n[3] = 0);
              let s = br(),
                a = br();
              yr(s, t, e.a.ar[e.e].m),
                yr(s, s, r),
                yr(a, n, i),
                vr(s, s, a),
                (s[3] = 1),
                ln(i, 3, s);
            }
          }
          let n = zi();
          Gi(n, r), ji(i, n, i), ji(e.m, e.m, i);
        }
        let n = null;
        if (null != this.v) {
          let t = this.F(this.v);
          this.a.U || (this.y = t), (n = this.a.U ? this.y : t);
        } else {
          let t = this.F(i);
          this.a.U || (this.y = t), (n = this.a.U ? this.y : t);
        }
        let s = null;
        if (null != this.w) {
          let t = this.F(this.w);
          this.a.U || (this.z = t), (s = this.a.U ? this.z : t);
        }
        let a = null != n || null != s,
          o = zi();
        a && (null != n && ji(o, o, n), null != s && ji(o, o, s)),
          null != this.x &&
            (Wi(o, o, this.h), ji(o, o, this.x), Wi(o, o, Ci(this.p, this.h))),
          ji(e.m, e.m, o);
        let l = 120 & e.d;
        if (l) {
          let t = zi();
          Bi(t, e.m);
          let i = e.m,
            r = di();
          $i(r, e.m);
          let n = br();
          if (16 == l) {
            let t = on(e.m, 0);
            xr(t, t, 1 / gi(t)), ln(e.m, 0, t);
            let r = _r(i[4], -i[0], 0, 0);
            ln(i, 1, wr(r, r)), Di(n, r, t), (n[3] = 0), ln(i, 2, n);
          } else if (l > 16) {
            if (32 == l) {
              let t = on(i, 1);
              xr(t, t, 1 / Tr(t)), ln(e.m, 1, t);
              let r = _r(-i[5], i[1], 0, 0);
              ln(i, 0, wr(r, r)), (n[3] = 0), ln(i, 2, n);
            } else if (64 == l) {
              let t = on(i, 2);
              wr(t, t), ln(i, 2, t);
              let e = _r(t[1], -t[0], 0, 0);
              wr(e, e), ln(i, 1, e), Di(n, t, e), (n[3] = 0), ln(i, 0, n);
            }
          } else if (8 == l) {
            let t = this.a.i;
            if (a) {
              let e = on(o, 0);
              (e = _r(e[1], e[2], -e[0], 0)), wr(e, e), ln(i, 0, e);
              let r = on(o, 1);
              (r = _r(t ? -r[1] : r[1], t ? -r[2] : r[2], t ? r[0] : -r[0], 0)),
                wr(r, r),
                ln(i, 1, r);
              let n = on(o, 2);
              (n = _r(n[1], n[2], -n[0], 0)), wr(n, n), ln(i, 2, n);
            } else {
              ln(i, 0, _r(0, 0, -1, 0)),
                ln(i, 1, _r(t ? -1 : 1, 0, 0, 0)),
                ln(i, 2, _r(0, 1, 0, 0));
            }
          }
          let s = _r(this.h[0], this.h[1], this.h[2], 1),
            h = _r(this.h[0], this.h[1], this.h[2], 0),
            u = on(i, 0),
            c = on(i, 1),
            f = on(i, 2);
          xr(u, u, r[0]),
            xr(c, c, r[1]),
            xr(f, f, r[2]),
            ln(i, 0, u),
            ln(i, 1, c),
            ln(i, 2, f),
            yr(s, s, t),
            yr(h, h, i);
          let d = br();
          vr(d, s, h), (d[3] = 1), ln(i, 3, d);
        }
        Gi(r, r),
          ji(e.m, r, e.m),
          Gi(e.n, e.m),
          Ni(e.o, e.n),
          Ri(e.l, e.h, e.m);
      }
      F(t) {
        var e = this.i.c(t.a.a),
          i = this.j.c(t.a.a),
          r = this.k.c(t.a.a);
        if (0 != (640 & this.d)) {
          let w = zi();
          return (
            Hi(w),
            Wi(w, w, this.h),
            e && ((this.p = this.i.d(t, this.a.aY)), Wi(w, w, this.p)),
            i &&
              ((this.q = this.j.d(t, this.a.aY, Pr())),
              (n = this.r),
              (s = this.q),
              (a = s[0]),
              (o = s[1]),
              (l = s[2]),
              (h = s[3]),
              (d = a * (u = a + a)),
              (b = o * u),
              (g = o * (c = o + o)),
              (_ = l * u),
              (p = l * c),
              (m = l * (f = l + l)),
              (v = h * u),
              (x = h * c),
              (T = h * f),
              (n[0] = 1 - g - m),
              (n[1] = b + T),
              (n[2] = _ - x),
              (n[3] = 0),
              (n[4] = b - T),
              (n[5] = 1 - d - m),
              (n[6] = p + v),
              (n[7] = 0),
              (n[8] = _ + x),
              (n[9] = p - v),
              (n[10] = 1 - d - g),
              (n[11] = 0),
              (n[12] = 0),
              (n[13] = 0),
              (n[14] = 0),
              (n[15] = 1),
              ji(w, w, this.r)),
            r && ((this.p = this.k.d(t, this.a.aY)), Vi(w, w, this.p)),
            Wi(w, w, Ci(this.p, this.h)),
            w
          );
        }
        var n, s, a, o, l, h, u, c, f, d, b, g, _, p, m, v, x, T;
        return null;
      }
    };
    const un = class {
      constructor(t) {
        var e = this;
        (e.a = t.getUint16()),
          (e.b = t.getUint16()),
          (e.c = t.getUint16()),
          (e.d = t.getUint16()),
          (e.e = t.getUint16() + 65536 * e.b),
          (e.f = t.getUint16()),
          (e.g = t.getUint16()),
          (e.h = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (e.i = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (e.j = t.getFloat());
      }
      k() {
        (this.h = null), (this.i = null);
      }
    };
    function cn(t) {
      let e = t.length;
      for (; --e >= 0; ) t[e] = 0;
    }
    const fn = 256,
      dn = 286,
      bn = 30,
      gn = 15,
      _n = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      pn = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      mn = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      vn = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      xn = new Array(576);
    cn(xn);
    const Tn = new Array(60);
    cn(Tn);
    const wn = new Array(512);
    cn(wn);
    const yn = new Array(256);
    cn(yn);
    const An = new Array(29);
    cn(An);
    const En = new Array(bn);
    function Mn(t, e, i, r, n) {
      (this.static_tree = t),
        (this.extra_bits = e),
        (this.extra_base = i),
        (this.elems = r),
        (this.max_length = n),
        (this.has_stree = t && t.length);
    }
    let Cn, Sn, kn;
    function Dn(t, e) {
      (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
    }
    cn(En);
    const Fn = (t) => (t < 256 ? wn[t] : wn[256 + (t >>> 7)]),
      Rn = (t, e) => {
        (t.pending_buf[t.pending++] = 255 & e),
          (t.pending_buf[t.pending++] = (e >>> 8) & 255);
      },
      In = (t, e, i) => {
        t.bi_valid > 16 - i
          ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
            Rn(t, t.bi_buf),
            (t.bi_buf = e >> (16 - t.bi_valid)),
            (t.bi_valid += i - 16))
          : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += i));
      },
      Un = (t, e, i) => {
        In(t, i[2 * e], i[2 * e + 1]);
      },
      Pn = (t, e) => {
        let i = 0;
        do {
          (i |= 1 & t), (t >>>= 1), (i <<= 1);
        } while (--e > 0);
        return i >>> 1;
      },
      On = (t, e, i) => {
        const r = new Array(16);
        let n,
          s,
          a = 0;
        for (n = 1; n <= gn; n++) (a = (a + i[n - 1]) << 1), (r[n] = a);
        for (s = 0; s <= e; s++) {
          let e = t[2 * s + 1];
          0 !== e && (t[2 * s] = Pn(r[e]++, e));
        }
      },
      zn = (t) => {
        let e;
        for (e = 0; e < dn; e++) t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < bn; e++) t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
        (t.dyn_ltree[512] = 1),
          (t.opt_len = t.static_len = 0),
          (t.sym_next = t.matches = 0);
      },
      Bn = (t) => {
        t.bi_valid > 8
          ? Rn(t, t.bi_buf)
          : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
          (t.bi_buf = 0),
          (t.bi_valid = 0);
      },
      Ln = (t, e, i, r) => {
        const n = 2 * e,
          s = 2 * i;
        return t[n] < t[s] || (t[n] === t[s] && r[e] <= r[i]);
      },
      Hn = (t, e, i) => {
        const r = t.heap[i];
        let n = i << 1;
        for (
          ;
          n <= t.heap_len &&
          (n < t.heap_len && Ln(e, t.heap[n + 1], t.heap[n], t.depth) && n++,
          !Ln(e, r, t.heap[n], t.depth));

        )
          (t.heap[i] = t.heap[n]), (i = n), (n <<= 1);
        t.heap[i] = r;
      },
      Nn = (t, e, i) => {
        let r,
          n,
          s,
          a,
          o = 0;
        if (0 !== t.sym_next)
          do {
            (r = 255 & t.pending_buf[t.sym_buf + o++]),
              (r += (255 & t.pending_buf[t.sym_buf + o++]) << 8),
              (n = t.pending_buf[t.sym_buf + o++]),
              0 === r
                ? Un(t, n, e)
                : ((s = yn[n]),
                  Un(t, s + fn + 1, e),
                  (a = _n[s]),
                  0 !== a && ((n -= An[s]), In(t, n, a)),
                  r--,
                  (s = Fn(r)),
                  Un(t, s, i),
                  (a = pn[s]),
                  0 !== a && ((r -= En[s]), In(t, r, a)));
          } while (o < t.sym_next);
        Un(t, 256, e);
      },
      Gn = (t, e) => {
        const i = e.dyn_tree,
          r = e.stat_desc.static_tree,
          n = e.stat_desc.has_stree,
          s = e.stat_desc.elems;
        let a,
          o,
          l,
          h = -1;
        for (t.heap_len = 0, t.heap_max = 573, a = 0; a < s; a++)
          0 !== i[2 * a]
            ? ((t.heap[++t.heap_len] = h = a), (t.depth[a] = 0))
            : (i[2 * a + 1] = 0);
        for (; t.heap_len < 2; )
          (l = t.heap[++t.heap_len] = h < 2 ? ++h : 0),
            (i[2 * l] = 1),
            (t.depth[l] = 0),
            t.opt_len--,
            n && (t.static_len -= r[2 * l + 1]);
        for (e.max_code = h, a = t.heap_len >> 1; a >= 1; a--) Hn(t, i, a);
        l = s;
        do {
          (a = t.heap[1]),
            (t.heap[1] = t.heap[t.heap_len--]),
            Hn(t, i, 1),
            (o = t.heap[1]),
            (t.heap[--t.heap_max] = a),
            (t.heap[--t.heap_max] = o),
            (i[2 * l] = i[2 * a] + i[2 * o]),
            (t.depth[l] =
              (t.depth[a] >= t.depth[o] ? t.depth[a] : t.depth[o]) + 1),
            (i[2 * a + 1] = i[2 * o + 1] = l),
            (t.heap[1] = l++),
            Hn(t, i, 1);
        } while (t.heap_len >= 2);
        (t.heap[--t.heap_max] = t.heap[1]),
          ((t, e) => {
            const i = e.dyn_tree,
              r = e.max_code,
              n = e.stat_desc.static_tree,
              s = e.stat_desc.has_stree,
              a = e.stat_desc.extra_bits,
              o = e.stat_desc.extra_base,
              l = e.stat_desc.max_length;
            let h,
              u,
              c,
              f,
              d,
              b,
              g = 0;
            for (f = 0; f <= gn; f++) t.bl_count[f] = 0;
            for (
              i[2 * t.heap[t.heap_max] + 1] = 0, h = t.heap_max + 1;
              h < 573;
              h++
            )
              (u = t.heap[h]),
                (f = i[2 * i[2 * u + 1] + 1] + 1),
                f > l && ((f = l), g++),
                (i[2 * u + 1] = f),
                u > r ||
                  (t.bl_count[f]++,
                  (d = 0),
                  u >= o && (d = a[u - o]),
                  (b = i[2 * u]),
                  (t.opt_len += b * (f + d)),
                  s && (t.static_len += b * (n[2 * u + 1] + d)));
            if (0 !== g) {
              do {
                for (f = l - 1; 0 === t.bl_count[f]; ) f--;
                t.bl_count[f]--,
                  (t.bl_count[f + 1] += 2),
                  t.bl_count[l]--,
                  (g -= 2);
              } while (g > 0);
              for (f = l; 0 !== f; f--)
                for (u = t.bl_count[f]; 0 !== u; )
                  (c = t.heap[--h]),
                    c > r ||
                      (i[2 * c + 1] !== f &&
                        ((t.opt_len += (f - i[2 * c + 1]) * i[2 * c]),
                        (i[2 * c + 1] = f)),
                      u--);
            }
          })(t, e),
          On(i, h, t.bl_count);
      },
      jn = (t, e, i) => {
        let r,
          n,
          s = -1,
          a = e[1],
          o = 0,
          l = 7,
          h = 4;
        for (
          0 === a && ((l = 138), (h = 3)), e[2 * (i + 1) + 1] = 65535, r = 0;
          r <= i;
          r++
        )
          (n = a),
            (a = e[2 * (r + 1) + 1]),
            (++o < l && n === a) ||
              (o < h
                ? (t.bl_tree[2 * n] += o)
                : 0 !== n
                ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[32]++)
                : o <= 10
                ? t.bl_tree[34]++
                : t.bl_tree[36]++,
              (o = 0),
              (s = n),
              0 === a
                ? ((l = 138), (h = 3))
                : n === a
                ? ((l = 6), (h = 3))
                : ((l = 7), (h = 4)));
      },
      Wn = (t, e, i) => {
        let r,
          n,
          s = -1,
          a = e[1],
          o = 0,
          l = 7,
          h = 4;
        for (0 === a && ((l = 138), (h = 3)), r = 0; r <= i; r++)
          if (((n = a), (a = e[2 * (r + 1) + 1]), !(++o < l && n === a))) {
            if (o < h)
              do {
                Un(t, n, t.bl_tree);
              } while (0 != --o);
            else
              0 !== n
                ? (n !== s && (Un(t, n, t.bl_tree), o--),
                  Un(t, 16, t.bl_tree),
                  In(t, o - 3, 2))
                : o <= 10
                ? (Un(t, 17, t.bl_tree), In(t, o - 3, 3))
                : (Un(t, 18, t.bl_tree), In(t, o - 11, 7));
            (o = 0),
              (s = n),
              0 === a
                ? ((l = 138), (h = 3))
                : n === a
                ? ((l = 6), (h = 3))
                : ((l = 7), (h = 4));
          }
      };
    let Vn = !1;
    const qn = (t, e, i, r) => {
      In(t, 0 + (r ? 1 : 0), 3),
        Bn(t),
        Rn(t, i),
        Rn(t, ~i),
        i && t.pending_buf.set(t.window.subarray(e, e + i), t.pending),
        (t.pending += i);
    };
    var Yn = (t) => {
        Vn ||
          ((() => {
            let t, e, i, r, n;
            const s = new Array(16);
            for (i = 0, r = 0; r < 28; r++)
              for (An[r] = i, t = 0; t < 1 << _n[r]; t++) yn[i++] = r;
            for (yn[i - 1] = r, n = 0, r = 0; r < 16; r++)
              for (En[r] = n, t = 0; t < 1 << pn[r]; t++) wn[n++] = r;
            for (n >>= 7; r < bn; r++)
              for (En[r] = n << 7, t = 0; t < 1 << (pn[r] - 7); t++)
                wn[256 + n++] = r;
            for (e = 0; e <= gn; e++) s[e] = 0;
            for (t = 0; t <= 143; ) (xn[2 * t + 1] = 8), t++, s[8]++;
            for (; t <= 255; ) (xn[2 * t + 1] = 9), t++, s[9]++;
            for (; t <= 279; ) (xn[2 * t + 1] = 7), t++, s[7]++;
            for (; t <= 287; ) (xn[2 * t + 1] = 8), t++, s[8]++;
            for (On(xn, 287, s), t = 0; t < bn; t++)
              (Tn[2 * t + 1] = 5), (Tn[2 * t] = Pn(t, 5));
            (Cn = new Mn(xn, _n, 257, dn, gn)),
              (Sn = new Mn(Tn, pn, 0, bn, gn)),
              (kn = new Mn(new Array(0), mn, 0, 19, 7));
          })(),
          (Vn = !0)),
          (t.l_desc = new Dn(t.dyn_ltree, Cn)),
          (t.d_desc = new Dn(t.dyn_dtree, Sn)),
          (t.bl_desc = new Dn(t.bl_tree, kn)),
          (t.bi_buf = 0),
          (t.bi_valid = 0),
          zn(t);
      },
      Xn = (t, e, i, r) => {
        let n,
          s,
          a = 0;
        t.level > 0
          ? (2 === t.strm.data_type &&
              (t.strm.data_type = ((t) => {
                let e,
                  i = 4093624447;
                for (e = 0; e <= 31; e++, i >>>= 1)
                  if (1 & i && 0 !== t.dyn_ltree[2 * e]) return 0;
                if (
                  0 !== t.dyn_ltree[18] ||
                  0 !== t.dyn_ltree[20] ||
                  0 !== t.dyn_ltree[26]
                )
                  return 1;
                for (e = 32; e < fn; e++)
                  if (0 !== t.dyn_ltree[2 * e]) return 1;
                return 0;
              })(t)),
            Gn(t, t.l_desc),
            Gn(t, t.d_desc),
            (a = ((t) => {
              let e;
              for (
                jn(t, t.dyn_ltree, t.l_desc.max_code),
                  jn(t, t.dyn_dtree, t.d_desc.max_code),
                  Gn(t, t.bl_desc),
                  e = 18;
                e >= 3 && 0 === t.bl_tree[2 * vn[e] + 1];
                e--
              );
              return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
            })(t)),
            (n = (t.opt_len + 3 + 7) >>> 3),
            (s = (t.static_len + 3 + 7) >>> 3),
            s <= n && (n = s))
          : (n = s = i + 5),
          i + 4 <= n && -1 !== e
            ? qn(t, e, i, r)
            : 4 === t.strategy || s === n
            ? (In(t, 2 + (r ? 1 : 0), 3), Nn(t, xn, Tn))
            : (In(t, 4 + (r ? 1 : 0), 3),
              ((t, e, i, r) => {
                let n;
                for (
                  In(t, e - 257, 5), In(t, i - 1, 5), In(t, r - 4, 4), n = 0;
                  n < r;
                  n++
                )
                  In(t, t.bl_tree[2 * vn[n] + 1], 3);
                Wn(t, t.dyn_ltree, e - 1), Wn(t, t.dyn_dtree, i - 1);
              })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
              Nn(t, t.dyn_ltree, t.dyn_dtree)),
          zn(t),
          r && Bn(t);
      },
      Zn = (t, e, i) => (
        (t.pending_buf[t.sym_buf + t.sym_next++] = e),
        (t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8),
        (t.pending_buf[t.sym_buf + t.sym_next++] = i),
        0 === e
          ? t.dyn_ltree[2 * i]++
          : (t.matches++,
            e--,
            t.dyn_ltree[2 * (yn[i] + fn + 1)]++,
            t.dyn_dtree[2 * Fn(e)]++),
        t.sym_next === t.sym_end
      ),
      Jn = {
        _tr_init: Yn,
        _tr_stored_block: qn,
        _tr_flush_block: Xn,
        _tr_tally: Zn,
        _tr_align: (t) => {
          In(t, 2, 3),
            Un(t, 256, xn),
            ((t) => {
              16 === t.bi_valid
                ? (Rn(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                : t.bi_valid >= 8 &&
                  ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                  (t.bi_buf >>= 8),
                  (t.bi_valid -= 8));
            })(t);
        },
      };
    var Kn = (t, e, i, r) => {
      let n = (65535 & t) | 0,
        s = ((t >>> 16) & 65535) | 0,
        a = 0;
      for (; 0 !== i; ) {
        (a = i > 2e3 ? 2e3 : i), (i -= a);
        do {
          (n = (n + e[r++]) | 0), (s = (s + n) | 0);
        } while (--a);
        (n %= 65521), (s %= 65521);
      }
      return n | (s << 16) | 0;
    };
    const $n = new Uint32Array(
      (() => {
        let t,
          e = [];
        for (var i = 0; i < 256; i++) {
          t = i;
          for (var r = 0; r < 8; r++)
            t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
          e[i] = t;
        }
        return e;
      })()
    );
    var Qn = (t, e, i, r) => {
        const n = $n,
          s = r + i;
        t ^= -1;
        for (let i = r; i < s; i++) t = (t >>> 8) ^ n[255 & (t ^ e[i])];
        return -1 ^ t;
      },
      ts = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      },
      es = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    const {
        _tr_init: is,
        _tr_stored_block: rs,
        _tr_flush_block: ns,
        _tr_tally: ss,
        _tr_align: as,
      } = Jn,
      {
        Z_NO_FLUSH: os,
        Z_PARTIAL_FLUSH: ls,
        Z_FULL_FLUSH: hs,
        Z_FINISH: us,
        Z_BLOCK: cs,
        Z_OK: fs,
        Z_STREAM_END: ds,
        Z_STREAM_ERROR: bs,
        Z_DATA_ERROR: gs,
        Z_BUF_ERROR: _s,
        Z_DEFAULT_COMPRESSION: ps,
        Z_FILTERED: ms,
        Z_HUFFMAN_ONLY: vs,
        Z_RLE: xs,
        Z_FIXED: Ts,
        Z_DEFAULT_STRATEGY: ws,
        Z_UNKNOWN: ys,
        Z_DEFLATED: As,
      } = es,
      Es = 258,
      Ms = 262,
      Cs = 42,
      Ss = 113,
      ks = 666,
      Ds = (t, e) => ((t.msg = ts[e]), e),
      Fs = (t) => 2 * t - (t > 4 ? 9 : 0),
      Rs = (t) => {
        let e = t.length;
        for (; --e >= 0; ) t[e] = 0;
      },
      Is = (t) => {
        let e,
          i,
          r,
          n = t.w_size;
        (e = t.hash_size), (r = e);
        do {
          (i = t.head[--r]), (t.head[r] = i >= n ? i - n : 0);
        } while (--e);
        (e = n), (r = e);
        do {
          (i = t.prev[--r]), (t.prev[r] = i >= n ? i - n : 0);
        } while (--e);
      };
    let Us = (t, e, i) => ((e << t.hash_shift) ^ i) & t.hash_mask;
    const Ps = (t) => {
        const e = t.state;
        let i = e.pending;
        i > t.avail_out && (i = t.avail_out),
          0 !== i &&
            (t.output.set(
              e.pending_buf.subarray(e.pending_out, e.pending_out + i),
              t.next_out
            ),
            (t.next_out += i),
            (e.pending_out += i),
            (t.total_out += i),
            (t.avail_out -= i),
            (e.pending -= i),
            0 === e.pending && (e.pending_out = 0));
      },
      Os = (t, e) => {
        ns(
          t,
          t.block_start >= 0 ? t.block_start : -1,
          t.strstart - t.block_start,
          e
        ),
          (t.block_start = t.strstart),
          Ps(t.strm);
      },
      zs = (t, e) => {
        t.pending_buf[t.pending++] = e;
      },
      Bs = (t, e) => {
        (t.pending_buf[t.pending++] = (e >>> 8) & 255),
          (t.pending_buf[t.pending++] = 255 & e);
      },
      Ls = (t, e, i, r) => {
        let n = t.avail_in;
        return (
          n > r && (n = r),
          0 === n
            ? 0
            : ((t.avail_in -= n),
              e.set(t.input.subarray(t.next_in, t.next_in + n), i),
              1 === t.state.wrap
                ? (t.adler = Kn(t.adler, e, n, i))
                : 2 === t.state.wrap && (t.adler = Qn(t.adler, e, n, i)),
              (t.next_in += n),
              (t.total_in += n),
              n)
        );
      },
      Hs = (t, e) => {
        let i,
          r,
          n = t.max_chain_length,
          s = t.strstart,
          a = t.prev_length,
          o = t.nice_match;
        const l = t.strstart > t.w_size - Ms ? t.strstart - (t.w_size - Ms) : 0,
          h = t.window,
          u = t.w_mask,
          c = t.prev,
          f = t.strstart + Es;
        let d = h[s + a - 1],
          b = h[s + a];
        t.prev_length >= t.good_match && (n >>= 2),
          o > t.lookahead && (o = t.lookahead);
        do {
          if (
            ((i = e),
            h[i + a] === b &&
              h[i + a - 1] === d &&
              h[i] === h[s] &&
              h[++i] === h[s + 1])
          ) {
            (s += 2), i++;
            do {} while (
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              h[++s] === h[++i] &&
              s < f
            );
            if (((r = Es - (f - s)), (s = f - Es), r > a)) {
              if (((t.match_start = e), (a = r), r >= o)) break;
              (d = h[s + a - 1]), (b = h[s + a]);
            }
          }
        } while ((e = c[e & u]) > l && 0 != --n);
        return a <= t.lookahead ? a : t.lookahead;
      },
      Ns = (t) => {
        const e = t.w_size;
        let i, r, n;
        do {
          if (
            ((r = t.window_size - t.lookahead - t.strstart),
            t.strstart >= e + (e - Ms) &&
              (t.window.set(t.window.subarray(e, e + e - r), 0),
              (t.match_start -= e),
              (t.strstart -= e),
              (t.block_start -= e),
              t.insert > t.strstart && (t.insert = t.strstart),
              Is(t),
              (r += e)),
            0 === t.strm.avail_in)
          )
            break;
          if (
            ((i = Ls(t.strm, t.window, t.strstart + t.lookahead, r)),
            (t.lookahead += i),
            t.lookahead + t.insert >= 3)
          )
            for (
              n = t.strstart - t.insert,
                t.ins_h = t.window[n],
                t.ins_h = Us(t, t.ins_h, t.window[n + 1]);
              t.insert &&
              ((t.ins_h = Us(t, t.ins_h, t.window[n + 3 - 1])),
              (t.prev[n & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = n),
              n++,
              t.insert--,
              !(t.lookahead + t.insert < 3));

            );
        } while (t.lookahead < Ms && 0 !== t.strm.avail_in);
      },
      Gs = (t, e) => {
        let i,
          r,
          n,
          s =
            t.pending_buf_size - 5 > t.w_size
              ? t.w_size
              : t.pending_buf_size - 5,
          a = 0,
          o = t.strm.avail_in;
        do {
          if (((i = 65535), (n = (t.bi_valid + 42) >> 3), t.strm.avail_out < n))
            break;
          if (
            ((n = t.strm.avail_out - n),
            (r = t.strstart - t.block_start),
            i > r + t.strm.avail_in && (i = r + t.strm.avail_in),
            i > n && (i = n),
            i < s &&
              ((0 === i && e !== us) || e === os || i !== r + t.strm.avail_in))
          )
            break;
          (a = e === us && i === r + t.strm.avail_in ? 1 : 0),
            rs(t, 0, 0, a),
            (t.pending_buf[t.pending - 4] = i),
            (t.pending_buf[t.pending - 3] = i >> 8),
            (t.pending_buf[t.pending - 2] = ~i),
            (t.pending_buf[t.pending - 1] = ~i >> 8),
            Ps(t.strm),
            r &&
              (r > i && (r = i),
              t.strm.output.set(
                t.window.subarray(t.block_start, t.block_start + r),
                t.strm.next_out
              ),
              (t.strm.next_out += r),
              (t.strm.avail_out -= r),
              (t.strm.total_out += r),
              (t.block_start += r),
              (i -= r)),
            i &&
              (Ls(t.strm, t.strm.output, t.strm.next_out, i),
              (t.strm.next_out += i),
              (t.strm.avail_out -= i),
              (t.strm.total_out += i));
        } while (0 === a);
        return (
          (o -= t.strm.avail_in),
          o &&
            (o >= t.w_size
              ? ((t.matches = 2),
                t.window.set(
                  t.strm.input.subarray(
                    t.strm.next_in - t.w_size,
                    t.strm.next_in
                  ),
                  0
                ),
                (t.strstart = t.w_size),
                (t.insert = t.strstart))
              : (t.window_size - t.strstart <= o &&
                  ((t.strstart -= t.w_size),
                  t.window.set(
                    t.window.subarray(t.w_size, t.w_size + t.strstart),
                    0
                  ),
                  t.matches < 2 && t.matches++,
                  t.insert > t.strstart && (t.insert = t.strstart)),
                t.window.set(
                  t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in),
                  t.strstart
                ),
                (t.strstart += o),
                (t.insert +=
                  o > t.w_size - t.insert ? t.w_size - t.insert : o)),
            (t.block_start = t.strstart)),
          t.high_water < t.strstart && (t.high_water = t.strstart),
          a
            ? 4
            : e !== os &&
              e !== us &&
              0 === t.strm.avail_in &&
              t.strstart === t.block_start
            ? 2
            : ((n = t.window_size - t.strstart),
              t.strm.avail_in > n &&
                t.block_start >= t.w_size &&
                ((t.block_start -= t.w_size),
                (t.strstart -= t.w_size),
                t.window.set(
                  t.window.subarray(t.w_size, t.w_size + t.strstart),
                  0
                ),
                t.matches < 2 && t.matches++,
                (n += t.w_size),
                t.insert > t.strstart && (t.insert = t.strstart)),
              n > t.strm.avail_in && (n = t.strm.avail_in),
              n &&
                (Ls(t.strm, t.window, t.strstart, n),
                (t.strstart += n),
                (t.insert +=
                  n > t.w_size - t.insert ? t.w_size - t.insert : n)),
              t.high_water < t.strstart && (t.high_water = t.strstart),
              (n = (t.bi_valid + 42) >> 3),
              (n =
                t.pending_buf_size - n > 65535
                  ? 65535
                  : t.pending_buf_size - n),
              (s = n > t.w_size ? t.w_size : n),
              (r = t.strstart - t.block_start),
              (r >= s ||
                ((r || e === us) &&
                  e !== os &&
                  0 === t.strm.avail_in &&
                  r <= n)) &&
                ((i = r > n ? n : r),
                (a = e === us && 0 === t.strm.avail_in && i === r ? 1 : 0),
                rs(t, t.block_start, i, a),
                (t.block_start += i),
                Ps(t.strm)),
              a ? 3 : 1)
        );
      },
      js = (t, e) => {
        let i, r;
        for (;;) {
          if (t.lookahead < Ms) {
            if ((Ns(t), t.lookahead < Ms && e === os)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((i = 0),
            t.lookahead >= 3 &&
              ((t.ins_h = Us(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            0 !== i &&
              t.strstart - i <= t.w_size - Ms &&
              (t.match_length = Hs(t, i)),
            t.match_length >= 3)
          )
            if (
              ((r = ss(t, t.strstart - t.match_start, t.match_length - 3)),
              (t.lookahead -= t.match_length),
              t.match_length <= t.max_lazy_match && t.lookahead >= 3)
            ) {
              t.match_length--;
              do {
                t.strstart++,
                  (t.ins_h = Us(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart);
              } while (0 != --t.match_length);
              t.strstart++;
            } else
              (t.strstart += t.match_length),
                (t.match_length = 0),
                (t.ins_h = t.window[t.strstart]),
                (t.ins_h = Us(t, t.ins_h, t.window[t.strstart + 1]));
          else
            (r = ss(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
          if (r && (Os(t, !1), 0 === t.strm.avail_out)) return 1;
        }
        return (
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          e === us
            ? (Os(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.sym_next && (Os(t, !1), 0 === t.strm.avail_out)
            ? 1
            : 2
        );
      },
      Ws = (t, e) => {
        let i, r, n;
        for (;;) {
          if (t.lookahead < Ms) {
            if ((Ns(t), t.lookahead < Ms && e === os)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((i = 0),
            t.lookahead >= 3 &&
              ((t.ins_h = Us(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            (t.prev_length = t.match_length),
            (t.prev_match = t.match_start),
            (t.match_length = 2),
            0 !== i &&
              t.prev_length < t.max_lazy_match &&
              t.strstart - i <= t.w_size - Ms &&
              ((t.match_length = Hs(t, i)),
              t.match_length <= 5 &&
                (t.strategy === ms ||
                  (3 === t.match_length &&
                    t.strstart - t.match_start > 4096)) &&
                (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length)
          ) {
            (n = t.strstart + t.lookahead - 3),
              (r = ss(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
              (t.lookahead -= t.prev_length - 1),
              (t.prev_length -= 2);
            do {
              ++t.strstart <= n &&
                ((t.ins_h = Us(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart));
            } while (0 != --t.prev_length);
            if (
              ((t.match_available = 0),
              (t.match_length = 2),
              t.strstart++,
              r && (Os(t, !1), 0 === t.strm.avail_out))
            )
              return 1;
          } else if (t.match_available) {
            if (
              ((r = ss(t, 0, t.window[t.strstart - 1])),
              r && Os(t, !1),
              t.strstart++,
              t.lookahead--,
              0 === t.strm.avail_out)
            )
              return 1;
          } else (t.match_available = 1), t.strstart++, t.lookahead--;
        }
        return (
          t.match_available &&
            ((r = ss(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          e === us
            ? (Os(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.sym_next && (Os(t, !1), 0 === t.strm.avail_out)
            ? 1
            : 2
        );
      };
    function Vs(t, e, i, r, n) {
      (this.good_length = t),
        (this.max_lazy = e),
        (this.nice_length = i),
        (this.max_chain = r),
        (this.func = n);
    }
    const qs = [
      new Vs(0, 0, 0, 0, Gs),
      new Vs(4, 4, 8, 4, js),
      new Vs(4, 5, 16, 8, js),
      new Vs(4, 6, 32, 32, js),
      new Vs(4, 4, 16, 16, Ws),
      new Vs(8, 16, 32, 32, Ws),
      new Vs(8, 16, 128, 128, Ws),
      new Vs(8, 32, 128, 256, Ws),
      new Vs(32, 128, 258, 1024, Ws),
      new Vs(32, 258, 258, 4096, Ws),
    ];
    function Ys() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = As),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new Uint16Array(1146)),
        (this.dyn_dtree = new Uint16Array(122)),
        (this.bl_tree = new Uint16Array(78)),
        Rs(this.dyn_ltree),
        Rs(this.dyn_dtree),
        Rs(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(573)),
        Rs(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(573)),
        Rs(this.depth),
        (this.sym_buf = 0),
        (this.lit_bufsize = 0),
        (this.sym_next = 0),
        (this.sym_end = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    const Xs = (t) => {
        if (!t) return 1;
        const e = t.state;
        return !e ||
          e.strm !== t ||
          (e.status !== Cs &&
            57 !== e.status &&
            69 !== e.status &&
            73 !== e.status &&
            91 !== e.status &&
            103 !== e.status &&
            e.status !== Ss &&
            e.status !== ks)
          ? 1
          : 0;
      },
      Zs = (t) => {
        if (Xs(t)) return Ds(t, bs);
        (t.total_in = t.total_out = 0), (t.data_type = ys);
        const e = t.state;
        return (
          (e.pending = 0),
          (e.pending_out = 0),
          e.wrap < 0 && (e.wrap = -e.wrap),
          (e.status = 2 === e.wrap ? 57 : e.wrap ? Cs : Ss),
          (t.adler = 2 === e.wrap ? 0 : 1),
          (e.last_flush = -2),
          is(e),
          fs
        );
      },
      Js = (t) => {
        const e = Zs(t);
        var i;
        return (
          e === fs &&
            (((i = t.state).window_size = 2 * i.w_size),
            Rs(i.head),
            (i.max_lazy_match = qs[i.level].max_lazy),
            (i.good_match = qs[i.level].good_length),
            (i.nice_match = qs[i.level].nice_length),
            (i.max_chain_length = qs[i.level].max_chain),
            (i.strstart = 0),
            (i.block_start = 0),
            (i.lookahead = 0),
            (i.insert = 0),
            (i.match_length = i.prev_length = 2),
            (i.match_available = 0),
            (i.ins_h = 0)),
          e
        );
      },
      Ks = (t, e, i, r, n, s) => {
        if (!t) return bs;
        let a = 1;
        if (
          (e === ps && (e = 6),
          r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
          n < 1 ||
            n > 9 ||
            i !== As ||
            r < 8 ||
            r > 15 ||
            e < 0 ||
            e > 9 ||
            s < 0 ||
            s > Ts ||
            (8 === r && 1 !== a))
        )
          return Ds(t, bs);
        8 === r && (r = 9);
        const o = new Ys();
        return (
          (t.state = o),
          (o.strm = t),
          (o.status = Cs),
          (o.wrap = a),
          (o.gzhead = null),
          (o.w_bits = r),
          (o.w_size = 1 << o.w_bits),
          (o.w_mask = o.w_size - 1),
          (o.hash_bits = n + 7),
          (o.hash_size = 1 << o.hash_bits),
          (o.hash_mask = o.hash_size - 1),
          (o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3)),
          (o.window = new Uint8Array(2 * o.w_size)),
          (o.head = new Uint16Array(o.hash_size)),
          (o.prev = new Uint16Array(o.w_size)),
          (o.lit_bufsize = 1 << (n + 6)),
          (o.pending_buf_size = 4 * o.lit_bufsize),
          (o.pending_buf = new Uint8Array(o.pending_buf_size)),
          (o.sym_buf = o.lit_bufsize),
          (o.sym_end = 3 * (o.lit_bufsize - 1)),
          (o.level = e),
          (o.strategy = s),
          (o.method = i),
          Js(t)
        );
      };
    var $s = (t, e) => {
        if (Xs(t) || e > cs || e < 0) return t ? Ds(t, bs) : bs;
        const i = t.state;
        if (
          !t.output ||
          (0 !== t.avail_in && !t.input) ||
          (i.status === ks && e !== us)
        )
          return Ds(t, 0 === t.avail_out ? _s : bs);
        const r = i.last_flush;
        if (((i.last_flush = e), 0 !== i.pending)) {
          if ((Ps(t), 0 === t.avail_out)) return (i.last_flush = -1), fs;
        } else if (0 === t.avail_in && Fs(e) <= Fs(r) && e !== us)
          return Ds(t, _s);
        if (i.status === ks && 0 !== t.avail_in) return Ds(t, _s);
        if (
          (i.status === Cs && 0 === i.wrap && (i.status = Ss), i.status === Cs)
        ) {
          let e = (As + ((i.w_bits - 8) << 4)) << 8,
            r = -1;
          if (
            ((r =
              i.strategy >= vs || i.level < 2
                ? 0
                : i.level < 6
                ? 1
                : 6 === i.level
                ? 2
                : 3),
            (e |= r << 6),
            0 !== i.strstart && (e |= 32),
            (e += 31 - (e % 31)),
            Bs(i, e),
            0 !== i.strstart && (Bs(i, t.adler >>> 16), Bs(i, 65535 & t.adler)),
            (t.adler = 1),
            (i.status = Ss),
            Ps(t),
            0 !== i.pending)
          )
            return (i.last_flush = -1), fs;
        }
        if (57 === i.status)
          if (((t.adler = 0), zs(i, 31), zs(i, 139), zs(i, 8), i.gzhead))
            zs(
              i,
              (i.gzhead.text ? 1 : 0) +
                (i.gzhead.hcrc ? 2 : 0) +
                (i.gzhead.extra ? 4 : 0) +
                (i.gzhead.name ? 8 : 0) +
                (i.gzhead.comment ? 16 : 0)
            ),
              zs(i, 255 & i.gzhead.time),
              zs(i, (i.gzhead.time >> 8) & 255),
              zs(i, (i.gzhead.time >> 16) & 255),
              zs(i, (i.gzhead.time >> 24) & 255),
              zs(
                i,
                9 === i.level ? 2 : i.strategy >= vs || i.level < 2 ? 4 : 0
              ),
              zs(i, 255 & i.gzhead.os),
              i.gzhead.extra &&
                i.gzhead.extra.length &&
                (zs(i, 255 & i.gzhead.extra.length),
                zs(i, (i.gzhead.extra.length >> 8) & 255)),
              i.gzhead.hcrc &&
                (t.adler = Qn(t.adler, i.pending_buf, i.pending, 0)),
              (i.gzindex = 0),
              (i.status = 69);
          else if (
            (zs(i, 0),
            zs(i, 0),
            zs(i, 0),
            zs(i, 0),
            zs(i, 0),
            zs(i, 9 === i.level ? 2 : i.strategy >= vs || i.level < 2 ? 4 : 0),
            zs(i, 3),
            (i.status = Ss),
            Ps(t),
            0 !== i.pending)
          )
            return (i.last_flush = -1), fs;
        if (69 === i.status) {
          if (i.gzhead.extra) {
            let e = i.pending,
              r = (65535 & i.gzhead.extra.length) - i.gzindex;
            for (; i.pending + r > i.pending_buf_size; ) {
              let n = i.pending_buf_size - i.pending;
              if (
                (i.pending_buf.set(
                  i.gzhead.extra.subarray(i.gzindex, i.gzindex + n),
                  i.pending
                ),
                (i.pending = i.pending_buf_size),
                i.gzhead.hcrc &&
                  i.pending > e &&
                  (t.adler = Qn(t.adler, i.pending_buf, i.pending - e, e)),
                (i.gzindex += n),
                Ps(t),
                0 !== i.pending)
              )
                return (i.last_flush = -1), fs;
              (e = 0), (r -= n);
            }
            let n = new Uint8Array(i.gzhead.extra);
            i.pending_buf.set(n.subarray(i.gzindex, i.gzindex + r), i.pending),
              (i.pending += r),
              i.gzhead.hcrc &&
                i.pending > e &&
                (t.adler = Qn(t.adler, i.pending_buf, i.pending - e, e)),
              (i.gzindex = 0);
          }
          i.status = 73;
        }
        if (73 === i.status) {
          if (i.gzhead.name) {
            let e,
              r = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > r &&
                    (t.adler = Qn(t.adler, i.pending_buf, i.pending - r, r)),
                  Ps(t),
                  0 !== i.pending)
                )
                  return (i.last_flush = -1), fs;
                r = 0;
              }
              (e =
                i.gzindex < i.gzhead.name.length
                  ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                  : 0),
                zs(i, e);
            } while (0 !== e);
            i.gzhead.hcrc &&
              i.pending > r &&
              (t.adler = Qn(t.adler, i.pending_buf, i.pending - r, r)),
              (i.gzindex = 0);
          }
          i.status = 91;
        }
        if (91 === i.status) {
          if (i.gzhead.comment) {
            let e,
              r = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > r &&
                    (t.adler = Qn(t.adler, i.pending_buf, i.pending - r, r)),
                  Ps(t),
                  0 !== i.pending)
                )
                  return (i.last_flush = -1), fs;
                r = 0;
              }
              (e =
                i.gzindex < i.gzhead.comment.length
                  ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                  : 0),
                zs(i, e);
            } while (0 !== e);
            i.gzhead.hcrc &&
              i.pending > r &&
              (t.adler = Qn(t.adler, i.pending_buf, i.pending - r, r));
          }
          i.status = 103;
        }
        if (103 === i.status) {
          if (i.gzhead.hcrc) {
            if (i.pending + 2 > i.pending_buf_size && (Ps(t), 0 !== i.pending))
              return (i.last_flush = -1), fs;
            zs(i, 255 & t.adler), zs(i, (t.adler >> 8) & 255), (t.adler = 0);
          }
          if (((i.status = Ss), Ps(t), 0 !== i.pending))
            return (i.last_flush = -1), fs;
        }
        if (
          0 !== t.avail_in ||
          0 !== i.lookahead ||
          (e !== os && i.status !== ks)
        ) {
          let r =
            0 === i.level
              ? Gs(i, e)
              : i.strategy === vs
              ? ((t, e) => {
                  let i;
                  for (;;) {
                    if (0 === t.lookahead && (Ns(t), 0 === t.lookahead)) {
                      if (e === os) return 1;
                      break;
                    }
                    if (
                      ((t.match_length = 0),
                      (i = ss(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++,
                      i && (Os(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    e === us
                      ? (Os(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.sym_next && (Os(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(i, e)
              : i.strategy === xs
              ? ((t, e) => {
                  let i, r, n, s;
                  const a = t.window;
                  for (;;) {
                    if (t.lookahead <= Es) {
                      if ((Ns(t), t.lookahead <= Es && e === os)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((t.match_length = 0),
                      t.lookahead >= 3 &&
                        t.strstart > 0 &&
                        ((n = t.strstart - 1),
                        (r = a[n]),
                        r === a[++n] && r === a[++n] && r === a[++n]))
                    ) {
                      s = t.strstart + Es;
                      do {} while (
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        n < s
                      );
                      (t.match_length = Es - (s - n)),
                        t.match_length > t.lookahead &&
                          (t.match_length = t.lookahead);
                    }
                    if (
                      (t.match_length >= 3
                        ? ((i = ss(t, 1, t.match_length - 3)),
                          (t.lookahead -= t.match_length),
                          (t.strstart += t.match_length),
                          (t.match_length = 0))
                        : ((i = ss(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++),
                      i && (Os(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    e === us
                      ? (Os(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.sym_next && (Os(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(i, e)
              : qs[i.level].func(i, e);
          if (((3 !== r && 4 !== r) || (i.status = ks), 1 === r || 3 === r))
            return 0 === t.avail_out && (i.last_flush = -1), fs;
          if (
            2 === r &&
            (e === ls
              ? as(i)
              : e !== cs &&
                (rs(i, 0, 0, !1),
                e === hs &&
                  (Rs(i.head),
                  0 === i.lookahead &&
                    ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
            Ps(t),
            0 === t.avail_out)
          )
            return (i.last_flush = -1), fs;
        }
        return e !== us
          ? fs
          : i.wrap <= 0
          ? ds
          : (2 === i.wrap
              ? (zs(i, 255 & t.adler),
                zs(i, (t.adler >> 8) & 255),
                zs(i, (t.adler >> 16) & 255),
                zs(i, (t.adler >> 24) & 255),
                zs(i, 255 & t.total_in),
                zs(i, (t.total_in >> 8) & 255),
                zs(i, (t.total_in >> 16) & 255),
                zs(i, (t.total_in >> 24) & 255))
              : (Bs(i, t.adler >>> 16), Bs(i, 65535 & t.adler)),
            Ps(t),
            i.wrap > 0 && (i.wrap = -i.wrap),
            0 !== i.pending ? fs : ds);
      },
      Qs = (t, e) => {
        let i = e.length;
        if (Xs(t)) return bs;
        const r = t.state,
          n = r.wrap;
        if (2 === n || (1 === n && r.status !== Cs) || r.lookahead) return bs;
        if (
          (1 === n && (t.adler = Kn(t.adler, e, i, 0)),
          (r.wrap = 0),
          i >= r.w_size)
        ) {
          0 === n &&
            (Rs(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0));
          let t = new Uint8Array(r.w_size);
          t.set(e.subarray(i - r.w_size, i), 0), (e = t), (i = r.w_size);
        }
        const s = t.avail_in,
          a = t.next_in,
          o = t.input;
        for (
          t.avail_in = i, t.next_in = 0, t.input = e, Ns(r);
          r.lookahead >= 3;

        ) {
          let t = r.strstart,
            e = r.lookahead - 2;
          do {
            (r.ins_h = Us(r, r.ins_h, r.window[t + 3 - 1])),
              (r.prev[t & r.w_mask] = r.head[r.ins_h]),
              (r.head[r.ins_h] = t),
              t++;
          } while (--e);
          (r.strstart = t), (r.lookahead = 2), Ns(r);
        }
        return (
          (r.strstart += r.lookahead),
          (r.block_start = r.strstart),
          (r.insert = r.lookahead),
          (r.lookahead = 0),
          (r.match_length = r.prev_length = 2),
          (r.match_available = 0),
          (t.next_in = a),
          (t.input = o),
          (t.avail_in = s),
          (r.wrap = n),
          fs
        );
      },
      ta = {
        deflateInit: (t, e) => Ks(t, e, As, 15, 8, ws),
        deflateInit2: Ks,
        deflateReset: Js,
        deflateResetKeep: Zs,
        deflateSetHeader: (t, e) =>
          Xs(t) || 2 !== t.state.wrap ? bs : ((t.state.gzhead = e), fs),
        deflate: $s,
        deflateEnd: (t) => {
          if (Xs(t)) return bs;
          const e = t.state.status;
          return (t.state = null), e === Ss ? Ds(t, gs) : fs;
        },
        deflateSetDictionary: Qs,
        deflateInfo: "pako deflate (from Nodeca project)",
      };
    const ea = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var ia = {
      assign: function (t) {
        const e = Array.prototype.slice.call(arguments, 1);
        for (; e.length; ) {
          const i = e.shift();
          if (i) {
            if ("object" != typeof i)
              throw new TypeError(i + "must be non-object");
            for (const e in i) ea(i, e) && (t[e] = i[e]);
          }
        }
        return t;
      },
      flattenChunks: (t) => {
        let e = 0;
        for (let i = 0, r = t.length; i < r; i++) e += t[i].length;
        const i = new Uint8Array(e);
        for (let e = 0, r = 0, n = t.length; e < n; e++) {
          let n = t[e];
          i.set(n, r), (r += n.length);
        }
        return i;
      },
    };
    let ra = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      ra = !1;
    }
    const na = new Uint8Array(256);
    for (let t = 0; t < 256; t++)
      na[t] =
        t >= 252
          ? 6
          : t >= 248
          ? 5
          : t >= 240
          ? 4
          : t >= 224
          ? 3
          : t >= 192
          ? 2
          : 1;
    na[254] = na[254] = 1;
    var sa = {
      string2buf: (t) => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(t);
        let e,
          i,
          r,
          n,
          s,
          a = t.length,
          o = 0;
        for (n = 0; n < a; n++)
          (i = t.charCodeAt(n)),
            55296 == (64512 & i) &&
              n + 1 < a &&
              ((r = t.charCodeAt(n + 1)),
              56320 == (64512 & r) &&
                ((i = 65536 + ((i - 55296) << 10) + (r - 56320)), n++)),
            (o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4);
        for (e = new Uint8Array(o), s = 0, n = 0; s < o; n++)
          (i = t.charCodeAt(n)),
            55296 == (64512 & i) &&
              n + 1 < a &&
              ((r = t.charCodeAt(n + 1)),
              56320 == (64512 & r) &&
                ((i = 65536 + ((i - 55296) << 10) + (r - 56320)), n++)),
            i < 128
              ? (e[s++] = i)
              : i < 2048
              ? ((e[s++] = 192 | (i >>> 6)), (e[s++] = 128 | (63 & i)))
              : i < 65536
              ? ((e[s++] = 224 | (i >>> 12)),
                (e[s++] = 128 | ((i >>> 6) & 63)),
                (e[s++] = 128 | (63 & i)))
              : ((e[s++] = 240 | (i >>> 18)),
                (e[s++] = 128 | ((i >>> 12) & 63)),
                (e[s++] = 128 | ((i >>> 6) & 63)),
                (e[s++] = 128 | (63 & i)));
        return e;
      },
      buf2string: (t, e) => {
        const i = e || t.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(t.subarray(0, e));
        let r, n;
        const s = new Array(2 * i);
        for (n = 0, r = 0; r < i; ) {
          let e = t[r++];
          if (e < 128) {
            s[n++] = e;
            continue;
          }
          let a = na[e];
          if (a > 4) (s[n++] = 65533), (r += a - 1);
          else {
            for (e &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < i; )
              (e = (e << 6) | (63 & t[r++])), a--;
            a > 1
              ? (s[n++] = 65533)
              : e < 65536
              ? (s[n++] = e)
              : ((e -= 65536),
                (s[n++] = 55296 | ((e >> 10) & 1023)),
                (s[n++] = 56320 | (1023 & e)));
          }
        }
        return ((t, e) => {
          if (e < 65534 && t.subarray && ra)
            return String.fromCharCode.apply(
              null,
              t.length === e ? t : t.subarray(0, e)
            );
          let i = "";
          for (let r = 0; r < e; r++) i += String.fromCharCode(t[r]);
          return i;
        })(s, n);
      },
      utf8border: (t, e) => {
        (e = e || t.length) > t.length && (e = t.length);
        let i = e - 1;
        for (; i >= 0 && 128 == (192 & t[i]); ) i--;
        return i < 0 || 0 === i ? e : i + na[t[i]] > e ? i : e;
      },
    };
    var aa = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    };
    const oa = Object.prototype.toString,
      {
        Z_NO_FLUSH: la,
        Z_SYNC_FLUSH: ha,
        Z_FULL_FLUSH: ua,
        Z_FINISH: ca,
        Z_OK: fa,
        Z_STREAM_END: da,
        Z_DEFAULT_COMPRESSION: ba,
        Z_DEFAULT_STRATEGY: ga,
        Z_DEFLATED: _a,
      } = es;
    function pa(t) {
      this.options = ia.assign(
        {
          level: ba,
          method: _a,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: ga,
        },
        t || {}
      );
      let e = this.options;
      e.raw && e.windowBits > 0
        ? (e.windowBits = -e.windowBits)
        : e.gzip &&
          e.windowBits > 0 &&
          e.windowBits < 16 &&
          (e.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new aa()),
        (this.strm.avail_out = 0);
      let i = ta.deflateInit2(
        this.strm,
        e.level,
        e.method,
        e.windowBits,
        e.memLevel,
        e.strategy
      );
      if (i !== fa) throw new Error(ts[i]);
      if (
        (e.header && ta.deflateSetHeader(this.strm, e.header), e.dictionary)
      ) {
        let t;
        if (
          ((t =
            "string" == typeof e.dictionary
              ? sa.string2buf(e.dictionary)
              : "[object ArrayBuffer]" === oa.call(e.dictionary)
              ? new Uint8Array(e.dictionary)
              : e.dictionary),
          (i = ta.deflateSetDictionary(this.strm, t)),
          i !== fa)
        )
          throw new Error(ts[i]);
        this._dict_set = !0;
      }
    }
    function ma(t, e) {
      const i = new pa(e);
      if ((i.push(t, !0), i.err)) throw i.msg || ts[i.err];
      return i.result;
    }
    (pa.prototype.push = function (t, e) {
      const i = this.strm,
        r = this.options.chunkSize;
      let n, s;
      if (this.ended) return !1;
      for (
        s = e === ~~e ? e : !0 === e ? ca : la,
          "string" == typeof t
            ? (i.input = sa.string2buf(t))
            : "[object ArrayBuffer]" === oa.call(t)
            ? (i.input = new Uint8Array(t))
            : (i.input = t),
          i.next_in = 0,
          i.avail_in = i.input.length;
        ;

      )
        if (
          (0 === i.avail_out &&
            ((i.output = new Uint8Array(r)),
            (i.next_out = 0),
            (i.avail_out = r)),
          (s === ha || s === ua) && i.avail_out <= 6)
        )
          this.onData(i.output.subarray(0, i.next_out)), (i.avail_out = 0);
        else {
          if (((n = ta.deflate(i, s)), n === da))
            return (
              i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
              (n = ta.deflateEnd(this.strm)),
              this.onEnd(n),
              (this.ended = !0),
              n === fa
            );
          if (0 !== i.avail_out) {
            if (s > 0 && i.next_out > 0)
              this.onData(i.output.subarray(0, i.next_out)), (i.avail_out = 0);
            else if (0 === i.avail_in) break;
          } else this.onData(i.output);
        }
      return !0;
    }),
      (pa.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (pa.prototype.onEnd = function (t) {
        t === fa && (this.result = ia.flattenChunks(this.chunks)),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg);
      });
    var va = {
      Deflate: pa,
      deflate: ma,
      deflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), ma(t, e);
      },
      gzip: function (t, e) {
        return ((e = e || {}).gzip = !0), ma(t, e);
      },
      constants: es,
    };
    const xa = 16209;
    var Ta = function (t, e) {
      let i,
        r,
        n,
        s,
        a,
        o,
        l,
        h,
        u,
        c,
        f,
        d,
        b,
        g,
        _,
        p,
        m,
        v,
        x,
        T,
        w,
        y,
        A,
        E;
      const M = t.state;
      (i = t.next_in),
        (A = t.input),
        (r = i + (t.avail_in - 5)),
        (n = t.next_out),
        (E = t.output),
        (s = n - (e - t.avail_out)),
        (a = n + (t.avail_out - 257)),
        (o = M.dmax),
        (l = M.wsize),
        (h = M.whave),
        (u = M.wnext),
        (c = M.window),
        (f = M.hold),
        (d = M.bits),
        (b = M.lencode),
        (g = M.distcode),
        (_ = (1 << M.lenbits) - 1),
        (p = (1 << M.distbits) - 1);
      t: do {
        d < 15 && ((f += A[i++] << d), (d += 8), (f += A[i++] << d), (d += 8)),
          (m = b[f & _]);
        e: for (;;) {
          if (
            ((v = m >>> 24),
            (f >>>= v),
            (d -= v),
            (v = (m >>> 16) & 255),
            0 === v)
          )
            E[n++] = 65535 & m;
          else {
            if (!(16 & v)) {
              if (0 == (64 & v)) {
                m = b[(65535 & m) + (f & ((1 << v) - 1))];
                continue e;
              }
              if (32 & v) {
                M.mode = 16191;
                break t;
              }
              (t.msg = "invalid literal/length code"), (M.mode = xa);
              break t;
            }
            (x = 65535 & m),
              (v &= 15),
              v &&
                (d < v && ((f += A[i++] << d), (d += 8)),
                (x += f & ((1 << v) - 1)),
                (f >>>= v),
                (d -= v)),
              d < 15 &&
                ((f += A[i++] << d), (d += 8), (f += A[i++] << d), (d += 8)),
              (m = g[f & p]);
            i: for (;;) {
              if (
                ((v = m >>> 24),
                (f >>>= v),
                (d -= v),
                (v = (m >>> 16) & 255),
                !(16 & v))
              ) {
                if (0 == (64 & v)) {
                  m = g[(65535 & m) + (f & ((1 << v) - 1))];
                  continue i;
                }
                (t.msg = "invalid distance code"), (M.mode = xa);
                break t;
              }
              if (
                ((T = 65535 & m),
                (v &= 15),
                d < v &&
                  ((f += A[i++] << d),
                  (d += 8),
                  d < v && ((f += A[i++] << d), (d += 8))),
                (T += f & ((1 << v) - 1)),
                T > o)
              ) {
                (t.msg = "invalid distance too far back"), (M.mode = xa);
                break t;
              }
              if (((f >>>= v), (d -= v), (v = n - s), T > v)) {
                if (((v = T - v), v > h && M.sane)) {
                  (t.msg = "invalid distance too far back"), (M.mode = xa);
                  break t;
                }
                if (((w = 0), (y = c), 0 === u)) {
                  if (((w += l - v), v < x)) {
                    x -= v;
                    do {
                      E[n++] = c[w++];
                    } while (--v);
                    (w = n - T), (y = E);
                  }
                } else if (u < v) {
                  if (((w += l + u - v), (v -= u), v < x)) {
                    x -= v;
                    do {
                      E[n++] = c[w++];
                    } while (--v);
                    if (((w = 0), u < x)) {
                      (v = u), (x -= v);
                      do {
                        E[n++] = c[w++];
                      } while (--v);
                      (w = n - T), (y = E);
                    }
                  }
                } else if (((w += u - v), v < x)) {
                  x -= v;
                  do {
                    E[n++] = c[w++];
                  } while (--v);
                  (w = n - T), (y = E);
                }
                for (; x > 2; )
                  (E[n++] = y[w++]),
                    (E[n++] = y[w++]),
                    (E[n++] = y[w++]),
                    (x -= 3);
                x && ((E[n++] = y[w++]), x > 1 && (E[n++] = y[w++]));
              } else {
                w = n - T;
                do {
                  (E[n++] = E[w++]),
                    (E[n++] = E[w++]),
                    (E[n++] = E[w++]),
                    (x -= 3);
                } while (x > 2);
                x && ((E[n++] = E[w++]), x > 1 && (E[n++] = E[w++]));
              }
              break;
            }
          }
          break;
        }
      } while (i < r && n < a);
      (x = d >> 3),
        (i -= x),
        (d -= x << 3),
        (f &= (1 << d) - 1),
        (t.next_in = i),
        (t.next_out = n),
        (t.avail_in = i < r ? r - i + 5 : 5 - (i - r)),
        (t.avail_out = n < a ? a - n + 257 : 257 - (n - a)),
        (M.hold = f),
        (M.bits = d);
    };
    const wa = 15,
      ya = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      Aa = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      Ea = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      Ma = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var Ca = (t, e, i, r, n, s, a, o) => {
      const l = o.bits;
      let h,
        u,
        c,
        f,
        d,
        b,
        g = 0,
        _ = 0,
        p = 0,
        m = 0,
        v = 0,
        x = 0,
        T = 0,
        w = 0,
        y = 0,
        A = 0,
        E = null;
      const M = new Uint16Array(16),
        C = new Uint16Array(16);
      let S,
        k,
        D,
        F = null;
      for (g = 0; g <= wa; g++) M[g] = 0;
      for (_ = 0; _ < r; _++) M[e[i + _]]++;
      for (v = l, m = wa; m >= 1 && 0 === M[m]; m--);
      if ((v > m && (v = m), 0 === m))
        return (n[s++] = 20971520), (n[s++] = 20971520), (o.bits = 1), 0;
      for (p = 1; p < m && 0 === M[p]; p++);
      for (v < p && (v = p), w = 1, g = 1; g <= wa; g++)
        if (((w <<= 1), (w -= M[g]), w < 0)) return -1;
      if (w > 0 && (0 === t || 1 !== m)) return -1;
      for (C[1] = 0, g = 1; g < wa; g++) C[g + 1] = C[g] + M[g];
      for (_ = 0; _ < r; _++) 0 !== e[i + _] && (a[C[e[i + _]]++] = _);
      if (
        (0 === t
          ? ((E = F = a), (b = 20))
          : 1 === t
          ? ((E = ya), (F = Aa), (b = 257))
          : ((E = Ea), (F = Ma), (b = 0)),
        (A = 0),
        (_ = 0),
        (g = p),
        (d = s),
        (x = v),
        (T = 0),
        (c = -1),
        (y = 1 << v),
        (f = y - 1),
        (1 === t && y > 852) || (2 === t && y > 592))
      )
        return 1;
      for (;;) {
        (S = g - T),
          a[_] + 1 < b
            ? ((k = 0), (D = a[_]))
            : a[_] >= b
            ? ((k = F[a[_] - b]), (D = E[a[_] - b]))
            : ((k = 96), (D = 0)),
          (h = 1 << (g - T)),
          (u = 1 << x),
          (p = u);
        do {
          (u -= h), (n[d + (A >> T) + u] = (S << 24) | (k << 16) | D | 0);
        } while (0 !== u);
        for (h = 1 << (g - 1); A & h; ) h >>= 1;
        if ((0 !== h ? ((A &= h - 1), (A += h)) : (A = 0), _++, 0 == --M[g])) {
          if (g === m) break;
          g = e[i + a[_]];
        }
        if (g > v && (A & f) !== c) {
          for (
            0 === T && (T = v), d += p, x = g - T, w = 1 << x;
            x + T < m && ((w -= M[x + T]), !(w <= 0));

          )
            x++, (w <<= 1);
          if (((y += 1 << x), (1 === t && y > 852) || (2 === t && y > 592)))
            return 1;
          (c = A & f), (n[c] = (v << 24) | (x << 16) | (d - s) | 0);
        }
      }
      return (
        0 !== A && (n[d + A] = ((g - T) << 24) | (64 << 16) | 0),
        (o.bits = v),
        0
      );
    };
    const {
        Z_FINISH: Sa,
        Z_BLOCK: ka,
        Z_TREES: Da,
        Z_OK: Fa,
        Z_STREAM_END: Ra,
        Z_NEED_DICT: Ia,
        Z_STREAM_ERROR: Ua,
        Z_DATA_ERROR: Pa,
        Z_MEM_ERROR: Oa,
        Z_BUF_ERROR: za,
        Z_DEFLATED: Ba,
      } = es,
      La = 16180,
      Ha = 16190,
      Na = 16191,
      Ga = 16192,
      ja = 16194,
      Wa = 16199,
      Va = 16200,
      qa = 16206,
      Ya = 16209,
      Xa = (t) =>
        ((t >>> 24) & 255) +
        ((t >>> 8) & 65280) +
        ((65280 & t) << 8) +
        ((255 & t) << 24);
    function Za() {
      (this.strm = null),
        (this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new Uint16Array(320)),
        (this.work = new Uint16Array(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    const Ja = (t) => {
        if (!t) return 1;
        const e = t.state;
        return !e || e.strm !== t || e.mode < La || e.mode > 16211 ? 1 : 0;
      },
      Ka = (t) => {
        if (Ja(t)) return Ua;
        const e = t.state;
        return (
          (t.total_in = t.total_out = e.total = 0),
          (t.msg = ""),
          e.wrap && (t.adler = 1 & e.wrap),
          (e.mode = La),
          (e.last = 0),
          (e.havedict = 0),
          (e.flags = -1),
          (e.dmax = 32768),
          (e.head = null),
          (e.hold = 0),
          (e.bits = 0),
          (e.lencode = e.lendyn = new Int32Array(852)),
          (e.distcode = e.distdyn = new Int32Array(592)),
          (e.sane = 1),
          (e.back = -1),
          Fa
        );
      },
      $a = (t) => {
        if (Ja(t)) return Ua;
        const e = t.state;
        return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), Ka(t);
      },
      Qa = (t, e) => {
        let i;
        if (Ja(t)) return Ua;
        const r = t.state;
        return (
          e < 0
            ? ((i = 0), (e = -e))
            : ((i = 5 + (e >> 4)), e < 48 && (e &= 15)),
          e && (e < 8 || e > 15)
            ? Ua
            : (null !== r.window && r.wbits !== e && (r.window = null),
              (r.wrap = i),
              (r.wbits = e),
              $a(t))
        );
      },
      to = (t, e) => {
        if (!t) return Ua;
        const i = new Za();
        (t.state = i), (i.strm = t), (i.window = null), (i.mode = La);
        const r = Qa(t, e);
        return r !== Fa && (t.state = null), r;
      };
    let eo,
      io,
      ro = !0;
    const no = (t) => {
        if (ro) {
          (eo = new Int32Array(512)), (io = new Int32Array(32));
          let e = 0;
          for (; e < 144; ) t.lens[e++] = 8;
          for (; e < 256; ) t.lens[e++] = 9;
          for (; e < 280; ) t.lens[e++] = 7;
          for (; e < 288; ) t.lens[e++] = 8;
          for (
            Ca(1, t.lens, 0, 288, eo, 0, t.work, { bits: 9 }), e = 0;
            e < 32;

          )
            t.lens[e++] = 5;
          Ca(2, t.lens, 0, 32, io, 0, t.work, { bits: 5 }), (ro = !1);
        }
        (t.lencode = eo), (t.lenbits = 9), (t.distcode = io), (t.distbits = 5);
      },
      so = (t, e, i, r) => {
        let n;
        const s = t.state;
        return (
          null === s.window &&
            ((s.wsize = 1 << s.wbits),
            (s.wnext = 0),
            (s.whave = 0),
            (s.window = new Uint8Array(s.wsize))),
          r >= s.wsize
            ? (s.window.set(e.subarray(i - s.wsize, i), 0),
              (s.wnext = 0),
              (s.whave = s.wsize))
            : ((n = s.wsize - s.wnext),
              n > r && (n = r),
              s.window.set(e.subarray(i - r, i - r + n), s.wnext),
              (r -= n)
                ? (s.window.set(e.subarray(i - r, i), 0),
                  (s.wnext = r),
                  (s.whave = s.wsize))
                : ((s.wnext += n),
                  s.wnext === s.wsize && (s.wnext = 0),
                  s.whave < s.wsize && (s.whave += n))),
          0
        );
      };
    var ao = (t, e) => {
        let i,
          r,
          n,
          s,
          a,
          o,
          l,
          h,
          u,
          c,
          f,
          d,
          b,
          g,
          _,
          p,
          m,
          v,
          x,
          T,
          w,
          y,
          A = 0;
        const E = new Uint8Array(4);
        let M, C;
        const S = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
        if (Ja(t) || !t.output || (!t.input && 0 !== t.avail_in)) return Ua;
        (i = t.state),
          i.mode === Na && (i.mode = Ga),
          (a = t.next_out),
          (n = t.output),
          (l = t.avail_out),
          (s = t.next_in),
          (r = t.input),
          (o = t.avail_in),
          (h = i.hold),
          (u = i.bits),
          (c = o),
          (f = l),
          (y = Fa);
        t: for (;;)
          switch (i.mode) {
            case La:
              if (0 === i.wrap) {
                i.mode = Ga;
                break;
              }
              for (; u < 16; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              if (2 & i.wrap && 35615 === h) {
                0 === i.wbits && (i.wbits = 15),
                  (i.check = 0),
                  (E[0] = 255 & h),
                  (E[1] = (h >>> 8) & 255),
                  (i.check = Qn(i.check, E, 2, 0)),
                  (h = 0),
                  (u = 0),
                  (i.mode = 16181);
                break;
              }
              if (
                (i.head && (i.head.done = !1),
                !(1 & i.wrap) || (((255 & h) << 8) + (h >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (i.mode = Ya);
                break;
              }
              if ((15 & h) !== Ba) {
                (t.msg = "unknown compression method"), (i.mode = Ya);
                break;
              }
              if (
                ((h >>>= 4),
                (u -= 4),
                (w = 8 + (15 & h)),
                0 === i.wbits && (i.wbits = w),
                w > 15 || w > i.wbits)
              ) {
                (t.msg = "invalid window size"), (i.mode = Ya);
                break;
              }
              (i.dmax = 1 << i.wbits),
                (i.flags = 0),
                (t.adler = i.check = 1),
                (i.mode = 512 & h ? 16189 : Na),
                (h = 0),
                (u = 0);
              break;
            case 16181:
              for (; u < 16; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              if (((i.flags = h), (255 & i.flags) !== Ba)) {
                (t.msg = "unknown compression method"), (i.mode = Ya);
                break;
              }
              if (57344 & i.flags) {
                (t.msg = "unknown header flags set"), (i.mode = Ya);
                break;
              }
              i.head && (i.head.text = (h >> 8) & 1),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((E[0] = 255 & h),
                  (E[1] = (h >>> 8) & 255),
                  (i.check = Qn(i.check, E, 2, 0))),
                (h = 0),
                (u = 0),
                (i.mode = 16182);
            case 16182:
              for (; u < 32; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              i.head && (i.head.time = h),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((E[0] = 255 & h),
                  (E[1] = (h >>> 8) & 255),
                  (E[2] = (h >>> 16) & 255),
                  (E[3] = (h >>> 24) & 255),
                  (i.check = Qn(i.check, E, 4, 0))),
                (h = 0),
                (u = 0),
                (i.mode = 16183);
            case 16183:
              for (; u < 16; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              i.head && ((i.head.xflags = 255 & h), (i.head.os = h >> 8)),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((E[0] = 255 & h),
                  (E[1] = (h >>> 8) & 255),
                  (i.check = Qn(i.check, E, 2, 0))),
                (h = 0),
                (u = 0),
                (i.mode = 16184);
            case 16184:
              if (1024 & i.flags) {
                for (; u < 16; ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                (i.length = h),
                  i.head && (i.head.extra_len = h),
                  512 & i.flags &&
                    4 & i.wrap &&
                    ((E[0] = 255 & h),
                    (E[1] = (h >>> 8) & 255),
                    (i.check = Qn(i.check, E, 2, 0))),
                  (h = 0),
                  (u = 0);
              } else i.head && (i.head.extra = null);
              i.mode = 16185;
            case 16185:
              if (
                1024 & i.flags &&
                ((d = i.length),
                d > o && (d = o),
                d &&
                  (i.head &&
                    ((w = i.head.extra_len - i.length),
                    i.head.extra ||
                      (i.head.extra = new Uint8Array(i.head.extra_len)),
                    i.head.extra.set(r.subarray(s, s + d), w)),
                  512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = Qn(i.check, r, d, s)),
                  (o -= d),
                  (s += d),
                  (i.length -= d)),
                i.length)
              )
                break t;
              (i.length = 0), (i.mode = 16186);
            case 16186:
              if (2048 & i.flags) {
                if (0 === o) break t;
                d = 0;
                do {
                  (w = r[s + d++]),
                    i.head &&
                      w &&
                      i.length < 65536 &&
                      (i.head.name += String.fromCharCode(w));
                } while (w && d < o);
                if (
                  (512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = Qn(i.check, r, d, s)),
                  (o -= d),
                  (s += d),
                  w)
                )
                  break t;
              } else i.head && (i.head.name = null);
              (i.length = 0), (i.mode = 16187);
            case 16187:
              if (4096 & i.flags) {
                if (0 === o) break t;
                d = 0;
                do {
                  (w = r[s + d++]),
                    i.head &&
                      w &&
                      i.length < 65536 &&
                      (i.head.comment += String.fromCharCode(w));
                } while (w && d < o);
                if (
                  (512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = Qn(i.check, r, d, s)),
                  (o -= d),
                  (s += d),
                  w)
                )
                  break t;
              } else i.head && (i.head.comment = null);
              i.mode = 16188;
            case 16188:
              if (512 & i.flags) {
                for (; u < 16; ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                if (4 & i.wrap && h !== (65535 & i.check)) {
                  (t.msg = "header crc mismatch"), (i.mode = Ya);
                  break;
                }
                (h = 0), (u = 0);
              }
              i.head &&
                ((i.head.hcrc = (i.flags >> 9) & 1), (i.head.done = !0)),
                (t.adler = i.check = 0),
                (i.mode = Na);
              break;
            case 16189:
              for (; u < 32; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              (t.adler = i.check = Xa(h)), (h = 0), (u = 0), (i.mode = Ha);
            case Ha:
              if (0 === i.havedict)
                return (
                  (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = s),
                  (t.avail_in = o),
                  (i.hold = h),
                  (i.bits = u),
                  Ia
                );
              (t.adler = i.check = 1), (i.mode = Na);
            case Na:
              if (e === ka || e === Da) break t;
            case Ga:
              if (i.last) {
                (h >>>= 7 & u), (u -= 7 & u), (i.mode = qa);
                break;
              }
              for (; u < 3; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              switch (((i.last = 1 & h), (h >>>= 1), (u -= 1), 3 & h)) {
                case 0:
                  i.mode = 16193;
                  break;
                case 1:
                  if ((no(i), (i.mode = Wa), e === Da)) {
                    (h >>>= 2), (u -= 2);
                    break t;
                  }
                  break;
                case 2:
                  i.mode = 16196;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (i.mode = Ya);
              }
              (h >>>= 2), (u -= 2);
              break;
            case 16193:
              for (h >>>= 7 & u, u -= 7 & u; u < 32; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              if ((65535 & h) != ((h >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (i.mode = Ya);
                break;
              }
              if (
                ((i.length = 65535 & h),
                (h = 0),
                (u = 0),
                (i.mode = ja),
                e === Da)
              )
                break t;
            case ja:
              i.mode = 16195;
            case 16195:
              if (((d = i.length), d)) {
                if ((d > o && (d = o), d > l && (d = l), 0 === d)) break t;
                n.set(r.subarray(s, s + d), a),
                  (o -= d),
                  (s += d),
                  (l -= d),
                  (a += d),
                  (i.length -= d);
                break;
              }
              i.mode = Na;
              break;
            case 16196:
              for (; u < 14; ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              if (
                ((i.nlen = 257 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (i.ndist = 1 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (i.ncode = 4 + (15 & h)),
                (h >>>= 4),
                (u -= 4),
                i.nlen > 286 || i.ndist > 30)
              ) {
                (t.msg = "too many length or distance symbols"), (i.mode = Ya);
                break;
              }
              (i.have = 0), (i.mode = 16197);
            case 16197:
              for (; i.have < i.ncode; ) {
                for (; u < 3; ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                (i.lens[S[i.have++]] = 7 & h), (h >>>= 3), (u -= 3);
              }
              for (; i.have < 19; ) i.lens[S[i.have++]] = 0;
              if (
                ((i.lencode = i.lendyn),
                (i.lenbits = 7),
                (M = { bits: i.lenbits }),
                (y = Ca(0, i.lens, 0, 19, i.lencode, 0, i.work, M)),
                (i.lenbits = M.bits),
                y)
              ) {
                (t.msg = "invalid code lengths set"), (i.mode = Ya);
                break;
              }
              (i.have = 0), (i.mode = 16198);
            case 16198:
              for (; i.have < i.nlen + i.ndist; ) {
                for (
                  ;
                  (A = i.lencode[h & ((1 << i.lenbits) - 1)]),
                    (_ = A >>> 24),
                    (p = (A >>> 16) & 255),
                    (m = 65535 & A),
                    !(_ <= u);

                ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                if (m < 16) (h >>>= _), (u -= _), (i.lens[i.have++] = m);
                else {
                  if (16 === m) {
                    for (C = _ + 2; u < C; ) {
                      if (0 === o) break t;
                      o--, (h += r[s++] << u), (u += 8);
                    }
                    if (((h >>>= _), (u -= _), 0 === i.have)) {
                      (t.msg = "invalid bit length repeat"), (i.mode = Ya);
                      break;
                    }
                    (w = i.lens[i.have - 1]),
                      (d = 3 + (3 & h)),
                      (h >>>= 2),
                      (u -= 2);
                  } else if (17 === m) {
                    for (C = _ + 3; u < C; ) {
                      if (0 === o) break t;
                      o--, (h += r[s++] << u), (u += 8);
                    }
                    (h >>>= _),
                      (u -= _),
                      (w = 0),
                      (d = 3 + (7 & h)),
                      (h >>>= 3),
                      (u -= 3);
                  } else {
                    for (C = _ + 7; u < C; ) {
                      if (0 === o) break t;
                      o--, (h += r[s++] << u), (u += 8);
                    }
                    (h >>>= _),
                      (u -= _),
                      (w = 0),
                      (d = 11 + (127 & h)),
                      (h >>>= 7),
                      (u -= 7);
                  }
                  if (i.have + d > i.nlen + i.ndist) {
                    (t.msg = "invalid bit length repeat"), (i.mode = Ya);
                    break;
                  }
                  for (; d--; ) i.lens[i.have++] = w;
                }
              }
              if (i.mode === Ya) break;
              if (0 === i.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (i.mode = Ya);
                break;
              }
              if (
                ((i.lenbits = 9),
                (M = { bits: i.lenbits }),
                (y = Ca(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, M)),
                (i.lenbits = M.bits),
                y)
              ) {
                (t.msg = "invalid literal/lengths set"), (i.mode = Ya);
                break;
              }
              if (
                ((i.distbits = 6),
                (i.distcode = i.distdyn),
                (M = { bits: i.distbits }),
                (y = Ca(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, M)),
                (i.distbits = M.bits),
                y)
              ) {
                (t.msg = "invalid distances set"), (i.mode = Ya);
                break;
              }
              if (((i.mode = Wa), e === Da)) break t;
            case Wa:
              i.mode = Va;
            case Va:
              if (o >= 6 && l >= 258) {
                (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = s),
                  (t.avail_in = o),
                  (i.hold = h),
                  (i.bits = u),
                  Ta(t, f),
                  (a = t.next_out),
                  (n = t.output),
                  (l = t.avail_out),
                  (s = t.next_in),
                  (r = t.input),
                  (o = t.avail_in),
                  (h = i.hold),
                  (u = i.bits),
                  i.mode === Na && (i.back = -1);
                break;
              }
              for (
                i.back = 0;
                (A = i.lencode[h & ((1 << i.lenbits) - 1)]),
                  (_ = A >>> 24),
                  (p = (A >>> 16) & 255),
                  (m = 65535 & A),
                  !(_ <= u);

              ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              if (p && 0 == (240 & p)) {
                for (
                  v = _, x = p, T = m;
                  (A = i.lencode[T + ((h & ((1 << (v + x)) - 1)) >> v)]),
                    (_ = A >>> 24),
                    (p = (A >>> 16) & 255),
                    (m = 65535 & A),
                    !(v + _ <= u);

                ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                (h >>>= v), (u -= v), (i.back += v);
              }
              if (
                ((h >>>= _), (u -= _), (i.back += _), (i.length = m), 0 === p)
              ) {
                i.mode = 16205;
                break;
              }
              if (32 & p) {
                (i.back = -1), (i.mode = Na);
                break;
              }
              if (64 & p) {
                (t.msg = "invalid literal/length code"), (i.mode = Ya);
                break;
              }
              (i.extra = 15 & p), (i.mode = 16201);
            case 16201:
              if (i.extra) {
                for (C = i.extra; u < C; ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                (i.length += h & ((1 << i.extra) - 1)),
                  (h >>>= i.extra),
                  (u -= i.extra),
                  (i.back += i.extra);
              }
              (i.was = i.length), (i.mode = 16202);
            case 16202:
              for (
                ;
                (A = i.distcode[h & ((1 << i.distbits) - 1)]),
                  (_ = A >>> 24),
                  (p = (A >>> 16) & 255),
                  (m = 65535 & A),
                  !(_ <= u);

              ) {
                if (0 === o) break t;
                o--, (h += r[s++] << u), (u += 8);
              }
              if (0 == (240 & p)) {
                for (
                  v = _, x = p, T = m;
                  (A = i.distcode[T + ((h & ((1 << (v + x)) - 1)) >> v)]),
                    (_ = A >>> 24),
                    (p = (A >>> 16) & 255),
                    (m = 65535 & A),
                    !(v + _ <= u);

                ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                (h >>>= v), (u -= v), (i.back += v);
              }
              if (((h >>>= _), (u -= _), (i.back += _), 64 & p)) {
                (t.msg = "invalid distance code"), (i.mode = Ya);
                break;
              }
              (i.offset = m), (i.extra = 15 & p), (i.mode = 16203);
            case 16203:
              if (i.extra) {
                for (C = i.extra; u < C; ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                (i.offset += h & ((1 << i.extra) - 1)),
                  (h >>>= i.extra),
                  (u -= i.extra),
                  (i.back += i.extra);
              }
              if (i.offset > i.dmax) {
                (t.msg = "invalid distance too far back"), (i.mode = Ya);
                break;
              }
              i.mode = 16204;
            case 16204:
              if (0 === l) break t;
              if (((d = f - l), i.offset > d)) {
                if (((d = i.offset - d), d > i.whave && i.sane)) {
                  (t.msg = "invalid distance too far back"), (i.mode = Ya);
                  break;
                }
                d > i.wnext
                  ? ((d -= i.wnext), (b = i.wsize - d))
                  : (b = i.wnext - d),
                  d > i.length && (d = i.length),
                  (g = i.window);
              } else (g = n), (b = a - i.offset), (d = i.length);
              d > l && (d = l), (l -= d), (i.length -= d);
              do {
                n[a++] = g[b++];
              } while (--d);
              0 === i.length && (i.mode = Va);
              break;
            case 16205:
              if (0 === l) break t;
              (n[a++] = i.length), l--, (i.mode = Va);
              break;
            case qa:
              if (i.wrap) {
                for (; u < 32; ) {
                  if (0 === o) break t;
                  o--, (h |= r[s++] << u), (u += 8);
                }
                if (
                  ((f -= l),
                  (t.total_out += f),
                  (i.total += f),
                  4 & i.wrap &&
                    f &&
                    (t.adler = i.check =
                      i.flags
                        ? Qn(i.check, n, f, a - f)
                        : Kn(i.check, n, f, a - f)),
                  (f = l),
                  4 & i.wrap && (i.flags ? h : Xa(h)) !== i.check)
                ) {
                  (t.msg = "incorrect data check"), (i.mode = Ya);
                  break;
                }
                (h = 0), (u = 0);
              }
              i.mode = 16207;
            case 16207:
              if (i.wrap && i.flags) {
                for (; u < 32; ) {
                  if (0 === o) break t;
                  o--, (h += r[s++] << u), (u += 8);
                }
                if (4 & i.wrap && h !== (4294967295 & i.total)) {
                  (t.msg = "incorrect length check"), (i.mode = Ya);
                  break;
                }
                (h = 0), (u = 0);
              }
              i.mode = 16208;
            case 16208:
              y = Ra;
              break t;
            case Ya:
              y = Pa;
              break t;
            case 16210:
              return Oa;
            default:
              return Ua;
          }
        return (
          (t.next_out = a),
          (t.avail_out = l),
          (t.next_in = s),
          (t.avail_in = o),
          (i.hold = h),
          (i.bits = u),
          (i.wsize ||
            (f !== t.avail_out && i.mode < Ya && (i.mode < qa || e !== Sa))) &&
            so(t, t.output, t.next_out, f - t.avail_out),
          (c -= t.avail_in),
          (f -= t.avail_out),
          (t.total_in += c),
          (t.total_out += f),
          (i.total += f),
          4 & i.wrap &&
            f &&
            (t.adler = i.check =
              i.flags
                ? Qn(i.check, n, f, t.next_out - f)
                : Kn(i.check, n, f, t.next_out - f)),
          (t.data_type =
            i.bits +
            (i.last ? 64 : 0) +
            (i.mode === Na ? 128 : 0) +
            (i.mode === Wa || i.mode === ja ? 256 : 0)),
          ((0 === c && 0 === f) || e === Sa) && y === Fa && (y = za),
          y
        );
      },
      oo = {
        inflateReset: $a,
        inflateReset2: Qa,
        inflateResetKeep: Ka,
        inflateInit: (t) => to(t, 15),
        inflateInit2: to,
        inflate: ao,
        inflateEnd: (t) => {
          if (Ja(t)) return Ua;
          let e = t.state;
          return e.window && (e.window = null), (t.state = null), Fa;
        },
        inflateGetHeader: (t, e) => {
          if (Ja(t)) return Ua;
          const i = t.state;
          return 0 == (2 & i.wrap) ? Ua : ((i.head = e), (e.done = !1), Fa);
        },
        inflateSetDictionary: (t, e) => {
          const i = e.length;
          let r, n, s;
          return Ja(t)
            ? Ua
            : ((r = t.state),
              0 !== r.wrap && r.mode !== Ha
                ? Ua
                : r.mode === Ha &&
                  ((n = 1), (n = Kn(n, e, i, 0)), n !== r.check)
                ? Pa
                : ((s = so(t, e, i, i)),
                  s ? ((r.mode = 16210), Oa) : ((r.havedict = 1), Fa)));
        },
        inflateInfo: "pako inflate (from Nodeca project)",
      };
    var lo = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    };
    const ho = Object.prototype.toString,
      {
        Z_NO_FLUSH: uo,
        Z_FINISH: co,
        Z_OK: fo,
        Z_STREAM_END: bo,
        Z_NEED_DICT: go,
        Z_STREAM_ERROR: _o,
        Z_DATA_ERROR: po,
        Z_MEM_ERROR: mo,
      } = es;
    function vo(t) {
      this.options = ia.assign(
        { chunkSize: 65536, windowBits: 15, to: "" },
        t || {}
      );
      const e = this.options;
      e.raw &&
        e.windowBits >= 0 &&
        e.windowBits < 16 &&
        ((e.windowBits = -e.windowBits),
        0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) ||
          (t && t.windowBits) ||
          (e.windowBits += 32),
        e.windowBits > 15 &&
          e.windowBits < 48 &&
          0 == (15 & e.windowBits) &&
          (e.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new aa()),
        (this.strm.avail_out = 0);
      let i = oo.inflateInit2(this.strm, e.windowBits);
      if (i !== fo) throw new Error(ts[i]);
      if (
        ((this.header = new lo()),
        oo.inflateGetHeader(this.strm, this.header),
        e.dictionary &&
          ("string" == typeof e.dictionary
            ? (e.dictionary = sa.string2buf(e.dictionary))
            : "[object ArrayBuffer]" === ho.call(e.dictionary) &&
              (e.dictionary = new Uint8Array(e.dictionary)),
          e.raw &&
            ((i = oo.inflateSetDictionary(this.strm, e.dictionary)), i !== fo)))
      )
        throw new Error(ts[i]);
    }
    function xo(t, e) {
      const i = new vo(e);
      if ((i.push(t), i.err)) throw i.msg || ts[i.err];
      return i.result;
    }
    (vo.prototype.push = function (t, e) {
      const i = this.strm,
        r = this.options.chunkSize,
        n = this.options.dictionary;
      let s, a, o;
      if (this.ended) return !1;
      for (
        a = e === ~~e ? e : !0 === e ? co : uo,
          "[object ArrayBuffer]" === ho.call(t)
            ? (i.input = new Uint8Array(t))
            : (i.input = t),
          i.next_in = 0,
          i.avail_in = i.input.length;
        ;

      ) {
        for (
          0 === i.avail_out &&
            ((i.output = new Uint8Array(r)),
            (i.next_out = 0),
            (i.avail_out = r)),
            s = oo.inflate(i, a),
            s === go &&
              n &&
              ((s = oo.inflateSetDictionary(i, n)),
              s === fo ? (s = oo.inflate(i, a)) : s === po && (s = go));
          i.avail_in > 0 && s === bo && i.state.wrap > 0 && 0 !== t[i.next_in];

        )
          oo.inflateReset(i), (s = oo.inflate(i, a));
        switch (s) {
          case _o:
          case po:
          case go:
          case mo:
            return this.onEnd(s), (this.ended = !0), !1;
        }
        if (((o = i.avail_out), i.next_out && (0 === i.avail_out || s === bo)))
          if ("string" === this.options.to) {
            let t = sa.utf8border(i.output, i.next_out),
              e = i.next_out - t,
              n = sa.buf2string(i.output, t);
            (i.next_out = e),
              (i.avail_out = r - e),
              e && i.output.set(i.output.subarray(t, t + e), 0),
              this.onData(n);
          } else
            this.onData(
              i.output.length === i.next_out
                ? i.output
                : i.output.subarray(0, i.next_out)
            );
        if (s !== fo || 0 !== o) {
          if (s === bo)
            return (
              (s = oo.inflateEnd(this.strm)),
              this.onEnd(s),
              (this.ended = !0),
              !0
            );
          if (0 === i.avail_in) break;
        }
      }
      return !0;
    }),
      (vo.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (vo.prototype.onEnd = function (t) {
        t === fo &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = ia.flattenChunks(this.chunks))),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg);
      });
    var To = {
      Inflate: vo,
      inflate: xo,
      inflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), xo(t, e);
      },
      ungzip: xo,
      constants: es,
    };
    const { Deflate: wo, deflate: yo, deflateRaw: Ao, gzip: Eo } = va,
      { Inflate: Mo, inflate: Co, inflateRaw: So, ungzip: ko } = To;
    var Do = Co;
    const Fo = class {
      constructor(t) {
        (this.a = t.getUint16()), (this.b = t.getUint16());
      }
      static c(t) {
        (t.E = !1),
          t.o.ax && t.g < t.o.ax.length
            ? (t.r = t.o.ax[t.g])
            : (t.r = { a: 0, b: 0 }),
          (t.x = 0 != (1 & t.r.a)),
          (t.y = 0 == (4 & t.r.a)),
          (t.z = 0 != (16 & t.r.a));
      }
    };
    class Ro {
      static a(t) {
        const e = 32767 & t;
        return e < Io.length
          ? Io[e]
          : (WH.debug("Unknown shader effect:", e),
            ["PS_Combiners_Opaque", "VS_Diffuse_T1"]);
      }
      static b(t, e) {
        var i = "";
        if (-1e3 == t && 3 == e) return "Skin";
        if (32768 & t) return Ro.a(t)[0];
        if (1 == e) i = 112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque";
        else {
          i =
            (112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque") +
            "_" +
            (112 & t
              ? [
                  "Opaque",
                  "Mod",
                  "Mod",
                  "Add",
                  "Mod2x",
                  "Mod",
                  "Mod2xNA",
                  "AddNA",
                ]
              : [
                  "Opaque",
                  "Mod",
                  "Mod",
                  "AddAlpha",
                  "Mod2x",
                  "Mod",
                  "Mod2xNA",
                  "AddAlpha",
                ])[7 & t];
        }
        return i;
      }
      static c(t, e) {
        var i = "";
        if (-1e3 == t && 3 == e) i = "T1_T1_T1";
        else {
          if (32768 & t) return Ro.a(t)[1];
          i =
            1 == e
              ? 128 & t
                ? "Env"
                : 16384 & t
                ? "T2"
                : "T1"
              : 128 & t
              ? 8 & t
                ? "Env_Env"
                : "Env_T1"
              : 8 & t
              ? "T1_Env"
              : 16384 & t
              ? "T1_T2"
              : "T1_T1";
        }
        return "VS_Diffuse_" + i;
      }
      static d(t, e, i) {
        var r = Ro.b(t, e),
          n = Ro.c(t, e),
          s = "Wow." + n + "_" + r;
        if (hi._GetProgram(s)) return { name: s };
        var a = {
          shaders: [Ro.g(n), Ro.h(n, r, i)],
          attributes: {
            position: "aPosition",
            normal: "aNormal",
            texcoord0: "aTexCoord0",
            texcoord1: "aTexCoord1",
          },
        };
        return hi.RegisterProgram(s, a), { name: s };
      }
      static e(t) {
        var e = {},
          i = {
            texcoord1: function (t, e) {
              t.INPUT_TEXCOORD1 = "aTexCoord" + e;
            },
          };
        for (var r in t.options) {
          var n = t.options[r];
          i[r](e, n);
        }
        return { name: "Wow." + t.name, config: e };
      }
      static f(t) {
        var e = "";
        if (
          ((e +=
            "lTexCoord1 = (uTextureMatrix1 * vec4(vTexCoord1, 0, 1)).st;\n"),
          (e +=
            "lTexCoord2 = (uTextureMatrix2 * vec4(vTexCoord2, 0, 1)).st;\n"),
          "VS" === t.slice(0, 2))
        ) {
          var i = (t = t.slice(3)).split("_"),
            r = i[0];
          if ("Diffuse" === r || "Color" === r) {
            (e = ""), i.splice(0, 1);
            var n = {
                T1: ["uTextureMatrix1", "vTexCoord1"],
                T2: ["uTextureMatrix2", "vTexCoord2"],
                T3: ["", "aTexCoord2"],
                Env: ["", "texEnv"],
              },
              s = 1;
            for (var a in i)
              n[i[a]]
                ? (n[i[a]][0] && "texEnv" != n[i[a]][1]
                    ? (e +=
                        "lTexCoord" +
                        s +
                        " = (" +
                        n[i[a]][0] +
                        " * vec4(" +
                        n[i[a]][1] +
                        ", 0, 1)).st;\n")
                    : "texEnv" == n[i[a]][1]
                    ? (e += "lTexCoord" + s + " = texEnv;\n")
                    : (e +=
                        "lTexCoord" +
                        s +
                        " = (uTextureMatrix" +
                        s +
                        " * vec4(" +
                        n[i[a]][1] +
                        ", 0, 1)).st;\n"),
                  s++)
                : WH.debug("Missing vertex shader def?", t);
          }
        }
        return e;
      }
      static g(t) {
        return (
          "            attribute vec3 aPosition;\n            attribute vec3 aNormal;\n            attribute vec2 aTexCoord0;\n            attribute vec2 aTexCoord1;\n            attribute vec3 aColor;\n            \n            varying vec3 vPosition;\n            varying vec3 vNormal;\n            varying vec2 vTexCoord1;\n            varying vec2 vTexCoord2;\n            \n            uniform mat4 uModelMatrix;\n            uniform mat4 uPanningMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uInvTranspViewModelMat;\n            uniform mat4 uProjMatrix;\n            uniform vec3 uCameraPos;\n            \n            void main(void) {\n              vec4 pos = uViewMatrix * uModelMatrix * vec4(aPosition, 1);\n              vPosition = pos.rgb;\n              gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);\n              vTexCoord1 = aTexCoord0;\n              vTexCoord2 = aTexCoord1;\n              vNormal = normalize((uInvTranspViewModelMat * vec4(aNormal, 0.0)).xyz);            }",
          "            attribute vec3 aPosition;\n            attribute vec3 aNormal;\n            attribute vec2 aTexCoord0;\n            attribute vec2 aTexCoord1;\n            attribute vec3 aColor;\n            \n            varying vec3 vPosition;\n            varying vec3 vNormal;\n            varying vec2 vTexCoord1;\n            varying vec2 vTexCoord2;\n            \n            uniform mat4 uModelMatrix;\n            uniform mat4 uPanningMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uInvTranspViewModelMat;\n            uniform mat4 uProjMatrix;\n            uniform vec3 uCameraPos;\n            \n            void main(void) {\n              vec4 pos = uViewMatrix * uModelMatrix * vec4(aPosition, 1);\n              vPosition = pos.rgb;\n              gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);\n              vTexCoord1 = aTexCoord0;\n              vTexCoord2 = aTexCoord1;\n              vNormal = normalize((uInvTranspViewModelMat * vec4(aNormal, 0.0)).xyz);            }"
        );
      }
      static h(t, e, i) {
        var r = Uo[e];
        r ||
          (WH.debug("Missing pixel shader def", e),
          (r = Uo[(e = "PS_Combiners_Opaque_Mod")]));
        for (
          var n = "\t\t" + r.slice(1, r.length).join("\n\t\t"), s = 0;
          s < r[0];
          s++
        ) {
          var a = s + 1;
          n =
            "vec4 tex" +
            s +
            " = texture2D(uTexture" +
            a +
            ", lTexCoord" +
            a +
            ".st);\n" +
            n;
        }
        return (
          "            precision mediump float;            \n            varying vec3 vPosition;\n            varying vec3 vNormal;\n            varying vec2 vTexCoord1;\n            varying vec2 vTexCoord2;\n            varying vec2 vTexCoord3;\n            varying vec2 vTexCoord4;\n            \n            uniform bool uHasAlpha;\n            uniform bool uHasSpecEmiss;\n            uniform bool uHasEmissiveGlowing;\n            uniform int uBlendMode;\n            uniform bool uUnlit;\n            uniform vec4 uColor;\n            uniform vec4 uAmbientColor;\n            uniform vec4 uDiffuseColor;\n            uniform vec4 uPrimaryColor;\n            uniform vec4 uSecondaryColor;\n            uniform vec3 uLightDir1;\n            uniform vec3 uLightDir2;\n            uniform vec3 uLightDir3;\n            uniform mat4 uTextureMatrix1;\n            uniform mat4 uTextureMatrix2;\n            uniform mat4 uTextureMatrix3;\n            uniform mat4 uTextureMatrix4;\n            uniform sampler2D uTexture1;\n            uniform sampler2D uTexture2;\n            uniform sampler2D uTexture3;\n            uniform sampler2D uTexture4;\n            uniform sampler2D uAlpha;\n            uniform vec4 uTexSampleAlpha;\n            \n            vec2 sphereMap(vec3 vertex, vec3 normal)\n            {\n               vec3 normPos = (normalize(vertex.xyz));\n               vec3 reflection = reflect(normPos, normalize(normal));\n               reflection = vec3(reflection.x, reflection.y, reflection.z + 1.0);\n               vec2 texCoord = ((normalize(reflection).xy * 0.5) + vec2(0.5));\n               return texCoord;\n            }\n            void main(void) {\n            vec2 lTexCoord1 = vec2(0.0);            vec2 lTexCoord2 = vec2(0.0);            vec2 lTexCoord3 = vec2(0.0);            vec4 _output = vec4(1.0);\n            vec4 _input = uColor;\n            vec3 _specular = vec3(0.0);            vec2 texEnv = sphereMap(vPosition.xyz,normalize(vNormal.xyz));\n            " +
          this.f(t) +
          "\n            " +
          n +
          "\n            \n            if (uBlendMode == 13) {\n                _output.a = _output.a * _input.a;\n            } else if (uBlendMode == 1) {\n                if (_output.a < (128.0/255.0))\n                    discard;\n                _output.a = _input.a;\n            } else if (uBlendMode == 0) {\n                _output.a = _input.a;\n            } else {\n                _output.a = _output.a * _input.a;\n            }\n            // if (uBlendMode > 1) {\n            //     if (_output.a < (1.0/255.0)) {\n            //         discard;\n            //     }\n            // }\n            if (!uUnlit) {                vec4 litColor = uAmbientColor;                vec3 normal = normalize(vNormal);                                float dp = max(0.0, dot(normal, uLightDir1));                litColor += uPrimaryColor * dp;                                dp = max(0.0, dot(normal, uLightDir2));                litColor += uSecondaryColor * dp;                                dp = max(0.0, dot(normal, uLightDir3));                litColor += uSecondaryColor * dp;                                litColor = clamp(litColor, vec4(0,0,0,0), vec4(1,1,1,1));                _output *= (litColor * uDiffuseColor);            }            _output += vec4(_specular, 0.0);\n            gl_FragColor = _output;\n            }"
        );
      }
    }
    const Io = [
        [
          "PS_Combiners_Opaque_Mod2xNA_Alpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_AddAlpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_AddAlpha_Alpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Mod2xNA_Alpha_Add",
          "VS_Diffuse_T1_Env_T1",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        [
          "PS_Combiners_Mod_AddAlpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_AddAlpha",
          "VS_Diffuse_T1_T1",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Mod_AddAlpha",
          "VS_Diffuse_T1_T1",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Mod_AddAlpha_Alpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Alpha_Alpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Mod2xNA_Alpha_3s",
          "VS_Diffuse_T1_Env_T1",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        [
          "PS_Combiners_Opaque_AddAlpha_Wgt",
          "VS_Diffuse_T1_T1",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Mod_Add_Alpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_ModNA_Alpha",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Mod_AddAlpha_Wgt",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Mod_AddAlpha_Wgt",
          "VS_Diffuse_T1_T1",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_AddAlpha_Wgt",
          "VS_Diffuse_T1_T2",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Mod_Add_Wgt",
          "VS_Diffuse_T1_Env",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha",
          "VS_Diffuse_T1_Env_T1",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        ["PS_Combiners_Mod_Dual_Crossfade", "VS_Diffuse_T1", "HS_T1", "DS_T1"],
        ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_T1", "HS_T1", "DS_T1"],
        [
          "PS_Combiners_Opaque_Mod2xNA_Alpha_Alpha",
          "VS_Diffuse_T1_Env_T2",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        [
          "PS_Combiners_Mod_Mod",
          "VS_Diffuse_EdgeFade_T1_T2",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Mod_Masked_Dual_Crossfade",
          "VS_Diffuse_T1_T2",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Alpha",
          "VS_Diffuse_T1_T1",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        [
          "PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha",
          "VS_Diffuse_T1_Env_T2",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_Env", "HS_T1", "DS_T1"],
        ["PS_Guild", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"],
        ["PS_Guild_NoBorder", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2_T3"],
        ["PS_Guild_Opaque", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"],
        ["PS_Illum", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"],
        [
          "PS_Combiners_Mod_Mod_Mod_Const",
          "VS_Diffuse_T1_T2_T3",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        [
          "PS_Combiners_Mod_Mod_Mod_Const",
          "VS_Color_T1_T2_T3",
          "HS_T1_T2_T3",
          "DS_T1_T2_T3",
        ],
        ["PS_Combiners_Opaque", "VS_Diffuse_T1", "HS_T1", "DS_T1"],
        [
          "PS_Combiners_Mod_Mod2x",
          "VS_Diffuse_EdgeFade_T1_T2",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
        ["PS_Combiners_Mod", "VS_Diffuse_EdgeFade_T1", "HS_T1_T2", "DS_T1_T2"],
        [
          "PS_Combiners_Mod_Mod_Depth",
          "VS_Diffuse_EdgeFade_T1_T2",
          "HS_T1_T2",
          "DS_T1_T2",
        ],
      ],
      Uo = {
        PS_Combiners_Add: [
          1,
          "_output.rgb = _input.rgb + tex0.rgb;",
          "_output.a = _input.a + tex0.a;",
        ],
        PS_Combiners_Decal: [
          1,
          "_output.rgb = mix(_input.rgb, tex0.rgb, _input.a);",
          "_output.a = _input.a;",
        ],
        PS_Combiners_Fade: [
          1,
          "_output.rgb = mix(tex0.rgb, _input.rgb, _input.a);",
          "_output.a = _input.a;",
        ],
        PS_Combiners_Mod: [
          1,
          "_output.rgb = _input.rgb * tex0.rgb;",
          "_output.a = tex0.a;",
        ],
        PS_Combiners_Mod2x: [
          1,
          "_output.rgb = _input.rgb * tex0.rgb * 2.0;",
          "_output.a = tex0.a * 2.0;",
        ],
        PS_Combiners_Opaque: [
          1,
          "_output.rgb = _input.rgb * tex0.rgb;",
          "_output.a = 1.0;",
        ],
        PS_Combiners_Add_Add: [
          2,
          "_output.rgb = (_input.rgb + tex0.rgb) + tex1.rgb;",
          "_output.a = (_input.a + tex0.a) + tex1.a;",
        ],
        PS_Combiners_Add_Mod: [
          2,
          "_output.rgb = (_input.rgb + tex0.rgb) * tex1.rgb;",
          "_output.a = (_input.a + tex0.a) * tex1.a;",
        ],
        PS_Combiners_Add_Mod2x: [
          2,
          "_output.rgb = (_input.rgb + tex0.rgb) * tex1.rgb * 2.0;",
          "_output.a = (_input.a + tex0.a) * tex1.a * 2.0;",
        ],
        PS_Combiners_Add_Opaque: [
          2,
          "_output.rgb = (_input.rgb + tex0.rgb) * tex1.rgb;",
          "_output.a = _input.a + tex0.a;",
        ],
        PS_Combiners_Mod_AddNA: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_output.a = tex0.a;",
          "_specular = tex1.rgb;",
        ],
        PS_Combiners_Mod_Mod: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;",
          "_output.a = tex0.a * tex1.a;",
        ],
        PS_Combiners_Mod_Mod2x: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;",
          "_output.a = tex0.a * tex1.a * 2.0;",
        ],
        PS_Combiners_Mod_Add: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_output.a = tex0.a + tex1.a;",
          "_specular = tex1.rgb;",
        ],
        PS_Combiners_Mod_Mod2xNA: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;",
          "_output.a = tex0.a;",
        ],
        PS_Combiners_Mod_Opaque: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;",
          "_output.a = tex0.a;",
        ],
        PS_Combiners_Mod2x_Add: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * 2.0 + tex1.rgb;",
          "_output.a = (tex0.a) * 2.0 + tex1.a;",
        ],
        PS_Combiners_Mod2x_Mod2x: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 4.0;",
          "_output.a = (tex0.a) * tex1.a * 4.0;",
        ],
        PS_Combiners_Mod2x_Opaque: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;",
          "_output.a = tex0.a * 2.0;",
        ],
        PS_Combiners_Opaque_Add: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) + tex1.rgb;",
          "_output.a = _input.a + tex1.a;",
        ],
        PS_Combiners_Opaque_AddAlpha: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_specular = (tex1.rgb * tex1.a);",
        ],
        PS_Combiners_Opaque_AddAlpha_Wgt: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_specular = (tex1.rgb * tex1.a) * uTexSampleAlpha.g;",
        ],
        PS_Combiners_Opaque_AddAlpha_Alpha: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_specular = (tex1.rgb * tex1.a * (1.0 - tex0.a));",
        ],
        PS_Combiners_Opaque_AddNA: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) + tex1.rgb;",
          "_output.a = _input.a;",
        ],
        PS_Combiners_Opaque_Mod: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;",
          "_output.a = tex1.a;",
        ],
        PS_Combiners_Opaque_Mod2x: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;",
          "_output.a = tex1.a * 2.0;",
        ],
        PS_Combiners_Opaque_Mod2xNA: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;",
          "",
        ],
        PS_Combiners_Opaque_Mod2xNA_Alpha: [
          2,
          "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex0.rgb, vec3(tex0.a));",
          "",
        ],
        PS_Combiners_Opaque_Opaque: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;",
          "",
        ],
        PS_Combiners_Opaque_Mod2xNA_Alpha_Add: [
          3,
          "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex0.rgb, vec3(tex0.a));",
          "_specular = tex2.rgb * tex2.a * uTexSampleAlpha.b;",
        ],
        PS_Combiners_Mod_Mod_Mod_Const: [
          3,
          "_output.rgb = _input.rgb * (tex0 * tex1 * tex2).rgb;",
          "_output.a = (tex0 * tex1 * tex2).a;",
        ],
        PS_Combiners_Mod_AddAlpha: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_output.a = tex0.a;",
          "_specular = tex1.rgb * tex1.a;",
        ],
        PS_Combiners_Mod_AddAlpha_Wgt: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb);",
          "_output.a = tex0.a;",
          "_specular = tex1.rgb * tex1.a * uTexSampleAlpha.g;",
        ],
        PS_Combiners_Mod_AddAlpha_Alpha: [
          2,
          "_output.rgb = _input.rgb * tex0.rgb;",
          "_output.a = (tex0.a + tex1.a * (0.3 * tex1.r + 0.59 * tex1.g + 0.11 * tex1.b));",
          "_specular = tex1.rgb * tex1.a * (1.0 - tex0.a);",
        ],
        PS_Combiners_Opaque_Mod_Add_Wgt: [
          2,
          "_output.rgb = _input.rgb * mix(tex0.rgb, tex1.rgb, vec3(tex1.a));",
          "_specular = (tex0.rgb * tex0.a) * uTexSampleAlpha.r;",
        ],
        PS_Guild: [
          3,
          "_output.rgb = _input.rgb * mix(tex0.rgb * mix(vec3(1.0, 1.0, 1.0), tex1.rgb * vec3(1.0, 1.0, 1.0), vec3(tex1.a)), tex2.rgb * vec3(1.0, 1.0, 1.0), vec3(tex2.a));",
          "_output.a = tex0.a;",
        ],
        PS_Guild_Opaque: [
          3,
          "_output.rgb = _input.rgb * mix(tex0.rgb * mix(vec3(1.0, 1.0, 1.0), tex1.rgb * vec3(1.0, 1.0, 1.0), vec3(tex1.a)), tex2.rgb * vec3(1.0, 1.0, 1.0), vec3(tex2.a));",
          "",
        ],
        PS_Guild_NoBorder: [
          2,
          "_output.rgb = _input.rgb * tex0.rgb * mix(vec3(1.0, 1.0, 1.0), tex1.rgb * vec3(1.0, 1.0, 1.0), vec3(tex1.a));",
          "_output.a = tex0.a;",
        ],
        PS_Combiners_Opaque_Alpha_Alpha: [
          2,
          "_output.rgb = _input.rgb * mix(mix(tex0.rgb, tex1.rgb, vec3(tex1.a)), tex0.rgb, vec3(tex0.a));",
          "",
        ],
        PS_Combiners_Opaque_Mod2xNA_Alpha_3s: [
          3,
          "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex2.rgb, vec3(tex2.a));",
        ],
        PS_Combiners_Mod_Add_Alpha: [
          2,
          "_output.rgb = _input.rgb * tex0.rgb;",
          "_output.a = (tex0.a + tex1.a);",
          "_specular = tex1.rgb * (1.0 - tex0.a);",
        ],
        PS_Combiners_Opaque_ModNA_Alpha: [
          2,
          "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb, tex0.rgb, vec3(tex0.a));",
          "",
        ],
        PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha: [
          3,
          "float glowOpacity = clamp((tex2.a * vec4(1.0, 1.0, 1.0, 1.0).z), 0.0, 1.0); _output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.000000, tex0.rgb, vec3(tex0.a)) * (1.0 - glowOpacity);",
          "_specular = tex2.rgb * glowOpacity;",
        ],
        PS_Combiners_Opaque_Mod2xNA_Alpha_Alpha: [
          3,
          "_output.rgb = _input.rgb * mix(mix(tex0.rgb * tex1.rgb * 2.000000, tex2.rgb, vec3(tex2.a)), tex0.rgb, vec3(tex0.a));",
          "",
        ],
        PS_Combiners_Mod_Depth: [
          1,
          "_output.rgb = _input.rgb * tex0.rgb;",
          "_output.a = tex0.a;",
        ],
        PS_Combiners_Opaque_Alpha: [
          2,
          "_output.rgb = _input.rgb * mix(tex0.rgb, tex1.rgb, vec3(tex1.a));",
          "",
        ],
        Skin: [
          3,
          "//Fresnel Rim\r\nif (uHasSpecEmiss) {\r\n    vec3 emissiveColor = tex2.rgb;\r\n    vec3 emissiveTerm = tex2.rgb;\r\n    if (uHasEmissiveGlowing) {\r\n        vec3 eyeVec_120 = vPosition.xyz;\r\n        vec3 t121 = -(eyeVec_120);\r\n        vec2 term_126 = vec2(dot(t121, vNormal), dot(normalize(t121), (vNormal * vec3(0.0500000007, 0.0500000007, 1.0))));\r\n        vec2 invTerm_128 = (vec2(1.0) - clamp(term_126, 0.0, 1.0));\r\n        vec2 f_129 = (invTerm_128 * invTerm_128);\r\n        float fresnel_rim_133 = pow((f_129.x + f_129.y), 0.600000024);\r\n        vec3 t136 = (tex2.rgb /*+ ((vec3(0.0500000007, 0.0, 0.400000006) * 1.0) * fresnel_rim_133)*/);\r\n        emissiveColor = vec3(t136.r, tex2.g, t136.b);\r\n\r\n        float t267 = dot(normalize(vNormal),  normalize(-(vPosition.xyz)));\r\n        emissiveTerm = mix(vec3(0.0), 2.0*emissiveColor, vec3(pow(clamp(t267, 0.0, 1.0), (( 128.0 * (tex2.a)) + 9.99999975e-006))));\r\n    }\r\n\r\n    _output.rgb = _input.rgb * tex0.rgb + tex1.rgb + emissiveTerm.rgb;\r\n} else {\r\n    _output.rgb = _input.rgb * tex0.rgb;\r\n}\r\n_output.a = tex0.a; //",
        ],
        PS_Combiners_Mod_Dual_Crossfade: [
          3,
          "_output.rgb = _input.rgb * mix(mix(tex0, texture2D(uTexture2,vTexCoord1), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,vTexCoord1), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).rgb;",
          "_output.a = mix(mix(tex0, texture2D(uTexture2,vTexCoord1), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,vTexCoord1), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).a;",
        ],
        PS_Combiners_Mod_Masked_Dual_Crossfade: [
          4,
          "_output.rgb = _input.rgb * mix(mix(tex0, texture2D(uTexture2,texCoord), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,texCoord), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).rgb;",
          "_output.a = mix(mix(tex0, texture2D(uTexture2,texCoord), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,texCoord), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).a * texture(uTexture4,texCoord2).a;",
        ],
        PS_Combiners_Mod_Mod_Depth: [
          2,
          "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;",
          "_output.a = tex0.a * tex1.a;",
        ],
      },
      Po = Ro;
    const Oo = class {
        constructor() {
          (this.h = !1), (this.i = !0);
        }
      },
      zo = [0, 1, 2, 10, 3, 4, 5, 13];
    const Bo = class {
      constructor(t) {
        (this.E = !1),
          (this.F = !1),
          (this.a = t.getUint8()),
          (this.b = t.getInt8()),
          (this.c = t.getUint16()),
          (this.d = t.getUint16()),
          (this.e = t.getUint16()),
          (this.f = t.getInt16()),
          (this.g = t.getUint16()),
          (this.h = t.getUint16()),
          (this.i = t.getUint16()),
          (this.j = t.getInt16()),
          (this.k = t.getUint16()),
          (this.l = t.getInt16()),
          (this.m = t.getInt16()),
          (this.n = !0),
          (this.o = null),
          (this.p = null),
          (this.q = 0),
          (this.r = null),
          (this.s = []),
          (this.t = []),
          (this.u = new Array()),
          (this.v = null),
          (this.w = []),
          (this.x = !1),
          (this.y = !1),
          (this.z = !1),
          (this.A = br()),
          (this.B = di()),
          (this.C = Pr());
      }
      K(t) {
        (this.o = t), (this.p = t.au[this.d]), (this.q = this.p.a), Fo.c(this);
        let e = this.o.az[this.j];
        1 == this.i &&
          e > -1 &&
          1 == this.o.ay[e].type &&
          ((this.c = -1e3), (this.i = 3));
        const i = Po.d(this.c, this.i, this.r);
        this.H = i;
        for (let e = 0; e < this.i; e++) {
          if (this.j > -1 && this.j < t.az.length) {
            let i = t.az[this.j + e];
            i > -1 && i < t.ay.length && this.s.splice(e, 0, t.ay[i]);
          }
          if (this.m > -1 && this.m < t.aB.length) {
            let i = t.aB[this.m + e];
            i > -1 && t.aA && i < t.aA.length
              ? this.t.splice(e, 0, t.aA[i])
              : this.t.splice(e, 0, null);
          }
          if (this.l > -1 && this.l < t.aH.length) {
            let i = t.aH[this.l + e];
            i > -1 && i < t.aG.length
              ? this.w.splice(e, 0, t.aG[i])
              : this.w.splice(e, 0, null);
          }
        }
        this.u = new Array(this.t.length);
        for (let t = 0; t < this.u.length; t++) this.u[t] = zi();
        this.E && ((this.s = this.s.reverse()), (this.t = this.t.reverse())),
          t.aF &&
            this.f > -1 &&
            this.f < t.aF.length &&
            (this.v = t.aF[this.f]),
          (this.D = this.r.b > 1);
      }
      L() {
        const t = this.o.aT.context,
          e = hi.GetProgram(t, this.H.name, this.H.config);
        (this.G = e), (this.H = e.program), (this.I = e.uniforms);
      }
      M() {
        let t = _r(this.p.i[0], this.p.i[1], this.p.i[2], 1),
          e = this.o.ar[this.p.g].m,
          i = zi();
        ji(i, i, this.o.aX.uViewMatrix),
          ji(i, i, this.o.W),
          ji(i, i, e),
          yr(t, t, i),
          (t[3] = 0);
        let r = Ar(t);
        if ((3 & this.a) > 0) {
          let e = br();
          r > 0 ? xr(e, t, 1 / r) : pr(e, t),
            xr(e, e, gi(_i(i[8], i[9], i[10])) * this.p.j),
            1 & this.a ? vr(e, t, e) : mr(e, t, e),
            (r = Tr(e));
        }
        return r;
      }
      N(t) {
        const e = this.o,
          i = this.o.aT.context,
          r = this.o.T;
        if ((this.G || this.L(), !this.G.program)) return;
        if (
          (this.J ||
            ((this.J = new Oo()),
            (this.J.a = this.G),
            (this.J.b = Object.assign({}, e.aX))),
          (this.J.c = e.aV),
          (this.J.d = e.aW),
          (this.J.b = Object.assign({}, e.aX)),
          (this.A[0] = this.A[1] = this.A[2] = this.A[3] = 1),
          this.v && this.v.g(r, this.o.aY, this.A),
          this.w[0] && (this.A[3] *= this.w[0].d(r, this.o.aY)),
          this.A[3] <= 0.001)
        )
          return;
        let n = this.r.b;
        const s = [1, 1, 1];
        for (let t = 0; t < this.w.length; t++) {
          const e = this.w[t];
          e && (s[t] = e.d(r, this.o.aY));
        }
        (this.J.b.uColor = this.A),
          (this.J.b.uTexSampleAlpha = _r(s[0], s[1], s[2], 1)),
          (this.J.b.uBlendMode = n),
          (this.J.b.uHasSpecEmiss = e.aL[1] && e.aL[1].i),
          (this.J.b.uHasEmissiveGlowing = 27 == e.o || 30 == e.o),
          (this.J.e = zo[n]),
          (this.J.i = !this.o.bZ),
          (this.J.b.uUnlit = this.x ? 1 : 0),
          (this.J.n = this.M()),
          (this.J.m = this.b),
          (this.J.o = this.h);
        const a = this.P();
        let o = !0;
        for (const t in a) {
          const e = a[t],
            i = e.a && e.a.d;
          (o = o && (null == e.a || null != i)), i && (this.J.b[e.c] = i);
        }
        o && !this.F && (this.F = !0),
          this.t.forEach((t, e) => {
            if (!this.o.U && (Hi(this.u[e]), this.t[e])) {
              let t = !1,
                i = !1;
              this.t[e].a && this.t[e].a.c(r.a.a)
                ? ((this.B = this.t[e].a.d(r, this.o.aY)), (i = !0))
                : mi(this.B, 0, 0, 0),
                this.t[e].b && this.t[e].b.c(r.a.a)
                  ? ((this.C = this.t[e].b.d(r, this.o.aY)), (t = !0))
                  : Vr(this.C, 0, 0, 0, 1);
              let n,
                s = !1;
              if (
                (this.t[e].c &&
                  this.t[e].c.c(r.a.a) &&
                  ((n = this.t[e].c.d(r, this.o.aY)), (s = !0)),
                Hi(this.u[e]),
                Wi(this.u[e], this.u[e], _i(0.5, 0.5, 0)),
                s && Vi(this.u[e], this.u[e], n),
                t)
              ) {
                let t = zi();
                Ji(t, this.C, [0, 0, 0]), ji(this.u[e], this.u[e], t);
              }
              i && Wi(this.u[e], this.u[e], this.B),
                Wi(this.u[e], this.u[e], _i(-0.5, -0.5, 0));
            }
            this.J.b["uTextureMatrix" + (e + 1).toString()] = this.u[e];
          }),
          (this.J.h = this.y),
          (this.J.f = !this.z),
          (this.J.j = i.TRIANGLES),
          (this.J.l = 2 * this.p.e),
          (this.J.k = this.p.f),
          t.push(this.J);
      }
      O() {
        return this.s;
      }
      P() {
        let t = 0;
        const e = [];
        this.s.forEach((i, r) => {
          let n = null;
          if (this.s[r]) {
            if (-1e3 == this.c) {
              const t = this.o.aL[1];
              if (t) n = { d: t.m(r) };
              else if (this.o.w) {
                const t = this.o.w.aL[1];
                t && (n = { d: t.m(r) });
              }
            } else
              this.o.aM && 1 == this.s[r].type
                ? (n = this.o.aM.a)
                : this.o.aL[this.s[r].type] && this.o.aL[this.s[r].type].a
                ? (n = { d: this.o.aL[this.s[r].type].a })
                : this.o.w &&
                  this.o.w.aL[this.s[r].type] &&
                  this.o.w.aL[this.s[r].type].a
                ? (n = { d: this.o.w.aL[this.s[r].type].a })
                : this.s[r].f
                ? (n = this.s[r].f)
                : this.o.C[this.s[r].type]
                ? (n = this.o.C[this.s[r].type])
                : !this.s[r].e &&
                  this.j + t < this.o.ay.length &&
                  this.o.ay[this.j + t] &&
                  this.o.ay[this.j + t].f &&
                  (n = this.o.ay[this.j + t].f);
            n ||
              (this.s[r].g ||
                (WH.debug(
                  "can't find texture for material",
                  r,
                  "type",
                  this.s[r].type,
                  "index",
                  this.s[r].b
                ),
                (this.s[r].g = !0)),
              (n = { d: this.o.aT.greenPixelTexture }));
          }
          (e[r] = n), t++;
        });
        const i = {};
        for (let r = 0; r < t; r++)
          i["Texture" + (r + 1)] = {
            a: e[r],
            b: r,
            c: "uTexture" + (r + 1),
            d: "TEXTURE" + r,
          };
        return i;
      }
      get show() {
        return this.n;
      }
      set show(t) {
        this.n = t;
      }
      get meshId() {
        return this.q;
      }
      Q() {
        (this.o = null),
          (this.p = null),
          (this.r = null),
          (this.s = null),
          (this.t = null),
          (this.v = null),
          (this.w = null),
          (this.A = null),
          (this.u = null),
          (this.B = null),
          (this.C = null);
      }
    };
    const Lo = class {
      constructor(t, e) {
        if (((this.d = null), (this.e = !1), 0 == e))
          return void console.log("Texture file is 0");
        (this.b = t), (this.c = t.l.contentPath + "textures/" + e + ".png");
        !(function (t) {
          (t.a = new Image()),
            (t.a.crossOrigin = ""),
            (t.a.onload = function () {
              t.h();
            }),
            (t.a.onerror = function () {
              t.a = null;
            }),
            (t.a.src = t.c);
        })(this);
      }
      f() {
        return this.e;
      }
      g() {
        if (!this.b) return;
        const t = this.b.aT.context;
        this.d && t.deleteTexture(this.d), (this.d = null), (this.b = null);
      }
      h() {
        if (!this.b) return;
        const t = this.b.aT.context;
        function e(t) {
          return 0 == (t & (t - 1));
        }
        (this.d = t.createTexture()),
          t.bindTexture(t.TEXTURE_2D, this.d),
          t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            t.RGBA,
            t.RGBA,
            t.UNSIGNED_BYTE,
            this.a
          ),
          e(this.a.width) && e(this.a.height)
            ? t.generateMipmap(t.TEXTURE_2D)
            : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR));
        const i = this.b.aT.aniFilterExt;
        i &&
          t.texParameteri(
            t.TEXTURE_2D,
            i.TEXTURE_MAX_ANISOTROPY_EXT,
            this.b.aT.aniFilterMax
          ),
          (this.e = !0);
      }
    };
    const Ho = class {
      constructor(t, e, i) {
        (this.a = t),
          (this.b = e),
          (this.c = i.getInt32()),
          (this.d = i.getUint32()),
          (this.e = i.getUint32()),
          (this.f = null),
          (this.g = !1),
          this.i();
      }
      h() {
        (this.a = null), this.f && this.f.g(), (this.f = null);
      }
      i() {
        0 != this.e && (this.f = new Lo(this.a, this.e));
      }
      get type() {
        return this.c;
      }
    };
    const No = class {
      constructor(t) {
        (this.a = new an(t, Jr)),
          (this.b = new an(t, Kr)),
          (this.c = new an(t, Jr));
      }
      d() {
        var t = this;
        t.a && (t.a.e(), (t.a = null)),
          t.b && (t.b.e(), (t.b = null)),
          t.c && (t.c.e(), (t.c = null));
      }
    };
    const Go = class {
      constructor(t) {
        var e = this;
        (e.a = t.getInt32()),
          (e.b = t.getInt32()),
          (e.c = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (e.d = -1);
      }
      e() {
        this.c = null;
      }
    };
    const jo = class {
      constructor(t) {
        (this.a = new an(t, Jr)), (this.b = new an(t, $r));
      }
      c() {
        var t = this;
        t.a && t.a.e(), t.b && t.b.e();
      }
      d(t) {
        return !!this.a && this.a.c(t);
      }
      e(t) {
        return !!this.b && this.b.c(t);
      }
      f(t) {
        return this.d(t) || this.e(t);
      }
      g(t, e, i) {
        var r = this;
        i ? (i[0] = i[1] = i[2] = i[3] = 1) : (i = _r(1, 1, 1, 1));
        let n = _i(1, 1, 1);
        return (
          r.d(t.a.a) && r.a.d(t, e, n, n),
          r.e(t.a.a) && (i[3] = r.b.d(t, e, i[3]) / 32767),
          (i[0] = n[0]),
          (i[1] = n[1]),
          (i[2] = n[2]),
          i
        );
      }
    };
    const Wo = class {
      constructor(t) {
        this.a = new an(t, $r);
      }
      b() {
        this.a.e(), (this.a = null);
      }
      c(t) {
        return this.a.c(t);
      }
      d(t, e) {
        var i = 1;
        this.c(t.a.a) && (i = this.a.d(t, e, i) / 32767);
        return i > 1 ? (i = 1) : i < 0 && (i = 0), i;
      }
    };
    const Vo = class {
      constructor() {
        (this.a = 0),
          (this.b = 0),
          (this.c = -1),
          (this.d = null),
          (this.e = null),
          (this.f = null);
      }
    };
    class qo extends Vo {}
    const Yo = class {
      constructor(t, e) {
        (this.d = !1),
          (this.a = t),
          (this.b = e),
          (this.c = new Array(e.length));
      }
      e(t) {
        for (let e = 0; e < this.b.length; e++)
          this.c[e] && this.c[e].e && this.c[e].e.setAnimation(t);
      }
      f(t) {
        this.d = t;
      }
      g(t) {
        for (let e = 0; e < this.b.length; e++)
          switch (this.b[e].EffectType) {
            case 1:
              if (1 == this.b[e].ProcEffectType) {
                let t = this.b[e].Value[0];
                this.a.X = _r(
                  ((t >> 16) & 255) / 255,
                  ((t >> 8) & 255) / 255,
                  (255 & t) / 255,
                  this.a.X[3]
                );
              } else if (14 == this.b[e].ProcEffectType) {
                let t = Math.min(Math.max(this.b[e].Value[0], 0), 1);
                this.a.X[3] = t;
              } else if (22 == this.b[e].ProcEffectType) {
                let t = this.b[e].Value[3];
                this.a.X = _r(
                  ((t >> 16) & 255) / 255,
                  ((t >> 8) & 255) / 255,
                  (255 & t) / 255,
                  this.a.X[3]
                );
              }
              break;
            case 2:
              this.h(e, t);
          }
      }
      h(t, e) {
        if (!this.a) return;
        if (!this.a.d) return;
        if (!this.c[t]) {
          let e = this.b[t].AttachmentID;
          this.b[t].Positioner > -1 && (e = this.b[t].Positioner),
            e < 0 && (e = 19);
          let i = this.a.cb(e);
          if (
            ((this.c[t] = new qo()),
            (this.c[t].d = i),
            (this.c[t].c = i ? i.b : -1),
            0 == this.b[t].ModelType)
          ) {
            let e = {
              type: nr.PATH,
              id: this.b[t].Model,
              parent: this.a,
              shoulder: -1,
            };
            this.c[t].e = new kl(this.a.aT, this.a.l, e, 0, !1, !0, !1);
          } else if (1 == this.b[t].ModelType) {
            let e = this.a.o > 0 ? this.a.o : 1,
              i = -1 != this.a.p ? this.a.p : 0;
            (this.a.o = e),
              (this.a.p = i),
              (this.c[t].ba = new Jo(
                this.a,
                this.b[t].InvType,
                this.b[t].Model,
                e,
                i
              ));
          } else if (2 == this.b[t].ModelType) {
            let e = {
              type: nr.NPC,
              id: this.b[t].Model,
              parent: this.a,
              shoulder: -1,
            };
            this.c[t].e = new kl(this.a.aT, this.a.l, e, 0, !1, !0, !1);
          }
        }
        if (!(0 != this.b[t].ModelType || (this.c[t].e && this.c[t].e.d)))
          return;
        if (!(1 != this.b[t].ModelType || (this.c[t].ba && this.c[t].ba.n)))
          return;
        if (!(2 != this.b[t].ModelType || (this.c[t].e && this.c[t].e.d)))
          return;
        let i = zi();
        Xi(i, i, -this.b[t].Yaw),
          Yi(i, i, this.b[t].Pitch),
          qi(i, i, this.b[t].Roll),
          Vi(i, i, [this.b[t].Scale1, this.b[t].Scale1, this.b[t].Scale1]),
          Vi(i, i, [this.b[t].Scale2, this.b[t].Scale2, this.b[t].Scale2]);
        let r = zi();
        if (this.c[t].d) {
          let e = this.c[t].d.c;
          ji(r, r, this.a.ar[this.c[t].c].m), Wi(r, r, _i(e[0], e[1], e[2]));
        }
        if (
          (Wi(
            r,
            r,
            _i(this.b[t].Offset[0], -this.b[t].Offset[1], this.b[t].Offset[2])
          ),
          ji(r, r, i),
          0 == this.b[t].ModelType)
        ) {
          let i = this.c[t].e;
          i.setAnimPaused(this.d), i.bu(this.a.W, r, null, null), i.ce(e);
        } else if (1 == this.b[t].ModelType)
          for (let i = 0; i < this.c[t].ba.i.length; i++) {
            let n = this.c[t].ba.i[i].e;
            n.d &&
              (n.setAnimPaused(this.d), n.bu(this.a.W, r, null, null), n.ce(e));
          }
        else if (2 == this.b[t].ModelType) {
          let i = this.c[t].e;
          i.setAnimPaused(this.d), i.bu(this.a.W, r, null, null), i.ce(e);
        }
      }
    };
    const Xo = class {
      constructor(t, e, i) {
        var r = this;
        (r.a = t), (r.d = e), (r.b = []), (r.c = !1), (r.f = []), i && r.h(i);
      }
      g() {
        var t = this;
        if (((t.a = null), t.b)) {
          for (var e = 0; e < t.b.length; ++e) {
            var i = t.b[e];
            i && (i.e && i.e.bb(), (i.e = null), (i.d = null), (t.b[e] = null));
          }
          t.b = null;
        }
      }
      h(t) {
        var e = this;
        e.e = t;
        var i = e.a.l.contentPath + "meta/itemvisual/" + e.e + ".json";
        $.getJSON(i, function (t) {
          e.i(t);
        });
      }
      i(t) {
        var e = this;
        if (((e.b = new Array(7)), t.ItemEffects))
          for (let r = 0; r < t.ItemEffects.length; ++r) {
            let n = t.ItemEffects[r];
            if (-1 == n.SubClass || this.d == n.SubClass) {
              if (n.Model) {
                let t = null;
                n.Scale &&
                  1 != n.Scale &&
                  ((t = zi()), Vi(t, t, _i(n.Scale, n.Scale, n.Scale))),
                  (e.b[n.Slot - 1] = new Vo());
                var i = {
                  type: nr.PATH,
                  id: n.Model,
                  parent: e.a,
                  shoulder: -1,
                };
                (e.b[n.Slot - 1].e = new kl(e.a.aT, e.a.l, i, 0, !1, !0, !1)),
                  (e.b[n.Slot - 1].f = t);
              }
              n.kit && (this.a.F, this.a.F.push(new Yo(this.a, n.kit.effects)));
            }
          }
        for (var r = 0; r < e.b.length; ++r)
          if (t.Equipment[r] && null == e.b[r]) {
            e.b[r] = new Vo();
            i = {
              type: nr.PATH,
              id: t.Equipment[r],
              parent: e.a,
              shoulder: -1,
            };
            e.b[r].e = new kl(e.a.aT, e.a.l, i, r, !1, !0, !1);
          }
        (e.c = !0), e.a.bM();
      }
      j(t) {
        if (this.a.d) {
          for (var e = 0; e < this.f.length; e++) this.f[e].g(t);
          for (var i = 0; i < this.b.length; i++) {
            var r = this.b[i];
            if (r) {
              let e = _i(0, 0, 0);
              if ((i >= 5 || (r && r.d && (e = r.d.c)), -1 != r.c)) {
                let i = this.a.ar[r.c].m;
                r.e.bu(this.a.W, i, e, r.f), r.e.ce(t);
              }
            }
          }
        }
      }
    };
    class Zo {
      static a(t, e, i, r, n) {
        let s = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0,
        ];
        if (!e)
          return WH.debug("selectBestTexture:", "textures are null"), null;
        for (let t = 0; t < e.length; t++) {
          let a = e[t],
            o = a.Gender,
            l = a.Class,
            h = a.Race,
            u = a.ExtraData,
            c = 0;
          if (i > 1 || o != i) {
            if (o < 2) continue;
            c = 0;
          } else c = 2;
          let f = 1;
          if (r > 0 && l == r) f = 0;
          else if (l > 0) continue;
          let d = 1;
          if (n > 0 && h == n) d = 0;
          else if (h > 0) continue;
          s[u + 3 * (d + 2 * (c + f))] = a.FileDataId;
        }
        for (let t = 0; t < 2; t++)
          for (let e = 0; e < 2; e++)
            for (let i = 0; i < 2; i++) {
              let r = 3 * (t + 2 * (e + 2 * i));
              if (s[r] > 0) {
                let t;
                return (t = { a: s[r], b: s[r + 1], c: s[r + 2] }), t;
              }
            }
        if (t) {
          let s = t.bX(i, n, !0);
          if (s && 0 != s[0])
            return (n = s[0]), (i = s[1]), Zo.a(t, e, i, r, n);
        }
        return null;
      }
      static b(t, e, i, r, n, s) {
        let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let t = 0; t < e.length; t++) {
          let o = e[t],
            l = o.Gender,
            h = o.Class,
            u = o.Race,
            c = o.ExtraData,
            f = 0;
          if (r > 1 || l != r) {
            if (l < 2) continue;
            f = 0;
          } else f = 2;
          let d = 1;
          if (n > 0 && h == n) d = 0;
          else if (h > 0) continue;
          let b = 1;
          if (s > 0 && u == s) b = 0;
          else if (u > 0) continue;
          let g = 1;
          if (-1 == i || c != i) {
            if (-1 != c && -1 != i) continue;
          } else g = 0;
          a[g + 2 * (b + 2 * (f + d))] = o.FileDataId;
        }
        for (let t = 0; t < 2; t++)
          for (let e = 0; e < 2; e++)
            for (let i = 0; i < 2; i++)
              for (let r = 0; r < 2; r++) {
                let n = r + 2 * (t + 2 * (e + 2 * i));
                if (a[n]) return a[n];
              }
        if (t) {
          var o = t.bX(r, s, !1);
          if (o && 0 != o[0])
            return (s = o[0]), (r = o[1]), Zo.b(t, e, i, r, n, s);
        }
        return 0;
      }
    }
    const Jo = class {
      constructor(t, e, i, r, n) {
        (this.r = null),
          (this.s = []),
          WH.debug("Creating item", i),
          (this.a = t),
          (this.b = e),
          (this.t = i),
          (this.u = r),
          (this.v = n),
          (this.e = sr[e]),
          (this.f = ar[e]),
          (this.i = null),
          (this.j = null),
          (this.k = null),
          (this.l = null),
          (this.g = 0),
          (this.h = 0),
          (this.n = !1),
          (this.o = !1),
          (this.p = 0),
          (this.q = 3),
          (this.m = 0),
          i && this.z();
      }
      y() {
        var t = this;
        if (t.i) {
          for (let e = 0; e < t.i.length; ++e)
            t.i[e].e && t.i[e].e.bb(),
              (t.i[e].e = null),
              (t.i[e].d = null),
              (t.i[e] = null);
          t.i = null;
        }
        if (t.j) {
          for (let e = 0; e < t.j.length; ++e)
            t.j[e].texture && t.j[e].texture.g(),
              (t.j[e].texture = null),
              (t.j[e] = null);
          t.j = null;
        }
        if (((t.k = null), (t.l = null), t.s)) {
          for (let e = 0; e < t.s.length; e++) t.s[e].g();
          t.s = null;
        }
        (t.n = !1),
          t.r && (t.r.bb(), (t.r = null)),
          t.a && (t.a.bD(), (t.a = null)),
          WH.debug("Destroyed item", this.t);
      }
      z() {
        let t = this;
        WH.debug("Loading item", this.t);
        let e = "meta/item/";
        const i = this.b;
        (1 != i &&
          3 != i &&
          4 != i &&
          5 != i &&
          6 != i &&
          7 != i &&
          8 != i &&
          9 != i &&
          10 != i &&
          16 != i &&
          19 != i &&
          20 != i) ||
          (e = "meta/armor/" + i + "/");
        let r = t.a.l.contentPath + e + t.t + ".json";
        $.getJSON(r)
          .done(function (e) {
            t.A(e);
          })
          .fail(function (e, i, r) {
            let n = i + ", " + r;
            WH.debug("Error loading item metadata", t.t, n), (t.o = !0);
          });
      }
      A(t) {
        if (!this.a)
          return void WH.debug(
            "Item was destroyed before it was loaded",
            this.t
          );
        if (
          ((this.h = parseInt(t.Item.Flags)),
          (this.g = parseInt(t.Item.InventoryType)),
          (this.c = parseInt(t.Item.ItemClass)),
          (this.d = parseInt(t.Item.ItemSubClass)),
          t.ComponentTextures)
        ) {
          this.j = [];
          for (let e in t.ComponentTextures) {
            const i = parseInt(e),
              r = Zo.a(
                this.a,
                t.TextureFiles[t.ComponentTextures[e]],
                this.a.p,
                this.a.q,
                this.a.o
              );
            if (r) {
              let t;
              (t = { region: i, gender: this.a.p, file: r.a, texture: null }),
                12 != i
                  ? (t.texture = new Lo(this.a, r.a))
                  : 16 == this.b && (this.a.C[2] = new Lo(this.a, r.a)),
                this.j.push(t);
            }
          }
        }
        if (
          ((this.k = t.Item.GeosetGroup),
          (this.l = t.Item.AttachGeosetGroup),
          (this.m = t.Item.GeosetGroupOverride),
          1 == this.b)
        ) {
          0 == this.a.p
            ? (this.w = t.Item.HideGeosetMale)
            : (this.x = t.Item.HideGeosetFemale);
        }
        if (
          (3 == this.b
            ? (this.i = new Array(2))
            : lr[this.b] != nr.ARMOR && (this.i = new Array(1)),
          this.i)
        )
          for (let e = 0; e < this.i.length; ++e) {
            const i = {
                race: this.u,
                gender: this.v,
                bone: -1,
                attachment: null,
                model: null,
                scaleMat: null,
              },
              r = { type: lr[this.b], id: this.t, parent: this.a, shoulder: 0 };
            3 == this.b && (r.shoulder = e + 1),
              (i.e = new kl(this.a.aT, this.a.l, r, e, !1, !1, !0)),
              (i.e.o = this.u),
              (i.e.p = this.v),
              i.e.bY(t, r.type),
              (this.i[e] = i);
          }
        if ((6 == this.b || 16 == this.b) && t.ComponentModels) {
          let e = 0;
          if ((16 == this.b && (e = 1), t.ComponentModels[e])) {
            const i = {
                type: lr[this.b],
                id: this.t,
                parent: this.a,
                shoulder: 0,
              },
              r = new kl(this.a.aT, this.a.l, i, 0, !1, !1, !0);
            r.v = t;
            const n = {
              race: 0,
              gender: 0,
              bone: -1,
              attachment: null,
              model: null,
              scaleMat: null,
            };
            (n.e = r), (this.i = [n]);
            let s = 1,
              a = 0,
              o = 1;
            this.a && ((s = this.a.o), (a = this.a.p), (o = this.a.q));
            const l = t.ComponentModels[e],
              h = Zo.b(r, t.ModelFiles[l], -1, a, o, s);
            if (h) {
              r.bW(nr.PATH, h);
              const i = 0 == e ? t.Textures : t.Textures2;
              if (i) for (let t in i) 0 != i[t] && (r.C[+t] = new Lo(r, i[t]));
            }
          }
        }
        const e = this.b;
        if (
          (4 == e ||
            5 == e ||
            20 == e ||
            6 == e ||
            7 == e ||
            10 == e ||
            8 == e ||
            1 == e ||
            9 == e ||
            19 == e ||
            16 == e) &&
          t.ComponentModels
        ) {
          let i = 0;
          if (((1 != e && 6 != e) || (i = 1), t.ComponentModels[i])) {
            const r = t.ComponentModels[i];
            if (r && t.ModelFiles && t.ModelFiles[r]) {
              const n = {
                  type: lr[e],
                  id: this.t,
                  parent: this.a,
                  shoulder: 0,
                },
                s = new kl(this.a.aT, this.a.l, n, 0, !1, !1, !0);
              s.v = t;
              let a = 1,
                o = 0,
                l = 1;
              this.a && ((a = this.a.o), (o = this.a.p), (l = this.a.q));
              const h = Zo.b(s, t.ModelFiles[r], -1, o, l, a);
              if (h) {
                (this.r = s), s.bW(nr.PATH, h);
                const e = 0 == i ? t.Textures : t.Textures2;
                if (e)
                  for (let t in e) 0 != e[t] && (s.C[+t] = new Lo(s, e[t]));
              }
            }
          }
        }
        if ((7 == e && this.k[2] > 0 && (this.f += 2), 0 != this.p)) {
          const t = 2 == this.c ? this.d : -1;
          for (let e = 0; e < this.i.length; e++)
            this.s.push(new Xo(this.i[e].e, t, this.p));
        }
        this.a.bM(),
          (this.n = !0),
          WH.debug(
            "Loaded item:",
            "DisplayId",
            this.t,
            "InventoryType",
            this.g
          );
      }
      B(t) {
        for (let t = 0; t < this.s.length; t++) this.s[t].g();
        (this.s = []), (this.p = t);
      }
      C(t) {
        this.q = t;
      }
      D(t) {
        if (!this.i) return;
        if (this.a.d) {
          const t = this.a.bT(this.e, this);
          for (let e = 0; e < this.i.length; ++e)
            if (this.i[e] && t.length > e) {
              let i = this.a.aD[t[e]];
              if (
                ((this.i[e].c = i.b),
                (this.i[e].d = i),
                this.s[e] && this.s[e].b)
              ) {
                const t = this.i[e].e;
                for (let r = 0; r < this.s[e].b.length; r++)
                  if (t.aD && this.s[e].b[r]) {
                    if (r < 5) {
                      if (!t.aD[r]) continue;
                      i = t.aD[r];
                    } else i = t.cb(19);
                    (this.s[e].b[r].c = i.b), (this.s[e].b[r].d = i);
                  }
              }
            }
        }
        let e = zi(),
          i = di();
        for (let r = 0; r < this.i.length; ++r) {
          const n = this.i[r];
          if (n && n.e) {
            if (3 == this.b) {
              if (1 == n.e.a.shoulder && 0 == (1 & this.q)) continue;
              if (2 == n.e.a.shoulder && 0 == (2 & this.q)) continue;
            }
            if (n.c > -1 && n.c < this.a.ar.length) {
              this.s[r] && n.e.d && this.s[r].j(t);
              let s = !1,
                a = er[n.e.a.id];
              if (
                (Hi(e),
                a && (mi(i, 1, 1, -1), Vi(e, e, i), (s = !0)),
                (22 != this.b && 23 != this.b && 22 != this.e) ||
                  0 == (256 & this.h) ||
                  (mi(i, 1, -1, 1), Vi(e, e, i), (s = !0), (n.e.i = !0)),
                (n.e.bZ = s),
                5 == this.a.I &&
                  26 == this.b &&
                  2 == this.c &&
                  18 == this.d &&
                  (Hi(e), qi(e, e, -Math.PI / 2)),
                27 == this.b)
              ) {
                let t = n.e.v.Scale;
                mi(i, t, t, t), Vi(e, e, i);
              }
              n.e.bu(this.a.W, this.a.ar[n.c].m, n.d.c, e), n.e.cc(), n.e.ce(t);
            } else -1 == n.c && this.a.bJ(n.e, t);
          }
        }
      }
    };
    const Ko = class {
      constructor(t) {
        (this.c = t), (this.b = 267320826 ^ t);
        let e = new ArrayBuffer(4);
        this.a = new DataView(e);
      }
      d() {
        let t = this.b;
        return (t ^= t << 13), (t ^= t >> 17), (t ^= t << 5), (this.b = t), t;
      }
      e() {
        let t,
          e = this.d();
        return (
          this.a.setInt32(0, 1065353216 | (8388607 & e)),
          (t =
            2147483648 & e
              ? 2 - this.a.getFloat32(0)
              : this.a.getFloat32(0) - 2),
          t
        );
      }
      f() {
        let t = this.d();
        return (
          this.a.setInt32(0, 1065353216 | (8388607 & t)),
          this.a.getFloat32(0) - 1
        );
      }
    };
    const $o = class {
      constructor() {
        (this.a = 0),
          (this.b = 0),
          (this.c = 0),
          (this.d = 0),
          (this.e = di()),
          (this.f = 0),
          (this.g = 0),
          (this.h = 0),
          (this.i = 0),
          (this.j = 0);
      }
    };
    const Qo = class {
      constructor(t, e) {
        (this.b = t), (this.c = e), (this.a = new $o());
      }
      d() {
        return this.a.d + this.b.e() * this.c.u;
      }
      e() {
        return this.a.d + this.c.u;
      }
      f() {
        return this.a.c + this.c.s;
      }
      g(t) {
        return this.a.c + 30518509e-12 * t * this.c.s;
      }
      h() {
        let t = this.a.a;
        return (t *= 1 + this.a.b * this.b.e()), t;
      }
      i() {
        return this.a;
      }
      j(t) {
        pi(t, this.a.e);
      }
    };
    const tl = class extends Qo {
      k(t, e) {
        let i,
          r = e * this.b.f(),
          n = this.b.e();
        (i = n < 1 ? (n > -1 ? Math.trunc(32767 * n + 0.5) : -32767) : 32767),
          (t.d = i);
        let s = this.g(i);
        s < 0.001 && (s = 0.001),
          (t.b = (function (t, e) {
            let i = Math.abs(t),
              r = Math.abs(e);
            return (
              Number((i - Math.floor(i / r) * r).toPrecision(8)) * Math.sign(t)
            );
          })(r, s)),
          (t.e = 65535 & this.b.d()),
          mi(t.a, this.b.e() * this.a.g * 0.5, this.b.e() * this.a.h * 0.5, 0);
        let a = this.h(),
          o = this.a.f;
        if (o < 0.001) {
          let e = this.a.i * this.b.e(),
            i = this.a.j * this.b.e(),
            r = Math.sin(e),
            n = Math.sin(i),
            s = Math.cos(e),
            o = Math.cos(i);
          mi(t.c, o * r * a, n * r * a, s * a);
        } else {
          let e = di();
          pi(e, t.a),
            (e[2] = e[2] - o),
            gi(e) > 1e-4 && (Si(e, e), Ai(t.c, e, a));
        }
      }
    };
    const el = class extends Qo {
      constructor(t, e, i) {
        super(t, e), (this.ba = i);
      }
      k(t, e) {
        let i,
          r = e * this.b.f(),
          n = this.b.e();
        (i = n < 1 ? (n > -1 ? Math.trunc(32767 * n + 0.5) : -32767) : 32767),
          (t.d = i);
        let s = this.g(i);
        s < 0.001 && (s = 0.001),
          (t.b = (function (t, e) {
            let i = Math.abs(t),
              r = Math.abs(e);
            return (
              Number((i - Math.floor(i / r) * r).toPrecision(8)) * Math.sign(t)
            );
          })(r, s)),
          (t.e = 65535 & this.b.d());
        let a = this.a.h - this.a.g,
          o = this.a.g + a * this.b.f(),
          l = this.a.i * this.b.e(),
          h = this.a.j * this.b.e(),
          u = Math.cos(l),
          c = _i(u * Math.cos(h), u * Math.sin(h), Math.sin(l));
        Ai(t.a, c, o);
        let f = this.h(),
          d = this.a.f,
          b = _i(0.5, 0.5, 0.5);
        0 == d
          ? this.ba
            ? mi(b, 0, 0, 1)
            : mi(b, u * Math.cos(h), u * Math.sin(h), Math.sin(l))
          : (mi(b, 0, 0, d), xi(b, t.a, b), gi(b) > 1e-4 && Si(b, b)),
          Ai(t.c, b, f);
      }
    };
    const il = class {
      constructor(t) {
        (this.a = t.getInt32()),
          (this.b = t.getUint32()),
          (this.c = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (this.d = t.getInt16()),
          (this.e = t.getInt16()),
          0 != (268435456 & this.b) &&
            ((this.f = [0, 0, 0]),
            (this.f[0] = 31 & this.e),
            (this.f[1] = (this.e >> 5) & 31),
            (this.f[2] = (this.e >> 10) & 31)),
          (this.g = t.getUint8()),
          (this.h = t.getUint8()),
          (this.i = t.getUint16()),
          (this.j = t.getUint16()),
          (this.k = t.getUint16()),
          (this.l = t.getUint16()),
          (this.m = new an(t, Qr)),
          (this.n = new an(t, Qr)),
          (this.o = new an(t, Qr)),
          (this.p = new an(t, Qr)),
          (this.q = new an(t, Jr)),
          (this.r = new an(t, Qr)),
          (this.s = t.getFloat()),
          (this.t = new an(t, Qr)),
          (this.u = t.getFloat()),
          (this.v = new an(t, Qr)),
          (this.w = new an(t, Qr)),
          (this.x = new an(t, Qr)),
          (this.y = new nn(t)),
          (this.z = new sn(t)),
          (this.A = new rn(t)),
          (this.B = [t.getFloat(), t.getFloat()]),
          (this.C = new sn(t)),
          (this.D = new sn(t)),
          (this.E = t.getFloat()),
          (this.F = t.getFloat()),
          (this.G = t.getFloat()),
          (this.H = [t.getFloat(), t.getFloat()]),
          (this.I = t.getFloat()),
          (this.J = t.getFloat()),
          (this.K = t.getFloat()),
          (this.L = t.getFloat()),
          (this.M = t.getFloat()),
          (this.N = t.getFloat()),
          (this.O = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (this.P = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (this.Q = _i(t.getFloat(), t.getFloat(), t.getFloat())),
          (this.R = t.getFloat()),
          (this.S = t.getFloat()),
          (this.T = t.getFloat()),
          (this.U = t.getFloat()),
          (this.V = t.getFloat());
        var e = t.getInt32();
        this.W = new Array(e);
        for (var i = 0; i < e; i++)
          this.W[i] = _i(t.getFloat(), t.getFloat(), t.getFloat());
        (this.X = new an(t, tn)),
          (this.Y = Sr(t.getFloat(), t.getFloat())),
          (this.Z = [
            Sr(t.getFloat(), t.getFloat()),
            Sr(t.getFloat(), t.getFloat()),
          ]),
          (this.aa = [
            Sr(t.getFloat(), t.getFloat()),
            Sr(t.getFloat(), t.getFloat()),
          ]);
      }
    };
    const rl = class {
      constructor() {
        (this.a = di()),
          (this.b = 0),
          (this.c = di()),
          (this.d = 0),
          (this.e = (2147483647 * Math.random()) >> 0),
          (this.f = [Cr(), Cr()]),
          (this.g = [Cr(), Cr()]);
      }
    };
    let nl = new Array(128);
    for (let t = 0; t < 128; t++) nl[t] = Math.random();
    const sl = Li(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    class al {}
    class ol {
      constructor() {
        (this.a = di()),
          (this.b = 0),
          (this.c = { a: Cr(), b: di(), c: 0, d: 0, e: 1, f: 0 });
      }
    }
    function ll(t) {
      return _r(
        ((t >> 16) & 255) / 255,
        ((t >> 8) & 255) / 255,
        ((t >> 0) & 255) / 255,
        ((t >> 24) & 255) / 255
      );
    }
    const hl = class {
      constructor(t, e) {
        (this.d = null),
          (this.F = 0),
          (this.V = !1),
          (this.a = new Date().getTime()),
          (this.b = t);
        let i = new il(e);
        if (i.i >= 11 && i.i <= 13) {
          let e;
          t.v.Item && t.v.Item.ParticleColor
            ? (e = t.v.Item.ParticleColor)
            : t.v.Creature &&
              t.v.Creature.ParticleColor &&
              (e = t.v.Creature.ParticleColor),
            e &&
              ((this.I = [br(), br(), br()]),
              pr(this.I[0], ll(e.Start[i.i - 11])),
              pr(this.I[1], ll(e.Mid[i.i - 11])),
              pr(this.I[2], ll(e.End[i.i - 11])));
        }
        (this.c = i),
          (this.e = zi()),
          (this.f = zi()),
          (this.g = zi()),
          (this.h = zi()),
          (this.i = br()),
          (this.j = Rr()),
          (this.k = di()),
          (this.l = 1),
          (this.m = di()),
          (this.n = 0),
          (this.o = di()),
          (this.p = di()),
          (this.q = []),
          (this.r = di()),
          (this.s = 0),
          (this.t = 0),
          (this.u = 0),
          (this.v = 0),
          (this.w = di()),
          (this.x = di()),
          (this.y = 0),
          (this.z = 0),
          (this.A = 0),
          (this.B = 0),
          (this.C = 0),
          (this.D = 0),
          (this.E = 0),
          (this.G = []),
          (this.H = []);
        for (let t = 0; t < 1e3; t++)
          this.H.push(4 * t + 0),
            this.H.push(4 * t + 1),
            this.H.push(4 * t + 2),
            this.H.push(4 * t + 3),
            this.H.push(4 * t + 2),
            this.H.push(4 * t + 1);
        switch (
          ((this.K = new Ko((2147483647 * Math.random()) >> 0)), this.c.h)
        ) {
          case 1:
            this.J = new tl(this.K, i);
            break;
          case 2:
            this.J = new el(this.K, i, 0 != (256 & this.c.b));
            break;
          default:
            (this.J = null),
              WH.debug("Found unimplemented generator ", this.c.h);
        }
        const r = this.c.U - this.c.S;
        0 != r
          ? ((this.t = (this.c.V - this.c.T) / r),
            (this.u = this.c.T - this.c.S * this.t))
          : ((this.t = 0), (this.u = 0));
        let n = this.c.l;
        n <= 0 && (n = 1);
        let s = this.c.k;
        s <= 0 && (s = 1), (this.z = n * s - 1), (this.A = 0);
        let a = n,
          o = -1;
        do {
          ++o, (a >>= 1);
        } while (a);
        if (
          ((this.B = o), (this.C = n - 1), (this.A = 0), (32768 & this.c.b) > 0)
        ) {
          let t = (this.z + 1) * this.K.d();
          this.A = (t / 4294967296) | 0;
        }
        if (((this.D = 1 / n), (this.E = 1 / s), (269484032 & this.c.b) > 0)) {
          const t = 0 != (1 & (this.c.b >> 28));
          this.s = t ? 2 : 3;
        } else this.s = 0;
        this.L = i.g > 1;
      }
      X() {
        var t = this;
        (t.b = null),
          (t.c.c = null),
          (t.c.O = null),
          (t.c.P = null),
          (t.c.m = t.c.m.e()),
          (t.c.n = t.c.n.e()),
          (t.c.o = t.c.o.e()),
          (t.c.p = t.c.p.e()),
          (t.c.q = t.c.q.e()),
          (t.c.r = t.c.r.e()),
          (t.c.t = t.c.t.e()),
          (t.c.v = t.c.v.e()),
          (t.c.w = t.c.w.e()),
          (t.c.x = t.c.x.e()),
          (t.c.X = t.c.X.e()),
          (t.c.y = t.c.y.d()),
          (t.c.z = t.c.z.d()),
          (t.c.A = t.c.A.d()),
          (t.c.C = t.c.C.d()),
          (t.c.D = t.c.D.d()),
          (t.q = null);
      }
      Y(t) {
        this.d = t;
      }
      Z(t, e) {
        if (!this.J) return;
        let i = zi(),
          r = this.J.i(),
          n = !0;
        this.c.X.c(t.a.a) && (n = this.c.X.d(t, this.b.aY) > 0), (this.U = n);
        const s = _i(0, 0, 0);
        n &&
          ((r.a = this.c.m.d(t, this.b.aY, 0)),
          (r.b = this.c.n.d(t, this.b.aY, 0)),
          (r.i = this.c.o.d(t, this.b.aY, 0)),
          (r.j = this.c.p.d(t, this.b.aY, 0)),
          this.c.q.d(t, this.b.aY, s, r.e),
          (r.c = this.c.r.d(t, this.b.aY, 0)),
          (r.d = this.c.t.d(t, this.b.aY, 0)),
          (r.h = this.c.w.d(t, this.b.aY, 0)),
          (r.g = this.c.v.d(t, this.b.aY, 0)),
          this.d ? (r.f = this.d.a) : (r.f = this.c.x.d(t, this.b.aY, 0))),
          ji(i, i, this.b.W),
          ji(i, i, this.b.ar[this.c.d].m);
        let a = zi();
        Zi(a, _i(this.c.c[0], this.c.c[1], this.c.c[2])),
          ji(i, i, a),
          ji(i, i, sl);
        let o = zi(),
          l = di();
        Gi(o, this.b.aT.viewMatrix),
          Ki(l, o),
          this.ac(e, i, l, null, this.b.aT.viewMatrix),
          this.am(this.b.aT.viewMatrix);
        let h = this.b.aT.context;
        this.M
          ? (h.bindBuffer(h.ARRAY_BUFFER, this.M),
            h.bufferData(
              h.ARRAY_BUFFER,
              new Float32Array(this.G),
              h.DYNAMIC_DRAW
            ))
          : ((this.M = h.createBuffer()),
            h.bindBuffer(h.ARRAY_BUFFER, this.M),
            h.bufferData(
              h.ARRAY_BUFFER,
              new Float32Array(this.G),
              h.DYNAMIC_DRAW
            )),
          this.N ||
            ((this.N = h.createBuffer()),
            h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, this.N),
            h.bufferData(
              h.ELEMENT_ARRAY_BUFFER,
              new Uint16Array(this.H),
              h.DYNAMIC_DRAW
            ));
      }
      aa(t) {
        if (this.q.length <= 0) return;
        const e = this.b.aT.context;
        if (
          (this.W ||
            ((this.W = new Oo()),
            (this.W.a = Ke(
              e,
              [
                "attribute vec3 aPosition;\r\nattribute vec4 aColor;\r\nattribute vec2 aTexcoord0;\r\nattribute vec2 aTexcoord1;\r\nattribute vec2 aTexcoord2;\r\nattribute float aAlphaCutoff;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nvarying vec2 vTexcoord1;\r\nvarying vec2 vTexcoord2;\r\nvarying float vAlphaCutoff;\r\n\r\nuniform mat4 uModelMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjMatrix;\r\n\r\nvoid main(void) {\r\n    vec4 pos = vec4(aPosition, 1);\r\n\r\n    gl_Position = uProjMatrix * pos;\r\n\r\n    vColor = aColor;\r\n    vTexcoord0 = aTexcoord0;\r\n    vTexcoord1 = aTexcoord1;\r\n    vTexcoord2 = aTexcoord2;\r\n    vAlphaCutoff = aAlphaCutoff;\r\n}",
                "precision mediump float;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nvarying vec2 vTexcoord1;\r\nvarying vec2 vTexcoord2;\r\nvarying float vAlphaCutoff;\r\n\r\nuniform bool uHasTexture;\r\nuniform bool uHasTexture2;\r\nuniform bool uHasTexture3;\r\nuniform bool uHasAlpha;\r\nuniform int uBlendMode;\r\nuniform int uPixelShader;\r\nuniform sampler2D uTexture;\r\nuniform sampler2D uTexture2;\r\nuniform sampler2D uTexture3;\r\nuniform float uAlphaTreshold;\r\n\r\nuniform float alphaMult;\r\nuniform float colorMult;\r\n\r\nvoid main(void) {\r\n    float lo_thresh = 0.01;\r\n    vec4 color = vec4(1, 1, 1, 1);\r\n    vec4 tex = vec4(1, 1, 1, 1);\r\n    vec4 tex2 = vec4(1, 1, 1, 1);\r\n    vec4 tex3 = vec4(1, 1, 1, 1);\r\n    if (uHasTexture) {\r\n        tex = texture2D(uTexture, vTexcoord0).rgba;\r\n    }\r\n    if (uHasTexture2) {\r\n        tex2 = texture2D(uTexture2, vTexcoord1).rgba;\r\n    }\r\n    if (uHasTexture3) {\r\n        tex3 = texture2D(uTexture3, vTexcoord2).rgba;\r\n    }\r\n    vec4 finalColor = vec4((tex * vColor ).rgb, tex.a*vColor.a );\r\n    vec3 matDiffuse = vec3(1.0);\r\n    float opacity = 1.0;\r\n    if (uPixelShader == 0) {\r\n        matDiffuse = vColor.xyz * tex.rgb;\r\n        opacity = tex.a*vColor.a;\r\n    } else if (uPixelShader == 1) {\r\n        vec4 textureMod = tex*tex2;\r\n        float texAlpha = (textureMod.w * tex3.w);\r\n        opacity = texAlpha*vColor.a;\r\n        matDiffuse = vColor.xyz * 4.0 * textureMod.rgb;\r\n    } else if (uPixelShader == 2) {\r\n        vec4 textureMod = tex*tex2*tex3;\r\n        float texAlpha = (textureMod.w);\r\n        opacity = texAlpha*vColor.a;\r\n        vec3 matDiffuse = vColor.xyz * textureMod.rgb;\r\n    } else if (uPixelShader == 3) {\r\n        vec4 textureMod = tex*tex2*tex3;\r\n        float texAlpha = (textureMod.w);\r\n        opacity = texAlpha*vColor.a;\r\n\r\n        matDiffuse = vColor.xyz * textureMod.rgb;\r\n    };\r\n\r\n    finalColor = vec4(matDiffuse.rgb * colorMult, opacity * alphaMult);\r\n\r\n    if (finalColor.a < vAlphaCutoff ) discard;\r\n    if (finalColor.a < uAlphaTreshold ) discard;\r\n    gl_FragColor = finalColor;\r\n}\r\n",
              ],
              null,
              null
            )),
            (this.W.b = {}),
            (this.W.a.attributes = [
              {
                loc: e.getAttribLocation(this.W.a.program, "aPosition"),
                type: e.FLOAT,
                size: 3,
                offset: 0,
                stride: 56,
              },
              {
                loc: e.getAttribLocation(this.W.a.program, "aColor"),
                type: e.FLOAT,
                size: 4,
                offset: 12,
                stride: 56,
              },
              {
                loc: e.getAttribLocation(this.W.a.program, "aTexcoord0"),
                type: e.FLOAT,
                size: 2,
                offset: 28,
                stride: 56,
              },
              {
                loc: e.getAttribLocation(this.W.a.program, "aTexcoord1"),
                type: e.FLOAT,
                size: 2,
                offset: 36,
                stride: 56,
              },
              {
                loc: e.getAttribLocation(this.W.a.program, "aTexcoord2"),
                type: e.FLOAT,
                size: 2,
                offset: 44,
                stride: 56,
              },
              {
                loc: e.getAttribLocation(this.W.a.program, "aAlphaCutoff"),
                type: e.FLOAT,
                size: 1,
                offset: 52,
                stride: 56,
              },
            ]),
            (this.W.c = this.M),
            (this.W.d = this.N),
            (this.W.m = this.c.j)),
          !this.T)
        )
          if (((this.T = [null, null, null]), 0 != (268435456 & this.c.b))) {
            WH.debug(
              "multitexture particle",
              this.c.f[0],
              this.c.f[1],
              this.c.f[2],
              this
            );
            for (let t = 0; t < this.c.f.length; t++) {
              const e = this.c.f[t];
              e > -1 && e < this.b.ay.length && (this.T[t] = this.b.ay[e]);
            }
          } else
            this.c.e > -1 &&
              this.c.e < this.b.ay.length &&
              (this.T[0] = this.b.ay[this.c.e]);
        if (!this.T[0].f || !this.T[0].f.e) return;
        (this.W.b.uViewMatrix = this.b.aT.viewMatrix),
          (this.W.b.uProjMatrix = this.b.aT.projMatrix),
          (this.W.b.uBlendMode = this.c.g),
          (this.W.b.uPixelShader = this.s > 1 ? this.s - 1 : 0),
          (this.W.b.colorMult = this.d ? this.d.b : 1),
          (this.W.b.alphaMult = this.d ? this.d.c : 1);
        let i = [
          this.T[0] && this.T[0].f && this.T[0].f.e,
          this.T[1] && this.T[1].f && this.T[1].f.e,
          this.T[2] && this.T[2].f && this.T[2].f.e,
        ];
        (this.W.b.uTexture = this.T[0].f.d),
          (this.W.b.uTexture2 = i[1] ? this.T[1].f.d : null),
          (this.W.b.uTexture3 = i[2] ? this.T[2].f.d : null),
          (this.W.b.uHasTexture = i[0] ? 1 : 0),
          (this.W.b.uHasTexture2 = i[1] ? 1 : 0),
          (this.W.b.uHasTexture3 = i[2] ? 1 : 0);
        let r = this.c.g;
        4 == r && (r = 3), (this.W.e = r), (this.W.i = !this.b.bZ);
        let n = -1;
        1 == r ? (n = 0.501960814) : r > 1 && (n = 1 / 255),
          (this.W.b.uAlphaTreshold = n),
          (this.W.h = !1),
          (this.W.f = !1),
          (this.W.j = e.TRIANGLES),
          (this.W.k = (6 * this.F) >> 0),
          (this.W.l = 0),
          t.push(this.W);
      }
      ab(t, e) {
        if (0 == (16 & this.c.b))
          for (let i = 0; i < this.q.length; i++) {
            const r = this.q[i];
            Ri(r.a, r.a, t), Ii(r.c, r.c, e);
          }
      }
      ac(t, e, i, r, n) {
        if (null == this.J) return;
        if (this.b.U) return;
        Ki(this.m, this.e);
        let s = br();
        Ki(s, e), (s[3] = 1), yr(s, s, n), (this.n = s[2]);
        let a = di();
        if ((Ki(a, n), this.ad(e, a, r), t > 0)) {
          let e = di();
          if ((Ki(e, this.e), 16384 & this.c.b)) {
            xi(this.p, e, this.m);
            let i = this.t * (gi(this.p) / t) + this.u;
            i >= 0 && (i = Math.min(i, 1)), Ai(this.o, this.p, i);
          }
          if (64 & this.c.b) {
            this.v += t;
            let i = 0.03;
            if (this.v > i)
              if (((this.v = 0), 0 == this.q.length)) {
                let t = i / this.v,
                  r = di();
                xi(r, e, this.m);
                let n = t * this.c.I;
                Ti(this.w, r, _i(n, n, n));
              } else mi(this.w, 0, 0, 0);
          }
          this.ae(t);
        }
      }
      ad(t, e, i) {
        if ((pi(this.x, e), null == i || 16 & this.c.b)) Bi(this.e, t);
        else {
          let e = zi();
          Gi(e, i), ji(this.e, e, t);
        }
        let r = di();
        $i(r, t), (this.l = r[0]);
      }
      ae(t) {
        if ((t = Math.max(t, 0)) < 0.1) pi(this.o, this.p);
        else {
          let e = Math.floor(t / 0.1);
          t = -0.1 * e + t;
          let i = Math.min(Math.floor(this.J.i().lifespan / 0.1), e),
            r = i + 1,
            n = 1;
          (n = r < 0 ? ((1 & r) | (r >> 1)) + ((1 & r) | (r >> 1)) : r),
            Ai(this.o, this.p, 1 / n);
          for (let t = 0; t < i; t++) this.af(0.1);
        }
        this.af(t);
      }
      af(t) {
        let e = new al();
        if (t < 0) return;
        this.c.b, this.ag(e, t), this.ah(t);
        let i = 0;
        for (; i < this.q.length; ) {
          let r = this.q[i];
          (r.b = r.b + t),
            r.b > Math.max(this.J.g(r.e), 0.001)
              ? (this.ak(i), i--)
              : this.al(r, t, e) || (this.ak(i), i--),
            i++;
        }
      }
      ag(t, e) {
        (t.a = di()), (t.b = di()), (t.c = di()), (t.d = 0);
        let i = _i(e, e, e),
          r = e * e * 0.5,
          n = _i(r, r, r);
        Ti(t.a, this.c.Q, i);
        let s = di();
        this.J.j(s), Ti(t.b, s, i), Ti(t.c, s, n), (t.d = this.c.J * e);
      }
      ah(t) {
        if (!this.U) return;
        let e = this.J.d();
        for (this.y = this.y + t * e; this.y > 1; ) this.ai(t), (this.y -= 1);
      }
      ai(t) {
        let e = this.aj();
        if ((this.J.k(e, t), !(16 & this.c.b))) {
          let t = _r(e.a[0], e.a[1], e.a[2], 1),
            i = _r(e.c[0], e.c[1], e.c[2], 0);
          yr(t, t, this.e),
            yr(i, i, this.e),
            pi(e.a, t),
            pi(e.c, i),
            8192 & this.c.b && (e.a[2] = 0);
        }
        if (64 & this.c.b) {
          let t = 1 + this.J.i().speedVariation * this.K.e(),
            i = di();
          Ai(i, this.w, t), vi(e.c, e.c, i);
        }
        if (this.s >= 2)
          for (let t = 0; t < 2; t++) {
            (e.f[t][0] = this.K.f()), (e.f[t][1] = this.K.f());
            let s = Cr();
            Fr(s, this.c.aa[t], this.K.e()),
              (i = e.g[t]),
              (r = s),
              (n = this.c.Z[t]),
              (i[0] = r[0] + n[0]),
              (i[1] = r[1] + n[1]);
          }
        var i, r, n;
      }
      aj() {
        let t = new rl();
        return this.q.push(t), t;
      }
      ak(t) {
        this.q.splice(t, 1);
      }
      al(t, e, i) {
        if (this.s >= 2)
          for (let i = 0; i < 2; i++) {
            let r = t.f[i][0] + e * t.g[i][0];
            (t.f[i][0] = r - Math.floor(r)),
              (r = t.f[i][1] + e * t.g[i][1]),
              (t.f[i][1] = r - Math.floor(r));
          }
        vi(t.c, t.c, i.a),
          16384 & this.c.b && 2 * e < t.b && vi(t.a, t.a, this.o);
        let r = _i(e, e, e),
          n = di();
        if (
          (Ti(n, t.c, r),
          vi(t.c, t.c, i.b),
          Ai(t.c, t.c, 1 - i.d),
          vi(t.a, t.a, n),
          vi(t.a, t.a, i.c),
          2 == this.c.h && 128 & this.c.b)
        ) {
          let e = di();
          if ((pi(e, t.a), 16 & this.c.b)) {
            if (ki(e, n) > 0) return !1;
          } else {
            let i = di();
            if ((Ki(i, this.e), xi(e, t.a, i), ki(e, n) > 0)) return !1;
          }
        }
        return !0;
      }
      am(t) {
        if (((this.G.length = 0), 0 == this.q.length && null != this.J)) return;
        Gi(this.g, t), Ir(Rr(), t), this.an(null, t);
        let e = 0;
        for (let t = 0; t < this.q.length; t++) {
          let i = this.q[t],
            r = new ol();
          if (
            (this.ap(i, r) &&
              (131072 & this.c.b && (this.ar(i, r), e++),
              262144 & this.c.b && (this.as(i, r), e++)),
            e >= 1e3)
          )
            break;
        }
        this.F = e;
      }
      an(t, e) {
        var i, r, n;
        16 & this.c.b
          ? ji(this.h, e, this.e)
          : null != t
          ? ji(this.h, e, t)
          : Bi(this.h, e),
          Ki(this.i, e),
          4096 & this.c.b &&
            (Ir(this.j, this.h),
            16 & this.c.b &&
              Math.abs(this.l) > 0 &&
              ((i = this.j),
              (r = this.j),
              (n = 1 / this.l),
              (i[0] = r[0] * n),
              (i[1] = r[1] * n),
              (i[2] = r[2] * n),
              (i[3] = r[3] * n),
              (i[4] = r[4] * n),
              (i[5] = r[5] * n),
              (i[6] = r[6] * n),
              (i[7] = r[7] * n),
              (i[8] = r[8] * n)),
            mi(this.k, this.j[6], this.j[7], this.j[8]),
            Mi(this.k) <= 2.3841858e-7
              ? mi(this.k, 0, 0, 1)
              : Si(this.k, this.k));
      }
      ao(t) {
        let e = 0,
          i = 0;
        if (0 != this.c.K || 0 != this.c.N) {
          let r = new Ko(t.e);
          (e = 0 == this.c.L ? this.c.K : this.c.K + r.e() * this.c.L),
            (i = 0 == this.c.N ? this.c.M : this.c.M + r.e() * this.c.N);
        } else (e = this.c.K), (i = this.c.M);
        return { deltaSpin: i, baseSpin: e };
      }
      ap(t, e) {
        let i = this.c.G,
          r = this.c.H,
          n = r[0],
          s = r[1] - n,
          a = 0,
          o = t.e,
          l = t.b;
        if (((i < 1 || 0 != s) && (a = 127 & (l * this.c.F + o)), i < nl[a]))
          return 0;
        this.aq(t, e, o);
        let h = s * nl[a] + n;
        Fr(e.c.a, e.c.a, h), 32 & this.c.b && Fr(e.c.a, e.c.a, this.l);
        let u = _r(t.a[0], t.a[1], t.a[2], 1);
        return yr(u, u, this.h), pi(e.a, u), (e.b = 1), 1;
      }
      aq(t, e, i) {
        let r = t.b / this.J.f(),
          n = new Ko(i);
        Math.min(r, 1) <= 0 ? (r = 0) : r >= 1 && (r = 1);
        let s = _i(255, 255, 255),
          a = Sr(1, 1),
          o = 1,
          l = e.c;
        this.c.y.i(r, s, l.b, this.I),
          this.I || Ai(l.b, l.b, 1 / 255),
          this.c.A.i(r, a, l.a),
          (l.e = this.c.z.i(r, 32767) / 32767),
          this.d ? (l.f = this.d.d.i(r, 0) / 32767) : (l.f = 0);
        let h = 0;
        this.c.C.a.length > 0
          ? ((o = 0), (l.c = this.c.C.i(r, o)), (l.c = this.z & (l.c + this.A)))
          : 65536 & this.c.b
          ? ((h = (this.z + 1) * n.d()), (l.c = (h / 4294967296) | 0))
          : (l.c = 0),
          (o = 0),
          (l.d = this.c.D.i(r, o)),
          (l.d = (l.d + this.A) & this.z);
        let u = 1;
        524288 & this.c.b
          ? ((u = Math.max(1 + n.e() * this.c.B[1], 99999997e-12)),
            (l.a[0] = Math.max(1 + n.e() * this.c.B[0], 99999997e-12) * l.a[0]))
          : ((u = Math.max(1 + n.e() * this.c.B[0], 99999997e-12)),
            (l.a[0] = u * l.a[0])),
          (l.a[1] = u * l.a[1]);
      }
      ar(t, e) {
        let i = Sr((e.c.c & this.C) * this.D, (e.c.c >> this.B) * this.E),
          r = 0,
          n = 0,
          s = this.ao(t);
        (r = s.baseSpin), (n = s.deltaSpin);
        let a = 0,
          o = _i(0, 0, 0),
          l = _i(0, 0, 0),
          h = !1,
          u = !1;
        if (4 & this.c.b && Mi(t.c) > 2.3841858e-7)
          if (((a = 1), 4096 & this.c.b)) h = !0;
          else {
            let i = _r(-t.c[0], -t.c[1], -t.c[2], 0);
            yr(i, i, this.h);
            let r = di();
            pi(r, i);
            let n = 0,
              s = Mi(r);
            n = s <= 2.3841858e-7 ? 0 : 1 / Math.sqrt(s);
            let a = di();
            pi(a, r),
              Ai(a, a, n),
              pi(o, a),
              Ai(o, o, e.c.a[0]),
              (l = _i(a[1], -a[0], 0)),
              Ai(l, l, e.c.a[1]),
              (u = !0),
              (h = !1);
          }
        if ((4096 & this.c.b || h) && !u) {
          let i = Rr();
          (c = i),
            (f = this.j),
            (c[0] = f[0]),
            (c[1] = f[1]),
            (c[2] = f[2]),
            (c[3] = f[3]),
            (c[4] = f[4]),
            (c[5] = f[5]),
            (c[6] = f[6]),
            (c[7] = f[7]),
            (c[8] = f[8]);
          let s = e.c.a[0];
          if (a) {
            let r = 0,
              n = _i(-t.c[0], -t.c[1], -t.c[2]),
              a = Mi(n);
            (r = a <= 2.3841858e-7 ? 0 : 1 / Math.sqrt(a)),
              Ur(
                i,
                this.j,
                (function (t, e, i, r, n, s, a, o, l) {
                  var h = new fi(9);
                  return (
                    (h[0] = t),
                    (h[1] = e),
                    (h[2] = i),
                    (h[3] = r),
                    (h[4] = n),
                    (h[5] = s),
                    (h[6] = a),
                    (h[7] = o),
                    (h[8] = l),
                    h
                  );
                })(n[0] * r, n[1] * r, 0, -n[1] * r, n[0] * r, 0, 0, 0, 1)
              ),
              r > 2.3841858e-7 && (s = e.c.a[0] * (1 / Math.sqrt(Mi(t.c)) / r));
          }
          if (
            (this.s,
            mi(o, i[0], i[1], i[2]),
            Ai(o, o, s),
            mi(l, i[3], i[4], i[5]),
            Ai(l, l, e.c.a[1]),
            (n = l[0]),
            (u = !0),
            0 != this.c.M || 0 != this.c.N)
          ) {
            let e = r + n * t.b;
            512 & this.c.b && 1 & t.e && (e = -e);
            let i = di();
            pi(i, this.k), this.s;
            let s = Rr(),
              a = Pr();
            Or(a, i, e),
              (function (t, e) {
                var i = e[0],
                  r = e[1],
                  n = e[2],
                  s = e[3],
                  a = i + i,
                  o = r + r,
                  l = n + n,
                  h = i * a,
                  u = r * a,
                  c = r * o,
                  f = n * a,
                  d = n * o,
                  b = n * l,
                  g = s * a,
                  _ = s * o,
                  p = s * l;
                (t[0] = 1 - c - b),
                  (t[3] = u - p),
                  (t[6] = f + _),
                  (t[1] = u + p),
                  (t[4] = 1 - h - b),
                  (t[7] = d - g),
                  (t[2] = f - _),
                  (t[5] = d + g),
                  (t[8] = 1 - h - c);
              })(s, a),
              Ii(o, o, s),
              mi(l, n, l[1], l[2]),
              Ii(l, l, s);
          }
        }
        var c, f;
        if (!u)
          if (0 != this.c.M || 0 != this.c.N) {
            let i = r + n * t.b;
            512 & this.c.b && 1 & t.e && (i = -i);
            let s = Math.cos(i),
              a = Math.sin(i);
            mi(o, s, a, 0),
              Ai(o, o, e.c.a[0]),
              mi(l, -a, s, 0),
              Ai(l, l, e.c.a[1]),
              134217728 & this.c.b && vi(e.a, e.a, _i(l[0], l[1], 0));
          } else mi(o, e.c.a[0], 0, 0), mi(l, 0, e.c.a[1], 0);
        return this.at(o, l, e.a, e.c.b, e.c.e, e.c.f, i[0], i[1], t.f), 0;
      }
      as(t, e) {
        let i = Sr((e.c.d & this.C) * this.D, (e.c.d >> this.B) * this.E),
          r = _i(0, 0, 0),
          n = _i(0, 0, 0),
          s = this.c.E;
        1024 & this.c.b && (s = Math.min(t.b, s));
        let a = br();
        Ai(a, t.c, -1), (a[3] = 0), yr(a, a, this.h), Ai(a, a, s);
        let o = _i(a[0], a[1], 0);
        if (ki(o, o) > 1e-4) {
          let t = 1 / gi(o);
          Fr(e.c.a, e.c.a, t),
            Dr(o, o, e.c.a),
            (n = _i(-o[1], o[0], 0)),
            Ai(r, a, 0.5),
            vi(e.a, e.a, r);
        } else (r = _i(0.05 * e.c.a[0], 0, 0)), (n = _i(0, 0.05 * e.c.a[1], 0));
        return this.at(r, n, e.a, e.c.b, e.c.e, e.c.f, i[0], i[1], t.f), 1;
      }
      at(t, e, i, r, n, s, a, o, l) {
        const h = [-1, -1, 1, 1],
          u = [1, -1, 1, -1],
          c = [0, 0, 1, 1],
          f = [0, 1, 0, 1];
        let d = di(),
          b = Cr(),
          g = Cr(),
          _ = Cr();
        for (let p = 0; p < 4; p++)
          mi(d, 0, 0, 0),
            Ei(d, d, t, h[p]),
            Ei(d, d, e, u[p]),
            vi(d, d, i),
            kr(b, c[p] * this.D + a, f[p] * this.E + o),
            kr(g, c[p] * this.c.Y[0] + l[0][0], f[p] * this.c.Y[0] + l[0][1]),
            kr(_, c[p] * this.c.Y[1] + l[1][0], f[p] * this.c.Y[1] + l[1][1]),
            this.G.push(d[0]),
            this.G.push(d[1]),
            this.G.push(d[2]),
            this.G.push(r[0]),
            this.G.push(r[1]),
            this.G.push(r[2]),
            this.G.push(n),
            this.G.push(b[0]),
            this.G.push(b[1]),
            this.G.push(g[0]),
            this.G.push(g[1]),
            this.G.push(_[0]),
            this.G.push(_[1]),
            this.G.push(s);
      }
    };
    const ul = class {
      constructor(t) {
        var e = this;
        (e.a = t.getFloat()),
          (e.b = t.getFloat()),
          (e.c = t.getFloat()),
          (e.d = new sn(t));
      }
    };
    const cl = class {
      constructor(t) {
        (this.buffer = new DataView(t)), (this.position = 0);
      }
      getBool() {
        var t = 0 != this.buffer.getUint8(this.position);
        return (this.position += 1), t;
      }
      getUint8() {
        var t = this.buffer.getUint8(this.position);
        return (this.position += 1), t;
      }
      getInt8() {
        var t = this.buffer.getInt8(this.position);
        return (this.position += 1), t;
      }
      getUint16() {
        var t = this.buffer.getUint16(this.position, !0);
        return (this.position += 2), t;
      }
      getInt16() {
        var t = this.buffer.getInt16(this.position, !0);
        return (this.position += 2), t;
      }
      getUint32() {
        var t = this.buffer.getUint32(this.position, !0);
        return (this.position += 4), t;
      }
      getInt32() {
        var t = this.buffer.getInt32(this.position, !0);
        return (this.position += 4), t;
      }
      getFloat() {
        var t = this.buffer.getFloat32(this.position, !0);
        return (this.position += 4), t;
      }
      getString(t) {
        void 0 === t && (t = this.getUint16());
        for (var e = "", i = 0; i < t; ++i)
          e += String.fromCharCode(this.getUint8());
        return e;
      }
      setBool(t) {
        this.buffer.setUint8(this.position, t ? 1 : 0), (this.position += 1);
      }
      setUint8(t) {
        this.buffer.setUint8(this.position, t), (this.position += 1);
      }
      setInt8(t) {
        this.buffer.setInt8(this.position, t), (this.position += 1);
      }
      setUint16(t) {
        this.buffer.setUint16(this.position, t, !0), (this.position += 2);
      }
      setInt16(t) {
        this.buffer.setInt16(this.position, t, !0), (this.position += 2);
      }
      setUint32(t) {
        this.buffer.setUint32(this.position, t, !0), (this.position += 4);
      }
      setInt32(t) {
        this.buffer.setInt32(this.position, t, !0), (this.position += 4);
      }
      setFloat(t) {
        this.buffer.setFloat32(this.position, t, !0), (this.position += 4);
      }
    };
    class fl {
      constructor() {
        (this.a = di()), (this.b = br()), (this.c = Cr());
      }
    }
    class dl {}
    const bl = [0, 1, 2, 10, 3, 4, 5, 13];
    function gl(t, e) {
      return _i(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2]);
    }
    class _l {}
    const pl = class {
        constructor(t, e) {
          (this.g = di()),
            (this.h = di()),
            (this.p = new dl()),
            (this.q = di()),
            (this.r = di()),
            (this.s = di()),
            (this.t = di()),
            (this.u = di()),
            (this.v = di()),
            (this.w = di()),
            (this.x = di()),
            (this.y = di()),
            (this.z = di()),
            (this.A = di()),
            (this.B = di()),
            (this.O = di()),
            (this.V = t.aT.context),
            (this.a = t);
          let i = new _l();
          var r;
          if (
            ((i.a = e.getInt32()),
            (i.b = e.getInt32()),
            (i.c = _i(e.getFloat(), e.getFloat(), e.getFloat())),
            (r = e.getInt32()) > 0)
          ) {
            i.j = new Array(r);
            for (let t = 0; t < r; ++t) i.j[t] = e.getInt16();
          }
          if ((r = e.getInt32()) > 0) {
            i.k = new Array(r);
            for (let t = 0; t < r; ++t) i.k[t] = e.getInt16();
          }
          (i.l = new an(e, Jr)),
            (i.m = new an(e, $r)),
            (i.n = new an(e, Qr)),
            (i.o = new an(e, Qr)),
            (i.d = e.getFloat()),
            (i.e = e.getFloat()),
            (i.f = e.getFloat()),
            (i.g = e.getInt16()),
            (i.h = e.getInt16()),
            (i.p = new an(e, $r)),
            (i.q = new an(e, tn)),
            (i.r = e.getInt16()),
            (this.U = i),
            (this.ab = new Array(i.k.length)),
            (this.ae = new Array(i.k.length));
          for (let e = 0; e < i.k.length; e++) this.ae[e] = t.ax[i.k[e]];
          let n = _r(255, 255, 255, 255),
            s = new dl();
          (s.a = 0),
            (s.b = 0),
            (s.c = 1),
            (s.d = 1),
            this.au(i.d, i.e, n, s, i.h, i.g),
            this.ag(i.f),
            this.af(!1);
        }
        af(t) {
          (this.L = t), this.L || (this.J = !1);
        }
        ag(t) {
          this.S = t;
        }
        ah() {
          return this.e == this.d;
        }
        ai(t) {
          this.R = t;
        }
        aj(t) {
          this.Q = t;
        }
        ak(t) {
          this.F[3] = Math.max(t, 0);
        }
        al() {
          let t = di();
          Pi(t, this.g, this.O);
          let e = Mi(t);
          Ai(t, this.q, this.R),
            xi(this.w, this.g, t),
            Ai(t, this.r, this.R),
            xi(this.x, this.O, t),
            Ai(t, this.q, this.Q),
            vi(this.y, this.g, t),
            Ai(t, this.r, this.Q),
            vi(this.z, this.O, t),
            Ai(this.u, this.s, e),
            Ai(this.v, this.t, e);
        }
        am(t, e, i) {
          let r;
          if (this.M && this.L) {
            r = t;
            let i = di();
            Ki(i, r),
              vi(i, i, e),
              pi(this.h, e),
              this.J
                ? (pi(this.g, this.O), pi(this.s, this.t), pi(this.q, this.r))
                : (pi(this.g, i),
                  (this.s = gl(r, 2)),
                  (this.q = gl(r, 1)),
                  (this.f = 0),
                  (this.J = !0)),
              (this.O = i),
              (this.t = gl(r, 2)),
              (this.r = gl(r, 1));
          }
        }
        an(t) {
          var e = Rr();
          Ir(e, t),
            (this.s = Ii(this.s, this.s, e)),
            (this.q = Ii(this.q, this.q, e)),
            (this.t = Ii(this.t, this.t, e)),
            (this.r = Ii(this.r, this.r, e)),
            (this.g = Ri(this.g, this.g, t)),
            (this.O = Ri(this.O, this.O, t));
          for (var i = 0; i < this.i.length; i++)
            Ri(this.i[i].a, this.i[i].a, t);
        }
        ao(t, e, i) {
          (this.F[2] = i), (this.F[1] = e), (this.F[0] = t);
        }
        ap(t) {
          if (this.P != t) {
            this.P = t;
            let e = t % this.I,
              i = e;
            0 != (2147483648 & e) &&
              (i = ((1 & e) | (e >> 1)) + ((1 & e) | (e >> 1)));
            let r = i * this.l + this.G.b;
            this.p.b = r;
            let n = t / this.I,
              s = n;
            0 != (2147483648 & n) &&
              ((n = (1 & n) | (n >> 1)), (s = n + n), (r = this.p.b));
            let a = s * this.m + this.G.a;
            (this.p.a = a), (this.p.d = r + this.l), (this.p.c = a + this.m);
          }
        }
        aq(t, e, i) {
          let r,
            n = this.i[2 * this.d],
            s = this.i[2 * this.d + 1],
            a = di();
          Ai(a, this.v, 1 - e),
            xi(a, this.x, a),
            Ai(n.a, a, e),
            Ai(a, this.u, e),
            vi(a, this.w, a),
            Ai(a, a, 1 - e),
            vi(n.a, n.a, a),
            Ai(a, this.v, 1 - e),
            xi(a, this.z, a),
            Ai(s.a, a, e),
            Ai(a, this.u, e),
            vi(a, this.y, a),
            Ai(a, a, 1 - e),
            vi(s.a, s.a, a),
            (this.c[this.d] = t),
            (r = i),
            (this.d = this.d + r),
            this.d >= this.c.length && (this.d -= this.c.length);
        }
        ar(t, e) {
          if (this.a.U) return;
          let i = di(),
            r = 1;
          (i = this.U.l.d(t, this.a.aY, i)),
            (r = this.U.m.d(t, this.a.aY)),
            this.ao(i[0], i[1], i[2]),
            this.ak(r / 32767);
          let n = this.U.n.d(t, this.a.aY);
          this.aj(n);
          let s = this.U.o.d(t, this.a.aY);
          this.ai(s);
          let a = this.U.p.d(t, this.a.aY);
          this.ap(a);
          let o = this.U.q.d(t, this.a.aY, 1);
          this.af(0 != o);
          let l = zi();
          tr(l, this.a.W, this.a.ar[this.U.b].m), Wi(l, l, this.U.c);
          let h = di();
          this.am(l, h, null), this.as(e, !1);
        }
        as(t, e) {
          let i,
            r,
            n,
            s,
            a,
            o,
            l,
            h,
            u,
            c,
            f,
            d,
            b,
            g,
            _,
            p,
            m,
            v,
            x,
            T,
            w,
            y,
            A,
            E,
            M,
            C,
            S,
            k,
            D,
            F,
            R,
            I,
            U,
            P,
            O,
            z,
            B,
            L,
            H,
            N,
            G,
            j,
            W,
            V,
            q,
            Y,
            X,
            Z;
          for (
            this.N || (this.C > 0 && (t = 1 / this.C + 99999997e-12)),
              t >= 0 ? this.D <= t && (t = this.D) : (t = 0),
              v = this.e;
            v != this.d && !(t + this.c[v] <= this.D);
            v = this.e
          )
            this.e = this.at(this.e, 1);
          if (!e && this.M && this.L && this.J) {
            (R = t * this.C + this.f), (Z = this.F), this.al();
            let e = !1;
            if (
              ((P = 0),
              R < 1
                ? (e = !0)
                : ((X = this.f),
                  (U = 1 / (R - X)),
                  (m = Math.floor(R - 1)),
                  (P = Math.ceil(Math.max(m, 0)))),
              -1 == P || e)
            );
            else
              for (
                I = 1, v = 1;
                (F = this.d),
                  (L = this.i.length),
                  (this.i[2 * F].b = Z),
                  (x = 2 * this.d + 1),
                  (H = this.i.length),
                  (this.i[x].b = Z),
                  this.aq((v - X) * U * -t, (v - X) * U, 1),
                  -1 != --P;
                v = I
              )
                (I += 1), (X = this.f);
            (T = Math.floor(R)),
              (this.f = R - T),
              this.aq(0, 1, 0),
              (D = this.d),
              (N = this.i.length),
              (w = this.i[2 * D]),
              (y = this.p.b),
              (w.c[1] = this.p.a),
              (w.c[0] = y),
              (A = 2 * this.d + 1),
              (G = this.i.length),
              (E = this.i[A]),
              (M = this.p.b),
              (E.c[1] = this.p.c),
              (E.c[0] = M),
              (k = this.d),
              (j = this.i.length),
              (this.i[2 * k].b = Z),
              (C = 2 * this.d + 1),
              (W = this.i.length),
              (this.i[C].b = Z);
          }
          (this.A[2] = 34028235e31),
            (this.A[1] = 34028235e31),
            (this.A[0] = 34028235e31),
            (this.B[2] = -34028235e31),
            (this.B[1] = -34028235e31),
            (this.B[0] = -34028235e31),
            (O = this.e);
          for (let e = this.e; e != this.d; O = e)
            (p = 2 * e),
              (Y = this.i.length),
              (S = O),
              (B = this.i[2 * e]),
              (i = p + 1),
              (r = this.i[2 * e + 1]),
              (n = (this.S + this.S) * this.c[S] * t + t * this.S * t),
              (B.a[2] = B.a[2] + n),
              (r.a[2] = n + r.a[2]),
              (s = B.a[0]),
              (a = this.A[0]),
              a > B.a[0] && ((a = B.a[0]), (this.A[0] = s), (s = B.a[0])),
              (o = B.a[1]),
              (l = this.A[1]),
              l > o && ((l = B.a[1]), (this.A[1] = o), (o = B.a[1])),
              (h = B.a[2]),
              (u = this.A[2]),
              u > h && ((u = B.a[2]), (this.A[2] = h), (h = B.a[2])),
              s > this.B[0] && (this.B[0] = s),
              o > this.B[1] && (this.B[1] = o),
              h > this.B[2] && (this.B[2] = h),
              (c = r.a[0]),
              a > r.a[0] && ((this.A[0] = c), (c = r.a[0])),
              (f = r.a[1]),
              l > f && ((this.A[1] = f), (f = r.a[1])),
              (d = r.a[2]),
              u > d && ((this.A[2] = d), (d = r.a[2])),
              c > this.B[0] && (this.B[0] = c),
              f > this.B[1] && (this.B[1] = f),
              d > this.B[2] && (this.B[2] = d),
              (V = this.c.length),
              (this.c[S] = t + this.c[S]),
              (b = this.l),
              (q = this.c.length),
              (g = b * this.c[S] * this.k + this.p.b),
              (B.c[1] = this.p.a),
              (B.c[0] = g),
              (r.c[1] = this.p.c),
              (r.c[0] = g),
              (_ = this.c.length),
              (z = O + 1),
              (e = z - _),
              _ > z && (e = z);
          this.N = !0;
        }
        at(t, e) {
          let i = e + t;
          t = i;
          let r = this.c.length;
          return i >= r && (t = i - r), t;
        }
        au(t, e, i, r, n, s) {
          let a, o, l, h, u, c, f, d;
          (f = Math.ceil(t)),
            (d = Math.max(0.25, e)),
            (a = Math.ceil(d * f)),
            (o = Math.ceil(Math.max(a + 1 + 1, 0))),
            (this.c = new Array(o)),
            (this.e = 0),
            (this.d = 0),
            (this.f = 0),
            (this.J = !1),
            (this.i = new Array(2 * o));
          for (let t = 0; t < this.i.length; t++) {
            this.i[t] = new fl();
            let e = this.i[t];
            (e.a[0] = 0),
              (e.a[1] = 0),
              (e.a[2] = 0),
              (e.b = _r(0, 0, 0, 0)),
              (e.c[0] = 0),
              (e.c[1] = 0);
          }
          this.j = new Array(4 * o);
          for (let t = 0; t < this.j.length; t++) this.j[t] = t % (2 * o);
          (this.k = 1 / d),
            (l = s),
            0 != (2147483648 & s) &&
              (l = ((1 & s) | (s >> 1)) + ((1 & s) | (s >> 1))),
            (this.l = (r.d - r.b) / l),
            (h = n),
            0 != (2147483648 & n) &&
              (h = ((1 & n) | (n >> 1)) + ((1 & n) | (n >> 1))),
            (this.m = (r.c - r.a) / h),
            (this.n = 1 / this.l),
            (this.o = 1 / this.m),
            (this.C = f),
            (this.D = d),
            xr(i, i, 1 / 255),
            (this.F = i),
            (this.G = r),
            (this.H = n),
            (this.I = s),
            (this.P = 0),
            (u = 0 * this.l + this.G.b),
            (this.p.b = u),
            (c = 0 * this.m + this.G.a),
            (this.p.a = c),
            (this.p.d = u + this.l),
            (this.p.c = c + this.m),
            (this.Q = 10),
            (this.R = 10),
            (this.S = 0),
            (this.M = !0),
            (this.L = !0),
            (this.K = !0);
        }
        av() {
          let t = new Array(this.i.length);
          for (let e = 0, i = 0; e < this.i.length; ++e)
            (t[i++] = this.i[e].a[0]),
              (t[i++] = this.i[e].a[1]),
              (t[i++] = this.i[e].a[2]),
              (t[i++] = this.i[e].b[0]),
              (t[i++] = this.i[e].b[1]),
              (t[i++] = this.i[e].b[2]),
              (t[i++] = this.i[e].b[3]),
              (t[i++] = this.i[e].c[0]),
              (t[i++] = this.i[e].c[1]);
          if (this.ah()) return;
          let e = this.V;
          this.W
            ? (e.bindBuffer(e.ARRAY_BUFFER, this.W),
              e.bufferData(e.ARRAY_BUFFER, new Float32Array(t), e.DYNAMIC_DRAW))
            : ((this.W = e.createBuffer()),
              e.bindBuffer(e.ARRAY_BUFFER, this.W),
              e.bufferData(
                e.ARRAY_BUFFER,
                new Float32Array(t),
                e.DYNAMIC_DRAW
              )),
            this.X
              ? (e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.X),
                e.bufferData(
                  e.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array(this.j),
                  e.DYNAMIC_DRAW
                ))
              : ((this.X = e.createBuffer()),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.X),
                e.bufferData(
                  e.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array(this.j),
                  e.DYNAMIC_DRAW
                ));
        }
        aw(t) {
          if (this.ah()) return;
          let e = this.V;
          for (let r = 0; r < this.U.j.length; r++) {
            if (!this.ab[r]) {
              let t = new Oo();
              (t.a = Ke(
                e,
                [
                  "        attribute vec3 aPosition;\n        attribute vec4 aColor;\n        attribute vec2 aTexcoord0;\n        uniform mat4 uViewMatrix;\n        uniform mat4 uProjMatrix;\n        varying vec4 vColor;\n        varying vec2 vTexcoord0;\n        void main() {\n            vec4 aPositionVec4 = vec4(aPosition, 1);\n            vColor = aColor;\n            vTexcoord0 = aTexcoord0;\n            gl_Position = uProjMatrix * uViewMatrix * aPositionVec4;\n        }",
                  "    precision mediump float;    varying vec4 vColor;\n    varying vec2 vTexcoord0;\n    uniform sampler2D uTexture;\n    void main() {\n        vec4 tex = texture2D(uTexture, vTexcoord0).rgba;\n        gl_FragColor = vec4((vColor.rgb*tex.rgb), tex.a * vColor.a );\n    }",
                ],
                null,
                null
              )),
                (t.b = {}),
                (t.a.attributes = [
                  {
                    loc: e.getAttribLocation(t.a.program, "aPosition"),
                    type: e.FLOAT,
                    size: 3,
                    offset: 0,
                    stride: 36,
                  },
                  {
                    loc: e.getAttribLocation(t.a.program, "aColor"),
                    type: e.FLOAT,
                    size: 4,
                    offset: 12,
                    stride: 36,
                  },
                  {
                    loc: e.getAttribLocation(t.a.program, "aTexcoord0"),
                    type: e.FLOAT,
                    size: 2,
                    offset: 28,
                    stride: 36,
                  },
                ]),
                (t.c = this.W),
                (t.d = this.X),
                (this.ab[r] = t);
            }
            var i = this.U.j[r];
            if (i <= -1 || i > this.a.ay.length) continue;
            let n = this.a.ay[i];
            if (!n.f || !n.f.e) continue;
            let s = r;
            s >= this.U.k.length && (s = 0);
            let a = this.a.ax[this.U.k[s]];
            (this.ab[r].b.uViewMatrix = this.a.aT.viewMatrix),
              (this.ab[r].b.uProjMatrix = this.a.aT.projMatrix),
              (this.ab[r].b.uTexture = n.f.d),
              (this.ab[r].h = !1),
              (this.ab[r].f = !1),
              (this.ab[r].e = bl[a.b]),
              (this.ab[r].i = !this.a.bZ);
            let o =
              this.d > this.e
                ? 2 * (this.d - this.e) + 2
                : 2 * (this.c.length + this.d - this.e) + 2;
            (this.ab[r].j = e.TRIANGLE_STRIP),
              (this.ab[r].k = o),
              (this.ab[r].l = 2 * this.e * 2),
              t.push(this.ab[r]);
          }
        }
      },
      ml =
        "uniform float x;\r\nuniform float y;\r\nuniform float width;\r\nuniform float height;\r\n\r\nattribute vec2 aTextCoord;\r\nvarying vec2 vTextCoords;\r\nvoid main() {\r\n    vTextCoords = aTextCoord;\r\n\r\n    vec2 pos = vec2(\r\n        (x + aTextCoord.x*width)* 2.0 - 1.0,\r\n        (y + aTextCoord.y*height)* 2.0 - 1.0\r\n    );\r\n\r\n    gl_Position = vec4(pos.x, pos.y, 0, 1);\r\n}";
    class vl {
      constructor() {
        (this.a = null), (this.b = null), (this.c = null);
      }
      d() {
        null != this.a && this.a.g(),
          null != this.b && this.b.g(),
          null != this.c && this.c.g();
      }
      e() {
        return (
          !(this.a && !this.a.f()) &&
          !(this.b && !this.b.f()) &&
          !(this.c && !this.c.f())
        );
      }
    }
    class xl {
      constructor() {
        (this.a = null),
          (this.b = null),
          (this.c = null),
          (this.d = {}),
          (this.i = new li()),
          (this.j = null),
          (this.k = null);
      }
    }
    class Tl {
      constructor(t, e, i) {
        (this.e = null),
          (this.i = !1),
          (this.f = t),
          (this.g = e),
          (this.h = i),
          (this.e = (function (t) {
            let e = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, e),
              t.texImage2D(
                t.TEXTURE_2D,
                0,
                t.RGBA,
                1,
                1,
                0,
                t.RGBA,
                t.UNSIGNED_BYTE,
                new Uint8Array([0, 0, 0, 0])
              ),
              t.bindTexture(t.TEXTURE_2D, null);
            let i = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, i),
              t.texImage2D(
                t.TEXTURE_2D,
                0,
                t.RGBA,
                1,
                1,
                0,
                t.RGBA,
                t.UNSIGNED_BYTE,
                new Uint8Array([0, 0, 0, 255])
              ),
              t.bindTexture(t.TEXTURE_2D, null);
            let r = new xl();
            return (
              (r.j = e),
              (r.k = i),
              (r.a = Ke(
                t,
                [
                  ml,
                  "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\nuniform int layer;\r\n\r\nfloat overlayBlend(float a, float b) {\r\n    if (b > 0.5) {\r\n        return (1.0 - (1.0 - 2.0 * (a - 0.5)) * (1.0 - b));\r\n    } else {\r\n        return ((2.0 * a) * b);\r\n    }\r\n}\r\n\r\nfloat alphaStraightBlend(float a, float b, float alpha) {\r\n    return (a * alpha) + (b * (1.0 - alpha));\r\n}\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n    if (uBlendMode == 1) {\r\n        // Blit (we do nothing?)\r\n        //if (diffuse.a < 0.001) discard;\r\n\r\n        //vec4 finalColor = diffuse;\r\n\r\n        //diffuse = vec4(finalColor.rgb, finalColor.a);\r\n    } else if (uBlendMode == 2) {\r\n        // Multiply\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec4 multTexture = diffuse;\r\n        vec3 finalColor = (backGround.rgb * multTexture.rgb);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    } else if (uBlendMode == 3) {\r\n        // Overlay\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec4 overlayTex = diffuse;\r\n\r\n        vec3 finalColor = vec3(\r\n            overlayBlend(overlayTex.r, backGround.r),\r\n            overlayBlend(overlayTex.g, backGround.g),\r\n            overlayBlend(overlayTex.b, backGround.b)\r\n        );\r\n\r\n        vec3 mainTexVisible = backGround.rgb * (1.0 - overlayTex.a);\r\n        vec3 overlayTexVisible = finalColor.rgb * (overlayTex.a);\r\n        finalColor = (mainTexVisible + overlayTexVisible);\r\n\r\n        diffuse = vec4(finalColor, backGround.a);\r\n    } else if (uBlendMode == 5) {\r\n        // AlphaStraight\r\n        vec4 overlayTex = diffuse;\r\n\r\n        //float alphaMult = 1.0;\r\n        //vec3 finalColor = vec3(\r\n        //    alphaStraightBlend(overlayTex.r, backGround.r, alphaMult*overlayTex.a),\r\n        //    alphaStraightBlend(overlayTex.g, backGround.g, alphaMult*overlayTex.a),\r\n        //    alphaStraightBlend(overlayTex.b, backGround.b, alphaMult*overlayTex.a)\r\n        //);\r\n        vec3 finalColor = overlayTex.rgb * overlayTex.a + backGround.rgb * (1.0 - overlayTex.a);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    } else if (uBlendMode == 0 || uBlendMode == 4 || uBlendMode == 6 || uBlendMode == 7) {\r\n        // default, Screen, InferAlphaBlend, Unknown1\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec3 finalColor = mix(backGround.rgb, diffuse.rgb, diffuse.a);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    }\r\n\r\n    gl_FragColor = diffuse;\r\n}",
                ],
                null,
                null
              )),
              (r.b = Ke(
                t,
                [
                  ml,
                  "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 specular = texture2D( uSpecularTexture, vTextCoords.xy );\r\n    if (diffuse.a < 0.001) discard;\r\n    gl_FragColor = vec4(specular.rgb, 1.0);\r\n}",
                ],
                null,
                null
              )),
              (r.c = Ke(
                t,
                [
                  ml,
                  "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\nuniform float emissiveAlphaOverride;\r\nuniform int layer;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 emissive = texture2D( uEmissiveTexture, vTextCoords.xy );\r\n    vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n    if (diffuse.a < 0.001) discard;\r\n//    if (emissive.a < 0.001) discard;\r\n\r\n    //TODO: This is a hack from what was observed in Nightborne texture customization with tatoos.\r\n    //TODO: But Maybe switch should be over layer or something else instead of blend\r\n    float alpha = 1.0;\r\n\r\n    if (emissiveAlphaOverride > -1.0) {\r\n        alpha = emissiveAlphaOverride;\r\n    } else if (layer <= 1) {\r\n        alpha = 0.0;\r\n    } else {\r\n        alpha = emissive.a;\r\n    }\r\n\r\n    gl_FragColor = vec4(emissive.rgb, alpha);\r\n}",
                ],
                null,
                null
              )),
              (r.d = {}),
              (r.f = t.createBuffer()),
              t.bindBuffer(t.ARRAY_BUFFER, r.f),
              t.bufferData(
                t.ARRAY_BUFFER,
                new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                t.STATIC_DRAW
              ),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              (r.e = t.createBuffer()),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.e),
              t.bufferData(
                t.ELEMENT_ARRAY_BUFFER,
                new Int16Array([0, 1, 2, 1, 3, 2]),
                t.STATIC_DRAW
              ),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
              (r.g = t.createFramebuffer()),
              (r.h = {
                loc: t.getAttribLocation(r.a.program, "aTextCoord"),
                type: t.FLOAT,
                size: 2,
                offset: 0,
                stride: 0,
              }),
              r
            );
          })(t));
      }
      j() {
        let t = this.f;
        this.d && t.deleteTexture(this.d),
          this.a && t.deleteTexture(this.a),
          this.b && t.deleteTexture(this.b),
          this.c && t.deleteTexture(this.c),
          (this.d = t.createTexture()),
          t.bindTexture(t.TEXTURE_2D, this.d),
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            t.RGBA,
            this.g,
            this.h,
            0,
            t.RGBA,
            t.UNSIGNED_BYTE,
            null
          ),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
          (this.a = t.createTexture()),
          t.bindTexture(t.TEXTURE_2D, this.a),
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            t.RGBA,
            this.g,
            this.h,
            0,
            t.RGBA,
            t.UNSIGNED_BYTE,
            null
          ),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
          (this.b = t.createTexture()),
          t.bindTexture(t.TEXTURE_2D, this.b),
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            t.RGBA,
            this.g,
            this.h,
            0,
            t.RGBA,
            t.UNSIGNED_BYTE,
            null
          ),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
          (this.c = t.createTexture()),
          t.bindTexture(t.TEXTURE_2D, this.c),
          t.texImage2D(
            t.TEXTURE_2D,
            0,
            t.RGBA,
            this.g,
            this.h,
            0,
            t.RGBA,
            t.UNSIGNED_BYTE,
            null
          ),
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
          t.bindTexture(t.TEXTURE_2D, null),
          t.bindFramebuffer(t.FRAMEBUFFER, this.e.g),
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            this.a,
            0
          ),
          t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            this.b,
            0
          ),
          t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            this.c,
            0
          ),
          t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
          t.useProgram(this.e.b.program),
          t.bindBuffer(t.ARRAY_BUFFER, this.e.f),
          t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.e.e),
          this.e.i.disableAll(),
          this.e.i.enable(t, [this.e.h]),
          t.viewport(0, 0, this.g, this.h);
      }
      k(t, e, i, r, n, s, a, o) {
        let l = this.f;
        (this.e.d.x = e),
          (this.e.d.y = i),
          (this.e.d.width = r),
          (this.e.d.height = n),
          (null == t.b && null == t.c) || (this.i = !0);
        let h = 0;
        1 == s
          ? (h = 1)
          : 4 == s
          ? (h = 2)
          : 6 == s
          ? (h = 3)
          : 7 == s
          ? (h = 4)
          : 9 == s
          ? (h = 5)
          : 15 == s
          ? (h = 6)
          : 16 == s && (h = 7),
          (this.e.d.uBlendMode = h),
          (this.e.d.screenResolution = new Float32Array([this.g, this.h])),
          (this.e.d.uDiffuseTexture = null != t.a ? t.a.d : this.e.j),
          (this.e.d.uSpecularTexture = null != t.b ? t.b.d : this.e.j),
          (this.e.d.uEmissiveTexture = null != t.c ? t.c.d : this.e.k),
          (this.e.d.renderResultTexture = null != this.d ? this.d : this.e.j),
          (this.e.d.layer = a),
          (this.e.d.emissiveAlphaOverride = o),
          l.disable(l.CULL_FACE),
          l.disable(l.DEPTH_TEST),
          l.disable(l.BLEND),
          l.useProgram(this.e.a.program),
          l.framebufferTexture2D(
            l.FRAMEBUFFER,
            l.COLOR_ATTACHMENT0,
            l.TEXTURE_2D,
            this.a,
            0
          ),
          l.bindTexture(l.TEXTURE_2D, this.d),
          l.copyTexImage2D(l.TEXTURE_2D, 0, l.RGBA, 0, 0, this.g, this.h, 0),
          l.bindTexture(l.TEXTURE_2D, null),
          Ye(this.e.a, this.e.d),
          l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0),
          l.useProgram(this.e.b.program),
          l.framebufferTexture2D(
            l.FRAMEBUFFER,
            l.COLOR_ATTACHMENT0,
            l.TEXTURE_2D,
            this.b,
            0
          ),
          l.bindTexture(l.TEXTURE_2D, this.d),
          l.copyTexImage2D(l.TEXTURE_2D, 0, l.RGBA, 0, 0, this.g, this.h, 0),
          l.bindTexture(l.TEXTURE_2D, null),
          Ye(this.e.b, this.e.d),
          l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0),
          l.useProgram(this.e.c.program),
          l.framebufferTexture2D(
            l.FRAMEBUFFER,
            l.COLOR_ATTACHMENT0,
            l.TEXTURE_2D,
            this.c,
            0
          ),
          l.bindTexture(l.TEXTURE_2D, this.d),
          l.copyTexImage2D(l.TEXTURE_2D, 0, l.RGBA, 0, 0, this.g, this.h, 0),
          l.bindTexture(l.TEXTURE_2D, null),
          Ye(this.e.c, this.e.d),
          l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0),
          l.useProgram(null);
      }
      l() {
        let t = this.f;
        t.bindFramebuffer(t.FRAMEBUFFER, null),
          t.enable(t.CULL_FACE),
          t.enable(t.DEPTH_TEST);
      }
      m(t) {
        if (0 == t) return this.a;
        if (1 == t) return this.b;
        if (2 == t) return this.c;
        throw new Error("unknown usage " + t);
      }
      n() {
        let t = this.f;
        this.d && t.deleteTexture(this.d),
          this.a && t.deleteTexture(this.a),
          this.b && t.deleteTexture(this.b),
          this.c && t.deleteTexture(this.c),
          (this.a = null),
          (this.b = null),
          (this.c = null),
          (this.d = null),
          (this.e = null),
          (this.f = null);
      }
    }
    class wl {
      constructor(t, e) {
        (this.a = t), (this.b = e);
      }
      c() {
        const t = [];
        for (let e of this.b.Options)
          for (let i of e.Choices)
            for (let e of i.Elements)
              e.SkinnedModel && t.push(e.SkinnedModel.CollectionFileDataID);
        const e = new Set(t);
        if (0 != e.size)
          for (let t of e) {
            let e = { type: nr.PATH, id: t, parent: this.a, shoulder: 0 };
            this.a.A[t] = new kl(this.a.aT, this.a.l, e, 0, !1, !1, !1);
          }
      }
      d(t) {
        return Zo.a(
          this.a,
          this.b.TextureFiles[t],
          this.a.p,
          this.a.q,
          this.a.o
        );
      }
      e(t) {
        WH.debug("applyCustomization options", t),
          (this.a.O = []),
          this.a.bw(0);
        for (let t = 0; t < this.a.L.length; t++) this.a.L[t] = -1;
        for (let t in this.a.A) {
          let e = this.a.A[t];
          for (let t = 0; t < e.L.length; t++) (e.L[t] = -1), (e.M[t] = !1);
        }
        for (let e = 0; e < t.length; e++) {
          let i = this.b.Options.find((i) => i.Id == t[e].optionId);
          if ((WH.debug("option", i), i)) {
            let r = i.Choices.find((i) => i.Id == t[e].choiceId);
            if ((WH.debug("choice", r), r)) {
              let e = r.Elements.filter(
                (e) =>
                  e.BoneSet &&
                  e.BoneSet.BoneFileDataID &&
                  (0 == e.VariationChoiceID ||
                    t.some((t) => t.choiceId == e.VariationChoiceID))
              );
              e.length > 0 && this.a.bw(e[0].BoneSet.BoneFileDataID);
              let n = r.Elements.filter(
                (e) =>
                  e.Material &&
                  (0 == e.VariationChoiceID ||
                    t.some((t) => t.choiceId == e.VariationChoiceID))
              );
              n.sort((t, e) => e.VariationChoiceID - t.VariationChoiceID),
                n.forEach((t) => {
                  WH.debug("element material", t);
                  let e = this.d(t.Material.MaterialResourcesID);
                  if (!e)
                    return void WH.debug(
                      "element material: can't get texture files for material",
                      t
                    );
                  let i = this.b.TextureLayers.find(
                    (e) => e.ChrModelTextureTargetID == t.Material.TextureTarget
                  );
                  i
                    ? this.a.E[t.Material.TextureTarget]
                      ? WH.debug(
                          "texture for target",
                          t.Material.TextureTarget,
                          "already registered"
                        )
                      : (this.a.E[t.Material.TextureTarget] = this.a.bC(
                          i.TextureType,
                          e
                        ))
                    : WH.debug(
                        "element material: can't get texture layer for material",
                        t
                      );
                }),
                r.Elements.filter(
                  (e) =>
                    e.Geoset &&
                    (0 == e.VariationChoiceID ||
                      t.some((t) => t.choiceId == e.VariationChoiceID))
                ).forEach((t) => {
                  WH.debug("element geoset", t), this.a.bF(t.Geoset);
                }),
                r.Elements.filter(
                  (e) =>
                    e.SkinnedModel &&
                    (0 == e.VariationChoiceID ||
                      t.some((t) => t.choiceId == e.VariationChoiceID))
                ).forEach((t) => {
                  WH.debug("element skinnedmodel", t),
                    this.a.A[t.SkinnedModel.CollectionFileDataID] &&
                      this.a.A[t.SkinnedModel.CollectionFileDataID].bG(
                        t.SkinnedModel
                      );
                });
              let s = r.Elements.find(
                (e) =>
                  0 != e.CondModelFileDataId &&
                  (0 == e.VariationChoiceID ||
                    t.some((t) => t.choiceId == e.VariationChoiceID))
              );
              if (24 == i.Id || 353 == i.Id)
                if (s && !this.a.c) {
                  WH.debug("element condModel", s);
                  let e = this.a.aT,
                    i = this.a.a,
                    r = e.models.indexOf(this.a);
                  if (r > -1) {
                    e.models.splice(r, 1),
                      WH.debug("test 1!", t, e.options, i),
                      (e.options.charCustomization = this.a.r);
                    let n = new kl(
                      e,
                      e.options,
                      i,
                      r,
                      !0,
                      !1,
                      !1,
                      s.CondModelFileDataId
                    );
                    return (n.r = this.a.r), e.models.push(n), void this.a.bb();
                  }
                } else if (!s && this.a.c) {
                  let e = this.a.aT,
                    i = this.a.a,
                    r = e.models.indexOf(this.a);
                  if (r > -1) {
                    e.models.splice(r, 1),
                      WH.debug("test 2!", t, e.options, i),
                      (e.options.charCustomization = this.a.r);
                    let n = new kl(e, e.options, i, r, !0, !1, !1);
                    return (n.r = this.a.r), e.models.push(n), void this.a.bb();
                  }
                }
              r.Elements.filter(
                (e) =>
                  e.ChrCustItemGeoModifyID &&
                  (0 == e.VariationChoiceID ||
                    t.some((t) => t.choiceId == e.VariationChoiceID))
              ).forEach((t) => {
                WH.debug("element ChrCustItemGeoModify", t),
                  this.a && this.a.O.push(t.ChrCustItemGeoModifyID);
              });
            }
          }
        }
        if (!this.a.E[10]) {
          let e = this.b.Options.find((t) => t.Id == this.b.HairStyleOptionId);
          if (e) {
            let i = e.Choices[1];
            if (i) {
              let e = i.Elements.filter(
                (e) =>
                  e.Material &&
                  10 == e.Material.TextureTarget &&
                  (0 == e.VariationChoiceID ||
                    t.some((t) => t.choiceId == e.VariationChoiceID))
              );
              if (e.length > 0) {
                let t = this.d(e[0].Material.MaterialResourcesID);
                t && (this.a.E[e[0].Material.TextureTarget] = this.a.bC(6, t));
              }
            }
          }
        }
      }
      f() {
        let t = [];
        for (let e = 0; e < this.b.Options.length; e++) {
          let i = this.b.Options[e];
          if (i) {
            let e = i.Choices[0];
            e && t.push({ optionId: i.Id, choiceId: e.Id });
          }
        }
        this.e(t);
      }
      g(t) {
        let e = { options: t, sheathMain: -1, sheathOff: -1 };
        for (let t of this.b.Options)
          e.options.some((e) => e.optionId == t.Id) ||
            e.options.push({ optionId: t.Id, choiceId: t.Choices[0].Id });
        return e;
      }
    }
    const yl = function (t, e) {
        const i = Math.abs(t),
          r = Math.abs(e);
        return (
          Number((i - Math.floor(i / r) * r).toPrecision(8)) * Math.sign(t)
        );
      },
      Al = 51,
      El = 5200,
      Ml = "CharModel",
      Cl = "Stand";
    class Sl {
      constructor(t, e, i, r, n, s, a, o) {
        (this.f = !1),
          (this.s = 0),
          (this.t = null),
          (this.u = null),
          (this.F = []),
          (this.O = []),
          (this.T = new Xr()),
          (this.V = !1),
          (this.ap = []),
          (this.aI = []),
          (this.aJ = []),
          (this.aS = !1),
          (this.aU = null),
          (this.aV = null),
          (this.aW = null),
          (this.aY = []),
          (this.bZ = !1);
        var l = this;
        if (
          ((l.f = n),
          (l.aT = t),
          (l.a = i),
          (l.b = r),
          (l.c = o),
          (l.d = !1),
          (l.g = !0),
          (l.h = !0),
          (this.i = !1),
          (l.af = s),
          (l.l = e),
          "classic" == l.l.gameDataEnv
            ? ((sr[14] = 14), (sr[15] = 15))
            : ((sr[14] = 22), (sr[15] = 22)),
          (l.j = null),
          (l.m =
            l.l.mount && l.l.mount.type == nr.NPC && l.l.mount.id == l.a.id),
          (l.k = null),
          (l.n = l.l.pet && l.l.pet.type == nr.NPC && l.l.pet.id == l.a.id),
          l.a.type == nr.CHARACTER &&
            l.l.mount &&
            l.l.mount.type == nr.NPC &&
            l.l.mount.id &&
            ((l.l.mount.parent = l),
            (l.j = new Sl(t, e, l.l.mount, 0, !1, !1, !1))),
          l.a.type == nr.CHARACTER &&
            l.l.pet &&
            l.l.pet.type == nr.NPC &&
            l.l.pet.id &&
            ((l.l.pet.parent = l),
            (l.k = new Sl(t, e, l.l.pet, 0, !1, !1, !1))),
          l.l.extraModels && !l.a.parent)
        ) {
          l.B = [];
          const i = l.l.extraModels;
          if ($.isArray(i))
            for (let r = 0; r < i.length; ++r) {
              const n = { type: nr.PATH, id: i[r][0], parent: l, shoulder: -1 };
              l.B.push(new Sl(t, e, n, 0, !1, !1, !1));
            }
        }
        (l.o = 0),
          (l.p = -1),
          (l.q = l.l.cls ? parseInt(l.l.cls) : 0),
          (l.v = null),
          (l.w = l.a.parent || null),
          (l.y = new Map()),
          (this.z = [null, null]),
          (l.x = !1),
          (l.A = {}),
          (l.C = {}),
          (l.aL = {}),
          (l.aM = null),
          (l.D = {}),
          (l.E = {}),
          (l.I = -1),
          (l.J = -1),
          (l.K = new Array(Al)),
          (l.L = new Array(Al)),
          (l.M = new Array(Al)),
          (l.N = [
            1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1,
            1, 0, 0, 1, 0, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
          ]),
          (l.P = null),
          (l.Q = 0);
        for (let t = 0; t < Al; t++) l.K[t] = 100 * t + l.N[t];
        (l.R = 0),
          (l.S = 0),
          (l.T.c = 0),
          (l.T.a.a = -1),
          (l.U = !1),
          (l.W = zi()),
          (l.X = _r(1, 1, 1, 1)),
          (l.Y = [0.35, 0.35, 0.35, 1]),
          (l.Z = [1, 1, 1, 1]),
          (l.aa = [0.35, 0.35, 0.35, 1]),
          (l.ab = di()),
          (l.ac = di()),
          (l.ad = di()),
          Si(l.ab, [5, -3, 3]),
          Si(l.ac, [5, 5, 5]),
          Si(l.ad, [-5, -5, -5]),
          (l.ae = !1),
          (l.ag = _i(0, 0, 0)),
          (l.ah = _i(0, 0, 0)),
          (l.ai = _i(0, 0, 0)),
          (l.boundsSize = _i(0, 0, 0)),
          (l.am = null),
          (l.an = null),
          (l.ap = null),
          (l.aq = null),
          (l.ar = null),
          (l.as = null),
          (l.at = null),
          (l.au = null),
          (l.av = null),
          (l.aw = null),
          (l.ax = null),
          (l.ay = null),
          (l.az = null),
          (l.aA = null),
          (l.aB = null),
          (l.aC = null),
          (l.aD = null),
          (l.aE = null),
          (l.aF = null),
          (l.aG = null),
          (l.aH = null),
          (l.aI = null),
          (l.aJ = null),
          (l.aO = zi()),
          (l.aP = di()),
          (l.aQ = di()),
          (l.aR = br()),
          a || l.bV();
      }
      ba(t) {
        if (this[t]) {
          for (var e = this[t], i = 0; i < e.length; ++i)
            e[i] && e[i].destroy && e[i].destroy(), (e[i] = null);
          this[t] = null;
        }
      }
      bb() {
        var t = this;
        if (
          ((this.aS = !0), (this.d = !1), t.aM && t.aM.d(), (t.aM = null), t.D)
        )
          for (const e in t.D) t.D[e].d(), delete t.D[e];
        if (t.C) for (const e in t.C) t.C[e].g(), delete t.C[e];
        if (t.aL) for (const e in t.aL) t.aL[e].n(), delete t.aL[e];
        if (
          (t.an && (t.an = null),
          t.aq && (t.aq = null),
          t.as && (t.as = null),
          t.at && (t.at = null),
          t.aw && (t.aw = null),
          t.az && (t.az = null),
          t.aB && (t.aB = null),
          t.aC && (t.aC = null),
          t.aE && (t.aE = null),
          t.aH && (t.aH = null),
          t.ax)
        )
          for (let e = 0; e < t.ax.length; ++e) t.ax[e] = null;
        if (
          ((t.ax = null),
          this.ba("vertices"),
          this.ba("animations"),
          this.ba("bones"),
          this.ba("meshes"),
          this.ba("texUnits"),
          this.ba("materials"),
          this.ba("textureAnims"),
          this.ba("attachments"),
          this.ba("colors"),
          this.ba("alphas"),
          this.ba("particleEmitters"),
          this.ba("ribbonEmitters"),
          this.ba("skins"),
          this.ba("faces"),
          this.ba("hairs"),
          (this.ap = null),
          t.y &&
            t.y.forEach((e, i) => {
              e.y(), t.y.set(i, null);
            }),
          t.j && t.j.bb(),
          (t.j = null),
          t.k && t.k.bb(),
          (t.k = null),
          t.A)
        ) {
          for (const e in t.A) t.A[e].bb(), delete t.A[e];
          t.A = null;
        }
        (t.a = null),
          (t.y = null),
          (t.C = null),
          (t.D = null),
          (t.aL = null),
          (t.K = null),
          (t.W = null),
          (t.Y = null),
          (t.Z = null),
          (t.aa = null),
          (t.ab = null),
          (t.ac = null),
          (t.ad = null),
          (t.ag = null),
          (t.ah = null),
          (t.ai = null),
          (t.boundsSize = null),
          (t.aO = null),
          (t.aP = null),
          (t.aQ = null),
          (t.aR = null);
      }
      getNumAnimations() {
        const t = this.j ? this.j : this;
        return t.ap ? t.ap.length + 1 : 0;
      }
      getAnimation(t) {
        const e = this.j ? this.j : this;
        return e.ap && t > -1 && t < e.ap.length
          ? e.ap[t].j
          : t == e.ap.length
          ? Ml
          : "";
      }
      resetAnimation() {
        (this.j ? this.j : this).setAnimation(Cl);
      }
      setAnimPaused(t) {
        var e;
        (this.U = t),
          null === (e = this.j) || void 0 === e || e.setAnimPaused(t),
          this.F.forEach((e) => e.f(t));
      }
      setAnimNoSubAnim(t) {
        this.V = t;
      }
      bh(t) {
        var e;
        null === (e = this.k) || void 0 === e || e.setAnimation(t);
      }
      setItems(t) {
        WH.debug("setItems", t);
        const e = [];
        for (let i = 0; i < t.length; i++)
          e.push([t[i].slot, t[i].display, t[i].visual]);
        e.forEach((t) => {
          const e = [parseInt(t[0]), parseInt(t[1])];
          this.l.items.push(e);
        }),
          this.bQ(e),
          (this.x = !0);
      }
      attachList(t) {
        WH.debug("attachList", t);
        const e = t.split(","),
          i = [];
        for (let t = 0; t < e.length; t += 2) i.push([e[t], e[t + 1]]);
        i.forEach((t) => {
          const e = [parseInt(t[0]), parseInt(t[1])];
          this.l.items.push(e);
        }),
          this.bQ(i),
          (this.x = !0);
      }
      clearSlots(t) {
        WH.debug("clearSlots", t);
        const e = t.split(",");
        for (let t = 0; t < e.length; ++t) {
          this.bS(parseInt(e[t]));
          const i = [];
          this.l.items.forEach((e) => {
            0 != this.l.items[t].indexOf(parseInt(e)) && i.push(e);
          }),
            (this.l.items = i);
        }
        this.bP(), (this.x = !0);
      }
      setShouldersOverride(t) {
        if ((WH.debug("setShouldersOverride", t), !t || 2 != t.length)) return;
        for (let t = 0; t < 2; t++) {
          const e = this.z[t];
          e && e.y(), (this.z[t] = null);
        }
        for (let e = 0; e < 2; e++)
          if (null != t[e]) {
            const i = new Jo(this, 3, t[e], this.o, this.p);
            let r = 0;
            (r = 0 == e ? 1 : 2), i.C(r), (this.z[e] = i);
          }
        const e = this.y.get(3);
        if (e) {
          let t = 3;
          for (let e = 0; e < 2; e++) this.z[e] && (t &= ~(1 << e));
          e.C(t);
        }
      }
      setSheath(t, e) {
        (this.I = t), (this.J = e), this.bP();
      }
      setAppearance(t) {
        var e;
        if (this.D) for (const t in this.D) this.D[t].d(), delete this.D[t];
        if (this.E) for (const t in this.E) this.E[t].d(), delete this.E[t];
        (this.r = t),
          (this.I = t.sheathMain),
          (this.J = t.sheathOff),
          null === (e = this.G) || void 0 === e || e.e(t.options),
          (this.x = !0),
          this.bD(),
          this.bP();
      }
      setCustomizationsLoadedCallback(t) {
        this.H = t;
      }
      setModelLoadedCallback(t) {
        this.e = t;
      }
      isLoaded() {
        return this.j ? this.j.d && this.d : this.d;
      }
      setParticlesEnabled(t) {
        (this.g = t),
          this.y.forEach((e) => {
            if (e.i)
              for (let i = 0; i < e.i.length; ++i)
                if (
                  e.i[i] &&
                  (e.i[i].e.setParticlesEnabled(t), e.s[i] && e.s[i].b)
                ) {
                  const r = e.i[i].e;
                  for (let n = 0; n < e.s[i].b.length; n++)
                    r.aD &&
                      r.aD[n] &&
                      e.s[i].b[n] &&
                      e.s[i].b[n].e.setParticlesEnabled(t);
                }
          });
      }
      setRibbonsEnabled(t) {
        this.h = t;
      }
      getTexUnits() {
        return this.aN;
      }
      bu(t, e, i, r) {
        Bi(this.W, t),
          ji(this.W, this.W, e),
          i && Wi(this.W, this.W, i),
          r && ji(this.W, this.W, r);
      }
      bv(t, e) {
        let i = !1;
        const r = t == Ml;
        r && (t = Cl);
        for (let n = 0; n < this.ap.length; ++n) {
          const s = this.ap[n];
          if (s.j && s.j == t && 0 == s.b) {
            (i = !0),
              (e.a.a = n),
              (e.a.b = s),
              (e.a.c = 0),
              (e.b = new Yr()),
              (e.c = 0),
              (e.d = r),
              WH.debug("Set animation to", s.a, s.j);
            break;
          }
        }
        t == Cl || i || this.bv(Cl, e);
      }
      bw(t) {
        if (this.s == t) return;
        if (this.d)
          for (let t = 0; t < this.ar.length; t++) this.ar[t].x = null;
        if (((this.s = t), t <= 0)) return;
        let e = this.l.contentPath + "bone/" + t + ".bone",
          i = this;
        $.ajax({
          url: e,
          type: "GET",
          dataType: "binary",
          responseType: "arraybuffer",
          processData: !1,
          renderer: this.aT,
          success: function (t) {
            i.bx(t);
          },
          error: function (t, e, i) {
            console.log(i);
          },
        });
      }
      bx(t) {
        let e = new cl(t);
        e.getInt32();
        for (; e.position < e.buffer.byteLength; ) {
          let t = String.fromCharCode(
              e.getUint8(),
              e.getUint8(),
              e.getUint8(),
              e.getUint8()
            ),
            i = e.getUint32();
          if ("BIDA" == t) {
            let t = i / 2;
            this.t = new Array(t);
            for (let i = 0; i < t; i++) this.t[i] = e.getUint16();
          }
          if ("BOMT" == t) {
            let t = i / 64;
            this.u = new Array(t);
            for (let i = 0; i < t; i++) {
              let t = Li(
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat(),
                e.getFloat()
              );
              this.u[i] = t;
            }
          }
        }
        this.d && this.by();
      }
      by() {
        if (!(this.s <= 0) && this.t && this.t.length)
          for (let t = 0; t < this.t.length; t++)
            this.ar[this.t[t]].x = this.u[t];
      }
      setAnimation(t) {
        this.ap &&
          (this.j &&
            (this.j.setAnimation(t),
            (t = ir[this.j.a.id] ? "StealthStand" : "Mount")),
          this.bv(t, this.T),
          this.y.forEach((e) => {
            if (e.i)
              for (let i = 0; i < e.i.length; i++) e.i[i].e.setAnimation(t);
          }),
          this.F && this.F.forEach((e) => e.e(t)));
      }
      bA(t) {
        let e = this,
          i = e.aT.context;
        if (!e.am || !e.an) return;
        const r = 10 * e.am.length;
        if ((e.aU || (e.aU = new Float32Array(r)), t)) {
          var n = e.aU,
            s = e.am;
          for (let t = 0, e = 0; t < r; ++e)
            (n[t + 0] = s[e].i[0]),
              (n[t + 1] = s[e].i[1]),
              (n[t + 2] = s[e].i[2]),
              (n[t + 3] = s[e].j[0]),
              (n[t + 4] = s[e].j[1]),
              (n[t + 5] = s[e].j[2]),
              (n[t + 6] = s[e].c),
              (n[t + 7] = s[e].d),
              (n[t + 8] = s[e].e),
              (n[t + 9] = s[e].f),
              (t += 10);
        }
        e.aV
          ? (i.bindBuffer(i.ARRAY_BUFFER, e.aV),
            i.bufferSubData(i.ARRAY_BUFFER, 0, e.aU))
          : ((e.aV = i.createBuffer()),
            i.bindBuffer(i.ARRAY_BUFFER, e.aV),
            i.bufferData(i.ARRAY_BUFFER, e.aU, i.DYNAMIC_DRAW),
            (e.aW = i.createBuffer()),
            i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.aW),
            i.bufferData(
              i.ELEMENT_ARRAY_BUFFER,
              new Uint16Array(e.an),
              i.STATIC_DRAW
            ));
      }
      bB() {
        let t,
          e = this,
          i = _r(1, 1, 1, 1),
          r = e.ag,
          n = e.ah,
          s = e.aP;
        if ((mi(r, 9999, 9999, 999), mi(n, -9999, -9999, -9999), !e.av))
          return Hi(e.W), e.w || (e.aT.distance = 1), !1;
        for (let s = 0; s < e.av.length; ++s) {
          let a = e.av[s];
          if (!a.show) continue;
          if (
            ((i[0] = i[1] = i[2] = i[3] = 1),
            e.T.a.a > 0 &&
              (a.v && (i = a.v.g(e.T, this.aY)),
              a.w[0] && (i[3] *= a.w[0].d(e.T, this.aY))),
            i[3] < 0.01)
          )
            continue;
          let o = a.p;
          for (let i = 0; i < o.f; ++i)
            (t = e.am[e.an[o.e + i]].i), wi(r, r, t), yi(n, n, t);
        }
        for (const e in this.A) {
          const i = this.A[e];
          if (i && i.d && i.av && i.av.length > 0)
            for (let e = 0; e < i.av.length; ++e) {
              let s = i.av[e];
              if (!s.show) continue;
              let a = s.p;
              for (let e = 0; e < a.f; ++e)
                (t = i.am[i.an[a.e + e]].i), wi(r, r, t), yi(n, n, t);
            }
        }
        e.j &&
          e.j.d &&
          e.j.bB() &&
          (pi(r, Ai(r, e.j.ag, 1.1)),
          pi(n, Ai(n, e.j.ah, 1.1)),
          (n[2] *= 1.75)),
          e.a.type == nr.NPC && (Ai(r, r, e.v.Scale), Ai(n, n, e.v.Scale)),
          xi(e.boundsSize, n, r),
          Ei(e.ai, r, e.boundsSize, 0.5);
        let a,
          o,
          l = e.boundsSize[2];
        const h = e.v && e.v.Scale ? e.v.Scale : 1;
        if (
          (e.a.type != nr.ITEM
            ? ((a = e.boundsSize[1]), (o = e.boundsSize[0]))
            : ((a = e.boundsSize[0]), (o = e.boundsSize[1])),
          !e.w)
        ) {
          const t = e.aT.width / e.aT.height,
            i = 2 * Math.tan((e.aT.fov / 2) * 0.0174532925),
            r = (1.2 * l) / i,
            n = (1.2 * a) / (i * t);
          e.aT.distance = Math.max(Math.max(r, n), 2 * o);
        }
        return (
          Hi(e.W),
          e.a.type != nr.ITEM && Xi(e.W, e.W, Math.PI / 2),
          Wi(e.W, e.W, Ci(s, e.ai)),
          mi(e.aP, h, h, h),
          Vi(e.W, e.W, e.aP),
          !0
        );
      }
      bC(t, e) {
        let i = new vl();
        return (
          e.a > 0 && (i.a = new Lo(this, e.a)),
          e.b > 0 && (i.b = new Lo(this, e.b)),
          e.c > 0 && (i.c = new Lo(this, e.c)),
          i
        );
      }
      bD() {
        if (!this.aS)
          if (
            (this.a.type != nr.CHARACTER &&
              this.a.type != nr.NPC &&
              this.a.type != nr.HUMANOIDNPC) ||
            this.o < 1
          ) {
            if ((this.bI(), this.a.type == nr.HELM)) {
              const t = this.v;
              this.bL(t.Item.AttachGeosetGroup[0], 27),
                this.bL(t.Item.AttachGeosetGroup[1], 21);
            }
            if (this.a.type == nr.SHOULDER) {
              const t = this.v;
              this.bL(t.Item.AttachGeosetGroup[0], 26);
            }
          } else this.bM(), this.aM || (this.x = !0);
      }
      bE(t) {
        t && (this.K[t.geosetType] = 100 * t.geosetType + t.geosetID);
      }
      bF(t) {
        t && (this.L[t.GeosetType] = 100 * t.GeosetType + t.GeosetID);
      }
      bG(t) {
        t &&
          ((this.L[t.GeosetType] = 100 * t.GeosetType + t.GeosetID),
          (this.M[t.GeosetType] = 0 == (1 & t.Flags)));
      }
      bH(t, e, i) {
        if (!this.av || 0 == this.av.length) return !1;
        let r;
        for (let n = 0; n < this.av.length; ++n)
          (r = this.av[n]), r.meshId >= t && r.meshId <= e && (r.show = i);
        return !0;
      }
      bI() {
        if ((this.bH(0, 0, !0), 0 != this.Q && (this.bH(1, 1699, !1), this.P)))
          for (let t of this.P) {
            let e = 100 * (t.GeosetIndex + 1),
              i = e + t.GeosetValue;
            this.bH(e, e + 99, !1), this.bH(i, i, !0);
          }
      }
      bJ(t, e) {
        let i = [];
        for (let t = 0; t < this.ar.length; t++) i[this.ar[t].g] = t;
        let r = t.ar;
        if (r) {
          for (let t = 0; t < r.length; t++) {
            let e = i[r[t].g];
            if ("number" != typeof e) continue;
            let n = r[t].m,
              s = this.ar[e].m;
            (r[t].u = !0), Bi(n, s);
          }
          Hi(this.aO), t.bu(this.W, this.aO), t.cc(), t.ce(e);
        }
      }
      bK(t, e) {
        if (!this.av) return;
        let i = e + 1,
          r = t > 0 ? e + t : i,
          n = this.av.some((t) => t.meshId == r);
        (r = n ? r : i), this.bH(r, r, !0);
      }
      bL(t, e) {
        if (!this.av) return;
        let i = 100 * e,
          r = i + this.N[e] + t,
          n = this.av.some((t) => t.meshId == r);
        (r = n ? r : 100 * e + 1), this.bH(i, i + 99, !1), this.bH(r, r, !0);
      }
      bM() {
        var t = this;
        if (!t.av || 0 == t.av.length) return;
        for (let e = 0; e < Al; e++) t.K[e] = 100 * e + t.N[e];
        t.bH(0, El, !1), t.bH(0, 0, !0);
        for (let e = 0; e < t.L.length; e++)
          -1 != this.L[e] && (this.K[e] = this.L[e]);
        for (let e = 0; e < t.K.length; e++) t.bH(t.K[e], t.K[e], !0);
        t.y.forEach((t) => {
          if (t && t.r) {
            let e = t.r;
            e.bH(0, El, !1),
              1 == t.b
                ? (e.bK(t.k[0], 2700), e.bK(t.k[1], 2100))
                : 3 == t.b
                ? e.bK(t.k[0], 2600)
                : 4 == t.b
                ? (e.bK(t.k[0], 800), e.bK(t.k[1], 1e3))
                : 5 == t.b || 20 == t.b
                ? (e.bK(t.k[0], 800),
                  e.bK(t.k[1], 1e3),
                  e.bK(t.k[2], 1300),
                  e.bK(t.k[3], 2200),
                  e.bK(t.k[4], 2800))
                : 6 == t.b
                ? e.bK(t.k[0], 1800)
                : 7 == t.b
                ? (e.bK(t.k[0], 1100), e.bK(t.k[1], 900), e.bK(t.k[2], 1300))
                : 8 == t.b
                ? (e.bK(t.k[0], 500), e.bK(t.k[1], 2e3))
                : 10 == t.b
                ? (e.bK(t.k[0], 400), e.bK(t.k[1], 2300))
                : 16 == t.b
                ? e.bK(t.k[0], 1500)
                : 19 == t.b
                ? e.bK(t.k[0], 1200)
                : 9 == t.b && e.bK(t.k[0], 2300);
          }
        }),
          t.z.forEach((t) => {
            if (t && t.r) {
              let e = t.r;
              e.bH(0, El, !1), e.bK(t.k[0], 2600);
            }
          }),
          t.y.forEach((t) => {
            if (t && t.i)
              for (let e of t.i) {
                let i = e.e;
                1 == t.b
                  ? (i.bL(t.l[0], 27), i.bL(t.l[1], 21))
                  : 3 == t.b
                  ? i.bL(t.l[0], 26)
                  : 4 == t.b
                  ? (i.bL(t.l[0], 8), i.bL(t.l[1], 10))
                  : 5 == t.b || 20 == t.b
                  ? (i.bL(t.l[0], 8),
                    i.bL(t.l[1], 10),
                    i.bL(t.l[2], 13),
                    i.bL(t.l[3], 22),
                    i.bL(t.l[4], 28))
                  : 6 == t.b
                  ? i.bL(t.l[0], 18)
                  : 7 == t.b
                  ? (i.bL(t.l[0], 11), i.bL(t.l[1], 9), i.bL(t.l[2], 13))
                  : 8 == t.b
                  ? (i.bL(t.l[0], 5), i.bL(t.l[1], 20))
                  : 10 == t.b
                  ? (i.bL(t.l[0], 4), i.bL(t.l[1], 23))
                  : 16 == t.b
                  ? i.bL(t.l[0], 15)
                  : 19 == t.b
                  ? i.bL(t.l[0], 12)
                  : 9 == t.b && i.bL(t.l[0], 23);
              }
          }),
          t.z.forEach((t) => {
            if (t && t.i)
              for (let e of t.i) {
                let i = e.e;
                i.bL(t.l[0], 26),
                  t.m > 0 && (i.bH(2600, 2699, !1), i.bL(t.m, 26));
              }
          });
        let e = t.y.get(1),
          i = t.y.get(3),
          r = t.y.get(4),
          n = t.y.get(5),
          s = t.y.get(6),
          a = t.y.get(7),
          o = t.y.get(8),
          l = t.y.get(9),
          h = t.y.get(10),
          u = t.y.get(19),
          c = t.y.get(16);
        if (e) {
          const i = t.o,
            r = 0 == t.p ? e.w : e.x;
          if (r)
            for (let e = 0; e < r.length; e++)
              if (r[e].RaceId == i) {
                const n = r[e].GeosetGroup;
                if (5 == i && (1 == n || 2 == n)) continue;
                if (n < Al)
                  if (0 == n) t.bH(1, 99, !1);
                  else {
                    const e = 100 * n;
                    t.bH(e, e + 99, !1);
                  }
              }
        }
        if (e && e.i && e.m > 0)
          for (let t of e.i) {
            let i = t.e;
            i.bH(2600, 2799, !1), i.bL(e.m, 27);
          }
        if (i && i.i && i.m > 0)
          for (let t of i.i) {
            let e = t.e;
            e.bH(2600, 2699, !1), e.bL(i.m, 26);
          }
        if (s && s.i && s.m > 0)
          for (let t of s.i) {
            let e = t.e;
            e.bH(1800, 1899, !1), e.bL(s.m, 18);
          }
        let f = 0;
        if ((u && (f |= 16), h && h.k && h.k[0])) {
          let e = 401 + h.k[0];
          t.bH(401, 499, !1), t.bH(e, e, !0), (h.f += 2);
        } else if (n && n.k && n.k[0]) {
          let e = 801 + n.k[0];
          t.bH(e, e, !0);
        }
        if (!(n || s || l) && r && r.k && r.k[0]) {
          let e = 801 + r.k[0];
          t.bH(e, e, !0);
        }
        if (u)
          0 == (1048576 & u.h) && (t.bH(2200, 2299, !1), t.bH(2202, 2202, !0));
        else if (n && n.k && n.k[3]) {
          let e = 2201 + n.k[3];
          t.bH(2200, 2299, !1), t.bH(e, e, !0);
        }
        let d = !1;
        s && s.k && s.k[0] && (d = 0 != (512 & s.h));
        let b,
          g = !1,
          _ = !1;
        if (n && n.k && n.k[2]) {
          (_ = !0),
            t.bH(501, 599, !1),
            t.bH(902, 999, !1),
            t.bH(1100, 1199, !1),
            t.bH(1300, 1399, !1);
          let e = 1301 + n.k[2];
          t.bH(e, e, !0);
        } else if (a && a.k && a.k[2]) {
          (g = !0),
            t.bH(501, 599, !1),
            t.bH(902, 999, !1),
            t.bH(1100, 1199, !1),
            t.bH(1300, 1399, !1);
          let e = 1301 + a.k[2];
          t.bH(e, e, !0);
        } else if (o && o.k && o.k[0]) {
          t.bH(501, 599, !1), t.bH(901, 901, !0);
          let e = 501 + o.k[0];
          t.bH(e, e, !0);
        } else {
          let e;
          (e = a && a.k && a.k[1] ? 901 + a.k[1] : 901), t.bH(e, e, !0);
        }
        (b =
          o && o.k && o.k[1]
            ? 2e3 + o.k[1]
            : o && 0 == (1048576 & o.h)
            ? 2002
            : 2001),
          t.bH(2001, 2099, !1),
          t.bH(b, b, !0);
        let p = !1,
          m = _ || g;
        if (!m && u && u.k && u.k[0]) {
          let e;
          (p = !1),
            d ? ((p = !0), (e = 1203)) : ((p = !0), (e = 1201 + u.k[0])),
            t.bH(e, e, !0);
        } else
          16 & f &&
            (t.bH(1201, 1201, !0), m || (t.bH(1202, 1202, !0), (p = !0)));
        if (!p && !_)
          if (n && n.k && n.k[1]) {
            let e = 1001 + n.k[1];
            t.bH(e, e, !0);
          } else if (r && r.k && r.k[1]) {
            let e = 1001 + r.k[1];
            t.bH(e, e, !0);
          }
        if (!_ && a && a.k && a.k[0]) {
          let e = a.k[0],
            i = 1101 + e,
            r = this.av.some((t) => t.meshId == i);
          e > 2
            ? (t.bH(1300, 1399, !1), r ? t.bH(i, i, !0) : t.bH(1301, 1301, !0))
            : p || t.bH(i, i, !0);
        }
        if (u && u.k && u.k[0] && this.O.length > 0)
          for (let e of this.O) {
            const i = rr[e];
            if (i && 12 == i.GeosetType && i.Original == u.k[0] + 1) {
              t.bH(1200, 1299, !1);
              let e = 1200 + i.Override;
              t.bH(e, e, !0);
              break;
            }
          }
        if (c && c.k && c.k[0]) {
          t.bH(1500, 1599, !1);
          let e = 1501 + c.k[0];
          if (this.O.length > 0)
            for (let t of this.O) {
              const i = rr[t];
              if (i && 15 == i.GeosetType && i.Original == c.k[0] + 1) {
                e = 1500 + i.Override;
                break;
              }
            }
          t.bH(e, e, !0);
        }
        if (s && s.k && s.k[0]) {
          t.bH(1800, 1899, !1);
          let e = 1801 + s.k[0];
          t.bH(e, e, !0);
        }
        a || _ || g || p || d ? t.bH(1400, 1499, !1) : t.bH(1401, 1401, !0);
        for (const e in this.A) {
          const i = t.A[e];
          i.bH(0, El, !1);
          for (let t = 0; t < i.L.length; t++)
            if ((i.bH(i.L[t], i.L[t], !0), i.M[t] && i.av)) {
              const e = i.L[t];
              if (i.av.some((t) => t.meshId == e)) {
                const e = 100 * t;
                this.bH(e, e + 99, !1);
              }
            }
        }
      }
      bN() {
        var t, e, i, r;
        let n = !1;
        if (
          (this.y.forEach((t) => {
            if (t.n || t.o) {
              if (t.j)
                for (let e = 0; e < t.j.length; ++e)
                  if (t.j[e].texture && !t.j[e].texture.f())
                    return void (n = !0);
            } else n = !0;
          }),
          n)
        )
          return;
        if (!this.G) return;
        const s = this.G.b.Materials,
          a = this.G.b.TextureLayers,
          o = this.G.b.TextureSections;
        let l = !0,
          h = !0;
        (15 != this.o && 21 != this.o) || (h = !1),
          this.y.forEach((t) => {
            let e = t.e;
            (4 != e && 5 != e && 19 != e) || (l = !1), 7 == e && (h = !1);
          });
        let u = -1;
        if (27 == this.o)
          for (let t of a)
            9 == t.BlendMode &&
              1 == t.TextureType &&
              t.Layer > u &&
              (u = t.Layer);
        const c =
          ((f = (t) => t.TextureType),
          a.reduce((t, e) => {
            var i;
            return (t[(i = f(e))] || (t[i] = [])).push(e), t;
          }, {}));
        var f;
        for (const n in c) {
          const a = c[n],
            f = a[0].TextureType;
          if (!this.aL[n]) {
            const t = s.find((t) => t.TextureType == f);
            if (!t) {
              WH.debug("unable to find material info", f);
              continue;
            }
            this.aL[n] = new Tl(this.aT.context, t.Width, t.Height);
          }
          const d = this.aL[n];
          d.j();
          for (const n of a) {
            let s = -1;
            n.Layer == u && (s = 0);
            const a = this.E[n.ChrModelTextureTargetID];
            if (!a) {
              WH.debug(
                "texLayer",
                n.TextureType,
                n.Layer,
                n.BlendMode,
                n.ChrModelTextureTargetID,
                n.TextureSection,
                null === (t = null == a ? void 0 : a.a) || void 0 === t
                  ? void 0
                  : t.c,
                "missing!"
              );
              continue;
            }
            if (!a.e())
              return void WH.debug(
                "texLayer",
                n.TextureType,
                n.Layer,
                n.BlendMode,
                n.ChrModelTextureTargetID,
                n.TextureSection,
                null === (e = null == a ? void 0 : a.a) || void 0 === e
                  ? void 0
                  : e.c,
                "not ready!"
              );
            const c = n.TextureSection;
            if ((3 != c && 5 != c) || (l && 3 == c) || (h && 5 == c)) {
              let t = 0,
                e = 0,
                r = 1,
                l = 1;
              if (-1 != c && o) {
                const i = o.find((t) => t.SectionType == c);
                if (!i) {
                  WH.debug("can't find texture section data", c);
                  continue;
                }
                (t = i.X), (e = i.Y), (r = i.Width), (l = i.Height);
              }
              d.k(a, t, e, r, l, n.BlendMode, n.Layer, s),
                WH.debug(
                  "texLayer",
                  n.TextureType,
                  n.Layer,
                  n.BlendMode,
                  n.ChrModelTextureTargetID,
                  n.TextureSection,
                  null === (i = null == a ? void 0 : a.a) || void 0 === i
                    ? void 0
                    : i.c
                );
            } else
              WH.debug(
                "texLayer skip",
                n.TextureType,
                n.Layer,
                n.BlendMode,
                n.ChrModelTextureTargetID,
                n.TextureSection,
                null === (r = null == a ? void 0 : a.a) || void 0 === r
                  ? void 0
                  : r.c
              );
          }
          1 == f && 52 != this.o && 70 != this.o && this.bO(d),
            26 != f || (52 != this.o && 70 != this.o) || this.bO(d),
            d.l();
        }
        this.x = !1;
      }
      bO(t) {
        const e = [];
        this.y.forEach((t) => {
          e.push(t);
        }),
          e.sort(function (t, e) {
            return t.f - e.f;
          });
        const i = this.G.b.TextureSections;
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          if (n.j)
            for (let e = 0; e < n.j.length; e++) {
              const r = n.j[e];
              if (
                r.gender == this.p &&
                r.texture &&
                r.texture.f() &&
                12 != r.region
              ) {
                if (0 != (1 & this.v.ChrModelFlags) && 7 == r.region) continue;
                const e = i.find((t) => t.SectionType == r.region);
                if (!e) {
                  WH.debug("can't find texture section data", r.region);
                  continue;
                }
                const n = new vl();
                (n.a = r.texture),
                  t.k(n, e.X, e.Y, e.Width, e.Height, 0, -1, -1);
              }
            }
        }
      }
      bP() {
        if (!this.d) return;
        let t = (-1 == this.J || !this.J) && null != this.y.get(22),
          e = !(
            (-1 != this.I && this.I) ||
            (null == this.y.get(13) && null == this.y.get(21))
          );
        for (let e of hr) {
          let i = this.at[e];
          i > 0 && i < this.ar.length && this.ar[i].C(t ? "HandsClosed" : "");
        }
        for (let t of ur) {
          let i = this.at[t];
          i > 0 && i < this.ar.length && this.ar[i].C(e ? "HandsClosed" : "");
        }
      }
      bQ(t) {
        if ($.isArray(t))
          for (let e = 0; e < t.length; ++e) this.bR(t[e][0], t[e][1], t[e][2]);
        else for (let e in t) this.bR(parseInt(e), t[e]);
        this.bP();
      }
      bR(t, e, i) {
        let r = new Jo(this, t, e, this.o, this.p);
        i && r.B(i);
        let n = r.e,
          s = or[t];
        this.y.get(n) && 0 != s
          ? ((r.e = s), this.y.set(s, r))
          : this.y.set(n, r);
      }
      bS(t) {
        var e = this.y.get(t);
        e || ((t = sr[t]), (e = this.y.get(t))), e && (this.y.delete(t), e.y());
      }
      bT(t, e) {
        const i = [],
          r = {
            14: (t) => [0],
            26: (t) => (2 == t.c && 18 == t.d ? [1] : null),
          };
        if (this.aD && this.aE) {
          const n = {
            1: (t) => [11],
            3: (t) => [6, 5],
            22: (t) => {
              var e;
              return (
                (null === (e = r[t.b]) || void 0 === e
                  ? void 0
                  : e.call(r, t)) || [2]
              );
            },
            21: (t) => [1],
            17: (t) => [1],
            15: (t) => [2],
            25: (t) => [1],
            13: (t) => [1],
            14: (t) => [0],
            23: (t) => [2],
            6: (t) => [53],
            26: (t) => [1],
            16: (t) => [57],
            27: (t) => [55],
          };
          if (n[t]) {
            const r = n[t](e);
            for (let n = 0; n < r.length; ++n) {
              let s = r[n];
              (this.I >= 0 || this.J >= 0 || this.j) && fr[t] && (s = fr[t]),
                this.I >= 0 && 21 == t && dr[this.I][t] && (s = dr[this.I][t]),
                this.J >= 0 && 22 == t && dr[this.J][t] && (s = dr[this.J][t]),
                15 == e.g &&
                  this.J >= 0 &&
                  22 == t &&
                  dr[this.J][e.b] &&
                  (s = dr[this.J][e.b]),
                s >= this.aE.length || -1 == this.aE[s] || i.push(this.aE[s]);
            }
          }
        }
        return i;
      }
      bU() {
        var t;
        if (!this.aS) {
          if (this.av) {
            for (let t = 0; t < this.av.length; ++t) this.av[t].K(this);
            this.aN = this.av.concat();
          }
          this.setAnimation(Cl),
            this.bA(!0),
            this.bB(),
            this.bD(),
            (this.d = !0),
            this.by(),
            this.bP(),
            this.m && this.w.d && this.w.bB(),
            this.n && this.w.d && this.w.bB(),
            this.w && this.w.d && !this.af && this.w.bM(),
            null === (t = this.e) || void 0 === t || t.call(this);
        }
      }
      bV() {
        this.a && this.a.type && this.a.id && this.bW(this.a.type, this.a.id);
      }
      bW(t, e) {
        let i,
          r = this;
        t == nr.ITEM
          ? (i = "meta/item/")
          : t == nr.HELM
          ? (i = "meta/armor/1/")
          : t == nr.SHOULDER
          ? (i = "meta/armor/3/")
          : t == nr.NPC || t == nr.HUMANOIDNPC
          ? (i = "meta/npc/")
          : t == nr.OBJECT
          ? (i = "meta/object/")
          : t == nr.CHARACTER
          ? (i = "meta/character/")
          : t == nr.ITEMVISUAL && (i = "meta/itemvisual/"),
          i
            ? ((i = this.l.contentPath + i + e + ".json"),
              (function (t) {
                $.getJSON(i)
                  .done(function (e) {
                    r.bY(e, t);
                  })
                  .fail(function (t, e, i) {
                    let r = e + ", " + i;
                    console.log("Model:_load Error loading metadata: " + r);
                  });
              })(t))
            : t == nr.PATH &&
              (this.v || (this.v = {}),
              (i = this.l.contentPath + "mo3/" + e + ".mo3"),
              $.ajax({
                url: i,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.aT,
                success: function (t) {
                  r.cZ(t);
                },
                error: function (t, e, i) {
                  console.log(i);
                },
              }));
      }
      bX(t, e, i) {
        const r = cr[e];
        if (r) {
          const e = i ? 4 : 0;
          return r.slice(2 * t + e, 2 * t + e + 2);
        }
      }
      bY(t, e) {
        var i,
          r,
          n = this;
        if ((e || (e = n.a.type), n.v || (n.v = t), e == nr.CHARACTER)) {
          let e = this.c ? this.c : t.Model;
          (n.o = t.Race),
            (n.p = t.Gender),
            n.l.cls && (n.q = parseInt(n.l.cls));
          let s =
            n.l.contentPath +
            "meta/charactercustomization2/" +
            t.Race +
            "_" +
            t.Gender +
            ".json";
          if (
            ($.getJSON(s, function (t) {
              var e, i, r;
              if (
                (WH.debug("Got customization data v2", t),
                (n.G = new wl(n, t)),
                null === (e = n.H) || void 0 === e || e.call(n, n.G.b),
                n.G.c(),
                n.r)
              )
                n.setAppearance(n.r);
              else if (
                n.a.type != nr.CHARACTER &&
                n.v.Race > 0 &&
                (null ===
                  (r =
                    null === (i = n.v) || void 0 === i ? void 0 : i.Creature) ||
                void 0 === r
                  ? void 0
                  : r.CreatureCustomizations)
              ) {
                let t = n.G.g(n.v.Creature.CreatureCustomizations);
                n.setAppearance(t);
              } else n.G.f();
              n.x && n.bD();
            }),
            n.v.Creature &&
              n.v.Creature.Texture &&
              (n.aM = this.bC(
                -1,
                Zo.a(null, n.v.TextureFiles[n.v.Creature.Texture], 3, 0, 0)
              )),
            n.bW(nr.PATH, e),
            n.v.Equipment && n.bQ(n.v.Equipment),
            n.l.items && n.bQ(n.l.items),
            n.l.shouldersOverride &&
              n.setShouldersOverride(n.l.shouldersOverride),
            n.a.type != nr.CHARACTER && n.v.Race > 0)
          ) {
            if (
              n.G &&
              (null ===
                (r =
                  null === (i = n.v) || void 0 === i ? void 0 : i.Creature) ||
              void 0 === r
                ? void 0
                : r.CreatureCustomizations)
            ) {
              let t = n.G.g(n.v.Creature.CreatureCustomizations);
              n.r = t;
            }
          } else n.l.charCustomization && (n.r = n.l.charCustomization);
        } else if (e == nr.HELM) {
          let e = 1,
            i = 0,
            r = 1;
          if (
            (n.w && ((e = n.w.o), (i = n.w.p), (r = n.w.q)), t.ComponentModels)
          ) {
            let s = t.ComponentModels[0];
            s &&
              t.ModelFiles &&
              t.ModelFiles[s] &&
              (27 == t.Item.InventoryType
                ? n.bW(nr.PATH, t.ModelFiles[s][0].FileDataId)
                : (n.w ||
                    t.ModelFiles[s].some((t) => t.Race == e) ||
                    (e = t.ModelFiles[s][0].Race),
                  n.bW(nr.PATH, Zo.b(n, t.ModelFiles[s], -1, i, r, e))));
          }
          if (t.Textures)
            for (let e in t.Textures)
              0 != t.Textures[e] &&
                (n.C[parseInt(e)] = new Lo(n, t.Textures[e]));
        } else if (e == nr.SHOULDER) {
          let e = 1,
            i = 0,
            r = 1;
          if (
            (n.w && ((e = n.w.o), (i = n.w.p), (r = n.w.q)), t.ComponentModels)
          ) {
            let s = t.ComponentModels[0],
              a = t.ComponentModels[1];
            if (1 == n.a.shoulder || (void 0 === n.a.shoulder && s)) {
              if (
                (s &&
                  t.ModelFiles[s] &&
                  n.bW(nr.PATH, Zo.b(n, t.ModelFiles[s], 0, i, r, e)),
                t.Textures)
              )
                for (let e in t.Textures)
                  0 != t.Textures[e] && (n.C[+e] = new Lo(n, t.Textures[e]));
            } else if (
              (2 == n.a.shoulder || (void 0 === n.a.shoulder && a)) &&
              (a &&
                t.ModelFiles[a] &&
                n.bW(nr.PATH, Zo.b(n, t.ModelFiles[a], 1, i, r, e)),
              t.Textures2)
            )
              for (let e in t.Textures2)
                0 != t.Textures2[e] && (n.C[+e] = new Lo(n, t.Textures2[e]));
          }
        } else if (e == nr.ITEMVISUAL) n.bW(nr.PATH, t.Equipment[n.b]);
        else if (e == nr.ITEM) {
          let e = 1,
            i = 0,
            r = 1;
          if (
            (n.w && ((e = n.w.o), (i = n.w.p), (r = n.w.q)), t.ComponentModels)
          ) {
            let s = t.ComponentModels[0];
            s &&
              t.ModelFiles &&
              t.ModelFiles[s] &&
              n.bW(nr.PATH, Zo.b(n, t.ModelFiles[s], -1, i, r, e));
          }
          if (t.Textures)
            for (let e in t.Textures)
              0 != t.Textures[e] && (n.C[+e] = new Lo(n, t.Textures[e]));
        } else {
          if (
            (t.stateKit && this.F.push(new Yo(this, t.stateKit.effects)),
            t.Creature &&
              ((n.P = t.Creature.CreatureGeosetData),
              (n.Q = t.Creature.CreatureGeosetDataID)),
            t.Textures)
          )
            for (let e in t.Textures)
              0 != t.Textures[e] && (n.C[+e] = new Lo(n, t.Textures[e]));
          else if (t.ComponentTextures && n.w) {
            let e = n.w.p;
            for (let i in t.ComponentTextures) {
              let r = t.TextureFiles[t.ComponentTextures[i]];
              for (let t = 0; t < r.length; t++) {
                let s = r[t];
                (s.Gender != e && 3 != s.Gender) ||
                  (n.C[+i] = new Lo(n, s.FileDataId));
              }
            }
          }
          if (t.Model)
            n.bW(nr.PATH, t.Model),
              e == nr.NPC && n.l.items && !n.w && n.bQ(n.l.items);
          else if (t.Race > 0) {
            const e = t.Race + "_" + t.Gender;
            (n.o = t.Race), (n.p = t.Gender), n.bW(nr.CHARACTER, e);
          }
        }
      }
      cZ(t) {
        if (!t) return void console.error("Bad buffer for DataView");
        let e = this,
          i = new cl(t);
        if (604210112 != i.getUint32())
          return void console.log("Bad magic value");
        if (i.getUint32() < 2e3) return void console.log("Bad version");
        e.al = i.getUint32();
        var r = i.getUint32(),
          n = i.getUint32(),
          s = i.getUint32(),
          a = i.getUint32(),
          o = i.getUint32(),
          l = i.getUint32(),
          h = i.getUint32(),
          u = i.getUint32(),
          c = i.getUint32(),
          f = i.getUint32(),
          d = i.getUint32(),
          b = i.getUint32(),
          g = i.getUint32(),
          _ = i.getUint32(),
          p = i.getUint32(),
          m = i.getUint32(),
          v = i.getUint32(),
          x = i.getUint32(),
          T = i.getUint32(),
          w = i.getUint32(),
          y = i.getUint32(),
          A = i.getUint32(),
          E = i.getUint32(),
          M = i.getUint32(),
          C = i.getUint32(),
          S = i.getUint32();
        let k = new Uint8Array(t, i.position),
          D = null;
        try {
          D = Do(k);
        } catch (t) {
          return void console.log("Decompression error: " + t);
        }
        if (D.length < S) console.log("Unexpected data size", D.length, S);
        else {
          (i = new cl(D.buffer)), (i.position = r);
          var F = i.getInt32();
          if (F > 0) {
            e.am = new Array(F);
            for (let t = 0; t < F; ++t) e.am[t] = new Er(i);
          }
          i.position = n;
          var R = i.getInt32();
          if (R > 0) {
            e.an = new Array(R);
            for (let t = 0; t < R; ++t) e.an[t] = i.getUint16();
          }
          i.position = s;
          var I = i.getInt32();
          if (I > 0) {
            (e.ao = new Array(I)), (e.aY = new Array(I));
            for (let t = 0; t < I; ++t)
              (e.ao[t] = i.getUint32()), (e.aY[t] = 0);
          }
          i.position = a;
          var U = i.getInt32();
          if (U > 0) {
            e.ap = new Array(U);
            for (let t = 0; t < U; ++t) e.ap[t] = new Mr(i);
          }
          i.position = o;
          var P = i.getInt32();
          if (P > 0) {
            e.aq = new Array(P);
            for (let t = 0; t < P; ++t) e.aq[t] = i.getInt16();
          }
          i.position = l;
          var O = i.getInt32();
          if (O > 0) {
            e.ar = new Array(O);
            for (let t = 0; t < O; ++t) e.ar[t] = new hn(e, t, i);
            this.ak = new Array(O);
            for (let t = 0; t < O; t++) {
              this.ak[t] = [];
              for (let i = 0; i < O; i++) e.ar[i].e == t && this.ak[t].push(i);
            }
          }
          i.position = h;
          var z = i.getInt32();
          if (z > 0) {
            e.as = new Array(z);
            for (let t = 0; t < z; ++t) e.as[t] = i.getInt16();
          }
          i.position = u;
          var B = i.getInt32();
          if (B > 0) {
            e.at = new Array(B);
            for (let t = 0; t < B; ++t) e.at[t] = i.getInt16();
          }
          i.position = c;
          var L = i.getInt32();
          if (L > 0) {
            e.au = new Array(L);
            for (let t = 0; t < L; ++t) e.au[t] = new un(i);
          }
          i.position = f;
          var H = i.getInt32();
          if (H > 0) {
            e.av = new Array(H);
            for (let t = 0; t < H; ++t) e.av[t] = new Bo(i);
          }
          i.position = d;
          var N = i.getInt32();
          if (N > 0) {
            e.aw = new Array(N);
            for (let t = 0; t < N; ++t) e.aw[t] = i.getInt16();
          }
          i.position = b;
          var G = i.getInt32();
          if (G > 0) {
            e.ax = new Array(G);
            for (let t = 0; t < G; ++t) e.ax[t] = new Fo(i);
          }
          i.position = g;
          var j = i.getInt32();
          if (j > 0) {
            e.ay = new Array(j);
            for (let t = 0; t < j; ++t) e.ay[t] = new Ho(e, t, i);
          }
          i.position = _;
          var W = i.getInt32();
          if (W > 0) {
            e.az = new Array(W);
            for (let t = 0; t < W; ++t) e.az[t] = i.getInt16();
          }
          i.position = p;
          var V = i.getInt32();
          if (V > 0) {
            e.aA = new Array(V);
            for (let t = 0; t < V; ++t) e.aA[t] = new No(i);
          }
          i.position = m;
          var q = i.getInt32();
          if (q > 0) {
            e.aB = new Array(q);
            for (let t = 0; t < q; ++t) e.aB[t] = i.getInt16();
          }
          i.position = v;
          var Y = i.getInt32();
          if (Y > 0) {
            e.aC = new Array(Y);
            for (let t = 0; t < Y; ++t) e.aC[t] = i.getInt16();
          }
          i.position = x;
          var X = i.getInt32();
          if (X > 0) {
            e.aD = new Array(X);
            for (let t = 0; t < X; ++t) e.aD[t] = new Go(i);
          }
          i.position = T;
          var Z = i.getInt32();
          if (Z > 0) {
            e.aE = new Array(Z);
            for (let t = 0; t < Z; ++t) e.aE[t] = i.getInt16();
          }
          i.position = w;
          var J = i.getInt32();
          if (J > 0) {
            e.aF = new Array(J);
            for (let t = 0; t < J; ++t) e.aF[t] = new jo(i);
          }
          i.position = y;
          var K = i.getInt32();
          if (K > 0) {
            e.aG = new Array(K);
            for (let t = 0; t < K; ++t) e.aG[t] = new Wo(i);
          }
          i.position = A;
          var $ = i.getInt32();
          if ($ > 0) {
            e.aH = new Array($);
            for (let t = 0; t < $; ++t) e.aH[t] = i.getInt16();
          }
          i.position = E;
          var Q = i.getInt32();
          if (Q > 0) {
            e.aI = new Array(Q);
            for (let t = 0; t < Q; ++t) e.aI[t] = new hl(e, i);
          }
          i.position = C;
          var tt = i.getInt32();
          if (tt > 0) {
            e.aK = new Array(tt);
            for (let t = 0; t < tt; ++t)
              (e.aK[t] = new ul(i)), e.aI[t] && e.aI[t].Y(e.aK[t]);
          }
          i.position = M;
          var et = i.getInt32();
          if (et > 0) {
            e.aJ = new Array(et);
            for (let t = 0; t < et; ++t) e.aJ[t] = new pl(e, i);
          }
          e.bU();
        }
      }
      ca(t) {
        var e = Rr();
        if ((Ir(e, t), this.aI))
          for (var i = 0; i < this.aI.length; i++) this.aI[i].ab(t, e);
        if (this.aJ) for (i = 0; i < this.aJ.length; i++) this.aJ[i].an(t);
      }
      cb(t) {
        let e = null;
        if (!this.aE || !this.aE.length) return null;
        if (t < this.aE.length) e = this.aD[this.aE[t]];
        else
          for (let t = 0; t < this.aE.length; t++) {
            const i = this.aE[t];
            if (-1 != i) {
              e = this.aD[i];
              break;
            }
          }
        return e;
      }
      cc() {
        const t = this;
        if (!t.d) return;
        t.S++;
        let e = t.aT.time - t.R;
        if ((e > 0 && (t.R = t.aT.time), this.f && this.T.a && this.T.a.b)) {
          let i = di();
          const r = [4, 119, 233, 242, 348, 526, 527, 544, 545];
          [5, 143, 234, 524, 525, 540, 541, 556, 557].indexOf(this.T.a.b.a) > -1
            ? (i = _i(0, (-5 * e) / 1e3, 0))
            : r.indexOf(this.T.a.b.a) > -1 && (i = _i(0, (-3 * e) / 1e3, 0));
          let n = zi();
          Zi(n, i), this.ca(n), this.j && this.j.ca(n);
          for (const t in this.A) {
            this.A[t].ca(n);
          }
          if (t.B) for (let e = 0; e < t.B.length; e++) this.B[e].ca(n);
        }
        if (!this.U && t.T.a.a > -1) {
          let t = e;
          for (let e = 0; e < this.aY.length; e++)
            (this.aY[e] += t), this.ao[e] > 0 && (this.aY[e] %= this.ao[e]);
          this.cd(this.T, t);
        }
        let i,
          r,
          n,
          s = t.av ? t.av.length : 0;
        for (let e = 0; e < s; ++e)
          if (((n = t.av[e]), n.show)) {
            (i = n.p.f), (r = n.p.e);
            for (let e = 0; e < i; ++e) t.am[t.an[r + e]].k = t.S;
          }
        t.aN &&
          t.aN.sort(function (t, e) {
            return t.b != e.b ? t.b - e.b : t.meshId - e.meshId;
          });
        let a = t.ar.length,
          o = t.aU;
        if (t.ar && t.ap) {
          for (let e = 0; e < a; ++e) t.ar[e].t = !1;
          for (let i = 0; i < a; ++i) t.ar[i].E(e);
          if (t.am) {
            let e,
              i,
              r,
              n,
              s = t.am.length,
              a = t.aQ,
              l = t.aR;
            for (let h = 0; h < s; ++h) {
              if (((e = t.am[h]), e.k != t.S)) continue;
              (n = h * 10),
                (o[n] =
                  o[n + 1] =
                  o[n + 2] =
                  o[n + 3] =
                  o[n + 4] =
                  o[n + 5] =
                    0);
              for (let s = 0; s < 4; ++s)
                (r = e.g[s] / 255),
                  r > 0 &&
                    ((i = t.ar[e.h[s]]),
                    Ri(a, e.a, i.m),
                    yr(l, e.b, i.o),
                    (o[n + 0] += a[0] * r),
                    (o[n + 1] += a[1] * r),
                    (o[n + 2] += a[2] * r),
                    (o[n + 3] += l[0] * r),
                    (o[n + 4] += l[1] * r),
                    (o[n + 5] += l[2] * r));
              (e.i[0] = o[n + 0]),
                (e.i[1] = o[n + 1]),
                (e.i[2] = o[n + 2]),
                (e.j[0] = o[n + 3]),
                (e.j[1] = o[n + 4]),
                (e.j[2] = o[n + 5]);
            }
            t.bA(!1), t.ae || ((t.ae = !0), t.bB());
          }
        }
        if (t.j && t.j.d) {
          const e = t.j.aD[t.j.aE[0]],
            i = 1 / t.j.v.Scale;
          mi(t.aP, i, i, i),
            Hi(t.aO),
            Vi(t.aO, t.aO, t.aP),
            t.bu(t.j.W, t.j.ar[e.b].m, e.c, t.aO);
        }
        if (t.k && t.k.d) {
          const e = t.aD[t.aE[19]],
            i = t.l.pet.scale || 0.2 / t.k.v.Scale;
          mi(t.aP, i, i, i), Hi(t.aO), Vi(t.aO, t.aO, t.aP);
          const r = bi(e.c);
          vi(r, r, t.l.pet.offset || _i(0, -1.25, 0)),
            t.k.bu(t.W, t.ar[e.b].m, r, t.aO);
        }
        er[t.a.id] && !t.w && (Hi(t.W), mi(t.aP, 1, 1, -1), Vi(t.W, t.W, t.aP)),
          t.x && t.bN();
      }
      cd(t, e) {
        if (((t.a.c += e), t.b.a < 0 && !this.V && !t.d))
          if (t.a.b.h > -1) {
            let e = 32767 * Math.random(),
              i = 0,
              r = t.a.a,
              n = this.ap[r];
            for (i += n.d; i < e && n.h > -1; )
              (r = n.h), (n = this.ap[r]), (i += n.d);
            (t.b.a = r), (t.b.b = this.ap[r]), (t.b.c = 0);
          } else {
            let e = this.ap.find((e) => e.a == t.a.b.a && 0 == e.b);
            e && ((t.b.a = e.i), (t.b.b = e), (t.b.c = 0));
          }
        let i = t.a,
          r = t.b,
          n = i.b.g - i.c,
          s = 0,
          a = null;
        if (
          (r.a > -1 && ((a = this.ap[r.a]), (s = a.e)),
          s > 0 && n < s ? ((r.c = yl(s - n, a.g)), (t.c = n / s)) : (t.c = 1),
          i.c >= i.b.g)
        )
          if (r.a > -1) {
            if (r.a > -1)
              for (
                ;
                0 == (32 & this.ap[r.a].c) &&
                (64 & this.ap[r.a].c) > 0 &&
                ((r.a = this.ap[r.a].i), (r.b = this.ap[r.a]), !(r.a < 0));

              );
            (t.a = r), (t.b = new Yr()), (t.c = 1);
          } else i.b.g > 0 && (i.c = yl(i.c, i.b.g));
      }
      ce(t) {
        if (this.aS) return;
        var e = this;
        if (
          (this.w ? pr(e.X, this.w.X) : (e.X = _r(1, 1, 1, 1)),
          e.j && e.j.ce(t),
          !e.d)
        )
          return;
        e.k && e.k.ce(t), e.cc(), this.F && this.F.forEach((e) => e.g(t));
        let i = zi();
        ji(i, e.aT.viewMatrix, e.W);
        let r = zi();
        Gi(r, i);
        let n = zi();
        if (
          (Ni(n, r),
          (e.aX = {
            uModelMatrix: e.W,
            uViewMatrix: e.aT.viewMatrix,
            uInvTranspViewModelMat: n,
            uProjMatrix: e.aT.projMatrix,
            uCameraPos: e.aT.eye,
            uAmbientColor: e.Y,
            uDiffuseColor: e.X,
            uPrimaryColor: e.Z,
            uSecondaryColor: e.aa,
            uLightDir1: e.ab,
            uLightDir2: e.ac,
            uLightDir3: e.ad,
          }),
          e.aV && e.aN)
        )
          for (let i = 0; i < e.aN.length; ++i) e.aN[i].show && e.aN[i].N(t);
        if (e.aI && e.g)
          for (let i = 0; i < e.aI.length; ++i)
            e.aI[i].Z(e.T, e.aT.delta), e.aI[i].aa(t);
        if (e.aJ && e.h)
          for (let i = 0; i < e.aJ.length; ++i)
            e.aJ[i].ar(e.T, e.aT.delta), e.aJ[i].av(), e.aJ[i].aw(t);
        for (const i in this.A) {
          const r = this.A[i];
          e.bJ(r, t);
        }
        if (
          (e.y.forEach((i) => {
            if (i) {
              if (2 == i.c && 13 == i.d) {
                if (21 == i.e && -1 != e.I) return;
                if (22 == i.e && -1 != e.J) return;
              }
              i.D(t);
            }
          }),
          e.z.forEach((e) => {
            e && e.i && e.D(t);
          }),
          e.B)
        )
          for (let i = 0; i < e.B.length; i++) {
            let r = e.B[i];
            if (!r.d) continue;
            let n = e.aE[e.l.extraModels[i][1]];
            if (-1 == n) {
              console.log(
                "invalid extra model attachment",
                e.l.extraModels[i][1]
              );
              continue;
            }
            let s = e.aD[n],
              a = e.l.extraModels[i][2];
            mi(e.aP, a, a, a),
              Hi(e.aO),
              Vi(e.aO, e.aO, e.aP),
              qi(e.aO, e.aO, e.l.extraModels[i][3]),
              Yi(e.aO, e.aO, e.l.extraModels[i][4]),
              Xi(e.aO, e.aO, e.l.extraModels[i][5]),
              r.bu(e.W, e.ar[s.b].m, s.c, e.aO),
              r.cc(),
              r.ce(t);
          }
        e.y.forEach((i) => {
          i && i.r && e.bJ(i.r, t);
        });
      }
    }
    const kl = Sl,
      Dl = { 2: "Wowhead", 3: "LolKing", 6: "HeroKing", 7: "DestinyDB" };
    class Fl {
      constructor(t) {
        if (!t.type || !Dl[t.type]) throw "Viewer error: Bad viewer type given";
        if (!t.container) throw "Viewer error: Bad container given";
        if (!t.aspect) throw "Viewer error: Bad aspect ratio given";
        if (!t.contentPath) throw "Viewer error: No content path given";
        console.log("Creating viewer with options", t),
          (this.type = t.type),
          (this.container = t.container),
          (this.aspect = parseFloat(t.aspect)),
          (this.renderer = null),
          (this.options = t);
        const e = this.container.width(),
          i = Math.round(e / this.aspect);
        this.init(e, i);
      }
      destroy() {
        this.renderer && this.renderer.destroy(),
          (this.options = null),
          (this.container = null);
      }
      init(t, e) {
        if (
          void 0 !== typeof window.Uint8Array &&
          void 0 !== typeof window.DataView
        )
          try {
            const t = document.createElement("canvas");
            if (
              !(
                t.getContext("webgl", { alpha: !1 }) ||
                t.getContext("experimental-webgl", { alpha: !1 })
              )
            )
              return void console.log("viewer init failed");
          } catch (t) {
            return void console.log("viewer init failed");
          }
        (this.mode = 1),
          (this.renderer = new Il(this)),
          this.renderer.resize(t, e),
          this.renderer.init();
      }
      setAdaptiveMode(t) {
        this.renderer.setAdaptiveMode(t);
      }
      setZoom(t) {
        this.renderer.zoom.target = t;
      }
      setOffset(t, e) {
        this.renderer.setTranslation(t, e, 0);
      }
      setFullscreen(t) {
        t ? Fl.requestFullscreen(this.renderer.canvas[0]) : Fl.exitFullscreen();
      }
      method(t, e) {
        return (
          void 0 === e && (e = []),
          this.renderer ? this.renderer.method(t, [].concat(e)) : null
        );
      }
      option(t, e) {
        return void 0 !== e && (this.options[t] = e), this.options[t];
      }
      static isFullscreen() {
        return !!(
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        );
      }
      static requestFullscreen(t) {
        document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement ||
          (t.requestFullscreen
            ? t.requestFullscreen()
            : t.webkitRequestFullscreen
            ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            : t.mozRequestFullScreen
            ? t.mozRequestFullScreen()
            : t.msRequestFullscreen && t.msRequestFullscreen());
      }
      static exitFullscreen() {
        (document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement) &&
          (document.exitFullscreen
            ? document.exitFullscreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.msExitFullscreen && document.msExitFullscreen());
      }
    }
    const Rl = Fl;
    const Il = class {
      constructor(t) {
        (this.currFrame = 0),
          (this.clearColor = _i(0, 0, 0)),
          (this.addedCss = !1),
          (this.progressShown = !1),
          (this.attributeState = new li()),
          (this.onContextMenu = function (t) {
            return !1;
          });
        var e = this;
        (e.viewer = t),
          (e.options = t.options),
          (e.downloads = {}),
          (e.context = null),
          (e.width = 0),
          (e.height = 0),
          (e.time = 0),
          (e.delta = 0),
          (e.models = []),
          (e.screenshotDataURL = null),
          (e.makeDataURL = !1),
          (e.screenshotCallback = null),
          (e.azimuth = 1.5 * Math.PI),
          (e.zenith = Math.PI / 2),
          (e.distance = 15),
          (e.fov = 30),
          (e.zoom = {
            rateStep: 0.1,
            rateAccelerationDecay: 0.4,
            interpolationRate: 0.3,
            range: [0.3, 4],
            rateCurrent: 0,
            target: 1,
            current: 1,
          }),
          (e.zoom.range = e.zoom.range.map(function (t) {
            return Math.log(t) / Math.log(1 + e.zoom.rateStep);
          })),
          (e.translation = _i(0, 0, 0)),
          (e.target = _i(0, 0, 0)),
          (e.eye = _i(0, 0, 0)),
          (e.up = _i(0, 0, 1)),
          (e.lookDir = di()),
          (e.fullscreen = !1),
          (e.projMatrix = zi()),
          (e.viewMatrix = zi()),
          (e.panningMatrix = zi()),
          (e.viewOffset = di()),
          (e.aniFilterExt = null),
          (e.aniFilterMax = 0),
          this.addedCss ||
            ((this.addedCss = !0),
            $("head").append(
              '<link rel="stylesheet" href="//wow.zamimg.com/modelviewer/live/viewer/viewer.css" type="text/css" />'
            ));
      }
      updateProgress() {
        if (!this.stop) {
          var t = this,
            e = 0,
            i = 0;
          for (var r in t.downloads)
            (e += t.downloads[r].total), (i += t.downloads[r].loaded);
          if (e <= 0)
            t.progressShown &&
              (t.progressBg.hide(),
              t.progressBar.hide(),
              (t.progressShown = !1));
          else {
            t.progressShown ||
              (t.progressBg.show(),
              t.progressBar.show(),
              (t.progressShown = !0));
            var n = i / e;
            t.progressBar.width(Math.round(t.width * n) + "px");
          }
        }
      }
      destroy() {
        var t = this;
        if (
          ((t.stop = !0),
          t.canvas &&
            (t.canvas.detach(),
            t.progressBg.detach(),
            t.progressBar.detach(),
            t.canvas
              .off("mousedown touchstart", t.onMouseDown)
              .off("DOMMouseScroll", t.onMouseScroll)
              .off("mousewheel", t.onMouseWheel)
              .off("dblclick", t.onDoubleClick)
              .off("contextmenu", t.onContextMenu),
            $(window).off("resize", t.onFullscreen),
            $(document)
              .off("mouseup touchend", t.onMouseUp)
              .off("mousemove touchmove", t.onMouseMove),
            (t.canvas = t.progressBg = t.progressBar = null)),
          t.context)
        ) {
          var e = t.context;
          t.bgTexture && e.deleteTexture(t.bgTexture),
            (t.bgTexture = null),
            t.program && e.deleteProgram(t.program),
            (t.program = null),
            t.vb && e.deleteBuffer(t.vb),
            t.vs && e.deleteShader(t.vs),
            t.fs && e.deleteShader(t.fs),
            (t.vb = t.vs = t.fs = null);
        }
        t.bgImg && (t.bgImg = null);
        for (var i = 0; i < t.models.length; ++i)
          t.models[i].bb(), (t.models[i] = null);
        t.models = [];
      }
      method(t, e) {
        if (this.models.length > 0 && this.models[0]) {
          const i = this.models[0][t];
          return i
            ? i.apply(this.models[0], e)
            : void WH.debug("Unknown viewer method", t, "args", e);
        }
      }
      getTime() {
        return window.performance && window.performance.now
          ? window.performance.now()
          : Date.now();
      }
      draw(t) {
        var e,
          i = this,
          r = i.context;
        (i.delta = 0.001 * (t - i.time)),
          (i.time = t),
          i.currFrame++,
          i.updateCamera(),
          r.bindFramebuffer(r.FRAMEBUFFER, null),
          r.viewport(0, 0, i.width, i.height),
          r.clearColor(
            this.clearColor[0],
            this.clearColor[1],
            this.clearColor[2],
            0
          ),
          r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
          i.bgTexture &&
            i.program &&
            (r.useProgram(i.program),
            r.activeTexture(r.TEXTURE0),
            r.bindTexture(r.TEXTURE_2D, i.bgTexture),
            r.uniform1i(i.uTexture, 0),
            r.bindBuffer(r.ARRAY_BUFFER, i.vb),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, null),
            r.enableVertexAttribArray(i.aPosition),
            r.vertexAttribPointer(i.aPosition, 2, r.FLOAT, !1, 16, 0),
            r.enableVertexAttribArray(i.aTexCoord),
            r.vertexAttribPointer(i.aTexCoord, 2, r.FLOAT, !1, 16, 8),
            r.depthMask(!1),
            r.disable(r.CULL_FACE),
            r.blendFunc(r.ONE, r.ZERO),
            r.drawArrays(r.TRIANGLE_STRIP, 0, 4),
            r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA),
            r.enable(r.CULL_FACE),
            r.depthMask(!0),
            r.disableVertexAttribArray(i.aPosition),
            r.disableVertexAttribArray(i.aTexCoord));
        let n = new Array();
        for (e = 0; e < i.models.length; ++e) i.models[e].ce(n);
        n.sort((t, e) => {
          let i = t.e > 1,
            r = e.e > 1;
          return i > r
            ? 1
            : i < r
            ? -1
            : t.m != e.m
            ? e.m > t.m
              ? -1
              : 1
            : t.n > e.n
            ? -1
            : t.n < e.n
            ? 1
            : e.o != t.o
            ? e.o < t.o
              ? 1
              : -1
            : e.e != t.e
            ? t.e < e.e
              ? -1
              : 1
            : 0;
        }),
          r.viewport(0, 0, i.width, i.height),
          this.attributeState.disableAll(),
          n.forEach((t) => {
            r.useProgram(t.a.program),
              r.bindBuffer(r.ARRAY_BUFFER, t.c),
              r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.d),
              this.attributeState.enable(r, t.a.attributes),
              Ye(t.a, t.b),
              t.h ? r.enable(r.CULL_FACE) : r.disable(r.CULL_FACE),
              t.i ? r.frontFace(r.CCW) : r.frontFace(r.CW),
              this.setBlendMode(r, t.e),
              r.depthMask(t.f),
              r.drawElements(t.j, t.k, r.UNSIGNED_SHORT, t.l);
          }),
          this.attributeState.disableAll();
      }
      setAdaptiveMode(t) {
        (this.addaptiveMode = t), t && $(window).trigger("resize");
      }
      setTranslation(t, e, i) {
        this.translation = _i(t, e, i);
      }
      setBlendMode(t, e) {
        switch (
          (0 == e
            ? t.disable(t.BLEND)
            : (t.enable(t.BLEND), t.blendEquation(t.FUNC_ADD)),
          e)
        ) {
          case 0:
            break;
          case 1:
            t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ONE);
            break;
          case 2:
            t.blendFuncSeparate(
              t.SRC_ALPHA,
              t.ONE_MINUS_SRC_ALPHA,
              t.ONE,
              t.ONE
            );
            break;
          case 3:
            t.blendFuncSeparate(t.SRC_ALPHA, t.ONE, t.ONE, t.ONE);
            break;
          case 4:
            t.blendFuncSeparate(t.DST_COLOR, t.ZERO, t.ONE, t.ONE);
            break;
          case 5:
            t.blendFuncSeparate(t.DST_COLOR, t.SRC_COLOR, t.ONE, t.ONE);
            break;
          case 6:
            t.blendFuncSeparate(t.DST_COLOR, t.ONE, t.ONE, t.ONE);
            break;
          case 10:
            t.blendFunc(t.ONE, t.ONE);
            break;
          case 7:
            t.blendFuncSeparate(t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE, t.ONE);
            break;
          case 8:
            t.blendFuncSeparate(t.ONE_MINUS_SRC_ALPHA, t.ZERO, t.ONE, t.ONE);
            break;
          case 13:
            t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE);
            break;
          default:
            throw 3735927486;
        }
      }
      updateCamera() {
        var t = this;
        (t.zoom.target += t.zoom.rateCurrent),
          (t.zoom.rateCurrent *= 1 - t.zoom.rateAccelerationDecay),
          (t.zoom.target = -Math.max(
            Math.min(-t.zoom.target, t.zoom.range[1]),
            t.zoom.range[0]
          )),
          (t.zoom.current +=
            (t.zoom.target - t.zoom.current) * t.zoom.interpolationRate);
        var e = t.distance * Math.pow(t.zoom.rateStep + 1, -t.zoom.current),
          i = t.azimuth,
          r = t.zenith;
        1 == t.up[2]
          ? ((t.eye[0] = -e * Math.sin(r) * Math.cos(i) + t.target[0]),
            (t.eye[1] = -e * Math.sin(r) * Math.sin(i) + t.target[1]),
            (t.eye[2] = -e * Math.cos(r) + t.target[2]))
          : ((t.eye[0] = -e * Math.sin(r) * Math.cos(i) + t.target[0]),
            (t.eye[1] = -e * Math.cos(r) + t.target[1]),
            (t.eye[2] = -e * Math.sin(r) * Math.sin(i) + t.target[2])),
          xi(t.lookDir, t.target, t.eye),
          Si(t.lookDir, t.lookDir),
          (function (t, e, i, r) {
            var n,
              s,
              a,
              o,
              l,
              h,
              u,
              c,
              f,
              d,
              b = e[0],
              g = e[1],
              _ = e[2],
              p = r[0],
              m = r[1],
              v = r[2],
              x = i[0],
              T = i[1],
              w = i[2];
            Math.abs(b - x) < ci && Math.abs(g - T) < ci && Math.abs(_ - w) < ci
              ? Hi(t)
              : ((u = b - x),
                (c = g - T),
                (f = _ - w),
                (n = m * (f *= d = 1 / Math.hypot(u, c, f)) - v * (c *= d)),
                (s = v * (u *= d) - p * f),
                (a = p * c - m * u),
                (d = Math.hypot(n, s, a))
                  ? ((n *= d = 1 / d), (s *= d), (a *= d))
                  : ((n = 0), (s = 0), (a = 0)),
                (o = c * a - f * s),
                (l = f * n - u * a),
                (h = u * s - c * n),
                (d = Math.hypot(o, l, h))
                  ? ((o *= d = 1 / d), (l *= d), (h *= d))
                  : ((o = 0), (l = 0), (h = 0)),
                (t[0] = n),
                (t[1] = o),
                (t[2] = u),
                (t[3] = 0),
                (t[4] = s),
                (t[5] = l),
                (t[6] = c),
                (t[7] = 0),
                (t[8] = a),
                (t[9] = h),
                (t[10] = f),
                (t[11] = 0),
                (t[12] = -(n * b + s * g + a * _)),
                (t[13] = -(o * b + l * g + h * _)),
                (t[14] = -(u * b + c * g + f * _)),
                (t[15] = 1));
          })(t.viewMatrix, t.eye, t.target, t.up),
          Hi(t.panningMatrix),
          1 == t.up[2]
            ? mi(t.viewOffset, t.translation[0], -t.translation[1], 0)
            : mi(t.viewOffset, t.translation[0], 0, t.translation[1]),
          Wi(t.panningMatrix, t.panningMatrix, t.viewOffset),
          ji(t.viewMatrix, t.panningMatrix, t.viewMatrix);
      }
      init() {
        var t,
          e = this,
          i = e.context;
        (this.blackPixelTexture = i.createTexture()),
          i.bindTexture(i.TEXTURE_2D, this.blackPixelTexture),
          i.texImage2D(
            i.TEXTURE_2D,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 0, 255])
          ),
          i.bindTexture(i.TEXTURE_2D, null),
          (this.greenPixelTexture = i.createTexture()),
          i.bindTexture(i.TEXTURE_2D, this.greenPixelTexture),
          i.texImage2D(
            i.TEXTURE_2D,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            new Uint8Array([0, 255, 0, 255])
          ),
          i.bindTexture(i.TEXTURE_2D, null),
          Qi(e.projMatrix, 0.0174532925 * e.fov, e.viewer.aspect, 0.1, 5e3),
          e.updateCamera(),
          i.clearColor(
            this.clearColor[0],
            this.clearColor[1],
            this.clearColor[2],
            0
          ),
          i.enable(i.DEPTH_TEST),
          i.depthFunc(i.LEQUAL),
          i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA),
          i.enable(i.BLEND);
        var r = null;
        if (2 === e.viewer.type) r = kl;
        if ((e.options.models || e.options.items) && r) {
          var n = [].concat(e.options.models);
          if (n.length > 0)
            for (t = 0; t < n.length; ++t)
              e.models.push(new r(e, e.options, n[t], t, !0, !1, !1));
        }
        !(function t() {
          if (!e.stop) {
            window.requestAnimationFrame(t);
            var r = e.getTime();
            if (!1 !== e.makeDataURL) {
              if (e.canvas[0].toDataURL) {
                var n = e.clearColor,
                  s = e.bgTexture;
                e.options.transparent &&
                  ((e.bgTexture = null), (e.clearColor = _i(0, 0, 0))),
                  e.draw(r);
                var a = e.width * e.height * 4,
                  o = new Uint8Array(a);
                i.readPixels(
                  0,
                  0,
                  e.width,
                  e.height,
                  i.RGBA,
                  i.UNSIGNED_BYTE,
                  o
                );
                let t = null;
                e.options.transparent
                  ? ((e.clearColor = _i(1, 1, 1)),
                    e.draw(r),
                    (t = new Uint8Array(a)),
                    i.readPixels(
                      0,
                      0,
                      e.width,
                      e.height,
                      i.RGBA,
                      i.UNSIGNED_BYTE,
                      t
                    ))
                  : (t = o);
                for (
                  var l = new Uint8Array(a), h = 0, u = e.height - 1;
                  u >= 0;
                  u--
                )
                  for (var c = 0; c < e.width; c++) {
                    var f = 4 * (u * e.width + c),
                      d = 255 - (t[h + 0] - o[h + 0]),
                      b = o[h + 0],
                      g = o[h + 1],
                      _ = o[h + 2];
                    o[h + 3];
                    (l[f + 0] = b),
                      (l[f + 1] = g),
                      (l[f + 2] = _),
                      (l[f + 3] = d),
                      (h += 4);
                  }
                var p = document.createElement("canvas"),
                  m = p.getContext("2d");
                (p.width = e.width), (p.height = e.height);
                var v = m.createImageData(e.width, e.height);
                v.data.set(l),
                  m.putImageData(v, 0, 0),
                  (e.screenshotDataURL = p.toDataURL.apply(p, e.makeDataURL)),
                  e.screenshotCallback &&
                    (e.screenshotCallback(), (e.screenshotCallback = null)),
                  (e.clearColor = n),
                  (e.bgTexture = s);
              }
              e.makeDataURL = !1;
            }
            e.draw(r);
          }
        })();
      }
      onDoubleClick(t) {
        Rl.isFullscreen()
          ? Rl.exitFullscreen()
          : Rl.requestFullscreen(this.canvas[0]);
      }
      onFullscreen(t) {
        let e = this;
        if (e.viewer.container)
          if ((!e.fullscreen && Rl.isFullscreen()) || this.addaptiveMode) {
            if (
              ((e.restoreWidth = e.width),
              (e.restoreHeight = e.height),
              (e.fullscreen = !0),
              Rl.isFullscreen())
            ) {
              var i = $(window);
              let t = window.screen.width || i.width(),
                e = window.screen.height || i.height();
              this.onResize(t, e, t / e);
            } else if (this.addaptiveMode) {
              var r = e.viewer.container;
              this.onResize(r.width(), r.height(), r.width() / r.height());
            }
          } else
            e.fullscreen &&
              !Rl.isFullscreen() &&
              ((e.fullscreen = !1),
              this.onResize(e.restoreWidth, e.restoreHeight, e.viewer.aspect));
      }
      onResize(t, e, i) {
        this.resize(t, e),
          Qi(this.projMatrix, 0.0174532925 * this.fov, i, 0.1, 5e3);
      }
      onMouseDown(t) {
        let e = this;
        3 == t.which || t.ctrlKey
          ? (e.rightMouseDown = !0)
          : (e.mouseDown = !0),
          "touchstart" == t.type
            ? ((e.mouseX = t.originalEvent.touches[0].clientX),
              (e.mouseY = t.originalEvent.touches[0].clientY))
            : ((e.mouseX = t.clientX), (e.mouseY = t.clientY)),
          $("body").addClass("unselectable");
      }
      onMouseScroll(t) {
        return (
          (this.zoom.rateCurrent += t.originalEvent.detail > 0 ? 1 : -1),
          t.preventDefault(),
          !1
        );
      }
      onMouseWheel(t) {
        if (
          !this.options.wheelEventValidation ||
          this.options.wheelEventValidation.call(this, t)
        )
          return (
            (this.zoom.rateCurrent += t.originalEvent.wheelDelta > 0 ? 1 : -1),
            t.preventDefault(),
            !1
          );
      }
      onMouseUp(t) {
        let e = this;
        (e.mouseDown || e.rightMouseDown) &&
          ($("body").removeClass("unselectable"),
          (e.mouseDown = !1),
          (e.rightMouseDown = !1));
      }
      onMouseMove(t) {
        let e = this;
        if ((e.mouseDown || e.rightMouseDown) && void 0 !== e.mouseX) {
          var i, r;
          "touchmove" == t.type
            ? (t.preventDefault(),
              (i = t.originalEvent.touches[0].clientX),
              (r = t.originalEvent.touches[0].clientY))
            : ((i = t.clientX), (r = t.clientY));
          var n = ((i - e.mouseX) / e.width) * Math.PI * 2,
            s = ((r - e.mouseY) / e.width) * Math.PI * 2;
          if (e.mouseDown) {
            1 == e.up[2] ? (e.azimuth -= n) : (e.azimuth += n), (e.zenith += s);
            for (var a = 2 * Math.PI; e.azimuth < 0; ) e.azimuth += a;
            for (; e.azimuth > a; ) e.azimuth -= a;
            e.zenith < 1e-4 && (e.zenith = 1e-4),
              e.zenith >= Math.PI && (e.zenith = Math.PI - 1e-4);
          } else (e.translation[0] += n), (e.translation[1] += s);
          (e.mouseX = i), (e.mouseY = r);
        }
      }
      resize(t, e) {
        var i = this;
        if (i.width !== t || i.height !== e) {
          if (
            (i.fullscreen ||
              i.viewer.container.css({
                height: e + "px",
                position: "relative",
              }),
            (i.width = t),
            (i.height = e),
            i.canvas)
          )
            i.canvas.attr({ width: t, height: e }),
              i.canvas.css({ width: t + "px", height: e + "px" }),
              i.context.viewport(0, 0, i.width, i.height);
          else {
            if (
              ((i.canvas = $("<canvas/>")),
              i.canvas.attr({ width: t, height: e }),
              i.viewer.container.append(i.canvas),
              (i.context =
                i.canvas[0].getContext("webgl", {
                  alpha: !0,
                  premultipliedAlpha: !1,
                }) ||
                i.canvas[0].getContext("experimental-webgl", {
                  alpha: !0,
                  premultipliedAlpha: !1,
                })),
              (i.progressBg = $("<div/>", {
                css: {
                  display: "none",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "10px",
                  backgroundColor: "#000",
                },
              })),
              (i.progressBar = $("<div/>", {
                css: {
                  display: "none",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: "10px",
                  backgroundColor: "#ccc",
                },
              })),
              i.viewer.container.append(i.progressBg),
              i.viewer.container.append(i.progressBar),
              !i.context)
            )
              return (
                alert(
                  "No WebGL support, sorry! You should totally use Chrome."
                ),
                i.canvas.detach(),
                void (i.canvas = null)
              );
            const r =
              i.context.getExtension("EXT_texture_filter_anisotropic") ||
              i.context.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              i.context.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            r
              ? ((i.aniFilterExt = r),
                (i.aniFilterMax = i.context.getParameter(
                  r.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                )),
                WH.debug("Texture anisotropy enabled", i.aniFilterMax))
              : WH.debug("Texture anisotropy disabled (not supported)"),
              i.canvas
                .on("mousedown touchstart", i.onMouseDown.bind(i))
                .on("DOMMouseScroll", i.onMouseScroll.bind(i))
                .on("mousewheel", i.onMouseWheel.bind(i))
                .on("dblclick", i.onDoubleClick.bind(i))
                .on("contextmenu", i.onContextMenu.bind(i)),
              $(window).on("resize", i.onFullscreen.bind(i)),
              $(document)
                .on("mouseup touchend", i.onMouseUp.bind(i))
                .on("mousemove touchmove", i.onMouseMove.bind(i)),
              i.onFullscreen(null);
          }
          i.options.background && i.loadBackground();
        }
      }
      loadBackground() {
        var t = this,
          e = t.context;
        const i = function () {
            (t.vb = e.createBuffer()),
              e.bindBuffer(e.ARRAY_BUFFER, t.vb),
              e.bufferData(
                e.ARRAY_BUFFER,
                new Float32Array(16),
                e.DYNAMIC_DRAW
              );
            var i = t.compileShader(
                e.VERTEX_SHADER,
                "    attribute vec2 aPosition;    attribute vec2 aTexCoord;        varying vec2 vTexCoord;        void main(void) {        vTexCoord = aTexCoord;        gl_Position = vec4(aPosition, 0, 1);    }    "
              ),
              r = t.compileShader(
                e.FRAGMENT_SHADER,
                "    precision mediump float;    varying vec2 vTexCoord;        uniform sampler2D uTexture;        void main(void) {        gl_FragColor = texture2D(uTexture, vTexCoord);    }    "
              ),
              n = e.createProgram();
            e.attachShader(n, i),
              e.attachShader(n, r),
              e.linkProgram(n),
              e.getProgramParameter(n, e.LINK_STATUS)
                ? ((t.vs = i),
                  (t.fs = r),
                  (t.program = n),
                  (t.uTexture = e.getUniformLocation(n, "uTexture")),
                  (t.aPosition = e.getAttribLocation(n, "aPosition")),
                  (t.aTexCoord = e.getAttribLocation(n, "aTexCoord")))
                : console.error("Error linking shaders");
          },
          r = function () {
            var i = t.width / t.bgImg.width,
              r = t.height / t.bgImg.height;
            const n = [-1, -1, 0, r, 1, -1, i, r, -1, 1, 0, 0, 1, 1, i, 0];
            e.bindBuffer(e.ARRAY_BUFFER, t.vb),
              e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(n));
          };
        t.bgImg
          ? t.bgImg.loaded && (t.vb || i(), r())
          : ((t.bgImg = new Image()),
            (t.bgImg.crossOrigin = ""),
            (t.bgImg.onload = function () {
              (t.bgImg.loaded = !0),
                (t.bgTexture = e.createTexture()),
                e.bindTexture(e.TEXTURE_2D, t.bgTexture),
                e.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  e.RGBA,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  t.bgImg
                ),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                t.vb || i(),
                r();
            }),
            (t.bgImg.onerror = function () {
              t.bgImg = null;
            }),
            (t.bgImg.src = t.options.contentPath + t.options.background));
      }
      compileShader(t, e) {
        var i = this.context,
          r = i.createShader(t);
        if (
          (i.shaderSource(r, e),
          i.compileShader(r),
          !i.getShaderParameter(r, i.COMPILE_STATUS))
        )
          throw "Shader compile error: " + i.getShaderInfoLog(r);
        return r;
      }
    };
    let Ul = { Types: nr };
    const Pl = Object.assign(Rl, {
      Tools: ui,
      WebGL: Il,
      WEBGL: 1,
      WOW: 2,
      FLASH: 2,
      Wow: Ul,
    });
    window.ZamModelViewer = Pl;
  })();
})();
