import "./App.css";
import { Dialogues } from "./components/IntelligentAgents/Dialogues.component";
import { Discussions } from "./components/IntelligentAgents/Discussions.component";
import { ParseTrees } from "./components/IntelligentAgents/ParseTrees.component";

function App() {
  return (
    <body>
      <div className="container">
        <section className="contents">
          <h2>Contents</h2>
          <a href="#about-me">👉🏼 About Me</a>
          <a href="#agent-dailogues">👉🏼 Creating Agent Dialogues </a>
          <a href="#parse-trees">👉🏼 Constituency-based Parse Trees</a>
          <a href="#artefacts">👉🏼 Vulnerability Scanner Work Flows</a>
          <a href="#discussions">👉🏼 Discussions</a>
        </section>
        <section className="content-container">
          <article id="about-me">
            <img src="./headshot.jpg" />
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
          <article id="agent-dailogues">
            <h2>Creating Agent Dialogues</h2>
            <Dialogues />
          </article>
          <article id="parse-trees">
            <h2>Constituency-based Parse Trees</h2>
            <ParseTrees />
          </article>
          <article id="artefacts">
            <h2>ulnerability Scanner Work Flows</h2>
            <p>
              Below are the workflows I have created to represent the logic of
              the vulnerability scanner.
            </p>
            <h4>OVERVIEW WORKFLOW</h4>
            <img src="./artefacts/overview.png" />
            <h4>DETAILED WORKFLOW</h4>
            <img src="./artefacts/detail.png" />
          </article>
          <article id="discussions">
            <h2>Discussions</h2>
            <Discussions />
          </article>
        </section>
      </div>
    </body>
  );
}

export default App;
