const checkWithinOneday = (date: Date): boolean => {
  const now = new Date();
  const base = new Date(date);

  const diffTime = now.getTime() - base.getTime();
  return diffTime / (1000 * 3600 * 24) <= 1;
};

export default checkWithinOneday;
