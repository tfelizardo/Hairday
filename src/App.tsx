import { useRef } from "react"
import "./index.css"

function App() {
  const dateRef = useRef<HTMLInputElement>(null)

  const openCalendar = () => {
    dateRef.current?.showPicker()
  }

  return (
    <div className="container">
      <img src="/src/assets/logo.svg" alt="Logo" className="logo" />

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
          {/* Ícone esquerda */}
          <i className="icon-left">
            <img src="/src/assets/calendar.svg" alt="Calendário" />
          </i>

          {/* Input */}
          <input
            type="date"
            id="date"
            name="date"
            ref={dateRef}
            required
          />

          {/* Seta clicável */}
          <i className="icon-right" onClick={openCalendar}>
            <img src="/src/assets/arrow-down.svg" alt="Abrir" />
          </i>
        </div>

        <span className="label">Horários</span>
        <ul id="hours" className="hours">
          {/* Manhã */}
          <li className="hour-period">Manhã</li>
          <li className="hour hour-available">09:00</li>
          <li className="hour hour-available">10:00</li>
          <li className="hour hour-unavailable">11:00</li>
          <li className="hour hour-available">12:00</li>

          {/* Tarde */}
          <li className="hour-period">Tarde</li>
          <li className="hour hour-unavailable">13:00</li>
          <li className="hour hour-unavailable">14:00</li>
          <li className="hour hour-available">15:00</li>
          <li className="hour hour-unavailable">16:00</li>
          <li className="hour hour-unavailable">17:00</li>
          <li className="hour hour-available">18:00</li>

          {/* Noite */}
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

        <button type="submit" className="button">Agendar</button>
      </form>

      <aside className="schedule">
        <header>
          <h1>Agendamentos</h1>
          <p>Visualize os agendamentos de acordo com o dia selecionado</p>
        </header>

        {/* Manhã */}
        <section className="schedule-period">
          <header>
            <img src="/src/assets/morning.svg" alt="Manhã" />
            <strong>Manhã</strong>
            <span>09h-12h</span>
          </header>
          <ul className="period">
            <li>
              <strong>11:00</strong>
              <span></span>
              <img
                src="/src/assets/cancel.svg"
                alt="Cancelar"
                className="cancel-icon"
              />
            </li>
          </ul>
        </section>

        {/* Tarde */}
        <section className="schedule-period">
          <header>
            <img src="/src/assets/afternoon.svg" alt="Tarde" />
            <strong>Tarde</strong>
            <span>13h-18h</span>
          </header>
          <ul className="period">
            <li>
              <strong>14:00</strong>
              <span></span>
              <img
                src="/src/assets/cancel.svg"
                alt="Cancelar"
                className="cancel-icon"
              />
            </li>
          </ul>
        </section>

        {/* Noite */}
        <section className="schedule-period">
          <header>
            <img src="/src/assets/night.svg" alt="Noite" />
            <strong>Noite</strong>
            <span>19h-21h</span>
          </header>
          <ul className="period">
            <li>
              <strong>19:00</strong>
              <span></span>
              <img
                src="/src/assets/cancel.svg"
                alt="Cancelar"
                className="cancel-icon"
              />
            </li>
          </ul>
        </section>
      </aside>
    </div>
  )
}

export default App