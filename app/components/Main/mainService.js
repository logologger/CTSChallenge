angular.module('mainService',[])

.factory('callService',function($http,$q,SharedServiceFactory)
        {
   
    var authFactory={};


    authFactory.doServiceCall=function(callback,page){

    
        $http({
            method:'GET',
            url:'http://hackerearth.0x10.info/api/ctz_coders',
            params:{
                'type':'json',
                'query':'list_submissions',
                'page':page
            }



        })
        .then(function(response){

            //Success Reponse
           // console.log("%c Callback Came"+JSON.stringify(response),"font-size:14px;")
            callback(response.data);
            return response.data;

        }
        ,function(errorResponse){

            //Error Will be here 
            //Both success and error will be inside then function 


        })

        //URL is http://hackerearth.0x10.info/api/ctz_coders


        // $http.post("http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions&page=1")
        // .success(function(data){

        //         console.table(data);
        //         callback(data);
        //         return data;

        // })
        // .error(function(data){
        //     console.log('Error in Calling Service'+data);
        // })
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





    










