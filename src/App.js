import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import SelectInput from './Components/SelectInput/SelectInput';
import RadioInput from './Components/RadioInput/RadioInput';
import Form from './Components/Form/Form';
import './App.css'; // Estilos globales de la aplicación
import { Layout } from './Components/Layout/Layout';

function App() {
	// Datos para las tarjetas
	const cardData = [
		{ id: 1, img: 'imagen1.jpg', title: 'Título 1', content: 'Contenido 1' },
		{ id: 2, img: 'imagen2.jpg', title: 'Título 2', content: 'Contenido 2' },
		{ id: 3, img: 'imagen3.jpg', title: 'Título 3', content: 'Contenido 3' },
		// Agrega más datos según sea necesario
	];

	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div className="App">
			<Layout>
				<div className="container">
					<Header />
					<Banner />
				</div>
				<main>
					<Cards data={cardData} />
					<div className="inputs">
						<SelectInput
							options={[
								{ label: 'Opción 1', value: 'opcion1' },
								{ label: 'Opción 2', value: 'opcion2' },
								{ label: 'Opción 3', value: 'opcion3' },
								{ label: 'Opción 4', value: 'opcion4' },
							]}
							value={selectedValue}
							onChange={handleChange}
						/>
						<div>
							<RadioInput
								idPrefix="options"
								options={['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']}
								selectedOption={selectedOption}
								onChange={handleOptionChange}
							/>
							<p>Opción seleccionada: {selectedOption}</p>
						</div>
						<Form />
					</div>
				</main>
			</Layout>
		</div>
	);
}

export default App;
