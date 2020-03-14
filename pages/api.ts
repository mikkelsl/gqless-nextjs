import { ApolloServer, gql } from 'apollo-server-micro'
import faker from 'faker'

const typeDefs = gql`
  type Query {
    users(search: String, first: Int, skip: Int): [User!]!
    userCount(search: String, first: Int, skip: Int): Int!
  }
  type Mutation {
    createUser(name: String!): User
  }
  type User {
    id: Int!
    name: String!
    avatar: String
  }
`

const users = Array(100)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: faker.name.findName(),
    avatar: faker.image.avatar
  }))

const resolvers = {
  Query: {
    users(_parent, { search, first, skip }, _context) {
      const results = !search
        ? users
        : users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
      const start = skip ? skip : 0
      const end = first ? start + first : results.length
      return results.slice(start, end)
    },
    userCount(_parent, { search }, _context) {
      const results = !search
        ? users
        : users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
      return results.length
    }
  },
  Mutation: {
    createUser(_parent, { name, avatar }, _context) {
      const user = { id: users.length + 1, name, avatar }
      users.push(user)
      return user
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = { api: { bodyParser: false } }
export default apolloServer.createHandler({ path: '/api' })
