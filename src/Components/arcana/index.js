import React from "react";
import { Auth } from "@arcana/auth-react";
import { useState } from "react";
import { Button } from "antd";

export default function App() {
  const [theme, setTheme] = React.useState("light");
  const [externalWallet, showExternalWallet] = React.useState(false);
  return (
    <div className="wrapper">
      <div className="leftSection">
        <div className="section">
          <div className="heading">Theme</div>
          <Button onClick={() => setTheme("light")}>Light mode</Button>
          <br />
          <Button onClick={() => setTheme("dark")}>Dark mode</Button>
        </div>
        <div className="section2">
          <div className="heading">External Wallet</div>
          <Button onClick={() => showExternalWallet(true)}>Show</Button>
          <br />
          <Button onClick={() => showExternalWallet(false)}>Hide</Button>
        </div>
      </div>
      <div className="rightSection">
        <Auth externalWallet={externalWallet} theme={theme} />
      </div>
    </div>
  );
}