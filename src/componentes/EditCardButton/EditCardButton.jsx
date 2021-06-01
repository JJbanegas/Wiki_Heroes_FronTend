import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import EditHeroForm from '../Forms/EditHeroForm'


const EditButton = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal title="Edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <EditHeroForm pj={props.pj} token={props.token}/>
      </Modal>
    </>
  );
};

export default EditButton