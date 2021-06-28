'use strict';

let hour=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',];




// there is an issue with one of the equations.

//--- Randomly Genertated Number Function For Customers per hour:

function randomCustomersNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//===================== First Objects 
let Seattle ={
 
    // Properties: 
    locationName:'Seattle',
    minCustomers: 23,
    maxcustomers:65,
    Avg:6.3,
    customers:[],
    soldAmount:[],


    // Methods:
    getCustomersNumber:function(){
       for (let i = 0; i < hour.length; i++) {
        this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
       }
    },

    getSoldCookiesNumber: function(){
        for (let i = 0; i < hour.length ; i++) {
            this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
           }
    }
    
}

// let Tokyo ={
 
//     // Properties: 
//     locationName:'Tokyo',
//     minCustomers:3,
//     maxcustomers:24,
//     Avg:1.2,
//     customers:[],
//     soldAmount:[],


//     // Methods:
//     getCustomersNumber:function(){
//        for (let i = 0; i < hour.length; i++) {
//         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
//        }
//     },

//     getSoldCookiesNumber: function(){
//         for (let i = 0; i < Tokyo.customers.length; i++) {
//             this.soldAmount.push(this.customers * this.Avg);
//            }
//     }
    
// }


// let Dubai ={
 
//     // Properties: 
//     locationName:'Dubai',
//     minCustomers:11,
//     maxcustomers:38,
//     Avg:3.7,
//     customers:[],
//     soldAmount:[],



//     // Methods:
//     getCustomersNumber:function(){
//        for (let i = 0; i < hour.length; i++) {
//         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
//        }
//     },

//     getSoldCookiesNumber: function(){
//         for (let i = 0; i < Dubai.customers.length; i++) {
//             this.soldAmount.push(this.customers * this.Avg);
//            }
//     }
    
// }
// let Paris ={
 
//     // Properties: 
//     locationName:'Paris',
//     minCustomers:20,
//     maxcustomers:38,
//     Avg:2.3,
//     customers:[],
//     soldAmount:[],

//     // Methods:
//     getCustomersNumber:function(){
//        for (let i = 0; i < hour.length; i++) {
//         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
//        }
//     },

//     getSoldCookiesNumber: function(){
//         for (let i = 0; i < Paris.customers.length; i++) {
//             this.soldAmount.push(this.customers * this.Avg);
//            }
//     }
    
// }

// let Lima ={
 
//     // Properties: 
//     locationName:'Lima',
//     minCustomers:2,
//     maxcustomers:16,
//     Avg:4.6,
//     customers:[],
//     soldAmount:[],


//     // Methods:
//     getCustomersNumber:function(){
//        for (let i = 0; i < hour.length; i++) {
//         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
//        }
//     },

//     getSoldCookiesNumber: function(){
//         for (let i = 0; i < Tokyo.customers.length; i++) {
//             this.soldAmount.push(this.customers * this.Avg);
//            }
//     }
    
// }


Seattle.getCustomersNumber();
Seattle.getCustomersNumber();
console.log(Seattle.customers);
console.log(Seattle.soldAmount);

let parent = document.getElementById('salesList');
console.log(parent);

let header1 = document.createElement('h2');
parent.appendChild(header1);
header1.textContent = Seattle.locationName;

let unOrderedList1 = document.createElement('ul');
parent.appendChild(unOrderedList1);

for (let i = 0; i < hour.length ; i++) {
    let listItem1 = document.createElement('li');
    unOrderedList1.appendChild(listItem1);
    listItem1.textContent = hour[i]+ ' '+ Seattle.soldAmount[i];
}




// let parent2 = document.getElementById('salesList2');
// console.log(parent2);

// let header2 = document.createElement('h2');
// parent.appendChild(header2);
// header2.textContent = Tokyo.locationName;

// let unOrderedList2 = document.createElement('ul');
// parent.appendChild(unOrderedList2);
// for (let i = 0; i < hour.length ; i++) {
//     let listItem2 = document.createElement('li');
//     unOrderedList2.appendChild(listItem2);
//     listItem2.textContent = hour[i]+ ' '+ Tokyo.soldAmount[i]
// }


// let parent3 = document.getElementById('salesList3');
// console.log(parent3);

// let header3 = document.createElement('h2');
// parent.appendChild(header3);
// header3.textContent = Dubai.locationName;

// let unOrderedList3 = document.createElement('ul');
// parent.appendChild(unOrderedList3);
// for (let i = 0; i < hour.length ; i++) {
//     let listItem3 = document.createElement('li');
//     unOrderedList3.appendChild(listItem3);
//     listItem3.textContent = hour[i]+ ' '+ Dubai.soldAmount[i]
// }


// let parent4 = document.getElementById('salesList4');
// console.log(parent4);

// let header4 = document.createElement('h2');
// parent.appendChild(header4);
// header4.textContent = Paris.locationName;

// let unOrderedList4 = document.createElement('ul');
// parent.appendChild(unOrderedList4);
// for (let i = 0; i < hour.length ; i++) {
//     let listItem4 = document.createElement('li');
//     unOrderedList4.appendChild(listItem4);
//     listItem4.textContent = hour[i]+ ' '+ Paris.soldAmount[i]
// }



// let parent5 = document.getElementById('salesList5');
// console.log(parent5);

// let header5 = document.createElement('h2');
// parent.appendChild(header5);
// header5.textContent = Lima.locationName;

// let unOrderedList5 = document.createElement('ul');
// parent.appendChild(unOrderedList5);
// for (let i = 0; i < hour.length ; i++) {
//     let listItem5 = document.createElement('li');
//     unOrderedList5.appendChild(listItem5);
//     listItem5.textContent = hour[i]+ ' '+ Lima.soldAmount[i]
// }

