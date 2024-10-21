import "./App.css";
import { Data } from "./components/ResearchMethods/Data.component";
import { Discussions } from "./components/ResearchMethods/Discussions.component";
import { Hypothesis } from "./components/ResearchMethods/Hypothesis.component";
import { LitReview } from "./components/ResearchMethods/LitReview.component";
import { ResearchProposal } from "./components/ResearchMethods/ResearchProposal.component";

function App() {
  return (
    <body>
      <div className="container">
        <section className="contents">
          <h2>Content</h2>
          <a href="#about-me">👉🏼 About Me</a>
          <a href="#safe">👉🏼 Proposal for a 'Safe AI' certification body</a>
          <a href="#research-proposal">👉🏼 Research Proposal</a>
          <a href="#data">👉🏼 Data Analysis and Charting</a>
          <a href="#lit-review">👉🏼 Literature Review Plan</a>
          <a href="#hypothesis">👉🏼 Hypothesis Testing</a>
          <a href="#discussions">👉🏼 Collaborative Discussions</a>
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
          <article id="safe">
            <h2>Proposal for a 'Safe AI' certification body</h2>
            <p>
              One of the most exciting assignments in this module involved
              writing a reflective piece about AI regulation and proposing some
              actions that could be taken to help ensure that generative AI
              models are ethical.{" "}
            </p>
            <p>
              I proposed the development of a 'Safe AI' certification body,
              which similar to B Corp of Fairtrade organisations, would ensure a
              certain standard of ethical development in generative AI, helping
              end consumers make more informed choices on the models they use
              and incentivise companies to undertake ethical practices.
            </p>
            <a href="https://docs.google.com/document/d/17eO4nTFQANEmzSjmGaUiDHZl3wBrOnwFWCL6WSqmk0Q/edit?usp=sharing">
              🔗 You can read the whole piece by clicking here 🔗
            </a>
          </article>
          <article id="data">
            <h2>Data Analysis and Charting</h2>
            <Data />
          </article>
          <article id="hypothesis">
            <h2>Hypothesis Testing</h2>
            <Hypothesis />
          </article>
          <article id="lit-review">
            <h2>Literature Review Plan</h2>
            <LitReview />
          </article>
          <article id="research-proposal">
            <h2>Research Proposal</h2>
            <ResearchProposal />
          </article>
          <article id="discussions">
            <h2>Collaborative Discussions</h2>
            <Discussions />
          </article>
        </section>
      </div>
    </body>
  );
}

export default App;
