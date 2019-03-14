    app.controller('autoCompleteController', function($scope, dataService) {
        $scope.hasLookup = false;
        $scope.lookupValue= null;
        $scope.autoComplete = function() {
            var inputValue = $scope.lookupValue;
            if (inputValue.length > 3) {
                var url = 'https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name='+inputValue;
                // Above URL does not work due to No 'Access-Control-Allow-Origin' header is present on the requested resource.
                // So i have created below demo data from Auto-completion API 
                // Please comment above code and uncomment below URL.

                //var url = 'js/data.json';

                dataService.getData(url).then(
                    function (response) {
                        $scope.hasLookup = true; 
                        $scope.autoCompleteData = response.data['search_results'];
                    }, function (errorResponse) {
                        $scope.hasLookup = false;
                        //console.log(errorResponse);
                    }
                );
            } else { 
                $scope.hasLookup = false;
            }
        }
    });
    
    app.controller('detailController', function($scope, $routeParams, dataService) {      
        var url = 'js/data.json';
        dataService.getData(url).then(
            function (response) {
              $scope.company = response.data['search_results'][$routeParams.id];
              $scope.details = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }, function (errorResponse) {
               console.log(errorResponse);
            }
        );
    });