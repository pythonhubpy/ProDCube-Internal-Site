import type { AppProps } from "next/app";
import { GlobalStyle } from "../src/Utils/Theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
