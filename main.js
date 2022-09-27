const _0x4516a3 = _0x2ee9;
(function (_0x3f54fc, _0x1f905a) {
  const _0x18ecd1 = _0x2ee9,
    _0x2ded71 = _0x3f54fc();
  while (!![]) {
    try {
      const _0x24a511 =
        parseInt(_0x18ecd1(0xfe)) / 0x1 +
        (-parseInt(_0x18ecd1(0xcb)) / 0x2) * (parseInt(_0x18ecd1(0xea)) / 0x3) +
        parseInt(_0x18ecd1(0xdb)) / 0x4 +
        parseInt(_0x18ecd1(0xa1)) / 0x5 +
        -parseInt(_0x18ecd1(0xb7)) / 0x6 +
        (-parseInt(_0x18ecd1(0xae)) / 0x7) *
          (-parseInt(_0x18ecd1(0xb1)) / 0x8) +
        -parseInt(_0x18ecd1(0xeb)) / 0x9;
      if (_0x24a511 === _0x1f905a) break;
      else _0x2ded71['push'](_0x2ded71['shift']());
    } catch (_0x131f77) {
      _0x2ded71['push'](_0x2ded71['shift']());
    }
  }
})(_0x4bd6, 0x4330e);
let gameCharacter,
  myObstacles = [],
  myScore,
  myScoreNumber,
  infoModal = document[_0x4516a3(0x101)](_0x4516a3(0xc8)),
  rankingModal = document['getElementById']('ranking-modal'),
  insertNicknameModal = document[_0x4516a3(0x101)](_0x4516a3(0xf0)),
  infoBtn = document[_0x4516a3(0x101)](_0x4516a3(0xef)),
  rankingBtn = document[_0x4516a3(0x101)](_0x4516a3(0xb6)),
  infoClose = document['getElementsByClassName'](_0x4516a3(0xa2))[0x0],
  rankingClose = document[_0x4516a3(0xcd)](_0x4516a3(0xa2))[0x1],
  insertNicknameClose = document[_0x4516a3(0xcd)](_0x4516a3(0xa2))[0x2],
  audioIconPlay = ![],
  noNickname = ![],
  iosDevice = ![],
  punt;
function startGame() {
  const _0x597ece = _0x4516a3;
  this[_0x597ece(0xb0)](document[_0x597ece(0x101)](_0x597ece(0xdf))['value']),
    noNickname &&
      ((gameCharacter = new component(
        0x37,
        0x28,
        '',
        0xa,
        0x78,
        _0x597ece(0x113)
      )),
      (gameCharacter[_0x597ece(0xfb)] = 0.05),
      (myScore = new component(
        '30px',
        _0x597ece(0x10a),
        '#202020',
        0x14,
        0x1e,
        _0x597ece(0xba)
      )),
      (document[_0x597ece(0x101)](_0x597ece(0x10f))[_0x597ece(0xc6)][
        _0x597ece(0xc7)
      ] = _0x597ece(0xb9)),
      gameCharacter && myGameArea[_0x597ece(0xa7)]());
}
function saveNickname(_0x313922) {
  const _0x20a921 = _0x4516a3,
    _0x1cf769 = _0x313922['trim']();
  !_0x1cf769
    ? ((insertNicknameModal[_0x20a921(0xc6)][_0x20a921(0xc7)] =
        _0x20a921(0x109)),
      (noNickname = ![]))
    : (window[_0x20a921(0xe2)][_0x20a921(0xde)](_0x20a921(0xdf), _0x1cf769),
      (document['getElementById'](_0x20a921(0xdf))[_0x20a921(0xc6)][
        _0x20a921(0xc7)
      ] = _0x20a921(0xb9)),
      (noNickname = !![]));
}
async function getNickname() {
  const _0x1117fd = _0x4516a3,
    _0x1f5265 = await localStorage['getItem'](_0x1117fd(0xdf));
  _0x1f5265
    ? (document[_0x1117fd(0x101)](_0x1117fd(0xdf))[_0x1117fd(0xa4)] = _0x1f5265)
    : (document[_0x1117fd(0x101)](_0x1117fd(0xdf))[_0x1117fd(0xa8)] =
        _0x1117fd(0x111));
}
function getIos() {
  const _0x4b6f6c = _0x4516a3,
    _0x4b52f0 =
      navigator[_0x4b6f6c(0xfa)] ||
      navigator[_0x4b6f6c(0xf2)] ||
      window[_0x4b6f6c(0xc3)];
  /iPad|iPhone|iPod/['test'](_0x4b52f0) &&
    !window[_0x4b6f6c(0xf8)] &&
    (iosDevice = !![]);
}
getIos();
let myGameArea = {
  canvas: document[_0x4516a3(0xe3)](_0x4516a3(0xa5)),
  start: function () {
    const _0x6ee9d6 = _0x4516a3;
    iosDevice
      ? ((this['canvas']['width'] = 0x2ee),
        (this[_0x6ee9d6(0xa5)][_0x6ee9d6(0x107)] = 0x19f))
      : ((this[_0x6ee9d6(0xa5)][_0x6ee9d6(0xf1)] = window[_0x6ee9d6(0xa3)]),
        (this[_0x6ee9d6(0xa5)][_0x6ee9d6(0x107)] =
          window[_0x6ee9d6(0xd5)] <= 0x3e8 ? window[_0x6ee9d6(0xd5)] : 0x3e8)),
      (this[_0x6ee9d6(0x110)] = this[_0x6ee9d6(0xa5)][_0x6ee9d6(0xe7)]('2d')),
      document[_0x6ee9d6(0xc0)][_0x6ee9d6(0xaf)](
        this[_0x6ee9d6(0xa5)],
        document[_0x6ee9d6(0xc0)][_0x6ee9d6(0xff)][0x0]
      ),
      (this[_0x6ee9d6(0xe5)] = 0x0),
      (startInterval = setInterval(updateGameArea, 0x14));
  },
  clear: function () {
    const _0x547779 = _0x4516a3;
    this[_0x547779(0x110)][_0x547779(0xc5)](
      0x0,
      0x0,
      this['canvas'][_0x547779(0xf1)],
      this['canvas'][_0x547779(0x107)]
    );
  },
};
function component(
  _0x5d0b58,
  _0x115971,
  _0x3f4295,
  _0x758d31,
  _0xd2549d,
  _0x58275e
) {
  const _0xc16377 = _0x4516a3;
  (this[_0xc16377(0xb4)] = _0x58275e),
    (this['score'] = 0x0),
    (this[_0xc16377(0xf1)] = _0x5d0b58),
    (this[_0xc16377(0x107)] = _0x115971),
    (this[_0xc16377(0xd2)] = 0x0),
    (this[_0xc16377(0xca)] = 0x0),
    (this['x'] = _0x758d31),
    (this['y'] = _0xd2549d),
    (this[_0xc16377(0xfb)] = 0x0),
    (this['gravitySpeed'] = 0x0),
    (this[_0xc16377(0x102)] = function () {
      const _0x550ea1 = _0xc16377;
      ctx = myGameArea[_0x550ea1(0x110)];
      if (this['type'] === _0x550ea1(0xba))
        (ctx[_0x550ea1(0x105)] =
          this['width'] + '\x20' + this[_0x550ea1(0x107)]),
          (ctx[_0x550ea1(0xd0)] = _0x3f4295),
          ctx[_0x550ea1(0xf9)](this['text'], this['x'], this['y']);
      else {
        if (this['type'] === _0x550ea1(0x113)) {
          let _0x4a3e3 = new Image();
          (_0x4a3e3['src'] = 'img/flying_poop.webp'),
            ctx[_0x550ea1(0xfc)](
              _0x4a3e3,
              this['x'],
              this['y'],
              _0x5d0b58,
              _0x115971
            );
        } else
          (ctx['fillStyle'] = _0x3f4295),
            ctx['beginPath'](),
            roundRect(
              ctx,
              this['x'],
              this['y'],
              this[_0x550ea1(0xf1)],
              this[_0x550ea1(0x107)],
              0xa,
              !![]
            ),
            ctx[_0x550ea1(0xaa)]();
      }
    }),
    (this[_0xc16377(0xd6)] = function () {
      const _0x2811a9 = _0xc16377;
      (this[_0x2811a9(0xee)] += this[_0x2811a9(0xfb)]),
        (this['x'] += this['speedX']),
        (this['y'] += this[_0x2811a9(0xca)] + this[_0x2811a9(0xee)]),
        this[_0x2811a9(0xbc)](),
        this[_0x2811a9(0xd1)]();
    }),
    (this[_0xc16377(0xbc)] = function () {
      const _0x32bbf2 = _0xc16377;
      let _0x3f4d21 =
        myGameArea[_0x32bbf2(0xa5)][_0x32bbf2(0x107)] - this[_0x32bbf2(0x107)];
      this['y'] > _0x3f4d21 &&
        ((this['y'] = _0x3f4d21), (this[_0x32bbf2(0xee)] = 0x0));
    }),
    (this[_0xc16377(0xd1)] = function () {
      const _0x3a13e9 = _0xc16377;
      let _0x3d5450 =
        myGameArea[_0x3a13e9(0xa5)][_0x3a13e9(0x107)] - this[_0x3a13e9(0x107)];
      this['y'] < 0x0 &&
        ((this['y'] = _0x3d5450), (this[_0x3a13e9(0xee)] = 0x0));
    });
  const _0x2f4282 = () => {
    const _0x5c5eef = _0xc16377;
    window['localStorage'][_0x5c5eef(0xde)](_0x5c5eef(0xb5), punt),
      (document[_0x5c5eef(0x101)](_0x5c5eef(0x10f))[_0x5c5eef(0xc6)][
        _0x5c5eef(0xd9)
      ] = '#e26b6d'),
      clearInterval(startInterval),
      (document[_0x5c5eef(0x101)]('start-game')[_0x5c5eef(0xc6)][
        _0x5c5eef(0xa6)
      ] = _0x5c5eef(0xe6)),
      (document[_0x5c5eef(0x101)](_0x5c5eef(0x10f))[_0x5c5eef(0xc6)][
        _0x5c5eef(0xc7)
      ] = _0x5c5eef(0xbe)),
      (document[_0x5c5eef(0x101)]('start-btn')[_0x5c5eef(0xc6)][
        _0x5c5eef(0xc7)
      ] = _0x5c5eef(0xb9)),
      (document[_0x5c5eef(0x101)]('label-nickname')[_0x5c5eef(0xc6)][
        _0x5c5eef(0xc7)
      ] = _0x5c5eef(0xb9)),
      (document['getElementById'](_0x5c5eef(0xe8))[_0x5c5eef(0xc6)][
        _0x5c5eef(0xc7)
      ] = _0x5c5eef(0xb9)),
      (document['getElementById'](_0x5c5eef(0xc1))['innerText'] =
        myScore['text']),
      (infoBtn[_0x5c5eef(0xc6)][_0x5c5eef(0xc7)] = _0x5c5eef(0xb9)),
      (rankingBtn[_0x5c5eef(0xc6)][_0x5c5eef(0xc7)] = _0x5c5eef(0xb9)),
      (document[_0x5c5eef(0xc0)][_0x5c5eef(0xc6)]['overflow'] = 'hidden'),
      (document[_0x5c5eef(0x101)](_0x5c5eef(0xed))['style']['display'] =
        _0x5c5eef(0x109)),
      (document[_0x5c5eef(0x101)]('retry-btn')[_0x5c5eef(0xfd)] = !![]),
      setTimeout(() => {
        const _0x3a751d = _0x5c5eef;
        (document[_0x3a751d(0x101)](_0x3a751d(0xed))['style'][_0x3a751d(0xb2)] =
          '1'),
          (document[_0x3a751d(0x101)](_0x3a751d(0xed))[_0x3a751d(0xfd)] = ![]);
      }, 0x1f4),
      playAudio(_0x5c5eef(0xb3));
  };
  this[_0xc16377(0xcf)] = function (_0x123b02) {
    const _0xeab1f7 = _0xc16377;
    let _0x11ff7c = this['x'],
      _0x492ba9 = this['x'] + this[_0xeab1f7(0xf1)] - 0x4,
      _0x475cb2 = this['y'] + 0xa,
      _0x531c32 = this['y'] + this[_0xeab1f7(0x107)] - 0x4,
      _0x1ff657 = _0x123b02['x'],
      _0x404358 = _0x123b02['x'] + _0x123b02[_0xeab1f7(0xf1)],
      _0x18014c = _0x123b02['y'],
      _0x3ae8a0 = _0x123b02['y'] + _0x123b02['height'],
      _0x2546d1 = !![];
    return (
      (_0x531c32 < _0x18014c ||
        _0x475cb2 > _0x3ae8a0 ||
        _0x492ba9 < _0x1ff657 ||
        _0x11ff7c > _0x404358) &&
        (_0x2546d1 = ![]),
      _0x2546d1
        ? _0x2f4282()
        : ((document[_0xeab1f7(0x101)](_0xeab1f7(0x10f))[_0xeab1f7(0xc6)][
            _0xeab1f7(0xc7)
          ] = _0xeab1f7(0xb9)),
          (document['getElementById']('retry-btn')['style'][_0xeab1f7(0xc7)] =
            _0xeab1f7(0xb9))),
      _0x2546d1
    );
  };
}
function roundRect(
  _0x262de8,
  _0x256ec8,
  _0x1270eb,
  _0x28bc6b,
  _0x499f2b,
  _0x40b96e = 0x5,
  _0x668f9f = ![],
  _0x38f7ce = !![]
) {
  const _0x1f6375 = _0x4516a3;
  typeof _0x40b96e === 'number'
    ? (_0x40b96e = {
        tl: _0x40b96e,
        tr: _0x40b96e,
        br: _0x40b96e,
        bl: _0x40b96e,
      })
    : (_0x40b96e = { ...{ tl: 0x0, tr: 0x0, br: 0x0, bl: 0x0 }, ..._0x40b96e }),
    _0x262de8[_0x1f6375(0x103)](),
    _0x262de8['moveTo'](_0x256ec8 + _0x40b96e['tl'], _0x1270eb),
    _0x262de8[_0x1f6375(0xac)](
      _0x256ec8 + _0x28bc6b - _0x40b96e['tr'],
      _0x1270eb
    ),
    _0x262de8['quadraticCurveTo'](
      _0x256ec8 + _0x28bc6b,
      _0x1270eb,
      _0x256ec8 + _0x28bc6b,
      _0x1270eb + _0x40b96e['tr']
    ),
    _0x262de8['lineTo'](
      _0x256ec8 + _0x28bc6b,
      _0x1270eb + _0x499f2b - _0x40b96e['br']
    ),
    _0x262de8['quadraticCurveTo'](
      _0x256ec8 + _0x28bc6b,
      _0x1270eb + _0x499f2b,
      _0x256ec8 + _0x28bc6b - _0x40b96e['br'],
      _0x1270eb + _0x499f2b
    ),
    _0x262de8[_0x1f6375(0xac)](
      _0x256ec8 + _0x40b96e['bl'],
      _0x1270eb + _0x499f2b
    ),
    _0x262de8[_0x1f6375(0xf4)](
      _0x256ec8,
      _0x1270eb + _0x499f2b,
      _0x256ec8,
      _0x1270eb + _0x499f2b - _0x40b96e['bl']
    ),
    _0x262de8['lineTo'](_0x256ec8, _0x1270eb + _0x40b96e['tl']),
    _0x262de8[_0x1f6375(0xf4)](
      _0x256ec8,
      _0x1270eb,
      _0x256ec8 + _0x40b96e['tl'],
      _0x1270eb
    ),
    _0x262de8[_0x1f6375(0xce)](),
    _0x668f9f && _0x262de8['fill'](),
    _0x38f7ce && _0x262de8['stroke']();
}
function _0x4bd6() {
  const _0x34bd4b = [
    '#964E00',
    'MSStream',
    'fillText',
    'userAgent',
    'gravity',
    'drawImage',
    'disabled',
    '464688QLfMhE',
    'childNodes',
    'scoreCrazyLevels',
    'getElementById',
    'update',
    'beginPath',
    'onclick',
    'font',
    'play',
    'height',
    'clipboardData',
    'block',
    '\x27Lucida\x20Console\x27,\x20\x27Courier\x20New\x27,\x20monospace',
    'sounds/oh-my-god.mp3',
    'copy',
    'pause',
    'preventDefault',
    'start-game',
    'context',
    'Enter\x20your\x20nickname',
    'img/sound-off.webp',
    'img',
    'link-copied',
    '2478065rrkIeP',
    'close',
    'innerWidth',
    'value',
    'canvas',
    'backgroundImage',
    'start',
    'placeholder',
    '0px\x200px\x2035px\x206px\x20#000000',
    'fill',
    'target',
    'lineTo',
    'sounds/oh-shit.mp3',
    '580377dOgBfT',
    'insertBefore',
    'saveNickname',
    '16klyfQX',
    'opacity',
    'gameOver',
    'type',
    'punt',
    'ranking-btn',
    '2029608omIhum',
    'execCommand',
    'none',
    'text',
    'ceil',
    'hitBottom',
    '#6A2800',
    'flex',
    'floor',
    'body',
    'score-text',
    'paused',
    'opera',
    'clear',
    'clearRect',
    'style',
    'display',
    'info-modal',
    'https://play.google.com/store/apps/details?id=io.kodular.caputoluca88.Shopping_List',
    'speedY',
    '10284KQcRDK',
    'random',
    'getElementsByClassName',
    'closePath',
    'crashWith',
    'fillStyle',
    'hitTop',
    'speedX',
    'myScoreNumber',
    'addEventListener',
    'innerHeight',
    'newPos',
    'img/sound-on.webp',
    'currentTime',
    'backgroundColor',
    'text/plain',
    '532narjJu',
    '#744009',
    '#451b00',
    'setItem',
    'nickname',
    'sounds/toilet.mp3',
    'push',
    'localStorage',
    'createElement',
    'fly-poop',
    'frameNo',
    'url(\x27img/game-over.webp\x27)',
    'getContext',
    'audio-btn',
    'SCORE:\x20',
    '267TFuRzq',
    '496224DtXksu',
    'autoplay',
    'retry-btn',
    'gravitySpeed',
    'info-btn',
    'no-nickname-modal',
    'width',
    'vendor',
    'clipboard',
    'quadraticCurveTo',
    'src',
    'scoreGoesUpLot',
  ];
  _0x4bd6 = function () {
    return _0x34bd4b;
  };
  return _0x4bd6();
}
function _0x2ee9(_0x331b84, _0x2f4072) {
  const _0x4bd69c = _0x4bd6();
  return (
    (_0x2ee9 = function (_0x2ee94f, _0x4c7d3c) {
      _0x2ee94f = _0x2ee94f - 0xa0;
      let _0xa98036 = _0x4bd69c[_0x2ee94f];
      return _0xa98036;
    }),
    _0x2ee9(_0x331b84, _0x2f4072)
  );
}
const randomIntForIncreaseSpeed = Math['floor'](
    Math[_0x4516a3(0xcc)]() * (0xfd2 - 0x898 + 0x1) + 0x898
  ),
  randomIntForChangeAsshole = Math[_0x4516a3(0xbf)](
    Math[_0x4516a3(0xcc)]() * (0x1b58 - 0x1770 + 0x1) + 0x1770
  );
function updateGameArea() {
  const _0x44fe18 = _0x4516a3;
  let _0x2397f0,
    _0x32693e,
    _0x9c59a2,
    _0x4c5709,
    _0x13ee29,
    _0x38a08d,
    _0x2c1948,
    _0x347131 = this[_0x44fe18(0xd3)] < randomIntForIncreaseSpeed ? -1.8 : -3.8,
    _0x199e45 = _0x347131 === -1.8 ? 0x96 : 0x5f,
    _0x17041f = 0x3c,
    _0xbcb719 = _0x199e45 === 0x96 ? 0x78 : 0x55;
  for (i = 0x0; i < myObstacles['length']; i += 0x1) {
    if (gameCharacter[_0x44fe18(0xcf)](myObstacles[i])) return;
  }
  myGameArea[_0x44fe18(0xc4)](), (myGameArea[_0x44fe18(0xe5)] += 0x1);
  if (myGameArea['frameNo'] == 0x1 || everyinterval(_0x199e45)) {
    (_0x2397f0 = myGameArea[_0x44fe18(0xa5)][_0x44fe18(0xf1)]),
      (_0x4c5709 = 0x14),
      (_0x13ee29 = 0x10e),
      (_0x32693e = Math['floor'](
        Math[_0x44fe18(0xcc)]() * (_0x13ee29 - _0x4c5709 + 0x1) + _0x4c5709
      )),
      (_0x38a08d = _0x17041f),
      (_0x2c1948 = _0xbcb719);
    const _0x805a9a = this[_0x44fe18(0xd3)] > randomIntForChangeAsshole,
      _0x367c9f = _0x805a9a ? 0x4b : 0x2d,
      _0x297969 = _0x805a9a ? _0x44fe18(0xdc) : _0x44fe18(0xf7),
      _0x110334 = _0x805a9a ? _0x44fe18(0xdd) : _0x44fe18(0xbd);
    this[_0x44fe18(0xd3)] > randomIntForIncreaseSpeed &&
      this[_0x44fe18(0xd3)] < randomIntForIncreaseSpeed + 0x96 &&
      playAudio(_0x44fe18(0xf6)),
      this[_0x44fe18(0xd3)] > randomIntForChangeAsshole &&
        this[_0x44fe18(0xd3)] < randomIntForChangeAsshole + 0x96 &&
        playAudio(_0x44fe18(0x100)),
      (_0x9c59a2 = Math[_0x44fe18(0xbf)](
        Math['random']() * (_0x2c1948 - _0x38a08d + 0x1) + _0x38a08d
      )),
      myObstacles[_0x44fe18(0xe1)](
        new component(_0x367c9f, _0x32693e, _0x297969, _0x2397f0, 0x0)
      ),
      myObstacles['push'](
        new component(
          _0x367c9f,
          _0x2397f0 - _0x32693e - _0x9c59a2,
          _0x110334,
          _0x2397f0,
          _0x32693e + _0x9c59a2
        )
      );
  }
  for (i = 0x0; i < myObstacles['length']; i += 0x1) {
    (myObstacles[i]['x'] += _0x347131), myObstacles[i]['update']();
  }
  this['updateScore'](),
    myScore[_0x44fe18(0x102)](),
    gameCharacter[_0x44fe18(0xd6)](),
    gameCharacter[_0x44fe18(0x102)]();
}
function updateScore() {
  const _0x5a88ce = _0x4516a3,
    _0x1433f3 = myGameArea[_0x5a88ce(0xe5)] - 0x190,
    _0xbd570a = Math[_0x5a88ce(0xbb)](_0x1433f3);
  (this[_0x5a88ce(0xd3)] = _0xbd570a),
    (punt = _0xbd570a),
    (myScore[_0x5a88ce(0xba)] =
      _0x5a88ce(0xe9) + (_0xbd570a < 0x0 ? 0x0 : _0xbd570a));
}
function playAudio(_0x270190) {
  const _0x719960 = _0x4516a3;
  if (audioIconPlay && audio[_0x719960(0xc2)])
    switch (_0x270190) {
      case _0x719960(0xb3):
        audio[_0x719960(0x10d)](),
          (audio[_0x719960(0xd8)] = 0x0),
          (audio['src'] = _0x719960(0xe0)),
          audio[_0x719960(0x106)]();
        break;
      case _0x719960(0xf6):
        let _0x86022c = new Audio();
        (_0x86022c[_0x719960(0xf5)] = _0x719960(0x10b)),
          _0x86022c[_0x719960(0x106)]();
        break;
      case _0x719960(0x100):
        let _0x31a143 = new Audio();
        (_0x31a143[_0x719960(0xf5)] = _0x719960(0xad)), _0x31a143['play']();
        break;
      default:
        break;
    }
}
function everyinterval(_0x29aa3f) {
  if ((myGameArea['frameNo'] / _0x29aa3f) % 0x1 == 0x0) return !![];
  return ![];
}
function accelerate(_0x12f2c3) {
  const _0x337b9d = _0x4516a3;
  return soundFart(), (gameCharacter[_0x337b9d(0xfb)] = _0x12f2c3);
}
function soundFart() {
  audioIconPlay && audio['paused']
    ? audio['play']()
    : (audio['pause'](), (audio['currentTime'] = 0x0));
}
function shareLink() {
  const _0x3383a8 = _0x4516a3,
    _0x3d0e64 = _0x3383a8(0xc9),
    _0x5b0d7b = document[_0x3383a8(0x101)](_0x3383a8(0xa0));
  navigator[_0x3383a8(0xf3)]['writeText'](_0x3d0e64),
    document[_0x3383a8(0xd4)](_0x3383a8(0x10c), function (_0x2eb405) {
      const _0x44249f = _0x3383a8;
      _0x2eb405[_0x44249f(0x108)]['setData'](_0x44249f(0xda), _0x3d0e64),
        _0x2eb405[_0x44249f(0x10e)]();
    }),
    document[_0x3383a8(0xb8)]('copy'),
    (_0x5b0d7b[_0x3383a8(0xc6)]['display'] = _0x3383a8(0x109)),
    setTimeout(() => (_0x5b0d7b['style'][_0x3383a8(0xc7)] = 'none'), 0x1194);
}
const flyPoop = document[_0x4516a3(0x101)](_0x4516a3(0xe4));
flyPoop[_0x4516a3(0xd4)](
  'touchstart',
  function (_0x31cd5f) {
    const _0x5e9211 = _0x4516a3;
    _0x31cd5f[_0x5e9211(0x10e)](),
      accelerate(-0.4),
      (flyPoop['style']['boxShadow'] = _0x5e9211(0xa9));
  },
  ![]
),
  flyPoop[_0x4516a3(0xd4)](
    'touchend',
    function (_0x129c22) {
      const _0x40e34b = _0x4516a3;
      _0x129c22[_0x40e34b(0x10e)](),
        accelerate(0.15),
        (flyPoop['style']['boxShadow'] = _0x40e34b(0xb9));
    },
    ![]
  ),
  (infoBtn[_0x4516a3(0x104)] = function () {
    const _0x4bdde9 = _0x4516a3;
    infoModal[_0x4bdde9(0xc6)]['display'] = _0x4bdde9(0x109);
  }),
  (infoClose['onclick'] = function () {
    const _0x2974aa = _0x4516a3;
    infoModal['style'][_0x2974aa(0xc7)] = _0x2974aa(0xb9);
  }),
  (rankingBtn[_0x4516a3(0x104)] = function () {
    const _0x2b751d = _0x4516a3;
    rankingModal[_0x2b751d(0xc6)][_0x2b751d(0xc7)] = _0x2b751d(0x109);
  }),
  (rankingClose[_0x4516a3(0x104)] = function () {
    const _0x14e0f0 = _0x4516a3;
    rankingModal[_0x14e0f0(0xc6)][_0x14e0f0(0xc7)] = _0x14e0f0(0xb9);
  }),
  (insertNicknameClose[_0x4516a3(0x104)] = function () {
    const _0x5d8be0 = _0x4516a3;
    insertNicknameModal[_0x5d8be0(0xc6)]['display'] = _0x5d8be0(0xb9);
  }),
  (window[_0x4516a3(0x104)] = function (_0x233c78) {
    const _0x12e632 = _0x4516a3;
    _0x233c78[_0x12e632(0xab)] == infoModal &&
      (infoModal[_0x12e632(0xc6)][_0x12e632(0xc7)] = _0x12e632(0xb9)),
      _0x233c78[_0x12e632(0xab)] == rankingModal &&
        (rankingModal['style'][_0x12e632(0xc7)] = 'none'),
      _0x233c78['target'] == insertNicknameModal &&
        (insertNicknameModal['style']['display'] = 'none');
  });
function toggleAudio() {
  const _0x2612a5 = _0x4516a3,
    _0x85748 = document['getElementById']('audio-icon');
  (audio[_0x2612a5(0xec)] = !![]),
    (audioIconPlay = !audioIconPlay),
    audioIconPlay
      ? (_0x85748['src'] = _0x2612a5(0xd7))
      : (_0x85748[_0x2612a5(0xf5)] = _0x2612a5(0x112));
}
