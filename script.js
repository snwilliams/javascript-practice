/**
 * This is a file to practice various JavaScript concepts
 */

// Practice 1: Outputting text using template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const content = `
    <main>
        <h1>Here is a Title</h1>
        <p>Here is a paragraph</p>
    </main>
`;

const main = document.createElement("main");
main.innerHTML = content;
document.body.appendChild(main);

