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
      controllerAs: 'itemsListc'
    })
    .state('item-categories.items-list.item-details', {
    url: '/:detail',
    templateUrl: 'items/items-detail.html',
    controller: 'ItemsDetailController',
    controllerAs: 'itemsDeetc'
  });



    // .state('animals.animalDetail', {
    //     url: '/:id',
    //     templateUrl: 'animal/animal-detail.html',
    //     controller: 'AnimalDetailController',
    //     controllerAs: 'animal'
    // });

  }

})();
