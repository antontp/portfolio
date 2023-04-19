import { Grid } from "@mui/material";
import Link from "next/link";
import styles from "./TopBar.module.css";

const menu = [
    {name: "HOME", adress: "/"},
    {name: "PROJECTS", adress: "/projects"}
]

function TopBar() {
    return (
        <header className={styles.topBarContainer}>
            <Grid 
                container 
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                sx={{height: "100%"}}
            >
                {menu.map((page, idx) => 
                    <Grid item key={idx} sx={{marginRight: "2rem"}}>
                        <Link href={page.adress} className={styles.topBarLink}>
                            {page.name}
                        </Link>
                    </Grid>
                )}
            </Grid>
        </header>
    );
}

export default TopBar;