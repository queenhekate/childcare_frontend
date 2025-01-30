import React from 'react';
import "./Main.css";
import Carousel from "../Carousel/Carousel";
import welcomeImage from "../../assets/welcome.jpg";
import bookingImage from "../../assets/booking.jpg"
import dividerImage from "../../assets/divider.png"

function Main() {
      const animateButton = (e) => {
        e.preventDefault();
        const button = e.target;
        button.classList.remove('animate');
        button.classList.add('animate');
        setTimeout(() => {
          button.classList.remove('animate');
        }, 700);
      };

    return (
        <main>
            <Carousel/>
        <section className="main">
            <div className="main__text">
        <h1 className="main__header">Welcome!</h1>
        <p className="main__welcome">We are so happy you found us! 
        At Child of Nature Daycare, we provide a loving and nurturing 
        environment where your little ones can thrive. Our home daycare 
        is designed to feel just like family — with personalized care, 
        fun activities, and a focus on each child's growth and 
        development. 
        
        Every day is an adventure filled with learning, 
        laughter, and lots of cuddles. Whether it's exploring creativity, 
        learning new skills, or simply making new friends, we're here to 
        ensure your child feels safe, happy, and loved. Thank you for 
        trusting us with your most precious gift. We can't wait to be a 
        part of your family's journey!</p>
        </div>
        <img src={welcomeImage} alt="Baby and Caregiver" className="main__image-welcome" />
    </section>
    <section>
        <div className="main__booking-container">
             <img src={bookingImage} alt="Schedule a Tour" className="main__booking-image" />
       <div className="main__booking-wrap">
        <div className="main__booking-text">
        <h2 className="main__booking-heading">Take the Next Step</h2>
        <p>Schedule a meeting with us to get a tour of our daycare. 
        See our classrooms, ask questions about tuition, openings 
        and our enrollment process. Find out how we’ll help your 
        family thrive!</p>
        </div>
        <button
        className="main__booking-btn bubbly-button" // Add bubbly-button class for animation
        onClick={animateButton} // Bind animateButton on click
      >
        Schedule a Visit
      </button>
      </div> 
      </div>
      </section>
        </main>
    )
}

export default Main;