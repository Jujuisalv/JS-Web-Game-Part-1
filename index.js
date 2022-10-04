
function newImage(imgUrl, x, y)
{
    let img = document.createElement('img')
    img.src = `assets/${imgUrl}`
    img.style.position = 'fixed'
    img.style.left = x.toString() + "px"
    img.style.bottom = y.toString() + "px"
    document.body.append(img)
    return img
}

let greenCharacter = newImage('green-character.gif', 100, 100)
let pineTree = newImage('pine-tree.png', 450, 200)
let tree = newImage('tree.png', 200, 300)
let pillar = newImage('pillar.png', 350, 100)
let crate = newImage('crate.png', 150, 200)
let well = newImage('well.png', 500, 425)

function newItem(imageUrl, x, y)
{
    const a = arguments;
    let img = newImage(a[0],a[1], a[2])
    img.addEventListener('click', function(){
        img.remove()
    })
    return img
}
newItem('sword.png', 500, 405)
newItem('sheild.png', 165, 185)
newItem('staff.png', 600, 100)