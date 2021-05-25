import './Cards.css'
import { Card } from 'antd';
import React, {useState} from 'react';
import HeroCardModal from '../Modals/heroCardModal'

const { Meta } = Card;

const PjCard = (props) => {

  const pj = props.profile

  const [isModalVisible, setIsModalVisible] = useState(false);


  const HandleOnClick = () => {
    setIsModalVisible(true)
  }

  return(
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img className="cardImg" alt="example" src= {pj.Image} />}
        onClick={() => HandleOnClick()}
      >
        <Meta title={pj.heroName} description={pj.firstName +' '+ pj.lastName} />
      </Card>
      <HeroCardModal visible = {isModalVisible} setVisible = {setIsModalVisible} hero = {pj}/>
    </div>
  );
}

export default PjCard