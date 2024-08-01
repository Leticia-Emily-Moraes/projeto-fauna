// InputCPF.js
import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Container, Input, Label, TextError } from "./style";

function InputCPF({
	TituloDoInput = "CPF:",
	placeholder = "Digite seu CPF",
	value = "",
	onChangeCPF = () => {},
	...props
}) {
	const [cpf, setCpf] = useState(value);
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const validateCPF = (cpf) => {
		const cpfClean = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
		if (cpfClean.length !== 11 || !isValidCPF(cpfClean)) {
			setMessage("CPF inválido");
			return false;
		}
		setMessage("");
		return true;
	};

	const isValidCPF = (cpf) => {
		// Implementação simplificada da validação de CPF
		let sum = 0;
		let remainder;
		if (cpf === "00000000000") return false; // CPF de exemplo inválido
		for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
		remainder = (sum * 10) % 11;
		remainder = remainder === 10 || remainder === 11 ? 0 : remainder;
		if (remainder !== parseInt(cpf[9])) return false;
		sum = 0;
		for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
		remainder = (sum * 10) % 11;
		remainder = remainder === 10 || remainder === 11 ? 0 : remainder;
		if (remainder !== parseInt(cpf[10])) return false;
		return true;
	};

	const handleCPFChange = (text) => {
		const newCpf = text;
		setCpf(newCpf);
		setIsValid(validateCPF(newCpf));
		onChangeCPF(newCpf);
	};

	return (
		<Container>
			<Label>{TituloDoInput}</Label>
			<TextInputMask
				type={"cpf"}
				value={cpf}
				onChangeText={handleCPFChange}
				placeholder={placeholder}
				customTextInput={Input}
				customTextInputProps={{
					isValid: isValid,
					...props,
				}}
			/>
			{!isValid && <TextError>{message}</TextError>}
		</Container>
	);
}

export default InputCPF;
