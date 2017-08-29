// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  out.w("<div class=\"app_hello\">Hello " +
    marko_escapeXml(data.name) +
    "! You have " +
    marko_escapeXml(data.messageCount) +
    " message(s).</div>");
}

marko_template._ = render;

marko_template.meta = {};
