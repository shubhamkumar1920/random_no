
var myapp=angular.module("myApp",[]);

myapp.controller("myController",function($scope){
    // $scope.name="shubham";
    // $scope.designation="angular";
    $scope.myRandom=Math.random();
    document.querySelector('input').addEventListener('click',function(){
        console.log('button clicked');
        $scope.myRandom=Math.random();
        let a=Math.random();
        console.log(a);
        // $scope.$digest();
    },false);
})

