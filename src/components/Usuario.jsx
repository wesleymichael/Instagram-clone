import { IoPencilOutline } from "react-icons/io5";

export default function Usuario(props){
    return (
        <div class="perfil">
            <div>
                <a href={props.linkperfil}>
                    <img src={props.img} />
                </a>
            </div>
            <div class="texto">
                <a href={props.linkperfil}>
                    <h1>{props.username}</h1>
                </a>
                <IoPencilOutline />
            </div>
        </div>
    );
}