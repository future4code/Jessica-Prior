import React from 'react';
import styled from 'styled-components'

class Etapa1 extends React.Component {
    render() {
        return(
            <Etapa1>
                <h1>ETAPA1 - DADOS GERAIS</h1>
                <h3>1 - Qual seu nome?</h3>
                <input></input>
                <h3>2 - Qual sua idade?</h3>
                <input></input>
                <h3>3 - Qual seu email?</h3>
                <input></input>
                <h3>4 - Qual sua escolaridade?</h3>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </Etapa1>
        );
    };
};

export default Etapa1;