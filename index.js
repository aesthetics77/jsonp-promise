function jsonp(url, opts, fn) {
    var scriptDom = document.createElement('script');
    var params = opts.params;
    if (typeof params != 'undefined') {
        url += '?'
        for (param in params) {
            url += '&param='+params[param];
        }
    }
    scriptDom.setAttribute('src',url);
    document.body.append(scriptDom);
}