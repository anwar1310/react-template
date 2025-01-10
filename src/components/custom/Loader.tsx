import { TailSpin } from "react-loader-spinner";

type Props = {
    height:string
    width:string
    color:string
}

const Loader = ({color, height, width}:Props) => {
  return (
    <div>
      <TailSpin
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
