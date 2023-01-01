import { css } from "lit";

const alphaStyle = css`

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

	body, #page-wrapper {
		background: #f5f5f5;
    color: #777;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    line-height: 1.65em;
    letter-spacing: -0.015em;
	}

	body, input, select, textarea {
		color: #777;
		font-family: "Source Sans Pro", sans-serif;
		font-size: 16pt;
		font-weight: 300;
		line-height: 1.65em;
		letter-spacing: -0.015em;
	}

	a {
		-moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		border-bottom: dotted 1px;
		color: #e89980;
		text-decoration: none;
	}

		a:hover {
			border-bottom-color: transparent;
		}

	strong, b {
		color: #646464;
		font-weight: 400;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #646464;
		font-weight: 300;
		line-height: 1em;
		margin: 0 0 0.5em 0;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h2 {
		font-size: 2.25em;
		line-height: 1.5em;
		letter-spacing: -0.035em;
	}

	h3 {
		font-size: 1.75em;
		line-height: 1.5em;
		letter-spacing: -0.025em;
	}

	h4 {
		font-size: 1.1em;
		line-height: 1.5em;
		letter-spacing: 0;
	}

	h5 {
		font-size: 0.9em;
		line-height: 1.5em;
		letter-spacing: 0;
	}

	h6 {
		font-size: 0.7em;
		line-height: 1.5em;
		letter-spacing: 0;
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
		border-bottom: solid 2px #e5e5e5;
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
		}

	blockquote {
		border-left: solid 4px #e5e5e5;
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		background: #f8f8f8;
		border-radius: 6px;
		border: solid 1px #e5e5e5;
		font-family: monospace;
		font-size: 0.9em;
		line-height: 1.75em;
		margin: 0 0 2em 0;
		overflow-x: auto;
		padding: 1em 1.5em;
	}

	code {
		background: #f8f8f8;
		border-radius: 6px;
		border: solid 1px #e5e5e5;
		font-family: monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
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
		color: #999;
		position: relative;
		margin: 0 0 1.5em 0;
		font-style: italic;
	}

	header h2 + p {
		font-size: 1.25em;
		margin-top: -1em;
		line-height: 1.5em;
	}

	header h3 + p {
		font-size: 1.1em;
		margin-top: -0.85em;
		line-height: 1.5em;
	}

	header h4 + p,
	header h5 + p,
	header h6 + p {
		font-size: 0.8em;
		margin-top: -0.5em;
		line-height: 1.5em;
	}

	header.major {
		padding: 1em 0;
		text-align: center;
	}

		header.major h2 {
			margin: 0;
		}

		header.major p {
			display: inline-block;
			border-top: solid 2px #e5e5e5;
			color: #777;
			margin: 1.5em 0 0 0;
			padding: 1.5em 0 0 0;
			font-style: normal;
		}

/* Form */

	form {
		margin: 0 0 2em 0;
	}

	label {
		color: #646464;
		display: block;
		font-size: 0.9em;
		font-weight: 300;
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
		background-color: #f8f8f8;
		border-radius: 6px;
		border: solid 1px #e5e5e5;
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
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus,
		textarea:focus {
			border-color: #e89980;
			box-shadow: 0 0 0 2px #e89980;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23e5e5e5' /%3E%3C/svg%3E");
		background-size: 1.25em;
		background-repeat: no-repeat;
		background-position: calc(100% - 1em) center;
		height: 3em;
		padding-right: 3em;
		text-overflow: ellipsis;
	}

		select option {
			color: #777;
			background-color: #f5f5f5;
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
			color: #777;
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
				background: #f8f8f8;
				border-radius: 6px;
				border: solid 1px #e5e5e5;
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
			border-color: #e89980;
			box-shadow: 0 0 0 1px #e89980;
		}

	input[type="checkbox"] + label:before {
		border-radius: 6px;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		color: #999 !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: #999 !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: #999 !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: #999 !important;
		opacity: 1.0;
	}

/* Box */

	.box {
		background: #fff;
		border-radius: 6px;
		box-shadow: 0 2px 0 0 #e5e5e5;
		margin: 0 0 2em 0;
		padding: 3em;
	}

		.box > :last-child {
			margin-bottom: 0;
		}

		.box.alt {
			background: none !important;
			border-radius: 0 !important;
			box-shadow: none !important;
			margin: 0 0 2em 0;
			padding: 0 !important;
		}

		.box.features .features-row {
			border-top: solid 2px #e5e5e5;
			position: relative;
		}

			.box.features .features-row:after {
				clear: both;
				content: '';
				display: block;
			}

			.box.features .features-row section {
				float: left;
				padding: 3em;
				width: 50%;
			}

				.box.features .features-row section :last-child {
					margin-bottom: 0;
				}

				.box.features .features-row section:nth-child(2n) {
					padding-right: 0;
				}

					.box.features .features-row section:nth-child(2n):before {
						background: #e5e5e5;
						content: '';
						display: block;
						height: 100%;
						margin-left: -3em;
						position: absolute;
						top: 0;
						width: 2px;
					}

				.box.features .features-row section:nth-child(2n-1) {
					padding-left: 0;
				}

			.box.features .features-row:first-child {
				border-top: 0;
			}

				.box.features .features-row:first-child section {
					padding-top: 0;
				}

			.box.features .features-row:last-child {
				padding-bottom: 0;
			}

				.box.features .features-row:last-child section {
					padding-bottom: 0;
				}

		.box.special {
			text-align: center;
		}

		.box .image.featured {
			border-radius: 0;
			display: block;
			margin: 3em 0 3em -3em;
			position: relative;
			width: calc(100% + 6em);
		}

			.box .image.featured img {
				border-radius: 0;
        filter: sepia(.25) contrast(.7) brightness(1.2);
				display: block;
				width: 100%;
			}

			.box .image.featured:first-child {
				border-radius: 6px 6px 0 0;
				margin-bottom: 3em;
				margin-top: -3em;
			}

				.box .image.featured:first-child img {
					border-radius: 6px 6px 0 0;
				}

			.box .image.featured:last-child {
				border-radius: 0 0 6px 6px;
				margin-bottom: -3em;
				margin-top: 3em;
			}

				.box .image.featured:last-child img {
					border-radius: 0 0 6px 6px;
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

		.icon.solid:before {
			font-weight: 900;
		}

		.icon.major svg {
      width: 3.5rem;
      height: 3.5rem;
		}
		.icon.major {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
		}
		.icon.major > div {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
			background: #666;
			border-radius: 100%;
      fill: #ffffff;
			cursor: default;
			margin: 0 0 2em 0;
			width: 5.5em;
			height: 5.5em;
		}

			.icon.major:before {
				font-size: 2.5em;
			}

			.icon.major.accent1 > div {
				background: #666;
			}

			.icon.major.accent2 > div {
				background: #e89980;
				color: #ffffff;
			}

			.icon.major.accent3 > div {
				background: #7fcdb8;
				color: #ffffff;
			}

			.icon.major.accent4 > div {
				background: #90b0ba;
				color: #ffffff;
			}

			.icon.major.accent5 > div {
				background: #e5cb95;
				color: #ffffff;
			}

/* Image */

	.image {
		border-radius: 6px;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			border-radius: 6px;
			display: block;
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
				display: block;
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
				border-top: solid 1px #e5e5e5;
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

		ul.icons {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.icons li {
				display: inline-block;
				padding: 0 1.25em 0 0;
			}

				ul.icons li:last-child {
					padding-right: 0;
				}

				ul.icons li .icon {
					color: inherit;
				}

					ul.icons li .icon:before {
						font-size: 1.75em;
					}

	dl {
		margin: 0 0 2em 0;
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
			border: solid 1px #e5e5e5;
			border-left: 0;
			border-right: 0;
		}

			table tbody tr:nth-child(2n + 1) {
				background-color: #f8f8f8;
			}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			color: #646464;
			font-size: 0.9em;
			font-weight: 300;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px #e5e5e5;
		}

		table tfoot {
			border-top: solid 2px #e5e5e5;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px #e5e5e5;
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
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: #666;
		border-radius: 6px;
		border: 0;
		color: #ffffff;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		height: 3em;
		line-height: 3em;
		padding: 0 1em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		.button:hover {
			background-color: #737373;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		.button:active {
			background-color: #595959;
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
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		.button.small {
			font-size: 0.8em;
			height: 2.7em;
			line-height: 2.7em;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		.button.large {
			font-size: 1.25em;
			height: 2.7em;
			line-height: 2.7em;
		}

		input[type="submit"].alt,
		input[type="reset"].alt,
		input[type="button"].alt,
		.button.alt {
			background-color: transparent;
			box-shadow: inset 0 0 0 2px #e5e5e5;
			color: #777;
		}

			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			input[type="button"].alt:hover,
			.button.alt:hover {
				background-color: #f8f8f8;
			}

			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			input[type="button"].alt:active,
			.button.alt:active {
				background-color: #f0f0f0;
			}

			input[type="submit"].alt.icon:before,
			input[type="reset"].alt.icon:before,
			input[type="button"].alt.icon:before,
			.button.alt.icon:before {
				color: #999;
			}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		.button.primary {
			background-color: #e89980;
			color: #ffffff !important;
		}

			input[type="submit"].primary:hover,
			input[type="reset"].primary:hover,
			input[type="button"].primary:hover,
			.button.primary:hover {
				background-color: #ecaa96;
			}

			input[type="submit"].primary:active,
			input[type="reset"].primary:active,
			input[type="button"].primary:active,
			.button.primary:active {
				background-color: #e4886a;
			}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		.button.disabled,
		.button:disabled {
			background-color: #777 !important;
			box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
			color: #f5f5f5 !important;
			cursor: default;
			opacity: 0.25;
		}

/* Header */

	body.landing #page-wrapper {
		padding-top: 0;
	}

	@-moz-keyframes reveal-header {
		0% {
			top: -5em;
		}

		100% {
			top: 0;
		}
	}

	@-webkit-keyframes reveal-header {
		0% {
			top: -5em;
		}

		100% {
			top: 0;
		}
	}

	@-ms-keyframes reveal-header {
		0% {
			top: -5em;
		}

		100% {
			top: 0;
		}
	}

	@keyframes reveal-header {
		0% {
			top: -5em;
		}

		100% {
			top: 0;
		}
	}

	#header {
		background: #444;
		color: #bbb;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
	}

		#header h1 {
			color: inherit;
			height: inherit;
			line-height: inherit;
			margin: 0;
			padding: 0;
		}

			#header h1 a {
				color: #fff;
				font-weight: 400;
				border: 0;
			}

		#header nav {
			height: inherit;
			line-height: inherit;
			vertical-align: middle;
		}

			#header nav > ul {
				list-style: none;
				margin: 0;
				padding-left: 0;
			}

				#header nav > ul > li {
					display: inline-block;
					padding-left: 0;
				}

					#header nav > ul > li > ul {
						display: none;
					}

					#header nav > ul > li a {
						display: inline-block;
						height: 2em;
						line-height: 1.95em;
						padding: 0 1em;
						border-radius: 6px;
					}

					#header nav > ul > li a:not(.button) {
						color: #fff;
						display: inline-block;
						text-decoration: none;
						border: 0;
					}

						#header nav > ul > li a:not(.button).icon:before {
							color: #999;
							margin-right: 0.5em;
						}

					#header nav > ul > li:first-child {
						margin-left: 0;
					}

					#header nav > ul > li.active a:not(.button) {
						background-color: rgba(153, 153, 153, 0.25);
					}

					#header nav > ul > li .button {
						margin: 0 0 0 0.5em;
						position: relative;
					}

		#header input[type="submit"],
		#header input[type="reset"],
		#header input[type="button"],
		#header .button {
			background-color: transparent;
			box-shadow: inset 0 0 0 2px #999;
			color: #fff;
		}

			#header input[type="submit"]:hover,
			#header input[type="reset"]:hover,
			#header input[type="button"]:hover,
			#header .button:hover {
				background-color: rgba(153, 153, 153, 0.25);
			}

			#header input[type="submit"]:active,
			#header input[type="reset"]:active,
			#header input[type="button"]:active,
			#header .button:active {
				background-color: rgba(153, 153, 153, 0.5);
			}

		#header .container {
			position: relative;
		}

			#header .container h1 {
				left: 0;
			}

			#header .container nav {
				right: 0;
			}

		#header.reveal {
			-moz-animation: reveal-header 0.5s;
			-webkit-animation: reveal-header 0.5s;
			-ms-animation: reveal-header 0.5s;
			animation: reveal-header 0.5s;
		}

	.dropotron {
		background: #fff;
		border-radius: 6px;
		box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.065), inset 0 -1px 0 0 #fff, inset 0 0 0 1px rgba(229, 229, 229, 0.5);
		list-style: none;
		margin: calc(-0.5em + 1px) 0 0 1px;
		padding: 0.5em 0;
		width: 11em;
	}

		.dropotron li {
			padding: 0;
		}

			.dropotron li a, .dropotron li span {
				-moz-transition: none;
				-webkit-transition: none;
				-ms-transition: none;
				transition: none;
				border: 0;
				border-top: solid 1px #f2f2f2;
				color: inherit;
				display: block;
				padding: 0.15em 1em;
			}

			.dropotron li:first-child > a, .dropotron li:first-child > span {
				border-top: 0;
			}

			.dropotron li.active > a, .dropotron li.active > span, .dropotron li:hover > a, .dropotron li:hover > span {
				background: #e89980;
				color: #ffffff;
			}

		.dropotron.level-0 {
			font-size: 0.9em;
			margin: 1em 0 0 0;
		}

			.dropotron.level-0:before {
				-moz-transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				transform: rotate(45deg);
				background: #fff;
				border: solid 1px rgba(229, 229, 229, 0.5);
				border-bottom: 0;
				border-right: 0;
				box-shadow: -0.25em -0.125em 0.125em 0 rgba(0, 0, 0, 0.015);
				content: '';
				display: block;
				height: 0.75em;
				position: absolute;
				right: 1.25em;
				top: -0.375em;
				width: 0.75em;
				z-index: 0;
			}

/* Banner */

	#banner {
		background-attachment: fixed;
		background-color: #666;
		background-image: url("https://picsum.photos/id/125/1920/1080");
		background-repeat: no-repeat;
		background-size: cover;
		color: #fff;
		padding: 12em 0 20em 0;
		text-align: center;
	}

		#banner :last-child {
			margin-bottom: 0;
		}

		#banner h2, #banner h3, #banner h4, #banner h5, #banner h6 {
			color: #fff;
		}

		#banner h2 {
			font-size: 3.5em;
			line-height: 1em;
			margin: 0 0 0.5em 0;
			padding: 0;
		}

		#banner p {
			font-size: 1.25em;
			margin-bottom: 1.75em;
		}

		#banner input[type="submit"],
		#banner input[type="reset"],
		#banner input[type="button"],
		#banner .button {
			background-color: transparent;
			box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
			color: #fff;
			min-width: 12em;
		}

			#banner input[type="submit"]:hover,
			#banner input[type="reset"]:hover,
			#banner input[type="button"]:hover,
			#banner .button:hover {
				background-color: rgba(255, 255, 255, 0.1);
			}

			#banner input[type="submit"]:active,
			#banner input[type="reset"]:active,
			#banner input[type="button"]:active,
			#banner .button:active {
				background-color: rgba(255, 255, 255, 0.2);
			}

			#banner input[type="submit"].primary,
			#banner input[type="reset"].primary,
			#banner input[type="button"].primary,
			#banner .button.primary {
				background: #fff;
				color: #666 !important;
			}

/* Main */

	#main {
		padding: 4em 0;
	}

		#main > header {
			text-align: center;
			margin: 0 0 3em 0;
		}

			#main > header h2 {
				font-size: 2.75em;
				margin: 0;
			}

			#main > header p {
				border-top: solid 2px #e5e5e5;
				color: #777;
				display: inline-block;
				font-style: normal;
				margin: 1em 0 0 0;
				padding: 1em 0 1.25em 0;
			}

	#main {
		margin-top: -14em;
	}

/* Footer */

	#footer {
		background: #f0f0f0;
		padding: 4em 0 6em 0;
		text-align: center;
	}

		#footer .icons a {
			-moz-transition: opacity 0.2s ease-in-out;
			-webkit-transition: opacity 0.2s ease-in-out;
			-ms-transition: opacity 0.2s ease-in-out;
			transition: opacity 0.2s ease-in-out;
			opacity: 0.35;
		}
		#footer .icons svg {
      width: 2rem;
      height: 2rem;
		}

			#footer .icons a:hover svg {
        fill: #666;
			}

		#footer .copyright {
			color: #999;
			font-size: 0.9em;
			line-height: 1em;
			margin: 2em 0 0 0;
			padding: 0;
			text-align: center;
		}

			#footer .copyright a {
				color: inherit;
			}

			#footer .copyright li {
				border-left: solid 1px #dddddd;
				display: inline-block;
				list-style: none;
				margin-left: 1em;
				padding-left: 1em;
			}

				#footer .copyright li:first-child {
					border-left: 0;
					margin-left: 0;
					padding-left: 0;
				}

/* CTA */

	#cta {
		background: #e89980;
		color: #f9e6df;
		padding: 3.5em 0 4em 0;
		text-align: center;
	}

		#cta h2, #cta h3, #cta h4, #cta h5, #cta h6 {
			color: inherit;
		}

		#cta form {
			margin: 0 auto;
			max-width: 100%;
			width: 25em;
		}

		#cta input[type="submit"],
		#cta input[type="reset"],
		#cta input[type="button"],
		#cta .button {
			box-shadow: none;
			background: #fff;
			color: #e89980;
		}

		#cta input[type="text"],
		#cta input[type="password"],
		#cta input[type="email"],
		#cta select,
		#cta textarea {
			color: #ffffff;
			background: rgba(255, 255, 255, 0.15);
			border: 0;
		}

			#cta input[type="text"]:focus,
			#cta input[type="password"]:focus,
			#cta input[type="email"]:focus,
			#cta select:focus,
			#cta textarea:focus {
				box-shadow: inset 0 0 0 2px #fff;
			}

		#cta ::-webkit-input-placeholder {
			color: rgba(255, 255, 255, 0.75) !important;
		}

		#cta :-moz-placeholder {
			color: rgba(255, 255, 255, 0.75) !important;
		}

		#cta ::-moz-placeholder {
			color: rgba(255, 255, 255, 0.75) !important;
		}

		#cta :-ms-input-placeholder {
			color: rgba(255, 255, 255, 0.75) !important;
		}

		#cta .formerize-placeholder {
			color: rgba(255, 255, 255, 0.75) !important;
		}

/* Wide */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 13pt;
			}

		/* Banner */

			#banner {
				padding: 10em 0 18em 0;
			}

	}

/* Normal */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 11pt;
			}

		/* Header */

			.dropotron.level-0 {
				font-size: 1em;
			}

		/* Banner */

			#banner {
				background-attachment: scroll;
			}

				#banner h2 {
					font-size: 3.5em;
				}

	}

/* Narrow */

	@media screen and (max-width: 980px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 11pt;
			}

	}

/* Narrower */

	#navPanel, #navButton {
		display: none;
	}

	@media screen and (max-width: 840px) {

		/* Basic */

			html, body {
				overflow-x: hidden;
			}

			body, input, select, textarea {
				font-size: 11pt;
			}

			h2 br, h3 br, h4 br, h5 br, h6 br {
				display: none;
			}

		/* Section/Article */

			header br {
				display: none;
			}

			header.major {
				padding: 0 4em;
			}

		/* Box */

			.box {
				padding: 3em 2em;
			}

				.box.features > section {
					padding: 3em 2em;
				}

				.box .image.featured {
					margin-left: -2em;
					width: calc(100% + 4em);
				}

					.box .image.featured:first-child {
						margin-bottom: 3em;
						margin-top: -3em;
					}

					.box .image.featured:last-child {
						margin-bottom: -3em;
						margin-top: 3em;
					}

		/* Header */

			#page-wrapper {
				padding-top: 0;
			}

			#header {
				display: none;
			}

		/* Banner */

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

			#navButton {
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
				width: 100%;
				z-index: 10001;
			}

				#navButton .toggle {
					text-decoration: none;
					height: 100%;
					left: 0;
					position: absolute;
					top: 0;
					width: 100%;
					border: 0;
					outline: 0;
				}

					#navButton .toggle:before {
						-moz-osx-font-smoothing: grayscale;
						-webkit-font-smoothing: antialiased;
						display: inline-block;
						font-style: normal;
						font-variant: normal;
						text-rendering: auto;
						line-height: 1;
						text-transform: none !important;
						font-family: 'Font Awesome 5 Free';
						font-weight: 900;
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
				background: #2b2b2b;
				color: #bbb;
			}

				#navPanel .link {
					border-bottom: 0;
					border-top: solid 1px rgba(255, 255, 255, 0.05);
					color: #bbb;
					display: block;
					height: 44px;
					line-height: 44px;
					padding: 0 1em 0 1em;
					text-decoration: none;
				}

					#navPanel .link:first-child {
						border-top: 0;
					}

					#navPanel .link.depth-0 {
						color: #fff;
					}

					#navPanel .link .indent-1 {
						display: inline-block;
						width: 1em;
					}

					#navPanel .link .indent-2 {
						display: inline-block;
						width: 2em;
					}

					#navPanel .link .indent-3 {
						display: inline-block;
						width: 3em;
					}

					#navPanel .link .indent-4 {
						display: inline-block;
						width: 4em;
					}

					#navPanel .link .indent-5 {
						display: inline-block;
						width: 5em;
					}

			body.navPanel-visible #page-wrapper {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #navButton {
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

/* Mobile */

	@media screen and (max-width: 736px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 11pt;
			}

			h2 {
				font-size: 1.75em;
				line-height: 1.35em;
				letter-spacing: -0.025em;
			}

			h3 {
				font-size: 1.5em;
			}

			h4 {
				font-size: 1em;
			}

		/* Section/Article */

			header.major {
				padding: 1em;
			}

				header.major h2, header.major p {
					padding-left: 0.5em;
					padding-right: 0.5em;
				}

		/* Box */

			.box {
				margin: 1em;
				overflow-x: hidden;
				padding: 2em 2em !important;
			}

				.box.features .features-row {
					border-top: 0;
					padding: 0;
				}

					.box.features .features-row section {
						border: 0;
						border-top: solid 1px #e5e5e5 !important;
						float: none;
						margin: 2em 0 0 0 !important;
						padding: 2em 0 0 0 !important;
						width: 100%;
					}

					.box.features .features-row:first-child section:first-child {
						border-top: 0 !important;
						margin-top: 0 !important;
						padding-top: 0 !important;
					}

				.box .image.featured {
					margin-left: -2em;
					width: calc(100% + 4em);
				}

					.box .image.featured:first-child {
						margin-bottom: 2em;
						margin-top: -2em;
					}

					.box .image.featured:last-child {
						margin-bottom: -2em;
						margin-top: 2em;
					}

		/* Banner */

			#banner {
				padding: 4em 0;
			}

				#banner h2 {
					font-size: 2.25em;
				}

				#banner p {
					font-size: 1.25em;
				}

		/* Main */

			#main {
				padding: 4em 0 0 0;
			}

				#main > header {
					margin: 0 2em 1.5em 2em;
				}

					#main > header h2 {
						font-size: 2em;
					}

					#main > header p {
						font-size: 1em;
						padding-bottom: 1em;
					}

			body.landing #main {
				padding: 0;
				margin-top: 0;
			}

		/* Footer */

			#footer {
				padding: 4em 0;
			}

				#footer .copyright li {
					border-left: 0;
					display: block;
					line-height: 2em;
					margin-left: 0;
					padding-left: 0;
				}

	}

/* Mobile (Portrait) */

	@media screen and (max-width: 480px) {

		/* Basic */

			html, body {
				min-width: 320px;
			}

			body, input, select, textarea {
				font-size: 11pt;
			}

		/* Section/Article */

			header.major {
				padding: 0;
			}

		/* List */

			ul.actions {
				margin: 0 0 2em 0;
			}

				ul.actions li {
					display: block;
					padding: 1em 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions li:first-child {
						padding-top: 0;
					}

					ul.actions li > * {
						width: 100%;
						margin: 0 !important;
					}

						ul.actions li > *.icon:before {
							margin-left: -2em;
						}

				ul.actions.small li {
					padding: 0.5em 0 0 0;
				}

					ul.actions.small li:first-child {
						padding-top: 0;
					}

		/* Box */

			.box {
				border-radius: 0;
				box-shadow: none;
				margin: 1em 0 0 0;
				padding: 3em 1em !important;
			}

				.box.features .features-row section {
					margin: 3em 0 0 0 !important;
					padding: 3em 0 0 0 !important;
				}

				.box .image.featured {
					border-radius: 0;
					margin-left: -1em;
					width: calc(100% + 2em);
				}

					.box .image.featured img {
						border-radius: 0 !important;
					}

					.box .image.featured:first-child {
						margin-bottom: 3em;
						margin-top: -3em;
					}

					.box .image.featured:last-child {
						margin-bottom: -3em;
						margin-top: 3em;
					}

		/* Banner */

			#banner {
				padding: 5em 3em 4em 3em;
			}

		/* Main */

			#main > .box:first-child {
				margin-top: 0;
			}

		/* CTA */

			#cta {
				padding: 2.5em 1em 3em 1em;
			}

	}
`;

export default alphaStyle;
