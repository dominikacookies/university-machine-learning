export const ANN = () => {
  return (
    <>
      <p>
        Soon we began to discuss ANNs. Admittedly this was both, the most
        terrifying and exciting part of the module. Below, I give a quick
        overview of perceptrons, the fundamental piece of artificial neural
        networks.
      </p>
      <h3>Perceptrons</h3>
      <p>
        Perceptrons are the building blocks of artificial neural networks. The
        idea is that a perceptron takes in a sum of the input values multiplied
        by weights, adds bias and then passes that through an activation
        function.
      </p>
      <p>
        Increasing the weight of an input means that the perceptron will be more
        influenced by its value.
      </p>
      <figure>
        <img src="./ann/preceptron.png" />
        <figcaption>Perceptron visualisation (Géron, 2022)</figcaption>
      </figure>

      <h3>Multi-layer perceptrons</h3>
      <p>
        As the name suggests, these are a network of multiple layers of
        perceptrons. Typically, this means there's an input layer, an output
        layer and one or more hidden layers that do not have contact with the
        environment. The added complexity allows for more complex
        problem-solving.
      </p>
      <figure>
        <img src="./ann/multi-layer-preceptron.png" />
        <figcaption>MLP visualisation (Géron, 2022)</figcaption>
      </figure>
      <p>
        I found this theoretically easy to understand but struggled to
        comprehend how exactly such a relatively simple concept manages all the
        incredible things we see AI doing every day. At this point, I spent a
        lot of time watching YouTube videos of different implementations to
        understand the process better. One of the channels I consistently
        visited throughout the rest of the module was StatQuest. Below is a link
        to one of their first videos that I watched which provides an overview
        of neural networks.
      </p>
      <a href="https://www.youtube.com/watch?v=CqOfi41LfDw">
        🔗 [Youtube] StatQuest: The Essential Main Ideas of Neural Networks
      </a>
      <h4>references</h4>
      <p>
        Géron (2022) Hands-On Machine Learning with Scikit-Learn, Keras, and
        TensorFlow, 3rd Edition. O’Reilly Media, Inc. chapter 10
      </p>
    </>
  );
};
