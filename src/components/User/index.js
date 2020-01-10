import React from 'react'
import UserSidebar from '../Layout/UserSidebar'
import { observer, inject } from 'mobx-react'
import { Table } from 'semantic-ui-react'

const User = inject('user')(
  observer(({user}) => {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { [user].map(u =>
            <Table.Row>
              <Table.Cell>{u.id}</Table.Cell>
              <Table.Cell>{u.name}</Table.Cell>
              <Table.Cell>{u.age}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    )
  })
)

User.Sidebar = UserSidebar
export default User