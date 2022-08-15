import { View, Text, ViewProps } from "@tarojs/components";

interface Item {
  title: string;
  status: string;
  subtitle: string;
}

interface DisplayDetailProps extends ViewProps {
  items: Item;
}

function DisplayDetail(props: DisplayDetailProps) {
  const { items, ...restProps } = props;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent:'center',
      
        height: 210
      }}
      {...restProps}
    >
        
      <View
        style={{
          height: 70,
          width:'100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Text
          style={{
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "#a8a8a8"
          }}
        >
          {props.items.title}
        </Text>
      </View>
      <View
        style={{
          height: 70,
          width:'100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          {props.items.status}
        </Text>
      </View>
      <View
        style={{
          height: 70,
          width:'100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "#a8a8a8"
          }}
        >
          {props.items.subtitle}
        </Text>
      </View>
    </View>
  );
}

export default DisplayDetail;
