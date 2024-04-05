let weight = parseInt(prompt("Enter the weight in kg :"))
let destination = prompt("Enter the destination domestic or international:")
function shippingcost(weight,destination){
let cost
let additionalcost
if (destination=="domestic"){
    cost = 5;
    additionalcost = 2;
//     totalcost = cost + additionalcost;
}
else if(destination=="international"){
    cost = 10;
    additionalcost = 5;
}
else{

    return invalid
}
let totalcost = cost+(weight-1)*additionalcost
return totalcost;
}
let Totalshippingcost = shippingcost(weight,destination);
console.log("shipping cost:$"+Totalshippingcost);

