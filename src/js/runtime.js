
const user = {
  firstname: '',
  lastname: '',
  birthday: '',
  placeofbirth: '',
  address: '',
  city: '',
  zipcode: '',
}

const LS_KEY = '--saved-user-data'

function fillStorage(user) {
  localStorage.setItem(LS_KEY, JSON.stringify(user))
}

function loadStorage() {
  const data = localStorage.getItem(LS_KEY)

  if (data)
    Object.assign(user, JSON.parse(data))
}

export function fillForm() {
  loadStorage()
  const gi = document.getElementById.bind(document)
  const now = new Date()
  now.setSeconds(0)

  gi('field-firstname').value = user.firstname
  gi('field-lastname').value = user.lastname
  gi('field-birthday').value = user.birthday
  gi('field-placeofbirth').value = user.placeofbirth
  gi('field-address').value = user.address
  gi('field-city').value = user.city
  gi('field-zipcode').value = user.zipcode
  gi('field-datesortie').value = now.toISOString().split('T').shift()
  gi('field-heuresortie').value = now.toLocaleTimeString()

  gi('generate-btn').addEventListener('click', () => fillStorage({
    firstname: gi('field-firstname').value,
    lastname: gi('field-lastname').value,
    birthday: gi('field-birthday').value,
    placeofbirth: gi('field-placeofbirth').value,
    address: gi('field-address').value,
    city: gi('field-city').value,
    zipcode: gi('field-zipcode').value
  }))
}
