import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import hyperspaceStyle from './hyperspace-style'
import {
  homeIcon,
  cogIcon,
  flashIcon,
  starIcon,
  lockIcon,
  whatsappIcon,
  twitterIcon,
  dribbbleIcon,
  tumblrIcon,
  instagramIcon,
  envelopeIcon,
} from '../demo/icons'
import resetStyle from '../demo/reset-style';

@customElement( 'hyperspace-app' )
export class HyperspaceApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    hyperspaceStyle,
    css`
  `, ]

  render() {
    return html`
      <div id="page-wrapper">
    	<!-- Sidebar -->
			<section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#one">Who we are</a></li>
							<li><a href="#two">What we do</a></li>
							<li><a href="#three">Get in touch</a></li>
						</ul>
					</nav>
				</div>
			</section>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Intro -->
					<section id="intro" class="wrapper style1 fullscreen fade-up">
						<div class="inner">
							<h1>Hyperspace</h1>
							<p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
							and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
							<ul class="actions">
								<li><a href="#one" class="button scrolly">Learn more</a></li>
							</ul>
						</div>
					</section>

				<!-- One -->
					<section id="one" class="wrapper style2 spotlights">
						<section>
							<a href="#" class="image"><img src="https://picsum.photos/id/816/400/400" alt="" data-position="center center" /></a>
							<div class="content">
								<div class="inner">
									<h2>Sed ipsum dolor</h2>
									<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
									<ul class="actions">
										<li><a href="generic.html" class="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="#" class="image"><img src="https://picsum.photos/id/579/400/400" alt="" data-position="top center" /></a>
							<div class="content">
								<div class="inner">
									<h2>Feugiat consequat</h2>
									<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
									<ul class="actions">
										<li><a href="generic.html" class="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="#" class="image"><img src="https://picsum.photos/id/685/400/400" alt="" data-position="25% 25%" /></a>
							<div class="content">
								<div class="inner">
									<h2>Ultricies aliquam</h2>
									<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
									<ul class="actions">
										<li><a href="generic.html" class="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
					</section>

				<!-- Two -->
					<section id="two" class="wrapper style3 fade-up">
						<div class="inner">
							<h2>What we do</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div class="features">
								<section>
									<span class="icon">
                    ${ homeIcon }
                  </span>
                  <div>
                    <h3>Lorem ipsum amet</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                  </div>
								</section>
								<section>
									<span class="icon">
                    ${ cogIcon }
                  </span>
                  <div>
                    <h3>Aliquam sed nullam</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                  </div>
								</section>
								<section>
									<span class="icon">
                    ${ flashIcon }
                  </span>
                  <div>
                    <h3>Sed erat ullam corper</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                  </div>
								</section>
								<section>
									<span class="icon">
                    ${ starIcon }
                  </span>
                  <div>
                    <h3>Veroeros quis lorem</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                  </div>
								</section>
								<section>
									<span class="icon">
                    ${ lockIcon }
                  </span>
                  <div>
                    <h3>Urna quis bibendum</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                  </div>
								</section>
								<section>
									<span class="icon">
                    ${ envelopeIcon }
                  </span>
                  <div>
                    <h3>Aliquam urna dapibus</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                  </div>
								</section>
							</div>
							<ul class="actions">
								<li><a href="generic.html" class="button">Learn more</a></li>
							</ul>
						</div>
					</section>

				<!-- Three -->
					<section id="three" class="wrapper style1 fade-up">
						<div class="inner">
							<h2>Get in touch</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div class="split style1">
								<section>
									<form method="post" action="#">
										<div class="fields">
											<div class="field half">
												<label for="name">Name</label>
												<input type="text" name="name" id="name" />
											</div>
											<div class="field half">
												<label for="email">Email</label>
												<input type="text" name="email" id="email" />
											</div>
											<div class="field">
												<label for="message">Message</label>
												<textarea name="message" id="message" rows="5"></textarea>
											</div>
										</div>
										<ul class="actions">
											<li><a href="" class="button submit">Send Message</a></li>
										</ul>
									</form>
								</section>
								<section>
									<ul class="contact">
										<li>
											<h3>Address</h3>
											<span>12345 Somewhere Road #654<br />
											Nashville, TN 00000-0000<br />
											USA</span>
										</li>
										<li>
											<h3>Email</h3>
											<a href="#">user@untitled.tld</a>
										</li>
										<li>
											<h3>Phone</h3>
											<span>(000) 000-0000</span>
										</li>
										<li>
											<h3>Social</h3>
											<ul class="icons">
												<li><a href="#" class="icon brands">
                          ${ whatsappIcon }
                          <span class="label">Whatsapp</span></a>
                        </li>
												<li><a href="#" class="icon brands">
                          ${ twitterIcon }
                          <span class="label">Twitter</span></a>
                        </li>
												<li><a href="#" class="icon brands">
                          ${ dribbbleIcon }
                          <span class="label">Dribbble</span></a>
                        </li>
												<li><a href="#" class="icon brands">
                          ${ tumblrIcon }
                          <span class="label">Tumblr</span></a>
                        </li>
												<li><a href="#" class="icon brands">
                          ${ instagramIcon }
                          <span class="label">Instagram</span></a>
                        </li>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>

			</div>

		<!-- Footer -->
			<footer id="footer" class="wrapper style1-alt">
				<div class="inner">
					<ul class="menu">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hyperspace-app': HyperspaceApp,
  }
}
