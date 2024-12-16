import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/api';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await getEventById(id, token);
        setEvent(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do evento', error);
      }
    };
    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <p>Carregando detalhes do evento...</p>;
  }

  return (
    <div className="event-details">
      <h2>Detalhes do Evento</h2>
      <p><strong>Nome:</strong> {event.name}</p>
      <p><strong>Descrição:</strong> {event.description}</p>
    </div>
  );
}

export default EventDetails;
