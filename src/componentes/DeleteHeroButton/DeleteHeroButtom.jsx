import {Button} from 'antd'
import axios from 'axios'

const DeleteButton = (pj) => {
    const handleDelete = async () => {
        try{
          console.log(pj._id)
          const token = localStorage.getItem("x-access-token")
          const response = await axios.delete(`http://localhost:8080/api/heroes/${pj._id}`,{header: { Authorization: `${token}`}})
          console(response)
    
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