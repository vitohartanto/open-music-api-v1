const { Pool } = require('pg');
const { nanoid } = require('nanoid')

class AlbumsService {
  constructor() {
    this._pool = new Pool();
  }

  async addAlbum = ({ name, year }) => {
    const id = nanoid(16);
  }
}
