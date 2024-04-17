const stopAnimationOnWindowResize = () => {
  let resizeTimer: number | undefined;

  const handleResize = () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 300);
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
export default stopAnimationOnWindowResize;
