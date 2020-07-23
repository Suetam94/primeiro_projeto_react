import React from 'react';
import ReactDom from 'react-dom';
import CalculadoraService from './Calculadora.service';

describe('Teste do CalculadoraService', () => {
    const[concatenarNumero, Calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculadoraService();

    it('Deve garantir que 1 + 4 = 5', () => {
        let soma = Calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('Deve garantir que 10 - 6 = 4', () => {
        let subtracao = Calcular(10, 6, SUBTRACAO);
        expect(subtracao).toEqual(4);
    })

    it('Deve garantir que 5 * 5 = 25', () => {
        let multiplicacao = Calcular(5, 5, MULTIPLICACAO);
        expect(multiplicacao).toEqual(25);
    })

    it('Deve garantir que 10 / 2 = 5', () => {
        let divisao = Calcular(10, 2, DIVISAO);
        expect(divisao).toEqual(5);
    })

    it('Deve garantir que digitada uma operacao invalida retorne NaN', () => {
        let op_invalida = Calcular(1, 4, '$');
        expect(op_invalida).toEqual(NaN);
    })
});