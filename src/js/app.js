import Field from './field/field';
import { randomCoordsProvider } from './utils/utils';
import Unit from './units/unit';

window.onload = () => {
  // Create field object
  const gameField = new Field(4, 4);
  gameField.fill(); // fill it with cells
  const container = document.getElementById('game-container');
  container.append(gameField.html());

  // Create Goblin and locate it 0 / 0
  const goblin = new Unit('Boris', 'goblin');
  const position = gameField.getLocationElement(0, 0);
  goblin.placeUnit(position);

  // Get function, which generates brand new coordinates
  const chordsProvider = randomCoordsProvider(4, 4);
  // Run game cycle
  setInterval(() => {
    const newPos = gameField.getLocationElement(...chordsProvider());
    goblin.placeUnit(newPos);
  }, 1000);
};
