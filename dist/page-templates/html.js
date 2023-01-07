function createHtml(managerCard, engineersCard, internsCard) {
    const htmlTemplate =
    `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>My Team</title>
        <link rel='stylesheet' href='./dist/css/style.css'>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'>
    </head>
    <body>
        <nav>
            <h1>My Team</h1>
        </nav>
        <main>
            <div class='row'>
                <div class='manager'>
                    <div class='manager-card'>
                        ${managerCard}
                    </div>
                </div>
                <div class='employees'>
                    <div class='engineers'>
                        <div class='engineer-cards'>
                            ${engineersCard}
                        </div>
                    </div>
                    <div class='interns'>
                        <div class='intern-cards'>
                            ${internsCard}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>`
    return htmlTemplate
}

module.exports = createHtml