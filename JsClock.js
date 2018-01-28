
/**
 * @param {Object}      options
 * @param {Boolean}     options.autoStart
 * @param {HTMLElement} options.targetElement
 * @param {Number}      options.timeZoneOffset In hours.
 * @constructor
 */
function JsClock(options) {

  this.hours = document.createElement('span');
  this.minutes = document.createElement('span');
  this.seconds = document.createElement('span');
  this.delimiterFirst = document.createElement('span');

  this.hours.className = 'w3lifer--js-clock--hours';
  this.minutes.className = 'w3lifer--js-clock--minutes';
  this.seconds.className = 'w3lifer--js-clock--seconds';
  this.delimiterFirst.className = 'w3lifer--js-clock--delimiter';

  var date = new Date();

  this.timeZoneOffset = options.timeZoneOffset || date.getTimezoneOffset() * 60;

  date.setSeconds(date.getSeconds() + +this.timeZoneOffset);

  this.hours.innerHTML = this._addZeroPrefix(date.getUTCHours());
  this.minutes.innerHTML = this._addZeroPrefix(date.getUTCMinutes());
  this.seconds.innerHTML = this._addZeroPrefix(date.getUTCSeconds());
  this.delimiterFirst.innerHTML = ':';
  this.delimiterSecond = this.delimiterFirst.cloneNode(true);

  options.targetElement.appendChild(this.hours);
  options.targetElement.appendChild(this.delimiterFirst);
  options.targetElement.appendChild(this.minutes);
  options.targetElement.appendChild(this.delimiterSecond);
  options.targetElement.appendChild(this.seconds);

  if (options.autoStart !== false) {
    this.start();
  }

}

JsClock.prototype.start = function () {

  this.intervalId = setInterval(this._update.bind(this), 1000);
  this._update();

};

JsClock.prototype.stop = function () {

  clearInterval(this.intervalId);
  this.intervalId = null;

};

JsClock.prototype._update = function () {

  var date = new Date();

  date.setSeconds(date.getSeconds() + +this.timeZoneOffset);

  this.hours.innerHTML = this._addZeroPrefix(date.getUTCHours());
  this.minutes.innerHTML = this._addZeroPrefix(date.getUTCMinutes());
  this.seconds.innerHTML = this._addZeroPrefix(date.getUTCSeconds());

};

JsClock.prototype._addZeroPrefix = function (value) {

  return value < 10 ? '0' + value : value;

};
