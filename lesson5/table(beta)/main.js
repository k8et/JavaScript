const arr = [
    prompt('Назовите модель процесора '),
    prompt('Сколько гб оперативной памяти?'),
    prompt('Назовите модель видеокарты')
]
let i = [
    document.getElementById('tb1'),
    document.getElementById('tb2'),
    document.getElementById('tb3')
]
arr.forEach(e => i[0].innerHTML = arr[0])
arr.forEach(e => i[1].innerHTML = arr[1])
arr.forEach(e => i[2].innerHTML = arr[2])


