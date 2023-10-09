import Script from "next/script";

const FacebookSDK = () => {
  const SDK = `
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "313011389204509",
        cookie: true,
        xfbml: true,
        version: "v15.0"
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  `;

  return <Script id="facebook-sdk">{SDK}</Script>;
};

export default FacebookSDK;
