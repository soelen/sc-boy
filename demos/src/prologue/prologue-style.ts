import { css } from "lit";

const prologueStyle = css`

  /* Basic */

	#page-wrapper {
		background: #fff;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 300;
		line-height: 1.75em;
		color: #888;
	}

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

	input, textarea, select {
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 19pt;
		font-weight: 300;
		line-height: 1.75em;
		color: #888;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 300;
		color: #666;
		line-height: 1.5em;
	}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
	}

		h1 a strong, h2 a strong, h3 a strong, h4 a strong, h5 a strong, h6 a strong {
			color: #333;
		}

	h2 {
		font-size: 2em;
		letter-spacing: -1px;
	}

		h2.alt {
			color: #888;
		}

			h2.alt strong {
				color: #666;
			}

	h3 {
		font-size: 1.5em;
	}

	header {
		margin: 0 0 2em 0;
	}

		header > p {
			margin: 1em 0 0 0;
		}

	footer {
		margin: 2em 0 0 0;
	}

	strong, b {
		font-weight: 300;
		color: #666;
	}

	em, i {
		font-style: italic;
	}

	a {
		text-decoration: none;
		color: inherit;
		border-bottom: dotted 1px rgba(128, 128, 128, 0.5);
		-moz-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		-webkit-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		-ms-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		outline: 0;
	}

		a:hover {
			color: #E27689;
			border-bottom-color: rgba(255, 255, 255, 0);
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

	hr {
		border: 0;
		border-top: solid 1px #ddd;
	}

	blockquote {
		border-left: solid 0.5em #ddd;
		padding: 1em 0 1em 2em;
		font-style: italic;
	}

	p, ul, ol, dl, table {
		margin-bottom: 2em;
	}

	br.clear {
		clear: both;
	}

/* Sections/Article */

	section, article {
		margin-bottom: 3em;
	}

		section > :last-child,
		section > .container, section:last-child, article > :last-child,
		article > .container, article:last-child {
			margin-bottom: 0;
		}

		.row > section, .row > article {
			margin-bottom: 0;
		}

/* Image */

	.image {
		display: inline-block;
		border: 0;
	}

		.image img {
			display: block;
			width: 100%;
		}

		.image.avatar48 {
			width: 48px;
			height: 48px;
			background: #f00;
		}

			.image.avatar48 img {
				width: 48px;
				height: 48px;
			}

		.image.fit {
			display: block;
			width: 100%;
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

		.image.centered {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.centered img {
				margin: 0 auto;
				width: auto;
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

/* Icons */

	ul.icons {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li {
			display: inline-block;
			padding-left: 0;
		}
    ul.icons svg {
      width: 24px;
      height: 24px;
      fill: #41484c;
    }

		ul.icons a {
			display: inline-block;
			width: 2em;
			height: 2em;
			line-height: 2em;
			text-align: center;
			border: 0;
		}

/* Form */

	form label {
		display: block;
		text-align: left;
		margin-bottom: 0.5em;
	}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"],
	form select,
	form textarea {
		position: relative;
		-webkit-appearance: none;
		display: block;
		border: 0;
		outline: 0;
		background: #fff;
		background: rgba(255, 255, 255, 0.75);
		width: 100%;
		border-radius: 0.35em;
		padding: 0.75em 1em 0.75em 1em;
		box-shadow: inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.05);
		border: solid 1px rgba(0, 0, 0, 0.15);
		-moz-transition: all 0.35s ease-in-out;
		-webkit-transition: all 0.35s ease-in-out;
		-ms-transition: all 0.35s ease-in-out;
		transition: all 0.35s ease-in-out;
	}

		form input[type="text"]:focus,
		form input[type="email"]:focus,
		form input[type="password"]:focus,
		form select:focus,
		form textarea:focus {
			box-shadow: 0 0 2px 1px #8ebebc;
			background: #fff;
		}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"],
	form select {
		line-height: 1.25em;
	}

	form textarea {
		min-height: 14em;
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

/* Table */

	table {
		width: 100%;
		text-align: left;
	}

		table tbody tr:nth-child(2n+2) {
			background: #f4f4f4;
		}

		table td {
			padding: 0.5em 1em 0.5em 1em;
		}

		table th {
			text-align: left;
			padding: 0.5em 1em 0.5em 1em;
			color: #fff;
			background: #222729 url("images/overlay.png");
		}

		table thead {
			background: #444;
			color: #fff;
		}

		table tfoot {
			background: #eee;
		}

/* Button */

	input[type="button"],
	input[type="submit"],
	input[type="reset"],
	button,
	.button {
		position: relative;
		display: inline-block;
		border-radius: 0.35em;
		color: #fff !important;
		text-decoration: none;
		padding: 0.75em 2.5em 0.75em 2.5em;
		background-color: #8ebebc;
		border: 0;
		cursor: pointer;
		background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), url("images/overlay.png");
		background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), url("images/overlay.png");
		background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), url("images/overlay.png");
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), url("images/overlay.png");
		-moz-transition: background-color 0.35s ease-in-out;
		-webkit-transition: background-color 0.35s ease-in-out;
		-ms-transition: background-color 0.35s ease-in-out;
		transition: background-color 0.35s ease-in-out;
	}

		input[type="button"]:hover,
		input[type="submit"]:hover,
		input[type="reset"]:hover,
		button:hover,
		.button:hover {
			background-color: #9ececc;
		}

		input[type="button"]:active,
		input[type="submit"]:active,
		input[type="reset"]:active,
		button:active,
		.button:active {
			background-color: #7eaeac;
		}

/* Item */

	.item {
		box-shadow: 0 0.05em 0.15em 0 rgba(0, 0, 0, 0.05);
		margin-bottom: 40px;
	}

		.item header {
			background: #fff;
			margin: 0;
			padding: 1em 0 1em 0;
			font-size: 0.8em;
		}

			.item header h3 {
				font-size: 1em;
			}

/* Icons */

	.icon {
		text-decoration: none;
		text-decoration: none;
	}

		.icon:before {
			line-height: inherit;
		}

		.icon > .label {
			display: none;
		}


/* Header */

	#header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #222629 url("images/overlay.png");
		box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1);
		color: #fff;
		height: 100%;
		left: 0;
		overflow-y: auto;
		position: fixed;
		text-align: right;
		width: 375px;
	}

		#header .top {
			-moz-flex-grow: 1;
			-webkit-flex-grow: 1;
			-ms-flex-grow: 1;
			flex-grow: 1;
		}

		#header .bottom {
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			padding: 1.5em 0 0.75em 0;
		}

			#header .bottom > :last-child {
				margin-bottom: 0;
			}

		#header .icons {
			font-size: 0.8em;
			text-align: center;
		}

			#header .icons a {
				color: #41484c;
				-moz-transition: color 0.35s ease-in-out;
				-webkit-transition: color 0.35s ease-in-out;
				-ms-transition: color 0.35s ease-in-out;
				transition: color 0.35s ease-in-out;
			}

				#header .icons a:hover {
					color: #fff;
				}

	#logo {
		position: relative;
		margin: 1.75em 1.5em 1.5em 1.5em;
		min-height: 48px;
		cursor: default;
	}

		#logo h1 {
			position: relative;
			color: #fff;
			font-weight: 600;
			font-size: 1em;
			line-height: 1em;
		}

		#logo p {
			position: relative;
			display: block;
			font-size: 0.6em;
			color: rgba(255, 255, 255, 0.5);
			line-height: 1.25em;
			margin: 0.5em 0 0 0;
		}

		#logo .image {
			position: absolute;
			left: 0;
			top: 0;
		}

	#nav ul {
		list-style: none;
		padding-left: 0;
		margin-bottom: 0;
	}

		#nav ul li {
			padding-left: 0;
		}

			#nav ul li a {
				display: block;
				padding: 0.5em 1.5em 0.5em 1.5em;
				color: rgba(255, 255, 255, 0.5);
				text-decoration: none;
				outline: 0;
				border: 0;
				-moz-transition: none;
				-webkit-transition: none;
				-ms-transition: none;
				transition: none;
			}

				#nav ul li a span {
          display: flex;
          justify-content: space-between;
          align-items: center;
					font-size: 0.8em;
				}

				#nav ul li a svg {
          width: 24px;
          height: 24px;
          fill: #41484c;
        }
				#nav ul li a.active svg {
          fill: #e27689;
        }

					#nav ul li a span:before {
						position: absolute;
						left: 0;
						color: #41484c;
						text-align: center;
						width: 1.25em;
						line-height: 1.75em;
					}

				#nav ul li a.active {
					background: rgba(0, 0, 0, 0.15);
					box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
					color: #fff;
				}

/* Footer */

	#footer {
		margin-left: 375px;
		text-align: center;
		background-color: #dce3e2;
		padding: 3em 0 4em 0;
		box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
		font-size: 0.8em;
	}

		#footer .copyright {
			cursor: default;
			margin: 0;
		}

			#footer .copyright li {
				display: inline-block;
				line-height: 1em;
				border-left: solid 1px rgba(128, 128, 128, 0.35);
				padding: 0 0 0 0.5em;
				margin: 0 0 0 0.5em;
			}

				#footer .copyright li:first-child {
					border-left: 0;
					padding-left: 0;
					margin-left: 0;
				}

/* Main */

	#main {
		margin-left: 375px;
	}

		#main > section {
			margin: 0;
			overflow: hidden;
			padding: 4em 0;
			box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
			text-align: center;
			background-image: url("images/overlay.png");
		}

			#main > section.dark {
				color: #ddd;
				color: rgba(255, 255, 255, 0.75);
			}

				#main > section.dark h2, #main > section.dark h3, #main > section.dark h4, #main > section.dark h5, #main > section.dark h6 {
					color: inherit;
				}

				#main > section.dark strong {
					color: #fff;
					border-color: inherit;
				}

				#main > section.dark a {
					color: #fff;
					border-color: inherit;
				}

					#main > section.dark a:hover {
						border-bottom-color: rgba(255, 255, 255, 0);
					}

			#main > section.cover {
				padding: 10em 0;
				background-size: cover;
				background-position: center center;
			}

			#main > section.one {
				background-color: #81918E;
				background-image: url("../../images/banner.jpg");
			}

			#main > section.two {
				background-color: #f5fafa;
			}

			#main > section.three {
				background-color: #ecf1f1;
			}

			#main > section.four {
				background-color: #e8edec;
			}

/* Wide */

	@media screen and (min-width: 961px) and (max-width: 1880px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 17pt;
			}

		/* Header */

			#header {
				width: 300px;
			}

		/* Footer */

			#footer {
				margin-left: 300px;
			}

		/* Main */

			#main {
				margin-left: 300px;
			}

	}

/* Normal */

	@media screen and (min-width: 961px) and (max-width: 1620px) {

		/* Main */

			#main > section {
				padding: 3em 0;
			}

			#main section.cover {
				padding: 5em 0;
			}

	}

/* Narrow */

	@media screen and (min-width: 961px) and (max-width: 1320px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 16pt;
			}

			.container {
				padding: 0 2em 0 2em;
			}

		/* Icons */

			ul.icons li a {
				width: 1.75em;
			}

		/* Item */

			.item {
				margin-bottom: 20px;
			}

		/* Header */

			#header {
				width: 20%;
			}

			#logo .image {
				position: relative;
				margin: 0 0 0.5em 0;
			}

			#nav ul li a {
				font-size: 0.8em;
				padding-top: 0.5em;
				padding-bottom: 0.5em;
			}

				#nav ul li a span {
					padding-right: 2.25em;
				}

					#nav ul li a span:before {
						left: 100%;
						margin-left: -1.25em;
						line-height: 2.25em;
					}

		/* Footer */

			#footer {
				margin-left: 20%;
			}

		/* Main */

			#main {
				margin-left: 20%;
			}

	}

/* Narrower */

	#headerToggle {
		display: none;
	}

	@media screen and (max-width: 960px) {

		/* Basic */

			html, body {
				overflow-x: hidden;
			}

			body, input, textarea, select {
				font-size: 16pt;
			}

			header br {
				display: none;
			}

			.container {
				padding: 0 2em 0 2em;
			}

		/* Item */

			.item {
				margin-bottom: 15px;
			}

		/* Icons */

			ul.icons a {
				width: 1.75em;
				font-size: 1.25em;
			}

		/* Header */

			#header {
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
				-webkit-overflow-scrolling: touch;
				display: block;
				height: 100%;
				left: 0;
				overflow-y: auto;
				position: fixed;
				top: 0;
				width: 275px;
				z-index: 10002;
				width: 275px;
				background: #222729 url("images/overlay.png");
				box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.125);
			}

				#header .top {
					position: relative;
				}

				#header .bottom {
					border-top: solid 1px rgba(255, 255, 255, 0.05);
					box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.15);
					padding-top: 2em;
					margin-top: 2em;
					position: relative;
				}

			#logo {
				margin: 1.5em 1.25em 1.25em 1.25em;
			}

			#nav ul li a {
				padding: 0.5em 1.25em 0.5em 1.25em;
			}

			#headerToggle {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 2.25em;
				left: 0;
				position: fixed;
				top: 0;
				width: 3.25em;
				z-index: 10001;
			}

				#headerToggle .toggle {
					text-decoration: none;
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					outline: 0;
					border: 0;
				}

			body.header-visible #main {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.header-visible #headerToggle {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.header-visible #header {
				-moz-transform: translateX(0);
				-webkit-transform: translateX(0);
				-ms-transform: translateX(0);
				transform: translateX(0);
			}

		/* Footer */

			#footer {
				margin-left: 0;
			}

		/* Main */

			#main {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				padding-bottom: 1px;
				margin-left: 0;
			}

				#main > section {
					padding: 3em 0;
				}

				#main section.cover {
					padding: 4em 0;
				}

	}

/* Mobile */

	@media screen and (max-width: 736px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 14pt;
			}

			h2 {
				font-size: 1.5em;
				letter-spacing: 0;
				font-weight: 300;
			}

			.container {
				padding: 0 15px 0 15px;
			}

		/* List */

			ul.icons a {
				width: 2em;
				font-size: 1.25em;
			}

		/* Main */

			#main > section {
				padding: 2em 0;
			}

			#main section.cover {
				padding: 4em 0em;
			}

				#main section.cover header {
					padding: 0 1em;
				}

		/* Footer */

			#footer .copyright li {
				display: block;
				line-height: 1.25em;
				border: 0;
				padding: 0;
				margin: 1em 0 0 0;
			}

				#footer .copyright li:first-child {
					margin-top: 0;
				}

	}
`;

export default prologueStyle;