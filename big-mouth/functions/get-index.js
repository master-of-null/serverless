'use strict';
const Promise = require('bluebird');
const co = require('co');
const fs = Promise.promisifyAll(require('fs'));

let html;

function* loadHtml() {
  if (!html) { 
    html = yield fs.readFileAsync('static/index.html', 'utf-8');
  }

  return html;
}


module.exports.handler = co.wrap(function* (event, context) {
  let html = yield loadHtml();
  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  };

  callback(null, response);
});
