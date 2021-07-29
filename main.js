const appendNavBar = () => {
  const navContent = `
    <li id="home">Home</li>
    <li id="about">About Me</li>
    <li id="projects">My Projects</li>
`;

  const mainNav = document.createElement("nav");
  mainNav.classList.add("main-nav");
  const navList = document.createElement("ul");
  navList.innerHTML = navContent;
  mainNav.append(navList);
  document.querySelector(".navBlock").append(mainNav);
};

appendNavBar();

const homeContent = `
<h1>This is the home page!</h1>
`;

const aboutContent = `
<h1>This is the about me content</h1>
`;

const homeNav = document.querySelector("#home");
const aboutNav = document.querySelector("#about");

const testContent = (content) => {
  document.querySelector("main").innerHTML = content;
};

homeNav.addEventListener(
  "click",
  () => {
    testContent(homeContent);
  },
  false
);

aboutNav.addEventListener(
  "click",
  () => {
    testContent(aboutContent);
  },
  false
);

const appendContent = (content) => {
  const mainContent = document.createElement("main");
  mainContent.classList.add("main-content");
  mainContent.innerHTML = content;
  document.querySelector("body").append(mainContent);
};

testContent(homeContent);
