/// <reference path="../Scripts/jquery-2.2.1.js" />
/// <reference path="../Scripts/knockout-3.4.0.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />


/// <reference path="../App/setting.js" />
/// <reference path="../App/model.ko.user.js" />
/// <reference path="../App/model.ang.user.js" />


describe("Hello Tests", function () {

    var $controller;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("Inline test", function () {
        expect(true).toBe(true);
    });

    it("external js test", function () {
        expect(setting.dateFormat).toBe("DD-MMM,YYYY");
    });

    it("external knockout model test", function () {
        var model = new KoUserModel();
        model.firstName("han");
        model.lastName("mina");
        expect(model.fullName()).toBe("han mina");

        model = new KoUserModel();
        model.firstName("han");
        expect(model.fullName()).toBe("han");

        model = new KoUserModel();
        model.lastName("mina");
        expect(model.fullName()).toBe("mina");
    });

    it("external angular model test", function () {

        var $scope = {};
        var controller = $controller('userModel', { $scope: $scope });
        $scope.firstName = "han";
        $scope.lastName = "mina";
        expect($scope.fullName()).toBe("han mina");
    });
});
