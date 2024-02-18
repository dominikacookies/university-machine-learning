export const Industry = () => {
  return (
    <>
      <p>
        This module included two collaborative discussions. This was the first
        of them, set out to explore the role of AI in Industry 4.0. It is
        undeniable what a great impact and contributions AI has delivered. I
        anticipated that most of my peers would be excited to discuss all of the
        positives therefore I wanted to choose a slightly different angle, one
        that is perhaps more traditionally considered 'boring' but couldn't be
        more crucial to definining AI's direction: ethics. With so many new
        libaries to evaluate the discrimination of models and talks of new laws
        to help assess the ethics of models before they're released to the
        world, I was very keen to hear what my peers, the future leaders of this
        industry, had to say on the topic. Below you can read my inital post
        that I hoped would spark such a discussion.
      </p>
      <h3>Initial post</h3>
      <p>
        Machine learning and AI have revolutionised businesses and our daily
        lives. Many of their applications have helped to elevate mundane tasks
        and decrease operating costs, whilst others sparked brand-new
        innovations. There’s no doubt that ML and AI have positively transformed
        many businesses but as the old saying goes, ‘high risk, high reward’,
        and AI's high rewards can come with very high risks indeed. Many
        companies today are scrambling to walk the thin line between leveraging
        AI technogies and avoiding the endless scandals that they seem to be
        associated with.
      </p>
      <p>
        One of the big risks that accompanies ML and AI are biases. In a time
        where some of the most predominant societal values are gender and
        cultural equality, an association with biases can have long-lasting
        negative impacts on how a business is perceived. One such example was
        Amazon’s recruitment-aiding tool. The tool helped to filter candidates
        as it scored their profiles out of 5 stars in terms of suitability for
        the role (Kodiyan, 2019). This was a great, money-saving idea at the
        time, considering the large number of applications Amazon receives and
        the costs associated with having to manually review each one. However,
        ML algorithms are only as good as the data they’re trained on and
        unfortunately, this algorithm used 10-year male-dominant hiring data.
        This meant that it was not gender-neutral and showed a significant
        preference for male candidates, particularly in technical roles
        (Kodiyan, 2019). This ultimately drove the shutdown of the algorithm but
        not without a series of negative headlines associated with the company,
        including the following from the BBC: ”Amazon scrapped 'sexist AI'
        tool”. Such reporting from big media outlets left a long-lasting bad
        taste in the mouths of potential future female candidates.
      </p>
      <p>
        Companies that rely heavily on brand perception for their success are
        particularly exposed to the outfall of such scandals. Examples include
        The Economist, known for its objective reporting, and Gymshark which has
        been built on heavy brand marketing.
      </p>
      <p>
        Amazon's algorithm was built in 2014 but not much has changed since.
        Unfortunately, such data biases and discrimination are uncovered more
        frequently than not, for example, the currently vogue DALL-E was found
        to:
        <ul>
          <li>
            “exhibit significant biases across all dimensions and even
            exacerbated them when compared to recent labor statistics (BLS)”
            (Naik and Nushi, 2023)
          </li>
          <li>
            produce less visually clear images of white families than African
            families (Mbalaka, 2023)
          </li>
          <li>
            “lean toward generating images of white men by default, overly
            sexualiz(ing) images of women, and reinforc(ing) racial
            stereotypes”. (Johnson, 2022)
          </li>
        </ul>
        The fault here doesn’t lie with algorithms, however. It lies with us and
        the data we have produced from which these algorithms learn. The journey
        to ensuring AI models exhibit and promote equality sparks several
        questions which I would be very keen to hear the thoughts of my peers
        on:
        <ul>
          <li>
            how do we ensure we are not creating new biases when correcting the
            algorithms?
          </li>
          <li>
            should stronger regulations be put in place to limit new AI tools
            reaching the public before they have been tested against a set of
            standards?
          </li>
          <li>
            is there a percentage of bias we are willing to accept AI products
            to have?
          </li>
        </ul>
        In a perfect world, no product would ever carry any bias at all however,
        even clinical trials for life-saving drugs tend to adopt a p-value of
        0.05. What is the likely figure to ensure bias is limited and innovation
        is not impeded?
      </p>
      <h4>references</h4>
      <p>
        BBC, 2018. “Amazon scrapped 'sexist AI'”, available
        at: https://www.bbc.co.uk/news/technology-45809919 (Accessed: 16
        November 2023)
      </p>
      <p>
        Flechner, L., & Tseng, T. Y. (2011). Understanding results: P-values,
        confidence intervals, and number need to treat. Indian Journal of
        Urology, 27(4), 532-535. DOI: 10.4103/0970-1591.91447
      </p>
      <p>
        Kodiyan, A.A., 2019. “An overview of ethical issues in using AI systems
        in hiring with a case study of Amazon’s AI based hiring
        tool”. Researchgate Preprint, pp.1 - 2
      </p>
      <p>
        Johnson, K., 2022. “DALL-E 2 Creates Incredible Images—and Biased Ones
        You Don’t See”, WIRED. available
        at: https://www.wired.com/story/dall-e-2-ai-text-image-bias-social-media/ (Accessed:
        16 November 2023)
      </p>
      <p>
        Mbalaka, B., 2023. "Epistemically violent biases in artificial
        intelligence design: the case of DALLE-E 2 and Starry AI", Digital
        Transformation and Society, Vol. 2 No. 4, pp.
        376-402. https://doi.org/10.1108/DTS-01-2023-0003
      </p>
      <p>
        Naik, R. and Nushi, B., 2023. “Social Biases through the Text-to-Image
        Generation Lens” arXiv, pp.
        12. https://doi.org/10.48550/arXiv.2304.06034
      </p>
      <h3>read more</h3>
      <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=203994">
        🔗 Summary post
      </a>
      <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=196958">
        🔗 AI and autonomous driving vehicles discussion
      </a>
      <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=196292">
        🔗 Industry 4.0 and cybersecurity discussion
      </a>
    </>
  );
};
