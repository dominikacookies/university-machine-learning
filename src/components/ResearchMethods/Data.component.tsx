export const Data = () => {
  return (
    <>
      <p>
        In units seven and nine, we learned new data analysis and charting
        techniques. Below you will find examples of some of the cases we
        explored along with interpretations of the findings.
      </p>
      <h3>Diet and weightloss</h3>
      <p>
        One of the first exercises investigated the weight loss outcomes from
        two diets, Diet A and Diet B.
      </p>
      <img src="./research-methods/diets-table.png" />
      <p>
        Our findings showed that Diet A, on average, resulted in 1.631 kg more
        weight loss during the study period. Both diets displayed similar
        standard deviation and interquartile ranges, with Diet B’s being
        slightly higher, though this difference of less than 0.2kg in both cases
        isn’t significant enough to suggest that Diet B was much more impacted
        by individual variation. On the whole, it seems that Diet A delivers
        better weightloss outcomes.
      </p>
      <img src="./research-methods/diets-graph.png" />
      <p>
        Whilst both diets show similar wieghtloss frequency distribution, they
        lead to quite different results. For Diet A, the distribution shows a
        concentration of weight loss around 3.36 to 5.14 kg. In comparison, Diet
        B shows a much lower weight loss of around 1.5kg to 3.5kg for its
        highest concentration. It seems that not only does Diet B show tend to
        produce lower results for the majority of participants, significant
        weight loss is far less common with this diet. If we look at the right
        hand-side of the histogram we can observe that the high weight loss
        values for Diet B are a lot more common than for Diet A. This is the
        opposite on the left-handside where for Diet B, 8 participants gained
        weight or lost less than 1.5kg in comparison with only 4 participants
        following Diet A.
      </p>
      <h3>Cereal brand preference</h3>
      <p>
        The next exercise used cereal brand preference data. In this exercise we
        compared the popularity of brands A and B vs other brands in areas 1 and
        2.
      </p>
      <img src="./research-methods/cereal-table.png" />
      <img src="./research-methods/cereal-graph.png" />
      <p>
        As can be seen in the table and chart, in both areas, Brand B proved
        more popular than Brand A by around two-thirds. What’s more interesting,
        however, is the popularity of these two brands in relation to other
        cereal brands. Whilst brands A and B appear to dominate the Area 2
        market, holding 54.90% preference share, their share in Area 1 is much
        lower at 40%, which could suggest more demographic diversity or cereal
        choice in this area.
      </p>
      <h3>Heather species sparsity</h3>
      <p>
        This exercise compared the distribution of heather in locations A and B.
      </p>
      <img src="./research-methods/heather-graph.png" />
      <p>
        From the above diagram, location A seems better suited for encouraging
        Heather growth. Here, Heather is present in 85.7% of the area, and
        abundant in 46.4% of it suggesting a varied habitat of more and less
        suited growing areas. In location B, we observe Heather to cover much
        less of the area, 54.5%. In places that it is found, it’s more often
        sparse than abundant suggesting that overall, Location B offers less
        favourable growing conditions than location A.
      </p>
    </>
  );
};
