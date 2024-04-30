import "./Testimonials.css";
import testimonials1 from "../../images/testimonials-1.jpg";
import testimonials2 from "../../images/testimonials-2.jpg";
import testimonials3 from "../../images/testimonials-3.jpg";

function TestimonialsDetail(props) {
    return (
      <>
        <div className="TestimonialsDetail">
          <div className="Testimonials-image">
            <div className="image">
              <img src={props.image} alt="Testimonials-image" />
            </div>
            <div className="heading">
              <h1>{props.headings}</h1>
              <p>{props.paragraph}</p>
            </div>
          </div>
        </div>
      </>
    );
}

function Testimonials() {
  const TestimonialsData = [
    {
      image: testimonials1,
      headings: "Margaret E.",
      paragraph: "This is fantastic! Thanks so much guys!",
    },
    {
      image: testimonials2,
      headings: "Fred S.",
      paragraph:
        "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      image: testimonials3,
      headings: "Sarah W.",
      paragraph:
        "Thanks so much for making these free resources available to us!",
    },
  ];
  return (
    <>
      <div className="TestHeading">
        <h1>What people are saying...</h1>
      </div>
      <div className="Testimonials-container">
        {TestimonialsData.map((data, index) => (
          <TestimonialsDetail key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default Testimonials;
