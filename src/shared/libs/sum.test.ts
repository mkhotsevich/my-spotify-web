import { sum } from 'shared/libs/sum';

describe('sum', () => {
  it('should return 2', () => {
    const result = sum(1, 1);

    expect(result).toBe(2);
  });
});
