function Schedule() {
  return (
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
  )
}

export default Schedule