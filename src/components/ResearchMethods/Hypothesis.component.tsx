export const Hypothesis = () => {
  return (
    <>
      <h3>Hypothesis Testing Explained</h3>
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
      <h3>Conducting T-Tests</h3>
      <p>
        One of the t-test exercises we undertook looked to identify whether the
        population mean income for males exceeds that of females.
      </p>
      <p>
        <b>Null Hypothesis (H₀)</b>: The mean income for males is equal to the
        mean income for females.
      </p>
      <p>
        <b>Alternative Hypothesis (H₁)</b>: The mean income for males is greater
        than the mean income for females.
      </p>
      <p>
        As we were comparing two independent groups (males and females) on a
        continuous variable (income) I chose an independent two-sample t-test.
        The result of this test was:
      </p>
      <p>
        <b>t-value:</b> 3.27
      </p>
      <p>
        <b>p-value:</b> 0.00071
      </p>
      <p>
        Since the p-value is much less than 0.05 and the t-value is quite high,
        we can say with quite good confidence that there is a significant
        difference in the income of male and females. There are many reasons why
        this difference may exist, some include:
        <ul>
          <li>
            the predomince of men in high paying industries, like IT or finance,
          </li>
          <li>
            women more commonly taking time out of their careers or reducing
            their working hours to support their families in care giving
            capacities,
          </li>
          <li>
            societal norms in certain regions may cause men to more actively
            pursue higher paying jobs despite them potentially offering less
            fulfillment.
          </li>
        </ul>
      </p>
    </>
  );
};
