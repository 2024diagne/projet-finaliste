import Header from "../componnent/Header";

function Hébergement() {
  return (
    <>
      <Header></Header>

      <section id="hebergements">
        <h2>Liste des Hébergements</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Type</th>
                <th>Capacité</th>
                <th>Prix/Nuit</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody id="hebergements-list">
            </tbody>
          </table>
      </section>
    </>

  );
  
}

export default Hébergement;