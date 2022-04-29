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
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

type Props = {
  headcells: {
    isNumberic?: boolean
    title: string
    id: string
  }[]
  rows: any[]
  subtitle: string
  onDelete?: (id: string) => void
  onEdit?: (id: string) => void
}

const Table = ({
  headcells,
  rows,
  subtitle,
  onDelete,
  onEdit
}: Props) => {
  const handleDelete = (id: string) => {
    if (onDelete) {
      onDelete(id)
    }
  }

  const handleEdit = (id: string) => {
    if (onEdit) {
      onEdit(id)
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
                if (headcell.id === 'delete') {
                  return (
                    <Td
                      className="flex ml-6 cursor-pointer"
                      key={index}
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </Td>
                  )
                } else if (headcell.id === 'edit') {
                  return (
                    <Td
                      className="flex ml-4 cursor-pointer"
                      key={index}
                      onClick={() => handleEdit(row.id)}
                    >
                      <EditIcon />
                    </Td>
                  )
                } else {
                  return (
                    <Td
                      key={index}
                      isNumeric={headcell.isNumberic}
                    >
                      {row[headcell.id]}
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
