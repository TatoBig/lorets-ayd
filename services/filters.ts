import { formatDistance, format } from 'date-fns'
import { es } from 'date-fns/locale'

export function capitalize (text: string) {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function moneyFormat (currency: string, amount: number) {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: currency }).format(amount)
}

export const dateFormat = (date: string): string => {
  if (date) {
    const serverDate = new Date() // Epoch
    const newDate = new Date(date)

    const formatedDate = formatDistance(newDate, serverDate, {
      addSuffix: true,
      locale: es
    })
    return capitalize(formatedDate)
  }
  return 'Error'
}

export const dateFormatSpecific = (date: string, hideTime: boolean) => {
  const newDate = new Date(date)
  return format(newDate, `PP${hideTime ? '' : 'pp'}`, {
    locale: es
  })
}
