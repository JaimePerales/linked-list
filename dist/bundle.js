/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


class LinkedList {
    head;

    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"]();
        node.value = value;

        if (this.head === null) {
            this.head = node;
            this.head.nextNode = this.tail;

        }
        if (this.tail !== null) {
            this.tail.nextNode = node;

        }
        this.tail = node;

    }

    prepend(value) {
        const node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"]();
        node.value = value;
        if (this.head === null) {
            this.head = node;
            this.head.nextNode = this.tail;
        }
        node.nextNode = this.head;
        this.head = node;

    }

    size() {
        let count = 0;
        let node = this.head;
        while (node !== null) {
            count += 1;
            node = node.nextNode;
        }
        return count;

    }

    print() {
        let node = this.head;
        if (node === null) {
            console.log("Empty List");
            return
        }
        while (node !== null) {
            console.log(node.value);
            node = node.nextNode;
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Node {
    value = null;

    nextNode = null;





}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");


const list = new _linkedList__WEBPACK_IMPORTED_MODULE_0__["default"];
list.append("Hello");
list.append("World!");
list.prepend('yo,');
list.prepend('lets, go!');


console.log(`The Size of the Linked List is: ${list.size()}`)
list.print();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw2Q0FBSTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUIsNkNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2xFZjtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQSxpRUFBZTs7Ozs7O1VDWGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsaUJBQWlCLG1EQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrQ0FBK0MsWUFBWTtBQUMzRCxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2VkLWxpc3QvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9saW5rZWQtbGlzdC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2xpbmtlZC1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpbmtlZC1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saW5rZWQtbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpbmtlZC1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlua2VkLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgICBoZWFkO1xuXG4gICAgdGFpbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoKTtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLmhlYWQubmV4dE5vZGUgPSB0aGlzLnRhaWw7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YWlsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRhaWwubmV4dE5vZGUgPSBub2RlO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcblxuICAgIH1cblxuICAgIHByZXBlbmQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuaGVhZC5uZXh0Tm9kZSA9IHRoaXMudGFpbDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm5leHROb2RlID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuXG4gICAgfVxuXG4gICAgc2l6ZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuXG4gICAgfVxuXG4gICAgcHJpbnQoKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5oZWFkO1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbXB0eSBMaXN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUudmFsdWUpO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTGlzdCIsImNsYXNzIE5vZGUge1xuICAgIHZhbHVlID0gbnVsbDtcblxuICAgIG5leHROb2RlID0gbnVsbDtcblxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBMaW5rZWRMaXN0IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcblxuY29uc3QgbGlzdCA9IG5ldyBMaW5rZWRMaXN0O1xubGlzdC5hcHBlbmQoXCJIZWxsb1wiKTtcbmxpc3QuYXBwZW5kKFwiV29ybGQhXCIpO1xubGlzdC5wcmVwZW5kKCd5bywnKTtcbmxpc3QucHJlcGVuZCgnbGV0cywgZ28hJyk7XG5cblxuY29uc29sZS5sb2coYFRoZSBTaXplIG9mIHRoZSBMaW5rZWQgTGlzdCBpczogJHtsaXN0LnNpemUoKX1gKVxubGlzdC5wcmludCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==