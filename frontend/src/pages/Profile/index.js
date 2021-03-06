import React, {useEffect, useState} from 'react'
import './styles.css'
import logoImg from "../../assets/logo.svg"
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from "react-icons/fi"
import api from '../../services/api'


export default function Profile(){
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    const [incidents, setIncidents] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('profile', {headers: {autho: ongId,
        }}).then(response =>{
                setIncidents(response.data)
        })
    }, [ongId])


    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {headers: {autho:ongId,}})

            setIncidents(incidents.filter(incidents=> incidents.id != id))
        }catch(err){
            alert('Erro ao deletar, tente novamente')
        }
    }

    function handleLogOut() {
        localStorage.clear()
        history.push('/')
    }




    return(
        <div className="profile-container">
            <header>
            <img src={logoImg} alt = "Be the Hero"/>
            <span>Bem Vinda, {ongName}</span>
            <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
            <button onClick={handleLogOut} type="button">
                <FiPower size={18} color="#E02041" />
            </button>
            </header>
            <h1>Casos cadstrados</h1>
            <ul>
            {incidents.map(incidents => (
                <li key={incidents.id}>
                    <strong>Caso</strong>
                    <p>{incidents.title}</p>
                    <strong>Descição</strong>
                    <p> {incidents.description}</p>
                    <strong>Valor</strong>
                    <p> {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format( incidents.value)}</p>                             
                    <button onClick={() => handleDeleteIncident(incidents.id)} type="button"><FiTrash2  size={20} color="#a8a8b3"/></button>
                 </li>
            ))}


            </ul>
        </div>
    )
}