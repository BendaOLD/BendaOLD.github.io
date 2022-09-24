const states = [
    ["Hosting", state(7), "OFF"],
    ["Database", state(1), "OFF"],
    ["Register system", state(1), "OFF"],
    ["Login system", state(1), "OFF"],
    ["Comment system", state(2), "OFF"],
    ["GET/POST", state(5), "OFF"],
    ["Uploading System", state(7), "OFF"],
    ["Link/Fetching System", state(6), "OFF"],
    ["Responsive", state(7), "OFF"]
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
            <h2>${container[0]}</h2>
            <p></p>
        </div>
        <div>
            <p>${container[1][0]}</p>
            <div class="${container[1][1]}"></div>
        </div>
    </div>`
});

