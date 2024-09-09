# Make It Real - ORDER-SUMMARY-CARD

This is a solution to the ORDER-SUMMARY-CARD project from the Make It Real course.

## Table of Contents

- [Summary](#summary)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Summary

### The Challenge

Users should be able to:

- View an ORDER-SUMMARY-CARD according to the challenge instructions.
- It should be configured first for mobile devices.

### Screenshot desktop

![](./public/desktop.png)

### Screenshot mobile

![](./public/mobile.png)


## My Process

### Built With

- Semantic HTML5 markup.
- Custom CSS properties.
- Flexbox
- Mobile-first workflow
- React Component Development

### What I Learned

During the development of this project, I have gained valuable knowledge in creating components in React. I learned how to design and build reusable components, which improves the modularity and maintainability of the code. Additionally, I mastered passing parameters to components, allowing each to receive specific data and adapt to different contexts.

```jsx
function OrderSummary() {
  return (
    < >
      <section className='oderSummary_contenedor'>
        <ImagenCabecera />
        <EncabezadoConSubtítulo />
        <PlanProducto planAnual precio={59.99} />
        <BotonPrimario label='Procee to Payment' />
        <BotonSecundario label='Cancel Order' />
      </section>
    </>
  )
}
```
### Continued Development

In the future, I will focus on learning how to make my components responsive so that they adapt to different screen sizes. Since I have multiple CSS files for each subcomponent, I would like to learn techniques to handle responsive design more efficiently and avoid having to modify each CSS file individually. This will allow me to create applications that work well on devices of all sizes and improve the user experience.

### Useful Resources

- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS) - This documentation has been very helpful for understanding CSS properties and techniques. It has helped me resolve issues and improve the design of my projects.
- [React Documentation](https://react.dev/learn) - The React documentation has been key to understanding how components work and how to manage state and props. I recommend this resource to anyone learning React and looking to deepen their knowledge of building applications with this library.

## Author

- Website - [Gerson Camacho](https://github.com/GersonSmithKevin)

## Acknowledgments

I want to thank my classmates and teachers for their support and patience in addressing my questions and doubts during this project. Their help and guidance have been crucial to my learning and development. Thank you for sharing your knowledge and experience!
