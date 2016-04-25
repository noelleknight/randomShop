(function() {
    'use strict';

    angular.module('randomShop')
        .controller('ItemCategoriesController', ItemCategoriesController);


    function ItemCategoriesController() {
      this.list = [
        { category: 'Essentials' },
        { category: 'Auxiliaries' },
        { category: 'Whims' }
      ];
    }



})();
