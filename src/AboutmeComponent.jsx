import React from "react";
import project_1 from "./project_1.png";
import project_2 from "./project_2.png";
import contact from "./contact.png";

export default function AboutmeComponent() {
  return (
    <>
      <header className="header">
        <h1 className="container__name">Patricia Páez Cárdenas</h1>
        <p className="container__subtitle">Frontend Developer</p>
        <img className="container__contact-icon" src={contact}></img>
        <p className="container__contact-info">
          +57 3202397289 | patriciapaezcardenas@gmail.com |
          https://www.linkedin.com/in/patriciapaezc/
        </p>
        <p className="container__text">
          Desarrolladora web con experiencia en desarrollo backend con C# y en
          proceso de especialización en desarrollo frontend con JavaScript,
          HTML, CSS y React. Me enfoco en construir soluciones que reflejen
          correctamente la lógica del negocio, priorizando la calidad del
          código, las buenas prácticas y una experiencia de usuario clara y
          funcional.
        </p>
      </header>
      <main className="main">
        <section className="portfolio">
          <h2>Portfolio</h2>

          <div className="project">
            <div className="projects__main">
              <h3 className="project__title">
                Web Project Around Es (Bootcamp Project)
              </h3>
              <p className="project__description">
                Places around the world on which I have traveled for.
              </p>

              <img
                className="project__img"
                src={project_1}
                alt="Imagen proyecto"
              ></img>
            </div>

            <div className="projects__description">
              <div className="project__learnings">
                <p>Learnings:</p>
                <ul>
                  <li>Html markup</li>
                  <li>Javascript</li>
                  <li>Css styles</li>
                </ul>
              </div>
              <div className="project__link">
                <a
                  className="project__link-text"
                  href="https://github.com/patriciapaezcardenas/web_project_around_es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository➠
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="projects__main">
              <h3 className="project__title">
                Web Project Expenses (Bootcamp Project)
              </h3>
              <p className="project__description">
                Tracker of expenses and incomes.
              </p>

              <img
                className="project__img"
                src={project_2}
                alt="Imagen proyecto"
              ></img>
            </div>

            <div className="projects__description">
              <div className="project__learnings">
                <p>Learnings:</p>
                <ul>
                  <li>Html markup</li>
                  <li>Javascript</li>
                  <li>Css styles</li>
                </ul>
              </div>
              <div className="project__link">
                <a
                  className="project__link-text"
                  href="https://github.com/patriciapaezcardenas/web_project_around_es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository➠
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
