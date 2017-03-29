import React from 'react'
import TodoForm from './TodoForm'
import ItemList from './ItemList'

const styles = {
  form: {
    width:400,
    background:'#eee',
    margin:'auto',
    marginTop:100
  },
  heading: {
    textAlign:'center'
  }
}

export default React.createClass({
  render() {
    return (
      <div style={styles.form}>
        <h1 style={styles.heading}>todos</h1>
        <TodoForm />
        <ItemList />
      </div>
    )
  }
})