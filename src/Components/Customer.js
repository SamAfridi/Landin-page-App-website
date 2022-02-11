import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

function Customer() {
  return (
    <>
         <Grid container style={{margin:"30px"}}>
             <Grid lg={8} sm={4} className='customerDiv'>
                 <Grid className='customerHeading' item sm={4} lg={12}>
                     <h1>What our Customer are saying</h1>
                 </Grid>
                 <Grid className='customerData' >
                
                   <h4>Edward</h4>
                   <h5>Founder Nest</h5>
                 </Grid>
                 <Grid className='customerText'>
                     <p>If you want to generate more positive reviews, it helps to know what an excellent review really 
                         looks like. 
                         You might be thinking, “Duh, I know this already, 
                         people say nice things about my business.”</p>
                 </Grid>
             </Grid>
         </Grid>
    </>
  );
}

export default Customer