import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a content', () => {
    const content = new Content('você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content wiht less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content wiht more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
