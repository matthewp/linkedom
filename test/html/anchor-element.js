const assert = require('../assert.js').for('HTMLButtonElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<a href="https://google.com/?q=1&page=2">click me</a>');

const {lastElementChild: a} = document;

assert(a.toString(), '<a href="https://google.com/?q=1&page=2">click me</a>');
a.setAttribute('href', 'https://google.com/?q=1&page=2&test="');
assert(a.toString(), '<a href="https://google.com/?q=1&page=2&test=&quot;">click me</a>');
a.setAttribute('href', 'https://google.com/?q=asd&lol=<2>"');
assert(a.href, 'https://google.com/?q=asd&lol=%3C2%3E%22');

