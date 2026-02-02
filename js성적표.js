    //성적처리 함수
    //이름, 국어, 영어, 수학 입력 = 매개변수
    //총점, 평균, 등급 계산
    //이름 총점 평균 등급 출력
    function sungjuk(name, kor, eng, math){
      let sum = kor + eng + math;
      let avg = parseInt(sum / 3);
      let grade = ''; 
      if(avg >= 90){
       grade = 'A'; 
      }else if(avg >= 80){
        grade = 'B';
      }else if(avg >= 70){
         grade = 'C';
      }else{
        grade = 'D';
      }
      // return`${name}\t${sum}\t\t${avg}\t\t${grade}`
      // console.log(name kor eng math)
      // console.log(sungjuk('호두', 100, 100, 99))
      return`
        <tr>
          <td>${name}</td>
          <td>${sum}</td>
          <td>${avg}</td>
          <td>${grade}</td>
        </tr>
        `
    }
    //함수 호출
      let sungTable = '<table><caption>성적표<caption>'
      sungTable += `
      <tr>
        <th>이름</th>
        <th>총점</th>
        <th>평균</th>
        <th>등급</th>
      </tr>
      `
      sungTable += sungjuk('호두', 100, 100, 99)
      sungTable += sungjuk('군밤', 87, 85, 97)
      sungTable += sungjuk('모찌', 82, 92, 90)
      '</table>'

      document.write(sungTable)