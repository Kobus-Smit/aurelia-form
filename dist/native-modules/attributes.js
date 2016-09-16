var _dec, _class;



import { inject } from 'aurelia-dependency-injection';

export var AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
  function AttributesCustomAttribute(element) {
    

    this.element = element;
  }

  AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
    var _this = this;

    Object.keys(normalizeAtttibutes(this.value)).forEach(function (attribute) {
      _this.element.setAttribute(attribute, _this.value[attribute]);
    });
  };

  return AttributesCustomAttribute;
}()) || _class);

function normalizeAtttibutes(value) {
  var result = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (typeof value === 'string') {
    result[value] = true;

    return result;
  }

  if (Array.isArray(value)) {
    value.forEach(function (v) {
      result = normalizeAtttibutes(v, result);
    });

    return result;
  }

  return result;
}