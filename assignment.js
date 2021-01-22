function hotelCost(spentDays){
    var hotelCost = 0;
if(spentDays <= 10){
    hotelCost = spentDays * 100;
} 

else if(spentDays <=20){
    var first10Day = 10 * 100;
    var remaining = spentDays - 10;
    var second10Days = remaining * 80;
    hotelCost =  first10Day + second10Days;

}
else{
    var first10Day = 10 * 100;
    var second10Days = 10 * 80;
    var remaining = spentDays - 20;
    var additiionalDays = remaining * 50 ;
    hotelCost = first10Day + second10Days + additiionalDays;
}
return hotelCost;
}
// var totalcost = hotelCost(24);
// console.log(totalcost);


function kilometerToMeter(oneKm){
    var meter = oneKm* 1000;
    return meter;
}
// var resultMeter = kilometerToMeter(5);
// console.log(resultMeter);



