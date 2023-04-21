import ProjectDisplay from '@/components/ProjectDisplay/ProjectDisplay';
import MainLayout from '@/layout/MainLayout/Index';
import styles from "@/styles/projects.module.css";

export default function Projects() {
	return (
    	<MainLayout>
			<div className={styles.mainContainer}>
				<h1>PROJECTS</h1>
				<ProjectDisplay />
			</div>
    	</MainLayout>
	)
};
