var app=angular.module("myApp",['mainController','lazyLoading','ngAnimate', 'ui.router','CommonData','ngMaterial','ngMessages','SharedServiceFactoryModule','mainService','hljs'])


.config(function($stateProvider, $urlRouterProvider,$httpProvider,hljsServiceProvider)
       {
    
      $stateProvider
        .state('/', {
            url: '/',
            templateUrl:'app/components/Main/main.html',
            controller:'MainController',
            controllerAs:'main'
        });



          hljsServiceProvider.setOptions({
            // replace tab with 2 spaces
            tabReplace: '  '
        });

       $urlRouterProvider.otherwise('/');
    
  


    // $httpProvider.interceptors.push('AuthInterceptor'); 
    
})




