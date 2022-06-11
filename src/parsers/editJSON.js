const removeMap = new Map([
  ['attributes', ['style', 'class']],
  ['tagName', ['style', 'table']],
  ['content', ['\n', '\n\n']],
]);

const checkMap = (key, value) => !removeMap.get(key).includes(value);

const handleFilter = ({ type, tagName, content }) => {
  if (type === 'element') {
    return checkMap('tagName', tagName);
  }

  if (type === 'text') {
    return checkMap('content', content);
  }
};

const removeAttrs = (attrs = []) =>
  attrs.filter(({ key }) => !removeMap.get('attributes').includes(key));

export default function clean(arr) {
  const cleaned = arr.filter(handleFilter).map((item) => {
    item.attributes = removeAttrs(item.attributes);

    if (item.children) {
      item.children = clean(item.children);
    }

    return item;
  });

  return cleaned;
}
