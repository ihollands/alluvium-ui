// import { parse } from 'himalaya';
// import editJSON from 'parsers/editJSON';

import articleData from 'data/banana.json';

import ReadingPane from 'components/ReadingPane';

const Reader = () => {
  const {
    parse: { title, text },
  } = articleData;

  // const jsonHtml = parse(text);
  // const cleaned = editJSON(jsonHtml);

  return (
    <div
      className="
        pt-32
        pb-16
        px-5
      "
    >
      <ReadingPane
        title={title}
        htmlString={text}
      />
    </div>
  );
};

export default Reader;
