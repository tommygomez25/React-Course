import { useState } from "react";

function BookCreate ({onCreate}) {
    const [title,setTilte] = useState('');

    const handleChange = (event) => {
        setTilte(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTilte('');
    }
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className = "input" value = {title} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    );
}
export default BookCreate;