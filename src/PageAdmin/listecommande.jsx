import React, { useEffect, useState } from 'react';
import './ListCommandes.css'; // Assurez-vous que le chemin est correct
import Header from '../componnent/Header';
import { Link } from 'react-router-dom';

const ListCommandes = () => {
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        const fetchCommandes = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/commande', {
                headers: {
                       'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCommandes(data);
            } else {
                console.error('Erreur lors de la récupération des commandes');
            }
        };

        fetchCommandes();
    }, []);

    return (
       <>
  
            <div className="container_ister">
                <h2>Mes Commandes</h2>
                <ul>
                    {commandes.map((commande) => (
                        <li key={commande.id}>
                            <div className="commande-info">
                                <strong>ID:</strong> {commande.id} <br />
                                <strong>Destination:</strong> {commande.destination} <br />
                                <strong>Activité:</strong> {commande.activité} <br />
                                <strong>Hébergement:</strong> {commande.hébergement}
                            </div>
                        </li>
                    ))}
                    <Link to={'/admin'}> Retouner </Link>
                </ul>
            </div>
       
       </>
    );
};

export default ListCommandes;
