angular.module('lazyLoading',[])
.directive('infinitescroll',function(){

	return {

		restrict:'A',
		link:function(scope,element,attrs){

			element.bind('scroll',function(){
					console.log(element[0].scrollTop);

					if((element[0].scrollTop+element[0].offsetHeight)==element[0].scrollHeight){
						//Means the scrolling reached the end
						console.log("scroll ended ");
						scope.$apply(attrs.infinitescroll);



					}

			})
		}

	}



})