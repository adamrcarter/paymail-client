// 'use strict';

// Object.defineProperty(exports, '__esModule', { value: true });

// function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

// var bsv = _interopDefault(require('bsv'));

// const brfc = (title, authors, version) => {
//   const autorString = authors.join(', ').trim();
//   const stringToHash = [title.trim() + autorString + (version.toString() || '')].join('').trim();
//   let hash = bsv.Hash.sha256Sha256(Buffer.from(stringToHash));
//   hash = hash.reverse();
//   return hash.toString('hex').substring(0, 12);
// };

// exports.brfc = brfc;
// //# sourceMappingURL=brfc.cjs.js.map

const bsv = require('bsv');

console.log(bsv)

const brfc = (title, authors, version) => {
  const autorString = authors.join(', ').trim();
  const stringToHash = [title.trim() + autorString + (version.toString() || '')].join('').trim();
  let hash = bsv.crypto.Hash.sha256sha256(Buffer.from(stringToHash));
  hash = hash.reverse();
  return hash.toString('hex').substring(0, 12);
};

export { brfc };