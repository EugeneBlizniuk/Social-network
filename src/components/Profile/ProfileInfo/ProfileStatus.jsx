import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode() {
        debugger
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        debugger
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;