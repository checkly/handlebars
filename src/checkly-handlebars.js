import Handlebars from 'handlebars'
import helpers from 'handlebars-helpers'
import { v4 } from 'uuid'
import random from 'lodash.random'

const create = () => {
  const handlebars = Handlebars.create()
  handlebars.registerHelper('$RANDOM_NUMBER', () => random(0, 10000))
  handlebars.registerHelper('$UUID', () => v4())
  handlebars.registerHelper(helpers(['comparison', 'date']))
  handlebars.registerHelper('split', (string, separator, index = -1) => {
    if (index === -1) {
      return string.split(separator);
    }
    return string.split(separator)[index];
  })
  return handlebars
}

const handlebars = create()

export default {...handlebars, create }
