import { FaHome } from "react-icons/fa";
import { IoAddCircleOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";

export default function Rodape(){
    return (
        <div className="barra-inferior">
            <FaHome className="icons"/>
            <IoSearchOutline className="icons"/>
            <IoAddCircleOutline className="icons"/>
            <IoHeartOutline className="icons"/>
            <IoPersonOutline className="icons"/>
        </div>
    );
}