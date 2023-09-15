import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/Context';
import "../Styles/Contact.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const Contact = () => {
    const {state} = useGlobalStates();
    const themeClass = state.theme === "lightTheme" ? "lightTheme" : "darkTheme";



  
  return (
    <div className={themeClass}>
    <div className='contact'>
      <h2>Necesitas saber mas?</h2>
      <p>Envianos tus preguntas y nos contactaremos contigo</p>
      <Form/>
    </div>
    </div>
  )
}

export default Contact