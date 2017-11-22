import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acudiente',
  templateUrl: './acudiente.component.html',
  styleUrls: ['./acudiente.component.css']
})
export class AcudienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  var myApp = angular.module('myApp',[]);

  myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Prueba!';
  }]);

}
}
