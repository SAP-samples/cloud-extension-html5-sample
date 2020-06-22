/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ns/BP/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});