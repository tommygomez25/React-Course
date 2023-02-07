import 'bulma/css/bulma.css';
//import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books,setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {return book.id !== id;});

    setBooks(updatedBooks);
  }

  const editBookById = (id,title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {return {...book,title:title}}
      return book;
    });

    setBooks(updatedBooks);
  }
  const createBook = (title) => {
    console.log(title);
    // REACT assume que se um array antigo e um novo estão a apontar
    // para a mesma posição de memória então não é preciso dar rerender
    // POR ISSO, não se pode dar simplesmente books.push()... 
    const updatedBooks = [...books,{id:Math.round(Math.random() * 9999), title:title}];
    
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books = {books} onDelete = {deleteBookById} onEdit = {editBookById} />
      <BookCreate onCreate = {createBook} />
    </div>
  )
}

export default App;