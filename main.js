// ~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~
var letsCookButton = document.querySelector('.cook-btn');
var mealChoice = document.querySelector('.meal-choice');
var cookPotImage = document.querySelector('.pot');

// ~~~~~~~~~~~ Variables ~~~~~~~~~~~~~~~~~~
var desserts = [
    'Iced Oatmeal Cookies',
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
]

var mains = [
    'Chicken Vindaloo',
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
]

var sides = [
    'Soft Pretzels'
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
]

// ~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~~~~
letsCookButton.addEventListener('click', getUserOption);


// ~~~~~~~~~~ Functions in Alphabetic order ~~~~~~~~~~~~~

// function - pull random meal item from array into render.
function getDish(dishArray) {
    return dishArray[getRandomIndex(dishArray)];
}


// function - select random index for side, main dish, or dessert
function getRandomIndex(dishArray) {
    return Math.floor(Math.random * dishArray.length);
}


function getUserOption() {
    // When the "Let's cook!" button is clicked, this 
    // gets the user's option from the radio button inputs.
    // If entire meal, run render meal instead of render().

    

}


// function - change class hidden on pot.
function hideCookPot() {
    cookPotImage.classList.toggle('hidden');
}

// function - prepare data model for rendering.
function prepShouldCook(dishType) {

    hideCookPot();

    switch (dishType) {
        case 'side':
            render(getDish(sides));
            break;
        case 'main':        
            render(getDish(mains));
            break;
        case 'dessert':
            render(getDish(desserts));
            break;
        case 'meal':
            console.log('Call getDish for all three and then call the meal render function');
            render(getDish(sides), getDish(mains), getDish(desserts));
            break;
        default: 
            console.log(`Sorry.  DishType is unknown.`);
    }
}

// function - render results.
function render(shouldCook) {   
    mealChoice.innerHtML = `You should make: 
        <h3> ${shouldCook}!</h3>`
}

// function - renderMeal with 3 parameters.
function renderMeal(side, main, dessert) {
    mealChoice.innerHtML = `You should make: 
    <h3> ${main} with a side of ${side} and ${dessert} for dessert!</h3>`
}
