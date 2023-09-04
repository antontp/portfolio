import styles from "./ProjectDisplay.module.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const projects = [
    {
        name: "NUK nettside",
        title: "Front-end utvikler",
        description: "Etårsprosjekt med Norges Unge Katolikker. Full renovering av deres nettside. Pending Deployment...",
        url: "https://www.nuk.no/",
        tools: ["Next.js", "React", "GraphQL", "ApolloGraphQL"]
    },
    {
        name: "Enkelt API spill",
        title: "Recipe-feud",
        description: "Spill for to spillere med server-client struktur.",
        url: "https://github.com/antontp/Recipe-feud",
        tools: ["Javascript", "Socket.io", "ExpressJS"]
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