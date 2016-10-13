angular.module('mainController',[])

.controller('MainController',function($rootScope,$state,$location,CommonDataFactory,$mdDialog, $mdMedia,SharedServiceFactory,callService)
           {
    
	 var vm=this;
	 vm.checked=false;
	 var currentPage=0;
	 var totalPage=50;
	 vm.websites=[];
	 // vm.searchText={};
	 vm.status=["Wrong Answer","Skipped","Accepted","RunTime/Compilation Error","Memory/Time Limit Exceeded"];
	 vm.results=callService.doServiceCall(callback,1);
	 vm.langImage=callService.getAllLangImage(callbackforImageLang);
	 vm.getImageLink=function(langName){

	 	//console.log("Language Name is "+langName);

	 		var data=CommonDataFactory.getLangImage();
	 		for(var i=0;i<data.length;i++){

	 			if(data[i].language===langName){

	 				return data[i].icon;

	 			}
	 		}
	 	
	 }
	 vm.NextPage=function(){
	 	if(currentPage<totalPage){
	 		currentPage++;

	 	}

	 	vm.results=callService.doServiceCall(callback,currentPage);



	 }
	 vm.showData=function(data){
	 		// if(vm.checked===true){
		 		var new_arr=[];
		 		var actual_data=CommonDataFactory.getActualData();

		 		console.log("Value of checkbox is "+data+" and actual_data is "+JSON.stringify(actual_data));
		 		for(var i=0;i<actual_data.length;i++){
		 			console.log(actual_data[i].compiler_status);
		 			var expression = data;
    				var rx = new RegExp(expression, 'gi');

		 			if(actual_data[i].compiler_status.match(rx)){
		 				new_arr.push(actual_data[i]);
		 			}
		 		}
		 		console.log(new_arr.length+" is what ?");
		 		vm.websites=new_arr;
	 		// }
	 		// else{
	 		// 	vm.websites=CommonDataFactory.getActualData();
	 		// }

	 }

	 function callback(data){
	 	//Callback called when we get the Main Data containing code and everything

	 	CommonDataFactory.setActualData(data.websites);
	 	vm.results=data;
	 	angular.forEach(data.websites,function(key,value){
	 		

	 		vm.websites.push(key);

	 	})
	 //	vm.websites.push(data.websites);

	 	


	 }

	 function callbackforImageLang(data){


	 		console.log("Got all Language Images");
	 		console.table(data);
	 		CommonDataFactory.setLangImage(data);
	 		/* store this data in the IndexDB  */


	 }
	 //Will Put this Function for use Later
	 function getImageSourcefromLang(langName){

	 		var data=CommonDataFactory.getLangImage();
	 		for(var i=0;i<data.length;i++){

	 			if(data[i].language===langName){

	 				return data[i].icon;

	 			}
	 		}
	 	
	 }
	 console.log("strong "+vm.results);




  
  	
    
    
    
      
    

  
   
  
    
    
   
    
    
})

















