//성적표 만들기
    //학생 hong, sung, lee 객체만들기
    //학생의 속성은 이름, 국어점수, 영어점수, 수학점수
    //메소드 : 총점, 평균 구하는 메소드 작성

    //학생 객체 생성자 함수
    function Student(name, kor, eng, math, javascript){
      this.name = name,
      this.kor = kor,
      this.eng = eng,
      this.math = math,
      this.javascript = javascript
      //this.rank = 1
    }

    //생성자 함수의 공통 공간에 생성 -> 모든 인스턴스(객체)가 사용하도록 함(메모리 공간을 효율적으로 사용)
    Student.prototype.getsum = function(){
        return this.kor + this.eng + this.math + this.javascript;
     }
    Student.prototype.getavg = function(){
        return parseInt(this.getsum() / 4);
     }
    //등급만들기
    Student.prototype.grade = function(){
      let grade = '';
        switch(parseInt(this.getavg() / 10)){
          case 10 : 
          case 9 : grade = 'A';break;
          case 8 : grade = 'B';break;
          case 7 : grade = 'C';break;
          case 6 : grade = 'D';break;
          default : grade = 'F';
       }
         return grade;
     }
     //석차만들기
     Student.prototype.rank = function(){ //
      let count = 1; //카운트를 1부터 시작
      for(let i=0; i<students.length; i++){ //나의 
        if(this.getsum() < students[i].getsum()){
          count++;
        }
      }return count;
     }
     
    // let hong = {
    //   name : '홍길동',
    //   kor : 100,
    //   eng : 82,
    //   math : 75,
    //   getsum : function(){
    //     return this.kor + this.eng + this.math;
    //   }

    //   getavg : function(){
    //     return this.getsum() / 3;
    //   }
    // }

    // let hong = new Student('홍길동', 78, 82, 73);
    // let sung = new Student('성춘향', 87, 65, 90);
    // let lee = new Student('이몽룡', 100, 78, 86);

    //배열에 학생 객체 저장
    let layout = `
    <table border="1">
    <caption>성적표 석차</caption>
    <th>이름</th>
    <th>총점</th>
    <th>평균</th>
    <th>등급</th>
    <th>석차</th>`;
    let students = [ //데이터는 작성후 수정하면안됨
      new Student('홍길동', 78, 82, 73, 82),
      new Student('성춘향', 87, 65, 61, 60),
      new Student('이몽룡', 100, 78, 86, 78),
      new Student('김호두', 100, 100, 100, 100),
      new Student('이군밤', 89, 90, 98, 83),
      new Student('전모찌', 91, 73, 81, 68),
      new Student('월요일', 78, 83, 71, 92),
      new Student('싫어', 48, 68, 70, 25)
    ];
    console.log(students);
    console.log(students[0] instanceof Student);
    let person = {
      name : '아무개'
    }
    console.log(person instanceof Student);

    // let ranks = new Array(students.length).fill(1);
    
    // for(let i=0; i<getavg.lengthl; i++){
    //   for(let j=0; j<getavg.length; j++){
    //     if(getavg[j] > getavg[i]){
    //       ranks[i]++
    //     }
    //   }
    // }
    // for(let i=0; i<getavg.length; i++){
    //   document.writeln(`${i+1}번 학생 : 점수 ${getavg}점, 석차${ranks}등`)
    // }

    // const students = [
    //   {name: '홍길동', getavg:78}
    // ]



    for(let i=0; i<students.length; i++){ //출력 장소에서 표같은거 수정 가능
      layout +=
        `<tr>
          <td>${students[i].name}</td>
          <td>${students[i].getsum()}</td>
          <td>${students[i].getavg()}</td>
          <td>${students[i].grade()}</td>
          <td>${students[i].rank()}</td>
         </tr>`
    }
    layout += `</table>`
    document.write(layout);


    //문서에 표 작성

    //과목 추가 : java -속성추가 완료
    //Student.java = 'javascript';

    //등급 추가 : A, B, C, D, F - 메소드 추가
    //학생 데이터 5명 - 객체데이터 추가 <완료>
    //css 작성 표 디자인
    //css, java 외부파일로 저장 -> 연결
    //석차구하기(중첩 반복문 사용)



    // let sung : {
    //   name : '성춘향',
    //   kor : 87,
    //   eng := 65,
    //   math : 90,
    //   getsum = function(){
    //     return this.kor + this.eng + this.math;
    //   }

    //   getavg : function(){
    //     return this.getsum() / 3;
    //   }
    // }

    // let lee : {
    //   name : '이몽룡',
    //   kor : 100,
    //   eng : 78,
    //   math : 86,
    //   getsum : function(){
    //     return this.kor + this.eng + this.math;
    //   }

    //   getavg : function(){
    //     return this.getsum() / 3;
    //   }
    // }

    // document.write(`<p>${hong.name} : ${hong.getsum()} : ${hong.getavg()}</p>`)
    // document.write(`<p>${sung.name} : ${sung.getsum()} : ${sung.getavg()}</p>`)
    // document.write(`<p>${lee.name} : ${lee.getsum()} : ${lee.getavg()}</p>`)