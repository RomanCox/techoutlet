export const extractTelegramUsername = (tgAddress: string) => {
  if (!tgAddress) return ''
  let username = tgAddress.trim()

  if (username.startsWith("@")) {
    return username
  }

  username = username
    .replace(/^https?:\/\/t\.me\//, "")
    .replace(/\/$/, "")

  return `@${username}`
}