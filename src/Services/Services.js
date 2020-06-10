
class Services {
    async getImages(){
        let data = await fetch(`https://api.unsplash.com/collections${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error=> null);
        console.log(data);
        return data;
    }

    async deleteImage(id){
        let data = await fetch(`https://api.unsplash.com/collections/${id}${process.env.REACT_APP_API_KEY}`,{method:'delete'})
        .then(res => res.json())
        .then(data => data)
        .catch(error=> null);
        console.log(data);
        return data;
    }
}

export default new Services();