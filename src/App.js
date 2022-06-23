import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Meme from './components/Meme/Meme';

export default function App () {
  return (
    <div className="App">
      <Header />
      <Form />
      <Meme />
    </div>
  );
}
