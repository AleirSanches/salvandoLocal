import {db} from "./SQLite";

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.excuteSql("CREATE TABLE IF NOT EXISTS " +
        "Notas" +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, text TEXT); " )
    })
}