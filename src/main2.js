(function (modules) {
    let installedChunks;
    function webpackJsonpCallback(data) {
        let [chunkIds, moreModules] = data;
        let resolves = [];
        // 加载额外代码块
        for (let i = 0; i < chunkIds.length; i++) {
            let chunkId = chunkIds[i];
            let installedChunkData = installedChunks[chunkId];
            let resolve = installedChunkData[0];
            resolves.push(resolve);
            installedChunks[chunkId] = 0;
        }
        // 将异步加载过来的额外代码块加载完成，合并额外代码块到modules
        for (moduleId in moreModules) {
            installedChunks[moduleId] = moreModules[moduleId];
        }

        resolves.forEach(resolve);
    }
    function require(moduleId) {
        let module = {
            i: moduleId,
            exports: {}
        };
        modules[moduleId](module, module.exports, require);
        return module.exports;
    };
    require.e = function (chunkId) {
        let installedChunkData;
        let promise = new Promise((resolve, reject) => {
            installedChunkData = [resolve, reject];
        });
        installedChunkData.push(promise);
        installedChunks[chunkId] = installedChunkData;
        let script = document.createElement('script');
        script.src = chunkId + '.js';
        document.head.append(script);
        return promise;
    }

    require.t = function (value, mode) {
        if (mode & 1) {
            value = require(value);
        }
        if (mode & 8) {
            return value;
        }

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) {
            return value;
        }
        // 下面的逻辑是把commonjs或者es6模块都转为es6模块
        let ns = Object.create(null);
        ns.__esModule = true;
        ns.default = value;
        // 将ns上的属性合并到ns对象上
        for(let key in value) {
            ns[key] = value[key];
        }

        if (mode & 2) {

        }

        return ns;
    }

    window['webpackJsonp'] = [];
    let jsonArray = window['webpackJsonp'];

    jsonArray.push = webpackJsonpCallback;
    return require('./src/index.js');
})({
    './src/index.js': function (module, exports, require) {
        let importBtn = document.getElementById('import');
        importBtn.addEventListener('click', () => {
            require
                .e('title')
                .then(require.t('./src/title.js'))
                .then((result) => {
                    console.log(result);
                })
        })
    }
})