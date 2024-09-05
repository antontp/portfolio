import MainLayout from "@/layout/MainLayout/Index";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <MainLayout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // height: "fit-content",
                    // marginTop: "10rem",
                }}
            >
                <h1>Anton Phan</h1>
                <p>Full-stack utvikler i utvikling!</p>
            </Box>
        </MainLayout>
    );
}
