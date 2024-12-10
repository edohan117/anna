const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',           // 데이터베이스 호스트
    user: 'root',                // 데이터베이스 사용자 이름
    password: 'root',            // 데이터베이스 비밀번호
    database: 'anna',       // 데이터베이스 이름
    port: 3306,                  // 데이터베이스 포트
    connectionLimit: 20,         // 최대 연결 수
    acquireTimeout: 20000        // 연결 대기 시간 (밀리초)
});

module.exports = {
    async run(query, params) {
        return new Promise((resolve, reject) => {
            pool
                .getConnection()
                .then(conn => {
                    conn
                        .query(query, params)
                        .then((rows) => {
                            resolve(rows);
                            conn.end(); // (필수) connection 종료
                        })
                        .catch(err => {
                            console.log(err);
                            conn.end(); // (필수) connection 종료
                            reject(err);
                        })

                    })
                .catch(err => {
                    //not connected
                    console.log(err);
                    reject(err);
                });
        });
    }
}