// import React, { useState } from 'react';
// import { TextField,Button,Table,TableCell,TableRow,TableBody,Paper,TableContainer,TableHead,Card,CardHeader,CardContent} from '@mui/material';
// import { studentsData } from '../Data/studentsData';

// const ViewStudents = () => {
//     const [data,setData] = useState(studentsData);
//     const [rollNo,setRollNo] = useState("");
//     const handleFormChange = (e) =>{
//         setRollNo(e.target.value);
//     }
//   return (
//     <div>
//         <div>
//         <TextField 
//             value={rollNo}
//             autoFocus
//             margin='dense'
//             className='input'
//             label="Enter Roll No"
//             variant='outlined'
//             color='secondary'
//             required type="text"
//             name='rollNo'
//             size='small'
//             onChange={handleFormChange}>

//         </TextField>
//         <Button variant='contained' type='submit' id="search">search</Button>
//         </div>
//         <div>
            
                
//         </div>
//     </div>
    
//   )
// }

// export default ViewStudents