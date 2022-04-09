import { useState, useEffect } from "react";
import { Container, Button , ListGroup, ListGroupItem, Input } from "reactstrap";
import {CSSTransition , TransitionGroup} from "react-transition-group";
import axios from 'axios';



const ShoppingList = () => {


    // state to store data fetched 
    const [data,setData] = useState([])
    // state for item added 
    const [item, setItem] = useState ('')
    
  


    // function to fetch data from backend
    const fetchData = () => {
        axios.get('/api/items')
        .then((response)=>{
          setData(response.data)  
        })
    .catch(err => console.log(err))
      } 


      // function to add items
    const AddItem = () => {
        axios.post('/api/items', { name : item}).then(()=>{   
                    
            setData( prev => [...prev, {name :item}])
           
        }).catch(err => console.log(err))

    }

    // function to delete items

    const DeleteItem = (id) => {
        axios.delete(`/api/items/${id}`).then(()=>{
            setData( prev => prev.filter( item => item._id !== id))
        }).catch(err => console.log(err))
    }
      
        
     // useEffect   
    
    useEffect(()=>{
        fetchData()}
        ,[])
    
    
    


    return ( 
        <Container>
            
            <Input name = 'input' onChange={e => setItem(e.target.value)}></Input>            
            <Button onClick={AddItem}> Add Item </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {
                        data && data.map((item)=>(
                            <CSSTransition key={item._id} timeout={500} classNames="fade">                               
                                <ListGroupItem>
                                <Button className="remove-btn" color="danger" onClick={() => {DeleteItem(item._id)}}>
                                    x
                                </Button>
                                    {item.name}</ListGroupItem>
                            </CSSTransition>

                        ))
                    }
                    


                </TransitionGroup>
                
            
            </ListGroup>
        </Container>
        

     );
}
 
export default ShoppingList;