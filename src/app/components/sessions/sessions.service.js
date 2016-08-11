(function() {
  'use strict';

  angular
  .module('webapp2')
  .service('sessionsService', sessionsService);

  /** @ngInject */
  function sessionsService($log, $http) {
    var apiHost = '/api/sessions';

    var service = {
      apiHost: apiHost,
      getsessions: getsessions
    };

    return service;

    function getsessions() {

      return $http.get(apiHost)
      .then(getsessionsComplete)
      .catch(getsessionsFailed);

      function getsessionsComplete(response) {
        var schedule = {};
        schedule.days = [];
        var data = response.data.days;

        for(var i=0; i< data.length; i++) {

          var currentDay = {};
          currentDay.sessions = [];
          currentDay.sessions.groupedStart = [];
          currentDay.name = data[i].name;

          angular.forEach(data[i].stages, function(stage) {

            angular.forEach(stage.sessions, function(ses) {
              var sessionEntry = ses;
              sessionEntry.stage = stage.name.split(/[ ]+/)[0];
              sessionEntry.time_start = getFormattedTime(sessionEntry.time_start.toString());
              sessionEntry.time_end = getFormattedTime(sessionEntry.time_end.toString());
              currentDay.sessions.push(sessionEntry);
            });

          });

          schedule.days.push(currentDay);
        }

        $log.info(schedule);

        return schedule;
      }

      function getsessionsFailed(error) {
        $log.error('XHR Failed for getsessions.\n' + angular.toJson(error.data, true));
      }
    }

    function getFormattedTime(fourDigitTime) {
      // var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
      // var hours = ((hours24 + 11) % 12) + 1;
      // var amPm = hours24 > 11 ? 'pm' : 'am';
      var hours = fourDigitTime.substring(0, 2);
      var minutes = fourDigitTime.substring(2);

      // return hours + ':' + minutes + " " + amPm;
      var mydate = new Date(1982, 1, 1, hours, minutes, 0, 0);
      return mydate;
    }
  }
})();
