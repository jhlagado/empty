import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'
import { render } from '@testing-library/react'
import { Component } from '../component';

describe('breadcrumbs', () => {

  it('shows breadcrumbs same number of breadcrumbs as items in array', () => {

    const data = [{
      title: 'Title 1', path: ''
    }, {
      title: 'Title 2', path: ''
    }];

    const { container } = render(
      <Component crumbs={data} />,
    )
    const crumbs = container.querySelectorAll('.crumb');

    expect(crumbs.length).toBe(2);

  })
})
