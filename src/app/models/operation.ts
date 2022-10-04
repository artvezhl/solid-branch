export interface IOperation {
  _id: string,
  amount: string,
  type: string,
  name: {
    first: string,
    last: string
  },
  company: string,
  email: string,
  phone: string,
  address: string
}

export interface IOperationElement {
  id: number,
  type: string,
  count: number
}
