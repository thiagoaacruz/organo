import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

//Classe do formulário, com os dados "nome,cargo, imagem,time"

//Criando uma variável times com a lista dos times

/*obrigatorio={true} = Com esse comando estou deixando o campo obrigatório  */

  

const Formulario = (props) =>{

    
    //Criando uma lista suspensa dos times
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
   
    ]

    //Criando os estados para cada item
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar =(evento) =>{ /* <form onSubmit={aoSalvar} = Criando uma função para salvar quando clicamos no botão.*/
        evento.preventDefault()/*Esse comando previne o comportamento padrão, ele não deixa fazer o reload da página */
        props.aoColaboradorCadastrado({//Passando os dados para aoColaboradorCadastrado, que será um objeto
            nome,
            cargo,
            imagem,
            time
        })
    }


    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>    
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome} //Vinculando cada estado, nesse caso o nome
                    aoAlterado={valor => setNome(valor)} //Setando o estado
                /> 

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}//Vinculando cada estado, nesse caso o cargo
                    aoAlterado={valor => setCargo(valor)}//Setando o estado
                    />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}//Vinculando cada estado, nesse caso o imagem
                    aoAlterado={valor => setImagem(valor)}//Setando o estado
                    />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time"
                    itens={times}
                    valor={time}//Vinculando cada estado, nesse caso o time
                    aoAlterado={valor => setTime(valor)}//Setando o estado
                    /> 
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario