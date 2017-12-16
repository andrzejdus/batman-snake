const instancePool = {};

class Tile {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Tile} tile
   */
  distanceTo(tile) {
    return Math.abs(tile.x - this.x) + Math.abs(tile.y - this.y);
  }

  toString() {
    return `${this.x}, ${this.y}`;
  }
}

export default function createTile(x,y) {
  const tile = new Tile(x,y);

  return instancePool[tile.toString()] || (instancePool[tile.toString()] = tile);
}
