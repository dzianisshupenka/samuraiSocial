import React, { useState } from "react"
import { useEffect } from "react";
import style from './ProfileInfo.module.css';

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect ( () => {
      setStatus(props.status);
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        
    }

    return (
        <div className={style.status}>
          <b>My best status:</b>  
          {editMode ? (
            <div>
              <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus = {true}/>
            </div>
          ) : (
            <div >
              <span  onDoubleClick={activateEditMode}> {props.status}</span>
            </div>
          )}
        </div>
      )
}
export default ProfileStatusHook;