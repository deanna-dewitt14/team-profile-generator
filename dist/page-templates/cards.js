function generateManagerCard (manager) {
    var managerCard =
    `<div class='col'>
        <div class='card'>
            <div class='card-title'>
                <h2 class='name'>${manager.name}</h3>
                <h3 class='type'>Manager</h4>
            </div>
            <div class='card-body'>
            <p>ID: <span class='ID'>${manager.id}</span></p>
                <p>Email: <span class='Email'><a href='mailto:${manager.email}'>${manager.email}</a></span></p>
                <p>Office Number: <span class='officeNumber'>${manager.officeNumber}</span></p>
            </div>
        </div>
    </div>`
return managerCard
}

function generateEngineersCard (engineers) {
    let engineersCard = ``
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card =
        `<div class='col'>
            <div class='card'>
                <div class='card-title'>
                    <h2 class='name'>${engineer.name}</h3>
                    <h3 class='type'>Engineer</h4>
                </div>
                <div class='card-body'>
                    <p>ID: <span class='ID'>${engineer.id}</span></p>
                    <p>Email: <span class='Email'><a href='mailto:${engineer.email}'>${engineer.email}</a></span></p>
                    <p>Github: <span class='Github'><a href='https://www.github.com/${engineer.gitHub}'  target='_blank'>${engineer.gitHub}</a></span></p>
                </div>
            </div>
        </div>`
    engineersCard += card
    }

    return engineersCard
}

function generateInternsCard (interns) {
    let internsCard = ``
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card =
        `<div class='col'>
            <div class='card'>
                <div class='card-title'>
                    <h2 class='name'>${intern.name}</h3>
                    <h3 class='type'>Intern</h4>
                </div>
                <div class='card-body'>
                    <p>ID: <span class='ID'>${intern.id}</span></p>
                    <p>Email: <span class='Email'><a href='mailto:${intern.email}'>${intern.email}</a></span></p>
                    <p>School: <span class='Github'>${intern.school}</span></p>
                </div>
            </div>
        </div>`
    internsCard += card
    }

    return internsCard
}


module.exports = { generateManagerCard, generateEngineersCard, generateInternsCard }