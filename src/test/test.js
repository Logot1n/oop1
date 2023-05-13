import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';

test('checking create character', () => {
  const demon = new Daemon('Азазель', 'Daemon');
  expect(demon.name).toBe('Азазель');
  expect(demon.type).toBe('Daemon');
  expect(demon.health).toBe(100);
  expect(demon.level).toBe(1);
  expect(demon.attack).toBe(10);
  expect(demon.defence).toBe(40);
})

test('checking name length', () => {
  expect(() => new Magician('М', 'Magician')).toThrowError('Переданы неверные данные');
  expect(() => new Magician('Маг', 'Magician')).not.toThrow();
  expect(() => new Magician('Маг12345671', 'Magician')).toThrowError('Переданы неверные данные');
});

test('checking character type', () => {
  expect(() => new Character('bobik', 'President')).toThrowError('Передан неверный тип персонажа');
  expect(() => new Character('Boss', 'Bowman')).not.toThrow();
});

test('checking level up', () => {
  const bowman = new Bowman('Лучник', 'Bowman');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);

  const undead = new Undead('Мертвец', 'Undead');
  undead.health = 0;
  expect(() => undead.levelUp()).toThrowError('Нельзя повысить уровень умершего персонажа');
});

test('checking damage', () => {
  const bowman2 = new Bowman('Лучник', 'Bowman');
  bowman2.damage(10);
  expect(bowman2.health).toBe(92.5);

  const swordsman = new Swordsman('Мечник', 'Swordsman');
  swordsman.damage(90);
  expect(swordsman.health).toBe(19);

  const magician = new Magician('Маг', 'Magician');
  magician.health = 0;
  expect(() => magician.damage(10)).toThrowError('Персонаж не имеет жизней');
});
