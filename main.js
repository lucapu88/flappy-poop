const _0xaef252 = _0x19f6;
(function (_0x1f03b4, _0x323591) {
  const _0x2f8da6 = _0x19f6,
    _0x2ef588 = _0x1f03b4();
  while (!![]) {
    try {
      const _0x21d302 =
        (parseInt(_0x2f8da6(0x105)) / 0x1) *
          (-parseInt(_0x2f8da6(0xf3)) / 0x2) +
        (parseInt(_0x2f8da6(0x110)) / 0x3) * (parseInt(_0x2f8da6(0xd0)) / 0x4) +
        (-parseInt(_0x2f8da6(0xc9)) / 0x5) *
          (-parseInt(_0x2f8da6(0xc4)) / 0x6) +
        -parseInt(_0x2f8da6(0xf9)) / 0x7 +
        (-parseInt(_0x2f8da6(0x10a)) / 0x8) *
          (-parseInt(_0x2f8da6(0xb3)) / 0x9) +
        parseInt(_0x2f8da6(0x101)) / 0xa +
        (parseInt(_0x2f8da6(0xb1)) / 0xb) * (-parseInt(_0x2f8da6(0xe0)) / 0xc);
      if (_0x21d302 === _0x323591) break;
      else _0x2ef588['push'](_0x2ef588['shift']());
    } catch (_0x149bce) {
      _0x2ef588['push'](_0x2ef588['shift']());
    }
  }
})(_0x599e, 0x252f1);
function _0x599e() {
  const _0x321733 = [
    '0px\x200px\x2035px\x206px\x20#000000',
    'fillStyle',
    'getContext',
    'scoreGoesUpLot',
    '#451b00',
    'src',
    'moveTo',
    'length',
    'volume',
    'insertBefore',
    'text',
    '11RUTGjC',
    'score-text',
    '9JPFeJM',
    'overflow',
    'frameNo',
    'fill',
    '#964E00',
    'speedY',
    'quadraticCurveTo',
    'localStorage',
    'closePath',
    'userAgent',
    'display',
    'gravity',
    'update',
    'link-copied',
    'target',
    'backgroundImage',
    'getElementsByClassName',
    '666gXBwPm',
    'body',
    'pause',
    'url(\x27img/game-over.webp\x27)',
    'random',
    '8485xXhOdP',
    'opera',
    'img/flying_poop.webp',
    'retry-btn',
    'touchstart',
    'img/sound-off.webp',
    'img',
    '132DyBoBS',
    'Enter\x20your\x20nickname',
    'sounds/toilet.mp3',
    'writeText',
    'hitTop',
    'context',
    'MSStream',
    '#744009',
    'trim',
    'autoplay',
    'mousedown',
    'innerHeight',
    'ranking-btn',
    'width',
    'childNodes',
    'sounds/oh-shit.mp3',
    '1736712RDhUpC',
    '#6A2800',
    'crashWith',
    'flex',
    'punt',
    'play',
    'img/sound-on.webp',
    'start-btn',
    'speedX',
    'myScoreNumber',
    'hitBottom',
    'audio-icon',
    'none',
    'height',
    'clipboardData',
    'scoreCrazyLevels',
    '#202020',
    'boxShadow',
    'backgroundColor',
    '834bcWniQ',
    'drawImage',
    '#e26b6d',
    'start-game',
    'addEventListener',
    'gravitySpeed',
    '1009981WReymK',
    'value',
    'execCommand',
    'nickname',
    'score',
    'clipboard',
    'getItem',
    'block',
    '2510360XQiWUh',
    'ranking-modal',
    'info-modal',
    'sounds/MasterOfPuppets.mp3',
    '673RNTfQt',
    'style',
    'innerWidth',
    'test',
    'innerText',
    '1966320xFzCnz',
    'label-nickname',
    'beginPath',
    'SCORE:\x20',
    'vendor',
    'gameOver',
    '3342YuPlGm',
    '30px',
    'type',
    'loop',
    'push',
    'onclick',
    'canvas',
    'https://play.google.com/store/apps/details?id=io.kodular.caputoluca88.Shopping_List',
    'fillText',
    'lineTo',
    'text/plain',
    'close',
    'setItem',
    'paused',
    'preventDefault',
    'ceil',
    'fly-poop',
    'floor',
    'getElementById',
    'createElement',
    'touchend',
    'newPos',
    'currentTime',
  ];
  _0x599e = function () {
    return _0x321733;
  };
  return _0x599e();
}
let gameCharacter,
  myObstacles = [],
  myScore,
  myScoreNumber,
  infoModal = document[_0xaef252(0xa1)](_0xaef252(0x103)),
  rankingModal = document[_0xaef252(0xa1)](_0xaef252(0x102)),
  insertNicknameModal = document[_0xaef252(0xa1)]('no-nickname-modal'),
  infoBtn = document[_0xaef252(0xa1)]('info-btn'),
  rankingBtn = document[_0xaef252(0xa1)](_0xaef252(0xdc)),
  infoClose = document[_0xaef252(0xc3)]('close')[0x0],
  rankingClose = document['getElementsByClassName'](_0xaef252(0x11b))[0x1],
  insertNicknameClose = document[_0xaef252(0xc3)]('close')[0x2],
  audioIconPlay = ![],
  noNickname = ![],
  iosDevice = ![],
  punt;
function startGame() {
  const _0x457959 = _0xaef252;
  this['saveNickname'](document['getElementById'](_0x457959(0xfc))['value']),
    noNickname &&
      ((gameCharacter = new component(
        0x37,
        0x28,
        '',
        0xa,
        0x78,
        _0x457959(0xcf)
      )),
      (gameCharacter[_0x457959(0xbe)] = 0.05),
      (myScore = new component(
        _0x457959(0x111),
        '\x27Lucida\x20Console\x27,\x20\x27Courier\x20New\x27,\x20monospace',
        _0x457959(0xf0),
        0x14,
        0x1e,
        _0x457959(0xb0)
      )),
      (document['getElementById'](_0x457959(0xf6))['style'][_0x457959(0xbd)] =
        _0x457959(0xec)),
      gameCharacter && myGameArea['start']());
}
function saveNickname(_0x4f310e) {
  const _0xa026c9 = _0xaef252,
    _0x17dc3c = _0x4f310e[_0xa026c9(0xd8)]();
  !_0x17dc3c
    ? ((insertNicknameModal[_0xa026c9(0x106)][_0xa026c9(0xbd)] =
        _0xa026c9(0x100)),
      (noNickname = ![]))
    : (window[_0xa026c9(0xba)]['setItem'](_0xa026c9(0xfc), _0x17dc3c),
      (document['getElementById'](_0xa026c9(0xfc))[_0xa026c9(0x106)][
        _0xa026c9(0xbd)
      ] = _0xa026c9(0xec)),
      (noNickname = !![]));
}
async function getNickname() {
  const _0x2f1743 = _0xaef252,
    _0x5923f0 = await localStorage[_0x2f1743(0xff)]('nickname');
  _0x5923f0
    ? (document[_0x2f1743(0xa1)]('nickname')[_0x2f1743(0xfa)] = _0x5923f0)
    : (document[_0x2f1743(0xa1)](_0x2f1743(0xfc))['placeholder'] =
        _0x2f1743(0xd1));
}
function getIos() {
  const _0x2f95d0 = _0xaef252,
    _0x2454d4 =
      navigator[_0x2f95d0(0xbc)] ||
      navigator[_0x2f95d0(0x10e)] ||
      window[_0x2f95d0(0xca)];
  /iPad|iPhone|iPod/[_0x2f95d0(0x108)](_0x2454d4) &&
    !window[_0x2f95d0(0xd6)] &&
    (iosDevice = !![]);
}
getIos();
let myGameArea = {
  canvas: document[_0xaef252(0xa2)](_0xaef252(0x116)),
  start: function () {
    const _0x5f0180 = _0xaef252;
    iosDevice
      ? ((this[_0x5f0180(0x116)][_0x5f0180(0xdd)] = 0x2ee),
        (this[_0x5f0180(0x116)][_0x5f0180(0xed)] = 0x19f))
      : ((this[_0x5f0180(0x116)][_0x5f0180(0xdd)] = window[_0x5f0180(0x107)]),
        (this[_0x5f0180(0x116)][_0x5f0180(0xed)] =
          window['innerHeight'] <= 0x3e8 ? window[_0x5f0180(0xdb)] : 0x3e8)),
      (this[_0x5f0180(0xd5)] = this[_0x5f0180(0x116)][_0x5f0180(0xa8)]('2d')),
      document['body'][_0x5f0180(0xaf)](
        this[_0x5f0180(0x116)],
        document[_0x5f0180(0xc5)][_0x5f0180(0xde)][0x0]
      ),
      (this['frameNo'] = 0x0),
      (startInterval = setInterval(updateGameArea, 0x14));
  },
  clear: function () {
    const _0x3b68e9 = _0xaef252;
    this[_0x3b68e9(0xd5)]['clearRect'](
      0x0,
      0x0,
      this[_0x3b68e9(0x116)][_0x3b68e9(0xdd)],
      this[_0x3b68e9(0x116)][_0x3b68e9(0xed)]
    );
  },
};
function component(
  _0x3a4008,
  _0x4f185b,
  _0x2d5590,
  _0x538b4c,
  _0x37eed6,
  _0x4cf1ef
) {
  const _0x3cbe09 = _0xaef252;
  (this['type'] = _0x4cf1ef),
    (this[_0x3cbe09(0xfd)] = 0x0),
    (this['width'] = _0x3a4008),
    (this['height'] = _0x4f185b),
    (this['speedX'] = 0x0),
    (this[_0x3cbe09(0xb8)] = 0x0),
    (this['x'] = _0x538b4c),
    (this['y'] = _0x37eed6),
    (this['gravity'] = 0x0),
    (this[_0x3cbe09(0xf8)] = 0x0),
    (this[_0x3cbe09(0xbf)] = function () {
      const _0x4a9983 = _0x3cbe09;
      ctx = myGameArea[_0x4a9983(0xd5)];
      if (this[_0x4a9983(0x112)] === _0x4a9983(0xb0))
        (ctx['font'] = this[_0x4a9983(0xdd)] + '\x20' + this[_0x4a9983(0xed)]),
          (ctx[_0x4a9983(0xa7)] = _0x2d5590),
          ctx[_0x4a9983(0x118)](this[_0x4a9983(0xb0)], this['x'], this['y']);
      else {
        if (this[_0x4a9983(0x112)] === 'img') {
          let _0x1e1637 = new Image();
          (_0x1e1637['src'] = _0x4a9983(0xcb)),
            ctx[_0x4a9983(0xf4)](
              _0x1e1637,
              this['x'],
              this['y'],
              _0x3a4008,
              _0x4f185b
            );
        } else
          (ctx['fillStyle'] = _0x2d5590),
            ctx[_0x4a9983(0x10c)](),
            roundRect(
              ctx,
              this['x'],
              this['y'],
              this['width'],
              this[_0x4a9983(0xed)],
              0xa,
              !![]
            ),
            ctx[_0x4a9983(0xb6)]();
      }
    }),
    (this['newPos'] = function () {
      const _0x12601f = _0x3cbe09;
      (this[_0x12601f(0xf8)] += this[_0x12601f(0xbe)]),
        (this['x'] += this[_0x12601f(0xe8)]),
        (this['y'] += this['speedY'] + this[_0x12601f(0xf8)]),
        this['hitBottom'](),
        this[_0x12601f(0xd4)]();
    }),
    (this[_0x3cbe09(0xea)] = function () {
      const _0x1cecc6 = _0x3cbe09;
      let _0x53b641 =
        myGameArea['canvas'][_0x1cecc6(0xed)] - this[_0x1cecc6(0xed)];
      this['y'] > _0x53b641 &&
        ((this['y'] = _0x53b641), (this[_0x1cecc6(0xf8)] = 0x0));
    }),
    (this[_0x3cbe09(0xd4)] = function () {
      const _0x4a19de = _0x3cbe09;
      let _0x104952 =
        myGameArea[_0x4a19de(0x116)][_0x4a19de(0xed)] - this[_0x4a19de(0xed)];
      this['y'] < 0x0 &&
        ((this['y'] = _0x104952), (this[_0x4a19de(0xf8)] = 0x0));
    });
  const _0x2471e0 = () => {
    const _0x10e8b5 = _0x3cbe09;
    window[_0x10e8b5(0xba)][_0x10e8b5(0x11c)](_0x10e8b5(0xe4), punt),
      (document[_0x10e8b5(0xa1)](_0x10e8b5(0xf6))[_0x10e8b5(0x106)][
        _0x10e8b5(0xf2)
      ] = _0x10e8b5(0xf5)),
      clearInterval(startInterval),
      (document[_0x10e8b5(0xa1)](_0x10e8b5(0xf6))[_0x10e8b5(0x106)][
        _0x10e8b5(0xc2)
      ] = _0x10e8b5(0xc7)),
      (document[_0x10e8b5(0xa1)]('start-game')['style'][_0x10e8b5(0xbd)] =
        _0x10e8b5(0xe3)),
      (document['getElementById'](_0x10e8b5(0xe7))[_0x10e8b5(0x106)][
        _0x10e8b5(0xbd)
      ] = 'none'),
      (document[_0x10e8b5(0xa1)](_0x10e8b5(0x10b))[_0x10e8b5(0x106)][
        _0x10e8b5(0xbd)
      ] = _0x10e8b5(0xec)),
      (document[_0x10e8b5(0xa1)]('audio-btn')['style']['display'] =
        _0x10e8b5(0xec)),
      (document['getElementById'](_0x10e8b5(0xb2))[_0x10e8b5(0x109)] =
        myScore[_0x10e8b5(0xb0)]),
      (infoBtn['style']['display'] = _0x10e8b5(0xec)),
      (rankingBtn['style'][_0x10e8b5(0xbd)] = _0x10e8b5(0xec)),
      (document[_0x10e8b5(0xc5)]['style'][_0x10e8b5(0xb4)] = 'hidden'),
      (document['getElementById'](_0x10e8b5(0xcc))[_0x10e8b5(0x106)][
        'display'
      ] = _0x10e8b5(0x100)),
      playAudio(_0x10e8b5(0x10f));
  };
  this[_0x3cbe09(0xe2)] = function (_0x457d94) {
    const _0x1b341a = _0x3cbe09;
    let _0x3d45ad = this['x'],
      _0x451c71 = this['x'] + this['width'] - 0x4,
      _0x47072d = this['y'] + 0xa,
      _0x12f926 = this['y'] + this['height'] - 0x4,
      _0x1d92e0 = _0x457d94['x'],
      _0x5b1a1c = _0x457d94['x'] + _0x457d94[_0x1b341a(0xdd)],
      _0x228771 = _0x457d94['y'],
      _0x35137b = _0x457d94['y'] + _0x457d94['height'],
      _0x71d8e1 = !![];
    return (
      (_0x12f926 < _0x228771 ||
        _0x47072d > _0x35137b ||
        _0x451c71 < _0x1d92e0 ||
        _0x3d45ad > _0x5b1a1c) &&
        (_0x71d8e1 = ![]),
      _0x71d8e1
        ? _0x2471e0()
        : ((document['getElementById'](_0x1b341a(0xf6))[_0x1b341a(0x106)][
            _0x1b341a(0xbd)
          ] = _0x1b341a(0xec)),
          (document[_0x1b341a(0xa1)](_0x1b341a(0xcc))[_0x1b341a(0x106)][
            _0x1b341a(0xbd)
          ] = 'none')),
      _0x71d8e1
    );
  };
}
function roundRect(
  _0x1fadb9,
  _0xbe145,
  _0x12b881,
  _0x5c3caf,
  _0x5e0a34,
  _0x146851 = 0x5,
  _0x184ed0 = ![],
  _0x1c56d5 = !![]
) {
  const _0x5e2f67 = _0xaef252;
  typeof _0x146851 === 'number'
    ? (_0x146851 = {
        tl: _0x146851,
        tr: _0x146851,
        br: _0x146851,
        bl: _0x146851,
      })
    : (_0x146851 = { ...{ tl: 0x0, tr: 0x0, br: 0x0, bl: 0x0 }, ..._0x146851 }),
    _0x1fadb9[_0x5e2f67(0x10c)](),
    _0x1fadb9[_0x5e2f67(0xac)](_0xbe145 + _0x146851['tl'], _0x12b881),
    _0x1fadb9[_0x5e2f67(0x119)](
      _0xbe145 + _0x5c3caf - _0x146851['tr'],
      _0x12b881
    ),
    _0x1fadb9['quadraticCurveTo'](
      _0xbe145 + _0x5c3caf,
      _0x12b881,
      _0xbe145 + _0x5c3caf,
      _0x12b881 + _0x146851['tr']
    ),
    _0x1fadb9[_0x5e2f67(0x119)](
      _0xbe145 + _0x5c3caf,
      _0x12b881 + _0x5e0a34 - _0x146851['br']
    ),
    _0x1fadb9['quadraticCurveTo'](
      _0xbe145 + _0x5c3caf,
      _0x12b881 + _0x5e0a34,
      _0xbe145 + _0x5c3caf - _0x146851['br'],
      _0x12b881 + _0x5e0a34
    ),
    _0x1fadb9['lineTo'](_0xbe145 + _0x146851['bl'], _0x12b881 + _0x5e0a34),
    _0x1fadb9['quadraticCurveTo'](
      _0xbe145,
      _0x12b881 + _0x5e0a34,
      _0xbe145,
      _0x12b881 + _0x5e0a34 - _0x146851['bl']
    ),
    _0x1fadb9[_0x5e2f67(0x119)](_0xbe145, _0x12b881 + _0x146851['tl']),
    _0x1fadb9[_0x5e2f67(0xb9)](
      _0xbe145,
      _0x12b881,
      _0xbe145 + _0x146851['tl'],
      _0x12b881
    ),
    _0x1fadb9[_0x5e2f67(0xbb)](),
    _0x184ed0 && _0x1fadb9[_0x5e2f67(0xb6)](),
    _0x1c56d5 && _0x1fadb9['stroke']();
}
const randomIntForIncreaseSpeed = Math[_0xaef252(0xa0)](
    Math[_0xaef252(0xc8)]() * (0xfd2 - 0x898 + 0x1) + 0x898
  ),
  randomIntForChangeAsshole = Math[_0xaef252(0xa0)](
    Math[_0xaef252(0xc8)]() * (0x1b58 - 0x1770 + 0x1) + 0x1770
  );
function updateGameArea() {
  const _0x5e5afa = _0xaef252;
  let _0x68ca13,
    _0x1186b2,
    _0x4d369d,
    _0x207fc4,
    _0xcea0b7,
    _0xdc00bc,
    _0x148993,
    _0x10fdb5 = this[_0x5e5afa(0xe9)] < randomIntForIncreaseSpeed ? -1.8 : -3.8,
    _0x387d67 = _0x10fdb5 === -1.8 ? 0x96 : 0x5f,
    _0xd3d2e9 = 0x3c,
    _0x44921e = _0x387d67 === 0x96 ? 0x78 : 0x55;
  for (i = 0x0; i < myObstacles[_0x5e5afa(0xad)]; i += 0x1) {
    if (gameCharacter[_0x5e5afa(0xe2)](myObstacles[i])) return;
  }
  myGameArea['clear'](), (myGameArea[_0x5e5afa(0xb5)] += 0x1);
  if (myGameArea[_0x5e5afa(0xb5)] == 0x1 || everyinterval(_0x387d67)) {
    (_0x68ca13 = myGameArea[_0x5e5afa(0x116)]['width']),
      (_0x207fc4 = 0x14),
      (_0xcea0b7 = 0x10e),
      (_0x1186b2 = Math[_0x5e5afa(0xa0)](
        Math['random']() * (_0xcea0b7 - _0x207fc4 + 0x1) + _0x207fc4
      )),
      (_0xdc00bc = _0xd3d2e9),
      (_0x148993 = _0x44921e);
    const _0xaa90 = this[_0x5e5afa(0xe9)] > randomIntForChangeAsshole,
      _0x2539fe = _0xaa90 ? 0x4b : 0x2d,
      _0x10ac02 = _0xaa90 ? _0x5e5afa(0xd7) : _0x5e5afa(0xb7),
      _0x10e8b6 = _0xaa90 ? _0x5e5afa(0xaa) : _0x5e5afa(0xe1);
    this[_0x5e5afa(0xe9)] > randomIntForIncreaseSpeed &&
      this[_0x5e5afa(0xe9)] < randomIntForIncreaseSpeed + 0x96 &&
      playAudio(_0x5e5afa(0xa9)),
      this[_0x5e5afa(0xe9)] > randomIntForChangeAsshole &&
        this[_0x5e5afa(0xe9)] < randomIntForChangeAsshole + 0x96 &&
        playAudio(_0x5e5afa(0xef)),
      (_0x4d369d = Math[_0x5e5afa(0xa0)](
        Math[_0x5e5afa(0xc8)]() * (_0x148993 - _0xdc00bc + 0x1) + _0xdc00bc
      )),
      myObstacles[_0x5e5afa(0x114)](
        new component(_0x2539fe, _0x1186b2, _0x10ac02, _0x68ca13, 0x0)
      ),
      myObstacles[_0x5e5afa(0x114)](
        new component(
          _0x2539fe,
          _0x68ca13 - _0x1186b2 - _0x4d369d,
          _0x10e8b6,
          _0x68ca13,
          _0x1186b2 + _0x4d369d
        )
      );
  }
  for (i = 0x0; i < myObstacles[_0x5e5afa(0xad)]; i += 0x1) {
    (myObstacles[i]['x'] += _0x10fdb5), myObstacles[i][_0x5e5afa(0xbf)]();
  }
  this['updateScore'](),
    myScore[_0x5e5afa(0xbf)](),
    gameCharacter[_0x5e5afa(0xa4)](),
    gameCharacter['update']();
}
function updateScore() {
  const _0x135e21 = _0xaef252,
    _0xdc3e9 = myGameArea[_0x135e21(0xb5)] - 0x190,
    _0x3dd8e3 = Math[_0x135e21(0x9e)](_0xdc3e9);
  (this[_0x135e21(0xe9)] = _0x3dd8e3),
    (punt = _0x3dd8e3),
    (myScore[_0x135e21(0xb0)] =
      _0x135e21(0x10d) + (_0x3dd8e3 < 0x0 ? 0x0 : _0x3dd8e3));
}
function playAudio(_0x5115f7) {
  const _0x2e1809 = _0xaef252;
  if (audioIconPlay)
    switch (_0x5115f7) {
      case 'gameOver':
        audio[_0x2e1809(0xc6)](),
          (audio[_0x2e1809(0xa5)] = 0x0),
          (audio[_0x2e1809(0xab)] = _0x2e1809(0xd2)),
          audio[_0x2e1809(0xe5)]();
        break;
      case _0x2e1809(0xa9):
        let _0x5448d6 = new Audio();
        (_0x5448d6[_0x2e1809(0xab)] = 'sounds/oh-my-god.mp3'),
          _0x5448d6['play'](),
          (audio[_0x2e1809(0xab)] = _0x2e1809(0x104)),
          audio['play']();
        break;
      case 'scoreCrazyLevels':
        let _0x418062 = new Audio();
        (_0x418062[_0x2e1809(0xab)] = _0x2e1809(0xdf)),
          _0x418062['play'](),
          (audio[_0x2e1809(0xab)] = 'sounds/BYOB.mp3'),
          audio[_0x2e1809(0xe5)]();
        break;
      default:
        break;
    }
}
function everyinterval(_0x5b9fb2) {
  const _0x267506 = _0xaef252;
  if ((myGameArea[_0x267506(0xb5)] / _0x5b9fb2) % 0x1 == 0x0) return !![];
  return ![];
}
function accelerate(_0x5d5c39) {
  return (gameCharacter['gravity'] = _0x5d5c39);
}
const flyPoop = document['getElementById'](_0xaef252(0x9f));
flyPoop[_0xaef252(0xf7)](
  _0xaef252(0xda),
  function (_0x55e267) {
    _0x55e267['preventDefault'](), soundFart();
  },
  ![]
);
function soundFart() {
  const _0x2a5842 = _0xaef252;
  let _0x5cf7ee = new Audio();
  (_0x5cf7ee[_0x2a5842(0xab)] = 'sounds/fart.mp3'),
    audioIconPlay && _0x5cf7ee[_0x2a5842(0x11d)]
      ? _0x5cf7ee[_0x2a5842(0xe5)]()
      : (_0x5cf7ee[_0x2a5842(0xc6)](), (_0x5cf7ee[_0x2a5842(0xa5)] = 0x0));
}
function shareLink() {
  const _0x2f40da = _0xaef252,
    _0x27d35a = _0x2f40da(0x117),
    _0x580b28 = document['getElementById'](_0x2f40da(0xc0));
  navigator[_0x2f40da(0xfe)][_0x2f40da(0xd3)](_0x27d35a),
    document[_0x2f40da(0xf7)]('copy', function (_0xd1c8d3) {
      const _0x38a8ce = _0x2f40da;
      _0xd1c8d3[_0x38a8ce(0xee)]['setData'](_0x38a8ce(0x11a), _0x27d35a),
        _0xd1c8d3[_0x38a8ce(0x11e)]();
    }),
    document[_0x2f40da(0xfb)]('copy'),
    (_0x580b28[_0x2f40da(0x106)][_0x2f40da(0xbd)] = _0x2f40da(0x100)),
    setTimeout(
      () => (_0x580b28[_0x2f40da(0x106)]['display'] = _0x2f40da(0xec)),
      0x1194
    );
}
function _0x19f6(_0x26ef91, _0x104ba3) {
  const _0x599ed4 = _0x599e();
  return (
    (_0x19f6 = function (_0x19f6e4, _0x80b2b7) {
      _0x19f6e4 = _0x19f6e4 - 0x9e;
      let _0x3516f5 = _0x599ed4[_0x19f6e4];
      return _0x3516f5;
    }),
    _0x19f6(_0x26ef91, _0x104ba3)
  );
}
flyPoop[_0xaef252(0xf7)](
  _0xaef252(0xcd),
  function (_0x1a1e1c) {
    const _0x5d8729 = _0xaef252;
    _0x1a1e1c[_0x5d8729(0x11e)](),
      accelerate(-0.4),
      soundFart(),
      (flyPoop[_0x5d8729(0x106)]['boxShadow'] = _0x5d8729(0xa6));
  },
  ![]
),
  flyPoop[_0xaef252(0xf7)](
    _0xaef252(0xa3),
    function (_0x203104) {
      const _0x26a0dd = _0xaef252;
      _0x203104['preventDefault'](),
        accelerate(0.15),
        (flyPoop[_0x26a0dd(0x106)][_0x26a0dd(0xf1)] = 'none');
    },
    ![]
  ),
  (infoBtn[_0xaef252(0x115)] = function () {
    const _0x4314de = _0xaef252;
    infoModal[_0x4314de(0x106)]['display'] = _0x4314de(0x100);
  }),
  (infoClose[_0xaef252(0x115)] = function () {
    const _0x10102e = _0xaef252;
    infoModal[_0x10102e(0x106)][_0x10102e(0xbd)] = 'none';
  }),
  (rankingBtn['onclick'] = function () {
    const _0x3ef74d = _0xaef252;
    rankingModal['style']['display'] = _0x3ef74d(0x100);
  }),
  (rankingClose[_0xaef252(0x115)] = function () {
    const _0x336d0f = _0xaef252;
    rankingModal[_0x336d0f(0x106)][_0x336d0f(0xbd)] = _0x336d0f(0xec);
  }),
  (insertNicknameClose[_0xaef252(0x115)] = function () {
    const _0x48b495 = _0xaef252;
    insertNicknameModal[_0x48b495(0x106)][_0x48b495(0xbd)] = _0x48b495(0xec);
  }),
  (window['onclick'] = function (_0x195cac) {
    const _0x2c2303 = _0xaef252;
    _0x195cac[_0x2c2303(0xc1)] == infoModal &&
      (infoModal[_0x2c2303(0x106)][_0x2c2303(0xbd)] = 'none'),
      _0x195cac[_0x2c2303(0xc1)] == rankingModal &&
        (rankingModal['style'][_0x2c2303(0xbd)] = _0x2c2303(0xec)),
      _0x195cac[_0x2c2303(0xc1)] == insertNicknameModal &&
        (insertNicknameModal[_0x2c2303(0x106)][_0x2c2303(0xbd)] = 'none');
  });
function toggleAudio() {
  const _0x3922a4 = _0xaef252,
    _0x280fad = document['getElementById'](_0x3922a4(0xeb));
  (audio[_0x3922a4(0xd9)] = !![]),
    (audio[_0x3922a4(0x113)] = !![]),
    (audioIconPlay = !audioIconPlay),
    audioIconPlay
      ? ((_0x280fad['src'] = _0x3922a4(0xe6)),
        (audio[_0x3922a4(0xae)] = 0.65),
        audio[_0x3922a4(0xe5)]())
      : ((_0x280fad['src'] = _0x3922a4(0xce)), audio['pause']());
}
