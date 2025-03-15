
//Задание 1.

//Написать, функцию, которая принимает в качестве аргумента объект 
//и выводит в консоль все ключи и значения только собственных свойств.
//Данная функция не должна возвращать значение.

const obj1 = {
    property1: "obj1",
    property3: "obj1",
  };
  
  const obj2 = Object.create(obj1);
  
  obj2.property2 = "obj2";
  
  
  function getOwnObjProp(obj){
    for (let key in obj){
      if (obj.hasOwnProperty(key)) {
         console.log(key);
      };
    };
  };
  
  //тест:
  
  //getOwnObjProp(obj1);
  
  //getOwnObjProp(obj2);