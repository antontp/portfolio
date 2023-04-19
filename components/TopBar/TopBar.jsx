import { Grid } from "@mui/material";
import Link from "next/link";
import styles from "./TopBar.module.css";

const menu = [
    {name: "HOME", adress: "/"},
    {name: "PROJECTS", adress: "/projects"}
]

function TopBar() {
    return (
        <Grid 
            container 
            direction="row"
            justifyContent="flex-end"
        >
            {menu.map((page, idx) => 
                <Grid item key={idx} sx={{marginRight: "2rem"}}>
                    <Link href={page.adress} className={styles.topBarLink}>
                        {page.name}
                    </Link>
                </Grid>
            )}
        </Grid>
    );
}

export default TopBar;