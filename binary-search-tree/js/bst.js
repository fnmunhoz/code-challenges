function searchBST(node, value) {
  if (!node || !value) {
    return;
  }

  if (node.value === value) {
    return value;
  }

  if (node.value > value) {
    return searchBST(node.left, value);
  }

  return searchBST(node.right, value);
}

module.exports = searchBST;
