import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Container, Label, TextError, ButtonSelect, Placeholder } from "./style";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function InputDataDeNascimento({
	TituloDoInput = "Data de nascimento:",
	placeholder = "Selecione a sua data de nascimento",
	onChangeData = () => {},
	...props
}) {
	const [selectedDate, setSelectedDate] = useState(null);
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const handleDateChange = (event, date) => {
		if (date !== undefined) {
			setSelectedDate(date);
			const isValidDate = validateDate(date);
			setIsValid(isValidDate);
			onChangeData(date);
		}
	};

	const showDatePicker = () => {
		DateTimePickerAndroid.open({
			value: selectedDate || new Date(),
			onChange: handleDateChange,
			mode: "date",
			display: "calendar",
		});
	};

	const validateDate = (date) => {
		const hoje = new Date();
		const quatorzeAnos = new Date();
		const cemAnos = new Date();
		quatorzeAnos.setFullYear(hoje.getFullYear() - 14);
		cemAnos.setFullYear(hoje.getFullYear() - 100);

		if (date >= hoje) {
			setMessage("Data inválida");
			return false;
		} else if (date > quatorzeAnos) {
			setMessage("Você deve ter pelo menos 14 anos");
			return false;
		} else if (date < cemAnos) {
			setMessage("Data inválida");
			return false;
		} else {
			setMessage("");
			return true;
		}
	};

	const formatDate = (date) => {
		return format(date, "dd/MM/yyyy", { locale: ptBR });
	};

	return (
		<Container>
			<Label>{TituloDoInput}</Label>
			<ButtonSelect onPress={showDatePicker}>
				<Placeholder>
					{selectedDate ? formatDate(selectedDate) : placeholder}
				</Placeholder>
			</ButtonSelect>
			{!isValid && <TextError>{message}</TextError>}
		</Container>
	);
}

export default InputDataDeNascimento;
