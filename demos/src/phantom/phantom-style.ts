import { css } from "lit";

const phantomStyle = css`

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

	body {
		background: #ffffff;
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
		color: #585858;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-weight: 300;
		line-height: 1.75;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 14pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

	a {
		-moz-transition: border-bottom-color 0.2s ease, color 0.2s ease;
		-webkit-transition: border-bottom-color 0.2s ease, color 0.2s ease;
		-ms-transition: border-bottom-color 0.2s ease, color 0.2s ease;
		transition: border-bottom-color 0.2s ease, color 0.2s ease;
		text-decoration: none;
		color: #585858;
		border-bottom: dotted 1px rgba(88, 88, 88, 0.5);
	}

		a:hover {
			border-bottom-color: transparent;
			color: #f2849e !important;
		}

	strong, b {
		font-weight: 900;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1 {
		font-size: 2.75em;
		font-weight: 700;
		line-height: 1.3;
		margin: 0 0 1em 0;
		letter-spacing: -0.035em;
	}

		h1 a {
			color: inherit;
		}

		@media screen and (max-width: 736px) {

			h1 {
				font-size: 2em;
				margin: 0 0 1em 0;
			}

		}

		@media screen and (max-width: 360px) {

			h1 {
				font-size: 1.75em;
			}

		}

	h2, h3, h4, h5, h6 {
		font-weight: 900;
		line-height: 1.5;
		margin: 0 0 2em 0;
		text-transform: uppercase;
		letter-spacing: 0.35em;
	}

		h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
		}

	h2 {
		font-size: 1.1em;
	}

	h3 {
		font-size: 1em;
	}

	h4 {
		font-size: 0.8em;
	}

	h5 {
		font-size: 0.8em;
	}

	h6 {
		font-size: 0.8em;
	}

	@media screen and (max-width: 980px) {

		h1 br, h2 br, h3 br, h4 br, h5 br, h6 br {
			display: none;
		}

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
		border-left: solid 4px #c9c9c9;
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		background: rgba(144, 144, 144, 0.075);
		border-radius: 4px;
		border: solid 1px #c9c9c9;
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
			line-height: 1.75;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 1px #c9c9c9;
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
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

	header p {
		margin-top: -1em;
	}

	@media screen and (max-width: 736px) {

		header p {
			margin-top: 0;
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

		.icon:before {
			line-height: inherit;
		}

		.icon.style2 {
			-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
			-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
			-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
			transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
			background-color: transparent;
			border: solid 1px #c9c9c9;
			border-radius: 4px;
			width: 2.65em;
			height: 2.65em;
			display: inline-block;
			text-align: center;
			line-height: 2.65em;
			color: inherit;
		}

			.icon.style2:before {
				font-size: 1.1em;
			}

			.icon.style2:hover {
				color: #f2849e;
				border-color: #f2849e;
			}

			.icon.style2:active {
				background-color: rgba(242, 132, 158, 0.1);
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
				border-top: solid 1px #c9c9c9;
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
			font-weight: 900;
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
		margin: -1em 0 2em -1em;
	}

		ul.icons li {
			display: inline-block;
			padding: 1em 0 0 1em;
		}

/* Form */

	form {
		margin: 0 0 2em 0;
		overflow-x: hidden;
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
		display: block;
		font-size: 0.9em;
		font-weight: 900;
		margin: 0 0 1em 0;
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
		background-color: transparent;
		border: none;
		border-radius: 0;
		border-bottom: solid 1px #c9c9c9;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0;
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
			border-bottom-color: #f2849e;
			box-shadow: inset 0 -1px 0 0 #f2849e;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23c9c9c9' /%3E%3C/svg%3E");
		background-size: 1.25rem;
		background-repeat: no-repeat;
		background-position: calc(100% - 1rem) center;
		height: 3em;
		padding-right: 3em;
		text-overflow: ellipsis;
	}

		select option {
			background: #ffffff;
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
		height: 3em;
	}

	textarea {
		padding: 0;
		min-height: 3.75em;
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
			color: #585858;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: 300;
			padding-left: 2.55em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				border-radius: 4px;
				border: solid 1px #c9c9c9;
				content: '';
				display: inline-block;
				font-size: 0.8em;
				height: 2.25em;
				left: 0;
				line-height: 2.25em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 2.25em;
			}

		input[type="checkbox"]:focus + label:before,
		input[type="radio"]:focus + label:before {
			border-color: #f2849e;
			box-shadow: 0 0 0 1px #f2849e;
		}

	input[type="checkbox"] + label:before {
		border-radius: 4px;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

/* Box */

	.box {
		border-radius: 4px;
		border: solid 1px #c9c9c9;
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

/* Image */

	.image {
		border-radius: 4px;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			border-radius: 4px;
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

			@media screen and (max-width: 736px) {

				.image.main {
					margin: 0 0 2em 0;
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
			border: solid 1px #c9c9c9;
			border-left: 0;
			border-right: 0;
		}

			table tbody tr:nth-child(2n + 1) {
				background-color: rgba(144, 144, 144, 0.075);
			}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			font-size: 0.9em;
			font-weight: 900;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px #c9c9c9;
		}

		table tfoot {
			border-top: solid 2px #c9c9c9;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px #c9c9c9;
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
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		background-color: transparent;
		border-radius: 4px;
		border: 0;
		box-shadow: inset 0 0 0 2px #585858;
		color: #585858 !important;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8em;
		font-weight: 900;
		height: 3.5em;
		letter-spacing: 0.35em;
		line-height: 3.45em;
		overflow: hidden;
		padding: 0 1.25em 0 1.6em;
		text-align: center;
		text-decoration: none;
		text-overflow: ellipsis;
		text-transform: uppercase;
		white-space: nowrap;
	}

		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		input[type="button"].icon:before,
		button.icon:before,
		.button.icon:before {
			margin-right: 0.5em;
		}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			color: #f2849e !important;
			box-shadow: inset 0 0 0 2px #f2849e;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: rgba(242, 132, 158, 0.1);
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

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		button.primary,
		.button.primary {
			box-shadow: none;
			background-color: #585858;
			color: #ffffff !important;
		}

			input[type="submit"].primary:hover,
			input[type="reset"].primary:hover,
			input[type="button"].primary:hover,
			button.primary:hover,
			.button.primary:hover {
				background-color: #f2849e;
			}

			input[type="submit"].primary:active,
			input[type="reset"].primary:active,
			input[type="button"].primary:active,
			button.primary:active,
			.button.primary:active {
				background-color: #ee5f81;
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

/* Tiles */

	.tiles {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		position: relative;
		margin: -2.5em 0 0 -2.5em;
	}

		.tiles article {
			-moz-transition: -moz-transform 0.5s ease, opacity 0.5s ease;
			-webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
			-ms-transition: -ms-transform 0.5s ease, opacity 0.5s ease;
			transition: transform 0.5s ease, opacity 0.5s ease;
			position: relative;
			width: calc(33.33333% - 2.5em);
			margin: 2.5em 0 0 2.5em;
		}

			.tiles article > .image {
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				position: relative;
				display: block;
				width: 100%;
				border-radius: 4px;
				overflow: hidden;
			}

				.tiles article > .image img {
					display: block;
					width: 100%;
				}

				.tiles article > .image:before {
					pointer-events: none;
					-moz-transition: background-color 0.5s ease, opacity 0.5s ease;
					-webkit-transition: background-color 0.5s ease, opacity 0.5s ease;
					-ms-transition: background-color 0.5s ease, opacity 0.5s ease;
					transition: background-color 0.5s ease, opacity 0.5s ease;
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 1.0;
					z-index: 1;
					opacity: 0.8;
				}

				.tiles article > .image:after {
					pointer-events: none;
					-moz-transition: opacity 0.5s ease;
					-webkit-transition: opacity 0.5s ease;
					-ms-transition: opacity 0.5s ease;
					transition: opacity 0.5s ease;
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 0.25px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='100' y2='100' /%3E%3Cline x1='100' y1='0' x2='0' y2='100' /%3E%3C/svg%3E");
					background-position: center;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					opacity: 0.25;
					z-index: 2;
				}

			.tiles article > a {
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-justify-content: center;
				-webkit-justify-content: center;
				-ms-justify-content: center;
				justify-content: center;
				-moz-transition: background-color 0.5s ease, -moz-transform 0.5s ease;
				-webkit-transition: background-color 0.5s ease, -webkit-transform 0.5s ease;
				-ms-transition: background-color 0.5s ease, -ms-transform 0.5s ease;
				transition: background-color 0.5s ease, transform 0.5s ease;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				padding: 1em;
				border-radius: 4px;
				border-bottom: 0;
				color: #ffffff;
				text-align: center;
				text-decoration: none;
				z-index: 3;
			}

				.tiles article > a > :last-child {
					margin: 0;
				}

				.tiles article > a:hover {
					color: #ffffff !important;
				}

				.tiles article > a h2 {
					margin: 0;
				}

				.tiles article > a .content {
					-moz-transition: max-height 0.5s ease, opacity 0.5s ease;
					-webkit-transition: max-height 0.5s ease, opacity 0.5s ease;
					-ms-transition: max-height 0.5s ease, opacity 0.5s ease;
					transition: max-height 0.5s ease, opacity 0.5s ease;
					width: 100%;
					max-height: 0;
					line-height: 1.5;
					margin-top: 0.35em;
					opacity: 0;
				}

					.tiles article > a .content > :last-child {
						margin-bottom: 0;
					}

			.tiles article.style1 > .image:before {
				background-color: #f2849e;
			}

			.tiles article.style2 > .image:before {
				background-color: #7ecaf6;
			}

			.tiles article.style3 > .image:before {
				background-color: #7bd0c1;
			}

			.tiles article.style4 > .image:before {
				background-color: #c75b9b;
			}

			.tiles article.style5 > .image:before {
				background-color: #ae85ca;
			}

			.tiles article.style6 > .image:before {
				background-color: #8499e7;
			}

			body:not(.is-touch) .tiles article:hover > .image {
				-moz-transform: scale(1.1);
				-webkit-transform: scale(1.1);
				-ms-transform: scale(1.1);
				transform: scale(1.1);
			}

				body:not(.is-touch) .tiles article:hover > .image:before {
					background-color: #333333;
					opacity: 0.35;
				}

				body:not(.is-touch) .tiles article:hover > .image:after {
					opacity: 0;
				}

			body:not(.is-touch) .tiles article:hover .content {
				max-height: 15em;
				opacity: 1;
			}

		* + .tiles {
			margin-top: 2em;
		}

		body.is-preload .tiles article {
			-moz-transform: scale(0.9);
			-webkit-transform: scale(0.9);
			-ms-transform: scale(0.9);
			transform: scale(0.9);
			opacity: 0;
		}

		body.is-touch .tiles article .content {
			max-height: 15em;
			opacity: 1;
		}

		@media screen and (max-width: 1280px) {

			.tiles {
				margin: -1.25em 0 0 -1.25em;
			}

				.tiles article {
					width: calc(33.33333% - 1.25em);
					margin: 1.25em 0 0 1.25em;
				}

		}

		@media screen and (max-width: 980px) {

			.tiles {
				margin: -2.5em 0 0 -2.5em;
			}

				.tiles article {
					width: calc(50% - 2.5em);
					margin: 2.5em 0 0 2.5em;
				}

		}

		@media screen and (max-width: 736px) {

			.tiles {
				margin: -1.25em 0 0 -1.25em;
			}

				.tiles article {
					width: calc(50% - 1.25em);
					margin: 1.25em 0 0 1.25em;
				}

					.tiles article:hover > .image {
						-moz-transform: scale(1.0);
						-webkit-transform: scale(1.0);
						-ms-transform: scale(1.0);
						transform: scale(1.0);
					}

		}

		@media screen and (max-width: 480px) {

			.tiles {
				margin: 0;
			}

				.tiles article {
					width: 100%;
					margin: 1.25em 0 0 0;
				}

		}

/* Header */

	#header {
		padding: 8em 0 0.1em 0 ;
	}

		#header .logo {
			border-bottom: 0;
			color: inherit;
			font-weight: 900;
			letter-spacing: 0.35em;
			margin: 0 0 2.5em 0;
			text-decoration: none;
			text-transform: uppercase;
			display: flex;
      align-items: center;
		}
    #header .logo svg {
      width: 50px;
      height: 50px;
      fill: #585858;
    }

			#header .logo > * {
				display: inline-block;
				vertical-align: middle;
			}

			#header .logo .symbol {
				margin-right: 0.65em;
			}

				#header .logo .symbol img {
					display: block;
					width: 2em;
					height: 2em;
				}

		#wrapper nav {
			position: fixed;
			left: 2em;
			z-index: 10000;
		}

			#wrapper nav ul {
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				list-style: none;
				margin: 0;
				padding: 0;
			}

				#wrapper nav ul li {
					display: block;
					padding: 0;
				}

					#wrapper nav ul li a {
						display: block;
						position: relative;
						height: 3em;
						line-height: 3em;
						padding: 0 1.5em;
						background-color: rgba(255, 255, 255, 0.5);
						border-radius: 4px;
						border: 0;
						font-size: 0.8em;
						font-weight: 900;
						letter-spacing: 0.35em;
						text-transform: uppercase;
					}

					#wrapper nav ul li a[href="#menu"] {
						-webkit-tap-highlight-color: transparent;
						width: 4em;
						text-indent: 4em;
						font-size: 1em;
						overflow: hidden;
						padding: 0;
						white-space: nowrap;
					}

						#wrapper nav ul li a[href="#menu"]:before, #wrapper nav ul li a[href="#menu"]:after {
							-moz-transition: opacity 0.2s ease;
							-webkit-transition: opacity 0.2s ease;
							-ms-transition: opacity 0.2s ease;
							transition: opacity 0.2s ease;
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-position: center;
							background-repeat: no-repeat;
							background-size: 2em 2em;
						}

						#wrapper nav ul li a[href="#menu"]:before {
							background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23f2849e%3B %7D%3C/style%3E%3Cline x1='0' y1='25' x2='100' y2='25' /%3E%3Cline x1='0' y1='50' x2='100' y2='50' /%3E%3Cline x1='0' y1='75' x2='100' y2='75' /%3E%3C/svg%3E");
							opacity: 0;
						}

						#wrapper nav ul li a[href="#menu"]:after {
							background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='0' y1='25' x2='100' y2='25' /%3E%3Cline x1='0' y1='50' x2='100' y2='50' /%3E%3Cline x1='0' y1='75' x2='100' y2='75' /%3E%3C/svg%3E");
							opacity: 1;
						}

						#wrapper nav ul li a[href="#menu"]:hover:before {
							opacity: 1;
						}

						#wrapper nav ul li a[href="#menu"]:hover:after {
							opacity: 0;
						}

		@media screen and (max-width: 736px) {

			#header {
				padding: 4em 0 0.1em 0 ;
			}

				#wrapper nav {
					right: 0.5em;
					top: 0.5em;
				}

					#wrapper nav ul li a[href="#menu"]:before, #wrapper nav ul li a[href="#menu"]:after {
						background-size: 1.5em 1.5em;
					}

		}

/* Menu */

	#wrapper {
		-moz-transition: opacity 0.45s ease;
		-webkit-transition: opacity 0.45s ease;
		-ms-transition: opacity 0.45s ease;
		transition: opacity 0.45s ease;
		opacity: 1;
	}

	#menu {
		-moz-transform: translateX(22em);
		-webkit-transform: translateX(22em);
		-ms-transform: translateX(22em);
		transform: translateX(22em);
		-moz-transition: -moz-transform 0.45s ease, visibility 0.45s;
		-webkit-transition: -webkit-transform 0.45s ease, visibility 0.45s;
		-ms-transition: -ms-transform 0.45s ease, visibility 0.45s;
		transition: transform 0.45s ease, visibility 0.45s;
		position: fixed;
		top: 0;
		right: 0;
		width: 22em;
		max-width: 80%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		background: #585858;
		color: #ffffff;
		cursor: default;
		visibility: hidden;
		z-index: 10002;
	}

		#menu > .inner {
			-moz-transition: opacity 0.45s ease;
			-webkit-transition: opacity 0.45s ease;
			-ms-transition: opacity 0.45s ease;
			transition: opacity 0.45s ease;
			-webkit-overflow-scrolling: touch;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 2.75em;
			opacity: 0;
			overflow-y: auto;
		}

			#menu > .inner > ul {
				list-style: none;
				margin: 0 0 1em 0;
				padding: 0;
			}

				#menu > .inner > ul > li {
					padding: 0;
					border-top: solid 1px rgba(255, 255, 255, 0.15);
				}

					#menu > .inner > ul > li a {
						display: block;
						padding: 1em 0;
						line-height: 1.5;
						border: 0;
						color: inherit;
					}

					#menu > .inner > ul > li:first-child {
						border-top: 0;
						margin-top: -1em;
					}

		#menu > .close {
			-moz-transition: opacity 0.45s ease, -moz-transform 0.45s ease;
			-webkit-transition: opacity 0.45s ease, -webkit-transform 0.45s ease;
			-ms-transition: opacity 0.45s ease, -ms-transform 0.45s ease;
			transition: opacity 0.45s ease, transform 0.45s ease;
			-moz-transform: scale(0.25) rotate(180deg);
			-webkit-transform: scale(0.25) rotate(180deg);
			-ms-transform: scale(0.25) rotate(180deg);
			transform: scale(0.25) rotate(180deg);
			-webkit-tap-highlight-color: transparent;
			display: block;
			position: absolute;
			top: 2em;
			left: -6em;
			width: 6em;
			text-indent: 6em;
			height: 3em;
			border: 0;
			font-size: 1em;
			opacity: 0;
			overflow: hidden;
			padding: 0;
			white-space: nowrap;
		}

			#menu > .close:before, #menu > .close:after {
				-moz-transition: opacity 0.2s ease;
				-webkit-transition: opacity 0.2s ease;
				-ms-transition: opacity 0.2s ease;
				transition: opacity 0.2s ease;
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 2em 2em;
			}

			#menu > .close:before {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23f2849e%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E");
				opacity: 0;
			}

			#menu > .close:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E");
				opacity: 1;
			}

			#menu > .close:hover:before {
				opacity: 1;
			}

			#menu > .close:hover:after {
				opacity: 0;
			}

		@media screen and (max-width: 736px) {

			#menu {
				-moz-transform: translateX(16.5em);
				-webkit-transform: translateX(16.5em);
				-ms-transform: translateX(16.5em);
				transform: translateX(16.5em);
				width: 16.5em;
			}

				#menu > .inner {
					padding: 2.75em 1.5em;
				}

				#menu > .close {
					top: 0.5em;
					left: -4.25em;
					width: 4.25em;
					text-indent: 4.25em;
				}

					#menu > .close:before, #menu > .close:after {
						background-size: 1.5em 1.5em;
					}

		}

	body.is-menu-visible #wrapper {
		pointer-events: none;
		cursor: default;
		opacity: 0.25;
	}

	body.is-menu-visible #menu {
		-moz-transform: translateX(0);
		-webkit-transform: translateX(0);
		-ms-transform: translateX(0);
		transform: translateX(0);
		visibility: visible;
	}

		body.is-menu-visible #menu > * {
			opacity: 1;
		}

		body.is-menu-visible #menu .close {
			-moz-transform: scale(1.0) rotate(0deg);
			-webkit-transform: scale(1.0) rotate(0deg);
			-ms-transform: scale(1.0) rotate(0deg);
			transform: scale(1.0) rotate(0deg);
			opacity: 1;
		}

/* Main */

	#main {
		padding: 0em 0 6em 0 ;
	}

		@media screen and (max-width: 736px) {

			#main {
				padding: 0em 0 4em 0 ;
			}

		}

/* Footer */

	#footer {
		padding: 5em 0 6em 0 ;
		background-color: #f6f6f6;
	}
  #footer svg {
    fill: #585858;
    width: 24px;
    height: 24px;
    margin-top: 8px;
  }

		#footer > .inner {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			-moz-flex-direction: row;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}

			#footer > .inner > * > :last-child {
				margin-bottom: 0;
			}

			#footer > .inner section:nth-child(1) {
				width: calc(66% - 2.5em);
				margin-right: 2.5em;
			}

			#footer > .inner section:nth-child(2) {
				width: calc(33% - 2.5em);
				margin-left: 2.5em;
			}

			#footer > .inner .copyright {
				width: 100%;
				padding: 0;
				margin-top: 5em;
				list-style: none;
				font-size: 0.8em;
				color: rgba(88, 88, 88, 0.5);
			}

				#footer > .inner .copyright a {
					color: inherit;
				}

				#footer > .inner .copyright li {
					display: inline-block;
					border-left: solid 1px rgba(88, 88, 88, 0.15);
					line-height: 1;
					padding: 0 0 0 1em;
					margin: 0 0 0 1em;
				}

					#footer > .inner .copyright li:first-child {
						border-left: 0;
						padding-left: 0;
						margin-left: 0;
					}

		@media screen and (max-width: 1280px) {

			#footer {
				padding: 5em 0 3em 0 ;
			}

				#footer > .inner section:nth-child(1) {
					width: calc(66% - 1.25em);
					margin-right: 1.25em;
				}

				#footer > .inner section:nth-child(2) {
					width: calc(33% - 1.25em);
					margin-left: 1.25em;
				}

		}

		@media screen and (max-width: 980px) {

			#footer > .inner section:nth-child(1) {
				width: 66%;
				margin-right: 0;
			}

			#footer > .inner section:nth-child(2) {
				width: calc(33% - 2.5em);
				margin-left: 2.5em;
			}

		}

		@media screen and (max-width: 736px) {

			#footer {
				padding: 3em 0 1em 0 ;
			}

				#footer > .inner {
					-moz-flex-direction: column;
					-webkit-flex-direction: column;
					-ms-flex-direction: column;
					flex-direction: column;
				}

					#footer > .inner section:nth-child(1) {
						width: 100%;
						margin-right: 0;
						margin: 3em 0 0 0;
					}

					#footer > .inner section:nth-child(2) {
						-moz-order: -1;
						-webkit-order: -1;
						-ms-order: -1;
						order: -1;
						width: 100%;
						margin-left: 0;
					}

					#footer > .inner .copyright {
						margin-top: 3em;
					}

		}

		@media screen and (max-width: 480px) {

			#footer > .inner .copyright {
				margin-top: 3em;
			}

				#footer > .inner .copyright li {
					border-left: 0;
					padding-left: 0;
					margin: 0.75em 0 0 0;
					display: block;
					line-height: inherit;
				}

					#footer > .inner .copyright li:first-child {
						margin-top: 0;
					}

		}

/* Wrapper */

	#wrapper > * > .inner {
		width: 100%;
		max-width: 68em;
		margin: 0 auto;
		padding: 0 2.5em;
	}

		@media screen and (max-width: 736px) {

			#wrapper > * > .inner {
				padding: 0 1.25em;
			}

		}
`;

export default phantomStyle;
