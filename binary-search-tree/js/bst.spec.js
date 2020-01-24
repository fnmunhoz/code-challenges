const searchBST = require("./bst");

const tree = {
  value: 10,
  left: {
    value: 7,
    left: {
      value: 5,
      right: {
        value: 6
      }
    },
    right: {
      value: 9
    }
  },
  right: {
    value: 15
  }
};

// Edge case scenarios

it("should not get any value when the value is undefined", () => {
  expect(searchBST(tree, undefined)).toBeUndefined();
});

it("should not get any value when the tree is undefined", () => {
  expect(searchBST(undefined, 10)).toBeUndefined();
});

it("should not get any value when the tree and the value are undefined", () => {
  expect(searchBST(undefined, undefined)).toBeUndefined();
});

it("should not get any value when the value is null", () => {
  expect(searchBST(tree, null)).toBeUndefined();
});

it("should not get any value when the tree is null", () => {
  expect(searchBST(null, 10)).toBeUndefined();
});

it("should not get any value when the tree and the value are null", () => {
  expect(searchBST(null, null)).toBeUndefined();
});

// Not exists scenario

it("should not get any value when the value does not exist in the tree", () => {
  expect(searchBST(tree, 20)).toBeUndefined();
});

// Level 1 scenario

it("should get the [root] node value", () => {
  expect(searchBST(tree, 10)).toBe(10);
});

// Level 2 scenarios

it("should get [root, left] node value", () => {
  expect(searchBST(tree, 7)).toBe(7);
});

it("should get [root, right] node value", () => {
  expect(searchBST(tree, 15)).toBe(15);
});

// Level 3 scenarios

it("should get [root, left, left] node value", () => {
  expect(searchBST(tree, 5)).toBe(5);
});

it("should get [root, left, right] node value", () => {
  expect(searchBST(tree, 9)).toBe(9);
});

// Level 4 scenarios

it("should get [root, left, right, left] node value", () => {
  expect(searchBST(tree, 6)).toBe(6);
});
