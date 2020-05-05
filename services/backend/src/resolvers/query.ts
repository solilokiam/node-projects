const Query = {
  hello: (_, { name }) => {
    const returnValue = `Hello ${name || 'World!'}`;
    return returnValue;
  },
};

export default Query;
