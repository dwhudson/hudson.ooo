'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.controller('articleList', function($scope) {
    $scope.skillz = [
        {skill: 'C#' , yearsExperience: 2},
        {skill: '.NET' , yearsExperience: 2},
        {skill: 'Java' , yearsExperience: 3},
        {skill: 'Android' , yearsExperience: 1},
        {skill: 'JavaScript' , yearsExperience: 4},
        {skill: 'AJAX' , yearsExperience: 2},
        {skill: 'AngularJS' , yearsExperience: 1},
        {skill: 'jQuery' , yearsExperience: 2},
        {skill: 'HTML5' , yearsExperience: 4},
        {skill: 'CSS3' , yearsExperience: 4},
        {skill: 'Boostrap3' , yearsExperience: 2},
        {skill: 'LESS' , yearsExperience: '< 1'},
        {skill: 'SQL' , yearsExperience: 4},
        {skill: 'MySQL' , yearsExperience: 4},
        {skill: 'MS SQL Server' , yearsExperience: 2},
        {skill: 'Node.js' , yearsExperience: '< 1'},
        {skill: 'Google APIs' , yearsExperience: '< 1'},
        {skill: 'PHP' , yearsExperience: 1},
        {skill: 'Python' , yearsExperience: '< 1'},
        {skill: 'MVC' , yearsExperience: 2},
        {skill: 'Git' , yearsExperience: 2},
        {skill: 'TFS' , yearsExperience: 1},
        {skill: 'JIRA' , yearsExperience: 1},
        {skill: 'RESTful web services' , yearsExperience: 2},
        {skill: 'SOAP' , yearsExperience: 1},
        {skill: 'JSON' , yearsExperience: 2},
        {skill: 'Azure' , yearsExperience: '< 1'},
        {skill: 'XML' , yearsExperience: 3},
        {skill: 'XHTML' , yearsExperience: 3},
        {skill: 'Agile/Scrum' , yearsExperience: 2},
        {skill: 'TDD, Gherkin' , yearsExperience: 1},
        {skill: 'Linux' , yearsExperience: 2},
        {skill: 'Bash' , yearsExperience: 2},
        {skill: 'Net Beans' , yearsExperience: 4},
        {skill: 'Visual Studio' , yearsExperience: 2},
        {skill: 'Eclipse' , yearsExperience: 1},
        {skill: 'Unit Testing' , yearsExperience: 1},
        {skill: 'JSDocs' , yearsExperience: 1},
        {skill: 'Sandcastle' , yearsExperience: 1},
        {skill: 'OOD/SDLC' , yearsExperience: 3},
        {skill: 'JDBC/ODBC' , yearsExperience: '< 1'},
        {skill: 'JSP' , yearsExperience: '< 1'},
        {skill: 'Servlets' , yearsExperience: ' < 1'},
        {skill: 'J2EE' , yearsExperience: '< 1'},
        {skill: 'Stored Procs' , yearsExperience: 2},
        {skill: 'ORM Entity' , yearsExperience: '< 1'},
        {skill: 'Apache Tomcat' , yearsExperience: '< 1'},
        {skill: 'Ant' , yearsExperience: '< 1'},
        {skill: 'Bower' , yearsExperience: '< 1'},
        {skill: 'Grunt' , yearsExperience: '< 1'},
        {skill: 'IIS' , yearsExperience: 1},
        {skill: 'Drupal CMS' , yearsExperience: '< 1'},
        {skill: 'Sitefinity CMS' , yearsExperience: '< 1'}
    ];
   
    $scope.showList = function() {
       
    };
    
    $scope.items = (function () {
        var skillz = [];
        for ( var i=0; i < 50; i++) {
          $scope.skillz.push({name: 'cell ' + i});
        }
            return skillz;
    })();

    $scope.columnBreak = 5;//max number of cols

    $scope.startNewRow = function (index, count) {
        return ((index) % count) === 0;
    }; 
    
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

