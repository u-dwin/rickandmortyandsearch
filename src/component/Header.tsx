import {Link, useNavigate} from "react-router-dom";
export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/characters"}>Characters</Link></li>
                </ul>
            </nav>
        </header>
    );
}