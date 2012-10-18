/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint asi: true undef: true es5: true node: true browser: true devel: true
         forin: true latedef: false globalstrict: true*/

"use strict";

var score = require("../match-score")

exports["test score"] = function(assert) {
  assert.equal(score(/foo/, "foo"), 1, "absolute match")
  assert.equal(score(/foo/, "fobar"), null, "no match")
  assert.equal(score(/foo/, "foo bar"), 0.9136634176769942, "head match")
  assert.equal(score(/foo/, "bar foo"), 0.6565205605341371, "tail match")
  assert.equal(score(/foo/, "b foo r"), 0.7850919891055657, "body match")
}

require("test").run(exports)
