// ! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
// Uncompressed source: https://github.com/aFarkas/html5shiv
(function(a, b) {
  function h(a, b) {
    let c = a.createElement('p'),
      d = a.getElementsByTagName('head')[0] || a.documentElement;

    return c.innerHTML = `x<style>${b}</style>`, d.insertBefore(c.lastChild, d.firstChild);
  } function i() {
    const a = l.elements;

    return typeof a === 'string' ? a.split(' ') : a;
  } function j(a) {
    let b = {},
      c = a.createElement,
      f = a.createDocumentFragment,
      g = f(); a.createElement = function(a) {
      if (!l.shivMethods) {
        return c(a);
      } let f;

      return b[a] ? f = b[a].cloneNode() : e.test(a) ? f = (b[a] = c(a)).cloneNode() : f = c(a), f.canHaveChildren && !d.test(a) ? g.appendChild(f) : f;
    }, a.createDocumentFragment = Function('h,f', `return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(${i().join()
      .replace(/\w+/g, a => c(a), g.createElement(a), `c("${a}")`)});return n}`)(l, g);
  } function k(a) {
    let b;

    return a.documentShived ? a : (l.shivCSS && !f && (b = Boolean(h(a, 'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}'))), g || (b = !j(a)), b && (a.documentShived = b), a);
  } var c = a.html5 || {},
    d = /^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,
    e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
    f, g; (function() {
    const c = b.createElement('a'); c.innerHTML = '<xyz></xyz>', f = 'hidden' in c, f && typeof injectElementWithStyles === 'function' && injectElementWithStyles('#modernizr{}', b => {
      b.hidden = !0, f = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).display == 'none';
    }), g = c.childNodes.length == 1 || (function() {
      try {
        b.createElement('a');
      } catch (a) {
        return !0;
      } const c = b.createDocumentFragment();

      return typeof c.cloneNode === 'undefined' || typeof c.createDocumentFragment === 'undefined' || typeof c.createElement === 'undefined';
    }());
  }()); var l = {
    elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
    shivCSS: c.shivCSS !== !1,
    shivMethods: c.shivMethods !== !1,
    type: 'default',
    shivDocument: k
  }; a.html5 = l, k(b);
}(this, document));
