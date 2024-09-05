import styles from "./ProjectCard.module.css";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";

function ProjectCard({ card }) {
    return (
        <div className={styles.ProjectCardContainer}>
            <h3>{card.name}</h3>
            {card.url && (
                <p>
                    <b>{card.title}</b>
                    <Link href={card.url}>
                        <IconButton>
                            <OpenInNewIcon />
                        </IconButton>
                    </Link>
                </p>
            )}

            <p>{card.description}</p>
            <p>
                {card.tools.map((tool, idx) => (
                    <i key={idx}>{`${tool}     `}</i>
                ))}
            </p>
        </div>
    );
}

export default ProjectCard;
