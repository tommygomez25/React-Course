import { useState } from "react";
import './SearchBar.css';

function SearchBar({onSearchImages}) {

    const [term,setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearchImages(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
        // console.log(event.target.value)
        // se quisesse só numeros no input -> setTerm(event.target.value.replace(/[a-z]/,''))
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value = {term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar;