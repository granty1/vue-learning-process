export default store => {
  // plugin init , is have localStorage
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // excute this method after mutation
  store.subscribe((mutation, state) => {
    // save in localStorage's state property
    localStorage.state = JSON.stringify(state)
  })
}
