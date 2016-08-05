(function() {
  'use strict';

  angular
  .module('webapp2')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, organizersService, speakersService, sessionsService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1469733404264;
    vm.showToastr = showToastr;
    getOrganizers();
    getSpeakers();
    getSchedule();

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getOrganizers() {
      return organizersService.getOrganizers().then(function(data) {
        vm.organizers = data;
        return vm.organizers;
      });
    }

    function getSpeakers() {
      return speakersService.getSpeakers().then(function(data) {
        vm.speakers = data;
        return vm.speakers;
      });
    }

    function getSchedule() {
      return sessionsService.getsessions().then(function(data) {
        vm.schedule = data;
        return vm.schedule;
      });
    }
  }
})();
