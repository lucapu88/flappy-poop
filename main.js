const R = Z;
(function (r, E) {
  const m = Z,
    D = r();
  while (!![]) {
    try {
      const Q =
        parseInt(m(0x1c8)) / 0x1 +
        -parseInt(m(0x1fe)) / 0x2 +
        parseInt(m(0x170)) / 0x3 +
        (parseInt(m(0x1dc)) / 0x4) * (parseInt(m(0x162)) / 0x5) +
        (parseInt(m(0x171)) / 0x6) * (-parseInt(m(0x1af)) / 0x7) +
        -parseInt(m(0x1e9)) / 0x8 +
        (-parseInt(m(0x18b)) / 0x9) * (-parseInt(m(0x1be)) / 0xa);
      if (Q === E) break;
      else D['push'](D['shift']());
    } catch (o) {
      D['push'](D['shift']());
    }
  }
})(q, 0x9101c);
function q() {
  const r7 = [
    'ebp\x27)',
    'preve',
    'boxSh',
    'cknam',
    'frame',
    'tyle',
    'All\x20r',
    'urveT',
    'touch',
    'shit.',
    'SCORE',
    '649558QwJHNi',
    'llYea',
    'pause',
    '\x20nick',
    'saveN',
    'rando',
    'ls?id',
    '=io.k',
    '-icon',
    'oop',
    '#6A28',
    'quadr',
    'fillS',
    'low',
    'ver.w',
    'img/s',
    'userA',
    'gameO',
    'getIt',
    'displ',
    'ved.',
    'Crazy',
    'pLot',
    'getCo',
    'score',
    'odula',
    'led',
    'ing',
    'Stora',
    'terOf',
    'value',
    'ent',
    'oncli',
    'clipb',
    'copie',
    'btn',
    '(((.+',
    'Enter',
    'updat',
    'utolu',
    'stene',
    '#964E',
    'start',
    'lying',
    'loop',
    'Width',
    'ttom',
    'ata',
    'nospa',
    'ault',
    'r.cap',
    'font',
    'Text',
    '0000',
    'ight\x20',
    's/toi',
    'none',
    'eElem',
    'lengt',
    'audio',
    'moveT',
    'close',
    'img',
    '1591010LTlkQl',
    'e-mod',
    '-game',
    'tBefo',
    'hitTo',
    'sByCl',
    'trim',
    'style',
    'ext',
    'newPo',
    'setIt',
    'Color',
    '\x20Capu',
    'eScor',
    '3557553oRVMVN',
    '27402KsviIg',
    'lay',
    'r\x20New',
    'da\x20Co',
    '#2020',
    'width',
    'img/f',
    'ickna',
    'my-go',
    'test',
    'drawI',
    'ourie',
    'gravi',
    'ById',
    'place',
    '\x20your',
    'block',
    'local',
    'begin',
    '_poop',
    'Puppe',
    'opera',
    'aticC',
    'Path',
    'reser',
    'ver',
    '1017sdVSqO',
    'getEl',
    'px\x2035',
    'overf',
    'nickn',
    'mage',
    'GoesU',
    'volum',
    'setDa',
    'holde',
    'plain',
    'ing_L',
    'fillT',
    'text',
    'targe',
    'sound',
    'lineT',
    'end',
    'heigh',
    '-btn',
    'play',
    ')+)+)',
    'Rect',
    'disab',
    'ay.go',
    'https',
    'link-',
    'info-',
    'searc',
    '-text',
    'retry',
    'nsole',
    's/oh-',
    'oardD',
    '30px',
    'copy',
    '1106ecaSjl',
    'px\x206p',
    'punt',
    'off.w',
    'With',
    'creat',
    'const',
    'child',
    'x\x20#00',
    'curre',
    'eam',
    '\x27Luci',
    'adow',
    'copyr',
    's/far',
    '26120mkYjBM',
    'ca\x20-\x20',
    'fill',
    'Image',
    'addEv',
    'backg',
    'canva',
    'tore/',
    'url(\x27',
    'ement',
    '2441tQCKwa',
    'crash',
    'reNum',
    'ber',
    'inser',
    'ame',
    'inner',
    'body',
    'ntDef',
    'conte',
    'apply',
    's/Mas',
    'src',
    'ranki',
    'mySco',
    'tySpe',
    'B.mp3',
    'ntext',
    't.mp3',
    'detai',
    '4MAQdrL',
    'ng-bt',
    'name',
    'numbe',
    'Heigh',
    'dal',
    'forEa',
    'entLi',
    'type',
    'Level',
    'com/s',
    'ebp',
    'hidde',
    '1290696VygsLy',
    'ound-',
    'clear',
    'floor',
    's/BYO',
    'speed',
    'assNa',
    '.webp',
    'Shopp',
    'hitBo',
  ];
  q = function () {
    return r7;
  };
  return q();
}
let gameCharacter,
  myObstacles = [],
  myScore,
  myScoreNumber,
  infoModal = document[R(0x18c) + 'ement' + 'ById'](R(0x1a6) + 'modal'),
  rankingModal = document[R(0x18c) + R(0x1c7) + R(0x17e)](
    R(0x1d5) + 'ng-mo' + R(0x1e1)
  ),
  insertNicknameModal = document[R(0x18c) + R(0x1c7) + 'ById'](
    'no-ni' + R(0x1f6) + R(0x163) + 'al'
  ),
  infoBtn = document[R(0x18c) + R(0x1c7) + R(0x17e)](R(0x1a6) + R(0x146)),
  rankingBtn = document[R(0x18c) + R(0x1c7) + 'ById'](
    R(0x1d5) + R(0x1dd) + 'n'
  ),
  infoClose =
    document[R(0x18c) + R(0x1c7) + R(0x167) + R(0x1ef) + 'me']('close')[0x0],
  rankingClose = document[R(0x18c) + R(0x1c7) + R(0x167) + 'assNa' + 'me'](
    R(0x160)
  )[0x1],
  insertNicknameClose =
    document[R(0x18c) + R(0x1c7) + 'sByCl' + 'assNa' + 'me']('close')[0x2],
  startBtn = document[R(0x18c) + R(0x1c7) + R(0x17e)](R(0x14d) + R(0x19e)),
  audioIconPlay = ![],
  noNickname = ![],
  iosDevice = ![],
  punt;
function startGame() {
  const v = R;
  this[v(0x202) + v(0x178) + 'me'](
    document[v(0x18c) + 'ement' + v(0x17e)](v(0x18f) + v(0x1cd))['value']
  ),
    soundFart(),
    noNickname &&
      ((gameCharacter = new component(0x37, 0x28, '', 0xa, 0x78, v(0x161))),
      (gameCharacter['gravi' + 'ty'] = 0.05),
      (myScore = new component(
        v(0x1ad),
        v(0x1ba) +
          v(0x174) +
          v(0x1aa) +
          '\x27,\x20\x27C' +
          v(0x17c) +
          v(0x173) +
          '\x27,\x20mo' +
          v(0x153) +
          'ce',
        v(0x175) + '20',
        0x14,
        0x1e,
        v(0x198)
      )),
      (document['getEl' + v(0x1c7) + v(0x17e)](v(0x14d) + v(0x164))[v(0x169)][
        'displ' + 'ay'
      ] = v(0x15b)),
      gameCharacter && myGameArea[v(0x14d)]());
}
function saveNickname(r) {
  const k = R,
    E = r[k(0x168)]();
  !E
    ? ((insertNicknameModal['style'][k(0x136) + 'ay'] = k(0x181)),
      (noNickname = ![]))
    : (window['local' + k(0x13f) + 'ge'][k(0x16c) + 'em'](k(0x18f) + 'ame', E),
      (document[k(0x18c) + 'ement' + 'ById']('nickn' + 'ame')[k(0x169)][
        k(0x136) + 'ay'
      ] = 'none'),
      (noNickname = !![]));
}
async function getNickname() {
  const s = R,
    r = await localStorage[s(0x135) + 'em'](s(0x18f) + 'ame');
  r
    ? (document['getEl' + s(0x1c7) + s(0x17e)](s(0x18f) + 'ame')[s(0x141)] = r)
    : (document[s(0x18c) + 'ement' + s(0x17e)]('nickn' + 'ame')[
        s(0x17f) + s(0x194) + 'r'
      ] = s(0x148) + s(0x180) + s(0x201) + s(0x1de)),
    loadStartBtn();
}
function loadStartBtn() {
  setTimeout(() => {
    const M = Z;
    (startBtn[M(0x169)]['opaci' + 'ty'] = 0x1),
      (startBtn[M(0x1a2) + M(0x13d)] = ![]);
  }, 0x3e8);
}
function getIos() {
  const F = R,
    D = (function () {
      let I = !![];
      return function (K, B) {
        const O = I
          ? function () {
              const J = Z;
              if (B) {
                const n = B[J(0x1d2)](K, arguments);
                return (B = null), n;
              }
            }
          : function () {};
        return (I = ![]), O;
      };
    })(),
    Q = D(this, function () {
      const V = Z;
      return Q['toStr' + V(0x13e)]()
        [V(0x1a7) + 'h'](V(0x147) + V(0x1a0) + '+$')
        ['toStr' + V(0x13e)]()
        [V(0x1b5) + 'ructo' + 'r'](Q)
        [V(0x1a7) + 'h'](V(0x147) + V(0x1a0) + '+$');
    });
  Q();
  const o =
    navigator[F(0x133) + 'gent'] ||
    navigator['vendo' + 'r'] ||
    window[F(0x186)];
  /iPad|iPhone|iPod/[F(0x17a)](o) &&
    !window['MSStr' + F(0x1b9)] &&
    (iosDevice = !![]);
}
getIos();
let myGameArea = {
  canvas: document[R(0x1b4) + R(0x15c) + R(0x142)](R(0x1c4) + 's'),
  start: function () {
    const A = R;
    iosDevice
      ? ((this[A(0x1c4) + 's'][A(0x176)] = 0x2ee),
        (this[A(0x1c4) + 's'][A(0x19d) + 't'] = 0x19f))
      : ((this[A(0x1c4) + 's'][A(0x176)] = window['inner' + A(0x150)]),
        (this[A(0x1c4) + 's']['heigh' + 't'] =
          window[A(0x1ce) + A(0x1e0) + 't'] <= 0x3e8
            ? window[A(0x1ce) + A(0x1e0) + 't']
            : 0x3e8)),
      (this[A(0x1d1) + 'xt'] = this[A(0x1c4) + 's'][A(0x13a) + A(0x1d9)]('2d')),
      document[A(0x1cf)][A(0x1cc) + A(0x165) + 're'](
        this[A(0x1c4) + 's'],
        document[A(0x1cf)][A(0x1b6) + 'Nodes'][0x0]
      ),
      (this[A(0x1f7) + 'No'] = 0x0),
      (startInterval = setInterval(updateGameArea, 0x14));
  },
  clear: function () {
    const w = R;
    this[w(0x1d1) + 'xt'][w(0x1eb) + w(0x1a1)](
      0x0,
      0x0,
      this['canva' + 's']['width'],
      this[w(0x1c4) + 's'][w(0x19d) + 't']
    );
  },
};
function component(r, E, D, Q, o, I) {
  const g = R;
  (this[g(0x1e4)] = I),
    (this[g(0x13b)] = 0x0),
    (this[g(0x176)] = r),
    (this[g(0x19d) + 't'] = E),
    (this[g(0x1ee) + 'X'] = 0x0),
    (this[g(0x1ee) + 'Y'] = 0x0),
    (this['x'] = Q),
    (this['y'] = o),
    (this[g(0x17d) + 'ty'] = 0x0),
    (this[g(0x17d) + g(0x1d7) + 'ed'] = 0x0),
    (this[g(0x149) + 'e'] = function () {
      const z = g;
      ctx = myGameArea[z(0x1d1) + 'xt'];
      if (this[z(0x1e4)] === 'text')
        (ctx[z(0x156)] = this['width'] + '\x20' + this[z(0x19d) + 't']),
          (ctx['fillS' + z(0x1f8)] = D),
          ctx[z(0x197) + z(0x16a)](this[z(0x198)], this['x'], this['y']);
      else {
        if (this['type'] === z(0x161)) {
          let B = new Image();
          (B['src'] = z(0x177) + z(0x14e) + z(0x184) + z(0x1f0)),
            ctx[z(0x17b) + z(0x190)](B, this['x'], this['y'], r, E);
        } else
          (ctx[z(0x12f) + z(0x1f8)] = D),
            ctx[z(0x183) + z(0x188)](),
            roundRect(
              ctx,
              this['x'],
              this['y'],
              this['width'],
              this[z(0x19d) + 't'],
              0xa,
              !![]
            ),
            ctx['fill']();
      }
    }),
    (this['newPo' + 's'] = function () {
      const W = g;
      (this[W(0x17d) + W(0x1d7) + 'ed'] += this['gravi' + 'ty']),
        (this['x'] += this[W(0x1ee) + 'X']),
        (this['y'] += this['speed' + 'Y'] + this[W(0x17d) + 'tySpe' + 'ed']),
        this[W(0x1f2) + W(0x151)](),
        this[W(0x166) + 'p']();
    }),
    (this[g(0x1f2) + g(0x151)] = function () {
      const c = g;
      let B = myGameArea[c(0x1c4) + 's'][c(0x19d) + 't'] - this[c(0x19d) + 't'];
      this['y'] > B &&
        ((this['y'] = B), (this[c(0x17d) + 'tySpe' + 'ed'] = 0x0));
    }),
    (this['hitTo' + 'p'] = function () {
      const H = g;
      let B = myGameArea[H(0x1c4) + 's'][H(0x19d) + 't'] - this[H(0x19d) + 't'];
      this['y'] < 0x0 &&
        ((this['y'] = B), (this[H(0x17d) + H(0x1d7) + 'ed'] = 0x0));
    });
  const K = () => {
    const b = g;
    window[b(0x182) + 'Stora' + 'ge'][b(0x16c) + 'em'](b(0x1b1), punt),
      (document[b(0x18c) + 'ement' + b(0x17e)]('start' + '-game')['style'][
        b(0x1c3) + 'round' + b(0x16d)
      ] = '#e26b' + '6d'),
      clearInterval(startInterval),
      (document[b(0x18c) + b(0x1c7) + b(0x17e)](b(0x14d) + b(0x164))[b(0x169)][
        b(0x1c3) + 'round' + b(0x1c1)
      ] = b(0x1c6) + 'img/g' + 'ame-o' + b(0x131) + b(0x1f3)),
      (document[b(0x18c) + b(0x1c7) + b(0x17e)]('start' + b(0x164))[b(0x169)][
        b(0x136) + 'ay'
      ] = 'flex'),
      (document[b(0x18c) + 'ement' + b(0x17e)](b(0x14d) + b(0x19e))[b(0x169)][
        b(0x136) + 'ay'
      ] = b(0x15b)),
      (document[b(0x18c) + 'ement' + 'ById']('label' + '-nick' + b(0x1de))[
        b(0x169)
      ][b(0x136) + 'ay'] = b(0x15b)),
      (document['getEl' + 'ement' + b(0x17e)](b(0x15e) + '-btn')[b(0x169)][
        b(0x136) + 'ay'
      ] = 'none'),
      (document[b(0x18c) + b(0x1c7) + 'ById'](b(0x13b) + b(0x1a8))[
        b(0x1ce) + 'Text'
      ] = myScore['text']),
      (infoBtn['style'][b(0x136) + 'ay'] = b(0x15b)),
      (rankingBtn[b(0x169)][b(0x136) + 'ay'] = b(0x15b)),
      (document[b(0x1cf)][b(0x169)][b(0x18e) + b(0x130)] = b(0x1e8) + 'n'),
      (document[b(0x18c) + b(0x1c7) + b(0x17e)]('retry' + b(0x19e))[b(0x169)][
        b(0x136) + 'ay'
      ] = 'block'),
      playAudio(b(0x134) + b(0x18a));
  };
  this[g(0x1c9) + g(0x1b3)] = function (B) {
    const X = g;
    let O = this['x'],
      n = this['x'] + this[X(0x176)] - 0x4,
      p = this['y'] + 0xa,
      f = this['y'] + this[X(0x19d) + 't'] - 0x4,
      u = B['x'],
      L = B['x'] + B[X(0x176)],
      t = B['y'],
      P = B['y'] + B[X(0x19d) + 't'],
      l = !![];
    return (
      (f < t || p > P || n < u || O > L) && (l = ![]),
      l
        ? K()
        : ((document[X(0x18c) + X(0x1c7) + X(0x17e)](X(0x14d) + '-game')[
            X(0x169)
          ][X(0x136) + 'ay'] = 'none'),
          (document[X(0x18c) + X(0x1c7) + X(0x17e)](X(0x1a9) + X(0x19e))[
            'style'
          ][X(0x136) + 'ay'] = X(0x15b))),
      l
    );
  };
}
function roundRect(r, E, D, Q, o, I = 0x5, K = ![], B = !![]) {
  const Y = R;
  typeof I === Y(0x1df) + 'r'
    ? (I = { tl: I, tr: I, br: I, bl: I })
    : (I = { ...{ tl: 0x0, tr: 0x0, br: 0x0, bl: 0x0 }, ...I }),
    r[Y(0x183) + Y(0x188)](),
    r[Y(0x15f) + 'o'](E + I['tl'], D),
    r[Y(0x19b) + 'o'](E + Q - I['tr'], D),
    r[Y(0x12e) + Y(0x187) + Y(0x1fa) + 'o'](E + Q, D, E + Q, D + I['tr']),
    r['lineT' + 'o'](E + Q, D + o - I['br']),
    r['quadr' + Y(0x187) + Y(0x1fa) + 'o'](
      E + Q,
      D + o,
      E + Q - I['br'],
      D + o
    ),
    r[Y(0x19b) + 'o'](E + I['bl'], D + o),
    r[Y(0x12e) + Y(0x187) + Y(0x1fa) + 'o'](E, D + o, E, D + o - I['bl']),
    r['lineT' + 'o'](E, D + I['tl']),
    r[Y(0x12e) + Y(0x187) + 'urveT' + 'o'](E, D, E + I['tl'], D),
    r[Y(0x160) + Y(0x188)](),
    K && r[Y(0x1c0)](),
    B && r['strok' + 'e']();
}
const randomIntForIncreaseSpeed = Math['floor'](
    Math[R(0x203) + 'm']() * (0xfd2 - 0x898 + 0x1) + 0x898
  ),
  randomIntForChangeAsshole = Math['floor'](
    Math[R(0x203) + 'm']() * (0x1b58 - 0x1770 + 0x1) + 0x1770
  );
function updateGameArea() {
  const C = R;
  let r,
    E,
    D,
    Q,
    o,
    I,
    K,
    B =
      this[C(0x1d6) + C(0x1ca) + C(0x1cb)] < randomIntForIncreaseSpeed
        ? -1.8
        : -3.8,
    O = B === -1.8 ? 0x96 : 0x5f,
    n = 0x3c,
    p = O === 0x96 ? 0x78 : 0x55;
  for (i = 0x0; i < myObstacles[C(0x15d) + 'h']; i += 0x1) {
    if (gameCharacter[C(0x1c9) + C(0x1b3)](myObstacles[i])) return;
  }
  myGameArea['clear'](), (myGameArea[C(0x1f7) + 'No'] += 0x1);
  if (myGameArea[C(0x1f7) + 'No'] == 0x1 || everyinterval(O)) {
    (r = myGameArea[C(0x1c4) + 's'][C(0x176)]),
      (Q = 0x14),
      (o = 0x10e),
      (E = Math[C(0x1ec)](Math[C(0x203) + 'm']() * (o - Q + 0x1) + Q)),
      (I = n),
      (K = p);
    const f = this[C(0x1d6) + C(0x1ca) + C(0x1cb)] > randomIntForChangeAsshole,
      u = f ? 0x4b : 0x2d,
      L = f ? '#7440' + '09' : C(0x14c) + '00',
      t = f ? '#451b' + '00' : C(0x12d) + '00';
    this[C(0x1d6) + 'reNum' + 'ber'] > randomIntForIncreaseSpeed &&
      this[C(0x1d6) + 'reNum' + C(0x1cb)] < randomIntForIncreaseSpeed + 0x96 &&
      playAudio('score' + C(0x191) + 'pLot'),
      this[C(0x1d6) + C(0x1ca) + C(0x1cb)] > randomIntForChangeAsshole &&
        this['mySco' + C(0x1ca) + C(0x1cb)] <
          randomIntForChangeAsshole + 0x96 &&
        playAudio(C(0x13b) + C(0x138) + 'Level' + 's'),
      (D = Math[C(0x1ec)](Math[C(0x203) + 'm']() * (K - I + 0x1) + I)),
      myObstacles['push'](new component(u, E, L, r, 0x0)),
      myObstacles['push'](new component(u, r - E - D, t, r, E + D));
  }
  for (i = 0x0; i < myObstacles[C(0x15d) + 'h']; i += 0x1) {
    (myObstacles[i]['x'] += B), myObstacles[i][C(0x149) + 'e']();
  }
  this[C(0x149) + C(0x16f) + 'e'](),
    myScore[C(0x149) + 'e'](),
    gameCharacter[C(0x16b) + 's'](),
    gameCharacter[C(0x149) + 'e']();
}
function updateScore() {
  const S = R,
    r = myGameArea['frame' + 'No'] - 0x190,
    E = Math['ceil'](r);
  (this['mySco' + S(0x1ca) + 'ber'] = E),
    (punt = E),
    (myScore[S(0x198)] = S(0x1fd) + ':\x20' + (E < 0x0 ? 0x0 : E));
}
function playAudio(r) {
  const j = R;
  if (audioIconPlay)
    switch (r) {
      case 'gameO' + j(0x18a):
        (audio[j(0x14f)] = ![]),
          audio[j(0x200)](),
          (audio[j(0x1b8) + 'ntTim' + 'e'] = 0x0),
          (audio[j(0x1d4)] = 'sound' + j(0x15a) + 'let.m' + 'p3'),
          (audio[j(0x192) + 'e'] = 0x1),
          audio[j(0x19f)]();
        break;
      case j(0x13b) + j(0x191) + j(0x139):
        let E = new Audio();
        (E['src'] = j(0x19a) + j(0x1ab) + j(0x179) + 'd.mp3'),
          E[j(0x19f)](),
          (audio[j(0x1d4)] =
            j(0x19a) + j(0x1d3) + j(0x140) + j(0x185) + 'ts.mp' + '3'),
          (audio[j(0x192) + 'e'] = 0.5),
          audio['play']();
        break;
      case j(0x13b) + j(0x138) + j(0x1e5) + 's':
        let D = new Audio();
        (D['src'] = j(0x19a) + j(0x1ab) + j(0x1fc) + 'mp3'),
          D[j(0x19f)](),
          (audio['src'] = j(0x19a) + j(0x1ed) + j(0x1d8)),
          (audio[j(0x192) + 'e'] = 0.55),
          audio[j(0x19f)]();
        break;
      default:
        break;
    }
}
function everyinterval(r) {
  const N = R;
  if ((myGameArea[N(0x1f7) + 'No'] / r) % 0x1 == 0x0) return !![];
  return ![];
}
function accelerate(r) {
  const y = R;
  return (gameCharacter[y(0x17d) + 'ty'] = r);
}
function Z(r, E) {
  const D = q();
  return (
    (Z = function (Q, o) {
      Q = Q - 0x12a;
      let I = D[Q];
      return I;
    }),
    Z(r, E)
  );
}
function soundFart() {
  const G = R;
  let r = new Audio();
  (r['src'] = G(0x19a) + G(0x1bd) + G(0x1da)), audioIconPlay && r[G(0x19f)]();
}
function shareLink() {
  const d = R,
    r =
      d(0x1a4) +
      '://pl' +
      d(0x1a3) +
      'ogle.' +
      d(0x1e6) +
      d(0x1c5) +
      'apps/' +
      d(0x1db) +
      d(0x204) +
      d(0x12a) +
      d(0x13c) +
      d(0x155) +
      d(0x14a) +
      'ca88.' +
      d(0x1f1) +
      d(0x196) +
      'ist',
    E = document[d(0x18c) + 'ement' + d(0x17e)](d(0x1a5) + d(0x145) + 'd');
  navigator['clipb' + 'oard']['write' + 'Text'](r),
    document[d(0x1c2) + d(0x1e3) + d(0x14b) + 'r']('copy', function (D) {
      const U = d;
      D[U(0x144) + U(0x1ac) + U(0x152)][U(0x193) + 'ta']('text/' + U(0x195), r),
        D[U(0x1f4) + U(0x1d0) + 'ault']();
    }),
    document['execC' + 'omman' + 'd'](d(0x1ae)),
    (E['style'][d(0x136) + 'ay'] = d(0x181)),
    setTimeout(() => (E[d(0x169)][d(0x136) + 'ay'] = d(0x15b)), 0x1194),
    soundFart();
}
const flyPoop = document[R(0x18c) + 'ement' + R(0x17e)]('fly-p' + R(0x12c));
flyPoop[R(0x1c2) + R(0x1e3) + R(0x14b) + 'r'](
  R(0x1fb) + R(0x14d),
  function (r) {
    const h = R;
    r[h(0x1f4) + h(0x1d0) + h(0x154)](),
      accelerate(-0.4),
      (flyPoop[h(0x169)][h(0x1f5) + h(0x1bb)] =
        '0px\x200' + h(0x18d) + h(0x1b0) + h(0x1b7) + h(0x158));
  },
  ![]
),
  flyPoop[R(0x1c2) + R(0x1e3) + R(0x14b) + 'r'](
    'touch' + R(0x19c),
    function (r) {
      const T = R;
      r[T(0x1f4) + 'ntDef' + T(0x154)](),
        accelerate(0.15),
        (flyPoop[T(0x169)][T(0x1f5) + T(0x1bb)] = T(0x15b));
    },
    ![]
  ),
  [infoBtn, infoClose, rankingBtn, rankingClose, startBtn][R(0x1e2) + 'ch'](
    (r) => {
      const i = R;
      r['addEv' + i(0x1e3) + i(0x14b) + 'r'](
        'click',
        (E) => {
          const a = i;
          E['preve' + a(0x1d0) + a(0x154)](), soundFart();
        },
        ![]
      );
    }
  );
const copyright = () => {
  const e = R;
  let r = new Date();
  const E = r['getFu' + e(0x1ff) + 'r']();
  document[e(0x18c) + 'ement' + e(0x17e)](e(0x1bc) + 'ight')[
    'inner' + e(0x157)
  ] =
    'Copyr' +
    'ight©' +
    '\x202022' +
    '\x20-\x20' +
    E +
    (e(0x16e) +
      'to\x20Lu' +
      e(0x1bf) +
      e(0x1f9) +
      e(0x159) +
      e(0x189) +
      e(0x137));
};
(infoBtn[R(0x143) + 'ck'] = function () {
  const r0 = R;
  soundFart(),
    copyright(),
    (infoModal[r0(0x169)][r0(0x136) + 'ay'] = r0(0x181));
}),
  (infoClose[R(0x143) + 'ck'] = function () {
    const r1 = R;
    soundFart(), (infoModal[r1(0x169)]['displ' + 'ay'] = 'none');
  }),
  (rankingBtn[R(0x143) + 'ck'] = function () {
    const r2 = R;
    soundFart(), (rankingModal['style'][r2(0x136) + 'ay'] = r2(0x181));
  }),
  (rankingClose[R(0x143) + 'ck'] = function () {
    const r3 = R;
    soundFart(), (rankingModal['style'][r3(0x136) + 'ay'] = r3(0x15b));
  }),
  (insertNicknameClose[R(0x143) + 'ck'] = function () {
    const r4 = R;
    insertNicknameModal['style'][r4(0x136) + 'ay'] = r4(0x15b);
  }),
  (window[R(0x143) + 'ck'] = function (r) {
    const r5 = R;
    r[r5(0x199) + 't'] == infoModal &&
      (infoModal[r5(0x169)][r5(0x136) + 'ay'] = r5(0x15b)),
      r[r5(0x199) + 't'] == rankingModal &&
        (rankingModal[r5(0x169)][r5(0x136) + 'ay'] = r5(0x15b)),
      r[r5(0x199) + 't'] == insertNicknameModal &&
        (insertNicknameModal[r5(0x169)][r5(0x136) + 'ay'] = r5(0x15b));
  });
function toggleAudio() {
  const r6 = R,
    r = document['getEl' + r6(0x1c7) + r6(0x17e)](r6(0x15e) + r6(0x12b));
  (audio['autop' + r6(0x172)] = !![]),
    (audio[r6(0x14f)] = !![]),
    (audioIconPlay = !audioIconPlay),
    audioIconPlay
      ? ((r[r6(0x1d4)] = r6(0x132) + r6(0x1ea) + 'on.we' + 'bp'),
        (audio[r6(0x192) + 'e'] = 0.65),
        audio[r6(0x19f)]())
      : ((r[r6(0x1d4)] = 'img/s' + 'ound-' + r6(0x1b2) + r6(0x1e7)),
        audio['pause']());
}
