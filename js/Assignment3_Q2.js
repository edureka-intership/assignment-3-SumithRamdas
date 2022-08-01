orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };

var orders = Object.values(orderData)

var sum = 0;

orders.forEach(element => {
    sum = sum + element;
});
    

console.log("Total number of orders placed = "+sum);

var orderPropotions = Object.keys(orderData);

var count =0;

orderPropotions.forEach(proporion=>{

    count = count + 1;

});

console.log("Total number of order proportions = "+count)

var i=0
objectArray=[]
for(var key in orderData){

    p={

    }
    p.id = i+1;
    p.order = `${key}`;
    p.oderPercentage = ((`${orderData[key]}` / sum )*100).toPrecision(4);
    p.restaurant = "Punjabi Tadka"

    objectArray[i] = p;

    i++;
    
}

console.log(objectArray);