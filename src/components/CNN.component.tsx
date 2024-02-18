export const CNN = () => {
  return (
    <>
      <p>
        I always found the concept of a model being able to identify what an
        image contains absolutley fascinating. It's such a complex task when you
        really think about what identifying images means, that it genuinely
        blows my mind that a model can take some numbers (rgb channel values)
        and from that, be able to predict whether a picture contains a dog or
        not.
      </p>
      <figure>
        <img src="./cnn/prediction.png" />
        <figcaption>
          An example correct identification of a horse by a model from one of
          tutorials
        </figcaption>
      </figure>
      <p>
        As I was learning all of the new terminology and experimenting with
        different parameters in the tutorial code, I found it helpful to verify
        my knowledge by explaining to myself what impact increasing/decreasing a
        value would have on the network before running the change through the
        model. Below, are a couple of such explanations from my notes.
      </p>
      <h3>Kernel size</h3>
      <h4>LARGE</h4>
      <p>
        Large kernerls help us to cover larger areas of the image at any one
        time. This means that the CNN is able to better understand global
        patterns and contexts that objects often appear in. A large kernel can
        help to avoid overfitting
      </p>
      <h4>SMALL</h4>
      <p>
        A smaller kernel size helps to capture smaller scale nuances in the data
        and retain more of the spatial features as the image progressed through
        the network. This inturn can lead to a higher accuracy.
      </p>
      <h3>Stride</h3>
      <h4>large</h4>
      <p>
        A larger stride encourages focus on global features and can reduce
        overfitting by downsampling the data.
      </p>
      <h4>small</h4>
      <p>helps to retain more spatial information and localisation accuracy</p>
      <h3>Number of convolutional layers</h3>
      <h4>more</h4>
      <p>
        More layers allow for more feature learning. Assist in capturing
        complexity and nuances in the image.
      </p>
      <h4>less</h4>
      <p>
        lower amounts of layers are quicker to run and easier to interpret.
        Having less layers can reduce the model’s capacity to learn noise,
        preventing it from overfitting.
      </p>
      <figure>
        <img src="./cnn/convolutional-layers.png"></img>
        <figcaption>
          Convolution layers with multiple feature maps(Géron, 2022)
        </figcaption>
      </figure>
      <h3>number of filters</h3>
      <h4>more</h4>
      <p>
        More filters increase the model’s capacity to learn complex features.
        Since each filter learns to detect a particular feature/pattern having
        more of them allows the network to capture more types of features. It
        can help the model to learn robust and important features, making it
        more generalisable (and accurate) with unseen data.
      </p>
      <h4>less</h4>
      <p>
        lower amounts of filters are faster to process but may lead to
        underfitting as the model struggles to capture the most important
        features of images. Equally, this can also lead to overfitting if the
        model fails to learn which features are most discriminative.
      </p>
      <h4>references</h4>
      <p>
        Géron (2022) Hands-On Machine Learning with Scikit-Learn, Keras, and
        TensorFlow, 3rd Edition. O’Reilly Media, Inc. chapter 14
      </p>
      <h4>other</h4>
      <p>
        I found this video very helpful in understanding the concept of CNNs
        initally
      </p>
      <a href="https://www.youtube.com/watch?v=pj9-rr1wDhM&t=225s">
        🔗 [Youtube] Futurology: Convolutional Neural Networks Explained (CNN
        Visualized)
      </a>
    </>
  );
};
