import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../componnent/Header';
import './admin.css'
import Footer from '../componnent/footer';

const AdminPage = () => {
    return (
        <> 
            <Header></Header>
            <div className='admintraction'>
                <h1>Page Admin</h1>
                <p>Bienvenue, Admin ! Vous avez accès à cette page.</p>
                
                {/* Boutons de navigation avec textes descriptifs */}
                <div className="navigation-buttons">
                    <div className='admintraction-h'>
                        <div className='navigation-buttons-h'>
                            <p>Consultez toutes les commandes passées :</p>
                            <button>
                                <Link to="/listcommande">Voir les commandes</Link>
                            </button>
                        </div>
                        <div className='navigation-buttons-h'>
                            <p>Ajoutez une nouvelle activité :</p>
                            <button>
                                <Link to="/ajouter-activite">Ajouter une Activité</Link>
                            </button>
                        </div>
                        <div className='navigation-buttons-h'>
                            <p>Ajoutez une nouvelle destination :</p>
                            <button>
                                <Link to="/destination">Ajouter une Destination</Link>
                            </button>
                        </div>
                        <div className='navigation-buttons-h'>
                            <p>Ajoutez un nouvel hébergement :</p>
                            <button>
                                <Link to="/ajouter-hebergement">Ajouter un Hébergement</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default AdminPage;
