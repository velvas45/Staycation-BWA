import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

describe('Testing Functional Button', () => {
  const Link = () => {
    return (
      <Router>
        <Button href="" type="link"></Button>
      </Router>
    );
  };
  it('Should not allowed click button if isDisabled is present', () => {
    const { container } = render(<Button isDisabled></Button>);
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
  });

  it('Should render loading/spinner', () => {
    const { container, getByText } = render(<Button isLoading></Button>);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('Should render <a> tag', () => {
    const { container } = render(<Button type="link" isExternal></Button>);
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  it('Should render <Link> tag', () => {
    const { container } = render(<Link />);
    expect(container.querySelector('a')).toBeInTheDocument();
  });
});
