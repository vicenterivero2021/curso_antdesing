import React from 'react'

function Input() {
    
    constructor(props){
        super(props);
        this.nombre= React.createRef();
        this.Correo= React.createRef();
    }
    
    clicRefs(evento){

    }

    return (
        <div>
            <h1>Hola desde input</h1>
            <form>
                <input type='text' placeholder='nombre' />
                <input type='text' placeholder='apellido' />
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default Input;
