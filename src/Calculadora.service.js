function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const MULTIPLICACAO = '*';
    const DIVISAO = '/';

    function Calcular(numero1, numero2, operacao) {
        let resultado;

        switch (operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            default:
                resultado = NaN;

        }

        return resultado;
    }

    function concatenarNumero(numAtual, numConcat) {
        if(numAtual === '0' || numAtual === null){
            numAtual = '';
        }
        if(numConcat === '.' && numAtual === ''){
            return '0.';
        }
        if(numConcat === '.' && numAtual.indexOf('.') > -1){
            return numAtual;
        }
        else {
            return numAtual + numConcat;
        }
    }

    return [
       concatenarNumero, Calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO
    ];
}

export default CalculadoraService;