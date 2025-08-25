import { Component } from 'react';
import './bt3.css';

type Props = {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' | 'link';
};

export default class bt3 extends Component<Props> {
  static defaultProps = {
    variant: 'primary',
  };

  render() {
    const { label, variant } = this.props;
    return <button className={`btn ${variant}`}>{label}</button>;
  }
}

