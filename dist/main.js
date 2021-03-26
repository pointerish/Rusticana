(() => {
  "use strict";
  var e = {
      890: (e, n, t) => {
        t.d(n, { Z: () => r });
        var o = t(645),
          a = t.n(o)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Brygada+1918);",
        ]),
          a.push([
            e.id,
            ':root {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Brygada 1918", serif;\n  overflow-y: hidden;\n}\n\nbody {\n  background-color: #d3d3d3;\n}\n\n#content {\n  height: 100vh;\n}\n\n.header {\n  background-color: #eb9e34;\n}\n\n.d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.logo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.logo > p {\n  padding-left: 1rem;\n}\n\n.list-items {\n  cursor: pointer;\n  display: flex;\n}\n\n.list-items > div {\n  padding: 1rem;\n}\n\n.list-items > div:hover {\n  background-color: #d6621a;\n  text-decoration: underline;\n  text-decoration-color: #000;\n  font-weight: bolder;\n}\n\n.menu-section {\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.reservation-section {\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.about-section {\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.footer > small {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n',
            "",
          ]);
        const r = a;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, o) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var a = {};
              if (o)
                for (var r = 0; r < this.length; r++) {
                  var i = this[r][0];
                  null != i && (a[i] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (o && a[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = "".concat(t, " and ").concat(c[2]))
                      : (c[2] = t)),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      379: (e, n, t) => {
        var o,
          a = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          r = [];
        function i(e) {
          for (var n = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function s(e, n) {
          for (var t = {}, o = [], a = 0; a < e.length; a++) {
            var s = e[a],
              c = n.base ? s[0] + n.base : s[0],
              l = t[c] || 0,
              d = "".concat(c, " ").concat(l);
            t[c] = l + 1;
            var u = i(d),
              m = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== u
              ? (r[u].references++, r[u].updater(m))
              : r.push({ identifier: d, updater: v(m, n), references: 1 }),
              o.push(d);
          }
          return o;
        }
        function c(e) {
          var n = document.createElement("style"),
            o = e.attributes || {};
          if (void 0 === o.nonce) {
            var r = t.nc;
            r && (o.nonce = r);
          }
          if (
            (Object.keys(o).forEach(function (e) {
              n.setAttribute(e, o[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var i = a(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(n);
          }
          return n;
        }
        var l,
          d =
            ((l = []),
            function (e, n) {
              return (l[e] = n), l.filter(Boolean).join("\n");
            });
        function u(e, n, t, o) {
          var a = t
            ? ""
            : o.media
            ? "@media ".concat(o.media, " {").concat(o.css, "}")
            : o.css;
          if (e.styleSheet) e.styleSheet.cssText = d(n, a);
          else {
            var r = document.createTextNode(a),
              i = e.childNodes;
            i[n] && e.removeChild(i[n]),
              i.length ? e.insertBefore(r, i[n]) : e.appendChild(r);
          }
        }
        function m(e, n, t) {
          var o = t.css,
            a = t.media,
            r = t.sourceMap;
          if (
            (a ? e.setAttribute("media", a) : e.removeAttribute("media"),
            r &&
              "undefined" != typeof btoa &&
              (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = o;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o));
          }
        }
        var p = null,
          f = 0;
        function v(e, n) {
          var t, o, a;
          if (n.singleton) {
            var r = f++;
            (t = p || (p = c(n))),
              (o = u.bind(null, t, r, !1)),
              (a = u.bind(null, t, r, !0));
          } else
            (t = c(n)),
              (o = m.bind(null, t, n)),
              (a = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            o(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                o((e = n));
              } else a();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === o &&
                (o = Boolean(
                  window && document && document.all && !window.atob
                )),
              o));
          var t = s((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var o = 0; o < t.length; o++) {
                var a = i(t[o]);
                r[a].references--;
              }
              for (var c = s(e, n), l = 0; l < t.length; l++) {
                var d = i(t[l]);
                0 === r[d].references && (r[d].updater(), r.splice(d, 1));
              }
              t = c;
            }
          };
        };
      },
    },
    n = {};
  function t(o) {
    var a = n[o];
    if (void 0 !== a) return a.exports;
    var r = (n[o] = { id: o, exports: {} });
    return e[o](r, r.exports, t), r.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      const e = () => {
          const e = document.createElement("div");
          e.className = "header";
          const n = document.createElement("div");
          (n.className = "d-flex header-items"), e.appendChild(n);
          const t = document.createElement("div");
          t.className = "logo";
          const o = document.createElement("p");
          (o.textContent = "Rusticana Ristorante"),
            t.appendChild(o),
            n.appendChild(t);
          const a = document.createElement("div");
          (a.className = "list-items"), n.appendChild(a);
          const r = {
            menuBtn: "Menu",
            reservationsBtn: "Reservations",
            aboutBtn: "About",
          };
          return (
            Object.keys(r).forEach((e) => {
              const n = document.createElement("div");
              (n.textContent = r[e]), (n.className = e), a.appendChild(n);
            }),
            e
          );
        },
        n = () => {
          const e = document.createElement("div");
          e.className = "tabs";
          const n = document.createElement("section");
          (n.className = "menu-section"),
            n.appendChild(
              (() => {
                const e = [
                    "Caprese Salad",
                    "Panzenella",
                    "Bruschetta",
                    "Carbonara",
                    "Pasta Con Pomodoro E Basilico",
                  ],
                  n = document.createElement("div");
                n.className = "manu-items";
                for (let t = 0; t <= e.length; t += 1) {
                  const o = document.createElement("div");
                  (o.className = "manu-item"),
                    (o.textContent = e[t]),
                    n.appendChild(o);
                }
                return n;
              })()
            ),
            e.appendChild(n);
          const t = document.createElement("section");
          (t.className = "reservation-section"),
            t.appendChild(
              (() => {
                const e = document.createElement("div");
                return (
                  (e.className = "reservation-main"),
                  (e.textContent =
                    "Rusticana Ristorante is a very demanded restaurant. In order to make a reservation send an email to reservations@rusticana.com"),
                  e
                );
              })()
            ),
            e.appendChild(t);
          const o = document.createElement("section");
          return (
            (o.className = "about-section"),
            o.appendChild(
              (() => {
                const e = document.createElement("div");
                return (
                  (e.className = "about-main"),
                  (e.textContent =
                    "Rusticana Ristorante open its doors in 1891 when Piero Martinelli returned from Rome after attending Pietro Mascagni's Cavalleria Rusticana opera. Since then, we have been cooking to the highest standards."),
                  e
                );
              })()
            ),
            e.appendChild(o),
            e
          );
        },
        o = () => {
          const e = document.createElement("div");
          e.className = "footer";
          const n = document.createElement("small");
          return (
            (n.textContent = "Rusticana Ristorante — 2021"),
            (n.className = "footer-p"),
            e.appendChild(n),
            e
          );
        };
      var a = t(379),
        r = t.n(a),
        i = t(890);
      r()(i.Z, { insert: "head", singleton: !1 }),
        i.Z.locals,
        (() => {
          const t = [e(), n(), o()],
            a = document.querySelector(".content");
          for (let e = 0; e <= t.length; e += 1) a.appendChild(t[e]);
          const r = document.querySelector(".menuBtn"),
            i = document.querySelector(".reservationsBtn"),
            s = document.querySelector(".aboutBtn"),
            c = document.querySelector(".menu-section"),
            l = document.querySelector(".reservation-section"),
            d = document.querySelector(".about-section");
          (c.style.display = "flex"),
            (l.style.display = "none"),
            (d.style.display = "none"),
            window.addEventListener("click", (e) => {
              e.target === r &&
                ((c.style.display = "flex"),
                (l.style.display = "none"),
                (d.style.display = "none")),
                e.target === i &&
                  ((c.style.display = "none"),
                  (l.style.display = "flex"),
                  (d.style.display = "none")),
                e.target === s &&
                  ((c.style.display = "none"),
                  (l.style.display = "none"),
                  (d.style.display = "flex"));
            });
        })();
    })();
})();
