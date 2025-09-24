const whyUs = [
  {
    title: "Space-age tech",
    discription: `Modern JS frameworks, Serverless, GraphQL, TDD, clean code
        etc.. You will find us well informed with time than our
        competitors. And that's our edge.`,
  },
  {
    title: "We are punctual",
    discription: `We provide possible estimates and we keep them. We respect
    time. Both our's and others'.`,
  },
  {
    title: "We are responsible",
    discription: `We believe in being honest, transparent with constant
    communication all the way through. We believe in long-term
    relationships.`,
  },
  {
    title: "We are picky",
    discription: `We are picky about what we do. We don't just pick another
    project. Unless we are convinced.`,
  },
  {
    title: "We have magic",
    discription: `Right people with right attitude equipped with skills of the
    time are rare. That's the magic we have.`,
  },
  {
    title: "We are friendly",
    discription: `We are devs, not computers. We are always aware of the human
    part first and then the professional relationships that we
    develop. So, we do our best to make it an enjoyable and
    comfortable association for both us and the clients.`,
  },
];

whyUs.map((why) => {
  //parent
  const parent = document.createElement("div");
  parent.setAttribute("class", "feature col-md-4");
  //title
  const title = document.createElement("h3");
  title.setAttribute("class", "title");
  title.innerText = why.title;
  //discription
  const desc = document.createElement("p");
  desc.innerText = why.discription;
  ///appennd  child
  parent.appendChild(title);
  parent.appendChild(desc);

  //
  document.querySelector(".whyUsContainer").appendChild(parent);
});
