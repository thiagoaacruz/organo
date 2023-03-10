import './ListaSuspensa.css'

//Criando uma lista suspensa()

/*
     <label>{props.label}</label>
            <select>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}
            </select>

   Esse comando para cada item, retorna uma option. Comando para criar uma lista      
   
   <option key={item}>{item}</option> = Nessa parte estou criando a lista e definindo a key={item} para 
   cada item, nesse caso cada nome será sua chave
*/ 

//<select required={props.required}> = Deixando o campo obrigatório
//onChange={evento => props.aoAlterado(evento.target.value) = Método de setar lista suspensa 

const ListaSuspensa = (props) =>{
    

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
           
            <select onChange={evento => props.aoAlterado(evento.target.value)} 
             required={props.required} 
             value={props.value}>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}
            </select>

        </div>


    )

}

export default ListaSuspensa