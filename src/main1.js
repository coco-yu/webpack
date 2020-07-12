// 是一个自治执行方法
(function (modules) {
    // 声明require方法
    function require(moduleId) {
        // 创建一个module
        let module = {
            i: moduleId, // moduleId
            l: false, // 是否已经加载过 
            exports: {} // 导出对象
        };
        modules[moduleId].call(module.exports, module, module.exports, require); // 调用moduleId对应的方法
        module.l = true; // 加载完成
        return module.exports; // 导出export对象
    }
    return require('./src/index.js'); // 引入index入口文件

})({ // moduleId: 执行方法
    './src/index.js': function (module, exports, require) {
        var title = require('./src/title.js');
        console.log(title);
    },
    './src/title.js': function (module, exports) {
        module.exports = 'title';
    }
});