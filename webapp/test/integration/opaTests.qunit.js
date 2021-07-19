/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"enterprise/secureye/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});