function selectTab (id) {
    document.querySelectorAll(".route").forEach(item => {
        item.classList.remote('selected');
    });
    document.querySelectorAll(`#${id}`).forEach(item => {
        item.classList.add('selected');
    });
}

function loadContent(id) {
    console.log(`Loading content for {${id}}`);
    //run fetch API to update resources
    document.querySelector("#content").innerHTML = `Content loading for ${id}...`;
}

function push(e) {
    let id = e.target.id;
    selectTab(id);
    document.title=id;
    loadContent(id);
    window.history.pushState({id}, `${id}`, `/page/${id}`);
}

window.onload = event => {
    window["home"].addEventListener("click", event=>push(event));
    window["about"].addEventListener("click", event => push(event));
    window["projects"].addEventListener("click", event => push(event));
}

window.addEventListener("popstate", event => {
    let stateId = event.state.id;
    console.log("stateId = ", stateId);
    selectTab(stateId);
    loadContent(stateId);
})