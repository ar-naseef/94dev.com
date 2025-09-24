const techItem = [
  {
    tech_name: "JS",
    img_url: "https://cdn.svgporn.com/logos/javascript.svg",
  },
  {
    tech_name: "Node.js",
    img_url: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
  },

  {
    tech_name: "React.js",
    img_url: "https://cdn.svgporn.com/logos/react.svg",
  },

  {
    tech_name: "Serverless",
    img_url: "https://cdn.svgporn.com/logos/serverless.svg",
  },
  {
    tech_name: "Puppeteer",
    img_url: "https://cdn.svgporn.com/logos/puppeteer.svg",
  },
  {
    tech_name: "PWA",
    img_url:
      "https://cdn-images-1.medium.com/max/1600/1*GwBZgjItyjEwaaZn-lxTTA.png",
  },
  {
    tech_name: "MongoDB",
    img_url:
      "https://www.pinclipart.com/picdir/big/336-3367489_mongodb-mongodb-nosql-logo-clipart.png",
  },
  {
    tech_name: "SQL",
    img_url: "https://cdn.svgporn.com/logos/mysql.svg",
  },
  {
    tech_name: "GraphQL",
    img_url: "https://cdn.svgporn.com/logos/graphql.svg",
  },
  {
    tech_name: "AWS",
    img_url: "https://images.fmctraining.com/images/aws-logo-white.png",
  },
  {
    tech_name: "Firebase",
    img_url: "https://cdn.svgporn.com/logos/firebase.svg",
  },
  {
    tech_name: "GCP",
    img_url: "https://api.iconify.design/logos-google-cloud-platform.svg",
  },
  {
    tech_name: "Docker",
    img_url: "https://cdn.svgporn.com/logos/docker-icon.svg",
  },
  {
    tech_name: "Electron",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1024px-Electron_Software_Framework_Logo.svg.png",
  },
  {
    tech_name: "React Native",
    img_url: "https://cdn.svgporn.com/logos/react.svg",
  },
];

techItem.map((tech) => {
  //col-sm-2 col-xs-6
  let parent = document.createElement("div");
  parent.setAttribute("class", "col-sm-2 col-xs-6");
  //number
  let number = document.createElement("div");
  number.setAttribute("class", "number");
  //img
  let img = document.createElement("img");
  img.setAttribute("class", "what-we-use");
  img.setAttribute("src", tech.img_url);
  img.setAttribute("alt", tech.tech_name);
  //h4
  let head4 = document.createElement("h4");
  head4.setAttribute("class", "white-text");
  //span
  let span = document.createElement("span");
  span.setAttribute("class", "counter");
  span.innerText = tech.tech_name;
  //append child
  head4.appendChild(span);
  number.appendChild(img);
  number.appendChild(head4);
  parent.appendChild(number);
  //
  document.querySelector(".techContainer").appendChild(parent);
});
