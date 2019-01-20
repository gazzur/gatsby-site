import React from 'react'
import Helmet from 'react-helmet'

function Material(){
    return (
        <div className="material">
            <Helmet>
            <script src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js" crossorigin="anonymous">
            </script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            
            </Helmet>
        </div>
    )
}

export default Material

  
