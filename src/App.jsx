import { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expliguation from './commade/expliquer'
import Login from './Auth/Login'
import Hébergement from './autre/hebergement'
import { AppContext } from './Context/AppContext'
import Register from './Auth/Register'
import Accueil from './commade/Accueil'
import Commande from './autre/commande'
import AdminPage from './PageAdmin/admin'
import ListCommandes from './PageAdmin/listecommande'
import Notifications from './autre/Notification'
import AddDestination from './PageAdmin/ajouter/destination'
import Destination from './PageAdmin/ajouter/destination'


export default  function App() {
  const {user}= useContext(AppContext)

  return (
    <>
      
      <BrowserRouter>
        <Routes>
            <Route index  element={<Accueil/>}/>
            <Route path='/login' element={ user ? <Accueil/>:<Login/>}/> 
            <Route path='/register' element={ user ? <Accueil/>:<Register/>}/> 
            <Route path='/hebergement' element={<Hébergement/>}/>
            <Route path='/commandes' element={<Commande/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/listcommande' element={<ListCommandes/>}/>
            <Route path='/notification' element={<Notifications/>}/>
            <Route path='/destination' element={<Destination/>}/>

        </Routes>
    </BrowserRouter>

    

    </>
  )
}


