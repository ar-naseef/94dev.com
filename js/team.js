let team = [
  {
    name: "NASEEF ATHAUR RAHMAN",
    position: "(Founder,CEO)",
    discription:
      "Experienced Freelance Software Engineer, Entrepreneur with a demonstrated history of working in the internet industry. Skilled in Javascript(React/Node), Python and AWS cloud. Strong engineering professional with a Bachelor's degree focused in Computer Science & Engineering",
    img: "./img/team/N3.jpg",
    facebook: "https://www.facebook.com/naseef.ar",
    linkedin: "https://www.linkedin.com/in/arnaseef/",
    github: "https://ar-naseef.github.io/",
    twitter: "https://twitter.com/arnaseef",
    instagram: "",
  },

  {
    name: "sajas ahamed",
    position: "(Seinor Developer)",
    discription: `geek with the passion to create clean code`,
    img: "./img/team/SA.jpg",
    facebook: "https://www.facebook.com/Jas.ahd7",
    linkedin: "https://www.linkedin.com/in/sajas-ahamed-46006769/",
    github: "https://sajas-nm.github.io/",
    twitter: "https://twitter.com/sajas_nm",
    instagram: "",
  },
  {
    name: "Saajid Muhammad",
    position: "(Seinor Developer)",
    discription:
      "2+ of experience facilitaing cutting-edge engineering solutions with a wide range of e-commerce application and technology skills",
    img: "./img/team/SAJ.jpg",
    facebook: "https://www.facebook.com/saajid97",
    linkedin: "https://www.linkedin.com/in/saajid-muhammad-b6147b13b/",
    github: "https://github.com/saajidMuhammad",
    twitter: "",
    instagram: "",
  },
  {
    name: "Ahamed Afras",
    position: "(Junior Developer)",
    discription: `full-stack knowledge and experience to build interactive website design and development`,
    img: "./img/team/AF.png",
    facebook: "https://www.facebook.com/afraz.ahd/",
    linkedin: "https://www.linkedin.com/in/ahamed-afraz-6849aa190/",
    github: "https://github.com/Afras-cyber",
    twitter: "",
    instagram: "",
  },
  {
    name: "Ruhma Thaha",
    position: "(Junior Developer)",
    discription: `Experience in developing an E-commerce application and complex System`,
    img: "./img/team/RU.jpg",
    facebook: "",
    linkedin: "https://www.linkedin.com/in/ruhma-thaha-aa0273187",
    github: "https://github.com/RuTa6",
    twitter: "",
    instagram: "",
  },
  {
    name: "Affan Ahamed",
    position: "(Marketing executives)",
    discription:
      "Marketing, Advertising, Public relations, Media, Research and behavioral studies",
    img: "./img/team/AM.png",
    facebook: "https://www.facebook.com/affan.ahamed.9",
    linkedin: "https://www.linkedin.com/in/affan-ahamed-498880145",
    github: "",
    twitter: "https://twitter.com/affanahamed7",
    instagram: "https://www.instagram.com/affan.ahamed/",
  },
];

team.map((person) => {
  //col-md-3 ls_team
  let parent = document.createElement("div");
  parent.setAttribute("class", "col-md-4 ls_team");
  //about
  let about = document.createElement("div");
  about.setAttribute("class", "aboutt");
  //Avatar
  let img = document.createElement("img");
  img.setAttribute("class", "per_img");
  img.src = person.img;
  //details tag
  let person_details = document.createElement("div");
  person_details.setAttribute("class", "per_det");
  let nameOf = document.createElement("h3");
  nameOf.setAttribute("class", "nameOf");
  nameOf.innerText = person.name;
  let position = document.createElement("p");
  position.setAttribute("class", "position");
  position.innerText = person.position;
  //description tag
  let discription = document.createElement("p");
  discription.setAttribute("class", "desc");
  discription.innerText = person.discription;
  //social links
  let social_container = document.createElement("div");
  social_container.setAttribute("class", "social");
  //facebook
  let fb_anchor = document.createElement("a");
  let fb_img = document.createElement("img");
  fb_anchor.setAttribute("href", person.facebook);
  fb_anchor.setAttribute("target", "_blank");
  fb_img.setAttribute("src", "./img/icons/fb.svg");
  fb_img.setAttribute("class", "social_icon");
  fb_anchor.appendChild(fb_img);

  //linkedin
  let linkin_anchor = document.createElement("a");
  let linkin_img = document.createElement("img");
  linkin_anchor.setAttribute("href", person.linkedin);
  linkin_anchor.setAttribute("target", "_blank");
  linkin_img.setAttribute("src", "./img/icons/linkin.svg");
  linkin_img.setAttribute("class", "social_icon");
  linkin_anchor.appendChild(linkin_img);
  //github
  let git_anchor = document.createElement("a");
  let git_img = document.createElement("img");
  git_anchor.setAttribute("href", person.github);
  git_anchor.setAttribute("target", "_blank");
  git_img.setAttribute("src", "./img/icons/git.svg");
  git_img.setAttribute("class", "social_icon");
  git_anchor.appendChild(git_img);
  //twitter
  let tweet_anchor = document.createElement("a");
  let tweet_img = document.createElement("img");
  tweet_anchor.setAttribute("href", person.twitter);
  tweet_anchor.setAttribute("target", "_blank");
  tweet_img.setAttribute("src", "./img/icons/twitter.svg");
  tweet_img.setAttribute("class", "social_icon");
  tweet_anchor.appendChild(tweet_img);
  //instagram
  let inst_anchor = document.createElement("a");
  let inst_img = document.createElement("img");
  inst_anchor.setAttribute("href", person.instagram);
  inst_anchor.setAttribute("target", "_blank");
  inst_img.setAttribute("src", "./img/icons/instagram.svg");
  inst_img.setAttribute("class", "social_icon");
  inst_anchor.appendChild(inst_img);
  //append child link to social element
  person?.facebook ? social_container.appendChild(fb_anchor) : "";
  person?.linkedin ? social_container.appendChild(linkin_anchor) : "";
  person?.github ? social_container.appendChild(git_anchor) : "";
  person?.twitter ? social_container.appendChild(tweet_anchor) : "";
  person?.instagram ? social_container.appendChild(inst_anchor) : "";

  //append child
  person_details.appendChild(nameOf);
  person_details.appendChild(position);
  person_details.appendChild(discription);
  about.appendChild(img);
  about.appendChild(person_details);
  about.appendChild(social_container);
  parent.appendChild(about);
  document.querySelector(".flex-row").appendChild(parent);
});
