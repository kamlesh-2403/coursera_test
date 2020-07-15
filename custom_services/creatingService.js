(function () {

'use strict'
angular.module('app4Service',[])
.controller('addController',addController)
.controller('showController',showController)
.service('shoppingService',shoppingService);

addController.$inject = ['shoppingService'];
function addController(shoppingService)
{
  var itemAdder = this;
  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
      shoppingService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    }
}



// controller to show the data or the shopping list
showController.$inject = ['shoppingService'];
function showController(shoppingService)
{
  var showList = this;
  showList.items = shoppingService.getItems();

  showList.removeItem = function (itemIndex) {
      shoppingService.removeItem(itemIndex);
  };

}



// service
function shoppingService()
{

  var service = this;
  var items = [];

  service.addItem = function(itemName,itemQuantity)
  {
    var item = {
      name : itemName,
      quantity: itemQuantity
    };
    items.push(item);
  };


  service.getItems = function () {
    return items;
  };

  service.removeItem = function (itemIdex)
  {
    items.splice(itemIdex,1);
  };

}

})();
