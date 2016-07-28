(function() {
  'use strict';

  angular
    .module('webapp2')
    .service('organizersService', organizersService);

  /** @ngInject */
  function organizersService($log, $http) {
    var apiHost = '/api/organizers';

    var service = {
      apiHost: apiHost,
      getOrganizers: getOrganizers
    };

    return service;

    function getOrganizers() {

      return $http.get(apiHost)
        .then(getOrganizersComplete)
        .catch(getOrganizersFailed);

      function getOrganizersComplete(response) {
        return response.data;
      }

      function getOrganizersFailed(error) {
        $log.error('XHR Failed for getOrganizers.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
