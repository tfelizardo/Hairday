import { useRef, useState } from "react"
import type { FormEvent } from "react"
import type { Appointment } from "../App"

interface SidebarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  onAddAppointment: (appointment: Omit<Appointment, 'id'>) => void;
}

function Sidebar({ selectedDate, onDateChange, onAddAppointment }: SidebarProps) {
  const dateRef = useRef<HTMLInputElement>(null)
  
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [clientName, setClientName] = useState<string>("")

  const morningHours = ["09:00", "10:00", "11:00", "12:00"]
  const afternoonHours = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
  const nightHours = ["19:00", "20:00", "21:00"]

  const openCalendar = () => {
    dateRef.current?.showPicker()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!selectedTime) {
      alert("Por favor, selecione um horário.")
      return
    }

    if (!clientName.trim()) {
      alert("Por favor, informe o nome do cliente.")
      return
    }

    onAddAppointment({
      date: selectedDate,
      time: selectedTime,
      clientName: clientName
    })

    setClientName("")
    setSelectedTime("")
  }

  const renderHour = (hour: string) => {
    const isSelected = selectedTime === hour
    return (
      <li 
        key={hour}
        className={`hour hour-available ${isSelected ? 'hour-selected' : ''}`}
        onClick={() => setSelectedTime(hour)}
      >
        {hour}
      </li>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <header>
        <h1>Agende um atendimento</h1>
        <p>
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </p>
      </header>

      <label htmlFor="date" className="label">Data</label>

      <div className="input">
        <i className="icon-left">
          <img src="/src/assets/calendar.svg" alt="Calendário" />
        </i>

        <input
          type="date"
          id="date"
          name="date"
          ref={dateRef}
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          required
        />

        <i className="icon-right" onClick={openCalendar}>
          <img src="/src/assets/arrow-down.svg" alt="Abrir" />
        </i>
      </div>

      <span className="label">Horários</span>

      <ul id="hours" className="hours">
        <li className="hour-period">Manhã</li>
        {morningHours.map(renderHour)}

        <li className="hour-period">Tarde</li>
        {afternoonHours.map(renderHour)}

        <li className="hour-period">Noite</li>
        {nightHours.map(renderHour)}
      </ul>

      <label htmlFor="client" className="label">Cliente</label>

      <div className="input">
        <i>
          <img src="/src/assets/person.svg" alt="Pessoa" />
        </i>
        <input
          type="text"
          id="client"
          name="client"
          placeholder="Nome do cliente"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="button">
        Agendar
      </button>
    </form>
  )
}

export default Sidebar