import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { Box } from "@mui/material";

function MainLayout({ children }) {
    return (
        <>
            <Head>
                <title>Anton Phan - Portfolio</title>
            </Head>
            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column",
                    height: "100vh",
                }}
            >
                <Box>
                    <header>
                        <TopBar />
                    </header>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        overflow: "auto",
                    }}
                >
                    <main>{children}</main>
                </Box>
                <Box
                    sx={{
                        overflow: "hidden",
                        minHeight: "60px",
                    }}
                >
                    <footer>
                        <Footer />
                    </footer>
                </Box>
            </Box>
        </>
    );
}

export default MainLayout;
