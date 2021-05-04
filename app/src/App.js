import { Box } from "@material-ui/core";
import { useState } from "react";
import Form from "./Form";

function App() {
  const trainingList = {
    arm: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    shoulder: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    chest: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    back: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    stomach: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    waist: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    hip: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    thighs: {
      // ふともも
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
    calf: {
      // ふくらはぎ
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 0, title: "", body: "" }],
    },
  };

  const trainingType = {
    power: {
      max: "80%",
      set: "6~10回",
      rest: "2分",
    },
    muscle: {
      max: "80%",
      set: "6~10回",
      rest: "2分",
    },
    diet: {
      max: "80%",
      set: "6~10回",
      rest: "2分",
    },
    stamina: {
      max: "80%",
      set: "6~10回",
      rest: "2分",
    },
  };

  const [data, setData] = useState({
    userStatus: { gender: "男性", height: 170, kg: 60 },
    trainingIds: [],
    isSet: false,
  });
  return (
    <div
      className="App"
      style={{
        backgroundColor: "darkgray",
      }}
    >
      <div style={{ width: "100%" }}>タイトル</div>
      <div style={{ width: "100%" }}>説明文</div>
      <Box style={{ backgroundColor: "white", width: "100%" }}>
        <Form setDataAction={setData} />
      </Box>
      {data.isSet && (
        <div>
          result
          <div>{data.userStatus.gender}</div>
        </div>
      )}
    </div>
  );
}

export default App;
