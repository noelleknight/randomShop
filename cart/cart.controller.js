(function() {
    'use strict';

    angular.module('randomShop')
        .controller('CartController', CartController);

 CartController.$inject = ['$stateParams'];

 function CartController($stateParams) {
   this.go = function go() {
        $state.go('/cart');
    };


 //   this.cartItem = {
 //   name: 'Bernie Tank',
 //   image: 'http://cdn.shopify.com/s/files/1/0170/2786/products/unnamed-1_c4397bbd-4bf0-4b17-a072-8c3501152065_large.jpg?v=1452272976'
 // };    //    return this.cartItem;
    //  };
 }
})();
