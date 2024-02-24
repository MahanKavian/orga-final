import "@/styles/globals.css";
import "@/styles/icons.css";
import type {AppProps} from "next/app";
import {Jost, Lobster_Two} from "next/dist/compiled/@next/font/dist/google";
import {NextFont} from "next/dist/compiled/@next/font";

const jost: NextFont = Jost({
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const lobster = Lobster_Two({
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["400", "700"],
    variable: "--font-lobster"
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                  html {
                    font-family: ${jost.style.fontFamily}, sans-serif;
                    --font-lobster: ${lobster.style.fontFamily}, fantasy;
                  }
                `}
            </style>
            <Component {...pageProps} />
        </>
    )
}
