var h=Object.create;var f=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty;var m=(a,b,c)=>b in a?f(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c;var q=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+a+'" is not supported')});var r=(a,b)=>()=>(a&&(b=a(a=0)),b);var s=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),t=(a,b)=>{for(var c in b)f(a,c,{get:b[c],enumerable:!0})},n=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of j(b))!l.call(a,e)&&e!==c&&f(a,e,{get:()=>b[e],enumerable:!(d=i(b,e))||d.enumerable});return a};var u=(a,b,c)=>(c=a!=null?h(k(a)):{},n(b||!a||!a.__esModule?f(c,"default",{value:a,enumerable:!0}):c,a));var v=(a,b,c)=>(m(a,typeof b!="symbol"?b+"":b,c),c),g=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};var o=(a,b,c)=>(g(a,b,"read from private field"),c?c.call(a):b.get(a)),w=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},p=(a,b,c,d)=>(g(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),x=(a,b,c,d)=>({set _(e){p(a,b,e,c)},get _(){return o(a,b,d)}}),y=(a,b,c)=>(g(a,b,"access private method"),c);export{q as a,r as b,s as c,t as d,u as e,v as f,o as g,w as h,p as i,x as j,y as k};
//# sourceMappingURL=https://app.framerstatic.com/chunk-BQNQQCEJ.mjs.map
