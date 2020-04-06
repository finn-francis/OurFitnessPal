export const respondToSuccess = (component, response) => {
  component.props.setCurrentUser(response)
  window.location.href = '/'
}