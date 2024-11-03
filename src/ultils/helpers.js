export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const getInitialsName = (fullname) => {
  if (!fullname) return ''

  const words = fullname.split(' ')
  let initialsName = ''

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initialsName += words[i][0]
  }

  return initialsName.toUpperCase()
}
