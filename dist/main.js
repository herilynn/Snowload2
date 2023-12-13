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

eval("window.addEventListener('load', () => {\n  const canvas = document.getElementById('backgroundCanvas');\n  const ctx = canvas.getContext('2d');\n  const snowballCanvas = document.getElementById('snowballCanvas');\n  const snowballCtx = snowballCanvas.getContext('2d');\n  const countdown = document.getElementById('timer');\n  const target = new Date('January 1, 2024 00:00:00').getTime();\n  function updateTimer() {\n    const currentTime = new Date().getTime();\n    const timeRemaining = target - currentTime;\n    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));\n    const hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n    const minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));\n    const seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);\n    countdown.innerHTML = `Time until New Years: ${days}d ${hours}h ${minutes}m ${seconds}s`;\n  }\n\n  // Update the timer every second\n  setInterval(updateTimer, 1000);\n  snowballCanvas.width = snowballCanvas.offsetWidth;\n  snowballCanvas.height = snowballCanvas.offsetHeight;\n  const snowballRadius = 30;\n  const snowballY = snowballCanvas.height - snowballRadius;\n  const elf = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];\n  elf[0].src = \"src/assets/link1.png\";\n  elf[1].src = \"src/assets/link2.png\";\n  elf[2].src = \"src/assets/link3.png\";\n  elf[3].src = \"src/assets/link4.png\";\n  elf[4].src = \"src/assets/link5.png\";\n  elf[5].src = \"src/assets/link6.png\";\n  function animateElf(currentTime) {\n    for (let i = 0; i < elf.length; i++) {\n      const tempElf = i * 50;\n      snowballCtx.drawImage(elf[i], tempElf, snowballY - 50, 50, 50);\n    }\n    requestAnimationFrame(animateElf);\n  }\n  function updateSnowballPosition() {\n    const currentTime = new Date();\n    const dailyMinutes = 24 * 60;\n    const x = (currentTime.getHours() * 60 + currentTime.getMinutes()) * (snowballCanvas.width / dailyMinutes);\n    const snowballSize = snowballRadius + x / snowballCanvas.width * 50;\n    snowballCtx.clearRect(0, 0, snowballCanvas.width, snowballCanvas.height);\n    snowballCtx.beginPath();\n    snowballCtx.arc(x, snowballY, snowballSize, 0, 2 * Math.PI);\n    snowballCtx.fillStyle = 'lightblue';\n    snowballCtx.fill();\n    snowballCtx.stroke();\n    requestAnimationFrame(updateSnowballPosition);\n  }\n  updateSnowballPosition();\n  // animateElf()\n\n  //\n\n  const items = [];\n  const maxItems = 10;\n  let timer = 0;\n  let lastUpdateTime = 0;\n\n  // Preload images\n  const snowflakes = [new Image(),\n  // Original image\n  new Image(),\n  // Image at 90 degrees\n  new Image(),\n  // Image at 180 degrees\n  new Image() // Image at 270 degrees\n  ];\n  snowflakes[0].src = \"src/assets/loadingSnowflake.png\";\n  snowflakes[1].src = \"src/assets/loadingSnowflake90.png\";\n  snowflakes[2].src = \"src/assets/loadingSnowflake180.png\";\n  snowflakes[3].src = \"src/assets/loadingSnowflake270.png\";\n  function clear() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n  }\n  function animate(currentTime) {\n    const diffTime = currentTime - lastUpdateTime;\n    if (diffTime > 120) {\n      //determines how quickly image updates\n      lastUpdateTime = currentTime;\n      clear();\n      generateItems();\n      updateItems();\n    }\n    requestAnimationFrame(animate);\n  }\n  function Item(x, y, speed) {\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.frameIndex = 0; // Current frame index for rotation\n  }\n  Item.prototype.update = function () {\n    this.y += this.speed;\n    this.frameIndex = (this.frameIndex + 1) % 4; // Cycle through frames\n  };\n  Item.prototype.draw = function () {\n    ctx.drawImage(snowflakes[this.frameIndex], this.x, this.y, 33, 33);\n  };\n  function generateItems() {\n    clear();\n    timer++;\n    if (timer % 10 === 0 || items.length < maxItems) {\n      const x = Math.random() * (canvas.width - 20);\n      const speed = Math.random() * 0.5 + 1;\n      const item = new Item(x, 0, speed);\n      items.push(item);\n    }\n    if (timer === 200) {\n      timer = 0;\n    }\n  }\n  function updateItems() {\n    for (let i = 0; i < items.length; i++) {\n      const item = items[i];\n      item.update();\n      item.draw();\n    }\n  }\n  animate(0);\n  // animateSnowball()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzbm93YmFsbENhbnZhcyIsInNub3diYWxsQ3R4IiwiY291bnRkb3duIiwidGFyZ2V0IiwiRGF0ZSIsImdldFRpbWUiLCJ1cGRhdGVUaW1lciIsImN1cnJlbnRUaW1lIiwidGltZVJlbWFpbmluZyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaW5uZXJIVE1MIiwic2V0SW50ZXJ2YWwiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic25vd2JhbGxSYWRpdXMiLCJzbm93YmFsbFkiLCJlbGYiLCJJbWFnZSIsInNyYyIsImFuaW1hdGVFbGYiLCJpIiwibGVuZ3RoIiwidGVtcEVsZiIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVNub3diYWxsUG9zaXRpb24iLCJkYWlseU1pbnV0ZXMiLCJ4IiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwic25vd2JhbGxTaXplIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiaXRlbXMiLCJtYXhJdGVtcyIsInRpbWVyIiwibGFzdFVwZGF0ZVRpbWUiLCJzbm93Zmxha2VzIiwiY2xlYXIiLCJhbmltYXRlIiwiZGlmZlRpbWUiLCJnZW5lcmF0ZUl0ZW1zIiwidXBkYXRlSXRlbXMiLCJJdGVtIiwieSIsInNwZWVkIiwiZnJhbWVJbmRleCIsInByb3RvdHlwZSIsInVwZGF0ZSIsImRyYXciLCJyYW5kb20iLCJpdGVtIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25vd2xvYWQyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRDYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHNub3diYWxsQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3diYWxsQ2FudmFzJyk7XG4gICAgY29uc3Qgc25vd2JhbGxDdHggPSBzbm93YmFsbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IGNvdW50ZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lcicpO1xuICAgIGNvbnN0IHRhcmdldCA9IG5ldyBEYXRlKCdKYW51YXJ5IDEsIDIwMjQgMDA6MDA6MDAnKS5nZXRUaW1lKCk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gdGFyZ2V0IC0gY3VycmVudFRpbWU7XG4gIFxuICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwICogMjQpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVSZW1haW5pbmcgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgXG4gICAgICBjb3VudGRvd24uaW5uZXJIVE1MID0gYFRpbWUgdW50aWwgTmV3IFllYXJzOiAke2RheXN9ZCAke2hvdXJzfWggJHttaW51dGVzfW0gJHtzZWNvbmRzfXNgO1xuICAgIH1cbiAgXG4gICAgLy8gVXBkYXRlIHRoZSB0aW1lciBldmVyeSBzZWNvbmRcbiAgICBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gIFxuXG5cbiAgICBzbm93YmFsbENhbnZhcy53aWR0aCA9IHNub3diYWxsQ2FudmFzLm9mZnNldFdpZHRoO1xuICAgIHNub3diYWxsQ2FudmFzLmhlaWdodCA9IHNub3diYWxsQ2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHNub3diYWxsUmFkaXVzID0gMzA7XG4gICAgY29uc3Qgc25vd2JhbGxZID0gc25vd2JhbGxDYW52YXMuaGVpZ2h0IC0gc25vd2JhbGxSYWRpdXM7XG5cbiAgICBjb25zdCBlbGYgPSBbXG4gICAgICBuZXcgSW1hZ2UoKSwgXG4gICAgICBuZXcgSW1hZ2UoKSwgXG4gICAgICBuZXcgSW1hZ2UoKSwgXG4gICAgICBuZXcgSW1hZ2UoKSxcbiAgICAgIG5ldyBJbWFnZSgpLFxuICAgICAgbmV3IEltYWdlKCkgIFxuICAgIF07XG4gIFxuICAgIGVsZlswXS5zcmMgPSBcInNyYy9hc3NldHMvbGluazEucG5nXCI7XG4gICAgZWxmWzFdLnNyYyA9IFwic3JjL2Fzc2V0cy9saW5rMi5wbmdcIjtcbiAgICBlbGZbMl0uc3JjID0gXCJzcmMvYXNzZXRzL2xpbmszLnBuZ1wiO1xuICAgIGVsZlszXS5zcmMgPSBcInNyYy9hc3NldHMvbGluazQucG5nXCI7XG4gICAgZWxmWzRdLnNyYyA9IFwic3JjL2Fzc2V0cy9saW5rNS5wbmdcIjtcbiAgICBlbGZbNV0uc3JjID0gXCJzcmMvYXNzZXRzL2xpbms2LnBuZ1wiO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUVsZihjdXJyZW50VGltZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcEVsZiA9IGkgKiA1MFxuICAgICAgICBzbm93YmFsbEN0eC5kcmF3SW1hZ2UoZWxmW2ldLCB0ZW1wRWxmLCBzbm93YmFsbFkgLSA1MCwgNTAsIDUwKVxuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVFbGYpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU25vd2JhbGxQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGRhaWx5TWludXRlcyA9IDI0ICogNjA7IFxuXG4gICAgICAgIGNvbnN0IHggPSAoY3VycmVudFRpbWUuZ2V0SG91cnMoKSAqIDYwICsgY3VycmVudFRpbWUuZ2V0TWludXRlcygpKSAqIChzbm93YmFsbENhbnZhcy53aWR0aCAvIGRhaWx5TWludXRlcyk7XG5cbiAgICAgICAgY29uc3Qgc25vd2JhbGxTaXplID0gc25vd2JhbGxSYWRpdXMgKyAoeCAvIHNub3diYWxsQ2FudmFzLndpZHRoKSAqIDUwOyBcblxuXG4gICAgICAgIHNub3diYWxsQ3R4LmNsZWFyUmVjdCgwLCAwLCBzbm93YmFsbENhbnZhcy53aWR0aCwgc25vd2JhbGxDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgc25vd2JhbGxDdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHNub3diYWxsQ3R4LmFyYyh4LCBzbm93YmFsbFksIHNub3diYWxsU2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBzbm93YmFsbEN0eC5maWxsU3R5bGUgPSAnbGlnaHRibHVlJztcbiAgICAgICAgc25vd2JhbGxDdHguZmlsbCgpO1xuICAgICAgICBzbm93YmFsbEN0eC5zdHJva2UoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU25vd2JhbGxQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlU25vd2JhbGxQb3NpdGlvbigpO1xuICAgIC8vIGFuaW1hdGVFbGYoKVxuXG5cbiAgICAvL1xuICBcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IG1heEl0ZW1zID0gMTA7XG4gICAgbGV0IHRpbWVyID0gMDtcbiAgICBsZXQgbGFzdFVwZGF0ZVRpbWUgPSAwO1xuICBcbiAgICAvLyBQcmVsb2FkIGltYWdlc1xuICAgIGNvbnN0IHNub3dmbGFrZXMgPSBbXG4gICAgICBuZXcgSW1hZ2UoKSwgLy8gT3JpZ2luYWwgaW1hZ2VcbiAgICAgIG5ldyBJbWFnZSgpLCAvLyBJbWFnZSBhdCA5MCBkZWdyZWVzXG4gICAgICBuZXcgSW1hZ2UoKSwgLy8gSW1hZ2UgYXQgMTgwIGRlZ3JlZXNcbiAgICAgIG5ldyBJbWFnZSgpICAvLyBJbWFnZSBhdCAyNzAgZGVncmVlc1xuICAgIF07XG4gIFxuICAgIHNub3dmbGFrZXNbMF0uc3JjID0gXCJzcmMvYXNzZXRzL2xvYWRpbmdTbm93Zmxha2UucG5nXCI7XG4gICAgc25vd2ZsYWtlc1sxXS5zcmMgPSBcInNyYy9hc3NldHMvbG9hZGluZ1Nub3dmbGFrZTkwLnBuZ1wiO1xuICAgIHNub3dmbGFrZXNbMl0uc3JjID0gXCJzcmMvYXNzZXRzL2xvYWRpbmdTbm93Zmxha2UxODAucG5nXCI7XG4gICAgc25vd2ZsYWtlc1szXS5zcmMgPSBcInNyYy9hc3NldHMvbG9hZGluZ1Nub3dmbGFrZTI3MC5wbmdcIjtcbiAgXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBhbmltYXRlKGN1cnJlbnRUaW1lKSB7XG4gICAgICBjb25zdCBkaWZmVGltZSA9IGN1cnJlbnRUaW1lIC0gbGFzdFVwZGF0ZVRpbWU7XG4gIFxuICAgICAgaWYgKGRpZmZUaW1lID4gMTIwKSB7IC8vZGV0ZXJtaW5lcyBob3cgcXVpY2tseSBpbWFnZSB1cGRhdGVzXG4gICAgICAgIGxhc3RVcGRhdGVUaW1lID0gY3VycmVudFRpbWU7XG4gIFxuICAgICAgICBjbGVhcigpO1xuICAgICAgICBnZW5lcmF0ZUl0ZW1zKCk7XG4gICAgICAgIHVwZGF0ZUl0ZW1zKCk7XG4gICAgICB9XG4gIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gSXRlbSh4LCB5LCBzcGVlZCkge1xuICAgICAgdGhpcy54ID0geDtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICB0aGlzLmZyYW1lSW5kZXggPSAwOyAvLyBDdXJyZW50IGZyYW1lIGluZGV4IGZvciByb3RhdGlvblxuICAgIH1cbiAgXG4gICAgSXRlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICB0aGlzLmZyYW1lSW5kZXggPSAodGhpcy5mcmFtZUluZGV4ICsgMSkgJSA0OyAvLyBDeWNsZSB0aHJvdWdoIGZyYW1lc1xuICAgIH1cbiAgXG4gICAgSXRlbS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2Uoc25vd2ZsYWtlc1t0aGlzLmZyYW1lSW5kZXhdLCB0aGlzLngsIHRoaXMueSwgMzMsIDMzKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSXRlbXMoKSB7XG4gICAgICBjbGVhcigpO1xuICAgICAgdGltZXIrKztcbiAgXG4gICAgICBpZiAodGltZXIgJSAxMCA9PT0gMCB8fCBpdGVtcy5sZW5ndGggPCBtYXhJdGVtcykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMCk7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDAuNSArIDE7XG4gIFxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0oeCwgMCwgc3BlZWQpO1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICBcbiAgICAgIGlmICh0aW1lciA9PT0gMjAwKSB7XG4gICAgICAgIHRpbWVyID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIGl0ZW0udXBkYXRlKCk7XG4gICAgICAgIGl0ZW0uZHJhdygpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgYW5pbWF0ZSgwKTtcbiAgICAvLyBhbmltYXRlU25vd2JhbGwoKVxuICB9KTtcbiAgIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtFQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0VBQzFELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRW5DLE1BQU1DLGNBQWMsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDaEUsTUFBTUksV0FBVyxHQUFHRCxjQUFjLENBQUNELFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbkQsTUFBTUcsU0FBUyxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFDbEQsTUFBTU0sTUFBTSxHQUFHLElBQUlDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQztFQUU3RCxTQUFTQyxXQUFXQSxDQUFBLEVBQUc7SUFDckIsTUFBTUMsV0FBVyxHQUFHLElBQUlILElBQUksQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLE1BQU1HLGFBQWEsR0FBR0wsTUFBTSxHQUFHSSxXQUFXO0lBRTFDLE1BQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILGFBQWEs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\n//# sourceURL=webpack-internal:///./src/index.js\n");

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