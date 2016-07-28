(function() {
  'use strict';

  angular
    .module('webapp2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
