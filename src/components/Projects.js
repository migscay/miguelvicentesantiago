import React from 'react'
import piano_player from './assets/Piano.gif';
import task_planner from './assets/Task.gif';
import weather_map from './assets/Weather.gif';
import bitcoin_ticker from './assets/bitcoin.gif';
import todolist from './assets/todolist.gif';
import noteTaking from './assets/noteTaking.gif';
import mvptalent from './assets/mvptalent.gif';
import mvpstore from './assets/mvpstore.gif';

const Projects = () => {
    let javascript = 'JavaScript';
    //let talentRatio = `JavaScript: 78.7% C#: 4.2% CSS: 16.9%  Other: 0.2%`
    return (
        <div className="projects">
            <div>
                <div className="projects__title">
                    <h1>Recent Projects</h1>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://mvptalentm.azurewebsites.net/Home" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://mvptalentm.azurewebsites.net/Home</h5>
                        </a>
                        <p className="card-text projects__card__text">Talent app connects job seekers and employers. It also provides the functions for both candidates and employers to manage the recruitment process.</p>
                        <img className="card__img" src={mvptalent} alt="MVP Talent"></img>
                        <hr/>
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">{javascript}: 78.7% C#: 4.2% CSS: 16.9%  Other: 0.2%</p>
                        </div>
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://mvpstore.azurewebsites.net" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://mvpstore.azurewesites.net</h5>
                        </a>
                        <p className="card-text projects__card__text">ASP.NET Core MVC app with React, and database on Microsoft SQL Server.</p>
                        <img className="card__img" src={mvpstore} alt="mvpstore"></img>
                        <hr/>
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">{javascript}: 60.8% C#: 35.8% HTML: 2.6% CSS: 0.8%</p>
                        </div>
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://bitcoin-ticker.vercel.app/" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://bitcoin-ticker.vercel.app/</h5>
                        </a>
                        <p className="card-text projects__card__text">Displays the current bitcoin prices from https://blockchain.info/ticker. (Refreshed every 30 seconds)</p>
                        <img className="card__img" src={bitcoin_ticker} alt="bitcoin_ticker"></img>
                        <hr/>
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">TypeScript: 57.4% HTML: 42.6%</p>
                        </div>
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://piano-player-git-main-migscay.vercel.app/" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://piano-player-git-main-migscay.vercel.app/</h5>
                        </a>
                        <p className="card-text projects__card__text">A project I did in the Codecademy JavaScript course. The only requirement was that the piano keys turn to blue on mousedown. I improved it by adding sound.</p>
                        <img className="card__img" src={piano_player} alt="piano-player"></img>
                        <hr/>
                        {(<div class="pb-3">Languages: 
                            <p className="badge badge-light">{javascript}: 54.3% HTML: 24.7% CSS: 21%</p>
                        </div>)}
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://task-planner-git-main.migscay.vercel.app/" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://task-planner-git-main.migscay.vercel.app/</h5>
                        </a>
                        <p className="card-text projects__card__text">A group project in the Generation Australia Bootcamp.</p>
                        <img className="card__img" src={task_planner} alt="task_planner"></img>
                        <hr/>
                        {(<div class="pb-3">Languages: 
                            <p className="badge badge-light">{javascript}: 57.2% HTML: 41.4%  CSS: 1.4%</p>
                        </div>)}
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://weather-map-zeta.vercel.app/" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://weather-map-zeta.vercel.app/</h5>
                        </a>
                        <p className="card-text projects__card__text">Search for a place and get the current weather.</p>
                        <img className="card__img" src={weather_map} alt="weather_map"></img>
                        <hr/>
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">{javascript}: 42.1% HTML: 57.9%</p>
                        </div>
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        <a href="https://my-things-todo-app.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://my-things-todo-app.herokuapp.com/</h5>
                        </a>
                        <p className="card-text projects__card__text">A To do list done with Laravel,PHP, MySQL and VUE.js</p>
                        <img className="card__img" src={todolist} alt="Todo List"></img>
                        <hr/>
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">PHP: 88.6% Vue: 5.6% Blade: 4.9% Shell: 0.9%</p>
                        </div>
                    </div>
                </div>
                <div className="projects__card card shadow-lg p-3 mb-5 bg-white rounded card">
                    <div className="card-body">
                        {/* <a href="https://my-things-todo-app.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h5 className="card-title">https://my-things-todo-app.herokuapp.com/</h5>
                        </a> */}
                        <p className="card-text projects__card__text">A note taking widows app done with C#</p>
                        <img className="card__img" src={noteTaking} alt="Todo List"></img>
                        <hr/>
                        {/* <div class="pb-3">Languages: 
                            <p className="badge badge-light">PHP: 88.6% Vue: 5.6% Blade: 4.9% Shell: 0.9%
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
