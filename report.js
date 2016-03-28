'use strict';

var istanbul = require('istanbul'),
    collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter(),
    json = require("./coverage/coverage.json"),
    sync = false;

collector.add(json);

reporter.add('text');
reporter.addAll([ 'lcov', 'clover', 'html' ]);
reporter.write(collector, sync, function () {
    console.log('All reports generated');
});