import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import outputs from "../amplify_outputs.json"
import { Amplify } from "aws-amplify";

Amplify.configure(outputs)

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
