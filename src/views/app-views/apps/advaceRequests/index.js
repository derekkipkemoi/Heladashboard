import React, { Component } from 'react';
import AdvanceRequestsContent from './AdvanceRequestsContent';

class AdvanceRequests extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <AdvanceRequestsContent {...this.props}/>
            </div>
        );
    }
}
 
export default AdvanceRequests;