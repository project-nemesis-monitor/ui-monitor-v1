import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
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