/**
 * This is a file to practice various JavaScript concepts
 */

// Practice 1: Outputting text using innerHTML and appendChild

const content = `
    <main>
        <h1>Here is a Title</h1>
        <p>Here is a paragraph</p>
    </main>
`;

const newContent = '<p>This is otherContent</p>';

const main = document.createElement("main");
main.innerHTML = content;
document.body.appendChild(main);

const otherContent = document.createElement("otherContent");
otherContent.innerHTML = newContent;
document.body.appendChild(otherContent);


//document.body.innerHTML=content;

