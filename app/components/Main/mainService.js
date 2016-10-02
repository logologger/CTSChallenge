angular.module('mainService',[])

.factory('callService',function($http,$q,SharedServiceFactory)
        {
   
    var authFactory={};

    authFactory.doServiceCall=function(callback){


        $http.post("http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions&page=1")
        .success(function(data){

                console.table(data);
                callback(data);
                return data;

        })
        .error(function(data){
            console.log('Error in Calling Service'+data);
        })
    }



    authFactory.getAllLangImage=function(callback){


            $http.post("http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_compiler_image")
            .success(function(data){
                    callback(data);
                    return data;

            })
            .error(function(data){
                    console.error("some Error in calling Language Service");

            })


    }
    
    
   
    
    
  
    
    
       
   
    
    return authFactory;
})





    










