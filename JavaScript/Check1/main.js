let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓

for (let i = 0; i < numbers.length; i++) {

    if(numbers[i] % 2 === 0){

    const num = numbers[i];

    console.log(numbers.some(isEven));


function isEven() {
    
    console.log(num + 'は偶数です');

    }
    }
}


class Car {
constructor(gasorin, number){
    this.gasorin = gasorin;
    this.number = number; 
}
getNumGas(){
    console.log(`ガソリンは${this.gasorin}です。ナンバーは${this.number}です`);
}
}
let car = new Car('○○','△△');
car.getNumGas();