angular.module('app.controllers', [])
  
.controller('configurarPesquisaCtrl', function($scope) {
$scope.ranges = {
  'tempoP': 1,
  'raioP': 1,
  'tempoAMR': 1,
  'raioAMR': 1
  }

})
         
 .controller('aoMeuRedorCtrl', function($scope) {
$scope.ranges = {
  'tempoAMR': 1,
  'raioAMR': 1
  }
 })

 .controller('idiomaCtrl', function($scope) {

 })
  
 .controller('home_mapCtrl', function($scope) {

 })

 .controller('faleConoscoCtrl', function($scope) {

 })

  .controller('pesquisaCtrl', function($scope) {

 })

// angular.module('starter.controllers', [])

// .controller('MapCtrl', function($scope, $ionicLoading) {

//   $scope.mapCreated = function(map) {
//     $scope.map = map;
//   };

//   $scope.centerOnMe = function () {
//     console.log("Centering");
//     if (!$scope.map) {
//       return;
//     }

//     $scope.loading = $ionicLoading.show({
//       content: 'Getting current location...',
//       showBackdrop: false
//     });

//     navigator.geolocation.getCurrentPosition(function (pos) {
//       console.log('Got pos', pos);
//       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//       $scope.loading.hide();
//     }, function (error) {
//       alert('Unable to get location: ' + error.message);
//     });
//   };
// });

// function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleRight = function() {
//     $ionicSideMenuDelegate.toggleRight();
//   };
// }