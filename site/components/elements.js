const yo = require('yo-yo')

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Paragraphs, Lists and Blockquotes</h2>
    <h3 class="hd-xxs sg-label">Paragraphs</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <p class="lead">
          This is a lead paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <h3 class="hd-xxs sg-label">Unordered List</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <ul>
          <li>a list item</li>
          <li>another list item</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>one more thing on a list</li>
        </ul>
      </div>
    </div>
    <h3 class="hd-xxs sg-label">Ordered List</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <ol>
          <li>a list item</li>
          <li>another list item</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ol>
      </div>
    </div>
    <h3 class="hd-xxs sg-label">Plain Lists</h3>
    <div class="sg-subsection">
      <p>You can add <code class="sg-code">class="list-plain"</code> to <code class="sg-code">&lt;ul&gt;</code> and <code class="sg-code">&lt;ol&gt;</code> elements to remove the padding, margin, and list-style-type easily. There is also an scss mixin by the same name available.</p>
      <div class="sg-example">
        <ol class="list-plain">
          <li>a list item from an &lt;ol&gt; with class="list-plain"</li>
          <li>another list item</li>
          <li>etc</li>
        </ol>
      </div>
    </div>
    <h3 class="hd-xxs sg-label">Blockquote</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <figure class="blockquote">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </blockquote>
          <figcaption>
            – Source of the Quote
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
  `
}
