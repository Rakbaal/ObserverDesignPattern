import Board from "./classes/board"
import Tile from "./classes/tile"


const tile0 = new Tile(0)
const tile1 = new Tile(1)
const tile2 = new Tile(2)

const board = new Board()

board.attach(tile0)
board.attach(tile1)
board.attach(tile2)

board.initialize()

board.awaitMovement()