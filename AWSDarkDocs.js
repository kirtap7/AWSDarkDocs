// ==UserScript==
// @name         DarkDoc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  dark mode for AWS Documentation
// @author       malatep
// @match        https://docs.aws.amazon.com/*
// @exclude      https://docs.aws.amazon.com/cli/*
// @exclude      https://docs.aws.amazon.com/*/cli/*
// @exclude      https://docs.aws.amazon.com/search/*
// @exclude      https://docs.aws.amazon.com/*/api-reference/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //source https://somethingididnotknow.wordpress.com/2013/07/01/change-page-styles-with-greasemonkeytampermonkey/
    function addGlobalStyle(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    const cssDark = '\
        #main-col-body, #main-content, .awsui .awsui-app-layout__navigation, .awsui .awsui-app-layout__tools, .awsui .awsui-app-layout__toggle--navigation, \
        .awsui .awsui-app-layout__toggle--tools { \
            background-color: #222e3d !important; \
        } \
        .awsui .awsui-app-layout__content { \
            background-color: #15181F !important; \
        } \
        h1, h2, h3, h4, h5, p, li, b, #guide-toc .awsdocs-toc-header .toc-header, .awsui small, #tools-panel .otp-header, .awsui .awsui-icon.awsui-icon-variant-normal { \
            color: #d8d8d8 !important; \
        } \
        #main-content #awsdocs-filter-selector .language-filter-title { \
            color: #d8d8d8 !important; \
        } \
        .term { \
            color: #EC7210 !important; \
        } \
        #main-content p code:not(.hljs), .awsui.code-light #main-content .hljs { \
            background-color: #15181F; color: #b5bbc3; !important; \
        } \
        #main-content p code a { \
            background-color: #212E3D !important; \
        } \
        .awsui.code-light #main-content .hljs-attr, .awsui.code-light #main-content .hljs-number, .awsui.code-light #main-content .hljs-selector-attr, \
        .awsui.code-light #main-content .hljs-selector-class, .awsui.code-light #main-content .hljs-selector-pseudo, \
        .awsui.code-light #main-content .hljs-template-variable, .awsui.code-light #main-content .hljs-type, .awsui.code-light #main-content .hljs-variable { \
            color: #d49100; !important; \
        } \
        .awsui.code-light #main-content .hljs code.userinput::selection { \
            background-color: #FAFAFA; \
        }\
        .awsui.code-light #main-content .hljs-addition, .awsui.code-light #main-content .hljs-attribute, \
        .awsui.code-light #main-content .hljs-meta-string, .awsui.code-light #main-content .hljs-regexp, \
        .awsui.code-light #main-content .hljs-string { \
            color: #0d9e39; !important;\
        } \
        .awsui.code-light #main-content .hljs-deletion, .awsui.code-light #main-content .hljs-doctag,\
        .awsui.code-light #main-content .hljs-formula, .awsui.code-light #main-content .hljs-keyword, \
        .awsui.code-light #main-content .hljs-name, .awsui.code-light #main-content .hljs-section, \
        .awsui.code-light #main-content .hljs-selector-tag, .awsui.code-light #main-content .hljs-subst { \
            color: #b36449; \
        } \
        .awsui.code-light #main-content pre div.code-btn-container { \
            background: linear-gradient(90deg,rgba(0,28,36,.15) 0,#15181F 50%); !important; \
        } \
        #main-content .table-container .table-contents table td { \
            background-color: #15181F; color: #c9d1d2; !important; \
        } \
        .awsui #main-content .awsui-util-container .awsui-util-container-header { \
            background-color: #15181F; color: #b5bbc3; !important; \
        } \
        .awsui .awsui-tabs-variant-container.awsui-util-container .awsui-tabs-content { \
            background-color: black; color: #c9d1d2; !important; \
        } \
        .awsui .awsui-tabs-tab-link { \
            color: #d8d8d8; !important; \
        } \
        .awsui a { \
            color: #44B9D6; !important; \
        } \
        #main-content .table-container .table-contents table th { \
            background-color: black; color: #c9d1d2; !important; \
        } \
        .awsui .awsui-side-navigation__link, .awsui .awsui-util-font-size-0, #main-content #awsdocs-page-utility-container #awsdocs-doc-page-footer .footer-column-left .privacy-link a, #main-content #awsdocs-page-utility-container #awsdocs-doc-page-footer .footer-column-left .terms-link a { \
            color: #c9d1d2; !important; \
        } \
        .awsui .awsui-side-navigation__link--active { \
            color: #ec7211; !important; \
        } \
        #main-content .awsdocs-note .awsdocs-note-title span { \
            color: #d13212; !important; \
        }'

    addGlobalStyle(cssDark);

})();
