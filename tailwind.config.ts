import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontWeight: {
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        extend: {
            fontFamily: {
                lobster: "var(--font-lobster)"
            },
            colors: {
                'white': "#FFFFFF",
                primary: {
                    100: '#81B13D',
                    200: "#88B13E",
                    300: "#87AA3C",
                    400: "#60A00C",
                    500: '#3A882B',
                    600: '#227226',
                    700: '#1A5D2C'
                },
                'black': "#000000",
                cream: "#FCEEE7",
                silver: {
                    'transparent': "rgba(255,255,255,0.1)",
                    100: "#F5F5F5",
                    200: "#E1E1E1",
                    300: "#888888",
                    400: "#333333",
                    500: "#111111",
                },
                green: {
                    100: "#223324",
                    200: "#39413A",
                    300: "#2C332C"
                },
                blue: {
                    100: "#D0E2E2",
                    200: "#1AB2C6"
                },
                yellow: "#FDA72F"
            },
            boxShadow: {
                'c-xs': '5px 5px 15px 0px rgba(24, 24, 24, 0.05)',
                'c': '14px 14px 36px 0px rgba(85, 85, 85, 0.1)',
                'c-lg': '14px 14px 36px 0px rgba(85, 85, 85, 0.22)'
            },
            fontSize: {
                display1: [
                    '96px',
                    {
                        lineHeight: '128px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                display2: [
                    '72px',
                    {
                        lineHeight: '96px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                heading1: [
                    '48px',
                    {
                        lineHeight: '64px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                heading2: [
                    '40px',
                    {
                        lineHeight: '48px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                heading3: [
                    '32px',
                    {
                        lineHeight: '40px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                heading4: [
                    '24px',
                    {
                        lineHeight: '32px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                heading5: [
                    '20px',
                    {
                        lineHeight: '24px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                heading6: [
                    '16px',
                    {
                        lineHeight: '20px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                'heading-sm': [
                    '14px',
                    {
                        lineHeight: '16px',
                        letterSpacing: '0',
                        fontWeight: '700'
                    }
                ],
                large: [
                    '18px',
                    {
                        lineHeight: '26px',
                        letterSpacing: '0',
                        fontWeight: '400'
                    }
                ],
                medium: [
                    '16px',
                    {
                        lineHeight: '24px',
                        letterSpacing: '0',
                        fontWeight: '400'
                    }
                ],
                small: [
                    '14px',
                    {
                        lineHeight: '21px',
                        letterSpacing: '0',
                        fontWeight: '400'
                    }
                ],
                xsmall: [
                    '12px',
                    {
                        lineHeight: '18px',
                        letterSpacing: '0',
                        fontWeight: '400'
                    }
                ]
            },
        },
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1632px'
            }
        }
    },
    plugins: [],
};
export default config;
