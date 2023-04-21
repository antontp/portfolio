import styles from "./Footer.module.css";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { IconButton, Slide, Snackbar } from "@mui/material";
import { useRef, useState } from "react";

function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
}

function Footer() {

    const typeRef = useRef("");
    const [snackOpen, setSnackOpen] = useState(false);

    const handleClick = (event) => {
        let type = event.currentTarget.getAttribute("id");
        if (type === "mobile")
            navigator.clipboard.writeText("97909673");
        else navigator.clipboard.writeText("anton-tin@hotmail.com");
        typeRef.current = type;
        setSnackOpen(true);
    }

    const handleSnackClose = () => setSnackOpen(false);

    return (
        <footer className={styles.footerContainer}>
            <IconButton>
                <Link href="https://github.com/antontp" className={styles.footerLink}>
                    <GitHubIcon />
                </Link>
            </IconButton>
            <IconButton>
                <Link href="https://www.linkedin.com/in/antontp/" className={styles.footerLink}>
                    <LinkedInIcon />
                </Link>
            </IconButton>
            <IconButton id="mobile" onClick={handleClick} className={styles.footerLink}>
                <PhoneIcon />
            </IconButton>
            <IconButton>
                <Link href="https://t.me/antontph" className={styles.footerLink}>
                    <TelegramIcon />
                </Link>
            </IconButton>
            <IconButton id="email" onClick={handleClick} className={styles.footerLink}>
                <AlternateEmailIcon />
            </IconButton>
            <Snackbar 
                open={snackOpen}
                TransitionComponent={TransitionRight}
                anchorOrigin={{vertical:"top", horizontal:"left"}}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={`Copied ${typeRef.current} to clipboard`}
            />
        </footer>
    );
}

export default Footer;