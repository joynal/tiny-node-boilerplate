module.exports.hello = async (event) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello world!',
    input: event,
  }),
});
