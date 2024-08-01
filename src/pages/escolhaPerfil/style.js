import styled from "styled-components";

export const Container = styled.View`
    height: 100%;
    width: 100%;
    padding: 25px 10px;
    background-color: #f5fdee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;


export const TextoNormal = styled.Text`
    color: #00524b;
    font-family: "Inter-Bold";
    font-size:16px; //Tamanho padrão
    text-align: center;
`;

export const TextoGrande = styled.Text`
    text-align: center;
    color: #00524b;
    font-family: "Inter-Bold";
    font-size: 25px;; //Tamanho Grande
`;

export const ContainerEscolhaTipo = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 300px;
`;

