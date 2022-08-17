import { View, Switch, Image, Text } from "@tarojs/components";


interface ConBoolProps {
  title: string;
  subtitle: string;
  switch: boolean;
}

function ControlBool(props: ConBoolProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 80,
        position: "relative"
      }}
    >
      <View
        style={{
          width: "20%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          src={require("../../assets/setup.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          height: "100%"
        }}
      >
        <View
          style={{
            height: 40,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Text>{props.title}</Text>
        </View>
        <View
          style={{
            height: 40,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#a8a8a8" }}>{props.subtitle}</Text>
        </View>
      </View>
      <Switch
        style={{ position: "absolute", right: 5, top: 24 }}
        checked={props.switch}
        onChange={() => {
          props.switch = props.switch === true ? false : true;
        }}
        color={"#2789fb"}
      ></Switch>
    </View>
  );
}

export default ControlBool;
