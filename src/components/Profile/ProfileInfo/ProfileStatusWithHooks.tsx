import React, {useState} from 'react';

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }
    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatus(this.state.status)
    // }
    // onStatusChange = (e: any) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }
    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
    //     console.log('componentDidUpdate')
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e:any) => {
        setStatus(e.currentTarget.value)
    }

    return (
            <div>
                {!editMode && <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>}
                {editMode && <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>}
            </div>
        );


};

export default ProfileStatusWithHooks;