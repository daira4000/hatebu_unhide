// ==UserScript==
// @name         非表示のブコメをうっすら見せるやつ
// @namespace    https://github.com/daira4000/hatebu_unhide
// @version      0.1
// @description  チェックボックスで非表示にしているユーザーの表示を切り替えます
// @author       daira
// @match        https://b.hatena.ne.jp/entry/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hatena.ne.jp
// ==/UserScript==

(function () {
    'use strict';

    const tab = document.querySelector('ul.entry-comment-tab');
    if (tab == null) return;
    const label = document.createElement('label');
    label.innerText = '切り替え';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    label.appendChild(checkbox);
    tab.appendChild(label);
    checkbox.addEventListener('change', (event) => {
        const target = event.target;
        const elements = document.querySelectorAll(".entry-comment-contents.js-ignorable-user-content");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const style = window.getComputedStyle(element, null);
            if (style.display == 'none' && element.classList.contains('hidden_user') == false) {
                element.classList.add('hidden_user');
            }
        }
        if (target.checked) {
            document.querySelectorAll('.hidden_user').forEach((element) => {
                element.style.display = 'block';
                element.style.color = 'lightgray';
            });
        } else {
            document.querySelectorAll('.hidden_user').forEach((element) => {
                element.style.display = 'none';
            });
        }
    });
})();
