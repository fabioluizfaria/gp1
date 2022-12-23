const novas = [

    document.getElementById('img-quimica-nova-0'),
    document.getElementById('img-quimica-nova-1'),
    document.getElementById('img-quimica-nova-2'),
    document.getElementById('img-quimica-nova-3'),
    document.getElementById('img-quimica-nova-4')

];

const originais = [

    document.getElementById('img-quimica-original-0'),
    document.getElementById('img-quimica-original-1'),
    document.getElementById('img-quimica-original-2'),
    document.getElementById('img-quimica-original-3'),
    document.getElementById('img-quimica-original-4')

];

for (let index = 0; index < 5; index++) {

    const original = originais[index];
    const nova = novas[index];

    if (original.style.display == "block") {

        nova.style.display = "block"
        original.style.display = "none"

    } else {

        nova.style.display = "none"
        original.style.display = "block"

    }

}

function mudarFuncao(id) {

    const nova = novas[id]
    const original = originais[id]

    if (original.style.display == "block") {

        nova.style.display = "block"
        original.style.display = "none"

    } else {

        nova.style.display = "none"
        original.style.display = "block"

    }

}