import '../Cards/Cards.css'
import React, { Modal } from 'antd'
import { Image } from 'antd';


const heroCardModal = (props) => {
  console.log(props.hero)
  const pj = props.hero

  const handleOk = () => {
    props.setVisible(false)
  }

  const handleCancel = () => {
    props.setVisible(false)
  }

  return (
    <>
      <Modal
        title={pj.heroName}
        centered
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Image className="cardImg"
        width={200}
        src={pj.Image}
        />
        <p>{pj.firstName}</p>
        <p>{pj.lastName}</p>
        <p>{pj.universe}</p>
      </Modal>
    </>
  )
}

export default heroCardModal
