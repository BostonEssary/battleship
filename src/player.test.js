import Player from './player';

describe('Player', () => {
  test('returns player with a given name', () => {
    const player = new Player('Boston');
    expect(player.name).toBe('Boston');
  });

  test('returns an array which is the players board', () => {
    const player = new Player('Boston');
    expect(Array.isArray(player.playerBoard)).toBe(true);
  });
});
