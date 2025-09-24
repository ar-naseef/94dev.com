window.fbAsyncInit = function() {
    FB.init({
        appId: "2856987207872197",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v9.0",
    });
    FB.CustomerChat.show(true);
    FB.CustomerChat.showDialog();
};

( < script async defer crossorigin = "anonymous"
    src = "https://connect.facebook.net/en_US/sdk.js" >
    < /script>)(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"; fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");