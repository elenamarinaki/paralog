function layout(title, content) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Exploring the alternative" />
            <meta
            name="keywords"
            content="Posts, Blog, Comedy"
            />
            <meta name="author" content="Elena Marinaki" />
            <title>${title}</title>
        </head>
        <body>    
            ${content}
            
            <footer>
                <section>
                    <div class="row">
                        Made by @elenamarinaki
                        <a href="https://github.com/elenamarinaki" target="_blank"
                        ><img src="images/github.svg" alt="github logo"
                        /></a>
                    </div>
                    </div>
                </section>
            </footer>
        </body>
    </html>
    `;
}

module.exports = { layout };
