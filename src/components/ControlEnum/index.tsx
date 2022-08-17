import {
  View,

  Image,
  Text,
  Picker,
  PickerSelectorProps
} from "@tarojs/components";
import {useState} from 'react'

interface ControlEnumProps extends PickerSelectorProps {
  title: string;
}

function ControlEnum(props: ControlEnumProps) {
  const { title,onChange, ...resProps } = props;
const [curEnum,usecurEnum]=useState(resProps.range[0])

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 80,
        alignItems: "center",
        position: "relative"
      }}
    >
      <Picker 
      onChange={(e)=>{
usecurEnum(resProps.range[e.detail.value]);
      }}
      {...resProps}>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 20 }}>
          <Image
            src={require("../../assets/setup.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <View>
            <Text>{title}</Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            right: 20,
  
            top: 30,
            display:'flex',
            flexDirection:'row'
          }}
        >
            <View style={{display:'flex',alignItems:'center'}}>
                {/* @ts-ignore  */}
            <Text style={{fontSize:20}}>{curEnum}</Text>
            </View>
            <View style={{display:'flex',alignItems:'center'}}>
          <Image
            src={require("../../assets/arrow.png")}
            style={{
              height: 16,
              width: 16,
            }}
          ></Image>
          </View>
        </View>
      </Picker>
    </View>
  );
}

export default ControlEnum;
