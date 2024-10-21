export const Hypothesis = () => {
  return (
    <>
      <p>
        In Unit 8 we explored hypothesis testing, a method used to make
        inferences about a population based on sample data. First, we state the
        null hypothesis (H0), a statement assumed true, e.g. children watching 3
        hours of TV daily. The alternative hypothesis (H1) suggests a
        difference, like children watching more or less than 3 hours.
      </p>
      <p>
        Next, we set a significance level, typically 5%, which indicates the
        probability of making a Type I error (wrongly rejecting H0). A test
        statistic is then computed to measure how much the sample mean differs
        from the population mean.
      </p>
      <p>
        The decision to reject or not reject H0 is based on the p-value. If the
        p-value is less than the significance level (e.g., 0.05), we reject H0,
        indicating evidence against it.
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
        As we were comparing two independent groups on a continuous variable I
        chose an independent two-sample t-test. The result of this test was:
      </p>
      <p>
        <b>t-value:</b> 3.27
      </p>
      <p>
        <b>p-value:</b> 0.00071
      </p>
      <p>
        Since the p-value is much less than 0.05 and the t-value is quite high,
        we can conclue that there is a significant difference in the income of
        male and females. There are many reasons why this difference may exist,
        some include: the predomince of men in high paying industries, like IT
        or finance, women more commonly taking time out of their careers or
        reducing their working hours to support their families in care giving
        capacities or societal norms in certain regions may cause men to more
        actively pursue higher paying jobs despite them potentially offering
        less fulfillment.
      </p>
    </>
  );
};
