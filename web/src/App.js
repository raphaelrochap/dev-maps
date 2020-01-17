import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);


        console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);
  
  return (    
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do GitHub</label>
              <input name="github_username" id="github_username" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required></input>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required value={latitude}></input>
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required value={longitude}></input>
              </div>              
            </div>
            <button type="submit">Salvar</button>       
          </form>
      </aside>
      <main>
      <ul>
        <li className="dev-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/21209032?s=400&v=4" alt="Raphael"/>
          <div className="user-info">
            <strong>Raphael da Rocha Pinto Barboza</strong>
            <span>Delphizin, Flutter, React</span>
          </div>
        </header>
        <p>Desenvolvedor Delphizão</p>
        <a href="https:git">Acessar Repositório</a>
        </li>

        <li className="dev-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/21209032?s=400&v=4" alt="Raphael"/>
          <div className="user-info">
            <strong>Raphael da Rocha Pinto Barboza</strong>
            <span>Delphizin, Flutter, React</span>
          </div>        
        </header>
        <p>Desenvolvedor Delphizão e outras coisas</p>
        <a href="https:git">Acessar Repositório</a>
        </li>
        <li className="dev-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/21209032?s=400&v=4" alt="Raphael"/>
          <div className="user-info">
            <strong>Raphael da Rocha Pinto Barboza</strong>
            <span>Delphizin, Flutter, React</span>
          </div>
        </header>
        <p>Desenvolvedor Delphizão</p>
        <a href="https:git">Acessar Repositório</a>
        </li>

        <li className="dev-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/21209032?s=400&v=4" alt="Raphael"/>
          <div className="user-info">
            <strong>Raphael da Rocha Pinto Barboza</strong>
            <span>Delphizin, Flutter, React</span>
          </div>        
        </header>
        <p>Desenvolvedor Delphizão</p>
        <a href="https:git">Acessar Repositório</a>
        </li>


      </ul>
      </main>
    </div>  
  );


}

export default App;
