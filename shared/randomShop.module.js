(function() {
  'use strict';

  angular.module('randomShop', ['ui.router'])
  .config(randomShopConfig);

  randomShopConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function randomShopConfig( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('item-categories', {
        url: '/categories',
        templateUrl: 'items/item-categories.html',
        controller: 'ItemCategoriesController',
        controllerAs: 'icat'
    })
    .state('home', {
        url: '/'
        // templateUrl: 'welcome/welcome.html'
    });


    // .state('animals.animalDetail', {
    //     url: '/:id',
    //     templateUrl: 'animal/animal-detail.html',
    //     controller: 'AnimalDetailController',
    //     controllerAs: 'animal'
    // });

  }

})();
