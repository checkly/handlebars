import Handlebars from "handlebars"
import randomNumber from "./helpers/random-number"
import uuid from "./helpers/uuid"
import helpers from 'handlebars-helpers'

const handlebars = Handlebars.create();
handlebars.registerHelper('$RANDOM_NUMBER', randomNumber)
handlebars.registerHelper('$UUID', uuid)
handlebars.registerHelper(helpers(['comparison']))

export default handlebars
