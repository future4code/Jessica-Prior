import React from 'react';
import styled from 'styled-components'

class Etapa3 extends React.Component {
    render() {
        return(
            <Etapa3>
                <h1>ETAPA1 - DADOS GERAIS</h1>
                <h3>5 - Qual seu nome?</h3>
                <input></input>
                <h3>6 - Você fez algum curso complementar?</h3>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </Etapa3>
        );
    };
};

export default Etapa3;