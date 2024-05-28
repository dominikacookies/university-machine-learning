export const ParseTrees = () => (
  <>
    <p>
      A constituency-based parse tree represents sentences hierarchically,
      broken by grammatical and lexicon parts (see below).
    </p>
    <figure>
      <img src="./parse-trees/tree-parsing-tokens.png" />
      <figcaption>
        Marx, G. and Crackers, A., 2019. 13 Constituency Parsing. In Groucho
        Marx.
      </figcaption>
    </figure>
    <p>
      I used the nltk and svglink libraries to generate such trees for three
      example sentences that were provided in the challenge. You can find the
      code below
    </p>
    <h4>Code</h4>
    <img src="./parse-trees/parse-tree-code.png" />
    <h4>GRAPH: The government raised interest rates</h4>
    <img src="./parse-trees/government.png" />
    <h4>GRAPH: The internet gives everyone a voice</h4>
    <img src="./parse-trees/internet.png" />
    <h4>GRAPH: The man saw the dog with the telescope</h4>
    <img src="./parse-trees/telescope.png" />
  </>
);
