import { useState } from "react"
import Sidebar from "./componentes/Sidebar"
import Schedule from "./componentes/Schedule"
import "./index.css"
import logoImg from "./assets/logo.svg"

export interface Appointment {
  id: string;
  date: string;
  time: string;
  clientName: string;
}

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const handleAddAppointment = (appointment: Omit<Appointment, 'id'>) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: String(Date.now())
    };
    setAppointments([...appointments, newAppointment]);
  };

  const handleRemoveAppointment = (id: string) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  return (
    <div className="container">
      <img src={logoImg} alt="Logo" className="logo" />

      <Sidebar 
        appointments={appointments}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onAddAppointment={handleAddAppointment}
      />
      <Schedule 
        appointments={appointments}
        selectedDate={selectedDate}
        onRemoveAppointment={handleRemoveAppointment}
      />
    </div>
  )
}

export default App