export const getDate = (stringDate) => {
  if (typeof stringDate !== `string`) {
    throw new Error(`Invalid type of ${date}`);
  }

  const date = new Date(stringDate);
  const month = date.toLocaleString(`en-EN`, {month: `long`});
  const result = `${month} ${date.getDate()}, ${date.getFullYear()}`;

  return result;
};
