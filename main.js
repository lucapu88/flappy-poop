let gameCharacter;
let myObstacles = [];
let myScore;
let myScoreNumber;

function startGame() {
  gameCharacter = new component(55, 40, '', 10, 120, 'img');
  gameCharacter.gravity = 0.05;
  myScore = new component(
    '30px',
    "'Lucida Console', 'Courier New', monospace",
    '#202020',
    20,
    30,
    'text'
  );
  document.getElementById('start-game').style.display = 'none';
  this.saveNickname(document.getElementById('nickname').value);
  myGameArea.start();
}

function saveNickname(nickname) {
  window.localStorage.setItem('nickname', nickname);
  document.getElementById('nickname').style.display = 'none';
}

async function getNickname() {
  const localNickname = await localStorage.getItem('nickname');
  localNickname
    ? (document.getElementById('nickname').value = localNickname)
    : (document.getElementById('nickname').placeholder = 'Enter your nickname');
}

let myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 750;
    this.canvas.height = 380;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y, type) {
  this.type = type;
  this.score = 0;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.update = function () {
    ctx = myGameArea.context;

    if (this.type === 'text') {
      ctx.font = this.width + ' ' + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else if (this.type === 'img') {
      let poo_image = new Image();
      poo_image.src = 'img/flying_poop.webp';
      ctx.drawImage(poo_image, this.x, this.y, width, height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
    this.hitTop();
  };
  this.hitBottom = function () {
    let rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
  };
  this.hitTop = function () {
    let rockbottom = myGameArea.canvas.height - this.height;
    if (this.y < 0) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
  };

  this.crashWith = function (otherobj) {
    let myleft = this.x;
    let myright = this.x + this.width - 4;
    let mytop = this.y + 10;
    let mybottom = this.y + this.height - 4;
    let otherleft = otherobj.x;
    let otherright = otherobj.x + otherobj.width;
    let othertop = otherobj.y;
    let otherbottom = otherobj.y + otherobj.height;
    let crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    if (crash) {
      document.getElementById('start-game').style.backgroundImage =
        "url('img/game-over.webp')";
      document.getElementById('start-game').style.display = 'flex';
      document.getElementById('retry-btn').style.display = 'block';
      document.getElementById('start-btn').style.display = 'none';
      document.getElementById('label-nickname').style.display = 'none';
      document.getElementById('score-text').innerText = myScore.text;
    } else {
      document.getElementById('start-game').style.display = 'none';
      document.getElementById('retry-btn').style.display = 'none';
    }
    return crash;
  };
}

function updateGameArea() {
  let x, height, gap, minHeight, maxHeight, minGap, maxGap;
  // let speed =
  //   this.myScoreNumber < 500 ? -1 : this.myScoreNumber < 1000 ? -1.5 : -2;
  // let intervall = speed === -1 ? 200 : speed === -1.5 ? 150 : 100;
  let speed = this.myScoreNumber < 1500 ? -1.5 : -2.4; //VELOCITÀ DI SCORRIMENTO OSTACOLI (PIU DIMINUISCI PIÙ VA VELOCE)
  let intervall = speed === -1.5 ? 160 : 120; //DISTANZA TRA GLI OSTACOLI
  let dinamicMinGap = intervall === 180 ? 60 : 57; //DISTANZA MINIMA TRA UN OSTACOLO E L'ALTRO
  let dinamicMaxGap = intervall === 180 ? 150 : 120; //DISTANZA MASSIMA TRA UN OSTACOLO E L'ALTRO

  for (i = 0; i < myObstacles.length; i += 1) {
    if (gameCharacter.crashWith(myObstacles[i])) {
      return;
    }
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(intervall)) {
    x = myGameArea.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    minGap = dinamicMinGap;
    maxGap = dinamicMaxGap;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new component(35, height, '#964E00', x, 0));
    myObstacles.push(
      new component(35, x - height - gap, '#6A2800', x, height + gap)
    );
  }

  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += speed;
    myObstacles[i].update();
  }
  this.updateScore();
  myScore.update();
  gameCharacter.newPos();
  gameCharacter.update();
}

function updateScore() {
  const score = myGameArea.frameNo - 490; //PUNTO DI INIZIO PARTENZA PUNTEGGIO
  this.myScoreNumber = score;
  myScore.text = `SCORE: ${score < 0 ? 0 : score}`;
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}

function accelerate(n) {
  return (gameCharacter.gravity = n);
}

const flyPoop = document.getElementById('fly-poop');

flyPoop.addEventListener(
  'touchstart',
  function (event) {
    event.preventDefault();
    accelerate(-0.4);
  },
  false
);
flyPoop.addEventListener(
  'touchend',
  function (event) {
    event.preventDefault();
    accelerate(0.1);
  },
  false
);
