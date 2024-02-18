export const LearningTypes = () => {
  return (
    <>
      <p>
        In one of the first units we explored AI and ML applications along with
        some of the learning types. This was a nice refresher from the previous
        modules and a great way to get started with the module. Below is a
        summary of my understanding.
      </p>
      <h3>unsupervised learning</h3>
      <p>
        Learning without labelled data. Models learn through identifying
        patterns, anomalies and relationships. One of the most commonly known
        algorithms that uses unsupervised learninig is clustering.
      </p>

      <h3>supervised learning</h3>
      <p>
        Learning with labelled data where the algorithm can learn how to
        identify data correctly by learning the mappings between the correct
        inputs and outputs. <br />
        Types include:
        <ul>
          <li>classification: classifies data (e.g. spam / not spam email)</li>
          <li>
            regression: predicts data (e.g. future house prices based on data
            from previous years)
          </li>
        </ul>
        Algoritms include:
        <ul>
          <li>decision trees</li>
          <li>association rules</li>
          <li>ANNs</li>
          <li>SVM</li>
        </ul>
      </p>
      <h3>Reinforcement Learning</h3>
      <p>
        Similar to the psychological concept, prime example being Thorndike’s
        (1898) research, but with machienes. The agent learns by interacting
        with its environement and adjusts responses based on the received reward
        or penalty.
      </p>
      <h4>References</h4>
      <p>
        Thorndike, E. L. (1898). Animal Intelligence: An Experimental Study of
        the Associative Processes in Animals. The Psychological Review:
        Monograph Supplements, 2(4), i-109
      </p>
    </>
  );
};
