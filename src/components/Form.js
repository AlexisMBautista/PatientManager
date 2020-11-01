import { Fragment, useState} from 'react';
import uuid from "react-uuid";
import PropTypes from 'prop-types';


const Form = ({createAppointment}) => {

    //create appointment state
    const [appointment , modifyappointment ] = useState({
        name: '',
        date: '',
        hour: '',
        price: '',
        symptoms: ''
    });

    const [error, modifyError] = useState(false);


    //se ejecuta cada que un usuario escribe en el input
    const modifyState = e => {
        modifyappointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }

    //extracion de datos 
    const {name, date, hour, price, symptoms} = appointment;

    //funcion para agregar la cita
    const submitAppointment = e =>{       
        e.preventDefault();

        //validar
        if(name.trim() === '' || date.trim() === '' || hour.trim() === '' || price.trim() === '' || symptoms.trim() === ''){
            modifyError(true);
            return;  
        }

        //Actualiza el mensaje
        modifyError(false);

        //asignar ID
        appointment.id = uuid();

        //Crear 

        createAppointment(appointment);

        //limpiar el formulario

        modifyappointment({
            name: '',
            date: '',
            hour: '',
            price: '',
            symptoms: ''
        });
    }


    return ( 
        <Fragment>
            <h3>Crear Consulta</h3>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitAppointment}>
                <label>Nombre del Paciente</label>
                <input 
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder= "Nombre del Paciente"
                    onChange= {modifyState}
                    value= {name}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange= {modifyState}
                    value= {date}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange= {modifyState}
                    value= {hour}
                />

                <label>Precio</label>
                <input 
                    type="text"
                    name="price"
                    className="u-full-width"
                    onChange= {modifyState}
                    value= {price}
                />

                <label>Descripción de Sintomas</label>
                <textarea  
                    name="symptoms"
                    className="u-full-width"
                    onChange= {modifyState}
                    value= {symptoms}
                ></textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

            </form>
        </Fragment>
     );
}
//siempre un prop-type se inicia por el nombre del componente, en forma de objeto

Form.prototype = {
    createAppointment: PropTypes.func.isRequired
}
 
export default Form;