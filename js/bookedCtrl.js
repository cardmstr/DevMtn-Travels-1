angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainSrv){
  mainSrv.travelInfo.forEach(function(location){
    if(location.id==$state.params.id){
      $scope.bookedTrip = location;
    }
  })

  $scope.bookedFrom = $state.params.from;
  console.log('params:',$state.params);
})
