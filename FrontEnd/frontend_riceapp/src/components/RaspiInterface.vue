<template>
    <div>
      <h1>Rice Application {{ device }}Table</h1>
      <br/>
      <h2>Actual Data</h2>
      <button type="button" Click = "GetRaspiData">Click Me!</button>
      </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            temperature: 1,
            device: "DHT-22 Sensor Interface"       
        };  
    },
    methods:{
        GetRaspiData(){
            axios
            .get('http:localhost:5000/api/sensordata/view')
            .then((response)=> {
                console.log(this.sensordata = response.data.reverse()[0].temperature);
                });
        },
    },
};
</script>