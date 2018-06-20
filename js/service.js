(function () {
    'use strict';

    angular
        .module('bairesApp')
        .service('BairesService', BairesService);
})();


BairesService.$inject = ['$http'];
function BairesService($http) {
    return {
        getPhotos: function() {
            return $http({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/photos' });
        }
    };
}
