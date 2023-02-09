import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar(){
    
    return (
        <div className="sidebar">
            <Usuario 
                username='wesleymichaelps' 
                img='assets/perfil.jpeg' 
                linkperfil='https://www.instagram.com/wesleymichaelps/'
            />
            <Sugestoes />
            <Rodape />
        </div>

    );
}

const usuario = {
    username: 'wesleymichaelps',
    img: 'assets/perfil.jpeg',
    linkperfil: 'https://www.instagram.com/wesleymichaelps/',
};

function Rodape(){
    return (
        <div class="lateral-base">
            <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <br />
            <p>&copy; 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}
