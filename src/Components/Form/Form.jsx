// Formulario.js
import React, { useState } from 'react';
import './Form.css';

const Formulario = () => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [textoResultado, setTextoResultado] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// Crear el texto con los valores del nombre y correo
		const resultado = `Nombre: ${nombre}\nCorreo: ${correo}`;
		// Actualizar el estado con el texto resultante
		setTextoResultado(resultado);
	};

	return (
		<div className="formulario-container">
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						id="nombre"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="correo">Correo:</label>
					<input
						type="email"
						id="correo"
						value={correo}
						onChange={(e) => setCorreo(e.target.value)}
					/>
				</div>
				<button type="submit">Enviar</button>
			</form>
			<div className="resultado-container">
				<label>Resultado:</label>
				<textarea value={textoResultado} readOnly />
			</div>
		</div>
	);
};

export default Formulario;
