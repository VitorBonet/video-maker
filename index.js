const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnSPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Termo para pesquisar na Wikipedia: ')
    }

    function askAndReturnSPrefix() {
        const prefixes = ['Quem eh', 'O que eh', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
        const selectPrefixTerm = prefixes[selectedPrefixIndex]

        return selectPrefixTerm
    }

    console.log(content)
}

start()