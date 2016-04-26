(function() {
    'use strict';

    angular.module('randomShop')
        .controller('CartController', CartController);

 CartController.$inject = ['$state'];

 function CartController($state) {
   this.addToCart = function addToCart() {
     console.log(3);
        $state.go('cart');
    };


 }
})();
