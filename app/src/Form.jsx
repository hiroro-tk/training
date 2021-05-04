import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

const styles = () => ({
  dropdownStyle: {
    maxHeight: 10,
  },
});
function Form(props) {
  const { handleSubmit, control, getValues } = useForm();
  const classes = styles();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.setDataAction({
          userStatus: {
            ...data,
            gender:
              data.gender === "male"
                ? "男性"
                : data.gender === "female"
                ? "女性"
                : "その他",
          },
          isSet: true,
        });
      })}
    >
      <Box my={3}>
        <FormLabel>①性別</FormLabel>
        <Controller
          name="gender"
          control={control}
          defaultValue="male"
          render={(props) => (
            <RadioGroup
              value={props.field.value}
              onChange={props.field.onChange}
              style={{
                display: "inline-block",
                marginLeft: "3vw",
              }}
            >
              <FormControlLabel value="male" control={<Radio />} label="男性" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="女性"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="その他"
              />
            </RadioGroup>
          )}
        />
      </Box>
      <Box mt={3}>
        <FormLabel>②身長</FormLabel>
        <Controller
          name="high"
          control={control}
          defaultValue={170}
          render={(props) => (
            <Box
              style={{
                display: "inline",
                marginLeft: "30px",
                marginTop: "200px",
              }}
            >
              <Select
                value={props.field.value}
                onChange={props.field.onChange}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                  classes: {
                    paper: classes.dropdownStyle,
                  },
                }}
              >
                {Array.from(new Array(41)).map((v, item) => (
                  <MenuItem value={item + 140} key={item}>
                    {item + 140}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
        />
      </Box>
      <Box my={3}>
        <FormLabel>③体重</FormLabel>
        <Controller
          name="weight"
          control={control}
          defaultValue={50}
          render={(props) => (
            <Box
              style={{
                display: "inline",
                marginLeft: "30px",
                marginTop: "200px",
              }}
            >
              <Select
                value={props.field.value}
                onChange={props.field.onChange}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                  classes: {
                    paper: classes.dropdownStyle,
                  },
                }}
              >
                {Array.from(new Array(101)).map((v, item) => (
                  <MenuItem value={item + 40} key={item}>
                    {item + 40}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
        />
      </Box>
      <Box mt={3}>
        <FormLabel>④部位</FormLabel>
        <Box>
          <Controller
            name="parts"
            control={control}
            defaultValue={{
              arm: false,
              shoulder: false,
              chest: false,
              back: false,
              stomach: false,
              waist: false,
              hip: false,
              thighs: false,
              calf: false,
            }}
            render={(props) => {
              return (
                <Box
                  display="inline-grid"
                  mt={0}
                  style={{
                    display: "inline",
                    marginLeft: "30px",
                    marginTop: "200px",
                  }}
                >
                  {[
                    "arm",
                    "shoulder",
                    "chest",
                    "back",
                    "stomach",
                    "waist",
                    "hip",
                    "thighs",
                    "calf",
                  ].map((item) => {
                    let name = "腕";
                    switch (item) {
                      case "arm":
                        break;
                      case "shoulder":
                        name = "肩";
                        break;

                      case "chest":
                        name = "胸";
                        break;
                      case "back":
                        name = "背中";
                        break;

                      case "stomach":
                        name = "腹";
                        break;
                      case "waist":
                        name = "腰";
                        break;
                      case "hip":
                        name = "おしり";
                        break;
                      case "thighs":
                        name = "ふともも";
                        break;
                      case "calf":
                        name = "ふくらはぎ";
                        break;
                      default:
                        break;
                    }
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) =>
                              props.field.onChange(() => {
                                const { parts } = getValues();
                                const newParts = {
                                  ...parts,
                                  [item]: e.currentTarget.checked,
                                };
                                console.log(parts);

                                return newParts;
                              })
                            }
                            name={item}
                          />
                        }
                        label={name}
                      />
                    );
                  })}
                </Box>
              );
            }}
          />
        </Box>
        <Box my={3}>
          <FormLabel>⑤目的</FormLabel>
          <Controller
            name="target"
            control={control}
            defaultValue="muscle"
            render={(props) => (
              <RadioGroup
                value={props.field.value}
                onChange={props.field.onChange}
                style={{
                  display: "inline",
                  marginLeft: "30px",
                  marginTop: "200px",
                }}
              >
                <FormControlLabel
                  value="muscle"
                  control={<Radio />}
                  label="筋肥大"
                />
                <FormControlLabel
                  value="power"
                  control={<Radio />}
                  label="筋パワー"
                />
                <FormControlLabel
                  value="stamina"
                  control={<Radio />}
                  label="筋持久力"
                />
              </RadioGroup>
            )}
          />
        </Box>
      </Box>
      <Button type="submit" color="inherit" variant="contained">
        診断する
      </Button>
    </form>
  );
}

export default Form;
