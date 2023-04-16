import React from "react";
import {FiMail,FiPhoneCall,FiHome} from 'react-icons/fi';
import '../components/resume.css';
import jsPDF from 'jspdf';

const Template=(param)=>{
    function temp1(){
        
        const element = document.getElementById("template1");
        const width = element.offsetWidth;
const height = element.offsetHeight;
const doc = new jsPDF('px','px',[width+(width/2),height]);
        const html = element.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save("template1.pdf");
          },
        });

    }
    function temp2(){
        
        const element = document.getElementById("template2");
        const width = element.offsetWidth;
const height = element.offsetHeight;
const doc = new jsPDF('px','px',[width+(width/2),height]);
        const html = element.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save("template2.pdf");
          },
        });

    }
    function temp3(){
        
        const element = document.getElementById("template3");
        const width = element.offsetWidth;
const height = element.offsetHeight;
const doc = new jsPDF('px','px',[width+(width/2),height]);
        const html = element.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save("template3.pdf");
          },
        });

    }
    return(
        <>
    <h1 id='cente'>Final Resume </h1><br/>
 <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-5' id="template1">
        <h3 id='cente'> Template1</h3>
    <div id='chpq'  className='template1'>
        <div id='templ' className='row'>
            <div className='col-md-6'>
            <h2>{param.firstName+' '+param.lastName}</h2>
        <h3>{param.role}</h3>
            </div>
            <div className='col-md-6'>
            <h4><FiPhoneCall/>&nbsp;{param.phone}</h4>
        <h4><FiMail/>&nbsp;{param.email}</h4>
        <h4><FiHome/>&nbsp;{param.address}</h4>
            </div>
        </div>
        <div className='row' id='roww'></div>
        <div className='row' style={{marginLeft:'5%',marginRight:'5%'}}>
            <h3><b>About  Me:</b></h3>
            <h4>{param.about}</h4>
        </div>
        <div className='row' id='roww'></div>
        <div className="row" id='row11'>
           <h3><b>Education :</b></h3>
          <div className='col-md-5'>
          <h5><b>Degree/U.G :</b></h5>
          <h5> {param.bname}</h5>
          <h5> {param.bgrade} CGPA</h5>
          <h5> {param.byear} batch</h5>
          </div>
          <div className='col-md-1' id='colmd'>
          <h3>|</h3>
          <h5>|</h5>
          <h5>|</h5>
          <h5>|</h5>

          </div>  
          <div className='col-md-5'>
          <h5><b>Intermediate/Diplamo :</b></h5>
          <h5> {param.intercoll}</h5>
          <h5> {param.intercgpa} CGPA</h5>
          <h5> {param.interyear} batch</h5>
          </div>

        </div>
        <div className='row' id='roww'></div>
        <div className='row' id='row11'>
        <div className='col-md-5'>
        <h3><b>Ceritifications:</b></h3>
        
            <h4>{param.c1}</h4>
            <h4>{param.c2}</h4>
            <h4>{param.c3}</h4>
        

        </div>
        <div className='col-md-1' id='colmd'>
        <h3>|</h3>
        <h4>|</h4>
        <h4>|</h4>
        <h4>|</h4>
        </div>
        <div className='col-md-5'>
        <h3><b> Skills:</b></h3>
        <h4>{param.s1}</h4>
            <h4>{param.s2}</h4>
            <h4>{param.s3}</h4>
        </div>
        </div>
        <div className='row' id='roww'></div>
        <div className='row' style={{marginLeft:"5%"}}>
            <h3><b>Projects:</b></h3>
        <h4>1.{param.p1}</h4>
        <h4><b>Description:</b>{param.pjd1}</h4>
        <br/>
        <h4>2.{param.p2}</h4>
        <h4><b>Description :</b>{param.pjd2}</h4>
        </div>
        <div className='row' id='roww'></div>
        <div className='row'id='row11'>
            <h4><b>Declaration:</b></h4>
            <h5>I hereby declare that all the details provided above are true to the best of my knowledge.</h5>
        </div>
    </div>
    <br/>
<center>    <button className='btn btn-primary' onClick={temp1} > Download</button></center>
   
    </div>
    <div className='col-md-1'></div>
    <div className='col-md-5' id="template2">
    <h3 id='cente'> Template2</h3>
    <div className='row'id='chang'>
        <h3 id='cente'>{param.firstName+" "+param.lastName}</h3>
        <h3 id='cente'>{param.role}</h3>
        <h3> <b>AboutMe :</b>{param.about}</h3>
        <div className='col-md-6'>
            <h4><b>Personal Details:</b></h4>
            <h4><FiPhoneCall/>&nbsp;+91-{param.phone}</h4>
        <h4><FiMail/>&nbsp;{param.email}</h4>
        <h4><FiHome/>&nbsp;{param.address}</h4>
<br/>
<h4><b>Skills:</b></h4>

        <h4>{param.s1}</h4>
            <h4>{param.s2}</h4>
            <h4>{param.s3}</h4>

<h4><b>Ceritifications:</b></h4>
<h4>{param.c1}</h4>
            <h4>{param.c2}</h4>
            <h4>{param.c3}</h4>
        </div>
        <div className='col-md-6'>
        <h4><b>Education:</b></h4>
        <h4><b>Degree/U.G :</b></h4>
          <h4> {param.bname}</h4>
          <h4> {param.bgrade} CGPA</h4>
          <h4> {param.byear} batch</h4>
         <br/>
          <h4><b>Intermediate/Diplamo :</b></h4>
          <h4> {param.intercoll}</h4>
          <h4> {param.intercgpa} CGPA</h4>
          <h4> {param.interyear} batch</h4>
        
          <h4><b>SSC DETAILS</b></h4>
          <h4>{param.schoolname}</h4>
          <h4>{param.schoolcgpa}</h4>
          <h4>{param.schoolyear}</h4>
          <br/>
          </div>
          <h4><b>Projects:</b></h4>
        <h4>1.{param.p1}</h4>
        <h4><b>Description:</b>{param.pjd1}</h4>
       
        <h4>2.{param.p2}</h4>
        <h4><b>Description :</b>{param.pjd2}</h4>
        <h4><b>Declaration:</b></h4>
            <h5>I hereby declare that all the details provided above are true to the best of my knowledge and are absolutly correct</h5>
       
    </div>
    
    <br/>
<center>    <button className='btn btn-primary' onClick={temp2} > Download</button></center>
   
    </div>
<div className='col-md-12'>
<div className='col-md-3'></div>
    <div className='col-md-5' id="template3">
    <h3 id='cente'> Template-3</h3>
    <div className='row' id='onet'>
      <h3 id='cente'>{param.firstName+" "+param.lastName}</h3>
      <h3 id='cente'>{param.role}</h3>
      <div className='row' id='bdr'></div>
      <h4><b>About_Me:</b>{param.about}</h4>
      <div className='row' id='bdr'></div>
      <h4><b>Personal Details:</b></h4>
            <h4><FiPhoneCall/>&nbsp;+91-{param.phone}</h4>
        <h4><FiMail/>&nbsp;{param.email}</h4>
        <h4><FiHome/>&nbsp;{param.address}</h4>
        <div className='row' id='bdr'></div>
        <h4><b>Education:</b></h4>
        <h4><b>Degree/U.G :</b></h4>
          <h4> {param.bname}</h4>
          <h4> {param.bgrade} CGPA</h4>
          <h4> {param.byear} batch</h4>
          <h4><b>Intermediate/Diplamo :</b></h4>
          <h4> {param.intercoll}</h4>
          <h4> {param.intercgpa} CGPA</h4>
          <h4> {param.interyear} batch</h4>
          <div className='row' id='bdr'></div>
          <div className='row' id='row11'>
        <div className='col-md-5'>
        <h3><b>Ceritifications:</b></h3>
        
            <h4>{param.c1}</h4>
            <h4>{param.c2}</h4>
            <h4>{param.c3}</h4>
        

        </div>
        <div className='col-md-1' id='colmd'>
        <h3>|</h3>
        <h4>|</h4>
        <h4>|</h4>
        <h4>|</h4>
        </div>
        <div className='col-md-5'>
        <h3><b> Skills:</b></h3>
        <h4>{param.s1}</h4>
            <h4>{param.s2}</h4>
            <h4>{param.s3}</h4>
        </div>
        </div>
        <div className='row' id='bdr'></div>
        <h4><b>Projects:</b></h4>
        <h4>1.{param.p1}</h4>
        <h4><b>Description:</b>{param.pjd1}</h4>
       
        <h4>2.{param.p2}</h4>
        <h4><b>Description :</b>{param.pjd2}</h4>
        <div className='row' id='bdr'></div>
        <h4><b>Declaration:</b></h4>
            <h5>I hereby declare that all the details provided above are true to the best of my knowledge and are absolutly correct</h5>
       
    </div>
    <br/>
<center>    <button className='btn btn-primary' onClick={temp3} > Download</button></center>
   
    </div>  
</div>
    
 </div>
    </>
    )
}
export default Template;