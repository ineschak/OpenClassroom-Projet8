import picture1 from "../../assets/picture1.png";
import "./accueil.css";
import Card from "../../components/Card/Card.jsx";

function Accueil() {
  return (
    <>
      <section className="banner">
        <img className="picture1" src={picture1} alt="" />
        <h1> Chez vous, partout et ailleurs</h1>
      </section>
      <section className="gallery">
        {" "}
        <Card />{" "}
      </section>
    </>
  );
}

export default Accueil;