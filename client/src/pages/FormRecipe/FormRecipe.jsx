import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRecipe } from '../../redux/actions';

import styles from './FormRecipe.module.css';
import imgFormRecipe from './assets/logo-form.png';

function validate(state, errorsState) {
  const errors = { ...errorsState };

  const regexText = /[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
  const regexImage = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
  const regexNumber = /^[0-9]+$/
  const regexUser = /^[a-z0-9_-]{3,16}$/

  if(state.title === '') errors.title = 'Este campo es obligatorio'
  else {
    if(!regexText.test(state.title)) errors.title = 'No puede contener numeros ni caracteres especiales'
    else errors.title = ''
  }

  if(state.image === '') errors.image = 'Este campo es obligatorio'
  else {
    if(!regexImage.test(state.image)) errors.image = 'introduce una URL valida'
    else errors.image = ''
  }

  if(state.healthScore < 10) errors.healthScore = 'receta poco saludable'
  else {
    if(state.healthScore > 100) errors.healthScore = 'no puede ser mayor a 100'
    else errors.healthScore = ''
  }

  if(state.preparationMinutes < 1) errors.preparationMinutes = 'agrega un tiempo valido'
  else {
    if(!regexNumber.test(state.preparationMinutes)) errors.preparationMinutes = 'solo puede contener numeros'
    else errors.preparationMinutes = ''
  }

  if(state.servings < 1) errors.servings = 'debe agregar al menos 1 servicio'
  else {
    if(!regexNumber.test(state.servings)) errors.servings = 'solo se aceptan valores numericos'
    else errors.servings = ''
  }

  if(state.creditsText === '') errors.creditsText = 'este campo es obligatorio'
  else {
    if(!regexUser.test(state.creditsText)) errors.creditsText = 'Tu nombre de usuario solo puede contener letras minúsculas, números, guion bajo y guion medio y deben tener entre 3 y 16 caracteres'
    else errors.creditsText = ''
  }

  if(state.summary === '') errors.summary = 'este campo es obligatorio'
  else {
    errors.summary = ''
  }

  if(state.ingredients === '') errors.ingredients = 'debes agregar al menos un ingrediente'
  else {
    errors.ingredients = ''
  }

  if(state.instructions === '') errors.instructions = 'este campo es obligatorio'
  else {
    errors.instructions = ''
  }

  return errors;
}

export default function FormRecipe () {
  const dispatch = useDispatch();
  const [arrayDiets, setArrayDiets] = useState([]);
  
  const [form, setForm] = useState({
    title: '',
    image: '',
    summary: '',
    healthScore: 0,
    instructions: '',
    ingredients: '',
    preparationMinutes: 0,
    servings: 0,
    creditsText: '',
    likes: 0,
    diets: []
  });

  const [errors, setErrors] = useState({
    title: '',
    image: '',
    summary: '',
    healthScore: 0,
    instructions: '',
    ingredients: '',
    preparationMinutes: 0,
    servings: 0,
    creditsText: '',
    likes: 0,
    diets: []
  });

  function handleChange (event) {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, diets: arrayDiets, [property]:value });
    setErrors(validate({ ...form, [property]:value }, errors));
  }

  function handleCheck (event) {
    const { value, checked } = event.target;

    if (checked) {
      setArrayDiets(previo => [...previo, value])
    } else {
      setArrayDiets(previo => {
        return [...previo.filter(diet => diet!==value)]
      })
    }
  }

  function handleSubmit (event) {
    event.preventDefault();

    if(errors.title!==''||
      errors.image!==''||
      errors.summary!==''||
      errors.healthScore!==''||
      errors.instructions!==''||
      errors.ingredients!==''||
      errors.preparationMinutes!==''||
      errors.servings!==''||
      errors.creditsText!==''||
      errors.diets.length!==0) {
        alert('Hay campos incorrectos')
        console.log(errors);
      } else {
        dispatch(postRecipe(form))
        alert('Receta creada con exito');
        setForm({
          title: '',
          image: '',
          summary: '',
          healthScore: 0,
          instructions: '',
          ingredients: '',
          preparationMinutes: 0,
          servings: 0,
          creditsText: '',
          likes: 0,
          diets: []
        });
      }
  }

  return (
    <section className={styles.formRecipe}>
      <div className={styles.image}>
        <img src={imgFormRecipe} alt='Woman cooking'/>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.heading}>New Recipe</h1>
        <div className={styles.inputcaja}>
          <input type='text' name='title' id='title' onChange={handleChange} required/>
          <label htmlFor='title'>Title Recipe</label>
        </div>
          {
            (errors.title)? (
              <label className={styles.errorLabel}>{ errors.title }</label>
            ) : (
              <></>
            )
          }
        <div className={styles.inputcaja}>
          <input type='text' name='image' id='image' onChange={handleChange} required/>
          <label htmlFor='image'>image</label>
        </div>
        {
          (errors.image)? (
            <label className={styles.errorLabel}>{ errors.image }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <input type='number' name='healthScore' id='healthScore' onChange={handleChange} required/>
          <label htmlFor='healthScore'>HealthScore</label>
        </div>
        {
          (errors.healthScore)? (
            <label className={styles.errorLabel}>{ errors.healthScore }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.containerCheckbox}>
        <div className={styles.containerColumn}>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="glutenfree" value={1} onChange={handleCheck} />
            <label htmlFor="glutenfree" className={styles.labelCheck} >Gluten Free</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="dairyfree" value={2} onChange={handleCheck} />
            <label htmlFor="dairyfree" className={styles.labelCheck} >Dairy Free</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="lacto-ovo-vegetarian" value={3} onChange={handleCheck} />
            <label htmlFor="lacto-ovo-vegetarian" className={styles.labelCheck} >Lacto ovo vegetarian</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="vegan" value={4} onChange={handleCheck} />
            <label htmlFor="vegan" className={styles.labelCheck} >Vegan</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="vegetarian" value={5} onChange={handleCheck} />
            <label htmlFor="vegetarian" className={styles.labelCheck} >Vegetarian</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="paleolithic" value={6} onChange={handleCheck} />
            <label htmlFor="paleolithic" className={styles.labelCheck} >Paleolithic</label>
          </div>
        </div>
        <div className={styles.containerColumn}>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="primal" value={7} onChange={handleCheck} />
            <label htmlFor="primal" className={styles.labelCheck} >Primal</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="whole30" value={8} onChange={handleCheck} />
            <label htmlFor="whole30" className={styles.labelCheck} >Whole30</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="pescatarian" value={9} onChange={handleCheck} />
            <label htmlFor="pescatarian" className={styles.labelCheck} >Pescatarian</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="ketogenic" value={10} onChange={handleCheck} />
            <label htmlFor="ketogenic" className={styles.labelCheck} >Ketogenic</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="fodmapfriendly" value={11} onChange={handleCheck} />
            <label htmlFor="fodmapfriendly" className={styles.labelCheck} >Fodmap Friendly</label>
          </div>
        </div>
        </div>
          
          <div className={styles.inputcaja}>
            <input type='number' name='preparationMinutes' id='preparationMinutes' onChange={handleChange} required/>
            <label htmlFor='preparationMinutes'>Preparation Minutes</label>
          </div>
        {
          (errors.preparationMinutes)? (
            <label className={styles.errorLabel}>{ errors.preparationMinutes }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <input type='number' name='servings' id='servings' onChange={handleChange} required/>
          <label htmlFor='servings'>Servings</label>
        </div>
        {
          (errors.servings)? (
            <label className={styles.errorLabel}>{ errors.servings }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <input type='text' name='creditsText' id='creditsText' onChange={handleChange} required/>
          <label htmlFor='creditsText'>Credits Text</label>
        </div>
        {
          (errors.creditsText)? (
            <label className={styles.errorLabel}>{ errors.creditsText }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <textarea required name='summary' onChange={handleChange} id='summary' cols={30} rows={10}></textarea>
          <label htmlFor='summary'>Summary</label>
        </div>
        {
          (errors.summary)? (
            <label className={styles.errorLabel}>{ errors.summary }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <textarea required name='ingredients' onChange={handleChange} id='ingredients' cols={30} rows={10}></textarea>
          <label htmlFor='ingredients'>Ingredients</label>
        </div>
        {
          (errors.ingredients)? (
            <label className={styles.errorLabel}>{ errors.ingredients }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <textarea required name='instructions' onChange={handleChange} id='instructions' cols={30} rows={10}></textarea>
          <label htmlFor='instructions'>Instructions</label>
        </div>
        {
          (errors.instructions)? (
            <label className={styles.errorLabel}>{ errors.instructions }</label>
          ) : (
            <></>
          )
        }
        <button type='submit' className={styles.btn}>Crete Recipe</button>
      </form>
    </section>
  )
}