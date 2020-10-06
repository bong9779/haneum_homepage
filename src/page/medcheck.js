import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import { Tooltip,OverlayTrigger, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import medcheck1 from '../image/medcheck.PNG';
class medcheck extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const viMgrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         6-8(세) 135mg &nbsp; 125mg
         </p>
         <p>
         9-11 190mg &nbsp; 180mg
         </p>
         <p>
         12-14 265mg &nbsp; 245mg
         </p>
         <p>
         15-18 335mg &nbsp; 285mg
         </p>
         <p>
         19-29 295mg &nbsp; 235mg
         </p>
         <p>
         30~ 305mg &nbsp; 235mg
         </p>
         
  

      </Tooltip>
    );
    const viArenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         6-8(세) 450ug &nbsp; 6-8(세) 400ug
         </p>
         <p>
         9-11 600ug &nbsp; 9-11 550ug
         </p>
         <p>
         12-14 750ug &nbsp; 12-14 650ug
         </p>
         <p>
         15-18 850ug &nbsp; 15-18 600ug
         </p>
         <p>
         19-29 800ug &nbsp; 19-49 650ug
         </p>
         <p>
         30-64 750ug &nbsp; 50-64 600ug
         </p>
         <p>
         65~ 700ug &nbsp; 65~ 755ug
         </p>
  

      </Tooltip>
    );

    const viBrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 1.5mg &nbsp; 1.4mg
         </p>
         <p>
         15-19 1.8mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1.4mg
         </p>
         <p>
         20-49 1.5mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1.4mg
         </p>
         <p>
         50~&nbsp;&nbsp; 1.5mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.4mg
         </p>
         

      </Tooltip>
    );

    const viCrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         6-8(세) 55mg &nbsp; 6-8(세) 60mg
         </p>
         <p>
         9-11 70mg &nbsp; 9-11 80mg
         </p>
         <p>
         12-14 90mg &nbsp; 12-14 100mg
         </p>
         <p>
         15-18 105mg &nbsp; 15-18 95mg
         </p>
         <p>
         19~ 100mg &nbsp; 19~ 100mg
         </p>
        
  

      </Tooltip>
    );

    const viErenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
        &nbsp;&nbsp;충분섭취량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상한섭취량
        </p>
        <p>
        6-8세&nbsp;&nbsp; 7mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;300mg
        </p>
         <p>
         9-11&nbsp;&nbsp; 9mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400mg
         </p>
         <p>
         12-14&nbsp;&nbsp; 10mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400mg
         </p>
         <p>
         15-18&nbsp;&nbsp; 11mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;500mg
         </p>
         <p>
         19~&nbsp;&nbsp; 12mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;540mg
         </p>
         <p>
         &nbsp; 12~&nbsp;&nbsp; 10ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;540mg
         </p>
        
  

      </Tooltip>
    );

    const viDrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
        &nbsp;&nbsp;충분섭취량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상한섭취량
        </p>
        <p>
        6-8세&nbsp;&nbsp; 5ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40ug
        </p>
         <p>
         9-11&nbsp;&nbsp; 5ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60ug
         </p>
         <p>
         &nbsp; 12~&nbsp;&nbsp; 10ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100ug
         </p>
         <p>
         비타민 D의 정확한 섭취량과 체내합성량을 파악하기 힘들어 
이정도 먹으면 결핍에 걸리지 않고 신체를 영위하는데 큰지장이 없을 것이라 판단되는 충분섭취량을 설정하였습니다.
비타민 D 결핍으로 인한 질환을 막기 위해서는 충분섭취량을 비타민 D 기능의 적극적 활용을 위해서는 상한 섭취량까지 드시기 바랍니다.
         </p>
  

      </Tooltip>
    );
    const viTirenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 1.2mg &nbsp; 1.0mg
         </p>
         <p>
         15-19 1.4mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1.0mg
         </p>
         <p>
         20-49 1.2mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1.1mg
         </p>
         <p>
         50~&nbsp;&nbsp; 1.2mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.1mg
         </p>
         

      </Tooltip>
    );
    const viRrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 1.5mg &nbsp; 1.2mg
         </p>
         <p>
         15-19 1.8mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    1.2mg
         </p>
         <p>
         20-49 1.5mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1.2mg
         </p>
         <p>
         50~&nbsp;&nbsp; 1.5mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.2mg
         </p>
         

      </Tooltip>
    );
    const viNrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 15mgNE &nbsp; 13mgNE
         </p>
         <p>
         15-19 18mgNE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13mgNE
         </p>
         <p>
         20-49 16mgNE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  14mgNE
         </p>
         <p>
         50~&nbsp;&nbsp; 16mgNE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   14mgNE
         </p>
         

      </Tooltip>
    );
    const viYrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 360ug &nbsp; 360ug
         </p>
         <p>
         15-19 400ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 400ug
         </p>
         <p>
         20-49 400ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  400ug
         </p>
         <p>
         50~&nbsp;&nbsp; 400ug &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   400ug
         </p>
         

      </Tooltip>
    );
    const viKrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 1000mg &nbsp; 900mg
         </p>
         <p>
         15-19 1000mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 900mg
         </p>
         <p>
         20-49 700mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  700mg
         </p>
         <p>
         50~&nbsp;&nbsp; 700mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   800mg
         </p>
         

      </Tooltip>
    );
    const viIrenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 1000mg &nbsp; 900mg
         </p>
         <p>
         15-19 1000mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 800mg
         </p>
         <p>
         20-49 700mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  700mg
         </p>
         <p>
         50~&nbsp;&nbsp; 700mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  700mg
         </p>
         

      </Tooltip>
    );
    const viCurenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 12mg &nbsp; 12mg
         </p>
         <p>
         15-19 16mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16mg
         </p>
         <p>
         20-49 10mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  14mg
         </p>
         <p>
         50~&nbsp;&nbsp; 10mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9mg
         </p>
         

      </Tooltip>
    );
    const viAArenderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        <p>
          남자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여자
        </p>
         <p>
         12-14(세) 8mg &nbsp; 7mg
         </p>
         <p>
         15-19 10mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9mg
         </p>
         <p>
         20-49 10mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  8mg
         </p>
         <p>
         50~&nbsp;&nbsp; 9mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8mg
         </p>
         

      </Tooltip>
    );
    return (
      
      <div className='Signup'>
    
        <img src = {medcheck1}
        width='200'
        className="boardinfo"/>
      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viArenderTooltip}
  >
    <Button className="vi-A" variant="info" >&nbsp;&nbsp;비타민 A&nbsp;&nbsp;</Button>
  </OverlayTrigger>
       
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viBrenderTooltip}
  >
    <Button className="vi-B" variant="info" >&nbsp;&nbsp;비타민 B6&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      
      </div>

      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viCrenderTooltip}
  >
    <Button className="vi-C" variant="info" >&nbsp;&nbsp;비타민 C&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viDrenderTooltip}
  >
    <Button className="vi-D" variant="info" >&nbsp;&nbsp;비타민 D&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      
      </div>

      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viErenderTooltip}
  >
    <Button className="om" variant="info" >&nbsp;&nbsp;비타민 E&nbsp;&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viMgrenderTooltip}
  >
    <Button className="mg" variant="info" >&nbsp;&nbsp;마그네슘&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      
      </div>

      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viCurenderTooltip}
  >
    <Button className="Cu" variant="info" >&nbsp;&nbsp;철&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;분&nbsp;&nbsp; </Button>
  </OverlayTrigger>
        
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viTirenderTooltip}
  >
    <Button className="ti" variant="info" >&nbsp;&nbsp;&nbsp;&nbsp;티아민&nbsp;&nbsp;&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
        
      </li>
      
      </div>


      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viRrenderTooltip}
  >
    <Button className="R" variant="info" >리보플래빈</Button>
  </OverlayTrigger>
        
        
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viNrenderTooltip}
  >
    <Button className="N" variant="info" >&nbsp;&nbsp;&nbsp;&nbsp;니아신&nbsp;&nbsp;&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      
      </div>


      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viYrenderTooltip}
  >
    <Button className="Y" variant="info" >&nbsp;&nbsp;엽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;산&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viKrenderTooltip}
  >
    <Button className="K" variant="info" >&nbsp;&nbsp;칼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;슘&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      
      </div>

      <div className='Medcheck'>
        <li>
        <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viIrenderTooltip}
  >
<Button className="I" variant="info" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>  
</OverlayTrigger>
        
        
      </li>
      <li>
      <OverlayTrigger
    placement="right"
    delay={{ show: 130, hide: 400 }}
    overlay={viAArenderTooltip}
  >
    <Button className="AA" variant="info" >&nbsp;&nbsp;아&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연&nbsp;&nbsp;</Button>
  </OverlayTrigger>
        
      </li>
      
      </div>
      
      

  


     

    
    </div>
    );
  }
}

export default medcheck;


