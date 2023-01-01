import { css } from "lit";

const dopetropeStyle = css`

/* Basic */

		body.is-preload *, body.is-preload *:before, body.is-preload *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

	body, input, textarea, select {
		font-family: 'Source Sans Pro';
		font-weight: 300;
		color: #5d5d5d;
		font-size: 14pt;
		line-height: 1.75em;
	}

	strong, b {
		color: #252122;
		font-weight: 400;
	}

	i, em {
		font-style: italic;
	}

	sub {
		position: relative;
		top: 0.5em;
		font-size: 0.8em;
	}

	sup {
		position: relative;
		top: -0.5em;
		font-size: 0.8em;
	}

	blockquote {
		border-left: solid 0.75em #dddddd;
		padding: 1em 0 1em 1.5em;
		font-style: italic;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #252122;
		font-weight: 700;
	}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
	}

	h2 {
		font-size: 1.5em;
	}

	h3 {
		font-size: 1.35em;
	}

	a {
		color: #d52349;
		text-decoration: underline;
	}

		a:hover {
			text-decoration: none;
		}

	br.clear {
		clear: both;
	}

	hr {
		border: 0;
		border-top: solid 1px #dddddd;
		height: 1px;
		margin: 2em 0 2em 0;
	}

	p, ul, ol, dl, table {
		margin-bottom: 2em;
	}



/* Form */

	form label {
		display: block;
		color: #252122;
		font-weight: 400;
		margin: 0 0 0.5em 0;
	}

	form input[type=text],
	form input[type=email],
	form input[type=password],
	form select,
	form textarea {
		-webkit-appearance: none;
		display: block;
		border: 0;
		padding: 0.75em 1em;
		font-size: 1em;
		border-radius: 5px;
		border: solid 1px #dddddd;
		background: #fff;
		width: 100%;
	}

		form input[type=text]:focus,
		form input[type=email]:focus,
		form input[type=password]:focus,
		form select:focus,
		form textarea:focus {
			box-shadow: inset 0px 0px 1px 1px #43bff0;
		}

	form textarea {
		height: 15em;
	}

	form ::-webkit-input-placeholder {
		color: #555 !important;
	}

	form :-moz-placeholder {
		color: #555 !important;
	}

	form ::-moz-placeholder {
		color: #555 !important;
	}

	form :-ms-input-placeholder {
		color: #555 !important;
	}

	form ::-moz-focus-inner {
		border: 0;
	}

/* Tables */

	table {
		width: 100%;
	}

		table tr {
			border-top: solid 1px #dddddd;
		}

			table tr:first-child {
				border-top: 0;
			}

		table td {
			padding: 0.5em 1em 0.5em 1em;
		}

		table th {
			text-align: left;
			padding: 0.5em 1em 0.5em 1em;
			font-weight: 700;
			margin: 0 0 1em 0;
		}

		table thead {
			border-bottom: solid 2px #dddddd;
		}

/* Section/Article */

	section, article {
		margin-bottom: 2.5em;
	}

		section > :last-child, section:last-child, article > :last-child, article:last-child {
			margin-bottom: 0;
		}

	header {
		margin: 0 0 1.5em 0;
	}

		header > p {
			display: block;
			font-style: italic;
			margin: 0.5em 0 0 0;
			padding-bottom: 0.5em;
		}

		header.major {
			position: relative;
			text-align: center;
			border-top: solid 1px #ccc;
			top: 1em;
			margin: 0 0 3em 0;
		}

			header.major h2 {
				background: #fff;
				position: relative;
				top: -0.65em;
				display: inline;
				margin: 0;
				padding: 0 1em 0 1em;
			}

	footer {
		margin: 2.25em 0 0 0;
	}

/* Box */

	.box {
		background: #ffffff;
		border-bottom: solid 1px #ccc;
		padding: 2.75em 1.75em 2.75em 1.75em;
	}

		.box .image.featured {
			position: relative;
			width: auto;
			left: 1.75em;
			top: 1.75em;
			margin: -4.5em 0 4.25em -3.5em;
		}

		.box.post header {
			padding-top: 1em;
			margin: 0 0 2em 0;
		}

		.box.post h2 {
			font-size: 2.5em;
			letter-spacing: -0.015em;
		}

		.box.post header > p {
			margin-top: 1.25em;
			font-size: 1.25em;
		}

		.box footer ul.actions {
			margin-bottom: 0;
		}

/* Button */

	input[type="button"],
	input[type="submit"],
	input[type="reset"],
	button,
	.button {
		-webkit-appearance: none;
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		border: 0;
		border-radius: 5px;
		background: #d52349;
		color: #fff !important;
		font-weight: 700;
		outline: 0;
		font-size: 1.1em;
		padding: 0.65em 1.5em 0.65em 1.5em;
		text-align: center;
		-moz-transition: background-color .25s ease-in-out;
		-webkit-transition: background-color .25s ease-in-out;
		-ms-transition: background-color .25s ease-in-out;
		transition: background-color .25s ease-in-out;
	}

		input[type="button"]:hover,
		input[type="submit"]:hover,
		input[type="reset"]:hover,
		button:hover,
		.button:hover {
			background: #e53359;
		}

		input[type="button"]:active,
		input[type="submit"]:active,
		input[type="reset"]:active,
		button:active,
		.button:active {
			background: #c51349;
		}

		input[type="button"].alt,
		input[type="submit"].alt,
		input[type="reset"].alt,
		button.alt,
		.button.alt {
			background: #252122;
		}

			input[type="button"].alt:hover,
			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			button.alt:hover,
			.button.alt:hover {
				background: #353132;
			}

			input[type="button"].alt:active,
			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			button.alt:active,
			.button.alt:active {
				background: #151112;
			}

		input[type="button"].icon:before,
		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		button.icon:before,
		.button.icon:before {
			opacity: 0.35;
			position: relative;
			top: 0.05em;
			margin-right: 0.75em;
		}

		input[type="button"].large,
		input[type="submit"].large,
		input[type="reset"].large,
		button.large,
		.button.large {
			font-size: 1.5em;
			padding: 0.75em 1.5em 0.75em 1.5em;
		}

/* Image */

	.image {
		display: inline-block;
		outline: 0;
	}

		.image img {
			display: block;
			width: 100%;
		}

		.image.centered {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.centered img {
				margin: 0 auto;
				width: auto;
			}

		.image.featured {
			display: block;
			width: 100%;
			margin: 0 0 2em 0;
		}

		.image.left {
			float: left;
			margin: 0 2em 2em 0;
		}

/* List */

	ul {
		list-style: disc;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
		}

	ol {
		list-style: decimal;
		padding-left: 1.25em;
	}

		ol li {
			padding-left: 0.25em;
		}

/* Actions */

	ul.actions {
		list-style: none;
		padding-left: 0;
	}

		ul.actions li {
			display: inline-block;
			margin-left: 1em;
			padding-left: 0;
		}

			ul.actions li:first-child {
				margin-left: 0;
			}

/* Links */

	ul.links {
		list-style: none;
		padding-left: 0;
	}

		ul.links li {
			display: inline-block;
			border-left: solid 1px rgba(255, 255, 255, 0.05);
			padding: 0 0 0 1em;
			margin: 0 0 0 1em;
		}

			ul.links li:first-child {
				border-left: 0;
				padding-left: 0;
				margin-left: 0;
			}

/* Contact */

	ul.contact {
		list-style: none;
		padding-left: 0;
	}

		ul.contact li {
			position: relative;
			border-top: solid 1px #ddd;
			padding: 1.3em 0 1.3em 7em;
		}

			ul.contact li h3 {
				position: absolute;
				left: 0;
				top: 1.3em;
				font-size: 1.1em;
			}

			ul.contact li p {
				margin: 0;
			}

			ul.contact li:first-child {
				padding-top: 0;
				border-top: 0;
			}

				ul.contact li:first-child h3 {
					top: 0;
				}

/* Dates */

	ul.dates {
		list-style: none;
		padding-left: 0;
	}

		ul.dates li {
			position: relative;
			border-top: solid 1px #ddd;
			padding: 1.3em 0 1.3em 6.75em;
		}

		ul.dates .date {
			display: block;
			position: absolute;
			left: 0;
			top: 1.3em;
			background-color: #d52349;
			height: 3.5em;
			text-align: center;
			color: #fff;
			line-height: 1em;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
			padding: 0.5em 0.75em 0 1em;
		}

			ul.dates .date:after {
				content: '';
				position: absolute;
				bottom: 0;
				right: -1.2em;
				border-left: solid 1.25em #d52349;
				border-top: solid 1.8em transparent;
				border-bottom: solid 1.8em transparent;
			}

			ul.dates .date strong {
				display: block;
				font-size: 1.75em;
				padding-top: 0.15em;
			}

		ul.dates h3 {
			font-size: 1.1em;
		}

		ul.dates p {
			margin: 0;
		}

		ul.dates li:first-child {
			border-top: 0;
			padding-top: 0;
		}

			ul.dates li:first-child .date {
				top: 0;
			}

/* Divided */

	ul.divided {
		list-style: none;
		padding-left: 0;
	}

		ul.divided li {
			border-top: solid 1px #ddd;
			padding: 1em 0 1em 0;
		}

			ul.divided li:first-child {
				border-top: 0;
				padding-top: 0;
			}

/* Social */

	ul.social {
		list-style: none;
		padding-left: 0;
		overflow: hidden;
		cursor: default;
		margin: 0 0 3.25em 0;
	}

		ul.social li {
			display: inline-block;
			padding-left: 0;
			margin-left: 0.75em;
		}

			ul.social li:first-child {
				margin-left: 0;
			}

			ul.social li a {
				display: inline-block;
				width: 3em;
				height: 3em;
				text-align: center;
				border-radius: 5px;
				background: #888;
				-moz-transition: background-color .25s ease-in-out;
				-webkit-transition: background-color .25s ease-in-out;
				-ms-transition: background-color .25s ease-in-out;
				transition: background-color .25s ease-in-out;
			}

				ul.social li svg {
					fill: #fff;
					font-size: 2em;
					line-height: 1.5em;
				}

				ul.social li a.fa-facebook {
					background: var( --demo-brand-whatsapp );
				}

					ul.social li a.fa-facebook:hover {
						background: var( --demo-brand-whatsapp-active );
					}

				ul.social li a.fa-twitter {
            background: var( --demo-brand-twitter );
				}

					ul.social li a.fa-twitter:hover {
            background: var( --demo-brand-twitter-active );
					}

				ul.social li a.fa-dribbble {
					background: var( --demo-brand-dribbble );
				}

					ul.social li a.fa-dribbble:hover {
						background: var( --demo-brand-dribbble-active );
					}

				ul.social li a.fa-instagram {
					background: var( --demo-brand-instagram );
					/* background: pink; */
				}

					ul.social li a.fa-instagram:hover {
					background: var( --demo-brand-instagram-active );
					}

				ul.social li a.fa-tumblr {
					background: var( --demo-brand-tumblr );
				}

					ul.social li a.fa-tumblr:hover {
            background: var( --demo-brand-tumblr-active );
					}


/* Icons */

	.icon {
		text-decoration: none;
		position: relative;
		text-decoration: none;
	}

		.icon:before {
			line-height: inherit;
		}

		.icon > .label {
			display: none;
		}

		.icon.featured {
			position: relative;
			display: inline-block;
			background-color: #d52349;
			width: 9rem;
			padding: 1.75em 0 0.75em 0;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			margin: 0 0 4.5em 0;
			cursor: default;
		}
		.icon.featured svg {
      width: 5rem;
      height: 5rem;
      /* margin:1rem 0; */
				fill: #fff;
		}

			.icon.featured:after {
				content: '';
				position: absolute;
				bottom: -1.95rem;
				left: 0;
				border-top: solid 2rem #d52349;
				border-left: solid 4.5rem transparent;
				border-right: solid 4.5rem transparent;
			}

			.icon.featured.alt {
				background-color: #252122;
			}

				.icon.featured.alt:after {
					border-top-color: #252122;
				}

			.icon.featured.alt2 {
				background-color: #827a7c;
			}

				.icon.featured.alt2:after {
					border-top-color: #827a7c;
				}

/* Page Wrapper */

	#page-wrapper > section {
		margin-bottom: 0;
	}

/* Header */

	#header {
		position: relative;
		background: #ffffff;
		border-bottom: solid 1px #ccc;
		padding: 5em 0 4em 0;
		text-align: center;
	}

		#header h1 {
			color: #252122;
			font-weight: 900;
			font-size: 2.5em;
			letter-spacing: -0.035em;
			line-height: 1;
		}

/* Nav */

	#nav {
		margin: 2.5em 0 0 0;
	}

		#nav > ul {
			margin: 0;
		}

			#nav > ul > li {
				display: inline-block;
				font-style: italic;
				margin: 0 0.35em 0 0.35em;
			}

				#nav > ul > li > ul {
					display: none;
				}

				#nav > ul > li > a {
					border-radius: 5px;
					color: #5d5d5d;
					text-decoration: none;
					padding: 0.6em 1.2em 0.6em 1.2em;
					-moz-transition: background-color .25s ease-in-out;
					-webkit-transition: background-color .25s ease-in-out;
					-ms-transition: background-color .25s ease-in-out;
					transition: background-color .25s ease-in-out;
					outline: 0;
				}

				#nav > ul > li:hover > a, #nav > ul > li.active > a {
					background: #f3f3f3;
				}

				#nav > ul > li.current > a {
					background: #d52349;
					color: #fff !important;
					font-weight: 700;
				}

	.dropotron {
		border-radius: 5px;
		background-color: #252122;
		background-color: rgba(34, 30, 31, 0.98);
		padding: 1.25em 1.5em 1.25em 1.5em;
		font-style: italic;
		min-width: 13em;
		box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.5);
		text-align: left;
		margin-top: -1.25em;
		margin-left: -1px;
		list-style: none;
	}

		.dropotron a, .dropotron span {
			color: #aaa;
			text-decoration: none;
			-moz-transition: color .25s ease-in-out;
			-webkit-transition: color .25s ease-in-out;
			-ms-transition: color .25s ease-in-out;
			transition: color .25s ease-in-out;
		}

		.dropotron li {
			padding: 0.25em 0 0.25em 0;
		}

			.dropotron li:hover > a, .dropotron li:hover > span {
				color: #fff;
			}

		.dropotron.level-0 {
			margin-top: 2em;
		}

			.dropotron.level-0:before {
				content: '';
				display: block;
				position: absolute;
				left: 50%;
				margin-left: -10px;
				top: -9px;
				border-left: solid 10px transparent;
				border-right: solid 10px transparent;
				border-bottom: solid 10px #252122;
				border-bottom-color: rgba(34, 30, 31, 0.98);
			}

/* Banner */

	#banner {
		background: #f9ca70 url("https://picsum.photos/id/102/1920/1080");
		background-position: bottom center;
    background-size: cover;
		background-repeat: no-repeat;
		text-align: center;
		position: relative;
		padding: 8em 0;
		margin: 4em 0 0 0;
	}

		#banner header {
			background-color: rgba(34, 30, 31, 0.98);
			display: inline-block;
			padding: 2.5em 5em;
			border-radius: 5px;
		}

			#banner header h2 {
				color: #fff;
				font-weight: 700;
				font-size: 2.5em;
				margin: 0 0 0.65em 0;
			}

			#banner header p {
				color: #d52349;
				padding: 0;
				font-style: normal;
				margin: 0;
				font-size: 1.5em;
			}

/* Intro */

	#intro {
		text-align: center;
		overflow: hidden;
	}

		#intro section {
			margin: 3em 0;
			padding: 2.5em 0;
		}

		#intro h2 {
			font-size: 1.75em;
		}

		#intro p {
			margin: 0;
		}

		#intro .middle {
			position: relative;
			z-index: 1;
		}

			#intro .middle:before {
				content: '';
				width: 32px;
				height: 100%;
				position: absolute;
				left: -24px;
				top: 0;
				display: block;
				z-index: -1;
				box-shadow: 32px 0 0 0 #fff, 0 -32px 0 0 #fff, 0 32px 0 0 #fff, 32px 32px 0 0 #fff, 32px -32px 0 0 #fff, 0 0 32px 0 rgba(0, 0, 0, 0.15);
			}

			#intro .middle:after {
				content: '';
				width: 32px;
				height: 100%;
				position: absolute;
				right: -24px;
				top: 0;
				display: block;
				z-index: -1;
				box-shadow: -32px 0 0 0 #fff, 0 -32px 0 0 #fff, 0 32px 0 0 #fff, -32px 32px 0 0 #fff, -32px -32px 0 0 #fff, 0 0 32px 0 rgba(0, 0, 0, 0.15);
			}

		#intro .button {
			min-width: 12em;
		}

		#intro footer {
			margin: 0;
		}

/* Main */

	#main {
		position: relative;
		background: #f7f7f7 url("images/bg02.png");
		padding: 4em 0 4em 0;
	}

		#main:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			background: url("images/bg01.png");
			background-size: 100% 100%;
			z-index: 0;
			opacity: 0.1;
		}

		#main .major h2 {
			background: #f7f7f7 url("images/bg02.png");
		}

/* Footer */

	#footer {
		position: relative;
		color: #858484;
		background: #252122;
		padding: 4em 0;
	}

		#footer:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			background: url("images/bg01.png");
			background-size: 100% 100%;
			z-index: 0;
			opacity: 0.5;
		}

		#footer a {
			color: #c5c4c4;
		}

		#footer h2, #footer h3, #footer h4, #footer h5, #footer h6, #footer strong, #footer b {
			color: #fff;
		}

			#footer h2 a, #footer h3 a, #footer h4 a, #footer h5 a, #footer h6 a, #footer strong a, #footer b a {
				color: inherit;
			}

		#footer ul.contact li,
		#footer ul.dates li,
		#footer ul.divided li {
			border-top-color: #353434;
			border-top-color: rgba(255, 255, 255, 0.05);
		}

		#footer header {
			margin: 0 0 3em 0;
		}

			#footer header h2 {
				font-size: 1.75em;
			}

/* Copyright */

	#copyright {
		text-align: center;
		margin: 3em 0 2em 0;
	}

		#copyright ul.links {
			display: inline-block;
			background: #2C2929;
			background: rgba(255, 255, 255, 0.05);
			border-radius: 5px;
			margin: 0;
			padding: 0.85em 2.25em 0.85em 2.25em;
		}

/* XLarge */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 12pt;
			}

	}

/* Large */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 11pt;
			}

		/* Section/Article */

			header.major {
				margin: 0.75em 0 2.5em 0;
			}

				header.major h2 {
					padding: 0 1em 0 1em;
				}

		/* Social */

			ul.social li {
				margin: 0 0 0.25em 0.75em;
			}

		/* Header */

			#header {
				padding: 4em 0 3em 0;
			}

		/* Banner */

			#banner {
				padding: 6em 0;
				margin: 3em 0 0 0;
			}

		/* Intro */

			#intro {
				padding: 0;
			}

				#intro section {
					padding: 1em 2em;
				}

				#intro .middle:before {
					left: -12px;
				}

				#intro .middle:after {
					right: -12px;
				}

		/* Main */

			#main {
				padding: 30px 0;
			}

		/* Footer */

			#footer {
				padding: 3em 0;
			}

				#footer:before {
					height: 2.5em;
				}

				#footer header {
					margin: 0 0 1.5em 0;
				}

					#footer header h2 {
						font-size: 1.25em;
					}

		/* Copyright */

			#copyright {
				margin: 0;
			}

	}

/* Medium */

	#navPanel, #titleBar {
		display: none;
	}

	@media screen and (max-width: 980px) {

		/* Basic */

			html, body {
				overflow-x: hidden;
			}

		/* Box */

			.box footer ul.actions li {
				margin: 1em 0 0 0;
				display: block;
			}

				.box footer ul.actions li .button {
					width: 100%;
				}

				.box footer ul.actions li:first-child {
					margin-top: 0;
				}

		/* Header */

			#header {
				padding: 3.5em 0 3em 0;
			}

		/* Nav */

			#nav {
				display: none;
			}

		/* Intro */

			#intro {
				padding: 3em 0 0 0;
			}

				#intro section {
					position: relative;
					border-top: solid 1px #dfdfdf;
					margin: 0;
					padding: 40px 0 0 0;
				}

					#intro section.first {
						border-top: 0;
						padding-top: 0;
					}

					#intro section p {
						margin: 0;
					}

				#intro .middle:before, #intro .middle:after {
					display: none;
				}

				#intro footer {
					padding: 3em 0 0 0;
				}

					#intro footer ul.actions {
						margin-bottom: 0;
					}

		/* Main */

			#main {
				padding: 40px 0;
			}

		/* Copyright */

			#copyright ul.links {
				display: block;
			}

		/* Nav */

			#page-wrapper {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				padding-bottom: 1px;
			}

			#titleBar {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 44px;
				left: 0;
				position: fixed;
				top: 0;
				width: 100%;
				z-index: 10001;
				background: none;
			}

				#titleBar .toggle {
					text-decoration: none;
					width: 80px;
					height: 60px;
				}

					#titleBar .toggle:active:before {
						background-color: #969696;
					}

			#navPanel {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transform: translateX(-275px);
				-webkit-transform: translateX(-275px);
				-ms-transform: translateX(-275px);
				transform: translateX(-275px);
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 100%;
				left: 0;
				overflow-y: auto;
				position: fixed;
				top: 0;
				width: 275px;
				z-index: 10002;
				color: #858484;
				background-image: url("images/bg02.png");
				box-shadow: inset -3px 0px 5px 0px rgba(0, 0, 0, 0.35);
			}

				#navPanel .link {
					display: block;
					color: #888;
					text-decoration: none;
					height: 44px;
					line-height: 44px;
					border-top: solid 1px rgba(255, 255, 255, 0.05);
					padding: 0 1em 0 1em;
					font-style: italic;
				}

					#navPanel .link:first-child {
						border-top: 0;
					}

				#navPanel .indent-1 {
					display: inline-block;
					width: 1em;
				}

				#navPanel .indent-2 {
					display: inline-block;
					width: 2em;
				}

				#navPanel .indent-3 {
					display: inline-block;
					width: 3em;
				}

				#navPanel .indent-4 {
					display: inline-block;
					width: 4em;
				}

				#navPanel .indent-5 {
					display: inline-block;
					width: 5em;
				}

				#navPanel .depth-0 {
					color: #fff;
				}

			body.navPanel-visible #page-wrapper {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #titleBar {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #navPanel {
				-moz-transform: translateX(0);
				-webkit-transform: translateX(0);
				-ms-transform: translateX(0);
				transform: translateX(0);
			}

	}

/* Small */

	@media screen and (max-width: 736px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 11pt;
			}

			h2, h3, h4, h5, h6 {
				font-size: 1.25em;
			}

		/* Button */

			input[type="button"].large,
			input[type="submit"].large,
			input[type="reset"].large,
			button.large,
			.button.large {
				font-size: 1.1em;
				padding: 0.65em 1.5em 0.65em 1.5em;
			}

		/* Actions */

			ul.actions li {
				margin: 1em 0 0 0;
				display: block;
			}

				ul.actions li .button {
					width: 100%;
				}

				ul.actions li:first-child {
					margin-top: 0;
				}

		/* Section/Article */

			section, article {
				margin-bottom: 20px;
			}

			header {
				margin: 0 0 1em 0;
			}

			footer {
				margin: 2em 0 0 0;
			}

		/* Box */

			.box {
				padding: 25px 15px 20px 15px;
			}

				.box .image.featured {
					left: 15px;
					top: 15px;
					margin: -40px 0 40px -30px;
				}

				.box.post header {
					padding-top: 0;
					margin: 0 0 1em 0;
				}

				.box.post h2 {
					font-size: 1.5em;
					line-height: 1.5em;
				}

				.box.post header > p {
					margin-top: 0;
					font-size: 1em;
				}

		/* Divided */

			ul.divided li {
				padding: 0.5em 0 0.5em 0;
			}

		/* Contact */

			ul.contact li {
				padding: 0.8em 0 0.8em 7em;
			}

				ul.contact li h3 {
					top: 0.8em;
				}

		/* Dates */

			ul.dates li {
				padding-left: 6em;
			}

			ul.dates h3 {
				margin: 0 0 0.5em 0;
			}

		/* Links */

			ul.links li {
				display: block;
				padding: 0.25em 0 0 0;
				margin: 0.25em 0 0 0;
				border-left: 0;
			}

				ul.links li:first-child {
					padding-top: 0;
					margin-top: 0;
				}

		/* Social */

			ul.social li {
				margin: 0 0.5em 0.75em 0;
			}

		/* Icons */

			.icon.featured {
				width: 8em;
				margin: 0 0 3em 0;
			}

				.icon.featured:after {
					border-left: solid 4em transparent;
					border-right: solid 4em transparent;
				}

		/* Header */

			#header {
				text-align: center;
				padding: 2em 0;
			}

				#header h1 {
					color: #252122;
					font-weight: 900;
					font-size: 1.75em;
					letter-spacing: -0.035em;
				}

		/* Intro */

			#intro {
				padding: 2em 0 0 0;
			}

				#intro section {
					padding: 40px 0 0 0;
					margin: 20px 0 0 0;
				}

				#intro h2 {
					font-size: 1.25em;
				}

		/* Banner */

			#banner {
				padding: 6em 0;
				margin: 2em 0 0 0;
			}

				#banner header {
					padding: 1.5em 1em 1.5em 1em;
					display: block;
					border-radius: 0;
				}

					#banner header h2 {
						font-size: 1.5em;
						line-height: 1.5em;
						margin: 0 0 0.25em 0;
					}

					#banner header p {
						font-size: 1.2em;
					}

		/* Main */

			#main {
				padding: 20px 0;
			}

		/* Footer */

			#footer {
				padding: 40px 0 20px 0;
			}

	}
`;

export default dopetropeStyle;
