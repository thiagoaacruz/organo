import './CampoTexto.css' /*Importe do css */

//Essa é a classe de texto, nela terá a label e o input
//{props.label} = Nesse comando estou fazendo  uma passagem de parâmetro
//{props.placeholder} = Nesse comando estou fazendo uma passagem de parâmetro

//<div className="campo-texto"> = Quando coloco className na div é porque vou fazer um css para a mesma

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