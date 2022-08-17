import { View, Slider, Image, Text, SliderProps } from "@tarojs/components";
import {useState} from "react"

interface ConSliderProps extends SliderProps {
  title: string;
}

function ControlSlider(props: ConSliderProps) {
  const { title,value, onChange, ...resProps } = props;
  const[useValue,setuseValue]=useState(value);

  return (
    <View
      style={{
        width: "100%",
        height: 80,
        flexDirection: "column",
        display: "flex"
      }}
      
    >
      <View
        style={{
          width: "100%",
          height: 20,
          flexDirection: "row",
          display: "flex"
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            src={require("../../assets/setup.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5
          }}
        >
          <Text>{props.title}</Text>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5
          }}
        >
          <Text>·</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>{useValue}</Text>
        </View>
      </View>
      <Slider
        value={useValue}

onChanging={(e)=>{

    setuseValue(e.detail.value);
    onChange?.(e)


}}
onChange={(e)=>{
    setuseValue(e.detail.value);
    onChange?.(e)
}}

        {...resProps}
        
      ></Slider>
    </View>
  );
}

export default ControlSlider;
