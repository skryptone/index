var config = {
    apiKey: "AIzaSyCEp_oORWYVy-pCMrLahiJe0CQUAbYJhMs",
    authDomain: "d-creations.firebaseapp.com",
    databaseURL: "https://d-creations.firebaseio.com",
    projectId: "d-creations",
    storageBucket: "",
    messagingSenderId: "279055687299"
  };
  firebase.initializeApp(config);

  //FIREBASE//
var app = angular.module('DC', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'templates/home.html'
    
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
    })
    .when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: 'projCtrl'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'conCtrl'
        
    })
    .otherwise({
        redirectTo: '/home'
    })
});

app.controller('conCtrl', function($scope) {
    $scope.msg = '';
    $scope.type = '';

    $scope.mail = function(){
        $scope.type = 'E-mail';
        $scope.msg = 'admin@skrypto.xyz';
    }
    $scope.phone = function() {
        $scope.type = "Mobile Number";
        $scope.msg = '7904664460';
    }
    $scope.blog = function() {
        $scope.type = "Blog Spot";
        $scope.msg = 'skrypto.xyz';
    }
});
app.factory('projectsFactory', function($http) {
    var projectFactory = {
        projectitem : function() {
            return $http({
                url: 'DB/projects.json',
                method : 'GET'
            }).then(function(response) {
                return response.data;
            });
        }
    };
    return projectFactory;
});
app.controller('projCtrl', function($scope, projectsFactory) {
    var promise = projectsFactory.projectitem();
    
    promise.then(function(data) {
        $scope.projectitem = data;
        console.log(data);
      });
      $scope.select = function(title) {
        $scope.selected = title;
        console.log(title);
      }
      $scope.selected = {};

      $scope.comments = [];
      $scope.btn_post = function() {
          if ($scope.cmtName != '') {
              $scope.comments.push($scope.cmtName);
              $scope.cmtName = "";
          }
      }
      $scope.post_cmt = function($home) {
          $scope.comments.splice($home, 1);
      }
});
app.controller('aboutCtrl', function($scope) {
    $scope.msg = '';
    $scope.manoj = function() {
        $scope.msg = 'Progressive Web App Developer And Web Development Support'
    }
    $scope.saro = function() {
        $scope.msg = 'IoT Designer and Technical Support'
    }
    $scope.tamil = function() { 
        $scope.msg = 'Android Developer and Programming Support'
    }
});
