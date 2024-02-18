export const GradientDescent = () => {
  return (
    <>
      <p>
        The gradient descent tutorial was a great, hands-on introduction to
        understanding how ANNs optimise and how the various parameters can
        impact the optimisation. Below, is the comparison table I created to
        illustrate the impact that increasing/decreasing the learning rate had
        on decreasing the cost in 150 iterations.
      </p>
      <img src="./gradient-descent/table.png" />
      <p>
        As we can see, up to a point, the higher the learning rate was the less
        iterations it took to achieve a lower cost. However, after a certain
        threshold, the learning rate was too high for the model to keep
        converging toward the minimum, instead, it appears to have distabilised.
      </p>
      <h4>other</h4>
      <p>A link to a great video from StatQuest explaining gradient descent</p>
      <a href="https://www.youtube.com/watch?v=sDv4f4s2SB8">
        🔗 [Youtube] StatQuest: Gradient Descent
      </a>
    </>
  );
};
