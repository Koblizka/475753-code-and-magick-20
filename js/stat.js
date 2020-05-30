'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var GAP = 10;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var PLAYER_Y = 250;
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var FONT_GAP = 20;

var BAR_X = CLOUD_X + BAR_GAP;
var BAR_Y = PLAYER_Y - FONT_GAP - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fontBaseLine = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var columnGap = (BAR_WIDTH + BAR_GAP) * i;
    var barHight = -(BAR_MAX_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), BAR_X + columnGap, BAR_Y + barHight);
    ctx.fillText(players[i], BAR_X + columnGap, PLAYER_Y);
    ctx.fillStyle = 'hsl(233,' + (Math.random() * 100) + '% , 50%)';

    if (players[i] === 'Вы') {
      ctx.fillStyle = PLAYER_COLOR;
    }

    ctx.fillRect(BAR_X + columnGap, PLAYER_Y - FONT_GAP, BAR_WIDTH, barHight);
  }
};
