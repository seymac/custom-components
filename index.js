/* jshint node: true */
'use strict';

module.exports = {
  name: 'custom-components',

  included: function(app) {	
    this._super.included(app);

	app.import('node_modules/font-awesome/css/font-awesome.css');
  }
};
