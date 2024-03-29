
import * as SQLite from "react-native-sqlite-storage"

function abreConexao() {
    const dataBase = SQLite.openDatabase("db.db")
    return dataBase
}

export const  db = abreConexao()

