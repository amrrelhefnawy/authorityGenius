import React from 'react'

import { useState , useRef } from 'react'

import './Landing.css'
import {images} from '../../../../constants'

const Landing = () => {

    // const faq_page_ref = useRef(null);

    const [isActive1, setActive1] = useState("false");
    const [isActive2, setActive2] = useState("false");
    const [isActive3, setActive3] = useState("false");
    const [isActive4, setActive4] = useState("false");
    const [isActive5, setActive5] = useState("false");

    const faq_body_ref1 = useRef(null);    
    const faq_body_ref2 = useRef(null);    
    const faq_body_ref3 = useRef(null);    
    const faq_body_ref4 = useRef(null);    
    const faq_body_ref5 = useRef(null);    


    const handleClick1 = () => {
        setActive1(!isActive1);
        if(faq_body_ref1.current.style.display === "block") faq_body_ref1.current.style.display = "none";
        else{
            faq_body_ref1.current.style.display = "block";
        }
        
    }

    const handleClick2 = () => {
        setActive2(!isActive2);
        if(faq_body_ref2.current.style.display === "block") faq_body_ref2.current.style.display = "none";
        else{
            faq_body_ref2.current.style.display = "block";
        }
        
    }

    const handleClick3 = () => {
        setActive3(!isActive3);
        if(faq_body_ref3.current.style.display === "block") faq_body_ref3.current.style.display = "none";
        else{
            faq_body_ref3.current.style.display = "block";
        }
        
    }

    const handleClick4 = () => {
        setActive4(!isActive4);
        if(faq_body_ref4.current.style.display === "block") faq_body_ref4.current.style.display = "none";
        else{
            faq_body_ref4.current.style.display = "block";
        }
        
    }

    const handleClick5 = () => {
        setActive5(!isActive5);
        if(faq_body_ref5.current.style.display === "block") faq_body_ref5.current.style.display = "none";
        else{
            faq_body_ref5.current.style.display = "block";
        }
        
    }


    // var faq = document.getElementsByClassName("faq-page");
    // var i;
    // for (i = 0; i < faq.length; i++) {
    // faq[i].addEventListener("click", function () {
    //     /* Toggle between adding and removing the "active" class,
    //     to highlight the button that controls the panel */
    //     this.classList.toggle("active");
    //     /* Toggle between hiding and showing the active panel */
    //     var body = this.nextElementSibling;
    //     if (body.style.display === "block") {
    //         body.style.display = "none";
    //     } else {
    //         body.style.display = "block";
    //     }
    // });


  return (
    <div className="main_container">

        {/* <nav className="mobile-nav">
            <button className="hamburger">
                <div className="bar"></div>
            </button>
            <div className="linkHolder">
                <a href="#FAQs">FAQs</a>
                <a href="signup" id="mobilesignUp">SIGN UP</a>
            </div>
        </nav> */}
        

        <div id="mainHolder">
            <div className="infoHolderHolder">
                <div id="infoHolder">
                    <div id="infoHead">Build authority with the help of experts in your niche</div>
                    <div id="infoBody">We connect publishers and credentialed professionals to review content for accuracy and bolster trust.</div>
                    <div id="buttons">
                        <a href="/register">
                            <button id="getStartedButton">Get Started</button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="imgHolderHolder">
                <div id="imgHolder"></div>
            </div>
            
        </div>

        <div id="bodyHolder">
            <div id="h2-infoHolder">
                <div className="h2-titleHolder">
                    <img id="h2-img" src={images.publishers} alt=""/>
                    <div id="h2-title">For Publishers</div>
                </div>
                
                
                    <div className="h2-infoHeadHolder">
                        <div className="line1">
                            <div id="h2-infoHead1">Looking for a</div>

                            <div className="dynamictxtwrapper">
                                <ul id="dynamic-text">
                                    <li id="nutritionist">nutritionist</li>
                                    <li id="nurse">nurse</li>
                                    <li id="practitioner">practitioner</li>
                                    <li id="physician">physician</li>
                                    <li id="lawyer">lawyer</li>
                                    <li id="mechanic">mechanic</li>
                                    <li id="physical">physical therapist</li>
                                    <li id="cardiologist">cardiologist</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div id="h2-infoHead2">review your content?</div>
                    </div>
                    
                    <div className="h2Body">
                        <div className="h2-infoBodyHolder">
                            <div id="h2-infoBody">Hire licensed experts to review and validate your content, boost your site’s credibility, and improve conversion.</div>
                        </div>
                        <div className="publisherInfoHolder">
                            <div id="publisherInfo">
                                <ul>
                                    <div id="publisherInfoTitle">How it works for publishers:</div>
                                    <ul className="">
                                        <li>
                                            
                                            <p> Create an account and tell us about your site(s)</p>
                                        </li>
                                        <li>
                                            
                                            <p> your ideal reviewer's credentials &amp; browse profiles</p>
                                        </li>
                                        <li>

                                            <p> Hire experts to fact check and boost your authority</p>
                                        </li>
                                    </ul>
                                </ul>

                                <ul>
                                    <div id="publisherInfoTitle">Benifits for publishers:</div>
                                    <ul>
                                        <li>
                                            
                                            <p> Produce better content - Greater expertise is the key to more engaging content.</p>
                                        </li>
                                        <li>
                                            
                                            <p> Boost SEO rankings - Google loves author schema, especially in YMYL niches.</p>
                                        </li>
                                        <li>

                                            <p> Increase conversion - Readers trust credentialed experts more to take action.</p>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
  
                    
                    
            </div>

            

                

            <div id="h3-infoHolder">

                <div className="h3-titleHolder">
                    <img id="h2-img" src={images.experts} alt=""/>
                    <div id="h3-title">For Experts</div>
                </div>
            
                <div className="h3-infoHeadHolder">
                    <div id="h3-infoHead">
                        <div className="h2-infoHead1">Have an advanced degree or </div>
                        <div className="line2">
                            <div className="h2-infoHead2">professional license such as a</div>
                            
                            <div className="dynamictxtwrapper">
                                <ul id="dynamic-text2">
                                    <li id="PhD">PhD</li>
                                    <li id="MD">MD</li>
                                    <li id="CPA">CPA</li>
                                    <li id="JD">JD</li>
                                    <li id="RD">RD</li>
                                    <li id="CMT">CMT</li>
                                    <li id="RIA">RIA</li>
                                    <li id="NP">NP</li>
                                </ul>
                                <div className="h2-infoHead3">?</div>
                            </div>
                            
                        </div>

                        
                        
                    </div>
                    
                </div>
                  
                <div className="h3-infoBodyHolder">
                    <div id="h3-infoBody">Earn a high hourly wage and build your personal online brand by reviewing relevant articles on our platform.</div>
                </div>
                
                <div className="expertInfoHolder">
                    <div className="expertInfo">
                        <ul>
                            <div id="publisherInfoTitle">How it works for experts: </div>
                            <ul>
                                <li>
                                    
                                    <p> Create a profile showcasing your professional background</p>
                                </li>
                                <li>
                                    
                                    <p> Set your desired rate per article and work preferences</p>
                                </li>
                                <li>
                                    
                                    <p> Get matched with publishers looking for your expertise!</p>
                                </li>
                            </ul>
                            
                        </ul>
                        <ul>
                            <div id="publisherInfoTitle">Benefits for Experts: </div>
                            <ul>
                                <li>
                                    
                                    <p> Find flexible gig work editing content at your preferred rate</p>
                                </li>
                                <li>
                                    
                                    <p> Get author credit on reputable sites and build your personal brand</p>
                                </li>
                                <li>
                                    
                                    <p> No commitment - only take on clients that you want, when you want!</p>
                                </li>
                            </ul>
                            
                        </ul>
                    </div>
                </div>
                
               
            </div>
           
        </div>
        
        <div className="joinBtnHolder">
            <a href="/register">
                <button id="joinButton">Join Now!</button>
            </a>
        </div>

    <section id="testemonials">
        <div className = "testemonial-wrapper">
            <div className="testemonials_top">
                <h1>Client Testemonials</h1>
                <p>What they're saying about AuthorityGenius</p>
            </div>

            <div className="testemonial-container">
                <div className="testemonial_item">
                    <img src={images.headshot5} alt=""/>

                    <div className="testemonialItem_info">
                        <p>
                            “It feels great to finally put my degree to good use. While I have no desire to practice law everyday, it sucks to let those skills rust, so I’ve really liked how this platform has allowed me to lend my legal knowledge.“
                        </p>

                        <h2>Jerry Mapp, JD, Lubbock, TX</h2>

                        <div className="testimonialItem_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="testemonial_item">
                    <img src={images.headshot2} alt=""/>

                    <div className="testemonialItem_info">
                        <p>
                            “I love AuthorityGenius! It’s been a much welcomed source of income that’s not only flexible, but also surprisingly fun. I’ve enjoyed getting to flex my creative muscle 💪 and I hope to find even more sites through the platform to contribute to.” 
                        </p>

                        <h2>Annie Shin, CPA, Houston, TX</h2>

                        <div className="testimonialItem_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="testemonial_item">
                    <img src={images.headshot7} alt=""/>

                    <div className="testemonialItem_info">
                        <p>
                            “As a med school grad with thousands in student debt, I can’t tell you what a relief it was to find AuthorityGenius. It’s an amazing platform for me and other friends to make extra money. My eyes have really been opened!”
                        </p>

                        <h2>Liam Foley, MD, Baltimore, MD</h2>

                        <div className="testimonialItem_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

        <div className="faq-container">
            <div className="faq-header">
               
                <h1 id="FAQs">FAQs</h1>
            </div>

            <div className="faq-one">
                <h1 className={`faq-page ${isActive1 ? "" : "active"}`} onClick={() => handleClick1()}>Why hire an expert to review online content?</h1>
                <div className="faq-body" ref={faq_body_ref1}>
                    <p>
                        Online publishers seek credentialed experts to review their content for several key reasons. These often include a combination of:
                    </p>
                    <p>
                        - Fact Checking: ensuring factual accuracy and limiting the spread of #fakenews
                    </p>
                    <p>
                        - Engagement: making content more thorough, nuanced, and interesting to read
                    </p>
                    <p>
                        - Credibility: increasing reader conversion with more trustworthy authorship
                    </p>
                    <p>
                        - SEO: improving organic ranking on Google with author Schema 
                    </p>
                </div>
            </div>

            <hr className="hr-line"/>  
            <div className="faq-two">
            <h1 className={`faq-page ${isActive2 ? "" : "active"}`} onClick={() => handleClick2()}>How much do experts charge per article typically?</h1>
                <div className="faq-body" ref={faq_body_ref2}>
                    <p>
                        - Experts set their own rate per article. This creates a relatively wide range of pricing that depends on the location of the professional(s) you are seeking, their qualifications, and ultimately their work preferences. 
                    </p>
                    <p>
                        - For example, we’ve had a Harvard-educated doctor (MD) request $150 per article reviewed and a Certified Personal Trainer charge only $20. That said, the average rate across our platform hovers around $40/article.
                    </p>
                </div>
            </div>

            <hr className="hr-line"/>
            <div className="faq-three">
            <h1 className={`faq-page ${isActive3 ? "" : "active"}`} onClick={() => handleClick3()}>How do you make money?</h1>
                <div className="faq-body" ref={faq_body_ref3}>
                    <p>
                        - AuthorityGenius currently charges publishers $5 fee per article reviewed.
                    </p>
                    <p>
                        - Experts never pay to be on the platform. 
                    </p>
                    <p>
                        - Our fee is not deducted from, but rather tacked on to the per article fee that Experts earn.
                    </p>
                </div>
            </div>

            <hr className="hr-line"/>
            <div className="faq-four">
            <h1 className={`faq-page ${isActive4 ? "" : "active"}`} onClick={() => handleClick4()}>How long does it take to review an article?</h1>
                <div className="faq-body" ref={faq_body_ref4}>
                    <p>
                        - Longer articles generally take more time to review, and Experts reviewers work at different paces. That said, the typical turnaround time to review a single article is generally 2 business days.
                    </p>
                </div>
            </div>

            
            <hr className="hr-line"/>
            <div className="faq-five">
            <h1 className={`faq-page ${isActive5 ? "" : "active"}`} onClick={() => handleClick5()}>What kind of Experts are on AuthorityGenius?</h1>
                <div className="faq-body" ref={faq_body_ref5}>
                    <p>
                        - Our mission is to build a diverse network of professionals to help improve content quality  for as many publishers as possible. That means we accept all kinds of Experts into our community including a wide range of credentials, seniority, geography, and industry experience. Currently there isn’t a minimum level of qualifications to join, although we have primarily focused on recruiting the following kinds of professionals first:
                    </p>
                    <p>
                        - Medical (Physicians, specialist doctors, surgeons, nurse practitioners, dieticians / nutritionists, psychologists) 
                    </p>
                    <p>
                        That said, we are in the early days of scaling our network and thus iturrently our Expert database includes mostly the following
                    </p>
                </div>
            </div>
        </div>

    </div> 
  )
}

export default Landing