/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../../src/pages/Home';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('home screen', () => {
  it('move to daftar jurnal', () => {
    const navigation = {navigate: () => {}};
    spyOn(navigation, 'navigate');
    const page = render(<Home navigation={navigation} />);
    const homeBtn = page.getByTestId('home-btn');
    fireEvent.press(homeBtn);
    expect(navigation.navigate).toHaveBeenCalledWith('DetailJurnal');
  });
});
