import { makeAutoObservable } from "mobx";

class Store {
    homePagePosts = []
    count = 0

    constructor(){
       makeAutoObservable(this)
    }

    pushHomePagePost(post){
        console.log(this.homePagePosts[0]);
        this.homePagePosts.push(post);
    }
}

const storeInstance = new Store()
export default storeInstance;