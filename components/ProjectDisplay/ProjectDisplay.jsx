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
    {
        name: "Utepils",
        title: "App for de som liker utepils",
        description: "Finner steder man kan ta seg en utepils og få drink forslag basert på været data fra Metrologisk institutt",
        url: "https://github.com/antontp/Utepils"
    }
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