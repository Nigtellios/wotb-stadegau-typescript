const insertCurrentDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  return `${year}`;
};

export default insertCurrentDate;
