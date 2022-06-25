import React from "react";
import guy from "../images/guy_pc.png"

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                    <div className="col-md-6">
                        <img src={guy} className="w-75 mt-5" alt="pc"/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sapiente accusantium ad autem, eligendi culpa itaque ex ipsa commodi hic voluptatum architecto iste ea quibusdam fugit. Autem facilis praesentium iure!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sapiente accusantium ad autem, eligendi culpa itaque ex ipsa commodi hic voluptatum architecto iste ea quibusdam fugit. Autem facilis praesentium iure!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sapiente accusantium ad autem, eligendi culpa itaque ex ipsa commodi hic voluptatum architecto iste ea quibusdam fugit. Autem facilis praesentium iure!
                        </p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">
                            Get Started
                        </button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                            Contact Us
                        </button>
                    </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default About;