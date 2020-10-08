import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGridItem from '../components/GifGridItem';

describe('Pruebas en componente GifGridItem', () => {
  test('Debe de mostrar el componente correctamente', () => {
    
    // Wrapper commonly used in rendered components
    // Shallow is a method from enzyme, similar to render from react but with more options
    const wrapper = shallow(<GifGridItem />);
    expect( wrapper ).toMatchSnapshot();
    
  })
  
})
