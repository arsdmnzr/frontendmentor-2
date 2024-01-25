import './App.css';
import arsd from './arsd.svg'
import user from './user.webp'
function App() {
  return (
    <div className="App">

      <main className='container'>
        <div className='box'>
          <img src={arsd} alt='hi' />
          <span>Learning</span>
          <p id='publish'>Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p id='para'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <span id='user'><img src={user} alt='user'/></span>
          <span className='greg'>Greg Hooper</span>
        </div>
      </main>
    </div>
  );
}

export default App;
