import { View, Text, ViewProps } from "@tarojs/components";


interface Item {
  name: string;
  status: string;
}

interface DisplaySimpleProps extends ViewProps {
  isParallel: boolean;

  items: Item[];

}

function DisplaySimple(props: DisplaySimpleProps) {
  console.log(props.items.length);
    const {isParallel,items,...restProps} = props

  return (
    <View
       style={{
        display: "flex",
        flexDirection: props.isParallel ? "row" : "column",
        justifyContent: "center",
      }}
      {...restProps}
    >
      {props.items.map((fundis) => {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   margin:10,
              borderBottomWidth:
                fundis.name !== props.items[props.items.length - 1].name
                  ? props.isParallel
                    ? 0
                    : 1
                  : 0,
              borderBottomColor: "#e2e2e2",
              borderBottomStyle: "solid",
              borderRightWidth:
                fundis.name !== props.items[props.items.length - 1].name
                  ? props.isParallel
                    ? 1
                    : 0
                  : 0,
              borderRightColor: "#e2e2e2",
              borderRightStyle: "solid",
              width: 70,
              height: 60,
              backgroundColor:'#fafafa'
            }}
          >
            <View style={{height:30,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text
              style={{
                textAlign: "center",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#a8a8a8"
              }}
            >
              {fundis.name}
            </Text>
            </View>
            <View style={{height:30,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text
              style={{
                textAlign: "center",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {fundis.status}
            </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default DisplaySimple