import ajax from './ajax'

export const reqTest = () => ajax(`/view/bureau/test`)
export const reqTest1 = (lon, lng) => ajax(`/view/bureau/test1`)
