import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    name: string
    value: string
    onChange?: (status: string) => void
}

export class EditableSpan extends React.Component <ProfileStatusType> {
    state = {
        editMode: false,
        value: this.props.value
    }

    componentDidUpdate(prevProps: ProfileStatusType, prevState: { editMode: boolean, value: string }) {
        if (prevProps.value !== this.props.value)
            this.setState({
                ...this.state,
                value: this.props.value
            })
    }

    handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value
        })
    }
    toggleMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    saveChange = () => {
        this.props.onChange && this.props.onChange(this.state.value)
        this.setState({
            editMode: !this.state.editMode
        })

    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input
                            value={this.state.value}
                            autoFocus
                            onChange={this.handlerOnChange}
                        />

                        <button onClick={this.saveChange}>Save
                        </button>
                    </div>
                    : <div>
                        <span
                            onDoubleClick={this.toggleMode}
                        ><b>{this.props.name}</b>: {this.props.value || "null"}
                        </span>
                    </div>
                }</>
        )

    }
}