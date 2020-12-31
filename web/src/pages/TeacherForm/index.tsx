import React, { useState } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


export default function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário"
            />
            <main>
                <form action="">
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name} onChange={e => { setName(e.target.value) }}
                        />

                        <Input
                            name="avatar" label="Avatar"
                            value={avatar} onChange={e => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp} onChange={e => { setWhatsapp(e.target.value) }}
                        />

                        <TextArea
                            name="bio"
                            label="biografia"
                            value={bio} onChange={e => { setBio(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria completo"
                            options={[
                                { value: "Artes", label: "Artes" },
                                { value: "Biologia", label: "Biologia" },
                                { value: "Física", label: "Física" },
                                { value: "Química", label: "Química" },
                                { value: "História", label: "Hitória" },
                                { value: "Português", label: "Português" },
                                { value: "Matemática", label: "Matemática" },
                            ]}
                            value={subject} onChange={e => { setSubject(e.target.value) }}
                        />

                        <Input
                            name="cost"
                            label="Custo da sua hora/aula"
                            value={cost} onChange={e => { setCost(e.target.value) }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
                        </legend>
                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia da semana" options={[
                                        { value: "0", label: "Domingo" },
                                        { value: "1", label: "Segunda" },
                                        { value: "2", label: "Terça" },
                                        { value: "3", label: "Quarta" },
                                        { value: "4", label: "Quinta" },
                                        { value: "5", label: "Sexta" },
                                        { value: "6", label: "Sábado" },
                                    ]} />
                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="button">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}