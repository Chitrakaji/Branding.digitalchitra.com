"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type CTAFormProps = {
  ctaText: string;
};

const FLODESK_ROOT_CLASS = "ff-6a0c5355613f067ca55c5a36";

const FLODESK_EMBED_HTML = String.raw`<link rel="preload" href="https://use.typekit.net/msq2hgn.css" as="style">
<link rel="stylesheet" href="https://use.typekit.net/msq2hgn.css">
<link rel="preload" href="https://assets.flodesk.com/pp-editorial-new.css" as="style">
<link rel="stylesheet" href="https://assets.flodesk.com/pp-editorial-new.css">
<link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style">
<link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css">
<style>
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 *,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 *::before,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 *::after {
    box-sizing: border-box;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [tabindex="-1"]:focus {
    outline: none !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 h1,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 h2,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 h3,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 h4,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 h5,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 h6 {
    margin-top: 0;
    margin-bottom: 0.7em;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ol,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ul,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 dl {
    margin-top: 0;
    margin-bottom: 1.4rem;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ol ol,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ul ul,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ol ul,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ul ol {
    margin-bottom: 0;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 b,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 strong {
    font-weight: bolder;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 small {
    font-size: 80%;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 sub,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 sub {
    bottom: -0.25em;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 sup {
    top: -0.5em;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 a:hover {
    color: #4396fd;
    text-decoration: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 img {
    border-style: none;
    vertical-align: middle;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 svg:not(:root) {
    overflow: hidden;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 area,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [role="button"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 label,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 select,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 summary,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 textarea {
    touch-action: manipulation;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 label {
    display: inline-block;
    font-weight: bolder;
    margin-bottom: 0.7rem;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button:focus {
    outline: 1px dotted;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 select,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 optgroup,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 textarea {
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input {
    overflow: visible;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 select {
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button,
  html[data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="button"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="reset"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="submit"] {
    -webkit-appearance: button;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 button::-moz-focus-inner,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="button"]::-moz-focus-inner,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="reset"]::-moz-focus-inner,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input[type="radio"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input[type="checkbox"] {
    padding: 0;
    box-sizing: border-box;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input[type="date"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input[type="time"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input[type="datetime-local"],
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 input[type="month"] {
    -webkit-appearance: listbox;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 textarea {
    resize: vertical;
    overflow: auto;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="number"]::-webkit-inner-spin-button,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="search"]::-webkit-search-cancel-button,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 [hidden] {
    display: none !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    opacity: 0;
    outline: 0;
    z-index: -1;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    overflow-x: hidden;
    overflow-y: auto;
    transition: opacity 0.4s, visibility 0.4s;
    visibility: hidden;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal.fd-is-open {
    opacity: 1;
    z-index: 1040;
    visibility: visible;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__dialog {
    width: calc(100% - 60px);
    margin: 30px auto;
    display: flex;
    position: relative;
    max-width: 750px;
    min-height: calc(100% - 60px);
    align-items: center;
    pointer-events: none;
    justify-content: center;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__content {
    width: 100%;
    border: 0 solid #d7d7d7;
    display: flex;
    outline: 0;
    position: relative;
    background: #fff;
    box-shadow: 6.5px 11.3px 19px 0 rgba(0, 0, 0, 0.11);
    border-radius: 0;
    flex-direction: column;
    pointer-events: auto;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__body {
    flex: 1 1 auto;
    padding: 0;
    position: relative;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__close {
    top: 0;
    color: #000;
    right: 0;
    width: 40px;
    border: 0;
    cursor: pointer;
    height: 40px;
    margin: 0;
    display: flex;
    padding: 0;
    z-index: 1000;
    position: absolute;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    align-items: center;
    line-height: 1;
    justify-content: center;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__close svg {
    color: inherit;
    width: 10px;
    height: auto;
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__close:hover,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__close:focus,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__close:active {
    outline: none;
  }

  @media (max-width: 575px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-modal__dialog {
      width: calc(100% - 30px);
      margin: 15px auto;
      min-height: calc(100% - 30px);
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-control {
    width: 100%;
    display: block;
    outline: none;
    position: relative;
    -webkit-appearance: none;
    appearance: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-control:focus {
    outline: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-control::placeholder {
    color: transparent !important;
    opacity: 0 !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-control:disabled {
    opacity: 1;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-label {
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-control:not(:placeholder-shown)+.fd-form-label {
    opacity: 0;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-description {
    margin: 5px 0 0 0;
    font-size: 0.8em;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-feedback {
    margin: 5px 0 0 0;
    font-size: 0.8em;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-suggestion {
    margin: 6px 0 0 0;
    font-size: 0.9em;
    text-align: center;
    word-break: break-word;
    line-height: 1.4;
    overflow-wrap: break-word;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-suggestion__link {
    font: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    max-width: 100%;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    text-align: inherit;
    transition: text-decoration-color 0.2s ease;
    word-break: break-word;
    line-height: inherit;
    white-space: normal;
    overflow-wrap: break-word;
    letter-spacing: inherit;
    vertical-align: baseline;
    text-decoration: underline;
    text-decoration-color: currentColor;
    text-underline-offset: calc((1lh - 1cap) / 2 - 0.08em - 0.8px);
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
    text-decoration-thickness: 0.08em;
  }

  @media (hover: hover) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-suggestion__link:hover {
      text-decoration-color: currentColor;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-suggestion__link:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-suggestion__link:focus:not(.fd-focus-visible) {
    outline: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group {
    margin: 0 0 15px;
    position: relative;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-success .fd-form-feedback,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-success .fd-form-check {
    color: #02dba8 !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-success .fd-form-control {
    color: #02dba8 !important;
    border-color: #02dba8 !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-success .fd-form-feedback {
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-error .fd-form-feedback,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-error .fd-form-check {
    color: #C84E41 !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-error .fd-form-control {
    color: #C84E41 !important;
    border-color: #C84E41 !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-group.fd-has-error .fd-form-feedback {
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-btn {
    cursor: pointer;
    display: inline-flex;
    outline: none;
    max-width: 100%;
    -webkit-appearance: none;
    appearance: none;
    font-style: normal;
    text-align: center;
    align-items: center;
    text-shadow: none;
    white-space: normal;
    justify-content: center;
    text-decoration: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-btn:hover {
    outline: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-btn:focus {
    outline: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-btn:disabled {
    opacity: 0.8;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check {
    cursor: pointer;
    margin: 0;
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 30px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__input {
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    opacity: 0;
    z-index: -1;
    position: absolute;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__checkmark {
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    background-size: 18px;
    background-image: url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' %3e %3cpath d='M1 4C1 2.34315 2.34315 1 4 1H16C17.6569 1 19 2.34315 19 4V16C19 17.6569 17.6569 19 16 19H4C2.34315 19 1 17.6569 1 16V4Z' fill='white' fill-opacity='1' /%3e %3cpath fill='black' fill-rule='evenodd' clip-rule='evenodd' d='M0.25 4C0.25 1.92893 1.92893 0.25 4 0.25H16C18.0711 0.25 19.75 1.92893 19.75 4V16C19.75 18.0711 18.0711 19.75 16 19.75H4C1.92893 19.75 0.25 18.0711 0.25 16V4ZM4 1.75C2.75736 1.75 1.75 2.75736 1.75 4V16C1.75 17.2426 2.75736 18.25 4 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V4C18.25 2.75736 17.2426 1.75 16 1.75H4Z' /%3e %3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__label {
    flex: 1 1;
    margin: 0;
    font-size: 14px;
    text-align: left;
    word-break: break-word;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.01em;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__input:checked+.fd-form-check__checkmark::after {
    opacity: 1;
    z-index: 1;
    visibility: visible;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__checkmark::after {
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    content: "";
    display: block;
    opacity: 0;
    z-index: 1;
    position: absolute;
    transition: opacity 0.4s, z-index 0.4s;
    visibility: inherit;
    background-size: 12px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' width='12' height='10' viewBox='0 0 11.51 8.2' %3e %3ctitle%3echeck%3c/title%3e %3cpath d='M4.05%2c8.2A.74.74%2c0%2c0%2c1%2c3.52%2c8L.22%2c4.68A.75.75%2c0%2c0%2c1%2c1.28%2c3.62l3.3%2c3.3A.75.75%2c0%2c0%2c1%2c4.58%2c8%2c.74.74%2c0%2c0%2c1%2c4.05%2c8.2Z' /%3e %3cpath d='M4.06%2c8.2A.74.74%2c0%2c0%2c1%2c3.53%2c8a.75.75%2c0%2c0%2c1%2c0-1.06l6.7-6.7a.75.75%2c0%2c0%2c1%2c1.06%2c1.06L4.59%2c8A.74.74%2c0%2c0%2c1%2c4.06%2c8.2Z' /%3e %3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__input:focus {
    outline: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-content {
    position: relative;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-has-success .fd-form-content {
    display: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-has-captcha .fd-form-content>*:not(.fd-form-captcha) {
    opacity: 0;
    visibility: hidden;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-captcha {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-start;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-success {
    width: 100%;
    display: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-has-success .fd-form-success {
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-success>*:last-child {
    margin-bottom: 0;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-error {
    display: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-has-error .fd-form-error {
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-error>*:last-child {
    margin-bottom: 0;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-focus-visible,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__input.fd-focus-visible+.fd-form-check__checkmark {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 calc(2px + 4px) #000000 !important;
    transition: box-shadow 0.2s !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-focus-visible,
  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .fd-form-check__input.fd-focus-visible+.fd-form-check__checkmark {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 calc(2px + 2px) #717171 !important;
    transition: box-shadow 0.2s !important;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__modal {
    background: rgba(184, 184, 184, 0.04);
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__modal-dialog {
    max-width: 620px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__modal-content {
    background: #ffffff;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__modal-close {
    color: #000000;
    position: absolute !important;
    font-size: 10px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__wrapper {
    display: flex;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__form {
    color: #333333;
    width: 100%;
    margin: 0;
    padding: 70px;
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: 0.1px;
    text-transform: none;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__form {
      padding: 25px;
      word-wrap: anywhere;
      word-break: break-word;
      white-space: normal;
      overflow-wrap: break-word;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__title {
    color: #00584e;
    width: 100%;
    margin: 0 0 25px 0;
    display: block;
    font-size: 37px;
    text-align: center;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__title * {
    line-height: inherit;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__subtitle {
    width: 100%;
    margin: 0 0 30px 0;
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__subtitle * {
    line-height: inherit;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36[data-ff-stage="success"] .ff-6a0c5355613f067ca55c5a36__content {
    display: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__fields {
    margin: 0 0 15px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__fields>*:last-child {
    margin-bottom: 0;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__field {
    font-size: 13px;
    text-align: left;
    font-weight: 400;
    letter-spacing: 0.1px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__control {
    color: #000000;
    border: 1px solid #dddddd;
    height: 46px;
    padding: 12px 20px;
    font-size: 13px;
    background: transparent;
    text-align: left;
    font-weight: 400;
    line-height: 20px;
    border-radius: 0px;
    letter-spacing: 0.1px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__label {
    color: #000000;
    border: 1px solid transparent;
    padding: 12px 20px;
    font-size: 13px;
    text-align: left;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.1px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference {
      flex-direction: column;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-title {
    color: #333333;
    width: 100%;
    margin: 0 0 30px 0;
    display: block;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0px;
    text-transform: none;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-title {
      margin: 0 0 30px;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-title * {
    line-height: inherit;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-control {
    width: 100%;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-list {
    width: 100%;
    margin: -8px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-list {
      flex-direction: column;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-item {
    flex: 1 1;
    padding: 8px 0;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__preference-item {
      flex: 1 1;
      max-width: 100%;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__form-check .fd-form-check__input {
    top: 2.200000000000001px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__form-check .fd-form-check__checkmark {
    top: 2.200000000000001px;
    border-radius: 4px;
    background-image: url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' %3e %3cpath d='M1 1H19V19H1V1Z' fill='white' fill-opacity='0' /%3e %3cpath fill='black' fill-rule='evenodd' clip-rule='evenodd' d='M0.25 0.25H19.75V19.75H0.25V0.25ZM1.75 1.75V18.25H18.25V1.75H1.75Z' /%3e %3c/svg%3e");
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__form-check .fd-form-check__label {
    color: #333333;
    font-size: 14px;
    min-height: 22.400000000000002px;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__form-check .fd-form-check__checkmark::after {
    background-size: 12px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' width='12' height='10' viewBox='0 0 11.51 8.2' %3e %3ctitle%3echeck%3c/title%3e %3cpath d='M4.05%2c8.2A.74.74%2c0%2c0%2c1%2c3.52%2c8L.22%2c4.68A.75.75%2c0%2c0%2c1%2c1.28%2c3.62l3.3%2c3.3A.75.75%2c0%2c0%2c1%2c4.58%2c8%2c.74.74%2c0%2c0%2c1%2c4.05%2c8.2Z' /%3e %3cpath d='M4.06%2c8.2A.74.74%2c0%2c0%2c1%2c3.53%2c8a.75.75%2c0%2c0%2c1%2c0-1.06l6.7-6.7a.75.75%2c0%2c0%2c1%2c1.06%2c1.06L4.59%2c8A.74.74%2c0%2c0%2c1%2c4.06%2c8.2Z' /%3e %3c/svg%3e");
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__footer {
    text-align: center;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__button {
    color: #452218;
    width: 100%;
    border: 4px solid #156148;
    display: inline-block;
    padding: 12px 20px;
    font-size: 32px;
    background: #c7ffd0;
    text-align: center;
    font-family: brothers, sans-serif;
    font-weight: 400;
    line-height: 20px;
    border-radius: 26px;
    letter-spacing: 0.1px;
    text-transform: uppercase;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__button [data-draw-element="editable"] {
    min-width: 10px;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__button {
      width: 100%;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__button [data-draw-element="editable"]:not([contenteditable]):empty::after {
    width: 10px;
    content: "\00a0";
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__success {
    display: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36[data-ff-stage="success"] .ff-6a0c5355613f067ca55c5a36__success {
    display: block;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__success-message {
    color: #333333;
    width: 100%;
    display: block;
    font-size: 20px;
    word-wrap: anywhere;
    min-height: 1.6em;
    text-align: center;
    word-break: break-word;
    font-family: pp-editorial-new, serif;
    font-weight: 200;
    line-height: 1.6;
    white-space: normal;
    overflow-wrap: break-word;
    letter-spacing: 0.1px;
    pointer-events: auto;
    text-transform: none;
  }

  @media (max-width: 767px) {
    [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__success-message {
      font-size: 20px;
    }
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__error {
    margin: 15px 0 0 0;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-block {
    display: flex;
    padding: 0px 0;
    margin-top: 16px;
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
    justify-content: flex-start;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-block.fd-has-error .fd-form-feedback {
    color: #C84E41;
    font-size: 14px;
    min-height: 19.599999999999998px;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-block.fd-has-error .fd-form-check__checkmark {
    background-image: url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' %3e %3cpath d='M1 1H19V19H1V1Z' fill='white' fill-opacity='0' /%3e %3cpath fill='%23C84E41' fill-rule='evenodd' clip-rule='evenodd' d='M0.25 0.25H19.75V19.75H0.25V0.25ZM1.75 1.75V18.25H18.25V1.75H1.75Z' /%3e %3c/svg%3e");
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-checkbox {
    padding-left: 26px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-checkbox .fd-form-check__checkmark {
    top: calc((14px * 1.4 - 18px) / 2);
    border-radius: 0px;
    background-image: url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' %3e %3cpath d='M1 1H19V19H1V1Z' fill='white' fill-opacity='0' /%3e %3cpath fill='black' fill-rule='evenodd' clip-rule='evenodd' d='M0.25 0.25H19.75V19.75H0.25V0.25ZM1.75 1.75V18.25H18.25V1.75H1.75Z' /%3e %3c/svg%3e");
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-checkbox .fd-form-check__label {
    color: #333333;
    font-size: 14px;
    min-height: 19.599999999999998px;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__accepts-gdpr-checkbox .fd-form-check__checkmark::after {
    background-size: 8px;
    background-image: url("data:image/svg+xml,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' fill='black' x='0px' y='0px' viewBox='0 0 8 8' style='enable-background:new 0 0 8 8%3b' xml:space='preserve' %3e %3cg%3e %3cpath class='st0' d='M0.8%2c7.7c-0.2%2c0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.6%2c0-0.8l6.3-6.3c0.2-0.2%2c0.6-0.2%2c0.8%2c0s0.2%2c0.6%2c0%2c0.8L1.2%2c7.5C1.1%2c7.6%2c1%2c7.7%2c0.8%2c7.7z' /%3e %3c/g%3e %3cg%3e %3cpath class='st0' d='M7.1%2c7.7c-0.2%2c0-0.3-0.1-0.4-0.2L0.4%2c1.2C0.1%2c1%2c0.1%2c0.6%2c0.4%2c0.4s0.6-0.2%2c0.8%2c0l6.3%2c6.3c0.2%2c0.2%2c0.2%2c0.6%2c0%2c0.8C7.4%2c7.6%2c7.3%2c7.7%2c7.1%2c7.7z' /%3e %3c/g%3e %3c/svg%3e");
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy-toggle-button {
    color: inherit;
    border: none;
    cursor: pointer;
    margin: 0;
    outline: none;
    padding: 0;
    background: transparent;
    font-weight: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    text-decoration: underline;
    text-underline-position: under;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy-toggle-button:focus {
    outline: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy-not-mandatory {
    color: #333333;
    opacity: 0.52;
    font-size: 14px;
    margin-top: 16px;
    min-height: 19.599999999999998px;
    text-align: center;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0px;
    text-transform: none;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy {
    color: #241A17;
    font-size: 14px;
    font-family: FlodeskSans, sans-serif;
    font-weight: 400;
    line-height: 20px;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy p {
    margin-bottom: 0.25rem;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy-link {
    color: inherit;
    cursor: pointer;
    text-underline-position: under;
  }

  [data-ff-el="root"].ff-6a0c5355613f067ca55c5a36 .ff-6a0c5355613f067ca55c5a36__privacy-policy-link:hover {
    color: inherit;
    text-decoration: underline;
  }
</style>

<div class="ff-6a0c5355613f067ca55c5a36" data-ff-el="root" data-ff-version="3" data-ff-type="popup" data-ff-name="popupNoImage" data-ff-stage="default">
  <div data-ff-el="config" data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjpudWxsfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiI8ZGl2IGRhdGEtcGFyYWdyYXBoPVwidHJ1ZVwiPkdvdCBpdCEgQ2hlY2sgeW91ciBpbmJveCBmb3IgYW4gZW1haWwgdG8gY29uZmlybSB5b3VyIHN1YnNjcmlwdGlvbi48L2Rpdj4iLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vY2FsZW5kbHkuY29tL2d1cnVuZ2NoaXRyYWthamkvZnJlZS0xLTEtZGlnaXRhbC1tYXJrZXRpbmctY29uc3VsdGF0aW9uLWNhbGwifSwiY29pIjpmYWxzZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOnRydWUsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=" style="display: none"></div>
  <div class="ff-6a0c5355613f067ca55c5a36__modal fd-modal" data-ff-el="modal">
    <div class="ff-6a0c5355613f067ca55c5a36__modal-dialog fd-modal__dialog" data-ff-el="modal-dialog">
      <div class="ff-6a0c5355613f067ca55c5a36__modal-content fd-modal__content" data-ff-el="modal-content">
        <div class="ff-6a0c5355613f067ca55c5a36__modal-body fd-modal__body" data-ff-el="modal-body">
          <div class="ff-6a0c5355613f067ca55c5a36__wrapper">
            <form class="ff-6a0c5355613f067ca55c5a36__form" action="https://form.flodesk.com/forms/6a1c61bd3f0694dc4368ac47/submit" method="post" data-ff-el="form">
              <div class="ff-6a0c5355613f067ca55c5a36__title">
                <div style="word-break:break-word">
                  <div data-paragraph="true">FREE 1:1 digital marketing consultation call</div>
                </div>
              </div>
              <div class="ff-6a0c5355613f067ca55c5a36__subtitle">
                <div style="word-break:break-word">
                  <div data-paragraph="true">Book a FREE digital marketing consultation call with me and get a free customised strategy plan for your business</div>
                </div>
              </div>
              <div class="ff-6a0c5355613f067ca55c5a36__content fd-form-content" data-ff-el="content">
                <div class="ff-6a0c5355613f067ca55c5a36__fields" data-ff-el="fields">
                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group">
                    <input id="ff-6a0c5355613f067ca55c5a36-firstName" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="firstName" placeholder="First name" data-ff-tab="firstName::email" required />
                    <label for="ff-6a0c5355613f067ca55c5a36-firstName" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label">
                      <div>
                        <div>First name</div>
                      </div>
                    </label>
                  </div>

                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group">
                    <input id="ff-6a0c5355613f067ca55c5a36-email" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="email" placeholder="Email address" data-ff-tab="email:firstName:fields.businessName" required />
                    <label for="ff-6a0c5355613f067ca55c5a36-email" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label">
                      <div>
                        <div>Email address</div>
                      </div>
                    </label>
                  </div>

                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group">
                    <input id="ff-6a0c5355613f067ca55c5a36-sOpYBAlgAF" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields.businessName" placeholder="Business Name:" data-ff-tab="fields.businessName:email:fields.websiteOrFacebookLinks" required />
                    <label for="ff-6a0c5355613f067ca55c5a36-sOpYBAlgAF" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label">
                      <div>
                        <div>Business Name:</div>
                      </div>
                    </label>
                  </div>

                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group">
                    <input id="ff-6a0c5355613f067ca55c5a36-TnLgxZE7Wm" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields.websiteOrFacebookLinks" placeholder="Website or Facebook Link:" data-ff-tab="fields.websiteOrFacebookLinks:fields.businessName:fields.whatsappNumber" required />
                    <label for="ff-6a0c5355613f067ca55c5a36-TnLgxZE7Wm" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label">
                      <div>
                        <div>Website or Facebook Link:</div>
                      </div>
                    </label>
                  </div>

                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group">
                    <input id="ff-6a0c5355613f067ca55c5a36-mlUSw8HrRw" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields.whatsappNumber" placeholder="WhatsApp Number:" data-ff-tab="fields.whatsappNumber:fields.websiteOrFacebookLinks:submit" required />
                    <label for="ff-6a0c5355613f067ca55c5a36-mlUSw8HrRw" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label">
                      <div>
                        <div>WhatsApp Number:</div>
                      </div>
                    </label>
                  </div>

                  <input type="text" maxlength="255" name="confirm_email_address" style="display: none" />
                </div>

                <div class="ff-6a0c5355613f067ca55c5a36__footer" data-ff-el="footer">
                  <button type="submit" class="ff-6a0c5355613f067ca55c5a36__button fd-btn" data-ff-el="submit" data-ff-tab="submit">
                    <div><span data-draw-element="editable">Book a Call</span></div>
                  </button>
                </div>
              </div>
              <div class="ff-6a0c5355613f067ca55c5a36__success fd-form-success" data-ff-el="success">
                <div class="ff-6a0c5355613f067ca55c5a36__success-message">
                  <div>
                    <div>
                      <div data-paragraph="true">Thanks! Keep an eye on your inbox for updates.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ff-6a0c5355613f067ca55c5a36__error fd-form-error" data-ff-el="error"></div>
            </form>
          </div>
        </div>
        <button class="ff-6a0c5355613f067ca55c5a36__modal-close fd-modal__close" data-ff-el="modal-close">
          <svg style="width: 1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.51 14.51">
            <line x1="1" y1="1" x2="13.51" y2="13.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
            <line x1="13.51" y1="1" x2="1" y2="13.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
<script>
  (function(w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    var sm = d.createElement(t);
    sm.async = true;
    sm.type = 'module';
    sm.src = h + s + '.mjs' + v;
    f.parentNode.insertBefore(sm, f);
    var sn = d.createElement(t);
    sn.async = true;
    sn.noModule = true;
    sn.src = h + s + '.js' + v;
    f.parentNode.insertBefore(sn, f);
  })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
</script>
<script>
  window.fd('form:handle', {
    formId: '6a1c61bd3f0694dc4368ac47',
    rootEl: '.ff-6a0c5355613f067ca55c5a36',
  });
</script>`;

export default function CTAForm({ ctaText }: CTAFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = FLODESK_EMBED_HTML;

    const configEl = container.querySelector(
      '[data-ff-el="config"]',
    ) as HTMLElement | null;

    if (configEl) {
      try {
        const encoded = configEl.getAttribute("data-ff-config");

        if (encoded) {
          const decoded = JSON.parse(window.atob(encoded));
          decoded.onSuccess = {
            ...decoded.onSuccess,
            mode: "redirect",
            redirectUrl: `${window.location.origin}/thanks`,
          };
          configEl.setAttribute(
            "data-ff-config",
            window.btoa(JSON.stringify(decoded)),
          );
        }
      } catch {
        // Leave the Flodesk config untouched if decoding fails.
      }
    }

    const root = container.querySelector(
      `.${FLODESK_ROOT_CLASS}`,
    ) as HTMLElement | null;

    let hasRedirected = false;
    let successInterval: number | undefined;

    const isSuccessState = () => {
      const currentRoot = container.querySelector(
        `.${FLODESK_ROOT_CLASS}`,
      ) as HTMLElement | null;

      if (!currentRoot) {
        return false;
      }

      if (currentRoot.getAttribute("data-ff-stage") === "success") {
        return true;
      }

      if (currentRoot.classList.contains("fd-has-success")) {
        return true;
      }

      const successEl = currentRoot.querySelector(
        "[data-ff-el='success'], .fd-form-success",
      ) as HTMLElement | null;

      if (!successEl) {
        return false;
      }

      return successEl.offsetParent !== null;
    };

    const redirectToThanks = () => {
      if (hasRedirected) {
        return;
      }

      hasRedirected = true;
      window.setTimeout(() => {
        router.push("/thanks");
      }, 1400);
    };

    const observer = new MutationObserver(() => {
      if (hasRedirected) {
        return;
      }

      if (isSuccessState()) {
        redirectToThanks();
      }
    });

    if (root) {
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["data-ff-stage", "class"],
      });
    }

    observer.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    successInterval = window.setInterval(() => {
      if (isSuccessState()) {
        redirectToThanks();
      }
    }, 800);

    const scripts = Array.from(container.querySelectorAll("script"));

    scripts.forEach((script) => {
      const replacement = document.createElement("script");

      Array.from(script.attributes).forEach((attribute) => {
        replacement.setAttribute(attribute.name, attribute.value);
      });

      replacement.textContent = script.textContent;
      script.parentNode?.replaceChild(replacement, script);
    });

    return () => {
      observer.disconnect();
      if (successInterval) {
        window.clearInterval(successInterval);
      }
      container.innerHTML = "";
    };
  }, [router]);

  return (
    <section id="cta-form" className="px-6 pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Final step
          </p>
          <h2 className="mt-4 text-5xl leading-[0.98] font-semibold tracking-tight md:text-6xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-[1.55rem] md:leading-10">
            Fill up the form below and we&apos;ll contact you with the next steps.
          </p>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-white/90 p-5 shadow-[var(--shadow)] md:p-8">
          <div ref={containerRef} className="flodesk-shell" />
          <p className="mt-6 text-center text-base text-[var(--muted)]">
            We respect your privacy. No spam.
          </p>
        </div>

        <style jsx global>{`
          .flodesk-shell .fd-modal,
          .flodesk-shell .fd-modal.fd-is-open {
            position: static !important;
            opacity: 1 !important;
            visibility: visible !important;
            z-index: auto !important;
            background: transparent !important;
            overflow: visible !important;
          }

          .flodesk-shell .fd-modal__dialog {
            width: 100% !important;
            max-width: none !important;
            min-height: auto !important;
            margin: 0 !important;
            pointer-events: auto !important;
          }

          .flodesk-shell .fd-modal__content {
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
          }

          .flodesk-shell .fd-modal__close {
            display: none !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__form {
            padding: 0 !important;
            color: var(--foreground) !important;
            background: transparent !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__title {
            color: var(--foreground) !important;
            font-size: clamp(2rem, 4vw, 3rem) !important;
            line-height: 1.05 !important;
            margin-bottom: 1rem !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__subtitle {
            color: var(--muted) !important;
            font-size: 1.05rem !important;
            line-height: 1.8 !important;
            margin-bottom: 1.75rem !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__field {
            margin-bottom: 1rem !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__control {
            height: auto !important;
            min-height: 4.25rem !important;
            border: 1px solid var(--border) !important;
            border-radius: 1.35rem !important;
            padding: 1rem 1.2rem !important;
            font-size: 1rem !important;
            line-height: 1.5 !important;
            color: var(--foreground) !important;
            background: var(--surface) !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__label {
            color: var(--foreground) !important;
            font-size: 0.98rem !important;
            font-weight: 600 !important;
            padding: 1rem 1.2rem !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__button {
            width: 100% !important;
            min-height: 4.25rem !important;
            border: none !important;
            border-radius: 999px !important;
            background: var(--brand) !important;
            color: white !important;
            font-family: var(--font-sans), sans-serif !important;
            font-size: 1.05rem !important;
            font-weight: 700 !important;
            line-height: 1.2 !important;
            text-transform: none !important;
            letter-spacing: 0 !important;
            transition: background-color 0.2s ease !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__button:hover {
            background: var(--brand-deep) !important;
          }

          .flodesk-shell .${FLODESK_ROOT_CLASS} .${FLODESK_ROOT_CLASS}__success-message {
            color: var(--foreground) !important;
            font-size: 1.1rem !important;
            font-family: var(--font-sans), sans-serif !important;
            font-weight: 500 !important;
          }
        `}</style>
      </div>
    </section>
  );
}
