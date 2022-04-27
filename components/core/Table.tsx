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
import { DeleteIcon } from '@chakra-ui/icons'

type Props = {
  headcells: {
    isNumberic?: boolean
    title: string
    id: string
  }[]
  rows: any[]
  subtitle: string
  onDelete?: (id: string) => void
}

const Table = ({
  headcells,
  rows,
  subtitle,
  onDelete
}: Props) => {
  const handleDelete = (id: string) => {
    if (onDelete) {
      onDelete(id)
    }
  }
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
              {headcells.map((headcell, index) => {
                if (headcell.id !== 'delete') {
                  return (
                    <Td
                      key={index}
                      isNumeric={headcell.isNumberic}
                    >
                      {row[headcell.id]}
                    </Td>
                  )
                } else {
                  return (
                    <Td
                      className="flex justify-center cursor-pointer"
                      key={index}
                      isNumeric={headcell.isNumberic}
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </Td>
                  )
                }
              })}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}

export default Table
