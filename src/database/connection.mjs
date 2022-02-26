import { createConnection } from "mysql";

export function getDatabaseInstance() {
  let connectionStr =
    "mysql://*root:*admin@*localhost/*database?charset=utf8_general_ci&timezone=+0530";
  var con = createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "admin",
    database: "playbet",
  });
  return con;
}

//var con = createConnection(connectionStr);

getDatabaseInstance().connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
  let file = "bets.csv";
  let sql =
    "load data local infile 'bets.csv' into table people fields terminated by ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (name, gender)";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("uploaded");
  });
});
