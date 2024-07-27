import header from '../assets/header.png';
import { useContext } from 'react';
import CardSaveIcon from './CardSaveIcon';
import Search from './Search';

function Header(props){
  const dataContext=useContext(props.context)
  const {lengthsCard,onSearchInput,setValueSearch}=dataContext;
    return(
        <>
        <CardSaveIcon len={lengthsCard}/>
      <header className="header py-5">
      <div className="img-header">
        <img src={header} className="img-img-header"/>
      </div>
        <div className="container">
          <div className="header-body">
            <h1 className="title-header">
              shop food
            </h1>
            <p className="lead">shop food is a website for buy food for you</p>
            <Search onSearchInput={onSearchInput} setValueSearch={setValueSearch}/>
          </div>
          {/* ... */}
          </div>
      </header>
      </>
    );
}
export default Header;