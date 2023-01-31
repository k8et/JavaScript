let main = document.getElementById('container')
let name = ['Processor', 'Ram', "Vide card model"];
let html = '<table>';
let arr = [
    'Какой у вас процесор?',
    'Сколько у вас оперативной памяти?',
    'Какая модель видеокарты?'
]
for(let i = 0; i < name.length; i++ )
{
    const someValue = prompt(`${arr[i]}`)
    html += '<tr>';
    html += '<td>' + name[i] + '</td>';
    html += '<td>' +  someValue  + '</td>';
    html += '</tr>';
}

main.innerHTML = html;
