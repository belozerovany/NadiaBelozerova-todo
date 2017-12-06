import './error.scss';

export const Error = props => (
  <mark
    style={{ color: props.color }}
    className="error"
  >
    { props.text || 'Error!' }
  </mark>);
