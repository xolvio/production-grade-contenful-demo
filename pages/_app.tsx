import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import dynamic from "next/dynamic";
const ContentfulWidget = dynamic(() =>
  import("../src/components/ContentfulWidget")
);

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: "HK Grotesk";
    src: url("/assets/fonts/HKGrotesk-Light.otf");
    src: url("/assets/fonts/HKGrotesk-Light.otf") format("opentype");
}
@font-face {
    font-family: "HK Grotesk";
    font-weight: bold;
    src: url("/assets/fonts/HKGrotesk-Bold.otf");
    src: url("/assets/fonts/HKGrotesk-Bold.otf") format("opentype");
}

* {
    font-family: "HK Grotesk", Arial, Helvetica, sans-serif;
}

`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ContentfulWidget contentId={pageProps.contentId} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
