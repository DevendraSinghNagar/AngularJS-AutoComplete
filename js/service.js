app.service('dataService', function($http, $log, $q) {
    return {
        getData: function(url) {
            var deferred = $q.defer();
            $http.get(url).then(
                function(data) {
                    deferred.resolve(data);
                },function(msg) {
                    deferred.reject(msg);            
                });
            return deferred.promise;
        }
    }
});