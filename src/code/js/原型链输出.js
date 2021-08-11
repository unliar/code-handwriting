function Foo() {
  getName = function() {
    alert(1);
  };
  return this;
}

Foo.getName = function() {
  alert(2);
};

Foo.prototype.getName = function() {
  alert(3);
};

var getName = function() {
  alert(4);
};

function getName() {
  alert(5);
}
// 从实例上找 输出2
Foo.getName();

// 函数声明会提升到顶部,所以输出的是 4
getName();

// 从原型上查询 输出3

Foo().getName();

// Foo() 里覆盖了原型上的方法,所以输出的是 1
getName();

// 还是输出2
new Foo.getName();

// 输出3
new Foo().getName();

// 还是输出3
new new Foo().getName();

// 第二题
var name = 1;
var obj = {
  name: "2",
  subOb: {
    name: 3,
    getName() {
      return this.name;
    },
  },
};

// 输出3
console.log(obj.subOb.getName());

// 输出2 因为最后调用的是 window.name
var test = obj.subOb.getName;
console.log(test());

// 如何输出2 使用bind 修改上下文绑定
var getname = obj.subOb.getName.bind(obj);

console.log(getname());
Array.prototype.valueOf = function() {
  return [];
};
const arrayList = ["a", "b", "c", "d", "e", "f"];

changeArr(arrayList);

// 输出正常
console.log(arrayList);

function changeArr(arr) {
  arr = [];
  // 想要 arrayList 输出空 需要这样做
  while (arrayList.length) {
    arrayList.pop();
  }
}
