// import { useEffect, useRef, useState } from 'react';

import parse, { attributesToProps, domToReact } from 'html-react-parser';

import PGraph from 'components/PGraph';
import Title from 'components/Title';

const cleanProps = (attrs) => {
  const props = attributesToProps(attrs);

  delete props.className;

  return props;
};

const parseOptions = {
  replace: ({ tagName, attribs, children }) => {
    if (!attribs) {
      return;
    }

    const props = cleanProps(attribs);

    if (tagName === 'p') {
      return <PGraph {...props}>{domToReact(children, parseOptions)}</PGraph>;
    }
  },
};

const ReadingPane = ({ title, htmlString }) => {
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
