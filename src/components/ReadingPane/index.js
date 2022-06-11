import { stringify } from 'himalaya';

const ReadingPane = ({ jsonHtml }) => {
  const htmlString = stringify(jsonHtml);

  return (
    <div
      className="
        max-w-4xl
        mx-auto
        bg-stone-100
        p-10
        rounded-3xl
      "
    >
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};

export default ReadingPane;
