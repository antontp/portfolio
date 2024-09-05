import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box, IconButton, Slide, Snackbar } from "@mui/material";
import { useRef, useState } from "react";

function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
}

function Footer() {
    const typeRef = useRef("");
    const [snackOpen, setSnackOpen] = useState(false);

    const handleClick = (event) => {
        let type = event.currentTarget.getAttribute("id");
        if (type === "mobile") navigator.clipboard.writeText("97909673");
        else navigator.clipboard.writeText("anton-tin@hotmail.com");
        typeRef.current = type;
        setSnackOpen(true);
    };

    const handleSnackClose = () => setSnackOpen(false);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                color: "black",
                width: "100%",
                height: "5rem",
            }}
        >
            <IconButton>
                <Link href="https://github.com/antontp">
                    <GitHubIcon sx={{ color: "black" }} />
                </Link>
            </IconButton>
            <IconButton>
                <Link href="https://www.linkedin.com/in/antontp/">
                    <LinkedInIcon sx={{ color: "black" }} />
                </Link>
            </IconButton>
            <IconButton id="mobile" onClick={handleClick}>
                <PhoneIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton>
                <Link href="https://t.me/antontph">
                    <TelegramIcon sx={{ color: "black" }} />
                </Link>
            </IconButton>
            <IconButton id="email" onClick={handleClick}>
                <AlternateEmailIcon sx={{ color: "black" }} />
            </IconButton>
            <Snackbar
                open={snackOpen}
                TransitionComponent={TransitionRight}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={`Copied ${typeRef.current} to clipboard`}
            />
        </Box>
    );
}

export default Footer;
