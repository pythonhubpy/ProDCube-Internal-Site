import { ServerStyleSheet } from "styled-components";
import { DocumentContext } from "next/document";
import Document from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				head: [
					<>
						<meta charSet="UTF-8" />
						<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<meta
							name="description"
							content="Your description goes here"
						/>
						<meta
							name="keywords"
							content="HTML, CSS, JavaScript, Next.js, React.js, TypeScript"
						/>
						<meta name="author" content="ProDCube" />
						<meta name="keyword" />
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"static"} />
						<link
							href={"https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap&display=optional"}
							rel="stylesheet" />
						<title>Starter App</title>
					</>,
				],
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
