export const Dialogues = () => (
  <>
    <h3>Overview</h3>
    <p>
      The below dialogue is one between two agents: Alice and Bob. Alice is an
      agent designed to procure stock and Bob is an agent that controls the
      stock levels for a warehouse. This dialogue should see Alice asking Bob
      about the available stock of 50 inch televisions, and also querying the
      number of HDMI slots the televisions have.{" "}
    </p>
    <p>The dialogue is written using KQML and KIF. </p>
    <p>
      KQML is a protocol for exchanging information between software agents - it
      defines how messages should be sent and received but not their content.
      Each KQML message begins with a performative. This specifies the the type
      of communication/operation being performed e.g. `ask-one`, **`tell`**,
      **`achieve`**, **`subscribe` .** Each message should then also contain the
      sender, receiver, content and reply-with fields. KQML messages are linear
      streams of characters with a Lisp-like syntax. This formatting is
      irrelevant to the functions of the language, it makes the messages easy to
      read, to parse and to convert to other formats. . The syntax is simple and
      allows for the addition of new parameters, if deemed necessary, in future
      revisions of the language (Finin et al, 1998) KIF on the other hand is a
      language in which the content KQML messages can be written. KIF is based
      on first-order predicate logic allowing the user flexibility and the
      ability to represent complex logic.
    </p>
    <h3>the dialogue</h3>
    <p>
      In this dialogue, Alice first asks Bob about the available stock for 50
      inch TVs. Bob replies that there are 101 such TVs in stock Alice next
      enquires about the number of HDMI slots in these TVs. Bob replies that
      there are 3 HDMI slots.
    </p>
    <img src="./dialogues/dialogue.png" />
  </>
);
