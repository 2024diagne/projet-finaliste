import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import './Login.css'
import Header from "../componnent/Header";
import Footer from "../componnent/footer";

export default function Login() {
    const navigate = useNavigate();
    const { setToken,setUser } = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: '', 
        password: '', 
    });
    const [errors, setErrors] = useState({});

    async function handleLogin(e) {
        e.preventDefault();
        
        const res = await fetch("/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
      
        if (data.errors) {
            setErrors(data.errors);
        } else {
            localStorage.setItem("token", data.token);
            
        }
        localStorage.setItem("role", data.user.role);
        setUser(data.user); // Mettez à jour l'utilisateur dans le contexte

        // Redirection en fonction du rôle
        if (data.user.role === 'admin') {
            navigate("/admin");
        } else {
            navigate("/");
        }
    }

    return (
        <> 
            <Header></Header>
            <div className="login-container">
                <div className="login-text">
                    <form onSubmit={handleLogin} className="login-form">
                        <h1 className="title">Se connecter</h1>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Email@gmail.com"
                                value={formData.email} 
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                                className="form-input"
                            />
                            {errors.email && <p className="error">{errors.email[0]}</p>}
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={formData.password} 
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                                className="form-input"
                            />
                            {errors.password && <p className="error">{errors.password[0]}</p>}
                        </div>
                        <button className="primary-btns">Login</button>
                        <p className="oblier">Mot de passe oublie ?</p>
                    </form>

                </div>
            </div>

            <Footer></Footer>
        </>  
    );
}
