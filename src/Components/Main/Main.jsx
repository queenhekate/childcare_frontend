import "./Main.css";
import { Carousel } from "../Carousel/Carousel";
import { slides } from "../../data/carouselData.json";

function Main() {
    return (
        <main>
            <Carousel data={slides} />
        <section className="main">
            <h1 className="main__header">Welcome!</h1>
        <p className="main__welcome">We are so happy you found us! 
        At Child of Nature Daycare, we provide a loving and nurturing 
        environment where your little ones can thrive. Our home daycare 
        is designed to feel just like family — with personalized care, 
        fun activities, and a focus on each child's growth and 
        development. Every day is an adventure filled with learning, 
        laughter, and lots of cuddles. Whether it's exploring creativity, 
        learning new skills, or simply making new friends, we're here to 
        ensure your child feels safe, happy, and loved. Thank you for 
        trusting us with your most precious gift. We can't wait to be a 
        part of your family's journey!</p>
        </section>
        </main>
    )
}

export default Main;