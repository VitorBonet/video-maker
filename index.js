const readline = require('readline-sync')
const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnSPrefix()
    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question('Termo para pesquisar na Wikipedia: ')
    }

    function askAndReturnSPrefix() {
        const prefixes = ['Quem é', 'O que é', 'A história de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
        const selectPrefixTerm = prefixes[selectedPrefixIndex]

        return selectPrefixTerm
    }

    console.log(JSON.stringify(content, null, 4))
}

start()