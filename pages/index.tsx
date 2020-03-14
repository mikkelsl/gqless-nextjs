import { Suspense, useState, useEffect } from 'react'
import { graphql } from '@gqless/react'
import {
  Avatar,
  Box,
  Input,
  Layout,
  List,
  ListItem,
  Pagination,
  Select
} from '../components'
import { query } from '../gqless'

const Index = () => {
  const [search, setSearch] = useState('')
  const [first, setFirst] = useState(10)
  const [skip, setSkip] = useState(0)
  const args = { search, first, skip }
  const rowHeight = 64
  const listHeight = first * rowHeight

  useEffect(() => {
    setSkip(0)
  }, [search, first])

  return (
    <Layout>
      <Box display="flex">
        <Input placeholder="Search" value={search} onChange={setSearch} />
        <Box flex={1} />
        <Select type="number" value={first} onChange={setFirst}>
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
        </Select>
        <Suspense fallback="">
          <Pages args={args} setSkip={setSkip} />
        </Suspense>
      </Box>
      <Suspense fallback={<List height={listHeight}>Loading</List>}>
        <Users args={args} rowHeight={rowHeight} />
      </Suspense>
    </Layout>
  )
}

const Users = graphql(({ args, rowHeight }) => {
  const userCount = query.userCount({ search: args.search })
  const users = query.users(args)
  if (userCount === 0) return 'No users found'
  return (
    <List>
      {users.map(({ id, name, avatar }) => (
        <ListItem key={id} height={rowHeight}>
          <Avatar size={rowHeight * 0.75} source={avatar} />
          {name}
        </ListItem>
      ))}
    </List>
  )
})

const Pages = graphql(({ args, setSkip }) => {
  const { search, first, skip } = args
  const userCount = query.userCount({ search })

  if (userCount === 0) {
    return null
  }

  const page = skip / first + 1
  const pages = Math.ceil(userCount / first)
  const handleClickPrevious = () => setSkip(skip => skip - first)
  const handleClickNext = () => setSkip(skip => skip + first)
  return (
    <Pagination
      page={page}
      pages={pages}
      onPrevious={handleClickPrevious}
      onNext={handleClickNext}
    />
  )
})

export default Index
