import { watchGetUsers } from './users';

export default function* () {
  yield [
    watchGetUsers()
  ]
}