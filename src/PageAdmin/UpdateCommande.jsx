const UpdateCommande = ({ commande }) => {
    const { token } = useContext(AppContext);
    const [statut, setStatut] = useState(commande.statut);

    async function handleUpdate(e) {
        e.preventDefault();
        const res = await fetch(`/api/commandes/${commande.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ statut }),
        });

        if (res.ok) {
            alert("Statut mis à jour !");
        } else {
            console.error('Erreur lors de la mise à jour du statut');
        }
    }

    return (
        <form onSubmit={handleUpdate}>
            <select value={statut} onChange={(e) => setStatut(e.target.value)}>
                <option value="en attente">En Attente</option>
                <option value="validé">Validé</option>
                <option value="annulé">Annulé</option>
            </select>
            <button type="submit">Mettre à jour</button>
        </form>
    );
};
