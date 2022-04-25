import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return(
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
