import * as fs from 'fs'

const REQ_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const formatFile = (file) => {
  const users = file.split('\r\n\r\n').map((user) => (
    user.replaceAll('\r\n', ' ').split(' ')
  ))

  return users.map((user) => {
    const userObj = {}

    user.map((attr) => (
      userObj[attr.split(':')[0]] = attr.split(':')[1]
    ))

    return userObj
  })
}

const isValid = (user) => REQ_FIELDS.every((field) => user[field])

export default function challenge01 () {
  try {
    const users = fs.readFileSync('./challenge01/users.txt', 'utf8')
    const usersFormatted = formatFile(users)

    const validUsers = usersFormatted.filter(isValid)
    const validUsersCounter = validUsers.length

    const lastValidUser = validUsers.at(-1)
    const lastValidUserName = lastValidUser

    return `${validUsersCounter}${lastValidUserName.usr}`
  } catch (e) { console.log('Error:', e.stack) }
}
