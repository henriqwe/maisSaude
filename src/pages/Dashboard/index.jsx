import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/UserContext';
import { ToastContainer } from 'react-toastify';
import api from '../../service/api'

export function Dashboard() {

    const [tasks, setTasks] = useState([])
    const { user } = useContext(UserContext)
    
    useEffect(async () => {
        await api.get(`api/getTasksUser/${user.id}`).then((res) => {
            setTasks(res.data)
        })
    }, [user.id])

    return (
        <>
            <Header />
            <main className='container'>
                <div>
                    <ul>
                        {tasks.map((task, index) => {
                            return (
                                <li key={index} className='text-white'>{task.titulo}</li>
                            )
                        })}
                    </ul>
                </div>
                <ToastContainer />
            </main>
        </>

    )
}