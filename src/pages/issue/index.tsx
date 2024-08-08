import { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';
import LineCharts from '@/components/stackedLine'; // Correctly import the component with a capitalized name
import Taro from '@tarojs/taro';

const Index = () => {

  const [result, setResult] = useState({}); // 1.Declare the result state variable

  async function getBloodTest() { // 2. Create an async function to fetch the data
    await Taro.request({ // 3. await the request
      url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/bloodTest/1',
      method: 'GET',
      success: (res) => {
        let data = res.data.datas;
        const keys = Object.keys(data[0].datas); // Get the keys from the first object in the data array
        const result = {}; 
        keys.map((key) => { // Map over the keys array to create an object with the keys as the properties
          result[key] = [];
        });
        data.map((item) => {  // Map over the data array to create an object with the data as the values
          keys.map((key) => {  // Map over the keys array to push the data to the result object
            result[key].push(item.datas[key]); // Push the data to the result object
          });
        });
        console.log(result);
        setResult(result); // Set the result state variable with the result object
      },
      fail: (err) => {
        console.log('err', err);
      },
    })
  }

  useEffect(() => { // 4. Call the getBloodTest function in the useEffect hook
    getBloodTest();
    // console.log("result", result)
  }, []); // 5. Add an empty dependency array to the useEffect hook#027DCS

  return (
    <View className="index">
      {/* {result ? <LineCharts data={result} /> : <Text>Loading...</Text>} */}
      <LineCharts data={result} />
    </View>
  );
};

export default Index;
