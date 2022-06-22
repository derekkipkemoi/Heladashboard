import React, { Component } from 'react';
import InnerAppLayout from 'layouts/inner-app-layout';
import RolesPermissionsMenu from './RolesPermissionsMenu';
import RolesPermissionsContent from './RolesPermissionsContent';

class RolesPermissions extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <InnerAppLayout 
					sideContent={<RolesPermissionsMenu {...this.props}/>}
					mainContent={<RolesPermissionsContent {...this.props}/>}
                    border
				/>
            </div>
        );
    }
}
 
export default RolesPermissions;