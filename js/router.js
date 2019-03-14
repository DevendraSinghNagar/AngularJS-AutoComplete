app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "autocomplete.html",
    })
    .when("/autocomplete", {
        templateUrl : "autocomplete.html",
        controller : "autoCompleteController"
    })
    .when("/detail/:id", {
        templateUrl : "detail.html",
        controller : "detailController"
    })
});