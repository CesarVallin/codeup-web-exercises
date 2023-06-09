// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:


const users = [

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'cindy123',
        password: 'hello123',
        email: 'cindy123@email.com',
        isAdmin: false
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    },
    {
        username: 'kyle123',
        password: 'letmein',
        email: 'kyle123@email.com',
        isAdmin: false
    }
]


/*

returnAdmins(users) returns...

[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/

console.log(`with filter() ==========================================================`);
const returnAdmins = (users) => {
    const adminOnly = users.filter(user => {
        if (user.isAdmin === true) {
            return user;
        }
    });
    return adminOnly
};
console.log(returnAdmins(users));

console.log(`with for loop ==========================================================`);

const returnAdmins1 = (users) => {
    let adminOnly = [];
    for (let i = 0; i < users.length; i++) {
        // console.log(i, users[i]);
        if (users[i].isAdmin === true) {
            adminOnly.push(users[i]);
        }
    }
    return adminOnly;
};
console.log(returnAdmins1(users));

console.log(`with for..of loop ==========================================================`);

const returnAdmins2 = (users) => {
    let adminOnly = [];
    for (const user of users) {
        // console.log(user);
        if (user.isAdmin === true) {
            adminOnly.push(user);
        }
    }
    return adminOnly;
};
console.log(returnAdmins2(users));

