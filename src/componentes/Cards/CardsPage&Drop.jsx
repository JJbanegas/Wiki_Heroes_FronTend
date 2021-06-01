import { Menu, Dropdown, message, Space} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardsList from './CardsList'
import PostHeroModal from '../Modals/PostHeroModal'
//import PostHero from '../Modals/PostHeroModal';
import { Alert } from 'antd';



/* Termine por fusionar el Dropdown con el CardsPage porque necesitaba manejar los datos 
del axios en el mismo lugar, no pude pensar una forma en la cual trabajaran por separado,
porque Cardspage es el padre, osea que le puede mandar info a travez de las props, pero
no podía mandar la info del hijo al padre, no se si hay alguna forma de hacer eso.*/ 


const CardsPage = (props) => {



  const [error, setError] = useState()
  const [pj, setPj] = useState([])

  function addNewProfile(item){
    setPj(item)
  }

  const getAllHeroes = async () => {
    const order = localStorage.getItem("x-access-token")
    //console.log('token del local', order)
    if(order){
        await axios.get(`http://localhost:8080/api/heroes`, {
        headers: {
          Authorization: `${order}`
        }
      })
      .then(response => { 
        addNewProfile(response.data) 
      }) 
      .catch(err => { 
        setError(err)
      })
    }
  }

  const getSidedHeroes = async (side) =>{
    const response = await axios.get(`http://localhost:8080/api/heroes/?side=${side}`)
    addNewProfile(response.data)
  }


  useEffect(() =>{
    getAllHeroes()
    props.setToken(localStorage.getItem("x-access-token")
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


    function handleButtonClick(e) {
      message.info('Click on right button.');
      console.log('click right button', e);
    }
    
    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
      if (e.key === "1") {
        console.log('pasó por el if 1')
        const side = `hero`
        getSidedHeroes(side)
      }
      if (e.key === "2") {
        console.log('pasó por el 2')
        const side = `villain`
        getSidedHeroes(side)
      }
    }
    
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />} >
          Hero
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
         Villain
        </Menu.Item>

      </Menu>
    );


    return !(error) ? (
        
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Filter
      </Dropdown.Button>
      {((props.permission === "moderator" || props.permission === "admin") && <PostHeroModal/>)}
      <CardsList data = {pj} permission={props.permission} token={props.token}/>
    </Space>
    ) : (<Alert message={error} type="error" />)
}



export default CardsPage