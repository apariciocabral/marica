export const setTitle = (title?: string): void => {
  const appName = process.env.REACT_APP_API_NAME ?? '';

  if (title) {
    document.title = `${title} | ${appName}`;
  } else {
    document.title = appName;
  }
};
