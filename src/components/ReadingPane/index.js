import { useEffect, useState } from 'react';

import parse, { attributesToProps, domToReact } from 'html-react-parser';

import PGraph from 'components/PGraph';
import Title from 'components/Title';

const cleanProps = (attrs) => {
  const props = attributesToProps(attrs);

  delete props.className;

  return props;
};

const ReadingPane = ({ title, htmlString }) => {
  const [selected, setSelected] = useState([]);

  function handleClick(e) {
    setSelected(e.target);
  }

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const parseOptions = {
    replace: ({ tagName, attribs, children }) => {
      if (!attribs) {
        return;
      }

      const props = cleanProps(attribs);

      if (tagName === 'p') {
        return (
          <PGraph
            {...props}
            onClick={handleClick}
          >
            {domToReact(children, parseOptions)}
          </PGraph>
        );
      }
    },
  };
  return (
    <div
      className="
        bg-white
        shadow-md
        border
        border-stone-900
        max-w-[600px]
        mx-auto
        p-11
      "
    >
      <Title title={title} />
      {parse(htmlString, parseOptions)}
    </div>
  );
};

export default ReadingPane;
