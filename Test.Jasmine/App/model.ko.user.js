function KoUserModel() {
    var self = this;
    self.firstName = ko.observable("");
    self.lastName = ko.observable("");
    self.fullName = ko.computed(function () {
        var name = self.firstName() + " " + self.lastName();
        name = $.trim(name);
        return name;
    });
}