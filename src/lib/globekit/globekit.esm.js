
function _loadWasmModule (sync, src, imports) {
        var buf = null
        var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null
        if (isNode) {
          buf = Buffer.from(src, 'base64')
        } else {
          var raw = globalThis.atob(src)
          var rawLength = raw.length
          buf = new Uint8Array(new ArrayBuffer(rawLength))
          for(var i = 0; i < rawLength; i++) {
             buf[i] = raw.charCodeAt(i)
          }
        }

        if (imports && !sync) {
          return WebAssembly.instantiate(buf, imports)
        } else if (!imports && !sync) {
          return WebAssembly.compile(buf)
        } else {
          var mod = new WebAssembly.Module(buf)
          return imports ? new WebAssembly.Instance(mod, imports) : mod
        }
      }
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/* @license twgl.js 4.15.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */
var VecType = Float32Array;
/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @param {number} [x] Initial x value.
 * @param {number} [y] Initial y value.
 * @param {number} [z] Initial z value.
 * @return {module:twgl/v3.Vec3} the created vector
 * @memberOf module:twgl/v3
 */


function create(x, y, z) {
  var dst = new VecType(3);

  if (x) {
    dst[0] = x;
  }

  if (y) {
    dst[1] = y;
  }

  if (z) {
    dst[2] = z;
  }

  return dst;
}
/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector tha tis the sum of a and b.
 * @memberOf module:twgl/v3
 */


function add(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];
  dst[2] = a[2] + b[2];
  return dst;
}
/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector that is the difference of a and b.
 * @memberOf module:twgl/v3
 */


function subtract(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];
  dst[2] = a[2] - b[2];
  return dst;
}
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of a cross b.
 * @memberOf module:twgl/v3
 */


function cross(a, b, dst) {
  dst = dst || new VecType(3);
  var t1 = a[2] * b[0] - a[0] * b[2];
  var t2 = a[0] * b[1] - a[1] * b[0];
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = t1;
  dst[2] = t2;
  return dst;
}
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */


function normalize(a, dst) {
  dst = dst || new VecType(3);
  var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
  var len = Math.sqrt(lenSq);

  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
    dst[2] = a[2] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
  }

  return dst;
}
/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function multiply(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];
  dst[2] = a[2] * b[2];
  return dst;
}
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */

var MatType = Float32Array;
/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */

/**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 * @memberOf module:twgl/m4
 */

function setDefaultType$1(ctor) {
  var oldType = MatType;
  MatType = ctor;
  return oldType;
}
/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */


function negate$1(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = -m[0];
  dst[1] = -m[1];
  dst[2] = -m[2];
  dst[3] = -m[3];
  dst[4] = -m[4];
  dst[5] = -m[5];
  dst[6] = -m[6];
  dst[7] = -m[7];
  dst[8] = -m[8];
  dst[9] = -m[9];
  dst[10] = -m[10];
  dst[11] = -m[11];
  dst[12] = -m[12];
  dst[13] = -m[13];
  dst[14] = -m[14];
  dst[15] = -m[15];
  return dst;
}
/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */


function copy$1(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = m[0];
  dst[1] = m[1];
  dst[2] = m[2];
  dst[3] = m[3];
  dst[4] = m[4];
  dst[5] = m[5];
  dst[6] = m[6];
  dst[7] = m[7];
  dst[8] = m[8];
  dst[9] = m[9];
  dst[10] = m[10];
  dst[11] = m[11];
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[15] = m[15];
  return dst;
}
/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */


function identity(dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */


function transpose(m, dst) {
  dst = dst || new MatType(16);

  if (dst === m) {
    var t;
    t = m[1];
    m[1] = m[4];
    m[4] = t;
    t = m[2];
    m[2] = m[8];
    m[8] = t;
    t = m[3];
    m[3] = m[12];
    m[12] = t;
    t = m[6];
    m[6] = m[9];
    m[9] = t;
    t = m[7];
    m[7] = m[13];
    m[13] = t;
    t = m[11];
    m[11] = m[14];
    m[14] = t;
    return dst;
  }

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  dst[0] = m00;
  dst[1] = m10;
  dst[2] = m20;
  dst[3] = m30;
  dst[4] = m01;
  dst[5] = m11;
  dst[6] = m21;
  dst[7] = m31;
  dst[8] = m02;
  dst[9] = m12;
  dst[10] = m22;
  dst[11] = m32;
  dst[12] = m03;
  dst[13] = m13;
  dst[14] = m23;
  dst[15] = m33;
  return dst;
}
/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */


function inverse(m, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  var tmp_0 = m22 * m33;
  var tmp_1 = m32 * m23;
  var tmp_2 = m12 * m33;
  var tmp_3 = m32 * m13;
  var tmp_4 = m12 * m23;
  var tmp_5 = m22 * m13;
  var tmp_6 = m02 * m33;
  var tmp_7 = m32 * m03;
  var tmp_8 = m02 * m23;
  var tmp_9 = m22 * m03;
  var tmp_10 = m02 * m13;
  var tmp_11 = m12 * m03;
  var tmp_12 = m20 * m31;
  var tmp_13 = m30 * m21;
  var tmp_14 = m10 * m31;
  var tmp_15 = m30 * m11;
  var tmp_16 = m10 * m21;
  var tmp_17 = m20 * m11;
  var tmp_18 = m00 * m31;
  var tmp_19 = m30 * m01;
  var tmp_20 = m00 * m21;
  var tmp_21 = m20 * m01;
  var tmp_22 = m00 * m11;
  var tmp_23 = m10 * m01;
  var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
  var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
  dst[0] = d * t0;
  dst[1] = d * t1;
  dst[2] = d * t2;
  dst[3] = d * t3;
  dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
  return dst;
}
/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */


function multiply$1(a, b, dst) {
  dst = dst || new MatType(16);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4 + 0];
  var a11 = a[4 + 1];
  var a12 = a[4 + 2];
  var a13 = a[4 + 3];
  var a20 = a[8 + 0];
  var a21 = a[8 + 1];
  var a22 = a[8 + 2];
  var a23 = a[8 + 3];
  var a30 = a[12 + 0];
  var a31 = a[12 + 1];
  var a32 = a[12 + 2];
  var a33 = a[12 + 3];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b03 = b[3];
  var b10 = b[4 + 0];
  var b11 = b[4 + 1];
  var b12 = b[4 + 2];
  var b13 = b[4 + 3];
  var b20 = b[8 + 0];
  var b21 = b[8 + 1];
  var b22 = b[8 + 2];
  var b23 = b[8 + 3];
  var b30 = b[12 + 0];
  var b31 = b[12 + 1];
  var b32 = b[12 + 2];
  var b33 = b[12 + 3];
  dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
  dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
  dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
  dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
  dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
  dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
  dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
  dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
  dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
  dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
  dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
  dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
  dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
  dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
  dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
  dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
  return dst;
}
/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with translation set.
 * @memberOf module:twgl/m4
 */


function setTranslation(a, v, dst) {
  dst = dst || identity();

  if (a !== dst) {
    dst[0] = a[0];
    dst[1] = a[1];
    dst[2] = a[2];
    dst[3] = a[3];
    dst[4] = a[4];
    dst[5] = a[5];
    dst[6] = a[6];
    dst[7] = a[7];
    dst[8] = a[8];
    dst[9] = a[9];
    dst[10] = a[10];
    dst[11] = a[11];
  }

  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */


function getTranslation(m, dst) {
  dst = dst || create();
  dst[0] = m[12];
  dst[1] = m[13];
  dst[2] = m[14];
  return dst;
}
/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {module:twgl/v3.Vec3} [dst] vector.
 * @return {module:twgl/v3.Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */


function getAxis(m, axis, dst) {
  dst = dst || create();
  var off = axis * 4;
  dst[0] = m[off + 0];
  dst[1] = m[off + 1];
  dst[2] = m[off + 2];
  return dst;
}
/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with axis set.
 * @memberOf module:twgl/m4
 */


function setAxis(a, v, axis, dst) {
  if (dst !== a) {
    dst = copy$1(a, dst);
  }

  var off = axis * 4;
  dst[off + 0] = v[0];
  dst[off + 1] = v[1];
  dst[off + 2] = v[2];
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new MatType(16);
  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  var rangeInv = 1.0 / (zNear - zFar);
  dst[0] = f / aspect;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = f;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;
  return dst;
}
/**
 * Computes a 4-by-4 orthogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function ortho(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  dst[0] = 2 / (right - left);
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 / (top - bottom);
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 2 / (near - far);
  dst[11] = 0;
  dst[12] = (right + left) / (left - right);
  dst[13] = (top + bottom) / (bottom - top);
  dst[14] = (far + near) / (near - far);
  dst[15] = 1;
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */


function frustum(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  var dx = right - left;
  var dy = top - bottom;
  var dz = near - far;
  dst[0] = 2 * near / dx;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 * near / dy;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = (left + right) / dx;
  dst[9] = (top + bottom) / dy;
  dst[10] = far / dz;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = near * far / dz;
  dst[15] = 0;
  return dst;
}

var xAxis;
var yAxis;
var zAxis;
/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {module:twgl/v3.Vec3} eye The position of the eye.
 * @param {module:twgl/v3.Vec3} target The position meant to be viewed.
 * @param {module:twgl/v3.Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */

function lookAt(eye, target, up, dst) {
  dst = dst || new MatType(16);
  xAxis = xAxis || create();
  yAxis = yAxis || create();
  zAxis = zAxis || create();
  normalize(subtract(eye, target, zAxis), zAxis);
  normalize(cross(up, zAxis, xAxis), xAxis);
  normalize(cross(zAxis, xAxis, yAxis), yAxis);
  dst[0] = xAxis[0];
  dst[1] = xAxis[1];
  dst[2] = xAxis[2];
  dst[3] = 0;
  dst[4] = yAxis[0];
  dst[5] = yAxis[1];
  dst[6] = yAxis[2];
  dst[7] = 0;
  dst[8] = zAxis[0];
  dst[9] = zAxis[1];
  dst[10] = zAxis[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */


function translation(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Translates the given 4-by-4 matrix by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translated matrix.
 * @memberOf module:twgl/m4
 */


function translate(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];

  if (m !== dst) {
    dst[0] = m00;
    dst[1] = m01;
    dst[2] = m02;
    dst[3] = m03;
    dst[4] = m10;
    dst[5] = m11;
    dst[6] = m12;
    dst[7] = m13;
    dst[8] = m20;
    dst[9] = m21;
    dst[10] = m22;
    dst[11] = m23;
  }

  dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
  dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
  dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
  dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationX(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = c;
  dst[6] = s;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = -s;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function rotateX(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[4] = c * m10 + s * m20;
  dst[5] = c * m11 + s * m21;
  dst[6] = c * m12 + s * m22;
  dst[7] = c * m13 + s * m23;
  dst[8] = c * m20 - s * m10;
  dst[9] = c * m21 - s * m11;
  dst[10] = c * m22 - s * m12;
  dst[11] = c * m23 - s * m13;

  if (m !== dst) {
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationY(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = 0;
  dst[2] = -s;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = s;
  dst[9] = 0;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function rotateY(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 - s * m20;
  dst[1] = c * m01 - s * m21;
  dst[2] = c * m02 - s * m22;
  dst[3] = c * m03 - s * m23;
  dst[8] = c * m20 + s * m00;
  dst[9] = c * m21 + s * m01;
  dst[10] = c * m22 + s * m02;
  dst[11] = c * m23 + s * m03;

  if (m !== dst) {
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationZ(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = s;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = -s;
  dst[5] = c;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function rotateZ(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 + s * m10;
  dst[1] = c * m01 + s * m11;
  dst[2] = c * m02 + s * m12;
  dst[3] = c * m03 + s * m13;
  dst[4] = c * m10 - s * m00;
  dst[5] = c * m11 - s * m01;
  dst[6] = c * m12 - s * m02;
  dst[7] = c * m13 - s * m03;

  if (m !== dst) {
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */


function axisRotation(axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  dst[0] = xx + (1 - xx) * c;
  dst[1] = x * y * oneMinusCosine + z * s;
  dst[2] = x * z * oneMinusCosine - y * s;
  dst[3] = 0;
  dst[4] = x * y * oneMinusCosine - z * s;
  dst[5] = yy + (1 - yy) * c;
  dst[6] = y * z * oneMinusCosine + x * s;
  dst[7] = 0;
  dst[8] = x * z * oneMinusCosine + y * s;
  dst[9] = y * z * oneMinusCosine - x * s;
  dst[10] = zz + (1 - zz) * c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function axisRotate(m, axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  var r00 = xx + (1 - xx) * c;
  var r01 = x * y * oneMinusCosine + z * s;
  var r02 = x * z * oneMinusCosine - y * s;
  var r10 = x * y * oneMinusCosine - z * s;
  var r11 = yy + (1 - yy) * c;
  var r12 = y * z * oneMinusCosine + x * s;
  var r20 = x * z * oneMinusCosine + y * s;
  var r21 = y * z * oneMinusCosine - x * s;
  var r22 = zz + (1 - zz) * c;
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
  dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
  dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
  dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
  dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
  dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
  dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
  dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
  dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
  dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
  dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
  dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {module:twgl/v3.Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */


function scaling(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = v[0];
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = v[1];
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = v[2];
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Scales the given 4-by-4 matrix in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {module:twgl/v3.Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaled matrix.
 * @memberOf module:twgl/m4
 */


function scale(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2];
  dst[3] = v0 * m[0 * 4 + 3];
  dst[4] = v1 * m[1 * 4 + 0];
  dst[5] = v1 * m[1 * 4 + 1];
  dst[6] = v1 * m[1 * 4 + 2];
  dst[7] = v1 * m[1 * 4 + 3];
  dst[8] = v2 * m[2 * 4 + 0];
  dst[9] = v2 * m[2 * 4 + 1];
  dst[10] = v2 * m[2 * 4 + 2];
  dst[11] = v2 * m[2 * 4 + 3];

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The point.
 * @param {module:twgl/v3.Vec3} [dst] optional vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed point.
 * @memberOf module:twgl/m4
 */


function transformPoint(m, v, dst) {
  dst = dst || create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
  dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
  dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
  dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The direction.
 * @param {module:twgl/v3.Vec3} [dst] optional Vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */


function transformDirection(m, v, dst) {
  dst = dst || create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
  return dst;
}
/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The normal.
 * @param {module:twgl/v3.Vec3} [dst] The direction. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed normal.
 * @memberOf module:twgl/m4
 */


function transformNormal(m, v, dst) {
  dst = dst || create();
  var mi = inverse(m);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}

var m4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  axisRotate: axisRotate,
  axisRotation: axisRotation,
  copy: copy$1,
  frustum: frustum,
  getAxis: getAxis,
  getTranslation: getTranslation,
  identity: identity,
  inverse: inverse,
  lookAt: lookAt,
  multiply: multiply$1,
  negate: negate$1,
  ortho: ortho,
  perspective: perspective,
  rotateX: rotateX,
  rotateY: rotateY,
  rotateZ: rotateZ,
  rotationX: rotationX,
  rotationY: rotationY,
  rotationZ: rotationZ,
  scale: scale,
  scaling: scaling,
  setAxis: setAxis,
  setDefaultType: setDefaultType$1,
  setTranslation: setTranslation,
  transformDirection: transformDirection,
  transformNormal: transformNormal,
  transformPoint: transformPoint,
  translate: translate,
  translation: translation,
  transpose: transpose
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var glTypeToTypedArray = {};
{
  var tt = glTypeToTypedArray;
  tt[BYTE] = Int8Array;
  tt[UNSIGNED_BYTE] = Uint8Array;
  tt[SHORT] = Int16Array;
  tt[UNSIGNED_SHORT] = Uint16Array;
  tt[INT] = Int32Array;
  tt[UNSIGNED_INT] = Uint32Array;
  tt[FLOAT] = Float32Array;
  tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
  tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
  tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
  tt[HALF_FLOAT] = Uint16Array;
  tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
  tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
  tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
  tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
  tt[UNSIGNED_INT_24_8] = Uint32Array;
}
/**
 * Get the GL type for a typedArray
 * @param {ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */

function getGLTypeForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArray instanceof Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArray instanceof Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw new Error('unsupported typed array type');
}
/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferView} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */


function getGLTypeForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArrayType === Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArrayType === Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArrayType === Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArrayType === Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw new Error('unsupported typed array type');
}
/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */


function getTypedArrayTypeForGLType(type) {
  var CTOR = glTypeToTypedArray[type];

  if (!CTOR) {
    throw new Error('unknown gl type');
  }

  return CTOR;
}

var isArrayBuffer = typeof SharedArrayBuffer !== 'undefined' ? function isArrayBufferOrSharedArrayBuffer(a) {
  return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
} : function isArrayBuffer(a) {
  return a && a.buffer && a.buffer instanceof ArrayBuffer;
};
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/* eslint no-console: "off" */

/**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 * @private
 */

function copyNamedProperties(names, src, dst) {
  names.forEach(function (name) {
    var value = src[name];

    if (value !== undefined) {
      dst[name] = value;
    }
  });
}

function error() {
  var _console;

  (_console = console).error.apply(_console, arguments);
}

function warn() {
  var _console2;

  (_console2 = console).warn.apply(_console2, arguments);
}

function isBuffer(gl, t) {
  return typeof WebGLBuffer !== 'undefined' && t instanceof WebGLBuffer;
}

function isShader(gl, t) {
  return typeof WebGLShader !== 'undefined' && t instanceof WebGLShader;
}

function isTexture(gl, t) {
  return typeof WebGLTexture !== 'undefined' && t instanceof WebGLTexture;
}

function isSampler(gl, t) {
  return typeof WebGLSampler !== 'undefined' && t instanceof WebGLSampler;
}
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */


var STATIC_DRAW = 0x88e4;
var ARRAY_BUFFER = 0x8892;
var ELEMENT_ARRAY_BUFFER = 0x8893;
var BUFFER_SIZE = 0x8764;
var BYTE$1 = 0x1400;
var UNSIGNED_BYTE$1 = 0x1401;
var SHORT$1 = 0x1402;
var UNSIGNED_SHORT$1 = 0x1403;
var INT$1 = 0x1404;
var UNSIGNED_INT$1 = 0x1405;
var FLOAT$1 = 0x1406;
var defaults = {
  attribPrefix: ""
};

function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, array, drawType || STATIC_DRAW);
}
/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */


function createBufferFromTypedArray(gl, typedArray, type, drawType) {
  if (isBuffer(gl, typedArray)) {
    return typedArray;
  }

  type = type || ARRAY_BUFFER;
  var buffer = gl.createBuffer();
  setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
  return buffer;
}

function isIndices(name) {
  return name === "indices";
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
}

function getArray(array) {
  return array.length ? array : array.data;
}

var texcoordRE = /coord|texture/i;
var colorRE = /color|colour/i;

function guessNumComponentsFromName(name, length) {
  var numComponents;

  if (texcoordRE.test(name)) {
    numComponents = 2;
  } else if (colorRE.test(name)) {
    numComponents = 4;
  } else {
    numComponents = 3; // position, normals, indices ...
  }

  if (length % numComponents > 0) {
    throw new Error("Can not guess numComponents for attribute '".concat(name, "'. Tried ").concat(numComponents, " but ").concat(length, " values is not evenly divisible by ").concat(numComponents, ". You should specify it."));
  }

  return numComponents;
}

function getNumComponents(array, arrayName) {
  return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
}

function makeTypedArray(array, name) {
  if (isArrayBuffer(array)) {
    return array;
  }

  if (isArrayBuffer(array.data)) {
    return array.data;
  }

  if (Array.isArray(array)) {
    array = {
      data: array
    };
  }

  var Type = array.type;

  if (!Type) {
    if (isIndices(name)) {
      Type = Uint16Array;
    } else {
      Type = Float32Array;
    }
  }

  return new Type(array.data);
}
/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * Use this type of array spec when TWGL can't guess the type or number of components of an array
 * @typedef {Object} FullArraySpec
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {(number|number[]|ArrayBufferView)} data The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {constructor} [type] type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
 * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @property {WebGLBuffer} [buffer] Buffer to use for this attribute. This lets you use your own buffer
 *    but you will need to supply `numComponents` and `type`. You can effectively pass an `AttribInfo`
 *    to provide this. Example:
 *
 *         const bufferInfo1 = twgl.createBufferInfoFromArrays(gl, {
 *           position: [1, 2, 3, ... ],
 *         });
 *         const bufferInfo2 = twgl.createBufferInfoFromArrays(gl, {
 *           position: bufferInfo1.attribs.position,  // use the same buffer from bufferInfo1
 *         });
 *
 * @memberOf module:twgl
 */

/**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */

/**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */

/**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @param {module:twgl.BufferInfo} [srcBufferInfo] a BufferInfo to copy from
 *   This lets you share buffers. Any arrays you supply will override
 *   the buffers from srcBufferInfo.
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */


function createAttribsFromArrays(gl, arrays) {
  var attribs = {};
  Object.keys(arrays).forEach(function (arrayName) {
    if (!isIndices(arrayName)) {
      var array = arrays[arrayName];
      var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;

      if (array.value) {
        if (!Array.isArray(array.value) && !isArrayBuffer(array.value)) {
          throw new Error('array.value is not array or typedarray');
        }

        attribs[attribName] = {
          value: array.value
        };
      } else {
        var buffer;
        var type;
        var normalization;
        var numComponents;

        if (array.buffer && array.buffer instanceof WebGLBuffer) {
          buffer = array.buffer;
          numComponents = array.numComponents || array.size;
          type = array.type;
          normalization = array.normalize;
        } else if (typeof array === "number" || typeof array.data === "number") {
          var numValues = array.data || array;
          var arrayType = array.type || Float32Array;
          var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
          type = getGLTypeForTypedArrayType(arrayType);
          normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
          numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
          buffer = gl.createBuffer();
          gl.bindBuffer(ARRAY_BUFFER, buffer);
          gl.bufferData(ARRAY_BUFFER, numBytes, array.drawType || STATIC_DRAW);
        } else {
          var typedArray = makeTypedArray(array, arrayName);
          buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
          type = getGLTypeForTypedArray(typedArray);
          normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
          numComponents = getNumComponents(array, arrayName);
        }

        attribs[attribName] = {
          buffer: buffer,
          numComponents: numComponents,
          type: type,
          normalize: normalization,
          stride: array.stride || 0,
          offset: array.offset || 0,
          divisor: array.divisor === undefined ? undefined : array.divisor,
          drawType: array.drawType
        };
      }
    }
  });
  gl.bindBuffer(ARRAY_BUFFER, null);
  return attribs;
}
/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically update the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably inefficient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */


function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
  array = makeTypedArray(array);

  if (offset !== undefined) {
    gl.bindBuffer(ARRAY_BUFFER, attribInfo.buffer);
    gl.bufferSubData(ARRAY_BUFFER, offset, array);
  } else {
    setBufferFromTypedArray(gl, ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
  }
}

function getBytesPerValueForGLType(gl, type) {
  if (type === BYTE$1) return 1; // eslint-disable-line

  if (type === UNSIGNED_BYTE$1) return 1; // eslint-disable-line

  if (type === SHORT$1) return 2; // eslint-disable-line

  if (type === UNSIGNED_SHORT$1) return 2; // eslint-disable-line

  if (type === INT$1) return 4; // eslint-disable-line

  if (type === UNSIGNED_INT$1) return 4; // eslint-disable-line

  if (type === FLOAT$1) return 4; // eslint-disable-line

  return 0;
} // Tries to get the number of elements from a set of arrays.


var positionKeys = ['position', 'positions', 'a_position'];

function getNumElementsFromNonIndexedArrays(arrays) {
  var key;
  var ii;

  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];

    if (key in arrays) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(arrays)[0];
  }

  var array = arrays[key];
  var length = getArray(array).length;
  var numComponents = getNumComponents(array, key);
  var numElements = length / numComponents;

  if (length % numComponents > 0) {
    throw new Error("numComponents ".concat(numComponents, " not correct for length ").concat(length));
  }

  return numElements;
}

function getNumElementsFromAttributes(gl, attribs) {
  var key;
  var ii;

  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];

    if (key in attribs) {
      break;
    }

    key = defaults.attribPrefix + key;

    if (key in attribs) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(attribs)[0];
  }

  var attrib = attribs[key];
  gl.bindBuffer(ARRAY_BUFFER, attrib.buffer);
  var numBytes = gl.getBufferParameter(ARRAY_BUFFER, BUFFER_SIZE);
  gl.bindBuffer(ARRAY_BUFFER, null);
  var bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
  var totalElements = numBytes / bytesPerValue;
  var numComponents = attrib.numComponents || attrib.size; // TODO: check stride

  var numElements = totalElements / numComponents;

  if (numElements % 1 !== 0) {
    throw new Error("numComponents ".concat(numComponents, " not correct for length ").concat(length));
  }

  return numElements;
}
/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs appropriate to call `setAttributes`
 * @memberOf module:twgl
 */

/**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         position: { buffer: WebGLBuffer, numComponents: 3, },
 *         normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also be TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or AugmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         texcoord: { numComponents: 2, buffer: gl.createBuffer(), },
 *         normal: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @param {module:twgl.BufferInfo} [srcBufferInfo] An existing
 *        buffer info to start from. WebGLBuffers etc specified
 *        in the srcBufferInfo will be used in a new BufferInfo
 *        with any arrays specified overriding the ones in
 *        srcBufferInfo.
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */


function createBufferInfoFromArrays(gl, arrays, srcBufferInfo) {
  var newAttribs = createAttribsFromArrays(gl, arrays);
  var bufferInfo = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
  bufferInfo.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
  var indices = arrays.indices;

  if (indices) {
    var newIndices = makeTypedArray(indices, "indices");
    bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, ELEMENT_ARRAY_BUFFER);
    bufferInfo.numElements = newIndices.length;
    bufferInfo.elementType = getGLTypeForTypedArray(newIndices);
  } else if (!bufferInfo.numElements) {
    bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
  }

  return bufferInfo;
}
/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that contains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be derived otherwise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */


function createBufferFromArray(gl, array, arrayName) {
  var type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER : ARRAY_BUFFER;
  var typedArray = makeTypedArray(array, arrayName);
  return createBufferFromTypedArray(gl, typedArray, type);
}
/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */


function createBuffersFromArrays(gl, arrays) {
  var buffers = {};
  Object.keys(arrays).forEach(function (key) {
    buffers[key] = createBufferFromArray(gl, arrays[key], key);
  }); // Ugh!

  if (arrays.indices) {
    buffers.numElements = arrays.indices.length;
    buffers.elementType = getGLTypeForTypedArray(makeTypedArray(arrays.indices));
  } else {
    buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
  }

  return buffers;
}
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var getArray$1 = getArray; // eslint-disable-line

var getNumComponents$1 = getNumComponents; // eslint-disable-line

/**
 * @typedef {(Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array)} TypedArray
 */

/**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 * @private
 */

function augmentTypedArray(typedArray, numComponents) {
  var cursor = 0;

  typedArray.push = function () {
    for (var ii = 0; ii < arguments.length; ++ii) {
      var value = arguments[ii];

      if (value instanceof Array || isArrayBuffer(value)) {
        for (var jj = 0; jj < value.length; ++jj) {
          typedArray[cursor++] = value[jj];
        }
      } else {
        typedArray[cursor++] = value;
      }
    }
  };

  typedArray.reset = function (opt_index) {
    cursor = opt_index || 0;
  };

  typedArray.numComponents = numComponents;
  Object.defineProperty(typedArray, 'numElements', {
    get: function get() {
      return this.length / this.numComponents | 0;
    }
  });
  return typedArray;
}
/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */


function createAugmentedTypedArray(numComponents, numElements, opt_type) {
  var Type = opt_type || Float32Array;
  return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}

function allButIndices(name) {
  return name !== "indices";
}
/**
 * Given indexed vertices creates a new set of vertices un-indexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */


function deindexVertices(vertices) {
  var indices = vertices.indices;
  var newVertices = {};
  var numElements = indices.length;

  function expandToUnindexed(channel) {
    var srcBuffer = vertices[channel];
    var numComponents = srcBuffer.numComponents;
    var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);

    for (var ii = 0; ii < numElements; ++ii) {
      var ndx = indices[ii];
      var offset = ndx * numComponents;

      for (var jj = 0; jj < numComponents; ++jj) {
        dstBuffer.push(srcBuffer[offset + jj]);
      }
    }

    newVertices[channel] = dstBuffer;
  }

  Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
  return newVertices;
}
/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */


function flattenNormals(vertices) {
  if (vertices.indices) {
    throw new Error('can not flatten normals of indexed vertices. deindex them first');
  }

  var normals = vertices.normal;
  var numNormals = normals.length;

  for (var ii = 0; ii < numNormals; ii += 9) {
    // pull out the 3 normals for this triangle
    var nax = normals[ii + 0];
    var nay = normals[ii + 1];
    var naz = normals[ii + 2];
    var nbx = normals[ii + 3];
    var nby = normals[ii + 4];
    var nbz = normals[ii + 5];
    var ncx = normals[ii + 6];
    var ncy = normals[ii + 7];
    var ncz = normals[ii + 8]; // add them

    var nx = nax + nbx + ncx;
    var ny = nay + nby + ncy;
    var nz = naz + nbz + ncz; // normalize them

    var _length = Math.sqrt(nx * nx + ny * ny + nz * nz);

    nx /= _length;
    ny /= _length;
    nz /= _length; // copy them back in

    normals[ii + 0] = nx;
    normals[ii + 1] = ny;
    normals[ii + 2] = nz;
    normals[ii + 3] = nx;
    normals[ii + 4] = ny;
    normals[ii + 5] = nz;
    normals[ii + 6] = nx;
    normals[ii + 7] = ny;
    normals[ii + 8] = nz;
  }

  return vertices;
}

function applyFuncToV3Array(array, matrix, fn) {
  var len = array.length;
  var tmp = new Float32Array(3);

  for (var ii = 0; ii < len; ii += 3) {
    fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
    array[ii] = tmp[0];
    array[ii + 1] = tmp[1];
    array[ii + 2] = tmp[2];
  }
}

function transformNormal$1(mi, v, dst) {
  dst = dst || create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}
/**
 * Reorients directions by the given matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientDirections(array, matrix) {
  applyFuncToV3Array(array, matrix, transformDirection);
  return array;
}
/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientNormals(array, matrix) {
  applyFuncToV3Array(array, inverse(matrix), transformNormal$1);
  return array;
}
/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientPositions(array, matrix) {
  applyFuncToV3Array(array, matrix, transformPoint);
  return array;
}
/**
 * @typedef {(number[]|TypedArray)} NativeArrayOrTypedArray
 */

/**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, NativeArrayOrTypedArray>} arrays The vertices to reorient
 * @param {module:twgl/m4.Mat4} matrix matrix to reorient by.
 * @return {Object.<string, NativeArrayOrTypedArray>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */


function reorientVertices(arrays, matrix) {
  Object.keys(arrays).forEach(function (name) {
    var array = arrays[name];

    if (name.indexOf("pos") >= 0) {
      reorientPositions(array, matrix);
    } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
      reorientDirections(array, matrix);
    } else if (name.indexOf("norm") >= 0) {
      reorientNormals(array, matrix);
    }
  });
  return arrays;
}
/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */

/**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */

/**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray>} the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */


function createXYQuadVertices(size, xOffset, yOffset) {
  size = size || 2;
  xOffset = xOffset || 0;
  yOffset = yOffset || 0;
  size *= 0.5;
  return {
    position: {
      numComponents: 2,
      data: [xOffset + -1 * size, yOffset + -1 * size, xOffset + 1 * size, yOffset + -1 * size, xOffset + -1 * size, yOffset + 1 * size, xOffset + 1 * size, yOffset + 1 * size]
    },
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
    indices: [0, 1, 2, 2, 1, 3]
  };
}
/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */

/**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */

/**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */


function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
  width = width || 1;
  depth = depth || 1;
  subdivisionsWidth = subdivisionsWidth || 1;
  subdivisionsDepth = subdivisionsDepth || 1;
  matrix = matrix || identity();
  var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  for (var z = 0; z <= subdivisionsDepth; z++) {
    for (var x = 0; x <= subdivisionsWidth; x++) {
      var u = x / subdivisionsWidth;
      var v = z / subdivisionsDepth;
      positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
      normals.push(0, 1, 0);
      texcoords.push(u, v);
    }
  }

  var numVertsAcross = subdivisionsWidth + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

  for (var _z = 0; _z < subdivisionsDepth; _z++) {
    // eslint-disable-line
    for (var _x = 0; _x < subdivisionsWidth; _x++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_z + 0) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x, (_z + 0) * numVertsAcross + _x + 1); // Make triangle 2 of quad.

      indices.push((_z + 1) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x + 1, (_z + 0) * numVertsAcross + _x + 1);
    }
  }

  var arrays = reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  }, matrix);
  return arrays;
}
/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */

/**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */

/**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */


function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw new Error('subdivisionAxis and subdivisionHeight must be > 0');
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
  var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians; // We are going to generate our sphere by iterating through its
  // spherical coordinates and generating 2 triangles for each quad on a
  // ring of the sphere.

  var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices); // Generate the individual vertices in our vertex buffer.

  for (var y = 0; y <= subdivisionsHeight; y++) {
    for (var x = 0; x <= subdivisionsAxis; x++) {
      // Generate a vertex based on its spherical coordinates
      var u = x / subdivisionsAxis;
      var v = y / subdivisionsHeight;
      var theta = longRange * u + opt_startLongitudeInRadians;
      var phi = latRange * v + opt_startLatitudeInRadians;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);
      var ux = cosTheta * sinPhi;
      var uy = cosPhi;
      var uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  var numVertsAround = subdivisionsAxis + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);

  for (var _x2 = 0; _x2 < subdivisionsAxis; _x2++) {
    // eslint-disable-line
    for (var _y = 0; _y < subdivisionsHeight; _y++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_y + 0) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2); // Make triangle 2 of quad.

      indices.push((_y + 1) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2 + 1);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 * @private
 */


var CUBE_FACE_INDICES = [[3, 7, 5, 1], // right
[6, 2, 0, 4], // left
[6, 7, 3, 2], // ??
[0, 1, 5, 4], // ??
[7, 6, 4, 5], // front
[2, 3, 1, 0] // back
];
/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */

/**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */

/**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */

function createCubeVertices(size) {
  size = size || 1;
  var k = size / 2;
  var cornerVertices = [[-k, -k, -k], [+k, -k, -k], [-k, +k, -k], [+k, +k, -k], [-k, -k, +k], [+k, -k, +k], [-k, +k, +k], [+k, +k, +k]];
  var faceNormals = [[+1, +0, +0], [-1, +0, +0], [+0, +1, +0], [+0, -1, +0], [+0, +0, +1], [+0, +0, -1]];
  var uvCoords = [[1, 0], [0, 0], [0, 1], [1, 1]];
  var numVertices = 6 * 4;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

  for (var f = 0; f < 6; ++f) {
    var faceIndices = CUBE_FACE_INDICES[f];

    for (var v = 0; v < 4; ++v) {
      var position = cornerVertices[faceIndices[v]];
      var normal = faceNormals[f];
      var uv = uvCoords[v]; // Each face needs all four vertices because the normals and texture
      // coordinates are not all the same.

      positions.push(position);
      normals.push(normal);
      texcoords.push(uv);
    } // Two triangles make a square face.


    var offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */

/**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */

/**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */


function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
  if (radialSubdivisions < 3) {
    throw new Error('radialSubdivisions must be 3 or greater');
  }

  if (verticalSubdivisions < 1) {
    throw new Error('verticalSubdivisions must be 1 or greater');
  }

  var topCap = opt_topCap === undefined ? true : opt_topCap;
  var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;
  var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
  var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);
  var vertsAroundEdge = radialSubdivisions + 1; // The slant of the cone is constant across its surface

  var slant = Math.atan2(bottomRadius - topRadius, height);
  var cosSlant = Math.cos(slant);
  var sinSlant = Math.sin(slant);
  var start = topCap ? -2 : 0;
  var end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (var yy = start; yy <= end; ++yy) {
    var v = yy / verticalSubdivisions;
    var y = height * v;
    var ringRadius = void 0;

    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }

    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }

    y -= height / 2;

    for (var ii = 0; ii < vertsAroundEdge; ++ii) {
      var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
      var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);

      if (yy < 0) {
        normals.push(0, -1, 0);
      } else if (yy > verticalSubdivisions) {
        normals.push(0, 1, 0);
      } else if (ringRadius === 0.0) {
        normals.push(0, 0, 0);
      } else {
        normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
      }

      texcoords.push(ii / radialSubdivisions, 1 - v);
    }
  }

  for (var _yy = 0; _yy < verticalSubdivisions + extra; ++_yy) {
    // eslint-disable-line
    if (_yy === 1 && topCap || _yy === verticalSubdivisions + extra - 2 && bottomCap) {
      continue;
    }

    for (var _ii = 0; _ii < radialSubdivisions; ++_ii) {
      // eslint-disable-line
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 0) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii);
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 0 + _ii);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 * @private
 */


function expandRLEData(rleData, padding) {
  padding = padding || [];
  var data = [];

  for (var ii = 0; ii < rleData.length; ii += 4) {
    var runLength = rleData[ii];
    var element = rleData.slice(ii + 1, ii + 4);
    element.push.apply(element, padding);

    for (var jj = 0; jj < runLength; ++jj) {
      data.push.apply(data, element);
    }
  }

  return data;
}
/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */

/**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */

/**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function create3DFVertices() {
  var positions = [// left column front
  0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, // top rung front
  30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, // middle rung front
  30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, // left column back
  0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, // top rung back
  30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, // middle rung back
  30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, // top
  0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, // top rung front
  100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, // under top rung
  30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, // between top rung and middle
  30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, // top of middle rung
  30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, // front of middle rung
  67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, // bottom of middle rung.
  30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, // front of bottom
  30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, // bottom
  0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, // left side
  0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0];
  var texcoords = [// left column front
  0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34, 0.19, // top rung front
  0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31, 0.62, 0.19, // middle rung front
  0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49, 0.55, 0.49, 0.43, // left column back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // middle rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // top rung front
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // under top rung
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // between top rung and middle
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // top of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // front of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom of middle rung.
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // front of bottom
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // left side
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0];
  var normals = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 0, 0, 1, // left column back
  // top rung back
  // middle rung back
  18, 0, 0, -1, // top
  6, 0, 1, 0, // top rung front
  6, 1, 0, 0, // under top rung
  6, 0, -1, 0, // between top rung and middle
  6, 1, 0, 0, // top of middle rung
  6, 0, 1, 0, // front of middle rung
  6, 1, 0, 0, // bottom of middle rung.
  6, 0, -1, 0, // front of bottom
  6, 1, 0, 0, // bottom
  6, 0, -1, 0, // left side
  6, -1, 0, 0]);
  var colors = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 200, 70, 120, // left column back
  // top rung back
  // middle rung back
  18, 80, 70, 200, // top
  6, 70, 200, 210, // top rung front
  6, 200, 200, 70, // under top rung
  6, 210, 100, 70, // between top rung and middle
  6, 210, 160, 70, // top of middle rung
  6, 70, 180, 210, // front of middle rung
  6, 100, 70, 210, // bottom of middle rung.
  6, 76, 210, 100, // front of bottom
  6, 140, 210, 80, // bottom
  6, 90, 130, 110, // left side
  6, 160, 160, 220], [255]);
  var numVerts = positions.length / 3;
  var arrays = {
    position: createAugmentedTypedArray(3, numVerts),
    texcoord: createAugmentedTypedArray(2, numVerts),
    normal: createAugmentedTypedArray(3, numVerts),
    color: createAugmentedTypedArray(4, numVerts, Uint8Array),
    indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
  };
  arrays.position.push(positions);
  arrays.texcoord.push(texcoords);
  arrays.normal.push(normals);
  arrays.color.push(colors);

  for (var ii = 0; ii < numVerts; ++ii) {
    arrays.indices.push(ii);
  }

  return arrays;
}
/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */

/**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCrescentBufferInfo
 */

/**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCrescentBuffers
 */

/**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCrescentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
  if (subdivisionsDown <= 0) {
    throw new Error('subdivisionDown must be > 0');
  }

  startOffset = startOffset || 0;
  endOffset = endOffset || 1;
  var subdivisionsThick = 2;
  var offsetRange = endOffset - startOffset;
  var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  function lerp(a, b, s) {
    return a + (b - a) * s;
  }

  function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
    for (var z = 0; z <= subdivisionsDown; z++) {
      var uBack = x / (subdivisionsThick - 1);
      var v = z / subdivisionsDown;
      var xBack = (uBack - 0.5) * 2;
      var angle = (startOffset + v * offsetRange) * Math.PI;
      var s = Math.sin(angle);
      var c = Math.cos(angle);
      var radius = lerp(verticalRadius, arcRadius, s);
      var px = xBack * thickness;
      var py = c * verticalRadius;
      var pz = s * radius;
      positions.push(px, py, pz);
      var n = add(multiply([0, s, c], normalMult), normalAdd);
      normals.push(n);
      texcoords.push(uBack * uMult + uAdd, v);
    }
  } // Generate the individual vertices in our vertex buffer.


  for (var x = 0; x < subdivisionsThick; x++) {
    var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
    createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
    createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
  } // Do outer surface.


  var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);

  function createSurface(leftArcOffset, rightArcOffset) {
    for (var z = 0; z < subdivisionsDown; ++z) {
      // Make triangle 1 of quad.
      indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0); // Make triangle 2 of quad.

      indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
    }
  }

  var numVerticesDown = subdivisionsDown + 1; // front

  createSurface(numVerticesDown * 0, numVerticesDown * 4); // right

  createSurface(numVerticesDown * 5, numVerticesDown * 7); // back

  createSurface(numVerticesDown * 6, numVerticesDown * 2); // left

  createSurface(numVerticesDown * 3, numVerticesDown * 1);
  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */

/**
 * Creates cylinder buffers. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCylinderBuffers
 */

/**
 * Creates cylinder vertices. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
  return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
}
/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */

/**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */

/**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
  if (radialSubdivisions < 3) {
    throw new Error('radialSubdivisions must be 3 or greater');
  }

  if (bodySubdivisions < 3) {
    throw new Error('verticalSubdivisions must be 3 or greater');
  }

  startAngle = startAngle || 0;
  endAngle = endAngle || Math.PI * 2;
  var range = endAngle - startAngle;
  var radialParts = radialSubdivisions + 1;
  var bodyParts = bodySubdivisions + 1;
  var numVertices = radialParts * bodyParts;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);

  for (var slice = 0; slice < bodyParts; ++slice) {
    var v = slice / bodySubdivisions;
    var sliceAngle = v * Math.PI * 2;
    var sliceSin = Math.sin(sliceAngle);
    var ringRadius = radius + sliceSin * thickness;
    var ny = Math.cos(sliceAngle);
    var y = ny * thickness;

    for (var ring = 0; ring < radialParts; ++ring) {
      var u = ring / radialSubdivisions;
      var ringAngle = startAngle + u * range;
      var xSin = Math.sin(ringAngle);
      var zCos = Math.cos(ringAngle);
      var x = xSin * ringRadius;
      var z = zCos * ringRadius;
      var nx = xSin * sliceSin;
      var nz = zCos * sliceSin;
      positions.push(x, y, z);
      normals.push(nx, ny, nz);
      texcoords.push(u, 1 - v);
    }
  }

  for (var _slice = 0; _slice < bodySubdivisions; ++_slice) {
    // eslint-disable-line
    for (var _ring = 0; _ring < radialSubdivisions; ++_ring) {
      // eslint-disable-line
      var nextRingIndex = 1 + _ring;
      var nextSliceIndex = 1 + _slice;
      indices.push(radialParts * _slice + _ring, radialParts * nextSliceIndex + _ring, radialParts * _slice + nextRingIndex);
      indices.push(radialParts * nextSliceIndex + _ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * _slice + nextRingIndex);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */

/**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */

/**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
  if (divisions < 3) {
    throw new Error('divisions must be at least 3');
  }

  stacks = stacks ? stacks : 1;
  stackPower = stackPower ? stackPower : 1;
  innerRadius = innerRadius ? innerRadius : 0; // Note: We don't share the center vertex because that would
  // mess up texture coordinates.

  var numVertices = (divisions + 1) * (stacks + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
  var firstIndex = 0;
  var radiusSpan = radius - innerRadius;
  var pointsPerStack = divisions + 1; // Build the disk one stack at a time.

  for (var stack = 0; stack <= stacks; ++stack) {
    var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

    for (var i = 0; i <= divisions; ++i) {
      var theta = 2.0 * Math.PI * i / divisions;
      var x = stackRadius * Math.cos(theta);
      var z = stackRadius * Math.sin(theta);
      positions.push(x, 0, z);
      normals.push(0, 1, 0);
      texcoords.push(1 - i / divisions, stack / stacks);

      if (stack > 0 && i !== divisions) {
        // a, b, c and d are the indices of the vertices of a quad.  unless
        // the current stack is the one closest to the center, in which case
        // the vertices a and b connect to the center vertex.
        var a = firstIndex + (i + 1);
        var b = firstIndex + i;
        var c = firstIndex + i - pointsPerStack;
        var d = firstIndex + (i + 1) - pointsPerStack; // Make a quad of the vertices a, b, c, d.

        indices.push(a, b, c);
        indices.push(a, c, d);
      }
    }

    firstIndex += divisions + 1;
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 * @private
 */


function randInt(range) {
  return Math.random() * range | 0;
}
/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */

/**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */

/**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, AugmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, AugmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */


function makeRandomVertexColors(vertices, options) {
  options = options || {};
  var numElements = vertices.position.numElements;
  var vColors = createAugmentedTypedArray(4, numElements, Uint8Array);

  var rand = options.rand || function (ndx, channel) {
    return channel < 3 ? randInt(256) : 255;
  };

  vertices.color = vColors;

  if (vertices.indices) {
    // just make random colors if index
    for (var ii = 0; ii < numElements; ++ii) {
      vColors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    }
  } else {
    // make random colors per triangle
    var numVertsPerColor = options.vertsPerColor || 3;
    var numSets = numElements / numVertsPerColor;

    for (var _ii2 = 0; _ii2 < numSets; ++_ii2) {
      // eslint-disable-line
      var color = [rand(_ii2, 0), rand(_ii2, 1), rand(_ii2, 2), rand(_ii2, 3)];

      for (var jj = 0; jj < numVertsPerColor; ++jj) {
        vColors.push(color);
      }
    }
  }

  return vertices;
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 * @private
 */


function createBufferFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
    return createBuffersFromArrays(gl, arrays);
  };
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 * @private
 */


function createBufferInfoFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    return createBufferInfoFromArrays(gl, arrays);
  };
}

var arraySpecPropertyNames = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];
/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 * @private
 */

function copyElements(src, dst, dstNdx, offset) {
  offset = offset || 0;
  var length = src.length;

  for (var ii = 0; ii < length; ++ii) {
    dst[dstNdx + ii] = src[ii] + offset;
  }
}
/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 * @private
 */


function createArrayOfSameType(srcArray, length) {
  var arraySrc = getArray$1(srcArray);
  var newArray = new arraySrc.constructor(length);
  var newArraySpec = newArray; // If it appears to have been augmented make new one augmented

  if (arraySrc.numComponents && arraySrc.numElements) {
    augmentTypedArray(newArray, arraySrc.numComponents);
  } // If it was a full spec make new one a full spec


  if (srcArray.data) {
    newArraySpec = {
      data: newArray
    };
    copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
  }

  return newArraySpec;
}
/**
 * Concatenates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primitives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatenated vertices.
 * @memberOf module:twgl/primitives
 */


function concatVertices(arrayOfArrays) {
  var names = {};
  var baseName; // get names of all arrays.
  // and numElements for each set of vertices

  var _loop = function _loop(ii) {
    var arrays = arrayOfArrays[ii];
    Object.keys(arrays).forEach(function (name) {
      // eslint-disable-line
      if (!names[name]) {
        names[name] = [];
      }

      if (!baseName && name !== 'indices') {
        baseName = name;
      }

      var arrayInfo = arrays[name];
      var numComponents = getNumComponents$1(arrayInfo, name);
      var array = getArray$1(arrayInfo);
      var numElements = array.length / numComponents;
      names[name].push(numElements);
    });
  };

  for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
    _loop(ii);
  } // compute length of combined array
  // and return one for reference


  function getLengthOfCombinedArrays(name) {
    var length = 0;
    var arraySpec;

    for (var _ii3 = 0; _ii3 < arrayOfArrays.length; ++_ii3) {
      var arrays = arrayOfArrays[_ii3];
      var arrayInfo = arrays[name];
      var array = getArray$1(arrayInfo);
      length += array.length;

      if (!arraySpec || arrayInfo.data) {
        arraySpec = arrayInfo;
      }
    }

    return {
      length: length,
      spec: arraySpec
    };
  }

  function copyArraysToNewArray(name, base, newArray) {
    var baseIndex = 0;
    var offset = 0;

    for (var _ii4 = 0; _ii4 < arrayOfArrays.length; ++_ii4) {
      var arrays = arrayOfArrays[_ii4];
      var arrayInfo = arrays[name];
      var array = getArray$1(arrayInfo);

      if (name === 'indices') {
        copyElements(array, newArray, offset, baseIndex);
        baseIndex += base[_ii4];
      } else {
        copyElements(array, newArray, offset);
      }

      offset += array.length;
    }
  }

  var base = names[baseName];
  var newArrays = {};
  Object.keys(names).forEach(function (name) {
    var info = getLengthOfCombinedArrays(name);
    var newArraySpec = createArrayOfSameType(info.spec, info.length);
    copyArraysToNewArray(name, base, getArray$1(newArraySpec));
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}
/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The duplicated vertices.
 * @memberOf module:twgl/primitives
 */


function duplicateVertices(arrays) {
  var newArrays = {};
  Object.keys(arrays).forEach(function (name) {
    var arraySpec = arrays[name];
    var srcArray = getArray$1(arraySpec);
    var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
    copyElements(srcArray, getArray$1(newArraySpec), 0);
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
var create3DFBuffers = createBufferFunc(create3DFVertices);
var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
var createCubeBuffers = createBufferFunc(createCubeVertices);
var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
var createPlaneBuffers = createBufferFunc(createPlaneVertices);
var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
var createSphereBuffers = createBufferFunc(createSphereVertices);
var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
var createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
var createCrescentBuffers = createBufferFunc(createCrescentVertices);
var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
var createCylinderBuffers = createBufferFunc(createCylinderVertices);
var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
var createTorusBuffers = createBufferFunc(createTorusVertices);
var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
var createDiscBuffers = createBufferFunc(createDiscVertices); // these were mis-spelled until 4.12

var createCresentBufferInfo = createCrescentBufferInfo;
var createCresentBuffers = createCrescentBuffers;
var createCresentVertices = createCrescentVertices;
var primitives = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create3DFBufferInfo: create3DFBufferInfo,
  create3DFBuffers: create3DFBuffers,
  create3DFVertices: create3DFVertices,
  createAugmentedTypedArray: createAugmentedTypedArray,
  createCubeBufferInfo: createCubeBufferInfo,
  createCubeBuffers: createCubeBuffers,
  createCubeVertices: createCubeVertices,
  createPlaneBufferInfo: createPlaneBufferInfo,
  createPlaneBuffers: createPlaneBuffers,
  createPlaneVertices: createPlaneVertices,
  createSphereBufferInfo: createSphereBufferInfo,
  createSphereBuffers: createSphereBuffers,
  createSphereVertices: createSphereVertices,
  createTruncatedConeBufferInfo: createTruncatedConeBufferInfo,
  createTruncatedConeBuffers: createTruncatedConeBuffers,
  createTruncatedConeVertices: createTruncatedConeVertices,
  createXYQuadBufferInfo: createXYQuadBufferInfo,
  createXYQuadBuffers: createXYQuadBuffers,
  createXYQuadVertices: createXYQuadVertices,
  createCresentBufferInfo: createCresentBufferInfo,
  createCresentBuffers: createCresentBuffers,
  createCresentVertices: createCresentVertices,
  createCrescentBufferInfo: createCrescentBufferInfo,
  createCrescentBuffers: createCrescentBuffers,
  createCrescentVertices: createCrescentVertices,
  createCylinderBufferInfo: createCylinderBufferInfo,
  createCylinderBuffers: createCylinderBuffers,
  createCylinderVertices: createCylinderVertices,
  createTorusBufferInfo: createTorusBufferInfo,
  createTorusBuffers: createTorusBuffers,
  createTorusVertices: createTorusVertices,
  createDiscBufferInfo: createDiscBufferInfo,
  createDiscBuffers: createDiscBuffers,
  createDiscVertices: createDiscVertices,
  deindexVertices: deindexVertices,
  flattenNormals: flattenNormals,
  makeRandomVertexColors: makeRandomVertexColors,
  reorientDirections: reorientDirections,
  reorientNormals: reorientNormals,
  reorientPositions: reorientPositions,
  reorientVertices: reorientVertices,
  concatVertices: concatVertices,
  duplicateVertices: duplicateVertices
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 * @private
 */
//function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}

/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */

function isWebGL2(gl) {
  // This is the correct check but it's slow
  //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGL2RenderingContext;
  return !!gl.texStorage2D;
}
/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */


function isWebGL1(gl) {
  // This is the correct check but it's slow
  // const version = getVersionAsNumber(gl);
  // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGLRenderingContext;
  return !gl.texStorage2D;
}
/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc');
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @return {string} enum string or hex value
 * @memberOf module:twgl
 * @function glEnumToString
 */


var glEnumToString = function () {
  var haveEnumsForType = {};
  var enums = {};

  function addEnums(gl) {
    var type = gl.constructor.name;

    if (!haveEnumsForType[type]) {
      for (var key in gl) {
        if (typeof gl[key] === 'number') {
          var existing = enums[gl[key]];
          enums[gl[key]] = existing ? "".concat(existing, " | ").concat(key) : key;
        }
      }

      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || "0x" + value.toString(16);
  };
}();
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var defaults$1 = {
  textureColor: new Uint8Array([128, 192, 255, 255]),
  textureOptions: {},
  crossOrigin: undefined
};
var isArrayBuffer$1 = isArrayBuffer; // Should we make this on demand?

var s_ctx;

function getShared2DContext() {
  s_ctx = s_ctx || (typeof document !== 'undefined' && document.createElement ? document.createElement("canvas").getContext("2d") : null);
  return s_ctx;
} // NOTE: Chrome supports 2D canvas in a Worker (behind flag as of v64 but
//       not only does Firefox NOT support it but Firefox freezes immediately
//       if you try to create one instead of just returning null and continuing.
//  : (global.OffscreenCanvas && (new global.OffscreenCanvas(1, 1)).getContext("2d"));  // OffscreenCanvas may not support 2d
// NOTE: We can maybe remove some of the need for the 2d canvas. In WebGL2
// we can use the various unpack settings. Otherwise we could try using
// the ability of an ImageBitmap to be cut. Unfortunately cutting an ImageBitmap
// is async and the current TWGL code expects a non-Async result though that
// might not be a problem. ImageBitmap though is not available in Edge or Safari
// as of 2018-01-02

/* PixelFormat */


var ALPHA = 0x1906;
var RGB = 0x1907;
var RGBA = 0x1908;
var LUMINANCE = 0x1909;
var LUMINANCE_ALPHA = 0x190A;
var DEPTH_COMPONENT = 0x1902;
var DEPTH_STENCIL = 0x84F9;
/* TextureWrapMode */
// const REPEAT                         = 0x2901;
// const MIRRORED_REPEAT                = 0x8370;

var CLAMP_TO_EDGE = 0x812f;
/* TextureMagFilter */

var NEAREST = 0x2600;
var LINEAR = 0x2601;
/* TextureMinFilter */
// const NEAREST_MIPMAP_NEAREST         = 0x2700;
// const LINEAR_MIPMAP_NEAREST          = 0x2701;
// const NEAREST_MIPMAP_LINEAR          = 0x2702;
// const LINEAR_MIPMAP_LINEAR           = 0x2703;

/* Texture Target */

var TEXTURE_2D = 0x0de1;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_3D = 0x806f;
var TEXTURE_2D_ARRAY = 0x8c1a;
/* Cubemap Targets */

var TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
var TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
var TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
var TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
var TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
var TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;
/* Texture Parameters */

var TEXTURE_MIN_FILTER = 0x2801;
var TEXTURE_MAG_FILTER = 0x2800;
var TEXTURE_WRAP_S = 0x2802;
var TEXTURE_WRAP_T = 0x2803;
var TEXTURE_WRAP_R = 0x8072;
var TEXTURE_MIN_LOD = 0x813a;
var TEXTURE_MAX_LOD = 0x813b;
var TEXTURE_BASE_LEVEL = 0x813c;
var TEXTURE_MAX_LEVEL = 0x813d;
/* Pixel store */

var UNPACK_ALIGNMENT = 0x0cf5;
var UNPACK_ROW_LENGTH = 0x0cf2;
var UNPACK_IMAGE_HEIGHT = 0x806e;
var UNPACK_SKIP_PIXELS = 0x0cf4;
var UNPACK_SKIP_ROWS = 0x0cf3;
var UNPACK_SKIP_IMAGES = 0x806d;
var UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
var UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
var UNPACK_FLIP_Y_WEBGL = 0x9240;
var R8 = 0x8229;
var R8_SNORM = 0x8F94;
var R16F = 0x822D;
var R32F = 0x822E;
var R8UI = 0x8232;
var R8I = 0x8231;
var RG16UI = 0x823A;
var RG16I = 0x8239;
var RG32UI = 0x823C;
var RG32I = 0x823B;
var RG8 = 0x822B;
var RG8_SNORM = 0x8F95;
var RG16F = 0x822F;
var RG32F = 0x8230;
var RG8UI = 0x8238;
var RG8I = 0x8237;
var R16UI = 0x8234;
var R16I = 0x8233;
var R32UI = 0x8236;
var R32I = 0x8235;
var RGB8 = 0x8051;
var SRGB8 = 0x8C41;
var RGB565 = 0x8D62;
var RGB8_SNORM = 0x8F96;
var R11F_G11F_B10F = 0x8C3A;
var RGB9_E5 = 0x8C3D;
var RGB16F = 0x881B;
var RGB32F = 0x8815;
var RGB8UI = 0x8D7D;
var RGB8I = 0x8D8F;
var RGB16UI = 0x8D77;
var RGB16I = 0x8D89;
var RGB32UI = 0x8D71;
var RGB32I = 0x8D83;
var RGBA8 = 0x8058;
var SRGB8_ALPHA8 = 0x8C43;
var RGBA8_SNORM = 0x8F97;
var RGB5_A1 = 0x8057;
var RGBA4 = 0x8056;
var RGB10_A2 = 0x8059;
var RGBA16F = 0x881A;
var RGBA32F = 0x8814;
var RGBA8UI = 0x8D7C;
var RGBA8I = 0x8D8E;
var RGB10_A2UI = 0x906F;
var RGBA16UI = 0x8D76;
var RGBA16I = 0x8D88;
var RGBA32I = 0x8D82;
var RGBA32UI = 0x8D70;
var DEPTH_COMPONENT16 = 0x81A5;
var DEPTH_COMPONENT24 = 0x81A6;
var DEPTH_COMPONENT32F = 0x8CAC;
var DEPTH32F_STENCIL8 = 0x8CAD;
var DEPTH24_STENCIL8 = 0x88F0;
/* DataType */

var BYTE$2 = 0x1400;
var UNSIGNED_BYTE$2 = 0x1401;
var SHORT$2 = 0x1402;
var UNSIGNED_SHORT$2 = 0x1403;
var INT$2 = 0x1404;
var UNSIGNED_INT$2 = 0x1405;
var FLOAT$2 = 0x1406;
var UNSIGNED_SHORT_4_4_4_4$1 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1$1 = 0x8034;
var UNSIGNED_SHORT_5_6_5$1 = 0x8363;
var HALF_FLOAT$1 = 0x140B;
var HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(

var UNSIGNED_INT_2_10_10_10_REV$1 = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV$1 = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV$1 = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV$1 = 0x8DAD;
var UNSIGNED_INT_24_8$1 = 0x84FA;
var RG = 0x8227;
var RG_INTEGER = 0x8228;
var RED = 0x1903;
var RED_INTEGER = 0x8D94;
var RGB_INTEGER = 0x8D98;
var RGBA_INTEGER = 0x8D99;
var formatInfo = {};
{
  // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
  // the name.
  var f = formatInfo;
  f[ALPHA] = {
    numColorComponents: 1
  };
  f[LUMINANCE] = {
    numColorComponents: 1
  };
  f[LUMINANCE_ALPHA] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RED] = {
    numColorComponents: 1
  };
  f[RED_INTEGER] = {
    numColorComponents: 1
  };
  f[RG] = {
    numColorComponents: 2
  };
  f[RG_INTEGER] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGB_INTEGER] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RGBA_INTEGER] = {
    numColorComponents: 4
  };
  f[DEPTH_COMPONENT] = {
    numColorComponents: 1
  };
  f[DEPTH_STENCIL] = {
    numColorComponents: 2
  };
}
/**
 * @typedef {Object} TextureFormatDetails
 * @property {number} textureFormat format to pass texImage2D and similar functions.
 * @property {boolean} colorRenderable true if you can render to this format of texture.
 * @property {boolean} textureFilterable true if you can filter the texture, false if you can ony use `NEAREST`.
 * @property {number[]} type Array of possible types you can pass to texImage2D and similar function
 * @property {Object.<number,number>} bytesPerElementMap A map of types to bytes per element
 * @private
 */

var s_textureInternalFormatInfo;

function getTextureInternalFormatInfo(internalFormat) {
  if (!s_textureInternalFormatInfo) {
    // NOTE: these properties need unique names so we can let Uglify mangle the name.
    var t = {}; // unsized formats

    t[ALPHA] = {
      textureFormat: ALPHA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [1, 2, 2, 4],
      type: [UNSIGNED_BYTE$2, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2]
    };
    t[LUMINANCE] = {
      textureFormat: LUMINANCE,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [1, 2, 2, 4],
      type: [UNSIGNED_BYTE$2, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2]
    };
    t[LUMINANCE_ALPHA] = {
      textureFormat: LUMINANCE_ALPHA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [2, 4, 4, 8],
      type: [UNSIGNED_BYTE$2, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2]
    };
    t[RGB] = {
      textureFormat: RGB,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [3, 6, 6, 12, 2],
      type: [UNSIGNED_BYTE$2, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2, UNSIGNED_SHORT_5_6_5$1]
    };
    t[RGBA] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4, 8, 8, 16, 2, 2],
      type: [UNSIGNED_BYTE$2, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2, UNSIGNED_SHORT_4_4_4_4$1, UNSIGNED_SHORT_5_5_5_1$1]
    }; // sized formats

    t[R8] = {
      textureFormat: RED,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [1],
      type: [UNSIGNED_BYTE$2]
    };
    t[R8_SNORM] = {
      textureFormat: RED,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [1],
      type: [BYTE$2]
    };
    t[R16F] = {
      textureFormat: RED,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [4, 2],
      type: [FLOAT$2, HALF_FLOAT$1]
    };
    t[R32F] = {
      textureFormat: RED,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [FLOAT$2]
    };
    t[R8UI] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [1],
      type: [UNSIGNED_BYTE$2]
    };
    t[R8I] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [1],
      type: [BYTE$2]
    };
    t[R16UI] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [UNSIGNED_SHORT$2]
    };
    t[R16I] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [SHORT$2]
    };
    t[R32UI] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT$2]
    };
    t[R32I] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [INT$2]
    };
    t[RG8] = {
      textureFormat: RG,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [2],
      type: [UNSIGNED_BYTE$2]
    };
    t[RG8_SNORM] = {
      textureFormat: RG,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [2],
      type: [BYTE$2]
    };
    t[RG16F] = {
      textureFormat: RG,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [8, 4],
      type: [FLOAT$2, HALF_FLOAT$1]
    };
    t[RG32F] = {
      textureFormat: RG,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [FLOAT$2]
    };
    t[RG8UI] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [UNSIGNED_BYTE$2]
    };
    t[RG8I] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [BYTE$2]
    };
    t[RG16UI] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_SHORT$2]
    };
    t[RG16I] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [SHORT$2]
    };
    t[RG32UI] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [UNSIGNED_INT$2]
    };
    t[RG32I] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [INT$2]
    };
    t[RGB8] = {
      textureFormat: RGB,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [3],
      type: [UNSIGNED_BYTE$2]
    };
    t[SRGB8] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [3],
      type: [UNSIGNED_BYTE$2]
    };
    t[RGB565] = {
      textureFormat: RGB,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [3, 2],
      type: [UNSIGNED_BYTE$2, UNSIGNED_SHORT_5_6_5$1]
    };
    t[RGB8_SNORM] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [3],
      type: [BYTE$2]
    };
    t[R11F_G11F_B10F] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [12, 6, 4],
      type: [FLOAT$2, HALF_FLOAT$1, UNSIGNED_INT_10F_11F_11F_REV$1]
    };
    t[RGB9_E5] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [12, 6, 4],
      type: [FLOAT$2, HALF_FLOAT$1, UNSIGNED_INT_5_9_9_9_REV$1]
    };
    t[RGB16F] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [12, 6],
      type: [FLOAT$2, HALF_FLOAT$1]
    };
    t[RGB32F] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [12],
      type: [FLOAT$2]
    };
    t[RGB8UI] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [3],
      type: [UNSIGNED_BYTE$2]
    };
    t[RGB8I] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [3],
      type: [BYTE$2]
    };
    t[RGB16UI] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [6],
      type: [UNSIGNED_SHORT$2]
    };
    t[RGB16I] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [6],
      type: [SHORT$2]
    };
    t[RGB32UI] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [12],
      type: [UNSIGNED_INT$2]
    };
    t[RGB32I] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [12],
      type: [INT$2]
    };
    t[RGBA8] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [UNSIGNED_BYTE$2]
    };
    t[SRGB8_ALPHA8] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [UNSIGNED_BYTE$2]
    };
    t[RGBA8_SNORM] = {
      textureFormat: RGBA,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [BYTE$2]
    };
    t[RGB5_A1] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4, 2, 4],
      type: [UNSIGNED_BYTE$2, UNSIGNED_SHORT_5_5_5_1$1, UNSIGNED_INT_2_10_10_10_REV$1]
    };
    t[RGBA4] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4, 2],
      type: [UNSIGNED_BYTE$2, UNSIGNED_SHORT_4_4_4_4$1]
    };
    t[RGB10_A2] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [UNSIGNED_INT_2_10_10_10_REV$1]
    };
    t[RGBA16F] = {
      textureFormat: RGBA,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [16, 8],
      type: [FLOAT$2, HALF_FLOAT$1]
    };
    t[RGBA32F] = {
      textureFormat: RGBA,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [16],
      type: [FLOAT$2]
    };
    t[RGBA8UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_BYTE$2]
    };
    t[RGBA8I] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [BYTE$2]
    };
    t[RGB10_A2UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT_2_10_10_10_REV$1]
    };
    t[RGBA16UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [UNSIGNED_SHORT$2]
    };
    t[RGBA16I] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [SHORT$2]
    };
    t[RGBA32I] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [16],
      type: [INT$2]
    };
    t[RGBA32UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [16],
      type: [UNSIGNED_INT$2]
    }; // Sized Internal

    t[DEPTH_COMPONENT16] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2, 4],
      type: [UNSIGNED_SHORT$2, UNSIGNED_INT$2]
    };
    t[DEPTH_COMPONENT24] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT$2]
    };
    t[DEPTH_COMPONENT32F] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [FLOAT$2]
    };
    t[DEPTH24_STENCIL8] = {
      textureFormat: DEPTH_STENCIL,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT_24_8$1]
    };
    t[DEPTH32F_STENCIL8] = {
      textureFormat: DEPTH_STENCIL,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [FLOAT_32_UNSIGNED_INT_24_8_REV$1]
    };
    Object.keys(t).forEach(function (internalFormat) {
      var info = t[internalFormat];
      info.bytesPerElementMap = {};
      info.bytesPerElement.forEach(function (bytesPerElement, ndx) {
        var type = info.type[ndx];
        info.bytesPerElementMap[type] = bytesPerElement;
      });
    });
    s_textureInternalFormatInfo = t;
  }

  return s_textureInternalFormatInfo[internalFormat];
}
/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */


function getBytesPerElementForInternalFormat(internalFormat, type) {
  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  var bytesPerElement = info.bytesPerElementMap[type];

  if (bytesPerElement === undefined) {
    throw "unknown internal format";
  }

  return bytesPerElement;
}
/**
 * Info related to a specific texture internalFormat as returned
 * from {@link module:twgl/textures.getFormatAndTypeForInternalFormat}.
 *
 * @typedef {Object} TextureFormatInfo
 * @property {number} format Format to pass to texImage2D and related functions
 * @property {number} type Type to pass to texImage2D and related functions
 * @memberOf module:twgl/textures
 */

/**
 * Gets the format and type for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {module:twgl/textures.TextureFormatInfo} the corresponding format and type,
 * @memberOf module:twgl/textures
 */


function getFormatAndTypeForInternalFormat(internalFormat) {
  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  return {
    format: info.textureFormat,
    type: info.type[0]
  };
}
/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 * @private
 */


function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
/**
 * Gets whether or not we can generate mips for the given
 * internal format.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number} width The width parameter from texImage2D etc..
 * @param {number} height The height parameter from texImage2D etc..
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */


function canGenerateMipmap(gl, width, height, internalFormat) {
  if (!isWebGL2(gl)) {
    return isPowerOf2(width) && isPowerOf2(height);
  }

  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  return info.colorRenderable && info.textureFilterable;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */


function canFilter(internalFormat) {
  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  return info.textureFilterable;
}
/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 * @private
 */


function getTextureTypeForArrayType(gl, src, defaultType) {
  if (isArrayBuffer$1(src)) {
    return getGLTypeForTypedArray(src);
  }

  return defaultType || UNSIGNED_BYTE$2;
}

function guessDimensions(gl, target, width, height, numElements) {
  if (numElements % 1 !== 0) {
    throw "can't guess dimensions";
  }

  if (!width && !height) {
    var size = Math.sqrt(numElements / (target === TEXTURE_CUBE_MAP ? 6 : 1));

    if (size % 1 === 0) {
      width = size;
      height = size;
    } else {
      width = numElements;
      height = 1;
    }
  } else if (!height) {
    height = numElements / width;

    if (height % 1) {
      throw "can't guess dimensions";
    }
  } else if (!width) {
    width = numElements / height;

    if (width % 1) {
      throw "can't guess dimensions";
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */

/**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * Note: A `TexImageSource` is defined in the WebGL spec as a `HTMLImageElement`, `HTMLVideoElement`,
 * `HTMLCanvasElement`, `ImageBitmap`, or `ImageData`.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number[]|ArrayBufferView} [color] Color to initialize this texture with if loading an image asynchronously.
 *     The default use a blue 1x1 pixel texture. You can set another default by calling `twgl.setDefaults`
 *     or you can set an individual texture's initial color by setting this property. Example: `[1, .5, .5, 1]` = pink
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|TexImageSource|TexImageSource[]|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediately. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_CUBE_MAP` then it must have 6 entries, one for each face of a cube map.
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_2D_ARRAY` then each entry is a slice of the a 2d array texture
 *    and will be scaled to the specified width and height OR to the size of the first image that loads.
 *
 *    If `TexImageSource` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */
// NOTE: While querying GL is considered slow it's not remotely as slow
// as uploading a texture. On top of that you're unlikely to call this in
// a perf critical loop. Even if upload a texture every frame that's unlikely
// to be more than 1 or 2 textures a frame. In other words, the benefits of
// making the API easy to use outweigh any supposed perf benefits
//
// Also note I get that having one global of these is bad practice.
// As long as it's used correctly it means no garbage which probably
// doesn't matter when dealing with textures but old habits die hard.


var lastPackState = {};
/**
 * Saves any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */

function savePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    lastPackState.colorspaceConversion = gl.getParameter(UNPACK_COLORSPACE_CONVERSION_WEBGL);
    gl.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    lastPackState.premultiplyAlpha = gl.getParameter(UNPACK_PREMULTIPLY_ALPHA_WEBGL);
    gl.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    lastPackState.flipY = gl.getParameter(UNPACK_FLIP_Y_WEBGL);
    gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, options.flipY);
  }
}
/**
 * Restores any packing state that was set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */


function restorePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    gl.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    gl.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, lastPackState.flipY);
  }
}
/**
 * Saves state related to data size
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */


function saveSkipState(gl) {
  lastPackState.unpackAlignment = gl.getParameter(UNPACK_ALIGNMENT);

  if (isWebGL2(gl)) {
    lastPackState.unpackRowLength = gl.getParameter(UNPACK_ROW_LENGTH);
    lastPackState.unpackImageHeight = gl.getParameter(UNPACK_IMAGE_HEIGHT);
    lastPackState.unpackSkipPixels = gl.getParameter(UNPACK_SKIP_PIXELS);
    lastPackState.unpackSkipRows = gl.getParameter(UNPACK_SKIP_ROWS);
    lastPackState.unpackSkipImages = gl.getParameter(UNPACK_SKIP_IMAGES);
  }
}
/**
 * Restores state related to data size
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */


function restoreSkipState(gl) {
  gl.pixelStorei(UNPACK_ALIGNMENT, lastPackState.unpackAlignment);

  if (isWebGL2(gl)) {
    gl.pixelStorei(UNPACK_ROW_LENGTH, lastPackState.unpackRowLength);
    gl.pixelStorei(UNPACK_IMAGE_HEIGHT, lastPackState.unpackImageHeight);
    gl.pixelStorei(UNPACK_SKIP_PIXELS, lastPackState.unpackSkipPixels);
    gl.pixelStorei(UNPACK_SKIP_ROWS, lastPackState.unpackSkipRows);
    gl.pixelStorei(UNPACK_SKIP_IMAGES, lastPackState.unpackSkipImages);
  }
}
/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParameteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @private
 */


function setTextureSamplerParameters(gl, target, parameteriFn, options) {
  if (options.minMag) {
    parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.minMag);
    parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.minMag);
  }

  if (options.min) {
    parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.min);
  }

  if (options.mag) {
    parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.mag);
  }

  if (options.wrap) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrap);
    parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrap);

    if (target === TEXTURE_3D || isSampler(gl, target)) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrap);
    }
  }

  if (options.wrapR) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrapR);
  }

  if (options.wrapS) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrapS);
  }

  if (options.wrapT) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrapT);
  }

  if (options.minLod) {
    parameteriFn.call(gl, target, TEXTURE_MIN_LOD, options.minLod);
  }

  if (options.maxLod) {
    parameteriFn.call(gl, target, TEXTURE_MAX_LOD, options.maxLod);
  }

  if (options.baseLevel) {
    parameteriFn.call(gl, target, TEXTURE_BASE_LEVEL, options.baseLevel);
  }

  if (options.maxLevel) {
    parameteriFn.call(gl, target, TEXTURE_MAX_LEVEL, options.maxLevel);
  }
}
/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureParameters(gl, tex, options) {
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}
/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 * @private
 */


function make1Pixel(color) {
  color = color || defaults$1.textureColor;

  if (isArrayBuffer$1(color)) {
    return color;
  }

  return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}
/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @memberOf module:twgl/textures
 */


function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat) {
  options = options || defaults$1.textureOptions;
  internalFormat = internalFormat || RGBA;
  var target = options.target || TEXTURE_2D;
  width = width || options.width;
  height = height || options.height;
  gl.bindTexture(target, tex);

  if (canGenerateMipmap(gl, width, height, internalFormat)) {
    gl.generateMipmap(target);
  } else {
    var filtering = canFilter(internalFormat) ? LINEAR : NEAREST;
    gl.texParameteri(target, TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(target, TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  }
}

function shouldAutomaticallySetTextureFilteringForSize(options) {
  return options.auto === true || options.auto === undefined && options.level === undefined;
}
/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 * @private
 */


function getCubeFaceOrder(gl, options) {
  options = options || {};
  return options.cubeFaceOrder || [TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, TEXTURE_CUBE_MAP_NEGATIVE_Z];
}
/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */

/**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundant but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 * @private
 */


function getCubeFacesWithNdx(gl, options) {
  var faces = getCubeFaceOrder(gl, options); // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(

  var facesWithNdx = faces.map(function (face, ndx) {
    return {
      face: face,
      ndx: ndx
    };
  });
  facesWithNdx.sort(function (a, b) {
    return a.face - b.face;
  });
  return facesWithNdx;
}
/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */


function setTextureFromElement(gl, tex, element, options) {
  options = options || defaults$1.textureOptions;
  var target = options.target || TEXTURE_2D;
  var level = options.level || 0;
  var width = element.width;
  var height = element.height;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);
  gl.bindTexture(target, tex);

  if (target === TEXTURE_CUBE_MAP) {
    // guess the parts
    var imgWidth = element.width;
    var imgHeight = element.height;
    var size;
    var slices;

    if (imgWidth / 6 === imgHeight) {
      // It's 6x1
      size = imgHeight;
      slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
    } else if (imgHeight / 6 === imgWidth) {
      // It's 1x6
      size = imgWidth;
      slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
    } else if (imgWidth / 3 === imgHeight / 2) {
      // It's 3x2
      size = imgWidth / 3;
      slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
    } else if (imgWidth / 2 === imgHeight / 3) {
      // It's 2x3
      size = imgWidth / 2;
      slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
    } else {
      throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
    }

    var ctx = getShared2DContext();

    if (ctx) {
      ctx.canvas.width = size;
      ctx.canvas.height = size;
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size;
        ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
        gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
      }); // Free up the canvas memory

      ctx.canvas.width = 1;
      ctx.canvas.height = 1;
    } else if (typeof createImageBitmap !== 'undefined') {
      // NOTE: It seems like we should prefer ImageBitmap because unlike canvas it's
      // note lossy? (alpha is not premultiplied? although I'm not sure what
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size; // We can't easily use a default texture color here as it would have to match
        // the type across all faces where as with a 2D one there's only one face
        // so we're replacing everything all at once. It also has to be the correct size.
        // On the other hand we need all faces to be the same size so as one face loads
        // the rest match else the texture will be un-renderable.

        gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);
        createImageBitmap(element, xOffset, yOffset, size, size, {
          premultiplyAlpha: 'none',
          colorSpaceConversion: 'none'
        }).then(function (imageBitmap) {
          savePackState(gl, options);
          gl.bindTexture(target, tex);
          gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
          restorePackState(gl, options);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
          }
        });
      });
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    var smallest = Math.min(element.width, element.height);
    var largest = Math.max(element.width, element.height);
    var depth = largest / smallest;

    if (depth % 1 !== 0) {
      throw "can not compute 3D dimensions of element";
    }

    var xMult = element.width === largest ? 1 : 0;
    var yMult = element.height === largest ? 1 : 0;
    saveSkipState(gl);
    gl.pixelStorei(UNPACK_ALIGNMENT, 1);
    gl.pixelStorei(UNPACK_ROW_LENGTH, element.width);
    gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
    gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);

    for (var d = 0; d < depth; ++d) {
      var srcX = d * smallest * xMult;
      var srcY = d * smallest * yMult;
      gl.pixelStorei(UNPACK_SKIP_PIXELS, srcX);
      gl.pixelStorei(UNPACK_SKIP_ROWS, srcY);
      gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
    }

    restoreSkipState(gl);
  } else {
    gl.texImage2D(target, level, internalFormat, format, type, element);
  }

  restorePackState(gl, options);

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
  }

  setTextureParameters(gl, tex, options);
}

function noop() {}
/**
 * Checks whether the url's origin is the same so that we can set the `crossOrigin`
 * @param {string} url url to image
 * @returns {boolean} true if the window's origin is the same as image's url
 * @private
 */


function urlIsSameOrigin(url) {
  if (typeof document !== 'undefined') {
    // for IE really
    var a = document.createElement('a');
    a.href = url;
    return a.hostname === location.hostname && a.port === location.port && a.protocol === location.protocol;
  } else {
    var localOrigin = new URL(location.href).origin;
    var urlOrigin = new URL(url, location.href).origin;
    return urlOrigin === localOrigin;
  }
}

function setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin) {
  return crossOrigin === undefined && !urlIsSameOrigin(url) ? 'anonymous' : crossOrigin;
}
/**
 * Loads an image
 * @param {string} url url to image
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 * @private
 */


function loadImage(url, crossOrigin, callback) {
  callback = callback || noop;
  var img;
  crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults$1.crossOrigin;
  crossOrigin = setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin);

  if (typeof Image !== 'undefined') {
    img = new Image();

    if (crossOrigin !== undefined) {
      img.crossOrigin = crossOrigin;
    }

    var clearEventHandlers = function clearEventHandlers() {
      img.removeEventListener('error', onError); // eslint-disable-line

      img.removeEventListener('load', onLoad); // eslint-disable-line

      img = null;
    };

    var onError = function onError() {
      var msg = "couldn't load image: " + url;
      error(msg);
      callback(msg, img);
      clearEventHandlers();
    };

    var onLoad = function onLoad() {
      callback(null, img);
      clearEventHandlers();
    };

    img.addEventListener('error', onError);
    img.addEventListener('load', onLoad);
    img.src = url;
    return img;
  } else if (typeof ImageBitmap !== 'undefined') {
    var err;
    var bm;

    var cb = function cb() {
      callback(err, bm);
    };

    var options = {};

    if (crossOrigin) {
      options.mode = 'cors'; // TODO: not sure how to translate image.crossOrigin
    }

    fetch(url, options).then(function (response) {
      if (!response.ok) {
        throw response;
      }

      return response.blob();
    }).then(function (blob) {
      return createImageBitmap(blob, {
        premultiplyAlpha: 'none',
        colorSpaceConversion: 'none'
      });
    }).then(function (bitmap) {
      // not sure if this works. We don't want
      // to catch the user's error. So, call
      // the callback in a timeout so we're
      // not in this scope inside the promise.
      bm = bitmap;
      setTimeout(cb);
    }).catch(function (e) {
      err = e;
      setTimeout(cb);
    });
    img = null;
  }

  return img;
}
/**
 * check if object is a TexImageSource
 *
 * @param {Object} obj Object to test
 * @return {boolean} true if object is a TexImageSource
 * @private
 */


function isTexImageSource(obj) {
  return typeof ImageBitmap !== 'undefined' && obj instanceof ImageBitmap || typeof ImageData !== 'undefined' && obj instanceof ImageData || typeof HTMLElement !== 'undefined' && obj instanceof HTMLElement;
}
/**
 * if obj is an TexImageSource then just
 * uses it otherwise if obj is a string
 * then load it first.
 *
 * @param {string|TexImageSource} obj
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @private
 */


function loadAndUseImage(obj, crossOrigin, callback) {
  if (isTexImageSource(obj)) {
    setTimeout(function () {
      callback(null, obj);
    });
    return obj;
  }

  return loadImage(obj, crossOrigin, callback);
}
/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureTo1PixelColor(gl, tex, options) {
  options = options || defaults$1.textureOptions;
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);

  if (options.color === false) {
    return;
  } // Assume it's a URL
  // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.


  var color = make1Pixel(options.color);

  if (target === TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE$2, color);
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, 0, RGBA, 1, 1, 1, 0, RGBA, UNSIGNED_BYTE$2, color);
  } else {
    gl.texImage2D(target, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE$2, color);
  }
}
/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} source image(s) used to as the src for the texture
 * @memberOf module:twgl
 */

/**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */

/**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as appropriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */


function loadTextureFromUrl(gl, tex, options, callback) {
  callback = callback || noop;
  options = options || defaults$1.textureOptions;
  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var img = loadAndUseImage(options.src, options.crossOrigin, function (err, img) {
    if (err) {
      callback(err, tex, img);
    } else {
      setTextureFromElement(gl, tex, img, options);
      callback(null, tex, img);
    }
  });
  return img;
}
/**
 * Loads a cubemap from 6 urls or TexImageSources as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadCubemapFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;

  if (urls.length !== 6) {
    throw "there must be 6 urls for a cubemap";
  }

  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || UNSIGNED_BYTE$2;
  var target = options.target || TEXTURE_2D;

  if (target !== TEXTURE_CUBE_MAP) {
    throw "target must be TEXTURE_CUBE_MAP";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = 6;
  var errors = [];
  var faces = getCubeFaceOrder(gl, options);
  var imgs; // eslint-disable-line

  function uploadImg(faceTarget) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        if (img.width !== img.height) {
          errors.push("cubemap face img is not a square: " + img.src);
        } else {
          savePackState(gl, options);
          gl.bindTexture(target, tex); // So assuming this is the first image we now have one face that's img sized
          // and 5 faces that are 1x1 pixel so size the other faces

          if (numToLoad === 5) {
            // use the default order
            getCubeFaceOrder().forEach(function (otherTarget) {
              // Should we re-use the same face or a color?
              gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
            });
          } else {
            gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
          }

          restorePackState(gl, options);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
  });
}
/**
 * Loads a 2d array or 3d texture from urls OR TexImageSources as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadSlicesFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || UNSIGNED_BYTE$2;
  var target = options.target || TEXTURE_2D_ARRAY;

  if (target !== TEXTURE_3D && target !== TEXTURE_2D_ARRAY) {
    throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = urls.length;
  var errors = [];
  var imgs; // eslint-disable-line

  var level = options.level || 0;
  var width = options.width;
  var height = options.height;
  var depth = urls.length;
  var firstImage = true;

  function uploadImg(slice) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        savePackState(gl, options);
        gl.bindTexture(target, tex);

        if (firstImage) {
          firstImage = false;
          width = options.width || img.width;
          height = options.height || img.height;
          gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null); // put it in every slice otherwise some slices will be 0,0,0,0

          for (var s = 0; s < depth; ++s) {
            gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
          }
        } else {
          var src = img;
          var ctx;

          if (img.width !== width || img.height !== height) {
            // Size the image to fix
            ctx = getShared2DContext();
            src = ctx.canvas;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          }

          gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src); // free the canvas memory

          if (ctx && src === ctx.canvas) {
            ctx.canvas.width = 0;
            ctx.canvas.height = 0;
          }
        }

        restorePackState(gl, options);

        if (shouldAutomaticallySetTextureFilteringForSize(options)) {
          gl.generateMipmap(target);
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
  });
}
/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureFromArray(gl, tex, src, options) {
  options = options || defaults$1.textureOptions;
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  var width = options.width;
  var height = options.height;
  var depth = options.depth;
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);

  if (!isArrayBuffer$1(src)) {
    var Type = getTypedArrayTypeForGLType(type);
    src = new Type(src);
  } else if (src instanceof Uint8ClampedArray) {
    src = new Uint8Array(src.buffer);
  }

  var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
  var numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?

  if (numElements % 1) {
    throw "length wrong size for format: " + glEnumToString(gl, format);
  }

  var dimensions;

  if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    if (!width && !height && !depth) {
      var size = Math.cbrt(numElements);

      if (size % 1 !== 0) {
        throw "can't guess cube size of array of numElements: " + numElements;
      }

      width = size;
      height = size;
      depth = size;
    } else if (width && (!height || !depth)) {
      dimensions = guessDimensions(gl, target, height, depth, numElements / width);
      height = dimensions.width;
      depth = dimensions.height;
    } else if (height && (!width || !depth)) {
      dimensions = guessDimensions(gl, target, width, depth, numElements / height);
      width = dimensions.width;
      depth = dimensions.height;
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements / depth);
      width = dimensions.width;
      height = dimensions.height;
    }
  } else {
    dimensions = guessDimensions(gl, target, width, height, numElements);
    width = dimensions.width;
    height = dimensions.height;
  }

  saveSkipState(gl);
  gl.pixelStorei(UNPACK_ALIGNMENT, options.unpackAlignment || 1);
  savePackState(gl, options);

  if (target === TEXTURE_CUBE_MAP) {
    var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
    var faceSize = numElements / 6 * elementsPerElement;
    getCubeFacesWithNdx(gl, options).forEach(function (f) {
      var offset = faceSize * f.ndx;
      var data = src.subarray(offset, offset + faceSize);
      gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
    });
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
  }

  restorePackState(gl, options);
  restoreSkipState(gl);
  return {
    width: width,
    height: height,
    depth: depth,
    type: type
  };
}
/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setEmptyTexture(gl, tex, options) {
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);

  if (target === TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
  }

  restorePackState(gl, options);
}
/**
 * Creates a texture based on the options passed in.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */


function createTexture(gl, options, callback) {
  callback = callback || noop;
  options = options || defaults$1.textureOptions;
  var tex = gl.createTexture();
  var target = options.target || TEXTURE_2D;
  var width = options.width || 1;
  var height = options.height || 1;
  var internalFormat = options.internalFormat || RGBA;
  gl.bindTexture(target, tex);

  if (target === TEXTURE_CUBE_MAP) {
    // this should have been the default for cubemaps :(
    gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  }

  var src = options.src;

  if (src) {
    if (typeof src === "function") {
      src = src(gl, options);
    }

    if (typeof src === "string") {
      loadTextureFromUrl(gl, tex, options, callback);
    } else if (isArrayBuffer$1(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer$1(src[0]))) {
      var dimensions = setTextureFromArray(gl, tex, src, options);
      width = dimensions.width;
      height = dimensions.height;
    } else if (Array.isArray(src) && (typeof src[0] === 'string' || isTexImageSource(src[0]))) {
      if (target === TEXTURE_CUBE_MAP) {
        loadCubemapFromUrls(gl, tex, options, callback);
      } else {
        loadSlicesFromUrls(gl, tex, options, callback);
      }
    } else {
      // if (isTexImageSource(src))
      setTextureFromElement(gl, tex, src, options);
      width = src.width;
      height = src.height;
    }
  } else {
    setEmptyTexture(gl, tex, options);
  }

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
  }

  setTextureParameters(gl, tex, options);
  return tex;
}
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */

var error$1 = error;

function getElementById(id) {
  return typeof document !== 'undefined' && document.getElementById ? document.getElementById(id) : null;
}

var TEXTURE0 = 0x84c0;
var ARRAY_BUFFER$1 = 0x8892;
var ELEMENT_ARRAY_BUFFER$1 = 0x8893;
var COMPILE_STATUS = 0x8b81;
var LINK_STATUS = 0x8b82;
var FRAGMENT_SHADER = 0x8b30;
var VERTEX_SHADER = 0x8b31;
var SEPARATE_ATTRIBS = 0x8c8d;
var ACTIVE_UNIFORMS = 0x8b86;
var ACTIVE_ATTRIBUTES = 0x8b89;
var TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;
var ACTIVE_UNIFORM_BLOCKS = 0x8a36;
var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;
var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
var UNIFORM_BLOCK_DATA_SIZE = 0x8a40;
var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;
var FLOAT$3 = 0x1406;
var FLOAT_VEC2 = 0x8B50;
var FLOAT_VEC3 = 0x8B51;
var FLOAT_VEC4 = 0x8B52;
var INT$3 = 0x1404;
var INT_VEC2 = 0x8B53;
var INT_VEC3 = 0x8B54;
var INT_VEC4 = 0x8B55;
var BOOL = 0x8B56;
var BOOL_VEC2 = 0x8B57;
var BOOL_VEC3 = 0x8B58;
var BOOL_VEC4 = 0x8B59;
var FLOAT_MAT2 = 0x8B5A;
var FLOAT_MAT3 = 0x8B5B;
var FLOAT_MAT4 = 0x8B5C;
var SAMPLER_2D = 0x8B5E;
var SAMPLER_CUBE = 0x8B60;
var SAMPLER_3D = 0x8B5F;
var SAMPLER_2D_SHADOW = 0x8B62;
var FLOAT_MAT2x3 = 0x8B65;
var FLOAT_MAT2x4 = 0x8B66;
var FLOAT_MAT3x2 = 0x8B67;
var FLOAT_MAT3x4 = 0x8B68;
var FLOAT_MAT4x2 = 0x8B69;
var FLOAT_MAT4x3 = 0x8B6A;
var SAMPLER_2D_ARRAY = 0x8DC1;
var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
var SAMPLER_CUBE_SHADOW = 0x8DC5;
var UNSIGNED_INT$3 = 0x1405;
var UNSIGNED_INT_VEC2 = 0x8DC6;
var UNSIGNED_INT_VEC3 = 0x8DC7;
var UNSIGNED_INT_VEC4 = 0x8DC8;
var INT_SAMPLER_2D = 0x8DCA;
var INT_SAMPLER_3D = 0x8DCB;
var INT_SAMPLER_CUBE = 0x8DCC;
var INT_SAMPLER_2D_ARRAY = 0x8DCF;
var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
var TEXTURE_2D$1 = 0x0DE1;
var TEXTURE_CUBE_MAP$1 = 0x8513;
var TEXTURE_3D$1 = 0x806F;
var TEXTURE_2D_ARRAY$1 = 0x8C1A;
var typeMap = {};
/**
 * Returns the corresponding bind point for a given sampler type
 */

function getBindPointForSamplerType(gl, type) {
  return typeMap[type].bindPoint;
} // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)


function floatSetter(gl, location) {
  return function (v) {
    gl.uniform1f(location, v);
  };
}

function floatArraySetter(gl, location) {
  return function (v) {
    gl.uniform1fv(location, v);
  };
}

function floatVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2fv(location, v);
  };
}

function floatVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3fv(location, v);
  };
}

function floatVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4fv(location, v);
  };
}

function intSetter(gl, location) {
  return function (v) {
    gl.uniform1i(location, v);
  };
}

function intArraySetter(gl, location) {
  return function (v) {
    gl.uniform1iv(location, v);
  };
}

function intVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2iv(location, v);
  };
}

function intVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3iv(location, v);
  };
}

function intVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4iv(location, v);
  };
}

function uintSetter(gl, location) {
  return function (v) {
    gl.uniform1ui(location, v);
  };
}

function uintArraySetter(gl, location) {
  return function (v) {
    gl.uniform1uiv(location, v);
  };
}

function uintVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2uiv(location, v);
  };
}

function uintVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3uiv(location, v);
  };
}

function uintVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4uiv(location, v);
  };
}

function floatMat2Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2fv(location, false, v);
  };
}

function floatMat3Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3fv(location, false, v);
  };
}

function floatMat4Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4fv(location, false, v);
  };
}

function floatMat23Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x3fv(location, false, v);
  };
}

function floatMat32Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x2fv(location, false, v);
  };
}

function floatMat24Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x4fv(location, false, v);
  };
}

function floatMat42Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x2fv(location, false, v);
  };
}

function floatMat34Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x4fv(location, false, v);
  };
}

function floatMat43Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x3fv(location, false, v);
  };
}

function samplerSetter(gl, type, unit, location) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  return isWebGL2(gl) ? function (textureOrPair) {
    var texture;
    var sampler;

    if (isTexture(gl, textureOrPair)) {
      texture = textureOrPair;
      sampler = null;
    } else {
      texture = textureOrPair.texture;
      sampler = textureOrPair.sampler;
    }

    gl.uniform1i(location, unit);
    gl.activeTexture(TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
    gl.bindSampler(unit, sampler);
  } : function (texture) {
    gl.uniform1i(location, unit);
    gl.activeTexture(TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
  };
}

function samplerArraySetter(gl, type, unit, location, size) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  var units = new Int32Array(size);

  for (var ii = 0; ii < size; ++ii) {
    units[ii] = unit + ii;
  }

  return isWebGL2(gl) ? function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (textureOrPair, index) {
      gl.activeTexture(TEXTURE0 + units[index]);
      var texture;
      var sampler;

      if (isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }

      gl.bindSampler(unit, sampler);
      gl.bindTexture(bindPoint, texture);
    });
  } : function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (texture, index) {
      gl.activeTexture(TEXTURE0 + units[index]);
      gl.bindTexture(bindPoint, texture);
    });
  };
}

typeMap[FLOAT$3] = {
  Type: Float32Array,
  size: 4,
  setter: floatSetter,
  arraySetter: floatArraySetter
};
typeMap[FLOAT_VEC2] = {
  Type: Float32Array,
  size: 8,
  setter: floatVec2Setter
};
typeMap[FLOAT_VEC3] = {
  Type: Float32Array,
  size: 12,
  setter: floatVec3Setter
};
typeMap[FLOAT_VEC4] = {
  Type: Float32Array,
  size: 16,
  setter: floatVec4Setter
};
typeMap[INT$3] = {
  Type: Int32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[INT_VEC2] = {
  Type: Int32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[INT_VEC3] = {
  Type: Int32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[INT_VEC4] = {
  Type: Int32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[UNSIGNED_INT$3] = {
  Type: Uint32Array,
  size: 4,
  setter: uintSetter,
  arraySetter: uintArraySetter
};
typeMap[UNSIGNED_INT_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: uintVec2Setter
};
typeMap[UNSIGNED_INT_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: uintVec3Setter
};
typeMap[UNSIGNED_INT_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: uintVec4Setter
};
typeMap[BOOL] = {
  Type: Uint32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[BOOL_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[BOOL_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[BOOL_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[FLOAT_MAT2] = {
  Type: Float32Array,
  size: 16,
  setter: floatMat2Setter
};
typeMap[FLOAT_MAT3] = {
  Type: Float32Array,
  size: 36,
  setter: floatMat3Setter
};
typeMap[FLOAT_MAT4] = {
  Type: Float32Array,
  size: 64,
  setter: floatMat4Setter
};
typeMap[FLOAT_MAT2x3] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat23Setter
};
typeMap[FLOAT_MAT2x4] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat24Setter
};
typeMap[FLOAT_MAT3x2] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat32Setter
};
typeMap[FLOAT_MAT3x4] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat34Setter
};
typeMap[FLOAT_MAT4x2] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat42Setter
};
typeMap[FLOAT_MAT4x3] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat43Setter
};
typeMap[SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D$1
};
typeMap[SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D$1
};
typeMap[SAMPLER_2D_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D$1
};
typeMap[SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY$1
};
typeMap[SAMPLER_2D_ARRAY_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY$1
};
typeMap[SAMPLER_CUBE_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D$1
};
typeMap[INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D$1
};
typeMap[INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY$1
};
typeMap[UNSIGNED_INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D$1
};
typeMap[UNSIGNED_INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D$1
};
typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY$1
};

function floatAttribSetter(gl, index) {
  return function (b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);

      switch (b.value.length) {
        case 4:
          gl.vertexAttrib4fv(index, b.value);
          break;

        case 3:
          gl.vertexAttrib3fv(index, b.value);
          break;

        case 2:
          gl.vertexAttrib2fv(index, b.value);
          break;

        case 1:
          gl.vertexAttrib1fv(index, b.value);
          break;

        default:
          throw new Error('the length of a float constant value must be between 1 and 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || FLOAT$3, b.normalize || false, b.stride || 0, b.offset || 0);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index, b.divisor);
      }
    }
  };
}

function intAttribSetter(gl, index) {
  return function (b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);

      if (b.value.length === 4) {
        gl.vertexAttrib4iv(index, b.value);
      } else {
        throw new Error('The length of an integer constant value must be 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || INT$3, b.stride || 0, b.offset || 0);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index, b.divisor);
      }
    }
  };
}

function uintAttribSetter(gl, index) {
  return function (b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);

      if (b.value.length === 4) {
        gl.vertexAttrib4uiv(index, b.value);
      } else {
        throw new Error('The length of an unsigned integer constant value must be 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || UNSIGNED_INT$3, b.stride || 0, b.offset || 0);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index, b.divisor);
      }
    }
  };
}

function matAttribSetter(gl, index, typeInfo) {
  var defaultSize = typeInfo.size;
  var count = typeInfo.count;
  return function (b) {
    gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
    var numComponents = b.size || b.numComponents || defaultSize;
    var size = numComponents / count;
    var type = b.type || FLOAT$3;
    var typeInfo = typeMap[type];
    var stride = typeInfo.size * numComponents;
    var normalize = b.normalize || false;
    var offset = b.offset || 0;
    var rowOffset = stride / count;

    for (var i = 0; i < count; ++i) {
      gl.enableVertexAttribArray(index + i);
      gl.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index + i, b.divisor);
      }
    }
  };
}

var attrTypeMap = {};
attrTypeMap[FLOAT$3] = {
  size: 4,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC2] = {
  size: 8,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC3] = {
  size: 12,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC4] = {
  size: 16,
  setter: floatAttribSetter
};
attrTypeMap[INT$3] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT$3] = {
  size: 4,
  setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC2] = {
  size: 8,
  setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC3] = {
  size: 12,
  setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC4] = {
  size: 16,
  setter: uintAttribSetter
};
attrTypeMap[BOOL] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[FLOAT_MAT2] = {
  size: 4,
  setter: matAttribSetter,
  count: 2
};
attrTypeMap[FLOAT_MAT3] = {
  size: 9,
  setter: matAttribSetter,
  count: 3
};
attrTypeMap[FLOAT_MAT4] = {
  size: 16,
  setter: matAttribSetter,
  count: 4
};
/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */

function addLineNumbers(src, lineOffset) {
  lineOffset = lineOffset || 0;
  ++lineOffset;
  return src.split("\n").map(function (line, ndx) {
    return ndx + lineOffset + ": " + line;
  }).join("\n");
}

var spaceRE = /^[ \t]*\n/;
/**
 * Loads a shader.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
 * @return {WebGLShader} The created shader.
 * @private
 */

function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
  var errFn = opt_errorCallback || error$1; // Create the shader object

  var shader = gl.createShader(shaderType); // Remove the first end of line because WebGL 2.0 requires
  // #version 300 es
  // as the first line. No whitespace allowed before that line
  // so
  //
  // <script>
  // #version 300 es
  // </script>
  //
  // Has one line before it which is invalid according to GLSL ES 3.00
  //

  var lineOffset = 0;

  if (spaceRE.test(shaderSource)) {
    lineOffset = 1;
    shaderSource = shaderSource.replace(spaceRE, '');
  } // Load the shader source


  gl.shaderSource(shader, shaderSource); // Compile the shader

  gl.compileShader(shader); // Check the compile status

  var compiled = gl.getShaderParameter(shader, COMPILE_STATUS);

  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader);
    errFn(addLineNumbers(shaderSource, lineOffset) + "\n*** Error compiling shader: " + lastError);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>} [attribLocations] a attribute name to location map
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @memberOf module:twgl
 */

/**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments passed in
 * @private
 */


function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
  var transformFeedbackVaryings;
  var transformFeedbackMode;

  if (typeof opt_locations === 'function') {
    opt_errorCallback = opt_locations;
    opt_locations = undefined;
  }

  if (typeof opt_attribs === 'function') {
    opt_errorCallback = opt_attribs;
    opt_attribs = undefined;
  } else if (opt_attribs && !Array.isArray(opt_attribs)) {
    // If we have an errorCallback we can just return this object
    // Otherwise we need to construct one with default errorCallback
    if (opt_attribs.errorCallback) {
      return opt_attribs;
    }

    var opt = opt_attribs;
    opt_errorCallback = opt.errorCallback;
    opt_attribs = opt.attribLocations;
    transformFeedbackVaryings = opt.transformFeedbackVaryings;
    transformFeedbackMode = opt.transformFeedbackMode;
  }

  var options = {
    errorCallback: opt_errorCallback || error$1,
    transformFeedbackVaryings: transformFeedbackVaryings,
    transformFeedbackMode: transformFeedbackMode
  };

  if (opt_attribs) {
    var attribLocations = {};

    if (Array.isArray(opt_attribs)) {
      opt_attribs.forEach(function (attrib, ndx) {
        attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
      });
    } else {
      attribLocations = opt_attribs;
    }

    options.attribLocations = attribLocations;
  }

  return options;
}

var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

function getShaderTypeFromScriptType(gl, scriptType) {
  if (scriptType.indexOf("frag") >= 0) {
    return FRAGMENT_SHADER;
  } else if (scriptType.indexOf("vert") >= 0) {
    return VERTEX_SHADER;
  }

  return undefined;
}

function deleteShaders(gl, shaders) {
  shaders.forEach(function (shader) {
    gl.deleteShader(shader);
  });
}
/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program and calls useProgram.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var realShaders = [];
  var newShaders = [];

  for (var ndx = 0; ndx < shaders.length; ++ndx) {
    var shader = shaders[ndx];

    if (typeof shader === 'string') {
      var elem = getElementById(shader);
      var src = elem ? elem.text : shader;
      var type = gl[defaultShaderType[ndx]];

      if (elem && elem.type) {
        type = getShaderTypeFromScriptType(gl, elem.type) || type;
      }

      shader = loadShader(gl, src, type, progOptions.errorCallback);
      newShaders.push(shader);
    }

    if (isShader(gl, shader)) {
      realShaders.push(shader);
    }
  }

  if (realShaders.length !== shaders.length) {
    progOptions.errorCallback("not enough shaders for program");
    deleteShaders(gl, newShaders);
    return null;
  }

  var program = gl.createProgram();
  realShaders.forEach(function (shader) {
    gl.attachShader(program, shader);
  });

  if (progOptions.attribLocations) {
    Object.keys(progOptions.attribLocations).forEach(function (attrib) {
      gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
    });
  }

  var varyings = progOptions.transformFeedbackVaryings;

  if (varyings) {
    if (varyings.attribs) {
      varyings = varyings.attribs;
    }

    if (!Array.isArray(varyings)) {
      varyings = Object.keys(varyings);
    }

    gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
  }

  gl.linkProgram(program); // Check the link status

  var linked = gl.getProgramParameter(program, LINK_STATUS);

  if (!linked) {
    // something went wrong with the link
    var lastError = gl.getProgramInfoLog(program);
    progOptions.errorCallback("Error in program linking:" + lastError);
    gl.deleteProgram(program);
    deleteShaders(gl, newShaders);
    return null;
  }

  return program;
}
/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderSources.length; ++ii) {
    var shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 * @private
 */


function isBuiltIn(info) {
  var name = info.name;
  return name.startsWith("gl_") || name.startsWith("webgl_");
}
/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */


function createUniformSetters(gl, program) {
  var textureUnit = 0;
  /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */

  function createUniformSetter(program, uniformInfo, location) {
    var isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";
    var type = uniformInfo.type;
    var typeInfo = typeMap[type];

    if (!typeInfo) {
      throw new Error("unknown type: 0x".concat(type.toString(16))); // we should never get here.
    }

    var setter;

    if (typeInfo.bindPoint) {
      // it's a sampler
      var unit = textureUnit;
      textureUnit += uniformInfo.size;

      if (isArray) {
        setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
      } else {
        setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
      }
    } else {
      if (typeInfo.arraySetter && isArray) {
        setter = typeInfo.arraySetter(gl, location);
      } else {
        setter = typeInfo.setter(gl, location);
      }
    }

    setter.location = location;
    return setter;
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);

  for (var ii = 0; ii < numUniforms; ++ii) {
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      continue;
    }

    var name = uniformInfo.name; // remove the array suffix.

    if (name.substr(-3) === "[0]") {
      name = name.substr(0, name.length - 3);
    }

    var _location = gl.getUniformLocation(program, uniformInfo.name); // the uniform will have no location if it's in a uniform block


    if (_location) {
      uniformSetters[name] = createUniformSetter(program, uniformInfo, _location);
    }
  }

  return uniformSetters;
}
/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */

/**
 * Create TransformFeedbackInfo for passing to bindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */


function createTransformFeedbackInfo(gl, program) {
  var info = {};
  var numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);

  for (var ii = 0; ii < numVaryings; ++ii) {
    var varying = gl.getTransformFeedbackVarying(program, ii);
    info[varying.name] = {
      index: ii,
      type: varying.type,
      size: varying.size
    };
  }

  return info;
}
/**
 * @typedef {Object} UniformData
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */

/**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanatory
 * @property {bool} usedByFragmentShader Self explanatory
 * @property {bool} used Self explanatory
 * @memberOf module:twgl
 */

/**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */

/**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */


function createUniformBlockSpecFromProgram(gl, program) {
  var numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
  var uniformData = [];
  var uniformIndices = [];

  for (var ii = 0; ii < numUniforms; ++ii) {
    uniformIndices.push(ii);
    uniformData.push({});
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      break;
    } // REMOVE [0]?


    uniformData[ii].name = uniformInfo.name;
  }

  [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], // num elements
  ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (pair) {
    var pname = pair[0];
    var key = pair[1];
    gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function (value, ndx) {
      uniformData[ndx][key] = value;
    });
  });
  var blockSpecs = {};
  var numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);

  for (var _ii5 = 0; _ii5 < numUniformBlocks; ++_ii5) {
    var name = gl.getActiveUniformBlockName(program, _ii5);
    var blockSpec = {
      index: gl.getUniformBlockIndex(program, name),
      usedByVertexShader: gl.getActiveUniformBlockParameter(program, _ii5, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
      usedByFragmentShader: gl.getActiveUniformBlockParameter(program, _ii5, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
      size: gl.getActiveUniformBlockParameter(program, _ii5, UNIFORM_BLOCK_DATA_SIZE),
      uniformIndices: gl.getActiveUniformBlockParameter(program, _ii5, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
    };
    blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
    blockSpecs[name] = blockSpec;
  }

  return {
    blockSpecs: blockSpecs,
    uniformData: uniformData
  };
}
/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     var texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 * @memberOf module:twgl/programs
 */


function setUniforms(setters, values) {
  // eslint-disable-line
  var actualSetters = setters.uniformSetters || setters;
  var numArgs = arguments.length;

  for (var aNdx = 1; aNdx < numArgs; ++aNdx) {
    var _values = arguments[aNdx];

    if (Array.isArray(_values)) {
      var numValues = _values.length;

      for (var ii = 0; ii < numValues; ++ii) {
        setUniforms(actualSetters, _values[ii]);
      }
    } else {
      for (var name in _values) {
        var setter = actualSetters[name];

        if (setter) {
          setter(_values[name]);
        }
      }
    }
  }
}
/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */

function createAttributeSetters(gl, program) {
  var attribSetters = {};
  var numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);

  for (var ii = 0; ii < numAttribs; ++ii) {
    var attribInfo = gl.getActiveAttrib(program, ii);

    if (isBuiltIn(attribInfo)) {
      continue;
    }

    var index = gl.getAttribLocation(program, attribInfo.name);
    var typeInfo = attrTypeMap[attribInfo.type];
    var setter = typeInfo.setter(gl, index, typeInfo);
    setter.location = index;
    attribSetters[attribInfo.name] = setter;
  }

  return attribSetters;
}
/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 */


function setAttributes(setters, buffers) {
  for (var name in buffers) {
    var setter = setters[name];

    if (setter) {
      setter(buffers[name]);
    }
  }
}
/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivalent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgramInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */


function setBuffersAndAttributes(gl, programInfo, buffers) {
  if (buffers.vertexArrayObject) {
    gl.bindVertexArray(buffers.vertexArrayObject);
  } else {
    setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);

    if (buffers.indices) {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER$1, buffers.indices);
    }
  }
}
/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @property {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */

/**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */


function createProgramInfoFromProgram(gl, program) {
  var uniformSetters = createUniformSetters(gl, program);
  var attribSetters = createAttributeSetters(gl, program);
  var programInfo = {
    program: program,
    uniformSetters: uniformSetters,
    attribSetters: attribSetters
  };

  if (isWebGL2(gl)) {
    programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
    programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
  }

  return programInfo;
}
/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */


function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var good = true;
  shaderSources = shaderSources.map(function (source) {
    // Lets assume if there is no \n it's an id
    if (source.indexOf("\n") < 0) {
      var script = getElementById(source);

      if (!script) {
        progOptions.errorCallback("no element with id: " + source);
        good = false;
      } else {
        source = script.text;
      }
    }

    return source;
  });

  if (!good) {
    return null;
  }

  var program = createProgramFromSources(gl, shaderSources, progOptions);

  if (!program) {
    return null;
  }

  return createProgramInfoFromProgram(gl, program);
}
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var defaults$2 = {
  addExtensionsToContext: true
};

var prefixRE = /^(.*?)_/;

function addExtensionToContext(gl, extensionName) {
  glEnumToString(gl, 0);
  var ext = gl.getExtension(extensionName);

  if (ext) {
    var enums = {};
    var fnSuffix = prefixRE.exec(extensionName)[1];
    var enumSuffix = '_' + fnSuffix;

    for (var key in ext) {
      var value = ext[key];
      var isFunc = typeof value === 'function';
      var suffix = isFunc ? fnSuffix : enumSuffix;
      var name = key; // examples of where this is not true are WEBGL_compressed_texture_s3tc
      // and WEBGL_compressed_texture_pvrtc

      if (key.endsWith(suffix)) {
        name = key.substring(0, key.length - suffix.length);
      }

      if (gl[name] !== undefined) {
        if (!isFunc && gl[name] !== value) {
          warn(name, gl[name], value, key);
        }
      } else {
        if (isFunc) {
          gl[name] = function (origFn) {
            return function () {
              return origFn.apply(ext, arguments);
            };
          }(value);
        } else {
          gl[name] = value;
          enums[name] = value;
        }
      }
    } // pass the modified enums to glEnumToString


    enums.constructor = {
      name: ext.constructor.name
    };
    glEnumToString(enums, 0);
  }

  return ext;
}
/*
 * If you're wondering why the code doesn't just iterate
 * over all extensions using `gl.getExtensions` is that it's possible
 * some future extension is incompatible with this code. Rather than
 * have thing suddenly break it seems better to manually add to this
 * list.
 *
 */


var supportedExtensions = ['ANGLE_instanced_arrays', 'EXT_blend_minmax', 'EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2', 'EXT_frag_depth', 'EXT_sRGB', 'EXT_shader_texture_lod', 'EXT_texture_filter_anisotropic', 'OES_element_index_uint', 'OES_standard_derivatives', 'OES_texture_float', 'OES_texture_float_linear', 'OES_texture_half_float', 'OES_texture_half_float_linear', 'OES_vertex_array_object', 'WEBGL_color_buffer_float', 'WEBGL_compressed_texture_atc', 'WEBGL_compressed_texture_etc1', 'WEBGL_compressed_texture_pvrtc', 'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_depth_texture', 'WEBGL_draw_buffers'];
/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existence of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */

function addExtensionsToContext(gl) {
  for (var ii = 0; ii < supportedExtensions.length; ++ii) {
    addExtensionToContext(gl, supportedExtensions[ii]);
  }
}
/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 * @private
 */


function create3DContext(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults$2.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */


function getWebGLContext(canvas, opt_attribs) {
  var gl = create3DContext(canvas, opt_attribs);
  return gl;
}
/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */


function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  multiplier = Math.max(0, multiplier);
  var width = canvas.clientWidth * multiplier | 0;
  var height = canvas.clientHeight * multiplier | 0;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

var Renderer = /*#__PURE__*/function () {
  /**
   * @description Reference to the Webgl context
   * @memberof Renderer#
   * @member {WebglContext} gl
   */

  /**
   * @description is Context a webgl 2.0 context
   * @memberof Renderer#
   * @member {boolean} isWebGL2
   */

  /**
   * @description Creates a Renderer and initializes a webgl 1.0 context
   * @param {HTMLCanvasElement} htmlCanvas - Canvas to render to
   * @returns  {Renderer}
   */
  function Renderer(htmlCanvas) {
    var _this = this;

    _classCallCheck(this, Renderer);

    _defineProperty(this, "gl", null);

    _defineProperty(this, "isWebGL2", null);

    _defineProperty(this, "init", function () {
      var gl = _this.gl;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.CULL_FACE);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    });

    _defineProperty(this, "resize", function (width, height) {
      _this.gl.viewport(0, 0, width, height);
    });

    _defineProperty(this, "prepareRenderFrame", function () {
      _this.gl.clear(_this.gl.COLOR_BUFFER_BIT | _this.gl.DEPTH_BUFFER_BIT);
    });

    this.gl = getWebGLContext(htmlCanvas);
    this.isWebGL2 = isWebGL2(this.gl) && isWebGL1(this.gl);
    resizeCanvasToDisplaySize(htmlCanvas);
  }
  /**
   * @description Color to reset all pixels to on framestart
   * @memberof Renderer#
   * @member {array}  clearColor - [r,g,b,a] where [0,1]
   */


  _createClass(Renderer, [{
    key: "clearColor",
    set: function set(clearColor) {
      this.gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
    }
    /**
     * @description init Webgl context and settings
     * @method
     */

  }]);

  return Renderer;
}();

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create$1() {
  var out = new ARRAY_TYPE(9);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create$2() {
  var out = new ARRAY_TYPE(16);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity$1(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose$1(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply$2(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective$1(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt$1(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity$1(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create$3() {
  var out = new ARRAY_TYPE(3);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length$1(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add$1(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract$1(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale$1(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize$1(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross$1(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length$1;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create$3();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create$4() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize$2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$1 = function () {
  var vec = create$4();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create$5() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize$3 = normalize$2;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = create$3();
  var xUnitVec3 = fromValues(1, 0, 0);
  var yUnitVec3 = fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot$1 = dot(a, b);

    if (dot$1 < -0.999999) {
      cross$1(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001) cross$1(tmpvec3, yUnitVec3, a);
      normalize$1(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot$1 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross$1(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot$1;
      return normalize$3(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create$5();
  var temp2 = create$5();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = create$1();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize$3(out, fromMat3(out, matr));
  };
}();

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create$6() {
  var out = new ARRAY_TYPE(2);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$2 = function () {
  var vec = create$6();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/**
 * @class
 */

var Camera =
/**
 * @description Field Of View in Y
 * @memberof Camera#
 * @member {number} fov
 */

/**
 * @description Aspect Ratio of view
 * @memberof Camera#
 * @member {number} aspect
 */

/**
 * @description z-depth of near plane in viewing volume.
 * @memberof Camera#
 * @member {number} zNear
 */

/**
 * @description z-depth of far plane in viewing volume.
 * @memberof Camera#
 * @member {number} zFar
 */

/**
 * @description projection matrix
 * @memberof Camera#
 * @member {Array} projection
 */

/**
 * @description World coordinates of eye
 * @memberof Camera#
 * @member {Array} eye
 */

/**
 * @description World coordinates of what the eye is looking at
 * @memberof Camera#
 * @member target
 */

/**
 * @description Vector in world space pointing up
 * @memberof Camera#
 * @member {Array} up
 */

/**
 * @description View matrix (world -> cameraspace)
 * @memberof Camera#
 * @member {Array} view
 */

/**
 * @description ViewProjection matrix (world -> ndc)
 * @memberof Camera#
 * @member {Array} viewProjection
 */

/**
 * @description World matrix for any transformation applied to world
 * @memberof Camera#
 * @member {Array} world
 */

/**
 * @description Creates an instance of the base Camera
 * @param {number} width - width of canvas
 * @param {number} height - height of canvas
 * @returns {Camera}
 */
function Camera(_width, _height) {
  var _this = this;

  _classCallCheck(this, Camera);

  _defineProperty(this, "fov", void 0);

  _defineProperty(this, "aspect", void 0);

  _defineProperty(this, "zNear", void 0);

  _defineProperty(this, "zFar", void 0);

  _defineProperty(this, "projection", void 0);

  _defineProperty(this, "eye", void 0);

  _defineProperty(this, "target", void 0);

  _defineProperty(this, "up", void 0);

  _defineProperty(this, "view", void 0);

  _defineProperty(this, "viewProjection", void 0);

  _defineProperty(this, "world", void 0);

  _defineProperty(this, "resize", function (width, height) {
    _this.aspect = width / height;
    _this.projection = create$2();
    perspective$1(_this.projection, _this.fov, _this.aspect, _this.zNear, _this.zFar);
  });

  _defineProperty(this, "update", function (time) {
    lookAt$1(_this.view, _this.eye, _this.target, _this.up);
    invert(_this.camera, _this.view);
    multiply$2(_this.viewProjection, _this.projection, _this.view);
  });

  _defineProperty(this, "setPosition", function (pos) {
    _this.eye = pos;
  });

  _defineProperty(this, "getUniforms", function (time) {
    var uniforms = {};
    uniforms.u_viewInverse = _this.camera;
    uniforms.u_world = _this.world;
    uniforms.u_worldInverseTranspose = create$2();
    invert(uniforms.u_worldInverseTranspose, _this.world);
    transpose$1(uniforms.u_worldInverseTranspose, uniforms.u_worldInverseTranspose);
    uniforms.u_worldViewProjection = create$2();
    multiply$2(uniforms.u_worldViewProjection, _this.viewProjection, _this.world);
    uniforms.u_cameraPos = _this.eye;
    return uniforms;
  });

  _defineProperty(this, "getRayFromScreen", function (xNormalized, yNormalized) {
    var x = xNormalized * 2 - 1;
    var y = yNormalized * 2 - 1;

    var near = _this.unproject([x, y, -1]);

    var far = _this.unproject([x, y, 1]);

    var dir = create$3();
    subtract$1(dir, far, near);
    normalize$1(dir, dir);
    return {
      origin: near,
      direction: dir
    };
  });

  _defineProperty(this, "unproject", function (position) {
    var inverseProjection = create$2();
    invert(inverseProjection, _this.viewProjection);
    var result = fromValues(position[0], position[1], position[2]);
    transformMat4(result, result, inverseProjection);
    return result;
  });

  _defineProperty(this, "project", function (position) {
    var p = clone(position);
    transformMat4(p, p, _this.viewProjection);
    var x = (p[0] + 1) / 2;
    var y = (p[1] + 1) / 2;
    return [x, y];
  });

  this.fov = 30 * (Math.PI / 180);
  this.aspect = _width / _height;
  this.zNear = 0.01;
  this.zFar = 100;
  this.projection = create$2();
  perspective$1(this.projection, this.fov, this.aspect, this.zNear, this.zFar);
  this.eye = [0, 0, 6];
  this.target = [0, 0, 0];
  this.up = [0, 1, 0];
  this.view = create$2();
  lookAt$1(this.view, this.eye, this.target, this.up);
  this.camera = create$2();
  invert(this.camera, this.view);
  this.viewProjection = create$2();
  multiply$2(this.viewProjection, this.projection, this.view);
  this.world = create$2();
  identity$1(this.world);
}
/**
 * @description Resizes camera matrices
 * @method
 * @param {number} width - new width of canvas
 * @param {number} height - new height of canvas
 */
;

var Scene =
/**
 * @description Creates Scene object and creates camera
 * @param {number} width - width of scene
 * @param {number} height - height of scene
 */
function Scene(_width, _height) {
  var _this = this;

  _classCallCheck(this, Scene);

  _defineProperty(this, "resize", function (width, height) {
    _this.camera.resize(width, height);
  });

  _defineProperty(this, "update", function (time) {
    _this.camera.update(time);
  });

  _defineProperty(this, "getUniforms", function (time) {
    var uniforms = _this.camera.getUniforms(time);

    uniforms.time = time;
    return uniforms;
  });

  this.camera = new Camera(_width, _height);
}
/**
 * @description Resizes scene camera
 * @param {number} width - width of scene
 * @param {number} height - height of scene
 */
;

var ShaderMaterial = /*#__PURE__*/function () {
  /**
   * @description Information to send to gpu
   * @memberof ShaderMaterial#
   * @member {ProgramInfo} programInfo
   */

  /**
   * @description Object of WebglTextures
   * @memberof ShaderMaterial#
   * @member {Object} textures
   */

  /**
   * @description Uniforms used in shader
   * @memberof ShaderMaterial#
   * @member {Object} uniforms
   */

  /**
   * @description String representations of shaders {vertex: ~~, fragment: ~~}
   * @memberof ShaderMaterial#
   * @member {Object} shaderStrings
   */

  /**
   * @description Has the ShaderMaterial been initialized in Webgl context
   * @memberof ShaderMaterial#
   * @member {boolean} isInit
   */

  /**
   * @description Are the textures loaded onto the Webgl context
   * @memberof ShaderMaterial#
   * @member {boolean} texturesLoaded
   */

  /**
   * @description Creates a ShaderMaterial object
   * @param {Object} shaderStrings - String representations of shaders {vertex: ~~, fragment: ~~}
   * @returns {ShaderMaterial}
   */
  function ShaderMaterial(shaderStrings) {
    var _this = this;

    _classCallCheck(this, ShaderMaterial);

    _defineProperty(this, "programInfo", null);

    _defineProperty(this, "textures", {});

    _defineProperty(this, "uniforms", null);

    _defineProperty(this, "shaderStrings", null);

    _defineProperty(this, "isInit", false);

    _defineProperty(this, "texturesLoaded", false);

    _defineProperty(this, "init", function (gl) {
      _this.programInfo = createProgramInfo(gl, Object.values(_this.shaderStrings));
      _this.isInit = true;
    });

    _defineProperty(this, "loadTextures", function (gl, textures, onLoadCB) {
      if (textures) {
        var textureCount = Object.keys(textures).length;
        var texturesLoaded = 0;
        Object.entries(textures).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              texture = _ref2[1];

          _this.textures[key] = createTexture(gl, texture, function () {
            texturesLoaded += 1;

            if (texturesLoaded === textureCount) {
              _this.texturesLoaded = true;

              if (onLoadCB) {
                onLoadCB();
              }
            }
          });
        });
      }
    });

    _defineProperty(this, "updateUniforms", function (uniforms) {
      Object.entries(uniforms).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        _this.uniforms[key] = value;
      });
    });

    this.shaderStrings = shaderStrings;
  }
  /**
   * @description Gets isReady status
   * @memberof ShaderMaterial#
   * @member {boolean} isReady
   */


  _createClass(ShaderMaterial, [{
    key: "isReady",
    get: function get() {
      return this.isInit && this.texturesLoaded;
    }
    /**
     * @description Initialize webgl program
     * @method
     * @param {WebglContext} gl - Webgl context
     */

  }]);

  return ShaderMaterial;
}();

/* tslint:disable */

/* eslint-disable */
let wasm;
const heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

let WASM_VECTOR_LEN = 0;
let cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }

  return cachegetUint8Memory0;
}

let cachedTextEncoder = new TextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length);
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

let cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }

  return cachegetInt32Memory0;
}

let heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
/**
*/

function init_gkweb() {
  wasm.init_gkweb();
}
let cachegetFloat32Memory0 = null;

function getFloat32Memory0() {
  if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== wasm.memory.buffer) {
    cachegetFloat32Memory0 = new Float32Array(wasm.memory.buffer);
  }

  return cachegetFloat32Memory0;
}

function passArrayF32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getFloat32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}

let cachegetUint32Memory0 = null;

function getUint32Memory0() {
  if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }

  return cachegetUint32Memory0;
}

function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
/**
*/


class GKCollider {
  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_gkcollider_free(ptr);
  }
  /**
  * @param {Float32Array} points
  * @param {Float32Array} uvs
  * @param {Int32Array} indices
  * @returns {GKCollisionGeo}
  */


  static create_collision_geometry(points, uvs, indices) {
    var ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(uvs, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    var len2 = WASM_VECTOR_LEN;
    var ret = wasm.gkcollider_create_collision_geometry(ptr0, len0, ptr1, len1, ptr2, len2);
    return GKCollisionGeo.__wrap(ret);
  }

}
/**
*/

class GKCollision {
  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_gkcollision_free(ptr);
  }

}
/**
*/

class GKCollisionGeo {
  static __wrap(ptr) {
    const obj = Object.create(GKCollisionGeo.prototype);
    obj.ptr = ptr;
    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_gkcollisiongeo_free(ptr);
  }
  /**
  * @param {Float32Array} origin
  * @param {Float32Array} direction
  * @returns {any}
  */


  raycast(origin, direction) {
    var ptr0 = passArrayF32ToWasm0(origin, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(direction, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.gkcollisiongeo_raycast(this.ptr, ptr0, len0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {Float32Array} origin
  * @param {Float32Array} direction
  * @returns {boolean}
  */


  hitTest(origin, direction) {
    var ptr0 = passArrayF32ToWasm0(origin, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(direction, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.gkcollisiongeo_hitTest(this.ptr, ptr0, len0, ptr1, len1);
    return ret !== 0;
  }

}

async function load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get('Content-Type') != 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }

    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);

    if (instance instanceof WebAssembly.Instance) {
      return {
        instance,
        module
      };
    } else {
      return instance;
    }
  }
}

async function init(input) {
  if (typeof input === 'undefined') {
    console.log('You must specify wasm location');
  }

  const imports = {};
  imports.wbg = {};

  imports.wbg.__wbindgen_json_serialize = function (arg0, arg1) {
    const obj = getObject(arg1);
    var ret = JSON.stringify(obj === undefined ? null : obj);
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  };

  imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
    takeObject(arg0);
  };

  imports.wbg.__wbindgen_json_parse = function (arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };

  imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };

  imports.wbg.__wbg_new_59cb74e423758ede = function () {
    var ret = new Error();
    return addHeapObject(ret);
  };

  imports.wbg.__wbg_stack_558ba5917b466edd = function (arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  };

  imports.wbg.__wbg_error_4bb6c2a97407129a = function (arg0, arg1) {
    try {
      console.error(getStringFromWasm0(arg0, arg1));
    } finally {
      wasm.__wbindgen_free(arg0, arg1);
    }
  };

  imports.wbg.__wbg_debug_7020dcb48edf105b = function (arg0) {
    console.debug(getObject(arg0));
  };

  imports.wbg.__wbg_error_b23efba5bfb5cec5 = function (arg0) {
    console.error(getObject(arg0));
  };

  imports.wbg.__wbg_info_8ce99578d0b91a35 = function (arg0) {
    console.info(getObject(arg0));
  };

  imports.wbg.__wbg_log_c180b836187d3c94 = function (arg0) {
    console.log(getObject(arg0));
  };

  imports.wbg.__wbg_warn_942f927afebcc748 = function (arg0) {
    console.warn(getObject(arg0));
  };

  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };

  if (typeof input === 'string' || typeof Request === 'function' && input instanceof Request || typeof URL === 'function' && input instanceof URL) {
    input = fetch(input);
  }

  const {
    instance,
    module
  } = await load(await input, imports);
  wasm = instance.exports;
  init.__wbindgen_wasm_module = module;
  return wasm;
}

var Drawable = /*#__PURE__*/function () {
  /**
   * @description Unique identification string
   * @memberof Drawable#
   * @member {String} id
   */

  /**
   * @description Geometry
   * @see Geometry
   * @memberof Drawable#
   * @member {Geometry} geometry
   */

  /**
   * @description Geometry that is used for collision detection & raycasting
   * @see GKCollisionGeo
   * @memberof Drawable#
   * @member {GKCollisionGeo} collisionGeometry
   */

  /**
   * @description ShaderMaterial
   * @see ShaderMaterial
   * @memberof Drawable#
   * @member {ShaderMaterial} material
   */

  /**
   * @description Translation of the drawable [x,y,z]
   * @private
   * @memberof Drawable#
   * @member {Array} _translation
   */

  /**
   * @description Rotation of the drawable in radians [x, y, z]
   * @private
   * @memberof Drawable#
   * @member {Array} _rotation
   */

  /**
   * @description Scale of drawable [x, y, z]
   * @private
   * @memberof Drawable#
   * @member {Array} _scale
   */

  /**
   * @description Transform matrix of translation, rotation, scale
   * @private
   * @memberof Drawable#
   * @member {Array} _modelMatrix
   */

  /**
   * @description Does the modelMatrix need to be recalculated
   * @private
   * @memberof Drawable#
   * @member {Array} _modelIsDirty
   */

  /**
   * @description Is drawable able to be rayCast to?
   * @memberof Drawable#
   * @member {boolean} rayCast
   */

  /**
   * @description Is drawable able to be interacted with?
   * @memberof Drawable#
   * @member {boolean} isInteractive
   */

  /**
   * @description Is drawable able to be selected?
   * @memberof Drawable#
   * @member {boolean} isSelectable
   */

  /**
   * @description Is drawable able to be hovered?
   * @memberof Drawable#
   * @member {boolean} isHoverable
   */

  /**
   * @description Creates a drawable and initializes id
   * @returns {Drawable}
   */
  function Drawable() {
    var _this = this;

    _classCallCheck(this, Drawable);

    _defineProperty(this, "id", null);

    _defineProperty(this, "geometry", null);

    _defineProperty(this, "collisionGeometry", null);

    _defineProperty(this, "material", null);

    _defineProperty(this, "_translation", [0.0, 0.0, 0.0]);

    _defineProperty(this, "_rotation", [0.0, 0.0, 0.0]);

    _defineProperty(this, "_scale", [1.0, 1.0, 1.0]);

    _defineProperty(this, "_modelMatrix", null);

    _defineProperty(this, "_modelIsDirty", true);

    _defineProperty(this, "rayCast", true);

    _defineProperty(this, "isInteractive", false);

    _defineProperty(this, "isSelectable", false);

    _defineProperty(this, "isHoverable", false);

    _defineProperty(this, "shouldDraw", true);

    _defineProperty(this, "setInteractive", function (interactive, selectable, hoverable) {
      _this.isInteractive = typeof interactive === 'boolean' ? interactive : false;
      _this.isSelectable = typeof selectable === 'boolean' ? selectable : false;
      _this.isHoverable = typeof hoverable === 'boolean' ? hoverable : false;
    });

    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.id = '_' + Math.random().toString(36).substr(2, 9);
  }
  /**
   * @description Gets isReady status
   * @memberof Drawable#
   * @member {boolean} isReady:
   */


  _createClass(Drawable, [{
    key: "update",

    /**
     * @description Update shader material uniforms
     * @method
     * @param {Object} sceneProps - object of scene props as uniforms
     */
    value: function update(sceneProps) {
      var _this2 = this;

      if (sceneProps) {
        Object.entries(sceneProps).forEach(function (el) {
          _this2.material.uniforms[el[0]] = el[1];
        });
      }
    }
  }, {
    key: "isReady",
    get: function get() {
      if (this.geometry && this.material) {
        return this.geometry.isReady && this.material.isReady;
      }

      return false;
    }
    /**
     * @description [x,y,z] vector of translation
     * @memberof Drawable#
     * @member {Array} translation
     */

  }, {
    key: "translation",
    get: function get() {
      return this._translation;
    }
    /**
     * @description Translation setter
     * @private
     */
    ,
    set: function set(newTranslation) {
      this._translation = newTranslation;
      this._modelIsDirty = true;
    }
    /**
     * @description Rotation vector [x,y,z]
     * @memberof Drawable#
     * @member {Array} rotation
     */

  }, {
    key: "rotation",
    get: function get() {
      return this._rotation;
    }
    /**
     * @description Rotation setter
     * @private
     */
    ,
    set: function set(newRotation) {
      this._rotation = newRotation;
      this._modelIsDirty = true;
    }
    /**
     * @description Scale vector [x,y,z]
     * @memberof Drawable#
     * @member {Array}
     */

  }, {
    key: "scale",
    get: function get() {
      return this._scale;
    }
    /**
     * @description Scale setter
     * @private
     */
    ,
    set: function set(newScale) {
      this._scale = newScale;
      this._modelIsDirty = true;
    }
    /**
     * @description Sets interativity of the drawable
     * @method
     * @param {boolean} interactive - set interactive
     * @param {boolean} selectable - set selection
     * @param {boolean} hoverable - set hoverable
     */

  }, {
    key: "modelMatrix",

    /**
     * @description Get modelmatrix, recalculating if needed
     * @memberof Drawable#
     * @member {Array}
     */
    get: function get() {
      if (this._modelIsDirty) {
        var mat0 = m4.identity();
        var translationMatrix = m4.translation(this._translation, mat0);
        var scaleMatrix = m4.scaling(this._scale);
        this._modelMatrix = translationMatrix;
        m4.rotateX(translationMatrix, this._rotation[0], this._modelMatrix);
        m4.rotateY(translationMatrix, this._rotation[1], this._modelMatrix);
        m4.rotateZ(translationMatrix, this._rotation[2], this._modelMatrix);
        m4.multiply(this._modelMatrix, scaleMatrix, this._modelMatrix);
        this._modelIsDirty = false;
      }

      return this._modelMatrix;
    }
  }]);

  return Drawable;
}();

var Globe = /*#__PURE__*/function (_Drawable) {
  _inherits(Globe, _Drawable);

  var _super = _createSuper(Globe);

  function Globe() {
    _classCallCheck(this, Globe);

    return _super.apply(this, arguments);
  }

  return Globe;
}(Drawable);

var side = 128;

var Geometry = /*#__PURE__*/function () {
  /**
   * @description Init status of geometry
   * @memberof Geometry#
   * @member {boolean} isInit
   */

  /**
   * @description Is this geometry in sync with its webgl context buffers
   * @memberof Geometry#
   * @member {boolean} isDirty
   */

  /**
   * @description Webgl Buffer description
   * @memberof Geometry#
   * @member {BufferInfo} bufferInfo
   */

  /**
   * @description Javascript description of vertex buffers
   * @memberof Geometry#
   * @member {Object} vertices
   */

  /**
   * @description Creates a Geometry
   * @param {String} type
   */
  function Geometry(type) {
    var _this = this;

    _classCallCheck(this, Geometry);

    _defineProperty(this, "isInit", false);

    _defineProperty(this, "isDirty", false);

    _defineProperty(this, "needsResize", false);

    _defineProperty(this, "newGeometry", []);

    _defineProperty(this, "bufferInfo", void 0);

    _defineProperty(this, "vertices", void 0);

    _defineProperty(this, "init", function (gl) {
      // Check for empty vertices object
      if (Object.keys(_this.vertices).length === 0 && _this.vertices.constructor === Object) return;
      _this.bufferInfo = createBufferInfoFromArrays(gl, _this.vertices);
      _this.isInit = true;
      _this.isDirty = false;
    });

    _defineProperty(this, "resizeVertices", function (length) {});

    _defineProperty(this, "updateGeometry", function (newGeo, start, end) {
      if (start === undefined || typeof start !== 'number') start = 0;
      console.log("Update geo", newGeo);
      Object.keys(newGeo).forEach(function (key) {
        var _this$vertices$key$da;

        (_this$vertices$key$da = _this.vertices[key].data).splice.apply(_this$vertices$key$da, [start, newGeo[key].data.length].concat(_toConsumableArray(newGeo[key].data)));
      });
      _this.isDirty = true;
    });

    _defineProperty(this, "updateBuffers", function (gl) {
      Object.keys(_this.bufferInfo.attribs).forEach(function (attr) {
        setAttribInfoBufferFromArray(gl, _this.bufferInfo.attribs[attr], _this.vertices[attr]);
      });
      _this.isDirty = false;
    });

    _defineProperty(this, "reloadBuffers", function (gl) {
      _this.deleteBuffers(gl);

      _this.bufferInfo = createBufferInfoFromArrays(gl, _this.vertices);
      _this.isDirty = false;
      _this.needsResize = false;
    });

    _defineProperty(this, "deleteBuffers", function (gl) {
      Object.keys(_this.bufferInfo.attribs).forEach(function (attr) {
        gl.deleteBuffer(attr.buffer);
      });
      gl.deleteBuffer(_this.bufferInfo.indices);
      _this.bufferInfo = {};
    });

    if (type === 'sphere') {
      this.vertices = primitives.createSphereVertices(1, side, side);
    } else {
      this.vertices = {};
    }
  }
  /**
   * @description Sends vertices to gpu and generates bufferInfo
   * @param {WebglContext} gl
   */


  _createClass(Geometry, [{
    key: "isReady",

    /**
     * @description Status of geometry
     * @memberof Geometry#
     * @member {boolean} isReady
     */
    get: function get() {
      return this.isInit;
    }
  }]);

  return Geometry;
}();

/**
 * @class
 */

var GKUtils = /*#__PURE__*/function () {
  function GKUtils() {
    _classCallCheck(this, GKUtils);
  }

  _createClass(GKUtils, null, [{
    key: "radiansForPosition",

    /**
     * @description Compute axis angles for positon
     * @static
     * @param {number} x - x position
     * @param {number} z - z position
     * @returns {number}
     */
    value: function radiansForPosition(x, z) {
      if (z > 0) {
        if (x >= 0) {
          return Math.atan(x / z);
        }

        return 2 * Math.PI + Math.atan(x / z);
      }

      if (z < 0) {
        return Math.PI + Math.atan(x / z);
      }

      if (x > 0) {
        return Math.PI / 2.0;
      }

      return 3 * Math.PI / 2.0;
    }
    /**
     * @description Convert worldspace [x,y,z] to lat lon
     * @static
     * @param {Array} pos - worldspace coordinates [x,y,z]
     * @returns {Object}
     */

  }, {
    key: "latLonFromWorld",
    value: function latLonFromWorld(pos) {
      var normal = create$3();
      normalize$1(normal, pos);
      var latRad = Math.asin(normal[1]);
      var lonRad = this.radiansForPosition(normal[0], normal[2]);
      var latDeg = latRad * 180.0 / Math.PI;
      var lonDeg = lonRad * 180.0 / Math.PI;

      while (lonDeg > 180.0) {
        lonDeg -= 360.0;
      }

      return {
        lat: latDeg,
        lon: lonDeg
      };
    }
    /**
     * @description Computes great circle distance between 2 lat lon coords
     * @static
     * @param {Object} p0 - {lat: ~~, lon: ~~}
     * @param {Object} p1 - {lat: ~~, lon: ~~}
     * @returns
     */

  }, {
    key: "distanceBetweenPoints",
    value: function distanceBetweenPoints(p0, p1) {
      var degreesToRadians = function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
      };

      var R = 6371; // km

      var phi1 = degreesToRadians(p0.lat); // phi, lambda in radians

      var phi2 = degreesToRadians(p1.lat);
      var deltaPhi = degreesToRadians(p1.lat - p0.lat);
      var deltaLambda = degreesToRadians(p1.lon - p0.lon);
      var a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // in km

      return d;
    }
    /**
     * @description Convert lat lon alt to worldspace
     * @static
     * @param {number} lat - latitude in degrees
     * @param {number} lon - longitude in degrees
     * @param {number} alt - altitude from surface of globe in earth radius (surface = 0)
     * @returns {Array}
     */

  }, {
    key: "worldFromLatLon",
    value: function worldFromLatLon(lat, lon, alt) {
      var altitude = alt || 0.0;
      var latRad = lat * Math.PI / 180.0;
      var lngRad = lon * Math.PI / 180.0;
      var radius = Math.cos(latRad);
      var y = Math.sin(latRad);
      var x = Math.sin(lngRad) * radius;
      var z = Math.cos(lngRad) * radius;
      var pos = fromValues(x, y, z);
      var norm = create$3();
      normalize$1(norm, pos);
      var add = scale$1(norm, norm, altitude);
      add$1(pos, pos, add);
      return pos;
    }
    /**
     * @description Convert hex color to RGB array
     * @param {String} h - Color Hex Code
     * @param {boolean} normalize - Should the output be normalized to [0,1]
     * @returns {Array}
     */

  }, {
    key: "hexToRGB",
    value: function hexToRGB(h, normalize) {
      var r = 0;
      var g = 0;
      var b = 0;
      var norm = normalize !== false;

      if (h.length === 4) {
        r = "0x".concat(h[1]).concat(h[1]);
        g = "0x".concat(h[2]).concat(h[2]);
        b = "0x".concat(h[3]).concat(h[3]);
      } else if (h.length === 7) {
        r = "0x".concat(h[1]).concat(h[2]);
        g = "0x".concat(h[3]).concat(h[4]);
        b = "0x".concat(h[5]).concat(h[6]);
      }

      if (norm) {
        r /= 255;
        g /= 255;
        b /= 255;
      } else {
        r = parseInt(r, 16);
        g = parseInt(g, 16);
        b = parseInt(b, 16);
      }

      return [r, g, b];
    }
    /**
     * @description Convert hex + alpha to RGBA
     * @param {String} h - Color hex code
     * @param {number} a - Alpha value [0,1]
     * @param {boolean} normalize - Should the output be normalized to [0,1]
     * @returns {Array}
     */

  }, {
    key: "hexToRGBA",
    value: function hexToRGBA(h, a, normalize) {
      var rgb = this.hexToRGB(h, normalize);
      var alpha = normalize !== false ? a : a * 255;
      return [rgb[0], rgb[1], rgb[2], alpha];
    }
  }, {
    key: "isSubSet",
    value: function isSubSet(a, b) {
      return a.every(function (el) {
        return b.find(function (e) {
          return e === el;
        }) !== undefined;
      });
    }
    /**
    * A linear interpolator for hexadecimal colors
    * @param {String} a
    * @param {String} b
    * @param {Number} amount
    * @example
    * // returns #7F7F7F
    * lerpColor('#000000', '#ffffff', 0.5)
    * @returns {String}
    */

  }, {
    key: "lerpColor",
    value: function lerpColor(a, b, amount) {
      var ah = parseInt(a.replace(/#/g, ''), 16);
      var ar = ah >> 16;
      var ag = ah >> 8 & 0xff;
      var ab = ah & 0xff;
      var bh = parseInt(b.replace(/#/g, ''), 16);
      var br = bh >> 16;
      var bg = bh >> 8 & 0xff;
      var bb = bh & 0xff;
      var rr = ar + amount * (br - ar);
      var rg = ag + amount * (bg - ag);
      var rb = ab + amount * (bb - ab);
      return "#".concat(((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1));
    }
  }]);

  return GKUtils;
}();

var vert = "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vAlpha=1.0-dot(normalize(u_cameraPos),normalize(normal.xyz));vTexture=texcoord;gl_Position=pos;}"; // eslint-disable-line

var frag = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;varying float vAlpha;varying vec2 vTexture;void main(){vec4 textureColor=texture2D(uTexture,vec2(vTexture.x-0.25,vTexture.y));float nDot=(vAlpha+1.0)/2.0;float roundness=smoothstep(0.0,1.0,nDot);float edge=smoothstep(0.5,0.6,nDot);gl_FragColor=textureColor;}"; // eslint-disable-line

var shaders = {
  vertex: vert,
  fragment: frag
};
var uniforms = {
  u_lightWorldPos: [1, 3, -8],
  u_lightColor: [1, 0.8, 0.8, 1],
  u_ambient: [1.0, 1.0, 1.0, 1],
  u_specular: [1, 1, 1, 1],
  u_shininess: 100,
  u_specularFactor: 0.1,
  uModelMatrix: [],
  uCameraMatrix: [],
  uPerspectiveMatrix: [],
  uCameraPos: [0, 0, 0]
};

var Icosphere = /*#__PURE__*/function (_Globe) {
  _inherits(Icosphere, _Globe);

  var _super = _createSuper(Icosphere);

  function Icosphere(textureSrc) {
    var _thisSuper, _this;

    _classCallCheck(this, Icosphere);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "material", null);

    _defineProperty(_assertThisInitialized(_this), "init", function (gl) {
      _this.geometry = new Geometry('sphere');

      _this.geometry.init(gl);

      var texturesConfig = {
        surface: {
          src: _this.textureSrc.surface,
          minMag: gl.LINEAR
        }
      };

      _this.material.init(gl);

      _this.material.loadTextures(gl, texturesConfig, function () {
        _this.material.uniforms.u_diffuse = _this.material.textures.surface;
      });

      _this.material.uniforms.uModelMatrix = _this.modelMatrix;
    });

    _defineProperty(_assertThisInitialized(_this), "createCollisionGeo", function () {
      if (_this.collisionGeometry && _this.collisionGeometry instanceof GKCollision) return;
      _this.collisionGeometry = GKCollider.create_collision_geometry(_this.geometry.vertices.position, _this.geometry.vertices.texcoord, _this.geometry.vertices.indices);
    });

    _defineProperty(_assertThisInitialized(_this), "rayCastFrom", function (ray) {
      return _this.collisionGeometry.raycast(ray.origin, ray.direction);
    });

    _defineProperty(_assertThisInitialized(_this), "hitTest", function (ray) {
      return _this.collisionGeometry.hitTest(ray.origin, ray.direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelection", function (lat, lon, selection) {
      // convert worldPos to lat lon
      console.log('Icosphere.onSelection', GKUtils.latLonFromWorld(selection.point));
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (sceneProps, time) {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Icosphere.prototype)), "update", _thisSuper).call(_thisSuper, sceneProps, time);

      _this.material.uniforms.u_model = _this.modelMatrix;
    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (gl) {
      if (!_this.isReady) return;
      gl.useProgram(_this.material.programInfo.program);
      setBuffersAndAttributes(gl, _this.material.programInfo, _this.geometry.bufferInfo);
      setUniforms(_this.material.programInfo, _this.material.uniforms);
      gl.drawElements(gl.TRIANGLES, _this.geometry.bufferInfo.numElements, gl.UNSIGNED_SHORT, 0);
    });

    _this.material = new ShaderMaterial(shaders);
    _this.material.uniforms = uniforms;
    _this.textureSrc = {
      surface: textureSrc
    };
    return _this;
  }

  return Icosphere;
}(Globe);

var ImageLookup = function ImageLookup(src, onInitCB) {
  var _this = this;

  _classCallCheck(this, ImageLookup);

  _defineProperty(this, "isLoaded", false);

  _defineProperty(this, "ctx", undefined);

  _defineProperty(this, "canvas", undefined);

  _defineProperty(this, "image", undefined);

  _defineProperty(this, "getIdFromLatLon", function (lat, lon) {
    if (!_this.isLoaded) return undefined; // Convert lat lon to normalized coords

    var nX = (lon / 180.0 + 1.0) / 2.0;
    var nY = 1.0 - (lat / 90.0 + 1.0) / 2.0; // Convert normalized coords to pixels

    var x = nX * _this.canvas.width;
    var y = nY * _this.canvas.height;
    return _this.ctx.getImageData(x, y, 1, 1).data[0];
  });

  this.image = new Image();
  this.image.src = src;
  this.image.addEventListener('load', function () {
    _this.canvas = document.createElement('canvas');
    _this.canvas.width = _this.image.width;
    _this.canvas.height = _this.image.height;
    _this.ctx = _this.canvas.getContext('2d');

    _this.ctx.drawImage(_this.image, 0, 0);

    _this.isLoaded = true;
    onInitCB();
  });
};

var Lookup = function Lookup(data, image) {
  var _this = this;

  _classCallCheck(this, Lookup);

  _defineProperty(this, "isInit", false);

  _defineProperty(this, "useImageLookup", false);

  _defineProperty(this, "imageLookup", null);

  _defineProperty(this, "getIdFromLatLon", function (lat, lon) {
    return _this.imageLookup.getIdFromLatLon(lat, lon);
  });

  _defineProperty(this, "getFromId", function (id) {
    return _this.data.find(function (obj) {
      return obj.id === id;
    });
  });

  _defineProperty(this, "getFromCode", function (code) {
    return _this.data.find(function (obj) {
      return obj.code === code;
    });
  });

  _defineProperty(this, "getFromName", function (name) {
    return _this.data.find(function (obj) {
      return obj.name === name;
    });
  });

  // Check that data is "valid"
  if (!(data instanceof Array)) return undefined;
  this.data = data;

  if (image) {
    this.useImageLookup = true;
    this.imageLookup = new ImageLookup(image, function () {
      _this.isInit = true;
    });
  }
};

// TODO: DOcument this
//TODO: refactor into ES6 class
var Tween = /*#__PURE__*/function () {
  function Tween(from, to, time, props) {
    var _this = this;

    _classCallCheck(this, Tween);

    _defineProperty(this, "time", void 0);

    _defineProperty(this, "delay", 0);

    _defineProperty(this, "ease", function (p) {
      return p;
    });

    _defineProperty(this, "onComplete", function (finished) {});

    _defineProperty(this, "onUpdate", function (value) {});

    _defineProperty(this, "endAt", void 0);

    _defineProperty(this, "isNumeric", false);

    _defineProperty(this, "toObj", null);

    _defineProperty(this, "fromObj", null);

    _defineProperty(this, "currentObj", null);

    _defineProperty(this, "mechanism", function () {
      if (!_this.isRunning) return;
      if (_this.stopped) return false;
      var timeLeft = _this.endAt - new Date().getTime();

      if (timeLeft <= 0) {
        clearTimeout(_this.playTimeout);
        _this.stopped = true;

        _this.advanceFrame(1, 1);

        if (_this.isNumeric) {
          _this.onUpdate(_this.currentObj.value);
        } else {
          _this.onUpdate(_this.currentObj);
        }

        _this.onComplete(true);

        _this.cleanup();
      } else {
        _this.advanceFrame(_this.time - timeLeft, _this.time);

        if (_this.isNumeric) {
          _this.onUpdate(_this.currentObj.value);
        } else {
          _this.onUpdate(_this.currentObj);
        }
      }
    });

    props = props || {};
    this.time = time;
    this.endAt = new Date().getTime() + this.time;
    this.isNumeric = !isNaN(from);

    if (this.isNumeric) {
      this.toObj = {
        value: to
      };
      this.fromObj = {
        value: from
      };
    } else {
      this.toObj = _objectSpread2({}, to);
      this.fromObj = _objectSpread2({}, from);
    }

    this.currentObj = _objectSpread2({}, this.fromObj);
    this.id = Tween.getId();
    Tween.tweens[this.id] = this;

    if (props.onComplete) {
      this.onComplete = props.onComplete;
      delete props.onComplete;
    }

    if (props.onUpdate) {
      this.onUpdate = props.onUpdate;
      delete props.onUpdate;
    }

    if (props.ease) {
      this.ease = props.ease;
      delete props.ease;
    }

    if (props.delay) {
      this.endAt += props.delay;
      this.delay = props.delay;
      delete props.delay;
    }

    this.playTimeout = setTimeout(function () {
      _this.play();
    }, this.delay);
  }

  _createClass(Tween, [{
    key: "play",
    value: function play() {
      this.endAt = new Date().getTime() + this.time;
      this.isRunning = true;

      if (!Tween.isRunning) {
        Tween.isRunning = true;
        requestAnimationFrame(Tween.mechanism);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(this.playTimeout);
      this.stopped = true;
      this.onComplete(false);
      this.cleanup();
    }
  }, {
    key: "currentValue",
    value: function currentValue() {
      if (this.isNumeric) {
        return this.currentObj.value;
      }

      return this.currentObj;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.isRunning = false;
      delete Tween.tweens[this.id];

      if (Object.keys(Tween.tweens).length === 0) {
        Tween.isRunning = false;
      }
    }
  }, {
    key: "advanceFrame",
    value: function advanceFrame(frame, frames) {
      var t = frames !== 0 ? frame / frames : 1;
      t = this.ease(t);

      for (var prop in this.toObj) {
        var b = this.fromObj[prop];
        var e = this.toObj[prop];
        var m = e - b;
        this.currentObj[prop] = b + m * t;
      }
    }
  }]);

  return Tween;
}();

Tween.id = 0;
Tween.tweens = {};

Tween.killTweensOf = function (obj) {
  for (var x in Tween.tweens) {
    var t = Tween.tweens[x];
    if (t.obj === obj) t.stop();
  }
};

Tween.getId = function () {
  return ++Tween.id;
};

Tween.isRunning = false;

Tween.mechanism = function () {
  for (var key in Tween.tweens) {
    Tween.tweens[key].mechanism();
  }

  if (Tween.isRunning) {
    requestAnimationFrame(Tween.mechanism);
  }
};

var DataTexture = function DataTexture(width, height) {
  var _this = this;

  _classCallCheck(this, DataTexture);

  _defineProperty(this, "width", 4);

  _defineProperty(this, "height", 4);

  _defineProperty(this, "channels", 4);

  _defineProperty(this, "elementLength", 1);

  _defineProperty(this, "data", void 0);

  _defineProperty(this, "texture", void 0);

  _defineProperty(this, "isInit", false);

  _defineProperty(this, "init", function (gl) {
    var textureSettings = {
      width: _this.width,
      height: _this.height,
      mag: gl.NEAREST,
      min: gl.NEAREST,
      src: _this.data
    };
    _this.texture = createTexture(gl, textureSettings);
    _this.isInit = true;
  });

  _defineProperty(this, "updatePixel", function (gl, c, row, column) {
    if (!_this.isInit) return;
    var color = new Uint8Array(c);
    gl.bindTexture(gl.TEXTURE_2D, _this.texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, column, row, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, color);
  });

  _defineProperty(this, "updatePixelId", function (gl, c, id) {
    //Convert id to row column
    var row = Math.floor(id / _this.width);
    var col = id - row * _this.width;

    _this.updatePixel(gl, c, row, col);
  });

  _defineProperty(this, "updateSubrect", function (gl, c) {
    if (!_this.isInit) return;
    gl.bindTexture(gl.TEXTURE_2D, _this.texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, _this.width, _this.height, gl.RGBA, gl.UNSIGNED_BYTE, c);
  });

  this.width = width || this.width;
  this.height = height || this.height;
  this.data = new Uint8Array(this.width * this.height * this.channels).fill(0);
};

var vert$1 = "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying float vAlpha;varying vec2 vTexture;void main(){vec4 pos=u_worldViewProjection*u_model*position;vAlpha=dot(normalize(u_cameraPos),normalize(position.xyz));vTexture=texcoord;gl_Position=pos;}"; // eslint-disable-line

var frag$1 = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_inactive;uniform sampler2D u_active;uniform sampler2D u_id;uniform sampler2D u_data;uniform float u_idAnimateIn;uniform float u_idAnimateOut;uniform float u_animateIn;uniform float u_animateOut;uniform vec3 u_animateHover;uniform vec3 u_animatable0;uniform vec3 u_animatable1;uniform vec3 u_animatable2;uniform vec3 u_animatable3;uniform vec3 u_animatable4;uniform vec3 u_animatable5;varying float vAlpha;varying vec2 vTexture;float when_eq(float x,float y){return 1.0-abs(sign(x-y));}float when_lt(float x,float y){return max(sign(y-x),0.0);}vec2 get_data_coords_from_id(float id){float width=16.0;float height=16.0;float w_pixel=1.0/width;float h_pixel=1.0/height;float row=floor(id/width);float col=id-(row*width);return vec2(col*w_pixel,row*h_pixel);}void main(){vec4 inactiveColor=texture2D(u_inactive,vec2(vTexture.x-0.25,vTexture.y));vec4 activeColor=texture2D(u_active,vec2(vTexture.x-0.25,vTexture.y));vec4 idColor=texture2D(u_id,vec2(vTexture.x-0.25,vTexture.y));vec4 dataColor=texture2D(u_data,get_data_coords_from_id(floor(idColor.r*255.0)))*idColor.a;vec3 base=inactiveColor.rgb*(1.0-dataColor.a)+dataColor.rgb*(dataColor.a);vec3 color=base;gl_FragColor=vec4(color,1.0);}"; // eslint-disable-line

var shaders$1 = {
  vertex: vert$1,
  fragment: frag$1
};
var uniforms$1 = {
  u_lightWorldPos: [1, 3, -8],
  u_lightColor: [1, 0.8, 0.8, 1],
  u_ambient: [1.0, 1.0, 1.0, 1],
  u_specular: [1, 1, 1, 1],
  u_shininess: 100,
  u_specularFactor: 0.1
};

var IcosphereLookup = /*#__PURE__*/function (_Globe) {
  _inherits(IcosphereLookup, _Globe);

  var _super = _createSuper(IcosphereLookup);

  // DEBUG
  // DEBUG
  function IcosphereLookup(textureSrc) {
    var _thisSuper, _this;

    _classCallCheck(this, IcosphereLookup);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "material", null);

    _defineProperty(_assertThisInitialized(_this), "lookup", null);

    _defineProperty(_assertThisInitialized(_this), "currentSelection", -1);

    _defineProperty(_assertThisInitialized(_this), "previousSelection", -1);

    _defineProperty(_assertThisInitialized(_this), "inAnimation", null);

    _defineProperty(_assertThisInitialized(_this), "outAnimation", null);

    _defineProperty(_assertThisInitialized(_this), "currentHover", -1);

    _defineProperty(_assertThisInitialized(_this), "hoverables", []);

    _defineProperty(_assertThisInitialized(_this), "hoverableUniforms", ['u_animatable0', 'u_animatable1', 'u_animatable2', 'u_animatable3', 'u_animatable4', 'u_animatable5']);

    _defineProperty(_assertThisInitialized(_this), "selection0", 236);

    _defineProperty(_assertThisInitialized(_this), "selection1", 144);

    _defineProperty(_assertThisInitialized(_this), "current", 236);

    _defineProperty(_assertThisInitialized(_this), "dataTexture", void 0);

    _defineProperty(_assertThisInitialized(_this), "dataTextureSize", 16);

    _defineProperty(_assertThisInitialized(_this), "updateCMDs", []);

    _defineProperty(_assertThisInitialized(_this), "highlightAnimationProps", {
      start: 0,
      stop: 1,
      duration: 1000,
      onUpdate: function onUpdate(value) {
        _this.material.uniforms.u_animateIn = value;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "init", function (gl, cb) {
      _this.geometry = new Geometry('sphere');

      _this.geometry.init(gl);

      var texturesConfig = {
        inactive: {
          src: _this.textureSrc.inactive,
          minMag: gl.LINEAR
        },
        active: {
          src: _this.textureSrc.active,
          minMag: gl.LINEAR
        },
        id: {
          src: _this.textureSrc.id,
          minMag: gl.NEAREST
        }
      };

      _this.material.init(gl);

      _this.material.loadTextures(gl, texturesConfig, function () {
        _this.material.uniforms.u_inactive = _this.material.textures.inactive;
        _this.material.uniforms.u_active = _this.material.textures.active;
        _this.material.uniforms.u_id = _this.material.textures.id;

        _this.dataTexture.init(gl);

        _this.material.uniforms.u_data = _this.dataTexture.texture;
        if (cb) cb();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForId", function (id) {
      return _this.lookup.getFromId(id);
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForCode", function (code) {
      return _this.lookup.getFromCode(code);
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForName", function (name) {
      return _this.lookup.getFromName(name);
    });

    _defineProperty(_assertThisInitialized(_this), "setIdColor", function (id, color, alpha) {
      var a = alpha === undefined ? 1.0 : alpha;
      var c = GKUtils.hexToRGBA(color, a, false);

      _this.updateCMDs.push(function (gl) {
        _this.dataTexture.updatePixelId(gl, c, id);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createCollisionGeo", function () {
      if (_this.collisionGeometry && _this.collisionGeometry instanceof GKCollision) return;
      _this.collisionGeometry = GKCollider.create_collision_geometry(_this.geometry.vertices.position, _this.geometry.vertices.texcoord, _this.geometry.vertices.indices);
    });

    _defineProperty(_assertThisInitialized(_this), "rayCastFrom", function (ray) {
      return _this.collisionGeometry.raycast(ray.origin, ray.direction);
    });

    _defineProperty(_assertThisInitialized(_this), "hitTest", function (ray) {
      return _this.collisionGeometry.hitTest(ray.origin, ray.direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectionCB", function (selectionObj) {});

    _defineProperty(_assertThisInitialized(_this), "onSelection", function (lat, lon, collision) {
      // convert worldPos to lat lon
      var coords = GKUtils.latLonFromWorld(collision.point);
      _this.current = _this.lookup.getIdFromLatLon(coords.lat, coords.lon); // console.log('IcosphereLookup.onSelection', coords.lat, coords.lon, this.current);
      // this.current = (this.current === this.selection0) ? this.selection1 : this.selection0;

      _this.setHighlightId(_this.current);

      _this.onSelectionCB(_this.current);

      return {
        id: _this.current,
        name: _this.lookup.getFromId(_this.current)
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onHover", function (collision) {
      console.log('IcosphereLookup.onHover', collision);
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (gl, sceneProps, time) {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(IcosphereLookup.prototype)), "update", _thisSuper).call(_thisSuper, sceneProps, time);

      _this.material.uniforms.u_model = _this.modelMatrix; // TODO: Batch Gl specific updates.

      _this.updateCMDs.forEach(function (cmd) {
        cmd(gl);
      });

      _this.updateCMDs = [];
    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (gl) {
      if (!_this.isReady || !_this.shouldDraw) return;
      gl.useProgram(_this.material.programInfo.program);
      setBuffersAndAttributes(gl, _this.material.programInfo, _this.geometry.bufferInfo);
      setUniforms(_this.material.programInfo, _this.material.uniforms);
      gl.drawElements(gl.TRIANGLES, _this.geometry.bufferInfo.numElements, gl.UNSIGNED_SHORT, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "setCountryHover", function (countryIndex) {});

    _defineProperty(_assertThisInitialized(_this), "setHighlightId", function (id) {
      _this.previousSelection = _this.currentSelection;
      _this.currentSelection = id;
      var animateOutStart = _this.inAnimation ? _this.inAnimation.currentValue() : 1.0; // We want a full animate out to take 1 second so 1-0 in 1000 milliseconds

      var animateOutDuration = animateOutStart * (300.0 / 1.0);

      _this.animateIn(_this.currentSelection, 500.0);

      _this.animateOut(_this.previousSelection, animateOutDuration, animateOutStart);
    });

    _defineProperty(_assertThisInitialized(_this), "animateIn", function (id, duration, cb) {
      _this.material.uniforms.u_idAnimateIn = id;
      if (_this.inAnimation) _this.inAnimation.stop();
      _this.material.uniforms.u_animateIn = 0;
      _this.inAnimation = new Tween(_this.highlightAnimationProps.start, _this.highlightAnimationProps.stop, _this.highlightAnimationProps.duration, {
        onUpdate: _this.highlightAnimationProps.onUpdate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "animateOut", function (id, duration, start, cb) {
      _this.material.uniforms.u_idAnimateOut = id;
      if (_this.outAnimation) _this.outAnimation.stop();
      _this.material.uniforms.u_animateOut = start;
      _this.outAnimation = new Tween(start, 0, duration, {
        onUpdate: function onUpdate(value) {
          _this.material.uniforms.u_animateOut = value;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addDataset", function (data) {
      _this.lookup = new Lookup(data, _this.textureSrc.id);
    });

    _defineProperty(_assertThisInitialized(_this), "updateIdState", function (id, state) {});

    _this.material = new ShaderMaterial(shaders$1);
    _this.material.uniforms = uniforms$1;
    _this.textureSrc = {
      inactive: textureSrc.inactive,
      active: textureSrc.active,
      id: textureSrc.id
    };
    _this.dataTexture = new DataTexture(_this.dataTextureSize, _this.dataTextureSize);
    return _this;
  }

  return IcosphereLookup;
}(Globe);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hammerMin = createCommonjsModule(function (module) {
  /*! Hammer.JS - v2.0.8 - 2016-04-23
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license */
  !function (a, b, c, d) {

    function e(a, b, c) {
      return setTimeout(j(a, c), b);
    }

    function f(a, b, c) {
      return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }

    function g(a, b, c) {
      var e;
      if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
        b.call(c, a[e], e, a), e++;
      } else for (e in a) {
        a.hasOwnProperty(e) && b.call(c, a[e], e, a);
      }
    }

    function h(b, c, d) {
      var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
      return function () {
        var c = new Error("get-stack-trace"),
            d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
            f = a.console && (a.console.warn || a.console.log);
        return f && f.call(a.console, e, d), b.apply(this, arguments);
      };
    }

    function i(a, b, c) {
      var d,
          e = b.prototype;
      d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
    }

    function j(a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    }

    function k(a, b) {
      return _typeof(a) == oa ? a.apply(b ? b[0] || d : d, b) : a;
    }

    function l(a, b) {
      return a === d ? b : a;
    }

    function m(a, b, c) {
      g(q(b), function (b) {
        a.addEventListener(b, c, !1);
      });
    }

    function n(a, b, c) {
      g(q(b), function (b) {
        a.removeEventListener(b, c, !1);
      });
    }

    function o(a, b) {
      for (; a;) {
        if (a == b) return !0;
        a = a.parentNode;
      }

      return !1;
    }

    function p(a, b) {
      return a.indexOf(b) > -1;
    }

    function q(a) {
      return a.trim().split(/\s+/g);
    }

    function r(a, b, c) {
      if (a.indexOf && !c) return a.indexOf(b);

      for (var d = 0; d < a.length;) {
        if (c && a[d][c] == b || !c && a[d] === b) return d;
        d++;
      }

      return -1;
    }

    function s(a) {
      return Array.prototype.slice.call(a, 0);
    }

    function t(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length;) {
        var g = b ? a[f][b] : a[f];
        r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
      }

      return c && (d = b ? d.sort(function (a, c) {
        return a[b] > c[b];
      }) : d.sort()), d;
    }

    function u(a, b) {
      for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
        if (c = ma[g], e = c ? c + f : b, e in a) return e;
        g++;
      }

      return d;
    }

    function v() {
      return ua++;
    }

    function w(b) {
      var c = b.ownerDocument || b;
      return c.defaultView || c.parentWindow || a;
    }

    function x(a, b) {
      var c = this;
      this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
        k(a.options.enable, [a]) && c.handler(b);
      }, this.init();
    }

    function y(a) {
      var b,
          c = a.options.inputClass;
      return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
    }

    function z(a, b, c) {
      var d = c.pointers.length,
          e = c.changedPointers.length,
          f = b & Ea && d - e === 0,
          g = b & (Ga | Ha) && d - e === 0;
      c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
    }

    function A(a, b) {
      var c = a.session,
          d = b.pointers,
          e = d.length;
      c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
          g = c.firstMultiple,
          h = g ? g.center : f.center,
          i = b.center = E(d);
      b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
      var j = F(b.deltaTime, b.deltaX, b.deltaY);
      b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
      var k = a.element;
      o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }

    function B(a, b) {
      var c = b.center,
          d = a.offsetDelta || {},
          e = a.prevDelta || {},
          f = a.prevInput || {};
      b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
        x: f.deltaX || 0,
        y: f.deltaY || 0
      }, d = a.offsetDelta = {
        x: c.x,
        y: c.y
      }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }

    function C(a, b) {
      var c,
          e,
          f,
          g,
          h = a.lastInterval || b,
          i = b.timeStamp - h.timeStamp;

      if (b.eventType != Ha && (i > Da || h.velocity === d)) {
        var j = b.deltaX - h.deltaX,
            k = b.deltaY - h.deltaY,
            l = F(i, j, k);
        e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
      } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;

      b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
    }

    function D(a) {
      for (var b = [], c = 0; c < a.pointers.length;) {
        b[c] = {
          clientX: pa(a.pointers[c].clientX),
          clientY: pa(a.pointers[c].clientY)
        }, c++;
      }

      return {
        timeStamp: ra(),
        pointers: b,
        center: E(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY
      };
    }

    function E(a) {
      var b = a.length;
      if (1 === b) return {
        x: pa(a[0].clientX),
        y: pa(a[0].clientY)
      };

      for (var c = 0, d = 0, e = 0; b > e;) {
        c += a[e].clientX, d += a[e].clientY, e++;
      }

      return {
        x: pa(c / b),
        y: pa(d / b)
      };
    }

    function F(a, b, c) {
      return {
        x: b / a || 0,
        y: c / a || 0
      };
    }

    function G(a, b) {
      return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
    }

    function H(a, b, c) {
      c || (c = Qa);
      var d = b[c[0]] - a[c[0]],
          e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e);
    }

    function I(a, b, c) {
      c || (c = Qa);
      var d = b[c[0]] - a[c[0]],
          e = b[c[1]] - a[c[1]];
      return 180 * Math.atan2(e, d) / Math.PI;
    }

    function J(a, b) {
      return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
    }

    function K(a, b) {
      return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
    }

    function L() {
      this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
    }

    function M() {
      this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }

    function N() {
      this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
    }

    function O(a, b) {
      var c = s(a.touches),
          d = s(a.changedTouches);
      return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
    }

    function P() {
      this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
    }

    function Q(a, b) {
      var c = s(a.touches),
          d = this.targetIds;
      if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
      var e,
          f,
          g = s(a.changedTouches),
          h = [],
          i = this.target;
      if (f = c.filter(function (a) {
        return o(a.target, i);
      }), b === Ea) for (e = 0; e < f.length;) {
        d[f[e].identifier] = !0, e++;
      }

      for (e = 0; e < g.length;) {
        d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
      }

      return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
    }

    function R() {
      x.apply(this, arguments);
      var a = j(this.handler, this);
      this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
    }

    function S(a, b) {
      a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
    }

    function T(a) {
      var b = a.changedPointers[0];

      if (b.identifier === this.primaryTouch) {
        var c = {
          x: b.clientX,
          y: b.clientY
        };
        this.lastTouches.push(c);

        var d = this.lastTouches,
            e = function e() {
          var a = d.indexOf(c);
          a > -1 && d.splice(a, 1);
        };

        setTimeout(e, cb);
      }
    }

    function U(a) {
      for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
        var e = this.lastTouches[d],
            f = Math.abs(b - e.x),
            g = Math.abs(c - e.y);
        if (db >= f && db >= g) return !0;
      }

      return !1;
    }

    function V(a, b) {
      this.manager = a, this.set(b);
    }

    function W(a) {
      if (p(a, jb)) return jb;
      var b = p(a, kb),
          c = p(a, lb);
      return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
    }

    function X() {
      if (!fb) return !1;
      var b = {},
          c = a.CSS && a.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
        b[d] = c ? a.CSS.supports("touch-action", d) : !0;
      }), b;
    }

    function Y(a) {
      this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
    }

    function Z(a) {
      return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
    }

    function $(a) {
      return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
    }

    function _(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a;
    }

    function aa() {
      Y.apply(this, arguments);
    }

    function ba() {
      aa.apply(this, arguments), this.pX = null, this.pY = null;
    }

    function ca() {
      aa.apply(this, arguments);
    }

    function da() {
      Y.apply(this, arguments), this._timer = null, this._input = null;
    }

    function ea() {
      aa.apply(this, arguments);
    }

    function fa() {
      aa.apply(this, arguments);
    }

    function ga() {
      Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }

    function ha(a, b) {
      return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
    }

    function ia(a, b) {
      this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
        var b = this.add(new a[0](a[1]));
        a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
      }, this);
    }

    function ja(a, b) {
      var c = a.element;

      if (c.style) {
        var d;
        g(a.options.cssProps, function (e, f) {
          d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
        }), b || (a.oldCssProps = {});
      }
    }

    function ka(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }

    var la,
        ma = ["", "webkit", "Moz", "MS", "ms", "o"],
        na = b.createElement("div"),
        oa = "function",
        pa = Math.round,
        qa = Math.abs,
        ra = Date.now;
    la = "function" != typeof Object.assign ? function (a) {
      if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");

      for (var b = Object(a), c = 1; c < arguments.length; c++) {
        var e = arguments[c];
        if (e !== d && null !== e) for (var f in e) {
          e.hasOwnProperty(f) && (b[f] = e[f]);
        }
      }

      return b;
    } : Object.assign;
    var sa = h(function (a, b, c) {
      for (var e = Object.keys(b), f = 0; f < e.length;) {
        (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
      }

      return a;
    }, "extend", "Use `assign`."),
        ta = h(function (a, b) {
      return sa(a, b, !0);
    }, "merge", "Use `assign`."),
        ua = 1,
        va = /mobile|tablet|ip(ad|hone|od)|android/i,
        wa = ("ontouchstart" in a),
        xa = u(a, "PointerEvent") !== d,
        ya = wa && va.test(navigator.userAgent),
        za = "touch",
        Aa = "pen",
        Ba = "mouse",
        Ca = "kinect",
        Da = 25,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 1,
        Ja = 2,
        Ka = 4,
        La = 8,
        Ma = 16,
        Na = Ja | Ka,
        Oa = La | Ma,
        Pa = Na | Oa,
        Qa = ["x", "y"],
        Ra = ["clientX", "clientY"];
    x.prototype = {
      handler: function handler() {},
      init: function init() {
        this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
      },
      destroy: function destroy() {
        this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
      }
    };
    var Sa = {
      mousedown: Ea,
      mousemove: Fa,
      mouseup: Ga
    },
        Ta = "mousedown",
        Ua = "mousemove mouseup";
    i(L, x, {
      handler: function handler(a) {
        var b = Sa[a.type];
        b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
          pointers: [a],
          changedPointers: [a],
          pointerType: Ba,
          srcEvent: a
        }));
      }
    });
    var Va = {
      pointerdown: Ea,
      pointermove: Fa,
      pointerup: Ga,
      pointercancel: Ha,
      pointerout: Ha
    },
        Wa = {
      2: za,
      3: Aa,
      4: Ba,
      5: Ca
    },
        Xa = "pointerdown",
        Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
      handler: function handler(a) {
        var b = this.store,
            c = !1,
            d = a.type.toLowerCase().replace("ms", ""),
            e = Va[d],
            f = Wa[a.pointerType] || a.pointerType,
            g = f == za,
            h = r(b, a.pointerId, "pointerId");
        e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
          pointers: b,
          changedPointers: [a],
          pointerType: f,
          srcEvent: a
        }), c && b.splice(h, 1));
      }
    });
    var Za = {
      touchstart: Ea,
      touchmove: Fa,
      touchend: Ga,
      touchcancel: Ha
    },
        $a = "touchstart",
        _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
      handler: function handler(a) {
        var b = Za[a.type];

        if (b === Ea && (this.started = !0), this.started) {
          var c = O.call(this, a, b);
          b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: za,
            srcEvent: a
          });
        }
      }
    });
    var ab = {
      touchstart: Ea,
      touchmove: Fa,
      touchend: Ga,
      touchcancel: Ha
    },
        bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
      handler: function handler(a) {
        var b = ab[a.type],
            c = Q.call(this, a, b);
        c && this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: za,
          srcEvent: a
        });
      }
    });
    var cb = 2500,
        db = 25;
    i(R, x, {
      handler: function handler(a, b, c) {
        var d = c.pointerType == za,
            e = c.pointerType == Ba;

        if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
          if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;
          this.callback(a, b, c);
        }
      },
      destroy: function destroy() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    var eb = u(na.style, "touchAction"),
        fb = eb !== d,
        gb = "compute",
        hb = "auto",
        ib = "manipulation",
        jb = "none",
        kb = "pan-x",
        lb = "pan-y",
        mb = X();
    V.prototype = {
      set: function set(a) {
        a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
      },
      update: function update() {
        this.set(this.manager.options.touchAction);
      },
      compute: function compute() {
        var a = [];
        return g(this.manager.recognizers, function (b) {
          k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
        }), W(a.join(" "));
      },
      preventDefaults: function preventDefaults(a) {
        var b = a.srcEvent,
            c = a.offsetDirection;
        if (this.manager.session.prevented) return void b.preventDefault();
        var d = this.actions,
            e = p(d, jb) && !mb[jb],
            f = p(d, lb) && !mb[lb],
            g = p(d, kb) && !mb[kb];

        if (e) {
          var h = 1 === a.pointers.length,
              i = a.distance < 2,
              j = a.deltaTime < 250;
          if (h && i && j) return;
        }

        return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
      },
      preventSrc: function preventSrc(a) {
        this.manager.session.prevented = !0, a.preventDefault();
      }
    };
    var nb = 1,
        ob = 2,
        pb = 4,
        qb = 8,
        rb = qb,
        sb = 16,
        tb = 32;
    Y.prototype = {
      defaults: {},
      set: function set(a) {
        return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function recognizeWith(a) {
        if (f(a, "recognizeWith", this)) return this;
        var b = this.simultaneous;
        return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
      },
      dropRecognizeWith: function dropRecognizeWith(a) {
        return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
      },
      requireFailure: function requireFailure(a) {
        if (f(a, "requireFailure", this)) return this;
        var b = this.requireFail;
        return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
      },
      dropRequireFailure: function dropRequireFailure(a) {
        if (f(a, "dropRequireFailure", this)) return this;
        a = _(a, this);
        var b = r(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this;
      },
      hasRequireFailures: function hasRequireFailures() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function canRecognizeWith(a) {
        return !!this.simultaneous[a.id];
      },
      emit: function emit(a) {
        function b(b) {
          c.manager.emit(b, a);
        }

        var c = this,
            d = this.state;
        qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
      },
      tryEmit: function tryEmit(a) {
        return this.canEmit() ? this.emit(a) : void (this.state = tb);
      },
      canEmit: function canEmit() {
        for (var a = 0; a < this.requireFail.length;) {
          if (!(this.requireFail[a].state & (tb | nb))) return !1;
          a++;
        }

        return !0;
      },
      recognize: function recognize(a) {
        var b = la({}, a);
        return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
      },
      process: function process(a) {},
      getTouchAction: function getTouchAction() {},
      reset: function reset() {}
    }, i(aa, Y, {
      defaults: {
        pointers: 1
      },
      attrTest: function attrTest(a) {
        var b = this.options.pointers;
        return 0 === b || a.pointers.length === b;
      },
      process: function process(a) {
        var b = this.state,
            c = a.eventType,
            d = b & (ob | pb),
            e = this.attrTest(a);
        return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
      }
    }), i(ba, aa, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Pa
      },
      getTouchAction: function getTouchAction() {
        var a = this.options.direction,
            b = [];
        return a & Na && b.push(lb), a & Oa && b.push(kb), b;
      },
      directionTest: function directionTest(a) {
        var b = this.options,
            c = !0,
            d = a.distance,
            e = a.direction,
            f = a.deltaX,
            g = a.deltaY;
        return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
      },
      attrTest: function attrTest(a) {
        return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
      },
      emit: function emit(a) {
        this.pX = a.deltaX, this.pY = a.deltaY;
        var b = $(a.direction);
        b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
      }
    }), i(ca, aa, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function getTouchAction() {
        return [jb];
      },
      attrTest: function attrTest(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
      },
      emit: function emit(a) {
        if (1 !== a.scale) {
          var b = a.scale < 1 ? "in" : "out";
          a.additionalEvent = this.options.event + b;
        }

        this._super.emit.call(this, a);
      }
    }), i(da, Y, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        threshold: 9
      },
      getTouchAction: function getTouchAction() {
        return [hb];
      },
      process: function process(a) {
        var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime > b.time;
        if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.time, this);else if (a.eventType & Ga) return rb;
        return tb;
      },
      reset: function reset() {
        clearTimeout(this._timer);
      },
      emit: function emit(a) {
        this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
      }
    }), i(ea, aa, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function getTouchAction() {
        return [jb];
      },
      attrTest: function attrTest(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
      }
    }), i(fa, aa, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .3,
        direction: Na | Oa,
        pointers: 1
      },
      getTouchAction: function getTouchAction() {
        return ba.prototype.getTouchAction.call(this);
      },
      attrTest: function attrTest(a) {
        var b,
            c = this.options.direction;
        return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
      },
      emit: function emit(a) {
        var b = $(a.offsetDirection);
        b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
      }
    }), i(ga, Y, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10
      },
      getTouchAction: function getTouchAction() {
        return [ib];
      },
      process: function process(a) {
        var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime < b.time;
        if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();

        if (d && f && c) {
          if (a.eventType != Ga) return this.failTimeout();
          var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
              h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
          this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
          var i = this.count % b.taps;
          if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
            this.state = rb, this.tryEmit();
          }, b.interval, this), ob) : rb;
        }

        return tb;
      },
      failTimeout: function failTimeout() {
        return this._timer = e(function () {
          this.state = tb;
        }, this.options.interval, this), tb;
      },
      reset: function reset() {
        clearTimeout(this._timer);
      },
      emit: function emit() {
        this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    }), ha.VERSION = "2.0.8", ha.defaults = {
      domEvents: !1,
      touchAction: gb,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [[ea, {
        enable: !1
      }], [ca, {
        enable: !1
      }, ["rotate"]], [fa, {
        direction: Na
      }], [ba, {
        direction: Na
      }, ["swipe"]], [ga], [ga, {
        event: "doubletap",
        taps: 2
      }, ["tap"]], [da]],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var ub = 1,
        vb = 2;
    ia.prototype = {
      set: function set(a) {
        return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
      },
      stop: function stop(a) {
        this.session.stopped = a ? vb : ub;
      },
      recognize: function recognize(a) {
        var b = this.session;

        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c,
              d = this.recognizers,
              e = b.curRecognizer;
          (!e || e && e.state & rb) && (e = b.curRecognizer = null);

          for (var f = 0; f < d.length;) {
            c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
          }
        }
      },
      get: function get(a) {
        if (a instanceof Y) return a;

        for (var b = this.recognizers, c = 0; c < b.length; c++) {
          if (b[c].options.event == a) return b[c];
        }

        return null;
      },
      add: function add(a) {
        if (f(a, "add", this)) return this;
        var b = this.get(a.options.event);
        return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
      },
      remove: function remove(a) {
        if (f(a, "remove", this)) return this;

        if (a = this.get(a)) {
          var b = this.recognizers,
              c = r(b, a);
          -1 !== c && (b.splice(c, 1), this.touchAction.update());
        }

        return this;
      },
      on: function on(a, b) {
        if (a !== d && b !== d) {
          var c = this.handlers;
          return g(q(a), function (a) {
            c[a] = c[a] || [], c[a].push(b);
          }), this;
        }
      },
      off: function off(a, b) {
        if (a !== d) {
          var c = this.handlers;
          return g(q(a), function (a) {
            b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
          }), this;
        }
      },
      emit: function emit(a, b) {
        this.options.domEvents && ka(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();

        if (c && c.length) {
          b.type = a, b.preventDefault = function () {
            b.srcEvent.preventDefault();
          };

          for (var d = 0; d < c.length;) {
            c[d](b), d++;
          }
        }
      },
      destroy: function destroy() {
        this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    }, la(ha, {
      INPUT_START: Ea,
      INPUT_MOVE: Fa,
      INPUT_END: Ga,
      INPUT_CANCEL: Ha,
      STATE_POSSIBLE: nb,
      STATE_BEGAN: ob,
      STATE_CHANGED: pb,
      STATE_ENDED: qb,
      STATE_RECOGNIZED: rb,
      STATE_CANCELLED: sb,
      STATE_FAILED: tb,
      DIRECTION_NONE: Ia,
      DIRECTION_LEFT: Ja,
      DIRECTION_RIGHT: Ka,
      DIRECTION_UP: La,
      DIRECTION_DOWN: Ma,
      DIRECTION_HORIZONTAL: Na,
      DIRECTION_VERTICAL: Oa,
      DIRECTION_ALL: Pa,
      Manager: ia,
      Input: x,
      TouchAction: V,
      TouchInput: P,
      MouseInput: L,
      PointerEventInput: M,
      TouchMouseInput: R,
      SingleTouchInput: N,
      Recognizer: Y,
      AttrRecognizer: aa,
      Tap: ga,
      Pan: ba,
      Swipe: fa,
      Pinch: ca,
      Rotate: ea,
      Press: da,
      on: m,
      off: n,
      each: g,
      merge: ta,
      extend: sa,
      assign: la,
      inherit: i,
      bindFn: j,
      prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha,   module.exports ? module.exports = ha : a[c] = ha;
  }(window, document, "Hammer");
});

//TODO: Refactor this
//TODO: Ambient movement
var MovementModel = /*#__PURE__*/function () {
  function MovementModel() {
    var _this = this;

    _classCallCheck(this, MovementModel);

    _defineProperty(this, "isInteractive", true);

    _defineProperty(this, "hasAmbient", false);

    _defineProperty(this, "init", function (width, height, aspect, fov) {
      _this.zStart = _this._zBounded(_this.settings.CAM_Z_INI);
      _this.zCurrent = _this.zStart;
      _this.zTarget = _this.zStart;
      _this.rotStart = [0.0, 0.0];
      _this.rotCurrent = _this.rotStart;
      _this.rotTarget = _this.rotStart;
      _this.rotVelocity = [0.0, 0.0];
      _this.interacting = false;
      _this.lastGestureChange = 0.0; // Calculate radians per point

      _this.pointsPerRadian = Math.PI / (width / window.devicePixelRatio);
      _this.zFullWidth = _this.settings.CAM_Z_MAX;
      _this.camFov = fov;
      _this.camAspect = aspect;
      _this.zFullWidth = _this._frustumDist(2.0 * (1.0 / _this.camAspect), _this.camFov);
    });

    _defineProperty(this, "resize", function (width, height, aspect, fov) {
      _this.pointsPerRadian = Math.PI / (width / window.devicePixelRatio);
      _this.camFov = fov;
      _this.camAspect = aspect;
      _this.zFullWidth = _this._frustumDist(2.0 * (1.0 / _this.camAspect), _this.camFov);
    });

    _defineProperty(this, "activate", function () {
      _this.hammertime.on('panstart', _this._onPanStart.bind(_this));

      _this.hammertime.on('pan', _this._onPanContinue.bind(_this));

      _this.hammertime.on('panend', _this._onPanEnd.bind(_this));

      _this.hammertime.on('tap', _this._onTap.bind(_this));
    });

    _defineProperty(this, "deactivate", function () {
      _this.hammertime.off('panstart', _this._onPanStart.bind(_this));

      _this.hammertime.off('pan', _this._onPanContinue.bind(_this));

      _this.hammertime.off('panend', _this._onPanEnd.bind(_this));

      _this.hammertime.off('tap', _this._onTap.bind(_this));
    });

    _defineProperty(this, "_zForScale", function (scale) {
      if (scale < 1.0) {
        return _this.zStart * (1.0 / scale);
      }

      return _this.zStart + (_this.settings.CAM_Z_MIN - _this.zStart) * (1.0 - 1.0 / scale);
    });

    _defineProperty(this, "_onWheel", function (event) {
      if (!_this.isInteractive) return;
      event.preventDefault();
      var absScaledDeltaY = Math.pow((event.deltaY + 10) / 100, 3.0) / 250;
      var scaledDeltaY = event.deltaY > 0.0 ? absScaledDeltaY : 1 / absScaledDeltaY;
      scaledDeltaY = Math.max(0.9, scaledDeltaY);
      scaledDeltaY = Math.min(1.2, scaledDeltaY); // TODO: Verify multiple calls per draw cycle

      _this.zStart = _this.zCurrent;
      _this.rotVelocity = [0, 0];
      _this.zTarget = _this._zBounded(_this._zForScale(scaledDeltaY));
      _this.lastGestureChange = event.timeStamp;
    });

    _defineProperty(this, "_onPanContinue", function (event) {
      if (!_this.isInteractive) return;

      if (_this.interacting === true) {
        // TODO: this sucks and is a hack. This basically increases the size of the sphere
        // that the input is acting on. This linearaly modifies the speed to feel "right"
        var scale = 6.0;
        var t = [event.deltaY * scale, event.deltaX * scale];

        var d = _this._rotForDelta([_this.panStart[0] - t[0], _this.panStart[1] - t[1]]);

        _this.rotTarget = _this._rotBounded([_this.rotStart[0] + d[0], _this.rotStart[1] + d[1]]);
        _this.lastGestureChange = event.timeStamp;
      }
    });

    _defineProperty(this, "_onPanEnd", function (event) {
      if (!_this.isInteractive) return;
      _this.interacting = false;
      var curTime = event.timeStamp;
      var timeElapsed = curTime - _this.lastGestureChange;

      if (timeElapsed > 0.1) {
        _this.rotVelocity = [0, 0];
        return;
      }

      var d = _this._rotForDelta([event.overallVelocityX, event.overallVelocityY]);

      _this.rotVelocity = [d[0] * 0.016, d[1] * 0.016];
      _this.rotDir = d[0] > 0.0 ? 1.0 : -1.0;
      var pitchNorm = _this.rotTarget[0] / (Math.PI / 2) / 0.5;

      if (Math.abs(pitchNorm) < 1) {
        _this.ambientPitchX = Math.asin(pitchNorm);
      } else {
        _this.ambientPitchX = Math.PI / 2 * (pitchNorm / Math.abs(pitchNorm));
      }

      _this.ambientPitchDir = d[1] > 0.0 ? -1.0 : 1.0;
    });

    _defineProperty(this, "_updateRot", function () {
      if (!_this.interacting) {
        var ambientPitchY = 0;

        if (_this.hasAmbient) {
          _this.ambientPitch = Math.min(_this.ambientPitch + 1.0 / 120.0, 1);
          ambientPitchY = Math.sin(_this.ambientPitchX) * (Math.PI / 2) * 0.5;
          _this.ambientPitchX += 0.001 * _this.ambientPitchDir;
        } else {
          _this.ambientPitch = 0;
          _this.ambientPitchX = 0;
          ambientPitchY = 0;
        }

        _this.rotTarget = [_this.rotTarget[0] * (1 - _this.ambientPitch) + ambientPitchY * _this.ambientPitch, _this.rotTarget[1]];
        var targetBounded = [Math.max(Math.min(_this.rotTarget[0], _this.settings.CAM_PITCH_SPRING_MAX), _this.settings.CAM_PITCH_SPRING_MIN), _this.rotTarget[1]];
        var targetDelta = [_this.rotTarget[0] - targetBounded[0] + _this.rotVelocity[0], _this.rotTarget[1] - targetBounded[1] + _this.rotVelocity[1]];
        _this.rotTarget = [_this.rotTarget[0] - targetDelta[0] * _this.settings.SPRING_STR * 3.0, _this.rotTarget[1] - targetDelta[1] * _this.settings.SPRING_STR * 3.0];
        _this.rotVelocity = [_this.rotVelocity[0] * _this.settings.FRICTION, _this.rotVelocity[1] * _this.settings.FRICTION];
        var camP = _this.zCurrent / _this.settings.CAM_Z_MAX;

        if (_this.hasAmbient) {
          _this.ambientYaw = Math.min(_this.ambientYaw + _this.settings.YAW_MIN_VELOCITY / 120.0, _this.settings.YAW_MIN_VELOCITY);
        }

        var yawMin = _this.ambientYaw * (camP * camP);

        if (Math.abs(_this.rotVelocity[1]) < yawMin) {
          _this.rotVelocity[1] = yawMin * _this.rotDir;
        }
      } else {
        _this.ambientYaw = 0;
        _this.ambientPitch = 0;
      }

      var rotDelta = [_this.rotTarget[0] - _this.rotCurrent[0], _this.rotTarget[1] - _this.rotCurrent[1]];
      _this.rotCurrent = [_this.rotCurrent[0] + rotDelta[0] * _this.settings.SPRING_STR, _this.rotCurrent[1] + rotDelta[1] * _this.settings.SPRING_STR];
    });

    _defineProperty(this, "_updateZ", function () {
      if (!_this.interacting) {
        _this.zBounded = Math.max(Math.min(_this.zTarget, _this.settings.CAM_Z_SPRING_MAX), _this.settings.CAM_Z_SPRING_MIN);

        var _zDelta = _this.zTarget - _this.zBounded;

        _this.zTarget -= _zDelta * _this.settings.SPRING_STR * 3.0;
      }

      var zDelta = _this.zTarget - _this.zCurrent;
      _this.zCurrent += zDelta * _this.settings.SPRING_STR;
    });

    _defineProperty(this, "update", function (newFOV) {
      _this.fov = newFOV;

      _this._updateZ();

      _this._updateRot();
    });

    _defineProperty(this, "setAltitude", function (altitude) {
      _this.zTarget = 1.0 + altitude / _this.settings.EARTH_RADIUS;
    });

    _defineProperty(this, "getAltitude", function () {
      return (_this.zCurrent - 1.0) * _this.settings.EARTH_RADIUS;
    });

    _defineProperty(this, "reset", function () {
      _this.zStart = _this.zBounded(_this.settings.CAM_Z_INI);
      _this.zCurrent = _this.zStart;
      _this.zTarget = _this.zStart;
      _this.rotStart = [0.0, 0.0];
      _this.rotCurrent = _this.rotStart;
      _this.rotTarget = _this.rotStart;
      _this.rotVelocity = [0.0, 0.0];
      _this.interacting = false;
      _this.lastGestureChange = 0.0;
    });

    _defineProperty(this, "_zBounded", function (z) {
      if (z > _this.settings.CAM_Z_SPRING_MAX) {
        var d = z - _this.settings.CAM_Z_SPRING_MAX;
        var x = _this.settings.CAM_Z_MAX - _this.settings.CAM_Z_SPRING_MAX;

        var f = _this.easeOutSin(Math.min(d / x, 1.0));

        return _this.settings.CAM_Z_SPRING_MAX + x * f;
      }

      if (z < _this.settings.CAM_Z_SPRING_MIN) {
        var _d = z - _this.settings.CAM_Z_SPRING_MIN;

        var _x = _this.settings.CAM_Z_MIN - _this.settings.CAM_Z_SPRING_MIN;

        var _f = _this.easeOutSin(Math.min(_d / _x, 1.0));

        return _this.settings.CAM_Z_SPRING_MIN + _x * _f;
      }

      return z;
    });

    _defineProperty(this, "_rotBounded", function (r) {
      if (r[0] > _this.settings.CAM_PITCH_SPRING_MAX) {
        var d = r[0] - _this.settings.CAM_PITCH_SPRING_MAX;
        var x = _this.settings.CAM_PITCH_MAX - _this.settings.CAM_PITCH_SPRING_MAX;

        var f = _this.easeOutSin(Math.min(d / x, 1.0));

        return [_this.settings.CAM_PITCH_SPRING_MAX + x * f, r[1]];
      }

      if (r[0] < _this.settings.CAM_PITCH_SPRING_MIN) {
        var _d2 = r[0] - _this.settings.CAM_PITCH_SPRING_MIN;

        var _x2 = _this.settings.CAM_PITCH_MIN - _this.settings.CAM_PITCH_SPRING_MIN;

        var _f2 = _this.easeOutSin(Math.min(_d2 / _x2, 1.0));

        return [_this.settings.CAM_PITCH_SPRING_MIN + _x2 * _f2, r[1]];
      }

      return r;
    });

    _defineProperty(this, "_frustumDist", function (height, fov) {
      return height * 0.5 / Math.tan(fov * 0.5 * (Math.PI / 180));
    });

    _defineProperty(this, "_rotForDelta", function (delta) {
      var pitch = delta[0] * (_this.pointsPerRadian * (_this.zCurrent / _this.zFullWidth));
      var yaw = delta[1] * (_this.pointsPerRadian * (_this.zCurrent / _this.zFullWidth));
      return [pitch, yaw];
    });

    _defineProperty(this, "easeOutSin", function (x) {
      return Math.sin(x * Math.PI / 2);
    });

    this.settings = {};
    this.settings.EARTH_RADIUS = 6378137.0; // metres
    // Z config

    this.settings.CAM_Z_MIN = 1.0;
    this.settings.CAM_Z_MAX = 45.0;
    this.settings.CAM_Z_INI = (this.settings.CAM_Z_MIN + this.settings.CAM_Z_MAX) * 0.5;
    this.settings.CAM_Z_SPRING_BND = 0.8;
    this.settings.CAM_Z_SPRING_MAX = this.settings.CAM_Z_MAX * this.settings.CAM_Z_SPRING_BND;
    this.settings.CAM_Z_SPRING_MIN = this.settings.CAM_Z_MIN * (1.0 / this.settings.CAM_Z_SPRING_BND); // Pitch config

    this.settings.CAM_PITCH_MAX = Math.PI * 0.5;
    this.settings.CAM_PITCH_MIN = -Math.PI * 0.5;
    this.settings.CAM_PITCH_INI = 0.0;
    this.settings.CAM_PITCH_SPRING_BND = 0.8;
    this.settings.CAM_PITCH_SPRING_MAX = this.settings.CAM_PITCH_MAX * this.settings.CAM_PITCH_SPRING_BND;
    this.settings.CAM_PITCH_SPRING_MIN = this.settings.CAM_PITCH_MIN * this.settings.CAM_PITCH_SPRING_BND; // General config

    this.settings.FRICTION = 0.1;
    this.settings.SPRING_STR = 0.16;
    this.settings.YAW_MIN_VELOCITY = 0.01;
    this.zStart = 0.0;
    this.zCurrent = 0.0;
    this.zTarget = 0.0;
    this.panStart = [0, 0];
    this.rotStart = [0.0, 0.0];
    this.rotCurrent = [0.0, 0.0];
    this.rotTarget = [0.0, 0.0];
    this.rotVelocity = [0.0, 0.0];
    this.rotDir = 1.0;
    this.ambientYaw = 0.0;
    this.ambientPitch = 0.0;
    this.ambientPitchX = 0.0;
    this.ambientPitchDir = -1.0;
    this.interacting = false;

    this.getInteractionState = function () {
      return _this.interacting;
    };

    this.lastGestureChange = 0;
    this.pointsPerRadian = 0;
    this.zFullWidth = 0;

    this.onTap = function (event) {};

    this.onPanCB = function (event) {};
  }

  _createClass(MovementModel, [{
    key: "_onTap",
    value: function _onTap(event) {
      if (!this.isInteractive) return;
      this.onTap(event);
    }
  }, {
    key: "_onPinch",
    value: function _onPinch(event) {
      if (!this.isInteractive) return;

      if (event.isFirst) {
        this.zStart = this.zCurrent;
        this.rotVelocity = [0, 0];
      } else if (event.isFinal) ; else {
        this.zTarget = this._zBounded(this._zForScale(event.scale));
        this.lastGestureChange = event.timeStamp;
      }
    }
  }, {
    key: "_onPanStart",
    value: function _onPanStart(event) {
      this.interacting = true;
      this.rotStart = this.rotCurrent;
      this.panStart = [event.deltaX, event.deltaY];
      this.rotVelocity = [0, 0]; // Kill Velocity
    }
  }, {
    key: "camPos",
    get: function get() {
      return [0.0, 0.0, this.zCurrent];
    }
  }, {
    key: "camYaw",
    get: function get() {
      return this.rotCurrent[1];
    }
  }, {
    key: "camPitch",
    get: function get() {
      return this.rotCurrent[0];
    } // var camFov: Float {
    //     didSet { // Assumption: sphere has a radius of 1
    //         zFullWidth = frustumDist(height: 2.0 * (1.0 / camAspect), fov: camFov)
    //     }
    // }
    // var camAspect: Float {
    //     didSet {
    //         zFullWidth = frustumDist(height: 2.0 * (1.0 / camAspect), fov: camFov)
    //     }
    // }

  }]);

  return MovementModel;
}();

var InteractionController = /*#__PURE__*/function () {
  /**
   * @description Should process interations
   * @memberof InteractionController#
   * @member {boolean} isInteractive
   */

  /**
   * @description Dom element to attach event listeners
   * @memberof InteractionController#
   * @member {HTMLElement} targetElement
   */

  /**
   * @description Drawable to hittest against for interactions
   * @memberof InteractionController#
   * @member {Drawable} targetDrawable
   */

  /**
   * @description Camera reference
   * @memberof InteractionController#
   * @member {Camera} camera
   */

  /**
   * @description Movement model to use for camera control
   * @memberof InteractionController#
   * @member {MovementModel} movementModel
   */

  /**
   * @description Bounding rect of targetElement
   * @memberof InteractionController#
   * @member {DOMRect} boundingRect
   */

  /**
   * @description Function to call when tap is confirmed
   * @memberof InteractionController#
   * @member {function} onTapCB
   */

  /**
   * @description What callbacks should be registered
   * @memberof InteractionController#
   * @member {Object}
   */

  /**
   * @description Creates an interactionController
   * @param {HTMLElement} targetElement - Dom element to attach event listeners
   * @param {Camera} camera - Reference to the camera in use
   * @param {Object} options - What callbacks should be registered
   * @returns {InteractionController}
   */
  function InteractionController(targetElement, camera, options) {
    var _this = this;

    _classCallCheck(this, InteractionController);

    _defineProperty(this, "isInteractive", false);

    _defineProperty(this, "targetElement", window);

    _defineProperty(this, "targetDrawable", null);

    _defineProperty(this, "camera", null);

    _defineProperty(this, "movementModel", null);

    _defineProperty(this, "boundingRect", null);

    _defineProperty(this, "onTapCB", null);

    _defineProperty(this, "options", {
      tap: true,
      pan: true,
      pinch: true
    });

    _defineProperty(this, "resize", function () {
      _this.boundingRect = _this.targetElement.getBoundingClientRect();

      _this.movementModel.resize(_this.boundingRect.width, _this.boundingRect.height, _this.camera.aspect, _this.camera.fov);
    });

    _defineProperty(this, "update", function () {
      _this.movementModel.update(_this.camera.fov);
    });

    _defineProperty(this, "isOverTarget", function (x, y) {
      // Normalize window pos to target element
      var xNorm = x - _this.boundingRect.x;
      var yNorm = y - _this.boundingRect.y;
      var xNormalized = xNorm / _this.boundingRect.width;
      var yNormalized = (_this.boundingRect.height - yNorm) / _this.boundingRect.height;

      var ray = _this.camera.getRayFromScreen(xNormalized, yNormalized);

      return _this.targetDrawable.hitTest(ray); // return true;
    });

    _defineProperty(this, "onPanStart", function (event) {
      if (!_this.isOverTarget(event.center.x, event.center.y)) return;

      _this.movementModel._onPanStart(event);
    });

    _defineProperty(this, "onPanContinue", function (event) {
      _this.movementModel._onPanContinue(event);
    });

    _defineProperty(this, "onPanEnd", function (event) {
      _this.movementModel._onPanEnd(event);
    });

    _defineProperty(this, "onTap", function (event) {
      // Normalize window pos to target element
      var xNorm = event.center.x - _this.boundingRect.x;
      var yNorm = event.center.y - _this.boundingRect.y;

      if (_this.onTapCB) {
        _this.onTapCB(xNorm, yNorm);
      }
    });

    if (targetElement) {
      this.targetElement = targetElement;
      this.boundingRect = this.targetElement.getBoundingClientRect();
    }

    this.camera = camera;

    if (options) {
      if (options.tap) {
        this.options.tap = options.tap;
      }

      if (options.pan) {
        this.options.pan = options.pan;
      }

      if (options.pinch) {
        this.options.pinch = options.pinch;
      }
    }

    this.movementModel = new MovementModel();
    this.movementModel.init(this.boundingRect.width, this.boundingRect.height, this.camera.aspect, this.camera.fov);
    this.movementModel.isInteractive = true;
    this.movementModel.hasAmbient = false;
    this.hammer = window.Hammer(this.targetElement, null);
    if (this.options.tap) this.hammer.on('tap', this.onTap);
    if (this.options.pan) this.hammer.on('panstart', this.onPanStart);
    if (this.options.pan) this.hammer.on('pan', this.onPanContinue);
    if (this.options.pan) this.hammer.on('panend', this.onPanEnd);
    if (this.options.pinch) this.hammer.on('tap', this.onPinch);
    this.isInteractive = true;
  }
  /**
   * @description sets targetDrawable
   * @memberof InteractionController#
   * @member {Drawable} target
   */


  _createClass(InteractionController, [{
    key: "target",
    set: function set(newTarget) {
      this.targetDrawable = newTarget;
    }
    /**
     * @description Resize bounding rect and movement model
     * @method
     */

  }]);

  return InteractionController;
}();

/**
 * @class
 */

var DataDrawable = /*#__PURE__*/function (_Drawable) {
  _inherits(DataDrawable, _Drawable);

  var _super = _createSuper(DataDrawable);

  function DataDrawable() {
    _classCallCheck(this, DataDrawable);

    return _super.apply(this, arguments);
  }

  return DataDrawable;
}(Drawable);

var CalloutManager = /*#__PURE__*/function () {
  function CalloutManager(container) {
    var _this = this;

    _classCallCheck(this, CalloutManager);

    _defineProperty(this, "_container", null);

    _defineProperty(this, "_callouts", {});

    _defineProperty(this, "_calloutDefinitions", []);

    _defineProperty(this, "_currentlyRemoving", []);

    _defineProperty(this, "onAutoRemove", null);

    _defineProperty(this, "autoRemoveCallouts", true);

    _defineProperty(this, "autoRemoveThreshholdSimilarity", 0.5);

    _defineProperty(this, "autoRemoveThreshholdMargins", {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    });

    if (container && container.tagName === 'DIV') {
      this._container = container;
      this._container.style.pointerEvents = 'none';
      this.resizeObserver = new ResizeObserver(function (entries) {
        if (entries.length) {
          _this.bounds = entries[0].contentRect;
        }
      });
      this.resizeObserver.observe(this._container);
    } else {
      console.warn('CalloutManager expects a DIV element as a container.');
    }

    this._removeCalloutComplete = this._removeCalloutComplete.bind(this);
  }

  _createClass(CalloutManager, [{
    key: "release",
    value: function release() {
      this.resizeObserver.disconnect();
    }
  }, {
    key: "addCallout",
    value: function addCallout(definition) {
      this.replaceCallouts([].concat(_toConsumableArray(this._calloutDefinitions), [definition]));
    }
  }, {
    key: "removeCallout",
    value: function removeCallout(definition) {
      var index = this._calloutDefinitions.findIndex(function (def) {
        return def.id === definition.id;
      });

      if (index === -1) return;
      this.replaceCallouts([].concat(_toConsumableArray(this._calloutDefinitions.slice(0, index)), _toConsumableArray(this._calloutDefinitions.slice(index + 1))));
    }
  }, {
    key: "replaceCallouts",
    value: function replaceCallouts(calloutDefinitions) {
      var _this2 = this;

      var addCalloutDefs = calloutDefinitions.filter(function (c) {
        return !_this2._calloutDefinitions.includes(c);
      });

      var removeCalloutDefs = this._calloutDefinitions.filter(function (c) {
        return !calloutDefinitions.includes(c);
      });

      var newlyRemovedCalloutDefs = removeCalloutDefs.filter(function (c) {
        return !_this2._currentlyRemoving.includes(c);
      });
      this._currentlyRemoving = [].concat(_toConsumableArray(this._currentlyRemoving), _toConsumableArray(newlyRemovedCalloutDefs));
      this._calloutDefinitions = [].concat(_toConsumableArray(this._calloutDefinitions), _toConsumableArray(addCalloutDefs));
      var addedCallouts = addCalloutDefs.map(function (def) {
        var CalloutClass = def.calloutClass;

        if (CalloutClass) {
          return new CalloutClass(def);
        }

        return undefined;
      }).filter(function (c) {
        return c;
      });
      addedCallouts.forEach(function (callout) {
        _this2._callouts[callout.definition.id] = callout;

        _this2._container.appendChild(callout.element);

        callout.animateIn();
      });
      newlyRemovedCalloutDefs.map(function (def) {
        return _this2._callouts[def.id];
      }).forEach(function (callout) {
        callout.animateOut(_this2._removeCalloutComplete);
      });
    }
  }, {
    key: "removeAllCallouts",
    value: function removeAllCallouts() {
      this.replaceCallouts([]);
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this3 = this;

      if (!this.positionProvider) return;
      var toAutoRemove = [];
      var positions = this.positionProvider(this._calloutDefinitions);

      this._calloutDefinitions.forEach(function (def, index) {
        var ref = _this3._callouts[def.id];
        var position = positions[index];

        if (ref) {
          ref.setPosition(position);
          ref.update(time);
        }

        if (_this3.autoRemoveCallouts) {
          var similarity = _this3.autoRemoveThreshholdSimilarity;
          var margins = _this3.autoRemoveThreshholdMargins;

          if (position.world.similarityToCameraVector < similarity) {
            toAutoRemove.push(def);
          } else if (position.screen.x < margins.left || position.screen.x > _this3.bounds.width - margins.right || position.screen.y < margins.top || position.screen.y > _this3.bounds.height - margins.bottom) {
            toAutoRemove.push(def);
          }
        }
      });

      toAutoRemove.forEach(function (def) {
        _this3.removeCallout(def);

        if (_this3.onAutoRemove) {
          _this3.onAutoRemove(def);
        }
      });
    }
  }, {
    key: "_removeCalloutComplete",
    value: function _removeCalloutComplete(callout) {
      var key = callout.definition.id;

      var index = this._calloutDefinitions.findIndex(function (def) {
        return def.id === key;
      });

      if (index === -1) return; // TODO: consider steps to ensure uniqueness in this._calloutDefinitions

      this._calloutDefinitions = [].concat(_toConsumableArray(this._calloutDefinitions.slice(0, index)), _toConsumableArray(this._calloutDefinitions.slice(index + 1)));
      index = this._currentlyRemoving.findIndex(function (def) {
        return def.id === key;
      });
      this._currentlyRemoving = [].concat(_toConsumableArray(this._currentlyRemoving.slice(0, index)), _toConsumableArray(this._currentlyRemoving.slice(index + 1)));

      this._container.removeChild(this._callouts[key].element);

      this._callouts[key].release();

      delete this._callouts[key];
    }
  }, {
    key: "drawables",
    get: function get() {
      var _this4 = this;

      return this._calloutDefinitions.map(function (def) {
        return _this4._callouts[def.id].drawables;
      });
    }
  }]);

  return CalloutManager;
}();

var GlobeKitView = /*#__PURE__*/function () {
  /**
   * @private
   * @member _wasmLoaded
   *
   *
   */

  /**
   * @member shouldDraw
   *
   * Flag to draw or not draw
   *
  */
  function GlobeKitView(_canvas, options, onInitCB) {
    var _this = this;

    _classCallCheck(this, GlobeKitView);

    _defineProperty(this, "_wasmLoaded", false);

    _defineProperty(this, "isInit", false);

    _defineProperty(this, "shouldDraw", false);

    _defineProperty(this, "isInteractive", false);

    _defineProperty(this, "renderer", null);

    _defineProperty(this, "scene", null);

    _defineProperty(this, "_alt", 4);

    _defineProperty(this, "tartgetDrawable", null);

    _defineProperty(this, "calloutManager", null);

    _defineProperty(this, "interactionController", null);

    _defineProperty(this, "boundingRect", null);

    _defineProperty(this, "_onWasmLoad", []);

    _defineProperty(this, "drawqueue", []);

    _defineProperty(this, "loadWasm", function (wasmPath) {
      var wasmSrc = wasmPath === undefined ? './gkweb_bg.wasm' : wasmPath;
      init(wasmSrc).then(function () {
        _this._wasmLoaded = true;
        init_gkweb();

        _this._onWasmLoad.forEach(function (el) {
          el();
        });

        _this._onInitCB();
      });
    });

    _defineProperty(this, "init", function (canvas) {
      _this.renderer = new Renderer(canvas);

      _this.renderer.init();

      _this.scene = new Scene(canvas.width, canvas.height);
      _this.interactionController = new InteractionController(canvas, _this.scene.camera);
      _this.interactionController.onTapCB = _this.onTapCB;
      window.onresize = _this.onResizeCB;
      _this.isInit = true;
    });

    _defineProperty(this, "_onInitCB", function () {
      _this.onInitCB(_this);

      _this.shouldDraw = true;

      _this.renderloop(0);
    });

    _defineProperty(this, "onResizeCB", function () {
      _this.boundingRect = _this.renderer.gl.canvas.getBoundingClientRect();
      resizeCanvasToDisplaySize(_this.renderer.gl.canvas);

      _this.scene.resize(_this.boundingRect.width, _this.boundingRect.height);

      _this.renderer.resize(_this.boundingRect.width, _this.boundingRect.height);

      _this.interactionController.resize();
    });

    _defineProperty(this, "setCameratargetDrawable", function (targetDrawable) {
      _this.interactionController.hitTarget = targetDrawable.hitTest;
    });

    _defineProperty(this, "setAbsMovementModelTo", function (lat, lon, alt) {
      _this.interactionController.movementModel.rotCurrent[0] = lat * (-Math.PI / 180.0);
      _this.interactionController.movementModel.rotCurrent[1] = lon * (Math.PI / 180.0);
      _this.interactionController.movementModel.rotTarget[0] = lat * (-Math.PI / 180.0);
      _this.interactionController.movementModel.rotTarget[1] = lon * (Math.PI / 180.0);
      if (alt !== undefined) _this._alt = alt;
    });

    _defineProperty(this, "setMovementModelTo", function (lat, lon, alt) {
      _this.interactionController.movementModel.rotTarget[0] = lat * (-Math.PI / 180.0);
      _this.interactionController.movementModel.rotTarget[1] = lon * (Math.PI / 180.0);
      if (alt !== undefined) _this._alt = alt;
    });

    _defineProperty(this, "moveCameraTo", function (lat, lon, alt) {
      var pos = GKUtils.worldFromLatLon(lat, lon, alt);

      _this.scene.camera.setPosition(pos);
    });

    _defineProperty(this, "addDrawable", function (drawable, cb) {
      if (!(drawable instanceof Drawable)) {
        return false;
      }

      if (drawable instanceof Globe && _this.tartgetDrawable === null) {
        _this.tartgetDrawable = drawable;
        _this.interactionController.target = drawable;
      }

      drawable.init(_this.renderer.gl, cb);

      _this.drawqueue.push(drawable);

      if (_this._wasmLoaded) {
        drawable.createCollisionGeo();
      } else {
        _this._onWasmLoad.push(drawable.createCollisionGeo);
      }

      return true;
    });

    _defineProperty(this, "renderloop", function (time) {
      var scaledTime = time / 10000.0;
      if (!_this.shouldDraw) return;

      _this.interactionController.update();

      var lat = -_this.interactionController.movementModel.camPitch * (180 / Math.PI);
      var lon = _this.interactionController.movementModel.camYaw * (180 / Math.PI);

      _this.updateCameraFunction(scaledTime);

      _this.moveCameraTo(lat, lon, _this._alt);

      _this.renderer.prepareRenderFrame();

      _this.scene.update(scaledTime);

      var sceneProps = _this.scene.getUniforms(scaledTime);

      _this.drawqueue.forEach(function (el) {
        el.update(_this.renderer.gl, sceneProps, scaledTime);
      });

      if (_this.calloutManager) {
        _this.calloutManager.update(scaledTime);
      }

      if (_this.onUpdate) {
        _this.onUpdate();
      }

      _this.drawqueue.forEach(function (el) {
        el.draw(_this.renderer.gl);
      });

      requestAnimationFrame(_this.renderloop);
    });

    _defineProperty(this, "onTapCB", function (x, y) {
      var xNormalized = x / _this.boundingRect.width;
      var yNormalized = (_this.boundingRect.height - y) / _this.boundingRect.height;

      var ray = _this.scene.camera.getRayFromScreen(xNormalized, yNormalized);

      var coords = _this.targetLatLon(ray);

      var collisionList = {};
      collisionList.drawables = [];

      if (coords) {
        collisionList.lat = coords.lat;
        collisionList.lon = coords.lon;
      }

      _this.drawqueue.forEach(function (el) {
        if (el.isInteractive && el.isSelectable) {
          var drawableEvent = {};
          drawableEvent.obj = el;
          console.log(el.hitTest(ray)); // This returns information about where the raycast hit.

          var collision = el.rayCastFrom(ray);

          if (collision) {
            // This function takes the point data and turns it into drawable specific selection
            if (el.isSelectable) {
              drawableEvent.selection = el.onSelection(coords.lat, coords.lon, collision);
            }
          }

          collisionList.drawables.push(drawableEvent);
        }
      });

      _this.userDefinedSelection(collisionList);
    });

    _defineProperty(this, "targetLatLon", function (ray) {
      var coords;

      var collision = _this.tartgetDrawable.rayCastFrom(ray);

      if (collision !== false) coords = GKUtils.latLonFromWorld(collision.point);
      return coords;
    });

    _defineProperty(this, "onMouseMoveCB", function (x, y) {
      var xNormalized = x / _this.boundingRect.width;
      var yNormalized = (_this.boundingRect.height - y) / _this.boundingRect.height;

      var ray = _this.scene.camera.getRayFromScreen(xNormalized, yNormalized);

      _this.drawqueue.forEach(function (el) {
        if (el.isInteractive && el.isHoverable) {
          // This returns information about where the raycast hit.
          var collision = el.rayCastFrom(ray);

          if (collision) {
            // This function takes the point data and turns it into drawable specific selection
            if (el.isHoverable) el.onHover(collision);
          }
        }
      });
    });

    _defineProperty(this, "updateCameraFunction", function (time) {});

    _defineProperty(this, "moveCameraToLatLon", function (lat, lon, alt) {});

    _defineProperty(this, "getPosition", function (lat, lon, alt) {
      if (!alt) {
        alt = 0;
      }

      var worldCoord = GKUtils.worldFromLatLon(lat, lon, alt);

      var screenCoord = _this.scene.camera.project(worldCoord);

      screenCoord[0] *= _this.boundingRect.width;
      screenCoord[1] *= _this.boundingRect.height;
      screenCoord[1] = _this.boundingRect.height - screenCoord[1];

      var sceneCenterScreenCoord = _this.scene.camera.project(_this.scene.camera.target);

      sceneCenterScreenCoord[0] *= _this.boundingRect.width;
      sceneCenterScreenCoord[1] *= _this.boundingRect.height;
      sceneCenterScreenCoord[1] = _this.boundingRect.height - sceneCenterScreenCoord[1];
      var diff = [];
      diff.push(screenCoord[0] - sceneCenterScreenCoord[0]);
      diff.push(screenCoord[1] - sceneCenterScreenCoord[1]);
      var nWorldCoord = create$3();
      normalize$1(nWorldCoord, worldCoord);
      var cameraPos = _this.scene.camera.eye;
      var nCameraPos = create$3();
      normalize$1(nCameraPos, cameraPos); // similarity === cosTheta where:
      //       1: exactly similar
      //      -1: exactly opposite

      var similarity = dot(nWorldCoord, nCameraPos);
      return {
        screen: {
          x: screenCoord[0],
          y: screenCoord[1]
        },
        world: {
          x: diff[0],
          y: diff[1],
          similarityToCameraVector: similarity
        }
      };
    });

    _defineProperty(this, "registerCalloutManager", function (calloutManager) {
      if (!calloutManager || !calloutManager instanceof CalloutManager) {
        console.warn('registerCalloutManager must be passed an instance of CalloutManager');
        return;
      }

      calloutManager.positionProvider = function (callouts) {
        return callouts.map(function (c) {
          return _this.getPosition(c.latitude, c.longitude, c.altitude);
        });
      };

      _this.calloutManager = calloutManager;
    });

    _defineProperty(this, "computeGlobeSize", function () {
      var vFOV = _this.scene.camera.fov;
      var dist = distance(_this.scene.camera.eye, _this.tartgetDrawable.translation);
      var radius = 1;
      var targetAngle = 2 * Math.asin(radius / dist);
      var height = targetAngle / vFOV * _this.boundingRect.height;
      console.log(dist, height, _this.boundingRect.height);
    });

    _defineProperty(this, "setGlobeSize", function (size) {
      var vFOV = _this.scene.camera.fov;
      var radius = 1;
      var dist = Math.sin(size / _this.boundingRect.height * vFOV / 2) * radius;
      console.log(dist);
    });

    _defineProperty(this, "setAmbient", function (bool) {
      _this.interactionController.movementModel.hasAmbient = bool;
    });

    var gkOptions = options === undefined ? {} : options;
    if (onInitCB) this.onInitCB = onInitCB;
    this.boundingRect = _canvas.getBoundingClientRect();
    this.init(_canvas);
    this.loadWasm(gkOptions.wasmPath);
  }

  _createClass(GlobeKitView, [{
    key: "isWebGL1",
    get: function get() {
      if (this.gl) {
        return isWebGL1(this.gl);
      }

      return false;
    }
  }, {
    key: "isWebGL2",
    get: function get() {
      if (this.gl) {
        return isWebGL2(this.gl);
      }

      return false;
    }
  }]);

  return GlobeKitView;
}();

var kdTreeMin = createCommonjsModule(function (module, exports) {
/**
 * k-d Tree JavaScript - V 1.01
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */!function(t,n){n(exports);}(commonjsGlobal,function(t){function n(t,n,o){this.obj=t,this.left=null,this.right=null,this.parent=o,this.dimension=n;}function o(t){this.content=[],this.scoreFunction=t;}o.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1);},pop:function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),t},peek:function(){return this.content[0]},remove:function(t){for(var n=this.content.length,o=0;o<n;o++)if(this.content[o]==t){var i=this.content.pop();return void(o!=n-1&&(this.content[o]=i,this.scoreFunction(i)<this.scoreFunction(t)?this.bubbleUp(o):this.sinkDown(o)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var n=this.content[t];t>0;){var o=Math.floor((t+1)/2)-1,i=this.content[o];if(!(this.scoreFunction(n)<this.scoreFunction(i)))break;this.content[o]=n,this.content[t]=i,t=o;}},sinkDown:function(t){for(var n=this.content.length,o=this.content[t],i=this.scoreFunction(o);;){var e=2*(t+1),r=e-1,l=null;if(r<n){var u=this.content[r],h=this.scoreFunction(u);h<i&&(l=r);}if(e<n){var s=this.content[e];this.scoreFunction(s)<(null==l?i:h)&&(l=e);}if(null==l)break;this.content[t]=this.content[l],this.content[l]=o,t=l;}}},t.kdTree=function(t,i,e){function r(t,o,i){var l,u,h=o%e.length;return 0===t.length?null:1===t.length?new n(t[0],h,i):(t.sort(function(t,n){return t[e[h]]-n[e[h]]}),l=Math.floor(t.length/2),u=new n(t[l],h,i),u.left=r(t.slice(0,l),o+1,u),u.right=r(t.slice(l+1),o+1,u),u)}var l=this;Array.isArray(t)?this.root=r(t,0,null):function(t){function n(t){t.left&&(t.left.parent=t,n(t.left)),t.right&&(t.right.parent=t,n(t.right));}l.root=t,n(l.root);}(t),this.toJSON=function(t){t||(t=this.root);var o=new n(t.obj,t.dimension,null);return t.left&&(o.left=l.toJSON(t.left)),t.right&&(o.right=l.toJSON(t.right)),o},this.insert=function(t){function o(n,i){if(null===n)return i;var r=e[n.dimension];return t[r]<n.obj[r]?o(n.left,n):o(n.right,n)}var i,r,l=o(this.root,null);null!==l?(i=new n(t,(l.dimension+1)%e.length,l),r=e[l.dimension],t[r]<l.obj[r]?l.left=i:l.right=i):this.root=new n(t,0,null);},this.remove=function(t){function n(o){if(null===o)return null;if(o.obj===t)return o;var i=e[o.dimension];return t[i]<o.obj[i]?n(o.left):n(o.right)}function o(t){function n(t,o){var i,r,l,u,h;return null===t?null:(i=e[o],t.dimension===o?null!==t.left?n(t.left,o):t:(r=t.obj[i],l=n(t.left,o),u=n(t.right,o),h=t,null!==l&&l.obj[i]<r&&(h=l),null!==u&&u.obj[i]<h.obj[i]&&(h=u),h))}var i,r,u;if(null===t.left&&null===t.right)return null===t.parent?void(l.root=null):(u=e[t.parent.dimension],void(t.obj[u]<t.parent.obj[u]?t.parent.left=null:t.parent.right=null));null!==t.right?(r=(i=n(t.right,t.dimension)).obj,o(i),t.obj=r):(r=(i=n(t.left,t.dimension)).obj,o(i),t.right=t.left,t.left=null,t.obj=r);}var i;null!==(i=n(l.root))&&o(i);},this.nearest=function(t,n,r){function u(o){function r(t,o){f.push([t,o]),f.size()>n&&f.pop();}var l,h,s,c,a=e[o.dimension],g=i(t,o.obj),p={};for(c=0;c<e.length;c+=1)c===o.dimension?p[e[c]]=t[e[c]]:p[e[c]]=o.obj[e[c]];h=i(p,o.obj),null!==o.right||null!==o.left?(u(l=null===o.right?o.left:null===o.left?o.right:t[a]<o.obj[a]?o.left:o.right),(f.size()<n||g<f.peek()[1])&&r(o,g),(f.size()<n||Math.abs(h)<f.peek()[1])&&null!==(s=l===o.left?o.right:o.left)&&u(s)):(f.size()<n||g<f.peek()[1])&&r(o,g);}var h,s,f;if(f=new o(function(t){return -t[1]}),r)for(h=0;h<n;h+=1)f.push([null,r]);for(l.root&&u(l.root),s=[],h=0;h<Math.min(n,f.content.length);h+=1)f.content[h][0]&&s.push([f.content[h][0].obj,f.content[h][1]]);return s},this.balanceFactor=function(){function t(n){return null===n?0:Math.max(t(n.left),t(n.right))+1}function n(t){return null===t?0:n(t.left)+n(t.right)+1}return t(l.root)/(Math.log(n(l.root))/Math.log(2))};},t.BinaryHeap=o;});
});

var DataStore = /*#__PURE__*/function () {
  function DataStore() {
    var _this = this;

    _classCallCheck(this, DataStore);

    _defineProperty(this, "data", []);

    _defineProperty(this, "types", []);

    _defineProperty(this, "lastElementId", void 0);

    _defineProperty(this, "kdtree", null);

    _defineProperty(this, "addGeojson", function (data) {
      if (data.type !== 'FeatureCollection') return;
      if (!(data.features instanceof Array)) return;
      data.features.forEach(function (element, index) {
        var datapoint = {
          id: "_".concat(Math.random().toString(36).substr(2, 9)),
          lat: element.geometry.coordinates[1],
          lon: element.geometry.coordinates[0],
          properties: element.properties
        };

        _this.data.push(datapoint);

        _this.lastElementId = index;
      });
      _this.kdtree = new kdTreeMin.kdTree(_this.data, GKUtils.distanceBetweenPoints, ['lat', 'lon']);
    });

    _defineProperty(this, "addGeojsonPoint", function (geojsonPoint) {
      var lat = geojsonPoint.geometry.coordinates[1];
      var lon = geojsonPoint.geometry.coordinates[0];
      var props = geojsonPoint.properties;
      return _this.addPoint(lat, lon, props);
    });

    _defineProperty(this, "addPoint", function (lat, lon, data) {
      var datapoint = {
        id: "_".concat(Math.random().toString(36).substr(2, 9)),
        lat: lat,
        lon: lon,
        properties: data
      };

      _this.data.push(datapoint);

      _this.lastElementId = datapoint.id;
      return datapoint;
    });

    _defineProperty(this, "updateDataset", function (newData) {
      newData.features.forEach(function (dataPoint) {
        var currentData = _this.data.find(function (el) {
          var lat = el.lat === dataPoint.geometry.coordinates[1];
          var lon = el.lon === dataPoint.geometry.coordinates[0];
          return lat && lon;
        });

        if (currentData === undefined) {
          _this.addGeojsonPoint(dataPoint);
        } else {
          currentData.properties = dataPoint.properties;
        }
      });
    });

    _defineProperty(this, "deleteDataset", function () {
      _this.data = [];
    });

    _defineProperty(this, "getNearest", function (lat, lon, maxDistance, maxCount) {
      var nearest = _this.kdtree.nearest({
        lat: lat,
        lon: lon
      }, maxCount, maxDistance);

      if (nearest[0] !== undefined) {
        return nearest;
      }

      return undefined;
    });

    _defineProperty(this, "getElementFromId", function (id) {
      return _this.data.find(function (element) {
        return element.id === id;
      });
    });

    _defineProperty(this, "getElementFromKey", function (key, value) {
      return _this.data.find(function (element) {
        return element.properties[key] === value;
      });
    });

    _defineProperty(this, "getTypeList", function () {
      var types = [];
      types.push([_this.data[0]]);

      _this.data.forEach(function (el) {
        var elProps = Object.keys(el.properties);
        var foundType = false;
        types.forEach(function (type) {
          var typeProps = Object.keys(type[0].properties);
          var elInType = GKUtils.isSubSet(elProps, typeProps);
          var typeInEl = GKUtils.isSubSet(typeProps, elProps);

          if (elInType && typeInEl) {
            type.push(el);
            foundType = true;
          }
        });

        if (foundType === false) {
          types.push([el]);
        }
      });

      return types;
    });

    _defineProperty(this, "getMaxForKey", function (key) {
      var max = -Infinity;
      var id; // Check that property is a number

      if (typeof _this.data[0].properties[key] !== 'number') {
        console.warn('Cannot compare non-numbers');
        return undefined;
      }

      _this.data.forEach(function (el) {
        var value = el.properties[key];

        if (value >= max) {
          max = value;
          id = el.id;
        }
      });

      return {
        max: max,
        id: id
      };
    });

    _defineProperty(this, "getMinForKey", function (key) {
      var min = Infinity;
      var id; // Check that property is a number

      if (typeof _this.data[0].properties[key] !== 'number') {
        console.warn('Cannot compare non-numbers');
        return undefined;
      }

      _this.data.forEach(function (el) {
        var value = el.properties[key];

        if (value <= min) {
          min = value;
          id = el.id;
        }
      });

      return {
        min: min,
        id: id
      };
    });

    _defineProperty(this, "getRangeForKey", function (key) {
      var min = _this.getMinForKey(key);

      var max = _this.getMaxForKey(key);

      return {
        min: min,
        max: max
      };
    });

    _defineProperty(this, "mapKeyToRange", function (key, min, max) {
      var ranges = _this.getRangeForKey(key);

      return _this.data.map(function (el) {
        var v = el.properties[key];
        var n = (v - ranges.min.min) / (ranges.max.max - ranges.min.min) * (max - min) + min;
        return {
          id: el.properties.region_id,
          value: n
        };
      });
    });
  }

  _createClass(DataStore, [{
    key: "isHomogeneous",
    get: function get() {
      return this.getTypeList().length === 1;
    }
  }]);

  return DataStore;
}();

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwoKZnVuY3Rpb24gX2xvYWRXYXNtTW9kdWxlIChzeW5jLCBzcmMsIGltcG9ydHMpIHsKICAgICAgICB2YXIgYnVmID0gbnVsbAogICAgICAgIHZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAhPSBudWxsICYmIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPSBudWxsCiAgICAgICAgaWYgKGlzTm9kZSkgewogICAgICAgICAgYnVmID0gQnVmZmVyLmZyb20oc3JjLCAnYmFzZTY0JykKICAgICAgICB9IGVsc2UgewogICAgICAgICAgdmFyIHJhdyA9IGdsb2JhbFRoaXMuYXRvYihzcmMpCiAgICAgICAgICB2YXIgcmF3TGVuZ3RoID0gcmF3Lmxlbmd0aAogICAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkobmV3IEFycmF5QnVmZmVyKHJhd0xlbmd0aCkpCiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgIGJ1ZltpXSA9IHJhdy5jaGFyQ29kZUF0KGkpCiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBpZiAoaW1wb3J0cyAmJiAhc3luYykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJ1ZiwgaW1wb3J0cykKICAgICAgICB9IGVsc2UgaWYgKCFpbXBvcnRzICYmICFzeW5jKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuY29tcGlsZShidWYpCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHZhciBtb2QgPSBuZXcgV2ViQXNzZW1ibHkuTW9kdWxlKGJ1ZikKICAgICAgICAgIHJldHVybiBpbXBvcnRzID8gbmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKG1vZCwgaW1wb3J0cykgOiBtb2QKICAgICAgICB9CiAgICAgIH0KZnVuY3Rpb24gX3R5cGVvZihvYmopIHsKICAiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2YiOwoKICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAic3ltYm9sIikgewogICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHsKICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7CiAgICB9OwogIH0gZWxzZSB7CiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikgewogICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gInN5bWJvbCIgOiB0eXBlb2Ygb2JqOwogICAgfTsKICB9CgogIHJldHVybiBfdHlwZW9mKG9iaik7Cn0KCmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsKICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgewogICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIik7CiAgfQp9CgpmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7CiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgewogICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsKICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsKICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsKICAgIGlmICgidmFsdWUiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOwogICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOwogIH0KfQoKZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgewogIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOwogIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsKICByZXR1cm4gQ29uc3RydWN0b3I7Cn0KCmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsKICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOwp9CgpmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7CiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7Cn0KCmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgewogIGlmICh0eXBlb2YgU3ltYm9sICE9PSAidW5kZWZpbmVkIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsKfQoKZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgewogIGlmICghbykgcmV0dXJuOwogIGlmICh0eXBlb2YgbyA9PT0gInN0cmluZyIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOwogIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsKICBpZiAobiA9PT0gIk9iamVjdCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsKICBpZiAobiA9PT0gIk1hcCIgfHwgbiA9PT0gIlNldCIpIHJldHVybiBBcnJheS5mcm9tKG8pOwogIGlmIChuID09PSAiQXJndW1lbnRzIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7Cn0KCmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7CiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7CgogIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsKCiAgcmV0dXJuIGFycjI7Cn0KCmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsKICB0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKTsKfQoKLyoqDQogKiBDb21tb24gdXRpbGl0aWVzDQogKiBAbW9kdWxlIGdsTWF0cml4DQogKi8KLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHMKdmFyIEVQU0lMT04gPSAwLjAwMDAwMTsKdmFyIEFSUkFZX1RZUEUgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyA/IEZsb2F0MzJBcnJheSA6IEFycmF5OwppZiAoIU1hdGguaHlwb3QpIE1hdGguaHlwb3QgPSBmdW5jdGlvbiAoKSB7CiAgdmFyIHkgPSAwLAogICAgICBpID0gYXJndW1lbnRzLmxlbmd0aDsKCiAgd2hpbGUgKGktLSkgewogICAgeSArPSBhcmd1bWVudHNbaV0gKiBhcmd1bWVudHNbaV07CiAgfQoKICByZXR1cm4gTWF0aC5zcXJ0KHkpOwp9OwoKLyoqDQogKiAzeDMgTWF0cml4DQogKiBAbW9kdWxlIG1hdDMNCiAqLwoKLyoqDQogKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDMNCiAqDQogKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeA0KICovCgpmdW5jdGlvbiBjcmVhdGUoKSB7CiAgdmFyIG91dCA9IG5ldyBBUlJBWV9UWVBFKDkpOwoKICBpZiAoQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHsKICAgIG91dFsxXSA9IDA7CiAgICBvdXRbMl0gPSAwOwogICAgb3V0WzNdID0gMDsKICAgIG91dFs1XSA9IDA7CiAgICBvdXRbNl0gPSAwOwogICAgb3V0WzddID0gMDsKICB9CgogIG91dFswXSA9IDE7CiAgb3V0WzRdID0gMTsKICBvdXRbOF0gPSAxOwogIHJldHVybiBvdXQ7Cn0KCi8qKg0KICogMyBEaW1lbnNpb25hbCBWZWN0b3INCiAqIEBtb2R1bGUgdmVjMw0KICovCgovKioNCiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzMNCiAqDQogKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yDQogKi8KCmZ1bmN0aW9uIGNyZWF0ZSQxKCkgewogIHZhciBvdXQgPSBuZXcgQVJSQVlfVFlQRSgzKTsKCiAgaWYgKEFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7CiAgICBvdXRbMF0gPSAwOwogICAgb3V0WzFdID0gMDsKICAgIG91dFsyXSA9IDA7CiAgfQoKICByZXR1cm4gb3V0Owp9Ci8qKg0KICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMw0KICoNCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mDQogKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYQ0KICovCgpmdW5jdGlvbiBsZW5ndGgoYSkgewogIHZhciB4ID0gYVswXTsKICB2YXIgeSA9IGFbMV07CiAgdmFyIHogPSBhWzJdOwogIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopOwp9Ci8qKg0KICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlcw0KICoNCiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50DQogKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudA0KICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnQNCiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3INCiAqLwoKZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7CiAgdmFyIG91dCA9IG5ldyBBUlJBWV9UWVBFKDMpOwogIG91dFswXSA9IHg7CiAgb3V0WzFdID0geTsKICBvdXRbMl0gPSB6OwogIHJldHVybiBvdXQ7Cn0KLyoqDQogKiBBZGRzIHR3byB2ZWMzJ3MNCiAqDQogKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3Rvcg0KICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmQNCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZA0KICogQHJldHVybnMge3ZlYzN9IG91dA0KICovCgpmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7CiAgb3V0WzBdID0gYVswXSArIGJbMF07CiAgb3V0WzFdID0gYVsxXSArIGJbMV07CiAgb3V0WzJdID0gYVsyXSArIGJbMl07CiAgcmV0dXJuIG91dDsKfQovKioNCiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyDQogKg0KICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3INCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGUNCiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5DQogKiBAcmV0dXJucyB7dmVjM30gb3V0DQogKi8KCmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikgewogIG91dFswXSA9IGFbMF0gKiBiOwogIG91dFsxXSA9IGFbMV0gKiBiOwogIG91dFsyXSA9IGFbMl0gKiBiOwogIHJldHVybiBvdXQ7Cn0KLyoqDQogKiBOb3JtYWxpemUgYSB2ZWMzDQogKg0KICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3INCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemUNCiAqIEByZXR1cm5zIHt2ZWMzfSBvdXQNCiAqLwoKZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkgewogIHZhciB4ID0gYVswXTsKICB2YXIgeSA9IGFbMV07CiAgdmFyIHogPSBhWzJdOwogIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7CgogIGlmIChsZW4gPiAwKSB7CiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlPwogICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pOwogIH0KCiAgb3V0WzBdID0gYVswXSAqIGxlbjsKICBvdXRbMV0gPSBhWzFdICogbGVuOwogIG91dFsyXSA9IGFbMl0gKiBsZW47CiAgcmV0dXJuIG91dDsKfQovKioNCiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3MNCiAqDQogKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZA0KICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kDQogKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiDQogKi8KCmZ1bmN0aW9uIGRvdChhLCBiKSB7CiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTsKfQovKioNCiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3MNCiAqDQogKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3Rvcg0KICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmQNCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZA0KICogQHJldHVybnMge3ZlYzN9IG91dA0KICovCgpmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHsKICB2YXIgYXggPSBhWzBdLAogICAgICBheSA9IGFbMV0sCiAgICAgIGF6ID0gYVsyXTsKICB2YXIgYnggPSBiWzBdLAogICAgICBieSA9IGJbMV0sCiAgICAgIGJ6ID0gYlsyXTsKICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieTsKICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBiejsKICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDsKICByZXR1cm4gb3V0Owp9Ci8qKg0KICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmxlbmd0aH0NCiAqIEBmdW5jdGlvbg0KICovCgp2YXIgbGVuID0gbGVuZ3RoOwovKioNCiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy4NCiAqDQogKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3Zlcg0KICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWQNCiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkNCiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjM3MgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5DQogKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXkNCiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm4NCiAqIEByZXR1cm5zIHtBcnJheX0gYQ0KICogQGZ1bmN0aW9uDQogKi8KCnZhciBmb3JFYWNoID0gZnVuY3Rpb24gKCkgewogIHZhciB2ZWMgPSBjcmVhdGUkMSgpOwogIHJldHVybiBmdW5jdGlvbiAoYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7CiAgICB2YXIgaSwgbDsKCiAgICBpZiAoIXN0cmlkZSkgewogICAgICBzdHJpZGUgPSAzOwogICAgfQoKICAgIGlmICghb2Zmc2V0KSB7CiAgICAgIG9mZnNldCA9IDA7CiAgICB9CgogICAgaWYgKGNvdW50KSB7CiAgICAgIGwgPSBNYXRoLm1pbihjb3VudCAqIHN0cmlkZSArIG9mZnNldCwgYS5sZW5ndGgpOwogICAgfSBlbHNlIHsKICAgICAgbCA9IGEubGVuZ3RoOwogICAgfQoKICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7CiAgICAgIHZlY1swXSA9IGFbaV07CiAgICAgIHZlY1sxXSA9IGFbaSArIDFdOwogICAgICB2ZWNbMl0gPSBhW2kgKyAyXTsKICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7CiAgICAgIGFbaV0gPSB2ZWNbMF07CiAgICAgIGFbaSArIDFdID0gdmVjWzFdOwogICAgICBhW2kgKyAyXSA9IHZlY1syXTsKICAgIH0KCiAgICByZXR1cm4gYTsKICB9Owp9KCk7CgovKioNCiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yDQogKiBAbW9kdWxlIHZlYzQNCiAqLwoKLyoqDQogKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0DQogKg0KICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3Rvcg0KICovCgpmdW5jdGlvbiBjcmVhdGUkMigpIHsKICB2YXIgb3V0ID0gbmV3IEFSUkFZX1RZUEUoNCk7CgogIGlmIChBUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkgewogICAgb3V0WzBdID0gMDsKICAgIG91dFsxXSA9IDA7CiAgICBvdXRbMl0gPSAwOwogICAgb3V0WzNdID0gMDsKICB9CgogIHJldHVybiBvdXQ7Cn0KLyoqDQogKiBOb3JtYWxpemUgYSB2ZWM0DQogKg0KICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3INCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemUNCiAqIEByZXR1cm5zIHt2ZWM0fSBvdXQNCiAqLwoKZnVuY3Rpb24gbm9ybWFsaXplJDEob3V0LCBhKSB7CiAgdmFyIHggPSBhWzBdOwogIHZhciB5ID0gYVsxXTsKICB2YXIgeiA9IGFbMl07CiAgdmFyIHcgPSBhWzNdOwogIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdzsKCiAgaWYgKGxlbiA+IDApIHsKICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTsKICB9CgogIG91dFswXSA9IHggKiBsZW47CiAgb3V0WzFdID0geSAqIGxlbjsKICBvdXRbMl0gPSB6ICogbGVuOwogIG91dFszXSA9IHcgKiBsZW47CiAgcmV0dXJuIG91dDsKfQovKioNCiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy4NCiAqDQogKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3Zlcg0KICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWQNCiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkNCiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjNHMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5DQogKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXkNCiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm4NCiAqIEByZXR1cm5zIHtBcnJheX0gYQ0KICogQGZ1bmN0aW9uDQogKi8KCnZhciBmb3JFYWNoJDEgPSBmdW5jdGlvbiAoKSB7CiAgdmFyIHZlYyA9IGNyZWF0ZSQyKCk7CiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHsKICAgIHZhciBpLCBsOwoKICAgIGlmICghc3RyaWRlKSB7CiAgICAgIHN0cmlkZSA9IDQ7CiAgICB9CgogICAgaWYgKCFvZmZzZXQpIHsKICAgICAgb2Zmc2V0ID0gMDsKICAgIH0KCiAgICBpZiAoY291bnQpIHsKICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7CiAgICB9IGVsc2UgewogICAgICBsID0gYS5sZW5ndGg7CiAgICB9CgogICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHsKICAgICAgdmVjWzBdID0gYVtpXTsKICAgICAgdmVjWzFdID0gYVtpICsgMV07CiAgICAgIHZlY1syXSA9IGFbaSArIDJdOwogICAgICB2ZWNbM10gPSBhW2kgKyAzXTsKICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7CiAgICAgIGFbaV0gPSB2ZWNbMF07CiAgICAgIGFbaSArIDFdID0gdmVjWzFdOwogICAgICBhW2kgKyAyXSA9IHZlY1syXTsKICAgICAgYVtpICsgM10gPSB2ZWNbM107CiAgICB9CgogICAgcmV0dXJuIGE7CiAgfTsKfSgpOwoKLyoqDQogKiBRdWF0ZXJuaW9uDQogKiBAbW9kdWxlIHF1YXQNCiAqLwoKLyoqDQogKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IHF1YXQNCiAqDQogKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvbg0KICovCgpmdW5jdGlvbiBjcmVhdGUkMygpIHsKICB2YXIgb3V0ID0gbmV3IEFSUkFZX1RZUEUoNCk7CgogIGlmIChBUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkgewogICAgb3V0WzBdID0gMDsKICAgIG91dFsxXSA9IDA7CiAgICBvdXRbMl0gPSAwOwogIH0KCiAgb3V0WzNdID0gMTsKICByZXR1cm4gb3V0Owp9Ci8qKg0KICogU2V0cyBhIHF1YXQgZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYW5kIHJvdGF0aW9uIGF4aXMsDQogKiB0aGVuIHJldHVybnMgaXQuDQogKg0KICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uDQogKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyBhcm91bmQgd2hpY2ggdG8gcm90YXRlDQogKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zDQogKiBAcmV0dXJucyB7cXVhdH0gb3V0DQogKiovCgpmdW5jdGlvbiBzZXRBeGlzQW5nbGUob3V0LCBheGlzLCByYWQpIHsKICByYWQgPSByYWQgKiAwLjU7CiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpOwogIG91dFswXSA9IHMgKiBheGlzWzBdOwogIG91dFsxXSA9IHMgKiBheGlzWzFdOwogIG91dFsyXSA9IHMgKiBheGlzWzJdOwogIG91dFszXSA9IE1hdGguY29zKHJhZCk7CiAgcmV0dXJuIG91dDsKfQovKioNCiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXQNCiAqDQogKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24NCiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kDQogKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmQNCiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHMNCiAqIEByZXR1cm5zIHtxdWF0fSBvdXQNCiAqLwoKZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7CiAgLy8gYmVuY2htYXJrczoKICAvLyAgICBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXNsZXJwLWltcGxlbWVudGF0aW9ucwogIHZhciBheCA9IGFbMF0sCiAgICAgIGF5ID0gYVsxXSwKICAgICAgYXogPSBhWzJdLAogICAgICBhdyA9IGFbM107CiAgdmFyIGJ4ID0gYlswXSwKICAgICAgYnkgPSBiWzFdLAogICAgICBieiA9IGJbMl0sCiAgICAgIGJ3ID0gYlszXTsKICB2YXIgb21lZ2EsIGNvc29tLCBzaW5vbSwgc2NhbGUwLCBzY2FsZTE7IC8vIGNhbGMgY29zaW5lCgogIGNvc29tID0gYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ICsgYXcgKiBidzsgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpCgogIGlmIChjb3NvbSA8IDAuMCkgewogICAgY29zb20gPSAtY29zb207CiAgICBieCA9IC1ieDsKICAgIGJ5ID0gLWJ5OwogICAgYnogPSAtYno7CiAgICBidyA9IC1idzsKICB9IC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHMKCgogIGlmICgxLjAgLSBjb3NvbSA+IEVQU0lMT04pIHsKICAgIC8vIHN0YW5kYXJkIGNhc2UgKHNsZXJwKQogICAgb21lZ2EgPSBNYXRoLmFjb3MoY29zb20pOwogICAgc2lub20gPSBNYXRoLnNpbihvbWVnYSk7CiAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTsKICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTsKICB9IGVsc2UgewogICAgLy8gImZyb20iIGFuZCAidG8iIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlCiAgICAvLyAgLi4uIHNvIHdlIGNhbiBkbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uCiAgICBzY2FsZTAgPSAxLjAgLSB0OwogICAgc2NhbGUxID0gdDsKICB9IC8vIGNhbGN1bGF0ZSBmaW5hbCB2YWx1ZXMKCgogIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7CiAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTsKICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6OwogIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7CiAgcmV0dXJuIG91dDsKfQovKioNCiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIDN4MyByb3RhdGlvbiBtYXRyaXguDQogKg0KICogTk9URTogVGhlIHJlc3VsdGFudCBxdWF0ZXJuaW9uIGlzIG5vdCBub3JtYWxpemVkLCBzbyB5b3Ugc2hvdWxkIGJlIHN1cmUNCiAqIHRvIHJlbm9ybWFsaXplIHRoZSBxdWF0ZXJuaW9uIHlvdXJzZWxmIHdoZXJlIG5lY2Vzc2FyeS4NCiAqDQogKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24NCiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIHJvdGF0aW9uIG1hdHJpeA0KICogQHJldHVybnMge3F1YXR9IG91dA0KICogQGZ1bmN0aW9uDQogKi8KCmZ1bmN0aW9uIGZyb21NYXQzKG91dCwgbSkgewogIC8vIEFsZ29yaXRobSBpbiBLZW4gU2hvZW1ha2UncyBhcnRpY2xlIGluIDE5ODcgU0lHR1JBUEggY291cnNlIG5vdGVzCiAgLy8gYXJ0aWNsZSAiUXVhdGVybmlvbiBDYWxjdWx1cyBhbmQgRmFzdCBBbmltYXRpb24iLgogIHZhciBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07CiAgdmFyIGZSb290OwoKICBpZiAoZlRyYWNlID4gMC4wKSB7CiAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yCiAgICBmUm9vdCA9IE1hdGguc3FydChmVHJhY2UgKyAxLjApOyAvLyAydwoKICAgIG91dFszXSA9IDAuNSAqIGZSb290OwogICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgLy8gMS8oNHcpCgogICAgb3V0WzBdID0gKG1bNV0gLSBtWzddKSAqIGZSb290OwogICAgb3V0WzFdID0gKG1bNl0gLSBtWzJdKSAqIGZSb290OwogICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290OwogIH0gZWxzZSB7CiAgICAvLyB8d3wgPD0gMS8yCiAgICB2YXIgaSA9IDA7CiAgICBpZiAobVs0XSA+IG1bMF0pIGkgPSAxOwogICAgaWYgKG1bOF0gPiBtW2kgKiAzICsgaV0pIGkgPSAyOwogICAgdmFyIGogPSAoaSArIDEpICUgMzsKICAgIHZhciBrID0gKGkgKyAyKSAlIDM7CiAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApOwogICAgb3V0W2ldID0gMC41ICogZlJvb3Q7CiAgICBmUm9vdCA9IDAuNSAvIGZSb290OwogICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDsKICAgIG91dFtqXSA9IChtW2ogKiAzICsgaV0gKyBtW2kgKiAzICsgal0pICogZlJvb3Q7CiAgICBvdXRba10gPSAobVtrICogMyArIGldICsgbVtpICogMyArIGtdKSAqIGZSb290OwogIH0KCiAgcmV0dXJuIG91dDsKfQovKioNCiAqIE5vcm1hbGl6ZSBhIHF1YXQNCiAqDQogKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24NCiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gbm9ybWFsaXplDQogKiBAcmV0dXJucyB7cXVhdH0gb3V0DQogKiBAZnVuY3Rpb24NCiAqLwoKdmFyIG5vcm1hbGl6ZSQyID0gbm9ybWFsaXplJDE7Ci8qKg0KICogU2V0cyBhIHF1YXRlcm5pb24gdG8gcmVwcmVzZW50IHRoZSBzaG9ydGVzdCByb3RhdGlvbiBmcm9tIG9uZQ0KICogdmVjdG9yIHRvIGFub3RoZXIuDQogKg0KICogQm90aCB2ZWN0b3JzIGFyZSBhc3N1bWVkIHRvIGJlIHVuaXQgbGVuZ3RoLg0KICoNCiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvbi4NCiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBpbml0aWFsIHZlY3Rvcg0KICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIGRlc3RpbmF0aW9uIHZlY3Rvcg0KICogQHJldHVybnMge3F1YXR9IG91dA0KICovCgp2YXIgcm90YXRpb25UbyA9IGZ1bmN0aW9uICgpIHsKICB2YXIgdG1wdmVjMyA9IGNyZWF0ZSQxKCk7CiAgdmFyIHhVbml0VmVjMyA9IGZyb21WYWx1ZXMoMSwgMCwgMCk7CiAgdmFyIHlVbml0VmVjMyA9IGZyb21WYWx1ZXMoMCwgMSwgMCk7CiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIGEsIGIpIHsKICAgIHZhciBkb3QkMSA9IGRvdChhLCBiKTsKCiAgICBpZiAoZG90JDEgPCAtMC45OTk5OTkpIHsKICAgICAgY3Jvc3ModG1wdmVjMywgeFVuaXRWZWMzLCBhKTsKICAgICAgaWYgKGxlbih0bXB2ZWMzKSA8IDAuMDAwMDAxKSBjcm9zcyh0bXB2ZWMzLCB5VW5pdFZlYzMsIGEpOwogICAgICBub3JtYWxpemUodG1wdmVjMywgdG1wdmVjMyk7CiAgICAgIHNldEF4aXNBbmdsZShvdXQsIHRtcHZlYzMsIE1hdGguUEkpOwogICAgICByZXR1cm4gb3V0OwogICAgfSBlbHNlIGlmIChkb3QkMSA+IDAuOTk5OTk5KSB7CiAgICAgIG91dFswXSA9IDA7CiAgICAgIG91dFsxXSA9IDA7CiAgICAgIG91dFsyXSA9IDA7CiAgICAgIG91dFszXSA9IDE7CiAgICAgIHJldHVybiBvdXQ7CiAgICB9IGVsc2UgewogICAgICBjcm9zcyh0bXB2ZWMzLCBhLCBiKTsKICAgICAgb3V0WzBdID0gdG1wdmVjM1swXTsKICAgICAgb3V0WzFdID0gdG1wdmVjM1sxXTsKICAgICAgb3V0WzJdID0gdG1wdmVjM1syXTsKICAgICAgb3V0WzNdID0gMSArIGRvdCQxOwogICAgICByZXR1cm4gbm9ybWFsaXplJDIob3V0LCBvdXQpOwogICAgfQogIH07Cn0oKTsKLyoqDQogKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50cw0KICoNCiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvbg0KICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmQNCiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZA0KICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGMgdGhlIHRoaXJkIG9wZXJhbmQNCiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBkIHRoZSBmb3VydGggb3BlcmFuZA0KICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0cw0KICogQHJldHVybnMge3F1YXR9IG91dA0KICovCgp2YXIgc3FsZXJwID0gZnVuY3Rpb24gKCkgewogIHZhciB0ZW1wMSA9IGNyZWF0ZSQzKCk7CiAgdmFyIHRlbXAyID0gY3JlYXRlJDMoKTsKICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYiwgYywgZCwgdCkgewogICAgc2xlcnAodGVtcDEsIGEsIGQsIHQpOwogICAgc2xlcnAodGVtcDIsIGIsIGMsIHQpOwogICAgc2xlcnAob3V0LCB0ZW1wMSwgdGVtcDIsIDIgKiB0ICogKDEgLSB0KSk7CiAgICByZXR1cm4gb3V0OwogIH07Cn0oKTsKLyoqDQogKiBTZXRzIHRoZSBzcGVjaWZpZWQgcXVhdGVybmlvbiB3aXRoIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbg0KICogYXhlcy4gRWFjaCBheGlzIGlzIGEgdmVjMyBhbmQgaXMgZXhwZWN0ZWQgdG8gYmUgdW5pdCBsZW5ndGggYW5kDQogKiBwZXJwZW5kaWN1bGFyIHRvIGFsbCBvdGhlciBzcGVjaWZpZWQgYXhlcy4NCiAqDQogKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdmlldyAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIHZpZXdpbmcgZGlyZWN0aW9uDQogKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcmlnaHQgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsICJyaWdodCIgZGlyZWN0aW9uDQogKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgICAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsICJ1cCIgZGlyZWN0aW9uDQogKiBAcmV0dXJucyB7cXVhdH0gb3V0DQogKi8KCnZhciBzZXRBeGVzID0gZnVuY3Rpb24gKCkgewogIHZhciBtYXRyID0gY3JlYXRlKCk7CiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIHZpZXcsIHJpZ2h0LCB1cCkgewogICAgbWF0clswXSA9IHJpZ2h0WzBdOwogICAgbWF0clszXSA9IHJpZ2h0WzFdOwogICAgbWF0cls2XSA9IHJpZ2h0WzJdOwogICAgbWF0clsxXSA9IHVwWzBdOwogICAgbWF0cls0XSA9IHVwWzFdOwogICAgbWF0cls3XSA9IHVwWzJdOwogICAgbWF0clsyXSA9IC12aWV3WzBdOwogICAgbWF0cls1XSA9IC12aWV3WzFdOwogICAgbWF0cls4XSA9IC12aWV3WzJdOwogICAgcmV0dXJuIG5vcm1hbGl6ZSQyKG91dCwgZnJvbU1hdDMob3V0LCBtYXRyKSk7CiAgfTsKfSgpOwoKLyoqDQogKiAyIERpbWVuc2lvbmFsIFZlY3Rvcg0KICogQG1vZHVsZSB2ZWMyDQogKi8KCi8qKg0KICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjMg0KICoNCiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3INCiAqLwoKZnVuY3Rpb24gY3JlYXRlJDQoKSB7CiAgdmFyIG91dCA9IG5ldyBBUlJBWV9UWVBFKDIpOwoKICBpZiAoQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHsKICAgIG91dFswXSA9IDA7CiAgICBvdXRbMV0gPSAwOwogIH0KCiAgcmV0dXJuIG91dDsKfQovKioNCiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy4NCiAqDQogKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3Zlcg0KICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWQNCiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkNCiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5DQogKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXkNCiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm4NCiAqIEByZXR1cm5zIHtBcnJheX0gYQ0KICogQGZ1bmN0aW9uDQogKi8KCnZhciBmb3JFYWNoJDIgPSBmdW5jdGlvbiAoKSB7CiAgdmFyIHZlYyA9IGNyZWF0ZSQ0KCk7CiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHsKICAgIHZhciBpLCBsOwoKICAgIGlmICghc3RyaWRlKSB7CiAgICAgIHN0cmlkZSA9IDI7CiAgICB9CgogICAgaWYgKCFvZmZzZXQpIHsKICAgICAgb2Zmc2V0ID0gMDsKICAgIH0KCiAgICBpZiAoY291bnQpIHsKICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7CiAgICB9IGVsc2UgewogICAgICBsID0gYS5sZW5ndGg7CiAgICB9CgogICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHsKICAgICAgdmVjWzBdID0gYVtpXTsKICAgICAgdmVjWzFdID0gYVtpICsgMV07CiAgICAgIGZuKHZlYywgdmVjLCBhcmcpOwogICAgICBhW2ldID0gdmVjWzBdOwogICAgICBhW2kgKyAxXSA9IHZlY1sxXTsKICAgIH0KCiAgICByZXR1cm4gYTsKICB9Owp9KCk7CgovKioKICogQGNsYXNzCiAqLwoKdmFyIEdLVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkgewogIGZ1bmN0aW9uIEdLVXRpbHMoKSB7CiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR0tVdGlscyk7CiAgfQoKICBfY3JlYXRlQ2xhc3MoR0tVdGlscywgbnVsbCwgW3sKICAgIGtleTogInJhZGlhbnNGb3JQb3NpdGlvbiIsCgogICAgLyoqCiAgICAgKiBAZGVzY3JpcHRpb24gQ29tcHV0ZSBheGlzIGFuZ2xlcyBmb3IgcG9zaXRvbgogICAgICogQHN0YXRpYwogICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSB4IHBvc2l0aW9uCiAgICAgKiBAcGFyYW0ge251bWJlcn0geiAtIHogcG9zaXRpb24KICAgICAqIEByZXR1cm5zIHtudW1iZXJ9CiAgICAgKi8KICAgIHZhbHVlOiBmdW5jdGlvbiByYWRpYW5zRm9yUG9zaXRpb24oeCwgeikgewogICAgICBpZiAoeiA+IDApIHsKICAgICAgICBpZiAoeCA+PSAwKSB7CiAgICAgICAgICByZXR1cm4gTWF0aC5hdGFuKHggLyB6KTsKICAgICAgICB9CgogICAgICAgIHJldHVybiAyICogTWF0aC5QSSArIE1hdGguYXRhbih4IC8geik7CiAgICAgIH0KCiAgICAgIGlmICh6IDwgMCkgewogICAgICAgIHJldHVybiBNYXRoLlBJICsgTWF0aC5hdGFuKHggLyB6KTsKICAgICAgfQoKICAgICAgaWYgKHggPiAwKSB7CiAgICAgICAgcmV0dXJuIE1hdGguUEkgLyAyLjA7CiAgICAgIH0KCiAgICAgIHJldHVybiAzICogTWF0aC5QSSAvIDIuMDsKICAgIH0KICAgIC8qKgogICAgICogQGRlc2NyaXB0aW9uIENvbnZlcnQgd29ybGRzcGFjZSBbeCx5LHpdIHRvIGxhdCBsb24KICAgICAqIEBzdGF0aWMKICAgICAqIEBwYXJhbSB7QXJyYXl9IHBvcyAtIHdvcmxkc3BhY2UgY29vcmRpbmF0ZXMgW3gseSx6XQogICAgICogQHJldHVybnMge09iamVjdH0KICAgICAqLwoKICB9LCB7CiAgICBrZXk6ICJsYXRMb25Gcm9tV29ybGQiLAogICAgdmFsdWU6IGZ1bmN0aW9uIGxhdExvbkZyb21Xb3JsZChwb3MpIHsKICAgICAgdmFyIG5vcm1hbCA9IGNyZWF0ZSQxKCk7CiAgICAgIG5vcm1hbGl6ZShub3JtYWwsIHBvcyk7CiAgICAgIHZhciBsYXRSYWQgPSBNYXRoLmFzaW4obm9ybWFsWzFdKTsKICAgICAgdmFyIGxvblJhZCA9IHRoaXMucmFkaWFuc0ZvclBvc2l0aW9uKG5vcm1hbFswXSwgbm9ybWFsWzJdKTsKICAgICAgdmFyIGxhdERlZyA9IGxhdFJhZCAqIDE4MC4wIC8gTWF0aC5QSTsKICAgICAgdmFyIGxvbkRlZyA9IGxvblJhZCAqIDE4MC4wIC8gTWF0aC5QSTsKCiAgICAgIHdoaWxlIChsb25EZWcgPiAxODAuMCkgewogICAgICAgIGxvbkRlZyAtPSAzNjAuMDsKICAgICAgfQoKICAgICAgcmV0dXJuIHsKICAgICAgICBsYXQ6IGxhdERlZywKICAgICAgICBsb246IGxvbkRlZwogICAgICB9OwogICAgfQogICAgLyoqCiAgICAgKiBAZGVzY3JpcHRpb24gQ29tcHV0ZXMgZ3JlYXQgY2lyY2xlIGRpc3RhbmNlIGJldHdlZW4gMiBsYXQgbG9uIGNvb3JkcwogICAgICogQHN0YXRpYwogICAgICogQHBhcmFtIHtPYmplY3R9IHAwIC0ge2xhdDogfn4sIGxvbjogfn59CiAgICAgKiBAcGFyYW0ge09iamVjdH0gcDEgLSB7bGF0OiB+fiwgbG9uOiB+fn0KICAgICAqIEByZXR1cm5zCiAgICAgKi8KCiAgfSwgewogICAga2V5OiAiZGlzdGFuY2VCZXR3ZWVuUG9pbnRzIiwKICAgIHZhbHVlOiBmdW5jdGlvbiBkaXN0YW5jZUJldHdlZW5Qb2ludHMocDAsIHAxKSB7CiAgICAgIHZhciBkZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gZGVncmVlc1RvUmFkaWFucyhkZWdyZWVzKSB7CiAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7CiAgICAgIH07CgogICAgICB2YXIgUiA9IDYzNzE7IC8vIGttCgogICAgICB2YXIgcGhpMSA9IGRlZ3JlZXNUb1JhZGlhbnMocDAubGF0KTsgLy8gcGhpLCBsYW1iZGEgaW4gcmFkaWFucwoKICAgICAgdmFyIHBoaTIgPSBkZWdyZWVzVG9SYWRpYW5zKHAxLmxhdCk7CiAgICAgIHZhciBkZWx0YVBoaSA9IGRlZ3JlZXNUb1JhZGlhbnMocDEubGF0IC0gcDAubGF0KTsKICAgICAgdmFyIGRlbHRhTGFtYmRhID0gZGVncmVlc1RvUmFkaWFucyhwMS5sb24gLSBwMC5sb24pOwogICAgICB2YXIgYSA9IE1hdGguc2luKGRlbHRhUGhpIC8gMikgKiBNYXRoLnNpbihkZWx0YVBoaSAvIDIpICsgTWF0aC5jb3MocGhpMSkgKiBNYXRoLmNvcyhwaGkyKSAqIE1hdGguc2luKGRlbHRhTGFtYmRhIC8gMikgKiBNYXRoLnNpbihkZWx0YUxhbWJkYSAvIDIpOwogICAgICB2YXIgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEgLSBhKSk7CiAgICAgIHZhciBkID0gUiAqIGM7IC8vIGluIGttCgogICAgICByZXR1cm4gZDsKICAgIH0KICAgIC8qKgogICAgICogQGRlc2NyaXB0aW9uIENvbnZlcnQgbGF0IGxvbiBhbHQgdG8gd29ybGRzcGFjZQogICAgICogQHN0YXRpYwogICAgICogQHBhcmFtIHtudW1iZXJ9IGxhdCAtIGxhdGl0dWRlIGluIGRlZ3JlZXMKICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb24gLSBsb25naXR1ZGUgaW4gZGVncmVlcwogICAgICogQHBhcmFtIHtudW1iZXJ9IGFsdCAtIGFsdGl0dWRlIGZyb20gc3VyZmFjZSBvZiBnbG9iZSBpbiBlYXJ0aCByYWRpdXMgKHN1cmZhY2UgPSAwKQogICAgICogQHJldHVybnMge0FycmF5fQogICAgICovCgogIH0sIHsKICAgIGtleTogIndvcmxkRnJvbUxhdExvbiIsCiAgICB2YWx1ZTogZnVuY3Rpb24gd29ybGRGcm9tTGF0TG9uKGxhdCwgbG9uLCBhbHQpIHsKICAgICAgdmFyIGFsdGl0dWRlID0gYWx0IHx8IDAuMDsKICAgICAgdmFyIGxhdFJhZCA9IGxhdCAqIE1hdGguUEkgLyAxODAuMDsKICAgICAgdmFyIGxuZ1JhZCA9IGxvbiAqIE1hdGguUEkgLyAxODAuMDsKICAgICAgdmFyIHJhZGl1cyA9IE1hdGguY29zKGxhdFJhZCk7CiAgICAgIHZhciB5ID0gTWF0aC5zaW4obGF0UmFkKTsKICAgICAgdmFyIHggPSBNYXRoLnNpbihsbmdSYWQpICogcmFkaXVzOwogICAgICB2YXIgeiA9IE1hdGguY29zKGxuZ1JhZCkgKiByYWRpdXM7CiAgICAgIHZhciBwb3MgPSBmcm9tVmFsdWVzKHgsIHksIHopOwogICAgICB2YXIgbm9ybSA9IGNyZWF0ZSQxKCk7CiAgICAgIG5vcm1hbGl6ZShub3JtLCBwb3MpOwogICAgICB2YXIgYWRkJDEgPSBzY2FsZShub3JtLCBub3JtLCBhbHRpdHVkZSk7CiAgICAgIGFkZChwb3MsIHBvcywgYWRkJDEpOwogICAgICByZXR1cm4gcG9zOwogICAgfQogICAgLyoqCiAgICAgKiBAZGVzY3JpcHRpb24gQ29udmVydCBoZXggY29sb3IgdG8gUkdCIGFycmF5CiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaCAtIENvbG9yIEhleCBDb2RlCiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vcm1hbGl6ZSAtIFNob3VsZCB0aGUgb3V0cHV0IGJlIG5vcm1hbGl6ZWQgdG8gWzAsMV0KICAgICAqIEByZXR1cm5zIHtBcnJheX0KICAgICAqLwoKICB9LCB7CiAgICBrZXk6ICJoZXhUb1JHQiIsCiAgICB2YWx1ZTogZnVuY3Rpb24gaGV4VG9SR0IoaCwgbm9ybWFsaXplKSB7CiAgICAgIHZhciByID0gMDsKICAgICAgdmFyIGcgPSAwOwogICAgICB2YXIgYiA9IDA7CiAgICAgIHZhciBub3JtID0gbm9ybWFsaXplICE9PSBmYWxzZTsKCiAgICAgIGlmIChoLmxlbmd0aCA9PT0gNCkgewogICAgICAgIHIgPSAiMHgiLmNvbmNhdChoWzFdKS5jb25jYXQoaFsxXSk7CiAgICAgICAgZyA9ICIweCIuY29uY2F0KGhbMl0pLmNvbmNhdChoWzJdKTsKICAgICAgICBiID0gIjB4Ii5jb25jYXQoaFszXSkuY29uY2F0KGhbM10pOwogICAgICB9IGVsc2UgaWYgKGgubGVuZ3RoID09PSA3KSB7CiAgICAgICAgciA9ICIweCIuY29uY2F0KGhbMV0pLmNvbmNhdChoWzJdKTsKICAgICAgICBnID0gIjB4Ii5jb25jYXQoaFszXSkuY29uY2F0KGhbNF0pOwogICAgICAgIGIgPSAiMHgiLmNvbmNhdChoWzVdKS5jb25jYXQoaFs2XSk7CiAgICAgIH0KCiAgICAgIGlmIChub3JtKSB7CiAgICAgICAgciAvPSAyNTU7CiAgICAgICAgZyAvPSAyNTU7CiAgICAgICAgYiAvPSAyNTU7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgciA9IHBhcnNlSW50KHIsIDE2KTsKICAgICAgICBnID0gcGFyc2VJbnQoZywgMTYpOwogICAgICAgIGIgPSBwYXJzZUludChiLCAxNik7CiAgICAgIH0KCiAgICAgIHJldHVybiBbciwgZywgYl07CiAgICB9CiAgICAvKioKICAgICAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0IGhleCArIGFscGhhIHRvIFJHQkEKICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoIC0gQ29sb3IgaGV4IGNvZGUKICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhIC0gQWxwaGEgdmFsdWUgWzAsMV0KICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9ybWFsaXplIC0gU2hvdWxkIHRoZSBvdXRwdXQgYmUgbm9ybWFsaXplZCB0byBbMCwxXQogICAgICogQHJldHVybnMge0FycmF5fQogICAgICovCgogIH0sIHsKICAgIGtleTogImhleFRvUkdCQSIsCiAgICB2YWx1ZTogZnVuY3Rpb24gaGV4VG9SR0JBKGgsIGEsIG5vcm1hbGl6ZSkgewogICAgICB2YXIgcmdiID0gdGhpcy5oZXhUb1JHQihoLCBub3JtYWxpemUpOwogICAgICB2YXIgYWxwaGEgPSBub3JtYWxpemUgIT09IGZhbHNlID8gYSA6IGEgKiAyNTU7CiAgICAgIHJldHVybiBbcmdiWzBdLCByZ2JbMV0sIHJnYlsyXSwgYWxwaGFdOwogICAgfQogIH0sIHsKICAgIGtleTogImlzU3ViU2V0IiwKICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N1YlNldChhLCBiKSB7CiAgICAgIHJldHVybiBhLmV2ZXJ5KGZ1bmN0aW9uIChlbCkgewogICAgICAgIHJldHVybiBiLmZpbmQoZnVuY3Rpb24gKGUpIHsKICAgICAgICAgIHJldHVybiBlID09PSBlbDsKICAgICAgICB9KSAhPT0gdW5kZWZpbmVkOwogICAgICB9KTsKICAgIH0KICAgIC8qKgogICAgKiBBIGxpbmVhciBpbnRlcnBvbGF0b3IgZm9yIGhleGFkZWNpbWFsIGNvbG9ycwogICAgKiBAcGFyYW0ge1N0cmluZ30gYQogICAgKiBAcGFyYW0ge1N0cmluZ30gYgogICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50CiAgICAqIEBleGFtcGxlCiAgICAqIC8vIHJldHVybnMgIzdGN0Y3RgogICAgKiBsZXJwQ29sb3IoJyMwMDAwMDAnLCAnI2ZmZmZmZicsIDAuNSkKICAgICogQHJldHVybnMge1N0cmluZ30KICAgICovCgogIH0sIHsKICAgIGtleTogImxlcnBDb2xvciIsCiAgICB2YWx1ZTogZnVuY3Rpb24gbGVycENvbG9yKGEsIGIsIGFtb3VudCkgewogICAgICB2YXIgYWggPSBwYXJzZUludChhLnJlcGxhY2UoLyMvZywgJycpLCAxNik7CiAgICAgIHZhciBhciA9IGFoID4+IDE2OwogICAgICB2YXIgYWcgPSBhaCA+PiA4ICYgMHhmZjsKICAgICAgdmFyIGFiID0gYWggJiAweGZmOwogICAgICB2YXIgYmggPSBwYXJzZUludChiLnJlcGxhY2UoLyMvZywgJycpLCAxNik7CiAgICAgIHZhciBiciA9IGJoID4+IDE2OwogICAgICB2YXIgYmcgPSBiaCA+PiA4ICYgMHhmZjsKICAgICAgdmFyIGJiID0gYmggJiAweGZmOwogICAgICB2YXIgcnIgPSBhciArIGFtb3VudCAqIChiciAtIGFyKTsKICAgICAgdmFyIHJnID0gYWcgKyBhbW91bnQgKiAoYmcgLSBhZyk7CiAgICAgIHZhciByYiA9IGFiICsgYW1vdW50ICogKGJiIC0gYWIpOwogICAgICByZXR1cm4gIiMiLmNvbmNhdCgoKDEgPDwgMjQpICsgKHJyIDw8IDE2KSArIChyZyA8PCA4KSArIHJiIHwgMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTsKICAgIH0KICB9XSk7CgogIHJldHVybiBHS1V0aWxzOwp9KCk7Cgp2YXIgQmV6aWVyID0KLyoqKioqKi8KZnVuY3Rpb24gKG1vZHVsZXMpIHsKICAvLyB3ZWJwYWNrQm9vdHN0cmFwCgogIC8qKioqKiovCiAgLy8gVGhlIG1vZHVsZSBjYWNoZQoKICAvKioqKioqLwogIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307CiAgLyoqKioqKi8KICAvLyBUaGUgcmVxdWlyZSBmdW5jdGlvbgoKICAvKioqKioqLwoKICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7CiAgICAvKioqKioqLwogICAgLy8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlCgogICAgLyoqKioqKi8KICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkKICAgICAgLyoqKioqKi8KICAgICAgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7CiAgICAvKioqKioqLwogICAgLy8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSkKCiAgICAvKioqKioqLwoKICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHsKICAgICAgLyoqKioqKi8KICAgICAgZXhwb3J0czoge30sCgogICAgICAvKioqKioqLwogICAgICBpZDogbW9kdWxlSWQsCgogICAgICAvKioqKioqLwogICAgICBsb2FkZWQ6IGZhbHNlCiAgICAgIC8qKioqKiovCgogICAgfTsKICAgIC8qKioqKiovCiAgICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb24KCiAgICAvKioqKioqLwoKICAgIG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pOwogICAgLyoqKioqKi8KICAgIC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWQKCiAgICAvKioqKioqLwoKICAgIG1vZHVsZS5sb2FkZWQgPSB0cnVlOwogICAgLyoqKioqKi8KICAgIC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlCgogICAgLyoqKioqKi8KCiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7CiAgICAvKioqKioqLwogIH0KICAvKioqKioqLwogIC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pCgogIC8qKioqKiovCgoKICBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzOwogIC8qKioqKiovCiAgLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGUKCiAgLyoqKioqKi8KCiAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlczsKICAvKioqKioqLwogIC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fCgogIC8qKioqKiovCgogIF9fd2VicGFja19yZXF1aXJlX18ucCA9ICIiOwogIC8qKioqKiovCiAgLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzCgogIC8qKioqKiovCgogIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApOwogIC8qKioqKiovCn0oCi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovCgovKioqKioqLwpbCi8qIDAgKi8KCi8qKiovCmZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHsKCiAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpOwogIC8qKiovCn0sCi8qIDEgKi8KCi8qKiovCmZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHsKCiAgdmFyIF90eXBlb2YkMSA9IHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgX3R5cGVvZihTeW1ib2wuaXRlcmF0b3IpID09PSAic3ltYm9sIiA/IGZ1bmN0aW9uIChvYmopIHsKICAgIHJldHVybiBfdHlwZW9mKG9iaik7CiAgfSA6IGZ1bmN0aW9uIChvYmopIHsKICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyAic3ltYm9sIiA6IF90eXBlb2Yob2JqKTsKICB9OwogIC8qKgogICAgQSBqYXZhc2NyaXB0IEJlemllciBjdXJ2ZSBsaWJyYXJ5IGJ5IFBvbWF4LgogIAkgIEJhc2VkIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mbwogIAkgIFRoaXMgY29kZSBpcyBNSVQgbGljZW5zZWQuCiAgKiovCgoKICAoZnVuY3Rpb24gKCkgewoKICAgIHZhciBhYnMgPSBNYXRoLmFicywKICAgICAgICBtaW4gPSBNYXRoLm1pbiwKICAgICAgICBtYXggPSBNYXRoLm1heCwKICAgICAgICBjb3MgPSBNYXRoLmNvcywKICAgICAgICBzaW4gPSBNYXRoLnNpbiwKICAgICAgICBhY29zID0gTWF0aC5hY29zLAogICAgICAgIHNxcnQgPSBNYXRoLnNxcnQsCiAgICAgICAgcGkgPSBNYXRoLlBJLAogICAgICAgIC8vIGEgemVybyBjb29yZGluYXRlLCB3aGljaCBpcyBzdXJwcmlzaW5nbHkgdXNlZnVsCiAgICBaRVJPID0gewogICAgICB4OiAwLAogICAgICB5OiAwLAogICAgICB6OiAwCiAgICB9OyAvLyBxdWl0ZSBuZWVkZWQKCiAgICB2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpOyAvLyBvbmx5IHVzZWQgZm9yIG91dGxpbmVzIGF0bS4KCgogICAgdmFyIFBvbHlCZXppZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpOwogICAgLyoqCiAgICAgKiBCZXppZXIgY3VydmUgY29uc3RydWN0b3IuIFRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRocmVlIHRoaW5nczoKICAgICAqCiAgICAgKiAxLiBhcnJheS80IG9mIHt4Oi4uLiwgeTouLi4sIHo6Li4ufSwgeiBvcHRpb25hbAogICAgICogMi4gbnVtZXJpY2FsIGFycmF5Lzggb3JkZXJlZCB4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NAogICAgICogMy4gbnVtZXJpY2FsIGFycmF5LzEyIG9yZGVyZWQgeDEseTEsejEseDIseTIsejIseDMseTMsejMseDQseTQsejQKICAgICAqCiAgICAgKi8KCgogICAgdmFyIEJlemllciA9IGZ1bmN0aW9uIEJlemllcihjb29yZHMpIHsKICAgICAgdmFyIGFyZ3MgPSBjb29yZHMgJiYgY29vcmRzLmZvckVhY2ggPyBjb29yZHMgOiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7CiAgICAgIHZhciBjb29yZGxlbiA9IGZhbHNlOwoKICAgICAgaWYgKF90eXBlb2YkMShhcmdzWzBdKSA9PT0gIm9iamVjdCIpIHsKICAgICAgICBjb29yZGxlbiA9IGFyZ3MubGVuZ3RoOwogICAgICAgIHZhciBuZXdhcmdzID0gW107CiAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkgewogICAgICAgICAgWyJ4IiwgInkiLCAieiJdLmZvckVhY2goZnVuY3Rpb24gKGQpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludFtkXSAhPT0gInVuZGVmaW5lZCIpIHsKICAgICAgICAgICAgICBuZXdhcmdzLnB1c2gocG9pbnRbZF0pOwogICAgICAgICAgICB9CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgICBhcmdzID0gbmV3YXJnczsKICAgICAgfQoKICAgICAgdmFyIGhpZ2hlciA9IGZhbHNlOwogICAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7CgogICAgICBpZiAoY29vcmRsZW4pIHsKICAgICAgICBpZiAoY29vcmRsZW4gPiA0KSB7CiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkgewogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIk9ubHkgbmV3IEJlemllcihwb2ludFtdKSBpcyBhY2NlcHRlZCBmb3IgNHRoIGFuZCBoaWdoZXIgb3JkZXIgY3VydmVzIik7CiAgICAgICAgICB9CgogICAgICAgICAgaGlnaGVyID0gdHJ1ZTsKICAgICAgICB9CiAgICAgIH0gZWxzZSB7CiAgICAgICAgaWYgKGxlbiAhPT0gNiAmJiBsZW4gIT09IDggJiYgbGVuICE9PSA5ICYmIGxlbiAhPT0gMTIpIHsKICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXMiKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIHZhciBfM2QgPSAhaGlnaGVyICYmIChsZW4gPT09IDkgfHwgbGVuID09PSAxMikgfHwgY29vcmRzICYmIGNvb3Jkc1swXSAmJiB0eXBlb2YgY29vcmRzWzBdLnogIT09ICJ1bmRlZmluZWQiOwoKICAgICAgdGhpcy5fM2QgPSBfM2Q7CiAgICAgIHZhciBwb2ludHMgPSBbXTsKCiAgICAgIGZvciAodmFyIGlkeCA9IDAsIHN0ZXAgPSBfM2QgPyAzIDogMjsgaWR4IDwgbGVuOyBpZHggKz0gc3RlcCkgewogICAgICAgIHZhciBwb2ludCA9IHsKICAgICAgICAgIHg6IGFyZ3NbaWR4XSwKICAgICAgICAgIHk6IGFyZ3NbaWR4ICsgMV0KICAgICAgICB9OwoKICAgICAgICBpZiAoXzNkKSB7CiAgICAgICAgICBwb2ludC56ID0gYXJnc1tpZHggKyAyXTsKICAgICAgICB9CgogICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTsKICAgICAgfQoKICAgICAgdGhpcy5vcmRlciA9IHBvaW50cy5sZW5ndGggLSAxOwogICAgICB0aGlzLnBvaW50cyA9IHBvaW50czsKICAgICAgdmFyIGRpbXMgPSBbIngiLCAieSJdOwogICAgICBpZiAoXzNkKSBkaW1zLnB1c2goInoiKTsKICAgICAgdGhpcy5kaW1zID0gZGltczsKICAgICAgdGhpcy5kaW1sZW4gPSBkaW1zLmxlbmd0aDsKCiAgICAgIChmdW5jdGlvbiAoY3VydmUpIHsKICAgICAgICB2YXIgb3JkZXIgPSBjdXJ2ZS5vcmRlcjsKICAgICAgICB2YXIgcG9pbnRzID0gY3VydmUucG9pbnRzOwogICAgICAgIHZhciBhID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7CiAgICAgICAgICBwMTogcG9pbnRzWzBdLAogICAgICAgICAgcDI6IHBvaW50c1tvcmRlcl0KICAgICAgICB9KTsKCiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICBpZiAoYWJzKGFbaV0ueSkgPiAwLjAwMDEpIHsKICAgICAgICAgICAgY3VydmUuX2xpbmVhciA9IGZhbHNlOwogICAgICAgICAgICByZXR1cm47CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBjdXJ2ZS5fbGluZWFyID0gdHJ1ZTsKICAgICAgfSkodGhpcyk7CgogICAgICB0aGlzLl90MSA9IDA7CiAgICAgIHRoaXMuX3QyID0gMTsKICAgICAgdGhpcy51cGRhdGUoKTsKICAgIH07CgogICAgdmFyIHN2Z1RvQmV6aWVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7CiAgICAvKioKICAgICAqIHR1cm4gYW4gc3ZnIDxwYXRoPiBkIGF0dHJpYnV0ZSBpbnRvIGEgc2VxdWVuY2Ugb2YgQmV6aWVyIHNlZ21lbnRzLgogICAgICovCgoKICAgIEJlemllci5TVkd0b0JlemllcnMgPSBmdW5jdGlvbiAoZCkgewogICAgICByZXR1cm4gc3ZnVG9CZXppZXJzKEJlemllciwgZCk7CiAgICB9OwoKICAgIGZ1bmN0aW9uIGdldEFCQyhuLCBTLCBCLCBFLCB0KSB7CiAgICAgIGlmICh0eXBlb2YgdCA9PT0gInVuZGVmaW5lZCIpIHsKICAgICAgICB0ID0gMC41OwogICAgICB9CgogICAgICB2YXIgdSA9IHV0aWxzLnByb2plY3Rpb25yYXRpbyh0LCBuKSwKICAgICAgICAgIHVtID0gMSAtIHUsCiAgICAgICAgICBDID0gewogICAgICAgIHg6IHUgKiBTLnggKyB1bSAqIEUueCwKICAgICAgICB5OiB1ICogUy55ICsgdW0gKiBFLnkKICAgICAgfSwKICAgICAgICAgIHMgPSB1dGlscy5hYmNyYXRpbyh0LCBuKSwKICAgICAgICAgIEEgPSB7CiAgICAgICAgeDogQi54ICsgKEIueCAtIEMueCkgLyBzLAogICAgICAgIHk6IEIueSArIChCLnkgLSBDLnkpIC8gcwogICAgICB9OwogICAgICByZXR1cm4gewogICAgICAgIEE6IEEsCiAgICAgICAgQjogQiwKICAgICAgICBDOiBDCiAgICAgIH07CiAgICB9CgogICAgQmV6aWVyLnF1YWRyYXRpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbiAocDEsIHAyLCBwMywgdCkgewogICAgICBpZiAodHlwZW9mIHQgPT09ICJ1bmRlZmluZWQiKSB7CiAgICAgICAgdCA9IDAuNTsKICAgICAgfSAvLyBzaG9ydGN1dHMsIGFsdGhvdWdoIHRoZXkncmUgcmVhbGx5IGR1bWIKCgogICAgICBpZiAodCA9PT0gMCkgewogICAgICAgIHJldHVybiBuZXcgQmV6aWVyKHAyLCBwMiwgcDMpOwogICAgICB9CgogICAgICBpZiAodCA9PT0gMSkgewogICAgICAgIHJldHVybiBuZXcgQmV6aWVyKHAxLCBwMiwgcDIpOwogICAgICB9IC8vIHJlYWwgZml0dGluZy4KCgogICAgICB2YXIgYWJjID0gZ2V0QUJDKDIsIHAxLCBwMiwgcDMsIHQpOwogICAgICByZXR1cm4gbmV3IEJlemllcihwMSwgYWJjLkEsIHAzKTsKICAgIH07CgogICAgQmV6aWVyLmN1YmljRnJvbVBvaW50cyA9IGZ1bmN0aW9uIChTLCBCLCBFLCB0LCBkMSkgewogICAgICBpZiAodHlwZW9mIHQgPT09ICJ1bmRlZmluZWQiKSB7CiAgICAgICAgdCA9IDAuNTsKICAgICAgfQoKICAgICAgdmFyIGFiYyA9IGdldEFCQygzLCBTLCBCLCBFLCB0KTsKCiAgICAgIGlmICh0eXBlb2YgZDEgPT09ICJ1bmRlZmluZWQiKSB7CiAgICAgICAgZDEgPSB1dGlscy5kaXN0KEIsIGFiYy5DKTsKICAgICAgfQoKICAgICAgdmFyIGQyID0gZDEgKiAoMSAtIHQpIC8gdDsKICAgICAgdmFyIHNlbGVuID0gdXRpbHMuZGlzdChTLCBFKSwKICAgICAgICAgIGx4ID0gKEUueCAtIFMueCkgLyBzZWxlbiwKICAgICAgICAgIGx5ID0gKEUueSAtIFMueSkgLyBzZWxlbiwKICAgICAgICAgIGJ4MSA9IGQxICogbHgsCiAgICAgICAgICBieTEgPSBkMSAqIGx5LAogICAgICAgICAgYngyID0gZDIgKiBseCwKICAgICAgICAgIGJ5MiA9IGQyICogbHk7IC8vIGRlcml2YXRpb24gb2YgbmV3IGh1bGwgY29vcmRpbmF0ZXMKCiAgICAgIHZhciBlMSA9IHsKICAgICAgICB4OiBCLnggLSBieDEsCiAgICAgICAgeTogQi55IC0gYnkxCiAgICAgIH0sCiAgICAgICAgICBlMiA9IHsKICAgICAgICB4OiBCLnggKyBieDIsCiAgICAgICAgeTogQi55ICsgYnkyCiAgICAgIH0sCiAgICAgICAgICBBID0gYWJjLkEsCiAgICAgICAgICB2MSA9IHsKICAgICAgICB4OiBBLnggKyAoZTEueCAtIEEueCkgLyAoMSAtIHQpLAogICAgICAgIHk6IEEueSArIChlMS55IC0gQS55KSAvICgxIC0gdCkKICAgICAgfSwKICAgICAgICAgIHYyID0gewogICAgICAgIHg6IEEueCArIChlMi54IC0gQS54KSAvIHQsCiAgICAgICAgeTogQS55ICsgKGUyLnkgLSBBLnkpIC8gdAogICAgICB9LAogICAgICAgICAgbmMxID0gewogICAgICAgIHg6IFMueCArICh2MS54IC0gUy54KSAvIHQsCiAgICAgICAgeTogUy55ICsgKHYxLnkgLSBTLnkpIC8gdAogICAgICB9LAogICAgICAgICAgbmMyID0gewogICAgICAgIHg6IEUueCArICh2Mi54IC0gRS54KSAvICgxIC0gdCksCiAgICAgICAgeTogRS55ICsgKHYyLnkgLSBFLnkpIC8gKDEgLSB0KQogICAgICB9OyAvLyAuLi5kb25lCgogICAgICByZXR1cm4gbmV3IEJlemllcihTLCBuYzEsIG5jMiwgRSk7CiAgICB9OwoKICAgIHZhciBnZXRVdGlscyA9IGZ1bmN0aW9uIGdldFV0aWxzKCkgewogICAgICByZXR1cm4gdXRpbHM7CiAgICB9OwoKICAgIEJlemllci5nZXRVdGlscyA9IGdldFV0aWxzOwogICAgQmV6aWVyLlBvbHlCZXppZXIgPSBQb2x5QmV6aWVyOwogICAgQmV6aWVyLnByb3RvdHlwZSA9IHsKICAgICAgZ2V0VXRpbHM6IGdldFV0aWxzLAogICAgICB2YWx1ZU9mOiBmdW5jdGlvbiB2YWx1ZU9mKCkgewogICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7CiAgICAgIH0sCiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHsKICAgICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpOwogICAgICB9LAogICAgICB0b1NWRzogZnVuY3Rpb24gdG9TVkcocmVsYXRpdmUpIHsKICAgICAgICBpZiAodGhpcy5fM2QpIHJldHVybiBmYWxzZTsKICAgICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLAogICAgICAgICAgICB4ID0gcFswXS54LAogICAgICAgICAgICB5ID0gcFswXS55LAogICAgICAgICAgICBzID0gWyJNIiwgeCwgeSwgdGhpcy5vcmRlciA9PT0gMiA/ICJRIiA6ICJDIl07CgogICAgICAgIGZvciAodmFyIGkgPSAxLCBsYXN0ID0gcC5sZW5ndGg7IGkgPCBsYXN0OyBpKyspIHsKICAgICAgICAgIHMucHVzaChwW2ldLngpOwogICAgICAgICAgcy5wdXNoKHBbaV0ueSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcy5qb2luKCIgIik7CiAgICAgIH0sCiAgICAgIHNldFJhdGlvczogZnVuY3Rpb24gc2V0UmF0aW9zKHJhdGlvcykgewogICAgICAgIGlmIChyYXRpb3MubGVuZ3RoICE9PSB0aGlzLnBvaW50cy5sZW5ndGgpIHsKICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiaW5jb3JyZWN0IG51bWJlciBvZiByYXRpbyB2YWx1ZXMiKTsKICAgICAgICB9CgogICAgICAgIHRoaXMucmF0aW9zID0gcmF0aW9zOwogICAgICAgIHRoaXMuX2x1dCA9IFtdOyAvLyAgaW52YWxpZGF0ZSBhbnkgcHJlY29tcHV0ZWQgTFVUCiAgICAgIH0sCiAgICAgIHZlcmlmeTogZnVuY3Rpb24gdmVyaWZ5KCkgewogICAgICAgIHZhciBwcmludCA9IHRoaXMuY29vcmREaWdlc3QoKTsKCiAgICAgICAgaWYgKHByaW50ICE9PSB0aGlzLl9wcmludCkgewogICAgICAgICAgdGhpcy5fcHJpbnQgPSBwcmludDsKICAgICAgICAgIHRoaXMudXBkYXRlKCk7CiAgICAgICAgfQogICAgICB9LAogICAgICBjb29yZERpZ2VzdDogZnVuY3Rpb24gY29vcmREaWdlc3QoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLm1hcChmdW5jdGlvbiAoYywgcG9zKSB7CiAgICAgICAgICByZXR1cm4gJycgKyBwb3MgKyBjLnggKyBjLnkgKyAoYy56ID8gYy56IDogMCk7CiAgICAgICAgfSkuam9pbignJyk7CiAgICAgIH0sCiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG5ld3ByaW50KSB7CiAgICAgICAgLy8gaW52YWxpZGF0ZSBhbnkgcHJlY29tcHV0ZWQgTFVUCiAgICAgICAgdGhpcy5fbHV0ID0gW107CiAgICAgICAgdGhpcy5kcG9pbnRzID0gdXRpbHMuZGVyaXZlKHRoaXMucG9pbnRzLCB0aGlzLl8zZCk7CiAgICAgICAgdGhpcy5jb21wdXRlZGlyZWN0aW9uKCk7CiAgICAgIH0sCiAgICAgIGNvbXB1dGVkaXJlY3Rpb246IGZ1bmN0aW9uIGNvbXB1dGVkaXJlY3Rpb24oKSB7CiAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzOwogICAgICAgIHZhciBhbmdsZSA9IHV0aWxzLmFuZ2xlKHBvaW50c1swXSwgcG9pbnRzW3RoaXMub3JkZXJdLCBwb2ludHNbMV0pOwogICAgICAgIHRoaXMuY2xvY2t3aXNlID0gYW5nbGUgPiAwOwogICAgICB9LAogICAgICBsZW5ndGg6IGZ1bmN0aW9uIGxlbmd0aCgpIHsKICAgICAgICByZXR1cm4gdXRpbHMubGVuZ3RoKHRoaXMuZGVyaXZhdGl2ZS5iaW5kKHRoaXMpKTsKICAgICAgfSwKICAgICAgX2x1dDogW10sCiAgICAgIGdldExVVDogZnVuY3Rpb24gZ2V0TFVUKHN0ZXBzKSB7CiAgICAgICAgdGhpcy52ZXJpZnkoKTsKICAgICAgICBzdGVwcyA9IHN0ZXBzIHx8IDEwMDsKCiAgICAgICAgaWYgKHRoaXMuX2x1dC5sZW5ndGggPT09IHN0ZXBzKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5fbHV0OwogICAgICAgIH0KCiAgICAgICAgdGhpcy5fbHV0ID0gW107IC8vIFdlIHdhbnQgYSByYW5nZSBmcm9tIDAgdG8gMSBpbmNsdXNpdmUsIHNvCiAgICAgICAgLy8gd2UgZGVjcmVtZW50IGFuZCB0aGVuIHVzZSA8PSByYXRoZXIgdGhhbiA8OgoKICAgICAgICBzdGVwcy0tOwoKICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8PSBzdGVwczsgdCsrKSB7CiAgICAgICAgICB0aGlzLl9sdXQucHVzaCh0aGlzLmNvbXB1dGUodCAvIHN0ZXBzKSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5fbHV0OwogICAgICB9LAogICAgICBvbjogZnVuY3Rpb24gb24ocG9pbnQsIGVycm9yKSB7CiAgICAgICAgZXJyb3IgPSBlcnJvciB8fCA1OwogICAgICAgIHZhciBsdXQgPSB0aGlzLmdldExVVCgpLAogICAgICAgICAgICBoaXRzID0gW10sCiAgICAgICAgICAgIGMsCiAgICAgICAgICAgIHQgPSAwOwoKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGx1dC5sZW5ndGg7IGkrKykgewogICAgICAgICAgYyA9IGx1dFtpXTsKCiAgICAgICAgICBpZiAodXRpbHMuZGlzdChjLCBwb2ludCkgPCBlcnJvcikgewogICAgICAgICAgICBoaXRzLnB1c2goYyk7CiAgICAgICAgICAgIHQgKz0gaSAvIGx1dC5sZW5ndGg7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBpZiAoIWhpdHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7CiAgICAgICAgcmV0dXJuIHQgLz0gaGl0cy5sZW5ndGg7CiAgICAgIH0sCiAgICAgIHByb2plY3Q6IGZ1bmN0aW9uIHByb2plY3QocG9pbnQpIHsKICAgICAgICAvLyBzdGVwIDE6IGNvYXJzZSBjaGVjawogICAgICAgIHZhciBMVVQgPSB0aGlzLmdldExVVCgpLAogICAgICAgICAgICBsID0gTFVULmxlbmd0aCAtIDEsCiAgICAgICAgICAgIGNsb3Nlc3QgPSB1dGlscy5jbG9zZXN0KExVVCwgcG9pbnQpLAogICAgICAgICAgICBtZGlzdCA9IGNsb3Nlc3QubWRpc3QsCiAgICAgICAgICAgIG1wb3MgPSBjbG9zZXN0Lm1wb3M7IC8vIHN0ZXAgMjogZmluZSBjaGVjawoKICAgICAgICB2YXIgZnQsCiAgICAgICAgICAgIHQsCiAgICAgICAgICAgIHAsCiAgICAgICAgICAgIGQsCiAgICAgICAgICAgIHQxID0gKG1wb3MgLSAxKSAvIGwsCiAgICAgICAgICAgIHQyID0gKG1wb3MgKyAxKSAvIGwsCiAgICAgICAgICAgIHN0ZXAgPSAwLjEgLyBsOwogICAgICAgIG1kaXN0ICs9IDE7CgogICAgICAgIGZvciAodCA9IHQxLCBmdCA9IHQ7IHQgPCB0MiArIHN0ZXA7IHQgKz0gc3RlcCkgewogICAgICAgICAgcCA9IHRoaXMuY29tcHV0ZSh0KTsKICAgICAgICAgIGQgPSB1dGlscy5kaXN0KHBvaW50LCBwKTsKCiAgICAgICAgICBpZiAoZCA8IG1kaXN0KSB7CiAgICAgICAgICAgIG1kaXN0ID0gZDsKICAgICAgICAgICAgZnQgPSB0OwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgcCA9IHRoaXMuY29tcHV0ZShmdCk7CiAgICAgICAgcC50ID0gZnQ7CiAgICAgICAgcC5kID0gbWRpc3Q7CiAgICAgICAgcmV0dXJuIHA7CiAgICAgIH0sCiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHQpIHsKICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlKHQpOwogICAgICB9LAogICAgICBwb2ludDogZnVuY3Rpb24gcG9pbnQoaWR4KSB7CiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2lkeF07CiAgICAgIH0sCiAgICAgIGNvbXB1dGU6IGZ1bmN0aW9uIGNvbXB1dGUodCkgewogICAgICAgIGlmICh0aGlzLnJhdGlvcykgcmV0dXJuIHV0aWxzLmNvbXB1dGVXaXRoUmF0aW9zKHQsIHRoaXMucG9pbnRzLCB0aGlzLnJhdGlvcywgdGhpcy5fM2QpOwogICAgICAgIHJldHVybiB1dGlscy5jb21wdXRlKHQsIHRoaXMucG9pbnRzLCB0aGlzLl8zZCwgdGhpcy5yYXRpb3MpOwogICAgICB9LAogICAgICByYWlzZTogZnVuY3Rpb24gcmFpc2UoKSB7CiAgICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cywKICAgICAgICAgICAgbnAgPSBbcFswXV0sCiAgICAgICAgICAgIGksCiAgICAgICAgICAgIGsgPSBwLmxlbmd0aCwKICAgICAgICAgICAgcGksCiAgICAgICAgICAgIHBpbTsKCiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBrOyBpKyspIHsKICAgICAgICAgIHBpID0gcFtpXTsKICAgICAgICAgIHBpbSA9IHBbaSAtIDFdOwogICAgICAgICAgbnBbaV0gPSB7CiAgICAgICAgICAgIHg6IChrIC0gaSkgLyBrICogcGkueCArIGkgLyBrICogcGltLngsCiAgICAgICAgICAgIHk6IChrIC0gaSkgLyBrICogcGkueSArIGkgLyBrICogcGltLnkKICAgICAgICAgIH07CiAgICAgICAgfQoKICAgICAgICBucFtrXSA9IHBbayAtIDFdOwogICAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTsKICAgICAgfSwKICAgICAgZGVyaXZhdGl2ZTogZnVuY3Rpb24gZGVyaXZhdGl2ZSh0KSB7CiAgICAgICAgdmFyIG10ID0gMSAtIHQsCiAgICAgICAgICAgIGEsCiAgICAgICAgICAgIGIsCiAgICAgICAgICAgIGMgPSAwLAogICAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdOwoKICAgICAgICBpZiAodGhpcy5vcmRlciA9PT0gMikgewogICAgICAgICAgcCA9IFtwWzBdLCBwWzFdLCBaRVJPXTsKICAgICAgICAgIGEgPSBtdDsKICAgICAgICAgIGIgPSB0OwogICAgICAgIH0KCiAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IDMpIHsKICAgICAgICAgIGEgPSBtdCAqIG10OwogICAgICAgICAgYiA9IG10ICogdCAqIDI7CiAgICAgICAgICBjID0gdCAqIHQ7CiAgICAgICAgfQoKICAgICAgICB2YXIgcmV0ID0gewogICAgICAgICAgeDogYSAqIHBbMF0ueCArIGIgKiBwWzFdLnggKyBjICogcFsyXS54LAogICAgICAgICAgeTogYSAqIHBbMF0ueSArIGIgKiBwWzFdLnkgKyBjICogcFsyXS55CiAgICAgICAgfTsKCiAgICAgICAgaWYgKHRoaXMuXzNkKSB7CiAgICAgICAgICByZXQueiA9IGEgKiBwWzBdLnogKyBiICogcFsxXS56ICsgYyAqIHBbMl0uejsKICAgICAgICB9CgogICAgICAgIHJldHVybiByZXQ7CiAgICAgIH0sCiAgICAgIGN1cnZhdHVyZTogZnVuY3Rpb24gY3VydmF0dXJlKHQpIHsKICAgICAgICByZXR1cm4gdXRpbHMuY3VydmF0dXJlKHQsIHRoaXMucG9pbnRzLCB0aGlzLl8zZCk7CiAgICAgIH0sCiAgICAgIGluZmxlY3Rpb25zOiBmdW5jdGlvbiBpbmZsZWN0aW9ucygpIHsKICAgICAgICByZXR1cm4gdXRpbHMuaW5mbGVjdGlvbnModGhpcy5wb2ludHMpOwogICAgICB9LAogICAgICBub3JtYWw6IGZ1bmN0aW9uIG5vcm1hbCh0KSB7CiAgICAgICAgcmV0dXJuIHRoaXMuXzNkID8gdGhpcy5fX25vcm1hbDModCkgOiB0aGlzLl9fbm9ybWFsMih0KTsKICAgICAgfSwKICAgICAgX19ub3JtYWwyOiBmdW5jdGlvbiBfX25vcm1hbDIodCkgewogICAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpOwogICAgICAgIHZhciBxID0gc3FydChkLnggKiBkLnggKyBkLnkgKiBkLnkpOwogICAgICAgIHJldHVybiB7CiAgICAgICAgICB4OiAtZC55IC8gcSwKICAgICAgICAgIHk6IGQueCAvIHEKICAgICAgICB9OwogICAgICB9LAogICAgICBfX25vcm1hbDM6IGZ1bmN0aW9uIF9fbm9ybWFsMyh0KSB7CiAgICAgICAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjU0NTMxNTkKICAgICAgICB2YXIgcjEgPSB0aGlzLmRlcml2YXRpdmUodCksCiAgICAgICAgICAgIHIyID0gdGhpcy5kZXJpdmF0aXZlKHQgKyAwLjAxKSwKICAgICAgICAgICAgcTEgPSBzcXJ0KHIxLnggKiByMS54ICsgcjEueSAqIHIxLnkgKyByMS56ICogcjEueiksCiAgICAgICAgICAgIHEyID0gc3FydChyMi54ICogcjIueCArIHIyLnkgKiByMi55ICsgcjIueiAqIHIyLnopOwogICAgICAgIHIxLnggLz0gcTE7CiAgICAgICAgcjEueSAvPSBxMTsKICAgICAgICByMS56IC89IHExOwogICAgICAgIHIyLnggLz0gcTI7CiAgICAgICAgcjIueSAvPSBxMjsKICAgICAgICByMi56IC89IHEyOyAvLyBjcm9zcyBwcm9kdWN0CgogICAgICAgIHZhciBjID0gewogICAgICAgICAgeDogcjIueSAqIHIxLnogLSByMi56ICogcjEueSwKICAgICAgICAgIHk6IHIyLnogKiByMS54IC0gcjIueCAqIHIxLnosCiAgICAgICAgICB6OiByMi54ICogcjEueSAtIHIyLnkgKiByMS54CiAgICAgICAgfTsKICAgICAgICB2YXIgbSA9IHNxcnQoYy54ICogYy54ICsgYy55ICogYy55ICsgYy56ICogYy56KTsKICAgICAgICBjLnggLz0gbTsKICAgICAgICBjLnkgLz0gbTsKICAgICAgICBjLnogLz0gbTsgLy8gcm90YXRpb24gbWF0cml4CgogICAgICAgIHZhciBSID0gW2MueCAqIGMueCwgYy54ICogYy55IC0gYy56LCBjLnggKiBjLnogKyBjLnksIGMueCAqIGMueSArIGMueiwgYy55ICogYy55LCBjLnkgKiBjLnogLSBjLngsIGMueCAqIGMueiAtIGMueSwgYy55ICogYy56ICsgYy54LCBjLnogKiBjLnpdOyAvLyBub3JtYWwgdmVjdG9yOgoKICAgICAgICB2YXIgbiA9IHsKICAgICAgICAgIHg6IFJbMF0gKiByMS54ICsgUlsxXSAqIHIxLnkgKyBSWzJdICogcjEueiwKICAgICAgICAgIHk6IFJbM10gKiByMS54ICsgUls0XSAqIHIxLnkgKyBSWzVdICogcjEueiwKICAgICAgICAgIHo6IFJbNl0gKiByMS54ICsgUls3XSAqIHIxLnkgKyBSWzhdICogcjEuegogICAgICAgIH07CiAgICAgICAgcmV0dXJuIG47CiAgICAgIH0sCiAgICAgIGh1bGw6IGZ1bmN0aW9uIGh1bGwodCkgewogICAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsCiAgICAgICAgICAgIF9wID0gW10sCiAgICAgICAgICAgIHB0LAogICAgICAgICAgICBxID0gW10sCiAgICAgICAgICAgIGlkeCA9IDAsCiAgICAgICAgICAgIGkgPSAwLAogICAgICAgICAgICBsID0gMDsKICAgICAgICBxW2lkeCsrXSA9IHBbMF07CiAgICAgICAgcVtpZHgrK10gPSBwWzFdOwogICAgICAgIHFbaWR4KytdID0gcFsyXTsKCiAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IDMpIHsKICAgICAgICAgIHFbaWR4KytdID0gcFszXTsKICAgICAgICB9IC8vIHdlIGxlcnAgYmV0d2VlbiBhbGwgcG9pbnRzIGF0IGVhY2ggaXRlcmF0aW9uLCB1bnRpbCB3ZSBoYXZlIDEgcG9pbnQgbGVmdC4KCgogICAgICAgIHdoaWxlIChwLmxlbmd0aCA+IDEpIHsKICAgICAgICAgIF9wID0gW107CgogICAgICAgICAgZm9yIChpID0gMCwgbCA9IHAubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKykgewogICAgICAgICAgICBwdCA9IHV0aWxzLmxlcnAodCwgcFtpXSwgcFtpICsgMV0pOwogICAgICAgICAgICBxW2lkeCsrXSA9IHB0OwoKICAgICAgICAgICAgX3AucHVzaChwdCk7CiAgICAgICAgICB9CgogICAgICAgICAgcCA9IF9wOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHE7CiAgICAgIH0sCiAgICAgIHNwbGl0OiBmdW5jdGlvbiBzcGxpdCh0MSwgdDIpIHsKICAgICAgICAvLyBzaG9ydGN1dHMKICAgICAgICBpZiAodDEgPT09IDAgJiYgISF0MikgewogICAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXQodDIpLmxlZnQ7CiAgICAgICAgfQoKICAgICAgICBpZiAodDIgPT09IDEpIHsKICAgICAgICAgIHJldHVybiB0aGlzLnNwbGl0KHQxKS5yaWdodDsKICAgICAgICB9IC8vIG5vIHNob3J0Y3V0OiB1c2UgImRlIENhc3RlbGphdSIgaXRlcmF0aW9uLgoKCiAgICAgICAgdmFyIHEgPSB0aGlzLmh1bGwodDEpOwogICAgICAgIHZhciByZXN1bHQgPSB7CiAgICAgICAgICBsZWZ0OiB0aGlzLm9yZGVyID09PSAyID8gbmV3IEJlemllcihbcVswXSwgcVszXSwgcVs1XV0pIDogbmV3IEJlemllcihbcVswXSwgcVs0XSwgcVs3XSwgcVs5XV0pLAogICAgICAgICAgcmlnaHQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzVdLCBxWzRdLCBxWzJdXSkgOiBuZXcgQmV6aWVyKFtxWzldLCBxWzhdLCBxWzZdLCBxWzNdXSksCiAgICAgICAgICBzcGFuOiBxCiAgICAgICAgfTsgLy8gbWFrZSBzdXJlIHdlIGJpbmQgX3QxL190MiBpbmZvcm1hdGlvbiEKCiAgICAgICAgcmVzdWx0LmxlZnQuX3QxID0gdXRpbHMubWFwKDAsIDAsIDEsIHRoaXMuX3QxLCB0aGlzLl90Mik7CiAgICAgICAgcmVzdWx0LmxlZnQuX3QyID0gdXRpbHMubWFwKHQxLCAwLCAxLCB0aGlzLl90MSwgdGhpcy5fdDIpOwogICAgICAgIHJlc3VsdC5yaWdodC5fdDEgPSB1dGlscy5tYXAodDEsIDAsIDEsIHRoaXMuX3QxLCB0aGlzLl90Mik7CiAgICAgICAgcmVzdWx0LnJpZ2h0Ll90MiA9IHV0aWxzLm1hcCgxLCAwLCAxLCB0aGlzLl90MSwgdGhpcy5fdDIpOyAvLyBpZiB3ZSBoYXZlIG5vIHQyLCB3ZSdyZSBkb25lCgogICAgICAgIGlmICghdDIpIHsKICAgICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgICAgfSAvLyBpZiB3ZSBoYXZlIGEgdDIsIHNwbGl0IGFnYWluOgoKCiAgICAgICAgdDIgPSB1dGlscy5tYXAodDIsIHQxLCAxLCAwLCAxKTsKICAgICAgICB2YXIgc3Vic3BsaXQgPSByZXN1bHQucmlnaHQuc3BsaXQodDIpOwogICAgICAgIHJldHVybiBzdWJzcGxpdC5sZWZ0OwogICAgICB9LAogICAgICBleHRyZW1hOiBmdW5jdGlvbiBleHRyZW1hKCkgewogICAgICAgIHZhciBkaW1zID0gdGhpcy5kaW1zLAogICAgICAgICAgICByZXN1bHQgPSB7fSwKICAgICAgICAgICAgcm9vdHMgPSBbXSwKICAgICAgICAgICAgcCwKICAgICAgICAgICAgbWZuOwogICAgICAgIGRpbXMuZm9yRWFjaChmdW5jdGlvbiAoZGltKSB7CiAgICAgICAgICBtZm4gPSBmdW5jdGlvbiBtZm4odikgewogICAgICAgICAgICByZXR1cm4gdltkaW1dOwogICAgICAgICAgfTsKCiAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdLm1hcChtZm4pOwogICAgICAgICAgcmVzdWx0W2RpbV0gPSB1dGlscy5kcm9vdHMocCk7CgogICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IDMpIHsKICAgICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1sxXS5tYXAobWZuKTsKICAgICAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5jb25jYXQodXRpbHMuZHJvb3RzKHApKTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXN1bHRbZGltXSA9IHJlc3VsdFtkaW1dLmZpbHRlcihmdW5jdGlvbiAodCkgewogICAgICAgICAgICByZXR1cm4gdCA+PSAwICYmIHQgPD0gMTsKICAgICAgICAgIH0pOwogICAgICAgICAgcm9vdHMgPSByb290cy5jb25jYXQocmVzdWx0W2RpbV0uc29ydCh1dGlscy5udW1iZXJTb3J0KSk7CiAgICAgICAgfS5iaW5kKHRoaXMpKTsKICAgICAgICByb290cyA9IHJvb3RzLnNvcnQodXRpbHMubnVtYmVyU29ydCkuZmlsdGVyKGZ1bmN0aW9uICh2LCBpZHgpIHsKICAgICAgICAgIHJldHVybiByb290cy5pbmRleE9mKHYpID09PSBpZHg7CiAgICAgICAgfSk7CiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IHJvb3RzOwogICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgIH0sCiAgICAgIGJib3g6IGZ1bmN0aW9uIGJib3goKSB7CiAgICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKSwKICAgICAgICAgICAgcmVzdWx0ID0ge307CiAgICAgICAgdGhpcy5kaW1zLmZvckVhY2goZnVuY3Rpb24gKGQpIHsKICAgICAgICAgIHJlc3VsdFtkXSA9IHV0aWxzLmdldG1pbm1heCh0aGlzLCBkLCBleHRyZW1hW2RdKTsKICAgICAgICB9LmJpbmQodGhpcykpOwogICAgICAgIHJldHVybiByZXN1bHQ7CiAgICAgIH0sCiAgICAgIG92ZXJsYXBzOiBmdW5jdGlvbiBvdmVybGFwcyhjdXJ2ZSkgewogICAgICAgIHZhciBsYmJveCA9IHRoaXMuYmJveCgpLAogICAgICAgICAgICB0YmJveCA9IGN1cnZlLmJib3goKTsKICAgICAgICByZXR1cm4gdXRpbHMuYmJveG92ZXJsYXAobGJib3gsIHRiYm94KTsKICAgICAgfSwKICAgICAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQodCwgZCkgewogICAgICAgIGlmICh0eXBlb2YgZCAhPT0gInVuZGVmaW5lZCIpIHsKICAgICAgICAgIHZhciBjID0gdGhpcy5nZXQodCk7CiAgICAgICAgICB2YXIgbiA9IHRoaXMubm9ybWFsKHQpOwogICAgICAgICAgdmFyIHJldCA9IHsKICAgICAgICAgICAgYzogYywKICAgICAgICAgICAgbjogbiwKICAgICAgICAgICAgeDogYy54ICsgbi54ICogZCwKICAgICAgICAgICAgeTogYy55ICsgbi55ICogZAogICAgICAgICAgfTsKCiAgICAgICAgICBpZiAodGhpcy5fM2QpIHsKICAgICAgICAgICAgcmV0LnogPSBjLnogKyBuLnogKiBkOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiByZXQ7CiAgICAgICAgfQoKICAgICAgICBpZiAodGhpcy5fbGluZWFyKSB7CiAgICAgICAgICB2YXIgbnYgPSB0aGlzLm5vcm1hbCgwKTsKICAgICAgICAgIHZhciBjb29yZHMgPSB0aGlzLnBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHsKICAgICAgICAgICAgdmFyIHJldCA9IHsKICAgICAgICAgICAgICB4OiBwLnggKyB0ICogbnYueCwKICAgICAgICAgICAgICB5OiBwLnkgKyB0ICogbnYueQogICAgICAgICAgICB9OwoKICAgICAgICAgICAgaWYgKHAueiAmJiBuLnopIHsKICAgICAgICAgICAgICByZXQueiA9IHAueiArIHQgKiBudi56OwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm4gcmV0OwogICAgICAgICAgfSk7CiAgICAgICAgICByZXR1cm4gW25ldyBCZXppZXIoY29vcmRzKV07CiAgICAgICAgfQoKICAgICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7CiAgICAgICAgcmV0dXJuIHJlZHVjZWQubWFwKGZ1bmN0aW9uIChzKSB7CiAgICAgICAgICBpZiAocy5fbGluZWFyKSB7CiAgICAgICAgICAgIHJldHVybiBzLm9mZnNldCh0KVswXTsKICAgICAgICAgIH0KCiAgICAgICAgICByZXR1cm4gcy5zY2FsZSh0KTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgc2ltcGxlOiBmdW5jdGlvbiBzaW1wbGUoKSB7CiAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IDMpIHsKICAgICAgICAgIHZhciBhMSA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMV0pOwogICAgICAgICAgdmFyIGEyID0gdXRpbHMuYW5nbGUodGhpcy5wb2ludHNbMF0sIHRoaXMucG9pbnRzWzNdLCB0aGlzLnBvaW50c1syXSk7CiAgICAgICAgICBpZiAoYTEgPiAwICYmIGEyIDwgMCB8fCBhMSA8IDAgJiYgYTIgPiAwKSByZXR1cm4gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICB2YXIgbjEgPSB0aGlzLm5vcm1hbCgwKTsKICAgICAgICB2YXIgbjIgPSB0aGlzLm5vcm1hbCgxKTsKICAgICAgICB2YXIgcyA9IG4xLnggKiBuMi54ICsgbjEueSAqIG4yLnk7CgogICAgICAgIGlmICh0aGlzLl8zZCkgewogICAgICAgICAgcyArPSBuMS56ICogbjIuejsKICAgICAgICB9CgogICAgICAgIHZhciBhbmdsZSA9IGFicyhhY29zKHMpKTsKICAgICAgICByZXR1cm4gYW5nbGUgPCBwaSAvIDM7CiAgICAgIH0sCiAgICAgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKCkgewogICAgICAgIHZhciBpLAogICAgICAgICAgICB0MSA9IDAsCiAgICAgICAgICAgIHQyID0gMCwKICAgICAgICAgICAgc3RlcCA9IDAuMDEsCiAgICAgICAgICAgIHNlZ21lbnQsCiAgICAgICAgICAgIHBhc3MxID0gW10sCiAgICAgICAgICAgIHBhc3MyID0gW107IC8vIGZpcnN0IHBhc3M6IHNwbGl0IG9uIGV4dHJlbWEKCiAgICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKS52YWx1ZXM7CgogICAgICAgIGlmIChleHRyZW1hLmluZGV4T2YoMCkgPT09IC0xKSB7CiAgICAgICAgICBleHRyZW1hID0gWzBdLmNvbmNhdChleHRyZW1hKTsKICAgICAgICB9CgogICAgICAgIGlmIChleHRyZW1hLmluZGV4T2YoMSkgPT09IC0xKSB7CiAgICAgICAgICBleHRyZW1hLnB1c2goMSk7CiAgICAgICAgfQoKICAgICAgICBmb3IgKHQxID0gZXh0cmVtYVswXSwgaSA9IDE7IGkgPCBleHRyZW1hLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICB0MiA9IGV4dHJlbWFbaV07CiAgICAgICAgICBzZWdtZW50ID0gdGhpcy5zcGxpdCh0MSwgdDIpOwogICAgICAgICAgc2VnbWVudC5fdDEgPSB0MTsKICAgICAgICAgIHNlZ21lbnQuX3QyID0gdDI7CiAgICAgICAgICBwYXNzMS5wdXNoKHNlZ21lbnQpOwogICAgICAgICAgdDEgPSB0MjsKICAgICAgICB9IC8vIHNlY29uZCBwYXNzOiBmdXJ0aGVyIHJlZHVjZSB0aGVzZSBzZWdtZW50cyB0byBzaW1wbGUgc2VnbWVudHMKCgogICAgICAgIHBhc3MxLmZvckVhY2goZnVuY3Rpb24gKHAxKSB7CiAgICAgICAgICB0MSA9IDA7CiAgICAgICAgICB0MiA9IDA7CgogICAgICAgICAgd2hpbGUgKHQyIDw9IDEpIHsKICAgICAgICAgICAgZm9yICh0MiA9IHQxICsgc3RlcDsgdDIgPD0gMSArIHN0ZXA7IHQyICs9IHN0ZXApIHsKICAgICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsIHQyKTsKCiAgICAgICAgICAgICAgaWYgKCFzZWdtZW50LnNpbXBsZSgpKSB7CiAgICAgICAgICAgICAgICB0MiAtPSBzdGVwOwoKICAgICAgICAgICAgICAgIGlmIChhYnModDEgLSB0MikgPCBzdGVwKSB7CiAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBuZXZlciBmb3JtIGEgcmVkdWN0aW9uCiAgICAgICAgICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsIHQyKTsKICAgICAgICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLCAwLCAxLCBwMS5fdDEsIHAxLl90Mik7CiAgICAgICAgICAgICAgICBzZWdtZW50Ll90MiA9IHV0aWxzLm1hcCh0MiwgMCwgMSwgcDEuX3QxLCBwMS5fdDIpOwogICAgICAgICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTsKICAgICAgICAgICAgICAgIHQxID0gdDI7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KCiAgICAgICAgICBpZiAodDEgPCAxKSB7CiAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSwgMSk7CiAgICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLCAwLCAxLCBwMS5fdDEsIHAxLl90Mik7CiAgICAgICAgICAgIHNlZ21lbnQuX3QyID0gcDEuX3QyOwogICAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICAgIHJldHVybiBwYXNzMjsKICAgICAgfSwKICAgICAgc2NhbGU6IGZ1bmN0aW9uIHNjYWxlKGQpIHsKICAgICAgICB2YXIgb3JkZXIgPSB0aGlzLm9yZGVyOwogICAgICAgIHZhciBkaXN0YW5jZUZuID0gZmFsc2U7CgogICAgICAgIGlmICh0eXBlb2YgZCA9PT0gImZ1bmN0aW9uIikgewogICAgICAgICAgZGlzdGFuY2VGbiA9IGQ7CiAgICAgICAgfQoKICAgICAgICBpZiAoZGlzdGFuY2VGbiAmJiBvcmRlciA9PT0gMikgewogICAgICAgICAgcmV0dXJuIHRoaXMucmFpc2UoKS5zY2FsZShkaXN0YW5jZUZuKTsKICAgICAgICB9IC8vIFRPRE86IGFkZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBkZWdlbmVyYXRlICg9bGluZWFyKSBjdXJ2ZXMuCgoKICAgICAgICB2YXIgY2xvY2t3aXNlID0gdGhpcy5jbG9ja3dpc2U7CiAgICAgICAgdmFyIHIxID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oMCkgOiBkOwogICAgICAgIHZhciByMiA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDEpIDogZDsKICAgICAgICB2YXIgdiA9IFt0aGlzLm9mZnNldCgwLCAxMCksIHRoaXMub2Zmc2V0KDEsIDEwKV07CiAgICAgICAgdmFyIG8gPSB1dGlscy5sbGk0KHZbMF0sIHZbMF0uYywgdlsxXSwgdlsxXS5jKTsKCiAgICAgICAgaWYgKCFvKSB7CiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoImNhbm5vdCBzY2FsZSB0aGlzIGN1cnZlLiBUcnkgcmVkdWNpbmcgaXQgZmlyc3QuIik7CiAgICAgICAgfSAvLyBtb3ZlIGFsbCBwb2ludHMgYnkgZGlzdGFuY2UgJ2QnIHdydCB0aGUgb3JpZ2luICdvJwoKCiAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzLAogICAgICAgICAgICBucCA9IFtdOyAvLyBtb3ZlIGVuZCBwb2ludHMgYnkgZml4ZWQgZGlzdGFuY2UgYWxvbmcgbm9ybWFsLgoKICAgICAgICBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAodCkgewogICAgICAgICAgdmFyIHAgPSBucFt0ICogb3JkZXJdID0gdXRpbHMuY29weShwb2ludHNbdCAqIG9yZGVyXSk7CiAgICAgICAgICBwLnggKz0gKHQgPyByMiA6IHIxKSAqIHZbdF0ubi54OwogICAgICAgICAgcC55ICs9ICh0ID8gcjIgOiByMSkgKiB2W3RdLm4ueTsKICAgICAgICB9LmJpbmQodGhpcykpOwoKICAgICAgICBpZiAoIWRpc3RhbmNlRm4pIHsKICAgICAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgdG8gbGllIG9uIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhlIG9mZnNldAogICAgICAgICAgLy8gZGVyaXZhdGl2ZSB2ZWN0b3IsIGFuZCB0aGUgb3JpZ2luLXRocm91Z2gtY29udHJvbCB2ZWN0b3IKICAgICAgICAgIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgIGlmICh0aGlzLm9yZGVyID09PSAyICYmICEhdCkgcmV0dXJuOwogICAgICAgICAgICB2YXIgcCA9IG5wW3QgKiBvcmRlcl07CiAgICAgICAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpOwogICAgICAgICAgICB2YXIgcDIgPSB7CiAgICAgICAgICAgICAgeDogcC54ICsgZC54LAogICAgICAgICAgICAgIHk6IHAueSArIGQueQogICAgICAgICAgICB9OwogICAgICAgICAgICBucFt0ICsgMV0gPSB1dGlscy5sbGk0KHAsIHAyLCBvLCBwb2ludHNbdCArIDFdKTsKICAgICAgICAgIH0uYmluZCh0aGlzKSk7CiAgICAgICAgICByZXR1cm4gbmV3IEJlemllcihucCk7CiAgICAgICAgfSAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIGJ5ICJob3dldmVyIG11Y2ggbmVjZXNzYXJ5IHRvCiAgICAgICAgLy8gZW5zdXJlIHRoZSBjb3JyZWN0IHRhbmdlbnQgdG8gZW5kcG9pbnQiLgoKCiAgICAgICAgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIGlmICh0aGlzLm9yZGVyID09PSAyICYmICEhdCkgcmV0dXJuOwogICAgICAgICAgdmFyIHAgPSBwb2ludHNbdCArIDFdOwogICAgICAgICAgdmFyIG92ID0gewogICAgICAgICAgICB4OiBwLnggLSBvLngsCiAgICAgICAgICAgIHk6IHAueSAtIG8ueQogICAgICAgICAgfTsKICAgICAgICAgIHZhciByYyA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKCh0ICsgMSkgLyBvcmRlcikgOiBkOwogICAgICAgICAgaWYgKGRpc3RhbmNlRm4gJiYgIWNsb2Nrd2lzZSkgcmMgPSAtcmM7CiAgICAgICAgICB2YXIgbSA9IHNxcnQob3YueCAqIG92LnggKyBvdi55ICogb3YueSk7CiAgICAgICAgICBvdi54IC89IG07CiAgICAgICAgICBvdi55IC89IG07CiAgICAgICAgICBucFt0ICsgMV0gPSB7CiAgICAgICAgICAgIHg6IHAueCArIHJjICogb3YueCwKICAgICAgICAgICAgeTogcC55ICsgcmMgKiBvdi55CiAgICAgICAgICB9OwogICAgICAgIH0uYmluZCh0aGlzKSk7CiAgICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApOwogICAgICB9LAogICAgICBvdXRsaW5lOiBmdW5jdGlvbiBvdXRsaW5lKGQxLCBkMiwgZDMsIGQ0KSB7CiAgICAgICAgZDIgPSB0eXBlb2YgZDIgPT09ICJ1bmRlZmluZWQiID8gZDEgOiBkMjsKICAgICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCksCiAgICAgICAgICAgIGxlbiA9IHJlZHVjZWQubGVuZ3RoLAogICAgICAgICAgICBmY3VydmVzID0gW10sCiAgICAgICAgICAgIGJjdXJ2ZXMgPSBbXSwKICAgICAgICAgICAgcCwKICAgICAgICAgICAgYWxlbiA9IDAsCiAgICAgICAgICAgIHRsZW4gPSB0aGlzLmxlbmd0aCgpOwogICAgICAgIHZhciBncmFkdWF0ZWQgPSB0eXBlb2YgZDMgIT09ICJ1bmRlZmluZWQiICYmIHR5cGVvZiBkNCAhPT0gInVuZGVmaW5lZCI7CgogICAgICAgIGZ1bmN0aW9uIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24ocywgZSwgdGxlbiwgYWxlbiwgc2xlbikgewogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7CiAgICAgICAgICAgIHZhciBmMSA9IGFsZW4gLyB0bGVuLAogICAgICAgICAgICAgICAgZjIgPSAoYWxlbiArIHNsZW4pIC8gdGxlbiwKICAgICAgICAgICAgICAgIGQgPSBlIC0gczsKICAgICAgICAgICAgcmV0dXJuIHV0aWxzLm1hcCh2LCAwLCAxLCBzICsgZjEgKiBkLCBzICsgZjIgKiBkKTsKICAgICAgICAgIH07CiAgICAgICAgfSAvLyBmb3JtIGN1cnZlIG91bGluZXMKCgogICAgICAgIHJlZHVjZWQuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkgewogICAgICAgICAgc2xlbiA9IHNlZ21lbnQubGVuZ3RoKCk7CgogICAgICAgICAgaWYgKGdyYWR1YXRlZCkgewogICAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZShsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKGQxLCBkMywgdGxlbiwgYWxlbiwgc2xlbikpKTsKICAgICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUobGluZWFyRGlzdGFuY2VGdW5jdGlvbigtZDIsIC1kNCwgdGxlbiwgYWxlbiwgc2xlbikpKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGZjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKGQxKSk7CiAgICAgICAgICAgIGJjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKC1kMikpOwogICAgICAgICAgfQoKICAgICAgICAgIGFsZW4gKz0gc2xlbjsKICAgICAgICB9KTsgLy8gcmV2ZXJzZSB0aGUgInJldHVybiIgb3V0bGluZQoKICAgICAgICBiY3VydmVzID0gYmN1cnZlcy5tYXAoZnVuY3Rpb24gKHMpIHsKICAgICAgICAgIHAgPSBzLnBvaW50czsKCiAgICAgICAgICBpZiAocFszXSkgewogICAgICAgICAgICBzLnBvaW50cyA9IFtwWzNdLCBwWzJdLCBwWzFdLCBwWzBdXTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHMucG9pbnRzID0gW3BbMl0sIHBbMV0sIHBbMF1dOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBzOwogICAgICAgIH0pLnJldmVyc2UoKTsgLy8gZm9ybSB0aGUgZW5kY2FwcyBhcyBsaW5lcwoKICAgICAgICB2YXIgZnMgPSBmY3VydmVzWzBdLnBvaW50c1swXSwKICAgICAgICAgICAgZmUgPSBmY3VydmVzW2xlbiAtIDFdLnBvaW50c1tmY3VydmVzW2xlbiAtIDFdLnBvaW50cy5sZW5ndGggLSAxXSwKICAgICAgICAgICAgYnMgPSBiY3VydmVzW2xlbiAtIDFdLnBvaW50c1tiY3VydmVzW2xlbiAtIDFdLnBvaW50cy5sZW5ndGggLSAxXSwKICAgICAgICAgICAgYmUgPSBiY3VydmVzWzBdLnBvaW50c1swXSwKICAgICAgICAgICAgbHMgPSB1dGlscy5tYWtlbGluZShicywgZnMpLAogICAgICAgICAgICBsZSA9IHV0aWxzLm1ha2VsaW5lKGZlLCBiZSksCiAgICAgICAgICAgIHNlZ21lbnRzID0gW2xzXS5jb25jYXQoZmN1cnZlcykuY29uY2F0KFtsZV0pLmNvbmNhdChiY3VydmVzKSwKICAgICAgICAgICAgc2xlbiA9IHNlZ21lbnRzLmxlbmd0aDsKICAgICAgICByZXR1cm4gbmV3IFBvbHlCZXppZXIoc2VnbWVudHMpOwogICAgICB9LAogICAgICBvdXRsaW5lc2hhcGVzOiBmdW5jdGlvbiBvdXRsaW5lc2hhcGVzKGQxLCBkMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHsKICAgICAgICBkMiA9IGQyIHx8IGQxOwogICAgICAgIHZhciBvdXRsaW5lID0gdGhpcy5vdXRsaW5lKGQxLCBkMikuY3VydmVzOwogICAgICAgIHZhciBzaGFwZXMgPSBbXTsKCiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IG91dGxpbmUubGVuZ3RoOyBpIDwgbGVuIC8gMjsgaSsrKSB7CiAgICAgICAgICB2YXIgc2hhcGUgPSB1dGlscy5tYWtlc2hhcGUob3V0bGluZVtpXSwgb3V0bGluZVtsZW4gLSBpXSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpOwogICAgICAgICAgc2hhcGUuc3RhcnRjYXAudmlydHVhbCA9IGkgPiAxOwogICAgICAgICAgc2hhcGUuZW5kY2FwLnZpcnR1YWwgPSBpIDwgbGVuIC8gMiAtIDE7CiAgICAgICAgICBzaGFwZXMucHVzaChzaGFwZSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gc2hhcGVzOwogICAgICB9LAogICAgICBpbnRlcnNlY3RzOiBmdW5jdGlvbiBpbnRlcnNlY3RzKGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkgewogICAgICAgIGlmICghY3VydmUpIHJldHVybiB0aGlzLnNlbGZpbnRlcnNlY3RzKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTsKCiAgICAgICAgaWYgKGN1cnZlLnAxICYmIGN1cnZlLnAyKSB7CiAgICAgICAgICByZXR1cm4gdGhpcy5saW5lSW50ZXJzZWN0cyhjdXJ2ZSk7CiAgICAgICAgfQoKICAgICAgICBpZiAoY3VydmUgaW5zdGFuY2VvZiBCZXppZXIpIHsKICAgICAgICAgIGN1cnZlID0gY3VydmUucmVkdWNlKCk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdGhpcy5jdXJ2ZWludGVyc2VjdHModGhpcy5yZWR1Y2UoKSwgY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTsKICAgICAgfSwKICAgICAgbGluZUludGVyc2VjdHM6IGZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzKGxpbmUpIHsKICAgICAgICB2YXIgbXggPSBtaW4obGluZS5wMS54LCBsaW5lLnAyLngpLAogICAgICAgICAgICBteSA9IG1pbihsaW5lLnAxLnksIGxpbmUucDIueSksCiAgICAgICAgICAgIE1YID0gbWF4KGxpbmUucDEueCwgbGluZS5wMi54KSwKICAgICAgICAgICAgTVkgPSBtYXgobGluZS5wMS55LCBsaW5lLnAyLnkpLAogICAgICAgICAgICBzZWxmID0gdGhpczsKICAgICAgICByZXR1cm4gdXRpbHMucm9vdHModGhpcy5wb2ludHMsIGxpbmUpLmZpbHRlcihmdW5jdGlvbiAodCkgewogICAgICAgICAgdmFyIHAgPSBzZWxmLmdldCh0KTsKICAgICAgICAgIHJldHVybiB1dGlscy5iZXR3ZWVuKHAueCwgbXgsIE1YKSAmJiB1dGlscy5iZXR3ZWVuKHAueSwgbXksIE1ZKTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgc2VsZmludGVyc2VjdHM6IGZ1bmN0aW9uIHNlbGZpbnRlcnNlY3RzKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7CiAgICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpOyAvLyAic2ltcGxlIiBjdXJ2ZXMgY2Fubm90IGludGVyc2VjdCB3aXRoIHRoZWlyIGRpcmVjdAogICAgICAgIC8vIG5laWdoYm91ciwgc28gZm9yIGVhY2ggc2VnbWVudCBYIHdlIGNoZWNrIHdoZXRoZXIKICAgICAgICAvLyBpdCBpbnRlcnNlY3RzIFswOngtMl1beCsyOmxhc3RdLgoKICAgICAgICB2YXIgaSwKICAgICAgICAgICAgbGVuID0gcmVkdWNlZC5sZW5ndGggLSAyLAogICAgICAgICAgICByZXN1bHRzID0gW10sCiAgICAgICAgICAgIHJlc3VsdCwKICAgICAgICAgICAgbGVmdCwKICAgICAgICAgICAgcmlnaHQ7CgogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykgewogICAgICAgICAgbGVmdCA9IHJlZHVjZWQuc2xpY2UoaSwgaSArIDEpOwogICAgICAgICAgcmlnaHQgPSByZWR1Y2VkLnNsaWNlKGkgKyAyKTsKICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY3VydmVpbnRlcnNlY3RzKGxlZnQsIHJpZ2h0LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7CiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocmVzdWx0KTsKICAgICAgICB9CgogICAgICAgIHJldHVybiByZXN1bHRzOwogICAgICB9LAogICAgICBjdXJ2ZWludGVyc2VjdHM6IGZ1bmN0aW9uIGN1cnZlaW50ZXJzZWN0cyhjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7CiAgICAgICAgdmFyIHBhaXJzID0gW107IC8vIHN0ZXAgMTogcGFpciBvZmYgYW55IG92ZXJsYXBwaW5nIHNlZ21lbnRzCgogICAgICAgIGMxLmZvckVhY2goZnVuY3Rpb24gKGwpIHsKICAgICAgICAgIGMyLmZvckVhY2goZnVuY3Rpb24gKHIpIHsKICAgICAgICAgICAgaWYgKGwub3ZlcmxhcHMocikpIHsKICAgICAgICAgICAgICBwYWlycy5wdXNoKHsKICAgICAgICAgICAgICAgIGxlZnQ6IGwsCiAgICAgICAgICAgICAgICByaWdodDogcgogICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9CiAgICAgICAgICB9KTsKICAgICAgICB9KTsgLy8gc3RlcCAyOiBmb3IgZWFjaCBwYWlyaW5nLCBydW4gdGhyb3VnaCB0aGUgY29udmVyZ2VuY2UgYWxnb3JpdGhtLgoKICAgICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdOwogICAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHsKICAgICAgICAgIHZhciByZXN1bHQgPSB1dGlscy5wYWlyaXRlcmF0aW9uKHBhaXIubGVmdCwgcGFpci5yaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpOwoKICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkgewogICAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5jb25jYXQocmVzdWx0KTsKICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uczsKICAgICAgfSwKICAgICAgYXJjczogZnVuY3Rpb24gYXJjcyhlcnJvclRocmVzaG9sZCkgewogICAgICAgIGVycm9yVGhyZXNob2xkID0gZXJyb3JUaHJlc2hvbGQgfHwgMC41OwogICAgICAgIHZhciBjaXJjbGVzID0gW107CiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZXJhdGUoZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpOwogICAgICB9LAogICAgICBfZXJyb3I6IGZ1bmN0aW9uIF9lcnJvcihwYywgbnAxLCBzLCBlKSB7CiAgICAgICAgdmFyIHEgPSAoZSAtIHMpIC8gNCwKICAgICAgICAgICAgYzEgPSB0aGlzLmdldChzICsgcSksCiAgICAgICAgICAgIGMyID0gdGhpcy5nZXQoZSAtIHEpLAogICAgICAgICAgICByZWYgPSB1dGlscy5kaXN0KHBjLCBucDEpLAogICAgICAgICAgICBkMSA9IHV0aWxzLmRpc3QocGMsIGMxKSwKICAgICAgICAgICAgZDIgPSB1dGlscy5kaXN0KHBjLCBjMik7CiAgICAgICAgcmV0dXJuIGFicyhkMSAtIHJlZikgKyBhYnMoZDIgLSByZWYpOwogICAgICB9LAogICAgICBfaXRlcmF0ZTogZnVuY3Rpb24gX2l0ZXJhdGUoZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpIHsKICAgICAgICB2YXIgdF9zID0gMCwKICAgICAgICAgICAgdF9lID0gMSwKICAgICAgICAgICAgc2FmZXR5OyAvLyB3ZSBkbyBhIGJpbmFyeSBzZWFyY2ggdG8gZmluZCB0aGUgImdvb2QgYHRgIGNsb3Nlc3QgdG8gbm8tbG9uZ2VyLWdvb2QiCgogICAgICAgIGRvIHsKICAgICAgICAgIHNhZmV0eSA9IDA7IC8vIHN0ZXAgMTogc3RhcnQgd2l0aCB0aGUgbWF4aW11bSBwb3NzaWJsZSBhcmMKCiAgICAgICAgICB0X2UgPSAxOyAvLyBwb2ludHM6CgogICAgICAgICAgdmFyIG5wMSA9IHRoaXMuZ2V0KHRfcyksCiAgICAgICAgICAgICAgbnAyLAogICAgICAgICAgICAgIG5wMywKICAgICAgICAgICAgICBhcmMsCiAgICAgICAgICAgICAgcHJldl9hcmM7IC8vIGJvb2xlYW5zOgoKICAgICAgICAgIHZhciBjdXJyX2dvb2QgPSBmYWxzZSwKICAgICAgICAgICAgICBwcmV2X2dvb2QgPSBmYWxzZSwKICAgICAgICAgICAgICBkb25lOyAvLyBudW1iZXJzOgoKICAgICAgICAgIHZhciB0X20gPSB0X2UsCiAgICAgICAgICAgICAgcHJldl9lID0gMTsKIC8vIHN0ZXAgMjogZmluZCB0aGUgYmVzdCBwb3NzaWJsZSBhcmMKCiAgICAgICAgICBkbyB7CiAgICAgICAgICAgIHByZXZfZ29vZCA9IGN1cnJfZ29vZDsKICAgICAgICAgICAgcHJldl9hcmMgPSBhcmM7CiAgICAgICAgICAgIHRfbSA9ICh0X3MgKyB0X2UpIC8gMjsKICAgICAgICAgICAgbnAyID0gdGhpcy5nZXQodF9tKTsKICAgICAgICAgICAgbnAzID0gdGhpcy5nZXQodF9lKTsKICAgICAgICAgICAgYXJjID0gdXRpbHMuZ2V0Y2NlbnRlcihucDEsIG5wMiwgbnAzKTsgLy9hbHNvIHNhdmUgdGhlIHQgdmFsdWVzCgogICAgICAgICAgICBhcmMuaW50ZXJ2YWwgPSB7CiAgICAgICAgICAgICAgc3RhcnQ6IHRfcywKICAgICAgICAgICAgICBlbmQ6IHRfZQogICAgICAgICAgICB9OwoKICAgICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXJyb3IoYXJjLCBucDEsIHRfcywgdF9lKTsKCiAgICAgICAgICAgIGN1cnJfZ29vZCA9IGVycm9yIDw9IGVycm9yVGhyZXNob2xkOwogICAgICAgICAgICBkb25lID0gcHJldl9nb29kICYmICFjdXJyX2dvb2Q7CiAgICAgICAgICAgIGlmICghZG9uZSkgcHJldl9lID0gdF9lOyAvLyB0aGlzIGFyYyBpcyBmaW5lOiB3ZSBjYW4gbW92ZSAnZScgdXAgdG8gc2VlIGlmIHdlIGNhbiBmaW5kIGEgd2lkZXIgYXJjCgogICAgICAgICAgICBpZiAoY3Vycl9nb29kKSB7CiAgICAgICAgICAgICAgLy8gaWYgZSBpcyBhbHJlYWR5IGF0IG1heCwgdGhlbiB3ZSdyZSBkb25lIGZvciB0aGlzIGFyYy4KICAgICAgICAgICAgICBpZiAodF9lID49IDEpIHsKICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBjYXAgYXQgdD0xCiAgICAgICAgICAgICAgICBhcmMuaW50ZXJ2YWwuZW5kID0gcHJldl9lID0gMTsKICAgICAgICAgICAgICAgIHByZXZfYXJjID0gYXJjOyAvLyBpZiB3ZSBjYXBwZWQgdGhlIGFyYyBzZWdtZW50IHRvIHQ9MSB3ZSBhbHNvIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQKICAgICAgICAgICAgICAgIC8vIHRoZSBhcmMncyBlbmQgYW5nbGUgaXMgY29ycmVjdCB3aXRoIHJlc3BlY3QgdG8gdGhlIGJlemllciBlbmQgcG9pbnQuCgogICAgICAgICAgICAgICAgaWYgKHRfZSA+IDEpIHsKICAgICAgICAgICAgICAgICAgdmFyIGQgPSB7CiAgICAgICAgICAgICAgICAgICAgeDogYXJjLnggKyBhcmMuciAqIGNvcyhhcmMuZSksCiAgICAgICAgICAgICAgICAgICAgeTogYXJjLnkgKyBhcmMuciAqIHNpbihhcmMuZSkKICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgICAgYXJjLmUgKz0gdXRpbHMuYW5nbGUoewogICAgICAgICAgICAgICAgICAgIHg6IGFyYy54LAogICAgICAgICAgICAgICAgICAgIHk6IGFyYy55CiAgICAgICAgICAgICAgICAgIH0sIGQsIHRoaXMuZ2V0KDEpKTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICB9IC8vIGlmIG5vdCwgbW92ZSBpdCB1cCBieSBoYWxmIHRoZSBpdGVyYXRpb24gZGlzdGFuY2UKCgogICAgICAgICAgICAgIHRfZSA9IHRfZSArICh0X2UgLSB0X3MpIC8gMjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgYmFkIGFyYzogd2UgbmVlZCB0byBtb3ZlICdlJyBkb3duIHRvIGZpbmQgYSBnb29kIGFyYwogICAgICAgICAgICAgIHRfZSA9IHRfbTsKICAgICAgICAgICAgfQogICAgICAgICAgfSB3aGlsZSAoIWRvbmUgJiYgc2FmZXR5KysgPCAxMDApOwoKICAgICAgICAgIGlmIChzYWZldHkgPj0gMTAwKSB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfSAvLyBjb25zb2xlLmxvZygiTDgzNTogW0ZdIGFyYyBmb3VuZCIsIHRfcywgcHJldl9lLCBwcmV2X2FyYy54LCBwcmV2X2FyYy55LCBwcmV2X2FyYy5zLCBwcmV2X2FyYy5lKTsKCgogICAgICAgICAgcHJldl9hcmMgPSBwcmV2X2FyYyA/IHByZXZfYXJjIDogYXJjOwogICAgICAgICAgY2lyY2xlcy5wdXNoKHByZXZfYXJjKTsKICAgICAgICAgIHRfcyA9IHByZXZfZTsKICAgICAgICB9IHdoaWxlICh0X2UgPCAxKTsKCiAgICAgICAgcmV0dXJuIGNpcmNsZXM7CiAgICAgIH0KICAgIH07CiAgICBtb2R1bGUuZXhwb3J0cyA9IEJlemllcjsKICB9KSgpOwogIC8qKiovCgp9LAovKiAyICovCgovKioqLwpmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7CgogIChmdW5jdGlvbiAoKSB7CgogICAgdmFyIGFicyA9IE1hdGguYWJzLAogICAgICAgIGNvcyA9IE1hdGguY29zLAogICAgICAgIHNpbiA9IE1hdGguc2luLAogICAgICAgIGFjb3MgPSBNYXRoLmFjb3MsCiAgICAgICAgYXRhbjIgPSBNYXRoLmF0YW4yLAogICAgICAgIHNxcnQgPSBNYXRoLnNxcnQsCiAgICAgICAgcG93ID0gTWF0aC5wb3csCiAgICAgICAgLy8gY3ViZSByb290IGZ1bmN0aW9uIHlpZWxkaW5nIHJlYWwgcm9vdHMKICAgIGNydCA9IGZ1bmN0aW9uIGNydCh2KSB7CiAgICAgIHJldHVybiB2IDwgMCA/IC1wb3coLXYsIDEgLyAzKSA6IHBvdyh2LCAxIC8gMyk7CiAgICB9LAogICAgICAgIC8vIHRyaWcgY29uc3RhbnRzCiAgICBwaSA9IE1hdGguUEksCiAgICAgICAgdGF1ID0gMiAqIHBpLAogICAgICAgIHF1YXJ0ID0gcGkgLyAyLAogICAgICAgIC8vIGZsb2F0IHByZWNpc2lvbiBzaWduaWZpY2FudCBkZWNpbWFsCiAgICBlcHNpbG9uID0gMC4wMDAwMDEsCiAgICAgICAgLy8gZXh0cmVtYXMgdXNlZCBpbiBiYm94IGNhbGN1bGF0aW9uIGFuZCBzaW1pbGFyIGFsZ29yaXRobXMKICAgIG5NYXggPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxLAogICAgICAgIG5NaW4gPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUiB8fCAtOTAwNzE5OTI1NDc0MDk5MSwKICAgICAgICAvLyBhIHplcm8gY29vcmRpbmF0ZSwgd2hpY2ggaXMgc3VycHJpc2luZ2x5IHVzZWZ1bAogICAgWkVSTyA9IHsKICAgICAgeDogMCwKICAgICAgeTogMCwKICAgICAgejogMAogICAgfTsgLy8gQmV6aWVyIHV0aWxpdHkgZnVuY3Rpb25zCgoKICAgIHZhciB1dGlscyA9IHsKICAgICAgLy8gTGVnZW5kcmUtR2F1c3MgYWJzY2lzc2FlIHdpdGggbj0yNCAoeF9pIHZhbHVlcywgZGVmaW5lZCBhdCBpPW4gYXMgdGhlIHJvb3RzIG9mIHRoZSBudGggb3JkZXIgTGVnZW5kcmUgcG9seW5vbWlhbCBQbih4KSkKICAgICAgVHZhbHVlczogWy0wLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksIDAuMDY0MDU2ODkyODYyNjA1NjI2MDg1MDQzMDgyNjI0NzQ1MDM4NTkwOSwgLTAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCwgMC4xOTExMTg4Njc0NzM2MTYzMDkxNTg2Mzk4MjA3NTcwNjk2MzE4NDA0LCAtMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LCAwLjMxNTA0MjY3OTY5NjE2MzM3NDM4Njc5MzI5MTMxOTgxMDI0MDc4NjQsIC0wLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsIDAuNDMzNzkzNTA3NjI2MDQ1MTM4NDg3MDg0MjMxOTEzMzQ5NzEyNDUyNCwgLTAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNywgMC41NDU0MjE0NzEzODg4Mzk1MzU2NTgzNzU2MTcyMTgzNzIzNzAwMTA3LCAtMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LCAwLjY0ODA5MzY1MTkzNjk3NTU2OTI1MjQ5NTc4NjkxMDc0NzYyNjY2OTYsIC0wLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsIDAuNzQwMTI0MTkxNTc4NTU0MzY0MjQzODI4MTAzMDk5OTc4NDI1NTIzMiwgLTAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSwgMC44MjAwMDE5ODU5NzM5MDI5MjE5NTM5NDk4NzI2Njk3NDUyMDgwNzYxLCAtMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLCAwLjg4NjQxNTUyNzAwNDQwMTAzNDIxMzE1NDM0MTk4MjE5Njc1NTA4NzMsIC0wLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsIDAuOTM4Mjc0NTUyMDAyNzMyNzU4NTIzNjQ5MDAxNzA4NzIxNDQ5NjU0OCwgLTAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSwgMC45NzQ3Mjg1NTU5NzEzMDk0OTgxOTgzOTE5OTMwMDgxNjkwNjE3NDExLCAtMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1LCAwLjk5NTE4NzIxOTk5NzAyMTM2MDE3OTk5NzQwOTcwMDczNjgxMTg3NDVdLAogICAgICAvLyBMZWdlbmRyZS1HYXVzcyB3ZWlnaHRzIHdpdGggbj0yNCAod19pIHZhbHVlcywgZGVmaW5lZCBieSBhIGZ1bmN0aW9uIGxpbmtlZCB0byBpbiB0aGUgQmV6aWVyIHByaW1lciBhcnRpY2xlKQogICAgICBDdmFsdWVzOiBbMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LCAwLjEyNzkzODE5NTM0Njc1MjE1Njk3NDA1NjE2NTIyNDY5NTM3MTg1MTcsIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCwgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LCAwLjEyMTY3MDQ3MjkyNzgwMzM5MTIwNDQ2MzE1MzQ3NjI2MjQyNTYwNywgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcsIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMiwgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLCAwLjEwNzQ0NDI3MDExNTk2NTYzNDc4MjU3NzM0MjQ0NjYwNjIyMjc5NDYsIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NiwgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LCAwLjA5NzYxODY1MjEwNDExMzg4ODI2OTg4MDY2NDQ2NDI0NzE1NDQyNzksIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1LCAwLjA4NjE5MDE2MTUzMTk1MzI3NTkxNzE4NTIwMjk4Mzc0MjY2NzE4NSwgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLCAwLjA3MzM0NjQ4MTQxMTA4MDMwNTczNDAzMzYxNTI1MzExNjUxODExOTMsIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMiwgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLCAwLjA0NDI3NzQzODgxNzQxOTgwNjE2ODYwMjc0ODIxMTMzODIyODg1OTMsIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MywgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLCAwLjAyODUzMTM4ODYyODkzMzY2MzE4MTMwNzgxNTk1MTg3ODI4NjQ0OTEsIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OSwgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5XSwKICAgICAgYXJjZm46IGZ1bmN0aW9uIGFyY2ZuKHQsIGRlcml2YXRpdmVGbikgewogICAgICAgIHZhciBkID0gZGVyaXZhdGl2ZUZuKHQpOwogICAgICAgIHZhciBsID0gZC54ICogZC54ICsgZC55ICogZC55OwoKICAgICAgICBpZiAodHlwZW9mIGQueiAhPT0gInVuZGVmaW5lZCIpIHsKICAgICAgICAgIGwgKz0gZC56ICogZC56OwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHNxcnQobCk7CiAgICAgIH0sCiAgICAgIGNvbXB1dGU6IGZ1bmN0aW9uIGNvbXB1dGUodCwgcG9pbnRzLCBfM2QpIHsKICAgICAgICAvLyBzaG9ydGN1dHMKICAgICAgICBpZiAodCA9PT0gMCkgewogICAgICAgICAgcmV0dXJuIHBvaW50c1swXTsKICAgICAgICB9CgogICAgICAgIHZhciBvcmRlciA9IHBvaW50cy5sZW5ndGggLSAxOwoKICAgICAgICBpZiAodCA9PT0gMSkgewogICAgICAgICAgcmV0dXJuIHBvaW50c1tvcmRlcl07CiAgICAgICAgfQoKICAgICAgICB2YXIgcCA9IHBvaW50czsKICAgICAgICB2YXIgbXQgPSAxIC0gdDsgLy8gY29uc3RhbnQ/CgogICAgICAgIGlmIChvcmRlciA9PT0gMCkgewogICAgICAgICAgcmV0dXJuIHBvaW50c1swXTsKICAgICAgICB9IC8vIGxpbmVhcj8KCgogICAgICAgIGlmIChvcmRlciA9PT0gMSkgewogICAgICAgICAgcmV0ID0gewogICAgICAgICAgICB4OiBtdCAqIHBbMF0ueCArIHQgKiBwWzFdLngsCiAgICAgICAgICAgIHk6IG10ICogcFswXS55ICsgdCAqIHBbMV0ueQogICAgICAgICAgfTsKCiAgICAgICAgICBpZiAoXzNkKSB7CiAgICAgICAgICAgIHJldC56ID0gbXQgKiBwWzBdLnogKyB0ICogcFsxXS56OwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiByZXQ7CiAgICAgICAgfSAvLyBxdWFkcmF0aWMvY3ViaWMgY3VydmU/CgoKICAgICAgICBpZiAob3JkZXIgPCA0KSB7CiAgICAgICAgICB2YXIgbXQyID0gbXQgKiBtdCwKICAgICAgICAgICAgICB0MiA9IHQgKiB0LAogICAgICAgICAgICAgIGEsCiAgICAgICAgICAgICAgYiwKICAgICAgICAgICAgICBjLAogICAgICAgICAgICAgIGQgPSAwOwoKICAgICAgICAgIGlmIChvcmRlciA9PT0gMikgewogICAgICAgICAgICBwID0gW3BbMF0sIHBbMV0sIHBbMl0sIFpFUk9dOwogICAgICAgICAgICBhID0gbXQyOwogICAgICAgICAgICBiID0gbXQgKiB0ICogMjsKICAgICAgICAgICAgYyA9IHQyOwogICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gMykgewogICAgICAgICAgICBhID0gbXQyICogbXQ7CiAgICAgICAgICAgIGIgPSBtdDIgKiB0ICogMzsKICAgICAgICAgICAgYyA9IG10ICogdDIgKiAzOwogICAgICAgICAgICBkID0gdCAqIHQyOwogICAgICAgICAgfQoKICAgICAgICAgIHZhciByZXQgPSB7CiAgICAgICAgICAgIHg6IGEgKiBwWzBdLnggKyBiICogcFsxXS54ICsgYyAqIHBbMl0ueCArIGQgKiBwWzNdLngsCiAgICAgICAgICAgIHk6IGEgKiBwWzBdLnkgKyBiICogcFsxXS55ICsgYyAqIHBbMl0ueSArIGQgKiBwWzNdLnkKICAgICAgICAgIH07CgogICAgICAgICAgaWYgKF8zZCkgewogICAgICAgICAgICByZXQueiA9IGEgKiBwWzBdLnogKyBiICogcFsxXS56ICsgYyAqIHBbMl0ueiArIGQgKiBwWzNdLno7CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIHJldDsKICAgICAgICB9IC8vIGhpZ2hlciBvcmRlciBjdXJ2ZXM6IHVzZSBkZSBDYXN0ZWxqYXUncyBjb21wdXRhdGlvbgoKCiAgICAgICAgdmFyIGRDcHRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb2ludHMpKTsKCiAgICAgICAgd2hpbGUgKGRDcHRzLmxlbmd0aCA+IDEpIHsKICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZENwdHMubGVuZ3RoIC0gMTsgaSsrKSB7CiAgICAgICAgICAgIGRDcHRzW2ldID0gewogICAgICAgICAgICAgIHg6IGRDcHRzW2ldLnggKyAoZENwdHNbaSArIDFdLnggLSBkQ3B0c1tpXS54KSAqIHQsCiAgICAgICAgICAgICAgeTogZENwdHNbaV0ueSArIChkQ3B0c1tpICsgMV0ueSAtIGRDcHRzW2ldLnkpICogdAogICAgICAgICAgICB9OwoKICAgICAgICAgICAgaWYgKHR5cGVvZiBkQ3B0c1tpXS56ICE9PSAidW5kZWZpbmVkIikgewogICAgICAgICAgICAgIGRDcHRzW2ldID0gZENwdHNbaV0ueiArIChkQ3B0c1tpICsgMV0ueiAtIGRDcHRzW2ldLnopICogdDsKICAgICAgICAgICAgfQogICAgICAgICAgfQoKICAgICAgICAgIGRDcHRzLnNwbGljZShkQ3B0cy5sZW5ndGggLSAxLCAxKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBkQ3B0c1swXTsKICAgICAgfSwKICAgICAgY29tcHV0ZVdpdGhSYXRpb3M6IGZ1bmN0aW9uIGNvbXB1dGVXaXRoUmF0aW9zKHQsIHBvaW50cywgcmF0aW9zLCBfM2QpIHsKICAgICAgICB2YXIgbXQgPSAxIC0gdCwKICAgICAgICAgICAgciA9IHJhdGlvcywKICAgICAgICAgICAgcCA9IHBvaW50cywKICAgICAgICAgICAgZDsKICAgICAgICB2YXIgZjEgPSByWzBdLAogICAgICAgICAgICBmMiA9IHJbMV0sCiAgICAgICAgICAgIGYzID0gclsyXSwKICAgICAgICAgICAgZjQgPSByWzNdOyAvLyBzcGVjIGZvciBsaW5lYXIKCiAgICAgICAgZjEgKj0gbXQ7CiAgICAgICAgZjIgKj0gdDsKCiAgICAgICAgaWYgKHAubGVuZ3RoID09PSAyKSB7CiAgICAgICAgICBkID0gZjEgKyBmMjsKICAgICAgICAgIHJldHVybiB7CiAgICAgICAgICAgIHg6IChmMSAqIHBbMF0ueCArIGYyICogcFsxXS54KSAvIGQsCiAgICAgICAgICAgIHk6IChmMSAqIHBbMF0ueSArIGYyICogcFsxXS55KSAvIGQsCiAgICAgICAgICAgIHo6ICFfM2QgPyBmYWxzZSA6IChmMSAqIHBbMF0ueiArIGYyICogcFsxXS56KSAvIGQKICAgICAgICAgIH07CiAgICAgICAgfSAvLyB1cGdyYWRlIHRvIHF1YWRyYXRpYwoKCiAgICAgICAgZjEgKj0gbXQ7CiAgICAgICAgZjIgKj0gMiAqIG10OwogICAgICAgIGYzICo9IHQgKiB0OwoKICAgICAgICBpZiAocC5sZW5ndGggPT09IDMpIHsKICAgICAgICAgIGQgPSBmMSArIGYyICsgZjM7CiAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICB4OiAoZjEgKiBwWzBdLnggKyBmMiAqIHBbMV0ueCArIGYzICogcFsyXS54KSAvIGQsCiAgICAgICAgICAgIHk6IChmMSAqIHBbMF0ueSArIGYyICogcFsxXS55ICsgZjMgKiBwWzJdLnkpIC8gZCwKICAgICAgICAgICAgejogIV8zZCA/IGZhbHNlIDogKGYxICogcFswXS56ICsgZjIgKiBwWzFdLnogKyBmMyAqIHBbMl0ueikgLyBkCiAgICAgICAgICB9OwogICAgICAgIH0gLy8gdXBncmFkZSB0byBjdWJpYwoKCiAgICAgICAgZjEgKj0gbXQ7CiAgICAgICAgZjIgKj0gMS41ICogbXQ7CiAgICAgICAgZjMgKj0gMyAqIG10OwogICAgICAgIGY0ICo9IHQgKiB0ICogdDsKCiAgICAgICAgaWYgKHAubGVuZ3RoID09PSA0KSB7CiAgICAgICAgICBkID0gZjEgKyBmMiArIGYzICsgZjQ7CiAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICB4OiAoZjEgKiBwWzBdLnggKyBmMiAqIHBbMV0ueCArIGYzICogcFsyXS54ICsgZjQgKiBwWzNdLngpIC8gZCwKICAgICAgICAgICAgeTogKGYxICogcFswXS55ICsgZjIgKiBwWzFdLnkgKyBmMyAqIHBbMl0ueSArIGY0ICogcFszXS55KSAvIGQsCiAgICAgICAgICAgIHo6ICFfM2QgPyBmYWxzZSA6IChmMSAqIHBbMF0ueiArIGYyICogcFsxXS56ICsgZjMgKiBwWzJdLnogKyBmNCAqIHBbM10ueikgLyBkCiAgICAgICAgICB9OwogICAgICAgIH0KICAgICAgfSwKICAgICAgZGVyaXZlOiBmdW5jdGlvbiBkZXJpdmUocG9pbnRzLCBfM2QpIHsKICAgICAgICB2YXIgZHBvaW50cyA9IFtdOwoKICAgICAgICBmb3IgKHZhciBwID0gcG9pbnRzLCBkID0gcC5sZW5ndGgsIGMgPSBkIC0gMTsgZCA+IDE7IGQtLSwgYy0tKSB7CiAgICAgICAgICB2YXIgbGlzdCA9IFtdOwoKICAgICAgICAgIGZvciAodmFyIGogPSAwLCBkcHQ7IGogPCBjOyBqKyspIHsKICAgICAgICAgICAgZHB0ID0gewogICAgICAgICAgICAgIHg6IGMgKiAocFtqICsgMV0ueCAtIHBbal0ueCksCiAgICAgICAgICAgICAgeTogYyAqIChwW2ogKyAxXS55IC0gcFtqXS55KQogICAgICAgICAgICB9OwoKICAgICAgICAgICAgaWYgKF8zZCkgewogICAgICAgICAgICAgIGRwdC56ID0gYyAqIChwW2ogKyAxXS56IC0gcFtqXS56KTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgbGlzdC5wdXNoKGRwdCk7CiAgICAgICAgICB9CgogICAgICAgICAgZHBvaW50cy5wdXNoKGxpc3QpOwogICAgICAgICAgcCA9IGxpc3Q7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gZHBvaW50czsKICAgICAgfSwKICAgICAgYmV0d2VlbjogZnVuY3Rpb24gYmV0d2Vlbih2LCBtLCBNKSB7CiAgICAgICAgcmV0dXJuIG0gPD0gdiAmJiB2IDw9IE0gfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBtKSB8fCB1dGlscy5hcHByb3hpbWF0ZWx5KHYsIE0pOwogICAgICB9LAogICAgICBhcHByb3hpbWF0ZWx5OiBmdW5jdGlvbiBhcHByb3hpbWF0ZWx5KGEsIGIsIHByZWNpc2lvbikgewogICAgICAgIHJldHVybiBhYnMoYSAtIGIpIDw9IChwcmVjaXNpb24gfHwgZXBzaWxvbik7CiAgICAgIH0sCiAgICAgIGxlbmd0aDogZnVuY3Rpb24gbGVuZ3RoKGRlcml2YXRpdmVGbikgewogICAgICAgIHZhciB6ID0gMC41LAogICAgICAgICAgICBzdW0gPSAwLAogICAgICAgICAgICBsZW4gPSB1dGlscy5UdmFsdWVzLmxlbmd0aCwKICAgICAgICAgICAgaSwKICAgICAgICAgICAgdDsKCiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7CiAgICAgICAgICB0ID0geiAqIHV0aWxzLlR2YWx1ZXNbaV0gKyB6OwogICAgICAgICAgc3VtICs9IHV0aWxzLkN2YWx1ZXNbaV0gKiB1dGlscy5hcmNmbih0LCBkZXJpdmF0aXZlRm4pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHogKiBzdW07CiAgICAgIH0sCiAgICAgIG1hcDogZnVuY3Rpb24gbWFwKHYsIGRzLCBkZSwgdHMsIHRlKSB7CiAgICAgICAgdmFyIGQxID0gZGUgLSBkcywKICAgICAgICAgICAgZDIgPSB0ZSAtIHRzLAogICAgICAgICAgICB2MiA9IHYgLSBkcywKICAgICAgICAgICAgciA9IHYyIC8gZDE7CiAgICAgICAgcmV0dXJuIHRzICsgZDIgKiByOwogICAgICB9LAogICAgICBsZXJwOiBmdW5jdGlvbiBsZXJwKHIsIHYxLCB2MikgewogICAgICAgIHZhciByZXQgPSB7CiAgICAgICAgICB4OiB2MS54ICsgciAqICh2Mi54IC0gdjEueCksCiAgICAgICAgICB5OiB2MS55ICsgciAqICh2Mi55IC0gdjEueSkKICAgICAgICB9OwoKICAgICAgICBpZiAoISF2MS56ICYmICEhdjIueikgewogICAgICAgICAgcmV0LnogPSB2MS56ICsgciAqICh2Mi56IC0gdjEueik7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcmV0OwogICAgICB9LAogICAgICBwb2ludFRvU3RyaW5nOiBmdW5jdGlvbiBwb2ludFRvU3RyaW5nKHApIHsKICAgICAgICB2YXIgcyA9IHAueCArICIvIiArIHAueTsKCiAgICAgICAgaWYgKHR5cGVvZiBwLnogIT09ICJ1bmRlZmluZWQiKSB7CiAgICAgICAgICBzICs9ICIvIiArIHAuejsKICAgICAgICB9CgogICAgICAgIHJldHVybiBzOwogICAgICB9LAogICAgICBwb2ludHNUb1N0cmluZzogZnVuY3Rpb24gcG9pbnRzVG9TdHJpbmcocG9pbnRzKSB7CiAgICAgICAgcmV0dXJuICJbIiArIHBvaW50cy5tYXAodXRpbHMucG9pbnRUb1N0cmluZykuam9pbigiLCAiKSArICJdIjsKICAgICAgfSwKICAgICAgY29weTogZnVuY3Rpb24gY29weShvYmopIHsKICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTsKICAgICAgfSwKICAgICAgYW5nbGU6IGZ1bmN0aW9uIGFuZ2xlKG8sIHYxLCB2MikgewogICAgICAgIHZhciBkeDEgPSB2MS54IC0gby54LAogICAgICAgICAgICBkeTEgPSB2MS55IC0gby55LAogICAgICAgICAgICBkeDIgPSB2Mi54IC0gby54LAogICAgICAgICAgICBkeTIgPSB2Mi55IC0gby55LAogICAgICAgICAgICBjcm9zcyA9IGR4MSAqIGR5MiAtIGR5MSAqIGR4MiwKICAgICAgICAgICAgZG90ID0gZHgxICogZHgyICsgZHkxICogZHkyOwogICAgICAgIHJldHVybiBhdGFuMihjcm9zcywgZG90KTsKICAgICAgfSwKICAgICAgLy8gcm91bmQgYXMgc3RyaW5nLCB0byBhdm9pZCByb3VuZGluZyBlcnJvcnMKICAgICAgcm91bmQ6IGZ1bmN0aW9uIHJvdW5kKHYsIGQpIHsKICAgICAgICB2YXIgcyA9ICIiICsgdjsKICAgICAgICB2YXIgcG9zID0gcy5pbmRleE9mKCIuIik7CiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocy5zdWJzdHJpbmcoMCwgcG9zICsgMSArIGQpKTsKICAgICAgfSwKICAgICAgZGlzdDogZnVuY3Rpb24gZGlzdChwMSwgcDIpIHsKICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCwKICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueTsKICAgICAgICByZXR1cm4gc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7CiAgICAgIH0sCiAgICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QoTFVULCBwb2ludCkgewogICAgICAgIHZhciBtZGlzdCA9IHBvdygyLCA2MyksCiAgICAgICAgICAgIG1wb3MsCiAgICAgICAgICAgIGQ7CiAgICAgICAgTFVULmZvckVhY2goZnVuY3Rpb24gKHAsIGlkeCkgewogICAgICAgICAgZCA9IHV0aWxzLmRpc3QocG9pbnQsIHApOwoKICAgICAgICAgIGlmIChkIDwgbWRpc3QpIHsKICAgICAgICAgICAgbWRpc3QgPSBkOwogICAgICAgICAgICBtcG9zID0gaWR4OwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICAgIHJldHVybiB7CiAgICAgICAgICBtZGlzdDogbWRpc3QsCiAgICAgICAgICBtcG9zOiBtcG9zCiAgICAgICAgfTsKICAgICAgfSwKICAgICAgYWJjcmF0aW86IGZ1bmN0aW9uIGFiY3JhdGlvKHQsIG4pIHsKICAgICAgICAvLyBzZWUgcmF0aW8odCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiYwogICAgICAgIGlmIChuICE9PSAyICYmIG4gIT09IDMpIHsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CgogICAgICAgIGlmICh0eXBlb2YgdCA9PT0gInVuZGVmaW5lZCIpIHsKICAgICAgICAgIHQgPSAwLjU7CiAgICAgICAgfSBlbHNlIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHsKICAgICAgICAgIHJldHVybiB0OwogICAgICAgIH0KCiAgICAgICAgdmFyIGJvdHRvbSA9IHBvdyh0LCBuKSArIHBvdygxIC0gdCwgbiksCiAgICAgICAgICAgIHRvcCA9IGJvdHRvbSAtIDE7CiAgICAgICAgcmV0dXJuIGFicyh0b3AgLyBib3R0b20pOwogICAgICB9LAogICAgICBwcm9qZWN0aW9ucmF0aW86IGZ1bmN0aW9uIHByb2plY3Rpb25yYXRpbyh0LCBuKSB7CiAgICAgICAgLy8gc2VlIHUodCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiYwogICAgICAgIGlmIChuICE9PSAyICYmIG4gIT09IDMpIHsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CgogICAgICAgIGlmICh0eXBlb2YgdCA9PT0gInVuZGVmaW5lZCIpIHsKICAgICAgICAgIHQgPSAwLjU7CiAgICAgICAgfSBlbHNlIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHsKICAgICAgICAgIHJldHVybiB0OwogICAgICAgIH0KCiAgICAgICAgdmFyIHRvcCA9IHBvdygxIC0gdCwgbiksCiAgICAgICAgICAgIGJvdHRvbSA9IHBvdyh0LCBuKSArIHRvcDsKICAgICAgICByZXR1cm4gdG9wIC8gYm90dG9tOwogICAgICB9LAogICAgICBsbGk4OiBmdW5jdGlvbiBsbGk4KHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCkgewogICAgICAgIHZhciBueCA9ICh4MSAqIHkyIC0geTEgKiB4MikgKiAoeDMgLSB4NCkgLSAoeDEgLSB4MikgKiAoeDMgKiB5NCAtIHkzICogeDQpLAogICAgICAgICAgICBueSA9ICh4MSAqIHkyIC0geTEgKiB4MikgKiAoeTMgLSB5NCkgLSAoeTEgLSB5MikgKiAoeDMgKiB5NCAtIHkzICogeDQpLAogICAgICAgICAgICBkID0gKHgxIC0geDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzIC0geDQpOwoKICAgICAgICBpZiAoZCA9PSAwKSB7CiAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gewogICAgICAgICAgeDogbnggLyBkLAogICAgICAgICAgeTogbnkgLyBkCiAgICAgICAgfTsKICAgICAgfSwKICAgICAgbGxpNDogZnVuY3Rpb24gbGxpNChwMSwgcDIsIHAzLCBwNCkgewogICAgICAgIHZhciB4MSA9IHAxLngsCiAgICAgICAgICAgIHkxID0gcDEueSwKICAgICAgICAgICAgeDIgPSBwMi54LAogICAgICAgICAgICB5MiA9IHAyLnksCiAgICAgICAgICAgIHgzID0gcDMueCwKICAgICAgICAgICAgeTMgPSBwMy55LAogICAgICAgICAgICB4NCA9IHA0LngsCiAgICAgICAgICAgIHk0ID0gcDQueTsKICAgICAgICByZXR1cm4gdXRpbHMubGxpOCh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzLCB4NCwgeTQpOwogICAgICB9LAogICAgICBsbGk6IGZ1bmN0aW9uIGxsaSh2MSwgdjIpIHsKICAgICAgICByZXR1cm4gdXRpbHMubGxpNCh2MSwgdjEuYywgdjIsIHYyLmMpOwogICAgICB9LAogICAgICBtYWtlbGluZTogZnVuY3Rpb24gbWFrZWxpbmUocDEsIHAyKSB7CiAgICAgICAgdmFyIEJlemllciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7CgogICAgICAgIHZhciB4MSA9IHAxLngsCiAgICAgICAgICAgIHkxID0gcDEueSwKICAgICAgICAgICAgeDIgPSBwMi54LAogICAgICAgICAgICB5MiA9IHAyLnksCiAgICAgICAgICAgIGR4ID0gKHgyIC0geDEpIC8gMywKICAgICAgICAgICAgZHkgPSAoeTIgLSB5MSkgLyAzOwogICAgICAgIHJldHVybiBuZXcgQmV6aWVyKHgxLCB5MSwgeDEgKyBkeCwgeTEgKyBkeSwgeDEgKyAyICogZHgsIHkxICsgMiAqIGR5LCB4MiwgeTIpOwogICAgICB9LAogICAgICBmaW5kYmJveDogZnVuY3Rpb24gZmluZGJib3goc2VjdGlvbnMpIHsKICAgICAgICB2YXIgbXggPSBuTWF4LAogICAgICAgICAgICBteSA9IG5NYXgsCiAgICAgICAgICAgIE1YID0gbk1pbiwKICAgICAgICAgICAgTVkgPSBuTWluOwogICAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHsKICAgICAgICAgIHZhciBiYm94ID0gcy5iYm94KCk7CiAgICAgICAgICBpZiAobXggPiBiYm94LngubWluKSBteCA9IGJib3gueC5taW47CiAgICAgICAgICBpZiAobXkgPiBiYm94LnkubWluKSBteSA9IGJib3gueS5taW47CiAgICAgICAgICBpZiAoTVggPCBiYm94LngubWF4KSBNWCA9IGJib3gueC5tYXg7CiAgICAgICAgICBpZiAoTVkgPCBiYm94LnkubWF4KSBNWSA9IGJib3gueS5tYXg7CiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgIHg6IHsKICAgICAgICAgICAgbWluOiBteCwKICAgICAgICAgICAgbWlkOiAobXggKyBNWCkgLyAyLAogICAgICAgICAgICBtYXg6IE1YLAogICAgICAgICAgICBzaXplOiBNWCAtIG14CiAgICAgICAgICB9LAogICAgICAgICAgeTogewogICAgICAgICAgICBtaW46IG15LAogICAgICAgICAgICBtaWQ6IChteSArIE1ZKSAvIDIsCiAgICAgICAgICAgIG1heDogTVksCiAgICAgICAgICAgIHNpemU6IE1ZIC0gbXkKICAgICAgICAgIH0KICAgICAgICB9OwogICAgICB9LAogICAgICBzaGFwZWludGVyc2VjdGlvbnM6IGZ1bmN0aW9uIHNoYXBlaW50ZXJzZWN0aW9ucyhzMSwgYmJveDEsIHMyLCBiYm94MiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHsKICAgICAgICBpZiAoIXV0aWxzLmJib3hvdmVybGFwKGJib3gxLCBiYm94MikpIHJldHVybiBbXTsKICAgICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdOwogICAgICAgIHZhciBhMSA9IFtzMS5zdGFydGNhcCwgczEuZm9yd2FyZCwgczEuYmFjaywgczEuZW5kY2FwXTsKICAgICAgICB2YXIgYTIgPSBbczIuc3RhcnRjYXAsIHMyLmZvcndhcmQsIHMyLmJhY2ssIHMyLmVuZGNhcF07CiAgICAgICAgYTEuZm9yRWFjaChmdW5jdGlvbiAobDEpIHsKICAgICAgICAgIGlmIChsMS52aXJ0dWFsKSByZXR1cm47CiAgICAgICAgICBhMi5mb3JFYWNoKGZ1bmN0aW9uIChsMikgewogICAgICAgICAgICBpZiAobDIudmlydHVhbCkgcmV0dXJuOwogICAgICAgICAgICB2YXIgaXNzID0gbDEuaW50ZXJzZWN0cyhsMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpOwoKICAgICAgICAgICAgaWYgKGlzcy5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgICAgaXNzLmMxID0gbDE7CiAgICAgICAgICAgICAgaXNzLmMyID0gbDI7CiAgICAgICAgICAgICAgaXNzLnMxID0gczE7CiAgICAgICAgICAgICAgaXNzLnMyID0gczI7CiAgICAgICAgICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKGlzcyk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zOwogICAgICB9LAogICAgICBtYWtlc2hhcGU6IGZ1bmN0aW9uIG1ha2VzaGFwZShmb3J3YXJkLCBiYWNrLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkgewogICAgICAgIHZhciBicGwgPSBiYWNrLnBvaW50cy5sZW5ndGg7CiAgICAgICAgdmFyIGZwbCA9IGZvcndhcmQucG9pbnRzLmxlbmd0aDsKICAgICAgICB2YXIgc3RhcnQgPSB1dGlscy5tYWtlbGluZShiYWNrLnBvaW50c1ticGwgLSAxXSwgZm9yd2FyZC5wb2ludHNbMF0pOwogICAgICAgIHZhciBlbmQgPSB1dGlscy5tYWtlbGluZShmb3J3YXJkLnBvaW50c1tmcGwgLSAxXSwgYmFjay5wb2ludHNbMF0pOwogICAgICAgIHZhciBzaGFwZSA9IHsKICAgICAgICAgIHN0YXJ0Y2FwOiBzdGFydCwKICAgICAgICAgIGZvcndhcmQ6IGZvcndhcmQsCiAgICAgICAgICBiYWNrOiBiYWNrLAogICAgICAgICAgZW5kY2FwOiBlbmQsCiAgICAgICAgICBiYm94OiB1dGlscy5maW5kYmJveChbc3RhcnQsIGZvcndhcmQsIGJhY2ssIGVuZF0pCiAgICAgICAgfTsKICAgICAgICB2YXIgc2VsZiA9IHV0aWxzOwoKICAgICAgICBzaGFwZS5pbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24gKHMyKSB7CiAgICAgICAgICByZXR1cm4gc2VsZi5zaGFwZWludGVyc2VjdGlvbnMoc2hhcGUsIHNoYXBlLmJib3gsIHMyLCBzMi5iYm94LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7CiAgICAgICAgfTsKCiAgICAgICAgcmV0dXJuIHNoYXBlOwogICAgICB9LAogICAgICBnZXRtaW5tYXg6IGZ1bmN0aW9uIGdldG1pbm1heChjdXJ2ZSwgZCwgbGlzdCkgewogICAgICAgIGlmICghbGlzdCkgcmV0dXJuIHsKICAgICAgICAgIG1pbjogMCwKICAgICAgICAgIG1heDogMAogICAgICAgIH07CiAgICAgICAgdmFyIG1pbiA9IG5NYXgsCiAgICAgICAgICAgIG1heCA9IG5NaW4sCiAgICAgICAgICAgIHQsCiAgICAgICAgICAgIGM7CgogICAgICAgIGlmIChsaXN0LmluZGV4T2YoMCkgPT09IC0xKSB7CiAgICAgICAgICBsaXN0ID0gWzBdLmNvbmNhdChsaXN0KTsKICAgICAgICB9CgogICAgICAgIGlmIChsaXN0LmluZGV4T2YoMSkgPT09IC0xKSB7CiAgICAgICAgICBsaXN0LnB1c2goMSk7CiAgICAgICAgfQoKICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykgewogICAgICAgICAgdCA9IGxpc3RbaV07CiAgICAgICAgICBjID0gY3VydmUuZ2V0KHQpOwoKICAgICAgICAgIGlmIChjW2RdIDwgbWluKSB7CiAgICAgICAgICAgIG1pbiA9IGNbZF07CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGNbZF0gPiBtYXgpIHsKICAgICAgICAgICAgbWF4ID0gY1tkXTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiB7CiAgICAgICAgICBtaW46IG1pbiwKICAgICAgICAgIG1pZDogKG1pbiArIG1heCkgLyAyLAogICAgICAgICAgbWF4OiBtYXgsCiAgICAgICAgICBzaXplOiBtYXggLSBtaW4KICAgICAgICB9OwogICAgICB9LAogICAgICBhbGlnbjogZnVuY3Rpb24gYWxpZ24ocG9pbnRzLCBsaW5lKSB7CiAgICAgICAgdmFyIHR4ID0gbGluZS5wMS54LAogICAgICAgICAgICB0eSA9IGxpbmUucDEueSwKICAgICAgICAgICAgYSA9IC1hdGFuMihsaW5lLnAyLnkgLSB0eSwgbGluZS5wMi54IC0gdHgpLAogICAgICAgICAgICBkID0gZnVuY3Rpb24gZCh2KSB7CiAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICB4OiAodi54IC0gdHgpICogY29zKGEpIC0gKHYueSAtIHR5KSAqIHNpbihhKSwKICAgICAgICAgICAgeTogKHYueCAtIHR4KSAqIHNpbihhKSArICh2LnkgLSB0eSkgKiBjb3MoYSkKICAgICAgICAgIH07CiAgICAgICAgfTsKCiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAoZCk7CiAgICAgIH0sCiAgICAgIHJvb3RzOiBmdW5jdGlvbiByb290cyhwb2ludHMsIGxpbmUpIHsKICAgICAgICBsaW5lID0gbGluZSB8fCB7CiAgICAgICAgICBwMTogewogICAgICAgICAgICB4OiAwLAogICAgICAgICAgICB5OiAwCiAgICAgICAgICB9LAogICAgICAgICAgcDI6IHsKICAgICAgICAgICAgeDogMSwKICAgICAgICAgICAgeTogMAogICAgICAgICAgfQogICAgICAgIH07CiAgICAgICAgdmFyIG9yZGVyID0gcG9pbnRzLmxlbmd0aCAtIDE7CiAgICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIGxpbmUpOwoKICAgICAgICB2YXIgcmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKHQpIHsKICAgICAgICAgIHJldHVybiAwIDw9IHQgJiYgdCA8PSAxOwogICAgICAgIH07CgogICAgICAgIGlmIChvcmRlciA9PT0gMikgewogICAgICAgICAgdmFyIGEgPSBwWzBdLnksCiAgICAgICAgICAgICAgYiA9IHBbMV0ueSwKICAgICAgICAgICAgICBjID0gcFsyXS55LAogICAgICAgICAgICAgIGQgPSBhIC0gMiAqIGIgKyBjOwoKICAgICAgICAgIGlmIChkICE9PSAwKSB7CiAgICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIgKiBiIC0gYSAqIGMpLAogICAgICAgICAgICAgICAgbTIgPSAtYSArIGIsCiAgICAgICAgICAgICAgICB2MSA9IC0obTEgKyBtMikgLyBkLAogICAgICAgICAgICAgICAgdjIgPSAtKC1tMSArIG0yKSAvIGQ7CiAgICAgICAgICAgIHJldHVybiBbdjEsIHYyXS5maWx0ZXIocmVkdWNlKTsKICAgICAgICAgIH0gZWxzZSBpZiAoYiAhPT0gYyAmJiBkID09PSAwKSB7CiAgICAgICAgICAgIHJldHVybiBbKDIgKiBiIC0gYykgLyAoMiAqIGIgLSAyICogYyldLmZpbHRlcihyZWR1Y2UpOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICB9IC8vIHNlZSBodHRwOi8vd3d3LnRyYW5zNG1pbmQuY29tL3BlcnNvbmFsX2RldmVsb3BtZW50L21hdGhlbWF0aWNzL3BvbHlub21pYWxzL2N1YmljQWxnZWJyYS5odG0KCgogICAgICAgIHZhciBwYSA9IHBbMF0ueSwKICAgICAgICAgICAgcGIgPSBwWzFdLnksCiAgICAgICAgICAgIHBjID0gcFsyXS55LAogICAgICAgICAgICBwZCA9IHBbM10ueSwKICAgICAgICAgICAgZCA9IC1wYSArIDMgKiBwYiAtIDMgKiBwYyArIHBkLAogICAgICAgICAgICBhID0gMyAqIHBhIC0gNiAqIHBiICsgMyAqIHBjLAogICAgICAgICAgICBiID0gLTMgKiBwYSArIDMgKiBwYiwKICAgICAgICAgICAgYyA9IHBhOwoKICAgICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLCAwKSkgewogICAgICAgICAgLy8gdGhpcyBpcyBub3QgYSBjdWJpYyBjdXJ2ZS4KICAgICAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KGEsIDApKSB7CiAgICAgICAgICAgIC8vIGluIGZhY3QsIHRoaXMgaXMgbm90IGEgcXVhZHJhdGljIGN1cnZlIGVpdGhlci4KICAgICAgICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkoYiwgMCkpIHsKICAgICAgICAgICAgICAvLyBpbiBmYWN0IGluIGZhY3QsIHRoZXJlIGFyZSBubyBzb2x1dGlvbnMuCiAgICAgICAgICAgICAgcmV0dXJuIFtdOwogICAgICAgICAgICB9IC8vIGxpbmVhciBzb2x1dGlvbjoKCgogICAgICAgICAgICByZXR1cm4gWy1jIC8gYl0uZmlsdGVyKHJlZHVjZSk7CiAgICAgICAgICB9IC8vIHF1YWRyYXRpYyBzb2x1dGlvbjoKCgogICAgICAgICAgdmFyIHEgPSBzcXJ0KGIgKiBiIC0gNCAqIGEgKiBjKSwKICAgICAgICAgICAgICBhMiA9IDIgKiBhOwogICAgICAgICAgcmV0dXJuIFsocSAtIGIpIC8gYTIsICgtYiAtIHEpIC8gYTJdLmZpbHRlcihyZWR1Y2UpOwogICAgICAgIH0gLy8gYXQgdGhpcyBwb2ludCwgd2Uga25vdyB3ZSBuZWVkIGEgY3ViaWMgc29sdXRpb246CgoKICAgICAgICBhIC89IGQ7CiAgICAgICAgYiAvPSBkOwogICAgICAgIGMgLz0gZDsKICAgICAgICB2YXIgcCA9ICgzICogYiAtIGEgKiBhKSAvIDMsCiAgICAgICAgICAgIHAzID0gcCAvIDMsCiAgICAgICAgICAgIHEgPSAoMiAqIGEgKiBhICogYSAtIDkgKiBhICogYiArIDI3ICogYykgLyAyNywKICAgICAgICAgICAgcTIgPSBxIC8gMiwKICAgICAgICAgICAgZGlzY3JpbWluYW50ID0gcTIgKiBxMiArIHAzICogcDMgKiBwMywKICAgICAgICAgICAgdTEsCiAgICAgICAgICAgIHYxLAogICAgICAgICAgICB4MSwKICAgICAgICAgICAgeDIsCiAgICAgICAgICAgIHgzOwoKICAgICAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkgewogICAgICAgICAgdmFyIG1wMyA9IC1wIC8gMywKICAgICAgICAgICAgICBtcDMzID0gbXAzICogbXAzICogbXAzLAogICAgICAgICAgICAgIHIgPSBzcXJ0KG1wMzMpLAogICAgICAgICAgICAgIHQgPSAtcSAvICgyICogciksCiAgICAgICAgICAgICAgY29zcGhpID0gdCA8IC0xID8gLTEgOiB0ID4gMSA/IDEgOiB0LAogICAgICAgICAgICAgIHBoaSA9IGFjb3MoY29zcGhpKSwKICAgICAgICAgICAgICBjcnRyID0gY3J0KHIpLAogICAgICAgICAgICAgIHQxID0gMiAqIGNydHI7CiAgICAgICAgICB4MSA9IHQxICogY29zKHBoaSAvIDMpIC0gYSAvIDM7CiAgICAgICAgICB4MiA9IHQxICogY29zKChwaGkgKyB0YXUpIC8gMykgLSBhIC8gMzsKICAgICAgICAgIHgzID0gdDEgKiBjb3MoKHBoaSArIDIgKiB0YXUpIC8gMykgLSBhIC8gMzsKICAgICAgICAgIHJldHVybiBbeDEsIHgyLCB4M10uZmlsdGVyKHJlZHVjZSk7CiAgICAgICAgfSBlbHNlIGlmIChkaXNjcmltaW5hbnQgPT09IDApIHsKICAgICAgICAgIHUxID0gcTIgPCAwID8gY3J0KC1xMikgOiAtY3J0KHEyKTsKICAgICAgICAgIHgxID0gMiAqIHUxIC0gYSAvIDM7CiAgICAgICAgICB4MiA9IC11MSAtIGEgLyAzOwogICAgICAgICAgcmV0dXJuIFt4MSwgeDJdLmZpbHRlcihyZWR1Y2UpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB2YXIgc2QgPSBzcXJ0KGRpc2NyaW1pbmFudCk7CiAgICAgICAgICB1MSA9IGNydCgtcTIgKyBzZCk7CiAgICAgICAgICB2MSA9IGNydChxMiArIHNkKTsKICAgICAgICAgIHJldHVybiBbdTEgLSB2MSAtIGEgLyAzXS5maWx0ZXIocmVkdWNlKTsKICAgICAgICB9CiAgICAgIH0sCiAgICAgIGRyb290czogZnVuY3Rpb24gZHJvb3RzKHApIHsKICAgICAgICAvLyBxdWFkcmF0aWMgcm9vdHMgYXJlIGVhc3kKICAgICAgICBpZiAocC5sZW5ndGggPT09IDMpIHsKICAgICAgICAgIHZhciBhID0gcFswXSwKICAgICAgICAgICAgICBiID0gcFsxXSwKICAgICAgICAgICAgICBjID0gcFsyXSwKICAgICAgICAgICAgICBkID0gYSAtIDIgKiBiICsgYzsKCiAgICAgICAgICBpZiAoZCAhPT0gMCkgewogICAgICAgICAgICB2YXIgbTEgPSAtc3FydChiICogYiAtIGEgKiBjKSwKICAgICAgICAgICAgICAgIG0yID0gLWEgKyBiLAogICAgICAgICAgICAgICAgdjEgPSAtKG0xICsgbTIpIC8gZCwKICAgICAgICAgICAgICAgIHYyID0gLSgtbTEgKyBtMikgLyBkOwogICAgICAgICAgICByZXR1cm4gW3YxLCB2Ml07CiAgICAgICAgICB9IGVsc2UgaWYgKGIgIT09IGMgJiYgZCA9PT0gMCkgewogICAgICAgICAgICByZXR1cm4gWygyICogYiAtIGMpIC8gKDIgKiAoYiAtIGMpKV07CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIFtdOwogICAgICAgIH0gLy8gbGluZWFyIHJvb3RzIGFyZSBldmVuIGVhc2llcgoKCiAgICAgICAgaWYgKHAubGVuZ3RoID09PSAyKSB7CiAgICAgICAgICB2YXIgYSA9IHBbMF0sCiAgICAgICAgICAgICAgYiA9IHBbMV07CgogICAgICAgICAgaWYgKGEgIT09IGIpIHsKICAgICAgICAgICAgcmV0dXJuIFthIC8gKGEgLSBiKV07CiAgICAgICAgICB9CgogICAgICAgICAgcmV0dXJuIFtdOwogICAgICAgIH0KICAgICAgfSwKICAgICAgY3VydmF0dXJlOiBmdW5jdGlvbiBjdXJ2YXR1cmUodCwgcG9pbnRzLCBfM2QsIGtPbmx5KSB7CiAgICAgICAgdmFyIGRwb2ludHMgPSB1dGlscy5kZXJpdmUocG9pbnRzKTsKICAgICAgICB2YXIgZDEgPSBkcG9pbnRzWzBdOwogICAgICAgIHZhciBkMiA9IGRwb2ludHNbMV07CiAgICAgICAgdmFyIG51bSwKICAgICAgICAgICAgZG5tLAogICAgICAgICAgICBhZGssCiAgICAgICAgICAgIGRrLAogICAgICAgICAgICBrID0gMCwKICAgICAgICAgICAgciA9IDA7IC8vCiAgICAgICAgLy8gV2UncmUgdXNpbmcgdGhlIGZvbGxvd2luZyBmb3JtdWxhIGZvciBjdXJ2YXR1cmU6CiAgICAgICAgLy8KICAgICAgICAvLyAgICAgICAgICAgICAgeCd5IiAtIHkneCIKICAgICAgICAvLyAgIGsodCkgPSAtLS0tLS0tLS0tLS0tLS0tLS0KICAgICAgICAvLyAgICAgICAgICAgKHgnwrIgKyB5J8KyKV4oMy8yKQogICAgICAgIC8vCiAgICAgICAgLy8gZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SYWRpdXNfb2ZfY3VydmF0dXJlI0RlZmluaXRpb24KICAgICAgICAvLwogICAgICAgIC8vIFdpdGggaXQgY29ycmVzcG9uZGluZyAzRCBjb3VudGVycGFydDoKICAgICAgICAvLwogICAgICAgIC8vICAgICAgICAgIHNxcnQoICh5J3oiIC0geSJ6JynCsiArICh6J3giIC0geiJ4JynCsiArICh4J3kiIC0geCJ5JynCsikKICAgICAgICAvLyAgIGsodCkgPSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAoeCfCsiArIHknwrIgKyB6J8KyKV4oMy8yKQogICAgICAgIC8vCgogICAgICAgIHZhciBkID0gdXRpbHMuY29tcHV0ZSh0LCBkMSk7CiAgICAgICAgdmFyIGRkID0gdXRpbHMuY29tcHV0ZSh0LCBkMik7CiAgICAgICAgdmFyIHFkc3VtID0gZC54ICogZC54ICsgZC55ICogZC55OwoKICAgICAgICBpZiAoXzNkKSB7CiAgICAgICAgICBudW0gPSBzcXJ0KHBvdyhkLnkgKiBkZC56IC0gZGQueSAqIGQueiwgMikgKyBwb3coZC56ICogZGQueCAtIGRkLnogKiBkLngsIDIpICsgcG93KGQueCAqIGRkLnkgLSBkZC54ICogZC55LCAyKSk7CiAgICAgICAgICBkbm0gPSBwb3cocWRzdW0gKyBkLnogKiBkLnosIDMgLyAyKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgbnVtID0gZC54ICogZGQueSAtIGQueSAqIGRkLng7CiAgICAgICAgICBkbm0gPSBwb3cocWRzdW0sIDMgLyAyKTsKICAgICAgICB9CgogICAgICAgIGlmIChudW0gPT09IDAgfHwgZG5tID09PSAwKSB7CiAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICBrOiAwLAogICAgICAgICAgICByOiAwCiAgICAgICAgICB9OwogICAgICAgIH0KCiAgICAgICAgayA9IG51bSAvIGRubTsKICAgICAgICByID0gZG5tIC8gbnVtOyAvLyBXZSdyZSBhbHNvIGNvbXB1dGluZyB0aGUgZGVyaXZhdGl2ZSBvZiBrYXBwYSwgYmVjYXVzZQogICAgICAgIC8vIHRoZXJlIGlzIHZhbHVlIGluIGtub3dpbmcgdGhlIHJhdGUgb2YgY2hhbmdlIGZvciB0aGUKICAgICAgICAvLyBjdXJ2YXR1cmUgYWxvbmcgdGhlIGN1cnZlLiBBbmQgd2UncmUganVzdCBnb2luZyB0bwogICAgICAgIC8vIGJhbGxwYXJrIGl0IGJhc2VkIG9uIGFuIGVwc2lsb24uCgogICAgICAgIGlmICgha09ubHkpIHsKICAgICAgICAgIC8vIGNvbXB1dGUgaycodCkgYmFzZWQgb24gdGhlIGludGVydmFsIGJlZm9yZSwgYW5kIGFmdGVyIGl0LAogICAgICAgICAgLy8gdG8gYXQgbGVhc3QgdHJ5IHRvIG5vdCBpbnRyb2R1Y2UgZm9yd2FyZC9iYWNrd2FyZCBwYXNzIGJpYXMuCiAgICAgICAgICB2YXIgcGsgPSB1dGlscy5jdXJ2YXR1cmUodCAtIDAuMDAxLCBwb2ludHMsIF8zZCwgdHJ1ZSkuazsKICAgICAgICAgIHZhciBuayA9IHV0aWxzLmN1cnZhdHVyZSh0ICsgMC4wMDEsIHBvaW50cywgXzNkLCB0cnVlKS5rOwogICAgICAgICAgZGsgPSAobmsgLSBrICsgKGsgLSBwaykpIC8gMjsKICAgICAgICAgIGFkayA9IChhYnMobmsgLSBrKSArIGFicyhrIC0gcGspKSAvIDI7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gewogICAgICAgICAgazogaywKICAgICAgICAgIHI6IHIsCiAgICAgICAgICBkazogZGssCiAgICAgICAgICBhZGs6IGFkawogICAgICAgIH07CiAgICAgIH0sCiAgICAgIGluZmxlY3Rpb25zOiBmdW5jdGlvbiBpbmZsZWN0aW9ucyhwb2ludHMpIHsKICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDQpIHJldHVybiBbXTsgLy8gRklYTUU6IFRPRE86IGFkZCBpbiBpbmZsZWN0aW9uIGFic3RyYWN0aW9uIGZvciBxdWFydGljKyBjdXJ2ZXM/CgogICAgICAgIHZhciBwID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7CiAgICAgICAgICBwMTogcG9pbnRzWzBdLAogICAgICAgICAgcDI6IHBvaW50cy5zbGljZSgtMSlbMF0KICAgICAgICB9KSwKICAgICAgICAgICAgYSA9IHBbMl0ueCAqIHBbMV0ueSwKICAgICAgICAgICAgYiA9IHBbM10ueCAqIHBbMV0ueSwKICAgICAgICAgICAgYyA9IHBbMV0ueCAqIHBbMl0ueSwKICAgICAgICAgICAgZCA9IHBbM10ueCAqIHBbMl0ueSwKICAgICAgICAgICAgdjEgPSAxOCAqICgtMyAqIGEgKyAyICogYiArIDMgKiBjIC0gZCksCiAgICAgICAgICAgIHYyID0gMTggKiAoMyAqIGEgLSBiIC0gMyAqIGMpLAogICAgICAgICAgICB2MyA9IDE4ICogKGMgLSBhKTsKCiAgICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkodjEsIDApKSB7CiAgICAgICAgICBpZiAoIXV0aWxzLmFwcHJveGltYXRlbHkodjIsIDApKSB7CiAgICAgICAgICAgIHZhciB0ID0gLXYzIC8gdjI7CiAgICAgICAgICAgIGlmICgwIDw9IHQgJiYgdCA8PSAxKSByZXR1cm4gW3RdOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICB9CgogICAgICAgIHZhciB0cm0gPSB2MiAqIHYyIC0gNCAqIHYxICogdjMsCiAgICAgICAgICAgIHNxID0gTWF0aC5zcXJ0KHRybSksCiAgICAgICAgICAgIGQgPSAyICogdjE7CiAgICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkoZCwgMCkpIHJldHVybiBbXTsKICAgICAgICByZXR1cm4gWyhzcSAtIHYyKSAvIGQsIC0odjIgKyBzcSkgLyBkXS5maWx0ZXIoZnVuY3Rpb24gKHIpIHsKICAgICAgICAgIHJldHVybiAwIDw9IHIgJiYgciA8PSAxOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBiYm94b3ZlcmxhcDogZnVuY3Rpb24gYmJveG92ZXJsYXAoYjEsIGIyKSB7CiAgICAgICAgdmFyIGRpbXMgPSBbIngiLCAieSJdLAogICAgICAgICAgICBsZW4gPSBkaW1zLmxlbmd0aCwKICAgICAgICAgICAgaSwKICAgICAgICAgICAgZGltLAogICAgICAgICAgICBsLAogICAgICAgICAgICB0LAogICAgICAgICAgICBkOwoKICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHsKICAgICAgICAgIGRpbSA9IGRpbXNbaV07CiAgICAgICAgICBsID0gYjFbZGltXS5taWQ7CiAgICAgICAgICB0ID0gYjJbZGltXS5taWQ7CiAgICAgICAgICBkID0gKGIxW2RpbV0uc2l6ZSArIGIyW2RpbV0uc2l6ZSkgLyAyOwogICAgICAgICAgaWYgKGFicyhsIC0gdCkgPj0gZCkgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0sCiAgICAgIGV4cGFuZGJveDogZnVuY3Rpb24gZXhwYW5kYm94KGJib3gsIF9iYm94KSB7CiAgICAgICAgaWYgKF9iYm94LngubWluIDwgYmJveC54Lm1pbikgewogICAgICAgICAgYmJveC54Lm1pbiA9IF9iYm94LngubWluOwogICAgICAgIH0KCiAgICAgICAgaWYgKF9iYm94LnkubWluIDwgYmJveC55Lm1pbikgewogICAgICAgICAgYmJveC55Lm1pbiA9IF9iYm94LnkubWluOwogICAgICAgIH0KCiAgICAgICAgaWYgKF9iYm94LnogJiYgX2Jib3guei5taW4gPCBiYm94LnoubWluKSB7CiAgICAgICAgICBiYm94LnoubWluID0gX2Jib3guei5taW47CiAgICAgICAgfQoKICAgICAgICBpZiAoX2Jib3gueC5tYXggPiBiYm94LngubWF4KSB7CiAgICAgICAgICBiYm94LngubWF4ID0gX2Jib3gueC5tYXg7CiAgICAgICAgfQoKICAgICAgICBpZiAoX2Jib3gueS5tYXggPiBiYm94LnkubWF4KSB7CiAgICAgICAgICBiYm94LnkubWF4ID0gX2Jib3gueS5tYXg7CiAgICAgICAgfQoKICAgICAgICBpZiAoX2Jib3gueiAmJiBfYmJveC56Lm1heCA+IGJib3guei5tYXgpIHsKICAgICAgICAgIGJib3guei5tYXggPSBfYmJveC56Lm1heDsKICAgICAgICB9CgogICAgICAgIGJib3gueC5taWQgPSAoYmJveC54Lm1pbiArIGJib3gueC5tYXgpIC8gMjsKICAgICAgICBiYm94LnkubWlkID0gKGJib3gueS5taW4gKyBiYm94LnkubWF4KSAvIDI7CgogICAgICAgIGlmIChiYm94LnopIHsKICAgICAgICAgIGJib3guei5taWQgPSAoYmJveC56Lm1pbiArIGJib3guei5tYXgpIC8gMjsKICAgICAgICB9CgogICAgICAgIGJib3gueC5zaXplID0gYmJveC54Lm1heCAtIGJib3gueC5taW47CiAgICAgICAgYmJveC55LnNpemUgPSBiYm94LnkubWF4IC0gYmJveC55Lm1pbjsKCiAgICAgICAgaWYgKGJib3gueikgewogICAgICAgICAgYmJveC56LnNpemUgPSBiYm94LnoubWF4IC0gYmJveC56Lm1pbjsKICAgICAgICB9CiAgICAgIH0sCiAgICAgIHBhaXJpdGVyYXRpb246IGZ1bmN0aW9uIHBhaXJpdGVyYXRpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkgewogICAgICAgIHZhciBjMWIgPSBjMS5iYm94KCksCiAgICAgICAgICAgIGMyYiA9IGMyLmJib3goKSwKICAgICAgICAgICAgciA9IDEwMDAwMCwKICAgICAgICAgICAgdGhyZXNob2xkID0gY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQgfHwgMC41OwoKICAgICAgICBpZiAoYzFiLnguc2l6ZSArIGMxYi55LnNpemUgPCB0aHJlc2hvbGQgJiYgYzJiLnguc2l6ZSArIGMyYi55LnNpemUgPCB0aHJlc2hvbGQpIHsKICAgICAgICAgIHJldHVybiBbKHIgKiAoYzEuX3QxICsgYzEuX3QyKSAvIDIgfCAwKSAvIHIgKyAiLyIgKyAociAqIChjMi5fdDEgKyBjMi5fdDIpIC8gMiB8IDApIC8gcl07CiAgICAgICAgfQoKICAgICAgICB2YXIgY2MxID0gYzEuc3BsaXQoMC41KSwKICAgICAgICAgICAgY2MyID0gYzIuc3BsaXQoMC41KSwKICAgICAgICAgICAgcGFpcnMgPSBbewogICAgICAgICAgbGVmdDogY2MxLmxlZnQsCiAgICAgICAgICByaWdodDogY2MyLmxlZnQKICAgICAgICB9LCB7CiAgICAgICAgICBsZWZ0OiBjYzEubGVmdCwKICAgICAgICAgIHJpZ2h0OiBjYzIucmlnaHQKICAgICAgICB9LCB7CiAgICAgICAgICBsZWZ0OiBjYzEucmlnaHQsCiAgICAgICAgICByaWdodDogY2MyLnJpZ2h0CiAgICAgICAgfSwgewogICAgICAgICAgbGVmdDogY2MxLnJpZ2h0LAogICAgICAgICAgcmlnaHQ6IGNjMi5sZWZ0CiAgICAgICAgfV07CiAgICAgICAgcGFpcnMgPSBwYWlycy5maWx0ZXIoZnVuY3Rpb24gKHBhaXIpIHsKICAgICAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChwYWlyLmxlZnQuYmJveCgpLCBwYWlyLnJpZ2h0LmJib3goKSk7CiAgICAgICAgfSk7CiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTsKICAgICAgICBpZiAocGFpcnMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0czsKICAgICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7CiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQodXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIHRocmVzaG9sZCkpOwogICAgICAgIH0pOwogICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAodiwgaSkgewogICAgICAgICAgcmV0dXJuIHJlc3VsdHMuaW5kZXhPZih2KSA9PT0gaTsKICAgICAgICB9KTsKICAgICAgICByZXR1cm4gcmVzdWx0czsKICAgICAgfSwKICAgICAgZ2V0Y2NlbnRlcjogZnVuY3Rpb24gZ2V0Y2NlbnRlcihwMSwgcDIsIHAzKSB7CiAgICAgICAgdmFyIGR4MSA9IHAyLnggLSBwMS54LAogICAgICAgICAgICBkeTEgPSBwMi55IC0gcDEueSwKICAgICAgICAgICAgZHgyID0gcDMueCAtIHAyLngsCiAgICAgICAgICAgIGR5MiA9IHAzLnkgLSBwMi55OwogICAgICAgIHZhciBkeDFwID0gZHgxICogY29zKHF1YXJ0KSAtIGR5MSAqIHNpbihxdWFydCksCiAgICAgICAgICAgIGR5MXAgPSBkeDEgKiBzaW4ocXVhcnQpICsgZHkxICogY29zKHF1YXJ0KSwKICAgICAgICAgICAgZHgycCA9IGR4MiAqIGNvcyhxdWFydCkgLSBkeTIgKiBzaW4ocXVhcnQpLAogICAgICAgICAgICBkeTJwID0gZHgyICogc2luKHF1YXJ0KSArIGR5MiAqIGNvcyhxdWFydCk7IC8vIGNob3JkIG1pZHBvaW50cwoKICAgICAgICB2YXIgbXgxID0gKHAxLnggKyBwMi54KSAvIDIsCiAgICAgICAgICAgIG15MSA9IChwMS55ICsgcDIueSkgLyAyLAogICAgICAgICAgICBteDIgPSAocDIueCArIHAzLngpIC8gMiwKICAgICAgICAgICAgbXkyID0gKHAyLnkgKyBwMy55KSAvIDI7IC8vIG1pZHBvaW50IG9mZnNldHMKCiAgICAgICAgdmFyIG14MW4gPSBteDEgKyBkeDFwLAogICAgICAgICAgICBteTFuID0gbXkxICsgZHkxcCwKICAgICAgICAgICAgbXgybiA9IG14MiArIGR4MnAsCiAgICAgICAgICAgIG15Mm4gPSBteTIgKyBkeTJwOyAvLyBpbnRlcnNlY3Rpb24gb2YgdGhlc2UgbGluZXM6CgogICAgICAgIHZhciBhcmMgPSB1dGlscy5sbGk4KG14MSwgbXkxLCBteDFuLCBteTFuLCBteDIsIG15MiwgbXgybiwgbXkybiksCiAgICAgICAgICAgIHIgPSB1dGlscy5kaXN0KGFyYywgcDEpLAogICAgICAgICAgICAvLyBhcmMgc3RhcnQvZW5kIHZhbHVlcywgb3ZlciBtaWQgcG9pbnQ6CiAgICAgICAgcyA9IGF0YW4yKHAxLnkgLSBhcmMueSwgcDEueCAtIGFyYy54KSwKICAgICAgICAgICAgbSA9IGF0YW4yKHAyLnkgLSBhcmMueSwgcDIueCAtIGFyYy54KSwKICAgICAgICAgICAgZSA9IGF0YW4yKHAzLnkgLSBhcmMueSwgcDMueCAtIGFyYy54KSwKICAgICAgICAgICAgXzsgLy8gZGV0ZXJtaW5lIGFyYyBkaXJlY3Rpb24gKGN3L2NjdyBjb3JyZWN0aW9uKQoKCiAgICAgICAgaWYgKHMgPCBlKSB7CiAgICAgICAgICAvLyBpZiBzPG08ZSwgYXJjKHMsIGUpCiAgICAgICAgICAvLyBpZiBtPHM8ZSwgYXJjKGUsIHMgKyB0YXUpCiAgICAgICAgICAvLyBpZiBzPGU8bSwgYXJjKGUsIHMgKyB0YXUpCiAgICAgICAgICBpZiAocyA+IG0gfHwgbSA+IGUpIHsKICAgICAgICAgICAgcyArPSB0YXU7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKHMgPiBlKSB7CiAgICAgICAgICAgIF8gPSBlOwogICAgICAgICAgICBlID0gczsKICAgICAgICAgICAgcyA9IF87CiAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIC8vIGlmIGU8bTxzLCBhcmMoZSwgcykKICAgICAgICAgIC8vIGlmIG08ZTxzLCBhcmMocywgZSArIHRhdSkKICAgICAgICAgIC8vIGlmIGU8czxtLCBhcmMocywgZSArIHRhdSkKICAgICAgICAgIGlmIChlIDwgbSAmJiBtIDwgcykgewogICAgICAgICAgICBfID0gZTsKICAgICAgICAgICAgZSA9IHM7CiAgICAgICAgICAgIHMgPSBfOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZSArPSB0YXU7CiAgICAgICAgICB9CiAgICAgICAgfSAvLyBhc3NpZ24gYW5kIGRvbmUuCgoKICAgICAgICBhcmMucyA9IHM7CiAgICAgICAgYXJjLmUgPSBlOwogICAgICAgIGFyYy5yID0gcjsKICAgICAgICByZXR1cm4gYXJjOwogICAgICB9LAogICAgICBudW1iZXJTb3J0OiBmdW5jdGlvbiBudW1iZXJTb3J0KGEsIGIpIHsKICAgICAgICByZXR1cm4gYSAtIGI7CiAgICAgIH0KICAgIH07CiAgICBtb2R1bGUuZXhwb3J0cyA9IHV0aWxzOwogIH0pKCk7CiAgLyoqKi8KCn0sCi8qIDMgKi8KCi8qKiovCmZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHsKCiAgKGZ1bmN0aW9uICgpIHsKCiAgICB2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpOwogICAgLyoqCiAgICAgKiBQb2x5IEJlemllcgogICAgICogQHBhcmFtIHtbdHlwZV19IGN1cnZlcyBbZGVzY3JpcHRpb25dCiAgICAgKi8KCgogICAgdmFyIFBvbHlCZXppZXIgPSBmdW5jdGlvbiBQb2x5QmV6aWVyKGN1cnZlcykgewogICAgICB0aGlzLmN1cnZlcyA9IFtdOwogICAgICB0aGlzLl8zZCA9IGZhbHNlOwoKICAgICAgaWYgKCEhY3VydmVzKSB7CiAgICAgICAgdGhpcy5jdXJ2ZXMgPSBjdXJ2ZXM7CiAgICAgICAgdGhpcy5fM2QgPSB0aGlzLmN1cnZlc1swXS5fM2Q7CiAgICAgIH0KICAgIH07CgogICAgUG9seUJlemllci5wcm90b3R5cGUgPSB7CiAgICAgIHZhbHVlT2Y6IGZ1bmN0aW9uIHZhbHVlT2YoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsKICAgICAgfSwKICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkgewogICAgICAgIHJldHVybiAiWyIgKyB0aGlzLmN1cnZlcy5tYXAoZnVuY3Rpb24gKGN1cnZlKSB7CiAgICAgICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcoY3VydmUucG9pbnRzKTsKICAgICAgICB9KS5qb2luKCIsICIpICsgIl0iOwogICAgICB9LAogICAgICBhZGRDdXJ2ZTogZnVuY3Rpb24gYWRkQ3VydmUoY3VydmUpIHsKICAgICAgICB0aGlzLmN1cnZlcy5wdXNoKGN1cnZlKTsKICAgICAgICB0aGlzLl8zZCA9IHRoaXMuXzNkIHx8IGN1cnZlLl8zZDsKICAgICAgfSwKICAgICAgbGVuZ3RoOiBmdW5jdGlvbiBsZW5ndGgoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuY3VydmVzLm1hcChmdW5jdGlvbiAodikgewogICAgICAgICAgcmV0dXJuIHYubGVuZ3RoKCk7CiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7CiAgICAgICAgICByZXR1cm4gYSArIGI7CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGN1cnZlOiBmdW5jdGlvbiBjdXJ2ZShpZHgpIHsKICAgICAgICByZXR1cm4gdGhpcy5jdXJ2ZXNbaWR4XTsKICAgICAgfSwKICAgICAgYmJveDogZnVuY3Rpb24gYmJveCgpIHsKICAgICAgICB2YXIgYyA9IHRoaXMuY3VydmVzOwogICAgICAgIHZhciBiYm94ID0gY1swXS5iYm94KCk7CgogICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYy5sZW5ndGg7IGkrKykgewogICAgICAgICAgdXRpbHMuZXhwYW5kYm94KGJib3gsIGNbaV0uYmJveCgpKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBiYm94OwogICAgICB9LAogICAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChkKSB7CiAgICAgICAgdmFyIG9mZnNldCA9IFtdOwogICAgICAgIHRoaXMuY3VydmVzLmZvckVhY2goZnVuY3Rpb24gKHYpIHsKICAgICAgICAgIG9mZnNldCA9IG9mZnNldC5jb25jYXQodi5vZmZzZXQoZCkpOwogICAgICAgIH0pOwogICAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihvZmZzZXQpOwogICAgICB9CiAgICB9OwogICAgbW9kdWxlLmV4cG9ydHMgPSBQb2x5QmV6aWVyOwogIH0pKCk7CiAgLyoqKi8KCn0sCi8qIDQgKi8KCi8qKiovCmZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHsKCiAgdmFyIG5vcm1hbGlzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7CgogIHZhciBNID0gewogICAgeDogZmFsc2UsCiAgICB5OiBmYWxzZQogIH07CgogIGZ1bmN0aW9uIG1ha2VCZXppZXIoQmV6aWVyLCB0ZXJtLCB2YWx1ZXMpIHsKICAgIGlmICh0ZXJtID09PSAnWicpIHJldHVybjsKCiAgICBpZiAodGVybSA9PT0gJ00nKSB7CiAgICAgIE0gPSB7CiAgICAgICAgeDogdmFsdWVzWzBdLAogICAgICAgIHk6IHZhbHVlc1sxXQogICAgICB9OwogICAgICByZXR1cm47CiAgICB9IC8vIEVTNzogbmV3IEJlemllcihNLngsIE0ueSwgLi4udmFsdWVzKQoKCiAgICB2YXIgY3ZhbHVlcyA9IFtmYWxzZSwgTS54LCBNLnldLmNvbmNhdCh2YWx1ZXMpOwogICAgdmFyIFByZWJvdW5kQ29uc3RydWN0b3IgPSBCZXppZXIuYmluZC5hcHBseShCZXppZXIsIGN2YWx1ZXMpOwogICAgdmFyIGN1cnZlID0gbmV3IFByZWJvdW5kQ29uc3RydWN0b3IoKTsKICAgIHZhciBsYXN0ID0gdmFsdWVzLnNsaWNlKC0yKTsKICAgIE0gPSB7CiAgICAgIHg6IGxhc3RbMF0sCiAgICAgIHk6IGxhc3RbMV0KICAgIH07CiAgICByZXR1cm4gY3VydmU7CiAgfQoKICBmdW5jdGlvbiBjb252ZXJ0UGF0aChCZXppZXIsIGQpIHsKICAgIHZhciB0ZXJtcyA9IG5vcm1hbGlzZShkKS5zcGxpdCgiICIpLAogICAgICAgIHRlcm0sCiAgICAgICAgbWF0Y2hlciA9IG5ldyBSZWdFeHAoIltNTENRWl0iLCAiIiksCiAgICAgICAgc2VnbWVudCwKICAgICAgICB2YWx1ZXMsCiAgICAgICAgc2VnbWVudHMgPSBbXSwKICAgICAgICBBUkdTID0gewogICAgICAiQyI6IDYsCiAgICAgICJRIjogNCwKICAgICAgIkwiOiAyLAogICAgICAiTSI6IDIKICAgIH07CgogICAgd2hpbGUgKHRlcm1zLmxlbmd0aCkgewogICAgICB0ZXJtID0gdGVybXMuc3BsaWNlKDAsIDEpWzBdOwoKICAgICAgaWYgKG1hdGNoZXIudGVzdCh0ZXJtKSkgewogICAgICAgIHZhbHVlcyA9IHRlcm1zLnNwbGljZSgwLCBBUkdTW3Rlcm1dKS5tYXAocGFyc2VGbG9hdCk7CiAgICAgICAgc2VnbWVudCA9IG1ha2VCZXppZXIoQmV6aWVyLCB0ZXJtLCB2YWx1ZXMpOwogICAgICAgIGlmIChzZWdtZW50KSBzZWdtZW50cy5wdXNoKHNlZ21lbnQpOwogICAgICB9CiAgICB9CgogICAgcmV0dXJuIG5ldyBCZXppZXIuUG9seUJlemllcihzZWdtZW50cyk7CiAgfQoKICBtb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRQYXRoOwogIC8qKiovCn0sCi8qIDUgKi8KCi8qKiovCmZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHsKICAvKioKICAgKiBOb3JtYWxpc2UgYW4gU1ZHIHBhdGggdG8gYWJzb2x1dGUgY29vcmRpbmF0ZXMKICAgKiBhbmQgZnVsbCBjb21tYW5kcywgcmF0aGVyIHRoYW4gcmVsYXRpdmUgY29vcmRpbmF0ZXMKICAgKiBhbmQvb3Igc2hvcnRjdXQgY29tbWFuZHMuCiAgICovCgogIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgoZCkgewogICAgLy8gcHJlcHJvY2VzcyAiZCIgc28gdGhhdCB3ZSBoYXZlIHNwYWNlcyBiZXR3ZWVuIHZhbHVlcwogICAgZCA9IGQucmVwbGFjZSgvLC9nLCAiICIpIC8vIHJlcGxhY2UgY29tbWFzIHdpdGggc3BhY2VzCiAgICAucmVwbGFjZSgvLS9nLCAiIC0gIikgLy8gYWRkIHNwYWNpbmcgYXJvdW5kIG1pbnVzIHNpZ25zCiAgICAucmVwbGFjZSgvLVxzKy9nLCAiLSIpIC8vIHJlbW92ZSBzcGFjaW5nIHRvIHRoZSByaWdodCBvZiBtaW51cyBzaWducy4KICAgIC5yZXBsYWNlKC8oW2EtekEtWl0pL2csICIgJDEgIik7IC8vIHNldCB1cCB0aGUgdmFyaWFibGVzIHVzZWQgaW4gdGhpcyBmdW5jdGlvbgoKICAgIHZhciBpbnN0cnVjdGlvbnMgPSBkLnJlcGxhY2UoLyhbYS16QS1aXSlccz8vZywgInwkMSIpLnNwbGl0KCJ8IiksCiAgICAgICAgaW5zdHJ1Y3Rpb25MZW5ndGggPSBpbnN0cnVjdGlvbnMubGVuZ3RoLAogICAgICAgIGksCiAgICAgICAgaW5zdHJ1Y3Rpb24sCiAgICAgICAgb3AsCiAgICAgICAgbG9wLAogICAgICAgIGFyZ3MgPSBbXSwKICAgICAgICBhbGVuLAogICAgICAgIGEsCiAgICAgICAgc3ggPSAwLAogICAgICAgIHN5ID0gMCwKICAgICAgICB4ID0gMCwKICAgICAgICB5ID0gMCwKICAgICAgICBjeCA9IDAsCiAgICAgICAgY3kgPSAwLAogICAgICAgIGN4MiA9IDAsCiAgICAgICAgY3kyID0gMCwKICAgICAgICBub3JtYWxpemVkID0gIiI7IC8vIHdlIHJ1biB0aHJvdWdoIHRoZSBpbnN0cnVjdGlvbiBsaXN0IHN0YXJ0aW5nIGF0IDEsIG5vdCAwLAogICAgLy8gYmVjYXVzZSB3ZSBzcGxpdCB1cCAifE0geCB5IC4uLi4iIHNvIHRoZSBmaXJzdCBlbGVtZW50IHdpbGwKICAgIC8vIGFsd2F5cyBiZSBhbiBlbXB0eSBzdHJpbmcuIEJ5IGRlc2lnbi4KCiAgICBmb3IgKGkgPSAxOyBpIDwgaW5zdHJ1Y3Rpb25MZW5ndGg7IGkrKykgewogICAgICAvLyB3aGljaCBpbnN0cnVjdGlvbiBpcyB0aGlzPwogICAgICBpbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uc1tpXTsKICAgICAgb3AgPSBpbnN0cnVjdGlvbi5zdWJzdHJpbmcoMCwgMSk7CiAgICAgIGxvcCA9IG9wLnRvTG93ZXJDYXNlKCk7IC8vIHdoYXQgYXJlIHRoZSBhcmd1bWVudHM/IG5vdGUgdGhhdCB3ZSBuZWVkIHRvIGNvbnZlcnQKICAgICAgLy8gYWxsIHN0cmluZ3MgaW50byBudW1iZXJzLCBvciArIHdpbGwgZG8gc2lsbHkgdGhpbmdzLgoKICAgICAgYXJncyA9IGluc3RydWN0aW9uLnJlcGxhY2Uob3AsICIiKS50cmltKCkuc3BsaXQoIiAiKTsKICAgICAgYXJncyA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uICh2KSB7CiAgICAgICAgcmV0dXJuIHYgIT09ICIiOwogICAgICB9KS5tYXAocGFyc2VGbG9hdCk7CiAgICAgIGFsZW4gPSBhcmdzLmxlbmd0aDsgLy8gd2UgY291bGQgdXNlIGEgc3dpdGNoLCBidXQgZWxhYm9yYXRlIGNvZGUgaW4gYSAiY2FzZSIgd2l0aAogICAgICAvLyBmYWxsdGhyb3VnaCBpcyBqdXN0IGhvcnJpZCB0byByZWFkLiBTbyBsZXQncyB1c2UgaWZ0aGVuCiAgICAgIC8vIHN0YXRlbWVudHMgaW5zdGVhZC4KICAgICAgLy8gbW92ZXRvIGNvbW1hbmQgKHBsdXMgcG9zc2libGUgbGluZXRvKQoKICAgICAgaWYgKGxvcCA9PT0gIm0iKSB7CiAgICAgICAgbm9ybWFsaXplZCArPSAiTSAiOwoKICAgICAgICBpZiAob3AgPT09ICJtIikgewogICAgICAgICAgeCArPSBhcmdzWzBdOwogICAgICAgICAgeSArPSBhcmdzWzFdOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB4ID0gYXJnc1swXTsKICAgICAgICAgIHkgPSBhcmdzWzFdOwogICAgICAgIH0gLy8gcmVjb3JkcyBzdGFydCBwb3NpdGlvbiwgZm9yIGRlYWxpbmcKICAgICAgICAvLyB3aXRoIHRoZSBzaGFwZSBjbG9zZSBvcGVyYXRvciAoJ1onKQoKCiAgICAgICAgc3ggPSB4OwogICAgICAgIHN5ID0geTsKICAgICAgICBub3JtYWxpemVkICs9IHggKyAiICIgKyB5ICsgIiAiOwoKICAgICAgICBpZiAoYWxlbiA+IDIpIHsKICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBhbGVuOyBhICs9IDIpIHsKICAgICAgICAgICAgaWYgKG9wID09PSAibSIpIHsKICAgICAgICAgICAgICB4ICs9IGFyZ3NbYV07CiAgICAgICAgICAgICAgeSArPSBhcmdzW2EgKyAxXTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICB4ID0gYXJnc1thXTsKICAgICAgICAgICAgICB5ID0gYXJnc1thICsgMV07CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIG5vcm1hbGl6ZWQgKz0gWyJMIiwgeCwgeSwgJyddLmpvaW4oIiAiKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0gZWxzZSBpZiAobG9wID09PSAibCIpIHsKICAgICAgICAvLyBsaW5ldG8gY29tbWFuZHMKICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYWxlbjsgYSArPSAyKSB7CiAgICAgICAgICBpZiAob3AgPT09ICJsIikgewogICAgICAgICAgICB4ICs9IGFyZ3NbYV07CiAgICAgICAgICAgIHkgKz0gYXJnc1thICsgMV07CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICB4ID0gYXJnc1thXTsKICAgICAgICAgICAgeSA9IGFyZ3NbYSArIDFdOwogICAgICAgICAgfQoKICAgICAgICAgIG5vcm1hbGl6ZWQgKz0gWyJMIiwgeCwgeSwgJyddLmpvaW4oIiAiKTsKICAgICAgICB9CiAgICAgIH0gZWxzZSBpZiAobG9wID09PSAiaCIpIHsKICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYWxlbjsgYSsrKSB7CiAgICAgICAgICBpZiAob3AgPT09ICJoIikgewogICAgICAgICAgICB4ICs9IGFyZ3NbYV07CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICB4ID0gYXJnc1thXTsKICAgICAgICAgIH0KCiAgICAgICAgICBub3JtYWxpemVkICs9IFsiTCIsIHgsIHksICcnXS5qb2luKCIgIik7CiAgICAgICAgfQogICAgICB9IGVsc2UgaWYgKGxvcCA9PT0gInYiKSB7CiAgICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGErKykgewogICAgICAgICAgaWYgKG9wID09PSAidiIpIHsKICAgICAgICAgICAgeSArPSBhcmdzW2FdOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgeSA9IGFyZ3NbYV07CiAgICAgICAgICB9CgogICAgICAgICAgbm9ybWFsaXplZCArPSBbIkwiLCB4LCB5LCAnJ10uam9pbigiICIpOwogICAgICAgIH0KICAgICAgfSBlbHNlIGlmIChsb3AgPT09ICJxIikgewogICAgICAgIC8vIHF1YWRyYXRpYyBjdXJ2ZXRvIGNvbW1hbmRzCiAgICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGEgKz0gNCkgewogICAgICAgICAgaWYgKG9wID09PSAicSIpIHsKICAgICAgICAgICAgY3ggPSB4ICsgYXJnc1thXTsKICAgICAgICAgICAgY3kgPSB5ICsgYXJnc1thICsgMV07CiAgICAgICAgICAgIHggKz0gYXJnc1thICsgMl07CiAgICAgICAgICAgIHkgKz0gYXJnc1thICsgM107CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBjeCA9IGFyZ3NbYV07CiAgICAgICAgICAgIGN5ID0gYXJnc1thICsgMV07CiAgICAgICAgICAgIHggPSBhcmdzW2EgKyAyXTsKICAgICAgICAgICAgeSA9IGFyZ3NbYSArIDNdOwogICAgICAgICAgfQoKICAgICAgICAgIG5vcm1hbGl6ZWQgKz0gWyJRIiwgY3gsIGN5LCB4LCB5LCAnJ10uam9pbigiICIpOwogICAgICAgIH0KICAgICAgfSBlbHNlIGlmIChsb3AgPT09ICJ0IikgewogICAgICAgIGZvciAoYSA9IDA7IGEgPCBhbGVuOyBhICs9IDIpIHsKICAgICAgICAgIC8vIHJlZmxlY3QgcHJldmlvdXMgY3gvY3kgb3ZlciB4L3kKICAgICAgICAgIGN4ID0geCArICh4IC0gY3gpOwogICAgICAgICAgY3kgPSB5ICsgKHkgLSBjeSk7IC8vIHRoZW4gZ2V0IHJlYWwgZW5kIHBvaW50CgogICAgICAgICAgaWYgKG9wID09PSAidCIpIHsKICAgICAgICAgICAgeCArPSBhcmdzW2FdOwogICAgICAgICAgICB5ICs9IGFyZ3NbYSArIDFdOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgeCA9IGFyZ3NbYV07CiAgICAgICAgICAgIHkgPSBhcmdzW2EgKyAxXTsKICAgICAgICAgIH0KCiAgICAgICAgICBub3JtYWxpemVkICs9IFsiUSIsIGN4LCBjeSwgeCwgeSwgJyddLmpvaW4oIiAiKTsKICAgICAgICB9CiAgICAgIH0gZWxzZSBpZiAobG9wID09PSAiYyIpIHsKICAgICAgICAvLyBjdWJpYyBjdXJ2ZXRvIGNvbW1hbmRzCiAgICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGEgKz0gNikgewogICAgICAgICAgaWYgKG9wID09PSAiYyIpIHsKICAgICAgICAgICAgY3ggPSB4ICsgYXJnc1thXTsKICAgICAgICAgICAgY3kgPSB5ICsgYXJnc1thICsgMV07CiAgICAgICAgICAgIGN4MiA9IHggKyBhcmdzW2EgKyAyXTsKICAgICAgICAgICAgY3kyID0geSArIGFyZ3NbYSArIDNdOwogICAgICAgICAgICB4ICs9IGFyZ3NbYSArIDRdOwogICAgICAgICAgICB5ICs9IGFyZ3NbYSArIDVdOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgY3ggPSBhcmdzW2FdOwogICAgICAgICAgICBjeSA9IGFyZ3NbYSArIDFdOwogICAgICAgICAgICBjeDIgPSBhcmdzW2EgKyAyXTsKICAgICAgICAgICAgY3kyID0gYXJnc1thICsgM107CiAgICAgICAgICAgIHggPSBhcmdzW2EgKyA0XTsKICAgICAgICAgICAgeSA9IGFyZ3NbYSArIDVdOwogICAgICAgICAgfQoKICAgICAgICAgIG5vcm1hbGl6ZWQgKz0gWyJDIiwgY3gsIGN5LCBjeDIsIGN5MiwgeCwgeSwgJyddLmpvaW4oIiAiKTsKICAgICAgICB9CiAgICAgIH0gZWxzZSBpZiAobG9wID09PSAicyIpIHsKICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYWxlbjsgYSArPSA0KSB7CiAgICAgICAgICAvLyByZWZsZWN0IHByZXZpb3VzIGN4Mi9jeTIgb3ZlciB4L3kKICAgICAgICAgIGN4ID0geCArICh4IC0gY3gyKTsKICAgICAgICAgIGN5ID0geSArICh5IC0gY3kyKTsgLy8gdGhlbiBnZXQgcmVhbCBjb250cm9sIGFuZCBlbmQgcG9pbnQKCiAgICAgICAgICBpZiAob3AgPT09ICJzIikgewogICAgICAgICAgICBjeDIgPSB4ICsgYXJnc1thXTsKICAgICAgICAgICAgY3kyID0geSArIGFyZ3NbYSArIDFdOwogICAgICAgICAgICB4ICs9IGFyZ3NbYSArIDJdOwogICAgICAgICAgICB5ICs9IGFyZ3NbYSArIDNdOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgY3gyID0gYXJnc1thXTsKICAgICAgICAgICAgY3kyID0gYXJnc1thICsgMV07CiAgICAgICAgICAgIHggPSBhcmdzW2EgKyAyXTsKICAgICAgICAgICAgeSA9IGFyZ3NbYSArIDNdOwogICAgICAgICAgfQoKICAgICAgICAgIG5vcm1hbGl6ZWQgKz0gWyJDIiwgY3gsIGN5LCBjeDIsIGN5MiwgeCwgeSwgJyddLmpvaW4oIiAiKTsKICAgICAgICB9CiAgICAgIH0gZWxzZSBpZiAobG9wID09PSAieiIpIHsKICAgICAgICBub3JtYWxpemVkICs9ICJaICI7IC8vIG5vdCB1bmltcG9ydGFudDogcGF0aCBjbG9zaW5nIGNoYW5nZXMgdGhlIGN1cnJlbnQgeC95IGNvb3JkaW5hdGUKCiAgICAgICAgeCA9IHN4OwogICAgICAgIHkgPSBzeTsKICAgICAgfQogICAgfQoKICAgIHJldHVybiBub3JtYWxpemVkLnRyaW0oKTsKICB9CgogIG1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplUGF0aDsKICAvKioqLwp9Ci8qKioqKiovCl0pOwoKZnVuY3Rpb24gZG90cHJvZHVjdCh4LCB5KSB7CiAgZnVuY3Rpb24gZG90cF9zdW0oYSwgYikgewogICAgcmV0dXJuIGEgKyBiOwogIH0KCiAgZnVuY3Rpb24gZG90cF90aW1lcyhhLCBpKSB7CiAgICByZXR1cm4geFtpXSAqIHlbaV07CiAgfQoKICBpZiAoeC5sZW5ndGggIT0geS5sZW5ndGgpIHRocm93ICJjYW4ndCBmaW5kIGRvdCBwcm9kdWN0OiBhcnJheXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3RocyI7CiAgcmV0dXJuIHgubWFwKGRvdHBfdGltZXMpLnJlZHVjZShkb3RwX3N1bSwgMCk7Cn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdAoKCnZhciB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0oZWxlbWVudCwgcG9pbnQpIHsKICByZXR1cm4gcG9pbnQ7Cn07CgpjcmVhdGVQb2ludEF0TG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVQb2ludEF0TG9jYXRpb24obGF0LCBsb24sIGFsdCkgewogIHJldHVybiBHS1V0aWxzLndvcmxkRnJvbUxhdExvbihsYXQsIGxvbiwgYWx0KTsKfTsKCmxlcnBCZXR3ZWVuUG9pbnRzID0gZnVuY3Rpb24gbGVycEJldHdlZW5Qb2ludHMocDAsIHAxLCBwZXJjZW50KSB7CiAgdmFyIHggPSAocDFbMF0gLSBwMFswXSkgKiBwZXJjZW50ICsgcDBbMF07CiAgdmFyIHkgPSAocDFbMV0gLSBwMFsxXSkgKiBwZXJjZW50ICsgcDBbMV07CiAgdmFyIHogPSAocDFbMl0gLSBwMFsyXSkgKiBwZXJjZW50ICsgcDBbMl07CiAgcmV0dXJuIFt4LCB5LCB6XTsKfTsKCmdldFBvaW50T25DdWJpY0JlemllciA9IGZ1bmN0aW9uIGdldFBvaW50T25DdWJpY0Jlemllcih0LCBjcCkgewogIHZhciBiMCA9IE1hdGgucG93KDEgLSB0LCAzKTsKICB2YXIgYjEgPSAzICogdCAqIE1hdGgucG93KDEgLSB0LCAyKTsKICB2YXIgYjIgPSAzICogKDEgLSB0KSAqIE1hdGgucG93KHQsIDIpOwogIHZhciBiMyA9IE1hdGgucG93KHQsIDMpOwogIHJldHVybiBiMCAqIGNwWzBdICsgYjEgKiBjcFsxXSArIGIyICogY3BbMl0gKyBiMyAqIGNwWzNdOwp9OwoKY3JlYXRlQXJjQmV0d2VlbkNvb3JkcyA9IGZ1bmN0aW9uIGNyZWF0ZUFyY0JldHdlZW5Db29yZHMoc3RhcnQsIGVuZCkgewogIHZhciBwMCA9IEdLVXRpbHMud29ybGRGcm9tTGF0TG9uKHN0YXJ0WzBdLCBzdGFydFsxXSwgMC4wKTsKICB2YXIgcDMgPSBHS1V0aWxzLndvcmxkRnJvbUxhdExvbihlbmRbMF0sIGVuZFsxXSwgMC4wKTsKICB2YXIgc2ltdWxhcml0eSA9IDEuMCAtIChkb3Rwcm9kdWN0KHAwLCBwMykgKyAxLjApIC8gMi4wOwogIHZhciBhbHQgPSAwLjIgKyAzLjAgKiBzaW11bGFyaXR5OwogIGNvbnNvbGUubG9nKGFsdCk7CiAgdmFyIGEwID0gR0tVdGlscy53b3JsZEZyb21MYXRMb24oc3RhcnRbMF0sIHN0YXJ0WzFdLCBhbHQpOwogIHZhciBhMyA9IEdLVXRpbHMud29ybGRGcm9tTGF0TG9uKGVuZFswXSwgZW5kWzFdLCBhbHQpOwogIHZhciBwMSA9IGxlcnBCZXR3ZWVuUG9pbnRzKGEwLCBhMywgMC4yNSArIE1hdGgucG93KHNpbXVsYXJpdHksIDEuMSkgKiAwLjEpOwogIHZhciBwMiA9IGxlcnBCZXR3ZWVuUG9pbnRzKGEwLCBhMywgMC43NSAtIE1hdGgucG93KHNpbXVsYXJpdHksIDEuMSkgKiAwLjEpOwogIHZhciBjcCA9IFtdOwogIGNwLnB1c2guYXBwbHkoY3AsIF90b0NvbnN1bWFibGVBcnJheShwMCkpOwogIGNwLnB1c2guYXBwbHkoY3AsIF90b0NvbnN1bWFibGVBcnJheShwMSkpOwogIGNwLnB1c2guYXBwbHkoY3AsIF90b0NvbnN1bWFibGVBcnJheShwMikpOwogIGNwLnB1c2guYXBwbHkoY3AsIF90b0NvbnN1bWFibGVBcnJheShwMykpOwogIHZhciBwYTEgPSBsZXJwQmV0d2VlblBvaW50cyhhMCwgYTMsIDAuNSk7CiAgdmFyIGMwID0gewogICAgeDogcDBbMF0sCiAgICB5OiBwMFsxXSwKICAgIHo6IHAwWzJdCiAgfTsKICB2YXIgYzEgPSB7CiAgICB4OiBwYTFbMF0sCiAgICB5OiBwYTFbMV0sCiAgICB6OiBwYTFbMl0KICB9OwogIHZhciBjMiA9IHsKICAgIHg6IHAzWzBdLAogICAgeTogcDNbMV0sCiAgICB6OiBwM1syXQogIH07CiAgY29uc29sZS5sb2coYzAsIGMxLCBjMik7CiAgdmFyIGIgPSBCZXppZXIuY3ViaWNGcm9tUG9pbnRzKGMwLCBjMSwgYzIsIDAuNSk7IC8vIGNvbnN0IGIgPSBuZXcgQmV6aWVyKGNwKTsKCiAgdmFyIHAgPSBiLmdldExVVCgxMDApOwogIHZhciBwb2ludHMgPSBbXTsKICBwLmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7CiAgICBwb2ludHMucHVzaC5hcHBseShwb2ludHMsIF90b0NvbnN1bWFibGVBcnJheShPYmplY3QudmFsdWVzKHBvaW50KSkpOwogIH0pOwogIHJldHVybiBwb2ludHM7Cn07Cgpvbm1lc3NhZ2UgPSBmdW5jdGlvbiBvbm1lc3NhZ2UoZSkgewogIHZhciBkYXRhID0gZS5kYXRhLmRhdGE7CiAgdmFyIHR5cGUgPSBlLmRhdGEudHlwZTsKCiAgaWYgKGUuZGF0YS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkgewogICAgdHJ5IHsKICAgICAgaW1wb3J0U2NyaXB0cyhlLmRhdGEudHJhbnNmb3JtKTsKICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsKICAgIH0KICB9CgogIGlmICh0eXBlID09PSAncG9pbnQnKSB7CiAgICB2YXIgdmVydGljZXMgPSB7fTsKICAgIHZlcnRpY2VzLnBvc2l0aW9uID0gewogICAgICBudW1Db21wb25lbnRzOiAzLAogICAgICBkYXRhOiBbXQogICAgfTsKICAgIHZlcnRpY2VzLmNvbG9yID0gewogICAgICBudW1Db21wb25lbnRzOiA0LAogICAgICBkYXRhOiBbXQogICAgfTsKICAgIHZlcnRpY2VzLnNpemUgPSB7CiAgICAgIG51bUNvbXBvbmVudHM6IDEsCiAgICAgIGRhdGE6IFtdCiAgICB9OwogICAgdmVydGljZXMuaW5kaWNlcyA9IHsKICAgICAgbnVtQ29tcG9uZW50czogMSwKICAgICAgZGF0YTogW10KICAgIH07CiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7CiAgICAgIHZhciBfdmVydGljZXMkcG9zaXRpb24kZGEsIF92ZXJ0aWNlcyRjb2xvciRkYXRhOwoKICAgICAgLy8gQ3JlYXRlIHBvaW50IGdlb21ldHJ5IGF0IGxvY2F0aW9uCiAgICAgIHZhciBwb2ludCA9IHsKICAgICAgICBsYXQ6IGVsZW1lbnQubGF0LAogICAgICAgIGxvbjogZWxlbWVudC5sb24sCiAgICAgICAgY29sb3I6IFsxLjAsIDEuMCwgMS4wLCAxLjBdLAogICAgICAgIHNpemU6IDEwLjAKICAgICAgfTsgLy8gVHJhbnNmb3JtIGdlb21ldHJ5IHVzaW5nIHByb3ZpZGVkIGZ1bmN0aW9uCgogICAgICBwb2ludCA9IHRyYW5zZm9ybShlbGVtZW50LCBwb2ludCk7CiAgICAgIHBvaW50LmNvb3JkcyA9IGNyZWF0ZVBvaW50QXRMb2NhdGlvbihwb2ludC5sYXQsIHBvaW50LmxvbiwgcG9pbnQuYWx0KTsKCiAgICAgIChfdmVydGljZXMkcG9zaXRpb24kZGEgPSB2ZXJ0aWNlcy5wb3NpdGlvbi5kYXRhKS5wdXNoLmFwcGx5KF92ZXJ0aWNlcyRwb3NpdGlvbiRkYSwgX3RvQ29uc3VtYWJsZUFycmF5KHBvaW50LmNvb3JkcykpOwoKICAgICAgKF92ZXJ0aWNlcyRjb2xvciRkYXRhID0gdmVydGljZXMuY29sb3IuZGF0YSkucHVzaC5hcHBseShfdmVydGljZXMkY29sb3IkZGF0YSwgX3RvQ29uc3VtYWJsZUFycmF5KHBvaW50LmNvbG9yKSk7CgogICAgICB2ZXJ0aWNlcy5zaXplLmRhdGEucHVzaChwb2ludC5zaXplKTsKICAgICAgdmVydGljZXMuaW5kaWNlcy5kYXRhLnB1c2goaW5kZXgpOwogICAgfSk7CiAgICBwb3N0TWVzc2FnZSh2ZXJ0aWNlcyk7CiAgfSBlbHNlIGlmICh0eXBlID09PSAncXVhZCcpIHsKICAgIGNvbnNvbGUubG9nKCdDcmVhdGUgUXVhZCcpOwogICAgY29uc29sZS5sb2coJ0RhdGFHZW8tUXVhZCcsIGRhdGEpOwogICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgewogICAgICByZXR1cm4gY29uc29sZS5sb2coZWwpOwogICAgfSk7CiAgfSBlbHNlIGlmICh0eXBlID09PSAnYXJjJykgewogICAgdmFyIF92ZXJ0aWNlcyA9IHt9OwogICAgX3ZlcnRpY2VzLnBvc2l0aW9uID0gewogICAgICBudW1Db21wb25lbnRzOiAzLAogICAgICBkYXRhOiBbXQogICAgfTsKICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsKICAgICAgdmFyIF92ZXJ0aWNlcyRwb3NpdGlvbiRkYTI7CgogICAgICB2YXIgZGVtb0FyYyA9IGNyZWF0ZUFyY0JldHdlZW5Db29yZHMoZWwuZnJvbSwgZWwudG8pOwoKICAgICAgKF92ZXJ0aWNlcyRwb3NpdGlvbiRkYTIgPSBfdmVydGljZXMucG9zaXRpb24uZGF0YSkucHVzaC5hcHBseShfdmVydGljZXMkcG9zaXRpb24kZGEyLCBfdG9Db25zdW1hYmxlQXJyYXkoZGVtb0FyYykpOwogICAgfSk7CiAgICBwb3N0TWVzc2FnZShfdmVydGljZXMpOwogIH0KfTsKCg==', 'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9nZW8uanMiLCJzb3VyY2VzIjpbIndvcmtlcjovL3dlYi13b3JrZXIvc3JjL3RoaXJkcGFydHkvZ2wtbWF0cml4L2NvbW1vbi5qcyIsIndvcmtlcjovL3dlYi13b3JrZXIvc3JjL3RoaXJkcGFydHkvZ2wtbWF0cml4L21hdDMuanMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy90aGlyZHBhcnR5L2dsLW1hdHJpeC92ZWMzLmpzIiwid29ya2VyOi8vd2ViLXdvcmtlci9zcmMvdGhpcmRwYXJ0eS9nbC1tYXRyaXgvdmVjNC5qcyIsIndvcmtlcjovL3dlYi13b3JrZXIvc3JjL3RoaXJkcGFydHkvZ2wtbWF0cml4L3F1YXQuanMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy90aGlyZHBhcnR5L2dsLW1hdHJpeC92ZWMyLmpzIiwid29ya2VyOi8vd2ViLXdvcmtlci9zcmMvY29yZS91dGlscy5qcyIsIndvcmtlcjovL3dlYi13b3JrZXIvc3JjL3RoaXJkcGFydHkvYmV6aWVyLmpzIiwid29ya2VyOi8vd2ViLXdvcmtlci9zcmMvd29ya2Vycy9kYXRhX2dlby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29tbW9uIHV0aWxpdGllc1xyXG4gKiBAbW9kdWxlIGdsTWF0cml4XHJcbiAqL1xuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCB2YXIgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IHZhciBBUlJBWV9UWVBFID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBGbG9hdDMyQXJyYXkgOiBBcnJheTtcbmV4cG9ydCB2YXIgUkFORE9NID0gTWF0aC5yYW5kb207XG4vKipcclxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7RmxvYXQzMkFycmF5Q29uc3RydWN0b3IgfCBBcnJheUNvbnN0cnVjdG9yfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxyXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxyXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXHJcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cbmlmICghTWF0aC5oeXBvdCkgTWF0aC5oeXBvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHkgPSAwLFxuICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHkgKz0gYXJndW1lbnRzW2ldICogYXJndW1lbnRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydCh5KTtcbn07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogM3gzIE1hdHJpeFxyXG4gKiBAbW9kdWxlIG1hdDNcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDNcclxuICpcclxuICogQHJldHVybnMge21hdDN9IGEgbmV3IDN4MyBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgfVxuXG4gIG91dFswXSA9IDE7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29waWVzIHRoZSB1cHBlci1sZWZ0IDN4MyB2YWx1ZXMgaW50byB0aGUgZ2l2ZW4gbWF0My5cclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyAzeDMgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVs0XTtcbiAgb3V0WzRdID0gYVs1XTtcbiAgb3V0WzVdID0gYVs2XTtcbiAgb3V0WzZdID0gYVs4XTtcbiAgb3V0WzddID0gYVs5XTtcbiAgb3V0WzhdID0gYVsxMF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIG1hdHJpeCB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQzIHRvIGFub3RoZXJcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlIGEgbmV3IG1hdDMgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXHJcbiAqIEByZXR1cm5zIHttYXQzfSBBIG5ldyBtYXQzXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTEwO1xuICBvdXRbNF0gPSBtMTE7XG4gIG91dFs1XSA9IG0xMjtcbiAgb3V0WzZdID0gbTIwO1xuICBvdXRbN10gPSBtMjE7XG4gIG91dFs4XSA9IG0yMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTEwO1xuICBvdXRbNF0gPSBtMTE7XG4gIG91dFs1XSA9IG0xMjtcbiAgb3V0WzZdID0gbTIwO1xuICBvdXRbN10gPSBtMjE7XG4gIG91dFs4XSA9IG0yMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgYSBtYXQzIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gIGlmIChvdXQgPT09IGEpIHtcbiAgICB2YXIgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBvdXRbMV0gPSBhWzNdO1xuICAgIG91dFsyXSA9IGFbNl07XG4gICAgb3V0WzNdID0gYTAxO1xuICAgIG91dFs1XSA9IGFbN107XG4gICAgb3V0WzZdID0gYTAyO1xuICAgIG91dFs3XSA9IGExMjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhWzFdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhWzJdO1xuICAgIG91dFs3XSA9IGFbNV07XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogSW52ZXJ0cyBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XTtcbiAgdmFyIGIwMSA9IGEyMiAqIGExMSAtIGExMiAqIGEyMTtcbiAgdmFyIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjA7XG4gIHZhciBiMjEgPSBhMjEgKiBhMTAgLSBhMTEgKiBhMjA7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICB2YXIgZGV0ID0gYTAwICogYjAxICsgYTAxICogYjExICsgYTAyICogYjIxO1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IGIwMSAqIGRldDtcbiAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0O1xuICBvdXRbMl0gPSAoYTEyICogYTAxIC0gYTAyICogYTExKSAqIGRldDtcbiAgb3V0WzNdID0gYjExICogZGV0O1xuICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldDtcbiAgb3V0WzVdID0gKC1hMTIgKiBhMDAgKyBhMDIgKiBhMTApICogZGV0O1xuICBvdXRbNl0gPSBiMjEgKiBkZXQ7XG4gIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMSAqIGEwMCAtIGEwMSAqIGExMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICBvdXRbMF0gPSBhMTEgKiBhMjIgLSBhMTIgKiBhMjE7XG4gIG91dFsxXSA9IGEwMiAqIGEyMSAtIGEwMSAqIGEyMjtcbiAgb3V0WzJdID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICBvdXRbM10gPSBhMTIgKiBhMjAgLSBhMTAgKiBhMjI7XG4gIG91dFs0XSA9IGEwMCAqIGEyMiAtIGEwMiAqIGEyMDtcbiAgb3V0WzVdID0gYTAyICogYTEwIC0gYTAwICogYTEyO1xuICBvdXRbNl0gPSBhMTAgKiBhMjEgLSBhMTEgKiBhMjA7XG4gIG91dFs3XSA9IGEwMSAqIGEyMCAtIGEwMCAqIGEyMTtcbiAgb3V0WzhdID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICByZXR1cm4gYTAwICogKGEyMiAqIGExMSAtIGExMiAqIGEyMSkgKyBhMDEgKiAoLWEyMiAqIGExMCArIGExMiAqIGEyMCkgKyBhMDIgKiAoYTIxICogYTEwIC0gYTExICogYTIwKTtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQzJ3NcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XTtcbiAgdmFyIGIwMCA9IGJbMF0sXG4gICAgICBiMDEgPSBiWzFdLFxuICAgICAgYjAyID0gYlsyXTtcbiAgdmFyIGIxMCA9IGJbM10sXG4gICAgICBiMTEgPSBiWzRdLFxuICAgICAgYjEyID0gYls1XTtcbiAgdmFyIGIyMCA9IGJbNl0sXG4gICAgICBiMjEgPSBiWzddLFxuICAgICAgYjIyID0gYls4XTtcbiAgb3V0WzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwO1xuICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjE7XG4gIG91dFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMjtcbiAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwO1xuICBvdXRbNF0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjE7XG4gIG91dFs1XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMjtcbiAgb3V0WzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwO1xuICBvdXRbN10gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjE7XG4gIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdLFxuICAgICAgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdLFxuICAgICAgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXTtcbiAgb3V0WzBdID0gYTAwO1xuICBvdXRbMV0gPSBhMDE7XG4gIG91dFsyXSA9IGEwMjtcbiAgb3V0WzNdID0gYTEwO1xuICBvdXRbNF0gPSBhMTE7XG4gIG91dFs1XSA9IGExMjtcbiAgb3V0WzZdID0geCAqIGEwMCArIHkgKiBhMTAgKyBhMjA7XG4gIG91dFs3XSA9IHggKiBhMDEgKyB5ICogYTExICsgYTIxO1xuICBvdXRbOF0gPSB4ICogYTAyICsgeSAqIGExMiArIGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgbWF0MyBieSB0aGUgZ2l2ZW4gYW5nbGVcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdLFxuICAgICAgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdLFxuICAgICAgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYyAqIGEwMCArIHMgKiBhMTA7XG4gIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICBvdXRbMl0gPSBjICogYTAyICsgcyAqIGExMjtcbiAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gIG91dFs0XSA9IGMgKiBhMTEgLSBzICogYTAxO1xuICBvdXRbNV0gPSBjICogYTEyIC0gcyAqIGEwMjtcbiAgb3V0WzZdID0gYTIwO1xuICBvdXRbN10gPSBhMjE7XG4gIG91dFs4XSA9IGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgdGhlIG1hdDMgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXTtcbiAgb3V0WzBdID0geCAqIGFbMF07XG4gIG91dFsxXSA9IHggKiBhWzFdO1xuICBvdXRbMl0gPSB4ICogYVsyXTtcbiAgb3V0WzNdID0geSAqIGFbM107XG4gIG91dFs0XSA9IHkgKiBhWzRdO1xuICBvdXRbNV0gPSB5ICogYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0My50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gdlswXTtcbiAgb3V0WzddID0gdlsxXTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQzLnJvdGF0ZShkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IC1zO1xuICBvdXRbNF0gPSBjO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDMuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHZbMV07XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNvcHlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKiovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MmQob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IGFbMl07XG4gIG91dFs0XSA9IGFbM107XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IGFbNF07XG4gIG91dFs3XSA9IGFbNV07XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXHJcbiAqXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB5eCA9IHkgKiB4MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgenggPSB6ICogeDI7XG4gIHZhciB6eSA9IHogKiB5MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgb3V0WzNdID0geXggLSB3ejtcbiAgb3V0WzZdID0genggKyB3eTtcbiAgb3V0WzFdID0geXggKyB3ejtcbiAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gIG91dFs3XSA9IHp5IC0gd3g7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFs1XSA9IHp5ICsgd3g7XG4gIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBNYXQ0IHRvIGRlcml2ZSB0aGUgbm9ybWFsIG1hdHJpeCBmcm9tXHJcbiAqXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxGcm9tTWF0NChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICB2YXIgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzJdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gIG91dFs2XSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICBvdXRbN10gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgMkQgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHlvdXIgZ2wgY29udGV4dFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBnbCBjb250ZXh0XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uKG91dCwgd2lkdGgsIGhlaWdodCkge1xuICBvdXRbMF0gPSAyIC8gd2lkdGg7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IC0yIC8gaGVpZ2h0O1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAtMTtcbiAgb3V0WzddID0gMTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwibWF0MyhcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIiwgXCIgKyBhWzRdICsgXCIsIFwiICsgYVs1XSArIFwiLCBcIiArIGFbNl0gKyBcIiwgXCIgKyBhWzddICsgXCIsIFwiICsgYVs4XSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLmh5cG90KGFbMF0sIGFbMV0sIGFbMl0sIGFbM10sIGFbNF0sIGFbNV0sIGFbNl0sIGFbN10sIGFbOF0pO1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICBvdXRbNl0gPSBhWzZdICogYjtcbiAgb3V0WzddID0gYVs3XSAqIGI7XG4gIG91dFs4XSA9IGFbOF0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDMncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF0gKiBzY2FsZTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV0gKiBzY2FsZTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl0gKiBzY2FsZTtcbiAgb3V0WzddID0gYVs3XSArIGJbN10gKiBzY2FsZTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiYgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddICYmIGFbOF0gPT09IGJbOF07XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiBUaGUgc2Vjb25kIG1hdHJpeC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM10sXG4gICAgICBhNCA9IGFbNF0sXG4gICAgICBhNSA9IGFbNV0sXG4gICAgICBhNiA9IGFbNl0sXG4gICAgICBhNyA9IGFbN10sXG4gICAgICBhOCA9IGFbOF07XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM10sXG4gICAgICBiNCA9IGJbNF0sXG4gICAgICBiNSA9IGJbNV0sXG4gICAgICBiNiA9IGJbNl0sXG4gICAgICBiNyA9IGJbN10sXG4gICAgICBiOCA9IGJbOF07XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJiBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiYgTWF0aC5hYnMoYTQgLSBiNCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmIE1hdGguYWJzKGE1IC0gYjUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSAmJiBNYXRoLmFicyhhNiAtIGI2KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNiksIE1hdGguYWJzKGI2KSkgJiYgTWF0aC5hYnMoYTcgLSBiNykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTcpLCBNYXRoLmFicyhiNykpICYmIE1hdGguYWJzKGE4IC0gYjgpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE4KSwgTWF0aC5hYnMoYjgpKTtcbn1cbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAzIERpbWVuc2lvbmFsIFZlY3RvclxyXG4gKiBAbW9kdWxlIHZlYzNcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMF0gPSAwO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2VpbFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeik7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuLyoqXHJcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICBvdXRbMl0gPSBhWzJdICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xufVxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXTtcbiAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXTtcbiAgdmFyIGF5ID0gYVsxXTtcbiAgdmFyIGF6ID0gYVsyXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1pdGUob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDE7XG4gIHZhciBmYWN0b3IyID0gZmFjdG9yVGltZXMyICogKHQgLSAyKSArIHQ7XG4gIHZhciBmYWN0b3IzID0gZmFjdG9yVGltZXMyICogKHQgLSAxKTtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmV6aWVyKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgaW52ZXJzZUZhY3RvciA9IDEgLSB0O1xuICB2YXIgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBpbnZlcnNlRmFjdG9yVGltZXNUd28gKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvO1xuICB2YXIgZmFjdG9yMyA9IDMgKiBmYWN0b3JUaW1lczIgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqIHQ7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuICB2YXIgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgdmFyIHogPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAtIDEuMDtcbiAgdmFyIHpTY2FsZSA9IE1hdGguc3FydCgxLjAgLSB6ICogeikgKiBzY2FsZTtcbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlO1xuICBvdXRbMl0gPSB6ICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cclxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICB2YXIgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgdyA9IHcgfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN107XG4gIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XHJcbiAqIENhbiBhbHNvIGJlIHVzZWQgZm9yIGR1YWwgcXVhdGVybmlvbnMuIChNdWx0aXBseSBpdCB3aXRoIHRoZSByZWFsIHBhcnQpXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIGJlbmNobWFya3M6IGh0dHBzOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9ucy1maXhlZFxuICB2YXIgcXggPSBxWzBdLFxuICAgICAgcXkgPSBxWzFdLFxuICAgICAgcXogPSBxWzJdLFxuICAgICAgcXcgPSBxWzNdO1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdOyAvLyB2YXIgcXZlYyA9IFtxeCwgcXksIHF6XTtcbiAgLy8gdmFyIHV2ID0gdmVjMy5jcm9zcyhbXSwgcXZlYywgYSk7XG5cbiAgdmFyIHV2eCA9IHF5ICogeiAtIHF6ICogeSxcbiAgICAgIHV2eSA9IHF6ICogeCAtIHF4ICogeixcbiAgICAgIHV2eiA9IHF4ICogeSAtIHF5ICogeDsgLy8gdmFyIHV1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIHV2KTtcblxuICB2YXIgdXV2eCA9IHF5ICogdXZ6IC0gcXogKiB1dnksXG4gICAgICB1dXZ5ID0gcXogKiB1dnggLSBxeCAqIHV2eixcbiAgICAgIHV1dnogPSBxeCAqIHV2eSAtIHF5ICogdXZ4OyAvLyB2ZWMzLnNjYWxlKHV2LCB1diwgMiAqIHcpO1xuXG4gIHZhciB3MiA9IHF3ICogMjtcbiAgdXZ4ICo9IHcyO1xuICB1dnkgKj0gdzI7XG4gIHV2eiAqPSB3MjsgLy8gdmVjMy5zY2FsZSh1dXYsIHV1diwgMik7XG5cbiAgdXV2eCAqPSAyO1xuICB1dXZ5ICo9IDI7XG4gIHV1dnogKj0gMjsgLy8gcmV0dXJuIHZlYzMuYWRkKG91dCwgYSwgdmVjMy5hZGQob3V0LCB1diwgdXV2KSk7XG5cbiAgb3V0WzBdID0geCArIHV2eCArIHV1dng7XG4gIG91dFsxXSA9IHkgKyB1dnkgKyB1dXZ5O1xuICBvdXRbMl0gPSB6ICsgdXZ6ICsgdXV2ejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXTtcbiAgclsxXSA9IHBbMV0gKiBNYXRoLmNvcyhyYWQpIC0gcFsyXSAqIE1hdGguc2luKHJhZCk7XG4gIHJbMl0gPSBwWzFdICogTWF0aC5zaW4ocmFkKSArIHBbMl0gKiBNYXRoLmNvcyhyYWQpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFsyXSAqIE1hdGguc2luKHJhZCkgKyBwWzBdICogTWF0aC5jb3MocmFkKTtcbiAgclsxXSA9IHBbMV07XG4gIHJbMl0gPSBwWzJdICogTWF0aC5jb3MocmFkKSAtIHBbMF0gKiBNYXRoLnNpbihyYWQpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXSAqIE1hdGguY29zKHJhZCkgLSBwWzFdICogTWF0aC5zaW4ocmFkKTtcbiAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihyYWQpICsgcFsxXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMl0gPSBwWzJdOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdLFxuICAgICAgbWFnMSA9IE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSArIGF6ICogYXopLFxuICAgICAgbWFnMiA9IE1hdGguc3FydChieCAqIGJ4ICsgYnkgKiBieSArIGJ6ICogYnopLFxuICAgICAgbWFnID0gbWFnMSAqIG1hZzIsXG4gICAgICBjb3NpbmUgPSBtYWcgJiYgZG90KGEsIGIpIC8gbWFnO1xuICByZXR1cm4gTWF0aC5hY29zKE1hdGgubWluKE1hdGgubWF4KGNvc2luZSwgLTEpLCAxKSk7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAzO1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICAgIGFbaSArIDJdID0gdmVjWzJdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yXHJcbiAqIEBtb2R1bGUgdmVjNFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcclxuICpcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeiwgdykge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IHc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHosIHcpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICBvdXRbM10gPSBhWzNdICogYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIG91dFszXSA9IGFbM10gLyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNlaWxcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguY2VpbChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICBvdXRbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gcm91bmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLnJvdW5kKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLnJvdW5kKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgdmFyIHcgPSBiWzNdIC0gYVszXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeiwgdyk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHZhciB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6LCB3KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciB3ID0gYVszXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuLyoqXHJcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gLWFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgb3V0WzNdID0gMS4wIC8gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBOb3JtYWxpemUgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSB4ICogbGVuO1xuICBvdXRbMV0gPSB5ICogbGVuO1xuICBvdXRbMl0gPSB6ICogbGVuO1xuICBvdXRbM10gPSB3ICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdICsgYVszXSAqIGJbM107XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0aHJlZSB2ZWN0b3JzIGluIGEgNC1kaW1lbnNpb25hbCBzcGFjZVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gcmVzdWx0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBVIHRoZSBmaXJzdCB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IFYgdGhlIHNlY29uZCB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IFcgdGhlIHRoaXJkIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjNH0gcmVzdWx0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCB1LCB2LCB3KSB7XG4gIHZhciBBID0gdlswXSAqIHdbMV0gLSB2WzFdICogd1swXSxcbiAgICAgIEIgPSB2WzBdICogd1syXSAtIHZbMl0gKiB3WzBdLFxuICAgICAgQyA9IHZbMF0gKiB3WzNdIC0gdlszXSAqIHdbMF0sXG4gICAgICBEID0gdlsxXSAqIHdbMl0gLSB2WzJdICogd1sxXSxcbiAgICAgIEUgPSB2WzFdICogd1szXSAtIHZbM10gKiB3WzFdLFxuICAgICAgRiA9IHZbMl0gKiB3WzNdIC0gdlszXSAqIHdbMl07XG4gIHZhciBHID0gdVswXTtcbiAgdmFyIEggPSB1WzFdO1xuICB2YXIgSSA9IHVbMl07XG4gIHZhciBKID0gdVszXTtcbiAgb3V0WzBdID0gSCAqIEYgLSBJICogRSArIEogKiBEO1xuICBvdXRbMV0gPSAtKEcgKiBGKSArIEkgKiBDIC0gSiAqIEI7XG4gIG91dFsyXSA9IEcgKiBFIC0gSCAqIEMgKyBKICogQTtcbiAgb3V0WzNdID0gLShHICogRCkgKyBIICogQiAtIEkgKiBBO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdO1xuICB2YXIgYXkgPSBhWzFdO1xuICB2YXIgYXogPSBhWzJdO1xuICB2YXIgYXcgPSBhWzNdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICBvdXRbM10gPSBhdyArIHQgKiAoYlszXSAtIGF3KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7IC8vIE1hcnNhZ2xpYSwgR2VvcmdlLiBDaG9vc2luZyBhIFBvaW50IGZyb20gdGhlIFN1cmZhY2Ugb2YgYVxuICAvLyBTcGhlcmUuIEFubi4gTWF0aC4gU3RhdGlzdC4gNDMgKDE5NzIpLCBuby4gMiwgNjQ1LS02NDYuXG4gIC8vIGh0dHA6Ly9wcm9qZWN0ZXVjbGlkLm9yZy9ldWNsaWQuYW9tcy8xMTc3NjkyNjQ0O1xuXG4gIHZhciB2MSwgdjIsIHYzLCB2NDtcbiAgdmFyIHMxLCBzMjtcblxuICBkbyB7XG4gICAgdjEgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHYyID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICBzMSA9IHYxICogdjEgKyB2MiAqIHYyO1xuICB9IHdoaWxlIChzMSA+PSAxKTtcblxuICBkbyB7XG4gICAgdjMgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHY0ID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICBzMiA9IHYzICogdjMgKyB2NCAqIHY0O1xuICB9IHdoaWxlIChzMiA+PSAxKTtcblxuICB2YXIgZCA9IE1hdGguc3FydCgoMSAtIHMxKSAvIHMyKTtcbiAgb3V0WzBdID0gc2NhbGUgKiB2MTtcbiAgb3V0WzFdID0gc2NhbGUgKiB2MjtcbiAgb3V0WzJdID0gc2NhbGUgKiB2MyAqIGQ7XG4gIG91dFszXSA9IHNjYWxlICogdjQgKiBkO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIG1hdDQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHc7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogdztcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgb3V0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIHZhciBxeCA9IHFbMF0sXG4gICAgICBxeSA9IHFbMV0sXG4gICAgICBxeiA9IHFbMl0sXG4gICAgICBxdyA9IHFbM107IC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjXG5cbiAgdmFyIGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuICB2YXIgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7XG4gIHZhciBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcbiAgdmFyIGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogejsgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuXG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXo7XG4gIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICBvdXRbM10gPSAwLjA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjNChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzRzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSA0O1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICB2ZWNbM10gPSBhW2kgKyAzXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgICBhW2kgKyAzXSA9IHZlY1szXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vbWF0My5qc1wiO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tIFwiLi92ZWMzLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gXCIuL3ZlYzQuanNcIjtcbi8qKlxyXG4gKiBRdWF0ZXJuaW9uXHJcbiAqIEBtb2R1bGUgcXVhdFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICB9XG5cbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgYSBxdWF0IHRvIHRoZSBpZGVudGl0eSBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDA7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0cyBhIHF1YXQgZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYW5kIHJvdGF0aW9uIGF4aXMsXHJcbiAqIHRoZW4gcmV0dXJucyBpdC5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF4aXNBbmdsZShvdXQsIGF4aXMsIHJhZCkge1xuICByYWQgPSByYWQgKiAwLjU7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgb3V0WzBdID0gcyAqIGF4aXNbMF07XG4gIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICBvdXRbMl0gPSBzICogYXhpc1syXTtcbiAgb3V0WzNdID0gTWF0aC5jb3MocmFkKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXRzIHRoZSByb3RhdGlvbiBheGlzIGFuZCBhbmdsZSBmb3IgYSBnaXZlblxyXG4gKiAgcXVhdGVybmlvbi4gSWYgYSBxdWF0ZXJuaW9uIGlzIGNyZWF0ZWQgd2l0aFxyXG4gKiAgc2V0QXhpc0FuZ2xlLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZVxyXG4gKiAgdmFsdWVzIGFzIHByb3ZpZGllZCBpbiB0aGUgb3JpZ2luYWwgcGFyYW1ldGVyIGxpc3RcclxuICogIE9SIGZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHZhbHVlcy5cclxuICogRXhhbXBsZTogVGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5IGF4aXMgWzAsIDAsIDFdIGFuZFxyXG4gKiAgYW5nbGUgLTkwIGlzIHRoZSBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieVxyXG4gKiAgWzAsIDAsIDFdIGFuZCAyNzAuIFRoaXMgbWV0aG9kIGZhdm9ycyB0aGUgbGF0dGVyLlxyXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfYXhpcyAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxyXG4gKiBAcGFyYW0gIHtSZWFkb25seVF1YXR9IHEgICAgIFF1YXRlcm5pb24gdG8gYmUgZGVjb21wb3NlZFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgb2YgdGhlIHJvdGF0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXhpc0FuZ2xlKG91dF9heGlzLCBxKSB7XG4gIHZhciByYWQgPSBNYXRoLmFjb3MocVszXSkgKiAyLjA7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkIC8gMi4wKTtcblxuICBpZiAocyA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICBvdXRfYXhpc1swXSA9IHFbMF0gLyBzO1xuICAgIG91dF9heGlzWzFdID0gcVsxXSAvIHM7XG4gICAgb3V0X2F4aXNbMl0gPSBxWzJdIC8gcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBzIGlzIHplcm8sIHJldHVybiBhbnkgYXhpcyAobm8gcm90YXRpb24gLSBheGlzIGRvZXMgbm90IG1hdHRlcilcbiAgICBvdXRfYXhpc1swXSA9IDE7XG4gICAgb3V0X2F4aXNbMV0gPSAwO1xuICAgIG91dF9heGlzWzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiByYWQ7XG59XG4vKipcclxuICogR2V0cyB0aGUgYW5ndWxhciBkaXN0YW5jZSBiZXR3ZWVuIHR3byB1bml0IHF1YXRlcm5pb25zXHJcbiAqXHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gYSAgICAgT3JpZ2luIHVuaXQgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0gIHtSZWFkb25seVF1YXR9IGIgICAgIERlc3RpbmF0aW9uIHVuaXQgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgYmV0d2VlbiB0aGUgdHdvIHF1YXRlcm5pb25zXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICB2YXIgZG90cHJvZHVjdCA9IGRvdChhLCBiKTtcbiAgcmV0dXJuIE1hdGguYWNvcygyICogZG90cHJvZHVjdCAqIGRvdHByb2R1Y3QgLSAxKTtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBidyA9IGJbM107XG4gIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4ICsgYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBYIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYng7XG4gIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICBvdXRbMl0gPSBheiAqIGJ3IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ5ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ6ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF5ICogYno7XG4gIG91dFsxXSA9IGF5ICogYncgLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBiejtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF6ICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgVyBjb21wb25lbnQgb2YgYSBxdWF0IGZyb20gdGhlIFgsIFksIGFuZCBaIGNvbXBvbmVudHMuXHJcbiAqIEFzc3VtZXMgdGhhdCBxdWF0ZXJuaW9uIGlzIDEgdW5pdCBpbiBsZW5ndGguXHJcbiAqIEFueSBleGlzdGluZyBXIGNvbXBvbmVudCB3aWxsIGJlIGlnbm9yZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBXIGNvbXBvbmVudCBvZlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVyhvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gTWF0aC5zcXJ0KE1hdGguYWJzKDEuMCAtIHggKiB4IC0geSAqIHkgLSB6ICogeikpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2YgYSB1bml0IHF1YXRlcm5pb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cChvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgZXQgPSBNYXRoLmV4cCh3KTtcbiAgdmFyIHMgPSByID4gMCA/IGV0ICogTWF0aC5zaW4ocikgLyByIDogMDtcbiAgb3V0WzBdID0geCAqIHM7XG4gIG91dFsxXSA9IHkgKiBzO1xuICBvdXRbMl0gPSB6ICogcztcbiAgb3V0WzNdID0gZXQgKiBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGUgdGhlIG5hdHVyYWwgbG9nYXJpdGhtIG9mIGEgdW5pdCBxdWF0ZXJuaW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgdGhlIGV4cG9uZW50aWFsIG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsbihvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgdCA9IHIgPiAwID8gTWF0aC5hdGFuMihyLCB3KSAvIHIgOiAwO1xuICBvdXRbMF0gPSB4ICogdDtcbiAgb3V0WzFdID0geSAqIHQ7XG4gIG91dFsyXSA9IHogKiB0O1xuICBvdXRbM10gPSAwLjUgKiBNYXRoLmxvZyh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlIHRoZSBzY2FsYXIgcG93ZXIgb2YgYSB1bml0IHF1YXRlcm5pb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBxdWF0ZXJuaW9uIGJ5XHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3cob3V0LCBhLCBiKSB7XG4gIGxuKG91dCwgYSk7XG4gIHNjYWxlKG91dCwgb3V0LCBiKTtcbiAgZXhwKG91dCwgb3V0KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gIC8vIGJlbmNobWFya3M6XG4gIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBidyA9IGJbM107XG4gIHZhciBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTsgLy8gY2FsYyBjb3NpbmVcblxuICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7IC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuXG4gIGlmIChjb3NvbSA8IDAuMCkge1xuICAgIGNvc29tID0gLWNvc29tO1xuICAgIGJ4ID0gLWJ4O1xuICAgIGJ5ID0gLWJ5O1xuICAgIGJ6ID0gLWJ6O1xuICAgIGJ3ID0gLWJ3O1xuICB9IC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcblxuXG4gIGlmICgxLjAgLSBjb3NvbSA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgc2lub20gPSBNYXRoLnNpbihvbWVnYSk7XG4gICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbm9tO1xuICB9IGVsc2Uge1xuICAgIC8vIFwiZnJvbVwiIGFuZCBcInRvXCIgcXVhdGVybmlvbnMgYXJlIHZlcnkgY2xvc2VcbiAgICAvLyAgLi4uIHNvIHdlIGNhbiBkbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICBzY2FsZTEgPSB0O1xuICB9IC8vIGNhbGN1bGF0ZSBmaW5hbCB2YWx1ZXNcblxuXG4gIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gIG91dFsxXSA9IHNjYWxlMCAqIGF5ICsgc2NhbGUxICogYnk7XG4gIG91dFsyXSA9IHNjYWxlMCAqIGF6ICsgc2NhbGUxICogYno7XG4gIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHVuaXQgcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQpIHtcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgaHR0cDovL3BsYW5uaW5nLmNzLnVpdWMuZWR1L25vZGUxOTguaHRtbFxuICAvLyBUT0RPOiBDYWxsaW5nIHJhbmRvbSAzIHRpbWVzIGlzIHByb2JhYmx5IG5vdCB0aGUgZmFzdGVzdCBzb2x1dGlvblxuICB2YXIgdTEgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHUyID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciB1MyA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgc3FydDFNaW51c1UxID0gTWF0aC5zcXJ0KDEgLSB1MSk7XG4gIHZhciBzcXJ0VTEgPSBNYXRoLnNxcnQodTEpO1xuICBvdXRbMF0gPSBzcXJ0MU1pbnVzVTEgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogdTIpO1xuICBvdXRbMV0gPSBzcXJ0MU1pbnVzVTEgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogdTIpO1xuICBvdXRbMl0gPSBzcXJ0VTEgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogdTMpO1xuICBvdXRbM10gPSBzcXJ0VTEgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogdTMpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGludmVyc2Ugb2YgYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM107XG4gIHZhciBkb3QgPSBhMCAqIGEwICsgYTEgKiBhMSArIGEyICogYTIgKyBhMyAqIGEzO1xuICB2YXIgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDsgLy8gVE9ETzogV291bGQgYmUgZmFzdGVyIHRvIHJldHVybiBbMCwwLDAsMF0gaW1tZWRpYXRlbHkgaWYgZG90ID09IDBcblxuICBvdXRbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gIG91dFsxXSA9IC1hMSAqIGludkRvdDtcbiAgb3V0WzJdID0gLWEyICogaW52RG90O1xuICBvdXRbM10gPSBhMyAqIGludkRvdDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0XHJcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBjb25qdWdhdGUgb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmp1Z2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxyXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gbSByb3RhdGlvbiBtYXRyaXhcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MyhvdXQsIG0pIHtcbiAgLy8gQWxnb3JpdGhtIGluIEtlbiBTaG9lbWFrZSdzIGFydGljbGUgaW4gMTk4NyBTSUdHUkFQSCBjb3Vyc2Ugbm90ZXNcbiAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gIHZhciBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07XG4gIHZhciBmUm9vdDtcblxuICBpZiAoZlRyYWNlID4gMC4wKSB7XG4gICAgLy8gfHd8ID4gMS8yLCBtYXkgYXMgd2VsbCBjaG9vc2UgdyA+IDEvMlxuICAgIGZSb290ID0gTWF0aC5zcXJ0KGZUcmFjZSArIDEuMCk7IC8vIDJ3XG5cbiAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290OyAvLyAxLyg0dylcblxuICAgIG91dFswXSA9IChtWzVdIC0gbVs3XSkgKiBmUm9vdDtcbiAgICBvdXRbMV0gPSAobVs2XSAtIG1bMl0pICogZlJvb3Q7XG4gICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290O1xuICB9IGVsc2Uge1xuICAgIC8vIHx3fCA8PSAxLzJcbiAgICB2YXIgaSA9IDA7XG4gICAgaWYgKG1bNF0gPiBtWzBdKSBpID0gMTtcbiAgICBpZiAobVs4XSA+IG1baSAqIDMgKyBpXSkgaSA9IDI7XG4gICAgdmFyIGogPSAoaSArIDEpICUgMztcbiAgICB2YXIgayA9IChpICsgMikgJSAzO1xuICAgIGZSb290ID0gTWF0aC5zcXJ0KG1baSAqIDMgKyBpXSAtIG1baiAqIDMgKyBqXSAtIG1bayAqIDMgKyBrXSArIDEuMCk7XG4gICAgb3V0W2ldID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUgLyBmUm9vdDtcbiAgICBvdXRbM10gPSAobVtqICogMyArIGtdIC0gbVtrICogMyArIGpdKSAqIGZSb290O1xuICAgIG91dFtqXSA9IChtW2ogKiAzICsgaV0gKyBtW2kgKiAzICsgal0pICogZlJvb3Q7XG4gICAgb3V0W2tdID0gKG1bayAqIDMgKyBpXSArIG1baSAqIDMgKyBrXSkgKiBmUm9vdDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gZXVsZXIgYW5nbGUgeCwgeSwgei5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7eH0gQW5nbGUgdG8gcm90YXRlIGFyb3VuZCBYIGF4aXMgaW4gZGVncmVlcy5cclxuICogQHBhcmFtIHt5fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFkgYXhpcyBpbiBkZWdyZWVzLlxyXG4gKiBAcGFyYW0ge3p9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWiBheGlzIGluIGRlZ3JlZXMuXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV1bGVyKG91dCwgeCwgeSwgeikge1xuICB2YXIgaGFsZlRvUmFkID0gMC41ICogTWF0aC5QSSAvIDE4MC4wO1xuICB4ICo9IGhhbGZUb1JhZDtcbiAgeSAqPSBoYWxmVG9SYWQ7XG4gIHogKj0gaGFsZlRvUmFkO1xuICB2YXIgc3ggPSBNYXRoLnNpbih4KTtcbiAgdmFyIGN4ID0gTWF0aC5jb3MoeCk7XG4gIHZhciBzeSA9IE1hdGguc2luKHkpO1xuICB2YXIgY3kgPSBNYXRoLmNvcyh5KTtcbiAgdmFyIHN6ID0gTWF0aC5zaW4oeik7XG4gIHZhciBjeiA9IE1hdGguY29zKHopO1xuICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgb3V0WzJdID0gY3ggKiBjeSAqIHN6IC0gc3ggKiBzeSAqIGN6O1xuICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHF1YXRlbmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwicXVhdChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gY2xvbmVcclxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGNsb25lID0gdmVjNC5jbG9uZTtcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBzb3VyY2UgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBjb3B5ID0gdmVjNC5jb3B5O1xuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHF1YXQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc2V0ID0gdmVjNC5zZXQ7XG4vKipcclxuICogQWRkcyB0d28gcXVhdCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgYWRkID0gdmVjNC5hZGQ7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lm11bHRpcGx5fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcclxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzY2FsZSA9IHZlYzQuc2NhbGU7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZG90ID0gdmVjNC5kb3Q7XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlcnAgPSB2ZWM0LmxlcnA7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHF1YXRcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gbm9ybWFsaXplXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG5vcm1hbGl6ZSA9IHZlYzQubm9ybWFsaXplO1xuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgVGhlIGZpcnN0IHF1YXRlcm5pb24uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIFRoZSBzZWNvbmQgcXVhdGVybmlvbi5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgdmFyIGV4YWN0RXF1YWxzID0gdmVjNC5leGFjdEVxdWFscztcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBxdWF0ZXJuaW9ucyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCB2YXIgZXF1YWxzID0gdmVjNC5lcXVhbHM7XG4vKipcclxuICogU2V0cyBhIHF1YXRlcm5pb24gdG8gcmVwcmVzZW50IHRoZSBzaG9ydGVzdCByb3RhdGlvbiBmcm9tIG9uZVxyXG4gKiB2ZWN0b3IgdG8gYW5vdGhlci5cclxuICpcclxuICogQm90aCB2ZWN0b3JzIGFyZSBhc3N1bWVkIHRvIGJlIHVuaXQgbGVuZ3RoLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBpbml0aWFsIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgZGVzdGluYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCB2YXIgcm90YXRpb25UbyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRtcHZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xuICB2YXIgeFVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDEsIDAsIDApO1xuICB2YXIgeVVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYikge1xuICAgIHZhciBkb3QgPSB2ZWMzLmRvdChhLCBiKTtcblxuICAgIGlmIChkb3QgPCAtMC45OTk5OTkpIHtcbiAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgeFVuaXRWZWMzLCBhKTtcbiAgICAgIGlmICh2ZWMzLmxlbih0bXB2ZWMzKSA8IDAuMDAwMDAxKSB2ZWMzLmNyb3NzKHRtcHZlYzMsIHlVbml0VmVjMywgYSk7XG4gICAgICB2ZWMzLm5vcm1hbGl6ZSh0bXB2ZWMzLCB0bXB2ZWMzKTtcbiAgICAgIHNldEF4aXNBbmdsZShvdXQsIHRtcHZlYzMsIE1hdGguUEkpO1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9IGVsc2UgaWYgKGRvdCA+IDAuOTk5OTk5KSB7XG4gICAgICBvdXRbMF0gPSAwO1xuICAgICAgb3V0WzFdID0gMDtcbiAgICAgIG91dFsyXSA9IDA7XG4gICAgICBvdXRbM10gPSAxO1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCBhLCBiKTtcbiAgICAgIG91dFswXSA9IHRtcHZlYzNbMF07XG4gICAgICBvdXRbMV0gPSB0bXB2ZWMzWzFdO1xuICAgICAgb3V0WzJdID0gdG1wdmVjM1syXTtcbiAgICAgIG91dFszXSA9IDEgKyBkb3Q7XG4gICAgICByZXR1cm4gbm9ybWFsaXplKG91dCwgb3V0KTtcbiAgICB9XG4gIH07XG59KCk7XG4vKipcclxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYyB0aGUgdGhpcmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxbGVycCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlbXAxID0gY3JlYXRlKCk7XG4gIHZhciB0ZW1wMiA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICAgIHNsZXJwKHRlbXAxLCBhLCBkLCB0KTtcbiAgICBzbGVycCh0ZW1wMiwgYiwgYywgdCk7XG4gICAgc2xlcnAob3V0LCB0ZW1wMSwgdGVtcDIsIDIgKiB0ICogKDEgLSB0KSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcbn0oKTtcbi8qKlxyXG4gKiBTZXRzIHRoZSBzcGVjaWZpZWQgcXVhdGVybmlvbiB3aXRoIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlblxyXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcclxuICogcGVycGVuZGljdWxhciB0byBhbGwgb3RoZXIgc3BlY2lmaWVkIGF4ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2aWV3ICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgdmlld2luZyBkaXJlY3Rpb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCAgICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgbG9jYWwgXCJ1cFwiIGRpcmVjdGlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgdmFyIHNldEF4ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXRyID0gbWF0My5jcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIHZpZXcsIHJpZ2h0LCB1cCkge1xuICAgIG1hdHJbMF0gPSByaWdodFswXTtcbiAgICBtYXRyWzNdID0gcmlnaHRbMV07XG4gICAgbWF0cls2XSA9IHJpZ2h0WzJdO1xuICAgIG1hdHJbMV0gPSB1cFswXTtcbiAgICBtYXRyWzRdID0gdXBbMV07XG4gICAgbWF0cls3XSA9IHVwWzJdO1xuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuICAgIHJldHVybiBub3JtYWxpemUob3V0LCBmcm9tTWF0MyhvdXQsIG1hdHIpKTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAyIERpbWVuc2lvbmFsIFZlY3RvclxyXG4gKiBAbW9kdWxlIHZlYzJcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMyXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMF0gPSAwO1xuICAgIG91dFsxXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzIgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjZWlsXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjMiBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMyJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICB5ID0gYlsxXSAtIGFbMV07XG4gIHJldHVybiB4ICogeCArIHkgKiB5O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG59XG4vKipcclxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGludmVydFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBOb3JtYWxpemUgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5O1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcbn1cbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMidzXHJcbiAqIE5vdGUgdGhhdCB0aGUgY3Jvc3MgcHJvZHVjdCBtdXN0IGJ5IGRlZmluaXRpb24gcHJvZHVjZSBhIDNEIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICB2YXIgeiA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG4gIG91dFswXSA9IG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7XG4gIHZhciByID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgKiBNYXRoLlBJO1xuICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyZChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQzXHJcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNF0gKiB5ICsgbVs3XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQ0XHJcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzAnXHJcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZSBhIDJEIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzJcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgVGhlIHZlYzIgcG9pbnQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIGIsIHJhZCkge1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHZhciBwMCA9IGFbMF0gLSBiWzBdLFxuICAgICAgcDEgPSBhWzFdIC0gYlsxXSxcbiAgICAgIHNpbkMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgY29zQyA9IE1hdGguY29zKHJhZCk7IC8vcGVyZm9ybSByb3RhdGlvbiBhbmQgdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cblxuICBvdXRbMF0gPSBwMCAqIGNvc0MgLSBwMSAqIHNpbkMgKyBiWzBdO1xuICBvdXRbMV0gPSBwMCAqIHNpbkMgKyBwMSAqIGNvc0MgKyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gMkQgdmVjdG9yc1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHZhciB4MSA9IGFbMF0sXG4gICAgICB5MSA9IGFbMV0sXG4gICAgICB4MiA9IGJbMF0sXG4gICAgICB5MiA9IGJbMV0sXG4gICAgICAvLyBtYWcgaXMgdGhlIHByb2R1Y3Qgb2YgdGhlIG1hZ25pdHVkZXMgb2YgYSBhbmQgYlxuICBtYWcgPSBNYXRoLnNxcnQoeDEgKiB4MSArIHkxICogeTEpICogTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKSxcbiAgICAgIC8vIG1hZyAmJi4uIHNob3J0IGNpcmN1aXRzIGlmIG1hZyA9PSAwXG4gIGNvc2luZSA9IG1hZyAmJiAoeDEgKiB4MiArIHkxICogeTIpIC8gbWFnOyAvLyBNYXRoLm1pbihNYXRoLm1heChjb3NpbmUsIC0xKSwgMSkgY2xhbXBzIHRoZSBjb3NpbmUgYmV0d2VlbiAtMSBhbmQgMVxuXG4gIHJldHVybiBNYXRoLmFjb3MoTWF0aC5taW4oTWF0aC5tYXgoY29zaW5lLCAtMSksIDEpKTtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyIHRvIHplcm9cclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzIoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiKVwiO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmxlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuZGl2aWRlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGl2ID0gZGl2aWRlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpc3QgPSBkaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZERpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZExlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzIuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbmltcG9ydCB7IHZlYzMgfSBmcm9tICcuLi90aGlyZHBhcnR5L2dsLW1hdHJpeC9pbmRleCc7XG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEdLVXRpbHMge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbXB1dGUgYXhpcyBhbmdsZXMgZm9yIHBvc2l0b25cbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIHggcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHogLSB6IHBvc2l0aW9uXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgcmFkaWFuc0ZvclBvc2l0aW9uKHgsIHopIHtcbiAgICBpZiAoeiA+IDApIHtcbiAgICAgIGlmICh4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbih4IC8geik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAyICogTWF0aC5QSSArIE1hdGguYXRhbih4IC8geik7XG4gICAgfVxuICAgIGlmICh6IDwgMCkge1xuICAgICAgcmV0dXJuIE1hdGguUEkgKyBNYXRoLmF0YW4oeCAvIHopO1xuICAgIH1cblxuICAgIGlmICh4ID4gMCkge1xuICAgICAgcmV0dXJuIE1hdGguUEkgLyAyLjA7XG4gICAgfVxuXG4gICAgcmV0dXJuICgzICogTWF0aC5QSSkgLyAyLjA7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnQgd29ybGRzcGFjZSBbeCx5LHpdIHRvIGxhdCBsb25cbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge0FycmF5fSBwb3MgLSB3b3JsZHNwYWNlIGNvb3JkaW5hdGVzIFt4LHksel1cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBsYXRMb25Gcm9tV29ybGQocG9zKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gdmVjMy5jcmVhdGUoKTtcbiAgICB2ZWMzLm5vcm1hbGl6ZShub3JtYWwsIHBvcyk7XG5cbiAgICBjb25zdCBsYXRSYWQgPSBNYXRoLmFzaW4obm9ybWFsWzFdKTtcbiAgICBjb25zdCBsb25SYWQgPSB0aGlzLnJhZGlhbnNGb3JQb3NpdGlvbihub3JtYWxbMF0sIG5vcm1hbFsyXSk7XG5cbiAgICBjb25zdCBsYXREZWcgPSAobGF0UmFkICogMTgwLjApIC8gTWF0aC5QSTtcbiAgICBsZXQgbG9uRGVnID0gKGxvblJhZCAqIDE4MC4wKSAvIE1hdGguUEk7XG4gICAgd2hpbGUgKGxvbkRlZyA+IDE4MC4wKSB7XG4gICAgICBsb25EZWcgLT0gMzYwLjA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdDogbGF0RGVnLFxuICAgICAgbG9uOiBsb25EZWcsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29tcHV0ZXMgZ3JlYXQgY2lyY2xlIGRpc3RhbmNlIGJldHdlZW4gMiBsYXQgbG9uIGNvb3Jkc1xuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwMCAtIHtsYXQ6IH5+LCBsb246IH5+fVxuICAgKiBAcGFyYW0ge09iamVjdH0gcDEgLSB7bGF0OiB+fiwgbG9uOiB+fn1cbiAgICogQHJldHVybnNcbiAgICovXG4gIHN0YXRpYyBkaXN0YW5jZUJldHdlZW5Qb2ludHMocDAsIHAxKSB7XG4gICAgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xuXG4gICAgY29uc3QgUiA9IDYzNzE7IC8vIGttXG4gICAgY29uc3QgcGhpMSA9IGRlZ3JlZXNUb1JhZGlhbnMocDAubGF0KTsgLy8gcGhpLCBsYW1iZGEgaW4gcmFkaWFuc1xuICAgIGNvbnN0IHBoaTIgPSBkZWdyZWVzVG9SYWRpYW5zKHAxLmxhdCk7XG4gICAgY29uc3QgZGVsdGFQaGkgPSBkZWdyZWVzVG9SYWRpYW5zKChwMS5sYXQgLSBwMC5sYXQpKTtcbiAgICBjb25zdCBkZWx0YUxhbWJkYSA9IGRlZ3JlZXNUb1JhZGlhbnMoKHAxLmxvbiAtIHAwLmxvbikpO1xuXG4gICAgY29uc3QgYSA9IE1hdGguc2luKGRlbHRhUGhpIC8gMikgKiBNYXRoLnNpbihkZWx0YVBoaSAvIDIpXG4gICAgICAgICAgICAgICsgTWF0aC5jb3MocGhpMSkgKiBNYXRoLmNvcyhwaGkyKVxuICAgICAgICAgICAgICAqIE1hdGguc2luKGRlbHRhTGFtYmRhIC8gMikgKiBNYXRoLnNpbihkZWx0YUxhbWJkYSAvIDIpO1xuICAgIGNvbnN0IGMgPSAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoYSksIE1hdGguc3FydCgxIC0gYSkpO1xuXG4gICAgY29uc3QgZCA9IFIgKiBjOyAvLyBpbiBrbVxuXG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnQgbGF0IGxvbiBhbHQgdG8gd29ybGRzcGFjZVxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgLSBsYXRpdHVkZSBpbiBkZWdyZWVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb24gLSBsb25naXR1ZGUgaW4gZGVncmVlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gYWx0IC0gYWx0aXR1ZGUgZnJvbSBzdXJmYWNlIG9mIGdsb2JlIGluIGVhcnRoIHJhZGl1cyAoc3VyZmFjZSA9IDApXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyB3b3JsZEZyb21MYXRMb24obGF0LCBsb24sIGFsdCkge1xuICAgIGNvbnN0IGFsdGl0dWRlID0gYWx0IHx8IDAuMDtcblxuICAgIGNvbnN0IGxhdFJhZCA9IChsYXQgKiBNYXRoLlBJKSAvIDE4MC4wO1xuICAgIGNvbnN0IGxuZ1JhZCA9IChsb24gKiBNYXRoLlBJKSAvIDE4MC4wO1xuXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5jb3MobGF0UmFkKTtcbiAgICBjb25zdCB5ID0gTWF0aC5zaW4obGF0UmFkKTtcbiAgICBjb25zdCB4ID0gTWF0aC5zaW4obG5nUmFkKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5jb3MobG5nUmFkKSAqIHJhZGl1cztcblxuICAgIGNvbnN0IHBvcyA9IHZlYzMuZnJvbVZhbHVlcyh4LCB5LCB6KTtcblxuICAgIGNvbnN0IG5vcm0gPSB2ZWMzLmNyZWF0ZSgpO1xuICAgIHZlYzMubm9ybWFsaXplKG5vcm0sIHBvcyk7XG5cbiAgICBjb25zdCBhZGQgPSB2ZWMzLnNjYWxlKG5vcm0sIG5vcm0sIGFsdGl0dWRlKTtcblxuICAgIHZlYzMuYWRkKHBvcywgcG9zLCBhZGQpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnQgaGV4IGNvbG9yIHRvIFJHQiBhcnJheVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaCAtIENvbG9yIEhleCBDb2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9ybWFsaXplIC0gU2hvdWxkIHRoZSBvdXRwdXQgYmUgbm9ybWFsaXplZCB0byBbMCwxXVxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgaGV4VG9SR0IoaCwgbm9ybWFsaXplKSB7XG4gICAgbGV0IHIgPSAwO1xuICAgIGxldCBnID0gMDtcbiAgICBsZXQgYiA9IDA7XG5cbiAgICBjb25zdCBub3JtID0gbm9ybWFsaXplICE9PSBmYWxzZTtcblxuICAgIGlmIChoLmxlbmd0aCA9PT0gNCkge1xuICAgICAgciA9IGAweCR7aFsxXX0ke2hbMV19YDtcbiAgICAgIGcgPSBgMHgke2hbMl19JHtoWzJdfWA7XG4gICAgICBiID0gYDB4JHtoWzNdfSR7aFszXX1gO1xuICAgIH0gZWxzZSBpZiAoaC5sZW5ndGggPT09IDcpIHtcbiAgICAgIHIgPSBgMHgke2hbMV19JHtoWzJdfWA7XG4gICAgICBnID0gYDB4JHtoWzNdfSR7aFs0XX1gO1xuICAgICAgYiA9IGAweCR7aFs1XX0ke2hbNl19YDtcbiAgICB9XG5cbiAgICBpZiAobm9ybSkge1xuICAgICAgciAvPSAyNTU7XG4gICAgICBnIC89IDI1NTtcbiAgICAgIGIgLz0gMjU1O1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gcGFyc2VJbnQociwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGcsIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChiLCAxNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyLCBnLCBiXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udmVydCBoZXggKyBhbHBoYSB0byBSR0JBXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBoIC0gQ29sb3IgaGV4IGNvZGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGEgLSBBbHBoYSB2YWx1ZSBbMCwxXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vcm1hbGl6ZSAtIFNob3VsZCB0aGUgb3V0cHV0IGJlIG5vcm1hbGl6ZWQgdG8gWzAsMV1cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGhleFRvUkdCQShoLCBhLCBub3JtYWxpemUpIHtcbiAgICBjb25zdCByZ2IgPSB0aGlzLmhleFRvUkdCKGgsIG5vcm1hbGl6ZSk7XG4gICAgY29uc3QgYWxwaGEgPSAobm9ybWFsaXplICE9PSBmYWxzZSkgPyBhIDogYSAqIDI1NTtcbiAgICByZXR1cm4gW3JnYlswXSwgcmdiWzFdLCByZ2JbMl0sIGFscGhhXTtcbiAgfVxuXG4gIHN0YXRpYyBpc1N1YlNldChhLCBiKSB7XG4gICAgcmV0dXJuIGEuZXZlcnkoKGVsKSA9PiAoYi5maW5kKChlKSA9PiBlID09PSBlbCkgIT09IHVuZGVmaW5lZCkpO1xuICB9XG5cbiAgLyoqXG4gKiBBIGxpbmVhciBpbnRlcnBvbGF0b3IgZm9yIGhleGFkZWNpbWFsIGNvbG9yc1xuICogQHBhcmFtIHtTdHJpbmd9IGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBiXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50XG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyAjN0Y3RjdGXG4gKiBsZXJwQ29sb3IoJyMwMDAwMDAnLCAnI2ZmZmZmZicsIDAuNSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiAgc3RhdGljIGxlcnBDb2xvcihhLCBiLCBhbW91bnQpIHtcbiAgICBjb25zdCBhaCA9IHBhcnNlSW50KGEucmVwbGFjZSgvIy9nLCAnJyksIDE2KTtcbiAgICBjb25zdCBhciA9IGFoID4+IDE2OyBjb25zdCBhZyA9IGFoID4+IDggJiAweGZmOyBjb25zdCBhYiA9IGFoICYgMHhmZjtcbiAgICBjb25zdCBiaCA9IHBhcnNlSW50KGIucmVwbGFjZSgvIy9nLCAnJyksIDE2KTtcbiAgICBjb25zdCBiciA9IGJoID4+IDE2OyBjb25zdCBiZyA9IGJoID4+IDggJiAweGZmOyBjb25zdCBiYiA9IGJoICYgMHhmZjtcbiAgICBjb25zdCByciA9IGFyICsgYW1vdW50ICogKGJyIC0gYXIpO1xuICAgIGNvbnN0IHJnID0gYWcgKyBhbW91bnQgKiAoYmcgLSBhZyk7XG4gICAgY29uc3QgcmIgPSBhYiArIGFtb3VudCAqIChiYiAtIGFiKTtcblxuICAgIHJldHVybiBgIyR7KCgxIDw8IDI0KSArIChyciA8PCAxNikgKyAocmcgPDwgOCkgKyByYiB8IDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKX1gO1xuICB9XG59XG5cbmV4cG9ydCB7IEdLVXRpbHMgfTtcbiIsInZhciBCZXppZXIgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0LyoqXG5cdCAgQSBqYXZhc2NyaXB0IEJlemllciBjdXJ2ZSBsaWJyYXJ5IGJ5IFBvbWF4LlxuXG5cdCAgQmFzZWQgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvXG5cblx0ICBUaGlzIGNvZGUgaXMgTUlUIGxpY2Vuc2VkLlxuXHQqKi9cblx0KGZ1bmN0aW9uICgpIHtcblx0ICBcInVzZSBzdHJpY3RcIjtcblxuXHQgIC8vIG1hdGgtaW5saW5pbmcuXG5cblx0ICB2YXIgYWJzID0gTWF0aC5hYnMsXG5cdCAgICAgIG1pbiA9IE1hdGgubWluLFxuXHQgICAgICBtYXggPSBNYXRoLm1heCxcblx0ICAgICAgY29zID0gTWF0aC5jb3MsXG5cdCAgICAgIHNpbiA9IE1hdGguc2luLFxuXHQgICAgICBhY29zID0gTWF0aC5hY29zLFxuXHQgICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuXHQgICAgICBwaSA9IE1hdGguUEksXG5cblx0ICAvLyBhIHplcm8gY29vcmRpbmF0ZSwgd2hpY2ggaXMgc3VycHJpc2luZ2x5IHVzZWZ1bFxuXHQgIFpFUk8gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcblxuXHQgIC8vIHF1aXRlIG5lZWRlZFxuXHQgIHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0ICAvLyBvbmx5IHVzZWQgZm9yIG91dGxpbmVzIGF0bS5cblx0ICB2YXIgUG9seUJlemllciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cblx0ICAvKipcblx0ICAgKiBCZXppZXIgY3VydmUgY29uc3RydWN0b3IuIFRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRocmVlIHRoaW5nczpcblx0ICAgKlxuXHQgICAqIDEuIGFycmF5LzQgb2Yge3g6Li4uLCB5Oi4uLiwgejouLi59LCB6IG9wdGlvbmFsXG5cdCAgICogMi4gbnVtZXJpY2FsIGFycmF5Lzggb3JkZXJlZCB4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NFxuXHQgICAqIDMuIG51bWVyaWNhbCBhcnJheS8xMiBvcmRlcmVkIHgxLHkxLHoxLHgyLHkyLHoyLHgzLHkzLHozLHg0LHk0LHo0XG5cdCAgICpcblx0ICAgKi9cblx0ICB2YXIgQmV6aWVyID0gZnVuY3Rpb24gQmV6aWVyKGNvb3Jkcykge1xuXHQgICAgdmFyIGFyZ3MgPSBjb29yZHMgJiYgY29vcmRzLmZvckVhY2ggPyBjb29yZHMgOiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdCAgICB2YXIgY29vcmRsZW4gPSBmYWxzZTtcblx0ICAgIGlmIChfdHlwZW9mKGFyZ3NbMF0pID09PSBcIm9iamVjdFwiKSB7XG5cdCAgICAgIGNvb3JkbGVuID0gYXJncy5sZW5ndGg7XG5cdCAgICAgIHZhciBuZXdhcmdzID0gW107XG5cdCAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcblx0ICAgICAgICBbXCJ4XCIsIFwieVwiLCBcInpcIl0uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuXHQgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludFtkXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICBuZXdhcmdzLnB1c2gocG9pbnRbZF0pO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9KTtcblx0ICAgICAgYXJncyA9IG5ld2FyZ3M7XG5cdCAgICB9XG5cdCAgICB2YXIgaGlnaGVyID0gZmFsc2U7XG5cdCAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG5cdCAgICBpZiAoY29vcmRsZW4pIHtcblx0ICAgICAgaWYgKGNvb3JkbGVuID4gNCkge1xuXHQgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG5cdCAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaGlnaGVyID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKGxlbiAhPT0gNiAmJiBsZW4gIT09IDggJiYgbGVuICE9PSA5ICYmIGxlbiAhPT0gMTIpIHtcblx0ICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXNcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICB2YXIgXzNkID0gIWhpZ2hlciAmJiAobGVuID09PSA5IHx8IGxlbiA9PT0gMTIpIHx8IGNvb3JkcyAmJiBjb29yZHNbMF0gJiYgdHlwZW9mIGNvb3Jkc1swXS56ICE9PSBcInVuZGVmaW5lZFwiO1xuXHQgICAgdGhpcy5fM2QgPSBfM2Q7XG5cdCAgICB2YXIgcG9pbnRzID0gW107XG5cdCAgICBmb3IgKHZhciBpZHggPSAwLCBzdGVwID0gXzNkID8gMyA6IDI7IGlkeCA8IGxlbjsgaWR4ICs9IHN0ZXApIHtcblx0ICAgICAgdmFyIHBvaW50ID0ge1xuXHQgICAgICAgIHg6IGFyZ3NbaWR4XSxcblx0ICAgICAgICB5OiBhcmdzW2lkeCArIDFdXG5cdCAgICAgIH07XG5cdCAgICAgIGlmIChfM2QpIHtcblx0ICAgICAgICBwb2ludC56ID0gYXJnc1tpZHggKyAyXTtcblx0ICAgICAgfVxuXHQgICAgICBwb2ludHMucHVzaChwb2ludCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLm9yZGVyID0gcG9pbnRzLmxlbmd0aCAtIDE7XG5cdCAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblx0ICAgIHZhciBkaW1zID0gW1wieFwiLCBcInlcIl07XG5cdCAgICBpZiAoXzNkKSBkaW1zLnB1c2goXCJ6XCIpO1xuXHQgICAgdGhpcy5kaW1zID0gZGltcztcblx0ICAgIHRoaXMuZGltbGVuID0gZGltcy5sZW5ndGg7XG5cblx0ICAgIChmdW5jdGlvbiAoY3VydmUpIHtcblx0ICAgICAgdmFyIG9yZGVyID0gY3VydmUub3JkZXI7XG5cdCAgICAgIHZhciBwb2ludHMgPSBjdXJ2ZS5wb2ludHM7XG5cdCAgICAgIHZhciBhID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7IHAxOiBwb2ludHNbMF0sIHAyOiBwb2ludHNbb3JkZXJdIH0pO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAoYWJzKGFbaV0ueSkgPiAwLjAwMDEpIHtcblx0ICAgICAgICAgIGN1cnZlLl9saW5lYXIgPSBmYWxzZTtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgY3VydmUuX2xpbmVhciA9IHRydWU7XG5cdCAgICB9KSh0aGlzKTtcblxuXHQgICAgdGhpcy5fdDEgPSAwO1xuXHQgICAgdGhpcy5fdDIgPSAxO1xuXHQgICAgdGhpcy51cGRhdGUoKTtcblx0ICB9O1xuXG5cdCAgdmFyIHN2Z1RvQmV6aWVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0ICAvKipcblx0ICAgKiB0dXJuIGFuIHN2ZyA8cGF0aD4gZCBhdHRyaWJ1dGUgaW50byBhIHNlcXVlbmNlIG9mIEJlemllciBzZWdtZW50cy5cblx0ICAgKi9cblx0ICBCZXppZXIuU1ZHdG9CZXppZXJzID0gZnVuY3Rpb24gKGQpIHtcblx0ICAgIHJldHVybiBzdmdUb0JlemllcnMoQmV6aWVyLCBkKTtcblx0ICB9O1xuXG5cdCAgZnVuY3Rpb24gZ2V0QUJDKG4sIFMsIEIsIEUsIHQpIHtcblx0ICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICB0ID0gMC41O1xuXHQgICAgfVxuXHQgICAgdmFyIHUgPSB1dGlscy5wcm9qZWN0aW9ucmF0aW8odCwgbiksXG5cdCAgICAgICAgdW0gPSAxIC0gdSxcblx0ICAgICAgICBDID0ge1xuXHQgICAgICB4OiB1ICogUy54ICsgdW0gKiBFLngsXG5cdCAgICAgIHk6IHUgKiBTLnkgKyB1bSAqIEUueVxuXHQgICAgfSxcblx0ICAgICAgICBzID0gdXRpbHMuYWJjcmF0aW8odCwgbiksXG5cdCAgICAgICAgQSA9IHtcblx0ICAgICAgeDogQi54ICsgKEIueCAtIEMueCkgLyBzLFxuXHQgICAgICB5OiBCLnkgKyAoQi55IC0gQy55KSAvIHNcblx0ICAgIH07XG5cdCAgICByZXR1cm4geyBBOiBBLCBCOiBCLCBDOiBDIH07XG5cdCAgfVxuXG5cdCAgQmV6aWVyLnF1YWRyYXRpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbiAocDEsIHAyLCBwMywgdCkge1xuXHQgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgIHQgPSAwLjU7XG5cdCAgICB9XG5cdCAgICAvLyBzaG9ydGN1dHMsIGFsdGhvdWdoIHRoZXkncmUgcmVhbGx5IGR1bWJcblx0ICAgIGlmICh0ID09PSAwKSB7XG5cdCAgICAgIHJldHVybiBuZXcgQmV6aWVyKHAyLCBwMiwgcDMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHQgPT09IDEpIHtcblx0ICAgICAgcmV0dXJuIG5ldyBCZXppZXIocDEsIHAyLCBwMik7XG5cdCAgICB9XG5cdCAgICAvLyByZWFsIGZpdHRpbmcuXG5cdCAgICB2YXIgYWJjID0gZ2V0QUJDKDIsIHAxLCBwMiwgcDMsIHQpO1xuXHQgICAgcmV0dXJuIG5ldyBCZXppZXIocDEsIGFiYy5BLCBwMyk7XG5cdCAgfTtcblxuXHQgIEJlemllci5jdWJpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbiAoUywgQiwgRSwgdCwgZDEpIHtcblx0ICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICB0ID0gMC41O1xuXHQgICAgfVxuXHQgICAgdmFyIGFiYyA9IGdldEFCQygzLCBTLCBCLCBFLCB0KTtcblx0ICAgIGlmICh0eXBlb2YgZDEgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgZDEgPSB1dGlscy5kaXN0KEIsIGFiYy5DKTtcblx0ICAgIH1cblx0ICAgIHZhciBkMiA9IGQxICogKDEgLSB0KSAvIHQ7XG5cblx0ICAgIHZhciBzZWxlbiA9IHV0aWxzLmRpc3QoUywgRSksXG5cdCAgICAgICAgbHggPSAoRS54IC0gUy54KSAvIHNlbGVuLFxuXHQgICAgICAgIGx5ID0gKEUueSAtIFMueSkgLyBzZWxlbixcblx0ICAgICAgICBieDEgPSBkMSAqIGx4LFxuXHQgICAgICAgIGJ5MSA9IGQxICogbHksXG5cdCAgICAgICAgYngyID0gZDIgKiBseCxcblx0ICAgICAgICBieTIgPSBkMiAqIGx5O1xuXHQgICAgLy8gZGVyaXZhdGlvbiBvZiBuZXcgaHVsbCBjb29yZGluYXRlc1xuXHQgICAgdmFyIGUxID0geyB4OiBCLnggLSBieDEsIHk6IEIueSAtIGJ5MSB9LFxuXHQgICAgICAgIGUyID0geyB4OiBCLnggKyBieDIsIHk6IEIueSArIGJ5MiB9LFxuXHQgICAgICAgIEEgPSBhYmMuQSxcblx0ICAgICAgICB2MSA9IHsgeDogQS54ICsgKGUxLnggLSBBLngpIC8gKDEgLSB0KSwgeTogQS55ICsgKGUxLnkgLSBBLnkpIC8gKDEgLSB0KSB9LFxuXHQgICAgICAgIHYyID0geyB4OiBBLnggKyAoZTIueCAtIEEueCkgLyB0LCB5OiBBLnkgKyAoZTIueSAtIEEueSkgLyB0IH0sXG5cdCAgICAgICAgbmMxID0geyB4OiBTLnggKyAodjEueCAtIFMueCkgLyB0LCB5OiBTLnkgKyAodjEueSAtIFMueSkgLyB0IH0sXG5cdCAgICAgICAgbmMyID0ge1xuXHQgICAgICB4OiBFLnggKyAodjIueCAtIEUueCkgLyAoMSAtIHQpLFxuXHQgICAgICB5OiBFLnkgKyAodjIueSAtIEUueSkgLyAoMSAtIHQpXG5cdCAgICB9O1xuXHQgICAgLy8gLi4uZG9uZVxuXHQgICAgcmV0dXJuIG5ldyBCZXppZXIoUywgbmMxLCBuYzIsIEUpO1xuXHQgIH07XG5cblx0ICB2YXIgZ2V0VXRpbHMgPSBmdW5jdGlvbiBnZXRVdGlscygpIHtcblx0ICAgIHJldHVybiB1dGlscztcblx0ICB9O1xuXG5cdCAgQmV6aWVyLmdldFV0aWxzID0gZ2V0VXRpbHM7XG5cblx0ICBCZXppZXIuUG9seUJlemllciA9IFBvbHlCZXppZXI7XG5cblx0ICBCZXppZXIucHJvdG90eXBlID0ge1xuXHQgICAgZ2V0VXRpbHM6IGdldFV0aWxzLFxuXHQgICAgdmFsdWVPZjogZnVuY3Rpb24gdmFsdWVPZigpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG5cdCAgICB9LFxuXHQgICAgdG9TVkc6IGZ1bmN0aW9uIHRvU1ZHKHJlbGF0aXZlKSB7XG5cdCAgICAgIGlmICh0aGlzLl8zZCkgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuXHQgICAgICAgICAgeCA9IHBbMF0ueCxcblx0ICAgICAgICAgIHkgPSBwWzBdLnksXG5cdCAgICAgICAgICBzID0gW1wiTVwiLCB4LCB5LCB0aGlzLm9yZGVyID09PSAyID8gXCJRXCIgOiBcIkNcIl07XG5cdCAgICAgIGZvciAodmFyIGkgPSAxLCBsYXN0ID0gcC5sZW5ndGg7IGkgPCBsYXN0OyBpKyspIHtcblx0ICAgICAgICBzLnB1c2gocFtpXS54KTtcblx0ICAgICAgICBzLnB1c2gocFtpXS55KTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcy5qb2luKFwiIFwiKTtcblx0ICAgIH0sXG5cdCAgICBzZXRSYXRpb3M6IGZ1bmN0aW9uIHNldFJhdGlvcyhyYXRpb3MpIHtcblx0ICAgICAgaWYgKHJhdGlvcy5sZW5ndGggIT09IHRoaXMucG9pbnRzLmxlbmd0aCkge1xuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcihcImluY29ycmVjdCBudW1iZXIgb2YgcmF0aW8gdmFsdWVzXCIpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMucmF0aW9zID0gcmF0aW9zO1xuXHQgICAgICB0aGlzLl9sdXQgPSBbXTsgLy8gIGludmFsaWRhdGUgYW55IHByZWNvbXB1dGVkIExVVFxuXHQgICAgfSxcblx0ICAgIHZlcmlmeTogZnVuY3Rpb24gdmVyaWZ5KCkge1xuXHQgICAgICB2YXIgcHJpbnQgPSB0aGlzLmNvb3JkRGlnZXN0KCk7XG5cdCAgICAgIGlmIChwcmludCAhPT0gdGhpcy5fcHJpbnQpIHtcblx0ICAgICAgICB0aGlzLl9wcmludCA9IHByaW50O1xuXHQgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBjb29yZERpZ2VzdDogZnVuY3Rpb24gY29vcmREaWdlc3QoKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnBvaW50cy5tYXAoZnVuY3Rpb24gKGMsIHBvcykge1xuXHQgICAgICAgIHJldHVybiAnJyArIHBvcyArIGMueCArIGMueSArIChjLnogPyBjLnogOiAwKTtcblx0ICAgICAgfSkuam9pbignJyk7XG5cdCAgICB9LFxuXHQgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUobmV3cHJpbnQpIHtcblx0ICAgICAgLy8gaW52YWxpZGF0ZSBhbnkgcHJlY29tcHV0ZWQgTFVUXG5cdCAgICAgIHRoaXMuX2x1dCA9IFtdO1xuXHQgICAgICB0aGlzLmRwb2ludHMgPSB1dGlscy5kZXJpdmUodGhpcy5wb2ludHMsIHRoaXMuXzNkKTtcblx0ICAgICAgdGhpcy5jb21wdXRlZGlyZWN0aW9uKCk7XG5cdCAgICB9LFxuXHQgICAgY29tcHV0ZWRpcmVjdGlvbjogZnVuY3Rpb24gY29tcHV0ZWRpcmVjdGlvbigpIHtcblx0ICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzO1xuXHQgICAgICB2YXIgYW5nbGUgPSB1dGlscy5hbmdsZShwb2ludHNbMF0sIHBvaW50c1t0aGlzLm9yZGVyXSwgcG9pbnRzWzFdKTtcblx0ICAgICAgdGhpcy5jbG9ja3dpc2UgPSBhbmdsZSA+IDA7XG5cdCAgICB9LFxuXHQgICAgbGVuZ3RoOiBmdW5jdGlvbiBsZW5ndGgoKSB7XG5cdCAgICAgIHJldHVybiB1dGlscy5sZW5ndGgodGhpcy5kZXJpdmF0aXZlLmJpbmQodGhpcykpO1xuXHQgICAgfSxcblx0ICAgIF9sdXQ6IFtdLFxuXHQgICAgZ2V0TFVUOiBmdW5jdGlvbiBnZXRMVVQoc3RlcHMpIHtcblx0ICAgICAgdGhpcy52ZXJpZnkoKTtcblx0ICAgICAgc3RlcHMgPSBzdGVwcyB8fCAxMDA7XG5cdCAgICAgIGlmICh0aGlzLl9sdXQubGVuZ3RoID09PSBzdGVwcykge1xuXHQgICAgICAgIHJldHVybiB0aGlzLl9sdXQ7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5fbHV0ID0gW107XG5cdCAgICAgIC8vIFdlIHdhbnQgYSByYW5nZSBmcm9tIDAgdG8gMSBpbmNsdXNpdmUsIHNvXG5cdCAgICAgIC8vIHdlIGRlY3JlbWVudCBhbmQgdGhlbiB1c2UgPD0gcmF0aGVyIHRoYW4gPDpcblx0ICAgICAgc3RlcHMtLTtcblx0ICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPD0gc3RlcHM7IHQrKykge1xuXHQgICAgICAgIHRoaXMuX2x1dC5wdXNoKHRoaXMuY29tcHV0ZSh0IC8gc3RlcHMpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gdGhpcy5fbHV0O1xuXHQgICAgfSxcblx0ICAgIG9uOiBmdW5jdGlvbiBvbihwb2ludCwgZXJyb3IpIHtcblx0ICAgICAgZXJyb3IgPSBlcnJvciB8fCA1O1xuXHQgICAgICB2YXIgbHV0ID0gdGhpcy5nZXRMVVQoKSxcblx0ICAgICAgICAgIGhpdHMgPSBbXSxcblx0ICAgICAgICAgIGMsXG5cdCAgICAgICAgICB0ID0gMDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsdXQubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBjID0gbHV0W2ldO1xuXHQgICAgICAgIGlmICh1dGlscy5kaXN0KGMsIHBvaW50KSA8IGVycm9yKSB7XG5cdCAgICAgICAgICBoaXRzLnB1c2goYyk7XG5cdCAgICAgICAgICB0ICs9IGkgLyBsdXQubGVuZ3RoO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBpZiAoIWhpdHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdCAgICAgIHJldHVybiB0IC89IGhpdHMubGVuZ3RoO1xuXHQgICAgfSxcblx0ICAgIHByb2plY3Q6IGZ1bmN0aW9uIHByb2plY3QocG9pbnQpIHtcblx0ICAgICAgLy8gc3RlcCAxOiBjb2Fyc2UgY2hlY2tcblx0ICAgICAgdmFyIExVVCA9IHRoaXMuZ2V0TFVUKCksXG5cdCAgICAgICAgICBsID0gTFVULmxlbmd0aCAtIDEsXG5cdCAgICAgICAgICBjbG9zZXN0ID0gdXRpbHMuY2xvc2VzdChMVVQsIHBvaW50KSxcblx0ICAgICAgICAgIG1kaXN0ID0gY2xvc2VzdC5tZGlzdCxcblx0ICAgICAgICAgIG1wb3MgPSBjbG9zZXN0Lm1wb3M7XG5cblx0ICAgICAgLy8gc3RlcCAyOiBmaW5lIGNoZWNrXG5cdCAgICAgIHZhciBmdCxcblx0ICAgICAgICAgIHQsXG5cdCAgICAgICAgICBwLFxuXHQgICAgICAgICAgZCxcblx0ICAgICAgICAgIHQxID0gKG1wb3MgLSAxKSAvIGwsXG5cdCAgICAgICAgICB0MiA9IChtcG9zICsgMSkgLyBsLFxuXHQgICAgICAgICAgc3RlcCA9IDAuMSAvIGw7XG5cdCAgICAgIG1kaXN0ICs9IDE7XG5cdCAgICAgIGZvciAodCA9IHQxLCBmdCA9IHQ7IHQgPCB0MiArIHN0ZXA7IHQgKz0gc3RlcCkge1xuXHQgICAgICAgIHAgPSB0aGlzLmNvbXB1dGUodCk7XG5cdCAgICAgICAgZCA9IHV0aWxzLmRpc3QocG9pbnQsIHApO1xuXHQgICAgICAgIGlmIChkIDwgbWRpc3QpIHtcblx0ICAgICAgICAgIG1kaXN0ID0gZDtcblx0ICAgICAgICAgIGZ0ID0gdDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcCA9IHRoaXMuY29tcHV0ZShmdCk7XG5cdCAgICAgIHAudCA9IGZ0O1xuXHQgICAgICBwLmQgPSBtZGlzdDtcblx0ICAgICAgcmV0dXJuIHA7XG5cdCAgICB9LFxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQodCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5jb21wdXRlKHQpO1xuXHQgICAgfSxcblx0ICAgIHBvaW50OiBmdW5jdGlvbiBwb2ludChpZHgpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2lkeF07XG5cdCAgICB9LFxuXHQgICAgY29tcHV0ZTogZnVuY3Rpb24gY29tcHV0ZSh0KSB7XG5cdCAgICAgIGlmICh0aGlzLnJhdGlvcykgcmV0dXJuIHV0aWxzLmNvbXB1dGVXaXRoUmF0aW9zKHQsIHRoaXMucG9pbnRzLCB0aGlzLnJhdGlvcywgdGhpcy5fM2QpO1xuXHQgICAgICByZXR1cm4gdXRpbHMuY29tcHV0ZSh0LCB0aGlzLnBvaW50cywgdGhpcy5fM2QsIHRoaXMucmF0aW9zKTtcblx0ICAgIH0sXG5cdCAgICByYWlzZTogZnVuY3Rpb24gcmFpc2UoKSB7XG5cdCAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsXG5cdCAgICAgICAgICBucCA9IFtwWzBdXSxcblx0ICAgICAgICAgIGksXG5cdCAgICAgICAgICBrID0gcC5sZW5ndGgsXG5cdCAgICAgICAgICBwaSxcblx0ICAgICAgICAgIHBpbTtcblx0ICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBrOyBpKyspIHtcblx0ICAgICAgICBwaSA9IHBbaV07XG5cdCAgICAgICAgcGltID0gcFtpIC0gMV07XG5cdCAgICAgICAgbnBbaV0gPSB7XG5cdCAgICAgICAgICB4OiAoayAtIGkpIC8gayAqIHBpLnggKyBpIC8gayAqIHBpbS54LFxuXHQgICAgICAgICAgeTogKGsgLSBpKSAvIGsgKiBwaS55ICsgaSAvIGsgKiBwaW0ueVxuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblx0ICAgICAgbnBba10gPSBwW2sgLSAxXTtcblx0ICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuXHQgICAgfSxcblx0ICAgIGRlcml2YXRpdmU6IGZ1bmN0aW9uIGRlcml2YXRpdmUodCkge1xuXHQgICAgICB2YXIgbXQgPSAxIC0gdCxcblx0ICAgICAgICAgIGEsXG5cdCAgICAgICAgICBiLFxuXHQgICAgICAgICAgYyA9IDAsXG5cdCAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdO1xuXHQgICAgICBpZiAodGhpcy5vcmRlciA9PT0gMikge1xuXHQgICAgICAgIHAgPSBbcFswXSwgcFsxXSwgWkVST107XG5cdCAgICAgICAgYSA9IG10O1xuXHQgICAgICAgIGIgPSB0O1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9yZGVyID09PSAzKSB7XG5cdCAgICAgICAgYSA9IG10ICogbXQ7XG5cdCAgICAgICAgYiA9IG10ICogdCAqIDI7XG5cdCAgICAgICAgYyA9IHQgKiB0O1xuXHQgICAgICB9XG5cdCAgICAgIHZhciByZXQgPSB7XG5cdCAgICAgICAgeDogYSAqIHBbMF0ueCArIGIgKiBwWzFdLnggKyBjICogcFsyXS54LFxuXHQgICAgICAgIHk6IGEgKiBwWzBdLnkgKyBiICogcFsxXS55ICsgYyAqIHBbMl0ueVxuXHQgICAgICB9O1xuXHQgICAgICBpZiAodGhpcy5fM2QpIHtcblx0ICAgICAgICByZXQueiA9IGEgKiBwWzBdLnogKyBiICogcFsxXS56ICsgYyAqIHBbMl0uejtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSxcblx0ICAgIGN1cnZhdHVyZTogZnVuY3Rpb24gY3VydmF0dXJlKHQpIHtcblx0ICAgICAgcmV0dXJuIHV0aWxzLmN1cnZhdHVyZSh0LCB0aGlzLnBvaW50cywgdGhpcy5fM2QpO1xuXHQgICAgfSxcblx0ICAgIGluZmxlY3Rpb25zOiBmdW5jdGlvbiBpbmZsZWN0aW9ucygpIHtcblx0ICAgICAgcmV0dXJuIHV0aWxzLmluZmxlY3Rpb25zKHRoaXMucG9pbnRzKTtcblx0ICAgIH0sXG5cdCAgICBub3JtYWw6IGZ1bmN0aW9uIG5vcm1hbCh0KSB7XG5cdCAgICAgIHJldHVybiB0aGlzLl8zZCA/IHRoaXMuX19ub3JtYWwzKHQpIDogdGhpcy5fX25vcm1hbDIodCk7XG5cdCAgICB9LFxuXHQgICAgX19ub3JtYWwyOiBmdW5jdGlvbiBfX25vcm1hbDIodCkge1xuXHQgICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcblx0ICAgICAgdmFyIHEgPSBzcXJ0KGQueCAqIGQueCArIGQueSAqIGQueSk7XG5cdCAgICAgIHJldHVybiB7IHg6IC1kLnkgLyBxLCB5OiBkLnggLyBxIH07XG5cdCAgICB9LFxuXHQgICAgX19ub3JtYWwzOiBmdW5jdGlvbiBfX25vcm1hbDModCkge1xuXHQgICAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTQ1MzE1OVxuXHQgICAgICB2YXIgcjEgPSB0aGlzLmRlcml2YXRpdmUodCksXG5cdCAgICAgICAgICByMiA9IHRoaXMuZGVyaXZhdGl2ZSh0ICsgMC4wMSksXG5cdCAgICAgICAgICBxMSA9IHNxcnQocjEueCAqIHIxLnggKyByMS55ICogcjEueSArIHIxLnogKiByMS56KSxcblx0ICAgICAgICAgIHEyID0gc3FydChyMi54ICogcjIueCArIHIyLnkgKiByMi55ICsgcjIueiAqIHIyLnopO1xuXHQgICAgICByMS54IC89IHExO1xuXHQgICAgICByMS55IC89IHExO1xuXHQgICAgICByMS56IC89IHExO1xuXHQgICAgICByMi54IC89IHEyO1xuXHQgICAgICByMi55IC89IHEyO1xuXHQgICAgICByMi56IC89IHEyO1xuXHQgICAgICAvLyBjcm9zcyBwcm9kdWN0XG5cdCAgICAgIHZhciBjID0ge1xuXHQgICAgICAgIHg6IHIyLnkgKiByMS56IC0gcjIueiAqIHIxLnksXG5cdCAgICAgICAgeTogcjIueiAqIHIxLnggLSByMi54ICogcjEueixcblx0ICAgICAgICB6OiByMi54ICogcjEueSAtIHIyLnkgKiByMS54XG5cdCAgICAgIH07XG5cdCAgICAgIHZhciBtID0gc3FydChjLnggKiBjLnggKyBjLnkgKiBjLnkgKyBjLnogKiBjLnopO1xuXHQgICAgICBjLnggLz0gbTtcblx0ICAgICAgYy55IC89IG07XG5cdCAgICAgIGMueiAvPSBtO1xuXHQgICAgICAvLyByb3RhdGlvbiBtYXRyaXhcblx0ICAgICAgdmFyIFIgPSBbYy54ICogYy54LCBjLnggKiBjLnkgLSBjLnosIGMueCAqIGMueiArIGMueSwgYy54ICogYy55ICsgYy56LCBjLnkgKiBjLnksIGMueSAqIGMueiAtIGMueCwgYy54ICogYy56IC0gYy55LCBjLnkgKiBjLnogKyBjLngsIGMueiAqIGMuel07XG5cdCAgICAgIC8vIG5vcm1hbCB2ZWN0b3I6XG5cdCAgICAgIHZhciBuID0ge1xuXHQgICAgICAgIHg6IFJbMF0gKiByMS54ICsgUlsxXSAqIHIxLnkgKyBSWzJdICogcjEueixcblx0ICAgICAgICB5OiBSWzNdICogcjEueCArIFJbNF0gKiByMS55ICsgUls1XSAqIHIxLnosXG5cdCAgICAgICAgejogUls2XSAqIHIxLnggKyBSWzddICogcjEueSArIFJbOF0gKiByMS56XG5cdCAgICAgIH07XG5cdCAgICAgIHJldHVybiBuO1xuXHQgICAgfSxcblx0ICAgIGh1bGw6IGZ1bmN0aW9uIGh1bGwodCkge1xuXHQgICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuXHQgICAgICAgICAgX3AgPSBbXSxcblx0ICAgICAgICAgIHB0LFxuXHQgICAgICAgICAgcSA9IFtdLFxuXHQgICAgICAgICAgaWR4ID0gMCxcblx0ICAgICAgICAgIGkgPSAwLFxuXHQgICAgICAgICAgbCA9IDA7XG5cdCAgICAgIHFbaWR4KytdID0gcFswXTtcblx0ICAgICAgcVtpZHgrK10gPSBwWzFdO1xuXHQgICAgICBxW2lkeCsrXSA9IHBbMl07XG5cdCAgICAgIGlmICh0aGlzLm9yZGVyID09PSAzKSB7XG5cdCAgICAgICAgcVtpZHgrK10gPSBwWzNdO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHdlIGxlcnAgYmV0d2VlbiBhbGwgcG9pbnRzIGF0IGVhY2ggaXRlcmF0aW9uLCB1bnRpbCB3ZSBoYXZlIDEgcG9pbnQgbGVmdC5cblx0ICAgICAgd2hpbGUgKHAubGVuZ3RoID4gMSkge1xuXHQgICAgICAgIF9wID0gW107XG5cdCAgICAgICAgZm9yIChpID0gMCwgbCA9IHAubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKykge1xuXHQgICAgICAgICAgcHQgPSB1dGlscy5sZXJwKHQsIHBbaV0sIHBbaSArIDFdKTtcblx0ICAgICAgICAgIHFbaWR4KytdID0gcHQ7XG5cdCAgICAgICAgICBfcC5wdXNoKHB0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcCA9IF9wO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBxO1xuXHQgICAgfSxcblx0ICAgIHNwbGl0OiBmdW5jdGlvbiBzcGxpdCh0MSwgdDIpIHtcblx0ICAgICAgLy8gc2hvcnRjdXRzXG5cdCAgICAgIGlmICh0MSA9PT0gMCAmJiAhIXQyKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXQodDIpLmxlZnQ7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHQyID09PSAxKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXQodDEpLnJpZ2h0O1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gbm8gc2hvcnRjdXQ6IHVzZSBcImRlIENhc3RlbGphdVwiIGl0ZXJhdGlvbi5cblx0ICAgICAgdmFyIHEgPSB0aGlzLmh1bGwodDEpO1xuXHQgICAgICB2YXIgcmVzdWx0ID0ge1xuXHQgICAgICAgIGxlZnQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzBdLCBxWzNdLCBxWzVdXSkgOiBuZXcgQmV6aWVyKFtxWzBdLCBxWzRdLCBxWzddLCBxWzldXSksXG5cdCAgICAgICAgcmlnaHQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzVdLCBxWzRdLCBxWzJdXSkgOiBuZXcgQmV6aWVyKFtxWzldLCBxWzhdLCBxWzZdLCBxWzNdXSksXG5cdCAgICAgICAgc3BhbjogcVxuXHQgICAgICB9O1xuXG5cdCAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBiaW5kIF90MS9fdDIgaW5mb3JtYXRpb24hXG5cdCAgICAgIHJlc3VsdC5sZWZ0Ll90MSA9IHV0aWxzLm1hcCgwLCAwLCAxLCB0aGlzLl90MSwgdGhpcy5fdDIpO1xuXHQgICAgICByZXN1bHQubGVmdC5fdDIgPSB1dGlscy5tYXAodDEsIDAsIDEsIHRoaXMuX3QxLCB0aGlzLl90Mik7XG5cdCAgICAgIHJlc3VsdC5yaWdodC5fdDEgPSB1dGlscy5tYXAodDEsIDAsIDEsIHRoaXMuX3QxLCB0aGlzLl90Mik7XG5cdCAgICAgIHJlc3VsdC5yaWdodC5fdDIgPSB1dGlscy5tYXAoMSwgMCwgMSwgdGhpcy5fdDEsIHRoaXMuX3QyKTtcblxuXHQgICAgICAvLyBpZiB3ZSBoYXZlIG5vIHQyLCB3ZSdyZSBkb25lXG5cdCAgICAgIGlmICghdDIpIHtcblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gaWYgd2UgaGF2ZSBhIHQyLCBzcGxpdCBhZ2Fpbjpcblx0ICAgICAgdDIgPSB1dGlscy5tYXAodDIsIHQxLCAxLCAwLCAxKTtcblx0ICAgICAgdmFyIHN1YnNwbGl0ID0gcmVzdWx0LnJpZ2h0LnNwbGl0KHQyKTtcblx0ICAgICAgcmV0dXJuIHN1YnNwbGl0LmxlZnQ7XG5cdCAgICB9LFxuXHQgICAgZXh0cmVtYTogZnVuY3Rpb24gZXh0cmVtYSgpIHtcblx0ICAgICAgdmFyIGRpbXMgPSB0aGlzLmRpbXMsXG5cdCAgICAgICAgICByZXN1bHQgPSB7fSxcblx0ICAgICAgICAgIHJvb3RzID0gW10sXG5cdCAgICAgICAgICBwLFxuXHQgICAgICAgICAgbWZuO1xuXHQgICAgICBkaW1zLmZvckVhY2goZnVuY3Rpb24gKGRpbSkge1xuXHQgICAgICAgIG1mbiA9IGZ1bmN0aW9uIG1mbih2KSB7XG5cdCAgICAgICAgICByZXR1cm4gdltkaW1dO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXS5tYXAobWZuKTtcblx0ICAgICAgICByZXN1bHRbZGltXSA9IHV0aWxzLmRyb290cyhwKTtcblx0ICAgICAgICBpZiAodGhpcy5vcmRlciA9PT0gMykge1xuXHQgICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1sxXS5tYXAobWZuKTtcblx0ICAgICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uY29uY2F0KHV0aWxzLmRyb290cyhwKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG5cdCAgICAgICAgICByZXR1cm4gdCA+PSAwICYmIHQgPD0gMTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICByb290cyA9IHJvb3RzLmNvbmNhdChyZXN1bHRbZGltXS5zb3J0KHV0aWxzLm51bWJlclNvcnQpKTtcblx0ICAgICAgfS5iaW5kKHRoaXMpKTtcblx0ICAgICAgcm9vdHMgPSByb290cy5zb3J0KHV0aWxzLm51bWJlclNvcnQpLmZpbHRlcihmdW5jdGlvbiAodiwgaWR4KSB7XG5cdCAgICAgICAgcmV0dXJuIHJvb3RzLmluZGV4T2YodikgPT09IGlkeDtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJlc3VsdC52YWx1ZXMgPSByb290cztcblx0ICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH0sXG5cdCAgICBiYm94OiBmdW5jdGlvbiBiYm94KCkge1xuXHQgICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLFxuXHQgICAgICAgICAgcmVzdWx0ID0ge307XG5cdCAgICAgIHRoaXMuZGltcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG5cdCAgICAgICAgcmVzdWx0W2RdID0gdXRpbHMuZ2V0bWlubWF4KHRoaXMsIGQsIGV4dHJlbWFbZF0pO1xuXHQgICAgICB9LmJpbmQodGhpcykpO1xuXHQgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfSxcblx0ICAgIG92ZXJsYXBzOiBmdW5jdGlvbiBvdmVybGFwcyhjdXJ2ZSkge1xuXHQgICAgICB2YXIgbGJib3ggPSB0aGlzLmJib3goKSxcblx0ICAgICAgICAgIHRiYm94ID0gY3VydmUuYmJveCgpO1xuXHQgICAgICByZXR1cm4gdXRpbHMuYmJveG92ZXJsYXAobGJib3gsIHRiYm94KTtcblx0ICAgIH0sXG5cdCAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldCh0LCBkKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgIHZhciBjID0gdGhpcy5nZXQodCk7XG5cdCAgICAgICAgdmFyIG4gPSB0aGlzLm5vcm1hbCh0KTtcblx0ICAgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgICAgYzogYyxcblx0ICAgICAgICAgIG46IG4sXG5cdCAgICAgICAgICB4OiBjLnggKyBuLnggKiBkLFxuXHQgICAgICAgICAgeTogYy55ICsgbi55ICogZFxuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKHRoaXMuXzNkKSB7XG5cdCAgICAgICAgICByZXQueiA9IGMueiArIG4ueiAqIGQ7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuX2xpbmVhcikge1xuXHQgICAgICAgIHZhciBudiA9IHRoaXMubm9ybWFsKDApO1xuXHQgICAgICAgIHZhciBjb29yZHMgPSB0aGlzLnBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHtcblx0ICAgICAgICAgIHZhciByZXQgPSB7XG5cdCAgICAgICAgICAgIHg6IHAueCArIHQgKiBudi54LFxuXHQgICAgICAgICAgICB5OiBwLnkgKyB0ICogbnYueVxuXHQgICAgICAgICAgfTtcblx0ICAgICAgICAgIGlmIChwLnogJiYgbi56KSB7XG5cdCAgICAgICAgICAgIHJldC56ID0gcC56ICsgdCAqIG52Lno7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiBbbmV3IEJlemllcihjb29yZHMpXTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7XG5cdCAgICAgIHJldHVybiByZWR1Y2VkLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgICAgIGlmIChzLl9saW5lYXIpIHtcblx0ICAgICAgICAgIHJldHVybiBzLm9mZnNldCh0KVswXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHMuc2NhbGUodCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfSxcblx0ICAgIHNpbXBsZTogZnVuY3Rpb24gc2ltcGxlKCkge1xuXHQgICAgICBpZiAodGhpcy5vcmRlciA9PT0gMykge1xuXHQgICAgICAgIHZhciBhMSA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMV0pO1xuXHQgICAgICAgIHZhciBhMiA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMl0pO1xuXHQgICAgICAgIGlmIChhMSA+IDAgJiYgYTIgPCAwIHx8IGExIDwgMCAmJiBhMiA+IDApIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgbjEgPSB0aGlzLm5vcm1hbCgwKTtcblx0ICAgICAgdmFyIG4yID0gdGhpcy5ub3JtYWwoMSk7XG5cdCAgICAgIHZhciBzID0gbjEueCAqIG4yLnggKyBuMS55ICogbjIueTtcblx0ICAgICAgaWYgKHRoaXMuXzNkKSB7XG5cdCAgICAgICAgcyArPSBuMS56ICogbjIuejtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgYW5nbGUgPSBhYnMoYWNvcyhzKSk7XG5cdCAgICAgIHJldHVybiBhbmdsZSA8IHBpIC8gMztcblx0ICAgIH0sXG5cdCAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZSgpIHtcblx0ICAgICAgdmFyIGksXG5cdCAgICAgICAgICB0MSA9IDAsXG5cdCAgICAgICAgICB0MiA9IDAsXG5cdCAgICAgICAgICBzdGVwID0gMC4wMSxcblx0ICAgICAgICAgIHNlZ21lbnQsXG5cdCAgICAgICAgICBwYXNzMSA9IFtdLFxuXHQgICAgICAgICAgcGFzczIgPSBbXTtcblx0ICAgICAgLy8gZmlyc3QgcGFzczogc3BsaXQgb24gZXh0cmVtYVxuXHQgICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLnZhbHVlcztcblx0ICAgICAgaWYgKGV4dHJlbWEuaW5kZXhPZigwKSA9PT0gLTEpIHtcblx0ICAgICAgICBleHRyZW1hID0gWzBdLmNvbmNhdChleHRyZW1hKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZXh0cmVtYS5pbmRleE9mKDEpID09PSAtMSkge1xuXHQgICAgICAgIGV4dHJlbWEucHVzaCgxKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGZvciAodDEgPSBleHRyZW1hWzBdLCBpID0gMTsgaSA8IGV4dHJlbWEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB0MiA9IGV4dHJlbWFbaV07XG5cdCAgICAgICAgc2VnbWVudCA9IHRoaXMuc3BsaXQodDEsIHQyKTtcblx0ICAgICAgICBzZWdtZW50Ll90MSA9IHQxO1xuXHQgICAgICAgIHNlZ21lbnQuX3QyID0gdDI7XG5cdCAgICAgICAgcGFzczEucHVzaChzZWdtZW50KTtcblx0ICAgICAgICB0MSA9IHQyO1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gc2Vjb25kIHBhc3M6IGZ1cnRoZXIgcmVkdWNlIHRoZXNlIHNlZ21lbnRzIHRvIHNpbXBsZSBzZWdtZW50c1xuXHQgICAgICBwYXNzMS5mb3JFYWNoKGZ1bmN0aW9uIChwMSkge1xuXHQgICAgICAgIHQxID0gMDtcblx0ICAgICAgICB0MiA9IDA7XG5cdCAgICAgICAgd2hpbGUgKHQyIDw9IDEpIHtcblx0ICAgICAgICAgIGZvciAodDIgPSB0MSArIHN0ZXA7IHQyIDw9IDEgKyBzdGVwOyB0MiArPSBzdGVwKSB7XG5cdCAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSwgdDIpO1xuXHQgICAgICAgICAgICBpZiAoIXNlZ21lbnQuc2ltcGxlKCkpIHtcblx0ICAgICAgICAgICAgICB0MiAtPSBzdGVwO1xuXHQgICAgICAgICAgICAgIGlmIChhYnModDEgLSB0MikgPCBzdGVwKSB7XG5cdCAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gbmV2ZXIgZm9ybSBhIHJlZHVjdGlvblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsIHQyKTtcblx0ICAgICAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwgMCwgMSwgcDEuX3QxLCBwMS5fdDIpO1xuXHQgICAgICAgICAgICAgIHNlZ21lbnQuX3QyID0gdXRpbHMubWFwKHQyLCAwLCAxLCBwMS5fdDEsIHAxLl90Mik7XG5cdCAgICAgICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTtcblx0ICAgICAgICAgICAgICB0MSA9IHQyO1xuXHQgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0MSA8IDEpIHtcblx0ICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSwgMSk7XG5cdCAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwgMCwgMSwgcDEuX3QxLCBwMS5fdDIpO1xuXHQgICAgICAgICAgc2VnbWVudC5fdDIgPSBwMS5fdDI7XG5cdCAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBwYXNzMjtcblx0ICAgIH0sXG5cdCAgICBzY2FsZTogZnVuY3Rpb24gc2NhbGUoZCkge1xuXHQgICAgICB2YXIgb3JkZXIgPSB0aGlzLm9yZGVyO1xuXHQgICAgICB2YXIgZGlzdGFuY2VGbiA9IGZhbHNlO1xuXHQgICAgICBpZiAodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgIGRpc3RhbmNlRm4gPSBkO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChkaXN0YW5jZUZuICYmIG9yZGVyID09PSAyKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucmFpc2UoKS5zY2FsZShkaXN0YW5jZUZuKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFRPRE86IGFkZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBkZWdlbmVyYXRlICg9bGluZWFyKSBjdXJ2ZXMuXG5cdCAgICAgIHZhciBjbG9ja3dpc2UgPSB0aGlzLmNsb2Nrd2lzZTtcblx0ICAgICAgdmFyIHIxID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oMCkgOiBkO1xuXHQgICAgICB2YXIgcjIgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigxKSA6IGQ7XG5cdCAgICAgIHZhciB2ID0gW3RoaXMub2Zmc2V0KDAsIDEwKSwgdGhpcy5vZmZzZXQoMSwgMTApXTtcblx0ICAgICAgdmFyIG8gPSB1dGlscy5sbGk0KHZbMF0sIHZbMF0uYywgdlsxXSwgdlsxXS5jKTtcblx0ICAgICAgaWYgKCFvKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHNjYWxlIHRoaXMgY3VydmUuIFRyeSByZWR1Y2luZyBpdCBmaXJzdC5cIik7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gbW92ZSBhbGwgcG9pbnRzIGJ5IGRpc3RhbmNlICdkJyB3cnQgdGhlIG9yaWdpbiAnbydcblx0ICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzLFxuXHQgICAgICAgICAgbnAgPSBbXTtcblxuXHQgICAgICAvLyBtb3ZlIGVuZCBwb2ludHMgYnkgZml4ZWQgZGlzdGFuY2UgYWxvbmcgbm9ybWFsLlxuXHQgICAgICBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuXHQgICAgICAgIHZhciBwID0gbnBbdCAqIG9yZGVyXSA9IHV0aWxzLmNvcHkocG9pbnRzW3QgKiBvcmRlcl0pO1xuXHQgICAgICAgIHAueCArPSAodCA/IHIyIDogcjEpICogdlt0XS5uLng7XG5cdCAgICAgICAgcC55ICs9ICh0ID8gcjIgOiByMSkgKiB2W3RdLm4ueTtcblx0ICAgICAgfS5iaW5kKHRoaXMpKTtcblxuXHQgICAgICBpZiAoIWRpc3RhbmNlRm4pIHtcblx0ICAgICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIHRvIGxpZSBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoZSBvZmZzZXRcblx0ICAgICAgICAvLyBkZXJpdmF0aXZlIHZlY3RvciwgYW5kIHRoZSBvcmlnaW4tdGhyb3VnaC1jb250cm9sIHZlY3RvclxuXHQgICAgICAgIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG5cdCAgICAgICAgICBpZiAodGhpcy5vcmRlciA9PT0gMiAmJiAhIXQpIHJldHVybjtcblx0ICAgICAgICAgIHZhciBwID0gbnBbdCAqIG9yZGVyXTtcblx0ICAgICAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpO1xuXHQgICAgICAgICAgdmFyIHAyID0geyB4OiBwLnggKyBkLngsIHk6IHAueSArIGQueSB9O1xuXHQgICAgICAgICAgbnBbdCArIDFdID0gdXRpbHMubGxpNChwLCBwMiwgbywgcG9pbnRzW3QgKyAxXSk7XG5cdCAgICAgICAgfS5iaW5kKHRoaXMpKTtcblx0ICAgICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIGJ5IFwiaG93ZXZlciBtdWNoIG5lY2Vzc2FyeSB0b1xuXHQgICAgICAvLyBlbnN1cmUgdGhlIGNvcnJlY3QgdGFuZ2VudCB0byBlbmRwb2ludFwiLlxuXHQgICAgICBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuXHQgICAgICAgIGlmICh0aGlzLm9yZGVyID09PSAyICYmICEhdCkgcmV0dXJuO1xuXHQgICAgICAgIHZhciBwID0gcG9pbnRzW3QgKyAxXTtcblx0ICAgICAgICB2YXIgb3YgPSB7XG5cdCAgICAgICAgICB4OiBwLnggLSBvLngsXG5cdCAgICAgICAgICB5OiBwLnkgLSBvLnlcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciByYyA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKCh0ICsgMSkgLyBvcmRlcikgOiBkO1xuXHQgICAgICAgIGlmIChkaXN0YW5jZUZuICYmICFjbG9ja3dpc2UpIHJjID0gLXJjO1xuXHQgICAgICAgIHZhciBtID0gc3FydChvdi54ICogb3YueCArIG92LnkgKiBvdi55KTtcblx0ICAgICAgICBvdi54IC89IG07XG5cdCAgICAgICAgb3YueSAvPSBtO1xuXHQgICAgICAgIG5wW3QgKyAxXSA9IHtcblx0ICAgICAgICAgIHg6IHAueCArIHJjICogb3YueCxcblx0ICAgICAgICAgIHk6IHAueSArIHJjICogb3YueVxuXHQgICAgICAgIH07XG5cdCAgICAgIH0uYmluZCh0aGlzKSk7XG5cdCAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcblx0ICAgIH0sXG5cdCAgICBvdXRsaW5lOiBmdW5jdGlvbiBvdXRsaW5lKGQxLCBkMiwgZDMsIGQ0KSB7XG5cdCAgICAgIGQyID0gdHlwZW9mIGQyID09PSBcInVuZGVmaW5lZFwiID8gZDEgOiBkMjtcblx0ICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpLFxuXHQgICAgICAgICAgbGVuID0gcmVkdWNlZC5sZW5ndGgsXG5cdCAgICAgICAgICBmY3VydmVzID0gW10sXG5cdCAgICAgICAgICBiY3VydmVzID0gW10sXG5cdCAgICAgICAgICBwLFxuXHQgICAgICAgICAgYWxlbiA9IDAsXG5cdCAgICAgICAgICB0bGVuID0gdGhpcy5sZW5ndGgoKTtcblxuXHQgICAgICB2YXIgZ3JhZHVhdGVkID0gdHlwZW9mIGQzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBkNCAhPT0gXCJ1bmRlZmluZWRcIjtcblxuXHQgICAgICBmdW5jdGlvbiBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKHMsIGUsIHRsZW4sIGFsZW4sIHNsZW4pIHtcblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcblx0ICAgICAgICAgIHZhciBmMSA9IGFsZW4gLyB0bGVuLFxuXHQgICAgICAgICAgICAgIGYyID0gKGFsZW4gKyBzbGVuKSAvIHRsZW4sXG5cdCAgICAgICAgICAgICAgZCA9IGUgLSBzO1xuXHQgICAgICAgICAgcmV0dXJuIHV0aWxzLm1hcCh2LCAwLCAxLCBzICsgZjEgKiBkLCBzICsgZjIgKiBkKTtcblx0ICAgICAgICB9O1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gZm9ybSBjdXJ2ZSBvdWxpbmVzXG5cdCAgICAgIHJlZHVjZWQuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuXHQgICAgICAgIHNsZW4gPSBzZWdtZW50Lmxlbmd0aCgpO1xuXHQgICAgICAgIGlmIChncmFkdWF0ZWQpIHtcblx0ICAgICAgICAgIGZjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oZDEsIGQzLCB0bGVuLCBhbGVuLCBzbGVuKSkpO1xuXHQgICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUobGluZWFyRGlzdGFuY2VGdW5jdGlvbigtZDIsIC1kNCwgdGxlbiwgYWxlbiwgc2xlbikpKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoZDEpKTtcblx0ICAgICAgICAgIGJjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKC1kMikpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBhbGVuICs9IHNsZW47XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIC8vIHJldmVyc2UgdGhlIFwicmV0dXJuXCIgb3V0bGluZVxuXHQgICAgICBiY3VydmVzID0gYmN1cnZlcy5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICBwID0gcy5wb2ludHM7XG5cdCAgICAgICAgaWYgKHBbM10pIHtcblx0ICAgICAgICAgIHMucG9pbnRzID0gW3BbM10sIHBbMl0sIHBbMV0sIHBbMF1dO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBzLnBvaW50cyA9IFtwWzJdLCBwWzFdLCBwWzBdXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHM7XG5cdCAgICAgIH0pLnJldmVyc2UoKTtcblxuXHQgICAgICAvLyBmb3JtIHRoZSBlbmRjYXBzIGFzIGxpbmVzXG5cdCAgICAgIHZhciBmcyA9IGZjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuXHQgICAgICAgICAgZmUgPSBmY3VydmVzW2xlbiAtIDFdLnBvaW50c1tmY3VydmVzW2xlbiAtIDFdLnBvaW50cy5sZW5ndGggLSAxXSxcblx0ICAgICAgICAgIGJzID0gYmN1cnZlc1tsZW4gLSAxXS5wb2ludHNbYmN1cnZlc1tsZW4gLSAxXS5wb2ludHMubGVuZ3RoIC0gMV0sXG5cdCAgICAgICAgICBiZSA9IGJjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuXHQgICAgICAgICAgbHMgPSB1dGlscy5tYWtlbGluZShicywgZnMpLFxuXHQgICAgICAgICAgbGUgPSB1dGlscy5tYWtlbGluZShmZSwgYmUpLFxuXHQgICAgICAgICAgc2VnbWVudHMgPSBbbHNdLmNvbmNhdChmY3VydmVzKS5jb25jYXQoW2xlXSkuY29uY2F0KGJjdXJ2ZXMpLFxuXHQgICAgICAgICAgc2xlbiA9IHNlZ21lbnRzLmxlbmd0aDtcblxuXHQgICAgICByZXR1cm4gbmV3IFBvbHlCZXppZXIoc2VnbWVudHMpO1xuXHQgICAgfSxcblx0ICAgIG91dGxpbmVzaGFwZXM6IGZ1bmN0aW9uIG91dGxpbmVzaGFwZXMoZDEsIGQyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuXHQgICAgICBkMiA9IGQyIHx8IGQxO1xuXHQgICAgICB2YXIgb3V0bGluZSA9IHRoaXMub3V0bGluZShkMSwgZDIpLmN1cnZlcztcblx0ICAgICAgdmFyIHNoYXBlcyA9IFtdO1xuXHQgICAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gb3V0bGluZS5sZW5ndGg7IGkgPCBsZW4gLyAyOyBpKyspIHtcblx0ICAgICAgICB2YXIgc2hhcGUgPSB1dGlscy5tYWtlc2hhcGUob3V0bGluZVtpXSwgb3V0bGluZVtsZW4gLSBpXSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuXHQgICAgICAgIHNoYXBlLnN0YXJ0Y2FwLnZpcnR1YWwgPSBpID4gMTtcblx0ICAgICAgICBzaGFwZS5lbmRjYXAudmlydHVhbCA9IGkgPCBsZW4gLyAyIC0gMTtcblx0ICAgICAgICBzaGFwZXMucHVzaChzaGFwZSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHNoYXBlcztcblx0ICAgIH0sXG5cdCAgICBpbnRlcnNlY3RzOiBmdW5jdGlvbiBpbnRlcnNlY3RzKGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuXHQgICAgICBpZiAoIWN1cnZlKSByZXR1cm4gdGhpcy5zZWxmaW50ZXJzZWN0cyhjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG5cdCAgICAgIGlmIChjdXJ2ZS5wMSAmJiBjdXJ2ZS5wMikge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmxpbmVJbnRlcnNlY3RzKGN1cnZlKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoY3VydmUgaW5zdGFuY2VvZiBCZXppZXIpIHtcblx0ICAgICAgICBjdXJ2ZSA9IGN1cnZlLnJlZHVjZSgpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB0aGlzLmN1cnZlaW50ZXJzZWN0cyh0aGlzLnJlZHVjZSgpLCBjdXJ2ZSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuXHQgICAgfSxcblx0ICAgIGxpbmVJbnRlcnNlY3RzOiBmdW5jdGlvbiBsaW5lSW50ZXJzZWN0cyhsaW5lKSB7XG5cdCAgICAgIHZhciBteCA9IG1pbihsaW5lLnAxLngsIGxpbmUucDIueCksXG5cdCAgICAgICAgICBteSA9IG1pbihsaW5lLnAxLnksIGxpbmUucDIueSksXG5cdCAgICAgICAgICBNWCA9IG1heChsaW5lLnAxLngsIGxpbmUucDIueCksXG5cdCAgICAgICAgICBNWSA9IG1heChsaW5lLnAxLnksIGxpbmUucDIueSksXG5cdCAgICAgICAgICBzZWxmID0gdGhpcztcblx0ICAgICAgcmV0dXJuIHV0aWxzLnJvb3RzKHRoaXMucG9pbnRzLCBsaW5lKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcblx0ICAgICAgICB2YXIgcCA9IHNlbGYuZ2V0KHQpO1xuXHQgICAgICAgIHJldHVybiB1dGlscy5iZXR3ZWVuKHAueCwgbXgsIE1YKSAmJiB1dGlscy5iZXR3ZWVuKHAueSwgbXksIE1ZKTtcblx0ICAgICAgfSk7XG5cdCAgICB9LFxuXHQgICAgc2VsZmludGVyc2VjdHM6IGZ1bmN0aW9uIHNlbGZpbnRlcnNlY3RzKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG5cdCAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcblx0ICAgICAgLy8gXCJzaW1wbGVcIiBjdXJ2ZXMgY2Fubm90IGludGVyc2VjdCB3aXRoIHRoZWlyIGRpcmVjdFxuXHQgICAgICAvLyBuZWlnaGJvdXIsIHNvIGZvciBlYWNoIHNlZ21lbnQgWCB3ZSBjaGVjayB3aGV0aGVyXG5cdCAgICAgIC8vIGl0IGludGVyc2VjdHMgWzA6eC0yXVt4KzI6bGFzdF0uXG5cdCAgICAgIHZhciBpLFxuXHQgICAgICAgICAgbGVuID0gcmVkdWNlZC5sZW5ndGggLSAyLFxuXHQgICAgICAgICAgcmVzdWx0cyA9IFtdLFxuXHQgICAgICAgICAgcmVzdWx0LFxuXHQgICAgICAgICAgbGVmdCxcblx0ICAgICAgICAgIHJpZ2h0O1xuXHQgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICBsZWZ0ID0gcmVkdWNlZC5zbGljZShpLCBpICsgMSk7XG5cdCAgICAgICAgcmlnaHQgPSByZWR1Y2VkLnNsaWNlKGkgKyAyKTtcblx0ICAgICAgICByZXN1bHQgPSB0aGlzLmN1cnZlaW50ZXJzZWN0cyhsZWZ0LCByaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuXHQgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChyZXN1bHQpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiByZXN1bHRzO1xuXHQgICAgfSxcblx0ICAgIGN1cnZlaW50ZXJzZWN0czogZnVuY3Rpb24gY3VydmVpbnRlcnNlY3RzKGMxLCBjMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcblx0ICAgICAgdmFyIHBhaXJzID0gW107XG5cdCAgICAgIC8vIHN0ZXAgMTogcGFpciBvZmYgYW55IG92ZXJsYXBwaW5nIHNlZ21lbnRzXG5cdCAgICAgIGMxLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcblx0ICAgICAgICBjMi5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG5cdCAgICAgICAgICBpZiAobC5vdmVybGFwcyhyKSkge1xuXHQgICAgICAgICAgICBwYWlycy5wdXNoKHsgbGVmdDogbCwgcmlnaHQ6IHIgfSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICAvLyBzdGVwIDI6IGZvciBlYWNoIHBhaXJpbmcsIHJ1biB0aHJvdWdoIHRoZSBjb252ZXJnZW5jZSBhbGdvcml0aG0uXG5cdCAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gW107XG5cdCAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcblx0ICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLmNvbmNhdChyZXN1bHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuXHQgICAgfSxcblx0ICAgIGFyY3M6IGZ1bmN0aW9uIGFyY3MoZXJyb3JUaHJlc2hvbGQpIHtcblx0ICAgICAgZXJyb3JUaHJlc2hvbGQgPSBlcnJvclRocmVzaG9sZCB8fCAwLjU7XG5cdCAgICAgIHZhciBjaXJjbGVzID0gW107XG5cdCAgICAgIHJldHVybiB0aGlzLl9pdGVyYXRlKGVycm9yVGhyZXNob2xkLCBjaXJjbGVzKTtcblx0ICAgIH0sXG5cdCAgICBfZXJyb3I6IGZ1bmN0aW9uIF9lcnJvcihwYywgbnAxLCBzLCBlKSB7XG5cdCAgICAgIHZhciBxID0gKGUgLSBzKSAvIDQsXG5cdCAgICAgICAgICBjMSA9IHRoaXMuZ2V0KHMgKyBxKSxcblx0ICAgICAgICAgIGMyID0gdGhpcy5nZXQoZSAtIHEpLFxuXHQgICAgICAgICAgcmVmID0gdXRpbHMuZGlzdChwYywgbnAxKSxcblx0ICAgICAgICAgIGQxID0gdXRpbHMuZGlzdChwYywgYzEpLFxuXHQgICAgICAgICAgZDIgPSB1dGlscy5kaXN0KHBjLCBjMik7XG5cdCAgICAgIHJldHVybiBhYnMoZDEgLSByZWYpICsgYWJzKGQyIC0gcmVmKTtcblx0ICAgIH0sXG5cdCAgICBfaXRlcmF0ZTogZnVuY3Rpb24gX2l0ZXJhdGUoZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpIHtcblx0ICAgICAgdmFyIHRfcyA9IDAsXG5cdCAgICAgICAgICB0X2UgPSAxLFxuXHQgICAgICAgICAgc2FmZXR5O1xuXHQgICAgICAvLyB3ZSBkbyBhIGJpbmFyeSBzZWFyY2ggdG8gZmluZCB0aGUgXCJnb29kIGB0YCBjbG9zZXN0IHRvIG5vLWxvbmdlci1nb29kXCJcblx0ICAgICAgZG8ge1xuXHQgICAgICAgIHNhZmV0eSA9IDA7XG5cblx0ICAgICAgICAvLyBzdGVwIDE6IHN0YXJ0IHdpdGggdGhlIG1heGltdW0gcG9zc2libGUgYXJjXG5cdCAgICAgICAgdF9lID0gMTtcblxuXHQgICAgICAgIC8vIHBvaW50czpcblx0ICAgICAgICB2YXIgbnAxID0gdGhpcy5nZXQodF9zKSxcblx0ICAgICAgICAgICAgbnAyLFxuXHQgICAgICAgICAgICBucDMsXG5cdCAgICAgICAgICAgIGFyYyxcblx0ICAgICAgICAgICAgcHJldl9hcmM7XG5cblx0ICAgICAgICAvLyBib29sZWFuczpcblx0ICAgICAgICB2YXIgY3Vycl9nb29kID0gZmFsc2UsXG5cdCAgICAgICAgICAgIHByZXZfZ29vZCA9IGZhbHNlLFxuXHQgICAgICAgICAgICBkb25lO1xuXG5cdCAgICAgICAgLy8gbnVtYmVyczpcblx0ICAgICAgICB2YXIgdF9tID0gdF9lLFxuXHQgICAgICAgICAgICBwcmV2X2UgPSAxLFxuXHQgICAgICAgICAgICBzdGVwID0gMDtcblxuXHQgICAgICAgIC8vIHN0ZXAgMjogZmluZCB0aGUgYmVzdCBwb3NzaWJsZSBhcmNcblx0ICAgICAgICBkbyB7XG5cdCAgICAgICAgICBwcmV2X2dvb2QgPSBjdXJyX2dvb2Q7XG5cdCAgICAgICAgICBwcmV2X2FyYyA9IGFyYztcblx0ICAgICAgICAgIHRfbSA9ICh0X3MgKyB0X2UpIC8gMjtcblx0ICAgICAgICAgIHN0ZXArKztcblxuXHQgICAgICAgICAgbnAyID0gdGhpcy5nZXQodF9tKTtcblx0ICAgICAgICAgIG5wMyA9IHRoaXMuZ2V0KHRfZSk7XG5cblx0ICAgICAgICAgIGFyYyA9IHV0aWxzLmdldGNjZW50ZXIobnAxLCBucDIsIG5wMyk7XG5cblx0ICAgICAgICAgIC8vYWxzbyBzYXZlIHRoZSB0IHZhbHVlc1xuXHQgICAgICAgICAgYXJjLmludGVydmFsID0ge1xuXHQgICAgICAgICAgICBzdGFydDogdF9zLFxuXHQgICAgICAgICAgICBlbmQ6IHRfZVxuXHQgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXJyb3IoYXJjLCBucDEsIHRfcywgdF9lKTtcblx0ICAgICAgICAgIGN1cnJfZ29vZCA9IGVycm9yIDw9IGVycm9yVGhyZXNob2xkO1xuXG5cdCAgICAgICAgICBkb25lID0gcHJldl9nb29kICYmICFjdXJyX2dvb2Q7XG5cdCAgICAgICAgICBpZiAoIWRvbmUpIHByZXZfZSA9IHRfZTtcblxuXHQgICAgICAgICAgLy8gdGhpcyBhcmMgaXMgZmluZTogd2UgY2FuIG1vdmUgJ2UnIHVwIHRvIHNlZSBpZiB3ZSBjYW4gZmluZCBhIHdpZGVyIGFyY1xuXHQgICAgICAgICAgaWYgKGN1cnJfZ29vZCkge1xuXHQgICAgICAgICAgICAvLyBpZiBlIGlzIGFscmVhZHkgYXQgbWF4LCB0aGVuIHdlJ3JlIGRvbmUgZm9yIHRoaXMgYXJjLlxuXHQgICAgICAgICAgICBpZiAodF9lID49IDEpIHtcblx0ICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgY2FwIGF0IHQ9MVxuXHQgICAgICAgICAgICAgIGFyYy5pbnRlcnZhbC5lbmQgPSBwcmV2X2UgPSAxO1xuXHQgICAgICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuXHQgICAgICAgICAgICAgIC8vIGlmIHdlIGNhcHBlZCB0aGUgYXJjIHNlZ21lbnQgdG8gdD0xIHdlIGFsc28gbmVlZCB0byBtYWtlIHN1cmUgdGhhdFxuXHQgICAgICAgICAgICAgIC8vIHRoZSBhcmMncyBlbmQgYW5nbGUgaXMgY29ycmVjdCB3aXRoIHJlc3BlY3QgdG8gdGhlIGJlemllciBlbmQgcG9pbnQuXG5cdCAgICAgICAgICAgICAgaWYgKHRfZSA+IDEpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBkID0ge1xuXHQgICAgICAgICAgICAgICAgICB4OiBhcmMueCArIGFyYy5yICogY29zKGFyYy5lKSxcblx0ICAgICAgICAgICAgICAgICAgeTogYXJjLnkgKyBhcmMuciAqIHNpbihhcmMuZSlcblx0ICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICBhcmMuZSArPSB1dGlscy5hbmdsZSh7IHg6IGFyYy54LCB5OiBhcmMueSB9LCBkLCB0aGlzLmdldCgxKSk7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIGlmIG5vdCwgbW92ZSBpdCB1cCBieSBoYWxmIHRoZSBpdGVyYXRpb24gZGlzdGFuY2Vcblx0ICAgICAgICAgICAgdF9lID0gdF9lICsgKHRfZSAtIHRfcykgLyAyO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGJhZCBhcmM6IHdlIG5lZWQgdG8gbW92ZSAnZScgZG93biB0byBmaW5kIGEgZ29vZCBhcmNcblx0ICAgICAgICAgICAgdF9lID0gdF9tO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0gd2hpbGUgKCFkb25lICYmIHNhZmV0eSsrIDwgMTAwKTtcblxuXHQgICAgICAgIGlmIChzYWZldHkgPj0gMTAwKSB7XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkw4MzU6IFtGXSBhcmMgZm91bmRcIiwgdF9zLCBwcmV2X2UsIHByZXZfYXJjLngsIHByZXZfYXJjLnksIHByZXZfYXJjLnMsIHByZXZfYXJjLmUpO1xuXG5cdCAgICAgICAgcHJldl9hcmMgPSBwcmV2X2FyYyA/IHByZXZfYXJjIDogYXJjO1xuXHQgICAgICAgIGNpcmNsZXMucHVzaChwcmV2X2FyYyk7XG5cdCAgICAgICAgdF9zID0gcHJldl9lO1xuXHQgICAgICB9IHdoaWxlICh0X2UgPCAxKTtcblx0ICAgICAgcmV0dXJuIGNpcmNsZXM7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIG1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXHR9KSgpO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgIFwidXNlIHN0cmljdFwiO1xuXG5cdCAgLy8gbWF0aC1pbmxpbmluZy5cblxuXHQgIHZhciBhYnMgPSBNYXRoLmFicyxcblx0ICAgICAgY29zID0gTWF0aC5jb3MsXG5cdCAgICAgIHNpbiA9IE1hdGguc2luLFxuXHQgICAgICBhY29zID0gTWF0aC5hY29zLFxuXHQgICAgICBhdGFuMiA9IE1hdGguYXRhbjIsXG5cdCAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG5cdCAgICAgIHBvdyA9IE1hdGgucG93LFxuXG5cdCAgLy8gY3ViZSByb290IGZ1bmN0aW9uIHlpZWxkaW5nIHJlYWwgcm9vdHNcblx0ICBjcnQgPSBmdW5jdGlvbiBjcnQodikge1xuXHQgICAgcmV0dXJuIHYgPCAwID8gLXBvdygtdiwgMSAvIDMpIDogcG93KHYsIDEgLyAzKTtcblx0ICB9LFxuXG5cdCAgLy8gdHJpZyBjb25zdGFudHNcblx0ICBwaSA9IE1hdGguUEksXG5cdCAgICAgIHRhdSA9IDIgKiBwaSxcblx0ICAgICAgcXVhcnQgPSBwaSAvIDIsXG5cblx0ICAvLyBmbG9hdCBwcmVjaXNpb24gc2lnbmlmaWNhbnQgZGVjaW1hbFxuXHQgIGVwc2lsb24gPSAwLjAwMDAwMSxcblxuXHQgIC8vIGV4dHJlbWFzIHVzZWQgaW4gYmJveCBjYWxjdWxhdGlvbiBhbmQgc2ltaWxhciBhbGdvcml0aG1zXG5cdCAgbk1heCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTEsXG5cdCAgICAgIG5NaW4gPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUiB8fCAtOTAwNzE5OTI1NDc0MDk5MSxcblxuXHQgIC8vIGEgemVybyBjb29yZGluYXRlLCB3aGljaCBpcyBzdXJwcmlzaW5nbHkgdXNlZnVsXG5cdCAgWkVSTyA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuXG5cdCAgLy8gQmV6aWVyIHV0aWxpdHkgZnVuY3Rpb25zXG5cdCAgdmFyIHV0aWxzID0ge1xuXHQgICAgLy8gTGVnZW5kcmUtR2F1c3MgYWJzY2lzc2FlIHdpdGggbj0yNCAoeF9pIHZhbHVlcywgZGVmaW5lZCBhdCBpPW4gYXMgdGhlIHJvb3RzIG9mIHRoZSBudGggb3JkZXIgTGVnZW5kcmUgcG9seW5vbWlhbCBQbih4KSlcblx0ICAgIFR2YWx1ZXM6IFstMC4wNjQwNTY4OTI4NjI2MDU2MjYwODUwNDMwODI2MjQ3NDUwMzg1OTA5LCAwLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksIC0wLjE5MTExODg2NzQ3MzYxNjMwOTE1ODYzOTgyMDc1NzA2OTYzMTg0MDQsIDAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCwgLTAuMzE1MDQyNjc5Njk2MTYzMzc0Mzg2NzkzMjkxMzE5ODEwMjQwNzg2NCwgMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LCAtMC40MzM3OTM1MDc2MjYwNDUxMzg0ODcwODQyMzE5MTMzNDk3MTI0NTI0LCAwLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsIC0wLjU0NTQyMTQ3MTM4ODgzOTUzNTY1ODM3NTYxNzIxODM3MjM3MDAxMDcsIDAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNywgLTAuNjQ4MDkzNjUxOTM2OTc1NTY5MjUyNDk1Nzg2OTEwNzQ3NjI2NjY5NiwgMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LCAtMC43NDAxMjQxOTE1Nzg1NTQzNjQyNDM4MjgxMDMwOTk5Nzg0MjU1MjMyLCAwLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsIC0wLjgyMDAwMTk4NTk3MzkwMjkyMTk1Mzk0OTg3MjY2OTc0NTIwODA3NjEsIDAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSwgLTAuODg2NDE1NTI3MDA0NDAxMDM0MjEzMTU0MzQxOTgyMTk2NzU1MDg3MywgMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLCAtMC45MzgyNzQ1NTIwMDI3MzI3NTg1MjM2NDkwMDE3MDg3MjE0NDk2NTQ4LCAwLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsIC0wLjk3NDcyODU1NTk3MTMwOTQ5ODE5ODM5MTk5MzAwODE2OTA2MTc0MTEsIDAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSwgLTAuOTk1MTg3MjE5OTk3MDIxMzYwMTc5OTk3NDA5NzAwNzM2ODExODc0NSwgMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1XSxcblxuXHQgICAgLy8gTGVnZW5kcmUtR2F1c3Mgd2VpZ2h0cyB3aXRoIG49MjQgKHdfaSB2YWx1ZXMsIGRlZmluZWQgYnkgYSBmdW5jdGlvbiBsaW5rZWQgdG8gaW4gdGhlIEJlemllciBwcmltZXIgYXJ0aWNsZSlcblx0ICAgIEN2YWx1ZXM6IFswLjEyNzkzODE5NTM0Njc1MjE1Njk3NDA1NjE2NTIyNDY5NTM3MTg1MTcsIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNywgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LCAwLjEyNTgzNzQ1NjM0NjgyODI5NjEyMTM3NTM4MjUxMTE4MzY4ODcyNjQsIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3LCAwLjEyMTY3MDQ3MjkyNzgwMzM5MTIwNDQ2MzE1MzQ3NjI2MjQyNTYwNywgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLCAwLjExNTUwNTY2ODA1MzcyNTYwMTM1MzM0NDQ4MzkwNjc4MzU1OTg2MjIsIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NiwgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LCAwLjA5NzYxODY1MjEwNDExMzg4ODI2OTg4MDY2NDQ2NDI0NzE1NDQyNzksIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSwgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUsIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1LCAwLjA3MzM0NjQ4MTQxMTA4MDMwNTczNDAzMzYxNTI1MzExNjUxODExOTMsIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MywgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLCAwLjA1OTI5ODU4NDkxNTQzNjc4MDc0NjM2Nzc1ODUwMDEwODU4NDU0MTIsIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MywgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLCAwLjAyODUzMTM4ODYyODkzMzY2MzE4MTMwNzgxNTk1MTg3ODI4NjQ0OTEsIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSwgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5LCAwLjAxMjM0MTIyOTc5OTk4NzE5OTU0NjgwNTY2NzA3MDAzNzI5MTU3NTldLFxuXG5cdCAgICBhcmNmbjogZnVuY3Rpb24gYXJjZm4odCwgZGVyaXZhdGl2ZUZuKSB7XG5cdCAgICAgIHZhciBkID0gZGVyaXZhdGl2ZUZuKHQpO1xuXHQgICAgICB2YXIgbCA9IGQueCAqIGQueCArIGQueSAqIGQueTtcblx0ICAgICAgaWYgKHR5cGVvZiBkLnogIT09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgICBsICs9IGQueiAqIGQuejtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gc3FydChsKTtcblx0ICAgIH0sXG5cblx0ICAgIGNvbXB1dGU6IGZ1bmN0aW9uIGNvbXB1dGUodCwgcG9pbnRzLCBfM2QpIHtcblx0ICAgICAgLy8gc2hvcnRjdXRzXG5cdCAgICAgIGlmICh0ID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuIHBvaW50c1swXTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBvcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuXG5cdCAgICAgIGlmICh0ID09PSAxKSB7XG5cdCAgICAgICAgcmV0dXJuIHBvaW50c1tvcmRlcl07XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgcCA9IHBvaW50cztcblx0ICAgICAgdmFyIG10ID0gMSAtIHQ7XG5cblx0ICAgICAgLy8gY29uc3RhbnQ/XG5cdCAgICAgIGlmIChvcmRlciA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybiBwb2ludHNbMF07XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBsaW5lYXI/XG5cdCAgICAgIGlmIChvcmRlciA9PT0gMSkge1xuXHQgICAgICAgIHJldCA9IHtcblx0ICAgICAgICAgIHg6IG10ICogcFswXS54ICsgdCAqIHBbMV0ueCxcblx0ICAgICAgICAgIHk6IG10ICogcFswXS55ICsgdCAqIHBbMV0ueVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKF8zZCkge1xuXHQgICAgICAgICAgcmV0LnogPSBtdCAqIHBbMF0ueiArIHQgKiBwWzFdLno7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBxdWFkcmF0aWMvY3ViaWMgY3VydmU/XG5cdCAgICAgIGlmIChvcmRlciA8IDQpIHtcblx0ICAgICAgICB2YXIgbXQyID0gbXQgKiBtdCxcblx0ICAgICAgICAgICAgdDIgPSB0ICogdCxcblx0ICAgICAgICAgICAgYSxcblx0ICAgICAgICAgICAgYixcblx0ICAgICAgICAgICAgYyxcblx0ICAgICAgICAgICAgZCA9IDA7XG5cdCAgICAgICAgaWYgKG9yZGVyID09PSAyKSB7XG5cdCAgICAgICAgICBwID0gW3BbMF0sIHBbMV0sIHBbMl0sIFpFUk9dO1xuXHQgICAgICAgICAgYSA9IG10Mjtcblx0ICAgICAgICAgIGIgPSBtdCAqIHQgKiAyO1xuXHQgICAgICAgICAgYyA9IHQyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09IDMpIHtcblx0ICAgICAgICAgIGEgPSBtdDIgKiBtdDtcblx0ICAgICAgICAgIGIgPSBtdDIgKiB0ICogMztcblx0ICAgICAgICAgIGMgPSBtdCAqIHQyICogMztcblx0ICAgICAgICAgIGQgPSB0ICogdDI7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciByZXQgPSB7XG5cdCAgICAgICAgICB4OiBhICogcFswXS54ICsgYiAqIHBbMV0ueCArIGMgKiBwWzJdLnggKyBkICogcFszXS54LFxuXHQgICAgICAgICAgeTogYSAqIHBbMF0ueSArIGIgKiBwWzFdLnkgKyBjICogcFsyXS55ICsgZCAqIHBbM10ueVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKF8zZCkge1xuXHQgICAgICAgICAgcmV0LnogPSBhICogcFswXS56ICsgYiAqIHBbMV0ueiArIGMgKiBwWzJdLnogKyBkICogcFszXS56O1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gaGlnaGVyIG9yZGVyIGN1cnZlczogdXNlIGRlIENhc3RlbGphdSdzIGNvbXB1dGF0aW9uXG5cdCAgICAgIHZhciBkQ3B0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9pbnRzKSk7XG5cdCAgICAgIHdoaWxlIChkQ3B0cy5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkQ3B0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0ICAgICAgICAgIGRDcHRzW2ldID0ge1xuXHQgICAgICAgICAgICB4OiBkQ3B0c1tpXS54ICsgKGRDcHRzW2kgKyAxXS54IC0gZENwdHNbaV0ueCkgKiB0LFxuXHQgICAgICAgICAgICB5OiBkQ3B0c1tpXS55ICsgKGRDcHRzW2kgKyAxXS55IC0gZENwdHNbaV0ueSkgKiB0XG5cdCAgICAgICAgICB9O1xuXHQgICAgICAgICAgaWYgKHR5cGVvZiBkQ3B0c1tpXS56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgIGRDcHRzW2ldID0gZENwdHNbaV0ueiArIChkQ3B0c1tpICsgMV0ueiAtIGRDcHRzW2ldLnopICogdDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgZENwdHMuc3BsaWNlKGRDcHRzLmxlbmd0aCAtIDEsIDEpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBkQ3B0c1swXTtcblx0ICAgIH0sXG5cblx0ICAgIGNvbXB1dGVXaXRoUmF0aW9zOiBmdW5jdGlvbiBjb21wdXRlV2l0aFJhdGlvcyh0LCBwb2ludHMsIHJhdGlvcywgXzNkKSB7XG5cdCAgICAgIHZhciBtdCA9IDEgLSB0LFxuXHQgICAgICAgICAgciA9IHJhdGlvcyxcblx0ICAgICAgICAgIHAgPSBwb2ludHMsXG5cdCAgICAgICAgICBkO1xuXHQgICAgICB2YXIgZjEgPSByWzBdLFxuXHQgICAgICAgICAgZjIgPSByWzFdLFxuXHQgICAgICAgICAgZjMgPSByWzJdLFxuXHQgICAgICAgICAgZjQgPSByWzNdO1xuXG5cdCAgICAgIC8vIHNwZWMgZm9yIGxpbmVhclxuXHQgICAgICBmMSAqPSBtdDtcblx0ICAgICAgZjIgKj0gdDtcblxuXHQgICAgICBpZiAocC5sZW5ndGggPT09IDIpIHtcblx0ICAgICAgICBkID0gZjEgKyBmMjtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgeDogKGYxICogcFswXS54ICsgZjIgKiBwWzFdLngpIC8gZCxcblx0ICAgICAgICAgIHk6IChmMSAqIHBbMF0ueSArIGYyICogcFsxXS55KSAvIGQsXG5cdCAgICAgICAgICB6OiAhXzNkID8gZmFsc2UgOiAoZjEgKiBwWzBdLnogKyBmMiAqIHBbMV0ueikgLyBkXG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIHVwZ3JhZGUgdG8gcXVhZHJhdGljXG5cdCAgICAgIGYxICo9IG10O1xuXHQgICAgICBmMiAqPSAyICogbXQ7XG5cdCAgICAgIGYzICo9IHQgKiB0O1xuXG5cdCAgICAgIGlmIChwLmxlbmd0aCA9PT0gMykge1xuXHQgICAgICAgIGQgPSBmMSArIGYyICsgZjM7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgIHg6IChmMSAqIHBbMF0ueCArIGYyICogcFsxXS54ICsgZjMgKiBwWzJdLngpIC8gZCxcblx0ICAgICAgICAgIHk6IChmMSAqIHBbMF0ueSArIGYyICogcFsxXS55ICsgZjMgKiBwWzJdLnkpIC8gZCxcblx0ICAgICAgICAgIHo6ICFfM2QgPyBmYWxzZSA6IChmMSAqIHBbMF0ueiArIGYyICogcFsxXS56ICsgZjMgKiBwWzJdLnopIC8gZFxuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyB1cGdyYWRlIHRvIGN1YmljXG5cdCAgICAgIGYxICo9IG10O1xuXHQgICAgICBmMiAqPSAxLjUgKiBtdDtcblx0ICAgICAgZjMgKj0gMyAqIG10O1xuXHQgICAgICBmNCAqPSB0ICogdCAqIHQ7XG5cblx0ICAgICAgaWYgKHAubGVuZ3RoID09PSA0KSB7XG5cdCAgICAgICAgZCA9IGYxICsgZjIgKyBmMyArIGY0O1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICB4OiAoZjEgKiBwWzBdLnggKyBmMiAqIHBbMV0ueCArIGYzICogcFsyXS54ICsgZjQgKiBwWzNdLngpIC8gZCxcblx0ICAgICAgICAgIHk6IChmMSAqIHBbMF0ueSArIGYyICogcFsxXS55ICsgZjMgKiBwWzJdLnkgKyBmNCAqIHBbM10ueSkgLyBkLFxuXHQgICAgICAgICAgejogIV8zZCA/IGZhbHNlIDogKGYxICogcFswXS56ICsgZjIgKiBwWzFdLnogKyBmMyAqIHBbMl0ueiArIGY0ICogcFszXS56KSAvIGRcblx0ICAgICAgICB9O1xuXHQgICAgICB9XG5cdCAgICB9LFxuXG5cdCAgICBkZXJpdmU6IGZ1bmN0aW9uIGRlcml2ZShwb2ludHMsIF8zZCkge1xuXHQgICAgICB2YXIgZHBvaW50cyA9IFtdO1xuXHQgICAgICBmb3IgKHZhciBwID0gcG9pbnRzLCBkID0gcC5sZW5ndGgsIGMgPSBkIC0gMTsgZCA+IDE7IGQtLSwgYy0tKSB7XG5cdCAgICAgICAgdmFyIGxpc3QgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBqID0gMCwgZHB0OyBqIDwgYzsgaisrKSB7XG5cdCAgICAgICAgICBkcHQgPSB7XG5cdCAgICAgICAgICAgIHg6IGMgKiAocFtqICsgMV0ueCAtIHBbal0ueCksXG5cdCAgICAgICAgICAgIHk6IGMgKiAocFtqICsgMV0ueSAtIHBbal0ueSlcblx0ICAgICAgICAgIH07XG5cdCAgICAgICAgICBpZiAoXzNkKSB7XG5cdCAgICAgICAgICAgIGRwdC56ID0gYyAqIChwW2ogKyAxXS56IC0gcFtqXS56KTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGxpc3QucHVzaChkcHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBkcG9pbnRzLnB1c2gobGlzdCk7XG5cdCAgICAgICAgcCA9IGxpc3Q7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGRwb2ludHM7XG5cdCAgICB9LFxuXG5cdCAgICBiZXR3ZWVuOiBmdW5jdGlvbiBiZXR3ZWVuKHYsIG0sIE0pIHtcblx0ICAgICAgcmV0dXJuIG0gPD0gdiAmJiB2IDw9IE0gfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBtKSB8fCB1dGlscy5hcHByb3hpbWF0ZWx5KHYsIE0pO1xuXHQgICAgfSxcblxuXHQgICAgYXBwcm94aW1hdGVseTogZnVuY3Rpb24gYXBwcm94aW1hdGVseShhLCBiLCBwcmVjaXNpb24pIHtcblx0ICAgICAgcmV0dXJuIGFicyhhIC0gYikgPD0gKHByZWNpc2lvbiB8fCBlcHNpbG9uKTtcblx0ICAgIH0sXG5cblx0ICAgIGxlbmd0aDogZnVuY3Rpb24gbGVuZ3RoKGRlcml2YXRpdmVGbikge1xuXHQgICAgICB2YXIgeiA9IDAuNSxcblx0ICAgICAgICAgIHN1bSA9IDAsXG5cdCAgICAgICAgICBsZW4gPSB1dGlscy5UdmFsdWVzLmxlbmd0aCxcblx0ICAgICAgICAgIGksXG5cdCAgICAgICAgICB0O1xuXHQgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICB0ID0geiAqIHV0aWxzLlR2YWx1ZXNbaV0gKyB6O1xuXHQgICAgICAgIHN1bSArPSB1dGlscy5DdmFsdWVzW2ldICogdXRpbHMuYXJjZm4odCwgZGVyaXZhdGl2ZUZuKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4geiAqIHN1bTtcblx0ICAgIH0sXG5cblx0ICAgIG1hcDogZnVuY3Rpb24gbWFwKHYsIGRzLCBkZSwgdHMsIHRlKSB7XG5cdCAgICAgIHZhciBkMSA9IGRlIC0gZHMsXG5cdCAgICAgICAgICBkMiA9IHRlIC0gdHMsXG5cdCAgICAgICAgICB2MiA9IHYgLSBkcyxcblx0ICAgICAgICAgIHIgPSB2MiAvIGQxO1xuXHQgICAgICByZXR1cm4gdHMgKyBkMiAqIHI7XG5cdCAgICB9LFxuXG5cdCAgICBsZXJwOiBmdW5jdGlvbiBsZXJwKHIsIHYxLCB2Mikge1xuXHQgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgIHg6IHYxLnggKyByICogKHYyLnggLSB2MS54KSxcblx0ICAgICAgICB5OiB2MS55ICsgciAqICh2Mi55IC0gdjEueSlcblx0ICAgICAgfTtcblx0ICAgICAgaWYgKCEhdjEueiAmJiAhIXYyLnopIHtcblx0ICAgICAgICByZXQueiA9IHYxLnogKyByICogKHYyLnogLSB2MS56KTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSxcblxuXHQgICAgcG9pbnRUb1N0cmluZzogZnVuY3Rpb24gcG9pbnRUb1N0cmluZyhwKSB7XG5cdCAgICAgIHZhciBzID0gcC54ICsgXCIvXCIgKyBwLnk7XG5cdCAgICAgIGlmICh0eXBlb2YgcC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgcyArPSBcIi9cIiArIHAuejtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcztcblx0ICAgIH0sXG5cblx0ICAgIHBvaW50c1RvU3RyaW5nOiBmdW5jdGlvbiBwb2ludHNUb1N0cmluZyhwb2ludHMpIHtcblx0ICAgICAgcmV0dXJuIFwiW1wiICsgcG9pbnRzLm1hcCh1dGlscy5wb2ludFRvU3RyaW5nKS5qb2luKFwiLCBcIikgKyBcIl1cIjtcblx0ICAgIH0sXG5cblx0ICAgIGNvcHk6IGZ1bmN0aW9uIGNvcHkob2JqKSB7XG5cdCAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHQgICAgfSxcblxuXHQgICAgYW5nbGU6IGZ1bmN0aW9uIGFuZ2xlKG8sIHYxLCB2Mikge1xuXHQgICAgICB2YXIgZHgxID0gdjEueCAtIG8ueCxcblx0ICAgICAgICAgIGR5MSA9IHYxLnkgLSBvLnksXG5cdCAgICAgICAgICBkeDIgPSB2Mi54IC0gby54LFxuXHQgICAgICAgICAgZHkyID0gdjIueSAtIG8ueSxcblx0ICAgICAgICAgIGNyb3NzID0gZHgxICogZHkyIC0gZHkxICogZHgyLFxuXHQgICAgICAgICAgZG90ID0gZHgxICogZHgyICsgZHkxICogZHkyO1xuXHQgICAgICByZXR1cm4gYXRhbjIoY3Jvc3MsIGRvdCk7XG5cdCAgICB9LFxuXG5cdCAgICAvLyByb3VuZCBhcyBzdHJpbmcsIHRvIGF2b2lkIHJvdW5kaW5nIGVycm9yc1xuXHQgICAgcm91bmQ6IGZ1bmN0aW9uIHJvdW5kKHYsIGQpIHtcblx0ICAgICAgdmFyIHMgPSBcIlwiICsgdjtcblx0ICAgICAgdmFyIHBvcyA9IHMuaW5kZXhPZihcIi5cIik7XG5cdCAgICAgIHJldHVybiBwYXJzZUZsb2F0KHMuc3Vic3RyaW5nKDAsIHBvcyArIDEgKyBkKSk7XG5cdCAgICB9LFxuXG5cdCAgICBkaXN0OiBmdW5jdGlvbiBkaXN0KHAxLCBwMikge1xuXHQgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcblx0ICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnk7XG5cdCAgICAgIHJldHVybiBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblx0ICAgIH0sXG5cblx0ICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QoTFVULCBwb2ludCkge1xuXHQgICAgICB2YXIgbWRpc3QgPSBwb3coMiwgNjMpLFxuXHQgICAgICAgICAgbXBvcyxcblx0ICAgICAgICAgIGQ7XG5cdCAgICAgIExVVC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpZHgpIHtcblx0ICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG5cdCAgICAgICAgaWYgKGQgPCBtZGlzdCkge1xuXHQgICAgICAgICAgbWRpc3QgPSBkO1xuXHQgICAgICAgICAgbXBvcyA9IGlkeDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm4geyBtZGlzdDogbWRpc3QsIG1wb3M6IG1wb3MgfTtcblx0ICAgIH0sXG5cblx0ICAgIGFiY3JhdGlvOiBmdW5jdGlvbiBhYmNyYXRpbyh0LCBuKSB7XG5cdCAgICAgIC8vIHNlZSByYXRpbyh0KSBub3RlIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mby8jYWJjXG5cdCAgICAgIGlmIChuICE9PSAyICYmIG4gIT09IDMpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgdCA9IDAuNTtcblx0ICAgICAgfSBlbHNlIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcblx0ICAgICAgICByZXR1cm4gdDtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgYm90dG9tID0gcG93KHQsIG4pICsgcG93KDEgLSB0LCBuKSxcblx0ICAgICAgICAgIHRvcCA9IGJvdHRvbSAtIDE7XG5cdCAgICAgIHJldHVybiBhYnModG9wIC8gYm90dG9tKTtcblx0ICAgIH0sXG5cblx0ICAgIHByb2plY3Rpb25yYXRpbzogZnVuY3Rpb24gcHJvamVjdGlvbnJhdGlvKHQsIG4pIHtcblx0ICAgICAgLy8gc2VlIHUodCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiY1xuXHQgICAgICBpZiAobiAhPT0gMiAmJiBuICE9PSAzKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgIHQgPSAwLjU7XG5cdCAgICAgIH0gZWxzZSBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XG5cdCAgICAgICAgcmV0dXJuIHQ7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHRvcCA9IHBvdygxIC0gdCwgbiksXG5cdCAgICAgICAgICBib3R0b20gPSBwb3codCwgbikgKyB0b3A7XG5cdCAgICAgIHJldHVybiB0b3AgLyBib3R0b207XG5cdCAgICB9LFxuXG5cdCAgICBsbGk4OiBmdW5jdGlvbiBsbGk4KHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCkge1xuXHQgICAgICB2YXIgbnggPSAoeDEgKiB5MiAtIHkxICogeDIpICogKHgzIC0geDQpIC0gKHgxIC0geDIpICogKHgzICogeTQgLSB5MyAqIHg0KSxcblx0ICAgICAgICAgIG55ID0gKHgxICogeTIgLSB5MSAqIHgyKSAqICh5MyAtIHk0KSAtICh5MSAtIHkyKSAqICh4MyAqIHk0IC0geTMgKiB4NCksXG5cdCAgICAgICAgICBkID0gKHgxIC0geDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzIC0geDQpO1xuXHQgICAgICBpZiAoZCA9PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB7IHg6IG54IC8gZCwgeTogbnkgLyBkIH07XG5cdCAgICB9LFxuXG5cdCAgICBsbGk0OiBmdW5jdGlvbiBsbGk0KHAxLCBwMiwgcDMsIHA0KSB7XG5cdCAgICAgIHZhciB4MSA9IHAxLngsXG5cdCAgICAgICAgICB5MSA9IHAxLnksXG5cdCAgICAgICAgICB4MiA9IHAyLngsXG5cdCAgICAgICAgICB5MiA9IHAyLnksXG5cdCAgICAgICAgICB4MyA9IHAzLngsXG5cdCAgICAgICAgICB5MyA9IHAzLnksXG5cdCAgICAgICAgICB4NCA9IHA0LngsXG5cdCAgICAgICAgICB5NCA9IHA0Lnk7XG5cdCAgICAgIHJldHVybiB1dGlscy5sbGk4KHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCk7XG5cdCAgICB9LFxuXG5cdCAgICBsbGk6IGZ1bmN0aW9uIGxsaSh2MSwgdjIpIHtcblx0ICAgICAgcmV0dXJuIHV0aWxzLmxsaTQodjEsIHYxLmMsIHYyLCB2Mi5jKTtcblx0ICAgIH0sXG5cblx0ICAgIG1ha2VsaW5lOiBmdW5jdGlvbiBtYWtlbGluZShwMSwgcDIpIHtcblx0ICAgICAgdmFyIEJlemllciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdCAgICAgIHZhciB4MSA9IHAxLngsXG5cdCAgICAgICAgICB5MSA9IHAxLnksXG5cdCAgICAgICAgICB4MiA9IHAyLngsXG5cdCAgICAgICAgICB5MiA9IHAyLnksXG5cdCAgICAgICAgICBkeCA9ICh4MiAtIHgxKSAvIDMsXG5cdCAgICAgICAgICBkeSA9ICh5MiAtIHkxKSAvIDM7XG5cdCAgICAgIHJldHVybiBuZXcgQmV6aWVyKHgxLCB5MSwgeDEgKyBkeCwgeTEgKyBkeSwgeDEgKyAyICogZHgsIHkxICsgMiAqIGR5LCB4MiwgeTIpO1xuXHQgICAgfSxcblxuXHQgICAgZmluZGJib3g6IGZ1bmN0aW9uIGZpbmRiYm94KHNlY3Rpb25zKSB7XG5cdCAgICAgIHZhciBteCA9IG5NYXgsXG5cdCAgICAgICAgICBteSA9IG5NYXgsXG5cdCAgICAgICAgICBNWCA9IG5NaW4sXG5cdCAgICAgICAgICBNWSA9IG5NaW47XG5cdCAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICB2YXIgYmJveCA9IHMuYmJveCgpO1xuXHQgICAgICAgIGlmIChteCA+IGJib3gueC5taW4pIG14ID0gYmJveC54Lm1pbjtcblx0ICAgICAgICBpZiAobXkgPiBiYm94LnkubWluKSBteSA9IGJib3gueS5taW47XG5cdCAgICAgICAgaWYgKE1YIDwgYmJveC54Lm1heCkgTVggPSBiYm94LngubWF4O1xuXHQgICAgICAgIGlmIChNWSA8IGJib3gueS5tYXgpIE1ZID0gYmJveC55Lm1heDtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgeDogeyBtaW46IG14LCBtaWQ6IChteCArIE1YKSAvIDIsIG1heDogTVgsIHNpemU6IE1YIC0gbXggfSxcblx0ICAgICAgICB5OiB7IG1pbjogbXksIG1pZDogKG15ICsgTVkpIC8gMiwgbWF4OiBNWSwgc2l6ZTogTVkgLSBteSB9XG5cdCAgICAgIH07XG5cdCAgICB9LFxuXG5cdCAgICBzaGFwZWludGVyc2VjdGlvbnM6IGZ1bmN0aW9uIHNoYXBlaW50ZXJzZWN0aW9ucyhzMSwgYmJveDEsIHMyLCBiYm94MiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcblx0ICAgICAgaWYgKCF1dGlscy5iYm94b3ZlcmxhcChiYm94MSwgYmJveDIpKSByZXR1cm4gW107XG5cdCAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gW107XG5cdCAgICAgIHZhciBhMSA9IFtzMS5zdGFydGNhcCwgczEuZm9yd2FyZCwgczEuYmFjaywgczEuZW5kY2FwXTtcblx0ICAgICAgdmFyIGEyID0gW3MyLnN0YXJ0Y2FwLCBzMi5mb3J3YXJkLCBzMi5iYWNrLCBzMi5lbmRjYXBdO1xuXHQgICAgICBhMS5mb3JFYWNoKGZ1bmN0aW9uIChsMSkge1xuXHQgICAgICAgIGlmIChsMS52aXJ0dWFsKSByZXR1cm47XG5cdCAgICAgICAgYTIuZm9yRWFjaChmdW5jdGlvbiAobDIpIHtcblx0ICAgICAgICAgIGlmIChsMi52aXJ0dWFsKSByZXR1cm47XG5cdCAgICAgICAgICB2YXIgaXNzID0gbDEuaW50ZXJzZWN0cyhsMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuXHQgICAgICAgICAgaWYgKGlzcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgIGlzcy5jMSA9IGwxO1xuXHQgICAgICAgICAgICBpc3MuYzIgPSBsMjtcblx0ICAgICAgICAgICAgaXNzLnMxID0gczE7XG5cdCAgICAgICAgICAgIGlzcy5zMiA9IHMyO1xuXHQgICAgICAgICAgICBpbnRlcnNlY3Rpb25zLnB1c2goaXNzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuXHQgICAgfSxcblxuXHQgICAgbWFrZXNoYXBlOiBmdW5jdGlvbiBtYWtlc2hhcGUoZm9yd2FyZCwgYmFjaywgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcblx0ICAgICAgdmFyIGJwbCA9IGJhY2sucG9pbnRzLmxlbmd0aDtcblx0ICAgICAgdmFyIGZwbCA9IGZvcndhcmQucG9pbnRzLmxlbmd0aDtcblx0ICAgICAgdmFyIHN0YXJ0ID0gdXRpbHMubWFrZWxpbmUoYmFjay5wb2ludHNbYnBsIC0gMV0sIGZvcndhcmQucG9pbnRzWzBdKTtcblx0ICAgICAgdmFyIGVuZCA9IHV0aWxzLm1ha2VsaW5lKGZvcndhcmQucG9pbnRzW2ZwbCAtIDFdLCBiYWNrLnBvaW50c1swXSk7XG5cdCAgICAgIHZhciBzaGFwZSA9IHtcblx0ICAgICAgICBzdGFydGNhcDogc3RhcnQsXG5cdCAgICAgICAgZm9yd2FyZDogZm9yd2FyZCxcblx0ICAgICAgICBiYWNrOiBiYWNrLFxuXHQgICAgICAgIGVuZGNhcDogZW5kLFxuXHQgICAgICAgIGJib3g6IHV0aWxzLmZpbmRiYm94KFtzdGFydCwgZm9yd2FyZCwgYmFjaywgZW5kXSlcblx0ICAgICAgfTtcblx0ICAgICAgdmFyIHNlbGYgPSB1dGlscztcblx0ICAgICAgc2hhcGUuaW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uIChzMikge1xuXHQgICAgICAgIHJldHVybiBzZWxmLnNoYXBlaW50ZXJzZWN0aW9ucyhzaGFwZSwgc2hhcGUuYmJveCwgczIsIHMyLmJib3gsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcblx0ICAgICAgfTtcblx0ICAgICAgcmV0dXJuIHNoYXBlO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0bWlubWF4OiBmdW5jdGlvbiBnZXRtaW5tYXgoY3VydmUsIGQsIGxpc3QpIHtcblx0ICAgICAgaWYgKCFsaXN0KSByZXR1cm4geyBtaW46IDAsIG1heDogMCB9O1xuXHQgICAgICB2YXIgbWluID0gbk1heCxcblx0ICAgICAgICAgIG1heCA9IG5NaW4sXG5cdCAgICAgICAgICB0LFxuXHQgICAgICAgICAgYztcblx0ICAgICAgaWYgKGxpc3QuaW5kZXhPZigwKSA9PT0gLTEpIHtcblx0ICAgICAgICBsaXN0ID0gWzBdLmNvbmNhdChsaXN0KTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAobGlzdC5pbmRleE9mKDEpID09PSAtMSkge1xuXHQgICAgICAgIGxpc3QucHVzaCgxKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIHQgPSBsaXN0W2ldO1xuXHQgICAgICAgIGMgPSBjdXJ2ZS5nZXQodCk7XG5cdCAgICAgICAgaWYgKGNbZF0gPCBtaW4pIHtcblx0ICAgICAgICAgIG1pbiA9IGNbZF07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChjW2RdID4gbWF4KSB7XG5cdCAgICAgICAgICBtYXggPSBjW2RdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4geyBtaW46IG1pbiwgbWlkOiAobWluICsgbWF4KSAvIDIsIG1heDogbWF4LCBzaXplOiBtYXggLSBtaW4gfTtcblx0ICAgIH0sXG5cblx0ICAgIGFsaWduOiBmdW5jdGlvbiBhbGlnbihwb2ludHMsIGxpbmUpIHtcblx0ICAgICAgdmFyIHR4ID0gbGluZS5wMS54LFxuXHQgICAgICAgICAgdHkgPSBsaW5lLnAxLnksXG5cdCAgICAgICAgICBhID0gLWF0YW4yKGxpbmUucDIueSAtIHR5LCBsaW5lLnAyLnggLSB0eCksXG5cdCAgICAgICAgICBkID0gZnVuY3Rpb24gZCh2KSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgIHg6ICh2LnggLSB0eCkgKiBjb3MoYSkgLSAodi55IC0gdHkpICogc2luKGEpLFxuXHQgICAgICAgICAgeTogKHYueCAtIHR4KSAqIHNpbihhKSArICh2LnkgLSB0eSkgKiBjb3MoYSlcblx0ICAgICAgICB9O1xuXHQgICAgICB9O1xuXHQgICAgICByZXR1cm4gcG9pbnRzLm1hcChkKTtcblx0ICAgIH0sXG5cblx0ICAgIHJvb3RzOiBmdW5jdGlvbiByb290cyhwb2ludHMsIGxpbmUpIHtcblx0ICAgICAgbGluZSA9IGxpbmUgfHwgeyBwMTogeyB4OiAwLCB5OiAwIH0sIHAyOiB7IHg6IDEsIHk6IDAgfSB9O1xuXHQgICAgICB2YXIgb3JkZXIgPSBwb2ludHMubGVuZ3RoIC0gMTtcblx0ICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIGxpbmUpO1xuXHQgICAgICB2YXIgcmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKHQpIHtcblx0ICAgICAgICByZXR1cm4gMCA8PSB0ICYmIHQgPD0gMTtcblx0ICAgICAgfTtcblxuXHQgICAgICBpZiAob3JkZXIgPT09IDIpIHtcblx0ICAgICAgICB2YXIgYSA9IHBbMF0ueSxcblx0ICAgICAgICAgICAgYiA9IHBbMV0ueSxcblx0ICAgICAgICAgICAgYyA9IHBbMl0ueSxcblx0ICAgICAgICAgICAgZCA9IGEgLSAyICogYiArIGM7XG5cdCAgICAgICAgaWYgKGQgIT09IDApIHtcblx0ICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIgKiBiIC0gYSAqIGMpLFxuXHQgICAgICAgICAgICAgIG0yID0gLWEgKyBiLFxuXHQgICAgICAgICAgICAgIHYxID0gLShtMSArIG0yKSAvIGQsXG5cdCAgICAgICAgICAgICAgdjIgPSAtKC1tMSArIG0yKSAvIGQ7XG5cdCAgICAgICAgICByZXR1cm4gW3YxLCB2Ml0uZmlsdGVyKHJlZHVjZSk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChiICE9PSBjICYmIGQgPT09IDApIHtcblx0ICAgICAgICAgIHJldHVybiBbKDIgKiBiIC0gYykgLyAoMiAqIGIgLSAyICogYyldLmZpbHRlcihyZWR1Y2UpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gW107XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBzZWUgaHR0cDovL3d3dy50cmFuczRtaW5kLmNvbS9wZXJzb25hbF9kZXZlbG9wbWVudC9tYXRoZW1hdGljcy9wb2x5bm9taWFscy9jdWJpY0FsZ2VicmEuaHRtXG5cdCAgICAgIHZhciBwYSA9IHBbMF0ueSxcblx0ICAgICAgICAgIHBiID0gcFsxXS55LFxuXHQgICAgICAgICAgcGMgPSBwWzJdLnksXG5cdCAgICAgICAgICBwZCA9IHBbM10ueSxcblx0ICAgICAgICAgIGQgPSAtcGEgKyAzICogcGIgLSAzICogcGMgKyBwZCxcblx0ICAgICAgICAgIGEgPSAzICogcGEgLSA2ICogcGIgKyAzICogcGMsXG5cdCAgICAgICAgICBiID0gLTMgKiBwYSArIDMgKiBwYixcblx0ICAgICAgICAgIGMgPSBwYTtcblxuXHQgICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLCAwKSkge1xuXHQgICAgICAgIC8vIHRoaXMgaXMgbm90IGEgY3ViaWMgY3VydmUuXG5cdCAgICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkoYSwgMCkpIHtcblx0ICAgICAgICAgIC8vIGluIGZhY3QsIHRoaXMgaXMgbm90IGEgcXVhZHJhdGljIGN1cnZlIGVpdGhlci5cblx0ICAgICAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KGIsIDApKSB7XG5cdCAgICAgICAgICAgIC8vIGluIGZhY3QgaW4gZmFjdCwgdGhlcmUgYXJlIG5vIHNvbHV0aW9ucy5cblx0ICAgICAgICAgICAgcmV0dXJuIFtdO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gbGluZWFyIHNvbHV0aW9uOlxuXHQgICAgICAgICAgcmV0dXJuIFstYyAvIGJdLmZpbHRlcihyZWR1Y2UpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBxdWFkcmF0aWMgc29sdXRpb246XG5cdCAgICAgICAgdmFyIHEgPSBzcXJ0KGIgKiBiIC0gNCAqIGEgKiBjKSxcblx0ICAgICAgICAgICAgYTIgPSAyICogYTtcblx0ICAgICAgICByZXR1cm4gWyhxIC0gYikgLyBhMiwgKC1iIC0gcSkgLyBhMl0uZmlsdGVyKHJlZHVjZSk7XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBhdCB0aGlzIHBvaW50LCB3ZSBrbm93IHdlIG5lZWQgYSBjdWJpYyBzb2x1dGlvbjpcblxuXHQgICAgICBhIC89IGQ7XG5cdCAgICAgIGIgLz0gZDtcblx0ICAgICAgYyAvPSBkO1xuXG5cdCAgICAgIHZhciBwID0gKDMgKiBiIC0gYSAqIGEpIC8gMyxcblx0ICAgICAgICAgIHAzID0gcCAvIDMsXG5cdCAgICAgICAgICBxID0gKDIgKiBhICogYSAqIGEgLSA5ICogYSAqIGIgKyAyNyAqIGMpIC8gMjcsXG5cdCAgICAgICAgICBxMiA9IHEgLyAyLFxuXHQgICAgICAgICAgZGlzY3JpbWluYW50ID0gcTIgKiBxMiArIHAzICogcDMgKiBwMyxcblx0ICAgICAgICAgIHUxLFxuXHQgICAgICAgICAgdjEsXG5cdCAgICAgICAgICB4MSxcblx0ICAgICAgICAgIHgyLFxuXHQgICAgICAgICAgeDM7XG5cdCAgICAgIGlmIChkaXNjcmltaW5hbnQgPCAwKSB7XG5cdCAgICAgICAgdmFyIG1wMyA9IC1wIC8gMyxcblx0ICAgICAgICAgICAgbXAzMyA9IG1wMyAqIG1wMyAqIG1wMyxcblx0ICAgICAgICAgICAgciA9IHNxcnQobXAzMyksXG5cdCAgICAgICAgICAgIHQgPSAtcSAvICgyICogciksXG5cdCAgICAgICAgICAgIGNvc3BoaSA9IHQgPCAtMSA/IC0xIDogdCA+IDEgPyAxIDogdCxcblx0ICAgICAgICAgICAgcGhpID0gYWNvcyhjb3NwaGkpLFxuXHQgICAgICAgICAgICBjcnRyID0gY3J0KHIpLFxuXHQgICAgICAgICAgICB0MSA9IDIgKiBjcnRyO1xuXHQgICAgICAgIHgxID0gdDEgKiBjb3MocGhpIC8gMykgLSBhIC8gMztcblx0ICAgICAgICB4MiA9IHQxICogY29zKChwaGkgKyB0YXUpIC8gMykgLSBhIC8gMztcblx0ICAgICAgICB4MyA9IHQxICogY29zKChwaGkgKyAyICogdGF1KSAvIDMpIC0gYSAvIDM7XG5cdCAgICAgICAgcmV0dXJuIFt4MSwgeDIsIHgzXS5maWx0ZXIocmVkdWNlKTtcblx0ICAgICAgfSBlbHNlIGlmIChkaXNjcmltaW5hbnQgPT09IDApIHtcblx0ICAgICAgICB1MSA9IHEyIDwgMCA/IGNydCgtcTIpIDogLWNydChxMik7XG5cdCAgICAgICAgeDEgPSAyICogdTEgLSBhIC8gMztcblx0ICAgICAgICB4MiA9IC11MSAtIGEgLyAzO1xuXHQgICAgICAgIHJldHVybiBbeDEsIHgyXS5maWx0ZXIocmVkdWNlKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgc2QgPSBzcXJ0KGRpc2NyaW1pbmFudCk7XG5cdCAgICAgICAgdTEgPSBjcnQoLXEyICsgc2QpO1xuXHQgICAgICAgIHYxID0gY3J0KHEyICsgc2QpO1xuXHQgICAgICAgIHJldHVybiBbdTEgLSB2MSAtIGEgLyAzXS5maWx0ZXIocmVkdWNlKTtcblx0ICAgICAgfVxuXHQgICAgfSxcblxuXHQgICAgZHJvb3RzOiBmdW5jdGlvbiBkcm9vdHMocCkge1xuXHQgICAgICAvLyBxdWFkcmF0aWMgcm9vdHMgYXJlIGVhc3lcblx0ICAgICAgaWYgKHAubGVuZ3RoID09PSAzKSB7XG5cdCAgICAgICAgdmFyIGEgPSBwWzBdLFxuXHQgICAgICAgICAgICBiID0gcFsxXSxcblx0ICAgICAgICAgICAgYyA9IHBbMl0sXG5cdCAgICAgICAgICAgIGQgPSBhIC0gMiAqIGIgKyBjO1xuXHQgICAgICAgIGlmIChkICE9PSAwKSB7XG5cdCAgICAgICAgICB2YXIgbTEgPSAtc3FydChiICogYiAtIGEgKiBjKSxcblx0ICAgICAgICAgICAgICBtMiA9IC1hICsgYixcblx0ICAgICAgICAgICAgICB2MSA9IC0obTEgKyBtMikgLyBkLFxuXHQgICAgICAgICAgICAgIHYyID0gLSgtbTEgKyBtMikgLyBkO1xuXHQgICAgICAgICAgcmV0dXJuIFt2MSwgdjJdO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoYiAhPT0gYyAmJiBkID09PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm4gWygyICogYiAtIGMpIC8gKDIgKiAoYiAtIGMpKV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBbXTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIGxpbmVhciByb290cyBhcmUgZXZlbiBlYXNpZXJcblx0ICAgICAgaWYgKHAubGVuZ3RoID09PSAyKSB7XG5cdCAgICAgICAgdmFyIGEgPSBwWzBdLFxuXHQgICAgICAgICAgICBiID0gcFsxXTtcblx0ICAgICAgICBpZiAoYSAhPT0gYikge1xuXHQgICAgICAgICAgcmV0dXJuIFthIC8gKGEgLSBiKV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBbXTtcblx0ICAgICAgfVxuXHQgICAgfSxcblxuXHQgICAgY3VydmF0dXJlOiBmdW5jdGlvbiBjdXJ2YXR1cmUodCwgcG9pbnRzLCBfM2QsIGtPbmx5KSB7XG5cdCAgICAgIHZhciBkcG9pbnRzID0gdXRpbHMuZGVyaXZlKHBvaW50cyk7XG5cdCAgICAgIHZhciBkMSA9IGRwb2ludHNbMF07XG5cdCAgICAgIHZhciBkMiA9IGRwb2ludHNbMV07XG5cdCAgICAgIHZhciBudW0sXG5cdCAgICAgICAgICBkbm0sXG5cdCAgICAgICAgICBhZGssXG5cdCAgICAgICAgICBkayxcblx0ICAgICAgICAgIGsgPSAwLFxuXHQgICAgICAgICAgciA9IDA7XG5cblx0ICAgICAgLy9cblx0ICAgICAgLy8gV2UncmUgdXNpbmcgdGhlIGZvbGxvd2luZyBmb3JtdWxhIGZvciBjdXJ2YXR1cmU6XG5cdCAgICAgIC8vXG5cdCAgICAgIC8vICAgICAgICAgICAgICB4J3lcIiAtIHkneFwiXG5cdCAgICAgIC8vICAgayh0KSA9IC0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgICAgICAvLyAgICAgICAgICAgKHgnwrIgKyB5J8KyKV4oMy8yKVxuXHQgICAgICAvL1xuXHQgICAgICAvLyBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JhZGl1c19vZl9jdXJ2YXR1cmUjRGVmaW5pdGlvblxuXHQgICAgICAvL1xuXHQgICAgICAvLyBXaXRoIGl0IGNvcnJlc3BvbmRpbmcgM0QgY291bnRlcnBhcnQ6XG5cdCAgICAgIC8vXG5cdCAgICAgIC8vICAgICAgICAgIHNxcnQoICh5J3pcIiAtIHlcInonKcKyICsgKHoneFwiIC0gelwieCcpwrIgKyAoeCd5XCIgLSB4XCJ5JynCsilcblx0ICAgICAgLy8gICBrKHQpID0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICh4J8KyICsgeSfCsiArIHonwrIpXigzLzIpXG5cdCAgICAgIC8vXG5cblx0ICAgICAgdmFyIGQgPSB1dGlscy5jb21wdXRlKHQsIGQxKTtcblx0ICAgICAgdmFyIGRkID0gdXRpbHMuY29tcHV0ZSh0LCBkMik7XG5cdCAgICAgIHZhciBxZHN1bSA9IGQueCAqIGQueCArIGQueSAqIGQueTtcblx0ICAgICAgaWYgKF8zZCkge1xuXHQgICAgICAgIG51bSA9IHNxcnQocG93KGQueSAqIGRkLnogLSBkZC55ICogZC56LCAyKSArIHBvdyhkLnogKiBkZC54IC0gZGQueiAqIGQueCwgMikgKyBwb3coZC54ICogZGQueSAtIGRkLnggKiBkLnksIDIpKTtcblx0ICAgICAgICBkbm0gPSBwb3cocWRzdW0gKyBkLnogKiBkLnosIDMgLyAyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBudW0gPSBkLnggKiBkZC55IC0gZC55ICogZGQueDtcblx0ICAgICAgICBkbm0gPSBwb3cocWRzdW0sIDMgLyAyKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmIChudW0gPT09IDAgfHwgZG5tID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuIHsgazogMCwgcjogMCB9O1xuXHQgICAgICB9XG5cblx0ICAgICAgayA9IG51bSAvIGRubTtcblx0ICAgICAgciA9IGRubSAvIG51bTtcblxuXHQgICAgICAvLyBXZSdyZSBhbHNvIGNvbXB1dGluZyB0aGUgZGVyaXZhdGl2ZSBvZiBrYXBwYSwgYmVjYXVzZVxuXHQgICAgICAvLyB0aGVyZSBpcyB2YWx1ZSBpbiBrbm93aW5nIHRoZSByYXRlIG9mIGNoYW5nZSBmb3IgdGhlXG5cdCAgICAgIC8vIGN1cnZhdHVyZSBhbG9uZyB0aGUgY3VydmUuIEFuZCB3ZSdyZSBqdXN0IGdvaW5nIHRvXG5cdCAgICAgIC8vIGJhbGxwYXJrIGl0IGJhc2VkIG9uIGFuIGVwc2lsb24uXG5cdCAgICAgIGlmICgha09ubHkpIHtcblx0ICAgICAgICAvLyBjb21wdXRlIGsnKHQpIGJhc2VkIG9uIHRoZSBpbnRlcnZhbCBiZWZvcmUsIGFuZCBhZnRlciBpdCxcblx0ICAgICAgICAvLyB0byBhdCBsZWFzdCB0cnkgdG8gbm90IGludHJvZHVjZSBmb3J3YXJkL2JhY2t3YXJkIHBhc3MgYmlhcy5cblx0ICAgICAgICB2YXIgcGsgPSB1dGlscy5jdXJ2YXR1cmUodCAtIDAuMDAxLCBwb2ludHMsIF8zZCwgdHJ1ZSkuaztcblx0ICAgICAgICB2YXIgbmsgPSB1dGlscy5jdXJ2YXR1cmUodCArIDAuMDAxLCBwb2ludHMsIF8zZCwgdHJ1ZSkuaztcblx0ICAgICAgICBkayA9IChuayAtIGsgKyAoayAtIHBrKSkgLyAyO1xuXHQgICAgICAgIGFkayA9IChhYnMobmsgLSBrKSArIGFicyhrIC0gcGspKSAvIDI7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4geyBrOiBrLCByOiByLCBkazogZGssIGFkazogYWRrIH07XG5cdCAgICB9LFxuXG5cdCAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24gaW5mbGVjdGlvbnMocG9pbnRzKSB7XG5cdCAgICAgIGlmIChwb2ludHMubGVuZ3RoIDwgNCkgcmV0dXJuIFtdO1xuXG5cdCAgICAgIC8vIEZJWE1FOiBUT0RPOiBhZGQgaW4gaW5mbGVjdGlvbiBhYnN0cmFjdGlvbiBmb3IgcXVhcnRpYysgY3VydmVzP1xuXG5cdCAgICAgIHZhciBwID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7IHAxOiBwb2ludHNbMF0sIHAyOiBwb2ludHMuc2xpY2UoLTEpWzBdIH0pLFxuXHQgICAgICAgICAgYSA9IHBbMl0ueCAqIHBbMV0ueSxcblx0ICAgICAgICAgIGIgPSBwWzNdLnggKiBwWzFdLnksXG5cdCAgICAgICAgICBjID0gcFsxXS54ICogcFsyXS55LFxuXHQgICAgICAgICAgZCA9IHBbM10ueCAqIHBbMl0ueSxcblx0ICAgICAgICAgIHYxID0gMTggKiAoLTMgKiBhICsgMiAqIGIgKyAzICogYyAtIGQpLFxuXHQgICAgICAgICAgdjIgPSAxOCAqICgzICogYSAtIGIgLSAzICogYyksXG5cdCAgICAgICAgICB2MyA9IDE4ICogKGMgLSBhKTtcblxuXHQgICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseSh2MSwgMCkpIHtcblx0ICAgICAgICBpZiAoIXV0aWxzLmFwcHJveGltYXRlbHkodjIsIDApKSB7XG5cdCAgICAgICAgICB2YXIgdCA9IC12MyAvIHYyO1xuXHQgICAgICAgICAgaWYgKDAgPD0gdCAmJiB0IDw9IDEpIHJldHVybiBbdF07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBbXTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciB0cm0gPSB2MiAqIHYyIC0gNCAqIHYxICogdjMsXG5cdCAgICAgICAgICBzcSA9IE1hdGguc3FydCh0cm0pLFxuXHQgICAgICAgICAgZCA9IDIgKiB2MTtcblxuXHQgICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLCAwKSkgcmV0dXJuIFtdO1xuXG5cdCAgICAgIHJldHVybiBbKHNxIC0gdjIpIC8gZCwgLSh2MiArIHNxKSAvIGRdLmZpbHRlcihmdW5jdGlvbiAocikge1xuXHQgICAgICAgIHJldHVybiAwIDw9IHIgJiYgciA8PSAxO1xuXHQgICAgICB9KTtcblx0ICAgIH0sXG5cblx0ICAgIGJib3hvdmVybGFwOiBmdW5jdGlvbiBiYm94b3ZlcmxhcChiMSwgYjIpIHtcblx0ICAgICAgdmFyIGRpbXMgPSBbXCJ4XCIsIFwieVwiXSxcblx0ICAgICAgICAgIGxlbiA9IGRpbXMubGVuZ3RoLFxuXHQgICAgICAgICAgaSxcblx0ICAgICAgICAgIGRpbSxcblx0ICAgICAgICAgIGwsXG5cdCAgICAgICAgICB0LFxuXHQgICAgICAgICAgZDtcblx0ICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgZGltID0gZGltc1tpXTtcblx0ICAgICAgICBsID0gYjFbZGltXS5taWQ7XG5cdCAgICAgICAgdCA9IGIyW2RpbV0ubWlkO1xuXHQgICAgICAgIGQgPSAoYjFbZGltXS5zaXplICsgYjJbZGltXS5zaXplKSAvIDI7XG5cdCAgICAgICAgaWYgKGFicyhsIC0gdCkgPj0gZCkgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSxcblxuXHQgICAgZXhwYW5kYm94OiBmdW5jdGlvbiBleHBhbmRib3goYmJveCwgX2Jib3gpIHtcblx0ICAgICAgaWYgKF9iYm94LngubWluIDwgYmJveC54Lm1pbikge1xuXHQgICAgICAgIGJib3gueC5taW4gPSBfYmJveC54Lm1pbjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoX2Jib3gueS5taW4gPCBiYm94LnkubWluKSB7XG5cdCAgICAgICAgYmJveC55Lm1pbiA9IF9iYm94LnkubWluO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChfYmJveC56ICYmIF9iYm94LnoubWluIDwgYmJveC56Lm1pbikge1xuXHQgICAgICAgIGJib3guei5taW4gPSBfYmJveC56Lm1pbjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoX2Jib3gueC5tYXggPiBiYm94LngubWF4KSB7XG5cdCAgICAgICAgYmJveC54Lm1heCA9IF9iYm94LngubWF4O1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChfYmJveC55Lm1heCA+IGJib3gueS5tYXgpIHtcblx0ICAgICAgICBiYm94LnkubWF4ID0gX2Jib3gueS5tYXg7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKF9iYm94LnogJiYgX2Jib3guei5tYXggPiBiYm94LnoubWF4KSB7XG5cdCAgICAgICAgYmJveC56Lm1heCA9IF9iYm94LnoubWF4O1xuXHQgICAgICB9XG5cdCAgICAgIGJib3gueC5taWQgPSAoYmJveC54Lm1pbiArIGJib3gueC5tYXgpIC8gMjtcblx0ICAgICAgYmJveC55Lm1pZCA9IChiYm94LnkubWluICsgYmJveC55Lm1heCkgLyAyO1xuXHQgICAgICBpZiAoYmJveC56KSB7XG5cdCAgICAgICAgYmJveC56Lm1pZCA9IChiYm94LnoubWluICsgYmJveC56Lm1heCkgLyAyO1xuXHQgICAgICB9XG5cdCAgICAgIGJib3gueC5zaXplID0gYmJveC54Lm1heCAtIGJib3gueC5taW47XG5cdCAgICAgIGJib3gueS5zaXplID0gYmJveC55Lm1heCAtIGJib3gueS5taW47XG5cdCAgICAgIGlmIChiYm94LnopIHtcblx0ICAgICAgICBiYm94Lnouc2l6ZSA9IGJib3guei5tYXggLSBiYm94LnoubWluO1xuXHQgICAgICB9XG5cdCAgICB9LFxuXG5cdCAgICBwYWlyaXRlcmF0aW9uOiBmdW5jdGlvbiBwYWlyaXRlcmF0aW9uKGMxLCBjMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcblx0ICAgICAgdmFyIGMxYiA9IGMxLmJib3goKSxcblx0ICAgICAgICAgIGMyYiA9IGMyLmJib3goKSxcblx0ICAgICAgICAgIHIgPSAxMDAwMDAsXG5cdCAgICAgICAgICB0aHJlc2hvbGQgPSBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCB8fCAwLjU7XG5cdCAgICAgIGlmIChjMWIueC5zaXplICsgYzFiLnkuc2l6ZSA8IHRocmVzaG9sZCAmJiBjMmIueC5zaXplICsgYzJiLnkuc2l6ZSA8IHRocmVzaG9sZCkge1xuXHQgICAgICAgIHJldHVybiBbKHIgKiAoYzEuX3QxICsgYzEuX3QyKSAvIDIgfCAwKSAvIHIgKyBcIi9cIiArIChyICogKGMyLl90MSArIGMyLl90MikgLyAyIHwgMCkgLyByXTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgY2MxID0gYzEuc3BsaXQoMC41KSxcblx0ICAgICAgICAgIGNjMiA9IGMyLnNwbGl0KDAuNSksXG5cdCAgICAgICAgICBwYWlycyA9IFt7IGxlZnQ6IGNjMS5sZWZ0LCByaWdodDogY2MyLmxlZnQgfSwgeyBsZWZ0OiBjYzEubGVmdCwgcmlnaHQ6IGNjMi5yaWdodCB9LCB7IGxlZnQ6IGNjMS5yaWdodCwgcmlnaHQ6IGNjMi5yaWdodCB9LCB7IGxlZnQ6IGNjMS5yaWdodCwgcmlnaHQ6IGNjMi5sZWZ0IH1dO1xuXHQgICAgICBwYWlycyA9IHBhaXJzLmZpbHRlcihmdW5jdGlvbiAocGFpcikge1xuXHQgICAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChwYWlyLmxlZnQuYmJveCgpLCBwYWlyLnJpZ2h0LmJib3goKSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXHQgICAgICBpZiAocGFpcnMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0cztcblx0ICAgICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuXHQgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCh1dGlscy5wYWlyaXRlcmF0aW9uKHBhaXIubGVmdCwgcGFpci5yaWdodCwgdGhyZXNob2xkKSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKHYsIGkpIHtcblx0ICAgICAgICByZXR1cm4gcmVzdWx0cy5pbmRleE9mKHYpID09PSBpO1xuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRjY2VudGVyOiBmdW5jdGlvbiBnZXRjY2VudGVyKHAxLCBwMiwgcDMpIHtcblx0ICAgICAgdmFyIGR4MSA9IHAyLnggLSBwMS54LFxuXHQgICAgICAgICAgZHkxID0gcDIueSAtIHAxLnksXG5cdCAgICAgICAgICBkeDIgPSBwMy54IC0gcDIueCxcblx0ICAgICAgICAgIGR5MiA9IHAzLnkgLSBwMi55O1xuXHQgICAgICB2YXIgZHgxcCA9IGR4MSAqIGNvcyhxdWFydCkgLSBkeTEgKiBzaW4ocXVhcnQpLFxuXHQgICAgICAgICAgZHkxcCA9IGR4MSAqIHNpbihxdWFydCkgKyBkeTEgKiBjb3MocXVhcnQpLFxuXHQgICAgICAgICAgZHgycCA9IGR4MiAqIGNvcyhxdWFydCkgLSBkeTIgKiBzaW4ocXVhcnQpLFxuXHQgICAgICAgICAgZHkycCA9IGR4MiAqIHNpbihxdWFydCkgKyBkeTIgKiBjb3MocXVhcnQpO1xuXHQgICAgICAvLyBjaG9yZCBtaWRwb2ludHNcblx0ICAgICAgdmFyIG14MSA9IChwMS54ICsgcDIueCkgLyAyLFxuXHQgICAgICAgICAgbXkxID0gKHAxLnkgKyBwMi55KSAvIDIsXG5cdCAgICAgICAgICBteDIgPSAocDIueCArIHAzLngpIC8gMixcblx0ICAgICAgICAgIG15MiA9IChwMi55ICsgcDMueSkgLyAyO1xuXHQgICAgICAvLyBtaWRwb2ludCBvZmZzZXRzXG5cdCAgICAgIHZhciBteDFuID0gbXgxICsgZHgxcCxcblx0ICAgICAgICAgIG15MW4gPSBteTEgKyBkeTFwLFxuXHQgICAgICAgICAgbXgybiA9IG14MiArIGR4MnAsXG5cdCAgICAgICAgICBteTJuID0gbXkyICsgZHkycDtcblx0ICAgICAgLy8gaW50ZXJzZWN0aW9uIG9mIHRoZXNlIGxpbmVzOlxuXHQgICAgICB2YXIgYXJjID0gdXRpbHMubGxpOChteDEsIG15MSwgbXgxbiwgbXkxbiwgbXgyLCBteTIsIG14Mm4sIG15Mm4pLFxuXHQgICAgICAgICAgciA9IHV0aWxzLmRpc3QoYXJjLCBwMSksXG5cblx0ICAgICAgLy8gYXJjIHN0YXJ0L2VuZCB2YWx1ZXMsIG92ZXIgbWlkIHBvaW50OlxuXHQgICAgICBzID0gYXRhbjIocDEueSAtIGFyYy55LCBwMS54IC0gYXJjLngpLFxuXHQgICAgICAgICAgbSA9IGF0YW4yKHAyLnkgLSBhcmMueSwgcDIueCAtIGFyYy54KSxcblx0ICAgICAgICAgIGUgPSBhdGFuMihwMy55IC0gYXJjLnksIHAzLnggLSBhcmMueCksXG5cdCAgICAgICAgICBfO1xuXHQgICAgICAvLyBkZXRlcm1pbmUgYXJjIGRpcmVjdGlvbiAoY3cvY2N3IGNvcnJlY3Rpb24pXG5cdCAgICAgIGlmIChzIDwgZSkge1xuXHQgICAgICAgIC8vIGlmIHM8bTxlLCBhcmMocywgZSlcblx0ICAgICAgICAvLyBpZiBtPHM8ZSwgYXJjKGUsIHMgKyB0YXUpXG5cdCAgICAgICAgLy8gaWYgczxlPG0sIGFyYyhlLCBzICsgdGF1KVxuXHQgICAgICAgIGlmIChzID4gbSB8fCBtID4gZSkge1xuXHQgICAgICAgICAgcyArPSB0YXU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChzID4gZSkge1xuXHQgICAgICAgICAgXyA9IGU7XG5cdCAgICAgICAgICBlID0gcztcblx0ICAgICAgICAgIHMgPSBfO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvLyBpZiBlPG08cywgYXJjKGUsIHMpXG5cdCAgICAgICAgLy8gaWYgbTxlPHMsIGFyYyhzLCBlICsgdGF1KVxuXHQgICAgICAgIC8vIGlmIGU8czxtLCBhcmMocywgZSArIHRhdSlcblx0ICAgICAgICBpZiAoZSA8IG0gJiYgbSA8IHMpIHtcblx0ICAgICAgICAgIF8gPSBlO1xuXHQgICAgICAgICAgZSA9IHM7XG5cdCAgICAgICAgICBzID0gXztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZSArPSB0YXU7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIC8vIGFzc2lnbiBhbmQgZG9uZS5cblx0ICAgICAgYXJjLnMgPSBzO1xuXHQgICAgICBhcmMuZSA9IGU7XG5cdCAgICAgIGFyYy5yID0gcjtcblx0ICAgICAgcmV0dXJuIGFyYztcblx0ICAgIH0sXG5cblx0ICAgIG51bWJlclNvcnQ6IGZ1bmN0aW9uIG51bWJlclNvcnQoYSwgYikge1xuXHQgICAgICByZXR1cm4gYSAtIGI7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIG1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG5cdH0pKCk7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgXCJ1c2Ugc3RyaWN0XCI7XG5cblx0ICB2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdCAgLyoqXG5cdCAgICogUG9seSBCZXppZXJcblx0ICAgKiBAcGFyYW0ge1t0eXBlXX0gY3VydmVzIFtkZXNjcmlwdGlvbl1cblx0ICAgKi9cblx0ICB2YXIgUG9seUJlemllciA9IGZ1bmN0aW9uIFBvbHlCZXppZXIoY3VydmVzKSB7XG5cdCAgICB0aGlzLmN1cnZlcyA9IFtdO1xuXHQgICAgdGhpcy5fM2QgPSBmYWxzZTtcblx0ICAgIGlmICghIWN1cnZlcykge1xuXHQgICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcblx0ICAgICAgdGhpcy5fM2QgPSB0aGlzLmN1cnZlc1swXS5fM2Q7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIFBvbHlCZXppZXIucHJvdG90eXBlID0ge1xuXHQgICAgdmFsdWVPZjogZnVuY3Rpb24gdmFsdWVPZigpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgICAgIHJldHVybiBcIltcIiArIHRoaXMuY3VydmVzLm1hcChmdW5jdGlvbiAoY3VydmUpIHtcblx0ICAgICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcoY3VydmUucG9pbnRzKTtcblx0ICAgICAgfSkuam9pbihcIiwgXCIpICsgXCJdXCI7XG5cdCAgICB9LFxuXHQgICAgYWRkQ3VydmU6IGZ1bmN0aW9uIGFkZEN1cnZlKGN1cnZlKSB7XG5cdCAgICAgIHRoaXMuY3VydmVzLnB1c2goY3VydmUpO1xuXHQgICAgICB0aGlzLl8zZCA9IHRoaXMuXzNkIHx8IGN1cnZlLl8zZDtcblx0ICAgIH0sXG5cdCAgICBsZW5ndGg6IGZ1bmN0aW9uIGxlbmd0aCgpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuY3VydmVzLm1hcChmdW5jdGlvbiAodikge1xuXHQgICAgICAgIHJldHVybiB2Lmxlbmd0aCgpO1xuXHQgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICByZXR1cm4gYSArIGI7XG5cdCAgICAgIH0pO1xuXHQgICAgfSxcblx0ICAgIGN1cnZlOiBmdW5jdGlvbiBjdXJ2ZShpZHgpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuY3VydmVzW2lkeF07XG5cdCAgICB9LFxuXHQgICAgYmJveDogZnVuY3Rpb24gYmJveCgpIHtcblx0ICAgICAgdmFyIGMgPSB0aGlzLmN1cnZlcztcblx0ICAgICAgdmFyIGJib3ggPSBjWzBdLmJib3goKTtcblx0ICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdXRpbHMuZXhwYW5kYm94KGJib3gsIGNbaV0uYmJveCgpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gYmJveDtcblx0ICAgIH0sXG5cdCAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChkKSB7XG5cdCAgICAgIHZhciBvZmZzZXQgPSBbXTtcblx0ICAgICAgdGhpcy5jdXJ2ZXMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuXHQgICAgICAgIG9mZnNldCA9IG9mZnNldC5jb25jYXQodi5vZmZzZXQoZCkpO1xuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuIG5ldyBQb2x5QmV6aWVyKG9mZnNldCk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIG1vZHVsZS5leHBvcnRzID0gUG9seUJlemllcjtcblx0fSkoKTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBub3JtYWxpc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBNID0geyB4OiBmYWxzZSwgeTogZmFsc2UgfTtcblxuXHRmdW5jdGlvbiBtYWtlQmV6aWVyKEJlemllciwgdGVybSwgdmFsdWVzKSB7XG5cdCAgaWYgKHRlcm0gPT09ICdaJykgcmV0dXJuO1xuXHQgIGlmICh0ZXJtID09PSAnTScpIHtcblx0ICAgIE0gPSB7IHg6IHZhbHVlc1swXSwgeTogdmFsdWVzWzFdIH07XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHQgIC8vIEVTNzogbmV3IEJlemllcihNLngsIE0ueSwgLi4udmFsdWVzKVxuXHQgIHZhciBjdmFsdWVzID0gW2ZhbHNlLCBNLngsIE0ueV0uY29uY2F0KHZhbHVlcyk7XG5cdCAgdmFyIFByZWJvdW5kQ29uc3RydWN0b3IgPSBCZXppZXIuYmluZC5hcHBseShCZXppZXIsIGN2YWx1ZXMpO1xuXHQgIHZhciBjdXJ2ZSA9IG5ldyBQcmVib3VuZENvbnN0cnVjdG9yKCk7XG5cdCAgdmFyIGxhc3QgPSB2YWx1ZXMuc2xpY2UoLTIpO1xuXHQgIE0gPSB7IHg6IGxhc3RbMF0sIHk6IGxhc3RbMV0gfTtcblx0ICByZXR1cm4gY3VydmU7XG5cdH1cblxuXHRmdW5jdGlvbiBjb252ZXJ0UGF0aChCZXppZXIsIGQpIHtcblx0ICB2YXIgdGVybXMgPSBub3JtYWxpc2UoZCkuc3BsaXQoXCIgXCIpLFxuXHQgICAgICB0ZXJtLFxuXHQgICAgICBtYXRjaGVyID0gbmV3IFJlZ0V4cChcIltNTENRWl1cIiwgXCJcIiksXG5cdCAgICAgIHNlZ21lbnQsXG5cdCAgICAgIHZhbHVlcyxcblx0ICAgICAgc2VnbWVudHMgPSBbXSxcblx0ICAgICAgQVJHUyA9IHsgXCJDXCI6IDYsIFwiUVwiOiA0LCBcIkxcIjogMiwgXCJNXCI6IDIgfTtcblxuXHQgIHdoaWxlICh0ZXJtcy5sZW5ndGgpIHtcblx0ICAgIHRlcm0gPSB0ZXJtcy5zcGxpY2UoMCwgMSlbMF07XG5cdCAgICBpZiAobWF0Y2hlci50ZXN0KHRlcm0pKSB7XG5cdCAgICAgIHZhbHVlcyA9IHRlcm1zLnNwbGljZSgwLCBBUkdTW3Rlcm1dKS5tYXAocGFyc2VGbG9hdCk7XG5cdCAgICAgIHNlZ21lbnQgPSBtYWtlQmV6aWVyKEJlemllciwgdGVybSwgdmFsdWVzKTtcblx0ICAgICAgaWYgKHNlZ21lbnQpIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG5ldyBCZXppZXIuUG9seUJlemllcihzZWdtZW50cyk7XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRQYXRoO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvKipcblx0ICogTm9ybWFsaXNlIGFuIFNWRyBwYXRoIHRvIGFic29sdXRlIGNvb3JkaW5hdGVzXG5cdCAqIGFuZCBmdWxsIGNvbW1hbmRzLCByYXRoZXIgdGhhbiByZWxhdGl2ZSBjb29yZGluYXRlc1xuXHQgKiBhbmQvb3Igc2hvcnRjdXQgY29tbWFuZHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBub3JtYWxpemVQYXRoKGQpIHtcblx0ICAvLyBwcmVwcm9jZXNzIFwiZFwiIHNvIHRoYXQgd2UgaGF2ZSBzcGFjZXMgYmV0d2VlbiB2YWx1ZXNcblx0ICBkID0gZC5yZXBsYWNlKC8sL2csIFwiIFwiKSAvLyByZXBsYWNlIGNvbW1hcyB3aXRoIHNwYWNlc1xuXHQgIC5yZXBsYWNlKC8tL2csIFwiIC0gXCIpIC8vIGFkZCBzcGFjaW5nIGFyb3VuZCBtaW51cyBzaWduc1xuXHQgIC5yZXBsYWNlKC8tXFxzKy9nLCBcIi1cIikgLy8gcmVtb3ZlIHNwYWNpbmcgdG8gdGhlIHJpZ2h0IG9mIG1pbnVzIHNpZ25zLlxuXHQgIC5yZXBsYWNlKC8oW2EtekEtWl0pL2csIFwiICQxIFwiKTtcblxuXHQgIC8vIHNldCB1cCB0aGUgdmFyaWFibGVzIHVzZWQgaW4gdGhpcyBmdW5jdGlvblxuXHQgIHZhciBpbnN0cnVjdGlvbnMgPSBkLnJlcGxhY2UoLyhbYS16QS1aXSlcXHM/L2csIFwifCQxXCIpLnNwbGl0KFwifFwiKSxcblx0ICAgICAgaW5zdHJ1Y3Rpb25MZW5ndGggPSBpbnN0cnVjdGlvbnMubGVuZ3RoLFxuXHQgICAgICBpLFxuXHQgICAgICBpbnN0cnVjdGlvbixcblx0ICAgICAgb3AsXG5cdCAgICAgIGxvcCxcblx0ICAgICAgYXJncyA9IFtdLFxuXHQgICAgICBhbGVuLFxuXHQgICAgICBhLFxuXHQgICAgICBzeCA9IDAsXG5cdCAgICAgIHN5ID0gMCxcblx0ICAgICAgeCA9IDAsXG5cdCAgICAgIHkgPSAwLFxuXHQgICAgICBjeCA9IDAsXG5cdCAgICAgIGN5ID0gMCxcblx0ICAgICAgY3gyID0gMCxcblx0ICAgICAgY3kyID0gMCxcblx0ICAgICAgbm9ybWFsaXplZCA9IFwiXCI7XG5cblx0ICAvLyB3ZSBydW4gdGhyb3VnaCB0aGUgaW5zdHJ1Y3Rpb24gbGlzdCBzdGFydGluZyBhdCAxLCBub3QgMCxcblx0ICAvLyBiZWNhdXNlIHdlIHNwbGl0IHVwIFwifE0geCB5IC4uLi5cIiBzbyB0aGUgZmlyc3QgZWxlbWVudCB3aWxsXG5cdCAgLy8gYWx3YXlzIGJlIGFuIGVtcHR5IHN0cmluZy4gQnkgZGVzaWduLlxuXHQgIGZvciAoaSA9IDE7IGkgPCBpbnN0cnVjdGlvbkxlbmd0aDsgaSsrKSB7XG5cdCAgICAvLyB3aGljaCBpbnN0cnVjdGlvbiBpcyB0aGlzP1xuXHQgICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XG5cdCAgICBvcCA9IGluc3RydWN0aW9uLnN1YnN0cmluZygwLCAxKTtcblx0ICAgIGxvcCA9IG9wLnRvTG93ZXJDYXNlKCk7XG5cblx0ICAgIC8vIHdoYXQgYXJlIHRoZSBhcmd1bWVudHM/IG5vdGUgdGhhdCB3ZSBuZWVkIHRvIGNvbnZlcnRcblx0ICAgIC8vIGFsbCBzdHJpbmdzIGludG8gbnVtYmVycywgb3IgKyB3aWxsIGRvIHNpbGx5IHRoaW5ncy5cblx0ICAgIGFyZ3MgPSBpbnN0cnVjdGlvbi5yZXBsYWNlKG9wLCBcIlwiKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuXHQgICAgYXJncyA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG5cdCAgICAgIHJldHVybiB2ICE9PSBcIlwiO1xuXHQgICAgfSkubWFwKHBhcnNlRmxvYXQpO1xuXHQgICAgYWxlbiA9IGFyZ3MubGVuZ3RoO1xuXG5cdCAgICAvLyB3ZSBjb3VsZCB1c2UgYSBzd2l0Y2gsIGJ1dCBlbGFib3JhdGUgY29kZSBpbiBhIFwiY2FzZVwiIHdpdGhcblx0ICAgIC8vIGZhbGx0aHJvdWdoIGlzIGp1c3QgaG9ycmlkIHRvIHJlYWQuIFNvIGxldCdzIHVzZSBpZnRoZW5cblx0ICAgIC8vIHN0YXRlbWVudHMgaW5zdGVhZC5cblxuXHQgICAgLy8gbW92ZXRvIGNvbW1hbmQgKHBsdXMgcG9zc2libGUgbGluZXRvKVxuXHQgICAgaWYgKGxvcCA9PT0gXCJtXCIpIHtcblx0ICAgICAgbm9ybWFsaXplZCArPSBcIk0gXCI7XG5cdCAgICAgIGlmIChvcCA9PT0gXCJtXCIpIHtcblx0ICAgICAgICB4ICs9IGFyZ3NbMF07XG5cdCAgICAgICAgeSArPSBhcmdzWzFdO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHggPSBhcmdzWzBdO1xuXHQgICAgICAgIHkgPSBhcmdzWzFdO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHJlY29yZHMgc3RhcnQgcG9zaXRpb24sIGZvciBkZWFsaW5nXG5cdCAgICAgIC8vIHdpdGggdGhlIHNoYXBlIGNsb3NlIG9wZXJhdG9yICgnWicpXG5cdCAgICAgIHN4ID0geDtcblx0ICAgICAgc3kgPSB5O1xuXHQgICAgICBub3JtYWxpemVkICs9IHggKyBcIiBcIiArIHkgKyBcIiBcIjtcblx0ICAgICAgaWYgKGFsZW4gPiAyKSB7XG5cdCAgICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGEgKz0gMikge1xuXHQgICAgICAgICAgaWYgKG9wID09PSBcIm1cIikge1xuXHQgICAgICAgICAgICB4ICs9IGFyZ3NbYV07XG5cdCAgICAgICAgICAgIHkgKz0gYXJnc1thICsgMV07XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICB4ID0gYXJnc1thXTtcblx0ICAgICAgICAgICAgeSA9IGFyZ3NbYSArIDFdO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgbm9ybWFsaXplZCArPSBbXCJMXCIsIHgsIHksICcnXS5qb2luKFwiIFwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSBpZiAobG9wID09PSBcImxcIikge1xuXHQgICAgICAvLyBsaW5ldG8gY29tbWFuZHNcblx0ICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGEgKz0gMikge1xuXHQgICAgICAgIGlmIChvcCA9PT0gXCJsXCIpIHtcblx0ICAgICAgICAgIHggKz0gYXJnc1thXTtcblx0ICAgICAgICAgIHkgKz0gYXJnc1thICsgMV07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHggPSBhcmdzW2FdO1xuXHQgICAgICAgICAgeSA9IGFyZ3NbYSArIDFdO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBub3JtYWxpemVkICs9IFtcIkxcIiwgeCwgeSwgJyddLmpvaW4oXCIgXCIpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2UgaWYgKGxvcCA9PT0gXCJoXCIpIHtcblx0ICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGErKykge1xuXHQgICAgICAgIGlmIChvcCA9PT0gXCJoXCIpIHtcblx0ICAgICAgICAgIHggKz0gYXJnc1thXTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgeCA9IGFyZ3NbYV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIG5vcm1hbGl6ZWQgKz0gW1wiTFwiLCB4LCB5LCAnJ10uam9pbihcIiBcIik7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSBpZiAobG9wID09PSBcInZcIikge1xuXHQgICAgICBmb3IgKGEgPSAwOyBhIDwgYWxlbjsgYSsrKSB7XG5cdCAgICAgICAgaWYgKG9wID09PSBcInZcIikge1xuXHQgICAgICAgICAgeSArPSBhcmdzW2FdO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB5ID0gYXJnc1thXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgbm9ybWFsaXplZCArPSBbXCJMXCIsIHgsIHksICcnXS5qb2luKFwiIFwiKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIGlmIChsb3AgPT09IFwicVwiKSB7XG5cdCAgICAgIC8vIHF1YWRyYXRpYyBjdXJ2ZXRvIGNvbW1hbmRzXG5cdCAgICAgIGZvciAoYSA9IDA7IGEgPCBhbGVuOyBhICs9IDQpIHtcblx0ICAgICAgICBpZiAob3AgPT09IFwicVwiKSB7XG5cdCAgICAgICAgICBjeCA9IHggKyBhcmdzW2FdO1xuXHQgICAgICAgICAgY3kgPSB5ICsgYXJnc1thICsgMV07XG5cdCAgICAgICAgICB4ICs9IGFyZ3NbYSArIDJdO1xuXHQgICAgICAgICAgeSArPSBhcmdzW2EgKyAzXTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgY3ggPSBhcmdzW2FdO1xuXHQgICAgICAgICAgY3kgPSBhcmdzW2EgKyAxXTtcblx0ICAgICAgICAgIHggPSBhcmdzW2EgKyAyXTtcblx0ICAgICAgICAgIHkgPSBhcmdzW2EgKyAzXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgbm9ybWFsaXplZCArPSBbXCJRXCIsIGN4LCBjeSwgeCwgeSwgJyddLmpvaW4oXCIgXCIpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2UgaWYgKGxvcCA9PT0gXCJ0XCIpIHtcblx0ICAgICAgZm9yIChhID0gMDsgYSA8IGFsZW47IGEgKz0gMikge1xuXHQgICAgICAgIC8vIHJlZmxlY3QgcHJldmlvdXMgY3gvY3kgb3ZlciB4L3lcblx0ICAgICAgICBjeCA9IHggKyAoeCAtIGN4KTtcblx0ICAgICAgICBjeSA9IHkgKyAoeSAtIGN5KTtcblx0ICAgICAgICAvLyB0aGVuIGdldCByZWFsIGVuZCBwb2ludFxuXHQgICAgICAgIGlmIChvcCA9PT0gXCJ0XCIpIHtcblx0ICAgICAgICAgIHggKz0gYXJnc1thXTtcblx0ICAgICAgICAgIHkgKz0gYXJnc1thICsgMV07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHggPSBhcmdzW2FdO1xuXHQgICAgICAgICAgeSA9IGFyZ3NbYSArIDFdO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBub3JtYWxpemVkICs9IFtcIlFcIiwgY3gsIGN5LCB4LCB5LCAnJ10uam9pbihcIiBcIik7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSBpZiAobG9wID09PSBcImNcIikge1xuXHQgICAgICAvLyBjdWJpYyBjdXJ2ZXRvIGNvbW1hbmRzXG5cdCAgICAgIGZvciAoYSA9IDA7IGEgPCBhbGVuOyBhICs9IDYpIHtcblx0ICAgICAgICBpZiAob3AgPT09IFwiY1wiKSB7XG5cdCAgICAgICAgICBjeCA9IHggKyBhcmdzW2FdO1xuXHQgICAgICAgICAgY3kgPSB5ICsgYXJnc1thICsgMV07XG5cdCAgICAgICAgICBjeDIgPSB4ICsgYXJnc1thICsgMl07XG5cdCAgICAgICAgICBjeTIgPSB5ICsgYXJnc1thICsgM107XG5cdCAgICAgICAgICB4ICs9IGFyZ3NbYSArIDRdO1xuXHQgICAgICAgICAgeSArPSBhcmdzW2EgKyA1XTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgY3ggPSBhcmdzW2FdO1xuXHQgICAgICAgICAgY3kgPSBhcmdzW2EgKyAxXTtcblx0ICAgICAgICAgIGN4MiA9IGFyZ3NbYSArIDJdO1xuXHQgICAgICAgICAgY3kyID0gYXJnc1thICsgM107XG5cdCAgICAgICAgICB4ID0gYXJnc1thICsgNF07XG5cdCAgICAgICAgICB5ID0gYXJnc1thICsgNV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIG5vcm1hbGl6ZWQgKz0gW1wiQ1wiLCBjeCwgY3ksIGN4MiwgY3kyLCB4LCB5LCAnJ10uam9pbihcIiBcIik7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSBpZiAobG9wID09PSBcInNcIikge1xuXHQgICAgICBmb3IgKGEgPSAwOyBhIDwgYWxlbjsgYSArPSA0KSB7XG5cdCAgICAgICAgLy8gcmVmbGVjdCBwcmV2aW91cyBjeDIvY3kyIG92ZXIgeC95XG5cdCAgICAgICAgY3ggPSB4ICsgKHggLSBjeDIpO1xuXHQgICAgICAgIGN5ID0geSArICh5IC0gY3kyKTtcblx0ICAgICAgICAvLyB0aGVuIGdldCByZWFsIGNvbnRyb2wgYW5kIGVuZCBwb2ludFxuXHQgICAgICAgIGlmIChvcCA9PT0gXCJzXCIpIHtcblx0ICAgICAgICAgIGN4MiA9IHggKyBhcmdzW2FdO1xuXHQgICAgICAgICAgY3kyID0geSArIGFyZ3NbYSArIDFdO1xuXHQgICAgICAgICAgeCArPSBhcmdzW2EgKyAyXTtcblx0ICAgICAgICAgIHkgKz0gYXJnc1thICsgM107XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGN4MiA9IGFyZ3NbYV07XG5cdCAgICAgICAgICBjeTIgPSBhcmdzW2EgKyAxXTtcblx0ICAgICAgICAgIHggPSBhcmdzW2EgKyAyXTtcblx0ICAgICAgICAgIHkgPSBhcmdzW2EgKyAzXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgbm9ybWFsaXplZCArPSBbXCJDXCIsIGN4LCBjeSwgY3gyLCBjeTIsIHgsIHksICcnXS5qb2luKFwiIFwiKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIGlmIChsb3AgPT09IFwielwiKSB7XG5cdCAgICAgIG5vcm1hbGl6ZWQgKz0gXCJaIFwiO1xuXHQgICAgICAvLyBub3QgdW5pbXBvcnRhbnQ6IHBhdGggY2xvc2luZyBjaGFuZ2VzIHRoZSBjdXJyZW50IHgveSBjb29yZGluYXRlXG5cdCAgICAgIHggPSBzeDtcblx0ICAgICAgeSA9IHN5O1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gbm9ybWFsaXplZC50cmltKCk7XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVBhdGg7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuZXhwb3J0IGRlZmF1bHQgQmV6aWVyOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pbXBvcnQgeyBHS1V0aWxzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgQmV6aWVyIGZyb20gJy4uL3RoaXJkcGFydHkvYmV6aWVyJztcblxuZnVuY3Rpb24gZG90cHJvZHVjdCh4LCB5KSB7XG4gIGZ1bmN0aW9uIGRvdHBfc3VtKGEsIGIpIHsgcmV0dXJuIGEgKyBiOyB9XG4gIGZ1bmN0aW9uIGRvdHBfdGltZXMoYSwgaSkgeyByZXR1cm4geFtpXSAqIHlbaV07IH1cbiAgaWYgKHgubGVuZ3RoICE9IHkubGVuZ3RoKSB0aHJvdyBcImNhbid0IGZpbmQgZG90IHByb2R1Y3Q6IGFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzXCI7XG4gIHJldHVybiB4Lm1hcChkb3RwX3RpbWVzKS5yZWR1Y2UoZG90cF9zdW0sIDApO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5sZXQgdHJhbnNmb3JtID0gKGVsZW1lbnQsIHBvaW50KSA9PiBwb2ludDtcblxuY3JlYXRlUG9pbnRBdExvY2F0aW9uID0gKGxhdCwgbG9uLCBhbHQpID0+IEdLVXRpbHMud29ybGRGcm9tTGF0TG9uKGxhdCwgbG9uLCBhbHQpO1xuXG5sZXJwQmV0d2VlblBvaW50cyA9IChwMCwgcDEsIHBlcmNlbnQpID0+IHtcbiAgY29uc3QgeCA9IChwMVswXSAtIHAwWzBdKSAqIHBlcmNlbnQgKyBwMFswXTtcbiAgY29uc3QgeSA9IChwMVsxXSAtIHAwWzFdKSAqIHBlcmNlbnQgKyBwMFsxXTtcbiAgY29uc3QgeiA9IChwMVsyXSAtIHAwWzJdKSAqIHBlcmNlbnQgKyBwMFsyXTtcbiAgcmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmdldFBvaW50T25DdWJpY0JlemllciA9ICh0LCBjcCkgPT4ge1xuICBjb25zdCBiMCA9ICgxIC0gdCkgKiogMztcbiAgY29uc3QgYjEgPSAzICogdCAqICgxIC0gdCkgKiogMjtcbiAgY29uc3QgYjIgPSAzICogKDEgLSB0KSAqIHQgKiogMjtcbiAgY29uc3QgYjMgPSB0ICoqIDM7XG5cbiAgcmV0dXJuIChiMCAqIGNwWzBdKSArIChiMSAqIGNwWzFdKSArIChiMiAqIGNwWzJdKSArIChiMyAqIGNwWzNdKTtcbn07XG5cbmNyZWF0ZUFyY0JldHdlZW5Db29yZHMgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCBuID0gMTAwO1xuXG4gIGNvbnN0IHAwID0gR0tVdGlscy53b3JsZEZyb21MYXRMb24oc3RhcnRbMF0sIHN0YXJ0WzFdLCAwLjApO1xuICBjb25zdCBwMyA9IEdLVXRpbHMud29ybGRGcm9tTGF0TG9uKGVuZFswXSwgZW5kWzFdLCAwLjApO1xuICBjb25zdCBzaW11bGFyaXR5ID0gKDEuMCAtICgoZG90cHJvZHVjdChwMCwgcDMpICsgMS4wKSAvIDIuMCkpO1xuICBjb25zdCBhbHQgPSAwLjIgKyAzLjAgKiBzaW11bGFyaXR5O1xuICBjb25zb2xlLmxvZyhhbHQpO1xuXG4gIGNvbnN0IGEwID0gR0tVdGlscy53b3JsZEZyb21MYXRMb24oc3RhcnRbMF0sIHN0YXJ0WzFdLCBhbHQpO1xuICBjb25zdCBhMyA9IEdLVXRpbHMud29ybGRGcm9tTGF0TG9uKGVuZFswXSwgZW5kWzFdLCBhbHQpO1xuICBjb25zdCBwMSA9IGxlcnBCZXR3ZWVuUG9pbnRzKGEwLCBhMywgMC4yNSArIChzaW11bGFyaXR5ICoqIDEuMSAqIDAuMSkpO1xuICBjb25zdCBwMiA9IGxlcnBCZXR3ZWVuUG9pbnRzKGEwLCBhMywgMC43NSAtIChzaW11bGFyaXR5ICoqIDEuMSAqIDAuMSkpO1xuXG4gIGNvbnN0IGNwID0gW107XG4gIGNwLnB1c2goLi4ucDApO1xuICBjcC5wdXNoKC4uLnAxKTtcbiAgY3AucHVzaCguLi5wMik7XG4gIGNwLnB1c2goLi4ucDMpO1xuXG4gIGNvbnN0IHBhMSA9IGxlcnBCZXR3ZWVuUG9pbnRzKGEwLCBhMywgMC41KTtcbiAgY29uc3QgYzAgPSB7IHg6IHAwWzBdLCB5OiBwMFsxXSwgejogcDBbMl0gfTtcbiAgY29uc3QgYzEgPSB7IHg6IHBhMVswXSwgeTogcGExWzFdLCB6OiBwYTFbMl0gfTtcbiAgY29uc3QgYzIgPSB7IHg6IHAzWzBdLCB5OiBwM1sxXSwgejogcDNbMl0gfTtcbiAgY29uc29sZS5sb2coYzAsIGMxLCBjMik7XG4gIGNvbnN0IGIgPSBCZXppZXIuY3ViaWNGcm9tUG9pbnRzKGMwLCBjMSwgYzIsIDAuNSk7XG5cbiAgLy8gY29uc3QgYiA9IG5ldyBCZXppZXIoY3ApO1xuICBjb25zdCBwID0gYi5nZXRMVVQoMTAwKTtcbiAgY29uc3QgcG9pbnRzID0gW107XG4gIHAuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICBwb2ludHMucHVzaCguLi5PYmplY3QudmFsdWVzKHBvaW50KSk7XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludHM7XG59O1xuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGUuZGF0YTtcbiAgY29uc3QgeyB0eXBlIH0gPSBlLmRhdGE7XG5cbiAgaWYgKGUuZGF0YS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRyeSB7XG4gICAgICBpbXBvcnRTY3JpcHRzKGUuZGF0YS50cmFuc2Zvcm0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwb2ludCcpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHt9O1xuICAgIHZlcnRpY2VzLnBvc2l0aW9uID0geyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbXSB9O1xuICAgIHZlcnRpY2VzLmNvbG9yID0geyBudW1Db21wb25lbnRzOiA0LCBkYXRhOiBbXSB9O1xuICAgIHZlcnRpY2VzLnNpemUgPSB7IG51bUNvbXBvbmVudHM6IDEsIGRhdGE6IFtdIH07XG4gICAgdmVydGljZXMuaW5kaWNlcyA9IHsgbnVtQ29tcG9uZW50czogMSwgZGF0YTogW10gfTtcblxuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSBwb2ludCBnZW9tZXRyeSBhdCBsb2NhdGlvblxuICAgICAgbGV0IHBvaW50ID0ge1xuICAgICAgICBsYXQ6IGVsZW1lbnQubGF0LFxuICAgICAgICBsb246IGVsZW1lbnQubG9uLFxuICAgICAgICBjb2xvcjogWzEuMCwgMS4wLCAxLjAsIDEuMF0sXG4gICAgICAgIHNpemU6IDEwLjAsXG4gICAgICB9O1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gZ2VvbWV0cnkgdXNpbmcgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICAgIHBvaW50ID0gdHJhbnNmb3JtKGVsZW1lbnQsIHBvaW50KTtcblxuICAgICAgcG9pbnQuY29vcmRzID0gY3JlYXRlUG9pbnRBdExvY2F0aW9uKHBvaW50LmxhdCwgcG9pbnQubG9uLCBwb2ludC5hbHQpO1xuICAgICAgdmVydGljZXMucG9zaXRpb24uZGF0YS5wdXNoKC4uLnBvaW50LmNvb3Jkcyk7XG4gICAgICB2ZXJ0aWNlcy5jb2xvci5kYXRhLnB1c2goLi4ucG9pbnQuY29sb3IpO1xuICAgICAgdmVydGljZXMuc2l6ZS5kYXRhLnB1c2gocG9pbnQuc2l6ZSk7XG4gICAgICB2ZXJ0aWNlcy5pbmRpY2VzLmRhdGEucHVzaChpbmRleCk7XG4gICAgfSk7XG5cbiAgICBwb3N0TWVzc2FnZSh2ZXJ0aWNlcyk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3F1YWQnKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZSBRdWFkJyk7XG4gICAgY29uc29sZS5sb2coJ0RhdGFHZW8tUXVhZCcsIGRhdGEpO1xuICAgIGRhdGEuZm9yRWFjaCgoZWwpID0+IGNvbnNvbGUubG9nKGVsKSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FyYycpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHt9O1xuICAgIHZlcnRpY2VzLnBvc2l0aW9uID0geyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbXSB9O1xuXG4gICAgZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgZGVtb0FyYyA9IGNyZWF0ZUFyY0JldHdlZW5Db29yZHMoZWwuZnJvbSwgZWwudG8pO1xuICAgICAgdmVydGljZXMucG9zaXRpb24uZGF0YS5wdXNoKC4uLmRlbW9BcmMpO1xuICAgIH0pO1xuXG4gICAgcG9zdE1lc3NhZ2UodmVydGljZXMpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIkVQU0lMT04iLCJBUlJBWV9UWVBFIiwiRmxvYXQzMkFycmF5IiwiQXJyYXkiLCJNYXRoIiwiaHlwb3QiLCJ5IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNxcnQiLCJjcmVhdGUiLCJvdXQiLCJnbE1hdHJpeCIsImEiLCJ4IiwieiIsImZyb21WYWx1ZXMiLCJhZGQiLCJiIiwic2NhbGUiLCJub3JtYWxpemUiLCJsZW4iLCJkb3QiLCJjcm9zcyIsImF4IiwiYXkiLCJheiIsImJ4IiwiYnkiLCJieiIsImZvckVhY2giLCJ2ZWMiLCJzdHJpZGUiLCJvZmZzZXQiLCJjb3VudCIsImZuIiwiYXJnIiwibCIsIm1pbiIsInciLCJzZXRBeGlzQW5nbGUiLCJheGlzIiwicmFkIiwicyIsInNpbiIsImNvcyIsInNsZXJwIiwidCIsImF3IiwiYnciLCJvbWVnYSIsImNvc29tIiwic2lub20iLCJzY2FsZTAiLCJzY2FsZTEiLCJhY29zIiwiZnJvbU1hdDMiLCJtIiwiZlRyYWNlIiwiZlJvb3QiLCJqIiwiayIsInZlYzQiLCJyb3RhdGlvblRvIiwidG1wdmVjMyIsInZlYzMiLCJ4VW5pdFZlYzMiLCJ5VW5pdFZlYzMiLCJQSSIsInNxbGVycCIsInRlbXAxIiwidGVtcDIiLCJjIiwiZCIsInNldEF4ZXMiLCJtYXRyIiwibWF0MyIsInZpZXciLCJyaWdodCIsInVwIiwiR0tVdGlscyIsImF0YW4iLCJwb3MiLCJub3JtYWwiLCJsYXRSYWQiLCJhc2luIiwibG9uUmFkIiwicmFkaWFuc0ZvclBvc2l0aW9uIiwibGF0RGVnIiwibG9uRGVnIiwibGF0IiwibG9uIiwicDAiLCJwMSIsImRlZ3JlZXNUb1JhZGlhbnMiLCJkZWdyZWVzIiwiUiIsInBoaTEiLCJwaGkyIiwiZGVsdGFQaGkiLCJkZWx0YUxhbWJkYSIsImF0YW4yIiwiYWx0IiwiYWx0aXR1ZGUiLCJsbmdSYWQiLCJyYWRpdXMiLCJub3JtIiwiaCIsInIiLCJnIiwicGFyc2VJbnQiLCJyZ2IiLCJoZXhUb1JHQiIsImFscGhhIiwiZXZlcnkiLCJlbCIsImZpbmQiLCJlIiwidW5kZWZpbmVkIiwiYW1vdW50IiwiYWgiLCJyZXBsYWNlIiwiYXIiLCJhZyIsImFiIiwiYmgiLCJiciIsImJnIiwiYmIiLCJyciIsInJnIiwicmIiLCJ0b1N0cmluZyIsInNsaWNlIiwiQmV6aWVyIiwibW9kdWxlcyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaWQiLCJsb2FkZWQiLCJjYWxsIiwicCIsIl90eXBlb2YiLCJTeW1ib2wiLCJfdHlwZW9mMiIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJhYnMiLCJtYXgiLCJwaSIsIlpFUk8iLCJ1dGlscyIsIlBvbHlCZXppZXIiLCJjb29yZHMiLCJhcmdzIiwiY29vcmRsZW4iLCJuZXdhcmdzIiwicG9pbnQiLCJwdXNoIiwiaGlnaGVyIiwiRXJyb3IiLCJfM2QiLCJwb2ludHMiLCJpZHgiLCJzdGVwIiwib3JkZXIiLCJkaW1zIiwiZGltbGVuIiwiY3VydmUiLCJhbGlnbiIsInAyIiwiX2xpbmVhciIsIl90MSIsIl90MiIsInVwZGF0ZSIsInN2Z1RvQmV6aWVycyIsIlNWR3RvQmV6aWVycyIsImdldEFCQyIsIm4iLCJTIiwiQiIsIkUiLCJ1IiwicHJvamVjdGlvbnJhdGlvIiwidW0iLCJDIiwiYWJjcmF0aW8iLCJBIiwicXVhZHJhdGljRnJvbVBvaW50cyIsInAzIiwiYWJjIiwiY3ViaWNGcm9tUG9pbnRzIiwiZDEiLCJkaXN0IiwiZDIiLCJzZWxlbiIsImx4IiwibHkiLCJieDEiLCJieTEiLCJieDIiLCJieTIiLCJlMSIsImUyIiwidjEiLCJ2MiIsIm5jMSIsIm5jMiIsImdldFV0aWxzIiwidmFsdWVPZiIsInBvaW50c1RvU3RyaW5nIiwidG9TVkciLCJyZWxhdGl2ZSIsImxhc3QiLCJqb2luIiwic2V0UmF0aW9zIiwicmF0aW9zIiwiX2x1dCIsInZlcmlmeSIsInByaW50IiwiY29vcmREaWdlc3QiLCJfcHJpbnQiLCJtYXAiLCJuZXdwcmludCIsImRwb2ludHMiLCJkZXJpdmUiLCJjb21wdXRlZGlyZWN0aW9uIiwiYW5nbGUiLCJjbG9ja3dpc2UiLCJkZXJpdmF0aXZlIiwiYmluZCIsImdldExVVCIsInN0ZXBzIiwiY29tcHV0ZSIsIm9uIiwiZXJyb3IiLCJsdXQiLCJoaXRzIiwicHJvamVjdCIsIkxVVCIsImNsb3Nlc3QiLCJtZGlzdCIsIm1wb3MiLCJmdCIsInQxIiwidDIiLCJnZXQiLCJjb21wdXRlV2l0aFJhdGlvcyIsInJhaXNlIiwibnAiLCJwaW0iLCJtdCIsInJldCIsImN1cnZhdHVyZSIsImluZmxlY3Rpb25zIiwiX19ub3JtYWwzIiwiX19ub3JtYWwyIiwicSIsInIxIiwicjIiLCJxMSIsInEyIiwiaHVsbCIsIl9wIiwicHQiLCJsZXJwIiwic3BsaXQiLCJsZWZ0IiwicmVzdWx0Iiwic3BhbiIsInN1YnNwbGl0IiwiZXh0cmVtYSIsInJvb3RzIiwibWZuIiwiZGltIiwidiIsImRyb290cyIsImNvbmNhdCIsImZpbHRlciIsInNvcnQiLCJudW1iZXJTb3J0IiwiaW5kZXhPZiIsInZhbHVlcyIsImJib3giLCJnZXRtaW5tYXgiLCJvdmVybGFwcyIsImxiYm94IiwidGJib3giLCJiYm94b3ZlcmxhcCIsIm52IiwicmVkdWNlZCIsInJlZHVjZSIsInNpbXBsZSIsImExIiwiYTIiLCJuMSIsIm4yIiwic2VnbWVudCIsInBhc3MxIiwicGFzczIiLCJkaXN0YW5jZUZuIiwibyIsImxsaTQiLCJjb3B5Iiwib3YiLCJyYyIsIm91dGxpbmUiLCJkMyIsImQ0IiwiZmN1cnZlcyIsImJjdXJ2ZXMiLCJhbGVuIiwidGxlbiIsImdyYWR1YXRlZCIsImxpbmVhckRpc3RhbmNlRnVuY3Rpb24iLCJzbGVuIiwiZjEiLCJmMiIsInJldmVyc2UiLCJmcyIsImZlIiwiYnMiLCJiZSIsImxzIiwibWFrZWxpbmUiLCJsZSIsInNlZ21lbnRzIiwib3V0bGluZXNoYXBlcyIsImN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkIiwiY3VydmVzIiwic2hhcGVzIiwic2hhcGUiLCJtYWtlc2hhcGUiLCJzdGFydGNhcCIsInZpcnR1YWwiLCJlbmRjYXAiLCJpbnRlcnNlY3RzIiwic2VsZmludGVyc2VjdHMiLCJsaW5lSW50ZXJzZWN0cyIsImN1cnZlaW50ZXJzZWN0cyIsImxpbmUiLCJteCIsIm15IiwiTVgiLCJNWSIsInNlbGYiLCJiZXR3ZWVuIiwicmVzdWx0cyIsImMxIiwiYzIiLCJwYWlycyIsImludGVyc2VjdGlvbnMiLCJwYWlyIiwicGFpcml0ZXJhdGlvbiIsImFyY3MiLCJlcnJvclRocmVzaG9sZCIsImNpcmNsZXMiLCJfaXRlcmF0ZSIsIl9lcnJvciIsInBjIiwibnAxIiwicmVmIiwidF9zIiwidF9lIiwic2FmZXR5IiwibnAyIiwibnAzIiwiYXJjIiwicHJldl9hcmMiLCJjdXJyX2dvb2QiLCJwcmV2X2dvb2QiLCJkb25lIiwidF9tIiwicHJldl9lIiwiZ2V0Y2NlbnRlciIsImludGVydmFsIiwic3RhcnQiLCJlbmQiLCJwb3ciLCJjcnQiLCJ0YXUiLCJxdWFydCIsImVwc2lsb24iLCJuTWF4IiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm5NaW4iLCJNSU5fU0FGRV9JTlRFR0VSIiwiVHZhbHVlcyIsIkN2YWx1ZXMiLCJhcmNmbiIsImRlcml2YXRpdmVGbiIsIm10MiIsImRDcHRzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3BsaWNlIiwiZjMiLCJmNCIsImxpc3QiLCJkcHQiLCJNIiwiYXBwcm94aW1hdGVseSIsInByZWNpc2lvbiIsInN1bSIsImRzIiwiZGUiLCJ0cyIsInRlIiwicG9pbnRUb1N0cmluZyIsImR4MSIsImR5MSIsImR4MiIsImR5MiIsInJvdW5kIiwicGFyc2VGbG9hdCIsInN1YnN0cmluZyIsImR4IiwiZHkiLCJib3R0b20iLCJ0b3AiLCJsbGk4IiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwieDQiLCJ5NCIsIm54IiwibnkiLCJwNCIsImxsaSIsImZpbmRiYm94Iiwic2VjdGlvbnMiLCJtaWQiLCJzaXplIiwic2hhcGVpbnRlcnNlY3Rpb25zIiwiczEiLCJiYm94MSIsInMyIiwiYmJveDIiLCJmb3J3YXJkIiwiYmFjayIsImwxIiwibDIiLCJpc3MiLCJicGwiLCJmcGwiLCJ0eCIsInR5IiwibTEiLCJtMiIsInBhIiwicGIiLCJwZCIsImRpc2NyaW1pbmFudCIsInUxIiwibXAzIiwibXAzMyIsImNvc3BoaSIsInBoaSIsImNydHIiLCJzZCIsImtPbmx5IiwibnVtIiwiZG5tIiwiYWRrIiwiZGsiLCJkZCIsInFkc3VtIiwicGsiLCJuayIsInYzIiwidHJtIiwic3EiLCJiMSIsImIyIiwiZXhwYW5kYm94IiwiX2Jib3giLCJjMWIiLCJjMmIiLCJ0aHJlc2hvbGQiLCJjYzEiLCJjYzIiLCJkeDFwIiwiZHkxcCIsImR4MnAiLCJkeTJwIiwibXgxIiwibXkxIiwibXgyIiwibXkyIiwibXgxbiIsIm15MW4iLCJteDJuIiwibXkybiIsIl8iLCJhZGRDdXJ2ZSIsIm5vcm1hbGlzZSIsIm1ha2VCZXppZXIiLCJ0ZXJtIiwiY3ZhbHVlcyIsIlByZWJvdW5kQ29uc3RydWN0b3IiLCJhcHBseSIsImNvbnZlcnRQYXRoIiwidGVybXMiLCJtYXRjaGVyIiwiUmVnRXhwIiwiQVJHUyIsInRlc3QiLCJub3JtYWxpemVQYXRoIiwiaW5zdHJ1Y3Rpb25zIiwiaW5zdHJ1Y3Rpb25MZW5ndGgiLCJpbnN0cnVjdGlvbiIsIm9wIiwibG9wIiwic3giLCJzeSIsImN4IiwiY3kiLCJjeDIiLCJjeTIiLCJub3JtYWxpemVkIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwiZG90cHJvZHVjdCIsImRvdHBfc3VtIiwiZG90cF90aW1lcyIsInRyYW5zZm9ybSIsImVsZW1lbnQiLCJjcmVhdGVQb2ludEF0TG9jYXRpb24iLCJ3b3JsZEZyb21MYXRMb24iLCJsZXJwQmV0d2VlblBvaW50cyIsInBlcmNlbnQiLCJnZXRQb2ludE9uQ3ViaWNCZXppZXIiLCJjcCIsImIwIiwiYjMiLCJjcmVhdGVBcmNCZXR3ZWVuQ29vcmRzIiwic2ltdWxhcml0eSIsImNvbnNvbGUiLCJsb2ciLCJhMCIsImEzIiwicGExIiwiYzAiLCJPYmplY3QiLCJvbm1lc3NhZ2UiLCJkYXRhIiwidHlwZSIsImltcG9ydFNjcmlwdHMiLCJ2ZXJ0aWNlcyIsInBvc2l0aW9uIiwibnVtQ29tcG9uZW50cyIsImNvbG9yIiwiaW5kaWNlcyIsImluZGV4IiwicG9zdE1lc3NhZ2UiLCJkZW1vQXJjIiwiZnJvbSIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBSUE7QUFDTyxJQUFJQSxPQUFPLEdBQUcsUUFBZDtBQUNBLElBQUlDLFVBQVUsR0FBRyxPQUFPQyxZQUFQLEtBQXdCLFdBQXhCLEdBQXNDQSxZQUF0QyxHQUFxREMsS0FBdEU7QUFrQ1AsSUFBSSxDQUFDQyxJQUFJLENBQUNDLEtBQVYsRUFBaUJELElBQUksQ0FBQ0MsS0FBTCxHQUFhLFlBQVk7QUFDeEMsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFBQSxNQUNJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFEbEI7O0FBR0EsU0FBT0YsQ0FBQyxFQUFSLEVBQVk7QUFDVkQsSUFBQUEsQ0FBQyxJQUFJRSxTQUFTLENBQUNELENBQUQsQ0FBVCxHQUFlQyxTQUFTLENBQUNELENBQUQsQ0FBN0I7QUFDRDs7QUFFRCxTQUFPSCxJQUFJLENBQUNNLElBQUwsQ0FBVUosQ0FBVixDQUFQO0FBQ0QsQ0FUZ0I7O0FDdkNqQjs7Ozs7QUFLQTs7Ozs7O0FBTU8sU0FBU0ssTUFBVCxHQUFrQjtBQUN2QixNQUFJQyxHQUFHLEdBQUcsSUFBSUMsVUFBSixDQUF3QixDQUF4QixDQUFWOztBQUVBLE1BQUlBLFVBQUEsSUFBdUJYLFlBQTNCLEVBQXlDO0FBQ3ZDVSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNEOztBQUVEQSxFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBLFNBQU9BLEdBQVA7QUFDRDs7QUMzQkQ7Ozs7O0FBS0E7Ozs7OztBQU1PLFNBQVNELFFBQVQsR0FBa0I7QUFDdkIsTUFBSUMsR0FBRyxHQUFHLElBQUlDLFVBQUosQ0FBd0IsQ0FBeEIsQ0FBVjs7QUFFQSxNQUFJQSxVQUFBLElBQXVCWCxZQUEzQixFQUF5QztBQUN2Q1UsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDQUEsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDQUEsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDRDs7QUFFRCxTQUFPQSxHQUFQO0FBQ0Q7QUFlRDs7Ozs7OztBQU9PLFNBQVNILE1BQVQsQ0FBZ0JLLENBQWhCLEVBQW1CO0FBQ3hCLE1BQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUNBLE1BQUlSLENBQUMsR0FBR1EsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUNBLE1BQUlFLENBQUMsR0FBR0YsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUNBLFNBQU9WLElBQUksQ0FBQ0MsS0FBTCxDQUFXVSxDQUFYLEVBQWNULENBQWQsRUFBaUJVLENBQWpCLENBQVA7QUFDRDtBQUNEOzs7Ozs7Ozs7QUFTTyxTQUFTQyxVQUFULENBQW9CRixDQUFwQixFQUF1QlQsQ0FBdkIsRUFBMEJVLENBQTFCLEVBQTZCO0FBQ2xDLE1BQUlKLEdBQUcsR0FBRyxJQUFJQyxVQUFKLENBQXdCLENBQXhCLENBQVY7QUFDQUQsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRyxDQUFUO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU04sQ0FBVDtBQUNBTSxFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNJLENBQVQ7QUFDQSxTQUFPSixHQUFQO0FBQ0Q7QUErQkQ7Ozs7Ozs7OztBQVNPLFNBQVNNLEdBQVQsQ0FBYU4sR0FBYixFQUFrQkUsQ0FBbEIsRUFBcUJLLENBQXJCLEVBQXdCO0FBQzdCUCxFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0ssQ0FBQyxDQUFDLENBQUQsQ0FBakI7QUFDQVAsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9LLENBQUMsQ0FBQyxDQUFELENBQWpCO0FBQ0FQLEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPSyxDQUFDLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFNBQU9QLEdBQVA7QUFDRDtBQXNIRDs7Ozs7Ozs7O0FBU08sU0FBU1EsS0FBVCxDQUFlUixHQUFmLEVBQW9CRSxDQUFwQixFQUF1QkssQ0FBdkIsRUFBMEI7QUFDL0JQLEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPSyxDQUFoQjtBQUNBUCxFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0ssQ0FBaEI7QUFDQVAsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9LLENBQWhCO0FBQ0EsU0FBT1AsR0FBUDtBQUNEO0FBc0ZEOzs7Ozs7OztBQVFPLFNBQVNTLFNBQVQsQ0FBbUJULEdBQW5CLEVBQXdCRSxDQUF4QixFQUEyQjtBQUNoQyxNQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQyxDQUFELENBQVQ7QUFDQSxNQUFJUixDQUFDLEdBQUdRLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFDQSxNQUFJRSxDQUFDLEdBQUdGLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFDQSxNQUFJUSxHQUFHLEdBQUdQLENBQUMsR0FBR0EsQ0FBSixHQUFRVCxDQUFDLEdBQUdBLENBQVosR0FBZ0JVLENBQUMsR0FBR0EsQ0FBOUI7O0FBRUEsTUFBSU0sR0FBRyxHQUFHLENBQVYsRUFBYTtBQUNYO0FBQ0FBLElBQUFBLEdBQUcsR0FBRyxJQUFJbEIsSUFBSSxDQUFDTSxJQUFMLENBQVVZLEdBQVYsQ0FBVjtBQUNEOztBQUVEVixFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT1EsR0FBaEI7QUFDQVYsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9RLEdBQWhCO0FBQ0FWLEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPUSxHQUFoQjtBQUNBLFNBQU9WLEdBQVA7QUFDRDtBQUNEOzs7Ozs7OztBQVFPLFNBQVNXLEdBQVQsQ0FBYVQsQ0FBYixFQUFnQkssQ0FBaEIsRUFBbUI7QUFDeEIsU0FBT0wsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPSyxDQUFDLENBQUMsQ0FBRCxDQUFSLEdBQWNMLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0ssQ0FBQyxDQUFDLENBQUQsQ0FBdEIsR0FBNEJMLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0ssQ0FBQyxDQUFDLENBQUQsQ0FBM0M7QUFDRDtBQUNEOzs7Ozs7Ozs7QUFTTyxTQUFTSyxLQUFULENBQWVaLEdBQWYsRUFBb0JFLENBQXBCLEVBQXVCSyxDQUF2QixFQUEwQjtBQUMvQixNQUFJTSxFQUFFLEdBQUdYLENBQUMsQ0FBQyxDQUFELENBQVY7QUFBQSxNQUNJWSxFQUFFLEdBQUdaLENBQUMsQ0FBQyxDQUFELENBRFY7QUFBQSxNQUVJYSxFQUFFLEdBQUdiLENBQUMsQ0FBQyxDQUFELENBRlY7QUFHQSxNQUFJYyxFQUFFLEdBQUdULENBQUMsQ0FBQyxDQUFELENBQVY7QUFBQSxNQUNJVSxFQUFFLEdBQUdWLENBQUMsQ0FBQyxDQUFELENBRFY7QUFBQSxNQUVJVyxFQUFFLEdBQUdYLENBQUMsQ0FBQyxDQUFELENBRlY7QUFHQVAsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTYyxFQUFFLEdBQUdJLEVBQUwsR0FBVUgsRUFBRSxHQUFHRSxFQUF4QjtBQUNBakIsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTZSxFQUFFLEdBQUdDLEVBQUwsR0FBVUgsRUFBRSxHQUFHSyxFQUF4QjtBQUNBbEIsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTYSxFQUFFLEdBQUdJLEVBQUwsR0FBVUgsRUFBRSxHQUFHRSxFQUF4QjtBQUNBLFNBQU9oQixHQUFQO0FBQ0Q7QUEyVkQ7Ozs7O0FBS08sSUFBSVUsR0FBRyxHQUFHYixNQUFWO0FBT1A7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFJc0IsT0FBTyxHQUFHLFlBQVk7QUFDL0IsTUFBSUMsR0FBRyxHQUFHckIsUUFBTSxFQUFoQjtBQUNBLFNBQU8sVUFBVUcsQ0FBVixFQUFhbUIsTUFBYixFQUFxQkMsTUFBckIsRUFBNkJDLEtBQTdCLEVBQW9DQyxFQUFwQyxFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDbEQsUUFBSTlCLENBQUosRUFBTytCLENBQVA7O0FBRUEsUUFBSSxDQUFDTCxNQUFMLEVBQWE7QUFDWEEsTUFBQUEsTUFBTSxHQUFHLENBQVQ7QUFDRDs7QUFFRCxRQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUcsQ0FBVDtBQUNEOztBQUVELFFBQUlDLEtBQUosRUFBVztBQUNURyxNQUFBQSxDQUFDLEdBQUdsQyxJQUFJLENBQUNtQyxHQUFMLENBQVNKLEtBQUssR0FBR0YsTUFBUixHQUFpQkMsTUFBMUIsRUFBa0NwQixDQUFDLENBQUNMLE1BQXBDLENBQUo7QUFDRCxLQUZELE1BRU87QUFDTDZCLE1BQUFBLENBQUMsR0FBR3hCLENBQUMsQ0FBQ0wsTUFBTjtBQUNEOztBQUVELFNBQUtGLENBQUMsR0FBRzJCLE1BQVQsRUFBaUIzQixDQUFDLEdBQUcrQixDQUFyQixFQUF3Qi9CLENBQUMsSUFBSTBCLE1BQTdCLEVBQXFDO0FBQ25DRCxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNsQixDQUFDLENBQUNQLENBQUQsQ0FBVjtBQUNBeUIsTUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTbEIsQ0FBQyxDQUFDUCxDQUFDLEdBQUcsQ0FBTCxDQUFWO0FBQ0F5QixNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNsQixDQUFDLENBQUNQLENBQUMsR0FBRyxDQUFMLENBQVY7QUFDQTZCLE1BQUFBLEVBQUUsQ0FBQ0osR0FBRCxFQUFNQSxHQUFOLEVBQVdLLEdBQVgsQ0FBRjtBQUNBdkIsTUFBQUEsQ0FBQyxDQUFDUCxDQUFELENBQUQsR0FBT3lCLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDQWxCLE1BQUFBLENBQUMsQ0FBQ1AsQ0FBQyxHQUFHLENBQUwsQ0FBRCxHQUFXeUIsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNBbEIsTUFBQUEsQ0FBQyxDQUFDUCxDQUFDLEdBQUcsQ0FBTCxDQUFELEdBQVd5QixHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0Q7O0FBRUQsV0FBT2xCLENBQVA7QUFDRCxHQTVCRDtBQTZCRCxDQS9Cb0IsRUFBZDs7QUNsdkJQOzs7OztBQUtBOzs7Ozs7QUFNTyxTQUFTSCxRQUFULEdBQWtCO0FBQ3ZCLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxVQUFKLENBQXdCLENBQXhCLENBQVY7O0FBRUEsTUFBSUEsVUFBQSxJQUF1QlgsWUFBM0IsRUFBeUM7QUFDdkNVLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO0FBQ0FBLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO0FBQ0FBLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO0FBQ0FBLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO0FBQ0Q7O0FBRUQsU0FBT0EsR0FBUDtBQUNEO0FBeVVEOzs7Ozs7OztBQVFPLFNBQVNTLFdBQVQsQ0FBbUJULEdBQW5CLEVBQXdCRSxDQUF4QixFQUEyQjtBQUNoQyxNQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQyxDQUFELENBQVQ7QUFDQSxNQUFJUixDQUFDLEdBQUdRLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFDQSxNQUFJRSxDQUFDLEdBQUdGLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFDQSxNQUFJMEIsQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUNBLE1BQUlRLEdBQUcsR0FBR1AsQ0FBQyxHQUFHQSxDQUFKLEdBQVFULENBQUMsR0FBR0EsQ0FBWixHQUFnQlUsQ0FBQyxHQUFHQSxDQUFwQixHQUF3QndCLENBQUMsR0FBR0EsQ0FBdEM7O0FBRUEsTUFBSWxCLEdBQUcsR0FBRyxDQUFWLEVBQWE7QUFDWEEsSUFBQUEsR0FBRyxHQUFHLElBQUlsQixJQUFJLENBQUNNLElBQUwsQ0FBVVksR0FBVixDQUFWO0FBQ0Q7O0FBRURWLEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0csQ0FBQyxHQUFHTyxHQUFiO0FBQ0FWLEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU04sQ0FBQyxHQUFHZ0IsR0FBYjtBQUNBVixFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNJLENBQUMsR0FBR00sR0FBYjtBQUNBVixFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVM0QixDQUFDLEdBQUdsQixHQUFiO0FBQ0EsU0FBT1YsR0FBUDtBQUNEO0FBZ1BEOzs7Ozs7Ozs7Ozs7O0FBYU8sSUFBSW1CLFNBQU8sR0FBRyxZQUFZO0FBQy9CLE1BQUlDLEdBQUcsR0FBR3JCLFFBQU0sRUFBaEI7QUFDQSxTQUFPLFVBQVVHLENBQVYsRUFBYW1CLE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQyxLQUE3QixFQUFvQ0MsRUFBcEMsRUFBd0NDLEdBQXhDLEVBQTZDO0FBQ2xELFFBQUk5QixDQUFKLEVBQU8rQixDQUFQOztBQUVBLFFBQUksQ0FBQ0wsTUFBTCxFQUFhO0FBQ1hBLE1BQUFBLE1BQU0sR0FBRyxDQUFUO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEEsTUFBQUEsTUFBTSxHQUFHLENBQVQ7QUFDRDs7QUFFRCxRQUFJQyxLQUFKLEVBQVc7QUFDVEcsTUFBQUEsQ0FBQyxHQUFHbEMsSUFBSSxDQUFDbUMsR0FBTCxDQUFTSixLQUFLLEdBQUdGLE1BQVIsR0FBaUJDLE1BQTFCLEVBQWtDcEIsQ0FBQyxDQUFDTCxNQUFwQyxDQUFKO0FBQ0QsS0FGRCxNQUVPO0FBQ0w2QixNQUFBQSxDQUFDLEdBQUd4QixDQUFDLENBQUNMLE1BQU47QUFDRDs7QUFFRCxTQUFLRixDQUFDLEdBQUcyQixNQUFULEVBQWlCM0IsQ0FBQyxHQUFHK0IsQ0FBckIsRUFBd0IvQixDQUFDLElBQUkwQixNQUE3QixFQUFxQztBQUNuQ0QsTUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTbEIsQ0FBQyxDQUFDUCxDQUFELENBQVY7QUFDQXlCLE1BQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2xCLENBQUMsQ0FBQ1AsQ0FBQyxHQUFHLENBQUwsQ0FBVjtBQUNBeUIsTUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTbEIsQ0FBQyxDQUFDUCxDQUFDLEdBQUcsQ0FBTCxDQUFWO0FBQ0F5QixNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNsQixDQUFDLENBQUNQLENBQUMsR0FBRyxDQUFMLENBQVY7QUFDQTZCLE1BQUFBLEVBQUUsQ0FBQ0osR0FBRCxFQUFNQSxHQUFOLEVBQVdLLEdBQVgsQ0FBRjtBQUNBdkIsTUFBQUEsQ0FBQyxDQUFDUCxDQUFELENBQUQsR0FBT3lCLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDQWxCLE1BQUFBLENBQUMsQ0FBQ1AsQ0FBQyxHQUFHLENBQUwsQ0FBRCxHQUFXeUIsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNBbEIsTUFBQUEsQ0FBQyxDQUFDUCxDQUFDLEdBQUcsQ0FBTCxDQUFELEdBQVd5QixHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0FsQixNQUFBQSxDQUFDLENBQUNQLENBQUMsR0FBRyxDQUFMLENBQUQsR0FBV3lCLEdBQUcsQ0FBQyxDQUFELENBQWQ7QUFDRDs7QUFFRCxXQUFPbEIsQ0FBUDtBQUNELEdBOUJEO0FBK0JELENBakNvQixFQUFkOztBQ2puQlA7Ozs7O0FBS0E7Ozs7OztBQU1PLFNBQVNILFFBQVQsR0FBa0I7QUFDdkIsTUFBSUMsR0FBRyxHQUFHLElBQUlDLFVBQUosQ0FBd0IsQ0FBeEIsQ0FBVjs7QUFFQSxNQUFJQSxVQUFBLElBQXVCWCxZQUEzQixFQUF5QztBQUN2Q1UsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDQUEsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDQUEsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDRDs7QUFFREEsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDQSxTQUFPQSxHQUFQO0FBQ0Q7QUFlRDs7Ozs7Ozs7OztBQVVPLFNBQVM2QixZQUFULENBQXNCN0IsR0FBdEIsRUFBMkI4QixJQUEzQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDM0NBLEVBQUFBLEdBQUcsR0FBR0EsR0FBRyxHQUFHLEdBQVo7QUFDQSxNQUFJQyxDQUFDLEdBQUd4QyxJQUFJLENBQUN5QyxHQUFMLENBQVNGLEdBQVQsQ0FBUjtBQUNBL0IsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTZ0MsQ0FBQyxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFqQjtBQUNBOUIsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTZ0MsQ0FBQyxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFqQjtBQUNBOUIsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTZ0MsQ0FBQyxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFqQjtBQUNBOUIsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTUixJQUFJLENBQUMwQyxHQUFMLENBQVNILEdBQVQsQ0FBVDtBQUNBLFNBQU8vQixHQUFQO0FBQ0Q7QUF1TkQ7Ozs7Ozs7Ozs7QUFVTyxTQUFTbUMsS0FBVCxDQUFlbkMsR0FBZixFQUFvQkUsQ0FBcEIsRUFBdUJLLENBQXZCLEVBQTBCNkIsQ0FBMUIsRUFBNkI7QUFDbEM7QUFDQTtBQUNBLE1BQUl2QixFQUFFLEdBQUdYLENBQUMsQ0FBQyxDQUFELENBQVY7QUFBQSxNQUNJWSxFQUFFLEdBQUdaLENBQUMsQ0FBQyxDQUFELENBRFY7QUFBQSxNQUVJYSxFQUFFLEdBQUdiLENBQUMsQ0FBQyxDQUFELENBRlY7QUFBQSxNQUdJbUMsRUFBRSxHQUFHbkMsQ0FBQyxDQUFDLENBQUQsQ0FIVjtBQUlBLE1BQUljLEVBQUUsR0FBR1QsQ0FBQyxDQUFDLENBQUQsQ0FBVjtBQUFBLE1BQ0lVLEVBQUUsR0FBR1YsQ0FBQyxDQUFDLENBQUQsQ0FEVjtBQUFBLE1BRUlXLEVBQUUsR0FBR1gsQ0FBQyxDQUFDLENBQUQsQ0FGVjtBQUFBLE1BR0krQixFQUFFLEdBQUcvQixDQUFDLENBQUMsQ0FBRCxDQUhWO0FBSUEsTUFBSWdDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDQyxNQUFqQyxDQVhrQzs7QUFhbENILEVBQUFBLEtBQUssR0FBRzNCLEVBQUUsR0FBR0csRUFBTCxHQUFVRixFQUFFLEdBQUdHLEVBQWYsR0FBb0JGLEVBQUUsR0FBR0csRUFBekIsR0FBOEJtQixFQUFFLEdBQUdDLEVBQTNDLENBYmtDOztBQWVsQyxNQUFJRSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNmQSxJQUFBQSxLQUFLLEdBQUcsQ0FBQ0EsS0FBVDtBQUNBeEIsSUFBQUEsRUFBRSxHQUFHLENBQUNBLEVBQU47QUFDQUMsSUFBQUEsRUFBRSxHQUFHLENBQUNBLEVBQU47QUFDQUMsSUFBQUEsRUFBRSxHQUFHLENBQUNBLEVBQU47QUFDQW9CLElBQUFBLEVBQUUsR0FBRyxDQUFDQSxFQUFOO0FBQ0QsR0FyQmlDOzs7QUF3QmxDLE1BQUksTUFBTUUsS0FBTixHQUFjdkMsT0FBbEIsRUFBb0M7QUFDbEM7QUFDQXNDLElBQUFBLEtBQUssR0FBRy9DLElBQUksQ0FBQ29ELElBQUwsQ0FBVUosS0FBVixDQUFSO0FBQ0FDLElBQUFBLEtBQUssR0FBR2pELElBQUksQ0FBQ3lDLEdBQUwsQ0FBU00sS0FBVCxDQUFSO0FBQ0FHLElBQUFBLE1BQU0sR0FBR2xELElBQUksQ0FBQ3lDLEdBQUwsQ0FBUyxDQUFDLE1BQU1HLENBQVAsSUFBWUcsS0FBckIsSUFBOEJFLEtBQXZDO0FBQ0FFLElBQUFBLE1BQU0sR0FBR25ELElBQUksQ0FBQ3lDLEdBQUwsQ0FBU0csQ0FBQyxHQUFHRyxLQUFiLElBQXNCRSxLQUEvQjtBQUNELEdBTkQsTUFNTztBQUNMO0FBQ0E7QUFDQUMsSUFBQUEsTUFBTSxHQUFHLE1BQU1OLENBQWY7QUFDQU8sSUFBQUEsTUFBTSxHQUFHUCxDQUFUO0FBQ0QsR0FuQ2lDOzs7QUFzQ2xDcEMsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTMEMsTUFBTSxHQUFHN0IsRUFBVCxHQUFjOEIsTUFBTSxHQUFHM0IsRUFBaEM7QUFDQWhCLEVBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUzBDLE1BQU0sR0FBRzVCLEVBQVQsR0FBYzZCLE1BQU0sR0FBRzFCLEVBQWhDO0FBQ0FqQixFQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMwQyxNQUFNLEdBQUczQixFQUFULEdBQWM0QixNQUFNLEdBQUd6QixFQUFoQztBQUNBbEIsRUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTMEMsTUFBTSxHQUFHTCxFQUFULEdBQWNNLE1BQU0sR0FBR0wsRUFBaEM7QUFDQSxTQUFPdEMsR0FBUDtBQUNEO0FBNEREOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTNkMsUUFBVCxDQUFrQjdDLEdBQWxCLEVBQXVCOEMsQ0FBdkIsRUFBMEI7QUFDL0I7QUFDQTtBQUNBLE1BQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSLEdBQWNBLENBQUMsQ0FBQyxDQUFELENBQTVCO0FBQ0EsTUFBSUUsS0FBSjs7QUFFQSxNQUFJRCxNQUFNLEdBQUcsR0FBYixFQUFrQjtBQUNoQjtBQUNBQyxJQUFBQSxLQUFLLEdBQUd4RCxJQUFJLENBQUNNLElBQUwsQ0FBVWlELE1BQU0sR0FBRyxHQUFuQixDQUFSLENBRmdCOztBQUloQi9DLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxNQUFNZ0QsS0FBZjtBQUNBQSxJQUFBQSxLQUFLLEdBQUcsTUFBTUEsS0FBZCxDQUxnQjs7QUFPaEJoRCxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBQzhDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBVCxJQUFnQkUsS0FBekI7QUFDQWhELElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFDOEMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFULElBQWdCRSxLQUF6QjtBQUNBaEQsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUM4QyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9BLENBQUMsQ0FBQyxDQUFELENBQVQsSUFBZ0JFLEtBQXpCO0FBQ0QsR0FWRCxNQVVPO0FBQ0w7QUFDQSxRQUFJckQsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJbUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFaLEVBQWlCbkQsQ0FBQyxHQUFHLENBQUo7QUFDakIsUUFBSW1ELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0EsQ0FBQyxDQUFDbkQsQ0FBQyxHQUFHLENBQUosR0FBUUEsQ0FBVCxDQUFaLEVBQXlCQSxDQUFDLEdBQUcsQ0FBSjtBQUN6QixRQUFJc0QsQ0FBQyxHQUFHLENBQUN0RCxDQUFDLEdBQUcsQ0FBTCxJQUFVLENBQWxCO0FBQ0EsUUFBSXVELENBQUMsR0FBRyxDQUFDdkQsQ0FBQyxHQUFHLENBQUwsSUFBVSxDQUFsQjtBQUNBcUQsSUFBQUEsS0FBSyxHQUFHeEQsSUFBSSxDQUFDTSxJQUFMLENBQVVnRCxDQUFDLENBQUNuRCxDQUFDLEdBQUcsQ0FBSixHQUFRQSxDQUFULENBQUQsR0FBZW1ELENBQUMsQ0FBQ0csQ0FBQyxHQUFHLENBQUosR0FBUUEsQ0FBVCxDQUFoQixHQUE4QkgsQ0FBQyxDQUFDSSxDQUFDLEdBQUcsQ0FBSixHQUFRQSxDQUFULENBQS9CLEdBQTZDLEdBQXZELENBQVI7QUFDQWxELElBQUFBLEdBQUcsQ0FBQ0wsQ0FBRCxDQUFILEdBQVMsTUFBTXFELEtBQWY7QUFDQUEsSUFBQUEsS0FBSyxHQUFHLE1BQU1BLEtBQWQ7QUFDQWhELElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFDOEMsQ0FBQyxDQUFDRyxDQUFDLEdBQUcsQ0FBSixHQUFRQyxDQUFULENBQUQsR0FBZUosQ0FBQyxDQUFDSSxDQUFDLEdBQUcsQ0FBSixHQUFRRCxDQUFULENBQWpCLElBQWdDRCxLQUF6QztBQUNBaEQsSUFBQUEsR0FBRyxDQUFDaUQsQ0FBRCxDQUFILEdBQVMsQ0FBQ0gsQ0FBQyxDQUFDRyxDQUFDLEdBQUcsQ0FBSixHQUFRdEQsQ0FBVCxDQUFELEdBQWVtRCxDQUFDLENBQUNuRCxDQUFDLEdBQUcsQ0FBSixHQUFRc0QsQ0FBVCxDQUFqQixJQUFnQ0QsS0FBekM7QUFDQWhELElBQUFBLEdBQUcsQ0FBQ2tELENBQUQsQ0FBSCxHQUFTLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFHLENBQUosR0FBUXZELENBQVQsQ0FBRCxHQUFlbUQsQ0FBQyxDQUFDbkQsQ0FBQyxHQUFHLENBQUosR0FBUXVELENBQVQsQ0FBakIsSUFBZ0NGLEtBQXpDO0FBQ0Q7O0FBRUQsU0FBT2hELEdBQVA7QUFDRDtBQWtLRDs7Ozs7Ozs7O0FBU08sSUFBSVMsV0FBUyxHQUFHMEMsV0FBaEI7QUFtQlA7Ozs7Ozs7Ozs7OztBQVlPLElBQUlDLFVBQVUsR0FBRyxZQUFZO0FBQ2xDLE1BQUlDLE9BQU8sR0FBR0MsUUFBQSxFQUFkO0FBQ0EsTUFBSUMsU0FBUyxHQUFHRCxVQUFBLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWhCO0FBQ0EsTUFBSUUsU0FBUyxHQUFHRixVQUFBLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWhCO0FBQ0EsU0FBTyxVQUFVdEQsR0FBVixFQUFlRSxDQUFmLEVBQWtCSyxDQUFsQixFQUFxQjtBQUMxQixRQUFJSSxLQUFHLEdBQUcyQyxHQUFBLENBQVNwRCxDQUFULEVBQVlLLENBQVosQ0FBVjs7QUFFQSxRQUFJSSxLQUFHLEdBQUcsQ0FBQyxRQUFYLEVBQXFCO0FBQ25CMkMsTUFBQUEsS0FBQSxDQUFXRCxPQUFYLEVBQW9CRSxTQUFwQixFQUErQnJELENBQS9CO0FBQ0EsVUFBSW9ELEdBQUEsQ0FBU0QsT0FBVCxJQUFvQixRQUF4QixFQUFrQ0MsS0FBQSxDQUFXRCxPQUFYLEVBQW9CRyxTQUFwQixFQUErQnRELENBQS9CO0FBQ2xDb0QsTUFBQUEsU0FBQSxDQUFlRCxPQUFmLEVBQXdCQSxPQUF4QjtBQUNBeEIsTUFBQUEsWUFBWSxDQUFDN0IsR0FBRCxFQUFNcUQsT0FBTixFQUFlN0QsSUFBSSxDQUFDaUUsRUFBcEIsQ0FBWjtBQUNBLGFBQU96RCxHQUFQO0FBQ0QsS0FORCxNQU1PLElBQUlXLEtBQUcsR0FBRyxRQUFWLEVBQW9CO0FBQ3pCWCxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBQSxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNBLGFBQU9BLEdBQVA7QUFDRCxLQU5NLE1BTUE7QUFDTHNELE1BQUFBLEtBQUEsQ0FBV0QsT0FBWCxFQUFvQm5ELENBQXBCLEVBQXVCSyxDQUF2QjtBQUNBUCxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNxRCxPQUFPLENBQUMsQ0FBRCxDQUFoQjtBQUNBckQsTUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTcUQsT0FBTyxDQUFDLENBQUQsQ0FBaEI7QUFDQXJELE1BQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU3FELE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQ0FyRCxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsSUFBSVcsS0FBYjtBQUNBLGFBQU9GLFdBQVMsQ0FBQ1QsR0FBRCxFQUFNQSxHQUFOLENBQWhCO0FBQ0Q7QUFDRixHQXZCRDtBQXdCRCxDQTVCdUIsRUFBakI7QUE2QlA7Ozs7Ozs7Ozs7OztBQVlPLElBQUkwRCxNQUFNLEdBQUcsWUFBWTtBQUM5QixNQUFJQyxLQUFLLEdBQUc1RCxRQUFNLEVBQWxCO0FBQ0EsTUFBSTZELEtBQUssR0FBRzdELFFBQU0sRUFBbEI7QUFDQSxTQUFPLFVBQVVDLEdBQVYsRUFBZUUsQ0FBZixFQUFrQkssQ0FBbEIsRUFBcUJzRCxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkIxQixDQUEzQixFQUE4QjtBQUNuQ0QsSUFBQUEsS0FBSyxDQUFDd0IsS0FBRCxFQUFRekQsQ0FBUixFQUFXNEQsQ0FBWCxFQUFjMUIsQ0FBZCxDQUFMO0FBQ0FELElBQUFBLEtBQUssQ0FBQ3lCLEtBQUQsRUFBUXJELENBQVIsRUFBV3NELENBQVgsRUFBY3pCLENBQWQsQ0FBTDtBQUNBRCxJQUFBQSxLQUFLLENBQUNuQyxHQUFELEVBQU0yRCxLQUFOLEVBQWFDLEtBQWIsRUFBb0IsSUFBSXhCLENBQUosSUFBUyxJQUFJQSxDQUFiLENBQXBCLENBQUw7QUFDQSxXQUFPcEMsR0FBUDtBQUNELEdBTEQ7QUFNRCxDQVRtQixFQUFiO0FBVVA7Ozs7Ozs7Ozs7O0FBV08sSUFBSStELE9BQU8sR0FBRyxZQUFZO0FBQy9CLE1BQUlDLElBQUksR0FBR0MsTUFBQSxFQUFYO0FBQ0EsU0FBTyxVQUFVakUsR0FBVixFQUFla0UsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3JDSixJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVHLEtBQUssQ0FBQyxDQUFELENBQWY7QUFDQUgsSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVRyxLQUFLLENBQUMsQ0FBRCxDQUFmO0FBQ0FILElBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUcsS0FBSyxDQUFDLENBQUQsQ0FBZjtBQUNBSCxJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVJLEVBQUUsQ0FBQyxDQUFELENBQVo7QUFDQUosSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVSSxFQUFFLENBQUMsQ0FBRCxDQUFaO0FBQ0FKLElBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUksRUFBRSxDQUFDLENBQUQsQ0FBWjtBQUNBSixJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQUQsQ0FBZjtBQUNBRixJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQUQsQ0FBZjtBQUNBRixJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQUQsQ0FBZjtBQUNBLFdBQU96RCxXQUFTLENBQUNULEdBQUQsRUFBTTZDLFFBQVEsQ0FBQzdDLEdBQUQsRUFBTWdFLElBQU4sQ0FBZCxDQUFoQjtBQUNELEdBWEQ7QUFZRCxDQWRvQixFQUFkOztBQ3RyQlA7Ozs7O0FBS0E7Ozs7OztBQU1PLFNBQVNqRSxRQUFULEdBQWtCO0FBQ3ZCLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxVQUFKLENBQXdCLENBQXhCLENBQVY7O0FBRUEsTUFBSUEsVUFBQSxJQUF1QlgsWUFBM0IsRUFBeUM7QUFDdkNVLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO0FBQ0FBLElBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFUO0FBQ0Q7O0FBRUQsU0FBT0EsR0FBUDtBQUNEO0FBZ2pCRDs7Ozs7Ozs7Ozs7OztBQWFPLElBQUltQixTQUFPLEdBQUcsWUFBWTtBQUMvQixNQUFJQyxHQUFHLEdBQUdyQixRQUFNLEVBQWhCO0FBQ0EsU0FBTyxVQUFVRyxDQUFWLEVBQWFtQixNQUFiLEVBQXFCQyxNQUFyQixFQUE2QkMsS0FBN0IsRUFBb0NDLEVBQXBDLEVBQXdDQyxHQUF4QyxFQUE2QztBQUNsRCxRQUFJOUIsQ0FBSixFQUFPK0IsQ0FBUDs7QUFFQSxRQUFJLENBQUNMLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUcsQ0FBVDtBQUNEOztBQUVELFFBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1hBLE1BQUFBLE1BQU0sR0FBRyxDQUFUO0FBQ0Q7O0FBRUQsUUFBSUMsS0FBSixFQUFXO0FBQ1RHLE1BQUFBLENBQUMsR0FBR2xDLElBQUksQ0FBQ21DLEdBQUwsQ0FBU0osS0FBSyxHQUFHRixNQUFSLEdBQWlCQyxNQUExQixFQUFrQ3BCLENBQUMsQ0FBQ0wsTUFBcEMsQ0FBSjtBQUNELEtBRkQsTUFFTztBQUNMNkIsTUFBQUEsQ0FBQyxHQUFHeEIsQ0FBQyxDQUFDTCxNQUFOO0FBQ0Q7O0FBRUQsU0FBS0YsQ0FBQyxHQUFHMkIsTUFBVCxFQUFpQjNCLENBQUMsR0FBRytCLENBQXJCLEVBQXdCL0IsQ0FBQyxJQUFJMEIsTUFBN0IsRUFBcUM7QUFDbkNELE1BQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2xCLENBQUMsQ0FBQ1AsQ0FBRCxDQUFWO0FBQ0F5QixNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNsQixDQUFDLENBQUNQLENBQUMsR0FBRyxDQUFMLENBQVY7QUFDQTZCLE1BQUFBLEVBQUUsQ0FBQ0osR0FBRCxFQUFNQSxHQUFOLEVBQVdLLEdBQVgsQ0FBRjtBQUNBdkIsTUFBQUEsQ0FBQyxDQUFDUCxDQUFELENBQUQsR0FBT3lCLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDQWxCLE1BQUFBLENBQUMsQ0FBQ1AsQ0FBQyxHQUFHLENBQUwsQ0FBRCxHQUFXeUIsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNEOztBQUVELFdBQU9sQixDQUFQO0FBQ0QsR0ExQkQ7QUEyQkQsQ0E3Qm9CLEVBQWQ7O0FDOWtCUDs7OztJQUdNbUU7Ozs7Ozs7O0FBQ0o7Ozs7Ozs7dUNBTzBCbEUsR0FBR0MsR0FBRztBQUM5QixVQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1QsWUFBSUQsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNWLGlCQUFPWCxJQUFJLENBQUM4RSxJQUFMLENBQVVuRSxDQUFDLEdBQUdDLENBQWQsQ0FBUDtBQUNEOztBQUVELGVBQU8sSUFBSVosSUFBSSxDQUFDaUUsRUFBVCxHQUFjakUsSUFBSSxDQUFDOEUsSUFBTCxDQUFVbkUsQ0FBQyxHQUFHQyxDQUFkLENBQXJCO0FBQ0Q7O0FBQ0QsVUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNULGVBQU9aLElBQUksQ0FBQ2lFLEVBQUwsR0FBVWpFLElBQUksQ0FBQzhFLElBQUwsQ0FBVW5FLENBQUMsR0FBR0MsQ0FBZCxDQUFqQjtBQUNEOztBQUVELFVBQUlELENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVCxlQUFPWCxJQUFJLENBQUNpRSxFQUFMLEdBQVUsR0FBakI7QUFDRDs7QUFFRCxhQUFRLElBQUlqRSxJQUFJLENBQUNpRSxFQUFWLEdBQWdCLEdBQXZCO0FBQ0Q7QUFFRDs7Ozs7Ozs7O29DQU11QmMsS0FBSztBQUMxQixVQUFNQyxNQUFNLEdBQUdsQixRQUFBLEVBQWY7QUFDQUEsTUFBQUEsU0FBQSxDQUFla0IsTUFBZixFQUF1QkQsR0FBdkI7QUFFQSxVQUFNRSxNQUFNLEdBQUdqRixJQUFJLENBQUNrRixJQUFMLENBQVVGLE1BQU0sQ0FBQyxDQUFELENBQWhCLENBQWY7QUFDQSxVQUFNRyxNQUFNLEdBQUcsS0FBS0Msa0JBQUwsQ0FBd0JKLE1BQU0sQ0FBQyxDQUFELENBQTlCLEVBQW1DQSxNQUFNLENBQUMsQ0FBRCxDQUF6QyxDQUFmO0FBRUEsVUFBTUssTUFBTSxHQUFJSixNQUFNLEdBQUcsS0FBVixHQUFtQmpGLElBQUksQ0FBQ2lFLEVBQXZDO0FBQ0EsVUFBSXFCLE1BQU0sR0FBSUgsTUFBTSxHQUFHLEtBQVYsR0FBbUJuRixJQUFJLENBQUNpRSxFQUFyQzs7QUFDQSxhQUFPcUIsTUFBTSxHQUFHLEtBQWhCLEVBQXVCO0FBQ3JCQSxRQUFBQSxNQUFNLElBQUksS0FBVjtBQUNEOztBQUVELGFBQU87QUFDTEMsUUFBQUEsR0FBRyxFQUFFRixNQURBO0FBRUxHLFFBQUFBLEdBQUcsRUFBRUY7QUFGQSxPQUFQO0FBSUQ7QUFFRDs7Ozs7Ozs7OzswQ0FPNkJHLElBQUlDLElBQUk7QUFDbkMsVUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxJQUFJNUYsSUFBSSxDQUFDaUUsRUFBTCxHQUFVLEdBQWQsQ0FBcEI7QUFBQSxPQUF6Qjs7QUFFQSxVQUFNNEIsQ0FBQyxHQUFHLElBQVYsQ0FIbUM7O0FBSW5DLFVBQU1DLElBQUksR0FBR0gsZ0JBQWdCLENBQUNGLEVBQUUsQ0FBQ0YsR0FBSixDQUE3QixDQUptQzs7QUFLbkMsVUFBTVEsSUFBSSxHQUFHSixnQkFBZ0IsQ0FBQ0QsRUFBRSxDQUFDSCxHQUFKLENBQTdCO0FBQ0EsVUFBTVMsUUFBUSxHQUFHTCxnQkFBZ0IsQ0FBRUQsRUFBRSxDQUFDSCxHQUFILEdBQVNFLEVBQUUsQ0FBQ0YsR0FBZCxDQUFqQztBQUNBLFVBQU1VLFdBQVcsR0FBR04sZ0JBQWdCLENBQUVELEVBQUUsQ0FBQ0YsR0FBSCxHQUFTQyxFQUFFLENBQUNELEdBQWQsQ0FBcEM7QUFFQSxVQUFNOUUsQ0FBQyxHQUFHVixJQUFJLENBQUN5QyxHQUFMLENBQVN1RCxRQUFRLEdBQUcsQ0FBcEIsSUFBeUJoRyxJQUFJLENBQUN5QyxHQUFMLENBQVN1RCxRQUFRLEdBQUcsQ0FBcEIsQ0FBekIsR0FDRWhHLElBQUksQ0FBQzBDLEdBQUwsQ0FBU29ELElBQVQsSUFBaUI5RixJQUFJLENBQUMwQyxHQUFMLENBQVNxRCxJQUFULENBQWpCLEdBQ0EvRixJQUFJLENBQUN5QyxHQUFMLENBQVN3RCxXQUFXLEdBQUcsQ0FBdkIsQ0FEQSxHQUM0QmpHLElBQUksQ0FBQ3lDLEdBQUwsQ0FBU3dELFdBQVcsR0FBRyxDQUF2QixDQUZ4QztBQUdBLFVBQU01QixDQUFDLEdBQUcsSUFBSXJFLElBQUksQ0FBQ2tHLEtBQUwsQ0FBV2xHLElBQUksQ0FBQ00sSUFBTCxDQUFVSSxDQUFWLENBQVgsRUFBeUJWLElBQUksQ0FBQ00sSUFBTCxDQUFVLElBQUlJLENBQWQsQ0FBekIsQ0FBZDtBQUVBLFVBQU00RCxDQUFDLEdBQUd1QixDQUFDLEdBQUd4QixDQUFkLENBZG1DOztBQWdCbkMsYUFBT0MsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O29DQVF1QmlCLEtBQUtDLEtBQUtXLEtBQUs7QUFDcEMsVUFBTUMsUUFBUSxHQUFHRCxHQUFHLElBQUksR0FBeEI7QUFFQSxVQUFNbEIsTUFBTSxHQUFJTSxHQUFHLEdBQUd2RixJQUFJLENBQUNpRSxFQUFaLEdBQWtCLEtBQWpDO0FBQ0EsVUFBTW9DLE1BQU0sR0FBSWIsR0FBRyxHQUFHeEYsSUFBSSxDQUFDaUUsRUFBWixHQUFrQixLQUFqQztBQUVBLFVBQU1xQyxNQUFNLEdBQUd0RyxJQUFJLENBQUMwQyxHQUFMLENBQVN1QyxNQUFULENBQWY7QUFDQSxVQUFNL0UsQ0FBQyxHQUFHRixJQUFJLENBQUN5QyxHQUFMLENBQVN3QyxNQUFULENBQVY7QUFDQSxVQUFNdEUsQ0FBQyxHQUFHWCxJQUFJLENBQUN5QyxHQUFMLENBQVM0RCxNQUFULElBQW1CQyxNQUE3QjtBQUNBLFVBQU0xRixDQUFDLEdBQUdaLElBQUksQ0FBQzBDLEdBQUwsQ0FBUzJELE1BQVQsSUFBbUJDLE1BQTdCO0FBRUEsVUFBTXZCLEdBQUcsR0FBR2pCLFVBQUEsQ0FBZ0JuRCxDQUFoQixFQUFtQlQsQ0FBbkIsRUFBc0JVLENBQXRCLENBQVo7QUFFQSxVQUFNMkYsSUFBSSxHQUFHekMsUUFBQSxFQUFiO0FBQ0FBLE1BQUFBLFNBQUEsQ0FBZXlDLElBQWYsRUFBcUJ4QixHQUFyQjtBQUVBLFVBQU1qRSxLQUFHLEdBQUdnRCxLQUFBLENBQVd5QyxJQUFYLEVBQWlCQSxJQUFqQixFQUF1QkgsUUFBdkIsQ0FBWjtBQUVBdEMsTUFBQUEsR0FBQSxDQUFTaUIsR0FBVCxFQUFjQSxHQUFkLEVBQW1CakUsS0FBbkI7QUFDQSxhQUFPaUUsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs2QkFNZ0J5QixHQUFHdkYsV0FBVztBQUM1QixVQUFJd0YsQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFVBQUkzRixDQUFDLEdBQUcsQ0FBUjtBQUVBLFVBQU13RixJQUFJLEdBQUd0RixTQUFTLEtBQUssS0FBM0I7O0FBRUEsVUFBSXVGLENBQUMsQ0FBQ25HLE1BQUYsS0FBYSxDQUFqQixFQUFvQjtBQUNsQm9HLFFBQUFBLENBQUMsZUFBUUQsQ0FBQyxDQUFDLENBQUQsQ0FBVCxTQUFlQSxDQUFDLENBQUMsQ0FBRCxDQUFoQixDQUFEO0FBQ0FFLFFBQUFBLENBQUMsZUFBUUYsQ0FBQyxDQUFDLENBQUQsQ0FBVCxTQUFlQSxDQUFDLENBQUMsQ0FBRCxDQUFoQixDQUFEO0FBQ0F6RixRQUFBQSxDQUFDLGVBQVF5RixDQUFDLENBQUMsQ0FBRCxDQUFULFNBQWVBLENBQUMsQ0FBQyxDQUFELENBQWhCLENBQUQ7QUFDRCxPQUpELE1BSU8sSUFBSUEsQ0FBQyxDQUFDbkcsTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ3pCb0csUUFBQUEsQ0FBQyxlQUFRRCxDQUFDLENBQUMsQ0FBRCxDQUFULFNBQWVBLENBQUMsQ0FBQyxDQUFELENBQWhCLENBQUQ7QUFDQUUsUUFBQUEsQ0FBQyxlQUFRRixDQUFDLENBQUMsQ0FBRCxDQUFULFNBQWVBLENBQUMsQ0FBQyxDQUFELENBQWhCLENBQUQ7QUFDQXpGLFFBQUFBLENBQUMsZUFBUXlGLENBQUMsQ0FBQyxDQUFELENBQVQsU0FBZUEsQ0FBQyxDQUFDLENBQUQsQ0FBaEIsQ0FBRDtBQUNEOztBQUVELFVBQUlELElBQUosRUFBVTtBQUNSRSxRQUFBQSxDQUFDLElBQUksR0FBTDtBQUNBQyxRQUFBQSxDQUFDLElBQUksR0FBTDtBQUNBM0YsUUFBQUEsQ0FBQyxJQUFJLEdBQUw7QUFDRCxPQUpELE1BSU87QUFDTDBGLFFBQUFBLENBQUMsR0FBR0UsUUFBUSxDQUFDRixDQUFELEVBQUksRUFBSixDQUFaO0FBQ0FDLFFBQUFBLENBQUMsR0FBR0MsUUFBUSxDQUFDRCxDQUFELEVBQUksRUFBSixDQUFaO0FBQ0EzRixRQUFBQSxDQUFDLEdBQUc0RixRQUFRLENBQUM1RixDQUFELEVBQUksRUFBSixDQUFaO0FBQ0Q7O0FBRUQsYUFBTyxDQUFDMEYsQ0FBRCxFQUFJQyxDQUFKLEVBQU8zRixDQUFQLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OzhCQU9pQnlGLEdBQUc5RixHQUFHTyxXQUFXO0FBQ2hDLFVBQU0yRixHQUFHLEdBQUcsS0FBS0MsUUFBTCxDQUFjTCxDQUFkLEVBQWlCdkYsU0FBakIsQ0FBWjtBQUNBLFVBQU02RixLQUFLLEdBQUk3RixTQUFTLEtBQUssS0FBZixHQUF3QlAsQ0FBeEIsR0FBNEJBLENBQUMsR0FBRyxHQUE5QztBQUNBLGFBQU8sQ0FBQ2tHLEdBQUcsQ0FBQyxDQUFELENBQUosRUFBU0EsR0FBRyxDQUFDLENBQUQsQ0FBWixFQUFpQkEsR0FBRyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJFLEtBQXpCLENBQVA7QUFDRDs7OzZCQUVlcEcsR0FBR0ssR0FBRztBQUNwQixhQUFPTCxDQUFDLENBQUNxRyxLQUFGLENBQVEsVUFBQ0MsRUFBRDtBQUFBLGVBQVNqRyxDQUFDLENBQUNrRyxJQUFGLENBQU8sVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLEtBQUtGLEVBQWI7QUFBQSxTQUFQLE1BQTRCRyxTQUFyQztBQUFBLE9BQVIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OEJBVWlCekcsR0FBR0ssR0FBR3FHLFFBQVE7QUFDN0IsVUFBTUMsRUFBRSxHQUFHVixRQUFRLENBQUNqRyxDQUFDLENBQUM0RyxPQUFGLENBQVUsSUFBVixFQUFnQixFQUFoQixDQUFELEVBQXNCLEVBQXRCLENBQW5CO0FBQ0EsVUFBTUMsRUFBRSxHQUFHRixFQUFFLElBQUksRUFBakI7QUFBcUIsVUFBTUcsRUFBRSxHQUFHSCxFQUFFLElBQUksQ0FBTixHQUFVLElBQXJCO0FBQTJCLFVBQU1JLEVBQUUsR0FBR0osRUFBRSxHQUFHLElBQWhCO0FBQ2hELFVBQU1LLEVBQUUsR0FBR2YsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDdUcsT0FBRixDQUFVLElBQVYsRUFBZ0IsRUFBaEIsQ0FBRCxFQUFzQixFQUF0QixDQUFuQjtBQUNBLFVBQU1LLEVBQUUsR0FBR0QsRUFBRSxJQUFJLEVBQWpCO0FBQXFCLFVBQU1FLEVBQUUsR0FBR0YsRUFBRSxJQUFJLENBQU4sR0FBVSxJQUFyQjtBQUEyQixVQUFNRyxFQUFFLEdBQUdILEVBQUUsR0FBRyxJQUFoQjtBQUNoRCxVQUFNSSxFQUFFLEdBQUdQLEVBQUUsR0FBR0gsTUFBTSxJQUFJTyxFQUFFLEdBQUdKLEVBQVQsQ0FBdEI7QUFDQSxVQUFNUSxFQUFFLEdBQUdQLEVBQUUsR0FBR0osTUFBTSxJQUFJUSxFQUFFLEdBQUdKLEVBQVQsQ0FBdEI7QUFDQSxVQUFNUSxFQUFFLEdBQUdQLEVBQUUsR0FBR0wsTUFBTSxJQUFJUyxFQUFFLEdBQUdKLEVBQVQsQ0FBdEI7QUFFQSx3QkFBVyxDQUFDLENBQUMsS0FBSyxFQUFOLEtBQWFLLEVBQUUsSUFBSSxFQUFuQixLQUEwQkMsRUFBRSxJQUFJLENBQWhDLElBQXFDQyxFQUFyQyxHQUEwQyxDQUEzQyxFQUE4Q0MsUUFBOUMsQ0FBdUQsRUFBdkQsRUFBMkRDLEtBQTNELENBQWlFLENBQWpFLENBQVg7QUFDRDs7Ozs7O0FDNUxILElBQUlDLE1BQU07QUFDVjtBQUFVLFVBQVNDLE9BQVQsRUFBa0I7QUFBRTs7QUFDOUI7QUFBVTs7QUFDVjtBQUFVLE1BQUlDLGdCQUFnQixHQUFHLEVBQXZCO0FBRVY7QUFBVTs7QUFDVjs7QUFBVSxXQUFTQyxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7QUFFakQ7QUFBVzs7QUFDWDtBQUFXLFFBQUdGLGdCQUFnQixDQUFDRSxRQUFELENBQW5CO0FBQ1g7QUFBWSxhQUFPRixnQkFBZ0IsQ0FBQ0UsUUFBRCxDQUFoQixDQUEyQkMsT0FBbEM7QUFFWjtBQUFXOztBQUNYOztBQUFXLFFBQUlDLE1BQU0sR0FBR0osZ0JBQWdCLENBQUNFLFFBQUQsQ0FBaEIsR0FBNkI7QUFDckQ7QUFBWUMsTUFBQUEsT0FBTyxFQUFFLEVBRGdDOztBQUVyRDtBQUFZRSxNQUFBQSxFQUFFLEVBQUVILFFBRnFDOztBQUdyRDtBQUFZSSxNQUFBQSxNQUFNLEVBQUU7QUFDcEI7O0FBSnFELEtBQTFDO0FBTVg7QUFBVzs7QUFDWDs7QUFBV1AsSUFBQUEsT0FBTyxDQUFDRyxRQUFELENBQVAsQ0FBa0JLLElBQWxCLENBQXVCSCxNQUFNLENBQUNELE9BQTlCLEVBQXVDQyxNQUF2QyxFQUErQ0EsTUFBTSxDQUFDRCxPQUF0RCxFQUErREYsbUJBQS9EO0FBRVg7QUFBVzs7QUFDWDs7QUFBV0csSUFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLElBQWhCO0FBRVg7QUFBVzs7QUFDWDs7QUFBVyxXQUFPRixNQUFNLENBQUNELE9BQWQ7QUFDWDtBQUFXO0FBR1g7QUFBVTs7QUFDVjs7O0FBQVVGLEVBQUFBLG1CQUFtQixDQUFDaEYsQ0FBcEIsR0FBd0I4RSxPQUF4QjtBQUVWO0FBQVU7O0FBQ1Y7O0FBQVVFLEVBQUFBLG1CQUFtQixDQUFDakUsQ0FBcEIsR0FBd0JnRSxnQkFBeEI7QUFFVjtBQUFVOztBQUNWOztBQUFVQyxFQUFBQSxtQkFBbUIsQ0FBQ08sQ0FBcEIsR0FBd0IsRUFBeEI7QUFFVjtBQUFVOztBQUNWOztBQUFVLFNBQU9QLG1CQUFtQixDQUFDLENBQUQsQ0FBMUI7QUFDVjtBQUFVLENBeENEO0FBeUNUOztBQUNBO0FBQVU7QUFDVjs7QUFDQTtBQUFPLFVBQVNHLE1BQVQsRUFBaUJELE9BQWpCLEVBQTBCRixtQkFBMUIsRUFBK0M7O0FBSXJERyxFQUFBQSxNQUFNLENBQUNELE9BQVAsR0FBaUJGLG1CQUFtQixDQUFDLENBQUQsQ0FBcEM7QUFFRDtBQUFPLENBUkc7QUFTVjs7QUFDQTtBQUFPLFVBQVNHLE1BQVQsRUFBaUJELE9BQWpCLEVBQTBCRixtQkFBMUIsRUFBK0M7O0FBSXJELE1BQUlRLFNBQU8sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQyxRQUFPRCxNQUFNLENBQUNFLFFBQWQsTUFBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsbUJBQWNBLEdBQWQ7QUFBb0IsR0FBM0csR0FBOEcsVUFBVUEsR0FBVixFQUFlO0FBQUUsV0FBT0EsR0FBRyxJQUFJLE9BQU9ILE1BQVAsS0FBa0IsVUFBekIsSUFBdUNHLEdBQUcsQ0FBQ0MsV0FBSixLQUFvQkosTUFBM0QsSUFBcUVHLEdBQUcsS0FBS0gsTUFBTSxDQUFDSyxTQUFwRixHQUFnRyxRQUFoRyxXQUFrSEYsR0FBbEgsQ0FBUDtBQUErSCxHQUE1UTtBQUVBOzs7Ozs7O0FBT0EsR0FBQyxZQUFZOztBQUtYLFFBQUlHLEdBQUcsR0FBR3JKLElBQUksQ0FBQ3FKLEdBQWY7QUFBQSxRQUNJbEgsR0FBRyxHQUFHbkMsSUFBSSxDQUFDbUMsR0FEZjtBQUFBLFFBRUltSCxHQUFHLEdBQUd0SixJQUFJLENBQUNzSixHQUZmO0FBQUEsUUFHSTVHLEdBQUcsR0FBRzFDLElBQUksQ0FBQzBDLEdBSGY7QUFBQSxRQUlJRCxHQUFHLEdBQUd6QyxJQUFJLENBQUN5QyxHQUpmO0FBQUEsUUFLSVcsSUFBSSxHQUFHcEQsSUFBSSxDQUFDb0QsSUFMaEI7QUFBQSxRQU1JOUMsSUFBSSxHQUFHTixJQUFJLENBQUNNLElBTmhCO0FBQUEsUUFPSWlKLEVBQUUsR0FBR3ZKLElBQUksQ0FBQ2lFLEVBUGQ7QUFBQTtBQVVBdUYsSUFBQUEsSUFBSSxHQUFHO0FBQUU3SSxNQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRVCxNQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjVSxNQUFBQSxDQUFDLEVBQUU7QUFBakIsS0FWUCxDQUxXOztBQWtCWCxRQUFJNkksS0FBSyxHQUFHbkIsbUJBQW1CLENBQUMsQ0FBRCxDQUEvQixDQWxCVzs7O0FBcUJYLFFBQUlvQixVQUFVLEdBQUdwQixtQkFBbUIsQ0FBQyxDQUFELENBQXBDO0FBRUE7Ozs7Ozs7Ozs7QUFRQSxRQUFJSCxNQUFNLEdBQUcsU0FBU0EsTUFBVCxDQUFnQndCLE1BQWhCLEVBQXdCO0FBQ25DLFVBQUlDLElBQUksR0FBR0QsTUFBTSxJQUFJQSxNQUFNLENBQUNoSSxPQUFqQixHQUEyQmdJLE1BQTNCLEdBQW9DLEdBQUd6QixLQUFILENBQVNVLElBQVQsQ0FBY3hJLFNBQWQsQ0FBL0M7QUFDQSxVQUFJeUosUUFBUSxHQUFHLEtBQWY7O0FBQ0EsVUFBSWYsU0FBTyxDQUFDYyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDakNDLFFBQUFBLFFBQVEsR0FBR0QsSUFBSSxDQUFDdkosTUFBaEI7QUFDQSxZQUFJeUosT0FBTyxHQUFHLEVBQWQ7QUFDQUYsUUFBQUEsSUFBSSxDQUFDakksT0FBTCxDQUFhLFVBQVVvSSxLQUFWLEVBQWlCO0FBQzVCLFdBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCcEksT0FBaEIsQ0FBd0IsVUFBVTJDLENBQVYsRUFBYTtBQUNuQyxnQkFBSSxPQUFPeUYsS0FBSyxDQUFDekYsQ0FBRCxDQUFaLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25Dd0YsY0FBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWFELEtBQUssQ0FBQ3pGLENBQUQsQ0FBbEI7QUFDRDtBQUNGLFdBSkQ7QUFLRCxTQU5EO0FBT0FzRixRQUFBQSxJQUFJLEdBQUdFLE9BQVA7QUFDRDs7QUFDRCxVQUFJRyxNQUFNLEdBQUcsS0FBYjtBQUNBLFVBQUkvSSxHQUFHLEdBQUcwSSxJQUFJLENBQUN2SixNQUFmOztBQUNBLFVBQUl3SixRQUFKLEVBQWM7QUFDWixZQUFJQSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixjQUFJekosU0FBUyxDQUFDQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGtCQUFNLElBQUk2SixLQUFKLENBQVUsc0VBQVYsQ0FBTjtBQUNEOztBQUNERCxVQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNEO0FBQ0YsT0FQRCxNQU9PO0FBQ0wsWUFBSS9JLEdBQUcsS0FBSyxDQUFSLElBQWFBLEdBQUcsS0FBSyxDQUFyQixJQUEwQkEsR0FBRyxLQUFLLENBQWxDLElBQXVDQSxHQUFHLEtBQUssRUFBbkQsRUFBdUQ7QUFDckQsY0FBSWQsU0FBUyxDQUFDQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGtCQUFNLElBQUk2SixLQUFKLENBQVUsc0VBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxVQUFJQyxHQUFHLEdBQUcsQ0FBQ0YsTUFBRCxLQUFZL0ksR0FBRyxLQUFLLENBQVIsSUFBYUEsR0FBRyxLQUFLLEVBQWpDLEtBQXdDeUksTUFBTSxJQUFJQSxNQUFNLENBQUMsQ0FBRCxDQUFoQixJQUF1QixPQUFPQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUvSSxDQUFqQixLQUF1QixXQUFoRzs7QUFDQSxXQUFLdUosR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJQyxHQUFHLEdBQUcsQ0FBVixFQUFhQyxJQUFJLEdBQUdILEdBQUcsR0FBRyxDQUFILEdBQU8sQ0FBbkMsRUFBc0NFLEdBQUcsR0FBR25KLEdBQTVDLEVBQWlEbUosR0FBRyxJQUFJQyxJQUF4RCxFQUE4RDtBQUM1RCxZQUFJUCxLQUFLLEdBQUc7QUFDVnBKLFVBQUFBLENBQUMsRUFBRWlKLElBQUksQ0FBQ1MsR0FBRCxDQURHO0FBRVZuSyxVQUFBQSxDQUFDLEVBQUUwSixJQUFJLENBQUNTLEdBQUcsR0FBRyxDQUFQO0FBRkcsU0FBWjs7QUFJQSxZQUFJRixHQUFKLEVBQVM7QUFDUEosVUFBQUEsS0FBSyxDQUFDbkosQ0FBTixHQUFVZ0osSUFBSSxDQUFDUyxHQUFHLEdBQUcsQ0FBUCxDQUFkO0FBQ0Q7O0FBQ0RELFFBQUFBLE1BQU0sQ0FBQ0osSUFBUCxDQUFZRCxLQUFaO0FBQ0Q7O0FBQ0QsV0FBS1EsS0FBTCxHQUFhSCxNQUFNLENBQUMvSixNQUFQLEdBQWdCLENBQTdCO0FBQ0EsV0FBSytKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUlJLElBQUksR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVg7QUFDQSxVQUFJTCxHQUFKLEVBQVNLLElBQUksQ0FBQ1IsSUFBTCxDQUFVLEdBQVY7QUFDVCxXQUFLUSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWNELElBQUksQ0FBQ25LLE1BQW5COztBQUVBLE9BQUMsVUFBVXFLLEtBQVYsRUFBaUI7QUFDaEIsWUFBSUgsS0FBSyxHQUFHRyxLQUFLLENBQUNILEtBQWxCO0FBQ0EsWUFBSUgsTUFBTSxHQUFHTSxLQUFLLENBQUNOLE1BQW5CO0FBQ0EsWUFBSTFKLENBQUMsR0FBRytJLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWVAsTUFBWixFQUFvQjtBQUFFMUUsVUFBQUEsRUFBRSxFQUFFMEUsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFpQlEsVUFBQUEsRUFBRSxFQUFFUixNQUFNLENBQUNHLEtBQUQ7QUFBM0IsU0FBcEIsQ0FBUjs7QUFDQSxhQUFLLElBQUlwSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTyxDQUFDLENBQUNMLE1BQXRCLEVBQThCRixDQUFDLEVBQS9CLEVBQW1DO0FBQ2pDLGNBQUlrSixHQUFHLENBQUMzSSxDQUFDLENBQUNQLENBQUQsQ0FBRCxDQUFLRCxDQUFOLENBQUgsR0FBYyxNQUFsQixFQUEwQjtBQUN4QndLLFlBQUFBLEtBQUssQ0FBQ0csT0FBTixHQUFnQixLQUFoQjtBQUNBO0FBQ0Q7QUFDRjs7QUFDREgsUUFBQUEsS0FBSyxDQUFDRyxPQUFOLEdBQWdCLElBQWhCO0FBQ0QsT0FYRCxFQVdHLElBWEg7O0FBYUEsV0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxXQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFdBQUtDLE1BQUw7QUFDRCxLQW5FRDs7QUFxRUEsUUFBSUMsWUFBWSxHQUFHM0MsbUJBQW1CLENBQUMsQ0FBRCxDQUF0QztBQUVBOzs7OztBQUdBSCxJQUFBQSxNQUFNLENBQUMrQyxZQUFQLEdBQXNCLFVBQVU1RyxDQUFWLEVBQWE7QUFDakMsYUFBTzJHLFlBQVksQ0FBQzlDLE1BQUQsRUFBUzdELENBQVQsQ0FBbkI7QUFDRCxLQUZEOztBQUlBLGFBQVM2RyxNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QjNJLENBQTVCLEVBQStCO0FBQzdCLFVBQUksT0FBT0EsQ0FBUCxLQUFhLFdBQWpCLEVBQThCO0FBQzVCQSxRQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNEOztBQUNELFVBQUk0SSxDQUFDLEdBQUcvQixLQUFLLENBQUNnQyxlQUFOLENBQXNCN0ksQ0FBdEIsRUFBeUJ3SSxDQUF6QixDQUFSO0FBQUEsVUFDSU0sRUFBRSxHQUFHLElBQUlGLENBRGI7QUFBQSxVQUVJRyxDQUFDLEdBQUc7QUFDTmhMLFFBQUFBLENBQUMsRUFBRTZLLENBQUMsR0FBR0gsQ0FBQyxDQUFDMUssQ0FBTixHQUFVK0ssRUFBRSxHQUFHSCxDQUFDLENBQUM1SyxDQURkO0FBRU5ULFFBQUFBLENBQUMsRUFBRXNMLENBQUMsR0FBR0gsQ0FBQyxDQUFDbkwsQ0FBTixHQUFVd0wsRUFBRSxHQUFHSCxDQUFDLENBQUNyTDtBQUZkLE9BRlI7QUFBQSxVQU1Jc0MsQ0FBQyxHQUFHaUgsS0FBSyxDQUFDbUMsUUFBTixDQUFlaEosQ0FBZixFQUFrQndJLENBQWxCLENBTlI7QUFBQSxVQU9JUyxDQUFDLEdBQUc7QUFDTmxMLFFBQUFBLENBQUMsRUFBRTJLLENBQUMsQ0FBQzNLLENBQUYsR0FBTSxDQUFDMkssQ0FBQyxDQUFDM0ssQ0FBRixHQUFNZ0wsQ0FBQyxDQUFDaEwsQ0FBVCxJQUFjNkIsQ0FEakI7QUFFTnRDLFFBQUFBLENBQUMsRUFBRW9MLENBQUMsQ0FBQ3BMLENBQUYsR0FBTSxDQUFDb0wsQ0FBQyxDQUFDcEwsQ0FBRixHQUFNeUwsQ0FBQyxDQUFDekwsQ0FBVCxJQUFjc0M7QUFGakIsT0FQUjtBQVdBLGFBQU87QUFBRXFKLFFBQUFBLENBQUMsRUFBRUEsQ0FBTDtBQUFRUCxRQUFBQSxDQUFDLEVBQUVBLENBQVg7QUFBY0ssUUFBQUEsQ0FBQyxFQUFFQTtBQUFqQixPQUFQO0FBQ0Q7O0FBRUR4RCxJQUFBQSxNQUFNLENBQUMyRCxtQkFBUCxHQUE2QixVQUFVcEcsRUFBVixFQUFja0YsRUFBZCxFQUFrQm1CLEVBQWxCLEVBQXNCbkosQ0FBdEIsRUFBeUI7QUFDcEQsVUFBSSxPQUFPQSxDQUFQLEtBQWEsV0FBakIsRUFBOEI7QUFDNUJBLFFBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0QsT0FIbUQ7OztBQUtwRCxVQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1gsZUFBTyxJQUFJdUYsTUFBSixDQUFXeUMsRUFBWCxFQUFlQSxFQUFmLEVBQW1CbUIsRUFBbkIsQ0FBUDtBQUNEOztBQUNELFVBQUluSixDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1gsZUFBTyxJQUFJdUYsTUFBSixDQUFXekMsRUFBWCxFQUFla0YsRUFBZixFQUFtQkEsRUFBbkIsQ0FBUDtBQUNELE9BVm1EOzs7QUFZcEQsVUFBSW9CLEdBQUcsR0FBR2IsTUFBTSxDQUFDLENBQUQsRUFBSXpGLEVBQUosRUFBUWtGLEVBQVIsRUFBWW1CLEVBQVosRUFBZ0JuSixDQUFoQixDQUFoQjtBQUNBLGFBQU8sSUFBSXVGLE1BQUosQ0FBV3pDLEVBQVgsRUFBZXNHLEdBQUcsQ0FBQ0gsQ0FBbkIsRUFBc0JFLEVBQXRCLENBQVA7QUFDRCxLQWREOztBQWdCQTVELElBQUFBLE1BQU0sQ0FBQzhELGVBQVAsR0FBeUIsVUFBVVosQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjNJLENBQW5CLEVBQXNCc0osRUFBdEIsRUFBMEI7QUFDakQsVUFBSSxPQUFPdEosQ0FBUCxLQUFhLFdBQWpCLEVBQThCO0FBQzVCQSxRQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNEOztBQUNELFVBQUlvSixHQUFHLEdBQUdiLE1BQU0sQ0FBQyxDQUFELEVBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWEzSSxDQUFiLENBQWhCOztBQUNBLFVBQUksT0FBT3NKLEVBQVAsS0FBYyxXQUFsQixFQUErQjtBQUM3QkEsUUFBQUEsRUFBRSxHQUFHekMsS0FBSyxDQUFDMEMsSUFBTixDQUFXYixDQUFYLEVBQWNVLEdBQUcsQ0FBQ0wsQ0FBbEIsQ0FBTDtBQUNEOztBQUNELFVBQUlTLEVBQUUsR0FBR0YsRUFBRSxJQUFJLElBQUl0SixDQUFSLENBQUYsR0FBZUEsQ0FBeEI7QUFFQSxVQUFJeUosS0FBSyxHQUFHNUMsS0FBSyxDQUFDMEMsSUFBTixDQUFXZCxDQUFYLEVBQWNFLENBQWQsQ0FBWjtBQUFBLFVBQ0llLEVBQUUsR0FBRyxDQUFDZixDQUFDLENBQUM1SyxDQUFGLEdBQU0wSyxDQUFDLENBQUMxSyxDQUFULElBQWMwTCxLQUR2QjtBQUFBLFVBRUlFLEVBQUUsR0FBRyxDQUFDaEIsQ0FBQyxDQUFDckwsQ0FBRixHQUFNbUwsQ0FBQyxDQUFDbkwsQ0FBVCxJQUFjbU0sS0FGdkI7QUFBQSxVQUdJRyxHQUFHLEdBQUdOLEVBQUUsR0FBR0ksRUFIZjtBQUFBLFVBSUlHLEdBQUcsR0FBR1AsRUFBRSxHQUFHSyxFQUpmO0FBQUEsVUFLSUcsR0FBRyxHQUFHTixFQUFFLEdBQUdFLEVBTGY7QUFBQSxVQU1JSyxHQUFHLEdBQUdQLEVBQUUsR0FBR0csRUFOZixDQVZpRDs7QUFrQmpELFVBQUlLLEVBQUUsR0FBRztBQUFFak0sUUFBQUEsQ0FBQyxFQUFFMkssQ0FBQyxDQUFDM0ssQ0FBRixHQUFNNkwsR0FBWDtBQUFnQnRNLFFBQUFBLENBQUMsRUFBRW9MLENBQUMsQ0FBQ3BMLENBQUYsR0FBTXVNO0FBQXpCLE9BQVQ7QUFBQSxVQUNJSSxFQUFFLEdBQUc7QUFBRWxNLFFBQUFBLENBQUMsRUFBRTJLLENBQUMsQ0FBQzNLLENBQUYsR0FBTStMLEdBQVg7QUFBZ0J4TSxRQUFBQSxDQUFDLEVBQUVvTCxDQUFDLENBQUNwTCxDQUFGLEdBQU15TTtBQUF6QixPQURUO0FBQUEsVUFFSWQsQ0FBQyxHQUFHRyxHQUFHLENBQUNILENBRlo7QUFBQSxVQUdJaUIsRUFBRSxHQUFHO0FBQUVuTSxRQUFBQSxDQUFDLEVBQUVrTCxDQUFDLENBQUNsTCxDQUFGLEdBQU0sQ0FBQ2lNLEVBQUUsQ0FBQ2pNLENBQUgsR0FBT2tMLENBQUMsQ0FBQ2xMLENBQVYsS0FBZ0IsSUFBSWlDLENBQXBCLENBQVg7QUFBbUMxQyxRQUFBQSxDQUFDLEVBQUUyTCxDQUFDLENBQUMzTCxDQUFGLEdBQU0sQ0FBQzBNLEVBQUUsQ0FBQzFNLENBQUgsR0FBTzJMLENBQUMsQ0FBQzNMLENBQVYsS0FBZ0IsSUFBSTBDLENBQXBCO0FBQTVDLE9BSFQ7QUFBQSxVQUlJbUssRUFBRSxHQUFHO0FBQUVwTSxRQUFBQSxDQUFDLEVBQUVrTCxDQUFDLENBQUNsTCxDQUFGLEdBQU0sQ0FBQ2tNLEVBQUUsQ0FBQ2xNLENBQUgsR0FBT2tMLENBQUMsQ0FBQ2xMLENBQVYsSUFBZWlDLENBQTFCO0FBQTZCMUMsUUFBQUEsQ0FBQyxFQUFFMkwsQ0FBQyxDQUFDM0wsQ0FBRixHQUFNLENBQUMyTSxFQUFFLENBQUMzTSxDQUFILEdBQU8yTCxDQUFDLENBQUMzTCxDQUFWLElBQWUwQztBQUFyRCxPQUpUO0FBQUEsVUFLSW9LLEdBQUcsR0FBRztBQUFFck0sUUFBQUEsQ0FBQyxFQUFFMEssQ0FBQyxDQUFDMUssQ0FBRixHQUFNLENBQUNtTSxFQUFFLENBQUNuTSxDQUFILEdBQU8wSyxDQUFDLENBQUMxSyxDQUFWLElBQWVpQyxDQUExQjtBQUE2QjFDLFFBQUFBLENBQUMsRUFBRW1MLENBQUMsQ0FBQ25MLENBQUYsR0FBTSxDQUFDNE0sRUFBRSxDQUFDNU0sQ0FBSCxHQUFPbUwsQ0FBQyxDQUFDbkwsQ0FBVixJQUFlMEM7QUFBckQsT0FMVjtBQUFBLFVBTUlxSyxHQUFHLEdBQUc7QUFDUnRNLFFBQUFBLENBQUMsRUFBRTRLLENBQUMsQ0FBQzVLLENBQUYsR0FBTSxDQUFDb00sRUFBRSxDQUFDcE0sQ0FBSCxHQUFPNEssQ0FBQyxDQUFDNUssQ0FBVixLQUFnQixJQUFJaUMsQ0FBcEIsQ0FERDtBQUVSMUMsUUFBQUEsQ0FBQyxFQUFFcUwsQ0FBQyxDQUFDckwsQ0FBRixHQUFNLENBQUM2TSxFQUFFLENBQUM3TSxDQUFILEdBQU9xTCxDQUFDLENBQUNyTCxDQUFWLEtBQWdCLElBQUkwQyxDQUFwQjtBQUZELE9BTlYsQ0FsQmlEOztBQTZCakQsYUFBTyxJQUFJdUYsTUFBSixDQUFXa0QsQ0FBWCxFQUFjMkIsR0FBZCxFQUFtQkMsR0FBbkIsRUFBd0IxQixDQUF4QixDQUFQO0FBQ0QsS0E5QkQ7O0FBZ0NBLFFBQUkyQixRQUFRLEdBQUcsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxhQUFPekQsS0FBUDtBQUNELEtBRkQ7O0FBSUF0QixJQUFBQSxNQUFNLENBQUMrRSxRQUFQLEdBQWtCQSxRQUFsQjtBQUVBL0UsSUFBQUEsTUFBTSxDQUFDdUIsVUFBUCxHQUFvQkEsVUFBcEI7QUFFQXZCLElBQUFBLE1BQU0sQ0FBQ2lCLFNBQVAsR0FBbUI7QUFDakI4RCxNQUFBQSxRQUFRLEVBQUVBLFFBRE87QUFFakJDLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLGVBQU8sS0FBS2xGLFFBQUwsRUFBUDtBQUNELE9BSmdCO0FBS2pCQSxNQUFBQSxRQUFRLEVBQUUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixlQUFPd0IsS0FBSyxDQUFDMkQsY0FBTixDQUFxQixLQUFLaEQsTUFBMUIsQ0FBUDtBQUNELE9BUGdCO0FBUWpCaUQsTUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZUMsUUFBZixFQUF5QjtBQUM5QixZQUFJLEtBQUtuRCxHQUFULEVBQWMsT0FBTyxLQUFQO0FBQ2QsWUFBSXRCLENBQUMsR0FBRyxLQUFLdUIsTUFBYjtBQUFBLFlBQ0l6SixDQUFDLEdBQUdrSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQURiO0FBQUEsWUFFSVQsQ0FBQyxHQUFHMkksQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FGYjtBQUFBLFlBR0lzQyxDQUFDLEdBQUcsQ0FBQyxHQUFELEVBQU03QixDQUFOLEVBQVNULENBQVQsRUFBWSxLQUFLcUssS0FBTCxLQUFlLENBQWYsR0FBbUIsR0FBbkIsR0FBeUIsR0FBckMsQ0FIUjs7QUFJQSxhQUFLLElBQUlwSyxDQUFDLEdBQUcsQ0FBUixFQUFXb04sSUFBSSxHQUFHMUUsQ0FBQyxDQUFDeEksTUFBekIsRUFBaUNGLENBQUMsR0FBR29OLElBQXJDLEVBQTJDcE4sQ0FBQyxFQUE1QyxFQUFnRDtBQUM5Q3FDLFVBQUFBLENBQUMsQ0FBQ3dILElBQUYsQ0FBT25CLENBQUMsQ0FBQzFJLENBQUQsQ0FBRCxDQUFLUSxDQUFaO0FBQ0E2QixVQUFBQSxDQUFDLENBQUN3SCxJQUFGLENBQU9uQixDQUFDLENBQUMxSSxDQUFELENBQUQsQ0FBS0QsQ0FBWjtBQUNEOztBQUNELGVBQU9zQyxDQUFDLENBQUNnTCxJQUFGLENBQU8sR0FBUCxDQUFQO0FBQ0QsT0FuQmdCO0FBb0JqQkMsTUFBQUEsU0FBUyxFQUFFLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3BDLFlBQUlBLE1BQU0sQ0FBQ3JOLE1BQVAsS0FBa0IsS0FBSytKLE1BQUwsQ0FBWS9KLE1BQWxDLEVBQTBDO0FBQ3hDLGdCQUFNLElBQUk2SixLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNEOztBQUNELGFBQUt3RCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxhQUFLQyxJQUFMLEdBQVksRUFBWixDQUxvQztBQU1yQyxPQTFCZ0I7QUEyQmpCQyxNQUFBQSxNQUFNLEVBQUUsU0FBU0EsTUFBVCxHQUFrQjtBQUN4QixZQUFJQyxLQUFLLEdBQUcsS0FBS0MsV0FBTCxFQUFaOztBQUNBLFlBQUlELEtBQUssS0FBSyxLQUFLRSxNQUFuQixFQUEyQjtBQUN6QixlQUFLQSxNQUFMLEdBQWNGLEtBQWQ7QUFDQSxlQUFLN0MsTUFBTDtBQUNEO0FBQ0YsT0FqQ2dCO0FBa0NqQjhDLE1BQUFBLFdBQVcsRUFBRSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLGVBQU8sS0FBSzFELE1BQUwsQ0FBWTRELEdBQVosQ0FBZ0IsVUFBVTNKLENBQVYsRUFBYVUsR0FBYixFQUFrQjtBQUN2QyxpQkFBTyxLQUFLQSxHQUFMLEdBQVdWLENBQUMsQ0FBQzFELENBQWIsR0FBaUIwRCxDQUFDLENBQUNuRSxDQUFuQixJQUF3Qm1FLENBQUMsQ0FBQ3pELENBQUYsR0FBTXlELENBQUMsQ0FBQ3pELENBQVIsR0FBWSxDQUFwQyxDQUFQO0FBQ0QsU0FGTSxFQUVKNE0sSUFGSSxDQUVDLEVBRkQsQ0FBUDtBQUdELE9BdENnQjtBQXVDakJ4QyxNQUFBQSxNQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFnQmlELFFBQWhCLEVBQTBCO0FBQ2hDO0FBQ0EsYUFBS04sSUFBTCxHQUFZLEVBQVo7QUFDQSxhQUFLTyxPQUFMLEdBQWV6RSxLQUFLLENBQUMwRSxNQUFOLENBQWEsS0FBSy9ELE1BQWxCLEVBQTBCLEtBQUtELEdBQS9CLENBQWY7QUFDQSxhQUFLaUUsZ0JBQUw7QUFDRCxPQTVDZ0I7QUE2Q2pCQSxNQUFBQSxnQkFBZ0IsRUFBRSxTQUFTQSxnQkFBVCxHQUE0QjtBQUM1QyxZQUFJaEUsTUFBTSxHQUFHLEtBQUtBLE1BQWxCO0FBQ0EsWUFBSWlFLEtBQUssR0FBRzVFLEtBQUssQ0FBQzRFLEtBQU4sQ0FBWWpFLE1BQU0sQ0FBQyxDQUFELENBQWxCLEVBQXVCQSxNQUFNLENBQUMsS0FBS0csS0FBTixDQUE3QixFQUEyQ0gsTUFBTSxDQUFDLENBQUQsQ0FBakQsQ0FBWjtBQUNBLGFBQUtrRSxTQUFMLEdBQWlCRCxLQUFLLEdBQUcsQ0FBekI7QUFDRCxPQWpEZ0I7QUFrRGpCaE8sTUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsZUFBT29KLEtBQUssQ0FBQ3BKLE1BQU4sQ0FBYSxLQUFLa08sVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBYixDQUFQO0FBQ0QsT0FwRGdCO0FBcURqQmIsTUFBQUEsSUFBSSxFQUFFLEVBckRXO0FBc0RqQmMsTUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQzdCLGFBQUtkLE1BQUw7QUFDQWMsUUFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUksR0FBakI7O0FBQ0EsWUFBSSxLQUFLZixJQUFMLENBQVV0TixNQUFWLEtBQXFCcU8sS0FBekIsRUFBZ0M7QUFDOUIsaUJBQU8sS0FBS2YsSUFBWjtBQUNEOztBQUNELGFBQUtBLElBQUwsR0FBWSxFQUFaLENBTjZCO0FBUTdCOztBQUNBZSxRQUFBQSxLQUFLOztBQUNMLGFBQUssSUFBSTlMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUk4TCxLQUFyQixFQUE0QjlMLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsZUFBSytLLElBQUwsQ0FBVTNELElBQVYsQ0FBZSxLQUFLMkUsT0FBTCxDQUFhL0wsQ0FBQyxHQUFHOEwsS0FBakIsQ0FBZjtBQUNEOztBQUNELGVBQU8sS0FBS2YsSUFBWjtBQUNELE9BcEVnQjtBQXFFakJpQixNQUFBQSxFQUFFLEVBQUUsU0FBU0EsRUFBVCxDQUFZN0UsS0FBWixFQUFtQjhFLEtBQW5CLEVBQTBCO0FBQzVCQSxRQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSSxDQUFqQjtBQUNBLFlBQUlDLEdBQUcsR0FBRyxLQUFLTCxNQUFMLEVBQVY7QUFBQSxZQUNJTSxJQUFJLEdBQUcsRUFEWDtBQUFBLFlBRUkxSyxDQUZKO0FBQUEsWUFHSXpCLENBQUMsR0FBRyxDQUhSOztBQUlBLGFBQUssSUFBSXpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyTyxHQUFHLENBQUN6TyxNQUF4QixFQUFnQ0YsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQ2tFLFVBQUFBLENBQUMsR0FBR3lLLEdBQUcsQ0FBQzNPLENBQUQsQ0FBUDs7QUFDQSxjQUFJc0osS0FBSyxDQUFDMEMsSUFBTixDQUFXOUgsQ0FBWCxFQUFjMEYsS0FBZCxJQUF1QjhFLEtBQTNCLEVBQWtDO0FBQ2hDRSxZQUFBQSxJQUFJLENBQUMvRSxJQUFMLENBQVUzRixDQUFWO0FBQ0F6QixZQUFBQSxDQUFDLElBQUl6QyxDQUFDLEdBQUcyTyxHQUFHLENBQUN6TyxNQUFiO0FBQ0Q7QUFDRjs7QUFDRCxZQUFJLENBQUMwTyxJQUFJLENBQUMxTyxNQUFWLEVBQWtCLE9BQU8sS0FBUDtBQUNsQixlQUFPdUMsQ0FBQyxJQUFJbU0sSUFBSSxDQUFDMU8sTUFBakI7QUFDRCxPQXBGZ0I7QUFxRmpCMk8sTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJqRixLQUFqQixFQUF3QjtBQUMvQjtBQUNBLFlBQUlrRixHQUFHLEdBQUcsS0FBS1IsTUFBTCxFQUFWO0FBQUEsWUFDSXZNLENBQUMsR0FBRytNLEdBQUcsQ0FBQzVPLE1BQUosR0FBYSxDQURyQjtBQUFBLFlBRUk2TyxPQUFPLEdBQUd6RixLQUFLLENBQUN5RixPQUFOLENBQWNELEdBQWQsRUFBbUJsRixLQUFuQixDQUZkO0FBQUEsWUFHSW9GLEtBQUssR0FBR0QsT0FBTyxDQUFDQyxLQUhwQjtBQUFBLFlBSUlDLElBQUksR0FBR0YsT0FBTyxDQUFDRSxJQUpuQixDQUYrQjs7QUFTL0IsWUFBSUMsRUFBSjtBQUFBLFlBQ0l6TSxDQURKO0FBQUEsWUFFSWlHLENBRko7QUFBQSxZQUdJdkUsQ0FISjtBQUFBLFlBSUlnTCxFQUFFLEdBQUcsQ0FBQ0YsSUFBSSxHQUFHLENBQVIsSUFBYWxOLENBSnRCO0FBQUEsWUFLSXFOLEVBQUUsR0FBRyxDQUFDSCxJQUFJLEdBQUcsQ0FBUixJQUFhbE4sQ0FMdEI7QUFBQSxZQU1Jb0ksSUFBSSxHQUFHLE1BQU1wSSxDQU5qQjtBQU9BaU4sUUFBQUEsS0FBSyxJQUFJLENBQVQ7O0FBQ0EsYUFBS3ZNLENBQUMsR0FBRzBNLEVBQUosRUFBUUQsRUFBRSxHQUFHek0sQ0FBbEIsRUFBcUJBLENBQUMsR0FBRzJNLEVBQUUsR0FBR2pGLElBQTlCLEVBQW9DMUgsQ0FBQyxJQUFJMEgsSUFBekMsRUFBK0M7QUFDN0N6QixVQUFBQSxDQUFDLEdBQUcsS0FBSzhGLE9BQUwsQ0FBYS9MLENBQWIsQ0FBSjtBQUNBMEIsVUFBQUEsQ0FBQyxHQUFHbUYsS0FBSyxDQUFDMEMsSUFBTixDQUFXcEMsS0FBWCxFQUFrQmxCLENBQWxCLENBQUo7O0FBQ0EsY0FBSXZFLENBQUMsR0FBRzZLLEtBQVIsRUFBZTtBQUNiQSxZQUFBQSxLQUFLLEdBQUc3SyxDQUFSO0FBQ0ErSyxZQUFBQSxFQUFFLEdBQUd6TSxDQUFMO0FBQ0Q7QUFDRjs7QUFDRGlHLFFBQUFBLENBQUMsR0FBRyxLQUFLOEYsT0FBTCxDQUFhVSxFQUFiLENBQUo7QUFDQXhHLFFBQUFBLENBQUMsQ0FBQ2pHLENBQUYsR0FBTXlNLEVBQU47QUFDQXhHLFFBQUFBLENBQUMsQ0FBQ3ZFLENBQUYsR0FBTTZLLEtBQU47QUFDQSxlQUFPdEcsQ0FBUDtBQUNELE9BbEhnQjtBQW1IakIyRyxNQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhNU0sQ0FBYixFQUFnQjtBQUNuQixlQUFPLEtBQUsrTCxPQUFMLENBQWEvTCxDQUFiLENBQVA7QUFDRCxPQXJIZ0I7QUFzSGpCbUgsTUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZU0sR0FBZixFQUFvQjtBQUN6QixlQUFPLEtBQUtELE1BQUwsQ0FBWUMsR0FBWixDQUFQO0FBQ0QsT0F4SGdCO0FBeUhqQnNFLE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCL0wsQ0FBakIsRUFBb0I7QUFDM0IsWUFBSSxLQUFLOEssTUFBVCxFQUFpQixPQUFPakUsS0FBSyxDQUFDZ0csaUJBQU4sQ0FBd0I3TSxDQUF4QixFQUEyQixLQUFLd0gsTUFBaEMsRUFBd0MsS0FBS3NELE1BQTdDLEVBQXFELEtBQUt2RCxHQUExRCxDQUFQO0FBQ2pCLGVBQU9WLEtBQUssQ0FBQ2tGLE9BQU4sQ0FBYy9MLENBQWQsRUFBaUIsS0FBS3dILE1BQXRCLEVBQThCLEtBQUtELEdBQW5DLEVBQXdDLEtBQUt1RCxNQUE3QyxDQUFQO0FBQ0QsT0E1SGdCO0FBNkhqQmdDLE1BQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCLFlBQUk3RyxDQUFDLEdBQUcsS0FBS3VCLE1BQWI7QUFBQSxZQUNJdUYsRUFBRSxHQUFHLENBQUM5RyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBRFQ7QUFBQSxZQUVJMUksQ0FGSjtBQUFBLFlBR0l1RCxDQUFDLEdBQUdtRixDQUFDLENBQUN4SSxNQUhWO0FBQUEsWUFJSWtKLEVBSko7QUFBQSxZQUtJcUcsR0FMSjs7QUFNQSxhQUFLLElBQUl6UCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUQsQ0FBcEIsRUFBdUJ2RCxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCb0osVUFBQUEsRUFBRSxHQUFHVixDQUFDLENBQUMxSSxDQUFELENBQU47QUFDQXlQLFVBQUFBLEdBQUcsR0FBRy9HLENBQUMsQ0FBQzFJLENBQUMsR0FBRyxDQUFMLENBQVA7QUFDQXdQLFVBQUFBLEVBQUUsQ0FBQ3hQLENBQUQsQ0FBRixHQUFRO0FBQ05RLFlBQUFBLENBQUMsRUFBRSxDQUFDK0MsQ0FBQyxHQUFHdkQsQ0FBTCxJQUFVdUQsQ0FBVixHQUFjNkYsRUFBRSxDQUFDNUksQ0FBakIsR0FBcUJSLENBQUMsR0FBR3VELENBQUosR0FBUWtNLEdBQUcsQ0FBQ2pQLENBRDlCO0FBRU5ULFlBQUFBLENBQUMsRUFBRSxDQUFDd0QsQ0FBQyxHQUFHdkQsQ0FBTCxJQUFVdUQsQ0FBVixHQUFjNkYsRUFBRSxDQUFDckosQ0FBakIsR0FBcUJDLENBQUMsR0FBR3VELENBQUosR0FBUWtNLEdBQUcsQ0FBQzFQO0FBRjlCLFdBQVI7QUFJRDs7QUFDRHlQLFFBQUFBLEVBQUUsQ0FBQ2pNLENBQUQsQ0FBRixHQUFRbUYsQ0FBQyxDQUFDbkYsQ0FBQyxHQUFHLENBQUwsQ0FBVDtBQUNBLGVBQU8sSUFBSXlFLE1BQUosQ0FBV3dILEVBQVgsQ0FBUDtBQUNELE9BOUlnQjtBQStJakJwQixNQUFBQSxVQUFVLEVBQUUsU0FBU0EsVUFBVCxDQUFvQjNMLENBQXBCLEVBQXVCO0FBQ2pDLFlBQUlpTixFQUFFLEdBQUcsSUFBSWpOLENBQWI7QUFBQSxZQUNJbEMsQ0FESjtBQUFBLFlBRUlLLENBRko7QUFBQSxZQUdJc0QsQ0FBQyxHQUFHLENBSFI7QUFBQSxZQUlJd0UsQ0FBQyxHQUFHLEtBQUtxRixPQUFMLENBQWEsQ0FBYixDQUpSOztBQUtBLFlBQUksS0FBSzNELEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUNwQjFCLFVBQUFBLENBQUMsR0FBRyxDQUFDQSxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU9BLENBQUMsQ0FBQyxDQUFELENBQVIsRUFBYVcsSUFBYixDQUFKO0FBQ0E5SSxVQUFBQSxDQUFDLEdBQUdtUCxFQUFKO0FBQ0E5TyxVQUFBQSxDQUFDLEdBQUc2QixDQUFKO0FBQ0Q7O0FBQ0QsWUFBSSxLQUFLMkgsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCN0osVUFBQUEsQ0FBQyxHQUFHbVAsRUFBRSxHQUFHQSxFQUFUO0FBQ0E5TyxVQUFBQSxDQUFDLEdBQUc4TyxFQUFFLEdBQUdqTixDQUFMLEdBQVMsQ0FBYjtBQUNBeUIsVUFBQUEsQ0FBQyxHQUFHekIsQ0FBQyxHQUFHQSxDQUFSO0FBQ0Q7O0FBQ0QsWUFBSWtOLEdBQUcsR0FBRztBQUNSblAsVUFBQUEsQ0FBQyxFQUFFRCxDQUFDLEdBQUdtSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFULEdBQWFJLENBQUMsR0FBRzhILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2xJLENBQXRCLEdBQTBCMEQsQ0FBQyxHQUFHd0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FEOUI7QUFFUlQsVUFBQUEsQ0FBQyxFQUFFUSxDQUFDLEdBQUdtSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUFULEdBQWFhLENBQUMsR0FBRzhILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzNJLENBQXRCLEdBQTBCbUUsQ0FBQyxHQUFHd0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0k7QUFGOUIsU0FBVjs7QUFJQSxZQUFJLEtBQUtpSyxHQUFULEVBQWM7QUFDWjJGLFVBQUFBLEdBQUcsQ0FBQ2xQLENBQUosR0FBUUYsQ0FBQyxHQUFHbUksQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLakksQ0FBVCxHQUFhRyxDQUFDLEdBQUc4SCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUF0QixHQUEwQnlELENBQUMsR0FBR3dFLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQTNDO0FBQ0Q7O0FBQ0QsZUFBT2tQLEdBQVA7QUFDRCxPQXZLZ0I7QUF3S2pCQyxNQUFBQSxTQUFTLEVBQUUsU0FBU0EsU0FBVCxDQUFtQm5OLENBQW5CLEVBQXNCO0FBQy9CLGVBQU82RyxLQUFLLENBQUNzRyxTQUFOLENBQWdCbk4sQ0FBaEIsRUFBbUIsS0FBS3dILE1BQXhCLEVBQWdDLEtBQUtELEdBQXJDLENBQVA7QUFDRCxPQTFLZ0I7QUEyS2pCNkYsTUFBQUEsV0FBVyxFQUFFLFNBQVNBLFdBQVQsR0FBdUI7QUFDbEMsZUFBT3ZHLEtBQUssQ0FBQ3VHLFdBQU4sQ0FBa0IsS0FBSzVGLE1BQXZCLENBQVA7QUFDRCxPQTdLZ0I7QUE4S2pCcEYsTUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBZ0JwQyxDQUFoQixFQUFtQjtBQUN6QixlQUFPLEtBQUt1SCxHQUFMLEdBQVcsS0FBSzhGLFNBQUwsQ0FBZXJOLENBQWYsQ0FBWCxHQUErQixLQUFLc04sU0FBTCxDQUFldE4sQ0FBZixDQUF0QztBQUNELE9BaExnQjtBQWlMakJzTixNQUFBQSxTQUFTLEVBQUUsU0FBU0EsU0FBVCxDQUFtQnROLENBQW5CLEVBQXNCO0FBQy9CLFlBQUkwQixDQUFDLEdBQUcsS0FBS2lLLFVBQUwsQ0FBZ0IzTCxDQUFoQixDQUFSO0FBQ0EsWUFBSXVOLENBQUMsR0FBRzdQLElBQUksQ0FBQ2dFLENBQUMsQ0FBQzNELENBQUYsR0FBTTJELENBQUMsQ0FBQzNELENBQVIsR0FBWTJELENBQUMsQ0FBQ3BFLENBQUYsR0FBTW9FLENBQUMsQ0FBQ3BFLENBQXJCLENBQVo7QUFDQSxlQUFPO0FBQUVTLFVBQUFBLENBQUMsRUFBRSxDQUFDMkQsQ0FBQyxDQUFDcEUsQ0FBSCxHQUFPaVEsQ0FBWjtBQUFlalEsVUFBQUEsQ0FBQyxFQUFFb0UsQ0FBQyxDQUFDM0QsQ0FBRixHQUFNd1A7QUFBeEIsU0FBUDtBQUNELE9BckxnQjtBQXNMakJGLE1BQUFBLFNBQVMsRUFBRSxTQUFTQSxTQUFULENBQW1Cck4sQ0FBbkIsRUFBc0I7QUFDL0I7QUFDQSxZQUFJd04sRUFBRSxHQUFHLEtBQUs3QixVQUFMLENBQWdCM0wsQ0FBaEIsQ0FBVDtBQUFBLFlBQ0l5TixFQUFFLEdBQUcsS0FBSzlCLFVBQUwsQ0FBZ0IzTCxDQUFDLEdBQUcsSUFBcEIsQ0FEVDtBQUFBLFlBRUkwTixFQUFFLEdBQUdoUSxJQUFJLENBQUM4UCxFQUFFLENBQUN6UCxDQUFILEdBQU95UCxFQUFFLENBQUN6UCxDQUFWLEdBQWN5UCxFQUFFLENBQUNsUSxDQUFILEdBQU9rUSxFQUFFLENBQUNsUSxDQUF4QixHQUE0QmtRLEVBQUUsQ0FBQ3hQLENBQUgsR0FBT3dQLEVBQUUsQ0FBQ3hQLENBQXZDLENBRmI7QUFBQSxZQUdJMlAsRUFBRSxHQUFHalEsSUFBSSxDQUFDK1AsRUFBRSxDQUFDMVAsQ0FBSCxHQUFPMFAsRUFBRSxDQUFDMVAsQ0FBVixHQUFjMFAsRUFBRSxDQUFDblEsQ0FBSCxHQUFPbVEsRUFBRSxDQUFDblEsQ0FBeEIsR0FBNEJtUSxFQUFFLENBQUN6UCxDQUFILEdBQU95UCxFQUFFLENBQUN6UCxDQUF2QyxDQUhiO0FBSUF3UCxRQUFBQSxFQUFFLENBQUN6UCxDQUFILElBQVEyUCxFQUFSO0FBQ0FGLFFBQUFBLEVBQUUsQ0FBQ2xRLENBQUgsSUFBUW9RLEVBQVI7QUFDQUYsUUFBQUEsRUFBRSxDQUFDeFAsQ0FBSCxJQUFRMFAsRUFBUjtBQUNBRCxRQUFBQSxFQUFFLENBQUMxUCxDQUFILElBQVE0UCxFQUFSO0FBQ0FGLFFBQUFBLEVBQUUsQ0FBQ25RLENBQUgsSUFBUXFRLEVBQVI7QUFDQUYsUUFBQUEsRUFBRSxDQUFDelAsQ0FBSCxJQUFRMlAsRUFBUixDQVgrQjs7QUFhL0IsWUFBSWxNLENBQUMsR0FBRztBQUNOMUQsVUFBQUEsQ0FBQyxFQUFFMFAsRUFBRSxDQUFDblEsQ0FBSCxHQUFPa1EsRUFBRSxDQUFDeFAsQ0FBVixHQUFjeVAsRUFBRSxDQUFDelAsQ0FBSCxHQUFPd1AsRUFBRSxDQUFDbFEsQ0FEckI7QUFFTkEsVUFBQUEsQ0FBQyxFQUFFbVEsRUFBRSxDQUFDelAsQ0FBSCxHQUFPd1AsRUFBRSxDQUFDelAsQ0FBVixHQUFjMFAsRUFBRSxDQUFDMVAsQ0FBSCxHQUFPeVAsRUFBRSxDQUFDeFAsQ0FGckI7QUFHTkEsVUFBQUEsQ0FBQyxFQUFFeVAsRUFBRSxDQUFDMVAsQ0FBSCxHQUFPeVAsRUFBRSxDQUFDbFEsQ0FBVixHQUFjbVEsRUFBRSxDQUFDblEsQ0FBSCxHQUFPa1EsRUFBRSxDQUFDelA7QUFIckIsU0FBUjtBQUtBLFlBQUkyQyxDQUFDLEdBQUdoRCxJQUFJLENBQUMrRCxDQUFDLENBQUMxRCxDQUFGLEdBQU0wRCxDQUFDLENBQUMxRCxDQUFSLEdBQVkwRCxDQUFDLENBQUNuRSxDQUFGLEdBQU1tRSxDQUFDLENBQUNuRSxDQUFwQixHQUF3Qm1FLENBQUMsQ0FBQ3pELENBQUYsR0FBTXlELENBQUMsQ0FBQ3pELENBQWpDLENBQVo7QUFDQXlELFFBQUFBLENBQUMsQ0FBQzFELENBQUYsSUFBTzJDLENBQVA7QUFDQWUsUUFBQUEsQ0FBQyxDQUFDbkUsQ0FBRixJQUFPb0QsQ0FBUDtBQUNBZSxRQUFBQSxDQUFDLENBQUN6RCxDQUFGLElBQU8wQyxDQUFQLENBckIrQjs7QUF1Qi9CLFlBQUl1QyxDQUFDLEdBQUcsQ0FBQ3hCLENBQUMsQ0FBQzFELENBQUYsR0FBTTBELENBQUMsQ0FBQzFELENBQVQsRUFBWTBELENBQUMsQ0FBQzFELENBQUYsR0FBTTBELENBQUMsQ0FBQ25FLENBQVIsR0FBWW1FLENBQUMsQ0FBQ3pELENBQTFCLEVBQTZCeUQsQ0FBQyxDQUFDMUQsQ0FBRixHQUFNMEQsQ0FBQyxDQUFDekQsQ0FBUixHQUFZeUQsQ0FBQyxDQUFDbkUsQ0FBM0MsRUFBOENtRSxDQUFDLENBQUMxRCxDQUFGLEdBQU0wRCxDQUFDLENBQUNuRSxDQUFSLEdBQVltRSxDQUFDLENBQUN6RCxDQUE1RCxFQUErRHlELENBQUMsQ0FBQ25FLENBQUYsR0FBTW1FLENBQUMsQ0FBQ25FLENBQXZFLEVBQTBFbUUsQ0FBQyxDQUFDbkUsQ0FBRixHQUFNbUUsQ0FBQyxDQUFDekQsQ0FBUixHQUFZeUQsQ0FBQyxDQUFDMUQsQ0FBeEYsRUFBMkYwRCxDQUFDLENBQUMxRCxDQUFGLEdBQU0wRCxDQUFDLENBQUN6RCxDQUFSLEdBQVl5RCxDQUFDLENBQUNuRSxDQUF6RyxFQUE0R21FLENBQUMsQ0FBQ25FLENBQUYsR0FBTW1FLENBQUMsQ0FBQ3pELENBQVIsR0FBWXlELENBQUMsQ0FBQzFELENBQTFILEVBQTZIMEQsQ0FBQyxDQUFDekQsQ0FBRixHQUFNeUQsQ0FBQyxDQUFDekQsQ0FBckksQ0FBUixDQXZCK0I7O0FBeUIvQixZQUFJd0ssQ0FBQyxHQUFHO0FBQ056SyxVQUFBQSxDQUFDLEVBQUVrRixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU91SyxFQUFFLENBQUN6UCxDQUFWLEdBQWNrRixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU91SyxFQUFFLENBQUNsUSxDQUF4QixHQUE0QjJGLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT3VLLEVBQUUsQ0FBQ3hQLENBRG5DO0FBRU5WLFVBQUFBLENBQUMsRUFBRTJGLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT3VLLEVBQUUsQ0FBQ3pQLENBQVYsR0FBY2tGLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT3VLLEVBQUUsQ0FBQ2xRLENBQXhCLEdBQTRCMkYsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPdUssRUFBRSxDQUFDeFAsQ0FGbkM7QUFHTkEsVUFBQUEsQ0FBQyxFQUFFaUYsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPdUssRUFBRSxDQUFDelAsQ0FBVixHQUFja0YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPdUssRUFBRSxDQUFDbFEsQ0FBeEIsR0FBNEIyRixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU91SyxFQUFFLENBQUN4UDtBQUhuQyxTQUFSO0FBS0EsZUFBT3dLLENBQVA7QUFDRCxPQXJOZ0I7QUFzTmpCb0YsTUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsQ0FBYzVOLENBQWQsRUFBaUI7QUFDckIsWUFBSWlHLENBQUMsR0FBRyxLQUFLdUIsTUFBYjtBQUFBLFlBQ0lxRyxFQUFFLEdBQUcsRUFEVDtBQUFBLFlBRUlDLEVBRko7QUFBQSxZQUdJUCxDQUFDLEdBQUcsRUFIUjtBQUFBLFlBSUk5RixHQUFHLEdBQUcsQ0FKVjtBQUFBLFlBS0lsSyxDQUFDLEdBQUcsQ0FMUjtBQUFBLFlBTUkrQixDQUFDLEdBQUcsQ0FOUjtBQU9BaU8sUUFBQUEsQ0FBQyxDQUFDOUYsR0FBRyxFQUFKLENBQUQsR0FBV3hCLENBQUMsQ0FBQyxDQUFELENBQVo7QUFDQXNILFFBQUFBLENBQUMsQ0FBQzlGLEdBQUcsRUFBSixDQUFELEdBQVd4QixDQUFDLENBQUMsQ0FBRCxDQUFaO0FBQ0FzSCxRQUFBQSxDQUFDLENBQUM5RixHQUFHLEVBQUosQ0FBRCxHQUFXeEIsQ0FBQyxDQUFDLENBQUQsQ0FBWjs7QUFDQSxZQUFJLEtBQUswQixLQUFMLEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEI0RixVQUFBQSxDQUFDLENBQUM5RixHQUFHLEVBQUosQ0FBRCxHQUFXeEIsQ0FBQyxDQUFDLENBQUQsQ0FBWjtBQUNELFNBYm9COzs7QUFlckIsZUFBT0EsQ0FBQyxDQUFDeEksTUFBRixHQUFXLENBQWxCLEVBQXFCO0FBQ25Cb1EsVUFBQUEsRUFBRSxHQUFHLEVBQUw7O0FBQ0EsZUFBS3RRLENBQUMsR0FBRyxDQUFKLEVBQU8rQixDQUFDLEdBQUcyRyxDQUFDLENBQUN4SSxNQUFGLEdBQVcsQ0FBM0IsRUFBOEJGLENBQUMsR0FBRytCLENBQWxDLEVBQXFDL0IsQ0FBQyxFQUF0QyxFQUEwQztBQUN4Q3VRLFlBQUFBLEVBQUUsR0FBR2pILEtBQUssQ0FBQ2tILElBQU4sQ0FBVy9OLENBQVgsRUFBY2lHLENBQUMsQ0FBQzFJLENBQUQsQ0FBZixFQUFvQjBJLENBQUMsQ0FBQzFJLENBQUMsR0FBRyxDQUFMLENBQXJCLENBQUw7QUFDQWdRLFlBQUFBLENBQUMsQ0FBQzlGLEdBQUcsRUFBSixDQUFELEdBQVdxRyxFQUFYOztBQUNBRCxZQUFBQSxFQUFFLENBQUN6RyxJQUFILENBQVEwRyxFQUFSO0FBQ0Q7O0FBQ0Q3SCxVQUFBQSxDQUFDLEdBQUc0SCxFQUFKO0FBQ0Q7O0FBQ0QsZUFBT04sQ0FBUDtBQUNELE9BL09nQjtBQWdQakJTLE1BQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWV0QixFQUFmLEVBQW1CQyxFQUFuQixFQUF1QjtBQUM1QjtBQUNBLFlBQUlELEVBQUUsS0FBSyxDQUFQLElBQVksQ0FBQyxDQUFDQyxFQUFsQixFQUFzQjtBQUNwQixpQkFBTyxLQUFLcUIsS0FBTCxDQUFXckIsRUFBWCxFQUFlc0IsSUFBdEI7QUFDRDs7QUFDRCxZQUFJdEIsRUFBRSxLQUFLLENBQVgsRUFBYztBQUNaLGlCQUFPLEtBQUtxQixLQUFMLENBQVd0QixFQUFYLEVBQWUzSyxLQUF0QjtBQUNELFNBUDJCOzs7QUFVNUIsWUFBSXdMLENBQUMsR0FBRyxLQUFLSyxJQUFMLENBQVVsQixFQUFWLENBQVI7QUFDQSxZQUFJd0IsTUFBTSxHQUFHO0FBQ1hELFVBQUFBLElBQUksRUFBRSxLQUFLdEcsS0FBTCxLQUFlLENBQWYsR0FBbUIsSUFBSXBDLE1BQUosQ0FBVyxDQUFDZ0ksQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSLEVBQWFBLENBQUMsQ0FBQyxDQUFELENBQWQsQ0FBWCxDQUFuQixHQUFvRCxJQUFJaEksTUFBSixDQUFXLENBQUNnSSxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU9BLENBQUMsQ0FBQyxDQUFELENBQVIsRUFBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsQ0FBWCxDQUQvQztBQUVYeEwsVUFBQUEsS0FBSyxFQUFFLEtBQUs0RixLQUFMLEtBQWUsQ0FBZixHQUFtQixJQUFJcEMsTUFBSixDQUFXLENBQUNnSSxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU9BLENBQUMsQ0FBQyxDQUFELENBQVIsRUFBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxDQUFYLENBQW5CLEdBQW9ELElBQUloSSxNQUFKLENBQVcsQ0FBQ2dJLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUixFQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEVBQW1CQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixDQUFYLENBRmhEO0FBR1hZLFVBQUFBLElBQUksRUFBRVo7QUFISyxTQUFiLENBWDRCOztBQWtCNUJXLFFBQUFBLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZL0YsR0FBWixHQUFrQnJCLEtBQUssQ0FBQ3VFLEdBQU4sQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixLQUFLbEQsR0FBeEIsRUFBNkIsS0FBS0MsR0FBbEMsQ0FBbEI7QUFDQStGLFFBQUFBLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZOUYsR0FBWixHQUFrQnRCLEtBQUssQ0FBQ3VFLEdBQU4sQ0FBVXNCLEVBQVYsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUt4RSxHQUF6QixFQUE4QixLQUFLQyxHQUFuQyxDQUFsQjtBQUNBK0YsUUFBQUEsTUFBTSxDQUFDbk0sS0FBUCxDQUFhbUcsR0FBYixHQUFtQnJCLEtBQUssQ0FBQ3VFLEdBQU4sQ0FBVXNCLEVBQVYsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUt4RSxHQUF6QixFQUE4QixLQUFLQyxHQUFuQyxDQUFuQjtBQUNBK0YsUUFBQUEsTUFBTSxDQUFDbk0sS0FBUCxDQUFhb0csR0FBYixHQUFtQnRCLEtBQUssQ0FBQ3VFLEdBQU4sQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixLQUFLbEQsR0FBeEIsRUFBNkIsS0FBS0MsR0FBbEMsQ0FBbkIsQ0FyQjRCOztBQXdCNUIsWUFBSSxDQUFDd0UsRUFBTCxFQUFTO0FBQ1AsaUJBQU91QixNQUFQO0FBQ0QsU0ExQjJCOzs7QUE2QjVCdkIsUUFBQUEsRUFBRSxHQUFHOUYsS0FBSyxDQUFDdUUsR0FBTixDQUFVdUIsRUFBVixFQUFjRCxFQUFkLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQUw7QUFDQSxZQUFJMEIsUUFBUSxHQUFHRixNQUFNLENBQUNuTSxLQUFQLENBQWFpTSxLQUFiLENBQW1CckIsRUFBbkIsQ0FBZjtBQUNBLGVBQU95QixRQUFRLENBQUNILElBQWhCO0FBQ0QsT0FoUmdCO0FBaVJqQkksTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsWUFBSXpHLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUFBLFlBQ0lzRyxNQUFNLEdBQUcsRUFEYjtBQUFBLFlBRUlJLEtBQUssR0FBRyxFQUZaO0FBQUEsWUFHSXJJLENBSEo7QUFBQSxZQUlJc0ksR0FKSjtBQUtBM0csUUFBQUEsSUFBSSxDQUFDN0ksT0FBTCxDQUFhLFVBQVV5UCxHQUFWLEVBQWU7QUFDMUJELFVBQUFBLEdBQUcsR0FBRyxTQUFTQSxHQUFULENBQWFFLENBQWIsRUFBZ0I7QUFDcEIsbUJBQU9BLENBQUMsQ0FBQ0QsR0FBRCxDQUFSO0FBQ0QsV0FGRDs7QUFHQXZJLFVBQUFBLENBQUMsR0FBRyxLQUFLcUYsT0FBTCxDQUFhLENBQWIsRUFBZ0JGLEdBQWhCLENBQW9CbUQsR0FBcEIsQ0FBSjtBQUNBTCxVQUFBQSxNQUFNLENBQUNNLEdBQUQsQ0FBTixHQUFjM0gsS0FBSyxDQUFDNkgsTUFBTixDQUFhekksQ0FBYixDQUFkOztBQUNBLGNBQUksS0FBSzBCLEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUNwQjFCLFlBQUFBLENBQUMsR0FBRyxLQUFLcUYsT0FBTCxDQUFhLENBQWIsRUFBZ0JGLEdBQWhCLENBQW9CbUQsR0FBcEIsQ0FBSjtBQUNBTCxZQUFBQSxNQUFNLENBQUNNLEdBQUQsQ0FBTixHQUFjTixNQUFNLENBQUNNLEdBQUQsQ0FBTixDQUFZRyxNQUFaLENBQW1COUgsS0FBSyxDQUFDNkgsTUFBTixDQUFhekksQ0FBYixDQUFuQixDQUFkO0FBQ0Q7O0FBQ0RpSSxVQUFBQSxNQUFNLENBQUNNLEdBQUQsQ0FBTixHQUFjTixNQUFNLENBQUNNLEdBQUQsQ0FBTixDQUFZSSxNQUFaLENBQW1CLFVBQVU1TyxDQUFWLEVBQWE7QUFDNUMsbUJBQU9BLENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsSUFBSSxDQUF0QjtBQUNELFdBRmEsQ0FBZDtBQUdBc08sVUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNLLE1BQU4sQ0FBYVQsTUFBTSxDQUFDTSxHQUFELENBQU4sQ0FBWUssSUFBWixDQUFpQmhJLEtBQUssQ0FBQ2lJLFVBQXZCLENBQWIsQ0FBUjtBQUNELFNBZFksQ0FjWGxELElBZFcsQ0FjTixJQWRNLENBQWI7QUFlQTBDLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDTyxJQUFOLENBQVdoSSxLQUFLLENBQUNpSSxVQUFqQixFQUE2QkYsTUFBN0IsQ0FBb0MsVUFBVUgsQ0FBVixFQUFhaEgsR0FBYixFQUFrQjtBQUM1RCxpQkFBTzZHLEtBQUssQ0FBQ1MsT0FBTixDQUFjTixDQUFkLE1BQXFCaEgsR0FBNUI7QUFDRCxTQUZPLENBQVI7QUFHQXlHLFFBQUFBLE1BQU0sQ0FBQ2MsTUFBUCxHQUFnQlYsS0FBaEI7QUFDQSxlQUFPSixNQUFQO0FBQ0QsT0EzU2dCO0FBNFNqQmUsTUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsWUFBSVosT0FBTyxHQUFHLEtBQUtBLE9BQUwsRUFBZDtBQUFBLFlBQ0lILE1BQU0sR0FBRyxFQURiO0FBRUEsYUFBS3RHLElBQUwsQ0FBVTdJLE9BQVYsQ0FBa0IsVUFBVTJDLENBQVYsRUFBYTtBQUM3QndNLFVBQUFBLE1BQU0sQ0FBQ3hNLENBQUQsQ0FBTixHQUFZbUYsS0FBSyxDQUFDcUksU0FBTixDQUFnQixJQUFoQixFQUFzQnhOLENBQXRCLEVBQXlCMk0sT0FBTyxDQUFDM00sQ0FBRCxDQUFoQyxDQUFaO0FBQ0QsU0FGaUIsQ0FFaEJrSyxJQUZnQixDQUVYLElBRlcsQ0FBbEI7QUFHQSxlQUFPc0MsTUFBUDtBQUNELE9BblRnQjtBQW9UakJpQixNQUFBQSxRQUFRLEVBQUUsU0FBU0EsUUFBVCxDQUFrQnJILEtBQWxCLEVBQXlCO0FBQ2pDLFlBQUlzSCxLQUFLLEdBQUcsS0FBS0gsSUFBTCxFQUFaO0FBQUEsWUFDSUksS0FBSyxHQUFHdkgsS0FBSyxDQUFDbUgsSUFBTixFQURaO0FBRUEsZUFBT3BJLEtBQUssQ0FBQ3lJLFdBQU4sQ0FBa0JGLEtBQWxCLEVBQXlCQyxLQUF6QixDQUFQO0FBQ0QsT0F4VGdCO0FBeVRqQm5RLE1BQUFBLE1BQU0sRUFBRSxTQUFTQSxNQUFULENBQWdCYyxDQUFoQixFQUFtQjBCLENBQW5CLEVBQXNCO0FBQzVCLFlBQUksT0FBT0EsQ0FBUCxLQUFhLFdBQWpCLEVBQThCO0FBQzVCLGNBQUlELENBQUMsR0FBRyxLQUFLbUwsR0FBTCxDQUFTNU0sQ0FBVCxDQUFSO0FBQ0EsY0FBSXdJLENBQUMsR0FBRyxLQUFLcEcsTUFBTCxDQUFZcEMsQ0FBWixDQUFSO0FBQ0EsY0FBSWtOLEdBQUcsR0FBRztBQUNSekwsWUFBQUEsQ0FBQyxFQUFFQSxDQURLO0FBRVIrRyxZQUFBQSxDQUFDLEVBQUVBLENBRks7QUFHUnpLLFlBQUFBLENBQUMsRUFBRTBELENBQUMsQ0FBQzFELENBQUYsR0FBTXlLLENBQUMsQ0FBQ3pLLENBQUYsR0FBTTJELENBSFA7QUFJUnBFLFlBQUFBLENBQUMsRUFBRW1FLENBQUMsQ0FBQ25FLENBQUYsR0FBTWtMLENBQUMsQ0FBQ2xMLENBQUYsR0FBTW9FO0FBSlAsV0FBVjs7QUFNQSxjQUFJLEtBQUs2RixHQUFULEVBQWM7QUFDWjJGLFlBQUFBLEdBQUcsQ0FBQ2xQLENBQUosR0FBUXlELENBQUMsQ0FBQ3pELENBQUYsR0FBTXdLLENBQUMsQ0FBQ3hLLENBQUYsR0FBTTBELENBQXBCO0FBQ0Q7O0FBQ0QsaUJBQU93TCxHQUFQO0FBQ0Q7O0FBQ0QsWUFBSSxLQUFLakYsT0FBVCxFQUFrQjtBQUNoQixjQUFJc0gsRUFBRSxHQUFHLEtBQUtuTixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsY0FBSTJFLE1BQU0sR0FBRyxLQUFLUyxNQUFMLENBQVk0RCxHQUFaLENBQWdCLFVBQVVuRixDQUFWLEVBQWE7QUFDeEMsZ0JBQUlpSCxHQUFHLEdBQUc7QUFDUm5QLGNBQUFBLENBQUMsRUFBRWtJLENBQUMsQ0FBQ2xJLENBQUYsR0FBTWlDLENBQUMsR0FBR3VQLEVBQUUsQ0FBQ3hSLENBRFI7QUFFUlQsY0FBQUEsQ0FBQyxFQUFFMkksQ0FBQyxDQUFDM0ksQ0FBRixHQUFNMEMsQ0FBQyxHQUFHdVAsRUFBRSxDQUFDalM7QUFGUixhQUFWOztBQUlBLGdCQUFJMkksQ0FBQyxDQUFDakksQ0FBRixJQUFPd0ssQ0FBQyxDQUFDeEssQ0FBYixFQUFnQjtBQUNka1AsY0FBQUEsR0FBRyxDQUFDbFAsQ0FBSixHQUFRaUksQ0FBQyxDQUFDakksQ0FBRixHQUFNZ0MsQ0FBQyxHQUFHdVAsRUFBRSxDQUFDdlIsQ0FBckI7QUFDRDs7QUFDRCxtQkFBT2tQLEdBQVA7QUFDRCxXQVRZLENBQWI7QUFVQSxpQkFBTyxDQUFDLElBQUkzSCxNQUFKLENBQVd3QixNQUFYLENBQUQsQ0FBUDtBQUNEOztBQUNELFlBQUl5SSxPQUFPLEdBQUcsS0FBS0MsTUFBTCxFQUFkO0FBQ0EsZUFBT0QsT0FBTyxDQUFDcEUsR0FBUixDQUFZLFVBQVV4TCxDQUFWLEVBQWE7QUFDOUIsY0FBSUEsQ0FBQyxDQUFDcUksT0FBTixFQUFlO0FBQ2IsbUJBQU9ySSxDQUFDLENBQUNWLE1BQUYsQ0FBU2MsQ0FBVCxFQUFZLENBQVosQ0FBUDtBQUNEOztBQUNELGlCQUFPSixDQUFDLENBQUN4QixLQUFGLENBQVE0QixDQUFSLENBQVA7QUFDRCxTQUxNLENBQVA7QUFNRCxPQTdWZ0I7QUE4VmpCMFAsTUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsWUFBSSxLQUFLL0gsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGNBQUlnSSxFQUFFLEdBQUc5SSxLQUFLLENBQUM0RSxLQUFOLENBQVksS0FBS2pFLE1BQUwsQ0FBWSxDQUFaLENBQVosRUFBNEIsS0FBS0EsTUFBTCxDQUFZLENBQVosQ0FBNUIsRUFBNEMsS0FBS0EsTUFBTCxDQUFZLENBQVosQ0FBNUMsQ0FBVDtBQUNBLGNBQUlvSSxFQUFFLEdBQUcvSSxLQUFLLENBQUM0RSxLQUFOLENBQVksS0FBS2pFLE1BQUwsQ0FBWSxDQUFaLENBQVosRUFBNEIsS0FBS0EsTUFBTCxDQUFZLENBQVosQ0FBNUIsRUFBNEMsS0FBS0EsTUFBTCxDQUFZLENBQVosQ0FBNUMsQ0FBVDtBQUNBLGNBQUltSSxFQUFFLEdBQUcsQ0FBTCxJQUFVQyxFQUFFLEdBQUcsQ0FBZixJQUFvQkQsRUFBRSxHQUFHLENBQUwsSUFBVUMsRUFBRSxHQUFHLENBQXZDLEVBQTBDLE9BQU8sS0FBUDtBQUMzQzs7QUFDRCxZQUFJQyxFQUFFLEdBQUcsS0FBS3pOLE1BQUwsQ0FBWSxDQUFaLENBQVQ7QUFDQSxZQUFJME4sRUFBRSxHQUFHLEtBQUsxTixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsWUFBSXhDLENBQUMsR0FBR2lRLEVBQUUsQ0FBQzlSLENBQUgsR0FBTytSLEVBQUUsQ0FBQy9SLENBQVYsR0FBYzhSLEVBQUUsQ0FBQ3ZTLENBQUgsR0FBT3dTLEVBQUUsQ0FBQ3hTLENBQWhDOztBQUNBLFlBQUksS0FBS2lLLEdBQVQsRUFBYztBQUNaM0gsVUFBQUEsQ0FBQyxJQUFJaVEsRUFBRSxDQUFDN1IsQ0FBSCxHQUFPOFIsRUFBRSxDQUFDOVIsQ0FBZjtBQUNEOztBQUNELFlBQUl5TixLQUFLLEdBQUdoRixHQUFHLENBQUNqRyxJQUFJLENBQUNaLENBQUQsQ0FBTCxDQUFmO0FBQ0EsZUFBTzZMLEtBQUssR0FBRzlFLEVBQUUsR0FBRyxDQUFwQjtBQUNELE9BNVdnQjtBQTZXakI4SSxNQUFBQSxNQUFNLEVBQUUsU0FBU0EsTUFBVCxHQUFrQjtBQUN4QixZQUFJbFMsQ0FBSjtBQUFBLFlBQ0ltUCxFQUFFLEdBQUcsQ0FEVDtBQUFBLFlBRUlDLEVBQUUsR0FBRyxDQUZUO0FBQUEsWUFHSWpGLElBQUksR0FBRyxJQUhYO0FBQUEsWUFJSXFJLE9BSko7QUFBQSxZQUtJQyxLQUFLLEdBQUcsRUFMWjtBQUFBLFlBTUlDLEtBQUssR0FBRyxFQU5aLENBRHdCOztBQVN4QixZQUFJNUIsT0FBTyxHQUFHLEtBQUtBLE9BQUwsR0FBZVcsTUFBN0I7O0FBQ0EsWUFBSVgsT0FBTyxDQUFDVSxPQUFSLENBQWdCLENBQWhCLE1BQXVCLENBQUMsQ0FBNUIsRUFBK0I7QUFDN0JWLFVBQUFBLE9BQU8sR0FBRyxDQUFDLENBQUQsRUFBSU0sTUFBSixDQUFXTixPQUFYLENBQVY7QUFDRDs7QUFDRCxZQUFJQSxPQUFPLENBQUNVLE9BQVIsQ0FBZ0IsQ0FBaEIsTUFBdUIsQ0FBQyxDQUE1QixFQUErQjtBQUM3QlYsVUFBQUEsT0FBTyxDQUFDakgsSUFBUixDQUFhLENBQWI7QUFDRDs7QUFFRCxhQUFLc0YsRUFBRSxHQUFHMkIsT0FBTyxDQUFDLENBQUQsQ0FBWixFQUFpQjlRLENBQUMsR0FBRyxDQUExQixFQUE2QkEsQ0FBQyxHQUFHOFEsT0FBTyxDQUFDNVEsTUFBekMsRUFBaURGLENBQUMsRUFBbEQsRUFBc0Q7QUFDcERvUCxVQUFBQSxFQUFFLEdBQUcwQixPQUFPLENBQUM5USxDQUFELENBQVo7QUFDQXdTLFVBQUFBLE9BQU8sR0FBRyxLQUFLL0IsS0FBTCxDQUFXdEIsRUFBWCxFQUFlQyxFQUFmLENBQVY7QUFDQW9ELFVBQUFBLE9BQU8sQ0FBQzdILEdBQVIsR0FBY3dFLEVBQWQ7QUFDQXFELFVBQUFBLE9BQU8sQ0FBQzVILEdBQVIsR0FBY3dFLEVBQWQ7QUFDQXFELFVBQUFBLEtBQUssQ0FBQzVJLElBQU4sQ0FBVzJJLE9BQVg7QUFDQXJELFVBQUFBLEVBQUUsR0FBR0MsRUFBTDtBQUNELFNBeEJ1Qjs7O0FBMkJ4QnFELFFBQUFBLEtBQUssQ0FBQ2pSLE9BQU4sQ0FBYyxVQUFVK0QsRUFBVixFQUFjO0FBQzFCNEosVUFBQUEsRUFBRSxHQUFHLENBQUw7QUFDQUMsVUFBQUEsRUFBRSxHQUFHLENBQUw7O0FBQ0EsaUJBQU9BLEVBQUUsSUFBSSxDQUFiLEVBQWdCO0FBQ2QsaUJBQUtBLEVBQUUsR0FBR0QsRUFBRSxHQUFHaEYsSUFBZixFQUFxQmlGLEVBQUUsSUFBSSxJQUFJakYsSUFBL0IsRUFBcUNpRixFQUFFLElBQUlqRixJQUEzQyxFQUFpRDtBQUMvQ3FJLGNBQUFBLE9BQU8sR0FBR2pOLEVBQUUsQ0FBQ2tMLEtBQUgsQ0FBU3RCLEVBQVQsRUFBYUMsRUFBYixDQUFWOztBQUNBLGtCQUFJLENBQUNvRCxPQUFPLENBQUNMLE1BQVIsRUFBTCxFQUF1QjtBQUNyQi9DLGdCQUFBQSxFQUFFLElBQUlqRixJQUFOOztBQUNBLG9CQUFJakIsR0FBRyxDQUFDaUcsRUFBRSxHQUFHQyxFQUFOLENBQUgsR0FBZWpGLElBQW5CLEVBQXlCO0FBQ3ZCO0FBQ0EseUJBQU8sRUFBUDtBQUNEOztBQUNEcUksZ0JBQUFBLE9BQU8sR0FBR2pOLEVBQUUsQ0FBQ2tMLEtBQUgsQ0FBU3RCLEVBQVQsRUFBYUMsRUFBYixDQUFWO0FBQ0FvRCxnQkFBQUEsT0FBTyxDQUFDN0gsR0FBUixHQUFjckIsS0FBSyxDQUFDdUUsR0FBTixDQUFVc0IsRUFBVixFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0I1SixFQUFFLENBQUNvRixHQUF2QixFQUE0QnBGLEVBQUUsQ0FBQ3FGLEdBQS9CLENBQWQ7QUFDQTRILGdCQUFBQSxPQUFPLENBQUM1SCxHQUFSLEdBQWN0QixLQUFLLENBQUN1RSxHQUFOLENBQVV1QixFQUFWLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjdKLEVBQUUsQ0FBQ29GLEdBQXZCLEVBQTRCcEYsRUFBRSxDQUFDcUYsR0FBL0IsQ0FBZDtBQUNBOEgsZ0JBQUFBLEtBQUssQ0FBQzdJLElBQU4sQ0FBVzJJLE9BQVg7QUFDQXJELGdCQUFBQSxFQUFFLEdBQUdDLEVBQUw7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxjQUFJRCxFQUFFLEdBQUcsQ0FBVCxFQUFZO0FBQ1ZxRCxZQUFBQSxPQUFPLEdBQUdqTixFQUFFLENBQUNrTCxLQUFILENBQVN0QixFQUFULEVBQWEsQ0FBYixDQUFWO0FBQ0FxRCxZQUFBQSxPQUFPLENBQUM3SCxHQUFSLEdBQWNyQixLQUFLLENBQUN1RSxHQUFOLENBQVVzQixFQUFWLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjVKLEVBQUUsQ0FBQ29GLEdBQXZCLEVBQTRCcEYsRUFBRSxDQUFDcUYsR0FBL0IsQ0FBZDtBQUNBNEgsWUFBQUEsT0FBTyxDQUFDNUgsR0FBUixHQUFjckYsRUFBRSxDQUFDcUYsR0FBakI7QUFDQThILFlBQUFBLEtBQUssQ0FBQzdJLElBQU4sQ0FBVzJJLE9BQVg7QUFDRDtBQUNGLFNBM0JEO0FBNEJBLGVBQU9FLEtBQVA7QUFDRCxPQXJhZ0I7QUFzYWpCN1IsTUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZXNELENBQWYsRUFBa0I7QUFDdkIsWUFBSWlHLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNBLFlBQUl1SSxVQUFVLEdBQUcsS0FBakI7O0FBQ0EsWUFBSSxPQUFPeE8sQ0FBUCxLQUFhLFVBQWpCLEVBQTZCO0FBQzNCd08sVUFBQUEsVUFBVSxHQUFHeE8sQ0FBYjtBQUNEOztBQUNELFlBQUl3TyxVQUFVLElBQUl2SSxLQUFLLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0IsaUJBQU8sS0FBS21GLEtBQUwsR0FBYTFPLEtBQWIsQ0FBbUI4UixVQUFuQixDQUFQO0FBQ0QsU0FSc0I7OztBQVd2QixZQUFJeEUsU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0FBQ0EsWUFBSThCLEVBQUUsR0FBRzBDLFVBQVUsR0FBR0EsVUFBVSxDQUFDLENBQUQsQ0FBYixHQUFtQnhPLENBQXRDO0FBQ0EsWUFBSStMLEVBQUUsR0FBR3lDLFVBQVUsR0FBR0EsVUFBVSxDQUFDLENBQUQsQ0FBYixHQUFtQnhPLENBQXRDO0FBQ0EsWUFBSStNLENBQUMsR0FBRyxDQUFDLEtBQUt2UCxNQUFMLENBQVksQ0FBWixFQUFlLEVBQWYsQ0FBRCxFQUFxQixLQUFLQSxNQUFMLENBQVksQ0FBWixFQUFlLEVBQWYsQ0FBckIsQ0FBUjtBQUNBLFlBQUlpUixDQUFDLEdBQUd0SixLQUFLLENBQUN1SixJQUFOLENBQVczQixDQUFDLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtoTixDQUF0QixFQUF5QmdOLENBQUMsQ0FBQyxDQUFELENBQTFCLEVBQStCQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtoTixDQUFwQyxDQUFSOztBQUNBLFlBQUksQ0FBQzBPLENBQUwsRUFBUTtBQUNOLGdCQUFNLElBQUk3SSxLQUFKLENBQVUsaURBQVYsQ0FBTjtBQUNELFNBbEJzQjs7O0FBb0J2QixZQUFJRSxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFBQSxZQUNJdUYsRUFBRSxHQUFHLEVBRFQsQ0FwQnVCOztBQXdCdkIsU0FBQyxDQUFELEVBQUksQ0FBSixFQUFPaE8sT0FBUCxDQUFlLFVBQVVpQixDQUFWLEVBQWE7QUFDMUIsY0FBSWlHLENBQUMsR0FBRzhHLEVBQUUsQ0FBQy9NLENBQUMsR0FBRzJILEtBQUwsQ0FBRixHQUFnQmQsS0FBSyxDQUFDd0osSUFBTixDQUFXN0ksTUFBTSxDQUFDeEgsQ0FBQyxHQUFHMkgsS0FBTCxDQUFqQixDQUF4QjtBQUNBMUIsVUFBQUEsQ0FBQyxDQUFDbEksQ0FBRixJQUFPLENBQUNpQyxDQUFDLEdBQUd5TixFQUFILEdBQVFELEVBQVYsSUFBZ0JpQixDQUFDLENBQUN6TyxDQUFELENBQUQsQ0FBS3dJLENBQUwsQ0FBT3pLLENBQTlCO0FBQ0FrSSxVQUFBQSxDQUFDLENBQUMzSSxDQUFGLElBQU8sQ0FBQzBDLENBQUMsR0FBR3lOLEVBQUgsR0FBUUQsRUFBVixJQUFnQmlCLENBQUMsQ0FBQ3pPLENBQUQsQ0FBRCxDQUFLd0ksQ0FBTCxDQUFPbEwsQ0FBOUI7QUFDRCxTQUpjLENBSWJzTyxJQUphLENBSVIsSUFKUSxDQUFmOztBQU1BLFlBQUksQ0FBQ3NFLFVBQUwsRUFBaUI7QUFDZjtBQUNBO0FBQ0EsV0FBQyxDQUFELEVBQUksQ0FBSixFQUFPblIsT0FBUCxDQUFlLFVBQVVpQixDQUFWLEVBQWE7QUFDMUIsZ0JBQUksS0FBSzJILEtBQUwsS0FBZSxDQUFmLElBQW9CLENBQUMsQ0FBQzNILENBQTFCLEVBQTZCO0FBQzdCLGdCQUFJaUcsQ0FBQyxHQUFHOEcsRUFBRSxDQUFDL00sQ0FBQyxHQUFHMkgsS0FBTCxDQUFWO0FBQ0EsZ0JBQUlqRyxDQUFDLEdBQUcsS0FBS2lLLFVBQUwsQ0FBZ0IzTCxDQUFoQixDQUFSO0FBQ0EsZ0JBQUlnSSxFQUFFLEdBQUc7QUFBRWpLLGNBQUFBLENBQUMsRUFBRWtJLENBQUMsQ0FBQ2xJLENBQUYsR0FBTTJELENBQUMsQ0FBQzNELENBQWI7QUFBZ0JULGNBQUFBLENBQUMsRUFBRTJJLENBQUMsQ0FBQzNJLENBQUYsR0FBTW9FLENBQUMsQ0FBQ3BFO0FBQTNCLGFBQVQ7QUFDQXlQLFlBQUFBLEVBQUUsQ0FBQy9NLENBQUMsR0FBRyxDQUFMLENBQUYsR0FBWTZHLEtBQUssQ0FBQ3VKLElBQU4sQ0FBV25LLENBQVgsRUFBYytCLEVBQWQsRUFBa0JtSSxDQUFsQixFQUFxQjNJLE1BQU0sQ0FBQ3hILENBQUMsR0FBRyxDQUFMLENBQTNCLENBQVo7QUFDRCxXQU5jLENBTWI0TCxJQU5hLENBTVIsSUFOUSxDQUFmO0FBT0EsaUJBQU8sSUFBSXJHLE1BQUosQ0FBV3dILEVBQVgsQ0FBUDtBQUNELFNBekNzQjtBQTRDdkI7OztBQUNBLFNBQUMsQ0FBRCxFQUFJLENBQUosRUFBT2hPLE9BQVAsQ0FBZSxVQUFVaUIsQ0FBVixFQUFhO0FBQzFCLGNBQUksS0FBSzJILEtBQUwsS0FBZSxDQUFmLElBQW9CLENBQUMsQ0FBQzNILENBQTFCLEVBQTZCO0FBQzdCLGNBQUlpRyxDQUFDLEdBQUd1QixNQUFNLENBQUN4SCxDQUFDLEdBQUcsQ0FBTCxDQUFkO0FBQ0EsY0FBSXNRLEVBQUUsR0FBRztBQUNQdlMsWUFBQUEsQ0FBQyxFQUFFa0ksQ0FBQyxDQUFDbEksQ0FBRixHQUFNb1MsQ0FBQyxDQUFDcFMsQ0FESjtBQUVQVCxZQUFBQSxDQUFDLEVBQUUySSxDQUFDLENBQUMzSSxDQUFGLEdBQU02UyxDQUFDLENBQUM3UztBQUZKLFdBQVQ7QUFJQSxjQUFJaVQsRUFBRSxHQUFHTCxVQUFVLEdBQUdBLFVBQVUsQ0FBQyxDQUFDbFEsQ0FBQyxHQUFHLENBQUwsSUFBVTJILEtBQVgsQ0FBYixHQUFpQ2pHLENBQXBEO0FBQ0EsY0FBSXdPLFVBQVUsSUFBSSxDQUFDeEUsU0FBbkIsRUFBOEI2RSxFQUFFLEdBQUcsQ0FBQ0EsRUFBTjtBQUM5QixjQUFJN1AsQ0FBQyxHQUFHaEQsSUFBSSxDQUFDNFMsRUFBRSxDQUFDdlMsQ0FBSCxHQUFPdVMsRUFBRSxDQUFDdlMsQ0FBVixHQUFjdVMsRUFBRSxDQUFDaFQsQ0FBSCxHQUFPZ1QsRUFBRSxDQUFDaFQsQ0FBekIsQ0FBWjtBQUNBZ1QsVUFBQUEsRUFBRSxDQUFDdlMsQ0FBSCxJQUFRMkMsQ0FBUjtBQUNBNFAsVUFBQUEsRUFBRSxDQUFDaFQsQ0FBSCxJQUFRb0QsQ0FBUjtBQUNBcU0sVUFBQUEsRUFBRSxDQUFDL00sQ0FBQyxHQUFHLENBQUwsQ0FBRixHQUFZO0FBQ1ZqQyxZQUFBQSxDQUFDLEVBQUVrSSxDQUFDLENBQUNsSSxDQUFGLEdBQU13UyxFQUFFLEdBQUdELEVBQUUsQ0FBQ3ZTLENBRFA7QUFFVlQsWUFBQUEsQ0FBQyxFQUFFMkksQ0FBQyxDQUFDM0ksQ0FBRixHQUFNaVQsRUFBRSxHQUFHRCxFQUFFLENBQUNoVDtBQUZQLFdBQVo7QUFJRCxTQWhCYyxDQWdCYnNPLElBaEJhLENBZ0JSLElBaEJRLENBQWY7QUFpQkEsZUFBTyxJQUFJckcsTUFBSixDQUFXd0gsRUFBWCxDQUFQO0FBQ0QsT0FyZWdCO0FBc2VqQnlELE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCbEgsRUFBakIsRUFBcUJFLEVBQXJCLEVBQXlCaUgsRUFBekIsRUFBNkJDLEVBQTdCLEVBQWlDO0FBQ3hDbEgsUUFBQUEsRUFBRSxHQUFHLE9BQU9BLEVBQVAsS0FBYyxXQUFkLEdBQTRCRixFQUE1QixHQUFpQ0UsRUFBdEM7QUFDQSxZQUFJZ0csT0FBTyxHQUFHLEtBQUtDLE1BQUwsRUFBZDtBQUFBLFlBQ0luUixHQUFHLEdBQUdrUixPQUFPLENBQUMvUixNQURsQjtBQUFBLFlBRUlrVCxPQUFPLEdBQUcsRUFGZDtBQUFBLFlBR0lDLE9BQU8sR0FBRyxFQUhkO0FBQUEsWUFJSTNLLENBSko7QUFBQSxZQUtJNEssSUFBSSxHQUFHLENBTFg7QUFBQSxZQU1JQyxJQUFJLEdBQUcsS0FBS3JULE1BQUwsRUFOWDtBQVFBLFlBQUlzVCxTQUFTLEdBQUcsT0FBT04sRUFBUCxLQUFjLFdBQWQsSUFBNkIsT0FBT0MsRUFBUCxLQUFjLFdBQTNEOztBQUVBLGlCQUFTTSxzQkFBVCxDQUFnQ3BSLENBQWhDLEVBQW1DMEUsQ0FBbkMsRUFBc0N3TSxJQUF0QyxFQUE0Q0QsSUFBNUMsRUFBa0RJLElBQWxELEVBQXdEO0FBQ3RELGlCQUFPLFVBQVV4QyxDQUFWLEVBQWE7QUFDbEIsZ0JBQUl5QyxFQUFFLEdBQUdMLElBQUksR0FBR0MsSUFBaEI7QUFBQSxnQkFDSUssRUFBRSxHQUFHLENBQUNOLElBQUksR0FBR0ksSUFBUixJQUFnQkgsSUFEekI7QUFBQSxnQkFFSXBQLENBQUMsR0FBRzRDLENBQUMsR0FBRzFFLENBRlo7QUFHQSxtQkFBT2lILEtBQUssQ0FBQ3VFLEdBQU4sQ0FBVXFELENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CN08sQ0FBQyxHQUFHc1IsRUFBRSxHQUFHeFAsQ0FBNUIsRUFBK0I5QixDQUFDLEdBQUd1UixFQUFFLEdBQUd6UCxDQUF4QyxDQUFQO0FBQ0QsV0FMRDtBQU1ELFNBbkJ1Qzs7O0FBc0J4QzhOLFFBQUFBLE9BQU8sQ0FBQ3pRLE9BQVIsQ0FBZ0IsVUFBVWdSLE9BQVYsRUFBbUI7QUFDakNrQixVQUFBQSxJQUFJLEdBQUdsQixPQUFPLENBQUN0UyxNQUFSLEVBQVA7O0FBQ0EsY0FBSXNULFNBQUosRUFBZTtBQUNiSixZQUFBQSxPQUFPLENBQUN2SixJQUFSLENBQWEySSxPQUFPLENBQUMzUixLQUFSLENBQWM0UyxzQkFBc0IsQ0FBQzFILEVBQUQsRUFBS21ILEVBQUwsRUFBU0ssSUFBVCxFQUFlRCxJQUFmLEVBQXFCSSxJQUFyQixDQUFwQyxDQUFiO0FBQ0FMLFlBQUFBLE9BQU8sQ0FBQ3hKLElBQVIsQ0FBYTJJLE9BQU8sQ0FBQzNSLEtBQVIsQ0FBYzRTLHNCQUFzQixDQUFDLENBQUN4SCxFQUFGLEVBQU0sQ0FBQ2tILEVBQVAsRUFBV0ksSUFBWCxFQUFpQkQsSUFBakIsRUFBdUJJLElBQXZCLENBQXBDLENBQWI7QUFDRCxXQUhELE1BR087QUFDTE4sWUFBQUEsT0FBTyxDQUFDdkosSUFBUixDQUFhMkksT0FBTyxDQUFDM1IsS0FBUixDQUFja0wsRUFBZCxDQUFiO0FBQ0FzSCxZQUFBQSxPQUFPLENBQUN4SixJQUFSLENBQWEySSxPQUFPLENBQUMzUixLQUFSLENBQWMsQ0FBQ29MLEVBQWYsQ0FBYjtBQUNEOztBQUNEcUgsVUFBQUEsSUFBSSxJQUFJSSxJQUFSO0FBQ0QsU0FWRCxFQXRCd0M7O0FBbUN4Q0wsUUFBQUEsT0FBTyxHQUFHQSxPQUFPLENBQUN4RixHQUFSLENBQVksVUFBVXhMLENBQVYsRUFBYTtBQUNqQ3FHLFVBQUFBLENBQUMsR0FBR3JHLENBQUMsQ0FBQzRILE1BQU47O0FBQ0EsY0FBSXZCLENBQUMsQ0FBQyxDQUFELENBQUwsRUFBVTtBQUNSckcsWUFBQUEsQ0FBQyxDQUFDNEgsTUFBRixHQUFXLENBQUN2QixDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU9BLENBQUMsQ0FBQyxDQUFELENBQVIsRUFBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsQ0FBWDtBQUNELFdBRkQsTUFFTztBQUNMckcsWUFBQUEsQ0FBQyxDQUFDNEgsTUFBRixHQUFXLENBQUN2QixDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU9BLENBQUMsQ0FBQyxDQUFELENBQVIsRUFBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxDQUFYO0FBQ0Q7O0FBQ0QsaUJBQU9yRyxDQUFQO0FBQ0QsU0FSUyxFQVFQd1IsT0FSTyxFQUFWLENBbkN3Qzs7QUE4Q3hDLFlBQUlDLEVBQUUsR0FBR1YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXbkosTUFBWCxDQUFrQixDQUFsQixDQUFUO0FBQUEsWUFDSThKLEVBQUUsR0FBR1gsT0FBTyxDQUFDclMsR0FBRyxHQUFHLENBQVAsQ0FBUCxDQUFpQmtKLE1BQWpCLENBQXdCbUosT0FBTyxDQUFDclMsR0FBRyxHQUFHLENBQVAsQ0FBUCxDQUFpQmtKLE1BQWpCLENBQXdCL0osTUFBeEIsR0FBaUMsQ0FBekQsQ0FEVDtBQUFBLFlBRUk4VCxFQUFFLEdBQUdYLE9BQU8sQ0FBQ3RTLEdBQUcsR0FBRyxDQUFQLENBQVAsQ0FBaUJrSixNQUFqQixDQUF3Qm9KLE9BQU8sQ0FBQ3RTLEdBQUcsR0FBRyxDQUFQLENBQVAsQ0FBaUJrSixNQUFqQixDQUF3Qi9KLE1BQXhCLEdBQWlDLENBQXpELENBRlQ7QUFBQSxZQUdJK1QsRUFBRSxHQUFHWixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdwSixNQUFYLENBQWtCLENBQWxCLENBSFQ7QUFBQSxZQUlJaUssRUFBRSxHQUFHNUssS0FBSyxDQUFDNkssUUFBTixDQUFlSCxFQUFmLEVBQW1CRixFQUFuQixDQUpUO0FBQUEsWUFLSU0sRUFBRSxHQUFHOUssS0FBSyxDQUFDNkssUUFBTixDQUFlSixFQUFmLEVBQW1CRSxFQUFuQixDQUxUO0FBQUEsWUFNSUksUUFBUSxHQUFHLENBQUNILEVBQUQsRUFBSzlDLE1BQUwsQ0FBWWdDLE9BQVosRUFBcUJoQyxNQUFyQixDQUE0QixDQUFDZ0QsRUFBRCxDQUE1QixFQUFrQ2hELE1BQWxDLENBQXlDaUMsT0FBekMsQ0FOZjtBQUFBLFlBT0lLLElBQUksR0FBR1csUUFBUSxDQUFDblUsTUFQcEI7QUFTQSxlQUFPLElBQUlxSixVQUFKLENBQWU4SyxRQUFmLENBQVA7QUFDRCxPQTloQmdCO0FBK2hCakJDLE1BQUFBLGFBQWEsRUFBRSxTQUFTQSxhQUFULENBQXVCdkksRUFBdkIsRUFBMkJFLEVBQTNCLEVBQStCc0ksMEJBQS9CLEVBQTJEO0FBQ3hFdEksUUFBQUEsRUFBRSxHQUFHQSxFQUFFLElBQUlGLEVBQVg7QUFDQSxZQUFJa0gsT0FBTyxHQUFHLEtBQUtBLE9BQUwsQ0FBYWxILEVBQWIsRUFBaUJFLEVBQWpCLEVBQXFCdUksTUFBbkM7QUFDQSxZQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFLLElBQUl6VSxDQUFDLEdBQUcsQ0FBUixFQUFXZSxHQUFHLEdBQUdrUyxPQUFPLENBQUMvUyxNQUE5QixFQUFzQ0YsQ0FBQyxHQUFHZSxHQUFHLEdBQUcsQ0FBaEQsRUFBbURmLENBQUMsRUFBcEQsRUFBd0Q7QUFDdEQsY0FBSTBVLEtBQUssR0FBR3BMLEtBQUssQ0FBQ3FMLFNBQU4sQ0FBZ0IxQixPQUFPLENBQUNqVCxDQUFELENBQXZCLEVBQTRCaVQsT0FBTyxDQUFDbFMsR0FBRyxHQUFHZixDQUFQLENBQW5DLEVBQThDdVUsMEJBQTlDLENBQVo7QUFDQUcsVUFBQUEsS0FBSyxDQUFDRSxRQUFOLENBQWVDLE9BQWYsR0FBeUI3VSxDQUFDLEdBQUcsQ0FBN0I7QUFDQTBVLFVBQUFBLEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxPQUFiLEdBQXVCN1UsQ0FBQyxHQUFHZSxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQXJDO0FBQ0EwVCxVQUFBQSxNQUFNLENBQUM1SyxJQUFQLENBQVk2SyxLQUFaO0FBQ0Q7O0FBQ0QsZUFBT0QsTUFBUDtBQUNELE9BMWlCZ0I7QUEyaUJqQk0sTUFBQUEsVUFBVSxFQUFFLFNBQVNBLFVBQVQsQ0FBb0J4SyxLQUFwQixFQUEyQmdLLDBCQUEzQixFQUF1RDtBQUNqRSxZQUFJLENBQUNoSyxLQUFMLEVBQVksT0FBTyxLQUFLeUssY0FBTCxDQUFvQlQsMEJBQXBCLENBQVA7O0FBQ1osWUFBSWhLLEtBQUssQ0FBQ2hGLEVBQU4sSUFBWWdGLEtBQUssQ0FBQ0UsRUFBdEIsRUFBMEI7QUFDeEIsaUJBQU8sS0FBS3dLLGNBQUwsQ0FBb0IxSyxLQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsWUFBSUEsS0FBSyxZQUFZdkMsTUFBckIsRUFBNkI7QUFDM0J1QyxVQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzJILE1BQU4sRUFBUjtBQUNEOztBQUNELGVBQU8sS0FBS2dELGVBQUwsQ0FBcUIsS0FBS2hELE1BQUwsRUFBckIsRUFBb0MzSCxLQUFwQyxFQUEyQ2dLLDBCQUEzQyxDQUFQO0FBQ0QsT0FwakJnQjtBQXFqQmpCVSxNQUFBQSxjQUFjLEVBQUUsU0FBU0EsY0FBVCxDQUF3QkUsSUFBeEIsRUFBOEI7QUFDNUMsWUFBSUMsRUFBRSxHQUFHcFQsR0FBRyxDQUFDbVQsSUFBSSxDQUFDNVAsRUFBTCxDQUFRL0UsQ0FBVCxFQUFZMlUsSUFBSSxDQUFDMUssRUFBTCxDQUFRakssQ0FBcEIsQ0FBWjtBQUFBLFlBQ0k2VSxFQUFFLEdBQUdyVCxHQUFHLENBQUNtVCxJQUFJLENBQUM1UCxFQUFMLENBQVF4RixDQUFULEVBQVlvVixJQUFJLENBQUMxSyxFQUFMLENBQVExSyxDQUFwQixDQURaO0FBQUEsWUFFSXVWLEVBQUUsR0FBR25NLEdBQUcsQ0FBQ2dNLElBQUksQ0FBQzVQLEVBQUwsQ0FBUS9FLENBQVQsRUFBWTJVLElBQUksQ0FBQzFLLEVBQUwsQ0FBUWpLLENBQXBCLENBRlo7QUFBQSxZQUdJK1UsRUFBRSxHQUFHcE0sR0FBRyxDQUFDZ00sSUFBSSxDQUFDNVAsRUFBTCxDQUFReEYsQ0FBVCxFQUFZb1YsSUFBSSxDQUFDMUssRUFBTCxDQUFRMUssQ0FBcEIsQ0FIWjtBQUFBLFlBSUl5VixJQUFJLEdBQUcsSUFKWDtBQUtBLGVBQU9sTSxLQUFLLENBQUN5SCxLQUFOLENBQVksS0FBSzlHLE1BQWpCLEVBQXlCa0wsSUFBekIsRUFBK0I5RCxNQUEvQixDQUFzQyxVQUFVNU8sQ0FBVixFQUFhO0FBQ3hELGNBQUlpRyxDQUFDLEdBQUc4TSxJQUFJLENBQUNuRyxHQUFMLENBQVM1TSxDQUFULENBQVI7QUFDQSxpQkFBTzZHLEtBQUssQ0FBQ21NLE9BQU4sQ0FBYy9NLENBQUMsQ0FBQ2xJLENBQWhCLEVBQW1CNFUsRUFBbkIsRUFBdUJFLEVBQXZCLEtBQThCaE0sS0FBSyxDQUFDbU0sT0FBTixDQUFjL00sQ0FBQyxDQUFDM0ksQ0FBaEIsRUFBbUJzVixFQUFuQixFQUF1QkUsRUFBdkIsQ0FBckM7QUFDRCxTQUhNLENBQVA7QUFJRCxPQS9qQmdCO0FBZ2tCakJQLE1BQUFBLGNBQWMsRUFBRSxTQUFTQSxjQUFULENBQXdCVCwwQkFBeEIsRUFBb0Q7QUFDbEUsWUFBSXRDLE9BQU8sR0FBRyxLQUFLQyxNQUFMLEVBQWQsQ0FEa0U7QUFHbEU7QUFDQTs7QUFDQSxZQUFJbFMsQ0FBSjtBQUFBLFlBQ0llLEdBQUcsR0FBR2tSLE9BQU8sQ0FBQy9SLE1BQVIsR0FBaUIsQ0FEM0I7QUFBQSxZQUVJd1YsT0FBTyxHQUFHLEVBRmQ7QUFBQSxZQUdJL0UsTUFISjtBQUFBLFlBSUlELElBSko7QUFBQSxZQUtJbE0sS0FMSjs7QUFNQSxhQUFLeEUsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZSxHQUFoQixFQUFxQmYsQ0FBQyxFQUF0QixFQUEwQjtBQUN4QjBRLFVBQUFBLElBQUksR0FBR3VCLE9BQU8sQ0FBQ2xLLEtBQVIsQ0FBYy9ILENBQWQsRUFBaUJBLENBQUMsR0FBRyxDQUFyQixDQUFQO0FBQ0F3RSxVQUFBQSxLQUFLLEdBQUd5TixPQUFPLENBQUNsSyxLQUFSLENBQWMvSCxDQUFDLEdBQUcsQ0FBbEIsQ0FBUjtBQUNBMlEsVUFBQUEsTUFBTSxHQUFHLEtBQUt1RSxlQUFMLENBQXFCeEUsSUFBckIsRUFBMkJsTSxLQUEzQixFQUFrQytQLDBCQUFsQyxDQUFUO0FBQ0FtQixVQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3RFLE1BQVIsQ0FBZVQsTUFBZixDQUFWO0FBQ0Q7O0FBQ0QsZUFBTytFLE9BQVA7QUFDRCxPQWxsQmdCO0FBbWxCakJSLE1BQUFBLGVBQWUsRUFBRSxTQUFTQSxlQUFULENBQXlCUyxFQUF6QixFQUE2QkMsRUFBN0IsRUFBaUNyQiwwQkFBakMsRUFBNkQ7QUFDNUUsWUFBSXNCLEtBQUssR0FBRyxFQUFaLENBRDRFOztBQUc1RUYsUUFBQUEsRUFBRSxDQUFDblUsT0FBSCxDQUFXLFVBQVVPLENBQVYsRUFBYTtBQUN0QjZULFVBQUFBLEVBQUUsQ0FBQ3BVLE9BQUgsQ0FBVyxVQUFVOEUsQ0FBVixFQUFhO0FBQ3RCLGdCQUFJdkUsQ0FBQyxDQUFDNlAsUUFBRixDQUFXdEwsQ0FBWCxDQUFKLEVBQW1CO0FBQ2pCdVAsY0FBQUEsS0FBSyxDQUFDaE0sSUFBTixDQUFXO0FBQUU2RyxnQkFBQUEsSUFBSSxFQUFFM08sQ0FBUjtBQUFXeUMsZ0JBQUFBLEtBQUssRUFBRThCO0FBQWxCLGVBQVg7QUFDRDtBQUNGLFdBSkQ7QUFLRCxTQU5ELEVBSDRFOztBQVc1RSxZQUFJd1AsYUFBYSxHQUFHLEVBQXBCO0FBQ0FELFFBQUFBLEtBQUssQ0FBQ3JVLE9BQU4sQ0FBYyxVQUFVdVUsSUFBVixFQUFnQjtBQUM1QixjQUFJcEYsTUFBTSxHQUFHckgsS0FBSyxDQUFDME0sYUFBTixDQUFvQkQsSUFBSSxDQUFDckYsSUFBekIsRUFBK0JxRixJQUFJLENBQUN2UixLQUFwQyxFQUEyQytQLDBCQUEzQyxDQUFiOztBQUNBLGNBQUk1RCxNQUFNLENBQUN6USxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCNFYsWUFBQUEsYUFBYSxHQUFHQSxhQUFhLENBQUMxRSxNQUFkLENBQXFCVCxNQUFyQixDQUFoQjtBQUNEO0FBQ0YsU0FMRDtBQU1BLGVBQU9tRixhQUFQO0FBQ0QsT0F0bUJnQjtBQXVtQmpCRyxNQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFjQyxjQUFkLEVBQThCO0FBQ2xDQSxRQUFBQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxHQUFuQztBQUNBLFlBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsZUFBTyxLQUFLQyxRQUFMLENBQWNGLGNBQWQsRUFBOEJDLE9BQTlCLENBQVA7QUFDRCxPQTNtQmdCO0FBNG1CakJFLE1BQUFBLE1BQU0sRUFBRSxTQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQUFvQkMsR0FBcEIsRUFBeUJsVSxDQUF6QixFQUE0QjBFLENBQTVCLEVBQStCO0FBQ3JDLFlBQUlpSixDQUFDLEdBQUcsQ0FBQ2pKLENBQUMsR0FBRzFFLENBQUwsSUFBVSxDQUFsQjtBQUFBLFlBQ0lzVCxFQUFFLEdBQUcsS0FBS3RHLEdBQUwsQ0FBU2hOLENBQUMsR0FBRzJOLENBQWIsQ0FEVDtBQUFBLFlBRUk0RixFQUFFLEdBQUcsS0FBS3ZHLEdBQUwsQ0FBU3RJLENBQUMsR0FBR2lKLENBQWIsQ0FGVDtBQUFBLFlBR0l3RyxHQUFHLEdBQUdsTixLQUFLLENBQUMwQyxJQUFOLENBQVdzSyxFQUFYLEVBQWVDLEdBQWYsQ0FIVjtBQUFBLFlBSUl4SyxFQUFFLEdBQUd6QyxLQUFLLENBQUMwQyxJQUFOLENBQVdzSyxFQUFYLEVBQWVYLEVBQWYsQ0FKVDtBQUFBLFlBS0kxSixFQUFFLEdBQUczQyxLQUFLLENBQUMwQyxJQUFOLENBQVdzSyxFQUFYLEVBQWVWLEVBQWYsQ0FMVDtBQU1BLGVBQU8xTSxHQUFHLENBQUM2QyxFQUFFLEdBQUd5SyxHQUFOLENBQUgsR0FBZ0J0TixHQUFHLENBQUMrQyxFQUFFLEdBQUd1SyxHQUFOLENBQTFCO0FBQ0QsT0FwbkJnQjtBQXFuQmpCSixNQUFBQSxRQUFRLEVBQUUsU0FBU0EsUUFBVCxDQUFrQkYsY0FBbEIsRUFBa0NDLE9BQWxDLEVBQTJDO0FBQ25ELFlBQUlNLEdBQUcsR0FBRyxDQUFWO0FBQUEsWUFDSUMsR0FBRyxHQUFHLENBRFY7QUFBQSxZQUVJQyxNQUZKLENBRG1EOztBQUtuRCxXQUFHO0FBQ0RBLFVBQUFBLE1BQU0sR0FBRyxDQUFULENBREM7O0FBSURELFVBQUFBLEdBQUcsR0FBRyxDQUFOLENBSkM7O0FBT0QsY0FBSUgsR0FBRyxHQUFHLEtBQUtsSCxHQUFMLENBQVNvSCxHQUFULENBQVY7QUFBQSxjQUNJRyxHQURKO0FBQUEsY0FFSUMsR0FGSjtBQUFBLGNBR0lDLEdBSEo7QUFBQSxjQUlJQyxRQUpKLENBUEM7O0FBY0QsY0FBSUMsU0FBUyxHQUFHLEtBQWhCO0FBQUEsY0FDSUMsU0FBUyxHQUFHLEtBRGhCO0FBQUEsY0FFSUMsSUFGSixDQWRDOztBQW1CRCxjQUFJQyxHQUFHLEdBQUdULEdBQVY7QUFBQSxjQUNJVSxNQUFNLEdBQUcsQ0FEYjtBQW5CQzs7QUF3QkQsYUFBRztBQUNESCxZQUFBQSxTQUFTLEdBQUdELFNBQVo7QUFDQUQsWUFBQUEsUUFBUSxHQUFHRCxHQUFYO0FBQ0FLLFlBQUFBLEdBQUcsR0FBRyxDQUFDVixHQUFHLEdBQUdDLEdBQVAsSUFBYyxDQUFwQjtBQUdBRSxZQUFBQSxHQUFHLEdBQUcsS0FBS3ZILEdBQUwsQ0FBUzhILEdBQVQsQ0FBTjtBQUNBTixZQUFBQSxHQUFHLEdBQUcsS0FBS3hILEdBQUwsQ0FBU3FILEdBQVQsQ0FBTjtBQUVBSSxZQUFBQSxHQUFHLEdBQUd4TixLQUFLLENBQUMrTixVQUFOLENBQWlCZCxHQUFqQixFQUFzQkssR0FBdEIsRUFBMkJDLEdBQTNCLENBQU4sQ0FUQzs7QUFZREMsWUFBQUEsR0FBRyxDQUFDUSxRQUFKLEdBQWU7QUFDYkMsY0FBQUEsS0FBSyxFQUFFZCxHQURNO0FBRWJlLGNBQUFBLEdBQUcsRUFBRWQ7QUFGUSxhQUFmOztBQUtBLGdCQUFJaEksS0FBSyxHQUFHLEtBQUsySCxNQUFMLENBQVlTLEdBQVosRUFBaUJQLEdBQWpCLEVBQXNCRSxHQUF0QixFQUEyQkMsR0FBM0IsQ0FBWjs7QUFDQU0sWUFBQUEsU0FBUyxHQUFHdEksS0FBSyxJQUFJd0gsY0FBckI7QUFFQWdCLFlBQUFBLElBQUksR0FBR0QsU0FBUyxJQUFJLENBQUNELFNBQXJCO0FBQ0EsZ0JBQUksQ0FBQ0UsSUFBTCxFQUFXRSxNQUFNLEdBQUdWLEdBQVQsQ0FyQlY7O0FBd0JELGdCQUFJTSxTQUFKLEVBQWU7QUFDYjtBQUNBLGtCQUFJTixHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1o7QUFDQUksZ0JBQUFBLEdBQUcsQ0FBQ1EsUUFBSixDQUFhRSxHQUFiLEdBQW1CSixNQUFNLEdBQUcsQ0FBNUI7QUFDQUwsZ0JBQUFBLFFBQVEsR0FBR0QsR0FBWCxDQUhZO0FBS1o7O0FBQ0Esb0JBQUlKLEdBQUcsR0FBRyxDQUFWLEVBQWE7QUFDWCxzQkFBSXZTLENBQUMsR0FBRztBQUNOM0Qsb0JBQUFBLENBQUMsRUFBRXNXLEdBQUcsQ0FBQ3RXLENBQUosR0FBUXNXLEdBQUcsQ0FBQ3hRLENBQUosR0FBUS9ELEdBQUcsQ0FBQ3VVLEdBQUcsQ0FBQy9QLENBQUwsQ0FEaEI7QUFFTmhILG9CQUFBQSxDQUFDLEVBQUUrVyxHQUFHLENBQUMvVyxDQUFKLEdBQVErVyxHQUFHLENBQUN4USxDQUFKLEdBQVFoRSxHQUFHLENBQUN3VSxHQUFHLENBQUMvUCxDQUFMO0FBRmhCLG1CQUFSO0FBSUErUCxrQkFBQUEsR0FBRyxDQUFDL1AsQ0FBSixJQUFTdUMsS0FBSyxDQUFDNEUsS0FBTixDQUFZO0FBQUUxTixvQkFBQUEsQ0FBQyxFQUFFc1csR0FBRyxDQUFDdFcsQ0FBVDtBQUFZVCxvQkFBQUEsQ0FBQyxFQUFFK1csR0FBRyxDQUFDL1c7QUFBbkIsbUJBQVosRUFBb0NvRSxDQUFwQyxFQUF1QyxLQUFLa0wsR0FBTCxDQUFTLENBQVQsQ0FBdkMsQ0FBVDtBQUNEOztBQUNEO0FBQ0QsZUFoQlk7OztBQWtCYnFILGNBQUFBLEdBQUcsR0FBR0EsR0FBRyxHQUFHLENBQUNBLEdBQUcsR0FBR0QsR0FBUCxJQUFjLENBQTFCO0FBQ0QsYUFuQkQsTUFtQk87QUFDTDtBQUNBQyxjQUFBQSxHQUFHLEdBQUdTLEdBQU47QUFDRDtBQUNGLFdBL0NELFFBK0NTLENBQUNELElBQUQsSUFBU1AsTUFBTSxLQUFLLEdBL0M3Qjs7QUFpREEsY0FBSUEsTUFBTSxJQUFJLEdBQWQsRUFBbUI7QUFDakI7QUFDRCxXQTNFQTs7O0FBK0VESSxVQUFBQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBSCxHQUFjRCxHQUFqQztBQUNBWCxVQUFBQSxPQUFPLENBQUN0TSxJQUFSLENBQWFrTixRQUFiO0FBQ0FOLFVBQUFBLEdBQUcsR0FBR1csTUFBTjtBQUNELFNBbEZELFFBa0ZTVixHQUFHLEdBQUcsQ0FsRmY7O0FBbUZBLGVBQU9QLE9BQVA7QUFDRDtBQTlzQmdCLEtBQW5CO0FBaXRCQTdOLElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkwsTUFBakI7QUFDRCxHQXo0QkQ7QUEyNEJEOztBQUFPLENBbDZCRztBQW02QlY7O0FBQ0E7QUFBTyxVQUFTTSxNQUFULEVBQWlCRCxPQUFqQixFQUEwQkYsbUJBQTFCLEVBQStDOztBQUlyRCxHQUFDLFlBQVk7O0FBS1gsUUFBSWUsR0FBRyxHQUFHckosSUFBSSxDQUFDcUosR0FBZjtBQUFBLFFBQ0kzRyxHQUFHLEdBQUcxQyxJQUFJLENBQUMwQyxHQURmO0FBQUEsUUFFSUQsR0FBRyxHQUFHekMsSUFBSSxDQUFDeUMsR0FGZjtBQUFBLFFBR0lXLElBQUksR0FBR3BELElBQUksQ0FBQ29ELElBSGhCO0FBQUEsUUFJSThDLEtBQUssR0FBR2xHLElBQUksQ0FBQ2tHLEtBSmpCO0FBQUEsUUFLSTVGLElBQUksR0FBR04sSUFBSSxDQUFDTSxJQUxoQjtBQUFBLFFBTUlzWCxHQUFHLEdBQUc1WCxJQUFJLENBQUM0WCxHQU5mO0FBQUE7QUFTQUMsSUFBQUEsR0FBRyxHQUFHLFNBQVNBLEdBQVQsQ0FBYXhHLENBQWIsRUFBZ0I7QUFDcEIsYUFBT0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFDdUcsR0FBRyxDQUFDLENBQUN2RyxDQUFGLEVBQUssSUFBSSxDQUFULENBQVosR0FBMEJ1RyxHQUFHLENBQUN2RyxDQUFELEVBQUksSUFBSSxDQUFSLENBQXBDO0FBQ0QsS0FYRDtBQUFBO0FBY0E5SCxJQUFBQSxFQUFFLEdBQUd2SixJQUFJLENBQUNpRSxFQWRWO0FBQUEsUUFlSTZULEdBQUcsR0FBRyxJQUFJdk8sRUFmZDtBQUFBLFFBZ0JJd08sS0FBSyxHQUFHeE8sRUFBRSxHQUFHLENBaEJqQjtBQUFBO0FBbUJBeU8sSUFBQUEsT0FBTyxHQUFHLFFBbkJWO0FBQUE7QUFzQkFDLElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxnQkFBUCxJQUEyQixnQkF0QmxDO0FBQUEsUUF1QklDLElBQUksR0FBR0YsTUFBTSxDQUFDRyxnQkFBUCxJQUEyQixDQUFDLGdCQXZCdkM7QUFBQTtBQTBCQTdPLElBQUFBLElBQUksR0FBRztBQUFFN0ksTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUVQsTUFBQUEsQ0FBQyxFQUFFLENBQVg7QUFBY1UsTUFBQUEsQ0FBQyxFQUFFO0FBQWpCLEtBMUJQLENBTFc7OztBQWtDWCxRQUFJNkksS0FBSyxHQUFHO0FBQ1Y7QUFDQTZPLE1BQUFBLE9BQU8sRUFBRSxDQUFDLENBQUMsMENBQUYsRUFBOEMsMENBQTlDLEVBQTBGLENBQUMsMENBQTNGLEVBQXVJLDBDQUF2SSxFQUFtTCxDQUFDLDBDQUFwTCxFQUFnTywwQ0FBaE8sRUFBNFEsQ0FBQywwQ0FBN1EsRUFBeVQsMENBQXpULEVBQXFXLENBQUMsMENBQXRXLEVBQWtaLDBDQUFsWixFQUE4YixDQUFDLDBDQUEvYixFQUEyZSwwQ0FBM2UsRUFBdWhCLENBQUMsMENBQXhoQixFQUFva0IsMENBQXBrQixFQUFnbkIsQ0FBQywwQ0FBam5CLEVBQTZwQiwwQ0FBN3BCLEVBQXlzQixDQUFDLDBDQUExc0IsRUFBc3ZCLDBDQUF0dkIsRUFBa3lCLENBQUMsMENBQW55QixFQUErMEIsMENBQS8wQixFQUEyM0IsQ0FBQywwQ0FBNTNCLEVBQXc2QiwwQ0FBeDZCLEVBQW85QixDQUFDLDBDQUFyOUIsRUFBaWdDLDBDQUFqZ0MsQ0FGQztBQUlWO0FBQ0FDLE1BQUFBLE9BQU8sRUFBRSxDQUFDLDBDQUFELEVBQTZDLDBDQUE3QyxFQUF5RiwwQ0FBekYsRUFBcUksMENBQXJJLEVBQWlMLHlDQUFqTCxFQUE0Tix5Q0FBNU4sRUFBdVEsMENBQXZRLEVBQW1ULDBDQUFuVCxFQUErViwwQ0FBL1YsRUFBMlksMENBQTNZLEVBQXViLDBDQUF2YixFQUFtZSwwQ0FBbmUsRUFBK2dCLHlDQUEvZ0IsRUFBMGpCLHlDQUExakIsRUFBcW1CLDBDQUFybUIsRUFBaXBCLDBDQUFqcEIsRUFBNnJCLDBDQUE3ckIsRUFBeXVCLDBDQUF6dUIsRUFBcXhCLDBDQUFyeEIsRUFBaTBCLDBDQUFqMEIsRUFBNjJCLDBDQUE3MkIsRUFBeTVCLDBDQUF6NUIsRUFBcThCLDBDQUFyOEIsRUFBaS9CLDBDQUFqL0IsQ0FMQztBQU9WQyxNQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlNVYsQ0FBZixFQUFrQjZWLFlBQWxCLEVBQWdDO0FBQ3JDLFlBQUluVSxDQUFDLEdBQUdtVSxZQUFZLENBQUM3VixDQUFELENBQXBCO0FBQ0EsWUFBSVYsQ0FBQyxHQUFHb0MsQ0FBQyxDQUFDM0QsQ0FBRixHQUFNMkQsQ0FBQyxDQUFDM0QsQ0FBUixHQUFZMkQsQ0FBQyxDQUFDcEUsQ0FBRixHQUFNb0UsQ0FBQyxDQUFDcEUsQ0FBNUI7O0FBQ0EsWUFBSSxPQUFPb0UsQ0FBQyxDQUFDMUQsQ0FBVCxLQUFlLFdBQW5CLEVBQWdDO0FBQzlCc0IsVUFBQUEsQ0FBQyxJQUFJb0MsQ0FBQyxDQUFDMUQsQ0FBRixHQUFNMEQsQ0FBQyxDQUFDMUQsQ0FBYjtBQUNEOztBQUNELGVBQU9OLElBQUksQ0FBQzRCLENBQUQsQ0FBWDtBQUNELE9BZFM7QUFnQlZ5TSxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQi9MLENBQWpCLEVBQW9Cd0gsTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQ3hDO0FBQ0EsWUFBSXZILENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWCxpQkFBT3dILE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDRDs7QUFFRCxZQUFJRyxLQUFLLEdBQUdILE1BQU0sQ0FBQy9KLE1BQVAsR0FBZ0IsQ0FBNUI7O0FBRUEsWUFBSXVDLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWCxpQkFBT3dILE1BQU0sQ0FBQ0csS0FBRCxDQUFiO0FBQ0Q7O0FBRUQsWUFBSTFCLENBQUMsR0FBR3VCLE1BQVI7QUFDQSxZQUFJeUYsRUFBRSxHQUFHLElBQUlqTixDQUFiLENBYndDOztBQWdCeEMsWUFBSTJILEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsaUJBQU9ILE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDRCxTQWxCdUM7OztBQXFCeEMsWUFBSUcsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZnVGLFVBQUFBLEdBQUcsR0FBRztBQUNKblAsWUFBQUEsQ0FBQyxFQUFFa1AsRUFBRSxHQUFHaEgsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FBVixHQUFjaUMsQ0FBQyxHQUFHaUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FEdEI7QUFFSlQsWUFBQUEsQ0FBQyxFQUFFMlAsRUFBRSxHQUFHaEgsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FBVixHQUFjMEMsQ0FBQyxHQUFHaUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0k7QUFGdEIsV0FBTjs7QUFJQSxjQUFJaUssR0FBSixFQUFTO0FBQ1AyRixZQUFBQSxHQUFHLENBQUNsUCxDQUFKLEdBQVFpUCxFQUFFLEdBQUdoSCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUFWLEdBQWNnQyxDQUFDLEdBQUdpRyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUEvQjtBQUNEOztBQUNELGlCQUFPa1AsR0FBUDtBQUNELFNBOUJ1Qzs7O0FBaUN4QyxZQUFJdkYsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLGNBQUltTyxHQUFHLEdBQUc3SSxFQUFFLEdBQUdBLEVBQWY7QUFBQSxjQUNJTixFQUFFLEdBQUczTSxDQUFDLEdBQUdBLENBRGI7QUFBQSxjQUVJbEMsQ0FGSjtBQUFBLGNBR0lLLENBSEo7QUFBQSxjQUlJc0QsQ0FKSjtBQUFBLGNBS0lDLENBQUMsR0FBRyxDQUxSOztBQU1BLGNBQUlpRyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmMUIsWUFBQUEsQ0FBQyxHQUFHLENBQUNBLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUixFQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEVBQW1CVyxJQUFuQixDQUFKO0FBQ0E5SSxZQUFBQSxDQUFDLEdBQUdnWSxHQUFKO0FBQ0EzWCxZQUFBQSxDQUFDLEdBQUc4TyxFQUFFLEdBQUdqTixDQUFMLEdBQVMsQ0FBYjtBQUNBeUIsWUFBQUEsQ0FBQyxHQUFHa0wsRUFBSjtBQUNELFdBTEQsTUFLTyxJQUFJaEYsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDdEI3SixZQUFBQSxDQUFDLEdBQUdnWSxHQUFHLEdBQUc3SSxFQUFWO0FBQ0E5TyxZQUFBQSxDQUFDLEdBQUcyWCxHQUFHLEdBQUc5VixDQUFOLEdBQVUsQ0FBZDtBQUNBeUIsWUFBQUEsQ0FBQyxHQUFHd0wsRUFBRSxHQUFHTixFQUFMLEdBQVUsQ0FBZDtBQUNBakwsWUFBQUEsQ0FBQyxHQUFHMUIsQ0FBQyxHQUFHMk0sRUFBUjtBQUNEOztBQUNELGNBQUlPLEdBQUcsR0FBRztBQUNSblAsWUFBQUEsQ0FBQyxFQUFFRCxDQUFDLEdBQUdtSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFULEdBQWFJLENBQUMsR0FBRzhILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2xJLENBQXRCLEdBQTBCMEQsQ0FBQyxHQUFHd0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FBbkMsR0FBdUMyRCxDQUFDLEdBQUd1RSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUQzQztBQUVSVCxZQUFBQSxDQUFDLEVBQUVRLENBQUMsR0FBR21JLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzNJLENBQVQsR0FBYWEsQ0FBQyxHQUFHOEgsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FBdEIsR0FBMEJtRSxDQUFDLEdBQUd3RSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUFuQyxHQUF1Q29FLENBQUMsR0FBR3VFLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzNJO0FBRjNDLFdBQVY7O0FBSUEsY0FBSWlLLEdBQUosRUFBUztBQUNQMkYsWUFBQUEsR0FBRyxDQUFDbFAsQ0FBSixHQUFRRixDQUFDLEdBQUdtSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUFULEdBQWFHLENBQUMsR0FBRzhILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQXRCLEdBQTBCeUQsQ0FBQyxHQUFHd0UsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLakksQ0FBbkMsR0FBdUMwRCxDQUFDLEdBQUd1RSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUF4RDtBQUNEOztBQUNELGlCQUFPa1AsR0FBUDtBQUNELFNBM0R1Qzs7O0FBOER4QyxZQUFJNkksS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUxTyxNQUFmLENBQVgsQ0FBWjs7QUFDQSxlQUFPdU8sS0FBSyxDQUFDdFksTUFBTixHQUFlLENBQXRCLEVBQXlCO0FBQ3ZCLGVBQUssSUFBSUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dZLEtBQUssQ0FBQ3RZLE1BQU4sR0FBZSxDQUFuQyxFQUFzQ0YsQ0FBQyxFQUF2QyxFQUEyQztBQUN6Q3dZLFlBQUFBLEtBQUssQ0FBQ3hZLENBQUQsQ0FBTCxHQUFXO0FBQ1RRLGNBQUFBLENBQUMsRUFBRWdZLEtBQUssQ0FBQ3hZLENBQUQsQ0FBTCxDQUFTUSxDQUFULEdBQWEsQ0FBQ2dZLEtBQUssQ0FBQ3hZLENBQUMsR0FBRyxDQUFMLENBQUwsQ0FBYVEsQ0FBYixHQUFpQmdZLEtBQUssQ0FBQ3hZLENBQUQsQ0FBTCxDQUFTUSxDQUEzQixJQUFnQ2lDLENBRHZDO0FBRVQxQyxjQUFBQSxDQUFDLEVBQUV5WSxLQUFLLENBQUN4WSxDQUFELENBQUwsQ0FBU0QsQ0FBVCxHQUFhLENBQUN5WSxLQUFLLENBQUN4WSxDQUFDLEdBQUcsQ0FBTCxDQUFMLENBQWFELENBQWIsR0FBaUJ5WSxLQUFLLENBQUN4WSxDQUFELENBQUwsQ0FBU0QsQ0FBM0IsSUFBZ0MwQztBQUZ2QyxhQUFYOztBQUlBLGdCQUFJLE9BQU8rVixLQUFLLENBQUN4WSxDQUFELENBQUwsQ0FBU1MsQ0FBaEIsS0FBc0IsV0FBMUIsRUFBdUM7QUFDckMrWCxjQUFBQSxLQUFLLENBQUN4WSxDQUFELENBQUwsR0FBV3dZLEtBQUssQ0FBQ3hZLENBQUQsQ0FBTCxDQUFTUyxDQUFULEdBQWEsQ0FBQytYLEtBQUssQ0FBQ3hZLENBQUMsR0FBRyxDQUFMLENBQUwsQ0FBYVMsQ0FBYixHQUFpQitYLEtBQUssQ0FBQ3hZLENBQUQsQ0FBTCxDQUFTUyxDQUEzQixJQUFnQ2dDLENBQXhEO0FBQ0Q7QUFDRjs7QUFDRCtWLFVBQUFBLEtBQUssQ0FBQ0ksTUFBTixDQUFhSixLQUFLLENBQUN0WSxNQUFOLEdBQWUsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDRDs7QUFDRCxlQUFPc1ksS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNELE9BNUZTO0FBOEZWbEosTUFBQUEsaUJBQWlCLEVBQUUsU0FBU0EsaUJBQVQsQ0FBMkI3TSxDQUEzQixFQUE4QndILE1BQTlCLEVBQXNDc0QsTUFBdEMsRUFBOEN2RCxHQUE5QyxFQUFtRDtBQUNwRSxZQUFJMEYsRUFBRSxHQUFHLElBQUlqTixDQUFiO0FBQUEsWUFDSTZELENBQUMsR0FBR2lILE1BRFI7QUFBQSxZQUVJN0UsQ0FBQyxHQUFHdUIsTUFGUjtBQUFBLFlBR0k5RixDQUhKO0FBSUEsWUFBSXdQLEVBQUUsR0FBR3JOLENBQUMsQ0FBQyxDQUFELENBQVY7QUFBQSxZQUNJc04sRUFBRSxHQUFHdE4sQ0FBQyxDQUFDLENBQUQsQ0FEVjtBQUFBLFlBRUl1UyxFQUFFLEdBQUd2UyxDQUFDLENBQUMsQ0FBRCxDQUZWO0FBQUEsWUFHSXdTLEVBQUUsR0FBR3hTLENBQUMsQ0FBQyxDQUFELENBSFYsQ0FMb0U7O0FBV3BFcU4sUUFBQUEsRUFBRSxJQUFJakUsRUFBTjtBQUNBa0UsUUFBQUEsRUFBRSxJQUFJblIsQ0FBTjs7QUFFQSxZQUFJaUcsQ0FBQyxDQUFDeEksTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCaUUsVUFBQUEsQ0FBQyxHQUFHd1AsRUFBRSxHQUFHQyxFQUFUO0FBQ0EsaUJBQU87QUFDTHBULFlBQUFBLENBQUMsRUFBRSxDQUFDbVQsRUFBRSxHQUFHakwsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FBVixHQUFjb1QsRUFBRSxHQUFHbEwsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FBekIsSUFBOEIyRCxDQUQ1QjtBQUVMcEUsWUFBQUEsQ0FBQyxFQUFFLENBQUM0VCxFQUFFLEdBQUdqTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUFWLEdBQWM2VCxFQUFFLEdBQUdsTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUF6QixJQUE4Qm9FLENBRjVCO0FBR0wxRCxZQUFBQSxDQUFDLEVBQUUsQ0FBQ3VKLEdBQUQsR0FBTyxLQUFQLEdBQWUsQ0FBQzJKLEVBQUUsR0FBR2pMLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQVYsR0FBY21ULEVBQUUsR0FBR2xMLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQXpCLElBQThCMEQ7QUFIM0MsV0FBUDtBQUtELFNBckJtRTs7O0FBd0JwRXdQLFFBQUFBLEVBQUUsSUFBSWpFLEVBQU47QUFDQWtFLFFBQUFBLEVBQUUsSUFBSSxJQUFJbEUsRUFBVjtBQUNBbUosUUFBQUEsRUFBRSxJQUFJcFcsQ0FBQyxHQUFHQSxDQUFWOztBQUVBLFlBQUlpRyxDQUFDLENBQUN4SSxNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEJpRSxVQUFBQSxDQUFDLEdBQUd3UCxFQUFFLEdBQUdDLEVBQUwsR0FBVWlGLEVBQWQ7QUFDQSxpQkFBTztBQUNMclksWUFBQUEsQ0FBQyxFQUFFLENBQUNtVCxFQUFFLEdBQUdqTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFWLEdBQWNvVCxFQUFFLEdBQUdsTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUF4QixHQUE0QnFZLEVBQUUsR0FBR25RLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2xJLENBQXZDLElBQTRDMkQsQ0FEMUM7QUFFTHBFLFlBQUFBLENBQUMsRUFBRSxDQUFDNFQsRUFBRSxHQUFHakwsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FBVixHQUFjNlQsRUFBRSxHQUFHbEwsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FBeEIsR0FBNEI4WSxFQUFFLEdBQUduUSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUF2QyxJQUE0Q29FLENBRjFDO0FBR0wxRCxZQUFBQSxDQUFDLEVBQUUsQ0FBQ3VKLEdBQUQsR0FBTyxLQUFQLEdBQWUsQ0FBQzJKLEVBQUUsR0FBR2pMLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQVYsR0FBY21ULEVBQUUsR0FBR2xMLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQXhCLEdBQTRCb1ksRUFBRSxHQUFHblEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLakksQ0FBdkMsSUFBNEMwRDtBQUh6RCxXQUFQO0FBS0QsU0FuQ21FOzs7QUFzQ3BFd1AsUUFBQUEsRUFBRSxJQUFJakUsRUFBTjtBQUNBa0UsUUFBQUEsRUFBRSxJQUFJLE1BQU1sRSxFQUFaO0FBQ0FtSixRQUFBQSxFQUFFLElBQUksSUFBSW5KLEVBQVY7QUFDQW9KLFFBQUFBLEVBQUUsSUFBSXJXLENBQUMsR0FBR0EsQ0FBSixHQUFRQSxDQUFkOztBQUVBLFlBQUlpRyxDQUFDLENBQUN4SSxNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEJpRSxVQUFBQSxDQUFDLEdBQUd3UCxFQUFFLEdBQUdDLEVBQUwsR0FBVWlGLEVBQVYsR0FBZUMsRUFBbkI7QUFDQSxpQkFBTztBQUNMdFksWUFBQUEsQ0FBQyxFQUFFLENBQUNtVCxFQUFFLEdBQUdqTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFWLEdBQWNvVCxFQUFFLEdBQUdsTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUF4QixHQUE0QnFZLEVBQUUsR0FBR25RLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2xJLENBQXRDLEdBQTBDc1ksRUFBRSxHQUFHcFEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FBckQsSUFBMEQyRCxDQUR4RDtBQUVMcEUsWUFBQUEsQ0FBQyxFQUFFLENBQUM0VCxFQUFFLEdBQUdqTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUFWLEdBQWM2VCxFQUFFLEdBQUdsTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUF4QixHQUE0QjhZLEVBQUUsR0FBR25RLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzNJLENBQXRDLEdBQTBDK1ksRUFBRSxHQUFHcFEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FBckQsSUFBMERvRSxDQUZ4RDtBQUdMMUQsWUFBQUEsQ0FBQyxFQUFFLENBQUN1SixHQUFELEdBQU8sS0FBUCxHQUFlLENBQUMySixFQUFFLEdBQUdqTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUFWLEdBQWNtVCxFQUFFLEdBQUdsTCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtqSSxDQUF4QixHQUE0Qm9ZLEVBQUUsR0FBR25RLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS2pJLENBQXRDLEdBQTBDcVksRUFBRSxHQUFHcFEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLakksQ0FBckQsSUFBMEQwRDtBQUh2RSxXQUFQO0FBS0Q7QUFDRixPQWpKUztBQW1KVjZKLE1BQUFBLE1BQU0sRUFBRSxTQUFTQSxNQUFULENBQWdCL0QsTUFBaEIsRUFBd0JELEdBQXhCLEVBQTZCO0FBQ25DLFlBQUkrRCxPQUFPLEdBQUcsRUFBZDs7QUFDQSxhQUFLLElBQUlyRixDQUFDLEdBQUd1QixNQUFSLEVBQWdCOUYsQ0FBQyxHQUFHdUUsQ0FBQyxDQUFDeEksTUFBdEIsRUFBOEJnRSxDQUFDLEdBQUdDLENBQUMsR0FBRyxDQUEzQyxFQUE4Q0EsQ0FBQyxHQUFHLENBQWxELEVBQXFEQSxDQUFDLElBQUlELENBQUMsRUFBM0QsRUFBK0Q7QUFDN0QsY0FBSTZVLElBQUksR0FBRyxFQUFYOztBQUNBLGVBQUssSUFBSXpWLENBQUMsR0FBRyxDQUFSLEVBQVcwVixHQUFoQixFQUFxQjFWLENBQUMsR0FBR1ksQ0FBekIsRUFBNEJaLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IwVixZQUFBQSxHQUFHLEdBQUc7QUFDSnhZLGNBQUFBLENBQUMsRUFBRTBELENBQUMsSUFBSXdFLENBQUMsQ0FBQ3BGLENBQUMsR0FBRyxDQUFMLENBQUQsQ0FBUzlDLENBQVQsR0FBYWtJLENBQUMsQ0FBQ3BGLENBQUQsQ0FBRCxDQUFLOUMsQ0FBdEIsQ0FEQTtBQUVKVCxjQUFBQSxDQUFDLEVBQUVtRSxDQUFDLElBQUl3RSxDQUFDLENBQUNwRixDQUFDLEdBQUcsQ0FBTCxDQUFELENBQVN2RCxDQUFULEdBQWEySSxDQUFDLENBQUNwRixDQUFELENBQUQsQ0FBS3ZELENBQXRCO0FBRkEsYUFBTjs7QUFJQSxnQkFBSWlLLEdBQUosRUFBUztBQUNQZ1AsY0FBQUEsR0FBRyxDQUFDdlksQ0FBSixHQUFReUQsQ0FBQyxJQUFJd0UsQ0FBQyxDQUFDcEYsQ0FBQyxHQUFHLENBQUwsQ0FBRCxDQUFTN0MsQ0FBVCxHQUFhaUksQ0FBQyxDQUFDcEYsQ0FBRCxDQUFELENBQUs3QyxDQUF0QixDQUFUO0FBQ0Q7O0FBQ0RzWSxZQUFBQSxJQUFJLENBQUNsUCxJQUFMLENBQVVtUCxHQUFWO0FBQ0Q7O0FBQ0RqTCxVQUFBQSxPQUFPLENBQUNsRSxJQUFSLENBQWFrUCxJQUFiO0FBQ0FyUSxVQUFBQSxDQUFDLEdBQUdxUSxJQUFKO0FBQ0Q7O0FBQ0QsZUFBT2hMLE9BQVA7QUFDRCxPQXJLUztBQXVLVjBILE1BQUFBLE9BQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCdkUsQ0FBakIsRUFBb0IvTixDQUFwQixFQUF1QjhWLENBQXZCLEVBQTBCO0FBQ2pDLGVBQU85VixDQUFDLElBQUkrTixDQUFMLElBQVVBLENBQUMsSUFBSStILENBQWYsSUFBb0IzUCxLQUFLLENBQUM0UCxhQUFOLENBQW9CaEksQ0FBcEIsRUFBdUIvTixDQUF2QixDQUFwQixJQUFpRG1HLEtBQUssQ0FBQzRQLGFBQU4sQ0FBb0JoSSxDQUFwQixFQUF1QitILENBQXZCLENBQXhEO0FBQ0QsT0F6S1M7QUEyS1ZDLE1BQUFBLGFBQWEsRUFBRSxTQUFTQSxhQUFULENBQXVCM1ksQ0FBdkIsRUFBMEJLLENBQTFCLEVBQTZCdVksU0FBN0IsRUFBd0M7QUFDckQsZUFBT2pRLEdBQUcsQ0FBQzNJLENBQUMsR0FBR0ssQ0FBTCxDQUFILEtBQWV1WSxTQUFTLElBQUl0QixPQUE1QixDQUFQO0FBQ0QsT0E3S1M7QUErS1YzWCxNQUFBQSxNQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFnQm9ZLFlBQWhCLEVBQThCO0FBQ3BDLFlBQUk3WCxDQUFDLEdBQUcsR0FBUjtBQUFBLFlBQ0kyWSxHQUFHLEdBQUcsQ0FEVjtBQUFBLFlBRUlyWSxHQUFHLEdBQUd1SSxLQUFLLENBQUM2TyxPQUFOLENBQWNqWSxNQUZ4QjtBQUFBLFlBR0lGLENBSEo7QUFBQSxZQUlJeUMsQ0FKSjs7QUFLQSxhQUFLekMsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZSxHQUFoQixFQUFxQmYsQ0FBQyxFQUF0QixFQUEwQjtBQUN4QnlDLFVBQUFBLENBQUMsR0FBR2hDLENBQUMsR0FBRzZJLEtBQUssQ0FBQzZPLE9BQU4sQ0FBY25ZLENBQWQsQ0FBSixHQUF1QlMsQ0FBM0I7QUFDQTJZLFVBQUFBLEdBQUcsSUFBSTlQLEtBQUssQ0FBQzhPLE9BQU4sQ0FBY3BZLENBQWQsSUFBbUJzSixLQUFLLENBQUMrTyxLQUFOLENBQVk1VixDQUFaLEVBQWU2VixZQUFmLENBQTFCO0FBQ0Q7O0FBQ0QsZUFBTzdYLENBQUMsR0FBRzJZLEdBQVg7QUFDRCxPQTFMUztBQTRMVnZMLE1BQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULENBQWFxRCxDQUFiLEVBQWdCbUksRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0M7QUFDbkMsWUFBSXpOLEVBQUUsR0FBR3VOLEVBQUUsR0FBR0QsRUFBZDtBQUFBLFlBQ0lwTixFQUFFLEdBQUd1TixFQUFFLEdBQUdELEVBRGQ7QUFBQSxZQUVJM00sRUFBRSxHQUFHc0UsQ0FBQyxHQUFHbUksRUFGYjtBQUFBLFlBR0kvUyxDQUFDLEdBQUdzRyxFQUFFLEdBQUdiLEVBSGI7QUFJQSxlQUFPd04sRUFBRSxHQUFHdE4sRUFBRSxHQUFHM0YsQ0FBakI7QUFDRCxPQWxNUztBQW9NVmtLLE1BQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULENBQWNsSyxDQUFkLEVBQWlCcUcsRUFBakIsRUFBcUJDLEVBQXJCLEVBQXlCO0FBQzdCLFlBQUkrQyxHQUFHLEdBQUc7QUFDUm5QLFVBQUFBLENBQUMsRUFBRW1NLEVBQUUsQ0FBQ25NLENBQUgsR0FBTzhGLENBQUMsSUFBSXNHLEVBQUUsQ0FBQ3BNLENBQUgsR0FBT21NLEVBQUUsQ0FBQ25NLENBQWQsQ0FESDtBQUVSVCxVQUFBQSxDQUFDLEVBQUU0TSxFQUFFLENBQUM1TSxDQUFILEdBQU91RyxDQUFDLElBQUlzRyxFQUFFLENBQUM3TSxDQUFILEdBQU80TSxFQUFFLENBQUM1TSxDQUFkO0FBRkgsU0FBVjs7QUFJQSxZQUFJLENBQUMsQ0FBQzRNLEVBQUUsQ0FBQ2xNLENBQUwsSUFBVSxDQUFDLENBQUNtTSxFQUFFLENBQUNuTSxDQUFuQixFQUFzQjtBQUNwQmtQLFVBQUFBLEdBQUcsQ0FBQ2xQLENBQUosR0FBUWtNLEVBQUUsQ0FBQ2xNLENBQUgsR0FBTzZGLENBQUMsSUFBSXNHLEVBQUUsQ0FBQ25NLENBQUgsR0FBT2tNLEVBQUUsQ0FBQ2xNLENBQWQsQ0FBaEI7QUFDRDs7QUFDRCxlQUFPa1AsR0FBUDtBQUNELE9BN01TO0FBK01WOEosTUFBQUEsYUFBYSxFQUFFLFNBQVNBLGFBQVQsQ0FBdUIvUSxDQUF2QixFQUEwQjtBQUN2QyxZQUFJckcsQ0FBQyxHQUFHcUcsQ0FBQyxDQUFDbEksQ0FBRixHQUFNLEdBQU4sR0FBWWtJLENBQUMsQ0FBQzNJLENBQXRCOztBQUNBLFlBQUksT0FBTzJJLENBQUMsQ0FBQ2pJLENBQVQsS0FBZSxXQUFuQixFQUFnQztBQUM5QjRCLFVBQUFBLENBQUMsSUFBSSxNQUFNcUcsQ0FBQyxDQUFDakksQ0FBYjtBQUNEOztBQUNELGVBQU80QixDQUFQO0FBQ0QsT0FyTlM7QUF1TlY0SyxNQUFBQSxjQUFjLEVBQUUsU0FBU0EsY0FBVCxDQUF3QmhELE1BQXhCLEVBQWdDO0FBQzlDLGVBQU8sTUFBTUEsTUFBTSxDQUFDNEQsR0FBUCxDQUFXdkUsS0FBSyxDQUFDbVEsYUFBakIsRUFBZ0NwTSxJQUFoQyxDQUFxQyxJQUFyQyxDQUFOLEdBQW1ELEdBQTFEO0FBQ0QsT0F6TlM7QUEyTlZ5RixNQUFBQSxJQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFjL0osR0FBZCxFQUFtQjtBQUN2QixlQUFPMFAsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlNVAsR0FBZixDQUFYLENBQVA7QUFDRCxPQTdOUztBQStOVm1GLE1BQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWUwRSxDQUFmLEVBQWtCakcsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCO0FBQy9CLFlBQUk4TSxHQUFHLEdBQUcvTSxFQUFFLENBQUNuTSxDQUFILEdBQU9vUyxDQUFDLENBQUNwUyxDQUFuQjtBQUFBLFlBQ0ltWixHQUFHLEdBQUdoTixFQUFFLENBQUM1TSxDQUFILEdBQU82UyxDQUFDLENBQUM3UyxDQURuQjtBQUFBLFlBRUk2WixHQUFHLEdBQUdoTixFQUFFLENBQUNwTSxDQUFILEdBQU9vUyxDQUFDLENBQUNwUyxDQUZuQjtBQUFBLFlBR0lxWixHQUFHLEdBQUdqTixFQUFFLENBQUM3TSxDQUFILEdBQU82UyxDQUFDLENBQUM3UyxDQUhuQjtBQUFBLFlBSUlrQixLQUFLLEdBQUd5WSxHQUFHLEdBQUdHLEdBQU4sR0FBWUYsR0FBRyxHQUFHQyxHQUo5QjtBQUFBLFlBS0k1WSxHQUFHLEdBQUcwWSxHQUFHLEdBQUdFLEdBQU4sR0FBWUQsR0FBRyxHQUFHRSxHQUw1QjtBQU1BLGVBQU85VCxLQUFLLENBQUM5RSxLQUFELEVBQVFELEdBQVIsQ0FBWjtBQUNELE9Bdk9TO0FBeU9WO0FBQ0E4WSxNQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlNUksQ0FBZixFQUFrQi9NLENBQWxCLEVBQXFCO0FBQzFCLFlBQUk5QixDQUFDLEdBQUcsS0FBSzZPLENBQWI7QUFDQSxZQUFJdE0sR0FBRyxHQUFHdkMsQ0FBQyxDQUFDbVAsT0FBRixDQUFVLEdBQVYsQ0FBVjtBQUNBLGVBQU91SSxVQUFVLENBQUMxWCxDQUFDLENBQUMyWCxTQUFGLENBQVksQ0FBWixFQUFlcFYsR0FBRyxHQUFHLENBQU4sR0FBVVQsQ0FBekIsQ0FBRCxDQUFqQjtBQUNELE9BOU9TO0FBZ1BWNkgsTUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsQ0FBY3pHLEVBQWQsRUFBa0JrRixFQUFsQixFQUFzQjtBQUMxQixZQUFJd1AsRUFBRSxHQUFHMVUsRUFBRSxDQUFDL0UsQ0FBSCxHQUFPaUssRUFBRSxDQUFDakssQ0FBbkI7QUFBQSxZQUNJMFosRUFBRSxHQUFHM1UsRUFBRSxDQUFDeEYsQ0FBSCxHQUFPMEssRUFBRSxDQUFDMUssQ0FEbkI7QUFFQSxlQUFPSSxJQUFJLENBQUM4WixFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUFoQixDQUFYO0FBQ0QsT0FwUFM7QUFzUFZuTCxNQUFBQSxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQkQsR0FBakIsRUFBc0JsRixLQUF0QixFQUE2QjtBQUNwQyxZQUFJb0YsS0FBSyxHQUFHeUksR0FBRyxDQUFDLENBQUQsRUFBSSxFQUFKLENBQWY7QUFBQSxZQUNJeEksSUFESjtBQUFBLFlBRUk5SyxDQUZKO0FBR0EySyxRQUFBQSxHQUFHLENBQUN0TixPQUFKLENBQVksVUFBVWtILENBQVYsRUFBYXdCLEdBQWIsRUFBa0I7QUFDNUIvRixVQUFBQSxDQUFDLEdBQUdtRixLQUFLLENBQUMwQyxJQUFOLENBQVdwQyxLQUFYLEVBQWtCbEIsQ0FBbEIsQ0FBSjs7QUFDQSxjQUFJdkUsQ0FBQyxHQUFHNkssS0FBUixFQUFlO0FBQ2JBLFlBQUFBLEtBQUssR0FBRzdLLENBQVI7QUFDQThLLFlBQUFBLElBQUksR0FBRy9FLEdBQVA7QUFDRDtBQUNGLFNBTkQ7QUFPQSxlQUFPO0FBQUU4RSxVQUFBQSxLQUFLLEVBQUVBLEtBQVQ7QUFBZ0JDLFVBQUFBLElBQUksRUFBRUE7QUFBdEIsU0FBUDtBQUNELE9BbFFTO0FBb1FWeEQsTUFBQUEsUUFBUSxFQUFFLFNBQVNBLFFBQVQsQ0FBa0JoSixDQUFsQixFQUFxQndJLENBQXJCLEVBQXdCO0FBQ2hDO0FBQ0EsWUFBSUEsQ0FBQyxLQUFLLENBQU4sSUFBV0EsQ0FBQyxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxZQUFJLE9BQU94SSxDQUFQLEtBQWEsV0FBakIsRUFBOEI7QUFDNUJBLFVBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0QsU0FGRCxNQUVPLElBQUlBLENBQUMsS0FBSyxDQUFOLElBQVdBLENBQUMsS0FBSyxDQUFyQixFQUF3QjtBQUM3QixpQkFBT0EsQ0FBUDtBQUNEOztBQUNELFlBQUkwWCxNQUFNLEdBQUcxQyxHQUFHLENBQUNoVixDQUFELEVBQUl3SSxDQUFKLENBQUgsR0FBWXdNLEdBQUcsQ0FBQyxJQUFJaFYsQ0FBTCxFQUFRd0ksQ0FBUixDQUE1QjtBQUFBLFlBQ0ltUCxHQUFHLEdBQUdELE1BQU0sR0FBRyxDQURuQjtBQUVBLGVBQU9qUixHQUFHLENBQUNrUixHQUFHLEdBQUdELE1BQVAsQ0FBVjtBQUNELE9BalJTO0FBbVJWN08sTUFBQUEsZUFBZSxFQUFFLFNBQVNBLGVBQVQsQ0FBeUI3SSxDQUF6QixFQUE0QndJLENBQTVCLEVBQStCO0FBQzlDO0FBQ0EsWUFBSUEsQ0FBQyxLQUFLLENBQU4sSUFBV0EsQ0FBQyxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxZQUFJLE9BQU94SSxDQUFQLEtBQWEsV0FBakIsRUFBOEI7QUFDNUJBLFVBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0QsU0FGRCxNQUVPLElBQUlBLENBQUMsS0FBSyxDQUFOLElBQVdBLENBQUMsS0FBSyxDQUFyQixFQUF3QjtBQUM3QixpQkFBT0EsQ0FBUDtBQUNEOztBQUNELFlBQUkyWCxHQUFHLEdBQUczQyxHQUFHLENBQUMsSUFBSWhWLENBQUwsRUFBUXdJLENBQVIsQ0FBYjtBQUFBLFlBQ0lrUCxNQUFNLEdBQUcxQyxHQUFHLENBQUNoVixDQUFELEVBQUl3SSxDQUFKLENBQUgsR0FBWW1QLEdBRHpCO0FBRUEsZUFBT0EsR0FBRyxHQUFHRCxNQUFiO0FBQ0QsT0FoU1M7QUFrU1ZFLE1BQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULENBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEJDLEVBQTlCLEVBQWtDQyxFQUFsQyxFQUFzQ0MsRUFBdEMsRUFBMENDLEVBQTFDLEVBQThDO0FBQ2xELFlBQUlDLEVBQUUsR0FBRyxDQUFDUixFQUFFLEdBQUdHLEVBQUwsR0FBVUYsRUFBRSxHQUFHQyxFQUFoQixLQUF1QkUsRUFBRSxHQUFHRSxFQUE1QixJQUFrQyxDQUFDTixFQUFFLEdBQUdFLEVBQU4sS0FBYUUsRUFBRSxHQUFHRyxFQUFMLEdBQVVGLEVBQUUsR0FBR0MsRUFBNUIsQ0FBM0M7QUFBQSxZQUNJRyxFQUFFLEdBQUcsQ0FBQ1QsRUFBRSxHQUFHRyxFQUFMLEdBQVVGLEVBQUUsR0FBR0MsRUFBaEIsS0FBdUJHLEVBQUUsR0FBR0UsRUFBNUIsSUFBa0MsQ0FBQ04sRUFBRSxHQUFHRSxFQUFOLEtBQWFDLEVBQUUsR0FBR0csRUFBTCxHQUFVRixFQUFFLEdBQUdDLEVBQTVCLENBRDNDO0FBQUEsWUFFSXpXLENBQUMsR0FBRyxDQUFDbVcsRUFBRSxHQUFHRSxFQUFOLEtBQWFHLEVBQUUsR0FBR0UsRUFBbEIsSUFBd0IsQ0FBQ04sRUFBRSxHQUFHRSxFQUFOLEtBQWFDLEVBQUUsR0FBR0UsRUFBbEIsQ0FGaEM7O0FBR0EsWUFBSXpXLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDVixpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsZUFBTztBQUFFM0QsVUFBQUEsQ0FBQyxFQUFFc2EsRUFBRSxHQUFHM1csQ0FBVjtBQUFhcEUsVUFBQUEsQ0FBQyxFQUFFZ2IsRUFBRSxHQUFHNVc7QUFBckIsU0FBUDtBQUNELE9BMVNTO0FBNFNWME8sTUFBQUEsSUFBSSxFQUFFLFNBQVNBLElBQVQsQ0FBY3ROLEVBQWQsRUFBa0JrRixFQUFsQixFQUFzQm1CLEVBQXRCLEVBQTBCb1AsRUFBMUIsRUFBOEI7QUFDbEMsWUFBSVYsRUFBRSxHQUFHL1UsRUFBRSxDQUFDL0UsQ0FBWjtBQUFBLFlBQ0krWixFQUFFLEdBQUdoVixFQUFFLENBQUN4RixDQURaO0FBQUEsWUFFSXlhLEVBQUUsR0FBRy9QLEVBQUUsQ0FBQ2pLLENBRlo7QUFBQSxZQUdJaWEsRUFBRSxHQUFHaFEsRUFBRSxDQUFDMUssQ0FIWjtBQUFBLFlBSUkyYSxFQUFFLEdBQUc5TyxFQUFFLENBQUNwTCxDQUpaO0FBQUEsWUFLSW1hLEVBQUUsR0FBRy9PLEVBQUUsQ0FBQzdMLENBTFo7QUFBQSxZQU1JNmEsRUFBRSxHQUFHSSxFQUFFLENBQUN4YSxDQU5aO0FBQUEsWUFPSXFhLEVBQUUsR0FBR0csRUFBRSxDQUFDamIsQ0FQWjtBQVFBLGVBQU91SixLQUFLLENBQUMrUSxJQUFOLENBQVdDLEVBQVgsRUFBZUMsRUFBZixFQUFtQkMsRUFBbkIsRUFBdUJDLEVBQXZCLEVBQTJCQyxFQUEzQixFQUErQkMsRUFBL0IsRUFBbUNDLEVBQW5DLEVBQXVDQyxFQUF2QyxDQUFQO0FBQ0QsT0F0VFM7QUF3VFZJLE1BQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULENBQWF0TyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQjtBQUN4QixlQUFPdEQsS0FBSyxDQUFDdUosSUFBTixDQUFXbEcsRUFBWCxFQUFlQSxFQUFFLENBQUN6SSxDQUFsQixFQUFxQjBJLEVBQXJCLEVBQXlCQSxFQUFFLENBQUMxSSxDQUE1QixDQUFQO0FBQ0QsT0ExVFM7QUE0VFZpUSxNQUFBQSxRQUFRLEVBQUUsU0FBU0EsUUFBVCxDQUFrQjVPLEVBQWxCLEVBQXNCa0YsRUFBdEIsRUFBMEI7QUFDbEMsWUFBSXpDLE1BQU0sR0FBR0csbUJBQW1CLENBQUMsQ0FBRCxDQUFoQzs7QUFDQSxZQUFJbVMsRUFBRSxHQUFHL1UsRUFBRSxDQUFDL0UsQ0FBWjtBQUFBLFlBQ0krWixFQUFFLEdBQUdoVixFQUFFLENBQUN4RixDQURaO0FBQUEsWUFFSXlhLEVBQUUsR0FBRy9QLEVBQUUsQ0FBQ2pLLENBRlo7QUFBQSxZQUdJaWEsRUFBRSxHQUFHaFEsRUFBRSxDQUFDMUssQ0FIWjtBQUFBLFlBSUlrYSxFQUFFLEdBQUcsQ0FBQ08sRUFBRSxHQUFHRixFQUFOLElBQVksQ0FKckI7QUFBQSxZQUtJSixFQUFFLEdBQUcsQ0FBQ08sRUFBRSxHQUFHRixFQUFOLElBQVksQ0FMckI7QUFNQSxlQUFPLElBQUl2UyxNQUFKLENBQVdzUyxFQUFYLEVBQWVDLEVBQWYsRUFBbUJELEVBQUUsR0FBR0wsRUFBeEIsRUFBNEJNLEVBQUUsR0FBR0wsRUFBakMsRUFBcUNJLEVBQUUsR0FBRyxJQUFJTCxFQUE5QyxFQUFrRE0sRUFBRSxHQUFHLElBQUlMLEVBQTNELEVBQStETSxFQUEvRCxFQUFtRUMsRUFBbkUsQ0FBUDtBQUNELE9BclVTO0FBdVVWUyxNQUFBQSxRQUFRLEVBQUUsU0FBU0EsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDcEMsWUFBSS9GLEVBQUUsR0FBRzBDLElBQVQ7QUFBQSxZQUNJekMsRUFBRSxHQUFHeUMsSUFEVDtBQUFBLFlBRUl4QyxFQUFFLEdBQUcyQyxJQUZUO0FBQUEsWUFHSTFDLEVBQUUsR0FBRzBDLElBSFQ7QUFJQWtELFFBQUFBLFFBQVEsQ0FBQzNaLE9BQVQsQ0FBaUIsVUFBVWEsQ0FBVixFQUFhO0FBQzVCLGNBQUlxUCxJQUFJLEdBQUdyUCxDQUFDLENBQUNxUCxJQUFGLEVBQVg7QUFDQSxjQUFJMEQsRUFBRSxHQUFHMUQsSUFBSSxDQUFDbFIsQ0FBTCxDQUFPd0IsR0FBaEIsRUFBcUJvVCxFQUFFLEdBQUcxRCxJQUFJLENBQUNsUixDQUFMLENBQU93QixHQUFaO0FBQ3JCLGNBQUlxVCxFQUFFLEdBQUczRCxJQUFJLENBQUMzUixDQUFMLENBQU9pQyxHQUFoQixFQUFxQnFULEVBQUUsR0FBRzNELElBQUksQ0FBQzNSLENBQUwsQ0FBT2lDLEdBQVo7QUFDckIsY0FBSXNULEVBQUUsR0FBRzVELElBQUksQ0FBQ2xSLENBQUwsQ0FBTzJJLEdBQWhCLEVBQXFCbU0sRUFBRSxHQUFHNUQsSUFBSSxDQUFDbFIsQ0FBTCxDQUFPMkksR0FBWjtBQUNyQixjQUFJb00sRUFBRSxHQUFHN0QsSUFBSSxDQUFDM1IsQ0FBTCxDQUFPb0osR0FBaEIsRUFBcUJvTSxFQUFFLEdBQUc3RCxJQUFJLENBQUMzUixDQUFMLENBQU9vSixHQUFaO0FBQ3RCLFNBTkQ7QUFPQSxlQUFPO0FBQ0wzSSxVQUFBQSxDQUFDLEVBQUU7QUFBRXdCLFlBQUFBLEdBQUcsRUFBRW9ULEVBQVA7QUFBV2dHLFlBQUFBLEdBQUcsRUFBRSxDQUFDaEcsRUFBRSxHQUFHRSxFQUFOLElBQVksQ0FBNUI7QUFBK0JuTSxZQUFBQSxHQUFHLEVBQUVtTSxFQUFwQztBQUF3QytGLFlBQUFBLElBQUksRUFBRS9GLEVBQUUsR0FBR0Y7QUFBbkQsV0FERTtBQUVMclYsVUFBQUEsQ0FBQyxFQUFFO0FBQUVpQyxZQUFBQSxHQUFHLEVBQUVxVCxFQUFQO0FBQVcrRixZQUFBQSxHQUFHLEVBQUUsQ0FBQy9GLEVBQUUsR0FBR0UsRUFBTixJQUFZLENBQTVCO0FBQStCcE0sWUFBQUEsR0FBRyxFQUFFb00sRUFBcEM7QUFBd0M4RixZQUFBQSxJQUFJLEVBQUU5RixFQUFFLEdBQUdGO0FBQW5EO0FBRkUsU0FBUDtBQUlELE9BdlZTO0FBeVZWaUcsTUFBQUEsa0JBQWtCLEVBQUUsU0FBU0Esa0JBQVQsQ0FBNEJDLEVBQTVCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsRUFBdkMsRUFBMkNDLEtBQTNDLEVBQWtEbkgsMEJBQWxELEVBQThFO0FBQ2hHLFlBQUksQ0FBQ2pMLEtBQUssQ0FBQ3lJLFdBQU4sQ0FBa0J5SixLQUFsQixFQUF5QkUsS0FBekIsQ0FBTCxFQUFzQyxPQUFPLEVBQVA7QUFDdEMsWUFBSTVGLGFBQWEsR0FBRyxFQUFwQjtBQUNBLFlBQUkxRCxFQUFFLEdBQUcsQ0FBQ21KLEVBQUUsQ0FBQzNHLFFBQUosRUFBYzJHLEVBQUUsQ0FBQ0ksT0FBakIsRUFBMEJKLEVBQUUsQ0FBQ0ssSUFBN0IsRUFBbUNMLEVBQUUsQ0FBQ3pHLE1BQXRDLENBQVQ7QUFDQSxZQUFJekMsRUFBRSxHQUFHLENBQUNvSixFQUFFLENBQUM3RyxRQUFKLEVBQWM2RyxFQUFFLENBQUNFLE9BQWpCLEVBQTBCRixFQUFFLENBQUNHLElBQTdCLEVBQW1DSCxFQUFFLENBQUMzRyxNQUF0QyxDQUFUO0FBQ0ExQyxRQUFBQSxFQUFFLENBQUM1USxPQUFILENBQVcsVUFBVXFhLEVBQVYsRUFBYztBQUN2QixjQUFJQSxFQUFFLENBQUNoSCxPQUFQLEVBQWdCO0FBQ2hCeEMsVUFBQUEsRUFBRSxDQUFDN1EsT0FBSCxDQUFXLFVBQVVzYSxFQUFWLEVBQWM7QUFDdkIsZ0JBQUlBLEVBQUUsQ0FBQ2pILE9BQVAsRUFBZ0I7QUFDaEIsZ0JBQUlrSCxHQUFHLEdBQUdGLEVBQUUsQ0FBQzlHLFVBQUgsQ0FBYytHLEVBQWQsRUFBa0J2SCwwQkFBbEIsQ0FBVjs7QUFDQSxnQkFBSXdILEdBQUcsQ0FBQzdiLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNsQjZiLGNBQUFBLEdBQUcsQ0FBQ3BHLEVBQUosR0FBU2tHLEVBQVQ7QUFDQUUsY0FBQUEsR0FBRyxDQUFDbkcsRUFBSixHQUFTa0csRUFBVDtBQUNBQyxjQUFBQSxHQUFHLENBQUNSLEVBQUosR0FBU0EsRUFBVDtBQUNBUSxjQUFBQSxHQUFHLENBQUNOLEVBQUosR0FBU0EsRUFBVDtBQUNBM0YsY0FBQUEsYUFBYSxDQUFDak0sSUFBZCxDQUFtQmtTLEdBQW5CO0FBQ0Q7QUFDRixXQVZEO0FBV0QsU0FiRDtBQWNBLGVBQU9qRyxhQUFQO0FBQ0QsT0E3V1M7QUErV1ZuQixNQUFBQSxTQUFTLEVBQUUsU0FBU0EsU0FBVCxDQUFtQmdILE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQ3JILDBCQUFsQyxFQUE4RDtBQUN2RSxZQUFJeUgsR0FBRyxHQUFHSixJQUFJLENBQUMzUixNQUFMLENBQVkvSixNQUF0QjtBQUNBLFlBQUkrYixHQUFHLEdBQUdOLE9BQU8sQ0FBQzFSLE1BQVIsQ0FBZS9KLE1BQXpCO0FBQ0EsWUFBSXFYLEtBQUssR0FBR2pPLEtBQUssQ0FBQzZLLFFBQU4sQ0FBZXlILElBQUksQ0FBQzNSLE1BQUwsQ0FBWStSLEdBQUcsR0FBRyxDQUFsQixDQUFmLEVBQXFDTCxPQUFPLENBQUMxUixNQUFSLENBQWUsQ0FBZixDQUFyQyxDQUFaO0FBQ0EsWUFBSXVOLEdBQUcsR0FBR2xPLEtBQUssQ0FBQzZLLFFBQU4sQ0FBZXdILE9BQU8sQ0FBQzFSLE1BQVIsQ0FBZWdTLEdBQUcsR0FBRyxDQUFyQixDQUFmLEVBQXdDTCxJQUFJLENBQUMzUixNQUFMLENBQVksQ0FBWixDQUF4QyxDQUFWO0FBQ0EsWUFBSXlLLEtBQUssR0FBRztBQUNWRSxVQUFBQSxRQUFRLEVBQUUyQyxLQURBO0FBRVZvRSxVQUFBQSxPQUFPLEVBQUVBLE9BRkM7QUFHVkMsVUFBQUEsSUFBSSxFQUFFQSxJQUhJO0FBSVY5RyxVQUFBQSxNQUFNLEVBQUUwQyxHQUpFO0FBS1Y5RixVQUFBQSxJQUFJLEVBQUVwSSxLQUFLLENBQUM0UixRQUFOLENBQWUsQ0FBQzNELEtBQUQsRUFBUW9FLE9BQVIsRUFBaUJDLElBQWpCLEVBQXVCcEUsR0FBdkIsQ0FBZjtBQUxJLFNBQVo7QUFPQSxZQUFJaEMsSUFBSSxHQUFHbE0sS0FBWDs7QUFDQW9MLFFBQUFBLEtBQUssQ0FBQ29CLGFBQU4sR0FBc0IsVUFBVTJGLEVBQVYsRUFBYztBQUNsQyxpQkFBT2pHLElBQUksQ0FBQzhGLGtCQUFMLENBQXdCNUcsS0FBeEIsRUFBK0JBLEtBQUssQ0FBQ2hELElBQXJDLEVBQTJDK0osRUFBM0MsRUFBK0NBLEVBQUUsQ0FBQy9KLElBQWxELEVBQXdENkMsMEJBQXhELENBQVA7QUFDRCxTQUZEOztBQUdBLGVBQU9HLEtBQVA7QUFDRCxPQWhZUztBQWtZVi9DLE1BQUFBLFNBQVMsRUFBRSxTQUFTQSxTQUFULENBQW1CcEgsS0FBbkIsRUFBMEJwRyxDQUExQixFQUE2QjRVLElBQTdCLEVBQW1DO0FBQzVDLFlBQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU87QUFBRS9XLFVBQUFBLEdBQUcsRUFBRSxDQUFQO0FBQVVtSCxVQUFBQSxHQUFHLEVBQUU7QUFBZixTQUFQO0FBQ1gsWUFBSW5ILEdBQUcsR0FBRzhWLElBQVY7QUFBQSxZQUNJM08sR0FBRyxHQUFHOE8sSUFEVjtBQUFBLFlBRUl4VixDQUZKO0FBQUEsWUFHSXlCLENBSEo7O0FBSUEsWUFBSTZVLElBQUksQ0FBQ3ZILE9BQUwsQ0FBYSxDQUFiLE1BQW9CLENBQUMsQ0FBekIsRUFBNEI7QUFDMUJ1SCxVQUFBQSxJQUFJLEdBQUcsQ0FBQyxDQUFELEVBQUkzSCxNQUFKLENBQVcySCxJQUFYLENBQVA7QUFDRDs7QUFDRCxZQUFJQSxJQUFJLENBQUN2SCxPQUFMLENBQWEsQ0FBYixNQUFvQixDQUFDLENBQXpCLEVBQTRCO0FBQzFCdUgsVUFBQUEsSUFBSSxDQUFDbFAsSUFBTCxDQUFVLENBQVY7QUFDRDs7QUFDRCxhQUFLLElBQUk3SixDQUFDLEdBQUcsQ0FBUixFQUFXZSxHQUFHLEdBQUdnWSxJQUFJLENBQUM3WSxNQUEzQixFQUFtQ0YsQ0FBQyxHQUFHZSxHQUF2QyxFQUE0Q2YsQ0FBQyxFQUE3QyxFQUFpRDtBQUMvQ3lDLFVBQUFBLENBQUMsR0FBR3NXLElBQUksQ0FBQy9ZLENBQUQsQ0FBUjtBQUNBa0UsVUFBQUEsQ0FBQyxHQUFHcUcsS0FBSyxDQUFDOEUsR0FBTixDQUFVNU0sQ0FBVixDQUFKOztBQUNBLGNBQUl5QixDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPbkMsR0FBWCxFQUFnQjtBQUNkQSxZQUFBQSxHQUFHLEdBQUdrQyxDQUFDLENBQUNDLENBQUQsQ0FBUDtBQUNEOztBQUNELGNBQUlELENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9nRixHQUFYLEVBQWdCO0FBQ2RBLFlBQUFBLEdBQUcsR0FBR2pGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFQO0FBQ0Q7QUFDRjs7QUFDRCxlQUFPO0FBQUVuQyxVQUFBQSxHQUFHLEVBQUVBLEdBQVA7QUFBWW9aLFVBQUFBLEdBQUcsRUFBRSxDQUFDcFosR0FBRyxHQUFHbUgsR0FBUCxJQUFjLENBQS9CO0FBQWtDQSxVQUFBQSxHQUFHLEVBQUVBLEdBQXZDO0FBQTRDa1MsVUFBQUEsSUFBSSxFQUFFbFMsR0FBRyxHQUFHbkg7QUFBeEQsU0FBUDtBQUNELE9BelpTO0FBMlpWd0ksTUFBQUEsS0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZVAsTUFBZixFQUF1QmtMLElBQXZCLEVBQTZCO0FBQ2xDLFlBQUkrRyxFQUFFLEdBQUcvRyxJQUFJLENBQUM1UCxFQUFMLENBQVEvRSxDQUFqQjtBQUFBLFlBQ0kyYixFQUFFLEdBQUdoSCxJQUFJLENBQUM1UCxFQUFMLENBQVF4RixDQURqQjtBQUFBLFlBRUlRLENBQUMsR0FBRyxDQUFDd0YsS0FBSyxDQUFDb1AsSUFBSSxDQUFDMUssRUFBTCxDQUFRMUssQ0FBUixHQUFZb2MsRUFBYixFQUFpQmhILElBQUksQ0FBQzFLLEVBQUwsQ0FBUWpLLENBQVIsR0FBWTBiLEVBQTdCLENBRmQ7QUFBQSxZQUdJL1gsQ0FBQyxHQUFHLFNBQVNBLENBQVQsQ0FBVytNLENBQVgsRUFBYztBQUNwQixpQkFBTztBQUNMMVEsWUFBQUEsQ0FBQyxFQUFFLENBQUMwUSxDQUFDLENBQUMxUSxDQUFGLEdBQU0wYixFQUFQLElBQWEzWixHQUFHLENBQUNoQyxDQUFELENBQWhCLEdBQXNCLENBQUMyUSxDQUFDLENBQUNuUixDQUFGLEdBQU1vYyxFQUFQLElBQWE3WixHQUFHLENBQUMvQixDQUFELENBRHBDO0FBRUxSLFlBQUFBLENBQUMsRUFBRSxDQUFDbVIsQ0FBQyxDQUFDMVEsQ0FBRixHQUFNMGIsRUFBUCxJQUFhNVosR0FBRyxDQUFDL0IsQ0FBRCxDQUFoQixHQUFzQixDQUFDMlEsQ0FBQyxDQUFDblIsQ0FBRixHQUFNb2MsRUFBUCxJQUFhNVosR0FBRyxDQUFDaEMsQ0FBRDtBQUZwQyxXQUFQO0FBSUQsU0FSRDs7QUFTQSxlQUFPMEosTUFBTSxDQUFDNEQsR0FBUCxDQUFXMUosQ0FBWCxDQUFQO0FBQ0QsT0F0YVM7QUF3YVY0TSxNQUFBQSxLQUFLLEVBQUUsU0FBU0EsS0FBVCxDQUFlOUcsTUFBZixFQUF1QmtMLElBQXZCLEVBQTZCO0FBQ2xDQSxRQUFBQSxJQUFJLEdBQUdBLElBQUksSUFBSTtBQUFFNVAsVUFBQUEsRUFBRSxFQUFFO0FBQUUvRSxZQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRVCxZQUFBQSxDQUFDLEVBQUU7QUFBWCxXQUFOO0FBQXNCMEssVUFBQUEsRUFBRSxFQUFFO0FBQUVqSyxZQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRVCxZQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUExQixTQUFmO0FBQ0EsWUFBSXFLLEtBQUssR0FBR0gsTUFBTSxDQUFDL0osTUFBUCxHQUFnQixDQUE1QjtBQUNBLFlBQUl3SSxDQUFDLEdBQUdZLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWVAsTUFBWixFQUFvQmtMLElBQXBCLENBQVI7O0FBQ0EsWUFBSWpELE1BQU0sR0FBRyxTQUFTQSxNQUFULENBQWdCelAsQ0FBaEIsRUFBbUI7QUFDOUIsaUJBQU8sS0FBS0EsQ0FBTCxJQUFVQSxDQUFDLElBQUksQ0FBdEI7QUFDRCxTQUZEOztBQUlBLFlBQUkySCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGNBQUk3SixDQUFDLEdBQUdtSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUFiO0FBQUEsY0FDSWEsQ0FBQyxHQUFHOEgsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FEYjtBQUFBLGNBRUltRSxDQUFDLEdBQUd3RSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUZiO0FBQUEsY0FHSW9FLENBQUMsR0FBRzVELENBQUMsR0FBRyxJQUFJSyxDQUFSLEdBQVlzRCxDQUhwQjs7QUFJQSxjQUFJQyxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1gsZ0JBQUlpWSxFQUFFLEdBQUcsQ0FBQ2pjLElBQUksQ0FBQ1MsQ0FBQyxHQUFHQSxDQUFKLEdBQVFMLENBQUMsR0FBRzJELENBQWIsQ0FBZDtBQUFBLGdCQUNJbVksRUFBRSxHQUFHLENBQUM5YixDQUFELEdBQUtLLENBRGQ7QUFBQSxnQkFFSStMLEVBQUUsR0FBRyxFQUFFeVAsRUFBRSxHQUFHQyxFQUFQLElBQWFsWSxDQUZ0QjtBQUFBLGdCQUdJeUksRUFBRSxHQUFHLEVBQUUsQ0FBQ3dQLEVBQUQsR0FBTUMsRUFBUixJQUFjbFksQ0FIdkI7QUFJQSxtQkFBTyxDQUFDd0ksRUFBRCxFQUFLQyxFQUFMLEVBQVN5RSxNQUFULENBQWdCYSxNQUFoQixDQUFQO0FBQ0QsV0FORCxNQU1PLElBQUl0UixDQUFDLEtBQUtzRCxDQUFOLElBQVdDLENBQUMsS0FBSyxDQUFyQixFQUF3QjtBQUM3QixtQkFBTyxDQUFDLENBQUMsSUFBSXZELENBQUosR0FBUXNELENBQVQsS0FBZSxJQUFJdEQsQ0FBSixHQUFRLElBQUlzRCxDQUEzQixDQUFELEVBQWdDbU4sTUFBaEMsQ0FBdUNhLE1BQXZDLENBQVA7QUFDRDs7QUFDRCxpQkFBTyxFQUFQO0FBQ0QsU0F2QmlDOzs7QUEwQmxDLFlBQUlvSyxFQUFFLEdBQUc1VCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUFkO0FBQUEsWUFDSXdjLEVBQUUsR0FBRzdULENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzNJLENBRGQ7QUFBQSxZQUVJdVcsRUFBRSxHQUFHNU4sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FGZDtBQUFBLFlBR0l5YyxFQUFFLEdBQUc5VCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUhkO0FBQUEsWUFJSW9FLENBQUMsR0FBRyxDQUFDbVksRUFBRCxHQUFNLElBQUlDLEVBQVYsR0FBZSxJQUFJakcsRUFBbkIsR0FBd0JrRyxFQUpoQztBQUFBLFlBS0lqYyxDQUFDLEdBQUcsSUFBSStiLEVBQUosR0FBUyxJQUFJQyxFQUFiLEdBQWtCLElBQUlqRyxFQUw5QjtBQUFBLFlBTUkxVixDQUFDLEdBQUcsQ0FBQyxDQUFELEdBQUswYixFQUFMLEdBQVUsSUFBSUMsRUFOdEI7QUFBQSxZQU9JclksQ0FBQyxHQUFHb1ksRUFQUjs7QUFTQSxZQUFJaFQsS0FBSyxDQUFDNFAsYUFBTixDQUFvQi9VLENBQXBCLEVBQXVCLENBQXZCLENBQUosRUFBK0I7QUFDN0I7QUFDQSxjQUFJbUYsS0FBSyxDQUFDNFAsYUFBTixDQUFvQjNZLENBQXBCLEVBQXVCLENBQXZCLENBQUosRUFBK0I7QUFDN0I7QUFDQSxnQkFBSStJLEtBQUssQ0FBQzRQLGFBQU4sQ0FBb0J0WSxDQUFwQixFQUF1QixDQUF2QixDQUFKLEVBQStCO0FBQzdCO0FBQ0EscUJBQU8sRUFBUDtBQUNELGFBTDRCOzs7QUFPN0IsbUJBQU8sQ0FBQyxDQUFDc0QsQ0FBRCxHQUFLdEQsQ0FBTixFQUFTeVEsTUFBVCxDQUFnQmEsTUFBaEIsQ0FBUDtBQUNELFdBVjRCOzs7QUFZN0IsY0FBSWxDLENBQUMsR0FBRzdQLElBQUksQ0FBQ1MsQ0FBQyxHQUFHQSxDQUFKLEdBQVEsSUFBSUwsQ0FBSixHQUFRMkQsQ0FBakIsQ0FBWjtBQUFBLGNBQ0ltTyxFQUFFLEdBQUcsSUFBSTlSLENBRGI7QUFFQSxpQkFBTyxDQUFDLENBQUN5UCxDQUFDLEdBQUdwUCxDQUFMLElBQVV5UixFQUFYLEVBQWUsQ0FBQyxDQUFDelIsQ0FBRCxHQUFLb1AsQ0FBTixJQUFXcUMsRUFBMUIsRUFBOEJoQixNQUE5QixDQUFxQ2EsTUFBckMsQ0FBUDtBQUNELFNBbERpQzs7O0FBc0RsQzNSLFFBQUFBLENBQUMsSUFBSTRELENBQUw7QUFDQXZELFFBQUFBLENBQUMsSUFBSXVELENBQUw7QUFDQUQsUUFBQUEsQ0FBQyxJQUFJQyxDQUFMO0FBRUEsWUFBSXVFLENBQUMsR0FBRyxDQUFDLElBQUk5SCxDQUFKLEdBQVFMLENBQUMsR0FBR0EsQ0FBYixJQUFrQixDQUExQjtBQUFBLFlBQ0lxTCxFQUFFLEdBQUdsRCxDQUFDLEdBQUcsQ0FEYjtBQUFBLFlBRUlzSCxDQUFDLEdBQUcsQ0FBQyxJQUFJelAsQ0FBSixHQUFRQSxDQUFSLEdBQVlBLENBQVosR0FBZ0IsSUFBSUEsQ0FBSixHQUFRSyxDQUF4QixHQUE0QixLQUFLc0QsQ0FBbEMsSUFBdUMsRUFGL0M7QUFBQSxZQUdJa00sRUFBRSxHQUFHSixDQUFDLEdBQUcsQ0FIYjtBQUFBLFlBSUl5TSxZQUFZLEdBQUdyTSxFQUFFLEdBQUdBLEVBQUwsR0FBVXhFLEVBQUUsR0FBR0EsRUFBTCxHQUFVQSxFQUp2QztBQUFBLFlBS0k4USxFQUxKO0FBQUEsWUFNSS9QLEVBTko7QUFBQSxZQU9JMk4sRUFQSjtBQUFBLFlBUUlFLEVBUko7QUFBQSxZQVNJRSxFQVRKOztBQVVBLFlBQUkrQixZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEIsY0FBSUUsR0FBRyxHQUFHLENBQUNqVSxDQUFELEdBQUssQ0FBZjtBQUFBLGNBQ0lrVSxJQUFJLEdBQUdELEdBQUcsR0FBR0EsR0FBTixHQUFZQSxHQUR2QjtBQUFBLGNBRUlyVyxDQUFDLEdBQUduRyxJQUFJLENBQUN5YyxJQUFELENBRlo7QUFBQSxjQUdJbmEsQ0FBQyxHQUFHLENBQUN1TixDQUFELElBQU0sSUFBSTFKLENBQVYsQ0FIUjtBQUFBLGNBSUl1VyxNQUFNLEdBQUdwYSxDQUFDLEdBQUcsQ0FBQyxDQUFMLEdBQVMsQ0FBQyxDQUFWLEdBQWNBLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZQSxDQUp2QztBQUFBLGNBS0lxYSxHQUFHLEdBQUc3WixJQUFJLENBQUM0WixNQUFELENBTGQ7QUFBQSxjQU1JRSxJQUFJLEdBQUdyRixHQUFHLENBQUNwUixDQUFELENBTmQ7QUFBQSxjQU9JNkksRUFBRSxHQUFHLElBQUk0TixJQVBiO0FBUUF6QyxVQUFBQSxFQUFFLEdBQUduTCxFQUFFLEdBQUc1TSxHQUFHLENBQUN1YSxHQUFHLEdBQUcsQ0FBUCxDQUFSLEdBQW9CdmMsQ0FBQyxHQUFHLENBQTdCO0FBQ0FpYSxVQUFBQSxFQUFFLEdBQUdyTCxFQUFFLEdBQUc1TSxHQUFHLENBQUMsQ0FBQ3VhLEdBQUcsR0FBR25GLEdBQVAsSUFBYyxDQUFmLENBQVIsR0FBNEJwWCxDQUFDLEdBQUcsQ0FBckM7QUFDQW1hLFVBQUFBLEVBQUUsR0FBR3ZMLEVBQUUsR0FBRzVNLEdBQUcsQ0FBQyxDQUFDdWEsR0FBRyxHQUFHLElBQUluRixHQUFYLElBQWtCLENBQW5CLENBQVIsR0FBZ0NwWCxDQUFDLEdBQUcsQ0FBekM7QUFDQSxpQkFBTyxDQUFDK1osRUFBRCxFQUFLRSxFQUFMLEVBQVNFLEVBQVQsRUFBYXJKLE1BQWIsQ0FBb0JhLE1BQXBCLENBQVA7QUFDRCxTQWJELE1BYU8sSUFBSXVLLFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUM3QkMsVUFBQUEsRUFBRSxHQUFHdE0sRUFBRSxHQUFHLENBQUwsR0FBU3NILEdBQUcsQ0FBQyxDQUFDdEgsRUFBRixDQUFaLEdBQW9CLENBQUNzSCxHQUFHLENBQUN0SCxFQUFELENBQTdCO0FBQ0FrSyxVQUFBQSxFQUFFLEdBQUcsSUFBSW9DLEVBQUosR0FBU25jLENBQUMsR0FBRyxDQUFsQjtBQUNBaWEsVUFBQUEsRUFBRSxHQUFHLENBQUNrQyxFQUFELEdBQU1uYyxDQUFDLEdBQUcsQ0FBZjtBQUNBLGlCQUFPLENBQUMrWixFQUFELEVBQUtFLEVBQUwsRUFBU25KLE1BQVQsQ0FBZ0JhLE1BQWhCLENBQVA7QUFDRCxTQUxNLE1BS0E7QUFDTCxjQUFJOEssRUFBRSxHQUFHN2MsSUFBSSxDQUFDc2MsWUFBRCxDQUFiO0FBQ0FDLFVBQUFBLEVBQUUsR0FBR2hGLEdBQUcsQ0FBQyxDQUFDdEgsRUFBRCxHQUFNNE0sRUFBUCxDQUFSO0FBQ0FyUSxVQUFBQSxFQUFFLEdBQUcrSyxHQUFHLENBQUN0SCxFQUFFLEdBQUc0TSxFQUFOLENBQVI7QUFDQSxpQkFBTyxDQUFDTixFQUFFLEdBQUcvUCxFQUFMLEdBQVVwTSxDQUFDLEdBQUcsQ0FBZixFQUFrQjhRLE1BQWxCLENBQXlCYSxNQUF6QixDQUFQO0FBQ0Q7QUFDRixPQXBnQlM7QUFzZ0JWZixNQUFBQSxNQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFnQnpJLENBQWhCLEVBQW1CO0FBQ3pCO0FBQ0EsWUFBSUEsQ0FBQyxDQUFDeEksTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGNBQUlLLENBQUMsR0FBR21JLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFBQSxjQUNJOUgsQ0FBQyxHQUFHOEgsQ0FBQyxDQUFDLENBQUQsQ0FEVDtBQUFBLGNBRUl4RSxDQUFDLEdBQUd3RSxDQUFDLENBQUMsQ0FBRCxDQUZUO0FBQUEsY0FHSXZFLENBQUMsR0FBRzVELENBQUMsR0FBRyxJQUFJSyxDQUFSLEdBQVlzRCxDQUhwQjs7QUFJQSxjQUFJQyxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1gsZ0JBQUlpWSxFQUFFLEdBQUcsQ0FBQ2pjLElBQUksQ0FBQ1MsQ0FBQyxHQUFHQSxDQUFKLEdBQVFMLENBQUMsR0FBRzJELENBQWIsQ0FBZDtBQUFBLGdCQUNJbVksRUFBRSxHQUFHLENBQUM5YixDQUFELEdBQUtLLENBRGQ7QUFBQSxnQkFFSStMLEVBQUUsR0FBRyxFQUFFeVAsRUFBRSxHQUFHQyxFQUFQLElBQWFsWSxDQUZ0QjtBQUFBLGdCQUdJeUksRUFBRSxHQUFHLEVBQUUsQ0FBQ3dQLEVBQUQsR0FBTUMsRUFBUixJQUFjbFksQ0FIdkI7QUFJQSxtQkFBTyxDQUFDd0ksRUFBRCxFQUFLQyxFQUFMLENBQVA7QUFDRCxXQU5ELE1BTU8sSUFBSWhNLENBQUMsS0FBS3NELENBQU4sSUFBV0MsQ0FBQyxLQUFLLENBQXJCLEVBQXdCO0FBQzdCLG1CQUFPLENBQUMsQ0FBQyxJQUFJdkQsQ0FBSixHQUFRc0QsQ0FBVCxLQUFlLEtBQUt0RCxDQUFDLEdBQUdzRCxDQUFULENBQWYsQ0FBRCxDQUFQO0FBQ0Q7O0FBQ0QsaUJBQU8sRUFBUDtBQUNELFNBakJ3Qjs7O0FBb0J6QixZQUFJd0UsQ0FBQyxDQUFDeEksTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGNBQUlLLENBQUMsR0FBR21JLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFBQSxjQUNJOUgsQ0FBQyxHQUFHOEgsQ0FBQyxDQUFDLENBQUQsQ0FEVDs7QUFFQSxjQUFJbkksQ0FBQyxLQUFLSyxDQUFWLEVBQWE7QUFDWCxtQkFBTyxDQUFDTCxDQUFDLElBQUlBLENBQUMsR0FBR0ssQ0FBUixDQUFGLENBQVA7QUFDRDs7QUFDRCxpQkFBTyxFQUFQO0FBQ0Q7QUFDRixPQWxpQlM7QUFvaUJWZ1AsTUFBQUEsU0FBUyxFQUFFLFNBQVNBLFNBQVQsQ0FBbUJuTixDQUFuQixFQUFzQndILE1BQXRCLEVBQThCRCxHQUE5QixFQUFtQ2lULEtBQW5DLEVBQTBDO0FBQ25ELFlBQUlsUCxPQUFPLEdBQUd6RSxLQUFLLENBQUMwRSxNQUFOLENBQWEvRCxNQUFiLENBQWQ7QUFDQSxZQUFJOEIsRUFBRSxHQUFHZ0MsT0FBTyxDQUFDLENBQUQsQ0FBaEI7QUFDQSxZQUFJOUIsRUFBRSxHQUFHOEIsT0FBTyxDQUFDLENBQUQsQ0FBaEI7QUFDQSxZQUFJbVAsR0FBSjtBQUFBLFlBQ0lDLEdBREo7QUFBQSxZQUVJQyxHQUZKO0FBQUEsWUFHSUMsRUFISjtBQUFBLFlBSUk5WixDQUFDLEdBQUcsQ0FKUjtBQUFBLFlBS0krQyxDQUFDLEdBQUcsQ0FMUixDQUptRDtBQVluRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQUluQyxDQUFDLEdBQUdtRixLQUFLLENBQUNrRixPQUFOLENBQWMvTCxDQUFkLEVBQWlCc0osRUFBakIsQ0FBUjtBQUNBLFlBQUl1UixFQUFFLEdBQUdoVSxLQUFLLENBQUNrRixPQUFOLENBQWMvTCxDQUFkLEVBQWlCd0osRUFBakIsQ0FBVDtBQUNBLFlBQUlzUixLQUFLLEdBQUdwWixDQUFDLENBQUMzRCxDQUFGLEdBQU0yRCxDQUFDLENBQUMzRCxDQUFSLEdBQVkyRCxDQUFDLENBQUNwRSxDQUFGLEdBQU1vRSxDQUFDLENBQUNwRSxDQUFoQzs7QUFDQSxZQUFJaUssR0FBSixFQUFTO0FBQ1BrVCxVQUFBQSxHQUFHLEdBQUcvYyxJQUFJLENBQUNzWCxHQUFHLENBQUN0VCxDQUFDLENBQUNwRSxDQUFGLEdBQU11ZCxFQUFFLENBQUM3YyxDQUFULEdBQWE2YyxFQUFFLENBQUN2ZCxDQUFILEdBQU9vRSxDQUFDLENBQUMxRCxDQUF2QixFQUEwQixDQUExQixDQUFILEdBQWtDZ1gsR0FBRyxDQUFDdFQsQ0FBQyxDQUFDMUQsQ0FBRixHQUFNNmMsRUFBRSxDQUFDOWMsQ0FBVCxHQUFhOGMsRUFBRSxDQUFDN2MsQ0FBSCxHQUFPMEQsQ0FBQyxDQUFDM0QsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBckMsR0FBb0VpWCxHQUFHLENBQUN0VCxDQUFDLENBQUMzRCxDQUFGLEdBQU04YyxFQUFFLENBQUN2ZCxDQUFULEdBQWF1ZCxFQUFFLENBQUM5YyxDQUFILEdBQU8yRCxDQUFDLENBQUNwRSxDQUF2QixFQUEwQixDQUExQixDQUF4RSxDQUFWO0FBQ0FvZCxVQUFBQSxHQUFHLEdBQUcxRixHQUFHLENBQUM4RixLQUFLLEdBQUdwWixDQUFDLENBQUMxRCxDQUFGLEdBQU0wRCxDQUFDLENBQUMxRCxDQUFqQixFQUFvQixJQUFJLENBQXhCLENBQVQ7QUFDRCxTQUhELE1BR087QUFDTHljLFVBQUFBLEdBQUcsR0FBRy9ZLENBQUMsQ0FBQzNELENBQUYsR0FBTThjLEVBQUUsQ0FBQ3ZkLENBQVQsR0FBYW9FLENBQUMsQ0FBQ3BFLENBQUYsR0FBTXVkLEVBQUUsQ0FBQzljLENBQTVCO0FBQ0EyYyxVQUFBQSxHQUFHLEdBQUcxRixHQUFHLENBQUM4RixLQUFELEVBQVEsSUFBSSxDQUFaLENBQVQ7QUFDRDs7QUFFRCxZQUFJTCxHQUFHLEtBQUssQ0FBUixJQUFhQyxHQUFHLEtBQUssQ0FBekIsRUFBNEI7QUFDMUIsaUJBQU87QUFBRTVaLFlBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVErQyxZQUFBQSxDQUFDLEVBQUU7QUFBWCxXQUFQO0FBQ0Q7O0FBRUQvQyxRQUFBQSxDQUFDLEdBQUcyWixHQUFHLEdBQUdDLEdBQVY7QUFDQTdXLFFBQUFBLENBQUMsR0FBRzZXLEdBQUcsR0FBR0QsR0FBVixDQTNDbUQ7QUE4Q25EO0FBQ0E7QUFDQTs7QUFDQSxZQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWO0FBQ0E7QUFDQSxjQUFJTyxFQUFFLEdBQUdsVSxLQUFLLENBQUNzRyxTQUFOLENBQWdCbk4sQ0FBQyxHQUFHLEtBQXBCLEVBQTJCd0gsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDLElBQXhDLEVBQThDekcsQ0FBdkQ7QUFDQSxjQUFJa2EsRUFBRSxHQUFHblUsS0FBSyxDQUFDc0csU0FBTixDQUFnQm5OLENBQUMsR0FBRyxLQUFwQixFQUEyQndILE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QyxJQUF4QyxFQUE4Q3pHLENBQXZEO0FBQ0E4WixVQUFBQSxFQUFFLEdBQUcsQ0FBQ0ksRUFBRSxHQUFHbGEsQ0FBTCxJQUFVQSxDQUFDLEdBQUdpYSxFQUFkLENBQUQsSUFBc0IsQ0FBM0I7QUFDQUosVUFBQUEsR0FBRyxHQUFHLENBQUNsVSxHQUFHLENBQUN1VSxFQUFFLEdBQUdsYSxDQUFOLENBQUgsR0FBYzJGLEdBQUcsQ0FBQzNGLENBQUMsR0FBR2lhLEVBQUwsQ0FBbEIsSUFBOEIsQ0FBcEM7QUFDRDs7QUFFRCxlQUFPO0FBQUVqYSxVQUFBQSxDQUFDLEVBQUVBLENBQUw7QUFBUStDLFVBQUFBLENBQUMsRUFBRUEsQ0FBWDtBQUFjK1csVUFBQUEsRUFBRSxFQUFFQSxFQUFsQjtBQUFzQkQsVUFBQUEsR0FBRyxFQUFFQTtBQUEzQixTQUFQO0FBQ0QsT0EvbEJTO0FBaW1CVnZOLE1BQUFBLFdBQVcsRUFBRSxTQUFTQSxXQUFULENBQXFCNUYsTUFBckIsRUFBNkI7QUFDeEMsWUFBSUEsTUFBTSxDQUFDL0osTUFBUCxHQUFnQixDQUFwQixFQUF1QixPQUFPLEVBQVAsQ0FEaUI7O0FBS3hDLFlBQUl3SSxDQUFDLEdBQUdZLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWVAsTUFBWixFQUFvQjtBQUFFMUUsVUFBQUEsRUFBRSxFQUFFMEUsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFpQlEsVUFBQUEsRUFBRSxFQUFFUixNQUFNLENBQUNsQyxLQUFQLENBQWEsQ0FBQyxDQUFkLEVBQWlCLENBQWpCO0FBQXJCLFNBQXBCLENBQVI7QUFBQSxZQUNJeEgsQ0FBQyxHQUFHbUksQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLbEksQ0FBTCxHQUFTa0ksQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLM0ksQ0FEdEI7QUFBQSxZQUVJYSxDQUFDLEdBQUc4SCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFMLEdBQVNrSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUZ0QjtBQUFBLFlBR0ltRSxDQUFDLEdBQUd3RSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFMLEdBQVNrSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUh0QjtBQUFBLFlBSUlvRSxDQUFDLEdBQUd1RSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtsSSxDQUFMLEdBQVNrSSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUszSSxDQUp0QjtBQUFBLFlBS0k0TSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUQsR0FBS3BNLENBQUwsR0FBUyxJQUFJSyxDQUFiLEdBQWlCLElBQUlzRCxDQUFyQixHQUF5QkMsQ0FBL0IsQ0FMVDtBQUFBLFlBTUl5SSxFQUFFLEdBQUcsTUFBTSxJQUFJck0sQ0FBSixHQUFRSyxDQUFSLEdBQVksSUFBSXNELENBQXRCLENBTlQ7QUFBQSxZQU9Jd1osRUFBRSxHQUFHLE1BQU14WixDQUFDLEdBQUczRCxDQUFWLENBUFQ7O0FBU0EsWUFBSStJLEtBQUssQ0FBQzRQLGFBQU4sQ0FBb0J2TSxFQUFwQixFQUF3QixDQUF4QixDQUFKLEVBQWdDO0FBQzlCLGNBQUksQ0FBQ3JELEtBQUssQ0FBQzRQLGFBQU4sQ0FBb0J0TSxFQUFwQixFQUF3QixDQUF4QixDQUFMLEVBQWlDO0FBQy9CLGdCQUFJbkssQ0FBQyxHQUFHLENBQUNpYixFQUFELEdBQU05USxFQUFkO0FBQ0EsZ0JBQUksS0FBS25LLENBQUwsSUFBVUEsQ0FBQyxJQUFJLENBQW5CLEVBQXNCLE9BQU8sQ0FBQ0EsQ0FBRCxDQUFQO0FBQ3ZCOztBQUNELGlCQUFPLEVBQVA7QUFDRDs7QUFFRCxZQUFJa2IsR0FBRyxHQUFHL1EsRUFBRSxHQUFHQSxFQUFMLEdBQVUsSUFBSUQsRUFBSixHQUFTK1EsRUFBN0I7QUFBQSxZQUNJRSxFQUFFLEdBQUcvZCxJQUFJLENBQUNNLElBQUwsQ0FBVXdkLEdBQVYsQ0FEVDtBQUFBLFlBRUl4WixDQUFDLEdBQUcsSUFBSXdJLEVBRlo7QUFJQSxZQUFJckQsS0FBSyxDQUFDNFAsYUFBTixDQUFvQi9VLENBQXBCLEVBQXVCLENBQXZCLENBQUosRUFBK0IsT0FBTyxFQUFQO0FBRS9CLGVBQU8sQ0FBQyxDQUFDeVosRUFBRSxHQUFHaFIsRUFBTixJQUFZekksQ0FBYixFQUFnQixFQUFFeUksRUFBRSxHQUFHZ1IsRUFBUCxJQUFhelosQ0FBN0IsRUFBZ0NrTixNQUFoQyxDQUF1QyxVQUFVL0ssQ0FBVixFQUFhO0FBQ3pELGlCQUFPLEtBQUtBLENBQUwsSUFBVUEsQ0FBQyxJQUFJLENBQXRCO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0Fob0JTO0FBa29CVnlMLE1BQUFBLFdBQVcsRUFBRSxTQUFTQSxXQUFULENBQXFCOEwsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCO0FBQ3hDLFlBQUl6VCxJQUFJLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFYO0FBQUEsWUFDSXRKLEdBQUcsR0FBR3NKLElBQUksQ0FBQ25LLE1BRGY7QUFBQSxZQUVJRixDQUZKO0FBQUEsWUFHSWlSLEdBSEo7QUFBQSxZQUlJbFAsQ0FKSjtBQUFBLFlBS0lVLENBTEo7QUFBQSxZQU1JMEIsQ0FOSjs7QUFPQSxhQUFLbkUsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZSxHQUFoQixFQUFxQmYsQ0FBQyxFQUF0QixFQUEwQjtBQUN4QmlSLFVBQUFBLEdBQUcsR0FBRzVHLElBQUksQ0FBQ3JLLENBQUQsQ0FBVjtBQUNBK0IsVUFBQUEsQ0FBQyxHQUFHOGIsRUFBRSxDQUFDNU0sR0FBRCxDQUFGLENBQVFtSyxHQUFaO0FBQ0EzWSxVQUFBQSxDQUFDLEdBQUdxYixFQUFFLENBQUM3TSxHQUFELENBQUYsQ0FBUW1LLEdBQVo7QUFDQWpYLFVBQUFBLENBQUMsR0FBRyxDQUFDMFosRUFBRSxDQUFDNU0sR0FBRCxDQUFGLENBQVFvSyxJQUFSLEdBQWV5QyxFQUFFLENBQUM3TSxHQUFELENBQUYsQ0FBUW9LLElBQXhCLElBQWdDLENBQXBDO0FBQ0EsY0FBSW5TLEdBQUcsQ0FBQ25ILENBQUMsR0FBR1UsQ0FBTCxDQUFILElBQWMwQixDQUFsQixFQUFxQixPQUFPLEtBQVA7QUFDdEI7O0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FscEJTO0FBb3BCVjRaLE1BQUFBLFNBQVMsRUFBRSxTQUFTQSxTQUFULENBQW1Cck0sSUFBbkIsRUFBeUJzTSxLQUF6QixFQUFnQztBQUN6QyxZQUFJQSxLQUFLLENBQUN4ZCxDQUFOLENBQVF3QixHQUFSLEdBQWMwUCxJQUFJLENBQUNsUixDQUFMLENBQU93QixHQUF6QixFQUE4QjtBQUM1QjBQLFVBQUFBLElBQUksQ0FBQ2xSLENBQUwsQ0FBT3dCLEdBQVAsR0FBYWdjLEtBQUssQ0FBQ3hkLENBQU4sQ0FBUXdCLEdBQXJCO0FBQ0Q7O0FBQ0QsWUFBSWdjLEtBQUssQ0FBQ2plLENBQU4sQ0FBUWlDLEdBQVIsR0FBYzBQLElBQUksQ0FBQzNSLENBQUwsQ0FBT2lDLEdBQXpCLEVBQThCO0FBQzVCMFAsVUFBQUEsSUFBSSxDQUFDM1IsQ0FBTCxDQUFPaUMsR0FBUCxHQUFhZ2MsS0FBSyxDQUFDamUsQ0FBTixDQUFRaUMsR0FBckI7QUFDRDs7QUFDRCxZQUFJZ2MsS0FBSyxDQUFDdmQsQ0FBTixJQUFXdWQsS0FBSyxDQUFDdmQsQ0FBTixDQUFRdUIsR0FBUixHQUFjMFAsSUFBSSxDQUFDalIsQ0FBTCxDQUFPdUIsR0FBcEMsRUFBeUM7QUFDdkMwUCxVQUFBQSxJQUFJLENBQUNqUixDQUFMLENBQU91QixHQUFQLEdBQWFnYyxLQUFLLENBQUN2ZCxDQUFOLENBQVF1QixHQUFyQjtBQUNEOztBQUNELFlBQUlnYyxLQUFLLENBQUN4ZCxDQUFOLENBQVEySSxHQUFSLEdBQWN1SSxJQUFJLENBQUNsUixDQUFMLENBQU8ySSxHQUF6QixFQUE4QjtBQUM1QnVJLFVBQUFBLElBQUksQ0FBQ2xSLENBQUwsQ0FBTzJJLEdBQVAsR0FBYTZVLEtBQUssQ0FBQ3hkLENBQU4sQ0FBUTJJLEdBQXJCO0FBQ0Q7O0FBQ0QsWUFBSTZVLEtBQUssQ0FBQ2plLENBQU4sQ0FBUW9KLEdBQVIsR0FBY3VJLElBQUksQ0FBQzNSLENBQUwsQ0FBT29KLEdBQXpCLEVBQThCO0FBQzVCdUksVUFBQUEsSUFBSSxDQUFDM1IsQ0FBTCxDQUFPb0osR0FBUCxHQUFhNlUsS0FBSyxDQUFDamUsQ0FBTixDQUFRb0osR0FBckI7QUFDRDs7QUFDRCxZQUFJNlUsS0FBSyxDQUFDdmQsQ0FBTixJQUFXdWQsS0FBSyxDQUFDdmQsQ0FBTixDQUFRMEksR0FBUixHQUFjdUksSUFBSSxDQUFDalIsQ0FBTCxDQUFPMEksR0FBcEMsRUFBeUM7QUFDdkN1SSxVQUFBQSxJQUFJLENBQUNqUixDQUFMLENBQU8wSSxHQUFQLEdBQWE2VSxLQUFLLENBQUN2ZCxDQUFOLENBQVEwSSxHQUFyQjtBQUNEOztBQUNEdUksUUFBQUEsSUFBSSxDQUFDbFIsQ0FBTCxDQUFPNGEsR0FBUCxHQUFhLENBQUMxSixJQUFJLENBQUNsUixDQUFMLENBQU93QixHQUFQLEdBQWEwUCxJQUFJLENBQUNsUixDQUFMLENBQU8ySSxHQUFyQixJQUE0QixDQUF6QztBQUNBdUksUUFBQUEsSUFBSSxDQUFDM1IsQ0FBTCxDQUFPcWIsR0FBUCxHQUFhLENBQUMxSixJQUFJLENBQUMzUixDQUFMLENBQU9pQyxHQUFQLEdBQWEwUCxJQUFJLENBQUMzUixDQUFMLENBQU9vSixHQUFyQixJQUE0QixDQUF6Qzs7QUFDQSxZQUFJdUksSUFBSSxDQUFDalIsQ0FBVCxFQUFZO0FBQ1ZpUixVQUFBQSxJQUFJLENBQUNqUixDQUFMLENBQU8yYSxHQUFQLEdBQWEsQ0FBQzFKLElBQUksQ0FBQ2pSLENBQUwsQ0FBT3VCLEdBQVAsR0FBYTBQLElBQUksQ0FBQ2pSLENBQUwsQ0FBTzBJLEdBQXJCLElBQTRCLENBQXpDO0FBQ0Q7O0FBQ0R1SSxRQUFBQSxJQUFJLENBQUNsUixDQUFMLENBQU82YSxJQUFQLEdBQWMzSixJQUFJLENBQUNsUixDQUFMLENBQU8ySSxHQUFQLEdBQWF1SSxJQUFJLENBQUNsUixDQUFMLENBQU93QixHQUFsQztBQUNBMFAsUUFBQUEsSUFBSSxDQUFDM1IsQ0FBTCxDQUFPc2IsSUFBUCxHQUFjM0osSUFBSSxDQUFDM1IsQ0FBTCxDQUFPb0osR0FBUCxHQUFhdUksSUFBSSxDQUFDM1IsQ0FBTCxDQUFPaUMsR0FBbEM7O0FBQ0EsWUFBSTBQLElBQUksQ0FBQ2pSLENBQVQsRUFBWTtBQUNWaVIsVUFBQUEsSUFBSSxDQUFDalIsQ0FBTCxDQUFPNGEsSUFBUCxHQUFjM0osSUFBSSxDQUFDalIsQ0FBTCxDQUFPMEksR0FBUCxHQUFhdUksSUFBSSxDQUFDalIsQ0FBTCxDQUFPdUIsR0FBbEM7QUFDRDtBQUNGLE9BanJCUztBQW1yQlZnVSxNQUFBQSxhQUFhLEVBQUUsU0FBU0EsYUFBVCxDQUF1QkwsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCckIsMEJBQS9CLEVBQTJEO0FBQ3hFLFlBQUkwSixHQUFHLEdBQUd0SSxFQUFFLENBQUNqRSxJQUFILEVBQVY7QUFBQSxZQUNJd00sR0FBRyxHQUFHdEksRUFBRSxDQUFDbEUsSUFBSCxFQURWO0FBQUEsWUFFSXBMLENBQUMsR0FBRyxNQUZSO0FBQUEsWUFHSTZYLFNBQVMsR0FBRzVKLDBCQUEwQixJQUFJLEdBSDlDOztBQUlBLFlBQUkwSixHQUFHLENBQUN6ZCxDQUFKLENBQU02YSxJQUFOLEdBQWE0QyxHQUFHLENBQUNsZSxDQUFKLENBQU1zYixJQUFuQixHQUEwQjhDLFNBQTFCLElBQXVDRCxHQUFHLENBQUMxZCxDQUFKLENBQU02YSxJQUFOLEdBQWE2QyxHQUFHLENBQUNuZSxDQUFKLENBQU1zYixJQUFuQixHQUEwQjhDLFNBQXJFLEVBQWdGO0FBQzlFLGlCQUFPLENBQUMsQ0FBQzdYLENBQUMsSUFBSXFQLEVBQUUsQ0FBQ2hMLEdBQUgsR0FBU2dMLEVBQUUsQ0FBQy9LLEdBQWhCLENBQUQsR0FBd0IsQ0FBeEIsR0FBNEIsQ0FBN0IsSUFBa0N0RSxDQUFsQyxHQUFzQyxHQUF0QyxHQUE0QyxDQUFDQSxDQUFDLElBQUlzUCxFQUFFLENBQUNqTCxHQUFILEdBQVNpTCxFQUFFLENBQUNoTCxHQUFoQixDQUFELEdBQXdCLENBQXhCLEdBQTRCLENBQTdCLElBQWtDdEUsQ0FBL0UsQ0FBUDtBQUNEOztBQUNELFlBQUk4WCxHQUFHLEdBQUd6SSxFQUFFLENBQUNsRixLQUFILENBQVMsR0FBVCxDQUFWO0FBQUEsWUFDSTROLEdBQUcsR0FBR3pJLEVBQUUsQ0FBQ25GLEtBQUgsQ0FBUyxHQUFULENBRFY7QUFBQSxZQUVJb0YsS0FBSyxHQUFHLENBQUM7QUFBRW5GLFVBQUFBLElBQUksRUFBRTBOLEdBQUcsQ0FBQzFOLElBQVo7QUFBa0JsTSxVQUFBQSxLQUFLLEVBQUU2WixHQUFHLENBQUMzTjtBQUE3QixTQUFELEVBQXNDO0FBQUVBLFVBQUFBLElBQUksRUFBRTBOLEdBQUcsQ0FBQzFOLElBQVo7QUFBa0JsTSxVQUFBQSxLQUFLLEVBQUU2WixHQUFHLENBQUM3WjtBQUE3QixTQUF0QyxFQUE0RTtBQUFFa00sVUFBQUEsSUFBSSxFQUFFME4sR0FBRyxDQUFDNVosS0FBWjtBQUFtQkEsVUFBQUEsS0FBSyxFQUFFNlosR0FBRyxDQUFDN1o7QUFBOUIsU0FBNUUsRUFBbUg7QUFBRWtNLFVBQUFBLElBQUksRUFBRTBOLEdBQUcsQ0FBQzVaLEtBQVo7QUFBbUJBLFVBQUFBLEtBQUssRUFBRTZaLEdBQUcsQ0FBQzNOO0FBQTlCLFNBQW5ILENBRlo7QUFHQW1GLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDeEUsTUFBTixDQUFhLFVBQVUwRSxJQUFWLEVBQWdCO0FBQ25DLGlCQUFPek0sS0FBSyxDQUFDeUksV0FBTixDQUFrQmdFLElBQUksQ0FBQ3JGLElBQUwsQ0FBVWdCLElBQVYsRUFBbEIsRUFBb0NxRSxJQUFJLENBQUN2UixLQUFMLENBQVdrTixJQUFYLEVBQXBDLENBQVA7QUFDRCxTQUZPLENBQVI7QUFHQSxZQUFJZ0UsT0FBTyxHQUFHLEVBQWQ7QUFDQSxZQUFJRyxLQUFLLENBQUMzVixNQUFOLEtBQWlCLENBQXJCLEVBQXdCLE9BQU93VixPQUFQO0FBQ3hCRyxRQUFBQSxLQUFLLENBQUNyVSxPQUFOLENBQWMsVUFBVXVVLElBQVYsRUFBZ0I7QUFDNUJMLFVBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDdEUsTUFBUixDQUFlOUgsS0FBSyxDQUFDME0sYUFBTixDQUFvQkQsSUFBSSxDQUFDckYsSUFBekIsRUFBK0JxRixJQUFJLENBQUN2UixLQUFwQyxFQUEyQzJaLFNBQTNDLENBQWYsQ0FBVjtBQUNELFNBRkQ7QUFHQXpJLFFBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDckUsTUFBUixDQUFlLFVBQVVILENBQVYsRUFBYWxSLENBQWIsRUFBZ0I7QUFDdkMsaUJBQU8wVixPQUFPLENBQUNsRSxPQUFSLENBQWdCTixDQUFoQixNQUF1QmxSLENBQTlCO0FBQ0QsU0FGUyxDQUFWO0FBR0EsZUFBTzBWLE9BQVA7QUFDRCxPQTFzQlM7QUE0c0JWMkIsTUFBQUEsVUFBVSxFQUFFLFNBQVNBLFVBQVQsQ0FBb0I5UixFQUFwQixFQUF3QmtGLEVBQXhCLEVBQTRCbUIsRUFBNUIsRUFBZ0M7QUFDMUMsWUFBSThOLEdBQUcsR0FBR2pQLEVBQUUsQ0FBQ2pLLENBQUgsR0FBTytFLEVBQUUsQ0FBQy9FLENBQXBCO0FBQUEsWUFDSW1aLEdBQUcsR0FBR2xQLEVBQUUsQ0FBQzFLLENBQUgsR0FBT3dGLEVBQUUsQ0FBQ3hGLENBRHBCO0FBQUEsWUFFSTZaLEdBQUcsR0FBR2hPLEVBQUUsQ0FBQ3BMLENBQUgsR0FBT2lLLEVBQUUsQ0FBQ2pLLENBRnBCO0FBQUEsWUFHSXFaLEdBQUcsR0FBR2pPLEVBQUUsQ0FBQzdMLENBQUgsR0FBTzBLLEVBQUUsQ0FBQzFLLENBSHBCO0FBSUEsWUFBSXVlLElBQUksR0FBRzVFLEdBQUcsR0FBR25YLEdBQUcsQ0FBQ3FWLEtBQUQsQ0FBVCxHQUFtQitCLEdBQUcsR0FBR3JYLEdBQUcsQ0FBQ3NWLEtBQUQsQ0FBdkM7QUFBQSxZQUNJMkcsSUFBSSxHQUFHN0UsR0FBRyxHQUFHcFgsR0FBRyxDQUFDc1YsS0FBRCxDQUFULEdBQW1CK0IsR0FBRyxHQUFHcFgsR0FBRyxDQUFDcVYsS0FBRCxDQUR2QztBQUFBLFlBRUk0RyxJQUFJLEdBQUc1RSxHQUFHLEdBQUdyWCxHQUFHLENBQUNxVixLQUFELENBQVQsR0FBbUJpQyxHQUFHLEdBQUd2WCxHQUFHLENBQUNzVixLQUFELENBRnZDO0FBQUEsWUFHSTZHLElBQUksR0FBRzdFLEdBQUcsR0FBR3RYLEdBQUcsQ0FBQ3NWLEtBQUQsQ0FBVCxHQUFtQmlDLEdBQUcsR0FBR3RYLEdBQUcsQ0FBQ3FWLEtBQUQsQ0FIdkMsQ0FMMEM7O0FBVTFDLFlBQUk4RyxHQUFHLEdBQUcsQ0FBQ25aLEVBQUUsQ0FBQy9FLENBQUgsR0FBT2lLLEVBQUUsQ0FBQ2pLLENBQVgsSUFBZ0IsQ0FBMUI7QUFBQSxZQUNJbWUsR0FBRyxHQUFHLENBQUNwWixFQUFFLENBQUN4RixDQUFILEdBQU8wSyxFQUFFLENBQUMxSyxDQUFYLElBQWdCLENBRDFCO0FBQUEsWUFFSTZlLEdBQUcsR0FBRyxDQUFDblUsRUFBRSxDQUFDakssQ0FBSCxHQUFPb0wsRUFBRSxDQUFDcEwsQ0FBWCxJQUFnQixDQUYxQjtBQUFBLFlBR0lxZSxHQUFHLEdBQUcsQ0FBQ3BVLEVBQUUsQ0FBQzFLLENBQUgsR0FBTzZMLEVBQUUsQ0FBQzdMLENBQVgsSUFBZ0IsQ0FIMUIsQ0FWMEM7O0FBZTFDLFlBQUkrZSxJQUFJLEdBQUdKLEdBQUcsR0FBR0osSUFBakI7QUFBQSxZQUNJUyxJQUFJLEdBQUdKLEdBQUcsR0FBR0osSUFEakI7QUFBQSxZQUVJUyxJQUFJLEdBQUdKLEdBQUcsR0FBR0osSUFGakI7QUFBQSxZQUdJUyxJQUFJLEdBQUdKLEdBQUcsR0FBR0osSUFIakIsQ0FmMEM7O0FBb0IxQyxZQUFJM0gsR0FBRyxHQUFHeE4sS0FBSyxDQUFDK1EsSUFBTixDQUFXcUUsR0FBWCxFQUFnQkMsR0FBaEIsRUFBcUJHLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0gsR0FBakMsRUFBc0NDLEdBQXRDLEVBQTJDRyxJQUEzQyxFQUFpREMsSUFBakQsQ0FBVjtBQUFBLFlBQ0kzWSxDQUFDLEdBQUdnRCxLQUFLLENBQUMwQyxJQUFOLENBQVc4SyxHQUFYLEVBQWdCdlIsRUFBaEIsQ0FEUjtBQUFBO0FBSUFsRCxRQUFBQSxDQUFDLEdBQUcwRCxLQUFLLENBQUNSLEVBQUUsQ0FBQ3hGLENBQUgsR0FBTytXLEdBQUcsQ0FBQy9XLENBQVosRUFBZXdGLEVBQUUsQ0FBQy9FLENBQUgsR0FBT3NXLEdBQUcsQ0FBQ3RXLENBQTFCLENBSlQ7QUFBQSxZQUtJMkMsQ0FBQyxHQUFHNEMsS0FBSyxDQUFDMEUsRUFBRSxDQUFDMUssQ0FBSCxHQUFPK1csR0FBRyxDQUFDL1csQ0FBWixFQUFlMEssRUFBRSxDQUFDakssQ0FBSCxHQUFPc1csR0FBRyxDQUFDdFcsQ0FBMUIsQ0FMYjtBQUFBLFlBTUl1RyxDQUFDLEdBQUdoQixLQUFLLENBQUM2RixFQUFFLENBQUM3TCxDQUFILEdBQU8rVyxHQUFHLENBQUMvVyxDQUFaLEVBQWU2TCxFQUFFLENBQUNwTCxDQUFILEdBQU9zVyxHQUFHLENBQUN0VyxDQUExQixDQU5iO0FBQUEsWUFPSTBlLENBUEosQ0FwQjBDOzs7QUE2QjFDLFlBQUk3YyxDQUFDLEdBQUcwRSxDQUFSLEVBQVc7QUFDVDtBQUNBO0FBQ0E7QUFDQSxjQUFJMUUsQ0FBQyxHQUFHYyxDQUFKLElBQVNBLENBQUMsR0FBRzRELENBQWpCLEVBQW9CO0FBQ2xCMUUsWUFBQUEsQ0FBQyxJQUFJc1YsR0FBTDtBQUNEOztBQUNELGNBQUl0VixDQUFDLEdBQUcwRSxDQUFSLEVBQVc7QUFDVG1ZLFlBQUFBLENBQUMsR0FBR25ZLENBQUo7QUFDQUEsWUFBQUEsQ0FBQyxHQUFHMUUsQ0FBSjtBQUNBQSxZQUFBQSxDQUFDLEdBQUc2YyxDQUFKO0FBQ0Q7QUFDRixTQVpELE1BWU87QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFJblksQ0FBQyxHQUFHNUQsQ0FBSixJQUFTQSxDQUFDLEdBQUdkLENBQWpCLEVBQW9CO0FBQ2xCNmMsWUFBQUEsQ0FBQyxHQUFHblksQ0FBSjtBQUNBQSxZQUFBQSxDQUFDLEdBQUcxRSxDQUFKO0FBQ0FBLFlBQUFBLENBQUMsR0FBRzZjLENBQUo7QUFDRCxXQUpELE1BSU87QUFDTG5ZLFlBQUFBLENBQUMsSUFBSTRRLEdBQUw7QUFDRDtBQUNGLFNBcER5Qzs7O0FBc0QxQ2IsUUFBQUEsR0FBRyxDQUFDelUsQ0FBSixHQUFRQSxDQUFSO0FBQ0F5VSxRQUFBQSxHQUFHLENBQUMvUCxDQUFKLEdBQVFBLENBQVI7QUFDQStQLFFBQUFBLEdBQUcsQ0FBQ3hRLENBQUosR0FBUUEsQ0FBUjtBQUNBLGVBQU93USxHQUFQO0FBQ0QsT0F0d0JTO0FBd3dCVnZGLE1BQUFBLFVBQVUsRUFBRSxTQUFTQSxVQUFULENBQW9CaFIsQ0FBcEIsRUFBdUJLLENBQXZCLEVBQTBCO0FBQ3BDLGVBQU9MLENBQUMsR0FBR0ssQ0FBWDtBQUNEO0FBMXdCUyxLQUFaO0FBNndCQTBILElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQmlCLEtBQWpCO0FBQ0QsR0FoekJEO0FBa3pCRDs7QUFBTyxDQTF0REc7QUEydERWOztBQUNBO0FBQU8sVUFBU2hCLE1BQVQsRUFBaUJELE9BQWpCLEVBQTBCRixtQkFBMUIsRUFBK0M7O0FBSXJELEdBQUMsWUFBWTs7QUFHWCxRQUFJbUIsS0FBSyxHQUFHbkIsbUJBQW1CLENBQUMsQ0FBRCxDQUEvQjtBQUVBOzs7Ozs7QUFJQSxRQUFJb0IsVUFBVSxHQUFHLFNBQVNBLFVBQVQsQ0FBb0JpTCxNQUFwQixFQUE0QjtBQUMzQyxXQUFLQSxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUt4SyxHQUFMLEdBQVcsS0FBWDs7QUFDQSxVQUFJLENBQUMsQ0FBQ3dLLE1BQU4sRUFBYztBQUNaLGFBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUt4SyxHQUFMLEdBQVcsS0FBS3dLLE1BQUwsQ0FBWSxDQUFaLEVBQWV4SyxHQUExQjtBQUNEO0FBQ0YsS0FQRDs7QUFTQVQsSUFBQUEsVUFBVSxDQUFDTixTQUFYLEdBQXVCO0FBQ3JCK0QsTUFBQUEsT0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsZUFBTyxLQUFLbEYsUUFBTCxFQUFQO0FBQ0QsT0FIb0I7QUFJckJBLE1BQUFBLFFBQVEsRUFBRSxTQUFTQSxRQUFULEdBQW9CO0FBQzVCLGVBQU8sTUFBTSxLQUFLME0sTUFBTCxDQUFZM0csR0FBWixDQUFnQixVQUFVdEQsS0FBVixFQUFpQjtBQUM1QyxpQkFBT2pCLEtBQUssQ0FBQzJELGNBQU4sQ0FBcUIxQyxLQUFLLENBQUNOLE1BQTNCLENBQVA7QUFDRCxTQUZZLEVBRVZvRCxJQUZVLENBRUwsSUFGSyxDQUFOLEdBRVMsR0FGaEI7QUFHRCxPQVJvQjtBQVNyQjhSLE1BQUFBLFFBQVEsRUFBRSxTQUFTQSxRQUFULENBQWtCNVUsS0FBbEIsRUFBeUI7QUFDakMsYUFBS2lLLE1BQUwsQ0FBWTNLLElBQVosQ0FBaUJVLEtBQWpCO0FBQ0EsYUFBS1AsR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWU8sS0FBSyxDQUFDUCxHQUE3QjtBQUNELE9BWm9CO0FBYXJCOUosTUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsZUFBTyxLQUFLc1UsTUFBTCxDQUFZM0csR0FBWixDQUFnQixVQUFVcUQsQ0FBVixFQUFhO0FBQ2xDLGlCQUFPQSxDQUFDLENBQUNoUixNQUFGLEVBQVA7QUFDRCxTQUZNLEVBRUpnUyxNQUZJLENBRUcsVUFBVTNSLENBQVYsRUFBYUssQ0FBYixFQUFnQjtBQUN4QixpQkFBT0wsQ0FBQyxHQUFHSyxDQUFYO0FBQ0QsU0FKTSxDQUFQO0FBS0QsT0FuQm9CO0FBb0JyQjJKLE1BQUFBLEtBQUssRUFBRSxTQUFTQSxLQUFULENBQWVMLEdBQWYsRUFBb0I7QUFDekIsZUFBTyxLQUFLc0ssTUFBTCxDQUFZdEssR0FBWixDQUFQO0FBQ0QsT0F0Qm9CO0FBdUJyQndILE1BQUFBLElBQUksRUFBRSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLFlBQUl4TixDQUFDLEdBQUcsS0FBS3NRLE1BQWI7QUFDQSxZQUFJOUMsSUFBSSxHQUFHeE4sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLd04sSUFBTCxFQUFYOztBQUNBLGFBQUssSUFBSTFSLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrRSxDQUFDLENBQUNoRSxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztBQUNqQ3NKLFVBQUFBLEtBQUssQ0FBQ3lVLFNBQU4sQ0FBZ0JyTSxJQUFoQixFQUFzQnhOLENBQUMsQ0FBQ2xFLENBQUQsQ0FBRCxDQUFLMFIsSUFBTCxFQUF0QjtBQUNEOztBQUNELGVBQU9BLElBQVA7QUFDRCxPQTlCb0I7QUErQnJCL1AsTUFBQUEsTUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBZ0J3QyxDQUFoQixFQUFtQjtBQUN6QixZQUFJeEMsTUFBTSxHQUFHLEVBQWI7QUFDQSxhQUFLNlMsTUFBTCxDQUFZaFQsT0FBWixDQUFvQixVQUFVMFAsQ0FBVixFQUFhO0FBQy9CdlAsVUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUN5UCxNQUFQLENBQWNGLENBQUMsQ0FBQ3ZQLE1BQUYsQ0FBU3dDLENBQVQsQ0FBZCxDQUFUO0FBQ0QsU0FGRDtBQUdBLGVBQU8sSUFBSW9GLFVBQUosQ0FBZTVILE1BQWYsQ0FBUDtBQUNEO0FBckNvQixLQUF2QjtBQXdDQTJHLElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQmtCLFVBQWpCO0FBQ0QsR0EzREQ7QUE2REQ7O0FBQU8sQ0E3eERHO0FBOHhEVjs7QUFDQTtBQUFPLFVBQVNqQixNQUFULEVBQWlCRCxPQUFqQixFQUEwQkYsbUJBQTFCLEVBQStDOztBQUlyRCxNQUFJaVgsU0FBUyxHQUFHalgsbUJBQW1CLENBQUMsQ0FBRCxDQUFuQzs7QUFFQSxNQUFJOFEsQ0FBQyxHQUFHO0FBQUV6WSxJQUFBQSxDQUFDLEVBQUUsS0FBTDtBQUFZVCxJQUFBQSxDQUFDLEVBQUU7QUFBZixHQUFSOztBQUVBLFdBQVNzZixVQUFULENBQW9CclgsTUFBcEIsRUFBNEJzWCxJQUE1QixFQUFrQzdOLE1BQWxDLEVBQTBDO0FBQ3hDLFFBQUk2TixJQUFJLEtBQUssR0FBYixFQUFrQjs7QUFDbEIsUUFBSUEsSUFBSSxLQUFLLEdBQWIsRUFBa0I7QUFDaEJyRyxNQUFBQSxDQUFDLEdBQUc7QUFBRXpZLFFBQUFBLENBQUMsRUFBRWlSLE1BQU0sQ0FBQyxDQUFELENBQVg7QUFBZ0IxUixRQUFBQSxDQUFDLEVBQUUwUixNQUFNLENBQUMsQ0FBRDtBQUF6QixPQUFKO0FBQ0E7QUFDRCxLQUx1Qzs7O0FBT3hDLFFBQUk4TixPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVF0RyxDQUFDLENBQUN6WSxDQUFWLEVBQWF5WSxDQUFDLENBQUNsWixDQUFmLEVBQWtCcVIsTUFBbEIsQ0FBeUJLLE1BQXpCLENBQWQ7QUFDQSxRQUFJK04sbUJBQW1CLEdBQUd4WCxNQUFNLENBQUNxRyxJQUFQLENBQVlvUixLQUFaLENBQWtCelgsTUFBbEIsRUFBMEJ1WCxPQUExQixDQUExQjtBQUNBLFFBQUloVixLQUFLLEdBQUcsSUFBSWlWLG1CQUFKLEVBQVo7QUFDQSxRQUFJcFMsSUFBSSxHQUFHcUUsTUFBTSxDQUFDMUosS0FBUCxDQUFhLENBQUMsQ0FBZCxDQUFYO0FBQ0FrUixJQUFBQSxDQUFDLEdBQUc7QUFBRXpZLE1BQUFBLENBQUMsRUFBRTRNLElBQUksQ0FBQyxDQUFELENBQVQ7QUFBY3JOLE1BQUFBLENBQUMsRUFBRXFOLElBQUksQ0FBQyxDQUFEO0FBQXJCLEtBQUo7QUFDQSxXQUFPN0MsS0FBUDtBQUNEOztBQUVELFdBQVNtVixXQUFULENBQXFCMVgsTUFBckIsRUFBNkI3RCxDQUE3QixFQUFnQztBQUM5QixRQUFJd2IsS0FBSyxHQUFHUCxTQUFTLENBQUNqYixDQUFELENBQVQsQ0FBYXNNLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBWjtBQUFBLFFBQ0k2TyxJQURKO0FBQUEsUUFFSU0sT0FBTyxHQUFHLElBQUlDLE1BQUosQ0FBVyxTQUFYLEVBQXNCLEVBQXRCLENBRmQ7QUFBQSxRQUdJck4sT0FISjtBQUFBLFFBSUlmLE1BSko7QUFBQSxRQUtJNEMsUUFBUSxHQUFHLEVBTGY7QUFBQSxRQU1JeUwsSUFBSSxHQUFHO0FBQUUsV0FBSyxDQUFQO0FBQVUsV0FBSyxDQUFmO0FBQWtCLFdBQUssQ0FBdkI7QUFBMEIsV0FBSztBQUEvQixLQU5YOztBQVFBLFdBQU9ILEtBQUssQ0FBQ3pmLE1BQWIsRUFBcUI7QUFDbkJvZixNQUFBQSxJQUFJLEdBQUdLLEtBQUssQ0FBQy9HLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQVA7O0FBQ0EsVUFBSWdILE9BQU8sQ0FBQ0csSUFBUixDQUFhVCxJQUFiLENBQUosRUFBd0I7QUFDdEI3TixRQUFBQSxNQUFNLEdBQUdrTyxLQUFLLENBQUMvRyxNQUFOLENBQWEsQ0FBYixFQUFnQmtILElBQUksQ0FBQ1IsSUFBRCxDQUFwQixFQUE0QnpSLEdBQTVCLENBQWdDa00sVUFBaEMsQ0FBVDtBQUNBdkgsUUFBQUEsT0FBTyxHQUFHNk0sVUFBVSxDQUFDclgsTUFBRCxFQUFTc1gsSUFBVCxFQUFlN04sTUFBZixDQUFwQjtBQUNBLFlBQUllLE9BQUosRUFBYTZCLFFBQVEsQ0FBQ3hLLElBQVQsQ0FBYzJJLE9BQWQ7QUFDZDtBQUNGOztBQUVELFdBQU8sSUFBSXhLLE1BQU0sQ0FBQ3VCLFVBQVgsQ0FBc0I4SyxRQUF0QixDQUFQO0FBQ0Q7O0FBRUQvTCxFQUFBQSxNQUFNLENBQUNELE9BQVAsR0FBaUJxWCxXQUFqQjtBQUVEO0FBQU8sQ0E3MERHO0FBODBEVjs7QUFDQTtBQUFPLFVBQVNwWCxNQUFULEVBQWlCRCxPQUFqQixFQUEwQjtBQUloQzs7Ozs7O0FBS0EsV0FBUzJYLGFBQVQsQ0FBdUI3YixDQUF2QixFQUEwQjtBQUN4QjtBQUNBQSxJQUFBQSxDQUFDLEdBQUdBLENBQUMsQ0FBQ2dELE9BQUYsQ0FBVSxJQUFWLEVBQWdCLEdBQWhCO0FBQUEsS0FDSEEsT0FERyxDQUNLLElBREwsRUFDVyxLQURYO0FBQUEsS0FFSEEsT0FGRyxDQUVLLE9BRkwsRUFFYyxHQUZkO0FBQUEsS0FHSEEsT0FIRyxDQUdLLGFBSEwsRUFHb0IsTUFIcEIsQ0FBSixDQUZ3Qjs7QUFReEIsUUFBSThZLFlBQVksR0FBRzliLENBQUMsQ0FBQ2dELE9BQUYsQ0FBVSxnQkFBVixFQUE0QixLQUE1QixFQUFtQ3NKLEtBQW5DLENBQXlDLEdBQXpDLENBQW5CO0FBQUEsUUFDSXlQLGlCQUFpQixHQUFHRCxZQUFZLENBQUMvZixNQURyQztBQUFBLFFBRUlGLENBRko7QUFBQSxRQUdJbWdCLFdBSEo7QUFBQSxRQUlJQyxFQUpKO0FBQUEsUUFLSUMsR0FMSjtBQUFBLFFBTUk1VyxJQUFJLEdBQUcsRUFOWDtBQUFBLFFBT0k2SixJQVBKO0FBQUEsUUFRSS9TLENBUko7QUFBQSxRQVNJK2YsRUFBRSxHQUFHLENBVFQ7QUFBQSxRQVVJQyxFQUFFLEdBQUcsQ0FWVDtBQUFBLFFBV0kvZixDQUFDLEdBQUcsQ0FYUjtBQUFBLFFBWUlULENBQUMsR0FBRyxDQVpSO0FBQUEsUUFhSXlnQixFQUFFLEdBQUcsQ0FiVDtBQUFBLFFBY0lDLEVBQUUsR0FBRyxDQWRUO0FBQUEsUUFlSUMsR0FBRyxHQUFHLENBZlY7QUFBQSxRQWdCSUMsR0FBRyxHQUFHLENBaEJWO0FBQUEsUUFpQklDLFVBQVUsR0FBRyxFQWpCakIsQ0FSd0I7QUE0QnhCO0FBQ0E7O0FBQ0EsU0FBSzVnQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdrZ0IsaUJBQWhCLEVBQW1DbGdCLENBQUMsRUFBcEMsRUFBd0M7QUFDdEM7QUFDQW1nQixNQUFBQSxXQUFXLEdBQUdGLFlBQVksQ0FBQ2pnQixDQUFELENBQTFCO0FBQ0FvZ0IsTUFBQUEsRUFBRSxHQUFHRCxXQUFXLENBQUNuRyxTQUFaLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBQUw7QUFDQXFHLE1BQUFBLEdBQUcsR0FBR0QsRUFBRSxDQUFDUyxXQUFILEVBQU4sQ0FKc0M7QUFPdEM7O0FBQ0FwWCxNQUFBQSxJQUFJLEdBQUcwVyxXQUFXLENBQUNoWixPQUFaLENBQW9CaVosRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEJVLElBQTVCLEdBQW1DclEsS0FBbkMsQ0FBeUMsR0FBekMsQ0FBUDtBQUNBaEgsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUM0SCxNQUFMLENBQVksVUFBVUgsQ0FBVixFQUFhO0FBQzlCLGVBQU9BLENBQUMsS0FBSyxFQUFiO0FBQ0QsT0FGTSxFQUVKckQsR0FGSSxDQUVBa00sVUFGQSxDQUFQO0FBR0F6RyxNQUFBQSxJQUFJLEdBQUc3SixJQUFJLENBQUN2SixNQUFaLENBWnNDO0FBZXRDO0FBQ0E7QUFFQTs7QUFDQSxVQUFJbWdCLEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQ2ZPLFFBQUFBLFVBQVUsSUFBSSxJQUFkOztBQUNBLFlBQUlSLEVBQUUsS0FBSyxHQUFYLEVBQWdCO0FBQ2Q1ZixVQUFBQSxDQUFDLElBQUlpSixJQUFJLENBQUMsQ0FBRCxDQUFUO0FBQ0ExSixVQUFBQSxDQUFDLElBQUkwSixJQUFJLENBQUMsQ0FBRCxDQUFUO0FBQ0QsU0FIRCxNQUdPO0FBQ0xqSixVQUFBQSxDQUFDLEdBQUdpSixJQUFJLENBQUMsQ0FBRCxDQUFSO0FBQ0ExSixVQUFBQSxDQUFDLEdBQUcwSixJQUFJLENBQUMsQ0FBRCxDQUFSO0FBQ0QsU0FSYztBQVVmOzs7QUFDQTZXLFFBQUFBLEVBQUUsR0FBRzlmLENBQUw7QUFDQStmLFFBQUFBLEVBQUUsR0FBR3hnQixDQUFMO0FBQ0E2Z0IsUUFBQUEsVUFBVSxJQUFJcGdCLENBQUMsR0FBRyxHQUFKLEdBQVVULENBQVYsR0FBYyxHQUE1Qjs7QUFDQSxZQUFJdVQsSUFBSSxHQUFHLENBQVgsRUFBYztBQUNaLGVBQUsvUyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcrUyxJQUFoQixFQUFzQi9TLENBQUMsSUFBSSxDQUEzQixFQUE4QjtBQUM1QixnQkFBSTZmLEVBQUUsS0FBSyxHQUFYLEVBQWdCO0FBQ2Q1ZixjQUFBQSxDQUFDLElBQUlpSixJQUFJLENBQUNsSixDQUFELENBQVQ7QUFDQVIsY0FBQUEsQ0FBQyxJQUFJMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBVDtBQUNELGFBSEQsTUFHTztBQUNMQyxjQUFBQSxDQUFDLEdBQUdpSixJQUFJLENBQUNsSixDQUFELENBQVI7QUFDQVIsY0FBQUEsQ0FBQyxHQUFHMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBUjtBQUNEOztBQUNEcWdCLFlBQUFBLFVBQVUsSUFBSSxDQUFDLEdBQUQsRUFBTXBnQixDQUFOLEVBQVNULENBQVQsRUFBWSxFQUFaLEVBQWdCc04sSUFBaEIsQ0FBcUIsR0FBckIsQ0FBZDtBQUNEO0FBQ0Y7QUFDRixPQTFCRCxNQTBCTyxJQUFJZ1QsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDdEI7QUFDQSxhQUFLOWYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHK1MsSUFBaEIsRUFBc0IvUyxDQUFDLElBQUksQ0FBM0IsRUFBOEI7QUFDNUIsY0FBSTZmLEVBQUUsS0FBSyxHQUFYLEVBQWdCO0FBQ2Q1ZixZQUFBQSxDQUFDLElBQUlpSixJQUFJLENBQUNsSixDQUFELENBQVQ7QUFDQVIsWUFBQUEsQ0FBQyxJQUFJMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBVDtBQUNELFdBSEQsTUFHTztBQUNMQyxZQUFBQSxDQUFDLEdBQUdpSixJQUFJLENBQUNsSixDQUFELENBQVI7QUFDQVIsWUFBQUEsQ0FBQyxHQUFHMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBUjtBQUNEOztBQUNEcWdCLFVBQUFBLFVBQVUsSUFBSSxDQUFDLEdBQUQsRUFBTXBnQixDQUFOLEVBQVNULENBQVQsRUFBWSxFQUFaLEVBQWdCc04sSUFBaEIsQ0FBcUIsR0FBckIsQ0FBZDtBQUNEO0FBQ0YsT0FaTSxNQVlBLElBQUlnVCxHQUFHLEtBQUssR0FBWixFQUFpQjtBQUN0QixhQUFLOWYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHK1MsSUFBaEIsRUFBc0IvUyxDQUFDLEVBQXZCLEVBQTJCO0FBQ3pCLGNBQUk2ZixFQUFFLEtBQUssR0FBWCxFQUFnQjtBQUNkNWYsWUFBQUEsQ0FBQyxJQUFJaUosSUFBSSxDQUFDbEosQ0FBRCxDQUFUO0FBQ0QsV0FGRCxNQUVPO0FBQ0xDLFlBQUFBLENBQUMsR0FBR2lKLElBQUksQ0FBQ2xKLENBQUQsQ0FBUjtBQUNEOztBQUNEcWdCLFVBQUFBLFVBQVUsSUFBSSxDQUFDLEdBQUQsRUFBTXBnQixDQUFOLEVBQVNULENBQVQsRUFBWSxFQUFaLEVBQWdCc04sSUFBaEIsQ0FBcUIsR0FBckIsQ0FBZDtBQUNEO0FBQ0YsT0FUTSxNQVNBLElBQUlnVCxHQUFHLEtBQUssR0FBWixFQUFpQjtBQUN0QixhQUFLOWYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHK1MsSUFBaEIsRUFBc0IvUyxDQUFDLEVBQXZCLEVBQTJCO0FBQ3pCLGNBQUk2ZixFQUFFLEtBQUssR0FBWCxFQUFnQjtBQUNkcmdCLFlBQUFBLENBQUMsSUFBSTBKLElBQUksQ0FBQ2xKLENBQUQsQ0FBVDtBQUNELFdBRkQsTUFFTztBQUNMUixZQUFBQSxDQUFDLEdBQUcwSixJQUFJLENBQUNsSixDQUFELENBQVI7QUFDRDs7QUFDRHFnQixVQUFBQSxVQUFVLElBQUksQ0FBQyxHQUFELEVBQU1wZ0IsQ0FBTixFQUFTVCxDQUFULEVBQVksRUFBWixFQUFnQnNOLElBQWhCLENBQXFCLEdBQXJCLENBQWQ7QUFDRDtBQUNGLE9BVE0sTUFTQSxJQUFJZ1QsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDdEI7QUFDQSxhQUFLOWYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHK1MsSUFBaEIsRUFBc0IvUyxDQUFDLElBQUksQ0FBM0IsRUFBOEI7QUFDNUIsY0FBSTZmLEVBQUUsS0FBSyxHQUFYLEVBQWdCO0FBQ2RJLFlBQUFBLEVBQUUsR0FBR2hnQixDQUFDLEdBQUdpSixJQUFJLENBQUNsSixDQUFELENBQWI7QUFDQWtnQixZQUFBQSxFQUFFLEdBQUcxZ0IsQ0FBQyxHQUFHMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBYjtBQUNBQyxZQUFBQSxDQUFDLElBQUlpSixJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFUO0FBQ0FSLFlBQUFBLENBQUMsSUFBSTBKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVQ7QUFDRCxXQUxELE1BS087QUFDTGlnQixZQUFBQSxFQUFFLEdBQUcvVyxJQUFJLENBQUNsSixDQUFELENBQVQ7QUFDQWtnQixZQUFBQSxFQUFFLEdBQUdoWCxJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFUO0FBQ0FDLFlBQUFBLENBQUMsR0FBR2lKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVI7QUFDQVIsWUFBQUEsQ0FBQyxHQUFHMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBUjtBQUNEOztBQUNEcWdCLFVBQUFBLFVBQVUsSUFBSSxDQUFDLEdBQUQsRUFBTUosRUFBTixFQUFVQyxFQUFWLEVBQWNqZ0IsQ0FBZCxFQUFpQlQsQ0FBakIsRUFBb0IsRUFBcEIsRUFBd0JzTixJQUF4QixDQUE2QixHQUE3QixDQUFkO0FBQ0Q7QUFDRixPQWhCTSxNQWdCQSxJQUFJZ1QsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDdEIsYUFBSzlmLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRytTLElBQWhCLEVBQXNCL1MsQ0FBQyxJQUFJLENBQTNCLEVBQThCO0FBQzVCO0FBQ0FpZ0IsVUFBQUEsRUFBRSxHQUFHaGdCLENBQUMsSUFBSUEsQ0FBQyxHQUFHZ2dCLEVBQVIsQ0FBTjtBQUNBQyxVQUFBQSxFQUFFLEdBQUcxZ0IsQ0FBQyxJQUFJQSxDQUFDLEdBQUcwZ0IsRUFBUixDQUFOLENBSDRCOztBQUs1QixjQUFJTCxFQUFFLEtBQUssR0FBWCxFQUFnQjtBQUNkNWYsWUFBQUEsQ0FBQyxJQUFJaUosSUFBSSxDQUFDbEosQ0FBRCxDQUFUO0FBQ0FSLFlBQUFBLENBQUMsSUFBSTBKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVQ7QUFDRCxXQUhELE1BR087QUFDTEMsWUFBQUEsQ0FBQyxHQUFHaUosSUFBSSxDQUFDbEosQ0FBRCxDQUFSO0FBQ0FSLFlBQUFBLENBQUMsR0FBRzBKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVI7QUFDRDs7QUFDRHFnQixVQUFBQSxVQUFVLElBQUksQ0FBQyxHQUFELEVBQU1KLEVBQU4sRUFBVUMsRUFBVixFQUFjamdCLENBQWQsRUFBaUJULENBQWpCLEVBQW9CLEVBQXBCLEVBQXdCc04sSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBZDtBQUNEO0FBQ0YsT0FmTSxNQWVBLElBQUlnVCxHQUFHLEtBQUssR0FBWixFQUFpQjtBQUN0QjtBQUNBLGFBQUs5ZixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcrUyxJQUFoQixFQUFzQi9TLENBQUMsSUFBSSxDQUEzQixFQUE4QjtBQUM1QixjQUFJNmYsRUFBRSxLQUFLLEdBQVgsRUFBZ0I7QUFDZEksWUFBQUEsRUFBRSxHQUFHaGdCLENBQUMsR0FBR2lKLElBQUksQ0FBQ2xKLENBQUQsQ0FBYjtBQUNBa2dCLFlBQUFBLEVBQUUsR0FBRzFnQixDQUFDLEdBQUcwSixJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFiO0FBQ0FtZ0IsWUFBQUEsR0FBRyxHQUFHbGdCLENBQUMsR0FBR2lKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQWQ7QUFDQW9nQixZQUFBQSxHQUFHLEdBQUc1Z0IsQ0FBQyxHQUFHMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBZDtBQUNBQyxZQUFBQSxDQUFDLElBQUlpSixJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFUO0FBQ0FSLFlBQUFBLENBQUMsSUFBSTBKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVQ7QUFDRCxXQVBELE1BT087QUFDTGlnQixZQUFBQSxFQUFFLEdBQUcvVyxJQUFJLENBQUNsSixDQUFELENBQVQ7QUFDQWtnQixZQUFBQSxFQUFFLEdBQUdoWCxJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFUO0FBQ0FtZ0IsWUFBQUEsR0FBRyxHQUFHalgsSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBVjtBQUNBb2dCLFlBQUFBLEdBQUcsR0FBR2xYLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVY7QUFDQUMsWUFBQUEsQ0FBQyxHQUFHaUosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBUjtBQUNBUixZQUFBQSxDQUFDLEdBQUcwSixJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFSO0FBQ0Q7O0FBQ0RxZ0IsVUFBQUEsVUFBVSxJQUFJLENBQUMsR0FBRCxFQUFNSixFQUFOLEVBQVVDLEVBQVYsRUFBY0MsR0FBZCxFQUFtQkMsR0FBbkIsRUFBd0JuZ0IsQ0FBeEIsRUFBMkJULENBQTNCLEVBQThCLEVBQTlCLEVBQWtDc04sSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBZDtBQUNEO0FBQ0YsT0FwQk0sTUFvQkEsSUFBSWdULEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQ3RCLGFBQUs5ZixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcrUyxJQUFoQixFQUFzQi9TLENBQUMsSUFBSSxDQUEzQixFQUE4QjtBQUM1QjtBQUNBaWdCLFVBQUFBLEVBQUUsR0FBR2hnQixDQUFDLElBQUlBLENBQUMsR0FBR2tnQixHQUFSLENBQU47QUFDQUQsVUFBQUEsRUFBRSxHQUFHMWdCLENBQUMsSUFBSUEsQ0FBQyxHQUFHNGdCLEdBQVIsQ0FBTixDQUg0Qjs7QUFLNUIsY0FBSVAsRUFBRSxLQUFLLEdBQVgsRUFBZ0I7QUFDZE0sWUFBQUEsR0FBRyxHQUFHbGdCLENBQUMsR0FBR2lKLElBQUksQ0FBQ2xKLENBQUQsQ0FBZDtBQUNBb2dCLFlBQUFBLEdBQUcsR0FBRzVnQixDQUFDLEdBQUcwSixJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFkO0FBQ0FDLFlBQUFBLENBQUMsSUFBSWlKLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVQ7QUFDQVIsWUFBQUEsQ0FBQyxJQUFJMEosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBVDtBQUNELFdBTEQsTUFLTztBQUNMbWdCLFlBQUFBLEdBQUcsR0FBR2pYLElBQUksQ0FBQ2xKLENBQUQsQ0FBVjtBQUNBb2dCLFlBQUFBLEdBQUcsR0FBR2xYLElBQUksQ0FBQ2xKLENBQUMsR0FBRyxDQUFMLENBQVY7QUFDQUMsWUFBQUEsQ0FBQyxHQUFHaUosSUFBSSxDQUFDbEosQ0FBQyxHQUFHLENBQUwsQ0FBUjtBQUNBUixZQUFBQSxDQUFDLEdBQUcwSixJQUFJLENBQUNsSixDQUFDLEdBQUcsQ0FBTCxDQUFSO0FBQ0Q7O0FBQ0RxZ0IsVUFBQUEsVUFBVSxJQUFJLENBQUMsR0FBRCxFQUFNSixFQUFOLEVBQVVDLEVBQVYsRUFBY0MsR0FBZCxFQUFtQkMsR0FBbkIsRUFBd0JuZ0IsQ0FBeEIsRUFBMkJULENBQTNCLEVBQThCLEVBQTlCLEVBQWtDc04sSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBZDtBQUNEO0FBQ0YsT0FuQk0sTUFtQkEsSUFBSWdULEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQ3RCTyxRQUFBQSxVQUFVLElBQUksSUFBZCxDQURzQjs7QUFHdEJwZ0IsUUFBQUEsQ0FBQyxHQUFHOGYsRUFBSjtBQUNBdmdCLFFBQUFBLENBQUMsR0FBR3dnQixFQUFKO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPSyxVQUFVLENBQUNFLElBQVgsRUFBUDtBQUNEOztBQUVEeFksRUFBQUEsTUFBTSxDQUFDRCxPQUFQLEdBQWlCMlgsYUFBakI7QUFFRDtBQUFPO0FBQ1A7QUFwaEVVLENBMUNELENBRFQ7O0FDSUEsU0FBU2UsVUFBVCxDQUFvQnZnQixDQUFwQixFQUF1QlQsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBU2loQixRQUFULENBQWtCemdCLENBQWxCLEVBQXFCSyxDQUFyQixFQUF3QjtBQUFFLFdBQU9MLENBQUMsR0FBR0ssQ0FBWDtBQUFlOztBQUN6QyxXQUFTcWdCLFVBQVQsQ0FBb0IxZ0IsQ0FBcEIsRUFBdUJQLENBQXZCLEVBQTBCO0FBQUUsV0FBT1EsQ0FBQyxDQUFDUixDQUFELENBQUQsR0FBT0QsQ0FBQyxDQUFDQyxDQUFELENBQWY7QUFBcUI7O0FBQ2pELE1BQUlRLENBQUMsQ0FBQ04sTUFBRixJQUFZSCxDQUFDLENBQUNHLE1BQWxCLEVBQTBCLE1BQU0sdURBQU47QUFDMUIsU0FBT00sQ0FBQyxDQUFDcU4sR0FBRixDQUFNb1QsVUFBTixFQUFrQi9PLE1BQWxCLENBQXlCOE8sUUFBekIsRUFBbUMsQ0FBbkMsQ0FBUDtBQUNEOzs7QUFHRCxJQUFJRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQVV2WCxLQUFWO0FBQUEsU0FBb0JBLEtBQXBCO0FBQUEsQ0FBaEI7O0FBRUF3WCxxQkFBcUIsR0FBRywrQkFBQ2hjLEdBQUQsRUFBTUMsR0FBTixFQUFXVyxHQUFYO0FBQUEsU0FBbUJ0QixPQUFPLENBQUMyYyxlQUFSLENBQXdCamMsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDVyxHQUFsQyxDQUFuQjtBQUFBLENBQXhCOztBQUVBc2IsaUJBQWlCLEdBQUcsMkJBQUNoYyxFQUFELEVBQUtDLEVBQUwsRUFBU2djLE9BQVQsRUFBcUI7QUFDdkMsTUFBTS9nQixDQUFDLEdBQUcsQ0FBQytFLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUQsRUFBRSxDQUFDLENBQUQsQ0FBWCxJQUFrQmljLE9BQWxCLEdBQTRCamMsRUFBRSxDQUFDLENBQUQsQ0FBeEM7QUFDQSxNQUFNdkYsQ0FBQyxHQUFHLENBQUN3RixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFELEVBQUUsQ0FBQyxDQUFELENBQVgsSUFBa0JpYyxPQUFsQixHQUE0QmpjLEVBQUUsQ0FBQyxDQUFELENBQXhDO0FBQ0EsTUFBTTdFLENBQUMsR0FBRyxDQUFDOEUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRCxFQUFFLENBQUMsQ0FBRCxDQUFYLElBQWtCaWMsT0FBbEIsR0FBNEJqYyxFQUFFLENBQUMsQ0FBRCxDQUF4QztBQUNBLFNBQU8sQ0FBQzlFLENBQUQsRUFBSVQsQ0FBSixFQUFPVSxDQUFQLENBQVA7QUFDRCxDQUxEOztBQU9BK2dCLHFCQUFxQixHQUFHLCtCQUFDL2UsQ0FBRCxFQUFJZ2YsRUFBSixFQUFXO0FBQ2pDLE1BQU1DLEVBQUUsWUFBSSxJQUFJamYsQ0FBUixFQUFjLENBQWQsQ0FBUjtBQUNBLE1BQU1vYixFQUFFLEdBQUcsSUFBSXBiLENBQUosWUFBUyxJQUFJQSxDQUFiLEVBQW1CLENBQW5CLENBQVg7QUFDQSxNQUFNcWIsRUFBRSxHQUFHLEtBQUssSUFBSXJiLENBQVQsYUFBY0EsQ0FBZCxFQUFtQixDQUFuQixDQUFYO0FBQ0EsTUFBTWtmLEVBQUUsWUFBR2xmLENBQUgsRUFBUSxDQUFSLENBQVI7QUFFQSxTQUFRaWYsRUFBRSxHQUFHRCxFQUFFLENBQUMsQ0FBRCxDQUFSLEdBQWdCNUQsRUFBRSxHQUFHNEQsRUFBRSxDQUFDLENBQUQsQ0FBdkIsR0FBK0IzRCxFQUFFLEdBQUcyRCxFQUFFLENBQUMsQ0FBRCxDQUF0QyxHQUE4Q0UsRUFBRSxHQUFHRixFQUFFLENBQUMsQ0FBRCxDQUE1RDtBQUNELENBUEQ7O0FBU0FHLHNCQUFzQixHQUFHLGdDQUFDckssS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBR3ZDLE1BQU1sUyxFQUFFLEdBQUdaLE9BQU8sQ0FBQzJjLGVBQVIsQ0FBd0I5SixLQUFLLENBQUMsQ0FBRCxDQUE3QixFQUFrQ0EsS0FBSyxDQUFDLENBQUQsQ0FBdkMsRUFBNEMsR0FBNUMsQ0FBWDtBQUNBLE1BQU0zTCxFQUFFLEdBQUdsSCxPQUFPLENBQUMyYyxlQUFSLENBQXdCN0osR0FBRyxDQUFDLENBQUQsQ0FBM0IsRUFBZ0NBLEdBQUcsQ0FBQyxDQUFELENBQW5DLEVBQXdDLEdBQXhDLENBQVg7QUFDQSxNQUFNcUssVUFBVSxHQUFJLE1BQU8sQ0FBQ2QsVUFBVSxDQUFDemIsRUFBRCxFQUFLc0csRUFBTCxDQUFWLEdBQXFCLEdBQXRCLElBQTZCLEdBQXhEO0FBQ0EsTUFBTTVGLEdBQUcsR0FBRyxNQUFNLE1BQU02YixVQUF4QjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWS9iLEdBQVo7QUFFQSxNQUFNZ2MsRUFBRSxHQUFHdGQsT0FBTyxDQUFDMmMsZUFBUixDQUF3QjlKLEtBQUssQ0FBQyxDQUFELENBQTdCLEVBQWtDQSxLQUFLLENBQUMsQ0FBRCxDQUF2QyxFQUE0Q3ZSLEdBQTVDLENBQVg7QUFDQSxNQUFNaWMsRUFBRSxHQUFHdmQsT0FBTyxDQUFDMmMsZUFBUixDQUF3QjdKLEdBQUcsQ0FBQyxDQUFELENBQTNCLEVBQWdDQSxHQUFHLENBQUMsQ0FBRCxDQUFuQyxFQUF3Q3hSLEdBQXhDLENBQVg7QUFDQSxNQUFNVCxFQUFFLEdBQUcrYixpQkFBaUIsQ0FBQ1UsRUFBRCxFQUFLQyxFQUFMLEVBQVMsT0FBUSxTQUFBSixVQUFVLEVBQUksR0FBSixDQUFWLEdBQW9CLEdBQXJDLENBQTVCO0FBQ0EsTUFBTXBYLEVBQUUsR0FBRzZXLGlCQUFpQixDQUFDVSxFQUFELEVBQUtDLEVBQUwsRUFBUyxPQUFRLFNBQUFKLFVBQVUsRUFBSSxHQUFKLENBQVYsR0FBb0IsR0FBckMsQ0FBNUI7QUFFQSxNQUFNSixFQUFFLEdBQUcsRUFBWDtBQUNBQSxFQUFBQSxFQUFFLENBQUM1WCxJQUFILE9BQUE0WCxFQUFFLHFCQUFTbmMsRUFBVCxFQUFGO0FBQ0FtYyxFQUFBQSxFQUFFLENBQUM1WCxJQUFILE9BQUE0WCxFQUFFLHFCQUFTbGMsRUFBVCxFQUFGO0FBQ0FrYyxFQUFBQSxFQUFFLENBQUM1WCxJQUFILE9BQUE0WCxFQUFFLHFCQUFTaFgsRUFBVCxFQUFGO0FBQ0FnWCxFQUFBQSxFQUFFLENBQUM1WCxJQUFILE9BQUE0WCxFQUFFLHFCQUFTN1YsRUFBVCxFQUFGO0FBRUEsTUFBTXNXLEdBQUcsR0FBR1osaUJBQWlCLENBQUNVLEVBQUQsRUFBS0MsRUFBTCxFQUFTLEdBQVQsQ0FBN0I7QUFDQSxNQUFNRSxFQUFFLEdBQUc7QUFBRTNoQixJQUFBQSxDQUFDLEVBQUU4RSxFQUFFLENBQUMsQ0FBRCxDQUFQO0FBQVl2RixJQUFBQSxDQUFDLEVBQUV1RixFQUFFLENBQUMsQ0FBRCxDQUFqQjtBQUFzQjdFLElBQUFBLENBQUMsRUFBRTZFLEVBQUUsQ0FBQyxDQUFEO0FBQTNCLEdBQVg7QUFDQSxNQUFNcVEsRUFBRSxHQUFHO0FBQUVuVixJQUFBQSxDQUFDLEVBQUUwaEIsR0FBRyxDQUFDLENBQUQsQ0FBUjtBQUFhbmlCLElBQUFBLENBQUMsRUFBRW1pQixHQUFHLENBQUMsQ0FBRCxDQUFuQjtBQUF3QnpoQixJQUFBQSxDQUFDLEVBQUV5aEIsR0FBRyxDQUFDLENBQUQ7QUFBOUIsR0FBWDtBQUNBLE1BQU10TSxFQUFFLEdBQUc7QUFBRXBWLElBQUFBLENBQUMsRUFBRW9MLEVBQUUsQ0FBQyxDQUFELENBQVA7QUFBWTdMLElBQUFBLENBQUMsRUFBRTZMLEVBQUUsQ0FBQyxDQUFELENBQWpCO0FBQXNCbkwsSUFBQUEsQ0FBQyxFQUFFbUwsRUFBRSxDQUFDLENBQUQ7QUFBM0IsR0FBWDtBQUNBa1csRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLEVBQVosRUFBZ0J4TSxFQUFoQixFQUFvQkMsRUFBcEI7QUFDQSxNQUFNaFYsQ0FBQyxHQUFHb0gsTUFBTSxDQUFDOEQsZUFBUCxDQUF1QnFXLEVBQXZCLEVBQTJCeE0sRUFBM0IsRUFBK0JDLEVBQS9CLEVBQW1DLEdBQW5DLENBQVYsQ0F6QnVDOztBQTRCdkMsTUFBTWxOLENBQUMsR0FBRzlILENBQUMsQ0FBQzBOLE1BQUYsQ0FBUyxHQUFULENBQVY7QUFDQSxNQUFNckUsTUFBTSxHQUFHLEVBQWY7QUFDQXZCLEVBQUFBLENBQUMsQ0FBQ2xILE9BQUYsQ0FBVSxVQUFDb0ksS0FBRCxFQUFXO0FBQ25CSyxJQUFBQSxNQUFNLENBQUNKLElBQVAsT0FBQUksTUFBTSxxQkFBU21ZLE1BQU0sQ0FBQzNRLE1BQVAsQ0FBYzdILEtBQWQsQ0FBVCxFQUFOO0FBQ0QsR0FGRDtBQUlBLFNBQU9LLE1BQVA7QUFDRCxDQW5DRDs7QUFxQ0FvWSxTQUFTLEdBQUcsbUJBQUN0YixDQUFELEVBQU87QUFBQSxNQUNUdWIsSUFEUyxHQUNBdmIsQ0FBQyxDQUFDdWIsSUFERixDQUNUQSxJQURTO0FBQUEsTUFFVEMsSUFGUyxHQUVBeGIsQ0FBQyxDQUFDdWIsSUFGRixDQUVUQyxJQUZTOztBQUlqQixNQUFJeGIsQ0FBQyxDQUFDdWIsSUFBRixDQUFPcEIsU0FBUCxLQUFxQmxhLFNBQXpCLEVBQW9DO0FBQ2xDLFFBQUk7QUFDRndiLE1BQUFBLGFBQWEsQ0FBQ3piLENBQUMsQ0FBQ3ViLElBQUYsQ0FBT3BCLFNBQVIsQ0FBYjtBQUNELEtBRkQsQ0FFRSxPQUFPeFMsS0FBUCxFQUFjO0FBQ2RvVCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXJULEtBQVo7QUFDRDtBQUNGOztBQUVELE1BQUk2VCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQixRQUFNRSxRQUFRLEdBQUcsRUFBakI7QUFDQUEsSUFBQUEsUUFBUSxDQUFDQyxRQUFULEdBQW9CO0FBQUVDLE1BQUFBLGFBQWEsRUFBRSxDQUFqQjtBQUFvQkwsTUFBQUEsSUFBSSxFQUFFO0FBQTFCLEtBQXBCO0FBQ0FHLElBQUFBLFFBQVEsQ0FBQ0csS0FBVCxHQUFpQjtBQUFFRCxNQUFBQSxhQUFhLEVBQUUsQ0FBakI7QUFBb0JMLE1BQUFBLElBQUksRUFBRTtBQUExQixLQUFqQjtBQUNBRyxJQUFBQSxRQUFRLENBQUNwSCxJQUFULEdBQWdCO0FBQUVzSCxNQUFBQSxhQUFhLEVBQUUsQ0FBakI7QUFBb0JMLE1BQUFBLElBQUksRUFBRTtBQUExQixLQUFoQjtBQUNBRyxJQUFBQSxRQUFRLENBQUNJLE9BQVQsR0FBbUI7QUFBRUYsTUFBQUEsYUFBYSxFQUFFLENBQWpCO0FBQW9CTCxNQUFBQSxJQUFJLEVBQUU7QUFBMUIsS0FBbkI7QUFFQUEsSUFBQUEsSUFBSSxDQUFDOWdCLE9BQUwsQ0FBYSxVQUFDMmYsT0FBRCxFQUFVMkIsS0FBVixFQUFvQjtBQUFBOztBQUMvQjtBQUNBLFVBQUlsWixLQUFLLEdBQUc7QUFDVnhFLFFBQUFBLEdBQUcsRUFBRStiLE9BQU8sQ0FBQy9iLEdBREg7QUFFVkMsUUFBQUEsR0FBRyxFQUFFOGIsT0FBTyxDQUFDOWIsR0FGSDtBQUdWdWQsUUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBSEc7QUFJVnZILFFBQUFBLElBQUksRUFBRTtBQUpJLE9BQVosQ0FGK0I7O0FBVS9CelIsTUFBQUEsS0FBSyxHQUFHc1gsU0FBUyxDQUFDQyxPQUFELEVBQVV2WCxLQUFWLENBQWpCO0FBRUFBLE1BQUFBLEtBQUssQ0FBQ0osTUFBTixHQUFlNFgscUJBQXFCLENBQUN4WCxLQUFLLENBQUN4RSxHQUFQLEVBQVl3RSxLQUFLLENBQUN2RSxHQUFsQixFQUF1QnVFLEtBQUssQ0FBQzVELEdBQTdCLENBQXBDOztBQUNBLCtCQUFBeWMsUUFBUSxDQUFDQyxRQUFULENBQWtCSixJQUFsQixFQUF1QnpZLElBQXZCLGlEQUErQkQsS0FBSyxDQUFDSixNQUFyQzs7QUFDQSw4QkFBQWlaLFFBQVEsQ0FBQ0csS0FBVCxDQUFlTixJQUFmLEVBQW9CelksSUFBcEIsZ0RBQTRCRCxLQUFLLENBQUNnWixLQUFsQzs7QUFDQUgsTUFBQUEsUUFBUSxDQUFDcEgsSUFBVCxDQUFjaUgsSUFBZCxDQUFtQnpZLElBQW5CLENBQXdCRCxLQUFLLENBQUN5UixJQUE5QjtBQUNBb0gsTUFBQUEsUUFBUSxDQUFDSSxPQUFULENBQWlCUCxJQUFqQixDQUFzQnpZLElBQXRCLENBQTJCaVosS0FBM0I7QUFDRCxLQWpCRDtBQW1CQUMsSUFBQUEsV0FBVyxDQUFDTixRQUFELENBQVg7QUFDRCxHQTNCRCxNQTJCTyxJQUFJRixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQlQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCTyxJQUE1QjtBQUNBQSxJQUFBQSxJQUFJLENBQUM5Z0IsT0FBTCxDQUFhLFVBQUNxRixFQUFEO0FBQUEsYUFBUWliLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbGIsRUFBWixDQUFSO0FBQUEsS0FBYjtBQUNELEdBSk0sTUFJQSxJQUFJMGIsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDekIsUUFBTUUsU0FBUSxHQUFHLEVBQWpCO0FBQ0FBLElBQUFBLFNBQVEsQ0FBQ0MsUUFBVCxHQUFvQjtBQUFFQyxNQUFBQSxhQUFhLEVBQUUsQ0FBakI7QUFBb0JMLE1BQUFBLElBQUksRUFBRTtBQUExQixLQUFwQjtBQUVBQSxJQUFBQSxJQUFJLENBQUM5Z0IsT0FBTCxDQUFhLFVBQUNxRixFQUFELEVBQVE7QUFBQTs7QUFDbkIsVUFBTW1jLE9BQU8sR0FBR3BCLHNCQUFzQixDQUFDL2EsRUFBRSxDQUFDb2MsSUFBSixFQUFVcGMsRUFBRSxDQUFDcWMsRUFBYixDQUF0Qzs7QUFDQSxnQ0FBQVQsU0FBUSxDQUFDQyxRQUFULENBQWtCSixJQUFsQixFQUF1QnpZLElBQXZCLGtEQUErQm1aLE9BQS9CO0FBQ0QsS0FIRDtBQUtBRCxJQUFBQSxXQUFXLENBQUNOLFNBQUQsQ0FBWDtBQUNEO0FBQ0YsQ0F0REQifQ==', false);
/* eslint-enable */

var DataGeometryFactory = function DataGeometryFactory() {
  var _this = this;

  _classCallCheck(this, DataGeometryFactory);

  _defineProperty(this, "blobURL", void 0);

  _defineProperty(this, "transform", void 0);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "worker", void 0);

  _defineProperty(this, "isRunning", false);

  _defineProperty(this, "createGeometry", function (type, data, transform, cb) {
    _this.isRunning = true;
    _this.worker = new WorkerFactory();

    _this.worker.onmessage = function (e) {
      if (cb !== undefined) {
        cb(e.data);
      } // this.cleanup();


      _this.isRunning = false;
    };

    var blob = new Blob([transform.toString()]); // Obtain a blob URL reference to our worker 'file'.

    _this.blobURL = window.URL.createObjectURL(blob);

    _this.worker.postMessage({
      data: data,
      transform: _this.blobURL,
      type: type
    });
  });

  _defineProperty(this, "cleanup", function () {
    _this.worker.terminate();

    _this.worker = undefined;
  });
};

var vert$2 = "#define GLSLIFY 1\nattribute vec4 position;attribute vec4 color;attribute float size;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec4 v_color;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=size;gl_Position=pos;v_color=color;}"; // eslint-disable-line

var frag$2 = "precision mediump float;\n#define GLSLIFY 1\nvarying vec4 v_color;void main(){gl_FragColor=v_color;}"; // eslint-disable-line

var shaders$2 = {
  vertex: vert$2,
  fragment: frag$2
};
var uniforms$2 = {};

var transform = function transform(element, point) {
  console.log('transform', point);
  point.alt = 0.05;
  point.size = 0;
  point.color = GKUtils.hexToRGBA("#ff0000", 1.0);
  return point;
}; // TODO: Verify Callbacks are fuctions


var Points = /*#__PURE__*/function (_DataDrawable) {
  _inherits(Points, _DataDrawable);

  var _super = _createSuper(Points);

  /**
   * @description DataStore object used to compute geometry
   * @memberof Points#
   * @member {DataStore} datastore
   */

  /**
   * @description Max distance nearest neighbor search in km
   * @memberof Points#
   * @member {number} maxSelectionDistance
   * @default 300
   */

  /**
   * @description Max number of nearest neighbors
   * @memberof Points#
   * @member {number} maxSelectionCount
   * @default 1
   */

  /**
   * @description Builds geometry from data
   * @memberof Points#
   * @member {DataGeometryFactory} geometryFactory
   */

  /**
   * @description Have resources been loaded
   * @memberof Points#
   * @member {boolean} _resourceLoaded
   */

  /**
   * @description Has current data been uploaded to webgl context
   * @memberof Points#
   * @member {boolean} _isDirty
   */

  /**
   * @description Has any data been uploaded to webgl context
   * @memberof Points#
   * @member {boolean} _hasGeometry
   */

  /**
   * @description Creates a points object
   * @param {Object} params - Parameters for object
   * @returns {Points}
   */
  function Points(params) {
    var _thisSuper, _this;

    _classCallCheck(this, Points);

    _this = _super.call(this, params);

    _defineProperty(_assertThisInitialized(_this), "datastore", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxSelectionDistance", 300);

    _defineProperty(_assertThisInitialized(_this), "maxSelectionCount", 1);

    _defineProperty(_assertThisInitialized(_this), "maxDataPoints", 10);

    _defineProperty(_assertThisInitialized(_this), "dataPointCount", 0);

    _defineProperty(_assertThisInitialized(_this), "geoFactory", void 0);

    _defineProperty(_assertThisInitialized(_this), "_resourceLoaded", false);

    _defineProperty(_assertThisInitialized(_this), "_isDirty", true);

    _defineProperty(_assertThisInitialized(_this), "_hasGeometry", false);

    _defineProperty(_assertThisInitialized(_this), "createEmptyVertices", function () {
      _this.geometry.vertices.position = {
        numComponents: 3,
        data: new Array(_this.maxDataPoints * 3).fill(0)
      };
      _this.geometry.vertices.color = {
        numComponents: 4,
        data: new Array(_this.maxDataPoints * 4).fill(0)
      };
      _this.geometry.vertices.size = {
        numComponents: 1,
        data: new Array(_this.maxDataPoints * 1).fill(0)
      };
      _this.geometry.vertices.indices = {
        numComponents: 1,
        data: Array.from(Array(_this.maxDataPoints * 1).keys())
      };
    });

    _defineProperty(_assertThisInitialized(_this), "extendVerticesBy", function (size) {
      var _this$geometry$vertic, _this$geometry$vertic2, _this$geometry$vertic3;

      (_this$geometry$vertic = _this.geometry.vertices.position.data).push.apply(_this$geometry$vertic, _toConsumableArray(Array(size * 3).fill(0)));

      (_this$geometry$vertic2 = _this.geometry.vertices.color.data).push.apply(_this$geometry$vertic2, _toConsumableArray(Array(size * 4).fill(0)));

      (_this$geometry$vertic3 = _this.geometry.vertices.size.data).push.apply(_this$geometry$vertic3, _toConsumableArray(Array(size * 1).fill(0)));

      var indicesLen = _this.geometry.vertices.indices.data.length;
      _this.geometry.vertices.indices.data = Array.from(Array((indicesLen + size) * 1).keys());
      _this.geometry.needsResize = true;
      _this.maxDataPoints += size;
    });

    _defineProperty(_assertThisInitialized(_this), "init", function (gl) {
      _this.geometry.init(gl);

      _this._hasGeometry = true;

      _this.material.init(gl);

      _this.material.texturesLoaded = true;
    });

    _defineProperty(_assertThisInitialized(_this), "createCollisionGeo", function () {});

    _defineProperty(_assertThisInitialized(_this), "update", function (gl, sceneProps, time) {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Points.prototype)), "update", _thisSuper).call(_thisSuper, sceneProps, time);

      _this.material.uniforms.u_model = _this.modelMatrix;

      if (_this.geometry.needsResize) {
        _this.geometry.reloadBuffers(gl);
      }

      if (_this.geometry.isDirty) {
        _this.geometry.updateBuffers(gl);
      } // if(geometryIsDirty) {
      //   if(this.readyForUpdateCB){
      //     this.readyForUpdateCB();
      //   } else {
      //     updategeometry(gl);
      //   }
      // }

    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (gl) {
      // TODO: Extend isReady to include _hasGeometry
      if (!_this.isReady && !_this._hasGeometry) return;
      if (!_this.dataPointCount === 0) return;
      gl.useProgram(_this.material.programInfo.program);
      setBuffersAndAttributes(gl, _this.material.programInfo, _this.geometry.bufferInfo);
      setUniforms(_this.material.programInfo, _this.material.uniforms);
      gl.drawElements(gl.POINTS, _this.dataPointCount, gl.UNSIGNED_SHORT, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "rayCastFrom", function (ray) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "hitTest", function (ray) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectionCB", function (selection) {
      return selection;
    });

    _defineProperty(_assertThisInitialized(_this), "onSelection", function (lat, lon, collision) {
      var selection = _this.getNearest(lat, lon);

      selection = _this.onSelectionCB(selection);
      return selection;
    });

    _defineProperty(_assertThisInitialized(_this), "addGeojson", function (geojson, cb) {
      if (typeof geojson === 'string') {
        console.warn('This function needs a geojson object at this time');
        return;
      }

      _this.datastore.addGeojson(geojson);

      _this.geoFactory.createGeometry('point', _this.datastore.data, transform, function (geometry) {
        _this.geometry.updateGeometry(geometry, _this.dataPointCount);

        _this.dataPointCount += geojson.features.length;

        if (cb !== undefined) {
          cb();
        }
      }); // DEMO

    });

    _defineProperty(_assertThisInitialized(_this), "addGeoJsonPoint", function (geojsonPoint) {
      var lat = geojsonPoint.geometry.coordinates[1];
      var lon = geojsonPoint.geometry.coordinates[0];
      var props = geojsonPoint.properties;

      _this.addDataPoint(lat, lon, props);
    });

    _defineProperty(_assertThisInitialized(_this), "addDataPoint", function (lat, lon, data) {
      if (_this.dataPointCount + 1 >= _this.maxDataPoints) {
        console.warn('More than ' + _this.maxDataPoints + ' datapoints have been added, Increasing buffer size by: ' + _this.maxDataPoints);

        _this.extendVerticesBy(_this.maxDataPoints);
      }

      var newData = [];
      newData.push(_this.datastore.addPoint(lat, lon, data));

      _this.geoFactory.createGeometry('point', newData, transform, function (geometry) {
        _this.geometry.updateGeometry(geometry, _this.ver);

        _this.dataPointCount += 1; // this.geometry.vertices = geometry;

        console.log("verify", _this.datastore.getTypeList(), _this.datastore.isHomogeneous);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNearest", function (lat, lon) {
      return _this.datastore.getNearest(lat, lon, _this.maxSelectionDistance, _this.maxSelectionCount);
    });

    if (params) {
      if (params.maxSelectionCount) _this.maxSelectionCount = params.maxSelectionCount;
      if (params.maxSelectionDistance) _this.maxSelectionDistance = params.maxSelectionDistance;
      if (params.maxDataPoints) _this.maxDataPoints = params.maxDataPoints;
    }

    _this.material = new ShaderMaterial(shaders$2);
    _this.datastore = new DataStore();
    _this.material.uniforms = uniforms$2;
    _this.geoFactory = new DataGeometryFactory();
    _this.geometry = new Geometry();

    _this.createEmptyVertices();

    return _this;
  }

  return Points;
}(DataDrawable);

var vert$3 = "#define GLSLIFY 1\nattribute vec4 position;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec4 v_color;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=4.0;gl_Position=pos;v_color=vec4(1.0,0.0,0.0,1.0);}"; // eslint-disable-line

var frag$3 = "precision mediump float;\n#define GLSLIFY 1\nvarying vec4 v_color;void main(){gl_FragColor=v_color;}"; // eslint-disable-line

var shaders$3 = {
  vertex: vert$3,
  fragment: frag$3
};
var uniforms$3 = {};

var transform$1 = function transform(element, arc) {
  console.log('arc-transform', element, arc);
  return arc;
}; // TODO: Verify Callbacks are fuctions


var Arcs = /*#__PURE__*/function (_DataDrawable) {
  _inherits(Arcs, _DataDrawable);

  var _super = _createSuper(Arcs);

  /**
   * @description DataStore object used to compute geometry
   * @memberof Points#
   * @member {DataStore} datastore
   */

  /**
   * @description Max distance nearest neighbor search in km
   * @memberof Points#
   * @member {number} maxSelectionDistance
   * @default 300
   */

  /**
   * @description Max number of nearest neighbors
   * @memberof Points#
   * @member {number} maxSelectionCount
   * @default 1
   */

  /**
   * @description Builds geometry from data
   * @memberof Points#
   * @member {DataGeometryFactory} geometryFactory
   */

  /**
   * @description Have resources been loaded
   * @memberof Points#
   * @member {boolean} _resourceLoaded
   */

  /**
   * @description Has current data been uploaded to webgl context
   * @memberof Points#
   * @member {boolean} _isDirty
   */

  /**
   * @description Has any data been uploaded to webgl context
   * @memberof Points#
   * @member {boolean} _hasGeometry
   */

  /**
   * @description Creates a points object
   * @param {Object} params - Parameters for object
   * @returns {Points}
   */
  function Arcs(params) {
    var _thisSuper, _this;

    _classCallCheck(this, Arcs);

    _this = _super.call(this, params);

    _defineProperty(_assertThisInitialized(_this), "datastore", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxSelectionDistance", 300);

    _defineProperty(_assertThisInitialized(_this), "maxSelectionCount", 1);

    _defineProperty(_assertThisInitialized(_this), "maxDataPoints", 10000);

    _defineProperty(_assertThisInitialized(_this), "dataPointCount", void 0);

    _defineProperty(_assertThisInitialized(_this), "arcCount", 0);

    _defineProperty(_assertThisInitialized(_this), "geoFactory", void 0);

    _defineProperty(_assertThisInitialized(_this), "_resourceLoaded", false);

    _defineProperty(_assertThisInitialized(_this), "_isDirty", true);

    _defineProperty(_assertThisInitialized(_this), "_hasGeometry", false);

    _defineProperty(_assertThisInitialized(_this), "createEmptyVertices", function () {
      _this.geometry.vertices.position = {
        numComponents: 3,
        data: new Array(_this.maxDataPoints * 3).fill(0)
      }; // this.geometry.vertices.color = {
      //   numComponents: 4,
      //   data: new Array(this.maxDataPoints * 4).fill(0),
      // };
      // this.geometry.vertices.size = {
      //   numComponents: 1,
      //   data: new Array(this.maxDataPoints * 1).fill(0),
      // };

      _this.geometry.vertices.indices = {
        numComponents: 1,
        data: Array.from(Array(_this.maxDataPoints * 1).keys())
      };
    });

    _defineProperty(_assertThisInitialized(_this), "extendVerticesBy", function (size) {
      var _this$geometry$vertic;

      (_this$geometry$vertic = _this.geometry.vertices.position.data).push.apply(_this$geometry$vertic, _toConsumableArray(Array(size * 3).fill(0))); // this.geometry.vertices.color.data.push(...Array(size * 4).fill(0));
      // this.geometry.vertices.size.data.push(...Array(size * 1).fill(0));


      var indicesLen = _this.geometry.vertices.indices.data.length;
      _this.geometry.vertices.indices.data = Array.from(Array((indicesLen + size) * 1).keys());
      _this.geometry.needsResize = true;
      _this.maxDataPoints += size;
    });

    _defineProperty(_assertThisInitialized(_this), "init", function (gl) {
      _this.geometry.init(gl);

      _this._hasGeometry = true;

      _this.material.init(gl);

      _this.material.texturesLoaded = true;
    });

    _defineProperty(_assertThisInitialized(_this), "createCollisionGeo", function () {});

    _defineProperty(_assertThisInitialized(_this), "update", function (gl, sceneProps, time) {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Arcs.prototype)), "update", _thisSuper).call(_thisSuper, sceneProps, time);

      _this.material.uniforms.u_model = _this.modelMatrix;

      if (_this.geometry.needsResize) {
        _this.geometry.reloadBuffers(gl);
      }

      if (_this.geometry.isDirty) {
        _this.geometry.updateBuffers(gl);
      } // if(geometryIsDirty) {
      //   if(this.readyForUpdateCB){
      //     this.readyForUpdateCB();
      //   } else {
      //     updategeometry(gl);
      //   }
      // }

    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (gl) {
      // TODO: Extend isReady to include _hasGeometry
      if (!_this.isReady && !_this._hasGeometry) return;
      if (_this.arcCount === 0) return;
      gl.useProgram(_this.material.programInfo.program);
      setBuffersAndAttributes(gl, _this.material.programInfo, _this.geometry.bufferInfo);
      setUniforms(_this.material.programInfo, _this.material.uniforms);
      gl.drawElements(gl.POINTS, (_this.arcCount - 1) * 100 * 3, gl.UNSIGNED_SHORT, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "rayCastFrom", function (ray) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "hitTest", function (ray) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectionCB", function (selection) {
      return selection;
    });

    _defineProperty(_assertThisInitialized(_this), "onSelection", function (lat, lon, collision) {
      var selection = _this.getNearest(lat, lon);

      selection = _this.onSelectionCB(selection);
      return selection;
    });

    _defineProperty(_assertThisInitialized(_this), "createArcAt", function (p0, p1) {
      var data = {
        from: p0,
        to: p1
      };
      console.log("hello", data, _this.arcCount + 1);

      _this.geoFactory.createGeometry('arc', [data], transform$1, function (geometry) {
        _this.geometry.updateGeometry(geometry, _this.arcCount * 300);

        console.log(_this.arcCount, _this.geometry);
        _this.arcCount += 1;
        _this.dataPointCount += 1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addGeojson", function (geojson, cb) {
      if (typeof geojson === 'string') {
        console.warn('This function needs a geojson object at this time');
        return;
      }

      _this.datastore.addGeojson(geojson);

      _this.geoFactory.createGeometry('arc', _this.datastore.data, transform$1, function (geometry) {
        _this.geometry.updateGeometry(geometry, _this.dataPointCount);

        _this.dataPointCount += geojson.features.length;

        if (cb !== undefined) {
          cb();
        }
      }); // DEMO

    });

    _defineProperty(_assertThisInitialized(_this), "addDataPoint", function (dataPoint) {
      if (_this.dataPointCount + 1 >= _this.maxDataPoints) {
        console.warn("More than ".concat(_this.maxDataPoints, " datapoints have been added, Increasing buffer size by: ").concat(_this.maxDataPoints));

        _this.extendVerticesBy(_this.maxDataPoints);
      }

      var newData = [];
      newData.push(_this.datastore.addGeojsonPoint(dataPoint));

      _this.geoFactory.createGeometry('arc', newData, transform$1, function (geometry) {
        _this.geometry.updateGeometry(geometry, _this.ver);

        _this.dataPointCount += 1; // this.geometry.vertices = geometry;

        console.log('verify', _this.datastore.getTypeList(), _this.datastore.isHomogeneous);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNearest", function (lat, lon) {
      return _this.datastore.getNearest(lat, lon, _this.maxSelectionDistance, _this.maxSelectionCount);
    });

    if (params) {
      if (params.maxSelectionCount) _this.maxSelectionCount = params.maxSelectionCount;
      if (params.maxSelectionDistance) _this.maxSelectionDistance = params.maxSelectionDistance;
      if (params.maxDataPoints) _this.maxDataPoints = params.maxDataPoints;
    }

    _this.material = new ShaderMaterial(shaders$3);
    _this.datastore = new DataStore();
    _this.material.uniforms = uniforms$3;
    _this.geoFactory = new DataGeometryFactory();
    _this.geometry = new Geometry();

    _this.createEmptyVertices(); // DEMO
    // END DEMO


    return _this;
  }

  return Arcs;
}(DataDrawable);

var vert$4 = "#define GLSLIFY 1\nattribute vec4 position;attribute vec3 normal;attribute vec2 texcoord;uniform mat4 u_worldViewProjection;uniform mat4 u_viewInverse;uniform mat4 u_model;uniform vec3 u_cameraPos;varying vec2 vTexture;varying float vAlpha;void main(){vec4 pos=u_worldViewProjection*u_model*position;gl_PointSize=10.0;vec3 transformedNormal=(u_worldViewProjection*u_model*vec4(normal,1.0)).xyz;vec4 transformedCamera=vec4(0.0,0.0,-1.0,1.0)*u_worldViewProjection;vAlpha=pow((1.0+(dot(normal,normalize(transformedCamera.xyz))))/2.0,0.35);vTexture=texcoord.xy;gl_Position=pos+0.00000000000000001*normal.x*texcoord.x;}"; // eslint-disable-line

var frag$4 = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_surface;varying vec2 vTexture;varying float vAlpha;void main(){vec4 surfaceColor=texture2D(u_surface,vec2(vTexture.x,1.0-vTexture.y));vec3 color=surfaceColor.rgb*vAlpha;gl_FragColor=vec4(color,1.0);}"; // eslint-disable-line

var shaders$4 = {
  vertex: vert$4,
  fragment: frag$4
};
var uniforms$4 = {
  u_lightWorldPos: [1, 3, -8],
  u_lightColor: [1, 0.8, 0.8, 1],
  u_ambient: [1.0, 1.0, 1.0, 1],
  u_specular: [1, 1, 1, 1],
  u_shininess: 100,
  u_specularFactor: 0.1
};

var Lowpoly = /*#__PURE__*/function (_Globe) {
  _inherits(Lowpoly, _Globe);

  var _super = _createSuper(Lowpoly);

  // DEBUG
  // DEBUG
  function Lowpoly(textureSrc, geometryBin) {
    var _thisSuper, _this;

    _classCallCheck(this, Lowpoly);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "material", null);

    _defineProperty(_assertThisInitialized(_this), "lookup", null);

    _defineProperty(_assertThisInitialized(_this), "currentSelection", -1);

    _defineProperty(_assertThisInitialized(_this), "previousSelection", -1);

    _defineProperty(_assertThisInitialized(_this), "inAnimation", null);

    _defineProperty(_assertThisInitialized(_this), "outAnimation", null);

    _defineProperty(_assertThisInitialized(_this), "selection0", 236);

    _defineProperty(_assertThisInitialized(_this), "selection1", 144);

    _defineProperty(_assertThisInitialized(_this), "current", 236);

    _defineProperty(_assertThisInitialized(_this), "dataTexture", void 0);

    _defineProperty(_assertThisInitialized(_this), "dataTextureSize", 16);

    _defineProperty(_assertThisInitialized(_this), "updateCMDs", []);

    _defineProperty(_assertThisInitialized(_this), "highlightAnimationProps", {
      start: 0,
      stop: 1,
      duration: 1000,
      onUpdate: function onUpdate(value) {
        _this.material.uniforms.u_animateIn = value;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "init", function (gl, cb) {
      _this.geometry.init(gl);

      var texturesConfig = {
        surface: {
          src: _this.textureSrc.surface,
          minMag: gl.LINEAR
        }
      };
      console.log(_this.textureSrc);

      _this.material.init(gl);

      _this.material.uniforms.uModelMatrix = _this.modelMatrix;

      _this.material.loadTextures(gl, texturesConfig, function () {
        _this.material.uniforms.u_surface = _this.material.textures.surface;
        if (cb) cb();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForId", function (id) {
      return _this.lookup.getFromId(id);
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForCode", function (code) {
      return _this.lookup.getFromCode(code);
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForName", function (name) {
      return _this.lookup.getFromName(name);
    });

    _defineProperty(_assertThisInitialized(_this), "setIdColor", function (id, color, alpha) {
      var a = alpha === undefined ? 1.0 : alpha;
      var c = GKUtils.hexToRGBA(color, a, false);

      _this.updateCMDs.push(function (gl) {
        _this.dataTexture.updatePixelId(gl, c, id);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createCollisionGeo", function () {
      if (_this.collisionGeometry && _this.collisionGeometry instanceof GKCollision) return;
      _this.collisionGeometry = GKCollider.create_collision_geometry(_this.geometry.vertices.position.data, _this.geometry.vertices.texcoord.data, _this.geometry.vertices.indices.data);
    });

    _defineProperty(_assertThisInitialized(_this), "rayCastFrom", function (ray) {
      return _this.collisionGeometry.raycast(ray.origin, ray.direction);
    });

    _defineProperty(_assertThisInitialized(_this), "hitTest", function (ray) {
      return _this.collisionGeometry.hitTest(ray.origin, ray.direction);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectionCB", function (selectionObj) {});

    _defineProperty(_assertThisInitialized(_this), "onSelection", function (lat, lon, collision) {
      // convert worldPos to lat lon
      var coords = GKUtils.latLonFromWorld(collision.point); // this.current = this.lookup.getIdFromLatLon(coords.lat, coords.lon);
      // // console.log('IcosphereLookup.onSelection', coords.lat, coords.lon, this.current);
      // // this.current = (this.current === this.selection0) ? this.selection1 : this.selection0;
      // this.setHighlightId(this.current);
      // this.onSelectionCB(this.current);
      // return {
      //   id: this.current,
      //   name: this.lookup.getFromId(this.current),
      // };
    });

    _defineProperty(_assertThisInitialized(_this), "onHover", function (collision) {
      console.log('IcosphereLookup.onHover', collision);
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (gl, sceneProps, time) {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Lowpoly.prototype)), "update", _thisSuper).call(_thisSuper, sceneProps, time);

      _this.material.uniforms.u_model = _this.modelMatrix; // TODO: Batch Gl specific updates.

      _this.updateCMDs.forEach(function (cmd) {
        cmd(gl);
      });

      _this.updateCMDs = [];
    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (gl) {
      if (!_this.isReady || !_this.shouldDraw) return;
      gl.useProgram(_this.material.programInfo.program);
      setBuffersAndAttributes(gl, _this.material.programInfo, _this.geometry.bufferInfo);
      setUniforms(_this.material.programInfo, _this.material.uniforms);
      gl.drawArrays(gl.TRIANGLES, 0, _this.geometry.bufferInfo.numElements);
    });

    _defineProperty(_assertThisInitialized(_this), "setCountryHover", function (countryIndex) {});

    _defineProperty(_assertThisInitialized(_this), "setHighlightId", function (id) {
      _this.previousSelection = _this.currentSelection;
      _this.currentSelection = id;
      var animateOutStart = _this.inAnimation ? _this.inAnimation.currentValue() : 1.0; // We want a full animate out to take 1 second so 1-0 in 1000 milliseconds

      var animateOutDuration = animateOutStart * (300.0 / 1.0);

      _this.animateIn(_this.currentSelection, 500.0);

      _this.animateOut(_this.previousSelection, animateOutDuration, animateOutStart);
    });

    _defineProperty(_assertThisInitialized(_this), "animateIn", function (id, duration, cb) {
      _this.material.uniforms.u_idAnimateIn = id;
      if (_this.inAnimation) _this.inAnimation.stop();
      _this.material.uniforms.u_animateIn = 0;
      _this.inAnimation = new Tween(_this.highlightAnimationProps.start, _this.highlightAnimationProps.stop, _this.highlightAnimationProps.duration, {
        onUpdate: _this.highlightAnimationProps.onUpdate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "animateOut", function (id, duration, start, cb) {
      _this.material.uniforms.u_idAnimateOut = id;
      if (_this.outAnimation) _this.outAnimation.stop();
      _this.material.uniforms.u_animateOut = start;
      _this.outAnimation = new Tween(start, 0, duration, {
        onUpdate: function onUpdate(value) {
          _this.material.uniforms.u_animateOut = value;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addDataset", function (data) {
      _this.lookup = new Lookup(data, _this.textureSrc.id);
    });

    _defineProperty(_assertThisInitialized(_this), "updateIdState", function (id, state) {});

    _this.textureSrc = {
      surface: textureSrc.surface
    };
    _this.material = new ShaderMaterial(shaders$4);
    _this.material.uniforms = uniforms$4;
    _this.geometry = new Geometry();
    var verts = 11664;
    var indices = 11664;
    var posLen = verts * 3;
    var norLen = verts * 3;
    var texLen = verts * 3;
    var currentPos = 0;
    var fBuff = new Float32Array(geometryBin);
    var iBuff = new Int32Array(geometryBin);
    var p = fBuff.subarray(currentPos, currentPos + posLen);
    currentPos += posLen;
    var n = fBuff.subarray(currentPos, currentPos + norLen);
    currentPos += norLen;
    var t = fBuff.subarray(currentPos, currentPos + texLen);
    currentPos += texLen;
    var i = iBuff.subarray(currentPos, currentPos + indices);
    _this.geometry.vertices.position = {
      numComponents: 3,
      data: p
    };
    _this.geometry.vertices.normal = {
      numComponents: 3,
      data: n
    };
    _this.geometry.vertices.texcoord = {
      numComponents: 3,
      data: t
    };
    _this.geometry.vertices.indices = {
      numComponents: 3,
      data: i
    };
    return _this;
  }

  return Lowpoly;
}(Globe);

var CalloutDefinition = function CalloutDefinition(latitude, longitude, calloutClass, data) {
  _classCallCheck(this, CalloutDefinition);

  _defineProperty(this, "id", Math.random().toFixed(16).substr(2));

  _defineProperty(this, "latitude", 0);

  _defineProperty(this, "longitude", 0);

  _defineProperty(this, "altitude", 0);

  _defineProperty(this, "calloutClass", undefined);

  _defineProperty(this, "data", undefined);

  this.latitude = latitude;
  this.longitude = longitude;
  this.calloutClass = calloutClass;
  this.data = data;
};

/*
eslint
class-methods-use-this: ["error", { "exceptMethods": ["createElement", "animateIn", "update"] }]
*/
var Callout = /*#__PURE__*/function () {
  function Callout(definition) {
    var _this = this;

    _classCallCheck(this, Callout);

    _defineProperty(this, "drawables", []);

    _defineProperty(this, "element", undefined);

    _defineProperty(this, "definition", undefined);

    _defineProperty(this, "size", {
      width: 0,
      height: 0
    });

    this.definition = definition;
    this.element = this.createElement();
    this.resizeObserver = new ResizeObserver(function (entries) {
      if (entries.length) {
        _this.size = entries[0].contentRect;
      }
    });
    this.resizeObserver.observe(this.element);
  }

  _createClass(Callout, [{
    key: "release",
    value: function release() {
      this.resizeObserver.disconnect();
    }
  }, {
    key: "createElement",
    value: function createElement() {
      return document.createElement('div');
    }
  }, {
    key: "animateIn",
    value: function animateIn() {}
  }, {
    key: "animateOut",
    value: function animateOut(onComplete) {
      onComplete(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.drawables.forEach(function (drawable) {
        return drawable.update(time);
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.element.style.transform = "translate(".concat(position.screen.x, "px, ").concat(position.screen.y, "px)");
    }
  }]);

  return Callout;
}();

export { Arcs, Callout, CalloutDefinition, CalloutManager, Camera, DataStore, Drawable, GKUtils, Geometry, GlobeKitView, Icosphere, IcosphereLookup, Lookup, Lowpoly, Points, Renderer, Scene, ShaderMaterial };
