import "./ShowCase.css";
import showcase1 from "../../images/bg-showcase-1.jpg"
import showcase2 from "../../images/bg-showcase-2.jpg"
import showcase3 from "../../images/bg-showcase-3.jpg"

function ShowCaseDetail(props) {
  const containerClassName = ` ${
    props.imageSide === "Left" ? "ShowCase-image" : "ShowCase-images"
  }`;
  return (
    <div className={containerClassName}>
      <div className="image">
        <img src={props.image} alt="ShowCase-image" />
      </div>
      <div className="heading">
        <h1>{props.headings}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

function ShowCase() {
  const ShowCaseData = [
    {
      image: showcase1,
      imageSide: "Right",
      headings: "Fully Responsive Design",
      paragraph:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      image: showcase2,
      imageSide: "Left",
      headings: "Updated For Bootstrap 5",
      paragraph:
        "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
      image: showcase3,
      imageSide: "Right",
      headings: "Easy to Use & Customize",
      paragraph:
        "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
  ];
  return (
    <div className="ShowCase-container">
      {ShowCaseData.map((data, index) => (
        <ShowCaseDetail key={index} {...data} />
      ))}
    </div>
  );
}

export default ShowCase;
