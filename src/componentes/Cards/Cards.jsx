import 'antd/dist/antd.css'
import './Cards.css'
import { Card , Button} from 'antd';
import React, {useState} from 'react';
import HeroCardModal from '../Modals/heroCardModal'
import axios from 'axios'
import EditButton from '../EditCardButton/EditCardButton'

const { Meta } = Card;

const PjCard = (props) => {

  const pj = props.profile
  const token = props.token
  const permission = props.permission

  const [isModalVisible, setIsModalVisible] = useState(false);


  const HandleOnClick = () => {
    setIsModalVisible(true)
  }

  const handleDelete = async () => {
    try{
      console.log(pj._id)
      const response = await axios.delete(`http://localhost:8080/api/heroes/${pj._id}`,{header: { Authorization: `${token}`}})
      console(response)

    } catch (error ) {
      throw error
    }
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
      <HeroCardModal visible = {isModalVisible} setVisible = {setIsModalVisible} hero = {pj} permission={props.permission} token={token}/>
        {((permission === "admin" || permission === "moderator") && <EditButton pj={pj} token={props.token}/>)}
    </div>
  );
}

export default PjCard