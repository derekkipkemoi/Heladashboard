import React, { Component } from 'react';
import SettingsContent from './SettingsContent';

class Settings extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <SettingsContent {...this.props}/>
            </div>
        );
    }
}
 
export default Settings;