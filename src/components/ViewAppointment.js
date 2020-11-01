
 const ViewAppointment = ({appointment , deleteAppointment}) => 
    ( 
       
           
            <div className="cita">
                <p>Nombre del paciente: <span>{appointment.name}</span></p>
                <p>Fecha: <span>{appointment.date}</span></p>
                <p>Hora: <span>{appointment.hour}</span></p>
                <p>Sintomas: <span>{appointment.symptoms}</span></p>
                <p>Precio: <span>{appointment.price}</span></p>

                <button className="button eliminar u-full-width"
                onClick={() => deleteAppointment(appointment.id)}
                >Eliminar &times;</button>
            </div>
    );
 
  
 export default ViewAppointment;