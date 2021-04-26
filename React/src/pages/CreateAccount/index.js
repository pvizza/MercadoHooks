import React, {useEffect, useState} from 'react';
import './style.scss';
import axios from 'axios'
import {useValidate} from '../../CustomHooks/useValidate'
import Button from '../../componets/button/index'

export default function Create() {
    const [data, setData] = useState({});
    const [validate,setValidate] = useState(false);
    const [error, setError] = useState(false)
    const [login, setLogin] = useState(false)
    
    
    const fields = ["nombre","apellido","email","clave"]
    const isValid = useValidate(data,fields,validate);

    useEffect(() => {

        if (isValid) {
            if  (isValid.length === 0 || fields === 0) {
                setError(false)
        } else {
            setValidate(false)
            }
        }
    }, [validate,fields])    
    


   async function handleSubmit(e) {
        e.preventDefault()
          setError(true)
          setValidate(true)

    try {
   const res = await axios.post('https://mercadohooksapi.herokuapp.com/create',data)
        if (res.status === 200) { 
        setLogin(true)
        }
        }catch(err)  {
        console.log(err)
    }
        
        
    }

    if(login) {
        setTimeout(() => window.location.href="/login", 2000)
    }

    function handleChange(e) {
        const {name,value} = e.target;
        setData({

            ...data,
            [name] : value
        })

    }

    return (
        <>
            <div className='mainLogin cr'>
           
                <h2 className='titleData'>Completa tus datos</h2>
                <div className='createUser'>
                    <form onSubmit={handleSubmit}>
                    <div className='inputsWrapper'>
                    <input className="inputLogin" placeholder="Nombre" type='text' name='nombre' onChange={handleChange}/> 
                    <input className="inputLogin" placeholder="Apellido" type='text' name='apellido' onChange={handleChange}/>
                    </div> 
                    <div className='inputsWrapper'>
                    <input className="inputLogin" placeholder="e-mail" type='text' name='email' onChange={handleChange}/>
                    <input className="inputLogin" placeholder='clave' type='password' name="clave" onChange={handleChange}/>
                    </div>
                    <div className='continue' >
                    <Button/>
                    </div>
            </form>
            <div className='errorLogin'>
            {error && (
                <p>{`Te falto completar los campos : ${isValid}`}</p>)} 
            { validate && <p>Te registraste correctamente</p> }  
               </div>
                </div>
                
            </div>

        </>
    )
}