
## webpack自己实现了require方法

## require.m 
    把modules对象赋给require.m属性

## require.c
    把模块的缓存对象放在require.c属性上

## require.d
    为了兼容导出定义getter函数
    使用require.o判断对象是否包含某个属性，如果不包含，给对象添加属性。

## 方法名为什么是一个字母？
    为了减少文件的大小

## require.o
    判断对象自身是否包含某个属性 

## require.r
    把一个exports对象声明为一个es模块

## require.n
    判断模块是commonjs模块还是es6模块，并且给模块的getter方法定义a属性， 属性值为getter方法.之所以在getter属性上再次定义a属性，属性值为getter是想通过get方法获取到getter方法。

## non-harmony
    指的是commonjsModule

## require.t
    动态import、懒加载时候用到。把任意模块转为es6模块。
    mode: 模式
    mode & 1 === true 说明value是一个模块id，require引入这个模块
    mode & 8|1 === true 说明value相当于一个require，直接返回value
    mode & 4 === true 说明如果已经是ns对象了则直接返回
    mode & 2 === true 如果不是ns对象，先创建一个ns对象。将value上的值拷贝到ns上

## require.t 判断的时候为什么使用二进制？
    1、为了性能，二进制操作是最快的 也是最节约内存的 二进制这种用法在权限、react中大量用到

## 为社么使用mode&1这种方式？
    因为这样可以减少写if else