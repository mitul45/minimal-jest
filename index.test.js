jest.useFakeTimers();
test('test something', async () => {
  await new Promise(resolve => setImmediate(resolve));
  expect(true).toBe(true);
})
