// 입력상자와 버튼에 접근
let book = document.querySelector('#book');
let addBtn = document.querySelector('#add');
let bookList = document.querySelector('#bookList');

// 도서 목록 저장 배열 생성
let books = [];

// 추가 버튼에 클릭 이벤트 연결
// books.onclick = bookList;

addBtn.addEventListener('click', addbook);

//엔터 => 강제 새로고침 방지 (검색해서 이것저것 시도해보다가 성공했어요)
document.addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    addbook();
  }
})

// book.addEventListener('keypress', keyevent)
// function keyevent(e){
//   if(e.key == 'Enter'){
//     e.preventDefault();
//     addbook();
//   }  
// }

// 배열에 도서 목록 추가
  function addbook(){
    let bookdata = book.value;
    if(bookdata == ''){
      alert('책 제목을 입력하세요.')
    }else{
      if(books.indexOf(bookdata) != -1){
        alert('이미 존재하는 책입니다.')
      }else{
        books.push(bookdata);
      }
    }
    book.value = '';
    // console.log(books);
    book.focus();
    showFunc();
  }

// 문서에 도서목록 출력(<ul><li>)
function showFunc(){
  let list = '<ul>';
  for(let idx in books){
    list += `
      <li>${books[idx]}
      <span class='del' id=${idx}>삭제</span>
      </li>`
  }
  list += `</ul>`;
  // console.log(list);
  bookList.innerHTML = list;


//삭제 대상
let delList = document.querySelectorAll('.del');
  // console.log(delList);
  for(let ele of delList){
    ele.addEventListener('click', delFunc)
  }
}
// 문서에 도서 목록 삭제
function delFunc(){
  let delNum = this.getAttribute('id');
  books.splice(delNum, 1);
  showFunc();
}

//엔터치면 리셋? 이벤트디폴트 때문에 그러는건데
//키 프레스 이벤트를 만들어서 처리하라?????