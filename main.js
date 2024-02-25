import './style.css'

const products = [
  {
    image:
      'https://contents.mediadecathlon.com/p1343983/k$0ad88bf57a6268feb25c29984f138b17/sq/casco-equitacion-500-fouganza-negro.jpg?format=auto&f=800x0',
    name: 'Casco',
    price: 80.00,
    description: 'Casco de equitación',
    stars: '3',
    reviews: '558',
    category: 'Equipación'
  },
  {
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQdcsk2tW4x17woW6l4JVcvrpeQtZ3qgWvBEDK3IRjVn0IvDV9JphODGpGYC8grypiXA4kohNSNVltQD0pbWywpJguiqypTbUspGwqeIumu1qrEsuQMKp3lXBoLcrd_2aqYX4lLicQeE60&usqp=CAc',
    name: 'Orejeras',
    price: 20.00,
    description: 'Orejeras caballo',
    stars: '3',
    reviews: '17',
    category: 'Complementos'
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa15_FlA9_TV3cbiCx-wXMwXd2mJR0t4zjig&usqp=CAU',
    name: 'Camisa',
    price: 60.00,
    description: 'Camisa equitación',
    stars: '4',
    reviews: '724',
    category: 'Uniforme'
  },
  {
    image:
      'https://trancoatranco.tienda/10994-large_default/guantes-de-montar-de-cuero-y-malla-bordoni.jpg',
    name: 'Guantes',
    price: 54.95,
    description: 'Guantes de montar de cuero',
    stars: '4',
    reviews: '1206',
    category: 'Equipación'
  },
  {
    image:
      'https://www.tot-cavall.com/media/catalog/product/cache/1/small_image/252x380/9df78eab33525d08d6e5fb8d27136e95/1/0/10625_1.jpg',
    name: 'Pantalón',
    price: 75.00,
    description: 'Pantalón montar',
    stars: '5',
    reviews: '782',
    category: 'Uniforme'
  },
  {
    image:
      'https://www.centralhipica.com/wp-content/uploads/2016/07/italia1.jpg',
    name: 'Botas',
    price: 199.50,
    description: 'Botas montar cuero sin cordones',
    stars: '5',
    reviews: '1965',
    category: 'Equipación'
  },
  {
    image:
      'https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw73cf672e/horze/14270_BL_1.jpg?sw=535&q=55&filename=montura-de-cuero-de-uso-general-horze-negro.jpg',
    name: 'Montura',
    price: 241.99,
    description: 'Montura de cuero de uso general',
    stars: '5',
    reviews: '38',
    category: 'Accesorios'
  },
  {
    image: 'https://alogo.es/wp-content/uploads/2021/08/210191100203_01-1.jpg',
    name: 'Cabezadas con riendas',
    price: 89.00,
    description: 'Cabezada con riendas de cuero',
    stars: '5',
    reviews: '96',
    category: 'Accesorios'
  },
  {
    image:
      'https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dwda4bccc3/horseware/YFVQS_099_01.jpg?sw=535&q=55&filename=chaqueta-de-concurso-para-mujer-aa-motionlite-black.jpg',
    name: 'Chaqueta de concurso',
    price: 129.99,
    description: 'Chaqueta de concurso equitación',
    stars: '5',
    reviews: '67',
    category: 'Uniforme'
  },
  {
    image:
      'https://media.galope-store.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/9/1/91310720.jpg',
    name: 'Polainas cuero',
    price: 45.00,
    description: 'Polainas de cuero con forro elástico',
    stars: '5',
    reviews: '67',
    category: 'Equipación'
  },
  {
    image:
      'https://ae01.alicdn.com/kf/S4d012ce3f5074b4586efc4b0fa875a20h/Mallas-protectoras-de-patas-de-caballo-equipo-de-protecci-n-de-caballo-grande-y-poni-leggings.jpg_80x80.jpg_.webp',
    name: 'Protectores',
    price: 45.75,
    description: 'Mallas protectoras caballos',
    stars: '5',
    reviews: '15',
    category: 'Complementos'
  },
  {
    image:
      'https://www.horze.es/dw/image/v2/AATB_PRD/on/demandware.static/-/Sites-main-catalog/default/dw50e6ce59/sprenger/39822_SI_BL_1.jpg?sw=535&q=55&filename=sprenger-spurs-ultra-ajuste-agarre-extra-silver-black.jpg',
    name: 'Espuelas',
    price: 53.90,
    description: 'Espuelas de acerto con agarre extra',
    stars: '5',
    reviews: '129',
    category: 'Accesorios'
  }
]
// Header
const header = document.createElement('header')
const button = document.createElement('button')
const buttonContainer = document.createElement('div')
const logo = document.createElement('img')
const ulLinks = document.createElement('ul')
ulLinks.setAttribute('style', '')

// Logo
logo.classList.add('logo')
logo.src = './public/assets/variante-de-dibujo-de-cabeza-de-caballo.png'
logo.alt = 'logo'

button.classList.add('menu-button')
button.innerHTML = '&#9776; Menu'

ulLinks.classList.add('links')

// Menú
const nav = ['Home', 'Products', 'About us', 'Opinions', 'Contact']

const body = document.querySelector('body')
body.appendChild(header)
header.appendChild(logo)
header.appendChild(buttonContainer)
buttonContainer.appendChild(button)
buttonContainer.appendChild(ulLinks)
nav.forEach((link) => {
  const liLink = document.createElement('li')
  const aLink = document.createElement('a')
  ulLinks.appendChild(liLink)
  liLink.appendChild(aLink)
  aLink.href = ''
  aLink.innerText = link
})

// Hamburguesa
buttonContainer.addEventListener('click', (event) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches

  if (isMobile) {
    console.log('Estás en un dispositivo móvil.')
    console.log(event)
    const menu = event.target.nextElementSibling
    console.log(menu)
    menu.classList.toggle('show')
  }
})

// Contenedor: productos y filtros
const container = document.createElement('div')
container.classList.add('filters-products')
const filtersSection = document.createElement('section')
const productSection = document.createElement('section')

filtersSection.id = 'filters'
productSection.id = 'products'

container.appendChild(filtersSection)
container.appendChild(productSection)

body.appendChild(container)

// Productos
const productList = document.getElementById('products')

// Estrellas
function generateStarRating(stars) {
  const roundedStars = Math.round(parseFloat(stars))
  const starPercentage = (roundedStars / 5) * 100
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
  return `<div class="star-ratings-css-top" style="width: ${starPercentageRounded}"><span>★★★★★</span></div><div class="star-ratings-css-bottom"><span>★★★★★</span></div>`
}

function generateProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="product image">
      </div>
      <div class="product-info">
        <h4>${product.name}</h4>
        <p class="price">${product.price}€</p>
        <p class="type">${product.category}</p>
        <div class="star-ratings-css">
          ${generateStarRating(product.stars)}
        </div>
        <button>Añadir al carrito</button>
      </div>
    </div>
  `
}

function paintProductCards(products) {
  const productList = document.getElementById('products')

  products.forEach((product) => {
    const productCardHTML = generateProductCard(product)
    productList.innerHTML += productCardHTML
  })
}

paintProductCards(products)
// products.forEach((product) => {
//   productList.innerHTML += `
//   <div class="product-card">
//        <div class="product-image">
//          <img src="${product.image}" alt="product image">
//        </div>
//        <div class="product-info">
//          <h4>${product.name}</h4>
//          <p class="price">${product.price}</p>
//          <p class="type">${product.category}</p>
//          <div class="star-ratings-css">
//           ${generateStarRating(product.stars)}
//         </div>
//          <button>Añadir al carrito</button>
//        </div>
//   </div>
//  `
// })

const filterContainerName = document.createElement('div')
filterContainerName.classList.add('filterContainerName')
filtersSection.appendChild(filterContainerName)
const filterLabelName = document.createElement('label')
filterLabelName.innerText = 'Nombre'
const filterInputName = document.createElement('input')
filterInputName.id = 'inputName'
filterContainerName.appendChild(filterLabelName)
filterContainerName.appendChild(filterInputName)

const filterContainerPrice = document.createElement('div')
filterContainerPrice.classList.add('filterContainerPrice')
filtersSection.appendChild(filterContainerPrice)
const filterLabelPrice = document.createElement('label')
filterLabelPrice.innerText = 'Precio'
const filterInputPrice = document.createElement('input')
filterInputPrice.id = 'inputPrice'
filterInputPrice.setAttribute('type', 'number')
filterContainerPrice.appendChild(filterLabelPrice)
filterContainerPrice.appendChild(filterInputPrice)

const filterContainerCategory = document.createElement('div')
filterContainerCategory.classList.add('filterContainerCategory')
filtersSection.appendChild(filterContainerCategory)
const filterLabelCategory = document.createElement('label')
filterLabelCategory.innerText = 'Categoría'
const categoryProducts = [
  'Todos',
  'Equipación',
  'Complementos',
  'Uniforme',
  'Accesorios',
  'Caballos'
]
const filterInputCategory = document.createElement('select')
filterInputCategory.id = 'inputCategory'
categoryProducts.forEach((category) => {
  const option = document.createElement('option')
  filterInputCategory.appendChild(option)
  option.innerText = category
})
filterContainerCategory.appendChild(filterLabelCategory)
filterContainerCategory.appendChild(filterInputCategory)

const buttonFilter = document.createElement('button')
const buttonClear = document.createElement('button')
const buttonContainerFilters = document.createElement('div')
buttonContainerFilters.appendChild(buttonFilter)
buttonContainerFilters.appendChild(buttonClear)

buttonFilter.innerText = 'Filtrar'
buttonClear.innerText = 'Limpiar filtros'

buttonContainerFilters.classList.add('buttonFilters')
filtersSection.appendChild(buttonContainerFilters)

buttonFilter.addEventListener('click', () => {
  // console.log('Filtrado')
  const nameValue = document.getElementById('inputName').value
  const priceValue = document.getElementById('inputPrice').value
  const categoryValue = document.getElementById('inputCategory').value

  productList.innerHTML = ''
  let resultadoFiltro = filtrar(nameValue, priceValue, categoryValue)
  console.log(resultadoFiltro)
  paintProductCards(resultadoFiltro)
})

buttonClear.addEventListener('click', () => {
  // console.log('Limpiado')
  const nameValue = document.getElementById('inputName')
  const priceValue = document.getElementById('inputPrice')
  const categoryValue = document.getElementById('inputCategory')
  nameValue.value = ''
  priceValue.value = ''
  categoryValue.value = 'Todos'
  productList.innerHTML = ''
  paintProductCards(products)
})

function filtrar(name, price, category) {
  // console.log(name, price, category)
  return products.filter((product) => {
    const nameProduct = product.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    const nameProductFilter = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    const priceProduct = product.price
    const categoryProduct = product.category

    if (
      (name === '' || nameProduct.includes(nameProductFilter)) &&
      (price === '' || priceProduct <= price) &&
      (category === 'Todos' || categoryProduct.includes(category))
    ) {
      return true
    } else {
      return false
    }
  })
}

// Footer
const navFooter = ['Help', 'Information', 'Contact', 'Social Media']
const footer = document.createElement('footer')
footer.classList.add('footer-items')
body.appendChild(footer)
const footerUl = document.createElement('ul')
footer.appendChild(footerUl)

navFooter.forEach((link) => {
  const liFooter = document.createElement('li')
  const aFooter = document.createElement('a')
  footerUl.appendChild(liFooter)
  footerUl.appendChild(aFooter)
  aFooter.href = ''
  aFooter.innerText = link
})

const copyright = document.createElement('p')
copyright.classList.add('copyright')
copyright.innerHTML = 'Copyright MONICA SANCHEZ CARRILLO 2024'
footer.appendChild(copyright)
