import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() { 
  return (    
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div class="input-block">
              <label htmlfor="github_username">Usuário do GitHub</label>
              <input name="github_username" id="github_username" required></input>
            </div>

            <div class="input-block">
              <label htmlfor="techs">Tecnologias</label>
              <input name="techs" id="techs" required></input>
            </div>

            <div className="input-group">
              <div class="input-block">
                <label htmlfor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required></input>
              </div>

              <div class="input-block">
                <label htmlfor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required></input>
              </div>

              <button type="submit">Salvar</button>

            </div>       
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
