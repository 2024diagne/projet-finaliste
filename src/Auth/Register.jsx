import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import './Register.css'; 
import Header from "../componnent/Header";
import Footer from "../componnent/footer";

export default function Register() {
    const navigate = useNavigate();
    const { setToken } = useContext(AppContext);
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        password: '', 
        password_confirmation: '', 
    });
    const [errors, setErrors] = useState({});

    async function handleRegister(e) {
        e.preventDefault();
        
        const res = await fetch('/api/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.errors) {
            setErrors(data.errors);
        } else {
            localStorage.setItem("token", data.token);
            setToken(data.token);
            navigate("/");
        }
    }

    return (
        <>
          <Header></Header>
            <div className="register-container">
               <div className="register-text">
                   
                        <form onSubmit={handleRegister} className="form">
                         <h1 className="title">Créer un nouveau compte</h1>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Name"
                                    value={formData.name} 
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                                    className="input"
                                />
                                {errors.name && <p className="error">{errors.name[0]}</p>}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Email@gmail.com"
                                    value={formData.email} 
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                                    className="input"
                                />
                                {errors.email && <p className="error">{errors.email[0]}</p>}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    value={formData.password} 
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                                    className="input"
                                />
                                {errors.password && <p className="error">{errors.password[0]}</p>}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    placeholder="Confirm password"
                                    value={formData.password_confirmation} 
                                    onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} 
                                    className="input"
                                />
                            </div>
                            <button className="primary-btn">Register</button>
                        </form>

                </div>
            </div>
            <Footer></Footer>
        </>    
    );
}
