import React from 'react'
import { types, getParent } from 'mobx-state-tree'
import { values } from 'mobx'

export const UserModel = types
  .model("UserModel", {
    id: types.identifierNumber,
    name: types.string,
    age: types.number
  })
  .actions(self => {
    function all(){
    }

    return { all }
  })


