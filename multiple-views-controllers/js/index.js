var ionicApp = angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider // $stateProvider is used 
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.ionicToggles', {
      url: "/ionicToggles",
      views: {
        'ionicToggles-tab': {
          templateUrl: "templates/ionicToggles.html",
          controller: 'ionicTogglesCtrl'
        }
      }
    })
  .state('tabs.lab1', {
      url: "/lab1",
      views: {
        'lab1-tab': {
          templateUrl: "templates/lab1.html",
          controller: 'lab1Ctrl'
        }
      }
    })
    .state('tabs.Homework1', {
      url: "/Homework1",
      views: {
        'Homework1-tab': {
          templateUrl: "templates/Homework1"
        }
      }
    });

  // The line below defines the starter view. Basically, when the app first opens, the root view is displayed. $urlRouterProvider.otherwise is used to set the inital view upon launch. Thus, $urlRouterProvider.otherwise sets the root view based on the URL parameter that is passed to it
   $urlRouterProvider.otherwise("/tab/ionicToggles");

})

ionicApp.controller('ionicTogglesCtrl', function($scope) { /* Here, $scope is the only dependency that is injected */
  /* List 1 - toggle values */
  /* CODE GOES HERE */
  $scope.toggle_binding_1 = { checked: true };
  $scope.toggle_binding_2 = { checked: true };
  
  /* List 2 - toggle text and values */
  /* CODE GOES HERE */
  $scope.list2 = [
    { text: "Toggle Binding 3", checked: true},
    { text: "Toggle Binding 4", checked: false},
    { text: "Toggle Binding 5", checked: true}
  ];
  
  /* onChange functions for changing other variables
     not directly bound to HTML element */
  /* change toggle 3 value to same value as toggle 1 when toggle 1 changes        value */
  /* CODE GOES HERE */
  $scope.on_toggle1_change = function() {
     $scope.list2[0].checked = $scope.toggle_binding_1.checked;
   }
  
  /* change toggle 1 value to same value as toggle 3 when toggle 3 changes value */
  /* CODE GOES HERE */
  $scope.on_list2_change = function() {
    $scope.toggle_binding_1.checked = $scope.list2[0].checked;
  }
  
  /* change all toggles to value of toggle 2 when
     toggle 2 changes */
  /* CODE GOES HERE */
  $scope.on_toggle2_change = function() {
    $scope.toggle_binding_1.checked = $scope.toggle_binding_2.checked;
    $scope.list2[0].checked = $scope.toggle_binding_2.checked;
    $scope.list2[1].checked = $scope.toggle_binding_2.checked;
    $scope.list2[2].checked = $scope.toggle_binding_2.checked;
  }
  
});

ionicApp.controller('lab1Ctrl', function($scope, $ionicModal, $ionicLoading) {
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.phoneNumber = "";
  $scope.email = "";
  $scope.listOfPeople = {};

  $scope.onSubmit = function () {
    var person = {};
    person.id = $scope.firstName+$scope.lastName+$scope.phoneNumber+$scope.email;
    person.firstName = $scope.firstName;
    person.lastName = $scope.lastName;
    person.phoneNumber = $scope.phoneNumber;
    person.email = $scope.email;
    $scope.listOfPeople[$scope.firstName+$scope.lastName+$scope.phoneNumber+$scope.email] = person;
    $ionicLoading.show({ template: 'Person Added!', noBackdrop: true, duration: 1000 });
  };

  $scope.deletePerson = function(person) {
    delete $scope.listOfPeople[person.id];
    $ionicLoading.show({ template: 'Person Deleted!', noBackdrop: true, duration: 1000 });
  };

})