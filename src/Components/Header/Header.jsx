import React from 'react';
import './Header.css'; // Importar los estilos CSS para el header

const Header = () => {
	// Función para manejar el evento click del botón de "Go There"
	const handleGoThereClick = () => {
		console.log('Go There');
	};

	// Función para manejar el evento hover de los botones del menú principal
	const handleMenuHover = (buttonName) => {
		console.log(`Hover en ${buttonName}`);
	};

	// Función para manejar el evento hover del botón de "Pages"
	const handlePagesHover = () => {
		console.log('Hover en Pages');
	};

	// Función para manejar el evento click del botón de "Pages"
	const handlePagesClick = () => {
		console.log('Click en Pages');
		// Aquí puedes escribir la lógica para desplegar el menú de "Pages"
	};

	// Función para manejar el evento click del botón de "Item 1"
	const handleItem1Click = () => {
		console.log('Click en Item 1');
		// Aquí puedes escribir la lógica para el comportamiento de "Item 1"
	};

	// Función para manejar el evento click del botón de "Item 2"
	const handleItem2Click = () => {
		console.log('Click en Item 2');
		// Aquí puedes escribir la lógica para el comportamiento de "Item 2"
	};

	// Función para manejar el evento click del botón de "Item 3"
	const handleItem3Click = () => {
		console.log('Click en Item 3');
		// Aquí puedes escribir la lógica para el comportamiento de "Item 3"
	};

	return (
		<header className="header">
			<nav className="menu">
				{/* Botones del menú principal */}
				<button className="menu-button" onMouseEnter={() => handleMenuHover('Button 1')}>
					Home
				</button>
				<button
					className="menu-button pages-button"
					onMouseEnter={handlePagesHover}
					onClick={handlePagesClick}
				>
					Pages
					{/* Menú desplegable de "Pages" */}
					<div className="pages-dropdown">
						<button className="dropdown-item" onClick={handleItem1Click}>
							Item 1
						</button>
						<button className="dropdown-item" onClick={handleItem2Click}>
							Item 2
						</button>
						<button className="dropdown-item" onClick={handleItem3Click}>
							Item 3
						</button>
					</div>
				</button>
				<button className="menu-button" onMouseEnter={() => handleMenuHover('Button 2')}>
					About
				</button>
				<button className="menu-button" onMouseEnter={() => handleMenuHover('Button 3')}>
					Contact
				</button>
			</nav>

			<div className="header-container">
				<h1>Lorem ipsum</h1>
				<h3>Neque porro quisquam</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, numquam reprehenderit.
					Recusandae fugiat consectetur repellat voluptate illo, perspiciatis, distinctio autem
					reiciendis officiis quasi excepturi minus velit obcaecati. Illum, esse facilis.
				</p>
			</div>
			<button className="banner-button" onClick={handleGoThereClick}>
				Go There...
			</button>
		</header>
	);
};

export default Header;
