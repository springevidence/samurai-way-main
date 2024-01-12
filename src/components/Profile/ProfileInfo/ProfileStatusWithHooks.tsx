import React, {useEffect, useState} from 'react';

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        props.isOwner && setEditMode(true)
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
                    <span onDoubleClick={activateEditMode}>{props.status || 'status is coming'}</span>
                </div>}
                {editMode && <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>}
            </div>
        );


};

export default ProfileStatusWithHooks;