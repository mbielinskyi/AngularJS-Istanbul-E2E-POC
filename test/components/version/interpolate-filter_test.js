"use strict";
var __cov_mrg3vnriy9WhFr$UP3bMAg = (Function('return this'))();
if (!__cov_mrg3vnriy9WhFr$UP3bMAg.$$coverage$$) { __cov_mrg3vnriy9WhFr$UP3bMAg.$$coverage$$ = {}; }
__cov_mrg3vnriy9WhFr$UP3bMAg = __cov_mrg3vnriy9WhFr$UP3bMAg.$$coverage$$;
if (!(__cov_mrg3vnriy9WhFr$UP3bMAg['c:\\Users\\mbiel\\Desktop\\WORKSPACE\\FIXED_ISTANBUL\\app\\components\\version\\interpolate-filter_test.js'])) {
   __cov_mrg3vnriy9WhFr$UP3bMAg['c:\\Users\\mbiel\\Desktop\\WORKSPACE\\FIXED_ISTANBUL\\app\\components\\version\\interpolate-filter_test.js'] = {"path":"c:\\Users\\mbiel\\Desktop\\WORKSPACE\\FIXED_ISTANBUL\\app\\components\\version\\interpolate-filter_test.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":44}}},"2":{"name":"(anonymous_2)","line":6,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":44}}},"3":{"name":"(anonymous_3)","line":7,"loc":{"start":{"line":7,"column":22},"end":{"line":7,"column":41}}},"4":{"name":"(anonymous_4)","line":11,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":68}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":15,"column":3}},"2":{"start":{"line":4,"column":2},"end":{"line":4,"column":38}},"3":{"start":{"line":6,"column":2},"end":{"line":14,"column":5}},"4":{"start":{"line":7,"column":4},"end":{"line":9,"column":8}},"5":{"start":{"line":8,"column":6},"end":{"line":8,"column":44}},"6":{"start":{"line":11,"column":4},"end":{"line":13,"column":8}},"7":{"start":{"line":12,"column":6},"end":{"line":12,"column":91}}},"branchMap":{}};
}
__cov_mrg3vnriy9WhFr$UP3bMAg = __cov_mrg3vnriy9WhFr$UP3bMAg['c:\\Users\\mbiel\\Desktop\\WORKSPACE\\FIXED_ISTANBUL\\app\\components\\version\\interpolate-filter_test.js'];
__cov_mrg3vnriy9WhFr$UP3bMAg.s['1']++;describe('myApp.version module',function(){__cov_mrg3vnriy9WhFr$UP3bMAg.f['1']++;__cov_mrg3vnriy9WhFr$UP3bMAg.s['2']++;beforeEach(module('myApp.version'));__cov_mrg3vnriy9WhFr$UP3bMAg.s['3']++;describe('interpolate filter',function(){__cov_mrg3vnriy9WhFr$UP3bMAg.f['2']++;__cov_mrg3vnriy9WhFr$UP3bMAg.s['4']++;beforeEach(module(function($provide){__cov_mrg3vnriy9WhFr$UP3bMAg.f['3']++;__cov_mrg3vnriy9WhFr$UP3bMAg.s['5']++;$provide.value('version','TEST_VER');}));__cov_mrg3vnriy9WhFr$UP3bMAg.s['6']++;it('should replace VERSION',inject(function(interpolateFilter){__cov_mrg3vnriy9WhFr$UP3bMAg.f['4']++;__cov_mrg3vnriy9WhFr$UP3bMAg.s['7']++;expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');}));});});
