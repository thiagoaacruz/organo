import { useState } from 'react'
import './CampoTexto.css' /*Importe do css */

//Essa é a classe de texto, nela terá a label e o input
//{props.label} = Nesse comando estou fazendo  uma passagem de parâmetro
//{props.placeholder} = Nesse comando estou fazendo uma passagem de parâmetro

//<div className="campo-texto"> = Quando coloco className na div é porque vou fazer um css para a mesma

/* <input required={props.obrigatorio} = Deixando o campo obrigatório*/


/*
     
     const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)

    }

        Criando uma função para capturar o evento que está vinculado ao campo 
} */

//let valor = '' Iniciando a variavel valor vazia
//onChange={aoDigitado} = Esse comando tenho que inserir no input para ser vinculado
//

const CampoTexto = (props) => {
        
    const placeholderModificada = `${props.placeholder}...` /*Adicionando três pontos no final = "Digite seu nome..."*/
    
    /*Criando função para o state aoAlterado, essa função será vinculada no componente "Formulário" 
      aoAlterado={valor => setNome(valor)} para o campo "input"*/
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label} 
                </label>
            <input value={props.valor} 
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={placeholderModificada}/> 
        </div>
    )

}
export default CampoTexto