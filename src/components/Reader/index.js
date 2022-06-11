import { parse } from 'himalaya';
import editJSON from 'parsers/editJSON';

import articleData from 'data/banana.json';

import ReadingPane from 'components/ReadingPane';

const Reader = () => {
  const {
    parse: { text },
  } = articleData;

  const jsonHtml = parse(text);
  const cleaned = editJSON(jsonHtml);

  console.log(cleaned);

  return (
    <div
      className="
        py-20
        px-5
      "
    >
      <ReadingPane jsonHtml={cleaned} />
    </div>
  );
};

export default Reader;
