import "@/styles/globals.css";
import "@/styles/icons.css";
import "react-toastify/dist/ReactToastify.min.css"
import type {AppProps} from "next/app";
import {Jost, Lobster_Two} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {Layouts} from "@/components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";

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
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: false
            }
        }
    })

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
            <QueryClientProvider client={queryClient}>
                <Layouts>
                    <Component {...pageProps} />
                    <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false}
                                    theme={"light"} position={"top-right"}/>
                </Layouts>
            </QueryClientProvider>
        </>
    )
}
