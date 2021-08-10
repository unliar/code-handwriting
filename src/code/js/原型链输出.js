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
