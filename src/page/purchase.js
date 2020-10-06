import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import medlogo from '../image/medinfo.PNG';
import purchasetitle from '../image/purchasetitle.PNG';
import smartmed from '../image/smartmed.PNG';

class purchase extends Component {
  constructor(props) {
    super(props)
    this.state ={
    }
  }

  _purchase = async function() { 

    const purchasename = document.getElementsByName('purchase_name')[0].value.trim();
    const purchaseaddress = document.getElementsByName('purchase_address')[0].value.trim();
    const purchasepassword = document.getElementsByName('purchase_password')[0].value.trim();
    const purchasephone = document.getElementsByName('purchase_phone')[0].value.trim();
  
    if(purchasename.length === 0 || purchasename.length < 2) {
      return alert('이름은 최소 2글자 이상 입력해야 합니다.');}

    if(purchaseaddress.length === 0 || purchaseaddress.length < 2) {
      return alert('주소는 최소 2글자 이상 입력해야 합니다.');}

    if(purchasepassword.length === 0 || purchasepassword.length < 2) {
      return alert('비밀번호는 최소 2글자 이상 입력해야 합니다.');}

    if(purchasephone.length === 0 || purchasephone.length < 2) {
      return alert('전화번호는 최소 2글자 이상 입력해야 합니다.');}
    
    const data = { 
        purchasename : purchasename,
        purchasepassword : purchasepassword,
        purchaseaddress : purchaseaddress, 
        purchasephone : purchasephone  };

    //데이터베이스에 입력값 전송
      const res = await axios('/add/purchases', {
        method : 'POST',
        headers: new Headers(),
        data : data
      })
      //반환된 값이 이미 존재하는 아이디일시
      if(res.data) {
        
        alert('주문이 완료되었습니다.');
        return window.location.href = '/';
      }
  }


  render() {

    return (
      <div>
        <div> 
             <img src = {purchasetitle} width='150' className="tableinfo"/>
        </div>
        <div>
        
    
        <div className='purchase'>
          <div>
          <div> 
             <img src = {smartmed} width='300' />
        </div>
            <div>
              <h6> 아이디 </h6>
              <input type='text' maxLength='20' name='purchase_name'/>
            </div>

            <div>
              <h6> 전화번호 </h6>
              <input type='text' maxLength='11' name='purchase_phone'/>
            </div>
  
            <div>
              <h6> 주소 </h6>
              <input type='text' name='purchase_address'/>
            </div>
  
            <div>
              <h6>  주문확인 비밀번호 </h6>
              <input type='password' maxLength='15' name='purchase_password'/>
            </div>


            <div>
              <h6>  우리은행 123-123123-123으로 입금해주세요 (주문자명: 아이디)</h6>
            </div>
  
          </div>
          
          <div>
          <Button className="purchasebtn" variant="info" onClick={() => this._purchase()}>주문하기</Button>
        </div>
        </div>
  
       
  
      
      </div>
      </div>
    );
  }
}

export default purchase;


