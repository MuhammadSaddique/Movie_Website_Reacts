import Header from './Compontent/Header';
import Movie from './Compontent/Movie';
import movie from './movie.json'

import './App.css'

function App() {


  return (
    <div className='app'>
      <Header />
      <div className='main'>
        {
          movie.map((element, index) => {
            return (
              <Movie
                key={index}
                title={element.Title}
                Year={element.Year}
                img={element.Poster}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
