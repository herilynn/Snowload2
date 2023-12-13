window.addEventListener('load', () => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    const snowballCanvas = document.getElementById('snowballCanvas');
    const snowballCtx = snowballCanvas.getContext('2d');
    const countdown = document.getElementById('timer');
    const target = new Date('January 1, 2024 00:00:00').getTime();

    function updateTimer() {
      const currentTime = new Date().getTime();
      const timeRemaining = target - currentTime;
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      countdown.innerHTML = `Time until New Years: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    // Update the timer every second
    setInterval(updateTimer, 1000);
  


    snowballCanvas.width = snowballCanvas.offsetWidth;
    snowballCanvas.height = snowballCanvas.offsetHeight;

    const snowballRadius = 30;
    const snowballY = snowballCanvas.height - snowballRadius;

    const elf = [
      new Image(), 
      new Image(), 
      new Image(), 
      new Image(),
      new Image(),
      new Image()  
    ];
  
    elf[0].src = "src/assets/link1.png";
    elf[1].src = "src/assets/link2.png";
    elf[2].src = "src/assets/link3.png";
    elf[3].src = "src/assets/link4.png";
    elf[4].src = "src/assets/link5.png";
    elf[5].src = "src/assets/link6.png";

    function animateElf(currentTime) {
      for (let i = 0; i < elf.length; i++) {
        const tempElf = i * 50
        snowballCtx.drawImage(elf[i], tempElf, snowballY - 50, 50, 50)
      }
      requestAnimationFrame(animateElf);
    }


    function updateSnowballPosition() {
        const currentTime = new Date();

        const dailyMinutes = 24 * 60; 

        const x = (currentTime.getHours() * 60 + currentTime.getMinutes()) * (snowballCanvas.width / dailyMinutes);

        const snowballSize = snowballRadius + (x / snowballCanvas.width) * 50; 


        snowballCtx.clearRect(0, 0, snowballCanvas.width, snowballCanvas.height);
        snowballCtx.beginPath();
        snowballCtx.arc(x, snowballY, snowballSize, 0, 2 * Math.PI);
        snowballCtx.fillStyle = 'lightblue';
        snowballCtx.fill();
        snowballCtx.stroke();

        requestAnimationFrame(updateSnowballPosition);
    }

    updateSnowballPosition();
    // animateElf()


    //
  
    const items = [];
    const maxItems = 10;
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
      const diffTime = currentTime - lastUpdateTime;
  
      if (diffTime > 120) { //determines how quickly image updates
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
  
      if (timer % 10 === 0 || items.length < maxItems) {
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
    // animateSnowball()
  });
  