'use strict';


let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


function Branch(locationName, minCustomers, maxcustomers, Avg, customers, soldAmount, total) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxcustomers = maxcustomers;
    this.Avg = Avg;
    this.customers = customers;
    this.soldAmount = soldAmount;
    this.total = total;
   
}

//============ Seattle:
let seattle = new Branch('Seattle', 23, 65, 6.3,[],[],this.total);
console.log(seattle);

//============ Tokyo:
let tokyo = new Branch('Tokyo', 3,24, 1.2,[],[],this.total);
console.log(tokyo);

//============ Dubai:
let dubai = new Branch('Dubai', 11,38, 3.7,[],[],this.total);
console.log(dubai);

//============ Paris:
let paris = new Branch('Paris', 20,38, 2.3,[],[],this.total);
console.log(paris);

//============ Lima:
let lima = new Branch('Lima',2,16, 4.6,[],[],this.total);
console.log(lima);



// ============================ Global Functions:    ==========================================
function randomCustomersNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Branch.prototype.getCustomerNumber = function () {
    for (let i = 0; i < hour.length; i++) {
        this.customers.push(randomCustomersNumber(this.minCustomers, this.maxcustomers))
    }
}

Branch.prototype.getCoockies=function(){
    for (let i = 0; i < this.customers.length ; i++) {
        this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
        this.total += this.soldAmount[i];

       }

}


//================================ Stand alone functions ===============:


//================== Rendering on screen ================:
Branch.prototype.renderSeattle=function()
{
    const parent = document.getElementById('salesList');
     console.log(parent);

     let tableElement=document.createElement('table');
     parent.appendChild(tableElement);

     let headerRow=document.createElement('tr');
     tableElement.appendChild(headerRow);


     let th1=document.createElement('th');
     headerRow.appendChild(th1);
     th1.textContent= hour+' ';

}


seattle.getCoockies();
seattle.getCustomerNumber();
seattle.renderSeattle();

tokyo.getCoockies();
tokyo.getCustomerNumber();