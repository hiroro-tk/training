import {
  Button,
} from "@material-ui/core";
function Result(props) {
  const {data,setData} = props
  console.log(props.data)
  return (
    <div>
      result
      <div>{data.userStatus.gender}</div>
      <div>{data.userStatus.high}</div>
      <div>{data.userStatus.weight}</div>
      <div>BMI</div>
      <Button
        type="submit"
        onClick={() => setData({ ...data, isSet: false })}
        variant="contained"
      >
        診断に戻る
          </Button>
    </div>
  )
}
export default Result
