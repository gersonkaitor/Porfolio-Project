const setTheme = (currentTheme) => {
    // eslint-disable-next-line
  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currentStyleSheet) =>
      (prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currentStyleSheet.cssRules).reduce(
          (prevCssRule, currentCssRule) => {
            prevCssRule =
              currentCssRule.selectorText === ":root"
                ? [
                    ...prevCssRule,
                    ...Array.from(currentCssRule.style).filter((item) =>
                      item.startsWith("--selected")
                    ),
                  ]
                : prevCssRule;

            return prevCssRule;
          },
          []
        ),
      ]),
    []
  );

  selectedCssProps.forEach((value) => {
    document.documentElement.style.setProperty(
      value,
      `var(--${currentTheme}${value.substring(10)})`
    );
  });
};

export default setTheme;
