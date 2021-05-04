import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import Form from "./Form";

function App() {
  const trainingList = {
    arm: {
      url: "",
      title: "ダンベルカール",
      body: "①手のひらが上に向くようにダンベルを持ち、足は肩幅、背筋を伸ばす。②肘は体よりやや前にキープし、5秒かけてゆっくり持ち上げる。③肘を曲げ切ったら、5秒かけてゆっくり戻す。",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ハンマーカール", body: "" },
    { id: 2, title: "フレンチプレス", body: "" },
    { id: 3, title: "トライセプスキックバック", body: "" }]
    },
    shoulder: {
      url: "",
      title: "サイドレイズ",
      body: "①両手でダンベルを持ち、胸を張る。②脇を開きながら胸より若干前にダンベルを持ち上げる。③肩の高さまで持ち上げたら、1秒キープし、ゆっくりとスタート姿勢に戻る。",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ダンベルショルダープレス", body: "" },
    { id: 2, title: "リアレイズ", body: "" },
    { id: 3, title: "ショルダープレス", body: "" }]
    },
    chest: {
      url: "",
      title: "ダンベルプレス",
      body: "①両手でダンベルを持ちベンチに座り、仰向けになる。②胸を張り脇を開いて腕を伸ばす。③床と並行になるまで肘を曲げ、再び腕を伸ばす。",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "インクラインダンベルプレス", body: "" },
      { id: 2, title: "デクラインダンベルプレス", body: "" },
      { id: 3, title: "ダンベルフライ", body: "" }]
    },
    back: {
      url: "",
      title: "ワンハンドローイング",
      body: "①片手でダンベルを持ち、空いてる片手と、同じ片脚をベンチに乗せ、脚は肩幅に広げる。②胸を張り、腰から首までが真っ直ぐな姿勢で顔は前を向く。③ダンベルを横腹まで引き上げ、ゆっくり戻す。",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ダンベルシュラッグ", body: "" },
      { id: 2, title: "ダンベルスイング", body: "" },
      { id: 3, title: "バックエクステンション", body: "" }]
    },
    stomach: {
      url: "",
      title: "バイシクルクランチ",
      body: "①膝を曲げて座り、膝を90度にする。②②自転車を漕ぐイメージで、上げた膝と反対の肘を合わせるように上半身を捻る。",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "レッグレイズ", body: "" },
      { id: 2, title: "ニーレイズ", body: "" },
      { id: 3, title: "ニートゥチェスト", body: "" }]
    },
    waist: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ハンマーカール", body: "" },
      { id: 2, title: "フレンチプレス", body: "" },
      { id: 3, title: "トライセプスキックバック", body: "" }]
    },
    hip: {
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ハンマーカール", body: "" },
      { id: 2, title: "フレンチプレス", body: "" },
      { id: 3, title: "トライセプスキックバック", body: "" }]
    },
    thighs: {
      // ふともも
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ハンマーカール", body: "" },
      { id: 2, title: "フレンチプレス", body: "" },
      { id: 3, title: "トライセプスキックバック", body: "" }]
    },
    calf: {
      // ふくらはぎ
      url: "",
      title: "ベンチプレス",
      body: "",
      photoUrl: "",
      relationTrainingId: [{ id: 1, title: "ハンマーカール", body: "" },
      { id: 2, title: "フレンチプレス", body: "" },
      { id: 3, title: "トライセプスキックバック", body: "" }]
    },
  };

  const trainingType = {
    muscle: {
      max: "最高重量60%~80%",
      set: "10~12回×3set",
      rest: "2分",
    },
    power: {
      max: "最高重量90%以上",
      set: "1~3回×3set",
      rest: "3分",
    },
    stamina: {
      max: "最高重量40%~50%",
      set: "15~20回×3set",
      rest: "1分",
    },
  };

  const [data, setData] = useState({
    userStatus: {
      gender: "男性",
      height: 170,
      weight: 60,
      parts: [],
      target: "power",
    },
    isSet: false,
  });
  return (
    <div className="App" style={{ backgroundColor: "beige", height: "100vh" }}>
      {!data.isSet ? (
        <>
          <div style={{ width: "100%" }}>title</div>
          <div style={{ width: "100%" }}>説明文</div>
          <Box
            style={{
              backgroundColor: "white",
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Form setDataAction={setData} />
          </Box>
        </>
      ) : (
        <div>
          result
          <div>{data.userStatus.gender}</div>
          <div>BMI</div>
          <Button
            type="submit"
            onClick={() => setData({ ...data, isSet: false })}
            variant="contained"
          >
            診断に戻る
          </Button>
        </div>
      )}
      <div
        style={{
          bottom: 0,
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        footer
      </div>
    </div>
  );
}

export default App;
