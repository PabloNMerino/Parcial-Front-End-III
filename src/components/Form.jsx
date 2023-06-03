import { useState } from 'react';
import Styles from './formStyle.module.css'


const Form = (props) => {

    const [nombre, setNombre] = useState('');
    const [banda, setBanda] = useState('');
    const [msjError, setMsjError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombre.trim().length < 3 || banda.length < 6) {
            setMsjError(true)
        }
        else {
            props.onSubmit({nombre, banda})
            setNombre('');
            setBanda('');
            setMsjError(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id='nombre' placeholder='minimo 3 caracteres' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="banda">Banda favorita</label>
                    <input type="text" id='banda' placeholder='minimo 6 caracteres' value={banda} onChange={(e)=> setBanda(e.target.value)}/>
                </div>
                <button type='submit'>Enviar!</button>
            </form>
            {msjError ? <p className={Styles.error}>Por favor chequea que la información sea correcta</p> : undefined}
        </>
    )
}

export default Form;