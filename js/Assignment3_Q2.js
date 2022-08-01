// -------------------------- assignment 3 - Q1------------------------

// object
orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };

//------------------a----------------

// creating array of values
var orders = Object.values(orderData)

// intializing sum
var sum = 0;

// iterating through array and adding to sum
orders.forEach(element => {
    sum = sum + element;
});
    
// printing sum
console.log("Total number of orders placed = "+sum);

//----------------- b ---------------

// creating array of keys
var orderPropotions = Object.keys(orderData);

// intializing count
var count =0;

// iterating through array and incrementing count
orderPropotions.forEach(proporion=>{

    count = count + 1;

});

// printing count
console.log("Total number of order proportions = "+count)


//------------------c --------------

// i is used for id
var i=0

// initializing an array
objectArray=[]

// iterating through object using for-in
for(var key in orderData){

    // creating an object
    p={

    }
    // defining object properties
    p.id = i+1;
    p.order = `${key}`;
    p.oderPercentage = ((`${orderData[key]}` / sum )*100).toPrecision(4);
    p.restaurant = "Punjabi Tadka"

    // adding to array
    objectArray[i] = p;

    // incrementing object
    i++;
    
}

// printing array of objects
console.log(objectArray);