var merge = require('webpack-merge')
var base = require('./index.js')

module.exports = merge(base, {
	server: {
		graphqlUri: 'https://dev-vm-01.kiva.org/ajax/graphql'
	}
})
