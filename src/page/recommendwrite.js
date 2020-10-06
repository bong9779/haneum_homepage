import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import listtitle from '../image/listtitle.PNG';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boardinfo from '../image/boardtitle.PNG';
class recommendwrite extends Component {
  constructor(props) {
    super(props)
    this.state ={
      title_recommendboard : "",
      name_recommendboard : "",
      contents_txt : ""
  }
  }

  _submitBoard = async function() {
    const title_recommendboard = document.getElementsByName('title_recommendboard')[0].value.trim();
    const name_recommendboard = document.getElementsByName('name_recommendboard')[0].value.trim();
    const contents_txt = document.getElementsByName('contents_txt')[0].value.trim();
    // 각 입력 칸이 비어있을때 입력버튼 눌렀으면
    if(title_recommendboard === "" ){ 
        return alert('제목을 입력하시오.');
    }else if(name_recommendboard === ""){
        return alert('작성자를 입력하시오.');
    }else if(contents_txt === ""){
        return alert('내용을 입력하시오.');
    }
    // 각 데이터 입력값 할당 
    const data = { title_recommendboard : title_recommendboard, name_recommendboard : name_recommendboard, contents_txt : contents_txt};
    const res = await axios ('/add/recommendboard',{ //데이터베이스 삽입 요청
      method: 'POST', 
      data : data,
      headers : new Headers()
  })
  if(res.data){ //삽입 확인 
    alert('게시판 등록이 완료되었습니다');
    return window.location.replace('/'); //메인화면으로 복귀
  }
  
}

  render() {

    return (
      <div>
        <img src = {boardinfo}
        width='160'
        className="boardinfo"/>
      <div className="Write">
        <InputGroup>
        <FormControl
         type='text'
         name='title_recommendboard'
         id='_title_recommendboard'
         width = "100px"
        placeholder="제목 ( 예시 : [정관장 오메가3] 추천합니다 ) "
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  
        <InputGroup>

        <FormControl
         type='text'
         name='name_recommendboard'
         id='_name_recommendboard'
         width = "100px"
        placeholder="작성자"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  


        <InputGroup>
        <FormControl as="textarea" id='_contents_txt' name='contents_txt' placeholder="내용을 입력하세요." />
        </InputGroup>
        
        

        <div id='post_submit'>
        <Button variant="light" onClick={() => this._submitBoard()}>등록</Button>
          </div>


      </div>
      </div>
    );
  }
}

export default recommendwrite;