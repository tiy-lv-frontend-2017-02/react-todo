const InitialState = {
  items: []
}

export function todoReducer(state = InitialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return {items: [...state.items, action.item]}
    case 'DESTROY_ITEM':
      return {items: state.items.filter(item=>{
        return item.id !== action.id
      })}
    case 'UPDATE_STATUS':
      return {items: state.items.map(item=>{
        if (action.id === item.id) {
          return {
            id: item.id,
            title: item.title,
            status: action.status
          }
        }
        return item
      })}
    default:
      return state
  }
}