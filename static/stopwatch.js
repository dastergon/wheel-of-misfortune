/* Kudos to Billy Brown: https://codepen.io/_Billy_Brown/pen/dbJeh */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } var Stopwatch = function () {
    function Stopwatch(display, results) {
        _classCallCheck(this, Stopwatch);
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
    } _createClass(Stopwatch, [{
        key: 'reset', value: function reset() {
            this.times = [0, 0, 0];
        }
    }, {
        key: 'start', value: function start() {
            if (!this.time) this.time = performance.now();
            if (!this.running) {
                this.running = true;
                requestAnimationFrame(this.step.bind(this));
            }
        }
    }, {
        key: 'lap', value: function lap() {
            if (!this.running) return;
            var times = this.times;
            var li = document.createElement('li');
            li.innerText = this.format(times);
            this.results.appendChild(li);
        }
    }, {
        key: 'stop', value: function stop() {
            this.running = false;
            this.time = null;
        }
    }, {
        key: 'restart', value: function restart() {
            if (!this.time) this.time = performance.now();
            if (!this.running) {
                this.running = true;
                requestAnimationFrame(this.step.bind(this));
            }
            this.reset();
        }
    }, {
        key: 'clear', value: function clear() {
            clearChildren(this.results);
        }
    }, {
        key: 'step', value: function step(

            timestamp) {
            if (!this.running) return;
            this.calculate(timestamp);
            this.time = timestamp;
            this.print();
            requestAnimationFrame(this.step.bind(this));
        }
    }, {
        key: 'calculate', value: function calculate(

            timestamp) {
            var diff = timestamp - this.time;
            // Hundredths of a second are 100 ms
            this.times[2] += diff / 10;
            // Seconds are 100 hundredths of a second
            if (this.times[2] >= 100) {
                this.times[1] += 1;
                this.times[2] -= 100;
            }
            // Minutes are 60 seconds
            if (this.times[1] >= 60) {
                this.times[0] += 1;
                this.times[1] -= 60;
            }
        }
    }, {
        key: 'print', value: function print() {
            this.display.innerText = this.format(this.times);
        }
    }, {
        key: 'format', value: function format(

            times) {
            return (
                pad0(times[0], 2) + ':' +
                pad0(times[1], 2) + ':' +
                pad0(Math.floor(times[2]), 2));
        }
    }]); return Stopwatch;
}();


function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count) {
        result = '0' + result;
    }
    return result;
}

function clearChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}

var stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'),
    document.querySelector('.results'));
