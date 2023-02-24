import './CampoTexto.css' /*Importe do css */

//Essa é a classe de texto, nela terá 
//{props.label} = Nesse comando estou fazendo  uma passagem de parâmetro
//{props.placeholder} = Nesse comando estou fazendo uma passagem de parâmetro
const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}...` /*Adicionando três pontos no final = "Digite seu nome..."*/

    return(
        <div className="campo-texto">
            <label>
                {props.label} 
                </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )

}
export default CampoTexto