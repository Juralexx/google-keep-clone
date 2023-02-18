import { css } from "styled-components";

export const Classes = css`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        /* 1 */
        border-width: 0;
        /* 2 */
        border-style: solid;
        /* 2 */
        border-color: #e5e7eb;
    /* 2 */
    }

    html {
        line-height: 1.5;
        /* 1 */
        -webkit-text-size-adjust: 100%;
        /* 2 */
        /* 3 */
        tab-size: 4;
        /* 3 */
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        /* 4 */
        -webkit-font-feature-settings: normal;
                font-feature-settings: normal;
        /* 5 */
    }

    body {
        margin: 0;
        /* 1 */
        line-height: inherit;
        /* 2 */
    }

    hr {
        height: 0;
        /* 1 */
        color: inherit;
        /* 2 */
        border-top-width: 1px;
        /* 3 */
    }

    abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp,
    pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    table {
        text-indent: 0;
        /* 1 */
        border-color: inherit;
        /* 2 */
        border-collapse: collapse;
        /* 3 */
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        /* 1 */
        font-size: 100%;
        /* 1 */
        font-weight: inherit;
        /* 1 */
        line-height: inherit;
        /* 1 */
        color: inherit;
        /* 1 */
        margin: 0;
        /* 2 */
        padding: 0;
        /* 3 */
    }

    button,
    select {
        text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
        /* 1 */
        background-color: transparent;
        /* 2 */
        background-image: none;
        /* 2 */
    }

    :-moz-focusring {
        outline: auto;
    }

    :-moz-ui-invalid {
        box-shadow: none;
    }

    progress {
        vertical-align: baseline;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        -webkit-appearance: textfield;
        /* 1 */
        outline-offset: -2px;
        /* 2 */
    }

    ::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        /* 1 */
        font: inherit;
        /* 2 */
    }

    summary {
        display: list-item;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
        margin: 0;
    }

    fieldset {
        margin: 0;
        padding: 0;
    }

    legend {
        padding: 0;
    }

    ol,
    ul,
    menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    textarea {
        resize: vertical;
    }

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    input::placeholder,
    textarea::placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    button,
    [role="button"] {
        cursor: pointer;
    }

    :disabled {
        cursor: default;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        /* 1 */
        vertical-align: middle;
        /* 2 */
    }

    /*
    Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    */

    img,
    video {
    max-width: 100%;
    height: auto;
    }

    /* Make elements with the HTML hidden attribute stay hidden by default */

    [hidden] {
    display: none;
    }

    .transform {
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    }

    .blur, .filter {
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    }

    .backdrop-filter {
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    }

    .container {
    width: 100%;
    }

    @media (min-width: 577px) {
    .container {
        max-width: 577px;
    }
    }

    @media (min-width: 769px) {
    .container {
        max-width: 769px;
    }
    }

    @media (min-width: 993px) {
    .container {
        max-width: 993px;
    }
    }

    @media (min-width: 1201px) {
    .container {
        max-width: 1201px;
    }
    }

    @media (min-width: 1367px) {
    .container {
        max-width: 1367px;
    }
    }

    .visible {
    visibility: visible;
    }

    .fixed {
    position: fixed;
    }

    .absolute {
    position: absolute;
    }

    .relative {
    position: relative;
    }

    .sticky {
    position: -webkit-sticky;
    position: sticky;
    }

    .top-1 {
    top: 0.25rem;
    }

    .left-\[10px\] {
    left: 10px;
    }

    .right-2 {
    right: 0.5rem;
    }

    .z-10 {
    z-index: 10;
    }

    .order-1 {
    order: 1;
    }

    .\!m-0 {
    margin: 0px !important;
    }

    .mx-auto {
    margin-left: auto;
    margin-right: auto;
    }

    .\!my-\[80px\] {
    margin-top: 80px !important;
    margin-bottom: 80px !important;
    }

    .\!my-\[140px\] {
    margin-top: 140px !important;
    margin-bottom: 140px !important;
    }

    .\!my-3 {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
    }

    .my-3 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    }

    .\!my-4 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
    }

    .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    }

    .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    }

    .mb-3 {
    margin-bottom: 0.75rem;
    }

    .\!mt-5 {
    margin-top: 1.25rem !important;
    }

    .mr-2 {
    margin-right: 0.5rem;
    }

    .mt-8 {
    margin-top: 2rem;
    }

    .ml-2 {
    margin-left: 0.5rem;
    }

    .ml-auto {
    margin-left: auto;
    }

    .mb-8 {
    margin-bottom: 2rem;
    }

    .mb-2 {
    margin-bottom: 0.5rem;
    }

    .ml-1 {
    margin-left: 0.25rem;
    }

    .mt-2 {
    margin-top: 0.5rem;
    }

    .mr-4 {
    margin-right: 1rem;
    }

    .mr-3 {
    margin-right: 0.75rem;
    }

    .mt-10 {
    margin-top: 2.5rem;
    }

    .mb-1 {
    margin-bottom: 0.25rem;
    }

    .mb-5 {
    margin-bottom: 1.25rem;
    }

    .\!mb-4 {
    margin-bottom: 1rem !important;
    }

    .mt-3 {
    margin-top: 0.75rem;
    }

    .mr-1 {
    margin-right: 0.25rem;
    }

    .mt-4 {
    margin-top: 1rem;
    }

    .mt-6 {
    margin-top: 1.5rem;
    }

    .mb-4 {
    margin-bottom: 1rem;
    }

    .mb-6 {
    margin-bottom: 1.5rem;
    }

    .\!mt-10 {
    margin-top: 2.5rem !important;
    }

    .mb-\[10px\] {
    margin-bottom: 10px;
    }

    .\!mb-0 {
    margin-bottom: 0px !important;
    }

    .ml-11 {
    margin-left: 2.75rem;
    }

    .mt-1 {
    margin-top: 0.25rem;
    }

    .ml-4 {
    margin-left: 1rem;
    }

    .mt-5 {
    margin-top: 1.25rem;
    }

    .\!mt-4 {
    margin-top: 1rem !important;
    }

    .mt-7 {
    margin-top: 1.75rem;
    }

    .\!mt-2 {
    margin-top: 0.5rem !important;
    }

    .ml-3 {
    margin-left: 0.75rem;
    }

    .\!mr-0 {
    margin-right: 0px !important;
    }

    .ml-5 {
    margin-left: 1.25rem;
    }

    .mb-9 {
    margin-bottom: 2.25rem;
    }

    .mb-7 {
    margin-bottom: 1.75rem;
    }

    .mb-10 {
    margin-bottom: 2.5rem;
    }

    .block {
    display: block;
    }

    .flex {
    display: flex;
    }

    .grid {
    display: grid;
    }

    .hidden {
    display: none;
    }

    .\!hidden {
    display: none !important;
    }

    .h-5 {
    height: 1.25rem;
    }

    .h-full {
    height: 100%;
    }

    .h-7 {
    height: 1.75rem;
    }

    .h-\[350px\] {
    height: 350px;
    }

    .h-\[34px\] {
    height: 34px;
    }

    .h-4 {
    height: 1rem;
    }

    .\!h-\[44px\] {
    height: 44px !important;
    }

    .h-12 {
    height: 3rem;
    }

    .\!h-\[42px\] {
    height: 42px !important;
    }

    .h-9 {
    height: 2.25rem;
    }

    .h-\[46px\] {
    height: 46px;
    }

    .h-8 {
    height: 2rem;
    }

    .h-0 {
    height: 0px;
    }

    .h-2 {
    height: 0.5rem;
    }

    .min-h-\[300px\] {
    min-height: 300px;
    }

    .min-h-\[100px\] {
    min-height: 100px;
    }

    .w-8 {
    width: 2rem;
    }

    .w-5 {
    width: 1.25rem;
    }

    .w-full {
    width: 100%;
    }

    .w-\[34px\] {
    width: 34px;
    }

    .w-\[90px\] {
    width: 90px;
    }

    .w-\[80px\] {
    width: 80px;
    }

    .w-1\/2 {
    width: 50%;
    }

    .w-\[150px\] {
    width: 150px;
    }

    .w-\[100px\] {
    width: 100px;
    }

    .w-\[70px\] {
    width: 70px;
    }

    .w-7 {
    width: 1.75rem;
    }

    .\!w-full {
    width: 100% !important;
    }

    .w-4 {
    width: 1rem;
    }

    .w-\[80\%\] {
    width: 80%;
    }

    .w-12 {
    width: 3rem;
    }

    .w-\[400px\] {
    width: 400px;
    }

    .w-9 {
    width: 2.25rem;
    }

    .w-\[110px\] {
    width: 110px;
    }

    .min-w-\[100\%\] {
    min-width: 100%;
    }

    .max-w-\[600px\] {
    max-width: 600px;
    }

    .max-w-\[200px\] {
    max-width: 200px;
    }

    .\!max-w-full {
    max-width: 100% !important;
    }

    .max-w-\[636px\] {
    max-width: 636px;
    }

    .\!max-w-\[550px\] {
    max-width: 550px !important;
    }

    .flex-grow {
    flex-grow: 1;
    }

    .grow {
    flex-grow: 1;
    }

    .transform {
    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    @-webkit-keyframes pulse {
    50% {
        opacity: .5;
    }
    }

    @keyframes pulse {
    50% {
        opacity: .5;
    }
    }

    .animate-pulse {
    -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .cursor-pointer {
    cursor: pointer;
    }

    .\!cursor-pointer {
    cursor: pointer !important;
    }

    .resize {
    resize: both;
    }

    .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .flex-col {
    flex-direction: column;
    }

    .items-end {
    align-items: flex-end;
    }

    .items-center {
    align-items: center;
    }

    .\!justify-start {
    justify-content: flex-start !important;
    }

    .\!justify-end {
    justify-content: flex-end !important;
    }

    .justify-end {
    justify-content: flex-end;
    }

    .justify-center {
    justify-content: center;
    }

    .\!justify-between {
    justify-content: space-between !important;
    }

    .justify-between {
    justify-content: space-between;
    }

    .overflow-x-auto {
    overflow-x: auto;
    }

    .rounded-full {
    border-radius: 9999px;
    }

    .rounded-md {
    border-radius: 0.375rem;
    }

    .rounded-xl {
    border-radius: 0.75rem;
    }

    .border {
    border-width: 1px;
    }

    .border-b {
    border-bottom-width: 1px;
    }

    .border-r {
    border-right-width: 1px;
    }

    .bg-slate-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(148 163 184 / var(--tw-bg-opacity));
    }

    .p-1 {
    padding: 0.25rem;
    }

    .\!p-2 {
    padding: 0.5rem !important;
    }

    .p-2 {
    padding: 0.5rem;
    }

    .py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    }

    .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
    }

    .py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    }

    .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    }

    .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    }

    .py-7 {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    }

    .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    }

    .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    }

    .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    }

    .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    }

    .\!px-0 {
    padding-left: 0px !important;
    padding-right: 0px !important;
    }

    .px-\[15px\] {
    padding-left: 15px;
    padding-right: 15px;
    }

    .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    }

    .py-9 {
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    }

    .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    }

    .\!px-1 {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;
    }

    .pb-8 {
    padding-bottom: 2rem;
    }

    .pt-\[120px\] {
    padding-top: 120px;
    }

    .pb-\[100px\] {
    padding-bottom: 100px;
    }

    .pl-3 {
    padding-left: 0.75rem;
    }

    .pb-3 {
    padding-bottom: 0.75rem;
    }

    .\!pr-1 {
    padding-right: 0.25rem !important;
    }

    .\!pl-1 {
    padding-left: 0.25rem !important;
    }

    .pt-3 {
    padding-top: 0.75rem;
    }

    .pt-0 {
    padding-top: 0px;
    }

    .\!pt-\[70px\] {
    padding-top: 70px !important;
    }

    .pb-\[150px\] {
    padding-bottom: 150px;
    }

    .pt-5 {
    padding-top: 1.25rem;
    }

    .pb-5 {
    padding-bottom: 1.25rem;
    }

    .pb-7 {
    padding-bottom: 1.75rem;
    }

    .pt-2 {
    padding-top: 0.5rem;
    }

    .\!pb-\[80px\] {
    padding-bottom: 80px !important;
    }

    .pb-2 {
    padding-bottom: 0.5rem;
    }

    .pb-1 {
    padding-bottom: 0.25rem;
    }

    .pt-1 {
    padding-top: 0.25rem;
    }

    .\!pl-2 {
    padding-left: 0.5rem !important;
    }

    .pt-7 {
    padding-top: 1.75rem;
    }

    .pt-8 {
    padding-top: 2rem;
    }

    .\!pt-0 {
    padding-top: 0px !important;
    }

    .text-center {
    text-align: center;
    }

    .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
    }

    .text-\[26px\] {
    font-size: 26px;
    }

    .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
    }

    .text-\[16px\] {
    font-size: 16px;
    }

    .font-bold {
    font-weight: 700;
    }

    .font-medium {
    font-weight: 500;
    }

    .font-thin {
    font-weight: 100;
    }

    .font-normal {
    font-weight: 400;
    }

    .uppercase {
    text-transform: uppercase;
    }

    .lowercase {
    text-transform: lowercase;
    }

    .italic {
    font-style: italic;
    }

    .leading-4 {
    line-height: 1rem;
    }

    .underline {
    -webkit-text-decoration-line: underline;
            text-decoration-line: underline;
    }

    .outline {
    outline-style: solid;
    }

    .blur {
    --tw-blur: blur(8px);
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }

    .filter {
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }

    .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    }

    .transition {
    transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, -webkit-text-decoration-color, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    }

    .ease-out {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }

    .ease-in {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }

    .ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (min-width: 577px) {
    .sm\:mt-0 {
        margin-top: 0px;
    }

    .sm\:mb-0 {
        margin-bottom: 0px;
    }

    .sm\:\!mt-0 {
        margin-top: 0px !important;
    }

    .sm\:ml-2 {
        margin-left: 0.5rem;
    }

    .sm\:ml-5 {
        margin-left: 1.25rem;
    }

    .sm\:\!flex {
        display: flex !important;
    }

    .sm\:flex {
        display: flex;
    }

    .sm\:hidden {
        display: none;
    }

    .sm\:\!h-\[46px\] {
        height: 46px !important;
    }

    .sm\:flex-row {
        flex-direction: row;
    }

    .sm\:items-center {
        align-items: center;
    }

    .sm\:\!px-3 {
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
    }

    .sm\:\!pr-1 {
        padding-right: 0.25rem !important;
    }

    .sm\:pb-0 {
        padding-bottom: 0px;
    }

    .sm\:\!pl-1 {
        padding-left: 0.25rem !important;
    }

    .sm\:pr-2 {
        padding-right: 0.5rem;
    }

    .sm\:pl-2 {
        padding-left: 0.5rem;
    }
    }

    @media (min-width: 769px) {
    .md\:mb-1 {
        margin-bottom: 0.25rem;
    }

    .md\:\!mt-0 {
        margin-top: 0px !important;
    }

    .md\:mt-0 {
        margin-top: 0px;
    }

    .md\:ml-3 {
        margin-left: 0.75rem;
    }

    .md\:mb-0 {
        margin-bottom: 0px;
    }

    .md\:ml-4 {
        margin-left: 1rem;
    }

    .md\:block {
        display: block;
    }

    .md\:flex {
        display: flex;
    }

    .md\:hidden {
        display: none;
    }

    .md\:max-w-\[350px\] {
        max-width: 350px;
    }

    .md\:max-w-\[300px\] {
        max-width: 300px;
    }

    .md\:flex-row {
        flex-direction: row;
    }

    .md\:justify-start {
        justify-content: flex-start;
    }

    .md\:justify-end {
        justify-content: flex-end;
    }

    .md\:py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .md\:pr-5 {
        padding-right: 1.25rem;
    }

    .md\:text-left {
        text-align: left;
    }
    }

    @media (min-width: 993px) {
    .lg\:ml-4 {
        margin-left: 1rem;
    }

    .lg\:mb-0 {
        margin-bottom: 0px;
    }

    .lg\:\!mt-0 {
        margin-top: 0px !important;
    }

    .lg\:mt-0 {
        margin-top: 0px;
    }

    .lg\:flex {
        display: flex;
    }

    .lg\:\!flex {
        display: flex !important;
    }

    .lg\:\!hidden {
        display: none !important;
    }

    .lg\:max-w-\[462px\] {
        max-width: 462px;
    }

    .lg\:flex-row {
        flex-direction: row;
    }

    .lg\:px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .lg\:pr-4 {
        padding-right: 1rem;
    }

    .lg\:pr-2 {
        padding-right: 0.5rem;
    }

    .lg\:pl-2 {
        padding-left: 0.5rem;
    }

    .lg\:pr-5 {
        padding-right: 1.25rem;
    }

    .lg\:pb-0 {
        padding-bottom: 0px;
    }

    .lg\:pt-0 {
        padding-top: 0px;
    }

    .lg\:pl-5 {
        padding-left: 1.25rem;
    }

    .lg\:\!pl-7 {
        padding-left: 1.75rem !important;
    }
    }

    @media (min-width: 1201px) {
    .xl\:ml-8 {
        margin-left: 2rem;
    }
    }
`