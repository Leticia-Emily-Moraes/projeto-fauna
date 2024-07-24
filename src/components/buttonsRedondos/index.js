import React from 'react';
import { ButtonsRedondos, ButtonsRedondosImage } from './style';

function ButtonRedondo({ img }) {
  return (
    <ButtonsRedondos>
      <ButtonsRedondosImage source={img}/>
    </ButtonsRedondos>
  );
}

export default ButtonRedondo;
