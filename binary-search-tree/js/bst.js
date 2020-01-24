function searchBST(node, value) {
  if (!node || !value) {
    return;
  }

  if (node.value === value) {
    return value;
  }

  if (node.value > value) {
    if (node.left) {
      return searchBST(node.left, value);
    }
    return value;
  }

  return searchBST(node.right, value);
}

module.exports = searchBST;
