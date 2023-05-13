import Character from './Character';

export default class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence); // Вызываем конструктор базового класса
    this.attack = 25;
    this.defence = 25;
  }
}
