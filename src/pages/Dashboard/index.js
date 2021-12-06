import React from 'react';
import "./Dashboard.css"

export function Dashboard(){
    return(
        <div className="box">
        <div className="header">
            <h1 >To-do</h1>
            <select >
            <option value="0">Concluído</option>
            <option value="1">Em Andamento</option>
            <option value="2">Não Inicializada</option>
            </select>
            <button>Filtrar</button>


           
            <ul className="lista">

                <li>TITULO DO TO-DOLIST-1 <button className="btn-visu">Visualizar</button> <button className="btn-editar">Editar</button><button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-1 <button className="btn-visu">Visualizar</button> <button className="btn-editar">Editar</button><button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-1 <button className="btn-visu">Visualizar</button> <button className="btn-editar">Editar</button><button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-1 <button className="btn-visu">Visualizar</button> <button className="btn-editar">Editar</button><button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-1 <button className="btn-visu">Visualizar</button> <button className="btn-editar">Editar</button><button className="btn-excluir">excluir</button></li> 

                <li>TITULO DO TO-DOLIST-2 <button className="btn-visu">Visualizar</button> <button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-2 <button className="btn-visu">Visualizar</button> <button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-2 <button className="btn-visu">Visualizar</button> <button className="btn-excluir">excluir</button></li> 
                <li>TITULO DO TO-DOLIST-2 <button className="btn-visu">Visualizar</button> <button className="btn-excluir">excluir</button></li> 

                

            </ul>

           
        </div>
        </div>
        
    )
}