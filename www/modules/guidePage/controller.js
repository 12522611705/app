;(function(angular){
	'use strict';
	//1.引导页模块创建
	angular.module('guidePage',['guidePage.services','guidePageRoute'])
	//引导页控制器的创建
	.controller('guidePageCtrl',function($scope,guidePageService){
		$scope.items = [1,2,3];
		$scope.doRefresh = function() {
			$http.get('/new-items').success(function(newItems) {
		       $scope.items = newItems;
		    })
		    .finally(function() {
		       // 停止广播ion-refresher
		       $scope.$broadcast('scroll.refreshComplete');
		    });
		  };		
	})
})(angular)
