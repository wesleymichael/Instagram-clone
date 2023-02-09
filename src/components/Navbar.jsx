import {FaInstagram, FaRegCompass } from "react-icons/fa";
import { IoHeartOutline, IoPaperPlaneOutline, IoPersonOutline } from "react-icons/io5";

export default function Navbar(){
    return (
    <div class="cabecalho">
        <div class="topo">
            <div class="topo-esquerdo">
                <a href="index.html">
                    <FaInstagram className="icons"/>
                    <img src="assets/logo.png" />
                </a>
            </div>
            <div>
                <input autocapitalize="none" placeholder="Pesquisar" type="text" value="" />
            </div>
            <div class="topo-direito">
                <IoPaperPlaneOutline className="icons"/>
                <FaRegCompass className="icons"/>
                <IoHeartOutline className="icons"/>
                <IoPersonOutline className="icons"/>
            </div>
        </div>
    </div>
    );
}