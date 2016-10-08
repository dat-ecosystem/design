const yo = require('yo-yo')

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Dat Logo</h2>
    <h3 class="hd-xxs sg-label">Dat Data Logo</h3>
    <div class="sg-subsection">
      <p>
        <img src="downloads/dat-data-logo.svg" alt="Dat Data Logo" class="sg-subsection__img" />
        This is the Dat logo. It consists of the hexagon in Dat green and the centered "dat DATA" set in Source Sans. Only use it when it can be displayed at least 60px tall, in order to keep the text legible.
      </p>
      <p>
        <a href="downloads/dat-data-logo.svg">Download .svg</a> | <a href="downloads/dat-data-logo.png">Download .png</a>
      </p>
    </div>
    <h3 class="hd-xxs sg-label">Dat Hexagon</h3>
    <div class="sg-subsection">
      <p>
        <img src="downloads/dat-hexagon.svg" alt="Dat Hexagon" class="sg-subsection__img" />
        Use the green hexagon without text when the logo is displayed in small sizes, e.g. in small header bars or favicons.
      </p>
      <p>
        <a href="downloads/dat-hexagon.svg">Download .svg</a> | <a href="downloads/dat-hexagon.png">Download .png</a>
      </p>
    </div>
  </div>
  `
}
