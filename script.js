let counter = 0;

window.onscroll = function() {
    counter++
    let random = Math.floor(Math.random() * (40 - 5) + 5)
    if(counter%random == 0) {
        const tag = document.createElement("a")
        tag.setAttribute("href", "https://nl.wikipedia.org/wiki/Lotenhulle")
        tag.className = "link"
        const text = document.createTextNode("WIKIPEDIA")
        tag.appendChild(text)
        const element = document.getElementById("titles")
        element.appendChild(tag)
    }
    const tag = document.createElement("p")
    tag.className = "title"
    const text = document.createTextNode("LOTENHULLE")
    tag.appendChild(text)
    const element = document.getElementById("titles")
    element.appendChild(tag)
}

