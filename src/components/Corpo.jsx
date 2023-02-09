import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Corpo(){
    return (
        <div className="conteudo">
            <div className="principal">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}