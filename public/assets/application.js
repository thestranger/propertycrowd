/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function (e, t) {
    function n(e) {
        return B.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    function r(e) {
        if (!mn[e]) {
            var t = D.body,
                n = B("<" + e + ">").appendTo(t),
                r = n.css("display");
            n.remove();
            if (r === "none" || r === "") {
                gn || (gn = D.createElement("iframe"), gn.frameBorder = gn.width = gn.height = 0), t.appendChild(gn);
                if (!yn || !gn.createElement) yn = (gn.contentWindow || gn.contentDocument).document, yn.write((D.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), yn.close();
                n = yn.createElement(e), yn.body.appendChild(n), r = B.css(n, "display"), t.removeChild(gn)
            }
            mn[e] = r
        }
        return mn[e]
    }
    function i(e, t) {
        var n = {};
        return B.each(Sn.concat.apply([], Sn.slice(0, t)), function () {
            n[this] = e
        }), n
    }
    function s() {
        xn = t
    }
    function o() {
        return setTimeout(s, 0), xn = B.now()
    }
    function u() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function a() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function f(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
            i = {}, s, o, u = r.length,
            a, f = r[0],
            l, c, h, p, d;
        for (s = 1; s < u; s++) {
            if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            l = f, f = r[s];
            if (f === "*") f = l;
            else if (l !== "*" && l !== f) {
                c = l + " " + f, h = i[c] || i["* " + f];
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i[a[1] + " " + f];
                            if (d) {
                                p = i[p], p === !0 ? h = d : d === !0 && (h = p);
                                break
                            }
                        }
                    }
                }!h && !d && B.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)))
            }
        }
        return n
    }
    function l(e, n, r) {
        var i = e.contents,
            s = e.dataTypes,
            o = e.responseFields,
            u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u) for (a in i) if (i[a] && i[a].test(u)) {
                    s.unshift(a);
                    break
                }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        } if (f) return f !== s[0] && s.unshift(f), r[f]
    }
    function c(e, t, n, r) {
        if (B.isArray(t)) B.each(t, function (t, i) {
                n || zt.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" || B.isArray(i) ? t : "") + "]", i, n, r)
            });
        else if (!n && t != null && typeof t == "object") for (var i in t) c(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function h(e, n) {
        var r, i, s = B.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && B.extend(!0, e, i)
    }
    function p(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s],
            a = 0,
            f = u ? u.length : 0,
            l = e === sn,
            c;
        for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = p(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o)), c
    }
    function d(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (B.isFunction(n)) {
                var r = t.toLowerCase().split(en),
                    i = 0,
                    s = r.length,
                    o, u, a;
                for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n)
            }
        }
    }
    function v(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = t === "width" ? jt : Ft,
            s = 0,
            o = i.length;
        if (r > 0) {
            if (n !== "border") for (; s < o; s++) n || (r -= parseFloat(B.css(e, "padding" + i[s])) || 0), n === "margin" ? r += parseFloat(B.css(e, n + i[s])) || 0 : r -= parseFloat(B.css(e, "border" + i[s] + "Width")) || 0;
            return r + "px"
        }
        r = It(e, t, t);
        if (r < 0 || r == null) r = e.style[t] || 0;
        r = parseFloat(r) || 0;
        if (n) for (; s < o; s++) r += parseFloat(B.css(e, "padding" + i[s])) || 0, n !== "padding" && (r += parseFloat(B.css(e, "border" + i[s] + "Width")) || 0), n === "margin" && (r += parseFloat(B.css(e, n + i[s])) || 0);
        return r + "px"
    }
    function m(e, t) {
        t.src ? B.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }
    function g(e) {
        var t = D.createElement("div");
        return At.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }
    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? b(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && B.grep(e.getElementsByTagName("input"), b)
    }
    function b(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
    }
    function w(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function E(e, t) {
        var n;
        if (t.nodeType === 1) {
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase();
            if (n === "object") t.outerHTML = e.outerHTML;
            else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                if (n === "option") t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            } else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
            t.removeAttribute(B.expando)
        }
    }
    function S(e, t) {
        if (t.nodeType === 1 && !! B.hasData(e)) {
            var n, r, i, s = B._data(e),
                o = B._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u) for (r = 0, i = u[n].length; r < i; r++) B.event.add(t, n + (u[n][r].namespace ? "." : "") + u[n][r].namespace, u[n][r], u[n][r].data)
            }
            o.data && (o.data = B.extend({}, o.data))
        }
    }
    function x(e, t) {
        return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function T(e) {
        var t = vt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function N(e, t, n) {
        t = t || 0;
        if (B.isFunction(t)) return B.grep(e, function (e, r) {
                var i = !! t.call(e, r, e);
                return i === n
            });
        if (t.nodeType) return B.grep(e, function (e, r) {
                return e === t === n
            });
        if (typeof t == "string") {
            var r = B.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (ct.test(t)) return B.filter(t, r, !n);
            t = B.filter(t, r)
        }
        return B.grep(e, function (e, r) {
            return B.inArray(e, t) >= 0 === n
        })
    }
    function C(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function k() {
        return !0
    }
    function L() {
        return !1
    }
    function A(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            s = t + "mark",
            o = B._data(e, r);
        o && (n === "queue" || !B._data(e, i)) && (n === "mark" || !B._data(e, s)) && setTimeout(function () {
            !B._data(e, i) && !B._data(e, s) && (B.removeData(e, r, !0), o.fire())
        }, 0)
    }
    function O(e) {
        for (var t in e) {
            if (t === "data" && B.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }
    function M(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : B.isNumeric(r) ? parseFloat(r) : I.test(r) ? B.parseJSON(r) : r
                } catch (s) {}
                B.data(e, n, r)
            } else r = t
        }
        return r
    }
    function _(e) {
        var t = j[e] = {}, n, r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t
    }
    var D = e.document,
        P = e.navigator,
        H = e.location,
        B = function () {
            function n() {
                if (!r.isReady) {
                    try {
                        D.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(n, 1);
                        return
                    }
                    r.ready()
                }
            }
            var r = function (e, t) {
                return new r.fn.init(e, t, o)
            }, i = e.jQuery,
                s = e.$,
                o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                a = /\S/,
                f = /^\s+/,
                l = /\s+$/,
                c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                h = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                v = /(?:^|:|,)(?:\s*\[)+/g,
                m = /(webkit)[ \/]([\w.]+)/,
                g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                y = /(msie) ([\w.]+)/,
                b = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                E = /^-ms-/,
                S = function (e, t) {
                    return (t + "").toUpperCase()
                }, x = P.userAgent,
                T, N, C, k = Object.prototype.toString,
                L = Object.prototype.hasOwnProperty,
                A = Array.prototype.push,
                O = Array.prototype.slice,
                M = String.prototype.trim,
                _ = Array.prototype.indexOf,
                H = {};
            return r.fn = r.prototype = {
                constructor: r,
                init: function (e, n, i) {
                    var s, o, a, f;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if (e === "body" && !n && D.body) return this.context = D, this[0] = D.body, this.selector = e, this.length = 1, this;
                    if (typeof e == "string") {
                        e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? s = u.exec(e) : s = [null, e, null];
                        if (s && (s[1] || !n)) {
                            if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : D, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [D.createElement(a[1])], r.fn.attr.call(e, n, !0)) : e = [f.createElement(a[1])] : (a = r.buildFragment([s[1]], [f]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
                            o = D.getElementById(s[2]);
                            if (o && o.parentNode) {
                                if (o.id !== s[2]) return i.find(e);
                                this.length = 1, this[0] = o
                            }
                            return this.context = D, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                    }
                    return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return O.call(this, 0)
                },
                get: function (e) {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, n) {
                    var i = this.constructor();
                    return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function (e, t) {
                    return r.each(this, e, t)
                },
                ready: function (e) {
                    return r.bindReady(), N.add(e), this
                },
                eq: function (e) {
                    return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","))
                },
                map: function (e) {
                    return this.pushStack(r.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: A,
                sort: [].sort,
                splice: [].splice
            }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function () {
                var e, n, i, s, o, u, a = arguments[0] || {}, f = 1,
                    l = arguments.length,
                    c = !1;
                typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
                for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
                            i = a[n], s = e[n];
                            if (a === s) continue;
                            c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s)
                    }
                return a
            }, r.extend({
                noConflict: function (t) {
                    return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? r.readyWait++ : r.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
                        if (!D.body) return setTimeout(r.ready, 1);
                        r.isReady = !0;
                        if (e !== !0 && --r.readyWait > 0) return;
                        N.fireWith(D, [r]), r.fn.trigger && r(D).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!N) {
                        N = r.Callbacks("once memory");
                        if (D.readyState === "complete") return setTimeout(r.ready, 1);
                        if (D.addEventListener) D.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1);
                        else if (D.attachEvent) {
                            D.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
                            var t = !1;
                            try {
                                t = e.frameElement == null
                            } catch (i) {}
                            D.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function (e) {
                    return r.type(e) === "function"
                },
                isArray: Array.isArray || function (e) {
                    return r.type(e) === "array"
                },
                isWindow: function (e) {
                    return e && typeof e == "object" && "setInterval" in e
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return e == null ? String(e) : H[k.call(e)] || "object"
                },
                isPlainObject: function (e) {
                    if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var i;
                    for (i in e);
                    return i === t || L.call(e, i)
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    t = r.trim(t);
                    if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                    if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return (new Function("return " + t))();
                    r.error("Invalid JSON: " + t)
                },
                parseXML: function (n) {
                    var i, s;
                    try {
                        e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i
                },
                noop: function () {},
                globalEval: function (t) {
                    t && a.test(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(E, "ms-").replace(w, S)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (e, n, i) {
                    var s, o = 0,
                        u = e.length,
                        a = u === t || r.isFunction(e);
                    if (i) {
                        if (a) {
                            for (s in e) if (n.apply(e[s], i) === !1) break
                        } else for (; o < u;) if (n.apply(e[o++], i) === !1) break
                    } else if (a) {
                        for (s in e) if (n.call(e[s], s, e[s]) === !1) break
                    } else for (; o < u;) if (n.call(e[o], o, e[o++]) === !1) break; return e
                },
                trim: M ? function (e) {
                    return e == null ? "" : M.call(e)
                } : function (e) {
                    return e == null ? "" : (e + "").replace(f, "").replace(l, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    if (e != null) {
                        var i = r.type(e);
                        e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e)
                    }
                    return n
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (_) return _.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for (; n < r; n++) if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, n) {
                    var r = e.length,
                        i = 0;
                    if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i];
                    else while (n[i] !== t) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i;
                    n = !! n;
                    for (var s = 0, o = e.length; s < o; s++) i = !! t(e[s], s), n !== i && r.push(e[s]);
                    return r
                },
                map: function (e, n, i) {
                    var s, o, u = [],
                        a = 0,
                        f = e.length,
                        l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
                    if (l) for (; a < f; a++) s = n(e[a], a, i), s != null && (u[u.length] = s);
                    else for (o in e) s = n(e[o], o, i), s != null && (u[u.length] = s);
                    return u.concat.apply([], u)
                },
                guid: 1,
                proxy: function (e, n) {
                    if (typeof n == "string") {
                        var i = e[n];
                        n = e, e = i
                    }
                    if (!r.isFunction(e)) return t;
                    var s = O.call(arguments, 2),
                        o = function () {
                            return e.apply(n, s.concat(O.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || r.guid++, o
                },
                access: function (e, n, i, s, o, u) {
                    var a = e.length;
                    if (typeof n == "object") {
                        for (var f in n) r.access(e, f, n[f], s, o, i);
                        return e
                    }
                    if (i !== t) {
                        s = !u && s && r.isFunction(i);
                        for (var l = 0; l < a; l++) o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
                        return e
                    }
                    return a ? o(e[0], n) : t
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, i) {
                        return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(D);
                    return e
                },
                browser: {}
            }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                H["[object " + t + "]"] = t.toLowerCase()
            }), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test(" ") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(D), D.addEventListener ? C = function () {
                D.removeEventListener("DOMContentLoaded", C, !1), r.ready()
            } : D.attachEvent && (C = function () {
                D.readyState === "complete" && (D.detachEvent("onreadystatechange", C), r.ready())
            }), r
        }(),
        j = {};
    B.Callbacks = function (e) {
        e = e ? j[e] || _(e) : {};
        var n = [],
            r = [],
            i, s, o, u, a, f = function (t) {
                var r, i, s, o, u;
                for (r = 0, i = t.length; r < i; r++) s = t[r], o = B.type(s), o === "array" ? f(s) : o === "function" && (!e.unique || !c.has(s)) && n.push(s)
            }, l = function (t, f) {
                f = f || [], i = !e.memory || [t, f], s = !0, a = o || 0, o = 0, u = n.length;
                for (; n && a < u; a++) if (n[a].apply(t, f) === !1 && e.stopOnFalse) {
                        i = !0;
                        break
                    }
                s = !1, n && (e.once ? i === !0 ? c.disable() : n = [] : r && r.length && (i = r.shift(), c.fireWith(i[0], i[1])))
            }, c = {
                add: function () {
                    if (n) {
                        var e = n.length;
                        f(arguments), s ? u = n.length : i && i !== !0 && (o = e, l(i[0], i[1]))
                    }
                    return this
                },
                remove: function () {
                    if (n) {
                        var t = arguments,
                            r = 0,
                            i = t.length;
                        for (; r < i; r++) for (var o = 0; o < n.length; o++) if (t[r] === n[o]) {
                                    s && o <= u && (u--, o <= a && a--), n.splice(o--, 1);
                                    if (e.unique) break
                                }
                    }
                    return this
                },
                has: function (e) {
                    if (n) {
                        var t = 0,
                            r = n.length;
                        for (; t < r; t++) if (e === n[t]) return !0
                    }
                    return !1
                },
                empty: function () {
                    return n = [], this
                },
                disable: function () {
                    return n = r = i = t, this
                },
                disabled: function () {
                    return !n
                },
                lock: function () {
                    return r = t, (!i || i === !0) && c.disable(), this
                },
                locked: function () {
                    return !r
                },
                fireWith: function (t, n) {
                    return r && (s ? e.once || r.push([t, n]) : (!e.once || !i) && l(t, n)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    };
    var F = [].slice;
    B.extend({
        Deferred: function (e) {
            var t = B.Callbacks("once memory"),
                n = B.Callbacks("once memory"),
                r = B.Callbacks("memory"),
                i = "pending",
                s = {
                    resolve: t,
                    reject: n,
                    notify: r
                }, o = {
                    done: t.add,
                    fail: n.add,
                    progress: r.add,
                    state: function () {
                        return i
                    },
                    isResolved: t.fired,
                    isRejected: n.fired,
                    then: function (e, t, n) {
                        return u.done(e).fail(t).progress(n), this
                    },
                    always: function () {
                        return u.done.apply(u, arguments).fail.apply(u, arguments), this
                    },
                    pipe: function (e, t, n) {
                        return B.Deferred(function (r) {
                            B.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function (e, t) {
                                var n = t[0],
                                    i = t[1],
                                    s;
                                B.isFunction(n) ? u[e](function () {
                                    s = n.apply(this, arguments), s && B.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [s])
                                }) : u[e](r[i])
                            })
                        }).promise()
                    },
                    promise: function (e) {
                        if (e == null) e = o;
                        else for (var t in o) e[t] = o[t];
                        return e
                    }
                }, u = o.promise({}),
                a;
            for (a in s) u[a] = s[a].fire, u[a + "With"] = s[a].fireWith;
            return u.done(function () {
                i = "resolved"
            }, n.disable, r.lock).fail(function () {
                i = "rejected"
            }, t.disable, r.lock), e && e.call(u, u), u
        },
        when: function (e) {
            function t(e) {
                return function (t) {
                    o[e] = arguments.length > 1 ? F.call(arguments, 0) : t, f.notifyWith(l, o)
                }
            }
            function n(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? F.call(arguments, 0) : t, --u || f.resolveWith(f, r)
                }
            }
            var r = F.call(arguments, 0),
                i = 0,
                s = r.length,
                o = Array(s),
                u = s,
                a = s,
                f = s <= 1 && e && B.isFunction(e.promise) ? e : B.Deferred(),
                l = f.promise();
            if (s > 1) {
                for (; i < s; i++) r[i] && r[i].promise && B.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
                u || f.resolveWith(f, r)
            } else f !== e && f.resolveWith(f, s ? [e] : []);
            return l
        }
    }), B.support = function () {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d = D.createElement("div"),
            v = D.documentElement;
        d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0];
        if (!n || !n.length || !r) return {};
        i = D.createElement("select"), s = i.appendChild(D.createElement("option")), o = d.getElementsByTagName("input")[0], t = {
            leadingWhitespace: d.firstChild.nodeType === 3,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !! d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: o.value === "on",
            optSelected: s.selected,
            getSetAttribute: d.className !== "t",
            enctype: !! D.createElement("form").enctype,
            html5Clone: D.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (m) {
            t.deleteExpando = !1
        }!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).fireEvent("onclick")), o = D.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), d.appendChild(o), a = D.createDocumentFragment(), a.appendChild(d.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, a.removeChild(o), a.appendChild(d), d.innerHTML = "", e.getComputedStyle && (u = D.createElement("div"), u.style.width = "0", u.style.marginRight = "0", d.style.width = "2px", d.appendChild(u), t.reliableMarginRight = (parseInt((e.getComputedStyle(u, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (d.attachEvent) for (h in {
                submit: 1,
                change: 1,
                focusin: 1
            }) c = "on" + h, p = c in d, p || (d.setAttribute(c, "return;"), p = typeof d[c] == "function"), t[h + "Bubbles"] = p;
        return a.removeChild(d), a = i = s = u = d = o = null, B(function () {
            var e, n, r, i, s, o, u, a, l, c, h, v = D.getElementsByTagName("body")[0];
            !v || (u = 1, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", c = "style='" + a + "border:5px solid #000;padding:0;'", h = "<div " + c + "><div></div></div>" + "<table " + c + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", e = D.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + u + "px", v.insertBefore(e, v.firstChild), d = D.createElement("div"), e.appendChild(d), d.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), p = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", t.reliableHiddenOffsets = p && f[0].offsetHeight === 0, d.innerHTML = "", d.style.width = d.style.paddingLeft = "1px", B.boxModel = t.boxModel = d.offsetWidth === 2, typeof d.style.zoom != "undefined" && (d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = d.offsetWidth === 2, d.style.display = "", d.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = d.offsetWidth !== 2), d.style.cssText = a + l, d.innerHTML = h, n = d.firstChild, r = n.firstChild, s = n.nextSibling.firstChild.firstChild, o = {
                doesNotAddBorder: r.offsetTop !== 5,
                doesAddBorderForTableAndCells: s.offsetTop === 5
            }, r.style.position = "fixed", r.style.top = "20px", o.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15, r.style.position = r.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5, o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== u, v.removeChild(e), d = e = null, B.extend(t, o))
        }), t
    }();
    var I = /^(?:\{.*\}|\[.*\])$/,
        q = /([A-Z])/g;
    B.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando], !! e && !O(e)
        },
        data: function (e, n, r, i) {
            if ( !! B.acceptData(e)) {
                var s, o, u, a = B.expando,
                    f = typeof n == "string",
                    l = e.nodeType,
                    c = l ? B.cache : e,
                    h = l ? e[a] : e[a] && a,
                    p = n === "events";
                if ((!h || !c[h] || !p && !i && !c[h].data) && f && r === t) return;
                h || (l ? e[a] = h = ++B.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = B.noop));
                if (typeof n == "object" || typeof n == "function") i ? c[h] = B.extend(c[h], n) : c[h].data = B.extend(c[h].data, n);
                return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[B.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[B.camelCase(n)])) : u = o, u)
            }
        },
        removeData: function (e, t, n) {
            if ( !! B.acceptData(e)) {
                var r, i, s, o = B.expando,
                    u = e.nodeType,
                    a = u ? B.cache : e,
                    f = u ? e[o] : o;
                if (!a[f]) return;
                if (t) {
                    r = n ? a[f] : a[f].data;
                    if (r) {
                        B.isArray(t) || (t in r ? t = [t] : (t = B.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                        if (!(n ? O : B.isEmptyObject)(r)) return
                    }
                }
                if (!n) {
                    delete a[f].data;
                    if (!O(a[f])) return
                }
                B.support.deleteExpando || !a.setInterval ? delete a[f] : a[f] = null, u && (B.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
            }
        },
        _data: function (e, t, n) {
            return B.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = B.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), B.fn.extend({
        data: function (e, n) {
            var r, i, s, o = null;
            if (typeof e == "undefined") {
                if (this.length) {
                    o = B.data(this[0]);
                    if (this[0].nodeType === 1 && !B._data(this[0], "parsedAttrs")) {
                        i = this[0].attributes;
                        for (var u = 0, a = i.length; u < a; u++) s = i[u].name, s.indexOf("data-") === 0 && (s = B.camelCase(s.substring(5)), M(this[0], s, o[s]));
                        B._data(this[0], "parsedAttrs", !0)
                    }
                }
                return o
            }
            return typeof e == "object" ? this.each(function () {
                B.data(this, e)
            }) : (r = e.split("."), r[1] = r[1] ? "." + r[1] : "", n === t ? (o = this.triggerHandler("getData" + r[1] + "!", [r[0]]), o === t && this.length && (o = B.data(this[0], e), o = M(this[0], e, o)), o === t && r[1] ? this.data(r[0]) : o) : this.each(function () {
                var t = B(this),
                    i = [r[0], n];
                t.triggerHandler("setData" + r[1] + "!", i), B.data(this, e, n), t.triggerHandler("changeData" + r[1] + "!", i)
            }))
        },
        removeData: function (e) {
            return this.each(function () {
                B.removeData(this, e)
            })
        }
    }), B.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", B._data(e, t, (B._data(e, t) || 0) + 1))
        },
        _unmark: function (e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark",
                    i = e ? 0 : (B._data(t, r) || 1) - 1;
                i ? B._data(t, r, i) : (B.removeData(t, r, !0), A(t, n, "mark"))
            }
        },
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = B._data(e, t), n && (!r || B.isArray(n) ? r = B._data(e, t, B.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = B.queue(e, t),
                r = n.shift(),
                i = {};
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), B._data(e, t + ".run", i), r.call(e, function () {
                B.dequeue(e, t)
            }, i)), n.length || (B.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"))
        }
    }), B.fn.extend({
        queue: function (e, n) {
            return typeof e != "string" && (n = e, e = "fx"), n === t ? B.queue(this[0], e) : this.each(function () {
                var t = B.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && B.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                B.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = B.fx ? B.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            function r() {
                --u || i.resolveWith(s, [s])
            }
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var i = B.Deferred(),
                s = this,
                o = s.length,
                u = 1,
                a = e + "defer",
                f = e + "queue",
                l = e + "mark",
                c;
            while (o--) if (c = B.data(s[o], a, t, !0) || (B.data(s[o], f, t, !0) || B.data(s[o], l, t, !0)) && B.data(s[o], a, B.Callbacks("once memory"), !0)) u++, c.add(r);
            return r(), i.promise()
        }
    });
    var R = /[\n\t\r]/g,
        U = /\s+/,
        z = /\r/g,
        W = /^(?:button|input)$/i,
        X = /^(?:button|input|object|select|textarea)$/i,
        V = /^a(?:rea)?$/i,
        $ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J = B.support.getSetAttribute,
        K, Q, G;
    B.fn.extend({
        attr: function (e, t) {
            return B.access(this, e, t, !0, B.attr)
        },
        removeAttr: function (e) {
            return this.each(function () {
                B.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return B.access(this, e, t, !0, B.prop)
        },
        removeProp: function (e) {
            return e = B.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (B.isFunction(e)) return this.each(function (t) {
                    B(this).addClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string") {
                t = e.split(U);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++)~ s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                            i.className = B.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (B.isFunction(e)) return this.each(function (t) {
                    B(this).removeClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(U);
                for (r = 0, i = this.length; r < i; r++) {
                    s = this[r];
                    if (s.nodeType === 1 && s.className) if (e) {
                            o = (" " + s.className + " ").replace(R, " ");
                            for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
                            s.className = B.trim(o)
                        } else s.className = ""
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return B.isFunction(e) ? this.each(function (n) {
                B(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = B(this),
                        u = t,
                        a = e.split(U);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && B._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if ( !! arguments.length) return i = B.isFunction(e), this.each(function (r) {
                    var s = B(this),
                        o;
                    if (this.nodeType === 1) {
                        i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : B.isArray(o) && (o = B.map(o, function (e) {
                            return e == null ? "" : e + ""
                        })), n = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type];
                        if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o
                    }
                });
            if (s) return n = B.valHooks[s.nodeName.toLowerCase()] || B.valHooks[s.type], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(z, "") : r == null ? "" : r)
        }
    }), B.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i, s = e.selectedIndex,
                        o = [],
                        u = e.options,
                        a = e.type === "select-one";
                    if (s < 0) return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (B.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !B.nodeName(i.parentNode, "optgroup"))) {
                            t = B(i).val();
                            if (a) return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? B(u[s]).val() : o
                },
                set: function (e, t) {
                    var n = B.makeArray(t);
                    return B(e).find("option").each(function () {
                        this.selected = B.inArray(B(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if ( !! e && a !== 3 && a !== 8 && a !== 2) {
                if (i && n in B.attrFn) return B(e)[n](r);
                if (typeof e.getAttribute == "undefined") return B.prop(e, n, r);
                u = a !== 1 || !B.isXMLDoc(e), u && (n = n.toLowerCase(), o = B.attrHooks[n] || ($.test(n) ? Q : K));
                if (r !== t) {
                    if (r === null) {
                        B.removeAttr(e, n);
                        return
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
            }
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(U), s = r.length;
                for (; o < s; o++) i = r[o], i && (n = B.propFix[i] || i, B.attr(e, i, ""), e.removeAttribute(J ? i : n), $.test(i) && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (W.test(e.nodeName) && e.parentNode) B.error("type property can't be changed");
                    else if (!B.support.radioValue && t === "radio" && B.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return K && B.nodeName(e, "button") ? K.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (K && B.nodeName(e, "button")) return K.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if ( !! e && u !== 3 && u !== 8 && u !== 2) return o = u !== 1 || !B.isXMLDoc(e), o && (n = B.propFix[n] || n, s = B.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), B.attrHooks.tabindex = B.propHooks.tabIndex, Q = {
        get: function (e, n) {
            var r, i = B.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? B.removeAttr(e, n) : (r = B.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, J || (G = {
        name: !0,
        id: !0
    }, K = B.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (G[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = D.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, B.attrHooks.tabindex.set = K.set, B.each(["width", "height"], function (e, t) {
        B.attrHooks[t] = B.extend(B.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), B.attrHooks.contenteditable = {
        get: K.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), K.set(e, t, n)
        }
    }), B.support.hrefNormalized || B.each(["href", "src", "width", "height"], function (e, n) {
        B.attrHooks[n] = B.extend(B.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), B.support.style || (B.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), B.support.optSelected || (B.propHooks.selected = B.extend(B.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), B.support.enctype || (B.propFix.enctype = "encoding"), B.support.checkOn || B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = B.extend(B.valHooks[this], {
            set: function (e, t) {
                if (B.isArray(t)) return e.checked = B.inArray(B(e).val(), t) >= 0
            }
        })
    });
    var Y = /^(?:textarea|input|select)$/i,
        Z = /^([^\.]*)?(?:\.(.+))?$/,
        et = /\bhover(\.\S+)?\b/,
        tt = /^key/,
        nt = /^(?:mouse|contextmenu)|click/,
        rt = /^(?:focusinfocus|focusoutblur)$/,
        it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        st = function (e) {
            var t = it.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        }, ot = function (e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
        }, ut = function (e) {
            return B.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1")
        };
    B.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g;
            if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = B._data(e)))) {
                r.handler && (d = r, r = d.handler), r.guid || (r.guid = B.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                    return typeof B == "undefined" || !! e && B.event.triggered === e.type ? t : B.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = B.trim(ut(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = Z.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = B.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = B.event.special[c] || {}, p = B.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        quick: st(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), B.event.global[c] = !0
                }
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s = B.hasData(e) && B._data(e),
                o, u, a, f, l, c, h, p, d, v, m, g;
            if ( !! s && !! (p = s.events)) {
                t = B.trim(ut(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    u = Z.exec(t[o]) || [], a = f = u[1], l = u[2];
                    if (!a) {
                        for (a in p) B.event.remove(e, a + t[o], n, r, !0);
                        continue
                    }
                    d = B.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (h = 0; h < m.length; h++) g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
                    m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && B.removeEvent(e, a, s.handle), delete p[a])
                }
                B.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), B.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, i, s) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var o = n.type || n,
                    u = [],
                    a, f, l, c, h, p, d, v, m, g;
                if (rt.test(o + B.event.triggered)) return;
                o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
                if ((!i || B.event.customEvent[o]) && !B.event.global[o]) return;
                n = typeof n == "object" ? n[B.expando] ? n : new B.Event(o, n) : new B.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
                if (!i) {
                    a = B.cache;
                    for (l in a) a[l].events && a[l].events[o] && B.event.trigger(n, r, a[l].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = i), r = r != null ? B.makeArray(r) : [], r.unshift(n), d = B.event.special[o] || {};
                if (d.trigger && d.trigger.apply(i, r) === !1) return;
                m = [
                    [i, d.bindType || o]
                ];
                if (!s && !d.noBubble && !B.isWindow(i)) {
                    g = d.delegateType || o, c = rt.test(g + o) ? i : i.parentNode, h = null;
                    for (; c; c = c.parentNode) m.push([c, g]), h = c;
                    h && h === i.ownerDocument && m.push([h.defaultView || h.parentWindow || e, g])
                }
                for (l = 0; l < m.length && !n.isPropagationStopped(); l++) c = m[l][0], n.type = m[l][1], v = (B._data(c, "events") || {})[n.type] && B._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && B.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
                return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !B.nodeName(i, "a")) && B.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !B.isWindow(i) && (h = i[p], h && (i[p] = null), B.event.triggered = o, i[o](), B.event.triggered = t, h && (i[p] = h)), n.result
            }
        },
        dispatch: function (n) {
            n = B.event.fix(n || e.event);
            var r = (B._data(this, "events") || {})[n.type] || [],
                i = r.delegateCount,
                s = [].slice.call(arguments, 0),
                o = !n.exclusive && !n.namespace,
                u = [],
                a, f, l, c, h, p, d, v, m, g, y;
            s[0] = n, n.delegateTarget = this;
            if (i && !n.target.disabled && (!n.button || n.type !== "click")) {
                c = B(this), c.context = this.ownerDocument || this;
                for (l = n.target; l != this; l = l.parentNode || this) {
                    p = {}, v = [], c[0] = l;
                    for (a = 0; a < i; a++) m = r[a], g = m.selector, p[g] === t && (p[g] = m.quick ? ot(l, m.quick) : c.is(g)), p[g] && v.push(m);
                    v.length && u.push({
                        elem: l,
                        matches: v
                    })
                }
            }
            r.length > i && u.push({
                elem: this,
                matches: r.slice(i)
            });
            for (a = 0; a < u.length && !n.isPropagationStopped(); a++) {
                d = u[a], n.currentTarget = d.elem;
                for (f = 0; f < d.matches.length && !n.isImmediatePropagationStopped(); f++) {
                    m = d.matches[f];
                    if (o || !n.namespace && !m.namespace || n.namespace_re && n.namespace_re.test(m.namespace)) n.data = m.data, n.handleObj = m, h = ((B.event.special[m.origType] || {}).handle || m.handler).apply(d.elem, s), h !== t && (n.result = h, h === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, o = n.button,
                    u = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || D, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[B.expando]) return e;
            var n, r, i = e,
                s = B.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = B.Event(i);
            for (n = o.length; n;) r = o[--n], e[r] = i[r];
            return e.target || (e.target = i.srcElement || D), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e
        },
        special: {
            ready: {
                setup: B.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    B.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = B.extend(new B.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? B.event.trigger(i, null, t) : B.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, B.event.handle = B.event.dispatch, B.removeEvent = D.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, B.Event = function (e, t) {
        if (!(this instanceof B.Event)) return new B.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k : L) : this.type = e, t && B.extend(this, t), this.timeStamp = e && e.timeStamp || B.now(), this[B.expando] = !0
    }, B.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = k;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = k;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = k, this.stopPropagation()
        },
        isDefaultPrevented: L,
        isPropagationStopped: L,
        isImmediatePropagationStopped: L
    }, B.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        B.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n = this,
                    r = e.relatedTarget,
                    i = e.handleObj,
                    s = i.selector,
                    o;
                if (!r || r !== n && !B.contains(n, r)) e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
                return o
            }
        }
    }), B.support.submitBubbles || (B.event.special.submit = {
        setup: function () {
            if (B.nodeName(this, "form")) return !1;
            B.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = B.nodeName(n, "input") || B.nodeName(n, "button") ? n.form : t;
                r && !r._submit_attached && (B.event.add(r, "submit._submit", function (e) {
                    this.parentNode && !e.isTrigger && B.event.simulate("submit", this.parentNode, e, !0)
                }), r._submit_attached = !0)
            })
        },
        teardown: function () {
            if (B.nodeName(this, "form")) return !1;
            B.event.remove(this, "._submit")
        }
    }), B.support.changeBubbles || (B.event.special.change = {
        setup: function () {
            if (Y.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") B.event.add(this, "propertychange._change", function (e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), B.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1, B.event.simulate("change", this, e, !0))
                    });
                return !1
            }
            B.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Y.test(t.nodeName) && !t._change_attached && (B.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && B.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return B.event.remove(this, "._change"), Y.test(this.nodeName)
        }
    }), B.support.focusinBubbles || B.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                B.event.simulate(t, e.target, B.event.fix(e), !0)
            };
        B.event.special[t] = {
            setup: function () {
                n++ === 0 && D.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && D.removeEventListener(e, r, !0)
            }
        }
    }), B.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = L;
            else if (!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return B().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = B.guid++)), this.each(function () {
                B.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on.call(this, e, t, n, r, 1)
        },
        off: function (e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return B(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
            }
            if (typeof e == "object") {
                for (var s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = L), this.each(function () {
                B.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return B(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return B(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                B.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return B.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || B.guid++,
                r = 0,
                i = function (n) {
                    var i = (B._data(this, "lastToggle" + e.guid) || 0) % r;
                    return B._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        B.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, B.attrFn && (B.attrFn[t] = !0), tt.test(t) && (B.event.fixHooks[t] = B.event.keyHooks), nt.test(t) && (B.event.fixHooks[t] = B.event.mouseHooks)
    }),
    function () {
        function e(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            o || (f[i] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break
                                }
                            } else if (h.filter(t, [f]).length > 0) {
                                l = f;
                                break
                            }
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }
        function n(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }
        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = "sizcache" + (Math.random() + "").replace(".", ""),
            s = 0,
            o = Object.prototype.toString,
            u = !1,
            a = !0,
            f = /\\/g,
            l = /\r\n/g,
            c = /\W/;
        [0, 0].sort(function () {
            return a = !1, 0
        });
        var h = function (e, t, n, i) {
            n = n || [], t = t || D;
            var s = t;
            if (t.nodeType !== 1 && t.nodeType !== 9) return [];
            if (!e || typeof e != "string") return n;
            var u, a, f, l, c, p, m, g, b = !0,
                w = h.isXML(t),
                E = [],
                x = e;
            do {
                r.exec(""), u = r.exec(x);
                if (u) {
                    x = u[3], E.push(u[1]);
                    if (u[2]) {
                        l = u[3];
                        break
                    }
                }
            } while (u);
            if (E.length > 1 && v.exec(e)) if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i);
                else {
                    a = d.relative[E[0]] ? [t] : h(E.shift(), t);
                    while (E.length) e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i)
                } else {
                    !i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
                    if (t) {
                        c = i ? {
                            expr: E.pop(),
                            set: y(i)
                        } : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
                        while (E.length) p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w)
                    } else f = E = []
                }
            f || (f = a), f || h.error(p || e);
            if (o.call(f) === "[object Array]") if (!b) n.push.apply(n, f);
                else if (t && t.nodeType === 1) for (g = 0; f[g] != null; g++) f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]);
            else for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]);
            else y(f, n);
            return l && (h(l, s, n, i), h.uniqueSort(n)), n
        };
        h.uniqueSort = function (e) {
            if (w) {
                u = a, e.sort(w);
                if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, h.matches = function (e, t) {
            return h(e, null, null, t)
        }, h.matchesSelector = function (e, t) {
            return h(t, null, null, [e]).length > 0
        }, h.find = function (e, t, n) {
            var r, i, s, o, u, a;
            if (!e) return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1], o.splice(1, 1);
                    if (a.substr(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, h.filter = function (e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e,
                g = [],
                y = n,
                b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter) if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                        l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                        if (c.substr(c.length - 1) === "\\") continue;
                        y === g && (g = []);
                        if (d.preFilter[u]) {
                            s = d.preFilter[u](s, y, r, g, i, b);
                            if (!s) o = a = !0;
                            else if (s === !0) continue
                        }
                        if (s) for (p = 0;
                            (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                        if (a !== t) {
                            r || (y = g), e = e.replace(d.match[u], "");
                            if (!o) return [];
                            break
                        }
                    }
                if (e === m) {
                    if (o != null) break;
                    h.error(e)
                }
                m = e
            }
            return y
        }, h.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = h.getText = function (e) {
            var t, n, r = e.nodeType,
                i = "";
            if (r) {
                if (r === 1 || r === 9) {
                    if (typeof e.textContent == "string") return e.textContent;
                    if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                } else if (r === 3 || r === 4) return e.nodeValue
            } else for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
            return i
        }, d = h.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (e) {
                        return e.getAttribute("href")
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (e, t) {
                        var n = typeof t == "string",
                            r = n && !c.test(t),
                            i = n && !r;
                        r && (t = t.toLowerCase());
                        for (var s = 0, o = e.length, u; s < o; s++) if (u = e[s]) {
                                while ((u = u.previousSibling) && u.nodeType !== 1);
                                e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                            }
                        i && h.filter(t, e, !0)
                    },
                    ">": function (e, t) {
                        var n, r = typeof t == "string",
                            i = 0,
                            s = e.length;
                        if (r && !c.test(t)) {
                            t = t.toLowerCase();
                            for (; i < s; i++) {
                                n = e[i];
                                if (n) {
                                    var o = n.parentNode;
                                    e[i] = o.nodeName.toLowerCase() === t ? o : !1
                                }
                            }
                        } else {
                            for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                            r && h.filter(t, e, !0)
                        }
                    },
                    "": function (t, r, i) {
                        var o, u = s++,
                            a = e;
                        typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("parentNode", r, u, t, o, i)
                    },
                    "~": function (t, r, i) {
                        var o, u = s++,
                            a = e;
                        typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, i)
                    }
                },
                find: {
                    ID: function (e, t, n) {
                        if (typeof t.getElementById != "undefined" && !n) {
                            var r = t.getElementById(e[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    },
                    NAME: function (e, t) {
                        if (typeof t.getElementsByName != "undefined") {
                            var n = [],
                                r = t.getElementsByName(e[1]);
                            for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                            return n.length === 0 ? null : n
                        }
                    },
                    TAG: function (e, t) {
                        if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                    }
                },
                preFilter: {
                    CLASS: function (e, t, n, r, i, s) {
                        e = " " + e[1].replace(f, "") + " ";
                        if (s) return e;
                        for (var o = 0, u;
                        (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                        return !1
                    },
                    ID: function (e) {
                        return e[1].replace(f, "")
                    },
                    TAG: function (e, t) {
                        return e[1].replace(f, "").toLowerCase()
                    },
                    CHILD: function (e) {
                        if (e[1] === "nth") {
                            e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                            var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                            e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                        } else e[2] && h.error(e[0]);
                        return e[0] = s++, e
                    },
                    ATTR: function (e, t, n, r, i, s) {
                        var o = e[1] = e[1].replace(f, "");
                        return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                    },
                    PSEUDO: function (e, t, n, i, s) {
                        if (e[1] === "not") {
                            if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                var o = h.filter(e[3], t, n, !0 ^ s);
                                return n || i.push.apply(i, o), !1
                            }
                            e[3] = h(e[3], null, null, t)
                        } else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
                        return e
                    },
                    POS: function (e) {
                        return e.unshift(!0), e
                    }
                },
                filters: {
                    enabled: function (e) {
                        return e.disabled === !1 && e.type !== "hidden"
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        return e.checked === !0
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function (e) {
                        return !!e.firstChild
                    },
                    empty: function (e) {
                        return !e.firstChild
                    },
                    has: function (e, t, n) {
                        return !!h(n[3], e).length
                    },
                    header: function (e) {
                        return /h\d/i.test(e.nodeName)
                    },
                    text: function (e) {
                        var t = e.getAttribute("type"),
                            n = e.type;
                        return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                    },
                    radio: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                    },
                    checkbox: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                    },
                    file: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "file" === e.type
                    },
                    password: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "password" === e.type
                    },
                    submit: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "submit" === e.type
                    },
                    image: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "image" === e.type
                    },
                    reset: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "reset" === e.type
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && "button" === e.type || t === "button"
                    },
                    input: function (e) {
                        return /input|select|textarea|button/i.test(e.nodeName)
                    },
                    focus: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t) {
                        return t === 0
                    },
                    last: function (e, t, n, r) {
                        return t === r.length - 1
                    },
                    even: function (e, t) {
                        return t % 2 === 0
                    },
                    odd: function (e, t) {
                        return t % 2 === 1
                    },
                    lt: function (e, t, n) {
                        return t < n[3] - 0
                    },
                    gt: function (e, t, n) {
                        return t > n[3] - 0
                    },
                    nth: function (e, t, n) {
                        return n[3] - 0 === t
                    },
                    eq: function (e, t, n) {
                        return n[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (e, t, n, r) {
                        var i = t[1],
                            s = d.filters[i];
                        if (s) return s(e, n, t, r);
                        if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                        if (i === "not") {
                            var o = t[3];
                            for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
                            return !0
                        }
                        h.error(i)
                    },
                    CHILD: function (e, t) {
                        var n, r, s, o, u, a, f, l = t[1],
                            c = e;
                        switch (l) {
                            case "only":
                            case "first":
                                while (c = c.previousSibling) if (c.nodeType === 1) return !1;
                                if (l === "first") return !0;
                                c = e;
                            case "last":
                                while (c = c.nextSibling) if (c.nodeType === 1) return !1;
                                return !0;
                            case "nth":
                                n = t[2], r = t[3];
                                if (n === 1 && r === 0) return !0;
                                s = t[0], o = e.parentNode;
                                if (o && (o[i] !== s || !e.nodeIndex)) {
                                    a = 0;
                                    for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                                    o[i] = s
                                }
                                return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                        }
                    },
                    ID: function (e, t) {
                        return e.nodeType === 1 && e.getAttribute("id") === t
                    },
                    TAG: function (e, t) {
                        return t === "*" && e.nodeType === 1 || !! e.nodeName && e.nodeName.toLowerCase() === t
                    },
                    CLASS: function (e, t) {
                        return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                    },
                    ATTR: function (e, t) {
                        var n = t[1],
                            r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                            i = r + "",
                            s = t[2],
                            o = t[4];
                        return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                    },
                    POS: function (e, t, n, r) {
                        var i = t[2],
                            s = d.setFilters[i];
                        if (s) return s(e, n, t, r)
                    }
                }
            }, v = d.match.POS,
            m = function (e, t) {
                return "\\" + (t - 0 + 1)
            };
        for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        var y = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function (e, t) {
                var n = 0,
                    r = t || [];
                if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]);
                else for (; e[n]; n++) r.push(e[n]);
                return r
            }
        }
        var w, E;
        D.documentElement.compareDocumentPosition ? w = function (e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (w = function (e, t) {
            if (e === t) return u = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                a = t.parentNode,
                f = o;
            if (o === a) return E(e, t);
            if (!o) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), f = f.parentNode;
            f = a;
            while (f) s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
        }, E = function (e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }),
        function () {
            var e = D.createElement("div"),
                n = "script" + (new Date).getTime(),
                r = D.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), D.getElementById(n) && (d.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, d.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(),
        function () {
            var e = D.createElement("div");
            e.appendChild(D.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), D.querySelectorAll && function () {
            var e = h,
                t = D.createElement("div"),
                n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                h = function (t, r, i, s) {
                    r = r || D;
                    if (!s && !h.isXML(r)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (o[1]) return y(r.getElementsByTagName(t), i);
                            if (o[2] && d.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(o[2]), i)
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body) return y([r.body], i);
                            if (o && o[3]) {
                                var u = r.getElementById(o[3]);
                                if (!u || !u.parentNode) return y([], i);
                                if (u.id === o[3]) return y([u], i)
                            }
                            try {
                                return y(r.querySelectorAll(t), i)
                            } catch (a) {}
                        } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            var f = r,
                                l = r.getAttribute("id"),
                                c = l || n,
                                p = r.parentNode,
                                v = /^\s*[+~]/.test(t);
                            l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
                            try {
                                if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i)
                            } catch (m) {} finally {
                                l || f.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, s)
                };
                for (var r in e) h[r] = e[r];
                t = null
            }
        }(),
        function () {
            var e = D.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(D.createElement("div"), "div"),
                    r = !1;
                try {
                    t.call(D.documentElement, "[test!='']:sizzle")
                } catch (i) {
                    r = !0
                }
                h.matchesSelector = function (e, i) {
                    i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e)) try {
                            if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                var s = t.call(e, i);
                                if (s || !n || e.document && e.document.nodeType !== 11) return s
                            }
                    } catch (o) {}
                    return h(i, null, null, [e]).length > 0
                }
            }
        }(),
        function () {
            var e = D.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1) return;
                d.order.splice(1, 0, "CLASS"), d.find.CLASS = function (e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), D.documentElement.contains ? h.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : D.documentElement.compareDocumentPosition ? h.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : h.contains = function () {
            return !1
        }, h.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var S = function (e, t, n) {
            var r, i = [],
                s = "",
                o = t.nodeType ? [t] : t;
            while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*" : e;
            for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
            return h.filter(s, i)
        };
        h.attr = B.attr, h.selectors.attrMap = {}, B.find = h, B.expr = h.selectors, B.expr[":"] = B.expr.filters, B.unique = h.uniqueSort, B.text = h.getText, B.isXMLDoc = h.isXML, B.contains = h.contains
    }();
    var at = /Until$/,
        ft = /^(?:parents|prevUntil|prevAll)/,
        lt = /,/,
        ct = /^.[^:#\[\.,]*$/,
        ht = Array.prototype.slice,
        pt = B.expr.match.POS,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    B.fn.extend({
        find: function (e) {
            var t = this,
                n, r;
            if (typeof e != "string") return B(e).filter(function () {
                    for (n = 0, r = t.length; n < r; n++) if (B.contains(t[n], this)) return !0
                });
            var i = this.pushStack("", "find", e),
                s, o, u;
            for (n = 0, r = this.length; n < r; n++) {
                s = i.length, B.find(e, this[n], i);
                if (n > 0) for (o = s; o < i.length; o++) for (u = 0; u < s; u++) if (i[u] === i[o]) {
                                i.splice(o--, 1);
                                break
                            }
            }
            return i
        },
        has: function (e) {
            var t = B(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++) if (B.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(N(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(N(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? pt.test(e) ? B(e, this.context).index(this[0]) >= 0 : B.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n = [],
                r, i, s = this[0];
            if (B.isArray(e)) {
                var o = 1;
                while (s && s.ownerDocument && s !== t) {
                    for (r = 0; r < e.length; r++) B(s).is(e[r]) && n.push({
                            selector: e[r],
                            elem: s,
                            level: o
                        });
                    s = s.parentNode, o++
                }
                return n
            }
            var u = pt.test(e) || typeof e != "string" ? B(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (u ? u.index(s) > -1 : B.find.matchesSelector(s, e)) {
                        n.push(s);
                        break
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break
                }
            }
            return n = n.length > 1 ? B.unique(n) : n, this.pushStack(n, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e),
                r = B.merge(this.get(), n);
            return this.pushStack(C(n[0]) || C(r[0]) ? r : B.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), B.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return B.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return B.dir(e, "parentNode", n)
        },
        next: function (e) {
            return B.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return B.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return B.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return B.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return B.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return B.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return B.sibling(e.parentNode.firstChild, e)
        },
        children: function (e) {
            return B.sibling(e.firstChild)
        },
        contents: function (e) {
            return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : B.makeArray(e.childNodes)
        }
    }, function (e, t) {
        B.fn[e] = function (n, r) {
            var i = B.map(this, t, n);
            return at.test(e) || (r = n), r && typeof r == "string" && (i = B.filter(r, i)), i = this.length > 1 && !dt[e] ? B.unique(i) : i, (this.length > 1 || lt.test(r)) && ft.test(e) && (i = i.reverse()), this.pushStack(i, e, ht.call(arguments).join(","))
        }
    }), B.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? B.find.matchesSelector(t[0], e) ? [t[0]] : [] : B.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !B(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
            return e
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var vt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        mt = / jQuery\d+="(?:\d+|null)"/g,
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style)/i,
        xt = /<(?:script|object|embed|option|style)/i,
        Tt = new RegExp("<(?:" + vt + ")", "i"),
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /\/(java|ecma)script/i,
        kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, At = T(D);
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, B.support.htmlSerialize || (Lt._default = [1, "div<div>", "</div>"]), B.fn.extend({
        text: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                var n = B(this);
                n.text(e.call(this, t, n.text()))
            }) : typeof e != "object" && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(e)) : B.text(this)
        },
        wrapAll: function (e) {
            if (B.isFunction(e)) return this.each(function (t) {
                    B(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                B(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = B(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = B.isFunction(e);
            return this.each(function (n) {
                B(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                B.nodeName(this, "body") || B(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = B.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, B.clean(arguments)), e
            }
        },
        remove: function (e, t) {
            for (var n = 0, r;
            (r = this[n]) != null; n++) if (!e || B.filter(e, [r]).length)!t && r.nodeType === 1 && (B.cleanData(r.getElementsByTagName("*")), B.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
            return this
        },
        empty: function () {
            for (var e = 0, t;
            (t = this[e]) != null; e++) {
                t.nodeType === 1 && B.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild) t.removeChild(t.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return B.clone(this, e, t)
            })
        },
        html: function (e) {
            if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(mt, "") : null;
            if (typeof e == "string" && !St.test(e) && (B.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(yt, "<$1></$2>");
                try {
                    for (var n = 0, r = this.length; n < r; n++) this[n].nodeType === 1 && (B.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (i) {
                    this.empty().append(e)
                }
            } else B.isFunction(e) ? this.each(function (t) {
                    var n = B(this);
                    n.html(e.call(this, t, n.html()))
                }) : this.empty().append(e);
            return this
        },
        replaceWith: function (e) {
            return this[0] && this[0].parentNode ? B.isFunction(e) ? this.each(function (t) {
                var n = B(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = B(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                B(this).remove(), t ? B(t).before(e) : B(n).append(e)
            })) : this.length ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            var i, s, o, u, a = e[0],
                f = [];
            if (!B.support.checkClone && arguments.length === 3 && typeof a == "string" && Nt.test(a)) return this.each(function () {
                    B(this).domManip(e, n, r, !0)
                });
            if (B.isFunction(a)) return this.each(function (i) {
                    var s = B(this);
                    e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
            if (this[0]) {
                u = a && a.parentNode, B.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
                    fragment: u
                } : i = B.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
                if (s) {
                    n = n && B.nodeName(s, "tr");
                    for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? x(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? B.clone(o, !0, !0) : o)
                }
                f.length && B.each(f, m)
            }
            return this
        }
    }), B.buildFragment = function (e, t, n) {
        var r, i, s, o, u = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = D), e.length === 1 && typeof u == "string" && u.length < 512 && o === D && u.charAt(0) === "<" && !xt.test(u) && (B.support.checkClone || !Nt.test(u)) && (B.support.html5Clone || !Tt.test(u)) && (i = !0, s = B.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), B.clean(e, o, r, n)), i && (B.fragments[u] = s ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, B.fragments = {}, B.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        B.fn[e] = function (n) {
            var r = [],
                i = B(n),
                s = this.length === 1 && this[0].parentNode;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
            for (var o = 0, u = i.length; o < u; o++) {
                var a = (o > 0 ? this.clone(!0) : this).get();
                B(i[o])[t](a), r = r.concat(a)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), B.extend({
        clone: function (e, t, n) {
            var r, i, s, o = B.support.html5Clone || !Tt.test("<" + e.nodeName) ? e.cloneNode(!0) : g(e);
            if ((!B.support.noCloneEvent || !B.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !B.isXMLDoc(e)) {
                E(e, o), r = w(e), i = w(o);
                for (s = 0; r[s]; ++s) i[s] && E(r[s], i[s])
            }
            if (t) {
                S(e, o);
                if (n) {
                    r = w(e), i = w(o);
                    for (s = 0; r[s]; ++s) S(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var i;
            t = t || D, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || D);
            var s = [],
                o;
            for (var u = 0, a;
            (a = e[u]) != null; u++) {
                typeof a == "number" && (a += "");
                if (!a) continue;
                if (typeof a == "string") if (!Et.test(a)) a = t.createTextNode(a);
                    else {
                        a = a.replace(yt, "<$1></$2>");
                        var f = (bt.exec(a) || ["", ""])[1].toLowerCase(),
                            l = Lt[f] || Lt._default,
                            c = l[0],
                            h = t.createElement("div");
                        t === D ? At.appendChild(h) : T(t).appendChild(h), h.innerHTML = l[1] + a + l[2];
                        while (c--) h = h.lastChild;
                        if (!B.support.tbody) {
                            var p = wt.test(a),
                                d = f === "table" && !p ? h.firstChild && h.firstChild.childNodes : l[1] === "<table>" && !p ? h.childNodes : [];
                            for (o = d.length - 1; o >= 0; --o) B.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o])
                        }!B.support.leadingWhitespace && gt.test(a) && h.insertBefore(t.createTextNode(gt.exec(a)[0]), h.firstChild), a = h.childNodes
                    }
                var v;
                if (!B.support.appendChecked) if (a[0] && typeof (v = a.length) == "number") for (o = 0; o < v; o++) y(a[o]);
                    else y(a);
                a.nodeType ? s.push(a) : s = B.merge(s, a)
            }
            if (n) {
                i = function (e) {
                    return !e.type || Ct.test(e.type)
                };
                for (u = 0; s[u]; u++) if (r && B.nodeName(s[u], "script") && (!s[u].type || s[u].type.toLowerCase() === "text/javascript")) r.push(s[u].parentNode ? s[u].parentNode.removeChild(s[u]) : s[u]);
                    else {
                        if (s[u].nodeType === 1) {
                            var m = B.grep(s[u].getElementsByTagName("script"), i);
                            s.splice.apply(s, [u + 1, 0].concat(m))
                        }
                        n.appendChild(s[u])
                    }
            }
            return s
        },
        cleanData: function (e) {
            var t, n, r = B.cache,
                i = B.event.special,
                s = B.support.deleteExpando;
            for (var o = 0, u;
            (u = e[o]) != null; o++) {
                if (u.nodeName && B.noData[u.nodeName.toLowerCase()]) continue;
                n = u[B.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var a in t.events) i[a] ? B.event.remove(u, a) : B.removeEvent(u, a, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete u[B.expando] : u.removeAttribute && u.removeAttribute(B.expando), delete r[n]
                }
            }
        }
    });
    var Ot = /alpha\([^)]*\)/i,
        Mt = /opacity=([^)]*)/,
        _t = /([A-Z]|^ms)/g,
        Dt = /^-?\d+(?:px)?$/i,
        Pt = /^-?\d/,
        Ht = /^([\-+])=([\-+.\de]+)/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, jt = ["Left", "Right"],
        Ft = ["Top", "Bottom"],
        It, qt, Rt;
    B.fn.css = function (e, n) {
        return arguments.length === 2 && n === t ? this : B.access(this, e, n, !0, function (e, n, r) {
            return r !== t ? B.style(e, n, r) : B.css(e, n)
        })
    }, B.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = It(e, "opacity", "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": B.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if ( !! e && e.nodeType !== 3 && e.nodeType !== 8 && !! e.style) {
                var s, o, u = B.camelCase(n),
                    a = e.style,
                    f = B.cssHooks[u];
                n = B.cssProps[u] || u;
                if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
                o = typeof r, o === "string" && (s = Ht.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(B.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !B.cssNumber[u] && (r += "px");
                if (!f || !("set" in f) || (r = f.set(e, r)) !== t) try {
                        a[n] = r
                } catch (l) {}
            }
        },
        css: function (e, n, r) {
            var i, s;
            n = B.camelCase(n), s = B.cssHooks[n], n = B.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
            if (It) return It(e, n)
        },
        swap: function (e, t, n) {
            var r = {};
            for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (i in t) e.style[i] = r[i]
        }
    }), B.curCSS = B.css, B.each(["height", "width"], function (e, t) {
        B.cssHooks[t] = {
            get: function (e, n, r) {
                var i;
                if (n) return e.offsetWidth !== 0 ? v(e, t, r) : (B.swap(e, Bt, function () {
                        i = v(e, t, r)
                    }), i)
            },
            set: function (e, t) {
                if (!Dt.test(t)) return t;
                t = parseFloat(t);
                if (t >= 0) return t + "px"
            }
        }
    }), B.support.opacity || (B.cssHooks.opacity = {
        get: function (e, t) {
            return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = B.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && B.trim(s.replace(Ot, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Ot.test(s) ? s.replace(Ot, i) : s + " " + i
        }
    }), B(function () {
        B.support.reliableMarginRight || (B.cssHooks.marginRight = {
            get: function (e, t) {
                var n;
                return B.swap(e, {
                    display: "inline-block"
                }, function () {
                    t ? n = It(e, "margin-right", "marginRight") : n = e.style.marginRight
                }), n
            }
        })
    }), D.defaultView && D.defaultView.getComputedStyle && (qt = function (e, t) {
        var n, r, i;
        return t = t.replace(_t, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !B.contains(e.ownerDocument.documentElement, e) && (n = B.style(e, t))), n
    }), D.documentElement.currentStyle && (Rt = function (e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return s === null && o && (i = o[t]) && (s = i), !Dt.test(s) && Pt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s || 0, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
    }), It = qt || Rt, B.expr && B.expr.filters && (B.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return t === 0 && n === 0 || !B.support.reliableHiddenOffsets && (e.style && e.style.display || B.css(e, "display")) === "none"
    }, B.expr.filters.visible = function (e) {
        return !B.expr.filters.hidden(e)
    });
    var Ut = /%20/g,
        zt = /\[\]$/,
        Wt = /\r?\n/g,
        Xt = /#.*$/,
        Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        $t = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Kt = /^(?:GET|HEAD)$/,
        Qt = /^\/\//,
        Gt = /\?/,
        Yt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Zt = /^(?:select|textarea)/i,
        en = /\s+/,
        tn = /([?&])_=[^&]*/,
        nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        rn = B.fn.load,
        sn = {}, on = {}, un, an, fn = ["*/"] + ["*"];
    try {
        un = H.href
    } catch (ln) {
        un = D.createElement("a"), un.href = "", un = un.href
    }
    an = nn.exec(un.toLowerCase()) || [], B.fn.extend({
        load: function (e, n, r) {
            if (typeof e != "string" && rn) return rn.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var s = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var o = "GET";
            n && (B.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = B.param(n, B.ajaxSettings.traditional), o = "POST"));
            var u = this;
            return B.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), u.html(s ? B("<div>").append(n.replace(Yt, "")).find(s) : n)), r && u.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function () {
            return B.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? B.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Zt.test(this.nodeName) || $t.test(this.type))
            }).map(function (e, t) {
                var n = B(this).val();
                return n == null ? null : B.isArray(n) ? B.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                }
            }).get()
        }
    }), B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        B.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), B.each(["get", "post"], function (e, n) {
        B[n] = function (e, r, i, s) {
            return B.isFunction(r) && (s = s || i, i = r, r = t), B.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), B.extend({
        getScript: function (e, n) {
            return B.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return B.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? h(e, B.ajaxSettings) : (t = e, e = B.ajaxSettings), h(e, t), e
        },
        ajaxSettings: {
            url: un,
            isLocal: Jt.test(an[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": fn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": B.parseJSON,
                "text xml": B.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: d(sn),
        ajaxTransport: d(on),
        ajax: function (e, n) {
            function r(e, n, r, p) {
                if (E !== 2) {
                    E = 2, b && clearTimeout(b), y = t, m = p || "", T.readyState = e > 0 ? 4 : 0;
                    var d, v, g, w = n,
                        x = r ? l(i, T, r) : t,
                        N, C;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (i.ifModified) {
                            if (N = T.getResponseHeader("Last-Modified")) B.lastModified[h] = N;
                            if (C = T.getResponseHeader("Etag")) B.etag[h] = C
                        }
                        if (e === 304) w = "notmodified", d = !0;
                        else try {
                                v = f(i, x), w = "success", d = !0
                        } catch (k) {
                            w = "parsererror", g = k
                        }
                    } else {
                        g = w;
                        if (!w || e) w = "error", e < 0 && (e = 0)
                    }
                    T.status = e, T.statusText = "" + (n || w), d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]), T.statusCode(c), c = t, S && o.trigger("ajax" + (d ? "Success" : "Error"), [T, i, d ? v : g]), a.fireWith(s, [T, w]), S && (o.trigger("ajaxComplete", [T, i]), --B.active || B.event.trigger("ajaxStop"))
                }
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var i = B.ajaxSetup({}, n),
                s = i.context || i,
                o = s !== i && (s.nodeType || s instanceof B) ? B(s) : B.event,
                u = B.Deferred(),
                a = B.Callbacks("once memory"),
                c = i.statusCode || {}, h, d = {}, v = {}, m, g, y, b, w, E = 0,
                S, x, T = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = v[n] = v[n] || e, d[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? m : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!g) {
                                g = {};
                                while (n = Vt.exec(m)) g[n[1].toLowerCase()] = n[2]
                            }
                            n = g[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (i.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || "abort", y && y.abort(e), r(0, e), this
                    }
                };
            u.promise(T), T.success = T.done, T.error = T.fail, T.complete = a.add, T.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) c[t] = [c[t], e[t]];
                    else t = e[T.status], T.then(t, t)
                }
                return this
            }, i.url = ((e || i.url) + "").replace(Xt, "").replace(Qt, an[1] + "//"), i.dataTypes = B.trim(i.dataType || "*").toLowerCase().split(en), i.crossDomain == null && (w = nn.exec(i.url.toLowerCase()), i.crossDomain = !(!w || w[1] == an[1] && w[2] == an[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (an[3] || (an[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = B.param(i.data, i.traditional)), p(sn, i, n, T);
            if (E === 2) return !1;
            S = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Kt.test(i.type), S && B.active++ === 0 && B.event.trigger("ajaxStart");
            if (!i.hasContent) {
                i.data && (i.url += (Gt.test(i.url) ? "&" : "?") + i.data, delete i.data), h = i.url;
                if (i.cache === !1) {
                    var N = B.now(),
                        C = i.url.replace(tn, "$1_=" + N);
                    i.url = C + (C === i.url ? (Gt.test(i.url) ? "&" : "?") + "_=" + N : "")
                }
            }(i.data && i.hasContent && i.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", i.contentType), i.ifModified && (h = h || i.url, B.lastModified[h] && T.setRequestHeader("If-Modified-Since", B.lastModified[h]), B.etag[h] && T.setRequestHeader("If-None-Match", B.etag[h])), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + fn + "; q=0.01" : "") : i.accepts["*"]);
            for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
            if (!i.beforeSend || i.beforeSend.call(s, T, i) !== !1 && E !== 2) {
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[x](i[x]);
                y = p(on, i, n, T);
                if (!y) r(-1, "No Transport");
                else {
                    T.readyState = 1, S && o.trigger("ajaxSend", [T, i]), i.async && i.timeout > 0 && (b = setTimeout(function () {
                        T.abort("timeout")
                    }, i.timeout));
                    try {
                        E = 1, y.send(d, r)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        r(-1, k)
                    }
                }
                return T
            }
            return T.abort(), !1
        },
        param: function (e, n) {
            var r = [],
                i = function (e, t) {
                    t = B.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = B.ajaxSettings.traditional);
            if (B.isArray(e) || e.jquery && !B.isPlainObject(e)) B.each(e, function () {
                    i(this.name, this.value)
                });
            else for (var s in e) c(s, e[s], n, i);
            return r.join("&").replace(Ut, "+")
        }
    }), B.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cn = B.now(),
        hn = /(\=)\?(&|$)|\?\?/i;
    B.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return B.expando + "_" + cn++
        }
    }), B.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (hn.test(t.url) || i && hn.test(t.data))) {
            var s, o = t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                u = e[o],
                a = t.url,
                f = t.data,
                l = "$1" + o + "$2";
            return t.jsonp !== !1 && (a = a.replace(hn, l), t.url === a && (i && (f = f.replace(hn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function (e) {
                s = [e]
            }, r.always(function () {
                e[o] = u, s && B.isFunction(u) && e[o](s[0])
            }), t.converters["script json"] = function () {
                return s || B.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), B.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return B.globalEval(e), e
            }
        }
    }), B.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), B.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function (i, s) {
                    n = D.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var pn = e.ActiveXObject ? function () {
            for (var e in vn) vn[e](0, 1)
        } : !1,
        dn = 0,
        vn;
    B.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && a() || u()
    } : a,
    function (e) {
        B.extend(B.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(B.ajaxSettings.xhr()), B.support.ajax && B.ajaxTransport(function (n) {
        if (!n.crossDomain || B.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o = n.xhr(),
                        u, a;
                    n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
                    n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) o.setRequestHeader(a, i[a])
                    } catch (f) {}
                    o.send(n.hasContent && n.data || null), r = function (e, i) {
                        var a, f, l, c, h;
                        try {
                            if (r && (i || o.readyState === 4)) {
                                r = t, u && (o.onreadystatechange = B.noop, pn && delete vn[u]);
                                if (i) o.readyState !== 4 && o.abort();
                                else {
                                    a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h), c.text = o.responseText;
                                    try {
                                        f = o.statusText
                                    } catch (p) {
                                        f = ""
                                    }!a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(a, f, c, l)
                    }, !n.async || o.readyState === 4 ? r() : (u = ++dn, pn && (vn || (vn = {}, B(e).unload(pn)), vn[u] = r), o.onreadystatechange = r)
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var mn = {}, gn, yn, bn = /^(?:toggle|show|hide)$/,
        wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        En, Sn = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        xn;
    B.fn.extend({
        show: function (e, t, n) {
            var s, o;
            if (e || e === 0) return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++) s = this[u], s.style && (o = s.style.display, !B._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), o === "" && B.css(s, "display") === "none" && B._data(s, "olddisplay", r(s.nodeName)));
            for (u = 0; u < a; u++) {
                s = this[u];
                if (s.style) {
                    o = s.style.display;
                    if (o === "" || o === "none") s.style.display = B._data(s, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (e, t, n) {
            if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
            var r, s, o = 0,
                u = this.length;
            for (; o < u; o++) r = this[o], r.style && (s = B.css(r, "display"), s !== "none" && !B._data(r, "olddisplay") && B._data(r, "olddisplay", s));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: B.fn.toggle,
        toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return B.isFunction(e) && B.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function () {
                var t = r ? e : B(this).is(":hidden");
                B(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        },
        fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, i) {
            function s() {
                o.queue === !1 && B._mark(this);
                var t = B.extend({}, o),
                    n = this.nodeType === 1,
                    i = n && B(this).is(":hidden"),
                    s, u, a, f, l, c, h, p, d;
                t.animatedProperties = {};
                for (a in e) {
                    s = B.camelCase(a), a !== s && (e[s] = e[a], delete e[a]), u = e[s], B.isArray(u) ? (t.animatedProperties[s] = u[1], u = e[s] = u[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
                    if (u === "hide" && i || u === "show" && !i) return t.complete.call(this);
                    n && (s === "height" || s === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], B.css(this, "display") === "inline" && B.css(this, "float") === "none" && (!B.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e) f = new B.fx(this, t, a), u = e[a], bn.test(u) ? (d = B._data(this, "toggle" + a) || (u === "toggle" ? i ? "show" : "hide" : 0), d ? (B._data(this, "toggle" + a, d === "show" ? "hide" : "show"), f[d]()) : f[u]()) : (l = wn.exec(u), c = f.cur(), l ? (h = parseFloat(l[2]), p = l[3] || (B.cssNumber[a] ? "" : "px"), p !== "px" && (B.style(this, a, (h || 1) + p), c = (h || 1) / f.cur() * c, B.style(this, a, c + p)), l[1] && (h = (l[1] === "-=" ? -1 : 1) * h + c), f.custom(c, h, p)) : f.custom(c, u, ""));
                return !0
            }
            var o = B.speed(t, n, i);
            return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = B.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
        },
        stop: function (e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function t(e, t, n) {
                    var i = t[n];
                    B.removeData(e, n, !0), i.stop(r)
                }
                var n, i = !1,
                    s = B.timers,
                    o = B._data(this);
                r || B._unmark(!0, this);
                if (e == null) for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
                else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
                (!r || !i) && B.dequeue(this, e)
            })
        }
    }), B.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        B.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), B.extend({
        speed: function (e, t, n) {
            var r = e && typeof e == "object" ? B.extend({}, e) : {
                complete: n || !n && t || B.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !B.isFunction(t) && t
            };
            r.duration = B.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in B.fx.speeds ? B.fx.speeds[r.duration] : B.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function (e) {
                B.isFunction(r.old) && r.old.call(this), r.queue ? B.dequeue(this, r.queue) : e !== !1 && B._unmark(this)
            }, r
        },
        easing: {
            linear: function (e, t, n, r) {
                return n + r * e
            },
            swing: function (e, t, n, r) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
            }
        },
        timers: [],
        fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), B.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (B.fx.step[this.prop] || B.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = B.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
            }
            return this.elem[this.prop]
        },
        custom: function (e, n, r) {
            function i(e) {
                return s.step(e)
            }
            var s = this,
                u = B.fx;
            this.startTime = xn || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (B.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                s.options.hide && B._data(s.elem, "fxshow" + s.prop) === t && B._data(s.elem, "fxshow" + s.prop, s.start)
            }, i() && B.timers.push(i) && !En && (En = setInterval(u.tick, u.interval))
        },
        show: function () {
            var e = B._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || B.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), B(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = B._data(this.elem, "fxshow" + this.prop) || B.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (e) {
            var t, n, r, i = xn || o(),
                s = !0,
                u = this.elem,
                a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (s = !1);
                if (s) {
                    a.overflow != null && !B.support.shrinkWrapBlocks && B.each(["", "X", "Y"], function (e, t) {
                        u.style["overflow" + t] = a.overflow[e]
                    }), a.hide && B(u).hide();
                    if (a.hide || a.show) for (t in a.animatedProperties) B.style(u, t, a.orig[t]), B.removeData(u, "fxshow" + t, !0), B.removeData(u, "toggle" + t, !0);
                    r = a.complete, r && (a.complete = !1, r.call(u))
                }
                return !1
            }
            return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = B.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, B.extend(B.fx, {
        tick: function () {
            var e, t = B.timers,
                n = 0;
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || B.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(En), En = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                B.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), B.each(["width", "height"], function (e, t) {
        B.fx.step[t] = function (e) {
            B.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    }), B.expr && B.expr.filters && (B.expr.filters.animated = function (e) {
        return B.grep(B.timers, function (t) {
            return e === t.elem
        }).length
    });
    var Tn = /^t(?:able|d|h)$/i,
        Nn = /^(?:body|html)$/i;
    "getBoundingClientRect" in D.documentElement ? B.fn.offset = function (e) {
        var t = this[0],
            r;
        if (e) return this.each(function (t) {
                B.offset.setOffset(this, e, t)
            });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (i) {}
        var s = t.ownerDocument,
            o = s.documentElement;
        if (!r || !B.contains(o, t)) return r ? {
                top: r.top,
                left: r.left
        }: {
            top: 0,
            left: 0
        };
        var u = s.body,
            a = n(s),
            f = o.clientTop || u.clientTop || 0,
            l = o.clientLeft || u.clientLeft || 0,
            c = a.pageYOffset || B.support.boxModel && o.scrollTop || u.scrollTop,
            h = a.pageXOffset || B.support.boxModel && o.scrollLeft || u.scrollLeft,
            p = r.top + c - f,
            d = r.left + h - l;
        return {
            top: p,
            left: d
        }
    } : B.fn.offset = function (e) {
        var t = this[0];
        if (e) return this.each(function (t) {
                B.offset.setOffset(this, e, t)
            });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        var n, r = t.offsetParent,
            i = t,
            s = t.ownerDocument,
            o = s.documentElement,
            u = s.body,
            a = s.defaultView,
            f = a ? a.getComputedStyle(t, null) : t.currentStyle,
            l = t.offsetTop,
            c = t.offsetLeft;
        while ((t = t.parentNode) && t !== u && t !== o) {
            if (B.support.fixedPosition && f.position === "fixed") break;
            n = a ? a.getComputedStyle(t, null) : t.currentStyle, l -= t.scrollTop, c -= t.scrollLeft, t === r && (l += t.offsetTop, c += t.offsetLeft, B.support.doesNotAddBorder && (!B.support.doesAddBorderForTableAndCells || !Tn.test(t.nodeName)) && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent), B.support.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), f = n
        }
        if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
        return B.support.fixedPosition && f.position === "fixed" && (l += Math.max(o.scrollTop, u.scrollTop), c += Math.max(o.scrollLeft, u.scrollLeft)), {
            top: l,
            left: c
        }
    }, B.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return B.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(B.css(e, "marginTop")) || 0, n += parseFloat(B.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = B.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = B(e),
                s = i.offset(),
                o = B.css(e, "top"),
                u = B.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && B.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), B.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, B.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Nn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(B.css(e, "marginTop")) || 0, n.left -= parseFloat(B.css(e, "marginLeft")) || 0, r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || D.body;
                while (e && !Nn.test(e.nodeName) && B.css(e, "position") === "static") e = e.offsetParent;
                return e
            })
        }
    }), B.each(["Left", "Top"], function (e, r) {
        var i = "scroll" + r;
        B.fn[i] = function (r) {
            var s, o;
            return r === t ? (s = this[0], s ? (o = n(s), o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : B.support.boxModel && o.document.documentElement[i] || o.document.body[i] : s[i]) : null) : this.each(function () {
                o = n(this), o ? o.scrollTo(e ? B(o).scrollLeft() : r, e ? r : B(o).scrollTop()) : this[i] = r
            })
        }
    }), B.each(["Height", "Width"], function (e, n) {
        var r = n.toLowerCase();
        B.fn["inner" + n] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(B.css(e, r, "padding")) : this[r]() : null
        }, B.fn["outer" + n] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(B.css(t, r, e ? "margin" : "border")) : this[r]() : null
        }, B.fn[r] = function (e) {
            var i = this[0];
            if (!i) return e == null ? null : this;
            if (B.isFunction(e)) return this.each(function (t) {
                    var n = B(this);
                    n[r](e.call(this, t, n[r]()))
                });
            if (B.isWindow(i)) {
                var s = i.document.documentElement["client" + n],
                    o = i.document.body;
                return i.document.compatMode === "CSS1Compat" && s || o && o["client" + n] || s
            }
            if (i.nodeType === 9) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
            if (e === t) {
                var u = B.css(i, r),
                    a = parseFloat(u);
                return B.isNumeric(a) ? a : u
            }
            return this.css(r, typeof e == "string" ? e : e + "px")
        }
    }), e.jQuery = e.$ = B, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return B
    })
})(window),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    crossDomain: a
                }, f && (c.xhrFields = {
                    withCredentials: f
                }), s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n
                .ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery),
function () {
    function e(t, n, r) {
        if (t === n) return t !== 0 || 1 / t == 1 / n;
        if (t == null || n == null) return t === n;
        t._chain && (t = t._wrapped), n._chain && (n = n._wrapped);
        if (t.isEqual && S.isFunction(t.isEqual)) return t.isEqual(n);
        if (n.isEqual && S.isFunction(n.isEqual)) return n.isEqual(t);
        var i = f.call(t);
        if (i != f.call(n)) return !1;
        switch (i) {
            case "[object String]":
                return t == String(n);
            case "[object Number]":
                return t != +t ? n != +n : t == 0 ? 1 / t == 1 / n : t == +n;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +n;
            case "[object RegExp]":
                return t.source == n.source && t.global == n.global && t.multiline == n.multiline && t.ignoreCase == n.ignoreCase
        }
        if (typeof t != "object" || typeof n != "object") return !1;
        for (var s = r.length; s--;) if (r[s] == t) return !0;
        r.push(t);
        var s = 0,
            o = !0;
        if (i == "[object Array]") {
            if (s = t.length, o = s == n.length) for (; s--;) if (!(o = s in t == s in n && e(t[s], n[s], r))) break
        } else {
            if ("constructor" in t != "constructor" in n || t.constructor != n.constructor) return !1;
            for (var u in t) if (l.call(t, u) && (s++, !(o = l.call(n, u) && e(t[u], n[u], r)))) break;
            if (o) {
                for (u in n) if (l.call(n, u) && !(s--)) break;
                o = !s
            }
        }
        return r.pop(), o
    }
    var t = this,
        n = t._,
        r = {}, i = Array.prototype,
        s = Object.prototype,
        o = i.slice,
        u = i.concat,
        a = i.unshift,
        f = s.toString,
        l = s.hasOwnProperty,
        c = i.forEach,
        h = i.map,
        p = i.reduce,
        d = i.reduceRight,
        v = i.filter,
        m = i.every,
        g = i.some,
        y = i.indexOf,
        b = i.lastIndexOf,
        s = Array.isArray,
        w = Object.keys,
        E = Function.prototype.bind,
        S = function (e) {
            return new k(e)
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = S), exports._ = S) : typeof define == "function" && define.amd ? define("underscore", function () {
        return S
    }) : t._ = S, S.VERSION = "1.2.3";
    var x = S.each = S.forEach = function (e, t, n) {
        if (e != null) if (c && e.forEach === c) e.forEach(t, n);
            else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++) if (i in e && t.call(n, e[i], i, e) === r) break
        } else for (i in e) if (l.call(e, i) && t.call(n, e[i], i, e) === r) break
    };
    S.map = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (x(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    }, S.reduce = S.foldl = S.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = S.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        x(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, S.reduceRight = S.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = S.toArray(e).reverse();
        return r && !i && (t = S.bind(t, r)), i ? S.reduce(s, t, n, r) : S.reduce(s, t)
    }, S.find = S.detect = function (e, t, n) {
        var r;
        return T(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, S.filter = S.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (x(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, S.reject = function (e, t, n) {
        var r = [];
        return e == null ? r : (x(e, function (e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, S.every = S.all = function (e, t, n) {
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, n) : (x(e, function (e, s, o) {
            if (!(i = i && t.call(n, e, s, o))) return r
        }), i)
    };
    var T = S.some = S.any = function (e, t, n) {
        t || (t = S.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, n) : (x(e, function (e, s, o) {
            if (i || (i = t.call(n, e, s, o))) return r
        }), !! i)
    };
    S.include = S.contains = function (e, t) {
        var n = !1;
        return e == null ? n : y && e.indexOf === y ? e.indexOf(t) != -1 : n = T(e, function (e) {
            return e === t
        })
    }, S.invoke = function (e, t) {
        var n = o.call(arguments, 2);
        return S.map(e, function (e) {
            return (t.call ? t || e : e[t]).apply(e, n)
        })
    }, S.pluck = function (e, t) {
        return S.map(e, function (e) {
            return e[t]
        })
    }, S.max = function (e, t, n) {
        if (!t && S.isArray(e)) return Math.max.apply(Math, e);
        if (!t && S.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return x(e, function (e, i, s) {
            i = t ? t.call(n, e, i, s) : e, i >= r.computed && (r = {
                value: e,
                computed: i
            })
        }), r.value
    }, S.min = function (e, t, n) {
        if (!t && S.isArray(e)) return Math.min.apply(Math, e);
        if (!t && S.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return x(e, function (e, i, s) {
            i = t ? t.call(n, e, i, s) : e, i < r.computed && (r = {
                value: e,
                computed: i
            })
        }), r.value
    }, S.shuffle = function (e) {
        var t = [],
            n;
        return x(e, function (e, r) {
            r == 0 ? t[0] = e : (n = Math.floor(Math.random() * (r + 1)), t[r] = t[n], t[n] = e)
        }), t
    }, S.sortBy = function (e, t, n) {
        return S.pluck(S.map(e, function (e, r, i) {
            return {
                value: e,
                criteria: t.call(n, e, r, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            return n < r ? -1 : n > r ? 1 : 0
        }), "value")
    }, S.groupBy = function (e, t) {
        var n = {}, r = S.isFunction(t) ? t : function (e) {
                return e[t]
            };
        return x(e, function (e, t) {
            var i = r(e, t);
            (n[i] || (n[i] = [])).push(e)
        }), n
    }, S.sortedIndex = function (e, t, n) {
        n || (n = S.identity);
        for (var r = 0, i = e.length; r < i;) {
            var s = r + i >> 1;
            n(e[s]) < n(t) ? r = s + 1 : i = s
        }
        return r
    }, S.toArray = function (e) {
        return e ? e.toArray ? e.toArray() : S.isArray(e) ? o.call(e) : S.isArguments(e) ? o.call(e) : S.values(e) : []
    }, S.size = function (e) {
        return S.toArray(e).length
    }, S.first = S.head = function (e, t, n) {
        return t != null && !n ? o.call(e, 0, t) : e[0]
    }, S.initial = function (e, t, n) {
        return o.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, S.last = function (e, t, n) {
        return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, S.rest = S.tail = function (e, t, n) {
        return o.call(e, t == null || n ? 1 : t)
    }, S.compact = function (e) {
        return S.filter(e, function (e) {
            return !!e
        })
    }, S.flatten = function (e, t) {
        return S.reduce(e, function (e, n) {
            return S.isArray(n) ? e.concat(t ? n : S.flatten(n)) : (e[e.length] = n, e)
        }, [])
    }, S.without = function (e) {
        return S.difference(e, o.call(arguments, 1))
    }, S.uniq = S.unique = function (e, t, n) {
        var n = n ? S.map(e, n) : e,
            r = [];
        return S.reduce(n, function (n, i, s) {
            if (0 == s || (t === !0 ? S.last(n) != i : !S.include(n, i))) n[n.length] = i, r[r.length] = e[s];
            return n
        }, []), r
    }, S.union = function () {
        return S.uniq(S.flatten(arguments, !0))
    }, S.intersection = S.intersect = function (e) {
        var t = o.call(arguments, 1);
        return S.filter(S.uniq(e), function (e) {
            return S.every(t, function (t) {
                return S.indexOf(t, e) >= 0
            })
        })
    }, S.difference = function (e) {
        var t = S.flatten(o.call(arguments, 1));
        return S.filter(e, function (e) {
            return !S.include(t, e)
        })
    }, S.zip = function () {
        for (var e = o.call(arguments), t = S.max(S.pluck(e, "length")), n = Array(t), r = 0; r < t; r++) n[r] = S.pluck(e, "" + r);
        return n
    }, S.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r;
        if (n) return n = S.sortedIndex(e, t), e[n] === t ? n : -1;
        if (y && e.indexOf === y) return e.indexOf(t);
        for (n = 0, r = e.length; n < r; n++) if (n in e && e[n] === t) return n;
        return -1
    }, S.lastIndexOf = function (e, t) {
        if (e == null) return -1;
        if (b && e.lastIndexOf === b) return e.lastIndexOf(t);
        for (var n = e.length; n--;) if (n in e && e[n] === t) return n;
        return -1
    }, S.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0);
        for (var n = arguments[2] || 1, r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); i < r;) s[i++] = e, e += n;
        return s
    };
    var N = function () {};
    S.bind = function (e, t) {
        var n, r;
        if (e.bind === E && E) return E.apply(e, o.call(arguments, 1));
        if (!S.isFunction(e)) throw new TypeError;
        return r = o.call(arguments, 2), n = function () {
            if (this instanceof n) {
                N.prototype = e.prototype;
                var i = new N,
                    s = e.apply(i, r.concat(o.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, r.concat(o.call(arguments)))
        }
    }, S.bindAll = function (e) {
        var t = o.call(arguments, 1);
        return t.length == 0 && (t = S.functions(e)), x(t, function (t) {
            e[t] = S.bind(e[t], e)
        }), e
    }, S.memoize = function (e, t) {
        var n = {};
        return t || (t = S.identity),
        function () {
            var r = t.apply(this, arguments);
            return l.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, S.delay = function (e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(e, n)
        }, t)
    }, S.defer = function (e) {
        return S.delay.apply(S, [e, 1].concat(o.call(arguments, 1)))
    }, S.throttle = function (e, t) {
        var n, r, i, s, o, u = S.debounce(function () {
                o = s = !1
            }, t);
        return function () {
            n = this, r = arguments;
            var a;
            i || (i = setTimeout(function () {
                i = null, o && e.apply(n, r), u()
            }, t)), s ? o = !0 : e.apply(n, r), u(), s = !0
        }
    }, S.debounce = function (e, t) {
        var n;
        return function () {
            var r = this,
                i = arguments;
            clearTimeout(n), n = setTimeout(function () {
                n = null, e.apply(r, i)
            }, t)
        }
    }, S.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments))
        }
    }, S.wrap = function (e, t) {
        return function () {
            var n = u.apply([e], arguments);
            return t.apply(this, n)
        }
    }, S.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, S.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, S.keys = w || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [],
            n;
        for (n in e) l.call(e, n) && (t[t.length] = n);
        return t
    }, S.values = function (e) {
        return S.map(e, S.identity)
    }, S.functions = S.methods = function (e) {
        var t = [],
            n;
        for (n in e) S.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, S.extend = function (e) {
        return x(o.call(arguments, 1), function (t) {
            for (var n in t) t[n] !== void 0 && (e[n] = t[n])
        }), e
    }, S.defaults = function (e) {
        return x(o.call(arguments, 1), function (t) {
            for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, S.clone = function (e) {
        return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e
    }, S.tap = function (e, t) {
        return t(e), e
    }, S.isEqual = function (t, n) {
        return e(t, n, [])
    }, S.isEmpty = function (e) {
        if (S.isArray(e) || S.isString(e)) return e.length === 0;
        for (var t in e) if (l.call(e, t)) return !1;
        return !0
    }, S.isElement = function (e) {
        return !!e && e.nodeType == 1
    }, S.isArray = s || function (e) {
        return f.call(e) == "[object Array]"
    }, S.isObject = function (e) {
        return e === Object(e)
    }, S.isArguments = function (e) {
        return f.call(e) == "[object Arguments]"
    }, S.isArguments(arguments) || (S.isArguments = function (e) {
        return !!e && !! l.call(e, "callee")
    }), S.isFunction = function (e) {
        return f.call(e) == "[object Function]"
    }, S.isString = function (e) {
        return f.call(e) == "[object String]"
    }, S.isNumber = function (e) {
        return f.call(e) == "[object Number]"
    }, S.isNaN = function (e) {
        return e !== e
    }, S.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, S.isDate = function (e) {
        return f.call(e) == "[object Date]"
    }, S.isRegExp = function (e) {
        return f.call(e) == "[object RegExp]"
    }, S.isNull = function (e) {
        return e === null
    }, S.isUndefined = function (e) {
        return e === void 0
    }, S.noConflict = function () {
        return t._ = n, this
    }, S.identity = function (e) {
        return e
    }, S.times = function (e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r)
    }, S.escape = function (e) {
        return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, S.mixin = function (e) {
        x(S.functions(e), function (t) {
            A(t, S[t] = e[t])
        })
    };
    var C = 0;
    S.uniqueId = function (e) {
        var t = C++;
        return e ? e + t : t
    }, S.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }, S.template = function (e, t) {
        var n = S.templateSettings,
            n = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.escape, function (e, t) {
                return "',_.escape(" + t.replace(/\\'/g, "'") + "),'"
            }).replace(n.interpolate, function (e, t) {
                return "'," + t.replace(/\\'/g, "'") + ",'"
            }).replace(n.evaluate || null, function (e, t) {
                return "');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            r = new Function("obj", "_", n);
        return t ? r(t, S) : function (e) {
            return r.call(this, e, S)
        }
    };
    var k = function (e) {
        this._wrapped = e
    };
    S.prototype = k.prototype;
    var L = function (e, t) {
        return t ? S(e).chain() : e
    }, A = function (e, t) {
            k.prototype[e] = function () {
                var e = o.call(arguments);
                return a.call(e, this._wrapped), L(t.apply(S, e), this._chain)
            }
        };
    S.mixin(S), x("pop,push,reverse,shift,sort,splice,unshift".split(","), function (e) {
        var t = i[e];
        k.prototype[e] = function () {
            return t.apply(this._wrapped, arguments), L(this._wrapped, this._chain)
        }
    }), x(["concat", "join", "slice"], function (e) {
        var t = i[e];
        k.prototype[e] = function () {
            return L(t.apply(this._wrapped, arguments), this._chain)
        }
    }), k.prototype.chain = function () {
        return this._chain = !0, this
    }, k.prototype.value = function () {
        return this._wrapped
    }
}.call(this),
function () {
    var e = this,
        t = e.Backbone,
        n;
    n = typeof exports != "undefined" ? exports : e.Backbone = {}, n.VERSION = "0.5.3";
    var r = e._;
    !r && typeof require != "undefined" && (r = require("underscore")._);
    var i = e.jQuery || e.Zepto;
    n.noConflict = function () {
        return e.Backbone = t, this
    }, n.emulateHTTP = !1, n.emulateJSON = !1, n.Events = {
        bind: function (e, t, n) {
            var r = this._callbacks || (this._callbacks = {});
            return (r[e] || (r[e] = [])).push([t, n]), this
        },
        unbind: function (e, t) {
            var n;
            if (e) {
                if (n = this._callbacks) if (t) {
                        n = n[e];
                        if (!n) return this;
                        for (var r = 0, i = n.length; r < i; r++) if (n[r] && t === n[r][0]) {
                                n[r] = null;
                                break
                            }
                    } else n[e] = []
            } else this._callbacks = {};
            return this
        },
        trigger: function (e) {
            var t, n, r, i, s = 2;
            if (!(n = this._callbacks)) return this;
            for (; s--;) if (t = s ? e : "all", t = n[t]) for (var o = 0, u = t.length; o < u; o++)(r = t[o]) ? (i = s ? Array.prototype.slice.call(arguments, 1) : arguments, r[0].apply(r[1] || this, i)) : (t.splice(o, 1), o--, u--);
            return this
        }
    }, n.Model = function (e, t) {
        var n;
        e || (e = {});
        if (n = this.defaults) r.isFunction(n) && (n = n.call(this)), e = r.extend({}, n, e);
        this.attributes = {}, this._escapedAttributes = {}, this.cid = r.uniqueId("c"), this.set(e, {
            silent: !0
        }), this._changed = !1, this._previousAttributes = r.clone(this.attributes), t && t.collection && (this.collection = t.collection), this.initialize(e, t)
    }, r.extend(n.Model.prototype, n.Events, {
        _previousAttributes: null,
        _changed: !1,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return r.clone(this.attributes)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            var t;
            return (t = this._escapedAttributes[e]) ? t : (t = this.attributes[e], this._escapedAttributes[e] = (t == null ? "" : "" + t).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"))
        },
        has: function (e) {
            return this.attributes[e] != null
        },
        set: function (e, t) {
            t || (t = {});
            if (!e) return this;
            e.attributes && (e = e.attributes);
            var n = this.attributes,
                i = this._escapedAttributes;
            if (!t.silent && this.validate && !this._performValidation(e, t)) return !1;
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            var s = this._changing;
            this._changing = !0;
            for (var o in e) {
                var u = e[o];
                r.isEqual(n[o], u) || (n[o] = u, delete i[o], this._changed = !0, t.silent || this.trigger("change:" + o, this, u, t))
            }
            return !s && !t.silent && this._changed && this.change(t), this._changing = !1, this
        },
        unset: function (e, t) {
            if (e in this.attributes) {
                t || (t = {});
                var n = {};
                return n[e] = void 0, !t.silent && this.validate && !this._performValidation(n, t) ? !1 : (delete this.attributes[e], delete this._escapedAttributes[e], e == this.idAttribute && delete this.id, this._changed = !0, t.silent || (this.trigger("change:" + e, this, void 0, t), this.change(t)), this)
            }
            return this
        },
        clear: function (e) {
            e || (e = {});
            var t, n = this.attributes,
                r = {};
            for (t in n) r[t] = void 0;
            if (!e.silent && this.validate && !this._performValidation(r, e)) return !1;
            this.attributes = {}, this._escapedAttributes = {}, this._changed = !0;
            if (!e.silent) {
                for (t in n) this.trigger("change:" + t, this, void 0, e);
                this.change(e)
            }
            return this
        },
        fetch: function (e) {
            e || (e = {});
            var t = this,
                r = e.success;
            return e.success = function (n, i, s) {
                if (!t.set(t.parse(n, s), e)) return !1;
                r && r(t, n)
            }, e.error = y(e.error, t, e), (this.sync || n.sync).call(this, "read", this, e)
        },
        save: function (e, t) {
            t || (t = {});
            if (e && !this.set(e, t)) return !1;
            var r = this,
                i = t.success;
            t.success = function (e, n, s) {
                if (!r.set(r.parse(e, s), t)) return !1;
                i && i(r, e, s)
            }, t.error = y(t.error, r, t);
            var s = this.isNew() ? "create" : "update";
            return (this.sync || n.sync).call(this, s, this, t)
        },
        destroy: function (e) {
            e || (e = {});
            if (this.isNew()) return this.trigger("destroy", this, this.collection, e);
            var t = this,
                r = e.success;
            return e.success = function (n) {
                t.trigger("destroy", t, t.collection, e), r && r(t, n)
            }, e.error = y(e.error, t, e), (this.sync || n.sync).call(this, "delete", this, e)
        },
        url: function () {
            var e = m(this.collection) || this.urlRoot || g();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this)
        },
        isNew: function () {
            return this.id == null
        },
        change: function (e) {
            this.trigger("change", this, e), this._previousAttributes = r.clone(this.attributes), this._changed = !1
        },
        hasChanged: function (e) {
            return e ? this._previousAttributes[e] != this.attributes[e] : this._changed
        },
        changedAttributes: function (e) {
            e || (e = this.attributes);
            var t = this._previousAttributes,
                n = !1,
                i;
            for (i in e) r.isEqual(t[i], e[i]) || (n = n || {}, n[i] = e[i]);
            return n
        },
        previous: function (e) {
            return !e || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function () {
            return r.clone(this._previousAttributes)
        },
        _performValidation: function (e, t) {
            var n = this.validate(e);
            return n ? (t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0
        }
    }), n.Collection = function (e, t) {
        t || (t = {}), t.comparator && (this.comparator = t.comparator), r.bindAll(this, "_onModelEvent", "_removeReference"), this._reset(), e && this.reset(e, {
            silent: !0
        }), this.initialize.apply(this, arguments)
    }, r.extend(n.Collection.prototype, n.Events, {
        model: n.Model,
        initialize: function () {},
        toJSON: function () {
            return this.map(function (e) {
                return e.toJSON()
            })
        },
        add: function (e, t) {
            if (r.isArray(e)) for (var n = 0, i = e.length; n < i; n++) this._add(e[n], t);
            else this._add(e, t);
            return this
        },
        remove: function (e, t) {
            if (r.isArray(e)) for (var n = 0, i = e.length; n < i; n++) this._remove(e[n], t);
            else this._remove(e, t);
            return this
        },
        get: function (e) {
            return e == null ? null : this._byId[e.id != null ? e.id : e]
        },
        getByCid: function (e) {
            return e && this._byCid[e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        sort: function (e) {
            e || (e = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return this.models = this.sortBy(this.comparator), e.silent || this.trigger("reset", this, e), this
        },
        pluck: function (e) {
            return r.map(this.models, function (t) {
                return t.get(e)
            })
        },
        reset: function (e, t) {
            return e || (e = []), t || (t = {}), this.each(this._removeReference), this._reset(), this.add(e, {
                silent: !0
            }), t.silent || this.trigger("reset", this, t), this
        },
        fetch: function (e) {
            e || (e = {});
            var t = this,
                r = e.success;
            return e.success = function (n, i, s) {
                t[e.add ? "add" : "reset"](t.parse(n, s), e), r && r(t, n)
            }, e.error = y(e.error, t, e), (this.sync || n.sync).call(this, "read", this, e)
        },
        create: function (e, t) {
            var n = this;
            t || (t = {}), e = this._prepareModel(e, t);
            if (!e) return !1;
            var r = t.success;
            return t.success = function (e, i, s) {
                n.add(e, t), r && r(e, i, s)
            }, e.save(null, t), e
        },
        parse: function (e) {
            return e
        },
        chain: function () {
            return r(this.models).chain()
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof n.Model) e.collection || (e.collection = this);
            else {
                var r = e;
                e = new this.model(r, {
                    collection: this
                }), e.validate && !e._performValidation(r, t) && (e = !1)
            }
            return e
        },
        _add: function (e, t) {
            t || (t = {}), e = this._prepareModel(e, t);
            if (!e) return !1;
            var n = this.getByCid(e);
            if (n) throw Error(["Can't add the same model to a set twice", n.id]);
            return this._byId[e.id] = e, this._byCid[e.cid] = e, this.models.splice(t.at != null ? t.at : this.comparator ? this.sortedIndex(e, this.comparator) : this.length, 0, e), e.bind("all", this._onModelEvent), this.length++, t.silent || e.trigger("add", e, this, t), e
        },
        _remove: function (e, t) {
            return t || (t = {}), e = this.getByCid(e) || this.get(e), e ? (delete this._byId[e.id], delete this._byCid[e.cid], this.models.splice(this.indexOf(e), 1), this.length--, t.silent || e.trigger("remove", e, this, t), this._removeReference(e), e) : null
        },
        _removeReference: function (e) {
            this == e.collection && delete e.collection, e.unbind("all", this._onModelEvent)
        },
        _onModelEvent: function (e, t, n, r) {
            (e == "add" || e == "remove") && n != this || (e == "destroy" && this._remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments))
        }
    }), r.each(["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "rest", "last", "without", "indexOf", "lastIndexOf", "isEmpty", "groupBy"], function (e) {
        n.Collection.prototype[e] = function () {
            return r[e].apply(r, [this.models].concat(r.toArray(arguments)))
        }
    }), n.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    };
    var s = /:([\w\d]+)/g,
        o = /\*([\w\d]+)/g,
        u = /[-[\]{}()+?.,\\^$|#\s]/g;
    r.extend(n.Router.prototype, n.Events, {
        initialize: function () {},
        route: function (e, t, i) {
            n.history || (n.history = new n.History), r.isRegExp(e) || (e = this._routeToRegExp(e)), n.history.route(e, r.bind(function (n) {
                n = this._extractParameters(e, n), i.apply(this, n), this.trigger.apply(this, ["route:" + t].concat(n))
            }, this))
        },
        navigate: function (e, t) {
            n.history.navigate(e, t)
        },
        _bindRoutes: function () {
            if (this.routes) {
                var e = [],
                    t;
                for (t in this.routes) e.unshift([t, this.routes[t]]);
                t = 0;
                for (var n = e.length; t < n; t++) this.route(e[t][0], e[t][1], this[e[t][1]])
            }
        },
        _routeToRegExp: function (e) {
            return e = e.replace(u, "\\$&").replace(s, "([^/]*)").replace(o, "(.*?)"), RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            return e.exec(t).slice(1)
        }
    }), n.History = function () {
        this.handlers = [], r.bindAll(this, "checkUrl")
    };
    var a = /^#*/,
        f = /msie [\w.]+/,
        l = !1;
    r.extend(n.History.prototype, {
        interval: 50,
        getFragment: function (e, t) {
            if (e == null) if (this._hasPushState || t) {
                    e = window.location.pathname;
                    var n = window.location.search;
                    n && (e += n), e.indexOf(this.options.root) == 0 && (e = e.substr(this.options.root.length))
                } else e = window.location.hash;
            return decodeURIComponent(e.replace(a, ""))
        },
        start: function (e) {
            if (l) throw Error("Backbone.history has already been started");
            this.options = r.extend({}, {
                root: "/"
            }, this.options, e), this._wantsPushState = !! this.options.pushState, this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState), e = this.getFragment();
            var t = document.documentMode;
            if (t = f.exec(navigator.userAgent.toLowerCase()) && (!t || t <= 7)) this.iframe = i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e);
            this._hasPushState ? i(window).bind("popstate", this.checkUrl) : "onhashchange" in window && !t ? i(window).bind("hashchange", this.checkUrl) : setInterval(this.checkUrl, this.interval), this.fragment = e, l = !0, e = window.location, t = e.pathname == this.options.root;
            if (this._wantsPushState && !this._hasPushState && !t) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && t && e.hash && (this.fragment = e.hash.replace(a, ""), window.history.replaceState({}, document.title, e.protocol + "//" + e.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl()
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            e == this.fragment && this.iframe && (e = this.getFragment(this.iframe.location.hash));
            if (e == this.fragment || e == decodeURIComponent(this.fragment)) return !1;
            this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(window.location.hash)
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e);
            return r.any(this.handlers, function (e) {
                if (e.route.test(t)) return e.callback(t), !0
            })
        },
        navigate: function (e, t) {
            var n = (e || "").replace(a, "");
            if (this.fragment != n && this.fragment != decodeURIComponent(n)) {
                if (this._hasPushState) {
                    var r = window.location;
                    n.indexOf(this.options.root) != 0 && (n = this.options.root + n), this.fragment = n, window.history.pushState({}, document.title, r.protocol + "//" + r.host + n)
                } else if (window.location.hash = this.fragment = n, this.iframe && n != this.getFragment(this.iframe.location.hash)) this.iframe.document.open().close(), this.iframe.location.hash = n;
                t && this.loadUrl(e)
            }
        }
    }), n.View = function (e) {
        this.cid = r.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.delegateEvents(), this.initialize.apply(this, arguments)
    };
    var c = /^(\S+)\s*(.*)$/,
        h = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    r.extend(n.View.prototype, n.Events, {
        tagName: "div",
        $: function (e) {
            return i(e, this.el)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return i(this.el).remove(), this
        },
        make: function (e, t, n) {
            return e = document.createElement(e), t && i(e).attr(t), n && i(e).html(n), e
        },
        delegateEvents: function (e) {
            if (e || (e = this.events)) for (var t in r.isFunction(e) && (e = e.call(this)), i(this.el).unbind(".delegateEvents" + this.cid), e) {
                    var n = this[e[t]];
                    if (!n) throw Error('Event "' + e[t] + '" does not exist');
                    var s = t.match(c),
                        o = s[1];
                    s = s[2], n = r.bind(n, this), o += ".delegateEvents" + this.cid, s === "" ? i(this.el).bind(o, n) : i(this.el).delegate(s, o, n)
            }
        },
        _configure: function (e) {
            this.options && (e = r.extend({}, this.options, e));
            for (var t = 0, n = h.length; t < n; t++) {
                var i = h[t];
                e[i] && (this[i] = e[i])
            }
            this.options = e
        },
        _ensureElement: function () {
            if (this.el) r.isString(this.el) && (this.el = i(this.el).get(0));
            else {
                var e = this.attributes || {};
                this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.el = this.make(this.tagName, e)
            }
        }
    }), n.Model.extend = n.Collection.extend = n.Router.extend = n.View.extend = function (e, t) {
        var n = v(this, e, t);
        return n.extend = this.extend, n
    };
    var p = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    n.sync = function (e, t, s) {
        var o = p[e];
        return s = r.extend({
            type: o,
            dataType: "json"
        }, s), s.url || (s.url = m(t) || g()), !s.data && t && (e == "create" || e == "update") && (s.contentType = "application/json", s.data = JSON.stringify(t.toJSON())), n.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
            model: s.data
        } : {}), n.emulateHTTP && (o === "PUT" || o === "DELETE") && (n.emulateJSON && (s.data._method = o), s.type = "POST", s.beforeSend = function (e) {
            e.setRequestHeader("X-HTTP-Method-Override", o)
        }), s.type !== "GET" && !n.emulateJSON && (s.processData = !1), i.ajax(s)
    };
    var d = function () {}, v = function (e, t, n) {
            var i;
            return i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                return e.apply(this, arguments)
            }, r.extend(i, e), d.prototype = e.prototype, i.prototype = new d, t && r.extend(i.prototype, t), n && r.extend(i, n), i.prototype.constructor = i, i.__super__ = e.prototype, i
        }, m = function (e) {
            return !e || !e.url ? null : r.isFunction(e.url) ? e.url() : e.url
        }, g = function () {
            throw Error('A "url" property or function must be specified')
        }, y = function (e, t, n) {
            return function (r) {
                e ? e(t, r, n) : t.trigger("error", t, r, n)
            }
        }
}.call(this), ! function (e) {
    e(function () {
        e.support.transition = function () {
            var t = document.body || document.documentElement,
                n = t.style,
                r = n.transition !== undefined || n.WebkitTransition !== undefined || n.MozTransition !== undefined || n.MsTransition !== undefined || n.OTransition !== undefined;
            return r && {
                end: function () {
                    var t = "TransitionEnd";
                    return e.browser.webkit ? t = "webkitTransitionEnd" : e.browser.mozilla ? t = "transitionend" : e.browser.opera && (t = "oTransitionEnd"), t
                }()
            }
        }()
    })
}(window.jQuery), ! function (e) {
    function t() {
        var t = this,
            r = setTimeout(function () {
                t.$element.off(e.support.transition.end), n.call(t)
            }, 500);
        this.$element.one(e.support.transition.end, function () {
            clearTimeout(r), n.call(t)
        })
    }
    function n(e) {
        this.$element.hide().trigger("hidden"), r.call(this)
    }
    function r(t) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = e.support.transition && r;
            this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.options.backdrop != "static" && this.$backdrop.click(e.proxy(this.hide, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), s ? this.$backdrop.one(e.support.transition.end, t) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(i, this)) : i.call(this)) : t && t()
    }
    function i() {
        this.$backdrop.remove(), this.$backdrop = null
    }
    function s() {
        var t = this;
        this.isShown && this.options.keyboard ? e(document).on("keyup.dismiss.modal", function (e) {
            e.which == 27 && t.hide()
        }) : this.isShown || e(document).off("keyup.dismiss.modal")
    }
    var o = function (t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this))
    };
    o.prototype = {
        constructor: o,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var t = this;
            if (this.isShown) return;
            e("body").addClass("modal-open"), this.isShown = !0, this.$element.trigger("show"), s.call(this), r.call(this, function () {
                var n = e.support.transition && t.$element.hasClass("fade");
                !t.$element.parent().length && t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in"), n ? t.$element.one(e.support.transition.end, function () {
                    t.$element.trigger("shown")
                }) : t.$element.trigger("shown")
            })
        },
        hide: function (r) {
            r && r.preventDefault();
            if (!this.isShown) return;
            var i = this;
            this.isShown = !1, e("body").removeClass("modal-open"), s.call(this), this.$element.trigger("hide").removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? t.call(this) : n.call(this)
        }
    }, e.fn.modal = function (t) {
        return this.each(function () {
            var n = e(this),
                r = n.data("modal"),
                i = e.extend({}, e.fn.modal.defaults, n.data(), typeof t == "object" && t);
            r || n.data("modal", r = new o(this, i)), typeof t == "string" ? r[t]() : i.show && r.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = o, e(function () {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
            var n = e(this),
                r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = i.data("modal") ? "toggle" : e.extend({}, i.data(), n.data());
            t.preventDefault(), i.modal(s)
        })
    })
}(window.jQuery), ! function (e) {
    function t() {
        e(n).parent().removeClass("open")
    }
    var n = '[data-toggle="dropdown"]',
        r = function (t) {
            var n = e(t).on("click.dropdown.data-api", this.toggle);
            e("html").on("click.dropdown.data-api", function () {
                n.parent().removeClass("open")
            })
        };
    r.prototype = {
        constructor: r,
        toggle: function (n) {
            var r = e(this),
                i = r.attr("data-target"),
                s, o;
            return i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), s = e(i), s.length || (s = r.parent()), o = s.hasClass("open"), t(), !o && s.toggleClass("open"), !1
        }
    }, e.fn.dropdown = function (t) {
        return this.each(function () {
            var n = e(this),
                i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)), typeof t == "string" && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = r, e(function () {
        e("html").on("click.dropdown.data-api", t), e("body").on("click.dropdown.data-api", n, r.prototype.toggle)
    })
}(window.jQuery), ! function (e) {
    function t(t, n) {
        var r = e.proxy(this.process, this),
            i = e(t).is("body") ? e(window) : e(t),
            s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body").on("click.scroll.data-api", this.selector, r), this.refresh(), this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function () {
            this.targets = this.$body.find(this.selector).map(function () {
                var t = e(this).attr("href");
                return /^#\w/.test(t) && e(t).length ? t : null
            }), this.offsets = e.map(this.targets, function (t) {
                return e(t).position().top
            })
        },
        process: function () {
            var e = this.$scrollElement.scrollTop() + this.options.offset,
                t = this.offsets,
                n = this.targets,
                r = this.activeTarget,
                i;
            for (i = t.length; i--;) r != n[i] && e >= t[i] && (!t[i + 1] || e <= t[i + 1]) && this.activate(n[i])
        },
        activate: function (e) {
            var t;
            this.activeTarget = e, this.$body.find(this.selector).parent(".active").removeClass("active"), t = this.$body.find(this.selector + '[href="' + e + '"]').parent("li").addClass("active"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active")
        }
    }, e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("scrollspy"),
                s = typeof n == "object" && n;
            i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
        offset: 10
    }, e(function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), ! function (e) {
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t,
        show: function () {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                r = t.attr("data-target"),
                i, s;
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            if (t.parent("li").hasClass("active")) return;
            i = n.find(".active a").last()[0], t.trigger({
                type: "show",
                relatedTarget: i
            }), s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function () {
                t.trigger({
                    type: "shown",
                    relatedTarget: i
                })
            })
        },
        activate: function (t, n, r) {
            function i() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }
            var s = n.find("> .active"),
                o = r && e.support.transition && s.hasClass("fade");
            o ? s.one(e.support.transition.end, i) : i(), s.removeClass("in")
        }
    }, e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("tab");
            i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e(function () {
        e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
            t.preventDefault(), e(this).tab("show")
        })
    })
}(window.jQuery), ! function (e) {
    var t = function (e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function (t, n, r) {
            var i, s;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, this.options.trigger != "manual" && (i = this.options.trigger == "hover" ? "mouseenter" : "focus", s = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(i, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            !n.options.delay || !n.options.delay.show ? n.show() : (n.hoverState = "in", setTimeout(function () {
                n.hoverState == "in" && n.show()
            }, n.options.delay.show))
        },
        leave: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            !n.options.delay || !n.options.delay.hide ? n.hide() : (n.hoverState = "out", setTimeout(function () {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide))
        },
        show: function () {
            var e, t, n, r, i, s, o;
            if (this.hasContent() && this.enabled) {
                e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                switch (t ? s.split(" ")[1] : s) {
                    case "bottom":
                        o = {
                            top: n.top + n.height,
                            left: n.left + n.width / 2 - r / 2
                        };
                        break;
                    case "top":
                        o = {
                            top: n.top - i,
                            left: n.left + n.width / 2 - r / 2
                        };
                        break;
                    case "left":
                        o = {
                            top: n.top + n.height / 2 - i / 2,
                            left: n.left - r
                        };
                        break;
                    case "right":
                        o = {
                            top: n.top + n.height / 2 - i / 2,
                            left: n.left + n.width
                        }
                }
                e.css(o).addClass(s).addClass("in")
            }
        },
        setContent: function () {
            var e = this.tip();
            e.find(".tooltip-inner").html(this.getTitle()), e.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function t() {
                var t = setTimeout(function () {
                    r.off(e.support.transition.end).remove()
                }, 500);
                r.one(e.support.transition.end, function () {
                    clearTimeout(t), r.remove()
                })
            }
            var n = this,
                r = this.tip();
            r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : r.remove()
        },
        fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function (t) {
            return e.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function () {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e = (e || "").toString().replace(/(^\s*|\s*$)/, ""), e
        },
        tip: function () {
            return this.$tip = this.$tip || e(this.options.template)
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }
    }, e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("tooltip"),
                s = typeof n == "object" && n;
            i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        delay: 0,
        selector: !1,
        placement: "top",
        trigger: "hover",
        title: "",
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    }
}(window.jQuery), ! function (e) {
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function () {
            var t = this.tip(),
                n = this.getTitle(),
                r = this.getContent();
            t.find(".popover-title")[e.type(n) == "object" ? "append" : "html"](n), t.find(".popover-content > *")[e.type(r) == "object" ? "append" : "html"](r), t.removeClass("fade top bottom left right in")
        },
        hasContent: function () {
            return this.getTitle() || this.getContent()
        },
        getContent: function () {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content), e = e.toString().replace(/(^\s*|\s*$)/, ""), e
        },
        tip: function () {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        }
    }), e.fn.popover = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("popover"),
                s = typeof n == "object" && n;
            i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    })
}(window.jQuery), ! function (e) {
    var t = '[data-dismiss="alert"]',
        n = function (n) {
            e(n).on("click", t, this.close)
        };
    n.prototype = {
        constructor: n,
        close: function (t) {
            function n() {
                s.trigger("closed").remove()
            }
            var r = e(this),
                i = r.attr("data-target"),
                s;
            i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), s = e(i), s.trigger("close"), t && t.preventDefault(), s.length || (s = r.hasClass("alert") ? r : r.parent()), s.trigger("close").removeClass("in"), e.support.transition && s.hasClass("fade") ? s.on(e.support.transition.end, n) : n()
        }
    }, e.fn.alert = function (t) {
        return this.each(function () {
            var r = e(this),
                i = r.data("alert");
            i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e(function () {
        e("body").on("click.alert.data-api", t, n.prototype.close)
    })
}(window.jQuery), ! function (e) {
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype = {
        constructor: t,
        setState: function (e) {
            var t = "disabled",
                n = this.$element,
                r = n.data(),
                i = n.is("input") ? "val" : "html";
            e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function () {
                e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
            }, 0)
        },
        toggle: function () {
            var e = this.$element.parent('[data-toggle="buttons-radio"]');
            e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
        }
    }, e.fn.button = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("button"),
                s = typeof n == "object" && n;
            i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.defaults = {
        loadingText: "loading..."
    }, e.fn.button.Constructor = t, e(function () {
        e("body").on("click.button.data-api", "[data-toggle^=button]", function (t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
        })
    })
}(window.jQuery), ! function (e) {
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t,
        dimension: function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        },
        show: function () {
            var t = this.dimension(),
                n = e.camelCase(["scroll", t].join("-")),
                r = this.$parent && this.$parent.find(".in"),
                i;
            r && r.length && (i = r.data("collapse"), r.collapse("hide"), i || r.data("collapse", null)), this.$element[t](0), this.transition("addClass", "show", "shown"), this.$element[t](this.$element[0][n])
        },
        hide: function () {
            var e = this.dimension();
            this.reset(this.$element[e]()), this.transition("removeClass", "hide", "hidden"), this.$element[e](0)
        },
        reset: function (e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function (t, n, r) {
            var i = this,
                s = function () {
                    n == "show" && i.reset(), i.$element.trigger(r)
                };
            this.$element.trigger(n)[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
        },
        toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    }, e.fn.collapse = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("collapse"),
                s = typeof n == "object" && n;
            i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.collapse.defaults = {
        toggle: !0
    }, e.fn.collapse.Constructor = t, e(function () {
        e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
            var n = e(this),
                r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
                s = e(i).data("collapse") ? "toggle" : n.data();
            e(i).collapse(s)
        })
    })
}(window.jQuery), ! function (e) {
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.carousel.defaults, n), this.options.slide && this.slide(this.options.slide), this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function () {
            return this.interval = setInterval(e.proxy(this.next, this), this.options.interval), this
        },
        to: function (t) {
            var n = this.$element.find(".active"),
                r = n.parent().children(),
                i = r.index(n),
                s = this;
            if (t > r.length - 1 || t < 0) return;
            return this.sliding ? this.$element.one("slid", function () {
                s.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(r[t]))
        },
        pause: function () {
            return clearInterval(this.interval), this.interval = null, this
        },
        next: function () {
            if (this.sliding) return;
            return this.slide("next")
        },
        prev: function () {
            if (this.sliding) return;
            return this.slide("prev")
        },
        slide: function (t, n) {
            var r = this.$element.find(".active"),
                i = n || r[t](),
                s = this.interval,
                o = t == "next" ? "left" : "right",
                u = t == "next" ? "first" : "last",
                f = this;
            this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u]();
            if (i.hasClass("active")) return;
            return !e.support.transition && this.$element.hasClass("slide") ? (this.$element.trigger("slide"), r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")) : (i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.trigger("slide"), this.$element.one(e.support.transition.end, function () {
                i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), f.sliding = !1, setTimeout(function () {
                    f.$element.trigger("slid")
                }, 0)
            })), s && this.cycle(), this
        }
    }, e.fn.carousel = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("carousel"),
                s = typeof n == "object" && n;
            i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : typeof n == "string" || (n = s.slide) ? i[n]() : i.cycle()
        })
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e(function () {
        e("body").on("click.carousel.data-api", "[data-slide]", function (t) {
            var n = e(this),
                r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = !i.data("modal") && e.extend({}, i.data(), n.data());
            i.carousel(s), t.preventDefault()
        })
    })
}(window.jQuery), ! function (e) {
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.$menu = e(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t,
        select: function () {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(e), this.$element.change(), this.hide()
        },
        show: function () {
            var t = e.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: t.top + t.height,
                left: t.left
            }), this.$menu.show(), this.shown = !0, this
        },
        hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function (t) {
            var n = this,
                r, i;
            return this.query = this.$element.val(), this.query ? (r = e.grep(this.source, function (e) {
                if (n.matcher(e)) return e
            }), r = this.sorter(r), r.length ? this.render(r.slice(0, this.options.items)).show() : this.shown ? this.hide() : this) : this.shown ? this.hide() : this
        },
        matcher: function (e) {
            return~ e.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function (e) {
            var t = [],
                n = [],
                r = [],
                i;
            while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
            return t.concat(n, r)
        },
        highlighter: function (e) {
            return e.replace(new RegExp("(" + this.query + ")", "ig"), function (e, t) {
                return "<strong>" + t + "</strong>"
            })
        },
        render: function (t) {
            var n = this;
            return t = e(t).map(function (t, r) {
                return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },
        next: function (t) {
            var n = this.$menu.find(".active").removeClass("active"),
                r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
        },
        prev: function (e) {
            var t = this.$menu.find(".active").removeClass("active"),
                n = t.prev();
            n.length || (n = this.$menu.find("li").last()), n.addClass("active")
        },
        listen: function () {
            this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), (e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keypress, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
        },
        keyup: function (e) {
            switch (e.keyCode) {
                case 40:
                case 38:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        },
        keypress: function (e) {
            if (!this.shown) return;
            switch (e.keyCode) {
                case 9:
                case 13:
                case 27:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.prev();
                    break;
                case 40:
                    e.preventDefault(), this.next()
            }
            e.stopPropagation()
        },
        blur: function (e) {
            var t = this;
            setTimeout(function () {
                t.hide()
            }, 150)
        },
        click: function (e) {
            e.stopPropagation(), e.preventDefault(), this.select()
        },
        mouseenter: function (t) {
            this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        }
    }, e.fn.typeahead = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("typeahead"),
                s = typeof n == "object" && n;
            i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>'
    }, e.fn.typeahead.Constructor = t, e(function () {
        e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (t) {
            var n = e(this);
            if (n.data("typeahead")) return;
            t.preventDefault(), n.typeahead(n.data())
        })
    })
}(window.jQuery),
function (e, t) {
    function n(t) {
        return !e(t).parents().andSelf().filter(function () {
            return e.curCSS(this, "visibility") === "hidden" || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.6",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                n = e(this[0]);
                for (var r; n.length && n[0] !== document;) {
                    r = n.css("position");
                    if (r === "absolute" || r === "relative" || r === "fixed") {
                        r = parseInt(n.css("zIndex"), 10);
                        if (!isNaN(r) && r !== 0) return r
                    }
                    n = n.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.each(["Width", "Height"], function (n, r) {
        function i(t, n, r, i) {
            return e.each(s, function () {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, r && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), i && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            o = r.toLowerCase(),
            u = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function (n) {
            return n === t ? u["inner" + r].call(this) : this.each(function () {
                e(this).css(o, i(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function () {
                e(this).css(o, i(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            var r = t.nodeName.toLowerCase(),
                i = e.attr(t, "tabindex");
            return "area" === r ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (t = e("img[usemap=#" + i + "]")[0], !! t && n(t))) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" == r ? t.href || !isNaN(i) : !isNaN(i)) && n(t)
        },
        tabbable: function (t) {
            var n = e.attr(t, "tabindex");
            return (isNaN(n) || n >= 0) && e(t).is(":focusable")
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                t = e.ui[t].prototype;
                for (var i in r) t.plugins[i] = t.plugins[i] || [], t.plugins[i].push([n, r[i]])
            },
            call: function (e, t, n) {
                if ((t = e.plugins[t]) && e.element[0].parentNode) for (var r = 0; r < t.length; r++) e.options[t[r][0]] && t[r][1].apply(e.element, n)
            }
        },
        contains: function (e, t) {
            return document.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : e !== t && e.contains(t)
        },
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            n = n && n === "left" ? "scrollLeft" : "scrollTop";
            var r = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, r = t[n] > 0, t[n] = 0, r)
        },
        isOverAxis: function (e, t, n) {
            return e > t && e < t + n
        },
        isOver: function (t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    }))
}(jQuery),
function (e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function (t) {
            for (var r = 0, i;
            (i = t[r]) != null; r++) e(i).triggerHandler("remove");
            n(t)
        }
    } else {
        var r = e.fn.remove;
        e.fn.remove = function (t, n) {
            return this.each(function () {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    e(this).triggerHandler("remove")
                }), r.call(e(this), t, n)
            })
        }
    }
    e.widget = function (t, n, r) {
        var i = t.split(".")[0],
            s;
        t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function (n) {
            return !!e.data(n, t)
        }, e[i] = e[i] || {}, e[i][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        }, n = new n, n.options = e.extend(!0, {}, n.options), e[i][t].prototype = e.extend(!0, n, {
            namespace: i,
            widgetName: t,
            widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, r), e.widget.bridge(t, e[i][t])
    }, e.widget.bridge = function (n, r) {
        e.fn[n] = function (i) {
            var s = typeof i == "string",
                o = Array.prototype.slice.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function () {
                var r = e.data(this, n),
                    s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
                if (s !== r && s !== t) return u = s, !1
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
            }), u)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function () {
                r.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend({}, this.options);
            if (typeof n == "string") {
                if (r === t) return this.options[n];
                i = {}, i[n] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, n, r) {
            var i = this.options[t];
            n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), r = r || {};
            if (n.originalEvent) {
                t = e.event.props.length;
                for (var s; t;) s = e.event.props[--t], n[s] = n.originalEvent[s]
            }
            return this.element.trigger(n, r), !(e.isFunction(i) && i.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
        }
    }
}(jQuery),
function (e) {
    e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (t) {
                if (e._preventClickEvent) return e._preventClickEvent = !1, t.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (t) {
            t.originalEvent = t.originalEvent || {};
            if (!t.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var n = this,
                    r = t.which == 1,
                    i = typeof this.options.cancel == "string" ? e(t.target).parents().add(t.target).filter(this.options.cancel).length : !1;
                if (!r || i || !this._mouseCapture(t)) return !0;
                this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    n.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                    this._mouseStarted = this._mouseStart(t) !== !1;
                    if (!this._mouseStarted) return t.preventDefault(), !0
                }
                return this._mouseMoveDelegate = function (e) {
                    return n._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return n._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), t.originalEvent.mouseHandled = !0
            }
        },
        _mouseMove: function (t) {
            return !e.browser.msie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1) ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, this._preventClickEvent = t.target == this._mouseDownEvent.target, this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
function (e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
        n = /top|center|bottom/,
        r = e.fn.position,
        i = e.fn.offset;
    e.fn.position = function (i) {
        if (!i || !i.of) return r.apply(this, arguments);
        i = e.extend({}, i);
        var s = e(i.of),
            u = s[0],
            a = (i.collision || "flip").split(" "),
            f = i.offset ? i.offset.split(" ") : [0, 0],
            l, h, p;
        return u.nodeType === 9 ? (l = s.width(), h = s.height(), p = {
            top: 0,
            left: 0
        }) : u.setTimeout ? (l = s.width(), h = s.height(), p = {
            top: s.scrollTop(),
            left: s.scrollLeft()
        }) : u.preventDefault ? (i.at = "left top", l = h = 0, p = {
            top: i.of.pageY,
            left: i.of.pageX
        }) : (l = s.outerWidth(), h = s.outerHeight(), p = s.offset()), e.each(["my", "at"], function () {
            var e = (i[this] || "").split(" ");
            e.length === 1 && (e = t.test(e[0]) ? e.concat(["center"]) : n.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = t.test(e[0]) ? e[0] : "center", e[1] = n.test(e[1]) ? e[1] : "center", i[this] = e
        }), a.length === 1 && (a[1] = a[0]), f[0] = parseInt(f[0], 10) || 0, f.length === 1 && (f[1] = f[0]), f[1] = parseInt(f[1], 10) || 0, i.at[0] === "right" ? p.left += l : i.at[0] === "center" && (p.left += l / 2), i.at[1] === "bottom" ? p.top += h : i.at[1] === "center" && (p.top += h / 2), p.left += f[0], p.top += f[1], this.each(function () {
            var t = e(this),
                n = t.outerWidth(),
                r = t.outerHeight(),
                s = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                o = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                u = n + s + parseInt(e.curCSS(this, "marginRight", !0)) || 0,
                d = r + o + parseInt(e.curCSS(this, "marginBottom", !0)) || 0,
                v = e.extend({}, p),
                m;
            i.my[0] === "right" ? v.left -= n : i.my[0] === "center" && (v.left -= n / 2), i.my[1] === "bottom" ? v.top -= r : i.my[1] === "center" && (v.top -= r / 2), v.left = parseInt(v.left), v.top = parseInt(v.top), m = {
                left: v.left - s,
                top: v.top - o
            }, e.each(["left", "top"], function (t, s) {
                e.ui.position[a[t]] && e.ui.position[a[t]][s](v, {
                    targetWidth: l,
                    targetHeight: h,
                    elemWidth: n,
                    elemHeight: r,
                    collisionPosition: m,
                    collisionWidth: u,
                    collisionHeight: d,
                    offset: f,
                    my: i.my,
                    at: i.at
                })
            }), e.fn.bgiframe && t.bgiframe(), t.offset(e.extend(v, {
                using: i.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (t, n) {
                var r = e(window);
                r = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(), t.left = r > 0 ? t.left - r : Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function (t, n) {
                var r = e(window);
                r = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(), t.top = r > 0 ? t.top - r : Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function (t, n) {
                if (n.at[0] !== "center") {
                    var r = e(window);
                    r = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft();
                    var i = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
                        s = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
                        o = -2 * n.offset[0];
                    t.left += n.collisionPosition.left < 0 ? i + s + o : r > 0 ? i + s + o : 0
                }
            },
            top: function (t, n) {
                if (n.at[1] !== "center") {
                    var r = e(window);
                    r = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop();
                    var i = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
                        s = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
                        o = -2 * n.offset[1];
                    t.top += n.collisionPosition.top < 0 ? i + s + o : r > 0 ? i + s + o : 0
                }
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function (t, n) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var r = e(t),
            i = r.offset(),
            s = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            o = parseInt(e.curCSS(t, "left", !0), 10) || 0;
        i = {
            top: n.top - i.top + s,
            left: n.left - i.left + o
        }, "using" in n ? n.using.call(t, i) : r.css(i)
    }, e.fn.offset = function (t) {
        var n = this[0];
        return !n || !n.ownerDocument ? null : t ? this.each(function () {
            e.offset.setOffset(this, t)
        }) : i.call(this)
    })
}(jQuery),
function (e) {
    e.widget("ui.draggable", e.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function () {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? !0 : !1)
        },
        _mouseStart: function (t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), !0)
        },
        _mouseDrag: function (t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                n = this._uiHash();
                if (this._trigger("drag", t, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            if (!this.element[0] || !this.element[0].parentNode) return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var r = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    r._trigger("stop", t) !== !1 && r._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function (t) {
            var n = this.options;
            return t = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone() : this.element, t.parents("body").length || t.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), t[0] != this.element[0] && !/(fixed|absolute)/.test(t.css("position")) && t.css("position", "absolute"), t
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                    top: 0,
                    left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent
                        .scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment)[0];
                if (n) {
                    t = e(t.containment).offset();
                    var r = e(n).css("overflow") != "hidden";
                    this.containment = [t.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position), t = t == "absolute" ? 1 : -1;
            var r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()) * t),
                left: n.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft()) * t)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            return this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + n.grid[1] : o - n.grid[1] : o : o, s = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? s - this.offset.click.left < this.containment[0] || s - this.offset.click.left > this.containment[2] ? s - this.offset.click.left < this.containment[0] ? s + n.grid[0] : s - n.grid[0] : s : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.extend(e.ui.draggable, {
        version: "1.8.6"
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function () {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n._refreshItems(), n._trigger("activate", t, s))
            })
        },
        stop: function (t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = this;
            e.each(r.sortables, function () {
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = e("body"),
                n = e(this).data("draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function () {
            var t = e(this).data("draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "iframeFix", {
        start: function () {
            var t = e(this).data("draggable").options;
            e(t.iframeFix === !0 ? "iframe" : t.iframeFix).each(function () {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            })
        },
        stop: function () {
            e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            })
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, n) {
            t = e(n.helper), n = e(this).data("draggable").options, t.css("opacity") && (n._opacity = t.css("opacity")), t.css("opacity", n.opacity)
        },
        stop: function (t, n) {
            t = e(this).data("draggable").options, t._opacity && e(n.helper).css("opacity", t._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = e(this).data("draggable");
            t.scrollParent[0] != document && t.scrollParent[0].tagName != "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function (t) {
            var n = e(this).data("draggable"),
                r = n.options,
                i = !1;
            if (n.scrollParent[0] != document && n.scrollParent[0].tagName != "HTML") {
                if (!r.axis || r.axis != "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis != "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis != "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis != "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = e(this).data("draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function () {
                var n = e(this),
                    r = n.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function (t, n) {
            for (var r = e(this).data("draggable"), i = r.options, s = i.snapTolerance, o = n.offset.left, u = o + r.helperProportions.width, a = n.offset.top, f = a + r.helperProportions.height, l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left,
                    h = c + r.snapElements[l].width,
                    p = r.snapElements[l].top,
                    v = p + r.snapElements[l].height;
                if (c - s < o && o < h + s && p - s < a && a < v + s || c - s < o && o < h + s && p - s < f && f < v + s || c - s < u && u < h + s && p - s < a && a < v + s || c - s < u && u < h + s && p - s < f && f < v + s) {
                    if (i.snapMode != "inner") {
                        var m = Math.abs(p - f) <= s,
                            g = Math.abs(v - a) <= s,
                            y = Math.abs(c - u) <= s,
                            b = Math.abs(h - o) <= s;
                        m && (n.position.top = r._convertPositionTo("relative", {
                            top: p - r.helperProportions.height,
                            left: 0
                        }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
                            top: v,
                            left: 0
                        }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: c - r.helperProportions.width
                        }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: h
                        }).left - r.margins.left)
                    }
                    var w = m || g || y || b;
                    i.snapMode != "outer" && (m = Math.abs(p - a) <= s, g = Math.abs(v - f) <= s, y = Math.abs(c - o) <= s, b = Math.abs(h - u) <= s, m && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
                        top: v - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)), !r.snapElements[l].snapping && (m || g || y || b || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = m || g || y || b || w
                } else r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = !1
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function () {
            var t = e(this).data("draggable").options;
            t = e.makeArray(e(t.stack)).sort(function (t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            if (t.length) {
                var n = parseInt(t[0].style.zIndex) || 0;
                e(t).each(function (e) {
                    this.style.zIndex = n + e
                }), this[0].style.zIndex = n + t.length
            }
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, n) {
            t = e(n.helper), n = e(this).data("draggable").options, t.css("zIndex") && (n._zIndex = t.css("zIndex")), t.css("zIndex", n.zIndex)
        },
        stop: function (t, n) {
            t = e(this).data("draggable").options, t._zIndex && e(n.helper).css("zIndex", t._zIndex)
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function () {
            for (var t = e.ui.ddmanager.droppables[this.options.scope], n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function (t, n) {
            t == "accept" && (this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function (t) {
            var n = e.ui.ddmanager.current; !! n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function (t) {
            var n = e.ui.ddmanager.current; !! n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function (t, n) {
            var r = n || e.ui.ddmanager.current;
            if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
            var i = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.extend(e.ui.droppable, {
        version: "1.8.6"
    }), e.ui.intersect = function (t, n, r) {
        if (!n.offset) return !1;
        var i = (t.positionAbs || t.position.absolute).left,
            s = i + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            u = o + t.helperProportions.height,
            a = n.offset.left,
            f = a + n.proportions.width,
            l = n.offset.top,
            c = l + n.proportions.height;
        switch (r) {
            case "fit":
                return a <= i && s <= f && l <= o && u <= c;
            case "intersect":
                return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < c;
            case "pointer":
                return e.ui.isOver((t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, l, a, n.proportions.height, n.proportions.width);
            case "touch":
                return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, n) {
            var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                i = n ? n.type : null,
                s = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
                o = 0;
            e: for (; o < r.length; o++) if (!(r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element))) {
                    for (var u = 0; u < s.length; u++) if (s[u] == r[o].element[0]) {
                            r[o].proportions.height = 0;
                            continue e
                        }
                    r[o].visible = r[o].element.css("display") != "none", r[o].visible && (r[o].offset = r[o].element.offset(), r[o].proportions = {
                        width: r[o].element[0].offsetWidth,
                        height: r[o].element[0].offsetHeight
                    }, i == "mousedown" && r[o]._activate.call(r[o], n))
                }
        },
        drop: function (t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = r || this._drop.call(this, n)), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n)))
            }), r
        },
        drag: function (t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                    var r = e.ui.intersect(t, this, this.options.tolerance);
                    if (r = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null) {
                        var i;
                        if (this.options.greedy) {
                            var s = this.element.parents(":data(droppable):eq(0)");
                            s.length && (i = e.data(s[0], "droppable"), i.greedyChild = r == "isover" ? 1 : 0)
                        }
                        i && r == "isover" && (i.isover = 0, i.isout = 1, i._out.call(i, n)), this[r] = 1, this[r == "isout" ? "isover" : "isout"] = 0, this[r == "isover" ? "_over" : "_out"].call(this, n), i && r == "isout" && (i.isout = 0, i.isover = 1, i._over.call(i, n))
                    }
                }
            })
        }
    }
}(jQuery),
function (e) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var t = this,
                n = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! n.aspectRatio,
                aspectRatio: n.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r = this.handles.split(",");
                this.handles = {};
                for (var i = 0; i < r.length; i++) {
                    var s = e.trim(r[i]),
                        o = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + s) + '"></div>');
                    /sw|se|ne|nw/.test(s) && o.css({
                        zIndex: ++n.zIndex
                    }), "se" == s && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(o)
                }
            }
            this._renderAxis = function (t) {
                t = t || this.element;
                for (var n in this.handles) {
                    this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r = e(this.handles[n], this.element),
                            i = 0;
                        i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), r = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(r, i), this._proportionallyResize()
                    }
                    e(this.handles[n])
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function () {
                e(this).removeClass("ui-resizable-autohide"), t._handles.show()
            }, function () {
                t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            var t = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                t(this.element);
                var n = this.element;
                n.after(this.originalElement.css({
                    position: n.css("position"),
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: n.css("top"),
                    left: n.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var n = !1;
            for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (n) {
            var r = this.options,
                i = this.element.position(),
                s = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                position: "absolute",
                top: i.top,
                left: i.left
            }), e.browser.opera && /relative/.test(s.css("position")) && s.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy(), i = t(this.helper.css("left"));
            var o = t(this.helper.css("top"));
            return r.containment && (i += e(r.containment).scrollLeft() || 0, o += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: o
            }, this.size = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalPosition = {
                left: i,
                top: o
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalMousePosition = {
                left: n.pageX,
                top: n.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", r == "auto" ? this.axis + "-resize" : r), s.addClass("ui-resizable-resizing"), this._propagate("start", n), !0
        },
        _mouseDrag: function (e) {
            var t = this.helper,
                n = this.originalMousePosition,
                r = this._change[this.axis];
            if (!r) return !1;
            n = r.apply(this, [e, e.pageX - n.left || 0, e.pageY - n.top || 0]);
            if (this._aspectRatio || e.shiftKey) n = this._updateRatio(n, e);
            return n = this._respectSize(n, e), this._propagate("resize", e), t.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(n), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var n = this.options,
                r = this;
            if (this._helper) {
                var i = this._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName);
                i = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height, s = {
                    width: r.size.width - (s ? 0 : r.sizeDiff.width),
                    height: r.size.height - i
                }, i = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null;
                var o = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                n.animate || this.element.css(e.extend(s, {
                    top: o,
                    left: i
                })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), n(e.left) && (this.position.left = e.left), n(e.top) && (this.position.top = e.top), n(e.height) && (this.size.height = e.height), n(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position,
                n = this.size,
                r = this.axis;
            return e.height ? e.width = n.height * this.aspectRatio : e.width && (e.height = n.width / this.aspectRatio), r == "sw" && (e.left = t.left + (n.width - e.width), e.top = null), r == "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this.options,
                r = this.axis,
                i = n(e.width) && t.maxWidth && t.maxWidth < e.width,
                s = n(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = n(e.width) && t.minWidth && t.minWidth > e.width,
                u = n(e.height) && t.minHeight && t.minHeight > e.height;
            o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight);
            var a = this.originalPosition.left + this.originalSize.width,
                f = this.position.top + this.size.height,
                c = /sw|nw|w/.test(r);
            return r = /nw|ne|n/.test(r), o && c && (e.left = a - t.minWidth), i && c && (e.left = a - t.maxWidth), u && r && (e.top = f - t.minHeight), s && r && (e.top = f - t.maxHeight), (t = !e.width && !e.height) && !e.left && e.top ? e.top = null : t && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t = this.helper || this.element, n = 0; n < this._proportionallyResizeElements.length; n++) {
                    var r = this._proportionallyResizeElements[n];
                    if (!this.borderDif) {
                        var i = [r.css("borderTopWidth"), r.css("borderRightWidth"), r.css("borderBottomWidth"), r.css("borderLeftWidth")],
                            s = [r.css("paddingTop"), r.css("paddingRight"), r.css("paddingBottom"), r.css("paddingLeft")];
                        this.borderDif = e.map(i, function (e, t) {
                            return e = parseInt(e, 10) || 0, t = parseInt(s[t], 10) || 0, e + t
                        })
                    }
                    e.browser.msie && (e(t).is(":hidden") || e(t).parents(":hidden").length) || r.css({
                        height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
            }
        },
        _renderProxy: function () {
            var t = this.options;
            this.elementOffset = this.element.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var n = e.browser.msie && e.browser.version < 7,
                    r = n ? 1 : 0;
                n = n ? 2 : -1, this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + n,
                    height: this.element.outerHeight() + n,
                    position: "absolute",
                    left: this.elementOffset.left - r + "px",
                    top: this.elementOffset.top - r + "px",
                    zIndex: ++t.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t) {
                return {
                    left: this.originalPosition.left + t,
                    width: this.originalSize.width - t
                }
            },
            n: function (e, t, n) {
                return {
                    top: this.originalPosition.top + n,
                    height: this.originalSize.height - n
                }
            },
            s: function (e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function (t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.extend(e.ui.resizable, {
        version: "1.8.6"
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).data("resizable").options,
                n = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10),
                            position: t.css("position")
                        })
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.parentNode ? t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], n(t.alsoResize)) : e.each(t.alsoResize, function (e) {
                n(e)
            }) : n(t.alsoResize)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable");
            t = r.options;
            var i = r.originalSize,
                s = r.originalPosition,
                o = {
                    height: r.size.height - i.height || 0,
                    width: r.size.width - i.width || 0,
                    top: r.position.top - s.top || 0,
                    left: r.position.left - s.left || 0
                }, u = function (t, i) {
                    e(t).each(function () {
                        var t = e(this),
                            s = e(this).data("resizable-alsoresize"),
                            u = {}, f = i && i.length ? i : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(f, function (e, t) {
                            (e = (s[t] || 0) + (o[t] || 0)) && e >= 0 && (u[t] = e || null)
                        }), e.browser.opera && /relative/.test(t.css("position")) && (r._revertToRelativePosition = !0, t.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), t.css(u)
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.nodeType ? e.each(t.alsoResize, function (e, t) {
                u(e, t)
            }) : u(t.alsoResize)
        },
        stop: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.css({
                            position: t.data("resizable-alsoresize").position
                        })
                    })
                };
            t._revertToRelativePosition && (t._revertToRelativePosition = !1, typeof n.alsoResize == "object" && !n.alsoResize.nodeType ? e.each(n.alsoResize, function (e) {
                r(e)
            }) : r(n.alsoResize)), e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var n = e(this).data("resizable"),
                r = n.options,
                i = n._proportionallyResizeElements,
                s = i.length && /textarea/i.test(i[0].nodeName),
                o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height;
            s = {
                width: n.size.width - (s ? 0 : n.sizeDiff.width),
                height: n.size.height - o
            }, o = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null;
            var u = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(s, u && o ? {
                top: u,
                left: o
            } : {}), {
                duration: r.animateDuration,
                easing: r.animateEasing,
                step: function () {
                    var r = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    i && i.length && e(i[0]).css({
                        width: r.width,
                        height: r.height
                    }), n._updateCache(r), n._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var n = e(this).data("resizable"),
                r = n.element,
                i = n.options.containment;
            if (r = i instanceof e ? i.get(0) : /parent/.test(i) ? r.parent().get(0) : i) {
                n.containerElement = e(r);
                if (/document/.test(i) || i == document) n.containerOffset = {
                        left: 0,
                        top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var s = e(r),
                        o = [];
                    e(["Top", "Right", "Left", "Bottom"]).each(function (e, n) {
                        o[e] = t(s.css("padding" + n))
                    }), n.containerOffset = s.offset(), n.containerPosition = s.position(), n.containerSize = {
                        height: s.innerHeight() - o[3],
                        width: s.innerWidth() - o[1]
                    }, i = n.containerOffset;
                    var u = n.containerSize.height,
                        a = n.containerSize.width;
                    a = e.ui.hasScroll(r, "left") ? r.scrollWidth : a, u = e.ui.hasScroll(r) ? r.scrollHeight : u, n.parentData = {
                        element: r,
                        left: i.left,
                        top: i.top,
                        width: a,
                        height: u
                    }
                }
            }
        },
        resize: function (t) {
            var n = e(this).data("resizable"),
                r = n.options,
                i = n.containerOffset,
                s = n.position;
            t = n._aspectRatio || t.shiftKey;
            var o = {
                top: 0,
                left: 0
            }, u = n.containerElement;
            u[0] != document && /static/.test(u.css("position")) && (o = i), s.left < (n._helper ? i.left : 0) && (n.size.width += n._helper ? n.position.left - i.left : n.position.left - o.left, t && (n.size.height = n.size.width / r.aspectRatio), n.position.left = r.helper ? i.left : 0), s.top < (n._helper ? i.top : 0) && (n.size.height += n._helper ? n.position.top - i.top : n.position.top, t && (n.size.width = n.size.height * r.aspectRatio), n.position.top = n._helper ? i.top : 0), n.offset.left = n.parentData.left + n.position.left, n.offset.top = n.parentData.top + n.position.top, r = Math.abs((n._helper ? n.offset.left - o.left : n.offset.left - o.left) + n.sizeDiff.width), i = Math.abs((n._helper ? n.offset.top - o.top : n.offset.top - i.top) + n.sizeDiff.height), s = n.containerElement.get(0) == n.element.parent().get(0), o = /relative|absolute/.test(n.containerElement.css("position")), s && o && (r -= n.parentData.left), r + n.size.width >= n.parentData.width && (n.size.width = n.parentData.width - r, t && (n.size.height = n.size.width / n.aspectRatio)), i + n.size.height >= n.parentData.height && (n.size.height = n.parentData.height - i, t && (n.size.width = n.size.height * n.aspectRatio))
        },
        stop: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.containerOffset,
                i = t.containerPosition,
                s = t.containerElement,
                o = e(t.helper),
                u = o.offset(),
                a = o.outerWidth() - t.sizeDiff.width;
            o = o.outerHeight() - t.sizeDiff.height, t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: o
            }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: o
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function () {
            var t = e(this).data("resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function () {
            var t = e(this).data("resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.size,
                i = t.originalSize,
                s = t.originalPosition,
                o = t.axis;
            n.grid = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid;
            var u = Math.round((r.width - i.width) / (n.grid[0] || 1)) * (n.grid[0] || 1);
            n = Math.round((r.height - i.height) / (n.grid[1] || 1)) * (n.grid[1] || 1), /^(se|s|e)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n) : /^(ne)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n, t.position.top = s.top - n) : (/^(sw)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n) : (t.size.width = i.width + u, t.size.height = i.height + n, t.position.top = s.top - n), t.position.left = s.left - u)
        }
    });
    var t = function (e) {
        return parseInt(e, 10) || 0
    }, n = function (e) {
            return !isNaN(parseInt(e, 10))
        }
}(jQuery),
function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n;
            this.refresh = function () {
                n = e(t.options.filter, t.element[0]), n.each(function () {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function () {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function (t) {
            var n = this;
            this.opos = [t.pageX, t.pageY];
            if (!this.options.disabled) {
                var r = this.options;
                this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                    left: t.clientX,
                    top: t.clientY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var r = e.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), e(t.target).parents().andSelf().each(function () {
                    var r = e.data(this, "selectable-item");
                    if (r) {
                        var i = !t.metaKey || !r.$element.hasClass("ui-selected");
                        return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, (r.selected = i) ? n._trigger("selecting", t, {
                            selecting: r.element
                        }) : n._trigger("unselecting", t, {
                            unselecting: r.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function (t) {
            var n = this;
            this.dragged = !0;
            if (!this.options.disabled) {
                var r = this.options,
                    i = this.opos[0],
                    s = this.opos[1],
                    o = t.pageX,
                    u = t.pageY;
                if (i > o) {
                    var a = o;
                    o = i, i = a
                }
                return s > u && (a = u, u = s, s = a), this.helper.css({
                    left: i,
                    top: s,
                    width: o - i,
                    height: u - s
                }), this.selectees.each(function () {
                    var a = e.data(this, "selectable-item");
                    if ( !! a && a.element != n.element[0]) {
                        var l = !1;
                        r.tolerance == "touch" ? l = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (l = a.left > i && a.right < o && a.top > s && a.bottom < u), l ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
                            selecting: a.element
                        }))) : (a.selecting && (t.metaKey && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
                            unselecting: a.element
                        }))), a.selected && !t.metaKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
                            unselecting: a.element
                        })))
                    }
                }), !1
            }
        },
        _mouseStop: function (t) {
            var n = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.extend(e.ui.selectable, {
        version: "1.8.6"
    })
}(jQuery),
function (e) {
    e.widget("ui.sortable", e.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData("sortable-item");
            return this
        },
        _setOption: function (t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget()[n ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, n) {
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var r = null,
                i = this;
            e(t.target).parents().each(function () {
                if (e.data(this, "sortable-item") == i) return r = e(this), !1
            }), e.data(t.target, "sortable-item") == i && (r = e(t.target));
            if (!r) return !1;
            if (this.options.handle && !n) {
                var s = !1;
                e(this.options.handle, r).find("*").andSelf().each(function () {
                    this == t.target && (s = !0)
                });
                if (!s) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, n, r) {
            n = this.options;
            var i = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, i._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n];
                var i = r.item[0],
                    s = this._intersectsWithPointer(r);
                if (s && i != this.currentItem[0] && this.placeholder[s == 1 ? "next" : "prev"]()[0] != i && !e.ui.contains(this.placeholder[0], i) && (this.options.type == "semi-dynamic" ? !e.ui.contains(this.element[0], i) : !0)) {
                    this.direction = s == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(r)) break;
                    this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, n) {
            if (t) {
                e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
                if (this.options.revert) {
                    var r = this;
                    n = r.placeholder.offset(), r.reverting = !0, e(this.helper).animate({
                        left: n.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        r._clear(t)
                    })
                } else this._clear(t, n);
                return !1
            }
        },
        cancel: function () {
            var t = this;
            if (this.dragging) {
                this._mouseUp(), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("deactivate", null, t._uiHash(this)), this.containers[n].containerCache.over && (this.containers[n]._trigger("out", null, t._uiHash(this)), this.containers[n].containerCache.over = 0)
            }
            return this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem), this
        },
        serialize: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function () {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function () {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left;
            return f = r + f > u && r + f < a && t + l > s && t + l < o, this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height);
            t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = n && t, t = this._getDragVerticalDirection();
            var r = this._getDragHorizontalDirection();
            return n ? this.floating ? r && r == "right" || t == "down" ? 2 : 1 : t && (t == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height);
            t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width);
            var r = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection();
            return this.floating && i ? i == "right" && t || i == "left" && !t : r && (r == "down" && n || r == "up" && !n)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var n = [],
                r = [],
                i = this._connectWith();
            if (i && t) for (t = i.length - 1; t >= 0; t--) for (var s = e(i[t]), o = s.length - 1; o >= 0; o--) {
                        var u = e.data(s[o], "sortable");
                        u && u != this && !u.options.disabled && r.push([e.isFunction(u.options.items) ? u.options.items.call(u.element) : e(u.options.items, u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), u])
            }
            r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (t = r.length - 1; t >= 0; t--) r[t][0].each(function () {
                    n.push(this)
                });
            return e(n)
        },
        _removeCurrentsFromItems: function () {
            for (var e = this.currentItem.find(":data(sortable-item)"), t = 0; t < this.items.length; t++) for (var n = 0; n < e.length; n++) e[n] == this.items[t].item[0] && this.items.splice(t, 1)
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                ],
                i = this._connectWith();
            if (i) for (var s = i.length - 1; s >= 0; s--) for (var o = e(i[s]), u = o.length - 1; u >= 0; u--) {
                        var a = e.data(o[u], "sortable");
                        a && a != this && !a.options.disabled && (r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                                item: this.currentItem
                            }) : e(a.options.items, a.element), a]), this.containers.push(a))
            }
            for (s = r.length - 1; s >= 0; s--) {
                t = r[s][1], i = r[s][0], u = 0;
                for (o = i.length; u < o; u++) a = e(i[u]), a.data("sortable-item", t), n.push({
                        item: a,
                        instance: t,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n],
                    i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                t || (r.width = i.outerWidth(), r.height = i.outerHeight()), i = i.offset(), r.left = i.left, r.top = i.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (n = this.containers.length - 1; n >= 0; n--) i = this.containers[n].element.offset(), this.containers[n].containerCache.left = i.left, this.containers[n].containerCache.top = i.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function (t) {
            var n = t || this,
                r = n.options;
            if (!r.placeholder || r.placeholder.constructor == String) {
                var i = r.placeholder;
                r.placeholder = {
                    element: function () {
                        var t = e(document.createElement(n.currentItem[0].nodeName)).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return i || (t.style.visibility = "hidden"), t
                    },
                    update: function (e, t) {
                        if (!i || !! r.forcePlaceholderSize) t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            n.placeholder = e(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
        },
        _contactContainers: function (t) {
            for (var n = null, r = null, i = this.containers.length - 1; i >= 0; i--) if (!e.ui.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (!n || !e.ui.contains(this.containers[i].element[0], n.element[0])) n = this.containers[i], r = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (n) if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
                else if (this.currentContainer != this.containers[r]) {
                n = 1e4, i = null;
                for (var s = this.positionAbs[this.containers[r].floating ? "left" : "top"], o = this.items.length - 1; o >= 0; o--) if (e.ui.contains(this.containers[r].element[0], this.items[o].item[0])) {
                        var u = this.items[o][this.containers[r].floating ? "left" : "top"];
                        Math.abs(u - s) < n && (n = Math.abs(u - s), i = this.items[o])
                    }
                if (i || this.options.dropOnEmpty) this.currentContainer = this.containers[r], i ? this._rearrange(t, i, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var n = this.options;
            return t = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem, t.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(t[0]), t[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (t[0].style.width == "" || n.forceHelperSize) && t.width(this.currentItem.width()), (t[0].style.height == "" || n.forceHelperSize) && t.height(this.currentItem.height()), t
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                    top: 0,
                    left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0];
                t = e(t.containment).offset();
                var r = e(n).css("overflow") != "hidden";
                this.containment = [t.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position), t = t == "absolute" ? 1 : -1;
            var r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()) * t),
                left: n.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft()) * t)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            return this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + n.grid[1] : o - n.grid[1] : o : o, s = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? s - this.offset.click.left < this.containment[0] || s - this.offset.click.left > this.containment[2] ? s - this.offset.click.left < this.containment[0] ? s + n.grid[0] : s - n.grid[0] : s : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this,
                s = this.counter;
            window.setTimeout(function () {
                s == i.counter && i.refreshPositions(!r)
            }, 0)
        },
        _clear: function (t, n) {
            this.reverting = !1;
            var r = [];
            !this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var i in this._storedCSS) if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function (e) {
                this._trigger("update", e, this._uiHash())
            });
            if (!e.ui.contains(this.element[0], this.currentItem[0])) {
                n || r.push(function (e) {
                    this._trigger("remove", e, this._uiHash())
                });
                for (i = this.containers.length - 1; i >= 0; i--) e.ui.contains(this.containers[i].element[0], this.currentItem[0]) && !n && (r.push(function (e) {
                        return function (t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[i])), r.push(function (e) {
                        return function (t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[i])))
            }
            for (i = this.containers.length - 1; i >= 0; i--) n || r.push(function (e) {
                    return function (t) {
                        e._trigger("deactivate", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function (e) {
                    return function (t) {
                        e._trigger("out", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (i = 0; i < r.length; i++) r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (i = 0; i < r.length; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.extend(e.ui.sortable, {
        version: "1.8.6"
    })
}(jQuery),
function (e) {
    e.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function () {
            var t = this,
                n = t.options;
            t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
                n.disabled || e(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function () {
                n.disabled || e(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function () {
                n.disabled || e(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                n.disabled || e(this).removeClass("ui-state-focus")
            }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (n.navigation) {
                var r = t.element.find("a").filter(n.navigationFilter).eq(0);
                if (r.length) {
                    var i = r.closest(".ui-accordion-header");
                    t.active = i.length ? i : r.closest(".ui-accordion-content").prev()
                }
            }
            t.active = t._findActive(t.active || n.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function (e) {
                return t._keydown(e)
            }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                tabIndex: -1
            }).next().hide(), t.active.length ? t.active.attr({
                "aria-expanded": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), n.event && t.headers.bind(n.event.split(" ").join(".accordion ") + ".accordion", function (e) {
                t._clickHandler.call(t, e, this), e.preventDefault()
            })
        },
        _createIcons: function () {
            var t = this.options;
            t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function () {
            var t = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var n = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (t.autoHeight || t.fillHeight) && n.css("height", ""), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t == "active" && this.activate(n), t == "icons" && (this._destroyIcons(), n && this._createIcons()), t == "disabled" && this.headers.add(this.headers.next())[n ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function (t) {
            if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
                var n = e.ui.keyCode,
                    r = this.headers.length,
                    i = this.headers.index(t.target),
                    s = !1;
                switch (t.keyCode) {
                    case n.RIGHT:
                    case n.DOWN:
                        s = this.headers[(i + 1) % r];
                        break;
                    case n.LEFT:
                    case n.UP:
                        s = this.headers[(i - 1 + r) % r];
                        break;
                    case n.SPACE:
                    case n.ENTER:
                        this._clickHandler({
                            target: t.target
                        }, t.target), t.preventDefault()
                }
                return s ? (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), !1) : !0
            }
        },
        resize: function () {
            var t = this.options,
                n;
            if (t.fillSpace) {
                if (e.browser.msie) {
                    var r = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                n = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", r), this.headers.each(function () {
                    n -= e(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")
            } else t.autoHeight && (n = 0, this.headers.next().each(function () {
                    n = Math.max(n, e(this).height("").height())
                }).height(n));
            return this
        },
        activate: function (e) {
            return this.options.active = e, e = this._findActive(e)[0], this._clickHandler({
                target: e
            }, e), this
        },
        _findActive: function (t) {
            return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function (t, n) {
            var r = this.options;
            if (!r.disabled) if (t.target) t = e(t.currentTarget || n), n = t[0] === this.active[0], r.active = r.collapsible && n ? !1 : this.headers.index(t), this.running || !r.collapsible && n || (this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), n || (t.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected), t.next().addClass("ui-accordion-content-active")), o = t.next(), i = this.active.next(), s = {
                        options: r,
                        newHeader: n && r.collapsible ? e([]) : t,
                        oldHeader: this.active,
                        newContent: n && r.collapsible ? e([]) : o,
                        oldContent: i
                    }, r = this.headers.index(this.active[0]) > this.headers.index(t[0]), this.active = n ? e([]) : t, this._toggle(o, i, s, n, r));
                else if (r.collapsible) {
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), this.active.next().addClass("ui-accordion-content-active");
                var i = this.active.next(),
                    s = {
                        options: r,
                        newHeader: e([]),
                        oldHeader: r.active,
                        newContent: e([]),
                        oldContent: i
                    }, o = this.active = e([]);
                this._toggle(o, i, s)
            }
        },
        _toggle: function (t, n, r, i, s) {
            var o = this,
                u = o.options;
            o.toShow = t, o.toHide = n, o.data = r;
            var a = function () {
                if (o) return o._completed.apply(o, arguments)
            };
            o._trigger("changestart", null, o.data), o.running = n.size() === 0 ? t.size() : n.size();
            if (u.animated) {
                r = {}, r = u.collapsible && i ? {
                    toShow: e([]),
                    toHide: n,
                    complete: a,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                } : {
                    toShow: t,
                    toHide: n,
                    complete: a,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                }, u.proxied || (u.proxied = u.animated), u.proxiedDuration || (u.proxiedDuration = u.duration), u.animated = e.isFunction(u.proxied) ? u.proxied(r) : u.proxied, u.duration = e.isFunction(u.proxiedDuration) ? u.proxiedDuration(r) : u.proxiedDuration, i = e.ui.accordion.animations;
                var f = u.duration,
                    l = u.animated;
                l && !i[l] && !e.easing[l] && (l = "slide"), i[l] || (i[l] = function (e) {
                    this.slide(e, {
                        easing: l,
                        duration: f || 700
                    })
                }), i[l](r)
            } else u.collapsible && i ? t.toggle() : (n.hide(), t.show()), a(!0);
            n.prev().attr({
                "aria-expanded": "false",
                tabIndex: -1
            }).blur(), t.prev().attr({
                "aria-expanded": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function (e) {
            this.running = e ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this._trigger("change", null, this.data))
        }
    }), e.extend(e.ui.accordion, {
        version: "1.8.6",
        animations: {
            slide: function (t, n) {
                t = e.extend({
                    easing: "swing",
                    duration: 300
                }, t, n);
                if (t.toHide.size()) if (t.toShow.size()) {
                        var r = t.toShow.css("overflow"),
                            i = 0,
                            s = {}, o = {}, u;
                        n = t.toShow, u = n[0].style.width, n.width(parseInt(n.parent().width(), 10) - parseInt(n.css("paddingLeft"), 10) - parseInt(n.css("paddingRight"), 10) - (parseInt(n.css("borderLeftWidth"), 10) || 0) - (parseInt(n.css("borderRightWidth"), 10) || 0)), e.each(["height", "paddingTop", "paddingBottom"], function (n, r) {
                            o[r] = "hide", n = ("" + e.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/), s[r] = {
                                value: n[1],
                                unit: n[2] || "px"
                            }
                        }), t.toShow.css({
                            height: 0,
                            overflow: "hidden"
                        }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(o, {
                            step: function (e, n) {
                                n.prop == "height" && (i = n.end - n.start === 0 ? 0 : (n.now - n.start) / (n.end - n.start)), t.toShow[0].style[n.prop] = i * s[n.prop].value + s[n.prop].unit
                            },
                            duration: t.duration,
                            easing: t.easing,
                            complete: function () {
                                t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
                                    width: u,
                                    overflow: r
                                }), t.complete()
                            }
                        })
                    } else t.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, t);
                    else t.toShow.animate({
                            height: "show",
                            paddingTop: "show",
                            paddingBottom: "show"
                        }, t)
            },
            bounceslide: function (e) {
                this.slide(e, {
                    easing: e.down ? "easeOutBounce" : "swing",
                    duration: e.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        _create: function () {
            var t = this,
                n = this.element[0].ownerDocument,
                r;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (n) {
                if (!t.options.disabled && !t.element.attr("readonly")) {
                    r = !1;
                    var i = e.ui.keyCode;
                    switch (n.keyCode) {
                        case i.PAGE_UP:
                            t._move("previousPage", n);
                            break;
                        case i.PAGE_DOWN:
                            t._move("nextPage", n);
                            break;
                        case i.UP:
                            t._move("previous", n), n.preventDefault();
                            break;
                        case i.DOWN:
                            t._move("next", n), n.preventDefault();
                            break;
                        case i.ENTER:
                        case i.NUMPAD_ENTER:
                            t.menu.active && (r = !0, n.preventDefault());
                        case i.TAB:
                            if (!t.menu.active) return;
                            t.menu.select(n);
                            break;
                        case i.ESCAPE:
                            t.element.val(t.term), t.close(n);
                            break;
                        default:
                            clearTimeout(t.searching), t.searching = setTimeout(function () {
                                t.term != t.element.val() && (t.selectedItem = null, t.search(null, n))
                            }, t.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function (e) {
                r && (r = !1, e.preventDefault())
            }).bind("focus.autocomplete", function () {
                t.options.disabled || (t.selectedItem = null, t.previous = t.element.val())
            }).bind("blur.autocomplete", function (e) {
                t.options.disabled || (clearTimeout(t.searching), t.closing = setTimeout(function () {
                    t.close(e), t._change(e)
                }, 150))
            }), this._initSource(), this.response = function () {
                return t._response.apply(t, arguments)
            }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function (n) {
                var r = t.menu.element[0];
                e(n.target).closest(".ui-menu-item").length || setTimeout(function () {
                    e(document).one("mousedown", function (n) {
                        n.target !== t.element[0] && n.target !== r && !e.ui.contains(r, n.target) && t.close()
                    })
                }, 1), setTimeout(function () {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function (e, n) {
                    n = n.item.data("item.autocomplete"), !1 !== t._trigger("focus", e, {
                        item: n
                    }) && /^key/.test(e.originalEvent.type) && t.element.val(n.value)
                },
                selected: function (e, r) {
                    r = r.item.data("item.autocomplete");
                    var i = t.previous;
                    t.element[0] !== n.activeElement && (t.element.focus(), t.previous = i, setTimeout(function () {
                        t.previous = i
                    }, 1)), !1 !== t._trigger("select", e, {
                        item: r
                    }) && t.element.val(r.value), t.term = t.element.val(), t.close(e), t.selectedItem = r
                },
                blur: function () {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "source" && this._initSource(), t === "appendTo" && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0])
        },
        _initSource: function () {
            var t = this,
                n, r;
            e.isArray(this.options.source) ? (n = this.options.source, this.source = function (t, r) {
                r(e.ui.autocomplete.filter(n, t.term))
            }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function (n, i) {
                t.xhr && t.xhr.abort(), t.xhr = e.getJSON(r, n, function (e, n, r) {
                    r === t.xhr && i(e), t.xhr = null
                })
            }) : this.source = this.options.source
        },
        search: function (e, t) {
            e = e != null ? e : this.element.val(), this.term = this.element.val();
            if (e.length < this.options.minLength) return this.close(t);
            clearTimeout(this.closing);
            if (this._trigger("search", t) !== !1) return this._search(e)
        },
        _search: function (e) {
            this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this.response)
        },
        _response: function (e) {
            e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close(), this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this._trigger("close", e), this.menu.element.hide(), this.menu.deactivate())
        },
        _change: function (e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            this._renderMenu(this.menu.element.empty().zIndex(this.element.zIndex() + 1), t), this.menu.deactivate(), this.menu.refresh(), this.menu.element.show().position(e.extend({
                of: this.element
            }, this.options.position)), this._resizeMenu()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function (t, n) {
            var r = this;
            e.each(n, function (e, n) {
                r._renderItem(t, n)
            })
        },
        _renderItem: function (t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function (e, t) {
            this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate()) : this.menu[e](t) : this.search(null, t)
        },
        widget: function () {
            return this.menu.element
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function (e) {
                return r.test(e.label || e.value || e)
            })
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.menu", {
        _create: function () {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (n) {
                e(n.target).closest(".ui-menu-item a").length && (n.preventDefault(), t.select(n))
            }), this.refresh()
        },
        refresh: function () {
            var t = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function () {
                t.deactivate()
            })
        },
        activate: function (e, t) {
            this.deactivate();
            if (this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top,
                    r = this.element.attr("scrollTop"),
                    i = this.element.height();
                n < 0 ? this.element.attr("scrollTop", r + n) : n >= i && this.element.attr("scrollTop", r + n - i + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function () {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function (e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, t, n) {
            this.active ? (e = this.active[e + "All"](".ui-menu-item").eq(0), e.length ? this.activate(n, e) : this.activate(n, this.element.children(t))) : this.activate(n, this.element.children(t))
        },
        nextPage: function (t) {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(t, this.element.children(".ui-menu-item:first"));
                else {
                    var n = this.active.offset().top,
                        r = this.element.height(),
                        i = this.element.children(".ui-menu-item").filter(function () {
                            var t = e(this).offset().top - n - r + e(this).height();
                            return t < 10 && t > -10
                        });
                    i.length || (i = this.element.children(".ui-menu-item:last")), this.activate(t, i)
                } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (t) {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(t, this.element.children(".ui-menu-item:last"));
                else {
                    var n = this.active.offset().top,
                        r = this.element.height();
                    result = this.element.children(".ui-menu-item").filter(function () {
                        var t = e(this).offset().top - n + r - e(this).height();
                        return t < 10 && t > -10
                    }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(t, result)
                } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element.attr("scrollHeight")
        },
        select: function (e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery),
function (e) {
    var t, n = function (t) {
            e(":ui-button", t.target.form).each(function () {
                var t = e(this).data("button");
                setTimeout(function () {
                    t.refresh()
                }, 1)
            })
        }, r = function (t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (i = r ? e(r).find("[name='" + n + "']") : e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset.button").bind("reset.button", n), typeof this.options.disabled != "boolean" && (this.options.disabled = this.element.attr("disabled")), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var s = this,
                o = this.options,
                u = this.type === "checkbox" || this.type === "radio",
                f = "ui-state-hover" + (u ? "" : " ui-state-active");
            o.label === null && (o.label = this.buttonElement.html()), this.element.is(":disabled") && (o.disabled = !0), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function () {
                o.disabled || (e(this).addClass("ui-state-hover"), this === t && e(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function () {
                o.disabled || e(this).removeClass(f)
            }).bind("focus.button", function () {
                e(this).addClass("ui-state-focus")
            }).bind("blur.button", function () {
                e(this).removeClass("ui-state-focus")
            }), u && this.element.bind("change.button", function () {
                s.refresh()
            }), this.type === "checkbox" ? this.buttonElement.bind("click.button", function () {
                if (o.disabled) return !1;
                e(this).toggleClass("ui-state-active"), s.buttonElement.attr("aria-pressed", s.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function () {
                if (o.disabled) return !1;
                e(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", !0);
                var t = s.element[0];
                r(t).not(t).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", !1)
            }) : (this.buttonElement.bind("mousedown.button", function () {
                if (o.disabled) return !1;
                e(this).addClass("ui-state-active"), t = this, e(document).one("mouseup", function () {
                    t = null
                })
            }).bind("mouseup.button", function () {
                if (o.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown.button", function (t) {
                if (o.disabled) return !1;
                (t.keyCode == e.ui.keyCode.SPACE || t.keyCode == e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup.button", function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", o.disabled)
        },
        _determineButtonType: function () {
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            if (this.type === "checkbox" || this.type === "radio") {
                this.buttonElement = this.element.parents().last().find("label[for=" + this.element.attr("id") + "]"), this.element.addClass("ui-helper-hidden-accessible");
                var e = this.element.is(":checked");
                e && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", e)
            } else this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "disabled" && (n ? this.element.attr("disabled", !0) : this.element.removeAttr("disabled")), this._resetButton()
        },
        refresh: function () {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? r(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", !0) : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", !1)
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", !0) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", !1))
        },
        _resetButton: function () {
            if (this.type === "input") this.options.label && this.element.val(this.options.label);
            else {
                var t = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    n = e("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    r = this.options.icons,
                    i = r.primary && r.secondary;
                r.primary || r.secondary ? (t.addClass("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (t.addClass(i ? "ui-button-icons-only" : "ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary"), this.hasTitle || t.attr("title", n))) : t.addClass("ui-button-text-only")
            }
        }
    }), e.widget("ui.buttonset", {
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, n) {
            t === "disabled" && this.buttons.button("option", t, n), e.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function () {
            this.buttons = this.element.find(":button, :submit, :reset, :checkbox, :radio, a, :data(button)").filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":visible").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end().end()
        },
        destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function (e, t) {
    var n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, r = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var t = this,
                n = t.options,
                r = n.title || "&#160;",
                i = e.ui.dialog.getTitleId(t.element),
                s = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + n.dialogClass).css({
                    zIndex: n.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (r) {
                    n.closeOnEscape && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": i
                }).mousedown(function (e) {
                    t.moveToTop(!1, e)
                });
            t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s);
            var o = (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s),
                u = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                    u.addClass("ui-state-hover")
                }, function () {
                    u.removeClass("ui-state-hover")
                }).focus(function () {
                    u.addClass("ui-state-focus")
                }).blur(function () {
                    u.removeClass("ui-state-focus")
                }).click(function (e) {
                    return t.close(e), !1
                }).appendTo(o);
            (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(n.closeText).appendTo(u), e("<span></span>").addClass("ui-dialog-title").attr("id", i).html(r).prependTo(o), e.isFunction(n.beforeclose) && !e.isFunction(n.beforeClose) && (n.beforeClose = n.beforeclose), o.find("*").add(o).disableSelection(), n.draggable && e.fn.draggable && t._makeDraggable(), n.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(n.buttons), t._isOpen = !1, e.fn.bgiframe && s.bgiframe()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        destroy: function () {
            var e = this;
            return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (t) {
            var n = this,
                r;
            if (!1 !== n._trigger("beforeClose", t)) return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function () {
                    n._trigger("close", t)
                }) : (n.uiDialog.hide(), n._trigger("close", t)), e.ui.dialog.overlay.resize(), n.options.modal && (r = 0, e(".ui-dialog").each(function () {
                    this !== n.uiDialog[0] && (r = Math.max(r, e(this).css("z-index")))
                }), e.ui.dialog.maxZ = r), n
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (t, n) {
            var r = this,
                i = r.options;
            return i.modal && !t || !i.stack && !i.modal ? r._trigger("focus", n) : (i.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = i.zIndex), r.overlay && (e.ui.dialog.maxZ += 1, r.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), t = {
                scrollTop: r.element.attr("scrollTop"),
                scrollLeft: r.element.attr("scrollLeft")
            }, e.ui.dialog.maxZ += 1, r.uiDialog.css("z-index", e.ui.dialog.maxZ), r.element.attr(t), r._trigger("focus", n), r)
        },
        open: function () {
            if (!this._isOpen) {
                var t = this,
                    n = t.options,
                    r = t.uiDialog;
                return t.overlay = n.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(n.position), r.show(n.show), t.moveToTop(!0), n.modal && r.bind("keypress.ui-dialog", function (t) {
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var n = e(":tabbable", this),
                            r = n.filter(":first");
                        n = n.filter(":last");
                        if (t.target === n[0] && !t.shiftKey) return r.focus(1), !1;
                        if (t.target === r[0] && t.shiftKey) return n.focus(1), !1
                    }
                }), e(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
            }
        },
        _createButtons: function (t) {
            var n = this,
                r = !1,
                i = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                s = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(i);
            n.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof t == "object" && t !== null && e.each(t, function () {
                return !(r = !0)
            }), r && (e.each(t, function (t, r) {
                r = e.isFunction(r) ? {
                    click: r,
                    text: t
                } : r, t = e('<button type="button"></button>').attr(r, !0).unbind("click").click(function () {
                    r.click.apply(n.element[0], arguments)
                }).appendTo(s), e.fn.button && t.button()
            }), i.appendTo(n.uiDialog))
        },
        _makeDraggable: function () {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                r = n.options,
                i = e(document),
                s;
            n.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (i, o) {
                    s = r.height === "auto" ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), n._trigger("dragStart", i, t(o))
                },
                drag: function (e, r) {
                    n._trigger("drag", e, t(r))
                },
                stop: function (o, u) {
                    r.position = [u.position.left - i.scrollLeft(), u.position.top - i.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(s), n._trigger("dragStop", o, t(u)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (n) {
            function r(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var i = this,
                s = i.options,
                o = i.uiDialog.css("position");
            n = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw", i.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: i.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: i._minHeight(),
                handles: n,
                start: function (t, n) {
                    e(this).addClass("ui-dialog-resizing"), i._trigger("resizeStart", t, r(n))
                },
                resize: function (e, t) {
                    i._trigger("resize", e, r(t))
                },
                stop: function (t, n) {
                    e(this).removeClass("ui-dialog-resizing"), s.height = e(this).height(), s.width = e(this).width(), i._trigger("resizeStop", t, r(n)), e.ui.dialog.overlay.resize()
                }
            }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function (t) {
            var n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                        +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                    }), t = {
                        my: n.join(" "),
                        at: n.join(" "),
                        offset: r.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(t), i || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this,
                s = {}, o = !1;
            e.each(t, function (e, t) {
                i._setOption(e, t), e in n && (o = !0), e in r && (s[e] = t)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (t, n) {
            var r = this,
                i = r.uiDialog;
            switch (t) {
                case "beforeclose":
                    t = "beforeClose";
                    break;
                case "buttons":
                    r._createButtons(n);
                    break;
                case "closeText":
                    r.uiDialogTitlebarCloseText.text("" + n);
                    break;
                case "dialogClass":
                    i.removeClass(r.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + n);
                    break;
                case "disabled":
                    n ? i.addClass("ui-dialog-disabled") : i.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    var s = i.is(":data(draggable)");
                    s && !n && i.draggable("destroy"), !s && n && r._makeDraggable();
                    break;
                case "position":
                    r._position(n);
                    break;
                case "resizable":
                    (s = i.is(":data(resizable)")) && !n && i.resizable("destroy"), s && typeof n == "string" && i.resizable("option", "handles", n), !s && n !== !1 && r._makeResizable(n);
                    break;
                case "title":
                    e(".ui-dialog-title", r.uiDialogTitlebar).html("" + (n || "&#160;"))
            }
            e.Widget.prototype._setOption.apply(r, arguments)
        },
        _size: function () {
            var t = this.options,
                n, r;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), t.minWidth > t.width && (t.width = t.minWidth), n = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).height(), r = Math.max(0, t.minHeight - n), t.height === "auto" ? e.support.minHeight ? this.element.css({
                minHeight: r,
                height: "auto"
            }) : (this.uiDialog.show(), t = this.element.css("height", "auto").height(), this.uiDialog.hide(), this.element.height(Math.max(t, r))) : this.element.height(Math.max(t.height - n, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        version: "1.8.6",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
            return e = e.attr("id"), e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
        },
        overlay: function (t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function (t) {
            this.instances.length === 0 && (setTimeout(function () {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), e(document).bind("keydown.dialog-overlay", function (n) {
                t.options.closeOnEscape && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
            }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
        },
        destroy: function (t) {
            this.oldInstances.push(this.instances.splice(e.inArray(t, this.instances), 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.remove();
            var n = 0;
            e.each(this.instances, function () {
                n = Math.max(n, this.css("z-index"))
            }), this.maxZ = n
        },
        height: function () {
            var t, n;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function () {
            var t, n;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function () {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function () {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.slider", e.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var t = this,
                n = this.options;
            this._mouseSliding = this._keySliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), n.disabled && this.element.addClass("ui-slider-disabled ui-disabled"), this.range = e([]), n.range && (n.range === !0 ? (this.range = e("<div></div>"), n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && n.values.length !== 2 && (n.values = [n.values[0], n.values[0]])) : this.range = e("<div></div>"), this.range.appendTo(this.element).addClass("ui-slider-range"), (n.range === "min" || n.range === "max") && this.range.addClass("ui-slider-range-" + n.range), this.range.addClass("ui-widget-header")), e(".ui-slider-handle", this.element).length === 0 && e("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            if (n.values && n.values.length) for (; e(".ui-slider-handle", this.element).length < n.values.length;) e("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            this.handles = e(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all"), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).hover(function () {
                n.disabled || e(this).addClass("ui-state-hover")
            }, function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                n.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("index.ui-slider-handle", t)
            }), this.handles.keydown(function (n) {
                var r = !0,
                    i = e(this).data("index.ui-slider-handle"),
                    s, o, u;
                if (!t.options.disabled) {
                    switch (n.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            r = !1;
                            if (!t._keySliding) {
                                t._keySliding = !0, e(this).addClass("ui-state-active"), s = t._start(n, i);
                                if (s === !1) return
                            }
                    }
                    u = t.options.step, s = t.options.values && t.options.values.length ? o = t.values(i) : o = t.value();
                    switch (n.keyCode) {
                        case e.ui.keyCode.HOME:
                            o = t._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            o = t._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            o = t._trimAlignValue(s + (t._valueMax() - t._valueMin()) / 5);
                            break;
                        case e.ui.keyCode
                            .PAGE_DOWN:
                            o = t._trimAlignValue(s - (t._valueMax() - t._valueMin()) / 5);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === t._valueMax()) return;
                            o = t._trimAlignValue(s + u);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === t._valueMin()) return;
                            o = t._trimAlignValue(s - u)
                    }
                    return t._slide(n, i, o), r
                }
            }).keyup(function (n) {
                var r = e(this).data("index.ui-slider-handle");
                t._keySliding && (t._keySliding = !1, t._stop(n, r), t._change(n, r), e(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function () {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n = this.options,
                r, i, s, o, u;
            return n.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), r = this._normValueFromMouse({
                x: t.pageX,
                y: t.pageY
            }), i = this._valueMax() - this._valueMin() + 1, o = this, this.handles.each(function (t) {
                var n = Math.abs(r - o.values(t));
                i > n && (i = n, s = e(this), u = t)
            }), n.range === !0 && this.values(1) === n.min && (u += 1, s = e(this.handles[u])), this._start(t, u) === !1 ? !1 : (this._mouseSliding = !0, o._handleIndex = u, s.addClass("ui-state-active").focus(), n = s.offset(), this._clickOffset = e(t.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: t.pageX - n.left - s.width() / 2,
                top: t.pageY - n.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            }, this._slide(t, u, r), this._animateOff = !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = this._normValueFromMouse({
                x: e.pageX,
                y: e.pageY
            });
            return this._slide(e, this._handleIndex, t), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._clickOffset = this._handleIndex = null, this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, e = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, e = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = e / t, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), e = this._valueMax() - this._valueMin(), this._trimAlignValue(this._valueMin() + t * e)
        },
        _start: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var r;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (r = this.values(), r[t] = n, e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: r
            }), this.values(t ? 0 : 1), e !== !1 && this.values(t, n, !0))) : n !== this.value() && (e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), e !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function (e) {
            return arguments.length && (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0)), this._value()
        },
        values: function (t, n) {
            var r, i, s;
            arguments.length > 1 && (this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t));
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function (t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "disabled":
                    n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (r = 0; r < i; r += 1) this._change(null, r);
                    this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, n;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            t = this.options.values.slice();
            for (n = 0; n < t.length; n += 1) t[n] = this._trimAlignValue(t[n]);
            return t
        },
        _trimAlignValue: function (e) {
            if (e < this._valueMin()) return this._valueMin();
            if (e > this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = e % t;
            return e -= n, Math.abs(n) * 2 >= t && (e += n > 0 ? t : -t), parseFloat(e.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t = this.options.range,
                n = this.options,
                r = this,
                i = this._animateOff ? !1 : n.animate,
                s, o = {}, u, a, f, l;
            this.options.values && this.options.values.length ? this.handles.each(function (t) {
                s = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", e(this).stop(1, 1)[i ? "animate" : "css"](o, n.animate), r.options.range === !0 && (r.orientation === "horizontal" ? (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    left: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    width: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                })) : (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    bottom: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    height: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                }))), u = s
            }) : (a = this.value(), f = this._valueMin(), l = this._valueMax(), s = l !== f ? (a - f) / (l - f) * 100 : 0, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", this.handle.stop(1, 1)[i ? "animate" : "css"](o, n.animate), t === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                width: s + "%"
            }, n.animate), t === "max" && this.orientation === "horizontal" && this.range[i ? "animate" : "css"]({
                width: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }), t === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                height: s + "%"
            }, n.animate), t === "max" && this.orientation === "vertical" && this.range[i ? "animate" : "css"]({
                height: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }))
        }
    }), e.extend(e.ui.slider, {
        version: "1.8.6"
    })
}(jQuery),
function (e, n) {
    function r() {
        return ++s
    }
    function i() {
        return ++o
    }
    var s = 0,
        o = 0;
    e.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function () {
            this._tabify(!0)
        },
        _setOption: function (e, t) {
            e == "selected" ? this.options.collapsible && t == this.options.selected || this.select(t) : (this.options[e] = t, this._tabify())
        },
        _tabId: function (e) {
            return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + r()
        },
        _sanitizeSelector: function (e) {
            return e.replace(/:/g, "\\:")
        },
        _cookie: function () {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + i());
            return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
        },
        _ui: function (e, t) {
            return {
                tab: e,
                panel: t,
                index: this.anchors.index(e)
            }
        },
        _cleanup: function () {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
                var t = e(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (t) {
            function r(t, n) {
                t.css("display", ""), !e.support.opacity && n.opacity && t[0].style.removeAttribute("filter")
            }
            var i = this,
                s = this.options,
                o = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
                return e("a", this)[0]
            }), this.panels = e([]), this.anchors.each(function (t, n) {
                var r = e(n).attr("href"),
                    u = r.split("#")[0],
                    a;
                u && (u === location.toString().split("#")[0] || (a = e("base")[0]) && u === a.href) && (r = n.hash, n.href = r), o.test(r) ? i.panels = i.panels.add(i._sanitizeSelector(r)) : r && r !== "#" ? (e.data(n, "href.tabs", r), e.data(n, "load.tabs", r.replace(/#.*$/, "")), r = i._tabId(n), n.href = "#" + r, n = e("#" + r), n.length || (n = e(s.panelTemplate).attr("id", r).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[t - 1] || i.list), n.data("destroy.tabs", !0)), i.panels = i.panels.add(n)) : s.disabled.push(t)
            }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), s.selected === n ? (location.hash && this.anchors.each(function (e, t) {
                if (t.hash == location.hash) return s.selected = e, !1
            }), typeof s.selected != "number" && s.cookie && (s.selected = parseInt(i._cookie(), 10)), typeof s.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), s.selected = s.selected || (this.lis.length ? 0 : -1)) : s.selected === null && (s.selected = -1), s.selected = s.selected >= 0 && this.anchors[s.selected] || s.selected < 0 ? s.selected : 0, s.disabled = e.unique(s.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function (e) {
                return i.lis.index(e)
            }))).sort(), e.inArray(s.selected, s.disabled) != -1 && s.disabled.splice(e.inArray(s.selected, s.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), s.selected >= 0 && this.anchors.length && (e(i._sanitizeSelector(i.anchors[s.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(s.selected).addClass("ui-tabs-selected ui-state-active"), i.element.queue("tabs", function () {
                i._trigger("show", null, i._ui(i.anchors[s.selected], e(i._sanitizeSelector(i.anchors[s.selected].hash))))
            }), this.load(s.selected)), e(window).bind("unload", function () {
                i.lis.add(i.anchors).unbind(".tabs"), i.lis = i.anchors = i.panels = null
            })) : s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[s.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), s.cookie && this._cookie(s.selected, s.cookie), t = 0;
            for (var u; u = this.lis[t]; t++) e(u)[e.inArray(t, s.disabled) != -1 && !e(u).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            s.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
            if (s.event !== "mouseover") {
                var a = function (e, t) {
                    t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
                }, f = function (e, t) {
                        t.removeClass("ui-state-" + e)
                    };
                this.lis.bind("mouseover.tabs", function () {
                    a("hover", e(this))
                }), this.lis.bind("mouseout.tabs", function () {
                    f("hover", e(this))
                }), this.anchors.bind("focus.tabs", function () {
                    a("focus", e(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function () {
                    f("focus", e(this).closest("li"))
                })
            }
            var l, c;
            s.fx && (e.isArray(s.fx) ? (l = s.fx[0], c = s.fx[1]) : l = c = s.fx);
            var h = c ? function (t, n) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.hide().removeClass("ui-tabs-hide").animate(c, c.duration || "normal", function () {
                        r(n, c), i._trigger("show", null, i._ui(t, n[0]))
                    })
                } : function (t, n) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.removeClass("ui-tabs-hide"), i._trigger("show", null, i._ui(t, n[0]))
                }, v = l ? function (e, t) {
                    t.animate(l, l.duration || "normal", function () {
                        i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), r(t, l), i.element.dequeue("tabs")
                    })
                } : function (e, t) {
                    i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), i.element.dequeue("tabs")
                };
            this.anchors.bind(s.event + ".tabs", function () {
                var t = this,
                    n = e(t).closest("li"),
                    r = i.panels.filter(":not(.ui-tabs-hide)"),
                    o = e(i._sanitizeSelector(t.hash));
                if (n.hasClass("ui-tabs-selected") && !s.collapsible || n.hasClass("ui-state-disabled") || n.hasClass("ui-state-processing") || i.panels.filter(":animated").length || i._trigger("select", null, i._ui(this, o[0])) === !1) return this.blur(), !1;
                s.selected = i.anchors.index(this), i.abort();
                if (s.collapsible) {
                    if (n.hasClass("ui-tabs-selected")) return s.selected = -1, s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function () {
                            v(t, r)
                        }).dequeue("tabs"), this.blur(), !1;
                    if (!r.length) return s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function () {
                            h(t, o)
                        }), i.load(i.anchors.index(this)), this.blur(), !1
                }
                s.cookie && i._cookie(s.selected, s.cookie);
                if (!o.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                r.length && i.element.queue("tabs", function () {
                    v(t, r)
                }), i.element.queue("tabs", function () {
                    h(t, o)
                }), i.load(i.anchors.index(this)), e.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function () {
                return !1
            })
        },
        _getIndex: function (e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))), e
        },
        destroy: function () {
            var t = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
                var t = e.data(this, "href.tabs");
                t && (this.href = t);
                var n = e(this).unbind(".tabs");
                e.each(["href", "load", "cache"], function (e, t) {
                    n.removeData(t + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function () {
                e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            }), t.cookie && this._cookie(null, t.cookie), this
        },
        add: function (t, r, i) {
            i === n && (i = this.anchors.length);
            var s = this,
                o = this.options;
            r = e(o.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, r)), t = t.indexOf("#") ? this._tabId(e("a", r)[0]) : t.replace("#", ""), r.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var u = e("#" + t);
            return u.length || (u = e(o.panelTemplate).attr("id", t).data("destroy.tabs", !0)), u.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= this.lis.length ? (r.appendTo(this.list), u.appendTo(this.list[0].parentNode)) : (r.insertBefore(this.lis[i]), u.insertBefore(this.panels[i])), o.disabled = e.map(o.disabled, function (e) {
                return e >= i ? ++e : e
            }), this._tabify(), this.anchors.length == 1 && (o.selected = 0, r.addClass("ui-tabs-selected ui-state-active"), u.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
                s._trigger("show", null, s._ui(s.anchors[0], s.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var n = this.options,
                r = this.lis.eq(t).remove(),
                i = this.panels.eq(t).remove();
            return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function (e) {
                return e != t
            }), function (e) {
                return e >= t ? --e : e
            }), this._tabify(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
        },
        enable: function (t) {
            t = this._getIndex(t);
            var n = this.options;
            if (e.inArray(t, n.disabled) != -1) return this.lis.eq(t).removeClass("ui-state-disabled"), n.disabled = e.grep(n.disabled, function (e) {
                    return e != t
                }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
        },
        disable: function (e) {
            e = this._getIndex(e);
            var t = this.options;
            return e != t.selected && (this.lis.eq(e).addClass("ui-state-disabled"), t.disabled.push(e), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
        },
        select: function (e) {
            e = this._getIndex(e);
            if (e == -1) {
                if (!this.options.collapsible || this.options.selected == -1) return this;
                e = this.options.selected
            }
            return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
        },
        load: function (t) {
            t = this._getIndex(t);
            var n = this,
                r = this.options,
                i = this.anchors.eq(t)[0],
                s = e.data(i, "load.tabs");
            this.abort();
            if (!(!s || this.element.queue("tabs").length !== 0 && e.data(i, "cache.tabs"))) {
                this.lis.eq(t).addClass("ui-state-processing");
                if (r.spinner) {
                    var o = e("span", i);
                    o.data("label.tabs", o.html()).html(r.spinner)
                }
                return this.xhr = e.ajax(e.extend({}, r.ajaxOptions, {
                    url: s,
                    success: function (s, o) {
                        e(n._sanitizeSelector(i.hash)).html(s), n._cleanup(), r.cache && e.data(i, "cache.tabs", !0), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                        try {
                            r.ajaxOptions.success(s, o)
                        } catch (u) {}
                    },
                    error: function (e, s) {
                        n._cleanup(), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                        try {
                            r.ajaxOptions.error(e, s, t, i)
                        } catch (o) {}
                    }
                })), n.element.dequeue("tabs"), this
            }
            this.element.dequeue("tabs")
        },
        abort: function () {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function (e, t) {
            return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
        },
        length: function () {
            return this.anchors.length
        }
    }), e.extend(e.ui.tabs, {
        version: "1.8.6"
    }), e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, n) {
            var r = this,
                i = this.options,
                s = r._rotate || (r._rotate = function (t) {
                    clearTimeout(r.rotation), r.rotation = setTimeout(function () {
                        var e = i.selected;
                        r.select(++e < r.anchors.length ? e : 0)
                    }, e), t && t.stopPropagation()
                });
            return n = r._unrotate || (r._unrotate = n ? function () {
                t = i.selected, s()
            } : function (e) {
                e.clientX && r.rotate(null)
            }), e ? (this.element.bind("tabsshow", s), this.anchors.bind(i.event + ".tabs", n), s()) : (clearTimeout(r.rotation), this.element.unbind("tabsshow", s), this.anchors.unbind(i.event + ".tabs", n), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery),
function (d, G) {
    function K() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._inDialog = this._datepickerShowing = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1
        }, d.extend(this._defaults, this.regional[""]), this.dpDiv = d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')
    }
    function E(e, t) {
        d.extend(e, t);
        for (var n in t) if (t[n] == null || t[n] == G) e[n] = t[n];
        return e
    }
    d.extend(d.ui, {
        datepicker: {
            version: "1.8.6"
        }
    });
    var y = (new Date).getTime();
    d.extend(K.prototype, {
        markerClassName: "hasDatepicker",
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return E(this._defaults, e || {}), this
        },
        _attachDatepicker: function (a, b) {
            var c = null;
            for (var e in this._defaults) {
                var f = a.getAttribute("date:" + e);
                if (f) {
                    c = c || {};
                    try {
                        c[e] = eval(f)
                    } catch (h) {
                        c[e] = f
                    }
                }
            }
            e = a.nodeName.toLowerCase(), f = e == "div" || e == "span", a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            var i = this._newInst(d(a), f);
            i.settings = d.extend({}, b || {}, c || {}), e == "input" ? this._connectDatepicker(a, i) : f && this._inlineDatepicker(a, i)
        },
        _newInst: function (e, t) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>') : this.dpDiv
            }
        },
        _connectDatepicker: function (e, t) {
            var n = d(e);
            t.append = d([]), t.trigger = d([]), n.hasClass(this.markerClassName) || (this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), this._autoSize(t), d.data(e, "datepicker", t))
        },
        _attachments: function (e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = d('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove(), n = this._get(t, "showOn"), (n == "focus" || n == "both") && e.focus(this._showDatepicker);
            if (n == "button" || n == "both") {
                n = this._get(t, "buttonText");
                var i = this._get(t, "buttonImage");
                t.trigger = d(this._get(t, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: n,
                    title: n
                }) : d('<button type="button"></button>').addClass(this._triggerClass).html(i == "" ? n : d("<img/>").attr({
                    src: i,
                    alt: n,
                    title: n
                }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function () {
                    return d.datepicker._datepickerShowing && d.datepicker._lastInput == e[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function (e) {
                        for (var t = 0, n = 0, r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                        return n
                    };
                    t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function (e, t) {
            var n = d(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), d.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t))
        },
        _dialogDatepicker: function (e, t, n, r, i) {
            return e = this._dialogInst, e || (this.uuid += 1, this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), d("body").append(this._dialogInput), e = this._dialogInst = this._newInst(this._dialogInput, !1), e.settings = {}, d.data(this._dialogInput[0], "datepicker", e)), E(e.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(e, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null, this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), e.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), d.blockUI && d.blockUI(this.dpDiv), d.data(this._dialogInput[0], "datepicker", e), this
        },
        _destroyDatepicker: function (e) {
            var t = d(e),
                n = d.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                d.removeData(e, "datepicker"), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (e) {
            var t = d(e),
                n = d.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                r == "input" ? (e.disabled = !1, n.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : (r == "div" || r == "span") && t.children("." + this._inlineClass).children().removeClass("ui-state-disabled"), this._disabledInputs = d.map(this._disabledInputs, function (t) {
                    return t == e ? null : t
                })
            }
        },
        _disableDatepicker: function (e) {
            var t = d(e),
                n = d.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                r == "input" ? (e.disabled = !0, n.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : (r == "div" || r == "span") && t.children("." + this._inlineClass).children().addClass("ui-state-disabled"), this._disabledInputs = d.map(this._disabledInputs, function (t) {
                    return t == e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e
            }
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return d.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? d.extend({}, d.datepicker._defaults) : r ? t == "all" ? d.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n);
            if (r) {
                this._curInst == r && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0);
                E(r.settings, i), this._attachments(d(e), r), this._autoSize(r), this._setDateDatepicker(e, s), this._updateDatepicker(r)
            }
        },
        _changeDatepicker: function (e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function (e) {
            (e = this._getInst(e)) && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (e, t) {
            if (e = this._getInst(e)) this._setDate(e, t), this._updateDatepicker(e), this._updateAlternate(e)
        },
        _getDateDatepicker: function (e, t) {
            return (e = this._getInst(e)) && !e.inline && this._setDateFromField(e, t), e ? this._getDate(e) : null
        },
        _doKeyDown: function (e) {
            var t = d.datepicker._getInst(e.target),
                n = !0,
                r = t.dpDiv.is(".ui-datepicker-rtl");
            t._keyEvent = !0;
            if (d.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        d.datepicker._hideDatepicker(), n = !1;
                        break;
                    case 13:
                        return n = d("td." + d.datepicker._dayOverClass, t.dpDiv).add(d("td." + d.datepicker._currentClass, t.dpDiv)), n[0] ? d.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, n[0]) : d.datepicker._hideDatepicker(), !1;
                    case 27:
                        d.datepicker._hideDatepicker();
                        break;
                    case 33:
                        d.datepicker._adjustDate(e.target, e.ctrlKey ? -d.datepicker._get(t, "stepBigMonths") : -d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 34:
                        d.datepicker._adjustDate(e.target, e.ctrlKey ? +d.datepicker._get(t, "stepBigMonths") : +d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && d.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && d.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && d.datepicker._adjustDate(e.target, e.ctrlKey ? -d.datepicker._get(t, "stepBigMonths") : -d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && d.datepicker._adjustDate(e.target, e.ctrlKey ? +d.datepicker._get(t, "stepBigMonths") : +d.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        n = !1
            } else e.keyCode == 36 && e.ctrlKey ? d.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var t = d.datepicker._getInst(e.target);
            if (d.datepicker._get(t, "constrainInput")) {
                t = d.datepicker._possibleChars(d.datepicker._get(t, "dateFormat"));
                var n = String.fromCharCode(e.charCode == G ? e.keyCode : e.charCode);
                return e.ctrlKey || n < " " || !t || t.indexOf(n) > -1
            }
        },
        _doKeyUp: function (e) {
            e = d.datepicker._getInst(e.target);
            if (e.input.val() != e.lastVal) try {
                    d.datepicker.parseDate(d.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, d.datepicker._getFormatConfig(e)) && (d.datepicker._setDateFromField(e), d.datepicker._updateAlternate(e), d.datepicker._updateDatepicker(e))
            } catch (t) {
                d.datepicker.log(t)
            }
            return !0
        },
        _showDatepicker: function (e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = d("input", e.parentNode)[0]);
            if (!d.datepicker._isDisabledDatepicker(e) && d.datepicker._lastInput != e) {
                var t = d.datepicker._getInst(e);
                d.datepicker._curInst && d.datepicker._curInst != t && d.datepicker._curInst.dpDiv.stop(!0, !0);
                var n = d.datepicker._get(t, "beforeShow");
                E(t.settings, n ? n.apply(e, [e, t]) : {}), t.lastVal = null, d.datepicker._lastInput = e, d.datepicker._setDateFromField(t), d.datepicker._inDialog && (e.value = ""), d.datepicker._pos || (d.datepicker._pos = d.datepicker._findPos(e), d.datepicker._pos[1] += e.offsetHeight);
                var r = !1;
                d(e).parents().each(function () {
                    return r |= d(this).css("position") == "fixed", !r
                }), r && d.browser.opera && (d.datepicker._pos[0] -= document.documentElement.scrollLeft, d.datepicker._pos[1] -= document.documentElement.scrollTop), n = {
                    left: d.datepicker._pos[0],
                    top: d.datepicker._pos[1]
                }, d.datepicker._pos = null, t.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), d.datepicker._updateDatepicker(t), n = d.datepicker._checkOffset(t, n, r), t.dpDiv.css({
                    position: d.datepicker._inDialog && d.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: n.left + "px",
                    top: n.top + "px"
                });
                if (!t.inline) {
                    n = d.datepicker._get(t, "showAnim");
                    var i = d.datepicker._get(t, "duration"),
                        s = function () {
                            d.datepicker._datepickerShowing = !0;
                            var e = d.datepicker._getBorders(t.dpDiv);
                            t.dpDiv.find("iframe.ui-datepicker-cover").css({
                                left: -e[0],
                                top: -e[1],
                                width: t.dpDiv.outerWidth(),
                                height: t.dpDiv.outerHeight()
                            })
                        };
                    t.dpDiv.zIndex(d(e).zIndex() + 1), d.effects && d.effects[n] ? t.dpDiv.show(n, d.datepicker._get(t, "showOptions"), i, s) : t.dpDiv[n || "show"](n ? i : null, s), (!n || !i) && s(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), d.datepicker._curInst = t
                }
            }
        },
        _updateDatepicker: function (e) {
            var t = this,
                n = d.datepicker._getBorders(e.dpDiv);
            e.dpDiv.empty().append(this._generateHTML(e)).find("iframe.ui-datepicker-cover").css({
                left: -n[0],
                top: -n[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout", function () {
                d(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && d(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && d(this).removeClass("ui-datepicker-next-hover")
            }).bind("mouseover", function () {
                t._isDisabledDatepicker(e.inline ? e.dpDiv.parent()[0] : e.input[0]) || (d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && d(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && d(this).addClass("ui-datepicker-next-hover"))
            }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end(), n = this._getNumberOfMonths(e);
            var r = n[1];
            r > 1 ? e.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", 17 * r + "em") : e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e.dpDiv[(n[0] != 1 || n[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == d.datepicker._curInst && d.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus()
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [
                parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function (e, t, n) {
            var r = e.dpDiv.outerWidth(),
                i = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + d(document).scrollLeft(),
                a = document.documentElement.clientHeight + d(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? d(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? d(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function (e) {
            for (var t = this._get(this._getInst(e), "isRTL"); e && (e.type == "hidden" || e.nodeType != 1);) e = e[t ? "previousSibling" : "nextSibling"];
            return e = d(e).offset(), [e.left, e.top]
        },
        _hideDatepicker: function (e) {
            var t = this._curInst;
            if (!(!t || e && t != d.data(e, "datepicker")) && this._datepickerShowing) {
                e = this._get(t, "showAnim");
                var n = this._get(t, "duration"),
                    r = function () {
                        d.datepicker._tidyDialog(t), this._curInst = null
                    };
                d.effects && d.effects[e] ? t.dpDiv.hide(e, d.datepicker._get(t, "showOptions"), n, r) : t.dpDiv[e == "slideDown" ? "slideUp" : e == "fadeIn" ? "fadeOut" : "hide"](e ? n : null, r), e || r(), (e = this._get(t, "onClose")) && e.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), d.blockUI && (d.unblockUI(), d("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            d.datepicker._curInst && (e = d(e.target), e[0].id != d.datepicker._mainDivId && e.parents("#" + d.datepicker._mainDivId).length == 0 && !e.hasClass(d.datepicker.markerClassName) && !e.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && (!d.datepicker._inDialog || !d.blockUI) && d.datepicker._hideDatepicker())
        },
        _adjustDate: function (e, t, n) {
            e = d(e);
            var r = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(r, t + (n == "M" ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
        },
        _gotoToday: function (e) {
            e = d(e);
            var t = this._getInst(e[0]);
            if (this._get(t, "gotoCurrent") && t.currentDay) t.selectedDay = t.currentDay, t.drawMonth = t.selectedMonth = t.currentMonth, t.drawYear = t.selectedYear = t.currentYear;
            else {
                var n = new Date;
                t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear()
            }
            this._notifyChange(t), this._adjustDate(e)
        },
        _selectMonthYear: function (e, t, n) {
            e = d(e);
            var r = this._getInst(e[0]);
            r._selectingMonthYear = !1, r["selected" + (n == "M" ? "Month" : "Year")] = r["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(e)
        },
        _clickMonthYear: function (e) {
            var t = this._getInst(d(e)[0]);
            t.input && t._selectingMonthYear && setTimeout(function () {
                t.input.focus()
            }, 0), t._selectingMonthYear = !t._selectingMonthYear
        },
        _selectDay: function (e, t, n, r) {
            var i = d(e);
            !d(r).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(i[0]) && (i = this._getInst(i[0]), i.selectedDay = i.currentDay = d("a", r).html(), i.selectedMonth = i.currentMonth = t, i.selectedYear = i.currentYear = n, this._selectDate(e, this._formatDate(i, i.currentDay, i.currentMonth, i.currentYear)))
        },
        _clearDate: function (e) {
            e = d(e), this._getInst(e[0]), this._selectDate(e, "")
        },
        _selectDate: function (e, t) {
            e = this._getInst(d(e)[0]), t = t != null ? t : this._formatDate(e), e.input && e.input.val(t), this._updateAlternate(e);
            var n = this._get(e, "onSelect");
            n ? n.apply(e.input ? e.input[0] : null, [t, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], typeof e.input[0] != "object" && e.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var t = this._get(e, "altField");
            if (t) {
                var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    r = this._getDate(e),
                    i = this.formatDate(n, r, this._getFormatConfig(e));
                d(t).each(function () {
                    d(this).val(i)
                })
            }
        },
        noWeekends: function (e) {
            return e = e.getDay(), [e > 0 && e < 6, ""]
        },
        iso8601Week: function (e) {
            e = new Date(e.getTime()), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var t = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        },
        parseDate: function (e, t, n) {
            if (e == null || t == null) throw "Invalid arguments";
            t = typeof t == "object" ? t.toString() : t + "";
            if (t == "") return null;
            for (var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, a = n = -1, f = -1, l = -1, c = !1, h = function (t) {
                    return (t = g + 1 < e.length && e.charAt(g + 1) == t) && g++, t
                }, p = function (e) {
                    h(e), e = new RegExp("^\\d{1," + (e == "@" ? 14 : e == "!" ? 20 : e == "y" ? 4 : e == "o" ? 3 : 2) + "}"), e = t.substring(m).match(e);
                    if (!e) throw "Missing number at position " + m;
                    return m += e[0].length, parseInt(e[0], 10)
                }, d = function (e, n, r) {
                    e = h(e) ? r : n;
                    for (n = 0; n < e.length; n++) if (t.substr(m, e[n].length).toLowerCase() == e[n].toLowerCase()) return m += e[n].length, n + 1;
                    throw "Unknown name at position " + m
                }, v = function () {
                    if (t.charAt(m) != e.charAt(g)) throw "Unexpected literal at position " + m;
                    m++
                }, m = 0, g = 0; g < e.length; g++) if (c) e.charAt(g) == "'" && !h("'") ? c = !1 : v();
                else switch (e.charAt(g)) {
                        case "d":
                            f = p("d");
                            break;
                        case "D":
                            d("D", i, s);
                            break;
                        case "o":
                            l = p("o");
                            break;
                        case "m":
                            a = p("m");
                            break;
                        case "M":
                            a = d("M", o, u);
                            break;
                        case "y":
                            n = p("y");
                            break;
                        case "@":
                            var y = new Date(p("@"));
                            n = y.getFullYear(), a = y.getMonth() + 1, f = y.getDate();
                            break;
                        case "!":
                            y = new Date((p("!") - this._ticksTo1970) / 1e4), n = y.getFullYear(), a = y.getMonth() + 1, f = y.getDate();
                            break;
                        case "'":
                            h("'") ? v() : c = !0;
                            break;
                        default:
                            v()
                }
            n == -1 ? n = (new Date).getFullYear() : n < 100 && (n += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n <= r ? 0 : -100));
            if (l > -1) {
                a = 1, f = l;
                do {
                    r = this._getDaysInMonth(n, a - 1);
                    if (f <= r) break;
                    a++, f -= r
                } while (1)
            }
            y = this._daylightSavingAdjust(new Date(n, a - 1, f));
            if (y.getFullYear() != n || y.getMonth() + 1 != a || y.getDate() != f) throw "Invalid date";
            return y
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function (e, t, n) {
            if (!t) return "";
            var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                i = (n ? n.dayNames : null) || this._defaults.dayNames,
                s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort;
            n = (n ? n.monthNames : null) || this._defaults.monthNames;
            var o = function (t) {
                return (t = c + 1 < e.length && e.charAt(c + 1) == t) && c++, t
            }, u = function (e, t, n) {
                    t = "" + t;
                    if (o(e)) for (; t.length < n;) t = "0" + t;
                    return t
                }, a = function (e, t, n, r) {
                    return o(e) ? r[t] : n[t]
                }, f = "",
                l = !1;
            if (t) for (var c = 0; c < e.length; c++) if (l) e.charAt(c) == "'" && !o("'") ? l = !1 : f += e.charAt(c);
                    else switch (e.charAt(c)) {
                            case "d":
                                f += u("d", t.getDate(), 2);
                                break;
                            case "D":
                                f += a("D", t.getDay(), r, i);
                                break;
                            case "o":
                                f += u("o", (t.getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5, 3);
                                break;
                            case "m":
                                f += u("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                f += a("M", t.getMonth(), s, n);
                                break;
                            case "y":
                                f += o("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                f += t.getTime();
                                break;
                            case "!":
                                f += t.getTime() * 1e4 + this._ticksTo1970;
                                break;
                            case "'":
                                o("'") ? f += "'" : l = !0;
                                break;
                            default:
                                f += e.charAt(c)
                    }
            return f
        },
        _possibleChars: function (e) {
            for (var t = "", n = !1, r = function (t) {
                    return (t = i + 1 < e.length && e.charAt(i + 1) == t) && i++, t
                }, i = 0; i < e.length; i++) if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
                else switch (e.charAt(i)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            t += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            r("'") ? t += "'" : n = !0;
                            break;
                        default:
                            t += e.charAt(i)
                }
            return t
        },
        _get: function (e, t) {
            return e.settings[t] !== G ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() != e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i, s;
                i = s = this._getDefaultDate(e);
                var o = this._getFormatConfig(e);
                try {
                    i = this.parseDate(n, r, o) || s
                } catch (u) {
                    this.log(u), r = t ? "" : r
                }
                e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (e, t, n) {
            var r = function (e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, i = function (t) {
                    try {
                        return d.datepicker.parseDate(d.datepicker._get(e, "dateFormat"), t, d.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    var r = (t.toLowerCase().match(/^c/) ? d.datepicker._getDate(e) : null) || new Date,
                        i = r.getFullYear(),
                        s = r.getMonth();
                    r = r.getDate();
                    for (var o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = o.exec(t); u;) {
                        switch (u[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(u[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += parseInt(u[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                s += parseInt(u[1], 10), r = Math.min(r, d.datepicker._getDaysInMonth(i, s));
                                break;
                            case "y":
                            case "Y":
                                i += parseInt(u[1], 10), r = Math.min(r, d.datepicker._getDaysInMonth(i, s))
                        }
                        u = o.exec(t)
                    }
                    return new Date(i, s, r)
                };
            if (t = (t = t == null ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : t) && t.toString() == "Invalid Date" ? n : t) t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0);
            return this._daylightSavingAdjust(t)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear;
            t = this._restrictMinMax(e, this._determineDate(e, t, new Date)), e.selectedDay = e.currentDay = t.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth(), e.drawYear = e.selectedYear = e.currentYear = t.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            return !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _generateHTML: function (e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var n = this._get(e, "isRTL"),
                r = this._get(e, "showButtonPanel"),
                i = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(e),
                u = this._get(e, "showCurrentAtPos"),
                a = this._get(e, "stepMonths"),
                f = o[0] != 1 || o[1] != 1,
                l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                c = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max");
            u = e.drawMonth - u;
            var p = e.drawYear;
            u < 0 && (u += 12, p--);
            if (h) {
                var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                for (v = c && v < c ? c : v; this._daylightSavingAdjust(new Date(p, u, 1)) > v;) u--, u < 0 && (u = 11, p--)
            }
            e.drawMonth = u, e.drawYear = p, v = this._get(e, "prevText"), v = s ? this.formatDate(v, this._daylightSavingAdjust(new Date(p, u - a, 1)), this._getFormatConfig(e)) : v, v = this._canAdjustMonth(e, -1, p, u) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._adjustDate('#" + e.id + "', -" + a + ", 'M');\" title=\"" + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + v + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + v + "</span></a>";
            var m = this._get(e, "nextText");
            m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(p, u + a, 1)), this._getFormatConfig(e)) : m, i = this._canAdjustMonth(e, 1, p, u) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._adjustDate('#" + e.id + "', +" + a + ", 'M');\" title=\"" + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + m + "</span></a>", a = this._get(e, "currentText"), m = this._get(e, "gotoCurrent") && e.currentDay ? l : t, a = s ? this.formatDate(a, m, this._getFormatConfig(e)) : a, s = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + y + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>", r = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? s : "") + (this._isInRange(e, m) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._gotoToday('#" + e.id + "');\">" + a + "</button>" : "") + (n ? "" : s) + "</div>" : "", s = parseInt(this._get(e, "firstDay"), 10), s = isNaN(s) ? 0 : s, a = this._get(e, "showWeek"), m = this._get(e, "dayNames"), this._get(e, "dayNamesShort");
            var g = this._get(e, "dayNamesMin"),
                b = this._get(e, "monthNames"),
                w = this._get(e, "monthNamesShort"),
                E = this._get(e, "beforeShowDay"),
                S = this._get(e, "showOtherMonths"),
                x = this._get(e, "selectOtherMonths");
            this._get(e, "calculateWeek");
            for (var T = this._getDefaultDate(e), N = "", C = 0; C < o[0]; C++) {
                for (var k = "", L = 0; L < o[1]; L++) {
                    var A = this._daylightSavingAdjust(new Date(p, u, e.selectedDay)),
                        O = " ui-corner-all",
                        M = "";
                    if (f) {
                        M += '<div class="ui-datepicker-group';
                        if (o[1] > 1) switch (L) {
                                case 0:
                                    M += " ui-datepicker-group-first", O = " ui-corner-" + (n ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    M += " ui-datepicker-group-last", O = " ui-corner-" + (n ? "left" : "right");
                                    break;
                                default:
                                    M += " ui-datepicker-group-middle", O = ""
                        }
                        M += '">'
                    }
                    M += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + O + '">' + (/all|left/.test(O) && C == 0 ? n ? i : v : "") + (/all|right/.test(O) && C == 0 ? n ? v : i : "") + this._generateMonthYearHeader(e, u, p, c, h, C > 0 || L > 0, b, w) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var _ = a ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                    for (O = 0; O < 7; O++) {
                        var D = (O + s) % 7;
                        _ += "<th" + ((O + s + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + m[D] + '">' + g[D] + "</span></th>"
                    }
                    M += _ + "</tr></thead><tbody>", _ = this._getDaysInMonth(p, u), p == e.selectedYear && u == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, _)), O = (this._getFirstDayOfMonth(p, u) - s + 7) % 7, _ = f ? 6 : Math.ceil((O + _) / 7), D = this._daylightSavingAdjust(new Date(p, u, 1 - O));
                    for (var P = 0; P < _; P++) {
                        M += "<tr>";
                        var H = a ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(D) + "</td>" : "";
                        for (O = 0; O < 7; O++) {
                            var B = E ? E.apply(e.input ? e.input[0] : null, [D]) : [!0, ""],
                                j = D.getMonth() != u,
                                F = j && !x || !B[0] || c && D < c || h && D > h;
                            H += '<td class="' + ((O + s + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (D.getTime() == A.getTime() && u == e.selectedMonth && e._keyEvent || T.getTime() == D.getTime() && T.getTime() == A.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !S ? "" : " " + B[1] + (D.getTime() == l.getTime() ? " " + this._currentClass : "") + (D.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!j || S) && B[2] ? ' title="' + B[2] + '"' : "") + (F ? "" : ' onclick="DP_jQuery_' + y + ".datepicker._selectDay('#" + e.id + "'," + D.getMonth() + "," + D.getFullYear() + ', this);return false;"') + ">" + (j && !S ? "&#xa0;" : F ? '<span class="ui-state-default">' + D.getDate() + "</span>" : '<a class="ui-state-default' + (D.getTime() == t.getTime() ? " ui-state-highlight" : "") + (D.getTime() == l.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + '" href="#">' + D.getDate() + "</a>") + "</td>", D.setDate(D.getDate() + 1), D = this._daylightSavingAdjust(D)
                        }
                        M += H + "</tr>"
                    }
                    u++, u > 11 && (u = 0, p++), M += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && L == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), k += M
                }
                N += k
            }
            return N += r + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, N
        },
        _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
            var a = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                c = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                o = r && r.getFullYear() == n;
                var p = i && i.getFullYear() == n;
                h += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + y + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" onclick=\"DP_jQuery_" + y + ".datepicker._clickMonthYear('#" + e.id + "');\">";
                for (var d = 0; d < 12; d++)(!o || d >= r.getMonth()) && (!p || d <= i.getMonth()) && (h += '<option value="' + d + '"' + (d == t ? ' selected="selected"' : "") + ">" + u[d] + "</option>");
                h += "</select>"
            }
            l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
            if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
            else {
                u = this._get(e, "yearRange").split(":");
                var v = (new Date).getFullYear();
                o = function (e) {
                    return e = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10), isNaN(e) ? v : e
                }, t = o(u[0]), u = Math.max(t, o(u[1] || "")), t = r ? Math.max(t, r.getFullYear()) : t, u = i ? Math.min(u, i.getFullYear()) : u;
                for (c += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + y + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + y + ".datepicker._clickMonthYear('#" + e.id + "');\">"; t <= u; t++) c += '<option value="' + t + '"' + (t == n ? ' selected="selected"' : "") + ">" + t + "</option>";
                c += "</select>"
            }
            return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
        },
        _adjustInstDate: function (e, t, n) {
            var r = e.drawYear + (n == "Y" ? t : 0),
                i = e.drawMonth + (n == "M" ? t : 0);
            t = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, t))), e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var n = this._getMinMaxDate(e, "min");
            return e = this._getMinMaxDate(e, "max"), t = n && t < n ? n : t, t = e && t > e ? e : t
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            return e = this._get(e, "numberOfMonths"), e == null ? [1, 1] : typeof e == "number" ? [1, e] : e
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - (new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function (e, t, n, r) {
            var i = this._getNumberOfMonths(e);
            return n = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1)), t < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function (e, t) {
            var n = this._getMinMaxDate(e, "min");
            return e = this._getMinMaxDate(e, "max"), (!n || t.getTime() >= n.getTime()) && (!e || t.getTime() <= e.getTime())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, n, r) {
            return t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear), t = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)), this.formatDate(this._get(e, "dateFormat"), t, this._getFormatConfig(e))
        }
    }), d.fn.datepicker = function (e) {
        d.datepicker.initialized || (d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv), d.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this[0]].concat(t)) : this.each(function () {
            typeof e == "string" ? d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this].concat(t)) : d.datepicker._attachDatepicker(this, e)
        }) : d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this[0]].concat(t))
    }, d.datepicker = new K, d.datepicker.initialized = !1, d.datepicker.uuid = (new Date).getTime(), d.datepicker.version = "1.8.6", window["DP_jQuery_" + y] = d
}(jQuery),
function (e, t) {
    e.widget("ui.progressbar", {
        options: {
            value: 0
        },
        min: 0,
        max: 100,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function (t, n) {
            t === "value" && (this.options.value = n, this._refreshValue(), this._trigger("change"), this._value() === this.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function () {
            var e = this.options.value;
            return typeof e != "number" && (e = 0), Math.min(this.max, Math.max(this.min, e))
        },
        _refreshValue: function () {
            var e = this.value();
            this.valueDiv.toggleClass("ui-corner-right", e === this.max).width(e + "%"), this.element.attr("aria-valuenow", e)
        }
    }), e.extend(e.ui.progressbar, {
        version: "1.8.6"
    })
}(jQuery), jQuery.effects || function (e, t) {
    function n(t) {
        var n;
        return t && t.constructor == Array && t.length == 3 ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(n[1]) * 2.55, parseFloat(n[2]) * 2.55, parseFloat(n[3]) * 2.55] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(t) ? f.transparent : f[e.trim(t).toLowerCase()]
    }
    function r(t, r) {
        var i;
        do {
            i = e.curCSS(t, r);
            if (i != "" && i != "transparent" || e.nodeName(t, "body")) break;
            r = "backgroundColor"
        } while (t = t.parentNode);
        return n(i)
    }
    function i() {
        var e = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            t = {}, n, r;
        if (e && e.length && e[0] && e[e[0]]) for (var i = e.length; i--;) n = e[i], typeof e[n] == "string" && (r = n.replace(/\-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                }), t[r] = e[n]);
        else for (n in e) typeof e[n] == "string" && (t[n] = e[n]);
        return t
    }
    function s(t) {
        var n, r;
        for (n in t) r = t[n], (r == null || e.isFunction(r) || n in c || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(r))) && delete t[n];
        return t
    }
    function o(e, t) {
        var n = {
            _: 0
        }, r;
        for (r in t) e[r] != t[r] && (n[r] = t[r]);
        return n
    }
    function u(t, n, r, i) {
        typeof t == "object" && (i = n, r = null, n = t, t = n.effect), e.isFunction(n) && (i = n, r = null, n = {});
        if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
        return e.isFunction(r) && (i = r, r = null), n = n || {}, r = r || n.duration, r = e.fx.off ? 0 : typeof r == "number" ? r : e.fx.speeds[r] || e.fx.speeds._default, i = i || n.complete, [t, n, r, i]
    }
    function a(t) {
        return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects[t] ? !0 : !1
    }
    e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (t, i) {
        e.fx.step[i] = function (e) {
            e.colorInit || (e.start = r(e.elem, i), e.end = n(e.end), e.colorInit = !0), e.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var f = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }, l = ["add", "remove", "toggle"],
        c = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    e.effects.animateClass = function (t, n, r, u) {
        return e.isFunction(r) && (u = r, r = null), this.each(function () {
            var a = e(this),
                f = a.attr("style") || " ",
                c = s(i.call(this)),
                h, v = a.attr("className");
            e.each(l, function (e, n) {
                t[n] && a[n + "Class"](t[n])
            }), h = s(i.call(this)), a.attr("className", v), a.animate(o(c, h), n, r, function () {
                e.each(l, function (e, n) {
                    t[n] && a[n + "Class"](t[n])
                }), typeof a.attr("style") == "object" ? (a.attr("style").cssText = "", a.attr("style").cssText = f) : a.attr("style", f), u && u.apply(this, arguments)
            })
        })
    }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                    add: t
                },
                n, r, i
            ]) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                    remove: t
                },
                n, r, i
            ]) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function (n, r, i, s, o) {
            return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.apply(this, [r ? {
                    add: n
                } : {
                    remove: n
                },
                i, s, o
            ]) : this._toggleClass(n, r) : e.effects.animateClass.apply(this, [{
                    toggle: n
                },
                r, i, s
            ])
        },
        switchClass: function (t, n, r, i, s) {
            return e.effects.animateClass.apply(this, [{
                    add: n,
                    remove: t
                },
                r, i, s
            ])
        }
    }), e.extend(e.effects, {
        version: "1.8.6",
        save: function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.data("ec.storage." + t[n], e[0].style[t[n]])
        },
        restore: function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.css(t[n], e.data("ec.storage." + t[n]))
        },
        setMode: function (e, t) {
            return t == "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function (e, t) {
            var n;
            switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
            }
            switch (e[1]) {
                case "left":
                    e = 0;
                    break;
                case "center":
                    e = .5;
                    break;
                case "right":
                    e = 1;
                    break;
                default:
                    e = e[1] / t.width
            }
            return {
                x: e,
                y: n
            }
        },
        createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                "float": t.css("float")
            }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                });
            return t.wrap(r), r = t.parent(), t.css("position") == "static" ? (r.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (e.extend(n, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), e.each(["top", "left", "bottom", "right"], function (e, r) {
                n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0
            })), r.css(n).show()
        },
        removeWrapper: function (e) {
            return e.parent().is(".ui-effects-wrapper") ? e.parent().replaceWith(e) : e
        },
        setTransition: function (t, n, r, i) {
            return i = i || {}, e.each(n, function (e, n) {
                unit = t.cssUnit(n), unit[0] > 0 && (i[n] = unit[0] * r + unit[1])
            }), i
        }
    }), e.fn.extend({
        effect: function (t) {
            var n = u.apply(this, arguments),
                r = {
                    options: n[1],
                    duration: n[2],
                    callback: n[3]
                };
            n = r.options.mode;
            var i = e.effects[t];
            return e.fx.off || !i ? n ? this[n](r.duration, r.callback) : this.each(function () {
                r.callback && r.callback.call(this)
            }) : i.call(this, r)
        },
        _show: e.fn.show,
        show: function (e) {
            if (a(e)) return this._show.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: e.fn.hide,
        hide: function (e) {
            if (a(e)) return this._hide.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function (t) {
            if (a(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
            var n = u.apply(this, arguments);
            return n[1].mode = "toggle", this.effect.apply(this, n)
        },
        cssUnit: function (t) {
            var n = this.css(t),
                r = [];
            return e.each(["em", "px", "%", "pt"], function (e, t) {
                n.indexOf(t) > 0 && (r = [parseFloat(n), t])
            }), r
        }
    }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function (t, n, r, i, s) {
            return e.easing[e.easing.def](t, n, r, i, s)
        },
        easeInQuad: function (e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function (e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function (e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function (e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function (e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function (e, t, n, r, i) {
            return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function (e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i) == 1 ? n + r : (s || (s = i * .3), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s)) + n)
        },
        easeOutElastic: function (e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i) == 1 ? n + r : (s || (s = i * .3), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), o * Math.pow(2, -10 * t) * Math.sin((t * i - e) * 2 * Math.PI / s) + r + n)
        },
        easeInOutElastic: function (e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i / 2) == 2 ? n + r : (s || (s = i * .3 * 1.5), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), t < 1 ? -0.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) * .5 + r + n)
        },
        easeInBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * (n /= s) * n * ((o + 1) * n - o) + r
        },
        easeOutBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * ((n = n / s - 1) * n * ((o + 1) * n + o) + 1) + r
        },
        easeInOutBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), (n /= s / 2) < 1 ? i / 2 * n * n * (((o *= 1.525) + 1) * n - o) + r : i / 2 * ((n -= 2) * n * (((o *= 1.525) + 1) * n + o) + 2) + r
        },
        easeInBounce: function (t, n, r, i, s) {
            return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + r
        },
        easeOutBounce: function (e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (t, n, r, i, s) {
            return n < s / 2 ? e.easing.easeInBounce(t, n * 2, 0, i, s) * .5 + r : e.easing.easeOutBounce(t, n * 2 - s, 0, i, s) * .5 + i * .5 + r
        }
    })
}(jQuery),
function (e) {
    e.effects.blind = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var o = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                u = s == "vertical" ? "height" : "width";
            s = s == "vertical" ? o.height() : o.width(), i == "show" && o.css(u, 0);
            var a = {};
            a[u] = i == "show" ? s : 0, o.animate(a, t.duration, t.options.easing, function () {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.bounce = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left"],
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = t.options.direction || "up",
                o = t.options.distance || 20,
                u = t.options.times || 5,
                a = t.duration || 250;
            /show|hide/.test(i) && r.push("opacity"), e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var f = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg", o = t.options.distance || (f == "top" ? n.outerHeight({
                margin: !0
            }) / 3 : n.outerWidth({
                margin: !0
            }) / 3), i == "show" && n.css("opacity", 0).css(f, s == "pos" ? -o : o), i == "hide" && (o /= u * 2), i != "hide" && u--;
            if (i == "show") {
                var l = {
                    opacity: 1
                };
                l[f] = (s == "pos" ? "+=" : "-=") + o, n.animate(l, a / 2, t.options.easing), o /= 2, u--
            }
            for (l = 0; l < u; l++) {
                var c = {}, h = {};
                c[f] = (s == "pos" ? "-=" : "+=") + o, h[f] = (s == "pos" ? "+=" : "-=") + o, n.animate(c, a / 2, t.options.easing).animate(h, a / 2, t.options.easing), o = i == "hide" ? o * 2 : o / 2
            }
            i == "hide" ? (l = {
                opacity: 0
            }, l[f] = (s == "pos" ? "-=" : "+=") + o, n.animate(l, a / 2, t.options.easing, function () {
                n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            })) : (c = {}, h = {}, c[f] = (s == "pos" ? "-=" : "+=") + o, h[f] = (s == "pos" ? "+=" : "-=") + o, n.animate(c, a / 2, t.options.easing).animate(h, a / 2, t.options.easing, function () {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            })), n.queue("fx", function () {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery),
function (e) {
    e.effects.clip = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left", "height", "width"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var o = e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            o = n[0].tagName == "IMG" ? o : n;
            var u = {
                size: s == "vertical" ? "height" : "width",
                position: s == "vertical" ? "top" : "left"
            };
            s = s == "vertical" ? o.height() : o.width(), i == "show" && (o.css(u.size, 0), o.css(u.position, s / 2));
            var a = {};
            a[u.size] = i == "show" ? s : 0, a[u.position] = i == "show" ? 0 : s / 2, o.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.drop = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var o = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg";
            var u = t.options.distance || (o == "top" ? n.outerHeight({
                margin: !0
            }) / 2 : n.outerWidth({
                margin: !0
            }) / 2);
            i == "show" && n.css("opacity", 0).css(o, s == "pos" ? -u : u);
            var a = {
                opacity: i == "show" ? 1 : 0
            };
            a[o] = (i == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + u, n.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.explode = function (t) {
        return this.queue(function () {
            var n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
            t.options.mode = t.options.mode == "toggle" ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
            var i = e(this).show().css("visibility", "hidden"),
                s = i.offset();
            s.top -= parseInt(i.css("marginTop"), 10) || 0, s.left -= parseInt(i.css("marginLeft"), 10) || 0;
            for (var o = i.outerWidth(!0), u = i.outerHeight(!0), f = 0; f < n; f++) for (var l = 0; l < r; l++) i.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -l * (o / r),
                        top: -f * (u / n)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: o / r,
                        height: u / n,
                        left: s.left + l * (o / r) + (t.options.mode == "show" ? (l - Math.floor(r / 2)) * (o / r) : 0),
                        top: s.top + f * (u / n) + (t.options.mode == "show" ? (f - Math.floor(n / 2)) * (u / n) : 0),
                        opacity: t.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: s.left + l * (o / r) + (t.options.mode == "show" ? 0 : (l - Math.floor(r / 2)) * (o / r)),
                        top: s.top + f * (u / n) + (t.options.mode == "show" ? 0 : (f - Math.floor(n / 2)) * (u / n)),
                        opacity: t.options.mode == "show" ? 1 : 0
                    }, t.duration || 500);
            setTimeout(function () {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide(), t.callback && t.callback.apply(i[0]), i.dequeue(), e("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery),
function (e) {
    e.effects.fade = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide");
            n.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.fold = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.size || 15,
                o = !! t.options.horizFirst,
                u = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
            e.effects.save(n, r), n.show();
            var f = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                l = i == "show" != o,
                h = l ? ["width", "height"] : ["height", "width"];
            l = l ? [f.width(), f.height()] : [f.height(), f.width()];
            var p = /([0-9]+)%/.exec(s);
            p && (s = parseInt(p[1], 10) / 100 * l[i == "hide" ? 0 : 1]), i == "show" && f.css(o ? {
                height: 0,
                width: s
            } : {
                height: s,
                width: 0
            }), o = {}, p = {}, o[h[0]] = i == "show" ? l[0] : s, p[h[1]] = i == "show" ? l[1] : 0, f.animate(o, u, t.options.easing).animate(p, u, t.options.easing, function () {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.highlight = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["backgroundImage", "backgroundColor", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            i == "hide" && (s.opacity = 0), e.effects.save(n, r), n.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), i == "show" && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.pulsate = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "show");
            times = (t.options.times || 5) * 2 - 1, duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2, isVisible = n.is(":visible"), animateTo = 0, isVisible || (n.css("opacity", 0).show(), animateTo = 1), (r == "hide" && isVisible || r == "show" && !isVisible) && times--;
            for (r = 0; r < times; r++) n.animate({
                    opacity: animateTo
                }, duration, t.options.easing), animateTo = (animateTo + 1) % 2;
            n.animate({
                opacity: animateTo
            }, duration, t.options.easing, function () {
                animateTo == 0 && n.hide(), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function () {
                n.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
function (e) {
    e.effects.puff = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide"),
                i = parseInt(t.options.percent, 10) || 150,
                s = i / 100,
                o = {
                    height: n.height(),
                    width: n.width()
                };
            e.extend(t.options, {
                fade: !0,
                mode: r,
                percent: r == "hide" ? i : 100,
                from: r == "hide" ? o : {
                    height: o.height * s,
                    width: o.width * s
                }
            }), n.effect("scale", t.options, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.scale = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.extend(!0, {}, t.options),
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : i == "hide" ? 0 : 100),
                o = t.options.direction || "both",
                u = t.options.origin;
            i != "effect" && (r.origin = u || ["middle", "center"], r.restore = !0), u = {
                height: n.height(),
                width: n.width()
            }, n.from = t.options.from || (i == "show" ? {
                height: 0,
                width: 0
            } : u), s = {
                y: o != "horizontal" ? s / 100 : 1,
                x: o != "vertical" ? s / 100 : 1
            }, n.to = {
                height: u.height * s.y,
                width: u.width * s.x
            }, t.options.fade && (i == "show" && (n.from.opacity = 0, n.to.opacity = 1), i == "hide" && (n.from.opacity = 1, n.to.opacity = 0)), r.from = n.from, r.to = n.to, r.mode = i, n.effect("size", r, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.size = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left", "width", "height", "overflow", "opacity"],
                i = ["position", "top", "left", "overflow", "opacity"],
                s = ["width", "height", "overflow"],
                o = ["fontSize"],
                u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                a = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                f = e.effects.setMode(n, t.options.mode || "effect"),
                l = t.options.restore || !1,
                h = t.options.scale || "both",
                p = t.options.origin,
                d = {
                    height: n.height(),
                    width: n.width()
                };
            n.from = t.options.from || d, n.to = t.options.to || d, p && (p = e.effects.getBaseline(p, d), n.from.top = (d.height - n.from.height) * p.y, n.from.left = (d.width - n.from.width) * p.x, n.to.top = (d.height - n.to.height) * p.y, n.to.left = (d.width - n.to.width) * p.x);
            var v = {
                from: {
                    y: n.from.height / d.height,
                    x: n.from.width / d.width
                },
                to: {
                    y: n.to.height / d.height,
                    x: n.to.width / d.width
                }
            };
            if (h == "box" || h == "both") v.from.y != v.to.y && (r = r.concat(u), n.from = e.effects.setTransition(n, u, v.from.y, n.from), n.to = e.effects.setTransition(n, u, v.to.y, n.to)), v.from.x != v.to.x && (r = r.concat(a), n.from = e.effects.setTransition(n, a, v.from.x, n.from), n.to = e.effects.setTransition(n, a, v.to.x, n.to));
            (h == "content" || h == "both") && v.from.y != v.to.y && (r = r.concat(o), n.from = e.effects.setTransition(n, o, v.from.y, n.from), n.to = e.effects.setTransition(n, o, v.to.y, n.to)), e.effects.save(n, l ? r : i), n.show(), e.effects.createWrapper(n), n.css("overflow", "hidden").css(n.from);
            if (h == "content" || h == "both") u = u.concat(["marginTop", "marginBottom"]).concat(o), a = a.concat(["marginLeft", "marginRight"]), s = r.concat(u).concat(a), n.find("*[width]").each(function () {
                    child = e(this), l && e.effects.save(child, s);
                    var n = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: n.height * v.from.y,
                        width: n.width * v.from.x
                    }, child.to = {
                        height: n.height * v.to.y,
                        width: n.width * v.to.x
                    }, v.from.y != v.to.y && (child.from = e.effects.setTransition(child, u, v.from.y, child.from), child.to = e.effects.setTransition(child, u, v.to.y, child.to)), v.from.x != v.to.x && (child.from = e.effects.setTransition(child, a, v.from.x, child.from), child.to = e.effects.setTransition(child, a, v.to.x, child.to)), child.css(child.from), child.animate(child.to, t.duration, t.options.easing, function () {
                        l && e.effects.restore(child, s)
                    })
                });
            n.animate(n.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    n.to.opacity === 0 && n.css("opacity", n.from.opacity), f == "hide" && n.hide(), e.effects.restore(n, l ? r : i), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.shake = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left"];
            e.effects.setMode(n, t.options.mode || "effect");
            var i = t.options.direction || "left",
                s = t.options.distance || 20,
                o = t.options.times || 3,
                u = t.duration || t.options.duration || 140;
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var f = i == "up" || i == "down" ? "top" : "left",
                l = i == "up" || i == "left" ? "pos" : "neg";
            i = {};
            var c = {}, h = {};
            i[f] = (l == "pos" ? "-=" : "+=") + s, c[f] = (l == "pos" ? "+=" : "-=") + s * 2, h[f] = (l == "pos" ? "-=" : "+=") + s * 2, n.animate(i, u, t.options.easing);
            for (s = 1; s < o; s++) n.animate(c, u, t.options.easing).animate(h, u, t.options.easing);
            n.animate(c, u, t.options.easing).animate(i, u / 2, t.options.easing, function () {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function () {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery),
function (e) {
    e.effects.slide = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "left"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            var o = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg";
            var u = t.options.distance || (o == "top" ? n.outerHeight({
                margin: !0
            }) : n.outerWidth({
                margin: !0
            }));
            i == "show" && n.css(o, s == "pos" ? -u : u);
            var a = {};
            a[o] = (i == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + u, n.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.transfer = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e(t.options.to),
                i = r.offset();
            r = {
                top: i.top,
                left: i.left,
                height: r.innerHeight(),
                width: r.innerWidth()
            }, i = n.offset();
            var s = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                top: i.top,
                left: i.left,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: "absolute"
            }).animate(r, t.duration, t.options.easing, function () {
                s.remove(), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e, t) {
    function n(t, n) {
        var i = t.nodeName.toLowerCase();
        if ("area" === i) {
            var s = t.parentNode,
                o = s.name,
                u;
            return !t.href || !o || s.nodeName.toLowerCase() !== "map" ? !1 : (u = e("img[usemap=#" + o + "]")[0], !! u && r(u))
        }
        return (/input|select|textarea|button|object/.test(i) ? !t.disabled : "a" == i ? t.href || n : n) && r(t)
    }
    function r(t) {
        return !e(t).parents().andSelf().filter(function () {
            return e.curCSS(this, "visibility") === "hidden" || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.8.16",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : t = this.parents().filter(function () {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.each(["Width", "Height"], function (n, r) {
        function u(t, n, r, s) {
            return e.each(i, function () {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, r && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), s && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            s = r.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function (n) {
            return n === t ? o["inner" + r].call(this) : this.each(function () {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var r = e.attr(t, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && n(t, !i)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                var i = e.ui[t].prototype;
                for (var s in r) i.plugins[s] = i.plugins[s] || [], i.plugins[s].push([n, r[s]])
            },
            call: function (e, t, n) {
                var r = e.plugins[t];
                if (!r || !e.element[0].parentNode) return;
                for (var i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        contains: function (e, t) {
            return document.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : e !== t && e.contains(t)
        },
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        },
        isOverAxis: function (e, t, n) {
            return e > t && e < t + n
        },
        isOver: function (t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
}(jQuery),
function (e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function (t) {
            for (var r = 0, i;
            (i = t[r]) != null; r++) try {
                    e(i).triggerHandler("remove")
            } catch (s) {}
            n(t)
        }
    } else {
        var r = e.fn.remove;
        e.fn.remove = function (t, n) {
            return this.each(function () {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), r.call(e(this), t, n)
            })
        }
    }
    e.widget = function (t, n, r) {
        var i = t.split(".")[0],
            s;
        t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function (n) {
            return !!e.data(n, t)
        }, e[i] = e[i] || {}, e[i][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var o = new n;
        o.options = e.extend(!0, {}, o.options), e[i][t].prototype = e.extend(!0, o, {
            namespace: i,
            widgetName: t,
            widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, r), e.widget.bridge(t, e[i][t])
    }, e.widget.bridge = function (n, r) {
        e.fn[n] = function (i) {
            var s = typeof i == "string",
                o = Array.prototype.slice.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function () {
                var r = e.data(this, n),
                    s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
                if (s !== r && s !== t) return u = s, !1
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
            }), u)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function () {
                r.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend({}, this.options);
            if (typeof n == "string") {
                if (r === t) return this.options[n];
                i = {}, i[n] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, n, r) {
            var i = this.options[t];
            n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), r = r || {};
            if (n.originalEvent) for (var s = e.event.props.length, o; s;) o = e.event.props[--s], n[o] = n.originalEvent[o];
            return this.element.trigger(n, r), !(e.isFunction(i) && i.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
        }
    }
}(jQuery),
function (e, t) {
    var n = !1;
    e(document).mouseup(function (e) {
        n = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which == 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function (t) {
            return !e.browser.msie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function (e) {
            return this.mouseDelayMet
        },
        _mouseStart: function (e) {},
        _mouseDrag: function (e) {},
        _mouseStop: function (e) {},
        _mouseCapture: function (e) {
            return !0
        }
    })
}(jQuery),
function (e, t) {
    e.ui = e.ui || {};
    var n = /left|center|right/,
        r = /top|center|bottom/,
        i = "center",
        s = e.fn.position,
        o = e.fn.offset;
    e.fn.position = function (t) {
        if (!t || !t.of) return s.apply(this, arguments);
        t = e.extend({}, t);
        var o = e(t.of),
            u = o[0],
            a = (t.collision || "flip").split(" "),
            f = t.offset ? t.offset.split(" ") : [0, 0],
            l, c, h;
        return u.nodeType === 9 ? (l = o.width(), c = o.height(), h = {
            top: 0,
            left: 0
        }) : u.setTimeout ? (l = o.width(), c = o.height(), h = {
            top: o.scrollTop(),
            left: o.scrollLeft()
        }) : u.preventDefault ? (t.at = "left top", l = c = 0, h = {
            top: t.of.pageY,
            left: t.of.pageX
        }) : (l = o.outerWidth(), c = o.outerHeight(), h = o.offset()), e.each(["my", "at"], function () {
            var e = (t[this] || "").split(" ");
            e.length === 1 && (e = n.test(e[0]) ? e.concat([i]) : r.test(e[0]) ? [i].concat(e) : [i, i]), e[0] = n.test(e[0]) ? e[0] : i, e[1] = r.test(e[1]) ? e[1] : i, t[this] = e
        }), a.length === 1 && (a[1] = a[0]), f[0] = parseInt(f[0], 10) || 0, f.length === 1 && (f[1] = f[0]), f[1] = parseInt(f[1], 10) || 0, t.at[0] === "right" ? h.left += l : t.at[0] === i && (h.left += l / 2), t.at[1] === "bottom" ? h.top += c : t.at[1] === i && (h.top += c / 2), h.left += f[0], h.top += f[1], this.each(function () {
            var n = e(this),
                r = n.outerWidth(),
                s = n.outerHeight(),
                o = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                u = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                p = r + o + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
                d = s + u + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
                v = e.extend({}, h),
                m;
            t.my[0] === "right" ? v.left -= r : t.my[0] === i && (v.left -= r / 2), t.my[1] === "bottom" ? v.top -= s : t.my[1] === i && (v.top -= s / 2), v.left = Math.round(v.left), v.top = Math.round(v.top), m = {
                left: v.left - o,
                top: v.top - u
            }, e.each(["left", "top"], function (n, i) {
                e.ui.position[a[n]] && e.ui.position[a[n]][i](v, {
                    targetWidth: l,
                    targetHeight: c,
                    elemWidth: r,
                    elemHeight: s,
                    collisionPosition: m,
                    collisionWidth: p,
                    collisionHeight: d,
                    offset: f,
                    my: t.my,
                    at: t.at
                })
            }), e.fn.bgiframe && n.bgiframe(), n.offset(e.extend(v, {
                using: t.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (t, n) {
                var r = e(window),
                    i = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft();
                t.left = i > 0 ? t.left - i : Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function (t, n) {
                var r = e(window),
                    i = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop();
                t.top = i > 0 ? t.top - i : Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function (t, n) {
                if (n.at[0] === i) return;
                var r = e(window),
                    s = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(),
                    o = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
                    u = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
                    a = -2 * n.offset[0];
                t.left += n.collisionPosition.left < 0 ? o + u + a : s > 0 ? o + u + a : 0
            },
            top: function (t, n) {
                if (n.at[1] === i) return;
                var r = e(window),
                    s = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(),
                    o = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
                    u = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
                    a = -2 * n.offset[1];
                t.top += n.collisionPosition.top < 0 ? o + u + a : s > 0 ? o + u + a : 0
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function (t, n) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var r = e(t),
            i = r.offset(),
            s = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            o = parseInt(e.curCSS(t, "left", !0), 10) || 0,
            u = {
                top: n.top - i.top + s,
                left: n.left - i.left + o
            };
        "using" in n ? n.using.call(t, u) : r.css(u)
    }, e.fn.offset = function (t) {
        var n = this[0];
        return !n || !n.ownerDocument ? null : t ? this.each(function () {
            e.offset.setOffset(this, t)
        }) : o.call(this)
    })
}(jQuery),
function (e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function () {
            if (!this.element.data("draggable")) return;
            return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (n.iframeFix && e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var r = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    r._trigger("stop", t) !== !1 && r._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (t) {
            return this.options.iframeFix === !0 && e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                    top: 0,
                    left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment),
                    r = n[0];
                if (!r) return;
                var i = n.offset(),
                    s = e(r).css("overflow") != "hidden";
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent
                    .scrollTop() : o ? 0 : s.scrollTop()) * r),
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                var u;
                if (this.containment) {
                    if (this.relative_container) {
                        var a = this.relative_container.offset();
                        u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                    } else u = this.containment;
                    t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                    var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function (e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.extend(e.ui.draggable, {
        version: "1.8.16"
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function () {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function (t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = this,
                s = function (t) {
                    var n = this.offset.click.top,
                        r = this.offset.click.left,
                        i = this.positionAbs.top,
                        s = this.positionAbs.left,
                        o = t.height,
                        u = t.width,
                        a = t.top,
                        f = t.left;
                    return e.ui.isOver(i + n, s + r, a, f, o, u)
                };
            e.each(r.sortables, function (s) {
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, n) {
            var r = e("body"),
                i = e(this).data("draggable").options;
            r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._cursor && e("body").css("cursor", r._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (t, n) {
            var r = e(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = !1;
            if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
            } else {
                if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
            }
            s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options;
            r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                var t = e(this),
                    n = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = i.snapTolerance,
                o = n.offset.left,
                u = o + r.helperProportions.width,
                a = n.offset.top,
                f = a + r.helperProportions.height;
            for (var l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left,
                    h = c + r.snapElements[l].width,
                    p = r.snapElements[l].top,
                    d = p + r.snapElements[l].height;
                if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                    r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = !1;
                    continue
                }
                if (i.snapMode != "inner") {
                    var v = Math.abs(p - f) <= s,
                        m = Math.abs(d - a) <= s,
                        g = Math.abs(c - u) <= s,
                        y = Math.abs(h - o) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left)
                }
                var b = v || m || g || y;
                if (i.snapMode != "outer") {
                    var v = Math.abs(p - a) <= s,
                        m = Math.abs(d - f) <= s,
                        g = Math.abs(c - o) <= s,
                        y = Math.abs(h - u) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                        top: d - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)
                }!r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })), r.snapElements[l].snapping = v || m || g || y || b
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, n) {
            var r = e(this).data("draggable").options,
                i = e.makeArray(e(r.stack)).sort(function (t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!i.length) return;
            var s = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function (e) {
                this.style.zIndex = s + e
            }), this[0].style.zIndex = s + i.length
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function (t, n) {
            var r = e(this).data("draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function (e, t) {
    e.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function () {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            for (var n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function (t, n) {
            t == "accept" && (this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function (t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function (t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function (t, n) {
            var r = n || e.ui.ddmanager.current;
            if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
            var i = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.extend(e.ui.droppable, {
        version: "1.8.16"
    }), e.ui.intersect = function (t, n, r) {
        if (!n.offset) return !1;
        var i = (t.positionAbs || t.position.absolute).left,
            s = i + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            u = o + t.helperProportions.height,
            a = n.offset.left,
            f = a + n.proportions.width,
            l = n.offset.top,
            c = l + n.proportions.height;
        switch (r) {
            case "fit":
                return a <= i && s <= f && l <= o && u <= c;
            case "intersect":
                return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < c;
            case "pointer":
                var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                    p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                    d = e.ui.isOver(p, h, l, a, n.proportions.height, n.proportions.width);
                return d;
            case "touch":
                return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, n) {
            var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                i = n ? n.type : null,
                s = (t.currentItem || t.element).find(":data(droppable)").andSelf();
            e: for (var o = 0; o < r.length; o++) {
                if (r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element)) continue;
                for (var u = 0; u < s.length; u++) if (s[u] == r[o].element[0]) {
                        r[o].proportions.height = 0;
                        continue e
                    }
                r[o].visible = r[o].element.css("display") != "none";
                if (!r[o].visible) continue;
                i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
                    width: r[o].element[0].offsetWidth,
                    height: r[o].element[0].offsetHeight
                }
            }
        },
        drop: function (t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options) return;
                !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = r || this._drop.call(this, n)), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))
            }), r
        },
        dragStart: function (t, n) {
            t.element.parents(":not(body,html)").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function (t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (this.options.disabled || this.greedyChild || !this.visible) return;
                var r = e.ui.intersect(t, this, this.options.tolerance),
                    i = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null;
                if (!i) return;
                var s;
                if (this.options.greedy) {
                    var o = this.element.parents(":data(droppable):eq(0)");
                    o.length && (s = e.data(o[0], "droppable"), s.greedyChild = i == "isover" ? 1 : 0)
                }
                s && i == "isover" && (s.isover = 0, s.isout = 1, s._out.call(s, n)), this[i] = 1, this[i == "isout" ? "isover" : "isout"] = 0, this[i == "isover" ? "_over" : "_out"].call(this, n), s && i == "isout" && (s.isout = 0, s.isover = 1, s._over.call(s, n))
            })
        },
        dragStop: function (t, n) {
            t.element.parents(":not(body,html)").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}(jQuery),
function (e, t) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var t = this,
                n = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! n.aspectRatio,
                aspectRatio: n.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r = this.handles.split(",");
                this.handles = {};
                for (var i = 0; i < r.length; i++) {
                    var s = e.trim(r[i]),
                        o = "ui-resizable-" + s,
                        u = e('<div class="ui-resizable-handle ' + o + '"></div>');
                    /sw|se|ne|nw/.test(s) && u.css({
                        zIndex: ++n.zIndex
                    }), "se" == s && u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(u)
                }
            }
            this._renderAxis = function (t) {
                t = t || this.element;
                for (var n in this.handles) {
                    this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r = e(this.handles[n], this.element),
                            i = 0;
                        i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
                        var s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                        t.css(s, i), this._proportionallyResize()
                    }
                    if (!e(this.handles[n]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function () {
                if (n.disabled) return;
                e(this).removeClass("ui-resizable-autohide"), t._handles.show()
            }, function () {
                if (n.disabled) return;
                t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            var t = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                t(this.element);
                var n = this.element;
                n.after(this.originalElement.css({
                    position: n.css("position"),
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: n.css("top"),
                    left: n.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var n = !1;
            for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var r = this.options,
                i = this.element.position(),
                s = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                position: "absolute",
                top: i.top,
                left: i.left
            }), e.browser.opera && /relative/.test(s.css("position")) && s.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy();
            var o = n(this.helper.css("left")),
                u = n(this.helper.css("top"));
            r.containment && (o += e(r.containment).scrollLeft() || 0, u += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: o,
                top: u
            }, this.size = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalPosition = {
                left: o,
                top: u
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var a = e(".ui-resizable-" + this.axis).css("cursor");
            return e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var n = this.helper,
                r = this.options,
                i = {}, s = this,
                o = this.originalMousePosition,
                u = this.axis,
                a = t.pageX - o.left || 0,
                f = t.pageY - o.top || 0,
                l = this._change[u];
            if (!l) return !1;
            var c = l.apply(this, [t, a, f]),
                h = e.browser.msie && e.browser.version < 7,
                p = this.sizeDiff;
            this._updateVirtualBoundaries(t.shiftKey);
            if (this._aspectRatio || t.shiftKey) c = this._updateRatio(c, t);
            return c = this._respectSize(c, t), this._propagate("resize", t), n.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(c), this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var n = this.options,
                r = this;
            if (this._helper) {
                var i = this._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName),
                    o = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height,
                    u = s ? 0 : r.sizeDiff.width,
                    a = {
                        width: r.helper.width() - u,
                        height: r.helper.height() - o
                    }, f = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                    l = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                n.animate || this.element.css(e.extend(a, {
                    top: l,
                    left: f
                })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t = this.options,
                n, i, s, o, u;
            u = {
                minWidth: r(t.minWidth) ? t.minWidth : 0,
                maxWidth: r(t.maxWidth) ? t.maxWidth : Infinity,
                minHeight: r(t.minHeight) ? t.minHeight : 0,
                maxHeight: r(t.maxHeight) ? t.maxHeight : Infinity
            };
            if (this._aspectRatio || e) n = u.minHeight * this.aspectRatio, s = u.minWidth / this.aspectRatio, i = u.maxHeight * this.aspectRatio, o = u.maxWidth / this.aspectRatio, n > u.minWidth && (u.minWidth = n), s > u.minHeight && (u.minHeight = s), i < u.maxWidth && (u.maxWidth = i), o < u.maxHeight && (u.maxHeight = o);
            this._vBoundaries = u
        },
        _updateCache: function (e) {
            var t = this.options;
            this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e, t) {
            var n = this.options,
                i = this.position,
                s = this.size,
                o = this.axis;
            return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), o == "sw" && (e.left = i.left + (s.width - e.width), e.top = null), o == "nw" && (e.top = i.top + (s.height - e.height), e.left = i.left + (s.width - e.width)), e
        },
        _respectSize: function (e, t) {
            var n = this.helper,
                i = this._vBoundaries,
                s = this._aspectRatio || t.shiftKey,
                o = this.axis,
                u = r(e.width) && i.maxWidth && i.maxWidth < e.width,
                a = r(e.height) && i.maxHeight && i.maxHeight < e.height,
                f = r(e.width) && i.minWidth && i.minWidth > e.width,
                l = r(e.height) && i.minHeight && i.minHeight > e.height;
            f && (e.width = i.minWidth), l && (e.height = i.minHeight), u && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                p = /sw|nw|w/.test(o),
                d = /nw|ne|n/.test(o);
            f && p && (e.left = c - i.minWidth), u && p && (e.left = c - i.maxWidth), l && d && (e.top = h - i.minHeight), a && d && (e.top = h - i.maxHeight);
            var v = !e.width && !e.height;
            return v && !e.left && e.top ? e.top = null : v && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            var t = this.options;
            if (!this._proportionallyResizeElements.length) return;
            var n = this.helper || this.element;
            for (var r = 0; r < this._proportionallyResizeElements.length; r++) {
                var i = this._proportionallyResizeElements[r];
                if (!this.borderDif) {
                    var s = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                        o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                    this.borderDif = e.map(s, function (e, t) {
                        var n = parseInt(e, 10) || 0,
                            r = parseInt(o[t], 10) || 0;
                        return n + r
                    })
                }
                if (!(!e.browser.msie || !e(n).is(":hidden") && !e(n).parents(":hidden").length)) continue;
                i.css({
                    height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.element,
                n = this.options;
            this.elementOffset = t.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var r = e.browser.msie && e.browser.version < 7,
                    i = r ? 1 : 0,
                    s = r ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + s,
                    height: this.element.outerHeight() + s,
                    position: "absolute",
                    left: this.elementOffset.left - i + "px",
                    top: this.elementOffset.top - i + "px",
                    zIndex: ++n.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (e, t, n) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t, n) {
                var r = this.options,
                    i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function (e, t, n) {
                var r = this.options,
                    i = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + n,
                    height: i.height - n
                }
            },
            s: function (e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function (t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.extend(e.ui.resizable, {
        version: "1.8.16"
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10),
                            position: t.css("position")
                        })
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.parentNode ? i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                s(e)
            }) : s(i.alsoResize)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.originalSize,
                o = r.originalPosition,
                u = {
                    height: r.size.height - s.height || 0,
                    width: r.size.width - s.width || 0,
                    top: r.position.top - o.top || 0,
                    left: r.position.left - o.left || 0
                }, a = function (t, i) {
                    e(t).each(function () {
                        var t = e(this),
                            s = e(this).data("resizable-alsoresize"),
                            o = {}, a = i && i.length ? i : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(a, function (e, t) {
                            var n = (s[t] || 0) + (u[t] || 0);
                            n && n >= 0 && (o[t] = n || null)
                        }), e.browser.opera && /relative/.test(t.css("position")) && (r._revertToRelativePosition = !0, t.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), t.css(o)
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function (e, t) {
                a(e, t)
            }) : a(i.alsoResize)
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.css({
                            position: t.data("resizable-alsoresize").position
                        })
                    })
                };
            r._revertToRelativePosition && (r._revertToRelativePosition = !1, typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function (e) {
                s(e)
            }) : s(i.alsoResize)), e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                u = o && e.ui.hasScroll(s[0], "left") ? 0 : r.sizeDiff.height,
                a = o ? 0 : r.sizeDiff.width,
                f = {
                    width: r.size.width - a,
                    height: r.size.height - u
                }, l = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                c = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
            r.element.animate(e.extend(f, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function () {
                    var n = {
                        width: parseInt(r.element.css("width"), 10),
                        height: parseInt(r.element.css("height"), 10),
                        top: parseInt(r.element.css("top"), 10),
                        left: parseInt(r.element.css("left"), 10)
                    };
                    s && s.length && e(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), r._updateCache(n), r._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function (t, r) {
            var i = e(this).data("resizable"),
                s = i.options,
                o = i.element,
                u = s.containment,
                a = u instanceof e ? u.get(0) : /parent/.test(u) ? o.parent().get(0) : u;
            if (!a) return;
            i.containerElement = e(a);
            if (/document/.test(u) || u == document) i.containerOffset = {
                    left: 0,
                    top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            };
            else {
                var f = e(a),
                    l = [];
                e(["Top", "Right", "Left", "Bottom"]).each(function (e, t) {
                    l[e] = n(f.css("padding" + t))
                }), i.containerOffset = f.offset(), i.containerPosition = f.position(), i.containerSize = {
                    height: f.innerHeight() - l[3],
                    width: f.innerWidth() - l[1]
                };
                var c = i.containerOffset,
                    h = i.containerSize.height,
                    p = i.containerSize.width,
                    d = e.ui.hasScroll(a, "left") ? a.scrollWidth : p,
                    v = e.ui.hasScroll(a) ? a.scrollHeight : h;
                i.parentData = {
                    element: a,
                    left: c.left,
                    top: c.top,
                    width: d,
                    height: v
                }
            }
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.containerSize,
                o = r.containerOffset,
                u = r.size,
                a = r.position,
                f = r._aspectRatio || t.shiftKey,
                l = {
                    top: 0,
                    left: 0
                }, c = r.containerElement;
            c[0] != document && /static/.test(c.css("position")) && (l = o), a.left < (r._helper ? o.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - o.left : r.position.left - l.left), f && (r.size.height = r.size.width / i.aspectRatio), r.position.left = i.helper ? o.left : 0), a.top < (r._helper ? o.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - o.top : r.position.top), f && (r.size.width = r.size.height * i.aspectRatio), r.position.top = r._helper ? o.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top;
            var h = Math.abs((r._helper ? r.offset.left - l.left : r.offset.left - l.left) + r.sizeDiff.width),
                p = Math.abs((r._helper ? r.offset.top - l.top : r.offset.top - o.top) + r.sizeDiff.height),
                d = r.containerElement.get(0) == r.element.parent().get(0),
                v = /relative|absolute/.test(r.containerElement.css("position"));
            d && v && (h -= r.parentData.left), h + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - h, f && (r.size.height = r.size.width / r.aspectRatio)), p + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - p, f && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.position,
                o = r.containerOffset,
                u = r.containerPosition,
                a = r.containerElement,
                f = e(r.helper),
                l = f.offset(),
                c = f.outerWidth() - r.sizeDiff.width,
                h = f.outerHeight() - r.sizeDiff.height;
            r._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: l.left - u.left - o.left,
                width: c,
                height: h
            }), r._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: l.left - u.left - o.left,
                width: c,
                height: h
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.size;
            r.ghost = r.originalElement.clone(), r.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : ""), r.ghost.appendTo(r.helper)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options;
            r.ghost && r.ghost.css({
                position: "relative",
                height: r.size.height,
                width: r.size.width
            })
        },
        stop: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options;
            r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function (t, n) {
            var r = e(this).data("resizable"),
                i = r.options,
                s = r.size,
                o = r.originalSize,
                u = r.originalPosition,
                a = r.axis,
                f = i._aspectRatio || t.shiftKey;
            i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
            var l = Math.round((s.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
                c = Math.round((s.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
            /^(se|s|e)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c) : /^(ne)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c) : /^(sw)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.left = u.left - l) : (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c, r.position.left = u.left - l)
        }
    });
    var n = function (e) {
        return parseInt(e, 10) || 0
    }, r = function (e) {
            return !isNaN(parseInt(e, 10))
        }
}(jQuery),
function (e, t) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n;
            this.refresh = function () {
                n = e(t.options.filter, t.element[0]), n.each(function () {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function () {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function (t) {
            var n = this;
            this.opos = [t.pageX, t.pageY];
            if (this.options.disabled) return;
            var r = this.options;
            this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var r = e.data(this, "selectable-item");
                r.startselected = !0, t.metaKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }), e(t.target).parents().andSelf().each(function () {
                var r = e.data(this, "selectable-item");
                if (r) {
                    var i = !t.metaKey || !r.$element.hasClass("ui-selected");
                    return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", t, {
                        selecting: r.element
                    }) : n._trigger("unselecting", t, {
                        unselecting: r.element
                    }), !1
                }
            })
        },
        _mouseDrag: function (t) {
            var n = this;
            this.dragged = !0;
            if (this.options.disabled) return;
            var r = this.options,
                i = this.opos[0],
                s = this.opos[1],
                o = t.pageX,
                u = t.pageY;
            if (i > o) {
                var a = o;
                o = i, i = a
            }
            if (s > u) {
                var a = u;
                u = s, s = a
            }
            return this.helper.css({
                left: i,
                top: s,
                width: o - i,
                height: u - s
            }), this.selectees.each(function () {
                var a = e.data(this, "selectable-item");
                if (!a || a.element == n.element[0]) return;
                var f = !1;
                r.tolerance == "touch" ? f = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (f = a.left > i && a.right < o && a.top > s && a.bottom < u), f ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
                    selecting: a.element
                }))) : (a.selecting && (t.metaKey && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
                    unselecting: a.element
                }))), a.selected && !t.metaKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: a.element
                })))
            }), !1
        },
        _mouseStop: function (t) {
            var n = this;
            this.dragged = !1;
            var r = this.options;
            return e(".ui-unselecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.extend(e.ui.selectable, {
        version: "1.8.16"
    })
}(jQuery),
function (e, t) {
    e.widget("ui.sortable", e.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData("sortable-item");
            return this
        },
        _setOption: function (t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget()[n ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, n) {
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var r = null,
                i = this,
                s = e(t.target).parents().each(function () {
                    if (e.data(this, "sortable-item") == i) return r = e(this), !1
                });
            e.data(t.target, "sortable-item") == i && (r = e(t.target));
            if (!r) return !1;
            if (this.options.handle && !n) {
                var o = !1;
                e(this.options.handle, r).find("*").andSelf().each(function () {
                    this == t.target && (o = !0)
                });
                if (!o) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, n, r) {
            var i = this.options,
                s = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r) for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, s._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i],
                    o = s.item[0],
                    u = this._intersectsWithPointer(s);
                if (!u) continue;
                if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.ui.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.ui.contains(this.element[0], o) : !0)) {
                    this.direction = u == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s)) break;
                    this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, n) {
            if (!t) return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this,
                    i = r.placeholder.offset();
                r.reverting = !0, e(this.helper).animate({
                    left: i.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function () {
                    r._clear(t)
                })
            } else this._clear(t, n);
            return !1
        },
        cancel: function () {
            var t = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("deactivate", null, t._uiHash(this)), this.containers[n].containerCache.over && (this.containers[n]._trigger("out", null, t._uiHash(this)), this.containers[n].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function () {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function () {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left,
                c = r + f > u && r + f < a && t + l > s && t + l < o;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                i = n && r,
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                i = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var n = this,
                r = [],
                i = [],
                s = this._connectWith();
            if (s && t) for (var o = s.length - 1; o >= 0; o--) {
                    var u = e(s[o]);
                    for (var a = u.length - 1; a >= 0; a--) {
                        var f = e.data(u[a], "sortable");
                        f && f != this && !f.options.disabled && i.push([e.isFunction(f.options.items) ? f.options.items.call(f.element) : e(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f])
                    }
            }
            i.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = i.length - 1; o >= 0; o--) i[o][0].each(function () {
                    r.push(this)
                });
            return e(r)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(sortable-item)");
            for (var t = 0; t < this.items.length; t++) for (var n = 0; n < e.length; n++) e[n] == this.items[t].item[0] && this.items.splice(t, 1)
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = this,
                i = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                ],
                s = this._connectWith();
            if (s) for (var o = s.length - 1; o >= 0; o--) {
                    var u = e(s[o]);
                    for (var a = u.length - 1; a >= 0; a--) {
                        var f = e.data(u[a], "sortable");
                        f && f != this && !f.options.disabled && (i.push([e.isFunction(f.options.items) ? f.options.items.call(f.element[0], t, {
                                item: this.currentItem
                            }) : e(f.options.items, f.element), f]), this.containers.push(f))
                    }
            }
            for (var o = i.length - 1; o >= 0; o--) {
                var l = i[o][1],
                    c = i[o][0];
                for (var a = 0, h = c.length; a < h; a++) {
                    var p = e(c[a]);
                    p.data("sortable-item", l), n.push({
                        item: p,
                        instance: l,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n];
                if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
                var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                t || (r.width = i.outerWidth(), r.height = i.outerHeight());
                var s = i.offset();
                r.left = s.left, r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var n = this.containers.length - 1; n >= 0; n--) {
                    var s = this.containers[n].element.offset();
                    this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (t) {
            var n = t || this,
                r = n.options;
            if (!r.placeholder || r.placeholder.constructor == String) {
                var i = r.placeholder;
                r.placeholder = {
                    element: function () {
                        var t = e(document.createElement(n.currentItem[0].nodeName)).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return i || (t.style.visibility = "hidden"), t
                    },
                    update: function (e, t) {
                        if (i && !r.forcePlaceholderSize) return;
                        t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            n.placeholder = e(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
        },
        _contactContainers: function (t) {
            var n = null,
                r = null;
            for (var i = this.containers.length - 1; i >= 0; i--) {
                if (e.ui.contains(this.currentItem[0], this.containers[i].element[0])) continue;
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (n && e.ui.contains(this.containers[i].element[0], n.element[0])) continue;
                    n = this.containers[i], r = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            if (!n) return;
            if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
            else if (this.currentContainer != this.containers[r]) {
                var s = 1e4,
                    o = null,
                    u = this.positionAbs[this.containers[r].floating ? "left" : "top"];
                for (var a = this.items.length - 1; a >= 0; a--) {
                    if (!e.ui.contains(this.containers[r].element[0], this.items[a].item[0])) continue;
                    var f = this.items[a][this.containers[r].floating ? "left" : "top"];
                    Math.abs(f - u) < s && (s = Math.abs(f - u), o = this.items[a])
                }
                if (!o && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                    top: 0,
                    left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0],
                    r = e(t.containment).offset(),
                    i = e(n).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1,
                i = this.options,
                s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r),
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
                if (n.grid) {
                    var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
                    o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
                    var a = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
                    s = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + n.grid[0] : a - n.grid[0] : a : a
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this,
                s = this.counter;
            window.setTimeout(function () {
                s == i.counter && i.refreshPositions(!r)
            }, 0)
        },
        _clear: function (t, n) {
            this.reverting = !1;
            var r = [],
                i = this;
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS) if (this._storedCSS[s] == "auto" || this._storedCSS[s] == "static") this._storedCSS[s] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function (e) {
                this._trigger("update", e, this._uiHash())
            });
            if (!e.ui.contains(this.element[0], this.currentItem[0])) {
                n || r.push(function (e) {
                    this._trigger("remove", e, this._uiHash())
                });
                for (var s = this.containers.length - 1; s >= 0; s--) e.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !n && (r.push(function (e) {
                        return function (t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[s])), r.push(function (e) {
                        return function (t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[s])))
            }
            for (var s = this.containers.length - 1; s >= 0; s--) n || r.push(function (e) {
                    return function (t) {
                        e._trigger("deactivate", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), this.containers[s].containerCache.over && (r.push(function (e) {
                    return function (t) {
                        e._trigger("out", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var s = 0; s < r.length; s++) r[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (var s = 0; s < r.length; s++) r[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.extend(e.ui.sortable, {
        version: "1.8.16"
    })
}(jQuery),
function (e, t) {
    e.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function () {
            var t = this,
                n = t.options;
            t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
                if (n.disabled) return;
                e(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function () {
                if (n.disabled) return;
                e(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function () {
                if (n.disabled) return;
                e(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                if (n.disabled) return;
                e(this).removeClass("ui-state-focus")
            }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (n.navigation) {
                var r = t.element.find("a").filter(n.navigationFilter).eq(0);
                if (r.length) {
                    var i = r.closest(".ui-accordion-header");
                    i.length ? t.active = i : t.active = r.closest(".ui-accordion-content").prev()
                }
            }
            t.active = t._findActive(t.active || n.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function (e) {
                return t._keydown(e)
            }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(), t.active.length ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), n.event && t.headers.bind(n.event.split(" ").join(".accordion ") + ".accordion", function (e) {
                t._clickHandler.call(t, e, this), e.preventDefault()
            })
        },
        _createIcons: function () {
            var t = this.options;
            t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function () {
            var t = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var n = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (t.autoHeight || t.fillHeight) && n.css("height", ""), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t == "active" && this.activate(n), t == "icons" && (this._destroyIcons(), n && this._createIcons()), t == "disabled" && this.headers.add(this.headers.next())[n ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function (t) {
            if (this.options.disabled || t.altKey || t.ctrlKey) return;
            var n = e.ui.keyCode,
                r = this.headers.length,
                i = this.headers.index(t.target),
                s = !1;
            switch (t.keyCode) {
                case n.RIGHT:
                case n.DOWN:
                    s = this.headers[(i + 1) % r];
                    break;
                case n.LEFT:
                case n.UP:
                    s = this.headers[(i - 1 + r) % r];
                    break;
                case n.SPACE:
                case n.ENTER:
                    this._clickHandler({
                        target: t.target
                    }, t.target), t.preventDefault()
            }
            return s ? (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), !1) : !0
        },
        resize: function () {
            var t = this.options,
                n;
            if (t.fillSpace) {
                if (e.browser.msie) {
                    var r = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                n = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", r), this.headers.each(function () {
                    n -= e(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")
            } else t.autoHeight && (n = 0, this.headers.next().each(function () {
                    n = Math.max(n, e(this).height("").height())
                }).height(n));
            return this
        },
        activate: function (e) {
            this.options.active = e;
            var t = this._findActive(e)[0];
            return this._clickHandler({
                target: t
            }, t), this
        },
        _findActive: function (t) {
            return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function (t, n) {
            var r = this.options;
            if (r.disabled) return;
            if (!t.target) {
                if (!r.collapsible) return;
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), this.active.next().addClass("ui-accordion-content-active");
                var i = this.active.next(),
                    s = {
                        options: r,
                        newHeader: e([]),
                        oldHeader: r.active,
                        newContent: e([]),
                        oldContent: i
                    }, o = this.active = e([]);
                this._toggle(o, i, s);
                return
            }
            var u = e(t.currentTarget || n),
                a = u[0] === this.active[0];
            r.active = r.collapsible && a ? !1 : this.headers.index(u);
            if (this.running || !r.collapsible && a) return;
            var f = this.active,
                o = u.next(),
                i = this.active.next(),
                s = {
                    options: r,
                    newHeader: a && r.collapsible ? e([]) : u,
                    oldHeader: this.active,
                    newContent: a && r.collapsible ? e([]) : o,
                    oldContent: i
                }, l = this.headers.index(this.active[0]) > this.headers.index(u[0]);
            this.active = a ? e([]) : u, this._toggle(o, i, s, a, l), f.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), a || (u.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected), u.next().addClass("ui-accordion-content-active"));
            return
        },
        _toggle: function (t, n, r, i, s) {
            var o = this,
                u = o.options;
            o.toShow = t, o.toHide = n, o.data = r;
            var a = function () {
                if (!o) return;
                return o._completed.apply(o, arguments)
            };
            o._trigger("changestart", null, o.data), o.running = n.size() === 0 ? t.size() : n.size();
            if (u.animated) {
                var f = {};
                u.collapsible && i ? f = {
                    toShow: e([]),
                    toHide: n,
                    complete: a,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                } : f = {
                    toShow: t,
                    toHide: n,
                    complete: a,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                }, u.proxied || (u.proxied = u.animated), u.proxiedDuration || (u.proxiedDuration = u.duration), u.animated = e.isFunction(u.proxied) ? u.proxied(f) : u.proxied, u.duration = e.isFunction(u.proxiedDuration) ? u.proxiedDuration(f) : u.proxiedDuration;
                var l = e.ui.accordion.animations,
                    c = u.duration,
                    h = u.animated;
                h && !l[h] && !e.easing[h] && (h = "slide"), l[h] || (l[h] = function (e) {
                    this.slide(e, {
                        easing: h,
                        duration: c || 700
                    })
                }), l[h](f)
            } else u.collapsible && i ? t.toggle() : (n.hide(), t.show()), a(!0);
            n.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(), t.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function (e) {
            this.running = e ? 0 : --this.running;
            if (this.running) return;
            this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data)
        }
    }), e.extend(e.ui.accordion, {
        version: "1.8.16",
        animations: {
            slide: function (t, n) {
                t = e.extend({
                    easing: "swing",
                    duration: 300
                }, t, n);
                if (!t.toHide.size()) {
                    t.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, t);
                    return
                }
                if (!t.toShow.size()) {
                    t.toHide.animate({
                        height: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide"
                    }, t);
                    return
                }
                var r = t.toShow.css("overflow"),
                    i = 0,
                    s = {}, o = {}, u = ["height", "paddingTop", "paddingBottom"],
                    a, f = t.toShow;
                a = f[0].style.width, f.width(parseInt(f.parent().width(), 10) - parseInt(f.css("paddingLeft"), 10) - parseInt(f.css("paddingRight"), 10) - (parseInt(f.css("borderLeftWidth"), 10) || 0) - (parseInt(f.css("borderRightWidth"), 10) || 0)), e.each(u, function (n, r) {
                    o[r] = "hide";
                    var i = ("" + e.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/);
                    s[r] = {
                        value: i[1],
                        unit: i[2] || "px"
                    }
                }), t.toShow.css({
                    height: 0,
                    overflow: "hidden"
                }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(o, {
                    step: function (e, n) {
                        n.prop == "height" && (i = n.end - n.start === 0 ? 0 : (n.now - n.start) / (n.end - n.start)), t.toShow[0].style[n.prop] = i * s[n.prop].value + s[n.prop].unit
                    },
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
                            width: a,
                            overflow: r
                        }), t.complete()
                    }
                })
            },
            bounceslide: function (e) {
                this.slide(e, {
                    easing: e.down ? "easeOutBounce" : "swing",
                    duration: e.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function (e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var t = this,
                n = this.element[0].ownerDocument,
                r;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (n) {
                if (t.options.disabled || t.element.propAttr("readOnly")) return;
                r = !1;
                var i = e.ui.keyCode;
                switch (n.keyCode) {
                    case i.PAGE_UP:
                        t._move("previousPage", n);
                        break;
                    case i.PAGE_DOWN:
                        t._move("nextPage", n);
                        break;
                    case i.UP:
                        t._move("previous", n), n.preventDefault();
                        break;
                    case i.DOWN:
                        t._move("next", n), n.preventDefault();
                        break;
                    case i.ENTER:
                    case i.NUMPAD_ENTER:
                        t.menu.active && (r = !0, n.preventDefault());
                    case i.TAB:
                        if (!t.menu.active) return;
                        t.menu.select(n);
                        break;
                    case i.ESCAPE:
                        t.element.val(t.term), t.close(n);
                        break;
                    default:
                        clearTimeout(t.searching), t.searching = setTimeout(function () {
                            t.term != t.element.val() && (t.selectedItem = null, t.search(null, n))
                        }, t.options.delay)
                }
            }).bind("keypress.autocomplete", function (e) {
                r && (r = !1, e.preventDefault())
            }).bind("focus.autocomplete", function () {
                if (t.options.disabled) return;
                t.selectedItem = null, t.previous = t.element.val()
            }).bind("blur.autocomplete", function (e) {
                if (t.options.disabled) return;
                clearTimeout(t.searching), t.closing = setTimeout(function () {
                    t.close(e), t._change(e)
                }, 150)
            }), this._initSource(), this.response = function () {
                return t._response.apply(t, arguments)
            }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function (n) {
                var r = t.menu.element[0];
                e(n.target).closest(".ui-menu-item").length || setTimeout(function () {
                    e(document).one("mousedown", function (n) {
                        n.target !== t.element[0] && n.target !== r && !e.ui.contains(r, n.target) && t.close()
                    })
                }, 1), setTimeout(function () {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function (e, n) {
                    var r = n.item.data("item.autocomplete");
                    !1 !== t._trigger("focus", e, {
                        item: r
                    }) && /^key/.test(e.originalEvent.type) && t.element.val(r.value)
                },
                selected: function (e, r) {
                    var i = r.item.data("item.autocomplete"),
                        s = t.previous;
                    t.element[0] !== n.activeElement && (t.element.focus(), t.previous = s, setTimeout(function () {
                        t.previous = s, t.selectedItem = i
                    }, 1)), !1 !== t._trigger("select", e, {
                        item: i
                    }) && t.element.val(i.value), t.term = t.element.val(), t.close(e), t.selectedItem = i
                },
                blur: function (e, n) {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "source" && this._initSource(), t === "appendTo" && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]), t === "disabled" && n && this.xhr && this.xhr.abort()
        },
        _initSource: function () {
            var t = this,
                r, i;
            e.isArray(this.options.source) ? (r = this.options.source, this.source = function (t, n) {
                n(e.ui.autocomplete.filter(r, t.term))
            }) : typeof this.options.source == "string" ? (i = this.options.source, this.source = function (r, s) {
                t.xhr && t.xhr.abort(), t.xhr = e.ajax({
                    url: i,
                    data: r,
                    dataType: "json",
                    autocompleteRequest: ++n,
                    success: function (e, t) {
                        this.autocompleteRequest === n && s(e)
                    },
                    error: function () {
                        this.autocompleteRequest === n && s([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function (e, t) {
            e = e != null ? e : this.element.val(), this.term = this.element.val();
            if (e.length < this.options.minLength) return this.close(t);
            clearTimeout(this.closing);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this.response)
        },
        _response: function (e) {
            !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.deactivate(), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function (t, n) {
            var r = this;
            e.each(n, function (e, n) {
                r._renderItem(t, n)
            })
        },
        _renderItem: function (t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function (e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e)) {
                this.element.val(this.term), this.menu.deactivate();
                return
            }
            this.menu[e](t)
        },
        widget: function () {
            return this.menu.element
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function (e) {
                return r.test(e.label || e.value || e)
            })
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.menu", {
        _create: function () {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (n) {
                if (!e(n.target).closest(".ui-menu-item a").length) return;
                n.preventDefault(), t.select(n)
            }), this.refresh()
        },
        refresh: function () {
            var t = this,
                n = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            n.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function () {
                t.deactivate()
            })
        },
        activate: function (e, t) {
            this.deactivate();
            if (this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top,
                    r = this.element.scrollTop(),
                    i = this.element.height();
                n < 0 ? this.element.scrollTop(r + n) : n >= i && this.element.scrollTop(r + n - i + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function () {
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null
        },
        next: function (e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, t, n) {
            if (!this.active) {
                this.activate(n, this.element.children(t));
                return
            }
            var r = this.active[e + "All"](".ui-menu-item").eq(0);
            r.length ? this.activate(n, r) : this.activate(n, this.element.children(t))
        },
        nextPage: function (t) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(t, this.element.children(".ui-menu-item:first"));
                    return
                }
                var n = this.active.offset().top,
                    r = this.element.height(),
                    i = this.element.children(".ui-menu-item").filter(function () {
                        var t = e(this).offset().top - n - r + e(this).height();
                        return t < 10 && t > -10
                    });
                i.length || (i = this.element.children(".ui-menu-item:last")), this.activate(t, i)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (t) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(t, this.element.children(".ui-menu-item:last"));
                    return
                }
                var n = this.active.offset().top,
                    r = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function () {
                    var t = e(this).offset().top - n + r - e(this).height();
                    return t < 10 && t > -10
                }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(t, result)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery),
function (e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        u = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function () {
            var t = e(this).find(":ui-button");
            setTimeout(function () {
                t.button("refresh")
            }, 1)
        }, l = function (t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset.button").bind("reset.button", f), typeof this.options.disabled != "boolean" && (this.options.disabled = this.element.propAttr("disabled")), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var t = this,
                u = this.options,
                a = this.type === "checkbox" || this.type === "radio",
                c = "ui-state-hover" + (a ? "" : " ui-state-active"),
                h = "ui-state-focus";
            u.label === null && (u.label = this.buttonElement.html()), this.element.is(":disabled") && (u.disabled = !0), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter.button", function () {
                if (u.disabled) return;
                e(this).addClass("ui-state-hover"), this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave.button", function () {
                if (u.disabled) return;
                e(this).removeClass(c)
            }).bind("click.button", function (e) {
                u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus.button", function () {
                t.buttonElement.addClass(h)
            }).bind("blur.button", function () {
                t.buttonElement.removeClass(h)
            }), a && (this.element.bind("change.button", function () {
                if (s) return;
                t.refresh()
            }), this.buttonElement.bind("mousedown.button", function (e) {
                if (u.disabled) return;
                s = !1, r = e.pageX, i = e.pageY
            }).bind("mouseup.button", function (e) {
                if (u.disabled) return;
                if (r !== e.pageX || i !== e.pageY) s = !0
            })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function () {
                if (u.disabled || s) return !1;
                e(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function () {
                if (u.disabled || s) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown.button", function () {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"), n = this, e(document).one("mouseup", function () {
                    n = null
                })
            }).bind("mouseup.button", function () {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown.button", function (t) {
                if (u.disabled) return !1;
                (t.keyCode == e.ui.keyCode.SPACE || t.keyCode == e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup.button", function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", u.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
            if (this.type === "checkbox" || this.type === "radio") {
                var e = this.element.parents().filter(":last"),
                    t = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible");
                var n = this.element.is(":checked");
                n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", n)
            } else this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments);
            if (t === "disabled") {
                n ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a),
                n = e("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", n))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, n) {
            t === "disabled" && this.buttons.button("option", t, n), e.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function () {
            var t = this.element.css("direction") === "ltr";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(t ? "ui-corner-right" : "ui-corner-left").end().end()
        },
        destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function (e, t) {
    var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        r = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        }, i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        }, s = e.attrFn || {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
            click: !0
        };
    e.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function (t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var t = this,
                r = t.options,
                i = r.title || "&#160;",
                s = e.ui.dialog.getTitleId(t.element),
                o = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass(n + r.dialogClass).css({
                    zIndex: r.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (n) {
                    r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": s
                }).mousedown(function (e) {
                    t.moveToTop(!1, e)
                }),
                u = t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(o),
                a = (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(o),
                f = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                    f.addClass("ui-state-hover")
                }, function () {
                    f.removeClass("ui-state-hover")
                }).focus(function () {
                    f.addClass("ui-state-focus")
                }).blur(function () {
                    f.removeClass("ui-state-focus")
                }).click(function (e) {
                    return t.close(e), !1
                }).appendTo(a),
                l = (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(f),
                c = e("<span></span>").addClass("ui-dialog-title").attr("id", s).html(i).prependTo(a);
            e.isFunction(r.beforeclose) && !e.isFunction(r.beforeClose) && (r.beforeClose = r.beforeclose), a.find("*").add(a).disableSelection(), r.draggable && e.fn.draggable && t._makeDraggable(), r.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(r.buttons), t._isOpen = !1, e.fn.bgiframe && o.bgiframe()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        destroy: function () {
            var e = this;
            return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (t) {
            var n = this,
                r, i;
            if (!1 === n._trigger("beforeClose", t)) return;
            return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function () {
                n._trigger("close", t)
            }) : (n.uiDialog.hide(), n._trigger("close", t)), e.ui.dialog.overlay.resize(), n.options.modal && (r = 0, e(".ui-dialog").each(function () {
                this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
            }), e.ui.dialog.maxZ = r), n
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (t, n) {
            var r = this,
                i = r.options,
                s;
            return i.modal && !t || !i.stack && !i.modal ? r._trigger("focus", n) : (i.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = i.zIndex), r.overlay && (e.ui.dialog.maxZ += 1, r.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), s = {
                scrollTop: r.element.scrollTop(),
                scrollLeft: r.element.scrollLeft()
            }, e.ui.dialog.maxZ += 1, r.uiDialog.css("z-index", e.ui.dialog.maxZ), r.element.attr(s), r._trigger("focus", n), r)
        },
        open: function () {
            if (this._isOpen) return;
            var t = this,
                n = t.options,
                r = t.uiDialog;
            return t.overlay = n.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(n.position), r.show(n.show), t.moveToTop(!0), n.modal && r.bind("keypress.ui-dialog", function (t) {
                if (t.keyCode !== e.ui.keyCode.TAB) return;
                var n = e(":tabbable", this),
                    r = n.filter(":first"),
                    i = n.filter(":last");
                if (t.target === i[0] && !t.shiftKey) return r.focus(1), !1;
                if (t.target === r[0] && t.shiftKey) return i.focus(1), !1
            }), e(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
        },
        _createButtons: function (t) {
            var n = this,
                r = !1,
                i = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                o = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(i);
            n.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof t == "object" && t !== null && e.each(t, function () {
                return !(r = !0)
            }), r && (e.each(t, function (t, r) {
                r = e.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                var i = e('<button type="button"></button>').click(function () {
                    r.click.apply(n.element[0], arguments)
                }).appendTo(o);
                e.each(r, function (e, t) {
                    if (e === "click") return;
                    e in s ? i[e](t) : i.attr(e, t)
                }), e.fn.button && i.button()
            }), i.appendTo(n.uiDialog))
        },
        _makeDraggable: function () {
            function s(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var t = this,
                n = t.options,
                r = e(document),
                i;
            t.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (r, o) {
                    i = n.height === "auto" ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), t._trigger("dragStart", r, s(o))
                },
                drag: function (e, n) {
                    t._trigger("drag", e, s(n))
                },
                stop: function (o, u) {
                    n.position = [u.position.left - r.scrollLeft(), u.position.top - r.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(i), t._trigger("dragStop", o, s(u)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (n) {
            function u(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var r = this,
                i = r.options,
                s = r.uiDialog.css("position"),
                o = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
            r.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: r.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: r._minHeight(),
                handles: o,
                start: function (t, n) {
                    e(this).addClass("ui-dialog-resizing"), r._trigger("resizeStart", t, u(n))
                },
                resize: function (e, t) {
                    r._trigger("resize", e, u(t))
                },
                stop: function (t, n) {
                    e(this).removeClass("ui-dialog-resizing"), i.height = e(this).height(), i.width = e(this).width(), r._trigger("resizeStop", t, u(n)), e.ui.dialog.overlay.resize()
                }
            }).css("position", s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function (t) {
            var n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                        +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                    }), t = {
                        my: n.join(" "),
                        at: n.join(" "),
                        offset: r.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(e.extend({
                of: window
            }, t)), i || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var n = this,
                s = {}, o = !1;
            e.each(t, function (e, t) {
                n._setOption(e, t), e in r && (o = !0), e in i && (s[e] = t)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (t, r) {
            var i = this,
                s = i.uiDialog;
            switch (t) {
                case "beforeclose":
                    t = "beforeClose";
                    break;
                case "buttons":
                    i._createButtons(r);
                    break;
                case "closeText":
                    i.uiDialogTitlebarCloseText.text("" + r);
                    break;
                case "dialogClass":
                    s.removeClass(i.options.dialogClass).addClass(n + r);
                    break;
                case "disabled":
                    r ? s.addClass("ui-dialog-disabled") : s.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    var o = s.is(":data(draggable)");
                    o && !r && s.draggable("destroy"), !o && r && i._makeDraggable();
                    break;
                case "position":
                    i._position(r);
                    break;
                case "resizable":
                    var u = s.is(":data(resizable)");
                    u && !r && s.resizable("destroy"), u && typeof r == "string" && s.resizable("option", "handles", r), !u && r !== !1 && i._makeResizable(r);
                    break;
                case "title":
                    e(".ui-dialog-title", i.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            e.Widget.prototype._setOption.apply(i, arguments)
        },
        _size: function () {
            var t = this.options,
                n, r, i = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), t.minWidth > t.width && (t.width = t.minWidth), n = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).height(), r = Math.max(0, t.minHeight - n);
            if (t.height === "auto") if (e.support.minHeight) this.element.css({
                        minHeight: r,
                        height: "auto"
                    });
                else {
                    this.uiDialog.show();
                    var s = this.element.css("height", "auto").height();
                    i || this.uiDialog.hide(), this.element.height(Math.max(s, r))
                } else this.element.height(Math.max(t.height - n, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        version: "1.8.16",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
            var t = e.attr("id");
            return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
        },
        overlay: function (t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function (t) {
            this.instances.length === 0 && (setTimeout(function () {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), e(document).bind("keydown.dialog-overlay", function (n) {
                t.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
            }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
        },
        destroy: function (t) {
            var n = e.inArray(t, this.instances);
            n != -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.remove();
            var r = 0;
            e.each(this.instances, function () {
                r = Math.max(r, this.css("z-index"))
            }), this.maxZ = r
        },
        height: function () {
            var t, n;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function () {
            var t, n;
            return e.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function () {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function () {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function (e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var t = this,
                r = this.options,
                i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = r.values && r.values.length || 1,
                u = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (r.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), r.range && (r.range === !0 && (r.values || (r.values = [this._valueMin(), this._valueMin()]), r.values.length && r.values.length !== 2 && (r.values = [r.values[0], r.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : "")));
            for (var a = i.length; a < o; a += 1) u.push(s);
            this.handles = i.add(e(u.join("")).appendTo(t.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).hover(function () {
                r.disabled || e(this).addClass("ui-state-hover")
            }, function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                r.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("index.ui-slider-handle", t)
            }), this.handles.keydown(function (r) {
                var i = !0,
                    s = e(this).data("index.ui-slider-handle"),
                    o, u, a, f;
                if (t.options.disabled) return;
                switch (r.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        i = !1;
                        if (!t._keySliding) {
                            t._keySliding = !0, e(this).addClass("ui-state-active"), o = t._start(r, s);
                            if (o === !1) return
                        }
                }
                f = t.options.step, t.options.values && t.options.values.length ? u = a = t.values(s) : u = a = t.value();
                switch (r.keyCode) {
                    case e.ui.keyCode.HOME:
                        a = t._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        a = t._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        a = t._trimAlignValue(u + (t._valueMax() - t._valueMin()) / n);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        a = t._trimAlignValue(u - (t._valueMax() - t._valueMin()) / n);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (u === t._valueMax()) return;
                        a = t._trimAlignValue(u + f);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (u === t._valueMin()) return;
                        a = t._trimAlignValue(u - f)
                }
                return t._slide(r, s, a), i
            }).keyup(function (n) {
                var r = e(this).data("index.ui-slider-handle");
                t._keySliding && (t._keySliding = !1, t._stop(n, r), t._change(n, r), e(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function () {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n = this.options,
                r, i, s, o, u, a, f, l, c;
            return n.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), r = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(r), s = this._valueMax() - this._valueMin() + 1, u = this, this.handles.each(function (t) {
                var n = Math.abs(i - u.values(t));
                s > n && (s = n, o = e(this), a = t)
            }), n.range === !0 && this.values(1) === n.min && (a += 1, o = e(this.handles[a])), f = this._start(t, a), f === !1 ? !1 : (this._mouseSliding = !0, u._handleIndex = a, o.addClass("ui-state-active").focus(), l = o.offset(), c = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - l.left - o.width() / 2,
                top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, a, i), this._animateOff = !0, !0))
        },
        _mouseStart: function (e) {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function (e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function (t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return
            }
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function (t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "disabled":
                    n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (r = 0; r < i; r += 1) this._change(null, r);
                    this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },
        _values: function (e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
            n = this.options.values.slice();
            for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
            return n
        },
        _trimAlignValue: function (e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t = this.options.range,
                n = this.options,
                r = this,
                i = this._animateOff ? !1 : n.animate,
                s, o = {}, u, a, f, l;
            this.options.values && this.options.values.length ? this.handles.each(function (t, a) {
                s = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", e(this).stop(1, 1)[i ? "animate" : "css"](o, n.animate), r.options.range === !0 && (r.orientation === "horizontal" ? (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    left: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    width: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                })) : (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    bottom: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    height: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                }))), u = s
            }) : (a = this.value(), f = this._valueMin(), l = this._valueMax(), s = l !== f ? (a - f) / (l - f) * 100 : 0, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", this.handle.stop(1, 1)[i ? "animate" : "css"](o, n.animate), t === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                width: s + "%"
            }, n.animate), t === "max" && this.orientation === "horizontal" && this.range[i ? "animate" : "css"]({
                width: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }), t === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                height: s + "%"
            }, n.animate), t === "max" && this.orientation === "vertical" && this.range[i ? "animate" : "css"]({
                height: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }))
        }
    }), e.extend(e.ui.slider, {
        version: "1.8.16"
    })
}(jQuery),
function (e, n) {
    function s() {
        return ++r
    }
    function o() {
        return ++i
    }
    var r = 0,
        i = 0;
    e.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function () {
            this._tabify(!0)
        },
        _setOption: function (e, t) {
            if (e == "selected") {
                if (this.options.collapsible && t == this.options.selected) return;
                this.select(t)
            } else this.options[e] = t, this._tabify()
        },
        _tabId: function (e) {
            return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + s()
        },
        _sanitizeSelector: function (e) {
            return e.replace(/:/g, "\\:")
        },
        _cookie: function () {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + o());
            return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
        },
        _ui: function (e, t) {
            return {
                tab: e,
                panel: t,
                index: this.anchors.index(e)
            }
        },
        _cleanup: function () {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
                var t = e(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (t) {
            function h(t, n) {
                t.css("display", ""), !e.support.opacity && n.opacity && t[0].style.removeAttribute("filter")
            }
            var r = this,
                i = this.options,
                s = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
                return e("a", this)[0]
            }), this.panels = e([]), this.anchors.each(function (t, n) {
                var o = e(n).attr("href"),
                    u = o.split("#")[0],
                    a;
                u && (u === location.toString().split("#")[0] || (a = e("base")[0]) && u === a.href) && (o = n.hash, n.href = o);
                if (s.test(o)) r.panels = r.panels.add(r.element.find(r._sanitizeSelector(o)));
                else if (o && o !== "#") {
                    e.data(n, "href.tabs", o), e.data(n, "load.tabs", o.replace(/#.*$/, ""));
                    var f = r._tabId(n);
                    n.href = "#" + f;
                    var l = r.element.find("#" + f);
                    l.length || (l = e(i.panelTemplate).attr("id", f).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(r.panels[t - 1] || r.list), l.data("destroy.tabs", !0)), r.panels = r.panels.add(l)
                } else i.disabled.push(t)
            }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), i.selected === n ? (location.hash && this.anchors.each(function (e, t) {
                if (t.hash == location.hash) return i.selected = e, !1
            }), typeof i.selected != "number" && i.cookie && (i.selected = parseInt(r._cookie(), 10)), typeof i.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (i.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), i.selected = i.selected || (this.lis.length ? 0 : -1)) : i.selected === null && (i.selected = -1), i.selected = i.selected >= 0 && this.anchors[i.selected] || i.selected < 0 ? i.selected : 0, i.disabled = e.unique(i.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function (e, t) {
                return r.lis.index(e)
            }))).sort(), e.inArray(i.selected, i.disabled) != -1 && i.disabled.splice(e.inArray(i.selected, i.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), i.selected >= 0 && this.anchors.length && (r.element.find(r._sanitizeSelector(r.anchors[i.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(i.selected).addClass("ui-tabs-selected ui-state-active"), r.element.queue("tabs", function () {
                r._trigger("show", null, r._ui(r.anchors[i.selected], r.element.find(r._sanitizeSelector(r.anchors[i.selected].hash))[0]))
            }), this.load(i.selected)), e(window).bind("unload", function () {
                r.lis.add(r.anchors).unbind(".tabs"), r.lis = r.anchors = r.panels = null
            })) : i.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[i.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), i.cookie && this._cookie(i.selected, i.cookie);
            for (var o = 0, u; u = this.lis[o]; o++) e(u)[e.inArray(o, i.disabled) != -1 && !e(u).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            i.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
            if (i.event !== "mouseover") {
                var a = function (e, t) {
                    t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
                }, f = function (e, t) {
                        t.removeClass("ui-state-" + e)
                    };
                this.lis.bind("mouseover.tabs", function () {
                    a("hover", e(this))
                }), this.lis.bind("mouseout.tabs", function () {
                    f("hover", e(this))
                }), this.anchors.bind("focus.tabs", function () {
                    a("focus", e(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function () {
                    f("focus", e(this).closest("li"))
                })
            }
            var l, c;
            i.fx && (e.isArray(i.fx) ? (l = i.fx[0], c = i.fx[1]) : l = c = i.fx);
            var p = c ? function (t, n) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.hide().removeClass("ui-tabs-hide").animate(c, c.duration || "normal", function () {
                        h(n, c), r._trigger("show", null, r._ui(t, n[0]))
                    })
                } : function (t, n) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.removeClass("ui-tabs-hide"), r._trigger("show", null, r._ui(t, n[0]))
                }, d = l ? function (e, t) {
                    t.animate(l, l.duration || "normal", function () {
                        r.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), h(t, l), r.element.dequeue("tabs")
                    })
                } : function (e, t, n) {
                    r.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), r.element.dequeue("tabs")
                };
            this.anchors.bind(i.event + ".tabs", function () {
                var t = this,
                    n = e(t).closest("li"),
                    s = r.panels.filter(":not(.ui-tabs-hide)"),
                    o = r.element.find(r._sanitizeSelector(t.hash));
                if (n.hasClass("ui-tabs-selected") && !i.collapsible || n.hasClass("ui-state-disabled") || n.hasClass("ui-state-processing") || r.panels.filter(":animated").length || r._trigger("select", null, r._ui(this, o[0])) === !1) return this.blur(), !1;
                i.selected = r.anchors.index(this), r.abort();
                if (i.collapsible) {
                    if (n.hasClass("ui-tabs-selected")) return i.selected = -1, i.cookie && r._cookie(i.selected, i.cookie), r.element.queue("tabs", function () {
                            d(t, s)
                        }).dequeue("tabs"), this.blur(), !1;
                    if (!s.length) return i.cookie && r._cookie(i.selected, i.cookie), r.element.queue("tabs", function () {
                            p(t, o)
                        }), r.load(r.anchors.index(this)), this.blur(), !1
                }
                i.cookie && r._cookie(i.selected, i.cookie);
                if (!o.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                s.length && r.element.queue("tabs", function () {
                    d(t, s)
                }), r.element.queue("tabs", function () {
                    p(t, o)
                }), r.load(r.anchors.index(this)), e.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function () {
                return !1
            })
        },
        _getIndex: function (e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))), e
        },
        destroy: function () {
            var t = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
                var t = e.data(this, "href.tabs");
                t && (this.href = t);
                var n = e(this).unbind(".tabs");
                e.each(["href", "load", "cache"], function (e, t) {
                    n.removeData(t + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function () {
                e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
            }), t.cookie && this._cookie(null, t.cookie), this
        },
        add: function (t, r, i) {
            i === n && (i = this.anchors.length);
            var s = this,
                o = this.options,
                u = e(o.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, r)),
                a = t.indexOf("#") ? this._tabId(e("a", u)[0]) : t.replace("#", "");
            u.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var f = s.element.find("#" + a);
            return f.length || (f = e(o.panelTemplate).attr("id", a).data("destroy.tabs", !0)), f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= this.lis.length ? (u.appendTo(this.list), f.appendTo(this.list[0].parentNode)) : (u.insertBefore(this.lis[i]), f.insertBefore(this.panels[i])), o.disabled = e.map(o.disabled, function (e, t) {
                return e >= i ? ++e : e
            }), this._tabify(), this.anchors.length == 1 && (o.selected = 0, u.addClass("ui-tabs-selected ui-state-active"), f.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
                s._trigger("show", null, s._ui(s.anchors[0], s.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var n = this.options,
                r = this.lis.eq(t).remove(),
                i = this.panels.eq(t).remove();
            return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function (e, n) {
                return e != t
            }), function (e, n) {
                return e >= t ? --e : e
            }), this._tabify(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
        },
        enable: function (t) {
            t = this._getIndex(t);
            var n = this.options;
            if (e.inArray(t, n.disabled) == -1) return;
            return this.lis.eq(t).removeClass("ui-state-disabled"), n.disabled = e.grep(n.disabled, function (e, n) {
                return e != t
            }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
        },
        disable: function (e) {
            e = this._getIndex(e);
            var t = this,
                n = this.options;
            return e != n.selected && (this.lis.eq(e).addClass("ui-state-disabled"), n.disabled.push(e), n.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
        },
        select: function (e) {
            e = this._getIndex(e);
            if (e == -1) {
                if (!this.options.collapsible || this.options.selected == -1) return this;
                e = this.options.selected
            }
            return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
        },
        load: function (t) {
            t = this._getIndex(t);
            var n = this,
                r = this.options,
                i = this.anchors.eq(t)[0],
                s = e.data(i, "load.tabs");
            this.abort();
            if (!s || this.element.queue("tabs").length !== 0 && e.data(i, "cache.tabs")) {
                this.element.dequeue("tabs");
                return
            }
            this.lis.eq(t).addClass("ui-state-processing");
            if (r.spinner) {
                var o = e("span", i);
                o.data("label.tabs", o.html()).html(r.spinner)
            }
            return this.xhr = e.ajax(e.extend({}, r.ajaxOptions, {
                url: s,
                success: function (s, o) {
                    n.element.find(n._sanitizeSelector(i.hash)).html(s), n._cleanup(), r.cache && e.data(i, "cache.tabs", !0), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                    try {
                        r.ajaxOptions.success(s, o)
                    } catch (u) {}
                },
                error: function (e, s, o) {
                    n._cleanup(), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                    try {
                        r.ajaxOptions.error(e, s, t, i)
                    } catch (o) {}
                }
            })), n.element.dequeue("tabs"), this
        },
        abort: function () {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function (e, t) {
            return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
        },
        length: function () {
            return this.anchors.length
        }
    }), e.extend(e.ui.tabs, {
        version: "1.8.16"
    }), e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, n) {
            var r = this,
                i = this.options,
                s = r._rotate || (r._rotate = function (t) {
                    clearTimeout(r.rotation), r.rotation = setTimeout(function () {
                        var e = i.selected;
                        r.select(++e < r.anchors.length ? e : 0)
                    }, e), t && t.stopPropagation()
                }),
                o = r._unrotate || (r._unrotate = n ? function (e) {
                    t = i.selected, s()
                } : function (e) {
                    e.clientX && r.rotate(null)
                });
            return e ? (this.element.bind("tabsshow", s), this.anchors.bind(i.event + ".tabs", o), s()) : (clearTimeout(r.rotation), this.element.unbind("tabsshow", s), this.anchors.unbind(i.event + ".tabs", o), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery),
function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.bind("mouseout", function (e) {
            var n = $(e.target).closest(t);
            if (!n.length) return;
            n.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (n) {
            var r = $(n.target).closest(t);
            if ($.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || !r.length) return;
            r.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), r.addClass("ui-state-hover"), r.hasClass("ui-datepicker-prev") && r.addClass("ui-datepicker-prev-hover"), r.hasClass("ui-datepicker-next") && r.addClass("ui-datepicker-next-hover")
        })
    }
    function extendRemove(e, t) {
        $.extend(e, t);
        for (var n in t) if (t[n] == null || t[n] == undefined) e[n] = t[n];
        return e
    }
    function isArray(e) {
        return e && ($.browser.safari && typeof e == "object" && e.length || e.constructor && e.constructor.toString().match(/\Array\(\)/))
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.8.16"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function (e, t) {
            var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, t) {
            var n = $(e);
            t.append = $([]), t.trigger = $([]);
            if (n.hasClass(this.markerClassName)) return;
            this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
        },
        _attachments: function (e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
            var i = this._get(t, "showOn");
            (i == "focus" || i == "both") && e.focus(this._showDatepicker);
            if (i == "button" || i == "both") {
                var s = this._get(t, "buttonText"),
                    o = this._get(t, "buttonImage");
                t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function () {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function (e) {
                        var t = 0,
                            n = 0;
                        for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                        return n
                    };
                    t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function (e, t) {
            var n = $(e);
            if (n.hasClass(this.markerClassName)) return;
            n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function (e, t, n, r, i) {
            var s = this._dialogInst;
            if (!s) {
                this.uuid += 1;
                var o = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
            }
            extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
            if (!this._pos) {
                var u = document.documentElement.clientWidth,
                    a = document.documentElement.clientHeight,
                    f = document.documentElement.scrollLeft || document.body.scrollLeft,
                    l = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
        },
        _destroyDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            $.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
        },
        _enableDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            })
        },
        _disableDatepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return $.data(e, PROP_NAME)
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n);
            if (r) {
                this._curInst == r && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0),
                    o = this._getMinMaxDate(r, "min"),
                    u = this._getMinMaxDate(r, "max");
                extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
            }
        },
        _changeDatepicker: function (e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function (e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function (e) {
            var t = $.datepicker._getInst(e.target),
                n = !0,
                r = t.dpDiv.is(".ui-datepicker-rtl");
            t._keyEvent = !0;
            if ($.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), n = !1;
                        break;
                    case 13:
                        var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                        i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
                        var s = $.datepicker._get(t, "onSelect");
                        if (s) {
                            var o = $.datepicker._formatDate(t);
                            s.apply(t.input ? t.input[0] : null, [o, t])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        n = !1
            } else e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var t = $.datepicker._getInst(e.target);
            if ($.datepicker._get(t, "constrainInput")) {
                var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
            }
        },
        _doKeyUp: function (e) {
            var t = $.datepicker._getInst(e.target);
            if (t.input.val() != t.lastVal) try {
                    var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                    n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
            } catch (e) {
                $.datepicker.log(e)
            }
            return !0
        },
        _showDatepicker: function (
            e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
            if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return;
            var t = $.datepicker._getInst(e);
            $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._datepickerShowing && $.datepicker._triggerOnClose($.datepicker._curInst), $.datepicker._curInst.dpDiv.stop(!0, !0));
            var n = $.datepicker._get(t, "beforeShow"),
                r = n ? n.apply(e, [e, t]) : {};
            if (r === !1) return;
            extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
            var i = !1;
            $(e).parents().each(function () {
                return i |= $(this).css("position") == "fixed", !i
            }), i && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
            var s = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px"
            });
            if (!t.inline) {
                var o = $.datepicker._get(t, "showAnim"),
                    u = $.datepicker._get(t, "duration"),
                    a = function () {
                        var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                        if ( !! e.length) {
                            var n = $.datepicker._getBorders(t.dpDiv);
                            e.css({
                                left: -n[0],
                                top: -n[1],
                                width: t.dpDiv.outerWidth(),
                                height: t.dpDiv.outerHeight()
                            })
                        }
                    };
                t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[o] ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
            }
        },
        _updateDatepicker: function (e) {
            var t = this;
            t.maxRows = 4;
            var n = $.datepicker._getBorders(e.dpDiv);
            instActive = e, e.dpDiv.empty().append(this._generateHTML(e));
            var r = e.dpDiv.find("iframe.ui-datepicker-cover");
            !r.length || r.css({
                left: -n[0],
                top: -n[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i = this._getNumberOfMonths(e),
                s = i[1],
                o = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), e.dpDiv[(i[0] != 1 || i[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
            if (e.yearshtml) {
                var u = e.yearshtml;
                setTimeout(function () {
                    u === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), u = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function (e, t, n) {
            var r = e.dpDiv.outerWidth(),
                i = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + $(document).scrollLeft(),
                a = document.documentElement.clientHeight + $(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function (e) {
            var t = this._getInst(e),
                n = this._get(t, "isRTL");
            while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
            var r = $(e).offset();
            return [r.left, r.top]
        },
        _triggerOnClose: function (e) {
            var t = this._get(e, "onClose");
            t && t.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e])
        },
        _hideDatepicker: function (e) {
            var t = this._curInst;
            if (!t || e && t != $.data(e, PROP_NAME)) return;
            if (this._datepickerShowing) {
                var n = this._get(t, "showAnim"),
                    r = this._get(t, "duration"),
                    i = function () {
                        $.datepicker._tidyDialog(t), this._curInst = null
                    };
                $.effects && $.effects[n] ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), $.datepicker._triggerOnClose(t), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (!$.datepicker._curInst) return;
            var t = $(e.target);
            t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.hasClass($.datepicker._triggerClass) && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) && $.datepicker._hideDatepicker()
        },
        _adjustDate: function (e, t, n) {
            var r = $(e),
                i = this._getInst(r[0]);
            if (this._isDisabledDatepicker(r[0])) return;
            this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
        },
        _gotoToday: function (e) {
            var t = $(e),
                n = this._getInst(t[0]);
            if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
            else {
                var r = new Date;
                n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
            }
            this._notifyChange(n), this._adjustDate(t)
        },
        _selectMonthYear: function (e, t, n) {
            var r = $(e),
                i = this._getInst(r[0]);
            i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
        },
        _selectDay: function (e, t, n, r) {
            var i = $(e);
            if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) return;
            var s = this._getInst(i[0]);
            s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
        },
        _clearDate: function (e) {
            var t = $(e),
                n = this._getInst(t[0]);
            this._selectDate(t, "")
        },
        _selectDate: function (e, t) {
            var n = $(e),
                r = this._getInst(n[0]);
            t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
            var i = this._get(r, "onSelect");
            i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var t = this._get(e, "altField");
            if (t) {
                var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    r = this._getDate(e),
                    i = this.formatDate(n, r, this._getFormatConfig(e));
                $(t).each(function () {
                    $(this).val(i)
                })
            }
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function (e) {
            var t = new Date(e.getTime());
            t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var n = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
        },
        parseDate: function (e, t, n) {
            if (e == null || t == null) throw "Invalid arguments";
            t = typeof t == "object" ? t.toString() : t + "";
            if (t == "") return null;
            var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
            var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = -1,
                f = -1,
                l = -1,
                c = -1,
                h = !1,
                p = function (t) {
                    var n = y + 1 < e.length && e.charAt(y + 1) == t;
                    return n && y++, n
                }, d = function (e) {
                    var n = p(e),
                        r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2,
                        i = new RegExp("^\\d{1," + r + "}"),
                        s = t.substring(g).match(i);
                    if (!s) throw "Missing number at position " + g;
                    return g += s[0].length, parseInt(s[0], 10)
                }, v = function (e, n, r) {
                    var i = $.map(p(e) ? r : n, function (e, t) {
                        return [[t, e]]
                    }).sort(function (e, t) {
                        return -(e[1].length - t[1].length)
                    }),
                        s = -1;
                    $.each(i, function (e, n) {
                        var r = n[1];
                        if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) return s = n[0], g += r.length, !1
                    });
                    if (s != -1) return s + 1;
                    throw "Unknown name at position " + g
                }, m = function () {
                    if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
                    g++
                }, g = 0;
            for (var y = 0; y < e.length; y++) if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
                else switch (e.charAt(y)) {
                        case "d":
                            l = d("d");
                            break;
                        case "D":
                            v("D", i, s);
                            break;
                        case "o":
                            c = d("o");
                            break;
                        case "m":
                            f = d("m");
                            break;
                        case "M":
                            f = v("M", o, u);
                            break;
                        case "y":
                            a = d("y");
                            break;
                        case "@":
                            var b = new Date(d("@"));
                            a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                            break;
                        case "!":
                            var b = new Date((d("!") - this._ticksTo1970) / 1e4);
                            a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                            break;
                        case "'":
                            p("'") ? m() : h = !0;
                            break;
                        default:
                            m()
                }
            if (g < t.length) throw "Extra/unparsed characters found in date: " + t.substring(g);
            a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
            if (c > -1) {
                f = 1, l = c;
                do {
                    var w = this._getDaysInMonth(a, f - 1);
                    if (l <= w) break;
                    f++, l -= w
                } while (!0)
            }
            var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
            if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function (e, t, n) {
            if (!t) return "";
            var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                i = (n ? n.dayNames : null) || this._defaults.dayNames,
                s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (n ? n.monthNames : null) || this._defaults.monthNames,
                u = function (t) {
                    var n = h + 1 < e.length && e.charAt(h + 1) == t;
                    return n && h++, n
                }, a = function (e, t, n) {
                    var r = "" + t;
                    if (u(e)) while (r.length < n) r = "0" + r;
                    return r
                }, f = function (e, t, n, r) {
                    return u(e) ? r[t] : n[t]
                }, l = "",
                c = !1;
            if (t) for (var h = 0; h < e.length; h++) if (c) e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h);
                    else switch (e.charAt(h)) {
                            case "d":
                                l += a("d", t.getDate(), 2);
                                break;
                            case "D":
                                l += f("D", t.getDay(), r, i);
                                break;
                            case "o":
                                l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                l += a("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                l += f("M", t.getMonth(), s, o);
                                break;
                            case "y":
                                l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                l += t.getTime();
                                break;
                            case "!":
                                l += t.getTime() * 1e4 + this._ticksTo1970;
                                break;
                            case "'":
                                u("'") ? l += "'" : c = !0;
                                break;
                            default:
                                l += e.charAt(h)
                    }
            return l
        },
        _possibleChars: function (e) {
            var t = "",
                n = !1,
                r = function (t) {
                    var n = i + 1 < e.length && e.charAt(i + 1) == t;
                    return n && i++, n
                };
            for (var i = 0; i < e.length; i++) if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
                else switch (e.charAt(i)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            t += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            r("'") ? t += "'" : n = !0;
                            break;
                        default:
                            t += e.charAt(i)
                }
            return t
        },
        _get: function (e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() == e.lastVal) return;
            var n = this._get(e, "dateFormat"),
                r = e.lastVal = e.input ? e.input.val() : null,
                i, s;
            i = s = this._getDefaultDate(e);
            var o = this._getFormatConfig(e);
            try {
                i = this.parseDate(n, r, o) || s
            } catch (u) {
                this.log(u), r = t ? "" : r
            }
            e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (e, t, n) {
            var r = function (e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, i = function (t) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date,
                        i = r.getFullYear(),
                        s = r.getMonth(),
                        o = r.getDate(),
                        u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        a = u.exec(t);
                    while (a) {
                        switch (a[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(a[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += parseInt(a[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
                                break;
                            case "y":
                            case "Y":
                                i += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
                        }
                        a = u.exec(t)
                    }
                    return new Date(i, s, o)
                }, s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
            return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _generateHTML: function (e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var n = this._get(e, "isRTL"),
                r = this._get(e, "showButtonPanel"),
                i = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(e),
                u = this._get(e, "showCurrentAtPos"),
                a = this._get(e, "stepMonths"),
                f = o[0] != 1 || o[1] != 1,
                l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                c = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max"),
                p = e.drawMonth - u,
                d = e.drawYear;
            p < 0 && (p += 12, d--);
            if (h) {
                var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                v = c && v < c ? c : v;
                while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) p--, p < 0 && (p = 11, d--)
            }
            e.drawMonth = p, e.drawYear = d;
            var m = this._get(e, "prevText");
            m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
            var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + e.id + "', -" + a + ", 'M');\"" + ' title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
                y = this._get(e, "nextText");
            y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
            var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + e.id + "', +" + a + ", 'M');\"" + ' title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
                w = this._get(e, "currentText"),
                E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
            w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
            var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>",
                x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + e.id + "');\"" + ">" + w + "</button>" : "") + (n ? "" : S) + "</div>" : "",
                T = parseInt(this._get(e, "firstDay"), 10);
            T = isNaN(T) ? 0 : T;
            var N = this._get(e, "showWeek"),
                C = this._get(e, "dayNames"),
                k = this._get(e, "dayNamesShort"),
                L = this._get(e, "dayNamesMin"),
                A = this._get(e, "monthNames"),
                O = this._get(e, "monthNamesShort"),
                M = this._get(e, "beforeShowDay"),
                _ = this._get(e, "showOtherMonths"),
                D = this._get(e, "selectOtherMonths"),
                P = this._get(e, "calculateWeek") || this.iso8601Week,
                H = this._getDefaultDate(e),
                B = "";
            for (var j = 0; j < o[0]; j++) {
                var F = "";
                this.maxRows = 4;
                for (var I = 0; I < o[1]; I++) {
                    var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)),
                        R = " ui-corner-all",
                        U = "";
                    if (f) {
                        U += '<div class="ui-datepicker-group';
                        if (o[1] > 1) switch (I) {
                                case 0:
                                    U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                                    break;
                                default:
                                    U += " ui-datepicker-group-middle", R = ""
                        }
                        U += '">'
                    }
                    U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                    for (var W = 0; W < 7; W++) {
                        var X = (W + T) % 7;
                        z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C[X] + '">' + L[X] + "</span></th>"
                    }
                    U += z + "</tr></thead><tbody>";
                    var V = this._getDaysInMonth(d, p);
                    d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
                    var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7,
                        K = Math.ceil((J + V) / 7),
                        Q = f ? this.maxRows > K ? this.maxRows : K : K;
                    this.maxRows = Q;
                    var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
                    for (var Y = 0; Y < Q; Y++) {
                        U += "<tr>";
                        var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
                        for (var W = 0; W < 7; W++) {
                            var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
                                tt = G.getMonth() != p,
                                nt = tt && !D || !et[0] || c && G < c || h && G > h;
                            Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + e.id + "'," + G.getMonth() + "," + G.getFullYear() + ', this);return false;"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
                        }
                        U += Z + "</tr>"
                    }
                    p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
                }
                B += F
            }
            return B += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
        },
        _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
            var a = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                c = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                var p = r && r.getFullYear() == n,
                    d = i && i.getFullYear() == n;
                h += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" " + ">";
                for (var v = 0; v < 12; v++)(!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>");
                h += "</select>"
            }
            l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
                else {
                    var m = this._get(e, "yearRange").split(":"),
                        g = (new Date).getFullYear(),
                        y = function (e) {
                            var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? g : t
                        }, b = y(m[0]),
                        w = Math.max(b, y(m[1] || ""));
                    b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" " + ">";
                    for (; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
                    e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
                }
            }
            return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
        },
        _adjustInstDate: function (e, t, n) {
            var r = e.drawYear + (n == "Y" ? t : 0),
                i = e.drawMonth + (n == "M" ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                i = n && t < n ? n : t;
            return i = r && i > r ? r : i, i
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function (e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function (e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max");
            return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }), $.fn.datepicker = function (e) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
            typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.16", window["DP_jQuery_" + dpuuid] = $
}(jQuery),
function (e, t) {
    e.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function (t, n) {
            t === "value" && (this.options.value = n, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function () {
            var e = this.options.value;
            return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    }), e.extend(e.ui.progressbar, {
        version: "1.8.16"
    })
}(jQuery), jQuery.effects || function (e, t) {
    function n(t) {
        var n;
        return t && t.constructor == Array && t.length == 3 ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(n[1]) * 2.55, parseFloat(n[2]) * 2.55, parseFloat(n[3]) * 2.55] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : (n = /rgba\(0, 0, 0, 0\)/.exec(t)) ? i.transparent : i[e.trim(t).toLowerCase()]
    }
    function r(t, r) {
        var i;
        do {
            i = e.curCSS(t, r);
            if (i != "" && i != "transparent" || e.nodeName(t, "body")) break;
            r = "backgroundColor"
        } while (t = t.parentNode);
        return n(i)
    }
    function u() {
        var e = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            t = {}, n, r;
        if (e && e.length && e[0] && e[e[0]]) {
            var i = e.length;
            while (i--) n = e[i], typeof e[n] == "string" && (r = n.replace(/\-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                }), t[r] = e[n])
        } else for (n in e) typeof e[n] == "string" && (t[n] = e[n]);
        return t
    }
    function a(t) {
        var n, r;
        for (n in t) r = t[n], (r == null || e.isFunction(r) || n in o || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(r))) && delete t[n];
        return t
    }
    function f(e, t) {
        var n = {
            _: 0
        }, r;
        for (r in t) e[r] != t[r] && (n[r] = t[r]);
        return n
    }
    function l(t, n, r, i) {
        typeof t == "object" && (i = n, r = null, n = t, t = n.effect), e.isFunction(n) && (i = n, r = null, n = {});
        if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
        return e.isFunction(r) && (i = r, r = null), n = n || {}, r = r || n.duration, r = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, i = i || n.complete, [t, n, r, i]
    }
    function c(t) {
        return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects[t] ? !0 : !1
    }
    e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (t, i) {
        e.fx.step[i] = function (e) {
            e.colorInit || (e.start = r(e.elem, i), e.end = n(e.end), e.colorInit = !0), e.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var i = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }, s = ["add", "remove", "toggle"],
        o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    e.effects.animateClass = function (t, n, r, i) {
        return e.isFunction(r) && (i = r, r = null), this.queue(function () {
            var o = e(this),
                l = o.attr("style") || " ",
                c = a(u.call(this)),
                h, p = o.attr("class");
            e.each(s, function (e, n) {
                t[n] && o[n + "Class"](t[n])
            }), h = a(u.call(this)), o.attr("class", p), o.animate(f(c, h), {
                queue: !1,
                duration: n,
                easing: r,
                complete: function () {
                    e.each(s, function (e, n) {
                        t[n] && o[n + "Class"](t[n])
                    }), typeof o.attr("style") == "object" ? (o.attr("style").cssText = "", o.attr("style").cssText = l) : o.attr("style", l), i && i.apply(this, arguments), e.dequeue(this)
                }
            })
        })
    }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                    add: t
                },
                n, r, i
            ]) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                    remove: t
                },
                n, r, i
            ]) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function (n, r, i, s, o) {
            return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.apply(this, [r ? {
                    add: n
                } : {
                    remove: n
                },
                i, s, o
            ]) : this._toggleClass(n, r) : e.effects.animateClass.apply(this, [{
                    toggle: n
                },
                r, i, s
            ])
        },
        switchClass: function (t, n, r, i, s) {
            return e.effects.animateClass.apply(this, [{
                    add: n,
                    remove: t
                },
                r, i, s
            ])
        }
    }), e.extend(e.effects, {
        version: "1.8.16",
        save: function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.data("ec.storage." + t[n], e[0].style[t[n]])
        },
        restore: function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.css(t[n], e.data("ec.storage." + t[n]))
        },
        setMode: function (e, t) {
            return t == "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function (e, t) {
            var n, r;
            switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
            }
            switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
            }
            return {
                x: r,
                y: n
            }
        },
        createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                "float": t.css("float")
            }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                i = document.activeElement;
            return t.wrap(r), (t[0] === i || e.contains(t[0], i)) && e(i).focus(), r = t.parent(), t.css("position") == "static" ? (r.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (e.extend(n, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), e.each(["top", "left", "bottom", "right"], function (e, r) {
                n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), r.css(n).show()
        },
        removeWrapper: function (t) {
            var n, r = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (n = t.parent().replaceWith(t), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), n) : t
        },
        setTransition: function (t, n, r, i) {
            return i = i || {}, e.each(n, function (e, n) {
                unit = t.cssUnit(n), unit[0] > 0 && (i[n] = unit[0] * r + unit[1])
            }), i
        }
    }), e.fn.extend({
        effect: function (t, n, r, i) {
            var s = l.apply(this, arguments),
                o = {
                    options: s[1],
                    duration: s[2],
                    callback: s[3]
                }, u = o.options.mode,
                a = e.effects[t];
            return e.fx.off || !a ? u ? this[u](o.duration, o.callback) : this.each(function () {
                o.callback && o.callback.call(this)
            }) : a.call(this, o)
        },
        _show: e.fn.show,
        show: function (e) {
            if (c(e)) return this._show.apply(this, arguments);
            var t = l.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: e.fn.hide,
        hide: function (e) {
            if (c(e)) return this._hide.apply(this, arguments);
            var t = l.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function (t) {
            if (c(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
            var n = l.apply(this, arguments);
            return n[1].mode = "toggle", this.effect.apply(this, n)
        },
        cssUnit: function (t) {
            var n = this.css(t),
                r = [];
            return e.each(["em", "px", "%", "pt"], function (e, t) {
                n.indexOf(t) > 0 && (r = [parseFloat(n), t])
            }), r
        }
    }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function (t, n, r, i, s) {
            return e.easing[e.easing.def](t, n, r, i, s)
        },
        easeInQuad: function (e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function (e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t,
            n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function (e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function (e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function (e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function (e, t, n, r, i) {
            return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function (e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, r, i) {
            var s = 1.70158,
                o = 0,
                u = r;
            if (t == 0) return n;
            if ((t /= i) == 1) return n + r;
            o || (o = i * .3);
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
        },
        easeOutElastic: function (e, t, n, r, i) {
            var s = 1.70158,
                o = 0,
                u = r;
            if (t == 0) return n;
            if ((t /= i) == 1) return n + r;
            o || (o = i * .3);
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
        },
        easeInOutElastic: function (e, t, n, r, i) {
            var s = 1.70158,
                o = 0,
                u = r;
            if (t == 0) return n;
            if ((t /= i / 2) == 2) return n + r;
            o || (o = i * .3 * 1.5);
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
        },
        easeInBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * (n /= s) * n * ((o + 1) * n - o) + r
        },
        easeOutBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * ((n = n / s - 1) * n * ((o + 1) * n + o) + 1) + r
        },
        easeInOutBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), (n /= s / 2) < 1 ? i / 2 * n * n * (((o *= 1.525) + 1) * n - o) + r : i / 2 * ((n -= 2) * n * (((o *= 1.525) + 1) * n + o) + 2) + r
        },
        easeInBounce: function (t, n, r, i, s) {
            return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + r
        },
        easeOutBounce: function (e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (t, n, r, i, s) {
            return n < s / 2 ? e.easing.easeInBounce(t, n * 2, 0, i, s) * .5 + r : e.easing.easeOutBounce(t, n * 2 - s, 0, i, s) * .5 + i * .5 + r
        }
    })
}(jQuery),
function (e, t) {
    e.effects.blind = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var u = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                a = s == "vertical" ? "height" : "width",
                f = s == "vertical" ? u.height() : u.width();
            i == "show" && u.css(a, 0);
            var l = {};
            l[a] = i == "show" ? f : 0, u.animate(l, t.duration, t.options.easing, function () {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.bounce = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = t.options.direction || "up",
                u = t.options.distance || 20,
                a = t.options.times || 5,
                f = t.duration || 250;
            /show|hide/.test(i) && r.push("opacity"), e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var l = s == "up" || s == "down" ? "top" : "left",
                c = s == "up" || s == "left" ? "pos" : "neg",
                u = t.options.distance || (l == "top" ? n.outerHeight({
                    margin: !0
                }) / 3 : n.outerWidth({
                    margin: !0
                }) / 3);
            i == "show" && n.css("opacity", 0).css(l, c == "pos" ? -u : u), i == "hide" && (u /= a * 2), i != "hide" && a--;
            if (i == "show") {
                var h = {
                    opacity: 1
                };
                h[l] = (c == "pos" ? "+=" : "-=") + u, n.animate(h, f / 2, t.options.easing), u /= 2, a--
            }
            for (var p = 0; p < a; p++) {
                var d = {}, v = {};
                d[l] = (c == "pos" ? "-=" : "+=") + u, v[l] = (c == "pos" ? "+=" : "-=") + u, n.animate(d, f / 2, t.options.easing).animate(v, f / 2, t.options.easing), u = i == "hide" ? u * 2 : u / 2
            }
            if (i == "hide") {
                var h = {
                    opacity: 0
                };
                h[l] = (c == "pos" ? "-=" : "+=") + u, n.animate(h, f / 2, t.options.easing, function () {
                    n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
                })
            } else {
                var d = {}, v = {};
                d[l] = (c == "pos" ? "-=" : "+=") + u, v[l] = (c == "pos" ? "+=" : "-=") + u, n.animate(d, f / 2, t.options.easing).animate(v, f / 2, t.options.easing, function () {
                    e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
                })
            }
            n.queue("fx", function () {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery),
function (e, t) {
    e.effects.clip = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var u = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                a = n[0].tagName == "IMG" ? u : n,
                f = {
                    size: s == "vertical" ? "height" : "width",
                    position: s == "vertical" ? "top" : "left"
                }, l = s == "vertical" ? a.height() : a.width();
            i == "show" && (a.css(f.size, 0), a.css(f.position, l / 2));
            var c = {};
            c[f.size] = i == "show" ? l : 0, c[f.position] = i == "show" ? 0 : l / 2, a.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.drop = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var u = s == "up" || s == "down" ? "top" : "left",
                a = s == "up" || s == "left" ? "pos" : "neg",
                f = t.options.distance || (u == "top" ? n.outerHeight({
                    margin: !0
                }) / 2 : n.outerWidth({
                    margin: !0
                }) / 2);
            i == "show" && n.css("opacity", 0).css(u, a == "pos" ? -f : f);
            var l = {
                opacity: i == "show" ? 1 : 0
            };
            l[u] = (i == "show" ? a == "pos" ? "+=" : "-=" : a == "pos" ? "-=" : "+=") + f, n.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.explode = function (t) {
        return this.queue(function () {
            var n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
            t.options.mode = t.options.mode == "toggle" ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
            var i = e(this).show().css("visibility", "hidden"),
                s = i.offset();
            s.top -= parseInt(i.css("marginTop"), 10) || 0, s.left -= parseInt(i.css("marginLeft"), 10) || 0;
            var u = i.outerWidth(!0),
                a = i.outerHeight(!0);
            for (var f = 0; f < n; f++) for (var l = 0; l < r; l++) i.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -l * (u / r),
                        top: -f * (a / n)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: u / r,
                        height: a / n,
                        left: s.left + l * (u / r) + (t.options.mode == "show" ? (l - Math.floor(r / 2)) * (u / r) : 0),
                        top: s.top + f * (a / n) + (t.options.mode == "show" ? (f - Math.floor(n / 2)) * (a / n) : 0),
                        opacity: t.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: s.left + l * (u / r) + (t.options.mode == "show" ? 0 : (l - Math.floor(r / 2)) * (u / r)),
                        top: s.top + f * (a / n) + (t.options.mode == "show" ? 0 : (f - Math.floor(n / 2)) * (a / n)),
                        opacity: t.options.mode == "show" ? 1 : 0
                    }, t.duration || 500);
            setTimeout(function () {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide(), t.callback && t.callback.apply(i[0]), i.dequeue(), e("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery),
function (e, t) {
    e.effects.fade = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide");
            n.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.fold = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.size || 15,
                u = !! t.options.horizFirst,
                a = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
            e.effects.save(n, r), n.show();
            var f = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                l = i == "show" != u,
                c = l ? ["width", "height"] : ["height", "width"],
                h = l ? [f.width(), f.height()] : [f.height(), f.width()],
                p = /([0-9]+)%/.exec(s);
            p && (s = parseInt(p[1], 10) / 100 * h[i == "hide" ? 0 : 1]), i == "show" && f.css(u ? {
                height: 0,
                width: s
            } : {
                height: s,
                width: 0
            });
            var d = {}, v = {};
            d[c[0]] = i == "show" ? h[0] : s, v[c[1]] = i == "show" ? h[1] : 0, f.animate(d, a, t.options.easing).animate(v, a, t.options.easing, function () {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.highlight = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["backgroundImage", "backgroundColor", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            i == "hide" && (s.opacity = 0), e.effects.save(n, r), n.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), i == "show" && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.pulsate = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "show");
            times = (t.options.times || 5) * 2 - 1, duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2, isVisible = n.is(":visible"), animateTo = 0, isVisible || (n.css("opacity", 0).show(), animateTo = 1), (r == "hide" && isVisible || r == "show" && !isVisible) && times--;
            for (var i = 0; i < times; i++) n.animate({
                    opacity: animateTo
                }, duration, t.options.easing), animateTo = (animateTo + 1) % 2;
            n.animate({
                opacity: animateTo
            }, duration, t.options.easing, function () {
                animateTo == 0 && n.hide(), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function () {
                n.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
function (e, t) {
    e.effects.puff = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide"),
                i = parseInt(t.options.percent, 10) || 150,
                s = i / 100,
                u = {
                    height: n.height(),
                    width: n.width()
                };
            e.extend(t.options, {
                fade: !0,
                mode: r,
                percent: r == "hide" ? i : 100,
                from: r == "hide" ? u : {
                    height: u.height * s,
                    width: u.width * s
                }
            }), n.effect("scale", t.options, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.scale = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.extend(!0, {}, t.options),
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : i == "hide" ? 0 : 100),
                u = t.options.direction || "both",
                a = t.options.origin;
            i != "effect" && (r.origin = a || ["middle", "center"], r.restore = !0);
            var f = {
                height: n.height(),
                width: n.width()
            };
            n.from = t.options.from || (i == "show" ? {
                height: 0,
                width: 0
            } : f);
            var l = {
                y: u != "horizontal" ? s / 100 : 1,
                x: u != "vertical" ? s / 100 : 1
            };
            n.to = {
                height: f.height * l.y,
                width: f.width * l.x
            }, t.options.fade && (i == "show" && (n.from.opacity = 0, n.to.opacity = 1), i == "hide" && (n.from.opacity = 1, n.to.opacity = 0)), r.from = n.from, r.to = n.to, r.mode = i, n.effect("size", r, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.size = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                s = ["width", "height", "overflow"],
                u = ["fontSize"],
                a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                f = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                l = e.effects.setMode(n, t.options.mode || "effect"),
                c = t.options.restore || !1,
                h = t.options.scale || "both",
                p = t.options.origin,
                d = {
                    height: n.height(),
                    width: n.width()
                };
            n.from = t.options.from || d, n.to = t.options.to || d;
            if (p) {
                var v = e.effects.getBaseline(p, d);
                n.from.top = (d.height - n.from.height) * v.y, n.from.left = (d.width - n.from.width) * v.x, n.to.top = (d.height - n.to.height) * v.y, n.to.left = (d.width - n.to.width) * v.x
            }
            var m = {
                from: {
                    y: n.from.height / d.height,
                    x: n.from.width / d.width
                },
                to: {
                    y: n.to.height / d.height,
                    x: n.to.width / d.width
                }
            };
            if (h == "box" || h == "both") m.from.y != m.to.y && (r = r.concat(a), n.from = e.effects.setTransition(n, a, m.from.y, n.from), n.to = e.effects.setTransition(n, a, m.to.y, n.to)), m.from.x != m.to.x && (r = r.concat(f), n.from = e.effects.setTransition(n, f, m.from.x, n.from), n.to = e.effects.setTransition(n, f, m.to.x, n.to));
            (h == "content" || h == "both") && m.from.y != m.to.y && (r = r.concat(u), n.from = e.effects.setTransition(n, u, m.from.y, n.from), n.to = e.effects.setTransition(n, u, m.to.y, n.to)), e.effects.save(n, c ? r : i), n.show(), e.effects.createWrapper(n), n.css("overflow", "hidden").css(n.from);
            if (h == "content" || h == "both") a = a.concat(["marginTop", "marginBottom"]).concat(u), f = f.concat(["marginLeft", "marginRight"]), s = r.concat(a).concat(f), n.find("*[width]").each(function () {
                    child = e(this), c && e.effects.save(child, s);
                    var n = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: n.height * m.from.y,
                        width: n.width * m.from.x
                    }, child.to = {
                        height: n.height * m.to.y,
                        width: n.width * m.to.x
                    }, m.from.y != m.to.y && (child.from = e.effects.setTransition(child, a, m.from.y, child.from), child.to = e.effects.setTransition(child, a, m.to.y, child.to)), m.from.x != m.to.x && (child.from = e.effects.setTransition(child, f, m.from.x, child.from), child.to = e.effects.setTransition(child, f, m.to.x, child.to)), child.css(child.from), child.animate(child.to, t.duration, t.options.easing, function () {
                        c && e.effects.restore(child, s)
                    })
                });
            n.animate(n.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    n.to.opacity === 0 && n.css("opacity", n.from.opacity), l == "hide" && n.hide(), e.effects.restore(n, c ? r : i), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.shake = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = t.options.direction || "left",
                u = t.options.distance || 20,
                a = t.options.times || 3,
                f = t.duration || t.options.duration || 140;
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var l = s == "up" || s == "down" ? "top" : "left",
                c = s == "up" || s == "left" ? "pos" : "neg",
                h = {}, p = {}, d = {};
            h[l] = (c == "pos" ? "-=" : "+=") + u, p[l] = (c == "pos" ? "+=" : "-=") + u * 2, d[l] = (c == "pos" ? "-=" : "+=") + u * 2, n.animate(h, f, t.options.easing);
            for (var v = 1; v < a; v++) n.animate(p, f, t.options.easing).animate(d, f, t.options.easing);
            n.animate(p, f, t.options.easing).animate(h, f / 2, t.options.easing, function () {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function () {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery),
function (e, t) {
    e.effects.slide = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            var u = s == "up" || s == "down" ? "top" : "left",
                a = s == "up" || s == "left" ? "pos" : "neg",
                f = t.options.distance || (u == "top" ? n.outerHeight({
                    margin: !0
                }) : n.outerWidth({
                    margin: !0
                }));
            i == "show" && n.css(u, a == "pos" ? isNaN(f) ? "-" + f : -f : f);
            var l = {};
            l[u] = (i == "show" ? a == "pos" ? "+=" : "-=" : a == "pos" ? "-=" : "+=") + f, n.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e, t) {
    e.effects.transfer = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e(t.options.to),
                i = r.offset(),
                s = {
                    top: i.top,
                    left: i.left,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                }, u = n.offset(),
                a = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                    top: u.top,
                    left: u.left,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: "absolute"
                }).animate(s, t.duration, t.options.easing, function () {
                    a.remove(), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
                })
        })
    }
}(jQuery), jQuery.fn.isValidCPF = function () {
    var e, t, n, r, i, s, o, u, a = 0,
        f = 0,
        l, c, h, p = $(this).val(),
        d = [],
        l;
    for (l = 0; l < 10; ++l) d.push(Array(12).join(String(l)));
    d.push("12345678909"), e = p.replace(/[_\-\.]/g, "");
    if (jQuery.inArray(e, d) > -1) return !1;
    t = e.split(""), c = t.length;
    for (l = 0; l < c; l++) t[l] = Number(t[l]);
    s = t.pop(), n = t.pop();
    for (l = 0, h = 10; l < 9; ++l, --h) a += t[l] * h;
    r = a % 11, i = r < 2 ? 0 : 11 - r, t.push(i);
    for (l = 0, h = 11; l < 10; ++l, --h) f += t[l] * h;
    return o = f % 11, u = o < 2 ? 0 : 11 - o, n === i && s === u
},
function ($) {
    $.fn.editable = function (e, t) {
        if ("disable" == e) {
            $(this).data("disabled.editable", !0);
            return
        }
        if ("enable" == e) {
            $(this).data("disabled.editable", !1);
            return
        }
        if ("destroy" == e) {
            $(this).unbind($(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");
            return
        }
        var n = $.extend({}, $.fn.editable.defaults, {
            target: e
        }, t),
            r = $.editable.types[n.type].plugin || function () {}, i = $.editable.types[n.type].submit || function () {}, s = $.editable.types[n.type].buttons || $.editable.types.defaults.buttons,
            o = $.editable.types[n.type].content || $.editable.types.defaults.content,
            u = $.editable.types[n.type].element || $.editable.types.defaults.element,
            a = $.editable.types[n.type].reset || $.editable.types.defaults.reset,
            f = n.callback || function () {}, l = n.onedit || function () {}, c = n.onsubmit || function () {}, h = n.onreset || function () {}, p = n.onerror || a;
        return n.tooltip && $(this).attr("title", n.tooltip), n.autowidth = "auto" == n.width, n.autoheight = "auto" == n.height, this.each(function () {
            var e = this,
                t = $(e).width(),
                d = $(e).height();
            $(this).data("event.editable", n.event), $.trim($(this).html()) || $(this).html(n.placeholder), $(this).bind(n.event, function (h) {
                if (!0 === $(this).data("disabled.editable")) return;
                if (e.editing) return;
                if (!1 === l.apply(this, [n, e])) return;
                h.preventDefault(), h.stopPropagation(), n.tooltip && $(e).removeAttr("title"), 0 == $(e).width() ? (n.width = t, n.height = d) : (n.width != "none" && (n.width = n.autowidth ? $(e).width() : n.width), n.height != "none" && (n.height = n.autoheight ? $(e).height() : n.height)), $(this).html().toLowerCase().replace(/(;|")/g, "") == n.placeholder.toLowerCase().replace(/(;|")/g, "") && $(this).html(""), e.editing = !0, e.revert = $(e).html(), $(e).html("");
                var v = $("<form />");
                n.cssclass && ("inherit" == n.cssclass ? v.attr("class", $(e).attr("class")) : v.attr("class", n.cssclass)), n.style && ("inherit" == n.style ? (v.attr("style", $(e).attr("style")), v.css("display", $(e).css("display"))) : v.attr("style", n.style));
                var m = u.apply(v, [n, e]),
                    g;
                if (n.loadurl) {
                    var y = setTimeout(function () {
                        m.disabled = !0, o.apply(v, [n.loadtext, n, e])
                    }, 100),
                        b = {};
                    b[n.id] = e.id, $.isFunction(n.loaddata) ? $.extend(b, n.loaddata.apply(e, [e.revert, n])) : $.extend(b, n.loaddata), $.ajax({
                        type: n.loadtype,
                        url: n.loadurl,
                        data: b,
                        async: !1,
                        success: function (e) {
                            window.clearTimeout(y), g = e, m.disabled = !1
                        }
                    })
                } else n.data ? (g = n.data, $.isFunction(n.data) && (g = n.data.apply(e, [e.revert, n]))) : g = e.revert;
                o.apply(v, [g, n, e]), m.attr("name", n.name), s.apply(v, [n, e]), $(e).append(v), r.apply(v, [n, e]), $(":input:visible:enabled:first", v).focus(), n.select && m.select(), m.keydown(function (t) {
                    t.keyCode == 27 && (t.preventDefault(), a.apply(v, [n, e]))
                });
                var y;
                "cancel" == n.onblur ? m.blur(function (t) {
                    y = setTimeout(function () {
                        a.apply(v, [n, e])
                    }, 500)
                }) : "submit" == n.onblur ? m.blur(function (e) {
                    y = setTimeout(function () {
                        v.submit()
                    }, 200)
                }) : $.isFunction(n.onblur) ? m.blur(function (t) {
                    n.onblur.apply(e, [m.val(), n])
                }) : m.blur(function (e) {}), v.submit(function (t) {
                    y && clearTimeout(y), t.preventDefault();
                    if (!1 !== c.apply(v, [n, e]) && !1 !== i.apply(v, [n, e])) if ($.isFunction(n.target)) {
                            var r = n.target.apply(e, [m.val(), n]);
                            $(e).html(r), e.editing = !1, f.apply(e, [e.innerHTML, n]), $.trim($(e).html()) || $(e).html(n.placeholder)
                        } else {
                            var s = {};
                            s[n.name] = m.val(), s[n.id] = e.id, $.isFunction(n.submitdata) ? $.extend(s, n.submitdata.apply(e, [e.revert, n])) : $.extend(s, n.submitdata), "PUT" == n.method && (s._method = "put"), $(e).html(n.indicator);
                            var o = {
                                type: "POST",
                                data: s,
                                dataType: "html",
                                url: n.target,
                                success: function (t, r) {
                                    o.dataType == "html" && $(e).html(t), e.editing = !1, f.apply(e, [t, n]), $.trim($(e).html()) || $(e).html(n.placeholder)
                                },
                                error: function (t, r, i) {
                                    p.apply(v, [n, e, t])
                                }
                            };
                            $.extend(o, n.ajaxoptions), $.ajax(o)
                        }
                    return $(e).attr("title", n.tooltip), !1
                })
            }), this.reset = function (t) {
                this.editing && !1 !== h.apply(t, [n, e]) && ($(e).html(e.revert), e.editing = !1, $.trim($(e).html()) || $(e).html(n.placeholder), n.tooltip && $(e).attr("title", n.tooltip))
            }
        })
    }, $.editable = {
        types: {
            defaults: {
                element: function (e, t) {
                    var n = $('<input type="hidden"></input>');
                    return $(this).append(n), n
                },
                content: function (e, t, n) {
                    $(":input:first", this).val(e)
                },
                reset: function (e, t) {
                    t.reset(this)
                },
                buttons: function (e, t) {
                    var n = this;
                    if (e.submit) {
                        if (e.submit.match(/>$/)) var r = $(e.submit).click(function () {
                                r.attr("type") != "submit" && n.submit()
                            });
                        else {
                            var r = $('<button type="submit" />');
                            r.html(e.submit)
                        }
                        $(this).append(r)
                    }
                    if (e.cancel) {
                        if (e.cancel.match(/>$/)) var i = $(e.cancel);
                        else {
                            var i = $('<button type="cancel" />');
                            i.html(e.cancel)
                        }
                        $(this).append(i), $(i).click(function (r) {
                            if ($.isFunction($.editable.types[e.type].reset)) var i = $.editable.types[e.type].reset;
                            else var i = $.editable.types.defaults.reset;
                            return i.apply(n, [e, t]), !1
                        })
                    }
                }
            },
            text: {
                element: function (e, t) {
                    var n = $("<input />");
                    return e.width != "none" && n.width(e.width), e.height != "none" && n.height(e.height), n.attr("autocomplete", "off"), $(this).append(n), n
                }
            },
            textarea: {
                element: function (e, t) {
                    var n = $("<textarea />");
                    return e.rows ? n.attr("rows", e.rows) : e.height != "none" && n.height(e.height), e.cols ? n.attr("cols", e.cols) : e.width != "none" && n.width(e.width), $(this).append(n), n
                }
            },
            select: {
                element: function (e, t) {
                    var n = $("<select />");
                    return $(this).append(n), n
                },
                content: function (data, settings, original) {
                    if (String == data.constructor) eval("var json = " + data);
                    else var json = data;
                    for (var key in json) {
                        if (!json.hasOwnProperty(key)) continue;
                        if ("selected" == key) continue;
                        var option = $("<option />").val(key).append(json[key]);
                        $("select", this).append(option)
                    }
                    $("select", this).children().each(function () {
                        ($(this).val() == json["selected"] || $(this).text() == $.trim(original.revert)) && $(this).attr("selected", "selected")
                    })
                }
            }
        },
        addInputType: function (e, t) {
            $.editable.types[e] = t
        }
    }, $.fn.editable.defaults = {
        name: "value",
        id: "id",
        type: "text",
        width: "auto",
        height: "auto",
        event: "click.editable",
        onblur: "cancel",
        loadtype: "GET",
        loadtext: "Loading...",
        placeholder: "Click to edit",
        loaddata: {},
        submitdata: {},
        ajaxoptions: {}
    }
}(jQuery),
function (e) {
    var t = (e.browser.msie ? "paste" : "input") + ".mask",
        n = window.orientation != undefined;
    e.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        }
    }, e.fn.extend({
        caret: function (e, t) {
            if (this.length == 0) return;
            if (typeof e == "number") return t = typeof t == "number" ? t : e, this.each(function () {
                    if (this.setSelectionRange) this.focus(), this.setSelectionRange(e, t);
                    else if (this.createTextRange) {
                        var n = this.createTextRange();
                        n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()
                    }
                });
            if (this[0].setSelectionRange) e = this[0].selectionStart, t = this[0].selectionEnd;
            else if (document.selection && document.selection.createRange) {
                var n = document.selection.createRange();
                e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length
            }
            return {
                begin: e,
                end: t
            }
        },
        unmask: function () {
            return this.trigger("unmask")
        },
        mask: function (r, i) {
            if (!r && this.length > 0) {
                var s = e(this[0]),
                    o = s.data("tests");
                return e.map(s.data("buffer"), function (e, t) {
                    return o[t] ? e : null
                }).join("")
            }
            i = e.extend({
                placeholder: "_",
                completed: null
            }, i);
            var u = e.mask.definitions,
                o = [],
                f = r.length,
                l = null,
                h = r.length;
            return e.each(r.split(""), function (e, t) {
                t == "?" ? (h--, f = e) : u[t] ? (o.push(new RegExp(u[t])), l == null && (l = o.length - 1)) : o.push(null)
            }), this.each(function () {
                function y(e) {
                    while (++e <= h && !o[e]);
                    return e
                }
                function w(e) {
                    while (!o[e] && --e >= 0);
                    for (var t = e; t < h; t++) if (o[t]) {
                            p[t] = i.placeholder;
                            var n = y(t);
                            if (!(n < h && o[t].test(p[n]))) break;
                            p[t] = p[n]
                        }
                    N(), s.caret(Math.max(l, e))
                }
                function E(e) {
                    for (var t = e, n = i.placeholder; t < h; t++) if (o[t]) {
                            var r = y(t),
                                s = p[t];
                            p[t] = n;
                            if (!(r < h && o[r].test(s))) break;
                            n = s
                        }
                }
                function S(t) {
                    var r = e(this).caret(),
                        i = t.keyCode;
                    v = i < 16 || i > 16 && i < 32 || i > 32 && i < 41, r.begin - r.end != 0 && (!v || i == 8 || i == 46) && T(r.begin, r.end);
                    if (i == 8 || i == 46 || n && i == 127) return w(r.begin + (i == 46 ? 0 : -1)), !1;
                    if (i == 27) return s.val(m), s.caret(0, C()), !1
                }
                function x(t) {
                    if (v) return v = !1, t.keyCode == 8 ? !1 : null;
                    t = t || window.event;
                    var n = t.charCode || t.keyCode || t.which,
                        r = e(this).caret();
                    if (t.ctrlKey || t.altKey || t.metaKey) return !0;
                    if (n >= 32 && n <= 125 || n > 186) {
                        var u = y(r.begin - 1);
                        if (u < h) {
                            var f = String.fromCharCode(n);
                            if (o[u].test(f)) {
                                E(u), p[u] = f, N();
                                var l = y(u);
                                e(this).caret(l), i.completed && l == h && i.completed.call(s)
                            }
                        }
                    }
                    return !1
                }
                function T(e, t) {
                    for (var n = e; n < t && n < h; n++) o[n] && (p[n] = i.placeholder)
                }
                function N() {
                    return s.val(p.join("")).val()
                }
                function C(e) {
                    var t = s.val(),
                        n = -1;
                    for (var r = 0, u = 0; r < h; r++) if (o[r]) {
                            p[r] = i.placeholder;
                            while (u++ < t.length) {
                                var a = t.charAt(u - 1);
                                if (o[r].test(a)) {
                                    p[r] = a, n = r;
                                    break
                                }
                            }
                            if (u > t.length) break
                        } else p[r] == t[u] && r != f && (u++, n = r);
                    if (!e && n + 1 < f) s.val(""), T(0, h);
                    else if (e || n + 1 >= f) N(), e || s.val(s.val().substring(0, n + 1));
                    return f ? r : l
                }
                var s = e(this),
                    p = e.map(r.split(""), function (e, t) {
                        if (e != "?") return u[e] ? i.placeholder : e
                    }),
                    v = !1,
                    m = s.val();
                s.data("buffer", p).data("tests", o), s.attr("readonly") || s.one("unmask", function () {
                    s.unbind(".mask").removeData("buffer").removeData("tests")
                }).bind("focus.mask", function () {
                    m = s.val();
                    var e = C();
                    N(), setTimeout(function () {
                        e == r.length ? s.caret(0, e) : s.caret(e)
                    }, 0)
                }).bind("blur.mask", function () {
                    C(), s.val() != m && s.change()
                }).bind("keydown.mask", S).bind("keypress.mask", x).bind(t, function () {
                    setTimeout(function () {
                        s.caret(C(!0))
                    }, 0)
                }), C()
            })
        }
    })
}(jQuery), jQuery.fn.maxlength = function () {
    $("textarea[maxlength]").keypress(function (e) {
        var t = e.which;
        if (t >= 33 || t == 13) {
            var n = $(this).attr("maxlength"),
                r = this.value.length;
            r >= n && e.preventDefault()
        }
    })
},
function (e) {
    e.fn.numeric = function (t, n) {
        return t = t === !1 ? "" : t || ".", n = typeof n == "function" ? n : function () {}, this.data("numeric.decimal", t).data("numeric.callback", n).keypress(e.fn.numeric.keypress).blur(e.fn.numeric.blur)
    }, e.fn.numeric.keypress = function (t) {
        var n = e.data(this, "numeric.decimal"),
            r = t.charCode ? t.charCode : t.keyCode ? t.keyCode : 0;
        if (r == 13 && this.nodeName.toLowerCase() == "input") return !0;
        if (r == 13) return !1;
        var i = !1;
        if (t.ctrlKey && r == 97 || t.ctrlKey && r == 65) return !0;
        if (t.ctrlKey && r == 120 || t.ctrlKey && r == 88) return !0;
        if (t.ctrlKey && r == 99 || t.ctrlKey && r == 67) return !0;
        if (t.ctrlKey && r == 122 || t.ctrlKey && r == 90) return !0;
        if (t.ctrlKey && r == 118 || t.ctrlKey && r == 86 || t.shiftKey && r == 45) return !0;
        if (r < 48 || r > 57) {
            if (r == 45 && this.value.length == 0) return !0;
            n && r == n.charCodeAt(0) && this.value.indexOf(n) != -1 && (i = !1), r != 8 && r != 9 && r != 13 && r != 35 && r != 36 && r != 37 && r != 39 && r != 46 ? i = !1 : typeof t.charCode != "undefined" && (t.keyCode == t.which && t.which != 0 ? (i = !0, t.which == 46 && (i = !1)) : t.keyCode != 0 && t.charCode == 0 && t.which == 0 && (i = !0)), n && r == n.charCodeAt(0) && (this.value.indexOf(n) == -1 ? i = !0 : i = !1)
        } else i = !0;
        return i
    }, e.fn.numeric.blur = function () {
        var t = e.data(this, "numeric.decimal"),
            n = e.data(this, "numeric.callback"),
            r = e(this).val();
        if (r != "") {
            var i = new RegExp("^\\d+$|\\d*" + t + "\\d+");
            i.exec(r) || n.apply(this)
        }
    }, e.fn.removeNumeric = function () {
        return this.data("numeric.decimal", null).data("numeric.callback", null).unbind("keypress", e.fn.numeric.keypress).unbind("blur", e.fn.numeric.blur)
    }
}(jQuery),
function (e) {
    function n(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
    var t = e.scrollTo = function (t, n, r) {
        e(window).scrollTo(t, n, r)
    };
    t.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1
    }, t.window = function (t) {
        return e(window)._scrollable()
    }, e.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!n) return t;
            var r = (t.contentWindow || t).document || t.ownerDocument || t;
            return e.browser.safari || r.compatMode == "BackCompat" ? r.body : r.documentElement
        })
    }, e.fn.scrollTo = function (r, i, s) {
        return typeof i == "object" && (s = i, i = 0), typeof s == "function" && (s = {
            onAfter: s
        }), r == "max" && (r = 9e9), s = e.extend({}, t.defaults, s), i = i || s.speed || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (i /= 2), s.offset = n(s.offset), s.over = n(s.over), this._scrollable().each(function () {
            function h(e) {
                u.animate(l, i, s.easing, e && function () {
                    e.call(this, r, s)
                })
            }
            var o = this,
                u = e(o),
                a = r,
                f, l = {}, c = u.is("html,body");
            switch (typeof a) {
                case "number":
                case "string":
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)) {
                        a = n(a);
                        break
                    }
                    a = e(a, this);
                case "object":
                    if (a.is || a.style) f = (a = e(a)).offset()
            }
            e.each(s.axis.split(""), function (e, n) {
                var r = n == "x" ? "Left" : "Top",
                    i = r.toLowerCase(),
                    p = "scroll" + r,
                    d = o[p],
                    v = t.max(o, n);
                if (f) l[p] = f[i] + (c ? 0 : d - u.offset()[i]), s.margin && (l[p] -= parseInt(a.css("margin" + r)) || 0, l[p] -= parseInt(a.css("border" + r + "Width")) || 0), l[p] += s.offset[i] || 0, s.over[i] && (l[p] += a[n == "x" ? "width" : "height"]() * s.over[i]);
                else {
                    var m = a[i];
                    l[p] = m.slice && m.slice(-1) == "%" ? parseFloat(m) / 100 * v : m
                }
                /^\d+$/.test(l[p]) && (l[p] = l[p] <= 0 ? 0 : Math.min(l[p], v)), !e && s.queue && (d != l[p] && h(s.onAfterFirst), delete l[p])
            }), h(s.onAfter)
        }).end()
    }, t.max = function (t, n) {
        var r = n == "x" ? "Width" : "Height",
            i = "scroll" + r;
        if (!e(t).is("html,body")) return t[i] - e(t)[r.toLowerCase()]();
        var s = "client" + r,
            o = t.ownerDocument.documentElement,
            u = t.ownerDocument.body;
        return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
    }
}(jQuery), jQuery.fn.extend({
    everyTime: function (e, t, n, r) {
        return this.each(function () {
            jQuery.timer.add(this, e, t, n, r)
        })
    },
    oneTime: function (e, t, n) {
        return this.each(function () {
            jQuery.timer.add(this, e, t, n, 1)
        })
    },
    stopTime: function (e, t) {
        return this.each(function () {
            jQuery.timer.remove(this, e, t)
        })
    }
}), jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1e3,
            das: 1e4,
            hs: 1e5,
            ks: 1e6
        },
        timeParse: function (e) {
            if (e == undefined || e == null) return null;
            var t = this.regex.exec(jQuery.trim(e.toString()));
            if (t[2]) {
                var n = parseFloat(t[1]),
                    r = this.powers[t[2]] || 1;
                return n * r
            }
            return e
        },
        add: function (e, t, n, r, i) {
            var s = 0;
            jQuery.isFunction(n) && (i || (i = r), r = n, n = t), t = jQuery.timer.timeParse(t);
            if (typeof t != "number" || isNaN(t) || t < 0) return;
            if (typeof i != "number" || isNaN(i) || i < 0) i = 0;
            i = i || 0;
            var o = jQuery.data(e, this.dataKey) || jQuery.data(e, this.dataKey, {});
            o[n] || (o[n] = {}), r.timerID = r.timerID || this.guid++;
            var u = function () {
                (++s > i && i !== 0 || r.call(e, s) === !1) && jQuery.timer.remove(e, n, r)
            };
            u.timerID = r.timerID, o[n][r.timerID] || (o[n][r.timerID] = window.setInterval(u, t)), this.global.push(e)
        },
        remove: function (e, t, n) {
            var r = jQuery.data(e, this.dataKey),
                i;
            if (r) {
                if (!t) for (t in r) this.remove(e, t, n);
                else if (r[t]) {
                    if (n) n.timerID && (window.clearInterval(r[t][n.timerID]), delete r[t][n.timerID]);
                    else for (var n in r[t]) window.clearInterval(r[t][n]), delete r[t][n];
                    for (i in r[t]) break;
                    i || (i = null, delete r[t])
                }
                for (i in r) break;
                i || jQuery.removeData(e, this.dataKey)
            }
        }
    }
}), jQuery(window).bind("unload", function () {
    jQuery.each(jQuery.timer.global, function (e, t) {
        jQuery.timer.remove(t)
    })
}), jQuery(function (e) {
    e.datepicker.regional.pt = {
        closeText: "Fechar",
        prevText: "&#x3c;Anterior",
        nextText: "Pr&oacute;ximo&#x3e;",
        currentText: "Hoje",
        monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, e.datepicker.regional.es = {
        closeText: "Cerrar",
        prevText: "&#x3c;Ant",
        nextText: "Sig&#x3e;",
        currentText: "Hoy",
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        dayNames: ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "S&aacute;"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }, e.datepicker.regional.en = {
        dateFormat: "dd/mm/yy"
    }
}), $(document).ready(function () {
    $(".on_the_spot_editing").mouseover(function () {
        $(this).addClass("on_the_spot_mouseover")
    }), $(".on_the_spot_editing").mouseout(function () {
        $(this).removeClass("on_the_spot_mouseover")
    }), $(".on_the_spot_editing").click(function () {
        $(this).addClass("on_the_spot_form")
    }), $(".on_the_spot_editing").each(function (e) {
        var t = $(this),
            n = t.attr("data-url"),
            r = t.attr("data-ok") || "OK",
            i = t.attr("data-cancel") || "Cancel",
            s = t.attr("data-tooltip") || "Click to edit ...",
            o = t.attr("data-tooltip") || "Click to edit ...",
            u = t.attr("data-edittype"),
            a = t.attr("data-select"),
            f = t.attr("data-rows"),
            l = t.attr("data-columns"),
            c = t.attr("data-loadurl"),
            h = {
                tooltip: s,
                placeholder: o,
                cancel: i,
                submit: r,
                onerror: function (e, t, n) {
                    t.reset(), alert(n.responseText)
                },
                onreset: function () {
                    $(this).parent().removeClass("on_the_spot_form")
                },
                callback: function () {
                    $(this).removeClass("on_the_spot_form")
                }
            };
        u != null && (h.type = u), u == "select" ? (a != null && (h.data = a, h.submitdata = {
            select_array: a
        }), c != null && (h.loadurl =
            c)) : u == "textarea" && (h.rows = f, h.cols = l), t.editable(n, h)
    })
}), $.fn.timedKeyup = function (e, t) {
    t == null && (t = 300), $(this).keyup(function (n) {
        $(this).stopTime("keyup"), $(this).oneTime(t, "keyup", e, 100)
    })
}, ! function (e, t, n) {
    var r, i = e.getElementsByTagName(t)[0];
    e.getElementById(n) || (r = e.createElement(t), r.id = n, r.src = "//platform.twitter.com/widgets.js", i.parentNode.insertBefore(r, i))
}(document, "script", "twitter-wjs"),
function (e, t, n, r, i) {
    var s = e(r),
        o = "waypoint.reached",
        u = function (e, n) {
            e.element.trigger(o, n), e.options.triggerOnce && e.element[t]("destroy")
        }, a = function (e, t) {
            var n = t.waypoints.length - 1;
            while (n >= 0 && t.waypoints[n].element[0] !== e[0]) n -= 1;
            return n
        }, f = [],
        l = function (t) {
            e.extend(this, {
                element: e(t),
                oldScroll: 0,
                waypoints: [],
                didScroll: !1,
                didResize: !1,
                doScroll: e.proxy(function () {
                    var t = this.element.scrollTop(),
                        r = t > this.oldScroll,
                        i = this,
                        s = e.grep(this.waypoints, function (e, n) {
                            return r ? e.offset > i.oldScroll && e.offset <= t : e.offset <= i.oldScroll && e.offset > t
                        }),
                        o = s.length;
                    (!this.oldScroll || !t) && e[n]("refresh"), this.oldScroll = t;
                    if (!o) return;
                    r || s.reverse(), e.each(s, function (e, t) {
                        (t.options.continuous || e === o - 1) && u(t, [r ? "down" : "up"])
                    })
                }, this)
            }), e(t).scroll(e.proxy(function () {
                this.didScroll || (this.didScroll = !0, r.setTimeout(e.proxy(function () {
                    this.doScroll(), this.didScroll = !1
                }, this), e[n].settings.scrollThrottle))
            }, this)).resize(e.proxy(function () {
                this.didResize || (this.didResize = !0, r.setTimeout(e.proxy(function () {
                    e[n]("refresh"), this.didResize = !1
                }, this), e[n].settings.resizeThrottle))
            }, this)), s.load(e.proxy(function () {
                this.doScroll()
            }, this))
        }, c = function (t) {
            var n = null;
            return e.each(f, function (e, r) {
                if (r.element[0] === t) return n = r, !1
            }), n
        }, h = {
            init: function (r, i) {
                return this.each(function () {
                    var s = e.fn[t].defaults.context,
                        u, h = e(this);
                    i && i.context && (s = i.context), e.isWindow(s) || (s = h.closest(s)[0]), u = c(s), u || (u = new l(s), f.push(u));
                    var p = a(h, u),
                        d = p < 0 ? e.fn[t].defaults : u.waypoints[p].options,
                        v = e.extend({}, d, i);
                    v.offset = v.offset === "bottom-in-view" ? function () {
                        var t = e.isWindow(s) ? e[n]("viewportHeight") : e(s).height();
                        return t - e(this).outerHeight()
                    } : v.offset, p < 0 ? u.waypoints.push({
                        element: h,
                        offset: null,
                        options: v
                    }) : u.waypoints[p].options = v, r && h.bind(o, r)
                }), e[n]("refresh"), this
            },
            remove: function () {
                return this.each(function (t, n) {
                    var r = e(n);
                    e.each(f, function (e, t) {
                        var n = a(r, t);
                        n >= 0 && t.waypoints.splice(n, 1)
                    })
                })
            },
            destroy: function () {
                return this.unbind(o)[t]("remove")
            }
        }, p = {
            refresh: function () {
                e.each(f, function (t, r) {
                    var i = e.isWindow(r.element[0]),
                        s = i ? 0 : r.element.offset().top,
                        o = i ? e[n]("viewportHeight") : r.element.height(),
                        a = i ? 0 : r.element.scrollTop();
                    e.each(r.waypoints, function (e, t) {
                        if (!t) return;
                        var n = t.options.offset,
                            i = t.offset;
                        if (typeof t.options.offset == "function") n = t.options.offset.apply(t.element);
                        else if (typeof t.options.offset == "string") {
                            var f = parseFloat(t.options.offset);
                            n = t.options.offset.indexOf("%") ? Math.ceil(o * (f / 100)) : f
                        }
                        t.offset = t.element.offset().top - s + a - n;
                        if (t.options.onlyOnScroll) return;
                        i !== null && r.oldScroll > i && r.oldScroll <= t.offset ? u(t, ["up"]) : i !== null && r.oldScroll < i && r.oldScroll >= t.offset ? u(t, ["down"]) : !i && a > t.offset && u(t, ["down"])
                    }), r.waypoints.sort(function (e, t) {
                        return e.offset - t.offset
                    })
                })
            },
            viewportHeight: function () {
                return r.innerHeight ? r.innerHeight : s.height()
            },
            aggregate: function () {
                var t = e();
                return e.each(f, function (n, r) {
                    e.each(r.waypoints, function (e, n) {
                        t = t.add(n.element)
                    })
                }), t
            }
        };
    e.fn[t] = function (n) {
        if (h[n]) return h[n].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof n == "function" || !n) return h.init.apply(this, arguments);
        if (typeof n == "object") return h.init.apply(this, [null, n]);
        e.error("Method " + n + " does not exist on jQuery " + t)
    }, e.fn[t].defaults = {
        continuous: !0,
        offset: 0,
        triggerOnce: !1,
        context: r
    }, e[n] = function (e) {
        return p[e] ? p[e].apply(this) : p.aggregate()
    }, e[n].settings = {
        resizeThrottle: 200,
        scrollThrottle: 100
    }, s.load(function () {
        e[n]("refresh")
    })
}(jQuery, "waypoint", "waypoints", this);
var CATARSE = {
    requireLogin: function (e, t) {
        e.preventDefault();
        var n = null;
        typeof t != "undefined" ? n = t : $(e.target).is("a") ? n = $(e.target).attr("href") : n = $(e.target).parentsUntil("form").parent().attr("action"), CATARSE.currentUser ? location.href = n : location.href = "/login"
    },
    Common: {
        init: function () {
            CATARSE.locale = $("#main_content").data("locale"), CATARSE.currentUser = $("#main_content").data("user"), CATARSE.router = new CATARSE.Router, CATARSE.layout = new CATARSE.LayoutsApplicationView({
                el: $("html")
            })
        },
        finish: function () {
            Backbone.history && Backbone.history.start()
        }
    },
    explore: {
        index: function () {
            window.view = new CATARSE.ExploreIndexView({
                el: $("body")
            })
        }
    },
    projects: {
        index: function () {
            window.view = new CATARSE.ProjectsIndexView({
                el: $("body")
            })
        },
        show: function () {
            window.view = new CATARSE.ProjectsShowView({
                el: $("body")
            })
        },
        embed: function () {
            window.view = new CATARSE.ProjectsEmbedView({
                el: $("body")
            })
        },
        video_embed: function () {
            window.view = new CATARSE.ProjectsVideo_embedView({
                el: $("body")
            })
        },
        "new": function () {
            window.view = new CATARSE.ProjectsNewView({
                el: $("body")
            })
        },
        pending: function () {
            window.view = new CATARSE.ProjectsPendingView({
                el: $("body")
            })
        },
        pending_backers: function () {
            window.view = new CATARSE.ProjectsPending_backersView({
                el: $("body")
            })
        },
        start: function () {
            window.view = new CATARSE.ProjectsStartView({
                el: $("body")
            })
        },
        backers: {
            "new": function () {
                window.view = new CATARSE.BackersNewView({
                    el: $("body")
                })
            },
            review: function () {
                window.view = new CATARSE.BackersReviewView({
                    el: $("body")
                })
            }
        }
    },
    "static": {
        guidelines: function () {
            window.view = new CATARSE.StaticGuidelinesView({
                el: $("body")
            })
        }
    },
    users: {
        show: function () {
            window.view = new CATARSE.UsersShowView({
                el: $("body")
            })
        }
    }
};
CATARSE.ModelView = Backbone.View.extend({
    initialize: function () {
        typeof options != "undefined" || (options = {}), options.template && (this.template = options.template), _.bindAll(this, "render", "beforeRender", "afterRender"), this.render()
    },
    beforeRender: function () {},
    afterRender: function () {},
    render: function () {
        return this.beforeRender(), this.el.html(_.template(this.template(), this.model.toJSON())), this.afterRender(), this
    }
}), CATARSE.PaginatedView = Backbone.View.extend({
    initialize: function (e) {
        typeof e != "undefined" || (e = {}), e.collection && (this.collection = e.collection), e.modelView && (this.modelView = e.modelView), e.emptyTemplate && (this.emptyTemplate = e.emptyTemplate), e.loading && (this.loading = e.loading), this.loading = $("#loading"), this.loading.waypoint("destroy"), _.bindAll(this, "render", "update", "nextPage", "waypoint", "destroy", "beforeUpdate", "afterUpdate"), this.render(), this.loading.children().show(), this.collection.page = 1, this.collection.bind("reset", this.update), this.collection.fetchPage()
    },
    destroy: function () {
        this.loading.waypoint("destroy"), this.collection.unbind("reset")
    },
    waypoint: function (e, t) {
        this.loading.children().is(":visible") || (this.loading.waypoint("remove"), t == "down" && this.nextPage())
    },
    nextPage: function () {
        return this.collection.isEmpty() || (this.loading.children().show(), this.collection.nextPage()), this
    },
    render: function () {
        return this.el.html(_.template(this.template())), this
    },
    afterUpdate: function () {},
    beforeUpdate: function () {},
    update: function () {
        return this.beforeUpdate(), this.loading.children().hide(), ul_element = this.el.find("ul.collection_list"), this.collection.isEmpty() ? this.collection.page == 1 && this.el.html(_.template(this.emptyTemplate())) : this.collection.each(function (e, t) {
            var n = $("<li class='" + (t % 3 == 0 ? "first" : "") + "" + (t % 3 == 2 ? "last" : "") + "'>");
            ul_element.append(n), new this.modelView({
                el: n,
                model: e
            })
        }, this), this.afterUpdate(), this.loading.waypoint(this.waypoint, {
            offset: "100%"
        }), this
    }
}), CATARSE.PaginatedCollection = Backbone.Collection.extend({
    initialize: function (e) {
        typeof e != "undefined" || (e = {}), e.url && (this.url = e.url), e.search && (this.search = e.search), this.initializePages()
    },
    initializePages: function () {
        _.bindAll(this, "nextPage"), this.page = 1
    },
    fetchPage: function () {
        return this.fetch({
            data: {
                page: this.page,
                locale: CATARSE.locale,
                search: this.search
            }
        })
    },
    nextPage: function () {
        return this.page++, this.fetchPage()
    }
}), CATARSE.Backers = CATARSE.PaginatedCollection.extend({
    model: CATARSE.Backer
}), CATARSE.Projects = CATARSE.PaginatedCollection.extend({
    model: CATARSE.Project,
    url: "/projects"
}), CATARSE.UserBacks = CATARSE.PaginatedCollection.extend({
    model: CATARSE.UserBack
}), CATARSE.UserProjects = CATARSE.PaginatedCollection.extend({
    model: CATARSE.UserProject
}), CATARSE.Backer = Backbone.Model.extend({}), CATARSE.Project = Backbone.Model.extend({
    initialize: function () {
        this.backers = new CATARSE.Backers, this.backers.url = "/" + CATARSE.locale + "/projects/" + this.id + "/backers"
    }
}), CATARSE.User = Backbone.Model.extend({
    initialize: function () {
        this.backs = new CATARSE.UserBacks, this.backs.url = "/" + CATARSE.locale + "/users/" + this.id + "/backers", this.projects = new CATARSE.UserProjects, this.projects.url = "/" + CATARSE.locale + "/users/" + this.id + "/projects"
    }
}), CATARSE.UserBack = Backbone.Model.extend({}), CATARSE.UserProject = Backbone.Model.extend({}), CATARSE.Router = Backbone.Router.extend({
    initialize: function (e) {
        _.bindAll(this, "hashChange", "back", "currentPath", "lastPath"), this.history = [this.currentPath()], $(window).bind("hashchange", this.hashChange)
    },
    currentPath: function () {
        var e = location.pathname + location.hash;
        return /#/.test(e) || (e += "#"), e
    },
    lastPath: function () {
        var e = this.history[this.history.length - 2];
        return e || (e = "#"), e
    },
    hashChange: function () {
        this.history.push(this.currentPath())
    },
    back: function () {
        location.href = this.lastPath()
    }
}), $("table a").click(function (e) {
    e.preventDefault();
    if (confirm($("#credits").data("confirm"))) {
        var t = $(this).parent().parent().parent().attr("id");
        $("#" + t + " .text").hide(), $("#" + t + " .loading").show(), $.post("/credits/refund", {
            backer_id: t
        }, function (e) {
            $("#" + e.backer_id + " .loading").hide(), e.ok ? ($("#" + e.backer_id + " .text").html("Solicitado estorno"), $("#" + e.backer_id + " .text").show(), $("#current_credits").html(e.credits)) : ($("#" + e.backer_id + " .error").html(e.message), $("#" + e.backer_id + " .error").show())
        })
    }
}), CATARSE.ExploreIndexView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, "render", "ProjectView", "ProjectsView", "initializeView", "recommended", "expiring", "recent", "successful", "category", "search", "updateSearch"), CATARSE.router.route(":name", "category", this.category), CATARSE.router.route("recommended", "recommended", this.recommended), CATARSE.router.route("expiring", "expiring", this.expiring), CATARSE.router.route("recent", "recent", this.recent), CATARSE.router.route("successful", "successful", this.successful), CATARSE.router.route("search/*search", "search", this.search), CATARSE.router.route("", "index", this.index), this.render(), _this = this
    },
    ProjectView: CATARSE.ModelView.extend({
        template: function () {
            return $("#project_template").html()
        }
    }),
    ProjectsView: CATARSE.PaginatedView.extend({
        template: function () {
            return $("#projects_template").html()
        },
        emptyTemplate: function () {
            return $("#empty_projects_template").html()
        }
    }),
    search: function (e) {
        e = decodeURIComponent(e), this.$(".section_header .replaced_header") && this.$(".section_header .replaced_header").remove(), this.$(".section_header .original_title").fadeOut(300, function () {
            $(".section_header").append('<div class="replaced_header"></div>'), $(".section_header .replaced_header").html("<h1><span>Explore</span> / " + e + "</h1>")
        }), this.selectItem(""), this.initializeView({
            meta_sort: "explore",
            name_or_headline_or_about_or_user_name_or_address_city_or_address_country_or_address_state_contains: e
        });
        var t = this.$("#search");
        t.val() != e && t.val(e)
    },
    updateSearch: function () {
        var e = encodeURIComponent(this.$("#search").val());
        CATARSE.router.navigate("search/" + encodeURIComponent(e), !0)
    },
    index: function () {
        _this.changeReplacedTitle(), _this.selectItem("recommended"), _this.initializeView({
            recommended: !0,
            not_expired: !0,
            meta_sort: "explore"
        })
    },
    recommended: function () {
        this.replaceTitleBy("recommended"), this.selectItem("recommended"), this.initializeView({
            recommended: !0,
            not_expired: !0,
            meta_sort: "explore"
        })
    },
    expiring: function () {
        this.replaceTitleBy("expiring"), this.selectItem("expiring"), this.initializeView({
            expiring: !0,
            meta_sort: "expires_at"
        })
    },
    recent: function () {
        this.replaceTitleBy("recent"), this.selectItem("recent"), this.initializeView({
            recent: !0,
            not_expired: !0,
            meta_sort: "created_at.desc"
        })
    },
    successful: function () {
        this.replaceTitleBy("successful"), this.selectItem("successful"), this.initializeView({
            successful: !0,
            meta_sort: "expires_at.desc"
        })
    },
    category: function (e) {
        this.replaceTitleBy(e), this.selectItem(e), this.initializeView({
            category_id_equals: this.selectedItem.data("id"),
            meta_sort: "explore"
        })
    },
    initializeView: function (e) {
        this.projectsView && this.projectsView.destroy(), this.projectsView = new this.ProjectsView({
            modelView: this.ProjectView,
            collection: new CATARSE.Projects({
                search: e
            }),
            loading: this.$("#loading"),
            el: this.$("#explore_results .results")
        })
    },
    changeReplacedTitle: function () {
        this.$(".section_header .replaced_header") && this.$(".section_header .replaced_header").fadeOut(300, function () {
            $(this).remove(), $(".section_header .original_title").fadeIn(300)
        })
    },
    replaceTitleBy: function (e) {
        this.$(".section_header .replaced_header") && this.$(".section_header .replaced_header").remove(), this.$(".section_header .original_title").fadeOut(300, function () {
            $(".section_header").append('<div class="replaced_header"></div>'), $(".section_header .replaced_header").html("<h1><span>Explore</span> " + $(".sidebar a[href=#" + e + "]").text() + "</h1>")
        })
    },
    selectItem: function (e) {
        this.selectedItem = $(".sidebar a[href=#" + e + "]"), $(".sidebar .selected").removeClass("selected"), this.selectedItem.addClass("selected")
    },
    render: function () {
        this.$("#header .search input").timedKeyup(this.updateSearch, 1e3)
    }
}), CATARSE.LayoutsApplicationView = Backbone.View.extend({
    initialize: function () {
        this.dropDownOpened = !1, _.bindAll(this, "render", "flash", "openLogin", "closeLogin", "submitLogin", "currentUserDropDown"), CATARSE.router.route("login/*url", "login_with_url", this.openLogin), CATARSE.router.route("login", "login", this.openLogin), this.render()
    },
    events: {
        "submit .search": "search",
        "click #login .close": "closeLogin",
        "click #login a.provider": "submitLogin",
        "click a.my_profile_link": "currentUserDropDown",
        "focus .form_login.bootstrap-form input": "markLoginForm",
        "focus .form_register.bootstrap-form input": "markRegisterForm"
    },
    markRegisterForm: function (e) {
        rootElement = $(e.currentTarget).closest(".bootstrap-form"), rootElement.hasClass("actived") || ($(".bootstrap-form").removeClass("actived"), rootElement.addClass("actived"))
    },
    markLoginForm: function (e) {
        rootElement = $(e.currentTarget).closest(".bootstrap-form"), rootElement.hasClass("actived") || ($(".bootstrap-form").removeClass("actived"), rootElement.addClass("actived"))
    },
    openLogin: function (e) {
        var t = null;
        typeof e != "undefined" ? t = e : t = CATARSE.router.lastPath(), this.$("#login #return_to").val(t), this.$("#login_overlay").show(), this.$("#login").fadeIn()
    },
    closeLogin: function (e) {
        this.$("#login #return_to").val(null), this.$("#login").hide(), this.$("#login_overlay").hide()
    },
    submitLogin: function (e) {
        e.preventDefault();
        var t = $(e.target);
        t.is("a") || (t = t.parent());
        if (t.hasClass("disabled")) return !1;
        this.$("#login a.provider").addClass("disabled"), this.$("#login #provider").val(t.attr("href")), this.$("#login form").submit()
    },
    search: function (e) {
        var t = this.$(e.target).find("#search").val();
        return ($("#main_content").data("controller-name") != "explore" || $("#main_content").data("action") != "index") && t.length > 0 && (location.href = "/explore#search/" + t), !1
    },
    flash: function () {
        setTimeout(function () {
            this.$(".flash").slideDown("slow")
        }, 100), this.$(".flash a").length || setTimeout(function () {
            this.$(".flash").slideUp("slow")
        }, 16e3), $(window).click(function () {
            this.$(".flash").slideUp()
        })
    },
    currentUserDropDown: function (e) {
        e.preventDefault(), $dropdown = this.$(".dropdown.user"), this.dropDownOpened ? (this.dropDownOpened = !1, $dropdown.hide()) : ($dropdown.show(), this.dropDownOpened = !0)
    },
    newsletterModal: function () {
        $("#newsletterModal").modal()
    },
    render: function () {
        this.flash(), this.newsletterModal()
    }
}), CATARSE.BackersNewView = Backbone.View.extend({
    initialize: function () {
        everything_ok = function () {
            var e = !0;
            check_credits(), value_ok() || (e = !1), reward_ok() || (e = !1), e ? $("#backer_submit").attr("disabled", !1) : $("#backer_submit").attr("disabled", !0)
        }, check_credits = function () {
            var e = parseInt($("#credits").val()),
                t = parseInt($("#backer_value").val());
            t > e ? ($("#backer_credits").attr("checked", !1), $("#backer_credits").attr("disabled", !0)) : $("#backer_credits").attr("disabled", !1)
        }, reward_ok = function () {
            if (!$("input[type=radio]:checked").val()) return !1;
            var e = $("input[type=radio]:checked"),
                t = /^backer_reward_id_(\d+)$/.exec(e.attr("id"));
            t = parseFloat(t[1]);
            var n = rewards[t];
            if (n) {
                var r = $("#backer_value").val();
                if (!/^(\d+)$/.test(r) || parseInt(r) < n) return !1
            }
            return !0
        }, value_ok = function () {
            var e = $("#backer_value").val();
            return /^(\d+)$/.test(e) && parseInt(e) >= 5e3 ? ($("#backer_value").addClass("ok").removeClass("error"), !0) : ($("#backer_value").addClass("error").removeClass("ok"), $("#backer_reward_id_0").attr("checked", !0), !1)
        }, $("input[type=radio]").click(function () {
            var e = /^backer_reward_id_(\d+)$/.exec($(this).attr("id"));
            e = parseFloat(e[1]);
            var t = rewards[e];
            if (t) {
                var n = $("#backer_value").val();
                (!/^(\d+)$/.test(n) || parseInt(n) < t) && $("#backer_value").val(parseInt(t))
            }
            $("li.radio ol li").removeClass("selected"), $(this).parent().parent().addClass("selected"), everything_ok()
        }), $("#backer_value").keyup(function () {
            var e = $("input[type=radio]:checked");
            if (e.val()) {
                var t = /^backer_reward_id_(\d+)$/.exec(e.attr("id"));
                t = parseFloat(t[1]);
                var n = rewards[t];
                if (n) {
                    var r = $("#backer_value").val();
                    (!/^(\d+)$/.test(r) || parseInt(r) < n) && $("#backer_reward_id_0").attr("checked", !0)
                }
            }
            everything_ok()
        }), $("#backer_value").numeric(!1), $(".sold_out").parent().find("input[type=radio]").attr("disabled", !0), $("input[type=radio]:checked").length == 0 && $("#backer_reward_id_0").attr("checked", !0), $("#backer_value").val() && everything_ok(), $("#backer_value").focus(), $("#backer_anonymous").click(function () {
            $(this).is(":checked") ? $("#anonymous_warning").slideDown(200) : $("#anonymous_warning").slideUp(200)
        }), $("input[type=radio]:checked").parent().parent().addClass("selected"), $(".back_faq p").hide(), $(".back_faq h3").click(function (e) {
            $(e.target).next("p").slideToggle("slow")
        })
    }
}), CATARSE.BackersReviewView = Backbone.View.extend({
    initialize: function () {
        var e = null;
        everything_ok = function () {
            var e = !0;
            $("#backer_credits").val() == "false" && (ok("#user_first_name") || (e = !1), ok("#user_last_name") || (e = !1), email_ok() || (e = !1)), accepted_terms() || (e = !1), e ? $("#back_with_credits").length < 1 ? $(".dineromail a, .paypal a").attr("disabled", !1) : $("#user_submit").attr("disabled", !1) : $("#back_with_credits").length < 1 ? $(".dineromail a, .paypal a").attr("disabled", !0) : $("#user_submit").attr("disabled", !0)
        }, ok = function (e) {
            var t = $(e).val();
            return t && t.length > 0 ? ($(e).addClass("ok").removeClass("error"), !0) : ($(e).addClass("error").removeClass("ok"), !1)
        }, cpf_ok = function () {
            return $("#user_cpf").isValidCPF() ? ($("#user_cpf").addClass("ok").removeClass("error"), !0) : ($("#user_cpf").addClass("error").removeClass("ok"), !1)
        }, email_ok = function () {
            var e = $("#user_email").val(),
                t = /^[a-z0-9\._-]+@([a-z0-9][a-z0-9-_]*[a-z0-9-_]\.)+([a-z-_]+\.)?([a-z-_]+)$/;
            return e.match(t) ? ($("#user_email").addClass("ok").removeClass("error"), !0) : ($("#user_email").addClass("error").removeClass("ok"), !1)
        }, phone_number_ok = function () {
            var e = $("#user_phone_number").val(),
                t = /^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/;
            return e.match(t) ? ($("#user_phone_number").addClass("ok").removeClass("error"), !0) : ($("#user_phone_number").addClass("error").removeClass("ok"), !1)
        }, accepted_terms = function () {
            return $("#accept").is(":checked")
        }, zip_code_ok = function () {
            return e ? ($("#user_address_zip_code").addClass("ok").removeClass("error"), !0) : /^[0-9]{5}-[0-9]{3}$/i.test($("#user_address_zip_code").val()) ? ($("#user_address_zip_code").hasClass("loading") || $("#user_address_zip_code").removeClass("error").removeClass("ok"), !0) : ($("#user_address_zip_code").hasClass("loading") || $("#user_address_zip_code").addClass("error").removeClass("ok"), !1)
        }, verify_zip_code = function () {
            e = !1, /^[0-9]{5}-[0-9]{3}$/i.test($("#user_address_zip_code").val()) && ($("#user_address_zip_code").removeClass("ok").removeClass("error").addClass("loading"), $.get("/projects/cep/?cep=" + $("#user_address_zip_code").val(), function (t) {
                $("#user_address_zip_code").removeClass("loading"), t.ok == 1 ? (e = !0, t.street != $("#user_address_street").val() && ($("#user_address_street").val(t.street).effect("highlight", {}, 1500), $("#user_address_number").val(null).effect("highlight", {}, 1500), $("#user_address_complement").val(null).effect("highlight", {}, 1500), $("#user_address_number").focus()), t.neighbourhood != $("#user_address_neighbourhood").val() && $("#user_address_neighbourhood").val(t.neighbourhood).effect("highlight", {}, 1500), t.city != $("#user_address_city").val() && $("#user_address_city").val(t.city).effect("highlight", {}, 1500), t.state != $("#user_address_state").val() && $("#user_address_state").val(t.state).effect("highlight", {}, 1500)) : e = !1, everything_ok()
            })), everything_ok()
        }, $("input[type=text]").keyup(everything_ok), $("#user_address_zip_code").keyup(function () {
            e = !1, everything_ok()
        }), $("#accept").click(everything_ok), $("select").change(everything_ok), $("#international_link").click(function (e) {
            e.preventDefault(), $("#international_link").parent().hide(), $("#international_expanded").slideDown()
        }), $("#accept_international").click(function () {
            $("#international_submit").attr("disabled", !$("#accept_international").is(":checked"))
        }), $("a.payment_link").click(function (e) {
            return $(this).attr("disabled") ? (e.preventDefault(), !1) : ($("input#payment_method_url").val($(this).data("payment_method_url")), $("form#review_form")[0].submit(), !1)
        }), everything_ok()
    }
}), CATARSE.ProjectsEmbedView = Backbone.View.extend({
    initialize: function () {
        $(document).ready(function () {
            $("a").attr("target", "_blank")
        })
    }
}), CATARSE.ProjectsIndexView = Backbone.View.extend({
    initialize: function () {
        $("#press img").mouseover(function () {
            var e = /\/(\w+)_pb.png\?*\d*$/.exec($(this).attr("src"));
            if (!e) return;
            e = e[1], $(this).attr("src", "/assets/press/" + e + ".png")
        }), $("#press img").mouseleave(function () {
            var e = /\/(\w+).png\?*\d*$/.exec($(this).attr("src"));
            if (!e) return;
            e = e[1], $(this).attr("src", "/assets/press/" + e + "_pb.png")
        }), $(function () {
            $("#curated_link").click(function () {
                $(document).scrollTo(".curated_page_header", 800)
            })
        })
    }
}), CATARSE.ProjectsNewView = Backbone.View.extend({
    initialize: function () {
        $.datepicker.setDefaults($.datepicker.regional[CATARSE.locale]), $("#add_reward").click(function (e) {
            e.preventDefault();
            var t = '<div class="clearfix"></div><div class="reward">' + $($(".reward")[0]).html() + "</div>";
            t = t.replace(/\_0\_/g, "_" + rewards_id + "_"), t = t.replace(/\[0\]/g, "[" + rewards_id + "]"), t = $(t), t.find("input").val(null), t.find("textarea").html(null), t.find("input").numeric(!1), t.find("input, textarea").removeClass("ok").removeClass("error"), $("#rewards_wrapper").append(t), t.find("textarea").focus(), rewards_count++, rewards_id++
        });
        var e = null;
        everything_ok = function () {
            var t = !0;
            e == null && (t = !1, verify_video()), ok("#project_name") || (t = !1), video_ok() || (t = !1), ok("#project_about") || (t = !1), headline_ok() || (t = !1), ok("#project_category_id") || (t = !1), goal_ok() || (t = !1), expires_at_ok() || (t = !1), rewards_ok() || (t = !1), accepted_terms() || (t = !1), t ? $("#project_submit").attr("disabled", !1) : $("#project_submit").attr("disabled", !0), $("#project_address_city, #project_address_state, #project_address_country").addClass("ok").removeClass("error")
        }, ok = function (e) {
            var t = $(e).val();
            return t && t.length > 0 ? ($(e).addClass("ok").removeClass("error"), !0) : ($(e).addClass("error").removeClass("ok"), !1)
        }, verify_video = function () {
            e = !1, /http:\/\/(www\.)?vimeo.com\/(\d+)/.test($("#project_video_url").val()) && ($("#project_video_url").removeClass("ok").removeClass("error").addClass("loading"), $.get("/projects/vimeo/?url=" + $("#project_video_url").val(), function (t) {
                $("#project_video_url").removeClass("loading"), t.id == 0 ? e = !1 : e = !0, everything_ok()
            })), everything_ok()
        }, video_ok = function () {
            return e ? ($("#project_video_url").addClass("ok").removeClass("error"), !0) : ($("#project_video_url").hasClass("loading") || $("#project_video_url").addClass("error").removeClass("ok"), !1)
        }, headline_ok = function () {
            var e = $("#project_headline").val();
            return e && e.length > 0 && e.length <= 140 ? ($("#project_headline").addClass("ok").removeClass("error"), !0) : ($("#project_headline").addClass("error").removeClass("ok"), !1)
        }, goal_ok = function () {
            var e = $("#project_goal").val();
            return /^(\d+)$/.test(e) && parseInt(e) > 0 ? ($("#project_goal").addClass("ok").removeClass("error"), !0) : ($("#project_goal").addClass("error").removeClass("ok"), !1)
        }, expires_at_ok = function () {
            var e = /^(\d{2})\/(\d{2})\/(\d{4})?$/.exec($("#project_expires_at").val());
            if (e && e.length == 4) {
                var t = parseFloat(e[3]),
                    n = parseFloat(e[2]) - 1,
                    r = parseFloat(e[1]),
                    i = new Date(t, n, r),
                    s = new Date;
                return r == i.getDate() && n == i.getMonth() && t == i.getFullYear() && i > s ? ($("#project_expires_at").addClass("ok").removeClass("error"), !0) : ($("#project_expires_at").addClass("error").removeClass("ok"), !1)
            }
            return $("#project_expires_at").addClass("error").removeClass("ok"), !1
        }, rewards_ok = function () {
            var e = !0;
            return $(".reward input").each(function () {
                /^(\d+)$/.test($(this).val()) ? /minimum_value/.test($(this).attr("id")) ? parseInt($(this).val()) >= 5e3 ? $(this).addClass("ok").removeClass("error") : ($(this).addClass("error").removeClass("ok"), e = !1) : $(this).addClass("ok").removeClass("error") : /maximum_backers/.test($(this).attr("id")) && !$(this).val() ? $(this).addClass("ok").removeClass("error") : ($(this).addClass("error").removeClass("ok"), e = !1)
            }), $(".reward textarea").each(function () {
                $(this).val() && $(this).val().length > 0 ? $(this).addClass("ok").removeClass("error") : ($(this).addClass("error").removeClass("ok"), e = !1)
            }), e
        }, accepted_terms = function () {
            return $("#accept").is(":checked")
        }, $("#project_name").keyup(everything_ok), $("#project_video_url").keyup(function () {
            e = !1, everything_ok()
        }), $("#project_video_url").timedKeyup(verify_video), $("#project_about").keyup(everything_ok), $("#project_category_id").change(everything_ok), $("#project_goal").keyup(everything_ok), $("#project_expires_at").keyup(everything_ok), $("#project_headline").keyup(everything_ok), $("#accept").click(everything_ok), $(".reward input,.reward textarea").live("keyup", everything_ok), $("#project_address_city, #project_address_state, #project_address_country").keyup(everything_ok), $("#project_goal").numeric(!1), $(".reward input").numeric(!1), $("#project_expires_at").datepicker({
            altFormat: "dd/mm/yy",
            onSelect: everything_ok
        }), $("#ui-datepicker-div").css("display", "none"), $("input,textarea,select").live("focus", function () {
            $("p.inline-hints").hide(), $(this).next("p.inline-hints").show()
        }), $(".reward").live("mouseover", function () {
            $(".remove_reward").hide(), rewards_count > 1 && $(this).find(".remove_reward").show()
        }), $(".reward").live("mouseout", function () {
            $(this).find(".remove_reward").hide()
        }), $(".remove_reward").live("click", function (e) {
            e.preventDefault(), rewards_count > 1 && (reward = $(this).parentsUntil(".reward").parent(), reward.remove(), rewards_count--)
        }), $("#project_name").focus(), $("textarea").maxlength()
    }
}), CATARSE.ProjectsPendingView = Backbone.View.extend({
    initialize: function () {
        $("input[type=checkbox]").click(function () {
            var e = $(this).attr("id").split("__"),
                t = e[0],
                n = e[1],
                r = e[2];
            $.post("/projects/update_attribute_on_the_spot", {
                id: t + "__" + n + "__" + r,
                value: $(this).is(":checked") ? 1 : null
            })
        })
    }
}), CATARSE.ProjectsPending_backersView = Backbone.View.extend({
    initialize: function () {
        $("input[type=checkbox]").live("click", function () {
            var e = $(this).parent().parent().attr("id"),
                t = $(this).attr("id").split("__")[0];
            $.post("/projects/update_attribute_on_the_spot", {
                id: "backer__" + t + "__" + e,
                value: $(this).is(":checked") ? !0 : !1
            })
        })
    }
}), CATARSE.ProjectsShowView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, "render", "BackerView", "BackersView", "about", "updates", "backers", "comments", "embed", "isValid", "backWithReward"), CATARSE.router.route("", "index", this.about), CATARSE.router.route("about", "about", this.about), CATARSE.router.route("updates", "updates", this.updates), CATARSE.router.route("backers", "backers", this.backers), CATARSE.router.route("comments", "comments", this.comments), CATARSE.router.route("embed", "embed", this.embed), this.$("a.destroy_update").live("ajax:beforeSend", function (e, t) {
            $(e.target).next(".deleting_update").show()
        });
        var e = this;
        this.$("a.destroy_update").live("ajax:success", function (t, n) {
            var r = $(".updates_wrapper");
            r.html(n), e.$("a#updates_link .count").html(" (" + e.$(".updates_wrapper ul.collection_list > li").length + ")"), $(t.target).next(".deleting_update").hide()
        }), this.project = new CATARSE.Project($("#project_description").data("project")), this.render()
    },
    events: {
        "click #show_formatting_tips": "showFormattingTips",
        "keyup form input[type=text],textarea": "validate",
        "click #project_link": "selectTarget",
        "click #project_embed textarea": "selectTarget",
        "click #rewards .clickable": "backWithReward"
    },
    UpdatesForm: Backbone.View.extend({
        el: "form#new_update",
        events: {
            "click #update_submit": "submit",
            "keyup #project_updates #update_comment": "validate_comment"
        },
        initialize: function () {
            _.bindAll(this), this.loading = this.$(".loading_updates")
        },
        submit: function () {
            this.validate_comment();
            var e = this,
                t = $(this.el);
            return e.loading.show(), $.post(t.prop("action"), t.serialize(), null, "html").success(function (t) {
                var n = $(".updates_wrapper");
                n.html(t), $("a#updates_link .count").html(" (" + $(".updates_wrapper ul.collection_list > li").length + ")"), e.loading.hide(), e.el.reset()
            }), !1
        },
        validate_comment: function (e) {
            var t = $("#project_updates #update_comment");
            t.val() == "" ? (t.addClass("error"), t.removeClass("ok")) : (t.removeClass("error"), t.addClass("ok"))
        }
    }),
    BackerView: CATARSE.ModelView.extend({
        template: function (e) {
            return $("#backer_template").html()
        }
    }),
    BackersView: CATARSE.PaginatedView.extend({
        template: function (e) {
            return $("#backers_template").html()
        },
        emptyTemplate: function () {
            return $("#empty_backers_template").html()
        }
    }),
    about: function () {
        this.selectItem("about")
    },
    updates: function () {
        this.selectItem("updates"), this.updatesForm = new this.UpdatesForm, this.$("#project_updates [type=submit]").removeProp("disabled")
    },
    comments: function () {
        this.selectItem("comments")
    },
    backers: function () {
        this.selectItem("backers"), this.backersView = new this.BackersView({
            modelView: this.BackerView,
            collection: new CATARSE.Backers({
                url: "/" + CATARSE.locale + "/projects/" + this.project.id + "/backers"
            }),
            loading: this.$("#loading"),
            el: this.$("#project_backers")
        })
    },
    embed: function () {
        this.$("#embed_overlay").show(), this.$("#project_embed").fadeIn()
    },
    selectItem: function (e) {
        this.$("#project_embed").hide(), this.$("#embed_overlay").hide(), this.$("#loading img").hide(), this.$("#project_content .content").hide(), this.$("#project_content #project_" + e + ".content").show();
        var t = this.$("#project_menu #" + e + "_link");
        this.$("#project_menu a").removeClass("selected"), t.addClass("selected")
    },
    showFormattingTips: function (e) {
        e.preventDefault(), this.$("#show_formatting_tips").hide(), this.$("#formatting_tips").slideDown()
    },
    isValid: function (e) {
        var t = !0;
        return e.find("input[type=text],textarea").each(function () {
            $(this).parent().hasClass("required") && $.trim($(this).val()) == "" && (t = !1)
        }), t
    },
    validate: function (e) {
        var t = $(e.target).parentsUntil("form"),
            n = t.find("[type=submit]");
        this.isValid(t) ? n.attr("disabled", !1) : n.attr("disabled", !0)
    },
    selectTarget: function (e) {
        e.preventDefault(), $(e.target).select()
    },
    backWithReward: function (e) {
        var t = $(e.target);
        if (t.is("a") || t.is("textarea") || t.is("button")) return !0;
        t.is("li") || (t = t.parentsUntil("li"));
        var n = t.find("input[type=hidden]").val();
        window.location.href = n
    },
    requireLogin: function (e) {
        CATARSE.requireLogin(e)
    }
}), CATARSE.ProjectsStartView = Backbone.View.extend({
    initialize: function () {
        everything_ok = function () {
            var e = !0;
            ok("#how_much_you_need") || (e = !1), ok("#about") || (e = !1), ok("#rewards") || (e = !1), ok("#links") || (e = !1), contact_ok() || (e = !1), accepted_terms() || (e = !1), e ? $("input[type=submit]").attr("disabled", !1) : $("input[type=submit]").attr("disabled", !0)
        }, ok = function (e) {
            var t = $(e).val();
            return t && t.length > 0 ? ($(e).addClass("ok").removeClass("error"), !0) : ($(e).addClass("error").removeClass("ok"), !1)
        }, contact_ok = function () {
            var e = $("#contact").val(),
                t = /^[a-z0-9\._-]+@([a-z0-9][a-z0-9-_]*[a-z0-9-_]\.)+([a-z-_]+\.)?([a-z-_]+)$/;
            return e.match(t) ? ($("#contact").addClass("ok").removeClass("error"), !0) : ($("#contact").addClass("error").removeClass("ok"), !1)
        }, accepted_terms = function () {
            return $("#accept").is(":checked")
        }, $("#how_much_you_need").keyup(everything_ok), $("#about").keyup(everything_ok), $("#rewards").keyup(everything_ok), $("#links").keyup(everything_ok), $("#contact").keyup(everything_ok), $("#accept").click(everything_ok), $("input,textarea,select").live("focus", function () {
            $("p.inline-hints").hide(), $(this).next("p.inline-hints").show()
        }), $("#how_much_you_need").focus()
    }
}), CATARSE.ProjectsVideo_embedView = CATARSE.ProjectsEmbedView.extend({}), CATARSE.StaticGuidelinesView = Backbone.View.extend({
    initialize: function () {
        $("input[type=checkbox]").click(function () {
            $(this).is(":checked") ? $("input[type=submit]").attr("disabled", !1) : $("input[type=submit]").attr("disabled", !0)
        }), $("#show_tips a").click(function (e) {
            e.preventDefault(), $("#more_tips").effect("highlight", {
                color: "#dfd"
            }, 1500), $(this).hide()
        }), $(document).ready(function () {
            $("input[type=submit]").show(), $(".submit_loader").remove(), $("input[type=checkbox]").is(":checked") && $("input[type=submit]").attr("disabled", !1)
        })
    }
}), CATARSE.UsersShowView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, "index", "backs", "projects", "credits", "comments", "request_refund", "settings", "closeCreditsModal"), CATARSE.router.route("", "index", this.index), CATARSE.router.route("backs", "backs", this.backs), CATARSE.router.route("projects", "projects", this.projects), CATARSE.router.route("credits", "credits", this.credits), CATARSE.router.route("comments", "comments", this.comments), CATARSE.router.route("settings", "settings", this.settings), CATARSE.router.route("request_refund/:back_id", "request_refund", this.request_refund), this.user = new CATARSE.User($("#user_profile").data("user")), this.render(), $("input,textarea").live("keypress", function (e) {
            e.which == "13" && $("button:contains('OK')").attr("disabled") && e.preventDefault()
        }), $("#user_feed input").live("keyup", function () {
            var e = $(this).val(),
                t = /^[a-z0-9\._-]+@([a-z0-9][a-z0-9-_]*[a-z0-9-_]\.)+([a-z-_]+\.)?([a-z-_]+)$/;
            e.match(t) ? ($(this).addClass("ok").removeClass("error"), $("button:contains('OK')").attr("disabled", !1)) : ($(this).addClass("error").removeClass("ok"), $("button:contains('OK')").attr("disabled", !0))
        }), $("input[type=checkbox]").click(function () {
            $.post("/users/update_attribute_on_the_spot", {
                id: "user__" + $(this).attr("id") + "__" + $("#id").val(),
                value: $(this).is(":checked") ? 1 : null
            })
        })
    },
    events: {
        "click #creditsModal .modal-footer a": "closeCreditsModal"
    },
    closeCreditsModal: function (e) {
        e.preventDefault(), this.$("#creditsModal").modal("hide")
    },
    BackView: CATARSE.ModelView.extend({
        template: function () {
            return $("#user_back_template").html()
        }
    }),
    BacksView: CATARSE.PaginatedView.extend({
        template: function () {
            return $("#user_backs_template").html()
        },
        emptyTemplate: function () {
            return $("#empty_user_back_template").html()
        },
        afterUpdate: function () {
            FB.XFBML.parse()
        }
    }),
    ProjectView: CATARSE.ModelView.extend({
        template: function () {
            return $("#user_project_template").html()
        }
    }),
    ProjectsView: CATARSE.PaginatedView.extend({
        template: function () {
            return $("#user_projects_template").html()
        },
        emptyTemplate: function () {
            return $("#empty_user_project_template").html()
        },
        afterUpdate: function () {
            FB.XFBML.parse()
        }
    }),
    index: function () {
        CATARSE.router.navigate("backs", {
            trigger: !0
        })
    },
    backs: function () {
        this.backsView && this.backsView.destroy(), this.selectItem("backed_projects"), this.backsView = new this.BacksView({
            modelView: this.BackView,
            collection: this.user.backs,
            loading: this.$("#loading"),
            el: this.$("#user_backed_projects")
        })
    },
    projects: function () {
        this.projectsView && this.projectsView.destroy(), this.selectItem("created_projects"), this.projectsView = new this.ProjectsView({
            modelView: this.ProjectView,
            collection: this.user.projects,
            loading: this.$("#loading"),
            el: this.$("#user_created_projects")
        })
    },
    credits: function () {
        this.selectItem("credits"), this.$("#loading").children().hide()
    },
    settings: function () {
        this.selectItem("settings"), this.$("#loading").children().hide()
    },
    comments: function () {
        this.selectItem("comments")
    },
    request_refund: function (e) {
        url = "/users/" + this.user.id + "/request_refund/" + e, $.post(url, function (t) {
            $("#creditsModal .modal-body").html(t.status), $("#current_credits").html(t.credits), $("#creditsModal").modal({
                backdrop: !0
            }), $("tr#back_" + e + " td.status").text(t.status)
        })
    },
    selectItem: function (e) {
        this.$("#user_profile_content .content").hide(), this.$("#user_profile_content #user_" + e + ".content").show();
        var t = this.$("#user_profile_menu #" + e + "_link");
        t.parent().children().removeClass("selected"), t.addClass("selected")
    }
}), jQuery(function () {
    function i(e, t, n) {
        var r, i;
        r = CATARSE, i = e ? e.split("::").slice(0, -1) : [], _.each(i, function (e) {
            r && (r = r[e])
        });
        if (r && t && t !== "" && r[t] && _.isFunction(r[t][n])) var s = window.view = new r[t][n]
    }
    function s(e) {
        CATARSE.Common && _.isFunction(CATARSE.Common[e]) && CATARSE.Common[e]()
    }
    var e, t, n, r;
    e = $("#main_content"), t = e.data("controller-class"), n = e.data("controller-name"), r = e.data("action"), s("init"), i(t, n, r), s("finish")
});