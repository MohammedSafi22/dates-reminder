import React from 'react'
import { Row, Col } from "react-bootstrap";

const DatesCount = ({per}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            لديك {per.length} مواعيد اليوم
          </Col>
    </Row>
  )
}

export default DatesCount