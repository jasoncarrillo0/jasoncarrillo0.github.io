import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopSection from "../components/sections/TopSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: ['"Source Sans Pro"', '"sans-serif"'].join(','),
        
    },
    
    palette: { mode: 'dark'},
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    letterSpacing: "0.05em",
                    fontWeight: '500',
                    fontSize: '15px'
                }
            }
        }
    }
    
});

const IndexPage = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <Seo title="Home" />
            <TopSection/>
            <ProjectsSection/>
        </Layout>
    </ThemeProvider>
)

export default IndexPage
