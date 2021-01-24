import React from "react"
import Layout from "./components/Layout"

import exasperatedGif from "./images/exasperated.gif";

const App = () => {
  return (
    <Layout>
      <p>
        This is a cute webpage design I made to look like fairy lights, using SVGs and CSS animations
      </p>
      <section>
        <h2>How it's made</h2>
        <h3>Creating and displaying SVGs</h3>
        <p>
          To create the fairy lights and control switch SVGs I used <a href="https://inkscape.org/">Inkscape</a> to draw the design and save the vector image
          as an SVG. I then cleaned up and edited the SVG (removing extra attributes, converting regular markup to JSX) by hand. This was 
          a bit tedious to do, and I later found that tools exist online to clean up SVGs automatically:&nbsp;
          <a href="https://github.com/svg/svgo">SVG Optimizer</a>, and an online GUI for that tool called&nbsp;
          <a href="https://jakearchibald.github.io/svgomg/">SVGOMG</a>
        </p>
        <h3>Animations</h3>
        <p>
          The flickering effect is created by using basic CSS keyframe animations. To make the lights twinkle separately, and not all in sync, I used 3 different CSS rules
          to apply the same keyframe animation but with different <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay">animation delays</a>. 
        </p>
        <h3>Adding togglable light- and dark-mode styles</h3>
        <p>
          I initially started with a strategy of adding a <code>.light</code> or <code>.dark</code> CSS classes to elements to change the colour of elements. 
          Soon after starting I got a bad feeling about that approach; I'd need to have logic everywhere to control which class gets added to the elements, and that felt wasteful.
          After looking at an article describing different strategies on <a href="https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#toggling-themes">CSS Tricks</a>, I
          decided to control styles by toggling a class on the  <code>&lt;body&gt;</code> tag.
        </p>
      </section>
      <section>
        <h2>Challenges</h2>
        <h3>Differences in how browsers and devices render SVGs</h3>
        <p>
          Something that had me totally stumped is why the bulbs, i.e. the animated portions of the SVG, were not displayed on iPhone devices (both Safari and Chrome), but are displayed as expected on Android devices.
        </p>
        <p>
          This prompted a lot of googling, which led me down a rabbit hole of thinking about whether SVGs could be so resource-hungry that they're not displayed on iPhones. The closest I got was this find, which didn't help me: <a href="https://greensock.com/forums/topic/18285-animations-are-not-shown-only-on-iphone-devices/">Animations are not shown, only on iPhone devices</a>  
        </p>
        <p>
          But then I had the <em>radical</em> idea to open the project in Safari on my laptop. Oh... the same elements are not being displayed... so it's not strictly device specific? 
        </p>
        <figure>
          <img className="gif" src={exasperatedGif}/>
          <figcaption>Why didn't I look at this project in a browser other than Chrome earlier?</figcaption>
        </figure>
        <h3>Solution</h3>
        <p>It turned out the issue was simple: I was setting the <code>rx</code> and <code>ry</code> attributes in CSS without explicit units, and that worked fine on desktop and Android Chrome but not on Safari or iOS Chrome (???)</p>
        <p>Just adding units to the CSS made the bulbs visible and animated again:</p>
        <code className="block">
          {`.bulbs ellipse {
  rx: 2.5px;
  ry: 2.5px;
}`}
        </code>
      </section>
    </Layout>
  )
}

export default App;
