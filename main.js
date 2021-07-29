const navContent = `
    <a href="./index.html"><li>Home</li></a>
    <a href="./about.html"><li>About Me</li></a>
    <li>My Projects</li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-nav");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);
document.querySelector(".navBlock").append(mainNav);