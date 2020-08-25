import Handlebars from 'handlebars'
import helpers from 'handlebars-helpers'
import { v4 } from 'uuid'
import random from 'lodash.random'

const handlebars = Handlebars.create()
handlebars.registerHelper('$RANDOM_NUMBER', () => random(0, 10000))
handlebars.registerHelper('$UUID', () => v4())
handlebars.registerHelper(helpers(['comparison', 'date']))

export default handlebars
