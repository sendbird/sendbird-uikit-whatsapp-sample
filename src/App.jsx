import "./App.css";
import React, { useEffect } from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

function App() {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;
  const NICKNAME = import.meta.env.VITE_NICKNAME;
  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
  const myColorSet = {
    "--sendbird-light-primary-100": "rgb(195, 241, 169)",
    "--sendbird-light-primary-300": "rgb(165, 211, 149)",
    "--sendbird-light-primary-400": "rgb(136, 188, 132)",
  };

  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);
  window.addEventListener("resize", function () {
    if (window.innerWidth < 900) {
      setMobileViewOpen(true);
    } else {
      setMobileViewOpen(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth < 900) {
      setMobileViewOpen(true);
    } else {
      setMobileViewOpen(false);
    }
  }, []);

  return (
    <SBProvider
      appId={APP_ID}
      userId={USER_ID}
      nickname={NICKNAME}
      accessToken={ACCESS_TOKEN}
      colorSet={myColorSet}
    >
      {mobileViewOpen ? <MobileView /> : <DesktopView />}
    </SBProvider>
  );
}

export default App;
