import componentsImg from "./assets/components.png";
import "./index.css";
import { CORE_CONCEPTS } from "./data.js";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3> {title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Main() {
  return (
    <main>
      <section id="core-concepts">
        <h2> Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
    </main>
  );
}

export default Main;
