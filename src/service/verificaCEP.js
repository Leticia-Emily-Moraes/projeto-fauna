import axios from "axios";

const getAddress = async (cep) => {
	try {
		const response = await axios.get(
			`https://viacep.com.br/ws/${cep}/json/`,
		);
		if (response.data.erro) {
			throw new Error("CEP não encontrado");
		}
		return response.data;
	} catch (error) {
		throw new Error("Erro ao buscar o CEP");
	}
};

export default getAddress;
