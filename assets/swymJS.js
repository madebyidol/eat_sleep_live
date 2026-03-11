// !!!! - DO NOT MODIFY - !!!!
// THIS FILE IS DEPLOYED AUTOMATICALLY BY MATTv2.
//
//  Deployment info:
//    Updated at:     2022-01-18T16:22:27+00:00
//    Cause:          Manual deployment.
//    Deployment ID:  147891
//    Project:        310
//    Environment:    1410 - qa-testing
//    MD5:            9d99342e85815b7387ed4a3bda56ee0f
//    Signature:      eyJpdiI6IldMXC9VVFNHSzRpbGtCY0dST2Eyc3lRPT0iLCJ2YWx1ZSI6IjVRcVpnOTRDTEsyU2dUK3hnSk9tMG5MUURiRU9PZXB6aDl5ZEN0MUE4Wm45Wkt1ZFZ3YThQZEk3VVFLb0psMDlKaG5mZlNpOXRQZU9cL0draEpmdjNMdUFvdk9xQTRLVEdMaGE5ejZ2c24xK3lXUkI1Z2xBS0MwRkFhUlQzeXJEUVBWeU5cL0tUZ3A5U0Q4Q0lhQzZVUDB4WWEyc3VDVFVBRXRwbHRZd0JNMkllbGlSV296aVNvQ2QxZVBzSVwvcGpKXC9Zb3lTN1JzZUtta2pZK1lFNGp1V0FaXC81aFprdGhtTUpLOHZ6SkdnalRKYnBmWWZYeXh0a2dEM0d0S0ppWk9ucjlcL3ZaZ3FGc3BZRzBQOVJqOGNxd3RTT2ExaVE2K216dUZ4VjRQaGJYaThLY3JoWGV6K3hMRWZZUFNWcUtrZU04Y3pVbCtBeTNZZUdtYlprQ2piK012ZEJ1Z2JcL1BmYzVpd21qNzBuSE9WNjBNODVjc1hmT1FJcTdyazJ6ZVdVTjIxclZMc3kzVXB0dTJRYWtCU2c2M21BPT0iLCJtYWMiOiIxM2IzNjI5Y2E4NzQ1NWUzMGMzODQzZjk2MDc5M2I5ZDBlYTMwMTMzMzU0YTYzMTIzYTRmNzg3NDIwMjgxMTVjIn0=
var swymJSObject = {
    swym_shopify_JS: "//swymprod.azureedge.net/code/swym-shopify.js",
    pid: "fYdOSQI/L8cBeeY7S/Qwwc4PRve0L/1vTvbUsRGA3rs=",
    isTest: false,
    interface: "/apps/swymWishlist/interfaces/interfaceStore.php?appname=Wishlist",
    actions: {
        cartRequest: "cart",
        customerRequest: "customer"
    },
    shopid: "2118",
    customerCookieName: "swymCustomerAPI"
};
function swym_SetCookie(cookieName, cookieValue, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}
function swym_getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function swym_get_cookies_array() {
    var cookies = {};
    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            try{
              var name_value = split[i].split("=");
              name_value[0] = name_value[0].replace(/^ /, '');
              cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
            }catch(err){
              console.warn("Error decoding cookie", split[i]);
            }
        }
    }
    return cookies;
}
function swymLoadScript(url, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.body.appendChild(script);
}


if (swymJSObject.isTest) {

} else {
    if(document.readyState == "loading"){
      document.addEventListener('DOMContentLoaded', swymJSShopifyLoad);
    }else{
      swymJSShopifyLoad();
    }
    function swymJSShopifyLoad(){
      if(window.swymPageLoad) swymPageLoad();
      if(!window._swat) {
        var scripts = "(function (s, w, r, e, l, a, y) {"
                + "r['SwymRetailerConfig'] = s;"
                + "r[s] = r[s] || function (k, v) {"
                + "r[s][k] = v;"
                + "};"
                + "})('_swrc', '', window);"
                + "_swrc('RetailerId', '" + swymJSObject.pid + "');";
        var script = document.createElement("script");
    // Add script content
        script.innerHTML = scripts;
    // Append
        document.body.appendChild(script);
        swymLoadScript(swymJSObject.swym_shopify_JS,
          function() {
            var sw = window._swat;
            if(!sw){
              console.log("sw not initialized!");
              _swrc('Callback', function(){
                sw = window._swat;
                initSwymShopify();
              });
            }else{
              initSwymShopify();
            }
          });
      }else{
        initSwymShopify();
      }
    }
}
