import { css, html, } from 'lit'
import { DemoElement } from '../demo/demo-element'
import { customElement, } from 'lit/decorators.js'
import resetStyle from '../demo/reset-style'
import rowStyle from '../demo/row-style'
import strataStyle from './strata-style'

import {
  twitterIcon,
  dribbbleIcon,
  tumblrIcon,
  envelopeIcon,
} from '../demo/icons'

@customElement( 'strata-app' )
export class StrataApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    rowStyle,
    strataStyle,
    css`
  `, ]

  render() {
    return html`
    		<!-- Header -->
			<header id="header">
				<div class="inner">
					<a href="#" class="image avatar">
            <img src="https://picsum.photos/id/823/300/300" alt="" />
          </a>
					<h1><strong>I am Strata</strong>, a super simple<br />
					responsive site template freebie<br />
					crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
				</div>
        <!-- Footer -->
        <footer id="footer">
          <div class="inner">
            <ul class="icons">
              <li><a href="#" class="icon brands fa-twitter">
                ${ twitterIcon }
                <span class="label">Twitter</span>
              </a></li>
              <li><a href="#" class="icon brands fa-twitter">
                ${ tumblrIcon }
                <span class="label">Tumblr</span>
              </a></li>
              <li><a href="#" class="icon brands fa-twitter">
                ${ dribbbleIcon }
                <span class="label">Dribble</span>
              </a></li>
              <li><a href="#" class="icon brands fa-twitter">
                ${ envelopeIcon }
                <span class="label">Email</span>
              </a></li>
            </ul>
            <ul class="copyright">
              <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
			</header>

		<!-- Main -->
			<div id="main">

				<!-- One -->
					<section id="one">
						<header class="major">
							<h2>Ipsum lorem dolor aliquam ante commodo<br />
							magna sed accumsan arcu neque.</h2>
						</header>
						<p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
						<ul class="actions">
							<li><a href="#" class="button">Learn More</a></li>
						</ul>
					</section>

				<!-- Two -->
					<section id="two">
						<h2>Recent Work</h2>
						<div class="row">
							<article class="col-6 col-12-xsmall work-item">
								<a href="#" class="image fit thumb"><img src="https://picsum.photos/id/37/300/200" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href="#" class="image fit thumb"><img src="https://picsum.photos/id/10/300/200" alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href="#" class="image fit thumb"><img src="https://picsum.photos/id/436/300/200" alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href="#" class="image fit thumb"><img src="https://picsum.photos/id/389/300/200" alt="" /></a>
								<h3>Quam neque phasellus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href="#" class="image fit thumb"><img src="https://picsum.photos/id/1045/300/200" alt="" /></a>
								<h3>Nunc enim commodo aliquet</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article class="col-6 col-12-xsmall work-item">
								<a href="#" class="image fit thumb"><img src="https://picsum.photos/id/1003/300/200" alt="" /></a>
								<h3>Risus ornare lacinia</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
						</div>
						<ul class="actions">
							<li><a href="#" class="button">Full Portfolio</a></li>
						</ul>
					</section>

				<!-- Three -->
					<section id="three">
						<h2>Get In Touch</h2>
						<p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
						<div class="row">
							<div class="col-8 col-12-small">
								<form method="post" action="#">
									<div class="row gtr-uniform gtr-50">
										<div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
										<div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
										<div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
									</div>
								</form>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</div>
							<div class="col-4 col-12-small">
								<ul class="labeled-icons">
									<li>
										<h3 class="icon solid fa-home"><span class="label">Address</span></h3>
										1234 Somewhere Rd.<br />
										Nashville, TN 00000<br />
										United States
									</li>
									<li>
										<h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
										000-000-0000
									</li>
									<li>
										<h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
										<a href="#">hello@untitled.tld</a>
									</li>
								</ul>
							</div>
						</div>
					</section>


			</div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'strata-app': StrataApp,
  }
}
