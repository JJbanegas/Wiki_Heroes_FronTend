import './Cards.css'
import { Card } from 'antd';
const { Meta } = Card;

const PjCard = (props) => {
  const pj = props.profile
  return(
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img className="cardImg" alt="example" src= {pj.Image} />}
    >
      <Meta title={pj.heroName} description={pj.firstName +' '+ pj.lastName} />
    </Card>
  );
}

export default PjCard