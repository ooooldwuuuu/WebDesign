// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    app_hello_tag = marko_loadTag(require("../../components/app_hello/renderer")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Marko Demo</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Marko Demo</h1><h2>" +
    marko_escapeXml(data.name) +
    "</h2>");

  if (data.colors.length) {
    out.w("<ul>");

    marko_forEach(data.colors, function(color) {
      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors</div>");
  }

  app_hello_tag({
      name: "Roal",
      messageCount: "30"
    }, out);

  app_hello_tag({
      messageCount: "1"
    }, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "../../components/app_hello/renderer",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
