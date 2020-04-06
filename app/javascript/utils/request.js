export const defaultHeaders = () => {
  let token = document.querySelector('meta[name="csrf-token"]').content

  return (
    {
      "X-CSRF-Token": token,
      "Content-Type": "application/json"
    }
  )
}