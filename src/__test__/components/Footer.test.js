import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render del component Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const footer = mount(<Footer />);
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

/* An snapshoot it's used for visual component that shouldn't change */
describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
