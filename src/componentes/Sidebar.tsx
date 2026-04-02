import { useRef } from "react"

function Sidebar() {
  const dateRef = useRef<HTMLInputElement>(null)

  const openCalendar = () => {
    dateRef.current?.showPicker()
  }

  return (
    <form className="form">
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
          required
        />

        <i className="icon-right" onClick={openCalendar}>
          <img src="/src/assets/arrow-down.svg" alt="Abrir" />
        </i>
      </div>

      <span className="label">Horários</span>

      <ul id="hours" className="hours">
        <li className="hour-period">Manhã</li>
        <li className="hour hour-available">09:00</li>
        <li className="hour hour-available">10:00</li>
        <li className="hour hour-unavailable">11:00</li>
        <li className="hour hour-available">12:00</li>

        <li className="hour-period">Tarde</li>
        <li className="hour hour-unavailable">13:00</li>
        <li className="hour hour-unavailable">14:00</li>
        <li className="hour hour-available">15:00</li>
        <li className="hour hour-unavailable">16:00</li>
        <li className="hour hour-unavailable">17:00</li>
        <li className="hour hour-available">18:00</li>

        <li className="hour-period">Noite</li>
        <li className="hour hour-available">19:00</li>
        <li className="hour hour-available">20:00</li>
        <li className="hour hour-unavailable">21:00</li>
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