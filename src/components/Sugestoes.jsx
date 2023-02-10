

export default function Sugestoes(){
    const sugestoes = [
        {
            username:'leomessi',
            img: './assets/sugestoes/messi.jpg',
            linkperfil:'https://www.instagram.com/leomessi/',
        },
        {
            username:'charles_leclerc',
            img: './assets/sugestoes/charles.jfif',
            linkperfil:'https://www.instagram.com/charles_leclerc/',
        },
        {
            username:'jennaortega',
            img: './assets/sugestoes/wednesday.jfif',
            linkperfil:'https://www.instagram.com/jennaortega/',
        },
        {
            username:'k.mbappe',
            img: './assets/sugestoes/mbappe.jfif',
            linkperfil:'https://www.instagram.com/k.mbappe/',
        },
        {
            username:'emmawatson',
            img: './assets/sugestoes/watson.jpg',
            linkperfil:'https://www.instagram.com/emmawatson/',
        },
    ];

    return (
        <>
            <Topo />
            {sugestoes.map( (item) => (
                <div className="user">
                    <div className="perfis">
                        <div>
                            <a href={item.linkperfil}>
                                <img src={item.img} />
                            </a>
                        </div>
                        <div>
                            <a href={item.linkperfil}>
                                <h1>{item.username}</h1>
                            </a>
                            <h2>Segue você</h2>
                        </div>
                    </div>
                    <Seguir />
                </div>
            )  )}
        </>
    );
}


function Topo(){
    return (
        <div className="suggestions">
            <div>
                <h2>Sugestões para você</h2>
            </div>
            <div>
                <a href="">
                    <h2>Ver tudo</h2>
                </a>
            </div>
        </div>
    );
}

function Seguir(){
    return (
        <div className="perfis">
            <a href="">
                <h2>Seguir</h2>
            </a>
        </div>
    );
}