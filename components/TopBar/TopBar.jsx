import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";

const menu = [
    { name: "HOME", adress: "/" },
    { name: "PROJECTS", adress: "/projects" },
];

function TopBar() {
    return (
        <Box
            sx={{
                height: 40,
                padding: "1rem",
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                sx={{ height: "100%" }}
            >
                {menu.map((page, idx) => (
                    <Box key={idx} sx={{ marginRight: "2rem" }}>
                        <Link
                            href={page.adress}
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            <Box
                                sx={{
                                    padding: "0.5em",
                                    "&:hover": {
                                        backgroundColor: "lightgrey",
                                    },
                                }}
                            >
                                {page.name}
                            </Box>
                        </Link>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}

export default TopBar;
