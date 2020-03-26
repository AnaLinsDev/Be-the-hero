import React, {useState} from 'react'
import './styles.css'
import logoImg from "../../assets/logo.svg"
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from "react-icons/fi"
import api from '../../services/api'



export default function NewIncidents(){
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [value, setValue] = useState('')
        const ongId = localStorage.getItem('ongId')
        const history = useHistory()



    async function hadleNewincident(e){
        e.preventDefault()
        const data = {
            title, 
            description, 
            value,
        }
        try{
            await api.post('incidents', data, {
                headers: { 
                    autho: ongId,
                }
            })
            history.push('/profile')
        } catch(err){
            alert('Erro ao criar novo incidente, tente novamente')
        }
    }





    return(
        <div className= "newincident-container">
        <div className="content1">
            <section>
            <img src={logoImg} alt = "Be the Hero"/>

            <h1>Cadastrar novo caso</h1>
            <p>Faça o cadstro, sfsmnf fstrh rh hry6rj jy767 rtyr </p>
            <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#e02041" /> Voltar para Profile</Link>
            </section>
            <form onSubmit={hadleNewincident}>
                
                <input 
                placeholder="Titulo do caso"
                value={title}
                onChange={e=>setTitle(e.target.value)}/>
                <textarea 
                placeholder="Descrição" 
                value={description}
                onChange={e=>setDescription(e.target.value)}/>
              <input 
                placeholder="Valor em Reais"
                value={value}
                onChange={e=>setValue(e.target.value)}/>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>

    </div>
    )
}