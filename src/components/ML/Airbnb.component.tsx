export const Airbnb = () => {
  return (
    <>
      <p>
        Whilst preparing the Airbnb data analysis report we explored a variety
        of old and new methods for extracting insights. Our main focus was on
        identifying whether a relationship between neighbourhood and price
        exists and how the new NYC regulations could possibly impact Airbnb's
        revenue. A big part of this was clustering Airbnb listings by price.
        This was a method I felt comfortable with from previous modules. It was
        fun to see how it could be implemented using python as previously I had
        only done so using R. Below are some of my highlights from the
        assignment
      </p>
      <a href="https://docs.google.com/document/d/1KfApLKydAYyqRdmGwYJpAG8YppjRw7Jcr7FOyB1Qu8Q/edit?usp=sharing">
        🔗 Full report
      </a>
      <h3>Heatmap</h3>
      <p>
        This heatmap showcases the average price per room type and neighborhood.
        It was a great initial insight into the price distributions across New
        York and the vast differences in the prices of short term rentals there.
      </p>
      <img src="./airbnb/heatmap.png" />
      <h3>Finding the number of clusters</h3>
      <p>
        This graph shows the 'elbow curve' which we used to identify the amount
        of clusters for the K-means algorithm.
      </p>
      <img src="./airbnb/elbow.png" />
      <h3>Cluster distribution</h3>
      <p>
        This is a piece I was incredibly proud of the group producing. I am a
        big fan of visual representations of data and this was a great way to
        easily convey the geographical distribution of our clusters across New
        York City. Anyone familiar with New York should be able to relatively
        easily identify which negibourhood(s) are included in which cluster.
      </p>
      <img src="./airbnb/clusters.png" />
    </>
  );
};
