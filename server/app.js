const express = require("express");
const { getConnection, oracledb } = require("./db");
const app = express(); // 익스프레스 모듈을 활용 실체
const cors = require("cors");

//셋업 추가 cors
app.use(cors()); //CORS 요청 처리
app.use(express.json()); //body 영역에 json 처리.

//url -> 실행가능 라우팅
app.get("/", (req, res) => {
  res.send("OK");
});

//글목록 조회
app.get("/board", async (req, res) => {
  const conn = await getConnection();
  const { metaData, rows } = await conn.execute(
    `SELECT * FROM board ORDER BY 1`,
  );
  const json = JSON.stringify(rows); // 객체인 rows를 json 문자열로 변환
  res.send(json); // 응답처리
});

//글삭제
app.get("/board_delete/:bno", async (req, res) => {
  console.log(req.params.bno);
  const conn = await getConnection();
  const result = await conn.execute(
    `DELETE FROM board WHERE board_no = :bno`,
    { bno: req.params.bno },
    { autoCommit: true },
  );
  //정상삭제되면 ok , 삭제못하면 NG
  if (result.rowsAffected) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
  res.send(result); // 응답처리
});
//test

app.listen(3000, () => {
  console.log("http://localhost:3000");
}); //서버실행

//수정.
app.get("/board_update/:bno/:title/:content", async (req, res) => {
  console.log(req.params);
  const conn = await getConnection();
  const result = await conn.execute(
    `update board_no
        set title = :title
            ,content = :content
     where board_no = :bno`,
    {
      //bno : {dir:oracledb.BINDd+OUT, typr: oracle.NUMBER}
      bno: req.params.bno,
      title: req.params.title,
      content: req.params.content,
    },
    { autoCommit: true },
  );
  // //정상삭제되면 ok , 삭제못하면 NG
  if (result.rowsAffected) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
  res.send(result); // 응답처리
});
//test

app.listen(3000, () => {
  console.log("http://localhost:3000");
}); //서버실행

//등록.
app.post("/board_insert", async (req, res) => {
  console.log(req.body); //req.params 속성
  const { title, content, writer } = req.body;
  const conn = await getConnection();
  const result = await conn.execute(
    `insert into board (board_no, title, writer,  content)
      values((SELECT nvl(max(board_no),0)+1 from board), :title, :writer, :content)
    returning board_no into :bno `,
    {
      bno: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      title,
      writer,
      content,
    },
    { autoCommit: true },
  );
  console.log(result.outBinds.bno[0]); //outbinds의 요소(글번호)를 cmd에서 확인 가능

  // //정상삭제되면 ok , 삭제못하면 NG
  if (result.rowsAffected) {
    res.json({
      retCode: "OK",
      BOARD_NO: result.outBinds.bno[0],
      TITLE: title,
      WRITER: writer,
      CONTENT: content,
    }); // {"retCode":"OK"}
  } else {
    res.json({ retCode: "NG" });
  }
});
//test

app.listen(3000, () => {
  console.log("http://localhost:3000");
}); //서버실행
