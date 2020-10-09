import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGridItem from '../components/GifGridItem';

describe('Pruebas en componente GifGridItem', () => {

  const title = 'Ranma';
  const url= 'https://algunacosa';
  const wrapper = shallow(<GifGridItem 
    title={ title }
    url={ url }  
    />);

  test('Debe de mostrar el componente correctamente y sus proptypes', () => {

    // Wrapper commonly used in rendered components
    // Shallow is a method from enzyme, similar to render from react but with more options
    expect( wrapper ).toMatchSnapshot();
    
  })
  
  test('Debe de tener un párrafo con el texto del props', () => {
    
    const p = wrapper.find('p').text().trim();

    expect(p).toBe('Ranma')

  })
  
  test('Debe de obtener una imagen con atributos url y title igual a los props', () => {

    const img = wrapper.find('img');
    console.log(img.html());
    console.log(img.props());
    console.log(img.props().src);
    
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);

  })

  test('Debe tener la clase animate__rubberBand ', () => {

    const div = wrapper.find('div');
    expect(div.props().className.includes('animate__rubberBand')).toBe(true)

  })
  
  
})
