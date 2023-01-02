import React, { useState, useEffect } from 'react';
import './PublisherDashboard.css';
import ExpertLists from './ExpertLists';
import JobLists from './JobLists';
import {images} from '../../../../constants'

const PublisherDashboard = () => {

  const [jobTab, setJobTab] = useState(true);


  const jobs = [
    { 
      status : "In Progress",
      job : "In Progress Job",
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      deadline : "10/10/22"
    },
    { 
      status : "Needs Review",
      job : "Job Name",
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      deadline : "10/8/22"
    },
    { 
      status : "Needs Review",
      job : "Job Name",
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      deadline : "10/8/22"
    },
    { 
      status : "Needs Review",
      job : "Job Name",
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      deadline : "10/8/22"
    },
    {
      status : "Needs Review",
      job : "Job Name",
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      deadline : "10/8/22"
    }    
  ]

  const experts = [
    { 
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      price : 175,
      jobs: 5
    },
    { 
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      price : 175,
      jobs: 5
    },
    { 
      expert : "John Doe",
      desc: "M.S. Nutritional Science",
      price : 175,
      jobs: 5
    }     
  ]

  return (
    <div className="publisherdashboard__container">

      <p className="heading-4 publisherdashboard__home">Home</p>
      <div className="publisherdashboard__main">
        <div className="publisherdashboard__sidebar">
          <ul>
            <li className="publisherdashboard__tab">
              <button onClick={() => setJobTab(true)} className="publisherdashboard__tabbutton">
                <span className={jobTab && "publisherdashboard__tabbutton__job"}>My Jobs</span>
              </button>
            </li>
            <li className="publisherdashboard__tab">
              <button onClick={() => setJobTab(false)} className="publisherdashboard__tabbutton">
                <span className={!jobTab && "publisherdashboard__tabbutton__expert"}>My Experts</span>
              </button>
            </li>
         </ul>
        </div>

        {jobTab &&
          <JobLists jobs={jobs}/>
        }

        {!jobTab &&
          <ExpertLists experts={experts} />
        }

      </div>
    </div>
  )
}

export default PublisherDashboard