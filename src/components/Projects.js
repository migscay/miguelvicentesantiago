import React from 'react'
import piano_player from './assets/Piano.gif';
import task_planner from './assets/Task.gif';
import weather_map from './assets/Weather.gif';
import bitcoin_ticker from './assets/bitcoin.gif';

const Projects = () => {
    return (
        <div className="projects">
            <div>
                <div className="projects__title">
                    <h1>Recent Projects</h1>
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
                            <p className="badge badge-light">TypeScript: 57.4 % HTML: 42.6 %</p>
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
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">JavaScript: 54.3 % HTML: 24.7 % CSS: 21 %
                            </p>
                        </div>
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
                        <div class="pb-3">Languages: 
                            <p className="badge badge-light">JavaScript: 57.2 % HTML: 41.4 % CSS: 1.4 %
                            </p>
                        </div>
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
                            <p className="badge badge-light">HTML: 57.9 % JavaScript: 42.1 %
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
