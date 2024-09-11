import React, { useEffect, useState } from 'react'
import { Button, Col, Container ,Form,Row,Table} from 'react-bootstrap'
import { CSSProperties } from 'styled-components'
import { PencilSquare, Trash, Plus } from 'react-bootstrap-icons';
import StylesPagination from './StylesPagination'

 interface col  {
    fieldName:string,
    column:string,
    type:string,
    style?:CSSProperties,
 }
 
 interface StyledDataTableprops  {
   cols:col[],
   data:any[],
   addField:boolean,
   crudField:boolean,
   addnewRow: (e:any) =>void,
   editRow: (id:number) =>void,
   deleteRow: (id:number) =>void,
 }

 interface applicationsByState { 
    value:{
      [key: string]: any
    }
  };

 const StyledDataTable: React.FC <StyledDataTableprops> = ({cols, data, addField,crudField, addnewRow, editRow,deleteRow}) =>{

  const [values, setValues] = useState<Record<string, any>>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [pageCount, setPageCount] = useState(3);
  const [items, setItems] = useState <any>([]);


  useEffect(()=>{
    let pages = Math.ceil(data.length / pageCount);
    setPages(pages)
  },[data])
  
  useEffect(()=>{
    let pageStart = page == 1? 0:(page -1)*pageCount;
    let pageEnd = pageStart + pageCount;
    setItems(data.slice(pageStart, pageEnd));
  },[page]);

  const handleChangePage = (page:number) =>{
    setPage(page)
  }

  const handleEvent = (name:string, value:any) =>{
     setValues({
      ...values,
      [name]:value
     })
  }

  return (
    <Container style={{width:'100%'}}>
      <Table striped bordered hover style={{width:'100%'}}>
        <thead>
          <tr>
            {
              cols.map((c)=>(
                <th style={c.style?c.style:undefined}>{c.column}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            items.map((d:any) =>{
              return (
                <tr key={d.id}>
                  {
                    
                    cols.map((c:col)=>(
                      crudField && c.type == 'action'? 
                        <td width={'8%'}>
                          <Row style={{
                            padding:0, 
                            gap:1, 
                            display:'flex', 
                            textAlign:'end'}}>
                            <Col style={{padding:3}}><Button onClick={e=>{editRow(d.id)}} variant='outline-info'><PencilSquare/></Button></Col>
                            <Col style={{padding:3}}><Button onClick={e=>{deleteRow(d.id)}} variant='outline-danger'><Trash/></Button></Col>
                          </Row>
                        </td>
                      : 
                      <td>{d[c.fieldName]}</td>
                    ))
                  }
                </tr>
              )
            })
          }
          <tr>
            {
              addField ? 
              (
                <>
                   {
                    cols.map((c:col)=>{
                      return (<td>
                        {
                          c.type == 'string'? (
                            (<Form.Control
                                name={c.fieldName}
                                value={values[c.fieldName]}
                                type='string'
                                onChange={e =>handleEvent(e.target.name, e.target.value)}>
                            </Form.Control>)
                            ):
                          c.type == 'date'?
                            (<Form.Control
                                name={c.fieldName}
                                value={values[c.fieldName]}
                                type='date'
                                onChange={e =>handleEvent(e.target.name, e.target.value)}>
                            </Form.Control>) :
                          c.type == 'number'?
                            (<Form.Control
                              name={c.fieldName}
                              value={values[c.fieldName]}
                              type='number'
                              onChange={e =>handleEvent(e.target.name, e.target.value)}>
                            </Form.Control>)
                          : c.type == 'action'?
                            (
                              <Row style={{padding:0, gap:0, textAlign:'end'}}>
                                <Col style={{padding:3}}><Button onClick={e=>addnewRow(values)} variant='outline-primary'><Plus size={25}/></Button></Col>
                              </Row>
                           )
                          :null
                        }
                      </td>)
                      }
                  )
                  }
                  
                </>
              ) 
              : null
            }
          </tr>
          {
              pages && pages > 1 ?
                <tr>
                <td style={{display:'table-cell', width:'100%'}} 
                  colSpan={cols.length -1}>
                </td>
                <td>
                  
                    <StylesPagination 
                      total={pages}
                      current={page}
                      onChangePage={handleChangePage}
                    />  
                  </td>
                </tr>
              :null
          
          }
        </tbody>
      </Table>
     
    </Container>
  )
}

export default  StyledDataTable;