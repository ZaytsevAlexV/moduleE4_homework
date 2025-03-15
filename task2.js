//Задание 2.

//Написать функцию, которая принимает в качестве аргументов строку и объект,
//а затем проверяет есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.

function checkProperty(name, obj) {
  
    return name in obj;
  
  };
  
  const obj = {
    property1:'',
    property2:'',
  }
  
  const nameProperty = 'property1'
  //const nameProperty = 'property3'
  
  console.log(checkProperty(nameProperty, obj));
  