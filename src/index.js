// const title = require('./title');
// const commonModule = { name: 'zhufeng' };
// const getter = require.name(commonModule);
// console.log(getter.a);

// const esModule = { __esModule: true, default: { name: 'zhufeng' } };
// const getter2 = require.n(esModule);
// console.log(getter2.a);

// import title, { age } from './title.js';
// console.log(title, age);

const importBtn = document.getElementById('import');
importBtn.addEventListener('click', () => {
    import(/* webpackChunkName: 'title' */'./title').then((result) => {
        console.log(result, 'result');;
    })
})