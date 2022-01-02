import {Component} from "react";

export default class List extends Component {

constructor() {
   super()
   this.state={
      userInput: '' ,
      groceryList: []

   }

}

onChangeEvent(e){

   this.setState({
     userInput: e,
   })
}



addItem(input){
   if (input === "") {
      alert("Enter the item")
   }
   else{
   let listArray = this.state.groceryList
   listArray.push(input)
  this.setState({
    userInput: "",
   groceryList: listArray
  }) }
//   console.log(this.state.groceryList)

}
crossedItem(e) {

   const li = e.target
   li.classList.toggle("crossed")
}

deleteAllItems(e) {
   console.log(e)
   this.setState ({
      groceryList: []}
   );

}
onSubmit(e){
   e.preventDefault();
}
render() {
    return(
     <div className="centerCont">
        <form onSubmit={this.onSubmit}>
     <input type="text" 
      placeholder="I want to buy..." 
      className="textInput" 
       onChange ={(e) => {this.onChangeEvent(e.target.value)}}
       value={this.state.userInput}
       ></input>
     <button className="btn" onClick={(e) => {this.addItem(this.state.userInput)}}>Add</button>
     <button className="btn" onClick={ (e)=> {this.deleteAllItems(e)}}>Delete All</button>

     <div>
        <ul>
          {this.state.groceryList.map( (item, index) => ( 

            <li key ={index} onClick ={(e) => {this.crossedItem(e)}}>{item}</li>
          ))}
        </ul>
      </div>
      </form>
     </div>


    )
}




}