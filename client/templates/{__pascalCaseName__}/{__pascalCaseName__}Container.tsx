import composeHooks from 'react-hooks-compose'
import { useParams } from 'react-router-dom'
import useResource, { ResourceKey } from '../../../state/resource'
import {__pascalCaseName__}, { I{__pascalCaseName__}Props } from './{__pascalCaseName__}'

const use{__pascalCaseName__}Container = (): I{__pascalCaseName__}Props => {
  const { id } = useParams()
  const [state, action] = useResource()

  return {  }
}

export default composeHooks({ use{__pascalCaseName__}Container })({__pascalCaseName__})
