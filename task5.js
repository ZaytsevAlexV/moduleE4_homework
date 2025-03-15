// Задание 5 
// Переписать консольное приложение из предыдущего юнита на классы.

//класс
class Equipment {
    constructor(){
      this.masterType = "Электро оборудование";
    };
    
    getOnOff = function(io){ // общее метод родительского класса
     if (io == 1){
       return 'On';
     } 
      else {
        return 'Off';
    };
  };
  };
  
  // Подкласс 
  class Lamp extends Equipment {
    constructor(name,color){
      super(); //интересная особенность, уноследование свойств
      this.type = 'Лампы';
      this.name = name;
      this.color = color; 
    }
    
    getConsumptionToMonth = function(val){ //Собственный метод подкласса
    console.log(`Потребляемое кол-во энергии за месяц = ${val*28}`);
     }
  };
  
  
  // Подкласс 2
  
  class Computer extends Equipment {
    constructor(name,qntCPU){
      super();
      this.type = "Компьютеры";
      this.name = name;
      this.CPU = qntCPU;
     };
    
    getPerformanceCPU = function(val){ //Собственный метод подкласса
      console.log(`Производительность при параллельной обработке на CPU = ${val / this.CPU}`)
    };
  };
  
  // Экземпляры подклассов
  
  const Lamp_1 = new Lamp("Лампа 1","Белая");
  const PC_1 = new Computer("NoteBook", 4);
  
  
  //вызов наследованного метода родительского класса
  console.log(Lamp_1.getOnOff(0));
  console.log(PC_1.getOnOff(1));
  
  //вызов самих объектов
  console.log(Lamp_1);
  console.log('==================================');
  console.log(PC_1);
  
  //вызов методов подкласса у объектов
  Lamp_1.getConsumptionToMonth(15);
  
  PC_1.getPerformanceCPU(12);