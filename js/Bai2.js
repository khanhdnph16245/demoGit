var myApp = angular.module('myApp',[]);
myApp.controller('beverageCtrl', function($scope){
    $scope.items = [{
        name: 'Nước ngọt',
        price: 10000
    },{
        name: 'Cafe đen',
        price: 20000
    },{
        name: 'Thuốc lá',
        price: 9000
    }];

    $scope.getAmount = function(){
        var amount = 0;
        $scope.items = forEach(element =>{
            if(element.buy){
                amount += element.price * element.quantity;
            }
        });
        return amount;
    }
});