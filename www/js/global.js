;(function(angular){
	'use strict';
	angular.module('starter.global',[])
	//第一个参数是名字
	//第二个参数是object对象
	.constant('GlobalVariable',{
		//全局参数配置
		SERVER_PATH:'http://www.itcast.com',
		VERSION:'0.1'
	})
	
	
	
})(angular)
