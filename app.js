 let customer=[];

function Addcustomer() {
    let id=document.getElementById("id").value;
    let name=document.getElementById("Name").value;
    let address=document.getElementById("address").value;
    let age=document.getElementById("age").value;
  

let customer1=[
    {
        id:id,
        name:name,
        address:address,
        age:age
    }
]

 

customer.push(customer1)
console.log(customer1);

console.log(customer1.toString());

    
}