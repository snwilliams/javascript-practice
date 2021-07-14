/**
 * This is a file to practice various JavaScript concepts
 */

// Practice 1: Outputting text using innerHTML and appendChild
// To build on what I've learned doing this, I am going to make
// a nav element

const navContent = `
    <li>Home</li>
    <li>About Me</li>
    <li>My Projects</li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-nav");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".header").append(mainNav);




