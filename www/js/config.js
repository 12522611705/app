;(function(angular){
	'use strict';
	angular.module('starter.config',[])
	.config(function($ionicConfigProvider){
		//配置安卓平台的tab选项卡在页面中的位置
		$ionicConfigProvider.platform.android.tabs.position('bottom');
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
	})
	
})(angular)
