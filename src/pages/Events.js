import React, { useState, useEffect } from 'react';
import { listEvents } from '../api/api';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await listEvents(token);
        setEvents(data);
      } catch (error) {
        console.error('Erro ao buscar eventos', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events">
      <h2>Lista de Eventos</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
