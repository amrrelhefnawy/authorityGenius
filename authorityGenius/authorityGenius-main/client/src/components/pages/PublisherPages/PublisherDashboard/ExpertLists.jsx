import React from 'react';
import './PublisherDashboard.css'
import {images} from '../../../../constants'


const ExpertLists = (props) => {

    const experts = props.experts;

    return (
        <>
            <div className="publisherdashboard__list">
                <p className="publisherdashboard__list-title">Your Experts</p>
  

                <div className="publisherdashboard__expertlists">
                {experts.map(expert => { 
                    console.log(expert);
                    return (
                        <div className="publisherdashboard__expertcard">
                            <div className="publisherdashboard__expertcard__sectionone">
                                <img className="publisherdashboard__expertcard__images" src={images.headshot1} />
                                <div>
                                    <p className="publisherdashboard__expertcard__name"> Johnathan Doer </p>
                                    <p className="publisherdashboard__expertcard__desc"> M.S. Nutritional Science</p>
                                </div>
                                <h5 className="publisherdashboard__expertcard__price">$175 / <span class="publisherdashboard__expertcard__article">Article</span></h5>
                                <hr className="publisherdashboard__expertcard__line" />
                            </div>
                            <p className="publisherdashboard__expertcard__rating">Your rating: Stars</p>
                            <p className="publisherdashboard__expertcard__jobs">Number of jobs:<span className="publisherdashboard__expertcard__number">5</span></p>
                            <button className="publisherdashboard__expertcard__button">Hire Again</button>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default ExpertLists