const PRODUCTS = [
    {
        id: 1,
        nome: 'AC/DC',
        preco: 89.90,
        imagem: 'img/1.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 2,
        nome: 'Halloween',
        preco: 199.90,
        imagem: 'img/2.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 3,
        nome: 'Misfits',
        preco: 59.90,
        imagem: 'img/3.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 4,
        nome: 'Iommi',
        preco: 59.90,
        imagem: 'img/4.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 5,
        nome: 'Burzum',
        preco: 59.90,
        imagem: 'img/5.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 6,
        nome: 'Kiss',
        preco: 59.90,
        imagem: 'img/6.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 7,
        nome: 'Black Sabbath',
        preco: 59.90,
        imagem: 'img/7.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 8,
        nome: 'Nightmares',
        preco: 59.90,
        imagem: 'img/8.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 9,
        nome: 'Iron Maiden',
        preco: 59.90,
        imagem: 'img/9.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 10,
        nome: 'Kiss',
        preco: 59.90,
        imagem: 'img/10.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 11,
        nome: 'Zeppelin',
        preco: 59.90,
        imagem: 'img/11.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 12,
        nome: 'Sabbath',
        preco: 59.90,
        imagem: 'img/12.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 13,
        nome: 'Zeppelin',
        preco: 59.90,
        imagem: 'img/13.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 14,
        nome: 'Slash',
        preco: 59.90,
        imagem: 'img/14.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 15,
        nome: 'Motorhead',
        preco: 59.90,
        imagem: 'img/15.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 16,
        nome: 'AC/DC',
        preco: 59.90,
        imagem: 'img/16.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 17,
        nome: 'Sabbath',
        preco: 59.90,
        imagem: 'img/17.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 18,
        nome: 'Social Distortion',
        preco: 59.90,
        imagem: 'img/18.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 19,
        nome: 'Misfits',
        preco: 59.90,
        imagem: 'img/19.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 20,
        nome: 'Kiss',
        preco: 59.90,
        imagem: 'img/20.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 21,
        nome: 'Eddie',
        preco: 59.90,
        imagem: 'img/21.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 22,
        nome: 'Deep Purple',
        preco: 59.90,
        imagem: 'img/22.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 23,
        nome: 'Road to Ruin',
        preco: 59.90,
        imagem: 'img/23.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 24,
        nome: 'Kiss',
        preco: 59.90,
        imagem: 'img/24.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 25,
        nome: 'Mummy',
        preco: 59.90,
        imagem: 'img/25.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 26,
        nome: 'High School',
        preco: 59.90,
        imagem: 'img/26.jpg',
        desc: 'blabla blabla'
    },
    {
        id: 27,
        nome: 'Slayer',
        preco: 59.90,
        imagem: 'img/27.jpg',
        desc: 'blabla blabla'
    }
];


function alert(s,tt=3000) {

    const div = document.createElement('div')
    div.style.position = 'fixed'
    div.style.left = '3px'
    div.style.top = '3px'

    div.style.backgroundColor = '#00ff0055'

    if(s.includes('ERRO'))
    {
        div.style.backgroundColor = '#ff0000'
    }

    //div.style.width='50vw'
    div.style.padding = '15px'
    div.style.borderRadius = '5px'
    div.textContent = s

    document.body.append(div)
    setTimeout(() => {
        div.remove()
    }, tt);
}