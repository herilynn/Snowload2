window.addEventListener('load', () => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = 400;
    canvas.height = 400;
  
    const items = [];
    const maxItems = 8;
    let timer = 0;
    let lastUpdateTime = 0;
  
    // Preload images
    const snowflakes = [
      new Image(), // Original image
      new Image(), // Image at 90 degrees
      new Image(), // Image at 180 degrees
      new Image()  // Image at 270 degrees
    ];
  
    snowflakes[0].src = "src/assets/loadingSnowflake.png";
    snowflakes[1].src = "src/assets/loadingSnowflake90.png";
    snowflakes[2].src = "src/assets/loadingSnowflake180.png";
    snowflakes[3].src = "src/assets/loadingSnowflake270.png";
  
    function clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function animate(currentTime) {
      const deltaTime = currentTime - lastUpdateTime;
  
      if (deltaTime > 130) { 
        lastUpdateTime = currentTime;
  
        clear();
        generateItems();
        updateItems();
      }
  
      requestAnimationFrame(animate);
    }
  
    function Item(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.frameIndex = 0; // Current frame index for rotation
    }
  
    Item.prototype.update = function () {
      this.y += this.speed;
      this.frameIndex = (this.frameIndex + 1) % 4; // Cycle through frames
    }
  
    Item.prototype.draw = function () {
      ctx.drawImage(snowflakes[this.frameIndex], this.x, this.y, 33, 33);
    }
  
    function generateItems() {
      clear();
      timer++;
  
      if (timer % 100 === 0 || items.length < maxItems) {
        const x = Math.random() * (canvas.width - 20);
        const speed = Math.random() * 0.5 + 1;
  
        const item = new Item(x, 0, speed);
        items.push(item);
      }
  
      if (timer === 200) {
        timer = 0;
      }
    }
  
    function updateItems() {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.update();
        item.draw();
      }
    }
  
    animate(0);
  });
  