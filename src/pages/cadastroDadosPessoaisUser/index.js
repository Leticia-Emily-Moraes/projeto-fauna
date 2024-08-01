import React, { useState } from "react";
import {
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	TextError,
} from "./style";
import Button from "../../components/button";
import InputText from "../../components/inputText";
import InputCPF from "../../components/inputCPF";
import InputDataDeNascimento from "../../components/inputDataDeNascimento";
import Icon from "../../components/iconFolha";

function CadastroDadosPessoaisUser({ navigation }) {
	const [birthDate, setBirthDate] = useState(new Date());
	const [telefone, setTelefone] = useState("");
	const [celular, setCelular] = useState("");
	const [cpf, setCpf] = useState("");
	const [isSenhaValida, setIsSenhaValida] = useState(true);
	const [senhaErrorMessage, setSenhaErrorMessage] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const verificandoPreenchimento = () => {
		if (!cpf) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		}
		if (isSenhaValida) {
			navigation.navigate("CadastroEnderecoUser");
		}
	};

	return (
		<Container>
			<TextoTitulo>Cadastre seus dados pessoais</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				{/* <InputCPF 
				value={cpf}
				onChangeCPF={setCpf}
			/> */}
				<InputDataDeNascimento
					value={birthDate}
					onChangeData={setBirthDate}
				/>
			</ContainerInputs>
			<Button
				title="Confirmar"
				onPress={verificandoPreenchimento}
			/>
			<Icon />
		</Container>
	);
}

export default CadastroDadosPessoaisUser;
