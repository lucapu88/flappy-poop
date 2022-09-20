let gameCharacter;
let myObstacles = [];
let myScore;
let myScoreNumber;
let infoModal = document.getElementById('info-modal');
let rankingModal = document.getElementById('ranking-modal');
let insertNicknameModal = document.getElementById('no-nickname-modal');
let infoBtn = document.getElementById('info-btn');
let rankingBtn = document.getElementById('ranking-btn');
let infoClose = document.getElementsByClassName('close')[0];
let rankingClose = document.getElementsByClassName('close')[1];
let insertNicknameClose = document.getElementsByClassName('close')[2];
let audioIconPlay = false;
let noNickname = false;

function startGame() {
  this.saveNickname(document.getElementById('nickname').value);

  if (noNickname) {
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
    myGameArea.start();
  }
}

function saveNickname(nickname) {
  const nickNameTrim = nickname.trim();
  if (!nickNameTrim) {
    //se non viene inserito un nickname lancia un avviso.
    insertNicknameModal.style.display = 'block';
    noNickname = false;
  } else {
    window.localStorage.setItem('nickname', nickNameTrim);
    document.getElementById('nickname').style.display = 'none';
    noNickname = true;
  }
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
    this.canvas.height = 390;
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
      // ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.beginPath();
      //ctx.roundRect(this.x, this.y, this.width, this.height, [10]);
      roundRect(ctx, this.x, this.y, this.width, this.height, 10, true);
      ctx.fill();
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

  const gameOver = () => {
    document.getElementById('start-game').style.backgroundImage =
      "url('img/game-over.webp')";
    document.getElementById('start-game').style.display = 'flex';
    document.getElementById('start-game').style.marginTop = '10px';
    document.getElementById('retry-btn').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('label-nickname').style.display = 'none';
    document.getElementById('audio-btn').style.display = 'none';
    document.getElementById('score-text').innerText = myScore.text;
    infoBtn.style.display = 'none';
    rankingBtn.style.display = 'none';
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
      gameOver();
    } else {
      document.getElementById('start-game').style.display = 'none';
      document.getElementById('retry-btn').style.display = 'none';
    }
    return crash;
  };
}

function roundRect(
  ctx,
  x,
  y,
  width,
  height,
  radius = 5,
  fill = false,
  stroke = true
) {
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    radius = { ...{ tl: 0, tr: 0, br: 0, bl: 0 }, ...radius };
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

const randomIntForIncreaseSpeed = Math.floor(
  Math.random() * (4150 - 2400 + 1) + 2400
);
const randomIntForChangeAsshole = Math.floor(
  Math.random() * (7000 - 6000 + 1) + 6000
);

function updateGameArea() {
  let x, height, gap, minHeight, maxHeight, minGap, maxGap;

  let speed = this.myScoreNumber < randomIntForIncreaseSpeed ? -1.8 : -3.8; //VELOCITÀ DI SCORRIMENTO OSTACOLI (PIU DIMINUISCI PIÙ VA VELOCE)
  let intervall = speed === -1.8 ? 150 : 95; //DISTANZA TRA GLI OSTACOLI ASSE X
  let dinamicMinGap = 60; //DISTANZA MINIMA TRA UN OSTACOLO E L'ALTRO ASSE Y
  let dinamicMaxGap = intervall === 150 ? 120 : 85; //DISTANZA MASSIMA TRA UN OSTACOLO E L'ALTRO ASSE Y

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
    maxHeight = 270;
    height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    minGap = dinamicMinGap;
    maxGap = dinamicMaxGap;
    const ifScoreGoesUpLot = this.myScoreNumber > randomIntForChangeAsshole;
    const assholeWidth = ifScoreGoesUpLot ? 75 : 45;
    const topAssholeColor = ifScoreGoesUpLot ? '#744009' : '#964E00';
    const bottomAssholeColor = ifScoreGoesUpLot ? '#451b00' : '#6A2800';

    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(
      new component(assholeWidth, height, topAssholeColor, x, 0)
    );
    myObstacles.push(
      new component(
        assholeWidth,
        x - height - gap,
        bottomAssholeColor,
        x,
        height + gap
      )
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
  const score = myGameArea.frameNo - 410; //PUNTO DI PARTENZA PUNTEGGIO
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

function soundFart() {
  if (audioIconPlay && audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

function shareLink() {
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=io.kodular.caputoluca88.Shopping_List';
  const copied = document.getElementById('link-copied');

  navigator.clipboard.writeText(playStoreUrl);
  document.addEventListener('copy', function (e) {
    e.clipboardData.setData('text/plain', playStoreUrl);
    e.preventDefault();
  });
  document.execCommand('copy');

  copied.style.display = 'block';
  setTimeout(() => (copied.style.display = 'none'), 4500);
}

//>>>>>>>>>>>>>>>>>>>>>> PER MOBILE
const flyPoop = document.getElementById('fly-poop');
flyPoop.addEventListener(
  'touchstart',
  function (event) {
    event.preventDefault();
    accelerate(-0.4);
    flyPoop.style.boxShadow = '0px 0px 35px 6px #000000';
  },
  false
);
flyPoop.addEventListener(
  'touchend',
  function (event) {
    event.preventDefault();
    accelerate(0.15);
    flyPoop.style.boxShadow = 'none';
  },
  false
);
flyPoop.addEventListener('touchend', soundFart);

//>>>>>>>>>>>>>>>> MODALE
infoBtn.onclick = function () {
  infoModal.style.display = 'block';
};

infoClose.onclick = function () {
  infoModal.style.display = 'none';
};

rankingBtn.onclick = function () {
  rankingModal.style.display = 'block';
};

rankingClose.onclick = function () {
  rankingModal.style.display = 'none';
};

insertNicknameClose.onclick = function () {
  insertNicknameModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == infoModal) {
    infoModal.style.display = 'none';
  }
  if (event.target == rankingModal) {
    rankingModal.style.display = 'none';
  }
  if (event.target == insertNicknameModal) {
    insertNicknameModal.style.display = 'none';
  }
};

//>>>>>>>>>>>>>>>>>>>>> AUDIO
function toggleAudio() {
  const audioIcon = document.getElementById('audio-icon');
  audio.autoplay = true;
  audioIconPlay = !audioIconPlay;
  if (audioIconPlay) {
    audioIcon.src = 'img/sound-on.webp';
  } else {
    audioIcon.src = 'img/sound-off.webp';
  }
}
