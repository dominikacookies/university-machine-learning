export const Performance = () => {
  return (
    <>
      <p>
        Learning how to evaluate the performance of models was very helpful to
        undertaking the final assignment.
      </p>
      <h3>confusion matrix</h3>
      <p>
        A confusion matrix provides a summary of a classification model's
        performance by visually showcasing a comparison of the model's
        predictions vs the true labels.
      </p>
      <p>
        It informs us of the counts of true positives, false positives, true
        negatives and false negatives.
      </p>
      <p>
        Looking at the matrix below, we can see that the model appears to be
        quite accurate, with high counts of true positives (correct predictions)
        and true negatives for both labels. The model appears to be slightly
        more likely to mistake items labelled 1 for items labelled 0, with a
        count of false negatives for label 1 being 2 vs 1 count for label 0.
      </p>
      <figure>
        <img src="./performance/confusion-matrix.png" />
        <figcaption>
          Confusion matrix result for unit 11 tutorial model
        </figcaption>
      </figure>
      <h3>F1 score</h3>
      <p>
        The F1 score is a metric we can use to evaluate the balance between the
        model's precision and recall, where precision represents the proportion
        of true positive predictions among all positive predictions and recall
        shows the proportion of true positive predictions among all true
        positive instances in the dataset.
      </p>
      <p>
        The F1 score ranges from 0 to 1. Typically, the higher the score, the
        better the model's performance as it means it shows high precision AND
        high recall (few FP + FN).
      </p>
      <p>
        In the tutorial's example, we looked at these metrics for a dataset with
        3 labels. As we can see, the model's predictions are quite imbalanced
        between the labels. Most notably, class 1 has a value of 0 for all
        metrics. This means that the model's predictions for this class have all
        been completely incorrect. This dataset is fictional, so this is a quite
        unlikely scenario if using a true and well balanced dataset to train a
        model.
      </p>
      <figure>
        <img src="./performance/f1.png" />
        <figcaption>
          F1, precision and recall results for unit 11 tutorial model
        </figcaption>
      </figure>
      <h3>ROC curve</h3>
      <p>
        In the graph below, we can see a straight navy line: the
        no-discrimination line. It allows us to compare the model's performance
        against random guessing. The points above this line show the model
        performing better than random guessing, points below, show the model
        performing worse than random guessing.
      </p>
      <p>
        Overall, it appears the model works fairly well as the ROC curve moves
        in the desired direction, and stays above the no-discrimination line.
        However, a model is considered most optimal if the ROC curve is smooth,
        a step pattern like the one in the graph suggests that the model is not
        optimal.
      </p>
      <figure>
        <img src="./performance/roc.png" />
        <figcaption>ROC curve for unit 11 tutorial model</figcaption>
      </figure>
    </>
  );
};
