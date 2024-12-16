import React, { useState, useEffect } from 'react';
import { getProfile } from '../api/api';

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await getProfile(token);
        setProfile(data);
      } catch (error) {
        console.error('Erro ao buscar perfil', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <p>Nome: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default Profile;
