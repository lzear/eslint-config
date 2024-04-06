// @ts-nocheck

class A extends B {
  constructor() {} // Would throw a ReferenceError.
}

// Classes which inherits from a non constructor are always problems.
class C extends null {
  constructor() {
    super() // Would throw a TypeError.
  }
}

class D extends null {
  constructor() {} // Would throw a ReferenceError.
}
