import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence); // Вызываем конструктор базового класса
    this.attack = 40;
    this.defence = 10;
  }
}
