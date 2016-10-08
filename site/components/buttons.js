const yo = require('yo-yo')

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Dat Buttons</h2>
    <h3 class="hd-xxs sg-label">Button Colors</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <p>
          <a href="#" class="btn">Default Button</a>
        </p>
        <p>
          <a href="#" class="btn btn--green">Green Button</a>
        </p>
        <p>
          <a href="#" class="btn btn--info">Info Button</a>
        </p>
        <p>
          <a href="#" class="btn btn--warning">Warning Button</a>
        </p>
        <p>
          <a href="#" class="btn btn--danger">Error/Danger Button</a>
        </p>
        <p>
          <a href="#" class="btn btn--disabled">Disabled Button</a>
        </p>
        <!-- <a href="#" class="btn btn--green" disabled>Disabled Button</a> -->
      </div>
    </div>
    <h3 class="hd-xxs sg-label">Button Sizes</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <a href="#" class="btn btn--green btn--small">Small Button</a>
        <a href="#" class="btn btn--green">Default Button</a>
        <a href="#" class="btn btn--green btn--large">Large Button</a>
        <a href="#" class="btn btn--green btn--cta">CTA Button</a>
      </div>
    </div>
  </div>
  `
}
