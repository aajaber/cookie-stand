'use strict';

let hour=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',];




// there is an issue with one of the equations.

//--- Randomly Genertated Number Function For Customers per hour:

function randomCustomersNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//=============================================================================== Seattle 
let Seattle ={
 
    // Properties: 
    locationName:'Seattle',
    minCustomers: 23,
    maxcustomers:65,
    Avg:6.3,
    customers:[],
    soldAmount:[],
    total:0,


    // Methods:
    getCustomersNumber:function(){
       for (let i = 0; i < hour.length; i++) {
        this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
       }
    },

    getSoldCookiesNumber: function(){
        for (let i = 0; i < this.customers.length ; i++) {
            this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
            this.total += this.soldAmount[i];
          
           }
    }
    
}
//=============================================================================== Tokyo 
let Tokyo ={
 
    // Properties: 
    locationName:'Tokyo',
    minCustomers:3,
    maxcustomers:24,
    Avg:1.2,
    customers:[],
    soldAmount:[],
    total:0,


     // Methods:
     getCustomersNumber:function(){
        for (let i = 0; i < hour.length; i++) {
         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
        }
     },
 
     getSoldCookiesNumber: function(){
         for (let i = 0; i < this.customers.length ; i++) {
             this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
             this.total += this.soldAmount[i];
           
            }
     }
    
}


let Dubai ={
 
    // Properties: 
    locationName:'Dubai',
    minCustomers:11,
    maxcustomers:38,
    Avg:3.7,
    customers:[],
    soldAmount:[],
    total:0,


     // Methods:
     getCustomersNumber:function(){
        for (let i = 0; i < hour.length; i++) {
         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
        }
     },
 
     getSoldCookiesNumber: function(){
         for (let i = 0; i < this.customers.length ; i++) {
             this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
             this.total += this.soldAmount[i];
           
            }
     }
    
}


let Paris ={
 
    // Properties: 
    locationName:'Paris',
    minCustomers:20,
    maxcustomers:38,
    Avg:2.3,
    customers:[],
    soldAmount:[],
    total:0,

     // Methods:
     getCustomersNumber:function(){
        for (let i = 0; i < hour.length; i++) {
         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
        }
     },
 
     getSoldCookiesNumber: function(){
         for (let i = 0; i < this.customers.length ; i++) {
             this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
             this.total += this.soldAmount[i];
           
            }
     }
    
}

let Lima ={
 
    // Properties: 
    locationName:'Lima',
    minCustomers:2,
    maxcustomers:16,
    Avg:4.6,
    customers:[],
    soldAmount:[],
    total:0,


    // Methods:
    getCustomersNumber:function(){
        for (let i = 0; i < hour.length; i++) {
         this.customers.push(randomCustomersNumber(this.minCustomers,this.maxcustomers))
        }
     },
 
     getSoldCookiesNumber: function(){
         for (let i = 0; i < this.customers.length ; i++) {
             this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
             this.total += this.soldAmount[i];
           
            }
     }
    
}


//=============================================================================== Seattle 
Seattle.getCustomersNumber();
Seattle.getSoldCookiesNumber();
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

let listElement=document.createElement('li');
listElement.textContent= 'Total:' +  Seattle.total;
unOrderedList1.appendChild(listElement);


//=============================================================================== Tokyo 
Tokyo.getCustomersNumber();
Tokyo.getSoldCookiesNumber();

let parent2 = document.getElementById('salesList2');
console.log(parent2);

let header2 = document.createElement('h2');
parent.appendChild(header2);
header2.textContent = Tokyo.locationName;

let unOrderedList2 = document.createElement('ul');
parent.appendChild(unOrderedList2);
for (let i = 0; i < hour.length ; i++) {
    let listItem2 = document.createElement('li');
    unOrderedList2.appendChild(listItem2);
    listItem2.textContent = hour[i]+ ' '+ Tokyo.soldAmount[i]
}
let listElement2=document.createElement('li');
listElement2.textContent= 'Total: ' +  Tokyo.total;
unOrderedList2.appendChild(listElement2);

//=============================================================================== Dubai 
Dubai.getCustomersNumber();
Dubai.getSoldCookiesNumber();



let parent3 = document.getElementById('salesList3');
console.log(parent3);

let header3 = document.createElement('h2');
parent.appendChild(header3);
header3.textContent = Dubai.locationName;

let unOrderedList3 = document.createElement('ul');
parent.appendChild(unOrderedList3);
for (let i = 0; i < hour.length ; i++) {
    let listItem3 = document.createElement('li');
    unOrderedList3.appendChild(listItem3);
    listItem3.textContent = hour[i]+ ' '+ Dubai.soldAmount[i]
}
let listElement3=document.createElement('li');
listElement3.textContent= 'Total: ' +  Dubai.total;
unOrderedList3.appendChild(listElement3);


//=============================================================================== Paris 
Paris.getCustomersNumber();
Paris.getSoldCookiesNumber();

let parent4 = document.getElementById('salesList4');
console.log(parent4);

let header4 = document.createElement('h2');
parent.appendChild(header4);
header4.textContent = Paris.locationName;

let unOrderedList4 = document.createElement('ul');
parent.appendChild(unOrderedList4);
for (let i = 0; i < hour.length ; i++) {
    let listItem4 = document.createElement('li');
    unOrderedList4.appendChild(listItem4);
    listItem4.textContent = hour[i]+ ' '+ Paris.soldAmount[i]
}
let listElement4=document.createElement('li');
listElement4.textContent= 'Total: ' +  Paris.total;
unOrderedList4.appendChild(listElement4);



//=============================================================================== Lima 
Lima.getCustomersNumber();
Lima.getSoldCookiesNumber();


let parent5 = document.getElementById('salesList5');
console.log(parent5);

let header5 = document.createElement('h2');
parent.appendChild(header5);
header5.textContent = Lima.locationName;

let unOrderedList5 = document.createElement('ul');
parent.appendChild(unOrderedList5);
for (let i = 0; i < hour.length ; i++) {
    let listItem5 = document.createElement('li');
    unOrderedList5.appendChild(listItem5);
    listItem5.textContent = hour[i]+ ' '+ Lima.soldAmount[i]
}
let listElement5=document.createElement('li');
listElement5.textContent= 'Total: ' +  Lima.total;
unOrderedList5.appendChild(listElement5);
