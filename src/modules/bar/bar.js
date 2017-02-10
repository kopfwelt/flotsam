const init = (selector = ".js-bar") => {
  if (!document.querySelector(selector)) {
    return;
  }

  bar(selector);
};

module.exports = init;
