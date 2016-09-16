var appInfo = { clientId: '45b92b9b-301e-4a83-9669-94477cdc8892', scopes: 'onedrive.readonly wl.signin', redirectUri: 'https://tony-ren-dev.github.io/callback.html'}

// clientId: '45b92b9b-301e-4a83-9669-94477cdc8892'  8b68c952-9dce-423f-a69b-79499a127735



var tmpResolve = null;

function getToken() {
  //ensureHttps();
  return new Promise(function(resolve, error) {
    var token = getTokenFromCookie();
    if (token) {
      resolve(token);
    } else {
      tmpResolve = resolve;
      challengeForAuth();
    }
  });
}

// for added security we require https
function ensureHttps() {
  if (window.location.protocol != "https:") {
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
  }
}

function getTokenFromCookie() {
  var cookies = document.cookie;
  var name = "onedrive-picker-oauth=";
  var start = cookies.indexOf(name);
  if (start >= 0) {
    start += name.length;
    var end = cookies.indexOf(';', start);
    if (end < 0) {
      end = cookies.length;
    }

    return cookies.substring(start, end);
  }

  return "";
}

function setCookie(token) {
  var expiration = new Date();
  expiration.setTime(expiration.getTime() + 3600 * 1000);
  var cookie = "onedrive-picker-oauth=" + token +"; path=/; expires=" + expiration.toUTCString();
  if (document.location.protocol.toLowerCase() == "https") {
    cookie = cookie + ";secure";
  }

  document.cookie = cookie;
}

function onAuthenticated(token) {
  var resolve = tmpResolve;
  tmpResolve = null;
  setCookie(token);
  resolve(token);
}

function challengeForAuth() {
  /*
  var url =
    "https://login.live.com/oauth20_authorize.srf" +
    "?client_id=" + appInfo.clientId +
    "&scope=" + encodeURIComponent(appInfo.scopes) +
    "&response_type=token" +
    "&redirect_uri=" + encodeURIComponent(appInfo.redirectUri);
    */
    //var url="https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id="+appInfo.clientId+"&redirect_uri="+ encodeURIComponent(appInfo.redirectUri);
    //https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=45b92b9b-301e-4a83-9669-94477cdc8892&redirect_uri=https%3A%2F%2Ftony-ren-dev.github.io%2Fcallback.html
    
    var url="https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=45b92b9b-301e-4a83-9669-94477cdc8892&redirect_uri=https%3A%2F%2Ftony-ren-dev.github.io%2Fcallback.html";
    
   var responseType = 'token';
   var replyUrl    = 'https://tony-ren-dev.github.io/index2.html';//https://tony-ren-dev.github.io/index2.html  https://tony-ren-dev.github.io/
   var resource    = "https://tonyren-my.sharepoint.com";
  var authServer  = 'https://login.windows.net/common/oauth2/authorize?'; 
  var url = authServer + 
                  "response_type=" + encodeURI(responseType) + "&" + 
                  "client_id=" + encodeURI(appInfo.clientId) + "&" + 
                  "resource=" + encodeURI(resource) + "&" + 
                  "redirect_uri=" + encodeURI(appInfo.redirectUri); 

    
  popup(url);
}

function popup(url) {
  var width = 525,
      height = 525,
      screenX = window.screenX,
      screenY = window.screenY,
      outerWidth = window.outerWidth,
      outerHeight = window.outerHeight;

  var left = screenX + Math.max(outerWidth - width, 0) / 2;
  var top = screenY + Math.max(outerHeight - height, 0) / 2;

  var features = [
              "width=" + width,
              "height=" + height,
              "top=" + top,
              "left=" + left,
              "status=no",
              "resizable=yes",
              "toolbar=no",
              "menubar=no",
              "scrollbars=yes"];
  var popup = window.open(url, "oauth", features.join(","));
  if (!popup) {
    alert("failed to pop up auth window");
  }

  popup.focus();
}
