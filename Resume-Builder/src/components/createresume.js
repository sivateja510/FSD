import React from 'react';
import { useState } from 'react';
import '../components/resume.css';
import Template from './template';

const CreateResume=()=>{
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        c1: "",
        c2: "",
        c3: "",
        s1: "",
        s2: "",
        s3: "",
        bname: "",
        bgrade: "",
        byear: "",
        p1:"",
        p2:"",
        pjd1: "",
        pjd2: "",
        intercoll: "",
        intercgpa: "",
        interyear: "",
        schoolname: "",
        schoolcgpa: "",
        schoolyear: "",
        role:""
      };
      const [formData, setFormData] = useState(initialFormData);
      const [issubmit,setsubmit]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmit(true);
    console.log(formData);
    // TODO: handle form submission
  };
  if(issubmit)
  {
    return(
      <Template firstName={formData.firstName} lastName={formData.lastName} email={formData.email} phone={formData.phone}
      address={formData.address} c1={formData.c1} c2={formData.c2} s1={formData.s1} s2={formData.s2} scol={formData.schoolname} scgpa={formData.schoolcgpa} syear={formData.syear}
      s3={formData.s3} role={formData.role} pd1={formData.pjd1} pd2={formData.pjd2} p1={formData.p1} p2={formData.p2}about={formData.about}
      bcol={formData.bname} bcgpa={formData.bgrade}byear={formData.byear} icol={formData.intercoll} icgpa={formData.intercgpa} c3={formData.c3}iyear={formData.interyear}/>
    )
  }
    return (
        <div id='formContainer'> 
        <form onSubmit={handleSubmit} id='formStyle'>
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Create Your Resume
        </h2>
        <div id='nameContsiner'>
            <div id='inputContainer'>
                <label  id='labelStyle'>First Name:</label>
                <input required type="text"  name="firstName" value={formData.firstName} onChange={handleChange} id='inputStyle'/>
            </div>
            <div id='inputContainer'>
                <label  id='labelStyle'>Last Name:</label>
                <input required type="text"  name="lastName" value={formData.lastName} onChange={handleChange} id='inputStyle'/>
            </div>            
        </div>
        <div id='marg'>
          <label  id='labelStyle'>Email:</label>
          <input  required type="email" name="email" value={formData.email} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>Phone:</label>
          <input  required type="text" name="phone" value={formData.phone} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>address:</label>
          <input  required type="text" name="address" value={formData.address} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>certification1:</label>
          <input  type="text" name="c1" value={formData.c1} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>certification2:</label>
          <input   type="text" name="c2" value={formData.c2} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>certification3:</label>
          <input  type="text" name="c3" value={formData.c3} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>Skills:</label>
          <input  type="text" name="s1" value={formData.s1} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>Skills:</label>
          <input  type="text" name="s2" value={formData.s2} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
          <label  id='labelStyle'>Skills:</label>
          <input type="text" name="s3" value={formData.s3} onChange={handleChange} id='inputStyle' />
        </div>
        <div id='marg'>
        <h3 >Education:</h3>
            <label  id='labelStyle'>University Name</label>
            <input required type='text' value={formData.bname} name='bname'onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>CGPA:</label>
            <input required type='text' value={formData.bgrade} name='bgrade'onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Academic Year</label>
            <input required type='text' value={formData.byear} name='byear'onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Inter/Diplamo College Name</label>
            <input required type='text' value={formData.intercoll} name='intercoll' onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Inter/Diplamo CGPA:</label>
            <input required type='text' value={formData.intercgpa} name='intercgpa'onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Academic Year</label>
            <input required type='text' value={formData.interyear} name='interyear' onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>School Name</label>
            <input required type='text' value={formData.schoolname} name='schoolname' onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>SSC CGPA:</label>
            <input required type='text' value={formData.schoolcgpa} name='schoolcgpa'onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Academic Year</label>
            <input required type='text' value={formData.schoolyear} name='schoolyear' onChange={handleChange} id='inputStyle'/>
        </div>
        <div id='marg'>
        <h3>Project 1</h3>
            <label  id='labelStyle'>Project 1 Name :</label>
            <input  type='text' value={formData.p1} name="p1" onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Project Description</label>
            <textarea name="pjd1" value={formData.pjd1} onChange={handleChange} id='textAreaStyle'></textarea>
        </div>
        <div id='marg'>
        <h3>Project 2</h3>
            <label  id='labelStyle'>Project 2 Name :</label>
            <input  type='text' value={formData.p2} name="p2" onChange={handleChange} id='inputStyle'/>
            <label  id='labelStyle'>Project Description</label>
            <textarea name="pjd2" value={formData.pjd2} onChange={handleChange} id='textAreaStyle'></textarea>
        </div>
        <div id='marg'>
        <label  id='labelStyle'>Role</label>
        <textarea name="role" value={formData.role}onChange={handleChange} id='textAreaStyle' ></textarea>
        </div>
        <div id='marg'>
            <label  id='labelStyle'>About</label>
            <textarea name="about" placeholder="Enter Description about You --U" value={FormData.about} onChange={handleChange} id='textAreaStyle'></textarea>
        </div>
        <button required type="submit" className="btn btn-success" style={{ padding: "10px 20px" }}>
        Submit
        </button>

        </form>

        </div>
    )
}
export default CreateResume;