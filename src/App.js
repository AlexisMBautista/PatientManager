import {Fragment , useState , useEffect} from 'react';
import Form from './components/Form';
import ViewAppointment from './components/ViewAppointment';

function App() {

  //verifica si hay citas en el storage

  let initialAppointment = JSON.parse(localStorage.getItem('appointments'));

  if(!initialAppointment){
    initialAppointment = [];
  }

  const [appointments, saveApppointments] = useState(initialAppointment);

  //extraia las citas del state de FORM
  const createApppointment = appointment => {
    saveApppointments([
      ...appointments,
      appointment
    ]);
  }

  useEffect(() => {
  let initialAppointment = JSON.parse(localStorage.getItem('appointments'));
    if(initialAppointment){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }else{
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  
  //elimina la cita
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment =>  appointment.id !== id);
    saveApppointments(newAppointments);
  }

  const title = appointments.length === 0  ? 'No hay Consultas' : 'Lista de Consultas';

  return (



    <Fragment>
      <h3>Administrador de Pacientes</h3>

      <div className="container">
        <div className="row">
          
          <div className="one-half column">
              <Form
                createAppointment = {createApppointment}
              />
          </div>

          <div className="one-half column">
              <h3>{title}</h3> 
              {appointments.map(appointment=>(
                <ViewAppointment 
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment= {deleteAppointment}
                />
              ))}
          </div>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
