import { ANN } from "./ANN.component";
import { Airbnb } from "./Airbnb.component";
import { BuildingCNN } from "./BuildingCNN.component";
import { CNN } from "./CNN.component";
import { CorrelationRegression } from "./CorrelationRegression.component";
import { GradientDescent } from "./GradientDescent.component";
import { Industry } from "./Industry.component";
import { LearningTypes } from "./LearningTypes.component";
import { Performance } from "./Performance.component";
import { Robowriters } from "./Robowriters";

export const ML = () => (
  <>
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
  </>
);
