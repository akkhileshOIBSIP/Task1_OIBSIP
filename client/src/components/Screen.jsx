import React, { useContext } from 'react';
import { CalcContext } from './context/CalcContext';
import { Textfit } from 'react-textfit';
const Screen = () => {
    const { calc } = useContext(CalcContext);
  return (
    <Textfit className='screen'>084554</Textfit>
  );
};

export default Screen;
