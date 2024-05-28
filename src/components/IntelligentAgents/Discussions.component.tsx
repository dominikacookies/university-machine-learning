export const Discussions = () => (
  <>
    <h3>Discussion Topic: Deep Learning</h3>
    <h4>Brief</h4>
    <p>
      The advent of new technologies supported by Deep Learning models mean that
      it is now possible to generate ‘new’ content, for example, Dall-E AI to
      generate images or ChatGPT to create prose.
    </p>
    <p>
      Do you think that these new technologies offer any ethical issues that
      should be considered, and if not, why not?
    </p>
    <h4>Summary response</h4>
    <p>
      New AI technologies capable of content generation, have been an exciting
      development and for many of us, quickly became day-to-day tools:
      Microsoft’s Copliot for generating code suggestions, to Adobe’s Generative
      Fill tool altering images and videos to OpenAI’s ChatGPT taking the
      heavylifting of copywriting off of marketer’s hands. It is undeniable that
      content generating AI has changed the way we work and live our lives,
      unlocked new capabilities, and in many ways, eased a lot of mundane tasks.
      No new development however, comes without a cost.
    </p>
    <p>
      One great concern is the use of these technologies to create misleading or
      harmful content. Deep Learning models can produce incredibly realistic
      images and text that look just like something a human would make. This can
      be used to make deepfakes, spread misinformation, and create deceptive
      media that can mess with public trust and spread false narratives (Chesney
      & Citron, 2019). For instance, AI-generated images or videos could be used
      to fabricate convincing but fake news stories or political statements,
      which could sway public opinion and affect elections. A recent video by
      Zac Asop (2023) shows how hackers were able to open a bank account in the
      content creator’s name by generating a deepfake of his face to pass
      authentication steps.
    </p>
    <p>
      Another issue concerns the property rights and the originality of
      AI-generated content. These models are trained on huge datasets that often
      include copyrighted material, so the content they produce might
      unintentionally infringe on existing intellectual property (Shutterstock,
      2021). This brings up questions about who owns the AI-created works and
      whether the creators of the original training data should get credit or
      compensation.
    </p>
    <p>
      Bias in DL models is also a big concern. These models can pick up and even
      amplify biases present in their training data, resulting in content that
      might be biased or discriminatory (Bender et al., 2021). This can
      perpetuate stereotypes and reinforce social inequalities, highlighting the
      need for transparency and fairness in how we develop and use AI.
    </p>
    <p>
      In conclusion, while DL technologies like Dall-E and ChatGPT offer amazing
      possibilities for content creation, they also pose serious ethical
      challenges. We need to address these issues through strong regulatory
      frameworks, ethical guidelines, and continuous research to fully benefit
      from these technologies while minimizing their potential harms.
    </p>
    <h5>References</h5>
    <p>
      Asop, Z. (2023). I Let a Hacker Steal My Identity For 28 Days. Available
      at: https://www.youtube.com/watch?v=JHgdXnRJgA4 (Accessed: 10 May 2024)
    </p>
    <p>
      Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On
      the Dangers of Stochastic Parrots: Can Language Models Be Too Big?
      Proceedings of the 2021 ACM Conference on Fairness, Accountability, and
      Transparency, 610-623.
    </p>
    <p>
      Chesney, R., & Citron, D. K. (2019). Deepfakes and the New Disinformation
      War. Foreign Affairs, 98(1), 147-155.
    </p>
    <p>
      Shutterstock. (2021). The Ethics of AI Art: Exploring Copyright and
      Ownership in the World of AI-Generated Art. Shutterstock.
    </p>
    <h3>Discussion Topic: Agent Communication Languages</h3>
    <h4>Brief</h4>
    <p>
      What are the potential advantages and disadvantages of the use of agent
      communication languages such as KQML? How do they compare with method
      invocation in Python or Java?
    </p>
    <h4>Summary response</h4>
    <p>
      Languages like KQML offer much-needed flexibility and a unified approach
      to agent communication. KQML allows agents to interact without in-depth
      knowledge of the system components’ internal implementations (Labrou &
      Finin, 1997), which supports modularity and can be considered particularly
      advantageous to loosely coupled architectures and distributed AI systems
      (Finin et al., 1994). These types of communication languages also support
      asynchronous communication. This can be particularly useful when the
      responding agent may have to perform long processes, as it allows agents
      to act independently of each other, without holding up their respective
      processes. Lastly, KQML makes it very easy to understand the nature of
      each communication. The performatives used at the beginning of each
      message (like `ask-one`, `tell`, `achieve`, `subscribe)` are
      self-explanatory, making it easier to understand type of communications
      being sent between agents in complex systems.
    </p>
    <p>
      That said, KQML is a much less popular programming language than Python or
      Java, and its syntax differs greatly from the object-oriented languages
      most developers will be confident with. This may not only mean that
      additional training will be required to onboard new hires, but may also
      translate into weak communication patterns or long debugging times, if
      individuals without much experience or knowledge of KQML are left
      accountable of such systems.
    </p>
    <h5>References</h5>
    <p>
      Finin, T., Fritzson, R., McKay, D. & McEntire, R., 1994. KQML as an Agent
      Communication Language. *Proceedings of the Third International Conference
      on Information and Knowledge Management (CIKM '94)*. DOI:
      10.1145/191246.191322.{" "}
    </p>
    <p>
      Labrou, Y. & Finin, T., 1997. A Proposal for a New KQML Specification.
      *Technical Report TR CS-97-03*. University of Maryland Baltimore County.
    </p>
    <h3>
      Discussion Topic: Rise of Agent-Based Systems and Their Benefits to
      Organizations
    </h3>
    <h4>Brief</h4>
    <p>
      Discuss what has led to the rise of agent-based systems and the benefits
      that this approach can offer to organisations. Discussion should include
      at least three references.
    </p>
    <h4>Summary response</h4>
    <p>
      The rise of agent-based systems (ABS) can be largely attributed to
      advancements in computational capabilities and their increased
      affordability. Additionally, the systems support a wide range of
      applications, thanks to their ability to simulate complex scenarios
      involving numerous autonomous agents interacting dynamically with each
      other and their environment. This capacity to model emergent behaviors
      renders ABS invaluable across many industries and domains, from healthcare
      to market analysis.
    </p>
    <p>
      The growth in computational power has enabled the development and
      execution of intricate agent-based models that were previously impossible.
      Modern processors and distributed computing frameworks have significantly
      reduced the time required for simulating complex systems (Rand & Stummer,
      2021) and therefore, lowered the barriers to ABS development and uptake
      for many companies. With increased computational power also came decreased
      costs of these resources, lowering the risk of ABS implementation
      democratising the uptake of the technology, making it more accessible to
      organisations of all sizes (Tong et al., 2015)
    </p>
    <p>
      Another key driver behind the rise of ABS is the system’s ability to
      simulate emergent behaviour, a capability that that wasn’t previously
      possible using more traditional methods. For instance, the Basic Immune
      Simulator (BIS) leverages ABS to study complex interactions within the
      immune system, offering deeper insights into biological processes (Tong et
      al., 2015). In times of crisis, the systems can be leveraged to simulate
      the outcome of largely unknown situations - for example during a pandemic,
      ABS can help determine the effectiveness of different intervention
      strategies, such as lockdowns, and tailor them to specific regions (Zohdi,
      2020)
    </p>
    <p>
      In conclusion, the rise of agent-based systems is driven by technological
      advancements and cost reductions, making them accessible and powerful
      tools for simulating complex systems. Organizations can leverage ABS to
      enhance decision-making capabilities, conduct market analysis, and
      optimize operational efficiencies across various industries.
    </p>
    <h5>References</h5>
    <p>
      Rand, W., & Stummer, C. (2021). Agent-Based Modeling and Simulation in
      Business and Research. Springer.
    </p>
    <p>
      Tong, L., Hu, Y., Wang, Y., & Liu, H. (2015). Agent-based Simulation in
      Research on Complex Systems. Wiley Interdisciplinary Reviews:
      Computational Statistics, 7(2), 123-140.
    </p>
    <p>
      Zohdi, T. I. (2020). Modeling and Simulation of Infectious Diseases: From
      Macroscale to Microscale. Springer.
    </p>
  </>
);
