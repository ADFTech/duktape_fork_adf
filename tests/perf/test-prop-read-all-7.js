if (typeof print !== 'function') { print = console.log; }

function test() {
    var obj = {};
    var i, count;

    for (i = 0; i < 7; i++) {
        obj['prop' + i] = 1;
    }
    if (typeof Duktape !== 'undefined') { Duktape.compact(obj); }

    for (count = 1e8; count > 0;) {
        void obj.prop0; void obj.prop1; void obj.prop2; void obj.prop3; void obj.prop4; void obj.prop5; void obj.prop6;
        void obj.prop0; void obj.prop1; void obj.prop2; void obj.prop3; void obj.prop4; void obj.prop5; void obj.prop6;
        void obj.prop0; void obj.prop1; void obj.prop2; void obj.prop3; void obj.prop4; void obj.prop5; void obj.prop6;
        count -= 21;
    }
}

try {
    test();
} catch (e) {
    print(e.stack || e);
    throw e;
}
