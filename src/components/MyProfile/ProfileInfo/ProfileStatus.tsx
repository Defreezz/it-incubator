import React from "react";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false
    }

    editModeToggle =()=> {
        this.setState({
            editMode: !this.state.editMode
        })

    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input onBlur={this.editModeToggle} value={"sas"} autoFocus></input>
                    </div>
                    : <div>
                        <span onDoubleClick={this.editModeToggle}>{this.props.status}</span>
                    </div>
                }</>
        )

    }
}