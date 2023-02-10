import { useState } from "react";

export default function Post(props){
    const p = JSON.parse(props.post);
    const [iconSalvar, setIconSalvar] = useState('bookmark-outline');
    const [iconlike, setIconlike] = useState('heart-outline');
    const [classesLike, setClassesLike] = useState("");
    const [quantLikes, setQuantLikes] = useState(Number(p.likes.quant));

    function salvar(){
        (iconSalvar === 'bookmark-outline') ? setIconSalvar('bookmark') : setIconSalvar('bookmark-outline');
    }
    
    function like(){
        //(iconlike === 'heart-outline') ? setIconlike('heart') : setIconlike('heart-outline');
        if(iconlike === 'heart-outline'){
            setIconlike('heart');
            setClassesLike("red");
            setQuantLikes(quantLikes + 1);

        } else {
            setIconlike('heart-outline');
            setClassesLike("");
            setQuantLikes(quantLikes - 1);
        }
    }

    function likeDoubleClick(){
        if(iconlike === 'heart-outline'){
            setIconlike('heart');
            setClassesLike("red");
            setQuantLikes(quantLikes + 1);
        }
    }
    return (
        <div className="post" data-test="post">
            <div className="user">
                <a href={p.linkperfil}>
                    <img src={p.user} alt={p.nome}/>
                    <h1>{p.nome}</h1>
                </a>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div>
                <img src={p.postagem} onDoubleClick={likeDoubleClick} data-test="post-image" />
            </div>
            <div>
                <div>
                    <ion-icon name={iconlike} class={classesLike} onClick={like} data-test="like-post"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name={iconSalvar} class="icons" onClick={salvar} data-test="save-post"></ion-icon>
            </div>
            <div>
                <div>
                    <img src={p.likes.user} alt={p.likes.nome} />
                    <p>
                        Curtido por <span>{p.likes.nome}</span> e
                        <span> outras <span data-test="likes-number">{quantLikes.toLocaleString('pt-BR')}</span> pessoas</span>
                    </p>
                </div>
            </div>
        </div>
    )
}