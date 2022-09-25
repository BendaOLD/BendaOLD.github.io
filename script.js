const states = [
    ["Hosting", 'public', state(7)],
    ["Database", 'database', state(1)],
    ["Register System", 'account_circle', state(1)],
    ["Login system", 'login', state(1)],
    ["Comment system", 'chat', state(1)],
    ["GET/POST", 'swap_horiz', state(1)],
    ["Server", 'dns', state(7)],
    ["Uploading System",'file_upload', state(4)],
    ["Link/Fetching System", 'link', state(7)],
    ["Responsive", 'smartphone', state(7)]
]



function state(number) {
    switch (number) {
        case 1: return ["Operational", "led1"] //Full system works well without any issues.
        case 2: return ["Slow/Need Performance", "led2"] //System doesn't work at 100% of his power, not a big problem.
        case 3: return ["Degraded Performance", "led3"] //System meets a new problem.
        case 4: return ["Uploading", "led4"] //System has turned off to upload a new feature.
        case 5: return ["In Mantenaince", "led5"] //System has turned off to fix a bug.
        case 6: return ["Fault", "led6"] //System has halted and at the moment isn't any way to fix
        case 7: return ["Dead", "led7"] //System isn't alive or haven't been created.
    }
}

let section = document.querySelector("section.states")

states.forEach(container => {
    section.innerHTML += 
   `<div class="container">
        <div>
            <h2>${container[0]}</h2>
            <p></p>
            <span class="material-symbols-outlined">${container[1]}</span>
        </div>
        <div>
            <p>${container[2][0]}</p>
            <div class="${container[2][1]}"></div>
        </div>
    </div>`
});

