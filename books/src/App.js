import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge';
import books from '../src/fanta.json'
import BookList from './components/BookList'

function App() {
  return (
    <div className="App">
      <WarningSign text='Warning' />
      <MyBadge text = 'Hey!' color='info'/>
      <BookList books={books} />
    </div>
  );
}

export default App;
