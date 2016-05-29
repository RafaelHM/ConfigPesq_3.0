angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.configurarPesquisa', {
    url: '/ConfigurarPesquisa',
    views: {
      'tab1': {
        templateUrl: 'templates/configurarPesquisa.html',
        controller: 'configurarPesquisaCtrl'
      }
    }
  })

  .state('aoMeuRedor', {
    url: '/AoMeuRedor',
    templateUrl: 'templates/aoMeuRedor.html',
    controller: 'aoMeuRedorCtrl'
  })

  .state('idioma', {
    url: '/Idioma',
    templateUrl: 'templates/idioma.html',
    controller: 'idiomaCtrl'
  })

  .state('home_map', {
    url: '/Home_map',
    templateUrl: 'templates/home_map.html',
    controller: 'home_mapCtrl'
  })

  .state('faleConosco', {
    url: '/FaleConosco',
    templateUrl: 'templates/faleConosco.html',
    controller: 'faleConoscoCtrl'
  })

  .state('pesquisa', {
    url: '/Pesquisa',
    templateUrl: 'templates/pesquisa.html',
    controller: 'pesquisaCtrl'
  })

$urlRouterProvider.otherwise('')

  

});