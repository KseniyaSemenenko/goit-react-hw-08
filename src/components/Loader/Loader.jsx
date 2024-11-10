import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <RotatingLines
      visible={true}
      height="54"
      width="54"
      color="grey"
      strokeColor="rebeccapurple"
      strokeWidth="3"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
