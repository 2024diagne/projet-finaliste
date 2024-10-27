import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function Commande() {
    const navigate = useNavigate();
    const { token } = useContext(AppContext);
    const [formData, setFormData] = useState({
        destination: "",
        activité: "",
        hébergement: "",
    });
    const [commandes, setCommandes] = useState([]);
    const [errors, setErrors] = useState({});
    const [editingCommande, setEditingCommande] = useState(null);

    // Fetch les commandes
    useEffect(() => {
        const fetchCommandes = async () => {
            const res = await fetch("/api/commande", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (res.ok) {
                setCommandes(data);
            } else {
                console.error("Erreur lors de la récupération des commandes");
            }
        };
        fetchCommandes();
    }, [token]);

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
            setCommandes([...commandes, data]); // Ajoute la nouvelle commande à la liste
            setFormData({ destination: "", activité: "", hébergement: "" }); // Réinitialiser le formulaire
            navigate("/"); // Rediriger si nécessaire
        }
    }

    async function handleEdit(commande) {
        setEditingCommande(commande);
        setFormData({
            destination: commande.destination,
            activité: commande.activité,
            hébergement: commande.hébergement,
        });
    }

    async function handleUpdate(e) {
        e.preventDefault();
        const res = await fetch(`/api/commande/${editingCommande.id}`, {
            method: "put",
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
            const updatedCommandes = commandes.map((c) =>
                c.id === editingCommande.id ? data : c
            );
            setCommandes(updatedCommandes);
            setEditingCommande(null);
            setFormData({ destination: "", activité: "", hébergement: "" });
        }
    }

    async function handleDelete(id) {
        const res = await fetch(`/api/commande/${id}`, {
            method: "delete",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.ok) {
            setCommandes(commandes.filter((commande) => commande.id !== id));
        } else {
            console.error("Erreur lors de la suppression de la commande");
        }
    }

    return (
        <>
            <h1 className="title">{editingCommande ? "Modifier Commande" : "Nouvelle Commande"}</h1>
            <form onSubmit={editingCommande ? handleUpdate : handleCreate} className="w-1/2 mx-auto space-y-6">
                <div>
                    <input type="text" placeholder="destination"
                        value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />{errors.destination && <p className="error">{errors.destination[0]}</p>}
                </div>
                <div>
                    <input type="text" placeholder="activité"
                        value={formData.activité} onChange={(e) => setFormData({ ...formData, activité: e.target.value })}
                    />{errors.activité && <p className="error">{errors.activité[0]}</p>}
                </div>
                <div>
                    <input type="text" placeholder="hébergement"
                        value={formData.hébergement} onChange={(e) => setFormData({ ...formData, hébergement: e.target.value })}
                    />{errors.hébergement && <p className="error">{errors.hébergement[0]}</p>}
                </div>
                <button className="primary">{editingCommande ? "Modifier Commande" : "Créer Commande"}</button>
            </form>

            <h2 className="title">Liste des Commandes</h2>
            <ul>
                {commandes.map((commande) => (
                    <li key={commande.id}>
                        <div>
                            <strong>Destination:</strong> {commande.destination} <br />
                            <strong>Activité:</strong> {commande.activité} <br />
                            <strong>Hébergement:</strong> {commande.hébergement}
                            <button onClick={() => handleEdit(commande)}>Modifier</button>
                            <button onClick={() => handleDelete(commande.id)}>Annuler</button>
                        </div>
                    </li>
                ))}
            </ul>
                        {/* // const history = unstable_HistoryRouter();
                // const user = JSON.parse(localStorage.getItem('user'));

                // // Vérifie le rôle de l'utilisateur
                // if (!user || user.role !== 'admin') {
                //     // Redirige vers la page d'accueil ou affiche un message
                //     history.push('/admin'); // Redirige vers la page d'accueil
                //     return null; // Ou vous pouvez retourner un message
                // } */}
        </>
    );
}

export default Commande;




