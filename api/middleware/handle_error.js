



//before exection final

module.exports = (callfunc) => (req, res, next) => {
    Promise.resolve(callfunc(req, res, next)).catch(next);
  };
  