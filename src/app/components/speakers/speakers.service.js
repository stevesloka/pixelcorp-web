(function() {
  'use strict';

  angular
  .module('webapp2')
  .service('speakersService', speakersService);

  /** @ngInject */
  function speakersService($log, $http) {
    var apiHost = 'assets/data/speakers.json';

    var service = {
      apiHost: apiHost,
      getSpeakers: getSpeakers
    };

    return service;

    function getSpeakers() {

      return $http.get(apiHost)
      .then(getSpeakersComplete)
      .catch(getSpeakersFailed);

      function getSpeakersComplete(response) {
        return response.data;
      }

      function getSpeakersFailed(error) {
        $log.error('XHR Failed for getSpeakers.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
