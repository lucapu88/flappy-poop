const _0x2a4098 = _0x41ba;
(function (_0x575a95, _0xfff9ad) {
  const _0x1fb965 = _0x41ba,
    _0x2d04b4 = _0x575a95();
  while (!![]) {
    try {
      const _0xe3215a =
        (parseInt(_0x1fb965(0x104)) / 0x1) *
          (parseInt(_0x1fb965(0x106)) / 0x2) +
        (-parseInt(_0x1fb965(0x11e)) / 0x3) *
          (-parseInt(_0x1fb965(0xee)) / 0x4) +
        -parseInt(_0x1fb965(0xc2)) / 0x5 +
        (-parseInt(_0x1fb965(0x120)) / 0x6) *
          (parseInt(_0x1fb965(0xbd)) / 0x7) +
        parseInt(_0x1fb965(0xf3)) / 0x8 +
        parseInt(_0x1fb965(0xe8)) / 0x9 +
        (parseInt(_0x1fb965(0xb8)) / 0xa) * (parseInt(_0x1fb965(0xf0)) / 0xb);
      if (_0xe3215a === _0xfff9ad) break;
      else _0x2d04b4['push'](_0x2d04b4['shift']());
    } catch (_0x5f0608) {
      _0x2d04b4['push'](_0x2d04b4['shift']());
    }
  }
})(_0xd852, 0xe0eec);
let gameCharacter,
  myObstacles = [],
  myScore,
  myScoreNumber,
  infoModal = document[_0x2a4098(0xf6)]('info-modal'),
  rankingModal = document[_0x2a4098(0xf6)](_0x2a4098(0x100)),
  insertNicknameModal = document[_0x2a4098(0xf6)](_0x2a4098(0xac)),
  infoBtn = document[_0x2a4098(0xf6)](_0x2a4098(0x11d)),
  rankingBtn = document[_0x2a4098(0xf6)]('ranking-btn'),
  infoClose = document['getElementsByClassName']('close')[0x0],
  rankingClose = document[_0x2a4098(0xe2)](_0x2a4098(0xf4))[0x1],
  insertNicknameClose = document[_0x2a4098(0xe2)](_0x2a4098(0xf4))[0x2],
  startBtn = document[_0x2a4098(0xf6)](_0x2a4098(0x11a)),
  audioIconPlay = ![],
  noNickname = ![],
  iosDevice = ![],
  punt;
function startGame() {
  const _0x22d64d = _0x2a4098;
  this[_0x22d64d(0xe7)](
    document[_0x22d64d(0xf6)](_0x22d64d(0x109))[_0x22d64d(0xc8)]
  ),
    soundFart(),
    noNickname &&
      ((gameCharacter = new component(0x37, 0x28, '', 0xa, 0x78, 'img')),
      (gameCharacter['gravity'] = 0.05),
      (myScore = new component(
        _0x22d64d(0x117),
        _0x22d64d(0xbc),
        _0x22d64d(0xff),
        0x14,
        0x1e,
        'text'
      )),
      (document[_0x22d64d(0xf6)](_0x22d64d(0xd4))[_0x22d64d(0xf5)][
        _0x22d64d(0xf7)
      ] = _0x22d64d(0xe4)),
      gameCharacter && myGameArea[_0x22d64d(0xe3)]());
}
function saveNickname(_0x242ec3) {
  const _0x3adf6c = _0x2a4098,
    _0x5b6cf4 = _0x242ec3[_0x3adf6c(0xc6)]();
  !_0x5b6cf4
    ? ((insertNicknameModal[_0x3adf6c(0xf5)]['display'] = _0x3adf6c(0xfa)),
      (noNickname = ![]))
    : (window['localStorage']['setItem'](_0x3adf6c(0x109), _0x5b6cf4),
      (document['getElementById'](_0x3adf6c(0x109))['style'][_0x3adf6c(0xf7)] =
        'none'),
      (noNickname = !![]));
}
async function getNickname() {
  const _0x243a4f = _0x2a4098,
    _0x6bdc79 = await localStorage[_0x243a4f(0x108)](_0x243a4f(0x109));
  _0x6bdc79
    ? (document[_0x243a4f(0xf6)](_0x243a4f(0x109))[_0x243a4f(0xc8)] = _0x6bdc79)
    : (document[_0x243a4f(0xf6)](_0x243a4f(0x109))[_0x243a4f(0x114)] =
        _0x243a4f(0xcb));
}
function _0x41ba(_0x34887c, _0x4f5b61) {
  const _0xd852b4 = _0xd852();
  return (
    (_0x41ba = function (_0x41ba03, _0x4e3b71) {
      _0x41ba03 = _0x41ba03 - 0xa4;
      let _0x3100b3 = _0xd852b4[_0x41ba03];
      return _0x3100b3;
    }),
    _0x41ba(_0x34887c, _0x4f5b61)
  );
}
function getIos() {
  const _0x30d0fa = _0x2a4098,
    _0x3a9efa =
      navigator[_0x30d0fa(0x101)] ||
      navigator['vendor'] ||
      window[_0x30d0fa(0xd2)];
  /iPad|iPhone|iPod/[_0x30d0fa(0x10c)](_0x3a9efa) &&
    !window[_0x30d0fa(0xaf)] &&
    (iosDevice = !![]);
}
getIos();
let myGameArea = {
  canvas: document[_0x2a4098(0xc3)](_0x2a4098(0xb5)),
  start: function () {
    const _0x26d9cb = _0x2a4098;
    iosDevice
      ? ((this[_0x26d9cb(0xb5)][_0x26d9cb(0xc7)] = 0x2ee),
        (this['canvas']['height'] = 0x19f))
      : ((this[_0x26d9cb(0xb5)]['width'] = window['innerWidth']),
        (this[_0x26d9cb(0xb5)][_0x26d9cb(0x103)] =
          window[_0x26d9cb(0x122)] <= 0x3e8
            ? window[_0x26d9cb(0x122)]
            : 0x3e8)),
      (this[_0x26d9cb(0xb9)] = this[_0x26d9cb(0xb5)][_0x26d9cb(0xf2)]('2d')),
      document[_0x26d9cb(0x10f)]['insertBefore'](
        this[_0x26d9cb(0xb5)],
        document[_0x26d9cb(0x10f)][_0x26d9cb(0xde)][0x0]
      ),
      (this['frameNo'] = 0x0),
      (startInterval = setInterval(updateGameArea, 0x14));
  },
  clear: function () {
    const _0x1ff403 = _0x2a4098;
    this[_0x1ff403(0xb9)]['clearRect'](
      0x0,
      0x0,
      this[_0x1ff403(0xb5)][_0x1ff403(0xc7)],
      this[_0x1ff403(0xb5)]['height']
    );
  },
};
function component(
  _0xe1c6ad,
  _0x12141c,
  _0x39ca1b,
  _0x397105,
  _0xbe84a6,
  _0x521727
) {
  const _0x2d3fd2 = _0x2a4098;
  (this[_0x2d3fd2(0x121)] = _0x521727),
    (this[_0x2d3fd2(0x105)] = 0x0),
    (this[_0x2d3fd2(0xc7)] = _0xe1c6ad),
    (this[_0x2d3fd2(0x103)] = _0x12141c),
    (this[_0x2d3fd2(0xa4)] = 0x0),
    (this[_0x2d3fd2(0xa5)] = 0x0),
    (this['x'] = _0x397105),
    (this['y'] = _0xbe84a6),
    (this[_0x2d3fd2(0xfb)] = 0x0),
    (this[_0x2d3fd2(0x11c)] = 0x0),
    (this[_0x2d3fd2(0xdb)] = function () {
      const _0x244660 = _0x2d3fd2;
      ctx = myGameArea[_0x244660(0xb9)];
      if (this['type'] === _0x244660(0xb7))
        (ctx[_0x244660(0xc9)] =
          this[_0x244660(0xc7)] + '\x20' + this[_0x244660(0x103)]),
          (ctx[_0x244660(0x107)] = _0x39ca1b),
          ctx[_0x244660(0xdc)](this[_0x244660(0xb7)], this['x'], this['y']);
      else {
        if (this[_0x244660(0x121)] === _0x244660(0xe0)) {
          let _0x3fc5f2 = new Image();
          (_0x3fc5f2[_0x244660(0x125)] = _0x244660(0xe5)),
            ctx[_0x244660(0xdf)](
              _0x3fc5f2,
              this['x'],
              this['y'],
              _0xe1c6ad,
              _0x12141c
            );
        } else
          (ctx[_0x244660(0x107)] = _0x39ca1b),
            ctx[_0x244660(0xcc)](),
            roundRect(
              ctx,
              this['x'],
              this['y'],
              this[_0x244660(0xc7)],
              this[_0x244660(0x103)],
              0xa,
              !![]
            ),
            ctx[_0x244660(0xea)]();
      }
    }),
    (this['newPos'] = function () {
      const _0x2e1f20 = _0x2d3fd2;
      (this['gravitySpeed'] += this['gravity']),
        (this['x'] += this[_0x2e1f20(0xa4)]),
        (this['y'] += this[_0x2e1f20(0xa5)] + this[_0x2e1f20(0x11c)]),
        this[_0x2e1f20(0x113)](),
        this['hitTop']();
    }),
    (this[_0x2d3fd2(0x113)] = function () {
      const _0x3e0869 = _0x2d3fd2;
      let _0x959e00 =
        myGameArea[_0x3e0869(0xb5)][_0x3e0869(0x103)] - this[_0x3e0869(0x103)];
      this['y'] > _0x959e00 &&
        ((this['y'] = _0x959e00), (this[_0x3e0869(0x11c)] = 0x0));
    }),
    (this[_0x2d3fd2(0xd0)] = function () {
      const _0x1ffdc6 = _0x2d3fd2;
      let _0x13aac0 =
        myGameArea[_0x1ffdc6(0xb5)][_0x1ffdc6(0x103)] - this[_0x1ffdc6(0x103)];
      this['y'] < 0x0 &&
        ((this['y'] = _0x13aac0), (this['gravitySpeed'] = 0x0));
    });
  const _0x5471d9 = () => {
    const _0x43ac83 = _0x2d3fd2;
    window[_0x43ac83(0xed)]['setItem'](_0x43ac83(0xa8), punt),
      (document[_0x43ac83(0xf6)](_0x43ac83(0xd4))[_0x43ac83(0xf5)][
        _0x43ac83(0xb6)
      ] = _0x43ac83(0xc1)),
      clearInterval(startInterval),
      (document[_0x43ac83(0xf6)](_0x43ac83(0xd4))['style'][_0x43ac83(0xc5)] =
        _0x43ac83(0xaa)),
      (document[_0x43ac83(0xf6)](_0x43ac83(0xd4))['style'][_0x43ac83(0xf7)] =
        _0x43ac83(0xda)),
      (document[_0x43ac83(0xf6)]('start-btn')[_0x43ac83(0xf5)][
        _0x43ac83(0xf7)
      ] = 'none'),
      (document[_0x43ac83(0xf6)](_0x43ac83(0xd7))[_0x43ac83(0xf5)]['display'] =
        _0x43ac83(0xe4)),
      (document['getElementById'](_0x43ac83(0xa9))[_0x43ac83(0xf5)]['display'] =
        _0x43ac83(0xe4)),
      (document[_0x43ac83(0xf6)](_0x43ac83(0xbe))[_0x43ac83(0xb1)] =
        myScore[_0x43ac83(0xb7)]),
      (infoBtn[_0x43ac83(0xf5)]['display'] = _0x43ac83(0xe4)),
      (rankingBtn[_0x43ac83(0xf5)]['display'] = _0x43ac83(0xe4)),
      (document[_0x43ac83(0x10f)][_0x43ac83(0xf5)][_0x43ac83(0xc4)] =
        _0x43ac83(0xb4)),
      (document[_0x43ac83(0xf6)](_0x43ac83(0x112))['style'][_0x43ac83(0xf7)] =
        _0x43ac83(0xfa)),
      playAudio('gameOver');
  };
  this[_0x2d3fd2(0xf1)] = function (_0x312b86) {
    const _0x89fde7 = _0x2d3fd2;
    let _0xb62441 = this['x'],
      _0x237309 = this['x'] + this[_0x89fde7(0xc7)] - 0x4,
      _0x2eefc4 = this['y'] + 0xa,
      _0x21e858 = this['y'] + this['height'] - 0x4,
      _0x4ebc54 = _0x312b86['x'],
      _0x5dd596 = _0x312b86['x'] + _0x312b86['width'],
      _0xf6f6a5 = _0x312b86['y'],
      _0x43caa1 = _0x312b86['y'] + _0x312b86[_0x89fde7(0x103)],
      _0x364a49 = !![];
    return (
      (_0x21e858 < _0xf6f6a5 ||
        _0x2eefc4 > _0x43caa1 ||
        _0x237309 < _0x4ebc54 ||
        _0xb62441 > _0x5dd596) &&
        (_0x364a49 = ![]),
      _0x364a49
        ? _0x5471d9()
        : ((document[_0x89fde7(0xf6)](_0x89fde7(0xd4))[_0x89fde7(0xf5)][
            _0x89fde7(0xf7)
          ] = _0x89fde7(0xe4)),
          (document[_0x89fde7(0xf6)](_0x89fde7(0x112))[_0x89fde7(0xf5)][
            'display'
          ] = 'none')),
      _0x364a49
    );
  };
}
function roundRect(
  _0x52ba8a,
  _0x478757,
  _0x5ab67f,
  _0x16f202,
  _0x4a0f38,
  _0x6008b = 0x5,
  _0x12802c = ![],
  _0x261098 = !![]
) {
  const _0x7c448b = _0x2a4098;
  typeof _0x6008b === _0x7c448b(0x119)
    ? (_0x6008b = { tl: _0x6008b, tr: _0x6008b, br: _0x6008b, bl: _0x6008b })
    : (_0x6008b = { ...{ tl: 0x0, tr: 0x0, br: 0x0, bl: 0x0 }, ..._0x6008b }),
    _0x52ba8a[_0x7c448b(0xcc)](),
    _0x52ba8a[_0x7c448b(0x118)](_0x478757 + _0x6008b['tl'], _0x5ab67f),
    _0x52ba8a[_0x7c448b(0xa7)](
      _0x478757 + _0x16f202 - _0x6008b['tr'],
      _0x5ab67f
    ),
    _0x52ba8a['quadraticCurveTo'](
      _0x478757 + _0x16f202,
      _0x5ab67f,
      _0x478757 + _0x16f202,
      _0x5ab67f + _0x6008b['tr']
    ),
    _0x52ba8a[_0x7c448b(0xa7)](
      _0x478757 + _0x16f202,
      _0x5ab67f + _0x4a0f38 - _0x6008b['br']
    ),
    _0x52ba8a['quadraticCurveTo'](
      _0x478757 + _0x16f202,
      _0x5ab67f + _0x4a0f38,
      _0x478757 + _0x16f202 - _0x6008b['br'],
      _0x5ab67f + _0x4a0f38
    ),
    _0x52ba8a[_0x7c448b(0xa7)](
      _0x478757 + _0x6008b['bl'],
      _0x5ab67f + _0x4a0f38
    ),
    _0x52ba8a['quadraticCurveTo'](
      _0x478757,
      _0x5ab67f + _0x4a0f38,
      _0x478757,
      _0x5ab67f + _0x4a0f38 - _0x6008b['bl']
    ),
    _0x52ba8a[_0x7c448b(0xa7)](_0x478757, _0x5ab67f + _0x6008b['tl']),
    _0x52ba8a[_0x7c448b(0x124)](
      _0x478757,
      _0x5ab67f,
      _0x478757 + _0x6008b['tl'],
      _0x5ab67f
    ),
    _0x52ba8a[_0x7c448b(0xd6)](),
    _0x12802c && _0x52ba8a['fill'](),
    _0x261098 && _0x52ba8a['stroke']();
}
const randomIntForIncreaseSpeed = Math[_0x2a4098(0xbf)](
    Math[_0x2a4098(0xcd)]() * (0xfd2 - 0x898 + 0x1) + 0x898
  ),
  randomIntForChangeAsshole = Math[_0x2a4098(0xbf)](
    Math[_0x2a4098(0xcd)]() * (0x1b58 - 0x1770 + 0x1) + 0x1770
  );
function updateGameArea() {
  const _0x5b57d4 = _0x2a4098;
  let _0x58d0cf,
    _0x121fb2,
    _0xf8108a,
    _0x370079,
    _0x1961de,
    _0x804c39,
    _0x395bc0,
    _0x66618d = this[_0x5b57d4(0xa6)] < randomIntForIncreaseSpeed ? -1.8 : -3.8,
    _0x1af2a2 = _0x66618d === -1.8 ? 0x96 : 0x5f,
    _0x346228 = 0x3c,
    _0x580d8c = _0x1af2a2 === 0x96 ? 0x78 : 0x55;
  for (i = 0x0; i < myObstacles['length']; i += 0x1) {
    if (gameCharacter['crashWith'](myObstacles[i])) return;
  }
  myGameArea[_0x5b57d4(0xab)](), (myGameArea[_0x5b57d4(0x11b)] += 0x1);
  if (myGameArea['frameNo'] == 0x1 || everyinterval(_0x1af2a2)) {
    (_0x58d0cf = myGameArea[_0x5b57d4(0xb5)]['width']),
      (_0x370079 = 0x14),
      (_0x1961de = 0x10e),
      (_0x121fb2 = Math[_0x5b57d4(0xbf)](
        Math[_0x5b57d4(0xcd)]() * (_0x1961de - _0x370079 + 0x1) + _0x370079
      )),
      (_0x804c39 = _0x346228),
      (_0x395bc0 = _0x580d8c);
    const _0x100569 = this['myScoreNumber'] > randomIntForChangeAsshole,
      _0x24387c = _0x100569 ? 0x4b : 0x2d,
      _0x445ef0 = _0x100569 ? _0x5b57d4(0xce) : '#964E00',
      _0xf16386 = _0x100569 ? '#451b00' : _0x5b57d4(0x11f);
    this[_0x5b57d4(0xa6)] > randomIntForIncreaseSpeed &&
      this[_0x5b57d4(0xa6)] < randomIntForIncreaseSpeed + 0x96 &&
      playAudio('scoreGoesUpLot'),
      this[_0x5b57d4(0xa6)] > randomIntForChangeAsshole &&
        this['myScoreNumber'] < randomIntForChangeAsshole + 0x96 &&
        playAudio(_0x5b57d4(0xec)),
      (_0xf8108a = Math[_0x5b57d4(0xbf)](
        Math['random']() * (_0x395bc0 - _0x804c39 + 0x1) + _0x804c39
      )),
      myObstacles['push'](
        new component(_0x24387c, _0x121fb2, _0x445ef0, _0x58d0cf, 0x0)
      ),
      myObstacles['push'](
        new component(
          _0x24387c,
          _0x58d0cf - _0x121fb2 - _0xf8108a,
          _0xf16386,
          _0x58d0cf,
          _0x121fb2 + _0xf8108a
        )
      );
  }
  for (i = 0x0; i < myObstacles[_0x5b57d4(0x123)]; i += 0x1) {
    (myObstacles[i]['x'] += _0x66618d), myObstacles[i][_0x5b57d4(0xdb)]();
  }
  this[_0x5b57d4(0xd9)](),
    myScore[_0x5b57d4(0xdb)](),
    gameCharacter[_0x5b57d4(0xd3)](),
    gameCharacter[_0x5b57d4(0xdb)]();
}
function updateScore() {
  const _0x3b07d0 = _0x2a4098,
    _0x28dc8a = myGameArea[_0x3b07d0(0x11b)] - 0x190,
    _0x2534d7 = Math[_0x3b07d0(0xad)](_0x28dc8a);
  (this['myScoreNumber'] = _0x2534d7),
    (punt = _0x2534d7),
    (myScore[_0x3b07d0(0xb7)] =
      _0x3b07d0(0xfc) + (_0x2534d7 < 0x0 ? 0x0 : _0x2534d7));
}
function playAudio(_0x5c173e) {
  const _0x2358bb = _0x2a4098;
  if (audioIconPlay)
    switch (_0x5c173e) {
      case 'gameOver':
        (audio['loop'] = ![]),
          audio[_0x2358bb(0xf9)](),
          (audio[_0x2358bb(0x10b)] = 0x0),
          (audio[_0x2358bb(0x125)] = _0x2358bb(0xba)),
          audio['play']();
        break;
      case _0x2358bb(0xeb):
        let _0x13b381 = new Audio();
        (_0x13b381[_0x2358bb(0x125)] = _0x2358bb(0xca)),
          _0x13b381[_0x2358bb(0x10a)](),
          (audio[_0x2358bb(0x125)] = _0x2358bb(0xfd)),
          audio[_0x2358bb(0x10a)]();
        break;
      case _0x2358bb(0xec):
        let _0x1fdc6e = new Audio();
        (_0x1fdc6e[_0x2358bb(0x125)] = _0x2358bb(0xb0)),
          _0x1fdc6e[_0x2358bb(0x10a)](),
          (audio[_0x2358bb(0x125)] = _0x2358bb(0x115)),
          audio[_0x2358bb(0x10a)]();
        break;
      default:
        break;
    }
}
function everyinterval(_0x418f84) {
  if ((myGameArea['frameNo'] / _0x418f84) % 0x1 == 0x0) return !![];
  return ![];
}
function accelerate(_0x585818) {
  const _0x47335f = _0x2a4098;
  return (gameCharacter[_0x47335f(0xfb)] = _0x585818);
}
function soundFart() {
  const _0x44393b = _0x2a4098;
  let _0x1cd95a = new Audio();
  (_0x1cd95a[_0x44393b(0x125)] = _0x44393b(0xb3)),
    audioIconPlay && _0x1cd95a[_0x44393b(0x10a)]();
}
function _0xd852() {
  const _0x489544 = [
    'Enter\x20your\x20nickname',
    'beginPath',
    'random',
    '#744009',
    'writeText',
    'hitTop',
    'text/plain',
    'opera',
    'newPos',
    'start-game',
    'img/sound-on.webp',
    'closePath',
    'label-nickname',
    'boxShadow',
    'updateScore',
    'flex',
    'update',
    'fillText',
    'target',
    'childNodes',
    'drawImage',
    'img',
    'onclick',
    'getElementsByClassName',
    'start',
    'none',
    'img/flying_poop.webp',
    '0px\x200px\x2035px\x206px\x20#000000',
    'saveNickname',
    '8435979cksNNK',
    'touchstart',
    'fill',
    'scoreGoesUpLot',
    'scoreCrazyLevels',
    'localStorage',
    '5351404RDBxRU',
    'https://play.google.com/store/apps/details?id=io.kodular.caputoluca88.Shopping_List',
    '2725624fZOvnn',
    'crashWith',
    'getContext',
    '3332232DnjNAn',
    'close',
    'style',
    'getElementById',
    'display',
    'copy',
    'pause',
    'block',
    'gravity',
    'SCORE:\x20',
    'sounds/MasterOfPuppets.mp3',
    'addEventListener',
    '#202020',
    'ranking-modal',
    'userAgent',
    'clipboardData',
    'height',
    '6YbvvPA',
    'score',
    '61282xrVHLn',
    'fillStyle',
    'getItem',
    'nickname',
    'play',
    'currentTime',
    'test',
    'img/sound-off.webp',
    'autoplay',
    'body',
    'link-copied',
    'setData',
    'retry-btn',
    'hitBottom',
    'placeholder',
    'sounds/BYOB.mp3',
    'loop',
    '30px',
    'moveTo',
    'number',
    'start-btn',
    'frameNo',
    'gravitySpeed',
    'info-btn',
    '3pMFTga',
    '#6A2800',
    '674616lVdUGm',
    'type',
    'innerHeight',
    'length',
    'quadraticCurveTo',
    'src',
    'speedX',
    'speedY',
    'myScoreNumber',
    'lineTo',
    'punt',
    'audio-btn',
    'url(\x27img/game-over.webp\x27)',
    'clear',
    'no-nickname-modal',
    'ceil',
    'audio-icon',
    'MSStream',
    'sounds/oh-shit.mp3',
    'innerText',
    'click',
    'sounds/fart.mp3',
    'hidden',
    'canvas',
    'backgroundColor',
    'text',
    '30xNbyLa',
    'context',
    'sounds/toilet.mp3',
    'preventDefault',
    '\x27Lucida\x20Console\x27,\x20\x27Courier\x20New\x27,\x20monospace',
    '63hvjoPQ',
    'score-text',
    'floor',
    'volume',
    '#e26b6d',
    '8428305hBOXfH',
    'createElement',
    'overflow',
    'backgroundImage',
    'trim',
    'width',
    'value',
    'font',
    'sounds/oh-my-god.mp3',
  ];
  _0xd852 = function () {
    return _0x489544;
  };
  return _0xd852();
}
function shareLink() {
  const _0x5c0d42 = _0x2a4098,
    _0x4c5117 = _0x5c0d42(0xef),
    _0x55675d = document[_0x5c0d42(0xf6)](_0x5c0d42(0x110));
  navigator['clipboard'][_0x5c0d42(0xcf)](_0x4c5117),
    document[_0x5c0d42(0xfe)](_0x5c0d42(0xf8), function (_0x495ce4) {
      const _0x51f3d7 = _0x5c0d42;
      _0x495ce4[_0x51f3d7(0x102)][_0x51f3d7(0x111)](_0x51f3d7(0xd1), _0x4c5117),
        _0x495ce4[_0x51f3d7(0xbb)]();
    }),
    document['execCommand'](_0x5c0d42(0xf8)),
    (_0x55675d[_0x5c0d42(0xf5)]['display'] = 'block'),
    setTimeout(
      () => (_0x55675d['style'][_0x5c0d42(0xf7)] = _0x5c0d42(0xe4)),
      0x1194
    ),
    soundFart();
}
const flyPoop = document[_0x2a4098(0xf6)]('fly-poop');
flyPoop[_0x2a4098(0xfe)](
  _0x2a4098(0xe9),
  function (_0x268f48) {
    const _0x1f9f23 = _0x2a4098;
    _0x268f48['preventDefault'](),
      accelerate(-0.4),
      (flyPoop['style'][_0x1f9f23(0xd8)] = _0x1f9f23(0xe6));
  },
  ![]
),
  flyPoop[_0x2a4098(0xfe)](
    'touchend',
    function (_0xb23b95) {
      const _0x1e5555 = _0x2a4098;
      _0xb23b95['preventDefault'](),
        accelerate(0.15),
        (flyPoop['style'][_0x1e5555(0xd8)] = 'none');
    },
    ![]
  ),
  [infoBtn, infoClose, rankingBtn, rankingClose, startBtn]['forEach'](
    (_0xf9bd9b) => {
      const _0x348818 = _0x2a4098;
      _0xf9bd9b[_0x348818(0xfe)](
        _0x348818(0xb2),
        (_0x1ca395) => {
          const _0x3ed7dd = _0x348818;
          _0x1ca395[_0x3ed7dd(0xbb)](), soundFart();
        },
        ![]
      );
    }
  ),
  (infoBtn[_0x2a4098(0xe1)] = function () {
    const _0x2d5865 = _0x2a4098;
    soundFart(), (infoModal[_0x2d5865(0xf5)][_0x2d5865(0xf7)] = 'block');
  }),
  (infoClose[_0x2a4098(0xe1)] = function () {
    const _0x485c9f = _0x2a4098;
    soundFart(), (infoModal[_0x485c9f(0xf5)][_0x485c9f(0xf7)] = 'none');
  }),
  (rankingBtn[_0x2a4098(0xe1)] = function () {
    const _0x4b866f = _0x2a4098;
    soundFart(), (rankingModal[_0x4b866f(0xf5)][_0x4b866f(0xf7)] = 'block');
  }),
  (rankingClose['onclick'] = function () {
    const _0x2fc819 = _0x2a4098;
    soundFart(),
      (rankingModal[_0x2fc819(0xf5)][_0x2fc819(0xf7)] = _0x2fc819(0xe4));
  }),
  (insertNicknameClose[_0x2a4098(0xe1)] = function () {
    const _0x55bc62 = _0x2a4098;
    insertNicknameModal[_0x55bc62(0xf5)][_0x55bc62(0xf7)] = _0x55bc62(0xe4);
  }),
  (window[_0x2a4098(0xe1)] = function (_0x463edb) {
    const _0x4ece0b = _0x2a4098;
    _0x463edb['target'] == infoModal &&
      (infoModal[_0x4ece0b(0xf5)][_0x4ece0b(0xf7)] = _0x4ece0b(0xe4)),
      _0x463edb['target'] == rankingModal &&
        (rankingModal['style'][_0x4ece0b(0xf7)] = _0x4ece0b(0xe4)),
      _0x463edb[_0x4ece0b(0xdd)] == insertNicknameModal &&
        (insertNicknameModal['style'][_0x4ece0b(0xf7)] = _0x4ece0b(0xe4));
  });
function toggleAudio() {
  const _0x2d5d14 = _0x2a4098,
    _0x261006 = document['getElementById'](_0x2d5d14(0xae));
  (audio[_0x2d5d14(0x10e)] = !![]),
    (audio[_0x2d5d14(0x116)] = !![]),
    (audioIconPlay = !audioIconPlay),
    audioIconPlay
      ? ((_0x261006['src'] = _0x2d5d14(0xd5)),
        (audio[_0x2d5d14(0xc0)] = 0.65),
        audio[_0x2d5d14(0x10a)]())
      : ((_0x261006['src'] = _0x2d5d14(0x10d)), audio[_0x2d5d14(0xf9)]());
}
