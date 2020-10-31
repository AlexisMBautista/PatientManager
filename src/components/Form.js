import { Fragment, useState} from 'react';
const Form = () => {

    const [quote, modifyquote] = useState({
        name='',
        date='',
        hour='',
        symptoms=''

    });

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre del Paciente</label>
                <input 
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder= "Nombre del Paciente"
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                />

                <label>Descripción de Sintomas</label>
                <textarea  
                    name="symptoms"
                    className="u-full-width"
                ></textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

            </form>
        </Fragment>
     );
}
 
export default Form;