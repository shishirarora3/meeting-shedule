/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _meetings = __webpack_require__(1);

	var _meetings2 = _interopRequireDefault(_meetings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var resultFinal = _meetings2.default.reduce(function (result, currentMeeting) {
	    var isAdded = false;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        var _loop = function _loop() {
	            var meetingsOverlapGroup = _step.value;

	            var meetings = meetingsOverlapGroup.meetings;
	            meetings.forEach(function (meeting) {
	                if (meeting.e < currentMeeting.s || meeting.s > currentMeeting.e) {
	                    //no collision

	                } else {
	                        meetingsOverlapGroup.clashes++;
	                        meetings.push(currentMeeting);
	                        isAdded = true;
	                    }
	            });
	        };

	        for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            _loop();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    if (!isAdded) {
	        result.push({
	            clashes: 0,
	            meetings: [currentMeeting]
	        });
	    }

	    return result;
	}, []);
	var convertObjectToString = function convertObjectToString(obj) {
	    return Object.keys(obj).reduce(function (result, key) {
	        return result += key + ' : ' + obj[key] + ' ';
	    }, '');
	};
	var meetingHTML = resultFinal.map(function (_ref) {
	    var meetings = _ref.meetings;
	    var clashes = _ref.clashes;

	    var width = 100 / (clashes + 1);
	    return meetings.reverse().map(function (meeting, i) {
	        return '<div style="top:' + meeting.s + 'px;\n    height:' + (meeting.e - meeting.s) * 2 + 'px;\n    left:' + (100 - width * (i + 1)) + '%;\n    width:' + width + '%">' + convertObjectToString(meeting) + '</div>';
	    }).join('');
	});

	document.querySelectorAll('.map')[0].innerHTML = meetingHTML;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by shishirarora on 09/02/16.
	 */

	var meetings = [{
	    id: 1,
	    s: 60,
	    e: 150
	}, {
	    id: 2,
	    s: 540,
	    e: 570
	}, {
	    id: 3,
	    s: 555,
	    e: 600
	}, {
	    id: 4,
	    s: 585,
	    e: 660
	}];
	exports.default = meetings;

/***/ }
/******/ ]);