import type { Appointment } from "../App"

interface ScheduleProps {
  appointments: Appointment[];
  selectedDate: string;
  onRemoveAppointment: (id: string) => void;
}

function Schedule({ appointments, selectedDate, onRemoveAppointment }: ScheduleProps) {
  const todaysAppointments = appointments.filter(app => app.date === selectedDate);
  const sortedAppointments = todaysAppointments.sort((a, b) => a.time.localeCompare(b.time));

  const groupedAppointments = sortedAppointments.reduce((groups, app) => {
    const hour = parseInt(app.time.split(":")[0], 10);
    if (hour >= 9 && hour <= 12) {
      groups.morning.push(app);
    } else if (hour >= 13 && hour <= 18) {
      groups.afternoon.push(app);
    } else if (hour >= 19 && hour <= 21) {
      groups.night.push(app);
    }
    return groups;
  }, {
    morning: [] as Appointment[],
    afternoon: [] as Appointment[],
    night: [] as Appointment[]
  });

  const { morning, afternoon, night } = groupedAppointments;

  const renderAppointment = (app: Appointment) => (
    <li key={app.id}>
      <strong>{app.time}</strong>
      <span>{app.clientName}</span>
      <img
        src="/src/assets/cancel.svg"
        alt="Cancelar"
        className="cancel-icon"
        onClick={() => onRemoveAppointment(app.id)}
      />
    </li>
  );

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
          {morning.map(renderAppointment)}
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
          {afternoon.map(renderAppointment)}
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
          {night.map(renderAppointment)}
        </ul>
      </section>
    </aside>
  )
}

export default Schedule