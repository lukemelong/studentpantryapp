const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./main.db', sqlite3.OPEN_READWRITE, (err)=>{
    if (err) {
        return console.error(err.message);
      }
    console.log('Connected to the main SQlite database.');
})
let sql = `SELECT * FROM Person`

db.all(sql, [],(err, rows) =>{
    if(err){
        throw err
    }
    rows.forEach((row) => {
        console.log(row.name)
    })
})

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});