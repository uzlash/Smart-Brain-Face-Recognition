// The rank component which fetches your name and tell you your rank
import React from 'react'

const Rank = ({name, enteries}) => {
    return(
        <div>
            <div className='f3 white'>
                {`${name} , your current entry count is...`}
            </div>
            <div className='f1 white'>
                {enteries}
            </div>
        </div>
        
    );
}

export default Rank;