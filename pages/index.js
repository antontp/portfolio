import Head from 'next/head';
import styles from "@/styles/Home.module.css";
import TopBar from '@/components/TopBar/TopBar';
import { Grid } from '@mui/material';

export default function Home() {
	return (
    	<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<main>
				<Grid 
					container
					direction="column"
					sx={{height: "100vh"}}
				>
					<Grid container item xs={1} alignItems="center">
						<TopBar />
					</Grid>
					<Grid
						container 
						item
						justifyContent="center"
						xs={11}
					>
						<div className={styles.mainTextBox}>
							<h1>Anton Phan</h1>
							<p>Full-stack utvikler 2050</p>
						</div>
					</Grid>
				</Grid>
			</main>
    	</>
	)
};
