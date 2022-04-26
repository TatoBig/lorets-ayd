import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'

type Props = {
  headcells: {
    isNumberic?: boolean
    title: string
    id: string
  }[]
  rows: any[]
  subtitle: string
}

const Table = ({
  headcells,
  rows,
  subtitle
}: Props) => {
  return (
    <TableContainer className="w-full">
      <ChakraTable variant='simple'>
        <TableCaption>{subtitle}</TableCaption>
        <Thead>
          <Tr>
            {headcells.map(headcell => (
              <Th isNumeric={headcell.isNumberic} key={headcell.title}>{headcell.title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              {headcells.map((headcell, index) => (
                <Td key={index} isNumeric={headcell.isNumberic}>{row[headcell.id]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}

export default Table
