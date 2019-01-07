/*
 * Tom DeMark's Sequential indicator
 *
 * Returns an object with properties:
 *
 * numberOfCountdowns: Number of countdowns so far (integer)
 * countdownType: current countdown type (buy/sell)
 * perfectSetup: countdown has a perfect setup? (boolean)
 *
 */

let Indicator = function() {
    this.historyData = [];
    this.historyMax = 20;
    this.state = 'none';
    this.perfectSetup = false;
    this.result = {numberOfCountdowns: 0, countdownType: null, perfectSetup: false};
    console.log('TDM_Seq: indicator initialised');
};

Indicator.prototype.update = function(candle) {
    this.addToHistoryData(candle);
};

Indicator.prototype.addToHistoryData = function(candle) {
    this.historyData.unshift(candle);
    if (this.historyData.length > this.historyMax) {
        this.historyData.pop();
    }
    console.log('TDM_Seq: Added candle: ', JSON.stringify(candle));
};

Indicator.prototype.resetState = function() {
    this.state = 'none';
    this.perfectSetup = false;
};

module.exports = Indicator;