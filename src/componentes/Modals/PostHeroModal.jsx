import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PostHeroForm from '../PostHeroForm/PostHeroForm'

const PostHero = () => {
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
        Post Hero
      </Button>
      <Modal title="Post a character" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PostHeroForm/>
      </Modal>
    </>
  );
};

export default PostHero