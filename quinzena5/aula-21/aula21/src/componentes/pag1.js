import React from "react";



function pag1(){
    return(
    <div>
    <h1>Etapa 1 - Dados gerais</h1>
    
          <p>Qual seu nome ?</p>
          <input type="text"/>
          <p>Qual sua idade ?</p>
          <input type="text"/>
          <p>Qual seu e-mail ?</p>
          <input type="text"/>
          <p>Qual sua escolaridade? </p>
          <select >
            <option value="emi">Ensino médio incompleto</option>
            <option value="emc">Ensino médio completo</option>
            <option value="esi">Ensino superio incompleto</option>
            <option value="esc">Ensino superior completo</option>
          </select>
    
          <button>Proxima etapa</button>
    
          
        </div>
      );}

      