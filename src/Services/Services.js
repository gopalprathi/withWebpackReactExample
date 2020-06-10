
class Services {
    async getImages(){
        console.log('key: '+process.env.REACT_APP_API_KEY);
        let data = await fetch(`https://api.unsplash.com/collections/?client_id=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error=> null);
        console.log(data);
        return data;
    }

    async deleteImage(id){
        let data = await fetch(`https://api.unsplash.com/collections/${id}/?client_id=${process.env.REACT_APP_API_KEY}`,{method:'delete'})
        .then(res => res.json())
        .then(data => data)
        .catch(error=> null);
        console.log(data);
        return data;
    }
}

export default new Services();