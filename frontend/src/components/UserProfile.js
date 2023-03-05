import React, { useState,useEffect } from 'react'
import "./UserProfile.css";
import { Paper, TextField ,Card,Table,TableCell,TableRow,TableBody,TableContainer,TableHead,CardContent} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';



const UserProfile = () => {
    const [data,setData] = useState()
    useEffect(() => {
        fetch("http://localhost:4000/viewProfile",{
            method:"POST",
            body:JSON.stringify({"email":"20bq1a05p2@vvit.net"}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((result)=>result.json()).then((res)=>{setData(res.message);console.log(data)}).catch((err)=>console.log(err));
    }, [])
    
  return (
    <div className='userProfile'>
    <Paper>
        <h1 style={{"textAlign":"center"}}>Student Details</h1>
        <form className='profile'>
        <TextField 
                fullWidth
                value={data.name}
                margin='dense'
                label="Name"
                variant='outlined'
                color='secondary'
                type="text"
                aria-readonly
                size='small'/>

            <TextField 
                value={data.rollNo}
                margin='dense'
                label="RollNo"
                variant='outlined'
                color='secondary'
                type="text"
                aria-readonly
                size='small'/>

            <TextField 
                value={data.AICTEStudentID}
                margin='dense'
                label="AICTE_ID"
                variant='outlined'
                color='secondary'
                type="text"
                aria-readonly
                size='small'/>

            <TextField 
                value={data.email}
                margin='dense'
                label="Email"
                variant='outlined'
                color='secondary'
                type="text"
                aria-readonly
                size='small'/>

        <TextField 
                fullWidth
                value={data.year}
                margin='dense'
                label="Year of Study"
                variant='outlined'
                color='secondary'
                type="text"
                aria-readonly
                size='small'/>

        <TextField 
                fullWidth
                value={data.branch}
                margin='dense'
                label="Branch"
                variant='outlined'
                color='secondary'
                type="text"
                aria-readonly
                size='small'/>

        <TextField 
                fullWidth
                value={data.section}
                margin='dense'
                label="Section"
                variant='outlined'
                color='secondary'
                type="text"
                
                size='small'/>

        
        </form>
    </Paper>
    <Paper className='courseDetails'>
        <h1 style={{"textAlign":"center"}}>Course Enrollment Details</h1>  
        <div className='enrolledCourses'>
             
        {
            (data['courses'].length > 0) && 
            <Card>            
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table sx={{ maxWidth : 600}} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Platform</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Enrolled Sem</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                data['courses'].map((course)=>{
                                    return(
                                        <TableRow>
                                            <TableCell>{course.platform}</TableCell>
                                            <TableCell>{course.courseName}</TableCell>
                                            <TableCell>{course.EnrolledIn}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        }
        <div className="message">
            <InfoIcon fontSize="small"/>&nbsp;Contact Admin for any change in details
        </div>
        </div>
 
    </Paper>
    </div>
  )
}

export default UserProfile