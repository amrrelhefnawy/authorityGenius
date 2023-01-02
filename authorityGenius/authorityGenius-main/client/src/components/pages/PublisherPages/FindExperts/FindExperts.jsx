
import React from 'react'
import images from '../../../../constants/images'

import './FindExperts.css'

const Card = () => {
  
  return (<div className="findexperts__card">
  <div className="findexperts__flexboxpicture">
    <img className="findexperts__picture" src={images.headshot8} />
  </div>

  <div className="findexperts__flexboxmain">
    <div className="findexperts__flexbox1">
      <h5 className="findexperts__name">John Doe</h5>
      <h5 className="findexperts__price">$175 / <span class="findexperts__article">Article</span></h5>
    </div>
      <h5 className="findexperts__expert">M.S. Nutritional Science</h5>
    <div className="findexperts__flexbox2">
      <div className="findexperts__stars">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <span class="fa fa-star findexperts__star"></span>
        <span class="fa fa-star findexperts__star"></span>
        <span class="fa fa-star findexperts__star"></span>
        <span class="fa fa-star findexperts__star"></span>
        <span class="fa fa-star-half-full findexperts__star"></span>
        <span>(4.5/5)</span>
      </div>
      <button className="findexperts__button-viewprofile">View Profile</button>
    </div>
    </div>
</div>
  )
}

const FindExperts = () => {
  return (
    <>
      <div className="findexperts__filterheader">
        <p>I am looking for a <span className="findexperts__filter">Nutritionist</span> to <span className="findexperts__filter">Review Content, Fact Check</span>
           <button className="findexperts__button-filters"><img className="findexperts__button-filters-img" src={images.filter} /><span className="findexperts__button-filters-text">Filters</span></button>
        </p>
        <hr className="findexperts__filterheader-line" />
      </div>
        <div className="findexperts__flexboxheader">      
          <h5 className="findexperts__searchresults">Search results</h5>
          <p className="findexperts__sortby"> Sort by: <span class="findexperts__recomended">Recommended</span></p>
        </div>
        <Card />
    </>
  )
}

export default FindExperts