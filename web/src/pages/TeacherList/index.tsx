import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />

                    <Input name="week_day" label="Dia da Semana" />

                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem name="diego fernandes" subject="química" description="loren ipsum dsjdis sdisdijds isdji" price={10} />
            </main>
        </div >
    );
}