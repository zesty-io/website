const removeEmptyNodes = (nodes) => {
  return nodes.filter((node) => {
    if (node.type === 'element') {
      node.children = removeEmptyNodes(node.children);
      return true;
    }
    return node.content.length;
  });
};

const stripWhitespace = (nodes) => {
  return nodes.map((node) => {
    if (node.type === 'element') {
      node.children = stripWhitespace(node.children);
    } else {
      node.content = node.content.trim();
    }
    return node;
  });
};

export const removeWhitespace = (nodes) => {
  return removeEmptyNodes(stripWhitespace(nodes));
};

export const generateHeader = (obj) => {
  const result = obj.children[0].content;
  return result;
};

export const transformJson = (arr) => {
  const result = arr.children.map((item) => {
    const title = item.children[0].children[0].content;
    const titleHref = item.children[0].attributes[0].value;
    const test1 = item.children
      .filter((e) => e.tagName === 'ul')
      .map((e) => e.children);
    const children =
      test1 &&
      test1[0] &&
      test1[0]
        .map((r) => r.children)
        .map((x) => {
          return x;
        })
        .map((e) => {
          const href = e?.find((e) => e.tagName === 'a').attributes[0]?.value;
          const name = e?.find((e) => e.tagName === 'a').children[0]?.content;
          const children = e
            ?.find((e) => e.tagName === 'ul')
            ?.children.map((e) => e.children)
            .map((e) => e && e[0])
            ?.map((e) => {
              const href = e.attributes[0].value;
              const name = e.children[0].content;
              return { name, href };
            });

          return { name, href, children };
        });
    return { title, titleHref, children };
  });
  return result;
};

export const mainJson = (arr) => {
  const result = arr.map((_e, index, arr) => {
    const header = index % 2 === 0 ? index : null;
    const data = index % 2 !== 0 ? index : null;
    return { header: arr[header], data: data && arr[data] };
  });
  return result;
};
