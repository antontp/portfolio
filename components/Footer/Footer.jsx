import styles from "./Footer.module.css";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { IconButton } from "@mui/material";

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <IconButton>
                <Link href="https://github.com/antontp" style={{color: "black"}}>
                    <GitHubIcon />
                </Link>
            </IconButton>
            <IconButton>
                <Link href="https://www.linkedin.com/in/antontp/" style={{color: "black"}}>
                    <LinkedInIcon />
                </Link>
            </IconButton>
            <PhoneIcon />
            <TelegramIcon />
            <AlternateEmailIcon />
        </footer>
    );
}

export default Footer;