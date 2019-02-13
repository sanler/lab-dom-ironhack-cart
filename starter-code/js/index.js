function deleteItem(e){

var parent=e.currentTarget.parentNode.parentNode.parentNode;
var child=e.currentTarget.parentNode.parentNode;
  //console.log(e.currentTarget.parentNode.parentNode);
parent.removeChild(child);

}

function createQuantityInput(){
  var inputN;
  var labelN;
  var divN;
  
  console.log('HOloooooo');

  inputN=document.createElement('input');
  labelN=document.createElement('label');
  divN=document.createElement('div');
  
  divN.appendChild(labelN);
  labelN.appendChild(inputN);
  console.log('HOLAAA'+divN.innerHTML);
  }

function getPriceByProduct(itemNode){
var unitPrice=0;

unitPrice=itemNode.getElementsByClassName('prodPrice')[0].innerHTML;

return parseFloat(unitPrice);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {


var elementProduct=[];
var precioUnitario=0;
var quantity=0;
var quantityPrice=0;
var totalPrice=0;
elementProduct=document.getElementsByClassName('producto');

for(i=0;i<elementProduct.length;i++){
  alert(elementProduct.length);
  alert(i);
  precioUnitario=getPriceByProduct(elementProduct[i]);
  alert(precioUnitario);
  
  quantity=elementProduct[i].getElementsByTagName('input')[0].value;

  console.log(elementProduct[i].getElementsByTagName('input')[0].value);
  quantityPrice=precioUnitario*quantity;
  elementProduct[i].getElementsByClassName('qtyPrice')[0].innerHTML='$'+quantityPrice;

  alert(quantityPrice);
  totalPrice+=quantityPrice;
}

document.getElementById("totalPrice").innerHTML='Total Price: $'+totalPrice;

//coger listado con todos los nodos producto. Iterar sobre ellos con un for. En cada iteración:
//pasar el nodo a getPriceByProduct(itemNode) para que nos devuelva el precio unitario.
//coger el valor del input QTY 
//multiplicar ambos y pintarlo en qtyPrice



}




function createNewItem(){

  var nombreP='';
  var precioP='';
//coger el valor del nombre y del precio de los inputs

/*Llamar a las funciones

 function createQuantityInput(){
var inputN;
var labelN;
var divN;


inputN=document.createElement(input);
labelN=document.createElement(label);
divN=document.createElement(div);

divN.appendChild(labelN);
labelN.appendChild(inputN);
console.log(divN.innerHTML);
}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){


document.createElement(div);


}


 <div class="producto">
    <div class="prodName">Iron Shirt</div>
    <div class="prodPrice">15$</div>
    <div class="pQty"> <label for="prodQty">QTY</label><input type="text"  id="prodQty" value="0" ></div>
    <div class="qtyPrice">0$</div>
    <div class="delete"><button class="btn btn-delete">Delete</button></div>
  </div>

*/
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;
  console.log('jjjjjjjjjjjjjjjjjjjjjjjjj');
  createItemButton.onclick = createQuantityInput();
  console.log('dddddddddddd');
 for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

 // var deleteBtns = document.getElementsByClassName('btn btn-delete');


};
