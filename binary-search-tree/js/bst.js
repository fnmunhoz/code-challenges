function searchBST(tree, value) {
  if (!tree || !value) {
    return;
  }

  if (tree.value === value) {
    return value;
  }

  if (tree.value > value && tree.left && tree.left.value === value) {
    return value;
  }

  if (tree.right && tree.right.value === value) {
    return value;
  }
}

module.exports = searchBST;
