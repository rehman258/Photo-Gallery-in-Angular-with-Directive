angular.module('myapp', [])
.controller('mycont', ['$scope', function($scope){
}]).directive("mydirec",function(){
	return{
		restrict:'AECM',
		link:function($scope,$element,$attr){
           
          $element.on('click',function(){
          	$scope.forphoto = $attr.ngSrc;
          	$scope.$digest();
          })

		}
	}
})