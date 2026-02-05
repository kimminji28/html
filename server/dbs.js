const obj = require("./test");
const oracledb = require("oracledb");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function getConnection() {
    return await oracledb.getConnection({
        user: "scott",
        password: "tiger",
        connectString: "172.30.1.22:1521/xe", //본인주소:오라클기본포트/Express Edition 기본 서비스명
      });
    }

    module.exports = { getConnection: getConnection, oracledb: oracledb };
    //export로 외부로 내보내고, 다른 파일에서 require로 갖다 쓸 수 있음