import { useState } from "react";
import {FaInstagram, FaRegCompass } from "react-icons/fa";
import { IoHeartOutline, IoPaperPlaneOutline, IoPersonOutline } from "react-icons/io5";

export default function Navbar(){
    
    const [input, setInput] = useState('');

    function handleChange(e){
        setInput(e.target.value);
    }

    return (
    <div className="cabecalho">
        <div className="topo">
            <div className="topo-esquerdo">
                <a href="index.html">
                    <FaInstagram className="icons"/>
                    <img src="assets/logo.png" />
                </a>
            </div>
            <div>
                <input autocapitalize="none" placeholder="Pesquisar" type="text" onChange={handleChange} value={input} />
            </div>
            <div className="topo-direito">
                <IoPaperPlaneOutline className="icons"/>
                <FaRegCompass className="icons"/>
                <IoHeartOutline className="icons"/>
                <IoPersonOutline className="icons"/>
            </div>
        </div>
    </div>
    );
}