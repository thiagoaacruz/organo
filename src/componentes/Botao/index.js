import './Botao.css'

//Comando para criar o botão props
const Botao = (props) => {
    return(<button className='botao'>
            {props.children}
        </button>)
}

export default Botao