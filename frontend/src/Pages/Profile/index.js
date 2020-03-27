import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import Api from '../../services/api'

import './style.css'

import logoImg from '../../assets/logo.svg'
export default function Profile() {

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const [incidents, setIncidents] = useState([])
    const history = useHistory()
    useEffect(() => {
        Api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(resp => {
            setIncidents(resp.data)
        })
    }, [ongId])

    async function handleDeletIncident(id) {
        try {
            await Api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt='Be The Hero' />
                <span>Bem-vinda {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick= {handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>

                        <strong>DESCRIÇÂO</strong>
                        <p>{incidents.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BLR' }).format(incidents.value)}</p>
                        <button onClick={() => handleDeletIncident(incidents.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}