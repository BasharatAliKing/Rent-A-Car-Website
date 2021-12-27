var lahore=document.getElementById("lahore");
lahore.addEventListener("click", lahorefunc);
var plus=document.getElementById("plus");


function lahorefunc(e) {
    e.preventDefault();
    // console.log("king is here....");
  
    var createElement = document.createElement("p");
 var createTextNode=document.createTextNode("Hello Here we go to Lahore. So First of all ware your seat belts and keep calm.. Thanks..");
 createElement.appendChild(createTextNode);
 createElement.className="para1";
 var para1=document.querySelector(".para1");
 if(lahore.className== "open"){
    
      // shrink the box
      lahore.className=" ";
      plus.innerHTML="+";
     para1.remove();
  }else{
      // expand the box
      lahore.className="open";

      plus.innerHTML="-";
      lahore.appendChild(createElement);
  }

}