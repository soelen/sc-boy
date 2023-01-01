import { css } from "lit";

const paradignShiftStyle = css`

  /* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	html {
		overflow-x: hidden;
	}

	body {
		background: #ffffff;
		overflow-x: hidden;
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

/* Typography */

	html {
		font-size: 18pt;
	}

		@media screen and (max-width: 1920px) {

			html {
				font-size: 13pt;
			}

		}

		@media screen and (max-width: 1152px) {

			html {
				font-size: 14pt;
			}

		}

		@media screen and (max-width: 736px) {

			html {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 480px) {

			html {
				font-size: 11pt;
			}

		}

	body {
		background-color: #ffffff;
		color: #000000;
	}

	body, input, select, textarea {
		color: #000000;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 300;
		letter-spacing: 0.0375em;
		line-height: 2;
	}

	a {
		-moz-transition: border-bottom-color 0.25s ease-in-out;
		-webkit-transition: border-bottom-color 0.25s ease-in-out;
		-ms-transition: border-bottom-color 0.25s ease-in-out;
		transition: border-bottom-color 0.25s ease-in-out;
		text-decoration: none;
		color: #000000;
		border-bottom: dotted 1px;
	}

		a:hover {
			text-decoration: none;
			border-bottom-color: transparent;
		}

	strong, b {
		font-weight: 600;
		color: #000000;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2rem 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #000000;
		font-family: "Raleway", Helvetica, sans-serif;
		font-weight: 600;
		letter-spacing: 0.175em;
		line-height: 1.75;
		margin: 0 0 1.5rem 0;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h1 {
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 5rem;
		font-weight: 700;
		letter-spacing: -0.05em;
		line-height: 1.1;
		margin: 0 0 1.5rem 0;
		text-transform: none;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 800;
		margin: 0 0 2rem 0;
	}

	h3 {
		font-size: 0.875rem;
	}

	h4 {
		font-size: 0.875rem;
	}

	h5 {
		font-size: 0.75rem;
	}

	h6 {
		font-size: 0.625rem;
	}

	@media screen and (max-width: 736px) {

		h1 {
			font-size: 4.5rem;
			line-height: 1.1;
		}

		h2 {
			font-size: 1.25rem;
			line-height: 1.7;
		}

		h3 {
			font-size: 0.9rem;
		}

		h4 {
			font-size: 0.75rem;
		}

		h5 {
			font-size: 0.675rem;
		}

	}

	@media screen and (max-width: 360px) {

		h1 {
			font-size: 3.75rem;
		}

		h2 {
			font-size: 1.125rem;
		}

		h3 {
			font-size: 0.8rem;
		}

		h4 {
			font-size: 0.675rem;
		}

		h5 {
			font-size: 0.675rem;
		}

	}

	sub {
		font-size: 0.8rem;
		position: relative;
		top: 0.5rem;
	}

	sup {
		font-size: 0.8rem;
		position: relative;
		top: -0.5rem;
	}

	blockquote {
		border-left: solid 0.5rem rgba(144, 144, 144, 0.25);
		font-style: italic;
		margin: 0 0 2rem 0;
		padding: 1rem 0 1rem 2rem;
	}

	code {
		background: rgba(144, 144, 144, 0.1);
		border-radius: 0.325rem;
		font-family: "Courier New", monospace;
		font-size: 0.9rem;
		margin: 0 0.25rem;
		padding: 0.25rem 0.65rem;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9rem;
		margin: 0 0 2rem 0;
		width: 100%;
	}

		pre code {
			display: block;
			line-height: 1.75;
			padding: 1rem 1.5rem;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 2px rgba(144, 144, 144, 0.25);
		margin: 3rem 0;
	}

		hr.major {
			margin: 5rem 0;
		}

		@media screen and (max-width: 736px) {

			hr.major {
				margin: 3rem 0;
			}

		}

/* Box */

	.box {
		border: solid 2px rgba(144, 144, 144, 0.25);
		border-radius: 0.325rem;
		margin-bottom: 2rem;
		padding: 1.5rem;
	}

		.box > :last-child {
			margin-bottom: 0;
		}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
		}

/* Button */

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, color 0.25s ease-in-out;
		-webkit-transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, color 0.25s ease-in-out;
		-ms-transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, color 0.25s ease-in-out;
		transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, color 0.25s ease-in-out;
		background-color: transparent;
		border-radius: 0.325rem;
		border: 0;
		box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
		color: #000000 !important;
		cursor: pointer;
		display: inline-block;
		font-family: "Raleway", Helvetica, sans-serif;
		font-size: 0.6rem;
		font-weight: 600;
		height: 3rem;
		letter-spacing: 0.175em;
		line-height: 3rem;
		padding: 0 2rem;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			box-shadow: inset 0 0 0 2px #2ee4bb;
			color: #2ee4bb !important;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: rgba(73, 252, 212, 0.25);
			box-shadow: inset 0 0 0 2px #2ee4bb;
			color: #2ee4bb !important;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.5rem;
			height: 2.25rem;
			line-height: 2.25rem;
			padding: 0 1.25rem;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		button.large,
		.button.large {
			font-size: 0.7rem;
			height: 3.2625rem;
			line-height: 3.2625rem;
			padding: 0 3.25rem;
		}

		input[type="submit"].wide,
		input[type="reset"].wide,
		input[type="button"].wide,
		button.wide,
		.button.wide {
			min-width: 13rem;
		}

		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		input[type="button"].icon:before,
		button.icon:before,
		.button.icon:before {
			margin-right: 0.5rem;
		}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			pointer-events: none;
			opacity: 0.25;
		}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		button.primary,
		.button.primary {
			background-color: #49fcd4;
			box-shadow: none;
			color: #000000 !important;
		}

			input[type="submit"].primary:hover,
			input[type="reset"].primary:hover,
			input[type="button"].primary:hover,
			button.primary:hover,
			.button.primary:hover {
				background-color: #93ffe7;
			}

			input[type="submit"].primary:active,
			input[type="reset"].primary:active,
			input[type="button"].primary:active,
			button.primary:active,
			.button.primary:active {
				background-color: #44f2cb;
			}

		@media screen and (max-width: 736px) {

			input[type="submit"],
			input[type="reset"],
			input[type="button"],
			button,
			.button {
				font-size: 0.7rem;
				height: 3.3rem;
				line-height: 3.3rem;
			}

				input[type="submit"].large,
				input[type="reset"].large,
				input[type="button"].large,
				button.large,
				.button.large {
					font-size: 0.8rem;
					height: 3.75rem;
					line-height: 3.75rem;
				}

				input[type="submit"].small,
				input[type="reset"].small,
				input[type="button"].small,
				button.small,
				.button.small {
					font-size: 0.6rem;
					height: 3rem;
					line-height: 3rem;
				}

		}

/* Form */

	form {
		margin: 0 0 2rem 0;
	}

		form > :last-child {
			margin-bottom: 0;
		}

		form > .fields {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			margin: -2rem 0 2rem -2rem;
			width: calc(100% + 4rem);
		}

			form > .fields > .field {
				-moz-flex-grow: 0;
				-webkit-flex-grow: 0;
				-ms-flex-grow: 0;
				flex-grow: 0;
				-moz-flex-shrink: 0;
				-webkit-flex-shrink: 0;
				-ms-flex-shrink: 0;
				flex-shrink: 0;
				padding: 2rem 0 0 2rem;
				width: calc(100% - 2rem);
			}

				form > .fields > .field > :last-child {
					margin-bottom: 0;
				}

				form > .fields > .field.half {
					width: calc(50% - 1rem);
				}

				form > .fields > .field.third {
					width: calc(100%/3 - 0.66667rem);
				}

				form > .fields > .field.quarter {
					width: calc(25% - 0.5rem);
				}

		@media screen and (max-width: 480px) {

			form > .fields {
				margin: -1.5rem 0 2rem -1.5rem;
				width: calc(100% + 3rem);
			}

				form > .fields > .field {
					padding: 1.5rem 0 0 1.5rem;
					width: calc(100% - 1.5rem);
				}

					form > .fields > .field.half {
						width: calc(100% - 1.5rem);
					}

					form > .fields > .field.third {
						width: calc(100% - 1.5rem);
					}

					form > .fields > .field.quarter {
						width: calc(100% - 1.5rem);
					}

		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	input[type="search"],
	input[type="url"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		border-radius: 0.325rem;
		border: solid 2px rgba(144, 144, 144, 0.25);
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1rem;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		input[type="tel"]:invalid,
		input[type="search"]:invalid,
		input[type="url"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		input[type="tel"]:focus,
		input[type="search"]:focus,
		input[type="url"]:focus,
		select:focus,
		textarea:focus {
			border-color: #2ee4bb;
		}

	label {
		color: #000000;
		display: block;
		font-family: "Raleway", Helvetica, sans-serif;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.175em;
		line-height: 1.75;
		margin: 0 0 1rem 0;
		text-transform: uppercase;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	input[type="search"],
	input[type="url"] {
		height: 3rem;
	}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(144, 144, 144, 0.25)' /%3E%3C/svg%3E");
		background-position: calc(100% - 1rem) center;
		background-repeat: no-repeat;
		background-size: 1.25rem;
		height: 3rem;
		padding-right: 3rem;
		text-overflow: ellipsis;
	}

		select option {
			background-color: #ffffff;
			color: #000000;
		}

		select:focus::-ms-value {
			background-color: transparent;
		}

		select::-ms-expand {
			display: none;
		}

	textarea {
		padding: 0.75rem 1rem;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2rem;
		opacity: 0;
		width: 1rem;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			color: #000000;
			cursor: pointer;
			display: inline-block;
			font-family: "Source Sans Pro", Helvetica, sans-serif;
			font-size: 1rem;
			font-weight: 300;
			letter-spacing: 0.0375em;
			padding-left: 2.675rem;
			padding-right: 0.875rem;
			position: relative;
			text-transform: none;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				border-radius: 0.325rem;
				border: solid 2px rgba(144, 144, 144, 0.25);
				content: '';
				display: inline-block;
				font-size: 0.8rem;
				height: 2.25rem;
				left: 0;
				line-height: 2.25rem;
				position: absolute;
				text-align: center;
				top: -0.15rem;
				width: 2.25rem;
			}

		input[type="checkbox"]:focus + label:before,
		input[type="radio"]:focus + label:before {
			border-color: #49fcd4;
			box-shadow: 0 0 0 1px #49fcd4;
		}

	input[type="checkbox"] + label:before {
		border-radius: 0.325rem;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		opacity: 1.0;
		color: rgba(0, 0, 0, 0.25) !important;
	}

	:-moz-placeholder {
		opacity: 1.0;
		color: rgba(0, 0, 0, 0.25) !important;
	}

	::-moz-placeholder {
		opacity: 1.0;
		color: rgba(0, 0, 0, 0.25) !important;
	}

	:-ms-input-placeholder {
		opacity: 1.0;
		color: rgba(0, 0, 0, 0.25) !important;
	}

	@media screen and (max-width: 736px) {

		label {
			font-size: 0.675rem;
		}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			font-size: 1rem;
		}

	}

	@media screen and (max-width: 360px) {

		label {
			font-size: 0.675rem;
		}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			font-size: 1rem;
		}

	}

/* Icon */

	.icon {
		text-decoration: none;
		border-bottom: none;
		position: relative;
	}

		.icon > .label {
			display: none;
		}


/* Image */

	.image {
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			display: block;
		}

		.image[data-position] img {
			-moz-object-fit: cover;
			-webkit-object-fit: cover;
			-ms-object-fit: cover;
			object-fit: cover;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.image[data-position="top left"] img {
			-moz-object-position: top left;
			-webkit-object-position: top left;
			-ms-object-position: top left;
			object-position: top left;
		}

		.image[data-position="top"] img {
			-moz-object-position: top;
			-webkit-object-position: top;
			-ms-object-position: top;
			object-position: top;
		}

		.image[data-position="top right"] img {
			-moz-object-position: top right;
			-webkit-object-position: top right;
			-ms-object-position: top right;
			object-position: top right;
		}

		.image[data-position="right"] img {
			-moz-object-position: right;
			-webkit-object-position: right;
			-ms-object-position: right;
			object-position: right;
		}

		.image[data-position="bottom right"] img {
			-moz-object-position: bottom right;
			-webkit-object-position: bottom right;
			-ms-object-position: bottom right;
			object-position: bottom right;
		}

		.image[data-position="bottom"] img {
			-moz-object-position: bottom;
			-webkit-object-position: bottom;
			-ms-object-position: bottom;
			object-position: bottom;
		}

		.image[data-position="bottom left"] img {
			-moz-object-position: bottom left;
			-webkit-object-position: bottom left;
			-ms-object-position: bottom left;
			object-position: bottom left;
		}

		.image[data-position="left"] img {
			-moz-object-position: left;
			-webkit-object-position: left;
			-ms-object-position: left;
			object-position: left;
		}

		.image[data-position="center"] img {
			-moz-object-position: center;
			-webkit-object-position: center;
			-ms-object-position: center;
			object-position: center;
		}

		.image[data-position="25% 25%"] img {
			-moz-object-position: 25% 25%;
			-webkit-object-position: 25% 25%;
			-ms-object-position: 25% 25%;
			object-position: 25% 25%;
		}

		.image[data-position="75% 25%"] img {
			-moz-object-position: 75% 25%;
			-webkit-object-position: 75% 25%;
			-ms-object-position: 75% 25%;
			object-position: 75% 25%;
		}

		.image[data-position="75% 75%"] img {
			-moz-object-position: 75% 75%;
			-webkit-object-position: 75% 75%;
			-ms-object-position: 75% 75%;
			object-position: 75% 75%;
		}

		.image[data-position="25% 75%"] img {
			-moz-object-position: 25% 75%;
			-webkit-object-position: 25% 75%;
			-ms-object-position: 25% 75%;
			object-position: 25% 75%;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			margin: 0 2rem 2rem 0;
			top: 0.25rem;
		}

		.image.right {
			float: right;
			margin: 0 0 2rem 2rem;
			top: 0.25rem;
		}

		.image.fit {
			display: block;
			margin: 0 0 2rem 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 3rem 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

			.image.main:first-child {
				margin-top: 0;
			}

		.image.fill {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}

			.image.fill img {
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2rem 0;
		padding-left: 1.25rem;
	}

		ol li {
			padding-left: 0.25rem;
		}

	ul {
		list-style: disc;
		margin: 0 0 2rem 0;
		padding-left: 1rem;
	}

		ul li {
			padding-left: 0.325rem;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt > li {
				border-top: solid 1px rgba(144, 144, 144, 0.25);
				padding: 0.75rem 0;
			}

				ul.alt > li:first-child {
					border-top: 0;
					padding-top: 0;
				}

				ul.alt > li:last-child {
					padding-bottom: 0;
				}

		ul.items {
			list-style: none;
			padding-left: 0;
		}

			ul.items > li {
				padding-left: 0;
				margin: 0 0 3rem 0;
			}

				ul.items > li > h3 {
					margin: 0 0 1rem 0;
				}

				ul.items > li > :last-child {
					margin-bottom: 0;
				}

				ul.items > li:last-child {
					margin-bottom: 0;
				}

		@media screen and (max-width: 736px) {

			ul.items > li {
				margin: 0 0 2rem 0;
			}

		}

	dl {
		margin: 0 0 2rem 0;
	}

		dl dt {
			display: block;
			font-weight: 600;
			margin: 0 0 1rem 0;
		}

		dl dd {
			margin-left: 1.5rem;
		}

/* Actions */

	ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1rem;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1rem;
			vertical-align: middle;
		}

		ul.actions.special {
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 100%;
			margin-left: 0;
		}

			ul.actions.special li:first-child {
				padding-left: 0;
			}

		ul.actions.stacked {
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			margin-left: 0;
		}

			ul.actions.stacked li {
				padding: 1.3rem 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1rem);
		}

			ul.actions.fit li {
				-moz-flex-grow: 1;
				-webkit-flex-grow: 1;
				-ms-flex-grow: 1;
				flex-grow: 1;
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				width: 100%;
			}

				ul.actions.fit li > * {
					width: 100%;
				}

			ul.actions.fit.stacked {
				width: 100%;
			}

		@media screen and (max-width: 480px) {

			ul.actions:not(.fixed) {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				margin-left: 0;
				width: 100% !important;
			}

				ul.actions:not(.fixed) li {
					-moz-flex-grow: 1;
					-webkit-flex-grow: 1;
					-ms-flex-grow: 1;
					flex-grow: 1;
					-moz-flex-shrink: 1;
					-webkit-flex-shrink: 1;
					-ms-flex-shrink: 1;
					flex-shrink: 1;
					padding: 1rem 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions:not(.fixed) li > * {
						width: 100%;
					}

					ul.actions:not(.fixed) li:first-child {
						padding-top: 0;
					}

					ul.actions:not(.fixed) li input[type="submit"],
					ul.actions:not(.fixed) li input[type="reset"],
					ul.actions:not(.fixed) li input[type="button"],
					ul.actions:not(.fixed) li button,
					ul.actions:not(.fixed) li .button {
						width: 100%;
					}

						ul.actions:not(.fixed) li input[type="submit"].icon:before,
						ul.actions:not(.fixed) li input[type="reset"].icon:before,
						ul.actions:not(.fixed) li input[type="button"].icon:before,
						ul.actions:not(.fixed) li button.icon:before,
						ul.actions:not(.fixed) li .button.icon:before {
							margin-left: -0.5rem;
						}

		}

/* Icons */

	ul.icons {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li {
			display: inline-block;
		}

			ul.icons li:last-child {
				padding-right: 0;
			}

			ul.icons li .icon {
				-moz-transition: background-color 0.25s ease-in-out;
				-webkit-transition: background-color 0.25s ease-in-out;
				-ms-transition: background-color 0.25s ease-in-out;
				transition: background-color 0.25s ease-in-out;
				width: 2.25rem;
				height: 2.25rem;
				text-align: center;
				line-height: 2.25rem;
				border-radius: 2.25rem;
				display: inline-block;
			}

				ul.icons li .icon:before {
					font-size: 1.25rem;
				}

				ul.icons li .icon:hover {
					background-color: rgba(144, 144, 144, 0.1);
				}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		overflow-x: auto;
	}

	table {
		margin: 0 0 2rem 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px rgba(144, 144, 144, 0.25);
			border-left: 0;
			border-right: 0;
		}

			table tbody tr:nth-child(2n + 1) {
				background-color: rgba(144, 144, 144, 0.1);
			}

		table td {
			padding: 0.75rem 0.75rem;
		}

		table th {
			color: #000000;
			font-size: 0.9rem;
			font-weight: 600;
			padding: 0 0.75rem 0.75rem 0.75rem;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px rgba(144, 144, 144, 0.25);
		}

		table tfoot {
			border-top: solid 2px rgba(144, 144, 144, 0.25);
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px rgba(144, 144, 144, 0.25);
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 1px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 1px;
			}

			table.alt thead {
				border-bottom: 0;
			}

			table.alt tfoot {
				border-top: 0;
			}

/* Arrow */

	a.arrow {
		border-bottom: 0;
		display: inline-block;
		height: 4rem;
		position: relative;
		width: 6rem;
	}

		a.arrow .label {
			display: none;
		}

		a.arrow:before {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'%3E%3Cpath d='M442.53,346.28L293.65,495.16c-0.33,0.33-0.7,0.62-1.05,0.94c-9.16,9.77-22.15,15.9-36.6,15.9 c-14.44,0-27.43-6.13-36.59-15.88c-0.35-0.33-0.72-0.62-1.06-0.96L69.47,346.28c-19.62-19.62-19.62-51.44,0-71.05 c19.62-19.62,51.43-19.62,71.06,0l65.23,65.23V50.24C205.76,22.5,228.25,0,256,0s50.24,22.5,50.24,50.24v290.21l65.23-65.23 c19.62-19.62,51.43-19.62,71.05,0C462.15,294.84,462.15,326.66,442.53,346.28z' fill='%23000000' /%3E%3C/svg%3E");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			content: '';
			display: inline-block;
			height: 100%;
			position: relative;
			width: 3rem;
		}

/* Gallery */

	@-moz-keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-ms-keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
		margin: -1.25rem 0 0 -1.25rem;
		width: calc(100% + 1.25rem);
	}

		.gallery a {
			border-bottom: 0;
			display: block;
			margin: 1.25rem 0 0 1.25rem;
			outline: 0;
			position: relative;
			width: calc(50% - 1.25rem);
		}

			.gallery a img {
				display: block;
				height: 25vw;
				min-height: 18rem;
				object-fit: cover;
				object-position: center;
				width: 100%;
			}

			.gallery a.landscape {
				width: 100%;
			}

				.gallery a.landscape img {
					height: 30vw;
				}

			.gallery a.portrait img {
				height: 30vw;
			}

		.gallery .modal {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-align-items: center;
			-webkit-align-items: center;
			-ms-align-items: center;
			align-items: center;
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			pointer-events: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
			-moz-transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
			-webkit-transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
			-ms-transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
			transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			background-color: rgba(255, 255, 255, 0.875);
			height: 100%;
			left: 0;
			opacity: 0;
			outline: 0;
			position: fixed;
			top: 0;
			visibility: none;
			width: 100%;
			z-index: 0;
		}

			.gallery .modal:before {
				-moz-animation: gallery-modal-spinner 1s infinite linear;
				-webkit-animation: gallery-modal-spinner 1s infinite linear;
				-ms-animation: gallery-modal-spinner 1s infinite linear;
				animation: gallery-modal-spinner 1s infinite linear;
				-moz-transition: opacity 0.25s ease;
				-webkit-transition: opacity 0.25s ease;
				-ms-transition: opacity 0.25s ease;
				transition: opacity 0.25s ease;
				-moz-transition-delay: 0.5s;
				-webkit-transition-delay: 0.5s;
				-ms-transition-delay: 0.5s;
				transition-delay: 0.5s;
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='96px' height='96px' viewBox='0 0 96 96' zoomAndPan='disable'%3E%3Cstyle%3Ecircle %7Bfill: transparent%3B stroke: %23000000%3B stroke-width: 2px%3B %7D%3C/style%3E%3Cdefs%3E%3CclipPath id='corner'%3E%3Cpolygon points='0,0 48,0 48,48 96,48 96,96 0,96' /%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23corner)'%3E%3Ccircle cx='48' cy='48' r='32'/%3E%3C/g%3E%3C/svg%3E");
				background-position: center;
				background-repeat: no-repeat;
				background-size: 4rem;
				content: '';
				display: block;
				height: 4rem;
				left: 50%;
				margin: -2rem 0 0 -2rem;
				opacity: 0;
				position: absolute;
				top: 50%;
				width: 4rem;
			}

			.gallery .modal:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='64px' viewBox='0 0 64 64' zoomAndPan='disable'%3E%3Cstyle%3Eline %7Bstroke: %23000000%3Bstroke-width: 2px%3B%7D%3C/style%3E%3Cline x1='20' y1='20' x2='44' y2='44' /%3E%3Cline x1='20' y1='44' x2='44' y2='20' /%3E%3C/svg%3E");
				background-position: center;
				background-repeat: no-repeat;
				background-size: 3rem;
				content: '';
				cursor: pointer;
				display: block;
				height: 4rem;
				position: absolute;
				right: 0.5rem;
				top: 0.5rem;
				width: 4rem;
			}

			.gallery .modal .inner {
				-moz-transform: translateY(0.75rem);
				-webkit-transform: translateY(0.75rem);
				-ms-transform: translateY(0.75rem);
				transform: translateY(0.75rem);
				-moz-transition: opacity 0.25s ease, -moz-transform 0.25s ease;
				-webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;
				-ms-transition: opacity 0.25s ease, -ms-transform 0.25s ease;
				transition: opacity 0.25s ease, transform 0.25s ease;
				opacity: 0;
			}

				.gallery .modal .inner img {
					box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.35);
					display: block;
					max-height: 90vh;
					max-width: 90vw;
				}

			.gallery .modal.visible {
				pointer-events: auto;
				opacity: 1;
				visibility: visible;
				z-index: 11000;
			}

				.gallery .modal.visible:before {
					opacity: 1;
				}

			.gallery .modal.loaded .inner {
				-moz-transform: translateY(0);
				-webkit-transform: translateY(0);
				-ms-transform: translateY(0);
				transform: translateY(0);
				-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease;
				-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
				-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease;
				transition: opacity 0.5s ease, transform 0.5s ease;
				opacity: 1;
			}

			.gallery .modal.loaded:before {
				-moz-transition-delay: 0s;
				-webkit-transition-delay: 0s;
				-ms-transition-delay: 0s;
				transition-delay: 0s;
				opacity: 0;
			}

		@media screen and (max-width: 1152px) {

			.gallery a img {
				height: 20rem;
			}

			.gallery a.landscape img {
				height: 25rem;
			}

			.gallery a.portrait img {
				height: 25rem;
			}

			.gallery .modal .inner img {
				max-width: 100vw;
			}

		}

		@media screen and (max-width: 736px) {

			.gallery {
				margin: -0.625rem 0 0 -0.625rem;
				width: calc(100% + 0.625rem);
			}

				.gallery a {
					margin: 0.625rem 0 0 0.625rem;
					width: calc(50% - 0.625rem);
				}

					.gallery a img {
						height: 20rem;
					}

					.gallery a.landscape img {
						height: 20rem;
					}

					.gallery a.portrait img {
						height: 30rem;
					}

		}

		@media screen and (max-width: 480px) {

			.gallery a img {
				height: 12rem;
				min-height: 0;
			}

			.gallery a.landscape img {
				height: 12rem;
			}

			.gallery a.portrait img {
				height: 14rem;
			}

		}

/* Feature Icons */

	ul.feature-icons {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 3rem 0;
		padding-left: 0;
	}

		ul.feature-icons:first-child {
			margin-top: 0;
		}

		ul.feature-icons li {
			margin: 2.5rem 0 0 0;
			padding: 0.5rem 0 0 0;
			width: 50%;
      display: flex;
      align-items: center;
      gap: 16px;
		}
		ul.feature-icons svg {
      margin-top: 10px;
      width: 32px;
      height: 32px;
		}

			ul.feature-icons span {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'%3E%3Cpath d='M256,0l221.7,128v256L256,512L34.3,384V128L256,0z' fill='rgba(144, 144, 144, 0.1)' /%3E%3C/svg%3E");
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				display: block;
				height: 3.25rem;
				text-align: center;
				width: 3.25rem;
			}

			ul.feature-icons li:nth-child(1), ul.feature-icons li:nth-child(2) {
				margin-top: 0;
			}

		@media screen and (max-width: 736px) {

			ul.feature-icons {
				margin: 0 0 3rem 0;
			}

				ul.feature-icons li {
					width: 100%;
				}

					ul.feature-icons li:nth-child(2) {
						margin-top: 2rem;
					}

		}

/* Wrapper */

	#wrapper {
		position: relative;
		width: 100vw;
		padding: 0 0 10rem 0;
	}

		#wrapper:before {
			background-attachment: fixed;
			background-color: #49fcd4;
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 920 1750' x='0px' y='0px'%3E %3Cpath style='fill: rgba(67, 217, 184, 0.25)' d='M889.72,1137.55l-2.91-0.75l-364.39,282.94l-0.7-0.9l-0.51,0.11l-94.77-451.5l-32.51-15.75l-16.73-8.11l0,0.68 l-1.46,0l0-1.39l-1.89-0.92l-112.41-54.47l-0.29,1.03l-1.41-0.37l0.37-1.31l-34.14-16.54l-98.56-47.76l-0.59,0.81l-1.16-0.88 l0.42-0.57L11.43,766.33l-0.25,0.2l-0.9-1.15l102.87-79.98l0.08-0.1l0.02,0.02l116.68-90.72l-0.18-0.34l1.3-0.66l0.05,0.09 l100.5-78.14l-0.07-0.32l0.65-0.14l42.3-32.89l-0.15-54.54l-0.59,0.29l-0.64-1.31l1.23-0.6l-0.01-4.54l-0.33-122.47l-0.99,0.18 l-0.28-1.43l1.27-0.23l-0.4-147.49l-0.87-0.16l0.28-1.43l0.58,0.1l-0.35-127.48l-0.13-0.06l0.64-1.31L489.97,76.8l0.73,0.19 l-0.04,0.14l132.63,65.11l0.33-0.45l1.16,0.88l-0.16,0.22l114.21,56.07l0.45-0.35l0.72,0.93l47.89,23.51l2.76-1.36l0.56,4.61 l-3.32-1.63L571.52,330.88L375.95,482.93l0.66,239.95l51.12,243.57l222.53,107.83l236.23,60.93l2.27-1.77 M375.8,425.34l17.25-8.47 l36.13-127.75l-53.73,9.66L375.8,425.34z M551,241.05l38.19-52.2l-123.83-22.27l-34.13,120.68l98.99-17.81L551,241.05z M532.3,269.09l151.34-27.22l37.63-29.25l-130.48-23.47L532.3,269.09z M303.38,733.9l-2.36-4.48l-44.18-83.78L182.5,747.25 l40.78,36.46l52.69,47.11L303.38,733.9z M277.18,831.91l56.95,50.93L375.69,920l-0.13-49.23l-71.19-135L277.18,831.91z M303.96,731.86l41.93-148.25l-9.74-46.39L257.8,644.33L303.96,731.86z M304.94,733.73l9.55,18.12l61.05,115.78l-0.39-144.6 l-16.9-80.53l-11.71-55.81L304.94,733.73z M375.21,211.79l0.23,85.51l54.17-9.74l34.29-121.23l-88.87-15.98L375.21,211.79z M430.78,288.83l-17.88,63.21L394.81,416l44.01-21.6l90.15-123.23L430.78,288.83z M287.76,898.62l87.99,42.64l-0.05-19.29 l-91.37-81.71l-7.59-6.78l-14.88,52.59L287.76,898.62z M174.26,843.62l86.26,41.8l15-53.03l-93.89-83.95l-53.34,72.91L174.26,843.62 z M113.18,687.22L12.71,765.33l55.69,26.99l58.56,28.38l53.58-73.24l-34.83-31.14L113.18,687.22z M230.62,595.92l-116.27,90.4 l63.02,56.36l4.03,3.61l74.67-102.08l-7.47-14.17L230.62,595.92z M331.94,517.15l-100.15,77.86l25.25,47.88l78.71-107.59l-1.71-8.14 L331.94,517.15z M333.22,516.15l2.02,9.64l1.66,7.92l34.65-47.37L333.22,516.15z M337.31,535.63l9.43,44.95l26.67-94.3 L337.31,535.63z M347.39,583.66l27.74,132.16l-0.62-228.04L347.39,583.66z M374.7,21.83l0.35,127.02l89.27,16.06l24.61-87 L374.7,21.83z M490.25,78.56l-22.26,78.7l-2.24,7.91l124.39,22.37l10.23-13.99l22.04-30.12L490.25,78.56z M623.74,144.09 l-12.29,16.8l-19.71,26.95l131.07,23.58l14.73-11.45L623.74,144.09z M739,200.67l-13.3,10.34l-0.96,0.74l58.14,10.46L739,200.67z M723.19,212.96l-25.33,19.69l-11.14,8.66l97.03-17.45L723.19,212.96z M782.89,225.5l-98.64,17.74l-107.06,83.23L782.89,225.5z M631.68,282.26l49.48-38.47l-150.1,27l-89.41,122.22l129.1-63.37L631.68,282.26z M565.06,334.05l-125.28,61.5l-45.94,62.8 l-14.96,20.44L565.06,334.05z M425.31,412.87l11.65-15.93l-42.69,20.96l-13.66,48.3l-3.58,12.67L425.31,412.87z M392.51,418.76 l-16.71,8.2l0.01,4.72l0.12,45.68L392.51,418.76z M377.21,941.96l21.37,10.36l24.14,11.7l-45.56-40.74L377.21,941.96z M377.15,921.31l34.83,31.15l12.57,11.24l-47.53-90.14L377.15,921.31z M376.63,730.07l0.38,140.33l48.29,91.59L376.63,730.07z M806.29,1197.48l75.8-58.86l-28.56,11.47l-25.6,10.28l14.96,7.25l-0.64,1.31l-16.16-7.83l-124.76,50.1l40.56,36.27L806.29,1197.48z M522.43,1146.18l58.88,111.66l52.71-21.17l64.61-25.95l-75.11-67.17L522.43,1146.18z M621.92,1142.14l-115.78-103.53l-46.8-12.07 l62.33,118.2l7.06-0.18L621.92,1142.14z M700.14,1210.12l124.19-49.87l-42.89-20.78l-155.8,4.04L700.14,1210.12z M679.7,1295.77 l61.03-47.39l-40.9-36.57l-117.85,47.32l42.09,79.82L679.7,1295.77z M522.48,1417.85l1.83-1.42l98.6-76.56l-42.28-80.19 l-84.25,33.83L522.48,1417.85z M496.08,1292.06l83.87-33.68l-59.14-112.16l-55.04,1.43L496.08,1292.06z M465.46,1146.2l54.58-1.42 l-62.61-118.74l-18.03-4.65l0.36-1.41l16.74,4.32l-27.63-52.4L465.46,1146.2z M458.42,1024.79l45.35,11.7l-74.14-66.29 L458.42,1024.79z M431.46,969.87l75.38,67.41l136.26,35.15L431.46,969.87z M649.76,1075.65l-140.54-36.25l114.83,102.68l154.53-4.01 L649.76,1075.65z M656.92,1077.5l124.84,60.5l51.97-1.35l47.7-1.24L656.92,1077.5z M784.62,1139.38l41.54,20.13l56.45-22.67 L784.62,1139.38z'/%3E %3C/svg%3E");
			background-position: -50% 10%;
			background-repeat: repeat-y;
			background-size: 75% auto;
			content: '';
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 50vw;
			z-index: -1;
		}

		#wrapper section {
			display: grid;
			grid-template-areas: "header content" "footer content";
			grid-template-columns: 50vw 50vw;
			grid-template-rows: 1fr;
		}

			#wrapper section:first-child {
				margin-top: 0;
			}

			#wrapper section > header {
				grid-area: header;
				justify-self: end;
				text-align: right;
			}

				#wrapper section > header h2 {
					margin: 0 0 5rem 0;
				}

				#wrapper section > header h1 + p {
					font-family: "Raleway", Helvetica, sans-serif;
					font-size: 0.8rem;
					letter-spacing: 0.175em;
					line-height: 2.5;
					text-transform: uppercase;
				}

				#wrapper section > header ul.actions {
					justify-content: flex-end;
				}

			#wrapper section > .content {
				grid-area: content;
				max-width: 60rem;
				position: relative;
			}

			#wrapper section > footer {
				grid-area: footer;
				text-align: right;
			}

				#wrapper section > footer ul.actions {
					justify-content: flex-end;
				}

		#wrapper > section {
			position: relative;
		}

			#wrapper > section > header:before {
				background: #43d9b8;
				content: '';
				display: block;
				margin-top: 1rem;
				position: absolute;
				width: 2px;
			}

			#wrapper > section > header h1, #wrapper > section > header h2 {
				position: relative;
			}

				#wrapper > section > header h1:before, #wrapper > section > header h2:before {
					background: #43d9b8;
					content: '';
					display: block;
					height: 2px;
					position: absolute;
					top: 1rem;
				}

				#wrapper > section > header h1:after, #wrapper > section > header h2:after {
					background: #43d9b8;
					border-radius: 0.5rem;
					content: '';
					display: block;
					height: 0.5rem;
					position: absolute;
					top: 0.75rem;
					width: 0.5rem;
				}

			#wrapper > section > header h1 {
				margin-top: -2rem;
			}

				#wrapper > section > header h1:before {
					top: 3rem;
				}

				#wrapper > section > header h1:after {
					top: 2.75rem;
				}

			#wrapper > section > .content > section {
				position: relative;
			}

				#wrapper > section > .content > section:first-child {
					margin-top: 6rem;
				}

			#wrapper > section.intro {
				align-items: center;
			}

				#wrapper > section.intro > header {
					padding-top: 4rem;
					width: 100%;
				}

					#wrapper > section.intro > header > * {
						margin-left: auto;
					}

					#wrapper > section.intro > header:before {
						left: auto;
					}

				#wrapper > section.intro > .content {
					height: 100vh;
					max-width: none;
				}

			#wrapper > section:last-of-type > header:before {
				height: 100%;
			}

			#wrapper > section:last-of-type > header:after {
				background: #43d9b8;
				border-radius: 0.5rem;
				bottom: -1.5rem;
				content: '';
				display: block;
				height: 0.5rem;
				position: absolute;
				width: 0.5rem;
				z-index: 1;
			}

		#wrapper .copyright {
			color: rgba(0, 0, 0, 0.25);
			font-size: 1rem;
			left: 50vw;
			position: relative;
			width: 50vw;
		}

			#wrapper .copyright a {
				color: inherit;
			}

		#wrapper section {
			margin: 7.5rem 0 0 0;
		}

			#wrapper section > header {
				padding: 0 10rem 0 5rem;
				width: 35rem;
			}

			#wrapper section > .content {
				padding: 0 5rem;
			}

			#wrapper section > footer {
				padding: 0 10rem;
			}

		#wrapper > section > header:before {
			height: calc(100% + 10rem);
			left: calc(50vw - 5rem);
		}

		#wrapper > section > header h1:before, #wrapper > section > header h2:before {
			right: -5rem;
			width: 2.5rem;
		}

		#wrapper > section > header h1:after, #wrapper > section > header h2:after {
			right: -2.5rem;
		}

		#wrapper > section > .content > section {
			left: calc(-50vw - 5rem);
		}

			#wrapper > section > .content > section > header {
				width: 32rem;
			}

		#wrapper > section.intro > header > * {
			width: 20rem;
		}

		#wrapper > section.intro > header:before {
			margin-left: calc(50vw - 10rem);
		}

		@media screen and (max-width: 1152px) {

			#wrapper > section.intro > header > * {
				width: 100%;
			}

			#wrapper > section.intro > header:before {
				margin-left: 0;
			}

		}

		#wrapper > section:last-of-type > header:after {
			left: calc(50vw - 5rem - 0.25rem + 1px);
		}

		#wrapper .copyright {
			padding: 0 5rem;
		}

		@media screen and (max-width: 1280px) {

			#wrapper {
				padding: 0 0 8rem 0;
			}

				#wrapper section {
					margin: 6rem 0 0 0;
				}

					#wrapper section > header {
						padding: 0 8rem 0 4rem;
						width: 33rem;
					}

					#wrapper section > .content {
						padding: 0 4rem;
					}

					#wrapper section > footer {
						padding: 0 8rem;
					}

				#wrapper > section > header:before {
					height: calc(100% + 8rem);
					left: calc(50vw - 4rem);
				}

				#wrapper > section > header h1:before, #wrapper > section > header h2:before {
					right: -4rem;
					width: 2rem;
				}

				#wrapper > section > header h1:after, #wrapper > section > header h2:after {
					right: -2rem;
				}

				#wrapper > section > .content > section {
					left: calc(-50vw - 4rem);
				}

					#wrapper > section > .content > section > header {
						width: 30rem;
					}

				#wrapper > section.intro > header > * {
					width: 21rem;
				}

				#wrapper > section.intro > header:before {
					margin-left: calc(50vw - 8rem);
				}

		}

		@media screen and (max-width: 1280px) and (max-width: 1152px) {

			#wrapper > section.intro > header > * {
				width: 100%;
			}

			#wrapper > section.intro > header:before {
				margin-left: 0;
			}

		}

		@media screen and (max-width: 1280px) {

				#wrapper > section:last-of-type > header:after {
					left: calc(50vw - 4rem - 0.25rem + 1px);
				}

				#wrapper .copyright {
					padding: 0 4rem;
				}

		}

		@media screen and (max-width: 1152px) {

			#wrapper {
				padding: 0;
			}

				#wrapper:before {
					display: none;
				}

				#wrapper section {
					grid-template-areas: "header" "content" "footer";
					grid-template-columns: 1fr;
					grid-template-rows: 3fr;
				}

					#wrapper section > header {
						justify-self: start;
						padding: 0;
						text-align: left;
						width: 100%;
					}

						#wrapper section > header ul.actions {
							justify-content: flex-start;
						}

					#wrapper section > .content {
						padding: 0;
						width: 100%;
						overflow-x: hidden;
					}

					#wrapper section > footer {
						padding: 0;
						text-align: left;
					}

						#wrapper section > footer ul.actions {
							justify-content: flex-start;
						}

				#wrapper > section {
					margin: 0;
				}

					#wrapper > section > header {
						background-attachment: fixed;
						background-color: #49fcd4;
						background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 920 1750' x='0px' y='0px'%3E %3Cpath style='fill: rgba(67, 217, 184, 0.5)' d='M889.72,1137.55l-2.91-0.75l-364.39,282.94l-0.7-0.9l-0.51,0.11l-94.77-451.5l-32.51-15.75l-16.73-8.11l0,0.68 l-1.46,0l0-1.39l-1.89-0.92l-112.41-54.47l-0.29,1.03l-1.41-0.37l0.37-1.31l-34.14-16.54l-98.56-47.76l-0.59,0.81l-1.16-0.88 l0.42-0.57L11.43,766.33l-0.25,0.2l-0.9-1.15l102.87-79.98l0.08-0.1l0.02,0.02l116.68-90.72l-0.18-0.34l1.3-0.66l0.05,0.09 l100.5-78.14l-0.07-0.32l0.65-0.14l42.3-32.89l-0.15-54.54l-0.59,0.29l-0.64-1.31l1.23-0.6l-0.01-4.54l-0.33-122.47l-0.99,0.18 l-0.28-1.43l1.27-0.23l-0.4-147.49l-0.87-0.16l0.28-1.43l0.58,0.1l-0.35-127.48l-0.13-0.06l0.64-1.31L489.97,76.8l0.73,0.19 l-0.04,0.14l132.63,65.11l0.33-0.45l1.16,0.88l-0.16,0.22l114.21,56.07l0.45-0.35l0.72,0.93l47.89,23.51l2.76-1.36l0.56,4.61 l-3.32-1.63L571.52,330.88L375.95,482.93l0.66,239.95l51.12,243.57l222.53,107.83l236.23,60.93l2.27-1.77 M375.8,425.34l17.25-8.47 l36.13-127.75l-53.73,9.66L375.8,425.34z M551,241.05l38.19-52.2l-123.83-22.27l-34.13,120.68l98.99-17.81L551,241.05z M532.3,269.09l151.34-27.22l37.63-29.25l-130.48-23.47L532.3,269.09z M303.38,733.9l-2.36-4.48l-44.18-83.78L182.5,747.25 l40.78,36.46l52.69,47.11L303.38,733.9z M277.18,831.91l56.95,50.93L375.69,920l-0.13-49.23l-71.19-135L277.18,831.91z M303.96,731.86l41.93-148.25l-9.74-46.39L257.8,644.33L303.96,731.86z M304.94,733.73l9.55,18.12l61.05,115.78l-0.39-144.6 l-16.9-80.53l-11.71-55.81L304.94,733.73z M375.21,211.79l0.23,85.51l54.17-9.74l34.29-121.23l-88.87-15.98L375.21,211.79z M430.78,288.83l-17.88,63.21L394.81,416l44.01-21.6l90.15-123.23L430.78,288.83z M287.76,898.62l87.99,42.64l-0.05-19.29 l-91.37-81.71l-7.59-6.78l-14.88,52.59L287.76,898.62z M174.26,843.62l86.26,41.8l15-53.03l-93.89-83.95l-53.34,72.91L174.26,843.62 z M113.18,687.22L12.71,765.33l55.69,26.99l58.56,28.38l53.58-73.24l-34.83-31.14L113.18,687.22z M230.62,595.92l-116.27,90.4 l63.02,56.36l4.03,3.61l74.67-102.08l-7.47-14.17L230.62,595.92z M331.94,517.15l-100.15,77.86l25.25,47.88l78.71-107.59l-1.71-8.14 L331.94,517.15z M333.22,516.15l2.02,9.64l1.66,7.92l34.65-47.37L333.22,516.15z M337.31,535.63l9.43,44.95l26.67-94.3 L337.31,535.63z M347.39,583.66l27.74,132.16l-0.62-228.04L347.39,583.66z M374.7,21.83l0.35,127.02l89.27,16.06l24.61-87 L374.7,21.83z M490.25,78.56l-22.26,78.7l-2.24,7.91l124.39,22.37l10.23-13.99l22.04-30.12L490.25,78.56z M623.74,144.09 l-12.29,16.8l-19.71,26.95l131.07,23.58l14.73-11.45L623.74,144.09z M739,200.67l-13.3,10.34l-0.96,0.74l58.14,10.46L739,200.67z M723.19,212.96l-25.33,19.69l-11.14,8.66l97.03-17.45L723.19,212.96z M782.89,225.5l-98.64,17.74l-107.06,83.23L782.89,225.5z M631.68,282.26l49.48-38.47l-150.1,27l-89.41,122.22l129.1-63.37L631.68,282.26z M565.06,334.05l-125.28,61.5l-45.94,62.8 l-14.96,20.44L565.06,334.05z M425.31,412.87l11.65-15.93l-42.69,20.96l-13.66,48.3l-3.58,12.67L425.31,412.87z M392.51,418.76 l-16.71,8.2l0.01,4.72l0.12,45.68L392.51,418.76z M377.21,941.96l21.37,10.36l24.14,11.7l-45.56-40.74L377.21,941.96z M377.15,921.31l34.83,31.15l12.57,11.24l-47.53-90.14L377.15,921.31z M376.63,730.07l0.38,140.33l48.29,91.59L376.63,730.07z M806.29,1197.48l75.8-58.86l-28.56,11.47l-25.6,10.28l14.96,7.25l-0.64,1.31l-16.16-7.83l-124.76,50.1l40.56,36.27L806.29,1197.48z M522.43,1146.18l58.88,111.66l52.71-21.17l64.61-25.95l-75.11-67.17L522.43,1146.18z M621.92,1142.14l-115.78-103.53l-46.8-12.07 l62.33,118.2l7.06-0.18L621.92,1142.14z M700.14,1210.12l124.19-49.87l-42.89-20.78l-155.8,4.04L700.14,1210.12z M679.7,1295.77 l61.03-47.39l-40.9-36.57l-117.85,47.32l42.09,79.82L679.7,1295.77z M522.48,1417.85l1.83-1.42l98.6-76.56l-42.28-80.19 l-84.25,33.83L522.48,1417.85z M496.08,1292.06l83.87-33.68l-59.14-112.16l-55.04,1.43L496.08,1292.06z M465.46,1146.2l54.58-1.42 l-62.61-118.74l-18.03-4.65l0.36-1.41l16.74,4.32l-27.63-52.4L465.46,1146.2z M458.42,1024.79l45.35,11.7l-74.14-66.29 L458.42,1024.79z M431.46,969.87l75.38,67.41l136.26,35.15L431.46,969.87z M649.76,1075.65l-140.54-36.25l114.83,102.68l154.53-4.01 L649.76,1075.65z M656.92,1077.5l124.84,60.5l51.97-1.35l47.7-1.24L656.92,1077.5z M784.62,1139.38l41.54,20.13l56.45-22.67 L784.62,1139.38z'/%3E %3C/svg%3E");
						background-position: 25% 50%;
						background-repeat: repeat-y;
						background-size: 40rem auto;
					}

						#wrapper > section > header > * {
							max-width: 25rem;
						}

						#wrapper > section > header > :last-child {
							margin-bottom: 0;
						}

						#wrapper > section > header:before {
							display: none;
						}

						#wrapper > section > header h1:before, #wrapper > section > header h2:before {
							display: none;
						}

						#wrapper > section > header h1:after, #wrapper > section > header h2:after {
							display: none;
						}

					#wrapper > section > .content > :last-child {
						margin-bottom: 0;
					}

					#wrapper > section > .content > section {
						left: 0;
					}

						#wrapper > section > .content > section:first-child {
							margin-top: 0;
						}

						#wrapper > section > .content > section > header {
							width: 100%;
						}

						#wrapper > section > .content > section:last-child {
							margin-bottom: 0;
						}

					#wrapper > section > footer > :last-child {
						margin-bottom: 0;
					}

					#wrapper > section.intro {
						margin-bottom: 0;
					}

						#wrapper > section.intro > header {
							margin-bottom: 0;
						}

							#wrapper > section.intro > header ul.actions {
								display: none;
							}

							#wrapper > section.intro > header > * {
								margin-left: 0;
								margin-right: 0;
								width: 100%;
							}

							#wrapper > section.intro > header > ul.actions {
								margin-left: -1rem;
							}

							#wrapper > section.intro > header:before {
								margin-left: 0;
							}

					#wrapper > section:last-of-type > header:after {
						display: none;
					}

				#wrapper .copyright {
					left: 0;
					width: 100%;
				}

				#wrapper section {
					margin: 6rem 0 0 0;
				}

				#wrapper > section {
					margin: 0;
				}

					#wrapper > section > header {
						padding: 4rem 4rem;
					}

					#wrapper > section > .content {
						padding: 4rem 4rem;
					}

						#wrapper > section > .content > section {
							margin: 4rem 0;
						}

					#wrapper > section > footer {
						padding: 0 4rem 4rem 4rem;
					}

					#wrapper > section.intro > header {
						padding: 8rem 4rem 5rem 4rem;
					}

				#wrapper .copyright {
					padding: 0 4rem 4rem 4rem;
				}

		}

		@media screen and (max-width: 736px) {

			#wrapper section {
				margin: 3rem 0 0 0;
			}

			#wrapper > section {
				margin: 0;
			}

				#wrapper > section > header {
					padding: 3rem 2rem;
				}

				#wrapper > section > .content {
					padding: 3rem 2rem;
				}

					#wrapper > section > .content > section {
						margin: 3rem 0;
					}

				#wrapper > section > footer {
					padding: 0 2rem 3rem 2rem;
				}

				#wrapper > section.intro > header {
					padding: 5.5rem 2rem 2.5rem 2rem;
				}

			#wrapper .copyright {
				padding: 0 2rem 2rem 2rem;
			}

		}

		@media screen and (max-width: 360px) {

			#wrapper section {
				margin: 2.25rem 0 0 0;
			}

			#wrapper > section {
				margin: 0;
			}

				#wrapper > section > header {
					padding: 2.25rem 1.5rem;
				}

				#wrapper > section > .content {
					padding: 2.25rem 1.5rem;
				}

					#wrapper > section > .content > section {
						margin: 2.25rem 0;
					}

				#wrapper > section > footer {
					padding: 0 1.5rem 2.25rem 1.5rem;
				}

				#wrapper > section.intro > header {
					padding: 4.875rem 1.5rem 1.875rem 1.5rem;
				}

			#wrapper .copyright {
				padding: 0 1.5rem 1.5rem 1.5rem;
			}

		}

	body.is-mobile #wrapper:before {
		background-attachment: scroll;
		background-position: 50% -3%;
		background-repeat: repeat-y;
		background-size: 150% auto;
	}

	body.is-mobile #wrapper > section > header {
		background-attachment: scroll;
		background-position: 25% 50%;
	}

	body.is-mobile #wrapper > section.intro > header {
		background-position: 25% 23%;
	}

	#wrapper:before {
		transition: opacity 1s ease;
	}

		body.is-preload #wrapper:before {
			opacity: 0;
		}

	#wrapper > section.intro {
		transition: opacity 1s ease;
		opacity: 1;
	}

		#wrapper > section.intro > header {
			transition: transform 1s ease;
		}

		#wrapper > section.intro > .content {
			transition: transform 1s ease;
		}

		body.is-preload #wrapper > section.intro {
			opacity: 0;
		}

			body.is-preload #wrapper > section.intro > header {
				transform: translateY(1rem);
			}

			body.is-preload #wrapper > section.intro > .content {
				transform: translateY(-1rem);
			}

		@media screen and (max-width: 1280px) {

			#wrapper > section.intro > header > * {
				transition: transform 1s ease, opacity 1s ease;
			}

			body.is-preload #wrapper > section.intro > header {
				transform: none;
			}

				body.is-preload #wrapper > section.intro > header > * {
					transform: translate(-0.5rem);
					opacity: 0;
				}

			body.is-preload #wrapper > section.intro > .content {
				transform: none;
			}

		}

	body.is-ie #wrapper section {
		display: flex;
		flex-wrap: wrap;
	}

		body.is-ie #wrapper section > header {
			width: 50%;
		}

		body.is-ie #wrapper section > .content {
			width: 50%;
		}

		body.is-ie #wrapper section > footer {
			width: 50%;
			text-align: left;
			margin-left: 50%;
			padding: 5rem;
		}

	body.is-ie #wrapper > section > .content > section {
		width: 100vw;
	}

	@media screen and (max-width: 1280px) {

		body.is-ie #wrapper section > footer {
			padding: 4rem;
		}

	}
`;

export default paradignShiftStyle;
