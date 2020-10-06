import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import '../App.css';
import logo from '../image/logo.PNG';
import logo1 from '../image/logo1.jpg';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import imgtitle from '../image/title.png';
import '../page/main.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReviewBoard } from '../page';
import ReviewBoards  from '../page/reviewboard';
class header extends Component {
  constructor(props){
      super(props)
      this.state = { //변수 초기화
          visible : false,
          visible_signup : false,
          id : "",
          password : "",
          login : false,
          loginid : "",
      } 
  }
  componentDidMount() {
    if(sessionStorage.login) {
      this.setState({ login : true })
    }
    
  }
  _selectUserData = async (e) => { const id = this.state.id.trim();
    const password = this.state.password.trim();
    if(id === "") { //아이디가 빈칸일시
      return alert('아이디를 입력해주세요.');

    } else if(password === "") { //비밀번호가 빈칸일시
      return alert('비밀번호를 입력해주세요.');
    }
    const obj = { id : id, password : password }
    const res = await axios('/send/pw', { //비밀번호 입력시 비밀번호 MVC패턴으로 보냄
      method : 'POST',
      data : obj,
      headers: new Headers()
      })
      if(res.data) { 
        console.log(res.data.msg);
      }
      if(res.data.suc){ //데이터 받을시 로그인완료
        sessionStorage.setItem('login',true);
        this.setState({login:true});
        this._closeModal();
        const loginid = res.data.id;
        this.setState({
          loginid : loginid
        });
        return alert(loginid+'님 로그인 완료'); 
        
      }else{ //로그인실패
        return alert('아이디 및 비밀번호가 일치하지 않습니다');
      }
   }

  _openModal = function() { //로그인창 띄우기
    this.setState({
        visible : true
    });
  }

  _closeModal = function() { //로그인창 닫기
      this.setState({visible : false});
  }
  _changeID = function() { //아이디 입력
    const id_v = document.getElementsByName('id')[0].value;

    this.setState({
        id : id_v
    });
  }
  _changePW = function() { //비밀번호입력
    const pw_v = document.getElementsByName('password')[0].value;

    this.setState({
        password : pw_v
    });
  }
  _logout = function() { //로그아웃
    if(window.confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('login')
      this.setState({ 
        login : false,
        loginid : "" })
    }
  }

  render() {
    const url = '/'+this.state.loginid;
    const { admin, user_ip } = this.props;
    console.log('아이디: ' + this.state.id + ' 비밀번호: '+this.state.password);

    return (
        
        <div className="Navigation">
      
            <Navbar bg="info" variant="light">
            <Navbar.Brand href='/'><img width="45" height="40" src={logo}></img></Navbar.Brand>
            <Nav className="mr-auto">
            <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-button-drop-down">
            PRODUCT
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {this.state.login ?
              <Dropdown.Item href='/purchase'>제품 구매</Dropdown.Item>:
              <Dropdown.Item> 제품 구매</Dropdown.Item>}
              {this.state.login ?
              <Dropdown.Item href='/reviewboard'>제품 후기</Dropdown.Item>:
              <Dropdown.Item> 제품 후기</Dropdown.Item>}
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
            HEALTH
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='/recommend'>영양제 추천</Dropdown.Item>
              <Dropdown.Item href='/medcheck'>비타민 권장량 확인</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            
                </Nav>
                <div className='acenter_login'> 
                  {this.state.login ? <Button variant="info" href='/'><h6 onClick={() => this._logout()}>LOGOUT</h6></Button>
                  : <div className='menu'>
                      <li><h6 className='btn_cursor'onClick={() => this._openModal()}><Button variant="info" >LOGIN</Button></h6></li>
                      <li><h6> <Button variant="info" href='/signup'>SIGNUP</Button></h6></li>
                    </div>
            }
            <Modal visible={this.state.visible} 
                       width="400" height="350"
                       effect="fadeInDown" 
                       onClickAway={() => this._closeModal()}>
                  <div>

                    <h5 className='acenter_login_tit'> LOGIN </h5>
                    <img width="45" height="40" src={logo1}></img>
                    <form>
                    <div className='login_div'>
                      <div className='login_input_div'>
                        <p> ID </p>
                        <input type='text' name='id' onChange={() => this._changeID()}/>
                      </div>

                      <div className='login_input_div' style={{ 'marginTop' : '40px'}}>
                        <p> Password </p>
                        <input type='password' name='password' onChange={()=>this._changePW()}/>
                      </div>

                      <div className='submit_div'>
                        <Button variant="info"  size="sm"  onClick={() => this._selectUserData()}>로그인</Button>
                        <div>
                        </div>
                        <Button variant="info"  size="sm"  onClick={() => this._closeModal()}>취소</Button>
                      </div>
                    </div>
                    </form>
                  </div>
                </Modal>
            </div>
            </Navbar>
     
        </div>
    );
  }
}

export default header;


