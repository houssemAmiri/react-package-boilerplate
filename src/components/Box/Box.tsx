import React, { FC } from 'react';
import { BoxProps } from './Box.types';
import './Box.css';
const Box: FC<BoxProps> = ({ text }) => {
  return <div className='box'>{text}</div>;
};
export default Box;
