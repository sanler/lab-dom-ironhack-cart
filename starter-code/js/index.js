function deleteItem(e){

}

function getPriceByProduct(itemNode){
var unitPrice=0;

unitPrice=itemNode.getElementsByClassName('prodPrice')[0].innerHTML;

return parseFloat(unitPrice);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  alert('HOLAAA');
var elementProduct=[];
var precioUnitario=0;
var quantity=0;
var quantityPrice=0;
elementProduct=document.getElementsByClassName('producto');
alert('HOLAAA22');
for(i=0;i<elementProduct.length;i++){
  alert(i);
  precioUnitario=getPriceByProduct(elementProduct[i]);
  alert(precioUnitario);
  //quantity=elementProduct[i].getElementsByClassName('pQty')[0].getElementById('prodQty').innerHTML;

  alert(elementProduct[i].getElementsByClassName('prodQty'));
  quantityPrice=precioUnitario*quantity;
 // elementProduct[i].getElementById('qtyPrice').innerHTML=quantityPrice;

  alert(quantityPrice);
}

//coger listado con todos los nodos producto. Iterar sobre ellos con un for. En cada iteración:
//pasar el nodo a getPriceByProduct(itemNode) para que nos devuelva el precio unitario.
//coger el valor del input QTY 
//multiplicar ambos y pintarlo en qtyPrice



}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
 // createItemButton.onclick = createNewItem;

 /* for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
