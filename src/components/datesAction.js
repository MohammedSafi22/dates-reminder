import React from 'react'
import { Row, Col } from "react-bootstrap";


const DatesAction = ({deleteData,viewData}) => {
  return (
    <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex">
            <button onClick={deleteData} className="btn-style p-2">مسح الكل</button>
            <button onClick={viewData} className="btn-style p-2">عرض البيانات</button>
          </Col>
        </Row>
  )
}

export default DatesAction