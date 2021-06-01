import React, { Modal } from 'antd'
import UserForm from '../Forms/userForm'


const userModifyModal = (props) => {

  const handleOk = () => {
    props.setVisible(false)
  }

  const handleCancel = () => {
    props.setVisible(false)
  }

  return (
    <>
      <Modal
        title= "Edit user"
        centered
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      <UserForm userValue = {props.userValue} token={props.token}/>
      </Modal>
    </>
  )
}

export default userModifyModal
