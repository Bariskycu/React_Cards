
import './App.css';
import  Course  from './Course';
import bir from './img/1.jpg'
import iki from './img/2.jpg'
import uc from './img/3.jpg'
import dort from './img/4.jpg'
import bulma from '../node_modules/bulma/css/bulma.css'

function App() {
  return (
    <div className="App">

<section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Link hero
    </p>
  </div>
</section>

      <div className='container'>
        <section className='section'> 
    <div className='columns'>
          <div className='column'>
            <Course image={bir} title="Angular" description=" long established fact that a reader will 
      be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as" />
          </div>
          <div className='column'>
          <Course image={iki} title="Bootstrap 5" description=" long established fact that a reader will 
      be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as" />
          </div>
          <div className='column'>
          <Course image={uc} title="Komple" description=" long established fact that a reader will 
      be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as" />
          </div>
          <div className='column'>
          <Course image={dort} title="Frontend" description=" long established fact that a reader will 
      be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as" />
          </div>
        </div>
        </section>
      </div>

      
      
      
      
    </div>
  );
}

export default App;
