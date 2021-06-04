import  Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Admin from './components/admin';
import { Provider } from "./Context";
import { Actions } from "./Actions";
import { AppContext } from "./Context";
import { useContext, useState } from "react";

const App = () => {
  const data = Actions();
  console.log(data.active);
  let kt="";
  data.active.map((item) => {
    if (item.activity_name==="admin"){
      kt="admin";
    }else{
      kt=item.activity_name;
    }
  })
  console.log(kt);
  if (kt==="admin"){
  return (
    <Provider value={data}>
    <Admin />
 </Provider>
  );
}
  else {
    return (
      <Provider value={data}>
      <Menu />
      <Footer />
    </Provider>
    );
}
}
export default App;
