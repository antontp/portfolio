import styles from "@/styles/Home.module.css";
import MainLayout from '@/layout/MainLayout/Index';

export default function Home() {
	return (
    	<MainLayout>
			<div className={styles.mainTextBox}>
				<h1>Anton Phan</h1>
				<p>Full-stack utvikler i utvikling!</p>
			</div>
    	</MainLayout>
	)
};