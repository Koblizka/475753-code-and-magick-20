'use strict';

var fireBallSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getFireBallSpeed = function(windDirectionIsLeft) {
  return (windDirectionIsLeft) ? 5 : 2;
}

var getWizardHeight = function(wizardWidth) {
  return 1.337 * wizardWidth;
}

var getWizardX = function(gameFiledWidth) {
  return (gameFiledWidth - wizardWidth) / 2;
}

var getWizardY = function(gameFiledHeight) {
  return gameFiledHeight / 3;
}