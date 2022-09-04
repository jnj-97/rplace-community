import logo from '../images/Magikarppixelart.jpg'

const Header = () => {

    return ( <div><header className="w-screen h-32 bg-slate-200"><img className="float-left h-28 w-28 mt-2 ml-5" src={logo}/><button className="float-right p-3 mt-8 text-xl rounded-full bg-red-200"><a href="/">Login</a></button><button className="float-right mt-8 mr-3 rounded-full p-3 text-xl bg-red-300"><a href="/Canvas">Canvas</a></button></header></div> );
}
 
export default Header;