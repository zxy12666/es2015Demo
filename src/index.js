// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// console.log(blog.includes(jspang));


//二进制声明 Binary
// let binary=0B010101;
// console.log(binary);
// //八进制声明 Octal
// let octal=0o666;
// console.log(octal);


// let a=11/4;
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('jspang'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
//
// //NaN
// console.log(Number.isNaN(1));
//
// let a=99.1;
// console.log(Number.parseFloat(a));

//jsons数组格式
// let json={
//     '0':'zxy',
//     '1':'abc',
//     '2':'hahaha',
//     length:3
// };
// let arr=Array.from(json);
// console.log(arr)

// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

// //fill
// let arr=['abc','efg','dfs']
// arr.fill('替换',1,2);
// console.log(arr)

// let arr=['abc','efg','dfs'];
// for(let [index,val] of arr.entries()){
//     console.log(index+":"+val)
// }

// let list=arr.entries();
// console.log(list);

// function add(a,b=1) {
//     return a+b
// }
// console.log(add.length);//获取参数个数

// var add=(a,b=1)=>a+b;
// console.log(add(1));

//对象的函数结构json
// let json ={
//     a:'zhang',
//     b:'xiang'
// };
// function fun({b}) {
//     console.log(b)
// }
// fun(json);

//数组解构
// let arr=['zhang','xiang','yu'];
//
// function fun(a,b,c) {
//     console.log(a,b,c)
// }
// fun(...arr);

// let json ={
//     a:'zhang',
//     b:'xiang'
// };
//
// console.log('a' in json);

//key值的构建

// let key="skill";
// var obj={
//     [key]:'web'
// };
// console.log(obj)

//is()
// let obj1={name:'zxy'};
// let obj2={name:'zxy'};
// console.log(Object.is(obj1.name,obj2.name));

//assign
// let a={a:'a'};
// let b={b:'b'};
// let c={c:'c'};
// let d=Object.assign(a,b,c);
// console.log(d)

//Symbol
// let jspang=Symbol();
// let obj={
//   [jspang]:'zxy'
// };
// console.log(obj[jspang]);

//set
// let setArr=new Set(['zxy','abc','ccc']);
// setArr.add('haha');
// //has
// setArr.delete('haha')
// console.log(setArr);
//
// //WeakSet
// let weakObj=new WeakSet();
// let obj={
//     a:'1',
//     b:'2'
// };
// weakObj.add(obj);
// console.log(weakObj)

//map
// let obj={
//     a:'1',
//     b:'2'
// };
// var map=new Map();
// map.set(obj,'zxy');
// console.log(map);
//
// map.set('haha',obj);
// console.log(map);
// //map增删查
// //get
// console.log(map.get('haha'));
//
// let obj={
//     add:function (val) {
//         return val+100
//     },
//     name:'I m zhangxiangyu'
// };

// let handler={
//     get:function (target,key,property) {
//         console.log('get')
//         console.log(target);
//         return target
//     },
//     set:function (target,key,value,receiver) {
//         console.log(`setting${key}=${value}`)
//         return target[key]=value
//     },
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments)
//     }
// };
// let pro=new Proxy(obj,handler);
// pro.name='lalala';
// console.log(pro.name);

//class
// class Coder{
//     name(val){
//         console.log(val)
//         return val
//     };
//     skill(val){
//         console.log(this.name("ok")+val)
//     };
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     };
//     add(){
//         return this.a+this.b
//     }
// }
//
// class htmler extends  Coder{
//
// }
// let zhang=new htmler;
// console.log(zhang.name('zhang'))

import {a} from './temp.js';

console.log(a);