import { IoChevronForwardCircle } from "react-icons/io5";


export default function Stories(){
    
    const stories = [
        {nome: 'lotr', src:'assets/stories/LOTR.jpg'},
        {nome: 'coda', src:'assets/stories/CODA.jfif'},
        {nome: 'avengers', src: 'assets/stories/avengers.jpg'},
        {nome: 'interestelar', src: 'assets/stories/interestelar.jpg'},
        {nome: 'yourname', src: 'assets/stories/your-name.jfif'},
        {nome: 'conjuring', src: 'assets/stories/the-conjuring.jpg'},
        {nome: 'schindler', src: 'assets/stories/schindlers-list.jfif'},
        {nome: 'inocentes', src: 'assets/stories/o-silencio-dos-inocentes.jpg'},
        {nome: 'prejudice', src: 'assets/stories/pride-and-prejudice.jpg'},
    ];

    return (
        <div className="stories">
            <IoChevronForwardCircle className="icons" />
            {stories.map( (story) => (
                <a href="">
                    <div className="background-stories">
                        <img src={story.src} alt={story.nome}/>
                    </div>
                    <h2>{story.nome}</h2>
                </a>
            ))}
        </div>
    );
}

