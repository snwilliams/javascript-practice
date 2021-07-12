/**
 * This is a file to practice various JavaScript concepts
 */

// Practice 1: Outputting text using innerHTML

const content = `
    <main>
        <h1>Here is a Title</h1>
        <p>Here is a paragraph</p>
    </main>
`;

const main = document.createElement("main");
main.innerHTML = content;
document.body.appendChild(main);

