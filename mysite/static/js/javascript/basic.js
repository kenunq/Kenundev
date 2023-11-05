if (typeof $WH == "undefined") { var $WH = {} }
$WH.$E = function (e) {
    if (!e) { if (typeof event != 'undefined') { e = event } else { return null } }
    if (e.which) { e._button = e.which } else { e._button = e.button; if ($WH.Browser.ie6789 && e._button) { if (e._button & 4) { e._button = 2 } else if (e._button & 2) { e._button = 3 } } else { e._button = e.button + 1 } }
    e._target = e.target ? e.target : e.srcElement; e._wheelDelta = e.wheelDelta ? e.wheelDelta : -e.detail; return e
}; $WH.$A = function (a) {
    var r = []; for (var i = 0, len = a.length; i < len; ++i) { r.push(a[i]) }
    return r
}; if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        var
        __method = this, args = $WH.$A(arguments), object = args.shift(); return function () { return __method.apply(object, args.concat($WH.$A(arguments))) }
    }
}
$WH.bindfunc = function () { args = $WH.$A(arguments); var __method = args.shift(); var object = args.shift(); return function () { return __method.apply(object, args.concat($WH.$A(arguments))) } }; if (!String.prototype.ltrim) { String.prototype.ltrim = function () { return this.replace(/^\s*/, "") } }
if (!String.prototype.rtrim) { String.prototype.rtrim = function () { return this.replace(/\s*$/, "") } }
if (!String.prototype.trim) { String.prototype.trim = function () { return this.ltrim().rtrim() } }
if (!String.prototype.removeAllWhitespace) { String.prototype.removeAllWhitespace = function () { return this.replace("/s+/g", "") } }
$WH.strcmp = function (a, b) {
    if (a == b) { return 0 }
    if (a == null) { return -1 }
    if (b == null) { return 1 }
    var _a = parseFloat(a), _b = parseFloat(b); if (!isNaN(_a) && !isNaN(_b) && _a != _b) { return _a < _b ? -1 : 1 }
    if (typeof a == 'string' && typeof b == 'string') { return a.localeCompare(b) }
    return a < b ? -1 : 1
}
$WH.stringCompare = function (a, b) {
    if (a == b)
        return 0; if (a == null)
        return -1; if (b == null)
        return 1; var fa = parseFloat(a); var fb = parseFloat(b); if (!isNaN(fa) && !isNaN(fb) && fa != fb)
        return fa < fb ? -1 : 1; if (typeof a == 'string' && typeof b == 'string')
        return a.localeCompare(b); return a < b ? -1 : 1
}; $WH.trim = function (str) { return str.replace(/(^\s*|\s*$)/g, '') }
$WH.rtrim = function (z, y) {
    var a = z.length; while (--a > 0 && z.charAt(a) == y) { }
    z = z.substring(0, a + 1); if (z == y) { z = '' }
    return z
}
$WH.sprintf = function (z) {
    var i; for (i = 1, len = arguments.length; i < len; ++i) { z = z.replace('$' + i, arguments[i]) }
    return z
}
$WH.sprintfa = function (z) {
    var i; for (i = 1, len = arguments.length; i < len; ++i) { z = z.replace(new RegExp('\\$' + i, 'g'), arguments[i]) }
    return z
}
$WH.sprintfo = function (z) {
    if (typeof z == 'object' && z.length) {
        var args = z; z = args[0]; var i; for (i = 1; i < args.length; ++i) { z = z.replace('$' + i, args[i]) }
        return z
    }
}
$WH.str_replace = function (z, a, b) {
    while (z.indexOf(a) != -1) { z = z.replace(a, b) }
    return z
}
$WH.urlencode = function (z) { z = encodeURIComponent(z); z = $WH.str_replace(z, '+', '%2B'); return z }
$WH.urlencode2 = function (z) { z = encodeURIComponent(z); z = $WH.str_replace(z, '%20', '+'); z = $WH.str_replace(z, '%3D', '='); return z }
$WH.number_format = function (z) {
    x = ('' + parseFloat(z)).split('.'); z = x[0]; x = x.length > 1 ? "." + x[1] : ''; if (z.length <= 3) { return z + x }
    return $WH.number_format(z.substr(0, z.length - 3)) + ',' + z.substr(z.length - 3) + x
}
$WH.is_array = function (arr) { return !!(arr && arr.constructor == Array) }; $WH.in_array = function (arr, val, func, idx) {
    if (arr == null) { return -1 }
    if (func) { return $WH.in_arrayf(arr, val, func, idx) }
    for (var i = idx || 0, len = arr.length; i < len; ++i) { if (arr[i] == val) { return i } }
    return -1
}
$WH.in_arrayf = function (arr, val, func, idx) {
    for (var i = idx || 0, len = arr.length; i < len; ++i) { if (func(arr[i]) == val) { return i } }
    return -1
}
$WH.rs = function () {
    var c = $WH.rs.random; var r = ''; for (var i = 0; i < 16; i++) {
        var n = Math.floor(Math.random() * c.length); if (i == 0 && n < 11) { n += 10 }
        r += c.substring(n, n + 1)
    }
    return r
}; $WH.rs.random = "0123456789abcdefghiklmnopqrstuvwxyz"; $WH.isset = function (a) { return typeof window[a] != "undefined" }; if (!$WH.isset('console')) { console = { log: function () { } } }
$WH.array_walk = function (a, f, ud) { var res; for (var i = 0, len = a.length; i < len; ++i) { res = f(a[i], ud, a, i); if (res != null) { a[i] = res } } }
$WH.array_apply = function (a, f, ud) { var res; for (var i = 0, len = a.length; i < len; ++i) { f(a[i], ud, a, i) } }
$WH.array_filter = function (a, f) {
    var res = []; for (var i = 0, len = a.length; i < len; ++i) { if (f(a[i])) { res.push(a[i]) } }
    return res
}
$WH.array_index = function (a, r, f, z) {
    if (!$WH.is_array(a)) { return !1 }
    if (!a.__R || z) {
        a.__R = {}; if (!f) { f = function (x) { return x } }
        for (var i = 0, len = a.length; i < len; ++i) { a.__R[f(a[i])] = i }
    }
    return (r == null ? a.__R : !isNaN(a.__R[r]))
}
$WH.array_compare = function (a, b) {
    if (a.length != b.length) { return !1 }
    var o = {}; for (var i = a.length; i >= 0; --i) { o[a[i]] = !0 }
    var match = !0; for (var i = b.length; i >= 0; --i) { if (o[b[i]] === undefined) { match = !1 } }
    return match
}
$WH.array_unique = function (a) {
    var out = []; var tmp = {}; for (var i = a.length - 1; i >= 0; --i) { tmp[a[i]] = 1 }
    for (var i in tmp) { out.push(i) }
    return out
}
$WH.ge = function (z) {
    if (typeof z != 'string') { return z }
    return document.getElementById(z)
}
$WH.gE = function (z, y) { return z.getElementsByTagName(y) }
$WH.ce = function (z, p, c) {
    var a = document.createElement(z); if (p) { $WH.cOr(a, p) }
    if (c) { $WH.ae(a, c) }
    return a
}
$WH.de = function (z) {
    if (!z || !z.parentNode) { return }
    z.parentNode.removeChild(z)
}
$WH.ae = function (z, y) { if ($WH.is_array(y)) { $WH.array_apply(y, z.appendChild.bind(z)); return y } else { return z.appendChild(y) } }
$WH.aef = function (z, y) { return z.insertBefore(y, z.firstChild) }
$WH.ee = function (z, y) {
    if (!y) { y = 0 }
    while (z.childNodes[y]) { z.removeChild(z.childNodes[y]) }
}
$WH.ct = function (z) { return document.createTextNode(z) }
$WH.st = function (z, y) { if (z.firstChild && z.firstChild.nodeType == 3) { z.firstChild.nodeValue = y } else { $WH.aef(z, $WH.ct(y)) } }
$WH.nw = function (z) { z.style.whiteSpace = "nowrap" }
$WH.rf = function () { return !1 }
$WH.rf2 = function (e) {
    e = $WH.$E(e); if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) { return }
    return !1
}
$WH.tb = function () { this.blur() }
$WH.aE = function (z, y, x) { if (z.addEventListener) { z.addEventListener(y, x, !1) } else if (z.attachEvent) { z.attachEvent('on' + y, x) } }
$WH.dE = function (z, y, x) { if (z.removeEventListener) { z.removeEventListener(y, x, !1) } else if (z.detachEvent) { z.detachEvent('on' + y, x) } }
$WH.sp = function (z) {
    if (!z) { z = event }
    if ($WH.Browser.ie6789) { z.cancelBubble = !0 } else { z.stopPropagation() }
}
$WH.sc = function (z, y, x, w, v) {
    var a = new Date(); var b = z + "=" + escape(x) + "; "; a.setDate(a.getDate() + y); b += "expires=" + a.toUTCString() + "; "; b += "SameSite=strict;"; if (w) { b += "path=" + w + "; " }
    if (v) { b += "domain=" + v + "; " }
    document.cookie = b; $WH.gc(z); $WH.gc.C[z] = x
}
$WH.dc = function (z) { $WH.sc(z, -1); $WH.gc.C[z] = null }
$WH.gc = function (z) {
    if ($WH.gc.I == null) {
        var words = unescape(document.cookie).split("; "); $WH.gc.C = {}; for (var i = 0, len = words.length; i < len; ++i) {
            var
            pos = words[i].indexOf("="), name, value; if (pos != -1) { name = words[i].substr(0, pos); value = words[i].substr(pos + 1) } else { name = words[i]; value = "" }
            $WH.gc.C[name] = value
        }
        $WH.gc.I = 1
    }
    if (!z) { return $WH.gc.C } else { return $WH.gc.C[z] }
}
$WH.ns = function (a) { if ($WH.Browser.ie6789) { a.onfocus = $WH.tb; a.onmousedown = a.onselectstart = a.ondragstart = $WH.rf } }
$WH.eO = function (z) { for (var p in z) { delete z[p] } }
$WH.dO = function (s) { function f() { }; f.prototype = s; return new f }
$WH.cO = function (d, s) {
    for (var p in s) { if (s[p] !== null && typeof s[p] == "object" && s[p].length) { d[p] = s[p].slice(0) } else { d[p] = s[p] } }
    return d
}
$WH.cOr = function (d, s) {
    for (var p in s) {
        if (typeof s[p] == 'object') {
            if (s[p].length) { d[p] = s[p].slice(0) } else {
                if (!d[p]) { d[p] = {} }
                $WH.cOr(d[p], s[p])
            }
        } else { d[p] = s[p] }
    }
    return d
}
$WH.Browser = { ie: !!(window.attachEvent && !window.opera), opera: !!window.opera, safari: navigator.userAgent.indexOf('Safari') != -1, firefox: navigator.userAgent.indexOf('Firefox') != -1, chrome: navigator.userAgent.indexOf('Chrome') != -1 }; $WH.Browser.ie9 = $WH.Browser.ie && navigator.userAgent.indexOf('MSIE 9.0') != -1; $WH.Browser.ie8 = $WH.Browser.ie && navigator.userAgent.indexOf('MSIE 8.0') != -1 && !$WH.Browser.ie9; $WH.Browser.ie7 = $WH.Browser.ie && navigator.userAgent.indexOf('MSIE 7.0') != -1 && !$WH.Browser.ie8; $WH.Browser.ie6 = $WH.Browser.ie && navigator.userAgent.indexOf('MSIE 6.0') != -1 && !$WH.Browser.ie7; $WH.Browser.ie67 = $WH.Browser.ie6 || $WH.Browser.ie7; $WH.Browser.ie678 = $WH.Browser.ie67 || $WH.Browser.ie8; $WH.Browser.ie6789 = $WH.Browser.ie678 || $WH.Browser.ie9; navigator.userAgent.match(/Gecko\/([0-9]+)/); $WH.Browser.geckoVersion = parseInt(RegExp.$1) | 0; $WH.OS = { windows: navigator.appVersion.indexOf('Windows') != -1, mac: navigator.appVersion.indexOf('Macintosh') != -1, linux: navigator.appVersion.indexOf('Linux') != -1 }; $WH.localStorage = new function () {
    this.isSupported = function () {
        var _; try { _ = "localStorage" in window && window.localStorage !== null } catch (b) { _ = !1 }
        if (_) { try { localStorage.setItem("test", "123"); _ = localStorage.getItem("test") == "123"; localStorage.removeItem("test") } catch (b) { _ = !1 } }
        $WH.localStorage.isSupported = (function (c) { return c }).bind(null, _); return _
    }; this.set = function (idx, data) {
        if (!$WH.localStorage.isSupported()) { return }
        localStorage.setItem(idx, data)
    }; this.get = function (idx) {
        if (!$WH.localStorage.isSupported()) { return }
        return localStorage.getItem(idx)
    }; this.remove = function (idx) {
        if (!$WH.localStorage.isSupported()) { return }
        localStorage.removeItem(idx)
    }
}; $WH.g_getWindowSize = function () {
    var
    width = 0, height = 0; if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) { width = document.documentElement.clientWidth; height = document.documentElement.clientHeight } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) { width = document.body.clientWidth; height = document.body.clientHeight } else if (typeof window.innerWidth == 'number') { width = window.innerWidth; height = window.innerHeight }
    return { w: width, h: height }
}
$WH.g_getScroll = function () {
    var
    x = 0, y = 0; if (typeof (window.pageYOffset) == "number") { x = window.pageXOffset; y = window.pageYOffset } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { x = document.body.scrollLeft; y = document.body.scrollTop } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { x = document.documentElement.scrollLeft; y = document.documentElement.scrollTop }
    return { x: x, y: y }
}; $WH.g_getCursorPos = function (e) {
    var
    x, y; if (window.innerHeight) { if (!e.pageX || !e.pageY) { x = e.clientX; y = e.clientY } else { x = e.pageX; y = e.pageY } } else { var scroll = $WH.g_getScroll(); x = e.clientX + scroll.x; y = e.clientY + scroll.y }
    return { x: x, y: y }
}; $WH.ac = function (el, fixedPos) {
    var
    x = 0, y = 0, el2; while (el) {
        x += el.offsetLeft; y += el.offsetTop; el2 = el.parentNode; while (el2 && el2 != el.offsetParent && el2.offsetParent) {
            if (el2.scrollLeft || el2.scrollTop) { x -= (el2.scrollLeft | 0); y -= (el2.scrollTop | 0); break }
            el2 = el2.parentNode
        }
        el = el.offsetParent
    }
    if ($WH.isset('Lightbox') && Lightbox.isVisible()) { fixedPos = !0 }
    if (fixedPos) { var scroll = $WH.g_getScroll(); x += scroll.x; y += scroll.y }
    var result = [x, y]; result.x = x; result.y = y; return result
}
$WH.g_scrollTo = function (n, p) {
    var
    _, windowSize = $WH.g_getWindowSize(), scroll = $WH.g_getScroll(), bcw = windowSize.w, bch = windowSize.h, bsl = scroll.x, bst = scroll.y; n = $WH.ge(n); if (p == null) { p = [] } else if (typeof p == 'number') { p = [p] }
    _ = p.length; if (_ == 0) { p[0] = p[1] = p[2] = p[3] = 0 } else if (_ == 1) { p[1] = p[2] = p[3] = p[0] } else if (_ == 2) { p[2] = p[0]; p[3] = p[1] } else if (_ == 3) { p[3] = p[1] }
    _ = $WH.ac(n); var nl = _[0] - p[3], nt = _[1] - p[0], nr = _[0] + n.offsetWidth + p[1], nb = _[1] + n.offsetHeight + p[2]; if (nr - nl > bcw || nl < bsl) { bsl = nl } else if (nr - bcw > bsl) { bsl = nr - bcw }
    if (nb - nt > bch || nt < bst) { bst = nt } else if (nb - bch > bst) { bst = nb - bch }
    scrollTo(bsl, bst)
}
$WH.g_createReverseLookupJson = function (json) {
    var result = {}; for (var key in json) { result[json[key]] = key }
    return result
}; $WH.g_getLocaleFromDomain = function (domain) {
    var lookup = $WH.g_getLocaleFromDomain.L; if (domain) { var pos = domain.indexOf('.'); if (pos != -1) { domain = domain.substring(0, pos) } }
    return (lookup[domain] ? lookup[domain] : 8)
}
$WH.g_getLocaleFromDomain.L = { fr: 2, de: 3, cn: 4, es: 6, ru: 8, www: 0 }; $WH.g_getDomainFromLocale = function (locale) {
    var lookup; if ($WH.g_getDomainFromLocale.L) { lookup = $WH.g_getDomainFromLocale.L } else { lookup = $WH.g_getDomainFromLocale.L = $WH.g_createReverseLookupJson($WH.g_getLocaleFromDomain.L) }
    return (lookup[locale] ? lookup[locale] : 'www')
}
$WH.g_getIdFromTypeName = function (typeName) { var lookup = $WH.g_getIdFromTypeName.L; return (lookup[typeName] ? lookup[typeName] : -1) }; $WH.g_getIdFromTypeName.L = { npc: 1, object: 2, item: 3, itemset: 4, quest: 5, spell: 6, zone: 7, faction: 8, pet: 9, achievement: 10, title: 11, event: 12, "class": 13, race: 14, skill: 15, currency: 17, profile: 100 }; $WH.g_ajaxIshRequest = function (url) {
    var
    head = document.getElementsByTagName("head")[0], get = $WH.g_getGets(); if (get.refresh != null) { if (get.refresh.length) { url += ('&refresh=' + get.refresh) } else { url += '&refresh' } }
    if (get.locale != null) { url += '&locale=' + get.locale }
    $WH.ae(head, $WH.ce("script", { type: "text/javascript", src: url, charset: 'utf8' }))
}; $WH.g_getGets = function () {
    if ($WH.g_getGets.C != null) { return $WH.g_getGets.C }
    var queryString = $WH.g_getQueryString(); var gets = $WH.g_parseQueryString(queryString); $WH.g_getGets.C = gets; return gets
}; $WH.g_getQueryString = function () {
    var queryString = ''; if (location.pathname) { queryString += location.pathname.substr(1) }
    if (location.search) {
        if (location.pathname) { queryString += '&' }
        queryString += location.search.substr(1)
    }
    return queryString
}; $WH.g_parseQueryString = function (str) {
    str = decodeURIComponent(str); var words = str.split('&'); var params = {}; for (var i = 0, len = words.length; i < len; ++i) { $WH.g_splitQueryParam(words[i], params) }
    return params
}; $WH.g_splitQueryParam = function (word, params) {
    var pos = word.indexOf('='); var name; var value; if (pos != -1) { name = word.substr(0, pos); value = word.substr(pos + 1) } else { name = word; value = '' }
    params[name] = value
}; $WH.g_createRect = function (left, top, width, height) { return { l: left, t: top, r: left + width, b: top + height } }
$WH.g_intersectRect = function (a, b) { return !(a.l >= b.r || b.l >= a.r || a.t >= b.b || b.t >= a.b) }
$WH.g_setRatingLevel = function (sp, level, rating, value) {
    var newLvl = prompt($WH.sprintf(LANG.prompt_ratinglevel, 1, 80), level); if (newLvl != null) {
        newLvl |= 0; if (newLvl != level && newLvl >= 1 && newLvl <= 80) {
            level = newLvl; var a = $WH.g_convertRatingToPercent(level, rating, value); a = (Math.round(a * 100) / 100); if (rating != 12 && rating != 37) { a += "%" }
            sp.innerHTML = $WH.sprintf(LANG.tooltip_combatrating, a, level); sp.onclick = $WH.g_setRatingLevel.bind(0, sp, level, rating, value)
        }
    }
}
$WH.g_convertRatingToPercent = function (level, rating, value, classs) {
    var ratingBases = $WH.g_convertRatingToPercent.RB; if (level < 0) { level = 1 } else if (level > 80) { level = 80 }
    if ((rating == 14 || rating == 12 || rating == 15) && level < 34) { level = 34 }
    if ((rating == 28 || rating == 36) && (classs == 2 || classs == 6 || classs == 7 || classs == 11)) { ratingBases[rating] /= 1.3 }
    if (value < 0) { value = 0 }
    var percent; if (!ratingBases || ratingBases[rating] == null) { percent = 0 } else {
        var H; if (level > 70) { H = (82 / 52) * Math.pow((131 / 63), ((level - 70) / 10)) } else if (level > 60) { H = (82 / (262 - 3 * level)) } else if (level > 10) { H = ((level - 8) / 52) } else { H = 2 / 52 }
        percent = value / ratingBases[rating] / H
    }
    return percent
}
$WH.g_statToJson = { 1: 'health', 2: 'mana', 3: 'agi', 4: 'str', 5: 'int', 6: 'spi', 7: 'sta', 8: 'energy', 9: 'rage', 10: 'focus', 12: 'defrtng', 13: 'dodgertng', 14: 'parryrtng', 15: 'blockrtng', 16: 'mlehitrtng', 17: 'rgdhitrtng', 18: 'splhitrtng', 19: 'mlecritstrkrtng', 20: 'rgdcritstrkrtng', 21: 'splcritstrkrtng', 22: '_mlehitrtng', 23: '_rgdhitrtng', 24: '_splhitrtng', 25: '_mlecritstrkrtng', 26: '_rgdcritstrkrtng', 27: '_splcritstrkrtng', 28: 'mlehastertng', 29: 'rgdhastertng', 30: 'splhastertng', 31: 'hitrtng', 32: 'critstrkrtng', 33: '_hitrtng', 34: '_critstrkrtng', 35: 'resirtng', 36: 'hastertng', 37: 'exprtng', 38: 'atkpwr', 39: 'rgdatkpwr', 40: 'feratkpwr', 41: 'splheal', 42: 'spldmg', 43: 'manargn', 44: 'armorpenrtng', 45: 'splpwr', 46: 'healthrgn', 47: 'splpen', 48: 'block', 49: 'mastrtng', 50: 'armor', 51: 'firres', 52: 'frores', 53: 'holres', 54: 'shares', 55: 'natres', 56: 'arcres', 57: 'firsplpwr', 58: 'frosplpwr', 59: 'holsplpwr', 60: 'shasplpwr', 61: 'natsplpwr', 62: 'arcsplpwr' }; $WH.g_jsonToStat = {}; for (var i in $WH.g_statToJson) { $WH.g_jsonToStat[$WH.g_statToJson[i]] = i }
$WH.g_individualToGlobalStat = { 16: 31, 17: 31, 18: 31, 19: 32, 20: 32, 21: 32, 22: 33, 23: 33, 24: 33, 25: 34, 26: 34, 27: 34, 28: 36, 29: 36, 30: 36 }; $WH.g_convertScalingFactor = function (level, factor, dist, stat, json) {
    var scalingValues = $WH.g_convertScalingFactor.SV; var scalingDistributions = $WH.g_convertScalingFactor.SD; if (!scalingValues[level]) {
        if (g_user.roles & U_GROUP_ADMIN) { alert('There are no item scaling values for level ' + level) }
        return (json ? {} : 0)
    }
    var result = {}, scaleValue = scalingValues[level], scaleDistribution = scalingDistributions[dist]; if (!scaleDistribution || !(stat >= 0 && stat <= 9)) { result.v = scaleValue[factor] } else { result.n = $WH.g_statToJson[scaleDistribution[stat]]; result.s = scaleDistribution[stat]; result.v = Math.floor(scaleValue[factor] * scaleDistribution[stat + 10] / 10000.0) }
    return (json ? result : result.v)
}
if (!$WH.wowheadRemote) { $WH.g_ajaxIshRequest('?data=item-scaling') }
$WH.g_getDataSource = function () {
    if ($WH.isset('g_pageInfo')) {
        switch (g_pageInfo.type) {
            case 3: if ($WH.isset('g_items')) { return g_items }
            case 6: if ($WH.isset('g_spells')) { return g_spells }
        }
    }
    return []
}
$WH.g_setJsonItemLevel = function (json, level) {
    if (!json.scadist || !json.scaflags) { return }
    json.bonuses = json.bonuses || {}; var scaleColumn = -1, armorColumn = -1, damageColumn = -1, splPwrColumn = -1, scaleMask = 0x04001F, armorMask = 0xF801E0, damageMask = 0x007E00, splPwrMask = 0x008000, meleeMask = 0x001400; for (var i = 0; i < 24; ++i) { var mask = 1 << i; if (mask & json.scaflags) { if (mask & scaleMask && scaleColumn < 0) { scaleColumn = i } else if (mask & armorMask && armorColumn < 0) { armorColumn = i } else if (mask & damageMask && damageColumn < 0) { damageColumn = i } else if (mask & splPwrMask && splPwrColumn < 0) { splPwrColumn = i } } }
    if (scaleColumn >= 0) {
        for (var i = 0; i < 10; ++i) {
            var scaleData = $WH.g_convertScalingFactor(level, scaleColumn, json.scadist, i, 1); if (scaleData.n) { json[scaleData.n] = scaleData.v }
            json.bonuses[scaleData.s] = scaleData.v
        }
    }
    if (armorColumn >= 0) { json.armor = $WH.g_convertScalingFactor(level, armorColumn) }
    if (damageColumn >= 0) {
        var
        damageRange = (json.scaflags & meleeMask ? 0.2 : 0.3), damageType = (json.scaflags & meleeMask ? "mle" : "rgd"); json.dps = json[damageType + "dps"] = $WH.g_convertScalingFactor(level, damageColumn); json.dmgmin = json[damageType + "dmgmin"] = Math.floor(json.dps * json.speed * (1 - damageRange)); json.dmgmax = json[damageType + "dmgmax"] = Math.floor(json.dps * json.speed * (1 + damageRange))
        if (json.feratkpwr) { json.feratkpwr = Math.max(0, Math.floor((json.dps - 54.8) * 14)) }
    }
    if (splPwrColumn >= 0) { json.splpwr = json.bonuses[45] = $WH.g_convertScalingFactor(level, splPwrColumn) }
    if (json.gearscore != null) {
        if (json._gearscore == null)
            json._gearscore = json.gearscore; var equivLevel = Math.min(80, level + 1); if (equivLevel >= 70)
            n = ((equivLevel - 70) * 9.5) + 105; else if (equivLevel >= 60)
            n = ((equivLevel - 60) * 4.5) + 60; else n = equivLevel + 5; json.gearscore = (json._gearscore * n) / 1.8
    }
}; $WH.g_setTooltipLevel = function (tooltip, level) {
    var _ = typeof tooltip; if (_ == 'number') { var arr = $WH.g_getDataSource(); if (arr[tooltip] && arr[tooltip][(buff ? 'buff_' : 'tooltip_') + Locale.getName()]) { tooltip = arr[tooltip][(buff ? 'buff_' : 'tooltip_') + Locale.getName()] } else { return tooltip } } else if (_ != 'string') { return tooltip }
    _ = tooltip.match(/<!--\?([0-9:]*)-->/); if (!_) { return tooltip }
    _ = _[1].split(':'); var level = Math.min(parseInt(_[2]), Math.max(parseInt(_[1]), level)), scaDist = parseInt(_[4]) || 0; if (scaDist) {
        if (!tooltip.match(/<!--pts[0-9](:[0-9])?-->/g)) {
            var
            scaFlags = parseInt(_[5]) || 0, speed = tooltip.match(/<!--spd-->(\d\.\d+)/); if (speed) { speed = parseFloat(speed[1]) || 0 }
            var json = { scadist: scaDist, scaflags: scaFlags, speed: speed }; $WH.g_setJsonItemLevel(json, level); tooltip = tooltip.replace(/(<!--asc(\d+)-->)([^<]+)/, function (_all, prefix, armorType) {
                _ = armorType; if (level < 40 && (armorType == 3 || armorType == 4)) { --_ }
                return $WH.isset('g_itemset_types') ? prefix + g_itemset_types[_] : _all
            }); tooltip = tooltip.replace(/(<!--dmg-->)\d+(\D+)\d+/, function (_all, prefix, infix) { return prefix + json.dmgmin + infix + json.dmgmax }); tooltip = tooltip.replace(/(<!--dps-->\D*?)(\d+\.\d)/, function (_all, prefix) { return prefix + json.dps.toFixed(1) }); tooltip = tooltip.replace(/<span class="c11"><!--fap-->(\D*?)(\d+)(\D*?)<\/span>(<br \/>)?/i, function (_all, prefix, value, statText, br) {
                var style; value = Math.floor((json.dps - 54.8) * 14); if (json.dps > 54.8 && value > 0) { style = ''; br = (br ? '<br />' : '') } else { value = 0; style = ' style="display: none"'; br = (br ? '<!--br-->' : '') }
                return '<span class="c11"' + style + '><!--fap-->' + prefix + value + statText + '</span>' + br
            }); tooltip = tooltip.replace(/(<!--amr-->)\d+/, function (_all, prefix) { return prefix + json.armor }); tooltip = tooltip.replace(/<span><!--stat(\d+)-->[-+]\d+(\D*?)<\/span>(<!--e-->)?(<!--ps-->)?(<br ?\/?>)?/gi, function (_all, statId, statText, e, ps, br) {
                var
                style, value = json.bonuses[statId]; if (value) { value = (value > 0 ? '+' : '-') + value; style = ''; br = (br ? '<br />' : '') } else { value = '+0'; style = ' style="display: none"'; br = (br ? '<!--br-->' : '') }
                return '<span' + style + '><!--stat' + statId + '-->' + value + statText + '</span>' + (e || '') + (ps || '') + br
            }); tooltip = tooltip.replace(/<span class="q2">(.*?)<!--rtg(\d+)-->\d+(.*?)<\/span>(<br \/>)?/gi, function (_all, prefix, ratingId, suffix, e, ps, br) {
                var
                style, value = json.bonuses[$WH.g_individualToGlobalStat[ratingId] || ratingId]; if (value) { style = ''; br = (br ? '<br />' : '') } else { style = ' style="display: none"'; br = (br ? '<!--br-->' : '') }
                return '<span class="q2"' + style + '>' + prefix + '<!--rtg' + ratingId + '-->' + value + suffix + '</span>' + br
            })
        }
    }
    tooltip = tooltip.replace(/<!--ppl(\d+):(\d+):(\d+):(\d+)-->\s*\d+/gi, function (_all, minLvl, maxLvl, base, ppl) { return '<!--ppl' + minLvl + ':' + maxLvl + ':' + base + ':' + ppl + '-->' + Math.round(parseInt(base) + (Math.min(Math.max(level, minLvl), maxLvl) - minLvl) * ppl / 100) }); nMatch = []; tooltip = tooltip.replace(/(<!--rtg%(\d+)-->)([\.0-9]+)/g, function (_all, prefix, ratingId, percent) {
        if (!nMatch[ratingId])
            nMatch[ratingId] = 0; _ = tooltip.match(new RegExp('<!--rtg' + ratingId + '-->(\\d+)', 'g'))[nMatch[ratingId]++]; if (!_) { return _all }
        return prefix + Math.round($WH.g_convertRatingToPercent(level, ratingId, _.split('>')[1]) * 100) / 100
    }); tooltip = tooltip.replace(/(<!--\?\d+:\d+:\d+:)\d+((:\d+:\d+)?-->)/, '$1' + level + '$2'); tooltip = tooltip.replace(/<!--lvl-->\d+/g, '<!--lvl-->' + level); return tooltip
}
$WH.g_setTooltipSpells = function (tooltip, spells, spellData, position) {
    var
    known = {}, regex = '<!--sp([0-9]+):[01]-->.*?<!--sp\\1-->', effects; if (spells == null) { spells = [] }
    if (position == null) { position = {} }
    for (var i = 0; i < spells.length; ++i) { known[spells[i]] = 1 }
    if (effects = tooltip.match(new RegExp(regex, 'g'))) {
        for (var i = 0; i < effects.length; ++i) {
            var spellId = effects[i].match(regex)[1]; known[spellId] = (known[spellId] | 0); if (position[spellId] == null) { position[spellId] = -1 }
            position[spellId]++; if (spellData[spellId] == null || spellData[spellId][position[spellId]] == null || spellData[spellId][position[spellId]][known[spellId]] == null) { continue }
            var effect = spellData[spellId][position[spellId]][known[spellId]]; effect = $WH.g_setTooltipSpells(effect.toString(), spells, spellData, position); tooltip = tooltip.replace(effects[i], '<!--sp' + spellId + ':' + known[spellId] + '-->' + effect + '<!--sp' + spellId + '-->')
        }
    }
    return tooltip
}
$WH.g_enhanceTooltip = function (tooltip, isStatic, useGets, showSlider, buff, knownSpells, chooseSpells) {
    var
    _ = typeof tooltip, spellJson; if (_ == 'number') {
        var
        arr = $WH.g_getDataSource(), id = tooltip; if (arr[id] && arr[id][(buff ? 'buff_' : 'tooltip_') + Locale.getName()]) { tooltip = arr[id][(buff ? 'buff_' : 'tooltip_') + Locale.getName()]; spellJson = arr[id][(buff ? 'buff' : '') + 'spells_' + Locale.getName()]; if (spellJson) { tooltip = $WH.g_setTooltipSpells(tooltip, knownSpells, spellJson) } } else { return tooltip }
    } else if (_ != 'string') { return tooltip }
    if (useGets) { var get = $WH.g_getGets(); if (get.lvl) { tooltip = $WH.g_setTooltipLevel(tooltip, get.lvl, buff) } }
    if (isStatic) { tooltip = tooltip.replace(/<span class="q2"><!--addamr(\d+)--><span>.*?<\/span><\/span>/i, function (_all, addArmor) { return '<span class="q2 tip" onmouseover="$WH.Tooltip.showAtCursor(event, $WH.sprintf(LANG.tooltip_armorbonus, ' + addArmor + '), 0, 0, \'q\')" onmousemove="$WH.Tooltip.cursorUpdate(event)" onmouseout="$WH.Tooltip.hide()">' + _all + '</span>' }); tooltip = tooltip.replace(/\(([^\)]*?<!--lvl-->[^\(]*?)\)/gi, function (_all, inner) { return '(<a href="javascript:;" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="$WH.g_staticTooltipLevelClick(this, null, 0)" onmouseover="$WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + LANG.tooltip_changelevel + \'</span>\')" onmousemove="$WH.Tooltip.cursorUpdate(event)" onmouseout="$WH.Tooltip.hide()">' + inner + '</a>)' }) }
    if (showSlider && Slider) { if (buff && buff.slider) { buff.bufftip = this } else { var _ = tooltip.match(/<!--\?(\d+):(\d+):(\d+):(\d+)/); if (_ && _[2] != _[3]) { this.slider = Slider.init(showSlider, { minValue: parseInt(_[2]), maxValue: parseInt(_[3]), onMove: $WH.g_tooltipSliderMove.bind(this) }); Slider.setValue(this.slider, parseInt(_[4])); this.slider.onmousemove = $WH.Tooltip.cursorUpdate; this.slider.onmouseout = $WH.Tooltip.hide; this.slider.onmouseover = function (e) { $WH.Tooltip.showAtCursor(e, LANG.tooltip_changelevel2, 0, 0, 'q2') } } } }
    if (chooseSpells) {
        if (buff && buff.modified) { buff.bufftip = this } else {
            for (var i in spellJson) {
                if (!g_spells[i] || $WH.in_array(knownSpells, i) != -1) { continue }
                $(chooseSpells).append('<input type="checkbox" id="known-' + i + '" />').append('<label for="known-' + i + '"><a rel="spell=' + i + '&know=' + i + '&domain=' + Locale.current.domain + '">' + g_spells[i]['name_' + Locale.getName()] + (g_spells[i]['rank_' + Locale.getName()] ? ' (' + g_spells[i]['rank_' + Locale.getName()] + ')' : '') + '</a></label>').append('<br />'); $('#known-' + i).change($WH.g_tooltipSpellsChange.bind(this))
            }
        }
        this.modified = [chooseSpells, spellJson, knownSpells]; $(chooseSpells).toggle(!$(chooseSpells).is(':empty'))
    }
    return tooltip
}
$WH.g_staticTooltipLevelClick = function (div, level, noSlider, buff) {
    while (div.className.indexOf('tooltip') == -1) { div = div.parentNode }
    var _ = div.innerHTML; _ = _.match(/<!--\?(\d+):(\d+):(\d+):(\d+)/); if (!_) { return }
    var itemId = parseInt(_[1]), minLevel = parseInt(_[2]), maxLevel = parseInt(_[3]), curLevel = parseInt(_[4]); if (minLevel >= maxLevel) { return }
    if (!level) { level = prompt($WH.sprintf(LANG.prompt_ratinglevel, minLevel, maxLevel), curLevel) }
    level = parseInt(level); if (isNaN(level)) { return }
    if (level == curLevel || level < minLevel || level > maxLevel) { return }
    var arr = $WH.g_getDataSource(); _ = $WH.g_setTooltipLevel(arr[itemId][(buff ? 'buff_' : 'tooltip_') + Locale.getName()], level, buff); _ = $WH.g_enhanceTooltip(_, !0); div.innerHTML = '<table><tr><td>' + _ + '</td><th style="background-position: top right"></th></tr><tr><th style="background-position: bottom left"></th><th style="background-position: bottom right"></th></tr></table>'; $WH.Tooltip.fixSafe(div, 1, 1); if (div.slider && !noSlider) { Slider.setValue(div.slider, level) }
    if (!buff) { ($WH.g_tooltipSpellsChange.bind(div))() }
}
$WH.g_tooltipSliderMove = function (e, slider, position) {
    $WH.g_staticTooltipLevelClick(this, position.value, 1); if (this.bufftip) { $WH.g_staticTooltipLevelClick(this.bufftip, position.value, 1, 1) }
    $WH.Tooltip.hide()
}
$WH.g_tooltipSpellsChange = function () {
    if (!this.modified) { return }
    var chooseSpells = this.modified[0], spellJson = this.modified[1], knownSpells = []; $.each($('input:checked', chooseSpells), function (i, s) { knownSpells.push(parseInt(s.id.replace('known-', ''))) }); this.modified[2] = knownSpells; this.innerHTML = $WH.g_setTooltipSpells(this.innerHTML, knownSpells, spellJson); if (this.bufftip) { ($WH.g_tooltipSpellsChange.bind(this.bufftip))() }
}
$WH.Tooltip = {
    create: function (htmlTooltip, secondary) {
        var
        d = $WH.ce('div'), t = $WH.ce('table'), tb = $WH.ce('tbody'), tr1 = $WH.ce('tr'), tr2 = $WH.ce('tr'), td = $WH.ce('td'), th1 = $WH.ce('th'), th2 = $WH.ce('th'), th3 = $WH.ce('th'); d.className = 'wowhead-tooltip'; th1.style.backgroundPosition = 'top right'; th2.style.backgroundPosition = 'bottom left'; th3.style.backgroundPosition = 'bottom right'; if (htmlTooltip) { td.innerHTML = htmlTooltip }
        $WH.ae(tr1, td); $WH.ae(tr1, th1); $WH.ae(tb, tr1); $WH.ae(tr2, th2); $WH.ae(tr2, th3); $WH.ae(tb, tr2); $WH.ae(t, tb); if (!secondary) { $WH.Tooltip.icon = $WH.ce('p'); $WH.Tooltip.icon.style.visibility = 'hidden'; $WH.ae($WH.Tooltip.icon, $WH.ce('div')); $WH.ae(d, $WH.Tooltip.icon) }
        $WH.ae(d, t); if (!secondary) { var img = $WH.ce('div'); img.className = 'tooltip-powered'; $WH.ae(d, img); $WH.Tooltip.logo = img }
        return d
    }, getMultiPartHtml: function (upper, lower) { return '<table><tr><td>' + upper + '</td></tr></table><table><tr><td>' + lower + '</td></tr></table>' }, fix: function (tooltip, noShrink, visible) {
        var
        table = $WH.gE(tooltip, 'table')[0], td = $WH.gE(table, 'td')[0], c = td.childNodes; tooltip.className = $WH.trim(tooltip.className.replace('tooltip-slider', '')); if (c.length >= 2 && c[0].nodeName == 'TABLE' && c[1].nodeName == 'TABLE') {
            c[0].style.whiteSpace = 'nowrap'; var m = parseInt(tooltip.style.width); if (!tooltip.slider || !m) { if (c[1].offsetWidth > 300) { m = Math.max(300, c[0].offsetWidth) + 20 } else { m = Math.max(c[0].offsetWidth, c[1].offsetWidth) + 20 } }
            m = Math.min(320, m); if (m > 20) {
                tooltip.style.width = m + 'px'; c[0].style.width = c[1].style.width = '100%'; if (tooltip.slider) { Slider.setSize(tooltip.slider, m - 6); tooltip.className += ' tooltip-slider' }
                if (!noShrink && tooltip.offsetHeight > document.body.clientHeight) { table.className = 'shrink' }
            }
        }
        if (visible) { tooltip.style.visibility = 'visible' }
    }, fixSafe: function (p1, p2, p3) { $WH.Tooltip.fix(p1, p2, p3) }, append: function (el, htmlTooltip) { var el = $WH.ge(el); var tooltip = $WH.Tooltip.create(htmlTooltip); $WH.ae(el, tooltip); $WH.Tooltip.fixSafe(tooltip, 1, 1) }, prepare: function () {
        if ($WH.Tooltip.tooltip) { return }
        var _ = $WH.Tooltip.create(); _.style.position = 'absolute'; _.style.left = _.style.top = '-2323px'; $WH.ae(document.body, _); $WH.Tooltip.tooltip = _; $WH.Tooltip.tooltipTable = $WH.gE(_, 'table')[0]; $WH.Tooltip.tooltipTd = $WH.gE(_, 'td')[0]; var _ = $WH.Tooltip.create(null, !0); _.style.position = 'absolute'; _.style.left = _.style.top = '-2323px'; $WH.ae(document.body, _); $WH.Tooltip.tooltip2 = _; $WH.Tooltip.tooltipTable2 = $WH.gE(_, 'table')[0]; $WH.Tooltip.tooltipTd2 = $WH.gE(_, 'td')[0]
    }, set: function (text, text2) {
        var _ = $WH.Tooltip.tooltip; _.style.width = '550px'; _.style.left = '-2323px'; _.style.top = '-2323px'; if (text.nodeName) { $WH.ee($WH.Tooltip.tooltipTd); $WH.ae($WH.Tooltip.tooltipTd, text) } else { $WH.Tooltip.tooltipTd.innerHTML = text }
        _.style.display = ''; $WH.Tooltip.fix(_, 0, 0); if (text2) {
            $WH.Tooltip.showSecondary = !0; var _ = $WH.Tooltip.tooltip2; _.style.width = '550px'; _.style.left = '-2323px'; _.style.top = '-2323px'; if (text2.nodeName) { $WH.ee($WH.Tooltip.tooltipTd2); $WH.ae($WH.Tooltip.tooltipTd2, text2) } else { $WH.Tooltip.tooltipTd2.innerHTML = text2 }
            _.style.display = ''; $WH.Tooltip.fix(_, 0, 0)
        } else { $WH.Tooltip.showSecondary = !1 }
    }, moveTests: [[null, null], [null, !1], [!1, null], [!1, !1]], move: function (x, y, width, height, paddX, paddY) {
        if (!$WH.Tooltip.tooltipTable) { return }
        var tooltip = $WH.Tooltip.tooltip, tow = $WH.Tooltip.tooltipTable.offsetWidth, toh = $WH.Tooltip.tooltipTable.offsetHeight, tt2 = $WH.Tooltip.tooltip2, tt2w = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetWidth : 0, tt2h = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetHeight : 0, _; tooltip.style.width = tow + 'px'; tt2.style.width = tt2w + 'px'; var rect, safe; for (var i = 0, len = $WH.Tooltip.moveTests.length; i < len; ++i) { _ = $WH.Tooltip.moveTests[i]; rect = $WH.Tooltip.moveTest(x, y, width, height, paddX, paddY, _[0], _[1]); break }
        tooltip.style.left = rect.l + 'px'; tooltip.style.top = rect.t + 'px'; tooltip.style.visibility = 'visible'; if ($WH.Tooltip.showSecondary) { tt2.style.left = rect.l + tow + 'px'; tt2.style.top = rect.t + 'px'; tt2.style.visibility = 'visible' }
    }, moveTest: function (left, top, width, height, paddX, paddY, rightAligned, topAligned) {
        var
        bakLeft = left, bakTop = top, tooltip = $WH.Tooltip.tooltip, tow = $WH.Tooltip.tooltipTable.offsetWidth, toh = $WH.Tooltip.tooltipTable.offsetHeight, tt2 = $WH.Tooltip.tooltip2, tt2w = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetWidth : 0, tt2h = $WH.Tooltip.showSecondary ? $WH.Tooltip.tooltipTable2.offsetHeight : 0, winSize = $WH.g_getWindowSize(), scroll = $WH.g_getScroll(), bcw = winSize.w, bch = winSize.h, bsl = scroll.x, bst = scroll.y, minX = bsl, minY = bst, maxX = bsl + bcw, maxY = bst + bch; if (rightAligned == null) { rightAligned = (left + width + tow + tt2w <= maxX) }
        if (topAligned == null) { topAligned = (top - Math.max(toh, tt2h) >= minY) }
        if (rightAligned) { left += width + paddX } else { left = Math.max(left - (tow + tt2w), minX) - paddX }
        if (topAligned) { top -= Math.max(toh, tt2h) + paddY } else { top += height + paddY }
        if (left < minX) { left = minX } else if (left + tow + tt2w > maxX) { left = maxX - (tow + tt2w) }
        if (top < minY) { top = minY } else if (top + Math.max(toh, tt2h) > maxY) { top = Math.max(bst, maxY - Math.max(toh, tt2h)) }
        if ($WH.Tooltip.iconVisible) { if (bakLeft >= left - 48 && bakLeft <= left && bakTop >= top - 4 && bakTop <= top + 48) { top -= 48 - (bakTop - top) } }
        return $WH.g_createRect(left, top, tow, toh)
    }, show: function (_this, text, paddX, paddY, spanClass, text2) {
        if ($WH.Tooltip.disabled) { return }
        if (!paddX || paddX < 1) { paddX = 1 }
        if (!paddY || paddY < 1) { paddY = 1 }
        if (spanClass) { text = '<span class="' + spanClass + '">' + text + '</span>' }
        var coords = $WH.ac(_this); $WH.Tooltip.prepare(); $WH.Tooltip.set(text, text2); $WH.Tooltip.move(coords.x, coords.y, _this.offsetWidth, _this.offsetHeight, paddX, paddY)
    }, showAtCursor: function (e, text, paddX, paddY, spanClass, text2) {
        if ($WH.Tooltip.disabled) { return }
        if (!paddX || paddX < 10) { paddX = 10 }
        if (!paddY || paddY < 10) { paddY = 10 }
        if (spanClass) { text = '<span class="' + spanClass + '">' + text + '</span>'; if (text2) { text2 = '<span class="' + spanClass + '">' + text2 + '</span>' } }
        e = $WH.$E(e); var pos = $WH.g_getCursorPos(e); $WH.Tooltip.prepare(); $WH.Tooltip.set(text, text2); $WH.Tooltip.move(pos.x, pos.y, 0, 0, paddX, paddY)
    }, showAtXY: function (text, x, y, paddX, paddY, text2) {
        if ($WH.Tooltip.disabled) { return }
        $WH.Tooltip.prepare(); $WH.Tooltip.set(text, text2); $WH.Tooltip.move(x, y, 0, 0, paddX, paddY)
    }, cursorUpdate: function (e, x, y) {
        if ($WH.Tooltip.disabled || !$WH.Tooltip.tooltip) { return }
        e = $WH.$E(e); if (!x || x < 10) { x = 10 }
        if (!y || y < 10) { y = 10 }
        var pos = $WH.g_getCursorPos(e); $WH.Tooltip.move(pos.x, pos.y, 0, 0, x, y)
    }, hide: function () {
        if ($WH.Tooltip.tooltip) { $WH.Tooltip.tooltip.style.display = 'none'; $WH.Tooltip.tooltip.visibility = 'hidden'; $WH.Tooltip.tooltipTable.className = ''; $WH.Tooltip.setIcon(null) }
        if ($WH.Tooltip.tooltip2) { $WH.Tooltip.tooltip2.style.display = 'none'; $WH.Tooltip.tooltip2.visibility = 'hidden'; $WH.Tooltip.tooltipTable2.className = '' }
    }, setIcon: function (icon) {
        $WH.Tooltip.prepare(); if (icon) { $WH.Tooltip.icon.style.backgroundImage = 'url(' + 'static' + '/images/wow/icons/medium/' + icon.toLowerCase() + '.jpg)'; $WH.Tooltip.icon.style.visibility = 'visible' } else { $WH.Tooltip.icon.style.backgroundImage = 'none'; $WH.Tooltip.icon.style.visibility = 'hidden' }
        $WH.Tooltip.iconVisible = icon ? 1 : 0
    }, simple: function (element, text, className, fixed) {
        if (fixed)
            element.onmouseover = function (x) { $WH.Tooltip.show(element, text, !1, !1, className) }; else { element.onmouseover = function (x) { $WH.Tooltip.showAtCursor(x, text, !1, !1, className) }; element.onmousemove = $WH.Tooltip.cursorUpdate }
        element.onmouseout = $WH.Tooltip.hide
    }
}; $WH.g_createButton = function (text, href, opts) {
    var classes = []; var styles = []; var func = null; if (!opts)
        opts = {}; if (!opts['no-margin'])
        styles.push('margin-left:5px'); if (typeof href != 'string' || href === '')
        href = 'javascript:;'; if (typeof opts['class'] == 'string')
        classes.push(opts['class']); if (opts.disabled)
        href = 'javascript:;'; if (typeof opts['float'] != 'undefined' && !opts['float'])
        styles.push('float:right'); if (typeof opts.style == 'string')
        styles.push(opts.style); if (typeof opts.click == 'function' && !opts.disabled)
        func = opts.click; var btn = RedButton.create(text || '\0', !opts.disabled, func); if (styles.length)
        $(btn).attr('style', styles.join(';')); if (classes.length)
        $(btn).addClass(classes.join(' ')); btn.href = href; if (opts['new-window'])
        btn.target = '_blank'; if (typeof opts.id == 'string')
        btn.id = opts.id; if (typeof opts.tooltip != 'undefined') {
            if (opts.tooltip === !1)
                btn.rel = 'np'; else if (typeof opts.tooltip == 'string')
                $WH.Tooltip.simple(btn, opts.tooltip, null, !0); else if (typeof opts.tooltip == 'object' && opts.tooltip.text)
                $WH.Tooltip.simple(btn, opts.tooltip.text, opts.tooltip['class'], !0)
        }
    return btn
}
$WH.g_getProfileIcon = function (raceId, classId, gender, level, icon, size) {
    var raceXclass = { 10: { 6: 1, 3: 1, 8: 1, 2: 1, 5: 1, 4: 1, 9: 1 }, 11: { 6: 1, 3: 1, 8: 1, 2: 1, 5: 1, 7: 1, 1: 1 }, 3: { 6: 1, 3: 1, 2: 1, 5: 1, 4: 1, 1: 1 }, 7: { 6: 1, 8: 1, 4: 1, 9: 1, 1: 1 }, 1: { 6: 1, 8: 1, 2: 1, 5: 1, 4: 1, 9: 1, 1: 1 }, 4: { 6: 1, 11: 1, 3: 1, 5: 1, 4: 1, 1: 1 }, 2: { 6: 1, 3: 1, 4: 1, 7: 1, 9: 1, 1: 1 }, 6: { 6: 1, 11: 1, 3: 1, 7: 1, 1: 1 }, 8: { 6: 1, 3: 1, 8: 1, 5: 1, 4: 1, 7: 1, 1: 1 }, 5: { 6: 1, 8: 1, 5: 1, 4: 1, 9: 1, 1: 1 } }; if (icon) { return isNaN(icon) ? icon : '?profile=avatar' + (size ? '&size=' + size : '') + '&id=' + icon + (size == 'tiny' ? '.gif' : '.jpg') }
    if (!g_file_races[raceId] || !g_file_classes[classId] || !g_file_genders[gender] || !raceXclass[raceId] || !raceXclass[raceId][classId] || (classId == 6 && level < 55)) { return 'inv_misc_questionmark' }
    return 'chr_' + g_file_races[raceId] + '_' + g_file_genders[gender] + '_' + g_file_classes[classId] + '0' + (level > 59 ? (Math.floor((level - 60) / 10) + 2) : 1)
}