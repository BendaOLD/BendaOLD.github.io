const states = [
    {
        "system": "Hosting",
        "icon": 'public',
        "state": state(1)
    },
    {
        "system": "Database",
        "icon": 'database',
        "state": state(1)
    },
    {
        "system": "Register System",
        "icon": 'account_circle',
        "state": state(2)
    },
    {
        "system": "Login System",
        "icon": 'login',
        "state": state(2)
    },
    {
        "system": "Comment System",
        "icon": 'chat',
        "state": state(2)
    },
    {
        "system": "GET/POST",
        "icon": 'swap_horiz',
        "state": state(1)
    },
    {
        "system": "Server",
        "icon": 'dns',
        "state": state(1)
    },
    {
        "system": "Uploading System",
        "icon": 'file_upload',
        "state": state(6)
    },
    {
        "system": "Link/Fetching System",
        "icon": 'link',
        "state": state(1)
    },
    {
        "system": "Front-End",
        "icon": 'palette',
        "state": state(5)
    },
    {
        "system": "Responsive",
        "icon": 'smartphone',
        "state": state(7)
    }
]

function state(number) {
    switch (number) {
        case 1: return ["Operational", "led1"] //Full system works well without any issues.
        case 2: return ["Need Performance", "led2"] //System doesn't work at 100% of his power, not a big problem.
        case 3: return ["Degraded Performance", "led3"] //System meets a new problem.
        case 4: return ["Updating", "led4"] //System has turned off to upload a new feature.
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
            <h2>${container.system}</h2>
            <p></p>
            <span class="material-symbols-outlined">${container.icon}</span>
        </div>
        <div class="state">
            <p>${container.state[0]}</p>
            <div class="${container.state[1]} led"></div>
        </div>
    </div>`
});

