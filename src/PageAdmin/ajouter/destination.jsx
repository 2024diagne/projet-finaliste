import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Destination (){
    const navigate = useNavigate()
    const {token}= useContext(AppContext)
    const[formData,setFormData]= useState({
        title: "",
        description: "",
        image: "",

    });
    const [errors,setErrors] = useState({})
    async function handleCreate(e) {
        e.preventDefault()
        const res= await fetch ("/api/destinations",{
            method :"post",
            headers : {
                Authorization: `Bearer ${token}`,
            },
            body :JSON.stringify(formData),
        });
        const data = await res.json();
       
        if (data.errors) {
            setErrors(data.errors)
            
        } else {
            //  localStorage.setItem ("token",data.token)
           //
            navigate("/")
            
        }
    }
    return (
        <>
            <h1 className="title">Create a new post</h1>
            <form onSubmit={handleCreate} action="" className="w-1/2 mx-auto space-y-6">
                <div>
                    <input type="text" placeholder="nom destination"
                    value={formData.name} onChange={(e)=> setFormData ({...formData
                        ,name:e.target.value})}
                    />{errors.name && <p className="error">{errors.name[0]}</p> }
                </div>
                <div>
                    <textarea rows="6" name="" id="" placeholder="Post Content"
                     value={formData.description} onChange={(e)=> setFormData ({...formData
                        ,description:e.target.value})}
                    ></textarea>{errors.description && <p className="error">{errors.description[0]}</p> }
                </div>
                <div>
                    <input type="file" placeholder="nom destination"
                    value={formData.image} onChange={(e)=> setFormData ({...formData
                        ,image:e.target.value})}
                    />{errors.image && <p className="error">{errors.image[0]}</p> }
                </div>
 
                <button className="primary-btn">Create</button>
            </form>


        </>
    
    );
}