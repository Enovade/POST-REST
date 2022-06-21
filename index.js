const axios = require('axios');
const core = require('@actions/core');
//const github = require('@actions/github');

const url = core.getInput('url', { required: true });
//const url = "http://202.165.24.140:1337/jpns?jenis=pengumuman"
//axios.get(url,params)
axios.get(url)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err); 
})