import type { AppProps } from "next/app";
import { GlobalStyle } from "../src/Utils/Theme";
import Layout from "../src/Components/Layout";
import AppBar from "../src/Components/AppBar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<AppBar />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
