import { css } from "lit";

const strataStyle = css`

/* Basic */

	body {
		background: #fff;
	}

	#header, #main, input, select, textarea {
		color: #a2a2a2;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-weight: 400;
		line-height: 1.75em;
	}

	a {
		-moz-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		border-bottom: dotted 1px;
		color: #49bf9d;
		text-decoration: none;
	}

		a:hover {
			border-bottom-color: transparent;
			color: #49bf9d !important;
			text-decoration: none;
		}

	strong, b {
		color: #787878;
		font-weight: 400;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #787878;
		font-weight: 400;
		line-height: 1em;
		margin: 0 0 1em 0;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h1 {
		font-size: 2em;
		line-height: 1.5em;
	}

	h2 {
		font-size: 1.5em;
		line-height: 1.5em;
	}

	h3 {
		font-size: 1.25em;
		line-height: 1.5em;
	}

	h4 {
		font-size: 1.1em;
		line-height: 1.5em;
	}

	h5 {
		font-size: 0.9em;
		line-height: 1.5em;
	}

	h6 {
		font-size: 0.7em;
		line-height: 1.5em;
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

	hr {
		border: 0;
		border-bottom: solid 2px #efefef;
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
		}

	blockquote {
		border-left: solid 6px #efefef;
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 1.5em;
	}

	code {
		background: #f7f7f7;
		border-radius: 0.35em;
		border: solid 2px #efefef;
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
		color: #b2b2b2;
		position: relative;
		margin: 0 0 1.5em 0;
	}

	header h2 + p {
		font-size: 1.25em;
		margin-top: -1em;
		line-height: 1.5em;
	}

	header h3 + p {
		font-size: 1.1em;
		margin-top: -0.8em;
		line-height: 1.5em;
	}

	header h4 + p,
	header h5 + p,
	header h6 + p {
		font-size: 0.9em;
		margin-top: -0.6em;
		line-height: 1.5em;
	}

	header.major h2 {
		font-size: 2em;
	}

/* Form */

	form {
		margin: 0 0 2em 0;
	}

	label {
		color: #787878;
		display: block;
		font-size: 0.9em;
		font-weight: 400;
		margin: 0 0 1em 0;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background: #f7f7f7;
		border-radius: 0.35em;
		border: solid 2px transparent;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 0.75em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus,
		textarea:focus {
			border-color: #49bf9d;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23dfdfdf' /%3E%3C/svg%3E");
		background-size: 1.25rem;
		background-repeat: no-repeat;
		background-position: calc(100% - 1rem) center;
		height: 2.75em;
		padding-right: 2.75em;
		text-overflow: ellipsis;
	}

		select option {
			color: #787878;
			background: #fff;
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
		padding: 0.75em;
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
			color: #a2a2a2;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: 400;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				background: #f7f7f7;
				border-radius: 0.35em;
				border: solid 2px transparent;
				content: '';
				display: inline-block;
				font-size: 0.8em;
				height: 2.0625em;
				left: 0;
				line-height: 1.85625em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 2.0625em;
			}

		input[type="checkbox"]:focus + label:before,
		input[type="radio"]:focus + label:before {
			border-color: #49bf9d;
		}

	input[type="checkbox"] + label:before {
		border-radius: 0.35em;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		color: #b2b2b2 !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: #b2b2b2 !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: #b2b2b2 !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: #b2b2b2 !important;
		opacity: 1.0;
	}

/* Box */

	.box {
		border-radius: 0.35em;
		border: solid 2px #efefef;
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
		border-radius: 0.35em;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image:before {
			-moz-transition: opacity 0.2s ease-in-out;
			-webkit-transition: opacity 0.2s ease-in-out;
			-ms-transition: opacity 0.2s ease-in-out;
			transition: opacity 0.2s ease-in-out;
			background: url("images/overlay.png");
			border-radius: 0.35em;
			content: '';
			display: block;
			height: 100%;
			left: 0;
			opacity: 0.5;
			position: absolute;
			top: 0;
			width: 100%;
		}

		.image.thumb {
			text-align: center;
		}

			.image.thumb:after {
				-moz-transition: opacity 0.2s ease-in-out;
				-webkit-transition: opacity 0.2s ease-in-out;
				-ms-transition: opacity 0.2s ease-in-out;
				transition: opacity 0.2s ease-in-out;
				border-radius: 0.35em;
				border: solid 3px rgba(255, 255, 255, 0.5);
				color: #fff;
				content: 'View';
				display: inline-block;
				font-size: 0.8em;
				font-weight: 400;
				left: 50%;
				line-height: 2.25em;
				margin: -1.25em 0 0 -3em;
				opacity: 0;
				padding: 0 1.5em;
				position: absolute;
				text-align: center;
				text-decoration: none;
				top: 50%;
				white-space: nowrap;
			}

			.image.thumb:hover:after {
				opacity: 1.0;
			}

			.image.thumb:hover:before {
				background: url("images/overlay.png"), url("images/overlay.png");
				opacity: 1.0;
			}

		.image img {
			border-radius: 0.35em;
			display: block;
		}

		.image.left {
			float: left;
			margin: 0 1.5em 1em 0;
			top: 0.25em;
		}

		.image.right {
			float: right;
			margin: 0 0 1em 1.5em;
			top: 0.25em;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.fit {
			display: block;
			margin: 0 0 2em 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.avatar {
			border-radius: 100%;
		}

			.image.avatar:before {
				display: none;
			}

			.image.avatar img {
				border-radius: 100%;
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
				border-top: solid 2px #efefef;
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

	dl {
		margin: 0 0 2em 0;
	}

/* Icons */

	ul.icons {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li svg {
      width: 1.8rem;
      height: 1.8rem;
      fill: rgba(255, 255, 255, 0.4);
		}
		ul.icons li {
			display: inline-block;
			padding: 0 1em 0 0;
		}

			ul.icons li:last-child {
				padding-right: 0;
			}

			ul.icons li .icon:before {
				font-size: 1.5em;
			}

/* Labeled Icons */

	ul.labeled-icons {
		list-style: none;
		padding: 0;
	}

		ul.labeled-icons li {
			line-height: 1.75em;
			margin: 1.5em 0 0 0;
			padding-left: 2.25em;
			position: relative;
		}

			ul.labeled-icons li:first-child {
				margin-top: 0;
			}

			ul.labeled-icons li a {
				color: inherit;
			}

			ul.labeled-icons li h3 {
				color: #b2b2b2;
				left: 0;
				position: absolute;
				text-align: center;
				top: 0;
				width: 1em;
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
							margin-left: -0.5em;
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
			border: solid 1px #efefef;
			border-left: 0;
			border-right: 0;
		}

			table tbody tr:nth-child(2n + 1) {
				background-color: #f7f7f7;
			}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			color: #787878;
			font-size: 0.9em;
			font-weight: 400;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px #efefef;
		}

		table tfoot {
			border-top: solid 2px #efefef;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 2px #efefef;
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 2px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 2px;
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
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		background-color: transparent;
		border-radius: 0.35em;
		border: solid 3px #efefef;
		color: #787878 !important;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		height: 3.15em;
		height: calc(2.75em + 6px);
		line-height: 2.75em;
		min-width: 10em;
		padding: 0 1.5em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		.button:hover {
			border-color: #49bf9d;
			color: #49bf9d !important;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		.button:active {
			background-color: rgba(73, 191, 157, 0.1);
			border-color: #49bf9d;
			color: #49bf9d !important;
		}

		input[type="submit"].icon,
		input[type="reset"].icon,
		input[type="button"].icon,
		.button.icon {
			padding-left: 1.35em;
		}

			input[type="submit"].icon:before,
			input[type="reset"].icon:before,
			input[type="button"].icon:before,
			.button.icon:before {
				margin-right: 0.5em;
			}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		.button.fit {
			min-width: 0;
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		.button.small {
			font-size: 0.8em;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		.button.large {
			font-size: 1.35em;
		}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		.button.primary {
			background-color: #49bf9d;
			border-color: #49bf9d;
			color: #ffffff !important;
		}

			input[type="submit"].primary:hover,
			input[type="reset"].primary:hover,
			input[type="button"].primary:hover,
			.button.primary:hover {
				background-color: #5cc6a7;
				border-color: #5cc6a7;
			}

			input[type="submit"].primary:active,
			input[type="reset"].primary:active,
			input[type="button"].primary:active,
			.button.primary:active {
				background-color: #3eb08f;
				border-color: #3eb08f;
			}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		.button.disabled,
		.button:disabled {
			background-color: #e7e7e7 !important;
			border-color: #e7e7e7 !important;
			color: #b2b2b2 !important;
			cursor: default;
		}

/* Work Item */

	.work-item {
		margin: 0 0 2em 0;
	}

		.work-item .image {
			margin: 0 0 1.5em 0;
		}

		.work-item h3 {
			font-size: 1em;
			margin: 0 0 0.5em 0;
		}

		.work-item p {
			font-size: 0.8em;
			line-height: 1.5em;
			margin: 0;
		}

/* Header */

	#header {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-between;
		background-color: #1f1815;
		background-attachment: scroll,								scroll;
		background-image: url("images/overlay.png"), url("../../images/bg.jpg");
		background-position: top left,							top left;
		background-repeat: repeat,								no-repeat;
		background-size: auto,								150%;
		color: rgba(255, 255, 255, 0.5);
		height: 100%;
		left: 0;
		padding: 8em 4em;
		position: fixed;
		text-align: right;
		width: 35%;
	}

		#header > * {
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			width: 100%;
		}

		#header > .inner {
			-moz-flex-grow: 1;
			-webkit-flex-grow: 1;
			-ms-flex-grow: 1;
			flex-grow: 1;
			margin: 0 0 2em 0;
		}

		#header strong, #header b {
			color: #ffffff;
		}

		#header h2, #header h3, #header h4, #header h5, #header h6 {
			color: #ffffff;
		}

		#header h1 {
			color: rgba(255, 255, 255, 0.5);
			font-size: 1.35em;
			line-height: 1.75em;
			margin: 0;
		}

		#header .image.avatar {
			margin: 0 0 1em 0;
			width: 6.25em;
		}

/* Footer */

	#footer .icons {
		margin: 1em 0 0 0;
	}

		#footer .icons a {
			color: rgba(255, 255, 255, 0.4);
		}

	#footer .copyright {
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.8em;
		list-style: none;
		margin: 1em 0 0 0;
		padding: 0;
	}

		#footer .copyright li {
			border-left: solid 1px rgba(255, 255, 255, 0.25);
			display: inline-block;
			line-height: 1em;
			margin-left: 0.75em;
			padding-left: 0.75em;
		}

			#footer .copyright li:first-child {
				border-left: 0;
				margin-left: 0;
				padding-left: 0;
			}

			#footer .copyright li a {
				color: inherit;
			}

/* Main */

	#main {
		margin-left: 35%;
		max-width: 54em;
		padding: 8em 4em 4em 4em;
		width: calc(100% - 35%);
	}

		#main > section {
			border-top: solid 2px #efefef;
			margin: 4em 0 0 0;
			padding: 4em 0 0 0;
		}

			#main > section:first-child {
				border-top: 0;
				margin-top: 0;
				padding-top: 0;
			}

/* Poptrox */

	@-moz-keyframes spin {
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

	@-webkit-keyframes spin {
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

	@-ms-keyframes spin {
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

	@keyframes spin {
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

	.poptrox-popup {
		-moz-box-sizing: content-box;
		-webkit-box-sizing: content-box;
		-ms-box-sizing: content-box;
		box-sizing: content-box;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		background: #fff;
		border-radius: 0.35em;
		box-shadow: 0 0.1em 0.15em 0 rgba(0, 0, 0, 0.15);
		overflow: hidden;
		padding-bottom: 3em;
	}

		.poptrox-popup .loader {
			text-decoration: none;
			-moz-animation: spin 1s linear infinite;
			-webkit-animation: spin 1s linear infinite;
			-ms-animation: spin 1s linear infinite;
			animation: spin 1s linear infinite;
			font-size: 1.5em;
			height: 1em;
			left: 50%;
			line-height: 1em;
			margin: -0.5em 0 0 -0.5em;
			position: absolute;
			top: 50%;
			width: 1em;
		}

		.poptrox-popup .caption {
			background: #fff;
			bottom: 0;
			cursor: default;
			font-size: 0.9em;
			height: 3em;
			left: 0;
			line-height: 2.8em;
			position: absolute;
			text-align: center;
			width: 100%;
			z-index: 1;
		}

		.poptrox-popup .nav-next,
		.poptrox-popup .nav-previous {
			text-decoration: none;
			-moz-transition: opacity 0.2s ease-in-out;
			-webkit-transition: opacity 0.2s ease-in-out;
			-ms-transition: opacity 0.2s ease-in-out;
			transition: opacity 0.2s ease-in-out;
			-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
			background: rgba(0, 0, 0, 0.01);
			cursor: pointer;
			height: 100%;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 50%;
		}

			.poptrox-popup .nav-next:before,
			.poptrox-popup .nav-previous:before {
				color: #fff;
				font-size: 2.5em;
				height: 1em;
				line-height: 1em;
				margin-top: -0.75em;
				position: absolute;
				text-align: center;
				top: 50%;
				width: 1.5em;
			}

		.poptrox-popup .nav-next {
			right: 0;
		}

		.poptrox-popup .nav-previous {
			left: 0;
		}

		.poptrox-popup .closer {
			text-decoration: none;
			-moz-transition: opacity 0.2s ease-in-out;
			-webkit-transition: opacity 0.2s ease-in-out;
			-ms-transition: opacity 0.2s ease-in-out;
			transition: opacity 0.2s ease-in-out;
			-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
			color: #fff;
			height: 4em;
			line-height: 4em;
			opacity: 0;
			position: absolute;
			right: 0;
			text-align: center;
			top: 0;
			width: 4em;
			z-index: 2;
		}

		.poptrox-popup:hover .nav-next,
		.poptrox-popup:hover .nav-previous {
			opacity: 0.5;
		}

			.poptrox-popup:hover .nav-next:hover,
			.poptrox-popup:hover .nav-previous:hover {
				opacity: 1.0;
			}

		.poptrox-popup:hover .closer {
			opacity: 0.5;
		}

			.poptrox-popup:hover .closer:hover {
				opacity: 1.0;
			}

/* Touch */

	body.is-touch .image.thumb:before {
		opacity: 0.5 !important;
	}

	body.is-touch .image.thumb:after {
		display: none !important;
	}

	body.is-touch #header {
		background-attachment: scroll;
		background-size: auto, cover;
	}

	body.is-touch .poptrox-popup .nav-next,
	body.is-touch .poptrox-popup .nav-previous,
	body.is-touch .poptrox-popup .closer {
		opacity: 1.0 !important;
	}

/* XLarge */

	@media screen and (max-width: 1800px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 12pt;
			}

	}

/* Large */

	@media screen and (max-width: 1280px) {

		/* Header */

			#header {
				padding: 6em 3em 3em 3em;
				width: 30%;
			}

				#header h1 {
					font-size: 1.25em;
				}

					#header h1 br {
						display: none;
					}

				#header > .inner {
					margin-bottom: 0;
				}

		/* Footer */

			#footer .copyright li {
				border-left-width: 0;
				display: block;
				line-height: 2.25em;
				margin-left: 0;
				padding-left: 0;
			}

		/* Main */

			#main {
				margin-left: 30%;
				max-width: none;
				padding: 6em 3em 3em 3em;
				width: calc(100% - 30%);
			}

	}

/* Medium */

	@media screen and (max-width: 980px) {

		/* Basic */

			h1 br, h2 br, h3 br, h4 br, h5 br, h6 br {
				display: none;
			}

		/* List */

			ul.icons li .icon {
				font-size: 1.25em;
			}

		/* Header */

			#header {
				background-attachment: scroll;
				background-position: top left, center center;
				background-size: auto,		cover;
				left: auto;
				padding: 6em 4em;
				position: relative;
				text-align: center;
				top: auto;
				width: 100%;
				display: block;
			}

				#header h1 {
					font-size: 1.75em;
				}

					#header h1 br {
						display: inline;
					}

		/* Footer */

			#footer {
				background-attachment: scroll;
				background-color: #1f1815;
				background-image: url("images/overlay.png"), url("../../images/bg.jpg");
				background-position: top left,						bottom center;
				background-repeat: repeat,							no-repeat;
				background-size: auto,							cover;
				bottom: auto;
				left: auto;
				padding: 4em 4em 6em 4em;
				position: relative;
				text-align: center;
				width: 100%;
			}

				#footer .icons {
					margin: 0 0 1em 0;
				}

				#footer .copyright {
					margin: 0 0 1em 0;
				}

					#footer .copyright li {
						border-left-width: 1px;
						display: inline-block;
						line-height: 1em;
						margin-left: 0.75em;
						padding-left: 0.75em;
					}

		/* Main */

			#main {
				margin: 0;
				padding: 6em 4em;
				width: 100%;
			}

	}

/* Small */

	@media screen and (max-width: 736px) {

		/* Basic */

			h1 {
				font-size: 1.5em;
			}

			h2 {
				font-size: 1.2em;
			}

			h3 {
				font-size: 1em;
			}

		/* Section/Article */

			section.special, article.special {
				text-align: center;
			}

			header.major h2 {
				font-size: 1.35em;
			}

		/* List */

			ul.labeled-icons li {
				padding-left: 2em;
			}

				ul.labeled-icons li h3 {
					line-height: 1.75em;
				}

		/* Header */

			#header {
				padding: 2.25em 1.5em;
			}

				#header h1 {
					font-size: 1.35em;
				}

		/* Footer */

			#footer {
				padding: 2.25em 1.5em;
			}

		/* Main */

			#main {
				padding: 2.25em 1.5em 0.25em 1.5em;
			}

				#main > section {
					margin: 2.25em 0 0 0;
					padding: 2.25em 0 0 0;
				}

		/* Poptrox */

			.poptrox-popup {
				border-radius: 0;
			}

				.poptrox-popup .nav-next:before,
				.poptrox-popup .nav-previous:before {
					margin-top: -1em;
				}

	}

/* XSmall */

	@media screen and (max-width: 480px) {

		/* Header */

			#header {
				padding: 4.5em 1.5em;
			}

				#header h1 br {
					display: none;
				}

		/* Footer */

			#footer .copyright li {
				border-left-width: 0;
				display: block;
				line-height: 2.25em;
				margin-left: 0;
				padding-left: 0;
			}

	}
`;

export default strataStyle;
