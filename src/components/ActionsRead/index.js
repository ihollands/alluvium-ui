const ActionsRead = ({ className }) => {
  function handleClickPlus() {
    console.log('click plus');
  }

  function handleClickHelp() {
    console.log('click help');
  }

  const styles = {
    wrapper: `
      flex
      flex-col
      gap-2
      justify-between
    `,
    button: `
      w-8
      h-8
      border
      border-black
      rounded-full
    `,
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button
        className={styles.button}
        onClick={handleClickPlus}
      >
        +
      </button>
      <button
        className={styles.button}
        onClick={handleClickHelp}
      >
        ?
      </button>
    </div>
  );
};

export default ActionsRead;
