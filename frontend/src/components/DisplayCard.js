import React, { useState } from 'react'
import {Card,CardContent,InputLabel,TextField} from '@mui/material';
import { studentsData } from '../Data/studentsData';
const DisplayCard = () => {
    const [data,setData] = useState(studentsData);
  return (
    <div className='displayCard'>
        {
            data.map((student)=>{
                return (
                    <Card sx={{ maxWidth: 600 }}>
                        <CardContent>
                            <InputLabel>Hello</InputLabel>
                            <TextField 
                                    value={student.name}
                                    autoFocus
                                    margin='dense'
                                    className='input'
                                    label="Name"
                                    variant='outlined'
                                    color='secondary'
                                    required type="text"
                                    aria-readonly
                                    name='name'
                                    size='small'
                                    >
                            </TextField>

                            <InputLabel>Email</InputLabel>
                            <TextField 
                                    value={student.email}
                                    autoFocus
                                    margin='dense'
                                    className='input'
                                    label="Email"
                                    variant='outlined'
                                    color='secondary'
                                    required type="text"
                                    aria-readonly
                                    name='email'
                                    size='small'
                                    >
                            </TextField>

                            <InputLabel>Hello</InputLabel>
                            <TextField 
                                    value={student.name}
                                    autoFocus
                                    margin='dense'
                                    className='input'
                                    label="Name"
                                    variant='outlined'
                                    color='secondary'
                                    required type="text"
                                    aria-readonly
                                    name='name'
                                    size='small'
                                    >
                            </TextField>
                        </CardContent>
                    </Card>
                )
            })
        }
        
    </div>
  )
}

export default DisplayCard