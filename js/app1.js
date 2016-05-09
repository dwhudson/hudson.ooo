/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app1 = angular.module('app1',[]);

app1.controller('articlelist', function($scope) {
   
    $scope.skillz = ['C#','.NET','Java','Android','JavaScript','AJAX','AngularJS','jQuery','HTML5',
       'CSS3','Boostrap3','LESS','SQL','MySQL','SQL Server','Node.js','Google APIs','PHP','Python'
        ,'MVC','Git','TFS','JIRA','RESTful web services','SOAP','JSON','APIs','Azure','XML','XHTML','Agile/Scrum'
        ,'TDD','Gherkin','Linux','Bash','Net Beans','Visual Studio','Eclipse','Unit Testing','JSDocs','Sandcastle'
        ,'OOD/SDLC','JDBC/ODBC','JSP','Servlets','J2EE','Stored Procs','ORM Entity','Apache Tomcat','Ant','Bower','Grunt','IIS'
        ,'Drupal CMS','Sitefinity CMS'];
   
   $scope.showList = function() {
       
   };
   
});