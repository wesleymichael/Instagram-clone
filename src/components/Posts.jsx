import { FaEllipsisH } from "react-icons/fa";
import { IoBookmarkOutline, IoChatbubbleOutline, IoHeartOutline, IoPaperPlaneOutline } from "react-icons/io5";


export default function Posts(){
    const post = [
        {
            nome: 'leomessi',
            user: './assets/sugestoes/messi.jpg',
            linkperfil: 'https://www.instagram.com/leomessi/',  
            postagem: './assets/post1.png',
            likes:{
                nome: 'mbappe',
                user: './assets/sugestoes/mbappe.jfif',
                quant: '71.250.789',
            }
        },
        {
            nome: 'hogwartslegacy',
            user: './assets/post2.jpg',
            linkperfil: 'https://www.instagram.com/hogwartslegacy/',  
            postagem: './assets/post2.jpg',
            likes:{
                nome: 'watson',
                user: './assets/sugestoes/watson.jpg',
                quant: '1.250.789',
            }
        },
        {
            nome: 'dev.depressão',
            user: './assets/post3.jpeg',
            linkperfil: '#',  
            postagem: './assets/post3.jpeg',
            likes:{
                nome: 'driven',
                user: './assets/stories/driven.png',
                quant: '250.789',
            }
        },

    ];

    return (
        <div className="feed">
            {post.map( (p) => (
            <div className="post">
                <div class="user">
                    <a href={p.linkperfil}>
                        <img src={p.user} />
                        <h1>{p.nome}</h1>
                    </a>
                    <FaEllipsisH className="icons" />
                </div>
                <div>
                    <img src={p.postagem} />
                </div>
                <div>
                    <div>
                        <IoHeartOutline className="icons" />
                        <IoChatbubbleOutline className="icons" />
                        <IoPaperPlaneOutline className="icons" />
                    </div>
                    <IoBookmarkOutline className="icons" />
                </div>
                <div>
                    <div>
                        <img src={p.likes.user} alt={p.likes.nome} />
                        <p>
                            Curtido por <span>{p.likes.nome}</span> e
                            <span> outras {p.likes.quant} pessoas</span>
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>      
    )
}