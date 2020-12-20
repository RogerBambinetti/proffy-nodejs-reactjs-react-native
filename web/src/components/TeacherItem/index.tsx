import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    name: string;
    subject: string;
    description: string;
    price: number;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/50684839?s=460&v=4" alt="" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>
            <p>
                {props.description}
            </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ {props.price}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;