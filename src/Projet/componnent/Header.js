import logoimg from "../assets/images/logo.png";
import Footer from "./Footer";
import Bodylistanime from "./Bodylistanime"
import { useState } from "react";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <nav className='nav-list'>
                <img alt="logo" src={logoimg} className='logo' />
                <input
                    type='text'
                    placeholder='search'
                    className='input'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </nav>
            <Bodylistanime searchTerm={searchTerm}/>
            <Footer/>
        </div>
    );
}
