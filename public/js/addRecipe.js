(function () {
    var module = angular.module('myApp');
    module.controller("recipeController", recipeController);

    function recipeController() {
        this.collection = [
            {
                category: "Supper",
                name: "Peanut Noodle Pasta Salad",
                description: "Peanuts are everything, and peanut noodles with carrots, bell peppers, cucumbers, and ginger are so yum."
            },
            {
                category: "Lunch",
                name: "Black Bean Burgers",
                description: "So healthy, so yummy—gotta have vegan burgers in your life."
            },
            {
                category: "Lunch",
                name: "Cucumber, Tomato, and Avocado Salad",
                description: "Any salad with a light dressing of olive oil, salt, and lemon is sure to be delicious, but add tomatoes, avocados, and cilantro to go #NextLevel with it."
            },
            {
                category: "Lunch",
                name: "Cheezy Vegan Spaghetti Squash with Broccoli and Garlic",
                description: "If you don’t like this cheezy goodness, you’re crazy."
            },
            {
                category: "Breakfast",
                name: "Fruit Sushi",
                description: "Tap into your artsy side by choosing fun fruit combinations like kiwi and strawberry or strawberry and banana."
            },
            {
                category: "Supper",
                name: "Easy Vegan Fettuccine Alfredo",
                description: "This dish seems decadent, but it’s actually healthy. Score!"
            },
        ];

        this.sortProperty = 'category';
        this.reverseSort = false;

    };

    recipeController.prototype.addEntry = function () {
        this.collection.push(this.newData);
        this.newData = '';
    }

    recipeController.prototype.sort = function (prop) {
        this.sortProperty = prop;
        this.reverseSort = !this.reverseSort;
    }

})();