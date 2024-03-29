import { extendTheme } from "@chakra-ui/react"
const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1600px",
    "3xl": "1920px"
  };
const theme = extendTheme({
    breakpoints,
    fonts: {
        heading: "rust",
        body: "rust",
    },
    styles: {
        global: {
            "@font-face": [
                {
                    fontFamily: "marianne",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    src: `
                url('/font/Marianne-Bold.woff2') format('woff2'),
                url('/font/Marianne-Bold.woff') format('woff')
              `,
                    unicodeRange: "U+0000-FFFF",
                },
            ],
        },
    },

});

export default theme;