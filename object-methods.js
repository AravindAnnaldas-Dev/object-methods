// Object.create
const obj1 = {
  a: 1,
  b: 2,
};
const obj_create = Object.create(obj1); // Object.create(proto, [propertiesObject]);
console.log(obj_create, "obj_create");

// Object.assign
const target = {
  a: 1,
};
const source1 = {
  b: 2,
};
const source2 = {
  c: 3,
};
const obj_assign = Object.assign(target, source1, source2); // Object.assign(target, ...sources);
console.log(obj_assign, "obj_assign");
console.log(target, "target");

// Object.fromEntries
const entries = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj_fromEntries = Object.fromEntries(entries); // Object.fromEntries(iterable)
console.log(obj_fromEntries, "obj_fromEntries");

// Object.defineProperty
const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_define_property = Object.defineProperty(obj2, "d", {
  value: 4,
}); // Object.defineProperty(obj, prop, descriptors)
console.log(obj_define_property, "obj_define_property");

// Object.defineProperties
const obj3 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_defineProperties = Object.defineProperties(obj3, {
  d: { value: 4 },
  e: { value: 5 },
}); // Object.defineProperties(obj, props)
console.log(obj_defineProperties, "obj_defineProperties");

// Object.getOwnPropertyDescriptor
const obj4 = {
  a: 1,
};
const obj_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(obj4, "a"); // Object.getOwnPropertyDescriptor(obj, prop)
console.log(obj_getOwnPropertyDescriptor, "obj_getOwnPropertyDescriptor");

// Object.getOwnPropertyDescriptors
const obj5 = {
  a: 1,
  b: 2,
};
const obj_getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(obj5); // Object.getOwnPropertyDescriptors(prop)
console.log(obj_getOwnPropertyDescriptors, "obj_getOwnPropertyDescriptors");

// Object.hasOwn
const obj6 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_hasOwn = Object.hasOwn(obj6, "b"); // Object.hasOwn(obj, prop)
console.log(obj_hasOwn, "obj_hasOwn");

// Object.keys
const obj7 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_keys = Object.keys(obj7); // Object.keys(obj)
console.log(obj_keys, "obj_keys");

// Object.values
const obj8 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_values = Object.values(obj8); // Object.values(obj)
console.log(obj_values, "obj_values");

// Object.entries
const obj9 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_entries = Object.entries(obj9); // Object.entries(obj)
console.log(obj_entries, "obj_entries");

// Object.is
const obj10 = {
  a: 1,
};
const obj11 = {
  a: 1,
};
const obj_is = Object.is(obj10, obj11); // Object.is(obj1, obj2)
console.log(obj_is, "obj_is");

// Object.isExtensible
const obj12 = {
  a: 10,
};
const obj_isExtensible = Object.isExtensible(obj12); // Object.isExtensible(obj)
console.log(obj_isExtensible, "obj_isExtensible");

// Object.isFrozen
const obj13 = {
  a: 10,
};
Object.freeze(obj13);
const obj_isFrozen = Object.isFrozen(obj13); // Object.isFrozen(obj)
console.log(obj_isFrozen, "obj_isFrozen");

// Object.isSealed
const obj14 = {
  a: 10,
};
const obj_isSealed = Object.isSealed(obj14); // Object.isSealed(obj)
console.log(obj_isSealed, "obj_isSealed");

// Object.getPrototypeOf
const obj15 = {
  a: 10,
};
const obj_getPrototypeOf = Object.getPrototypeOf(obj15); // Object.getPrototypeOf(obj)
console.log(obj_getPrototypeOf, "obj_getPrototypeOf");

// Object.setPrototypeOf
const obj16 = {};
const protoObj = {
  hi() {
    return "Hello World!";
  },
};
Object.setPrototypeOf(obj16, protoObj); // Object.setPrototypeOf(obj, proto)
console.log(obj16.hi(), "obj_setPrototypeOf");

// Object.getOwnPropertyNames
const obj17 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj_getOwnPropertyNames = Object.getOwnPropertyNames(obj17); // Object.getOwnPropertyNames(obj)
console.log(obj_getOwnPropertyNames, "obj_getOwnPropertyNames");

// Object.getOwnPropertySymbols
const symbol = Symbol("id");
const obj_symbol = {
  a: 1,
  [symbol]: 1,
};
console.log(
  Object.getOwnPropertySymbols(obj_symbol),
  "obj_getOwnPropertySymbols"
); // Object.getOwnPropertySuymbols(obj)

// Object.freeze
const obj18 = {
  a: 1,
};
Object.freeze(obj18); // Object.freeze(obj)
console.log(Object.isFrozen(obj18), "obj_freeze");

// Object.seal
const obj19 = {
  a: 1,
};
Object.seal(obj19); // Object.seal(obj)
obj19.a = 10;
console.log(obj19, "obj_seal");

// Object.preventExtensions
const obj20 = {
  a: 1,
};
Object.preventExtensions(obj20); // Object.preventExtensions(obj);
obj20.b = 2;
console.log(obj20, "obj_preventExtensions");

// hasOwnProperty
const obj21 = {
  a: 1,
};
console.log(obj21.hasOwnProperty("a"), "obj_hasOwnProperty"); // obj.hasOwnProperty(prop)

// toString
const obj22 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(obj22.toString(), "obj_toString"); // obj.toString(obj)

// valueOf
const obj23 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(obj23.valueOf(), "obj_valueOf"); // obj.valueOf(obj)

// obj.isPrototypeOf
const parent = {
  a: 1,
};
const child = Object.create(parent); // obj.isPrototypeOf(otherObj)
console.log(parent.isPrototypeOf(child), "obj_isPrototypeOf");
console.log(child.isPrototypeOf(parent), "obj_isPrototypeOf");

// obj.propertyIsEnumerable
const obj24 = {
  a: 1,
};

console.log(obj24.propertyIsEnumerable("a"), "obj_propertyIsEnumerable"); // obj.propertyIsEnumerable(prop)
