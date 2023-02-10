import { useState } from "react";

export default function Usuario(props){
    const [userName, setNewUserName] = useState(props.username);
    const [imgPerfil, setImgPerfil] = useState(props.img);

    function mudarUserName(){
        const novoUserName = prompt('Digite o novo user name:');
        if(novoUserName.trim() != ''){
            setNewUserName(novoUserName);
        }
    }

    function mudarImgPerfil(){
        const novaImgPerfil = prompt('Digite a nova url para foto do perfil');
        if(novaImgPerfil.trim() != ''){
            setImgPerfil(novaImgPerfil);
        }
    }

    return (
        <div className="perfil">
            <div>
                <a href="#">
                    <img src={imgPerfil} onClick={mudarImgPerfil} />
                </a>
            </div>
            <div className="texto">
                <a href={props.linkperfil}>
                    <h1>{userName}</h1>
                </a>
                <ion-icon name="pencil-outline" onClick={mudarUserName} ></ion-icon>
            </div>
        </div>
    );
}