import { Component } from "react";
import { View} from "@tarojs/components";
import "./index.scss";
import "@taroify/core/button/style";
// import Button from "@taroify/core/button"; 
import DisplaySimple from "../../components/DisplaySimple";
import DisplayDetail from "../../components/DisplayDetail";
import ControlBool from "../../components/ControlBool";
import ControlSlider from "../../components/ControlSlider";
import ControlEnum from "../../components/ControlEnum"

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <DisplaySimple isParallel={false} items={[{name:'功能名称1',status:'功能状态1'},{name:'功能名称2',status:'状态2'},{name:'功能名称',status:'状态3'},{name:'功能',status:'状态4'}]}></DisplaySimple>
<DisplayDetail items={{title:'功能名称',status:'--',subtitle:'副标题'}}></DisplayDetail>
<ControlBool title={'功能名称'} subtitle={'副标题'} switch={false}></ControlBool>
<ControlSlider title={'功能名称'} value={10} activeColor={'#2789fb'} blockSize={20}></ControlSlider>

<ControlEnum title={'功能名称'} mode='selector' range={[1,2,3,4,45,34]} onChange={()=>{}}>

</ControlEnum>
      </View>

    );
  }
}
