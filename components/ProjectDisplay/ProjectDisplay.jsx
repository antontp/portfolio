import styles from "./ProjectDisplay.module.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const projects = [
    {
        name: "NUK nettside",
        title: "Front-end utvikler",
        description: "Etårsprosjekt med Norges Unge Katolikker.Full renovering av deres nettside.",
        url: "https://www.nuk.no/"
    },
    {
        name: "Utvekslingsprosjekt",
        title: "Recipe-feud",
        description: "Morsomt prosjekt utviklet under utveksling. Spill for to spillere med server-client struktur.",
        url: "https://github.com/antontp/This-or-that-meal"
    },
    // {
    //     name: "Utvekslingsprosjekt",
    //     title: "Recipe-feud",
    //     description: "Morsomt prosjekt utviklet under utveksling. Spill for to spillere med server-client struktur.",
    //     url: "https://github.com/antontp/This-or-that-meal"
    // }
]

function ProjectDisplay() {
    return (
        <div className={styles.projectDisplayContainer}>
            {
                projects.map((card, idx) =>
                    <ProjectCard card={card} key={idx}/>
                )
            }
        </div>
    );
}

export default ProjectDisplay;