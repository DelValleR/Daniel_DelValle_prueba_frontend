import Footer from '../Footer/Footer';
// import styles from './Layout.css';

export const Layout = ({ children }) => {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
};
