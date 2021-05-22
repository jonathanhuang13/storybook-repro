export enum Size {
  Large = 'large',
  Small = 'small',
}

export interface Props {
  size: Size;
}

const TestComponent: (props: Props) => JSX.Element = (props) => {
  return <div>{props.size}</div>;
};

export default TestComponent;
