export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    if (name.length < 2 || name.length > 10) {
      throw new Error('Переданы неверные данные');
    }
    this.type = type;
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Передан неверный тип персонажа');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
        throw new Error('Нельзя повысить уровень умершего персонажа');
    }

    this.level += 1;
    this.attack += (this.attack * 0.2);
    this.defence += (this.defence * 0.2);
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health <= 0) {
        this.health = 0;
        throw new Error('Персонаж не имеет жизней');
    }
  }
}
