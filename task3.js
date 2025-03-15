//Задание 3.

//Написать функцию, которая создает пустой объект, но без прототипа.

function createObj(){
    newObj = {};
    return newObj;
  };
  
  obj = createObj()
  console.log(obj);
  
  //obj.property1 = 'hi';
  //console.log(obj);
  