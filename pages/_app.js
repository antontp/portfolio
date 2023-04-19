import "@/styles/reset.css";
import "@/styles/global.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
	subsets : ["latin"],
	weight: ["400", "700"]
});

export default function App({ Component, pageProps }) {
	return (
		<main className={roboto.className}>
			<Component {...pageProps} />
		</main>
	)
}
