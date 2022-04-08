// ~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~
var letsCookButton = document.querySelector('.cook-btn');
var mealChoice = document.querySelector('.meal-choice');
var cookPotImage = document.querySelector('.pot');

// ~~~~~~~~~~~ Variables ~~~~~~~~~~~~~~~~~~
var desserts = [
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

// var shouldCook = '';

var sides = [
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

// function - select random index for side, main dish, or dessert



function getUserOption() {
    // When the "Let's cook!" button is clicked, this 
    // gets the user's option from the radio button inputs.
    // If entire meal, run render meal instead of render().
}



// function - pull random meal item from array into render.

// function - prepare data model shouldCook for rendering.



// function - change class hidden on pot.
function hideCookPot() {
    cookPotImage.classList.toggle('hidden');
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
