/*global QUnit*/

sap.ui.define([
	"sapcom/timesheet/controller/Timesheet.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Timesheet Controller");

	QUnit.test("I should test the Timesheet controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
