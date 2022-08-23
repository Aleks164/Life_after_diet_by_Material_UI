import React from "react";
import {
  Skeleton,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export const RecipeIdSceletonPage = ()=>(
    <Paper
      elevation={2}
      sx={{
        m: 1,
        maxWidth: "1050px",
        minHeight:"450px",
        ml: "auto",
        mr: "auto",
      }}
    >
         <Grid
          container
          direction="row"
          justifySelf="flex-start"
          alignItems="center"
          sx={{ pl:2,pr:2 }}
        >              
        <Grid item xs={12} >
            <Skeleton width="100%">
              <Typography variant="h1">.</Typography>
            </Skeleton>
            </Grid>
          <Grid item xs={3}>
          <Skeleton variant="rectangular" width={150} height={150} />
          </Grid>
           {<Grid item   container
  direction="row"
  justifyContent="space-between"
  alignItems="flex-end"
         xs={8}
          sx={{ pl:2,pr:2 }}
          display={{ xs:"none", md:"flex"}}
          >
              <Grid item xs={3}>
          <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">           
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>            
          </Grid>
            <Grid item xs={3}>
          <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">           
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton> 
             </Grid>               
           <Grid item xs={2} 
           container
  direction="column"
  justifyContent="center"
  alignItems="flex-end"
>
         <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="circular" width={40} height={40} />
          </Grid> </Grid>}     
        <Grid item xs={12}>
              <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">             
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">           
              <Typography variant="h5" sx={{m:0}}>.</Typography>
            </Skeleton>       
      </Grid>
         </Grid>
    </Paper>
 
)
