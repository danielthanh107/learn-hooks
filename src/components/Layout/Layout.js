import React, { useEffect, useState } from 'react'
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import SideBar from './Sidebar'

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(null)

  useEffect((prs = props) => {
    const children = props.children
    let pathname = props.location.pathname

    let currentCom = children.find(ele => ele.props.path == pathname)
    setSidebar(currentCom.props.component.Sidebar)
  },
  [props.location.pathname])

  return(
    <Container style={{ marginTop: '3em' }}>
      <Header as='h2' dividing>
        Learning Hooks
      </Header>

      <Grid columns='equal'>
        <Grid.Column width={4}>
          {console.log(sidebar)}
          { sidebar ? sidebar : <Sidebar /> }
        </Grid.Column>
        <Grid.Column width={12}>
          { props.children }
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Layout