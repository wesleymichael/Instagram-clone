import React from 'react';
import Corpo from './Corpo';
import Navbar from './Navbar';
import Navbarmobile from './Navbarmobile';
import Rodape from './Rodape';

export default function App(){
    return (
        <>
            <Navbar />
            <Navbarmobile />
            <Corpo />
            <Rodape />
        </>
    );
}