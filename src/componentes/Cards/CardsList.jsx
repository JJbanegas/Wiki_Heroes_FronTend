import Card from './Cards'
import './CardsPage.css'

const CardList = (props) => {
  return(
    <div className="cardPage">
      {props.data.map(profile => <Card profile={profile} permission ={props.permission} token={props.token}/>)}
    </div>
  )
}

export default CardList