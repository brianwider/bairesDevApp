(function () {
    'use strict';

    angular
        .module('bairesApp')
        .controller('bairesCtrl', function ($scope, BairesService) {
            $scope.error = false;

            BairesService.getPhotos()
                .then(function (response) {
                    if (response.data) {
                        var totalAlbums = [];
                        var photos = response.data;
                        photos.forEach(function(photo) {
                            if (totalAlbums[photo.albumId]) {
                                totalAlbums[photo.albumId].push(photo);
                            } else {
                                totalAlbums[photo.albumId] = [
                                    photo
                                ];
                            }
                        });

                        var filteredAlbums = totalAlbums.slice(Math.max(totalAlbums.length - 3, 1))
                        $scope.albums = [];

                        // This could be replaced by a .filter()
                        // It's more efficient to just filter the results on the controller, so the view doesn't need to do it
                        filteredAlbums.forEach(function (album) {
                            $scope.albums.push(album.slice(Math.max(album.length - 2, 1)));
                        });
                    } else {
                        $scope.error = true;
                    }
                })
                .catch(function (err) {
                    console.error(err);
                });
        });
})();
