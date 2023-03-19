import articleData from 'data/banana.json';
import './Reader.css';

import ActionsRead from 'components/ActionsRead';
import ReadingPane from 'components/ReadingPane';

const Reader = () => {
  const {
    parse: { title, text },
  } = articleData;

  return (
    <div
      className="
        pt-32
        pb-16
        px-5
        border
        border-lime-500
      "
    >
      <ReadingPane
        title={title}
        htmlString={text}
      />
      <ActionsRead className="affix-actions" />
    </div>
  );
};

export default Reader;
