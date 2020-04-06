import React from 'react';

class ProfileStatus extends React.Component { 

    state = {
        editMode: false
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
          <div>
            {this.state.editMode ? (
              <div>
                <input autoFocus={true} onBlur={this.deactivateMode} value={this.props.status} />
              </div>
            ) : (
              <div>
                <span onDoubleClick={this.activateMode}>{this.props.status}</span>
              </div>
            )}
          </div>
        );
    }
    
}

export default ProfileStatus;