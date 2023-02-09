import { FaInstagram } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function Navbarmobile(){
    return (
    <div class="cabecalho-mobile">
        <a href="index.html">
            <FaInstagram className="icons"/>
        </a>
        <img src="assets/logo.png" width="103px" height="29px" />
        <IoPaperPlaneOutline className="icons"/>
    </div>
    );
}