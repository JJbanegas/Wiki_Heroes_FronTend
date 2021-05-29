import React, { Modal } from 'antd'


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
        title= "Holis"
        centered
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>holas</p>
        <p>holas</p>
        <p>holas</p>
      </Modal>
    </>
  )
}

export default userModifyModal
