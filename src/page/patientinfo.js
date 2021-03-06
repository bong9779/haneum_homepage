import React, { Component } from 'react';
import './main.css';
import { SearchPatient } from './index.js';
import axios from 'axios';
import queryString from 'query-string';
import patientinfo from '../image/patientinfo.PNG';

class info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      page : 1, //1장에
      limit : 7, //7 튜플이 최대 출력
      all_page : [],
      search : "",
    }
  }

  componentDidMount() {
    this._getListData();
    this._setPage();
  }

  _getListData = async function() {
    const { limit } = this.state;
    const page = this._setPage();
    let search = queryString.parse(this.props.location.search);
    if(search) {
      search = search.search;
    }
    console.log(search);
    
    //데이터 개수 가져오기 
    const total_cnt = await axios('/get/users_cnt',{
      method : 'POST',
      headers : new Headers(),
      data : {search : search}
    });

    //데이터 가져오기
    const total_list = await axios('/get/users', {
      method : 'POST',
      headers: new Headers(),
      data : { limit : limit, page : page, search : search }
    })
    //page에 10개의 튜플만 출력, 이후 다음장으로 넘어가도록 구현
    let page_arr = [];
    for(let i = 1; i <= Math.ceil(total_cnt.data.cnt / limit); i++) {
        page_arr.push(i);}
    this.setState({ data : total_list, all_page : page_arr, search : search });
  }
  //페이지를 클릭했을때 페이지 변경하는 함수
  _changePage = function(el) {
    this.setState({ page : el })
    sessionStorage.setItem('page', el);

    return this._getListData();
  }
  //새로고침을 하였을때 state값 초기화를 방지하기 위함
  _setPage = function() {
    if(sessionStorage.page) {
      this.setState({ page : Number(sessionStorage.page) })
      return Number(sessionStorage.page);
    }
    
    this.setState({ page : 1 })
    return 1;
  }

  //프론트 구성
  render() {
    const list = this.state.data.data;
    const { all_page, page, search } = this.state;
    
    return (
      <div>
      <img src = {patientinfo}
      width='200'
      className="tableinfo"/>
      <div className='List'>

        <div className='listpatient_grid list_tit'>
          <div> 환자번호 </div>
          <div> 환자이름 </div>
          <div> 환자아이디 </div>
          <div> 환자이메일 </div>
          <div> 환자전화번호 </div>
        </div>

          {list && list.length>0 ? list.map( (el, key) => {
            return(
              <div className='listpatient_grid list_data' key={key}>
                <div> {el.patient_id} </div>
                <div> {el.UserName}</div>
                <div> {el.UserId}</div>
                <div> {el.UserEmail} </div>
                <div> {el.UserPhone} </div>
              </div>
            )
          })
            : <div className='not_data acenter'>
            {search !== "" ? <div> 검색된 결과가 없습니다. </div> // 검색 사용
                          : <div> 데이터가 없습니다. </div> // 검색 사용 X
            }
            </div>}
        <div className='paging_div'>
            <div> </div>
            <div>
              <ul>
                {all_page ? all_page.map( (el, key) => {
                  return(
                    el === page ? <li key={key} className='page_num'> <b> {el} </b> </li>
                                : <li key={key} className='page_num' onClick={() => this._changePage(el)}> {el} </li>
                  )
                })
                
                : null}
              </ul>
              <SearchPatient
              search = {search}/>
            </div>
            <div> </div>
          </div>
      </div>
      </div>
    );
  }



}

export default info;


