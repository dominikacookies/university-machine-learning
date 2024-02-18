import "./App.css";
import { ANN } from "./components/ANN.component";
import { Airbnb } from "./components/Airbnb.component";
import { BuildingCNN } from "./components/BuildingCNN.component";
import { CNN } from "./components/CNN.component";
import { CorrelationRegression } from "./components/CorrelationRegression.component";
import { GradientDescent } from "./components/GradientDescent.component";
import { Industry } from "./components/Industry.component";
import { LearningTypes } from "./components/LearningTypes.component";
import { Performance } from "./components/Performance.component";
import { Robowriters } from "./components/Robowriters";

function App() {
  return (
    <body>
      <div className="container">
        <section className="contents">
          <h2>Contents</h2>
          <a href="#about-me">👉🏼 About Me</a>
          <a href="#learning-types">👉🏼 ML Learning Types</a>
          <a href="#industry">👉🏼 AI and Industry 4.0</a>
          <a href="#correlation-regression">👉🏼 Correlation and Regression</a>
          <a href="#airbnb">👉🏼 Airbnb Report</a>
          <a href="#robowriters">👉🏼 AI Writers: Risks and Benefits</a>
          <a href="#ann">👉🏼 Introduction to ANNs</a>
          <a href="#gradient-descent">👉🏼 Gradient Descent</a>
          <a href="#cnn">👉🏼 Convolutional Neural Networks</a>
          <a href="#performance">👉🏼 Model Performance Measurement</a>
          <a href="#building-cnn">👉🏼 Building a CNN</a>
        </section>
        <section className="content-container">
          <article id="about-me">
            <img src="university-machine-learning/headshot.jpg" />
            <div>
              <h1>dominika pietrzak</h1>
              <p>
                Vibrant fullstack web engineer with a strong focus on product,
                performance and security. Passionate about AI and eager to
                contribute to its open source space. Enjoys working as part of
                highly performing teams with a strong culture and clear mission.
                Great communicator, passionate about her work and the people she
                works with.
              </p>
            </div>
          </article>
          <hr />
          <article id="learning-types">
            <h2>ML Learning Types</h2>
            <LearningTypes />
          </article>
          <hr />
          <article id="industry">
            <p className="subtitle">Collaborative discussion</p>
            <h2>AI and Industry 4.0</h2>
            <Industry />
          </article>
          <hr />
          <article id="correlation-regression">
            <h2>Correlation and Regression</h2>
            <CorrelationRegression />
          </article>
          <hr />
          <article id="airbnb">
            <p className="subtitle">Group project</p>
            <h2>Airbnb Data Analysis Report</h2>
            <Airbnb />
          </article>
          <hr />
          <article id="robowriters">
            <p className="subtitle">Collaborative discussion</p>
            <h2>AI Writers: Risks and Benefits</h2>
            <Robowriters />
          </article>
          <hr />
          <article id="ann">
            <h2>Introduction to ANNs</h2>
            <ANN />
          </article>
          <article id="gradient-descent">
            <h2>Gradient Descent</h2>
            <GradientDescent />
          </article>
          <article id="cnn">
            <h2>Convolutional Neural Networks</h2>
            <CNN />
          </article>
          <article id="performance">
            <h2>Model Performance Measurement</h2>
            <Performance />
          </article>
          <article id="building-cnn">
            <h2>Building a CNN</h2>
            <BuildingCNN />
          </article>
        </section>
      </div>
    </body>
  );
}

export default App;
