import React from 'react';

export interface Props {
  onClickFoo: () => void;
}

const TestComponent: (props: Props) => JSX.Element = (props) => {
  return (
    <div>
      <div onClick={props.onClickFoo}>Test Button</div>
    </div>
  );
};

export default TestComponent;
