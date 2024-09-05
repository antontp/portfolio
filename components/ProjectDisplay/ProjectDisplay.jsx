import ProjectCard from "./components/ProjectCard/ProjectCard";

// Follow this
// https://www.youtube.com/watch?v=N4-EkNJ6RFM

const projects = [
    {
        name: "NUK nettside",
        title: "Front-end utvikler",
        description:
            "Etårsprosjekt med Norges Unge Katolikker. Full renovering av deres nettside. Pending Deployment...",
        url: "https://www.kundeprat.no/",
        tools: ["Next.js", "React", "GraphQL", "ApolloGraphQL"],
    },
    {
        name: "API spill",
        title: "Recipe-feud",
        description: "Spill for to spillere med server-client struktur.",
        url: "https://github.com/antontp/Recipe-feud",
        tools: ["Javascript", "Socket.io", "ExpressJS"],
    },
    {
        name: "IN2000 - Software Engineering med prosjektarbeid",
        title: "Utepils",
        description:
            "Oversikt over alle steder man kan ta seg en utepils i Oslo og få drink forslag basert på været",
        url: "https://github.com/antontp/Utepils",
        tools: ["Kotlin; Jetpack Compose"],
    },
    {
        name: "NORKART AS",
        title: "Mellombar",
        description: "Løsning for å georefere BIM-filer for arkitekter",

        tools: ["Vite, React, Azure, .NET"],
    },
];

function ProjectDisplay() {
    return (
        <div>
            {projects.map((card, idx) => (
                <ProjectCard card={card} key={idx} />
            ))}
        </div>
    );
}

export default ProjectDisplay;
