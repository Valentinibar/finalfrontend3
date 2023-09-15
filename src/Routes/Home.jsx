import React from 'react'
import { useGlobalStates } from '../Components/utils/Context';
import "../Styles/Home.css"
import Card from '../Components/Card';
import "../Styles/darkTheme.css"
import "../Styles/lightTheme.css"




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useGlobalStates();

  const themeClass = state.theme === "lightTheme" ? "lightTheme" : "darkTheme"; 


  return (
    <main className={themeClass} >
    <h1>Home</h1>
    <div className='contenedor' >
    {state.lista.map(dentista => <Card dentista= {dentista} key={dentista.id}/>)}
    </div>
    </main>
  )
}

export default Home