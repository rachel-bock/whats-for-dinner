// ~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~
var letsCookButton = document.querySelector('.cook-btn');
var mealChoice = document.querySelector('.meal-choice');
var cookPotImage = document.querySelector('.pot');
var mealCourses = document.getElementsByName('meal-courses');

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
    'Soft Pretzels',
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
    var index = getRandomIndex(dishArray);   
    return dishArray[index];
}

// function - select random index for side, main dish, or dessert
function getRandomIndex(dishArray) {
    return Math.floor(Math.random() * dishArray.length);
}

function getUserOption() {
    // When the "Let's cook!" button is clicked, this 
    // gets the user's option from the radio button inputs.
    // If entire meal, run render meal instead of render().

    for (var i = 0; i < mealCourses.length; i++) {
        if (mealCourses[i].checked) {
            prepShouldCook(mealCourses[i].value);
        }
    }
}

// function - change class hidden on pot.
function hideCookPot() {
    cookPotImage.classList.add('hidden');
}

// function - prepare data model for rendering.
function prepShouldCook(dishType) {

    hideCookPot();

    switch (dishType) {
        case 'sides':
            render(getDish(sides));
            break;
        case 'mains':        
            render(getDish(mains));
            break;
        case 'desserts':
            render(getDish(desserts));
            break;
        case 'meal':
            renderMeal(getDish(sides), getDish(mains), getDish(desserts));
            break;
        default: 
            console.log(`Sorry.  DishType is unknown.`);
    }
}

// function - render results.
function render(shouldCook) {   
    mealChoice.innerHTML = `You should make: <br>${shouldCook}!`;
}

// function - renderMeal with 3 parameters.
function renderMeal(side, main, dessert) {
    mealChoice.innerHTML = `You should make: <br> ${main} with a side of ${side} and ${dessert} for dessert!`
}