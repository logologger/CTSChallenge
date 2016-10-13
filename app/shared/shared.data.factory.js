angular.module('CommonData',[])
    
    .factory('CommonDataFactory', function() {
    var CommonDataFactory = {};
        CommonDataFactory.setLangImage = function(data) {
            CommonDataFactory.LangImage = data;
            //sessionStorage.DeskNo = DeskNo;
        };
        CommonDataFactory.getLangImage= function() {
            return CommonDataFactory.LangImage;
        };
        CommonDataFactory.setActualData = function(data) {
            CommonDataFactory.ActualData = data;
            //sessionStorage.DeskNo = DeskNo;
        };
        CommonDataFactory.getActualData= function() {
            return CommonDataFactory.ActualData;
        };
      
    return CommonDataFactory;
});
