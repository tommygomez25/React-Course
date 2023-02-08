
import 'bulma/css/bulma.css';
//import './App.css';
import { useEffect,useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {

  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  },[]); // o segundo argumento pode ser nada, [], [counter] 
        // no caso de nada -> a função é sempre chamada depois de um rerender
        // no caso de [] -> a função só é chamada no primeiro render
        // no caso de [counter] ->  a função é chamada depois de um rerender SÓ SE a variável counter mudar



  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList  />
      <BookCreate />
    </div>
  )
}

export default App;