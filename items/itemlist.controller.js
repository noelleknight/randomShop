(function() {
    'use strict';

    angular.module('randomShop')
        .controller('ItemsListController', ItemsListController);

 ItemsListController.$inject = ['$stateParams'];

        function ItemsListController() {
          this.list = [
            { item: 'Black Leggings' },
            { item: 'Platform Sneakers' },
            { item: 'Bernie Tank'}          ];
        }

})();
