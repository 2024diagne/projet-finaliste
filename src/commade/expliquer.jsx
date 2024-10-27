import logo from '../assets/logo.svg'
import './style.css'
export default  function Expliguation() {
    return (
        <>
            <section className="container">
                <div className="children">
                    <div className="children_one">
                        <div className="logo">
                         <img src={logo} alt="home " />
                         <h1>GESTION DE COMMANDE</h1>
                        </div>
                        <div className='children_one_1'>
                            <p>                        
                                L'application de gestion de commande pour Di.allo Conciergerie vise à simplifier et
                                automatiser le processus de gestion des commandes, offrant ainsi une meilleure expérience à nos clients.
                            </p>
                            <button className='button'><a href="/accueil">APPUYER ICI</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    
}