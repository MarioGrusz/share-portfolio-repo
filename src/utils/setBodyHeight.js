const setBodyHeight = (scrollContainer) => {
    if (scrollContainer.current) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
};


export default setBodyHeight