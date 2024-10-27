import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import logoMenu from '../assets/menu.svg';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    // const { token, setToken } = useContext(AppContext);

    // function handleLogout() {
    //     localStorage.removeItem('token');
    //     setToken(null);
    // }

    const {user,token,setUser,setToken}= useContext(AppContext)
    const navigate = useNavigate()
    

    async function handleLogout(e) {
        e.preventDefault();
        const res= await fetch ("/api/logout",{
            method :"post",
            headers : {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await res.json();
        console.log(data)
        if(res.ok) {
            setUser(null)
            setToken(null)
            localStorage.removeItem("token");
            navigate("/")

        }
      
        
    }

    return (
        <header>
            <div className="header_one">
                <div className="logo">
                    <Link to={'/'}>Di.allo Conciergerie</Link>
                </div>
                <ul className="header_one_1">
                    <li><a href="/commandes">Commandes</a></li>
                    <li><a href="/devis">Devis</a></li>
                    <li><a href="/hebergement">Hébergement</a></li>
                    <li><a href="/notification">Notification</a></li>
                    <li><a href="/contacter">Contactez_Nous</a></li>
                </ul>
                <div className="logo_3">
                    <ul>
                
                        {user ? ( <div className='welcome' > <p> Welcome black {user.name}</p>
                            <button className="nav-link" onClick={handleLogout}>Déconnexion</button>
                        
                          </div>
                        ) : (
                            <>
                                <li><a href="/register">S'inscrire</a></li>
                                <li><a href="/login">Connexion</a></li>
                            </>

                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
