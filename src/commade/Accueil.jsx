
import Footer from '../componnent/footer'
import Header from '../componnent/Header'
import video from '../assets/viodéo.mp4'
import "./header.css"
import { image1, image2, image3, image4, image5, image6, image7, image8, logoflag, logolocek, logosent } from '../assets'
import { box1, box2, box3, box4, box5 } from '../assets/box'
import "./section.css"
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'

export default  function Accueil() {
 
    
    return (
        <>
            <header className="header">
               
                <Header></Header>

               <div className='padding'>
                    <div className='fatou'>
                        <h1>Découvrez Le <br /> Maroc Avec  Notre <br /> Guide</h1>

                        <div className='btn'>
                            <ul>
                                <li><a href="">Découvrez Les Circuits</a></li>
                            </ul>
                        </div>
                    </div>
               </div>
                <div className='jumbo'>
                    <div className='image_content'>
                        <div className='jumbo_titile'>
                            <h1>GESTION DE COMMANDE</h1>
                        </div>
                        <div className=" image_content_2">
                            <h4> Expérience De Voyage Avec Di.allo Conciergerie </h4>
                            <p>
                                
                                Découvrez la qualité et le fiabilité d'une équipe
                                disponible,courtoise,réactive et a votre écoute tout 
                                au long de votre séjour
                            </p>
                        </div>
                        <div className='jumbo_liste'>
                            <ul>
                                <li><a href="">Découvrez Les Circuits</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
             
            <main className='main'> 
                <div className='containes'>
                    
                    <section className='section'>
                        <div className='section_one'>
                            <div className='section_one_1'>
                                <div className='section_one_2'>
                                    <img src={logoflag} alt="home " />
                                    <p>Réactivité</p>
                                        
                                </div>
                                    
                                <p className="vertical-line"></p>
                                <div className='section_one_2'>
                                    <img src={logolocek} alt="home " />
                                    <p>Confidentialité</p>
                                        
                                </div>
                                <p className="vertical-line"></p>
                                <div className='section_one_2'>
                                    <img src={logosent} alt="home " />
                                    <p>Confort</p>
                                </div>
                            </div>
                        </div> 
                    </section>
                 
                </div>
                <section className="cards-section">

                         <div className='section_heros'>
                            <h6>Top Destination</h6>
                            <h2> Popular Destination</h2>
                        </div>
                        <div className='section_heros_1'>
                            <p>850+ Destinations</p>
                            <p>One of the most well-liked travel companies for people looking to experience adventure and see the world is Tourm.</p>
                        </div>
                   
                    <div className="card">
                        <img src={image1} alt="Description 1" />
                        <h3>Marrakesh</h3>
                        <p>Brève description de l'élément 1.</p>
                        <button className="reserve-button">Voir Les Details</button>
                    </div>
                    <div className="card">
                        <img src={image2} alt="Description 2" />
                        <h3>Casablanca</h3>
                        <p>Brève description de l'élément 2.</p>
                        <button className="reserve-button">Voir Les Détails</button>
                    </div>
                    <div className="card">
                        <img src={image3} alt="Description 3" />
                        <h3>Rabat</h3>
                        <p>Brève description de l'élément 3.</p>
                        <button className="reserve-button">Voir Les Détails</button>
                    </div>
                    <div className="card">
                        <img src={image4} alt="Description 4" />
                        <h3>Chefchaouen</h3>
                        <p>Brève description de l'élément 4.</p>
                        <button className="reserve-button">Voir Les Détails</button>
                    </div>

                    {/* {destinations.map(destination => (
                            <div className="card" key={destination.id}>
                                <img src={`storage/${destination.image_url}`} alt={destination.title} />
                                <h3>{destination.title}</h3>
                                <p>{destination.description}</p>
                                <button className="reserve-button">Voir Les Détails</button>
                            </div>
                    ))} */}
               </section>

               <section className="image-cards-section">
                    <div className='text'>
                        <h3>Un endroit merveilleux pour vous</h3>
                        <h1>Catégories de Circuits</h1>
                    </div>
                    <div className='file'>
                        <div className="cards">
                            <img src={image5} alt="Circuit 1" />
                            <p>Excursions dans le désert de Ouarzazate</p>
                        </div>
     
                        <div className="cards">
                            <img src={image6} alt="Circuit 2" />
                            <p>Excursions d'une journée à Marrakech</p>
                        </div>
                        <div className="cards">
                            <img src={image7} alt="Circuit 3" />
                            <p>Excursions dans le désert de Fès</p>
                        </div>
                        <div className="cards">
                            <img src={image8} alt="Circuit 4" />
                            <p>Excursions dans le désert de Marrakech</p>
                        </div>
                    </div>
               </section>
               <div className="diagne_video">
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Votre navigateur ne prend pas en charge la vidéo.
                    </video>
                    <div className="content">
                       
                        <h5>Allons-y ensemble</h5>
                        <h2>Planifiez votre voyage</h2>
                        <p>Il existe de nombreuses variantes de passages disponibles,
                            mais la majorité d'entre eux ont subi une altération sous une forme ou une autre,
                            par l'injection de mots aléatoires.</p>
                        <button className="content-button">Commencer</button>
                    </div>
               </div>
               <section className='section-resver'>
                    <div className='section-resver-container'>
                        <div className='resver-text'>
                            <h3>Meilleure expérience</h3>
                            <h1>Une expérience de voyage incroyable</h1>
                        </div>
                    </div>
                    <div className='resver-cards'>
                        <div className='resver-maintenant'>
                            <img src={box1} alt="box1" />
                            <p>Brève description de l'élément 1.</p>
                            <p><strong>Disponible :</strong> Lundi à Vendredi, 10h - 18h</p>
                            <button className='reserves-button'>Réserver</button>
                        </div>
                    
                        <div className='resver-maintenant'>
                            <img src={box3} alt="box3" />
                            <p>Brève description de l'élément 2.</p>
                            <p><strong>Disponible :</strong> Samedi et Dimanche, 9h - 17h</p>
                            <button className='reserves-button'>Réserver</button>
                        </div>
                        
                        <div className='resver-maintenant'>
                            <img src={box4} alt="box4" />
                            <p>Brève description de l'élément 3.</p>
                            <p><strong>Disponible :</strong> Tous les jours, 11h - 19h</p>
                            <button className='reserves-button'>Réserver</button>
                        </div>
                        
                        <div className='resver-maintenant'>
                            <img src={box5} alt="box5" />
                            <p>Brève description de l'élément 4.</p>
                            <p><strong>Disponible :</strong> Mardi à Jeudi, 12h - 20h</p>
                            <button className='reserves-button'>Réserver</button>
                        </div>
                    </div>
               </section>

            </main>

            <Footer></Footer>
        </>
    )
    
}