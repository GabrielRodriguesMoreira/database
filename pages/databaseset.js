const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: './migrations', //add cutom path to your migrations
    force: 'last',
  });

  const people = await db.all('SELECT * FROM Coiso1');
  console.log('all person', JSON.stringify(people, null, 2));
}

setup();
