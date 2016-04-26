(function() {
    'use strict';

    angular.module('randomShop')
        .controller('ItemDetailController', ItemDetailController);

 ItemDetailController.$inject = ['$stateParams'];

 function ItemDetailController() {
   this.newItem = {
   name: 'Bernie Tank',
   price: 100,
   image: 'http://cdn.shopify.com/s/files/1/0170/2786/products/unnamed-1_c4397bbd-4bf0-4b17-a072-8c3501152065_large.jpg?v=1452272976'
 };
 }
})();
