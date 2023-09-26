import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

export function RootLayout() {
	return (
		<>
			<header className={styles.header}>
				<h1>SITE DE FILMES</h1>
				<button id={styles.btnHome}><Link to={"/"} style={{ textDecoration: 'none' }}>Início</Link></button>
			</header>
			<Outlet />
			<footer className={styles.footer}>
				Copyright 2023. Todos os direitos reservados.
			</footer>
		</>
	)
}
