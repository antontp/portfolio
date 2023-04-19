import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { Grid } from "@mui/material";

function MainLayout({children}) {
    return (
        <>
            <Head>
				<title>Portfolio</title>
			</Head>
            <Grid container direction="column" sx={{height: "100vh"}}>
                <Grid item xs={1}>
                    <TopBar />
                </Grid>
                <Grid item xs={9}>
                    <main>
                        {children}
                    </main>
                </Grid>
                <Grid item xs={2}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
}

export default MainLayout;