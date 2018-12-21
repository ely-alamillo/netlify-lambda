exports.handler = (event, ctx, cb) => {
  // cb(errorHandler, succesHandler)
  cb(null, {
    statusCode: 200,
    body: 'Hello world'
  });
};
