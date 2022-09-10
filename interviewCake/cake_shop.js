// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.
// -The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// -The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// -Each customer order (from either register) as it was finished by the kitchen. (servedOrders)

// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// -> identify what order it is - from which list -> the index shouldn't be bigger than the ones previously meet in that array 
     
const ordersChecker=(takeOutOrders, dineInOrders, servedOrders)=>{
    let takeOutOrdersIndex = 0;
    let dineInOrdersIndex = 0;
    console.log("hello")
    for(let i=0; i<servedOrders.length;i++){
        console.log("hello")
        if((takeOutOrdersIndex<takeOutOrders.length) && (servedOrders[i] === takeOutOrders[takeOutOrdersIndex])){
            takeOutOrdersIndex++
            console.log("takeOutOrders")
        } else if((dineInOrdersIndex<dineInOrders.length) && (servedOrders[i] === dineInOrders[dineInOrdersIndex])){
            dineInOrdersIndex++
            console.log("dineInOrders")
        } else {
            return false
        }

    }

    // check for any extra orders at the end of takeOutOrders or dineInOrders
    if (dineInOrdersIndex != dineInOrders.length ||
        takeOutOrdersIndex != takeOutOrders.length) {
     return false;
 }

    return true
};

console.log(ordersChecker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]))

// That should work. But are we missing any edge cases?

// What if there are extra orders in takeOutOrders or dineInOrders that don't appear in servedOrders? Would our kitchen be first-come, first-served then?

// Maybe.

// It's possible that our data doesn't include everything from the afternoon service. Maybe we stopped recording data before every order that went into the kitchen was served. It would be reasonable to say that our kitchen is still first-come, first-served, since we don't have any evidence otherwise.

// On the other hand, if our input is supposed to cover the entire service, then any orders that went into the kitchen but weren't served should be investigated. We don't want to accept people's money but not serve them!

// When in doubt, ask! This is a great question to talk through with your interviewer and shows that you're able to think through edge cases.

// Both options are reasonable. In this writeup, we'll enforce that every order that goes into the kitchen (appearing in takeOutOrders or dineInOrders) should come out of the kitchen (appearing in servedOrders). How can we check that?

// To check that we've served every order that was placed, we'll validate that when we finish iterating through servedOrders, we've exhausted takeOutOrders and dineInOrders.

