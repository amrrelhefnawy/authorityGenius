import React , {useState} from 'react';
import './PublisherDashboard.css'
import {images} from '../../../../constants'


const JobLists = (props) => {

    const jobs = props.jobs;

    const empty = true;

    return (
      <>
        <div className="publisherdashboard__list">
          <p className="publisherdashboard__list-title">Your Jobs</p>
          {empty &&
          <>
            <div className="publisherdashboard__empty-notification">
              <p>Welcome to <span style={{fontWeight: "700"}}>Authority Genius! </span> Here is where you’ll find your open, in <br />
              progress, and completed jobs. Find your first expert below to get started!</p>
            </div>
            <div className="publisherdashboard__findexpertsbox">
              <p>I am looking for a Nutritionist to <br/> Review Content</p>
              <button className="publisherdashboard__findexpertsbutton">Find experts</button>
            </div>
          </>
          }
          {!empty &&
          <>
            <div className="publisherdashboard__headers">
              <p className="publisherdashboard__header publisherdashboard__header__status ">Status</p>
              <p className="publisherdashboard__header publisherdashboard__header__job">Job</p>
              <p className="publisherdashboard__header publisherdashboard__header__expert">Expert</p>
              <p className="publisherdashboard__header publisherdashboard__header__deadline">Deadline</p>
            </div>

            <div className="publisherdashboard__mainlists">
            {jobs.map(job => { 
              var statusCss = (job.status).replace(/\s/g, '').toLowerCase();
              return (
            <div className="publisherdashboard__lists">
                  <div className="publisherdashboard__listborders publisherdashboard__listborders__status">
                    <p className={"publisherdashboard__status publisherdashboard__status__" + statusCss }>{job.status}</p>
                  </div>
                  <div className="publisherdashboard__listborders publisherdashboard__listborders__job">
                    <p className="publisherdashboard__job body-regular ">{job.job}</p>
                  </div>
                  <div className="publisherdashboard__listborders publisherdashboard__listborders__expert">
                    <img className="publisherdashboard__expert__img" src={images.headshot1}/>
                    <p className="publisherdashboard__expert"> {job.expert} </p>
                    <p className="publisherdashboard__expert__desc"> {job.desc}</p>
                    </div>
                  <div className="publisherdashboard__listborders publisherdashboard__listborders__deadline">
                    <p className="publisherdashboard__deadline">{job.deadline}</p>
                  </div>
                  <div className="publisherdashboard__listborders publisherdashboard__listborders__detailbutton">
                    <button className="publisherdashboard__detailbutton">View Details</button>
                  </div>   
            </div> 
            )})
            }
            </div>
          </>
      }
        </div>

      </>
    )
}

export default JobLists