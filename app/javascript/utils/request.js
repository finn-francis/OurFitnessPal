export const defaultHeaders = () => {
  let csrf = document.querySelector('meta[name="csrf-token"]')
  let token
  if (csrf) {
    token = csrf.content
  } else {
    token = 'n/a'
  }

  return (
    {
      "X-CSRF-Token": token,
      "Content-Type": "application/json"
    }
  )
}