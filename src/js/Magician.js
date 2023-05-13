import Character from './Character';

export default class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence); // Вызываем конструктор базового класса
    this.attack = 10;
    this.defence = 40;
  }
}
