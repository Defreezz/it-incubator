import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus?:(status:string)=>void
}

export class ProfileStatus extends React.Component <ProfileStatusType> {

    state = {
        editMode: false,
        status:this.props.status
    }

    statusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    saveStatus = () => {
        this.props.updateStatus&&this.props.updateStatus(this.state.status)
    }

    editModeToggle =()=> {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus&&this.props.updateStatus(this.state.status)
    }

    render() {
        debugger
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input
                            
                            value={this.state.status}
                            onBlur={this.editModeToggle}
                            autoFocus
                            onChange={this.statusChange}
                        />

                        <button onClick={()=>
                        {this.saveStatus()}}>Save</button>
                    </div>
                    : <div>
                        <span onDoubleClick={this.editModeToggle}>{this.props.status}</span>
                    </div>
                }</>
        )

    }
}