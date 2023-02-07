import axios from 'axios';
import 'bulma/css/bulma.css';
//import './App.css';
import { useState,useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books,setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  },[]); // o segundo argumento pode ser nada, [], [counter] 
        // no caso de nada -> a função é sempre chamada depois de um rerender
        // no caso de [] -> a função só é chamada no primeiro render
        // no caso de [counter] ->  a função é chamada depois de um rerender SÓ SE a variável counter mudar

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {return book.id !== id;});

    setBooks(updatedBooks);
  }

  const editBookById = async (id,title) => {
    
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title:title
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {return {...book,...response.data}}
      return book;
    });

    setBooks(updatedBooks);
  }

  const createBook = async (title) => {
    // REACT assume que se um array antigo e um novo estão a apontar
    // para a mesma posição de memória então não é preciso dar rerender
    // POR ISSO, não se pode dar simplesmente books.push()... 

    const response = await axios.post('http://localhost:3001/books', {
      title:title
    });

    const updatedBooks = [...books,response.data];
    
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