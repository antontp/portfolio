import styles from "./ProjectCard.module.css";
import Link from "next/link";

function ProjectCard({card}) {
    return (
        <div className={styles.ProjectCardContainer}>
            <h3>{card.name}</h3>
            <p>
                <b>{card.title}</b>
            </p>
            <p>{card.description}</p>
            <Link href={card.url}>Gå til prosjekt</Link>
        </div>
    );
}

export default ProjectCard;