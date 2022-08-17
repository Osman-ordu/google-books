import React,{useState} from "react";
import './app.css'
import { 
  InputGroup,
  Input,
  Button,
  FormGroup,
  Label  
} from 'reactstrap'

const App = () => {
  // state
  const [maxResult,setMaxResults] = useState(10);
  const [startIndex,setStartIndex] = useState(1);
  const mainHeader = () => {

    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column" > 
      {/* overlay */}
      <div className="filter">
        <h1 className="display-2 text-center text-white mb-3 fw-bold" style={{position: 'relative',zIndex: '2'}}>
          Google Books
        </h1>   
      </div>
      <div style={{width: '60%',zIndex: '2'}}>
          <InputGroup size="lg" className="mb-3 ">
            <Input  className="shadow-none border-0" placeholder="Books Search" />
            <Button className="color-secondary">
            <i className="fas fa-search"></i>
          </Button>
          </InputGroup>
          <div className="d-flex text-white justify-content-center">
            <FormGroup className="mx-2 fs-6 fw-bold">Max Results
              <Label for='maxResults'></Label>
              <Input className="shadow-none border-0" type="number" id="maxResults" placeholder="Max Results"/>
            </FormGroup>
            <FormGroup className="mx-2 fs-6 fw-bold">Start Index
              <Label for='startIndex'></Label>
              <Input className="shadow-none border-0" type="number" id="startIndex" placeholder="Start Index"/>
            </FormGroup>
          </div>
    
          
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      {mainHeader()}
    </div>
  );
}

export default App;
