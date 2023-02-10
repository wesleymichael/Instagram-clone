import { useState } from "react";

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
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="assets/logo.png" />
                </a>
            </div>
            <div>
                <input autocapitalize="none" placeholder="Pesquisar" type="text" onChange={handleChange} value={input} />
            </div>
            <div className="topo-direito">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    </div>
    );
}