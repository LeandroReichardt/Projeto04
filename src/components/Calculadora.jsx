import React, { useState } from 'react';

function Calculadora(){
    const[expressao, setExpressao]= useState('');
    const[resultado, setResultado]= useState('');

    const hendleClick = (value) =>{
        setExpressao(expressao + value);
    }
    const calcularResultado = () => {   
        try {
            const resultadoCalculado = eval(expressao);
            setResultado(resultadoCalculado);
        }   catch(error){
            setResultado('Erro')
        }
    };
    const limparTudo=()=>{
        setExpressao('');
        setResultado('');
    };
    return(
        <div>
            <h2>Calculadora Simples</h2>
            <input 
            type="text" 
            value={expressao}
            readOnly
            style={{marginBottom: '10px'}}
            />
            <div>
                <button onClick={() => hendleClick('1')}>1</button>
                <button onClick={() => hendleClick('2')}>2</button>
                <button onClick={() => hendleClick('3')}>3</button>
                <button onClick={() => hendleClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => hendleClick('4')}>4</button>
                <button onClick={() => hendleClick('5')}>5</button>
                <button onClick={() => hendleClick('6')}>6</button>
                <button onClick={() => hendleClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => hendleClick('7')}>7</button>
                <button onClick={() => hendleClick('8')}>8</button>
                <button onClick={() => hendleClick('9')}>9</button>
                <button onClick={() => hendleClick('*')}>*</button>
            </div>
            <div>
                <button onClick={() => hendleClick('0')}>1</button>
                <button onClick={() => hendleClick('.')}>2</button>
                <button onClick={calcularResultado}>=</button>
                <button onClick={() => hendleClick('/')}>/</button>
            </div>
            <div>
                <button onClick={limparTudo}style={{marginTop: '10px'}}>Limpar</button>
            </div>
            <div>
                <p>Resultado: {resultado}</p>
            </div>


            
            </div>
       
    )

}

export default Calculadora