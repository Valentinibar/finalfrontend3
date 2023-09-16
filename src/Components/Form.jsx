import React from "react";
import { useGlobalStates } from "./utils/Context";
import "../Styles/Form.css"

const Form = () => {

  const {usuario, setUsuario, show, setShow, error, setError} = useGlobalStates();

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function reloadPageAfterDelay() {
    setTimeout(function () {
    setUsuario({ ...usuario, nombreCompleto: "", email: "" }); 
    setShow(false)
    }, 
  3000); 
  }

  const handleSubmit = ()=>{
    if(usuario.nombreCompleto.length > 5 && (emailRegex.test(usuario.email))) {   
        setShow(true)
        setError(false)
        reloadPageAfterDelay();
    }
    else{setError(true)
        setShow(false)
    }
  }




  return (  
      <div className="form">
      <label>Ingrese su nombre completo</label>
      <input type="text" value={usuario.nombreCompleto} onChange={(event)=> setUsuario({...usuario, nombreCompleto:event.target.value})}/>
      <br />
      <label>Ingrese su email</label>
      <input type="email" value={usuario.email} onChange={(event)=> setUsuario({...usuario, email:event.target.value})}/>
      <br />
      
      
      <div className="divBoton">
      <button className='boton' onClick={handleSubmit} >Enviar</button>
      </div>

      {show &&  
      <h5>  Gracias {usuario.nombreCompleto}, te contactaremos cuanto antes vía email  </h5> 
        
        }
      {error && <h5 style={{color: "red"}}  > Por favor verifique su información nuevamente. 
      El nombre debe tener una longitud mayor a 5. Verifique el formato de su email.   </h5>}

      </div>
  );
};

export default Form;
