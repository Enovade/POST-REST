const axios = require('axios');
const core = require('@actions/core');

const url = core.getInput('url', { required: true });
axios.get(url)
.then(res => {
    console.log(res.data)
    let myData = JSON.stringify(res.data)
    core.setOutput('jawapan', myData);
    //core.setOutput('jawapan', 'cubaan');
})
.catch(err => {
    console.error(err); 
})