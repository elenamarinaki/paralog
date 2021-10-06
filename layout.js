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
            <header>
                <div class="center width-sm row" id="palettes">
                    <img src="images/color-wheel.svg" alt="Colour Palette" />
                    <h1>Colour Generator</h1>
                </div>
            </header>

            <main class="center width-sm stack-lg">
                <section>
                    <div id="sub-header" class="stack-sm">
                    A fun random colour generator :) Generate new combinations, tap a box
                    to change its colour and save your palette! On mobile, shake your
                    device for a surprise &#x1F609;
                    <div class="row">
                        Made by @elenamarinaki
                        <a href="https://github.com/elenamarinaki" target="_blank"
                        ><img src="images/github.svg" alt="github logo"
                        /></a>
                    </div>
                    </div>
                </section>
                ${content}
            
            </main>
        </body>
    </html>
    `;
}

module.exports = { layout };
