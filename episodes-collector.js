function _0x1c8b(_0x2a36a7, _0x140b83) {
  const _0x17d0ba = _0x17d0();
  return (
    (_0x1c8b = function (_0x1c8bf9, _0x4c947a) {
      _0x1c8bf9 = _0x1c8bf9 - 0x1ce;
      let _0x36cc97 = _0x17d0ba[_0x1c8bf9];
      return _0x36cc97;
    }),
    _0x1c8b(_0x2a36a7, _0x140b83)
  );
}
const _0x2c92fe = _0x1c8b;
(function (_0x56bdb8, _0x2e069d) {
  const _0x2dea27 = _0x1c8b,
    _0x3927b9 = _0x56bdb8();
  while (!![]) {
    try {
      const _0x4cdd3e =
        (-parseInt(_0x2dea27(0x1d7)) / 0x1) *
          (-parseInt(_0x2dea27(0x1d6)) / 0x2) +
        (-parseInt(_0x2dea27(0x1dc)) / 0x3) *
          (parseInt(_0x2dea27(0x1de)) / 0x4) +
        parseInt(_0x2dea27(0x1d9)) / 0x5 +
        parseInt(_0x2dea27(0x1da)) / 0x6 +
        (parseInt(_0x2dea27(0x1cf)) / 0x7) *
          (parseInt(_0x2dea27(0x1d3)) / 0x8) +
        (parseInt(_0x2dea27(0x1db)) / 0x9) *
          (-parseInt(_0x2dea27(0x1ce)) / 0xa) +
        -parseInt(_0x2dea27(0x1d8)) / 0xb;
      if (_0x4cdd3e === _0x2e069d) break;
      else _0x3927b9['push'](_0x3927b9['shift']());
    } catch (_0x12cfb1) {
      _0x3927b9['push'](_0x3927b9['shift']());
    }
  }
})(_0x17d0, 0x6743e);
const episodes = [];
function _0x17d0() {
  const _0x7ca47d = [
    '18DNwoNL',
    '46253enoLER',
    '4691610UQaWLb',
    '684335wcHkNF',
    '1429170euZwJj',
    '9dIXXhX',
    '939063FeHdyp',
    '\x20:\x20',
    '4YcAhsz',
    'Episode',
    'includes',
    'push',
    'ul\x20li',
    '2567510dDqVXR',
    '7roLyoK',
    'innerText',
    'forEach',
    'Épisode',
    '5023336qtVpaY',
    'querySelectorAll',
    'replace',
  ];
  _0x17d0 = function () {
    return _0x7ca47d;
  };
  return _0x17d0();
}
document[_0x2c92fe(0x1d4)](_0x2c92fe(0x1e2))[_0x2c92fe(0x1d1)]((_0x1c1ebd) => {
  const _0x155027 = _0x2c92fe;
  (_0x1c1ebd[_0x155027(0x1d0)][_0x155027(0x1e0)](_0x155027(0x1d2)) ||
    _0x1c1ebd['innerText'][_0x155027(0x1e0)](_0x155027(0x1df))) &&
    episodes[_0x155027(0x1e1)](
      convertString(
        _0x1c1ebd[_0x155027(0x1d0)]
          [_0x155027(0x1d5)]('1er', '1')
          [_0x155027(0x1d5)]('.\x20', _0x155027(0x1dd))
          [_0x155027(0x1d5)](_0x155027(0x1df), _0x155027(0x1d2))
      )
    );
});
function convertString(_0x1bfe89) {
  const _0x217bd0 = /Épisode (\d+) : (.+) \(\d+ .+\)/,
    _0x187012 = _0x1bfe89['match'](_0x217bd0);
  if (_0x187012)
    return { index: _0x187012[0x1], name: _0x187012[0x2]['trim']() };
}
console['log'](JSON['stringify'](episodes));
