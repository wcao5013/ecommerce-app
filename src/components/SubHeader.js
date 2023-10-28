import React from 'react';
import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { House } from 'phosphor-react'
import styles from './subheader.css';



const SubHeader = ({current}) => {
  return (
      <Row>
          <Col>
              <Breadcrumb className='breadcumb' aria-label='breadcrumb'>
                  <BreadcrumbItem>
                      <Link to='/'>
                        <House size={20} weight='bold'/>
                      </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="current"active>{current}</BreadcrumbItem>
              </Breadcrumb>
        
          </Col>
      </Row>
  )
}

export default SubHeader
