import ProjectDisplay from "@/components/ProjectDisplay/ProjectDisplay";
import MainLayout from "@/layout/MainLayout/Index";
import styles from "@/styles/projects.module.css";
import { Box } from "@mui/material";

export default function Projects() {
    return (
        <MainLayout>
            <Box
                sx={{
                    margin: "3em",
                }}
            >
                <h1>PROJECTS</h1>
                <Box>
                    <ProjectDisplay />
                </Box>
            </Box>
        </MainLayout>
    );
}
