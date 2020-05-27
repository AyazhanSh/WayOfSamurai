
import { rerenderEntreidTree } from "../render";
  let state = {
    
      profilePage: {
        postData: [
            {id: 1, message: "Hello, how are you?", likeCount: 458},
            {id: 2, message: "Hello shalau",  likeCount: 457},
            {id: 3, message: "WOW",  likeCount: 457}
          ],
        newPropsText: "Ayazhan + React"
         

        },
      messagePage: {
        messageData: [
            {id: 1, message: "Yoyo"},
            {id: 2, message: "Hello"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "So so"},
            {id: 5, message: "Hi"}
          ],
          dialogsData: [
            {id: 1, name: "Ayazhan"},
            {id: 2, name: "Aruzhan"},
            {id: 3, name: "Akerke"},
            {id: 4, name: "Sandugash"},
            {id: 5, name: "Karlygash"},
            {id: 6, name: "Madina"},
            {id: 7, name: "Dana"},
            {id: 8, name: "Dina"},
            {id: 9, name: "Meruert"}
          
          ]
        }
     
    
  }

  window.state = state;

  export let addPost = () => {
    let newPost = {
      id: 45,
      message: state.profilePage.newPropsText,
      likeCount: 45
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPropsText = " ";
    rerenderEntreidTree(state);
  }


  export let upDateText = (text) => {
   
    state.profilePage.newPropsText = text;
    rerenderEntreidTree(state);
  }

 


  export default state;