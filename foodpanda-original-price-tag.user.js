// ==UserScript==
// @name        Foodpanda original price tag
// @namespace   https://github.com/gslin/foodpanda-original-price-tag
// @match       https://www.foodpanda.com.tw/*
// @grant       none
// @version     0.20210121.0
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Highlight original price tag for Foodpanda.
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    let style = 'background: yellow;';

    let ob = new window.MutationObserver(events => {
        events.forEach(ev => {
            ev.addedNodes.forEach(node => {
                node.querySelectorAll('li.vendor-characteristic > span').forEach(el => {
                    if (el.innerText == '<店內價>') {
                        el.closest('figcaption').setAttribute('style', style);
                    }
                });
            });
        });
    });

    ob.observe(document, {
        childList: true,
        subtree: true,
    });
})();
