/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("window.addEventListener('load', () => {\n  const canvas = document.getElementById('backgroundCanvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 400;\n  canvas.height = 400;\n  const items = [];\n  const maxItems = 8;\n  let timer = 0;\n  let lastUpdateTime = 0;\n\n  // Preload images\n  const snowflakes = [new Image(),\n  // Original image\n  new Image(),\n  // Image at 90 degrees\n  new Image(),\n  // Image at 180 degrees\n  new Image() // Image at 270 degrees\n  ];\n  snowflakes[0].src = \"src/assets/loadingSnowflake.png\";\n  snowflakes[1].src = \"src/assets/loadingSnowflake90.png\";\n  snowflakes[2].src = \"src/assets/loadingSnowflake180.png\";\n  snowflakes[3].src = \"src/assets/loadingSnowflake270.png\";\n  function clear() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n  }\n  function animate(currentTime) {\n    const deltaTime = currentTime - lastUpdateTime;\n    if (deltaTime > 130) {\n      lastUpdateTime = currentTime;\n      clear();\n      generateItems();\n      updateItems();\n    }\n    requestAnimationFrame(animate);\n  }\n  function Item(x, y, speed) {\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.frameIndex = 0; // Current frame index for rotation\n  }\n  Item.prototype.update = function () {\n    this.y += this.speed;\n    this.frameIndex = (this.frameIndex + 1) % 4; // Cycle through frames\n  };\n  Item.prototype.draw = function () {\n    ctx.drawImage(snowflakes[this.frameIndex], this.x, this.y, 33, 33);\n  };\n  function generateItems() {\n    clear();\n    timer++;\n    if (timer % 100 === 0 || items.length < maxItems) {\n      const x = Math.random() * (canvas.width - 20);\n      const speed = Math.random() * 0.5 + 1;\n      const item = new Item(x, 0, speed);\n      items.push(item);\n    }\n    if (timer === 200) {\n      timer = 0;\n    }\n  }\n  function updateItems() {\n    for (let i = 0; i < items.length; i++) {\n      const item = items[i];\n      item.update();\n      item.draw();\n    }\n  }\n  animate(0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsIml0ZW1zIiwibWF4SXRlbXMiLCJ0aW1lciIsImxhc3RVcGRhdGVUaW1lIiwic25vd2ZsYWtlcyIsIkltYWdlIiwic3JjIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJhbmltYXRlIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJnZW5lcmF0ZUl0ZW1zIiwidXBkYXRlSXRlbXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJJdGVtIiwieCIsInkiLCJzcGVlZCIsImZyYW1lSW5kZXgiLCJwcm90b3R5cGUiLCJ1cGRhdGUiLCJkcmF3IiwiZHJhd0ltYWdlIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsIml0ZW0iLCJwdXNoIiwiaSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25vd2xvYWQyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRDYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgXG4gICAgY2FudmFzLndpZHRoID0gNDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA0MDA7XG4gIFxuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgY29uc3QgbWF4SXRlbXMgPSA4O1xuICAgIGxldCB0aW1lciA9IDA7XG4gICAgbGV0IGxhc3RVcGRhdGVUaW1lID0gMDtcbiAgXG4gICAgLy8gUHJlbG9hZCBpbWFnZXNcbiAgICBjb25zdCBzbm93Zmxha2VzID0gW1xuICAgICAgbmV3IEltYWdlKCksIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgICBuZXcgSW1hZ2UoKSwgLy8gSW1hZ2UgYXQgOTAgZGVncmVlc1xuICAgICAgbmV3IEltYWdlKCksIC8vIEltYWdlIGF0IDE4MCBkZWdyZWVzXG4gICAgICBuZXcgSW1hZ2UoKSAgLy8gSW1hZ2UgYXQgMjcwIGRlZ3JlZXNcbiAgICBdO1xuICBcbiAgICBzbm93Zmxha2VzWzBdLnNyYyA9IFwic3JjL2Fzc2V0cy9sb2FkaW5nU25vd2ZsYWtlLnBuZ1wiO1xuICAgIHNub3dmbGFrZXNbMV0uc3JjID0gXCJzcmMvYXNzZXRzL2xvYWRpbmdTbm93Zmxha2U5MC5wbmdcIjtcbiAgICBzbm93Zmxha2VzWzJdLnNyYyA9IFwic3JjL2Fzc2V0cy9sb2FkaW5nU25vd2ZsYWtlMTgwLnBuZ1wiO1xuICAgIHNub3dmbGFrZXNbM10uc3JjID0gXCJzcmMvYXNzZXRzL2xvYWRpbmdTbm93Zmxha2UyNzAucG5nXCI7XG4gIFxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gYW5pbWF0ZShjdXJyZW50VGltZSkge1xuICAgICAgY29uc3QgZGVsdGFUaW1lID0gY3VycmVudFRpbWUgLSBsYXN0VXBkYXRlVGltZTtcbiAgXG4gICAgICBpZiAoZGVsdGFUaW1lID4gMTMwKSB7IFxuICAgICAgICBsYXN0VXBkYXRlVGltZSA9IGN1cnJlbnRUaW1lO1xuICBcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgZ2VuZXJhdGVJdGVtcygpO1xuICAgICAgICB1cGRhdGVJdGVtcygpO1xuICAgICAgfVxuICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIEl0ZW0oeCwgeSwgc3BlZWQpIHtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDsgLy8gQ3VycmVudCBmcmFtZSBpbmRleCBmb3Igcm90YXRpb25cbiAgICB9XG4gIFxuICAgIEl0ZW0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgdGhpcy5mcmFtZUluZGV4ID0gKHRoaXMuZnJhbWVJbmRleCArIDEpICUgNDsgLy8gQ3ljbGUgdGhyb3VnaCBmcmFtZXNcbiAgICB9XG4gIFxuICAgIEl0ZW0ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKHNub3dmbGFrZXNbdGhpcy5mcmFtZUluZGV4XSwgdGhpcy54LCB0aGlzLnksIDMzLCAzMyk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUl0ZW1zKCkge1xuICAgICAgY2xlYXIoKTtcbiAgICAgIHRpbWVyKys7XG4gIFxuICAgICAgaWYgKHRpbWVyICUgMTAwID09PSAwIHx8IGl0ZW1zLmxlbmd0aCA8IG1heEl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwKTtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMTtcbiAgXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh4LCAwLCBzcGVlZCk7XG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHRpbWVyID09PSAyMDApIHtcbiAgICAgICAgdGltZXIgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbXMoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgaXRlbS51cGRhdGUoKTtcbiAgICAgICAgaXRlbS5kcmF3KCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBhbmltYXRlKDApO1xuICB9KTtcbiAgIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtFQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0VBQzFELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRW5DSixNQUFNLENBQUNLLEtBQUssR0FBRyxHQUFHO0VBQ2xCTCxNQUFNLENBQUNNLE1BQU0sR0FBRyxHQUFHO0VBRW5CLE1BQU1DLEtBQUssR0FBRyxFQUFFO0VBQ2hCLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0VBQ2xCLElBQUlDLEtBQUssR0FBRyxDQUFDO0VBQ2IsSUFBSUMsY0FBYyxHQUFHLENBQUM7O0VBRXRCO0VBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQ2pCLElBQUlDLEtBQUssQ0FBQyxDQUFDO0VBQUU7RUFDYixJQUFJQSxLQUFLLENBQUMsQ0FBQztFQUFFO0VBQ2IsSUFBSUEsS0FBSyxDQUFDLENBQUM7RUFBRTtFQUNiLElBQUlBLEtBQUssQ0FBQyxDQUFDLENBQUU7RUFBQSxDQUNkO0VBRURELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxHQUFHLGlDQUFpQztFQUNyREYsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxHQUFHLEdBQUcsbUNBQW1DO0VBQ3ZERixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsR0FBRyxvQ0FBb0M7RUFDeERGLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxHQUFHLG9DQUFvQztFQUV4RCxTQUFTQyxLQUFLQSxDQUFBLEVBQUc7SUFDZlgsR0FBRyxDQUFDWSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWYsTUFBTSxDQUFDSyxLQUFLLEVBQUVMLE1BQU0sQ0FBQ00sTUFBTSxDQUFD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\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbm93bG9hZDIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;