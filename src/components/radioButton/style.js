import styled from 'styled-components';

export const ContainerRButton = styled.View`
    width: 250px;
    height: 50px;
`;

export const TxtRButton = styled.Text`
    font-family:'Inter-Bold';
    font-size: 14px;
    color: #BAD9A2;
`;

export const RadioButtonCon = styled.TouchableOpacity`
    flex-direction: row; 
    width: 250px;
    height: 50px;
    padding: 10px 50px;
    gap: 20px;
    border-radius: 20px;
    background: #537556;    
    align-items: center;
    margin-top: 10px;
`;

export const Radio = styled.View`
    width: 25px;
    height: 25px;
    flex-direction: row;
    border-radius: 100px;
    border: 3px solid #002320;
    background: #FFF;
    align-items: center;
    justify-content: center;
`;

export const TxtEP = styled.Text`
color: #00524B;
text-align: center;
//font-family: Inter;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export  const RadioBg = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 90px;
  background-color: #F5BD63; /* Cor da bolinha selecionada */
`;