export const CorrelationRegression = () => {
  return (
    <>
      <div className="space-after">
        <h3>Pearson's correlation and covariance</h3>
        <p>
          Measures the strength and direction of the linear relationship between
          two variables. Pearson’s correlation value ranges from -1 to 1. Where
          -1 is a strong negative correlation, 0 suggests that there is no
          relationship between the variables and +1 indicates a very strong
          positive correlation.
        </p>
        <p>
          I adjusted the tutorial’s input data to see how different data can
          impact the pearson’s correlation and covariance values. To start, the
          two datasets were positively correlated.
        </p>
        <img src="./correlation-regression/pearson-1.png" />
        <p>
          The unit’s material suggested that the metric is heavily impacted by
          outliers. I wanted to see how just by how much exactly so I introduced
          10 outliers to the data. Despite 10 values only representing 1% of the
          entire dataset, they had a very big impact on the correlation value,
          reducing it from 0.888 to 0.658. This highlighted the importance of
          identifying and removing outliers if using this method in the future
          to me.
        </p>
        <img src="./correlation-regression/pearson-2.png" />
        <p>
          Next, I wanted to see if the impact would still be as big if the
          outliers represented 0.1% of data so I kept the 10 outliers but
          instead of generating 1,000 random values to create the dataset, this
          time I generated 10,000. Such a low outlier percentage returned the
          correlation value to almost the same as before (0.863 vs 0.888) yet,
          the difference in covariance was still incredibly visible (403.267 vs
          389.755).
        </p>
        <img src="./correlation-regression/pearson-3.png" />
      </div>
      <div className="space-after">
        <h3>Multiple regression</h3>
        <p>
          This method is an extension of linear regression. It is used to model
          the relationship between a dependant variable and 2+ independent
          variables.
        </p>
        <p>
          In this method, the relationships are measured using a coefficient.
          The coefficient represents the slope of the linear relationship
          between the independent and dependent variables. The higher the
          coefficient, the steeper the slope and the stronger the relationship.
        </p>
        <p>
          To see how this works in practice, I used the tutorial code to look at
          the relationship between CO2 emissions of cars and their engine size
          and city fuel consumption, the code returned the following
          coefficients:
          <ul>
            <li>Engine size: 18.45983255</li>
            <li>City fuel consumption: 8.57268455</li>
          </ul>
          This means that if we increase the engine size by 1, that will
          increase the CO2 emissions by 18.45983255. And if city fuel
          consumption is increased by 1 then CO2 emissions will be increased by
          8.57268455.
          <br /> Below is one of the predictions I ran based on this linear
          relationship.
        </p>
        <img src="./correlation-regression/multiple-linear-regression.png" />
      </div>
      <div>
        <h3>Plynominal Regression</h3>
        <p>
          This method was the hardest to understand initally, so it really
          helped me to break it down into layman's terms. Essentially, this is
          similar to linear regression, but instead of fitting a line, it
          attempts to fit a curve to the provided data. Here, we can provide a
          'degree'. The higher the degree, the curvier the line can be, which is
          best illustrated with an example.
        </p>
        <img src="./correlation-regression/polynominal.png" />
        <p>
          In this image we can see that as the degree increased so did the
          curviness of the line and how it fit the data. This is not always a
          good thing though, too much curviness can lead to overfitting. And a
          degree that's too small could lead to underfitting. The goal here is
          to get a curve that reflects the general distribution of the data but
          doesn't fit every point exactly. For this reason the graph with degree
          5 could be considered a quite good overall fit.
        </p>
      </div>
    </>
  );
};
