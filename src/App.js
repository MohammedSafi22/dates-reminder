import { Container } from "react-bootstrap";
import { per } from './data'
import DatesCount from './components/datesCount';
import DatesList from "./components/datesList";
import DatesAction from './components/datesAction';
import { useState } from "react";

function App() {
   const[perData,setperData] = useState(per);
   const onDelete=()=> {
      setperData([]);
   }
   const onView=()=> {
    setperData(per);
 }
  return (
    <div className="font color-body">
      <Container className="py-5">
         <DatesCount per={perData} />
         <DatesList per={perData} />
         <DatesAction deleteData={onDelete} viewData={onView} />
      </Container>
    </div>
  );
}

export default App;
