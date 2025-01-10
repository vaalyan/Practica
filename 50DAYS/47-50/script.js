const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "He trabajado con cientos de desarrolladores de HTML/CSS y tengo que decir que el primer puesto es para este chico. Es un desarrollador increíble. Hace hincapié en el código limpio y de calidad y presta atención a los detalles. Me encantan los desarrolladores que respetan todos y cada uno de los aspectos de un diseño bien pensado y hacen todo lo posible por plasmarlo en código. Va más allá y transforma el ARTE en PÍXELES, sin ningún problema, en todo momento.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      "Este chico es un desarrollador frontend increíble que entregó la tarea exactamente como la necesitábamos. Hazte un favor y contrátalo. No te decepcionará el trabajo que te entregará. Hará todo lo posible para asegurarse de que estés satisfecho con tu proyecto. ¡Seguro que volveré a trabajar con él!",
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Este chico es un gran trabajador. La comunicación con él también fue muy buena y estuvo muy atento en todo momento, algo que no es fácil de encontrar en muchos freelancers. Sin duda repetiremos con él.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
    "Este chico hace todo lo posible para hacer el trabajo y hacerlo bien. Esta es la segunda vez que lo contrato y lo volveré a contratar en el futuro.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
    "Tenía mis dudas de que, debido a la fecha límite, este proyecto no se podría realizar. Pero este hombre me demostró que estaba equivocado. No solo entregó un trabajo excepcional, sino que logró entregarlo un día antes de la fecha límite. Y cuando le pedí algunas revisiones, las hizo en MINUTOS. Espero trabajar con él nuevamente y lo recomiendo totalmente. ¡Gracias nuevamente!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
    "Este chico es un diseñador y desarrollador front-end de primer nivel. Se comunica bien, trabaja rápido y produce un trabajo de calidad. ¡Hemos tenido suerte de trabajar con él!.",
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
    "Este chico es un joven y talentoso profesional de TI, proactivo y responsable, con una fuerte ética de trabajo. Tiene un gran dominio de las conversiones PSD2HTML y de la tecnología HTML/CSS. Aprende rápido y está ansioso por aprender nuevas tecnologías. Está centrado y tiene una buena dinámica para cumplir con los plazos y obtener resultados sobresalientes.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)