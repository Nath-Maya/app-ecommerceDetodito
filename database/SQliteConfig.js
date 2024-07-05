import * as SQLite from 'expo-sqlite';
import { openDatabaseAsync } from 'expo-sqlite';

const db = openDatabaseAsync('sessions.db')

export const init = () => {

    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token NOT NULL)',
                [],
                () => resolve(),
            (_, err) => reject(err)
            )
        })
    })
}

export const inserSession = ({ localId, email, token }) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSqul(
                'INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?)',
                [localId, emai, token],
                (_, {insertId}) => resolve(insertId),
                (_, err) => reject(err)
            )
        })
    })
}