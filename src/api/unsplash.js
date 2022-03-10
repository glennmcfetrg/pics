//axios config for unsplash

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID AnQ7y36H5FchmHhogJ-SCGVFv1ERKc_gSG5g50n_OGs",
  },
});
