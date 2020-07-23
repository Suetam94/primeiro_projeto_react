import React from 'react';
import ReactDom from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './Calculadora';
import '@testing-library/jest-dom/extend-expect'

describe('Calculadora', () => {

  it('Deve renderizar a aplicação sem erros', () =>{
  const div = document.createElement('div');
  ReactDom.render(<Calculadora />, div);
  ReactDom.unmountComponentAtNode(div);
  });

  it('Deve limpar o campo de números', () => {
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('Deve somar 2 + 3 e obter 5', () => {
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');

  });

  it('Deve subtrair 2 - 3 e obter -1', () => {
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('-1');
  });

  it('Deve multiplicar 2 * 3 e obter 6', () => {
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  });

  it('Deve dividir 6 por 2 e obter 5', () => {
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3');
  });

  it('Deve somar 2.5 * 3.5 e obter 6', () => {
    const {getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  });
});
