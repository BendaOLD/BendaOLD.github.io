const states = [
    [["Hosting", '<span class="material-symbols-outlined">public</span>'], state(7), "OFF"],
    [["Database", '<span class="material-symbols-outlined">database</span>'], state(1), "OFF"],
    [["Register System", '<span class="material-symbols-outlined">account_circle</span>'], state(1), "OFF"],
    [["Login system", '<span class="material-symbols-outlined">login</span>'], state(1), "OFF"],
    [["Comment system", '<span class="material-symbols-outlined">chat</span>'], state(2), "OFF"],
    [["GET/POST", '<span class="material-symbols-outlined">swap_horiz</span>'], state(5), "OFF"],
    [["Uploading System",'<span class="material-symbols-outlined">file_upload</span>'], state(7), "OFF"],
    [["Link/Fetching System", '<span class="material-symbols-outlined">link</span>'], state(6), "OFF"],
    [["Responsive", '<span class="material-symbols-outlined">smartphone</span>'], state(7), "OFF"]
]

function state(number) {
    switch (number) {
        case 1: return ["Operational", "led1"]
        case 2: return ["Slow/Need Performance", "led2"]
        case 3: return ["Degraded Performance", "led3"]
        case 4: return ["Uploading", "led4"]
        case 5: return ["In Mantenaince", "led5"]
        case 6: return ["Fault", "led6"]
        case 7: return ["Dead", "led7"]
    }
}

let section = document.querySelector("section.states")

states.forEach(container => {
    section.innerHTML += 
   `<div class="container">
        <div>
            <h2>${container[0][0]}</h2>
            <p></p>
            ${container[0][1]}
        </div>
        <div>
            <p>${container[1][0]}</p>
            <div class="${container[1][1]}"></div>
        </div>
    </div>`
});

