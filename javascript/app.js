'use strict';


let hour = [' 6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ' , '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm '];
// ============================ Global Function:    ==========================================
function randomCustomersNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



let Branches=[];

function Branch(locationName, minCustomers, maxCustomers, Avg) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.Avg = Avg;

    this.customers=[];
    this.soldAmount=[];

    this.total=0;
    Branches.push(this);
}



Branch.prototype.getCustomerNumber = function () {
    for (let i = 0; i < hour.length; i++) {
        this.customers.push(randomCustomersNumber(this.minCustomers, this.maxCustomers))
    }
}

Branch.prototype.getCoockies=function(){
    for (let i = 0; i < hour.length ; i++) {
        this.soldAmount.push(Math.floor( this.Avg * this.customers[i]));
        this.total += this.soldAmount[i];
       }

}




//============ Seattle:
let seattle = new Branch('Seattle', 23, 65, 6.3,);

//============ Tokyo:
let tokyo = new Branch('Tokyo', 3,24, 1.2,);

//============ Dubai:
let dubai = new Branch('Dubai', 11,38, 3.7,);

//============ Paris:
let paris = new Branch('Paris', 20,38, 2.3,);

//============ Lima:
let lima = new Branch('Lima',2,16, 4.6);


console.log(Branches);


for(let i =0; i <Branches.length ; i++)
{
    Branches[i].getCustomerNumber();
    Branches[i].getCoockies();
    
}


// Globle render function:


let parent =document.getElementById('salesList');
console.log(parent);

let tabelElement=document.createElement('table');
parent.appendChild(tabelElement);


function createHeader()
{
    let headerRow=document.createElement('tr');
    tabelElement.appendChild(headerRow);

    let firstTH=document.createElement('th');
    headerRow.appendChild(firstTH);
    firstTH.textContent= "Branch";

    for (let i = 0; i < hour.length; i++) {
        let thElememnt=document.createElement('th');
        headerRow.appendChild(thElememnt);
        thElememnt.textContent=hour[i];

    }

    let lastTH=document.createElement('th');
    headerRow.appendChild(lastTH);
    lastTH.textContent= "Daily total";

}

createHeader();


Branch.prototype.renderData=function()
{
    let dataRow= document.createElement('tr');
    tabelElement.appendChild(dataRow);

    let branchName=document.createElement('td');
    dataRow.appendChild(branchName);
    branchName.textContent=this.locationName;

    for (let i = 0; i < hour.length; i++) {
       let dataElement=document.createElement('td');
       dataRow.appendChild(dataElement);
       dataElement.textContent=this.soldAmount[i]; 
    }
    let totalElement=document.createElement('td');
    dataRow.appendChild(totalElement);
    totalElement.textContent=this.total;
}


for(let i =0; i <Branches.length ; i++)
{
    Branches[i].getCustomerNumber();
    Branches[i].getCoockies();
    Branches[i].renderData();
}


function createFooter()
{
    let footerRow= document.createElement('tr');
    tabelElement.appendChild(footerRow);

    let footerTH= document.createElement('th');
    footerRow.appendChild(footerTH);
    footerTH.textContent='Totals';



    let finalTotal=0;

    for (let i = 0; i < hour.length; i++) {
       let  totalPerHour=0;
        for (let j = 0; j < Branches.length; j++) {
            totalPerHour += Branches[j].soldAmount[i];
            finalTotal +=Branches[j].soldAmount[i];
        }
        
        let footerData=document.createElement('td');
        footerRow.appendChild(footerData);
        footerData.textContent=totalPerHour;
    }
    let totalTD=document.createComment('td');
    footerRow.appendChild(totalTD);
    finalTotal.textContent = finalTotal;
}

createFooter();