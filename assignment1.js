function sumAll(...numbers) {
    let totalSum = 0;
    for (const number of numbers) {
        totalSum += number;
    }
    return totalSum;
}

// Testing the sumAll function with different numbers of arguments
console.log(sumAll(1, 2, 3)); 
console.log(sumAll(10, 20, 30, 40)); 
console.log(sumAll(5));
console.log(sumAll()); 

function userInfo(pFirstName,pLastName,...pHobbies)
{
    let userDetails;

    userDetails = {fistname:pFirstName,lastname:pLastName,pHobbies};

    return userDetails;
}
console.log(userInfo('Dillip','Nayak','Studying','Cricket','Music'));
console.log(userInfo('mameeta','jena','Playing'));
console.log(userInfo('Vibvaansh','nayak','Pop','Dancing'));


