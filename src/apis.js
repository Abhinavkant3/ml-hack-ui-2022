import axios from "axios";

export const sendToDataBricks = async ({payload}) => 
    axios.get('https://api.github.com/repos/tannerlinsley/react-query')
    .then(res =>res.json());