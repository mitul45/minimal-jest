jest.useFakeTimers();
test('test something', async () => {
  const promise = new Promise(resolve => setImmediate(resolve));
  jest.runAllTimers()
  await promise;
  expect(true).toBe(true);
})
