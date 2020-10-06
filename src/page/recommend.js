import React, { Component } from 'react';
import recommend1 from '../image/recommend.PNG';
import recommend2 from '../image/recommend2.PNG';
import './main.css';
import axios from 'axios';
import queryString from 'query-string';
import { SearchBoard } from './index.js';
import {Button} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      page : 1,
      limit : 7,
      all_page : [],
      search : "",
      loginid : "",
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
        
        //테이블 데이터 수
        const total_cnt = await axios('/get/recommendboard_cnt',{
          method : 'POST',
          headers: new Headers(),
          data : { search : search }
        });
        //데이터 가져오기
        const total_list = await axios('/get/recommendboard', {
          method : 'POST',
          headers: new Headers(),
          data : { limit : limit, page : page, search : search }
        })
        let page_arr = [];
        for(let i = 1; i <= Math.ceil(total_cnt.data.cnt / limit); i++) {
            page_arr.push(i);}
        console.log(page_arr+"~~~page_arr!!!!!!!!!!!!!");
        this.setState({ data : total_list, all_page : page_arr, search : search });
      }
      //페이지바꾸기 눌렀을시
      _changePage = function(el) {
        this.setState({ page : el })
        sessionStorage.setItem('page', el);
    
        return this._getListData();
      }
      //페이지 번호 설정
      _setPage = function() {
        if(sessionStorage.page) {
          this.setState({ page : Number(sessionStorage.page) })
          return Number(sessionStorage.page);
        }
        
        this.setState({ page : 1 })
        return 1;
      }
    
      

  render() {
    const list = this.state.data.data;
    const { all_page, page, search } = this.state;
    return (
      
        <div>
        <div>
          <img src = {recommend1}
      width='130'
      className="boardinfo"/>
      <Button className ='writebtn' size="sm" variant="light"  href={'/recommendwrite'}>추천작성</Button>
        </div>
          <img src = {recommend2}
          width='800'
          className="boardinfo"/>
          <div className='List'>
            
            <div className='listreview_grid list_tit'>
              <div> 제목 </div>
              <div> 작성자 </div>
              <div> {this.props.location.loginid}</div>
            </div>
    
              {list && list.length>0 ? list.map( (el, key) => {
                const view_url = '/viewrecommend/'+el.board_id;
                return(
                  <div className='listreview_grid list_data' key={key}>
                    <div> <Link to={view_url}>{el.title}</Link></div>
                    <div> {el.writer}</div>
                    <div> {el.writetime.slice(0, 10)} </div>
                  </div>
                )
              })
                :  <div className='not_data acenter'>
                    {search !== "" ? <div> 검색된 결과가 없습니다. </div> // 검색 사용
                                  : <div> 데이터가 없습니다. </div> // 검색 사용 X
                    }
                    </div>
                  }
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
                  
                  
                  <SearchBoard
                    search = {search}
                  />
                </div>
                <div> </div>
              </div>
          </div>
          </div>
    );
  }
}

export default recommend;

