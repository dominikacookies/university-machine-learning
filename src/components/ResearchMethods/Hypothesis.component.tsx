export const Hypothesis = () => {
  return (
    <>
      <p>
        In Unit 8 we explored hypothesis testing, which is a fundamental method
        used to make inferences about a population based on sample data. The
        first step involves stating the null hypothesis (H0), a statement about
        a population parameter assumed to be true, such as the mean number of
        hours children watch TV being 3 hours per day. The alternative
        hypothesis (H1) contradicts the null, proposing that the true value of
        the population parameter differs (e.g., children watch more, less, or
        simply not 3 hours).
      </p>
      <p>
        Next, we set the level of significance, typically 5% in behavioural
        studies, which acts as the threshold for rejecting the null hypothesis.
        This significance level is the probability of making a Type I error,
        which occurs when the null hypothesis is wrongly rejected. Once the
        criteria are established, a test statistic is computed to assess how far
        the sample mean deviates from the population mean, considering the
        sample’s variability (standard deviation). This test statistic allows us
        to quantify the likelihood of obtaining the sample outcome if H0 is
        true.
      </p>
      <p>
        The decision to reject or fail to reject the null hypothesis is based on
        the calculated p-value, which represents the probability of obtaining
        the observed sample outcome under the assumption that the null
        hypothesis is true. If the p-value is less than the set significance
        level (e.g., 0.05), we reject H0, suggesting the sample provides
        sufficient evidence against it.
      </p>
      <figure>
        <img src="./research-methods/hypothesis.png" />
        <figcaption>
          Chadha, A. (2017) 'The Confusion Matrix Explained', Towards Data
          Science. Available at:
          https://towardsdatascience.com/the-confusion-matrix-explained-part-1-5513c6f659c1
          [Accessed 1 Sept. 2024].
        </figcaption>
      </figure>
      <p>
        Finally, we acknowledge the potential for error in our conclusions. A
        Type I error occurs if we reject a true null hypothesis, while a Type II
        error happens when we fail to reject a false null hypothesis. These
        possibilities underscore that hypothesis testing does not prove or
        disprove hypotheses with absolute certainty but instead evaluates the
        likelihood of observed outcomes given the initial assumptions.
      </p>
    </>
  );
};
