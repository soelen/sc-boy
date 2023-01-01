import { css } from "lit";

const solidStateStyle = css`

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

	#page-wrapper {
		background-color: #2e3141;
		background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("https://picsum.photos/id/931/1920/1080");
		background-size: auto, cover;
		background-attachment: fixed, fixed;
		background-position: center, center;
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

/* Type */

	#page-wrapper, input, select, textarea {
		color: #ffffff;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-weight: 300;
		line-height: 1.65;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 13pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 980px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 736px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 480px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

	a {
		-moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
		color: #ffffff;
		text-decoration: none;
	}

		a:hover {
			border-bottom-color: transparent;
			color: #ffffff !important;
		}

		a.special:not(.button) {
			text-decoration: none;
			border-bottom: 0;
			display: block;
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 0.8em;
			font-weight: 700;
			letter-spacing: 0.1em;
			margin: 0 0 2em 0;
			text-transform: uppercase;
		}

			a.special:not(.button):hover:before {
				background-color: rgba(255, 255, 255, 0.025);
			}

			a.special:not(.button):active:before {
				background-color: rgba(255, 255, 255, 0.075);
			}

	strong, b {
		color: #ffffff;
		font-weight: 600;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #ffffff;
		font-family: Raleway, Helvetica, sans-serif;
		font-weight: 700;
		letter-spacing: 0.1em;
		margin: 0 0 1em 0;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
			border-bottom: 0;
		}

		h1 span, h2 span, h3 span, h4 span, h5 span, h6 span {
			font-weight: 200;
		}

		h1.major, h2.major, h3.major, h4.major, h5.major, h6.major {
			padding-bottom: 1em;
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
		}

	h2 {
		font-size: 1.2em;
	}

	h3 {
		font-size: 0.9em;
	}

	h4 {
		font-size: 0.7em;
	}

	h5 {
		font-size: 0.7em;
	}

	h6 {
		font-size: 0.7em;
	}

	@media screen and (max-width: 736px) {

		h2 {
			font-size: 1em;
		}

		h3 {
			font-size: 0.8em;
		}

	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	blockquote {
		border-left: solid 4px rgba(255, 255, 255, 0.125);
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		background: rgba(255, 255, 255, 0.025);
		border-radius: 5px;
		border: solid 2px rgba(255, 255, 255, 0.125);
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2em 0;
	}

		pre code {
			display: block;
			line-height: 1.75em;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 2px rgba(255, 255, 255, 0.125);
		margin: 2.5em 0;
	}

		hr.major {
			margin: 4em 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

/* Form */

	form {
		margin: 0 0 2em 0;
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
			width: calc(100% + 3em);
			margin: -1.5em 0 2em -1.5em;
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
				padding: 1.5em 0 0 1.5em;
				width: calc(100% - 1.5em);
			}

				form > .fields > .field.half {
					width: calc(50% - 0.75em);
				}

				form > .fields > .field.third {
					width: calc(100%/3 - 0.5em);
				}

				form > .fields > .field.quarter {
					width: calc(25% - 0.375em);
				}

		@media screen and (max-width: 480px) {

			form > .fields {
				width: calc(100% + 3em);
				margin: -1.5em 0 2em -1.5em;
			}

				form > .fields > .field {
					padding: 1.5em 0 0 1.5em;
					width: calc(100% - 1.5em);
				}

					form > .fields > .field.half {
						width: calc(100% - 1.5em);
					}

					form > .fields > .field.third {
						width: calc(100% - 1.5em);
					}

					form > .fields > .field.quarter {
						width: calc(100% - 1.5em);
					}

		}

	label {
		color: #ffffff;
		display: block;
		font-family: Raleway, Helvetica, sans-serif;
		font-size: 0.8em;
		font-weight: 700;
		letter-spacing: 0.1em;
		margin: 0 0 0.7em 0;
		text-transform: uppercase;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background: rgba(255, 255, 255, 0.025);
		border-radius: 5px;
		border: none;
		border: solid 2px rgba(255, 255, 255, 0.125);
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		input[type="tel"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		input[type="tel"]:focus,
		select:focus,
		textarea:focus {
			border-color: #5b6ba6;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.125)' /%3E%3C/svg%3E");
		background-size: 1.25rem;
		background-repeat: no-repeat;
		background-position: calc(100% - 1rem) center;
		height: 2.75em;
		padding-right: 2.75em;
		text-overflow: ellipsis;
	}

		select option {
			color: #ffffff;
			background: #2e3141;
		}

		select:focus::-ms-value {
			background-color: transparent;
		}

		select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2em;
		opacity: 0;
		width: 1em;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			color: #ffffff;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-family: "Source Sans Pro", Helvetica, sans-serif;
			text-transform: none;
			letter-spacing: 0;
			font-weight: 300;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				background: rgba(255, 255, 255, 0.025);
				border-radius: 5px;
				border: solid 2px rgba(255, 255, 255, 0.125);
				content: '';
				display: inline-block;
				font-size: 0.8em;
				height: 2.0625em;
				left: 0;
				line-height: 2.0625em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 2.0625em;
			}

		input[type="checkbox"]:focus + label:before,
		input[type="radio"]:focus + label:before {
			border-color: #4c5c96;
		}

	input[type="checkbox"] + label:before {
		border-radius: 5px;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

/* Box */

	.box {
		border-radius: 5px;
		border: solid 2px rgba(255, 255, 255, 0.125);
		margin-bottom: 2em;
		padding: 1.5em;
	}

		.box > :last-child,
		.box > :last-child > :last-child,
		.box > :last-child > :last-child > :last-child {
			margin-bottom: 0;
		}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
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
		border-radius: 5px;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			border-radius: 5px;
			display: block;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			padding: 0 1.5em 1em 0;
			top: 0.25em;
		}

		.image.right {
			float: right;
			padding: 0 0 1em 1.5em;
			top: 0.25em;
		}

		.image.fit {
			display: block;
			margin: 0 0 2em 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 0 0 3em 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2em 0;
		padding-left: 1.25em;
	}

		ol li {
			padding-left: 0.25em;
		}

	ul {
		list-style: disc;
		margin: 0 0 2em 0;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt li {
				border-top: solid 1px rgba(255, 255, 255, 0.125);
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

	dl {
		margin: 0 0 2em 0;
	}

		dl dt {
			display: block;
			font-weight: 600;
			margin: 0 0 1em 0;
		}

		dl dd {
			margin-left: 2em;
		}

/* Actions */

	ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1em;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1em;
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
				padding: 1.3em 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1em);
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
					padding: 1em 0 0 0;
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
			padding: 0 1em 0 0;
		}

			ul.icons li:last-child {
				padding-right: 0;
			}

			ul.icons li .icon:before {
				font-size: 1.25em;
			}

/* Contact */

	ul.contact {
		list-style: none;
		padding: 0;
	}

		ul.contact li {
			text-decoration: none;
			margin: 2.5em 0 0 0;
			padding: 0 0 0 3.25em;
      display: flex;
      gap: 16px;
		}

		ul.contact li svg {
      border-radius: 100%;
      border: solid 2px rgba(255, 255, 255, 0.125);
      width: 2.5em;
      height: 2.5em;
      fill: white;
      padding: 10px;
		}

			ul.contact li:first-child {
				margin-top: 0;
			}

		@media screen and (max-width: 736px) {

			ul.contact li {
				margin: 1.5em 0 0 0;
			}

		}

/* Pagination */

	ul.pagination {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.pagination li {
			display: inline-block;
			padding-left: 0;
			vertical-align: middle;
		}

			ul.pagination li > .page {
				-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
				-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
				-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
				transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
				border-bottom: 0;
				border-radius: 5px;
				display: inline-block;
				height: 1.5em;
				line-height: 1.5em;
				margin: 0 0.125em;
				min-width: 1.5em;
				padding: 0 0.5em;
				text-align: center;
			}

				ul.pagination li > .page:hover {
					background-color: rgba(255, 255, 255, 0.025);
				}

				ul.pagination li > .page.active {
					background-color: #4c5c96;
				}

			ul.pagination li:first-child {
				padding-right: 0.75em;
			}

			ul.pagination li:last-child {
				padding-left: 0.75em;
			}

		@media screen and (max-width: 480px) {

			ul.pagination li:nth-child(n+2):nth-last-child(n+2) {
				display: none;
			}

			ul.pagination li .button {
				width: 100%;
			}

			ul.pagination li:first-child {
				width: calc(50% - 2px);
				text-align: left;
				padding-right: 0.325em;
			}

			ul.pagination li:last-child {
				width: calc(50% - 2px);
				text-align: right;
				padding-left: 0.325em;
			}

		}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		overflow-x: auto;
	}

	table {
		margin: 0 0 2em 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px rgba(255, 255, 255, 0.125);
			border-left: 0;
			border-right: 0;
		}

			table tbody tr:nth-child(2n + 1) {
				background-color: rgba(255, 255, 255, 0.025);
			}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			color: #ffffff;
			font-size: 0.9em;
			font-weight: 600;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
		}

		table tfoot {
			border-top: solid 2px rgba(255, 255, 255, 0.125);
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px rgba(255, 255, 255, 0.125);
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
		-moz-transition: background-color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out;
		background-color: transparent;
		border-radius: 5px;
		border: 0;
		box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.125);
		color: #ffffff !important;
		cursor: pointer;
		display: inline-block;
		font-family: Raleway, Helvetica, sans-serif;
		font-size: 0.8em;
		font-weight: 700;
		height: 3.75em;
		letter-spacing: 0.1em;
		line-height: 3.75em;
		padding: 0 2.25em;
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
			background-color: rgba(255, 255, 255, 0.025);
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: rgba(255, 255, 255, 0.075);
		}

		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		input[type="button"].icon:before,
		button.icon:before,
		.button.icon:before {
			margin-right: 0.5em;
			color: rgba(255, 255, 255, 0.35);
		}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		button.primary,
		.button.primary {
			background-color: #4c5c96;
			box-shadow: none;
		}

			input[type="submit"].primary:hover,
			input[type="reset"].primary:hover,
			input[type="button"].primary:hover,
			button.primary:hover,
			.button.primary:hover {
				background-color: #53639e;
			}

			input[type="submit"].primary:active,
			input[type="reset"].primary:active,
			input[type="button"].primary:active,
			button.primary:active,
			.button.primary:active {
				background-color: #45558d;
			}

			input[type="submit"].primary.icon:before,
			input[type="reset"].primary.icon:before,
			input[type="button"].primary.icon:before,
			button.primary.icon:before,
			.button.primary.icon:before {
				color: #7985b0;
			}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.6em;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		button.large,
		.button.large {
			font-size: 1em;
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
			opacity: 0.25;
		}

		@media screen and (max-width: 480px) {

			input[type="submit"],
			input[type="reset"],
			input[type="button"],
			button,
			.button {
				padding: 0;
			}

		}

/* Features */

	.features {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin: 0 0 2em 0;
	}

		.features article {
			padding: 1.75em 1.75em 0.1em 1.75em ;
			background-color: #353849;
			border-radius: 5px;
			margin: 1.5em 3em 1.5em 0;
			width: calc(50% - 1.5em);
		}

			.features article:nth-child(2n) {
				margin-right: 0;
			}

			.features article .image {
				border-radius: 5px 5px 0 0;
				display: block;
				margin-bottom: 1.75em;
				margin-left: -1.75em;
				margin-top: -1.75em;
				position: relative;
				width: calc(100% + 3.5em);
			}

				.features article .image img {
					border-radius: 5px 5px 0 0;
					width: 100%;
				}

		@media screen and (max-width: 980px) {

			.features article {
				margin: 1em 2em 1em 0;
				width: calc(50% - 1em);
			}

		}

		@media screen and (max-width: 736px) {

			.features article {
				padding: 1.5em 1.5em 0.1em 1.5em ;
				margin: 0.875em 1.75em 0.875em 0;
				width: calc(50% - 0.875em - 1px);
			}

				.features article .image {
					margin-bottom: 1.5em;
					margin-left: -1.5em;
					margin-top: -1.5em;
					width: calc(100% + 3em);
				}

		}

		@media screen and (max-width: 480px) {

			.features {
				display: block;
			}

				.features article {
					width: 100%;
					margin: 0 0 2em 0 !important;
				}

		}

/* Header */

	#header {
		transition: background-color 0.2s ease-in-out;
		background-color: rgba(53, 56, 73, 0.95);
		padding: 24px 1.25em;
	}

		#header nav {
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 0.8em;
			font-weight: 700;
			height: 3em;
			letter-spacing: 0.1em;
			line-height: 3em;
			text-transform: uppercase;
      display: inline-block;
		}

			#header nav a {
				border: 0;
				display: flex;
				padding: 0 1em;
        align-items: center;
        gap: 12px;
			}
      #header nav a svg {
        width: 16px;
        height: 16px;
        fill: white;
      }

				#header nav a:before {
					float: right;
					margin-left: 0.75em;
				}

				#header nav a[href="#menu"] {
					text-decoration: none;
					-moz-transition: background-color 0.2s ease-in-out;
					-webkit-transition: background-color 0.2s ease-in-out;
					-ms-transition: background-color 0.2s ease-in-out;
					transition: background-color 0.2s ease-in-out;
					border-radius: 5px;
					box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.125);
					padding: 0 1.35em;
				}

					#header nav a[href="#menu"]:hover {
						background-color: rgba(255, 255, 255, 0.025);
					}

					#header nav a[href="#menu"]:active {
						background-color: rgba(255, 255, 255, 0.075);
					}

		#header.alt {
			background-color: transparent;
		}

			#header.alt h1 {
				opacity: 0;
				visibility: hidden;
			}

		@media screen and (max-width: 736px) {

				#header nav {
					top: 0;
					right: 0;
					height: inherit;
					line-height: inherit;
				}

					#header nav a {
						height: inherit;
						line-height: inherit;
					}

						#header nav a[href="#menu"] {
							box-shadow: none;
							padding: 0 1em;
							border-radius: 0;
						}

							#header nav a[href="#menu"]:hover, #header nav a[href="#menu"]:active {
								background-color: inherit;
							}

		}

		@media screen and (max-width: 480px) {

			#header nav a[href="#menu"] {
				width: 4em;
				white-space: nowrap;
				text-indent: 4em;
				position: relative;
			}

				#header nav a[href="#menu"]:before {
					width: inherit;
					position: absolute;
					top: 0;
					left: 0;
					text-indent: 0;
					text-align: right;
					margin-left: 0;
					padding-right: 1.25em;
				}

		}

/* Menu */

	#page-wrapper {
		-moz-transition: -moz-filter 0.25s ease;
		-webkit-transition: -webkit-filter 0.25s ease;
		-ms-transition: -ms-filter 0.25s ease;
		transition: filter 0.25s ease;
	}

	#menu {
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		transition: opacity 0.35s ease, visibility 0.35s;
		user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		background: rgba(46, 49, 65, 0.8);
		cursor: default;
		height: 100%;
		left: 0;
		opacity: 0;
		position: fixed;
		text-align: center;
		top: 0;
		visibility: hidden;
		width: 100%;
	}

		#menu .inner {
			padding: 2.5em 1.5em 0.5em 1.5em ;
			-moz-transform: translateY(0.5em);
			-webkit-transform: translateY(0.5em);
			-ms-transform: translateY(0.5em);
			transform: translateY(0.5em);
			-moz-transition: opacity 0.35s ease, -moz-transform 0.35s ease;
			-webkit-transition: opacity 0.35s ease, -webkit-transform 0.35s ease;
			-ms-transition: opacity 0.35s ease, -ms-transform 0.35s ease;
			transition: opacity 0.35s ease, transform 0.35s ease;
			-webkit-overflow-scrolling: touch;
			background: #4c5c96;
			border-radius: 5px;
			display: block;
			max-width: 100%;
			opacity: 0;
			position: relative;
			width: 18em;
		}

		#menu h2 {
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
			padding-bottom: 1em;
		}

		#menu .close {
			background-image: url("images/close.svg");
			background-position: 75% 25%;
			background-repeat: no-repeat;
			background-size: 2em 2em;
			border: 0;
			content: '';
			display: block;
			height: 4em;
			overflow: hidden;
			position: absolute;
			right: 0;
			text-align: center;
			text-indent: 4em;
			top: 0;
			width: 4em;
		}

		#menu .links {
			list-style: none;
			margin-bottom: 1.5em;
			padding: 0;
		}

			#menu .links li {
				padding: 0;
			}

				#menu .links li a {
					border-radius: 5px;
					border: 0;
					display: block;
					font-family: Raleway, Helvetica, sans-serif;
					font-size: 0.8em;
					font-weight: 200;
					letter-spacing: 0.1em;
					line-height: 1.85em;
					padding: 0.75em 0;
					text-transform: uppercase;
				}

					#menu .links li a:hover {
						background: #45558d;
					}

		@media screen and (max-width: 736px) {

			#menu .inner {
				max-height: 100%;
				overflow-y: auto;
				overflow-x: hidden;
			}

				#menu .inner .close {
					background-size: 1.5em 1.5em;
				}

		}

	body.is-menu-visible #page-wrapper {
		-moz-filter: blur(1.5px);
		-webkit-filter: blur(1.5px);
		-ms-filter: blur(1.5px);
		filter: blur(1.5px);
	}

	body.is-menu-visible #menu {
		pointer-events: auto;
		opacity: 1;
		visibility: visible;
	}

		body.is-menu-visible #menu .inner {
			-moz-transform: translateY(0);
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}

/* Banner */

	#banner {
		padding: 10em 0 4.75em 0 ;
	}

		#banner .inner {
			margin: 0 auto;
			width: 55em;
		}

		#banner .logo {
			-moz-transition: opacity 2s ease, -moz-transform 1s ease;
			-webkit-transition: opacity 2s ease, -webkit-transform 1s ease;
			-ms-transition: opacity 2s ease, -ms-transform 1s ease;
			transition: opacity 2s ease, transform 1s ease;
			-moz-transform: translateY(0);
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
			margin: 0 0 1.3em 0;
		}

			#banner .logo .icon {
				border-radius: 100%;
				border: solid 2px rgba(255, 255, 255, 0.125);
				cursor: default;
				display: flex;
        align-items: center;
				width: 80px;
				height: 80px;
        padding: 16px;
			}
			#banner .logo .icon svg {
        fill: white;
        width: 50px;
        height: 50px;
			}

		#banner h2 {
			-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease, -moz-filter 0.25s ease;
			-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease, -webkit-filter 0.25s ease;
			-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease, -ms-filter 0.25s ease;
			transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
			-moz-transform: translateX(0);
			-webkit-transform: translateX(0);
			-ms-transform: translateX(0);
			transform: translateX(0);
			-moz-transition-delay: 0.65s;
			-webkit-transition-delay: 0.65s;
			-ms-transition-delay: 0.65s;
			transition-delay: 0.65s;
			-moz-filter: blur(0);
			-webkit-filter: blur(0);
			-ms-filter: blur(0);
			filter: blur(0);
			opacity: 1;
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
			font-size: 2.25em;
			margin-bottom: 0.8em;
			padding-bottom: 0.4em;
		}

		#banner p {
			-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease, -moz-filter 0.25s ease;
			-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease, -webkit-filter 0.25s ease;
			-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease, -ms-filter 0.25s ease;
			transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
			-moz-transform: translateX(0);
			-webkit-transform: translateX(0);
			-ms-transform: translateX(0);
			transform: translateX(0);
			-moz-transition-delay: 0.8s;
			-webkit-transition-delay: 0.8s;
			-ms-transition-delay: 0.8s;
			transition-delay: 0.8s;
			-moz-filter: blur(0);
			-webkit-filter: blur(0);
			-ms-filter: blur(0);
			filter: blur(0);
			opacity: 1;
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 1em;
			font-weight: 200;
			letter-spacing: 0.1em;
			line-height: 2;
			text-transform: uppercase;
		}

		@media screen and (max-width: 1280px) {

			#banner {
				padding: 7em 0 8.25em 0 ;
				background-color: #2e3141;
				background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../images/bg.jpg");
				background-size: auto,
 cover;
				background-position: center,
 center;
				margin-bottom: -6.5em;
			}

		}

		@media screen and (max-width: 980px) {

			#banner {
				padding: 12em 3em 12.375em 3em ;
				margin-bottom: -4.75em;
			}

				#banner .inner {
					width: 100%;
				}

		}

		@media screen and (max-width: 736px) {

			#banner {
				padding: 5em 2em 4.25em 2em ;
				margin-bottom: -2.5em;
			}

				#banner .logo {
					margin: 0 0 1em 0;
				}

				#banner h2 {
					font-size: 1.5em;
				}

				#banner p {
					font-size: 0.8em;
				}

		}

		body.is-preload #banner .logo {
			-moz-transform: translateY(0.5em);
			-webkit-transform: translateY(0.5em);
			-ms-transform: translateY(0.5em);
			transform: translateY(0.5em);
			opacity: 0;
		}

		body.is-preload #banner h2 {
			opacity: 0;
			-moz-transform: translateX(0.25em);
			-webkit-transform: translateX(0.25em);
			-ms-transform: translateX(0.25em);
			transform: translateX(0.25em);
			-moz-filter: blur(2px);
			-webkit-filter: blur(2px);
			-ms-filter: blur(2px);
			filter: blur(2px);
		}

		body.is-preload #banner p {
			opacity: 0;
			-moz-transform: translateX(0.5em);
			-webkit-transform: translateX(0.5em);
			-ms-transform: translateX(0.5em);
			transform: translateX(0.5em);
			-moz-filter: blur(2px);
			-webkit-filter: blur(2px);
			-ms-filter: blur(2px);
			filter: blur(2px);
		}

/* Wrapper */

	#wrapper > header {
		padding: 11em 0 2.25em 0 ;
	}

		#wrapper > header .inner {
			margin: 0 auto;
			width: 55em;
		}

		#wrapper > header h2 {
			border-bottom: solid 2px rgba(255, 255, 255, 0.125);
			font-size: 2em;
			margin-bottom: 0.8em;
			padding-bottom: 0.4em;
		}

		#wrapper > header p {
			font-family: Raleway, Helvetica, sans-serif;
			font-size: 1em;
			font-weight: 200;
			letter-spacing: 0.1em;
			line-height: 2;
			text-transform: uppercase;
		}

	@media screen and (max-width: 1280px) {

		#wrapper > header {
			padding: 9em 0 6.25em 0 ;
			background-color: #2e3141;
			background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../images/bg.jpg");
			background-size: auto,
 cover;
			background-position: center,
 0% 30%;
			margin-bottom: -6.5em;
		}

	}

	@media screen and (max-width: 980px) {

		#wrapper > header {
			padding: 11em 3em 7.375em 3em ;
			background-size: auto,
 cover;
			background-position: center,
 0% 0%;
			margin-bottom: -4.75em;
		}

			#wrapper > header .inner {
				width: 100%;
			}

	}

	@media screen and (max-width: 736px) {

		#wrapper > header {
			padding: 6.5em 2em 3em 2em ;
			background-size: auto,
 125%;
			margin-bottom: -2.5em;
		}

			#wrapper > header h2 {
				font-size: 1.25em;
			}

			#wrapper > header p {
				font-size: 0.8em;
			}

	}

	.wrapper {
		background-color: #2e3141;
		margin: 6.5em 0;
		position: relative;
	}

		.wrapper:before, .wrapper:after {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%232e3141%3B' /%3E%3C/svg%3E");
		}

		.wrapper:before {
			box-shadow: inset 0 -1px 0 0 #2e3141, 0 1px 0 0 #2e3141;
		}

		.wrapper:after {
			box-shadow: inset 0 -1px 0 0 #2e3141, 0 1px 0 0 #2e3141;
		}

		.wrapper:before, .wrapper:after {
			background-repeat: no-repeat;
			background-size: 100% 100%;
			content: '';
			display: block;
			height: 6.5em;
			position: absolute;
			width: 100%;
		}

		.wrapper:before {
			left: 0;
			top: -6.5em;
		}

		.wrapper:after {
			-moz-transform: scaleY(-1);
			-webkit-transform: scaleY(-1);
			-ms-transform: scaleY(-1);
			transform: scaleY(-1);
			bottom: -6.5em;
			left: 0;
		}

		.wrapper.alt:before {
			-moz-transform: scaleX(-1);
			-webkit-transform: scaleX(-1);
			-ms-transform: scaleX(-1);
			transform: scaleX(-1);
		}

		.wrapper.alt:after {
			-moz-transform: scaleY(-1) scaleX(-1);
			-webkit-transform: scaleY(-1) scaleX(-1);
			-ms-transform: scaleY(-1) scaleX(-1);
			transform: scaleY(-1) scaleX(-1);
		}

		.wrapper .inner {
			padding: 3em 0 1em 0 ;
			margin: 0 auto;
			width: 55em;
		}

		.wrapper.style2 {
			background-color: #353849;
		}

			.wrapper.style2:before, .wrapper.style2:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23353849%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style2:before {
				box-shadow: inset 0 -1px 0 0 #353849, 0 1px 0 0 #353849;
			}

			.wrapper.style2:after {
				box-shadow: inset 0 -1px 0 0 #353849, 0 1px 0 0 #353849;
			}

		.wrapper.style3 {
			background-color: #3d4051;
		}

			.wrapper.style3:before, .wrapper.style3:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%233d4051%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style3:before {
				box-shadow: inset 0 -1px 0 0 #3d4051, 0 1px 0 0 #3d4051;
			}

			.wrapper.style3:after {
				box-shadow: inset 0 -1px 0 0 #3d4051, 0 1px 0 0 #3d4051;
			}

		.wrapper.style4 {
			background-color: #454858;
		}

			.wrapper.style4:before, .wrapper.style4:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23454858%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style4:before {
				box-shadow: inset 0 -1px 0 0 #454858, 0 1px 0 0 #454858;
			}

			.wrapper.style4:after {
				box-shadow: inset 0 -1px 0 0 #454858, 0 1px 0 0 #454858;
			}

		.wrapper.style5 {
			background-color: #4d5060;
		}

			.wrapper.style5:before, .wrapper.style5:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%234d5060%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style5:before {
				box-shadow: inset 0 -1px 0 0 #4d5060, 0 1px 0 0 #4d5060;
			}

			.wrapper.style5:after {
				box-shadow: inset 0 -1px 0 0 #4d5060, 0 1px 0 0 #4d5060;
			}

		.wrapper.style6 {
			background-color: #555867;
		}

			.wrapper.style6:before, .wrapper.style6:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23555867%3B' /%3E%3C/svg%3E");
			}

			.wrapper.style6:before {
				box-shadow: inset 0 -1px 0 0 #555867, 0 1px 0 0 #555867;
			}

			.wrapper.style6:after {
				box-shadow: inset 0 -1px 0 0 #555867, 0 1px 0 0 #555867;
			}

		.wrapper.spotlight {
			background-color: #4c5c96;
		}

			.wrapper.spotlight:before, .wrapper.spotlight:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%234c5c96%3B' /%3E%3C/svg%3E");
			}

			.wrapper.spotlight:before {
				box-shadow: inset 0 -1px 0 0 #4c5c96, 0 1px 0 0 #4c5c96;
			}

			.wrapper.spotlight:after {
				box-shadow: inset 0 -1px 0 0 #4c5c96, 0 1px 0 0 #4c5c96;
			}

			.wrapper.spotlight .inner {
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-flex-direction: row;
				-webkit-flex-direction: row;
				-ms-flex-direction: row;
				flex-direction: row;
			}

			.wrapper.spotlight .image {
				border-radius: 100%;
				margin: 0 3em 2em 0;
				width: 22em;
				overflow: hidden;
			}

				.wrapper.spotlight .image img {
					border-radius: 100%;
					width: 100%;
				}

			.wrapper.spotlight .content {
				width: 100%;
			}

			.wrapper.spotlight:nth-child(2n - 1) .inner {
				-moz-flex-direction: row-reverse;
				-webkit-flex-direction: row-reverse;
				-ms-flex-direction: row-reverse;
				flex-direction: row-reverse;
				text-align: right;
			}

			.wrapper.spotlight:nth-child(2n - 1) .image {
				margin: 0 0 2em 3em;
			}

			.wrapper.spotlight.style2 {
				background-color: #45558d;
			}

				.wrapper.spotlight.style2:before, .wrapper.spotlight.style2:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2345558d%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style2:before {
					box-shadow: inset 0 -1px 0 0 #45558d, 0 1px 0 0 #45558d;
				}

				.wrapper.spotlight.style2:after {
					box-shadow: inset 0 -1px 0 0 #45558d, 0 1px 0 0 #45558d;
				}

			.wrapper.spotlight.style3 {
				background-color: #3f4e85;
			}

				.wrapper.spotlight.style3:before, .wrapper.spotlight.style3:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%233f4e85%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style3:before {
					box-shadow: inset 0 -1px 0 0 #3f4e85, 0 1px 0 0 #3f4e85;
				}

				.wrapper.spotlight.style3:after {
					box-shadow: inset 0 -1px 0 0 #3f4e85, 0 1px 0 0 #3f4e85;
				}

			.wrapper.spotlight.style4 {
				background-color: #39477c;
			}

				.wrapper.spotlight.style4:before, .wrapper.spotlight.style4:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2339477c%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style4:before {
					box-shadow: inset 0 -1px 0 0 #39477c, 0 1px 0 0 #39477c;
				}

				.wrapper.spotlight.style4:after {
					box-shadow: inset 0 -1px 0 0 #39477c, 0 1px 0 0 #39477c;
				}

			.wrapper.spotlight.style5 {
				background-color: #324072;
			}

				.wrapper.spotlight.style5:before, .wrapper.spotlight.style5:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23324072%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style5:before {
					box-shadow: inset 0 -1px 0 0 #324072, 0 1px 0 0 #324072;
				}

				.wrapper.spotlight.style5:after {
					box-shadow: inset 0 -1px 0 0 #324072, 0 1px 0 0 #324072;
				}

			.wrapper.spotlight.style6 {
				background-color: #2d3a69;
			}

				.wrapper.spotlight.style6:before, .wrapper.spotlight.style6:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%232d3a69%3B' /%3E%3C/svg%3E");
				}

				.wrapper.spotlight.style6:before {
					box-shadow: inset 0 -1px 0 0 #2d3a69, 0 1px 0 0 #2d3a69;
				}

				.wrapper.spotlight.style6:after {
					box-shadow: inset 0 -1px 0 0 #2d3a69, 0 1px 0 0 #2d3a69;
				}

		@media screen and (max-width: 980px) {

			.wrapper {
				margin: 4.75em 0;
			}

				.wrapper:before, .wrapper:after {
					height: 4.75em;
				}

				.wrapper:before {
					top: -4.75em;
				}

				.wrapper:after {
					bottom: -4.75em;
					left: 0;
				}

				.wrapper .inner {
					padding: 3em 3em 1em 3em ;
					width: 100%;
				}

				.wrapper.spotlight .image {
					margin: 0 2em 2em 0;
					width: 32em;
				}

				.wrapper.spotlight:nth-child(2n - 1) .image {
					margin: 0 0 2em 2em;
				}

		}

		@media screen and (max-width: 736px) {

			.wrapper {
				margin: 2.5em 0;
			}

				.wrapper:before, .wrapper:after {
					height: 2.5em;
				}

				.wrapper:before {
					top: -2.5em;
				}

				.wrapper:after {
					bottom: -2.5em;
					left: 0;
				}

				.wrapper .inner {
					padding: 2em 2em 0.1em 2em ;
				}

				.wrapper.spotlight .inner {
					-moz-align-items: -moz-flex-start;
					-webkit-align-items: -webkit-flex-start;
					-ms-align-items: -ms-flex-start;
					align-items: flex-start;
				}

				.wrapper.spotlight .image {
					width: 19em;
					margin: 0 1.75em 2em 0;
				}

				.wrapper.spotlight:nth-child(2n - 1) .image {
					margin: 0 0 2em 1.75em;
				}

		}

		@media screen and (max-width: 480px) {

			.wrapper.spotlight .inner {
				display: block;
			}

			.wrapper.spotlight .image {
				margin: 0 0 1em 0 !important;
				max-width: 85%;
				width: 12em;
			}

		}

		@media screen and (max-width: 360px) {

			.wrapper .inner {
				padding: 2em 1.5em 0.1em 1.5em ;
			}

		}

/* Footer */

	#footer .inner {
		padding: 5em 0 3em 0 ;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin: 0 auto;
		width: 55em;
	}

		#footer .inner > * {
			width: 100%;
		}

		#footer .inner form {
			margin: 0 3em 0 0;
			width: calc(50% - 1.5em);
		}

		#footer .inner .contact {
			width: calc(50% - 1.5em);
		}

		#footer .inner .copyright {
			border-top: solid 2px rgba(255, 255, 255, 0.125);
			list-style: none;
			margin: 4em 0 2em 0;
			padding: 2em 0 0 0;
			width: 100%;
		}

			#footer .inner .copyright li {
				border-left: solid 2px rgba(255, 255, 255, 0.125);
				color: rgba(255, 255, 255, 0.35);
				display: inline-block;
				font-size: 0.9em;
				line-height: 1;
				margin-left: 1em;
				padding: 0;
				padding-left: 1em;
			}

				#footer .inner .copyright li:first-child {
					border-left: 0;
					margin-left: 0;
					padding-left: 0;
				}

				#footer .inner .copyright li a {
					color: inherit;
				}

	@media screen and (max-width: 1280px) {

		#footer {
			background-color: #2e3141;
			background-image: linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("../../images/bg.jpg");
			background-size: auto,
 cover;
			background-position: center,
 center;
			margin-top: -6.5em;
			padding-top: 6.5em;
		}

	}

	@media screen and (max-width: 980px) {

		#footer {
			margin-top: -4.75em;
			padding-top: 4.75em;
		}

			#footer .inner {
				padding: 3em 3em 1em 3em ;
				display: block;
				width: 100%;
			}

				#footer .inner form {
					width: 100%;
					margin: 0 0 4em 0;
				}

				#footer .inner .contact {
					width: 100%;
					margin: 0 0 4em 0;
				}

				#footer .inner .copyright {
					margin: 4em 0 2em 0;
				}

	}

	@media screen and (max-width: 736px) {

		#footer {
			margin-top: -2.5em;
			padding-top: 2.5em;
		}

			#footer .inner {
				padding: 2em 2em 0.1em 2em ;
			}

				#footer .inner form {
					margin: 0 0 3em 0;
				}

				#footer .inner .contact {
					margin: 0 0 3em 0;
				}

	}

	@media screen and (max-width: 480px) {

		#footer .inner .copyright li {
			border-left: 0;
			display: block;
			margin: 1em 0 0 0;
			padding-left: 0;
		}

			#footer .inner .copyright li:first-child {
				margin-top: 0;
			}

	}

	@media screen and (max-width: 360px) {

		#footer .inner {
			padding: 2em 1.5em 0.1em 1.5em ;
		}

	}
`;

export default solidStateStyle;
