import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select name="subject" label="Matéria completo" options={[{ value: "Artes", label: "Artes" }]} />

                    <Select name="week_day" label="Dia da semana" options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda" },
                        { value: "2", label: "Terça" },
                        { value: "3", label: "Quarta" },
                        { value: "4", label: "Quinta" },
                        { value: "5", label: "Sexta" },
                        { value: "6", label: "Sábado" },
                    ]} />

                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem name="diego fernandes" subject="química" description="loren ipsum dsjdis sdisdijds isdji" price={10} />
            </main>
        </div >
    );
}