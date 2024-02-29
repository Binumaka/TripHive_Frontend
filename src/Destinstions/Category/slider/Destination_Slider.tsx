import React from 'react';
import { Link } from 'react-router-dom';
import CulturalHeritage from '../images/CulturalHeritage.jpg';
import FestivalsAndEvents from '../images/FestivalsAndEvents.jpg';
import HillStation from '../images/HillStation.jpg';
import Wildlife from '../images/wildlife.jpg';
import LakeRivers from '../images/LakeRivers.jpg';
import NationalParks from '../images/NationalParks.jpg';
import TempleAndMonastries from '../images/TempleAndMonastries.jpg';
import HistoricalSites from '../images/HistoricalSites.jpg';
import Adventure from '../images/Adventure.jpg';
import Himalayan from '../images/Himalayan.jpg';


import "./Destination_Slider.css";

const Destination_Slider: React.FC = () => {
    return (
        <>
            <div className="slider-container">
                <div className="slider">
                <div className="slide">
                    <div className="category">
                        <Link to="/category/HimalayanTreks">
                            <img src={Himalayan} alt="Himalayan"/>
                            <div className="info_wrapper">
                                <h3>Himalayan Treks</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/CulturalHeritage">
                            <img src={CulturalHeritage} alt="Cultural"/>
                            <div className="info_wrapper">
                                <h3>Cultural Heritage</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/HillStation">
                            <img src={HillStation} alt="HillStation"/>
                            <div className="info_wrapper">
                                <h3>Hill Station</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/WildLife">
                            <img src={Wildlife} alt="WildLife"/>
                            <div className="info_wrapper">
                                <h3>Wild Life</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/Fiction">
                            <img src={FestivalsAndEvents} alt="FestivalsAndEvents"/>
                            <div className="info_wrapper">
                                <h3>Festivals And Events</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/LakeRivers">
                            <img src={LakeRivers} alt="LakeRivers"/>
                            <div className="info_wrapper">
                                <h3>
                                    Lake and Rivers
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/NationalParks">
                            <img src={NationalParks} alt="NationalParks"/>
                            <div className="info_wrapper">
                                <h3>National Parks</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/HistoricalSites">
                            <img src={HistoricalSites} alt="HistoricalSites"/>
                            <div className="info_wrapper">
                                <h3>Historical Sites</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/Adventure">
                            <img src={Adventure} alt="Adventure"/>
                            <div className="info_wrapper">
                                <h3>Adventure</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slide">
                    <div className="category">
                        <Link to="/category/TempleAndMonastries">
                            <img src={TempleAndMonastries} alt="TempleAndMonastries"/>
                            <div className="info_wrapper">
                                <h3>Temple And Monastries</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Destination_Slider;
