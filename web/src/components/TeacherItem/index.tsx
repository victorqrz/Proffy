import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/38059087?s=460&v=4" alt="Avatar Github"/>
        <div>
          <strong>Gio Palm</strong>
          <span>Programação Imperativa</span>
        </div>
      </header>
          
      <p>
        Apaixonado pela linguagem Dafny e outras paradas. 
        <br/><br/>
        Aulas inovadoras e projetos um tanto quanto "fáceis".
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$45,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;