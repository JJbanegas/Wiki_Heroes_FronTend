import {Button} from 'antd'
import axios from 'axios'
//`http://localhost:8080/api/heroes/${props.pj._id}`
const DeleteButton = (props) => {
    const handleDelete = async () => {
        try{
            const token = props.token
          console.log("id: ",props.pj._id, "token:", token)
          //const token = localStorage.getItem('x-access-token')
          const response = await axios.delete(`http://localhost:8080/api/heroes/${props.pj._id}`, {
            headers: {
              Authorization: token
            }})
          console.log(response)
    
        } catch (error ) {
          throw error
        }
      }



    return(
        <Button onClick={handleDelete}>
            Delete
        </Button>
    )
}

export default DeleteButton