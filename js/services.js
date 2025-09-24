const Service = [
  {
    icon: "fa fa-code",
    title: "Web Development",
    details: `94DEV are all about web development. We challenge to deliver
                highly functional web apps with responsive UI/UX.`,
  },
  {
    icon: "fa fa-cloud",
    title: "Cloud Architecting",
    details: `94DEV are specialists in cloud computing with expertise
        knowledge in AWS, GCP, Heroku etc..`,
  },
  {
    icon: "fa fa-cogs",
    title: "Scripting & Automation",
    details: `Web automation, CICD, AWS Cloud Formation scripts, Docker
        scripts, Testing scripts, etc.. 94DEV got you covered.`,
  },
  {
    icon: "fa fa-mobile",
    title: "Mobile App Development",
    details: `94DEV develop feature rich visibly appealing mobile apps and
        PWAs.`,
  },
  {
    icon: "fa fa-desktop",
    title: "Desktop App Development",
    details: `94DEV develop Electron.js based crossplatform desktop apps.`,
  },
  {
    icon: "fa fa-shopping-cart",
    title: "E-Commerce Development",
    details: `Reach your customers online with 94DEV's specialized marketing
        technologies and SEO.`,
  },
  {
    icon: "fa fa-microchip",
    title: "IoT",
    details: `94DEV are here to help you connect your devices to the real
        world, making them Smart and create new value for your
        business..`,
  },
  {
    icon: "fa fa-server",
    title: "Anything New and Cool",
    details: `Our creative motivated team is very addeptive to new
        technologies.`,
  },
];

Service.map((service) => {
  //col-md-4
  let parent = document.createElement("div");
  parent.setAttribute("class", "col-md-4");
  //about
  let about = document.createElement("div");
  about.setAttribute("class", "about");
  //icon
  let icon = document.createElement("i");
  icon.setAttribute("class", service.icon);
  //h3
  let h3 = document.createElement("h3");
  h3.textContent = service.title;
  //details
  let details = document.createElement("p");
  details.textContent = service.details;
  //append child
  about.appendChild(icon);
  about.appendChild(h3);
  about.appendChild(details);
  parent.appendChild(about);

  //
  document.querySelector(".serviceContainer").appendChild(parent);
});
