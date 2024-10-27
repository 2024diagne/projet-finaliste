import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import './Commande.css'; 
import Header from "../componnent/Header";
import Footer from "../componnent/footer";

function Commande() {
    const navigate = useNavigate();
    const { token } = useContext(AppContext);
    const [formData, setFormData] = useState({
        destination: "",
        activité: "",
        hébergement: "",
    });
    const [errors, setErrors] = useState({});

    async function handleCreate(e) {
        e.preventDefault();
        const res = await fetch("/api/commande", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();

        if (data.errors) {
            setErrors(data.errors);
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <Header></Header>
            <div className="fromulaire-container">

                <form onSubmit={handleCreate} className="form-container w-1/2 mx-auto">
                         
                    <h1 className="title">Nouvelle Commande</h1>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Destination" 
                            className="form-input"
                            value={formData.destination} 
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })} 
                        />
                        {errors.destination && <p className="error">{errors.destination[0]}</p>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Activité" 
                            className="form-input"
                            value={formData.activité} 
                            onChange={(e) => setFormData({ ...formData, activité: e.target.value })} 
                        />
                        {errors.activité && <p className="error">{errors.activité[0]}</p>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Hébergement" 
                            className="form-input"
                            value={formData.hébergement} 
                            onChange={(e) => setFormData({ ...formData, hébergement: e.target.value })} 
                        />
                        {errors.hébergement && <p className="error">{errors.hébergement[0]}</p>}
                    </div>
                    <button className="primary">Créer Commande</button>
                </form>
            </div>   
            <Footer></Footer> 
        </>
    );
}

export default Commande;
