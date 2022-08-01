// assignment 3 - Q1

// class 
class restaurantManager{

    // constructor
    constructor(restaurantsArr){

        this.restaurantList = restaurantsArr;

    }

    // method
    printAllRestuarants=()=>{

        console.log(this.restaurantList.map(restaurant =>restaurant.name))
    }

    // method
    filterRestaurantByCity = (city) => {

        return restaurants = this.restaurantList.filter( restaurant=> restaurant.city ===city);

    }
}

// sample array of objects
restaurants= [
    {name:"TASTE IN",address:"address1",city:"Chennai"},
    {name:"Grill & Chill",address:"address2",city:"Banglore"},
    {name:"Kit-kat",address:"address3",city:"Banglore"}
]

// creating new object
var rM = new restaurantManager(restaurants);

// function call
rM.printAllRestuarants();

// function call
console.log(rM.filterRestaurantByCity("Banglore"))