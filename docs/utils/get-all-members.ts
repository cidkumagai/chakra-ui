import fs from "fs"
import path from "path"

/**
 * Read the profile/bio of each member from `.all-membersrc` file
 * to avoid overfetching from Github
 */
export function getAllMembers() {
  const membersRcPath = path.resolve(".all-membersrc")
  const { members } = JSON.parse(fs.readFileSync(membersRcPath, "utf-8"))
  const filters = ["christiannwamba"]
  return members.filter((m: any) => !filters.includes(m.login))
}

export function getMember(login: string) {
  return getAllMembers().find((member: any) => member.login === login)
}
