// Create a shopping list array
let shoppingList = ["Milk", "Eggs", "Bread"];
console.log("Initial shopping list:", shoppingList);

// Add two items to the shopping list and output the updated list
shoppingList.push("Butter", "Cheese");
console.log("Updated shopping list:", shoppingList);

// Delete the last item from the shopping list and output the result
let removedItem = shoppingList.pop();
console.log(`Removed item: ${removedItem}`);
console.log("Shopping list after removal:", shoppingList);

// Create a funtion, when there are more than 5 items in the shopping list, print "Your shopping cart is full"
function checkCartFull(list) {
    if (list.length > 5) {
        console.log("Your shopping cart is full");
    } else {
        console.log(`There is still space in your shopping cart, there are currently ${list.length} items.`);
    }
}

checkCartFull(shoppingList);
shoppingList.push("Apples", "Bananas", "Oranges");
console.log("Final shopping list:", shoppingList);
checkCartFull(shoppingList);

// Use a loop statement to iterate through the shopping list, outputting each item as a number on the console
console.log("Items in your shopping cart:");
for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i+1}. ${shoppingList[i]}`);
}

// use ForEach to iterate through the shopping list
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// Create a function that takes an item as an argument and returns whether the item is in the shopping list
function isItemInList(item, list) {
    return list.includes(item) // includes() function checks if an item is in the array
}
console.log("Is 'Milk' in the list?", isItemInList("Milk", shoppingList));
console.log("Is 'Chocolate' in the list?", isItemInList("Chocolate", shoppingList));

// Create a shopping item object, including item name, price and quantity
let shoppingItem = {
    name: "Milk",
    price: 12,
    quantity: 1
}
console.log("Shopping item:", shoppingItem);