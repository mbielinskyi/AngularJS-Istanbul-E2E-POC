"use strict";
var __cov_aie_GNoNsqTETEQ2oXbFHw = (Function('return this'))();
if (!__cov_aie_GNoNsqTETEQ2oXbFHw.$$coverage$$) { __cov_aie_GNoNsqTETEQ2oXbFHw.$$coverage$$ = {}; }
__cov_aie_GNoNsqTETEQ2oXbFHw = __cov_aie_GNoNsqTETEQ2oXbFHw.$$coverage$$;
if (!(__cov_aie_GNoNsqTETEQ2oXbFHw['c:\\Users\\mbiel\\Desktop\\WORKSPACE\\angular-seed\\angular-seed\\app\\components\\version\\version-directive_test.js'])) {
   __cov_aie_GNoNsqTETEQ2oXbFHw['c:\\Users\\mbiel\\Desktop\\WORKSPACE\\angular-seed\\angular-seed\\app\\components\\version\\version-directive_test.js'] = {"path":"c:\\Users\\mbiel\\Desktop\\WORKSPACE\\angular-seed\\angular-seed\\app\\components\\version\\version-directive_test.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":44}}},"2":{"name":"(anonymous_2)","line":6,"loc":{"start":{"line":6,"column":36},"end":{"line":6,"column":47}}},"3":{"name":"(anonymous_3)","line":7,"loc":{"start":{"line":7,"column":39},"end":{"line":7,"column":50}}},"4":{"name":"(anonymous_4)","line":8,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":32}}},"5":{"name":"(anonymous_5)","line":11,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":44}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":17,"column":3}},"2":{"start":{"line":4,"column":2},"end":{"line":4,"column":38}},"3":{"start":{"line":6,"column":2},"end":{"line":16,"column":5}},"4":{"start":{"line":7,"column":4},"end":{"line":15,"column":7}},"5":{"start":{"line":8,"column":6},"end":{"line":10,"column":9}},"6":{"start":{"line":9,"column":8},"end":{"line":9,"column":46}},"7":{"start":{"line":11,"column":6},"end":{"line":14,"column":9}},"8":{"start":{"line":12,"column":8},"end":{"line":12,"column":72}},"9":{"start":{"line":13,"column":8},"end":{"line":13,"column":51}}},"branchMap":{}};
}
__cov_aie_GNoNsqTETEQ2oXbFHw = __cov_aie_GNoNsqTETEQ2oXbFHw['c:\\Users\\mbiel\\Desktop\\WORKSPACE\\angular-seed\\angular-seed\\app\\components\\version\\version-directive_test.js'];
__cov_aie_GNoNsqTETEQ2oXbFHw.s['1']++;describe('myApp.version module',function(){__cov_aie_GNoNsqTETEQ2oXbFHw.f['1']++;__cov_aie_GNoNsqTETEQ2oXbFHw.s['2']++;beforeEach(module('myApp.version'));__cov_aie_GNoNsqTETEQ2oXbFHw.s['3']++;describe('app-version directive',function(){__cov_aie_GNoNsqTETEQ2oXbFHw.f['2']++;__cov_aie_GNoNsqTETEQ2oXbFHw.s['4']++;it('should print current version',function(){__cov_aie_GNoNsqTETEQ2oXbFHw.f['3']++;__cov_aie_GNoNsqTETEQ2oXbFHw.s['5']++;module(function($provide){__cov_aie_GNoNsqTETEQ2oXbFHw.f['4']++;__cov_aie_GNoNsqTETEQ2oXbFHw.s['6']++;$provide.value('version','TEST_VER');});__cov_aie_GNoNsqTETEQ2oXbFHw.s['7']++;inject(function($compile,$rootScope){__cov_aie_GNoNsqTETEQ2oXbFHw.f['5']++;__cov_aie_GNoNsqTETEQ2oXbFHw.s['8']++;var element=$compile('<span app-version></span>')($rootScope);__cov_aie_GNoNsqTETEQ2oXbFHw.s['9']++;expect(element.text()).toEqual('TEST_VER');});});});});
