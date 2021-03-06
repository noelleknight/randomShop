(function() {
  'use strict';

  angular.module('randomShop', ['ui.router'])
  .config(randomShopConfig);

  randomShopConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function randomShopConfig( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/'
      // templateUrl: 'welcome/welcome.html'
    })
    .state('item-categories', {
      url: '/categories',
      templateUrl: 'items/item-categories.html',
      controller: 'ItemCategoriesController',
      controllerAs: 'icat'
    })
    .state('item-categories.items-list', {
      url: '/:name',
      templateUrl: 'items/items-list.html',
      controller: 'ItemsListController',
      controllerAs: 'items'
    })
    .state('details', {
      url: '/details',
      templateUrl: 'details/details.html',
      controller: 'CartController',
      controllerAs: 'cart'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: 'cart/cart.html',

    });

  }

})();
