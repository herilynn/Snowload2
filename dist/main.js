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

eval("window.addEventListener('load', () => {\n  const canvas = document.getElementById('backgroundCanvas');\n  const ctx = canvas.getContext('2d');\n  const snowballCanvas = document.getElementById('snowballCanvas');\n  const snowballCtx = snowballCanvas.getContext('2d');\n  snowballCanvas.width = snowballCanvas.offsetWidth;\n  snowballCanvas.height = snowballCanvas.offsetHeight;\n  const snowballRadius = 30;\n  const snowballY = snowballCanvas.height - snowballRadius;\n  function updateSnowballPosition() {\n    const currentTime = new Date();\n    const dailyMinutes = 24 * 60;\n    const x = (currentTime.getHours() * 60 + currentTime.getMinutes()) * (snowballCanvas.width / dailyMinutes);\n\n    // snowballCtx.clearRect(0, 0, snowballCanvas.width, snowballCanvas.height);\n    snowballCtx.beginPath();\n    snowballCtx.arc(x, snowballY, snowballRadius, 0, 2 * Math.PI);\n    snowballCtx.fillStyle = 'lightblue';\n    snowballCtx.fill();\n    snowballCtx.stroke();\n    requestAnimationFrame(updateSnowballPosition);\n  }\n  updateSnowballPosition();\n\n  //\n\n  const items = [];\n  const maxItems = 10;\n  let timer = 0;\n  let lastUpdateTime = 0;\n\n  // Preload images\n  const snowflakes = [new Image(),\n  // Original image\n  new Image(),\n  // Image at 90 degrees\n  new Image(),\n  // Image at 180 degrees\n  new Image() // Image at 270 degrees\n  ];\n  snowflakes[0].src = \"src/assets/loadingSnowflake.png\";\n  snowflakes[1].src = \"src/assets/loadingSnowflake90.png\";\n  snowflakes[2].src = \"src/assets/loadingSnowflake180.png\";\n  snowflakes[3].src = \"src/assets/loadingSnowflake270.png\";\n  function clear() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n  }\n  function animate(currentTime) {\n    const deltaTime = currentTime - lastUpdateTime;\n    if (deltaTime > 130) {\n      lastUpdateTime = currentTime;\n      clear();\n      generateItems();\n      updateItems();\n    }\n    requestAnimationFrame(animate);\n  }\n  function Item(x, y, speed) {\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.frameIndex = 0; // Current frame index for rotation\n  }\n  Item.prototype.update = function () {\n    this.y += this.speed;\n    this.frameIndex = (this.frameIndex + 1) % 4; // Cycle through frames\n  };\n  Item.prototype.draw = function () {\n    ctx.drawImage(snowflakes[this.frameIndex], this.x, this.y, 33, 33);\n  };\n  function generateItems() {\n    clear();\n    timer++;\n    if (timer % 10 === 0 || items.length < maxItems) {\n      const x = Math.random() * (canvas.width - 20);\n      const speed = Math.random() * 0.5 + 1;\n      const item = new Item(x, 0, speed);\n      items.push(item);\n    }\n    if (timer === 200) {\n      timer = 0;\n    }\n  }\n  function updateItems() {\n    for (let i = 0; i < items.length; i++) {\n      const item = items[i];\n      item.update();\n      item.draw();\n    }\n  }\n  animate(0);\n  // animateSnowball()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzbm93YmFsbENhbnZhcyIsInNub3diYWxsQ3R4Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInNub3diYWxsUmFkaXVzIiwic25vd2JhbGxZIiwidXBkYXRlU25vd2JhbGxQb3NpdGlvbiIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImRhaWx5TWludXRlcyIsIngiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXRlbXMiLCJtYXhJdGVtcyIsInRpbWVyIiwibGFzdFVwZGF0ZVRpbWUiLCJzbm93Zmxha2VzIiwiSW1hZ2UiLCJzcmMiLCJjbGVhciIsImNsZWFyUmVjdCIsImFuaW1hdGUiLCJkZWx0YVRpbWUiLCJnZW5lcmF0ZUl0ZW1zIiwidXBkYXRlSXRlbXMiLCJJdGVtIiwieSIsInNwZWVkIiwiZnJhbWVJbmRleCIsInByb3RvdHlwZSIsInVwZGF0ZSIsImRyYXciLCJkcmF3SW1hZ2UiLCJsZW5ndGgiLCJyYW5kb20iLCJpdGVtIiwicHVzaCIsImkiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nub3dsb2FkMi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kQ2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBzbm93YmFsbENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbm93YmFsbENhbnZhcycpO1xuICAgIGNvbnN0IHNub3diYWxsQ3R4ID0gc25vd2JhbGxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHNub3diYWxsQ2FudmFzLndpZHRoID0gc25vd2JhbGxDYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgc25vd2JhbGxDYW52YXMuaGVpZ2h0ID0gc25vd2JhbGxDYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3Qgc25vd2JhbGxSYWRpdXMgPSAzMDtcbiAgICBjb25zdCBzbm93YmFsbFkgPSBzbm93YmFsbENhbnZhcy5oZWlnaHQgLSBzbm93YmFsbFJhZGl1cztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNub3diYWxsUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZGFpbHlNaW51dGVzID0gMjQgKiA2MDsgXG5cbiAgICAgICAgY29uc3QgeCA9IChjdXJyZW50VGltZS5nZXRIb3VycygpICogNjAgKyBjdXJyZW50VGltZS5nZXRNaW51dGVzKCkpICogKHNub3diYWxsQ2FudmFzLndpZHRoIC8gZGFpbHlNaW51dGVzKTtcblxuICAgICAgICAvLyBzbm93YmFsbEN0eC5jbGVhclJlY3QoMCwgMCwgc25vd2JhbGxDYW52YXMud2lkdGgsIHNub3diYWxsQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIHNub3diYWxsQ3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBzbm93YmFsbEN0eC5hcmMoeCwgc25vd2JhbGxZLCBzbm93YmFsbFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBzbm93YmFsbEN0eC5maWxsU3R5bGUgPSAnbGlnaHRibHVlJztcbiAgICAgICAgc25vd2JhbGxDdHguZmlsbCgpO1xuICAgICAgICBzbm93YmFsbEN0eC5zdHJva2UoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU25vd2JhbGxQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlU25vd2JhbGxQb3NpdGlvbigpO1xuXG5cbiAgICAvL1xuICBcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IG1heEl0ZW1zID0gMTA7XG4gICAgbGV0IHRpbWVyID0gMDtcbiAgICBsZXQgbGFzdFVwZGF0ZVRpbWUgPSAwO1xuICBcbiAgICAvLyBQcmVsb2FkIGltYWdlc1xuICAgIGNvbnN0IHNub3dmbGFrZXMgPSBbXG4gICAgICBuZXcgSW1hZ2UoKSwgLy8gT3JpZ2luYWwgaW1hZ2VcbiAgICAgIG5ldyBJbWFnZSgpLCAvLyBJbWFnZSBhdCA5MCBkZWdyZWVzXG4gICAgICBuZXcgSW1hZ2UoKSwgLy8gSW1hZ2UgYXQgMTgwIGRlZ3JlZXNcbiAgICAgIG5ldyBJbWFnZSgpICAvLyBJbWFnZSBhdCAyNzAgZGVncmVlc1xuICAgIF07XG4gIFxuICAgIHNub3dmbGFrZXNbMF0uc3JjID0gXCJzcmMvYXNzZXRzL2xvYWRpbmdTbm93Zmxha2UucG5nXCI7XG4gICAgc25vd2ZsYWtlc1sxXS5zcmMgPSBcInNyYy9hc3NldHMvbG9hZGluZ1Nub3dmbGFrZTkwLnBuZ1wiO1xuICAgIHNub3dmbGFrZXNbMl0uc3JjID0gXCJzcmMvYXNzZXRzL2xvYWRpbmdTbm93Zmxha2UxODAucG5nXCI7XG4gICAgc25vd2ZsYWtlc1szXS5zcmMgPSBcInNyYy9hc3NldHMvbG9hZGluZ1Nub3dmbGFrZTI3MC5wbmdcIjtcbiAgXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBhbmltYXRlKGN1cnJlbnRUaW1lKSB7XG4gICAgICBjb25zdCBkZWx0YVRpbWUgPSBjdXJyZW50VGltZSAtIGxhc3RVcGRhdGVUaW1lO1xuICBcbiAgICAgIGlmIChkZWx0YVRpbWUgPiAxMzApIHsgXG4gICAgICAgIGxhc3RVcGRhdGVUaW1lID0gY3VycmVudFRpbWU7XG4gIFxuICAgICAgICBjbGVhcigpO1xuICAgICAgICBnZW5lcmF0ZUl0ZW1zKCk7XG4gICAgICAgIHVwZGF0ZUl0ZW1zKCk7XG4gICAgICB9XG4gIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gSXRlbSh4LCB5LCBzcGVlZCkge1xuICAgICAgdGhpcy54ID0geDtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICB0aGlzLmZyYW1lSW5kZXggPSAwOyAvLyBDdXJyZW50IGZyYW1lIGluZGV4IGZvciByb3RhdGlvblxuICAgIH1cbiAgXG4gICAgSXRlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICB0aGlzLmZyYW1lSW5kZXggPSAodGhpcy5mcmFtZUluZGV4ICsgMSkgJSA0OyAvLyBDeWNsZSB0aHJvdWdoIGZyYW1lc1xuICAgIH1cbiAgXG4gICAgSXRlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2Uoc25vd2ZsYWtlc1t0aGlzLmZyYW1lSW5kZXhdLCB0aGlzLngsIHRoaXMueSwgMzMsIDMzKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSXRlbXMoKSB7XG4gICAgICBjbGVhcigpO1xuICAgICAgdGltZXIrKztcbiAgXG4gICAgICBpZiAodGltZXIgJSAxMCA9PT0gMCB8fCBpdGVtcy5sZW5ndGggPCBtYXhJdGVtcykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMCk7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDAuNSArIDE7XG4gIFxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0oeCwgMCwgc3BlZWQpO1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICBcbiAgICAgIGlmICh0aW1lciA9PT0gMjAwKSB7XG4gICAgICAgIHRpbWVyID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIGl0ZW0udXBkYXRlKCk7XG4gICAgICAgIGl0ZW0uZHJhdygpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgYW5pbWF0ZSgwKTtcbiAgICAvLyBhbmltYXRlU25vd2JhbGwoKVxuICB9KTtcbiAgIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtFQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0VBQzFELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRW5DLE1BQU1DLGNBQWMsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDaEUsTUFBTUksV0FBVyxHQUFHRCxjQUFjLENBQUNELFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFFbkRDLGNBQWMsQ0FBQ0UsS0FBSyxHQUFHRixjQUFjLENBQUNHLFdBQVc7RUFDakRILGNBQWMsQ0FBQ0ksTUFBTSxHQUFHSixjQUFjLENBQUNLLFlBQVk7RUFFbkQsTUFBTUMsY0FBYyxHQUFHLEVBQUU7RUFDekIsTUFBTUMsU0FBUyxHQUFHUCxjQUFjLENBQUNJLE1BQU0sR0FBR0UsY0FBYztFQUV4RCxTQUFTRSxzQkFBc0JBLENBQUEsRUFBRztJQUM5QixNQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsTUFBTUMsWUFBWSxHQUFHLEVB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\n//# sourceURL=webpack-internal:///./src/index.js\n");

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