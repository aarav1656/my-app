import React from "react";
import { Auth } from "@arcana/auth-react";

export default function App() {
  const [theme, setTheme] = React.useState("light");
  const [externalWallet, showExternalWallet] = React.useState(false);
  return (
    <Wrapper>
      <LeftSection>
        <Section>
          <Heading>Theme</Heading>
          <Button onClick={() => setTheme("light")}>Light mode</Button>
          <br />
          <Button onClick={() => setTheme("dark")}>Dark mode</Button>
        </Section>
        <Section>
          <Heading>External Wallet</Heading>
          <Button onClick={() => showExternalWallet(true)}>Show</Button>
          <br />
          <Button onClick={() => showExternalWallet(false)}>Hide</Button>
        </Section>
      </LeftSection>
      <RightSection>
        <Auth externalWallet={externalWallet} theme={theme} />
      </RightSection>
    </Wrapper>
  );
}
