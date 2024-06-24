import React, { useState, useEffect } from 'react';
import NavbarProfile from '../components/NavbarProfile';
import Footer from '../components/footer';
import axios from 'axios';

const Profile = () => {
  const [infos, setInfos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access');
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get('http://localhost:8000/api/user/profile/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setInfos(response.data);
      } catch (error) {
        setError('Erreur de récupération du profil');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!infos) {
    return <div>No profile information available</div>;
  }

  const fullname = `${infos.user.first_name} ${infos.user.last_name}`;

  return (
    <div>
      <NavbarProfile name={fullname} />
      
      <Footer />
    </div>
  );
}

export default Profile;