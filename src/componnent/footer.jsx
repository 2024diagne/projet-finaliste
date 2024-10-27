
import { factbook, intergram, logo, yuo } from '../assets/box'
import './footer.css'

export default function Footer() {

    return (
        <>
            <footer className='footer'>
                <div className="fooer">
                    <div class="fot">
                        <img src={logo} alt="" />
                        <ul class="footer-contacts">
                            <li>
                                <a href="">
                                    <span>Découvrez l'art de la persuasion <br /> moderne à  travers notre univers <br /> d'influence créative</span>
                                </a>
                            </li>
                        </ul>
                        <p>+456 566 568</p>
                        <p>Dakar,senegal,Internationale</p>
                    </div>
                    <div className='fot'>
                        <img src={intergram} alt="" />
                        <img src={factbook} alt="" />
                        <img src={yuo} alt="" />
                        <p>Pour plus d'information vous pouvais visiter ici</p>
                    </div>
                    <div class="contact">
                        <p>Contact: 33 345 56 54</p> 
                        <p>Email:www.isepdianiadio.edu.sn</p>
                        <p> activité,destionation,hébergement,client, se  connecter </p>
                    </div>
                </div>

            </footer>
                
        </>
    )
            
}