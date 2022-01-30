export default props => {
  if(props.validacao) {
    return props.children
  }else {
    return false
  }
}